/* v1.14.0-pre
Updated : 2022-01-19 */
!function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,n,e){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(n,"__esModule",{value:!0}),n.createTrackPixelHtml=function(t){if(!t)return"";t=encodeURI(t);return'<div style="position:absolute;left:0px;top:0px;visibility:hidden;"><img src="'.concat(t,'"></div>')},n.getCreativeComment=function(t){return document.createComment("Creative ".concat(t.crid," served by Prebid.js Header Bidding"))},n.getCreativeCommentMarkup=function(t){var e=n.getCreativeComment(t),t=document.createElement("div");return t.appendChild(e),t.innerHTML},n.getUUID=function(){var n=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"===t?e:3&e|8).toString(16)})},n.loadScript=function(t,e,n,r){var t=t.document,o=t.createElement("script");o.type="text/javascript",n&&"function"==typeof n&&(o.readyState?o.onreadystatechange=function(){"loaded"!==o.readyState&&"complete"!==o.readyState||(o.onreadystatechange=null,n())}:o.onload=function(){n()});r&&"function"==typeof r&&(o.onerror=function(){r()});o.src=e;e=t.getElementsByTagName("head");(e=e.length?e:t.getElementsByTagName("body")).length&&(e=e[0]).insertBefore(o,e.firstChild);return o},n.parseUrl=function(t){var e=document.createElement("a");return e.href=decodeURIComponent(t),{href:e.href,protocol:(e.protocol||"").replace(/:$/,""),hostname:e.hostname,port:+e.port,pathname:e.pathname.replace(/^(?!\/)/,"/"),hash:(e.hash||"").replace(/^#/,""),host:(e.host||window.location.host).replace(/:(443|80)$/,"")}},n.sendRequest=function(t,e){var n=new XMLHttpRequest;n.addEventListener("load",function(){e(n.responseText)}),n.open("GET",t),n.send()},n.transformAuctionTargetingData=function(e){var n={hb_adid:"adId",hb_cache_host:"cacheHost",hb_cache_path:"cachePath",hb_cache_id:"uuid",hb_format:"mediaType",hb_env:"env",hb_size:"size",hb_pb:"hbPb"};function t(t){return e[t]&&(a(e[t],"Object")&&0<Object.keys(e[t]).length||c(e[t])&&""!==e[t])}var r={},o={};t("targetingMap")?o=function(e){var n={};return Object.keys(e).forEach(function(t){Array.isArray(e[t])&&0<e[t].length&&(n[t]=e[t][0])}),n}(e.targetingMap):t("targetingKeywords")&&(o=function(t){var n={};return 0<(t=t.split(",")).length&&t.forEach(function(t){var e=t.split(":");2===e.length&&(t=e[0],e=e[1],n[t]=e)}),n}(e.targetingKeywords));return function(e){Object.keys(e).forEach(function(t){r[n[t]||t]=e[t]})}(o),Object.keys(e).forEach(function(t){"targetingMap"!==t&&"targetingKeywords"!==t&&c(e[t])&&""!==e[t]&&(r[t]=e[t])}),r},n.triggerPixel=function(t,e){var n=new Image;e&&"function"==typeof e&&(n.addEventListener("load",e),n.addEventListener("error",e));n.src=t},n.writeAdHtml=function(t){o(document.body,t,{error:console.error})},n.writeAdUrl=function(t,e,n){e=r.getEmptyIframe(n,e);e.src=t,document.body.appendChild(e)};var r=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==i(t)&&"function"!=typeof t)return{default:t};e=s(e);if(e&&e.has(t))return e.get(t);var n,r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(n in t){var a;"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&((a=o?Object.getOwnPropertyDescriptor(t,n):null)&&(a.get||a.set)?Object.defineProperty(r,n,a):r[n]=t[n])}r.default=t,e&&e.set(t,r);return r}(e(3));function s(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(s=function(t){return t?n:e})(t)}var o=e(4);function a(t,e){return Object.prototype.toString.call(t)==="[object "+e+"]"}function c(t){return a(t,"String")}},function(t,e,n){"use strict";n=n(2);window.pbNativeTag=window.pbNativeTag||{};n=(0,n.newNativeRenderManager)(window);window.pbNativeTag.renderNativeAd=n.renderNativeAd},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.newNativeRenderManager=function(n){var r;function o(t,e){""===t?console.warn("Prebid tracking event was missing 'adId'.  Was adId macro set in the HTML attribute "+d+"on the ad's anchor element"):(t={message:"Prebid Native",adId:t},"click"===e&&(t.action="click"),n.parent.postMessage(JSON.stringify(t),r))}function a(){for(var t=n.document.getElementsByClassName(l)||[],e=0;e<t.length;e++)t[e].addEventListener("click",function(t){o(window.pbNativeData.adId,"click")},!0)}var i=!1;function t(){var t=$sf.ext.geom().self,e={push:!0,b:0},n=document.getElementById("container");n?(t=(n.offsetHeight||50)-t.h)<0||(e.b=t,$sf.ext.expand(e)):setTimeout(s,500)}function s(){(i&&(0<arguments.length&&void 0!==arguments[0]&&arguments[0])||!i)&&($sf.ext.collapse(),i=!1,setTimeout(t,0))}return{renderNativeAd:function(t){window.pbNativeData=t;(0,c.transformAuctionTargetingData)(t);var e,n=(0,u.newNativeAssetManager)(window);t.hasOwnProperty("adId")?(e=(0,c.parseUrl)(window.pbNativeData.pubUrl),r=e.protocol+"://"+e.host,t.hasOwnProperty("rendererUrl")&&!t.rendererUrl.match(/##.*##/i)&&((e=document.createElement("SCRIPT")).src=t.rendererUrl,e.id="pb-native-renderer",document.body.appendChild(e)),n.loadAssets(t.adId,a),a(),o(t.adId,"impression"),$sf.ext.register(160,150,function(t,e){"geom-update"===t&&s(),"expanded"===t&&(i=!0)}),s()):console.warn("Prebid Native Tag object was missing 'adId'.")}}};var c=n(0),u=n(5),l="pb-click",d="pbAdId"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getEmptyIframe=function(t,e){var n=document.createElement("iframe");return n.setAttribute("frameborder",0),n.setAttribute("scrolling","no"),n.setAttribute("marginheight",0),n.setAttribute("marginwidth",0),n.setAttribute("TOPMARGIN",0),n.setAttribute("LEFTMARGIN",0),n.setAttribute("allowtransparency","true"),n.setAttribute("width",e),n.setAttribute("height",t),n},e.insertElement=function(t,e,n){e=e||document,n=n?e.getElementsByTagName(n):e.getElementsByTagName("head");try{(n=n.length?n:e.getElementsByTagName("body")).length&&(n=n[0]).insertBefore(t,n.firstChild)}catch(t){}}},function(t,e,n){var r;r=function(){return o={},n.m=r=[function(t,e,n){"use strict";var n=n(1),n=(n=n)&&n.__esModule?n:{default:n};t.exports=n.default},function(t,e,n){"use strict";e.__esModule=!0;var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,r=arguments[e];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e.default=f;var e=n(2),c=(e=e)&&e.__esModule?e:{default:e},o=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}}(n(4));function u(){}var a={afterAsync:u,afterDequeue:u,afterStreamStart:u,afterWrite:u,autoFix:!0,beforeEnqueue:u,beforeWriteToken:function(t){return t},beforeWrite:function(t){return t},done:u,error:function(t){throw new Error(t.msg)},releaseAsync:!1},l=0,i=[],d=null;function p(){var t,e=i.shift();e&&((t=o.last(e)).afterDequeue(),e.stream=function(t,e,r){(d=new c.default(t,r)).id=l++,d.name=r.name||d.id,f.streams[d.name]=d;var n=t.ownerDocument,o={close:n.close,open:n.open,write:n.write,writeln:n.writeln};function a(t){t=r.beforeWrite(t),d.write(t),r.afterWrite(t)}s(n,{close:u,open:u,write:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return a(e.join(""))},writeln:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return a(e.join("")+"\n")}});var i=d.win.onerror||u;return d.win.onerror=function(t,e,n){r.error({msg:t+" - "+e+": "+n}),i.apply(d.win,[t,e,n])},d.write(e,function(){s(n,o),d.win.onerror=i,r.done(),d=null,p()}),d}.apply(void 0,e),t.afterStreamStart())}function f(t,e,n){if(o.isFunction(n))n={done:n};else if("clear"===n)return i=[],d=null,void(l=0);n=o.defaults(n,a);var r=[t=/^#/.test(t)?window.document.getElementById(t.substr(1)):t.jquery?t[0]:t,e,n];return t.postscribe={cancel:function(){r.stream?r.stream.abort():r[1]=u}},n.beforeEnqueue(r),i.push(r),d||p(),t.postscribe}s(f,{streams:{},queue:i,WriteStream:c.default})},function(t,e,n){"use strict";e.__esModule=!0;var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,r=arguments[e];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},r=n(3),o=(r=r)&&r.__esModule?r:{default:r},a=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}}(n(4));var l="data-ps-",d="ps-style",p="ps-script";function i(t,e){e=t.getAttribute(l+e);return a.existy(e)?String(e):e}function c(t,e,n){n=2<arguments.length&&void 0!==n?n:null,e=l+e;a.existy(n)&&""!==n?t.setAttribute(e,n):t.removeAttribute(e)}u.prototype.write=function(){var t;for((t=this.writeQueue).push.apply(t,arguments);!this.deferredRemote&&this.writeQueue.length;){var e=this.writeQueue.shift();a.isFunction(e)?this._callFunction(e):this._writeImpl(e)}},u.prototype._callFunction=function(t){var e={type:"function",value:t.name||t.toString()};this._onScriptStart(e),t.call(this.win,this.doc),this._onScriptDone(e)},u.prototype._writeImpl=function(t){this.parser.append(t);for(var e=void 0,n=void 0,r=void 0,o=[];(e=this.parser.readToken())&&!(n=a.isScript(e))&&!(r=a.isStyle(e));)(e=this.options.beforeWriteToken(e))&&o.push(e);0<o.length&&this._writeStaticTokens(o),n&&this._handleScriptToken(e),r&&this._handleStyleToken(e)},u.prototype._writeStaticTokens=function(t){t=this._buildChunk(t);return t.actual?(t.html=this.proxyHistory+t.actual,this.proxyHistory+=t.proxy,this.proxyRoot.innerHTML=t.html,this._walkChunk(),t):null},u.prototype._buildChunk=function(t){for(var e=this.actuals.length,n=[],r=[],o=[],a=t.length,i=0;i<a;i++){var s,c=t[i],u=c.toString();n.push(u),c.attrs?/^noscript$/i.test(c.tagName)||(s=e++,r.push(u.replace(/(\/?>)/," "+l+"id="+s+" $1")),c.attrs.id!==p&&c.attrs.id!==d&&o.push("atomicTag"===c.type?"":"<"+c.tagName+" "+l+"proxyof="+s+(c.unary?" />":">"))):(r.push(u),o.push("endTag"===c.type?u:""))}return{tokens:t,raw:n.join(""),actual:r.join(""),proxy:o.join("")}},u.prototype._walkChunk=function(){for(var t,e=[this.proxyRoot];a.existy(t=e.shift());){var n=1===t.nodeType;n&&i(t,"proxyof")||(n&&c(this.actuals[i(t,"id")]=t,"id"),(n=t.parentNode&&i(t.parentNode,"proxyof"))&&this.actuals[n].appendChild(t)),e.unshift.apply(e,a.toArray(t.childNodes))}},u.prototype._handleScriptToken=function(t){var e=this,n=this.parser.clear();n&&this.writeQueue.unshift(n),t.src=t.attrs.src||t.attrs.SRC,(t=this.options.beforeWriteToken(t))&&(t.src&&this.scriptStack.length?this.deferredRemote=t:this._onScriptStart(t),this._writeScriptToken(t,function(){e._onScriptDone(t)}))},u.prototype._handleStyleToken=function(t){var e=this.parser.clear();e&&this.writeQueue.unshift(e),t.type=t.attrs.type||t.attrs.TYPE||"text/css",(t=this.options.beforeWriteToken(t))&&this._writeStyleToken(t),e&&this.write()},u.prototype._writeStyleToken=function(t){var e=this._buildStyle(t);this._insertCursor(e,d),t.content&&(e.styleSheet&&!e.sheet?e.styleSheet.cssText=t.content:e.appendChild(this.doc.createTextNode(t.content)))},u.prototype._buildStyle=function(t){var n=this.doc.createElement(t.tagName);return n.setAttribute("type",t.type),a.eachKey(t.attrs,function(t,e){n.setAttribute(t,e)}),n},u.prototype._insertCursor=function(t,e){this._writeImpl('<span id="'+e+'"/>');e=this.doc.getElementById(e);e&&e.parentNode.replaceChild(t,e)},u.prototype._onScriptStart=function(t){t.outerWrites=this.writeQueue,this.writeQueue=[],this.scriptStack.unshift(t)},u.prototype._onScriptDone=function(t){t===this.scriptStack[0]?(this.scriptStack.shift(),this.write.apply(this,t.outerWrites),!this.scriptStack.length&&this.deferredRemote&&(this._onScriptStart(this.deferredRemote),this.deferredRemote=null)):this.options.error({msg:"Bad script nesting or script finished twice"})},u.prototype._writeScriptToken=function(t,e){var n=this._buildScript(t),r=this._shouldRelease(n),o=this.options.afterAsync;t.src&&(n.src=t.src,this._scriptLoadHandler(n,r?o:function(){e(),o()}));try{this._insertCursor(n,p),n.src&&!r||e()}catch(t){this.options.error(t),e()}},u.prototype._buildScript=function(t){var n=this.doc.createElement(t.tagName);return a.eachKey(t.attrs,function(t,e){n.setAttribute(t,e)}),t.content&&(n.text=t.content),n},u.prototype._scriptLoadHandler=function(e,n){function r(){e=e.onload=e.onreadystatechange=e.onerror=null}var o=this.options.error;function t(){r(),null!=n&&n(),n=null}function a(t){r(),o(t),null!=n&&n(),n=null}function i(t,e){var n=t["on"+e];null!=n&&(t["_on"+e]=n)}i(e,"load"),i(e,"error"),s(e,{onload:function(){if(e._onload)try{e._onload.apply(this,Array.prototype.slice.call(arguments,0))}catch(t){a({msg:"onload handler failed "+t+" @ "+e.src})}t()},onerror:function(){if(e._onerror)try{e._onerror.apply(this,Array.prototype.slice.call(arguments,0))}catch(t){return void a({msg:"onerror handler failed "+t+" @ "+e.src})}a({msg:"remote script failed "+e.src})},onreadystatechange:function(){/^(loaded|complete)$/.test(e.readyState)&&t()}})},u.prototype._shouldRelease=function(t){return!/^script$/i.test(t.nodeName)||!!(this.options.releaseAsync&&t.src&&t.hasAttribute("async"))},n=u;function u(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),this.root=t,this.options=e,this.doc=t.ownerDocument,this.win=this.doc.defaultView||this.doc.parentWindow,this.parser=new o.default("",{autoFix:e.autoFix}),this.actuals=[t],this.proxyHistory="",this.proxyRoot=this.doc.createElement(t.nodeName),this.scriptStack=[],this.writeQueue=[],c(this.proxyRoot,"proxyof",0)}e.default=n},function(t,e,n){var r;r=function(){return o={},n.m=r=[function(t,e,n){"use strict";var n=n(1),n=(n=n)&&n.__esModule?n:{default:n};t.exports=n.default},function(t,e,n){"use strict";e.__esModule=!0;var i=c(n(2)),r=c(n(3)),o=n(6),s=(o=o)&&o.__esModule?o:{default:o},a=n(5);function c(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}var u,l={comment:/^<!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},d=(p.prototype.append=function(t){this.stream+=t},p.prototype.prepend=function(t){this.stream=t+this.stream},p.prototype._readTokenImpl=function(){var t=this._peekTokenImpl();if(t)return this.stream=this.stream.slice(t.length),t},p.prototype._peekTokenImpl=function(){for(var t in l)if(l.hasOwnProperty(t)&&l[t].test(this.stream)){t=r[t](this.stream);if(t)return"startTag"===t.type&&/script|style/i.test(t.tagName)?null:(t.text=this.stream.substr(0,t.length),t)}},p.prototype.peekToken=function(){return this._peekToken()},p.prototype.readToken=function(){return this._readToken()},p.prototype.readTokens=function(t){for(var e;e=this.readToken();)if(t[e.type]&&!1===t[e.type](e))return},p.prototype.clear=function(){var t=this.stream;return this.stream="",t},p.prototype.rest=function(){return this.stream},p);function p(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),this.stream=e;var r,o=!1,a={};for(r in i)i.hasOwnProperty(r)&&(n.autoFix&&(a[r+"Fix"]=!0),o=o||a[r+"Fix"]);o?(this._readToken=(0,s.default)(this,a,function(){return t._readTokenImpl()}),this._peekToken=(0,s.default)(this,a,function(){return t._peekTokenImpl()})):(this._readToken=this._readTokenImpl,this._peekToken=this._peekTokenImpl)}for(u in(e.default=d).tokenToString=function(t){return t.toString()},d.escapeAttributes=function(t){var e,n={};for(e in t)t.hasOwnProperty(e)&&(n[e]=(0,a.escapeQuotes)(t[e],null));return n},d.supports=i)i.hasOwnProperty(u)&&(d.browserHasFlaw=d.browserHasFlaw||!i[u]&&u)},function(t,e){"use strict";var n=!(e.__esModule=!0),r=!1,o=window.document.createElement("div");try{var a="<P><I></P></I>";o.innerHTML=a,e.tagSoup=n=o.innerHTML!==a}catch(t){e.tagSoup=n=!1}try{o.innerHTML="<P><i><P></P></i></P>",e.selfClose=r=2===o.childNodes.length}catch(t){e.selfClose=r=!1}o=null,e.tagSoup=n,e.selfClose=r},function(t,e,n){"use strict";e.__esModule=!0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.comment=function(t){var e=t.indexOf("--\x3e");if(0<=e)return new i.CommentToken(t.substr(4,e-1),e+3)},e.chars=function(t){var e=t.indexOf("<");return new i.CharsToken(0<=e?e:t.length)},e.startTag=r,e.atomicTag=function(t){var e=r(t);if(e){t=t.slice(e.length);if(t.match(new RegExp("</\\s*"+e.tagName+"\\s*>","i"))){t=t.match(new RegExp("([\\s\\S]*?)</\\s*"+e.tagName+"\\s*>","i"));if(t)return new i.AtomicTagToken(e.tagName,t[0].length+e.length,e.attrs,e.booleanAttrs,t[1])}}},e.endTag=function(t){t=t.match(s.endTag);if(t)return new i.EndTagToken(t[1],t[0].length)};var i=n(4),s={startTag:/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,endTag:/^<\/([\-A-Za-z0-9_]+)[^>]*>/,attr:/(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,fillAttr:/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i};function r(t){var n,r,o;if(-1!==t.indexOf(">")){t=t.match(s.startTag);if(t){t=(n={},r={},o=t[2],t[2].replace(s.attr,function(t,e){arguments[2]||arguments[3]||arguments[4]||arguments[5]?arguments[5]?(n[arguments[5]]="",r[arguments[5]]=!0):n[e]=arguments[2]||arguments[3]||arguments[4]||s.fillAttr.test(e)&&e||"":n[e]="",o=o.replace(t,"")}),{v:new i.StartTagToken(t[1],t[0].length,n,r,!!t[3],o.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""))});if("object"===(void 0===t?"undefined":a(t)))return t.v}}}},function(t,e,n){"use strict";e.__esModule=!0,e.EndTagToken=e.AtomicTagToken=e.StartTagToken=e.TagToken=e.CharsToken=e.CommentToken=e.Token=void 0;var a=n(5);function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}e.Token=function t(e,n){i(this,t),this.type=e,this.length=n,this.text=""},e.CommentToken=(r.prototype.toString=function(){return"\x3c!--"+this.content},r);function r(t,e){i(this,r),this.type="comment",this.length=e||(t?t.length:0),this.text="",this.content=t}e.CharsToken=(o.prototype.toString=function(){return this.text},o);function o(t){i(this,o),this.type="chars",this.length=t,this.text=""}var s=e.TagToken=(c.formatTag=function(t){var e,n,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,o="<"+t.tagName;for(e in t.attrs)t.attrs.hasOwnProperty(e)&&(o+=" "+e,n=t.attrs[e],void 0!==t.booleanAttrs&&void 0!==t.booleanAttrs[e]||(o+='="'+(0,a.escapeQuotes)(n)+'"'));return t.rest&&(o+=" "+t.rest),t.unary&&!t.html5Unary?o+="/>":o+=">",null!=r&&(o+=r+"</"+t.tagName+">"),o},c);function c(t,e,n,r,o){i(this,c),this.type=t,this.length=n,this.text="",this.tagName=e,this.attrs=r,this.booleanAttrs=o,this.unary=!1,this.html5Unary=!1}e.StartTagToken=(u.prototype.toString=function(){return s.formatTag(this)},u);function u(t,e,n,r,o,a){i(this,u),this.type="startTag",this.length=e,this.text="",this.tagName=t,this.attrs=n,this.booleanAttrs=r,this.html5Unary=!1,this.unary=o,this.rest=a}e.AtomicTagToken=(l.prototype.toString=function(){return s.formatTag(this,this.content)},l);function l(t,e,n,r,o){i(this,l),this.type="atomicTag",this.length=e,this.text="",this.tagName=t,this.attrs=n,this.booleanAttrs=r,this.unary=!1,this.html5Unary=!1,this.content=o}e.EndTagToken=(d.prototype.toString=function(){return"</"+this.tagName+">"},d);function d(t,e){i(this,d),this.type="endTag",this.length=e,this.text="",this.tagName=t}},function(t,e){"use strict";e.__esModule=!0,e.escapeQuotes=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return t?t.replace(/([^"]*)"/g,function(t,e){return/\\/.test(e)?e+'"':e+'\\"'}):e}},function(t,e){"use strict";e.__esModule=!0,e.default=function(r,n,o){var a=function(){var t=[];return t.last=function(){return this[this.length-1]},t.lastTagNameEq=function(t){var e=this.last();return e&&e.tagName&&e.tagName.toUpperCase()===t.toUpperCase()},t.containsTagName=function(t){for(var e,n=0;e=this[n];n++)if(e.tagName===t)return!0;return!1},t}(),i={startTag:function(t){var e=t.tagName;"TR"===e.toUpperCase()&&a.lastTagNameEq("TABLE")?(r.prepend("<TBODY>"),s()):n.selfCloseFix&&c.test(e)&&a.containsTagName(e)?a.lastTagNameEq(e)?l(r,a):(r.prepend("</"+t.tagName+">"),s()):t.unary||a.push(t)},endTag:function(t){a.last()?n.tagSoupFix&&!a.lastTagNameEq(t.tagName)?l(r,a):a.pop():n.tagSoupFix&&(o(),s())}};function s(){var t,e,n=(n=o,e=(t=r).stream,n=u(o()),t.stream=e,n);n&&i[n.type]&&i[n.type](n)}return function(){return s(),u(o())}};var n=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;function u(t){return t&&"startTag"===t.type&&(t.unary=n.test(t.tagName)||t.unary,t.html5Unary=!/\/>$/.test(t.text)),t}function l(t,e){e=e.pop();t.prepend("</"+e.tagName+">")}}],n.c=o,n.p="",n(0);function n(t){if(o[t])return o[t].exports;var e=o[t]={exports:{},id:t,loaded:!1};return r[t].call(e.exports,e,e.exports,n),e.loaded=!0,e.exports}var r,o},t.exports=r()},function(t,e){"use strict";e.__esModule=!0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function o(t){return null!=t}function a(t,e,n){for(var r=void 0,o=t&&t.length||0,r=0;r<o;r++)e.call(n,t[r],r)}function i(t,e,n){for(var r in t)t.hasOwnProperty(r)&&e.call(n,r,t[r])}function n(t,e){return!(!t||"startTag"!==t.type&&"atomicTag"!==t.type||!("tagName"in t))&&!!~t.tagName.toLowerCase().indexOf(e)}e.existy=o,e.isFunction=function(t){return"function"==typeof t},e.each=a,e.eachKey=i,e.defaults=function(n,t){return n=n||{},i(t,function(t,e){o(n[t])||(n[t]=e)}),n},e.toArray=function(n){try{return Array.prototype.slice.call(n)}catch(t){var e=function(){var e=[];return a(n,function(t){e.push(t)}),{v:e}}();if("object"===(void 0===e?"undefined":r(e)))return e.v}},e.last=function(t){return t[t.length-1]},e.isTag=n,e.isScript=function(t){return n(t,"script")},e.isStyle=function(t){return n(t,"style")}}],n.c=o,n.p="",n(0);function n(t){if(o[t])return o[t].exports;var e=o[t]={exports:{},id:t,loaded:!1};return r[t].call(e.exports,e,e.exports,n),e.loaded=!0,e.exports}var r,o},t.exports=r()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.newNativeAssetManager=function(i){var a,s=0;function r(t){var e;try{e=JSON.parse(t)}catch(t){console.log("Error parsing response from cache host: ".concat(t))}return e}function n(t){var e,n=t.uuid,n="".concat((e=t.cacheHost,t=void 0===(t=t.cachePath)||""===t?y:t,"https://".concat(void 0===e||""===e?h:e).concat(t)),"?uuid=").concat(n);(0,d.sendRequest)(n,function(t){var e,n,t=r(t);t&&t.adm&&((t=r(t.adm))&&t.assets&&(n=[],(t=t).assets.forEach(function(t){t.img?f.image[t.img.type]?n.push({key:f.image[t.img.type],value:t.img.url}):console.log("ERROR: Invalid image type for image asset"):t.data?f.data[t.data.type]?n.push({key:f.data[t.data.type],value:t.data.value}):console.log("ERROR: Invalid data type for data asset"):t.title&&n.push({key:"title",value:t.title.text})}),t.link&&(t.link.clicktrackers&&(e=t.link.clicktrackers),n.push({key:"clickUrl",value:t.link.url})),e={assets:n,clicktrackers:e,imptrackers:t.imptrackers},t=l(i.document.body.innerHTML,e),i.document.body.innerHTML=t,a&&a({clickTrackers:e.clicktrackers,impTrackers:e.imptrackers})))})}function o(n){var r=[],o=i.document,a=void 0!==i.pbNativeData;return Object.keys(p).forEach(function(t){var e=p[t],t=n&&!a?"".concat(e,":").concat(n):"".concat(e);~(~o.body.innerHTML.indexOf(t)?o.body.innerHTML.indexOf(t):o.head.innerHTML&&o.head.innerHTML.indexOf(t))&&r.push(e)}),r}function c(t,e){i.parent.postMessage(JSON.stringify({message:"Prebid Native",action:"resizeNativeHeight",adId:t,height:e}),"*")}function u(t){var e,n,r,o={};try{o=JSON.parse(t.data)}catch(t){return void(10<s++&&i.removeEventListener("message",u))}"assetResponse"===o.message&&(e=i.document.body.innerHTML,n=i.document.head.innerHTML,(t=void 0!==i.pbNativeData)&&o.adId!==i.pbNativeData.adId||(n&&(i.document.head.innerHTML=l(n,o)),o.hasOwnProperty("rendererUrl")&&o.rendererUrl||t&&i.pbNativeData.hasOwnProperty("rendererUrl")?i.renderAd?(n=i.renderAd&&i.renderAd(o.assets)||"",i.document.body.innerHTML=e+n,a&&a(),i.removeEventListener("message",u),c(o.adId,document.body.clientHeight||document.body.offsetHeight)):document.getElementById("pb-native-renderer")?document.getElementById("pb-native-renderer").addEventListener("load",function(){var t=i.renderAd&&i.renderAd(o.assets)||"";i.document.body.innerHTML=e+t,a&&a(),i.removeEventListener("message",u),c(o.adId,document.body.clientHeight||document.body.offsetHeight)}):(0,d.loadScript)(i,t&&i.pbNativeData.hasOwnProperty("rendererUrl")&&i.pbNativeData.rendererUrl||o.rendererUrl,function(){var t=i.renderAd&&i.renderAd(o.assets)||"";i.document.body.innerHTML=e+t,a&&a(),i.removeEventListener("message",u),c(o.adId,document.body.clientHeight||document.body.offsetHeight)}):o.hasOwnProperty("adTemplate")&&o.adTemplate||t&&i.pbNativeData.hasOwnProperty("adTemplate")?(r=l(t&&i.pbNativeData.hasOwnProperty("adTemplate")&&i.pbNativeData.adTemplate||o.adTemplate,o),i.document.body.innerHTML=e+r,a&&a(),i.removeEventListener("message",u),c(o.adId,document.body.clientHeight||document.body.offsetHeight)):(r=l(e,o),i.document.body.innerHTML=r,a&&a(),i.removeEventListener("message",u))))}function l(t,e){var n=e.assets,r=e.adId,o=t;return(n||[]).forEach(function(t){var e=void 0!==i.pbNativeData,e=r&&!e?"".concat(p[t.key],":").concat(r):e?"##"+"".concat(p[t.key])+"##":"".concat(p[t.key]),e=new RegExp(e,"g");o=o.replace(e,t.value)}),o}return{loadAssets:function(t,e){var n=o(t),r=void 0!==i.pbNativeData;r&&i.pbNativeData.hasOwnProperty("assetsToReplace")&&i.pbNativeData.assetsToReplace.forEach(function(t){t=t.match(/hb_native_/i)?t:p[t];t&&n.push(t)}),r&&i.pbNativeData.hasOwnProperty("requestAllAssets")&&i.pbNativeData.requestAllAssets?(a=e,function(t){i.addEventListener("message",u,!1);t={message:"Prebid Native",action:"allAssetRequest",adId:t};i.parent.postMessage(JSON.stringify(t),"*")}(t)):0<n.length&&(a=e,function(t,e){i.addEventListener("message",u,!1);e={message:"Prebid Native",action:"assetRequest",adId:t,assets:e};i.parent.postMessage(JSON.stringify(e),"*")}(t,n))},loadMobileAssets:function(t,e){0<o().length&&(a=e,n(t))}}};var d=n(0),p={title:"hb_native_title",body:"hb_native_body",body2:"hb_native_body2",privacyLink:"hb_native_privacy",sponsoredBy:"hb_native_brand",image:"hb_native_image",icon:"hb_native_icon",clickUrl:"hb_native_linkurl",displayUrl:"hb_native_displayurl",cta:"hb_native_cta",rating:"hb_native_rating",address:"hb_native_address",downloads:"hb_native_downloads",likes:"hb_native_likes",phone:"hb_native_phone",price:"hb_native_price",salePrice:"hb_native_saleprice",rendererUrl:"hb_renderer_url"},f={image:{1:"icon",3:"image"},data:{1:"sponsoredBy",2:"body",3:"rating",4:"likes",5:"downloads",6:"price",7:"salePrice",8:"phone",9:"address",10:"body2",11:"displayUrl",12:"cta"}},h="prebid.adnxs.com",y="/pbc/v1/cache"}]);