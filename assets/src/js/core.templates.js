//HEAD 
window["coreTemplates"] = {};

window["coreTemplates"]["auth/main.html"] = "<div class=\"container container-login\" style=\"display: none\">\n" +
    "    <div class=\"mdc-card\">\n" +
    "        <div class=\"mdc-card__content\">\n" +
    "            <img src=\"assets/src/img/logo.png\" alt=\"logo\" class=\"logo\">\n" +
    "            <form>\n" +
    "                <span class=\"text-danger\"></span>\n" +
    "                <div class=\"form-controls\">\n" +
    "                    <label class=\"mdc-text-field mdc-text-field--outlined\">\n" +
    "                        <span class=\"mdc-notched-outline\">\n" +
    "                            <span class=\"mdc-notched-outline__leading\"></span>\n" +
    "                            <span class=\"mdc-notched-outline__notch\">\n" +
    "                                <span class=\"mdc-floating-label\" id=\"login\">Логин или Email</span>\n" +
    "                            </span>\n" +
    "                            <span class=\"mdc-notched-outline__trailing\"></span>\n" +
    "                          </span>\n" +
    "                        <input type=\"text\" name=\"login\" class=\"mdc-text-field__input\" required aria-labelledby=\"login\">\n" +
    "                    </label>\n" +
    "                    <label class=\"mdc-text-field mdc-text-field--outlined\">\n" +
    "                        <span class=\"mdc-notched-outline\">\n" +
    "                            <span class=\"mdc-notched-outline__leading\"></span>\n" +
    "                            <span class=\"mdc-notched-outline__notch\">\n" +
    "                                <span class=\"mdc-floating-label\" id=\"password\">Пароль</span>\n" +
    "                                </span>\n" +
    "                                <span class=\"mdc-notched-outline__trailing\"></span>\n" +
    "                        </span>\n" +
    "                        <input type=\"password\" name=\"password\" class=\"mdc-text-field__input\" required aria-labelledby=\"password\">\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "                <button class=\"mdc-button mdc-button--raised\">\n" +
    "                    <div class=\"mdc-button__ripple\"></div>\n" +
    "                    <span class=\"mdc-button__label\">Войти</span>\n" +
    "                </button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"out-box\">\n" +
    "        <a class=\"install-button\" style=\"display: none\">Установить</a>\n" +
    "        <a href=\"#/registration\" class=\"reg-button\">Регистрация</a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container container-registration\" style=\"display: none\">\n" +
    "    <div class=\"mdc-card\">\n" +
    "        <div class=\"mdc-card__content\">\n" +
    "            <img src=\"assets/src/img/logo.png\" alt=\"logo\" class=\"logo\">\n" +
    "            <p class=\"mdc-typography--headline5\">Регистрация</p>\n" +
    "            <div class=\"text-danger mdc-typography--subtitle2\"></div>\n" +
    "            <div class=\"text-success mdc-typography--subtitle2\"></div>\n" +
    "            <form>\n" +
    "                <div class=\"form-controls\">\n" +
    "                    <label class=\"mdc-text-field mdc-text-field--outlined\">\n" +
    "                        <span class=\"mdc-notched-outline\">\n" +
    "                            <span class=\"mdc-notched-outline__leading\"></span>\n" +
    "                            <span class=\"mdc-notched-outline__notch\">\n" +
    "                                <span class=\"mdc-floating-label\" id=\"registration-email\">Email</span>\n" +
    "                            </span>\n" +
    "                            <span class=\"mdc-notched-outline__trailing\"></span>\n" +
    "                        </span>\n" +
    "                        <input type=\"email\" name=\"email\" class=\"mdc-text-field__input\" required aria-labelledby=\"registration-email\">\n" +
    "                    </label>\n" +
    "                    <label class=\"mdc-text-field mdc-text-field--outlined\">\n" +
    "                        <span class=\"mdc-notched-outline\">\n" +
    "                            <span class=\"mdc-notched-outline__leading\"></span>\n" +
    "                            <span class=\"mdc-notched-outline__notch\">\n" +
    "                                <span class=\"mdc-floating-label\" id=\"registration-name\">Имя</span>\n" +
    "                            </span>\n" +
    "                            <span class=\"mdc-notched-outline__trailing\"></span>\n" +
    "                        </span>\n" +
    "                        <input type=\"text\" name=\"name\" class=\"mdc-text-field__input\" required aria-labelledby=\"registration-name\">\n" +
    "                    </label>\n" +
    "                    <label class=\"mdc-text-field mdc-text-field--outlined\">\n" +
    "                        <span class=\"mdc-notched-outline\">\n" +
    "                            <span class=\"mdc-notched-outline__leading\"></span>\n" +
    "                            <span class=\"mdc-notched-outline__notch\">\n" +
    "                                <span class=\"mdc-floating-label\" id=\"registration-login\">Логин</span>\n" +
    "                            </span>\n" +
    "                            <span class=\"mdc-notched-outline__trailing\"></span>\n" +
    "                        </span>\n" +
    "                        <input type=\"text\" name=\"login\" class=\"mdc-text-field__input\" required aria-labelledby=\"registration-login\">\n" +
    "                    </label>\n" +
    "                    <label class=\"mdc-text-field mdc-text-field--outlined\">\n" +
    "                        <span class=\"mdc-notched-outline\">\n" +
    "                        <span class=\"mdc-notched-outline__leading\"></span>\n" +
    "                            <span class=\"mdc-notched-outline__notch\">\n" +
    "                                <span class=\"mdc-floating-label\" id=\"registration-pass\">Пароль</span>\n" +
    "                            </span>\n" +
    "                            <span class=\"mdc-notched-outline__trailing\"></span>\n" +
    "                        </span>\n" +
    "                        <input type=\"password\" name=\"pass\" class=\"mdc-text-field__input\" required aria-labelledby=\"registration-pass\">\n" +
    "                    </label>\n" +
    "                    <label class=\"mdc-text-field mdc-text-field--outlined\">\n" +
    "                        <span class=\"mdc-notched-outline\">\n" +
    "                            <span class=\"mdc-notched-outline__leading\"></span>\n" +
    "                            <span class=\"mdc-notched-outline__notch\">\n" +
    "                                <span class=\"mdc-floating-label\" id=\"registration-pass2\">Пароль еще раз</span>\n" +
    "                            </span>\n" +
    "                            <span class=\"mdc-notched-outline__trailing\"></span>\n" +
    "                        </span>\n" +
    "                        <input type=\"password\" name=\"pass2\" class=\"mdc-text-field__input\" required aria-labelledby=\"registration-pass2\">\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "                <button class=\"mdc-button mdc-button--raised\">\n" +
    "                    <div class=\"mdc-button__ripple\"></div>\n" +
    "                    <span class=\"mdc-button__label\">Зарегистрироваться</span>\n" +
    "                </button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"out-box\">\n" +
    "        <a class=\"install-button\" style=\"display: none\">Установить</a>\n" +
    "        <a href=\"#\" class=\"login-button\">Войти</a>\n" +
    "    </div>\n" +
    "</div>"; 

