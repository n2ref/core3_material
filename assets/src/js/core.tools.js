
var coreTools = {



    /**
     * Получение паравметров из хэша
     * @param url
     * @returns {{module: string, action: string, params: string}}
     */
    getParams: function (url) {

        if (typeof url === 'undefined') {
            url = '/mod' + location.hash.substr(1);
        }

        let params = url.match(/^\/mod\/([a-z0-9_]*)(?:\/|)([a-z0-9_]*)(?:(\?[^?]*)|)/);
        let result = {
            module: params !== null && typeof params[1] === 'string' ? params[1] : '',
            section: params !== null && typeof params[2] === 'string' ? params[2] : '',
            query:  params !== null && typeof params[3] === 'string' ? params[3] : '',
        };

        result.query = coreTools.parseQuery(result.query);

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
     * @returns Promise
     */
    getFingerprint: function () {

        return FingerprintJS.load()
            .then((fp) => fp.get())
            .then((result) => {
                return result.visitorId;
            });
    },


    /**
     * @param token
     * @returns {*}
     */
    jwtDecode: function (token) {
        return jwt_decode(token);
    }
}