!function(e){function t(t){for(var n,i,s=t[0],c=t[1],l=t[2],u=0,_=[];u<s.length;u++)i=s[u],o[i]&&_.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(d&&d(t);_.length;)_.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={1:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;a.push([33,0,6]),r()}({18:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var n=r(12);function o(){document.querySelectorAll(".mdc-linear-progress").forEach(e=>{const t=e.getAttribute("data-scale");new n.a(e).progress=t})}},2:function(e,t,r){"use strict";async function n(e){const t=await fetch(e);if(t.ok)return await t.json();throw new Error(t.status)}async function o(e,t){const r=await fetch(e,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});if(r.ok)return await r.json();throw new Error(r.status)}r.d(t,"a",function(){return n}),r.d(t,"b",function(){return o})},33:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _material_linear_progress__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(12),_helpers_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(18),flickity_bg_lazyload__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(32),flickity_bg_lazyload__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(flickity_bg_lazyload__WEBPACK_IMPORTED_MODULE_2__),_helpers_network__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_global_global__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7);const difficulties={M:"Mythic",H:"Heroic",N:"Normal"};function carousel(){const e=document.querySelector(".carousel");e&&new flickity_bg_lazyload__WEBPACK_IMPORTED_MODULE_2___default.a(e,{autoPlay:5e3,wrapAround:!0,bgLazyLoad:1,prevNextButtons:!1,pageDots:!1})}async function createRaiderIOElements(){const e=["antorus-the-burning-throne","uldir"];try{const t=await Object(_helpers_network__WEBPACK_IMPORTED_MODULE_3__.a)("https://raider.io/api/v1/guilds/profile?region=us&realm=blackrock&name=Really%20Bad%20Players&fields=raid_rankings,raid_progression"),r=document.getElementById("guild-progress"),n=document.getElementById("guild-progress__loaders"),o=Object.entries(t.raid_progression).filter(t=>e.includes(t[0])),a=Object.entries(t.raid_rankings).pop()[1];r.insertAdjacentHTML("afterbegin",createProgressionElements(o)),n.remove(),setTimeout(_helpers_material__WEBPACK_IMPORTED_MODULE_1__.a,500);let i="";i=0!==a.mythic.world?"mythic":0!==a.heroic.world?"heroic":"normal",Object.entries(a[i]).map(([e,t])=>{let r=document.querySelector("[data-guild-rank="+e+"]");r?r.insertAdjacentHTML("afterbegin",t):console.warn("Element for region "+e+" was not found.")})}catch(e){console.error("RaiderIO error: ",e)}}function createGroupPayModule(){const e=document.querySelector(".m_grouppay"),t=document.querySelector("#grouppay");if(!e)return void(t&&t.remove());const r=e.querySelector(".element_progressbar .current"),n=t.querySelector(".mdc-linear-progress"),o=_material_linear_progress__WEBPACK_IMPORTED_MODULE_0__.a.attachTo(n),a=r.style.width.slice(0,-1)/100,i=e.querySelector(".items");n.insertAdjacentHTML("beforeend",`<div class="grouppay__days">${document.querySelector(".element_progressbar .clabel").innerHTML}</div>`),i&&t.querySelector(".grouppay__recent").insertAdjacentHTML("beforeend",i.innerHTML),o.progress=a,t.querySelector("a").addEventListener("click",t=>{t.preventDefault(),e.querySelector(".add_days_button").click()})}function createProgressionElements(raids){return raids.map(([instance,progress])=>`\n    <div class="col-12 raid-progress" data-raid="${instance}">\n      <div class="flex-row">\n        <div class="col-12 raid-progress__summary">\n            <span class="raid-progress__summary-text">${progress.summary}</span>\n        </div>\n        <div class="col-12 raid-info">\n            <span class="raid-difficulty">${difficulties[progress.summary.slice(-1)]}</span>\n            <span class="raid-name">${instance.replace(/-/g," ")}</span>\n        </div>\n        <div role="progressbar" class="col-12 progressbar mdc-linear-progress" data-scale="${eval(progress.summary.slice(0,-2))}">\n          <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">\n              <span class="mdc-linear-progress__bar-linear"></span>\n          </div>\n        </div>\n      </div>\n    </div>`).reverse().join("")}function setupNewsModule(){const e=document.getElementById("news-api-wrapper"),t=document.querySelector(".news--loader");if(!e)return void console.log(document.getElementById("news-api-wrapper"));const r={jsonrpc:"2.0",id:Math.round(899999*Math.random()+1e5),method:"News.getNews",params:{api_key:"1cda2ce03bfa7f559e6b083ca73e514325664ad1982a9bf8",preset_id:"47505231",page:1,items:5}};fetch("/api/v1/api.php",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then(e=>{if(!e.ok)throw Error("Enjin API request failed: ",e.statusText);return e.json()}).then(r=>{console.log(r),e.insertAdjacentHTML("beforeend",createNewsElements(r.result)),t.remove()}).catch(e=>console.log(e))}function createNewsElements(e){return e.map(e=>{const t=document.createElement("div");t.innerHTML=e.content;const r=t.innerText,n=t.querySelectorAll("img")[0].src,o=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),s=document.createElement("h1"),c=document.createElement("p");return o.classList="article col-12",a.classList="article__bg",a.style="background-image: url("+n+")",s.innerText=e.title,c.innerText=r,i.appendChild(s),i.appendChild(c),o.appendChild(a),o.appendChild(i),console.log(o),`\n    <div class='article col-12'>\n      <div class='article__bg' style='background-image: url(${n})'></div>\n      <div class='news-info'>\n        <h2 class='news-title'>${e.title}</h2>\n        <p class='news-snippet'>${r}</p>\n      </div>\n    </div>`}).join("")}document.addEventListener("DOMContentLoaded",()=>{console.info("Hello"),Object(_global_global__WEBPACK_IMPORTED_MODULE_4__.a)(),carousel(),createRaiderIOElements(),createGroupPayModule(),setupNewsModule()})},7:function(e,t,r){"use strict";var n=r(1),o=r(15),a=r(9),i=r(14),s=r(13),c=r(11),l=r(2);const d=document.querySelector(".mdc-drawer"),u=document.querySelector(".mdc-top-app-bar"),_=document.querySelector(".mdc-tab-bar");function m(){!async function(){const e=document.getElementById("user-button"),t={jsonrpc:"2.0",id:Math.round(899999*Math.random()+1e5),method:"User.get"};try{const r=await Object(l.b)("/api/v1/api.php",t),i=r.result.logged_in?"#registered-menu":"#guest-menu",s=document.querySelector(i),c=new o.a(s),d=document.getElementById("user-button");if(r.result.logged_in){const t=document.querySelector(".join-site");if(e.innerHTML=`<div class='user-menu__avatar user-menu__slide'>\n          <img class='user-menu__img' src='${r.result.avatar_medium}'>\n        </div>`,t){const e=s.querySelector(".mdc-list");e.insertAdjacentHTML("beforeend","<li class='mdc-list-item' role='menuitem' tabindex='0'>\n            <a class='join-us' href='#' onclick='Enjin_Core.joinWebsiteRegular(event);return false;' rel='nofollow'>Join Website</a>\n          </li>"),new link.MDCLink(e).singleSelection=!0}(r.result.admin_access.full||r.result.admin_access.limited)&&s.setAttribute("data-admin","True"),s.querySelectorAll(".mdc-list-item").forEach(e=>{n.a.attachTo(e)}),a.a.attachTo(document.querySelector(".mdc-menu-surface")),c.setAnchorMargin({top:50}),n.a.attachTo(document.querySelector(".user-menu__avatar"));const o=[`Hello ${r.result.username}, you sultry snail.`,`Hello ${r.result.username}, you beautiful, rule-breaking moth.`,`Hello ${r.result.username}, you powerful musk ox.`,`Make way for ${r.result.username}, the worthy sperm.`,`Is it ${r.result.username} or is it just hot in here?`,`Stay safe out there ${r.result.username}.`,`Hello, <${r.result.username} the Irreplaceable>`,`Suffer well, ${r.result.username}.`,`Oh, hello ${r.result.username}. Have you heard the story of the hozen and the buttercream pie?`],i=document.querySelector(".mdc-drawer__subtitle");if(i){const e=Math.floor(Math.random()*o.length);i.innerText=o[e]}}else e.innerHTML='Hello, Guest <i class="material-icons">keyboard_arrow_down</i>';d.addEventListener("click",()=>c.open=!c.open)}catch(e){console.error("User menu error: "+e)}}(),function(){const e=i.a.attachTo(d),t=s.a.attachTo(u);c.a.attachTo(_),t.listen("MDCTopAppBar:nav",()=>{e.open=!e.open})}(),function(){const e=document.querySelector(".window_header .window_page");e&&(e.innerHTML='<i class="material-icons">settings</i>',document.addEventListener("click",e=>{let t=document.querySelector(".button_click.active");!t||e.target.closest(".button_window")||e.target.closest(".button_click.active")||t.click()}))}(),function(){const e=document.getElementById("enjin-tray");let t=0,r=!1;window.addEventListener("scroll",function(){t=window.scrollY,r||(window.requestAnimationFrame(()=>{!function(e,t){t>0?e.classList.add("user_tray__scrolled"):e.classList.remove("user_tray__scrolled")}(e,t),r=!1}),r=!0)})}()}function p(e,t){const r=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div");return o.classList.add("discord-widget__members"),r.classList.add("discord-widget__channel"),r.setAttribute("data-id",t),n.classList.add("discord-widget__channel__name"),n.innerHTML=e,r.appendChild(n),r.appendChild(o),r}function f(e,t,r){const n=document.createElement("div"),o=document.createElement("div"),a=document.createElement("img"),i=document.createElement("span");if(n.classList.add("discord-widget-member"),o.classList.add("discord-widget-member__avatar"),a.src=t,i.innerHTML=e,i.classList.add("discord-widget-member__name"),o.appendChild(a),n.appendChild(o),n.appendChild(i),r){const e=document.createElement("span");e.classList.add("discord-widget-member__game"),e.innerHTML=r.name,n.appendChild(e)}return n}function g(){13020514===current_page_id&&document.querySelector("#section-footer .section").insertAdjacentHTML("beforeend",'\n    <footer class="footer">\n        <div class="flex-container">\n            <div class="footer__background">\n                <div class="footer__top">\n                    <div class="footer-block footer-block--padded">\n                        <div class="footer__logo">\n                            <img src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/logo_medium.png">\n                        </div>\n                        <div class="footer__description">\n                            <span class="footer__description--guild">Really Bad Players</span>\n                            <span class="footer__description--info">US / Blackrock / Horde</span>\n                        </div>\n                    </div>\n                    <div class="footer-block footer-block--padded">\n                        <div class="footer-block--title">Navigation</div>\n                        <ul class="footer-list">\n                            <li><a href="/">Home</a></li>\n                            <li><a href="/about">About Us</a></li>\n                            <li><a href="/apply">Application</a></li>\n                            <li><a href="/forum">Forum</a></li>\n                            <li><a href="/roster">Roster</a></li>\n                            <li><a href="https://www.warcraftlogs.com/guild/id/5825">Logs</a></li>\n                        </ul>\n                    </div>\n                    <div class="footer-block footer-block--padded">\n                        <div class="footer-block--title">About</div>\n                        <ul class="footer-list">\n                            <li><a href="/about#guild">Guild History</a></li>\n                            <li><a href="/about#ranks">Ranking Structure</a></li>\n                            <li><a href="/about#loot">Loot Distribution</a></li>\n                            <li><a href="/about#addons">Required Addons</a></li>\n                        </ul>\n                    </div>\n                    <div class="footer-block footer-block--padded">\n                        <div class="footer-block--title">Resources</div>\n                        <ul class="footer-list">\n                            <li><a href="https://www.warcraftlogs.com/guild/id/5825">WarcraftLogs</a></li>\n                            <li><a href="https://www.wowprogress.com/guild/us/blackrock/Really+Bad+Players">Wowprogress</a></li>\n                            <li><a href="https://raider.io/guilds/us/blackrock/Really%20Bad%20Players">Raider.IO</a></li>\n                            <li><a href="https://www.raidbots.com/simbot">Raidbots</a></li>\n                        </ul>\n                    </div>\n                    <div class="footer-block">\n                        <div class="discord-parent">\n                            <div class="discord-title">Discord</div>\n                        </div>\n                    </div>\n                </div>\n                <div class="footer__bottom">\n                    <div class="footer__bottom--left">\n                        <span class="copyright-info">Copyright © Really Bad Players. All rights reserved.</span>\n                    </div>\n                    <div class="footer__bottom--right">\n                        <span class="footer-links">Designed by <a href="https://worldofwarcraft.com/en-us/character/blackrock/duckie">Duckie</a> Powered by <a href="https://www.enjin.com/">Enjin</a></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </footer>'),async function(){const e=document.querySelector(".discord-parent");let t=0;if(e)try{const r=await Object(l.a)("https://discordapp.com/api/servers/142372929961721856/embed.json"),n=r.channels.sort((e,t)=>e.position-t.position),o=document.createElement("div");o.classList.add("discord-widget");for(let e of n)o.appendChild(p(e.name,e.id));o.appendChild(p("Online Users",0));for(const e of r.members){e.channel_id&&o.querySelector('div[data-id="'+e.channel_id+'"]').appendChild(f(e.username,e.avatar_url));const r=o.querySelector('div[data-id="0"] .discord-widget__members');"online"===e.status&&(t++,r.appendChild(f(e.username,e.avatar_url,e.game)))}const a=document.querySelector("#discord-box .discord__description");if(a){const e=`${t} Members Currently Online`;a.innerHTML=e}e.appendChild(o)}catch(e){console.error("Discord widget failure "+e)}}()}function h(){document.querySelector('meta[name="viewport"]')&&(document.querySelectorAll('head link[rel="icon"]').forEach(e=>e.remove()),document.querySelector("head").insertAdjacentHTML("beforeend",'<meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="icon" href="https://s3.amazonaws.com/files.enjin.com/632721/material/images/favicon.png" sizes="32x32" type="image/png">')),m(),g(),console.info("[RBP]: Global page features constructed.")}r.d(t,"a",function(){return h})}});