window["coreTemplates"]["auth/preloader.html"] = "<div class=\"mdc-circular-progress\" style=\"width:42px;height:24px;margin-left:-42px;\" role=\"progressbar\" aria-label=\"Example Progress Bar\" aria-valuemin=\"0\" aria-valuemax=\"1\">\n" +
    "    <div class=\"mdc-circular-progress__determinate-container\">\n" +
    "        <svg class=\"mdc-circular-progress__determinate-circle-graphic\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "            <circle class=\"mdc-circular-progress__determinate-track\" cx=\"12\" cy=\"12\" r=\"8.75\" stroke-width=\"2.5\"/>\n" +
    "            <circle class=\"mdc-circular-progress__determinate-circle\" cx=\"12\" cy=\"12\" r=\"8.75\" stroke-dasharray=\"54.978\" stroke-dashoffset=\"54.978\" stroke-width=\"2.5\"/>\n" +
    "        </svg>\n" +
    "    </div>\n" +
    "    <div class=\"mdc-circular-progress__indeterminate-container\">\n" +
    "        <div class=\"mdc-circular-progress__spinner-layer\">\n" +
    "            <div class=\"mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left\">\n" +
    "                <svg class=\"mdc-circular-progress__indeterminate-circle-graphic\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "                    <circle cx=\"12\" cy=\"12\" r=\"8.75\" stroke-dasharray=\"54.978\" stroke-dashoffset=\"27.489\" stroke-width=\"2.5\"/>\n" +
    "                </svg>\n" +
    "            </div>\n" +
    "            <div class=\"mdc-circular-progress__gap-patch\">\n" +
    "                <svg class=\"mdc-circular-progress__indeterminate-circle-graphic\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "                    <circle cx=\"12\" cy=\"12\" r=\"8.75\" stroke-dasharray=\"54.978\" stroke-dashoffset=\"27.489\" stroke-width=\"2\"/>\n" +
    "                </svg>\n" +
    "            </div>\n" +
    "            <div class=\"mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right\">\n" +
    "                <svg class=\"mdc-circular-progress__indeterminate-circle-graphic\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "                    <circle cx=\"12\" cy=\"12\" r=\"8.75\" stroke-dasharray=\"54.978\" stroke-dashoffset=\"27.489\" stroke-width=\"2.5\"/>\n" +
    "                </svg>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"; 

