!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){"use strict";function r(t,e){e.init(t.emitter)}var o=n(1),i=n(10),u=n(40),a=n(49),c={adapters:{skyAnalytics:a}};t.exports=o(i,u,r,c)},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e,n,o){var i=function(t){return Object.keys(t).map(function(e){return t[e]})},u=window.skyTags=r.takeover(window.skyTags||{}),a=function(t){return t.init(u.queue)};return i(t).forEach(a),n(u,e),u.queue.unshift(["set",{config:o}]),r.scanForInit(u),u}},function(t,e,n){"use strict";var r=n(3),o=n(8),i=n(9);t.exports={takeover:function(t){var e=t;e.queue=t.queue||[],e.emitter=t.emitter||{},e.emitter.registry=t.emitter.registry||{},e.emitter.on=t.emitter.on||function(t,e){var n=this.registry,r=n[t];r?n[t].push(e):n[t]=[e]},e.emitter.emit=function(t,e){var n=this.registry;n[t]&&n[t].forEach(function(t){t(e)})},e.version=o,e.commit=i;var n=e.queue.push;return e.queue.push=function(){for(var t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];var u=n.call.apply(n,[e.queue].concat(o));o.forEach(function(t){return r.handleInstruction(t,u,e.queue,e.emitter)})},e},scanForInit:function(t){t.queue.forEach(function(e){if("init"===e[0])return r.handleInstruction(e,t.queue.length,t.queue,t.emitter)})}}},function(t,e,n){"use strict";var r=n(4).init({}),o=function i(t,e,n,o){var u=t[0];if(!("init"!==u&&!r.get("initialized")||"init"===u&&r.get("initialized"))){var a=Array.prototype.slice.call(t,1);switch("function"==typeof t&&t(n,o,r),u){case"init":r.set({initialized:!0}),n.slice(0,e).forEach(function(t){return i(t,e,n,o)});break;case"event":a.map(r.merge).forEach(function(t){return o.emit("event",t)});break;case"track":o.emit("track");break;case"set":a.map(r.set).forEach(function(t){return o.emit("set",t)})}}};t.exports={handleInstruction:o}},function(t,e,n){"use strict";var r=n(5),o=n(6),i=void 0;t.exports={init:function(t){return i=t||{},this},get:function(t){return"."===t?i:r(i,t)},set:function(t){return o(i,t)},merge:function(t){return o({},i,t)}}},function(t,e){(function(e){"use strict";function n(t,e){return null==t?void 0:t[e]}function r(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}function o(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function i(){this.__data__=yt?yt(null):{}}function u(t){return this.has(t)&&delete this.__data__[t]}function a(t){var e=this.__data__;if(yt){var n=e[t];return n===V?void 0:n}return pt.call(e,t)?e[t]:void 0}function c(t){var e=this.__data__;return yt?void 0!==e[t]:pt.call(e,t)}function s(t,e){var n=this.__data__;return n[t]=yt&&void 0===e?V:e,this}function f(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function p(){this.__data__=[]}function d(t){var e=this.__data__,n=w(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():ht.call(e,n,1),!0}function l(t){var e=this.__data__,n=w(e,t);return n<0?void 0:e[n][1]}function m(t){return w(this.__data__,t)>-1}function h(t,e){var n=this.__data__,r=w(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}function g(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function y(){this.__data__={hash:new o,map:new(gt||f),string:new o}}function v(t){return E(this,t)["delete"](t)}function b(t){return E(this,t).get(t)}function x(t){return E(this,t).has(t)}function k(t,e){return E(this,t).set(t,e),this}function w(t,e){for(var n=t.length;n--;)if($(t[n][0],e))return n;return-1}function _(t,e){e=j(e,t)?[e]:S(e);for(var n=0,r=e.length;null!=t&&n<r;)t=t[R(e[n++])];return n&&n==r?t:void 0}function A(t){if(!P(t)||O(t))return!1;var e=B(t)||r(t)?lt:et;return e.test(q(t))}function I(t){if("string"==typeof t)return t;if(N(t))return bt?bt.call(t):"";var e=t+"";return"0"==e&&1/t==-L?"-0":e}function S(t){return kt(t)?t:xt(t)}function E(t,e){var n=t.__data__;return T(e)?n["string"==typeof e?"string":"hash"]:n.map}function C(t,e){var r=n(t,e);return A(r)?r:void 0}function j(t,e){if(kt(t))return!1;var n="undefined"==typeof t?"undefined":G(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!N(t))||(Q.test(t)||!K.test(t)||null!=e&&t in Object(e))}function T(t){var e="undefined"==typeof t?"undefined":G(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function O(t){return!!st&&st in t}function R(t){if("string"==typeof t||N(t))return t;var e=t+"";return"0"==e&&1/t==-L?"-0":e}function q(t){if(null!=t){try{return ft.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function D(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(H);var n=function r(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var u=t.apply(this,n);return r.cache=i.set(o,u),u};return n.cache=new(D.Cache||g),n}function $(t,e){return t===e||t!==t&&e!==e}function B(t){var e=P(t)?dt.call(t):"";return e==z||e==X}function P(t){var e="undefined"==typeof t?"undefined":G(t);return!!t&&("object"==e||"function"==e)}function U(t){return!!t&&"object"==("undefined"==typeof t?"undefined":G(t))}function N(t){return"symbol"==("undefined"==typeof t?"undefined":G(t))||U(t)&&dt.call(t)==J}function M(t){return null==t?"":I(t)}function F(t,e,n){var r=null==t?void 0:_(t,e);return void 0===r?n:r}var G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H="Expected a function",V="__lodash_hash_undefined__",L=1/0,z="[object Function]",X="[object GeneratorFunction]",J="[object Symbol]",K=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/,Y=/^\./,W=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Z=/[\\^$.*+?()[\]{}|]/g,tt=/\\(\\)?/g,et=/^\[object .+?Constructor\]$/,nt="object"==("undefined"==typeof e?"undefined":G(e))&&e&&e.Object===Object&&e,rt="object"==("undefined"==typeof self?"undefined":G(self))&&self&&self.Object===Object&&self,ot=nt||rt||Function("return this")(),it=Array.prototype,ut=Function.prototype,at=Object.prototype,ct=ot["__core-js_shared__"],st=function(){var t=/[^.]+$/.exec(ct&&ct.keys&&ct.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),ft=ut.toString,pt=at.hasOwnProperty,dt=at.toString,lt=RegExp("^"+ft.call(pt).replace(Z,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),mt=ot.Symbol,ht=it.splice,gt=C(ot,"Map"),yt=C(Object,"create"),vt=mt?mt.prototype:void 0,bt=vt?vt.toString:void 0;o.prototype.clear=i,o.prototype["delete"]=u,o.prototype.get=a,o.prototype.has=c,o.prototype.set=s,f.prototype.clear=p,f.prototype["delete"]=d,f.prototype.get=l,f.prototype.has=m,f.prototype.set=h,g.prototype.clear=y,g.prototype["delete"]=v,g.prototype.get=b,g.prototype.has=x,g.prototype.set=k;var xt=D(function(t){t=M(t);var e=[];return Y.test(t)&&e.push(""),t.replace(W,function(t,n,r,o){e.push(r?o.replace(tt,"$1"):n||t)}),e});D.Cache=g;var kt=Array.isArray;t.exports=F}).call(e,function(){return this}())},function(t,e,n){(function(e){/*!
	 * @description Recursive object extending
	 * @author Viacheslav Lotsmanov <lotsmanov89@gmail.com>
	 * @license MIT
	 *
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2013-2015 Viacheslav Lotsmanov
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy of
	 * this software and associated documentation files (the "Software"), to deal in
	 * the Software without restriction, including without limitation the rights to
	 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
	 * the Software, and to permit persons to whom the Software is furnished to do so,
	 * subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
	 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
	 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
	 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 */
"use strict";function n(t){return t instanceof e||t instanceof Date||t instanceof RegExp}function r(t){if(t instanceof e){var n=new e(t.length);return t.copy(n),n}if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp)return new RegExp(t);throw new Error("Unexpected situation")}function o(t){var e=[];return t.forEach(function(t,a){"object"===("undefined"==typeof t?"undefined":i(t))&&null!==t?Array.isArray(t)?e[a]=o(t):n(t)?e[a]=r(t):e[a]=u({},t):e[a]=t}),e}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=t.exports=function(){if(arguments.length<1||"object"!==i(arguments[0]))return!1;if(arguments.length<2)return arguments[0];var t,e,a=arguments[0],c=Array.prototype.slice.call(arguments,1);return c.forEach(function(c){"object"!==("undefined"==typeof c?"undefined":i(c))||null===c||Array.isArray(c)||Object.keys(c).forEach(function(s){return e=a[s],t=c[s],t===a?void 0:"object"!==("undefined"==typeof t?"undefined":i(t))||null===t?void(a[s]=t):Array.isArray(t)?void(a[s]=o(t)):n(t)?void(a[s]=r(t)):"object"!==("undefined"==typeof e?"undefined":i(e))||null===e||Array.isArray(e)?void(a[s]=u({},t)):void(a[s]=u(e,t))})}),a}}).call(e,n(7).Buffer)},function(t,e){"use strict";function n(){throw new Error("Buffer is not included.")}n.isBuffer=function(){return!1},e.INSPECT_MAX_BYTES=50,e.SlowBuffer=n,e.Buffer=n},function(t,e){"use strict";t.exports="1.2.8"},function(t,e){"use strict";t.exports="165ebe5"},function(t,e,n){"use strict";t.exports={campaign:n(11),dmp:n(12),page:n(17),user:n(20),device:n(21),click:n(24),skyTags:n(26)}},function(t,e){"use strict";function n(){var t=window.location.href,e=/(IRCT=)([^&]+)/i;return void 0!==t&&e.test(t)?t.match(e)[2]:null}function r(){var t=window.location.href,e=/(DCMP=)([^&]+)/i;return void 0!==t&&e.test(t)?t.match(e)[2]:null}t.exports={init:function(t){var e=r(),o=n();if(e||o){var i={};e&&(i.campaign=e),o&&(i.internalCampaign=o),t.unshift(["set",{page:{custom:i}}])}}}},function(t,e,n){"use strict";var r=n(13);t.exports={init:function(t){var e=r.parseDocumentCookie(document.cookie);t.unshift(["set",{user:{custom:{simpleSegment:e.getSimpleSegment(),ethan:e.getEthanStatus(),packageHolding:e.getPackages(),hasBroadband:e.hasBroadband(),hasTV:e.hasTV()}}}])}}},function(t,e,n){"use strict";function r(t){if(!t)return t;var e=t.split("|");return 1===e.length?e[0]:e}function o(t){var e=t.match(a)[1],n=decodeURIComponent(e);return i(n)}function i(t){var e=(t||"").split(",").reduce(function(t,e){var n=e.split("="),o=n[0].split(":"),i=r(n[1]);return o[1]?(t[o[0]]=t[o[0]]||{},t[o[0]][o[1]]=i):t[o[0]]=i,t},{});return u(e)}var u=n(14),a=/(?:(?:^|.*;\s*)polaris-engine-test\s*\=\s*([^;]*).*$)|^.*$/;t.exports={parseDmpCookie:i,parseDocumentCookie:o}},function(t,e,n){"use strict";function r(t){for(var e=["secure","stabilise","stimulate","support"],n=0;n<e.length;n++)if(t.indexOf(e[n])>-1)return e[n];return"unknown"}function o(t){return!i(t)}function i(t){return"false"===t.prospect}function u(t){return k(t["package"]||{},!0)}function a(t,e){return c(t,[e])}function c(t,e){for(var n=u(t),r=0;r<e.length;r++)if(n.indexOf(e[r])===-1)return!1;return!0}function s(t,e){for(var n=u(t),r=0;r<e.length;r++)if(n.indexOf(e[r])!==-1)return!0;return!1}function f(t){return"true"===t.broadband}function p(t){return s(t,["original","family","variety"])}function d(t){var e=t.ethan;switch(e){case"true":return"ethan";case"false":return"classic";default:return"unknown"}}function l(t){return"customer"===t.skyhd}function m(t){return"customer"===t.skyq}function h(t){return"true"===t.skygoextra}function g(t){return t.skyq||"unknown"}function y(t){return t.DTV_account_status||"unknown"}function v(t){return t.tenure||"unknown"}function b(t){var e=Object.keys(t);return{getSimpleSegment:x(r,e),getPackages:x(u,t),isProspect:x(o,t),isCustomer:x(i,t),hasPackage:x(a,t),hasAnyPackages:x(c,t),hasAllPackages:x(c,t),hasBroadband:x(f,t),hasTV:x(p,t),getEthanStatus:x(d,t),hasSkyHD:x(l,t),hasSkyQ:x(m,t),hasSkyGoExtra:x(h,t),getSkyQStatus:x(g,t),getDTVAccountStatus:x(y,t),getTenure:x(v,t)}}var x=n(15),k=n(16);t.exports=b},function(t,e){"use strict";function n(){var t=Array.prototype.slice.call(arguments)[0],e=Array.prototype.slice.call(arguments,1);if(t&&"function"!=typeof t.apply)throw new Error("First argument is not a function");return function(){var n=Array.prototype.slice.call(arguments);return t.apply(this,e.concat(n))}}t.exports=n},function(t,e){"use strict";function n(t,e){return e?Object.keys(t).filter(function(e){return"false"!==t[e]&&t[e]!==!1}):Object.keys(t)}t.exports=n},function(t,e,n){"use strict";var r=n(18);t.exports={init:function(t){t.unshift(["set",{page:{url:{canonical:window.location.href},referrer:document.referrer,geoRegion:r.getPageCountry()}}])}}},function(t,e,n){"use strict";function r(t){return t&&["GB","IE"].filter(function(e){return t.indexOf(e)!==-1})[0]}function o(t){return("GB"===t||"IE"===t)&&t}function i(){var t=o(a.getItem("countryAKA")),e=r(a.getItem("geo"));return e||t||"GB"}function u(){return o(a.getItem("countryAKA"))||""}var a=n(19);t.exports={getPageCountry:i,getUserCountry:u}},function(t,e){"use strict";t.exports={getItem:function(t){return t?decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:null},setItem:function(t,e,n,r,o,i){if(!t||/^(?:expires|max\-age|path|domain|secure)$/i.test(t))return!1;var u="";if(n)switch(n.constructor){case Number:u=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:u="; expires="+n;break;case Date:u="; expires="+n.toUTCString()}return document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(e)+u+(o?"; domain="+o:"")+(r?"; path="+r:"")+(i?"; secure":""),!0},setItemOnRootDomain:function(t,e,n,r,o){return this.setItem(t,e,n,r,this.getRootCookieDomain(),o)},removeItem:function(t,e,n){return!!this.hasItem(t)&&(document.cookie=encodeURIComponent(t)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:"")+(e?"; path="+e:""),!0)},hasItem:function(t){return!!t&&new RegExp("(?:^|;\\s*)"+encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var t=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),e=t.length,n=0;n<e;n++)t[n]=decodeURIComponent(t[n]);return t},getRootCookieDomain:function(){var t=window.location.hostname.split(".");if(1===t.length)return"";var e=t.length>2&&"co"===t[t.length-2]?-3:-2;return"."+t.slice(e).join(".")}}},function(t,e,n){"use strict";var r=n(18),o=n(19);t.exports={init:function(t){t.unshift(["set",{user:{trackingId:o.getItem("skyCEsidextrk01")||o.getItem("skyCEsidtrk01")||"",geoRegion:r.getUserCountry()||""}}])}}},function(t,e,n){"use strict";var r=n(22),o=n(19),i=n(23),u=r();t.exports={init:function(t){i(),t.unshift(["set",{device:{userAgent:window.navigator&&window.navigator.userAgent||"",uuid:o.getItem("uuid")||"",windowId:u,resolution:{width:window.screen&&window.screen.height,height:window.screen&&window.screen.width}}}])}}},function(t,e){(function(e){"use strict";var n=function(t){var n=e.msCrypto||e.crypto,r=new e.Uint8Array(1),o=n.getRandomValues(r)[0]%16|0,i="x"===t?o:3&o|8;return i.toString(16)},r=function(){return(16*Math.random()>>0).toString(16)},o=function(t){try{return n(t)}catch(e){return r()}},i=function(){return"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[x]/g,o)};t.exports=i}).call(e,function(){return this}())},function(t,e,n){"use strict";var r=n(19),o=n(22);t.exports=function(){r.getItem("uuid")||r.setItemOnRootDomain("uuid",o(),1/0,"/")}},function(t,e,n){"use strict";function r(t){for(var e=t;e.parentNode;){if(void 0!==e.getAttribute&&null!==e.getAttribute("data-tracking"))return"false"!==e.getAttribute("data-tracking");e=e.parentNode}return!0}function o(t,e,n,r){t.addEventListener(e,n,!!r)}function i(t,e){c(t,"click",function(t){r(t.target)&&e(t)})}var u=n(25),a=["input[type=submit]","button","a","[data-tracking]","input[type=submit] *","button *","a *","[data-tracking] *"].join(","),c=function(){function t(t){var n=t.target;e[t.type].forEach(function(e){var r=document.querySelectorAll(e.selector),o=Array.prototype.indexOf.call(r,n)>=0;o&&e.handler.call(n,t)})}var e={};return function(n,r,i){e[r]||(e[r]=[],o(document.documentElement,r,t.bind(this),!0)),e[r].push({selector:n,handler:i})}}();t.exports={init:function(t){i(a,function(e){t.push(["event",u(e.target)]),t.push(["track"])})}}},function(t,e){"use strict";function n(t){return void 0===t?"":t.trim().replace(/\s/g,"-").replace(/[&,\+'|\u2122\u00AE]/g,"").toLowerCase()}function r(t){if("HTML"===t.tagName)return"/HTML[1]";if(t===document.body)return"/HTML[1]/BODY[1]";for(var e=0,n=t.parentNode.childNodes,o=0;o<n.length;o++){var i=n[o];if(i===t)return r(t.parentNode)+"/"+t.tagName+"["+(e+1)+"]";1===i.nodeType&&i.tagName===t.tagName&&e++}}function o(t,e){return t&&t.getAttribute&&t.hasAttribute?t.hasAttribute(e)?t.getAttribute(e):o(t.parentNode,e):""}function i(t){if(t)return t.getAttribute("data-tracking-label")||o(t,"data-tracking-label")||t.getAttribute("alt")||t.nodeValue||t.value||t.getAttribute("name")||t.textContent||t.innerText}function u(t){return t.hasAttribute("data-tracking-context")?t.getAttribute("data-tracking-context"):t.hasAttribute("data-tracking-context-id")?i(document.getElementById(t.getAttribute("data-tracking-context-id"))):o(t,"data-tracking-context")}function a(t){function e(){var t=[];return a.module&&t.push(a.module),a.pod&&t.push(a.pod),a.text&&t.push(a.text),t}var a={module:n(o(t,"data-tracking-module")),pod:n(o(t,"data-tracking-pod")),other:n(o(t,"data-tracking-other"))||"click",context:n(u(t)),theme:n(o(t,"data-tracking-theme")),text:n(i(t))},c={type:"click",timestamp:Date.now(),element:{locator:{logical:e(),universal:r(t)},custom:{linkDetails:a}}};if(t.hasAttribute("data-tracking-search")&&(c.element.custom.searchType=t.getAttribute("data-tracking-search"),c.element.custom.searchTerm=u(t)),o(t,"data-tracking-variable")){var s=o(t,"data-tracking-variable"),f=o(t,"data-tracking-value");c.element.custom[s]=n(f||i(t))}return o(t,"data-tracking-event")&&(c.element.custom.eventAction=o(t,"data-tracking-event")),c}t.exports=a},function(t,e,n){"use strict";var r=n(8),o=n(9);t.exports={init:function(t){t.unshift(["set",{instrumentation:{name:"sky tags",version:r,commit:o,environment:"production"}}])}}},,,,,,,,,,,,,,function(t,e,n){"use strict";var r=n(41);t.exports=r},function(t,e,n){"use strict";var r=n(5),o=n(42),i=n(43).post,u=[],a=void 0,c=void 0,s=function(t){var e=c[t.type]||{},n=a+"/ingest/"+e.topic+"/"+e.schemaId;e.topic&&i(n,t)},f=function(t){t.forEach(s)};t.exports={init:function(t){t.on("event",function(t){return u.push(o(t))}),t.on("set",function(t){a=r(t,"config.adapters.skyAnalytics.endpoint"),c=r(t,"config.adapters.skyAnalytics.maps.schemas")||{}}),t.on("track",function(){var t=u.splice(0);return f(t)})}}},function(t,e){"use strict";var n=["initialized","type","config","instrumentation","application"],r=function(t){return Object.keys(t).reduce(function(e,r){return n.indexOf(r)===-1&&(e[r]=t[r]),e},{custom:[],vendor:[]})};t.exports=function(t){var e=r(t);return{application:t.application||{},instrumentation:t.instrumentation,type:t.type,timestamp:Date.now(),context:e}}},function(t,e){(function(e){"use strict";var n=function(t,n,r){var o=JSON.stringify(n),i="POST";if(void 0===e.XDomainRequest){var u=new XMLHttpRequest;u.onload=r,u.open(i,t,!0),u.setRequestHeader("Content-Type","application/json; charset=UTF-8"),u.send(o)}else{var a=new XDomainRequest;a.open(i,t.replace(/^http(s)?:/,""));var c=function(){return function(){}};a.timeout=5e3,a.onload=r||c(),a.onerror=c(),a.ontimeout=c(),a.onprogress=c(),setTimeout(function(){a.send(o)},0)}};t.exports={post:n}}).call(e,function(){return this}())},,,,,,function(t,e){"use strict";t.exports={endpoint:"https://analytics.faw.sky.com",maps:{schemas:{form_submit:{schemaId:407,topic:"web-form-submit-message"},chat_start:{schemaId:413,topic:"web-chat-start-message"},chat_end:{schemaId:409,topic:"web-chat-end-message"},view:{schemaId:408,topic:"web-view-message"},click:{schemaId:411,topic:"web-click-message"},keep_alive:{schemaId:414,topic:"web-keep-alive-message"},video_start:{schemaId:410,topic:"web-video-start-message"},product_view:{schemaId:404,topic:"web-product-view-message"},product_add:{schemaId:406,topic:"web-product-add-message"},product_remove:{schemaId:415,topic:"web-product-remove-message"},quote_create:{schemaId:412,topic:"web-quote-create-message"},quote_destroy:{schemaId:405,topic:"web-quote-destroy-message"},quote_update:{schemaId:417,topic:"web-quote-update-message"},quote_submit:{schemaId:416,topic:"web-quote-submit-message"}}}}}]);
//# sourceMappingURL=sky-tags-without-adobe.min.js.map