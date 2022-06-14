
var pageMenu = {

    /**
     *
     */
    user: null,

    system: null,

    modules: null,

    /**
     *
     */
    isInitMenu: false,


    _tpl:
        '<header class="mdc-top-app-bar mdc-top-app-bar--fixed app-bar">' +
            '<div class="mdc-top-app-bar__row">' +
                '<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">' +
                    '<button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button open-menu" aria-label="Open navigation menu">menu</button>' +
                    '<span class="mdc-top-app-bar__title"></span>' +
                '</section>' +
                '<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">' +
                    '<button class="material-icons mdc-top-app-bar__action-item mdc-icon-button button-fullscreen">fullscreen</button>' +
                    '<button class="material-icons mdc-top-app-bar__action-item mdc-icon-button button-share">share</button>' +
                    '<button class="material-icons mdc-top-app-bar__action-item mdc-icon-button install-button" ' +
                            'style="display: none">mobile_friendly</button>' +

                    '<button class="material-icons mdc-top-app-bar__action-item mdc-icon-button button-profile-menu">more_vert</button>' +

                    '<div id="profile-menu" class="mdc-menu-surface--anchor">' +
                        '<div class="mdc-menu mdc-menu-surface">' +
                    '<ul class="mdc-list" role="menu" aria-hidden="false" aria-orientation="vertical" tabindex="-1">' +
                        '<li class="mdc-list-item" role="menuitem">' +
                            '<span class="mdc-list-item__ripple"></span>' +
                            '<span class="mdc-list-item__text">A Menu Item</span>' +
                        '</li>' +
                        '<li class="mdc-list-item menu-logout" role="menuitem">' +
                            '<span class="mdc-list-item__ripple"></span>' +
                            '<i class="material-icons mdc-list-item__graphic" aria-hidden="true">logout</i>' +
                            '<span class="mdc-list-item__text">Выйти</span>' +
                        '</li>' +
                    '</ul>' +
                    '</div>' +
                    '</div>' +
                '</section>' +
            '</div>' +
        '</header>' +
        '<aside class="mdc-drawer mdc-drawer--dismissible">' +
            '<div class="mdc-drawer__content">' +
                '<div class="mdc-drawer__header">' +
                    '<span class="material-icons">home</span>' +
                    '<h3 class="system-title"></h3>' +
                '</div>' +
                '<ul class="menu-list level-1"></ul>' +
            '</div>' +
        '</aside>' +
        '<div class="mdc-drawer-scrim"></div>' +
        '<div class="mdc-drawer-swipe-area"></div>' +
        '<div class="mdc-drawer-app-content">' +
            '<main class="main-content">' +
                '<div class="container"></div>' +
            '</main>' +
        '</div>',


    /**
     * Получение страницы кабинета
     * @returns {*}
     */
    getPageContent: function () {

        return ejs.render(this._tpl, {});
    },


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

        pageMenu.loadingScreen('show');

        // Инициализация кнопок
        let buttons = document.querySelectorAll('.page-menu .mdc-button');
        for (let button of buttons) {
            new mdc.ripple.MDCRipple(button);
        }


        if (navigator.platform === 'web') {
            // Share
            $('.page-menu .button-share').show().on('click', function () {
                navigator.share({
                    title: 'Сканер документов',
                    text : 'Приложение для сканирования и отправки документов в систему учета для их дальнейшей обработки.',
                    url  : location.protocol + '//' + location.host,
                });
            });
        }

        // Fullscreen
        $('.page-menu .button-fullscreen').on('click', pageMenu.toggleFullscreen);



        let element       = $('#profile-menu .mdc-menu-surface');
        const profileMenu = new mdc.menu.MDCMenu(element[0]);

        // menu
        $('.page-menu .button-profile-menu').on('click', function () {
            profileMenu.open = true;
        });


        // Установка
        let install = function (event) {
            event.preventDefault();

            let button = $('.page-menu .install-button');

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

        if (coreMain.install.event) {
            install(coreMain.install.event);
        } else {
            coreMain.install.promise.then(install);
        }


        // Выход
        $('.page-menu .menu-logout').on('click', function () {
            CoreUI.confirm.warning('Уверены, что хотите выйти?', '', {
                acceptButtonText: "Да",
                onAccept: function () {
                    pageAuth.logout();
                },
                onCancel: function () {
                    $('.page-menu > aside .menu-logout').removeClass('mdc-list-item--activated');
                }
            });
        });

        $('.page-menu .main-content .container').html('')


        /**
         * Инициализация меню
         */
        function initMenu() {

            if (window.screen.width <= 768) {
                $('.page-menu .mdc-drawer').removeClass('mdc-drawer--dismissible');
                $('.page-menu .mdc-drawer').addClass('mdc-drawer--modal');
            }

            if (window.screen.width >= 769) {
                $('.page-menu .mdc-drawer').addClass('mdc-drawer--open');
            }

            const drawer = new mdc.drawer.MDCDrawer.attachTo(document.querySelector('.page-menu .mdc-drawer'));
            drawer.foundation.handleScrimClick = function (){
                drawer.open = false;
            }

            const topAppBar = new mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('.page-menu .app-bar'));
            topAppBar.setScrollTarget(document.querySelector('.page-menu .main-content'));
            topAppBar.listen('MDCTopAppBar:nav', () => {
                drawer.open = ! drawer.open;
            });


            pageMenu.swipe($(".mdc-drawer-swipe-area")[0], function (direction) {
                console.log(direction);
                if (direction === "right") {
                    drawer.open = true;

                } else if (direction === "left") {
                    drawer.open = false;
                }
            });
        }


        let accessToken = coreTokens.getAccessToken();


        $.ajax({
            url: coreMain.options.basePath + '/cabinet',
            method: "GET",
            headers: {
                'Access-Token': accessToken
            },
            dataType: "json",
            success: function (response) {
                if (typeof response.user !== 'object' ||
                    typeof response.user.id !== 'number' ||
                    typeof response.user.login !== 'string' ||
                    typeof response.user.name !== 'string' ||
                    typeof response.user.avatar !== 'string' ||
                    typeof response.system !== 'object' ||
                    typeof response.system.name !== 'string' ||
                    typeof response.modules !== 'object'
                ) {
                    console.warn(response);
                    CoreUI.alert.danger('Ошибка', 'Попробуйте обновить приложение или обратитесь к администратору');

                } else {
                    pageMenu.user    = response.user;
                    pageMenu.system  = response.system;
                    pageMenu.modules = response.modules;

                    pageMenu.renderMenu();

                    if ( ! pageMenu.isInitMenu) {
                        initMenu();
                        pageMenu.isInitMenu = true;
                    } else {
                        $('.page-menu .mdc-drawer').removeClass('mdc-drawer--open');
                    }

                    pageMenu.loadingScreen('hide');

                    let uri = location.hash.substr(1) ? '/mod' + location.hash.substr(1) : '';

                    pageMenu.load(uri);
                }
            },
            error: function (response) {
                if (response.status === 403) {
                    coreTokens.clearAccessToken();
                    coreMain.viewPage('auth');

                } else if (response.status === 0) {
                    CoreUI.alert.danger('Ошибка', 'Проверьте подключение к интернету');

                } else {
                    CoreUI.alert.danger('Ошибка', 'Обновите приложение или обратитесь к администратору');
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

        pageMenu.preloader('show');

        let params = coreTools.getParams(url);

        if (params.module) {
            pageMenu.setActiveModule(params.module);
        } else {
            let modules = Object.values(pageMenu.modules);
            if (modules.length > 0) {
                pageMenu.setActiveModule(modules[0].name);

                url = '/mod/' + modules[0].name + '/index'
            }
        }



        let accessToken = coreTokens.getAccessToken();

        $.ajax({
            url: coreMain.options.basePath + url,
            method: "GET",
            headers: {
                'Access-Token': accessToken
            },
            success: function (response) {
                pageMenu.preloader('hide');

                $('.page-menu .main-content .container').html(response)
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
                pageMenu.preloader('hide');

                if (response.status === 403) {
                    coreTokens.clearAccessToken();
                    coreMain.viewPage('auth');

                } else if (response.status === 0) {
                    CoreUI.alert.danger('Ошибка', 'Проверьте подключение к интернету');

                } else {
                    CoreUI.alert.danger('Ошибка', 'Обновите приложение или обратитесь к администратору');
                }
            }
        });
    },


    /**
     *
     */
    renderMenu: function () {

        if (pageMenu.user.avatar) {
            $('.page-menu > aside > .mdc-drawer__header img').attr('src', pageMenu.user.avatar).show();
        }
        if (pageMenu.user.name) {
            $('.page-menu > aside > .mdc-drawer__header .mdc-drawer__title').text($.trim(pageMenu.user.name));
        }
        if (pageMenu.user.login) {
            $('.page-menu > aside > .mdc-drawer__header .mdc-drawer__subtitle').text($.trim(pageMenu.user.login));
        }

        $('.page-menu .system-title').text(pageMenu.system.name);

        if (Object.values(pageMenu.modules).length > 0) {
            let params = coreTools.getParams();

            $.each(pageMenu.modules, function (key, module) {

                if (typeof module.name !== 'string' || ! module.name ||
                    typeof module.title !== 'string' || ! module.title
                ) {
                    CoreUI.notify.danger('Не удалось показать некоторые модули из за ошибок!');
                    return true;
                }

                let moduleName    = $.trim(module.name);
                let moduleTitle   = $.trim(module.title);
                let iconName      = $.trim(module.icon);
                let moduleClasses = '';
                let indexClasses  = '';
                let activeAttr    = '';
                let nestedList    = '';
                let nestedListBtn = '';
                let iconContent   = '';

                if (params.module && params.module === moduleName) {
                    moduleClasses = 'menu-module--activated menu-item-nested-open';
                    activeAttr    = 'tabindex="0"';

                    if (params.section && params.section === 'index') {
                        indexClasses = 'menu-module-section--activated';
                    }

                } else {
                    activeAttr  = 'tabindex="1"';
                }

                if (iconName) {
                    iconContent = '<i class="material-icons menu-list-item__graphic">' + iconName + '</i>';
                }


                if ( module.sections && module.sections.length > 0) {
                    let sectionLink = '';
                    moduleClasses  += ' menu-item-nested';
                    nestedListBtn   = '<button class="menu-icon-button material-icons mdc-ripple-surface">arrow_drop_down</button>';
                    nestedList     += '<ul class="menu-list level-2">';

                    $.each(module.sections, function (key, section) {

                        let sectionClasses = '';

                        if (params.module &&
                            params.module === moduleName &&
                            params.section &&
                            params.section === section.name
                        ) {
                            sectionClasses += 'menu-module-section--activated';
                        }

                        sectionLink = moduleName + '/' + section.name;
                        nestedList +=
                            '<li class="menu-list-item core-module-section core-module-' + moduleName + '-' + section.name + ' ' + sectionClasses + '">' +
                                '<a onclick="if (location.hash === \'#/' + sectionLink + '\') pageMenu.load(\'/mod/' + sectionLink + '\');" ' +
                                    'href="#/' + sectionLink + '" class="mdc-ripple-surface">' +
                                    '<span class="menu-list-item__text">' +  section.title + '</span>' +
                                '</a>' +
                            '</li>'
                    });

                    nestedList += '</ul>';
                }

                $('.page-menu > aside .menu-list.level-1').append(
                    '<li class="menu-list-item core-module core-module-' + moduleName + ' ' + moduleClasses + '" ' + activeAttr + '>' +
                        '<div class="item-control ' + indexClasses + '">' +
                            '<a onclick="if (location.hash === \'#/' + moduleName + '/index\') pageMenu.load(\'/mod/' + moduleName + '/index\');" ' +
                               'href="#/' + moduleName + '/index" class="mdc-ripple-surface">' +
                                 iconContent +
                                 '<span class="menu-list-item__text">' +  moduleTitle + '</span>' +
                            '</a>' +
                            nestedListBtn +
                        '</div>' +
                        nestedList +
                    '</li>'
                );
            });


            let menuItems = document.querySelectorAll('.page-menu .menu-list-item a');
            for (let menuItem of menuItems) {
                new mdc.ripple.MDCRipple(menuItem);
            }

            let buttons = document.querySelectorAll('.page-menu .menu-list-item .menu-icon-button');
            for (let button of buttons) {
                new mdc.ripple.MDCRipple(button);
            }
        }
    },


    /**
     *
     * @param moduleName
     */
    setActiveModule: function (moduleName) {

        $('.page-menu > aside .core-module').removeClass('mdc-list-item--activated');
        $('.page-menu > aside .core-module-' + moduleName).addClass('mdc-list-item--activated');
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

                $('.page-menu > header').append(
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

                $('.page-menu').prepend(
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

    coreMain.on('hashchange', function () {
        if ($('.page-menu.active')[0]) {
            pageMenu.load(location.hash.substr(1));
        }
    });
});
