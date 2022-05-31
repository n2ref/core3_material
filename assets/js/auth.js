var auth = {

     _tpl:
         '<div class="container container-login" style="display: none">' +
             '<div class="mdc-card">' +
                 '<div class="mdc-card__content">' +
                     '<img src="logo.jpg" alt="logo" class="logo">' +
                     '<form>' +
                         '<span class="text-danger"></span>' +
                         '<div class="form-controls">' +
                             '<label class="mdc-text-field mdc-text-field--outlined">' +
                                 '<span class="mdc-notched-outline">' +
                                     '<span class="mdc-notched-outline__leading"></span>' +
                                     '<span class="mdc-notched-outline__notch">' +
                                         '<span class="mdc-floating-label" id="login">Логин или Email</span>' +
                                     '</span>' +
                                     '<span class="mdc-notched-outline__trailing"></span>' +
                                 '</span>' +
                                 '<input type="text" name="login" class="mdc-text-field__input" required aria-labelledby="login">' +
                             '</label>' +
                             '<label class="mdc-text-field mdc-text-field--outlined">' +
                                 '<span class="mdc-notched-outline">' +
                                     '<span class="mdc-notched-outline__leading"></span>' +
                                     '<span class="mdc-notched-outline__notch">' +
                                         '<span class="mdc-floating-label" id="password">Пароль</span>' +
                                     '</span>' +
                                     '<span class="mdc-notched-outline__trailing"></span>' +
                                 '</span>' +
                                 '<input type="text" name="password" class="mdc-text-field__input" required aria-labelledby="password">' +
                             '</label>' +
                         '</div>' +
                         '<button class="mdc-button mdc-button--raised">' +
                             '<div class="mdc-button__ripple"></div>' +
                             '<span class="mdc-button__label">Войти</span>' +
                         '</button>' +
                     '</form>' +
                 '</div>' +
             '</div>' +
             '<div class="out-box">' +
                 '<a class="install-button" style="display: none">Установить</a>' +
                 '<a href="#/registration" class="reg-button">Регистрация</a>' +
             '</div>' +
         '</div>' +
         '<div class="container container-registration" style="display: none">' +
             '<div class="mdc-card">' +
                 '<div class="mdc-card__content">' +
                     '<img src="logo.kpg" alt="logo" class="logo">' +
                     '<p class="mdc-typography--headline5">Регистрация</p>' +
                     '<div class="text-danger mdc-typography--subtitle2"></div>' +
                     '<div class="text-success mdc-typography--subtitle2"></div>' +
                     '<form>' +
                         '<div class="form-controls">' +
                             '<label class="mdc-text-field mdc-text-field--outlined">' +
                                 '<span class="mdc-notched-outline">' +
                                     '<span class="mdc-notched-outline__leading"></span>' +
                                     '<span class="mdc-notched-outline__notch">' +
                                         '<span class="mdc-floating-label" id="registration-email">Email</span>' +
                                     '</span>' +
                                     '<span class="mdc-notched-outline__trailing"></span>' +
                                 '</span>' +
                                 '<input type="email" name="email" class="mdc-text-field__input" required aria-labelledby="registration-email">' +
                             '</label>' +
                             '<label class="mdc-text-field mdc-text-field--outlined">' +
                                 '<span class="mdc-notched-outline">' +
                                     '<span class="mdc-notched-outline__leading"></span>' +
                                     '<span class="mdc-notched-outline__notch">' +
                                         '<span class="mdc-floating-label" id="registration-name">Имя</span>' +
                                     '</span>' +
                                     '<span class="mdc-notched-outline__trailing"></span>' +
                                 '</span>' +
                                 '<input type="text" name="name" class="mdc-text-field__input" required aria-labelledby="registration-name">' +
                             '</label>' +
                             '<label class="mdc-text-field mdc-text-field--outlined">' +
                                 '<span class="mdc-notched-outline">' +
                                     '<span class="mdc-notched-outline__leading"></span>' +
                                     '<span class="mdc-notched-outline__notch">' +
                                         '<span class="mdc-floating-label" id="registration-login">Логин</span>' +
                                     '</span>' +
                                     '<span class="mdc-notched-outline__trailing"></span>' +
                                 '</span>' +
                                 '<input type="text" name="login" class="mdc-text-field__input" required aria-labelledby="registration-login">' +
                             '</label>' +
                             '<label class="mdc-text-field mdc-text-field--outlined">' +
                                 '<span class="mdc-notched-outline">' +
                                     '<span class="mdc-notched-outline__leading"></span>' +
                                     '<span class="mdc-notched-outline__notch">' +
                                         '<span class="mdc-floating-label" id="registration-pass">Пароль</span>' +
                                     '</span>' +
                                     '<span class="mdc-notched-outline__trailing"></span>' +
                                 '</span>' +
                                 '<input type="password" name="pass" class="mdc-text-field__input" required aria-labelledby="registration-pass">' +
                             '</label>' +
                             '<label class="mdc-text-field mdc-text-field--outlined">' +
                                 '<span class="mdc-notched-outline">' +
                                     '<span class="mdc-notched-outline__leading"></span>' +
                                     '<span class="mdc-notched-outline__notch">' +
                                         '<span class="mdc-floating-label" id="registration-pass2">Пароль еще раз</span>' +
                                     '</span>' +
                                     '<span class="mdc-notched-outline__trailing"></span>' +
                                 '</span>' +
                                 '<input type="password" name="pass2" class="mdc-text-field__input" required aria-labelledby="registration-pass2">' +
                             '</label>' +
                         '</div>' +
                         '<button class="mdc-button mdc-button--raised">' +
                             '<div class="mdc-button__ripple"></div>' +
                             '<span class="mdc-button__label">Зарегистрироваться</span>' +
                         '</button>' +
                     '</form>' +
                 '</div>' +
             '</div>' +
             '<div class="out-box">' +
                 '<a class="install-button" style="display: none">Установить</a>' +
                 '<a href="#" class="login-button">Войти</a>' +
             '</div>' +
         '</div>',


    /**
     * Получение страницы входа и регистрации
     * @returns {*}
     */
    getPageContent: function () {

        return ejs.render(this._tpl, {});
    },


    /**
     * Инициализация страницы входа и регистрации
     */
    init: function () {

        // Инициализация кнопок
        let buttons = document.querySelectorAll('.page-auth .mdc-button');
        for (let button of buttons) {
            new mdc.ripple.MDCRipple(button);
        }

        // Инициализация текстовых полей
        let inputs = document.querySelectorAll('.page-auth .mdc-text-field');
        for (let input of inputs) {
            new mdc.textField.MDCTextField(input);
        }

        $('.container-login form').on('submit', function () {
            auth.login(this);
            return false
        });

        $('.container-registration form').on('submit', function () {
            auth.registration(this);
            return false
        });

        auth.viewActualContainer();


        // Установка
        let install = function (event) {
            event.preventDefault();
            let button = $('.page-auth .install-button');

            if (event.platforms.includes('web')) {
                button.show();
                button.on('click', function () {
                    event.prompt();
                });
            }

            event.userChoice.then(function (choiceResult) {
                switch (choiceResult.outcome) {
                    case "accepted" :
                        button.hide();
                        break;

                    case "dismissed" :
                        // ignore
                        break;
                }
            });
        }

        if (main.install.event) {
            install(main.install.event);
        } else {
            main.install.promise.then(install);
        }
    },


    /**
     * Показ текущего контейнера
     */
    viewActualContainer: function () {

        let params    = main.getParams();
        let authPanel = params.module;

        if (['login', 'registration', 'registration_complete'].indexOf(authPanel) === -1) {
            authPanel = 'login';
        }

        auth._viewContainer(authPanel);
    },


    /**
     * Получение аутентификации
     * @param accessToken
     * @returns {boolean}
     */
    setAccessToken(accessToken) {

        localStorage.setItem('core3_access_token', accessToken);

        let days    = 100;
        let date    = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        let expires = "; expires=" + date.toUTCString();

        document.cookie = "Core-Access-Token=" + accessToken + expires + "; path=/core";

        let myWorker = new Worker('sw.js');

        myWorker.postMessage({
            topic: 'set_access_token',
            token: accessToken
        });
    },


    /**
     * Получение аутентификации
     * @param refreshToken
     * @returns {boolean}
     */
    setRefreshToken(refreshToken) {

        localStorage.setItem('core3_refresh_token', refreshToken);

        let days    = 100;
        let date    = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        let expires = "; expires=" + date.toUTCString();

        document.cookie = "Core-Refresh-Token=" + refreshToken + expires + "; path=/core";

        let myWorker = new Worker('sw.js');

        myWorker.postMessage({
            topic: 'set_refresh_token',
            token: refreshToken
        });
    },


    /**
     * Получение аутентификации
     * @returns {String|boolean}
     */
    getAccessToken() {

        let authToken = localStorage.getItem('core3_access_token');

        if ( ! authToken) {
            auth.clearAccessToken();
            authToken = false;
        }

        return authToken;
    },


    /**
     * Очистка аутентификации
     */
    clearAccessToken() {

        localStorage.removeItem('core3_access_token');

        document.cookie = 'Core-Access-Token=; Path=/core; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';

        let myWorker = new Worker('sw.js');

        myWorker.postMessage({
            topic: 'set_access_token',
            token: null
        });
    },


    /**
     * @param action
     */
    preloader(action) {

        let $btn = $('.page-auth .mdc-button:visible');

        switch (action) {
            case 'show':
                $btn.attr("disabled", "disabled");

                if ($btn.find('.mdc-circular-progress').length === 0) {
                    $btn.prepend(
                        '<div class="mdc-circular-progress" style="width:42px;height:24px;" role="progressbar" aria-label="Example Progress Bar" aria-valuemin="0" aria-valuemax="1">' +
                          '<div class="mdc-circular-progress__determinate-container">' +
                            '<svg class="mdc-circular-progress__determinate-circle-graphic" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
                              '<circle class="mdc-circular-progress__determinate-track" cx="12" cy="12" r="8.75" stroke-width="2.5"/>' +
                              '<circle class="mdc-circular-progress__determinate-circle" cx="12" cy="12" r="8.75" stroke-dasharray="54.978" stroke-dashoffset="54.978" stroke-width="2.5"/>' +
                            '</svg>' +
                          '</div>' +
                          '<div class="mdc-circular-progress__indeterminate-container">' +
                            '<div class="mdc-circular-progress__spinner-layer">' +
                              '<div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">' +
                                '<svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
                                  '<circle cx="12" cy="12" r="8.75" stroke-dasharray="54.978" stroke-dashoffset="27.489" stroke-width="2.5"/>' +
                                '</svg>' +
                              '</div>' +
                              '<div class="mdc-circular-progress__gap-patch">' +
                                '<svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
                                  '<circle cx="12" cy="12" r="8.75" stroke-dasharray="54.978" stroke-dashoffset="27.489" stroke-width="2"/>' +
                                '</svg>' +
                              '</div>' +
                              '<div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">' +
                                '<svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
                                  '<circle cx="12" cy="12" r="8.75" stroke-dasharray="54.978" stroke-dashoffset="27.489" stroke-width="2.5"/>' +
                                '</svg>' +
                              '</div>' +
                            '</div>' +
                          '</div>' +
                        '</div>'
                    );


                    const element          = $('.mdc-circular-progress', $btn)[0];
                    const circularProgress = new mdc.circularProgress.MDCCircularProgress(element);
                    circularProgress.determinate = false;
                    circularProgress.progress = 0;
                }
                break;

            case 'hide':
                $('.page-auth .mdc-button .mdc-circular-progress').remove();
                $btn.removeAttr("disabled");
                break;
        }
    },


    /**
     *
     * @param form
     */
    login: function (form) {

        auth.preloader('show');
        $('.page-auth form .text-danger').text('');

        $.ajax({
            url: main.options.basePath + "/auth/login",
            method: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                login: $('[name=login]', form).val(),
                password: MD5($('[name=password]', form).val())
            })
        })
            .done(function (response) {
                console.log(response)
                if (typeof response.access_token !== 'string' ||
                    typeof response.refresh_token !== 'string' ||
                    ! response.access_token ||
                    ! response.refresh_token
                ) {
                    let errorMessage = response.error_message || "Ошибка. Попробуйте позже, либо обратитесь к администратору";
                    $('.page-auth form .text-danger').text(errorMessage);

                } else {
                    $('.page-auth form .text-danger').text('');

                    auth.setAccessToken(response.access_token);
                    auth.setRefreshToken(response.refresh_token);

                    $('.page-auth [name=login]').val('');
                    $('.page-auth [name=password]').val('');

                    main.viewPage('menu');
                }
            })

            .fail(function (response) {
                auth.preloader('hide');

                let errorMessage = '';

                if (response.responseJSON && response.responseJSON.error_message) {
                    errorMessage = response.responseJSON.error_message;
                } else {
                    errorMessage = $("<div>" + response.responseText + "</div>").text();
                }

                errorMessage = errorMessage || 'Ошибка. Попробуйте позже, либо обратитесь к администратору';

                $('.container-login .text-danger').text(errorMessage);
            })

            .always (function (jqXHR, textStatus) {
                auth.preloader('hide');
            });
    },


    /**
     * @param form
     */
    registration: function (form) {

        auth.preloader('show');
        $('.container-registration .text-danger').text('');

        $.ajax({
            url: main.options.basePath + "/auth/registration",
            dataType: "json",
            method: "POST",
            data: $(form).serialize()
        })
            .done(function (response) {
                auth.preloader('hide');

                if (response.status === 'success') {
                    $('.container-registration .text-success').text(response.message).css('margin-bottom', '50px');
                    $(form).hide();

                } else {
                    $('.container-registration .text-danger').text(response.error_message);
                }
            })

            .fail(function (response) {
                auth.preloader('hide');

                let errorMessage = '';

                if (response.responseJSON && response.responseJSON.error_message) {
                    errorMessage = response.responseJSON.error_message;
                } else {
                    errorMessage = $(response.responseText).text();
                }

                errorMessage = errorMessage || 'Ошибка. Попробуйте позже, либо обратитесь к администратору';

                $('.container-registration .text-danger').text(errorMessage);
            })

            .always (function (jqXHR, textStatus) {
                auth.preloader('hide');
            });
    },


    /**
     * @param form
     * @constructor
     */
    registrationComplete: function (form) {

        let pass1 = $("[name=password]", form).val();
        let pass2 = $("[name=password2]", form).val();

        if ( ! pass1 || ! pass2) {
            $('.container-registration_complete .text-danger').text('Введите пароль');
            return false;
        }

        if (pass1 !== pass2) {
            $('.container-registration_complete .text-danger').text('Пароли не совпадают').show();
            return false;
        }

        auth.preloader('show');
        $('.container-registration_complete .text-danger').text('');

        let params = main.getParams();

        $.ajax({
            url: main.options.basePath + "/auth/registration_complete",
            dataType: "json",
            method: "POST",
            data: {
                key:      params.query.key,
                password: MD5(form.password.value)
            }
        }).done(function (data) {
            auth.preloader('hide');

            if (data.status === 'success') {
                $('.container-registration_complete .text-success').html(data.message).css('margin-bottom', '50px');
                $(form).hide();

            } else {
                $('.container-registration_complete .text-danger').text(data.error_message);
            }

        }).fail(function (response) {
            auth.preloader('hide');

            let errorMessage = '';

            if (response.status === 0) {
                errorMessage = 'Ошибка. Проверьте подключение к интернету'

            } else {
                errorMessage = 'Ошибка. Попробуйте позже, либо обратитесь к администратору';
            }

            $('.container-registration_complete .text-danger').text(errorMessage);
        });
    },


    /**
     * Показ указанного контейнера
     * @param name
     */
    _viewContainer: function (name) {

        $('.page-auth > .container').hide();
        $('.page-auth > .container-' + name).fadeIn('fast');
    }
}



$(function () {

    main.on('hashchange', function () {
        if ($('.page-auth')[0]) {
            auth.viewActualContainer();
        }
    });
});