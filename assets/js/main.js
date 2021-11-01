
let main = {

    options: {
        regApikey: '45c0f6e4bfdcfd5211bdbc4978j7ed3f9e12a714',
        basePath: '/core3/api/v1.0',
    },

    _notify: null,

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
     * @param title
     * @param message
     * @param options
     * @returns {MDCDialog}
     */
    alert: function (title, message, options) {

        options = options || {};

        let titleColor = typeof options['titleColor'] === 'string'
            ? 'style="color: ' + options['titleColor'] + '"'
            : '';

        let messageColor = typeof options['messageColor'] === 'string'
            ? 'style="color: ' + options['messageColor'] + '"'
            : '';

        let textButton = typeof options['textButton'] === 'string'
            ? options['textButton']
            : 'Закрыть';

        let tplTitle = title
            ? '<h2 class="mdc-dialog__title" ' + titleColor + '>' + title + '</h2>'
            : '';

        let tplMessage = message
            ? '<div class="mdc-dialog__content" ' + messageColor + '>' + message + '</div>'
            : '';

        $('body').append(
            '<div class="mdc-dialog" id="dialog-alert">' +
            '<div class="mdc-dialog__container">' +
            '<div class="mdc-dialog__surface" role="alertdialog" aria-modal="true" ' +
            'aria-labelledby="my-dialog-title" aria-describedby="my-dialog-content">' +
            tplTitle +
            tplMessage +
            '<div class="mdc-dialog__actions">' +
            '<button type="button" class="mdc-button mdc-dialog__button" ' +
            'data-mdc-dialog-action="cancel">' +
            '<div class="mdc-button__ripple"></div>' +
            '<span class="mdc-button__label">' + textButton + '</span>' +
            '</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="mdc-dialog__scrim"></div>' +
            '</div>'
        );

        let dialogElement = $('#dialog-alert');
        let dialog        = new mdc.dialog.MDCDialog(dialogElement[0]);

        if (typeof options['onClose'] === 'function') {
            dialog.listen('MDCDialog:closing', function(data) {
                options['onClose'](data);
            });
        }

        dialog.listen('MDCDialog:closed', function(data) {
            dialogElement.remove();
        });

        dialog.open();

        return dialog;
    },


    /**
     * @param title
     * @param message
     * @param options
     * @returns {MDCDialog}
     */
    confirm: function(title, message, options) {

        options = options || {};

        let titleColor = typeof options['titleColor'] === 'string'
            ? 'style="color: ' + options['titleColor'] + '"'
            : '';

        let messageColor = typeof options['messageColor'] === 'string'
            ? 'style="color: ' + options['messageColor'] + '"'
            : '';

        let cancelButtonText = typeof options['cancelButtonText'] === 'string'
            ? options['cancelButtonText']
            : 'Отмена';

        let acceptButtonText = typeof options['acceptButtonText'] === 'string'
            ? options['acceptButtonText']
            : 'Принять';

        let tplTitle = title
            ? '<h2 class="mdc-dialog__title" ' + titleColor + '>' + title + '</h2>'
            : '';

        let tplMessage = message
            ? '<div class="mdc-dialog__content" ' + messageColor + '>' + message + '</div>'
            : '';

        $('body').append(
            '<div class="mdc-dialog" id="dialog-confirm">' +
            '<div class="mdc-dialog__container">' +
            '<div class="mdc-dialog__surface" role="alertdialog" aria-modal="true"' +
            'aria-labelledby="my-dialog-title" aria-describedby="my-dialog-content">' +
            tplTitle +
            tplMessage +
            '<div class="mdc-dialog__actions">' +
            '<button type="button" class="mdc-button mdc-dialog__button" ' +
            'data-mdc-dialog-action="cancel">' +
            '<div class="mdc-button__ripple"></div>' +
            '<span class="mdc-button__label">' + cancelButtonText + '</span>' +
            '</button>' +
            '<button type="button" class="mdc-button mdc-dialog__button" ' +
            'data-mdc-dialog-action="accept">' +
            '<div class="mdc-button__ripple"></div>' +
            '<span class="mdc-button__label">' + acceptButtonText + '</span>' +
            '</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="mdc-dialog__scrim"></div>' +
            '</div>'
        );

        let dialogElement = $('#dialog-confirm');
        let dialog        = new mdc.dialog.MDCDialog(dialogElement[0]);

        dialog.listen('MDCDialog:closing', function(data) {
            switch (data.detail.action) {
                case 'accept':
                    if (typeof options['onAccept'] === 'function') {
                        options['onAccept']();
                    }
                    break;

                case 'cancel':
                    if (typeof options['onCancel'] === 'function') {
                        options['onCancel']();
                    }
                    break;
            }
        });

        dialog.listen('MDCDialog:closed', function(data) {
            dialogElement.remove();
        });

        dialog.open();

        return dialog;
    },


    /**
     * @param text
     * @param options
     * @returns {*}
     */
    notify: function (text, options) {

        $('.mdc-snackbar').remove('');


        options = options || {};

        options['color'] = typeof options['color'] === 'string'
            ? 'style="background-color:' + options['color'] + '"'
            : '';

        options['textColor'] = typeof options['textColor'] === 'string'
            ? 'style="color:' + options['textColor'] + '"'
            : '';

        options['customClass'] = typeof options['customClass'] === 'string'
            ? options['customClass']
            : '';

        options['timeout'] = typeof options['timeout'] === 'number'
            ? options['timeout']
            : 4000;

        options['closeButton'] = typeof options['closeButton'] === 'boolean' && options['closeButton']
            ? '<button class="mdc-icon-button mdc-snackbar__dismiss material-icons" title="Dismiss">close</button>'
            : '';

        let buttonText = typeof options['buttonText'] === 'string'
            ? options['buttonText']
            : '';

        let buttonCallback = typeof options['buttonCallback'] === 'function'
            ? options['buttonCallback']
            : '';


        let trlButton = buttonText && buttonCallback
            ? '<button type="button" class="mdc-button mdc-snackbar__action">' +
                  '<div class="mdc-button__ripple"></div>' +
                  '<span class="mdc-button__label">' + buttonText + '</span>' +
              '</button>'
            : '';

        let id = "snackbar-" + new Date().getTime()

        $('body').prepend(
            '<div class="mdc-snackbar ' + options['customClass'] + '" id="' + id + '">' +
                '<div class="mdc-snackbar__surface" ' + options['color'] + ' role="status" aria-relevant="additions">' +
                    '<div class="mdc-snackbar__label" ' + options['textColor'] + ' aria-atomic="false">' +
                        text +
                    '</div>' +
                    trlButton +
                    options['closeButton'] +
                '</div>' +
            '</div>'
        );


        let snackbarElement = $('#' + id);
        let snackbar        = new mdc.snackbar.MDCSnackbar(snackbarElement[0]);
        snackbar.timeoutMs = options['timeout'];


        if (buttonText && buttonCallback) {
            new mdc.ripple.MDCRipple($('#' + id + ' button')[0]);

            $('#' + id + ' button').on('click', function (event) {
                buttonCallback(event)
            });
        }



        if (typeof options['onClose'] === 'function') {
            snackbar.listen('MDCSnackbar:closing', function(data) {
                options['onClose'](data);
            });
        }


        snackbar.listen('MDCSnackbar:closed', function(data) {
            snackbarElement.remove();
        });

        snackbar.open();

        return snackbar;
    },


    /**
     * @param pageName
     */
    viewPage: function (pageName) {

        if (window[pageName]) {
            let pageContent = window[pageName].getPageContent();
            $('.main').append('<div class="page page-' + pageName + '">' + pageContent + '</div>');
            window[pageName].init();

            main.activePage = pageName

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
            main.alert('Ошибка', 'Страница не найдена');
        }
    },


    /**
     * Получение паравметров из хэша
     * @param url
     * @returns {{module: string, action: string, params: string}}
     */
    getParams: function (url) {

        if (typeof url === 'undefined') {
            url = location.hash.substr(1);
        }

        let params = url.match(/^\/([a-z0-9_]*)(?:\/|)([a-z0-9_]*)(?:(\?[^?]*)|)/);
        let result = {
            module: params !== null && typeof params[1] === 'string' ? params[1] : '',
            action: params !== null && typeof params[2] === 'string' ? params[2] : 'index',
            query:  params !== null && typeof params[3] === 'string' ? params[3] : '',
        };

        result.query = main.parseQuery(result.query);

        return result;
    },


    /**
     * @param {String} query
     * @returns {{}}
     */
    parseQuery: function (query) {

        query = typeof query === 'string' ? query.replace(/^\?/, '') : '';

        let vars = query.split("&");
        let query_string = {};

        for (let i = 0; i < vars.length; i++) {
            let pair  = vars[i].split("=");
            let key   = decodeURIComponent(pair[0]);
            let value = decodeURIComponent(pair[1]);

            if (typeof query_string[key] === "undefined") {
                query_string[key] = decodeURIComponent(value);

            } else if (typeof query_string[key] === "string") {
                query_string[key] = [query_string[key], decodeURIComponent(value)];

            } else {
                query_string[key].push(decodeURIComponent(value));
            }
        }
        return query_string;
    },


    /**
     * @param eventName
     * @param callback
     */
    on: function (eventName, callback) {

        if (eventName === 'hashchange') {
            main.hashChangeCallbacks.push(callback);
        }
    },


    /**
     *
     */
    hashChange: function () {

        if (main.hashChangeCallbacks.length > 0) {
            for (let i = 0; i < main.hashChangeCallbacks.length; i++) {
                main.hashChangeCallbacks[i]();
            }
        }
    }
}


$(function () {
    // Показ ошибок
    window.onerror = function(msg) {
        //navigator.vibrate([100]);
        main.alert(msg);
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
    main.install.promise = new Promise(function (resolve, reject) {

        window.addEventListener('beforeinstallprompt', event => {
            event.preventDefault();
            main.install.event = event;
            resolve(event);
        })
    });


    if ( ! auth.getAuthToken()) {
        main.viewPage('auth');
    } else {
        main.viewPage('menu');
    }


    if ("onhashchange" in window) {
        window.onhashchange = main.hashChange;
    }
});