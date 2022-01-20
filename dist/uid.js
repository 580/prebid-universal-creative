/* v1.14.0-pre
Updated : 2022-01-20 */
!function(o){var n={};function r(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return o[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=o,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,o){"use strict";function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.getBuyerUids=s,e.loadData=l;var n=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==u(t)&&"function"!=typeof t)return{default:t};e=c(e);if(e&&e.has(t))return e.get(t);var o,n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(o in t){var a;"default"!==o&&Object.prototype.hasOwnProperty.call(t,o)&&((a=r?Object.getOwnPropertyDescriptor(t,o):null)&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=t[o])}n.default=t,e&&e.set(t,n);return n}(o(1));function c(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,o=new WeakMap;return(c=function(t){return t?o:e})(t)}window.pbs=window.pbs||{},window.pbs.getBuyerUids=s;var r="https://prebid.adnxs.com/pbs/v1/getuids",a="ssp-buyeruids",i=14;function s(e){var t=n.getDataFromLocalStorage(a);if(f(t))l(e);else{try{t=JSON.parse(t)}catch(t){return void e(t,null)}delete t.lastUpdated,e(null,t)}}function l(e){f(n.getDataFromLocalStorage(a))&&n.ajax(r,function(t){try{(t=JSON.parse(t)).lastUpdated=n.timestamp(),n.setDataInLocalStorage(a,JSON.stringify(t)),delete t.lastUpdated,e(null,t)}catch(t){e(t,null)}},null,{withCredentials:!0})}function f(t){return!t||n.timestamp()>t.lastUpdated+24*i*60*60*1e3}l(function(){})},function(t,e,o){"use strict";function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o,n=arguments[e];for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(){try{return!!window.localStorage}catch(t){console.log("Local storage api disabled")}}Object.defineProperty(e,"__esModule",{value:!0}),e.ajax=function(t,e,o){var n,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};try{var a,u=r.method||(o?"POST":"GET"),c="object"===s(e)?e:{success:function(){console.log("xhr success")},error:function(t){console.log("xhr error",null,t)}};"function"==typeof e&&(c.success=e),(n=new window.XMLHttpRequest).onreadystatechange=function(){var t;4===n.readyState&&(200<=(t=n.status)&&t<300||304===t?c.success(n.responseText,n):c.error(n.statusText,n))},n.ontimeout=function(){console.log("xhr timeout after ",n.timeout,"ms")},"GET"===u&&o&&(i((a=parseURL(t,r)).search,o),t=formatURL(a)),n.open(u,t),n.timeout=3e3,r.withCredentials&&(n.withCredentials=!0),r.preflight&&n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.setRequestHeader("Content-Type",r.contentType||"text/plain"),"POST"===u&&o?n.send(o):n.send()}catch(t){console.log("xhr construction",t)}},e.getDataFromLocalStorage=function(t){if(n())return window.localStorage.getItem(t)},e.hasLocalStorage=n,e.setDataInLocalStorage=function(t,e){n()&&window.localStorage.setItem(t,e)},e.timestamp=function(){return(new Date).getTime()}}]);