window["coreTemplates"]["menu/loader.html"] = "<div id=\"loader\">\n" +
    "    <div role=\"progressbar\" class=\"mdc-linear-progress loader-progress\" aria-label=\"Example Progress Bar\" aria-valuemin=\"0\" aria-valuemax=\"1\" aria-valuenow=\"0\">\n" +
    "        <div class=\"mdc-linear-progress__buffer\">\n" +
    "            <div class=\"mdc-linear-progress__buffer-bar\"></div>\n" +
    "            <div class=\"mdc-linear-progress__buffer-dots\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"mdc-linear-progress__bar mdc-linear-progress__primary-bar\">\n" +
    "            <span class=\"mdc-linear-progress__bar-inner\"></span>\n" +
    "        </div>\n" +
    "        <div class=\"mdc-linear-progress__bar mdc-linear-progress__secondary-bar\">\n" +
    "            <span class=\"mdc-linear-progress__bar-inner\"></span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"loader-block\"></div>\n" +
    "</div>"; 

window["coreTemplates"]["menu/main.html"] = "<header class=\"mdc-top-app-bar mdc-top-app-bar--fixed app-bar\">\n" +
    "    <div class=\"mdc-top-app-bar__row\">\n" +
    "        <section class=\"mdc-top-app-bar__section mdc-top-app-bar__section--align-start\">\n" +
    "            <button class=\"mdc-ripple-surface open-menu\"><i class=\"fa-solid fa-bars\"></i></button>\n" +
    "            <div class=\"header-title-container\">\n" +
    "                <span class=\"mdc-top-app-bar__title\"></span>\n" +
    "                <span class=\"mdc-top-app-bar__subtitle\"></span>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "        <section class=\"mdc-top-app-bar__section mdc-top-app-bar__section--align-end\" role=\"toolbar\"></section>\n" +
    "    </div>\n" +
    "</header>\n" +
    "<aside class=\"menu-drawer\">\n" +
    "    <div class=\"menu-drawer__content\">\n" +
    "        <div class=\"menu-drawer__header\">\n" +
    "            <a class=\"module-home\" href=\"#/\">\n" +
    "                <span class=\"fa-solid fa-house\"></span>\n" +
    "                <h3 class=\"system-title\"></h3>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <ul class=\"menu-list level-1\"></ul>\n" +
    "    </div>\n" +
    "</aside>\n" +
    "<div class=\"menu-drawer-scrim\"></div>\n" +
    "<div class=\"menu-drawer-swipe\"></div>\n" +
    "<div class=\"menu-drawer-app\">\n" +
    "    <main class=\"main-content\">\n" +
    "        <div class=\"main-wrapper\"></div>\n" +
    "    </main>\n" +
    "</div>"; 

window["coreTemplates"]["menu/module.html"] = "<li class=\"menu-list-item core-module core-module-<%= module.name %>\n" +
    "       <% if (module.sections && module.sections.length > 0) { %>menu-item-nested<% } %>\">\n" +
    "    <div class=\"item-control\">\n" +
    "        <a href=\"#/<%= module.name %>/<%= module.index %>\" class=\"mdc-ripple-surface\" data-module=\"<%= module.name %>\" data-section=\"<%= module.index %>\">\n" +
    "            <% if (module.icon) { %>\n" +
    "            <i class=\"<%= module.icon %>\"></i>\n" +
    "            <% } else { %>\n" +
    "            <span class=\"module-icon-letter\"><%= module.title.trim().substring(0, 1) %></span>\n" +
    "            <% } %>\n" +
    "            <span class=\"menu-list-item__text\"><%= module.title %></span>\n" +
    "        </a>\n" +
    "        <% if (module.sections && module.sections.length > 0) { %>\n" +
    "        <button class=\"menu-icon-button mdc-ripple-surface\"><i class=\"fa-solid fa-sort-down\"></i></button>\n" +
    "        <% } %>\n" +
    "    </div>\n" +
    "    <ul class=\"menu-list level-2\">\n" +
    "        <li class=\"menu-list-item core-module-section-index\">\n" +
    "            <a href=\"#/<%= module.name %>/<%= module.index %>\" class=\"mdc-ripple-surface\" data-module=\"<%= module.name %>\" data-section=\"<%= module.index %>\">\n" +
    "                <%= module.title %>\n" +
    "            </a>\n" +
    "        </li>\n" +
    "        <% if (module.sections && module.sections.length > 0) { %>\n" +
    "        <% module.sections.forEach(function(section) { %>\n" +
    "        <li class=\"menu-list-item core-module-section core-module-<%= module.name %>-<%= section.name %>\">\n" +
    "            <a href=\"#/<%= module.name %>/<%= section.name %>\" class=\"mdc-ripple-surface\" data-module=\"<%= module.name %>\" data-section=\"<%= section.name %>\">\n" +
    "                <span class=\"menu-list-item__text\"><%= section.title %></span>\n" +
    "            </a>\n" +
    "        </li>\n" +
    "        <% }); %>\n" +
    "        <% } %>\n" +
    "    </ul>\n" +
    "</li>"; 

