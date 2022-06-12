
var coreMain = {

    options: {
        regApikey: '',
        basePath: '/core',
    },

    /**
     *
     */
    install: {
        event: null,
        promise: null,
    },

    /**
     *
     */
    hashChangeCallbacks: [],


    /**
     * @param pageName
     */
    viewPage: function (pageName) {

        let pageObjectName = 'page' +  pageName.charAt(0).toUpperCase() + pageName.slice(1);

        if (window[pageObjectName]) {
            let pageContent = window[pageObjectName].getPageContent();
            $('.main').append('<div class="page page-' + pageName + '">' + pageContent + '</div>');
            window[pageObjectName].init();

            coreMain.activePage = pageName

            let $otherPages = $('.main > .page:not(.page-' + pageName + ')');

            if ($otherPages[0]) {
                $otherPages.fadeOut('fast', function () {
                    $otherPages.remove();

                    $('.main > .page-' + pageName).fadeIn('fast');
                });

            } else {
                $('.main > .page-' + pageName).fadeIn('fast');
            }

        } else {
            CoreUI.alert.danger('Ошибка', 'Страница ' + pageName + ' не найдена');
        }
    },


    /**
     * @param eventName
     * @param callback
     */
    on: function (eventName, callback) {

        if (eventName === 'hashchange') {
            coreMain.hashChangeCallbacks.push(callback);
        }
    },


    /**
     *
     */
    hashChange: function () {

        if (coreMain.hashChangeCallbacks.length > 0) {
            for (let i = 0; i < coreMain.hashChangeCallbacks.length; i++) {
                coreMain.hashChangeCallbacks[i]();
            }
        }
    },


    /**
     * @param text
     * @param options
     * @private
     */
    _: function (text, options) {

        return text;
    },
}


$(function () {
    // Показ ошибок
    window.onerror = function(msg) {
        if (msg === 'Uncaught EvalError: Possible side-effect in debug-evaluate') {
            return;
        }

        CoreUI.notice.danger(msg);
    };

    // Регистрация service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(swRegistration => {
                // при каждой перезагрузке страницы будет запускать обновление кэша
                swRegistration.update();

            }).catch(err => console.log('SW registration FAIL:', err));
    }

    // Событие установки
    coreMain.install.promise = new Promise(function (resolve, reject) {

        window.addEventListener('beforeinstallprompt', event => {
            event.preventDefault();
            coreMain.install.event = event;
            resolve(event);
        })
    });


    let accessToken = coreTokens.getAccessToken();

    if ( ! accessToken) {
        coreMain.viewPage('auth');

    } else {
        coreTokens.refreshToken(function() {
            coreTokens.initRefresh();
            coreMain.viewPage('menu');
        });
    }


    if ("onhashchange" in window) {
        window.onhashchange = coreMain.hashChange;
    }
});