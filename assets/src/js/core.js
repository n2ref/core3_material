
import coreMain  from './core.main';
import coreTools from './core.tools';
import coreAuth from './core.auth';
import coreMenu from './core.menu';

let core = {

    main: coreMain,
    auth: coreAuth,
    menu: coreMenu,
    tools: coreTools,
    lang: {}
}


export default core;