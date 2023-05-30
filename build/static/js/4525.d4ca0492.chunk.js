"use strict";(self.webpackChunkionbanking=self.webpackChunkionbanking||[]).push([[4525],{4525:function(n,e,t){t.r(e),t.d(e,{startInputShims:function(){return p}});var o=t(3431),r=t(9069),i=new WeakMap,a=function(n,e,t,o){void 0===o&&(o=0),i.has(n)!==t&&(t?c(n,e,o):l(n,e))},u=function(n){return n===n.getRootNode().activeElement},c=function(n,e,t){var o=e.parentNode,r=e.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o.appendChild(r),i.set(n,r);var a="rtl"===n.ownerDocument.dir?9999:-9999;n.style.pointerEvents="none",e.style.transform="translate3d(".concat(a,"px,").concat(t,"px,0) scale(0)")},l=function(n,e){var t=i.get(n);t&&(i.delete(n),t.remove()),n.style.pointerEvents="",e.style.transform=""},s="input, textarea, [no-blur], [contenteditable]",d=function(n,e,t,o){var r=n.top,i=n.bottom,a=e.top,u=a+15,c=.75*Math.min(e.bottom,o-t)-i,l=u-r,s=Math.round(c<0?-c:l>0?-l:0),d=Math.min(s,r-a),f=Math.abs(d)/.3;return{scrollAmount:d,scrollDuration:Math.min(400,Math.max(150,f)),scrollPadding:t,inputSafeY:4-(r-u)}},f=function(n,e,t,i,u){return(0,o.mG)(void 0,void 0,void 0,(function(){var c,l,s,f,v,m;return(0,o.Jh)(this,(function(p){switch(p.label){case 0:return t||i?(c=function(n,e,t){var o=n.closest("ion-item,[ion-item]")||n;return d(o.getBoundingClientRect(),e.getBoundingClientRect(),t,n.ownerDocument.defaultView.innerHeight)}(n,t||i,u),t&&Math.abs(c.scrollAmount)<4?(e.focus(),[2]):(a(n,e,!0,c.inputSafeY),e.focus(),(0,r.r)((function(){return n.click()})),"undefined"===typeof window?[3,3]:(s=function(){return(0,o.mG)(void 0,void 0,void 0,(function(){return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return void 0!==l&&clearTimeout(l),window.removeEventListener("ionKeyboardDidShow",f),window.removeEventListener("ionKeyboardDidShow",s),t?[4,t.scrollByPoint(0,c.scrollAmount,c.scrollDuration)]:[3,2];case 1:o.sent(),o.label=2;case 2:return a(n,e,!1,c.inputSafeY),e.focus(),[2]}}))}))},f=function(){window.removeEventListener("ionKeyboardDidShow",f),window.addEventListener("ionKeyboardDidShow",s)},t?[4,t.getScrollElement()]:[3,2]))):[2];case 1:if(v=p.sent(),m=v.scrollHeight-v.clientHeight,c.scrollAmount>m-v.scrollTop)return"password"===e.type?(c.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",f)):window.addEventListener("ionKeyboardDidShow",s),l=setTimeout(s,1e3),[2];p.label=2;case 2:s(),p.label=3;case 3:return[2]}}))}))},v=function(n,e,t){if(e&&t){var o=e.x-t.x,r=e.y-t.y;return o*o+r*r>n*n}return!1},m=function(n,e){if("INPUT"===n.tagName&&(!n.parentElement||"ION-INPUT"!==n.parentElement.tagName)&&(!n.parentElement||!n.parentElement.parentElement||"ION-SEARCHBAR"!==n.parentElement.parentElement.tagName)){var t=n.closest("ion-content");if(null!==t){var o=t.$ionPaddingTimer;o&&clearTimeout(o),e>0?t.style.setProperty("--keyboard-offset","".concat(e,"px")):t.$ionPaddingTimer=setTimeout((function(){t.style.setProperty("--keyboard-offset","0px")}),120)}}},p=function(n){var e=document,t=n.getNumber("keyboardHeight",290),i=n.getBoolean("scrollAssist",!0),c=n.getBoolean("hideCaretOnScroll",!0),l=n.getBoolean("inputBlurring",!0),d=n.getBoolean("scrollPadding",!0),p=Array.from(e.querySelectorAll("ion-input, ion-textarea")),h=new WeakMap,w=new WeakMap,g=function(n){return(0,o.mG)(void 0,void 0,void 0,(function(){var e,l,s,d,m;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return[4,new Promise((function(e){return(0,r.c)(n,e)}))];case 1:return o.sent(),e=n.shadowRoot||n,l=e.querySelector("input")||e.querySelector("textarea"),s=n.closest("ion-content"),d=s?null:n.closest("ion-footer"),l?(s&&c&&!h.has(n)&&(m=function(n,e,t){if(!t||!e)return function(){};var o=function(t){u(e)&&a(n,e,t)},i=function(){return a(n,e,!1)},c=function(){return o(!0)},l=function(){return o(!1)};return(0,r.a)(t,"ionScrollStart",c),(0,r.a)(t,"ionScrollEnd",l),e.addEventListener("blur",i),function(){(0,r.b)(t,"ionScrollStart",c),(0,r.b)(t,"ionScrollEnd",l),e.addEventListener("ionBlur",i)}}(n,l,s),h.set(n,m)),(s||d)&&i&&!w.has(n)&&(m=function(n,e,t,o,i){var a,c=function(n){a=(0,r.p)(n)},l=function(c){if(a){var l=(0,r.p)(c);v(6,a,l)||u(e)||(c.stopPropagation(),f(n,e,t,o,i))}};return n.addEventListener("touchstart",c,!0),n.addEventListener("touchend",l,!0),function(){n.removeEventListener("touchstart",c,!0),n.removeEventListener("touchend",l,!0)}}(n,l,s,d,t),w.set(n,m)),[2]):[2]}}))}))};l&&function(){var n=!0,e=!1,t=document,o=function(){e=!0},i=function(){n=!0},a=function(o){if(e)e=!1;else{var r=t.activeElement;if(r&&!r.matches(s)){var i=o.target;i!==r&&(i.matches(s)||i.closest(s)||(n=!1,setTimeout((function(){n||r.blur()}),50)))}}};(0,r.a)(t,"ionScrollStart",o),t.addEventListener("focusin",i,!0),t.addEventListener("touchend",a,!1)}(),d&&function(n){var e=document,t=function(e){m(e.target,n)},o=function(n){m(n.target,0)};e.addEventListener("focusin",t),e.addEventListener("focusout",o)}(t);for(var E=0,b=p;E<b.length;E++){var y=b[E];g(y)}e.addEventListener("ionInputDidLoad",(function(n){g(n.detail)})),e.addEventListener("ionInputDidUnload",(function(n){!function(n){var e;c&&((e=h.get(n))&&e(),h.delete(n)),i&&((e=w.get(n))&&e(),w.delete(n))}(n.detail)}))}}}]);
//# sourceMappingURL=4525.d4ca0492.chunk.js.map