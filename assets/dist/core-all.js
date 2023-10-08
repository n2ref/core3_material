/*! jQuery v3.6.4 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.4",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,y,s,c,v,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.cssHas=ce(function(){try{return C.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),d.cssHas||y.push(":has"),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[S]&&(y=Ce(y)),v&&!v[S]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function $(){E.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||S.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(t,e){S.event.special[t]={setup:function(){return Se(this,t,Ce),!1},trigger:function(){return Se(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace($e,"$1")||void 0),""!==a||ie(e)||(a=S.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=E.createElement("div").style,Xe={};function Ve(e){var t=S.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return B(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return B(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){S(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=S(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:yt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},v.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),v.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,S.ajaxSettings),t):Bt(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=S.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?S(v):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=E.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=S.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=S.event&&y.global)&&0==S.active++&&S.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(Et.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<S.inArray("script",y.dataTypes)&&S.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
;
/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t=new Map,e={set(e,i,n){t.has(e)||t.set(e,new Map);const s=t.get(e);s.has(i)||0===s.size?s.set(i,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)},get:(e,i)=>t.has(e)&&t.get(e).get(i)||null,remove(e,i){if(!t.has(e))return;const n=t.get(e);n.delete(i),0===n.size&&t.delete(e)}},i="transitionend",n=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,((t,e)=>`#${CSS.escape(e)}`))),t),s=t=>{t.dispatchEvent(new Event(i))},o=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),r=t=>o(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(n(t)):null,a=t=>{if(!o(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])");if(!i)return e;if(i!==t){const e=t.closest("summary");if(e&&e.parentNode!==i)return!1;if(null===e)return!1}return e},l=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),c=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c(t.parentNode):null},h=()=>{},d=t=>{t.offsetHeight},u=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,f=[],p=()=>"rtl"===document.documentElement.dir,m=t=>{var e;e=()=>{const e=u();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}},"loading"===document.readyState?(f.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of f)t()})),f.push(e)):e()},g=(t,e=[],i=t)=>"function"==typeof t?t(...e):i,_=(t,e,n=!0)=>{if(!n)return void g(t);const o=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5;let r=!1;const a=({target:n})=>{n===e&&(r=!0,e.removeEventListener(i,a),g(t))};e.addEventListener(i,a),setTimeout((()=>{r||s(e)}),o)},b=(t,e,i,n)=>{const s=t.length;let o=t.indexOf(e);return-1===o?!i&&n?t[s-1]:t[0]:(o+=i?1:-1,n&&(o=(o+s)%s),t[Math.max(0,Math.min(o,s-1))])},v=/[^.]*(?=\..*)\.|.*/,y=/\..*/,w=/::\d+$/,A={};let E=1;const T={mouseenter:"mouseover",mouseleave:"mouseout"},C=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function O(t,e){return e&&`${e}::${E++}`||t.uidEvent||E++}function x(t){const e=O(t);return t.uidEvent=e,A[e]=A[e]||{},A[e]}function k(t,e,i=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===i))}function L(t,e,i){const n="string"==typeof e,s=n?i:e||i;let o=I(t);return C.has(o)||(o=t),[n,s,o]}function S(t,e,i,n,s){if("string"!=typeof e||!t)return;let[o,r,a]=L(e,i,n);if(e in T){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r=t(r)}const l=x(t),c=l[a]||(l[a]={}),h=k(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&s);const d=O(r,e.replace(v,"")),u=o?function(t,e,i){return function n(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return P(s,{delegateTarget:r}),n.oneOff&&N.off(t,s.type,e,i),i.apply(r,[s])}}(t,i,r):function(t,e){return function i(n){return P(n,{delegateTarget:t}),i.oneOff&&N.off(t,n.type,e),e.apply(t,[n])}}(t,r);u.delegationSelector=o?i:null,u.callable=r,u.oneOff=s,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function D(t,e,i,n,s){const o=k(e[i],n,s);o&&(t.removeEventListener(i,o,Boolean(s)),delete e[i][o.uidEvent])}function $(t,e,i,n){const s=e[i]||{};for(const[o,r]of Object.entries(s))o.includes(n)&&D(t,e,i,r.callable,r.delegationSelector)}function I(t){return t=t.replace(y,""),T[t]||t}const N={on(t,e,i,n){S(t,e,i,n,!1)},one(t,e,i,n){S(t,e,i,n,!0)},off(t,e,i,n){if("string"!=typeof e||!t)return;const[s,o,r]=L(e,i,n),a=r!==e,l=x(t),c=l[r]||{},h=e.startsWith(".");if(void 0===o){if(h)for(const i of Object.keys(l))$(t,l,i,e.slice(1));for(const[i,n]of Object.entries(c)){const s=i.replace(w,"");a&&!e.includes(s)||D(t,l,r,n.callable,n.delegationSelector)}}else{if(!Object.keys(c).length)return;D(t,l,r,o,s?i:null)}},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=u();let s=null,o=!0,r=!0,a=!1;e!==I(e)&&n&&(s=n.Event(e,i),n(t).trigger(s),o=!s.isPropagationStopped(),r=!s.isImmediatePropagationStopped(),a=s.isDefaultPrevented());const l=P(new Event(e,{bubbles:o,cancelable:!0}),i);return a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&s&&s.preventDefault(),l}};function P(t,e={}){for(const[i,n]of Object.entries(e))try{t[i]=n}catch(e){Object.defineProperty(t,i,{configurable:!0,get:()=>n})}return t}function M(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function j(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const F={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${j(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${j(e)}`)},getDataAttributes(t){if(!t)return{};const e={},i=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const n of i){let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=M(t.dataset[n])}return e},getDataAttribute:(t,e)=>M(t.getAttribute(`data-bs-${j(e)}`))};class H{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=o(e)?F.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...o(e)?F.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[n,s]of Object.entries(e)){const e=t[n],r=o(e)?"element":null==(i=e)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(s).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`)}var i}}class W extends H{constructor(t,i){super(),(t=r(t))&&(this._element=t,this._config=this._getConfig(i),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),N.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){_(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return e.get(r(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.2"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const B=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?n(i.trim()):null}return e},z={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let n=t.parentNode.closest(e);for(;n;)i.push(n),n=n.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!l(t)&&a(t)))},getSelectorFromElement(t){const e=B(t);return e&&z.findOne(e)?e:null},getElementFromSelector(t){const e=B(t);return e?z.findOne(e):null},getMultipleElementsFromSelector(t){const e=B(t);return e?z.find(e):[]}},R=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,n=t.NAME;N.on(document,i,`[data-bs-dismiss="${n}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),l(this))return;const s=z.getElementFromSelector(this)||this.closest(`.${n}`);t.getOrCreateInstance(s)[e]()}))},q=".bs.alert",V=`close${q}`,K=`closed${q}`;class Q extends W{static get NAME(){return"alert"}close(){if(N.trigger(this._element,V).defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),N.trigger(this._element,K),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=Q.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}R(Q,"close"),m(Q);const X='[data-bs-toggle="button"]';class Y extends W{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=Y.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}N.on(document,"click.bs.button.data-api",X,(t=>{t.preventDefault();const e=t.target.closest(X);Y.getOrCreateInstance(e).toggle()})),m(Y);const U=".bs.swipe",G=`touchstart${U}`,J=`touchmove${U}`,Z=`touchend${U}`,tt=`pointerdown${U}`,et=`pointerup${U}`,it={endCallback:null,leftCallback:null,rightCallback:null},nt={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class st extends H{constructor(t,e){super(),this._element=t,t&&st.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return it}static get DefaultType(){return nt}static get NAME(){return"swipe"}dispose(){N.off(this._element,U)}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),g(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&g(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(N.on(this._element,tt,(t=>this._start(t))),N.on(this._element,et,(t=>this._end(t))),this._element.classList.add("pointer-event")):(N.on(this._element,G,(t=>this._start(t))),N.on(this._element,J,(t=>this._move(t))),N.on(this._element,Z,(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const ot=".bs.carousel",rt=".data-api",at="next",lt="prev",ct="left",ht="right",dt=`slide${ot}`,ut=`slid${ot}`,ft=`keydown${ot}`,pt=`mouseenter${ot}`,mt=`mouseleave${ot}`,gt=`dragstart${ot}`,_t=`load${ot}${rt}`,bt=`click${ot}${rt}`,vt="carousel",yt="active",wt=".active",At=".carousel-item",Et=wt+At,Tt={ArrowLeft:ht,ArrowRight:ct},Ct={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Ot={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class xt extends W{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=z.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===vt&&this.cycle()}static get Default(){return Ct}static get DefaultType(){return Ot}static get NAME(){return"carousel"}next(){this._slide(at)}nextWhenVisible(){!document.hidden&&a(this._element)&&this.next()}prev(){this._slide(lt)}pause(){this._isSliding&&s(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?N.one(this._element,ut,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void N.one(this._element,ut,(()=>this.to(t)));const i=this._getItemIndex(this._getActive());if(i===t)return;const n=t>i?at:lt;this._slide(n,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&N.on(this._element,ft,(t=>this._keydown(t))),"hover"===this._config.pause&&(N.on(this._element,pt,(()=>this.pause())),N.on(this._element,mt,(()=>this._maybeEnableCycle()))),this._config.touch&&st.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of z.find(".carousel-item img",this._element))N.on(t,gt,(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder(ct)),rightCallback:()=>this._slide(this._directionToOrder(ht)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new st(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=Tt[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=z.findOne(wt,this._indicatorsElement);e.classList.remove(yt),e.removeAttribute("aria-current");const i=z.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(yt),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),n=t===at,s=e||b(this._getItems(),i,n,this._config.wrap);if(s===i)return;const o=this._getItemIndex(s),r=e=>N.trigger(this._element,e,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(r(dt).defaultPrevented)return;if(!i||!s)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=s;const l=n?"carousel-item-start":"carousel-item-end",c=n?"carousel-item-next":"carousel-item-prev";s.classList.add(c),d(s),i.classList.add(l),s.classList.add(l),this._queueCallback((()=>{s.classList.remove(l,c),s.classList.add(yt),i.classList.remove(yt,c,l),this._isSliding=!1,r(ut)}),i,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return z.findOne(Et,this._element)}_getItems(){return z.find(At,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return p()?t===ct?lt:at:t===ct?at:lt}_orderToDirection(t){return p()?t===lt?ct:ht:t===lt?ht:ct}static jQueryInterface(t){return this.each((function(){const e=xt.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}N.on(document,bt,"[data-bs-slide], [data-bs-slide-to]",(function(t){const e=z.getElementFromSelector(this);if(!e||!e.classList.contains(vt))return;t.preventDefault();const i=xt.getOrCreateInstance(e),n=this.getAttribute("data-bs-slide-to");return n?(i.to(n),void i._maybeEnableCycle()):"next"===F.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),N.on(window,_t,(()=>{const t=z.find('[data-bs-ride="carousel"]');for(const e of t)xt.getOrCreateInstance(e)})),m(xt);const kt=".bs.collapse",Lt=`show${kt}`,St=`shown${kt}`,Dt=`hide${kt}`,$t=`hidden${kt}`,It=`click${kt}.data-api`,Nt="show",Pt="collapse",Mt="collapsing",jt=`:scope .${Pt} .${Pt}`,Ft='[data-bs-toggle="collapse"]',Ht={parent:null,toggle:!0},Wt={parent:"(null|element)",toggle:"boolean"};class Bt extends W{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=z.find(Ft);for(const t of i){const e=z.getSelectorFromElement(t),i=z.find(e).filter((t=>t===this._element));null!==e&&i.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Ht}static get DefaultType(){return Wt}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>Bt.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if(N.trigger(this._element,Lt).defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(Pt),this._element.classList.add(Mt),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(Mt),this._element.classList.add(Pt,Nt),this._element.style[e]="",N.trigger(this._element,St)}),this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(N.trigger(this._element,Dt).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,d(this._element),this._element.classList.add(Mt),this._element.classList.remove(Pt,Nt);for(const t of this._triggerArray){const e=z.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(Mt),this._element.classList.add(Pt),N.trigger(this._element,$t)}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(Nt)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=r(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(Ft);for(const e of t){const t=z.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=z.find(jt,this._config.parent);return z.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const i=Bt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}N.on(document,It,Ft,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();for(const t of z.getMultipleElementsFromSelector(this))Bt.getOrCreateInstance(t,{toggle:!1}).toggle()})),m(Bt);var zt="top",Rt="bottom",qt="right",Vt="left",Kt="auto",Qt=[zt,Rt,qt,Vt],Xt="start",Yt="end",Ut="clippingParents",Gt="viewport",Jt="popper",Zt="reference",te=Qt.reduce((function(t,e){return t.concat([e+"-"+Xt,e+"-"+Yt])}),[]),ee=[].concat(Qt,[Kt]).reduce((function(t,e){return t.concat([e,e+"-"+Xt,e+"-"+Yt])}),[]),ie="beforeRead",ne="read",se="afterRead",oe="beforeMain",re="main",ae="afterMain",le="beforeWrite",ce="write",he="afterWrite",de=[ie,ne,se,oe,re,ae,le,ce,he];function ue(t){return t?(t.nodeName||"").toLowerCase():null}function fe(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function pe(t){return t instanceof fe(t).Element||t instanceof Element}function me(t){return t instanceof fe(t).HTMLElement||t instanceof HTMLElement}function ge(t){return"undefined"!=typeof ShadowRoot&&(t instanceof fe(t).ShadowRoot||t instanceof ShadowRoot)}const _e={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];me(s)&&ue(s)&&(Object.assign(s.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],s=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});me(n)&&ue(n)&&(Object.assign(n.style,o),Object.keys(s).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function be(t){return t.split("-")[0]}var ve=Math.max,ye=Math.min,we=Math.round;function Ae(){var t=navigator.userAgentData;return null!=t&&t.brands&&Array.isArray(t.brands)?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function Ee(){return!/^((?!chrome|android).)*safari/i.test(Ae())}function Te(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=!1);var n=t.getBoundingClientRect(),s=1,o=1;e&&me(t)&&(s=t.offsetWidth>0&&we(n.width)/t.offsetWidth||1,o=t.offsetHeight>0&&we(n.height)/t.offsetHeight||1);var r=(pe(t)?fe(t):window).visualViewport,a=!Ee()&&i,l=(n.left+(a&&r?r.offsetLeft:0))/s,c=(n.top+(a&&r?r.offsetTop:0))/o,h=n.width/s,d=n.height/o;return{width:h,height:d,top:c,right:l+h,bottom:c+d,left:l,x:l,y:c}}function Ce(t){var e=Te(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function Oe(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&ge(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function xe(t){return fe(t).getComputedStyle(t)}function ke(t){return["table","td","th"].indexOf(ue(t))>=0}function Le(t){return((pe(t)?t.ownerDocument:t.document)||window.document).documentElement}function Se(t){return"html"===ue(t)?t:t.assignedSlot||t.parentNode||(ge(t)?t.host:null)||Le(t)}function De(t){return me(t)&&"fixed"!==xe(t).position?t.offsetParent:null}function $e(t){for(var e=fe(t),i=De(t);i&&ke(i)&&"static"===xe(i).position;)i=De(i);return i&&("html"===ue(i)||"body"===ue(i)&&"static"===xe(i).position)?e:i||function(t){var e=/firefox/i.test(Ae());if(/Trident/i.test(Ae())&&me(t)&&"fixed"===xe(t).position)return null;var i=Se(t);for(ge(i)&&(i=i.host);me(i)&&["html","body"].indexOf(ue(i))<0;){var n=xe(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function Ie(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Ne(t,e,i){return ve(t,ye(e,i))}function Pe(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function Me(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}const je={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,s=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=be(i.placement),l=Ie(a),c=[Vt,qt].indexOf(a)>=0?"height":"width";if(o&&r){var h=function(t,e){return Pe("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:Me(t,Qt))}(s.padding,i),d=Ce(o),u="y"===l?zt:Vt,f="y"===l?Rt:qt,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],m=r[l]-i.rects.reference[l],g=$e(o),_=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,b=p/2-m/2,v=h[u],y=_-d[c]-h[f],w=_/2-d[c]/2+b,A=Ne(v,w,y),E=l;i.modifiersData[n]=((e={})[E]=A,e.centerOffset=A-w,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&Oe(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Fe(t){return t.split("-")[1]}var He={top:"auto",right:"auto",bottom:"auto",left:"auto"};function We(t){var e,i=t.popper,n=t.popperRect,s=t.placement,o=t.variation,r=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,h=t.roundOffsets,d=t.isFixed,u=r.x,f=void 0===u?0:u,p=r.y,m=void 0===p?0:p,g="function"==typeof h?h({x:f,y:m}):{x:f,y:m};f=g.x,m=g.y;var _=r.hasOwnProperty("x"),b=r.hasOwnProperty("y"),v=Vt,y=zt,w=window;if(c){var A=$e(i),E="clientHeight",T="clientWidth";A===fe(i)&&"static"!==xe(A=Le(i)).position&&"absolute"===a&&(E="scrollHeight",T="scrollWidth"),(s===zt||(s===Vt||s===qt)&&o===Yt)&&(y=Rt,m-=(d&&A===w&&w.visualViewport?w.visualViewport.height:A[E])-n.height,m*=l?1:-1),s!==Vt&&(s!==zt&&s!==Rt||o!==Yt)||(v=qt,f-=(d&&A===w&&w.visualViewport?w.visualViewport.width:A[T])-n.width,f*=l?1:-1)}var C,O=Object.assign({position:a},c&&He),x=!0===h?function(t,e){var i=t.x,n=t.y,s=e.devicePixelRatio||1;return{x:we(i*s)/s||0,y:we(n*s)/s||0}}({x:f,y:m},fe(i)):{x:f,y:m};return f=x.x,m=x.y,l?Object.assign({},O,((C={})[y]=b?"0":"",C[v]=_?"0":"",C.transform=(w.devicePixelRatio||1)<=1?"translate("+f+"px, "+m+"px)":"translate3d("+f+"px, "+m+"px, 0)",C)):Object.assign({},O,((e={})[y]=b?m+"px":"",e[v]=_?f+"px":"",e.transform="",e))}const Be={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:be(e.placement),variation:Fe(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,We(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,We(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}};var ze={passive:!0};const Re={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,o=void 0===s||s,r=n.resize,a=void 0===r||r,l=fe(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,ze)})),a&&l.addEventListener("resize",i.update,ze),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,ze)})),a&&l.removeEventListener("resize",i.update,ze)}},data:{}};var qe={left:"right",right:"left",bottom:"top",top:"bottom"};function Ve(t){return t.replace(/left|right|bottom|top/g,(function(t){return qe[t]}))}var Ke={start:"end",end:"start"};function Qe(t){return t.replace(/start|end/g,(function(t){return Ke[t]}))}function Xe(t){var e=fe(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ye(t){return Te(Le(t)).left+Xe(t).scrollLeft}function Ue(t){var e=xe(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function Ge(t){return["html","body","#document"].indexOf(ue(t))>=0?t.ownerDocument.body:me(t)&&Ue(t)?t:Ge(Se(t))}function Je(t,e){var i;void 0===e&&(e=[]);var n=Ge(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),o=fe(n),r=s?[o].concat(o.visualViewport||[],Ue(n)?n:[]):n,a=e.concat(r);return s?a:a.concat(Je(Se(r)))}function Ze(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function ti(t,e,i){return e===Gt?Ze(function(t,e){var i=fe(t),n=Le(t),s=i.visualViewport,o=n.clientWidth,r=n.clientHeight,a=0,l=0;if(s){o=s.width,r=s.height;var c=Ee();(c||!c&&"fixed"===e)&&(a=s.offsetLeft,l=s.offsetTop)}return{width:o,height:r,x:a+Ye(t),y:l}}(t,i)):pe(e)?function(t,e){var i=Te(t,!1,"fixed"===e);return i.top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i}(e,i):Ze(function(t){var e,i=Le(t),n=Xe(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=ve(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=ve(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+Ye(t),l=-n.scrollTop;return"rtl"===xe(s||i).direction&&(a+=ve(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(Le(t)))}function ei(t){var e,i=t.reference,n=t.element,s=t.placement,o=s?be(s):null,r=s?Fe(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case zt:e={x:a,y:i.y-n.height};break;case Rt:e={x:a,y:i.y+i.height};break;case qt:e={x:i.x+i.width,y:l};break;case Vt:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?Ie(o):null;if(null!=c){var h="y"===c?"height":"width";switch(r){case Xt:e[c]=e[c]-(i[h]/2-n[h]/2);break;case Yt:e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function ii(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,o=i.strategy,r=void 0===o?t.strategy:o,a=i.boundary,l=void 0===a?Ut:a,c=i.rootBoundary,h=void 0===c?Gt:c,d=i.elementContext,u=void 0===d?Jt:d,f=i.altBoundary,p=void 0!==f&&f,m=i.padding,g=void 0===m?0:m,_=Pe("number"!=typeof g?g:Me(g,Qt)),b=u===Jt?Zt:Jt,v=t.rects.popper,y=t.elements[p?b:u],w=function(t,e,i,n){var s="clippingParents"===e?function(t){var e=Je(Se(t)),i=["absolute","fixed"].indexOf(xe(t).position)>=0&&me(t)?$e(t):t;return pe(i)?e.filter((function(t){return pe(t)&&Oe(t,i)&&"body"!==ue(t)})):[]}(t):[].concat(e),o=[].concat(s,[i]),r=o[0],a=o.reduce((function(e,i){var s=ti(t,i,n);return e.top=ve(s.top,e.top),e.right=ye(s.right,e.right),e.bottom=ye(s.bottom,e.bottom),e.left=ve(s.left,e.left),e}),ti(t,r,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(pe(y)?y:y.contextElement||Le(t.elements.popper),l,h,r),A=Te(t.elements.reference),E=ei({reference:A,element:v,strategy:"absolute",placement:s}),T=Ze(Object.assign({},v,E)),C=u===Jt?T:A,O={top:w.top-C.top+_.top,bottom:C.bottom-w.bottom+_.bottom,left:w.left-C.left+_.left,right:C.right-w.right+_.right},x=t.modifiersData.offset;if(u===Jt&&x){var k=x[s];Object.keys(O).forEach((function(t){var e=[qt,Rt].indexOf(t)>=0?1:-1,i=[zt,Rt].indexOf(t)>=0?"y":"x";O[t]+=k[i]*e}))}return O}function ni(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?ee:l,h=Fe(n),d=h?a?te:te.filter((function(t){return Fe(t)===h})):Qt,u=d.filter((function(t){return c.indexOf(t)>=0}));0===u.length&&(u=d);var f=u.reduce((function(e,i){return e[i]=ii(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[be(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}const si={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,u=i.altBoundary,f=i.flipVariations,p=void 0===f||f,m=i.allowedAutoPlacements,g=e.options.placement,_=be(g),b=l||(_!==g&&p?function(t){if(be(t)===Kt)return[];var e=Ve(t);return[Qe(t),e,Qe(e)]}(g):[Ve(g)]),v=[g].concat(b).reduce((function(t,i){return t.concat(be(i)===Kt?ni(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:p,allowedAutoPlacements:m}):i)}),[]),y=e.rects.reference,w=e.rects.popper,A=new Map,E=!0,T=v[0],C=0;C<v.length;C++){var O=v[C],x=be(O),k=Fe(O)===Xt,L=[zt,Rt].indexOf(x)>=0,S=L?"width":"height",D=ii(e,{placement:O,boundary:h,rootBoundary:d,altBoundary:u,padding:c}),$=L?k?qt:Vt:k?Rt:zt;y[S]>w[S]&&($=Ve($));var I=Ve($),N=[];if(o&&N.push(D[x]<=0),a&&N.push(D[$]<=0,D[I]<=0),N.every((function(t){return t}))){T=O,E=!1;break}A.set(O,N)}if(E)for(var P=function(t){var e=v.find((function(e){var i=A.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},M=p?3:1;M>0&&"break"!==P(M);M--);e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function oi(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function ri(t){return[zt,qt,Rt,Vt].some((function(e){return t[e]>=0}))}const ai={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,r=ii(e,{elementContext:"reference"}),a=ii(e,{altBoundary:!0}),l=oi(r,n),c=oi(a,s,o),h=ri(l),d=ri(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}},li={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.offset,o=void 0===s?[0,0]:s,r=ee.reduce((function(t,i){return t[i]=function(t,e,i){var n=be(t),s=[Vt,zt].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[Vt,qt].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=r}},ci={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=ei({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},hi={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,u=i.tether,f=void 0===u||u,p=i.tetherOffset,m=void 0===p?0:p,g=ii(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),_=be(e.placement),b=Fe(e.placement),v=!b,y=Ie(_),w="x"===y?"y":"x",A=e.modifiersData.popperOffsets,E=e.rects.reference,T=e.rects.popper,C="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,O="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),x=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(A){if(o){var L,S="y"===y?zt:Vt,D="y"===y?Rt:qt,$="y"===y?"height":"width",I=A[y],N=I+g[S],P=I-g[D],M=f?-T[$]/2:0,j=b===Xt?E[$]:T[$],F=b===Xt?-T[$]:-E[$],H=e.elements.arrow,W=f&&H?Ce(H):{width:0,height:0},B=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},z=B[S],R=B[D],q=Ne(0,E[$],W[$]),V=v?E[$]/2-M-q-z-O.mainAxis:j-q-z-O.mainAxis,K=v?-E[$]/2+M+q+R+O.mainAxis:F+q+R+O.mainAxis,Q=e.elements.arrow&&$e(e.elements.arrow),X=Q?"y"===y?Q.clientTop||0:Q.clientLeft||0:0,Y=null!=(L=null==x?void 0:x[y])?L:0,U=I+K-Y,G=Ne(f?ye(N,I+V-Y-X):N,I,f?ve(P,U):P);A[y]=G,k[y]=G-I}if(a){var J,Z="x"===y?zt:Vt,tt="x"===y?Rt:qt,et=A[w],it="y"===w?"height":"width",nt=et+g[Z],st=et-g[tt],ot=-1!==[zt,Vt].indexOf(_),rt=null!=(J=null==x?void 0:x[w])?J:0,at=ot?nt:et-E[it]-T[it]-rt+O.altAxis,lt=ot?et+E[it]+T[it]-rt-O.altAxis:st,ct=f&&ot?function(t,e,i){var n=Ne(t,e,i);return n>i?i:n}(at,et,lt):Ne(f?at:nt,et,f?lt:st);A[w]=ct,k[w]=ct-et}e.modifiersData[n]=k}},requiresIfExists:["offset"]};function di(t,e,i){void 0===i&&(i=!1);var n,s,o=me(e),r=me(e)&&function(t){var e=t.getBoundingClientRect(),i=we(e.width)/t.offsetWidth||1,n=we(e.height)/t.offsetHeight||1;return 1!==i||1!==n}(e),a=Le(e),l=Te(t,r,i),c={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(o||!o&&!i)&&(("body"!==ue(e)||Ue(a))&&(c=(n=e)!==fe(n)&&me(n)?{scrollLeft:(s=n).scrollLeft,scrollTop:s.scrollTop}:Xe(n)),me(e)?((h=Te(e,!0)).x+=e.clientLeft,h.y+=e.clientTop):a&&(h.x=Ye(a))),{x:l.left+c.scrollLeft-h.x,y:l.top+c.scrollTop-h.y,width:l.width,height:l.height}}function ui(t){var e=new Map,i=new Set,n=[];function s(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var n=e.get(t);n&&s(n)}})),n.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||s(t)})),n}var fi={placement:"bottom",modifiers:[],strategy:"absolute"};function pi(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function mi(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,o=void 0===s?fi:s;return function(t,e,i){void 0===i&&(i=o);var s,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},fi,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(i){var s="function"==typeof i?i(a.options):i;d(),a.options=Object.assign({},o,a.options,s),a.scrollParents={reference:pe(t)?Je(t):t.contextElement?Je(t.contextElement):[],popper:Je(e)};var r,c,u=function(t){var e=ui(t);return de.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((r=[].concat(n,a.options.modifiers),c=r.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(c).map((function(t){return c[t]}))));return a.orderedModifiers=u.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,s=t.effect;if("function"==typeof s){var o=s({state:a,name:e,instance:h,options:n});l.push(o||function(){})}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(pi(e,i)){a.rects={reference:di(e,$e(i),"fixed"===a.options.strategy),popper:Ce(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var s=a.orderedModifiers[n],o=s.fn,r=s.options,l=void 0===r?{}:r,d=s.name;"function"==typeof o&&(a=o({state:a,options:l,name:d,instance:h})||a)}else a.reset=!1,n=-1}}},update:(s=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(s())}))}))),r}),destroy:function(){d(),c=!0}};if(!pi(t,e))return h;function d(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),h}}var gi=mi(),_i=mi({defaultModifiers:[Re,ci,Be,_e]}),bi=mi({defaultModifiers:[Re,ci,Be,_e,li,si,hi,je,ai]});const vi=Object.freeze(Object.defineProperty({__proto__:null,afterMain:ae,afterRead:se,afterWrite:he,applyStyles:_e,arrow:je,auto:Kt,basePlacements:Qt,beforeMain:oe,beforeRead:ie,beforeWrite:le,bottom:Rt,clippingParents:Ut,computeStyles:Be,createPopper:bi,createPopperBase:gi,createPopperLite:_i,detectOverflow:ii,end:Yt,eventListeners:Re,flip:si,hide:ai,left:Vt,main:re,modifierPhases:de,offset:li,placements:ee,popper:Jt,popperGenerator:mi,popperOffsets:ci,preventOverflow:hi,read:ne,reference:Zt,right:qt,start:Xt,top:zt,variationPlacements:te,viewport:Gt,write:ce},Symbol.toStringTag,{value:"Module"})),yi="dropdown",wi=".bs.dropdown",Ai=".data-api",Ei="ArrowUp",Ti="ArrowDown",Ci=`hide${wi}`,Oi=`hidden${wi}`,xi=`show${wi}`,ki=`shown${wi}`,Li=`click${wi}${Ai}`,Si=`keydown${wi}${Ai}`,Di=`keyup${wi}${Ai}`,$i="show",Ii='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ni=`${Ii}.${$i}`,Pi=".dropdown-menu",Mi=p()?"top-end":"top-start",ji=p()?"top-start":"top-end",Fi=p()?"bottom-end":"bottom-start",Hi=p()?"bottom-start":"bottom-end",Wi=p()?"left-start":"right-start",Bi=p()?"right-start":"left-start",zi={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Ri={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class qi extends W{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=z.next(this._element,Pi)[0]||z.prev(this._element,Pi)[0]||z.findOne(Pi,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return zi}static get DefaultType(){return Ri}static get NAME(){return yi}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!N.trigger(this._element,xi,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))N.on(t,"mouseover",h);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add($i),this._element.classList.add($i),N.trigger(this._element,ki,t)}}hide(){if(l(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!N.trigger(this._element,Ci,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))N.off(t,"mouseover",h);this._popper&&this._popper.destroy(),this._menu.classList.remove($i),this._element.classList.remove($i),this._element.setAttribute("aria-expanded","false"),F.removeDataAttribute(this._menu,"popper"),N.trigger(this._element,Oi,t)}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!o(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===vi)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=this._parent:o(this._config.reference)?t=r(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=bi(t,this._menu,e)}_isShown(){return this._menu.classList.contains($i)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return Wi;if(t.classList.contains("dropstart"))return Bi;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?ji:Mi:e?Hi:Fi}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(F.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...g(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:e}){const i=z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>a(t)));i.length&&b(i,e,t===Ti,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=qi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;const e=z.find(Ni);for(const i of e){const e=qi.getInstance(i);if(!e||!1===e._config.autoClose)continue;const n=t.composedPath(),s=n.includes(e._menu);if(n.includes(e._element)||"inside"===e._config.autoClose&&!s||"outside"===e._config.autoClose&&s)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:e._element};"click"===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,n=[Ei,Ti].includes(t.key);if(!n&&!i)return;if(e&&!i)return;t.preventDefault();const s=this.matches(Ii)?this:z.prev(this,Ii)[0]||z.next(this,Ii)[0]||z.findOne(Ii,t.delegateTarget.parentNode),o=qi.getOrCreateInstance(s);if(n)return t.stopPropagation(),o.show(),void o._selectMenuItem(t);o._isShown()&&(t.stopPropagation(),o.hide(),s.focus())}}N.on(document,Si,Ii,qi.dataApiKeydownHandler),N.on(document,Si,Pi,qi.dataApiKeydownHandler),N.on(document,Li,qi.clearMenus),N.on(document,Di,qi.clearMenus),N.on(document,Li,Ii,(function(t){t.preventDefault(),qi.getOrCreateInstance(this).toggle()})),m(qi);const Vi="backdrop",Ki="show",Qi=`mousedown.bs.${Vi}`,Xi={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Yi={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Ui extends H{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Xi}static get DefaultType(){return Yi}static get NAME(){return Vi}show(t){if(!this._config.isVisible)return void g(t);this._append();const e=this._getElement();this._config.isAnimated&&d(e),e.classList.add(Ki),this._emulateAnimation((()=>{g(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(Ki),this._emulateAnimation((()=>{this.dispose(),g(t)}))):g(t)}dispose(){this._isAppended&&(N.off(this._element,Qi),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=r(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),N.on(t,Qi,(()=>{g(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){_(t,this._getElement(),this._config.isAnimated)}}const Gi=".bs.focustrap",Ji=`focusin${Gi}`,Zi=`keydown.tab${Gi}`,tn="backward",en={autofocus:!0,trapElement:null},nn={autofocus:"boolean",trapElement:"element"};class sn extends H{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return en}static get DefaultType(){return nn}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),N.off(document,Gi),N.on(document,Ji,(t=>this._handleFocusin(t))),N.on(document,Zi,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,N.off(document,Gi))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=z.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===tn?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?tn:"forward")}}const on=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",rn=".sticky-top",an="padding-right",ln="margin-right";class cn{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,an,(e=>e+t)),this._setElementAttributes(on,an,(e=>e+t)),this._setElementAttributes(rn,ln,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,an),this._resetElementAttributes(on,an),this._resetElementAttributes(rn,ln)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(s))}px`)}))}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&F.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=F.getDataAttribute(t,e);null!==i?(F.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(o(t))e(t);else for(const i of z.find(t,this._element))e(i)}}const hn=".bs.modal",dn=`hide${hn}`,un=`hidePrevented${hn}`,fn=`hidden${hn}`,pn=`show${hn}`,mn=`shown${hn}`,gn=`resize${hn}`,_n=`click.dismiss${hn}`,bn=`mousedown.dismiss${hn}`,vn=`keydown.dismiss${hn}`,yn=`click${hn}.data-api`,wn="modal-open",An="show",En="modal-static",Tn={backdrop:!0,focus:!0,keyboard:!0},Cn={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class On extends W{constructor(t,e){super(t,e),this._dialog=z.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new cn,this._addEventListeners()}static get Default(){return Tn}static get DefaultType(){return Cn}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||N.trigger(this._element,pn,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(wn),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){this._isShown&&!this._isTransitioning&&(N.trigger(this._element,dn).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(An),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){N.off(window,hn),N.off(this._dialog,hn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ui({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new sn({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=z.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),d(this._element),this._element.classList.add(An),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,N.trigger(this._element,mn,{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){N.on(this._element,vn,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),N.on(window,gn,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),N.on(this._element,bn,(t=>{N.one(this._element,_n,(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(wn),this._resetAdjustments(),this._scrollBar.reset(),N.trigger(this._element,fn)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(N.trigger(this._element,un).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(En)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(En),this._queueCallback((()=>{this._element.classList.remove(En),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=p()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=p()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=On.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}N.on(document,yn,'[data-bs-toggle="modal"]',(function(t){const e=z.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),N.one(e,pn,(t=>{t.defaultPrevented||N.one(e,fn,(()=>{a(this)&&this.focus()}))}));const i=z.findOne(".modal.show");i&&On.getInstance(i).hide(),On.getOrCreateInstance(e).toggle(this)})),R(On),m(On);const xn=".bs.offcanvas",kn=".data-api",Ln=`load${xn}${kn}`,Sn="show",Dn="showing",$n="hiding",In=".offcanvas.show",Nn=`show${xn}`,Pn=`shown${xn}`,Mn=`hide${xn}`,jn=`hidePrevented${xn}`,Fn=`hidden${xn}`,Hn=`resize${xn}`,Wn=`click${xn}${kn}`,Bn=`keydown.dismiss${xn}`,zn={backdrop:!0,keyboard:!0,scroll:!1},Rn={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class qn extends W{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return zn}static get DefaultType(){return Rn}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||N.trigger(this._element,Nn,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new cn).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Dn),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Sn),this._element.classList.remove(Dn),N.trigger(this._element,Pn,{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&(N.trigger(this._element,Mn).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add($n),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove(Sn,$n),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new cn).reset(),N.trigger(this._element,Fn)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new Ui({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():N.trigger(this._element,jn)}:null})}_initializeFocusTrap(){return new sn({trapElement:this._element})}_addEventListeners(){N.on(this._element,Bn,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():N.trigger(this._element,jn))}))}static jQueryInterface(t){return this.each((function(){const e=qn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}N.on(document,Wn,'[data-bs-toggle="offcanvas"]',(function(t){const e=z.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this))return;N.one(e,Fn,(()=>{a(this)&&this.focus()}));const i=z.findOne(In);i&&i!==e&&qn.getInstance(i).hide(),qn.getOrCreateInstance(e).toggle(this)})),N.on(window,Ln,(()=>{for(const t of z.find(In))qn.getOrCreateInstance(t).show()})),N.on(window,Hn,(()=>{for(const t of z.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&qn.getOrCreateInstance(t).hide()})),R(qn),m(qn);const Vn={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Kn=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Qn=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Xn=(t,e)=>{const i=t.nodeName.toLowerCase();return e.includes(i)?!Kn.has(i)||Boolean(Qn.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))},Yn={allowList:Vn,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Un={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Gn={entry:"(string|element|function|null)",selector:"(string|element)"};class Jn extends H{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Yn}static get DefaultType(){return Un}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,i]of Object.entries(this._config.content))this._setContent(t,i,e);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},Gn)}_setContent(t,e,i){const n=z.findOne(i,t);n&&((e=this._resolvePossibleFunction(e))?o(e)?this._putElementInTemplate(r(e),n):this._config.html?n.innerHTML=this._maybeSanitize(e):n.textContent=e:n.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),s=[].concat(...n.body.querySelectorAll("*"));for(const t of s){const i=t.nodeName.toLowerCase();if(!Object.keys(e).includes(i)){t.remove();continue}const n=[].concat(...t.attributes),s=[].concat(e["*"]||[],e[i]||[]);for(const e of n)Xn(e,s)||t.removeAttribute(e.nodeName)}return n.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return g(t,[this])}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const Zn=new Set(["sanitize","allowList","sanitizeFn"]),ts="fade",es="show",is=".modal",ns="hide.bs.modal",ss="hover",os="focus",rs={AUTO:"auto",TOP:"top",RIGHT:p()?"left":"right",BOTTOM:"bottom",LEFT:p()?"right":"left"},as={allowList:Vn,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},ls={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class cs extends W{constructor(t,e){if(void 0===vi)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return as}static get DefaultType(){return ls}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),N.off(this._element.closest(is),ns,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=N.trigger(this._element,this.constructor.eventName("show")),e=(c(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:n}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(n.append(i),N.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(i),i.classList.add(es),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))N.on(t,"mouseover",h);this._queueCallback((()=>{N.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1}),this.tip,this._isAnimated())}hide(){if(this._isShown()&&!N.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(es),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))N.off(t,"mouseover",h);this._activeTrigger.click=!1,this._activeTrigger[os]=!1,this._activeTrigger[ss]=!1,this._isHovered=null,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),N.trigger(this._element,this.constructor.eventName("hidden")))}),this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(ts,es),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(ts),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Jn({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ts)}_isShown(){return this.tip&&this.tip.classList.contains(es)}_createPopper(t){const e=g(this._config.placement,[this,t,this._element]),i=rs[e.toUpperCase()];return bi(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return g(t,[this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,...g(this._config.popperConfig,[e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)N.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>{this._initializeOnDelegatedTarget(t).toggle()}));else if("manual"!==e){const t=e===ss?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===ss?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");N.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?os:ss]=!0,e._enter()})),N.on(this._element,i,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?os:ss]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},N.on(this._element.closest(is),ns,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=F.getDataAttributes(this._element);for(const t of Object.keys(e))Zn.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:r(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(t[e]=i);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each((function(){const e=cs.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}m(cs);const hs={...cs.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},ds={...cs.DefaultType,content:"(null|string|element|function)"};class us extends cs{static get Default(){return hs}static get DefaultType(){return ds}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=us.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}m(us);const fs=".bs.scrollspy",ps=`activate${fs}`,ms=`click${fs}`,gs=`load${fs}.data-api`,_s="active",bs="[href]",vs=".nav-link",ys=`${vs}, .nav-item > ${vs}, .list-group-item`,ws={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},As={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Es extends W{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return ws}static get DefaultType(){return As}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=r(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,"string"==typeof t.threshold&&(t.threshold=t.threshold.split(",").map((t=>Number.parseFloat(t)))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(N.off(this._config.target,ms),N.on(this._config.target,ms,bs,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,n=e.offsetTop-this._element.offsetTop;if(i.scrollTo)return void i.scrollTo({top:n,behavior:"smooth"});i.scrollTop=n}})))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},n=(this._rootElement||document.documentElement).scrollTop,s=n>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=n;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&t){if(i(o),!n)return}else s||t||i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=z.find(bs,this._config.target);for(const e of t){if(!e.hash||l(e))continue;const t=z.findOne(decodeURI(e.hash),this._element);a(t)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(_s),this._activateParents(t),N.trigger(this._element,ps,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))z.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(_s);else for(const e of z.parents(t,".nav, .list-group"))for(const t of z.prev(e,ys))t.classList.add(_s)}_clearActiveClass(t){t.classList.remove(_s);const e=z.find(`${bs}.${_s}`,t);for(const t of e)t.classList.remove(_s)}static jQueryInterface(t){return this.each((function(){const e=Es.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}N.on(window,gs,(()=>{for(const t of z.find('[data-bs-spy="scroll"]'))Es.getOrCreateInstance(t)})),m(Es);const Ts=".bs.tab",Cs=`hide${Ts}`,Os=`hidden${Ts}`,xs=`show${Ts}`,ks=`shown${Ts}`,Ls=`click${Ts}`,Ss=`keydown${Ts}`,Ds=`load${Ts}`,$s="ArrowLeft",Is="ArrowRight",Ns="ArrowUp",Ps="ArrowDown",Ms="Home",js="End",Fs="active",Hs="fade",Ws="show",Bs=".dropdown-toggle",zs=`:not(${Bs})`,Rs='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',qs=`.nav-link${zs}, .list-group-item${zs}, [role="tab"]${zs}, ${Rs}`,Vs=`.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${Fs}[data-bs-toggle="list"]`;class Ks extends W{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),N.on(this._element,Ss,(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?N.trigger(e,Cs,{relatedTarget:t}):null;N.trigger(t,xs,{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(Fs),this._activate(z.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),N.trigger(t,ks,{relatedTarget:e})):t.classList.add(Ws)}),t,t.classList.contains(Hs)))}_deactivate(t,e){t&&(t.classList.remove(Fs),t.blur(),this._deactivate(z.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),N.trigger(t,Os,{relatedTarget:e})):t.classList.remove(Ws)}),t,t.classList.contains(Hs)))}_keydown(t){if(![$s,Is,Ns,Ps,Ms,js].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter((t=>!l(t)));let i;if([Ms,js].includes(t.key))i=e[t.key===Ms?0:e.length-1];else{const n=[Is,Ps].includes(t.key);i=b(e,t.target,n,!0)}i&&(i.focus({preventScroll:!0}),Ks.getOrCreateInstance(i).show())}_getChildren(){return z.find(qs,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=z.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains("dropdown"))return;const n=(t,n)=>{const s=z.findOne(t,i);s&&s.classList.toggle(n,e)};n(Bs,Fs),n(".dropdown-menu",Ws),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(Fs)}_getInnerElement(t){return t.matches(qs)?t:z.findOne(qs,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=Ks.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}N.on(document,Ls,Rs,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this)||Ks.getOrCreateInstance(this).show()})),N.on(window,Ds,(()=>{for(const t of z.find(Vs))Ks.getOrCreateInstance(t)})),m(Ks);const Qs=".bs.toast",Xs=`mouseover${Qs}`,Ys=`mouseout${Qs}`,Us=`focusin${Qs}`,Gs=`focusout${Qs}`,Js=`hide${Qs}`,Zs=`hidden${Qs}`,to=`show${Qs}`,eo=`shown${Qs}`,io="hide",no="show",so="showing",oo={animation:"boolean",autohide:"boolean",delay:"number"},ro={animation:!0,autohide:!0,delay:5e3};class ao extends W{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return ro}static get DefaultType(){return oo}static get NAME(){return"toast"}show(){N.trigger(this._element,to).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(io),d(this._element),this._element.classList.add(no,so),this._queueCallback((()=>{this._element.classList.remove(so),N.trigger(this._element,eo),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&(N.trigger(this._element,Js).defaultPrevented||(this._element.classList.add(so),this._queueCallback((()=>{this._element.classList.add(io),this._element.classList.remove(so,no),N.trigger(this._element,Zs)}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(no),super.dispose()}isShown(){return this._element.classList.contains(no)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){N.on(this._element,Xs,(t=>this._onInteraction(t,!0))),N.on(this._element,Ys,(t=>this._onInteraction(t,!1))),N.on(this._element,Us,(t=>this._onInteraction(t,!0))),N.on(this._element,Gs,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=ao.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return R(ao),m(ao),{Alert:Q,Button:Y,Carousel:xt,Collapse:Bt,Dropdown:qi,Modal:On,Offcanvas:qn,Popover:us,ScrollSpy:Es,Tab:Ks,Toast:ao,Tooltip:cs}}));
//# sourceMappingURL=bootstrap.bundle.min.js.map;
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.CoreUI = global.CoreUI || {}, global.CoreUI.panel = factory());
}(this, (function () { 'use strict';

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f();}else if(typeof define==="function"&&define.amd){define([],f);}else{var g;if(typeof window!=="undefined"){g=window;}else if(typeof global!=="undefined"){g=global;}else if(typeof self!=="undefined"){g=self;}else{g=this;}g.ejs=f();}})(function(){return function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t);}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r}()({1:[function(require,module,exports){"use strict";var fs=require("fs");var path=require("path");var utils=require("./utils");var scopeOptionWarned=false;var _VERSION_STRING=require("../package.json").version;var _DEFAULT_OPEN_DELIMITER="<";var _DEFAULT_CLOSE_DELIMITER=">";var _DEFAULT_DELIMITER="%";var _DEFAULT_LOCALS_NAME="locals";var _NAME="ejs";var _REGEX_STRING="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)";var _OPTS_PASSABLE_WITH_DATA=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"];var _OPTS_PASSABLE_WITH_DATA_EXPRESS=_OPTS_PASSABLE_WITH_DATA.concat("cache");var _BOM=/^\uFEFF/;var _JS_IDENTIFIER=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/;exports.cache=utils.cache;exports.fileLoader=fs.readFileSync;exports.localsName=_DEFAULT_LOCALS_NAME;exports.promiseImpl=new Function("return this;")().Promise;exports.resolveInclude=function(name,filename,isDir){var dirname=path.dirname;var extname=path.extname;var resolve=path.resolve;var includePath=resolve(isDir?filename:dirname(filename),name);var ext=extname(name);if(!ext){includePath+=".ejs";}return includePath};function resolvePaths(name,paths){var filePath;if(paths.some(function(v){filePath=exports.resolveInclude(name,v,true);return fs.existsSync(filePath)})){return filePath}}function getIncludePath(path,options){var includePath;var filePath;var views=options.views;var match=/^[A-Za-z]+:\\|^\//.exec(path);if(match&&match.length){path=path.replace(/^\/*/,"");if(Array.isArray(options.root)){includePath=resolvePaths(path,options.root);}else{includePath=exports.resolveInclude(path,options.root||"/",true);}}else{if(options.filename){filePath=exports.resolveInclude(path,options.filename);if(fs.existsSync(filePath)){includePath=filePath;}}if(!includePath&&Array.isArray(views)){includePath=resolvePaths(path,views);}if(!includePath&&typeof options.includer!=="function"){throw new Error('Could not find the include file "'+options.escapeFunction(path)+'"')}}return includePath}function handleCache(options,template){var func;var filename=options.filename;var hasTemplate=arguments.length>1;if(options.cache){if(!filename){throw new Error("cache option requires a filename")}func=exports.cache.get(filename);if(func){return func}if(!hasTemplate){template=fileLoader(filename).toString().replace(_BOM,"");}}else if(!hasTemplate){if(!filename){throw new Error("Internal EJS error: no file name or template "+"provided")}template=fileLoader(filename).toString().replace(_BOM,"");}func=exports.compile(template,options);if(options.cache){exports.cache.set(filename,func);}return func}function tryHandleCache(options,data,cb){var result;if(!cb){if(typeof exports.promiseImpl=="function"){return new exports.promiseImpl(function(resolve,reject){try{result=handleCache(options)(data);resolve(result);}catch(err){reject(err);}})}else{throw new Error("Please provide a callback function")}}else{try{result=handleCache(options)(data);}catch(err){return cb(err)}cb(null,result);}}function fileLoader(filePath){return exports.fileLoader(filePath)}function includeFile(path,options){var opts=utils.shallowCopy(utils.createNullProtoObjWherePossible(),options);opts.filename=getIncludePath(path,opts);if(typeof options.includer==="function"){var includerResult=options.includer(path,opts.filename);if(includerResult){if(includerResult.filename){opts.filename=includerResult.filename;}if(includerResult.template){return handleCache(opts,includerResult.template)}}}return handleCache(opts)}function rethrow(err,str,flnm,lineno,esc){var lines=str.split("\n");var start=Math.max(lineno-3,0);var end=Math.min(lines.length,lineno+3);var filename=esc(flnm);var context=lines.slice(start,end).map(function(line,i){var curr=i+start+1;return(curr==lineno?" >> ":"    ")+curr+"| "+line}).join("\n");err.path=filename;err.message=(filename||"ejs")+":"+lineno+"\n"+context+"\n\n"+err.message;throw err}function stripSemi(str){return str.replace(/;(\s*$)/,"$1")}exports.compile=function compile(template,opts){var templ;if(opts&&opts.scope){if(!scopeOptionWarned){console.warn("`scope` option is deprecated and will be removed in EJS 3");scopeOptionWarned=true;}if(!opts.context){opts.context=opts.scope;}delete opts.scope;}templ=new Template(template,opts);return templ.compile()};exports.render=function(template,d,o){var data=d||utils.createNullProtoObjWherePossible();var opts=o||utils.createNullProtoObjWherePossible();if(arguments.length==2){utils.shallowCopyFromList(opts,data,_OPTS_PASSABLE_WITH_DATA);}return handleCache(opts,template)(data)};exports.renderFile=function(){var args=Array.prototype.slice.call(arguments);var filename=args.shift();var cb;var opts={filename:filename};var data;var viewOpts;if(typeof arguments[arguments.length-1]=="function"){cb=args.pop();}if(args.length){data=args.shift();if(args.length){utils.shallowCopy(opts,args.pop());}else{if(data.settings){if(data.settings.views){opts.views=data.settings.views;}if(data.settings["view cache"]){opts.cache=true;}viewOpts=data.settings["view options"];if(viewOpts){utils.shallowCopy(opts,viewOpts);}}utils.shallowCopyFromList(opts,data,_OPTS_PASSABLE_WITH_DATA_EXPRESS);}opts.filename=filename;}else{data=utils.createNullProtoObjWherePossible();}return tryHandleCache(opts,data,cb)};exports.Template=Template;exports.clearCache=function(){exports.cache.reset();};function Template(text,opts){opts=opts||utils.createNullProtoObjWherePossible();var options=utils.createNullProtoObjWherePossible();this.templateText=text;this.mode=null;this.truncate=false;this.currentLine=1;this.source="";options.client=opts.client||false;options.escapeFunction=opts.escape||opts.escapeFunction||utils.escapeXML;options.compileDebug=opts.compileDebug!==false;options.debug=!!opts.debug;options.filename=opts.filename;options.openDelimiter=opts.openDelimiter||exports.openDelimiter||_DEFAULT_OPEN_DELIMITER;options.closeDelimiter=opts.closeDelimiter||exports.closeDelimiter||_DEFAULT_CLOSE_DELIMITER;options.delimiter=opts.delimiter||exports.delimiter||_DEFAULT_DELIMITER;options.strict=opts.strict||false;options.context=opts.context;options.cache=opts.cache||false;options.rmWhitespace=opts.rmWhitespace;options.root=opts.root;options.includer=opts.includer;options.outputFunctionName=opts.outputFunctionName;options.localsName=opts.localsName||exports.localsName||_DEFAULT_LOCALS_NAME;options.views=opts.views;options.async=opts.async;options.destructuredLocals=opts.destructuredLocals;options.legacyInclude=typeof opts.legacyInclude!="undefined"?!!opts.legacyInclude:true;if(options.strict){options._with=false;}else{options._with=typeof opts._with!="undefined"?opts._with:true;}this.opts=options;this.regex=this.createRegex();}Template.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"};Template.prototype={createRegex:function(){var str=_REGEX_STRING;var delim=utils.escapeRegExpChars(this.opts.delimiter);var open=utils.escapeRegExpChars(this.opts.openDelimiter);var close=utils.escapeRegExpChars(this.opts.closeDelimiter);str=str.replace(/%/g,delim).replace(/</g,open).replace(/>/g,close);return new RegExp(str)},compile:function(){var src;var fn;var opts=this.opts;var prepended="";var appended="";var escapeFn=opts.escapeFunction;var ctor;var sanitizedFilename=opts.filename?JSON.stringify(opts.filename):"undefined";if(!this.source){this.generateSource();prepended+='  var __output = "";\n'+"  function __append(s) { if (s !== undefined && s !== null) __output += s }\n";if(opts.outputFunctionName){if(!_JS_IDENTIFIER.test(opts.outputFunctionName)){throw new Error("outputFunctionName is not a valid JS identifier.")}prepended+="  var "+opts.outputFunctionName+" = __append;"+"\n";}if(opts.localsName&&!_JS_IDENTIFIER.test(opts.localsName)){throw new Error("localsName is not a valid JS identifier.")}if(opts.destructuredLocals&&opts.destructuredLocals.length){var destructuring="  var __locals = ("+opts.localsName+" || {}),\n";for(var i=0;i<opts.destructuredLocals.length;i++){var name=opts.destructuredLocals[i];if(!_JS_IDENTIFIER.test(name)){throw new Error("destructuredLocals["+i+"] is not a valid JS identifier.")}if(i>0){destructuring+=",\n  ";}destructuring+=name+" = __locals."+name;}prepended+=destructuring+";\n";}if(opts._with!==false){prepended+="  with ("+opts.localsName+" || {}) {"+"\n";appended+="  }"+"\n";}appended+="  return __output;"+"\n";this.source=prepended+this.source+appended;}if(opts.compileDebug){src="var __line = 1"+"\n"+"  , __lines = "+JSON.stringify(this.templateText)+"\n"+"  , __filename = "+sanitizedFilename+";"+"\n"+"try {"+"\n"+this.source+"} catch (e) {"+"\n"+"  rethrow(e, __lines, __filename, __line, escapeFn);"+"\n"+"}"+"\n";}else{src=this.source;}if(opts.client){src="escapeFn = escapeFn || "+escapeFn.toString()+";"+"\n"+src;if(opts.compileDebug){src="rethrow = rethrow || "+rethrow.toString()+";"+"\n"+src;}}if(opts.strict){src='"use strict";\n'+src;}if(opts.debug){console.log(src);}if(opts.compileDebug&&opts.filename){src=src+"\n"+"//# sourceURL="+sanitizedFilename+"\n";}try{if(opts.async){try{ctor=new Function("return (async function(){}).constructor;")();}catch(e){if(e instanceof SyntaxError){throw new Error("This environment does not support async/await")}else{throw e}}}else{ctor=Function;}fn=new ctor(opts.localsName+", escapeFn, include, rethrow",src);}catch(e){if(e instanceof SyntaxError){if(opts.filename){e.message+=" in "+opts.filename;}e.message+=" while compiling ejs\n\n";e.message+="If the above error is not helpful, you may want to try EJS-Lint:\n";e.message+="https://github.com/RyanZim/EJS-Lint";if(!opts.async){e.message+="\n";e.message+="Or, if you meant to create an async function, pass `async: true` as an option.";}}throw e}var returnedFn=opts.client?fn:function anonymous(data){var include=function(path,includeData){var d=utils.shallowCopy(utils.createNullProtoObjWherePossible(),data);if(includeData){d=utils.shallowCopy(d,includeData);}return includeFile(path,opts)(d)};return fn.apply(opts.context,[data||utils.createNullProtoObjWherePossible(),escapeFn,include,rethrow])};if(opts.filename&&typeof Object.defineProperty==="function"){var filename=opts.filename;var basename=path.basename(filename,path.extname(filename));try{Object.defineProperty(returnedFn,"name",{value:basename,writable:false,enumerable:false,configurable:true});}catch(e){}}return returnedFn},generateSource:function(){var opts=this.opts;if(opts.rmWhitespace){this.templateText=this.templateText.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"");}this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var self=this;var matches=this.parseTemplateText();var d=this.opts.delimiter;var o=this.opts.openDelimiter;var c=this.opts.closeDelimiter;if(matches&&matches.length){matches.forEach(function(line,index){var closing;if(line.indexOf(o+d)===0&&line.indexOf(o+d+d)!==0){closing=matches[index+2];if(!(closing==d+c||closing=="-"+d+c||closing=="_"+d+c)){throw new Error('Could not find matching close tag for "'+line+'".')}}self.scanLine(line);});}},parseTemplateText:function(){var str=this.templateText;var pat=this.regex;var result=pat.exec(str);var arr=[];var firstPos;while(result){firstPos=result.index;if(firstPos!==0){arr.push(str.substring(0,firstPos));str=str.slice(firstPos);}arr.push(result[0]);str=str.slice(result[0].length);result=pat.exec(str);}if(str){arr.push(str);}return arr},_addOutput:function(line){if(this.truncate){line=line.replace(/^(?:\r\n|\r|\n)/,"");this.truncate=false;}if(!line){return line}line=line.replace(/\\/g,"\\\\");line=line.replace(/\n/g,"\\n");line=line.replace(/\r/g,"\\r");line=line.replace(/"/g,'\\"');this.source+='    ; __append("'+line+'")'+"\n";},scanLine:function(line){var self=this;var d=this.opts.delimiter;var o=this.opts.openDelimiter;var c=this.opts.closeDelimiter;var newLineCount=0;newLineCount=line.split("\n").length-1;switch(line){case o+d:case o+d+"_":this.mode=Template.modes.EVAL;break;case o+d+"=":this.mode=Template.modes.ESCAPED;break;case o+d+"-":this.mode=Template.modes.RAW;break;case o+d+"#":this.mode=Template.modes.COMMENT;break;case o+d+d:this.mode=Template.modes.LITERAL;this.source+='    ; __append("'+line.replace(o+d+d,o+d)+'")'+"\n";break;case d+d+c:this.mode=Template.modes.LITERAL;this.source+='    ; __append("'+line.replace(d+d+c,d+c)+'")'+"\n";break;case d+c:case"-"+d+c:case"_"+d+c:if(this.mode==Template.modes.LITERAL){this._addOutput(line);}this.mode=null;this.truncate=line.indexOf("-")===0||line.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case Template.modes.EVAL:case Template.modes.ESCAPED:case Template.modes.RAW:if(line.lastIndexOf("//")>line.lastIndexOf("\n")){line+="\n";}}switch(this.mode){case Template.modes.EVAL:this.source+="    ; "+line+"\n";break;case Template.modes.ESCAPED:this.source+="    ; __append(escapeFn("+stripSemi(line)+"))"+"\n";break;case Template.modes.RAW:this.source+="    ; __append("+stripSemi(line)+")"+"\n";break;case Template.modes.COMMENT:break;case Template.modes.LITERAL:this._addOutput(line);break}}else{this._addOutput(line);}}if(self.opts.compileDebug&&newLineCount){this.currentLine+=newLineCount;this.source+="    ; __line = "+this.currentLine+"\n";}}};exports.escapeXML=utils.escapeXML;exports.__express=exports.renderFile;exports.VERSION=_VERSION_STRING;exports.name=_NAME;if(typeof window!="undefined"){window.ejs=exports;}},{"../package.json":6,"./utils":2,fs:3,path:4}],2:[function(require,module,exports){"use strict";var regExpChars=/[|\\{}()[\]^$+*?.]/g;var hasOwnProperty=Object.prototype.hasOwnProperty;var hasOwn=function(obj,key){return hasOwnProperty.apply(obj,[key])};exports.escapeRegExpChars=function(string){if(!string){return""}return String(string).replace(regExpChars,"\\$&")};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"};var _MATCH_HTML=/[&<>'"]/g;function encode_char(c){return _ENCODE_HTML_RULES[c]||c}var escapeFuncStr="var _ENCODE_HTML_RULES = {\n"+'      "&": "&amp;"\n'+'    , "<": "&lt;"\n'+'    , ">": "&gt;"\n'+'    , \'"\': "&#34;"\n'+'    , "\'": "&#39;"\n'+"    }\n"+"  , _MATCH_HTML = /[&<>'\"]/g;\n"+"function encode_char(c) {\n"+"  return _ENCODE_HTML_RULES[c] || c;\n"+"};\n";exports.escapeXML=function(markup){return markup==undefined?"":String(markup).replace(_MATCH_HTML,encode_char)};function escapeXMLToString(){return Function.prototype.toString.call(this)+";\n"+escapeFuncStr}try{if(typeof Object.defineProperty==="function"){Object.defineProperty(exports.escapeXML,"toString",{value:escapeXMLToString});}else{exports.escapeXML.toString=escapeXMLToString;}}catch(err){console.warn("Unable to set escapeXML.toString (is the Function prototype frozen?)");}exports.shallowCopy=function(to,from){from=from||{};if(to!==null&&to!==undefined){for(var p in from){if(!hasOwn(from,p)){continue}if(p==="__proto__"||p==="constructor"){continue}to[p]=from[p];}}return to};exports.shallowCopyFromList=function(to,from,list){list=list||[];from=from||{};if(to!==null&&to!==undefined){for(var i=0;i<list.length;i++){var p=list[i];if(typeof from[p]!="undefined"){if(!hasOwn(from,p)){continue}if(p==="__proto__"||p==="constructor"){continue}to[p]=from[p];}}}return to};exports.cache={_data:{},set:function(key,val){this._data[key]=val;},get:function(key){return this._data[key]},remove:function(key){delete this._data[key];},reset:function(){this._data={};}};exports.hyphenToCamel=function(str){return str.replace(/-[a-z]/g,function(match){return match[1].toUpperCase()})};exports.createNullProtoObjWherePossible=function(){if(typeof Object.create=="function"){return function(){return Object.create(null)}}if(!({__proto__:null}instanceof Object)){return function(){return{__proto__:null}}}return function(){return{}}}();},{}],3:[function(require,module,exports){},{}],4:[function(require,module,exports){(function(process){function normalizeArray(parts,allowAboveRoot){var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==="."){parts.splice(i,1);}else if(last===".."){parts.splice(i,1);up++;}else if(up){parts.splice(i,1);up--;}}if(allowAboveRoot){for(;up--;up){parts.unshift("..");}}return parts}exports.resolve=function(){var resolvedPath="",resolvedAbsolute=false;for(var i=arguments.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?arguments[i]:process.cwd();if(typeof path!=="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!path){continue}resolvedPath=path+"/"+resolvedPath;resolvedAbsolute=path.charAt(0)==="/";}resolvedPath=normalizeArray(filter(resolvedPath.split("/"),function(p){return!!p}),!resolvedAbsolute).join("/");return(resolvedAbsolute?"/":"")+resolvedPath||"."};exports.normalize=function(path){var isAbsolute=exports.isAbsolute(path),trailingSlash=substr(path,-1)==="/";path=normalizeArray(filter(path.split("/"),function(p){return!!p}),!isAbsolute).join("/");if(!path&&!isAbsolute){path=".";}if(path&&trailingSlash){path+="/";}return(isAbsolute?"/":"")+path};exports.isAbsolute=function(path){return path.charAt(0)==="/"};exports.join=function(){var paths=Array.prototype.slice.call(arguments,0);return exports.normalize(filter(paths,function(p,index){if(typeof p!=="string"){throw new TypeError("Arguments to path.join must be strings")}return p}).join("/"))};exports.relative=function(from,to){from=exports.resolve(from).substr(1);to=exports.resolve(to).substr(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=="")break}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=="")break}if(start>end)return[];return arr.slice(start,end-start+1)}var fromParts=trim(from.split("/"));var toParts=trim(to.split("/"));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push("..");}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join("/")};exports.sep="/";exports.delimiter=":";exports.dirname=function(path){if(typeof path!=="string")path=path+"";if(path.length===0)return".";var code=path.charCodeAt(0);var hasRoot=code===47;var end=-1;var matchedSlash=true;for(var i=path.length-1;i>=1;--i){code=path.charCodeAt(i);if(code===47){if(!matchedSlash){end=i;break}}else{matchedSlash=false;}}if(end===-1)return hasRoot?"/":".";if(hasRoot&&end===1){return"/"}return path.slice(0,end)};function basename(path){if(typeof path!=="string")path=path+"";var start=0;var end=-1;var matchedSlash=true;var i;for(i=path.length-1;i>=0;--i){if(path.charCodeAt(i)===47){if(!matchedSlash){start=i+1;break}}else if(end===-1){matchedSlash=false;end=i+1;}}if(end===-1)return"";return path.slice(start,end)}exports.basename=function(path,ext){var f=basename(path);if(ext&&f.substr(-1*ext.length)===ext){f=f.substr(0,f.length-ext.length);}return f};exports.extname=function(path){if(typeof path!=="string")path=path+"";var startDot=-1;var startPart=0;var end=-1;var matchedSlash=true;var preDotState=0;for(var i=path.length-1;i>=0;--i){var code=path.charCodeAt(i);if(code===47){if(!matchedSlash){startPart=i+1;break}continue}if(end===-1){matchedSlash=false;end=i+1;}if(code===46){if(startDot===-1)startDot=i;else if(preDotState!==1)preDotState=1;}else if(startDot!==-1){preDotState=-1;}}if(startDot===-1||end===-1||preDotState===0||preDotState===1&&startDot===end-1&&startDot===startPart+1){return""}return path.slice(startDot,end)};function filter(xs,f){if(xs.filter)return xs.filter(f);var res=[];for(var i=0;i<xs.length;i++){if(f(xs[i],i,xs))res.push(xs[i]);}return res}var substr="ab".substr(-1)==="b"?function(str,start,len){return str.substr(start,len)}:function(str,start,len){if(start<0)start=str.length+start;return str.substr(start,len)};}).call(this,require("_process"));},{_process:5}],5:[function(require,module,exports){var process=module.exports={};var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}try{if(typeof clearTimeout==="function"){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){return setTimeout(fun,0)}if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0)}try{return cachedSetTimeout(fun,0)}catch(e){try{return cachedSetTimeout.call(null,fun,0)}catch(e){return cachedSetTimeout.call(this,fun,0)}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){return clearTimeout(marker)}if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker)}try{return cachedClearTimeout(marker)}catch(e){try{return cachedClearTimeout.call(null,marker)}catch(e){return cachedClearTimeout.call(this,marker)}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;runClearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title="browser";process.browser=true;process.env={};process.argv=[];process.version="";process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[]};process.binding=function(name){throw new Error("process.binding is not supported")};process.cwd=function(){return"/"};process.chdir=function(dir){throw new Error("process.chdir is not supported")};process.umask=function(){return 0};},{}],6:[function(require,module,exports){module.exports={name:"ejs",description:"Embedded JavaScript templates",keywords:["template","engine","ejs"],version:"3.1.8",author:"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",license:"Apache-2.0",bin:{ejs:"./bin/cli.js"},main:"./lib/ejs.js",jsdelivr:"ejs.min.js",unpkg:"ejs.min.js",repository:{type:"git",url:"git://github.com/mde/ejs.git"},bugs:"https://github.com/mde/ejs/issues",homepage:"https://github.com/mde/ejs",dependencies:{jake:"^10.8.5"},devDependencies:{browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^4.0.2","lru-cache":"^4.0.1",mocha:"^10.2.0","uglify-js":"^3.3.16"},engines:{node:">=0.10.0"},scripts:{test:"mocha -u tdd"}};},{}]},{},[1])(1)});

let tpl = Object.create(null);
tpl['container.html'] = '<div class="coreui-panel card text-center mb-3 shadow-sm" id="coreui-panel-<%= id %>">\n    <div class="card-body text-start">\n        <% if (controls) { %>\n            <div class="coreui-panel-controls position-relative top-0 end-0 float-end gap-1 d-flex"><%- controls %></div>\n        <% } %>\n        <% if (title) { %>\n        <h4 class="card-title<% if ( ! subtitle) { %> mb-4<% } %>">\n            <% if (backUrl) { %>\n            <a class="coreui-panel-back btn btn-sm btn-outline-secondary me-2 align-top" href="<%- backUrl %>">\n                <i class="bi bi-arrow-left"></i>\n            </a>\n            <% } %>\n            <%- title %>\n        </h4>\n        <% } %>\n        <% if (subtitle) { %>\n        <p class="coreui-panel-subtitle text-muted"><%- subtitle %></p>\n        <% } %>\n\n        <% if (typeof tabs === \'object\' && tabs.length > 0) { %>\n            <% if (tabsPosition === \'top-left\' || tabsPosition === \'top-center\' || tabsPosition === \'top-right\') { %>\n            <%- tabsContent %>\n\n            <div class="coreui-panel-content card-content">\n                <%- renderContent %>\n            </div>\n\n            <% } else if (tabsPosition === \'left\' || tabsPosition === \'left-sideways\') { %>\n            <div class="d-flex">\n                <div class="me-3" style="width: <%= tabsWidth %>px"><%- tabsContent %></div>\n\n                <div class="coreui-panel-content card-content flex-grow-1">\n                    <%- renderContent %>\n                </div>\n            </div>\n\n            <% } else if (tabsPosition === \'right\' || tabsPosition === \'right-sideways\') { %>\n            <div class="d-flex">\n                <div class="coreui-panel-content card-content flex-grow-1 pe-3">\n                    <%- renderContent %>\n                </div>\n                <div style="width: <%= tabsWidth %>px"><%- tabsContent %></div>\n            </div>\n            <% } %>\n\n        <% } else { %>\n        <div class="coreui-panel-content card-content">\n            <%- renderContent %>\n        </div>\n        <% } %>\n    </div>\n</div>';
tpl['tabs.html'] = '<% if (typeof tabs === \'object\' && tabs.length > 0) { %>\n<ul class="coreui-panel-tabs nav <% if (tabsType) { %>nav-<%= tabsType %><% } %> card-body-tabs mb-3 <% if (containerClasses) { %><%= containerClasses %><% } %>\n           <% if (tabsFill) { %>nav-<%= tabsFill %><% } %>">\n    <% $.each(tabs, function(key, tab) { %>\n        <% if (tab.type === \'tab\') { %>\n        <li class="nav-item">\n            <a class="nav-link<% if (tab.active) { %> active<% } %><% if (tab.disabled) { %> disabled<% } %>"\n               href="<% if (tab.url) { %><%= tab.url %><% } else { %>#<% } %>" data-tab-id="<%= tab.id %>"\n               data-bs-toggle="tab"\n            ><%= tab.title %></a>\n        </li>\n        <% } %>\n        <% if (tab.type === \'dropdown\') { %>\n        <li class="nav-item dropdown<% if (tab.active) { %> active<% } %><% if (tab.disabled) { %> disabled<% } %>">\n            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">\n                <%= tab.title %>\n            </a>\n            <ul class="dropdown-menu">\n                <% $.each(tab.items, function(key, item) { %>\n                    <% if (item.type === \'item\') { %>\n                    <li>\n                        <a class="dropdown-item<% if (item.active) { %> active<% } %><% if (item.disabled) { %> disabled<% } %>"\n                           href="<% if (item.url) { %><%= item.url %><% } else { %>#<% } %>" data-bs-toggle="tab"\n                           data-tab-id="<%= item.id %>">\n                            <%= item.title %>\n                        </a>\n                    </li>\n                    <% } %>\n                    <% if (item.type === \'divider\') { %>\n                    <li>\n                        <hr class="dropdown-divider">\n                    </li>\n                    <% } %>\n                <% }) %>\n            </ul>\n        </li>\n        <% } %>\n    <% }) %>\n</ul>\n<% } %>';

let panelInstance = {

    _options: {
        id: '',
        title: null,
        subtitle: null,
        backUrl: null,
        controls: null,
        tabs: [],
        tabsType: 'tabs', // pills, underline
        tabsPosition: 'top-left', // top-center, top-right, left, left-sideways, right, right-sideways
        containerClasses: '',
        tabsWidth: 200,
        tabsFill: '', // fill, justify
    },
    _events: {},


    /**
     *
     * @param options
     */
    _init: function (options) {

        this._options = $.extend(true, {}, this._options, options);

        if ( ! this._options.id) {
            this._options.id = CoreUI.panel._hashCode();
        }

        switch (this._options.tabsPosition) {
            case 'top-left' :       this._options.containerClasses = ''; break;
            case 'top-center' :     this._options.containerClasses = 'justify-content-center'; break;
            case 'top-right' :      this._options.containerClasses = 'justify-content-end'; break;
            case 'left' :           this._options.containerClasses = 'left-tabs'; break;
            case 'left-sideways' :  this._options.containerClasses = 'left-tabs sideways-tabs'; break;
            case 'right' :          this._options.containerClasses = 'right-tabs'; break;
            case 'right-sideways' : this._options.containerClasses = 'right-tabs sideways-tabs'; break;
            default :               this._options.containerClasses = '';
        }


        if (this._options.tabsType === 'tabs' ||
            this._options.tabsType === 'pills'
        ) {
            this._options.containerClasses += ' gap-1';
        }
    },


    /**
     *
     */
    initEvents: function () {

        this._trigger('shown.coreui.panel');

        let element = $('#coreui-panel-' + this._options.id);
        let panel   = this;

        // Загрузка табов ajax
        if (this._options.tabs.length > 0) {
            this.on('click-tab.coreui.panel', function (tab, event) {

                if (tab.url && tab.url !== '#') {
                    $.ajax({
                        url: tab.url,
                        method: 'get',
                        beforeSend: function(xhr) {
                            panel._trigger('start-load-content.coreui.panel', panel, [ tab, xhr ]);
                        },
                        success: function (result) {
                            panel._trigger('success-load-content.coreui.panel', panel, [ tab, result ]);

                            let content = panel._renderContent(result);
                            panel.setContent(content);
                        },
                        error: function(xhr, textStatus, errorThrown) {
                            panel._trigger('error-load-content.coreui.panel', panel, [ tab, xhr, textStatus, errorThrown ]);
                        },
                        complete: function(xhr, textStatus) {
                            panel._trigger('end-load-content.coreui.panel', panel, [ tab, xhr, textStatus ]);
                        },
                    });
                }
            });
        }

        if (element[0]) {
            $('.nav-link:not(.dropdown-toggle)', element).click(function (event) {
                let tabId = $(this).data('tab-id') || '';
                let tab   = null;

                $.each(panel._options.tabs, function (key, tabItem) {
                    if (tabItem.hasOwnProperty('id') &&
                        tabItem.id.toString() === tabId.toString()
                    ) {
                        tab = Object.assign({}, tabItem);
                        return false;
                    }
                });

                panel._trigger('click-tab.coreui.panel', this, [ tab, event ]);

                if (tab.url === '#') {
                    return false;
                }
            });

            $('.dropdown-item', element).click(function (event) {
                let tabId = $(this).data('tab-id') || '';
                let tab   = null;

                $.each(panel._options.tabs, function (key, tabItem) {
                    if (tabItem.hasOwnProperty('type') &&
                        tabItem.hasOwnProperty('items') &&
                        tabItem.type === 'dropdown' &&
                        tabItem.items.length > 0
                    ) {
                        $.each(tabItem.items, function (key, item) {
                            if (item.hasOwnProperty('id') &&
                                item.id.toString() === tabId.toString()
                            ) {
                                tab = Object.assign({}, item);
                                return false;
                            }
                        });
                    }
                });

                panel._trigger('click-tab.coreui.panel', this, [ tab, event ]);

                if (tab.url === '#') {
                    return false;
                }
            });
        }
    },


    /**
     *
     * @returns {*}
     */
    getId: function () {
        return this._options.id;
    },


    /**
     * @param content
     * @returns {*}
     */
    setContent: function (content) {

        content = this._renderContent(content);

        $('#coreui-panel-' + this._options.id + ' .card-content').html(content);
        this._trigger('show-content.coreui.panel');
    },


    /**
     *
     * @param element
     * @returns {*}
     */
    render: function(element) {

        this._options.renderContent = this._renderContent(this._options.content);

        if (typeof this._options.tabs === 'object' && Array.isArray(this._options.tabs)) {
            let tabProps = {
                id: '',
                type: 'tab',
                title: '',
                url: '#',
                active: false,
                disabled: false,
            };
            let tabDropdownProps = {
                type: 'dropdown',
                title: '',
                active: false,
                disabled: false,
                items: [],
            };
            let tabDropdownItem = {
                id: '',
                type: 'item',
                title: '',
                url: '#',
                active: false,
                disabled: false
            };

            for (let i = 0; i < this._options.tabs.length; i++) {
                let tabType = this._options.tabs[i].hasOwnProperty('type') && typeof this._options.tabs[i].type === 'string'
                    ? this._options.tabs[i].type
                    : 'tab';

                switch (tabType) {
                    case 'tab':
                    default:
                        this._options.tabs[i] = Object.assign({}, tabProps, this._options.tabs[i]);

                        if ( ! this._options.tabs[i].id) {
                            this._options.tabs[i].id = CoreUI.panel._hashCode();
                        }
                        break;

                    case 'dropdown':
                        this._options.tabs[i] = Object.assign({}, tabDropdownProps, this._options.tabs[i]);

                        for (let j = 0; j < this._options.tabs[i].items.length; j++) {
                            let tabType = this._options.tabs[i].items[j].hasOwnProperty('type') && typeof this._options.tabs[i].items[j].type === 'string'
                                ? this._options.tabs[i].items[j].type
                                : 'item';

                            switch (tabType) {
                                case 'item':
                                default:
                                    this._options.tabs[i].items[j] = Object.assign({}, tabDropdownItem, this._options.tabs[i].items[j]);

                                    if ( ! this._options.tabs[i].items[j].id) {
                                        this._options.tabs[i].items[j].id = CoreUI.panel._hashCode();
                                    }
                                    break;

                                case 'divider':
                                    this._options.tabs[i].items[j] = { type: "divider" };
                                    break;
                            }
                        }
                        break;
                }
            }
        }

        this._options.tabsContent = ejs.render(tpl['tabs.html'], this._options);

        let html = ejs.render(tpl['container.html'], this._options);

        if (element === undefined) {
            return html;
        }

        // Dom element
        let domElement = {};

        if (typeof element === 'string') {
            domElement = document.getElementById(element);

            if ( ! domElement) {
                return '';
            }

        } else if (element instanceof HTMLElement) {
            domElement = element;
        }


        domElement.innerHTML = html;

        this.initEvents();
        this._trigger('show-content.coreui.panel');
    },


    /**
     * @param eventName
     * @param callback
     * @param context
     * @param singleExec
     */
    on: function(eventName, callback, context, singleExec) {
        if (typeof this._events[eventName] !== 'object') {
            this._events[eventName] = [];
        }
        this._events[eventName].push({
            context : context || this,
            callback: callback,
            singleExec: !! singleExec,
        });
    },


    /**
     * @param name
     * @param context
     * @param params
     * @private
     */
    _trigger: function(name, context, params) {

        params = params || [];

        if (this._events.hasOwnProperty(name) && this._events[name].length > 0) {
            for (var i = 0; i < this._events[name].length; i++) {
                let callback = this._events[name][i].callback;

                context = this._events[name][i].context || context;

                callback.apply(context, params);

                if (this._events[name][i].singleExec) {
                    this._events[name].splice(i, 1);
                    i--;
                }
            }
        }
    },


    /**
     *
     * @param data
     * @returns {string}
     * @private
     */
    _renderContent: function(data) {

        let result          = [];
        let alloyComponents = [
            'coreui.table',
            'coreui.form',
            'coreui.layout',
            'coreui.panel',
            'coreui.tabs',
            'coreui.info',
            'coreui.chart',
        ];

        if (typeof data === 'string') {
            result.push(data);

        } else if (data instanceof Object) {
            if ( ! Array.isArray(data)) {
                data = [ data ];
            }

            for (let i = 0; i < data.length; i++) {
                if (typeof data[i] === 'string') {
                    result.push(data[i]);

                } else {
                    if ( ! Array.isArray(data[i]) &&
                        data[i].hasOwnProperty('component') &&
                        alloyComponents.indexOf(data[i].component) >= 0
                    ) {
                        let name     = data[i].component.split('.')[1];
                        let instance = CoreUI[name].create(data[i]);
                        result.push(instance.render());

                        this.on('shown.coreui.panel', instance.initEvents, instance, true);

                    } else {
                        result.push(JSON.stringify(data[i]));
                    }
                }
            }
        }

        return result.join('');
    }
};

let panel = {

    _instances: {},

    /**
     * @param {object} options
     * @returns {CoreUI.panel.instance}
     */
    create: function (options) {

        let instance = $.extend(true, {}, panelInstance);
        instance._init(options instanceof Object ? options : {});

        let panelId = instance.getId();
        this._instances[panelId] = instance;

        return instance;
    },


    /**
     * @param {string} id
     * @returns {CoreUI.panel.instance|null}
     */
    get: function (id) {

        if ( ! this._instances.hasOwnProperty(id)) {
            return null;
        }

        if ($('#coreui-panel-' + this._instances[id])[0]) {
            delete this._instances[id];
            return null;
        }

        return this._instances[id];
    },


    /**
     * @returns {string}
     * @private
     */
    _hashCode: function() {
        return this._crc32((new Date().getTime() + Math.random()).toString()).toString(16);
    },


    /**
     * @param str
     * @returns {number}
     * @private
     */
    _crc32: function (str) {

        for (var a, o = [], c = 0; c < 256; c++) {
            a = c;
            for (var f = 0; f < 8; f++) {
                a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
            }
            o[c] = a;
        }

        for (var n = -1, t = 0; t < str.length; t++) {
            n = n >>> 8 ^ o[255 & (n ^ str.charCodeAt(t))];
        }

        return (-1 ^ n) >>> 0;
    }
};

return panel;

})));
;
var CoreUI=void 0!==CoreUI?CoreUI:{};CoreUI.tabs={_instances:{},create:function(t){var n=$.extend({},this.instance),t=(n._init(t instanceof Object?t:{}),n.getId());return this._instances[t]=n},get:function(t){return this._instances.hasOwnProperty(t)?$("#coreui-tabs-"+this._instances[t])[0]?(delete this._instances[t],null):this._instances[t]:null},_hashCode:function(){return this._crc32(((new Date).getTime()+Math.random()).toString()).toString(16)},_crc32:function(t){for(var n=[],e=0;e<256;e++){for(var r=e,i=0;i<8;i++)r=1&r?3988292384^r>>>1:r>>>1;n[e]=r}for(var s=-1,a=0;a<t.length;a++)s=s>>>8^n[255&(s^t.charCodeAt(a))];return(-1^s)>>>0}};;
window.CoreUI.tabs.tpl={},window.CoreUI.tabs.tpl["container.html"]='<div class="text-center mb-3" id="coreui-tabs-<%= id %>">\n    <div class="text-start">\n        <% if (title) { %>\n        <h4><%- title %></h4>\n        <% } %>\n        <% if (subtitle) { %>\n        <p class="text-muted"><%- subtitle %></p>\n        <% } %>\n\n        <% if (typeof tabs === \'object\' && tabs.length > 0) { %>\n            <% if (tabsPosition === \'top-left\' || tabsPosition === \'top-center\' || tabsPosition === \'top-right\') { %>\n            <%- tabsContent %>\n\n            <div class="coreui-tabs-content">\n                <%- renderContent %>\n            </div>\n\n            <% } else if (tabsPosition === \'left\' || tabsPosition === \'left-sideways\') { %>\n            <div class="d-flex">\n                <div class="me-3" style="width: <%= tabsWidth %>px"><%- tabsContent %></div>\n\n                <div class="coreui-tabs-content flex-grow-1">\n                    <%- renderContent %>\n                </div>\n            </div>\n\n            <% } else if (tabsPosition === \'right\' || tabsPosition === \'right-sideways\') { %>\n            <div class="d-flex">\n                <div class="coreui-tabs-content flex-grow-1 pe-3">\n                    <%- renderContent %>\n                </div>\n                <div style="width: <%= tabsWidth %>px"><%- tabsContent %></div>\n            </div>\n            <% } %>\n\n        <% } else { %>\n        <div class="coreui-tabs-content">\n            <%- renderContent %>\n        </div>\n        <% } %>\n    </div>\n</div>',window.CoreUI.tabs.tpl["tabs.html"]='<% if (typeof tabs === \'object\' && tabs.length > 0) { %>\n<ul class="nav <% if (tabsType) { %>nav-<%= tabsType %><% } %> card-body-tabs mb-3 <% if (containerClasses) { %><%= containerClasses %><% } %>\n           <% if (tabsFill) { %>nav-<%= tabsFill %><% } %>">\n    <% $.each(tabs, function(key, tab) { %>\n        <% if (tab.type === \'tab\') { %>\n        <li class="nav-item">\n            <a class="nav-link<% if (tab.active) { %> active<% } %><% if (tab.disabled) { %> disabled<% } %>" href="<% if (tab.url) { %><%= tab.url %><% } else { %>#<% } %>" data-tab-id="<%= tab.id %>" data-bs-toggle="tab"><%= tab.title %></a>\n        </li>\n        <% } %>\n        <% if (tab.type === \'dropdown\') { %>\n        <li class="nav-item dropdown<% if (tab.active) { %> active<% } %><% if (tab.disabled) { %> disabled<% } %>">\n            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">\n                <%= tab.title %>\n            </a>\n            <ul class="dropdown-menu">\n                <% $.each(tab.items, function(key, item) { %>\n                    <% if (item.type === \'item\') { %>\n                    <li>\n                        <a class="dropdown-item<% if (item.active) { %> active<% } %><% if (item.disabled) { %> disabled<% } %>" href="<% if (item.url) { %><%= item.url %><% } else { %>#<% } %>" data-bs-toggle="tab" data-tab-id="<%= item.id %>">\n                            <%= item.title %>\n                        </a>\n                    </li>\n                    <% } %>\n                    <% if (item.type === \'divider\') { %>\n                    <li>\n                        <hr class="dropdown-divider">\n                    </li>\n                    <% } %>\n                <% }) %>\n            </ul>\n        </li>\n        <% } %>\n    <% }) %>\n</ul>\n<% } %>';;
CoreUI.tabs.instance={_options:{id:"",title:null,subtitle:null,controls:null,tabs:[],tabsType:"tabs",tabsPosition:"top-left",containerClasses:"",tabsWidth:200,tabsFill:""},_events:{},_init:function(t){switch(this._options=$.extend({},this._options,t),this._events={},this._options.id||(this._options.id=CoreUI.tabs._hashCode()),this._options.tabsPosition){case"top-left":this._options.containerClasses="";break;case"top-center":this._options.containerClasses="justify-content-center";break;case"top-right":this._options.containerClasses="justify-content-end";break;case"left":this._options.containerClasses="left-tabs";break;case"left-sideways":this._options.containerClasses="left-tabs sideways-tabs";break;case"right":this._options.containerClasses="right-tabs";break;case"right-sideways":this._options.containerClasses="right-tabs sideways-tabs";break;default:this._options.containerClasses=""}"tabs"!==this._options.tabsType&&"pills"!==this._options.tabsType||(this._options.containerClasses+=" gap-1")},initEvents:function(){this._trigger("shown.coreui.tabs");var t=$("#coreui-tabs-"+this._options.id);let n=this;0<this._options.tabs.length&&this.on("click-tab.coreui.tabs",function(i,t){i.url&&"#"!==i.url&&$.ajax({url:i.url,method:"get",beforeSend:function(t){n._trigger("start-load-content.coreui.tabs",n,[i,t])},success:function(t){n._trigger("success-load-content.coreui.tabs",n,[i,t]);t=n._renderContent(t);n.setContent(t)},error:function(t,s,e){n._trigger("error-load-content.coreui.tabs",n,[i,t,s,e])},complete:function(t,s){n._trigger("end-load-content.coreui.tabs",n,[i,t,s])}})}),t[0]&&($(".nav-link:not(.dropdown-toggle)",t).click(function(t){let e=$(this).data("tab-id")||"",i=null;if($.each(n._options.tabs,function(t,s){if(s.hasOwnProperty("id")&&s.id.toString()===e.toString())return i=Object.assign({},s),!1}),n._trigger("click-tab.coreui.tabs",this,[i,t]),"#"===i.url)return!1}),$(".dropdown-item",t).click(function(t){let e=$(this).data("tab-id")||"",i=null;if($.each(n._options.tabs,function(t,s){s.hasOwnProperty("type")&&s.hasOwnProperty("items")&&"dropdown"===s.type&&0<s.items.length&&$.each(s.items,function(t,s){if(s.hasOwnProperty("id")&&s.id.toString()===e.toString())return i=Object.assign({},s),!1})}),n._trigger("click-tab.coreui.tabs",this,[i,t]),"#"===i.url)return!1}))},getId:function(){return this._options.id},setContent:function(t){t=this._renderContent(t),$("#coreui-tabs-"+this._options.id+" .coreui-tabs-content").html(t),this._trigger("show-content.coreui.tabs")},render:function(t){if(this._options.renderContent=this._renderContent(this._options.content),"object"==typeof this._options.tabs&&Array.isArray(this._options.tabs)){var e={id:"",type:"tab",title:"",url:"#",active:!1,disabled:!1},i={type:"dropdown",title:"",active:!1,disabled:!1,items:[]},n={id:"",type:"item",title:"",url:"#",active:!1,disabled:!1};for(let s=0;s<this._options.tabs.length;s++)switch(this._options.tabs[s].hasOwnProperty("type")&&"string"==typeof this._options.tabs[s].type?this._options.tabs[s].type:"tab"){case"tab":default:this._options.tabs[s]=Object.assign({},e,this._options.tabs[s]),this._options.tabs[s].id||(this._options.tabs[s].id=CoreUI.tabs._hashCode());break;case"dropdown":this._options.tabs[s]=Object.assign({},i,this._options.tabs[s]);for(let t=0;t<this._options.tabs[s].items.length;t++)switch(this._options.tabs[s].items[t].hasOwnProperty("type")&&"string"==typeof this._options.tabs[s].items[t].type?this._options.tabs[s].items[t].type:"item"){case"item":default:this._options.tabs[s].items[t]=Object.assign({},n,this._options.tabs[s].items[t]),this._options.tabs[s].items[t].id||(this._options.tabs[s].items[t].id=CoreUI.tabs._hashCode());break;case"divider":this._options.tabs[s].items[t]={type:"divider"}}}}this._options.tabsContent=CoreUI.tabs.ejs.render(CoreUI.tabs.tpl["tabs.html"],this._options);var s=CoreUI.tabs.ejs.render(CoreUI.tabs.tpl["container.html"],this._options);if(void 0===t)return s;let o={};if("string"==typeof t){if(!(o=document.getElementById(t)))return""}else t instanceof HTMLElement&&(o=t);o.innerHTML=s,this.initEvents(),this._trigger("show-content.coreui.tabs")},on:function(t,s,e,i){"object"!=typeof this._events[t]&&(this._events[t]=[]),this._events[t].push({context:e||this,callback:s,singleExec:!!i})},_trigger:function(t,s,e){if(e=e||[],this._events[t]instanceof Object&&0<this._events[t].length)for(var i=0;i<this._events[t].length;i++){var n=this._events[t][i].callback;s=s||this._events[t][i].context,n.apply(s,e),this._events[t][i].singleExec&&this._events[t].splice(i,1)}},_renderContent:function(s){var e,i=[],n=["coreui.table","coreui.form","coreui.layout","coreui.panel","coreui.tabs","coreui.alert"];if("string"==typeof s)i.push(s);else if(s instanceof Object){Array.isArray(s)||(s=[s]);for(let t=0;t<s.length;t++)"string"==typeof s[t]?i.push(s[t]):!Array.isArray(s[t])&&s[t].hasOwnProperty("component")&&0<=n.indexOf(s[t].component)?(e=s[t].component.split(".")[1],console.log(e),e=CoreUI[e].create(s[t]),i.push(e.render()),this.on("show-content.coreui.tabs",e.initEvents,e,!0)):i.push(JSON.stringify(s[t]))}return i.join("")}};;
!function(){"use strict";!function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).ejs=e()}(function(){return function r(i,o,s){function c(t,e){if(!o[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(a)return a(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}n=o[t]={exports:{}},i[t][0].call(n.exports,function(e){return c(i[t][1][e]||e)},n,n.exports,r,i,o,s)}return o[t].exports}for(var a="function"==typeof require&&require,e=0;e<s.length;e++)c(s[e]);return c}({1:[function(e,t,a){var o=e("fs"),u=e("path"),p=e("./utils"),n=!1,e=e("../package.json").version,r="locals",i=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],l=i.concat("cache"),s=/^\uFEFF/,f=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/;function c(t,e){var n;if(e.some(function(e){return n=a.resolveInclude(t,e,!0),o.existsSync(n)}))return n}function h(e,t){var n,r=e.filename,i=1<arguments.length;if(e.cache){if(!r)throw new Error("cache option requires a filename");if(n=a.cache.get(r))return n;i||(t=m(r).toString().replace(s,""))}else if(!i){if(!r)throw new Error("Internal EJS error: no file name or template provided");t=m(r).toString().replace(s,"")}return n=a.compile(t,e),e.cache&&a.cache.set(r,n),n}function m(e){return a.fileLoader(e)}function d(e,t){var n=p.shallowCopy(p.createNullProtoObjWherePossible(),t);if(n.filename=function(e,t){var n,r=t.views,i=/^[A-Za-z]+:\\|^\//.exec(e);if(i&&i.length)e=e.replace(/^\/*/,""),n=Array.isArray(t.root)?c(e,t.root):a.resolveInclude(e,t.root||"/",!0);else if(!(n=!(n=t.filename&&(i=a.resolveInclude(e,t.filename),o.existsSync(i))?i:n)&&Array.isArray(r)?c(e,r):n)&&"function"!=typeof t.includer)throw new Error('Could not find the include file "'+t.escapeFunction(e)+'"');return n}(e,n),"function"==typeof t.includer){t=t.includer(e,n.filename);if(t&&(t.filename&&(n.filename=t.filename),t.template))return h(n,t.template)}return h(n)}function g(e,t,n,r,i){var t=t.split("\n"),o=Math.max(r-3,0),s=Math.min(t.length,r+3),i=i(n),n=t.slice(o,s).map(function(e,t){t=t+o+1;return(t==r?" >> ":"    ")+t+"| "+e}).join("\n");throw e.path=i,e.message=(i||"ejs")+":"+r+"\n"+n+"\n\n"+e.message,e}function y(e){return e.replace(/;(\s*$)/,"$1")}function w(e,t){t=t||p.createNullProtoObjWherePossible();var n=p.createNullProtoObjWherePossible();this.templateText=e,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",n.client=t.client||!1,n.escapeFunction=t.escape||t.escapeFunction||p.escapeXML,n.compileDebug=!1!==t.compileDebug,n.debug=!!t.debug,n.filename=t.filename,n.openDelimiter=t.openDelimiter||a.openDelimiter||"<",n.closeDelimiter=t.closeDelimiter||a.closeDelimiter||">",n.delimiter=t.delimiter||a.delimiter||"%",n.strict=t.strict||!1,n.context=t.context,n.cache=t.cache||!1,n.rmWhitespace=t.rmWhitespace,n.root=t.root,n.includer=t.includer,n.outputFunctionName=t.outputFunctionName,n.localsName=t.localsName||a.localsName||r,n.views=t.views,n.async=t.async,n.destructuredLocals=t.destructuredLocals,n.legacyInclude=void 0===t.legacyInclude||!!t.legacyInclude,n.strict?n._with=!1:n._with=void 0===t._with||t._with,this.opts=n,this.regex=this.createRegex()}a.cache=p.cache,a.fileLoader=o.readFileSync,a.localsName=r,a.promiseImpl=new Function("return this;")().Promise,a.resolveInclude=function(e,t,n){var r=u.dirname,i=u.extname,n=(0,u.resolve)(n?t:r(t),e);return i(e)||(n+=".ejs"),n},a.compile=function(e,t){return t&&t.scope&&(n||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),n=!0),t.context||(t.context=t.scope),delete t.scope),new w(e,t).compile()},a.render=function(e,t,n){t=t||p.createNullProtoObjWherePossible(),n=n||p.createNullProtoObjWherePossible();return 2==arguments.length&&p.shallowCopyFromList(n,t,i),h(n,e)(t)},a.renderFile=function(){var e,t,n,r=Array.prototype.slice.call(arguments),i=r.shift(),o={filename:i},s=("function"==typeof arguments[arguments.length-1]&&(e=r.pop()),r.length?(t=r.shift(),r.length?p.shallowCopy(o,r.pop()):(t.settings&&(t.settings.views&&(o.views=t.settings.views),t.settings["view cache"]&&(o.cache=!0),r=t.settings["view options"])&&p.shallowCopy(o,r),p.shallowCopyFromList(o,t,l)),o.filename=i):t=p.createNullProtoObjWherePossible(),o),c=t,r=e;if(!r){if("function"==typeof a.promiseImpl)return new a.promiseImpl(function(e,t){try{e(n=h(s)(c))}catch(e){t(e)}});throw new Error("Please provide a callback function")}try{n=h(s)(c)}catch(e){return r(e)}r(null,n)},a.Template=w,a.clearCache=function(){a.cache.reset()},w.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},w.prototype={createRegex:function(){var e="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",t=p.escapeRegExpChars(this.opts.delimiter),n=p.escapeRegExpChars(this.opts.openDelimiter),r=p.escapeRegExpChars(this.opts.closeDelimiter),e=e.replace(/%/g,t).replace(/</g,n).replace(/>/g,r);return new RegExp(e)},compile:function(){var e,i=this.opts,t="",n="",o=i.escapeFunction,r=i.filename?JSON.stringify(i.filename):"undefined";if(!this.source){if(this.generateSource(),t+='  var __output = "";\n  function __append(s) { if (s !== undefined && s !== null) __output += s }\n',i.outputFunctionName){if(!f.test(i.outputFunctionName))throw new Error("outputFunctionName is not a valid JS identifier.");t+="  var "+i.outputFunctionName+" = __append;\n"}if(i.localsName&&!f.test(i.localsName))throw new Error("localsName is not a valid JS identifier.");if(i.destructuredLocals&&i.destructuredLocals.length){for(var s="  var __locals = ("+i.localsName+" || {}),\n",c=0;c<i.destructuredLocals.length;c++){var a=i.destructuredLocals[c];if(!f.test(a))throw new Error("destructuredLocals["+c+"] is not a valid JS identifier.");0<c&&(s+=",\n  "),s+=a+" = __locals."+a}t+=s+";\n"}!1!==i._with&&(t+="  with ("+i.localsName+" || {}) {\n",n+="  }\n"),this.source=t+this.source+(n+="  return __output;\n")}t=i.compileDebug?"var __line = 1\n  , __lines = "+JSON.stringify(this.templateText)+"\n  , __filename = "+r+";\ntry {\n"+this.source+"} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n":this.source,i.client&&(t="escapeFn = escapeFn || "+o.toString()+";\n"+t,i.compileDebug)&&(t="rethrow = rethrow || "+g.toString()+";\n"+t),i.strict&&(t='"use strict";\n'+t),i.debug&&console.log(t),i.compileDebug&&i.filename&&(t=t+"\n//# sourceURL="+r+"\n");try{if(i.async)try{l=new Function("return (async function(){}).constructor;")()}catch(e){throw e instanceof SyntaxError?new Error("This environment does not support async/await"):e}else l=Function;e=new l(i.localsName+", escapeFn, include, rethrow",t)}catch(e){throw e instanceof SyntaxError&&(i.filename&&(e.message+=" in "+i.filename),e.message+=" while compiling ejs\n\n",e.message+="If the above error is not helpful, you may want to try EJS-Lint:\n",e.message+="https://github.com/RyanZim/EJS-Lint",i.async||(e.message+="\n",e.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),e}n=i.client?e:function(r){return e.apply(i.context,[r||p.createNullProtoObjWherePossible(),o,function(e,t){var n=p.shallowCopy(p.createNullProtoObjWherePossible(),r);return t&&(n=p.shallowCopy(n,t)),d(e,i)(n)},g])};if(i.filename&&"function"==typeof Object.defineProperty){var r=i.filename,l=u.basename(r,u.extname(r));try{Object.defineProperty(n,"name",{value:l,writable:!1,enumerable:!1,configurable:!0})}catch(e){}}return n},generateSource:function(){this.opts.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var n=this,r=this.parseTemplateText(),i=this.opts.delimiter,o=this.opts.openDelimiter,s=this.opts.closeDelimiter;r&&r.length&&r.forEach(function(e,t){if(0===e.indexOf(o+i)&&0!==e.indexOf(o+i+i)&&(t=r[t+2])!=i+s&&t!="-"+i+s&&t!="_"+i+s)throw new Error('Could not find matching close tag for "'+e+'".');n.scanLine(e)})},parseTemplateText:function(){for(var e,t=this.templateText,n=this.regex,r=n.exec(t),i=[];r;)0!==(e=r.index)&&(i.push(t.substring(0,e)),t=t.slice(e)),i.push(r[0]),t=t.slice(r[0].length),r=n.exec(t);return t&&i.push(t),i},_addOutput:function(e){if(this.truncate&&(e=e.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!e)return e;e=(e=(e=(e=e.replace(/\\/g,"\\\\")).replace(/\n/g,"\\n")).replace(/\r/g,"\\r")).replace(/"/g,'\\"'),this.source+='    ; __append("'+e+'")\n'},scanLine:function(e){var t=this.opts.delimiter,n=this.opts.openDelimiter,r=this.opts.closeDelimiter,i=e.split("\n").length-1;switch(e){case n+t:case n+t+"_":this.mode=w.modes.EVAL;break;case n+t+"=":this.mode=w.modes.ESCAPED;break;case n+t+"-":this.mode=w.modes.RAW;break;case n+t+"#":this.mode=w.modes.COMMENT;break;case n+t+t:this.mode=w.modes.LITERAL,this.source+='    ; __append("'+e.replace(n+t+t,n+t)+'")\n';break;case t+t+r:this.mode=w.modes.LITERAL,this.source+='    ; __append("'+e.replace(t+t+r,t+r)+'")\n';break;case t+r:case"-"+t+r:case"_"+t+r:this.mode==w.modes.LITERAL&&this._addOutput(e),this.mode=null,this.truncate=0===e.indexOf("-")||0===e.indexOf("_");break;default:if(this.mode){switch(this.mode){case w.modes.EVAL:case w.modes.ESCAPED:case w.modes.RAW:e.lastIndexOf("//")>e.lastIndexOf("\n")&&(e+="\n")}switch(this.mode){case w.modes.EVAL:this.source+="    ; "+e+"\n";break;case w.modes.ESCAPED:this.source+="    ; __append(escapeFn("+y(e)+"))\n";break;case w.modes.RAW:this.source+="    ; __append("+y(e)+")\n";break;case w.modes.COMMENT:break;case w.modes.LITERAL:this._addOutput(e)}}else this._addOutput(e)}this.opts.compileDebug&&i&&(this.currentLine+=i,this.source+="    ; __line = "+this.currentLine+"\n")}},a.escapeXML=p.escapeXML,a.__express=a.renderFile,a.VERSION=e,a.name="ejs","undefined"!=typeof window&&(window.ejs=a)},{"../package.json":6,"./utils":2,fs:3,path:4}],2:[function(e,t,n){function o(e,t){return i.apply(e,[t])}var r=/[|\\{}()[\]^$+*?.]/g,i=Object.prototype.hasOwnProperty,s=(n.escapeRegExpChars=function(e){return e?String(e).replace(r,"\\$&"):""},{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"}),c=/[&<>'"]/g;function a(e){return s[e]||e}function l(){return Function.prototype.toString.call(this)+';\nvar _ENCODE_HTML_RULES = {\n      "&": "&amp;"\n    , "<": "&lt;"\n    , ">": "&gt;"\n    , \'"\': "&#34;"\n    , "\'": "&#39;"\n    }\n  , _MATCH_HTML = /[&<>\'"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n'}n.escapeXML=function(e){return null==e?"":String(e).replace(c,a)};try{"function"==typeof Object.defineProperty?Object.defineProperty(n.escapeXML,"toString",{value:l}):n.escapeXML.toString=l}catch(e){console.warn("Unable to set escapeXML.toString (is the Function prototype frozen?)")}n.shallowCopy=function(e,t){if(t=t||{},null!=e)for(var n in t)o(t,n)&&"__proto__"!==n&&"constructor"!==n&&(e[n]=t[n]);return e},n.shallowCopyFromList=function(e,t,n){if(n=n||[],t=t||{},null!=e)for(var r=0;r<n.length;r++){var i=n[r];void 0!==t[i]&&o(t,i)&&"__proto__"!==i&&"constructor"!==i&&(e[i]=t[i])}return e},n.cache={_data:{},set:function(e,t){this._data[e]=t},get:function(e){return this._data[e]},remove:function(e){delete this._data[e]},reset:function(){this._data={}}},n.hyphenToCamel=function(e){return e.replace(/-[a-z]/g,function(e){return e[1].toUpperCase()})},n.createNullProtoObjWherePossible="function"==typeof Object.create?function(){return Object.create(null)}:{__proto__:null}instanceof Object?function(){return{}}:function(){return{__proto__:null}}},{}],3:[function(e,t,n){},{}],4:[function(e,t,l){!function(i){function o(e,t){for(var n=0,r=e.length-1;0<=r;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;)e.unshift("..");return e}function s(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}l.resolve=function(){for(var e="",t=!1,n=arguments.length-1;-1<=n&&!t;n--){var r=0<=n?arguments[n]:i.cwd();if("string"!=typeof r)throw new TypeError("Arguments to path.resolve must be strings");r&&(e=r+"/"+e,t="/"===r.charAt(0))}return(t?"/":"")+(e=o(s(e.split("/"),function(e){return!!e}),!t).join("/"))||"."},l.normalize=function(e){var t=l.isAbsolute(e),n="/"===r(e,-1);return(e=(e=o(s(e.split("/"),function(e){return!!e}),!t).join("/"))||t?e:".")&&n&&(e+="/"),(t?"/":"")+e},l.isAbsolute=function(e){return"/"===e.charAt(0)},l.join=function(){var e=Array.prototype.slice.call(arguments,0);return l.normalize(s(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},l.relative=function(e,t){function n(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;0<=n&&""===e[n];n--);return n<t?[]:e.slice(t,n-t+1)}e=l.resolve(e).substr(1),t=l.resolve(t).substr(1);for(var r=n(e.split("/")),i=n(t.split("/")),o=Math.min(r.length,i.length),s=o,c=0;c<o;c++)if(r[c]!==i[c]){s=c;break}for(var a=[],c=s;c<r.length;c++)a.push("..");return(a=a.concat(i.slice(s))).join("/")},l.sep="/",l.delimiter=":",l.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=47===e.charCodeAt(0),n=-1,r=!0,i=e.length-1;1<=i;--i)if(47===e.charCodeAt(i)){if(!r){n=i;break}}else r=!1;return-1===n?t?"/":".":t&&1===n?"/":e.slice(0,n)},l.basename=function(e,t){e=function(e){"string"!=typeof e&&(e+="");for(var t=0,n=-1,r=!0,i=e.length-1;0<=i;--i)if(47===e.charCodeAt(i)){if(!r){t=i+1;break}}else-1===n&&(r=!1,n=i+1);return-1===n?"":e.slice(t,n)}(e);return e=t&&e.substr(-1*t.length)===t?e.substr(0,e.length-t.length):e},l.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,o=0,s=e.length-1;0<=s;--s){var c=e.charCodeAt(s);if(47===c){if(i)continue;n=s+1;break}-1===r&&(i=!1,r=s+1),46===c?-1===t?t=s:1!==o&&(o=1):-1!==t&&(o=-1)}return-1===t||-1===r||0===o||1===o&&t===r-1&&t===n+1?"":e.slice(t,r)};var r="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}.call(this,e("_process"))},{_process:5}],5:[function(e,t,n){var r,i,t=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{i="function"==typeof clearTimeout?clearTimeout:s}catch(e){i=s}function c(t){if(r===setTimeout)return setTimeout(t,0);if((r===o||!r)&&setTimeout)return(r=setTimeout)(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}var a,l=[],u=!1,p=-1;function f(){u&&a&&(u=!1,a.length?l=a.concat(l):p=-1,l.length)&&h()}function h(){if(!u){for(var e=c(f),t=(u=!0,l.length);t;){for(a=l,l=[];++p<t;)a&&a[p].run();p=-1,t=l.length}a=null,u=!1,!function(t){if(i===clearTimeout)return clearTimeout(t);if((i===s||!i)&&clearTimeout)return(i=clearTimeout)(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function d(){}t.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||u||c(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},t.title="browser",t.browser=!0,t.env={},t.argv=[],t.version="",t.versions={},t.on=d,t.addListener=d,t.once=d,t.off=d,t.removeListener=d,t.removeAllListeners=d,t.emit=d,t.prependListener=d,t.prependOnceListener=d,t.listeners=function(e){return[]},t.binding=function(e){throw new Error("process.binding is not supported")},t.cwd=function(){return"/"},t.chdir=function(e){throw new Error("process.chdir is not supported")},t.umask=function(){return 0}},{}],6:[function(e,t,n){t.exports={name:"ejs",description:"Embedded JavaScript templates",keywords:["template","engine","ejs"],version:"3.1.8",author:"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",license:"Apache-2.0",bin:{ejs:"./bin/cli.js"},main:"./lib/ejs.js",jsdelivr:"ejs.min.js",unpkg:"ejs.min.js",repository:{type:"git",url:"git://github.com/mde/ejs.git"},bugs:"https://github.com/mde/ejs/issues",homepage:"https://github.com/mde/ejs",dependencies:{jake:"^10.8.5"},devDependencies:{browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^4.0.2","lru-cache":"^4.0.1",mocha:"^10.2.0","uglify-js":"^3.3.16"},engines:{node:">=0.10.0"},scripts:{test:"mocha -u tdd"}}},{}]},{},[1])(1)}),CoreUI.tabs.ejs=ejs}();
//# sourceMappingURL=coreui-tabs.min.js.map
;
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.CoreUI=e.CoreUI||{},e.CoreUI.alert=t())}(this,function(){"use strict";const q="SweetAlert2:",H=e=>e.charAt(0).toUpperCase()+e.slice(1),o=e=>Array.prototype.slice.call(e),r=e=>{console.warn("".concat(q," ").concat("object"==typeof e?e.join(" "):e))},l=e=>{console.error("".concat(q," ").concat(e))},V=[],R=(e,t)=>{e='"'.concat(e,'" is deprecated and will be removed in the next major release. Please use "').concat(t,'" instead.'),V.includes(e)||(V.push(e),r(e))},N=e=>"function"==typeof e?e():e,U=e=>e&&"function"==typeof e.toPromise,u=e=>U(e)?e.toPromise():Promise.resolve(e),_=e=>e&&Promise.resolve(e)===e,i={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},F=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],z={},W=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],K=e=>Object.prototype.hasOwnProperty.call(i,e),Y=e=>-1!==F.indexOf(e),Z=e=>z[e],J=e=>{!e.backdrop&&e.allowOutsideClick&&r('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const n in e)t=n,K(t)||r('Unknown parameter "'.concat(t,'"')),e.toast&&(t=n,W.includes(t))&&r('The parameter "'.concat(t,'" is incompatible with toasts')),t=n,Z(t)&&R(t,Z(t));var t};var e=e=>{var t={};for(const n in e)t[e[n]]="swal2-"+e[n];return t};const p=e(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),a=e(["success","warning","info","question","error"]),m=()=>document.body.querySelector(".".concat(p.container)),t=e=>{var t=m();return t?t.querySelector(e):null},n=e=>t(".".concat(e)),h=()=>n(p.popup),s=()=>n(p.icon),X=()=>n(p.title),$=()=>n(p["html-container"]),G=()=>n(p.image),Q=()=>n(p["progress-steps"]),ee=()=>n(p["validation-message"]),g=()=>t(".".concat(p.actions," .").concat(p.confirm)),d=()=>t(".".concat(p.actions," .").concat(p.deny));const f=()=>t(".".concat(p.loader)),b=()=>t(".".concat(p.actions," .").concat(p.cancel)),te=()=>n(p.actions),ne=()=>n(p.footer),oe=()=>n(p["timer-progress-bar"]),ie=()=>n(p.close),re=()=>{var e=o(h().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((e,t)=>{e=parseInt(e.getAttribute("tabindex")),t=parseInt(t.getAttribute("tabindex"));return t<e?1:e<t?-1:0}),t=o(h().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(e=>"-1"!==e.getAttribute("tabindex"));return(t=>{var n=[];for(let e=0;e<t.length;e++)-1===n.indexOf(t[e])&&n.push(t[e]);return n})(e.concat(t)).filter(e=>x(e))},ae=()=>v(document.body,p.shown)&&!v(document.body,p["toast-shown"])&&!v(document.body,p["no-backdrop"]),se=()=>h()&&v(h(),p.toast);const c={previousBodyPadding:null},y=(t,e)=>{t.textContent="",e&&(e=(new DOMParser).parseFromString(e,"text/html"),o(e.querySelector("head").childNodes).forEach(e=>{t.appendChild(e)}),o(e.querySelector("body").childNodes).forEach(e=>{t.appendChild(e)}))},v=(t,e)=>{if(!e)return!1;var n=e.split(/\s+/);for(let e=0;e<n.length;e++)if(!t.classList.contains(n[e]))return!1;return!0},ce=(t,n)=>{o(t.classList).forEach(e=>{Object.values(p).includes(e)||Object.values(a).includes(e)||Object.values(n.showClass).includes(e)||t.classList.remove(e)})},w=(e,t,n)=>{if(ce(e,t),t.customClass&&t.customClass[n]){if("string"!=typeof t.customClass[n]&&!t.customClass[n].forEach)return r("Invalid type of customClass.".concat(n,'! Expected string or iterable object, got "').concat(typeof t.customClass[n],'"'));C(e,t.customClass[n])}},le=(e,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(".".concat(p.popup," > .").concat(p[t]));case"checkbox":return e.querySelector(".".concat(p.popup," > .").concat(p.checkbox," input"));case"radio":return e.querySelector(".".concat(p.popup," > .").concat(p.radio," input:checked"))||e.querySelector(".".concat(p.popup," > .").concat(p.radio," input:first-child"));case"range":return e.querySelector(".".concat(p.popup," > .").concat(p.range," input"));default:return e.querySelector(".".concat(p.popup," > .").concat(p.input))}},ue=e=>{var t;e.focus(),"file"!==e.type&&(t=e.value,e.value="",e.value=t)},de=(e,t,n)=>{e&&t&&(t="string"==typeof t?t.split(/\s+/).filter(Boolean):t).forEach(t=>{Array.isArray(e)?e.forEach(e=>{n?e.classList.add(t):e.classList.remove(t)}):n?e.classList.add(t):e.classList.remove(t)})},C=(e,t)=>{de(e,t,!0)},A=(e,t)=>{de(e,t,!1)},k=(e,t)=>{var n=o(e.childNodes);for(let e=0;e<n.length;e++)if(v(n[e],t))return n[e]},pe=(e,t,n)=>{(n=n==="".concat(parseInt(n))?parseInt(n):n)||0===parseInt(n)?e.style[t]="number"==typeof n?"".concat(n,"px"):n:e.style.removeProperty(t)},P=(e,t="flex")=>{e.style.display=t},B=e=>{e.style.display="none"},me=(e,t,n,o)=>{e=e.querySelector(t);e&&(e.style[n]=o)},he=(e,t,n)=>{t?P(e,n):B(e)},x=e=>!(!e||!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),ge=()=>!x(g())&&!x(d())&&!x(b()),fe=e=>!!(e.scrollHeight>e.clientHeight),be=e=>{var e=window.getComputedStyle(e),t=parseFloat(e.getPropertyValue("animation-duration")||"0"),e=parseFloat(e.getPropertyValue("transition-duration")||"0");return 0<t||0<e},ye=(e,t=!1)=>{const n=oe();x(n)&&(t&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition="width ".concat(e/1e3,"s linear"),n.style.width="0%"},10))},ve=()=>"undefined"==typeof window||"undefined"==typeof document,we=100,E={},Ce=()=>{E.previousActiveElement&&E.previousActiveElement.focus?(E.previousActiveElement.focus(),E.previousActiveElement=null):document.body&&document.body.focus()},Ae=o=>new Promise(e=>{if(!o)return e();var t=window.scrollX,n=window.scrollY;E.restoreFocusTimeout=setTimeout(()=>{Ce(),e()},we),window.scrollTo(t,n)}),ke='\n <div aria-labelledby="'.concat(p.title,'" aria-describedby="').concat(p["html-container"],'" class="').concat(p.popup,'" tabindex="-1">\n   <button type="button" class="').concat(p.close,'"></button>\n   <ul class="').concat(p["progress-steps"],'"></ul>\n   <div class="').concat(p.icon,'"></div>\n   <img class="').concat(p.image,'" />\n   <h2 class="').concat(p.title,'" id="').concat(p.title,'"></h2>\n   <div class="').concat(p["html-container"],'" id="').concat(p["html-container"],'"></div>\n   <input class="').concat(p.input,'" />\n   <input type="file" class="').concat(p.file,'" />\n   <div class="').concat(p.range,'">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(p.select,'"></select>\n   <div class="').concat(p.radio,'"></div>\n   <label for="').concat(p.checkbox,'" class="').concat(p.checkbox,'">\n     <input type="checkbox" />\n     <span class="').concat(p.label,'"></span>\n   </label>\n   <textarea class="').concat(p.textarea,'"></textarea>\n   <div class="').concat(p["validation-message"],'" id="').concat(p["validation-message"],'"></div>\n   <div class="').concat(p.actions,'">\n     <div class="').concat(p.loader,'"></div>\n     <button type="button" class="').concat(p.confirm,'"></button>\n     <button type="button" class="').concat(p.deny,'"></button>\n     <button type="button" class="').concat(p.cancel,'"></button>\n   </div>\n   <div class="').concat(p.footer,'"></div>\n   <div class="').concat(p["timer-progress-bar-container"],'">\n     <div class="').concat(p["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),Pe=()=>{var e=m();return!!e&&(e.remove(),A([document.documentElement,document.body],[p["no-backdrop"],p["toast-shown"],p["has-column"]]),!0)},T=()=>{E.currentInstance.resetValidationMessage()},Be=()=>{var e=h(),t=k(e,p.input),n=k(e,p.file);const o=e.querySelector(".".concat(p.range," input")),i=e.querySelector(".".concat(p.range," output"));var r=k(e,p.select),a=e.querySelector(".".concat(p.checkbox," input")),e=k(e,p.textarea);t.oninput=T,n.onchange=T,r.onchange=T,a.onchange=T,e.oninput=T,o.oninput=()=>{T(),i.value=o.value},o.onchange=()=>{T(),o.nextSibling.value=o.value}},xe=e=>"string"==typeof e?document.querySelector(e):e,Ee=e=>{var t=h();t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true")},Te=e=>{"rtl"===window.getComputedStyle(e).direction&&C(m(),p.rtl)},Oe=(e,t)=>{if(e instanceof HTMLElement)t.appendChild(e);else if("object"==typeof e){var n=e,o=t;if(n.jquery)Se(o,n);else y(o,n.toString())}else e&&y(t,e)},Se=(t,n)=>{if(t.textContent="",0 in n)for(let e=0;e in n;e++)t.appendChild(n[e].cloneNode(!0));else t.appendChild(n.cloneNode(!0))},Le=(()=>{if(!ve()){var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&void 0!==e.style[n])return t[n]}return!1})(),je=(e,t)=>{var n,o,i,r,a,s=te(),c=f();(t.showConfirmButton||t.showDenyButton||t.showCancelButton?P:B)(s),w(s,t,"actions"),s=s,n=c,o=t,i=g(),r=d(),a=b(),Ie(i,"confirm",o),Ie(r,"deny",o),Ie(a,"cancel",o),function(e,t,n,o){if(!o.buttonsStyling)return A([e,t,n],p.styled);C([e,t,n],p.styled),o.confirmButtonColor&&(e.style.backgroundColor=o.confirmButtonColor,C(e,p["default-outline"]));o.denyButtonColor&&(t.style.backgroundColor=o.denyButtonColor,C(t,p["default-outline"]));o.cancelButtonColor&&(n.style.backgroundColor=o.cancelButtonColor,C(n,p["default-outline"]))}(i,r,a,o),o.reverseButtons&&(o.toast?(s.insertBefore(a,i),s.insertBefore(r,i)):(s.insertBefore(a,n),s.insertBefore(r,n),s.insertBefore(i,n))),y(c,t.loaderHtml),w(c,t,"loader")};function Ie(e,t,n){he(e,n["show".concat(H(t),"Button")],"inline-block"),y(e,n["".concat(t,"ButtonText")]),e.setAttribute("aria-label",n["".concat(t,"ButtonAriaLabel")]),e.className=p[t],w(e,n,"".concat(t,"Button")),C(e,n["".concat(t,"ButtonClass")])}const Me=(e,t)=>{var n,o,i=m();i&&(o=i,"string"==typeof(n=t.backdrop)?o.style.background=n:n||C([document.documentElement,document.body],p["no-backdrop"]),o=i,(n=t.position)in p?C(o,p[n]):(r('The "position" parameter is not valid, defaulting to "center"'),C(o,p.center)),n=i,(o=t.grow)&&"string"==typeof o&&(o="grow-".concat(o))in p&&C(n,p[o]),w(i,t,"container"))};var O={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const De=["input","file","range","select","radio","checkbox","textarea"],qe=(e,a)=>{const s=h();var t,e=O.innerParams.get(e);const c=!e||a.input!==e.input;De.forEach(e=>{var t=p[e],n=k(s,t);{var o=a.inputAttributes,i=le(h(),e);if(i){He(i);for(const r in o)i.setAttribute(r,o[r])}}n.className=t,c&&B(n)}),a.input&&(c&&(e=>{if(!S[e.input])return l('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input,'"'));const t=Ne(e.input),n=S[e.input](t,e);P(n),setTimeout(()=>{ue(n)})})(a),e=a,t=Ne(e.input),e.customClass)&&C(t,e.customClass.input)},He=t=>{for(let e=0;e<t.attributes.length;e++){var n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},Ve=(e,t)=>{e.placeholder&&!t.inputPlaceholder||(e.placeholder=t.inputPlaceholder)},Re=(e,t,n)=>{var o,i;n.inputLabel&&(e.id=p.input,o=document.createElement("label"),i=p["input-label"],o.setAttribute("for",e.id),o.className=i,C(o,n.customClass.inputLabel),o.innerText=n.inputLabel,t.insertAdjacentElement("beforebegin",o))},Ne=e=>{e=p[e]||p.input;return k(h(),e)},S={},Ue=(S.text=S.email=S.password=S.number=S.tel=S.url=(e,t)=>("string"==typeof t.inputValue||"number"==typeof t.inputValue?e.value=t.inputValue:_(t.inputValue)||r('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof t.inputValue,'"')),Re(e,e,t),Ve(e,t),e.type=t.input,e),S.file=(e,t)=>(Re(e,e,t),Ve(e,t),e),S.range=(e,t)=>{var n=e.querySelector("input"),o=e.querySelector("output");return n.value=t.inputValue,n.type=t.input,o.value=t.inputValue,Re(n,e,t),e},S.select=(e,t)=>{var n;return e.textContent="",t.inputPlaceholder&&(n=document.createElement("option"),y(n,t.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,e.appendChild(n)),Re(e,e,t),e},S.radio=e=>(e.textContent="",e),S.checkbox=(e,t)=>{var n=le(h(),"checkbox"),n=(n.value="1",n.id=p.checkbox,n.checked=Boolean(t.inputValue),e.querySelector("span"));return y(n,t.inputPlaceholder),e},S.textarea=(n,e)=>{n.value=e.inputValue,Ve(n,e),Re(n,n,e);return setTimeout(()=>{if("MutationObserver"in window){const t=parseInt(window.getComputedStyle(h()).width);new MutationObserver(()=>{var e=n.offsetWidth+(e=n,parseInt(window.getComputedStyle(e).marginLeft)+parseInt(window.getComputedStyle(e).marginRight));e>t?h().style.width="".concat(e,"px"):h().style.width=null}).observe(n,{attributes:!0,attributeFilter:["style"]})}}),n},(e,t)=>{var n=$();w(n,t,"htmlContainer"),t.html?(Oe(t.html,n),P(n,"block")):t.text?(n.textContent=t.text,P(n,"block")):B(n),qe(e,t)}),_e=(e,t)=>{var n=ne();he(n,t.footer),t.footer&&Oe(t.footer,n),w(n,t,"footer")},Fe=(e,t)=>{var n=ie();y(n,t.closeButtonHtml),w(n,t,"closeButton"),he(n,t.showCloseButton),n.setAttribute("aria-label",t.closeButtonAriaLabel)},ze=(e,t)=>{var e=O.innerParams.get(e),n=s();if(!e||t.icon!==e.icon)return t.icon||t.iconHtml?t.icon&&-1===Object.keys(a).indexOf(t.icon)?(l('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon,'"')),B(n)):(P(n),Je(n,t),We(n,t),void C(n,t.showClass.icon)):B(n);Je(n,t),We(n,t)},We=(e,t)=>{for(const n in a)t.icon!==n&&A(e,a[n]);C(e,a[t.icon]),Xe(e,t),Ke(),w(e,t,"icon")},Ke=()=>{var e=h(),t=window.getComputedStyle(e).getPropertyValue("background-color"),n=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let e=0;e<n.length;e++)n[e].style.backgroundColor=t},Ye='\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',Ze='\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n',Je=(e,t)=>{var n;e.textContent="",t.iconHtml?y(e,$e(t.iconHtml)):"success"===t.icon?y(e,Ye):"error"===t.icon?y(e,Ze):(n={question:"?",warning:"!",info:"i"},y(e,$e(n[t.icon])))},Xe=(e,t)=>{if(t.iconColor){e.style.color=t.iconColor,e.style.borderColor=t.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])me(e,n,"backgroundColor",t.iconColor);me(e,".swal2-success-ring","borderColor",t.iconColor)}},$e=e=>'<div class="'.concat(p["icon-content"],'">').concat(e,"</div>"),Ge=(e,t)=>{var n=G();if(!t.imageUrl)return B(n);P(n,""),n.setAttribute("src",t.imageUrl),n.setAttribute("alt",t.imageAlt),pe(n,"width",t.imageWidth),pe(n,"height",t.imageHeight),n.className=p.image,w(n,t,"image")},Qe=(e,o)=>{const i=Q();if(!o.progressSteps||0===o.progressSteps.length)return B(i);P(i),i.textContent="",o.currentProgressStep>=o.progressSteps.length&&r("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),o.progressSteps.forEach((e,t)=>{e=e,n=document.createElement("li"),C(n,p["progress-step"]),y(n,e);var n,e=n;i.appendChild(e),t===o.currentProgressStep&&C(e,p["active-progress-step"]),t!==o.progressSteps.length-1&&(n=o,e=document.createElement("li"),C(e,p["progress-step-line"]),n.progressStepsDistance&&(e.style.width=n.progressStepsDistance),t=e,i.appendChild(t))})},et=(e,t)=>{var n=X();he(n,t.title||t.titleText,"block"),t.title&&Oe(t.title,n),t.titleText&&(n.innerText=t.titleText),w(n,t,"title")},tt=(e,t)=>{var n=m(),o=h(),n=(t.toast?(pe(n,"width",t.width),o.style.width="100%",o.insertBefore(f(),s())):pe(o,"width",t.width),pe(o,"padding",t.padding),t.color&&(o.style.color=t.color),t.background&&(o.style.background=t.background),B(ee()),o),o=t;(n.className="".concat(p.popup," ").concat(x(n)?o.showClass.popup:""),o.toast)?(C([document.documentElement,document.body],p["toast-shown"]),C(n,p.toast)):C(n,p.modal);w(n,o,"popup"),"string"==typeof o.customClass&&C(n,o.customClass);o.icon&&C(n,p["icon-".concat(o.icon)])},nt=(e,t)=>{tt(e,t),Me(e,t),Qe(e,t),ze(e,t),Ge(e,t),et(e,t),Fe(e,t),Ue(e,t),je(e,t),_e(e,t),"function"==typeof t.didRender&&t.didRender(h())},L=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),ot=()=>{o(document.body.children).forEach(e=>{e===m()||e.contains(m())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},it=()=>{o(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},rt=["swal-title","swal-html","swal-footer"],at=e=>{const n={};return o(e.querySelectorAll("swal-param")).forEach(e=>{j(e,["name","value"]);var t=e.getAttribute("name"),e=e.getAttribute("value");"boolean"==typeof i[t]&&"false"===e&&(n[t]=!1),"object"==typeof i[t]&&(n[t]=JSON.parse(e))}),n},st=e=>{const n={};return o(e.querySelectorAll("swal-button")).forEach(e=>{j(e,["type","color","aria-label"]);var t=e.getAttribute("type");n["".concat(t,"ButtonText")]=e.innerHTML,n["show".concat(H(t),"Button")]=!0,e.hasAttribute("color")&&(n["".concat(t,"ButtonColor")]=e.getAttribute("color")),e.hasAttribute("aria-label")&&(n["".concat(t,"ButtonAriaLabel")]=e.getAttribute("aria-label"))}),n},ct=e=>{var t={},e=e.querySelector("swal-image");return e&&(j(e,["src","width","height","alt"]),e.hasAttribute("src")&&(t.imageUrl=e.getAttribute("src")),e.hasAttribute("width")&&(t.imageWidth=e.getAttribute("width")),e.hasAttribute("height")&&(t.imageHeight=e.getAttribute("height")),e.hasAttribute("alt"))&&(t.imageAlt=e.getAttribute("alt")),t},lt=e=>{var t={},e=e.querySelector("swal-icon");return e&&(j(e,["type","color"]),e.hasAttribute("type")&&(t.icon=e.getAttribute("type")),e.hasAttribute("color")&&(t.iconColor=e.getAttribute("color")),t.iconHtml=e.innerHTML),t},ut=e=>{const n={};var t=e.querySelector("swal-input"),t=(t&&(j(t,["type","label","placeholder","value"]),n.input=t.getAttribute("type")||"text",t.hasAttribute("label")&&(n.inputLabel=t.getAttribute("label")),t.hasAttribute("placeholder")&&(n.inputPlaceholder=t.getAttribute("placeholder")),t.hasAttribute("value"))&&(n.inputValue=t.getAttribute("value")),e.querySelectorAll("swal-input-option"));return t.length&&(n.inputOptions={},o(t).forEach(e=>{j(e,["value"]);var t=e.getAttribute("value"),e=e.innerHTML;n.inputOptions[t]=e})),n},dt=(e,t)=>{var n={};for(const r in t){var o=t[r],i=e.querySelector(o);i&&(j(i,[]),n[o.replace(/^swal-/,"")]=i.innerHTML.trim())}return n},pt=e=>{const t=rt.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);o(e.children).forEach(e=>{e=e.tagName.toLowerCase();-1===t.indexOf(e)&&r("Unrecognized element <".concat(e,">"))})},j=(t,n)=>{o(t.attributes).forEach(e=>{-1===n.indexOf(e.name)&&r(['Unrecognized attribute "'.concat(e.name,'" on <').concat(t.tagName.toLowerCase(),">."),"".concat(n.length?"Allowed attributes are: ".concat(n.join(", ")):"To set the value, use HTML within the element.")])})};var mt={email:(e,t)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address"),url:(e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")};function ht(e){var t,n,o;(t=e).inputValidator||Object.keys(mt).forEach(e=>{t.input===e&&(t.inputValidator=mt[e])}),e.showLoaderOnConfirm&&!e.preConfirm&&r("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),(n=e).target&&("string"!=typeof n.target||document.querySelector(n.target))&&("string"==typeof n.target||n.target.appendChild)||(r('Target parameter is not valid, defaulting to "body"'),n.target="body"),"string"==typeof e.title&&(e.title=e.title.split("\n").join("<br />")),n=e,e=Pe(),ve()?l("SweetAlert2 requires document to initialize"):((o=document.createElement("div")).className=p.container,e&&C(o,p["no-transition"]),y(o,ke),(e=xe(n.target)).appendChild(o),Ee(n),Te(e),Be())}class gt{constructor(e,t){this.callback=e,this.remaining=t,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=(new Date).getTime()-this.started.getTime()),this.remaining}increase(e){var t=this.running;return t&&this.stop(),this.remaining+=e,t&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const ft=()=>{var e,t;null===c.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(c.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(c.previousBodyPadding+((e=document.createElement("div")).className=p["scrollbar-measure"],document.body.appendChild(e),t=e.getBoundingClientRect().width-e.clientWidth,document.body.removeChild(e),t),"px"))},bt=()=>{null!==c.previousBodyPadding&&(document.body.style.paddingRight="".concat(c.previousBodyPadding,"px"),c.previousBodyPadding=null)},yt=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints)&&!v(document.body,p.iosfix)){var e=document.body.scrollTop;document.body.style.top="".concat(-1*e,"px"),C(document.body,p.iosfix);{e=m();let t;e.ontouchstart=e=>{t=vt(e)},e.ontouchmove=e=>{t&&(e.preventDefault(),e.stopPropagation())}}var e=navigator.userAgent,t=!!e.match(/iPad/i)||!!e.match(/iPhone/i),n=!!e.match(/WebKit/i);t&&n&&!e.match(/CriOS/i)&&h().scrollHeight>window.innerHeight-44&&(m().style.paddingBottom="".concat(44,"px"))}},vt=e=>{var t,n=e.target,o=m();return!((t=e).touches&&t.touches.length&&"stylus"===t.touches[0].touchType||(t=e).touches&&1<t.touches.length||n!==o&&(fe(o)||"INPUT"===n.tagName||"TEXTAREA"===n.tagName||fe($())&&$().contains(n)))},wt=()=>{var e;v(document.body,p.iosfix)&&(e=parseInt(document.body.style.top,10),A(document.body,p.iosfix),document.body.style.top="",document.body.scrollTop=-1*e)},Ct=10,At=e=>{var t=h();e.target===t&&(e=m(),t.removeEventListener(Le,At),e.style.overflowY="auto")},kt=(e,t)=>{Le&&be(t)?(e.style.overflowY="hidden",t.addEventListener(Le,At)):e.style.overflowY="auto"},Pt=(e,t,n)=>{yt(),t&&"hidden"!==n&&ft(),setTimeout(()=>{e.scrollTop=0})},Bt=(e,t,n)=>{C(e,n.showClass.backdrop),t.style.setProperty("opacity","0","important"),P(t,"grid"),setTimeout(()=>{C(t,n.showClass.popup),t.style.removeProperty("opacity")},Ct),C([document.documentElement,document.body],p.shown),n.heightAuto&&n.backdrop&&!n.toast&&C([document.documentElement,document.body],p["height-auto"])},I=e=>{var t,n,o,i=h(),r=(i||new Cn,i=h(),f());se()?B(s()):(t=i,e=e,n=te(),o=f(),!e&&x(g())&&(e=g()),P(n),e&&(B(e),o.setAttribute("data-button-to-replace",e.className)),o.parentNode.insertBefore(o,e),C([t,n],p.loading)),P(r),i.setAttribute("data-loading",!0),i.setAttribute("aria-busy",!0),i.focus()},xt=(t,n)=>{const o=h(),i=e=>Tt[n.input](o,Ot(e),n);U(n.inputOptions)||_(n.inputOptions)?(I(g()),u(n.inputOptions).then(e=>{t.hideLoading(),i(e)})):"object"==typeof n.inputOptions?i(n.inputOptions):l("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof n.inputOptions))},Et=(t,n)=>{const o=t.getInput();B(o),u(n.inputValue).then(e=>{o.value="number"===n.input?parseFloat(e)||0:"".concat(e),P(o),o.focus(),t.hideLoading()}).catch(e=>{l("Error in inputValue promise: ".concat(e)),o.value="",P(o),o.focus(),t.hideLoading()})},Tt={select:(e,t,i)=>{const o=k(e,p.select),r=(e,t,n)=>{var o=document.createElement("option");o.value=n,y(o,t),o.selected=St(n,i.inputValue),e.appendChild(o)};t.forEach(e=>{var t=e[0],e=e[1];if(Array.isArray(e)){const n=document.createElement("optgroup");n.label=t,n.disabled=!1,o.appendChild(n),e.forEach(e=>r(n,e[1],e[0]))}else r(o,e,t)}),o.focus()},radio:(e,t,i)=>{const r=k(e,p.radio);t.forEach(e=>{var t=e[0],e=e[1],n=document.createElement("input"),o=document.createElement("label"),t=(n.type="radio",n.name=p.radio,n.value=t,St(t,i.inputValue)&&(n.checked=!0),document.createElement("span"));y(t,e),t.className=p.label,o.appendChild(n),o.appendChild(t),r.appendChild(o)});e=r.querySelectorAll("input");e.length&&e[0].focus()}},Ot=n=>{const o=[];return"undefined"!=typeof Map&&n instanceof Map?n.forEach((e,t)=>{let n=e;"object"==typeof n&&(n=Ot(n)),o.push([t,n])}):Object.keys(n).forEach(e=>{let t=n[e];"object"==typeof t&&(t=Ot(t)),o.push([e,t])}),o},St=(e,t)=>t&&t.toString()===e.toString();function Lt(){var e,t,n=O.innerParams.get(this);n&&(e=O.domCache.get(this),B(e.loader),se()?n.icon&&P(s()):(t=(n=e).popup.getElementsByClassName(n.loader.getAttribute("data-button-to-replace"))).length?P(t[0],"inline-block"):ge()&&B(n.actions),A([e.popup,e.actions],p.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1)}var jt={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const It=()=>g()&&g().click();const Mt=e=>{e.keydownTarget&&e.keydownHandlerAdded&&(e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1)},Dt=(e,t,n)=>{var o=re();if(o.length)return(t+=n)===o.length?t=0:-1===t&&(t=o.length-1),o[t].focus();h().focus()},qt=["ArrowRight","ArrowDown"],Ht=["ArrowLeft","ArrowUp"],Vt=(e,n,t)=>{var o=O.innerParams.get(e);if(o&&(!n.isComposing&&229!==n.keyCode))if(o.stopKeydownPropagation&&n.stopPropagation(),"Enter"===n.key)e=e,s=n,i=o,N(i.allowEnterKey)&&s.target&&e.getInput()&&s.target.outerHTML===e.getInput().outerHTML&&(["textarea","file"].includes(i.input)||(It(),s.preventDefault()));else if("Tab"===n.key){e=n;var i=o;var r=e.target,a=re();let t=-1;for(let e=0;e<a.length;e++)if(r===a[e]){t=e;break}e.shiftKey?Dt(i,t,-1):Dt(i,t,1);e.stopPropagation(),e.preventDefault()}else if([...qt,...Ht].includes(n.key)){var s=n.key,e=g(),c=d(),l=b();if([e,c,l].includes(document.activeElement)){var u=qt.includes(s)?"nextElementSibling":"previousElementSibling";let t=document.activeElement;for(let e=0;e<te().children.length;e++){if(!(t=t[u]))return;if(x(t)&&t instanceof HTMLButtonElement)break}t instanceof HTMLButtonElement&&t.focus()}}else if("Escape"===n.key){e=n,c=o,l=t;if(N(c.allowEscapeKey)){e.preventDefault();l(L.esc)}}};function Rt(e,t,n,o){se()?Ft(e,o):(Ae(n).then(()=>Ft(e,o)),Mt(E)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(t.setAttribute("style","display:none !important"),t.removeAttribute("class"),t.innerHTML=""):t.remove(),ae()&&(bt(),wt(),it()),A([document.documentElement,document.body],[p.shown,p["height-auto"],p["no-backdrop"],p["toast-shown"]])}function Nt(e){e=void 0!==(t=e)?Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t):{isConfirmed:!1,isDenied:!1,isDismissed:!0};var t=jt.swalPromiseResolve.get(this),n=(e=>{const t=h();if(!t)return false;const n=O.innerParams.get(e);if(!n||v(t,n.hideClass.popup))return false;A(t,n.showClass.popup),C(t,n.hideClass.popup);const o=m();return A(o,n.showClass.backdrop),C(o,n.hideClass.backdrop),_t(e,t,n),true})(this);this.isAwaitingPromise()?e.isDismissed||(Ut(this),t(e)):n&&t(e)}const Ut=e=>{e.isAwaitingPromise()&&(O.awaitingPromise.delete(e),O.innerParams.get(e)||e._destroy())},_t=(e,t,n)=>{var o,i,r,a=m(),s=Le&&be(t);"function"==typeof n.willClose&&n.willClose(t),s?(s=e,o=t,t=a,i=n.returnFocus,r=n.didClose,E.swalCloseEventFinishedCallback=Rt.bind(null,s,t,i,r),o.addEventListener(Le,function(e){e.target===o&&(E.swalCloseEventFinishedCallback(),delete E.swalCloseEventFinishedCallback)})):Rt(e,a,n.returnFocus,n.didClose)},Ft=(e,t)=>{setTimeout(()=>{"function"==typeof t&&t.bind(e.params)(),e._destroy()})};function zt(e,t,n){const o=O.domCache.get(e);t.forEach(e=>{o[e].disabled=n})}function Wt(e,t){if(!e)return!1;if("radio"===e.type){var n=e.parentNode.parentNode.querySelectorAll("input");for(let e=0;e<n.length;e++)n[e].disabled=t}else e.disabled=t}const Kt=e=>{e.isAwaitingPromise()?(Yt(O,e),O.awaitingPromise.set(e,!0)):(Yt(jt,e),Yt(O,e))},Yt=(e,t)=>{for(const n in e)e[n].delete(t)};e=Object.freeze({hideLoading:Lt,disableLoading:Lt,getInput:function(e){var t=O.innerParams.get(e||this);return(e=O.domCache.get(e||this))?le(e.popup,t.input):null},close:Nt,isAwaitingPromise:function(){return!!O.awaitingPromise.get(this)},rejectPromise:function(e){var t=jt.swalPromiseReject.get(this);Ut(this),t&&t(e)},handleAwaitingPromise:Ut,closePopup:Nt,closeModal:Nt,closeToast:Nt,enableButtons:function(){zt(this,["confirmButton","denyButton","cancelButton"],!1)},disableButtons:function(){zt(this,["confirmButton","denyButton","cancelButton"],!0)},enableInput:function(){return Wt(this.getInput(),!1)},disableInput:function(){return Wt(this.getInput(),!0)},showValidationMessage:function(e){var t=O.domCache.get(this),n=O.innerParams.get(this);y(t.validationMessage,e),t.validationMessage.className=p["validation-message"],n.customClass&&n.customClass.validationMessage&&C(t.validationMessage,n.customClass.validationMessage),P(t.validationMessage),(e=this.getInput())&&(e.setAttribute("aria-invalid",!0),e.setAttribute("aria-describedby",p["validation-message"]),ue(e),C(e,p.inputerror))},resetValidationMessage:function(){var e=O.domCache.get(this);e.validationMessage&&B(e.validationMessage),(e=this.getInput())&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),A(e,p.inputerror))},getProgressSteps:function(){return O.domCache.get(this).progressSteps},update:function(e){var t=h(),n=O.innerParams.get(this);if(!t||v(t,n.hideClass.popup))return r("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");t=(t=>{const n={};return Object.keys(t).forEach(e=>{if(Y(e))n[e]=t[e];else r('Invalid parameter to update: "'.concat(e,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'))}),n})(e),n=Object.assign({},n,t),nt(this,n),O.innerParams.set(this,n),Object.defineProperties(this,{params:{value:Object.assign({},this.params,e),writable:!1,enumerable:!0}})},_destroy:function(){var e=O.domCache.get(this),t=O.innerParams.get(this);t?(e.popup&&E.swalCloseEventFinishedCallback&&(E.swalCloseEventFinishedCallback(),delete E.swalCloseEventFinishedCallback),E.deferDisposalTimer&&(clearTimeout(E.deferDisposalTimer),delete E.deferDisposalTimer),"function"==typeof t.didDestroy&&t.didDestroy(),e=this,Kt(e),delete e.params,delete E.keydownHandler,delete E.keydownTarget,delete E.currentInstance):Kt(this)}});const Zt=(e,t)=>{var n=O.innerParams.get(e);if(!n.input)return l('The "input" parameter is needed to be set when using returnInputValueOn'.concat(H(t)));var o=((e,t)=>{var n,o=e.getInput();if(!o)return null;switch(t.input){case"checkbox":return o.checked?1:0;case"radio":return(n=o).checked?n.value:null;case"file":return(n=o).files.length?null!==n.getAttribute("multiple")?n.files:n.files[0]:null;default:return t.inputAutoTrim?o.value.trim():o.value}})(e,n);if(n.inputValidator){var i=e;var r=o;var a=t;const s=O.innerParams.get(i),c=(i.disableInput(),Promise.resolve().then(()=>u(s.inputValidator(r,s.validationMessage))));c.then(e=>{i.enableButtons(),i.enableInput(),e?i.showValidationMessage(e):("deny"===a?Jt:Gt)(i,r)})}else e.getInput().checkValidity()?("deny"===t?Jt:Gt)(e,o):(e.enableButtons(),e.showValidationMessage(n.validationMessage))},Jt=(t,n)=>{const e=O.innerParams.get(t||window);e.showLoaderOnDeny&&I(d()),e.preDeny?(O.awaitingPromise.set(t||window,!0),Promise.resolve().then(()=>u(e.preDeny(n,e.validationMessage))).then(e=>{!1===e?(t.hideLoading(),Ut(t)):t.closePopup({isDenied:!0,value:void 0===e?n:e})}).catch(e=>$t(t||window,e))):t.closePopup({isDenied:!0,value:n})},Xt=(e,t)=>{e.closePopup({isConfirmed:!0,value:t})},$t=(e,t)=>{e.rejectPromise(t)},Gt=(t,n)=>{const e=O.innerParams.get(t||window);e.showLoaderOnConfirm&&I(),e.preConfirm?(t.resetValidationMessage(),O.awaitingPromise.set(t||window,!0),Promise.resolve().then(()=>u(e.preConfirm(n,e.validationMessage))).then(e=>{x(ee())||!1===e?(t.hideLoading(),Ut(t)):Xt(t,void 0===e?n:e)}).catch(e=>$t(t||window,e))):Xt(t,n)},Qt=(n,e,o)=>{e.popup.onclick=()=>{var e,t=O.innerParams.get(n);t&&((e=t).showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton||t.timer||t.input)||o(L.close)}};let en=!1;const tn=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(en=!0)}}},nn=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,e.target!==t.popup&&!t.popup.contains(e.target)||(en=!0)}}},on=(n,o,i)=>{o.container.onclick=e=>{var t=O.innerParams.get(n);en?en=!1:e.target===o.container&&N(t.allowOutsideClick)&&i(L.backdrop)}},rn=e=>"object"==typeof e&&e.jquery,an=e=>e instanceof Element||rn(e);const sn=()=>{if(E.timeout)return e=oe(),t=parseInt(window.getComputedStyle(e).width),e.style.removeProperty("transition"),e.style.width="100%",n=parseInt(window.getComputedStyle(e).width),t=t/n*100,e.style.removeProperty("transition"),e.style.width="".concat(t,"%"),E.timeout.stop();var e,t,n},cn=()=>{var e;if(E.timeout)return e=E.timeout.start(),ye(e),e};let ln=!1;const un={};const dn=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const o in un){var n=e.getAttribute(o);if(n)return void un[o].fire({template:n})}};var pn=Object.freeze({isValidParameter:K,isUpdatableParameter:Y,isDeprecatedParameter:Z,argsToParams:n=>{const o={};return"object"!=typeof n[0]||an(n[0])?["title","html","icon"].forEach((e,t)=>{t=n[t];"string"==typeof t||an(t)?o[e]=t:void 0!==t&&l("Unexpected type of ".concat(e,'! Expected "string" or "Element", got ').concat(typeof t))}):Object.assign(o,n[0]),o},isVisible:()=>x(h()),clickConfirm:It,clickDeny:()=>d()&&d().click(),clickCancel:()=>b()&&b().click(),getContainer:m,getPopup:h,getTitle:X,getHtmlContainer:$,getImage:G,getIcon:s,getInputLabel:()=>n(p["input-label"]),getCloseButton:ie,getActions:te,getConfirmButton:g,getDenyButton:d,getCancelButton:b,getLoader:f,getFooter:ne,getTimerProgressBar:oe,getFocusableElements:re,getValidationMessage:ee,isLoading:()=>h().hasAttribute("data-loading"),fire:function(...e){return new this(...e)},mixin:function(n){class e extends this{_main(e,t){return super._main(e,Object.assign({},n,t))}}return e},showLoading:I,enableLoading:I,getTimerLeft:()=>E.timeout&&E.timeout.getTimerLeft(),stopTimer:sn,resumeTimer:cn,toggleTimer:()=>{var e=E.timeout;return e&&(e.running?sn:cn)()},increaseTimer:e=>{if(E.timeout)return e=E.timeout.increase(e),ye(e,!0),e},isTimerRunning:()=>E.timeout&&E.timeout.isRunning(),bindClickHandler:function(e="data-swal-template"){un[e]=this,ln||(document.body.addEventListener("click",dn),ln=!0)}});let mn;class M{constructor(...e){"undefined"!=typeof window&&(mn=this,e=Object.freeze(this.constructor.argsToParams(e)),Object.defineProperties(this,{params:{value:e,writable:!1,enumerable:!0,configurable:!0}}),e=this._main(this.params),O.promise.set(this,e))}_main(e,t={}){J(Object.assign({},t,e)),E.currentInstance&&(E.currentInstance._destroy(),ae())&&it(),E.currentInstance=this;e=gn(e,t),ht(e),Object.freeze(e),E.timeout&&(E.timeout.stop(),delete E.timeout),clearTimeout(E.restoreFocusTimeout),t=fn(this);return nt(this,e),O.innerParams.set(this,e),hn(this,t,e)}then(e){return O.promise.get(this).then(e)}finally(e){return O.promise.get(this).finally(e)}}const hn=(l,u,d)=>new Promise((e,t)=>{const n=e=>{l.closePopup({isDismissed:!0,dismiss:e})};var o,i,r;jt.swalPromiseResolve.set(l,e),jt.swalPromiseReject.set(l,t),u.confirmButton.onclick=()=>{return e=l,t=O.innerParams.get(e),e.disableButtons(),void(t.input?Zt(e,"confirm"):Gt(e,!0));var e,t},u.denyButton.onclick=()=>{return e=l,t=O.innerParams.get(e),e.disableButtons(),void(t.returnInputValueOnDeny?Zt(e,"deny"):Jt(e,!1));var e,t},u.cancelButton.onclick=()=>{return e=l,t=n,e.disableButtons(),void t(L.cancel);var e,t},u.closeButton.onclick=()=>n(L.close),e=l,t=u,r=n,(O.innerParams.get(e).toast?Qt:(tn(t),nn(t),on))(e,t,r),o=l,e=E,t=d,i=n,Mt(e),t.toast||(e.keydownHandler=e=>Vt(o,e,i),e.keydownTarget=t.keydownListenerCapture?window:h(),e.keydownListenerCapture=t.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0),r=l,"select"===(t=d).input||"radio"===t.input?xt(r,t):["text","email","number","tel","textarea"].includes(t.input)&&(U(t.inputValue)||_(t.inputValue))&&(I(g()),Et(r,t));{var a=d;const s=m(),c=h();"function"==typeof a.willOpen&&a.willOpen(c),e=window.getComputedStyle(document.body).overflowY,Bt(s,c,a),setTimeout(()=>{kt(s,c)},Ct),ae()&&(Pt(s,a.scrollbarPadding,e),ot()),se()||E.previousActiveElement||(E.previousActiveElement=document.activeElement),"function"==typeof a.didOpen&&setTimeout(()=>a.didOpen(c)),A(s,p["no-transition"])}bn(E,d,n),yn(u,d),setTimeout(()=>{u.container.scrollTop=0})}),gn=(e,t)=>{var n=(n="string"==typeof(n=e).template?document.querySelector(n.template):n.template)?(n=n.content,pt(n),Object.assign(at(n),st(n),ct(n),lt(n),ut(n),dt(n,rt))):{},t=Object.assign({},i,t,n,e);return t.showClass=Object.assign({},i.showClass,t.showClass),t.hideClass=Object.assign({},i.hideClass,t.hideClass),t},fn=e=>{var t={popup:h(),container:m(),actions:te(),confirmButton:g(),denyButton:d(),cancelButton:b(),loader:f(),closeButton:ie(),validationMessage:ee(),progressSteps:Q()};return O.domCache.set(e,t),t},bn=(e,t,n)=>{var o=oe();B(o),t.timer&&(e.timeout=new gt(()=>{n("timer"),delete e.timeout},t.timer),t.timerProgressBar)&&(P(o),w(o,t,"timerProgressBar"),setTimeout(()=>{e.timeout&&e.timeout.running&&ye(t.timer)}))},yn=(e,t)=>{if(!t.toast)return N(t.allowEnterKey)?void(vn(e,t)||Dt(t,-1,1)):wn()},vn=(e,t)=>t.focusDeny&&x(e.denyButton)?(e.denyButton.focus(),!0):t.focusCancel&&x(e.cancelButton)?(e.cancelButton.focus(),!0):!(!t.focusConfirm||!x(e.confirmButton)||(e.confirmButton.focus(),0)),wn=()=>{document.activeElement instanceof HTMLElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()},Cn=(Object.assign(M.prototype,e),Object.assign(M,pn),Object.keys(e).forEach(t=>{M[t]=function(...e){if(mn)return mn[t](...e)}}),M.DismissReason=L,M.version="11.4.8",M);Cn.default=Cn;var D=function(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e},An=function(e,t){var n=e.split("."),e=n.pop();t=t||window;for(let e=0;e<n.length;e++){if(!t.hasOwnProperty(n[e]))return null;t=t[n[e]]}return"function"==typeof t[e]?t[e]:null};return{default:function(e,t,n){(n=D(n)?n:{}).title=e,n.content=t,this.create(n)},warning:function(e,t,n){(n=D(n)?n:{}).title=e,n.content=t,n.type="warning",this.create(n)},question:function(e,t,n){(n=D(n)?n:{}).title=e,n.content=t,n.type="question",this.create(n)},info:function(e,t,n){(n=D(n)?n:{}).title=e,n.content=t,n.type="info",this.create(n)},success:function(e,t,n){(n=D(n)?n:{}).title=e,n.content=t,n.type="success",this.create(n)},danger:function(e,t,n){(n=D(n)?n:{}).title=e,n.content=t,n.type="danger",this.create(n)},create:function(t){t=D(t)?t:{};var e,n={html:"",reverseButtons:!0,showCloseButton:!0,showConfirmButton:!1,showClass:{popup:"coreui_animate_animated coreui_animate_fadeIn coreui_animate_zoomIn"},hideClass:{popup:"coreui_animate_animated coreui_animate_fadeOut"}};let o=null,i=null,r=null;if("string"==typeof t.type&&("danger"===t.type&&(t.type="error"),n.icon=t.type),t.title){let e=[];t.hasOwnProperty("titleColor")&&"string"==typeof t.titleColor&&e.push("color:".concat(t.titleColor)),e=0<e.length?'style="'+e.join("")+'"':"",n.html+="<h3".concat(e,">").concat(t.title,"</h3>")}t.content&&(n.html+=t.content),t.hasOwnProperty("btnAcceptText")&&"string"==typeof t.btnAcceptText&&(n.showConfirmButton=!0,n.confirmButtonText=t.btnAcceptText),t.hasOwnProperty("btnAcceptColor")&&"string"==typeof t.btnAcceptColor&&(n.confirmButtonColor=t.btnAcceptColor),t.hasOwnProperty("btnAcceptEvent")&&("function"==typeof t.btnAcceptEvent?o=t.btnAcceptEvent:"string"==typeof t.btnAcceptEvent&&"function"==typeof(e=An(t.btnAcceptEvent))&&(o=e)),t.hasOwnProperty("btnRejectText")&&"string"==typeof t.btnRejectText&&(n.showDenyButton=!0,n.denyButtonText=t.btnRejectText),t.hasOwnProperty("btnRejectColor")&&"string"==typeof t.btnRejectColor&&(n.denyButtonColor=t.btnRejectColor),t.hasOwnProperty("btnRejectEvent")&&("function"==typeof t.btnRejectEvent?i=t.btnRejectEvent:"string"==typeof t.btnRejectEvent&&"function"==typeof(e=An(t.btnRejectEvent))&&(i=e)),t.hasOwnProperty("btnCancelText")&&"string"==typeof t.btnCancelText&&(n.showCancelButton=!0,n.cancelButtonText=t.btnCancelText),t.hasOwnProperty("btnCancelColor")&&"string"==typeof t.btnCancelColor&&(n.cancelButtonColor=t.btnCancelColor),t.hasOwnProperty("btnCancelEvent")&&("function"==typeof t.btnCancelEvent?r=t.btnCancelEvent:"string"==typeof t.btnCancelEvent&&"function"==typeof(e=An(t.btnCancelEvent))&&(r=e)),Cn.fire(n).then(function(e){e.isConfirmed?"function"==typeof o&&o():e.isDenied?"function"==typeof i&&i():"function"==typeof r&&r()})}}});
//# sourceMappingURL=coreui-alert.min.js.map
;

var CoreUI = typeof CoreUI !== 'undefined' ? CoreUI : {};

CoreUI.modal = {

    lang: {},
    _instances: {},
    _settings: {
        lang: 'en'
    },

    /**
     * @param {object} options
     * @returns {CoreUI.modal.instance}
     */
    create: function (options) {

        let instance = $.extend(true, {}, this.instance);
        instance._init(options instanceof Object ? options : {});

        let layoutId = instance.getId();
        this._instances[layoutId] = instance;

        return instance;
    },


    /**
     * @param {string} id
     * @returns {CoreUI.modal.instance|null}
     */
    get: function (id) {

        if ( ! this._instances.hasOwnProperty(id)) {
            return null;
        }

        if ($('#coreui-modal-' + this._instances[id])[0]) {
            delete this._instances[id];
            return null;
        }

        return this._instances[id];
    },


    /**
     * @param title
     * @param body
     * @param options
     * @returns {HTMLElement}
     */
    show: function (title, body, options) {

        options = typeof options === 'object' && ! Array.isArray(options) && options !== null
                  ? options
                  : {};

        options = $.extend(true, {}, options, {
            title : title,
            body : body,
        });

        let modal = this.create(options);

        if (typeof options.onShow === 'function') {
            modal.on('show.coreui.modal', options.onShow);
        }

        if (typeof options.onShown === 'function') {
            modal.on('shown.coreui.modal', options.onShown);
        }

        if (typeof options.onHide === 'function') {
            modal.on('hide.coreui.modal', options.onHide);
        }

        if (typeof options.onHidden === 'function') {
            modal.on('hidden.coreui.modal', options.onHidden);
        }

        return modal.show();
    },


    /**
     * @param title
     * @param url
     * @param options
     * @returns {HTMLElement}
     */
    showLoad: function (title, url, options) {

        options = typeof options === 'object' && ! Array.isArray(options) && options !== null
            ? options
            : {};

        options = $.extend(true, {}, options, {
            title : title,
            loadUrl : url,
        });

        let modal = this.create(options);

        if (typeof options.onShow === 'function') {
            modal.on('show.coreui.modal', options.onShow);
        }

        if (typeof options.onShown === 'function') {
            modal.on('shown.coreui.modal', options.onShown);
        }

        if (typeof options.onHide === 'function') {
            modal.on('hide.coreui.modal', options.onHide);
        }

        if (typeof options.onHidden === 'function') {
            modal.on('hidden.coreui.modal', options.onHidden);
        }


        return modal.show();
    },


    /**
     * Скрытие последнего открытого модала
     * @param {function} callback
     */
    hideLast: function (callback) {

        let instances = this._instances.reverse();

        $.each(instances, function (key, instance) {
            let modalElement = document.getElementById('coreui-modal-' + instance.getId());

            if (modalElement) {
                if (typeof callback === 'function') {
                    instance.on('hidden.coreui.modal', callback);
                }

                instance.hide();
                return false;
            }
        });
    },


    /**
     * Скрытие всех открытых модалов
     * @param {function} callback
     */
    hideAll: function (callback) {

        if (typeof callback === 'function') {
            $.each(this._instances, function (key, instance) {
                let modalElement = document.getElementById('coreui-modal-' + instance.getId());

                if (modalElement) {
                    instance.on('hidden.coreui.modal', callback);
                    return false;
                }
            });
        }


        let instances = this._instances.reverse();

        $.each(instances, function (key, instance) {
            let modalElement = document.getElementById('coreui-modal-' + instance.getId());

            if (modalElement) {
                instance.hide();
            }
        });
    },


    /**
     * Установка настроек
     * @param {object} settings
     */
    setSettings: function(settings) {

        CoreUI.modal._settings = $.extend(this, {}, this._settings, settings);
    },


    /**
     * Получение значения настройки
     * @param {string} name
     */
    getSetting: function(name) {

        let value = null;

        if (CoreUI.modal._settings.hasOwnProperty(name)) {
            value = CoreUI.modal._settings[name];
        }

        return value;
    }
};

CoreUI.modal.instance = {

    _options: {
        id: '',
        lang: 'en',
        backdrop: true,
        loadUrl: null,
        size: 'lg',
        title: null,
        body: null,
        footer: null
    },
    _modal: null,
    _events: {},


    /**
     * Инициализация
     * @param options
     */
    _init: function (options) {

        this._options.lang = CoreUI.modal.getSetting('lang');

        this._options = $.extend(true, {}, this._options, options);

        if ( ! this._options.id) {
            this._options.id = CoreUI.modal.utils.hashCode();
        }
    },


    /**
     *
     * @returns {*}
     */
    getId: function () {
        return this._options.id;
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return $.extend(true, {}, this._options);
    },


    /**
     * Установка содержимого модала
     * @param {string} content
     */
    setBodyContent: function (content) {

        let container = $('#coreui-modal-' + this._options.id + ' .modal-body');

        if (container[0]) {
            container.html(this._renderContent(content));
            this._trigger('change-body.coreui.modal', this, [ this ]);
        }
    },


    /**
     Установка заголовка модала
     * @param {string} content
     */
    setTitleContent: function (content) {

        let container = $('#coreui-modal-' + this._options.id + ' .modal-title');

        if (container[0]) {
            container.html(content);
            this._trigger('change-title.coreui.modal', this, [ this ]);
        }
    },


    /**
     Установка подвала модала
     * @param {string} content
     */
    setFooterContent: function (content) {

        let container = $('#coreui-modal-' + this._options.id);

        if (container[0]) {
            let footer = container.find('.modal-footer');

            if (footer[0]) {
                footer.html(content);
            } else {
                container.find('.modal-content').append('<div class="modal-footer">' + content + '</div>');
            }

            this._trigger('change-footer.coreui.modal', this, [ this ]);
        }
    },


    /**
     * Загрузка содержимого модала
     * @param {string} url
     */
    loadBodyContent: function (url) {

        let that      = this;
        let container = $('#coreui-modal-' + this._options.id + ' .modal-body');


        if (container[0]) {
            let html = CoreUI.modal.ejs.render(CoreUI.modal.tpl['loading.html'], {
                lang: that.getLang()
            });

            container.html(html);

            $.ajax({
                url: url,
                method: 'GET',
                beforeSend: function(xhr) {
                    that._trigger('before-load.coreui.modal', that, [ that, xhr ]);
                },
                success: function (result) {
                    container.html(that._renderContent(result));

                    that._trigger('success-load.coreui.modal', that, [ that, result ]);
                    that._trigger('change-body.coreui.modal', that, [ that ]);
                },
                error: function(xhr, textStatus, errorThrown) {
                    that._trigger('error-load.coreui.modal', that, [ that, xhr, textStatus, errorThrown ]);
                },
                complete: function(xhr, textStatus) {
                    that._trigger('complete-load.coreui.modal', that, [ that, xhr, textStatus ]);
                },
            });
        }
    },


    /**
     * Показ модала
     * @return {HTMLElement}
     */
    show: function() {

        let modalElement = document.getElementById('coreui-modal-' + this._options.id);

        if (modalElement) {
            return modalElement;
        }


        let html = CoreUI.modal.ejs.render(CoreUI.modal.tpl['modal.html'], {
            modal: this._options,
            body: this._options.body ? this._renderContent(this._options.body) : ''
        });


        $('body').append(html);

        modalElement = document.getElementById('coreui-modal-' + this._options.id);
        this._modal  = new bootstrap.Modal(modalElement, {
            backdrop: this._options.backdrop,
        })

        let that = this;

        modalElement.addEventListener('show.bs.modal', function (e) {
            that._trigger('show.coreui.modal', that, [ that ]);
        });

        modalElement.addEventListener('shown.bs.modal', function (e) {
            that._trigger('shown.coreui.modal', that, [ that ]);
        });

        modalElement.addEventListener('hide.bs.modal', function (e) {
            that._trigger('hide.coreui.modal', that, [ that ]);
        });

        modalElement.addEventListener('hidden.bs.modal', function (e) {
            modalElement.remove();

            that._trigger('hidden.coreui.modal', that, [ that ]);
        });

        this._modal.show();

        if (this._options.loadUrl) {
            this.loadBodyContent(this._options.loadUrl);
        }

        return modalElement;
    },


    /**
     * Скрытие модала
     */
    hide: function () {

        if (this._modal) {
            this._modal.hide();
            this._modal = null;
        }
    },


    /**
     * Удаление модала
     */
    destruct: function () {

        $('#coreui-modal-' + this._options.id).remove();
        delete CoreUI.modal._instances[this.getId()];
    },


    /**
     * Получение настроек языка
     * @private
     */
    getLang: function () {

        return CoreUI.modal.lang.hasOwnProperty(this._options.lang)
               ? CoreUI.modal.lang[this._options.lang]
               : CoreUI.modal.lang['en'];
    },


    /**
     * @param eventName
     * @param callback
     * @param context
     * @param singleExec
     */
    on: function(eventName, callback, context, singleExec) {

        if (typeof this._events[eventName] !== 'object') {
            this._events[eventName] = [];
        }

        this._events[eventName].push({
            context : context || this,
            callback: callback,
            singleExec: !! singleExec,
        });
    },


    /**
     * Выполнение события
     * @param name
     * @param context
     * @param params
     * @private
     */
    _trigger: function(name, context, params) {

        params = params || [];

        if (this._events.hasOwnProperty(name) && this._events[name].length > 0) {
            for (var i = 0; i < this._events[name].length; i++) {
                let callback = this._events[name][i].callback;

                context = this._events[name][i].context || context;

                callback.apply(context, params);

                if (this._events[name][i].singleExec) {
                    this._events[name].splice(i, 1);
                    i--;
                }
            }
        }
    },


    /**
     *
     * @param data
     * @returns {string}
     * @private
     */
    _renderContent: function(data) {

        let result          = [];
        let alloyComponents = [
            'coreui.table',
            'coreui.form',
            'coreui.panel',
            'coreui.layout',
            'coreui.tabs',
            'coreui.info',
            'coreui.chart',
        ];

        if (typeof data === 'string') {
            result.push(data);

        } else if (data instanceof Object) {
            if ( ! Array.isArray(data)) {
                data = [ data ];
            }

            for (let i = 0; i < data.length; i++) {
                if (typeof data[i] === 'string') {
                    result.push(data[i]);

                } else {
                    if ( ! Array.isArray(data[i]) &&
                        data[i].hasOwnProperty('component') &&
                        alloyComponents.indexOf(data[i].component) >= 0
                    ) {
                        let name = data[i].component.split('.')[1];

                        if (CoreUI.hasOwnProperty(name)) {
                            let instance = CoreUI[name].create(data[i]);
                            result.push(instance.render());

                            this.on('shown.coreui.modal', instance.initEvents, instance, true);
                        } else {
                            result.push(JSON.stringify(data[i]));
                        }

                    } else {
                        result.push(JSON.stringify(data[i]));
                    }
                }
            }
        }

        return result.join('');
    }
};

CoreUI.modal.utils = {


    /**
     * @returns {string}
     * @private
     */
    hashCode: function() {
        return this.crc32((new Date().getTime() + Math.random()).toString()).toString(16);
    },


    /**
     * @param str
     * @returns {number}
     * @private
     */
    crc32: function (str) {

        for (var a, o = [], c = 0; c < 256; c++) {
            a = c;
            for (var f = 0; f < 8; f++) {
                a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1
            }
            o[c] = a
        }

        for (var n = -1, t = 0; t < str.length; t++) {
            n = n >>> 8 ^ o[255 & (n ^ str.charCodeAt(t))]
        }

        return (-1 ^ n) >>> 0;
    }
};
//HEAD 
window["CoreUI"]["modal"]["tpl"] = {};

window["CoreUI"]["modal"]["tpl"]["loading.html"] = "<div class=\"py-4 d-flex justify-content-center align-items-center gap-2\">\n" +
    "  <div class=\"spinner-border mr-2\"></div> <%= lang.loading %>\n" +
    "</div>\n" +
    ""; 

window["CoreUI"]["modal"]["tpl"]["modal.html"] = "<div class=\"modal fade\" id=\"coreui-modal-<%= modal.id %>\">\n" +
    "    <div class=\"modal-dialog <% if (modal.size) { %>modal-<%= modal.size %><% } %>\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                <h5 class=\"modal-title\"><%- modal.title %></h5>\n" +
    "                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\"></button>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "                <%- body %>\n" +
    "            </div>\n" +
    "            <% if (modal.footer) { %>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <%- modal.footer %>\n" +
    "            </div>\n" +
    "            <% } %>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"; 
// END ;
(function() {"use strict";(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ejs=f()}})(function(){var define,module,exports;return function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r}()({1:[function(require,module,exports){"use strict";var fs=require("fs");var path=require("path");var utils=require("./utils");var scopeOptionWarned=false;var _VERSION_STRING=require("../package.json").version;var _DEFAULT_OPEN_DELIMITER="<";var _DEFAULT_CLOSE_DELIMITER=">";var _DEFAULT_DELIMITER="%";var _DEFAULT_LOCALS_NAME="locals";var _NAME="ejs";var _REGEX_STRING="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)";var _OPTS_PASSABLE_WITH_DATA=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"];var _OPTS_PASSABLE_WITH_DATA_EXPRESS=_OPTS_PASSABLE_WITH_DATA.concat("cache");var _BOM=/^\uFEFF/;var _JS_IDENTIFIER=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/;exports.cache=utils.cache;exports.fileLoader=fs.readFileSync;exports.localsName=_DEFAULT_LOCALS_NAME;exports.promiseImpl=new Function("return this;")().Promise;exports.resolveInclude=function(name,filename,isDir){var dirname=path.dirname;var extname=path.extname;var resolve=path.resolve;var includePath=resolve(isDir?filename:dirname(filename),name);var ext=extname(name);if(!ext){includePath+=".ejs"}return includePath};function resolvePaths(name,paths){var filePath;if(paths.some(function(v){filePath=exports.resolveInclude(name,v,true);return fs.existsSync(filePath)})){return filePath}}function getIncludePath(path,options){var includePath;var filePath;var views=options.views;var match=/^[A-Za-z]+:\\|^\//.exec(path);if(match&&match.length){path=path.replace(/^\/*/,"");if(Array.isArray(options.root)){includePath=resolvePaths(path,options.root)}else{includePath=exports.resolveInclude(path,options.root||"/",true)}}else{if(options.filename){filePath=exports.resolveInclude(path,options.filename);if(fs.existsSync(filePath)){includePath=filePath}}if(!includePath&&Array.isArray(views)){includePath=resolvePaths(path,views)}if(!includePath&&typeof options.includer!=="function"){throw new Error('Could not find the include file "'+options.escapeFunction(path)+'"')}}return includePath}function handleCache(options,template){var func;var filename=options.filename;var hasTemplate=arguments.length>1;if(options.cache){if(!filename){throw new Error("cache option requires a filename")}func=exports.cache.get(filename);if(func){return func}if(!hasTemplate){template=fileLoader(filename).toString().replace(_BOM,"")}}else if(!hasTemplate){if(!filename){throw new Error("Internal EJS error: no file name or template "+"provided")}template=fileLoader(filename).toString().replace(_BOM,"")}func=exports.compile(template,options);if(options.cache){exports.cache.set(filename,func)}return func}function tryHandleCache(options,data,cb){var result;if(!cb){if(typeof exports.promiseImpl=="function"){return new exports.promiseImpl(function(resolve,reject){try{result=handleCache(options)(data);resolve(result)}catch(err){reject(err)}})}else{throw new Error("Please provide a callback function")}}else{try{result=handleCache(options)(data)}catch(err){return cb(err)}cb(null,result)}}function fileLoader(filePath){return exports.fileLoader(filePath)}function includeFile(path,options){var opts=utils.shallowCopy(utils.createNullProtoObjWherePossible(),options);opts.filename=getIncludePath(path,opts);if(typeof options.includer==="function"){var includerResult=options.includer(path,opts.filename);if(includerResult){if(includerResult.filename){opts.filename=includerResult.filename}if(includerResult.template){return handleCache(opts,includerResult.template)}}}return handleCache(opts)}function rethrow(err,str,flnm,lineno,esc){var lines=str.split("\n");var start=Math.max(lineno-3,0);var end=Math.min(lines.length,lineno+3);var filename=esc(flnm);var context=lines.slice(start,end).map(function(line,i){var curr=i+start+1;return(curr==lineno?" >> ":"    ")+curr+"| "+line}).join("\n");err.path=filename;err.message=(filename||"ejs")+":"+lineno+"\n"+context+"\n\n"+err.message;throw err}function stripSemi(str){return str.replace(/;(\s*$)/,"$1")}exports.compile=function compile(template,opts){var templ;if(opts&&opts.scope){if(!scopeOptionWarned){console.warn("`scope` option is deprecated and will be removed in EJS 3");scopeOptionWarned=true}if(!opts.context){opts.context=opts.scope}delete opts.scope}templ=new Template(template,opts);return templ.compile()};exports.render=function(template,d,o){var data=d||utils.createNullProtoObjWherePossible();var opts=o||utils.createNullProtoObjWherePossible();if(arguments.length==2){utils.shallowCopyFromList(opts,data,_OPTS_PASSABLE_WITH_DATA)}return handleCache(opts,template)(data)};exports.renderFile=function(){var args=Array.prototype.slice.call(arguments);var filename=args.shift();var cb;var opts={filename:filename};var data;var viewOpts;if(typeof arguments[arguments.length-1]=="function"){cb=args.pop()}if(args.length){data=args.shift();if(args.length){utils.shallowCopy(opts,args.pop())}else{if(data.settings){if(data.settings.views){opts.views=data.settings.views}if(data.settings["view cache"]){opts.cache=true}viewOpts=data.settings["view options"];if(viewOpts){utils.shallowCopy(opts,viewOpts)}}utils.shallowCopyFromList(opts,data,_OPTS_PASSABLE_WITH_DATA_EXPRESS)}opts.filename=filename}else{data=utils.createNullProtoObjWherePossible()}return tryHandleCache(opts,data,cb)};exports.Template=Template;exports.clearCache=function(){exports.cache.reset()};function Template(text,opts){opts=opts||utils.createNullProtoObjWherePossible();var options=utils.createNullProtoObjWherePossible();this.templateText=text;this.mode=null;this.truncate=false;this.currentLine=1;this.source="";options.client=opts.client||false;options.escapeFunction=opts.escape||opts.escapeFunction||utils.escapeXML;options.compileDebug=opts.compileDebug!==false;options.debug=!!opts.debug;options.filename=opts.filename;options.openDelimiter=opts.openDelimiter||exports.openDelimiter||_DEFAULT_OPEN_DELIMITER;options.closeDelimiter=opts.closeDelimiter||exports.closeDelimiter||_DEFAULT_CLOSE_DELIMITER;options.delimiter=opts.delimiter||exports.delimiter||_DEFAULT_DELIMITER;options.strict=opts.strict||false;options.context=opts.context;options.cache=opts.cache||false;options.rmWhitespace=opts.rmWhitespace;options.root=opts.root;options.includer=opts.includer;options.outputFunctionName=opts.outputFunctionName;options.localsName=opts.localsName||exports.localsName||_DEFAULT_LOCALS_NAME;options.views=opts.views;options.async=opts.async;options.destructuredLocals=opts.destructuredLocals;options.legacyInclude=typeof opts.legacyInclude!="undefined"?!!opts.legacyInclude:true;if(options.strict){options._with=false}else{options._with=typeof opts._with!="undefined"?opts._with:true}this.opts=options;this.regex=this.createRegex()}Template.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"};Template.prototype={createRegex:function(){var str=_REGEX_STRING;var delim=utils.escapeRegExpChars(this.opts.delimiter);var open=utils.escapeRegExpChars(this.opts.openDelimiter);var close=utils.escapeRegExpChars(this.opts.closeDelimiter);str=str.replace(/%/g,delim).replace(/</g,open).replace(/>/g,close);return new RegExp(str)},compile:function(){var src;var fn;var opts=this.opts;var prepended="";var appended="";var escapeFn=opts.escapeFunction;var ctor;var sanitizedFilename=opts.filename?JSON.stringify(opts.filename):"undefined";if(!this.source){this.generateSource();prepended+='  var __output = "";\n'+"  function __append(s) { if (s !== undefined && s !== null) __output += s }\n";if(opts.outputFunctionName){if(!_JS_IDENTIFIER.test(opts.outputFunctionName)){throw new Error("outputFunctionName is not a valid JS identifier.")}prepended+="  var "+opts.outputFunctionName+" = __append;"+"\n"}if(opts.localsName&&!_JS_IDENTIFIER.test(opts.localsName)){throw new Error("localsName is not a valid JS identifier.")}if(opts.destructuredLocals&&opts.destructuredLocals.length){var destructuring="  var __locals = ("+opts.localsName+" || {}),\n";for(var i=0;i<opts.destructuredLocals.length;i++){var name=opts.destructuredLocals[i];if(!_JS_IDENTIFIER.test(name)){throw new Error("destructuredLocals["+i+"] is not a valid JS identifier.")}if(i>0){destructuring+=",\n  "}destructuring+=name+" = __locals."+name}prepended+=destructuring+";\n"}if(opts._with!==false){prepended+="  with ("+opts.localsName+" || {}) {"+"\n";appended+="  }"+"\n"}appended+="  return __output;"+"\n";this.source=prepended+this.source+appended}if(opts.compileDebug){src="var __line = 1"+"\n"+"  , __lines = "+JSON.stringify(this.templateText)+"\n"+"  , __filename = "+sanitizedFilename+";"+"\n"+"try {"+"\n"+this.source+"} catch (e) {"+"\n"+"  rethrow(e, __lines, __filename, __line, escapeFn);"+"\n"+"}"+"\n"}else{src=this.source}if(opts.client){src="escapeFn = escapeFn || "+escapeFn.toString()+";"+"\n"+src;if(opts.compileDebug){src="rethrow = rethrow || "+rethrow.toString()+";"+"\n"+src}}if(opts.strict){src='"use strict";\n'+src}if(opts.debug){console.log(src)}if(opts.compileDebug&&opts.filename){src=src+"\n"+"//# sourceURL="+sanitizedFilename+"\n"}try{if(opts.async){try{ctor=new Function("return (async function(){}).constructor;")()}catch(e){if(e instanceof SyntaxError){throw new Error("This environment does not support async/await")}else{throw e}}}else{ctor=Function}fn=new ctor(opts.localsName+", escapeFn, include, rethrow",src)}catch(e){if(e instanceof SyntaxError){if(opts.filename){e.message+=" in "+opts.filename}e.message+=" while compiling ejs\n\n";e.message+="If the above error is not helpful, you may want to try EJS-Lint:\n";e.message+="https://github.com/RyanZim/EJS-Lint";if(!opts.async){e.message+="\n";e.message+="Or, if you meant to create an async function, pass `async: true` as an option."}}throw e}var returnedFn=opts.client?fn:function anonymous(data){var include=function(path,includeData){var d=utils.shallowCopy(utils.createNullProtoObjWherePossible(),data);if(includeData){d=utils.shallowCopy(d,includeData)}return includeFile(path,opts)(d)};return fn.apply(opts.context,[data||utils.createNullProtoObjWherePossible(),escapeFn,include,rethrow])};if(opts.filename&&typeof Object.defineProperty==="function"){var filename=opts.filename;var basename=path.basename(filename,path.extname(filename));try{Object.defineProperty(returnedFn,"name",{value:basename,writable:false,enumerable:false,configurable:true})}catch(e){}}return returnedFn},generateSource:function(){var opts=this.opts;if(opts.rmWhitespace){this.templateText=this.templateText.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")}this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var self=this;var matches=this.parseTemplateText();var d=this.opts.delimiter;var o=this.opts.openDelimiter;var c=this.opts.closeDelimiter;if(matches&&matches.length){matches.forEach(function(line,index){var closing;if(line.indexOf(o+d)===0&&line.indexOf(o+d+d)!==0){closing=matches[index+2];if(!(closing==d+c||closing=="-"+d+c||closing=="_"+d+c)){throw new Error('Could not find matching close tag for "'+line+'".')}}self.scanLine(line)})}},parseTemplateText:function(){var str=this.templateText;var pat=this.regex;var result=pat.exec(str);var arr=[];var firstPos;while(result){firstPos=result.index;if(firstPos!==0){arr.push(str.substring(0,firstPos));str=str.slice(firstPos)}arr.push(result[0]);str=str.slice(result[0].length);result=pat.exec(str)}if(str){arr.push(str)}return arr},_addOutput:function(line){if(this.truncate){line=line.replace(/^(?:\r\n|\r|\n)/,"");this.truncate=false}if(!line){return line}line=line.replace(/\\/g,"\\\\");line=line.replace(/\n/g,"\\n");line=line.replace(/\r/g,"\\r");line=line.replace(/"/g,'\\"');this.source+='    ; __append("'+line+'")'+"\n"},scanLine:function(line){var self=this;var d=this.opts.delimiter;var o=this.opts.openDelimiter;var c=this.opts.closeDelimiter;var newLineCount=0;newLineCount=line.split("\n").length-1;switch(line){case o+d:case o+d+"_":this.mode=Template.modes.EVAL;break;case o+d+"=":this.mode=Template.modes.ESCAPED;break;case o+d+"-":this.mode=Template.modes.RAW;break;case o+d+"#":this.mode=Template.modes.COMMENT;break;case o+d+d:this.mode=Template.modes.LITERAL;this.source+='    ; __append("'+line.replace(o+d+d,o+d)+'")'+"\n";break;case d+d+c:this.mode=Template.modes.LITERAL;this.source+='    ; __append("'+line.replace(d+d+c,d+c)+'")'+"\n";break;case d+c:case"-"+d+c:case"_"+d+c:if(this.mode==Template.modes.LITERAL){this._addOutput(line)}this.mode=null;this.truncate=line.indexOf("-")===0||line.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case Template.modes.EVAL:case Template.modes.ESCAPED:case Template.modes.RAW:if(line.lastIndexOf("//")>line.lastIndexOf("\n")){line+="\n"}}switch(this.mode){case Template.modes.EVAL:this.source+="    ; "+line+"\n";break;case Template.modes.ESCAPED:this.source+="    ; __append(escapeFn("+stripSemi(line)+"))"+"\n";break;case Template.modes.RAW:this.source+="    ; __append("+stripSemi(line)+")"+"\n";break;case Template.modes.COMMENT:break;case Template.modes.LITERAL:this._addOutput(line);break}}else{this._addOutput(line)}}if(self.opts.compileDebug&&newLineCount){this.currentLine+=newLineCount;this.source+="    ; __line = "+this.currentLine+"\n"}}};exports.escapeXML=utils.escapeXML;exports.__express=exports.renderFile;exports.VERSION=_VERSION_STRING;exports.name=_NAME;if(typeof window!="undefined"){window.ejs=exports}},{"../package.json":6,"./utils":2,fs:3,path:4}],2:[function(require,module,exports){"use strict";var regExpChars=/[|\\{}()[\]^$+*?.]/g;var hasOwnProperty=Object.prototype.hasOwnProperty;var hasOwn=function(obj,key){return hasOwnProperty.apply(obj,[key])};exports.escapeRegExpChars=function(string){if(!string){return""}return String(string).replace(regExpChars,"\\$&")};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"};var _MATCH_HTML=/[&<>'"]/g;function encode_char(c){return _ENCODE_HTML_RULES[c]||c}var escapeFuncStr="var _ENCODE_HTML_RULES = {\n"+'      "&": "&amp;"\n'+'    , "<": "&lt;"\n'+'    , ">": "&gt;"\n'+'    , \'"\': "&#34;"\n'+'    , "\'": "&#39;"\n'+"    }\n"+"  , _MATCH_HTML = /[&<>'\"]/g;\n"+"function encode_char(c) {\n"+"  return _ENCODE_HTML_RULES[c] || c;\n"+"};\n";exports.escapeXML=function(markup){return markup==undefined?"":String(markup).replace(_MATCH_HTML,encode_char)};function escapeXMLToString(){return Function.prototype.toString.call(this)+";\n"+escapeFuncStr}try{if(typeof Object.defineProperty==="function"){Object.defineProperty(exports.escapeXML,"toString",{value:escapeXMLToString})}else{exports.escapeXML.toString=escapeXMLToString}}catch(err){console.warn("Unable to set escapeXML.toString (is the Function prototype frozen?)")}exports.shallowCopy=function(to,from){from=from||{};if(to!==null&&to!==undefined){for(var p in from){if(!hasOwn(from,p)){continue}if(p==="__proto__"||p==="constructor"){continue}to[p]=from[p]}}return to};exports.shallowCopyFromList=function(to,from,list){list=list||[];from=from||{};if(to!==null&&to!==undefined){for(var i=0;i<list.length;i++){var p=list[i];if(typeof from[p]!="undefined"){if(!hasOwn(from,p)){continue}if(p==="__proto__"||p==="constructor"){continue}to[p]=from[p]}}}return to};exports.cache={_data:{},set:function(key,val){this._data[key]=val},get:function(key){return this._data[key]},remove:function(key){delete this._data[key]},reset:function(){this._data={}}};exports.hyphenToCamel=function(str){return str.replace(/-[a-z]/g,function(match){return match[1].toUpperCase()})};exports.createNullProtoObjWherePossible=function(){if(typeof Object.create=="function"){return function(){return Object.create(null)}}if(!({__proto__:null}instanceof Object)){return function(){return{__proto__:null}}}return function(){return{}}}()},{}],3:[function(require,module,exports){},{}],4:[function(require,module,exports){(function(process){function normalizeArray(parts,allowAboveRoot){var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==="."){parts.splice(i,1)}else if(last===".."){parts.splice(i,1);up++}else if(up){parts.splice(i,1);up--}}if(allowAboveRoot){for(;up--;up){parts.unshift("..")}}return parts}exports.resolve=function(){var resolvedPath="",resolvedAbsolute=false;for(var i=arguments.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?arguments[i]:process.cwd();if(typeof path!=="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!path){continue}resolvedPath=path+"/"+resolvedPath;resolvedAbsolute=path.charAt(0)==="/"}resolvedPath=normalizeArray(filter(resolvedPath.split("/"),function(p){return!!p}),!resolvedAbsolute).join("/");return(resolvedAbsolute?"/":"")+resolvedPath||"."};exports.normalize=function(path){var isAbsolute=exports.isAbsolute(path),trailingSlash=substr(path,-1)==="/";path=normalizeArray(filter(path.split("/"),function(p){return!!p}),!isAbsolute).join("/");if(!path&&!isAbsolute){path="."}if(path&&trailingSlash){path+="/"}return(isAbsolute?"/":"")+path};exports.isAbsolute=function(path){return path.charAt(0)==="/"};exports.join=function(){var paths=Array.prototype.slice.call(arguments,0);return exports.normalize(filter(paths,function(p,index){if(typeof p!=="string"){throw new TypeError("Arguments to path.join must be strings")}return p}).join("/"))};exports.relative=function(from,to){from=exports.resolve(from).substr(1);to=exports.resolve(to).substr(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=="")break}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=="")break}if(start>end)return[];return arr.slice(start,end-start+1)}var fromParts=trim(from.split("/"));var toParts=trim(to.split("/"));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push("..")}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join("/")};exports.sep="/";exports.delimiter=":";exports.dirname=function(path){if(typeof path!=="string")path=path+"";if(path.length===0)return".";var code=path.charCodeAt(0);var hasRoot=code===47;var end=-1;var matchedSlash=true;for(var i=path.length-1;i>=1;--i){code=path.charCodeAt(i);if(code===47){if(!matchedSlash){end=i;break}}else{matchedSlash=false}}if(end===-1)return hasRoot?"/":".";if(hasRoot&&end===1){return"/"}return path.slice(0,end)};function basename(path){if(typeof path!=="string")path=path+"";var start=0;var end=-1;var matchedSlash=true;var i;for(i=path.length-1;i>=0;--i){if(path.charCodeAt(i)===47){if(!matchedSlash){start=i+1;break}}else if(end===-1){matchedSlash=false;end=i+1}}if(end===-1)return"";return path.slice(start,end)}exports.basename=function(path,ext){var f=basename(path);if(ext&&f.substr(-1*ext.length)===ext){f=f.substr(0,f.length-ext.length)}return f};exports.extname=function(path){if(typeof path!=="string")path=path+"";var startDot=-1;var startPart=0;var end=-1;var matchedSlash=true;var preDotState=0;for(var i=path.length-1;i>=0;--i){var code=path.charCodeAt(i);if(code===47){if(!matchedSlash){startPart=i+1;break}continue}if(end===-1){matchedSlash=false;end=i+1}if(code===46){if(startDot===-1)startDot=i;else if(preDotState!==1)preDotState=1}else if(startDot!==-1){preDotState=-1}}if(startDot===-1||end===-1||preDotState===0||preDotState===1&&startDot===end-1&&startDot===startPart+1){return""}return path.slice(startDot,end)};function filter(xs,f){if(xs.filter)return xs.filter(f);var res=[];for(var i=0;i<xs.length;i++){if(f(xs[i],i,xs))res.push(xs[i])}return res}var substr="ab".substr(-1)==="b"?function(str,start,len){return str.substr(start,len)}:function(str,start,len){if(start<0)start=str.length+start;return str.substr(start,len)}}).call(this,require("_process"))},{_process:5}],5:[function(require,module,exports){var process=module.exports={};var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){cachedSetTimeout=setTimeout}else{cachedSetTimeout=defaultSetTimout}}catch(e){cachedSetTimeout=defaultSetTimout}try{if(typeof clearTimeout==="function"){cachedClearTimeout=clearTimeout}else{cachedClearTimeout=defaultClearTimeout}}catch(e){cachedClearTimeout=defaultClearTimeout}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){return setTimeout(fun,0)}if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0)}try{return cachedSetTimeout(fun,0)}catch(e){try{return cachedSetTimeout.call(null,fun,0)}catch(e){return cachedSetTimeout.call(this,fun,0)}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){return clearTimeout(marker)}if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker)}try{return cachedClearTimeout(marker)}catch(e){try{return cachedClearTimeout.call(null,marker)}catch(e){return cachedClearTimeout.call(this,marker)}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue)}else{queueIndex=-1}if(queue.length){drainQueue()}}function drainQueue(){if(draining){return}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run()}}queueIndex=-1;len=queue.length}currentQueue=null;draining=false;runClearTimeout(timeout)}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i]}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue)}};function Item(fun,array){this.fun=fun;this.array=array}Item.prototype.run=function(){this.fun.apply(null,this.array)};process.title="browser";process.browser=true;process.env={};process.argv=[];process.version="";process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[]};process.binding=function(name){throw new Error("process.binding is not supported")};process.cwd=function(){return"/"};process.chdir=function(dir){throw new Error("process.chdir is not supported")};process.umask=function(){return 0}},{}],6:[function(require,module,exports){module.exports={name:"ejs",description:"Embedded JavaScript templates",keywords:["template","engine","ejs"],version:"3.1.8",author:"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",license:"Apache-2.0",bin:{ejs:"./bin/cli.js"},main:"./lib/ejs.js",jsdelivr:"ejs.min.js",unpkg:"ejs.min.js",repository:{type:"git",url:"git://github.com/mde/ejs.git"},bugs:"https://github.com/mde/ejs/issues",homepage:"https://github.com/mde/ejs",dependencies:{jake:"^10.8.5"},devDependencies:{browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^4.0.2","lru-cache":"^4.0.1",mocha:"^10.2.0","uglify-js":"^3.3.16"},engines:{node:">=0.10.0"},scripts:{test:"mocha -u tdd"}}},{}]},{},[1])(1)});
;CoreUI.modal.ejs = ejs;})();;

CoreUI.modal.lang.en = {
    "loading": "Loading...",
};

CoreUI.modal.lang.ru = {
    "loading": "Загрузка...",
};
var CoreUI=void 0!==CoreUI?CoreUI:{};CoreUI.info={_instances:{},create:function(e){var t=$.extend({},this.instance),e=(t._init(e instanceof Object?e:{}),t.getId());return this._instances[e]=t},get:function(e){return this._instances.hasOwnProperty(e)?$("#coreui-info-"+this._instances[e])[0]?(delete this._instances[e],null):this._instances[e]:null},info:function(e,t,n){return(n="object"==typeof n?n:{}).type="info",n.title=t,n.message=e,this.create(n).render()},warning:function(e,t,n){return(n="object"==typeof n?n:{}).type="warning",n.title=t,n.message=e,this.create(n).render()},danger:function(e,t,n){return(n="object"==typeof n?n:{}).type="danger",n.title=t,n.message=e,this.create(n).render()},success:function(e,t,n){return(n="object"==typeof n?n:{}).type="success",n.title=t,n.message=e,this.create(n).render()},_hashCode:function(){return this._crc32(((new Date).getTime()+Math.random()).toString()).toString(16)},_crc32:function(e){for(var t=[],n=0;n<256;n++){for(var r=n,i=0;i<8;i++)r=1&r?3988292384^r>>>1:r>>>1;t[n]=r}for(var s=-1,c=0;c<e.length;c++)s=s>>>8^t[255&(s^e.charCodeAt(c))];return(-1^s)>>>0}};;
var CoreUI=void 0!==CoreUI?CoreUI:{};CoreUI.info.instance={_options:{id:"",type:"",title:"",message:"",onClose:null,onClosed:null,isClose:!1},_init:function(o){this._options=$.extend({},this._options,o),this._options.id||(this._options.id=CoreUI.info._hashCode()),this._options.type=o.hasOwnProperty("type")&&"string"==typeof o.type?o.type:"light",this._options.onClosed=o.hasOwnProperty("onClosed")&&"function"==typeof o.onClosed?o.onClosed:null,this._options.onClose=o.hasOwnProperty("onClose")&&"function"==typeof o.onClose?o.onClose:null,this._options.isClose=o.hasOwnProperty("isClose")&&typeof o.isClose},initEvents:function(){var o=document.getElementById("info-"+this._options.id);if(o){let t=this;o.addEventListener("close.bs.alert",o=>{"function"==typeof t._options.onClose&&t._options.onClose(o)}),o.addEventListener("closed.bs.alert",o=>{"function"==typeof t._options.onClosed&&t._options.onClosed(o)})}},render:function(o){var t=this._options.title?"<h4>"+this._options.title+"</h4>":"",s=this._options.message?"<div>"+this._options.message+"</div>":"",i=this._options.isClose?'<button type="button" class="btn-close" data-bs-dismiss="alert"></button>':"",t='<div class="alert alert-'+this._options.type+' alert-dismissible fade show" id="info-'+this._options.id+'">'+t+s+i+"</div>";if(!o)return t;let e={};if("string"==typeof o){if(!(e=document.getElementById(o)))return""}else o instanceof HTMLElement&&(e=o);$(e).append(t),this.initEvents()},close:function(){$("#info-"+this._options.id)[0]&&bootstrap.Alert.getOrCreateInstance("#info-"+this._options.id).close()},getId:function(){return this._options.id}};
//# sourceMappingURL=coreui-info.min.js.map
;
var CoreUI=void 0!==CoreUI?CoreUI:{};CoreUI.notice={_instances:{},_settings:{limit:3,top:50,bottom:50,position:"top-right",container:"body",infoColor:"",infoBgColor:"",warningColor:"#000000",warningBgColor:"#ffc107",dangerColor:"",dangerBgColor:"#dc3545",successColor:"",successBgColor:"#198754"},settings:function(t){CoreUI.notice._settings=$.extend({},this._settings,t)},info:function(t,o){return(o="object"==typeof o?o:{}).message=t,o.messageColor=o.hasOwnProperty("messageColor")?o.messageColor:this._settings.infoColor,o.bgColor=o.hasOwnProperty("bgColor")?o.bgColor:this._settings.infoBgColor,this._create(o)},warning:function(t,o){return(o="object"==typeof o?o:{}).message=t,o.messageColor=o.hasOwnProperty("messageColor")?o.messageColor:this._settings.warningColor,o.bgColor=o.hasOwnProperty("bgColor")?o.bgColor:this._settings.warningBgColor,this._create(o)},danger:function(t,o){return(o="object"==typeof o?o:{}).message=t,o.messageColor=o.hasOwnProperty("messageColor")?o.messageColor:this._settings.dangerColor,o.bgColor=o.hasOwnProperty("bgColor")?o.bgColor:this._settings.dangerBgColor,this._create(o)},success:function(t,o){return(o="object"==typeof o?o:{}).message=t,o.messageColor=o.hasOwnProperty("messageColor")?o.messageColor:this._settings.successColor,o.bgColor=o.hasOwnProperty("bgColor")?o.bgColor:this._settings.successBgColor,this._create(o)},get:function(t){return this._instances.hasOwnProperty(t)?$(".coreui-notice-"+this._instances[t])[0]?(delete this._instances[t],null):this._instances[t]:null},_create:function(t){var o=(t.hasOwnProperty("position")?t:this._settings).position;let e=$(".coreui-notice-container.position-"+o);e[0]||(s=[],0<=["bottom-left","bottom-center","bottom-right"].indexOf(o)?this._settings.bottom&&s.push("bottom: "+this._settings.bottom+"px"):this._settings.top&&s.push("top: "+this._settings.top+"px"),$(this._settings.container).append('<div class="coreui-notice-container position-'+o+'" style="'+s.join(";")+'"></div>'),e=$(".coreui-notice-container.position-"+o)),this._instances.hasOwnProperty(o)&&(s=Object.keys(this._instances[o])).length>=this._settings.limit&&(s=s[0],n=this._instances[o][s],e.find(".coreui-notice-"+s)[0]||delete this._instances[o][s],n.hide());var s=$.extend({},this.instance),n=(s.init(t instanceof Object?t:{}),this._instances.hasOwnProperty(o)||(this._instances[o]={}),s.getId());return this._instances[o][n]=s,0<=["bottom-left","bottom-center","bottom-right"].indexOf(o)?e.prepend(s.render()):e.append(s.render()),s.initEvents(),s},_hashCode:function(){return this._crc32(((new Date).getTime()+Math.random()).toString()).toString(16)},_crc32:function(t){for(var o=[],e=0;e<256;e++){for(var s=e,n=0;n<8;n++)s=1&s?3988292384^s>>>1:s>>>1;o[e]=s}for(var i=-1,r=0;r<t.length;r++)i=i>>>8^o[255&(i^t.charCodeAt(r))];return(-1^i)>>>0}};;
CoreUI.notice.instance={_options:{id:"",timeout:6e3,message:"",messageColor:"",bgColor:"#333",icon:"",actionBtnText:"",cancelBtn:!0,onClose:null,onClosed:null,onAction:null},init:function(o){this._options=$.extend({},this._options,o),this._options.id||(this._options.id=CoreUI.notice._hashCode())},render:function(){var o=this._options.bgColor?'style="background-color: '+this._options.bgColor+'"':"",i=this._options.messageColor?'style="color: '+this._options.messageColor+'"':"",t=this._options.icon?'<div class="coreui-notice-icon"><i class="'+this._options.icon+'" '+i+"></i></div>":"",n=this._options.actionBtnText?'<button type="button" class="coreui-notice-action" '+i+">"+this._options.actionBtnText+"</button>":"",e=this._options.cancelBtn?'<div class="coreui-notice-cancel"><div class="coreui-notice-cancel-icon "></div></div>':"";return'<div class="coreui-notice animated fadeIn" id="coreui-notice-'+this._options.id+'"><div class="coreui-notice-wrapper" '+o+">"+t+'<span class="coreui-notice-message" '+i+">"+this._options.message+"</span>"+n+e+"</div></div>"},initEvents:function(){let o=this;var i=$("#coreui-notice-"+this._options.id);$(".coreui-notice-cancel",i).click(function(){o.hide()}),"function"==typeof this._options.onAction&&i[0]&&$(".coreui-notice-action",i).click(function(){o._options.onAction(o)}),0<this._options.timeout&&window.setTimeout(function(){o.hide()},this._options.timeout)},getId:function(){return this._options.id},setMessage:function(o){var i=$("#coreui-notice-"+this._options.id);i[0]&&$(".coreui-notice-message",i).text(o)},hide:function(){let t=$("#coreui-notice-"+this._options.id);if(t[0]){t.removeClass("fadeIn"),t.addClass("fadeOut"),"function"==typeof this._options.onClose&&this._options.onClose();let i=this;window.setTimeout(function(){var o=t.parent();t.remove(),"function"==typeof i._options.onClosed&&i._options.onClosed(),0===o.children().length&&o.remove()},200)}}};
//# sourceMappingURL=coreui-notice.min.js.map
;

var CoreUI = typeof CoreUI !== 'undefined' ? CoreUI : {};

CoreUI.layout = {

    _instances: {},

    /**
     * @param {object} options
     * @returns {CoreUI.layout.instance}
     */
    create: function (options) {

        let instance = $.extend(true, {}, this.instance);
        instance._init(options instanceof Object ? options : {});

        let layoutId = instance.getId();
        this._instances[layoutId] = instance;

        return instance;
    },


    /**
     * @param {string} id
     * @returns {CoreUI.layout.instance|null}
     */
    get: function (id) {

        if ( ! this._instances.hasOwnProperty(id)) {
            return null;
        }

        if ($('#coreui-layout-' + this._instances[id])[0]) {
            delete this._instances[id];
            return null;
        }

        return this._instances[id];
    },


    /**
     * @returns {string}
     * @private
     */
    _hashCode: function() {
        return this._crc32((new Date().getTime() + Math.random()).toString()).toString(16);
    },


    /**
     * @param str
     * @returns {number}
     * @private
     */
    _crc32: function (str) {

        for (var a, o = [], c = 0; c < 256; c++) {
            a = c;
            for (var f = 0; f < 8; f++) {
                a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1
            }
            o[c] = a
        }

        for (var n = -1, t = 0; t < str.length; t++) {
            n = n >>> 8 ^ o[255 & (n ^ str.charCodeAt(t))]
        }

        return (-1 ^ n) >>> 0;
    }
};

CoreUI.layout.instance = {

    _options: {
        id: '',
        justify: "start", // start, end, center, between, around, evenly
        align: "start", // start, end, center, baseline, stretch
        direction: "row", // column, column-reverse, row, row-reverse
        wrap: "wrap", // wrap, nowrap, reverse
        overflow: null, // auto, hidden, visible, scroll
        overflowX: null, // auto, hidden, visible, scroll
        overflowY: null, // auto, hidden, visible, scroll
        width: null,
        minWidth: null,
        maxWidth: null,
        height: null,
        minHeight: null,
        naxHeight: null,
        gap: null,
        items: [],
        sizes: {},
    },
    _item: {
        id: '',
        align: null, // start, end, center, baseline, stretch
        order: null, // 0 - 5
        fill: false,
        overflow: null, // auto, hidden, visible, scroll
        overflowX: null, // auto, hidden, visible, scroll
        overflowY: null, // auto, hidden, visible, scroll
        width: null,
        minWidth: null,
        maxWidth: null,
        height: null,
        minHeight: null,
        naxHeight: null,
        sizes: {},
    },
    _events: {},


    /**
     * Инициализация
     * @param options
     */
    _init: function (options) {

        this._options = $.extend(true, {}, this._options, options);

        if ( ! this._options.id) {
            this._options.id = CoreUI.layout._hashCode();
        }


        let that = this;

        $.each(this._options.items, function (key, item) {

            if ( ! item.id) {
                that._options.items[key].id = CoreUI.layout._hashCode();
            }
        });
    },


    /**
     *
     */
    initEvents: function () {

        this._trigger('shown.coreui.layout');
    },


    /**
     *
     * @returns {*}
     */
    getId: function () {
        return this._options.id;
    },


    /**
     * @param itemId
     * @param content
     */
    setItemContent: function (itemId, content) {

        let container = $('#coreui-layout-' + this._options.id + ' .item-' + itemId);

        if (container[0]) {
            container.html(this._renderContent(content));
            this._trigger('show-content.coreui.layout', this, [itemId]);
        }
    },


    /**
     *
     * @param element
     * @returns {*}
     */
    render: function(element) {

        let containerClasses = [];
        let containerStyles  = [];
        let containerItems   = [];

        switch (this._options.direction) {
            case 'row' :            containerClasses.push('flex-row'); break;
            case 'row-reverse' :    containerClasses.push('flex-row-reverse'); break;
            case 'column' :         containerClasses.push('flex-column'); break;
            case 'column-reverse' : containerClasses.push('flex-column-reverse'); break;
        }

        switch (this._options.justify) {
            case 'start' :   containerClasses.push('justify-content-start'); break;
            case 'end' :     containerClasses.push('justify-content-end'); break;
            case 'center' :  containerClasses.push('justify-content-center'); break;
            case 'between' : containerClasses.push('justify-content-between'); break;
            case 'around' :  containerClasses.push('justify-content-around'); break;
            case 'evenly' :  containerClasses.push('justify-content-evenly'); break;
        }

        switch (this._options.align) {
            case 'start' :    containerClasses.push('align-items-start'); break;
            case 'end' :      containerClasses.push('align-items-end'); break;
            case 'center' :   containerClasses.push('align-items-center'); break;
            case 'baseline' : containerClasses.push('align-items-baseline'); break;
            case 'stretch' :  containerClasses.push('align-items-stretch'); break;
        }

        switch (this._options.wrap) {
            case 'wrap' :         containerClasses.push('flex-wrap'); break;
            case 'wrap-reverse' : containerClasses.push('flex-wrap-reverse'); break;
            case 'nowrap' :       containerClasses.push('flex-nowrap'); break;
        }

        switch (this._options.overflow) {
            case 'auto' :    containerClasses.push('overflow-auto'); break;
            case 'hidden' :  containerClasses.push('overflow-hidden'); break;
            case 'visible' : containerClasses.push('overflow-visible'); break;
            case 'scroll' :  containerClasses.push('overflow-scroll'); break;
        }

        switch (this._options.overflowX) {
            case 'auto' :    containerClasses.push('overflow-x-auto'); break;
            case 'hidden' :  containerClasses.push('overflow-x-hidden'); break;
            case 'visible' : containerClasses.push('overflow-x-visible'); break;
            case 'scroll' :  containerClasses.push('overflow-x-scroll'); break;
        }

        switch (this._options.overflowY) {
            case 'auto' :    containerClasses.push('overflow-y-auto'); break;
            case 'hidden' :  containerClasses.push('overflow-y-hidden'); break;
            case 'visible' : containerClasses.push('overflow-y-visible'); break;
            case 'scroll' :  containerClasses.push('overflow-y-scroll'); break;
        }



        if (['number', 'string'].indexOf(typeof this._options.width) >= 0) {
            let unit = typeof this._options.width === 'number' ? 'px' : '';
            containerStyles.push('width:' + this._options.width + unit)
        }
        if (['number', 'string'].indexOf(typeof this._options.minWidth) >= 0) {
            let unit = typeof this._options.minWidth === 'number' ? 'px' : '';
            containerStyles.push('min-width:' + this._options.minWidth + unit)
        }
        if (['number', 'string'].indexOf(typeof this._options.maxWidth) >= 0) {
            let unit = typeof this._options.maxWidth === 'number' ? 'px' : '';
            containerStyles.push('max-width:' + this._options.maxWidth + unit)
        }

        if (['number', 'string'].indexOf(typeof this._options.height) >= 0) {
            let unit = typeof this._options.height === 'number' ? 'px' : '';
            containerStyles.push('height:' + this._options.height + unit)
        }
        if (['number', 'string'].indexOf(typeof this._options.minHeight) >= 0) {
            let unit = typeof this._options.minHeight === 'number' ? 'px' : '';
            containerStyles.push('min-height:' + this._options.minHeight + unit)
        }

        if (['number', 'string'].indexOf(typeof this._options.maxHeight) >= 0) {
            let unit = typeof this._options.maxHeight === 'number' ? 'px' : '';
            containerStyles.push('max-height:' + this._options.maxHeight + unit)
        }

        if (['number', 'string'].indexOf(typeof this._options.gap) >= 0) {
            let unit = typeof this._options.gap === 'number' ? 'px' : '';
            containerStyles.push('gap:' + this._options.gap + unit)
        }

        $.each(this._options.sizes, function (name, size) {
            if (['sm', 'md', 'lg', 'xl', 'xxl'].indexOf(name) >= 0) {

                switch (size.direction) {
                    case 'row' :            containerClasses.push('flex-' + name + '-row'); break;
                    case 'row-reverse' :    containerClasses.push('flex-' + name + '-row-reverse'); break;
                    case 'column' :         containerClasses.push('flex-' + name + '-column'); break;
                    case 'column-reverse' : containerClasses.push('flex-' + name + '-column-reverse'); break;
                }

                switch (size.justify) {
                    case 'start' :   containerClasses.push('justify-content-' + name + '-start'); break;
                    case 'end' :     containerClasses.push('justify-content-' + name + '-end'); break;
                    case 'center' :  containerClasses.push('justify-content-' + name + '-center'); break;
                    case 'between' : containerClasses.push('justify-content-' + name + '-between'); break;
                    case 'around' :  containerClasses.push('justify-content-' + name + '-around'); break;
                    case 'evenly' :  containerClasses.push('justify-content-' + name + '-evenly'); break;
                }

                switch (size.align) {
                    case 'start' :    containerClasses.push('align-items-' + name + '-start'); break;
                    case 'end' :      containerClasses.push('align-items-' + name + '-end'); break;
                    case 'center' :   containerClasses.push('align-items-' + name + '-center'); break;
                    case 'baseline' : containerClasses.push('align-items-' + name + '-baseline'); break;
                    case 'stretch' :  containerClasses.push('align-items-' + name + '-stretch'); break;
                }

                switch (size.wrap) {
                    case 'wrap' :         containerClasses.push('flex-' + name + '-wrap'); break;
                    case 'wrap-reverse' : containerClasses.push('flex-' + name + '-wrap-reverse'); break;
                    case 'nowrap' :       containerClasses.push('flex-' + name + '-nowrap'); break;
                }
            }
        });

        let that         = this;
        let issetColumns = false;

        $.each(this._options.items, function (key, item) {

            let itemClasses = [
                'coreui-layout-item',
                'item-' + item.id
            ];
            let itemStyles      = [];
            let issetItemColumn = false;

            switch (item.align) {
                case 'start' :    itemClasses.push('align-self-start'); break;
                case 'end' :      itemClasses.push('align-self-end'); break;
                case 'center' :   itemClasses.push('align-self-center'); break;
                case 'baseline' : itemClasses.push('align-self-baseline'); break;
                case 'stretch' :  itemClasses.push('align-self-stretch'); break;
            }

            switch (item.overflow) {
                case 'auto' :    itemClasses.push('overflow-auto'); break;
                case 'hidden' :  itemClasses.push('overflow-hidden'); break;
                case 'visible' : itemClasses.push('overflow-visible'); break;
                case 'scroll' :  itemClasses.push('overflow-scroll'); break;
            }

            switch (item.overflowX) {
                case 'auto' :    itemClasses.push('overflow-x-auto'); break;
                case 'hidden' :  itemClasses.push('overflow-x-hidden'); break;
                case 'visible' : itemClasses.push('overflow-x-visible'); break;
                case 'scroll' :  itemClasses.push('overflow-x-scroll'); break;
            }

            switch (item.overflowY) {
                case 'auto' :    itemClasses.push('overflow-y-auto'); break;
                case 'hidden' :  itemClasses.push('overflow-y-hidden'); break;
                case 'visible' : itemClasses.push('overflow-y-visible'); break;
                case 'scroll' :  itemClasses.push('overflow-y-scroll'); break;
            }

            if (item.fill) {
                itemClasses.push('flex-fill')
            }

            if (typeof item.order === 'number') {
                if (item.order < 0) {
                    itemClasses.push('order-0')

                } else if (item.order > 5) {
                    itemClasses.push('order-5')

                } else {
                    itemClasses.push('order-' + item.order)
                }
            }

            if (item.widthColumn) {
                issetColumns    = true;
                issetItemColumn = true;
                itemClasses.push('col-' + item.widthColumn);
            }


            $.each(item.sizes, function (name, size) {
                if (['sm', 'md', 'lg', 'xl', 'xxl'].indexOf(name) >= 0) {
                    switch (size.align) {
                        case 'start' :    itemClasses.push('align-self-' + name + '-start'); break;
                        case 'end' :      itemClasses.push('align-self-' + name + '-end'); break;
                        case 'center' :   itemClasses.push('align-self-' + name + '-center'); break;
                        case 'baseline' : itemClasses.push('align-self-' + name + '-baseline'); break;
                        case 'stretch' :  itemClasses.push('align-self-' + name + '-stretch'); break;
                    }

                    if (size.fill) {
                        itemClasses.push('flex-' + name + '-fill');
                    }

                    if (size.widthColumn) {
                        issetColumns    = true;
                        issetItemColumn = true;
                        itemClasses.push('col-' + name + '-' + size.widthColumn);
                    }

                    if (typeof size.order === 'number') {
                        if (size.order < 0) {
                            itemClasses.push('order-' + name + '-0')

                        } else if (size.order > 5) {
                            itemClasses.push('order-' + name + '-5')

                        } else {
                            itemClasses.push('order-' + name + '-' + size.order)
                        }
                    }
                }
            });



            if (item.width !== undefined) {
                let unit = typeof item.width === 'number' ? 'px' : '';
                itemStyles.push('width:' + item.width + unit)
            }
            if (item.minWidth !== undefined) {
                let unit = typeof item.minWidth === 'number' ? 'px' : '';
                itemStyles.push('min-width:' + item.minWidth + unit)
            }
            if (item.maxWidth !== undefined) {
                let unit = typeof item.maxWidth === 'number' ? 'px' : '';
                itemStyles.push('max-width:' + item.maxWidth + unit)
            }

            if (item.height !== undefined) {
                let unit = typeof item.height === 'number' ? 'px' : '';
                itemStyles.push('height:' + item.height + unit)
            }
            if (item.minHeight ) {
                let unit = typeof item.minHeight === 'number' ? 'px' : '';
                itemStyles.push('min-height:' + item.minHeight + unit)
            }
            if (item.maxHeight !== undefined) {
                let unit = typeof item.maxHeight === 'number' ? 'px' : '';
                itemStyles.push('max-height:' + item.maxHeight + unit)
            }

            if (issetItemColumn) {
                itemClasses.push('col');
            }

            let content = that._renderContent(item.content);
            let styles  = itemStyles.length > 0 ? ' style="' + itemStyles.join(';') + '"' : '';

            containerItems.push(
                '<div class="' + itemClasses.join(' ') + '"' + styles + '>' +
                    content +
                '</div>'
            );
        });


        if (issetColumns) {
            containerClasses.push('row');
        }

        let styles = containerStyles.length > 0 ? ' style="' + containerStyles.join(';') + '"' : '';
        let html   =
            '<div id="coreui-layout-' + this._options.id + '" ' +
                 'class="coreui-layout d-flex ' + containerClasses.join(' ') + '"' + styles + '>' +
                containerItems.join('') +
            '</div>';


        if (element === undefined) {
            return html;
        }

        // Dom element
        let domElement = {};

        if (typeof element === 'string') {
            domElement = document.getElementById(element);

            if ( ! domElement) {
                return '';
            }

        } else if (element instanceof HTMLElement) {
            domElement = element;
        }


        domElement.innerHTML = html;

        this.initEvents();
    },


    /**
     * @param eventName
     * @param callback
     * @param context
     * @param singleExec
     */
    on: function(eventName, callback, context, singleExec) {
        if (typeof this._events[eventName] !== 'object') {
            this._events[eventName] = [];
        }
        this._events[eventName].push({
            context : context || this,
            callback: callback,
            singleExec: !! singleExec,
        });
    },


    /**
     * Выполнение события
     * @param name
     * @param context
     * @param params
     * @private
     */
    _trigger: function(name, context, params) {

        params = params || [];

        if (this._events.hasOwnProperty(name) && this._events[name].length > 0) {
            for (var i = 0; i < this._events[name].length; i++) {
                let callback = this._events[name][i].callback;

                context = this._events[name][i].context || context;

                callback.apply(context, params);

                if (this._events[name][i].singleExec) {
                    this._events[name].splice(i, 1);
                    i--;
                }
            }
        }
    },


    /**
     *
     * @param data
     * @returns {string}
     * @private
     */
    _renderContent: function(data) {

        let result          = [];
        let alloyComponents = [
            'coreui.table',
            'coreui.form',
            'coreui.panel',
            'coreui.layout',
            'coreui.tabs',
            'coreui.info',
            'coreui.chart',
        ];

        if (typeof data === 'string') {
            result.push(data);

        } else if (data instanceof Object) {
            if ( ! Array.isArray(data)) {
                data = [ data ];
            }

            for (let i = 0; i < data.length; i++) {
                if (typeof data[i] === 'string') {
                    result.push(data[i]);

                } else {
                    if ( ! Array.isArray(data[i]) &&
                        data[i].hasOwnProperty('component') &&
                        alloyComponents.indexOf(data[i].component) >= 0
                    ) {
                        let name = data[i].component.split('.')[1];

                        if (CoreUI.hasOwnProperty(name)) {
                            let instance = CoreUI[name].create(data[i]);
                            result.push(instance.render());

                            this.on('shown.coreui.layout', instance.initEvents, instance, true);
                        } else {
                            result.push(JSON.stringify(data[i]));
                        }

                    } else {
                        result.push(JSON.stringify(data[i]));
                    }
                }
            }
        }

        return result.join('');
    }
};

var CoreUI = typeof CoreUI !== 'undefined' ? CoreUI : {};

CoreUI.table = {

    columns: {},
    controls: {},
    filters: {},
    search: {},
    lang: {},

    _instances: {},

    /**
     * @param {object} options
     * @returns {CoreUI.table.instance}
     */
    create: function (options) {

        let instance = $.extend(true, {}, this.instance);
        instance._init(options instanceof Object ? options : {});

        let tableId = instance.getId();
        this._instances[tableId] = instance;

        return instance;
    },


    /**
     * @param {string} id
     * @returns {CoreUI.table.instance|null}
     */
    get: function (id) {

        if ( ! this._instances.hasOwnProperty(id)) {
            return null;
        }

        if ($('#coreui-table-' + this._instances[id])[0]) {
            delete this._instances[id];
            return null;
        }

        return this._instances[id];
    },


    /**
     * Объединение атрибутов
     * @param attr1
     * @param attr2
     * @returns {object}
     */
    _mergeAttr: function (attr1, attr2) {

        let mergeAttr = Object.assign({}, attr1);

        if (typeof attr2 === 'object') {
            $.each(attr2, function (name, value) {
                if (mergeAttr.hasOwnProperty(name)) {
                    if (name === 'class') {
                        mergeAttr[name] += ' ' + value;

                    } else if (name === 'style') {
                        mergeAttr[name] += ';' + value;

                    } else {
                        mergeAttr[name] = value;
                    }

                } else {
                    mergeAttr[name] = value;
                }
            });
        }

        return mergeAttr;
    },


    /**
     * Проверка на число
     * @param num
     * @returns {boolean}
     * @private
     */
    _isNumeric: function(num) {
        return (typeof(num) === 'number' || typeof(num) === "string" && num.trim() !== '') && ! isNaN(num);
    },


    /**
     * @returns {string}
     * @private
     */
    _hashCode: function() {
        return this._crc32((new Date().getTime() + Math.random()).toString()).toString(16);
    },


    /**
     * @param str
     * @returns {number}
     * @private
     */
    _crc32: function (str) {

        for (var a, o = [], c = 0; c < 256; c++) {
            a = c;
            for (var f = 0; f < 8; f++) {
                a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1
            }
            o[c] = a
        }

        for (var n = -1, t = 0; t < str.length; t++) {
            n = n >>> 8 ^ o[255 & (n ^ str.charCodeAt(t))]
        }

        return (-1 ^ n) >>> 0;
    }
};
(function() {"use strict";(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ejs=f()}})(function(){var define,module,exports;return function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r}()({1:[function(require,module,exports){"use strict";var fs=require("fs");var path=require("path");var utils=require("./utils");var scopeOptionWarned=false;var _VERSION_STRING=require("../package.json").version;var _DEFAULT_OPEN_DELIMITER="<";var _DEFAULT_CLOSE_DELIMITER=">";var _DEFAULT_DELIMITER="%";var _DEFAULT_LOCALS_NAME="locals";var _NAME="ejs";var _REGEX_STRING="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)";var _OPTS_PASSABLE_WITH_DATA=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"];var _OPTS_PASSABLE_WITH_DATA_EXPRESS=_OPTS_PASSABLE_WITH_DATA.concat("cache");var _BOM=/^\uFEFF/;var _JS_IDENTIFIER=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/;exports.cache=utils.cache;exports.fileLoader=fs.readFileSync;exports.localsName=_DEFAULT_LOCALS_NAME;exports.promiseImpl=new Function("return this;")().Promise;exports.resolveInclude=function(name,filename,isDir){var dirname=path.dirname;var extname=path.extname;var resolve=path.resolve;var includePath=resolve(isDir?filename:dirname(filename),name);var ext=extname(name);if(!ext){includePath+=".ejs"}return includePath};function resolvePaths(name,paths){var filePath;if(paths.some(function(v){filePath=exports.resolveInclude(name,v,true);return fs.existsSync(filePath)})){return filePath}}function getIncludePath(path,options){var includePath;var filePath;var views=options.views;var match=/^[A-Za-z]+:\\|^\//.exec(path);if(match&&match.length){path=path.replace(/^\/*/,"");if(Array.isArray(options.root)){includePath=resolvePaths(path,options.root)}else{includePath=exports.resolveInclude(path,options.root||"/",true)}}else{if(options.filename){filePath=exports.resolveInclude(path,options.filename);if(fs.existsSync(filePath)){includePath=filePath}}if(!includePath&&Array.isArray(views)){includePath=resolvePaths(path,views)}if(!includePath&&typeof options.includer!=="function"){throw new Error('Could not find the include file "'+options.escapeFunction(path)+'"')}}return includePath}function handleCache(options,template){var func;var filename=options.filename;var hasTemplate=arguments.length>1;if(options.cache){if(!filename){throw new Error("cache option requires a filename")}func=exports.cache.get(filename);if(func){return func}if(!hasTemplate){template=fileLoader(filename).toString().replace(_BOM,"")}}else if(!hasTemplate){if(!filename){throw new Error("Internal EJS error: no file name or template "+"provided")}template=fileLoader(filename).toString().replace(_BOM,"")}func=exports.compile(template,options);if(options.cache){exports.cache.set(filename,func)}return func}function tryHandleCache(options,data,cb){var result;if(!cb){if(typeof exports.promiseImpl=="function"){return new exports.promiseImpl(function(resolve,reject){try{result=handleCache(options)(data);resolve(result)}catch(err){reject(err)}})}else{throw new Error("Please provide a callback function")}}else{try{result=handleCache(options)(data)}catch(err){return cb(err)}cb(null,result)}}function fileLoader(filePath){return exports.fileLoader(filePath)}function includeFile(path,options){var opts=utils.shallowCopy(utils.createNullProtoObjWherePossible(),options);opts.filename=getIncludePath(path,opts);if(typeof options.includer==="function"){var includerResult=options.includer(path,opts.filename);if(includerResult){if(includerResult.filename){opts.filename=includerResult.filename}if(includerResult.template){return handleCache(opts,includerResult.template)}}}return handleCache(opts)}function rethrow(err,str,flnm,lineno,esc){var lines=str.split("\n");var start=Math.max(lineno-3,0);var end=Math.min(lines.length,lineno+3);var filename=esc(flnm);var context=lines.slice(start,end).map(function(line,i){var curr=i+start+1;return(curr==lineno?" >> ":"    ")+curr+"| "+line}).join("\n");err.path=filename;err.message=(filename||"ejs")+":"+lineno+"\n"+context+"\n\n"+err.message;throw err}function stripSemi(str){return str.replace(/;(\s*$)/,"$1")}exports.compile=function compile(template,opts){var templ;if(opts&&opts.scope){if(!scopeOptionWarned){console.warn("`scope` option is deprecated and will be removed in EJS 3");scopeOptionWarned=true}if(!opts.context){opts.context=opts.scope}delete opts.scope}templ=new Template(template,opts);return templ.compile()};exports.render=function(template,d,o){var data=d||utils.createNullProtoObjWherePossible();var opts=o||utils.createNullProtoObjWherePossible();if(arguments.length==2){utils.shallowCopyFromList(opts,data,_OPTS_PASSABLE_WITH_DATA)}return handleCache(opts,template)(data)};exports.renderFile=function(){var args=Array.prototype.slice.call(arguments);var filename=args.shift();var cb;var opts={filename:filename};var data;var viewOpts;if(typeof arguments[arguments.length-1]=="function"){cb=args.pop()}if(args.length){data=args.shift();if(args.length){utils.shallowCopy(opts,args.pop())}else{if(data.settings){if(data.settings.views){opts.views=data.settings.views}if(data.settings["view cache"]){opts.cache=true}viewOpts=data.settings["view options"];if(viewOpts){utils.shallowCopy(opts,viewOpts)}}utils.shallowCopyFromList(opts,data,_OPTS_PASSABLE_WITH_DATA_EXPRESS)}opts.filename=filename}else{data=utils.createNullProtoObjWherePossible()}return tryHandleCache(opts,data,cb)};exports.Template=Template;exports.clearCache=function(){exports.cache.reset()};function Template(text,opts){opts=opts||utils.createNullProtoObjWherePossible();var options=utils.createNullProtoObjWherePossible();this.templateText=text;this.mode=null;this.truncate=false;this.currentLine=1;this.source="";options.client=opts.client||false;options.escapeFunction=opts.escape||opts.escapeFunction||utils.escapeXML;options.compileDebug=opts.compileDebug!==false;options.debug=!!opts.debug;options.filename=opts.filename;options.openDelimiter=opts.openDelimiter||exports.openDelimiter||_DEFAULT_OPEN_DELIMITER;options.closeDelimiter=opts.closeDelimiter||exports.closeDelimiter||_DEFAULT_CLOSE_DELIMITER;options.delimiter=opts.delimiter||exports.delimiter||_DEFAULT_DELIMITER;options.strict=opts.strict||false;options.context=opts.context;options.cache=opts.cache||false;options.rmWhitespace=opts.rmWhitespace;options.root=opts.root;options.includer=opts.includer;options.outputFunctionName=opts.outputFunctionName;options.localsName=opts.localsName||exports.localsName||_DEFAULT_LOCALS_NAME;options.views=opts.views;options.async=opts.async;options.destructuredLocals=opts.destructuredLocals;options.legacyInclude=typeof opts.legacyInclude!="undefined"?!!opts.legacyInclude:true;if(options.strict){options._with=false}else{options._with=typeof opts._with!="undefined"?opts._with:true}this.opts=options;this.regex=this.createRegex()}Template.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"};Template.prototype={createRegex:function(){var str=_REGEX_STRING;var delim=utils.escapeRegExpChars(this.opts.delimiter);var open=utils.escapeRegExpChars(this.opts.openDelimiter);var close=utils.escapeRegExpChars(this.opts.closeDelimiter);str=str.replace(/%/g,delim).replace(/</g,open).replace(/>/g,close);return new RegExp(str)},compile:function(){var src;var fn;var opts=this.opts;var prepended="";var appended="";var escapeFn=opts.escapeFunction;var ctor;var sanitizedFilename=opts.filename?JSON.stringify(opts.filename):"undefined";if(!this.source){this.generateSource();prepended+='  var __output = "";\n'+"  function __append(s) { if (s !== undefined && s !== null) __output += s }\n";if(opts.outputFunctionName){if(!_JS_IDENTIFIER.test(opts.outputFunctionName)){throw new Error("outputFunctionName is not a valid JS identifier.")}prepended+="  var "+opts.outputFunctionName+" = __append;"+"\n"}if(opts.localsName&&!_JS_IDENTIFIER.test(opts.localsName)){throw new Error("localsName is not a valid JS identifier.")}if(opts.destructuredLocals&&opts.destructuredLocals.length){var destructuring="  var __locals = ("+opts.localsName+" || {}),\n";for(var i=0;i<opts.destructuredLocals.length;i++){var name=opts.destructuredLocals[i];if(!_JS_IDENTIFIER.test(name)){throw new Error("destructuredLocals["+i+"] is not a valid JS identifier.")}if(i>0){destructuring+=",\n  "}destructuring+=name+" = __locals."+name}prepended+=destructuring+";\n"}if(opts._with!==false){prepended+="  with ("+opts.localsName+" || {}) {"+"\n";appended+="  }"+"\n"}appended+="  return __output;"+"\n";this.source=prepended+this.source+appended}if(opts.compileDebug){src="var __line = 1"+"\n"+"  , __lines = "+JSON.stringify(this.templateText)+"\n"+"  , __filename = "+sanitizedFilename+";"+"\n"+"try {"+"\n"+this.source+"} catch (e) {"+"\n"+"  rethrow(e, __lines, __filename, __line, escapeFn);"+"\n"+"}"+"\n"}else{src=this.source}if(opts.client){src="escapeFn = escapeFn || "+escapeFn.toString()+";"+"\n"+src;if(opts.compileDebug){src="rethrow = rethrow || "+rethrow.toString()+";"+"\n"+src}}if(opts.strict){src='"use strict";\n'+src}if(opts.debug){console.log(src)}if(opts.compileDebug&&opts.filename){src=src+"\n"+"//# sourceURL="+sanitizedFilename+"\n"}try{if(opts.async){try{ctor=new Function("return (async function(){}).constructor;")()}catch(e){if(e instanceof SyntaxError){throw new Error("This environment does not support async/await")}else{throw e}}}else{ctor=Function}fn=new ctor(opts.localsName+", escapeFn, include, rethrow",src)}catch(e){if(e instanceof SyntaxError){if(opts.filename){e.message+=" in "+opts.filename}e.message+=" while compiling ejs\n\n";e.message+="If the above error is not helpful, you may want to try EJS-Lint:\n";e.message+="https://github.com/RyanZim/EJS-Lint";if(!opts.async){e.message+="\n";e.message+="Or, if you meant to create an async function, pass `async: true` as an option."}}throw e}var returnedFn=opts.client?fn:function anonymous(data){var include=function(path,includeData){var d=utils.shallowCopy(utils.createNullProtoObjWherePossible(),data);if(includeData){d=utils.shallowCopy(d,includeData)}return includeFile(path,opts)(d)};return fn.apply(opts.context,[data||utils.createNullProtoObjWherePossible(),escapeFn,include,rethrow])};if(opts.filename&&typeof Object.defineProperty==="function"){var filename=opts.filename;var basename=path.basename(filename,path.extname(filename));try{Object.defineProperty(returnedFn,"name",{value:basename,writable:false,enumerable:false,configurable:true})}catch(e){}}return returnedFn},generateSource:function(){var opts=this.opts;if(opts.rmWhitespace){this.templateText=this.templateText.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")}this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var self=this;var matches=this.parseTemplateText();var d=this.opts.delimiter;var o=this.opts.openDelimiter;var c=this.opts.closeDelimiter;if(matches&&matches.length){matches.forEach(function(line,index){var closing;if(line.indexOf(o+d)===0&&line.indexOf(o+d+d)!==0){closing=matches[index+2];if(!(closing==d+c||closing=="-"+d+c||closing=="_"+d+c)){throw new Error('Could not find matching close tag for "'+line+'".')}}self.scanLine(line)})}},parseTemplateText:function(){var str=this.templateText;var pat=this.regex;var result=pat.exec(str);var arr=[];var firstPos;while(result){firstPos=result.index;if(firstPos!==0){arr.push(str.substring(0,firstPos));str=str.slice(firstPos)}arr.push(result[0]);str=str.slice(result[0].length);result=pat.exec(str)}if(str){arr.push(str)}return arr},_addOutput:function(line){if(this.truncate){line=line.replace(/^(?:\r\n|\r|\n)/,"");this.truncate=false}if(!line){return line}line=line.replace(/\\/g,"\\\\");line=line.replace(/\n/g,"\\n");line=line.replace(/\r/g,"\\r");line=line.replace(/"/g,'\\"');this.source+='    ; __append("'+line+'")'+"\n"},scanLine:function(line){var self=this;var d=this.opts.delimiter;var o=this.opts.openDelimiter;var c=this.opts.closeDelimiter;var newLineCount=0;newLineCount=line.split("\n").length-1;switch(line){case o+d:case o+d+"_":this.mode=Template.modes.EVAL;break;case o+d+"=":this.mode=Template.modes.ESCAPED;break;case o+d+"-":this.mode=Template.modes.RAW;break;case o+d+"#":this.mode=Template.modes.COMMENT;break;case o+d+d:this.mode=Template.modes.LITERAL;this.source+='    ; __append("'+line.replace(o+d+d,o+d)+'")'+"\n";break;case d+d+c:this.mode=Template.modes.LITERAL;this.source+='    ; __append("'+line.replace(d+d+c,d+c)+'")'+"\n";break;case d+c:case"-"+d+c:case"_"+d+c:if(this.mode==Template.modes.LITERAL){this._addOutput(line)}this.mode=null;this.truncate=line.indexOf("-")===0||line.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case Template.modes.EVAL:case Template.modes.ESCAPED:case Template.modes.RAW:if(line.lastIndexOf("//")>line.lastIndexOf("\n")){line+="\n"}}switch(this.mode){case Template.modes.EVAL:this.source+="    ; "+line+"\n";break;case Template.modes.ESCAPED:this.source+="    ; __append(escapeFn("+stripSemi(line)+"))"+"\n";break;case Template.modes.RAW:this.source+="    ; __append("+stripSemi(line)+")"+"\n";break;case Template.modes.COMMENT:break;case Template.modes.LITERAL:this._addOutput(line);break}}else{this._addOutput(line)}}if(self.opts.compileDebug&&newLineCount){this.currentLine+=newLineCount;this.source+="    ; __line = "+this.currentLine+"\n"}}};exports.escapeXML=utils.escapeXML;exports.__express=exports.renderFile;exports.VERSION=_VERSION_STRING;exports.name=_NAME;if(typeof window!="undefined"){window.ejs=exports}},{"../package.json":6,"./utils":2,fs:3,path:4}],2:[function(require,module,exports){"use strict";var regExpChars=/[|\\{}()[\]^$+*?.]/g;var hasOwnProperty=Object.prototype.hasOwnProperty;var hasOwn=function(obj,key){return hasOwnProperty.apply(obj,[key])};exports.escapeRegExpChars=function(string){if(!string){return""}return String(string).replace(regExpChars,"\\$&")};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"};var _MATCH_HTML=/[&<>'"]/g;function encode_char(c){return _ENCODE_HTML_RULES[c]||c}var escapeFuncStr="var _ENCODE_HTML_RULES = {\n"+'      "&": "&amp;"\n'+'    , "<": "&lt;"\n'+'    , ">": "&gt;"\n'+'    , \'"\': "&#34;"\n'+'    , "\'": "&#39;"\n'+"    }\n"+"  , _MATCH_HTML = /[&<>'\"]/g;\n"+"function encode_char(c) {\n"+"  return _ENCODE_HTML_RULES[c] || c;\n"+"};\n";exports.escapeXML=function(markup){return markup==undefined?"":String(markup).replace(_MATCH_HTML,encode_char)};function escapeXMLToString(){return Function.prototype.toString.call(this)+";\n"+escapeFuncStr}try{if(typeof Object.defineProperty==="function"){Object.defineProperty(exports.escapeXML,"toString",{value:escapeXMLToString})}else{exports.escapeXML.toString=escapeXMLToString}}catch(err){console.warn("Unable to set escapeXML.toString (is the Function prototype frozen?)")}exports.shallowCopy=function(to,from){from=from||{};if(to!==null&&to!==undefined){for(var p in from){if(!hasOwn(from,p)){continue}if(p==="__proto__"||p==="constructor"){continue}to[p]=from[p]}}return to};exports.shallowCopyFromList=function(to,from,list){list=list||[];from=from||{};if(to!==null&&to!==undefined){for(var i=0;i<list.length;i++){var p=list[i];if(typeof from[p]!="undefined"){if(!hasOwn(from,p)){continue}if(p==="__proto__"||p==="constructor"){continue}to[p]=from[p]}}}return to};exports.cache={_data:{},set:function(key,val){this._data[key]=val},get:function(key){return this._data[key]},remove:function(key){delete this._data[key]},reset:function(){this._data={}}};exports.hyphenToCamel=function(str){return str.replace(/-[a-z]/g,function(match){return match[1].toUpperCase()})};exports.createNullProtoObjWherePossible=function(){if(typeof Object.create=="function"){return function(){return Object.create(null)}}if(!({__proto__:null}instanceof Object)){return function(){return{__proto__:null}}}return function(){return{}}}()},{}],3:[function(require,module,exports){},{}],4:[function(require,module,exports){(function(process){function normalizeArray(parts,allowAboveRoot){var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==="."){parts.splice(i,1)}else if(last===".."){parts.splice(i,1);up++}else if(up){parts.splice(i,1);up--}}if(allowAboveRoot){for(;up--;up){parts.unshift("..")}}return parts}exports.resolve=function(){var resolvedPath="",resolvedAbsolute=false;for(var i=arguments.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?arguments[i]:process.cwd();if(typeof path!=="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!path){continue}resolvedPath=path+"/"+resolvedPath;resolvedAbsolute=path.charAt(0)==="/"}resolvedPath=normalizeArray(filter(resolvedPath.split("/"),function(p){return!!p}),!resolvedAbsolute).join("/");return(resolvedAbsolute?"/":"")+resolvedPath||"."};exports.normalize=function(path){var isAbsolute=exports.isAbsolute(path),trailingSlash=substr(path,-1)==="/";path=normalizeArray(filter(path.split("/"),function(p){return!!p}),!isAbsolute).join("/");if(!path&&!isAbsolute){path="."}if(path&&trailingSlash){path+="/"}return(isAbsolute?"/":"")+path};exports.isAbsolute=function(path){return path.charAt(0)==="/"};exports.join=function(){var paths=Array.prototype.slice.call(arguments,0);return exports.normalize(filter(paths,function(p,index){if(typeof p!=="string"){throw new TypeError("Arguments to path.join must be strings")}return p}).join("/"))};exports.relative=function(from,to){from=exports.resolve(from).substr(1);to=exports.resolve(to).substr(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=="")break}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=="")break}if(start>end)return[];return arr.slice(start,end-start+1)}var fromParts=trim(from.split("/"));var toParts=trim(to.split("/"));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push("..")}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join("/")};exports.sep="/";exports.delimiter=":";exports.dirname=function(path){if(typeof path!=="string")path=path+"";if(path.length===0)return".";var code=path.charCodeAt(0);var hasRoot=code===47;var end=-1;var matchedSlash=true;for(var i=path.length-1;i>=1;--i){code=path.charCodeAt(i);if(code===47){if(!matchedSlash){end=i;break}}else{matchedSlash=false}}if(end===-1)return hasRoot?"/":".";if(hasRoot&&end===1){return"/"}return path.slice(0,end)};function basename(path){if(typeof path!=="string")path=path+"";var start=0;var end=-1;var matchedSlash=true;var i;for(i=path.length-1;i>=0;--i){if(path.charCodeAt(i)===47){if(!matchedSlash){start=i+1;break}}else if(end===-1){matchedSlash=false;end=i+1}}if(end===-1)return"";return path.slice(start,end)}exports.basename=function(path,ext){var f=basename(path);if(ext&&f.substr(-1*ext.length)===ext){f=f.substr(0,f.length-ext.length)}return f};exports.extname=function(path){if(typeof path!=="string")path=path+"";var startDot=-1;var startPart=0;var end=-1;var matchedSlash=true;var preDotState=0;for(var i=path.length-1;i>=0;--i){var code=path.charCodeAt(i);if(code===47){if(!matchedSlash){startPart=i+1;break}continue}if(end===-1){matchedSlash=false;end=i+1}if(code===46){if(startDot===-1)startDot=i;else if(preDotState!==1)preDotState=1}else if(startDot!==-1){preDotState=-1}}if(startDot===-1||end===-1||preDotState===0||preDotState===1&&startDot===end-1&&startDot===startPart+1){return""}return path.slice(startDot,end)};function filter(xs,f){if(xs.filter)return xs.filter(f);var res=[];for(var i=0;i<xs.length;i++){if(f(xs[i],i,xs))res.push(xs[i])}return res}var substr="ab".substr(-1)==="b"?function(str,start,len){return str.substr(start,len)}:function(str,start,len){if(start<0)start=str.length+start;return str.substr(start,len)}}).call(this,require("_process"))},{_process:5}],5:[function(require,module,exports){var process=module.exports={};var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){cachedSetTimeout=setTimeout}else{cachedSetTimeout=defaultSetTimout}}catch(e){cachedSetTimeout=defaultSetTimout}try{if(typeof clearTimeout==="function"){cachedClearTimeout=clearTimeout}else{cachedClearTimeout=defaultClearTimeout}}catch(e){cachedClearTimeout=defaultClearTimeout}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){return setTimeout(fun,0)}if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0)}try{return cachedSetTimeout(fun,0)}catch(e){try{return cachedSetTimeout.call(null,fun,0)}catch(e){return cachedSetTimeout.call(this,fun,0)}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){return clearTimeout(marker)}if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker)}try{return cachedClearTimeout(marker)}catch(e){try{return cachedClearTimeout.call(null,marker)}catch(e){return cachedClearTimeout.call(this,marker)}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue)}else{queueIndex=-1}if(queue.length){drainQueue()}}function drainQueue(){if(draining){return}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run()}}queueIndex=-1;len=queue.length}currentQueue=null;draining=false;runClearTimeout(timeout)}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i]}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue)}};function Item(fun,array){this.fun=fun;this.array=array}Item.prototype.run=function(){this.fun.apply(null,this.array)};process.title="browser";process.browser=true;process.env={};process.argv=[];process.version="";process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[]};process.binding=function(name){throw new Error("process.binding is not supported")};process.cwd=function(){return"/"};process.chdir=function(dir){throw new Error("process.chdir is not supported")};process.umask=function(){return 0}},{}],6:[function(require,module,exports){module.exports={name:"ejs",description:"Embedded JavaScript templates",keywords:["template","engine","ejs"],version:"3.1.8",author:"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",license:"Apache-2.0",bin:{ejs:"./bin/cli.js"},main:"./lib/ejs.js",jsdelivr:"ejs.min.js",unpkg:"ejs.min.js",repository:{type:"git",url:"git://github.com/mde/ejs.git"},bugs:"https://github.com/mde/ejs/issues",homepage:"https://github.com/mde/ejs",dependencies:{jake:"^10.8.5"},devDependencies:{browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^4.0.2","lru-cache":"^4.0.1",mocha:"^10.2.0","uglify-js":"^3.3.16"},engines:{node:">=0.10.0"},scripts:{test:"mocha -u tdd"}}},{}]},{},[1])(1)});
;CoreUI.table.ejs = ejs;})();;

CoreUI.table.instance = {

    _options: {
        id: null,
        class: '',
        primaryKey: 'id',
        lang: 'ru',
        size: 'sm',
        striped: true,
        hover: true,
        width: null,
        minWidth: null,
        maxWidth: null,
        height: null,
        minHeight: null,
        naxHeight: null,
        page: 1,
        recordsPerPage: 25,
        recordsPerPageList: [ 25, 50, 100, 1000 ], // 0 - all
        pageParam: 'page',
        recordsPerPageParam: 'count',
        method: 'GET',
        url: null,  // '/mod/index/orders/?page=[page]'
        show: {
            total: false,
            columnHeaders: true,
            pages: false,
            pagesJump: false,
            prePageList: false
        },
        onClick: null,
        onClickUrl: null,
        controls: [],
        columnGroups: [],
        columns: [],
        footer: [],
        records: []
    },

    _page: 1,
    _recordsPerPage: 25,
    _recordsTotal: 0,
    _recordsNumber: 1,

    _columns: [],
    _search: [],
    _filter: [],
    _events: {},


    /**
     * Инициализация
     * @param {object} options
     * @private
     */
    _init: function (options) {

        this._options = $.extend(true, {}, this._options, options);
        this._events  = {};


        if ( ! this._options.id) {
            this._options.id = CoreUI.table._hashCode();
        }

        if (this._options.page > 0) {
            this._page = this._options.page;
        }
        if (this._options.recordsPerPage > 0) {
            this._recordsPerPage = this._options.recordsPerPage;
        }

        let that = this;


        // Инициализация колонок
        if (typeof this._options.columns === 'object' &&
            Array.isArray(this._options.columns) &&
            this._options.columns.length > 0
        ) {
            $.each(this._options.columns, function (key, column) {
                if (typeof column.type === 'undefined' ||
                    ! CoreUI.table.columns.hasOwnProperty(column.type)
                ) {
                    column.type = 'text';
                }

                let columnInstance = $.extend(true, {}, CoreUI.table.columns[column.type]);
                columnInstance.init(that, column);
                that._columns.push(columnInstance);
            });
        }
    },


    /**
     *
     */
    initEvents: function () {

        let that         = this;
        let tableWrapper = '#coreui-table-' + this._options.id + ' > .coreui-table__container > .coreui-table__wrapper';

        // Показ строк
        this.on('show-records.coreui.table', function () {

            // Переход по ссылке
            if (typeof that._options.onClickUrl === 'string' && that._options.onClickUrl) {
                $(tableWrapper + ' > table > tbody > tr.coreui-table__record').click(function () {
                    let recordKey = $(this).data('record-key');
                    let record    = that._getRecordByKey(recordKey);

                    if ( ! record) {
                        return;
                    }

                    let url = that._options.onClickUrl;

                    $.each(record, function (field, value) {
                        let fieldQuote = field.replace(/([^\w\d])/g, '\\$1');
                        url = url.replace(
                            new RegExp('\\[' + fieldQuote + '\\]', 'g'),
                            value
                        );
                    });

                    if (url && url !== '#') {
                        location.href = url;
                    }
                });
            }

            // Событие нажатия на строку
            if (typeof that._options.onClick === 'function') {
                $(tableWrapper + ' > table > tbody > tr.coreui-table__record').click(function (event) {
                    let recordKey = $(this).data('record-key');
                    let record    = that._getRecordByKey(recordKey);

                    if ( ! record) {
                        return;
                    }

                    that._options.onClick(event, record);
                });
            }

            // Фиксация колонок
            let colOffset = 0;
            $(tableWrapper + ' > table > thead > tr:last-child > td.coreui-table__fixed_left').each(function () {
                let index  = $(this).index() + 1;

                if (index !== 1) {
                    $(tableWrapper + ' > table > thead > tr:last-child > td:nth-child(' + index + ')').css('left', colOffset + 'px');
                    $(tableWrapper + ' > table > tbody > tr > td:nth-child(' + index + ')').css('left', colOffset + 'px');
                }

                colOffset += $(this).outerWidth();
            });

            colOffset = 0;
            $($(tableWrapper + ' > table > thead > tr:last-child > td.coreui-table__fixed_right').get().reverse()).each(function () {
                let index  = $(this).index() + 1;

                if (index !== 1) {
                    $(tableWrapper + ' > table > thead > tr:last-child > td:nth-child(' + index + ')').css('right', colOffset + 'px');
                    $(tableWrapper + ' > table > tbody > tr > td:nth-child(' + index + ')').css('right', colOffset + 'px');
                }

                colOffset += $(this).outerWidth();
            });
        });



        // Страницы
        let btnPrev = $(tableWrapper + ' > table > tfoot > tr > td .coreui-table__page_prev')
        if (btnPrev[0]) {
            btnPrev.click(function () {
                if (that._page > 1) {
                    that.prevPage();
                }
            })
        }

        let btnNext = $(tableWrapper + ' > table > tfoot > tr > td .coreui-table__page_next')
        if (btnNext[0]) {
            btnNext.click(function () {
                that.nextPage();
            })
        }

        let inputGoPage = $(tableWrapper + ' > table > tfoot > tr > td .coreui-table__page_go_container input');
        let btnGoPage   = $(tableWrapper + ' > table > tfoot > tr > td .coreui-table__page_go')
        if (btnGoPage[0]) {
            btnGoPage.click(function () {
                that.goPage(inputGoPage.val());
            });
            inputGoPage.keyup(function (event) {
                event;
            });
        }

        let selectPerPage = $(tableWrapper + ' > table > tfoot > tr > td .coreui-table__pages_list_container select');
        if (selectPerPage[0]) {
            selectPerPage.change(function () {
                that._page           = 1;
                that._recordsPerPage = selectPerPage.val();
                that.reload();
            });
        }



        this._trigger('shown.coreui.table');

        // Вызов события показа строк
        if (( ! this._options.url || this._options.url === '#') &&
            typeof this._options.records === 'object' &&
            Array.isArray(this._options.records) &&
            this._options.records.length > 0
        ) {
            this._trigger('show-records.coreui.table', this, [ this ]);
        }
    },


    /**
     *
     * @returns {*}
     */
    getId: function () {
        return this._options.id;
    },


    /**
     *
     * @param element
     * @returns {*}
     */
    render: function(element) {

        let that        = this;
        let widthSizes  = [];
        let heightSizes = [];
        let htmlRecords = '';
        let render      = {
            controls: [],
            columnsHeader: [],
            columns: [],
            columnGroups: [],
            records: [],
            footer: '',
            pages: '',
        };

        this._recordsTotal = this._options.records.length;


        if (this._options.width > 0) {
            let unit = typeof this._options.width === 'number' ? 'px' : '';
            widthSizes.push('width:' + this._options.width + unit);
        }

        if (this._options.minWidth > 0) {
            let unit = typeof this._options.minWidth === 'number' ? 'px' : '';
            widthSizes.push('min-width:' + this._options.minWidth + unit);
        }

        if (this._options.maxWidth > 0) {
            let unit = typeof this._options.maxWidth === 'number' ? 'px' : '';
            widthSizes.push('max-width:' + this._options.maxWidth + unit);
        }


        if (this._options.height > 0) {
            let unit = typeof this._options.height === 'number' ? 'px' : '';
            heightSizes.push('height:' + this._options.height + unit);
        }

        if (this._options.minHeight > 0) {
            let unit = typeof this._options.minHeight === 'number' ? 'px' : '';
            heightSizes.push('min-height:' + this._options.minHeight + unit);
        }

        if (this._options.maxHeight > 0) {
            let unit = typeof this._options.maxHeight === 'number' ? 'px' : '';
            heightSizes.push('max-height:' + this._options.maxHeight + unit);
        }



        // Элементы управления
        if (typeof this._options.controls === 'object' &&
            Array.isArray(this._options.controls) &&
            this._options.controls.length > 0
        ) {
            $.each(this._options.controls, function (key, control) {
                if (CoreUI.table.controls.hasOwnProperty(control.type)) {

                    let controlInstance = $.extend(true, {}, CoreUI.table.controls[control.type]);
                    controlInstance.init(that, control);

                    render.controls.push({
                        id: controlInstance.getId(),
                        content: controlInstance.render(),
                    });

                    that.on('shown.coreui.table', function () {
                        controlInstance.initEvents()
                    });
                }
            });
        }


        // Колонки
        if (this._columns.length > 0) {
            $.each(this._columns, function (key, column) {
                let columnOptions = column.getOptions();
                let attributes    = [];

                if (columnOptions.fixed && typeof columnOptions.fixed === 'string') {
                    columnOptions.attrHeader = CoreUI.table._mergeAttr(columnOptions.attrHeader, {
                        class: 'coreui-table__fixed_' + columnOptions.fixed
                    });

                    columnOptions.attr = CoreUI.table._mergeAttr(columnOptions.attr, {
                        class: 'coreui-table__fixed_' + columnOptions.fixed
                    });
                }

                if (columnOptions.attrHeader && typeof columnOptions.attrHeader === 'object') {
                    $.each(columnOptions.attrHeader, function (name, value) {
                        attributes.push(name + '="' + value + '"');
                    });
                }

                render.columnGroups.push({
                    width: columnOptions.hasOwnProperty('width') ? columnOptions.width : '',
                    unit: typeof columnOptions.width === 'number' ? 'px' : ''
                });

                render.columns.push({
                    attr: attributes.length > 0 ? (' ' + attributes.join(' ')) : '',
                    label: columnOptions.hasOwnProperty('label') ? columnOptions.label : ""
                });
            });
        }


        // Строки
        if (this._options.url && this._options.url !== '#') {
            this.on('shown.coreui.table', function () {
                that.load(this._options.url);
            });

        } else {
            if (typeof this._options.records === 'object' &&
                Array.isArray(this._options.records) &&
                this._options.records.length > 0
            ) {
                that._recordsTotal = this._options.records.length;

                $.each(this._options.records, function (key, record) {
                    render.records.push(that._renderRecord(record, key));
                    that._recordsNumber++;
                });

                htmlRecords = CoreUI.table.ejs.render(CoreUI.table.tpl['table-records.html'], {
                    records: render.records,
                });

            } else {
                htmlRecords = CoreUI.table.ejs.render(CoreUI.table.tpl['table-records-empty.html'], {
                    columnsCount: this._columns.length ? this._columns.length : 1,
                    lang: this._getLang(),
                });
            }
        }


        // Страницы
        if (typeof this._options.show === 'object' &&
            (this._options.show.pages ||
             this._options.show.pagesJump ||
             this._options.show.prePageList)
        ) {
            let totalPages = this._recordsTotal > 0 && this._recordsPerPage > 0
                ? Math.ceil(this._recordsTotal / this._recordsPerPage)
                : 1;

            if (this._options.recordsPerPageList.indexOf(this._recordsPerPage) < 0) {
                this._options.recordsPerPageList.unshift(this._recordsPerPage);
            }

            render.pages = CoreUI.table.ejs.render(CoreUI.table.tpl['table-pages.html'], {
                columnsCount: this._columns.length ? this._columns.length : 1,
                table: this._options,
                lang: this._getLang(),
                currentPage: this._page,
                pagesTotal: totalPages,
                prevPage: this._page > 1,
                nextPage: this._page < totalPages,
                recordsPerPage: this._recordsPerPage,
                recordsPerPageList: this._options.recordsPerPageList
            })
        }


        if (typeof this._options.columnGroups === 'object' &&
            Array.isArray(this._options.columnGroups) &&
            this._options.columnGroups.length > 0
        ) {
            let rows = [];

            $.each(this._options.columnGroups, function (key, headerRow) {
                if (typeof headerRow === 'object' && Array.isArray(headerRow)) {
                    let cells = [];

                    $.each(headerRow, function (key, headerColumn) {
                        if (typeof headerColumn === 'object' && ! Array.isArray(headerColumn)) {
                            let attributes = [];

                            if (headerColumn.attr && typeof headerColumn.attr === 'object') {
                                $.each(headerColumn.attr, function (name, value) {
                                    attributes.push(name + '="' + value + '"');
                                });
                            }

                            cells.push({
                                label: headerColumn.hasOwnProperty('label') ? headerColumn.label : '',
                                attr: attributes.length > 0 ? ' ' + attributes.join(' ') : '',
                            });
                        }
                    });

                    rows.push(
                        CoreUI.table.ejs.render(CoreUI.table.tpl['table-columns.html'], {
                            columns: cells,
                        })
                    );
                }
            });

            render.columnsHeader = rows.join('');
        }

        if (typeof this._options.footer === 'object' &&
            Array.isArray(this._options.footer) &&
            this._options.footer.length > 0
        ) {
            let rows = [];

            $.each(this._options.footer, function (key, footerRow) {
                if (typeof footerRow === 'object' && Array.isArray(footerRow)) {
                    let cells = [];

                    $.each(footerRow, function (key, footerColumn) {
                        if (typeof footerColumn === 'object' && ! Array.isArray(footerColumn)) {
                            let attributes = [];

                            if (footerColumn.attr && typeof footerColumn.attr === 'object') {
                                $.each(footerColumn.attr, function (name, value) {
                                    attributes.push(name + '="' + value + '"');
                                });
                            }

                            cells.push({
                                label: footerColumn.hasOwnProperty('label') ? footerColumn.label : '',
                                attr: attributes.length > 0 ? ' ' + attributes.join(' ') : '',
                            });
                        }
                    });

                    rows.push(
                        CoreUI.table.ejs.render(CoreUI.table.tpl['table-columns-footer.html'], {
                            columns: cells,
                        })
                    );
                }
            });

            render.footer = rows.join('');
        }


        let htmlColumns = CoreUI.table.ejs.render(CoreUI.table.tpl['table-columns.html'], {
            columns: render.columns,
        });


        let html = CoreUI.table.ejs.render(CoreUI.table.tpl['table.html'], {
            table: this._options,
            lang: this._getLang(),
            widthSizes: widthSizes,
            heightSizes: heightSizes,
            recordsTotal: this._recordsTotal,
            render: {
                columnGroups : render.columnGroups,
                columnsHeader : render.columnsHeader,
                controls : render.controls,
                columns  : htmlColumns,
                records  : htmlRecords,
                footer   : render.footer,
                pages   : render.pages,
            },
        });

        if (element === undefined) {
            return html;
        }

        // Dom element
        let domElement = {};

        if (typeof element === 'string') {
            domElement = document.getElementById(element);

            if ( ! domElement) {
                return '';
            }

        } else if (element instanceof HTMLElement) {
            domElement = element;
        }


        domElement.innerHTML = html;

        this.initEvents();
    },


    /**
     *
     */
    lock: function () {

        let container = $('#coreui-table-' + this._options.id + ' > .coreui-table__container');

        if (container[0] && ! container.find('.coreui-table-lock')[0]) {
            let html =  CoreUI.table.ejs.render(CoreUI.table.tpl['table-loader.html'], {
                lang: this._getLang()
            });

            container.prepend(html);
        }
    },


    /**
     *
     */
    unlock: function () {

        $('#coreui-table-' + this._options.id + ' > .coreui-table__container > .coreui-table-lock').hide(50, function () {
            $(this).remove()
        });
    },


    /**
     * Загрузка строк
     * @param {string} url
     * @param {string} method
     */
    load: function (url, method) {

        this.lock();

        let that   = this;
        let params = {};

        if (url.match(/\[page\]/)) {
            url = url.replace(/\[page\]/, this._page);
        } else {
            params[this._options.pageParam] = this._page;
        }

        if (url.match(/\[per_page\]/)) {
            url = url.replace(/\[per_page\]/, this._recordsPerPage);
        } else {
            params[this._options.recordsPerPageParam] = this._recordsPerPage;
        }

        if (Object.keys(params).length > 0) {
            url += url.match(/\?/)
                ? '&' + $.param(params)
                : '?' + $.param(params);
        }

        $.ajax({
            url: url,
            method: method || 'GET',
            dataType: "json",
            beforeSend: function(xhr) {
                that._trigger('start-load-records.coreui.table', that, [ that, xhr ]);
            },
            success: function (result) {

                if (result.hasOwnProperty('records') &&
                    typeof result.records === 'object' &&
                    Array.isArray(result.records)
                ) {
                    let total = result.hasOwnProperty('total') && CoreUI.table._isNumeric(result.total) ? result.total : null;
                    that._viewRecords(result.records, total);

                } else {
                    that._viewRecords([]);
                }
            },
            error: function(xhr, textStatus, errorThrown) {
                that._viewRecords([]);
                that._trigger('error-load-records.coreui.table', that, [ that, xhr, textStatus, errorThrown ]);
            },
            complete: function(xhr, textStatus) {
                that.unlock();
                that._trigger('end-load-records.coreui.table', that, [ that, xhr, textStatus ]);
            },
        });
    },


    /**
     * Перезагрузка записей в таблице
     */
    reload: function () {

        if (this._options.url && this._options.url !== '#') {
            this.load(this._options.url, this._options.method)
        }
    },


    /**
     * Выбор всех записей в таблице
     */
    selectAll: function () {

        let tableContainer = '#coreui-table-' + this._options.id + ' > .coreui-table__container > .coreui-table__wrapper > table';

        $(tableContainer + ' > thead > tr > td > .coreui-table__select-all').prop('checked', true);
        $(tableContainer + ' > tbody > tr.coreui-table__record').addClass('table-primary');
        $(tableContainer + ' > tbody > tr.coreui-table__record > td > .coreui-table__select').prop('checked', true);

        this._trigger('select-all.coreui.table', this);
    },


    /**
     * Отмена выбор всех записей в таблице
     */
    unselectAll: function () {

        let tableContainer = '#coreui-table-' + this._options.id + ' > .coreui-table__container > .coreui-table__wrapper > table';

        $(tableContainer + ' > thead > tr > td > .coreui-table__select-all').prop('checked', false);
        $(tableContainer + ' > tbody > tr.coreui-table__record').removeClass('table-primary');
        $(tableContainer + ' > tbody > tr.coreui-table__record > td.coreui-table__select_container > .coreui-table__select').prop('checked', false);

        this._trigger('unselect-all.coreui.table', this);
    },


    /**
     * Выбор записи в таблице
     * @param {string} primaryKey
     */
    selectRecord: function (primaryKey) {

        let recordItem = this._getRecordByPrimaryKey(primaryKey);

        if ( ! recordItem) {
            return;
        }

        let row = this._getRowByKey(recordItem.key);

        if ( ! row) {
            return;
        }

        $(row).addClass('table-primary');
        $('.coreui-table__select', row).prop('checked', true);

        this._trigger('select.coreui.table', this, [ recordItem.record ]);
    },


    /**
     * Отмена выбора записи в таблице
     * @param {string} primaryKey
     */
    unselectRecord: function (primaryKey) {

        let recordItem = this._getRecordByPrimaryKey(primaryKey);

        if ( ! recordItem) {
            return;
        }

        let row = this._getRowByKey(recordItem.key);

        if ( ! row) {
            return;
        }

        $(row).removeClass('table-primary');
        $('.coreui-table__select', row).prop('checked', false);

        this._trigger('unselect.coreui.table', this, [ recordItem.record ]);
    },


    /**
     * Получение выбранных id
     * @return {array}
     */
    getSelected: function () {

        let primaryKeys = [];
        let that        = this;
        let field       = this._options.primaryKey;

        $('#coreui-table-' + this._options.id + ' > .coreui-table__container > .coreui-table__wrapper > table > tbody > tr.coreui-table__record > td.coreui-table__select_container > .coreui-table__select:checked')
            .each(function (key, element) {
                let record = that._getRecordByKey($(element).val());

                if ( ! record || ! record.hasOwnProperty(field)) {
                    return;
                }

                primaryKeys.push(record[field]);
            });



        return primaryKeys;
    },


    /**
     * Получение выбранных записей
     * @return {array}
     */
    getSelectedRecords: function () {

        let records = [];
        let that    = this;

        $('#coreui-table-' + this._options.id + ' > .coreui-table__container > .coreui-table__wrapper > table > tbody > tr.coreui-table__record > td.coreui-table__select_container > .coreui-table__select:checked')
            .each(function (key, element) {
                let record = that._getRecordByKey($(element).val());

                if ( ! record) {
                    return;
                }

                records.push(record);
            });



        return records;
    },


    /**
     * Получение записи по id
     * @param primaryKey
     * @return {object|null}
     */
    getRecord: function (primaryKey) {

        let recordItem = this._getRecordByPrimaryKey(primaryKey);

        if ( ! recordItem) {
            return null;
        }

        return recordItem.record;
    },


    /**
     * Получение записей
     */
    getRecords: function () {

        return this._options.records
    },


    /**
     * Переход к предыдущей странице
     */
    prevPage: function () {

        if (this._page > 1) {
            this._page--;
            this.reload();
        }
    },


    /**
     * Переход к следующей странице
     * @return {array}
     */
    nextPage: function () {

        let totalPages = this._recordsTotal > 0 && this._recordsPerPage > 0
            ? Math.ceil(this._recordsTotal / this._recordsPerPage)
            : 1;

        if (this._page < totalPages) {
            this._page++;
            this.reload();
        }
    },


    /**
     * Переход к указанной странице
     */
    goPage: function (page) {

        if (page >= 1) {
            this._page = page;
            this.reload();
        }
    },


    /**
     * @param eventName
     * @param callback
     * @param context
     * @param singleExec
     */
    on: function(eventName, callback, context, singleExec) {
        if (typeof this._events[eventName] !== 'object') {
            this._events[eventName] = [];
        }
        this._events[eventName].push({
            context : context || this,
            callback: callback,
            singleExec: !! singleExec,
        });
    },


    /**
     * @param name
     * @param context
     * @param params
     * @private
     */
    _trigger: function(name, context, params) {

        params = params || [];

        if (this._events[name] instanceof Object && this._events[name].length > 0) {
            for (var i = 0; i < this._events[name].length; i++) {
                let callback = this._events[name][i].callback;

                context = context || this._events[name][i].context;

                callback.apply(context, params);

                if (this._events[name][i].singleExec) {
                    this._events[name].splice(i, 1);
                }
            }
        }
    },


    /**
     * Получение настроек языка
     * @private
     */
    _getLang: function () {

        return CoreUI.table.lang.hasOwnProperty(this._options.lang)
            ? CoreUI.table.lang[this._options.lang]
            : CoreUI.table.lang['ru'];
    },


    /**
     * Получение записи по ключу
     * @param recordKey
     * @return {object|null}
     * @private
     */
    _getRecordByKey: function (recordKey) {

        if (typeof recordKey === 'undefined' || recordKey === '') {
            return null;
        }

        let record = this._options.records.hasOwnProperty(recordKey)
            ? this._options.records[recordKey]
            : null;

        if ( ! record) {
            return null;
        }

        return record;
    },


    /**
     * Получение записи по id
     * @param {string} primaryKey
     * @return {object|null}
     * @private
     */
    _getRecordByPrimaryKey: function (primaryKey) {

        if (typeof primaryKey === 'undefined' || primaryKey === '') {
            return null;
        }

        let record    = null;
        let recordKey = null;
        let field     = this._options.primaryKey;

        $.each(this._options.records, function (key, recordItem) {
            if (recordItem.hasOwnProperty(field) && recordItem[field] === primaryKey) {
                recordKey = key;
                record    = recordItem;
                return false;
            }
        });

        if ( ! record) {
            return null;
        }

        return {
            key: recordKey,
            record: record,
        };
    },


    /**
     * Получение элемента строки по ключу
     * @param {int} recordKey
     * @private
     */
    _getRowByKey: function (recordKey) {

        return $('#coreui-table-' + this._options.id + ' > .coreui-table__container > .coreui-table__wrapper > table > tbody > tr[data-record-key="' + recordKey + '"]');
    },


    /**
     * Показ указанных записей в таблице
     * @param records
     * @param total
     * @private
     */
    _viewRecords: function (records, total) {

        this._recordsTotal = CoreUI.table._isNumeric(total) ? parseInt(total) : records.length;
        let that           = this;
        let htmlRecords    = '';
        let totalPages     = this._recordsTotal > 0 && this._recordsPerPage > 0
            ? Math.ceil(this._recordsTotal / this._recordsPerPage)
            : 1;

        that._recordsNumber = this._page === 1 ? 1 : ((this._page - 1) * this._recordsPerPage) + 1;

        if (records.length > 0) {
            let renderRecorders = [];

            $.each(records, function (key, record) {
                renderRecorders.push(that._renderRecord(record, key));
                that._recordsNumber++;
            });

            htmlRecords = CoreUI.table.ejs.render(CoreUI.table.tpl['table-records.html'], {
                records: renderRecorders,
            });

        } else {
            htmlRecords = CoreUI.table.ejs.render(CoreUI.table.tpl['table-records-empty.html'], {
                columnsCount: this._columns.length > 0 ? this._columns.length : 1,
                lang: this._getLang(),
            });
        }


        let tableContainer = '#coreui-table-' + this._options.id + ' > .coreui-table__container > .coreui-table__wrapper > table';

        $(tableContainer + ' > tfoot > tr > td .coreui-table__page_current').text(this._page);
        $(tableContainer + ' > tfoot > tr > td .coreui-table__pages_total').text(totalPages);
        $(tableContainer + ' > tfoot > tr > td .coreui-table__page_prev').attr('disabled', this._page <= 1);
        $(tableContainer + ' > tfoot > tr > td .coreui-table__page_next').attr('disabled', this._page >= totalPages);

        $(tableContainer + ' > tbody').html(htmlRecords);
        $('#coreui-table-' + this._options.id + ' .coreui-table__count-total').text(this._recordsTotal);

        this._trigger('show-records.coreui.table', this, [ this ]);
    },


    /**
     * @param {object} record
     * @param {int}    recordKey
     * @returns {{ attr: (string), fields: (object) }}}
     * @private
     */
    _renderRecord: function (record, recordKey) {

        let that        = this;
        let fields      = [];
        let recordProps = typeof record.coreui === 'object' && ! Array.isArray(record.coreui) ? record.coreui : null;
        let recordAttr  = {
            class: 'coreui-table__record'
        };

        $.each(this._columns, function (key, column) {
            fields.push(that._renderField(column, record, recordKey));
        });

        if (typeof this._options.onClickUrl === 'string' && this._options.onClickUrl) {
            recordAttr.class += ' coreui-table_pointer';
        }

        if (recordProps) {
            recordAttr = CoreUI.table._mergeAttr(recordAttr, recordProps.attr);
        }

        let recordAttrResult = [];

        $.each(recordAttr, function (name, value) {
            recordAttrResult.push(name + '="' + value + '"');
        });

        return {
            attr: recordAttrResult.length > 0 ? (' ' + recordAttrResult.join(' ')) : '',
            fields: fields
        };
    },


    /**
     *
     * @param {object} column
     * @param {object} record
     * @param {int} recordKey
     * @returns {{ attr: (string), content: (string) }}
     * @private
     */
    _renderField: function (column, record, recordKey) {

        let columnOptions = column.getOptions();
        let columnField   = typeof columnOptions.field === 'string' ? columnOptions.field : null;
        let content       = '';
        let recordProps   = typeof record.coreui === 'object' && ! Array.isArray(record.coreui) ? record.coreui : null;
        let fieldProps    = recordProps && recordProps.hasOwnProperty('fields') && recordProps.fields.hasOwnProperty(columnField)
            ? recordProps.fields[columnField]
            : null;
        let fieldAttr = typeof columnOptions.attr === 'object' && ! Array.isArray(columnOptions.attr)
            ? columnOptions.attr
            : {};

        if (fieldProps && typeof fieldProps.attr === 'object' && ! Array.isArray(fieldProps.attr)) {
            fieldAttr = CoreUI.table._mergeAttr(fieldAttr, fieldProps.attr);

        }

        if (typeof columnOptions.render === 'function') {
            content = columnOptions.render(record);
        } else {
            content = columnField && record.hasOwnProperty(columnField)
                ? record[columnField]
                : '';
        }

        content = column.render(content, record, recordKey);

        let fieldAttrResult = [];

        $.each(fieldAttr, function (name, value) {
            fieldAttrResult.push(name + '="' + value + '"');
        });

        return {
            attr:    fieldAttrResult.length > 0 ? (' ' + fieldAttrResult.join(' ')) : '',
            content: content,
        };
    }
};
//HEAD 
window["CoreUI"]["table"]["tpl"] = {};

window["CoreUI"]["table"]["tpl"]["table-columns-footer.html"] = "<tr class=\"bg-white\">\n" +
    "  <% $.each(columns, function(key, column) { %>\n" +
    "  <td<%- column.attr%>><%- column.label %></td>\n" +
    "  <% }); %>\n" +
    "</tr>"; 

window["CoreUI"]["table"]["tpl"]["table-columns.html"] = "<tr class=\"fw-medium bg-white\">\n" +
    "  <% $.each(columns, function(key, column) { %>\n" +
    "  <td<%- column.attr%>><%- column.label %></td>\n" +
    "  <% }); %>\n" +
    "</tr>"; 

window["CoreUI"]["table"]["tpl"]["table-loader.html"] = "<div class=\"coreui-table-lock position-absolute w-100 top-0 bottom-0\">\n" +
    "    <div class=\"coreui-table-block bg-secondary-subtle position-absolute opacity-50 w-100 top-0 bottom-0\"></div>\n" +
    "    <div class=\"coreui-table-message position-relative d-flex align-content-center justify-content-start gap-2 mt-3 py-1 px-2 m-auto border border-secondary-subtle rounded-3 bg-body-secondary\">\n" +
    "        <div class=\"spinner-border text-secondary align-self-center\"></div>\n" +
    "        <span class=\"lh-lg\"><%= lang.loading %></span>\n" +
    "    </div>\n" +
    "</div>"; 

window["CoreUI"]["table"]["tpl"]["table-pages.html"] = "<tr class=\"bg-white\">\n" +
    "    <td colspan=\"<%= columnsCount %>\">\n" +
    "        <div class=\"d-flex justify-content-between\">\n" +
    "            <% if (table.show.pagesJump) { %>\n" +
    "            <div class=\"coreui-table__page_go_container float-start\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input type=\"number\" class=\"form-control form-control-sm\" min=\"1\">\n" +
    "                    <button class=\"coreui-table__page_go btn btn-sm btn-outline-secondary border-secondary-subtle\" type=\"button\">\n" +
    "                        <i class=\"bi bi-chevron-compact-right\"></i>\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <% } %>\n" +
    "\n" +
    "            <% if (table.show.pages) { %>\n" +
    "            <div class=\"coreui-table__pages_container text-center\">\n" +
    "                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary coreui-table__page_prev\"<% if ( ! prevPage) { %> disabled=\"disabled\"<% } %>>\n" +
    "                    <i class=\"bi bi-chevron-compact-left\"></i>\n" +
    "                </button>\n" +
    "\n" +
    "                <small>\n" +
    "                    <span class=\"coreui-table__page_current\"><%= currentPage %></span>\n" +
    "                    <%= lang.of %>\n" +
    "                    <span class=\"coreui-table__pages_total\"><%= pagesTotal %></span>\n" +
    "                </small>\n" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary coreui-table__page_next\"<% if ( ! nextPage) { %> disabled=\"disabled\"<% } %>>\n" +
    "                    <i class=\"bi bi-chevron-compact-right\"></i>\n" +
    "                </button>\n" +
    "            </div>\n" +
    "            <% } %>\n" +
    "\n" +
    "            <% if (table.show.prePageList) { %>\n" +
    "            <div class=\"coreui-table__pages_list_container float-end\">\n" +
    "                <select class=\"form-select form-select-sm\">\n" +
    "                    <% $.each(recordsPerPageList, function(key, count) { %>\n" +
    "                    <option value=\"<%= count %>\"<% if (recordsPerPage == count) { %>selected=\"selected\"<% } %>>\n" +
    "                        <% if (count == '0') { %><%= lang.all %><% } else { %><%= count %><% } %>\n" +
    "                    </option>\n" +
    "                    <% }); %>\n" +
    "                </select>\n" +
    "            </div>\n" +
    "            <% } %>\n" +
    "        </div>\n" +
    "    </td>\n" +
    "</tr>"; 

window["CoreUI"]["table"]["tpl"]["table-records-empty.html"] = "<tr>\n" +
    "    <td class=\"text-center\" colspan=\"<%= columnsCount %>\"><%= lang.emptyRecords %></td>\n" +
    "</tr>"; 

window["CoreUI"]["table"]["tpl"]["table-records.html"] = "<% $.each(records, function(key, record) { %>\n" +
    "    <tr<%- record.attr %> data-record-key=\"<%= key %>\">\n" +
    "        <% $.each(record.fields, function(key2, field) { %>\n" +
    "            <td<%- field.attr %>><%- field.content %></td>\n" +
    "        <% }); %>\n" +
    "    </tr>\n" +
    "<% }); %>"; 

window["CoreUI"]["table"]["tpl"]["table.html"] = "\n" +
    "<div id=\"coreui-table-<%= table.id %>\" class=\"coreui-table\"<%- render.attr %>\n" +
    "     <% if (widthSizes) { %>style=\"<%= widthSizes.join(';') %>\"<% } %>>\n" +
    "    <% if (render.controls.length > 0) { %>\n" +
    "        <div class=\"coreui-table__controls d-flex justify-content-start gap-2 flex-wrap mb-3 align-items-center\">\n" +
    "            <% $.each(render.controls, function(key, control) { %>\n" +
    "                <div id=\"coreui-table-control-<%= control.id %>\" class=\"coreui-table__control\">\n" +
    "                    <%- control.content %>\n" +
    "                </div>\n" +
    "            <% }); %>\n" +
    "        </div>\n" +
    "    <% } %>\n" +
    "\n" +
    "\n" +
    "    <div class=\"coreui-table__container bg-white position-relative rounded-1 border border-1\">\n" +
    "        <% if (table.show.total) { %>\n" +
    "        <div class=\"ps-2 lh-lg border-bottom\">\n" +
    "            <small><%= lang.total %>: <span class=\"coreui-table__count-total\"><%= recordsTotal %></span></small>\n" +
    "        </div>\n" +
    "        <% } %>\n" +
    "\n" +
    "        <div class=\"coreui-table__wrapper table-responsive overflow-x-auto\" <% if (heightSizes) { %>style=\"<%= heightSizes.join(';') %>\"<% } %>>\n" +
    "            <table class=\"table <% if (table.size) { %>table-<%= table.size %><% } %> <% if (table.hover) { %>table-hover<% } %> <% if (table.striped) { %>table-striped<% } %> mb-0 <%= table.class %>\">\n" +
    "                <colgroup>\n" +
    "                    <% $.each(render.columnGroups, function(key, columnGroup) { %>\n" +
    "                    <col<% if (columnGroup.width) { %> style=\"width: <%= (columnGroup.width.toString() + columnGroup.unit) %>\"<% } %>>\n" +
    "                    <% }); %>\n" +
    "                </colgroup>\n" +
    "                <% if (table.show.columnHeaders) { %>\n" +
    "                <thead>\n" +
    "                    <%- render.columnsHeader %>\n" +
    "                    <%- render.columns %>\n" +
    "                </thead>\n" +
    "                <% } %>\n" +
    "                <tbody class=\"border-secondary-subtle\">\n" +
    "                    <%- render.records %>\n" +
    "                </tbody>\n" +
    "                <% if (render.footer != '' || render.pages != '') { %>\n" +
    "                <tfoot>\n" +
    "                    <%- render.footer %>\n" +
    "                    <%- render.pages %>\n" +
    "                </tfoot>\n" +
    "                <% } %>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"; 

window["CoreUI"]["table"]["tpl"]["controls/button.html"] = "<button type=\"button\"<%- render.attr %>>\n" +
    "<%- control.content %>\n" +
    "</button>"; 

window["CoreUI"]["table"]["tpl"]["controls/link.html"] = "<a href=\"<%- control.href %>\"<%- render.attr %>><%- control.content %></a>"; 
// END ;

CoreUI.table.columns.date = {

    _table: null,
    _options: {
        type: 'date',
        field: null,
        label: null,
        width: null,
        format: 'DD.MM.YYYY',
        attr: {},
        attrHeader: {},
        render: null
    },


    /**
     * Инициализация
     * @param {CoreUI.table.instance} table
     * @param {object}                options
     */
    init: function (table, options) {

        this._table   = table;
        this._options = $.extend({}, this._options, options);
    },


    /**
     * Получение параметров
     */
    getOptions: function () {
        return this._options;
    },


    /**
     * Формирование контента
     * @param {string} content
     * @param {object} record
     * @param {string} recordKey
     * @returns {string}
     */
    render: function(content, record, recordKey) {

        if (typeof content !== 'string') {
            return '';
        }


        try {
            let date = new Date(content);

            content = this._options.format
                .replace(/YYYY/g, this._strPadLeft(date.getFullYear(), 4))
                .replace(/MM/g,   this._strPadLeft(date.getMonth() + 1, 2))
                .replace(/M/g,    date.getMonth() + 1)
                .replace(/DD/g,   this._strPadLeft(date.getDate(), 2))
                .replace(/D/g,    date.getDate());

        } catch (e) {
            content = '';
        }


        return content;
    },


    /**
     * Размерность строки
     * @param {string} str
     * @param {int}    count
     * @param {string} repeat
     * @returns {string}
     */
    _strPadLeft: function (str, count, repeat) {

        str = String(str);

        if (str.length >= count) {
            return str;
        }

        repeat = repeat ? repeat : '0';

        return (repeat.repeat(count) + str).slice(-(count));
    }
};

CoreUI.table.columns.datetime = {

    _table: null,
    _options: {
        type: 'datetime',
        field: null,
        label: null,
        width: null,
        format: 'DD.MM.YYYY hh:mm:ss',
        attr: {},
        attrHeader: {},
        render: null
    },


    /**
     * Инициализация
     * @param {CoreUI.table.instance} table
     * @param {object}                options
     */
    init: function (table, options) {

        this._table   = table;
        this._options = $.extend({}, this._options, options);
    },


    /**
     * Получение параметров
     */
    getOptions: function () {
        return this._options;
    },


    /**
     * Формирование контента
     * @param {string} content
     * @param {object} record
     * @param {string} recordKey
     * @returns {string}
     */
    render: function(content, record, recordKey) {

        if (typeof content !== 'string') {
            return '';
        }

        try {
            let date = new Date(content);

            content = this._options.format
                .replace(/YYYY/g, this._strPadLeft(date.getFullYear(), 4))
                .replace(/MM/g,   this._strPadLeft(date.getMonth() + 1, 2))
                .replace(/M/g,    date.getMonth() + 1)
                .replace(/DD/g,   this._strPadLeft(date.getDate(), 2))
                .replace(/D/g,    date.getDate())
                .replace(/hh/g,   this._strPadLeft(date.getHours(), 2))
                .replace(/mm/g,   this._strPadLeft(date.getMinutes(), 2))
                .replace(/m/g,    date.getMinutes())
                .replace(/ss/g,   this._strPadLeft(date.getSeconds(), 2))
                .replace(/s/g,    date.getSeconds());

        } catch (e) {
            content = '';
        }


        return content;
    },


    /**
     * Размерность строки
     * @param {string} str
     * @param {int}    count
     * @param {string} repeat
     * @returns {string}
     */
    _strPadLeft: function (str, count, repeat) {

        str = String(str);

        if (str.length >= count) {
            return str;
        }

        repeat = repeat ? repeat : '0';

        return (repeat.repeat(count) + str).slice(-(count));
    }
};

CoreUI.table.columns.html = {

    _table: null,
    _options: {
        type: 'html',
        field: null,
        label: null,
        width: null,
        attr: {},
        attrHeader: {},
        render: null
    },


    /**
     * Инициализация
     * @param {CoreUI.table.instance} table
     * @param {object}                options
     */
    init: function (table, options) {

        this._table   = table;
        this._options = $.extend({}, this._options, options);
    },


    /**
     * Получение параметров
     */
    getOptions: function () {
        return this._options;
    },


    /**
     * Формирование контента
     * @param {string} content
     * @param {object} record
     * @param {string} recordKey
     * @returns {string}
     */
    render: function(content, record, recordKey) {

        if (['string', 'bigint', 'symbol', 'number'].indexOf(typeof content) < 0) {
            return '';
        }

        return String(content);
    }
};

CoreUI.table.columns.number = {

    _table: null,
    _options: {
        type: 'number',
        field: null,
        label: null,
        width: null,
        attr: {},
        attrHeader: {},
        render: null
    },


    /**
     * Инициализация
     * @param {CoreUI.table.instance} table
     * @param {object}                options
     */
    init: function (table, options) {

        this._table   = table;
        this._options = $.extend({}, this._options, options);
    },


    /**
     * Получение параметров
     */
    getOptions: function () {
        return this._options;
    },


    /**
     * Формирование контента
     * @param {string} content
     * @param {object} record
     * @param {string} recordKey
     * @returns {string}
     */
    render: function(content, record, recordKey) {

        if (['string', 'bigint', 'symbol', 'number'].indexOf(typeof content) < 0) {
            return '';
        }

        content = String(content)
            .replace(/,/g, '.')
            .replace(/[^0-9\-\.]/g, '')
            .replace(/[\s]{2,}/g, ' ');

        content = content.replace(/(?<!(\.\d*|^.{0}))(?=(\d{3})+(?!\d))/g, "$1 ")
            .replace(/\- /g, '-');

        return content;
    }
};

CoreUI.table.columns.numbers = {

    _table: null,
    _options: {
        type: 'numbers',
        label: '№',
        width: 20,
        attr: { class: 'text-end' },
        attrHeader: null
    },


    /**
     * Инициализация
     * @param {CoreUI.table.instance} table
     * @param {object}                options
     */
    init: function (table, options) {

        this._table    = table;
        this._options  = $.extend(true, {}, this._options, options);
    },


    /**
     * Получение параметров
     */
    getOptions: function () {
        return this._options;
    },


    /**
     * Формирование контента
     * @param {string} content
     * @param {object} record
     * @param {string} recordKey
     * @returns {string}
     */
    render: function(content, record, recordKey) {

        return this._table._recordsNumber;
    }
};

CoreUI.table.columns.select = {

    _table: null,
    _options: {
        type: 'select',
        label: '',
        width: 35,
        attr: { class: 'coreui-table__select_container text-center' },
        attrHeader: { class: 'text-center' }
    },


    /**
     * Инициализация
     * @param {CoreUI.table.instance} table
     * @param {object}                options
     */
    init: function (table, options) {

        if (options.hasOwnProperty('attr')) {
            options.attr = CoreUI.table._mergeAttr(this._options.attr, options.attr);
        }
        if (options.hasOwnProperty('attrHeader')) {
            options.attrHeader = CoreUI.table._mergeAttr(this._options.attrHeader, options.attrHeader);
        }


        this._table   = table;
        this._options = $.extend(true, {}, this._options, options);

        this._options.label = '<input class="coreui-table__select-all form-check-input" type="checkbox" value="">';
        let tableWrapper    = '#coreui-table-' + table._options.id + ' > .coreui-table__container > .coreui-table__wrapper';
        let containers      = tableWrapper + ' > table > tbody > tr.coreui-table__record > td.coreui-table__select_container';


        // Показ строк
        this._table.on('show-records.coreui.table', function () {

            // Отмена обработки нажатия в select колонках
            $(containers).click(function (event) {
                event.stopPropagation();
            });

            // Выбор строки
            $(containers + ' > .coreui-table__select').click(function (event) {
                let recordKey = $(this).val();
                let record    = table._getRecordByKey(recordKey);
                let row       = table._getRowByKey(recordKey);

                if ( ! record || ! row) {
                    return;
                }

                if ($(this).is(':checked')) {
                    $(row).addClass('table-primary');
                    table._trigger('select.coreui.table', table, [ record ]);
                } else {
                    $(row).removeClass('table-primary');
                    table._trigger('unselect.coreui.table', table, [ record ]);
                }
            });

            // Выбор всех строк
            $(tableWrapper + ' > table > thead > tr > td > .coreui-table__select-all').click(function (event) {
                if ($(this).is(':checked')) {
                    table.selectAll();
                } else {
                    table.unselectAll();
                }
            });
        });
    },


    /**
     * Получение параметров
     */
    getOptions: function () {
        return this._options;
    },


    /**
     * Формирование контента
     * @param {string} content
     * @param {object} record
     * @param {string} recordKey
     * @returns {string}
     */
    render: function(content, record, recordKey) {

        return '<input class="coreui-table__select form-check-input" type="checkbox" value="' + recordKey + '">';
    }
};

CoreUI.table.columns.switch = {

    _table: null,
    _options: {
        type: 'switch',
        label: '',
        field: '',
        width: 5,
        valueY: 'Y',
        valueN: 'N',
        attr: { class: 'coreui-table__switch_container' },
        attrHeader: { },
        onChange: null
    },


    /**
     * Инициализация
     * @param {CoreUI.table.instance} table
     * @param {object}                options
     */
    init: function (table, options) {

        this._table    = table;
        this._options  = $.extend(true, {}, this._options, options);
        let that       = this;
        let containers = '#coreui-table-' + table._options.id + ' > .coreui-table__container > .coreui-table__wrapper > table > tbody > tr.coreui-table__record > td.coreui-table__switch_container';

        // Показ строк
        this._table.on('show-records.coreui.table', function () {

            // Отмена обработки нажатия в switch колонках
            $(containers).click(function (event) {
                event.stopPropagation();
            });

            // События нажатия на переключатель
            if (that._options.hasOwnProperty('onChange') &&
                typeof that._options.onChange === 'function'
            ) {
                $(containers + ' .coreui-table__switch[data-field="' + that._options.field + '"]').change(function (event) {
                    let recordKey = $(this).val();
                    let isChecked = $(this).is(':checked');
                    let record    = table._getRecordByKey(recordKey);

                    that._options.onChange(record, isChecked);
                    return false;
                });
            }
        });
    },


    /**
     * Получение параметров
     */
    getOptions: function () {
        return this._options;
    },


    /**
     * Формирование контента
     * @param {string} content
     * @param {object} record
     * @param {string} recordKey
     * @returns {string}
     */
    render: function(content, record, recordKey) {

        let checked = record.hasOwnProperty(this._options.field) && record[this._options.field] === this._options.valueY
            ? ' checked="checked"'
            : '';


        return '<div class="form-switch">' +
                   '<input class="coreui-table__switch form-check-input" type="checkbox" value="' + recordKey + '"' + checked +
                         ' data-field="' + this._options.field + '" data-field="' + this._options.field + '">' +
               '</div>';
    }
};

CoreUI.table.columns.text = {

    _table: null,
    _options: {
        type: 'text',
        field: null,
        label: null,
        width: null,
        attr: null,
        attrHeader: null,
        render: null
    },


    /**
     * Инициализация
     * @param {CoreUI.table.instance} table
     * @param {object}                options
     */
    init: function (table, options) {

        this._table   = table;
        this._options = $.extend({}, this._options, options);
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return this._options;
    },


    /**
     * Формирование контента
     * @param {string} content
     * @param {object} record
     * @param {string} recordKey
     * @returns {string}
     */
    render: function(content, record, recordKey) {

        if (['string', 'bigint', 'symbol', 'number'].indexOf(typeof content) < 0) {
            return '';
        }

        return String(content)
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
};

CoreUI.table.controls.button = {

    _table: null,
    _options: {
        id: null,
        type: 'button',
        href: null,
        content: null,
        onClick: null,
        attr: null
    },
    _render: {
        attr: ''
    },


    /**
     * Инициализация
     * @param {CoreUI.table.instance} table
     * @param {object} options
     */
    init: function (table, options) {

        this._options = $.extend({}, this._options, options);
        this._table   = table;

        if ( ! this._options.id) {
            this._options.id = CoreUI.table._hashCode();
        }
    },


    /**
     * Инициализация событий связанных с элементом управления
     */
    initEvents: function () {

        let that = this;

        if (typeof this._options.onClick === 'function') {
            $('#coreui-table-' + this._table._options.id + ' #coreui-table-control-' + this._options.id + ' > button')
                .click(function (event) {
                    that._options.onClick(event, that._table);
                });
        }
    },


    /**
     * Получение ID элемента управления
     * @returns {string}
     */
    getId: function () {

        return this._options.id;
    },


    /**
     * Формирование контента для размещения на странице
     * @returns {string}
     */
    render: function() {

        if (typeof this._options.attr === 'object') {
            let attributes = [];

            $.each(this._options.attr, function (name, value) {
                attributes.push(name + '="' + value + '"');
            });

            this._render.attr = ' ' + attributes.join(' ');
        }


        return CoreUI.table.ejs.render(CoreUI.table.tpl['controls/button.html'], {
            control: this._options,
            render: this._render,
        });
    }
};

CoreUI.table.controls.custom = {

    _table: null,
    _options: {
        id: null,
        type: 'custom',
        content: null
    },


    /**
     * Инициализация
     * @param {CoreUI.table.instance} table
     * @param {object} options
     */
    init: function (table, options) {

        this._options = $.extend({}, this._options, options);
        this._table   = table;

        if ( ! this._options.id) {
            this._options.id = CoreUI.table._hashCode();
        }
    },


    /**
     * Инициализация событий связанных с элементом управления
     */
    initEvents: function () {

    },


    /**
     * Получение ID элемента управления
     * @returns {string}
     */
    getId: function () {

        return this._options.id;
    },


    /**
     * Формирование контента для размещения на странице
     * @returns {string}
     */
    render: function() {

        return this._options.content;
    }
};

CoreUI.table.controls.link = {

    _table: null,
    _options: {
        id: null,
        type: 'link',
        href: null,
        content: null,
        attr: null
    },
    _render: {
        attr: ''
    },


    /**
     * Инициализация
     * @param {CoreUI.table.instance} table
     * @param {object} options
     */
    init: function (table, options) {

        this._options = $.extend({}, this._options, options);
        this._table   = table;

        if ( ! this._options.id) {
            this._options.id = CoreUI.table._hashCode();
        }
    },


    /**
     * Инициализация событий связанных с элементом управления
     */
    initEvents: function () {

    },


    /**
     * Получение ID элемента управления
     * @returns {string}
     */
    getId: function () {

        return this._options.id;
    },


    /**
     * Формирование контента для размещения на странице
     * @returns {string}
     */
    render: function() {

        if (typeof this._options.attr === 'object') {
            let attributes = [];

            $.each(this._options.attr, function (name, value) {
                attributes.push(name + '="' + value + '"');
            });

            this._render.attr = ' ' + attributes.join(' ');
        }

        return CoreUI.table.ejs.render(CoreUI.table.tpl['controls/link.html'], {
            control: this._options,
            render: this._render,
        });
    }
};

CoreUI.table.lang.ru = {
    "emptyRecords": "No records",
    "loading": "Loading...",
    "total": "Total",
    "of": "of",
    "all": "All",
};

CoreUI.table.lang.ru = {
    "emptyRecords": "Нет записей",
    "loading": "Загрузка...",
    "total": "Всего",
    "of": "из",
    "all": "Все",
}
//# sourceMappingURL=coreui-table.js.map
;
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.CoreUI = global.CoreUI || {}, global.CoreUI.form = factory());
}(this, (function () { 'use strict';

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f();}else if(typeof define==="function"&&define.amd){define([],f);}else{var g;if(typeof window!=="undefined"){g=window;}else if(typeof global!=="undefined"){g=global;}else if(typeof self!=="undefined"){g=self;}else{g=this;}g.ejs=f();}})(function(){return function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t);}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r}()({1:[function(require,module,exports){"use strict";var fs=require("fs");var path=require("path");var utils=require("./utils");var scopeOptionWarned=false;var _VERSION_STRING=require("../package.json").version;var _DEFAULT_OPEN_DELIMITER="<";var _DEFAULT_CLOSE_DELIMITER=">";var _DEFAULT_DELIMITER="%";var _DEFAULT_LOCALS_NAME="locals";var _NAME="ejs";var _REGEX_STRING="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)";var _OPTS_PASSABLE_WITH_DATA=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"];var _OPTS_PASSABLE_WITH_DATA_EXPRESS=_OPTS_PASSABLE_WITH_DATA.concat("cache");var _BOM=/^\uFEFF/;var _JS_IDENTIFIER=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/;exports.cache=utils.cache;exports.fileLoader=fs.readFileSync;exports.localsName=_DEFAULT_LOCALS_NAME;exports.promiseImpl=new Function("return this;")().Promise;exports.resolveInclude=function(name,filename,isDir){var dirname=path.dirname;var extname=path.extname;var resolve=path.resolve;var includePath=resolve(isDir?filename:dirname(filename),name);var ext=extname(name);if(!ext){includePath+=".ejs";}return includePath};function resolvePaths(name,paths){var filePath;if(paths.some(function(v){filePath=exports.resolveInclude(name,v,true);return fs.existsSync(filePath)})){return filePath}}function getIncludePath(path,options){var includePath;var filePath;var views=options.views;var match=/^[A-Za-z]+:\\|^\//.exec(path);if(match&&match.length){path=path.replace(/^\/*/,"");if(Array.isArray(options.root)){includePath=resolvePaths(path,options.root);}else{includePath=exports.resolveInclude(path,options.root||"/",true);}}else{if(options.filename){filePath=exports.resolveInclude(path,options.filename);if(fs.existsSync(filePath)){includePath=filePath;}}if(!includePath&&Array.isArray(views)){includePath=resolvePaths(path,views);}if(!includePath&&typeof options.includer!=="function"){throw new Error('Could not find the include file "'+options.escapeFunction(path)+'"')}}return includePath}function handleCache(options,template){var func;var filename=options.filename;var hasTemplate=arguments.length>1;if(options.cache){if(!filename){throw new Error("cache option requires a filename")}func=exports.cache.get(filename);if(func){return func}if(!hasTemplate){template=fileLoader(filename).toString().replace(_BOM,"");}}else if(!hasTemplate){if(!filename){throw new Error("Internal EJS error: no file name or template "+"provided")}template=fileLoader(filename).toString().replace(_BOM,"");}func=exports.compile(template,options);if(options.cache){exports.cache.set(filename,func);}return func}function tryHandleCache(options,data,cb){var result;if(!cb){if(typeof exports.promiseImpl=="function"){return new exports.promiseImpl(function(resolve,reject){try{result=handleCache(options)(data);resolve(result);}catch(err){reject(err);}})}else{throw new Error("Please provide a callback function")}}else{try{result=handleCache(options)(data);}catch(err){return cb(err)}cb(null,result);}}function fileLoader(filePath){return exports.fileLoader(filePath)}function includeFile(path,options){var opts=utils.shallowCopy(utils.createNullProtoObjWherePossible(),options);opts.filename=getIncludePath(path,opts);if(typeof options.includer==="function"){var includerResult=options.includer(path,opts.filename);if(includerResult){if(includerResult.filename){opts.filename=includerResult.filename;}if(includerResult.template){return handleCache(opts,includerResult.template)}}}return handleCache(opts)}function rethrow(err,str,flnm,lineno,esc){var lines=str.split("\n");var start=Math.max(lineno-3,0);var end=Math.min(lines.length,lineno+3);var filename=esc(flnm);var context=lines.slice(start,end).map(function(line,i){var curr=i+start+1;return(curr==lineno?" >> ":"    ")+curr+"| "+line}).join("\n");err.path=filename;err.message=(filename||"ejs")+":"+lineno+"\n"+context+"\n\n"+err.message;throw err}function stripSemi(str){return str.replace(/;(\s*$)/,"$1")}exports.compile=function compile(template,opts){var templ;if(opts&&opts.scope){if(!scopeOptionWarned){console.warn("`scope` option is deprecated and will be removed in EJS 3");scopeOptionWarned=true;}if(!opts.context){opts.context=opts.scope;}delete opts.scope;}templ=new Template(template,opts);return templ.compile()};exports.render=function(template,d,o){var data=d||utils.createNullProtoObjWherePossible();var opts=o||utils.createNullProtoObjWherePossible();if(arguments.length==2){utils.shallowCopyFromList(opts,data,_OPTS_PASSABLE_WITH_DATA);}return handleCache(opts,template)(data)};exports.renderFile=function(){var args=Array.prototype.slice.call(arguments);var filename=args.shift();var cb;var opts={filename:filename};var data;var viewOpts;if(typeof arguments[arguments.length-1]=="function"){cb=args.pop();}if(args.length){data=args.shift();if(args.length){utils.shallowCopy(opts,args.pop());}else{if(data.settings){if(data.settings.views){opts.views=data.settings.views;}if(data.settings["view cache"]){opts.cache=true;}viewOpts=data.settings["view options"];if(viewOpts){utils.shallowCopy(opts,viewOpts);}}utils.shallowCopyFromList(opts,data,_OPTS_PASSABLE_WITH_DATA_EXPRESS);}opts.filename=filename;}else{data=utils.createNullProtoObjWherePossible();}return tryHandleCache(opts,data,cb)};exports.Template=Template;exports.clearCache=function(){exports.cache.reset();};function Template(text,opts){opts=opts||utils.createNullProtoObjWherePossible();var options=utils.createNullProtoObjWherePossible();this.templateText=text;this.mode=null;this.truncate=false;this.currentLine=1;this.source="";options.client=opts.client||false;options.escapeFunction=opts.escape||opts.escapeFunction||utils.escapeXML;options.compileDebug=opts.compileDebug!==false;options.debug=!!opts.debug;options.filename=opts.filename;options.openDelimiter=opts.openDelimiter||exports.openDelimiter||_DEFAULT_OPEN_DELIMITER;options.closeDelimiter=opts.closeDelimiter||exports.closeDelimiter||_DEFAULT_CLOSE_DELIMITER;options.delimiter=opts.delimiter||exports.delimiter||_DEFAULT_DELIMITER;options.strict=opts.strict||false;options.context=opts.context;options.cache=opts.cache||false;options.rmWhitespace=opts.rmWhitespace;options.root=opts.root;options.includer=opts.includer;options.outputFunctionName=opts.outputFunctionName;options.localsName=opts.localsName||exports.localsName||_DEFAULT_LOCALS_NAME;options.views=opts.views;options.async=opts.async;options.destructuredLocals=opts.destructuredLocals;options.legacyInclude=typeof opts.legacyInclude!="undefined"?!!opts.legacyInclude:true;if(options.strict){options._with=false;}else{options._with=typeof opts._with!="undefined"?opts._with:true;}this.opts=options;this.regex=this.createRegex();}Template.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"};Template.prototype={createRegex:function(){var str=_REGEX_STRING;var delim=utils.escapeRegExpChars(this.opts.delimiter);var open=utils.escapeRegExpChars(this.opts.openDelimiter);var close=utils.escapeRegExpChars(this.opts.closeDelimiter);str=str.replace(/%/g,delim).replace(/</g,open).replace(/>/g,close);return new RegExp(str)},compile:function(){var src;var fn;var opts=this.opts;var prepended="";var appended="";var escapeFn=opts.escapeFunction;var ctor;var sanitizedFilename=opts.filename?JSON.stringify(opts.filename):"undefined";if(!this.source){this.generateSource();prepended+='  var __output = "";\n'+"  function __append(s) { if (s !== undefined && s !== null) __output += s }\n";if(opts.outputFunctionName){if(!_JS_IDENTIFIER.test(opts.outputFunctionName)){throw new Error("outputFunctionName is not a valid JS identifier.")}prepended+="  var "+opts.outputFunctionName+" = __append;"+"\n";}if(opts.localsName&&!_JS_IDENTIFIER.test(opts.localsName)){throw new Error("localsName is not a valid JS identifier.")}if(opts.destructuredLocals&&opts.destructuredLocals.length){var destructuring="  var __locals = ("+opts.localsName+" || {}),\n";for(var i=0;i<opts.destructuredLocals.length;i++){var name=opts.destructuredLocals[i];if(!_JS_IDENTIFIER.test(name)){throw new Error("destructuredLocals["+i+"] is not a valid JS identifier.")}if(i>0){destructuring+=",\n  ";}destructuring+=name+" = __locals."+name;}prepended+=destructuring+";\n";}if(opts._with!==false){prepended+="  with ("+opts.localsName+" || {}) {"+"\n";appended+="  }"+"\n";}appended+="  return __output;"+"\n";this.source=prepended+this.source+appended;}if(opts.compileDebug){src="var __line = 1"+"\n"+"  , __lines = "+JSON.stringify(this.templateText)+"\n"+"  , __filename = "+sanitizedFilename+";"+"\n"+"try {"+"\n"+this.source+"} catch (e) {"+"\n"+"  rethrow(e, __lines, __filename, __line, escapeFn);"+"\n"+"}"+"\n";}else{src=this.source;}if(opts.client){src="escapeFn = escapeFn || "+escapeFn.toString()+";"+"\n"+src;if(opts.compileDebug){src="rethrow = rethrow || "+rethrow.toString()+";"+"\n"+src;}}if(opts.strict){src='"use strict";\n'+src;}if(opts.debug){console.log(src);}if(opts.compileDebug&&opts.filename){src=src+"\n"+"//# sourceURL="+sanitizedFilename+"\n";}try{if(opts.async){try{ctor=new Function("return (async function(){}).constructor;")();}catch(e){if(e instanceof SyntaxError){throw new Error("This environment does not support async/await")}else{throw e}}}else{ctor=Function;}fn=new ctor(opts.localsName+", escapeFn, include, rethrow",src);}catch(e){if(e instanceof SyntaxError){if(opts.filename){e.message+=" in "+opts.filename;}e.message+=" while compiling ejs\n\n";e.message+="If the above error is not helpful, you may want to try EJS-Lint:\n";e.message+="https://github.com/RyanZim/EJS-Lint";if(!opts.async){e.message+="\n";e.message+="Or, if you meant to create an async function, pass `async: true` as an option.";}}throw e}var returnedFn=opts.client?fn:function anonymous(data){var include=function(path,includeData){var d=utils.shallowCopy(utils.createNullProtoObjWherePossible(),data);if(includeData){d=utils.shallowCopy(d,includeData);}return includeFile(path,opts)(d)};return fn.apply(opts.context,[data||utils.createNullProtoObjWherePossible(),escapeFn,include,rethrow])};if(opts.filename&&typeof Object.defineProperty==="function"){var filename=opts.filename;var basename=path.basename(filename,path.extname(filename));try{Object.defineProperty(returnedFn,"name",{value:basename,writable:false,enumerable:false,configurable:true});}catch(e){}}return returnedFn},generateSource:function(){var opts=this.opts;if(opts.rmWhitespace){this.templateText=this.templateText.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"");}this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var self=this;var matches=this.parseTemplateText();var d=this.opts.delimiter;var o=this.opts.openDelimiter;var c=this.opts.closeDelimiter;if(matches&&matches.length){matches.forEach(function(line,index){var closing;if(line.indexOf(o+d)===0&&line.indexOf(o+d+d)!==0){closing=matches[index+2];if(!(closing==d+c||closing=="-"+d+c||closing=="_"+d+c)){throw new Error('Could not find matching close tag for "'+line+'".')}}self.scanLine(line);});}},parseTemplateText:function(){var str=this.templateText;var pat=this.regex;var result=pat.exec(str);var arr=[];var firstPos;while(result){firstPos=result.index;if(firstPos!==0){arr.push(str.substring(0,firstPos));str=str.slice(firstPos);}arr.push(result[0]);str=str.slice(result[0].length);result=pat.exec(str);}if(str){arr.push(str);}return arr},_addOutput:function(line){if(this.truncate){line=line.replace(/^(?:\r\n|\r|\n)/,"");this.truncate=false;}if(!line){return line}line=line.replace(/\\/g,"\\\\");line=line.replace(/\n/g,"\\n");line=line.replace(/\r/g,"\\r");line=line.replace(/"/g,'\\"');this.source+='    ; __append("'+line+'")'+"\n";},scanLine:function(line){var self=this;var d=this.opts.delimiter;var o=this.opts.openDelimiter;var c=this.opts.closeDelimiter;var newLineCount=0;newLineCount=line.split("\n").length-1;switch(line){case o+d:case o+d+"_":this.mode=Template.modes.EVAL;break;case o+d+"=":this.mode=Template.modes.ESCAPED;break;case o+d+"-":this.mode=Template.modes.RAW;break;case o+d+"#":this.mode=Template.modes.COMMENT;break;case o+d+d:this.mode=Template.modes.LITERAL;this.source+='    ; __append("'+line.replace(o+d+d,o+d)+'")'+"\n";break;case d+d+c:this.mode=Template.modes.LITERAL;this.source+='    ; __append("'+line.replace(d+d+c,d+c)+'")'+"\n";break;case d+c:case"-"+d+c:case"_"+d+c:if(this.mode==Template.modes.LITERAL){this._addOutput(line);}this.mode=null;this.truncate=line.indexOf("-")===0||line.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case Template.modes.EVAL:case Template.modes.ESCAPED:case Template.modes.RAW:if(line.lastIndexOf("//")>line.lastIndexOf("\n")){line+="\n";}}switch(this.mode){case Template.modes.EVAL:this.source+="    ; "+line+"\n";break;case Template.modes.ESCAPED:this.source+="    ; __append(escapeFn("+stripSemi(line)+"))"+"\n";break;case Template.modes.RAW:this.source+="    ; __append("+stripSemi(line)+")"+"\n";break;case Template.modes.COMMENT:break;case Template.modes.LITERAL:this._addOutput(line);break}}else{this._addOutput(line);}}if(self.opts.compileDebug&&newLineCount){this.currentLine+=newLineCount;this.source+="    ; __line = "+this.currentLine+"\n";}}};exports.escapeXML=utils.escapeXML;exports.__express=exports.renderFile;exports.VERSION=_VERSION_STRING;exports.name=_NAME;if(typeof window!="undefined"){window.ejs=exports;}},{"../package.json":6,"./utils":2,fs:3,path:4}],2:[function(require,module,exports){"use strict";var regExpChars=/[|\\{}()[\]^$+*?.]/g;var hasOwnProperty=Object.prototype.hasOwnProperty;var hasOwn=function(obj,key){return hasOwnProperty.apply(obj,[key])};exports.escapeRegExpChars=function(string){if(!string){return""}return String(string).replace(regExpChars,"\\$&")};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"};var _MATCH_HTML=/[&<>'"]/g;function encode_char(c){return _ENCODE_HTML_RULES[c]||c}var escapeFuncStr="var _ENCODE_HTML_RULES = {\n"+'      "&": "&amp;"\n'+'    , "<": "&lt;"\n'+'    , ">": "&gt;"\n'+'    , \'"\': "&#34;"\n'+'    , "\'": "&#39;"\n'+"    }\n"+"  , _MATCH_HTML = /[&<>'\"]/g;\n"+"function encode_char(c) {\n"+"  return _ENCODE_HTML_RULES[c] || c;\n"+"};\n";exports.escapeXML=function(markup){return markup==undefined?"":String(markup).replace(_MATCH_HTML,encode_char)};function escapeXMLToString(){return Function.prototype.toString.call(this)+";\n"+escapeFuncStr}try{if(typeof Object.defineProperty==="function"){Object.defineProperty(exports.escapeXML,"toString",{value:escapeXMLToString});}else{exports.escapeXML.toString=escapeXMLToString;}}catch(err){console.warn("Unable to set escapeXML.toString (is the Function prototype frozen?)");}exports.shallowCopy=function(to,from){from=from||{};if(to!==null&&to!==undefined){for(var p in from){if(!hasOwn(from,p)){continue}if(p==="__proto__"||p==="constructor"){continue}to[p]=from[p];}}return to};exports.shallowCopyFromList=function(to,from,list){list=list||[];from=from||{};if(to!==null&&to!==undefined){for(var i=0;i<list.length;i++){var p=list[i];if(typeof from[p]!="undefined"){if(!hasOwn(from,p)){continue}if(p==="__proto__"||p==="constructor"){continue}to[p]=from[p];}}}return to};exports.cache={_data:{},set:function(key,val){this._data[key]=val;},get:function(key){return this._data[key]},remove:function(key){delete this._data[key];},reset:function(){this._data={};}};exports.hyphenToCamel=function(str){return str.replace(/-[a-z]/g,function(match){return match[1].toUpperCase()})};exports.createNullProtoObjWherePossible=function(){if(typeof Object.create=="function"){return function(){return Object.create(null)}}if(!({__proto__:null}instanceof Object)){return function(){return{__proto__:null}}}return function(){return{}}}();},{}],3:[function(require,module,exports){},{}],4:[function(require,module,exports){(function(process){function normalizeArray(parts,allowAboveRoot){var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==="."){parts.splice(i,1);}else if(last===".."){parts.splice(i,1);up++;}else if(up){parts.splice(i,1);up--;}}if(allowAboveRoot){for(;up--;up){parts.unshift("..");}}return parts}exports.resolve=function(){var resolvedPath="",resolvedAbsolute=false;for(var i=arguments.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?arguments[i]:process.cwd();if(typeof path!=="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!path){continue}resolvedPath=path+"/"+resolvedPath;resolvedAbsolute=path.charAt(0)==="/";}resolvedPath=normalizeArray(filter(resolvedPath.split("/"),function(p){return!!p}),!resolvedAbsolute).join("/");return(resolvedAbsolute?"/":"")+resolvedPath||"."};exports.normalize=function(path){var isAbsolute=exports.isAbsolute(path),trailingSlash=substr(path,-1)==="/";path=normalizeArray(filter(path.split("/"),function(p){return!!p}),!isAbsolute).join("/");if(!path&&!isAbsolute){path=".";}if(path&&trailingSlash){path+="/";}return(isAbsolute?"/":"")+path};exports.isAbsolute=function(path){return path.charAt(0)==="/"};exports.join=function(){var paths=Array.prototype.slice.call(arguments,0);return exports.normalize(filter(paths,function(p,index){if(typeof p!=="string"){throw new TypeError("Arguments to path.join must be strings")}return p}).join("/"))};exports.relative=function(from,to){from=exports.resolve(from).substr(1);to=exports.resolve(to).substr(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=="")break}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=="")break}if(start>end)return[];return arr.slice(start,end-start+1)}var fromParts=trim(from.split("/"));var toParts=trim(to.split("/"));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push("..");}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join("/")};exports.sep="/";exports.delimiter=":";exports.dirname=function(path){if(typeof path!=="string")path=path+"";if(path.length===0)return".";var code=path.charCodeAt(0);var hasRoot=code===47;var end=-1;var matchedSlash=true;for(var i=path.length-1;i>=1;--i){code=path.charCodeAt(i);if(code===47){if(!matchedSlash){end=i;break}}else{matchedSlash=false;}}if(end===-1)return hasRoot?"/":".";if(hasRoot&&end===1){return"/"}return path.slice(0,end)};function basename(path){if(typeof path!=="string")path=path+"";var start=0;var end=-1;var matchedSlash=true;var i;for(i=path.length-1;i>=0;--i){if(path.charCodeAt(i)===47){if(!matchedSlash){start=i+1;break}}else if(end===-1){matchedSlash=false;end=i+1;}}if(end===-1)return"";return path.slice(start,end)}exports.basename=function(path,ext){var f=basename(path);if(ext&&f.substr(-1*ext.length)===ext){f=f.substr(0,f.length-ext.length);}return f};exports.extname=function(path){if(typeof path!=="string")path=path+"";var startDot=-1;var startPart=0;var end=-1;var matchedSlash=true;var preDotState=0;for(var i=path.length-1;i>=0;--i){var code=path.charCodeAt(i);if(code===47){if(!matchedSlash){startPart=i+1;break}continue}if(end===-1){matchedSlash=false;end=i+1;}if(code===46){if(startDot===-1)startDot=i;else if(preDotState!==1)preDotState=1;}else if(startDot!==-1){preDotState=-1;}}if(startDot===-1||end===-1||preDotState===0||preDotState===1&&startDot===end-1&&startDot===startPart+1){return""}return path.slice(startDot,end)};function filter(xs,f){if(xs.filter)return xs.filter(f);var res=[];for(var i=0;i<xs.length;i++){if(f(xs[i],i,xs))res.push(xs[i]);}return res}var substr="ab".substr(-1)==="b"?function(str,start,len){return str.substr(start,len)}:function(str,start,len){if(start<0)start=str.length+start;return str.substr(start,len)};}).call(this,require("_process"));},{_process:5}],5:[function(require,module,exports){var process=module.exports={};var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}try{if(typeof clearTimeout==="function"){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){return setTimeout(fun,0)}if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0)}try{return cachedSetTimeout(fun,0)}catch(e){try{return cachedSetTimeout.call(null,fun,0)}catch(e){return cachedSetTimeout.call(this,fun,0)}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){return clearTimeout(marker)}if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker)}try{return cachedClearTimeout(marker)}catch(e){try{return cachedClearTimeout.call(null,marker)}catch(e){return cachedClearTimeout.call(this,marker)}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;runClearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title="browser";process.browser=true;process.env={};process.argv=[];process.version="";process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[]};process.binding=function(name){throw new Error("process.binding is not supported")};process.cwd=function(){return"/"};process.chdir=function(dir){throw new Error("process.chdir is not supported")};process.umask=function(){return 0};},{}],6:[function(require,module,exports){module.exports={name:"ejs",description:"Embedded JavaScript templates",keywords:["template","engine","ejs"],version:"3.1.8",author:"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",license:"Apache-2.0",bin:{ejs:"./bin/cli.js"},main:"./lib/ejs.js",jsdelivr:"ejs.min.js",unpkg:"ejs.min.js",repository:{type:"git",url:"git://github.com/mde/ejs.git"},bugs:"https://github.com/mde/ejs/issues",homepage:"https://github.com/mde/ejs",dependencies:{jake:"^10.8.5"},devDependencies:{browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^4.0.2","lru-cache":"^4.0.1",mocha:"^10.2.0","uglify-js":"^3.3.16"},engines:{node:">=0.10.0"},scripts:{test:"mocha -u tdd"}};},{}]},{},[1])(1)});

let tpl = Object.create(null);
tpl['form-error.html'] = '<div class="coreui-form__error alert alert-danger alert-dismissible fade show mb-3 <%= options.class %>">\n    <%- message %>\n    <% if (options.dismiss) { %>\n    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>\n    <% } %>\n</div>';
tpl['form-field-content.html'] = '<%- content %>';
tpl['form-field-group.html'] = '<div id="coreui-form-<%= id %>" class="coreui-form__group_container mb-3">\n    <div class="coreui-form__group_label pe-2">\n        <h6 class="coreui-form__field_label_text col-form-label-sm">\n            <%- group.label %>\n            <% if (group.showCollapsible) { %>\n                <button type="button" class="btn btn-sm btn-link btn-collapsible text-dark">\n                    <% if ( ! group.show) { %>\n                    <i class="bi bi-chevron-right"></i>\n                    <% } else { %>\n                    <i class="bi bi-chevron-down"></i>\n                    <% } %>\n                </button>\n            <% } %>\n        </h6>\n    </div>\n    <div class="coreui-form__group_content"<% if ( ! group.show) { %> style="display:none"<% } %>>\n        <%- content %>\n    </div>\n</div>';
tpl['form-field-label.html'] = '<div id="coreui-form-<%= id %>" class="coreui-form__field_container d-flex flex-column flex-md-row mb-3"\n     <% if ( ! field.show) { %> style="display:none"<% } %>>\n    <% if (field.labelWidth !== 0 && field.labelWidth !== \'0px\') { %>\n    <div class="coreui-form__field_label text-md-end text-sm-start pe-2"<% if (field.labelWidth) { %> style="min-width:<%= field.labelWidth %>;width:<%= field.labelWidth %>"<% } %>>\n        <div class="coreui-form__field_label_content col-form-label-sm">\n            <% if (field.required) { %>\n            <span class="coreui-form__field_label_req text-danger">*</span>\n            <% } %>\n            <span class="coreui-form__field_label_text fw-medium"><%- field.label %></span>\n        </div>\n\n        <% if (field.description) { %>\n        <div class="coreui-form__field_label_description text-muted">\n            <small><%- field.description %></small>\n        </div>\n        <% } %>\n    </div>\n    <% } %>\n    <div class="coreui-form__field_content flex-fill pt-1">\n        <div class="d-inline-block content-<%= hash %>">\n            <%- content %>\n        </div>\n\n        <% if (field.outContent) { %>\n        <span class="coreui-form__field-content-out d-inline-block align-top pt-1 ps-1">\n            <%- field.outContent %>\n        </span>\n        <% } %>\n\n        <% if (attachFields && attachFields.length > 0) { %>\n            <% $.each(attachFields, function(key, attachField) { %>\n                <div class="<% if (attachField.hasOwnProperty(\'direction\') && attachField.direction === \'column\') { %>d-block mt-2<% } else { %>d-inline-block<% } %> content-<%= attachField.hash %>">\n                    <%- attachField.content %>\n                </div>\n            <% }); %>\n        <% } %>\n    </div>\n</div>';
tpl['form.html'] = '<div id="coreui-form-<%= form.id %>" class="coreui-form mb-2"\n    <% if (widthSizes) { %>style="<%= widthSizes.join(\';\') %>"<% } %>>\n    <% if (form.title) { %>\n    <h5 class="mb-4"><%- form.title %></h5>\n    <% } %>\n\n    <form action="<%= form.send.url %>" method="<%= form.send.method %>"<%- formAttr %>>\n        <div class="coreui-form__fields d-flex justify-content-start flex-column flex-wrap">\n            <%- layout %>\n        </div>\n\n        <% if (controls) { %>\n        <div class="coreui-form__controls d-flex justify-content-start flex-sm-wrap flex-md-nowrap">\n            <% if (form.controlsOffset !== 0 && form.controlsOffset !== \'0px\') { %>\n            <div class="d-none d-md-block" style="width:<%= form.controlsOffset %>;min-width:<%= form.controlsOffset %>"></div>\n            <% } %>\n\n            <div class="d-flex justify-content-start flex-wrap gap-2">\n                <% $.each(controls, function(key, control) { %>\n                <div id="coreui-form-<%= form.id %>-control-<%= control.index %>" class="coreui-form__control_container"\n                     <% if ( ! control.show) { %>style="display:none"<% } %>>\n                    <%- control.content %>\n                </div>\n                <% }); %>\n            </div>\n        </div>\n        <% } %>\n    </form>\n</div>';
tpl['controls/button.html'] = '<button <%- render.attr %>><%- control.content %></button>';
tpl['controls/link.html'] = '<a href="<%- control.href %>"<%- render.attr %>><%- control.content %></a>';
tpl['fields/checkbox.html'] = '<% if (field.readonly) { %>\n    <%- render.selectedItems.join(\', \') %>\n<% } else { %>\n    <% $.each(render.options, function(key, option) { %>\n    <div class="form-check<% if (field.inline) { %> form-check-inline<% } %>">\n        <input <%- option.attr %>/>\n        <label class="form-check-label" for="<%= option.id %>"><%= option.text %></label>\n    </div>\n    <% }); %>\n<% } %>';
tpl['fields/color.html'] = '<% if (field.readonly) { %>\n    <div class="rounded-1" style="width: 14px;height: 14px;background-color: <%= value %>"></div>\n<% } else { %>\n    <input <%- render.attr %>/>\n\n    <% if (render.datalist.length > 0) { %>\n    <datalist id="<%= datalistId %>">\n        <% $.each(render.datalist, function(key, item) { %>\n        <option <%- item.attr %>/>\n        <% }); %>\n    </datalist>\n    <% } %>\n<% } %>';
tpl['fields/custom.html'] = '<%- content %>';
tpl['fields/dataset-row-readonly.html'] = '<tr class="coreui-form__field-dataset-item">\n    <% $.each(options, function(key, option) { %>\n        <td class="pe-2 pb-1">\n            <%- option.value %>\n        </td>\n    <% }); %>\n</tr>';
tpl['fields/dataset-row.html'] = '<tr class="coreui-form__field-dataset-item" id="dataset-item-<%= hashItem %>">\n    <% $.each(options, function(key, option) { %>\n        <td class="pe-1 pb-1">\n        <% if (option.type === \'select\') { %>\n            <select <%- option.attr %>>\n                <% $.each(option.items, function(key, item) { %>\n                <option <%- item.attr %>><%- item.title %></option>\n                <% }); %>\n            </select>\n        <% } else if (option.type === \'switch\') { %>\n            <div class="form-check form-switch">\n                <input <%- option.attr %>/>\n            </div>\n        <% } else { %>\n            <input <%- option.attr %>>\n        <% } %>\n        </td>\n    <% }); %>\n\n    <td class="pb-1">\n        <button type="button" class="btn btn-sm btn-link btn-dataset-remove" data-item-id="dataset-item-<%= hashItem %>">\n            <i class="bi bi-x text-muted"></i>\n        </button>\n    </td>\n</tr>';
tpl['fields/dataset.html'] = '<% if (field.readonly) { %>\n    <table class="coreui-form__field-dataset-container" <% if (render.rows.length == 0) { %> style="display:none"<% } %>>\n        <thead>\n            <tr>\n                <% $.each(render.headers, function(key, item) { %>\n                <td class="text-muted pe-2"><small><%= item.title %></small></td>\n                <% }); %>\n            </tr>\n        </thead>\n        <tbody class="coreui-form__field-dataset-list">\n            <% $.each(render.rows, function(key, row) { %>\n            <%- row %>\n            <% }); %>\n        </tbody>\n    </table>\n\n<% } else { %>\n    <table class="coreui-form__field-dataset-container" <% if (render.rows.length == 0) { %> style="display:none"<% } %>>\n        <thead>\n            <tr>\n                <% $.each(render.headers, function(key, item) { %>\n                <td class="text-muted"><small><%= item.title %></small></td>\n                <% }); %>\n                <td></td>\n            </tr>\n        </thead>\n        <tbody class="coreui-form__field-dataset-list">\n            <% $.each(render.rows, function(key, row) { %>\n                <%- row %>\n            <% }); %>\n        </tbody>\n    </table>\n\n    <button type="button" class="btn btn-sm btn-link btn-dataset-add"><%= lang.dataset_add %></button>\n<% } %>';
tpl['fields/hidden.html'] = '<% if ( ! field.readonly) { %>\n    <input <%- render.attr %>/>\n<% } %>';
tpl['fields/input.html'] = '<% if (field.readonly) { %>\n    <%- value %>\n<% } else { %>\n    <input <%- render.attr %>/>\n\n    <% if (render.datalist.length > 0) { %>\n    <datalist id="<%= datalistId %>">\n        <% $.each(render.datalist, function(key, item) { %>\n        <option <%- item.attr %>/>\n        <% }); %>\n    </datalist>\n    <% } %>\n<% } %>';
tpl['fields/modal-loading.html'] = '<div class="py-4 d-flex justify-content-center align-items-center gap-2">\n    <div class="spinner-border mr-2"></div> <%= lang.modal_loading %>\n</div>\n';
tpl['fields/modal.html'] = '<% if (field.readonly) { %>\n    <%= text %>\n<% } else { %>\n    <div class="input-group"<% if (render.width) { %> style="width:<%= render.width %>"<% } %>>\n        <input <%- render.attr %>/>\n        <input type="hidden" name="<%= field.name %>" value="<%= value %>" class="coreui-form-modal-value"/>\n        <% if ( ! field.required) { %>\n        <button class="btn btn-sm btn-outline-secondary btn-modal-clear border-secondary-subtle" type="button">\n            <i class="bi bi-x"></i>\n        </button>\n        <% } %>\n        <button class="btn btn-sm btn-outline-secondary btn-modal-select border-secondary-subtle" type="button"><%= lang.modal_select %></button>\n    </div>\n<% } %>';
tpl['fields/passwordRepeat.html'] = '<% if (field.readonly) { %>\n    <%- value %>\n<% } else { %>\n    <div class="d-flex gap-1 align-items-center">\n        <input <%- render.attr %>/>\n        <small class="password-text-repeat"><%= lang.repeat %></small>\n\n        <% if (field.showBtn) { %>\n            <div class="input-group flex-nowrap">\n                <input <%- render.attr2 %>/>\n                <button class="btn btn-sm btn-outline-secondary border-secondary-subtle btn-password-change" type="button"\n                        data-change="<%- lang.change %>" data-cancel="<%- lang.cancel %>"><%= btn_text %></button>\n            </div>\n        <% } else { %>\n            <input <%- render.attr2 %>/>\n        <% } %>\n\n    </div>\n<% } %>';
tpl['fields/radio.html'] = '<% if (field.readonly) { %>\n    <%- render.selectedItem %>\n<% } else { %>\n    <% $.each(render.options, function(key, option) { %>\n    <div class="form-check<% if (field.inline) { %> form-check-inline<% } %>">\n        <input <%- option.attr %>/>\n        <label class="form-check-label" for="<%= option.id %>"><%= option.text %></label>\n    </div>\n    <% }); %>\n<% } %>';
tpl['fields/select.html'] = '<% if (field.readonly) { %>\n    <%= render.selectedOptions.join(\', \') %>\n<% } else { %>\n    <select <%- render.attr %>>\n        <% $.each(render.options, function(key, option) { %>\n            <% if (option.type === \'group\') { %>\n                <optgroup<%- option.attr %>/>\n                <% $.each(option.options, function(key, groupOption) { %>\n                    <option <%- groupOption.attr %>/><%= groupOption.text %></option>\n                <% }); %>\n                </optgroup>\n            <% } else { %>\n            <option <%- option.attr %>/><%= option.text %></option>\n            <% } %>\n        <% }); %>\n    </select>\n<% } %>';
tpl['fields/switch.html'] = '<% if (field.readonly) { %>\n    <%= field.valueY == value ? lang.switch_yes : lang.switch_no %>\n<% } else { %>\n    <div class="form-check form-switch">\n        <input <%- render.attr %>/>\n    </div>\n<% } %>';
tpl['fields/textarea.html'] = '<% if (field.readonly) { %>\n    <%- value %>\n<% } else { %>\n    <textarea <%- render.attr %>><%- value %></textarea>\n<% } %>';
tpl['fields/wysiwyg.html'] = '<% if (field.readonly) { %>\n    <%- value %>\n<% } else { %>\n    <textarea name="<%= field.name %>" id="editor-<%= editorHash %>"><%- value %></textarea>\n<% } %>';

let coreuiFormUtils$1 = {

    /**
     * Получение значения поля
     * @param {coreuiFormInstance} form
     * @param {object}               fieldOptions
     * @returns {string|number|null}
     */
    getFieldValue: function (form, fieldOptions) {

        let formRecord = form.getRecord();

        if (fieldOptions &&
            formRecord &&
            typeof fieldOptions.name === 'string' &&
            typeof formRecord === 'object' &&
            formRecord.hasOwnProperty(fieldOptions.name) &&
            ['string', 'number', 'object'].indexOf(typeof formRecord[fieldOptions.name]) >= 0
        ) {
            return formRecord[fieldOptions.name];
        }

        return '';
    },


    /**
     * Получение функции из указанного текста
     * @param functionName
     * @param context
     * @returns {null|Window}
     * @private
     */
    getFunctionByName: function(functionName, context) {

        let namespaces = functionName.split(".");
        let func       = namespaces.pop();

        context = context || window;

        for (let i = 0; i < namespaces.length; i++) {
            if (context.hasOwnProperty(namespaces[i])) {
                context = context[namespaces[i]];
            } else {
                return null;
            }
        }

        if (typeof context[func] === 'function') {
            return context[func];
        }

        return null;
    },


    /**
     * Обработка полей в полях
     * @param form
     * @param defaultOptions
     * @param fieldOptions
     */
    mergeFieldOptions: function (form, defaultOptions, fieldOptions) {

        let options = $.extend(true, {}, defaultOptions);

        if (fieldOptions) {
            if (options.hasOwnProperty('attr') && typeof options.attr === 'object' &&
                fieldOptions.hasOwnProperty('attr') && typeof fieldOptions.attr === 'object'
            ) {
                fieldOptions.attr = this.mergeAttr(options.attr, fieldOptions.attr);
            }

            options = $.extend(true, {}, options, fieldOptions);
        }

        if (options.hasOwnProperty('width')) {
            if (options.width) {
                let unit = typeof options.width === 'number' ? 'px' : '';
                options.width = options.width + unit;

            } else if (form._options.fieldWidth && options.type !== 'color') {
                let unit = typeof form._options.fieldWidth === 'number' ? 'px' : '';
                options.width = form._options.fieldWidth + unit;
            }
        }

        if (options.hasOwnProperty('labelWidth')) {
            if (options.labelWidth >= 0 && options.labelWidth !== null) {
                let unit = typeof options.labelWidth === 'number' ? 'px' : '';
                options.labelWidth = options.labelWidth + unit;

            } else if (form._options.labelWidth) {
                let unit = typeof form._options.labelWidth === 'number' ? 'px' : '';
                options.labelWidth = form._options.labelWidth + unit;
            }
        }

        return options
    },


    /**
     * Объединение атрибутов
     * @param attr1
     * @param attr2
     * @returns {object}
     */
    mergeAttr: function (attr1, attr2) {

        let mergeAttr = Object.assign({}, attr1);

        if (typeof attr2 === 'object') {
            $.each(attr2, function (name, value) {
                if (mergeAttr.hasOwnProperty(name)) {
                    if (name === 'class') {
                        mergeAttr[name] += ' ' + value;

                    } else if (name === 'style') {
                        mergeAttr[name] += ';' + value;

                    } else {
                        mergeAttr[name] = value;
                    }

                } else {
                    mergeAttr[name] = value;
                }
            });
        }

        return mergeAttr;
    },


    /**
     * Инициализация и рендер дополнительных полей
     * @param {coreuiFormInstance} form
     * @param {object}               options
     * @returns {object}
     * @private
     */
    getAttacheFields: function(form, options) {

        let fields = [];

        if (typeof options === 'object' &&
            typeof(options.fields) === 'object' &&
            Array.isArray(options.fields)
        ) {
            $.each(options.fields, function (key, field) {
                let instance = form.initField(field);

                if (typeof instance !== 'object') {
                    return;
                }

                fields.push({
                    hash: instance._hash,
                    direction: options.hasOwnProperty('fieldsDirection') ? options.fieldsDirection : 'row',
                    content: instance.renderContent()
                });
            });
        }

        return fields;
    },


    /**
     * Форматирование даты
     * @param {string} value
     * @return {string}
     */
    formatDate: function (value) {

        if (value && value.length === 10) {
            let date  = new Date(value);
            let year  = date.getFullYear();
            let month = date.getMonth() + 1;
            let day   = date.getDate();

            day   = day < 10 ? '0' + day : day;
            month = month < 10 ? '0' + month : month;

            value = day + '.' + month + '.' + year;
        }

        return value;
    },


    /**
     * Форматирование даты со временем
     * @param {string} value
     * @return {string}
     */
    formatDateTime: function (value) {

        if (value && value.length >= 10) {
            let date  = new Date(value);
            let year  = date.getFullYear();
            let month = date.getMonth() + 1;
            let day   = date.getDate();
            let hour  = ("00" + date.getHours()).slice(-2);
            let min   = ("00" + date.getMinutes()).slice(-2);
            let sec   = ("00" + date.getSeconds()).slice(-2);

            day   = day < 10 ? '0' + day : day;
            month = month < 10 ? '0' + month : month;

            value = day + '.' + month + '.' + year + ' ' + hour + ':' + min + ':' + sec;
        }

        return value;
    },


    /**
     * Форматирование даты со временем
     * @param {string} value
     * @param {object} lang
     * @return {string}
     */
    formatDateMonth: function (value, lang) {

        if (value && value.length === 7) {
            let date  = new Date(value);
            let year  = date.getFullYear();
            let month = date.getMonth();

            let monthLang = lang.date_months.hasOwnProperty(month) ? lang.date_months[month] : '';

            value = monthLang + ' ' + year;
        }

        return value;
    },


    /**
     * Форматирование даты со временем
     * @param {string} value
     * @param {object} lang
     * @return {string}
     */
    formatDateWeek: function (value, lang) {

        if (value && value.length >= 7) {
            let year = value.substring(0, 4);
            let week = value.substring(6);

            value = year + ' ' + lang.date_week + ' ' + week;
        }

        return value;
    },


    /**
     * Проверка на число
     * @param num
     * @returns {boolean}
     * @private
     */
    isNumeric: function(num) {
        return (typeof(num) === 'number' || typeof(num) === "string" && num.trim() !== '') && ! isNaN(num);
    },


    /**
     * @returns {string}
     * @private
     */
    hashCode: function() {
        return this.crc32((new Date().getTime() + Math.random()).toString()).toString(16);
    },


    /**
     * Hash crc32
     * @param str
     * @returns {number}
     * @private
     */
    crc32: function (str) {

        for (var a, o = [], c = 0; c < 256; c++) {
            a = c;
            for (var f = 0; f < 8; f++) {
                a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
            }
            o[c] = a;
        }

        for (var n = -1, t = 0; t < str.length; t++) {
            n = n >>> 8 ^ o[255 & (n ^ str.charCodeAt(t))];
        }

        return (-1 ^ n) >>> 0;
    },


    /**
     * Округление
     * @param number
     * @param precision
     * @returns {number}
     */
    round: function (number, precision) {

        precision = typeof precision !== 'undefined' ? parseInt(precision) : 0;

        if (precision === 0) {
            return Math.round(number);

        } else if (precision > 0) {
            let pow = Math.pow(10, precision);
            return Math.round(number * pow) / pow;

        } else {
            let pow = Math.pow(10, precision);
            return Math.round(number / pow) * pow;
        }
    }
};

let coreuiFormInstance = {

    _options: {
        id: null,
        title: '',
        lang: 'en',
        send: {
            url: '',
            method: 'POST',
            format: 'form',
        },
        width: null,
        minWidth: null,
        maxWidth: null,
        labelWidth: 200,
        controlsOffset: null,
        readonly: false,
        validate: false,
        errorClass: '',
        layout: '[column_default]',
        onSubmit: null,
        record: {},
        fields: [],
        controls: []
    },

    _lock: false,
    _fieldsIndex: 0,
    _groupsIndex: 0,
    _controlsIndex: 0,
    _groups: [],
    _fields: [],
    _controls: [],
    _events: {},


    /**
     * Инициализация
     * @param {object} options
     * @private
     */
    _init: function (options) {

        this._options.labelWidth    = coreuiForm$1.getSetting('labelWidth');
        this._options.lang          = coreuiForm$1.getSetting('lang');
        this._options.errorClass    = coreuiForm$1.getSetting('errorClass');
        this._options.send.format = coreuiForm$1.getSetting('sendDataFormat');

        this._options = $.extend(true, {}, this._options, options);

        if ( ! this._options.id) {
            this._options.id = coreuiFormUtils$1.hashCode();
        }

        if (this._options.hasOwnProperty('labelWidth')) {
            if (this._options.labelWidth >= 0 && this._options.labelWidth !== null) {
                let unit = typeof this._options.labelWidth === 'number' ? 'px' : '';
                this._options.labelWidth = this._options.labelWidth + unit;
            }
        }

        if ( ! this._options.hasOwnProperty('controlsOffset') || this._options.controlsOffset === null) {
            this._options.controlsOffset = this._options.labelWidth;
        } else {
            if (this._options.controlsOffset >= 0) {
                let unit = typeof this._options.controlsOffset === 'number' ? 'px' : '';
                this._options.controlsOffset = this._options.controlsOffset + unit;
            }
        }
    },


    /**
     *
     */
    initEvents: function () {

        let that          = this;
        let formContainer = '#coreui-form-' + this._options.id + ' > form';

        $(formContainer).on('submit', function () {
            setTimeout(function () {
                that.send.apply(that);
            }, 0);
            return false;
        });

        this._trigger('shown.coreui.form');
    },


    /**
     * Получение id формы
     * @return {string|null}
     */
    getId: function () {

        return this._options.hasOwnProperty('id') ? this._options.id : null;
    },


    /**
     *
     * @param element
     * @returns {*}
     */
    render: function(element) {

        let that       = this;
        let widthSizes = [];
        let layout     = this._options.layout;
        let controls   = [];
        let formAttr   = [];



        if (this._options.width) {
            let unit = typeof this._options.width === 'number' ? 'px' : '';
            widthSizes.push('width:' + this._options.width + unit);
        }

        if (this._options.minWidth) {
            let unit = typeof this._options.minWidth === 'number' ? 'px' : '';
            widthSizes.push('min-width:' + this._options.minWidth + unit);
        }

        if (this._options.maxWidth) {
            let unit = typeof this._options.maxWidth === 'number' ? 'px' : '';
            widthSizes.push('max-width:' + this._options.maxWidth + unit);
        }



        // Поля
        if (typeof this._options.fields === 'object' &&
            Array.isArray(this._options.fields) &&
            this._options.fields.length > 0 &&
            layout &&
            typeof layout === 'string'
        ) {
            let matches        = Array.from(layout.matchAll(/\[column_([\w_\d]+)\]/g));
            let columns        = [];
            let columnsContent = {};

            if (matches.length > 0) {
                $.each(matches, function (key, match) {
                    columns.push(match[1]);
                });
            }

            if (columns.length > 0) {
                $.each(this._options.fields, function (key, field) {
                    let column = field.hasOwnProperty('column') && (typeof field.column === 'string' || typeof field.column === 'number')
                        ? (columns.indexOf(field.column) >= 0 ? field.column : null)
                        : 'default';

                    if (typeof column !== 'string') {
                        return;
                    }

                    let type     = field.hasOwnProperty('type') && typeof field.type === 'string' ? field.type : '';
                    let instance = null;

                    if (type === 'group') {
                        instance = that.initGroup(field);

                    } else {
                        instance = that.initField(field);
                    }


                    if ( ! instance || typeof instance !== 'object') {
                        return;
                    }

                    if ( ! columnsContent.hasOwnProperty(column)) {
                        columnsContent[column] = [];
                    }
                    columnsContent[column].push(instance.render());
                });
            }

            if (Object.keys(columnsContent).length >= 0) {
                $.each(columnsContent, function (name, fieldContents) {

                    layout = layout.replace('[column_' + name + ']', fieldContents.join(''));
                });
            }
        }


        // Элементы управления
        if (typeof this._options.controls === 'object' &&
            Array.isArray(this._options.controls) &&
            this._options.controls.length > 0
        ) {
            $.each(this._options.controls, function (key, control) {
                let instance = that.initControl(control);

                if ( ! instance || typeof instance !== 'object') {
                    return;
                }

                controls.push({
                    show: ! control.hasOwnProperty('show') || control.show,
                    index: that._controlsIndex - 1,
                    content: instance.render()
                });
            });
        }

        if (typeof this._options.validate === 'boolean' && this._options.validate) {
            formAttr.push('novalidate');
        }


        let html = ejs.render(tpl['form.html'], {
            form: this._options,
            formAttr: formAttr ? ' ' + formAttr.join(' ') : '',
            widthSizes: widthSizes,
            layout: layout,
            controls: controls,
        });

        if (element === undefined) {
            return html;
        }

        // Dom element
        let domElement = {};

        if (typeof element === 'string') {
            domElement = document.getElementById(element);

            if ( ! domElement) {
                return '';
            }

        } else if (element instanceof HTMLElement) {
            domElement = element;
        }


        domElement.innerHTML = html;

        this.initEvents();
    },


    /**
     *
     */
    lock: function () {

        this._lock = true;

        $.each(this._controls, function (key, control) {
            let controlOptions = control.getOptions();

            if (controlOptions.hasOwnProperty('type') && controlOptions.type === 'submit') {
                control.lock();
            }
        });
    },


    /**
     * Разблокировка
     */
    unlock: function () {

        this._lock = false;

        $.each(this._controls, function (key, control) {
            let controlOptions = control.getOptions();

            if (controlOptions.hasOwnProperty('type') && controlOptions.type === 'submit') {
                control.unlock();
            }
        });
    },


    /**
     * Отправка данных формы
     */
    send: function () {

        if (this._lock) {
            return;
        }


        if (typeof this._options.validate === 'boolean' && this._options.validate) {
            let isValid = this.validate();

            if ( ! isValid) {
                return;
            }
        }


        let onsubmit = null;
        let data     = this.getData();

        if (typeof this._options.onSubmit === 'function') {
            onsubmit = this._options.onSubmit;

        } else if (typeof this._options.onSubmit === 'string' && this._options.onSubmit) {
            let func = coreuiFormUtils$1.getFunctionByName(this._options.onSubmit);

            if (typeof func === 'function') {
                onsubmit = func;
            } else if (typeof this._options.onSubmit === 'string') {
                let onSubmitText = this._options.onSubmit;

                onsubmit = function(form, data) {
                    try {
                        eval(onSubmitText);
                    } catch (e) {
                        throw Error('Incorrect onSubmit param: ' + e.message)
                    }
                };
            }
        }

        if (typeof onsubmit === 'function') {
            let onSubmitResult = onsubmit(this, data);

            if (onSubmitResult === false) {
                return;
            }
        }


        let results    = this._trigger('send.coreui.form', this, [ this, data ]);
        let isStopSend = false;

        $.each(results, function(key, result) {
            if (result === false) {
                isStopSend = true;
                return false;
            }
        });

        if (isStopSend) {
            return;
        }


        this.lock();

        let that       = this;
        let sendFormat = ['form', 'json'].indexOf(this._options.send.format) >= 0
            ? this._options.send.format
            : 'form';

        let dataFormat  = null;
        let contentType = null;

        if (sendFormat === 'json') {
            contentType = "application/json; charset=utf-8";
            dataFormat  = JSON.stringify(data);

        } else {
            contentType = false;
            dataFormat  = new FormData();

            $.each(data, function (name, value) {
                if (value instanceof File) {
                    dataFormat.append(name, value, value.name);

                } else if (value instanceof FileList) {
                    $.each(value, function (key, file) {
                        dataFormat.append(name, file, file.name);
                    });

                } else {
                    dataFormat.append(name, value);
                }
            });
        }


        $.ajax({
            url: this._options.send.url,
            method: this._options.send.method,
            data: dataFormat,
            contentType: contentType,
            processData: false,
            beforeSend: function(xhr) {
                that._trigger('start-send.coreui.form', that, [ that, xhr ]);
            },
            success: function (result) {
                that.hideError();

                that._trigger('success-send.coreui.form', that, [ that, result ]);

                let jsonResponse = null;

                try {
                    let parsedResponse = JSON.parse(result);
                    if (typeof parsedResponse === 'object' &&
                        parsedResponse !== null &&
                        ! Array.isArray(parsedResponse)
                    ) {
                        jsonResponse = parsedResponse;
                    }

                } catch (e) {
                    // ignore
                }

                if (jsonResponse !== null && typeof jsonResponse === 'object') {
                    if (jsonResponse.hasOwnProperty('scripts') &&
                        Array.isArray(jsonResponse.scripts)
                    ) {
                        $.each(jsonResponse.scripts, function (key, script) {
                            if (typeof script === 'string') {
                                let func = coreuiFormUtils$1.getFunctionByName(script);

                                if (typeof func === 'function') {
                                    func();
                                } else {
                                    eval(script);
                                }
                            }
                        });
                    }

                    if (jsonResponse.hasOwnProperty('loadUrl') &&
                        typeof jsonResponse.loadUrl === 'string'
                    ) {
                        location.href = jsonResponse.loadUrl;
                    }
                }
            },
            error: function(xhr, textStatus, errorThrown) {
                let errorMessage = that.getLang().send_error || '';
                let data         = {};

                try {
                    let parsedResponse = JSON.parse(xhr.responseText);
                    if (typeof parsedResponse === 'object' &&
                        parsedResponse !== null &&
                        ! Array.isArray(parsedResponse)
                    ) {
                        data = parsedResponse;
                    }

                } catch (e) {
                    // ignore
                }

                if (data.hasOwnProperty('error_message') &&
                    typeof data.error_message === 'string' &&
                    data.error_message !== ''
                ) {
                    errorMessage = data.error_message;
                }

                that.showError(errorMessage);
                that._trigger('error-send.coreui.form', that, [ that, xhr, textStatus, errorThrown ]);
            },
            complete: function(xhr, textStatus) {
                that.unlock();
                that._trigger('end-send.coreui.form', that, [ that, xhr, textStatus ]);
            },
        });
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return this._options;
    },


    /**
     * Получение записи
     * @returns {object}
     */
    getRecord: function () {

        if (this._options.hasOwnProperty('record') && typeof this._options.record === 'object') {
            return this._options.record;
        }

        return {};
    },


    /**
     * Получение данных с формы
     * @returns {object}
     */
    getData: function () {

        let data = {};

        $.each(this._fields, function (key, field) {
            let fieldOptions = field.getOptions();

            if (fieldOptions.hasOwnProperty('name') && fieldOptions.name) {
                data[fieldOptions.name] = field.getValue();
            }
        });

        return data;
    },


    /**
     * Получение полей
     * @returns {object}
     */
    getFields: function () {
        return this._fields;
    },


    /**
     * Получение элементов управления
     * @returns {object}
     */
    getControls: function () {
        return this._controls;
    },


    /**
     * Получение групп полей
     * @returns {object}
     */
    getGroups: function () {
        return this._groups;
    },


    /**
     * Получение поля
     * @param {string} name
     * @returns {object}
     */
    getField: function (name) {

        let field = {};

        $.each(this._fields, function (key, fieldInstance) {
            let fieldOptions = fieldInstance.getOptions();

            if (fieldOptions.hasOwnProperty('name') && fieldOptions.name === name) {
                field = fieldInstance;
            }
        });

        return field;
    },


    /**
     * Смена состояний полей формы
     */
    readonly: function (isReadonly) {

        $.each(this._fields, function (key, fieldInstance) {
            fieldInstance.readonly(isReadonly);
        });


        $.each(this._controls, function (key, control) {
            let controlOptions = control.getOptions();

            if (controlOptions.hasOwnProperty('type') && controlOptions.type === 'submit') {
                if (isReadonly) {
                    control.hide();
                } else {
                    control.show();
                }
            }
        });
    },


    /**
     * Показ всех элементов управления
     */
    showControls: function () {

        $.each(this._controls, function (key, control) {
            control.show();
        });
    },


    /**
     * Скрытие всех элементов управления
     */
    hideControls: function () {

        $.each(this._controls, function (key, control) {
            control.hide();
        });
    },


    /**
     * Валидация полей
     * @return {boolean}
     */
    validate: function () {

        let isValid = true;

        $.each(this._fields, function (key, field) {

            if (field.isValid() === false) {
                field.validate(false);
                isValid = false;

            } else {
                field.validate(null);
            }
        });

        return isValid;
    },


    /**
     * Показ сообщения с ошибкой
     * @param {string} message
     * @param {object} options
     */
    showError: function (message, options) {

        let formContainer = $('#coreui-form-' + this._options.id + ' > form');
        let formError     = formContainer.find('> .coreui-form__error');

        if (formError[0]) {
            formError.remove();
        }

        options = typeof options === 'object' && ! Array.isArray(options) && options !== null ? options : {};

        if (typeof this._options.errorClass === 'string' && this._options.errorClass !== '') {
            options.class = options.hasOwnProperty('class') ? options.class : '';
            options.class += ' ' + this._options.errorClass;
        }

        let errorOptions = {
            class:   options.hasOwnProperty('class') && typeof options.class === 'string' ? options.class : '',
            dismiss: options.hasOwnProperty('dismiss') ? !! options.dismiss : true,
        };

        formContainer.prepend(
            ejs.render(tpl['form-error.html'], {
                message: message,
                options: errorOptions,
            })
        );


        if ( ! options.hasOwnProperty('scroll') || options.scroll) {
            let scrollOffset = coreuiForm$1.getSetting('errorMessageScrollOffset');

            $('html,body').animate({
                scrollTop : formContainer.offset().top - scrollOffset
            }, 'fast');
        }
    },


    /**
     * Скрытие сообщения с ошибкой
     */
    hideError: function () {

        $('#coreui-form-' + this._options.id + ' > form > .coreui-form__error').remove();
    },


    /**
     * @param eventName
     * @param callback
     * @param context
     * @param singleExec
     */
    on: function(eventName, callback, context, singleExec) {
        if (typeof this._events[eventName] !== 'object') {
            this._events[eventName] = [];
        }
        this._events[eventName].push({
            context : context || this,
            callback: callback,
            singleExec: !! singleExec,
        });
    },


    /**
     * Удаление формы
     */
    destruct: function () {

        $('#coreui-form-' + this._options.id).remove();
        delete coreuiForm$1._instances[this.getId()];
    },


    /**
     * Инициализация поля
     * @param field
     * @return {object|null}
     * @private
     */
    initField: function (field) {

        if (typeof field !== 'object') {
            return null;
        }

        let type = field.hasOwnProperty('type') && typeof field.type === 'string' ? field.type : 'input';

        if (type === 'group') {
            return null;
        }

        if ( ! coreuiForm$1.fields.hasOwnProperty(type)) {
            type = 'input';
        }

        if (this._options.readonly) {
            field.readonly = true;
        }


        let fieldInstance = $.extend(true, {
            render:        function () {},
            renderContent: function () {},
            init:          function () {},
            getValue:      function () {},
            setValue:      function () {},
            getOptions:    function () {},
            show:          function () {},
            hide:          function () {},
            readonly:      function () {},
            validate:      function () {},
            isValid:       function () {},
        }, coreuiForm$1.fields[type]);

        fieldInstance.init(this, field, this._fieldsIndex++);

        this._fields.push(fieldInstance);

        return fieldInstance;
    },


    /**
     * Инициализация группы
     * @param group
     * @return {object|null}
     * @private
     */
    initGroup: function (group) {

        if (typeof group !== 'object') {
            return null;
        }

        let type = group.hasOwnProperty('type') && typeof group.type === 'string' ? group.type : '';

        if (type !== 'group') {
            return null;
        }

        let groupInstance = $.extend(true, {
            render:     function () {},
            init:       function () {},
            getOptions: function () {},
            expand:     function () {},
            collapse:   function () {},
        }, coreuiForm$1.fields[type]);

        groupInstance.init(this, group, this._groupsIndex++);

        this._groups.push(groupInstance);

        return groupInstance;
    },


    /**
     * Инициализация контролов
     * @param control
     * @return {object|null}
     * @private
     */
    initControl: function (control) {

        if (typeof control !== 'object') {
            return null;
        }

        let type = control.hasOwnProperty('type') && typeof control.type === 'string' ? control.type : null;

        if ( ! type || ! coreuiForm$1.controls.hasOwnProperty(type)) {
            return null;
        }

        if (type === 'submit' && this._options.readonly) {
            control.show = false;
        }


        let controlInstance = $.extend(true, {
            render:     function () {},
            init:       function () {},
            getOptions: function () {},
            show:       function () {},
            hide:       function () {},
        }, coreuiForm$1.controls[type]);

        controlInstance.init(this, control, this._controlsIndex++);

        this._controls.push(controlInstance);

        return controlInstance;
    },


    /**
     * Получение настроек языка
     * @private
     */
    getLang: function () {

        return coreuiForm$1.lang.hasOwnProperty(this._options.lang)
            ? coreuiForm$1.lang[this._options.lang]
            : coreuiForm$1.lang['ru'];
    },


    /**
     * @param name
     * @param context
     * @param params
     * @return {object}
     * @private
     */
    _trigger: function(name, context, params) {

        params = params || [];
        let results = [];

        if (this._events[name] instanceof Object && this._events[name].length > 0) {
            for (var i = 0; i < this._events[name].length; i++) {
                let callback = this._events[name][i].callback;

                context = context || this._events[name][i].context;

                results.push(
                    callback.apply(context, params)
                );

                if (this._events[name][i].singleExec) {
                    this._events[name].splice(i, 1);
                }
            }
        }

        return results;
    },


    /**
     * @param {object} control
     * @return {string}
     * @private
     */
    _renderControl: function (control) {

        let content = '';
        let type    = control.hasOwnProperty('type') && typeof control.type === 'string' ? control.type : 'text';

        if (coreuiForm$1.control.hasOwnProperty(type)) {
            content = coreuiForm$1.control[type].render(control);
        }

        return content;
    }
};

var coreuiForm$1 = {

    lang: {},
    fields: {},
    controls: {},

    _instances: {},
    _settings: {
        labelWidth: 200,
        lang: 'en',
        class: '',
        sendDataFormat: 'form',
        errorMessageScrollOffset: 70
    },


    /**
     * Создание экземпляра формы
     * @param {object} options
     * @returns {coreuiFormInstance}
     */
    create: function (options) {

        let instance = $.extend(true, {}, coreuiFormInstance);
        instance._init(options instanceof Object ? options : {});

        let formId = instance.getId();
        this._instances[formId] = instance;

        return instance;
    },


    /**
     * Получение экземпляра формы по id
     * @param {string} id
     * @returns {coreuiFormInstance|null}
     */
    get: function (id) {

        if ( ! this._instances.hasOwnProperty(id)) {
            return null;
        }

        if ($('#coreui-form-' + this._instances[id])[0]) {
            delete this._instances[id];
            return null;
        }

        return this._instances[id];
    },


    /**
     * Установка настроек
     * @param {object} settings
     */
    setSettings: function(settings) {

        this._settings = $.extend({}, this._settings, settings);
    },


    /**
     * Получение значения настройки
     * @param {string} name
     */
    getSetting: function(name) {

        let value = null;

        if (this._settings.hasOwnProperty(name)) {
            value = this._settings[name];
        }

        return value;
    }
};

coreuiForm$1.lang.ru = {
    "modal_select": "Выбрать",
    "modal_loading": "Загрузка...",
    "switch_yes": "Да",
    "switch_no": "Нет",
    "dataset_add": "Добавить",
    "date_months": ['Январь','Февраль','Март','Апрель','Май','Июнь', 'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    "date_week": "неделя",
    "send_error": "Произошла ошибка. Попробуйте снова или обратитесь к администратору",
    "required_field": "Обязательное поле",
    "repeat": "повторите",
    "change": "изменить",
    "cancel": "отмена"
};

coreuiForm$1.lang.en = {
    "modal_select": "Select",
    "modal_loading": "Loading...",
    "switch_yes": "Yes",
    "switch_no": "No",
    "dataset_add": "Add",
    "date_months": [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
    "date_week": "week",
    "send_error": "An error has occurred. Please try again or contact your administrator",
    "required_field": "Required field",
    "repeat": "repeat",
    "change": "change",
    "cancel": "cancel"
};

coreuiForm$1.controls.button = {

    _form: null,
    _index: null,
    _options: {
        type: 'button',
        href: null,
        content: null,
        onClick: null,
        attr: {
            class: 'btn btn-sm btn-secondary'
        }
    },


    /**
     * Инициализация
     * @param {coreuiFormInstance} form
     * @param {object} options
     * @param {int} index
     */
    init: function (form, options, index) {

        this._options = $.extend({}, this._options, options);
        this._form    = form;
        this._index   = index;
        let that      = this;

        form.on('shown.coreui.form', function () {
            that._initEvents();
        });
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return $.extend(true, {}, this._options);
    },


    /**
     * Формирование контента для размещения на странице
     * @returns {string}
     */
    render: function() {

        let attributes = [];
        let options    = this.getOptions();

        options.attr.type = 'button';

        $.each(options.attr, function (name, value) {
            attributes.push(name + '="' + value + '"');
        });

        return ejs.render(tpl['controls/button.html'], {
            control: this._options,
            render: {
                attr: attributes.length > 0 ? (' ' + attributes.join(' ')) : '',
            },
        });
    },


    /**
     * Показ контрола
     * @param {int} duration
     */
    show: function (duration) {

        $('#coreui-form-' + this._form.getId() + '-control-' + this._index).show(duration || 0);
    },


    /**
     * Скрытие контрола
     * @param {int} duration
     */
    hide: function (duration) {

        $('#coreui-form-' + this._form.getId() + '-control-' + this._index).hide(duration || 0);
    },


    /**
     *
     */
    lock: function () {

        let button = $('#coreui-form-' + this._form.getId() + '-control-' + this._index + ' > button');

        if ( ! button.find('.spinner-border')[0]) {
            button.prepend('<span class="spinner-border spinner-border-sm"></span> ');
        }
        if ( ! button.attr('disabled')) {
            button.attr('disabled', 'disabled');
        }
    },


    /**
     * Инициализация событий связанных с элементом управления
     */
    _initEvents: function () {

        let that = this;

        if (['function', 'string'].indexOf(typeof this._options.onClick) >= 0) {
            $('#coreui-form-' + this._form.getId() + '-control-' + this._index + ' > button')
                .click(function (event) {

                    if (typeof that._options.onClick === 'function') {
                        that._options.onClick(that._form, event);
                    } else {
                        let callback = coreuiFormUtils$1.getFunctionByName(that._options.onClick);

                        if (typeof callback === 'function') {
                            callback(that._form, event);
                        } else {
                            eval(that._options.onClick);
                        }
                    }
                });
        }
    }
};

coreuiForm$1.controls.custom = {

    _form: null,
    _index: null,
    _options: {
        type: 'custom',
        content: null
    },


    /**
     * Инициализация
     * @param {coreuiFormInstance} form
     * @param {object} options
     * @param {int} index
     */
    init: function (form, options, index) {

        this._options = $.extend({}, this._options, options);
        this._form   = form;
        this._index   = index;
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return $.extend(true, {}, this._options);
    },


    /**
     * Показ контрола
     * @param {int} duration
     */
    show: function (duration) {

        $('#coreui-form-' + form.getId() + '-control-' + this._index).show(duration || 0);
    },


    /**
     * Скрытие контрола
     * @param {int} duration
     */
    hide: function (duration) {

        $('#coreui-form-' + form.getId() + '-control-' + this._index).hide(duration || 0);
    },


    /**
     * Формирование контента для размещения на странице
     * @returns {string}
     */
    render: function() {

        return this._options.content;
    }
};

coreuiForm$1.controls.link = {

    _form: null,
    _index: null,
    _options: {
        type: 'link',
        href: null,
        content: null,
        onClick: null,
        attr: {
            class: 'btn btn-sm btn-link'
        }
    },


    /**
     * Инициализация
     * @param {coreuiFormInstance} form
     * @param {object} options
     * @param {int} index
     */
    init: function (form, options, index) {

        this._options = $.extend({}, this._options, options);
        this._form    = form;
        this._index   = index;
        let that      = this;

        form.on('shown.coreui.form', function () {
            that._initEvents();
        });
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return $.extend(true, {}, this._options);
    },


    /**
     * Показ контрола
     * @param {int} duration
     */
    show: function (duration) {

        $('#coreui-form-' + this._form.getId() + '-control-' + this._index).show(duration || 0);
    },


    /**
     * Скрытие контрола
     * @param {int} duration
     */
    hide: function (duration) {

        $('#coreui-form-' + this._form.getId() + '-control-' + this._index).hide(duration || 0);
    },


    /**
     *
     */
    lock: function () {

        let button = $('#coreui-form-' + this._form.getId() + '-control-' + this._index + ' > button');

        if ( ! button.find('.spinner-border')[0]) {
            button.prepend('<span class="spinner-border spinner-border-sm"></span> ');
        }
        if ( ! button.attr('disabled')) {
            button.attr('disabled', 'disabled');
        }
    },


    /**
     * Формирование контента для размещения на странице
     * @returns {string}
     */
    render: function() {

        let attributes = [];
        let options    = this.getOptions();

        $.each(options.attr, function (name, value) {
            attributes.push(name + '="' + value + '"');
        });

        return ejs.render(tpl['controls/link.html'], {
            control: this._options,
            render: {
                attr: attributes.length > 0 ? (' ' + attributes.join(' ')) : '',
            },
        });
    },


    /**
     * Инициализация событий связанных с элементом управления
     */
    _initEvents: function () {

        let that = this;

        if (['function', 'string'].indexOf(typeof this._options.onClick) >= 0) {
            $('#coreui-form-' + this._form.getId() + '-control-' + this._index + ' > a')
                .click(function (event) {

                    if (typeof that._options.onClick === 'function') {
                        that._options.onClick(that._form, event);
                    } else {
                        let callback = coreuiFormUtils.getFunctionByName(that._options.onClick);

                        if (typeof callback === 'function') {
                            callback(that._form, event);
                        } else {
                            eval(that._options.onClick);
                        }
                    }
                });
        }
    }
};

coreuiForm$1.controls.submit = {

    _form: null,
    _index: null,
    _options: {
        type: 'submit',
        href: null,
        content: null,
        onClick: null,
        show: true,
        attr: {
            class: 'btn btn-sm btn-primary'
        }
    },


    /**
     * Инициализация
     * @param {coreuiFormInstance} form
     * @param {object} options
     * @param {int} index
     */
    init: function (form, options, index) {

        this._options = $.extend({}, this._options, options);
        this._form    = form;
        this._index   = index;
        let that      = this;

        form.on('shown.coreui.form', function () {
            that._initEvents();
        });
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return $.extend(true, {}, this._options);
    },


    /**
     * Показ контрола
     * @param {int} duration
     */
    show: function (duration) {

        $('#coreui-form-' + this._form.getId() + '-control-' + this._index).show(duration || 0);
    },


    /**
     * Скрытие контрола
     * @param {int} duration
     */
    hide: function (duration) {

        $('#coreui-form-' + this._form.getId() + '-control-' + this._index).hide(duration || 0);
    },


    /**
     *
     */
    lock: function () {

        let button = $('#coreui-form-' + this._form.getId() + '-control-' + this._index + ' > button');

        if ( ! button.find('.spinner-border')[0]) {
            button.prepend('<span class="spinner-border spinner-border-sm"></span> ');
        }
        if ( ! button.attr('disabled')) {
            button.attr('disabled', 'disabled');
        }
    },


    /**
     *
     */
    unlock: function () {

        let button = $('#coreui-form-' + this._form.getId() + '-control-' + this._index + ' > button');

        button.find('.spinner-border').remove();
        button.removeAttr('disabled');
    },


    /**
     * Формирование контента для размещения на странице
     * @returns {string}
     */
    render: function() {

        let attributes = [];
        let options    = this.getOptions();

        options.attr.type = 'submit';

        $.each(options.attr, function (name, value) {
            attributes.push(name + '="' + value + '"');
        });

        return ejs.render(tpl['controls/button.html'], {
            control: this._options,
            render: {
                attr: attributes.length > 0 ? (' ' + attributes.join(' ')) : '',
            },
        });
    },


    /**
     * Инициализация событий связанных с элементом управления
     */
    _initEvents: function () {

        let that = this;

        if (['function', 'string'].indexOf(typeof this._options.onClick) >= 0) {
            $('#coreui-form-' + this._form.getId() + '-control-' + this._index + ' > button')
                .click(function (event) {

                    if (typeof that._options.onClick === 'function') {
                        that._options.onClick(that._form, event);
                    } else {
                        let callback = coreuiFormUtils.getFunctionByName(that._options.onClick);

                        if (typeof callback === 'function') {
                            callback(that._form, event);
                        } else {
                            eval(that._options.onClick);
                        }
                    }
                });
        }
    }
};

coreuiForm$1.fields.checkbox = {

    _id: '',
    _hash: '',
    _form: null,
    _index: 0,
    _value: [],
    _options: {
        type: 'checkbox',
        name: null,
        label: null,
        labelWidth: null,
        inline: false,
        outContent: null,
        description: null,
        errorText: null,
        options: [],
        fields: null,
        required: null,
        readonly: null,
        show: true,
        column: null
    },


    /**
     * Инициализация
     * @param {coreuiFormInstance} form
     * @param {object}             options
     * @param {int}                index Порядковый номер на форме
     */
    init: function (form, options, index) {

        this._form    = form;
        this._id      = form.getId() + "-field-" + (options.hasOwnProperty('name') ? options.name : index);
        this._hash    = coreuiFormUtils$1.hashCode();
        this._value   = coreuiFormUtils$1.getFieldValue(form, options);
        this._options = coreuiFormUtils$1.mergeFieldOptions(form, this._options, options);
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return $.extend(true, {}, this._options);
    },


    /**
     * Изменение режима поля только для чтения
     * @param {bool} isReadonly
     */
    readonly: function (isReadonly) {

        this._value            = this.getValue();
        this._options.readonly = !! isReadonly;

        $('.content-' + this._hash).html(
            this.renderContent()
        );
    },


    /**
     * Скрытие поля
     * @param {int} duration
     */
    hide: function (duration) {

        $('#coreui-form-' + this._id).hide(duration);
    },


    /**
     * Показ поля
     * @param {int} duration
     */
    show: function (duration) {

        $('#coreui-form-' + this._id).show(duration);
    },


    /**
     * Получение значения в поле
     * @returns {object}
     */
    getValue: function () {

        if (this._options.readonly) {
            return this._value;

        } else {
            let values = [];

            $('.content-' + this._hash + ' input[type=checkbox]:checked').each(function () {
                values.push($(this).val());
            });

            return values;
        }
    },


    /**
     * Установка значений в поле
     * @param {object|null|string|number} value
     */
    setValue: function (value) {

        if (['string', 'number', 'object'].indexOf(typeof value) < 0) {
            return;
        }

        if (typeof value === 'object') {
            if (value !== null && ! Array.isArray(value)) {
                return;
            }

        } else {
            value = [ value ];
        }

        let that    = this;
        this._value = [];

        if (this._options.readonly) {
            $('.content-' + that._hash).empty();

            let fieldOptions = this.getOptions();

            if (fieldOptions.hasOwnProperty('options') &&
                typeof fieldOptions.options === 'object' &&
                Array.isArray(fieldOptions.options) &&
                Array.isArray(value)
            ) {
                let selectedItems = [];

                $.each(fieldOptions.options, function (key, option) {

                    if (option.hasOwnProperty('value')) {
                        $.each(value, function (key, val) {

                            if (option.value == val) {
                                if (option.hasOwnProperty('text') && ['string', 'number'].indexOf(typeof(option.text)) >= 0) {
                                    selectedItems.push(option.text);
                                }

                                that._value.push(val);
                                return false;
                            }
                        });
                    }
                });


                $('.content-' + that._hash).text(selectedItems.join(', '));
            }

        } else {
            $('.content-' + this._hash + ' input[type=radio]').prop('checked', false);

            if (Array.isArray(value)) {
                $('.content-' + this._hash + ' input[type=radio]').each(function (key, itemValue) {
                    $.each(value, function (key, val) {
                        if (val == $(itemValue).val()) {
                            $(itemValue).prop('checked', true);
                            that._value.push(val);

                            return false;
                        }
                    });
                });
            }
        }
    },


    /**
     * Установка валидности поля
     * @param {bool|null} isValid
     * @param {text} text
     */
    validate: function (isValid, text) {

        if (this._options.readonly) {
            return;
        }

        let container = $('.content-' + this._hash);
        let lastInput = $('.form-check:last-child', container);
        let inputs    = $('input', container);

        container.find('.valid-feedback').remove();
        container.find('.invalid-feedback').remove();

        if (isValid === null) {
            inputs.removeClass('is-invalid');
            inputs.removeClass('is-valid');

        } else if (isValid) {
            inputs.removeClass('is-invalid');
            inputs.addClass('is-valid');

            if (typeof text === 'undefined' && typeof this._options.validText === 'string') {
                text = this._options.validText;
            }

            if (typeof text === 'string') {
                lastInput.append('<div class="valid-feedback">' + text + '</div>');
            }

        } else {
            inputs.removeClass('is-valid');
            inputs.addClass('is-invalid');

            if (typeof text === 'undefined') {
                if (typeof this._options.invalidText === 'string') {
                    text = this._options.invalidText;

                } else if ( ! text && this._options.required) {
                    text = this._form.getLang().required_field;
                }
            }

            if (typeof text === 'string') {
                lastInput.append('<div class="invalid-feedback">' + text + '</div>');
            }
        }
    },


    /**
     * Проверка валидности поля
     * @return {boolean}
     */
    isValid: function () {

        if (this._options.required && ! this._options.readonly) {
            return this.getValue().length > 0;
        }

        return true;
    },


    /**
     * Формирование поля
     * @returns {string}
     */
    render: function() {

        let options      = this.getOptions();
        let attachFields = coreuiFormUtils$1.getAttacheFields(this._form, options);

        return ejs.render(tpl['form-field-label.html'], {
            id: this._id,
            form:  this._form,
            hash: this._hash,
            field: this._options,
            content: this.renderContent(),
            attachFields: attachFields,
        });
    },


    /**
     * Формирование контента поля
     * @return {*}
     */
    renderContent: function () {

        let that            = this;
        let checkboxOptions = [];
        let fieldOptions    = this.getOptions();
        let selectedItems   = [];

        if (fieldOptions.hasOwnProperty('options') &&
            typeof fieldOptions.options === 'object' &&
            Array.isArray(fieldOptions.options)
        ) {
            $.each(fieldOptions.options, function (key, option) {
                let attributes = [];
                let itemAttr = {
                    type: 'checkbox',
                    class: 'form-check-input'
                };
                let optionText = option.hasOwnProperty('text') && ['string', 'number'].indexOf(typeof(option.text)) >= 0
                    ? option.text
                    : '';

                if (fieldOptions.name) {
                    itemAttr.name = that._options.name;
                }

                if (fieldOptions.required) {
                    itemAttr.required = 'required';
                }

                $.each(option, function (name, value) {
                    if (name !== 'text') {
                        if (name === 'class') {
                            itemAttr[name] = itemAttr[name] + ' ' + value;
                        } else {
                            itemAttr[name] = value;
                        }
                    }
                });

                itemAttr.id = coreuiFormUtils$1.hashCode();

                if (typeof(that._value) === 'object' &&
                    Array.isArray(that._value)
                ) {
                    $.each(that._value, function (key, itemValue) {
                        if (itemValue == option.value) {
                            itemAttr.checked = 'checked';
                            if (option.hasOwnProperty('text') && option.text) {
                                selectedItems.push(option.text);
                            }
                            return false;
                        }
                    });

                } else if (that._value == option.value) {
                    if (option.hasOwnProperty('text') && option.text) {
                        selectedItems.push(option.text);
                    }
                    itemAttr.checked = 'checked';
                }

                $.each(itemAttr, function (name, value) {
                    attributes.push(name + '="' + value + '"');
                });


                checkboxOptions.push({
                    id: itemAttr.id,
                    text: optionText,
                    attr: attributes.length > 0 ? (' ' + attributes.join(' ')) : ''
                });
            });
        }

        let value = typeof this._value === 'object' && Array.isArray(this._value)
            ? this._value.join(', ')
            : this._value;

        return ejs.render(tpl['fields/checkbox.html'], {
            field: fieldOptions,
            value: value,
            render: {
                options: checkboxOptions,
                selectedItems: selectedItems
            },
        });
    }
};

coreuiForm$1.fields.color = {

    _id: '',
    _hash: '',
    _form: null,
    _index: 0,
    _value: '',
    _options: {
        type: 'color',
        name: null,
        label: null,
        labelWidth: null,
        width: null,
        outContent: null,
        description: null,
        errorText: null,
        attach: null,
        attr: {
            class: 'form-control form-control-color d-inline-block'
        },
        required: null,
        readonly: null,
        datalist: null,
        show: true,
        column: null
    },


    /**
     * Инициализация
     * @param {coreuiFormInstance} form
     * @param {object}             options
     * @param {int}                index Порядковый номер на форме
     */
    init: function (form, options, index) {

        this._form    = form;
        this._id      = form.getId() + "-field-" + (options.hasOwnProperty('name') ? options.name : index);
        this._hash    = coreuiFormUtils$1.hashCode();
        this._value   = coreuiFormUtils$1.getFieldValue(form, options);
        this._options = coreuiFormUtils$1.mergeFieldOptions(form, this._options, options);
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return $.extend(true, {}, this._options);
    },


    /**
     * Изменение режима поля только для чтения
     * @param {bool} isReadonly
     */
    readonly: function (isReadonly) {

        this._value            = this.getValue();
        this._options.readonly = !! isReadonly;

        $('.content-' + this._hash).html(
            this.renderContent()
        );
    },


    /**
     * Скрытие поля
     * @param {int} duration
     */
    hide: function (duration) {

        $('#coreui-form-' + this._id).hide(duration);
    },


    /**
     * Показ поля
     * @param {int} duration
     */
    show: function (duration) {

        $('#coreui-form-' + this._id).show(duration);
    },


    /**
     * Получение значения в поле
     * @returns {string}
     */
    getValue: function () {

        return this._options.readonly
            ? this._value
            : $('.content-' + this._hash + ' input').val();
    },


    /**
     * Установка значения в поле
     * @param {string} value
     */
    setValue: function (value) {

        if (['string', 'number'].indexOf(typeof value) < 0) {
            return;
        }

        this._value = value;

        if (this._options.readonly) {
            $('.content-' + this._hash).text(value);
        } else {
            $('.content-' + this._hash + ' input').val(value);
        }
    },


    /**
     * Установка валидности поля
     * @param {bool|null} isValid
     * @param {text} text
     */
    validate: function (isValid, text) {

        if (this._options.readonly) {
            return;
        }

        let container = $('.content-' + this._hash);
        let input     = $('input', container);

        container.find('.valid-feedback').remove();
        container.find('.invalid-feedback').remove();

        if (isValid === null) {
            input.removeClass('is-invalid');
            input.removeClass('is-valid');

        } else if (isValid) {
            input.removeClass('is-invalid');
            input.addClass('is-valid');

            if (typeof text === 'undefined' && typeof this._options.validText === 'string') {
                text = this._options.validText;
            }

            if (typeof text === 'string') {
                container.append('<div class="valid-feedback">' + text + '</div>');
            }
        } else {
            input.removeClass('is-valid');
            input.addClass('is-invalid');

            if (typeof text === 'undefined') {
                if (typeof this._options.invalidText === 'string') {
                    text = this._options.invalidText;

                } else if ( ! text && this._options.required) {
                    text = this._form.getLang().required_field;
                }
            }

            if (typeof text === 'string') {
                container.append('<div class="invalid-feedback">' + text + '</div>');
            }
        }
    },


    /**
     * Проверка валидности поля
     * @return {boolean}
     */
    isValid: function () {

        let input = $('.content-' + this._hash + ' input');

        if (input[0]) {
            return input.is(':valid');
        }

        return null;
    },


    /**
     * Формирование поля
     * @returns {string}
     */
    render: function() {

        let options      = this.getOptions();
        let attachFields = coreuiFormUtils$1.getAttacheFields(this._form, options);

        return ejs.render(tpl['form-field-label.html'], {
            id: this._id,
            form:  this._form,
            hash: this._hash,
            field: options,
            content: this.renderContent(),
            attachFields: attachFields,
        });
    },


    /**
     * Формирование контента поля
     * @return {*}
     */
    renderContent: function () {

        return this._options.readonly
            ? this._renderContentReadonly()
            : this._renderContent();
    },


    /**
     *
     * @return {*}
     * @private
     */
    _renderContent: function () {

        let attributes   = [];
        let datalist     = [];
        let options      = this.getOptions();
        let datalistId   = coreuiFormUtils$1.hashCode();

        if ( ! options.hasOwnProperty('attr') ||
            typeof options.attr !== 'object' ||
            options.attr === null ||
            Array.isArray(options.attr)
        ) {
            options.attr = {};
        }

        if (options.name) {
            options.attr.name = this._options.name;
        }

        options.attr.type  = options.type;
        options.attr.value = this._value;

        if (options.width) {
            options.attr = coreuiFormUtils$1.mergeAttr(
                { style: 'width:' + options.width },
                options.attr
            );
        }
        if (options.required) {
            options.attr.required = 'required';
        }


        if (options.hasOwnProperty('datalist') &&
            typeof options.datalist === 'object' &&
            Array.isArray(options.datalist)
        ) {
            options.attr.list = datalistId;

            $.each(options.datalist, function (key, itemAttributes) {
                let datalistAttr = [];

                $.each(itemAttributes, function (name, value) {
                    datalistAttr.push(name + '="' + value + '"');
                });

                datalist.push({
                    attr: datalistAttr.length > 0 ? (' ' + datalistAttr.join(' ')) : ''
                });
            });
        }

        $.each(options.attr, function (name, value) {
            attributes.push(name + '="' + value + '"');
        });

        return ejs.render(tpl['fields/color.html'], {
            field: options,
            datalistId: datalistId,
            value: this._value,
            render: {
                attr: attributes.length > 0 ? (' ' + attributes.join(' ')) : '',
                datalist: datalist,
            },
        });
    },


    /**
     *
     * @return {*}
     * @private
     */
    _renderContentReadonly: function () {

        let options = this.getOptions();

        return ejs.render(tpl['fields/color.html'], {
            field: options,
            value: this._value
        });
    }
};

coreuiForm$1.fields.custom = {

    _id: '',
    _hash: '',
    _form: null,
    _value: null,
    _options: {
        type: 'custom',
        label: null,
        labelWidth: null,
        width: null,
        content: '',
        outContent: null,
        description: null,
        required: null,
        show: true,
        column: null
    },


    /**
     * Инициализация
     * @param {coreuiFormInstance} form
     * @param {object}             options
     * @param {int}                index Порядковый номер на форме
     */
    init: function (form, options, index) {

        this._form    = form;
        this._id      = form.getId() + "-field-" + (options.hasOwnProperty('name') ? options.name : index);
        this._value   = coreuiFormUtils$1.getFieldValue(form, options);
        this._options = coreuiFormUtils$1.mergeFieldOptions(form, this._options, options);
        this._hash    = coreuiFormUtils$1.hashCode();
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return $.extend(true, {}, this._options);
    },


    /**
     * Изменение режима поля только для чтения
     * @param {bool} isReadonly
     */
    readonly: function (isReadonly) {

    },


    /**
     * Скрытие поля
     * @param {int} duration
     */
    hide: function (duration) {

        $('#coreui-form-' + this._id).hide(duration);
    },


    /**
     * Показ поля
     * @param {int} duration
     */
    show: function (duration) {

        $('#coreui-form-' + this._id).show(duration);
    },


    /**
     * Получение значения из поля
     */
    getValue: function () {

    },


    /**
     * Установка значения в поле
     * @param {object} value
     */
    setValue: function (value) {

    },


    /**
     * Формирование поля
     * @returns {string}
     */
    render: function() {

        let options      = this.getOptions();
        let attachFields = coreuiFormUtils$1.getAttacheFields(this._form, options);

        return ejs.render(tpl['form-field-label.html'], {
            id: this._id,
            form:  this._form,
            hash: this._hash,
            field: options,
            content: this.renderContent(),
            attachFields: attachFields
        });
    },


    /**
     * Формирование контента поля
     * @return {*}
     */
    renderContent: function () {

        let options         = this.getOptions();
        let content         = '';
        let alloyComponents = [
            'coreui.table',
            'coreui.layout',
            'coreui.panel',
            'coreui.tabs',
            'coreui.info',
            'coreui.chart',
        ];

        if (typeof options.content === 'string') {
            content = options.content;

        } else if (options.content instanceof Object) {
            if ( ! Array.isArray(options.content)) {
                options.content = [ options.content ];
            }

            let components = [];

            for (let i = 0; i < options.content.length; i++) {
                if (typeof options.content[i] === 'string') {
                    components.push(options.content[i]);

                } else if ( ! Array.isArray(options.content[i]) &&
                        options.content[i].hasOwnProperty('component') &&
                        alloyComponents.indexOf(options.content[i].component) >= 0
                ) {
                    let name = options.content[i].component.split('.')[1];

                    if (CoreUI.hasOwnProperty(name) &&
                        typeof CoreUI[name] === "object" &&
                        CoreUI[name] !== null &&
                        ! Array.isArray(CoreUI[name])
                    ) {
                        let instance = CoreUI[name].create(options.content[i]);
                        components.push(instance.render());

                        this._form.on('shown.coreui.form', instance.initEvents, instance, true);
                    }
                }
            }

            content = components.join('');
        }


        return ejs.render(tpl['fields/custom.html'], {
            content: content
        });
    }
};

coreuiForm$1.fields.dataset = {

    _id: '',
    _hash: '',
    _form: null,
    _value: [],
    _renderOptions: [],
    _options: {
        type: 'dataset',
        name: null,
        label: null,
        labelWidth: null,
        width: null,
        outContent: null,
        description: null,
        errorText: null,
        attach: null,
        attr: {
            class: 'form-select form-select-sm d-inline-block'
        },
        required: null,
        readonly: null,
        datalist: null,
        show: true,
        column: null
    },


    /**
     * Инициализация
     * @param {coreuiFormInstance} form
     * @param {object}             options
     * @param {int}                index Порядковый номер на форме
     */
    init: function (form, options, index) {

        this._form    = form;
        this._id      = form.getId() + "-field-" + (options.hasOwnProperty('name') ? options.name : index);
        this._value   = coreuiFormUtils$1.getFieldValue(form, options);
        this._options = coreuiFormUtils$1.mergeFieldOptions(form, this._options, options);
        this._hash    = coreuiFormUtils$1.hashCode();

        let that = this;

        form.on('shown.coreui.form', function () {
            if ( ! that._options.readonly) {
                that._initEvents();
            }
        });

        if (options.hasOwnProperty('options') &&
            typeof options.options === 'object' &&
            Array.isArray(options.options)
        ) {
            $.each(options.options, function (key, option) {
                let name = option.hasOwnProperty('name') && ['string', 'number'].indexOf(typeof (option.name)) >= 0
                    ? option.name
                    : '';
                let type = option.hasOwnProperty('type') && typeof (option.type) === 'string'
                    ? option.type
                    : 'text';
                let attributes = option.hasOwnProperty('attr') && typeof (option.attr) === 'object' && ! Array.isArray(option.attr)
                    ? option.attr
                    : {};
                let items = option.hasOwnProperty('items') && typeof (option.items) === 'object' && Array.isArray(option.items)
                    ? option.items
                    : [];
                let valueY = option.hasOwnProperty('valueY') && ['string', 'numeric'].indexOf(typeof (option.valueY)) >= 0
                    ? option.valueY
                    : 'Y';
                let valueN = option.hasOwnProperty('valueN') && ['string', 'numeric'].indexOf(typeof (option.valueN)) >= 0
                    ? option.valueN
                    : 'N';

                if (name) {
                    attributes.name = name;
                }
                if (options.required) {
                    attributes.required = 'required';
                }

                if (type === 'select') {
                    attributes.class = attributes.hasOwnProperty('class')
                        ? 'form-select form-select-sm ' + attributes.class
                        : 'form-select form-select-sm';

                } else if (type === 'switch') {
                    attributes.class = attributes.hasOwnProperty('class')
                        ? 'form-check-input ' + attributes.class
                        : 'form-check-input';

                    attributes.type = 'checkbox';
                    attributes.value = valueY;

                } else {
                    attributes.class = attributes.hasOwnProperty('class')
                        ? 'form-control form-control-sm ' + attributes.class
                        : 'form-control form-control-sm';

                    attributes.type = type;
                }


                that._renderOptions.push({
                    type  : type,
                    name  : name,
                    attr  : attributes,
                    items : items,
                    valueY: valueY,
                    valueN: valueN,
                });
            });
        }
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return $.extend(true, {}, this._options);
    },


    /**
     * Изменение режима поля только для чтения
     * @param {bool} isReadonly
     */
    readonly: function (isReadonly) {

        this._value            = this.getValue();
        this._options.readonly = !! isReadonly;

        $('.content-' + this._hash).html(
            this.renderContent()
        );

        if ( ! this._options.readonly) {
            this._initEvents();
        }
    },


    /**
     * Скрытие поля
     * @param {int} duration
     */
    hide: function (duration) {

        $('#coreui-form-' + this._id).hide(duration);
    },


    /**
     * Показ поля
     * @param {int} duration
     */
    show: function (duration) {

        $('#coreui-form-' + this._id).show(duration);
    },


    /**
     * Получение значения в поле
     * @returns {array}
     */
    getValue: function () {

        if (this._options.readonly) {
            return this._value;

        } else {
            let container = $('.content-' + this._hash);
            let data      = [];

            $('.coreui-form__field-dataset-list .coreui-form__field-dataset-item', container).each(function () {
                let items = {};

                $.each($(this).find('input, select').serializeArray(), function (key, item) {
                    if (item.name) {
                        items[item.name] = item.value;
                    }
                });

                data.push(items);
            });

            return data;
        }
    },


    /**
     * Установка значения в поле
     * @param {object} value
     */
    setValue: function (value) {

        if (typeof value !== 'object' ||
            Array.isArray(value) ||
            value === null
        ) {
            return;
        }

        this._value.push(value);

        if (this._options.readonly) {
            $('.content-' + this._hash + ' .coreui-form__field-dataset-list').append(
                this._renderRowReadonly(value)
            );
        } else {
            this._eventAdd(value);
        }
    },


    /**
     * Установка валидности поля
     * @param {bool|null} isValid
     * @param {text} text
     */
    validate: function (isValid, text) {

        if (this._options.readonly) {
            return;
        }

        let container = $('.content-' + this._hash);

        container.find('.text-success').remove();
        container.find('.text-danger').remove();

        if (isValid === null) {
            return;
        }

        if (isValid) {
            if (typeof text === 'undefined' && typeof this._options.validText === 'string') {
                text = this._options.validText;
            }

            if (typeof text === 'string') {
                container.append('<div class="ps-2 text-success">' + text + '</div>');
            }

        } else {
            if (typeof text === 'undefined') {
                if (typeof this._options.invalidText === 'string') {
                    text = this._options.invalidText;

                } else if ( ! text && this._options.required) {
                    text = this._form.getLang().required_field;
                }
            }

            if (typeof text === 'string') {
                container.append('<div class="ps-2 text-danger">' + text + '</div>');
            }
        }
    },


    /**
     * Проверка валидности поля
     * @return {boolean}
     */
    isValid: function () {

        if (this._options.required && ! this._options.readonly) {
            return this.getValue().length > 0;
        }

        return true;
    },


    /**
     * Удаление всех строк
     */
    removeItems: function () {

        $('#coreui-form-' + this._id + ' .content-' + this._hash + ' .coreui-form__field-dataset-list').empty();
    },


    /**
     * Удаление строки по id
     * @param {int} itemId
     */
    removeItem: function (itemId) {

        let element = '#coreui-form-' + this._id + ' .content-' + this._hash;

        $('#' + itemId).hide('fast', function () {
            $('#' + itemId).remove();

            if ($(element + ' .coreui-form__field-dataset-item').length === 0) {
                $(element + ' .coreui-form__field-dataset-container').hide();
            }
        });
    },


    /**
     * Формирование поля
     * @returns {string}
     */
    render: function() {

        let options      = this.getOptions();
        let attachFields = coreuiFormUtils$1.getAttacheFields(this._form, options);

        return ejs.render(tpl['form-field-label.html'], {
            id: this._id,
            form:  this._form,
            hash: this._hash,
            field: options,
            content: this.renderContent(),
            attachFields: attachFields
        });
    },


    /**
     * Формирование контента поля
     * @return {*}
     */
    renderContent: function () {

        return this._options.readonly
            ? this._renderContentReadonly()
            : this._renderContent();
    },


    /**
     * Формирование контента поля
     * @return {*}
     */
    _renderContent: function () {

        let options = this.getOptions();
        let rows    = [];
        let headers = [];
        let that    = this;


        if (options.hasOwnProperty('options') &&
            typeof options.options === 'object' &&
            Array.isArray(options.options)
        ) {
            // Заголовок
            $.each(options.options, function (key, option) {
                let title = option.hasOwnProperty('title') && ['string', 'numeric'].indexOf(typeof(option.title)) >= 0
                    ? option.title
                    : '';

                headers.push({
                    title: title
                });
            });

            // Строки
            if (typeof this._value === 'object' && Array.isArray(this._value)) {
                $.each(this._value, function (key, row) {
                    if (typeof row !== 'object' || Array.isArray(row)) {
                        return;
                    }

                    rows.push(that._renderRow(row));
                });
            }
        }

        return ejs.render(tpl['fields/dataset.html'], {
            field: options,
            value: this._value !== null ? this._value : '',
            lang: this._form.getLang(),
            render: {
                headers: headers,
                rows: rows,
            },
        });
    },


    /**
     *
     * @private
     */
    _renderContentReadonly: function () {

        let options = this.getOptions();
        let rows    = [];
        let headers = [];
        let that    = this;


        if (options.hasOwnProperty('options') &&
            typeof options.options === 'object' &&
            Array.isArray(options.options)
        ) {
            // Заголовок
            $.each(options.options, function (key, option) {
                let title = option.hasOwnProperty('title') && ['string', 'numeric'].indexOf(typeof(option.title)) >= 0
                    ? option.title
                    : '';

                headers.push({
                    title: title
                });
            });

            // Строки
            if (typeof this._value === 'object' && Array.isArray(this._value)) {
                $.each(this._value, function (key, row) {
                    if (typeof row !== 'object' || Array.isArray(row)) {
                        return;
                    }

                    rows.push(that._renderRowReadonly(row));
                });
            }
        }

        return ejs.render(tpl['fields/dataset.html'], {
            field: options,
            value: this._value !== null ? this._value : '',
            lang: this._form.getLang(),
            render: {
                headers: headers,
                rows: rows,
            },
        });
    },


    /**
     * Инициализация событий
     * @private
     */
    _initEvents: function () {

        let that    = this;
        let element = '#coreui-form-' + this._id + ' .content-' + this._hash;

        // Кнопка удаления
        $(element + ' .btn-dataset-remove').click(function () {
            that.removeItem($(this).data('item-id'));
        });

        // Кнопка добавления
        $(element + ' .btn-dataset-add').click(function () {
            that._eventAdd();
        });
    },


    /**
     * Событие добавления
     */
    _eventAdd: function (row) {

        let that    = this;
        let element = '#coreui-form-' + this._id + ' .content-' + this._hash;
        row = row || {};

        if ($(element + ' .coreui-form__field-dataset-item').length === 0) {
            $(element + ' .coreui-form__field-dataset-container').show();
        }

        $(element + ' .coreui-form__field-dataset-list').append(this._renderRow(row));
        $(element + ' .coreui-form__field-dataset-item:last-child .btn-dataset-remove').click(function () {
            that.removeItem($(this).data('item-id'));
        });
    },


    /**
     * Формирование строки
     * @param {object} row
     * @private
     */
    _renderRow: function (row) {

        let rowOptions  = [];
        let itemOptions = [];

        $.each(this._renderOptions, function (key, option) {

            let cellValue = row.hasOwnProperty(option.name) ? row[option.name] : '';

            if (option.type === 'select') {
                $.each(option.items, function (key, item) {
                    let title = item.hasOwnProperty('title') && ['string', 'numeric'].indexOf(typeof(item.title)) >= 0
                        ? item.title
                        : '';
                    let itemValue = item.hasOwnProperty('value') && ['string', 'numeric'].indexOf(typeof(item.value)) >= 0
                        ? item.value
                        : '';
                    let itemAttr = {};


                    $.each(item, function (name, value) {
                        if (name !== 'title') {
                            itemAttr[name] = value;
                        }
                    });


                    if (typeof(cellValue) === 'object' && Array.isArray(cellValue)) {
                        $.each(cellValue, function (key, cellItemValue) {
                            if (cellItemValue == itemValue) {
                                itemAttr.selected = 'selected';
                                return false;
                            }
                        });

                    } else if (cellValue == item.value) {
                        itemAttr.selected = 'selected';
                    }

                    let attributes = [];
                    $.each(itemAttr, function (name, value) {
                        attributes.push(name + '="' + value + '"');
                    });

                    itemOptions.push({
                        attr: attributes.length > 0 ? (' ' + attributes.join(' ')) : '',
                        title: title
                    });
                });

            } else if (option.type === 'switch') {
                if (cellValue == option.valueY) {
                    option.attr.checked = 'checked';
                }

            } else {
                if (['string', 'number'].indexOf(typeof(cellValue)) >= 0) {
                    option.attr.value = cellValue !== null ? cellValue : '';
                }
            }

            let attributes = [];

            $.each(option.attr, function (name, value) {
                attributes.push(name + '="' + value + '"');
            });

            rowOptions.push({
                type: option.type,
                attr: attributes.length > 0 ? (' ' + attributes.join(' ')) : '',
                items: itemOptions
            });
        });

        return ejs.render(tpl['fields/dataset-row.html'], {
            hashItem: coreuiFormUtils$1.hashCode(),
            options: rowOptions,
        });
    },


    /**
     * Формирование строки
     * @param {object} row
     * @private
     */
    _renderRowReadonly: function (row) {

        let rowOptions = [];
        let lang       = this._form.getLang();

        $.each(this._renderOptions, function (key, option) {

            let optionValue = '';
            let cellValue   = row.hasOwnProperty(option.name) ? row[option.name] : '';

            if (option.type === 'select') {
                let itemOptions = [];

                $.each(option.items, function (key, item) {
                    let title = item.hasOwnProperty('title') && ['string', 'numeric'].indexOf(typeof(item.title)) >= 0
                        ? item.title
                        : '';
                    let itemValue = item.hasOwnProperty('value') && ['string', 'numeric'].indexOf(typeof(item.value)) >= 0
                        ? item.value
                        : '';

                    if (typeof(cellValue) === 'object' && Array.isArray(cellValue)) {
                        $.each(cellValue, function (key, cellItemValue) {
                            if (cellItemValue == itemValue) {
                                itemOptions.push(itemValue);
                                return false;
                            }
                        });

                    } else if (cellValue == item.value) {
                        itemOptions.push(cellValue);
                    }
                });

            } else if (option.type === 'switch') {
                let valueY = 'Y';

                if (option.hasOwnProperty('valueY')) {
                    valueY = option.valueY;
                }

                optionValue = cellValue == valueY
                    ? lang.switch_yes
                    : lang.switch_no;

            } else {
                if (['string', 'number'].indexOf(typeof(cellValue)) >= 0) {
                    optionValue = cellValue;

                    switch (option.type) {
                        case 'date':           optionValue = coreuiFormUtils$1.formatDate(optionValue); break;
                        case 'datetime-local': optionValue = coreuiFormUtils$1.formatDateTime(optionValue); break;
                        case 'month':          optionValue = coreuiFormUtils$1.formatDateMonth(optionValue, lang); break;
                        case 'week':           optionValue = coreuiFormUtils$1.formatDateWeek(optionValue, lang); break;
                        default: optionValue = cellValue;
                    }
                }
            }

            rowOptions.push({
                value: optionValue
            });
        });

        return ejs.render(tpl['fields/dataset-row-readonly.html'], {
            options: rowOptions,
        });
    }
};

coreuiForm$1.fields.group = {

    _id: '',
    _form: null,
    _index: 0,
    _options: {
        type: 'group',
        label: '',
        show: true,
        showCollapsible: true,
        fields: [],
        column: null
    },


    /**
     * Инициализация
     * @param {coreuiFormInstance} form
     * @param {object}             options
     * @param {int}                index Порядковый номер на форме
     */
    init: function (form, options, index) {

        this._form    = form;
        this._index   = index;
        this._id      = form.getId() + "-group-" + index;
        this._options = $.extend(true, {}, this._options, options);

        let that = this;

        form.on('shown.coreui.form', function () {
            that._initEvents();
        });
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return $.extend(true, {}, this._options, options);
    },


    /**
     * Скрытие группы
     * @param {int} duration
     */
    collapse: function (duration) {

        let container = '#coreui-form-' + this._id;

        $(container + ' > .coreui-form__group_label .btn-collapsible .bi').removeClass('bi-chevron-down');
        $(container + ' > .coreui-form__group_label .btn-collapsible .bi').addClass('bi-chevron-right');

        $(container + ' .coreui-form__group_content').slideUp(duration);
    },


    /**
     * Показ группы
     * @param {int} duration
     */
    expand: function (duration) {

        let container = '#coreui-form-' + this._id;

        $(container + ' > .coreui-form__group_label .btn-collapsible .bi').removeClass('bi-chevron-right');
        $(container + ' > .coreui-form__group_label .btn-collapsible .bi').addClass('bi-chevron-down');

        $(container + ' .coreui-form__group_content').slideDown(duration);
    },


    /**
     * Формирование поля
     * @returns {string}
     */
    render: function() {

        return ejs.render(tpl['form-field-group.html'], {
            id: this._id,
            form:  this._form,
            group: this._options,
            content: this.renderContent(),
        });
    },


    /**
     * Формирование контента поля
     * @return {string}
     */
    renderContent: function () {

        let fields = [];
        let that   = this;

        $.each(this._options.fields, function (key, field) {

            let fieldInstance = that._form.initField(field);

            if (typeof fieldInstance !== 'object') {
                return;
            }

            fields.push(fieldInstance.render());
        });

        return fields.join('');
    },



    /**
     * Инициализация событий
     * @private
     */
    _initEvents: function () {

        if (this._options.showCollapsible) {
            let that      = this;
            let container = '#coreui-form-' + this._id;

            $(container + ' > .coreui-form__group_label .btn-collapsible').click(function () {

                if ($(container + ' > .coreui-form__group_content').is(':visible')) {
                    that.collapse(80);
                } else {
                    that.expand(80);
                }
            });
        }
    }
};

coreuiForm$1.fields.hidden = {

    _id: '',
    _form: null,
    _index: 0,
    _value: '',
    _options: {
        type: 'hidden',
        name: null,
        attr: {},
        required: null,
        column: null
    },


    /**
     * Инициализация
     * @param {coreuiFormInstance} form
     * @param {object}             options
     * @param {int}                index Порядковый номер на форме
     */
    init: function (form, options, index) {

        this._form    = form;
        this._id      = form.getId() + "-field-" + (options.hasOwnProperty('name') ? options.name : index);
        this._value   = coreuiFormUtils$1.getFieldValue(form, options);
        this._options = coreuiFormUtils$1.mergeFieldOptions(form, this._options, options);
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return $.extend(true, {}, this._options);
    },


    /**
     * Получение значения в поле
     * @returns {string}
     */
    getValue: function () {

        return this._options.readonly
            ? this._value
            : $('#coreui-form-' + this._id).val();
    },


    /**
     * Установка значения в поле
     * @param {string} value
     */
    setValue: function (value) {

        if (['string', 'number'].indexOf(typeof value) < 0) {
            return;
        }

        this._value = value;

        if ( ! this._options.readonly) {
            $('#coreui-form-' + this._id).val(value);
        }
    },


    /**
     * Формирование поля
     * @returns {string}
     */
    render: function() {

        return ejs.render(tpl['form-field-content.html'], {
            content: this.renderContent(),
        });
    },


    /**
     * Формирование контента поля
     * @return {*}
     */
    renderContent: function () {

        let attributes = [];
        let options    = this.getOptions();

        if ( ! options.hasOwnProperty('attr') ||
            typeof options.attr !== 'object' ||
            options.attr === null ||
            Array.isArray(options.attr)
        ) {
            options.attr = {};
        }


        options.attr.id = 'coreui-form-' + this._id;

        if (options.name) {
            options.attr.name = options.name;
        }

        options.attr.type  = 'hidden';
        options.attr.value = this._value !== null ? this._value : '';


        $.each(options.attr, function (name, value) {
            attributes.push(name + '="' + value + '"');
        });

        return ejs.render(tpl['fields/hidden.html'], {
            value: this._value !== null ? this._value : '',
            field: options,
            render: {
                attr: attributes.length > 0 ? (' ' + attributes.join(' ')) : '',
            },
        });
    }
};

coreuiForm$1.fields.input = {

    _id: '',
    _hash: '',
    _form: null,
    _index: 0,
    _value: '',
    _options: {
        type: 'text',
        name: null,
        label: null,
        labelWidth: null,
        width: null,
        outContent: null,
        description: null,
        errorText: null,
        attach: null,
        attr: {
            class: 'form-control form-control-sm d-inline-block'
        },
        required: null,
        invalidText: null,
        validText: null,
        readonly: null,
        datalist: null,
        show: true,
        column: null
    },


    /**
     * Инициализация
     * @param {coreuiFormInstance} form
     * @param {object}             options
     * @param {int}                index Порядковый номер на форме
     */
    init: function (form, options, index) {

        this._form    = form;
        this._index   = index;
        this._id      = form.getId() + "-field-" + (options.hasOwnProperty('name') ? options.name : index);
        this._hash    = coreuiFormUtils$1.hashCode();
        this._value   = coreuiFormUtils$1.getFieldValue(form, options);
        this._options = coreuiFormUtils$1.mergeFieldOptions(form, this._options, options);
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return $.extend(true, {}, this._options);
    },


    /**
     * Изменение режима поля только для чтения
     * @param {bool} isReadonly
     */
    readonly: function (isReadonly) {

        this._value            = this.getValue();
        this._options.readonly = !! isReadonly;

        $('.content-' + this._hash).html(
            this.renderContent()
        );
    },


    /**
     * Скрытие поля
     * @param {int} duration
     */
    hide: function (duration) {

        $('#coreui-form-' + this._id).hide(duration);
    },


    /**
     * Показ поля
     * @param {int} duration
     */
    show: function (duration) {

        $('#coreui-form-' + this._id).show(duration);
    },


    /**
     * Получение значения в поле
     * @returns {string}
     */
    getValue: function () {

        return this._options.readonly
            ? this._value
            : $('.content-' + this._hash + ' input').val();
    },


    /**
     * Установка значения в поле
     * @param {string} value
     */
    setValue: function (value) {

        if (['string', 'number'].indexOf(typeof value) < 0) {
            return;
        }

        this._value = value;

        if (this._options.readonly) {
            $('.content-' + this._hash).text(value);
        } else {
            $('.content-' + this._hash + ' input').val(value);
        }
    },


    /**
     * Установка валидности поля
     * @param {bool|null} isValid
     * @param {text} text
     */
    validate: function (isValid, text) {

        if (this._options.readonly) {
            return;
        }

        let container = $('.content-' + this._hash);
        let input     = $('input', container);

        container.find('.valid-feedback').remove();
        container.find('.invalid-feedback').remove();

        if (isValid === null) {
            input.removeClass('is-invalid');
            input.removeClass('is-valid');

        } else if (isValid) {
            input.removeClass('is-invalid');
            input.addClass('is-valid');

            if (typeof text === 'undefined' && typeof this._options.validText === 'string') {
                text = this._options.validText;
            }

            if (typeof text === 'string') {
                container.append('<div class="valid-feedback">' + text + '</div>');
            }
        } else {
            input.removeClass('is-valid');
            input.addClass('is-invalid');

            if (typeof text === 'undefined') {
                if (typeof this._options.invalidText === 'string') {
                    text = this._options.invalidText;

                } else if ( ! text && this._options.required) {
                    text = this._form.getLang().required_field;
                }
            }

            if (typeof text === 'string') {
                container.append('<div class="invalid-feedback">' + text + '</div>');
            }
        }
    },


    /**
     * Проверка валидности поля
     * @return {boolean|null}
     */
    isValid: function () {

        let input = $('.content-' + this._hash + ' input');

        if (input[0]) {
            return input.is(':valid');
        }

        return null;
    },


    /**
     * Формирование поля
     * @returns {string}
     */
    render: function() {

        let options      = this.getOptions();
        let attachFields = coreuiFormUtils$1.getAttacheFields(this._form, options);

        return ejs.render(tpl['form-field-label.html'], {
            id: this._id,
            form: this._form,
            hash: this._hash,
            field: options,
            content: this.renderContent(),
            attachFields: attachFields
        });
    },


    /**
     * Формирование контента поля
     * @return {*}
     */
    renderContent: function () {

        return this._options.readonly
            ? this._renderContentReadonly()
            : this._renderContent();
    },


    /**
     *
     * @private
     */
    _renderContent: function () {

        let attributes   = [];
        let datalist     = [];
        let options      = this.getOptions();
        let datalistId   = coreuiFormUtils$1.hashCode();

        if ( ! options.hasOwnProperty('attr') ||
            typeof options.attr !== 'object' ||
            options.attr === null ||
            Array.isArray(options.attr)
        ) {
            options.attr = {};
        }

        if (options.name) {
            options.attr.name = this._options.name;
        }

        options.attr.type  = options.type;
        options.attr.value = this._value !== null ? this._value : '';

        if (options.width) {
            options.attr = coreuiFormUtils$1.mergeAttr(
                { style: 'width:' + options.width },
                options.attr
            );
        }

        if (options.required) {
            options.attr.required = 'required';
        }


        if (options.hasOwnProperty('datalist') &&
            typeof options.datalist === 'object' &&
            Array.isArray(options.datalist)
        ) {
            options.attr.list = datalistId;

            $.each(options.datalist, function (key, itemAttributes) {
                let datalistAttr = [];

                $.each(itemAttributes, function (name, value) {
                    datalistAttr.push(name + '="' + value + '"');
                });

                datalist.push({
                    attr: datalistAttr.length > 0 ? (' ' + datalistAttr.join(' ')) : ''
                });
            });
        }

        $.each(options.attr, function (name, value) {
            attributes.push(name + '="' + value + '"');
        });

        return ejs.render(tpl['fields/input.html'], {
            field: options,
            datalistId: datalistId,
            value: this._value !== null ? this._value : '',
            render: {
                attr: attributes.length > 0 ? (' ' + attributes.join(' ')) : '',
                datalist: datalist
            },
        });
    },


    /**
     *
     * @private
     */
    _renderContentReadonly: function () {

        let options = this.getOptions();
        let type    = 'text';
        let value   = this._value;
        let lang    = this._form.getLang();

        if (options.hasOwnProperty('type') && typeof options.type === 'string') {
            type = options.type;
        }

        try {
            switch (type) {
                case 'date':           value = coreuiFormUtils$1.formatDate(value); break;
                case 'datetime-local': value = coreuiFormUtils$1.formatDateTime(value); break;
                case 'month':          value = coreuiFormUtils$1.formatDateMonth(value, lang); break;
                case 'week':           value = coreuiFormUtils$1.formatDateWeek(value, lang); break;
            }

        } catch (e) {
            console.error(e);
            // ignore
        }

        return ejs.render(tpl['fields/input.html'], {
            field: options,
            value: value,
            hash: this._hash
        });
    }
};

/**
 * jquery.mask.js
 * @version: v1.14.16
 * @author: Igor Escobar
 *
 * Created by Igor Escobar on 2012-03-10. Please report any bug at github.com/igorescobar/jQuery-Mask-Plugin
 *
 * Copyright (c) 2012 Igor Escobar http://igorescobar.com
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/* jshint laxbreak: true */
/* jshint maxcomplexity:17 */
/* global define */

// UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere.
// https://github.com/umdjs/umd/blob/master/templates/jqueryPlugin.js
(function (factory, jQuery, Zepto) {

    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object' && typeof Meteor === 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery || Zepto);
    }

}(function ($) {
    'use strict';

    var Mask = function (el, mask, options) {

        var p = {
            invalid: [],
            getCaret: function () {
                try {
                    var sel,
                        pos = 0,
                        ctrl = el.get(0),
                        dSel = document.selection,
                        cSelStart = ctrl.selectionStart;

                    // IE Support
                    if (dSel && navigator.appVersion.indexOf('MSIE 10') === -1) {
                        sel = dSel.createRange();
                        sel.moveStart('character', -p.val().length);
                        pos = sel.text.length;
                    }
                    // Firefox support
                    else if (cSelStart || cSelStart === '0') {
                        pos = cSelStart;
                    }

                    return pos;
                } catch (e) {}
            },
            setCaret: function(pos) {
                try {
                    if (el.is(':focus')) {
                        var range, ctrl = el.get(0);

                        // Firefox, WebKit, etc..
                        if (ctrl.setSelectionRange) {
                            ctrl.setSelectionRange(pos, pos);
                        } else { // IE
                            range = ctrl.createTextRange();
                            range.collapse(true);
                            range.moveEnd('character', pos);
                            range.moveStart('character', pos);
                            range.select();
                        }
                    }
                } catch (e) {}
            },
            events: function() {
                el
                .on('keydown.mask', function(e) {
                    el.data('mask-keycode', e.keyCode || e.which);
                    el.data('mask-previus-value', el.val());
                    el.data('mask-previus-caret-pos', p.getCaret());
                    p.maskDigitPosMapOld = p.maskDigitPosMap;
                })
                .on($.jMaskGlobals.useInput ? 'input.mask' : 'keyup.mask', p.behaviour)
                .on('paste.mask drop.mask', function() {
                    setTimeout(function() {
                        el.keydown().keyup();
                    }, 100);
                })
                .on('change.mask', function(){
                    el.data('changed', true);
                })
                .on('blur.mask', function(){
                    if (oldValue !== p.val() && !el.data('changed')) {
                        el.trigger('change');
                    }
                    el.data('changed', false);
                })
                // it's very important that this callback remains in this position
                // otherwhise oldValue it's going to work buggy
                .on('blur.mask', function() {
                    oldValue = p.val();
                })
                // select all text on focus
                .on('focus.mask', function (e) {
                    if (options.selectOnFocus === true) {
                        $(e.target).select();
                    }
                })
                // clear the value if it not complete the mask
                .on('focusout.mask', function() {
                    if (options.clearIfNotMatch && !regexMask.test(p.val())) {
                       p.val('');
                   }
                });
            },
            getRegexMask: function() {
                var maskChunks = [], translation, pattern, optional, recursive, oRecursive, r;

                for (var i = 0; i < mask.length; i++) {
                    translation = jMask.translation[mask.charAt(i)];

                    if (translation) {

                        pattern = translation.pattern.toString().replace(/.{1}$|^.{1}/g, '');
                        optional = translation.optional;
                        recursive = translation.recursive;

                        if (recursive) {
                            maskChunks.push(mask.charAt(i));
                            oRecursive = {digit: mask.charAt(i), pattern: pattern};
                        } else {
                            maskChunks.push(!optional && !recursive ? pattern : (pattern + '?'));
                        }

                    } else {
                        maskChunks.push(mask.charAt(i).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
                    }
                }

                r = maskChunks.join('');

                if (oRecursive) {
                    r = r.replace(new RegExp('(' + oRecursive.digit + '(.*' + oRecursive.digit + ')?)'), '($1)?')
                         .replace(new RegExp(oRecursive.digit, 'g'), oRecursive.pattern);
                }

                return new RegExp(r);
            },
            destroyEvents: function() {
                el.off(['input', 'keydown', 'keyup', 'paste', 'drop', 'blur', 'focusout', ''].join('.mask '));
            },
            val: function(v) {
                var isInput = el.is('input'),
                    method = isInput ? 'val' : 'text',
                    r;

                if (arguments.length > 0) {
                    if (el[method]() !== v) {
                        el[method](v);
                    }
                    r = el;
                } else {
                    r = el[method]();
                }

                return r;
            },
            calculateCaretPosition: function(oldVal) {
                var newVal = p.getMasked(),
                    caretPosNew = p.getCaret();
                if (oldVal !== newVal) {
                    var caretPosOld = el.data('mask-previus-caret-pos') || 0,
                        newValL = newVal.length,
                        oldValL = oldVal.length,
                        maskDigitsBeforeCaret = 0,
                        maskDigitsAfterCaret = 0,
                        maskDigitsBeforeCaretAll = 0,
                        maskDigitsBeforeCaretAllOld = 0,
                        i = 0;

                    for (i = caretPosNew; i < newValL; i++) {
                        if (!p.maskDigitPosMap[i]) {
                            break;
                        }
                        maskDigitsAfterCaret++;
                    }

                    for (i = caretPosNew - 1; i >= 0; i--) {
                        if (!p.maskDigitPosMap[i]) {
                            break;
                        }
                        maskDigitsBeforeCaret++;
                    }

                    for (i = caretPosNew - 1; i >= 0; i--) {
                        if (p.maskDigitPosMap[i]) {
                            maskDigitsBeforeCaretAll++;
                        }
                    }

                    for (i = caretPosOld - 1; i >= 0; i--) {
                        if (p.maskDigitPosMapOld[i]) {
                            maskDigitsBeforeCaretAllOld++;
                        }
                    }

                    // if the cursor is at the end keep it there
                    if (caretPosNew > oldValL) {
                      caretPosNew = newValL * 10;
                    } else if (caretPosOld >= caretPosNew && caretPosOld !== oldValL) {
                        if (!p.maskDigitPosMapOld[caretPosNew])  {
                          var caretPos = caretPosNew;
                          caretPosNew -= maskDigitsBeforeCaretAllOld - maskDigitsBeforeCaretAll;
                          caretPosNew -= maskDigitsBeforeCaret;
                          if (p.maskDigitPosMap[caretPosNew])  {
                            caretPosNew = caretPos;
                          }
                        }
                    }
                    else if (caretPosNew > caretPosOld) {
                        caretPosNew += maskDigitsBeforeCaretAll - maskDigitsBeforeCaretAllOld;
                        caretPosNew += maskDigitsAfterCaret;
                    }
                }
                return caretPosNew;
            },
            behaviour: function(e) {
                e = e || window.event;
                p.invalid = [];

                var keyCode = el.data('mask-keycode');

                if ($.inArray(keyCode, jMask.byPassKeys) === -1) {
                    var newVal = p.getMasked(),
                        caretPos = p.getCaret(),
                        oldVal = el.data('mask-previus-value') || '';

                    // this is a compensation to devices/browsers that don't compensate
                    // caret positioning the right way
                    setTimeout(function() {
                      p.setCaret(p.calculateCaretPosition(oldVal));
                    }, $.jMaskGlobals.keyStrokeCompensation);

                    p.val(newVal);
                    p.setCaret(caretPos);
                    return p.callbacks(e);
                }
            },
            getMasked: function(skipMaskChars, val) {
                var buf = [],
                    value = val === undefined ? p.val() : val + '',
                    m = 0, maskLen = mask.length,
                    v = 0, valLen = value.length,
                    offset = 1, addMethod = 'push',
                    resetPos = -1,
                    maskDigitCount = 0,
                    maskDigitPosArr = [],
                    lastMaskChar,
                    check;

                if (options.reverse) {
                    addMethod = 'unshift';
                    offset = -1;
                    lastMaskChar = 0;
                    m = maskLen - 1;
                    v = valLen - 1;
                    check = function () {
                        return m > -1 && v > -1;
                    };
                } else {
                    lastMaskChar = maskLen - 1;
                    check = function () {
                        return m < maskLen && v < valLen;
                    };
                }

                var lastUntranslatedMaskChar;
                while (check()) {
                    var maskDigit = mask.charAt(m),
                        valDigit = value.charAt(v),
                        translation = jMask.translation[maskDigit];

                    if (translation) {
                        if (valDigit.match(translation.pattern)) {
                            buf[addMethod](valDigit);
                             if (translation.recursive) {
                                if (resetPos === -1) {
                                    resetPos = m;
                                } else if (m === lastMaskChar && m !== resetPos) {
                                    m = resetPos - offset;
                                }

                                if (lastMaskChar === resetPos) {
                                    m -= offset;
                                }
                            }
                            m += offset;
                        } else if (valDigit === lastUntranslatedMaskChar) {
                            // matched the last untranslated (raw) mask character that we encountered
                            // likely an insert offset the mask character from the last entry; fall
                            // through and only increment v
                            maskDigitCount--;
                            lastUntranslatedMaskChar = undefined;
                        } else if (translation.optional) {
                            m += offset;
                            v -= offset;
                        } else if (translation.fallback) {
                            buf[addMethod](translation.fallback);
                            m += offset;
                            v -= offset;
                        } else {
                          p.invalid.push({p: v, v: valDigit, e: translation.pattern});
                        }
                        v += offset;
                    } else {
                        if (!skipMaskChars) {
                            buf[addMethod](maskDigit);
                        }

                        if (valDigit === maskDigit) {
                            maskDigitPosArr.push(v);
                            v += offset;
                        } else {
                            lastUntranslatedMaskChar = maskDigit;
                            maskDigitPosArr.push(v + maskDigitCount);
                            maskDigitCount++;
                        }

                        m += offset;
                    }
                }

                var lastMaskCharDigit = mask.charAt(lastMaskChar);
                if (maskLen === valLen + 1 && !jMask.translation[lastMaskCharDigit]) {
                    buf.push(lastMaskCharDigit);
                }

                var newVal = buf.join('');
                p.mapMaskdigitPositions(newVal, maskDigitPosArr, valLen);
                return newVal;
            },
            mapMaskdigitPositions: function(newVal, maskDigitPosArr, valLen) {
              var maskDiff = options.reverse ? newVal.length - valLen : 0;
              p.maskDigitPosMap = {};
              for (var i = 0; i < maskDigitPosArr.length; i++) {
                p.maskDigitPosMap[maskDigitPosArr[i] + maskDiff] = 1;
              }
            },
            callbacks: function (e) {
                var val = p.val(),
                    changed = val !== oldValue,
                    defaultArgs = [val, e, el, options],
                    callback = function(name, criteria, args) {
                        if (typeof options[name] === 'function' && criteria) {
                            options[name].apply(this, args);
                        }
                    };

                callback('onChange', changed === true, defaultArgs);
                callback('onKeyPress', changed === true, defaultArgs);
                callback('onComplete', val.length === mask.length, defaultArgs);
                callback('onInvalid', p.invalid.length > 0, [val, e, el, p.invalid, options]);
            }
        };

        el = $(el);
        var jMask = this, oldValue = p.val(), regexMask;

        mask = typeof mask === 'function' ? mask(p.val(), undefined, el,  options) : mask;

        // public methods
        jMask.mask = mask;
        jMask.options = options;
        jMask.remove = function() {
            var caret = p.getCaret();
            if (jMask.options.placeholder) {
                el.removeAttr('placeholder');
            }
            if (el.data('mask-maxlength')) {
                el.removeAttr('maxlength');
            }
            p.destroyEvents();
            p.val(jMask.getCleanVal());
            p.setCaret(caret);
            return el;
        };

        // get value without mask
        jMask.getCleanVal = function() {
           return p.getMasked(true);
        };

        // get masked value without the value being in the input or element
        jMask.getMaskedVal = function(val) {
           return p.getMasked(false, val);
        };

       jMask.init = function(onlyMask) {
            onlyMask = onlyMask || false;
            options = options || {};

            jMask.clearIfNotMatch  = $.jMaskGlobals.clearIfNotMatch;
            jMask.byPassKeys       = $.jMaskGlobals.byPassKeys;
            jMask.translation      = $.extend({}, $.jMaskGlobals.translation, options.translation);

            jMask = $.extend(true, {}, jMask, options);

            regexMask = p.getRegexMask();

            if (onlyMask) {
                p.events();
                p.val(p.getMasked());
            } else {
                if (options.placeholder) {
                    el.attr('placeholder' , options.placeholder);
                }

                // this is necessary, otherwise if the user submit the form
                // and then press the "back" button, the autocomplete will erase
                // the data. Works fine on IE9+, FF, Opera, Safari.
                if (el.data('mask')) {
                  el.attr('autocomplete', 'off');
                }

                // detect if is necessary let the user type freely.
                // for is a lot faster than forEach.
                for (var i = 0, maxlength = true; i < mask.length; i++) {
                    var translation = jMask.translation[mask.charAt(i)];
                    if (translation && translation.recursive) {
                        maxlength = false;
                        break;
                    }
                }

                if (maxlength) {
                    el.attr('maxlength', mask.length).data('mask-maxlength', true);
                }

                p.destroyEvents();
                p.events();

                var caret = p.getCaret();
                p.val(p.getMasked());
                p.setCaret(caret);
            }
        };

        jMask.init(!el.is('input'));
    };

    $.maskWatchers = {};
    var HTMLAttributes = function () {
        var input = $(this),
            options = {},
            prefix = 'data-mask-',
            mask = input.attr('data-mask');

        if (input.attr(prefix + 'reverse')) {
            options.reverse = true;
        }

        if (input.attr(prefix + 'clearifnotmatch')) {
            options.clearIfNotMatch = true;
        }

        if (input.attr(prefix + 'selectonfocus') === 'true') {
           options.selectOnFocus = true;
        }

        if (notSameMaskObject(input, mask, options)) {
            return input.data('mask', new Mask(this, mask, options));
        }
    },
    notSameMaskObject = function(field, mask, options) {
        options = options || {};
        var maskObject = $(field).data('mask'),
            stringify = JSON.stringify,
            value = $(field).val() || $(field).text();
        try {
            if (typeof mask === 'function') {
                mask = mask(value);
            }
            return typeof maskObject !== 'object' || stringify(maskObject.options) !== stringify(options) || maskObject.mask !== mask;
        } catch (e) {}
    },
    eventSupported = function(eventName) {
        var el = document.createElement('div'), isSupported;

        eventName = 'on' + eventName;
        isSupported = (eventName in el);

        if ( !isSupported ) {
            el.setAttribute(eventName, 'return;');
            isSupported = typeof el[eventName] === 'function';
        }
        el = null;

        return isSupported;
    };

    $.fn.mask = function(mask, options) {
        options = options || {};
        var selector = this.selector,
            globals = $.jMaskGlobals,
            interval = globals.watchInterval,
            watchInputs = options.watchInputs || globals.watchInputs,
            maskFunction = function() {
                if (notSameMaskObject(this, mask, options)) {
                    return $(this).data('mask', new Mask(this, mask, options));
                }
            };

        $(this).each(maskFunction);

        if (selector && selector !== '' && watchInputs) {
            clearInterval($.maskWatchers[selector]);
            $.maskWatchers[selector] = setInterval(function(){
                $(document).find(selector).each(maskFunction);
            }, interval);
        }
        return this;
    };

    $.fn.masked = function(val) {
        return this.data('mask').getMaskedVal(val);
    };

    $.fn.unmask = function() {
        clearInterval($.maskWatchers[this.selector]);
        delete $.maskWatchers[this.selector];
        return this.each(function() {
            var dataMask = $(this).data('mask');
            if (dataMask) {
                dataMask.remove().removeData('mask');
            }
        });
    };

    $.fn.cleanVal = function() {
        return this.data('mask').getCleanVal();
    };

    $.applyDataMask = function(selector) {
        selector = selector || $.jMaskGlobals.maskElements;
        var $selector = (selector instanceof $) ? selector : $(selector);
        $selector.filter($.jMaskGlobals.dataMaskAttr).each(HTMLAttributes);
    };

    var globals = {
        maskElements: 'input,td,span,div',
        dataMaskAttr: '*[data-mask]',
        dataMask: true,
        watchInterval: 300,
        watchInputs: true,
        keyStrokeCompensation: 10,
        // old versions of chrome dont work great with input event
        useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && eventSupported('input'),
        watchDataMask: false,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            '0': {pattern: /\d/},
            '9': {pattern: /\d/, optional: true},
            '#': {pattern: /\d/, recursive: true},
            'A': {pattern: /[a-zA-Z0-9]/},
            'S': {pattern: /[a-zA-Z]/}
        }
    };

    $.jMaskGlobals = $.jMaskGlobals || {};
    globals = $.jMaskGlobals = $.extend(true, {}, globals, $.jMaskGlobals);

    // looking for inputs with data-mask attribute
    if (globals.dataMask) {
        $.applyDataMask();
    }

    setInterval(function() {
        if ($.jMaskGlobals.watchDataMask) {
            $.applyDataMask();
        }
    }, globals.watchInterval);
}, window.jQuery, window.Zepto));

coreuiForm$1.fields.mask = {

    _id: '',
    _hash: '',
    _form: null,
    _index: 0,
    _value: '',
    _options: {
        type: 'mask',
        name: null,
        label: null,
        labelWidth: null,
        width: null,
        outContent: null,
        description: null,
        errorText: null,
        attach: null,
        attr: {
            class: 'form-control form-control-sm d-inline-block'
        },
        required: null,
        readonly: null,
        datalist: null,
        show: true,
        column: null
    },


    /**
     * Инициализация
     * @param {coreuiFormInstance} form
     * @param {object}             options
     * @param {int}                index Порядковый номер на форме
     */
    init: function (form, options, index) {

        this._form    = form;
        this._index   = index;
        this._id      = form.getId() + "-field-" + (options.hasOwnProperty('name') ? options.name : index);
        this._value   = coreuiFormUtils$1.getFieldValue(form, options);
        this._options = coreuiFormUtils$1.mergeFieldOptions(form, this._options, options);
        this._hash    = coreuiFormUtils$1.hashCode();
        let that      = this;

        form.on('shown.coreui.form', function () {
            if ( ! that._options.readonly) {
                that._initEvents();
            }
        });
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return $.extend(true, {}, this._options);
    },


    /**
     * Изменение режима поля только для чтения
     * @param {bool} isReadonly
     */
    readonly: function (isReadonly) {

        this._value            = this.getValue();
        this._options.readonly = !! isReadonly;

        $('.content-' + this._hash).html(
            this.renderContent()
        );

        if ( ! this._options.readonly) {
            this._initEvents();
        }
    },


    /**
     * Скрытие поля
     * @param {int} duration
     */
    hide: function (duration) {

        $('#coreui-form-' + this._id).hide(duration);
    },


    /**
     * Показ поля
     * @param {int} duration
     */
    show: function (duration) {

        $('#coreui-form-' + this._id).show(duration);
    },


    /**
     * Получение значения в поле
     * @returns {string}
     */
    getValue: function () {

        return this._options.readonly
            ? this._value
            : $('.content-' + this._hash + ' input').val();
    },


    /**
     * Установка значения в поле
     * @param {string} value
     */
    setValue: function (value) {

        if (['string', 'number'].indexOf(typeof value) < 0) {
            return;
        }

        value = value.replace(/[^\d\w]/g, '');

        this._value = value;

        if (this._options.readonly) {
            $('.content-' + this._hash).text(value);
        } else {
            $('.content-' + this._hash + ' input').val(value);
        }
    },


    /**
     * Установка валидности поля
     * @param {bool|null} isValid
     * @param {text} text
     */
    validate: function (isValid, text) {

        if (this._options.readonly) {
            return;
        }

        let container = $('.content-' + this._hash);
        let input     = $('input', container);

        container.find('.valid-feedback').remove();
        container.find('.invalid-feedback').remove();

        if (isValid === null) {
            input.removeClass('is-invalid');
            input.removeClass('is-valid');

        } else if (isValid) {
            input.removeClass('is-invalid');
            input.addClass('is-valid');

            if (typeof text === 'undefined' && typeof this._options.validText === 'string') {
                text = this._options.validText;
            }

            if (typeof text === 'string') {
                container.append('<div class="valid-feedback">' + text + '</div>');
            }
        } else {
            input.removeClass('is-valid');
            input.addClass('is-invalid');

            if (typeof text === 'undefined') {
                if (typeof this._options.invalidText === 'string') {
                    text = this._options.invalidText;

                } else if ( ! text && this._options.required) {
                    text = this._form.getLang().required_field;
                }
            }

            if (typeof text === 'string') {
                container.append('<div class="invalid-feedback">' + text + '</div>');
            }
        }
    },


    /**
     * Проверка валидности поля
     * @return {boolean}
     */
    isValid: function () {

        let input = $('.content-' + this._hash + ' input');

        if (input[0]) {
            return input.is(':valid');
        }

        return null;
    },


    /**
     * Формирование поля
     * @returns {string}
     */
    render: function() {

        let options      = this.getOptions();
        let attachFields = coreuiFormUtils$1.getAttacheFields(this._form, options);

        return ejs.render(tpl['form-field-label.html'], {
            id: this._id,
            form:  this._form,
            hash: this._hash,
            field: options,
            content: this.renderContent(),
            attachFields: attachFields,
        });
    },


    /**
     * Формирование контента поля
     * @return {*}
     */
    renderContent: function () {

        return this._options.readonly
            ? this._renderContentReadonly()
            : this._renderContent();
    },


    /**
     *
     * @return {*}
     * @private
     */
    _renderContent: function () {

        let attributes = [];
        let datalist   = [];
        let options    = this.getOptions();
        let datalistId = coreuiFormUtils$1.hashCode();

        if ( ! options.hasOwnProperty('attr') ||
            typeof options.attr !== 'object' ||
            options.attr === null ||
            Array.isArray(options.attr)
        ) {
            options.attr = {};
        }

        if (options.name) {
            options.attr.name = this._options.name;
        }

        options.attr.type  = 'text';
        options.attr.value = this._value !== null ? this._value : '';

        if (options.width) {
            options.attr = coreuiFormUtils$1.mergeAttr(
                { style: 'width:' + options.width },
                options.attr
            );
        }
        if (options.required) {
            options.attr.required = 'required';
        }


        if (options.hasOwnProperty('datalist') &&
            typeof options.datalist === 'object' &&
            Array.isArray(options.datalist)
        ) {
            options.attr.list = datalistId;

            $.each(options.datalist, function (key, itemAttributes) {
                let datalistAttr = [];

                $.each(itemAttributes, function (name, value) {
                    datalistAttr.push(name + '="' + value + '"');
                });

                datalist.push({
                    attr: datalistAttr.length > 0 ? (' ' + datalistAttr.join(' ')) : ''
                });
            });
        }

        $.each(options.attr, function (name, value) {
            attributes.push(name + '="' + value + '"');
        });

        return ejs.render(tpl['fields/input.html'], {
            field: options,
            datalistId: datalistId,
            value: this._value !== null ? this._value : '',
            render: {
                attr: attributes.length > 0 ? (' ' + attributes.join(' ')) : '',
                datalist: datalist
            },
        });
    },


    /**
     *
     * @private
     */
    _renderContentReadonly: function () {

        let options = this.getOptions();

        return ejs.render(tpl['fields/input.html'], {
            field: options,
            value: this._value !== null ? this._value : ''
        });
    },


    /**
     * Инициализация событий
     * @private
     */
    _initEvents: function () {

        $('#coreui-form-' + this._id + ' .content-' + this._hash + ' input')
            .mask(this._options.mask, this._options.options);
    }
};

coreuiForm$1.fields.modal = {

    _id: '',
    _hash: '',
    _form: null,
    _value: '',
    _text: '',
    _options: {
        type: 'modal',
        name: null,
        label: null,
        labelWidth: null,
        width: null,
        outContent: null,
        description: null,
        errorText: null,
        fields: [],
        options: {
            title: '',
            size: 'lg',
            url: '',
            onHidden: null,
            onClear: null,
            onChange: null,
        },
        required: null,
        readonly: null,
        show: true,
        column: null
    },


    /**
     * Инициализация
     * @param {coreuiFormInstance} form
     * @param {object}               options
     * @param {int}                  index Порядковый номер на форме
     */
    init: function (form, options, index) {

        let formRecord = form.getRecord();

        this._form    = form;
        this._id      = form.getId() + "-field-" + (options.hasOwnProperty('name') ? options.name : index);
        this._options = coreuiFormUtils$1.mergeFieldOptions(form, this._options, options);
        this._hash    = coreuiFormUtils$1.hashCode();

        if (typeof options.name === 'string' &&
            formRecord.hasOwnProperty(options.name) &&
            ['object'].indexOf(typeof formRecord[options.name]) >= 0
        ) {
            let record = formRecord[options.name];

            this._value = record.hasOwnProperty('value') && ['number', 'string'].indexOf(typeof(record.value)) >= 0 ? record.value : '';
            this._text  = record.hasOwnProperty('text') && ['number', 'string'].indexOf(typeof(record.text)) >= 0 ? record.text : '';
        }


        let that = this;

        form.on('shown.coreui.form', function () {
            that._initEvents();
        });
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return $.extend(true, {}, this._options);
    },


    /**
     * Изменение режима поля только для чтения
     * @param {bool} isReadonly
     */
    readonly: function (isReadonly) {

        this._value            = this.getValue();
        this._options.readonly = !! isReadonly;

        $('.content-' + this._hash).html(
            this.renderContent()
        );

        if ( ! this._options.readonly) {
            this._initEvents();
        }
    },


    /**
     * Скрытие поля
     * @param {int} duration
     */
    hide: function (duration) {

        $('#coreui-form-' + this._id).hide(duration);
    },


    /**
     * Показ поля
     * @param {int} duration
     */
    show: function (duration) {

        $('#coreui-form-' + this._id).show(duration);
    },


    /**
     * Получение значения в поле
     * @returns {string}
     */
    getValue: function () {

        return this._options.readonly
            ? this._value
            : $('.content-' + this._hash + ' input.coreui-form-modal-value').val();
    },


    /**
     * Установка значения в поле
     * @param {string} value
     * @param {string} text
     */
    setValue: function (value, text) {

        if (['string', 'number'].indexOf(typeof value) < 0) {
            return;
        }

        this._value = value;

        if (this._options.readonly) {
            $('.content-' + this._hash).text(text);

        } else {
            let elementValue = $('.content-' + this._hash + ' .coreui-form-modal-value');
            let elementText  = $('.content-' + this._hash + ' .coreui-form-modal-text');
            let oldValue     = elementValue.val();

            elementValue.val(value);
            elementText.val(text);


            if (oldValue != value) {
                let modal = this._options.hasOwnProperty('options') && typeof (this._options.options) === 'object'
                    ? this._options.options
                    : {};

                if (modal.hasOwnProperty('onChange')) {
                    if (typeof(modal.onChange) === 'function') {
                        modal.onChange(this);

                    } else if (typeof(modal.onChange) === 'string') {
                        let func = coreuiFormUtils$1.getFunctionByName(modal.onChange);

                        if (typeof func === 'function') {
                            func(this);
                        } else {
                            eval(modal.onChange);
                        }
                    }
                }

                this._form._trigger('change-modal.coreui.form', this, [this]);
            }
        }
    },


    /**
     * Установка валидности поля
     * @param {bool|null} isValid
     * @param {text} text
     */
    validate: function (isValid, text) {

        if (this._options.readonly) {
            return;
        }

        let container = $('.content-' + this._hash);

        container.find('.text-success').remove();
        container.find('.text-danger').remove();

        if (isValid === null) {
            return;
        }

        if (isValid) {
            if (typeof text === 'undefined' && typeof this._options.validText === 'string') {
                text = this._options.validText;
            }

            if (typeof text === 'string') {
                container.append('<div class="ps-2 text-success">' + text + '</div>');
            }

        } else {
            if (typeof text === 'undefined') {
                if (typeof this._options.invalidText === 'string') {
                    text = this._options.invalidText;

                } else if ( ! text && this._options.required) {
                    text = this._form.getLang().required_field;
                }
            }

            if (typeof text === 'string') {
                container.append('<div class="ps-2 text-danger">' + text + '</div>');
            }
        }
    },


    /**
     * Проверка валидности поля
     * @return {boolean}
     */
    isValid: function () {

        if (this._options.required && ! this._options.readonly) {
            return !! this.getValue();
        }

        return true;
    },


    /**
     * Формирование поля
     * @returns {string}
     */
    render: function() {

        let options      = this.getOptions();
        let attachFields = coreuiFormUtils$1.getAttacheFields(this._form, options);

        return ejs.render(tpl['form-field-label.html'], {
            id: this._id,
            form:  this._form,
            hash: this._hash,
            field: options,
            content: this.renderContent(),
            attachFields: attachFields
        });
    },


    /**
     * Формирование контента поля
     * @return {*}
     */
    renderContent: function () {

        let fieldOptions = this.getOptions();
        let attributes   = [];
        let textAttr     = {
            type: 'text',
            readonly: 'readonly',
            class: 'form-control form-control-sm coreui-form-modal-text',
            value: this._text !== null ? this._text : ''
        };

        if (fieldOptions.required) {
            textAttr.required = 'required';
        }

        if (fieldOptions.hasOwnProperty('attr') &&
            typeof fieldOptions.attr === 'object' &&
            Array.isArray(fieldOptions.attr)
        ) {
            textAttr = coreuiFormUtils$1.mergeAttr(textAttr, fieldOptions.attr);
        }

        $.each(textAttr, function (name, value) {
            attributes.push(name + '="' + value + '"');
        });

        return ejs.render(tpl['fields/modal.html'], {
            field: fieldOptions,
            value: this._value !== null ? this._value : '',
            text: this._text !== null ? this._text : '',
            lang: this._form.getLang(),
            render: {
                width: this._options.width,
                attr: attributes.length > 0 ? attributes.join(' ') : ''
            },
        });
    },


    /**
     * Инициализация событий
     * @private
     */
    _initEvents: function () {

        let that  = this;
        let modal = this._options.hasOwnProperty('options') && typeof(this._options.options) === 'object'
            ? this._options.options
            : {};


        // Очистка
        $('.content-' + this._hash + ' .btn-modal-clear').click(function (e) {
            if (modal.hasOwnProperty('onClear')) {
                if (typeof(modal.onClear) === 'function') {
                    modal.onClear(that);

                } else if (typeof(modal.onClear) === 'string') {
                    let func = coreuiFormUtils$1.getFunctionByName(modal.onClear);

                    if (typeof func === 'function') {
                        func(that);
                    } else {
                        eval(modal.onClear);
                    }
                }
            }

            that._form._trigger('clear-modal.coreui.form', that, [ that, e ]);

            that.setValue('', '');
        });

        // Выбор
        $('.content-' + this._hash + ' .btn-modal-select').click(function (e) {
            let title = modal.hasOwnProperty('title') && typeof(modal.title) === 'string'
                ? modal.title
                : '';

            let size = modal.hasOwnProperty('size') && typeof(modal.size) === 'string'
                ? modal.size
                : 'lg';

            let url = modal.hasOwnProperty('url') && typeof(modal.url) === 'string'
                ? modal.url
                : '';

            if ( ! url) {
                return;
            }


            let modalId      = coreuiFormUtils$1.hashCode();
            let modalLoading = ejs.render(tpl['fields/modal-loading.html'], {
                lang: that._form.getLang(),
            });


            if (CoreUI.hasOwnProperty('modal')) {
                let onShow   = null;
                let onHidden = null;

                if (modal.hasOwnProperty('onHidden')) {
                    if (typeof(modal.onHidden) === 'function') {
                        onHidden = modal.onHidden;

                    } else if (typeof(modal.onHidden) === 'string') {
                        let func = coreuiFormUtils$1.getFunctionByName(modal.onHidden);

                        if (typeof func === 'function') {
                            onHidden = func;
                        }
                    }
                }

                if (modal.hasOwnProperty('onShow')) {
                    if (typeof(modal.onShow) === 'function') {
                        onShow = modal.onShow;

                    } else if (typeof(modal.onShow) === 'string') {
                        let func = coreuiFormUtils$1.getFunctionByName(modal.onShow);

                        if (typeof func === 'function') {
                            onShow = func;
                        }
                    }
                }

                CoreUI.modal.show(title, modalLoading, {
                    id: modalId,
                    size: size,
                    onShow: onShow,
                    onHidden: onHidden
                });
            }

            $.ajax({
                url: url,
                method: 'GET',
                beforeSend: function(xhr) {
                    that._form._trigger('before-load-modal.coreui.form', that, [ that, xhr ]);
                },
                success: function (result) {
                    $('#modal-' + modalId + ' .modal-body').html(result);
                    that._form._trigger('success-load-modal.coreui.form', that, [ that, result ]);
                },
                error: function(xhr, textStatus, errorThrown) {
                    that._form._trigger('error-load-modal.coreui.form', that, [ that, xhr, textStatus, errorThrown ]);
                },
                complete: function(xhr, textStatus) {
                    that._form._trigger('complete-load-modal.coreui.form', that, [ that, xhr, textStatus ]);
                },
            });


            that._form._trigger('select-modal.coreui.form', that, [ that, e ]);
        });
    }
};

coreuiForm$1.fields.number = {

    _id: '',
    _hash: '',
    _form: null,
    _index: 0,
    _value: '',
    _options: {
        type: 'number',
        name: null,
        label: null,
        labelWidth: null,
        width: null,
        outContent: null,
        description: null,
        errorText: null,
        attach: null,
        attr: {
            class: 'form-control form-control-sm d-inline-block',
            step: 'any'
        },
        required: null,
        readonly: null,
        datalist: null,
        show: true,
        column: null,
        precision: null
    },


    /**
     * Инициализация
     * @param {coreuiFormInstance} form
     * @param {object}               options
     * @param {int}                  index Порядковый номер на форме
     */
    init: function (form, options, index) {

        this._form    = form;
        this._index   = index;
        this._id      = form.getId() + "-field-" + (options.hasOwnProperty('name') ? options.name : index);
        this._hash    = coreuiFormUtils$1.hashCode();
        this._value   = coreuiFormUtils$1.getFieldValue(form, options);
        this._options = coreuiFormUtils$1.mergeFieldOptions(form, this._options, options);


        // Установка точности
        if (this._options.precision === null) {
            let precision = 0;

            if (this._options.attr.hasOwnProperty('step') &&
                this._options.attr.step !== 'any' &&
                ['string', 'number'].indexOf(typeof this._options.attr.step) >= 0
            ) {
                let match = $.trim(this._options.attr.step.toString()).match(/\.(\d+)$/);

                if (match && match.hasOwnProperty(1)) {
                    precision = match ? match[1].length : precision;
                }
            }

            this._options.precision = precision;
        }


        let that = this;

        form.on('shown.coreui.form', function () {
            if ( ! that._options.readonly) {
                that._initEvents();
            }
        });
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return $.extend(true, {}, this._options);
    },


    /**
     * Изменение режима поля только для чтения
     * @param {bool} isReadonly
     */
    readonly: function (isReadonly) {

        this._value            = this.getValue();
        this._options.readonly = !! isReadonly;

        $('.content-' + this._hash).html(
            this.renderContent()
        );

        if ( ! this._options.readonly) {
            this._initEvents();
        }
    },


    /**
     * Скрытие поля
     * @param {int} duration
     */
    hide: function (duration) {

        $('#coreui-form-' + this._id).hide(duration);
    },


    /**
     * Показ поля
     * @param {int} duration
     */
    show: function (duration) {

        $('#coreui-form-' + this._id).show(duration);
    },


    /**
     * Получение значения в поле
     * @returns {string}
     */
    getValue: function () {

        return this._options.readonly
            ? this._value
            : $('.content-' + this._hash + ' input').val();
    },


    /**
     * Установка значения в поле
     * @param {string} value
     */
    setValue: function (value) {

        if (['string', 'number'].indexOf(typeof value) < 0 ||
            ! value.toString().match(/^\-?\d+\.?\d*$/)
        ) {
            return;
        }

        if (this._options.precision >= 0) {
            value = coreuiFormUtils$1.round(value, this._options.precision);
        }

        if (this._options.attr.hasOwnProperty('min')) {
            value = value < Number(this._options.attr.min)
                ? Number(this._options.attr.min)
                : value;
        }

        if (this._options.attr.hasOwnProperty('max')) {
            value = value > Number(this._options.attr.max)
                ? Number(this._options.attr.max)
                : value;
        }

        this._value = value;

        if (this._options.readonly) {
            $('.content-' + this._hash).text(value);
        } else {
            $('.content-' + this._hash + ' input').val(value);
        }
    },


    /**
     * Установка валидности поля
     * @param {bool|null} isValid
     * @param {text} text
     */
    validate: function (isValid, text) {

        if (this._options.readonly) {
            return;
        }

        let container = $('.content-' + this._hash);
        let input     = $('input', container);

        container.find('.valid-feedback').remove();
        container.find('.invalid-feedback').remove();

        if (isValid === null) {
            input.removeClass('is-invalid');
            input.removeClass('is-valid');

        } else if (isValid) {
            input.removeClass('is-invalid');
            input.addClass('is-valid');

            if (typeof text === 'undefined' && typeof this._options.validText === 'string') {
                text = this._options.validText;
            }

            if (typeof text === 'string') {
                container.append('<div class="valid-feedback">' + text + '</div>');
            }
        } else {
            input.removeClass('is-valid');
            input.addClass('is-invalid');

            if (typeof text === 'undefined') {
                if (typeof this._options.invalidText === 'string') {
                    text = this._options.invalidText;

                } else if ( ! text && this._options.required) {
                    text = this._form.getLang().required_field;
                }
            }

            if (typeof text === 'string') {
                container.append('<div class="invalid-feedback">' + text + '</div>');
            }
        }
    },


    /**
     * Проверка валидности поля
     * @return {boolean}
     */
    isValid: function () {

        let input = $('.content-' + this._hash + ' input');

        if (input[0]) {
            return input.is(':valid');
        }

        return null;
    },


    /**
     * Формирование поля
     * @returns {string}
     */
    render: function() {

        let options      = $.extend(true, {}, this._options);
        let attachFields = coreuiFormUtils$1.getAttacheFields(this._form, options);

        return ejs.render(tpl['form-field-label.html'], {
            id: this._id,
            form:  this._form,
            hash: this._hash,
            field: options,
            content: this.renderContent(),
            attachFields: attachFields,
        });
    },


    /**
     * Формирование контента поля
     * @return {*}
     */
    renderContent: function () {

        let attributes = [];
        let datalist   = [];
        let options    = this.getOptions();
        let datalistId = coreuiFormUtils$1.hashCode();


        if ( ! options.hasOwnProperty('attr') ||
            typeof options.attr !== 'object' ||
            options.attr === null ||
            Array.isArray(options.attr)
        ) {
            options.attr = {};
        }

        if (options.name) {
            options.attr.name = this._options.name;
        }

        options.attr.type  = 'number';
        options.attr.value = this._value !== null ? this._value : '';

        if (options.width) {
            options.attr = coreuiFormUtils$1.mergeAttr(
                { style: 'width:' + options.width },
                options.attr
            );
        }

        if (options.required) {
            options.attr.required = 'required';
        }


        if (options.hasOwnProperty('datalist') &&
            typeof options.datalist === 'object' &&
            Array.isArray(options.datalist)
        ) {
            options.attr.list = datalistId;

            $.each(options.datalist, function (key, itemAttributes) {
                let datalistAttr = [];

                $.each(itemAttributes, function (name, value) {
                    datalistAttr.push(name + '="' + value + '"');
                });

                datalist.push({
                    attr: datalistAttr.length > 0 ? (' ' + datalistAttr.join(' ')) : ''
                });
            });
        }

        $.each(options.attr, function (name, value) {
            attributes.push(name + '="' + value + '"');
        });

        return ejs.render(tpl['fields/input.html'], {
            field: options,
            datalistId: datalistId,
            value: this._value !== null ? this._value : '',
            render: {
                attr: attributes.length > 0 ? (' ' + attributes.join(' ')) : '',
                datalist: datalist
            },
        });
    },


    /**
     * Инициализация событий
     * @private
     */
    _initEvents: function () {

        $('.content-' + this._hash + ' input').keydown(function (e) {
            let k = e.keyCode || e.which;
            let ok = k >= 35 && k <= 40 ||      // arrows
                k >= 96 && k <= 105 ||     // 0-9 numpad
                k === 189 || k === 109 ||  // minus
                k === 110 || k === 190 ||  // dot
                k === 9 ||  //tab
                k === 46 || //del
                k === 8 ||  // backspaces
                ( ! e.shiftKey && k >= 48 && k <= 57); // only 0-9 (ignore SHIFT options)

            if ( ! ok || (e.ctrlKey && e.altKey)) {
                e.preventDefault();
            }
        });

        let that = this;

        $('.content-' + this._hash + ' input').blur(function (e) {
            let value = $(this).val();

            if (that._options.precision >= 0) {
                value = coreuiFormUtils$1.round(value, that._options.precision);
            }

            if (that._options.attr.hasOwnProperty('min')) {
                value = value < Number(that._options.attr.min)
                    ? Number(that._options.attr.min)
                    : value;
            }

            if (that._options.attr.hasOwnProperty('max')) {
                value = value > Number(that._options.attr.max)
                    ? Number(that._options.attr.max)
                    : value;
            }

            $(this).val(value);
        });
    }
};

coreuiForm$1.fields.radio = {

    _id: '',
    _hash: '',
    _form: null,
    _index: 0,
    _value: '',
    _options: {
        type: 'radio',
        name: null,
        label: null,
        labelWidth: null,
        inline: false,
        outContent: null,
        description: null,
        errorText: null,
        options: [],
        fields: [],
        required: null,
        readonly: null,
        show: true,
        column: null
    },


    /**
     * Инициализация
     * @param {coreuiFormInstance} form
     * @param {object}               options
     * @param {int}                  index Порядковый номер на форме
     */
    init: function (form, options, index) {

        this._form    = form;
        this._id      = form.getId() + "-field-" + (options.hasOwnProperty('name') ? options.name : index);
        this._hash    = coreuiFormUtils$1.hashCode();
        this._value   = coreuiFormUtils$1.getFieldValue(form, options);
        this._options = coreuiFormUtils$1.mergeFieldOptions(form, this._options, options);
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return $.extend(true, {}, this._options);
    },


    /**
     * Изменение режима поля только для чтения
     * @param {bool} isReadonly
     */
    readonly: function (isReadonly) {

        this._value            = this.getValue();
        this._options.readonly = !! isReadonly;

        $('.content-' + this._hash).html(
            this.renderContent()
        );
    },


    /**
     * Скрытие поля
     * @param {int} duration
     */
    hide: function (duration) {

        $('#coreui-form-' + this._id).hide(duration);
    },


    /**
     * Показ поля
     * @param {int} duration
     */
    show: function (duration) {

        $('#coreui-form-' + this._id).show(duration);
    },


    /**
     * Получение значения в поле
     * @returns {string}
     */
    getValue: function () {

        return this._options.readonly
            ? this._value
            : $('.content-' + this._hash + ' input[type=radio]:checked').val();
    },


    /**
     * Установка значения в поле
     * @param {string} value
     */
    setValue: function (value) {

        if (['string', 'number'].indexOf(typeof value) < 0) {
            return;
        }

        if (this._options.readonly) {
            let that         = this;
            let fieldOptions = this.getOptions();

            if (fieldOptions.hasOwnProperty('options') &&
                typeof fieldOptions.options === 'object' &&
                Array.isArray(fieldOptions.options)
            ) {
                $.each(fieldOptions.options, function (key, option) {

                    if (option.hasOwnProperty('value') && option.value == value) {
                        let text = option.hasOwnProperty('text') && ['string', 'number'].indexOf(typeof(option.text)) >= 0
                            ? option.text
                            : '';

                        $('.content-' + that._hash).text(text);
                        that._value = value;
                        return false;
                    }
                });
            }

        } else {
            let input = $('.content-' + this._hash + ' input[type=radio][value="' + value + '"]');

            if (input[0]) {
                input.prop('checked', true);
                this._value = value;
            }
        }
    },


    /**
     * Установка валидности поля
     * @param {bool|null} isValid
     * @param {text} text
     */
    validate: function (isValid, text) {

        if (this._options.readonly) {
            return;
        }

        let container = $('.content-' + this._hash);
        let lastInput = $('.form-check:last-child', container);
        let inputs    = $('input', container);

        container.find('.valid-feedback').remove();
        container.find('.invalid-feedback').remove();

        if (isValid === null) {
            inputs.removeClass('is-invalid');
            inputs.removeClass('is-valid');

        } else if (isValid) {
            inputs.removeClass('is-invalid');
            inputs.addClass('is-valid');

            if (typeof text === 'undefined' && typeof this._options.validText === 'string') {
                text = this._options.validText;
            }

            if (typeof text === 'string') {
                lastInput.append('<div class="valid-feedback">' + text + '</div>');
            }
        } else {
            inputs.removeClass('is-valid');
            inputs.addClass('is-invalid');

            if (typeof text === 'undefined') {
                if (typeof this._options.invalidText === 'string') {
                    text = this._options.invalidText;

                } else if ( ! text && this._options.required) {
                    text = this._form.getLang().required_field;
                }
            }

            if (typeof text === 'string') {
                lastInput.append('<div class="invalid-feedback">' + text + '</div>');
            }
        }
    },


    /**
     * Проверка валидности поля
     * @return {boolean}
     */
    isValid: function () {

        if (this._options.required && ! this._options.readonly) {
            let value = this.getValue();
            return typeof value === 'string' && value !== '';
        }

        return true;
    },


    /**
     * Формирование поля
     * @returns {string}
     */
    render: function() {

        let options      = this.getOptions();
        let attachFields = coreuiFormUtils$1.getAttacheFields(this._form, options);

        return ejs.render(tpl['form-field-label.html'], {
            id: this._id,
            form:  this._form,
            hash: this._hash,
            field: this._options,
            content: this.renderContent(),
            attachFields: attachFields
        });
    },


    /**
     * Формирование контента поля
     * @return {*}
     */
    renderContent: function () {

        let that         = this;
        let radioOptions = [];
        let fieldOptions = this.getOptions();
        let selectedItem = [];

        if (fieldOptions.hasOwnProperty('options') &&
            typeof fieldOptions.options === 'object' &&
            Array.isArray(fieldOptions.options)
        ) {
            $.each(fieldOptions.options, function (key, option) {
                let attributes = [];
                let itemAttr = {
                    type: 'radio',
                    class: 'form-check-input'
                };
                let optionText   = option.hasOwnProperty('text') && ['string', 'number'].indexOf(typeof(option.text)) >= 0
                    ? option.text
                    : '';

                if (fieldOptions.name) {
                    itemAttr.name = that._options.name;
                }

                if (fieldOptions.required) {
                    itemAttr.required = 'required';
                }

                $.each(option, function (name, value) {
                    if (name !== 'text') {
                        if (name === 'class') {
                            itemAttr[name] = itemAttr[name] + ' ' + value;
                        } else {
                            itemAttr[name] = value;
                        }
                    }
                });

                itemAttr.id = coreuiFormUtils$1.hashCode();

                if (that._value == option.value) {
                    if (option.hasOwnProperty('text') && option.text) {
                        selectedItem.push(option.text);
                    }
                    itemAttr.checked = 'checked';
                }

                $.each(itemAttr, function (name, value) {
                    attributes.push(name + '="' + value + '"');
                });


                radioOptions.push({
                    id: itemAttr.id,
                    text: optionText,
                    attr: attributes.length > 0 ? (' ' + attributes.join(' ')) : ''
                });
            });
        }

        return ejs.render(tpl['fields/radio.html'], {
            field: fieldOptions,
            value: this._value,
            render: {
                options: radioOptions,
                selectedItem: selectedItem
            },
        });
    }
};

coreuiForm$1.fields.range = {

    _id: '',
    _hash: '',
    _form: null,
    _index: 0,
    _value: '',
    _options: {
        type: 'range',
        name: null,
        label: null,
        labelWidth: null,
        width: null,
        outContent: null,
        description: null,
        errorText: null,
        attach: null,
        attr: {
            class: 'form-range d-inline-block pt-1'
        },
        required: null,
        readonly: null,
        datalist: null,
        show: true,
        column: null
    },


    /**
     * Инициализация
     * @param {coreuiFormInstance} form
     * @param {object}               options
     * @param {int}                  index Порядковый номер на форме
     */
    init: function (form, options, index) {

        this._form    = form;
        this._index   = index;
        this._id      = form.getId() + "-field-" + (options.hasOwnProperty('name') ? options.name : index);
        this._hash    = coreuiFormUtils$1.hashCode();
        this._value   = coreuiFormUtils$1.getFieldValue(form, options);
        this._options = coreuiFormUtils$1.mergeFieldOptions(form, this._options, options);
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return $.extend(true, {}, this._options);
    },


    /**
     * Изменение режима поля только для чтения
     * @param {bool} isReadonly
     */
    readonly: function (isReadonly) {

        this._value            = this.getValue();
        this._options.readonly = !! isReadonly;

        $('.content-' + this._hash).html(
            this.renderContent()
        );
    },


    /**
     * Скрытие поля
     * @param {int} duration
     */
    hide: function (duration) {

        $('#coreui-form-' + this._id).hide(duration);
    },


    /**
     * Показ поля
     * @param {int} duration
     */
    show: function (duration) {

        $('#coreui-form-' + this._id).show(duration);
    },


    /**
     * Получение значения в поле
     * @returns {string}
     */
    getValue: function () {

        return this._options.readonly
            ? this._value
            : $('.content-' + this._hash + ' input').val();
    },


    /**
     * Установка значения в поле
     * @param {string} value
     */
    setValue: function (value) {

        if (['string', 'number'].indexOf(typeof value) < 0) {
            return;
        }

        this._value = value;

        if (this._options.readonly) {
            $('.content-' + this._hash).text(value);
        } else {
            $('.content-' + this._hash + ' input').val(value);
        }
    },


    /**
     * Установка валидности поля
     * @param {bool|null} isValid
     * @param {text} text
     */
    validate: function (isValid, text) {

        if (this._options.readonly) {
            return;
        }

        let container = $('.content-' + this._hash);
        let input     = $('input', container);

        container.find('.valid-feedback').remove();
        container.find('.invalid-feedback').remove();

        if (isValid === null) {
            input.removeClass('is-invalid');
            input.removeClass('is-valid');

        } else if (isValid) {
            input.removeClass('is-invalid');
            input.addClass('is-valid');

            if (typeof text === 'undefined' && typeof this._options.validText === 'string') {
                text = this._options.validText;
            }

            if (typeof text === 'string') {
                container.append('<div class="valid-feedback">' + text + '</div>');
            }
        } else {
            input.removeClass('is-valid');
            input.addClass('is-invalid');

            if (typeof text === 'undefined') {
                if (typeof this._options.invalidText === 'string') {
                    text = this._options.invalidText;

                } else if ( ! text && this._options.required) {
                    text = this._form.getLang().required_field;
                }
            }

            if (typeof text === 'string') {
                container.append('<div class="invalid-feedback">' + text + '</div>');
            }
        }
    },


    /**
     * Проверка валидности поля
     * @return {boolean}
     */
    isValid: function () {

        let input = $('.content-' + this._hash + ' input');

        if (input[0]) {
            return input.is(':valid');
        }

        return null;
    },


    /**
     * Формирование поля
     * @returns {string}
     */
    render: function() {

        let options      = this.getOptions();
        let attachFields = coreuiFormUtils$1.getAttacheFields(this._form, options);

        return ejs.render(tpl['form-field-label.html'], {
            id: this._id,
            form:  this._form,
            hash: this._hash,
            field: options,
            content: this.renderContent(),
            attachFields: attachFields,
        });
    },


    /**
     * Формирование контента поля
     * @return {*}
     */
    renderContent: function () {

        let attributes = [];
        let datalist   = [];
        let options    = this.getOptions();
        let datalistId = coreuiFormUtils$1.hashCode();

        if ( ! options.hasOwnProperty('attr') ||
            typeof options.attr !== 'object' ||
            options.attr === null ||
            Array.isArray(options.attr)
        ) {
            options.attr = {};
        }

        if (options.name) {
            options.attr.name = this._options.name;
        }

        options.attr.type  = 'range';
        options.attr.value = this._value;

        if (options.width) {
            options.attr = coreuiFormUtils$1.mergeAttr(
                { style: 'width:' + options.width },
                options.attr
            );
        }
        if (options.required) {
            options.attr.required = 'required';
        }


        if (options.hasOwnProperty('datalist') &&
            typeof options.datalist === 'object' &&
            Array.isArray(options.datalist)
        ) {
            options.attr.list = datalistId;

            $.each(options.datalist, function (key, itemAttributes) {
                let datalistAttr = [];

                $.each(itemAttributes, function (name, value) {
                    datalistAttr.push(name + '="' + value + '"');
                });

                datalist.push({
                    attr: datalistAttr.length > 0 ? (' ' + datalistAttr.join(' ')) : ''
                });
            });
        }

        $.each(options.attr, function (name, value) {
            attributes.push(name + '="' + value + '"');
        });

        return ejs.render(tpl['fields/input.html'], {
            field: options,
            datalistId: datalistId,
            value: this._value,
            render: {
                attr: attributes.length > 0 ? (' ' + attributes.join(' ')) : '',
                datalist: datalist
            },
        });
    }
};

coreuiForm$1.fields.select = {

    _id: '',
    _hash: '',
    _form: null,
    _index: 0,
    _value: [],
    _options: {
        type: 'select',
        name: null,
        label: null,
        labelWidth: null,
        width: null,
        outContent: null,
        description: null,
        errorText: null,
        attach: null,
        attr: {
            class: 'form-select form-select-sm d-inline-block'
        },
        required: null,
        readonly: null,
        datalist: null,
        show: true,
        column: null
    },


    /**
     * Инициализация
     * @param {coreuiFormInstance} form
     * @param {object}             options
     * @param {int}                index Порядковый номер на форме
     */
    init: function (form, options, index) {

        this._form    = form;
        this._index   = index;
        this._id      = form.getId() + "-field-" + (options.hasOwnProperty('name') ? options.name : index);
        this._hash    = coreuiFormUtils$1.hashCode();
        this._value   = coreuiFormUtils$1.getFieldValue(form, options);
        this._options = coreuiFormUtils$1.mergeFieldOptions(form, this._options, options);
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return $.extend(true, {}, this._options);
    },


    /**
     * Изменение режима поля только для чтения
     * @param {bool} isReadonly
     */
    readonly: function (isReadonly) {

        this._value            = this.getValue();
        this._options.readonly = !! isReadonly;

        $('.content-' + this._hash).html(
            this.renderContent()
        );
    },


    /**
     * Скрытие поля
     * @param {int} duration
     */
    hide: function (duration) {

        $('#coreui-form-' + this._id).hide(duration);
    },


    /**
     * Показ поля
     * @param {int} duration
     */
    show: function (duration) {

        $('#coreui-form-' + this._id).show(duration);
    },


    /**
     * Получение значения из поля
     * @returns {array|string}
     */
    getValue: function () {

        if (this._options.readonly) {
            return this._value;

        } else {
            if (this._options.hasOwnProperty('attr') &&
                typeof this._options.attr === 'object' &&
                this._options.attr !== null &&
                ! Array.isArray(this._options.attr) &&
                this._options.attr.hasOwnProperty('multiple')
            ) {
                let values = [];

                $('.content-' + this._hash + ' select option:selected').each(function () {
                    values.push($(this).val());
                });

                return values;

            } else {
                return $('.content-' + this._hash + ' select option:selected').val()
            }
        }
    },


    /**
     * Установка значения в поле
     * @param {string} value
     */
    setValue: function (value) {

        if (['string', 'number', 'object'].indexOf(typeof value) < 0) {
            return;
        }

        if (typeof value === 'object') {
            if (value !== null && ! Array.isArray(value)) {
                return;
            }

        } else {
            value = [ value ];
        }

        let that    = this;
        this._value = [];

        if (this._options.readonly) {
            $('.content-' + that._hash).empty();

            let fieldOptions = this.getOptions();

            if (fieldOptions.hasOwnProperty('options') &&
                typeof fieldOptions.options === 'object' &&
                Array.isArray(fieldOptions.options) &&
                Array.isArray(value)
            ) {
                let selectedItems = [];

                $.each(fieldOptions.options, function (key, option) {

                    if (option.hasOwnProperty('value')) {
                        $.each(value, function (key, val) {

                            if (option.value == val) {
                                if (option.hasOwnProperty('text') && ['string', 'number'].indexOf(typeof(option.text)) >= 0) {
                                    selectedItems.push(option.text);
                                }

                                that._value.push(val);
                                return false;
                            }
                        });
                    }
                });


                $('.content-' + that._hash).text(selectedItems.join(', '));
            }

        } else {
            $('.content-' + this._hash + ' select > option').prop('selected', false);

            if (Array.isArray(value)) {
                $('.content-' + this._hash + ' select > option').each(function (key, itemValue) {
                    $.each(value, function (key, val) {
                        if (val == $(itemValue).val()) {
                            $(itemValue).prop('selected', true);
                            that._value.push(val);

                            return false;
                        }
                    });
                });
            }
        }
    },


    /**
     * Установка валидности поля
     * @param {bool|null} isValid
     * @param {text} text
     */
    validate: function (isValid, text) {

        if (this._options.readonly) {
            return;
        }

        let container = $('.content-' + this._hash);
        let select    = $('select', container);

        container.find('.valid-feedback').remove();
        container.find('.invalid-feedback').remove();

        if (isValid === null) {
            select.removeClass('is-invalid');
            select.removeClass('is-valid');

        } else if (isValid) {
            select.removeClass('is-invalid');
            select.addClass('is-valid');

            if (typeof text === 'undefined' && typeof this._options.validText === 'string') {
                text = this._options.validText;
            }

            if (typeof text === 'string') {
                container.append('<div class="valid-feedback">' + text + '</div>');
            }
        } else {
            select.removeClass('is-valid');
            select.addClass('is-invalid');

            if (typeof text === 'undefined') {
                if (typeof this._options.invalidText === 'string') {
                    text = this._options.invalidText;

                } else if ( ! text && this._options.required) {
                    text = this._form.getLang().required_field;
                }
            }

            if (typeof text === 'string') {
                container.append('<div class="invalid-feedback">' + text + '</div>');
            }
        }
    },


    /**
     * Проверка валидности поля
     * @return {boolean|null}
     */
    isValid: function () {

        let select = $('.content-' + this._hash + ' select');

        if (this._options.required && select.val() === '') {
            return false;
        }

        if (select[0]) {
            return select.is(':valid');
        }

        return null;
    },


    /**
     * Формирование поля
     * @returns {string}
     */
    render: function() {

        let options      = this.getOptions();
        let attachFields = coreuiFormUtils$1.getAttacheFields(this._form, options);

        return ejs.render(tpl['form-field-label.html'], {
            id: this._id,
            form:  this._form,
            hash: this._hash,
            field: options,
            content: this.renderContent(),
            attachFields: attachFields
        });
    },


    /**
     * Формирование контента поля
     * @return {*}
     */
    renderContent: function () {

        return this._options.readonly
            ? this._renderContentReadonly()
            : this._renderContent();
    },


    /**
     * Формирование контента
     * @return {*}
     * @private
     */
    _renderContent: function () {

        let that          = this;
        let options       = this.getOptions();
        let attributes    = [];
        let selectOptions = [];


        if ( ! options.hasOwnProperty('attr') ||
            typeof options.attr !== 'object' ||
            options.attr === null ||
            Array.isArray(options.attr)
        ) {
            options.attr = {};
        }

        if (options.name) {
            options.attr.name = this._options.name;
        }

        if (options.width) {
            options.attr = coreuiFormUtils$1.mergeAttr(
                { style: 'width:' + options.width },
                options.attr
            );
        }

        if (options.required) {
            options.attr.required = 'required';
        }


        if (options.hasOwnProperty('options') &&
            typeof options.options === 'object' &&
            options.options !== null
        ) {
            $.each(options.options, function (key, option) {

                if (typeof option === 'string' || typeof option === 'number') {
                    selectOptions.push(that._renderOption({
                        type: 'option',
                        value: key,
                        text: option
                    }));

                } else if (typeof option === 'object') {
                    let type = option.hasOwnProperty('type') && typeof option.type === 'string'
                        ? option.type
                        : 'option';

                    if (type === 'group') {
                        let renderAttr   = [];
                        let groupAttr    = {};
                        let groupOptions = [];

                        if (option.hasOwnProperty('attr') &&
                            typeof option.attr === 'object' &&
                            option.attr !== null &&
                            ! Array.isArray(option.attr)
                        ) {
                            groupAttr = option.attr;
                        }

                        if (option.hasOwnProperty('label') && ['string', 'number'].indexOf(typeof(option.label)) >= 0) {
                            groupAttr.label = option.label;
                        }

                        $.each(groupAttr, function (name, value) {
                            renderAttr.push(name + '="' + value + '"');
                        });

                        if (Array.isArray(option.options)) {
                            $.each(option.options, function (key, groupOption) {
                                groupOptions.push(that._renderOption(groupOption));
                            });
                        }

                        selectOptions.push({
                            type: 'group',
                            attr: renderAttr.length > 0 ? (' ' + renderAttr.join(' ')) : '',
                            options: groupOptions,
                        });

                    } else {
                        selectOptions.push(that._renderOption(option));
                    }
                }
            });
        }

        $.each(options.attr, function (name, value) {
            attributes.push(name + '="' + value + '"');
        });

        return ejs.render(tpl['fields/select.html'], {
            field: options,
            value: this._value,
            render: {
                attr: attributes.length > 0 ? (' ' + attributes.join(' ')) : '',
                options: selectOptions
            },
        });
    },


    /**
     *
     * @return {string}
     * @private
     */
    _renderContentReadonly: function () {

        let that            = this;
        let options         = this.getOptions();
        let selectedOptions = [];

        if (options.hasOwnProperty('options') &&
            typeof options.options === 'object' &&
            Array.isArray(options.options)
        ) {
            $.each(options.options, function (key, option) {
                let type = option.hasOwnProperty('type') && typeof option.type === 'string'
                    ? option.type
                    : 'option';

                if (type === 'group') {
                    if (Array.isArray(option.options)) {
                        $.each(option.options, function (key, groupOption) {
                            let optionText = groupOption.hasOwnProperty('text') && ['string', 'number'].indexOf(typeof(groupOption.text)) >= 0
                                ? groupOption.text
                                : '';

                            if ( ! optionText || optionText === '') {
                                return;
                            }

                            if (Array.isArray(that._value)) {
                                $.each(that._value, function (key, itemValue) {
                                    if (itemValue == groupOption.value) {
                                        selectedOptions.push(optionText);
                                        return false;
                                    }
                                });

                            } else if (that._value == groupOption.value) {
                                selectedOptions.push(optionText);
                            }
                        });
                    }

                } else {
                    let optionText = option.hasOwnProperty('text') && ['string', 'number'].indexOf(typeof(option.text)) >= 0
                        ? option.text
                        : '';

                    if ( ! optionText || optionText === '') {
                        return;
                    }

                    if (Array.isArray(that._value)) {
                        $.each(that._value, function (key, itemValue) {
                            if (itemValue == option.value) {
                                selectedOptions.push(optionText);
                                return false;
                            }
                        });

                    } else if (that._value == option.value) {
                        selectedOptions.push(optionText);
                    }
                }
            });
        }


        return ejs.render(tpl['fields/select.html'], {
            field: options,
            render: {
                selectedOptions: selectedOptions
            },
        });
    },


    /**
     * Сборка опции
     * @param option
     * @return {object}
     * @private
     */
    _renderOption: function (option) {

        let optionAttr = [];
        let optionText = option.hasOwnProperty('text') && ['string', 'number'].indexOf(typeof(option.text)) >= 0
            ? option.text
            : '';

        $.each(option, function (name, value) {
            if (name !== 'text') {
                optionAttr.push(name + '="' + value + '"');
            }
        });


        if (Array.isArray(this._value)) {
            $.each(this._value, function (key, itemValue) {
                if (itemValue == option.value) {
                    optionAttr.push('selected="selected"');
                    return false;
                }
            });

        } else if (this._value == option.value) {
            optionAttr.push('selected="selected"');
        }

        return {
            type: 'option',
            text: optionText,
            attr: optionAttr.length > 0 ? (' ' + optionAttr.join(' ')) : ''
        };
    }
};

coreuiForm$1.fields.switch = {

    _id: '',
    _hash: '',
    _form: null,
    _index: 0,
    _value: '',
    _options: {
        type: 'switch',
        name: null,
        label: null,
        labelWidth: null,
        outContent: null,
        description: null,
        errorText: null,
        valueY: 'Y',
        valueN: 'N',
        fields: [],
        required: null,
        readonly: null,
        show: true,
        column: null
    },


    /**
     * Инициализация
     * @param {coreuiFormInstance} form
     * @param {object}               options
     * @param {int}                  index Порядковый номер на форме
     */
    init: function (form, options, index) {

        this._form    = form;
        this._index   = index;
        this._id      = form.getId() + "-field-" + (options.hasOwnProperty('name') ? options.name : index);
        this._hash    = coreuiFormUtils$1.hashCode();
        this._value   = coreuiFormUtils$1.getFieldValue(form, options);
        this._options = coreuiFormUtils$1.mergeFieldOptions(form, this._options, options);
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return $.extend(true, {}, this._options);
    },


    /**
     * Изменение режима поля только для чтения
     * @param {bool} isReadonly
     */
    readonly: function (isReadonly) {

        this._value            = this.getValue();
        this._options.readonly = !! isReadonly;

        $('.content-' + this._hash).html(
            this.renderContent()
        );
    },


    /**
     * Скрытие поля
     * @param {int} duration
     */
    hide: function (duration) {

        $('#coreui-form-' + this._id).hide(duration);
    },


    /**
     * Показ поля
     * @param {int} duration
     */
    show: function (duration) {

        $('#coreui-form-' + this._id).show(duration);
    },


    /**
     * Получение значения в поле
     * @returns {string}
     */
    getValue: function () {

        return this._options.readonly
            ? this._value
            : $('.content-' + this._hash + ' input').val();
    },


    /**
     * Установка значения в поле
     * @param {string} value
     */
    setValue: function (value) {

        if (['string', 'number'].indexOf(typeof value) < 0) {
            return;
        }

        this._value = value;

        if (this._options.readonly) {
            $('.content-' + this._hash).text(value);
        } else {
            $('.content-' + this._hash + ' input[type=checkbox]').prop('checked', value === this._options.valueY);
        }
    },


    /**
     * Установка валидности поля
     * @param {bool|null} isValid
     * @param {text} text
     */
    validate: function (isValid, text) {

        if (this._options.readonly) {
            return;
        }

        let container       = $('.content-' + this._hash);
        let switchContainer = $('.form-switch', container);
        let inputs          = $('input', container);

        container.find('.valid-feedback').remove();
        container.find('.invalid-feedback').remove();

        if (isValid === null) {
            inputs.removeClass('is-invalid');
            inputs.removeClass('is-valid');

        } else if (isValid) {
            inputs.removeClass('is-invalid');
            inputs.addClass('is-valid');

            if (typeof text === 'undefined' && typeof this._options.validText === 'string') {
                text = this._options.validText;
            }

            if (typeof text === 'string') {
                switchContainer.append('<div class="valid-feedback">' + text + '</div>');
            }

        } else {
            inputs.removeClass('is-valid');
            inputs.addClass('is-invalid');

            if (typeof text === 'undefined') {
                if (typeof this._options.invalidText === 'string') {
                    text = this._options.invalidText;

                } else if ( ! text) {
                    text = this._form.getLang().required_field;
                }
            }

            if (typeof text === 'string') {
                switchContainer.append('<div class="invalid-feedback">' + text + '</div>');
            }
        }
    },


    /**
     * Проверка валидности поля
     * @return {boolean}
     */
    isValid: function () {

        return null;
    },


    /**
     * Формирование поля
     * @returns {string}
     */
    render: function() {

        let options      = this.getOptions();
        let attachFields = coreuiFormUtils$1.getAttacheFields(this._form, options);

        return ejs.render(tpl['form-field-label.html'], {
            id: this._id,
            form:  this._form,
            hash: this._hash,
            field: options,
            content: this.renderContent(),
            attachFields: attachFields
        });
    },


    /**
     * Формирование контента поля
     * @return {*}
     */
    renderContent: function () {

        let attributes = [];
        let options    = this.getOptions();
        let itemAttr   = {
            type: 'checkbox',
            class: 'form-check-input',
            value: options.valueY
        };


        if (options.name) {
            itemAttr.name = this._options.name;
        }

        if (options.required) {
            itemAttr.required = 'required';
        }

        if (options.hasOwnProperty('attr') &&
            typeof options.attr === 'object' &&
            Array.isArray(options.attr)
        ) {
            itemAttr = coreuiFormUtils$1.mergeAttr(itemAttr, options.attr);
        }

        if (this._value === options.valueY) {
            itemAttr.checked = 'checked';
        }

        $.each(itemAttr, function (name, value) {
            attributes.push(name + '="' + value + '"');
        });

        return ejs.render(tpl['fields/switch.html'], {
            field: options,
            value: this._value,
            lang: this._form.getLang(),
            render: {
                attr: attributes.length > 0 ? attributes.join(' ') : ''
            },
        });
    }
};

coreuiForm$1.fields.textarea = {

    _id: '',
    _form: null,
    _index: 0,
    _value: '',
    _options: {
        type: 'textarea',
        name: null,
        label: null,
        labelWidth: null,
        width: null,
        outContent: null,
        description: null,
        errorText: null,
        attach: null,
        attr: {
            class: 'form-control form-control-sm d-inline-block'
        },
        required: null,
        readonly: null,
        datalist: null,
        show: true,
        column: null
    },


    /**
     * Инициализация
     * @param {coreuiFormInstance} form
     * @param {object}               options
     * @param {int}                  index Порядковый номер на форме
     */
    init: function (form, options, index) {

        this._form    = form;
        this._index   = index;
        this._id      = form.getId() + "-field-" + (options.hasOwnProperty('name') ? options.name : index);
        this._hash    = coreuiFormUtils$1.hashCode();
        this._value   = coreuiFormUtils$1.getFieldValue(form, options);
        this._options = coreuiFormUtils$1.mergeFieldOptions(form, this._options, options);
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return $.extend(true, {}, this._options);
    },


    /**
     * Изменение режима поля только для чтения
     * @param {bool} isReadonly
     */
    readonly: function (isReadonly) {

        this._value            = this.getValue();
        this._options.readonly = !! isReadonly;

        $('.content-' + this._hash).html(
            this.renderContent()
        );
    },


    /**
     * Скрытие поля
     * @param {int} duration
     */
    hide: function (duration) {

        $('#coreui-form-' + this._id).hide(duration);
    },


    /**
     * Показ поля
     * @param {int} duration
     */
    show: function (duration) {

        $('#coreui-form-' + this._id).show(duration);
    },


    /**
     * Получение значения в поле
     * @returns {string}
     */
    getValue: function () {

        return this._options.readonly
            ? this._value
            : $('.content-' + this._hash + ' textarea').val();
    },


    /**
     * Установка значения в поле
     * @param {string} value
     */
    setValue: function (value) {

        if (['string', 'number'].indexOf(typeof value) < 0) {
            return;
        }

        this._value = value;

        if (this._options.readonly) {
            $('.content-' + this._hash).text(value);
        } else {
            $('.content-' + this._hash + ' textarea').val(value);
        }
    },


    /**
     * Установка валидности поля
     * @param {bool|null} isValid
     * @param {text} text
     */
    validate: function (isValid, text) {

        if (this._options.readonly) {
            return;
        }

        let container = $('.content-' + this._hash);
        let textarea  = $('textarea', container);

        container.find('.valid-feedback').remove();
        container.find('.invalid-feedback').remove();

        if (isValid === null) {
            textarea.removeClass('is-invalid');
            textarea.removeClass('is-valid');

        } else if (isValid) {
            textarea.removeClass('is-invalid');
            textarea.addClass('is-valid');

            if (typeof text === 'undefined' && typeof this._options.validText === 'string') {
                text = this._options.validText;
            }

            if (typeof text === 'string') {
                container.append('<div class="valid-feedback">' + text + '</div>');
            }
        } else {
            textarea.removeClass('is-valid');
            textarea.addClass('is-invalid');

            if (typeof text === 'undefined') {
                if (typeof this._options.invalidText === 'string') {
                    text = this._options.invalidText;

                } else if ( ! text && this._options.required) {
                    text = this._form.getLang().required_field;
                }
            }

            if (typeof text === 'string') {
                container.append('<div class="invalid-feedback">' + text + '</div>');
            }
        }
    },


    /**
     * Проверка валидности поля
     * @return {boolean}
     */
    isValid: function () {

        let input = $('.content-' + this._hash + ' textarea');

        if (input[0]) {
            return input.is(':valid');
        }
    },


    /**
     * Формирование поля
     * @returns {string}
     */
    render: function() {

        let options      = this.getOptions();
        let attachFields = coreuiFormUtils$1.getAttacheFields(this._form, options);

        return ejs.render(tpl['form-field-label.html'], {
            id: this._id,
            form:  this._form,
            hash: this._hash,
            field: options,
            content: this.renderContent(),
            attachFields: attachFields
        });
    },


    /**
     * Формирование контента поля
     * @return {*}
     */
    renderContent: function () {

        let attributes = [];
        let options    = this.getOptions();

        if ( ! options.hasOwnProperty('attr') ||
            typeof options.attr !== 'object' ||
            options.attr === null ||
            Array.isArray(options.attr)
        ) {
            options.attr = {};
        }

        if (options.name) {
            options.attr.name = this._options.name;
        }

        if (options.width) {
            options.attr = coreuiFormUtils$1.mergeAttr(
                { style: 'width:' + options.width },
                options.attr
            );
        }
        if (options.required) {
            options.attr.required = 'required';
        }

        $.each(options.attr, function (name, value) {
            attributes.push(name + '="' + value + '"');
        });

        return ejs.render(tpl['fields/textarea.html'], {
            field: options,
            value: this._value !== null ? this._value : '',
            render: {
                attr: attributes.length > 0 ? (' ' + attributes.join(' ')) : ''
            },
        });
    }
};

coreuiForm$1.fields.wysiwyg = {

    _id: '',
    _hash: '',
    _form: null,
    _value: null,
    _editor: null,
    _editorHash: null,
    _options: {
        type: 'wysiwyg',
        label: null,
        labelWidth: null,
        width: null,
        minWidth: null,
        maxWidth: null,
        height: null,
        minHeight: null,
        maxHeight: null,
        options: {},
        outContent: null,
        description: null,
        required: null,
        readonly: false,
        show: true,
        column: null
    },


    /**
     * Инициализация
     * @param {coreuiFormInstance} form
     * @param {object}               options
     * @param {int}                  index Порядковый номер на форме
     */
    init: function (form, options, index) {

        this._form       = form;
        this._index      = index;
        this._id         = form.getId() + "-field-" + (options.hasOwnProperty('name') ? options.name : index);
        this._hash       = coreuiFormUtils$1.hashCode();
        this._editorHash = coreuiFormUtils$1.hashCode();
        this._value      = coreuiFormUtils$1.getFieldValue(form, options);
        this._options    = coreuiFormUtils$1.mergeFieldOptions(form, this._options, options);

        let that = this;

        form.on('shown.coreui.form', function () {
            if ( ! that._options.readonly) {
                that._initEvents();
            }
        });
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return $.extend(true, {}, this._options);
    },


    /**
     * Изменение режима поля только для чтения
     * @param {bool} isReadonly
     */
    readonly: function (isReadonly) {

        this._value            = this.getValue();
        this._options.readonly = !! isReadonly;

        $('.content-' + this._hash).html(
            this.renderContent()
        );

        if ( ! this._options.readonly) {
            this._initEvents();
        }
    },


    /**
     * Скрытие поля
     * @param {int} duration
     */
    hide: function (duration) {

        $('#coreui-form-' + this._id).hide(duration || 0);
    },


    /**
     * Показ поля
     * @param {int} duration
     */
    show: function (duration) {

        $('#coreui-form-' + this._id).show(duration || 0);
    },


    /**
     * Получение значения из поля
     * @return {string|null}
     */
    getValue: function () {

        if (this._options.readonly) {
            return this._value;
        } else {
            return this._editor ? this._editor.getContent() : this._value;
        }
    },


    /**
     * Установка значения в поле
     * @param {string} value
     */
    setValue: function (value) {

        this._value = value;

        if (this._options.readonly) {
            $('.content-' + this._hash).text(value);
        } else {
            if (this._editor) {
                this._editor.setContent(value);
            }
        }
    },


    /**
     * Установка валидности поля
     * @param {bool|null} isValid
     * @param {text} text
     */
    validate: function (isValid, text) {

        if (this._options.readonly) {
            return;
        }

        let container = $('.content-' + this._hash);

        container.find('.text-success').remove();
        container.find('.text-danger').remove();

        if (isValid === null) {
            return;
        }

        if (isValid) {
            if (typeof text === 'undefined' && typeof this._options.validText === 'string') {
                text = this._options.validText;
            }

            if (typeof text === 'string') {
                container.append('<div class="ps-2 text-success">' + text + '</div>');
            }

        } else {
            if (typeof text === 'undefined') {
                if (typeof this._options.invalidText === 'string') {
                    text = this._options.invalidText;

                } else if ( ! text && this._options.required) {
                    text = this._form.getLang().required_field;
                }
            }

            if (typeof text === 'string') {
                container.append('<div class="ps-2 text-danger">' + text + '</div>');
            }
        }
    },


    /**
     * Проверка валидности поля
     * @return {boolean}
     */
    isValid: function () {

        if (this._options.required && ! this._options.readonly) {
            return !! this.getValue();
        }

        return true;
    },


    /**
     * Формирование поля
     * @returns {string}
     */
    render: function() {

        let options      = this.getOptions();
        let attachFields = coreuiFormUtils$1.getAttacheFields(this._form, options);

        return ejs.render(tpl['form-field-label.html'], {
            id: this._id,
            form:  this._form,
            hash: this._hash,
            field: options,
            content: this.renderContent(),
            attachFields: attachFields
        });
    },


    /**
     * Формирование контента поля
     * @return {*}
     */
    renderContent: function () {

        let options = this.getOptions();

        return ejs.render(tpl['fields/wysiwyg.html'], {
            field: options,
            value: this._value !== null ? this._value : '',
            editorHash: this._editorHash
        });
    },


    /**
     * Инициализация событий
     * @private
     */
    _initEvents: function () {

        if (this._options.readonly) {
            return;
        }

        let tinyMceOptions = {};
        let than           = this;
        let textareaId     = 'editor-' + this._editorHash;

        if (typeof this._options.options === 'object' &&
            ! Array.isArray(this._options.options) &&
            Object.keys(this._options.options).length > 0
        ) {
            tinyMceOptions = this._options.options;

        } else if (this._options.options === 'simple') {
            tinyMceOptions = {
                plugins: 'image lists anchor charmap',
                toolbar: 'blocks | bold italic underline | alignleft aligncenter ' +
                         'alignright alignjustify | bullist numlist outdent indent | ' +
                         'forecolor backcolor removeformat',
                menubar: false,
                branding: false
            };

        } else {
            tinyMceOptions = {
                promotion: false,
                branding: false,
                plugins: 'preview importcss searchreplace autolink autosave save directionality code ' +
                         'visualblocks visualchars fullscreen image link media template codesample table ' +
                         'charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
                menubar: 'file edit view insert format tools table help',
                toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | ' +
                         'alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | ' +
                         'forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen ' +
                         'preview save print | insertfile image media template link anchor codesample | ltr rtl',
            };
        }

        tinyMceOptions.selector = '#editor-' + this._editorHash;

        if (['string', 'number'].indexOf(typeof this._options.width) >= 0) {
            tinyMceOptions.width = this._options.width;
        }
        if (['string', 'number'].indexOf(typeof this._options.minWidth) >= 0) {
            tinyMceOptions.min_width = this._options.minWidth;
        }
        if (['string', 'number'].indexOf(typeof this._options.maxWidth) >= 0) {
            tinyMceOptions.max_width = this._options.maxWidth;
        }
        if (['string', 'number'].indexOf(typeof this._options.height) >= 0) {
            tinyMceOptions.height = this._options.height;
        }
        if (['string', 'number'].indexOf(typeof this._options.minHeight) >= 0) {
            tinyMceOptions.min_height = this._options.minHeight;
        }
        if (['string', 'number'].indexOf(typeof this._options.maxHeight) >= 0) {
            tinyMceOptions.max_height = this._options.maxHeight;
        }

        tinymce.init(tinyMceOptions).then(function () {
            than._editor = tinymce.get(textareaId);
        });
    }
};

coreuiForm$1.fields.passwordRepeat = {

    _id: '',
    _hash: '',
    _form: null,
    _index: 0,
    _isChangeState: true,
    _value: '',
    _options: {
        type: 'password',
        name: null,
        label: null,
        labelWidth: null,
        width: null,
        outContent: null,
        description: null,
        errorText: null,
        attach: null,
        attr: {
            type: 'password',
            class: 'form-control form-control-sm d-inline-block flex-shrink-0'
        },
        required: null,
        invalidText: null,
        validText: null,
        readonly: null,
        datalist: null,
        show: true,
        showBtn: true,
        column: null
    },


    /**
     * Инициализация
     * @param {coreuiFormInstance} form
     * @param {object}             options
     * @param {int}                index Порядковый номер на форме
     */
    init: function (form, options, index) {

        this._form    = form;
        this._index   = index;
        this._id      = form.getId() + "-field-" + (options.hasOwnProperty('name') ? options.name : index);
        this._hash    = coreuiFormUtils$1.hashCode();
        this._value   = coreuiFormUtils$1.getFieldValue(form, options);
        this._options = coreuiFormUtils$1.mergeFieldOptions(form, this._options, options);


        let that = this;

        form.on('shown.coreui.form', function () {
            that._initEvents();
        });
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return $.extend(true, {}, this._options);
    },


    /**
     * Изменение режима поля только для чтения
     * @param {bool} isReadonly
     */
    readonly: function (isReadonly) {

        this._value            = this.getValue();
        this._options.readonly = !! isReadonly;

        $('.content-' + this._hash).html(
            this.renderContent()
        );

        if ( ! this._options.readonly) {
            this._initEvents();
        }
    },


    /**
     * Скрытие поля
     * @param {int} duration
     */
    hide: function (duration) {

        $('#coreui-form-' + this._id).hide(duration);
    },


    /**
     * Показ поля
     * @param {int} duration
     */
    show: function (duration) {

        $('#coreui-form-' + this._id).show(duration);
    },


    /**
     * Получение значения в поле
     * @returns {string}
     */
    getValue: function () {

        if (this._options.readonly) {
            return this._value;
        }

        let pass = $('.content-' + this._hash + ' input[type="password"]').eq(0);

        if (typeof pass.attr('disabled') !== 'undefined' && pass.attr('disabled') !== false) {
            return '';
        }

        return pass.val();
    },


    /**
     * Установка значения в поле
     * @param {string} value
     */
    setValue: function (value) {

        if (['string', 'number'].indexOf(typeof value) < 0) {
            return;
        }

        this._value = value;

        if (this._options.readonly) {
            $('.content-' + this._hash).text(value ? '******' : '');
        } else {
            $('.content-' + this._hash + ' input[type="password"]').val(value);
        }
    },


    /**
     * Установка валидности поля
     * @param {bool|null} isValid
     * @param {text} text
     */
    validate: function (isValid, text) {

        if (this._options.readonly) {
            return;
        }

        let container = $('.content-' + this._hash);
        let input     = $('input[type="password"]', container);

        container.find('.valid-feedback').remove();
        container.find('.invalid-feedback').remove();

        if (isValid === null) {
            input.removeClass('is-invalid');
            input.removeClass('is-valid');

        } else if (isValid) {
            input.removeClass('is-invalid');
            input.addClass('is-valid');

            if (typeof text === 'undefined' && typeof this._options.validText === 'string') {
                text = this._options.validText;
            }

            if (typeof text === 'string') {
                container.append('<div class="valid-feedback d-block">' + text + '</div>');
            }
        } else {
            input.removeClass('is-valid');
            input.addClass('is-invalid');

            if (typeof text === 'undefined') {
                if (typeof this._options.invalidText === 'string') {
                    text = this._options.invalidText;

                } else if ( ! text && this._options.required) {
                    text = this._form.getLang().required_field;
                }
            }

            if (typeof text === 'string') {
                container.append('<div class="invalid-feedback d-block">' + text + '</div>');
            }
        }
    },


    /**
     * Проверка валидности поля
     * @return {boolean|null}
     */
    isValid: function () {

        if ( ! this._isChangeState || this._options.readonly) {
            return true;
        }

        let input = $('.content-' + this._hash + ' input[type="password"]');

        if (input.eq(0).val() !== input.eq(1).val()) {
            return false;
        }

        if (input[0]) {
            return input.eq(0).is(':valid');
        }

        return null;
    },


    /**
     * Формирование поля
     * @returns {string}
     */
    render: function() {

        let options      = this.getOptions();
        let attachFields = coreuiFormUtils$1.getAttacheFields(this._form, options);

        return ejs.render(tpl['form-field-label.html'], {
            id: this._id,
            form: this._form,
            hash: this._hash,
            field: options,
            content: this.renderContent(),
            attachFields: attachFields
        });
    },


    /**
     * Формирование контента поля
     * @return {*}
     */
    renderContent: function () {

        return this._options.readonly
            ? this._renderContentReadonly()
            : this._renderContent();
    },


    /**
     *
     * @private
     */
    _renderContent: function () {

        let attributes  = [];
        let attributes2 = [];
        let datalist    = [];
        let options     = this.getOptions();

        this._isChangeState = ! options.showBtn
            ? true
            : ! this._value;

        if ( ! options.hasOwnProperty('attr') ||
            typeof options.attr !== 'object' ||
            options.attr === null ||
            Array.isArray(options.attr)
        ) {
            options.attr = {};
        }

        if ( ! this._isChangeState) {
            options.attr.disabled = '';
        }

        if (options.name) {
            options.attr.name = this._options.name;
        }

        options.attr.value = this._value ? '******' : '';

        if (options.width) {
            options.attr = coreuiFormUtils$1.mergeAttr(
                { style: 'width:' + options.width },
                options.attr
            );
        }

        if (options.required) {
            options.attr.required = 'required';
        }

        $.each(options.attr, function (name, value) {
            attributes.push(name + '="' + value + '"');
        });
        $.each(options.attr, function (name, value) {
            if (['name', 'value'].indexOf(name) < 0) {
                attributes2.push(name + '="' + value + '"');
            }
        });

        let lang = this._form.getLang();

        return ejs.render(tpl['fields/passwordRepeat.html'], {
            field: options,
            value: this._value !== null ? this._value : '',
            lang: lang,
            btn_text: this._isChangeState ? lang.cancel : lang.change,
            render: {
                attr: attributes.length > 0 ? (' ' + attributes.join(' ')) : '',
                attr2: attributes2.length > 0 ? (' ' + attributes2.join(' ')) : '',
                datalist: datalist
            },
        });
    },


    /**
     *
     * @private
     */
    _renderContentReadonly: function () {

        let options = this.getOptions();

        return ejs.render(tpl['fields/passwordRepeat.html'], {
            field: options,
            value: this._value ? '******' : '',
            hash: this._hash
        });
    },


    /**
     * Инициализация событий
     * @private
     */
    _initEvents: function () {

        let that = this;

        $('.content-' + this._hash + ' .btn-password-change').click(function (e) {
            let textChange = $(this).data('change');
            let textCancel = $(this).data('cancel');

            if (that._isChangeState) {
                $('.content-' + that._hash + ' [type="password"]').attr('disabled', 'disabled');
                $(this).text(textChange);
                that._isChangeState = false;

            } else {
                $('.content-' + that._hash + ' [type="password"]').removeAttr('disabled');
                $(this).text(textCancel);
                that._isChangeState = true;
            }
        });
    }
};

coreuiForm$1.fields.file = {

    _id: '',
    _hash: '',
    _form: null,
    _index: 0,
    _value: '',
    _options: {
        type: 'file',
        name: null,
        label: null,
        labelWidth: null,
        width: null,
        outContent: null,
        description: null,
        errorText: null,
        attach: null,
        attr: {
            class: 'form-control form-control-sm d-inline-block'
        },
        required: null,
        invalidText: null,
        validText: null,
        readonly: null,
        datalist: null,
        show: true,
        column: null
    },


    /**
     * Инициализация
     * @param {coreuiFormInstance} form
     * @param {object}             options
     * @param {int}                index Порядковый номер на форме
     */
    init: function (form, options, index) {

        this._form    = form;
        this._index   = index;
        this._id      = form.getId() + "-field-" + (options.hasOwnProperty('name') ? options.name : index);
        this._hash    = coreuiFormUtils$1.hashCode();
        this._value   = coreuiFormUtils$1.getFieldValue(form, options);
        this._options = coreuiFormUtils$1.mergeFieldOptions(form, this._options, options);
    },


    /**
     * Получение параметров
     * @returns {object}
     */
    getOptions: function () {
        return $.extend(true, {}, this._options);
    },


    /**
     * Изменение режима поля только для чтения
     * @param {bool} isReadonly
     */
    readonly: function (isReadonly) {

        this._value            = this.getValue();
        this._options.readonly = !! isReadonly;

        $('.content-' + this._hash).html(
            this.renderContent()
        );
    },


    /**
     * Скрытие поля
     * @param {int} duration
     */
    hide: function (duration) {

        $('#coreui-form-' + this._id).hide(duration);
    },


    /**
     * Показ поля
     * @param {int} duration
     */
    show: function (duration) {

        $('#coreui-form-' + this._id).show(duration);
    },


    /**
     * Получение значения в поле
     * @returns {File[]}
     */
    getValue: function () {

        return this._options.readonly
            ? this._value
            : $('.content-' + this._hash + ' input')[0].files;
    },


    /**
     * Установка значения в поле
     * @param {File|File[]} value
     */
    setValue: function (value) {

        if ( ! (value instanceof File) &&  ! (value instanceof FileList)) {
            return;
        }

        this._value = value;


        if (this._options.readonly) {
            $('.content-' + this._hash).text('');
        } else {
            let container = new DataTransfer();

            if (value instanceof File) {
                container.items.add(value);

            } else {
                $.each(value, function (key, file) {
                    if (value instanceof File) {
                        container.items.add(file);
                    }
                });
            }

            $('.content-' + this._hash + ' input')[0].files = container.files;
        }
    },


    /**
     * Установка валидности поля
     * @param {bool|null} isValid
     * @param {text} text
     */
    validate: function (isValid, text) {

        if (this._options.readonly) {
            return;
        }

        let container = $('.content-' + this._hash);
        let input     = $('input', container);

        container.find('.valid-feedback').remove();
        container.find('.invalid-feedback').remove();

        if (isValid === null) {
            input.removeClass('is-invalid');
            input.removeClass('is-valid');

        } else if (isValid) {
            input.removeClass('is-invalid');
            input.addClass('is-valid');

            if (typeof text === 'undefined' && typeof this._options.validText === 'string') {
                text = this._options.validText;
            }

            if (typeof text === 'string') {
                container.append('<div class="valid-feedback">' + text + '</div>');
            }
        } else {
            input.removeClass('is-valid');
            input.addClass('is-invalid');

            if (typeof text === 'undefined') {
                if (typeof this._options.invalidText === 'string') {
                    text = this._options.invalidText;

                } else if ( ! text && this._options.required) {
                    text = this._form.getLang().required_field;
                }
            }

            if (typeof text === 'string') {
                container.append('<div class="invalid-feedback">' + text + '</div>');
            }
        }
    },


    /**
     * Проверка валидности поля
     * @return {boolean|null}
     */
    isValid: function () {

        let input = $('.content-' + this._hash + ' input');

        if (input[0]) {
            return input.is(':valid');
        }

        return null;
    },


    /**
     * Формирование поля
     * @returns {string}
     */
    render: function() {

        let options      = this.getOptions();
        let attachFields = coreuiFormUtils$1.getAttacheFields(this._form, options);

        return ejs.render(tpl['form-field-label.html'], {
            id: this._id,
            form: this._form,
            hash: this._hash,
            field: options,
            content: this.renderContent(),
            attachFields: attachFields
        });
    },


    /**
     * Формирование контента поля
     * @return {*}
     */
    renderContent: function () {

        return this._options.readonly
            ? this._renderContentReadonly()
            : this._renderContent();
    },


    /**
     *
     * @private
     */
    _renderContent: function () {

        let attributes   = [];
        let datalist     = [];
        let options      = this.getOptions();
        let datalistId   = coreuiFormUtils$1.hashCode();

        if ( ! options.hasOwnProperty('attr') ||
            typeof options.attr !== 'object' ||
            options.attr === null ||
            Array.isArray(options.attr)
        ) {
            options.attr = {};
        }

        if (options.name) {
            options.attr.name = this._options.name;
        }

        options.attr.type  = options.type;
        options.attr.value = this._value !== null ? this._value : '';

        if (options.width) {
            options.attr = coreuiFormUtils$1.mergeAttr(
                { style: 'width:' + options.width },
                options.attr
            );
        }

        if (options.required) {
            options.attr.required = 'required';
        }


        if (options.hasOwnProperty('datalist') &&
            typeof options.datalist === 'object' &&
            Array.isArray(options.datalist)
        ) {
            options.attr.list = datalistId;

            $.each(options.datalist, function (key, itemAttributes) {
                let datalistAttr = [];

                $.each(itemAttributes, function (name, value) {
                    datalistAttr.push(name + '="' + value + '"');
                });

                datalist.push({
                    attr: datalistAttr.length > 0 ? (' ' + datalistAttr.join(' ')) : ''
                });
            });
        }

        $.each(options.attr, function (name, value) {
            attributes.push(name + '="' + value + '"');
        });

        return ejs.render(tpl['fields/input.html'], {
            field: options,
            datalistId: datalistId,
            value: this._value !== null ? this._value : '',
            render: {
                attr: attributes.length > 0 ? (' ' + attributes.join(' ')) : '',
                datalist: datalist
            },
        });
    },


    /**
     *
     * @private
     */
    _renderContentReadonly: function () {

        let options = this.getOptions();
        let type    = 'text';
        let value   = this._value;
        let lang    = this._form.getLang();

        if (options.hasOwnProperty('type') && typeof options.type === 'string') {
            type = options.type;
        }

        try {
            switch (type) {
                case 'date':           value = coreuiFormUtils$1.formatDate(value); break;
                case 'datetime-local': value = coreuiFormUtils$1.formatDateTime(value); break;
                case 'month':          value = coreuiFormUtils$1.formatDateMonth(value, lang); break;
                case 'week':           value = coreuiFormUtils$1.formatDateWeek(value, lang); break;
            }

        } catch (e) {
            console.error(e);
            // ignore
        }

        return ejs.render(tpl['fields/input.html'], {
            field: options,
            value: value,
            hash: this._hash
        });
    }
};

return coreuiForm$1;

})));
;
var CoreUI=void 0!==CoreUI?CoreUI:{};CoreUI.chart={lang:{},type:{},_instances:{},_settings:{lang:"en"},create:function(t){var e=$.extend(!0,{},this.instance),t=(e._init(t instanceof Object?t:{}),e.getId());return this._instances[t]=e},get:function(t){return this._instances.hasOwnProperty(t)?$("#coreui-chart-"+this._instances[t])[0]?(delete this._instances[t],null):this._instances[t]:null},setSettings:function(t){CoreUI.chart._settings=$.extend({},this._settings,t)},getSetting:function(t){let e=null;return e=CoreUI.chart._settings.hasOwnProperty(t)?CoreUI.chart._settings[t]:e}};;
CoreUI.chart.instance={_options:{id:null,labels:[],datasets:[],annotations:[],options:{lang:"en",dataUrl:null,width:null,height:null,title:{},enabled:{},legend:{},tooltip:{},theme:{},axis:{},style:{},events:{}}},_container:null,_apex:null,_typeInstance:null,_events:{},_init:function(t){this._options.options.lang=CoreUI.chart.getSetting("lang"),this._options=$.extend(!0,{},this._options,t),this._options.id||(this._options.id=CoreUI.chart.utils.hashCode()),this._options.datasets="object"==typeof this._options.datasets&&Array.isArray(this._options.datasets)?this._options.datasets:[],this._options.labels="object"==typeof this._options.labels&&Array.isArray(this._options.labels)?this._options.labels:[],this._options.annotations="object"==typeof this._options.annotations&&Array.isArray(this._options.annotations)?this._options.annotations:[]},render:function(t){var o='<div id="coreui-chart-'+this._options.id+'" class="coreui-chart"><div class="coreui-chart-container"></div></div>';if(void 0===t)return o;if("string"==typeof t){var e=document.getElementById(t);if(!e)return;this._container=e}else t instanceof HTMLElement&&(this._container=t);this._container&&($(this._container).append(o),this._container=document.querySelector("#coreui-chart-"+this._options.id+" > .coreui-chart-container")),this.initEvents()},initEvents:function(){if(this._container||(this._container=document.querySelector("#coreui-chart-"+this._options.id+" > .coreui-chart-container")),this._container){var s=this._getTypeChart();if(CoreUI.chart.type.hasOwnProperty(s)){let t={},o=(t=this._options.hasOwnProperty("custom")&&CoreUI.chart.utils.isObject(this._options.custom)?this._options.custom:this._convertToApex(this._options),"classic"),e=[];this._options.options.hasOwnProperty("theme")&&CoreUI.chart.utils.isObject(this._options.options.theme)&&this._options.options.theme.hasOwnProperty("colorScheme")&&"string"==typeof this._options.options.theme.colorScheme&&(o=this._options.options.theme.colorScheme),e="custom"===o&&this._options.options.theme.hasOwnProperty("customColors")&&Array.isArray(this._options.options.theme.customColors)?this._options.options.theme.customColors:this._getColors(o),this._typeInstance=$.extend(!0,{},CoreUI.chart.type[s]),this._typeInstance.init(this._options,t,e),this._apex=this._typeInstance.render(this._container),this._options.options.hasOwnProperty("dataUrl")&&"string"==typeof this._options.options.dataUrl&&this._options.options.dataUrl&&this.loadData(this._options.options.dataUrl),this._trigger("shown.coreui.chart")}else console.error("Chart type not found: "+s)}},getId:function(){return this._options.id},getOptions:function(){return $.extend(!0,{},this._options)},lock:function(t){var o=document.querySelector("#coreui-chart-"+this._options.id);o&&!$(o).find(".coreui-chart-lock")[0]&&$(o).prepend('<div class="coreui-chart-lock"><div class="coreui-chart-message"><div class="spinner-border spinner-border-sm"></div> '+(t?"<span>"+t+"</span>":"")+"</span></div>")},unlock:function(){$("#coreui-chart-"+this._options.id+" > .coreui-chart-lock").fadeOut(50,function(){$(this).remove()})},loadData:function(t){this._trigger("load-data.coreui.chart",this,[this]),this._options.options.enabled.hasOwnProperty("preloader")&&!0!==this._options.options.enabled.preloader||this.lock(this.getLang().loading);let s=this;$.ajax({url:t,method:"get",dataType:"json",beforeSend:function(t){s._trigger("start-load-data.coreui.chart",s,[s,t])},success:function(t){s.clearDatasets(),t.hasOwnProperty("datasets")&&Array.isArray(t.datasets)&&s.addDatasets(t.datasets),s._trigger("success-load-data.coreui.chart",s,[s,t])},error:function(t,o,e){s._trigger("error-load-data.coreui.chart",s,[s,t,o,e])},complete:function(t,o){s.unlock(),s._trigger("end-load-data.coreui.chart",s,[s,t,o])}})},addDatasets:function(t){this._typeInstance&&"function"==typeof this._typeInstance.addDatasets&&this._typeInstance.addDatasets(t)},appendDataset:function(t){this._typeInstance&&"function"==typeof this._typeInstance.appendDataset&&this._typeInstance.appendDataset(t)},removeDataset:function(t){this._typeInstance&&"function"==typeof this._typeInstance.removeDataset&&this._typeInstance.removeDataset(t)},clearDatasets:function(){this._typeInstance&&"function"==typeof this._typeInstance.clearDatasets&&this._typeInstance.clearDatasets()},getDatasets:function(){let t=[];return t=this._typeInstance&&"function"==typeof this._typeInstance.getDatasets?this._typeInstance.getDatasets():t},getDataset:function(t){let o=null;return o=this._typeInstance&&"function"==typeof this._typeInstance.getDataset?this._typeInstance.getDataset(t):o},getAnnotations:function(){let t={};return t=this._typeInstance&&"function"==typeof this._typeInstance.getAnnotations?this._typeInstance.getAnnotations():t},getAnnotation:function(t){let o=null;return o=this._typeInstance&&"function"==typeof this._typeInstance.getAnnotation?this._typeInstance.getAnnotation(t):o},addAnnotation:function(t){let o=null;return o=this._typeInstance&&"function"==typeof this._typeInstance.addAnnotation?this._typeInstance.addAnnotation(t):o},removeAnnotation:function(t){this._typeInstance&&"function"==typeof this._typeInstance.removeAnnotation&&this._typeInstance.removeAnnotation(t)},clearAnnotations:function(){this._typeInstance&&"function"==typeof this._typeInstance.clearAnnotations&&this._typeInstance.clearAnnotations()},zoomX:function(t,o){this._apex.zoomX(t,o)},on:function(t,o,e,s){"object"!=typeof this._events[t]&&(this._events[t]=[]),this._events[t].push({context:e||this,callback:o,singleExec:!!s})},destruct:function(){this._apex.destroy(),delete CoreUI.chart._instances[this.getId()]},getLang:function(){return CoreUI.chart.lang.hasOwnProperty(this._options.options.lang)?CoreUI.chart.lang[this._options.options.lang]:CoreUI.chart.lang.en},_trigger:function(t,o,e){e=e||[];var s=[];if(this._events[t]instanceof Object&&0<this._events[t].length)for(var i=0;i<this._events[t].length;i++){var n=this._events[t][i].callback;o=o||this._events[t][i].context,s.push(n.apply(o,e)),this._events[t][i].singleExec&&this._events[t].splice(i,1)}return s},_convertToApex:function(s){var t,o=this,e={series:[],annotations:{yaxis:[],xaxis:[],points:[]},theme:{mode:"light",palette:"palette1",monochrome:{enabled:!1,color:"#255aee",shadeTo:"light",shadeIntensity:.65}},chart:{zoom:{enabled:!1},animations:{enabled:!1},toolbar:{show:!1,tools:{zoom:!0,zoomin:!0,zoomout:!0,pan:!1,reset:!1}},events:{mouseMove:function(t,o,e){var s,i;e.globals.tooltip.hasOwnProperty("tooltipRect")&&(i=e.globals.dom.elWrap.getBoundingClientRect(),s=e.globals.clientX-i.left-e.globals.tooltip.tooltipRect.ttWidth/2,i=e.globals.clientY-i.top-e.globals.tooltip.tooltipRect.ttHeight/2,o=o.el.querySelector("#apexcharts"+e.globals.chartID+" > .apexcharts-tooltip"),s>e.globals.gridWidth/2?(o.classList.add("apexcharts-tooltip-left"),o.classList.remove("apexcharts-tooltip-right")):(o.classList.remove("apexcharts-tooltip-left"),o.classList.add("apexcharts-tooltip-right")),i>e.globals.gridHeight/3.3?(o.classList.add("apexcharts-tooltip-top"),o.classList.remove("apexcharts-tooltip-bottom")):(o.classList.remove("apexcharts-tooltip-top"),o.classList.add("apexcharts-tooltip-bottom")))}}},title:{text:"",align:"left",style:{fontSize:"14px",fontWeight:"bold",fontFamily:'"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',color:"#333"}},subtitle:{text:"",align:"left",margin:5,style:{fontSize:"12px",fontWeight:"normal",fontFamily:'"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',color:"#666"}},stroke:{width:[],curve:[],dashArray:[]},legend:{show:!0,position:"bottom",horizontalAlign:"left",markers:{width:12,height:4,radius:1,onClick:void 0,offsetY:-2}},markers:{size:[],strokeWidth:1,strokeOpacity:.5,shape:"circle",hover:{size:5,sizeOffset:5}},dataLabels:{enabled:!1,enabledOnSeries:[],style:{colors:[]}},fill:{type:[],opacity:[],gradient:{type:"vertical",shadeIntensity:0,inverseColors:!1,opacityFrom:[],opacityTo:0,stops:[40,100,100,100]}},plotOptions:{bar:{borderRadius:0,horizontal:!1,columnWidth:"70%",barHeight:"70%",dataLabels:{total:{enabled:!1}}},pie:{startAngle:0,endAngle:360,donut:{size:"65%",labels:{value:{show:!1},total:{show:!1,showAlways:!1,label:"Total"}}}},radialBar:{startAngle:0,endAngle:360,hollow:{size:"40%"},track:{show:!0,background:"#f2f2f2",dropShadow:{enabled:!1,top:0,left:0,blur:3,opacity:.15}},dataLabels:{name:{offsetY:void 0},value:{show:!1,fontSize:"22px",offsetY:void 0},total:{show:!1,showAlways:!1,label:"Total",fontSize:"16px",fontWeight:400}}},candlestick:{colors:{upward:"#00B746",downward:"#EF403C"},wick:{useFillColor:!0}},boxPlot:{colors:{upper:"#5C4742",lower:"#A5978B"}}},colors:[],tooltip:{enabled:!0,followCursor:!0,shared:!0,intersect:!1,style:{fontSize:"12px"},x:{formatter:function(t){return"string"==typeof t?t:this.hasOwnProperty("categoryLabels")&&this.categoryLabels.hasOwnProperty(t-1)&&void 0!==this.categoryLabels[t-1]?this.categoryLabels[t-1]:null}},y:{formatter:void 0}},grid:{show:!0,borderColor:"#f5f5f5",strokeDashArray:0,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}},yaxis:{opposite:!1,logarithmic:!1,logBase:10,tooltip:{enabled:!1},axisBorder:{show:!1,color:"#78909C"},axisTicks:{show:!1,borderType:"solid",color:"#78909C",width:6,offsetX:0,offsetY:0},title:{text:void 0,style:{color:"#78909C",fontSize:"12px",fontFamily:"Helvetica, Arial, sans-serif",fontWeight:600,cssClass:"apexcharts-yaxis-title"}},labels:{style:{colors:"#78909C"}}},xaxis:{type:"category",categories:[],tooltip:{enabled:!1},axisBorder:{show:!1,color:"#78909C"},axisTicks:{show:!1,borderType:"solid",color:"#78909C",width:6,offsetX:0,offsetY:0},title:{text:void 0,style:{color:"#78909C",fontSize:"12px",fontFamily:"Helvetica, Arial, sans-serif",fontWeight:600,cssClass:"apexcharts-yaxis-title"}},labels:{style:{colors:"#78909C"}},crosshairs:{show:!0,width:1,position:"back",opacity:1,stroke:{color:"#666",width:1,dashArray:3}}}};return s.hasOwnProperty("labels")&&CoreUI.chart.utils.isArray(s.labels)&&(e.labels=s.labels),s.hasOwnProperty("options")&&CoreUI.chart.utils.isObject(s.options)&&(s.options.hasOwnProperty("lang")&&(e.chart.defaultLocale=s.options.lang,e.chart.locales=[{name:s.options.lang,options:this.getLang()}]),s.options.hasOwnProperty("width")&&0<=["string","number"].indexOf(typeof s.options.width)&&(e.chart.width=s.options.width),s.options.hasOwnProperty("height")&&0<=["string","number"].indexOf(typeof s.options.height)&&(e.chart.height=s.options.height),s.options.hasOwnProperty("title")&&CoreUI.chart.utils.isObject(s.options.title)&&o._setOptionsTitle(e,s.options.title),s.options.hasOwnProperty("legend")&&CoreUI.chart.utils.isObject(s.options.legend)&&(t=s.options.hasOwnProperty("title")?s.options.title:{},o._setOptionsLegend(e,s.options.legend,t)),s.options.hasOwnProperty("enabled")&&CoreUI.chart.utils.isObject(s.options.enabled)&&o._setOptionsEnabled(e,s.options.enabled),s.options.hasOwnProperty("tooltip")&&CoreUI.chart.utils.isObject(s.options.tooltip)&&o._setOptionsTooltip(e,s.options.tooltip),s.options.hasOwnProperty("axis")&&CoreUI.chart.utils.isObject(s.options.axis)&&o._setOptionsAxis(e,s.options.axis),s.options.hasOwnProperty("theme")&&CoreUI.chart.utils.isObject(s.options.theme)&&o._setOptionsTheme(e,s.options.theme),s.options.hasOwnProperty("events"))&&CoreUI.chart.utils.isObject(s.options.events)&&(s.options.events.hasOwnProperty("markerClick")&&("function"==typeof s.options.events.markerClick?e.chart.events.markerClick=function(t,o,e){s.options.events.markerClick(t,o,e)}:"string"==typeof s.options.events.markerClick&&"function"==typeof(t=CoreUI.chart.utils.getFunctionByName(s.options.events.markerClick))&&(e.chart.events.markerClick=t)),s.options.events.hasOwnProperty("legendClick")&&("function"==typeof s.options.events.legendClick?e.chart.events.legendClick=function(t,o){s.options.events.legendClick(t,o)}:"string"==typeof s.options.events.legendClick&&"function"==typeof(o=CoreUI.chart.utils.getFunctionByName(s.options.events.legendClick))&&(e.chart.events.legendClick=o)),s.options.events.hasOwnProperty("zoomed"))&&("function"==typeof s.options.events.zoomed?e.chart.events.zoomed=function(t,o){s.options.events.zoomed(t,o)}:"string"==typeof s.options.events.zoomed&&"function"==typeof(t=CoreUI.chart.utils.getFunctionByName(s.options.events.zoomed))&&(e.chart.events.zoomed=t)),e},_getTypeChart:function(){let t=this._options.hasOwnProperty("options")&&CoreUI.chart.utils.isObject(this._options.options)&&this._options.options.hasOwnProperty("type")&&"string"==typeof this._options.options.type?this._options.options.type:"line";return t=["line","hBar","pie","radar","rangeArea","rangeBar","polarArea","candlestick","box"].indexOf(t)<=0?"line":this._options.options.type},_getColors:function(e){let s=null;return e=e||"classic",s="classic"===e||null===(s=CoreUI.chart.palette(e,65))&&($.each(CoreUI.chart.palette.listSchemes("all"),function(t,o){if(o.scheme_name===e)return s=CoreUI.chart.palette(e,o.max),!1}),null===s)?CoreUI.chart.utils.getPaletteClassic():s},_setOptionsTitle:function(t,o){o.hasOwnProperty("text")&&"string"==typeof o.text&&(t.title.text=o.text),o.hasOwnProperty("align")&&"string"==typeof o.align&&(t.title.align=o.align),o.hasOwnProperty("fontSize")&&"string"==typeof o.fontSize&&(t.title.style.fontSize=o.fontSize),o.hasOwnProperty("fontWeight")&&"string"==typeof o.fontWeight&&(t.title.style.fontWeight=o.fontWeight),o.hasOwnProperty("fontFamily")&&"string"==typeof o.fontFamily&&(t.title.style.fontFamily=o.fontFamily),o.hasOwnProperty("color")&&"string"==typeof o.color&&(t.title.style.color=o.color),o.hasOwnProperty("description")&&CoreUI.chart.utils.isObject(o.description)&&(o.description.hasOwnProperty("text")&&"string"==typeof o.description.text&&(t.subtitle.text=o.description.text),o.description.hasOwnProperty("align")&&"string"==typeof o.description.align&&(t.subtitle.align=o.description.align),o.description.hasOwnProperty("fontSize")&&"string"==typeof o.description.fontSize&&(t.subtitle.style.fontSize=o.description.fontSize),o.description.hasOwnProperty("fontWeight")&&"string"==typeof o.description.fontWeight&&(t.subtitle.style.fontWeight=o.description.fontWeight),o.description.hasOwnProperty("fontFamily")&&"string"==typeof o.description.fontFamily&&(t.subtitle.style.fontFamily=o.description.fontFamily),o.description.hasOwnProperty("color"))&&"string"==typeof o.description.color&&(t.subtitle.style.color=o.description.color)},_setOptionsLegend:function(o,t,e){if(t.hasOwnProperty("position")&&"string"==typeof t.position&&(o.legend.position=t.position),t.hasOwnProperty("horizontalAlign")&&"string"==typeof t.horizontalAlign)if(o.legend.horizontalAlign=t.horizontalAlign,0<=["left","right"].indexOf(t.position)&&CoreUI.chart.utils.isObject(e)&&(e.hasOwnProperty("text")&&"string"==typeof e.text&&e.text||e.description.hasOwnProperty("text")&&"string"==typeof e.description.text&&e.description.text)){let t=0;e.hasOwnProperty("text")&&"string"==typeof e.text&&e.text&&(t+=20),e.description.hasOwnProperty("text")&&"string"==typeof e.description.text&&e.description.text&&(t+=20),o.legend.offsetY=t}else"top"===t.position&&(o.legend.offsetY=0)},_setOptionsEnabled:function(t,o){o.hasOwnProperty("animations")&&"boolean"==typeof o.animations&&(t.chart.animations.enabled=o.animations),o.hasOwnProperty("zoom")&&"boolean"==typeof o.zoom&&(t.chart.zoom.enabled=o.zoom),o.hasOwnProperty("toolbar")&&"boolean"==typeof o.toolbar&&(t.chart.toolbar.show=o.toolbar),o.hasOwnProperty("legend")&&"boolean"==typeof o.legend&&(t.legend.show=o.legend),o.hasOwnProperty("labels")&&"boolean"==typeof o.labels&&(t.dataLabels.enabled=o.labels),o.hasOwnProperty("tooltip")&&"boolean"==typeof o.tooltip&&(t.tooltip.enabled=o.tooltip)},_setOptionsTooltip:function(t,o){var e;if(o.hasOwnProperty("mode")&&"string"==typeof o.mode&&("all"===o.mode?(t.tooltip.shared=!0,t.tooltip.intersect=!1):"single"===o.mode&&(t.tooltip.shared=!1,t.tooltip.intersect=!0)),o.hasOwnProperty("formatter"))"function"==typeof o.formatter?t.tooltip.y.formatter=o.formatter:"string"==typeof o.formatter&&"function"==typeof(e=CoreUI.chart.utils.getFunctionByName(o.formatter))&&(t.tooltip.y.formatter=e);else if(o.hasOwnProperty("valueSuffix")&&"string"==typeof o.valueSuffix||o.hasOwnProperty("valuePrefix")&&"string"==typeof o.valuePrefix){let e="",s="";o.hasOwnProperty("valueSuffix")&&"string"==typeof o.valueSuffix&&(e=o.valueSuffix),o.hasOwnProperty("valuePrefix")&&"string"==typeof o.valuePrefix&&(s=o.valuePrefix),t.tooltip.y.formatter=function(t,o){return s+t+e}}},_setOptionsAxis:function(t,o){o.hasOwnProperty("xaxis")&&CoreUI.chart.utils.isObject(o.xaxis)&&(o.xaxis.hasOwnProperty("show")&&"boolean"==typeof o.xaxis.show&&(t.xaxis.show=o.xaxis.show),o.xaxis.hasOwnProperty("title")&&"string"==typeof o.xaxis.title&&(t.xaxis.title.text=o.xaxis.title),o.xaxis.hasOwnProperty("type")&&"string"==typeof o.xaxis.type&&(t.xaxis.type=o.xaxis.type),o.xaxis.hasOwnProperty("position")&&"string"==typeof o.xaxis.position&&(t.xaxis.position=o.xaxis.position),o.xaxis.hasOwnProperty("border")&&"boolean"==typeof o.xaxis.border&&(t.xaxis.axisBorder.show=o.xaxis.border,t.xaxis.axisTicks.show=o.xaxis.border),o.xaxis.hasOwnProperty("color"))&&"string"==typeof o.xaxis.color&&(t.xaxis.axisBorder.color=o.xaxis.color,t.xaxis.axisTicks.color=o.xaxis.color,t.xaxis.title.style.color=o.xaxis.color,t.xaxis.labels.style.colors=o.xaxis.color),o.hasOwnProperty("yaxis")&&CoreUI.chart.utils.isObject(o.yaxis)&&(o.yaxis.hasOwnProperty("show")&&"boolean"==typeof o.xaxis.show&&(t.yaxis.show=o.yaxis.show),o.yaxis.hasOwnProperty("logarithmic")&&"boolean"==typeof o.yaxis.logarithmic&&(t.yaxis.logarithmic=o.yaxis.logarithmic),o.yaxis.hasOwnProperty("title")&&"string"==typeof o.yaxis.title&&(t.yaxis.title.text=o.yaxis.title),o.yaxis.hasOwnProperty("position")&&"string"==typeof o.yaxis.position&&(t.yaxis.opposite="right"===o.yaxis.position),o.yaxis.hasOwnProperty("logBase")&&"number"==typeof o.yaxis.logBase&&(t.yaxis.logBase=o.yaxis.logBase),o.yaxis.hasOwnProperty("min")&&"number"==typeof o.yaxis.min&&(t.yaxis.min=o.yaxis.min),o.yaxis.hasOwnProperty("max")&&"number"==typeof o.yaxis.max&&(t.yaxis.max=o.yaxis.max),o.yaxis.hasOwnProperty("border")&&"boolean"==typeof o.yaxis.border&&(t.yaxis.axisBorder.show=o.yaxis.border,t.yaxis.axisTicks.show=o.yaxis.border),o.yaxis.hasOwnProperty("color"))&&"string"==typeof o.yaxis.color&&(t.yaxis.axisBorder.color=o.yaxis.color,t.yaxis.axisTicks.color=o.yaxis.color,t.yaxis.title.style.color=o.yaxis.color,t.yaxis.labels.style.colors=o.yaxis.color),o.hasOwnProperty("grid")&&CoreUI.chart.utils.isObject(o.grid)&&(o.grid.hasOwnProperty("show")&&"boolean"==typeof o.grid.show&&(t.grid.show=o.grid.show),o.grid.hasOwnProperty("xLines")&&"boolean"==typeof o.grid.xLines&&(t.grid.xaxis.lines.show=o.grid.xLines),o.grid.hasOwnProperty("yLines")&&"boolean"==typeof o.grid.yLines&&(t.grid.yaxis.lines.show=o.grid.yLines),o.grid.hasOwnProperty("dash")&&"number"==typeof o.grid.dash&&(t.grid.strokeDashArray=o.grid.dash),o.grid.hasOwnProperty("color"))&&"string"==typeof o.grid.color&&(t.grid.borderColor=o.grid.color)},_setOptionsTheme:function(t,o){o.hasOwnProperty("mode")&&"string"==typeof o.mode&&(t.theme.mode=o.mode),o.hasOwnProperty("colorScheme")&&"string"==typeof o.colorScheme&&("monochrome"===o.colorScheme?(t.theme.monochrome.enabled=!0,t.theme.palette=null):t.theme.palette=o.colorScheme),o.hasOwnProperty("monochromeColor")&&"string"==typeof o.monochromeColor&&(t.theme.monochrome.color=o.monochromeColor),o.hasOwnProperty("background")&&"string"==typeof o.background&&(t.chart.background=o.background)}};;
!function(){"use strict";var f,d,e=function(){function i(f,e,d){return c.slice.apply(f,c.slice.call(arguments,1))}function o(f,e,d,c){if(0==(e|=0))return[];if("function"!=typeof f){var b=o.listSchemes(f,e);if(!b.length)return null;f=b[(d||0)%b.length]}return(d=i(arguments,2))[0]=e,f.apply(f,d)}function t(f){return 0<f?f<1?f:1:0}var c=Array.prototype,b=1e9,n=((o.Scheme=function(f,e){var a={},t=0,n=b,r=function(f,e){if(!(f|=0))return[];var d=f;if((f=Math.abs(f))<=t){for(var c=Math.max(f,n);!(c in a);++c);var b=a[c];if(f<c){if(!("shrinking_takes_head"in b?b:r).shrinking_takes_head)return o.generate(function(f){return b[Math.round(f)]},d,0,b.length-1);b=b.slice(0,f),c=f}return b=b.slice(),d<0&&b.reverse(),b}return r.color_func?o.generate(function(){var e;return arguments.length<=1?r.color_func.bind(r):(e=i(arguments),function(f){return e[0]=f,r.color_func.apply(r,e)})}.apply(r,arguments),d,0,1,r.color_func_cyclic):null};return r.scheme_name=f,r.groups=e?"string"==typeof e?[e]:e:[],r.max=0,r.cbf_max=b,r.addPalette=function(f,e){var d=f.length;d&&(a[d]=f,n=Math.min(n,d),t=Math.max(t,d),r.max=Math.max(r.max,d),e||1==d||(r.cbf_max=Math.min(r.cbf_max,d-1)))},r.addPalettes=function(f,e,d){e=e||f.length;for(var c=0;c<e;++c)c in f&&r.addPalette(f[c],!0);r.cbf_max=Math.min(r.cbf_max,d||1)},r.shrinkByTakingHead=function(f,e){void 0!==e?e in a&&(a[e].shrinking_takes_head=!!f):r.shrinking_takes_head=!!f},r.setColorFunction=function(f,e,d){r.color_func=f,r.color_func_cyclic=!!d,r.max=b,e||r.cbf_max!==b||(r.cbf_max=1)},r.color=function(f,e){return r.color_func?r.color_func.apply(this,arguments):null},r}).fromPalettes=function(f,e,d,c,b){f=o.Scheme(f,e);return f.addPalettes.apply(f,i(arguments,2)),f},o.Scheme.withColorFunction=function(f,e,d,c,b){f=o.Scheme(f,e);return f.setColorFunction.apply(f,i(arguments,2)),f},{});o.register=function(e){n["n-"+e.scheme_name]=[e],e.groups.forEach(function(f){(n["g-"+f]=n["g-"+f]||[]).push(e)}),(n["g-all"]=n["g-all"]||[]).push(e)},o.listSchemes=function(f,a){a?a<0&&(a=-a):a=2;var t=[];return("string"==typeof f?[f]:f).forEach(function(f){for(var e,d="-cbf"===f.substring(f.length-4),c=(d&&(f=f.substring(0,f.length-4)),n["g-"+f]||n["n-"+f]||[]),b=0;e=c[b];++b)(d?e.cbf:e.max)>=a&&t.push(e)}),t.sort(function(f,e){return f.scheme_name>=e.scheme_name?f.scheme_name>e.scheme_name?1:0:-1}),t},o.generate=function(f,e,d,c,b){if(Math.abs(e)<1)return[];if(d=void 0===d?0:d,c=void 0===c?1:c,Math.abs(e)<2)return[f(d)];for(var a=Math.abs(e),t=d,n=[],r=(c-d)/(b?a:a-1);0<=--a;t+=r)n.push(f(t));return e<0&&n.reverse(),n};return o.rgbColor=function(f,e,d){return[f,e,d].map(function(f){return 1==(f=Number(Math.round(255*t(f))).toString(16)).length?"0"+f:f}).join("")},o.linearRgbColor=function(f,e,d){return[f,e,d].map(function(f){return(f=t(f))<=.0031308?f*=12.92:f=1.055*Math.pow(f,1/2.4)-.055,1==(f=Number(Math.round(255*f)).toString(16)).length?"0"+f:f}).join("")},o.register(o.Scheme.withColorFunction("rainbow","qualitative",o.hsvColor=function(f,e,d){f*=6;var e=void 0===e?1:t(e),c=void 0===d?1:t(d),b=c*(1-e*Math.abs(f%2-1)),a=c*(1-e);switch(Math.floor(f)%6){case 0:return o.rgbColor(c,b,a);case 1:return o.rgbColor(b,c,a);case 2:return o.rgbColor(a,c,b);case 3:return o.rgbColor(a,b,c);case 4:return o.rgbColor(b,a,c);default:return o.rgbColor(c,a,b)}},!1,!0)),o}();function c(f,e){for(var d=arguments.length-1,c=arguments[d];1<d;)c=c*f+arguments[--d];return c}function b(f){var e=c(Math.abs(f),1,.278393,.230389,972e-6,.078108),e=1-1/((e*=e)*e);return f<0?-e:e}e.ColorFunction,e.Palette,e.PalettesList,e.SchemeType,(f=e.Scheme.fromPalettes("mpn65","qualitative",[["ff0029","377eb8","66a61e","984ea3","00d2d5","ff7f00","af8d00","7f80cd","b3e900","c42e60","a65628","f781bf","8dd3c7","bebada","fb8072","80b1d3","fdb462","fccde5","bc80bd","ffed6f","c4eaff","cf8c00","1b9e77","d95f02","e7298a","e6ab02","a6761d","0097ff","00d067","000000","252525","525252","737373","969696","bdbdbd","f43600","4ba93b","5779bb","927acc","97ee3f","bf3947","9f5b00","f48758","8caed6","f2b94f","eff26e","e43872","d9b100","9d7a00","698cff","d9d9d9","00d27e","d06800","009f82","c49200","cbe8ff","fecddf","c27eb6","8cd2ce","c4b8d9","f883b0","a49100","f48800","27d0df","a04a9b"]])).shrinkByTakingHead(!0),e.register(f),d=e.rgbColor,e.register(e.Scheme.fromPalettes("tol","qualitative",[["4477aa"],["4477aa","cc6677"],["4477aa","ddcc77","cc6677"],["4477aa","117733","ddcc77","cc6677"],["332288","88ccee","117733","ddcc77","cc6677"],["332288","88ccee","117733","ddcc77","cc6677","aa4499"],["332288","88ccee","44aa99","117733","ddcc77","cc6677","aa4499"],["332288","88ccee","44aa99","117733","999933","ddcc77","cc6677","aa4499"],["332288","88ccee","44aa99","117733","999933","ddcc77","cc6677","882255","aa4499"],["332288","88ccee","44aa99","117733","999933","ddcc77","661100","cc6677","882255","aa4499"],["332288","6699cc","88ccee","44aa99","117733","999933","ddcc77","661100","cc6677","882255","aa4499"],["332288","6699cc","88ccee","44aa99","117733","999933","ddcc77","661100","cc6677","aa4466","882255","aa4499"]],12,12)),e.tolSequentialColor=function(f){return d(1-.392*(1+b((f-.869)/.255)),1.021-.456*(1+b((f-.527)/.376)),1-.493*(1+b((f-.272)/.309)))},e.register(e.Scheme.withColorFunction("tol-sq","sequential",e.tolSequentialColor,!0)),e.tolDivergingColor=function(f){var e=c(f,.572,1.524,-1.811)/c(f,1,-.291,.1574);return d(c(f,.235,-2.13,26.92,-65.5,63.5,-22.36),e*e,1/c(f,1.579,-4.03,12.92,-31.4,48.6,-23.36))},e.register(e.Scheme.withColorFunction("tol-dv","diverging",e.tolDivergingColor,!0)),e.tolRainbowColor=function(f){return d(c(f,.472,-.567,4.05)/c(f,1,8.72,-19.17,14.1),c(f,.108932,-1.22635,27.284,-98.577,163.3,-131.395,40.634),1/c(f,1.97,3.54,-68.5,243,-297,125))},e.register(e.Scheme.withColorFunction("tol-rainbow","qualitative",e.tolRainbowColor,!0)),e.register(e.Scheme.fromPalettes("sol-base","sequential",[["002b36","073642","586e75","657b83","839496","93a1a1","eee8d5","fdf6e3"]],1,8)),e.register(e.Scheme.fromPalettes("sol-accent","qualitative",[["b58900","cb4b16","dc322f","d33682","6c71c4","268bd2","2aa198","859900"]]));var a,t={YlGn:{type:"sequential",cbf:42,3:["f7fcb9","addd8e","31a354"],4:["ffffcc","c2e699","78c679","238443"],5:["ffffcc","c2e699","78c679","31a354","006837"],6:["ffffcc","d9f0a3","addd8e","78c679","31a354","006837"],7:["ffffcc","d9f0a3","addd8e","78c679","41ab5d","238443","005a32"],8:["ffffe5","f7fcb9","d9f0a3","addd8e","78c679","41ab5d","238443","005a32"],9:["ffffe5","f7fcb9","d9f0a3","addd8e","78c679","41ab5d","238443","006837","004529"]},YlGnBu:{type:"sequential",cbf:42,3:["edf8b1","7fcdbb","2c7fb8"],4:["ffffcc","a1dab4","41b6c4","225ea8"],5:["ffffcc","a1dab4","41b6c4","2c7fb8","253494"],6:["ffffcc","c7e9b4","7fcdbb","41b6c4","2c7fb8","253494"],7:["ffffcc","c7e9b4","7fcdbb","41b6c4","1d91c0","225ea8","0c2c84"],8:["ffffd9","edf8b1","c7e9b4","7fcdbb","41b6c4","1d91c0","225ea8","0c2c84"],9:["ffffd9","edf8b1","c7e9b4","7fcdbb","41b6c4","1d91c0","225ea8","253494","081d58"]},GnBu:{type:"sequential",cbf:42,3:["e0f3db","a8ddb5","43a2ca"],4:["f0f9e8","bae4bc","7bccc4","2b8cbe"],5:["f0f9e8","bae4bc","7bccc4","43a2ca","0868ac"],6:["f0f9e8","ccebc5","a8ddb5","7bccc4","43a2ca","0868ac"],7:["f0f9e8","ccebc5","a8ddb5","7bccc4","4eb3d3","2b8cbe","08589e"],8:["f7fcf0","e0f3db","ccebc5","a8ddb5","7bccc4","4eb3d3","2b8cbe","08589e"],9:["f7fcf0","e0f3db","ccebc5","a8ddb5","7bccc4","4eb3d3","2b8cbe","0868ac","084081"]},BuGn:{type:"sequential",cbf:42,3:["e5f5f9","99d8c9","2ca25f"],4:["edf8fb","b2e2e2","66c2a4","238b45"],5:["edf8fb","b2e2e2","66c2a4","2ca25f","006d2c"],6:["edf8fb","ccece6","99d8c9","66c2a4","2ca25f","006d2c"],7:["edf8fb","ccece6","99d8c9","66c2a4","41ae76","238b45","005824"],8:["f7fcfd","e5f5f9","ccece6","99d8c9","66c2a4","41ae76","238b45","005824"],9:["f7fcfd","e5f5f9","ccece6","99d8c9","66c2a4","41ae76","238b45","006d2c","00441b"]},PuBuGn:{type:"sequential",cbf:42,3:["ece2f0","a6bddb","1c9099"],4:["f6eff7","bdc9e1","67a9cf","02818a"],5:["f6eff7","bdc9e1","67a9cf","1c9099","016c59"],6:["f6eff7","d0d1e6","a6bddb","67a9cf","1c9099","016c59"],7:["f6eff7","d0d1e6","a6bddb","67a9cf","3690c0","02818a","016450"],8:["fff7fb","ece2f0","d0d1e6","a6bddb","67a9cf","3690c0","02818a","016450"],9:["fff7fb","ece2f0","d0d1e6","a6bddb","67a9cf","3690c0","02818a","016c59","014636"]},PuBu:{type:"sequential",cbf:42,3:["ece7f2","a6bddb","2b8cbe"],4:["f1eef6","bdc9e1","74a9cf","0570b0"],5:["f1eef6","bdc9e1","74a9cf","2b8cbe","045a8d"],6:["f1eef6","d0d1e6","a6bddb","74a9cf","2b8cbe","045a8d"],7:["f1eef6","d0d1e6","a6bddb","74a9cf","3690c0","0570b0","034e7b"],8:["fff7fb","ece7f2","d0d1e6","a6bddb","74a9cf","3690c0","0570b0","034e7b"],9:["fff7fb","ece7f2","d0d1e6","a6bddb","74a9cf","3690c0","0570b0","045a8d","023858"]},BuPu:{type:"sequential",cbf:42,3:["e0ecf4","9ebcda","8856a7"],4:["edf8fb","b3cde3","8c96c6","88419d"],5:["edf8fb","b3cde3","8c96c6","8856a7","810f7c"],6:["edf8fb","bfd3e6","9ebcda","8c96c6","8856a7","810f7c"],7:["edf8fb","bfd3e6","9ebcda","8c96c6","8c6bb1","88419d","6e016b"],8:["f7fcfd","e0ecf4","bfd3e6","9ebcda","8c96c6","8c6bb1","88419d","6e016b"],9:["f7fcfd","e0ecf4","bfd3e6","9ebcda","8c96c6","8c6bb1","88419d","810f7c","4d004b"]},RdPu:{type:"sequential",cbf:42,3:["fde0dd","fa9fb5","c51b8a"],4:["feebe2","fbb4b9","f768a1","ae017e"],5:["feebe2","fbb4b9","f768a1","c51b8a","7a0177"],6:["feebe2","fcc5c0","fa9fb5","f768a1","c51b8a","7a0177"],7:["feebe2","fcc5c0","fa9fb5","f768a1","dd3497","ae017e","7a0177"],8:["fff7f3","fde0dd","fcc5c0","fa9fb5","f768a1","dd3497","ae017e","7a0177"],9:["fff7f3","fde0dd","fcc5c0","fa9fb5","f768a1","dd3497","ae017e","7a0177","49006a"]},PuRd:{type:"sequential",cbf:42,3:["e7e1ef","c994c7","dd1c77"],4:["f1eef6","d7b5d8","df65b0","ce1256"],5:["f1eef6","d7b5d8","df65b0","dd1c77","980043"],6:["f1eef6","d4b9da","c994c7","df65b0","dd1c77","980043"],7:["f1eef6","d4b9da","c994c7","df65b0","e7298a","ce1256","91003f"],8:["f7f4f9","e7e1ef","d4b9da","c994c7","df65b0","e7298a","ce1256","91003f"],9:["f7f4f9","e7e1ef","d4b9da","c994c7","df65b0","e7298a","ce1256","980043","67001f"]},OrRd:{type:"sequential",cbf:42,3:["fee8c8","fdbb84","e34a33"],4:["fef0d9","fdcc8a","fc8d59","d7301f"],5:["fef0d9","fdcc8a","fc8d59","e34a33","b30000"],6:["fef0d9","fdd49e","fdbb84","fc8d59","e34a33","b30000"],7:["fef0d9","fdd49e","fdbb84","fc8d59","ef6548","d7301f","990000"],8:["fff7ec","fee8c8","fdd49e","fdbb84","fc8d59","ef6548","d7301f","990000"],9:["fff7ec","fee8c8","fdd49e","fdbb84","fc8d59","ef6548","d7301f","b30000","7f0000"]},YlOrRd:{type:"sequential",cbf:42,3:["ffeda0","feb24c","f03b20"],4:["ffffb2","fecc5c","fd8d3c","e31a1c"],5:["ffffb2","fecc5c","fd8d3c","f03b20","bd0026"],6:["ffffb2","fed976","feb24c","fd8d3c","f03b20","bd0026"],7:["ffffb2","fed976","feb24c","fd8d3c","fc4e2a","e31a1c","b10026"],8:["ffffcc","ffeda0","fed976","feb24c","fd8d3c","fc4e2a","e31a1c","b10026"],9:["ffffcc","ffeda0","fed976","feb24c","fd8d3c","fc4e2a","e31a1c","bd0026","800026"]},YlOrBr:{type:"sequential",cbf:42,3:["fff7bc","fec44f","d95f0e"],4:["ffffd4","fed98e","fe9929","cc4c02"],5:["ffffd4","fed98e","fe9929","d95f0e","993404"],6:["ffffd4","fee391","fec44f","fe9929","d95f0e","993404"],7:["ffffd4","fee391","fec44f","fe9929","ec7014","cc4c02","8c2d04"],8:["ffffe5","fff7bc","fee391","fec44f","fe9929","ec7014","cc4c02","8c2d04"],9:["ffffe5","fff7bc","fee391","fec44f","fe9929","ec7014","cc4c02","993404","662506"]},Purples:{type:"sequential",cbf:42,3:["efedf5","bcbddc","756bb1"],4:["f2f0f7","cbc9e2","9e9ac8","6a51a3"],5:["f2f0f7","cbc9e2","9e9ac8","756bb1","54278f"],6:["f2f0f7","dadaeb","bcbddc","9e9ac8","756bb1","54278f"],7:["f2f0f7","dadaeb","bcbddc","9e9ac8","807dba","6a51a3","4a1486"],8:["fcfbfd","efedf5","dadaeb","bcbddc","9e9ac8","807dba","6a51a3","4a1486"],9:["fcfbfd","efedf5","dadaeb","bcbddc","9e9ac8","807dba","6a51a3","54278f","3f007d"]},Blues:{type:"sequential",cbf:42,3:["deebf7","9ecae1","3182bd"],4:["eff3ff","bdd7e7","6baed6","2171b5"],5:["eff3ff","bdd7e7","6baed6","3182bd","08519c"],6:["eff3ff","c6dbef","9ecae1","6baed6","3182bd","08519c"],7:["eff3ff","c6dbef","9ecae1","6baed6","4292c6","2171b5","084594"],8:["f7fbff","deebf7","c6dbef","9ecae1","6baed6","4292c6","2171b5","084594"],9:["f7fbff","deebf7","c6dbef","9ecae1","6baed6","4292c6","2171b5","08519c","08306b"]},Greens:{type:"sequential",cbf:42,3:["e5f5e0","a1d99b","31a354"],4:["edf8e9","bae4b3","74c476","238b45"],5:["edf8e9","bae4b3","74c476","31a354","006d2c"],6:["edf8e9","c7e9c0","a1d99b","74c476","31a354","006d2c"],7:["edf8e9","c7e9c0","a1d99b","74c476","41ab5d","238b45","005a32"],8:["f7fcf5","e5f5e0","c7e9c0","a1d99b","74c476","41ab5d","238b45","005a32"],9:["f7fcf5","e5f5e0","c7e9c0","a1d99b","74c476","41ab5d","238b45","006d2c","00441b"]},Oranges:{type:"sequential",cbf:42,3:["fee6ce","fdae6b","e6550d"],4:["feedde","fdbe85","fd8d3c","d94701"],5:["feedde","fdbe85","fd8d3c","e6550d","a63603"],6:["feedde","fdd0a2","fdae6b","fd8d3c","e6550d","a63603"],7:["feedde","fdd0a2","fdae6b","fd8d3c","f16913","d94801","8c2d04"],8:["fff5eb","fee6ce","fdd0a2","fdae6b","fd8d3c","f16913","d94801","8c2d04"],9:["fff5eb","fee6ce","fdd0a2","fdae6b","fd8d3c","f16913","d94801","a63603","7f2704"]},Reds:{type:"sequential",cbf:42,3:["fee0d2","fc9272","de2d26"],4:["fee5d9","fcae91","fb6a4a","cb181d"],5:["fee5d9","fcae91","fb6a4a","de2d26","a50f15"],6:["fee5d9","fcbba1","fc9272","fb6a4a","de2d26","a50f15"],7:["fee5d9","fcbba1","fc9272","fb6a4a","ef3b2c","cb181d","99000d"],8:["fff5f0","fee0d2","fcbba1","fc9272","fb6a4a","ef3b2c","cb181d","99000d"],9:["fff5f0","fee0d2","fcbba1","fc9272","fb6a4a","ef3b2c","cb181d","a50f15","67000d"]},Greys:{type:"sequential",cbf:42,3:["f0f0f0","bdbdbd","636363"],4:["f7f7f7","cccccc","969696","525252"],5:["f7f7f7","cccccc","969696","636363","252525"],6:["f7f7f7","d9d9d9","bdbdbd","969696","636363","252525"],7:["f7f7f7","d9d9d9","bdbdbd","969696","737373","525252","252525"],8:["ffffff","f0f0f0","d9d9d9","bdbdbd","969696","737373","525252","252525"],9:["ffffff","f0f0f0","d9d9d9","bdbdbd","969696","737373","525252","252525","000000"]},PuOr:{type:"diverging",cbf:42,3:["f1a340","f7f7f7","998ec3"],4:["e66101","fdb863","b2abd2","5e3c99"],5:["e66101","fdb863","f7f7f7","b2abd2","5e3c99"],6:["b35806","f1a340","fee0b6","d8daeb","998ec3","542788"],7:["b35806","f1a340","fee0b6","f7f7f7","d8daeb","998ec3","542788"],8:["b35806","e08214","fdb863","fee0b6","d8daeb","b2abd2","8073ac","542788"],9:["b35806","e08214","fdb863","fee0b6","f7f7f7","d8daeb","b2abd2","8073ac","542788"],10:["7f3b08","b35806","e08214","fdb863","fee0b6","d8daeb","b2abd2","8073ac","542788","2d004b"],11:["7f3b08","b35806","e08214","fdb863","fee0b6","f7f7f7","d8daeb","b2abd2","8073ac","542788","2d004b"]},BrBG:{type:"diverging",cbf:42,3:["d8b365","f5f5f5","5ab4ac"],4:["a6611a","dfc27d","80cdc1","018571"],5:["a6611a","dfc27d","f5f5f5","80cdc1","018571"],6:["8c510a","d8b365","f6e8c3","c7eae5","5ab4ac","01665e"],7:["8c510a","d8b365","f6e8c3","f5f5f5","c7eae5","5ab4ac","01665e"],8:["8c510a","bf812d","dfc27d","f6e8c3","c7eae5","80cdc1","35978f","01665e"],9:["8c510a","bf812d","dfc27d","f6e8c3","f5f5f5","c7eae5","80cdc1","35978f","01665e"],10:["543005","8c510a","bf812d","dfc27d","f6e8c3","c7eae5","80cdc1","35978f","01665e","003c30"],11:["543005","8c510a","bf812d","dfc27d","f6e8c3","f5f5f5","c7eae5","80cdc1","35978f","01665e","003c30"]},PRGn:{type:"diverging",cbf:42,3:["af8dc3","f7f7f7","7fbf7b"],4:["7b3294","c2a5cf","a6dba0","008837"],5:["7b3294","c2a5cf","f7f7f7","a6dba0","008837"],6:["762a83","af8dc3","e7d4e8","d9f0d3","7fbf7b","1b7837"],7:["762a83","af8dc3","e7d4e8","f7f7f7","d9f0d3","7fbf7b","1b7837"],8:["762a83","9970ab","c2a5cf","e7d4e8","d9f0d3","a6dba0","5aae61","1b7837"],9:["762a83","9970ab","c2a5cf","e7d4e8","f7f7f7","d9f0d3","a6dba0","5aae61","1b7837"],10:["40004b","762a83","9970ab","c2a5cf","e7d4e8","d9f0d3","a6dba0","5aae61","1b7837","00441b"],11:["40004b","762a83","9970ab","c2a5cf","e7d4e8","f7f7f7","d9f0d3","a6dba0","5aae61","1b7837","00441b"]},PiYG:{type:"diverging",cbf:42,3:["e9a3c9","f7f7f7","a1d76a"],4:["d01c8b","f1b6da","b8e186","4dac26"],5:["d01c8b","f1b6da","f7f7f7","b8e186","4dac26"],6:["c51b7d","e9a3c9","fde0ef","e6f5d0","a1d76a","4d9221"],7:["c51b7d","e9a3c9","fde0ef","f7f7f7","e6f5d0","a1d76a","4d9221"],8:["c51b7d","de77ae","f1b6da","fde0ef","e6f5d0","b8e186","7fbc41","4d9221"],9:["c51b7d","de77ae","f1b6da","fde0ef","f7f7f7","e6f5d0","b8e186","7fbc41","4d9221"],10:["8e0152","c51b7d","de77ae","f1b6da","fde0ef","e6f5d0","b8e186","7fbc41","4d9221","276419"],11:["8e0152","c51b7d","de77ae","f1b6da","fde0ef","f7f7f7","e6f5d0","b8e186","7fbc41","4d9221","276419"]},RdBu:{type:"diverging",cbf:42,3:["ef8a62","f7f7f7","67a9cf"],4:["ca0020","f4a582","92c5de","0571b0"],5:["ca0020","f4a582","f7f7f7","92c5de","0571b0"],6:["b2182b","ef8a62","fddbc7","d1e5f0","67a9cf","2166ac"],7:["b2182b","ef8a62","fddbc7","f7f7f7","d1e5f0","67a9cf","2166ac"],8:["b2182b","d6604d","f4a582","fddbc7","d1e5f0","92c5de","4393c3","2166ac"],9:["b2182b","d6604d","f4a582","fddbc7","f7f7f7","d1e5f0","92c5de","4393c3","2166ac"],10:["67001f","b2182b","d6604d","f4a582","fddbc7","d1e5f0","92c5de","4393c3","2166ac","053061"],11:["67001f","b2182b","d6604d","f4a582","fddbc7","f7f7f7","d1e5f0","92c5de","4393c3","2166ac","053061"]},RdGy:{type:"diverging",cbf:42,3:["ef8a62","ffffff","999999"],4:["ca0020","f4a582","bababa","404040"],5:["ca0020","f4a582","ffffff","bababa","404040"],6:["b2182b","ef8a62","fddbc7","e0e0e0","999999","4d4d4d"],7:["b2182b","ef8a62","fddbc7","ffffff","e0e0e0","999999","4d4d4d"],8:["b2182b","d6604d","f4a582","fddbc7","e0e0e0","bababa","878787","4d4d4d"],9:["b2182b","d6604d","f4a582","fddbc7","ffffff","e0e0e0","bababa","878787","4d4d4d"],10:["67001f","b2182b","d6604d","f4a582","fddbc7","e0e0e0","bababa","878787","4d4d4d","1a1a1a"],11:["67001f","b2182b","d6604d","f4a582","fddbc7","ffffff","e0e0e0","bababa","878787","4d4d4d","1a1a1a"]},RdYlBu:{type:"diverging",cbf:42,3:["fc8d59","ffffbf","91bfdb"],4:["d7191c","fdae61","abd9e9","2c7bb6"],5:["d7191c","fdae61","ffffbf","abd9e9","2c7bb6"],6:["d73027","fc8d59","fee090","e0f3f8","91bfdb","4575b4"],7:["d73027","fc8d59","fee090","ffffbf","e0f3f8","91bfdb","4575b4"],8:["d73027","f46d43","fdae61","fee090","e0f3f8","abd9e9","74add1","4575b4"],9:["d73027","f46d43","fdae61","fee090","ffffbf","e0f3f8","abd9e9","74add1","4575b4"],10:["a50026","d73027","f46d43","fdae61","fee090","e0f3f8","abd9e9","74add1","4575b4","313695"],11:["a50026","d73027","f46d43","fdae61","fee090","ffffbf","e0f3f8","abd9e9","74add1","4575b4","313695"]},Spectral:{type:"diverging",cbf:0,3:["fc8d59","ffffbf","99d594"],4:["d7191c","fdae61","abdda4","2b83ba"],5:["d7191c","fdae61","ffffbf","abdda4","2b83ba"],6:["d53e4f","fc8d59","fee08b","e6f598","99d594","3288bd"],7:["d53e4f","fc8d59","fee08b","ffffbf","e6f598","99d594","3288bd"],8:["d53e4f","f46d43","fdae61","fee08b","e6f598","abdda4","66c2a5","3288bd"],9:["d53e4f","f46d43","fdae61","fee08b","ffffbf","e6f598","abdda4","66c2a5","3288bd"],10:["9e0142","d53e4f","f46d43","fdae61","fee08b","e6f598","abdda4","66c2a5","3288bd","5e4fa2"],11:["9e0142","d53e4f","f46d43","fdae61","fee08b","ffffbf","e6f598","abdda4","66c2a5","3288bd","5e4fa2"]},RdYlGn:{type:"diverging",cbf:0,3:["fc8d59","ffffbf","91cf60"],4:["d7191c","fdae61","a6d96a","1a9641"],5:["d7191c","fdae61","ffffbf","a6d96a","1a9641"],6:["d73027","fc8d59","fee08b","d9ef8b","91cf60","1a9850"],7:["d73027","fc8d59","fee08b","ffffbf","d9ef8b","91cf60","1a9850"],8:["d73027","f46d43","fdae61","fee08b","d9ef8b","a6d96a","66bd63","1a9850"],9:["d73027","f46d43","fdae61","fee08b","ffffbf","d9ef8b","a6d96a","66bd63","1a9850"],10:["a50026","d73027","f46d43","fdae61","fee08b","d9ef8b","a6d96a","66bd63","1a9850","006837"],11:["a50026","d73027","f46d43","fdae61","fee08b","ffffbf","d9ef8b","a6d96a","66bd63","1a9850","006837"]},Accent:{type:"qualitative",cbf:0,3:["7fc97f","beaed4","fdc086"],4:["7fc97f","beaed4","fdc086","ffff99"],5:["7fc97f","beaed4","fdc086","ffff99","386cb0"],6:["7fc97f","beaed4","fdc086","ffff99","386cb0","f0027f"],7:["7fc97f","beaed4","fdc086","ffff99","386cb0","f0027f","bf5b17"],8:["7fc97f","beaed4","fdc086","ffff99","386cb0","f0027f","bf5b17","666666"]},Dark2:{type:"qualitative",cbf:3,3:["1b9e77","d95f02","7570b3"],4:["1b9e77","d95f02","7570b3","e7298a"],5:["1b9e77","d95f02","7570b3","e7298a","66a61e"],6:["1b9e77","d95f02","7570b3","e7298a","66a61e","e6ab02"],7:["1b9e77","d95f02","7570b3","e7298a","66a61e","e6ab02","a6761d"],8:["1b9e77","d95f02","7570b3","e7298a","66a61e","e6ab02","a6761d","666666"]},Paired:{type:"qualitative",cbf:4,3:["a6cee3","1f78b4","b2df8a"],4:["a6cee3","1f78b4","b2df8a","33a02c"],5:["a6cee3","1f78b4","b2df8a","33a02c","fb9a99"],6:["a6cee3","1f78b4","b2df8a","33a02c","fb9a99","e31a1c"],7:["a6cee3","1f78b4","b2df8a","33a02c","fb9a99","e31a1c","fdbf6f"],8:["a6cee3","1f78b4","b2df8a","33a02c","fb9a99","e31a1c","fdbf6f","ff7f00"],9:["a6cee3","1f78b4","b2df8a","33a02c","fb9a99","e31a1c","fdbf6f","ff7f00","cab2d6"],10:["a6cee3","1f78b4","b2df8a","33a02c","fb9a99","e31a1c","fdbf6f","ff7f00","cab2d6","6a3d9a"],11:["a6cee3","1f78b4","b2df8a","33a02c","fb9a99","e31a1c","fdbf6f","ff7f00","cab2d6","6a3d9a","ffff99"],12:["a6cee3","1f78b4","b2df8a","33a02c","fb9a99","e31a1c","fdbf6f","ff7f00","cab2d6","6a3d9a","ffff99","b15928"]},Pastel1:{type:"qualitative",cbf:0,3:["fbb4ae","b3cde3","ccebc5"],4:["fbb4ae","b3cde3","ccebc5","decbe4"],5:["fbb4ae","b3cde3","ccebc5","decbe4","fed9a6"],6:["fbb4ae","b3cde3","ccebc5","decbe4","fed9a6","ffffcc"],7:["fbb4ae","b3cde3","ccebc5","decbe4","fed9a6","ffffcc","e5d8bd"],8:["fbb4ae","b3cde3","ccebc5","decbe4","fed9a6","ffffcc","e5d8bd","fddaec"],9:["fbb4ae","b3cde3","ccebc5","decbe4","fed9a6","ffffcc","e5d8bd","fddaec","f2f2f2"]},Pastel2:{type:"qualitative",cbf:0,3:["b3e2cd","fdcdac","cbd5e8"],4:["b3e2cd","fdcdac","cbd5e8","f4cae4"],5:["b3e2cd","fdcdac","cbd5e8","f4cae4","e6f5c9"],6:["b3e2cd","fdcdac","cbd5e8","f4cae4","e6f5c9","fff2ae"],7:["b3e2cd","fdcdac","cbd5e8","f4cae4","e6f5c9","fff2ae","f1e2cc"],8:["b3e2cd","fdcdac","cbd5e8","f4cae4","e6f5c9","fff2ae","f1e2cc","cccccc"]},Set1:{type:"qualitative",cbf:0,3:["e41a1c","377eb8","4daf4a"],4:["e41a1c","377eb8","4daf4a","984ea3"],5:["e41a1c","377eb8","4daf4a","984ea3","ff7f00"],6:["e41a1c","377eb8","4daf4a","984ea3","ff7f00","ffff33"],7:["e41a1c","377eb8","4daf4a","984ea3","ff7f00","ffff33","a65628"],8:["e41a1c","377eb8","4daf4a","984ea3","ff7f00","ffff33","a65628","f781bf"],9:["e41a1c","377eb8","4daf4a","984ea3","ff7f00","ffff33","a65628","f781bf","999999"]},Set2:{type:"qualitative",cbf:3,3:["66c2a5","fc8d62","8da0cb"],4:["66c2a5","fc8d62","8da0cb","e78ac3"],5:["66c2a5","fc8d62","8da0cb","e78ac3","a6d854"],6:["66c2a5","fc8d62","8da0cb","e78ac3","a6d854","ffd92f"],7:["66c2a5","fc8d62","8da0cb","e78ac3","a6d854","ffd92f","e5c494"],8:["66c2a5","fc8d62","8da0cb","e78ac3","a6d854","ffd92f","e5c494","b3b3b3"]},Set3:{type:"qualitative",cbf:0,3:["8dd3c7","ffffb3","bebada"],4:["8dd3c7","ffffb3","bebada","fb8072"],5:["8dd3c7","ffffb3","bebada","fb8072","80b1d3"],6:["8dd3c7","ffffb3","bebada","fb8072","80b1d3","fdb462"],7:["8dd3c7","ffffb3","bebada","fb8072","80b1d3","fdb462","b3de69"],8:["8dd3c7","ffffb3","bebada","fb8072","80b1d3","fdb462","b3de69","fccde5"],9:["8dd3c7","ffffb3","bebada","fb8072","80b1d3","fdb462","b3de69","fccde5","d9d9d9"],10:["8dd3c7","ffffb3","bebada","fb8072","80b1d3","fdb462","b3de69","fccde5","d9d9d9","bc80bd"],11:["8dd3c7","ffffb3","bebada","fb8072","80b1d3","fdb462","b3de69","fccde5","d9d9d9","bc80bd","ccebc5"],12:["8dd3c7","ffffb3","bebada","fb8072","80b1d3","fdb462","b3de69","fccde5","d9d9d9","bc80bd","ccebc5","ffed6f"]}};for(a in t){var n=e.Scheme.fromPalettes("cb-"+a,[(n=t[a]).type,"cb-"+n.type],n,12,n.cbf);e.register(n)}"object"==typeof module&&module.exports&&(module.exports=e),CoreUI.chart.palette=e}();;
CoreUI.chart.utils={getFieldValue:function(t,e){t=t.getRecord();return e&&t&&"string"==typeof e.name&&"object"==typeof t&&t.hasOwnProperty(e.name)&&0<=["string","number","object"].indexOf(typeof t[e.name])?t[e.name]:""},getFunctionByName:function(t,e){var r=t.split("."),t=r.pop();e=e||window;for(let t=0;t<r.length;t++){if(!e.hasOwnProperty(r[t]))return null;e=e[r[t]]}return"function"==typeof e[t]?e[t]:null},mergeFieldOptions:function(t,e,r){let n=$.extend(!0,{},e);return r&&(n.hasOwnProperty("attr")&&"object"==typeof n.attr&&r.hasOwnProperty("attr")&&"object"==typeof r.attr&&(r.attr=this.mergeAttr(n.attr,r.attr)),n=$.extend(!0,{},n,r)),n.hasOwnProperty("width")&&(n.width?(e="number"==typeof n.width?"px":"",n.width=n.width+e):t._options.fieldWidth&&"color"!==n.type&&(r="number"==typeof t._options.fieldWidth?"px":"",n.width=t._options.fieldWidth+r)),n.hasOwnProperty("labelWidth")&&(0<=n.labelWidth&&null!==n.labelWidth?(e="number"==typeof n.labelWidth?"px":"",n.labelWidth=n.labelWidth+e):t._options.labelWidth&&(r="number"==typeof t._options.labelWidth?"px":"",n.labelWidth=t._options.labelWidth+r)),n},mergeAttr:function(t,e){let r=Object.assign({},t);return"object"==typeof e&&$.each(e,function(t,e){r.hasOwnProperty(t)?"class"===t?r[t]+=" "+e:"style"===t?r[t]+=";"+e:r[t]=e:r[t]=e}),r},getAttacheFields:function(r,n){let o=[];return"object"==typeof n&&"object"==typeof n.fields&&Array.isArray(n.fields)&&$.each(n.fields,function(t,e){e=r.initField(e);"object"==typeof e&&o.push({hash:e._hash,direction:n.hasOwnProperty("fieldsDirection")?n.fieldsDirection:"row",content:e.renderContent()})}),o},chartatDate:function(t){var e,r,n;return t&&10===t.length&&(e=(r=new Date(t)).getFullYear(),n=r.getMonth()+1,t=(r=(r=r.getDate())<10?"0"+r:r)+"."+(n=n<10?"0"+n:n)+"."+e),t},chartatDateTime:function(t){var e,r,n,o;return t&&10<=t.length&&(r=(e=new Date(t)).getFullYear(),o=e.getMonth()+1,t=(n=(n=e.getDate())<10?"0"+n:n)+"."+(o=o<10?"0"+o:o)+"."+r+" "+("00"+e.getHours()).slice(-2)+":"+("00"+e.getMinutes()).slice(-2)+":"+("00"+e.getSeconds()).slice(-2)),t},chartatDateMonth:function(t,e){var r,n;return t&&7===t.length&&(r=(n=new Date(t)).getFullYear(),n=n.getMonth(),t=(e.date_months.hasOwnProperty(n)?e.date_months[n]:"")+" "+r),t},chartatDateWeek:function(t,e){var r,n;return t&&7<=t.length&&(r=t.substring(0,4),n=t.substring(6),t=r+" "+e.date_week+" "+n),t},isNumeric:function(t){return("number"==typeof t||"string"==typeof t&&""!==t.trim())&&!isNaN(t)},isObject:function(t){return"object"==typeof t&&!Array.isArray(t)&&null!==t},isArray:function(t){return Array.isArray(t)},hashCode:function(){return this.crc32(((new Date).getTime()+Math.random()).toString()).toString(16)},crc32:function(t){for(var e=[],r=0;r<256;r++){for(var n=r,o=0;o<8;o++)n=1&n?3988292384^n>>>1:n>>>1;e[r]=n}for(var i=-1,a=0;a<t.length;a++)i=i>>>8^e[255&(i^t.charCodeAt(a))];return(-1^i)>>>0},round:function(t,e){var r;return 0===(e=void 0!==e?parseInt(e):0)?Math.round(t):0<e?(r=Math.pow(10,e),Math.round(t*r)/r):(r=Math.pow(10,e),Math.round(t/r)*r)},getPaletteClassic:function(){return["#7EB26D","#EAB839","#6ED0E0","#EF843C","#E24D42","#1F78C1","#BA43A9","#705DA0","#508642","#CCA300","#447EBC","#C15C17","#890F02","#0A437C","#6D1F62","#584477","#B7DBAB","#F4D598","#70DBED","#F9BA8F","#F29191","#82B5D8","#E5A8E2","#AEA2E0","#629E51","#E5AC0E","#64B0C8","#E0752D","#BF1B00","#0A50A1","#962D82","#614D93","#9AC48A","#F2C96D","#65C5DB","#F9934E","#EA6460","#5195CE","#D683CE","#806EB7","#3F6833","#967302","#2F575E","#99440A","#58140C","#052B51","#511749","#3F2B5B","#E0F9D7","#FCEACA","#CFFAFF","#F9E2D2","#FCE2DE","#BADFF4","#F9D9F9","#DEDAF7"]}};;
CoreUI.chart.type.box={_options:{},_apexOptions:{},_apex:null,_colors:[],_datasets:[],init:function(t,s,o){this._options=$.extend(!0,{},t),this._apexOptions=$.extend(!0,{},s),this._colors=$.extend(!0,{},o)},render:function(t){this._buildApexOptions(),this._options.hasOwnProperty("options")&&CoreUI.chart.utils.isObject(this._options.options)&&this._options.options.debug&&console.log($.extend(!0,{},this._apexOptions)),this._apex=new CoreUI.chart.apex(t,this._apexOptions),this._apex.render()},_buildApexOptions:function(){let y=this,O={};if(this._apexOptions.chart.type="boxPlot",this._options.hasOwnProperty("options")&&CoreUI.chart.utils.isObject(this._options.options)&&this._options.options.hasOwnProperty("style")&&CoreUI.chart.utils.isObject(this._options.options.style)&&((O=this._options.options.style).hasOwnProperty("colorUpper")&&"string"==typeof O.colorUpper&&(this._apexOptions.plotOptions.boxPlot.colors.upper=O.colorUpper),O.hasOwnProperty("colorLower")&&"string"==typeof O.colorLower&&(this._apexOptions.plotOptions.boxPlot.colors.lower=O.colorLower),O.hasOwnProperty("horizontal")&&!0===O.horizontal&&(this._apexOptions.plotOptions.bar.horizontal=!0),O.hasOwnProperty("size"))&&"number"==typeof O.size&&(O.size<1?O.size=1:100<O.size&&(O.size=100),this._apexOptions.plotOptions.bar.barHeight=O.size+"%",this._apexOptions.plotOptions.bar.columnWidth=O.size+"%"),this._options.hasOwnProperty("datasets")&&CoreUI.chart.utils.isArray(this._options.datasets)){let h=0;$.each(this._options.datasets,function(t,a){if(CoreUI.chart.utils.isObject(a)&&a.hasOwnProperty("type")&&a.hasOwnProperty("name")&&"string"==typeof a.type&&"string"==typeof a.name&&0<=["box"].indexOf(a.type)){let t=null,o=[],s=!1,e="#333",i=1,l=0,p=.4;var n="box"===a.type?"boxPlot":"";y._colors.hasOwnProperty(h)&&(t=y._colors[h]),O.hasOwnProperty("width")&&"number"==typeof O.width&&(O.width<0?O.width=0:10<O.width&&(O.width=10),i=O.width),O.hasOwnProperty("dash")&&"number"==typeof O.dash&&(O.dash<0?O.dash=0:100<O.dash&&(O.dash=100),l=O.dash),O.hasOwnProperty("labels")&&!0===O.labels&&(s=!0),O.hasOwnProperty("fill")&&"number"==typeof O.fill&&(O.fill<1?O.fill=1:100<O.fill&&(O.fill=100),p=O.fill/100),a.hasOwnProperty("style")&&CoreUI.chart.utils.isObject(a.style)&&(a.style.hasOwnProperty("color")&&"string"==typeof a.style.color&&(t=a.style.color),a.style.hasOwnProperty("labels")&&"boolean"==typeof a.style.labels&&(s=a.style.labels),a.style.hasOwnProperty("labelColor")&&"string"==typeof a.style.labelColor&&(e=a.style.labelColor),a.style.hasOwnProperty("fill")&&"number"==typeof a.style.fill&&(a.style.fill<1?a.style.fill=1:100<a.style.fill&&(a.style.fill=100),p=a.style.fill/100),a.style.hasOwnProperty("width")&&"number"==typeof a.style.width&&(a.style.width<0?a.style.width=0:10<a.style.width&&(a.style.width=10),i=a.style.width),a.style.hasOwnProperty("dash"))&&"number"==typeof a.style.dash&&(a.style.dash<0?a.style.dash=0:100<a.style.dash&&(a.style.dash=100),l=a.style.dash);let r=0;$.each(a.data,function(t,s){if(CoreUI.chart.utils.isObject(s)&&s.hasOwnProperty("y")){let t="";t=s.hasOwnProperty("x")?s.x:y._options.hasOwnProperty("labels")&&CoreUI.chart.utils.isArray(y._options.labels)&&y._options.labels.hasOwnProperty(r)?y._options.labels[r]:r+1,o.push({x:t,y:s.y}),r++}else if(Array.isArray(s)){let t="";t=y._options.hasOwnProperty("labels")&&CoreUI.chart.utils.isArray(y._options.labels)&&y._options.labels.hasOwnProperty(r)?y._options.labels[r]:r+1,o.push({x:t,y:s}),r++}}),s&&(y._apexOptions.dataLabels.enabledOnSeries.push(h),y._apexOptions.dataLabels.enabled=!0),y._apexOptions.dataLabels.style.colors.push(e),y._apexOptions.fill.gradient.opacityFrom.push(p),y._apexOptions.fill.opacity.push(p),y._apexOptions.stroke.width.push(i),y._apexOptions.stroke.dashArray.push(l),y._apexOptions.colors.push(t||"#66a61e"),y._apexOptions.series.push({type:n,name:a.name,data:o}),h++}})}}};;
CoreUI.chart.type.candlestick={_options:{},_apexOptions:{},_apex:null,_colors:[],_datasets:[],init:function(t,s,e){this._options=$.extend(!0,{},t),this._apexOptions=$.extend(!0,{},s),this._colors=$.extend(!0,{},e)},render:function(t){this._buildApexOptions(),this._options.hasOwnProperty("options")&&CoreUI.chart.utils.isObject(this._options.options)&&this._options.options.debug&&console.log($.extend(!0,{},this._apexOptions)),this._apex=new CoreUI.chart.apex(t,this._apexOptions),this._apex.render()},_buildApexOptions:function(){let h=this,y={};if(this._apexOptions.chart.type="candlestick",this._apexOptions.tooltip.intersect=!1,this._apexOptions.tooltip.shared=!1,this._apexOptions.xaxis.crosshairs.show=!1,this._options.hasOwnProperty("options")&&CoreUI.chart.utils.isObject(this._options.options)&&this._options.options.hasOwnProperty("style")&&CoreUI.chart.utils.isObject(this._options.options.style)&&((y=this._options.options.style).hasOwnProperty("colorUpward")&&"string"==typeof y.colorUpward&&(this._apexOptions.plotOptions.candlestick.colors.upward=y.colorUpward),y.hasOwnProperty("colorDownward"))&&"string"==typeof y.colorDownward&&(this._apexOptions.plotOptions.candlestick.colors.downward=y.colorDownward),this._options.hasOwnProperty("datasets")&&CoreUI.chart.utils.isArray(this._options.datasets)){let n=0;$.each(this._options.datasets,function(t,r){if(CoreUI.chart.utils.isObject(r)&&r.hasOwnProperty("type")&&r.hasOwnProperty("name")&&"string"==typeof r.type&&"string"==typeof r.name&&0<=["candlestick"].indexOf(r.type)){let t=null,e=[],s=!1,o="#333",i=1,l=0,p=.4,a=(h._colors.hasOwnProperty(n)&&(t=h._colors[n]),y.hasOwnProperty("width")&&"number"==typeof y.width&&(y.width<0?y.width=0:10<y.width&&(y.width=10),i=y.width),y.hasOwnProperty("dash")&&"number"==typeof y.dash&&(y.dash<0?y.dash=0:100<y.dash&&(y.dash=100),l=y.dash),y.hasOwnProperty("labels")&&!0===y.labels&&(s=!0),y.hasOwnProperty("fill")&&"number"==typeof y.fill&&(y.fill<1?y.fill=1:100<y.fill&&(y.fill=100),p=y.fill/100),r.hasOwnProperty("style")&&CoreUI.chart.utils.isObject(r.style)&&(r.style.hasOwnProperty("color")&&"string"==typeof r.style.color&&(t=r.style.color),r.style.hasOwnProperty("labels")&&"boolean"==typeof r.style.labels&&(s=r.style.labels),r.style.hasOwnProperty("labelColor")&&"string"==typeof r.style.labelColor&&(o=r.style.labelColor),r.style.hasOwnProperty("fill")&&"number"==typeof r.style.fill&&(r.style.fill<1?r.style.fill=1:100<r.style.fill&&(r.style.fill=100),p=r.style.fill/100),r.style.hasOwnProperty("width"))&&"number"==typeof r.style.width&&(r.style.width<0?r.style.width=0:10<r.style.width&&(r.style.width=10),i=r.style.width),0);$.each(r.data,function(t,s){if(CoreUI.chart.utils.isObject(s)&&s.hasOwnProperty("y")){let t="";t=s.hasOwnProperty("x")?s.x:h._options.hasOwnProperty("labels")&&CoreUI.chart.utils.isArray(h._options.labels)&&h._options.labels.hasOwnProperty(a)?h._options.labels[a]:a+1,e.push({x:t,y:s.y}),a++}else Array.isArray(s)&&(e.push(s),a++)}),s&&(h._apexOptions.dataLabels.enabledOnSeries.push(n),h._apexOptions.dataLabels.enabled=!0),h._apexOptions.dataLabels.style.colors.push(o),h._apexOptions.fill.gradient.opacityFrom.push(p),h._apexOptions.fill.opacity.push(p),h._apexOptions.stroke.width.push(i),h._apexOptions.stroke.dashArray.push(l),h._apexOptions.colors.push(t||"#66a61e"),h._apexOptions.series.push({type:r.type,name:r.name,data:e}),n++}})}}};;
CoreUI.chart.type.hBar={_options:{},_apexOptions:{},_apex:null,_colors:[],_datasets:[],init:function(t,s,e){this._options=$.extend(!0,{},t),this._apexOptions=$.extend(!0,{},s),this._colors=$.extend(!0,{},e)},render:function(t){this._buildApexOptions(),this._options.hasOwnProperty("options")&&CoreUI.chart.utils.isObject(this._options.options)&&this._options.options.debug&&console.log($.extend(!0,{},this._apexOptions)),this._apex=new CoreUI.chart.apex(t,this._apexOptions),this._apex.render()},_buildApexOptions:function(){let n=this,h={};if(this._apexOptions.chart.type="bar",this._apexOptions.plotOptions.bar.horizontal=!0,this._options.hasOwnProperty("options")&&CoreUI.chart.utils.isObject(this._options.options)&&this._options.options.hasOwnProperty("style")&&CoreUI.chart.utils.isObject(this._options.options.style)&&((h=this._options.options.style).hasOwnProperty("stacked")&&0<=["string","boolean"].indexOf(typeof h.stacked)&&(!0===h.stacked?this._apexOptions.chart.stacked=!0:"100%"===h.stacked&&(this._apexOptions.chart.stacked=!0,this._apexOptions.chart.stackType="100%")),h.hasOwnProperty("borderRadius")&&"number"==typeof h.borderRadius&&(h.borderRadius<0?h.borderRadius=0:10<h.borderRadius&&(h.borderRadius=10),this._apexOptions.plotOptions.bar.borderRadius=h.borderRadius),h.hasOwnProperty("size")&&"number"==typeof h.size&&(h.size<1?h.size=1:100<h.size&&(h.size=100),this._apexOptions.plotOptions.bar.barHeight=h.size+"%"),h.hasOwnProperty("isFunnel"))&&!0===h.isFunnel&&(this._apexOptions.plotOptions.bar.isFunnel=!0,this._apexOptions.xaxis.crosshairs.show=!1,this._apexOptions.dataLabels.formatter=function(t,s){return s.w.globals.labels[s.dataPointIndex]+":  "+t}),this._options.hasOwnProperty("datasets")&&CoreUI.chart.utils.isArray(this._options.datasets)){let p=0;$.each(this._options.datasets,function(t,l){if(CoreUI.chart.utils.isObject(l)&&l.hasOwnProperty("type")&&l.hasOwnProperty("name")&&"string"==typeof l.type&&"string"==typeof l.name&&0<=["bar"].indexOf(l.type)){let t=null,s=!1,e="#fff",o=1,i=0,a="solid",r=.4;n._colors.hasOwnProperty(p)&&(t=n._colors[p]),h.hasOwnProperty("width")&&"number"==typeof h.width&&(h.width<0?h.width=0:10<h.width&&(h.width=10),o=h.width),h.hasOwnProperty("dash")&&"number"==typeof h.dash&&(h.dash<0?h.dash=0:100<h.dash&&(h.dash=100),i=h.dash),h.hasOwnProperty("gradient")&&!0===h.gradient&&(a="gradient"),h.hasOwnProperty("fill")&&"number"==typeof h.fill&&(h.fill<1?h.fill=1:100<h.fill&&(h.fill=100),r=h.fill/100),h.hasOwnProperty("labels")&&!0===h.labels&&(s=!0),h.hasOwnProperty("labelColor")&&"string"==typeof h.labelColor&&(e=h.labelColor),l.hasOwnProperty("style")&&CoreUI.chart.utils.isObject(l.style)&&(l.style.hasOwnProperty("color")&&"string"==typeof l.style.color&&(t=l.style.color),l.style.hasOwnProperty("labels")&&"boolean"==typeof l.style.labels&&(s=l.style.labels),l.style.hasOwnProperty("labelColor")&&"string"==typeof l.style.labelColor&&(e=l.style.labelColor),l.style.hasOwnProperty("dash")&&"number"==typeof l.style.dash&&(l.style.dash<0?l.style.dash=0:100<l.style.dash&&(l.style.dash=100),i=l.style.dash),l.style.hasOwnProperty("width")&&"number"==typeof l.style.width&&(l.style.width<0?l.style.width=0:10<l.style.width&&(l.style.width=10),o=l.style.width),l.style.hasOwnProperty("fill")&&"number"==typeof l.style.fill&&(l.style.fill<1?l.style.fill=1:100<l.style.fill&&(l.style.fill=100),r=l.style.fill/100),l.style.hasOwnProperty("gradient"))&&(a=!0===l.style.gradient?"gradient":"solid"),s&&(n._apexOptions.dataLabels.enabledOnSeries.push(p),n._apexOptions.dataLabels.enabled=!0),n._apexOptions.dataLabels.style.colors.push(e),n._apexOptions.fill.gradient.opacityFrom.push(r),n._apexOptions.fill.opacity.push(r),n._apexOptions.fill.type.push(a),n._apexOptions.stroke.width.push(o),n._apexOptions.stroke.dashArray.push(i),n._apexOptions.colors.push(t||"#66a61e"),n._apexOptions.series.push({type:"bar",name:l.name,data:l.data}),p++}})}}};;
CoreUI.chart.type.line={_options:{},_apexOptions:{},_apex:null,_colors:[],_datasets:[],_annotations:{},init:function(e,t,s){this._options=$.extend(!0,{},e),this._apexOptions=$.extend(!0,{},t),this._colors=$.extend(!0,{},s)},render:function(e){this._buildApexOptions(),this._options.hasOwnProperty("options")&&CoreUI.chart.utils.isObject(this._options.options)&&this._options.options.debug&&console.log($.extend(!0,{},this._apexOptions)),this._apex=new CoreUI.chart.apex(e,this._apexOptions),this._apex.render()},addDatasets:function(e){if(Array.isArray(e)){let o=this;$.each(e,function(e,t){var s=o._getDatasetOptions(t);null!==s&&(o._apexOptions=s,o._datasets.push(t))}),this._fixMarkers(this._apexOptions),this._options.hasOwnProperty("options")&&CoreUI.chart.utils.isObject(this._options.options)&&this._options.options.debug&&console.log($.extend(!0,{},this._apexOptions)),this._apex.updateOptions($.extend(!0,{},this._apexOptions))}},appendDataset:function(t){let r=[];$.each(this._datasets,function(e,s){let o=[];$.each(t,function(e,t){if(s.hasOwnProperty("name")&&s.name===e&&Array.isArray(t))return o=t,!1}),r.push({data:o})}),0!==r.length&&this._apex.appendData(r)},removeDataset:function(s){let o=null;$.each(this._datasets,function(e,t){if(t.hasOwnProperty("name")&&t.name===s)return o=e,!1}),null!==o&&(this._datasets.splice(o,1),this._apexOptions.dataLabels.enabledOnSeries.splice(o,1),this._apexOptions.dataLabels.style.colors.splice(o,1),this._apexOptions.fill.gradient.opacityFrom.splice(o,1),this._apexOptions.fill.opacity.splice(o,1),this._apexOptions.fill.type.splice(o,1),this._apexOptions.stroke.width.splice(o,1),this._apexOptions.stroke.dashArray.splice(o,1),this._apexOptions.stroke.curve.splice(o,1),this._apexOptions.markers.size.splice(o,1),this._apexOptions.colors.splice(o,1),this._apexOptions.series.splice(o,1),this._options.hasOwnProperty("options")&&CoreUI.chart.utils.isObject(this._options.options)&&this._options.options.debug&&console.log($.extend(!0,{},this._apexOptions)),this._apex.updateOptions($.extend(!0,{},this._apexOptions)))},clearDatasets:function(){this._datasets=[],this._apexOptions.dataLabels.enabledOnSeries=[],this._apexOptions.dataLabels.style.colors=[],this._apexOptions.fill.gradient.opacityFrom=[],this._apexOptions.fill.opacity=[],this._apexOptions.fill.type=[],this._apexOptions.stroke.width=[],this._apexOptions.stroke.dashArray=[],this._apexOptions.stroke.curve=[],this._apexOptions.markers.size=[],this._apexOptions.colors=[],this._apexOptions.series=[],this._apex.updateSeries([])},getDatasets:function(){return $.extend(!0,[],this._datasets)},getDataset:function(s){let o=null;return $.each(this._datasets,function(e,t){if(t.name===s)return o=t,!1}),o},getAnnotations:function(){return Object.values(this._annotations)},getAnnotation:function(e){return this._annotations.hasOwnProperty(e)?this._annotations(e):null},addAnnotation:function(e){if(!CoreUI.chart.utils.isObject(e)||!e.hasOwnProperty("type")||"string"!=typeof e.type||["yLine","xLine","point"].indexOf(e.type)<0)return null;switch("string"!=typeof e.id&&(e.id=CoreUI.chart.utils.hashCode()),e.type){case"yLine":if(!e.hasOwnProperty("y"))return null;this._apex.addYaxisAnnotation(this._getAnnotationsYLine(e));break;case"xLine":if(!e.hasOwnProperty("x"))return null;this._apex.addXaxisAnnotation(this._getAnnotationsXLine(e));break;case"point":if(!e.hasOwnProperty("x")||!e.hasOwnProperty("y"))return null;this._apex.addPointAnnotation(this._getAnnotationsPoint(e))}return(this._annotations[e.id]=e).id},removeAnnotation:function(e){this._annotations.hasOwnProperty(e)&&(this._apex.removeAnnotation(e),delete this._annotations[e])},clearAnnotations:function(){this._annotations={},this._apex.clearAnnotations()},_buildApexOptions:function(){let o=this;this._apexOptions.chart.type="area",this._options.hasOwnProperty("options")&&CoreUI.chart.utils.isObject(this._options.options)&&this._options.options.hasOwnProperty("style")&&CoreUI.chart.utils.isObject(this._options.options.style)&&this._setOptionsStyles(this._options.options.style),this._options.hasOwnProperty("datasets")&&CoreUI.chart.utils.isArray(this._options.datasets)&&($.each(this._options.datasets,function(e,t){var s=o._getDatasetOptions(t);null!==s&&(o._apexOptions=$.extend(!0,{},o._apexOptions,s),o._datasets.push(t))}),this._fixMarkers(this._apexOptions)),this._options.hasOwnProperty("annotations")&&CoreUI.chart.utils.isArray(this._options.annotations)&&$.each(this._options.annotations,function(e,t){if(CoreUI.chart.utils.isObject(t)&&t.hasOwnProperty("type")&&"string"==typeof t.type&&0<=["yLine","xLine","point"].indexOf(t.type)){switch("string"!=typeof t.id&&(t.id=CoreUI.chart.utils.hashCode()),t.type){case"yLine":if(!t.hasOwnProperty("y"))return;o._apexOptions.annotations.yaxis.push(o._getAnnotationsYLine(t));break;case"xLine":if(!t.hasOwnProperty("x"))return;o._apexOptions.annotations.xaxis.push(o._getAnnotationsXLine(t));break;case"point":if(!t.hasOwnProperty("x")||!t.hasOwnProperty("y"))return;o._apexOptions.annotations.points.push(o._getAnnotationsPoint(t))}o._annotations[t.id]=t}})},_setOptionsStyles:function(e){let s=!1;this._options.hasOwnProperty("datasets")&&CoreUI.chart.utils.isArray(this._options.datasets)&&$.each(this._options.datasets,function(e,t){t.hasOwnProperty("type")&&"bar"!==t.type&&(s=!0)}),s||(this._apexOptions.chart.type="bar"),e.hasOwnProperty("markerType")&&"string"==typeof e.markerType&&(this._apexOptions.markers.shape=e.markerType),e.hasOwnProperty("labelTotal")&&!0===e.labelTotal&&(this._apexOptions.plotOptions.bar.dataLabels.total.enabled=!0),e.hasOwnProperty("borderRadius")&&"number"==typeof e.borderRadius&&(e.borderRadius<0?e.borderRadius=0:10<e.borderRadius&&(e.borderRadius=10),this._apexOptions.plotOptions.bar.borderRadius=e.borderRadius),e.hasOwnProperty("stacked")&&!1!==e.stacked&&0<=["string","boolean"].indexOf(typeof e.stacked)&&"bar"===this._apexOptions.chart.type&&(!0===e.stacked?this._apexOptions.chart.stacked=!0:"100%"===e.stacked&&(this._apexOptions.chart.stacked=!0,this._apexOptions.chart.stackType="100%"))},_getDatasetOptions:function(e){if(!CoreUI.chart.utils.isObject(e)||!e.hasOwnProperty("type")||!e.hasOwnProperty("name")||"string"!=typeof e.type||"string"!=typeof e.name||["line","bar","points"].indexOf(e.type)<0)return null;let t=null,s=!1,o="#333",r=0,l=1,n=0,a="solid",i=.4,y="straight",p="area",h={};var c=$.extend(!0,{},this._apexOptions);switch(this._options.hasOwnProperty("options")&&CoreUI.chart.utils.isObject(this._options.options)&&this._options.options.hasOwnProperty("style")&&CoreUI.chart.utils.isObject(this._options.options.style)&&(h=this._options.options.style),e.type){case"line":p="area";break;case"points":p="scatter";break;case"bar":p="column"}return this._colors.hasOwnProperty(this._datasets.length)&&(t=this._colors[this._datasets.length]),h.hasOwnProperty("width")&&"number"==typeof h.width&&(h.width<0?h.width=0:10<h.width&&(h.width=10),l=h.width),h.hasOwnProperty("dash")&&"number"==typeof h.dash&&(h.dash<0?h.dash=0:100<h.dash&&(h.dash=100),n=h.dash),h.hasOwnProperty("markerSize")&&"number"==typeof h.markerSize&&(h.markerSize<0?h.markerSize=0:10<h.markerSize&&(h.markerSize=10),r=h.markerSize),h.hasOwnProperty("theme")&&"string"==typeof h.theme&&(y=h.theme),h.hasOwnProperty("labelColor")&&"string"==typeof h.labelColor&&(o=h.labelColor),h.hasOwnProperty("gradient")&&!0===h.gradient&&(a="gradient"),h.hasOwnProperty("fill")&&"number"==typeof h.fill&&(h.fill<1?h.fill=1:100<h.fill&&(h.fill=100),i=h.fill/100),h.hasOwnProperty("labels")&&!0===h.labels&&(s=!0),e.hasOwnProperty("style")&&CoreUI.chart.utils.isObject(e.style)&&(e.style.hasOwnProperty("color")&&"string"==typeof e.style.color&&(t=e.style.color),e.style.hasOwnProperty("labels")&&!0===e.style.labels&&(s=!0),e.style.hasOwnProperty("labelColor")&&"string"==typeof e.style.labelColor&&(o=e.style.labelColor),e.style.hasOwnProperty("dash")&&"number"==typeof e.style.dash&&(e.style.dash<0?e.style.dash=0:100<e.style.dash&&(e.style.dash=100),n=e.style.dash),e.style.hasOwnProperty("width")&&"number"==typeof e.style.width&&(e.style.width<0?e.style.width=0:10<e.style.width&&(e.style.width=10),l=e.style.width),e.style.hasOwnProperty("markerSize")&&"number"==typeof e.style.markerSize&&(e.style.markerSize<0?e.style.markerSize=0:10<e.style.markerSize&&(e.style.markerSize=10),r=e.style.markerSize),e.style.hasOwnProperty("fill")&&"number"==typeof e.style.fill&&(e.style.fill<1?e.style.fill=1:100<e.style.fill&&(e.style.fill=100),i=e.style.fill/100),e.style.hasOwnProperty("gradient")&&(a=!0===e.style.gradient?"gradient":"solid"),e.style.hasOwnProperty("theme"))&&"string"==typeof e.style.theme&&(y=e.style.theme),s&&(c.dataLabels.enabledOnSeries.push(this._datasets.length),c.dataLabels.enabled=!0),c.dataLabels.style.colors.push(o),c.fill.gradient.opacityFrom.push(i),c.fill.opacity.push(i),c.fill.type.push(a),c.stroke.width.push(l),c.stroke.dashArray.push(n),c.stroke.curve.push(y),c.markers.size.push(r),c.colors.push(t||"#66a61e"),c.series.push({type:p,name:e.name,data:e.data}),c},_fixMarkers:function(s){let o=!1;$.each(s.markers.size,function(e,t){0<t&&(o=!0)}),o&&$.each(s.markers.size,function(e,t){0===t&&(s.markers.size[e]=.1)})},_getAnnotationsYLine:function(t){var s={label:{style:{}}};if(s.y=t.y,t.hasOwnProperty("id")&&(s.id=t.id),t.hasOwnProperty("y2")&&(s.y2=t.y2),t.hasOwnProperty("text")&&"string"==typeof t.text&&(s.label.text=t.text),t.hasOwnProperty("events")&&CoreUI.chart.utils.isObject(t.events)){if(t.events.hasOwnProperty("mouseEnter"))if("function"==typeof t.events.mouseEnter)s.label.mouseEnter=function(){t.events.mouseEnter(t)};else if("string"==typeof t.events.mouseEnter){let e=CoreUI.chart.utils.getFunctionByName(t.events.mouseEnter);"function"==typeof e&&(s.label.mouseEnter=function(){e(t)})}if(t.events.hasOwnProperty("mouseLeave"))if("function"==typeof t.events.mouseLeave)s.label.mouseLeave=function(){t.events.mouseLeave(t)};else if("string"==typeof t.events.mouseLeave){let e=CoreUI.chart.utils.getFunctionByName(t.events.mouseLeave);"function"==typeof e&&(s.label.mouseLeave=function(){e(t)})}if(t.events.hasOwnProperty("click"))if("function"==typeof t.events.click)s.label.click=function(){t.events.click(t)};else if("string"==typeof t.events.click){let e=CoreUI.chart.utils.getFunctionByName(t.events.click);"function"==typeof e&&(s.label.click=function(){e(t)})}}return t.hasOwnProperty("style")&&CoreUI.chart.utils.isObject(t.style)&&(t.style.hasOwnProperty("fillColor")&&"string"==typeof t.style.fillColor&&(s.fillColor=t.style.fillColor),t.style.hasOwnProperty("borderColor")&&"string"==typeof t.style.borderColor&&(s.borderColor=t.style.borderColor),t.style.hasOwnProperty("opacity")&&"number"==typeof t.style.opacity&&(t.style.opacity<0?t.style.opacity=0:10<t.style.opacity&&(t.style.opacity=10),s.opacity=t.style.opacity),t.style.hasOwnProperty("dash")&&"number"==typeof t.style.dash&&(t.style.dash<0?t.style.dash=0:100<t.style.dash&&(t.style.dash=100),s.strokeDashArray=t.style.dash),t.style.hasOwnProperty("label"))&&CoreUI.chart.utils.isObject(t.style.label)&&(t.style.label.hasOwnProperty("color")&&"string"==typeof t.style.label.color&&(s.label.style.color=t.style.label.color),t.style.label.hasOwnProperty("background")&&"string"==typeof t.style.label.background&&(s.label.style.background=t.style.label.background),t.style.label.hasOwnProperty("borderColor")&&"string"==typeof t.style.label.borderColor&&(s.label.borderColor=t.style.label.borderColor),t.style.label.hasOwnProperty("borderWidth")&&"number"==typeof t.style.label.borderWidth&&(t.style.label.borderWidth<0?t.style.label.borderWidth=0:10<t.style.label.borderWidth&&(t.style.label.borderWidth=10),s.label.borderWidth=t.style.label.borderWidth),t.style.label.hasOwnProperty("align")&&"string"==typeof t.style.label.align&&(s.label.position=t.style.label.align),t.style.label.hasOwnProperty("offsetY")&&"number"==typeof t.style.label.offsetY&&(s.label.offsetY=t.style.label.offsetY),t.style.label.hasOwnProperty("offsetX"))&&"number"==typeof t.style.label.offsetX&&(s.label.offsetX=t.style.label.offsetX),s},_getAnnotationsXLine:function(t){var s={label:{style:{}}};if(s.x=t.x,t.hasOwnProperty("id")&&(s.id=t.id),t.hasOwnProperty("x2")&&(s.x2=t.x2),t.hasOwnProperty("text")&&"string"==typeof t.text&&(s.label.text=t.text),t.hasOwnProperty("events")&&CoreUI.chart.utils.isObject(t.events)){if(t.events.hasOwnProperty("mouseEnter"))if("function"==typeof t.events.mouseEnter)s.label.mouseEnter=function(){t.events.mouseEnter(t)};else if("string"==typeof t.events.mouseEnter){let e=CoreUI.chart.utils.getFunctionByName(t.events.mouseEnter);"function"==typeof e&&(s.label.mouseEnter=function(){e(t)})}if(t.events.hasOwnProperty("mouseLeave"))if("function"==typeof t.events.mouseLeave)s.label.mouseLeave=function(){t.events.mouseLeave(t)};else if("string"==typeof t.events.mouseLeave){let e=CoreUI.chart.utils.getFunctionByName(t.events.mouseLeave);"function"==typeof e&&(s.label.mouseLeave=function(){e(t)})}if(t.events.hasOwnProperty("click"))if("function"==typeof t.events.click)s.label.click=function(){t.events.click(t)};else if("string"==typeof t.events.click){let e=CoreUI.chart.utils.getFunctionByName(t.events.click);"function"==typeof e&&(s.label.click=function(){e(t)})}}return t.hasOwnProperty("style")&&CoreUI.chart.utils.isObject(t.style)&&(t.style.hasOwnProperty("fillColor")&&"string"==typeof t.style.fillColor&&(s.fillColor=t.style.fillColor),t.style.hasOwnProperty("borderColor")&&"string"==typeof t.style.borderColor&&(s.borderColor=t.style.borderColor),t.style.hasOwnProperty("opacity")&&"number"==typeof t.style.opacity&&(t.style.opacity<0?t.style.opacity=0:10<t.style.opacity&&(t.style.opacity=10),s.opacity=t.style.opacity),t.style.hasOwnProperty("dash")&&"number"==typeof t.style.dash&&(t.style.dash<0?t.style.dash=0:100<t.style.dash&&(t.style.dash=100),s.strokeDashArray=t.style.dash),t.style.hasOwnProperty("label"))&&CoreUI.chart.utils.isObject(t.style.label)&&(t.style.label.hasOwnProperty("color")&&"string"==typeof t.style.label.color&&(s.label.style.color=t.style.label.color),t.style.label.hasOwnProperty("background")&&"string"==typeof t.style.label.background&&(s.label.style.background=t.style.label.background),t.style.label.hasOwnProperty("borderColor")&&"string"==typeof t.style.label.borderColor&&(s.label.borderColor=t.style.label.borderColor),t.style.label.hasOwnProperty("borderWidth")&&"number"==typeof t.style.label.borderWidth&&(t.style.label.borderWidth<0?t.style.label.borderWidth=0:10<t.style.label.borderWidth&&(t.style.label.borderWidth=10),s.label.borderWidth=t.style.label.borderWidth),t.style.label.hasOwnProperty("align")&&"string"==typeof t.style.label.align&&(s.label.position=t.style.label.align),t.style.label.hasOwnProperty("orientation")&&"string"==typeof t.style.label.orientation&&(s.label.orientation=t.style.label.orientation),t.style.label.hasOwnProperty("offsetY")&&"number"==typeof t.style.label.offsetY&&(s.label.offsetY=t.style.label.offsetY),t.style.label.hasOwnProperty("offsetX"))&&"number"==typeof t.style.label.offsetX&&(s.label.offsetX=t.style.label.offsetX),s},_getAnnotationsPoint:function(t){var s={marker:{},label:{style:{}},image:{}};if(s.x=t.x,s.y=t.y,t.hasOwnProperty("id")&&(s.id=t.id),t.hasOwnProperty("text")&&"string"==typeof t.text&&(s.label.text=t.text),t.hasOwnProperty("events")&&CoreUI.chart.utils.isObject(t.events)){if(t.events.hasOwnProperty("mouseEnter"))if("function"==typeof t.events.mouseEnter)s.mouseEnter=function(){t.events.mouseEnter(t)};else if("string"==typeof t.events.mouseEnter){let e=CoreUI.chart.utils.getFunctionByName(t.events.mouseEnter);"function"==typeof e&&(s.mouseEnter=function(){e(t)})}if(t.events.hasOwnProperty("mouseLeave"))if("function"==typeof t.events.mouseLeave)s.mouseLeave=function(){t.events.mouseLeave(t)};else if("string"==typeof t.events.mouseLeave){let e=CoreUI.chart.utils.getFunctionByName(t.events.mouseLeave);"function"==typeof e&&(s.mouseLeave=function(){e(t)})}if(t.events.hasOwnProperty("click"))if("function"==typeof t.events.click)s.click=function(){t.events.click(t)};else if("string"==typeof t.events.click){let e=CoreUI.chart.utils.getFunctionByName(t.events.click);"function"==typeof e&&(s.click=function(){e(t)})}}return t.hasOwnProperty("style")&&CoreUI.chart.utils.isObject(t.style)&&(t.style.hasOwnProperty("fillColor")&&"string"==typeof t.style.fillColor&&(s.marker.fillColor=t.style.fillColor),t.style.hasOwnProperty("borderColor")&&"string"==typeof t.style.borderColor&&(s.marker.strokeColor=t.style.borderColor),t.style.hasOwnProperty("imagePath")&&"string"==typeof t.style.imagePath&&(s.image.path=t.style.imagePath),t.style.hasOwnProperty("borderWidth")&&"number"==typeof t.style.borderWidth&&(t.style.borderWidth<0?t.style.borderWidth=0:10<t.style.borderWidth&&(t.style.borderWidth=10),s.marker.strokeWidth=t.style.borderWidth),t.style.hasOwnProperty("size")&&"number"==typeof t.style.size&&(t.style.size<0?t.style.size=0:100<t.style.size&&(t.style.size=100),s.marker.size=t.style.size),t.style.hasOwnProperty("label"))&&CoreUI.chart.utils.isObject(t.style.label)&&(t.style.label.hasOwnProperty("color")&&"string"==typeof t.style.label.color&&(s.label.style.color=t.style.label.color),t.style.label.hasOwnProperty("background")&&"string"==typeof t.style.label.background&&(s.label.style.background=t.style.label.background),t.style.label.hasOwnProperty("borderColor")&&"string"==typeof t.style.label.borderColor&&(s.label.borderColor=t.style.label.borderColor),t.style.label.hasOwnProperty("borderWidth")&&"number"==typeof t.style.label.borderWidth&&(t.style.label.borderWidth<0?t.style.label.borderWidth=0:10<t.style.label.borderWidth&&(t.style.label.borderWidth=10),s.label.borderWidth=t.style.label.borderWidth),t.style.label.hasOwnProperty("offsetY")&&"number"==typeof t.style.label.offsetY&&(s.label.offsetY=t.style.label.offsetY),t.style.label.hasOwnProperty("offsetX"))&&"number"==typeof t.style.label.offsetX&&(s.label.offsetX=t.style.label.offsetX),s}};;
CoreUI.chart.type.pie={_options:{},_apexOptions:{},_apex:null,_colors:[],_datasets:[],init:function(t,o,a){this._options=$.extend(!0,{},t),this._apexOptions=$.extend(!0,{},o),this._colors=$.extend(!0,{},a)},render:function(t){this._buildApexOptions(),this._options.hasOwnProperty("options")&&CoreUI.chart.utils.isObject(this._options.options)&&this._options.options.debug&&console.log($.extend(!0,{},this._apexOptions)),this._apex=new CoreUI.chart.apex(t,this._apexOptions),this._apex.render()},_buildApexOptions:function(){let a=this,e="pie",s={},t="solid",o=.9,i=0,l="#fff",p="#f2f2f2";if(this._apexOptions.colors=Object.values(this._colors),this._apexOptions.chart.type="pie",this._options.hasOwnProperty("options")&&CoreUI.chart.utils.isObject(this._options.options)&&this._options.options.hasOwnProperty("style")&&CoreUI.chart.utils.isObject(this._options.options.style)&&(s=this._options.options.style),this._options.hasOwnProperty("datasets")&&CoreUI.chart.utils.isArray(this._options.datasets)&&$.each(this._options.datasets,function(t,o){return CoreUI.chart.utils.isObject(o)&&o.hasOwnProperty("type")&&"string"==typeof o.type&&0<=["pie","donut","radialBar"].indexOf(o.type)?(e=o.type,a._apexOptions.chart.type=o.type,a._apexOptions.series=o.data,!1):void 0}),s.hasOwnProperty("startAngle")&&"number"==typeof s.startAngle&&(s.startAngle<-360?s.startAngle=-360:360<s.startAngle&&(s.startAngle=360),this._apexOptions.plotOptions.pie.startAngle=s.startAngle,this._apexOptions.plotOptions.radialBar.startAngle=s.startAngle),s.hasOwnProperty("endAngle")&&"number"==typeof s.endAngle&&(s.endAngle<-360?s.endAngle=-360:360<s.endAngle&&(s.endAngle=360),this._apexOptions.plotOptions.pie.endAngle=s.endAngle,this._apexOptions.plotOptions.radialBar.endAngle=s.endAngle),s.hasOwnProperty("size")&&"number"==typeof s.size&&(s.size<1?s.size=0:100<s.size&&(s.size=100),this._apexOptions.plotOptions.pie.donut.size=s.size+"%",this._apexOptions.plotOptions.radialBar.hollow.size=s.size+"%"),s.hasOwnProperty("labelColor")&&"string"==typeof s.labelColor&&(l=s.labelColor),s.hasOwnProperty("trackBackground")&&"string"==typeof s.trackBackground&&(p=s.trackBackground),s.hasOwnProperty("gradient")&&!0===s.gradient&&(t="gradient"),s.hasOwnProperty("labels")&&!0===s.labels&&(this._apexOptions.dataLabels.enabled=!0),s.hasOwnProperty("fill")&&"number"==typeof s.fill&&(s.fill<1?s.fill=1:100<s.fill&&(s.fill=100),o=s.fill/100),s.hasOwnProperty("shadowOpacity")&&"number"==typeof s.shadowOpacity&&(s.shadowOpacity<0?s.shadowOpacity=0:1<s.shadowOpacity&&(s.shadowOpacity=1),i=s.shadowOpacity),s.hasOwnProperty("total")&&"object"==typeof s.total&&s.total.hasOwnProperty("label")&&"string"==typeof s.total.label&&""!==s.total.label)if("donut"===e){if(this._apexOptions.plotOptions.pie.donut.labels.show=!0,this._apexOptions.plotOptions.pie.donut.labels.value.show=!0,this._apexOptions.plotOptions.pie.donut.labels.total.show=!0,this._apexOptions.plotOptions.pie.donut.labels.total.showAlways=!0,this._apexOptions.plotOptions.pie.donut.labels.total.label=s.total.label,s.total.hasOwnProperty("color")&&"string"==typeof s.total.color&&(this._apexOptions.plotOptions.pie.donut.labels.total.color=s.total.color,this._apexOptions.plotOptions.pie.donut.labels.value.color=s.total.color),s.total.hasOwnProperty("formatter"))if("function"==typeof s.total.formatter)this._apexOptions.plotOptions.pie.donut.labels.total.formatter=function(t){return s.total.formatter(t.globals.seriesTotals)};else if("string"==typeof s.total.formatter){let o=CoreUI.chart.utils.getFunctionByName(s.total.formatter);"function"==typeof o&&(this._apexOptions.plotOptions.pie.donut.labels.total.formatter=function(t){return o(t.globals.seriesTotals)})}}else if("radialBar"===e&&(this._apexOptions.plotOptions.radialBar.dataLabels.show=!0,this._apexOptions.plotOptions.radialBar.dataLabels.value.show=!0,this._apexOptions.plotOptions.radialBar.dataLabels.total.show=!0,this._apexOptions.plotOptions.radialBar.dataLabels.total.label=s.total.label,s.total.hasOwnProperty("labelSize")&&"string"==typeof s.total.labelSize&&(this._apexOptions.plotOptions.radialBar.dataLabels.total.fontSize=s.total.labelSize),s.total.hasOwnProperty("valueSize")&&"string"==typeof s.total.valueSize&&(this._apexOptions.plotOptions.radialBar.dataLabels.value.fontSize=s.total.valueSize),s.total.hasOwnProperty("offsetY")&&"number"==typeof s.total.offsetY&&(this._apexOptions.plotOptions.radialBar.dataLabels.name.offsetY=s.total.offsetY-10,this._apexOptions.plotOptions.radialBar.dataLabels.value.offsetY=s.total.offsetY),s.total.hasOwnProperty("color")&&"string"==typeof s.total.color&&(this._apexOptions.plotOptions.radialBar.dataLabels.total.color=s.total.color,this._apexOptions.plotOptions.radialBar.dataLabels.value.color=s.total.color),s.total.hasOwnProperty("formatter")))if("function"==typeof s.total.formatter)this._apexOptions.plotOptions.radialBar.dataLabels.total.formatter=function(t){return s.total.formatter(t.globals.seriesTotals)};else if("string"==typeof s.total.formatter){let o=CoreUI.chart.utils.getFunctionByName(s.total.formatter);"function"==typeof o&&(this._apexOptions.plotOptions.radialBar.dataLabels.total.formatter=function(t){return o(t.globals.seriesTotals)})}"radialBar"===e&&(this._apexOptions.plotOptions.radialBar.track.background=p,0<i)&&(this._apexOptions.plotOptions.radialBar.track.dropShadow.enabled=!0,this._apexOptions.plotOptions.radialBar.track.dropShadow.opacity=i),this._apexOptions.fill.type=t,this._apexOptions.fill.gradient.opacityFrom=o,this._apexOptions.fill.gradient.opacityTo=0,this._apexOptions.fill.opacity=o,this._apexOptions.dataLabels.style.colors=[l]}};;
CoreUI.chart.type.polarArea={_options:{},_apexOptions:{},_apex:null,_colors:[],_datasets:[],init:function(t,s,o){this._options=$.extend(!0,{},t),this._apexOptions=$.extend(!0,{},s),this._colors=$.extend(!0,{},o)},render:function(t){this._buildApexOptions(),this._options.hasOwnProperty("options")&&CoreUI.chart.utils.isObject(this._options.options)&&this._options.options.debug&&console.log($.extend(!0,{},this._apexOptions)),this._apex=new CoreUI.chart.apex(t,this._apexOptions),this._apex.render()},_buildApexOptions:function(){let o=this;var t;this._apexOptions.chart.type="polarArea",this._apexOptions.colors=Object.values(this._colors),this._apexOptions.fill.opacity=.7,this._options.hasOwnProperty("options")&&CoreUI.chart.utils.isObject(this._options.options)&&this._options.options.hasOwnProperty("style")&&CoreUI.chart.utils.isObject(this._options.options.style)&&((t=this._options.options.style).hasOwnProperty("fill")&&"number"==typeof t.fill&&(t.fill<1?t.fill=1:100<t.fill&&(t.fill=100),this._apexOptions.fill.opacity=t.fill/100),t.hasOwnProperty("labels")&&!0===t.labels&&(this._apexOptions.dataLabels.enabled=!0),t.hasOwnProperty("labelColor"))&&"string"==typeof t.labelColor&&this._apexOptions.dataLabels.style.colors.push(t.labelColor),this._options.hasOwnProperty("datasets")&&CoreUI.chart.utils.isArray(this._options.datasets)&&$.each(this._options.datasets,function(t,s){return CoreUI.chart.utils.isObject(s)&&s.hasOwnProperty("type")&&"string"==typeof s.type&&0<=["polarArea"].indexOf(s.type)?(o._apexOptions.chart.type=s.type,o._apexOptions.series=s.data,!1):void 0})}};;
CoreUI.chart.type.radar={_options:{},_apexOptions:{},_apex:null,_colors:[],_datasets:[],init:function(t,e,s){this._options=$.extend(!0,{},t),this._apexOptions=$.extend(!0,{},e),this._colors=$.extend(!0,{},s)},render:function(t){this._buildApexOptions(),this._options.hasOwnProperty("options")&&CoreUI.chart.utils.isObject(this._options.options)&&this._options.options.debug&&console.log($.extend(!0,{},this._apexOptions)),this._apex=new CoreUI.chart.apex(t,this._apexOptions),this._apex.render()},_buildApexOptions:function(){let n=this,p={};if(this._apexOptions.chart.type="radar",this._apexOptions.tooltip.intersect=!0,this._apexOptions.tooltip.shared=!1,this._apexOptions.grid.show=!1,this._apexOptions.xaxis.crosshairs.show=!1,this._options.hasOwnProperty("options")&&CoreUI.chart.utils.isObject(this._options.options)&&this._options.options.hasOwnProperty("style")&&CoreUI.chart.utils.isObject(this._options.options.style)&&(p=this._options.options.style),this._options.hasOwnProperty("datasets")&&CoreUI.chart.utils.isArray(this._options.datasets)){let l=0;$.each(this._options.datasets,function(t,r){if(CoreUI.chart.utils.isObject(r)&&r.hasOwnProperty("type")&&"string"==typeof r.type&&r.hasOwnProperty("name")&&"string"==typeof r.name&&0<=["radar"].indexOf(r.type)){let t=null,e=4,s=0,a="#333",o=!1,i=.4;n._colors.hasOwnProperty(l)&&(t=n._colors[l]),p.hasOwnProperty("markerSize")&&"number"==typeof p.markerSize&&(p.markerSize<0?p.markerSize=0:10<p.markerSize&&(p.markerSize=10),e=p.markerSize),p.hasOwnProperty("fill")&&"number"==typeof p.fill&&(p.fill<1?p.fill=1:100<p.fill&&(p.fill=100),i=p.fill/100),p.hasOwnProperty("dash")&&"number"==typeof p.dash&&(p.dash<0?p.dash=0:100<p.dash&&(p.dash=100),s=p.dash),r.hasOwnProperty("style")&&CoreUI.chart.utils.isObject(r.style)&&(r.style.hasOwnProperty("color")&&"string"==typeof r.style.color&&(t=r.style.color),r.style.hasOwnProperty("labelColor")&&"string"==typeof r.style.labelColor&&(a=r.style.labelColor),r.style.hasOwnProperty("labels")&&!0===r.style.labels&&(o=!0),r.style.hasOwnProperty("markerSize")&&"number"==typeof r.style.markerSize&&(r.style.markerSize<0?r.style.markerSize=0:10<r.style.markerSize&&(r.style.markerSize=10),e=r.style.markerSize),r.style.hasOwnProperty("dash")&&"number"==typeof r.style.dash&&(r.style.dash<0?r.style.dash=0:100<r.style.dash&&(r.style.dash=100),s=r.style.dash),r.style.hasOwnProperty("fill"))&&"number"==typeof r.style.fill&&(r.style.fill<1?r.style.fill=1:100<r.style.fill&&(r.style.fill=100),i=r.style.fill/100),o&&n._apexOptions.dataLabels.hasOwnProperty("enabled")&&(n._apexOptions.dataLabels.enabledOnSeries.push(l),n._apexOptions.dataLabels.enabled=!0),n._apexOptions.dataLabels.style.colors.push(a),n._apexOptions.fill.opacity.push(i),n._apexOptions.stroke.dashArray.push(s),n._apexOptions.markers.size.push(e),n._apexOptions.colors.push(t||"#66a61e"),n._apexOptions.series.push({name:r.name,data:r.data}),l++}})}this._apexOptions.dataLabels.hasOwnProperty("enabled")&&this._apexOptions.dataLabels.enabled||(this._apexOptions.dataLabels.enabledOnSeries=void 0)},getDatasets:function(){return this.datasets},getAnnotations:function(){return{}}};;
CoreUI.chart.type.rangeArea={_options:{},_apexOptions:{},_apex:null,_colors:[],_datasets:[],init:function(e,t,s){this._options=$.extend(!0,{},e),this._apexOptions=$.extend(!0,{},t),this._colors=$.extend(!0,{},s)},render:function(e){this._buildApexOptions(),this._options.hasOwnProperty("options")&&CoreUI.chart.utils.isObject(this._options.options)&&this._options.options.debug&&console.log($.extend(!0,{},this._apexOptions)),this._apex=new CoreUI.chart.apex(e,this._apexOptions),this._apex.render()},_buildApexOptions:function(){let _=this,f={};if(this._apexOptions.chart.type="rangeArea",this._options.hasOwnProperty("options")&&CoreUI.chart.utils.isObject(this._options.options)&&this._options.options.hasOwnProperty("style")&&CoreUI.chart.utils.isObject(this._options.options.style)&&(f=this._options.options.style).hasOwnProperty("markerType")&&"string"==typeof f.markerType&&(this._apexOptions.markers.shape=f.markerType),this._options.hasOwnProperty("datasets")&&CoreUI.chart.utils.isArray(this._options.datasets)){let O=0,s=($.each(this._options.datasets,function(e,y){if(CoreUI.chart.utils.isObject(y)&&y.hasOwnProperty("type")&&y.hasOwnProperty("name")&&"string"==typeof y.type&&"string"==typeof y.name&&0<=["line","rangeArea"].indexOf(y.type)){let e=null,s=[],t=!1,r="#333",i=0,o=1,a=0,p="solid",l=.4;let n="straight";var d="rangeArea"===y.type?"":y.type;_._colors.hasOwnProperty(O)&&(e=_._colors[O]),f.hasOwnProperty("width")&&"number"==typeof f.width&&(f.width<0?f.width=0:10<f.width&&(f.width=10),o=f.width),f.hasOwnProperty("dash")&&"number"==typeof f.dash&&(f.dash<0?f.dash=0:100<f.dash&&(f.dash=100),a=f.dash),f.hasOwnProperty("markerSize")&&"number"==typeof f.markerSize&&(f.markerSize<0?f.markerSize=0:10<f.markerSize&&(f.markerSize=10),i=f.markerSize),f.hasOwnProperty("theme")&&"string"==typeof f.theme&&(n=f.theme),f.hasOwnProperty("gradient")&&!0===f.gradient&&(p="gradient"),f.hasOwnProperty("fill")&&"number"==typeof f.fill&&(f.fill<0?f.fill=0:100<f.fill&&(f.fill=100),l=f.fill/100),f.hasOwnProperty("labels")&&!0===f.labels&&(t=!0),y.hasOwnProperty("style")&&CoreUI.chart.utils.isObject(y.style)&&(y.style.hasOwnProperty("color")&&"string"==typeof y.style.color&&(e=y.style.color),y.style.hasOwnProperty("labels")&&!0===y.style.labels&&(t=!0),y.style.hasOwnProperty("labelColor")&&"string"==typeof y.style.labelColor&&(r=y.style.labelColor),y.style.hasOwnProperty("dash")&&"number"==typeof y.style.dash&&(y.style.dash<0?y.style.dash=0:100<y.style.dash&&(y.style.dash=100),a=y.style.dash),y.style.hasOwnProperty("width")&&"number"==typeof y.style.width&&(y.style.width<0?y.style.width=0:10<y.style.width&&(y.style.width=10),o=y.style.width),y.style.hasOwnProperty("markerSize")&&"number"==typeof y.style.markerSize&&(y.style.markerSize<0?y.style.markerSize=0:10<y.style.markerSize&&(y.style.markerSize=10),i=y.style.markerSize),y.style.hasOwnProperty("fill")&&"number"==typeof y.style.fill&&(y.style.fill<1?y.style.fill=1:100<y.style.fill&&(y.style.fill=100),l=y.style.fill/100),y.style.hasOwnProperty("gradient")&&(p=!0===y.style.gradient?"gradient":"solid"),y.style.hasOwnProperty("theme"))&&"string"==typeof y.style.theme&&(n=y.style.theme);let h=0;$.each(y.data,function(e,t){if(CoreUI.chart.utils.isArray(t)||0<=["number","string"].indexOf(typeof t)){let e=h+1;_._options.hasOwnProperty("labels")&&CoreUI.chart.utils.isArray(_._options.labels)&&_._options.labels.hasOwnProperty(h)&&(e=_._options.labels[h]),s.push({x:e,y:t}),h++}});y={name:y.name,data:s};d&&(y.type=d),t&&(_._apexOptions.dataLabels.enabledOnSeries.push(O),_._apexOptions.dataLabels.enabled=!0),_._apexOptions.dataLabels.style.colors.push(r),_._apexOptions.plotOptions.bar.borderRadius=0,_._apexOptions.fill.gradient.opacityFrom.push(l),_._apexOptions.fill.opacity.push(l),_._apexOptions.fill.type.push(p),_._apexOptions.stroke.width.push(o),_._apexOptions.stroke.dashArray.push(a),_._apexOptions.stroke.curve.push(n),_._apexOptions.markers.size.push(i),_._apexOptions.colors.push(e||"#66a61e"),_._apexOptions.series.push(y),O++}}),!1);$.each(this._apexOptions.markers.size,function(e,t){0<t&&(s=!0)}),s&&$.each(this._apexOptions.markers.size,function(e,t){0===t&&(_._apexOptions.markers.size[e]=.1)})}}};;
CoreUI.chart.type.rangeBar={_options:{},_apexOptions:{},_apex:null,_colors:[],_datasets:[],init:function(t,s,e){this._options=$.extend(!0,{},t),this._apexOptions=$.extend(!0,{},s),this._colors=$.extend(!0,{},e)},render:function(t){this._buildApexOptions(),this._options.hasOwnProperty("options")&&CoreUI.chart.utils.isObject(this._options.options)&&this._options.options.debug&&console.log($.extend(!0,{},this._apexOptions)),this._apex=new CoreUI.chart.apex(t,this._apexOptions),this._apex.render()},_buildApexOptions:function(){let y=this,d={};if(this._apexOptions.chart.type="rangeBar",this._apexOptions.tooltip.intersect=!1,this._apexOptions.tooltip.shared=!1,this._apexOptions.plotOptions.bar.horizontal=!1,this._options.hasOwnProperty("options")&&CoreUI.chart.utils.isObject(this._options.options)&&this._options.options.hasOwnProperty("style")&&CoreUI.chart.utils.isObject(this._options.options.style)&&((d=this._options.options.style).hasOwnProperty("horizontal")&&!0===d.horizontal&&(this._apexOptions.plotOptions.bar.horizontal=!0),d.hasOwnProperty("borderRadius")&&"number"==typeof d.borderRadius&&(d.borderRadius<0?d.borderRadius=0:10<d.borderRadius&&(d.borderRadius=10),this._apexOptions.plotOptions.bar.borderRadius=d.borderRadius),d.hasOwnProperty("size"))&&"number"==typeof d.size&&(d.size<1?d.size=1:100<d.size&&(d.size=100),this._apexOptions.plotOptions.bar.barHeight=d.size+"%",this._apexOptions.plotOptions.bar.columnWidth=d.size+"%"),this._options.hasOwnProperty("datasets")&&CoreUI.chart.utils.isArray(this._options.datasets)){let h=0,e=($.each(this._options.datasets,function(t,n){if(CoreUI.chart.utils.isObject(n)&&n.hasOwnProperty("type")&&n.hasOwnProperty("name")&&"string"==typeof n.type&&"string"==typeof n.name&&0<=["bar"].indexOf(n.type)){let t=null,e=[],s=!1,o="#333",i=1,a=0,r="solid",p=.4,l=(y._colors.hasOwnProperty(h)&&(t=y._colors[h]),d.hasOwnProperty("width")&&"number"==typeof d.width&&(d.width<0?d.width=0:10<d.width&&(d.width=10),i=d.width),d.hasOwnProperty("dash")&&"number"==typeof d.dash&&(d.dash<0?d.dash=0:100<d.dash&&(d.dash=100),a=d.dash),d.hasOwnProperty("gradient")&&!0===d.gradient&&(r="gradient"),d.hasOwnProperty("fill")&&"number"==typeof d.fill&&(d.fill<0?d.fill=0:100<d.fill&&(d.fill=100),p=d.fill/100),d.hasOwnProperty("labels")&&!0===d.labels&&(s=!0),n.hasOwnProperty("style")&&CoreUI.chart.utils.isObject(n.style)&&(n.style.hasOwnProperty("color")&&"string"==typeof n.style.color&&(t=n.style.color),n.style.hasOwnProperty("labels")&&"boolean"==typeof n.style.labels&&(s=n.style.labels),n.style.hasOwnProperty("labelColor")&&"string"==typeof n.style.labelColor&&(o=n.style.labelColor),n.style.hasOwnProperty("dash")&&"number"==typeof n.style.dash&&(n.style.dash<0?n.style.dash=0:100<n.style.dash&&(n.style.dash=100),a=n.style.dash),n.style.hasOwnProperty("width")&&"number"==typeof n.style.width&&(n.style.width<0?n.style.width=0:10<n.style.width&&(n.style.width=10),i=n.style.width),n.style.hasOwnProperty("fill")&&"number"==typeof n.style.fill&&(n.style.fill<1?n.style.fill=1:100<n.style.fill&&(n.style.fill=100),p=n.style.fill/100),n.style.hasOwnProperty("gradient"))&&(r=!0===n.style.gradient?"gradient":"solid"),0);$.each(n.data,function(t,s){if(CoreUI.chart.utils.isArray(s)){let t=l+1;y._options.hasOwnProperty("labels")&&CoreUI.chart.utils.isArray(y._options.labels)&&y._options.labels.hasOwnProperty(l)&&(t=y._options.labels[l]),e.push({x:t,y:s}),l++}}),s&&(y._apexOptions.dataLabels.enabledOnSeries.push(h),y._apexOptions.dataLabels.enabled=!0),y._apexOptions.dataLabels.style.colors.push(o),y._apexOptions.fill.gradient.opacityFrom.push(p),y._apexOptions.fill.opacity.push(p),y._apexOptions.fill.type.push(r),y._apexOptions.stroke.width.push(i),y._apexOptions.stroke.dashArray.push(a),y._apexOptions.colors.push(t||"#66a61e"),y._apexOptions.series.push({name:n.name,data:e}),h++}}),!1);$.each(this._apexOptions.markers.size,function(t,s){0<s&&(e=!0)}),e&&$.each(this._apexOptions.markers.size,function(t,s){0===s&&(y._apexOptions.markers.size[t]=.1)})}}};;
CoreUI.chart.lang.en={loading:"Loading",months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],toolbar:{exportToSVG:"Download SVG",exportToPNG:"Download PNG",exportToCSV:"Download CSV",menu:"Menu",selection:"Selection",selectionZoom:"Selection Zoom",zoomIn:"Zoom In",zoomOut:"Zoom Out",pan:"Panning",reset:"Reset Zoom"}};;
CoreUI.chart.lang.ru={loading:"Загрузка",months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],shortMonths:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],shortDays:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],toolbar:{exportToSVG:"Сохранить SVG",exportToPNG:"Сохранить PNG",exportToCSV:"Сохранить CSV",menu:"Меню",selection:"Выбор",selectionZoom:"Выбор с увеличением",zoomIn:"Увеличить",zoomOut:"Уменьшить",pan:"Перемещение",reset:"Сбросить увеличение"}};
//# sourceMappingURL=coreui-chart.min.js.map
;
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Core = factory());
}(this, (function () { 'use strict';

function e(e){this.message=e;}e.prototype=new Error,e.prototype.name="InvalidCharacterError";var r="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(r){var t=String(r).replace(/=+$/,"");if(t.length%4==1)throw new e("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,o,a=0,i=0,c="";o=t.charAt(i++);~o&&(n=a%4?64*n+o:o,a++%4)?c+=String.fromCharCode(255&n>>(-2*a&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return c};function t(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(t)}catch(e){return r(t)}}function n(e){this.message=e;}function o(e,r){if("string"!=typeof e)throw new n("Invalid token specified");var o=!0===(r=r||{}).header?0:1;try{return JSON.parse(t(e.split(".")[o]))}catch(e){throw new n("Invalid token specified: "+e.message)}}n.prototype=new Error,n.prototype.name="InvalidTokenError";

/**
 * FingerprintJS v3.3.3 - Copyright (c) FingerprintJS, Inc, 2022 (https://fingerprintjs.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 *
 * This software contains code from open-source projects:
 * MurmurHash3 by Karan Lyons (https://github.com/karanlyons/murmurHash3.js)
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).FingerprintJS={});}(window,(function(e){"use strict";var t=function(){return(t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function n(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{u(r.next(e));}catch(t){o(t);}}function c(e){try{u(r.throw(e));}catch(t){o(t);}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t);}))).then(i,c);}u((r=r.apply(e,t||[])).next());}))}function r(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i);}catch(c){o=[6,c],r=0;}finally{n=a=0;}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}function a(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var o=arguments[t],i=0,c=o.length;i<c;i++,a++)r[a]=o[i];return r}function o(e,t){return new Promise((function(n){return setTimeout(n,e,t)}))}function i(e,t){try{var n=e();(r=n)&&"function"==typeof r.then?n.then((function(e){return t(!0,e)}),(function(e){return t(!1,e)})):t(!0,n);}catch(a){t(!1,a);}var r;}function c(e,t,a){return void 0===a&&(a=16),n(this,void 0,void 0,(function(){var n,i,c;return r(this,(function(r){switch(r.label){case 0:n=Date.now(),i=0,r.label=1;case 1:return i<e.length?(t(e[i],i),(c=Date.now())>=n+a?(n=c,[4,o(0)]):[3,3]):[3,4];case 2:r.sent(),r.label=3;case 3:return++i,[3,1];case 4:return[2]}}))}))}function u(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]+t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]+t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]+t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]+t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]}function s(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]*t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]*t[3],n[1]+=n[2]>>>16,n[2]&=65535,n[2]+=e[3]*t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]*t[3],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[2]*t[2],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[3]*t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]}function l(e,t){return 32===(t%=64)?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])}function d(e,t){return 0===(t%=64)?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]}function f(e,t){return[e[0]^t[0],e[1]^t[1]]}function h(e){return e=f(e,[0,e[0]>>>1]),e=f(e=s(e,[4283543511,3981806797]),[0,e[0]>>>1]),e=f(e=s(e,[3301882366,444984403]),[0,e[0]>>>1])}function v(e,t){t=t||0;var n,r=(e=e||"").length%16,a=e.length-r,o=[0,t],i=[0,t],c=[0,0],v=[0,0],p=[2277735313,289559509],m=[1291169091,658871167];for(n=0;n<a;n+=16)c=[255&e.charCodeAt(n+4)|(255&e.charCodeAt(n+5))<<8|(255&e.charCodeAt(n+6))<<16|(255&e.charCodeAt(n+7))<<24,255&e.charCodeAt(n)|(255&e.charCodeAt(n+1))<<8|(255&e.charCodeAt(n+2))<<16|(255&e.charCodeAt(n+3))<<24],v=[255&e.charCodeAt(n+12)|(255&e.charCodeAt(n+13))<<8|(255&e.charCodeAt(n+14))<<16|(255&e.charCodeAt(n+15))<<24,255&e.charCodeAt(n+8)|(255&e.charCodeAt(n+9))<<8|(255&e.charCodeAt(n+10))<<16|(255&e.charCodeAt(n+11))<<24],c=l(c=s(c,p),31),o=u(o=l(o=f(o,c=s(c,m)),27),i),o=u(s(o,[0,5]),[0,1390208809]),v=l(v=s(v,m),33),i=u(i=l(i=f(i,v=s(v,p)),31),o),i=u(s(i,[0,5]),[0,944331445]);switch(c=[0,0],v=[0,0],r){case 15:v=f(v,d([0,e.charCodeAt(n+14)],48));case 14:v=f(v,d([0,e.charCodeAt(n+13)],40));case 13:v=f(v,d([0,e.charCodeAt(n+12)],32));case 12:v=f(v,d([0,e.charCodeAt(n+11)],24));case 11:v=f(v,d([0,e.charCodeAt(n+10)],16));case 10:v=f(v,d([0,e.charCodeAt(n+9)],8));case 9:v=s(v=f(v,[0,e.charCodeAt(n+8)]),m),i=f(i,v=s(v=l(v,33),p));case 8:c=f(c,d([0,e.charCodeAt(n+7)],56));case 7:c=f(c,d([0,e.charCodeAt(n+6)],48));case 6:c=f(c,d([0,e.charCodeAt(n+5)],40));case 5:c=f(c,d([0,e.charCodeAt(n+4)],32));case 4:c=f(c,d([0,e.charCodeAt(n+3)],24));case 3:c=f(c,d([0,e.charCodeAt(n+2)],16));case 2:c=f(c,d([0,e.charCodeAt(n+1)],8));case 1:c=s(c=f(c,[0,e.charCodeAt(n)]),p),o=f(o,c=s(c=l(c,31),m));}return o=u(o=f(o,[0,e.length]),i=f(i,[0,e.length])),i=u(i,o),o=u(o=h(o),i=h(i)),i=u(i,o),("00000000"+(o[0]>>>0).toString(16)).slice(-8)+("00000000"+(o[1]>>>0).toString(16)).slice(-8)+("00000000"+(i[0]>>>0).toString(16)).slice(-8)+("00000000"+(i[1]>>>0).toString(16)).slice(-8)}function p(e){return parseInt(e)}function m(e){return parseFloat(e)}function g(e,t){return"number"==typeof e&&isNaN(e)?t:e}function b(e){return e.reduce((function(e,t){return e+(t?1:0)}),0)}function w(e,t){if(void 0===t&&(t=1),Math.abs(t)>=1)return Math.round(e/t)*t;var n=1/t;return Math.round(e*n)/n}function y(e){return e&&"object"==typeof e&&"message"in e?e:{message:e}}function k(e,t,a){var u=Object.keys(e).filter((function(e){return!function(e,t){for(var n=0,r=e.length;n<r;++n)if(e[n]===t)return!0;return!1}(a,e)})),s=Array(u.length);return c(u,(function(n,r){s[r]=function(e,t){var n=function(e){return"function"!=typeof e},r=new Promise((function(r){var a=Date.now();i(e.bind(null,t),(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o=Date.now()-a;if(!e[0])return r((function(){return{error:y(e[1]),duration:o}}));var c=e[1];if(n(c))return r((function(){return{value:c,duration:o}}));r((function(){return new Promise((function(e){var t=Date.now();i(c,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var a=o+Date.now()-t;if(!n[0])return e({error:y(n[1]),duration:a});e({value:n[1],duration:a});}));}))}));}));}));return function(){return r.then((function(e){return e()}))}}(e[n],t);})),function(){return n(this,void 0,void 0,(function(){var e,t,n,a,i,l;return r(this,(function(d){switch(d.label){case 0:for(e={},t=0,n=u;t<n.length;t++)a=n[t],e[a]=void 0;i=Array(u.length),l=function(){var t;return r(this,(function(n){switch(n.label){case 0:return t=!0,[4,c(u,(function(n,r){i[r]||(s[r]?i[r]=s[r]().then((function(t){return e[n]=t})):t=!1);}))];case 1:return n.sent(),t?[2,"break"]:[4,o(1)];case 2:return n.sent(),[2]}}))},d.label=1;case 1:return[5,l()];case 2:if("break"===d.sent())return[3,4];d.label=3;case 3:return[3,1];case 4:return[4,Promise.all(i)];case 5:return d.sent(),[2,e]}}))}))}}function C(){var e=window,t=navigator;return b(["MSCSSMatrix"in e,"msSetImmediate"in e,"msIndexedDB"in e,"msMaxTouchPoints"in t,"msPointerEnabled"in t])>=4}function A(){var e=window,t=navigator;return b(["msWriteProfilerMark"in e,"MSStream"in e,"msLaunchUri"in t,"msSaveBlob"in t])>=3&&!C()}function S(){var e=window,t=navigator;return b(["webkitPersistentStorage"in t,"webkitTemporaryStorage"in t,0===t.vendor.indexOf("Google"),"webkitResolveLocalFileSystemURL"in e,"BatteryManager"in e,"webkitMediaStream"in e,"webkitSpeechGrammar"in e])>=5}function x(){var e=window,t=navigator;return b(["ApplePayError"in e,"CSSPrimitiveValue"in e,"Counter"in e,0===t.vendor.indexOf("Apple"),"getStorageUpdates"in t,"WebKitMediaKeys"in e])>=4}function M(){var e=window;return b(["safari"in e,!("DeviceMotionEvent"in e),!("ongestureend"in e),!("standalone"in navigator)])>=3}function P(){var e,t,n=window;return b(["buildID"in navigator,"MozAppearance"in(null!==(t=null===(e=document.documentElement)||void 0===e?void 0:e.style)&&void 0!==t?t:{}),"onmozfullscreenchange"in n,"mozInnerScreenX"in n,"CSSMozDocumentRule"in n,"CanvasCaptureMediaStream"in n])>=4}function _(){var e=document;return e.fullscreenElement||e.msFullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement||null}function T(){var e=S(),t=P();if(!e&&!t)return!1;var n=window;return b(["onorientationchange"in n,"orientation"in n,e&&!("SharedWorker"in n),t&&/android/i.test(navigator.appVersion)])>=2}function E(e){var t=new Error(e);return t.name=e,t}function D(e,t,a){var i,c,u;return void 0===a&&(a=50),n(this,void 0,void 0,(function(){var n,s;return r(this,(function(r){switch(r.label){case 0:n=document,r.label=1;case 1:return n.body?[3,3]:[4,o(a)];case 2:return r.sent(),[3,1];case 3:s=n.createElement("iframe"),r.label=4;case 4:return r.trys.push([4,,10,11]),[4,new Promise((function(e,r){var a=!1,o=function(){a=!0,e();};s.onload=o,s.onerror=function(e){a=!0,r(e);};var i=s.style;i.setProperty("display","block","important"),i.position="absolute",i.top="0",i.left="0",i.visibility="hidden",t&&"srcdoc"in s?s.srcdoc=t:s.src="about:blank",n.body.appendChild(s);var c=function(){var e,t;a||("complete"===(null===(t=null===(e=s.contentWindow)||void 0===e?void 0:e.document)||void 0===t?void 0:t.readyState)?o():setTimeout(c,10));};c();}))];case 5:r.sent(),r.label=6;case 6:return(null===(c=null===(i=s.contentWindow)||void 0===i?void 0:i.document)||void 0===c?void 0:c.body)?[3,8]:[4,o(a)];case 7:return r.sent(),[3,6];case 8:return[4,e(s,s.contentWindow)];case 9:return[2,r.sent()];case 10:return null===(u=s.parentNode)||void 0===u||u.removeChild(s),[7];case 11:return[2]}}))}))}function L(e){for(var t=function(e){for(var t,n,r="Unexpected syntax '"+e+"'",a=/^\s*([a-z-]*)(.*)$/i.exec(e),o=a[1]||void 0,i={},c=/([.:#][\w-]+|\[.+?\])/gi,u=function(e,t){i[e]=i[e]||[],i[e].push(t);};;){var s=c.exec(a[2]);if(!s)break;var l=s[0];switch(l[0]){case".":u("class",l.slice(1));break;case"#":u("id",l.slice(1));break;case"[":var d=/^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(l);if(!d)throw new Error(r);u(d[1],null!==(n=null!==(t=d[4])&&void 0!==t?t:d[5])&&void 0!==n?n:"");break;default:throw new Error(r)}}return[o,i]}(e),n=t[0],r=t[1],a=document.createElement(null!=n?n:"div"),o=0,i=Object.keys(r);o<i.length;o++){var c=i[o],u=r[c].join(" ");"style"===c?z(a.style,u):a.setAttribute(c,u);}return a}function z(e,t){for(var n=0,r=t.split(";");n<r.length;n++){var a=r[n],o=/^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(a);if(o){var i=o[1],c=o[2],u=o[4];e.setProperty(i,c,u||"");}}}var I=["monospace","sans-serif","serif"],B=["sans-serif-thin","ARNO PRO","Agency FB","Arabic Typesetting","Arial Unicode MS","AvantGarde Bk BT","BankGothic Md BT","Batang","Bitstream Vera Sans Mono","Calibri","Century","Century Gothic","Clarendon","EUROSTILE","Franklin Gothic","Futura Bk BT","Futura Md BT","GOTHAM","Gill Sans","HELV","Haettenschweiler","Helvetica Neue","Humanst521 BT","Leelawadee","Letter Gothic","Levenim MT","Lucida Bright","Lucida Sans","Menlo","MS Mincho","MS Outlook","MS Reference Specialty","MS UI Gothic","MT Extra","MYRIAD PRO","Marlett","Meiryo UI","Microsoft Uighur","Minion Pro","Monotype Corsiva","PMingLiU","Pristina","SCRIPTINA","Segoe UI Light","Serifa","SimHei","Small Fonts","Staccato222 BT","TRAJAN PRO","Univers CE 55 Medium","Vrinda","ZWAdobeF"];function F(e){return e.rect(0,0,10,10),e.rect(2,2,6,6),!e.isPointInPath(5,5,"evenodd")}function O(e,t){e.width=240,e.height=60,t.textBaseline="alphabetic",t.fillStyle="#f60",t.fillRect(100,1,62,20),t.fillStyle="#069",t.font='11pt "Times New Roman"';var n="Cwm fjordbank gly "+String.fromCharCode(55357,56835);return t.fillText(n,2,15),t.fillStyle="rgba(102, 204, 0, 0.2)",t.font="18pt Arial",t.fillText(n,4,45),G(e)}function R(e,t){e.width=122,e.height=110,t.globalCompositeOperation="multiply";for(var n=0,r=[["#f2f",40,40],["#2ff",80,40],["#ff2",60,80]];n<r.length;n++){var a=r[n],o=a[0],i=a[1],c=a[2];t.fillStyle=o,t.beginPath(),t.arc(i,c,40,0,2*Math.PI,!0),t.closePath(),t.fill();}return t.fillStyle="#f9c",t.arc(60,60,60,0,2*Math.PI,!0),t.arc(60,60,20,0,2*Math.PI,!0),t.fill("evenodd"),G(e)}function G(e){return e.toDataURL()}var j,U;function W(){var e=this;return function(){if(void 0===U){var e=function(){var t=N();q(t)?U=setTimeout(e,2500):(j=t,U=void 0);};e();}}(),function(){return n(e,void 0,void 0,(function(){var e;return r(this,(function(t){switch(t.label){case 0:return q(e=N())?j?[2,a(j)]:_()?[4,(n=document,(n.exitFullscreen||n.msExitFullscreen||n.mozCancelFullScreen||n.webkitExitFullscreen).call(n))]:[3,2]:[3,2];case 1:t.sent(),e=N(),t.label=2;case 2:return q(e)||(j=e),[2,e]}var n;}))}))}}function N(){var e=screen;return[g(m(e.availTop),null),g(m(e.width)-m(e.availWidth)-g(m(e.availLeft),0),null),g(m(e.height)-m(e.availHeight)-g(m(e.availTop),0),null),g(m(e.availLeft),null)]}function q(e){for(var t=0;t<4;++t)if(e[t])return!1;return!0}var H={abpIndo:["#Iklan-Melayang","#Kolom-Iklan-728","#SidebarIklan-wrapper",'a[title="7naga poker" i]','[title="ALIENBOLA" i]'],abpvn:["#quangcaomb",".iosAdsiosAds-layout",".quangcao",'[href^="https://r88.vn/"]','[href^="https://zbet.vn/"]'],adBlockFinland:[".mainostila",".sponsorit",".ylamainos",'a[href*="/clickthrgh.asp?"]','a[href^="https://app.readpeak.com/ads"]'],adBlockPersian:["#navbar_notice_50",'a[href^="http://g1.v.fwmrm.net/ad/"]',".kadr",'TABLE[width="140px"]',"#divAgahi"],adBlockWarningRemoval:["#adblock-honeypot",".adblocker-root",".wp_adblock_detect"],adGuardAnnoyances:['amp-embed[type="zen"]',".hs-sosyal","#cookieconsentdiv",'div[class^="app_gdpr"]',".as-oil"],adGuardBase:["#ad-after","#ad-p3",".BetterJsPopOverlay","#ad_300X250","#bannerfloat22"],adGuardChinese:['a[href*=".ttz5.cn"]','a[href*=".yabovip2027.com/"]',".tm3all2h4b",".cc5278_banner_ad"],adGuardFrench:[".zonepub",'[class*="_adLeaderboard"]','[id^="block-xiti_oas-"]','a[href^="http://ptapjmp.com/"]','a[href^="https://go.alvexo.com/"]'],adGuardGerman:[".banneritemwerbung_head_1",".boxstartwerbung",".werbung3",'a[href^="http://www.eis.de/index.phtml?refid="]','a[href^="https://www.tipico.com/?affiliateId="]'],adGuardJapanese:["#kauli_yad_1","#ad-giftext","#adsSPRBlock",'a[href^="http://ad2.trafficgate.net/"]','a[href^="http://www.rssad.jp/"]'],adGuardMobile:["amp-auto-ads","#mgid_iframe",".amp_ad",'amp-embed[type="24smi"]',"#mgid_iframe1"],adGuardRussian:['a[href^="https://ya-distrib.ru/r/"]','a[href^="https://ad.letmeads.com/"]',".reclama",'div[id^="smi2adblock"]','div[id^="AdFox_banner_"]'],adGuardSocial:['a[href^="//www.stumbleupon.com/submit?url="]','a[href^="//telegram.me/share/url?"]',".etsy-tweet","#inlineShare",".popup-social"],adGuardSpanishPortuguese:["#barraPublicidade","#Publicidade","#publiEspecial","#queTooltip",'[href^="http://ads.glispa.com/"]'],adGuardTrackingProtection:['amp-embed[type="taboola"]',"#qoo-counter",'a[href^="http://click.hotlog.ru/"]','a[href^="http://hitcounter.ru/top/stat.php"]','a[href^="http://top.mail.ru/jump"]'],adGuardTurkish:["#backkapat","#reklami",'a[href^="http://adserv.ontek.com.tr/"]','a[href^="http://izlenzi.com/campaign/"]','a[href^="http://www.installads.net/"]'],bulgarian:["td#freenet_table_ads","#adbody","#ea_intext_div",".lapni-pop-over","#xenium_hot_offers"],easyList:["#AD_banner_bottom","#Ads_google_02","#N-ad-article-rightRail-1","#ad-fullbanner2","#ad-zone-2"],easyListChina:['a[href*=".wensixuetang.com/"]','A[href*="/hth107.com/"]','.appguide-wrap[onclick*="bcebos.com"]',".frontpageAdvM","#taotaole"],easyListCookie:["#adtoniq-msg-bar","#CoockiesPage","#CookieModal_cookiemodal","#DO_CC_PANEL","#ShowCookie"],easyListCzechSlovak:["#onlajny-stickers","#reklamni-box",".reklama-megaboard",".sklik",'[id^="sklikReklama"]'],easyListDutch:["#advertentie","#vipAdmarktBannerBlock",".adstekst",'a[href^="https://xltube.nl/click/"]',"#semilo-lrectangle"],easyListGermany:['a[href^="http://www.hw-area.com/?dp="]','a[href^="https://ads.sunmaker.com/tracking.php?"]',".werbung-skyscraper2",".bannergroup_werbung",".ads_rechts"],easyListItaly:[".box_adv_annunci",".sb-box-pubbliredazionale",'a[href^="http://affiliazioniads.snai.it/"]','a[href^="https://adserver.html.it/"]','a[href^="https://affiliazioniads.snai.it/"]'],easyListLithuania:[".reklamos_tarpas",".reklamos_nuorodos",'img[alt="Reklaminis skydelis"]','img[alt="Dedikuoti.lt serveriai"]','img[alt="Hostingas Serveriai.lt"]'],estonian:['A[href*="http://pay4results24.eu"]'],fanboyAnnoyances:["#feedback-tab","#taboola-below-article",".feedburnerFeedBlock",".widget-feedburner-counter",'[title="Subscribe to our blog"]'],fanboyAntiFacebook:[".util-bar-module-firefly-visible"],fanboyEnhancedTrackers:[".open.pushModal","#issuem-leaky-paywall-articles-zero-remaining-nag","#sovrn_container",'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',".BlockNag__Card"],fanboySocial:[".td-tags-and-social-wrapper-box",".twitterContainer",".youtube-social",'a[title^="Like us on Facebook"]','img[alt^="Share on Digg"]'],frellwitSwedish:['a[href*="casinopro.se"][target="_blank"]','a[href*="doktor-se.onelink.me"]',"article.category-samarbete","div.holidAds","ul.adsmodern"],greekAdBlock:['A[href*="adman.otenet.gr/click?"]','A[href*="http://axiabanners.exodus.gr/"]','A[href*="http://interactive.forthnet.gr/click?"]',"DIV.agores300","TABLE.advright"],hungarian:['A[href*="ad.eval.hu"]','A[href*="ad.netmedia.hu"]','A[href*="daserver.ultraweb.hu"]',"#cemp_doboz",".optimonk-iframe-container"],iDontCareAboutCookies:['.alert-info[data-block-track*="CookieNotice"]',".ModuleTemplateCookieIndicator",".o--cookies--container",".cookie-msg-info-container","#cookies-policy-sticky"],icelandicAbp:['A[href^="/framework/resources/forms/ads.aspx"]'],latvian:['a[href="http://www.salidzini.lv/"][style="display: block; width: 120px; height: 40px; overflow: hidden; position: relative;"]','a[href="http://www.salidzini.lv/"][style="display: block; width: 88px; height: 31px; overflow: hidden; position: relative;"]'],listKr:['a[href*="//kingtoon.slnk.kr"]','a[href*="//playdsb.com/kr"]',"div.logly-lift-adz",'div[data-widget_id="ml6EJ074"]',"ins.daum_ddn_area"],listeAr:[".geminiLB1Ad",".right-and-left-sponsers",'a[href*=".aflam.info"]','a[href*="booraq.org"]','a[href*="dubizzle.com/ar/?utm_source="]'],listeFr:['a[href^="http://promo.vador.com/"]',"#adcontainer_recherche",'a[href*="weborama.fr/fcgi-bin/"]',".site-pub-interstitiel",'div[id^="crt-"][data-criteo-id]'],officialPolish:["#ceneo-placeholder-ceneo-12",'[href^="https://aff.sendhub.pl/"]','a[href^="http://advmanager.techfun.pl/redirect/"]','a[href^="http://www.trizer.pl/?utm_source"]',"div#skapiec_ad"],ro:['a[href^="//afftrk.altex.ro/Counter/Click"]','a[href^="/magazin/"]','a[href^="https://blackfridaysales.ro/trk/shop/"]','a[href^="https://event.2performant.com/events/click"]','a[href^="https://l.profitshare.ro/"]'],ruAd:['a[href*="//febrare.ru/"]','a[href*="//utimg.ru/"]','a[href*="://chikidiki.ru"]',"#pgeldiz",".yandex-rtb-block"],thaiAds:["a[href*=macau-uta-popup]","#ads-google-middle_rectangle-group",".ads300s",".bumq",".img-kosana"],webAnnoyancesUltralist:["#mod-social-share-2","#social-tools",".ctpl-fullbanner",".zergnet-recommend",".yt.btn-link.btn-md.btn"]};function J(e){var t;return n(this,void 0,void 0,(function(){var n,a,i,c,u,s,l;return r(this,(function(r){switch(r.label){case 0:for(n=document,a=n.createElement("div"),i=new Array(e.length),c={},$(a),l=0;l<e.length;++l)u=L(e[l]),$(s=n.createElement("div")),s.appendChild(u),a.appendChild(s),i[l]=u;r.label=1;case 1:return n.body?[3,3]:[4,o(50)];case 2:return r.sent(),[3,1];case 3:n.body.appendChild(a);try{for(l=0;l<e.length;++l)i[l].offsetParent||(c[e[l]]=!0);}finally{null===(t=a.parentNode)||void 0===t||t.removeChild(a);}return[2,c]}}))}))}function $(e){e.style.setProperty("display","block","important");}function V(e){return matchMedia("(inverted-colors: "+e+")").matches}function K(e){return matchMedia("(forced-colors: "+e+")").matches}function X(e){return matchMedia("(prefers-contrast: "+e+")").matches}function Y(e){return matchMedia("(prefers-reduced-motion: "+e+")").matches}function Z(e){return matchMedia("(dynamic-range: "+e+")").matches}var Q=Math,ee=function(){return 0};var te={default:[],apple:[{font:"-apple-system-body"}],serif:[{fontFamily:"serif"}],sans:[{fontFamily:"sans-serif"}],mono:[{fontFamily:"monospace"}],min:[{fontSize:"1px"}],system:[{fontFamily:"system-ui"}]};var ne={fonts:function(){return D((function(e,t){var n=t.document,r=n.body;r.style.fontSize="48px";var a=n.createElement("div"),o={},i={},c=function(e){var t=n.createElement("span"),r=t.style;return r.position="absolute",r.top="0",r.left="0",r.fontFamily=e,t.textContent="mmMwWLliI0O&1",a.appendChild(t),t},u=I.map(c),s=function(){for(var e={},t=function(t){e[t]=I.map((function(e){return function(e,t){return c("'"+e+"',"+t)}(t,e)}));},n=0,r=B;n<r.length;n++){t(r[n]);}return e}();r.appendChild(a);for(var l=0;l<I.length;l++)o[I[l]]=u[l].offsetWidth,i[I[l]]=u[l].offsetHeight;return B.filter((function(e){return t=s[e],I.some((function(e,n){return t[n].offsetWidth!==o[e]||t[n].offsetHeight!==i[e]}));var t;}))}))},domBlockers:function(e){var t=(void 0===e?{}:e).debug;return n(this,void 0,void 0,(function(){var e,n,a,o;return r(this,(function(r){switch(r.label){case 0:return x()||T()?(e=Object.keys(H),[4,J((o=[]).concat.apply(o,e.map((function(e){return H[e]}))))]):[2,void 0];case 1:return n=r.sent(),t&&function(e){for(var t="DOM blockers debug:\n```",n=0,r=Object.keys(H);n<r.length;n++){var a=r[n];t+="\n"+a+":";for(var o=0,i=H[a];o<i.length;o++){var c=i[o];t+="\n  "+c+" "+(e[c]?"🚫":"➡️");}}console.log(t+"\n```");}(n),(a=e.filter((function(e){var t=H[e];return b(t.map((function(e){return n[e]})))>.6*t.length}))).sort(),[2,a]}}))}))},fontPreferences:function(){return function(e,t){void 0===t&&(t=4e3);return D((function(n,r){var o=r.document,i=o.body,c=i.style;c.width=t+"px",c.webkitTextSizeAdjust=c.textSizeAdjust="none",S()?i.style.zoom=""+1/r.devicePixelRatio:x()&&(i.style.zoom="reset");var u=o.createElement("div");return u.textContent=a(Array(t/20<<0)).map((function(){return"word"})).join(" "),i.appendChild(u),e(o,i)}),'<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')}((function(e,t){for(var n={},r={},a=0,o=Object.keys(te);a<o.length;a++){var i=o[a],c=te[i],u=c[0],s=void 0===u?{}:u,l=c[1],d=void 0===l?"mmMwWLliI0fiflO&1":l,f=e.createElement("span");f.textContent=d,f.style.whiteSpace="nowrap";for(var h=0,v=Object.keys(s);h<v.length;h++){var p=v[h],m=s[p];void 0!==m&&(f.style[p]=m);}n[i]=f,t.appendChild(e.createElement("br")),t.appendChild(f);}for(var g=0,b=Object.keys(te);g<b.length;g++){r[i=b[g]]=n[i].getBoundingClientRect().width;}return r}))},audio:function(){var e=window,t=e.OfflineAudioContext||e.webkitOfflineAudioContext;if(!t)return-2;if(x()&&!M()&&!function(){var e=window;return b(["DOMRectList"in e,"RTCPeerConnectionIceEvent"in e,"SVGGeometryElement"in e,"ontransitioncancel"in e])>=3}())return-1;var n=new t(1,5e3,44100),r=n.createOscillator();r.type="triangle",r.frequency.value=1e4;var a=n.createDynamicsCompressor();a.threshold.value=-50,a.knee.value=40,a.ratio.value=12,a.attack.value=0,a.release.value=.25,r.connect(a),a.connect(n.destination),r.start(0);var o=function(e){var t=3,n=500,r=500,a=5e3,o=function(){};return[new Promise((function(i,c){var u=!1,s=0,l=0;e.oncomplete=function(e){return i(e.renderedBuffer)};var d=function(){setTimeout((function(){return c(E("timeout"))}),Math.min(r,l+a-Date.now()));},f=function(){try{switch(e.startRendering(),e.state){case"running":l=Date.now(),u&&d();break;case"suspended":document.hidden||s++,u&&s>=t?c(E("suspended")):setTimeout(f,n);}}catch(r){c(r);}};f(),o=function(){u||(u=!0,l>0&&d());};})),o]}(n),i=o[0],c=o[1],u=i.then((function(e){return function(e){for(var t=0,n=0;n<e.length;++n)t+=Math.abs(e[n]);return t}(e.getChannelData(0).subarray(4500))}),(function(e){if("timeout"===e.name||"suspended"===e.name)return-3;throw e}));return u.catch((function(){})),function(){return c(),u}},screenFrame:function(){var e=this,t=W();return function(){return n(e,void 0,void 0,(function(){var e,n;return r(this,(function(r){switch(r.label){case 0:return[4,t()];case 1:return e=r.sent(),[2,[(n=function(e){return null===e?null:w(e,10)})(e[0]),n(e[1]),n(e[2]),n(e[3])]]}}))}))}},osCpu:function(){return navigator.oscpu},languages:function(){var e,t=navigator,n=[],r=t.language||t.userLanguage||t.browserLanguage||t.systemLanguage;if(void 0!==r&&n.push([r]),Array.isArray(t.languages))S()&&b([!("MediaSettingsRange"in(e=window)),"RTCEncodedAudioFrame"in e,""+e.Intl=="[object Intl]",""+e.Reflect=="[object Reflect]"])>=3||n.push(t.languages);else if("string"==typeof t.languages){var a=t.languages;a&&n.push(a.split(","));}return n},colorDepth:function(){return window.screen.colorDepth},deviceMemory:function(){return g(m(navigator.deviceMemory),void 0)},screenResolution:function(){var e=screen,t=function(e){return g(p(e),null)},n=[t(e.width),t(e.height)];return n.sort().reverse(),n},hardwareConcurrency:function(){return g(p(navigator.hardwareConcurrency),void 0)},timezone:function(){var e,t=null===(e=window.Intl)||void 0===e?void 0:e.DateTimeFormat;if(t){var n=(new t).resolvedOptions().timeZone;if(n)return n}var r,a=(r=(new Date).getFullYear(),-Math.max(m(new Date(r,0,1).getTimezoneOffset()),m(new Date(r,6,1).getTimezoneOffset())));return"UTC"+(a>=0?"+":"")+Math.abs(a)},sessionStorage:function(){try{return!!window.sessionStorage}catch(e){return!0}},localStorage:function(){try{return!!window.localStorage}catch(e){return!0}},indexedDB:function(){if(!C()&&!A())try{return!!window.indexedDB}catch(e){return!0}},openDatabase:function(){return!!window.openDatabase},cpuClass:function(){return navigator.cpuClass},platform:function(){var e=navigator.platform;return"MacIntel"===e&&x()&&!M()?function(){if("iPad"===navigator.platform)return!0;var e=screen,t=e.width/e.height;return b(["MediaSource"in window,!!Element.prototype.webkitRequestFullscreen,t>.65&&t<1.53])>=2}()?"iPad":"iPhone":e},plugins:function(){var e=navigator.plugins;if(e){for(var t=[],n=0;n<e.length;++n){var r=e[n];if(r){for(var a=[],o=0;o<r.length;++o){var i=r[o];a.push({type:i.type,suffixes:i.suffixes});}t.push({name:r.name,description:r.description,mimeTypes:a});}}return t}},canvas:function(){var e=function(){var e=document.createElement("canvas");return e.width=1,e.height=1,[e,e.getContext("2d")]}(),t=e[0],n=e[1];return function(e,t){return!(!t||!e.toDataURL)}(t,n)?{winding:F(n),geometry:R(t,n),text:O(t,n)}:{winding:!1,geometry:"",text:""}},touchSupport:function(){var e,t=navigator,n=0;void 0!==t.maxTouchPoints?n=p(t.maxTouchPoints):void 0!==t.msMaxTouchPoints&&(n=t.msMaxTouchPoints);try{document.createEvent("TouchEvent"),e=!0;}catch(r){e=!1;}return{maxTouchPoints:n,touchEvent:e,touchStart:"ontouchstart"in window}},vendor:function(){return navigator.vendor||""},vendorFlavors:function(){for(var e=[],t=0,n=["chrome","safari","__crWeb","__gCrWeb","yandex","__yb","__ybro","__firefox__","__edgeTrackingPreventionStatistics","webkit","oprt","samsungAr","ucweb","UCShellJava","puffinDevice"];t<n.length;t++){var r=n[t],a=window[r];a&&"object"==typeof a&&e.push(r);}return e.sort()},cookiesEnabled:function(){var e=document;try{e.cookie="cookietest=1; SameSite=Strict;";var t=-1!==e.cookie.indexOf("cookietest=");return e.cookie="cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT",t}catch(n){return!1}},colorGamut:function(){for(var e=0,t=["rec2020","p3","srgb"];e<t.length;e++){var n=t[e];if(matchMedia("(color-gamut: "+n+")").matches)return n}},invertedColors:function(){return!!V("inverted")||!V("none")&&void 0},forcedColors:function(){return!!K("active")||!K("none")&&void 0},monochrome:function(){if(matchMedia("(min-monochrome: 0)").matches){for(var e=0;e<=100;++e)if(matchMedia("(max-monochrome: "+e+")").matches)return e;throw new Error("Too high value")}},contrast:function(){return X("no-preference")?0:X("high")||X("more")?1:X("low")||X("less")?-1:X("forced")?10:void 0},reducedMotion:function(){return!!Y("reduce")||!Y("no-preference")&&void 0},hdr:function(){return!!Z("high")||!Z("standard")&&void 0},math:function(){var e,t=Q.acos||ee,n=Q.acosh||ee,r=Q.asin||ee,a=Q.asinh||ee,o=Q.atanh||ee,i=Q.atan||ee,c=Q.sin||ee,u=Q.sinh||ee,s=Q.cos||ee,l=Q.cosh||ee,d=Q.tan||ee,f=Q.tanh||ee,h=Q.exp||ee,v=Q.expm1||ee,p=Q.log1p||ee;return{acos:t(.12312423423423424),acosh:n(1e308),acoshPf:(e=1e154,Q.log(e+Q.sqrt(e*e-1))),asin:r(.12312423423423424),asinh:a(1),asinhPf:function(e){return Q.log(e+Q.sqrt(e*e+1))}(1),atanh:o(.5),atanhPf:function(e){return Q.log((1+e)/(1-e))/2}(.5),atan:i(.5),sin:c(-1e300),sinh:u(1),sinhPf:function(e){return Q.exp(e)-1/Q.exp(e)/2}(1),cos:s(10.000000000123),cosh:l(1),coshPf:function(e){return(Q.exp(e)+1/Q.exp(e))/2}(1),tan:d(-1e300),tanh:f(1),tanhPf:function(e){return(Q.exp(2*e)-1)/(Q.exp(2*e)+1)}(1),exp:h(1),expm1:v(1),expm1Pf:function(e){return Q.exp(e)-1}(1),log1p:p(10),log1pPf:function(e){return Q.log(1+e)}(10),powPI:function(e){return Q.pow(Q.PI,e)}(-100)}}};function re(e){var t=function(e){if(T())return.4;if(x())return M()?.5:.3;var t=e.platform.value||"";if(/^Win/.test(t))return.6;if(/^Mac/.test(t))return.5;return.7}(e),n=function(e){return w(.99+.01*e,1e-4)}(t);return{score:t,comment:"$ if upgrade to Pro: https://fpjs.dev/pro".replace(/\$/g,""+n)}}function ae(e){return JSON.stringify(e,(function(e,n){return n instanceof Error?t({name:(r=n).name,message:r.message,stack:null===(a=r.stack)||void 0===a?void 0:a.split("\n")},r):n;var r,a;}),2)}function oe(e){return v(function(e){for(var t="",n=0,r=Object.keys(e).sort();n<r.length;n++){var a=r[n],o=e[a],i=o.error?"error":JSON.stringify(o.value);t+=(t?"|":"")+a.replace(/([:|\\])/g,"\\$1")+":"+i;}return t}(e))}function ie(e){return void 0===e&&(e=50),function(e,t){void 0===t&&(t=1/0);var n=window.requestIdleCallback;return n?new Promise((function(e){return n.call(window,(function(){return e()}),{timeout:t})})):o(Math.min(e,t))}(e,2*e)}function ce(e,t){var a=Date.now();return{get:function(o){return n(this,void 0,void 0,(function(){var n,i,c;return r(this,(function(r){switch(r.label){case 0:return n=Date.now(),[4,e()];case 1:return i=r.sent(),c=function(e){var t;return{get visitorId(){return void 0===t&&(t=oe(this.components)),t},set visitorId(e){t=e;},confidence:re(e),components:e,version:"3.3.3"}}(i),(t||(null==o?void 0:o.debug))&&console.log("Copy the text below to get the debug data:\n\n```\nversion: "+c.version+"\nuserAgent: "+navigator.userAgent+"\ntimeBetweenLoadAndGet: "+(n-a)+"\nvisitorId: "+c.visitorId+"\ncomponents: "+ae(i)+"\n```"),[2,c]}}))}))}}}function ue(e){var t=void 0===e?{}:e,a=t.delayFallback,o=t.debug;t.monitoring;return n(this,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return[4,ie(a)];case 1:return e.sent(),[2,ce(k(ne,{debug:o},[]),o)]}}))}))}var se={load:ue,hashComponents:oe,componentsToDebugString:ae},le=v;e.componentsToDebugString=ae,e.default=se,e.getFullscreenElement=_,e.getScreenFrame=W,e.hashComponents=oe,e.isAndroid=T,e.isChromium=S,e.isDesktopSafari=M,e.isEdgeHTML=A,e.isGecko=P,e.isTrident=C,e.isWebKit=x,e.load=ue,e.loadSources=k,e.murmurX64Hash128=le,e.prepareForSources=ie,e.sources=ne,Object.defineProperty(e,"__esModule",{value:!0});}));

let coreTools = {

    /**
     * Получение паравметров из хэша
     * @param url
     * @returns {{module: string, action: string, params: string}}
     */
    getParams: function (url) {

        if (typeof url === 'undefined') {
            url = '/mod' + location.hash.substring(1);
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
     *
     */
    toggleFullscreen: function () {

        if ( ! document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    },


    /**
     * Форматирование числа
     * @param   {number|string} numb
     * @returns {string}
     * @private
     */
    formatNumber: function(numb) {
        numb = numb.toString();
        return numb.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    },


    /**
     * Форматирование числа
     * @param   {number|string} numb
     * @param   {string}       divider
     * @returns {string}
     * @private
     */
    formatMoney: function(numb, divider) {

        if (isNaN(numb)) {
            return this.formatNumber(numb);

        } else {
            divider = divider || ' ';
            numb = Number(numb).toFixed(2).toString();
            return numb.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1' + divider);
        }
    },


    /**
     * Копирование
     * @param text
     * @returns {Promise<unknown>|Promise<void>}
     */
    clipboardText: function (text) {

        /**
         * Старый вариант копирования
         * @param text
         */
        function fallbackCopyTextToClipboard(text) {

            return new Promise(function (resolve, reject) {
                let textArea = document.createElement("textarea");
                textArea.value = text;

                // Avoid scrolling to bottom
                textArea.style.top = "0";
                textArea.style.left = "0";
                textArea.style.position = "fixed";

                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();

                try {
                    let successful = document.execCommand('copy');

                    document.body.removeChild(textArea);

                    if (successful) {
                        resolve();
                    } else {
                        reject();
                    }

                } catch (err) {
                    document.body.removeChild(textArea);
                    reject();
                }
            });
        }


        /**
         * @param text
         * @returns {Promise<void>|Promise<unknown>}
         */
        function copyTextToClipboard(text) {

            if ( ! navigator.clipboard) {
                return fallbackCopyTextToClipboard(text);
            }

            return navigator.clipboard.writeText(text);
        }

        return copyTextToClipboard(text);
    },


    /**
     * @returns {number}
     * @private
     */
    hashCode: function() {

        let string = 'A' + new Date().getTime();

        for (var h = 0, i = 0; i < string.length; h &= h) {
            h = 31 * h + string.charCodeAt(i++);
        }

        return Math.abs(h);
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
        return o(token);
    }
};

let coreTokens = {

    _refreshInterval: 0,

    /**
     *
     */
    initRefresh() {

        this.deinitRefresh();

        this._refreshInterval = setInterval(this.refreshToken, 300000); // 5 минут
    },


    /**
     * s
     */
    deinitRefresh() {

        if (this._refreshInterval) {
            clearInterval(this._refreshInterval);
        }
    },


    /**
     * @param success
     * @param fail
     * @returns {Promise<void>}
     */
    refreshToken: async function (success, fail) {

        let refreshToken = coreTokens.getRefreshToken();
        let tokenData    = coreTools.jwtDecode(refreshToken);

        if (new Date(tokenData.exp * 1000) <= new Date()) {
            coreTokens.clearRefreshToken();

            if (typeof fail === 'function') {
                fail();
            }

            return;
        }


        $.ajax({
            url: coreMain.options.basePath + "/auth/refresh",
            method: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                refresh_token: refreshToken,
                fp: await coreTools.getFingerprint()
            })
        })
            .done(function (response) {
                if (typeof response.access_token !== 'string' ||
                    typeof response.refresh_token !== 'string' ||
                    ! response.access_token ||
                    ! response.refresh_token
                ) {
                    let errorMessage = response.error_message || "Ошибка. Попробуйте позже, либо обратитесь к администратору";
                    CoreUI.notice.danger(errorMessage);

                    if (typeof fail === 'function') {
                        fail();
                    }

                } else {
                    coreTokens.setAccessToken(response.access_token);
                    coreTokens.setRefreshToken(response.refresh_token);

                    if (typeof success === 'function') {
                        success();
                    }
                }
            })

            .fail(function (response) {
                let errorMessage = '';

                if (response.responseJSON && response.responseJSON.error_message) {
                    errorMessage = response.responseJSON.error_message;
                } else {
                    errorMessage = $("<div>" + response.responseText + "</div>").text();
                }

                errorMessage = errorMessage || 'Ошибка. Попробуйте позже, либо обратитесь к администратору';

                CoreUI.notice.danger(errorMessage);

                if (typeof fail === 'function') {
                    fail();
                }
            });
    },


    /**
     * Получение аутентификации
     * @param accessToken
     * @returns {boolean}
     */
    setAccessToken(accessToken) {

        localStorage.setItem('core3_access_token', accessToken);

        let tokenData   = coreTools.jwtDecode(coreTokens.getAccessToken());
        let dateExpired = new Date(tokenData.exp * 1000);

        if (dateExpired > new Date()) {
            let expires = "; expires=" + dateExpired.toUTCString();

            document.cookie = "Core-Access-Token=" + accessToken + expires + "; path=/core";
        }
    },


    /**
     * Получение аутентификации
     * @param refreshToken
     * @returns {boolean}
     */
    setRefreshToken(refreshToken) {

        localStorage.setItem('core3_refresh_token', refreshToken);
    },


    /**
     * Получение аутентификации
     * @returns {String|boolean}
     */
    getAccessToken() {

        let authToken = localStorage.getItem('core3_access_token');

        if ( ! authToken) {
            coreTokens.clearAccessToken();
            authToken = false;
        }

        return authToken;
    },


    /**
     * Получение аутентификации
     * @returns {String|boolean}
     */
    getRefreshToken() {

        let refreshToken = localStorage.getItem('core3_refresh_token');

        if ( ! refreshToken) {
            coreTokens.clearRefreshToken();
            refreshToken = false;
        }

        return refreshToken;
    },


    /**
     * Очистка аутентификации
     */
    clearAccessToken() {

        localStorage.removeItem('core3_access_token');

        document.cookie = 'Core-Access-Token=; Path=/core; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    },



    /**
     * Очистка аутентификации
     */
    clearRefreshToken() {
        localStorage.removeItem('core3_refresh_token');
    }
};

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

            coreMain.activePage = pageName;

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
};


$(function () {
    // Событие установки
    coreMain.install.promise = new Promise(function (resolve, reject) {

        window.addEventListener('beforeinstallprompt', event => {
            event.preventDefault();
            coreMain.install.event = event;
            resolve(event);
        });
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

let coreTpl = Object.create(null);
coreTpl['auth/main.html'] = '<div class="container container-login" style="display: none">\n    <div class="mdc-card">\n        <div class="mdc-card__content">\n            <img src="" alt="logo" class="logo" style="display: none">\n\n            <form class="mb-5" novalidate>\n                <span class="text-danger"></span>\n                <div class="form-controls mb-5">\n                    <div class="mb-3 text-start">\n                        <label class="form-label" for="auth-login">Логин или Email</label>\n                        <div class="control-icon position-relative">\n                            <input type="text" name="login" class="form-control" id="auth-login" required>\n                            <i class="bi bi-person-fill"></i>\n                        </div>\n                    </div>\n                    <div class="mb-5 text-start">\n                        <label class="form-label" for="auth-password">Пароль</label>\n                        <div class="control-icon position-relative">\n                            <input type="password" name="password" class="form-control" id="auth-password" required>\n                            <i class="bi bi-shield-lock"></i>\n                        </div>\n                    </div>\n\n                    <button class="btn btn-primary w-100 py-2" type="submit">Войти</button>\n                </div>\n            </form>\n\n            <div class="links-container">\n                <a class="install-button" style="display: none">Установить</a>\n                <a href="#/registration" class="reg-button">Регистрация</a>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="container container-registration" style="display: none">\n    <div class="mdc-card">\n        <div class="mdc-card__content">\n            <img src="" alt="logo" class="logo" style="display: none">\n\n            <p class="mdc-typography--headline5">Регистрация</p>\n            <div class="text-danger mdc-typography--subtitle2"></div>\n            <div class="text-success mdc-typography--subtitle2"></div>\n\n            <form class="mb-5" novalidate>\n                <div class="form-controls mb-5">\n                    <div class="mb-3 text-start">\n                        <label class="form-label" for="registration-name">Имя</label>\n                        <input type="text" name="name" class="form-control" id="registration-name" required>\n                    </div>\n\n                    <div class="mb-3 text-start">\n                        <label class="form-label" for="registration-email">Email</label>\n                        <input type="email" name="email" class="form-control" id="registration-email" required>\n                    </div>\n\n                    <div class="mb-3 text-start">\n                        <label class="form-label" for="registration-pass">Пароль</label>\n                        <input type="password" name="password" class="form-control" id="registration-pass" required>\n                    </div>\n\n                    <div class="mb-5 text-start">\n                        <label class="form-label" for="registration-pass2">Пароль еще раз</label>\n                        <input type="password" class="form-control" id="registration-pass2" required>\n                    </div>\n\n                    <button class="btn btn-primary w-100 py-2" type="submit">Зарегистрироваться</button>\n                </div>\n            </form>\n\n            <div class="links-container">\n                <a class="install-button" style="display: none">Установить</a>\n                <a href="#" class="login-button">Войти</a>\n            </div>\n        </div>\n    </div>\n</div>';
coreTpl['menu/loader.html'] = '<div id="loader">\n    <div role="progressbar" class="mdc-linear-progress loader-progress"\n         aria-label="Example Progress Bar" aria-valuemin="0" aria-valuemax="1" aria-valuenow="0">\n        <div class="mdc-linear-progress__buffer">\n            <div class="mdc-linear-progress__buffer-bar"></div>\n            <div class="mdc-linear-progress__buffer-dots"></div>\n        </div>\n        <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">\n            <span class="mdc-linear-progress__bar-inner"></span>\n        </div>\n        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">\n            <span class="mdc-linear-progress__bar-inner"></span>\n        </div>\n    </div>\n    <div class="loader-block"></div>\n</div>';
coreTpl['menu/main.html'] = '<header class="mdc-top-app-bar mdc-top-app-bar--fixed app-bar">\n    <div class="mdc-top-app-bar__row">\n        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">\n            <button class="mdc-ripple-surface open-menu"><i class="fa-solid fa-bars"></i></button>\n            <div class="header-title-container">\n                <span class="mdc-top-app-bar__title"></span>\n                <span class="mdc-top-app-bar__subtitle"></span>\n            </div>\n        </section>\n        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar"></section>\n    </div>\n</header>\n<aside class="menu-drawer">\n    <div class="menu-drawer__content">\n        <div class="menu-drawer__header">\n            <a class="module-home" href="#/">\n                <span class="fa-solid fa-house"></span>\n                <h3 class="system-title"></h3>\n            </a>\n        </div>\n        <ul class="menu-list level-1"></ul>\n    </div>\n</aside>\n<div class="menu-drawer-scrim"></div>\n<div class="menu-drawer-swipe"></div>\n<div class="menu-drawer-app">\n    <main class="main-content">\n        <div class="main-wrapper"></div>\n    </main>\n</div>';
coreTpl['menu/module.html'] = '<li class="menu-list-item core-module core-module-<%= module.name %>\n       <% if (module.sections && module.sections.length > 0) { %>menu-item-nested<% } %>">\n    <div class="item-control">\n        <a href="#/<%= module.name %>/<%= module.index %>" class="mdc-ripple-surface"\n           data-module="<%= module.name %>" data-section="<%= module.index %>">\n            <% if (module.icon) { %>\n            <i class="<%= module.icon %>"></i>\n            <% } else { %>\n            <span class="module-icon-letter"><%= module.title.trim().substring(0, 1) %></span>\n            <% } %>\n            <span class="menu-list-item__text"><%= module.title %></span>\n        </a>\n        <% if (module.sections && module.sections.length > 0) { %>\n        <button class="menu-icon-button mdc-ripple-surface"><i class="fa-solid fa-sort-down"></i></button>\n        <% } %>\n    </div>\n    <ul class="menu-list level-2">\n        <li class="menu-list-item core-module-section-index">\n            <a href="#/<%= module.name %>/<%= module.index %>" class="mdc-ripple-surface"\n               data-module="<%= module.name %>" data-section="<%= module.index %>">\n                <%= module.title %>\n            </a>\n        </li>\n        <% if (module.sections && module.sections.length > 0) { %>\n        <% module.sections.forEach(function(section) { %>\n        <li class="menu-list-item core-module-section core-module-<%= module.name %>-<%= section.name %>">\n            <a href="#/<%= module.name %>/<%= section.name %>" class="mdc-ripple-surface"\n               data-module="<%= module.name %>" data-section="<%= section.name %>">\n                <span class="menu-list-item__text"><%= section.title %></span>\n            </a>\n        </li>\n        <% }); %>\n        <% } %>\n    </ul>\n</li>';
coreTpl['menu/navbar.html'] = '<ul class="navbar-nav">\n    <li class="nav-item dropdown cabinet-user">\n        <button class="btn btn-link text-dark dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown">\n            <% if (user.avatar) { %>\n            <img src="<%= user.avatar %>" alt="avatar" class="rounded-circle" loading="lazy"/>\n            <% } else { %>\n            <i class="fa-solid fa-circle-user"></i>\n            <% } %>\n        </button>\n        <ul class="dropdown-menu shadow">\n            <li class="cabinet-user-info">\n                <b class="cabinet-user-name"><%= user.name %></b><br>\n                <span class="cabinet-user-login"><%= user.login %></span>\n            </li>\n            <li>\n                <hr class="dropdown-divider"/>\n            </li>\n            <li>\n                <a class="dropdown-item menu-logout" href="#">\n                    <i class="fa-solid fa-arrow-right-from-bracket"></i> Выйти\n                </a>\n            </li>\n        </ul>\n    </li>\n</ul>';
coreTpl['menu/preloader.html'] = '<div id="preloader">\n    <div class="loading-lock"></div>\n    <div class="loading-block">\n        <div class="mdc-circular-progress" style="width:96px;height:48px;" role="progressbar"\n             aria-label="Example Progress Bar" aria-valuemin="0" aria-valuemax="1">\n            <div class="mdc-circular-progress__determinate-container">\n                <svg class="mdc-circular-progress__determinate-circle-graphic" viewBox="0 0 48 48"\n                     xmlns="http://www.w3.org/2000/svg">\n                    <circle class="mdc-circular-progress__determinate-track" cx="24" cy="24" r="18" stroke-width="4"/>\n                    <circle class="mdc-circular-progress__determinate-circle" cx="24" cy="24" r="18"\n                            stroke-dasharray="113.097" stroke-dashoffset="113.097" stroke-width="4"/>\n                </svg>\n            </div>\n            <div class="mdc-circular-progress__indeterminate-container">\n                <div class="mdc-circular-progress__spinner-layer">\n                    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">\n                        <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48"\n                             xmlns="http://www.w3.org/2000/svg">\n                            <circle cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="56.549"\n                                    stroke-width="4"/>\n                        </svg>\n                    </div>\n                    <div class="mdc-circular-progress__gap-patch">\n                        <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48"\n                             xmlns="http://www.w3.org/2000/svg">\n                            <circle cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="56.549"\n                                    stroke-width="3.2"/>\n                        </svg>\n                    </div>\n                    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">\n                        <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48"\n                             xmlns="http://www.w3.org/2000/svg">\n                            <circle cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="56.549"\n                                    stroke-width="4"/>\n                        </svg>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="loading-text"><%= text %></div>\n    </div>\n</div>';

var MD5$1=function(r){function n(o){if(t[o])return t[o].exports;var e=t[o]={i:o,l:!1,exports:{}};return r[o].call(e.exports,e,e.exports,n),e.l=!0,e.exports}var t={};return n.m=r,n.c=t,n.i=function(r){return r},n.d=function(r,t,o){n.o(r,t)||Object.defineProperty(r,t,{configurable:!1,enumerable:!0,get:o});},n.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(t,"a",t),t},n.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},n.p="",n(n.s=4)}([function(r,n){var t={utf8:{stringToBytes:function(r){return t.bin.stringToBytes(unescape(encodeURIComponent(r)))},bytesToString:function(r){return decodeURIComponent(escape(t.bin.bytesToString(r)))}},bin:{stringToBytes:function(r){for(var n=[],t=0;t<r.length;t++)n.push(255&r.charCodeAt(t));return n},bytesToString:function(r){for(var n=[],t=0;t<r.length;t++)n.push(String.fromCharCode(r[t]));return n.join("")}}};r.exports=t;},function(r,n,t){!function(){var n=t(2),o=t(0).utf8,e=t(3),u=t(0).bin,i=function(r,t){r.constructor==String?r=t&&"binary"===t.encoding?u.stringToBytes(r):o.stringToBytes(r):e(r)?r=Array.prototype.slice.call(r,0):Array.isArray(r)||(r=r.toString());for(var f=n.bytesToWords(r),s=8*r.length,c=1732584193,a=-271733879,l=-1732584194,g=271733878,h=0;h<f.length;h++)f[h]=16711935&(f[h]<<8|f[h]>>>24)|4278255360&(f[h]<<24|f[h]>>>8);f[s>>>5]|=128<<s%32,f[14+(s+64>>>9<<4)]=s;for(var p=i._ff,y=i._gg,v=i._hh,d=i._ii,h=0;h<f.length;h+=16){var b=c,T=a,x=l,B=g;c=p(c,a,l,g,f[h+0],7,-680876936),g=p(g,c,a,l,f[h+1],12,-389564586),l=p(l,g,c,a,f[h+2],17,606105819),a=p(a,l,g,c,f[h+3],22,-1044525330),c=p(c,a,l,g,f[h+4],7,-176418897),g=p(g,c,a,l,f[h+5],12,1200080426),l=p(l,g,c,a,f[h+6],17,-1473231341),a=p(a,l,g,c,f[h+7],22,-45705983),c=p(c,a,l,g,f[h+8],7,1770035416),g=p(g,c,a,l,f[h+9],12,-1958414417),l=p(l,g,c,a,f[h+10],17,-42063),a=p(a,l,g,c,f[h+11],22,-1990404162),c=p(c,a,l,g,f[h+12],7,1804603682),g=p(g,c,a,l,f[h+13],12,-40341101),l=p(l,g,c,a,f[h+14],17,-1502002290),a=p(a,l,g,c,f[h+15],22,1236535329),c=y(c,a,l,g,f[h+1],5,-165796510),g=y(g,c,a,l,f[h+6],9,-1069501632),l=y(l,g,c,a,f[h+11],14,643717713),a=y(a,l,g,c,f[h+0],20,-373897302),c=y(c,a,l,g,f[h+5],5,-701558691),g=y(g,c,a,l,f[h+10],9,38016083),l=y(l,g,c,a,f[h+15],14,-660478335),a=y(a,l,g,c,f[h+4],20,-405537848),c=y(c,a,l,g,f[h+9],5,568446438),g=y(g,c,a,l,f[h+14],9,-1019803690),l=y(l,g,c,a,f[h+3],14,-187363961),a=y(a,l,g,c,f[h+8],20,1163531501),c=y(c,a,l,g,f[h+13],5,-1444681467),g=y(g,c,a,l,f[h+2],9,-51403784),l=y(l,g,c,a,f[h+7],14,1735328473),a=y(a,l,g,c,f[h+12],20,-1926607734),c=v(c,a,l,g,f[h+5],4,-378558),g=v(g,c,a,l,f[h+8],11,-2022574463),l=v(l,g,c,a,f[h+11],16,1839030562),a=v(a,l,g,c,f[h+14],23,-35309556),c=v(c,a,l,g,f[h+1],4,-1530992060),g=v(g,c,a,l,f[h+4],11,1272893353),l=v(l,g,c,a,f[h+7],16,-155497632),a=v(a,l,g,c,f[h+10],23,-1094730640),c=v(c,a,l,g,f[h+13],4,681279174),g=v(g,c,a,l,f[h+0],11,-358537222),l=v(l,g,c,a,f[h+3],16,-722521979),a=v(a,l,g,c,f[h+6],23,76029189),c=v(c,a,l,g,f[h+9],4,-640364487),g=v(g,c,a,l,f[h+12],11,-421815835),l=v(l,g,c,a,f[h+15],16,530742520),a=v(a,l,g,c,f[h+2],23,-995338651),c=d(c,a,l,g,f[h+0],6,-198630844),g=d(g,c,a,l,f[h+7],10,1126891415),l=d(l,g,c,a,f[h+14],15,-1416354905),a=d(a,l,g,c,f[h+5],21,-57434055),c=d(c,a,l,g,f[h+12],6,1700485571),g=d(g,c,a,l,f[h+3],10,-1894986606),l=d(l,g,c,a,f[h+10],15,-1051523),a=d(a,l,g,c,f[h+1],21,-2054922799),c=d(c,a,l,g,f[h+8],6,1873313359),g=d(g,c,a,l,f[h+15],10,-30611744),l=d(l,g,c,a,f[h+6],15,-1560198380),a=d(a,l,g,c,f[h+13],21,1309151649),c=d(c,a,l,g,f[h+4],6,-145523070),g=d(g,c,a,l,f[h+11],10,-1120210379),l=d(l,g,c,a,f[h+2],15,718787259),a=d(a,l,g,c,f[h+9],21,-343485551),c=c+b>>>0,a=a+T>>>0,l=l+x>>>0,g=g+B>>>0;}return n.endian([c,a,l,g])};i._ff=function(r,n,t,o,e,u,i){var f=r+(n&t|~n&o)+(e>>>0)+i;return(f<<u|f>>>32-u)+n},i._gg=function(r,n,t,o,e,u,i){var f=r+(n&o|t&~o)+(e>>>0)+i;return(f<<u|f>>>32-u)+n},i._hh=function(r,n,t,o,e,u,i){var f=r+(n^t^o)+(e>>>0)+i;return(f<<u|f>>>32-u)+n},i._ii=function(r,n,t,o,e,u,i){var f=r+(t^(n|~o))+(e>>>0)+i;return(f<<u|f>>>32-u)+n},i._blocksize=16,i._digestsize=16,r.exports=function(r,t){if(void 0===r||null===r)throw new Error("Illegal argument "+r);var o=n.wordsToBytes(i(r,t));return t&&t.asBytes?o:t&&t.asString?u.bytesToString(o):n.bytesToHex(o)};}();},function(r,n){!function(){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t={rotl:function(r,n){return r<<n|r>>>32-n},rotr:function(r,n){return r<<32-n|r>>>n},endian:function(r){if(r.constructor==Number)return 16711935&t.rotl(r,8)|4278255360&t.rotl(r,24);for(var n=0;n<r.length;n++)r[n]=t.endian(r[n]);return r},randomBytes:function(r){for(var n=[];r>0;r--)n.push(Math.floor(256*Math.random()));return n},bytesToWords:function(r){for(var n=[],t=0,o=0;t<r.length;t++,o+=8)n[o>>>5]|=r[t]<<24-o%32;return n},wordsToBytes:function(r){for(var n=[],t=0;t<32*r.length;t+=8)n.push(r[t>>>5]>>>24-t%32&255);return n},bytesToHex:function(r){for(var n=[],t=0;t<r.length;t++)n.push((r[t]>>>4).toString(16)),n.push((15&r[t]).toString(16));return n.join("")},hexToBytes:function(r){for(var n=[],t=0;t<r.length;t+=2)n.push(parseInt(r.substr(t,2),16));return n},bytesToBase64:function(r){for(var t=[],o=0;o<r.length;o+=3)for(var e=r[o]<<16|r[o+1]<<8|r[o+2],u=0;u<4;u++)8*o+6*u<=8*r.length?t.push(n.charAt(e>>>6*(3-u)&63)):t.push("=");return t.join("")},base64ToBytes:function(r){r=r.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],o=0,e=0;o<r.length;e=++o%4)0!=e&&t.push((n.indexOf(r.charAt(o-1))&Math.pow(2,-2*e+8)-1)<<2*e|n.indexOf(r.charAt(o))>>>6-2*e);return t}};r.exports=t;}();},function(r,n){function t(r){return!!r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r)}function o(r){return"function"==typeof r.readFloatLE&&"function"==typeof r.slice&&t(r.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
r.exports=function(r){return null!=r&&(t(r)||o(r)||!!r._isBuffer)};},function(r,n,t){r.exports=t(1);}]);

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("@material/ripple",[],e):"object"==typeof exports?exports.ripple=e():(t.mdc=t.mdc||{},t.mdc.ripple=e());}(window,function(){return i={},r.m=n={0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCFoundation=void 0;var i=(Object.defineProperty(r,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),r.prototype.init=function(){},r.prototype.destroy=function(){},r);function r(t){void 0===t&&(t={}),this.adapter=t;}e.MDCFoundation=i,e.default=i;},1:function(t,e,n){"use strict";var r=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,r,a=n.call(t),o=[];try{for(;(void 0===e||0<e--)&&!(i=a.next()).done;)o.push(i.value);}catch(t){r={error:t};}finally{try{i&&!i.done&&(n=a.return)&&n.call(a);}finally{if(r)throw r.error}}return o},a=this&&this.__spreadArray||function(t,e){for(var n=0,i=e.length,r=t.length;n<i;n++,r++)t[r]=e[n];return t};Object.defineProperty(e,"__esModule",{value:!0}),e.MDCComponent=void 0;var i=n(0),o=(s.attachTo=function(t){return new s(t,new i.MDCFoundation({}))},s.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];},s.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},s.prototype.initialSyncWithDOM=function(){},s.prototype.destroy=function(){this.foundation.destroy();},s.prototype.listen=function(t,e,n){this.root.addEventListener(t,e,n);},s.prototype.unlisten=function(t,e,n){this.root.removeEventListener(t,e,n);},s.prototype.emit=function(t,e,n){var i;void 0===n&&(n=!1),"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:n,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root.dispatchEvent(i);},s);function s(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];this.root=t,this.initialize.apply(this,a([],r(n))),this.foundation=void 0===e?this.getDefaultFoundation():e,this.foundation.init(),this.initialSyncWithDOM();}e.MDCComponent=o,e.default=o;},2:function(t,e,n){"use strict";function i(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}Object.defineProperty(e,"__esModule",{value:!0}),e.estimateScrollWidth=e.matches=e.closest=void 0,e.closest=function(t,e){if(t.closest)return t.closest(e);for(var n=t;n;){if(i(n,e))return n;n=n.parentElement;}return null},e.matches=i,e.estimateScrollWidth=function(t){var e=t;if(null!==e.offsetParent)return e.scrollWidth;var n=e.cloneNode(!0);n.style.setProperty("position","absolute"),n.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(n);var i=n.scrollWidth;return document.documentElement.removeChild(n),i};},211:function(t,e,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(t,e,n,i){void 0===i&&(i=n),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[n]}});}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n];}),r=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e});}:function(t,e){t.default=e;}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return r(e,t),e},o=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||i(e,t,n);};Object.defineProperty(e,"__esModule",{value:!0}),e.util=void 0;var s=a(n(3));e.util=s,o(n(212),e),o(n(6),e),o(n(7),e),o(n(4),e),o(n(213),e);},212:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});},213:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});},3:function(t,e,n){"use strict";var o;Object.defineProperty(e,"__esModule",{value:!0}),e.getNormalizedEventCoords=e.supportsCssVariables=void 0,e.supportsCssVariables=function(t,e){void 0===e&&(e=!1);var n,i=t.CSS;if("boolean"==typeof o&&!e)return o;if(!(i&&"function"==typeof i.supports))return!1;var r=i.supports("--css-vars","yes"),a=i.supports("(--css-vars: yes)")&&i.supports("color","#00000000");return n=r||a,e||(o=n),n},e.getNormalizedEventCoords=function(t,e,n){if(!t)return{x:0,y:0};var i,r,a=e.x,o=e.y,s=a+n.left,u=o+n.top;if("touchstart"===t.type){var c=t;i=c.changedTouches[0].pageX-s,r=c.changedTouches[0].pageY-u;}else{var d=t;i=d.pageX-s,r=d.pageY-u;}return{x:i,y:r}};},4:function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e;}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t;}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n);}),a=this&&this.__assign||function(){return(a=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},o=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(e,"__esModule",{value:!0}),e.MDCRippleFoundation=void 0;var s,u=n(0),c=n(7),d=n(3),l=["touchstart","pointerdown","mousedown","keydown"],p=["touchend","pointerup","mouseup","contextmenu"],f=[],v=(s=u.MDCFoundation,r(h,s),Object.defineProperty(h,"cssClasses",{get:function(){return c.cssClasses},enumerable:!1,configurable:!0}),Object.defineProperty(h,"strings",{get:function(){return c.strings},enumerable:!1,configurable:!0}),Object.defineProperty(h,"numbers",{get:function(){return c.numbers},enumerable:!1,configurable:!0}),Object.defineProperty(h,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),h.prototype.init=function(){var t=this,e=this.supportsPressRipple();if(this.registerRootHandlers(e),e){var n=h.cssClasses,i=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(i),t.adapter.isUnbounded()&&(t.adapter.addClass(r),t.layoutInternal());});}},h.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(h.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(h.cssClasses.FG_DEACTIVATION));var e=h.cssClasses,n=e.ROOT,i=e.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(n),t.adapter.removeClass(i),t.removeCssVars();});}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers();},h.prototype.activate=function(t){this.activateImpl(t);},h.prototype.deactivate=function(){this.deactivateImpl();},h.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0;});},h.prototype.setUnbounded=function(t){var e=h.cssClasses.UNBOUNDED;t?this.adapter.addClass(e):this.adapter.removeClass(e);},h.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(h.cssClasses.BG_FOCUSED)});},h.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(h.cssClasses.BG_FOCUSED)});},h.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},h.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},h.prototype.registerRootHandlers=function(t){var e,n;if(t){try{for(var i=o(l),r=i.next();!r.done;r=i.next()){var a=r.value;this.adapter.registerInteractionHandler(a,this.activateHandler);}}catch(t){e={error:t};}finally{try{r&&!r.done&&(n=i.return)&&n.call(i);}finally{if(e)throw e.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler);}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler);},h.prototype.registerDeactivationHandlers=function(t){var e,n;if("keydown"===t.type)this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var i=o(p),r=i.next();!r.done;r=i.next()){var a=r.value;this.adapter.registerDocumentInteractionHandler(a,this.deactivateHandler);}}catch(t){e={error:t};}finally{try{r&&!r.done&&(n=i.return)&&n.call(i);}finally{if(e)throw e.error}}},h.prototype.deregisterRootHandlers=function(){var e,t;try{for(var n=o(l),i=n.next();!i.done;i=n.next()){var r=i.value;this.adapter.deregisterInteractionHandler(r,this.activateHandler);}}catch(t){e={error:t};}finally{try{i&&!i.done&&(t=n.return)&&t.call(n);}finally{if(e)throw e.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler);},h.prototype.deregisterDeactivationHandlers=function(){var e,t;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var n=o(p),i=n.next();!i.done;i=n.next()){var r=i.value;this.adapter.deregisterDocumentInteractionHandler(r,this.deactivateHandler);}}catch(t){e={error:t};}finally{try{i&&!i.done&&(t=n.return)&&t.call(n);}finally{if(e)throw e.error}}},h.prototype.removeCssVars=function(){var e=this,n=h.strings;Object.keys(n).forEach(function(t){0===t.indexOf("VAR_")&&e.adapter.updateCssVariable(n[t],null);});},h.prototype.activateImpl=function(t){var e=this;if(!this.adapter.isSurfaceDisabled()){var n=this.activationState;if(!n.isActivated){var i=this.previousActivationEvent;i&&void 0!==t&&i.type!==t.type||(n.isActivated=!0,n.isProgrammatic=void 0===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),void 0!==t&&0<f.length&&f.some(function(t){return e.adapter.containsEventTarget(t)})?this.resetActivationState():(void 0!==t&&(f.push(t.target),this.registerDeactivationHandlers(t)),n.wasElementMadeActive=this.checkElementMadeActive(t),n.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){f=[],n.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive(t),n.wasElementMadeActive&&e.animateActivation()),n.wasElementMadeActive||(e.activationState=e.defaultActivationState());})));}}},h.prototype.checkElementMadeActive=function(t){return void 0===t||"keydown"!==t.type||this.adapter.isSurfaceActive()},h.prototype.animateActivation=function(){var t=this,e=h.strings,n=e.VAR_FG_TRANSLATE_START,i=e.VAR_FG_TRANSLATE_END,r=h.cssClasses,a=r.FG_DEACTIVATION,o=r.FG_ACTIVATION,s=h.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var u="",c="";if(!this.adapter.isUnbounded()){var d=this.getFgTranslationCoordinates(),l=d.startPoint,p=d.endPoint;u=l.x+"px, "+l.y+"px",c=p.x+"px, "+p.y+"px";}this.adapter.updateCssVariable(n,u),this.adapter.updateCssVariable(i,c),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(a),this.adapter.computeBoundingRect(),this.adapter.addClass(o),this.activationTimer=setTimeout(function(){t.activationTimerCallback();},s);},h.prototype.getFgTranslationCoordinates=function(){var t,e=this.activationState,n=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?d.getNormalizedEventCoords(n,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame.width/2,y:this.frame.height/2}).x-this.initialSize/2,y:t.y-this.initialSize/2},endPoint:{x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2}}},h.prototype.runDeactivationUXLogicIfReady=function(){var t=this,e=h.cssClasses.FG_DEACTIVATION,n=this.activationState,i=n.hasDeactivationUXRun,r=n.isActivated;!i&&r||!this.activationAnimationHasEnded||(this.rmBoundedActivationClasses(),this.adapter.addClass(e),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(e);},c.numbers.FG_DEACTIVATION_MS));},h.prototype.rmBoundedActivationClasses=function(){var t=h.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect();},h.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},h.numbers.TAP_DELAY_MS);},h.prototype.deactivateImpl=function(){var t=this,e=this.activationState;if(e.isActivated){var n=a({},e);e.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(n);}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(n),t.resetActivationState();}));}},h.prototype.animateDeactivation=function(t){var e=t.wasActivatedByPointer,n=t.wasElementMadeActive;(e||n)&&this.runDeactivationUXLogicIfReady();},h.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var e=Math.max(this.frame.height,this.frame.width);this.maxRadius=this.adapter.isUnbounded()?e:Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2))+h.numbers.PADDING;var n=Math.floor(e*h.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&n%2!=0?this.initialSize=n-1:this.initialSize=n,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars();},h.prototype.updateLayoutCssVars=function(){var t=h.strings,e=t.VAR_FG_SIZE,n=t.VAR_LEFT,i=t.VAR_TOP,r=t.VAR_FG_SCALE;this.adapter.updateCssVariable(e,this.initialSize+"px"),this.adapter.updateCssVariable(r,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(n,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(i,this.unboundedCoords.top+"px"));},h);function h(t){var e=s.call(this,a(a({},h.defaultAdapter),t))||this;return e.activationAnimationHasEnded=!1,e.activationTimer=0,e.fgDeactivationRemovalTimer=0,e.fgScale="0",e.frame={width:0,height:0},e.initialSize=0,e.layoutFrame=0,e.maxRadius=0,e.unboundedCoords={left:0,top:0},e.activationState=e.defaultActivationState(),e.activationTimerCallback=function(){e.activationAnimationHasEnded=!0,e.runDeactivationUXLogicIfReady();},e.activateHandler=function(t){e.activateImpl(t);},e.deactivateHandler=function(){e.deactivateImpl();},e.focusHandler=function(){e.handleFocus();},e.blurHandler=function(){e.handleBlur();},e.resizeHandler=function(){e.layout();},e}e.MDCRippleFoundation=v,e.default=v;},5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.applyPassive=void 0,e.applyPassive=function(t){return void 0===t&&(t=window),!!function(t){void 0===t&&(t=window);var e=!1;try{var n={get passive(){return!(e=!0)}},i=function(){};t.document.addEventListener("test",i,n),t.document.removeEventListener("test",i,n);}catch(t){e=!1;}return e}(t)&&{passive:!0}};},6:function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e;}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t;}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n);}),a=this&&this.__createBinding||(Object.create?function(t,e,n,i){void 0===i&&(i=n),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[n]}});}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n];}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e});}:function(t,e){t.default=e;}),s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&a(e,t,n);return o(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.MDCRipple=void 0;var u,c=n(1),d=n(5),l=n(2),p=n(4),f=s(n(3)),v=(u=c.MDCComponent,r(h,u),h.attachTo=function(t,e){void 0===e&&(e={isUnbounded:void 0});var n=new h(t);return void 0!==e.isUnbounded&&(n.unbounded=e.isUnbounded),n},h.createAdapter=function(n){return{addClass:function(t){return n.root.classList.add(t)},browserSupportsCssVars:function(){return f.supportsCssVariables(window)},computeBoundingRect:function(){return n.root.getBoundingClientRect()},containsEventTarget:function(t){return n.root.contains(t)},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,d.applyPassive())},deregisterInteractionHandler:function(t,e){return n.root.removeEventListener(t,e,d.applyPassive())},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return l.matches(n.root,":active")},isSurfaceDisabled:function(){return Boolean(n.disabled)},isUnbounded:function(){return Boolean(n.unbounded)},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,d.applyPassive())},registerInteractionHandler:function(t,e){return n.root.addEventListener(t,e,d.applyPassive())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},removeClass:function(t){return n.root.classList.remove(t)},updateCssVariable:function(t,e){return n.root.style.setProperty(t,e)}}},Object.defineProperty(h.prototype,"unbounded",{get:function(){return Boolean(this.isUnbounded)},set:function(t){this.isUnbounded=Boolean(t),this.setUnbounded();},enumerable:!1,configurable:!0}),h.prototype.activate=function(){this.foundation.activate();},h.prototype.deactivate=function(){this.foundation.deactivate();},h.prototype.layout=function(){this.foundation.layout();},h.prototype.getDefaultFoundation=function(){return new p.MDCRippleFoundation(h.createAdapter(this))},h.prototype.initialSyncWithDOM=function(){var t=this.root;this.isUnbounded="mdcRippleIsUnbounded"in t.dataset;},h.prototype.setUnbounded=function(){this.foundation.setUnbounded(Boolean(this.isUnbounded));},h);function h(){var t=null!==u&&u.apply(this,arguments)||this;return t.disabled=!1,t}e.MDCRipple=v;},7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.numbers=e.strings=e.cssClasses=void 0,e.cssClasses={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},e.strings={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},e.numbers={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};}},r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n});},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=211);function r(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var n,i;});

let coreAuth$1 = {

    /**
     * Получение страницы входа и регистрации
     * @returns {*}
     */
    getPageContent: function () {

        return coreTpl['auth/main.html'];
    },


    /**
     * Инициализация страницы входа и регистрации
     */
    init: function () {

        let that = this;

        // Инициализация кнопок
        let buttons = document.querySelectorAll('.page-auth .mdc-button');
        for (let button of buttons) {
            new mdc.ripple.MDCRipple(button);
        }

        $('.container-login form').on('submit', function () {
            coreAuth$1.login(this);
            return false
        });

        $('.container-registration form').on('submit', function () {
            coreAuth$1.registration(this);
            return false
        });


        let conf = localStorage.getItem('core3_conf');
        if (typeof conf === 'string') {
            try {
                conf = JSON.parse(conf);
                if (typeof conf.name === 'string') {
                    $('head title').text(conf.name);
                }
                if (typeof conf.logo === 'string') {
                    this._setLogo(conf.logo);
                }
                if (typeof conf.theme === 'object') {
                    this._setTheme(conf.theme);
                }
            } catch (e) {}
        }


        coreAuth$1.loadConfig().then(function (conf) {
            localStorage.setItem('core3_conf', JSON.stringify(conf));

            if (typeof conf.name === 'string') {
                $('head title').text(conf.name);
            }

            if (typeof conf.logo === 'string') {
                that._setLogo(conf.logo);
            } else {
                that._setLogo('');
            }

            if (typeof conf.theme === 'object') {
                that._setTheme(conf.theme);
            }
        });

        coreAuth$1.viewActualContainer();


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
        };

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

        coreAuth$1._viewContainer(authPanel);
    },


    /**
     * @param action
     */
    preloader(action) {

        let $btn = $('.page-auth button[type=submit]:visible');

        switch (action) {
            case 'show':
                $btn.attr("disabled", "disabled");

                if ($btn.find('.spinner-border').length === 0) {
                    $btn.prepend('<div class="spinner-border spinner-border-sm"></div> ');
                }
                break;

            case 'hide':
                $btn.find('.spinner-border').remove();
                $btn.removeAttr("disabled");
                break;
        }
    },


    /**
     * Получение конфигурации
     * @return {Promise}
     */
    loadConfig: function () {

        return new Promise(function (resolve, reject) {

            $.ajax({
                url: coreMain.options.basePath + "/conf",
                method: "GET",
                dataType: "json",
                success: function (response) {
                    resolve(response);
                }
            });
        });
    },


    /**
     * @param form
     * @returns {Promise<boolean>}
     */
    login: async function (form) {

        if ( ! form.checkValidity()) {
            $(form).addClass('was-validated');
            return false;
        } else {
            $(form).removeClass('was-validated');
        }

        coreAuth$1.preloader('show');
        $('.page-auth form .text-danger').text('');

        let fp = await coreTools.getFingerprint();

        if ( ! fp) {
            coreAuth$1.preloader('hide');
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
            }),
            success: function (response) {
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
            },
            error: function (response) {
                coreAuth$1.preloader('hide');

                let errorMessage = '';

                if (response.status === 0) {
                    errorMessage = 'Проверьте подключение к интернету';

                } else if (response.responseJSON && response.responseJSON.error_message) {
                    errorMessage = response.responseJSON.error_message;

                } else {
                    errorMessage = $("<div>" + response.responseText + "</div>").text();
                }

                errorMessage = errorMessage || 'Ошибка. Попробуйте позже, либо обратитесь к администратору';

                $('.container-login .text-danger').text(errorMessage);
            },
            complete: function (jqXHR, textStatus) {
                coreAuth$1.preloader('hide');
            }
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

        if ( ! form.checkValidity()) {
            $(form).addClass('was-validated');
            return false;
        } else {
            $(form).removeClass('was-validated');
        }

        coreAuth$1.preloader('show');
        $('.container-registration .text-danger').text('');

        $.ajax({
            url: coreMain.options.basePath + "/auth/registration/email",
            dataType: "json",
            method: "POST",
            data: $(form).serialize(),
            success: function (response) {
                coreAuth$1.preloader('hide');

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
            },
            error: function (response) {
                coreAuth$1.preloader('hide');

                let errorMessage = '';

                if (response.status === 0) {
                    errorMessage = 'Проверьте подключение к интернету';

                } else if (response.responseJSON && response.responseJSON.error_message) {
                    errorMessage = response.responseJSON.error_message;

                } else {
                    errorMessage = $(response.responseText).text();
                }

                errorMessage = errorMessage || 'Ошибка. Попробуйте позже, либо обратитесь к администратору';

                $('.container-registration .text-danger').text(errorMessage);
            },
            complete: function (jqXHR, textStatus) {
                coreAuth$1.preloader('hide');
            }
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

        coreAuth$1.preloader('show');
        $('.container-registration_complete .text-danger').text('');

        let params = coreTools.getParams();

        $.ajax({
            url: coreMain.options.basePath + "/auth/registration/email/check",
            dataType: "json",
            method: "POST",
            data: {
                key:      params.query.key,
                password: MD5(form.password.value)
            },
            success: function (data) {
                coreAuth$1.preloader('hide');

                if (data.status === 'success') {
                    $('.container-registration_complete .text-success').html(data.message).css('margin-bottom', '50px');
                    $(form).hide();

                } else {
                    $('.container-registration_complete .text-danger').text(data.error_message);
                }
            },
            error: function (response) {
                coreAuth$1.preloader('hide');

                let errorMessage = '';

                if (response.status === 0) {
                    errorMessage = 'Ошибка. Проверьте подключение к интернету';

                } else {
                    errorMessage = 'Ошибка. Попробуйте позже, либо обратитесь к администратору';
                }

                $('.container-registration_complete .text-danger').text(errorMessage);
            }
        });
    },


    /**
     * Показ указанного контейнера
     * @param name
     */
    _viewContainer: function (name) {

        $('.page-auth > .container').hide();
        $('.page-auth > .container-' + name).fadeIn('fast');
    },


    /**
     * Установка логотипа
     * @param {string} logo
     * @private
     */
    _setLogo: function (logo) {

        if (logo) {
            $('.page-auth img.logo').attr('src', logo).show();
        } else {
            $('.page-auth img.logo').hide();
        }
    },


    /**
     * Установка темы
     * @param {object} theme
     * @private
     */
    _setTheme: function (theme) {

        let styles = [];

        if (typeof theme.login === 'object' &&
            typeof theme.login.bg_video === 'string' &&
            theme.login.bg_video
        ) {
            if ( ! $('.page.page-auth > video')[0]) {
                $('.page.page-auth').prepend('<video autoplay muted loop><source src="' + theme.login.bg_video + '" type="video/mp4"></video>');
            }
        }

        if (typeof theme.login === 'object' &&
            typeof theme.login.bg_img === 'string' &&
            theme.login.bg_img
        ) {
            styles.push('--login-bg:url("' + theme.login.bg_img + '");');

        } else if (typeof theme.login === 'object' &&
            typeof theme.login.bg_color === 'string' &&
            theme.login.bg_color
        ) {
            styles.push('--login-bg: ' + theme.login.bg_color + ';');
        }

        if (styles.length > 0) {
            let content   = ':root{' + styles.join('') + '}';
            let coreTheme = $('head #theme-login');

            if ( ! coreTheme[0] || content !== coreTheme.html()) {
                if (coreTheme[0]) {
                    coreTheme.remove();
                }

                $('head').append('<style id="theme-login">' + content + '</style>');
            }
        }
    }
};



$(function () {

    coreMain.on('hashchange', function () {
        if ($('.page-auth')[0]) {
            coreAuth$1.viewActualContainer();
        }
    });
});

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f();}else if(typeof define==="function"&&define.amd){define([],f);}else{var g;if(typeof window!=="undefined"){g=window;}else if(typeof global!=="undefined"){g=global;}else if(typeof self!=="undefined"){g=self;}else{g=this;}g.ejs=f();}})(function(){return function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t);}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r}()({1:[function(require,module,exports){"use strict";var fs=require("fs");var path=require("path");var utils=require("./utils");var scopeOptionWarned=false;var _VERSION_STRING=require("../package.json").version;var _DEFAULT_OPEN_DELIMITER="<";var _DEFAULT_CLOSE_DELIMITER=">";var _DEFAULT_DELIMITER="%";var _DEFAULT_LOCALS_NAME="locals";var _NAME="ejs";var _REGEX_STRING="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)";var _OPTS_PASSABLE_WITH_DATA=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"];var _OPTS_PASSABLE_WITH_DATA_EXPRESS=_OPTS_PASSABLE_WITH_DATA.concat("cache");var _BOM=/^\uFEFF/;var _JS_IDENTIFIER=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/;exports.cache=utils.cache;exports.fileLoader=fs.readFileSync;exports.localsName=_DEFAULT_LOCALS_NAME;exports.promiseImpl=new Function("return this;")().Promise;exports.resolveInclude=function(name,filename,isDir){var dirname=path.dirname;var extname=path.extname;var resolve=path.resolve;var includePath=resolve(isDir?filename:dirname(filename),name);var ext=extname(name);if(!ext){includePath+=".ejs";}return includePath};function resolvePaths(name,paths){var filePath;if(paths.some(function(v){filePath=exports.resolveInclude(name,v,true);return fs.existsSync(filePath)})){return filePath}}function getIncludePath(path,options){var includePath;var filePath;var views=options.views;var match=/^[A-Za-z]+:\\|^\//.exec(path);if(match&&match.length){path=path.replace(/^\/*/,"");if(Array.isArray(options.root)){includePath=resolvePaths(path,options.root);}else{includePath=exports.resolveInclude(path,options.root||"/",true);}}else{if(options.filename){filePath=exports.resolveInclude(path,options.filename);if(fs.existsSync(filePath)){includePath=filePath;}}if(!includePath&&Array.isArray(views)){includePath=resolvePaths(path,views);}if(!includePath&&typeof options.includer!=="function"){throw new Error('Could not find the include file "'+options.escapeFunction(path)+'"')}}return includePath}function handleCache(options,template){var func;var filename=options.filename;var hasTemplate=arguments.length>1;if(options.cache){if(!filename){throw new Error("cache option requires a filename")}func=exports.cache.get(filename);if(func){return func}if(!hasTemplate){template=fileLoader(filename).toString().replace(_BOM,"");}}else if(!hasTemplate){if(!filename){throw new Error("Internal EJS error: no file name or template "+"provided")}template=fileLoader(filename).toString().replace(_BOM,"");}func=exports.compile(template,options);if(options.cache){exports.cache.set(filename,func);}return func}function tryHandleCache(options,data,cb){var result;if(!cb){if(typeof exports.promiseImpl=="function"){return new exports.promiseImpl(function(resolve,reject){try{result=handleCache(options)(data);resolve(result);}catch(err){reject(err);}})}else{throw new Error("Please provide a callback function")}}else{try{result=handleCache(options)(data);}catch(err){return cb(err)}cb(null,result);}}function fileLoader(filePath){return exports.fileLoader(filePath)}function includeFile(path,options){var opts=utils.shallowCopy(utils.createNullProtoObjWherePossible(),options);opts.filename=getIncludePath(path,opts);if(typeof options.includer==="function"){var includerResult=options.includer(path,opts.filename);if(includerResult){if(includerResult.filename){opts.filename=includerResult.filename;}if(includerResult.template){return handleCache(opts,includerResult.template)}}}return handleCache(opts)}function rethrow(err,str,flnm,lineno,esc){var lines=str.split("\n");var start=Math.max(lineno-3,0);var end=Math.min(lines.length,lineno+3);var filename=esc(flnm);var context=lines.slice(start,end).map(function(line,i){var curr=i+start+1;return(curr==lineno?" >> ":"    ")+curr+"| "+line}).join("\n");err.path=filename;err.message=(filename||"ejs")+":"+lineno+"\n"+context+"\n\n"+err.message;throw err}function stripSemi(str){return str.replace(/;(\s*$)/,"$1")}exports.compile=function compile(template,opts){var templ;if(opts&&opts.scope){if(!scopeOptionWarned){console.warn("`scope` option is deprecated and will be removed in EJS 3");scopeOptionWarned=true;}if(!opts.context){opts.context=opts.scope;}delete opts.scope;}templ=new Template(template,opts);return templ.compile()};exports.render=function(template,d,o){var data=d||utils.createNullProtoObjWherePossible();var opts=o||utils.createNullProtoObjWherePossible();if(arguments.length==2){utils.shallowCopyFromList(opts,data,_OPTS_PASSABLE_WITH_DATA);}return handleCache(opts,template)(data)};exports.renderFile=function(){var args=Array.prototype.slice.call(arguments);var filename=args.shift();var cb;var opts={filename:filename};var data;var viewOpts;if(typeof arguments[arguments.length-1]=="function"){cb=args.pop();}if(args.length){data=args.shift();if(args.length){utils.shallowCopy(opts,args.pop());}else{if(data.settings){if(data.settings.views){opts.views=data.settings.views;}if(data.settings["view cache"]){opts.cache=true;}viewOpts=data.settings["view options"];if(viewOpts){utils.shallowCopy(opts,viewOpts);}}utils.shallowCopyFromList(opts,data,_OPTS_PASSABLE_WITH_DATA_EXPRESS);}opts.filename=filename;}else{data=utils.createNullProtoObjWherePossible();}return tryHandleCache(opts,data,cb)};exports.Template=Template;exports.clearCache=function(){exports.cache.reset();};function Template(text,opts){opts=opts||utils.createNullProtoObjWherePossible();var options=utils.createNullProtoObjWherePossible();this.templateText=text;this.mode=null;this.truncate=false;this.currentLine=1;this.source="";options.client=opts.client||false;options.escapeFunction=opts.escape||opts.escapeFunction||utils.escapeXML;options.compileDebug=opts.compileDebug!==false;options.debug=!!opts.debug;options.filename=opts.filename;options.openDelimiter=opts.openDelimiter||exports.openDelimiter||_DEFAULT_OPEN_DELIMITER;options.closeDelimiter=opts.closeDelimiter||exports.closeDelimiter||_DEFAULT_CLOSE_DELIMITER;options.delimiter=opts.delimiter||exports.delimiter||_DEFAULT_DELIMITER;options.strict=opts.strict||false;options.context=opts.context;options.cache=opts.cache||false;options.rmWhitespace=opts.rmWhitespace;options.root=opts.root;options.includer=opts.includer;options.outputFunctionName=opts.outputFunctionName;options.localsName=opts.localsName||exports.localsName||_DEFAULT_LOCALS_NAME;options.views=opts.views;options.async=opts.async;options.destructuredLocals=opts.destructuredLocals;options.legacyInclude=typeof opts.legacyInclude!="undefined"?!!opts.legacyInclude:true;if(options.strict){options._with=false;}else{options._with=typeof opts._with!="undefined"?opts._with:true;}this.opts=options;this.regex=this.createRegex();}Template.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"};Template.prototype={createRegex:function(){var str=_REGEX_STRING;var delim=utils.escapeRegExpChars(this.opts.delimiter);var open=utils.escapeRegExpChars(this.opts.openDelimiter);var close=utils.escapeRegExpChars(this.opts.closeDelimiter);str=str.replace(/%/g,delim).replace(/</g,open).replace(/>/g,close);return new RegExp(str)},compile:function(){var src;var fn;var opts=this.opts;var prepended="";var appended="";var escapeFn=opts.escapeFunction;var ctor;var sanitizedFilename=opts.filename?JSON.stringify(opts.filename):"undefined";if(!this.source){this.generateSource();prepended+='  var __output = "";\n'+"  function __append(s) { if (s !== undefined && s !== null) __output += s }\n";if(opts.outputFunctionName){if(!_JS_IDENTIFIER.test(opts.outputFunctionName)){throw new Error("outputFunctionName is not a valid JS identifier.")}prepended+="  var "+opts.outputFunctionName+" = __append;"+"\n";}if(opts.localsName&&!_JS_IDENTIFIER.test(opts.localsName)){throw new Error("localsName is not a valid JS identifier.")}if(opts.destructuredLocals&&opts.destructuredLocals.length){var destructuring="  var __locals = ("+opts.localsName+" || {}),\n";for(var i=0;i<opts.destructuredLocals.length;i++){var name=opts.destructuredLocals[i];if(!_JS_IDENTIFIER.test(name)){throw new Error("destructuredLocals["+i+"] is not a valid JS identifier.")}if(i>0){destructuring+=",\n  ";}destructuring+=name+" = __locals."+name;}prepended+=destructuring+";\n";}if(opts._with!==false){prepended+="  with ("+opts.localsName+" || {}) {"+"\n";appended+="  }"+"\n";}appended+="  return __output;"+"\n";this.source=prepended+this.source+appended;}if(opts.compileDebug){src="var __line = 1"+"\n"+"  , __lines = "+JSON.stringify(this.templateText)+"\n"+"  , __filename = "+sanitizedFilename+";"+"\n"+"try {"+"\n"+this.source+"} catch (e) {"+"\n"+"  rethrow(e, __lines, __filename, __line, escapeFn);"+"\n"+"}"+"\n";}else{src=this.source;}if(opts.client){src="escapeFn = escapeFn || "+escapeFn.toString()+";"+"\n"+src;if(opts.compileDebug){src="rethrow = rethrow || "+rethrow.toString()+";"+"\n"+src;}}if(opts.strict){src='"use strict";\n'+src;}if(opts.debug){console.log(src);}if(opts.compileDebug&&opts.filename){src=src+"\n"+"//# sourceURL="+sanitizedFilename+"\n";}try{if(opts.async){try{ctor=new Function("return (async function(){}).constructor;")();}catch(e){if(e instanceof SyntaxError){throw new Error("This environment does not support async/await")}else{throw e}}}else{ctor=Function;}fn=new ctor(opts.localsName+", escapeFn, include, rethrow",src);}catch(e){if(e instanceof SyntaxError){if(opts.filename){e.message+=" in "+opts.filename;}e.message+=" while compiling ejs\n\n";e.message+="If the above error is not helpful, you may want to try EJS-Lint:\n";e.message+="https://github.com/RyanZim/EJS-Lint";if(!opts.async){e.message+="\n";e.message+="Or, if you meant to create an async function, pass `async: true` as an option.";}}throw e}var returnedFn=opts.client?fn:function anonymous(data){var include=function(path,includeData){var d=utils.shallowCopy(utils.createNullProtoObjWherePossible(),data);if(includeData){d=utils.shallowCopy(d,includeData);}return includeFile(path,opts)(d)};return fn.apply(opts.context,[data||utils.createNullProtoObjWherePossible(),escapeFn,include,rethrow])};if(opts.filename&&typeof Object.defineProperty==="function"){var filename=opts.filename;var basename=path.basename(filename,path.extname(filename));try{Object.defineProperty(returnedFn,"name",{value:basename,writable:false,enumerable:false,configurable:true});}catch(e){}}return returnedFn},generateSource:function(){var opts=this.opts;if(opts.rmWhitespace){this.templateText=this.templateText.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"");}this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var self=this;var matches=this.parseTemplateText();var d=this.opts.delimiter;var o=this.opts.openDelimiter;var c=this.opts.closeDelimiter;if(matches&&matches.length){matches.forEach(function(line,index){var closing;if(line.indexOf(o+d)===0&&line.indexOf(o+d+d)!==0){closing=matches[index+2];if(!(closing==d+c||closing=="-"+d+c||closing=="_"+d+c)){throw new Error('Could not find matching close tag for "'+line+'".')}}self.scanLine(line);});}},parseTemplateText:function(){var str=this.templateText;var pat=this.regex;var result=pat.exec(str);var arr=[];var firstPos;while(result){firstPos=result.index;if(firstPos!==0){arr.push(str.substring(0,firstPos));str=str.slice(firstPos);}arr.push(result[0]);str=str.slice(result[0].length);result=pat.exec(str);}if(str){arr.push(str);}return arr},_addOutput:function(line){if(this.truncate){line=line.replace(/^(?:\r\n|\r|\n)/,"");this.truncate=false;}if(!line){return line}line=line.replace(/\\/g,"\\\\");line=line.replace(/\n/g,"\\n");line=line.replace(/\r/g,"\\r");line=line.replace(/"/g,'\\"');this.source+='    ; __append("'+line+'")'+"\n";},scanLine:function(line){var self=this;var d=this.opts.delimiter;var o=this.opts.openDelimiter;var c=this.opts.closeDelimiter;var newLineCount=0;newLineCount=line.split("\n").length-1;switch(line){case o+d:case o+d+"_":this.mode=Template.modes.EVAL;break;case o+d+"=":this.mode=Template.modes.ESCAPED;break;case o+d+"-":this.mode=Template.modes.RAW;break;case o+d+"#":this.mode=Template.modes.COMMENT;break;case o+d+d:this.mode=Template.modes.LITERAL;this.source+='    ; __append("'+line.replace(o+d+d,o+d)+'")'+"\n";break;case d+d+c:this.mode=Template.modes.LITERAL;this.source+='    ; __append("'+line.replace(d+d+c,d+c)+'")'+"\n";break;case d+c:case"-"+d+c:case"_"+d+c:if(this.mode==Template.modes.LITERAL){this._addOutput(line);}this.mode=null;this.truncate=line.indexOf("-")===0||line.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case Template.modes.EVAL:case Template.modes.ESCAPED:case Template.modes.RAW:if(line.lastIndexOf("//")>line.lastIndexOf("\n")){line+="\n";}}switch(this.mode){case Template.modes.EVAL:this.source+="    ; "+line+"\n";break;case Template.modes.ESCAPED:this.source+="    ; __append(escapeFn("+stripSemi(line)+"))"+"\n";break;case Template.modes.RAW:this.source+="    ; __append("+stripSemi(line)+")"+"\n";break;case Template.modes.COMMENT:break;case Template.modes.LITERAL:this._addOutput(line);break}}else{this._addOutput(line);}}if(self.opts.compileDebug&&newLineCount){this.currentLine+=newLineCount;this.source+="    ; __line = "+this.currentLine+"\n";}}};exports.escapeXML=utils.escapeXML;exports.__express=exports.renderFile;exports.VERSION=_VERSION_STRING;exports.name=_NAME;if(typeof window!="undefined"){window.ejs=exports;}},{"../package.json":6,"./utils":2,fs:3,path:4}],2:[function(require,module,exports){"use strict";var regExpChars=/[|\\{}()[\]^$+*?.]/g;var hasOwnProperty=Object.prototype.hasOwnProperty;var hasOwn=function(obj,key){return hasOwnProperty.apply(obj,[key])};exports.escapeRegExpChars=function(string){if(!string){return""}return String(string).replace(regExpChars,"\\$&")};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"};var _MATCH_HTML=/[&<>'"]/g;function encode_char(c){return _ENCODE_HTML_RULES[c]||c}var escapeFuncStr="var _ENCODE_HTML_RULES = {\n"+'      "&": "&amp;"\n'+'    , "<": "&lt;"\n'+'    , ">": "&gt;"\n'+'    , \'"\': "&#34;"\n'+'    , "\'": "&#39;"\n'+"    }\n"+"  , _MATCH_HTML = /[&<>'\"]/g;\n"+"function encode_char(c) {\n"+"  return _ENCODE_HTML_RULES[c] || c;\n"+"};\n";exports.escapeXML=function(markup){return markup==undefined?"":String(markup).replace(_MATCH_HTML,encode_char)};exports.escapeXML.toString=function(){return Function.prototype.toString.call(this)+";\n"+escapeFuncStr};exports.shallowCopy=function(to,from){from=from||{};if(to!==null&&to!==undefined){for(var p in from){if(!hasOwn(from,p)){continue}if(p==="__proto__"||p==="constructor"){continue}to[p]=from[p];}}return to};exports.shallowCopyFromList=function(to,from,list){list=list||[];from=from||{};if(to!==null&&to!==undefined){for(var i=0;i<list.length;i++){var p=list[i];if(typeof from[p]!="undefined"){if(!hasOwn(from,p)){continue}if(p==="__proto__"||p==="constructor"){continue}to[p]=from[p];}}}return to};exports.cache={_data:{},set:function(key,val){this._data[key]=val;},get:function(key){return this._data[key]},remove:function(key){delete this._data[key];},reset:function(){this._data={};}};exports.hyphenToCamel=function(str){return str.replace(/-[a-z]/g,function(match){return match[1].toUpperCase()})};exports.createNullProtoObjWherePossible=function(){if(typeof Object.create=="function"){return function(){return Object.create(null)}}if(!({__proto__:null}instanceof Object)){return function(){return{__proto__:null}}}return function(){return{}}}();},{}],3:[function(require,module,exports){},{}],4:[function(require,module,exports){(function(process){function normalizeArray(parts,allowAboveRoot){var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==="."){parts.splice(i,1);}else if(last===".."){parts.splice(i,1);up++;}else if(up){parts.splice(i,1);up--;}}if(allowAboveRoot){for(;up--;up){parts.unshift("..");}}return parts}exports.resolve=function(){var resolvedPath="",resolvedAbsolute=false;for(var i=arguments.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?arguments[i]:process.cwd();if(typeof path!=="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!path){continue}resolvedPath=path+"/"+resolvedPath;resolvedAbsolute=path.charAt(0)==="/";}resolvedPath=normalizeArray(filter(resolvedPath.split("/"),function(p){return!!p}),!resolvedAbsolute).join("/");return(resolvedAbsolute?"/":"")+resolvedPath||"."};exports.normalize=function(path){var isAbsolute=exports.isAbsolute(path),trailingSlash=substr(path,-1)==="/";path=normalizeArray(filter(path.split("/"),function(p){return!!p}),!isAbsolute).join("/");if(!path&&!isAbsolute){path=".";}if(path&&trailingSlash){path+="/";}return(isAbsolute?"/":"")+path};exports.isAbsolute=function(path){return path.charAt(0)==="/"};exports.join=function(){var paths=Array.prototype.slice.call(arguments,0);return exports.normalize(filter(paths,function(p,index){if(typeof p!=="string"){throw new TypeError("Arguments to path.join must be strings")}return p}).join("/"))};exports.relative=function(from,to){from=exports.resolve(from).substr(1);to=exports.resolve(to).substr(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=="")break}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=="")break}if(start>end)return[];return arr.slice(start,end-start+1)}var fromParts=trim(from.split("/"));var toParts=trim(to.split("/"));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push("..");}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join("/")};exports.sep="/";exports.delimiter=":";exports.dirname=function(path){if(typeof path!=="string")path=path+"";if(path.length===0)return".";var code=path.charCodeAt(0);var hasRoot=code===47;var end=-1;var matchedSlash=true;for(var i=path.length-1;i>=1;--i){code=path.charCodeAt(i);if(code===47){if(!matchedSlash){end=i;break}}else{matchedSlash=false;}}if(end===-1)return hasRoot?"/":".";if(hasRoot&&end===1){return"/"}return path.slice(0,end)};function basename(path){if(typeof path!=="string")path=path+"";var start=0;var end=-1;var matchedSlash=true;var i;for(i=path.length-1;i>=0;--i){if(path.charCodeAt(i)===47){if(!matchedSlash){start=i+1;break}}else if(end===-1){matchedSlash=false;end=i+1;}}if(end===-1)return"";return path.slice(start,end)}exports.basename=function(path,ext){var f=basename(path);if(ext&&f.substr(-1*ext.length)===ext){f=f.substr(0,f.length-ext.length);}return f};exports.extname=function(path){if(typeof path!=="string")path=path+"";var startDot=-1;var startPart=0;var end=-1;var matchedSlash=true;var preDotState=0;for(var i=path.length-1;i>=0;--i){var code=path.charCodeAt(i);if(code===47){if(!matchedSlash){startPart=i+1;break}continue}if(end===-1){matchedSlash=false;end=i+1;}if(code===46){if(startDot===-1)startDot=i;else if(preDotState!==1)preDotState=1;}else if(startDot!==-1){preDotState=-1;}}if(startDot===-1||end===-1||preDotState===0||preDotState===1&&startDot===end-1&&startDot===startPart+1){return""}return path.slice(startDot,end)};function filter(xs,f){if(xs.filter)return xs.filter(f);var res=[];for(var i=0;i<xs.length;i++){if(f(xs[i],i,xs))res.push(xs[i]);}return res}var substr="ab".substr(-1)==="b"?function(str,start,len){return str.substr(start,len)}:function(str,start,len){if(start<0)start=str.length+start;return str.substr(start,len)};}).call(this,require("_process"));},{_process:5}],5:[function(require,module,exports){var process=module.exports={};var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}try{if(typeof clearTimeout==="function"){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){return setTimeout(fun,0)}if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0)}try{return cachedSetTimeout(fun,0)}catch(e){try{return cachedSetTimeout.call(null,fun,0)}catch(e){return cachedSetTimeout.call(this,fun,0)}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){return clearTimeout(marker)}if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker)}try{return cachedClearTimeout(marker)}catch(e){try{return cachedClearTimeout.call(null,marker)}catch(e){return cachedClearTimeout.call(this,marker)}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;runClearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title="browser";process.browser=true;process.env={};process.argv=[];process.version="";process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[]};process.binding=function(name){throw new Error("process.binding is not supported")};process.cwd=function(){return"/"};process.chdir=function(dir){throw new Error("process.chdir is not supported")};process.umask=function(){return 0};},{}],6:[function(require,module,exports){module.exports={name:"ejs",description:"Embedded JavaScript templates",keywords:["template","engine","ejs"],version:"3.1.7",author:"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",license:"Apache-2.0",bin:{ejs:"./bin/cli.js"},main:"./lib/ejs.js",jsdelivr:"ejs.min.js",unpkg:"ejs.min.js",repository:{type:"git",url:"git://github.com/mde/ejs.git"},bugs:"https://github.com/mde/ejs/issues",homepage:"https://github.com/mde/ejs",dependencies:{jake:"^10.8.5"},devDependencies:{browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^3.6.7","lru-cache":"^4.0.1",mocha:"^7.1.1","uglify-js":"^3.3.16"},engines:{node:">=0.10.0"},scripts:{test:"mocha"}};},{}]},{},[1])(1)});

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("@material/linear-progress",[],e):"object"==typeof exports?exports["linear-progress"]=e():(t.mdc=t.mdc||{},t.mdc["linear-progress"]=e());}(window,function(){return n={},o.m=r={0:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCFoundation=void 0;var n=(Object.defineProperty(o,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(o,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(o,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),o.prototype.init=function(){},o.prototype.destroy=function(){},o);function o(t){void 0===t&&(t={}),this.adapter=t;}e.MDCFoundation=n,e.default=n;},1:function(t,e,r){"use strict";var o=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),s=[];try{for(;(void 0===e||0<e--)&&!(n=i.next()).done;)s.push(n.value);}catch(t){o={error:t};}finally{try{n&&!n.done&&(r=i.return)&&r.call(i);}finally{if(o)throw o.error}}return s},i=this&&this.__spreadArray||function(t,e){for(var r=0,n=e.length,o=t.length;r<n;r++,o++)t[o]=e[r];return t};Object.defineProperty(e,"__esModule",{value:!0}),e.MDCComponent=void 0;var n=r(0),s=(a.attachTo=function(t){return new a(t,new n.MDCFoundation({}))},a.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];},a.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},a.prototype.initialSyncWithDOM=function(){},a.prototype.destroy=function(){this.foundation.destroy();},a.prototype.listen=function(t,e,r){this.root.addEventListener(t,e,r);},a.prototype.unlisten=function(t,e,r){this.root.removeEventListener(t,e,r);},a.prototype.emit=function(t,e,r){var n;void 0===r&&(r=!1),"function"==typeof CustomEvent?n=new CustomEvent(t,{bubbles:r,detail:e}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,r,!1,e),this.root.dispatchEvent(n);},a);function a(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];this.root=t,this.initialize.apply(this,i([],o(r))),this.foundation=void 0===e?this.getDefaultFoundation():e,this.foundation.init(),this.initialSyncWithDOM();}e.MDCComponent=s,e.default=s;},10:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getCorrectEventName=e.getCorrectPropertyName=void 0;var s={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},a={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function u(t){return Boolean(t.document)&&"function"==typeof t.document.createElement}e.getCorrectPropertyName=function(t,e){if(u(t)&&e in s){var r=t.document.createElement("div"),n=s[e],o=n.standard,i=n.prefixed;return o in r.style?o:i}return e},e.getCorrectEventName=function(t,e){if(u(t)&&e in a){var r=t.document.createElement("div"),n=a[e],o=n.standard,i=n.prefixed;return n.cssProperty in r.style?o:i}return e};},197:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}});}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r];}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r);};Object.defineProperty(e,"__esModule",{value:!0}),o(r(198),e),o(r(57),e),o(r(46),e),o(r(45),e),o(r(199),e);},198:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});},199:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});},45:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e;}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t;}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r);}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},a=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(e,"__esModule",{value:!0}),e.MDCLinearProgressFoundation=void 0;var s,u=r(10),c=r(0),f=r(46),l=(s=c.MDCFoundation,o(d,s),Object.defineProperty(d,"cssClasses",{get:function(){return f.cssClasses},enumerable:!1,configurable:!0}),Object.defineProperty(d,"strings",{get:function(){return f.strings},enumerable:!1,configurable:!0}),Object.defineProperty(d,"defaultAdapter",{get:function(){return{addClass:function(){},attachResizeObserver:function(){return null},forceLayout:function(){},getWidth:function(){return 0},hasClass:function(){return!1},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},setStyle:function(){},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),d.prototype.init=function(){var s=this;this.determinate=!this.adapter.hasClass(f.cssClasses.INDETERMINATE_CLASS),this.adapter.addClass(f.cssClasses.ANIMATION_READY_CLASS),this.progress=0,this.buffer=1,this.observer=this.adapter.attachResizeObserver(function(t){var e,r;if(!s.determinate)try{for(var n=a(t),o=n.next();!o.done;o=n.next()){var i=o.value;i.contentRect&&s.calculateAndSetDimensions(i.contentRect.width);}}catch(t){e={error:t};}finally{try{o&&!o.done&&(r=n.return)&&r.call(n);}finally{if(e)throw e.error}}}),!this.determinate&&this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth());},d.prototype.setDeterminate=function(t){if(this.determinate=t,this.determinate)return this.adapter.removeClass(f.cssClasses.INDETERMINATE_CLASS),this.adapter.setAttribute(f.strings.ARIA_VALUENOW,this.progress.toString()),this.adapter.setAttribute(f.strings.ARIA_VALUEMAX,"1"),this.adapter.setAttribute(f.strings.ARIA_VALUEMIN,"0"),this.setPrimaryBarProgress(this.progress),void this.setBufferBarProgress(this.buffer);this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth()),this.adapter.addClass(f.cssClasses.INDETERMINATE_CLASS),this.adapter.removeAttribute(f.strings.ARIA_VALUENOW),this.adapter.removeAttribute(f.strings.ARIA_VALUEMAX),this.adapter.removeAttribute(f.strings.ARIA_VALUEMIN),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1);},d.prototype.isDeterminate=function(){return this.determinate},d.prototype.setProgress=function(t){this.progress=t,this.determinate&&(this.setPrimaryBarProgress(t),this.adapter.setAttribute(f.strings.ARIA_VALUENOW,t.toString()));},d.prototype.getProgress=function(){return this.progress},d.prototype.setBuffer=function(t){this.buffer=t,this.determinate&&this.setBufferBarProgress(t);},d.prototype.getBuffer=function(){return this.buffer},d.prototype.open=function(){this.adapter.removeClass(f.cssClasses.CLOSED_CLASS),this.adapter.removeClass(f.cssClasses.CLOSED_ANIMATION_OFF_CLASS),this.adapter.removeAttribute(f.strings.ARIA_HIDDEN);},d.prototype.close=function(){this.adapter.addClass(f.cssClasses.CLOSED_CLASS),this.adapter.setAttribute(f.strings.ARIA_HIDDEN,"true");},d.prototype.isClosed=function(){return this.adapter.hasClass(f.cssClasses.CLOSED_CLASS)},d.prototype.handleTransitionEnd=function(){this.adapter.hasClass(f.cssClasses.CLOSED_CLASS)&&this.adapter.addClass(f.cssClasses.CLOSED_ANIMATION_OFF_CLASS);},d.prototype.destroy=function(){s.prototype.destroy.call(this),this.observer&&this.observer.disconnect();},d.prototype.restartAnimation=function(){this.adapter.removeClass(f.cssClasses.ANIMATION_READY_CLASS),this.adapter.forceLayout(),this.adapter.addClass(f.cssClasses.ANIMATION_READY_CLASS);},d.prototype.setPrimaryBarProgress=function(t){var e="scaleX("+t+")",r="undefined"!=typeof window?u.getCorrectPropertyName(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(r,e);},d.prototype.setBufferBarProgress=function(t){var e=100*t+"%";this.adapter.setBufferBarStyle(f.strings.FLEX_BASIS,e);},d.prototype.calculateAndSetDimensions=function(t){var e=t*f.animationDimensionPercentages.PRIMARY_HALF,r=t*f.animationDimensionPercentages.PRIMARY_FULL,n=t*f.animationDimensionPercentages.SECONDARY_QUARTER,o=t*f.animationDimensionPercentages.SECONDARY_HALF,i=t*f.animationDimensionPercentages.SECONDARY_FULL;this.adapter.setStyle("--mdc-linear-progress-primary-half",e+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-half-neg",-e+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full",r+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full-neg",-r+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter",n+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg",-n+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half",o+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg",-o+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full",i+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg",-i+"px"),this.restartAnimation();},d);function d(t){var e=s.call(this,i(i({},d.defaultAdapter),t))||this;return e.observer=null,e}e.MDCLinearProgressFoundation=l,e.default=l;},46:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.animationDimensionPercentages=e.strings=e.cssClasses=void 0,e.cssClasses={CLOSED_CLASS:"mdc-linear-progress--closed",CLOSED_ANIMATION_OFF_CLASS:"mdc-linear-progress--closed-animation-off",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed",ANIMATION_READY_CLASS:"mdc-linear-progress--animation-ready"},e.strings={ARIA_HIDDEN:"aria-hidden",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},e.animationDimensionPercentages={PRIMARY_HALF:.8367142,PRIMARY_FULL:2.00611057,SECONDARY_QUARTER:.37651913,SECONDARY_HALF:.84386165,SECONDARY_FULL:1.60277782};},57:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e;}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t;}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r);});Object.defineProperty(e,"__esModule",{value:!0}),e.MDCLinearProgress=void 0;var i,s=r(1),a=r(45),u=(i=s.MDCComponent,o(c,i),c.attachTo=function(t){return new c(t)},Object.defineProperty(c.prototype,"determinate",{set:function(t){this.foundation.setDeterminate(t);},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"progress",{set:function(t){this.foundation.setProgress(t);},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"buffer",{set:function(t){this.foundation.setBuffer(t);},enumerable:!1,configurable:!0}),c.prototype.open=function(){this.foundation.open();},c.prototype.close=function(){this.foundation.close();},c.prototype.initialSyncWithDOM=function(){var t=this;this.root.addEventListener("transitionend",function(){t.foundation.handleTransitionEnd();});},c.prototype.getDefaultFoundation=function(){var n=this,t={addClass:function(t){n.root.classList.add(t);},forceLayout:function(){n.root.getBoundingClientRect();},setBufferBarStyle:function(t,e){var r=n.root.querySelector(a.MDCLinearProgressFoundation.strings.BUFFER_BAR_SELECTOR);r&&r.style.setProperty(t,e);},setPrimaryBarStyle:function(t,e){var r=n.root.querySelector(a.MDCLinearProgressFoundation.strings.PRIMARY_BAR_SELECTOR);r&&r.style.setProperty(t,e);},hasClass:function(t){return n.root.classList.contains(t)},removeAttribute:function(t){n.root.removeAttribute(t);},removeClass:function(t){n.root.classList.remove(t);},setAttribute:function(t,e){n.root.setAttribute(t,e);},setStyle:function(t,e){n.root.style.setProperty(t,e);},attachResizeObserver:function(t){var e=window.ResizeObserver;if(e){var r=new e(t);return r.observe(n.root),r}return null},getWidth:function(){return n.root.offsetWidth}};return new a.MDCLinearProgressFoundation(t)},c);function c(){return null!==i&&i.apply(this,arguments)||this}e.MDCLinearProgress=u;}},o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r});},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=197);function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}var r,n;});

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("@material/circular-progress",[],e):"object"==typeof exports?exports["circular-progress"]=e():(t.mdc=t.mdc||{},t.mdc["circular-progress"]=e());}(window,function(){return n={},o.m=r={0:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCFoundation=void 0;var n=(Object.defineProperty(o,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(o,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(o,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),o.prototype.init=function(){},o.prototype.destroy=function(){},o);function o(t){void 0===t&&(t={}),this.adapter=t;}e.MDCFoundation=n,e.default=n;},1:function(t,e,r){"use strict";var o=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),s=[];try{for(;(void 0===e||0<e--)&&!(n=i.next()).done;)s.push(n.value);}catch(t){o={error:t};}finally{try{n&&!n.done&&(r=i.return)&&r.call(i);}finally{if(o)throw o.error}}return s},i=this&&this.__spreadArray||function(t,e){for(var r=0,n=e.length,o=t.length;r<n;r++,o++)t[o]=e[r];return t};Object.defineProperty(e,"__esModule",{value:!0}),e.MDCComponent=void 0;var n=r(0),s=(u.attachTo=function(t){return new u(t,new n.MDCFoundation({}))},u.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];},u.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},u.prototype.initialSyncWithDOM=function(){},u.prototype.destroy=function(){this.foundation.destroy();},u.prototype.listen=function(t,e,r){this.root.addEventListener(t,e,r);},u.prototype.unlisten=function(t,e,r){this.root.removeEventListener(t,e,r);},u.prototype.emit=function(t,e,r){var n;void 0===r&&(r=!1),"function"==typeof CustomEvent?n=new CustomEvent(t,{bubbles:r,detail:e}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,r,!1,e),this.root.dispatchEvent(n);},u);function u(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];this.root=t,this.initialize.apply(this,i([],o(r))),this.foundation=void 0===e?this.getDefaultFoundation():e,this.foundation.init(),this.initialSyncWithDOM();}e.MDCComponent=s,e.default=s;},168:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}});}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r];}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r);};Object.defineProperty(e,"__esModule",{value:!0}),o(r(169),e),o(r(170),e),o(r(90),e),o(r(89),e);},169:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});},170:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e;}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t;}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r);});Object.defineProperty(e,"__esModule",{value:!0}),e.MDCCircularProgress=void 0;var i,s=r(1),u=r(89),a=(i=s.MDCComponent,o(c,i),c.prototype.initialize=function(){this.determinateCircle=this.root.querySelector(u.MDCCircularProgressFoundation.strings.DETERMINATE_CIRCLE_SELECTOR);},c.attachTo=function(t){return new c(t)},Object.defineProperty(c.prototype,"determinate",{set:function(t){this.foundation.setDeterminate(t);},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"progress",{set:function(t){this.foundation.setProgress(t);},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"isClosed",{get:function(){return this.foundation.isClosed()},enumerable:!1,configurable:!0}),c.prototype.open=function(){this.foundation.open();},c.prototype.close=function(){this.foundation.close();},c.prototype.getDefaultFoundation=function(){var r=this,t={addClass:function(t){r.root.classList.add(t);},getDeterminateCircleAttribute:function(t){return r.determinateCircle.getAttribute(t)},hasClass:function(t){return r.root.classList.contains(t)},removeClass:function(t){r.root.classList.remove(t);},removeAttribute:function(t){r.root.removeAttribute(t);},setAttribute:function(t,e){r.root.setAttribute(t,e);},setDeterminateCircleAttribute:function(t,e){r.determinateCircle.setAttribute(t,e);}};return new u.MDCCircularProgressFoundation(t)},c);function c(){return null!==i&&i.apply(this,arguments)||this}e.MDCCircularProgress=a;},89:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e;}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t;}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r);}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.MDCCircularProgressFoundation=void 0;var s,u=r(0),a=r(90),c=(s=u.MDCFoundation,o(l,s),Object.defineProperty(l,"cssClasses",{get:function(){return a.cssClasses},enumerable:!1,configurable:!0}),Object.defineProperty(l,"strings",{get:function(){return a.strings},enumerable:!1,configurable:!0}),Object.defineProperty(l,"defaultAdapter",{get:function(){return{addClass:function(){},getDeterminateCircleAttribute:function(){return null},hasClass:function(){return!1},removeClass:function(){},removeAttribute:function(){},setAttribute:function(){},setDeterminateCircleAttribute:function(){}}},enumerable:!1,configurable:!0}),l.prototype.init=function(){this.closed=this.adapter.hasClass(a.cssClasses.CLOSED_CLASS),this.determinate=!this.adapter.hasClass(a.cssClasses.INDETERMINATE_CLASS),this.progress=0,this.determinate&&this.adapter.setAttribute(a.strings.ARIA_VALUENOW,this.progress.toString()),this.radius=Number(this.adapter.getDeterminateCircleAttribute(a.strings.RADIUS));},l.prototype.setDeterminate=function(t){this.determinate=t,this.determinate?(this.adapter.removeClass(a.cssClasses.INDETERMINATE_CLASS),this.setProgress(this.progress)):(this.adapter.addClass(a.cssClasses.INDETERMINATE_CLASS),this.adapter.removeAttribute(a.strings.ARIA_VALUENOW));},l.prototype.isDeterminate=function(){return this.determinate},l.prototype.setProgress=function(t){if(this.progress=t,this.determinate){var e=(1-this.progress)*(2*Math.PI*this.radius);this.adapter.setDeterminateCircleAttribute(a.strings.STROKE_DASHOFFSET,""+e),this.adapter.setAttribute(a.strings.ARIA_VALUENOW,this.progress.toString());}},l.prototype.getProgress=function(){return this.progress},l.prototype.open=function(){this.closed=!1,this.adapter.removeClass(a.cssClasses.CLOSED_CLASS),this.adapter.removeAttribute(a.strings.ARIA_HIDDEN);},l.prototype.close=function(){this.closed=!0,this.adapter.addClass(a.cssClasses.CLOSED_CLASS),this.adapter.setAttribute(a.strings.ARIA_HIDDEN,"true");},l.prototype.isClosed=function(){return this.closed},l);function l(t){return s.call(this,i(i({},l.defaultAdapter),t))||this}e.MDCCircularProgressFoundation=c,e.default=c;},90:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.strings=e.cssClasses=void 0,e.cssClasses={INDETERMINATE_CLASS:"mdc-circular-progress--indeterminate",CLOSED_CLASS:"mdc-circular-progress--closed"},e.strings={ARIA_HIDDEN:"aria-hidden",ARIA_VALUENOW:"aria-valuenow",DETERMINATE_CIRCLE_SELECTOR:".mdc-circular-progress__determinate-circle",RADIUS:"r",STROKE_DASHOFFSET:"stroke-dashoffset"};}},o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r});},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=168);function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}var r,n;});

let coreMenu = {

    _user: null,
    _system: null,
    _modules: null,
    _events: {},


    /**
     * Получение страницы кабинета
     * @returns {*}
     */
    getPageContent: function () {

        return coreTpl['menu/main.html'];
    },


    /**
     * Инициализация
     */
    init: function () {

        // Нужно для первого открытия страницы
        if (window.screen.width > 600 && localStorage.getItem('core3_drawer_toggle') === '1') {
            $('.page-menu').addClass('drawer-toggle');
            $('.page-menu .menu-drawer').css('transition', 'none 0s ease 0s');
            $('.page-menu .mdc-top-app-bar').css('transition', 'none 0s ease 0s');
        }


        let conf = localStorage.getItem('core3_conf');
        if (typeof conf === 'string') {
            try {
                conf = JSON.parse(conf);
                if (typeof conf.theme === 'object') {
                    this._setTheme(conf.theme);
                }
            } catch (e) {}
        }

        coreMenu.preloader.show();

        // Инициализация кнопок
        let buttons = document.querySelectorAll('.page-menu .mdc-button');
        for (let button of buttons) {
            new mdc.ripple.MDCRipple(button);
        }


        coreMenu._initInstall();

        $('.page-menu .main-content .main-wrapper').html('');

        // Добавление токена при любом ajax запросе
        $(document).ajaxSend(function(event, jqxhr, settings ) {
            if (settings.url.indexOf(settings.url) === 0) {
                let accessToken = coreTokens.getAccessToken();

                if (accessToken) {
                    jqxhr.setRequestHeader('Access-Token', accessToken);
                }
            }
        });


        $.ajax({
            url: coreMain.options.basePath + '/cabinet',
            method: "GET",
            dataType: "json",
            success: function (response) {
                if (typeof response.user !== 'object' ||
                    typeof response.user.id !== 'number' ||
                    typeof response.user.login !== 'string' ||
                    typeof response.user.name !== 'string' ||
                    typeof response.user.avatar !== 'string' ||
                    typeof response.system !== 'object' ||
                    typeof response.system.name !== 'string' ||
                    typeof response.modules !== 'object'
                ) {
                    console.warn(response);
                    CoreUI.alert.danger('Ошибка', 'Попробуйте обновить страницу или обратитесь к администратору');

                } else {
                    coreMenu._user    = response.user;
                    coreMenu._system  = response.system;
                    coreMenu._modules = response.modules;

                    coreMenu._renderMenu();
                    coreMenu.preloader.hide();

                    let uri = location.hash.substring(1) !== '' && location.hash.substring(1) !== '/'
                        ? '/mod' + location.hash.substring(1)
                        : '/home';

                    coreMenu.load(uri);
                }
            },
            error: function (response) {
                if (response.status === 403) {
                    coreTokens.clearAccessToken();
                    coreMain.viewPage('auth');

                } else if (response.status === 0) {
                    CoreUI.alert.danger('Ошибка', 'Проверьте подключение к интернету');

                } else {
                    CoreUI.alert.danger('Ошибка', 'Обновите приложение или обратитесь к администратору');
                }
            }
        });
    },


    /**
     *
     */
    toggleFullscreen: function () {

        if ( ! document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    },


    /**
     * Перезагрузка содержимого страницы
     */
    reload: function () {
        coreMenu.load('/mod' + location.hash.substring(1));
    },


    /**
     * Загрузка содержимого модуля
     * @param url
     */
    load: function (url) {

        url = url || '/home';

        coreMenu.preloader.show();

        $.ajax({
            url: coreMain.options.basePath + url,
            method: "GET",
            dataType: 'text',
            success: function (response, textStatus, jqXHR) {
                coreMenu.preloader.hide();

                let params = coreTools.getParams(url);
                coreMenu._setActiveModule(params.module, params.section);

                let contentType = jqXHR.getResponseHeader('Content-type');
                let content     = response;

                // Обработка json
                if (/^application\/json/.test(contentType)) {
                    try {
                        content = coreMenu._renderContent(JSON.parse(response));

                    } catch (e) {
                        console.warn(e);
                    }
                }

                $('.page-menu .main-content .main-wrapper').html(content)
                    .css({ 'opacity': '0', 'margin-top': '15px' })
                    .animate(
                        { marginTop: 0, opacity: 1, },
                        {
                            duration: 235,
                            specialEasing: { width: "linear", height: "easeOutBounce" },
                            complete: function() {
                                $(this).css({ 'opacity': '', 'margin-top': '' });
                            }
                        }
                    );


                coreMenu._trigger('shown.load.core3', this, [ url ]);
            },
            error: function (response) {
                coreMenu.preloader.hide();

                if (response.status === 403) {
                    coreTokens.clearAccessToken();
                    coreMain.viewPage('auth');

                } else if (response.status === 0) {
                    CoreUI.alert.danger('Ошибка', 'Проверьте подключение к интернету');

                } else {
                    CoreUI.alert.danger('Ошибка', 'Обновите приложение или обратитесь к администратору');
                }
            }
        });
    },


    /**
     * @param action
     * @param options
     * @returns {boolean}
     */
    loader: {

        /**
         * @param options
         */
        show: function (options) {
            if ($('#loader')[0]) {
                return false;
            }

            $('.page-menu > header').append(coreTpl['menu/loader.html']);

            let loaderElement = $('#loader .loader-progress');
            let linearProgress   = new mdc['linear-progress'].MDCLinearProgress(loaderElement[0]);
            linearProgress.determinate = false;
        },


        /**
         *
         */
        hide: function () {
            $('#loader').remove();
        }
    },


    /**
     * @param action
     * @param options
     * @returns {boolean}
     */
    preloader: {

        /**
         * @param options
         * @returns {boolean}
         */
        show: function (options) {
            if ($('#preloader')[0]) {
                this.hide();
            }

            options = typeof options === 'object' ? options : {};

            $('.page-menu').prepend(ejs.render(coreTpl['menu/preloader.html'], {
                text: options.text || 'Загрузка...'
            }));

            let element            = $('#preloader .mdc-circular-progress');
            const circularProgress = new mdc['circular-progress'].MDCCircularProgress(element[0]);
            circularProgress.determinate = false;
            circularProgress.progress = 0;
        },


        /**
         *
         */
        hide: function () {

            $('#preloader').fadeOut('fast', function () {
                $(this).remove();
            });
        }
    },


    /**
     * @param eventName
     * @param callback
     * @param context
     * @param singleExec
     */
    on: function(eventName, callback, context, singleExec) {
        if (typeof this._events[eventName] !== 'object') {
            this._events[eventName] = [];
        }
        this._events[eventName].push({
            context : context || this,
            callback : callback,
            singleExec : singleExec
        });
    },


    /**
     * @param data
     * @private
     */
    _renderContent: function (data) {

        let result          = "";
        let alloyComponents = [
            'coreui.table',
            'coreui.form',
            'coreui.layout',
            'coreui.panel',
            'coreui.tabs',
            'coreui.info',
            'coreui.chart',
        ];

        if (typeof data === 'string' ||
            typeof data === 'bigint' ||
            typeof data === 'number' ||
            typeof data === 'symbol'
        ) {
            result = data;

        } else if (data instanceof Object) {
            if ( ! Array.isArray(data)) {
                data = [ data ];
            }

            for (let i = 0; i < data.length; i++) {
                if (typeof data[i] === 'string') {
                    result += data[i];

                } else {
                    if ( ! Array.isArray(data[i]) &&
                        data[i].hasOwnProperty('component') &&
                        alloyComponents.indexOf(data[i].component) >= 0
                    ) {
                        let name     = data[i].component.split('.')[1];
                        let instance = CoreUI[name].create(data[i]);
                        result += instance.render();

                        this.on('shown.load.core3', instance.initEvents, instance, true);

                    } else {
                        result += JSON.stringify(data[i]);
                    }
                }
            }

        } else {
            result = JSON.stringify(data);
        }

        return result;
    },


    /**
     *
     * @param name
     * @param context
     * @param params
     */
    _trigger: function(name, context, params) {

        if (this._events.hasOwnProperty(name) && this._events[name].length > 0) {

            for (let i = 0; i < this._events[name].length; i++) {
                let callback = this._events[name][i].callback;

                context = this._events[name][i].context || context;

                callback.apply(context, params);

                if (this._events[name][i].singleExec) {
                    this._events[name].splice(i, 1);
                    i--;
                }
            }
        }
    },


    /**
     *
     */
    _renderMenu: function () {

        $('.page-menu .system-title').text(coreMenu._system.name);

        if (typeof coreMenu._system.conf === 'object') {
            localStorage.setItem('core3_conf', JSON.stringify(coreMenu._system.conf));

            if (typeof coreMenu._system.conf.theme === 'object') {
                this._setTheme(coreMenu._system.conf.theme);
            }
        }

        if (Object.values(coreMenu._modules).length > 0) {
            let params = coreTools.getParams();

            $('.page-menu > aside .menu-list.level-1').empty();

            $.each(coreMenu._modules, function (key, module) {
                if (typeof module.name !== 'string' || ! module.name ||
                    typeof module.title !== 'string' || ! module.title
                ) {
                    CoreUI.notice.danger('Не удалось показать некоторые модули из за ошибок!');
                    return true;
                }

                module.index = 'index';


                if ( ! module.isset_index_page && module.sections.length > 0) {
                    $.each(module.sections, function (key, section) {
                        module.index = section.name;
                        return false;
                    });
                }

                $('.page-menu > aside .menu-list.level-1').append(ejs.render(coreTpl['menu/module.html'], {
                    module: module
                }));

                $('.page-menu > aside .core-module.core-module-' + module.name).hover(function (){
                    let level2 = $('.level-2', this);

                    if (level2[0]) {
                        level2.css('top', $(this).offset().top);
                    }
                });
            });


            coreMenu._setActiveModule(params.module, params.section);


            let menuItems = document.querySelectorAll('.page-menu .menu-list-item a');
            for (let menuItem of menuItems) {
                new mdc.ripple.MDCRipple(menuItem);

                $(menuItem).on('click', function (event) {
                    if (event.button === 0 && ! event.ctrlKey) {
                        let module  = $(this).data('module');
                        let section = $(this).data('section');

                        if (location.hash.substring(1) === '/' + module + '/' + section) {
                            if (window.screen.width < 600) {
                                coreMenu._drawerToggle();
                            }

                            coreMenu.load('/mod/' + module + '/' + section);
                        }
                    }
                });
            }
            let buttons = document.querySelectorAll('.page-menu .menu-list-item .menu-icon-button');
            for (let button of buttons) {
                new mdc.ripple.MDCRipple(button);
                $(button).on('click', function () {
                    $(this).parent().parent().toggleClass('menu-item-nested-open');
                });
            }
        }


        $('.page-menu .mdc-top-app-bar__section--align-end').empty();
        $('.page-menu .mdc-top-app-bar__section--align-end').append(ejs.render(coreTpl['menu/navbar.html'], {
            user: coreMenu._user
        }));

        // Выход
        $('.page-menu .menu-logout').on('click', function (e) {
            e.preventDefault();

            CoreUI.alert.warning('Уверены, что хотите выйти?', '', {
                btnAcceptText: "Да",
                btnAcceptColor: "#F57C00",
                btnAcceptEvent: coreAuth.logout,
                btnRejectText: "Отмена"
            });
        });

        $('.page-menu .open-menu, .page-menu .menu-drawer-scrim').on('click', function () {
            coreMenu._drawerToggle();
        });

        $('.page-menu .module-home').on('click', function (event) {
            if (event.button === 0 && ! event.ctrlKey)  {
                coreMenu.load('/home');

                if (window.screen.width < 600) {
                    coreMenu._drawerToggle();
                    console.log(11);
                }
            }
        });

        let buttons = document.querySelectorAll('.page-menu .mdc-ripple-surface');
        for (let button of buttons) {
            new mdc.ripple.MDCRipple(button);
        }


        coreMenu._initSwipe($(".page-menu .menu-drawer-swipe")[0], function (direction) {
            if (direction === "right") {
                coreMenu._drawerToggle();

            } else if (direction === "left") {
                coreMenu._drawerToggle();
            }
        });
    },


    /**
     * @param moduleName
     * @param sectionName
     */
    _setActiveModule: function (moduleName, sectionName) {

        $('.page-menu > aside .core-module')
            .removeClass('menu-module-index--activated')
            .removeClass('menu-module--activated');

        $('.page-menu > aside .core-module-section')
            .removeClass('menu-module-section--activated');

        $('.page-menu > aside .core-module-section-index')
            .removeClass('menu-module-section--activated');

        $('.page-menu > aside .core-module-' + moduleName)
            .addClass('menu-module--activated')
            .addClass('menu-item-nested-open');

        if (sectionName === 'index') {
            $('.page-menu > aside .core-module.core-module-' + moduleName)
                .addClass('menu-module-index--activated');

            $('.page-menu > aside .core-module-' + moduleName + ' .core-module-section-index')
                .addClass('menu-module-section--activated');
        }

        $('.page-menu > aside .core-module-' + moduleName + '-' + sectionName).addClass('menu-module-section--activated');


        if ( ! moduleName && ! sectionName) {
            $('.page-menu .module-home').addClass('active');
        } else {
            $('.page-menu .module-home').removeClass('active');
        }


        /**
         * @param moduleName
         * @param sectionName
         * @returns {*[]}
         */
        function getModuleTitles (moduleName, sectionName) {

            let title = [];

            $.each(coreMenu._modules, function (key, module) {
                if (module.name === moduleName) {

                    title.push(module.title);

                    if (module.sections &&
                        module.sections.length > 0
                    ) {
                        $.each(module.sections, function (key, section) {
                            if (section.name === sectionName) {
                                title.push(section.title);
                                return false;
                            }
                        });
                    }

                    return false;
                }
            });

            return title;
        }

        let titles = getModuleTitles(moduleName, sectionName);

        $('header .mdc-top-app-bar__title').text(titles[0] || '');
        $('header .mdc-top-app-bar__subtitle').text(titles[1] || '');

        let title = coreMenu._system.name;
        title += titles.hasOwnProperty(0)
            ? ' - ' + titles[0] + (titles.hasOwnProperty(1) ? ' - ' + titles[1] : '')
            : '';

        $('head title').text(title);
    },


    /**
     * @param target
     * @param callback
     */
    _initSwipe: function (target, callback) {

        document.addEventListener('touchstart', handleTouchStart, false);
        document.addEventListener('touchmove', handleTouchMove, false);

        let xDown = null;
        let yDown = null;

        /**
         * @param evt
         */
        function handleTouchStart(evt) {
            xDown = evt.touches[0].clientX;
            yDown = evt.touches[0].clientY;
        }

        /**
         * @param evt
         */
        function handleTouchMove(evt) {
            if ( ! xDown || ! yDown ) {
                return;
            }


            let xUp = evt.touches[0].clientX;
            let yUp = evt.touches[0].clientY;

            let xDiff = xDown - xUp;
            let yDiff = yDown - yUp;

            if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
                if ( xDiff > 0 ) {
                    if (target === evt.target) {
                        callback('left');
                    }
                } else {
                    if (target === evt.target) {
                        callback('right');
                    }
                }
            } else {
                if ( yDiff > 0 ) {
                    if (target === evt.target) {
                        callback('up');
                    }
                } else {
                    if (target === evt.target) {
                        callback('down');
                    }
                }
            }

            xDown = null;
            yDown = null;
        }
    },


    /**
     * @private
     */
    _drawerToggle:  function () {

        // Нужно для первого открытия страницы
        $('.page-menu .menu-drawer').css('transition', '');
        $('.page-menu .mdc-top-app-bar').css('transition', '');


        let menu = $('.page.page-menu');

        if (menu.hasClass('drawer-toggle')) {
            localStorage.setItem('core3_drawer_toggle', 0);
        } else {
            localStorage.setItem('core3_drawer_toggle', 1);
        }

        menu.toggleClass('drawer-toggle');
    },


    /**
     * Установка
     */
    _initInstall: function () {

        let install = function (event) {
            event.preventDefault();

            let button = $('.page-menu .install-button');

            if (event.platforms.includes('web')) {
                button.show();
                button.on('click', function () {
                    event.prompt();
                });
            }

            event.userChoice.then(function(choiceResult) {
                switch (choiceResult.outcome) {
                    case "accepted" :
                        button.hide();
                        break;

                    case "dismissed" :
                        button.css('opacity', '0.7');
                        break;
                }
            });
        };

        if (coreMain.install.event) {
            install(coreMain.install.event);
        } else {
            coreMain.install.promise.then(install);
        }
    },


    /**
     * Установка темы
     * @param {object} theme
     * @private
     */
    _setTheme: function (theme) {

        let styles = [];

        if (typeof theme.main === 'object' &&
            typeof theme.main.bg_color === 'string' &&
            theme.main.bg_color
        ) {
            styles.push('--menu-drawer: ' + theme.main.bg_color + ';');
        }

        if (typeof theme.main === 'object' &&
            typeof theme.main.text_color === 'string' &&
            theme.main.text_color
        ) {
            styles.push('--menu-drawer-text:' + theme.main.text_color + ';');
        }

        if (styles.length > 0) {
            let content   = ':root{' + styles.join('') + '}';
            let coreTheme = $('head #theme-main');

            if ( ! coreTheme[0] || content !== coreTheme.html()) {
                if (coreTheme[0]) {
                    coreTheme.remove();
                }

                $('head').append('<style id="theme-main">' + content + '</style>');
            }
        }
    }
};


$(function () {

    coreMain.on('hashchange', function () {

        if ($('.page.page-menu')[0]) {
            if (window.screen.width < 600) {
                coreMenu._drawerToggle();
            }

            coreMenu.load('/mod' + location.hash.substring(1));
        }
    });
});

let core$1 = {

    main: coreMain,
    auth: coreAuth$1,
    menu: coreMenu,
    tools: coreTools,
    lang: {}
};

core$1.lang.en = {
    'Вход' : 'Login',
};

return core$1;

})));