!function(e){function t(t){for(var n,i,s=t[0],c=t[1],l=t[2],u=0,m=[];u<s.length;u++)i=s[u],a[i]&&m.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(d&&d(t);m.length;)m.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={5:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;o.push([53,0]),r()}({4:function(e,t,r){"use strict";async function n(e){const t=await fetch(e);if(t.ok)return await t.json();throw new Error(t.status)}async function a(e,t){const r=await fetch(e,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});if(r.ok)return await r.json();throw new Error(r.status)}r.d(t,"a",function(){return n}),r.d(t,"b",function(){return a})},53:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r(4);const o={KEY:"e82qmvhf6egvsqdmpemmps2dskp62teu",GUILD:"Really Bad Players",REALM:"Blackrock",AVATAR_BASE:"https://render-us.worldofwarcraft.com/character/",rosterURL:function(){return`https://us.api.battle.net/wow/guild/${this.REALM}/${encodeURIComponent(this.GUILD)}?fields=members&locale=en_US&apikey=${this.KEY}`}};var i=r(8);const s=[2,7,8],c={0:"Guild Master",1:"Officers",2:"Officer Alt",3:"Gorb 2.0",4:"Raider Rank 2",5:"Raider Rank 1",6:"Recruit",7:"Fan",8:"Player Alts"},l={1:"warrior",2:"paladin",3:"hunter",4:"unknown",5:"priest",6:"death-knight",7:"shaman",8:"mage",9:"warlock",10:"monk",11:"druid",12:"demon-hunter"};async function d(){const e=document.querySelector("#page-roster .roster");try{const t=await Object(a.a)(o.rosterURL());!function(e){e.members=e.members.sort((e,t)=>e.rank-t.rank)}(t),function(e){e.members=e.members.filter(e=>!s.includes(e.rank))}(t),e.innerHTML="",e.insertAdjacentHTML("beforeend",function(e){return e.members.map(e=>`\n      <div class="roster--character mdc-ripple-target">\n        <div class="roster--bg">\n          <div class="roster--avatar">\n            <img class="roster--avatar__img" src="${o.AVATAR_BASE+e.character.thumbnail}">\n          </div>\n          <div class="roster--info">\n            <div class="roster--info__name class-${l[e.character.class]}">${e.character.name}</div>\n            <div class="roster--info__rank">${c[e.rank]}</div>\n            <div class="roster--info__armory">\n              <a href='https://www.worldofwarcraft.com/en-us/character/blackrock/${e.character.name}' target='_blank'>\n                <img class='character-links__img' width='24' height='24' src='https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/WoW.png'>\n              </a>\n              <a href='https://raider.io/characters/us/blackrock/${e.character.name}' target='_blank'>\n                <img class='character-links__img' width='24' height='24' src='https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/raiderio.png'>\n              </a>\n              <a href='https://www.warcraftlogs.com/character/us/blackrock/${e.character.name}' target='_blank'>\n                <img class='character-links__img' width='24' height='24' src='https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/warcraftlogs.png'>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>`).join("")}(t)),e.querySelectorAll(".mdc-ripple-target").forEach(e=>{n.a.attachTo(e)})}catch(e){console.error("Blizzard API network error: "+e)}}document.addEventListener("DOMContentLoaded",()=>{Object(i.a)(),d()})},8:function(e,t,r){"use strict";var n=r(2),a=r(13),o=r(11),i=r(16),s=r(15),c=r(10),l=r(4);const d=document.querySelector(".mdc-drawer"),u=document.querySelector(".mdc-top-app-bar"),m=document.querySelector(".mdc-tab-bar");function f(){!async function(){const e=document.getElementById("user-button"),t={jsonrpc:"2.0",id:Math.round(899999*Math.random()+1e5),method:"User.get"};try{const r=await Object(l.b)("/api/v1/api.php",t),i=r.result.logged_in?"#registered-menu":"#guest-menu",s=document.querySelector(i),c=new a.a(s),d=document.getElementById("user-button");if(r.result.logged_in){const t=document.querySelector(".join-site");if(e.innerHTML=`<div class='user-menu__avatar user-menu__slide'>\n          <img class='user-menu__img' src='${r.result.avatar_medium}'>\n        </div>`,t){const e=s.querySelector(".mdc-list");e.insertAdjacentHTML("beforeend","<li class='mdc-list-item' role='menuitem' tabindex='0'>\n            <a class='join-us' href='#' onclick='Enjin_Core.joinWebsiteRegular(event);return false;' rel='nofollow'>Join Website</a>\n          </li>"),new link.MDCLink(e).singleSelection=!0}(r.result.admin_access.full||r.result.admin_access.limited)&&s.setAttribute("data-admin","True"),s.querySelectorAll(".mdc-list-item").forEach(e=>{n.a.attachTo(e)}),o.a.attachTo(document.querySelector(".mdc-menu-surface")),c.setAnchorMargin({top:50}),n.a.attachTo(document.querySelector(".user-menu__avatar"));const a=[`Hello ${r.result.username}, you sultry snail.`,`Hello ${r.result.username}, you beautiful, rule-breaking moth.`,`Hello ${r.result.username}, you powerful musk ox.`,`Make way for ${r.result.username}, the worthy sperm.`,`Is it ${r.result.username} or is it just hot in here?`,`Stay safe out there ${r.result.username}.`,`Hello, <${r.result.username} the Irreplaceable>`,`Suffer well, ${r.result.username}.`,`Oh, hello ${r.result.username}. Have you heard the story of the hozen and the buttercream pie?`],i=document.querySelector(".mdc-drawer__subtitle");if(i){const e=Math.floor(Math.random()*a.length);i.innerText=a[e]}}else e.innerHTML='Hello, Guest <i class="material-icons">keyboard_arrow_down</i>';d.addEventListener("click",()=>c.open=!c.open)}catch(e){console.error("User menu error: "+e)}}(),function(){const e=i.a.attachTo(d),t=s.a.attachTo(u);c.a.attachTo(m),t.listen("MDCTopAppBar:nav",()=>{e.open=!e.open})}(),function(){const e=document.querySelector(".window_header .window_page");e&&(e.innerHTML='<i class="material-icons">settings</i>',document.addEventListener("click",e=>{let t=document.querySelector(".button_click.active");!t||e.target.closest(".button_window")||e.target.closest(".button_click.active")||t.click()}))}(),function(){const e=document.getElementById("enjin-tray");let t=0,r=!1;window.addEventListener("scroll",function(){t=window.scrollY,r||(window.requestAnimationFrame(()=>{!function(e,t){t>0?e.classList.add("user_tray__scrolled"):e.classList.remove("user_tray__scrolled")}(e,t),r=!1}),r=!0)})}()}function p(e,t){const r=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div");return a.classList.add("discord-widget__members"),r.classList.add("discord-widget__channel"),r.setAttribute("data-id",t),n.classList.add("discord-widget__channel__name"),n.innerHTML=e,r.appendChild(n),r.appendChild(a),r}function h(e,t,r){const n=document.createElement("div"),a=document.createElement("div"),o=document.createElement("img"),i=document.createElement("span");if(n.classList.add("discord-widget-member"),a.classList.add("discord-widget-member__avatar"),o.src=t,i.innerHTML=e,i.classList.add("discord-widget-member__name"),a.appendChild(o),n.appendChild(a),n.appendChild(i),r){const e=document.createElement("span");e.classList.add("discord-widget-member__game"),e.innerHTML=r.name,n.appendChild(e)}return n}function g(){13020514===current_page_id&&document.querySelector("#section-footer .section").insertAdjacentHTML("beforeend",'\n    <footer class="footer">\n        <div class="flex-container">\n            <div class="footer__background">\n                <div class="footer__top">\n                    <div class="footer-block footer-block--padded">\n                        <div class="footer__logo">\n                            <img src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/logo_medium.png">\n                        </div>\n                        <div class="footer__description">\n                            <span class="footer__description--guild">Really Bad Players</span>\n                            <span class="footer__description--info">US / Blackrock / Horde</span>\n                        </div>\n                    </div>\n                    <div class="footer-block footer-block--padded">\n                        <div class="footer-block--title">Navigation</div>\n                        <ul class="footer-list">\n                            <li><a href="/">Home</a></li>\n                            <li><a href="/about">About Us</a></li>\n                            <li><a href="/apply">Application</a></li>\n                            <li><a href="/forum">Forum</a></li>\n                            <li><a href="/roster">Roster</a></li>\n                            <li><a href="https://www.warcraftlogs.com/guild/id/5825">Logs</a></li>\n                        </ul>\n                    </div>\n                    <div class="footer-block footer-block--padded">\n                        <div class="footer-block--title">About</div>\n                        <ul class="footer-list">\n                            <li><a href="/about#guild">Guild History</a></li>\n                            <li><a href="/about#ranks">Ranking Structure</a></li>\n                            <li><a href="/about#loot">Loot Distribution</a></li>\n                            <li><a href="/about#addons">Required Addons</a></li>\n                        </ul>\n                    </div>\n                    <div class="footer-block footer-block--padded">\n                        <div class="footer-block--title">Resources</div>\n                        <ul class="footer-list">\n                            <li><a href="https://www.warcraftlogs.com/guild/id/5825">WarcraftLogs</a></li>\n                            <li><a href="https://www.wowprogress.com/guild/us/blackrock/Really+Bad+Players">Wowprogress</a></li>\n                            <li><a href="https://raider.io/guilds/us/blackrock/Really%20Bad%20Players">Raider.IO</a></li>\n                            <li><a href="https://www.raidbots.com/simbot">Raidbots</a></li>\n                        </ul>\n                    </div>\n                    <div class="footer-block">\n                        <div class="discord-parent">\n                            <div class="discord-title">Discord</div>\n                        </div>\n                    </div>\n                </div>\n                <div class="footer__bottom">\n                    <div class="footer__bottom--left">\n                        <span class="copyright-info">Copyright © Really Bad Players. All rights reserved.</span>\n                    </div>\n                    <div class="footer__bottom--right">\n                        <span class="footer-links">Designed by <a href="https://worldofwarcraft.com/en-us/character/blackrock/duckie">Duckie</a> Powered by <a href="https://www.enjin.com/">Enjin</a></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </footer>'),async function(){const e=document.querySelector(".discord-parent");let t=0;if(e)try{const r=await Object(l.a)("https://discordapp.com/api/servers/142372929961721856/embed.json"),n=r.channels.sort((e,t)=>e.position-t.position),a=document.createElement("div");a.classList.add("discord-widget");for(let e of n)a.appendChild(p(e.name,e.id));a.appendChild(p("Online Users",0));for(const e of r.members){e.channel_id&&a.querySelector('div[data-id="'+e.channel_id+'"]').appendChild(h(e.username,e.avatar_url));const r=a.querySelector('div[data-id="0"] .discord-widget__members');"online"===e.status&&(t++,r.appendChild(h(e.username,e.avatar_url,e.game)))}const o=document.querySelector("#discord-box .discord__description");if(o){const e=`${t} Members Currently Online`;o.innerHTML=e}e.appendChild(a)}catch(e){console.error("Discord widget failure "+e)}}()}function v(){document.querySelector('meta[name="viewport"]')&&(document.querySelectorAll('head link[rel="icon"]').forEach(e=>e.remove()),document.querySelector("head").insertAdjacentHTML("beforeend",'<meta name="viewport" content="width=device-width, initial-scale=1.0">\n      <link rel="icon" href="https://s3.amazonaws.com/files.enjin.com/632721/material/images/favicon.png" sizes="32x32" type="image/png">')),f(),g(),console.info("[RBP]: Global page features constructed.")}r.d(t,"a",function(){return v})}});
//# sourceMappingURL=roster.js.map