var coreAuth = {

    /**
     * Получение страницы входа и регистрации
     * @returns {*}
     */
    getPageContent: function () {

        return coreTemplates['auth/main.html'];
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
                    $btn.prepend(coreTemplates['auth/preloader.html']);


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