window["coreTemplates"]["menu/navbar.html"] = "<ul class=\"navbar-nav\">\n" +
    "    <li class=\"nav-item dropdown cabinet-user\">\n" +
    "        <a class=\"nav-link dropdown-toggle d-flex align-items-center\" href=\"#\" data-mdb-toggle=\"dropdown\">\n" +
    "            <% if (user.avatar) { %>\n" +
    "            <img src=\"<%= user.avatar %>\" alt=\"avatar\" class=\"rounded-circle\" loading=\"lazy\">\n" +
    "            <% } else { %>\n" +
    "            <i class=\"fa-solid fa-circle-user\"></i>\n" +
    "            <% } %>\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "            <li class=\"cabinet-user-info\">\n" +
    "                <b class=\"cabinet-user-name\"><%= user.name %></b><br>\n" +
    "                <span class=\"cabinet-user-login\"><%= user.login %></span>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <hr class=\"dropdown-divider\">\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a class=\"dropdown-item menu-logout\" href=\"#\">\n" +
    "                    <i class=\"fa-solid fa-arrow-right-from-bracket\"></i> Выйти\n" +
    "                </a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </li>\n" +
    "</ul>"; 

window["coreTemplates"]["menu/preloader.html"] = "<div id=\"preloader\">\n" +
    "    <div class=\"loading-lock\"></div>\n" +
    "    <div class=\"loading-block\">\n" +
    "        <div class=\"mdc-circular-progress\" style=\"width:96px;height:48px;\" role=\"progressbar\" aria-label=\"Example Progress Bar\" aria-valuemin=\"0\" aria-valuemax=\"1\">\n" +
    "            <div class=\"mdc-circular-progress__determinate-container\">\n" +
    "                <svg class=\"mdc-circular-progress__determinate-circle-graphic\" viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "                    <circle class=\"mdc-circular-progress__determinate-track\" cx=\"24\" cy=\"24\" r=\"18\" stroke-width=\"4\"/>\n" +
    "                    <circle class=\"mdc-circular-progress__determinate-circle\" cx=\"24\" cy=\"24\" r=\"18\" stroke-dasharray=\"113.097\" stroke-dashoffset=\"113.097\" stroke-width=\"4\"/>\n" +
    "                </svg>\n" +
    "            </div>\n" +
    "            <div class=\"mdc-circular-progress__indeterminate-container\">\n" +
    "                <div class=\"mdc-circular-progress__spinner-layer\">\n" +
    "                    <div class=\"mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left\">\n" +
    "                        <svg class=\"mdc-circular-progress__indeterminate-circle-graphic\" viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "                            <circle cx=\"24\" cy=\"24\" r=\"18\" stroke-dasharray=\"113.097\" stroke-dashoffset=\"56.549\" stroke-width=\"4\"/>\n" +
    "                        </svg>\n" +
    "                    </div>\n" +
    "                    <div class=\"mdc-circular-progress__gap-patch\">\n" +
    "                        <svg class=\"mdc-circular-progress__indeterminate-circle-graphic\" viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "                            <circle cx=\"24\" cy=\"24\" r=\"18\" stroke-dasharray=\"113.097\" stroke-dashoffset=\"56.549\" stroke-width=\"3.2\"/>\n" +
    "                        </svg>\n" +
    "                    </div>\n" +
    "                    <div class=\"mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right\">\n" +
    "                        <svg class=\"mdc-circular-progress__indeterminate-circle-graphic\" viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "                            <circle cx=\"24\" cy=\"24\" r=\"18\" stroke-dasharray=\"113.097\" stroke-dashoffset=\"56.549\" stroke-width=\"4\"/>\n" +
    "                        </svg>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"loading-text\"><%= text %></div>\n" +
    "    </div>\n" +
    "</div>"; 
// END 