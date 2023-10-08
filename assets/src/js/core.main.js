
import coreTokens from './core.tokens';

let coreMain = {

    activePage: null,

    options: {
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
    _hashChangeCallbacks: [],


    /**
     * @param pageName
     */
    viewPage: function (pageName) {

        if (Core[pageName]) {
            let pageContent = Core[pageName].getPageContent();
            $('.main').append('<div class="page page-' + pageName + '">' + pageContent + '</div>');
            Core[pageName].init();

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
            coreMain._hashChangeCallbacks.push(callback);
        }
    },


    /**
     *
     */
    hashChange: function () {

        if (coreMain._hashChangeCallbacks.length > 0) {
            for (let i = 0; i < coreMain._hashChangeCallbacks.length; i++) {
                coreMain._hashChangeCallbacks[i]();
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
        }, function () {
            coreMain.viewPage('auth');
        });
    }


    if ("onhashchange" in window) {
        window.onhashchange = coreMain.hashChange;
    }
});


export default coreMain;