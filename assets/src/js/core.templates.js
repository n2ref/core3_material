//HEAD 
window["coreTemplates"] = {};

window["coreTemplates"]["auth/main.html"] = "<div class=\"container container-login\" style=\"display: none\">\n" +
    "    <div class=\"mdc-card\">\n" +
    "        <div class=\"mdc-card__content\">\n" +
    "            <img src=\"\" alt=\"logo\" class=\"logo\" style=\"display: none\">\n" +
    "\n" +
    "            <form class=\"mb-5\" novalidate>\n" +
    "                <span class=\"text-danger\"></span>\n" +
    "                <div class=\"form-controls mb-5\">\n" +
    "                    <div class=\"mb-3 text-start\">\n" +
    "                        <label class=\"form-label\" for=\"auth-login\">Логин или Email</label>\n" +
    "                        <div class=\"control-icon position-relative\">\n" +
    "                            <input type=\"text\" name=\"login\" class=\"form-control\" id=\"auth-login\" required>\n" +
    "                            <i class=\"bi bi-person-fill\"></i>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"mb-5 text-start\">\n" +
    "                        <label class=\"form-label\" for=\"auth-password\">Пароль</label>\n" +
    "                        <div class=\"control-icon position-relative\">\n" +
    "                            <input type=\"password\" name=\"password\" class=\"form-control\" id=\"auth-password\" required>\n" +
    "                            <i class=\"bi bi-shield-lock\"></i>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <button class=\"btn btn-primary w-100 py-2\" type=\"submit\">Войти</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "\n" +
    "            <div class=\"links-container\">\n" +
    "                <a class=\"install-button\" style=\"display: none\">Установить</a>\n" +
    "                <a href=\"#/registration\" class=\"reg-button\">Регистрация</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container container-registration\" style=\"display: none\">\n" +
    "    <div class=\"mdc-card\">\n" +
    "        <div class=\"mdc-card__content\">\n" +
    "            <img src=\"\" alt=\"logo\" class=\"logo\" style=\"display: none\">\n" +
    "\n" +
    "            <p class=\"mdc-typography--headline5\">Регистрация</p>\n" +
    "            <div class=\"text-danger mdc-typography--subtitle2\"></div>\n" +
    "            <div class=\"text-success mdc-typography--subtitle2\"></div>\n" +
    "\n" +
    "            <form class=\"mb-5\" novalidate>\n" +
    "                <div class=\"form-controls mb-5\">\n" +
    "                    <div class=\"mb-3 text-start\">\n" +
    "                        <label class=\"form-label\" for=\"registration-name\">Имя</label>\n" +
    "                        <input type=\"text\" name=\"name\" class=\"form-control\" id=\"registration-name\" required>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"mb-3 text-start\">\n" +
    "                        <label class=\"form-label\" for=\"registration-email\">Email</label>\n" +
    "                        <input type=\"email\" name=\"email\" class=\"form-control\" id=\"registration-email\" required>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"mb-3 text-start\">\n" +
    "                        <label class=\"form-label\" for=\"registration-pass\">Пароль</label>\n" +
    "                        <input type=\"password\" name=\"password\" class=\"form-control\" id=\"registration-pass\" required>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"mb-5 text-start\">\n" +
    "                        <label class=\"form-label\" for=\"registration-pass2\">Пароль еще раз</label>\n" +
    "                        <input type=\"password\" class=\"form-control\" id=\"registration-pass2\" required>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <button class=\"btn btn-primary w-100 py-2\" type=\"submit\">Зарегистрироваться</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "\n" +
    "            <div class=\"links-container\">\n" +
    "                <a class=\"install-button\" style=\"display: none\">Установить</a>\n" +
    "                <a href=\"#\" class=\"login-button\">Войти</a>\n" +
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
    "        <button class=\"btn btn-link text-dark dropdown-toggle d-flex align-items-center\" type=\"button\" data-bs-toggle=\"dropdown\">\n" +
    "            <% if (user.avatar) { %>\n" +
    "            <img src=\"<%= user.avatar %>\" alt=\"avatar\" class=\"rounded-circle\" loading=\"lazy\">\n" +
    "            <% } else { %>\n" +
    "            <i class=\"fa-solid fa-circle-user\"></i>\n" +
    "            <% } %>\n" +
    "        </button>\n" +
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