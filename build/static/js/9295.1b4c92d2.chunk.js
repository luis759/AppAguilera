"use strict";(self.webpackChunkionbanking=self.webpackChunkionbanking||[]).push([[9295],{9295:function(t,i,o){o.r(i),o.d(i,{ion_img:function(){return s}});var e=o(5785),n=o(7923),r=o(9069),s=function(){function t(t){var i=this;(0,e.r)(this,t),this.ionImgWillLoad=(0,e.e)(this,"ionImgWillLoad",7),this.ionImgDidLoad=(0,e.e)(this,"ionImgDidLoad",7),this.ionError=(0,e.e)(this,"ionError",7),this.inheritedAttributes={},this.onLoad=function(){i.ionImgDidLoad.emit()},this.onError=function(){i.ionError.emit()}}return t.prototype.srcChanged=function(){this.addIO()},t.prototype.componentWillLoad=function(){this.inheritedAttributes=(0,r.i)(this.el,["draggable"])},t.prototype.componentDidLoad=function(){this.addIO()},t.prototype.addIO=function(){var t=this;void 0!==this.src&&("undefined"!==typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver((function(i){i[i.length-1].isIntersecting&&(t.load(),t.removeIO())})),this.io.observe(this.el)):setTimeout((function(){return t.load()}),200))},t.prototype.load=function(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()},t.prototype.removeIO=function(){this.io&&(this.io.disconnect(),this.io=void 0)},t.prototype.render=function(){var t=this,i=t.loadSrc,o=t.alt,r=t.onLoad,s=t.loadError,a=t.inheritedAttributes.draggable;return(0,e.h)(e.H,{class:(0,n.b)(this)},(0,e.h)("img",{decoding:"async",src:i,alt:o,onLoad:r,onError:s,part:"image",draggable:c(a)}))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,e.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{src:["srcChanged"]}},enumerable:!1,configurable:!0}),t}(),c=function(t){switch(t){case"true":return!0;case"false":return!1;default:return}};s.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}]);
//# sourceMappingURL=9295.1b4c92d2.chunk.js.map