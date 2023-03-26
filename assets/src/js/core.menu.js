var coreMenu = {

    _user: null,
    _system: null,
    _modules: null,


    /**
     * Получение страницы кабинета
     * @returns {*}
     */
    getPageContent: function () {

        return coreTemplates['menu/main.html'];
    },


    /**
     * Инициализация
     */
    init: function () {

        // Нужно для первого открытия страницы
        if (window.screen.width > 600 && localStorage.getItem('core3_drawer_toggle') === '1') {
            $('.page-menu').addClass('drawer-toggle');
            $('.page-menu .menu-drawer').css('transition', 'none 0s ease 0s');
            $('.page-menu .mdc-top-app-bar').css('transition', 'none 0s ease 0s');
        }

        coreMenu.preloader.show();

        // Инициализация кнопок
        let buttons = document.querySelectorAll('.page-menu .mdc-button');
        for (let button of buttons) {
            new mdc.ripple.MDCRipple(button);
        }


        coreMenu._initInstall();

        $('.page-menu .main-content .main-wrapper').html('')

        // Добавление токена при любом ajax запросе
        $(document).ajaxSend(function(event, jqxhr, settings ) {
            if (settings.url.indexOf(settings.url) === 0) {
                let accessToken = coreTokens.getAccessToken();

                if (accessToken) {
                    jqxhr.setRequestHeader('Access-Token', accessToken);
                }
            }
        });


        $.ajax({
            url: coreMain.options.basePath + '/cabinet',
            method: "GET",
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
                    CoreUI.alert.danger('Ошибка', 'Попробуйте обновить страницу или обратитесь к администратору');

                } else {
                    coreMenu._user    = response.user;
                    coreMenu._system  = response.system;
                    coreMenu._modules = response.modules;

                    coreMenu._renderMenu();
                    coreMenu.preloader.hide();

                    let uri = location.hash.substring(1) !== '' && location.hash.substring(1) !== '/'
                        ? '/mod' + location.hash.substring(1)
                        : '/home';

                    coreMenu.load(uri);
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

        url = url || '/home';

        coreMenu.preloader.show();

        $.ajax({
            url: coreMain.options.basePath + url,
            method: "GET",
            success: function (response, textStatus, jqXHR) {
                coreMenu.preloader.hide();

                let params = coreTools.getParams(url);
                coreMenu._setActiveModule(params.module, params.section);

                let contentType = jqXHR.getResponseHeader('Content-type');
                let content     = '';
                let callback    = null;

                // Обработка json
                if (/^application\/json($|$)/.test(contentType) &&
                    typeof response === 'object'
                ) {
                    try {
                        let result = coreMenu._renderContent(response);
                        content  = result.content;
                        callback = typeof result.callback === 'function' ? result.callback : null;

                    } catch (e) {
                        content = e.message;
                    }

                } else {
                    content = response;
                }

                $('.page-menu .main-content .main-wrapper').html(content)
                    .css({ 'opacity': '0', 'margin-top': '15px' })
                    .animate(
                        { marginTop: 0, opacity: 1, },
                        {
                            duration: 235,
                            specialEasing: { width: "linear", height: "easeOutBounce" },
                            complete: function() {
                                $(this).css({ 'opacity': '', 'margin-top': '' })
                            }
                        }
                    );

                if (typeof callback === 'function') {
                    callback();
                }
            },
            error: function (response) {
                coreMenu.preloader.hide();

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
     * @param action
     * @param options
     * @returns {boolean}
     */
    loader: {

        /**
         * @param options
         */
        show: function (options) {
            if ($('#loader')[0]) {
                return false;
            }

            options = typeof options === 'object' ? options : {};

            $('.page-menu > header').append(coreTemplates['menu/loader.html']);

            let loaderElement = $('#loader .loader-progress');
            let linearProgress   = new mdc['linear-progress'].MDCLinearProgress(loaderElement[0]);
            linearProgress.determinate = false;
        },


        /**
         *
         */
        hide: function () {
            $('#loader').remove();
        }
    },


    /**
     * @param action
     * @param options
     * @returns {boolean}
     */
    preloader: {

        /**
         * @param options
         * @returns {boolean}
         */
        show: function (options) {
            if ($('#preloader')[0]) {
                return false;
            }

            options = typeof options === 'object' ? options : {};

            $('.page-menu').prepend(ejs.render(coreTemplates['menu/preloader.html'], {
                text: options.text || 'Загрузка...'
            }));

            let element            = $('#preloader .mdc-circular-progress');
            const circularProgress = new mdc['circular-progress'].MDCCircularProgress(element[0]);
            circularProgress.determinate = false;
            circularProgress.progress = 0;
        },


        /**
         *
         */
        hide: function () {

            $('#preloader').fadeOut('fast', function () {
                $(this).remove();
            });
        }
    },


    /**
     * @param data
     * @private
     */
    _renderContent: function (data) {

        let result = {
            content: "",
            callback: null,
        };
        let alloyComponents = [
            'coreui.table',
            'coreui.form',
            'coreui.layout',
            'coreui.panel',
            'coreui.tabs',
            'coreui.alert',
        ];

        if ( ! Array.isArray(data) &&
            data.hasOwnProperty('component') &&
            alloyComponents.indexOf(data.component) >= 0
        ) {
            switch (data.component) {
                case 'coreui.table':
                case 'coreui.form':
                case 'coreui.layout':
                case 'coreui.panel':
                case 'coreui.tabs':
                case 'coreui.alert':
                    let name     = data.component.split('.')[1];
                    let instance = CoreUI[name].init(data);
                    result.content  = instance.render();
                    result.callback = instance.initEvents;
                    break;
            }

        } else {
            result.content = JSON.stringify(data);
        }

        return result;
    },


    /**
     *
     */
    _renderMenu: function () {

        $('.page-menu .system-title').text(coreMenu._system.name);

        if (Object.values(coreMenu._modules).length > 0) {
            let params = coreTools.getParams();

            $.each(coreMenu._modules, function (key, module) {
                if (typeof module.name !== 'string' || ! module.name ||
                    typeof module.title !== 'string' || ! module.title
                ) {
                    CoreUI.notify.danger('Не удалось показать некоторые модули из за ошибок!');
                    return true;
                }

                module.index = 'index';


                if ( ! module.isset_index_page && module.sections.length > 0) {
                    $.each(module.sections, function (key, section) {
                        module.index = section.name;
                        return false;
                    });
                }

                $('.page-menu > aside .menu-list.level-1').append(ejs.render(coreTemplates['menu/module.html'], {
                    module: module
                }));
            });


            coreMenu._setActiveModule(params.module, params.section);


            let menuItems = document.querySelectorAll('.page-menu .menu-list-item a');
            for (let menuItem of menuItems) {
                new mdc.ripple.MDCRipple(menuItem);

                $(menuItem).on('click', function (event) {
                    if (event.button === 0 && ! event.ctrlKey) {
                        let module  = $(this).data('module');
                        let section = $(this).data('section');

                        if (window.screen.width < 600) {
                            coreMenu._drawerToggle();
                        }

                        coreMenu.load('/mod/' + module + '/' + section);
                    }
                });
            }
            let buttons = document.querySelectorAll('.page-menu .menu-list-item .menu-icon-button');
            for (let button of buttons) {
                new mdc.ripple.MDCRipple(button);
                $(button).on('click', function () {
                    $(this).parent().parent().toggleClass('menu-item-nested-open');
                });
            }
        }


        $('.page-menu .mdc-top-app-bar__section--align-end').append(ejs.render(coreTemplates['menu/navbar.html'], {
            user: coreMenu._user
        }));

        // Выход
        $('.page-menu .menu-logout').on('click', function () {
            CoreUI.confirm.warning('Уверены, что хотите выйти?', '', {
                acceptButtonText: "Да",
                onAccept: function () {
                    coreAuth.logout();
                }
            });
        });

        $('.page-menu .open-menu, .page-menu .menu-drawer-scrim').on('click', function () {
            coreMenu._drawerToggle();
        });

        $('.page-menu .module-home').on('click', function (event) {
            if (event.button === 0 && ! event.ctrlKey)  {
                coreMenu.load('/home');

                if (window.screen.width < 600) {
                    coreMenu._drawerToggle();
                    console.log(11)
                }
            }
        });

        let buttons = document.querySelectorAll('.page-menu .mdc-ripple-surface');
        for (let button of buttons) {
            new mdc.ripple.MDCRipple(button);
        }


        coreMenu._initSwipe($(".page-menu .menu-drawer-swipe")[0], function (direction) {
            if (direction === "right") {
                coreMenu._drawerToggle();

            } else if (direction === "left") {
                coreMenu._drawerToggle();
            }
        });
    },


    /**
     * @param moduleName
     * @param sectionName
     */
    _setActiveModule: function (moduleName, sectionName) {

        $('.page-menu > aside .core-module')
            .removeClass('menu-module-index--activated')
            .removeClass('menu-module--activated');

        $('.page-menu > aside .core-module-section')
            .removeClass('menu-module-section--activated');

        $('.page-menu > aside .core-module-section-index')
            .removeClass('menu-module-section--activated');

        $('.page-menu > aside .core-module-' + moduleName)
            .addClass('menu-module--activated')
            .addClass('menu-item-nested-open');

        if (sectionName === 'index') {
            $('.page-menu > aside .core-module.core-module-' + moduleName)
                .addClass('menu-module-index--activated');

            $('.page-menu > aside .core-module-' + moduleName + ' .core-module-section-index')
                .addClass('menu-module-section--activated');
        }

        $('.page-menu > aside .core-module-' + moduleName + '-' + sectionName).addClass('menu-module-section--activated');


        if ( ! moduleName && ! sectionName) {
            $('.page-menu .module-home').addClass('active');
        } else {
            $('.page-menu .module-home').removeClass('active');
        }


        /**
         * @param moduleName
         * @param sectionName
         * @returns {*[]}
         */
        function getModuleTitles (moduleName, sectionName) {

            let title = [];

            $.each(coreMenu._modules, function (key, module) {
                if (module.name === moduleName) {

                    title.push(module.title);

                    if (module.sections &&
                        module.sections.length > 0
                    ) {
                        $.each(module.sections, function (key, section) {
                            if (section.name === sectionName) {
                                title.push(section.title);
                                return false;
                            }
                        });
                    }

                    return false;
                }
            });

            return title;
        }

        let titles = getModuleTitles(moduleName, sectionName);

        $('header .mdc-top-app-bar__title').text(titles[0] || '');
        $('header .mdc-top-app-bar__subtitle').text(titles[1] || '');
    },


    /**
     * @param target
     * @param callback
     */
    _initSwipe: function (target, callback) {

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
     * @private
     */
    _drawerToggle:  function () {

        // Нужно для первого открытия страницы
        $('.page-menu .menu-drawer').css('transition', '');
        $('.page-menu .mdc-top-app-bar').css('transition', '');


        let menu = $('.page.page-menu');

        if (menu.hasClass('drawer-toggle')) {
            localStorage.setItem('core3_drawer_toggle', 0);
        } else {
            localStorage.setItem('core3_drawer_toggle', 1);
        }

        menu.toggleClass('drawer-toggle');
    },


    /**
     * Установка
     */
    _initInstall: function () {

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
    }
}


$(function () {

    coreMain.on('hashchange', function () {
        if ($('.page-menu.active')[0]) {
            coreMenu.load(location.hash.substring(1));
        }
    });
});
