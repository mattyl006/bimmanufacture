!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}({5:function(e,t){var r=document.querySelector(".pop-up__counter--js"),n=document.querySelectorAll(".pop-up__counter-number1--js");new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&setTimeout((function(){n.forEach((function(e){var t=1,r=1;"180000"===e.getAttribute("data-target")?(t=500,r=10):"9000"===e.getAttribute("data-target")?(t=600,r=15):(t=660,r=15);!function n(){var o=+e.getAttribute("data-target"),u=+e.innerText,i=o/t;u<o?(e.innerText=Math.ceil(u+i),setTimeout(n,r)):e.innerText=o}()}))}),1e3)}))}),{rootMargin:"0px"}).observe(r)}});