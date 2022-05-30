
var app = {

    moduleIcons: {
        documents: "text_snippet"
    },

    /**
     *
     */
    menu: null,

    /**
     *
     */
    isInitMenu: false,


    /**
     * @param target
     * @param callback
     */
    swipe: function (target, callback) {

        document.addEventListener('touchstart', handleTouchStart, false);
        document.addEventListener('touchmove', handleTouchMove, false);

        let xDown = null;
        let yDown = null;

        /**
         * @param evt
         */
        function handleTouchStart(evt) {
            xDown = evt.touches[0].clientX;
            yDown = evt.touches[0].clientY;
        }

        /**
         * @param evt
         */
        function handleTouchMove(evt) {
            if ( ! xDown || ! yDown ) {
                return;
            }


            let xUp = evt.touches[0].clientX;
            let yUp = evt.touches[0].clientY;

            let xDiff = xDown - xUp;
            let yDiff = yDown - yUp;

            if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
                if ( xDiff > 0 ) {
                    if (target === evt.target) {
                        callback('left')
                    }
                } else {
                    if (target === evt.target) {
                        callback('right')
                    }
                }
            } else {
                if ( yDiff > 0 ) {
                    if (target === evt.target) {
                        callback('up')
                    }
                } else {
                    if (target === evt.target) {
                        callback('down')
                    }
                }
            }

            xDown = null;
            yDown = null;
        }
    },


    /**
     * Инициализация
     */
    init: function () {

        app.loadingScreen('show');

        // Инициализация кнопок
        let buttons = document.querySelectorAll('.page-app .mdc-button');
        for (let button of buttons) {
            new mdc.ripple.MDCRipple(button);
        }


        if (navigator.platform === 'web') {
            // Share
            $('.page-app .button-share').show().on('click', function () {
                navigator.share({
                    title: 'Сканер документов',
                    text : 'Приложение для сканирования и отправки документов в систему учета для их дальнейшей обработки.',
                    url  : location.protocol + '//' + location.host,
                });
            });
        }

        // Fullscreen
        $('.page-app .button-fullscreen').on('click', app.toggleFullscreen);


        // Установка
        let install = function (event) {
            event.preventDefault();

            let button = $('.page-app .install-button');

            if (event.platforms.includes('web')) {
                button.show();
                button.on('click', function () {
                    event.prompt();
                });
            }

            event.userChoice.then(function(choiceResult) {
                switch (choiceResult.outcome) {
                    case "accepted" :
                        button.hide();
                        break;

                    case "dismissed" :
                        button.css('opacity', '0.7');
                        break;
                }
            });
        }

        if (main.install.event) {
            install(main.install.event);
        } else {
            main.install.promise.then(install);
        }


        // Выход
        $('.page-app .menu-logout').on('click', function () {
            main.confirm('Уверены, что хотите выйти?', '', {
                acceptButtonText: "Да",
                onAccept: function () {
                    auth.clearAccessToken();
                    main.viewPage('auth');
                    $('.page-app > aside .menu-logout').removeClass('mdc-list-item--activated');
                },
                onCancel: function () {
                    $('.page-app > aside .menu-logout').removeClass('mdc-list-item--activated');
                }
            });
        });

        $('.page-app .main-content .container').html('')


        /**
         * Инициализация меню
         */
        function initMenu() {

            if (window.screen.width <= 768) {
                $('.page-app .mdc-drawer').removeClass('mdc-drawer--dismissible');
                $('.page-app .mdc-drawer').addClass('mdc-drawer--modal');
            }

            if (window.screen.width >= 769) {
                $('.page-app .mdc-drawer').addClass('mdc-drawer--open');
            }

            const drawer = new mdc.drawer.MDCDrawer.attachTo(document.querySelector('.page-app .mdc-drawer'));
            drawer.foundation.handleScrimClick = function (){
                drawer.open = false;
            }

            const topAppBar = new mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('.page-app .app-bar'));
            topAppBar.setScrollTarget(document.querySelector('.page-app .main-content'));
            topAppBar.listen('MDCTopAppBar:nav', () => {
                drawer.open = ! drawer.open;
            });


            app.swipe($(".mdc-drawer-swipe-area")[0], function (direction) {
                console.log(direction);
                if (direction === "right") {
                    drawer.open = true;

                } else if (direction === "left") {
                    drawer.open = false;
                }
            });
        }


        let authToken  = auth.getAccessToken();


        $.ajax({
            url: main.options.basePath + '/index.php',
            method: "GET",
            headers: {
                'CORE2M': 'Bearer ' + authToken
            },
            dataType: "json",
            success: function (response) {
                if (typeof response.id !== 'number' ||
                    typeof response.login !== 'string' ||
                    typeof response.system_name !== 'string'
                ) {
                    console.warn(response);
                    main.alert('Ошибка', 'Попробуйте обновить приложение или обратитесь к администратору');

                } else {
                    app.menu = response;
                    app.renderMenu(app.menu);

                    if ( ! app.isInitMenu) {
                        initMenu();
                        app.isInitMenu = true;
                    } else {
                        $('.page-app .mdc-drawer').removeClass('mdc-drawer--open');
                    }

                    app.loadingScreen('hide');
                    app.load(location.hash.substr(1));
                }
            },
            error: function (response) {
                if (response.status === 403) {
                    auth.clearAccessToken();
                    main.viewPage('auth');

                } else if (response.status === 0) {
                    main.alert('Ошибка', 'Проверьте подключение к интернету');

                } else {
                    main.alert('Ошибка', 'Обновите приложение или обратитесь к администратору');
                }
            }
        });
    },


    /**
     *
     */
    toggleFullscreen: function () {

        if ( ! document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    },


    /**
     * Загрузка содержимого модуля
     * @param url
     */
    load: function (url) {

        app.preloader('show');

        let params = main.getParams(url);

        if (params.module) {
            app.setActiveModule(params.module);
        } else {
            let modules = Object.values(app.menu.modules);
            if (modules.length > 0) {
                app.setActiveModule(modules[0].module_id);

                url = '/' + modules[0].module_id
            }
        }


        let authToken = auth.getAccessToken();

        $.ajax({
            url: main.options.basePath + url,
            method: "GET",
            headers: {
                'CORE2M': 'Bearer ' + authToken
            },
            success: function (response) {
                app.preloader('hide');

                $('.page-app .main-content .container').html(response)
                    .css({
                        'opacity': '0',
                        'margin-top': '15px'
                    })
                    .animate(
                        {
                            marginTop: 0,
                            opacity: 1,
                        },
                        {
                            duration: 235,
                            specialEasing: {
                                width: "linear",
                                height: "easeOutBounce"
                            },
                            complete: function() {
                                $( this ).css({
                                    'opacity': '',
                                    'margin-top': ''
                                })
                            }
                        }
                    );
            },
            error: function (response) {
                app.preloader('hide');

                if (response.status === 403) {
                    auth.clearAccessToken();
                    main.viewPage('auth');

                } else if (response.status === 0) {
                    main.alert('Ошибка', 'Проверьте подключение к интернету');

                } else {
                    main.alert('Ошибка', 'Обновите приложение или обратитесь к администратору');
                }
            }
        });
    },


    /**
     *
     * @param options
     */
    renderMenu: function (options) {

        if (options.avatar) {
            $('.page-app > aside > .mdc-drawer__header img').attr('src', options.avatar).show();
        }
        if (options.name) {
            $('.page-app > aside > .mdc-drawer__header .mdc-drawer__title').text($.trim(options.name));
        }
        if (options.login) {
            $('.page-app > aside > .mdc-drawer__header .mdc-drawer__subtitle').text($.trim(options.login));
        }

        $('.page-app > header .mdc-top-app-bar__title').text(options.system_name);

        // Удаление бывших модулей
        $('.page-app > aside .mdc-list .core-module').remove();
        $('.page-app > aside .mdc-list .mdc-list-divider').remove();

        if (Object.values(options.modules).length > 0) {
            let params = main.getParams();

            $.each(options.modules, function (key, module) {

                if (typeof module.m_name !== 'string' || ! module.m_name ||
                    typeof module.module_id !== 'string' || ! module.module_id
                ) {
                    main.notify('Не удалось показать некоторые модули из за ошибок!', {"textColor" : '#ff5722'});
                    return true;
                }

                let moduleName  = $.trim(module.module_id);
                let moduleTitle = $.trim(module.m_name);
                let iconName    = '';
                let activeClass = '';
                let activeAttr  = '';

                if (typeof app.moduleIcons[moduleName] === 'string') {
                    iconName = app.moduleIcons[moduleName];
                }

                if (params.module && params.module === moduleName) {
                    activeClass = 'mdc-list-item--activated';
                    activeAttr  = 'tabindex="0"';
                } else {
                    activeAttr  = 'tabindex="1"';
                }

                $('.page-app > aside .mdc-list').prepend(
                    '<a class="mdc-list-item core-module core-module-' + moduleName + ' ' + activeClass + '" ' + activeAttr + '' +
                       'onclick="if (location.hash === \'#/' + moduleName + '/index\') app.load(\'/' + moduleName + '/index\');"' +
                       'href="#/' + moduleName + '/index">' +
                         '<span class="mdc-list-item__ripple"></span>' +
                         '<i class="material-icons mdc-list-item__graphic" aria-hidden="true">' + iconName + '</i>' +
                         '<span class="mdc-list-item__text">' +  moduleTitle + '</span>' +
                    '</a>'
                );
            });
        }

        if (Object.values(options.modules).length > 1) {
            $('.page-app > aside .mdc-list .menu-logout').before('<hr class="mdc-list-divider">');
        }
    },


    /**
     *
     * @param moduleName
     */
    setActiveModule: function (moduleName) {

        $('.page-app > aside .core-module').removeClass('mdc-list-item--activated');
        $('.page-app > aside .core-module-' + moduleName).addClass('mdc-list-item--activated');
    },


    /**
     * @param action
     */
    preloader: function(action) {

        switch (action) {
            case 'show':
                if ($('#preloader')[0]) {
                    return false;
                }

                $('.page-app > header').append(
                    '<div id="preloader">' +
                    '<div role="progressbar" class="mdc-linear-progress preloader-progress"' +
                    'aria-label="Example Progress Bar" aria-valuemin="0" aria-valuemax="1" aria-valuenow="0">' +
                    '<div class="mdc-linear-progress__buffer">' +
                    '<div class="mdc-linear-progress__buffer-bar"></div>' +
                    '<div class="mdc-linear-progress__buffer-dots"></div>' +
                    '</div>' +
                    '<div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">' +
                    '<span class="mdc-linear-progress__bar-inner"></span>' +
                    '</div>' +
                    '<div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">' +
                    '<span class="mdc-linear-progress__bar-inner"></span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="preloader-block"></div>' +
                    '</div>'
                );

                let preloaderElement = $('#preloader .preloader-progress');
                let linearProgress   = new mdc.linearProgress.MDCLinearProgress(preloaderElement[0]);
                linearProgress.determinate = false;
                break;

            case 'hide':
                $('#preloader').remove();
                break;
        }
    },


    /**
     * @param action
     * @returns {boolean}
     */
    loadingScreen: function(action) {

        switch (action) {
            case 'show':
                if ($('#loading-screen')[0]) {
                    return false;
                }

                $('.page-app').prepend(
                    '<div id="loading-screen">' +
                        '<div class="loading-lock"></div>' +
                        '<div class="loading-block">' +
                            '<div class="mdc-circular-progress" style="width:96px;height:48px;" role="progressbar" aria-label="Example Progress Bar" aria-valuemin="0" aria-valuemax="1">' +
                                '<div class="mdc-circular-progress__determinate-container">' +
                                    '<svg class="mdc-circular-progress__determinate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">' +
                                        '<circle class="mdc-circular-progress__determinate-track" cx="24" cy="24" r="18" stroke-width="4"/>' +
                                        '<circle class="mdc-circular-progress__determinate-circle" cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="113.097" stroke-width="4"/>' +
                                    '</svg>' +
                                '</div>' +
                                '<div class="mdc-circular-progress__indeterminate-container">' +
                                    '<div class="mdc-circular-progress__spinner-layer">' +
                                        '<div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">' +
                                            '<svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">' +
                                                '<circle cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="56.549" stroke-width="4"/>' +
                                            '</svg>' +
                                        '</div>' +
                                        '<div class="mdc-circular-progress__gap-patch">' +
                                            '<svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">' +
                                                '<circle cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="56.549" stroke-width="3.2"/>' +
                                            '</svg>' +
                                        '</div>' +
                                        '<div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">' +
                                            '<svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">' +
                                                '<circle cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="56.549" stroke-width="4"/>' +
                                            '</svg>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>'
                );

                let element            = $('#loading-screen .mdc-circular-progress');
                const circularProgress = new mdc.circularProgress.MDCCircularProgress(element[0]);
                circularProgress.determinate = false;
                circularProgress.progress = 0;
                break;

            case 'hide':
                $('#loading-screen').fadeOut('fast', function () {
                    $('#loading-screen').remove();
                });
                break;
        }
    }
}


$(function () {

    main.on('hashchange', function () {
        if ($('.page-app.active')[0]) {
            app.load(location.hash.substr(1));
        }
    });
});
