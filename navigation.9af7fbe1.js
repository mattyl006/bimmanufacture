!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}({3:function(e,t){var n=document.querySelector(".navigation__hamburger--js"),i=document.querySelector(".navigation__list--js"),r=document.querySelector(".navigation__polish--js"),o=document.querySelector(".navigation__english--js");document.getElementById("main--js").addEventListener("click",(function(){i.classList.contains("visible")&&(i.classList.remove("visible"),n.classList.remove("navigation__hamburger--active"))})),n.addEventListener("click",(function(){i.classList.add("menu--animation"),i.classList.contains("visible")?(i.classList.remove("visible"),n.classList.remove("navigation__hamburger--active")):(i.classList.add("visible"),n.classList.add("navigation__hamburger--active"))})),r.addEventListener("click",(function(){console.log("clicked")})),o.addEventListener("click",(function(){console.log("clicked")}))}});