"use strict";(self.webpackChunkionbanking=self.webpackChunkionbanking||[]).push([[9773],{9773:function(e,i,t){t.r(i),t.d(i,{ion_split_pane:function(){return l}});var s=t(3431),n=t(5785),r=t(7923),o="split-pane-main",d="split-pane-side",a={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""},l=function(){function e(e){(0,n.r)(this,e),this.ionSplitPaneVisible=(0,n.e)(this,"ionSplitPaneVisible",7),this.visible=!1,this.disabled=!1,this.when=a.lg}return e.prototype.visibleChanged=function(e){var i={visible:e,isPane:this.isPane.bind(this)};this.ionSplitPaneVisible.emit(i)},e.prototype.connectedCallback=function(){return(0,s.mG)(this,void 0,void 0,(function(){return(0,s.Jh)(this,(function(e){switch(e.label){case 0:return"undefined"===typeof customElements?[3,2]:[4,customElements.whenDefined("ion-split-pane")];case 1:e.sent(),e.label=2;case 2:return this.styleChildren(),this.updateState(),[2]}}))}))},e.prototype.disconnectedCallback=function(){this.rmL&&(this.rmL(),this.rmL=void 0)},e.prototype.updateState=function(){var e=this;if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled)this.visible=!1;else{var i=this.when;if("boolean"!==typeof i){var t=a[i]||i;if(0!==t.length){if(window.matchMedia){var s=function(i){e.visible=i.matches},n=window.matchMedia(t);n.addListener(s),this.rmL=function(){return n.removeListener(s)},this.visible=n.matches}}else this.visible=!1}else this.visible=i}},e.prototype.isPane=function(e){return!!this.visible&&(e.parentElement===this.el&&e.classList.contains(d))},e.prototype.styleChildren=function(){for(var e=this.contentId,i=this.el.children,t=this.el.childElementCount,s=!1,n=0;n<t;n++){var r=i[n],o=void 0!==e&&r.id===e;if(o){if(s)return void console.warn("split pane cannot have more than one main node");s=!0}p(r,o)}s||console.warn("split pane does not have a specified main node")},e.prototype.render=function(){var e,i=(0,r.b)(this);return(0,n.h)(n.H,{class:(e={},e[i]=!0,e["split-pane-".concat(i)]=!0,e["split-pane-visible"]=this.visible,e)},(0,n.h)("slot",null))},Object.defineProperty(e.prototype,"el",{get:function(){return(0,n.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}},enumerable:!1,configurable:!0}),e}(),p=function(e,i){var t,s;i?(t=o,s=d):(t=d,s=o);var n=e.classList;n.add(t),n.remove(s)};l.style={ios:":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none !important;box-shadow:none !important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host{--border:0.55px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:0;border-right:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:unset;border-right:unset;-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border)}}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:var(--border);border-right:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:unset;border-right:unset;-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0}}",md:":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none !important;box-shadow:none !important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host{--border:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:0;border-right:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:unset;border-right:unset;-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border)}}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:var(--border);border-right:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:unset;border-right:unset;-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0}}"}}}]);
//# sourceMappingURL=9773.3661de84.chunk.js.map