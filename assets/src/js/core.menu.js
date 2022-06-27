var coreMenu = {

    /**
     *
     */
    _user: null,

    _system: null,

    _modules: null,

    _tpl: {
        main:
            '<header class="mdc-top-app-bar mdc-top-app-bar--fixed app-bar">' +
                '<div class="mdc-top-app-bar__row">' +
                    '<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">' +
                        '<button class="mdc-ripple-surface open-menu"><i class="fa-solid fa-bars"></i></button>' +
                        '<div class="header-title-container">' +
                            '<span class="mdc-top-app-bar__title"></span>' +
                            '<span class="mdc-top-app-bar__subtitle"></span>' +
                        '</div>' +
                    '</section>' +
                    '<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">' +
                    '</section>' +
                '</div>' +
            '</header>' +
            '<aside class="menu-drawer">' +
                '<div class="menu-drawer__content">' +
                    '<div class="menu-drawer__header">' +
                        '<a class="module-home" href="#/">' +
                            '<span class="fa-solid fa-house"></span>' +
                            '<h3 class="system-title"></h3>' +
                        '</a>' +
                    '</div>' +
                    '<ul class="menu-list level-1"></ul>' +
                '</div>' +
            '</aside>' +
            '<div class="menu-drawer-scrim"></div>' +
            '<div class="menu-drawer-swipe"></div>' +
            '<div class="menu-drawer-app">' +
                '<main class="main-content">' +
                    '<div class="main-wrapper"></div>' +
                '</main>' +
            '</div>',

        topMenu:
            '<ul class="navbar-nav">' +
                '<li class="nav-item dropdown cabinet-user">' +
                    '<a class="nav-link dropdown-toggle d-flex align-items-center" ' +
                        'href="#" data-mdb-toggle="dropdown">' +
                        '<% if (user.avatar) { %>' +
                            '<img src="<%= user.avatar %>" alt="avatar" class="rounded-circle" loading="lazy"/>' +
                        '<% } else { %>' +
                            '<i class="fa-solid fa-circle-user"></i>' +
                        '<% } %>' +
                    '</a>' +
                    '<ul class="dropdown-menu">' +
                        '<li class="cabinet-user-info">' +
                            '<b class="cabinet-user-name"><%= user.name %></b><br>' +
                            '<span class="cabinet-user-login"><%= user.login %></span>' +
                        '</li>' +
                        '<li><hr class="dropdown-divider"/></li>' +
                        '<li>' +
                            '<a class="dropdown-item menu-logout" href="#">' +
                                '<i class="fa-solid fa-arrow-right-from-bracket"></i> Выйти' +
                            '</a>' +
                        '</li>' +
                    '</ul>' +
                '</li>' +
            '</ul>',

        loader:
            '<div id="loader">' +
                '<div role="progressbar" class="mdc-linear-progress loader-progress" ' +
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
                '<div class="loader-block"></div>' +
            '</div>',

        preloader:
            '<div id="preloader">' +
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
                    '<div class="loading-text"><%= text %></div>' +
                '</div>' +
            '</div>',

        module:
            '<li class="menu-list-item core-module core-module-<%= module.name %> ' +
                 '<% if (module.sections && module.sections.length > 0) { %>menu-item-nested<% } %>">' +
                '<div class="item-control">' +
                    '<a href="#/<%= module.name %>/<%= module.index %>" class="mdc-ripple-surface" ' +
                        'data-module="<%= module.name %>" data-section="<%= module.index %>">' +
                        '<% if (module.icon) { %>' +
                            '<i class="<%= module.icon %>"></i>' +
                        '<% } else { %>' +
                            '<span class="module-icon-letter"><%= module.title.trim().substring(0, 1) %></span>' +
                        '<% } %>' +
                        '<span class="menu-list-item__text"><%= module.title %></span>' +
                    '</a>' +
                    '<% if (module.sections && module.sections.length > 0) { %>' +
                        '<button class="menu-icon-button mdc-ripple-surface"><i class="fa-solid fa-sort-down"></i></button>' +
                    '<% } %>' +
                '</div>' +
                '<ul class="menu-list level-2">' +
                    '<li class="menu-list-item core-module-section-index">' +
                        '<a href="#/<%= module.name %>/<%= module.index %>" class="mdc-ripple-surface" ' +
                            'data-module="<%= module.name %>" data-section="<%= module.index %>">' +
                            '<%= module.title %>' +
                        '</a>' +
                    '</li>' +
                    '<% if (module.sections && module.sections.length > 0) { %>' +
                        '<% module.sections.forEach(function(section) { %>' +
                            '<li class="menu-list-item core-module-section core-module-<%= module.name %>-<%= section.name %>">' +
                                '<a href="#/<%= module.name %>/<%= section.name %>" class="mdc-ripple-surface" ' +
                                    'data-module="<%= module.name %>" data-section="<%= section.name %>">' +
                                    '<span class="menu-list-item__text"><%= section.title %></span>' +
                                '</a>' +
                            '</li>' +
                        '<% }); %>' +
                    '<% } %>' +
                '</ul>' +
            '</li>',
    },



    /**
     * Получение страницы кабинета
     * @returns {*}
     */
    getPageContent: function () {

        return this._tpl.main;
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

        coreMenu.preloader('show');

        // Инициализация кнопок
        let buttons = document.querySelectorAll('.page-menu .mdc-button');
        for (let button of buttons) {
            new mdc.ripple.MDCRipple(button);
        }


        coreMenu._initInstall();

        $('.page-menu .main-content .main-wrapper').html('')

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
                    CoreUI.alert.danger('Ошибка', 'Попробуйте обновить страницу или обратитесь к администратору');

                } else {
                    coreMenu._user    = response.user;
                    coreMenu._system  = response.system;
                    coreMenu._modules = response.modules;

                    coreMenu._renderMenu();
                    coreMenu.preloader('hide');

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

        coreMenu.preloader('show');

        let accessToken = coreTokens.getAccessToken();

        $.ajax({
            url: coreMain.options.basePath + url,
            method: "GET",
            headers: {
                'Access-Token': accessToken
            },
            success: function (response, textStatus, jqXHR) {
                coreMenu.preloader('hide');

                let params = coreTools.getParams(url);
                coreMenu._setActiveModule(params.module, params.section);

                let contentType = jqXHR.getResponseHeader('Content-type');
                let content     = '';

                if (/^application\/json($|$)/.test(contentType)) {
                    try {
                        content = coreMenu._renderContent(response);

                    } catch (e) {
                        content = e.message;
                    }

                } else {
                    content = response;
                }

                $('.page-menu .main-content .main-wrapper').html(content)
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
                coreMenu.preloader('hide');

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
    loader: function(action, options) {

        switch (action) {
            case 'show':
                if ($('#loader')[0]) {
                    return false;
                }

                options = typeof options === 'object' ? options : {};

                $('.page-menu > header').append(coreMenu._tpl.loader);

                let loaderElement = $('#loader .loader-progress');
                let linearProgress   = new mdc['linear-progress'].MDCLinearProgress(loaderElement[0]);
                linearProgress.determinate = false;
                break;

            case 'hide':
                $('#loader').remove();
                break;
        }
    },


    /**
     * @param action
     * @param options
     * @returns {boolean}
     */
    preloader: function(action, options) {

        switch (action) {
            case 'show':
                if ($('#preloader')[0]) {
                    return false;
                }

                options = typeof options === 'object' ? options : {};

                $('.page-menu').prepend(ejs.render(coreMenu._tpl.preloader, {
                    text: options.text || 'Загрузка...'
                }));

                let element            = $('#preloader .mdc-circular-progress');
                const circularProgress = new mdc['circular-progress'].MDCCircularProgress(element[0]);
                circularProgress.determinate = false;
                circularProgress.progress = 0;
                break;

            case 'hide':
                $('#preloader').fadeOut('fast', function () {
                    $(this).remove();
                });
                break;
        }
    },


    /**
     * @param jsonContent
     * @private
     */
    _renderContent: function (jsonContent) {

        return JSON.stringify(jsonContent);
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

                $('.page-menu > aside .menu-list.level-1').append(ejs.render(coreMenu._tpl.module, {
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


        $('.page-menu .mdc-top-app-bar__section--align-end').append(ejs.render(coreMenu._tpl.topMenu, {
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
