var coreAuth = {

     _tpl: {
        main:
             '<div class="container container-login" style="display: none">' +
                 '<div class="mdc-card">' +
                     '<div class="mdc-card__content">' +
                         '<img src="logo.png" alt="logo" class="logo">' +
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
                                     '<input type="password" name="password" class="mdc-text-field__input" required aria-labelledby="password">' +
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
                         '<img src="logo.png" alt="logo" class="logo">' +
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

         preloader:
             '<div class="mdc-circular-progress" style="width:42px;height:24px;margin-left:-42px;" role="progressbar" aria-label="Example Progress Bar" aria-valuemin="0" aria-valuemax="1">' +
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
    },


    /**
     * Получение страницы входа и регистрации
     * @returns {*}
     */
    getPageContent: function () {

        return this._tpl.main;
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
            new mdc.textfield.MDCTextField(input);
        }

        $('.container-login form').on('submit', function () {
            coreAuth.login(this);
            return false
        });

        $('.container-registration form').on('submit', function () {
            coreAuth.registration(this);
            return false
        });

        coreAuth.viewActualContainer();


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

        if (coreMain.install.event) {
            install(coreMain.install.event);
        } else {
            coreMain.install.promise.then(install);
        }
    },


    /**
     * Показ текущего контейнера
     */
    viewActualContainer: function () {

        let params    = coreTools.getParams();
        let authPanel = params.module;

        if (['login', 'registration', 'registration_complete'].indexOf(authPanel) === -1) {
            authPanel = 'login';
        }

        coreAuth._viewContainer(authPanel);
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
                    $btn.prepend(coreAuth._tpl.preloader);


                    const element          = $('.mdc-circular-progress', $btn)[0];
                    const circularProgress = new mdc['circular-progress'].MDCCircularProgress(element);
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
     * @param form
     * @returns {Promise<boolean>}
     */
    login: async function (form) {

        coreAuth.preloader('show');
        $('.page-auth form .text-danger').text('');

        let fp = await coreTools.getFingerprint()

        if ( ! fp) {
            coreAuth.preloader('hide');
            $('.page-auth form .text-danger').text('Не удалось получить отпечаток');
            return false;
        }

        $.ajax({
            url: coreMain.options.basePath + "/auth/login",
            method: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                login: $('[name=login]', form).val(),
                password: MD5($('[name=password]', form).val()),
                fp: fp
            })
        })
            .done(function (response) {
                if (typeof response.access_token !== 'string' ||
                    typeof response.refresh_token !== 'string' ||
                    ! response.access_token ||
                    ! response.refresh_token
                ) {
                    let errorMessage = response.error_message || "Ошибка. Попробуйте позже, либо обратитесь к администратору";
                    $('.page-auth form .text-danger').text(errorMessage);

                } else {
                    $('.page-auth form .text-danger').text('');

                    coreTokens.setAccessToken(response.access_token);
                    coreTokens.setRefreshToken(response.refresh_token);

                    $('.page-auth [name=login]').val('');
                    $('.page-auth [name=password]').val('');

                    coreMain.viewPage('menu');
                    coreTokens.initRefresh();
                }
            })

            .fail(function (response) {
                coreAuth.preloader('hide');

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
                coreAuth.preloader('hide');
            });
    },

    /**
     *
     */
    logout: function () {

        $.ajax({
            url: coreMain.options.basePath + '/auth/logout',
            method: "PUT",
            headers: {
                'Access-Token': coreTokens.getAccessToken()
            },
            dataType: "json",
            success: function (response) {

                coreTokens.clearAccessToken();
                coreTokens.deinitRefresh();

                coreMain.viewPage('auth');
                $('.page-menu > aside .menu-logout').removeClass('mdc-list-item--activated');
            },
            error: function (response) {
                if (response.status === 0) {
                    CoreUI.alert.danger('Ошибка', 'Проверьте подключение к интернету');

                } else {
                    CoreUI.alert.danger('Ошибка', 'Обновите приложение или обратитесь к администратору');
                }
            }
        });
    },


    /**
     * @param form
     */
    registration: function (form) {

        coreAuth.preloader('show');
        $('.container-registration .text-danger').text('');

        $.ajax({
            url: coreMain.options.basePath + "/auth/registration/email",
            dataType: "json",
            method: "POST",
            data: $(form).serialize()
        })
            .done(function (response) {
                coreAuth.preloader('hide');

                if (typeof response.access_token !== 'string' ||
                    typeof response.refresh_token !== 'string' ||
                    ! response.access_token ||
                    ! response.refresh_token
                ) {
                    let errorMessage = response.error_message || "Ошибка. Попробуйте позже, либо обратитесь к администратору";
                    $('.container-registration .text-danger').text(errorMessage);

                } else {
                    $('.page-auth form .text-danger').text('');

                    coreTokens.setAccessToken(response.access_token);
                    coreTokens.setRefreshToken(response.refresh_token);

                    $('.page-auth [name=login]').val('');
                    $('.page-auth [name=password]').val('');

                    coreMain.viewPage('menu');
                    coreTokens.initRefresh();
                }
            })

            .fail(function (response) {
                coreAuth.preloader('hide');

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
                coreAuth.preloader('hide');
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

        coreAuth.preloader('show');
        $('.container-registration_complete .text-danger').text('');

        let params = coreTools.getParams();

        $.ajax({
            url: coreMain.options.basePath + "/auth/registration/email/check$",
            dataType: "json",
            method: "POST",
            data: {
                key:      params.query.key,
                password: MD5(form.password.value)
            }
        }).done(function (data) {
            coreAuth.preloader('hide');

            if (data.status === 'success') {
                $('.container-registration_complete .text-success').html(data.message).css('margin-bottom', '50px');
                $(form).hide();

            } else {
                $('.container-registration_complete .text-danger').text(data.error_message);
            }

        }).fail(function (response) {
            coreAuth.preloader('hide');

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

    coreMain.on('hashchange', function () {
        if ($('.page-auth')[0]) {
            coreAuth.viewActualContainer();
        }
    });
});