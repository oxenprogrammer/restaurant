(()=>{"use strict";var e={838:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(645),r=n.n(a)()((function(e){return e[1]}));r.push([e.id,'*{padding:0;margin:0;box-sizing:border-box}::before,::after{box-sizing:inherit}html,body{font-size:62.5%;width:100%;height:100%}img{max-width:100%;height:auto}body{overflow-x:hidden;font-family:"Lato",sans-serif;background-color:#f4e7a9;min-height:100vh}.navbar{position:sticky;top:0;background-color:rgba(255,255,255,.4);padding:1rem 0;z-index:100}.navbar .nav-links{display:flex;justify-content:center;text-transform:capitalize;text-align:center;padding:1rem;font-size:2rem;font-weight:bold;color:#d87093}.navbar .nav-links .link{padding:1rem}.navbar .nav-links .link:hover{font-size:2.2rem;color:#581b30;cursor:pointer;text-decoration:underline #581b30}.navbar .logo{display:flex;margin:0 auto;justify-content:center;width:5%}@media all and (max-width: 720px){.navbar .logo{width:20%}}.menu{display:none;padding:1rem;flex:1}.menu .dishes{display:inherit}@media all and (max-width: 768px){.menu .dishes{display:grid;grid-template-columns:auto auto;grid-template-rows:auto auto}}@media all and (max-width: 768px)and (max-width: 481px){.menu .dishes{grid-template-columns:auto;grid-template-rows:auto auto auto}}.menu .dishes .dish{padding:1rem;border-radius:.2rem;background-color:rgba(255,255,255,.8)}.menu .dishes .dish:hover{box-shadow:0 8px 8px 8px rgba(0,0,0,.2),0 8px 8px 0 rgba(0,0,0,.14),0 8px 8px 0 rgba(0,0,0,.12) !important;transform:translate3d(0, 0, 0);transition:background .4s cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.menu .dishes .dish .dish-name,.menu .dishes .dish .dish-ingredients{position:relative;top:-20rem;display:flex;justify-content:center;flex-direction:column;align-content:center;align-self:center;text-align:center;color:#49bb62;font-size:2rem}.menu .dishes .dish .dish-name{text-transform:capitalize;font-weight:bold;font-size:3rem;color:#e92121}.home{display:flex;flex:1}.home .container img{position:sticky;top:0;display:block;width:100vw;height:100vh;object-fit:cover}.home .container .home-title{position:relative;top:-50rem;display:flex;justify-content:center;align-content:center;text-align:center;font-size:8rem;font-weight:bold;background-color:rgba(255,255,255,.4);border-radius:1rem;width:max-content;padding:1rem;color:#e93818}@media all and (max-width: 768px){.home .container .home-title{font-size:5rem}}@media all and (max-width: 768px)and (max-width: 481px){.home .container .home-title{font-size:3rem}}.about{display:none;flex:1;justify-content:center;font-size:2rem;margin:8rem;padding:8rem;background-color:rgba(255,255,255,.4);border-radius:1rem}@media all and (max-width: 960px){.about{margin:4rem;padding:2rem}}@media all and (max-width: 960px)and (max-width: 481px){.about{margin:.4rem;padding:.4rem}}.about:hover{box-shadow:0 8px 8px 8px rgba(0,0,0,.2),0 8px 8px 0 rgba(0,0,0,.14),0 8px 8px 0 rgba(0,0,0,.12) !important;transform:translate3d(0, 0, 0);transition:background .4s cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.about .container{align-content:center;flex-direction:column;text-align:center}.about .container .about-header{font-size:4rem;text-transform:capitalize;color:#d87093}@media all and (max-width: 481px){.about .container .about-header{font-size:2rem}}.about .container .about-paragraph{padding:0 30rem;color:#7d9500}@media all and (max-width: 960px){.about .container .about-paragraph{margin:1rem;padding:1rem}}@media all and (max-width: 960px)and (max-width: 481px){.about .container .about-paragraph{margin:auto;padding:.2rem}}.footer-section{position:relative;bottom:0;display:flex;flex-shrink:0;justify-content:center;align-content:center;background-color:red;padding:2rem;font-size:2rem;color:#7d9500}',""]);const i=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);a&&r[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},379:(e,t,n)=>{var a,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function o(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},a=[],r=0;r<e.length;r++){var s=e[r],d=t.base?s[0]+t.base:s[0],l=n[d]||0,c="".concat(d," ").concat(l);n[d]=l+1;var u=o(c),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:c,updater:f(p,t),references:1}),a.push(c)}return a}function d(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var i=n.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,c=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,a){var r=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=c(t,r);else{var i=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function p(e,t,n){var a=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var m=null,h=0;function f(e,t){var n,a,r;if(t.singleton){var i=h++;n=m||(m=d(t)),a=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else n=d(t),a=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var r=o(n[a]);i[r].references--}for(var d=s(e,t),l=0;l<n.length;l++){var c=o(n[l]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}n=d}}}},724:(e,t,n)=>{e.exports=n.p+"4c0cfa64e9e75e52d4a0.jpg"},273:(e,t,n)=>{e.exports=n.p+"affb3278d13540bdd0f6.jpg"},62:(e,t,n)=>{e.exports=n.p+"8861f369f20dbbb2cd1a.jpg"},215:(e,t,n)=>{e.exports=n.p+"6c5bdf428402b2d0f452.jpg"},610:(e,t,n)=>{e.exports=n.p+"9b29c25b3ee1e8cf2a70.png"},897:(e,t,n)=>{e.exports=n.p+"d5c201993f058a231460.jpg"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),a=n(838);t()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;var r=n(610);var i=n(215);var o=n(724),s=n(273),d=n(62);const l=[{name:"cripsy fried chicken",ingredients:["chicken pistol","4 cups all-purpose flour, divided","2 tablespoons garlic salt","2 large eggs","Oil for deep-fat frying"],image:o},{name:"filipino chicken adobo",ingredients:["chicken pistol","4 cups all-purpose flour, divided","2 tablespoons garlic salt","2 large eggs","Oil for deep-fat frying"],image:s},{name:"Pan-Roasted Chicken and Vegetables",ingredients:["chicken pistol","4 cups all-purpose flour, divided","2 tablespoons garlic salt","2 large eggs","Oil for deep-fat frying"],image:n(897)},{name:"Grilled Huli Huli Chicken",ingredients:["chicken pistol","4 cups all-purpose flour, divided","2 tablespoons garlic salt","2 large eggs","Oil for deep-fat frying"],image:d}];var c,u;c=document.body,(u=document.createElement("div")).setAttribute("id","content"),u.appendChild(function(){var e=document.createElement("nav");e.setAttribute("class","navbar");var t=document.createElement("img");t.setAttribute("class","logo"),t.setAttribute("src",r);var n=document.createElement("header");n.setAttribute("class","nav-links");var a=document.createElement("div");a.setAttribute("class","link home-link"),a.textContent="home";var i=document.createElement("div");i.setAttribute("class","link menu-link"),i.textContent="menu";var o=document.createElement("div");return o.setAttribute("class","link contact-link"),o.textContent="about",a.addEventListener("click",(function(){var e=document.querySelector(".home"),t=document.querySelector(".menu"),n=document.querySelector(".about");"flex"===e.style.display?(t.style.display="none",n.style.display="none"):(e.style.display="flex",t.style.display="none",n.style.display="none")})),i.addEventListener("click",(function(){var e=document.querySelector(".home"),t=document.querySelector(".menu"),n=document.querySelector(".about");"flex"===t.style.display?(e.style.display="none",n.style.display="none"):(t.style.display="flex",e.style.display="none",n.style.display="none")})),o.addEventListener("click",(function(){var e=document.querySelector(".home"),t=document.querySelector(".menu"),n=document.querySelector(".about");"flex"===n.style.display?(e.style.display="none",t.style.display="none"):(n.style.display="flex",e.style.display="none",t.style.display="none")})),n.appendChild(a),n.appendChild(i),n.appendChild(o),e.appendChild(t),e.appendChild(n),e}()),u.appendChild(function(){var e=document.createElement("section");e.setAttribute("class","menu");var t=document.createElement("article");return t.setAttribute("class","dishes"),l.forEach((function(e){var n=document.createElement("div");n.setAttribute("class","dish-name");var a=document.createElement("img");a.setAttribute("class","dish-image");var r=document.createElement("div");r.setAttribute("class","dish"),n.textContent=e.name,a.setAttribute("src",e.image);var i=document.createElement("div");i.setAttribute("class","dish-ingredients"),e.ingredients.forEach((function(e){var t=document.createElement("div");t.setAttribute("class","ingredient"),t.textContent=e,i.appendChild(t)})),r.appendChild(a),r.appendChild(n),r.appendChild(i),t.appendChild(r)})),e.appendChild(t),e}()),u.appendChild(function(){var e=document.createElement("section");e.setAttribute("class","home");var t=document.createElement("article");t.setAttribute("class","container");var n=document.createElement("img");n.setAttribute("class","home-image_1"),n.setAttribute("src",i);var a=document.createElement("h1");return a.setAttribute("class","home-title"),a.textContent="La Carne Restaurante",t.appendChild(n),t.appendChild(a),e.appendChild(t),e}()),u.appendChild(function(){var e=document.createElement("section");e.setAttribute("class","about");var t=document.createElement("article");t.setAttribute("class","container");var n=document.createElement("h2");n.setAttribute("class","about-header"),n.textContent="who we are";var a=document.createElement("p");return a.setAttribute("class","about-paragraph"),a.textContent="Un restaurante, o un restaurante, es un negocio que prepara y sirve comida y bebidas a los clientes. Las comidas se sirven y comen generalmente en el local, pero muchos restaurantes también ofrecen servicios para llevar y de entrega de alimentos",t.appendChild(n),t.appendChild(a),e.appendChild(t),e}()),u.appendChild(function(){var e=document.createElement("section");e.setAttribute("class","footer-section");var t=document.createElement("footer");return t.setAttribute("class","footer"),t.textContent="Copyright @ Emmisteel 2021",e.appendChild(t),e}()),c.appendChild(u)})()})();