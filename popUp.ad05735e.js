!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}({6:function(e,t){var n=document.querySelector(".pop-up-1--js"),o=document.querySelector(".pop-up-2--js"),r=document.querySelector(".pop-up-3--js"),i=document.querySelector(".realizations__button-left--js"),c=document.querySelector(".realizations__button-center--js"),u=document.querySelector(".realizations__button-right--js"),l=document.querySelector(".pop-up__close-1--js"),s=document.querySelector(".pop-up__close-2--js"),p=document.querySelector(".pop-up__close-3--js");i.addEventListener("click",(function(){n.classList.add("visible-popUp")})),c.addEventListener("click",(function(){o.classList.add("visible-popUp")})),u.addEventListener("click",(function(){r.classList.add("visible-popUp")})),l.addEventListener("click",(function(){n.classList.remove("visible-popUp")})),s.addEventListener("click",(function(){o.classList.remove("visible-popUp")})),p.addEventListener("click",(function(){r.classList.remove("visible-popUp")}))}});