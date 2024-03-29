/*
scrollConverter 1.0.2
https://github.com/koggdal/scroll-converter

Copyright 2011–2017 Johannes Koggdal (http://koggdal.com/)
Developed for BombayWorks (http://bombayworks.com/)

Released under MIT license
*/

window.scrollConverter=function(e,t,n){var o,r,l=t.documentElement,i=!1,a=!1,s=!1,c=function(n,o,r){if(!i)return!0;var a,s,c,v,d,u,f,h;return a=0,s=10,d=(l?l.offsetWidth:0)||0,u=t.body.scrollWidth||0,f=l?l.clientWidth:0,h=Math.max(d,u)-f,Math.abs(o.wheelDeltaX)>Math.abs(o.wheelDeltaY)||(o.detail?a=-240*o.detail:o.wheelDelta&&(a=5*o.wheelDelta),c=a/120*s,(v=n.x-c)>=0&&v<=h?(n.x=v,n.setByScript=!0,e.scrollTo(n.x,n.y)):0!==n.x&&n.x!==h&&(n.x=v>h?h:0,n.setByScript=!0,e.scrollTo(n.x,n.y)),"function"==typeof r&&r(n),!1)},v=function(n){var o="scroll"+(n=n.toUpperCase()),r="scroll"+("X"===n?"Left":"Top");return e["page"+n+"Offset"]||e[o]||function(){var e=t.documentElement||t.body.parentNode;return("number"==typeof e[r]?e:t.body)[r]}()},d=function(n,l){o=function(t){t=t||e.event;if(!1===c(n,t,l)){if(!t.preventDefault||!t.stopPropagation)return!1;t.preventDefault(),t.stopPropagation()}},r=function(){n.setByScript||(n.x=v("x"),n.y=v("y")),n.setByScript=!1},e.addEventListener?"onmousewheel"in e?(e.addEventListener("mousewheel",o,!1),e.addEventListener("scroll",r,!1)):(e.addEventListener("DOMMouseScroll",o,!1),e.addEventListener("scroll",r,!1)):(t.attachEvent("onmousewheel",o),e.attachEvent("onscroll",r))},u=function(){(o||r)&&(e.removeEventListener?"onmousewheel"in e?(e.removeEventListener("mousewheel",o,!1),e.removeEventListener("scroll",r,!1)):(e.removeEventListener("DOMMouseScroll",o,!1),e.removeEventListener("scroll",r,!1)):(t.detachEvent("onmousewheel",o),e.detachEvent("onscroll",r)))},f=function(e){return e.preventDefault(),e.stopPropagation(),!1};return{activate:function(t){if(i=!0,!s){d({x:0,y:0},t),s=!0}a&&(e.addEventListener?e.removeEventListener("scroll",f,!0):e.detachEvent("onscroll",f),a=!1)},deactivate:function(){i=!1,s&&(u(),s=!1)},deactivateAllScrolling:function(){i=!1,a=!0,e.addEventListener?e.addEventListener("scroll",f,!0):e.attachEvent("onscroll",f)}}}(window,document);


scrollConverter.activate();// hier komt je code
// console.log("Hallo wereld!");
