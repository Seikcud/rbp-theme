!function(e){function t(t){for(var r,c,a=t[0],s=t[1],u=t[2],d=0,m=[];d<a.length;d++)c=a[d],o[c]&&m.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(l&&l(t);m.length;)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={3:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=s;i.push([53,0]),n()}({1:function(e,t,n){"use strict";async function r(e){const t=await fetch(e);if(t.ok)return await t.json();throw new Error(t.status)}async function o(e,t){const n=await fetch(e,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});if(n.ok)return await n.json();throw new Error(n.status)}n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},21:function(e,t,n){var r;e.exports=function e(t,n,o){function i(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof r&&r;if(!s&&u)return r(a,!0);if(c)return c(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[a]={exports:{}};t[a][0].call(d.exports,function(e){return i(t[a][1][e]||e)},d,d.exports,e,t,n,o)}return n[a].exports}for(var c="function"==typeof r&&r,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},o=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},i=n.visible=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.create=function(e,t){var n=function(e,t){var n=r('\n\t\t<div class="basicLightbox '+t.className+'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t'),i=n.querySelector(".basicLightbox__placeholder");e.forEach(function(e){return i.appendChild(e)});var c=o(i,"IMG"),a=o(i,"VIDEO"),s=o(i,"IFRAME");return!0===c&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===s&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(r(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),c=function(e){return!1!==t.onClose(a)&&(o=function(){if("function"==typeof e)return e(a)},(r=n).classList.remove("basicLightbox--visible"),setTimeout(function(){return!1===i(r)||r.parentElement.removeChild(r),o()},410),!0);var r,o};!0===t.closable&&n.addEventListener("click",function(e){e.target===n&&c()});var a={element:function(){return n},visible:function(){return i(n)},show:function(e){return!1!==t.onShow(a)&&(r=n,o=function(){if("function"==typeof e)return e(a)},document.body.appendChild(r),setTimeout(function(){requestAnimationFrame(function(){return r.classList.add("basicLightbox--visible"),o()})},10),!0);var r,o},close:c};return a}},{}]},{},[1])(1)},53:function(e,t,n){"use strict";n.r(t);var r=n(21),o=n(9);document.addEventListener("DOMContentLoaded",()=>{console.log("Testing"),Object(o.a)(),function(){const e=document.querySelector(".widgets.top"),t=document.querySelector(".thread-moderation");if(t){const n='\n        <button id="moderation-proxy" class="mdc-button">Officer</button>';e.querySelector(".left").insertAdjacentHTML("beforeend",n),document.getElementById("moderation-proxy").addEventListener("click",n=>{n.preventDefault();const r=document.getElementById("moderation-proxy");e.classList.toggle("widget-shift"),"Officer"===r.textContent?r.textContent="Close":r.textContent="Officer",document.querySelector(".m_forum.viewforum")?t.offsetParent?document.querySelector(".bulk-moderator-close").click():document.querySelector(".link-moderate-tool").click():t.style.display=null===t.offsetParent?"block":"none"})}}(),function(){const e=document.querySelector(".breadcrumbs .mask");e&&(e.innerHTML=e.innerHTML.replace(/»/g,"/"))}(),document.querySelectorAll(".post-content img").forEach(e=>{e.onclick=(t=>{t.preventDefault(),r.create(`<img src='${e.getAttribute("src")}'>`).show()})}),document.querySelectorAll('iframe[src^="https://www.youtube.com"]').forEach(e=>{const t=document.createElement("div");t.classList.add("responsive-embed"),e.parentNode.insertBefore(t,el),t.appendChild(e)})})},9:function(e,t,n){"use strict";var r=n(2),o=n(14),i=n(12),c=n(16),a=n(8),s=n(10),u=n(1);const l=document.querySelector(".mdc-drawer"),d=document.querySelector(".mdc-top-app-bar"),m=document.querySelector(".mdc-tab-bar");function f(){!async function(){const e=document.getElementById("user-button");try{const t=await Object(u.b)("/api/v1/api.php",{jsonrpc:"2.0",id:Math.round(899999*Math.random()+1e5),method:"User.get"}),n=t.result.logged_in?"#registered-menu":"#guest-menu",c=document.querySelector(n),a=new o.a(c),s=document.getElementById("user-button");if(t.result.logged_in){Sentry&&Sentry.configureScope(e=>{e.setUser({username:t.result.username,raw:t.result})});const n=document.querySelector(".join-site");if(e.innerHTML=`<div class='user-menu__avatar user-menu__slide'>\n          <img class='user-menu__img' src='${t.result.avatar_medium}'>\n        </div>`,n){const e=c.querySelector(".mdc-list");e.insertAdjacentHTML("beforeend","<li class='mdc-list-item' role='menuitem' tabindex='0'>\n            <a class='join-us' href='#' onclick='Enjin_Core.joinWebsiteRegular(event);return false;' rel='nofollow'>Join Website</a>\n          </li>"),new link.MDCLink(e).singleSelection=!0}(t.result.admin_access.full||t.result.admin_access.limited)&&c.setAttribute("data-admin","True"),c.querySelectorAll(".mdc-list-item").forEach(e=>{r.a.attachTo(e)}),i.a.attachTo(document.querySelector(".mdc-menu-surface")),a.setAnchorMargin({top:50}),r.a.attachTo(document.querySelector(".user-menu__avatar"));const o=[`Hello ${t.result.username}, you sultry snail.`,`Hello ${t.result.username}, you beautiful, rule-breaking moth.`,`Hello ${t.result.username}, you powerful musk ox.`,`Make way for ${t.result.username}, the worthy sperm.`,`Is it ${t.result.username} or is it just hot in here?`,`Stay safe out there ${t.result.username}.`,`Hello, <${t.result.username} the Irreplaceable>`,`Suffer well, ${t.result.username}.`,`Oh, hello ${t.result.username}. Have you heard the story of the hozen and the buttercream pie?`],s=document.querySelector(".mdc-drawer__subtitle");if(s){const e=Math.floor(Math.random()*o.length);s.innerText=o[e]}}else e.innerHTML='Hello, Guest <i class="material-icons">keyboard_arrow_down</i>';s.addEventListener("click",()=>a.open=!a.open)}catch(e){console.error("User menu error: "+e)}}(),function(){const e=c.a.attachTo(l),t=a.a.attachTo(d),n=document.querySelector("#enjin-tray");s.a.attachTo(m),t.listen("MDCTopAppBar:nav",()=>{e.open=!e.open}),n&&a.a.attachTo(n)}(),function(){const e=document.querySelector(".window_header .window_page");e&&(e.innerHTML='<i class="material-icons">settings</i>',document.addEventListener("click",e=>{const t=document.querySelector(".button_click.active");!t||e.target.closest(".button_window")||e.target.closest(".button_click.active")||t.click()}))}(),console.log("Reached this far.")}function p(e,t){const n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div");return o.classList.add("discord-widget__members"),n.classList.add("discord-widget__channel"),n.setAttribute("data-id",t),r.classList.add("discord-widget__channel__name"),r.innerHTML=e,n.appendChild(r),n.appendChild(o),n}function h(e,t,n){const r=document.createElement("div"),o=document.createElement("div"),i=document.createElement("img"),c=document.createElement("span");if(r.classList.add("discord-widget-member"),o.classList.add("discord-widget-member__avatar"),i.src=t,c.innerHTML=e,c.classList.add("discord-widget-member__name"),o.appendChild(i),r.appendChild(o),r.appendChild(c),n){const e=document.createElement("span");e.classList.add("discord-widget-member__game"),e.innerHTML=n.name,r.appendChild(e)}return r}function b(){!async function(){const e=document.querySelector(".discord-parent");let t=0;if(e)try{const n=await Object(u.a)("https://discordapp.com/api/servers/142372929961721856/embed.json"),r=n.channels.sort((e,t)=>e.position-t.position),o=document.createElement("div");o.classList.add("discord-widget");for(let e of r)o.appendChild(p(e.name,e.id));o.appendChild(p("Online Users",0));for(const e of n.members){e.channel_id&&o.querySelector('div[data-id="'+e.channel_id+'"]').appendChild(h(e.username,e.avatar_url));const n=o.querySelector('div[data-id="0"] .discord-widget__members');"online"===e.status&&(t++,n.appendChild(h(e.username,e.avatar_url,e.game)))}const i=document.querySelector("#discord-box .discord__description");if(i){const e=`${t} Members Currently Online`;i.innerHTML=e}e.appendChild(o)}catch(e){console.error("Discord widget failure "+e)}}()}function y(){Sentry?Sentry.init({dsn:"https://26c15a32dfc6457cae94b98a9876c8e3@sentry.io/199271"}):console.warn("Sentry was not found."),document.querySelector('meta[name="viewport"]')&&(document.querySelectorAll('head link[rel="icon"]').forEach(e=>e.remove()),document.querySelector("head").insertAdjacentHTML("beforeend",'<meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="icon" href="https://s3.amazonaws.com/files.enjin.com/632721/material/images/favicon.png" sizes="32x32" type="image/png">')),f(),b()}n.d(t,"a",function(){return y})}});