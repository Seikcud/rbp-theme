(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,e,s){"use strict";s.d(e,"c",function(){return i}),s.d(e,"e",function(){return n}),s.d(e,"d",function(){return a}),s.d(e,"b",function(){return r}),s.d(e,"a",function(){return o});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const i={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},n={CLOSED_EVENT:"MDCMenuSurface:closed",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:'button:not(:disabled), [href]:not([aria-disabled="true"]), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'},a={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67},r={BOTTOM:1,CENTER:2,RIGHT:4,FLIP_RTL:8},o={TOP_LEFT:0,TOP_RIGHT:r.RIGHT,BOTTOM_LEFT:r.BOTTOM,BOTTOM_RIGHT:r.BOTTOM|r.RIGHT,TOP_START:r.FLIP_RTL,TOP_END:r.FLIP_RTL|r.RIGHT,BOTTOM_START:r.BOTTOM|r.FLIP_RTL,BOTTOM_END:r.BOTTOM|r.RIGHT|r.FLIP_RTL}},function(t,e,s){"use strict";var i=s(5);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var n=s(3);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const a={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},r={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},o={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
let l,c;function d(t=window,e=!1){if(void 0===c||e){let e=!1;try{t.document.addEventListener("test",null,{get passive(){return e=!0}})}catch(t){}c=e}return!!c&&{passive:!0}}const h=["touchstart","pointerdown","mousedown","keydown"],_=["touchend","pointerup","mouseup"];let u=[];class p extends n.a{static get cssClasses(){return a}static get strings(){return r}static get numbers(){return o}static get defaultAdapter(){return{browserSupportsCssVars:()=>{},isUnbounded:()=>{},isSurfaceActive:()=>{},isSurfaceDisabled:()=>{},addClass:()=>{},removeClass:()=>{},containsEventTarget:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:()=>{},computeBoundingRect:()=>{},getWindowPageOffset:()=>{}}}constructor(t){super(Object.assign(p.defaultAdapter,t)),this.layoutFrame_=0,this.frame_={width:0,height:0},this.activationState_=this.defaultActivationState_(),this.initialSize_=0,this.maxRadius_=0,this.activateHandler_=(t=>this.activate_(t)),this.deactivateHandler_=(()=>this.deactivate_()),this.focusHandler_=(()=>this.handleFocus()),this.blurHandler_=(()=>this.handleBlur()),this.resizeHandler_=(()=>this.layout()),this.unboundedCoords_={left:0,top:0},this.fgScale_=0,this.activationTimer_=0,this.fgDeactivationRemovalTimer_=0,this.activationAnimationHasEnded_=!1,this.activationTimerCallback_=(()=>{this.activationAnimationHasEnded_=!0,this.runDeactivationUXLogicIfReady_()}),this.previousActivationEvent_}supportsPressRipple_(){return this.adapter_.browserSupportsCssVars()}defaultActivationState_(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:void 0,isProgrammatic:!1}}init(){const t=this.supportsPressRipple_();if(this.registerRootHandlers_(t),t){const{ROOT:t,UNBOUNDED:e}=p.cssClasses;requestAnimationFrame(()=>{this.adapter_.addClass(t),this.adapter_.isUnbounded()&&(this.adapter_.addClass(e),this.layoutInternal_())})}}destroy(){if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(p.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(p.cssClasses.FG_DEACTIVATION));const{ROOT:t,UNBOUNDED:e}=p.cssClasses;requestAnimationFrame(()=>{this.adapter_.removeClass(t),this.adapter_.removeClass(e),this.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()}registerRootHandlers_(t){t&&(h.forEach(t=>{this.adapter_.registerInteractionHandler(t,this.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)}registerDeactivationHandlers_(t){"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):_.forEach(t=>{this.adapter_.registerDocumentInteractionHandler(t,this.deactivateHandler_)})}deregisterRootHandlers_(){h.forEach(t=>{this.adapter_.deregisterInteractionHandler(t,this.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}deregisterDeactivationHandlers_(){this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),_.forEach(t=>{this.adapter_.deregisterDocumentInteractionHandler(t,this.deactivateHandler_)})}removeCssVars_(){const{strings:t}=p;Object.keys(t).forEach(e=>{0===e.indexOf("VAR_")&&this.adapter_.updateCssVariable(t[e],null)})}activate_(t){if(this.adapter_.isSurfaceDisabled())return;const e=this.activationState_;if(e.isActivated)return;const s=this.previousActivationEvent_;s&&void 0!==t&&s.type!==t.type||(e.isActivated=!0,e.isProgrammatic=void 0===t,e.activationEvent=t,e.wasActivatedByPointer=!e.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&u.length>0&&u.some(t=>this.adapter_.containsEventTarget(t))?this.resetActivationState_():(void 0!==t&&(u.push(t.target),this.registerDeactivationHandlers_(t)),e.wasElementMadeActive=this.checkElementMadeActive_(t),e.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(()=>{u=[],e.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(e.wasElementMadeActive=this.checkElementMadeActive_(t),e.wasElementMadeActive&&this.animateActivation_()),e.wasElementMadeActive||(this.activationState_=this.defaultActivationState_())})))}checkElementMadeActive_(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()}activate(t){this.activate_(t)}animateActivation_(){const{VAR_FG_TRANSLATE_START:t,VAR_FG_TRANSLATE_END:e}=p.strings,{FG_DEACTIVATION:s,FG_ACTIVATION:i}=p.cssClasses,{DEACTIVATION_TIMEOUT_MS:n}=p.numbers;this.layoutInternal_();let a="",r="";if(!this.adapter_.isUnbounded()){const{startPoint:t,endPoint:e}=this.getFgTranslationCoordinates_();a=`${t.x}px, ${t.y}px`,r=`${e.x}px, ${e.y}px`}this.adapter_.updateCssVariable(t,a),this.adapter_.updateCssVariable(e,r),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(s),this.adapter_.computeBoundingRect(),this.adapter_.addClass(i),this.activationTimer_=setTimeout(()=>this.activationTimerCallback_(),n)}getFgTranslationCoordinates_(){const{activationEvent:t,wasActivatedByPointer:e}=this.activationState_;let s;return{startPoint:s={x:(s=e?function(t,e,s){const{x:i,y:n}=e,a=i+s.left,r=n+s.top;let o,l;return"touchstart"===t.type?(o=(t=t).changedTouches[0].pageX-a,l=t.changedTouches[0].pageY-r):(o=(t=t).pageX-a,l=t.pageY-r),{x:o,y:l}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(t,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:s.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}runDeactivationUXLogicIfReady_(){const{FG_DEACTIVATION:t}=p.cssClasses,{hasDeactivationUXRun:e,isActivated:s}=this.activationState_;(e||!s)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(t),this.fgDeactivationRemovalTimer_=setTimeout(()=>{this.adapter_.removeClass(t)},o.FG_DEACTIVATION_MS))}rmBoundedActivationClasses_(){const{FG_ACTIVATION:t}=p.cssClasses;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}resetActivationState_(){this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(()=>this.previousActivationEvent_=void 0,p.numbers.TAP_DELAY_MS)}deactivate_(){const t=this.activationState_;if(!t.isActivated)return;const e=Object.assign({},t);t.isProgrammatic?(requestAnimationFrame(()=>this.animateDeactivation_(e)),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(()=>{this.activationState_.hasDeactivationUXRun=!0,this.animateDeactivation_(e),this.resetActivationState_()}))}deactivate(){this.deactivate_()}animateDeactivation_({wasActivatedByPointer:t,wasElementMadeActive:e}){(t||e)&&this.runDeactivationUXLogicIfReady_()}layout(){this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(()=>{this.layoutInternal_(),this.layoutFrame_=0})}layoutInternal_(){this.frame_=this.adapter_.computeBoundingRect();const t=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?t:(()=>{return Math.sqrt(Math.pow(this.frame_.width,2)+Math.pow(this.frame_.height,2))+p.numbers.PADDING})(),this.initialSize_=Math.floor(t*p.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}updateLayoutCssVars_(){const{VAR_FG_SIZE:t,VAR_LEFT:e,VAR_TOP:s,VAR_FG_SCALE:i}=p.strings;this.adapter_.updateCssVariable(t,`${this.initialSize_}px`),this.adapter_.updateCssVariable(i,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(e,`${this.unboundedCoords_.left}px`),this.adapter_.updateCssVariable(s,`${this.unboundedCoords_.top}px`))}setUnbounded(t){const{UNBOUNDED:e}=p.cssClasses;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}handleFocus(){requestAnimationFrame(()=>this.adapter_.addClass(p.cssClasses.BG_FOCUSED))}handleBlur(){requestAnimationFrame(()=>this.adapter_.removeClass(p.cssClasses.BG_FOCUSED))}}var m=p;s.d(e,"a",function(){return E}),s.d(e,"b",function(){return m});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class E extends i.a{constructor(...t){super(...t),this.disabled=!1,this.unbounded_}static attachTo(t,{isUnbounded:e}={}){const s=new E(t);return void 0!==e&&(s.unbounded=e),s}static createAdapter(t){const e=function(t){const e=["matches","webkitMatchesSelector","msMatchesSelector"];let s="matches";for(let i=0;i<e.length;i++){const n=e[i];if(n in t){s=n;break}}return s}(HTMLElement.prototype);return{browserSupportsCssVars:()=>(function(t,e=!1){let s=l;if("boolean"==typeof l&&!e)return s;if(!t.CSS||"function"!=typeof t.CSS.supports)return;const i=t.CSS.supports("--css-vars","yes"),n=t.CSS.supports("(--css-vars: yes)")&&t.CSS.supports("color","#00000000");return s=!(!i&&!n||function(t){const e=t.document,s=e.createElement("div");s.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(s);const i=t.getComputedStyle(s),n=null!==i&&"solid"===i.borderTopStyle;return s.remove(),n}(t)),e||(l=s),s})(window),isUnbounded:()=>t.unbounded,isSurfaceActive:()=>t.root_[e](":active"),isSurfaceDisabled:()=>t.disabled,addClass:e=>t.root_.classList.add(e),removeClass:e=>t.root_.classList.remove(e),containsEventTarget:e=>t.root_.contains(e),registerInteractionHandler:(e,s)=>t.root_.addEventListener(e,s,d()),deregisterInteractionHandler:(e,s)=>t.root_.removeEventListener(e,s,d()),registerDocumentInteractionHandler:(t,e)=>document.documentElement.addEventListener(t,e,d()),deregisterDocumentInteractionHandler:(t,e)=>document.documentElement.removeEventListener(t,e,d()),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),updateCssVariable:(e,s)=>t.root_.style.setProperty(e,s),computeBoundingRect:()=>t.root_.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}get unbounded(){return this.unbounded_}set unbounded(t){this.unbounded_=Boolean(t),this.setUnbounded_()}setUnbounded_(){this.foundation_.setUnbounded(this.unbounded_)}activate(){this.foundation_.activate()}deactivate(){this.foundation_.deactivate()}layout(){this.foundation_.layout()}getDefaultFoundation(){return new m(E.createAdapter(this))}initialSyncWithDOM(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}}class f{}f.prototype.root_,f.prototype.unbounded,f.prototype.disabled},,function(t,e,s){"use strict";
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */e.a=class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}}},function(t,e,s){"use strict";s.d(e,"b",function(){return n}),s.d(e,"a",function(){return i});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const i={ROOT:"mdc-list",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated"},n={ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_SELECTED:"aria-selected",CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`.${i.LIST_ITEM_CLASS} button:not(:disabled), \n  .${i.LIST_ITEM_CLASS} a`,FOCUSABLE_CHILD_ELEMENTS:`.${i.LIST_ITEM_CLASS} button:not(:disabled), .${i.LIST_ITEM_CLASS} a,\n  .${i.LIST_ITEM_CLASS} input[type="radio"]:not(:disabled),\n  .${i.LIST_ITEM_CLASS} input[type="checkbox"]:not(:disabled)`,ENABLED_ITEMS_SELECTOR:".mdc-list-item:not(.mdc-list-item--disabled)"}},function(t,e,s){"use strict";var i=s(3);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class n{static attachTo(t){return new n(t,new i.a)}constructor(t,e,...s){this.root_=t,this.initialize(...s),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(t,e){this.root_.addEventListener(t,e)}unlisten(t,e){this.root_.removeEventListener(t,e)}emit(t,e,s=!1){let i;"function"==typeof CustomEvent?i=new CustomEvent(t,{detail:e,bubbles:s}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,s,!1,e),this.root_.dispatchEvent(i)}}e.a=n},function(t,e,s){"use strict";var i=s(3);s.d(e,"b",function(){return i.a});var n=s(5);s.d(e,"a",function(){return n.a})},,function(t,e,s){"use strict";var i=s(5);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */let n;var a=s(9),r=(s(29),s(0));s.d(e,"a",function(){return o});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class o extends i.a{constructor(...t){super(...t),this.previousFocus_,this.anchorElement,this.firstFocusableElement_,this.lastFocusableElement_,this.handleKeydown_,this.handleBodyClick_,this.registerBodyClickListener_,this.deregisterBodyClickListener_}static attachTo(t){return new o(t)}initialSyncWithDOM(){this.root_.parentElement&&this.root_.parentElement.classList.contains(r.c.ANCHOR)&&(this.anchorElement=this.root_.parentElement),this.root_.classList.contains(r.c.FIXED)&&this.setFixedPosition(!0),this.handleKeydown_=(t=>this.foundation_.handleKeydown(t)),this.handleBodyClick_=(t=>this.foundation_.handleBodyClick(t)),this.registerBodyClickListener_=(()=>document.body.addEventListener("click",this.handleBodyClick_)),this.deregisterBodyClickListener_=(()=>document.body.removeEventListener("click",this.handleBodyClick_)),this.root_.addEventListener("keydown",this.handleKeydown_),this.root_.addEventListener(r.e.OPENED_EVENT,this.registerBodyClickListener_),this.root_.addEventListener(r.e.CLOSED_EVENT,this.deregisterBodyClickListener_)}destroy(){this.root_.removeEventListener("keydown",this.handleKeydown_),this.root_.removeEventListener(r.e.OPENED_EVENT,this.registerBodyClickListener_),this.root_.removeEventListener(r.e.CLOSED_EVENT,this.deregisterBodyClickListener_),super.destroy()}get open(){return this.foundation_.isOpen()}set open(t){if(t){const t=this.root_.querySelectorAll(r.e.FOCUSABLE_ELEMENTS);this.firstFocusableElement_=t.length>0?t[0]:null,this.lastFocusableElement_=t.length>0?t[t.length-1]:null,this.foundation_.open()}else this.foundation_.close()}hoistMenuToBody(){document.body.appendChild(this.root_.parentElement.removeChild(this.root_)),this.setIsHoisted(!0)}setIsHoisted(t){this.foundation_.setIsHoisted(t)}setMenuSurfaceAnchorElement(t){this.anchorElement=t}setFixedPosition(t){t?this.root_.classList.add(r.c.FIXED):this.root_.classList.remove(r.c.FIXED),this.foundation_.setFixedPosition(t)}setAbsolutePosition(t,e){this.foundation_.setAbsolutePosition(t,e),this.setIsHoisted(!0)}setAnchorCorner(t){this.foundation_.setAnchorCorner(t)}setAnchorMargin(t){this.foundation_.setAnchorMargin(t)}set quickOpen(t){this.foundation_.setQuickOpen(t)}getDefaultFoundation(){return new a.a(Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),hasAnchor:()=>!!this.anchorElement,notifyClose:()=>this.emit(a.a.strings.CLOSED_EVENT,{}),notifyOpen:()=>this.emit(a.a.strings.OPENED_EVENT,{}),isElementInContainer:t=>this.root_===t||this.root_.contains(t),isRtl:()=>"rtl"===getComputedStyle(this.root_).getPropertyValue("direction"),setTransformOrigin:t=>{this.root_.style[`${function(t,e=!1){if(void 0===n||e){const e="transform"in t.document.createElement("div").style?"transform":"webkitTransform";n=e}return n}(window)}-origin`]=t}},this.getFocusAdapterMethods_(),this.getDimensionAdapterMethods_()))}getFocusAdapterMethods_(){return{isFocused:()=>document.activeElement===this.root_,saveFocus:()=>{this.previousFocus_=document.activeElement},restoreFocus:()=>{this.root_.contains(document.activeElement)&&this.previousFocus_&&this.previousFocus_.focus&&this.previousFocus_.focus()},isFirstElementFocused:()=>this.firstFocusableElement_&&this.firstFocusableElement_===document.activeElement,isLastElementFocused:()=>this.lastFocusableElement_&&this.lastFocusableElement_===document.activeElement,focusFirstElement:()=>this.firstFocusableElement_&&this.firstFocusableElement_.focus&&this.firstFocusableElement_.focus(),focusLastElement:()=>this.lastFocusableElement_&&this.lastFocusableElement_.focus&&this.lastFocusableElement_.focus()}}getDimensionAdapterMethods_(){return{getInnerDimensions:()=>({width:this.root_.offsetWidth,height:this.root_.offsetHeight}),getAnchorDimensions:()=>this.anchorElement&&this.anchorElement.getBoundingClientRect(),getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:t=>{this.root_.style.left="left"in t?t.left:null,this.root_.style.right="right"in t?t.right:null,this.root_.style.top="top"in t?t.top:null,this.root_.style.bottom="bottom"in t?t.bottom:null},setMaxHeight:t=>{this.root_.style.maxHeight=t}}}}},function(t,e,s){"use strict";s.d(e,"a",function(){return a});var i=s(3),n=(s(29),s(0));class a extends i.a{static get cssClasses(){return n.c}static get strings(){return n.e}static get numbers(){return n.d}static get Corner(){return n.a}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>!1,hasAnchor:()=>!1,notifyClose:()=>{},notifyOpen:()=>{},isElementInContainer:()=>!1,isRtl:()=>!1,setTransformOrigin:()=>{},isFocused:()=>!1,saveFocus:()=>{},restoreFocus:()=>{},isFirstElementFocused:()=>{},isLastElementFocused:()=>{},focusFirstElement:()=>{},focusLastElement:()=>{},getInnerDimensions:()=>({}),getAnchorDimensions:()=>({}),getWindowDimensions:()=>({}),getBodyDimensions:()=>({}),getWindowScroll:()=>({}),setPosition:()=>{},setMaxHeight:()=>{}}}constructor(t){super(Object.assign(a.defaultAdapter,t)),this.isOpen_=!1,this.openAnimationEndTimerId_=0,this.closeAnimationEndTimerId_=0,this.animationRequestId_=0,this.dimensions_,this.anchorCorner_=n.a.TOP_START,this.anchorMargin_={top:0,right:0,bottom:0,left:0},this.measures_=null,this.quickOpen_=!1,this.hoistedElement_=!1,this.isFixedPosition_=!1,this.position_={x:0,y:0}}init(){const{ROOT:t,OPEN:e}=a.cssClasses;if(!this.adapter_.hasClass(t))throw new Error(`${t} class required in root element.`);this.adapter_.hasClass(e)&&(this.isOpen_=!0)}destroy(){clearTimeout(this.openAnimationEndTimerId_),clearTimeout(this.closeAnimationEndTimerId_),cancelAnimationFrame(this.animationRequestId_)}setAnchorCorner(t){this.anchorCorner_=t}setAnchorMargin(t){this.anchorMargin_.top="number"==typeof t.top?t.top:0,this.anchorMargin_.right="number"==typeof t.right?t.right:0,this.anchorMargin_.bottom="number"==typeof t.bottom?t.bottom:0,this.anchorMargin_.left="number"==typeof t.left?t.left:0}setIsHoisted(t){this.hoistedElement_=t}setFixedPosition(t){this.isFixedPosition_=t}setAbsolutePosition(t,e){this.position_.x=this.typeCheckisFinite_(t)?t:0,this.position_.y=this.typeCheckisFinite_(e)?e:0}setQuickOpen(t){this.quickOpen_=t}handleBodyClick(t){const e=t.target;this.adapter_.isElementInContainer(e)||this.close()}handleKeydown(t){const{keyCode:e,key:s,shiftKey:i}=t,n="Tab"===s||9===e;"Escape"===s||27===e?this.close():n&&(this.adapter_.isLastElementFocused()&&!i?(this.adapter_.focusFirstElement(),t.preventDefault()):this.adapter_.isFirstElementFocused()&&i&&(this.adapter_.focusLastElement(),t.preventDefault()))}getAutoLayoutMeasurements_(){let t=this.adapter_.getAnchorDimensions();const e=this.adapter_.getWindowDimensions(),s=this.adapter_.getBodyDimensions(),i=this.adapter_.getWindowScroll();return t||(t={x:this.position_.x,y:this.position_.y,top:this.position_.y,bottom:this.position_.y,left:this.position_.x,right:this.position_.x,height:0,width:0}),{viewport:e,bodyDimensions:s,windowScroll:i,viewportDistance:{top:t.top,right:e.width-t.right,left:t.left,bottom:e.height-t.bottom},anchorHeight:t.height,anchorWidth:t.width,surfaceHeight:this.dimensions_.height,surfaceWidth:this.dimensions_.width}}getOriginCorner_(){let t=n.a.TOP_LEFT;const{viewportDistance:e,anchorHeight:s,anchorWidth:i,surfaceHeight:a,surfaceWidth:r}=this.measures_,o=Boolean(this.anchorCorner_&n.b.BOTTOM),l=o?e.top+s+this.anchorMargin_.bottom:e.top+this.anchorMargin_.top,c=a-(o?e.bottom-this.anchorMargin_.bottom:e.bottom+s-this.anchorMargin_.top);c>0&&a-l<c&&(t|=n.b.BOTTOM);const d=this.adapter_.isRtl(),h=Boolean(this.anchorCorner_&n.b.FLIP_RTL),_=Boolean(this.anchorCorner_&n.b.RIGHT),u=_&&!d||!_&&h&&d,p=r-(u?e.left+i+this.anchorMargin_.right:e.left+this.anchorMargin_.left),m=r-(u?e.right-this.anchorMargin_.right:e.right+i-this.anchorMargin_.left);return(p<0&&u&&d||_&&!u&&p<0||m>0&&p<m)&&(t|=n.b.RIGHT),t}getHorizontalOriginOffset_(t){const{anchorWidth:e}=this.measures_,s=Boolean(t&n.b.RIGHT),i=Boolean(this.anchorCorner_&n.b.RIGHT);if(s){const t=i?e-this.anchorMargin_.left:this.anchorMargin_.right;return this.hoistedElement_||this.isFixedPosition_?t-(this.measures_.viewport.width-this.measures_.bodyDimensions.width):t}return i?e-this.anchorMargin_.right:this.anchorMargin_.left}getVerticalOriginOffset_(t){const{anchorHeight:e}=this.measures_,s=Boolean(t&n.b.BOTTOM),i=Boolean(this.anchorCorner_&n.b.BOTTOM);let a=0;return a=s?i?e-this.anchorMargin_.top:-this.anchorMargin_.bottom:i?e+this.anchorMargin_.bottom:this.anchorMargin_.top}getMenuSurfaceMaxHeight_(t){let e=0;const{viewportDistance:s}=this.measures_,i=Boolean(t&n.b.BOTTOM),{MARGIN_TO_EDGE:r}=a.numbers;return i?(e=s.top+this.anchorMargin_.top-r,this.anchorCorner_&n.b.BOTTOM||(e+=this.measures_.anchorHeight)):(e=s.bottom-this.anchorMargin_.bottom+this.measures_.anchorHeight-r,this.anchorCorner_&n.b.BOTTOM&&(e-=this.measures_.anchorHeight)),e}autoPosition_(){this.measures_=this.getAutoLayoutMeasurements_();const t=this.getOriginCorner_(),e=this.getMenuSurfaceMaxHeight_(t),s=t&n.b.BOTTOM?"bottom":"top";let i=t&n.b.RIGHT?"right":"left";const a=this.getHorizontalOriginOffset_(t),r=this.getVerticalOriginOffset_(t);let o={[i]:a||"0",[s]:r||"0"};const{anchorWidth:l,surfaceWidth:c}=this.measures_;l/c>n.d.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(i="center"),(this.hoistedElement_||this.isFixedPosition_)&&(o=this.adjustPositionForHoistedElement_(o));for(const t in o)o.hasOwnProperty(t)&&"0"!==o[t]&&(o[t]=`${parseInt(o[t],10)}px`);this.adapter_.setTransformOrigin(`${i} ${s}`),this.adapter_.setPosition(o),this.adapter_.setMaxHeight(e?e+"px":""),this.measures_=null}adjustPositionForHoistedElement_(t){const{windowScroll:e,viewportDistance:s}=this.measures_;for(const i in t)t.hasOwnProperty(i)&&(s.hasOwnProperty(i)&&(t[i]=parseInt(t[i],10)+s[i]),this.isFixedPosition_||("top"===i?t[i]=parseInt(t[i],10)+e.y:"bottom"===i?t[i]=parseInt(t[i],10)-e.y:"left"===i?t[i]=parseInt(t[i],10)+e.x:"right"===i&&(t[i]=parseInt(t[i],10)-e.x)));return t}open(){this.adapter_.saveFocus(),this.quickOpen_||this.adapter_.addClass(a.cssClasses.ANIMATING_OPEN),this.animationRequestId_=requestAnimationFrame(()=>{this.adapter_.addClass(a.cssClasses.OPEN),this.dimensions_=this.adapter_.getInnerDimensions(),this.autoPosition_(),this.quickOpen_?this.adapter_.notifyOpen():this.openAnimationEndTimerId_=setTimeout(()=>{this.openAnimationEndTimerId_=0,this.adapter_.removeClass(a.cssClasses.ANIMATING_OPEN),this.adapter_.notifyOpen()},n.d.TRANSITION_OPEN_DURATION)}),this.isOpen_=!0}close(){this.quickOpen_||this.adapter_.addClass(a.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(()=>{this.adapter_.removeClass(a.cssClasses.OPEN),this.quickOpen_?this.adapter_.notifyClose():this.closeAnimationEndTimerId_=setTimeout(()=>{this.closeAnimationEndTimerId_=0,this.adapter_.removeClass(a.cssClasses.ANIMATING_CLOSED),this.adapter_.notifyClose()},n.d.TRANSITION_CLOSE_DURATION)}),this.isOpen_=!1,this.maybeRestoreFocus_()}maybeRestoreFocus_(){(this.adapter_.isFocused()||this.adapter_.isElementInContainer(document.activeElement))&&this.adapter_.restoreFocus()}isOpen(){return this.isOpen_}typeCheckisFinite_(t){return"number"==typeof t&&isFinite(t)}}},function(t,e,s){"use strict";var i=s(5),n=s(1);var a=s(3);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const r={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},o={CONTENT_SELECTOR:".mdc-tab-indicator__content"};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class l extends a.a{static get cssClasses(){return r}static get strings(){return o}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},computeContentClientRect:()=>{},setContentStyleProperty:()=>{}}}constructor(t){super(Object.assign(l.defaultAdapter,t))}computeContentClientRect(){return this.adapter_.computeContentClientRect()}activate(t){}deactivate(){}}var c=l;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var d=class extends c{activate(t){if(!t)return void this.adapter_.addClass(c.cssClasses.ACTIVE);const e=this.computeContentClientRect(),s=t.width/e.width,i=t.left-e.left;this.adapter_.addClass(c.cssClasses.NO_TRANSITION),this.adapter_.setContentStyleProperty("transform",`translateX(${i}px) scaleX(${s})`),this.computeContentClientRect(),this.adapter_.removeClass(c.cssClasses.NO_TRANSITION),this.adapter_.addClass(c.cssClasses.ACTIVE),this.adapter_.setContentStyleProperty("transform","")}deactivate(){this.adapter_.removeClass(c.cssClasses.ACTIVE)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var h=class extends c{activate(){this.adapter_.addClass(c.cssClasses.ACTIVE)}deactivate(){this.adapter_.removeClass(c.cssClasses.ACTIVE)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class _ extends i.a{static attachTo(t){return new _(t)}constructor(...t){super(...t),this.content_}initialize(){this.content_=this.root_.querySelector(c.strings.CONTENT_SELECTOR)}computeContentClientRect(){return this.foundation_.computeContentClientRect()}getDefaultFoundation(){const t=Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),computeContentClientRect:()=>this.content_.getBoundingClientRect(),setContentStyleProperty:(t,e)=>this.content_.style.setProperty(t,e)});return this.root_.classList.contains(c.cssClasses.FADE)?new h(t):new d(t)}activate(t){this.foundation_.activate(t)}deactivate(){this.foundation_.deactivate()}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const u={ACTIVE:"mdc-tab--active"},p={ARIA_SELECTED:"aria-selected",RIPPLE_SELECTOR:".mdc-tab__ripple",CONTENT_SELECTOR:".mdc-tab__content",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator",TABINDEX:"tabIndex",INTERACTED_EVENT:"MDCTab:interacted"};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class m extends a.a{static get cssClasses(){return u}static get strings(){return p}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>{},setAttr:()=>{},activateIndicator:()=>{},deactivateIndicator:()=>{},notifyInteracted:()=>{},getOffsetLeft:()=>{},getOffsetWidth:()=>{},getContentOffsetLeft:()=>{},getContentOffsetWidth:()=>{},focus:()=>{}}}constructor(t){super(Object.assign(m.defaultAdapter,t)),this.handleClick_=(()=>this.handleClick())}handleClick(){this.adapter_.notifyInteracted()}isActive(){return this.adapter_.hasClass(u.ACTIVE)}activate(t){this.adapter_.addClass(u.ACTIVE),this.adapter_.setAttr(p.ARIA_SELECTED,"true"),this.adapter_.setAttr(p.TABINDEX,"0"),this.adapter_.activateIndicator(t),this.adapter_.focus()}deactivate(){this.isActive()&&(this.adapter_.removeClass(u.ACTIVE),this.adapter_.setAttr(p.ARIA_SELECTED,"false"),this.adapter_.setAttr(p.TABINDEX,"-1"),this.adapter_.deactivateIndicator())}computeDimensions(){const t=this.adapter_.getOffsetWidth(),e=this.adapter_.getOffsetLeft(),s=this.adapter_.getContentOffsetWidth(),i=this.adapter_.getContentOffsetLeft();return{rootLeft:e,rootRight:e+t,contentLeft:e+i,contentRight:e+i+s}}}var E=m;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class f extends i.a{constructor(...t){super(...t),this.ripple_,this.tabIndicator_,this.content_,this.handleClick_}static attachTo(t){return new f(t)}initialize(t=((t,e)=>new n.a(t,e)),e=(t=>new _(t))){const s=this.root_.querySelector(E.strings.RIPPLE_SELECTOR),i=Object.assign(n.a.createAdapter(this),{addClass:t=>s.classList.add(t),removeClass:t=>s.classList.remove(t),updateCssVariable:(t,e)=>s.style.setProperty(t,e)}),a=new n.b(i);this.ripple_=t(this.root_,a);const r=this.root_.querySelector(E.strings.TAB_INDICATOR_SELECTOR);this.tabIndicator_=e(r),this.content_=this.root_.querySelector(E.strings.CONTENT_SELECTOR)}initialSyncWithDOM(){this.handleClick_=this.foundation_.handleClick.bind(this.foundation_),this.listen("click",this.handleClick_)}destroy(){this.unlisten("click",this.handleClick_),this.ripple_.destroy(),super.destroy()}getDefaultFoundation(){return new E({setAttr:(t,e)=>this.root_.setAttribute(t,e),addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),activateIndicator:t=>this.tabIndicator_.activate(t),deactivateIndicator:()=>this.tabIndicator_.deactivate(),notifyInteracted:()=>this.emit(E.strings.INTERACTED_EVENT,{tab:this},!0),getOffsetLeft:()=>this.root_.offsetLeft,getOffsetWidth:()=>this.root_.offsetWidth,getContentOffsetLeft:()=>this.content_.offsetLeft,getContentOffsetWidth:()=>this.content_.offsetWidth,focus:()=>this.root_.focus()})}get active(){return this.foundation_.isActive()}activate(t){this.foundation_.activate(t)}deactivate(){this.foundation_.deactivate()}computeIndicatorClientRect(){return this.tabIndicator_.computeContentClientRect()}computeDimensions(){return this.foundation_.computeDimensions()}focus(){this.root_.focus()}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const T={ANIMATING:"mdc-tab-scroller--animating",SCROLL_TEST:"mdc-tab-scroller__test",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll"},g={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};var S=
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class{constructor(t){this.adapter_=t}getScrollPositionRTL(t){}scrollToRTL(t){}incrementScrollRTL(t){}getAnimatingScrollPosition(t,e){}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var C=class extends S{getScrollPositionRTL(){const t=this.adapter_.getScrollAreaScrollLeft(),{right:e}=this.calculateScrollEdges_();return Math.round(e-t)}scrollToRTL(t){const e=this.calculateScrollEdges_(),s=this.adapter_.getScrollAreaScrollLeft(),i=this.clampScrollValue_(e.right-t);return{finalScrollPosition:i,scrollDelta:i-s}}incrementScrollRTL(t){const e=this.adapter_.getScrollAreaScrollLeft(),s=this.clampScrollValue_(e-t);return{finalScrollPosition:s,scrollDelta:s-e}}getAnimatingScrollPosition(t){return t}calculateScrollEdges_(){return{left:0,right:this.adapter_.getScrollContentOffsetWidth()-this.adapter_.getScrollAreaOffsetWidth()}}clampScrollValue_(t){const e=this.calculateScrollEdges_();return Math.min(Math.max(e.left,t),e.right)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var A=class extends S{getScrollPositionRTL(t){const e=this.adapter_.getScrollAreaScrollLeft();return Math.round(t-e)}scrollToRTL(t){const e=this.adapter_.getScrollAreaScrollLeft(),s=this.clampScrollValue_(-t);return{finalScrollPosition:s,scrollDelta:s-e}}incrementScrollRTL(t){const e=this.adapter_.getScrollAreaScrollLeft(),s=this.clampScrollValue_(e-t);return{finalScrollPosition:s,scrollDelta:s-e}}getAnimatingScrollPosition(t,e){return t-e}calculateScrollEdges_(){const t=this.adapter_.getScrollContentOffsetWidth();return{left:this.adapter_.getScrollAreaOffsetWidth()-t,right:0}}clampScrollValue_(t){const e=this.calculateScrollEdges_();return Math.max(Math.min(e.right,t),e.left)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var v=class extends S{getScrollPositionRTL(t){const e=this.adapter_.getScrollAreaScrollLeft();return Math.round(e-t)}scrollToRTL(t){const e=this.adapter_.getScrollAreaScrollLeft(),s=this.clampScrollValue_(t);return{finalScrollPosition:s,scrollDelta:e-s}}incrementScrollRTL(t){const e=this.adapter_.getScrollAreaScrollLeft(),s=this.clampScrollValue_(e+t);return{finalScrollPosition:s,scrollDelta:e-s}}getAnimatingScrollPosition(t,e){return t+e}calculateScrollEdges_(){return{left:this.adapter_.getScrollContentOffsetWidth()-this.adapter_.getScrollAreaOffsetWidth(),right:0}}clampScrollValue_(t){const e=this.calculateScrollEdges_();return Math.min(Math.max(e.right,t),e.left)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class I extends a.a{static get cssClasses(){return T}static get strings(){return g}static get defaultAdapter(){return{eventTargetMatchesSelector:()=>{},addClass:()=>{},removeClass:()=>{},addScrollAreaClass:()=>{},setScrollAreaStyleProperty:()=>{},setScrollContentStyleProperty:()=>{},getScrollContentStyleValue:()=>{},setScrollAreaScrollLeft:()=>{},getScrollAreaScrollLeft:()=>{},getScrollContentOffsetWidth:()=>{},getScrollAreaOffsetWidth:()=>{},computeScrollAreaClientRect:()=>{},computeScrollContentClientRect:()=>{},computeHorizontalScrollbarHeight:()=>{}}}constructor(t){super(Object.assign(I.defaultAdapter,t)),this.isAnimating_=!1,this.rtlScrollerInstance_}init(){const t=this.adapter_.computeHorizontalScrollbarHeight();this.adapter_.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter_.addScrollAreaClass(I.cssClasses.SCROLL_AREA_SCROLL)}getScrollPosition(){if(this.isRTL_())return this.computeCurrentScrollPositionRTL_();const t=this.calculateCurrentTranslateX_();return this.adapter_.getScrollAreaScrollLeft()-t}handleInteraction(){this.isAnimating_&&this.stopScrollAnimation_()}handleTransitionEnd(t){this.isAnimating_&&this.adapter_.eventTargetMatchesSelector(t.target,I.strings.CONTENT_SELECTOR)&&(this.isAnimating_=!1,this.adapter_.removeClass(I.cssClasses.ANIMATING))}incrementScroll(t){if(0!==t)return this.isRTL_()?this.incrementScrollRTL_(t):void this.incrementScroll_(t)}scrollTo(t){if(this.isRTL_())return this.scrollToRTL_(t);this.scrollTo_(t)}getRTLScroller(){return this.rtlScrollerInstance_||(this.rtlScrollerInstance_=this.rtlScrollerFactory_()),this.rtlScrollerInstance_}calculateCurrentTranslateX_(){const t=this.adapter_.getScrollContentStyleValue("transform");if("none"===t)return 0;const e=/\((.+)\)/.exec(t)[1].split(",");return parseFloat(e[4])}clampScrollValue_(t){const e=this.calculateScrollEdges_();return Math.min(Math.max(e.left,t),e.right)}computeCurrentScrollPositionRTL_(){const t=this.calculateCurrentTranslateX_();return this.getRTLScroller().getScrollPositionRTL(t)}calculateScrollEdges_(){return{left:0,right:this.adapter_.getScrollContentOffsetWidth()-this.adapter_.getScrollAreaOffsetWidth()}}scrollTo_(t){const e=this.getScrollPosition(),s=this.clampScrollValue_(t),i=s-e;this.animate_({finalScrollPosition:s,scrollDelta:i})}scrollToRTL_(t){const e=this.getRTLScroller().scrollToRTL(t);this.animate_(e)}incrementScroll_(t){const e=this.getScrollPosition(),s=t+e,i=this.clampScrollValue_(s),n=i-e;this.animate_({finalScrollPosition:i,scrollDelta:n})}incrementScrollRTL_(t){const e=this.getRTLScroller().incrementScrollRTL(t);this.animate_(e)}animate_(t){0!==t.scrollDelta&&(this.stopScrollAnimation_(),this.adapter_.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter_.setScrollContentStyleProperty("transform",`translateX(${t.scrollDelta}px)`),this.adapter_.computeScrollAreaClientRect(),requestAnimationFrame(()=>{this.adapter_.addClass(I.cssClasses.ANIMATING),this.adapter_.setScrollContentStyleProperty("transform","none")}),this.isAnimating_=!0)}stopScrollAnimation_(){this.isAnimating_=!1;const t=this.getAnimatingScrollPosition_();this.adapter_.removeClass(I.cssClasses.ANIMATING),this.adapter_.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter_.setScrollAreaScrollLeft(t)}getAnimatingScrollPosition_(){const t=this.calculateCurrentTranslateX_(),e=this.adapter_.getScrollAreaScrollLeft();return this.isRTL_()?this.getRTLScroller().getAnimatingScrollPosition(e,t):e-t}rtlScrollerFactory_(){const t=this.adapter_.getScrollAreaScrollLeft();this.adapter_.setScrollAreaScrollLeft(t-1);const e=this.adapter_.getScrollAreaScrollLeft();if(e<0)return this.adapter_.setScrollAreaScrollLeft(t),new A(this.adapter_);const s=this.adapter_.computeScrollAreaClientRect(),i=this.adapter_.computeScrollContentClientRect(),n=Math.round(i.right-s.right);return this.adapter_.setScrollAreaScrollLeft(t),n===e?new v(this.adapter_):new C(this.adapter_)}isRTL_(){return"rtl"===this.adapter_.getScrollContentStyleValue("direction")}}var L=I;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */let O;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class b extends i.a{static attachTo(t){return new b(t)}constructor(...t){super(...t),this.content_,this.area_,this.handleInteraction_,this.handleTransitionEnd_}initialize(){this.area_=this.root_.querySelector(L.strings.AREA_SELECTOR),this.content_=this.root_.querySelector(L.strings.CONTENT_SELECTOR)}initialSyncWithDOM(){this.handleInteraction_=(()=>this.foundation_.handleInteraction()),this.handleTransitionEnd_=(t=>this.foundation_.handleTransitionEnd(t)),this.area_.addEventListener("wheel",this.handleInteraction_),this.area_.addEventListener("touchstart",this.handleInteraction_),this.area_.addEventListener("pointerdown",this.handleInteraction_),this.area_.addEventListener("mousedown",this.handleInteraction_),this.area_.addEventListener("keydown",this.handleInteraction_),this.content_.addEventListener("transitionend",this.handleTransitionEnd_)}destroy(){super.destroy(),this.area_.removeEventListener("wheel",this.handleInteraction_),this.area_.removeEventListener("touchstart",this.handleInteraction_),this.area_.removeEventListener("pointerdown",this.handleInteraction_),this.area_.removeEventListener("mousedown",this.handleInteraction_),this.area_.removeEventListener("keydown",this.handleInteraction_),this.content_.removeEventListener("transitionend",this.handleTransitionEnd_)}getDefaultFoundation(){return new L({eventTargetMatchesSelector:(t,e)=>{return t[function(t){return["msMatchesSelector","matches"].filter(e=>e in t).pop()}(HTMLElement.prototype)](e)},addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),addScrollAreaClass:t=>this.area_.classList.add(t),setScrollAreaStyleProperty:(t,e)=>this.area_.style.setProperty(t,e),setScrollContentStyleProperty:(t,e)=>this.content_.style.setProperty(t,e),getScrollContentStyleValue:t=>window.getComputedStyle(this.content_).getPropertyValue(t),setScrollAreaScrollLeft:t=>this.area_.scrollLeft=t,getScrollAreaScrollLeft:()=>this.area_.scrollLeft,getScrollContentOffsetWidth:()=>this.content_.offsetWidth,getScrollAreaOffsetWidth:()=>this.area_.offsetWidth,computeScrollAreaClientRect:()=>this.area_.getBoundingClientRect(),computeScrollContentClientRect:()=>this.content_.getBoundingClientRect(),computeHorizontalScrollbarHeight:()=>(function(t,e=!0){if(e&&void 0!==O)return O;const s=t.createElement("div");s.classList.add(T.SCROLL_TEST),t.body.appendChild(s);const i=s.offsetHeight-s.clientHeight;return t.body.removeChild(s),e&&(O=i),i})(document)})}getScrollPosition(){return this.foundation_.getScrollPosition()}getScrollContentWidth(){return this.content_.offsetWidth}incrementScroll(t){this.foundation_.incrementScroll(t)}scrollTo(t){this.foundation_.scrollTo(t)}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const y={TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab",ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",HOME_KEY:"Home",ENTER_KEY:"Enter",SPACE_KEY:"Space"},R={EXTRA_SCROLL_AMOUNT:20,ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,HOME_KEYCODE:36,ENTER_KEYCODE:13,SPACE_KEYCODE:32},D=new Set;D.add(y.ARROW_LEFT_KEY),D.add(y.ARROW_RIGHT_KEY),D.add(y.END_KEY),D.add(y.HOME_KEY),D.add(y.ENTER_KEY),D.add(y.SPACE_KEY);const w=new Map;w.set(R.ARROW_LEFT_KEYCODE,y.ARROW_LEFT_KEY),w.set(R.ARROW_RIGHT_KEYCODE,y.ARROW_RIGHT_KEY),w.set(R.END_KEYCODE,y.END_KEY),w.set(R.HOME_KEYCODE,y.HOME_KEY),w.set(R.ENTER_KEYCODE,y.ENTER_KEY),w.set(R.SPACE_KEYCODE,y.SPACE_KEY);class N extends a.a{static get strings(){return y}static get numbers(){return R}static get defaultAdapter(){return{scrollTo:()=>{},incrementScroll:()=>{},getScrollPosition:()=>{},getScrollContentWidth:()=>{},getOffsetWidth:()=>{},isRTL:()=>{},setActiveTab:()=>{},activateTabAtIndex:()=>{},deactivateTabAtIndex:()=>{},focusTabAtIndex:()=>{},getTabIndicatorClientRectAtIndex:()=>{},getTabDimensionsAtIndex:()=>{},getPreviousActiveTabIndex:()=>{},getFocusedTabIndex:()=>{},getIndexOfTab:()=>{},getTabListLength:()=>{},notifyTabActivated:()=>{}}}constructor(t){super(Object.assign(N.defaultAdapter,t)),this.useAutomaticActivation_=!1}setUseAutomaticActivation(t){this.useAutomaticActivation_=t}activateTab(t){const e=this.adapter_.getPreviousActiveTabIndex();this.indexIsInRange_(t)&&t!==e&&(this.adapter_.deactivateTabAtIndex(e),this.adapter_.activateTabAtIndex(t,this.adapter_.getTabIndicatorClientRectAtIndex(e)),this.scrollIntoView(t),this.adapter_.notifyTabActivated(t))}handleKeyDown(t){const e=this.getKeyFromEvent_(t);if(void 0!==e)if(this.isActivationKey_(e)||t.preventDefault(),this.useAutomaticActivation_){if(this.isActivationKey_(e))return;const t=this.determineTargetFromKey_(this.adapter_.getPreviousActiveTabIndex(),e);this.adapter_.setActiveTab(t),this.scrollIntoView(t)}else{const t=this.adapter_.getFocusedTabIndex();if(this.isActivationKey_(e))this.adapter_.setActiveTab(t);else{const s=this.determineTargetFromKey_(t,e);this.adapter_.focusTabAtIndex(s),this.scrollIntoView(s)}}}handleTabInteraction(t){this.adapter_.setActiveTab(this.adapter_.getIndexOfTab(t.detail.tab))}scrollIntoView(t){if(this.indexIsInRange_(t))return 0===t?this.adapter_.scrollTo(0):t===this.adapter_.getTabListLength()-1?this.adapter_.scrollTo(this.adapter_.getScrollContentWidth()):this.isRTL_()?this.scrollIntoViewRTL_(t):void this.scrollIntoView_(t)}determineTargetFromKey_(t,e){const s=this.isRTL_(),i=this.adapter_.getTabListLength()-1,n=e===y.END_KEY,a=e===y.ARROW_LEFT_KEY&&!s||e===y.ARROW_RIGHT_KEY&&s,r=e===y.ARROW_RIGHT_KEY&&!s||e===y.ARROW_LEFT_KEY&&s;let o=t;return n?o=i:a?o-=1:r?o+=1:o=0,o<0?o=i:o>i&&(o=0),o}calculateScrollIncrement_(t,e,s,i){const n=this.adapter_.getTabDimensionsAtIndex(e),a=n.contentLeft-s-i,r=n.contentRight-s-R.EXTRA_SCROLL_AMOUNT,o=a+R.EXTRA_SCROLL_AMOUNT;return e<t?Math.min(r,0):Math.max(o,0)}calculateScrollIncrementRTL_(t,e,s,i,n){const a=this.adapter_.getTabDimensionsAtIndex(e),r=n-a.contentLeft-s,o=n-a.contentRight-s-i+R.EXTRA_SCROLL_AMOUNT,l=r-R.EXTRA_SCROLL_AMOUNT;return e>t?Math.max(o,0):Math.min(l,0)}findAdjacentTabIndexClosestToEdge_(t,e,s,i){const n=e.rootLeft-s,a=e.rootRight-s-i,r=n+a;return n<0||r<0?t-1:a>0||r>0?t+1:-1}findAdjacentTabIndexClosestToEdgeRTL_(t,e,s,i,n){const a=n-e.rootLeft-i-s,r=n-e.rootRight-s,o=a+r;return a>0||o>0?t+1:r<0||o<0?t-1:-1}getKeyFromEvent_(t){return D.has(t.key)?t.key:w.get(t.keyCode)}isActivationKey_(t){return t===y.SPACE_KEY||t===y.ENTER_KEY}indexIsInRange_(t){return t>=0&&t<this.adapter_.getTabListLength()}isRTL_(){return this.adapter_.isRTL()}scrollIntoView_(t){const e=this.adapter_.getScrollPosition(),s=this.adapter_.getOffsetWidth(),i=this.adapter_.getTabDimensionsAtIndex(t),n=this.findAdjacentTabIndexClosestToEdge_(t,i,e,s);if(!this.indexIsInRange_(n))return;const a=this.calculateScrollIncrement_(t,n,e,s);this.adapter_.incrementScroll(a)}scrollIntoViewRTL_(t){const e=this.adapter_.getScrollPosition(),s=this.adapter_.getOffsetWidth(),i=this.adapter_.getTabDimensionsAtIndex(t),n=this.adapter_.getScrollContentWidth(),a=this.findAdjacentTabIndexClosestToEdgeRTL_(t,i,e,s,n);if(!this.indexIsInRange_(a))return;const r=this.calculateScrollIncrementRTL_(t,a,e,s,n);this.adapter_.incrementScroll(r)}}var F=N;s.d(e,"a",function(){return x});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class x extends i.a{constructor(...t){super(...t),this.tabList_,this.tabFactory_,this.tabScroller_,this.tabScrollerFactory_,this.handleTabInteraction_,this.handleKeyDown_}static attachTo(t){return new x(t)}set useAutomaticActivation(t){this.foundation_.setUseAutomaticActivation(t)}initialize(t=(t=>new f(t)),e=(t=>new b(t))){this.tabFactory_=t,this.tabScrollerFactory_=e,this.tabList_=this.getTabElements_().map(t=>this.tabFactory_(t));const s=this.root_.querySelector(F.strings.TAB_SCROLLER_SELECTOR);s&&(this.tabScroller_=this.tabScrollerFactory_(s))}initialSyncWithDOM(){this.handleTabInteraction_=(t=>this.foundation_.handleTabInteraction(t)),this.handleKeyDown_=(t=>this.foundation_.handleKeyDown(t)),this.root_.addEventListener(E.strings.INTERACTED_EVENT,this.handleTabInteraction_),this.root_.addEventListener("keydown",this.handleKeyDown_);for(let t=0;t<this.tabList_.length;t++)if(this.tabList_[t].active){this.scrollIntoView(t);break}}destroy(){super.destroy(),this.root_.removeEventListener(E.strings.INTERACTED_EVENT,this.handleTabInteraction_),this.root_.removeEventListener("keydown",this.handleKeyDown_),this.tabList_.forEach(t=>t.destroy()),this.tabScroller_.destroy()}getDefaultFoundation(){return new F({scrollTo:t=>this.tabScroller_.scrollTo(t),incrementScroll:t=>this.tabScroller_.incrementScroll(t),getScrollPosition:()=>this.tabScroller_.getScrollPosition(),getScrollContentWidth:()=>this.tabScroller_.getScrollContentWidth(),getOffsetWidth:()=>this.root_.offsetWidth,isRTL:()=>"rtl"===window.getComputedStyle(this.root_).getPropertyValue("direction"),setActiveTab:t=>this.foundation_.activateTab(t),activateTabAtIndex:(t,e)=>this.tabList_[t].activate(e),deactivateTabAtIndex:t=>this.tabList_[t].deactivate(),focusTabAtIndex:t=>this.tabList_[t].focus(),getTabIndicatorClientRectAtIndex:t=>this.tabList_[t].computeIndicatorClientRect(),getTabDimensionsAtIndex:t=>this.tabList_[t].computeDimensions(),getPreviousActiveTabIndex:()=>{for(let t=0;t<this.tabList_.length;t++)if(this.tabList_[t].active)return t;return-1},getFocusedTabIndex:()=>{const t=this.getTabElements_(),e=document.activeElement;return t.indexOf(e)},getIndexOfTab:t=>this.tabList_.indexOf(t),getTabListLength:()=>this.tabList_.length,notifyTabActivated:t=>this.emit(F.strings.TAB_ACTIVATED_EVENT,{index:t},!0)})}activateTab(t){this.foundation_.activateTab(t)}scrollIntoView(t){this.foundation_.scrollIntoView(t)}getTabElements_(){return[].slice.call(this.root_.querySelectorAll(F.strings.TAB_SELECTOR))}}},,,function(t,e,s){"use strict";
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var i=s(5),n=s(1);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const a={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed"},r={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},o={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};var l=s(3);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class c extends l.a{static get strings(){return o}static get cssClasses(){return a}static get numbers(){return r}static get defaultAdapter(){return{hasClass:()=>{},addClass:()=>{},removeClass:()=>{},setStyle:()=>{},getTopAppBarHeight:()=>{},registerNavigationIconInteractionHandler:()=>{},deregisterNavigationIconInteractionHandler:()=>{},notifyNavigationIconClicked:()=>{},registerScrollHandler:()=>{},deregisterScrollHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},getViewportScrollY:()=>0,getTotalActionItems:()=>0}}constructor(t){super(Object.assign(c.defaultAdapter,t)),this.navClickHandler_=(()=>this.adapter_.notifyNavigationIconClicked()),this.scrollHandler_=(()=>{})}init(){this.adapter_.registerNavigationIconInteractionHandler("click",this.navClickHandler_)}destroy(){this.adapter_.deregisterNavigationIconInteractionHandler("click",this.navClickHandler_)}initScrollHandler(){this.adapter_.registerScrollHandler(this.scrollHandler_)}destroyScrollHandler(){this.adapter_.deregisterScrollHandler(this.scrollHandler_)}}var d=c;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var h=class extends d{constructor(t){super(t),this.wasScrolled_=!1,this.scrollHandler_=(()=>this.fixedScrollHandler_())}init(){super.init(),this.adapter_.registerScrollHandler(this.scrollHandler_)}destroy(){super.destroy(),this.adapter_.deregisterScrollHandler(this.scrollHandler_)}fixedScrollHandler_(){this.adapter_.getViewportScrollY()<=0?this.wasScrolled_&&(this.adapter_.removeClass(a.FIXED_SCROLLED_CLASS),this.wasScrolled_=!1):this.wasScrolled_||(this.adapter_.addClass(a.FIXED_SCROLLED_CLASS),this.wasScrolled_=!0)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var _=class extends d{constructor(t){super(t),this.isCollapsed=!1,this.scrollHandler_=(()=>this.shortAppBarScrollHandler_())}init(){super.init();const t=this.adapter_.hasClass(a.SHORT_COLLAPSED_CLASS);this.adapter_.getTotalActionItems()>0&&this.adapter_.addClass(a.SHORT_HAS_ACTION_ITEM_CLASS),t||(this.adapter_.registerScrollHandler(this.scrollHandler_),this.shortAppBarScrollHandler_())}destroy(){super.destroy(),this.adapter_.deregisterScrollHandler(this.scrollHandler_)}shortAppBarScrollHandler_(){this.adapter_.getViewportScrollY()<=0?this.isCollapsed&&(this.adapter_.removeClass(a.SHORT_COLLAPSED_CLASS),this.isCollapsed=!1):this.isCollapsed||(this.adapter_.addClass(a.SHORT_COLLAPSED_CLASS),this.isCollapsed=!0)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const u=0;var p=class extends d{constructor(t){super(t),this.lastScrollPosition_=this.adapter_.getViewportScrollY(),this.topAppBarHeight_=this.adapter_.getTopAppBarHeight(),this.wasDocked_=!0,this.isDockedShowing_=!0,this.currentAppBarOffsetTop_=0,this.isCurrentlyBeingResized_=!1,this.resizeThrottleId_=u,this.resizeDebounceId_=u,this.scrollHandler_=(()=>this.topAppBarScrollHandler_()),this.resizeHandler_=(()=>this.topAppBarResizeHandler_())}init(){super.init(),this.adapter_.registerScrollHandler(this.scrollHandler_),this.adapter_.registerResizeHandler(this.resizeHandler_)}destroy(){super.destroy(),this.adapter_.deregisterScrollHandler(this.scrollHandler_),this.adapter_.deregisterResizeHandler(this.resizeHandler_),this.adapter_.setStyle("top","")}checkForUpdate_(){const t=-this.topAppBarHeight_,e=this.currentAppBarOffsetTop_<0,s=this.currentAppBarOffsetTop_>t,i=e&&s;if(i)this.wasDocked_=!1;else{if(!this.wasDocked_)return this.wasDocked_=!0,!0;if(this.isDockedShowing_!==s)return this.isDockedShowing_=s,!0}return i}moveTopAppBar_(){if(this.checkForUpdate_()){let t=this.currentAppBarOffsetTop_;Math.abs(t)>=this.topAppBarHeight_&&(t=-r.MAX_TOP_APP_BAR_HEIGHT),this.adapter_.setStyle("top",t+"px")}}topAppBarScrollHandler_(){const t=Math.max(this.adapter_.getViewportScrollY(),0),e=t-this.lastScrollPosition_;this.lastScrollPosition_=t,this.isCurrentlyBeingResized_||(this.currentAppBarOffsetTop_-=e,this.currentAppBarOffsetTop_>0?this.currentAppBarOffsetTop_=0:Math.abs(this.currentAppBarOffsetTop_)>this.topAppBarHeight_&&(this.currentAppBarOffsetTop_=-this.topAppBarHeight_),this.moveTopAppBar_())}topAppBarResizeHandler_(){this.resizeThrottleId_||(this.resizeThrottleId_=setTimeout(()=>{this.resizeThrottleId_=u,this.throttledResizeHandler_()},r.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized_=!0,this.resizeDebounceId_&&clearTimeout(this.resizeDebounceId_),this.resizeDebounceId_=setTimeout(()=>{this.topAppBarScrollHandler_(),this.isCurrentlyBeingResized_=!1,this.resizeDebounceId_=u},r.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)}throttledResizeHandler_(){const t=this.adapter_.getTopAppBarHeight();this.topAppBarHeight_!==t&&(this.wasDocked_=!1,this.currentAppBarOffsetTop_-=this.topAppBarHeight_-t,this.topAppBarHeight_=t),this.topAppBarScrollHandler_()}};s.d(e,"a",function(){return m});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class m extends i.a{constructor(...t){super(...t),this.navIcon_,this.iconRipples_,this.scrollTarget_}initialize(t=(t=>n.a.attachTo(t))){this.navIcon_=this.root_.querySelector(o.NAVIGATION_ICON_SELECTOR);const e=[].slice.call(this.root_.querySelectorAll(o.ACTION_ITEM_SELECTOR));this.navIcon_&&e.push(this.navIcon_),this.iconRipples_=e.map(e=>{const s=t(e);return s.unbounded=!0,s})}destroy(){this.iconRipples_.forEach(t=>t.destroy()),super.destroy()}setScrollTarget(t){this.foundation_.destroyScrollHandler(),this.scrollTarget_=t,this.foundation_.initScrollHandler()}static attachTo(t){return new m(t)}getDefaultFoundation(){const t=Object.assign({hasClass:t=>this.root_.classList.contains(t),addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),setStyle:(t,e)=>this.root_.style.setProperty(t,e),getTopAppBarHeight:()=>this.root_.clientHeight,registerNavigationIconInteractionHandler:(t,e)=>{this.navIcon_&&this.navIcon_.addEventListener(t,e)},deregisterNavigationIconInteractionHandler:(t,e)=>{this.navIcon_&&this.navIcon_.removeEventListener(t,e)},notifyNavigationIconClicked:()=>{this.emit(o.NAVIGATION_EVENT,{})},registerScrollHandler:t=>this.scrollTarget_.addEventListener("scroll",t),deregisterScrollHandler:t=>this.scrollTarget_.removeEventListener("scroll",t),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),getViewportScrollY:()=>this.scrollTarget_[this.scrollTarget_===window?"pageYOffset":"scrollTop"],getTotalActionItems:()=>this.root_.querySelectorAll(o.ACTION_ITEM_SELECTOR).length});let e;return this.scrollTarget_=window,e=this.root_.classList.contains(a.SHORT_CLASS)?new _(t):this.root_.classList.contains(a.FIXED_CLASS)?new h(t):new p(t)}}},function(t,e,s){"use strict";var i=s(6);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var n=s(3);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const a={ROOT:"mdc-drawer",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",ANIMATE:"mdc-drawer--animate",OPENING:"mdc-drawer--opening",CLOSING:"mdc-drawer--closing"},r={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",SCRIM_SELECTOR:".mdc-drawer-scrim",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened"};var o=
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class extends n.a{static get strings(){return r}static get cssClasses(){return a}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>{},elementHasClass:()=>{},computeBoundingRect:()=>{},notifyClose:()=>{},notifyOpen:()=>{},saveFocus:()=>{},restoreFocus:()=>{},focusActiveNavigationItem:()=>{},trapFocus:()=>{},releaseFocus:()=>{}}}open(){this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter_.addClass(a.OPEN),this.adapter_.addClass(a.ANIMATE),this.adapter_.computeBoundingRect(),this.adapter_.addClass(a.OPENING),this.adapter_.saveFocus())}close(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter_.addClass(a.CLOSING)}opened(){}closed(){}isOpen(){return this.adapter_.hasClass(a.OPEN)}isOpening(){return this.adapter_.hasClass(a.OPENING)}isClosing(){return this.adapter_.hasClass(a.CLOSING)}handleKeydown(t){const{keyCode:e,key:s}=t;("Escape"===s||27===e)&&this.close()}handleTransitionEnd(t){const{OPENING:e,CLOSING:s,OPEN:i,ANIMATE:n,ROOT:r}=a;t.target instanceof Element&&this.adapter_.elementHasClass(t.target,r)&&(this.isClosing()?(this.adapter_.removeClass(i),this.adapter_.restoreFocus(),this.closed(),this.adapter_.notifyClose()):(this.adapter_.focusActiveNavigationItem(),this.opened(),this.adapter_.notifyOpen()),this.adapter_.removeClass(n),this.adapter_.removeClass(e),this.adapter_.removeClass(s))}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=class extends o{opened(){this.adapter_.trapFocus()}closed(){this.adapter_.releaseFocus()}handleScrimClick(){this.close()}},c=s(24),d=s(16),h=s(23),_=s.n(h);s.d(e,"a",function(){return u});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class u extends i.a{constructor(...t){super(...t),this.previousFocus_,this.handleKeydown_,this.handleTransitionEnd_,this.focusTrapFactory_,this.focusTrap_,this.scrim_,this.handleScrimClick_,this.list_}static attachTo(t){return new u(t)}get open(){return this.foundation_.isOpen()}set open(t){t?this.foundation_.open():this.foundation_.close()}initialize(t=_.a,e=(t=>new c.a(t))){const s=this.root_.querySelector(`.${d.a.cssClasses.ROOT}`);s&&(this.list_=e(s),this.list_.wrapFocus=!0),this.focusTrapFactory_=t}initialSyncWithDOM(){const{MODAL:t}=o.cssClasses;if(this.root_.classList.contains(t)){const{SCRIM_SELECTOR:t}=o.strings;this.scrim_=this.root_.parentElement.querySelector(t),this.handleScrimClick_=(()=>this.foundation_.handleScrimClick()),this.scrim_.addEventListener("click",this.handleScrimClick_),this.focusTrap_=
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function(t,e=_.a){return e(t,{clickOutsideDeactivates:!0,initialFocus:!1,escapeDeactivates:!1,returnFocusOnDeactivate:!1})}(this.root_,this.focusTrapFactory_)}this.handleKeydown_=(t=>this.foundation_.handleKeydown(t)),this.handleTransitionEnd_=(t=>this.foundation_.handleTransitionEnd(t)),this.root_.addEventListener("keydown",this.handleKeydown_),this.root_.addEventListener("transitionend",this.handleTransitionEnd_)}destroy(){this.root_.removeEventListener("keydown",this.handleKeydown_),this.root_.removeEventListener("transitionend",this.handleTransitionEnd_),this.list_&&this.list_.destroy();const{MODAL:t}=o.cssClasses;this.root_.classList.contains(t)&&(this.scrim_.removeEventListener("click",this.handleScrimClick_),this.open=!1)}getDefaultFoundation(){const t=Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),elementHasClass:(t,e)=>t.classList.contains(e),computeBoundingRect:()=>this.root_.getBoundingClientRect(),saveFocus:()=>{this.previousFocus_=document.activeElement},restoreFocus:()=>{const t=this.previousFocus_&&this.previousFocus_.focus;this.root_.contains(document.activeElement)&&t&&this.previousFocus_.focus()},focusActiveNavigationItem:()=>{const t=this.root_.querySelector(`.${d.a.cssClasses.LIST_ITEM_ACTIVATED_CLASS}`);t&&t.focus()},notifyClose:()=>this.emit(r.CLOSE_EVENT,{},!0),notifyOpen:()=>this.emit(r.OPEN_EVENT,{},!0),trapFocus:()=>this.focusTrap_.activate(),releaseFocus:()=>this.focusTrap_.deactivate()}),{DISMISSIBLE:e,MODAL:s}=o.cssClasses;if(this.root_.classList.contains(e))return new o(t);if(this.root_.classList.contains(s))return new l(t);throw new Error(`MDCDrawer: Failed to instantiate component. Supported variants are ${e} and ${s}.`)}}},function(t,e,s){"use strict";var i=s(5),n=s(3);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const a={ROOT:"mdc-menu",MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group"},r={SELECTED_EVENT:"MDCMenu:selected",ARIA_SELECTED_ATTR:"aria-selected",LIST_SELECTOR:".mdc-list",CHECKBOX_SELECTOR:'input[type="checkbox"]'};var o=s(9),l=s(16);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const c=["input","button","textarea","select","a"];class d extends n.a{static get cssClasses(){return a}static get strings(){return r}static get defaultAdapter(){return{addClassToElementAtIndex:()=>{},removeClassFromElementAtIndex:()=>{},addAttributeToElementAtIndex:()=>{},removeAttributeFromElementAtIndex:()=>{},elementContainsClass:()=>{},closeSurface:()=>{},getElementIndex:()=>{},getParentElement:()=>{},getSelectedElementIndex:()=>{},notifySelected:()=>{}}}constructor(t){super(Object.assign(d.defaultAdapter,t)),this.closeAnimationEndTimerId_=0}destroy(){this.closeAnimationEndTimerId_&&clearTimeout(this.closeAnimationEndTimerId_),this.adapter_.closeSurface()}handleKeydown(t){const{key:e,keyCode:s}=t,i="Tab"===e||9===s;"Space"===e||32===s||("Enter"===e||13===s)?this.handleAction_(t):i&&this.adapter_.closeSurface()}handleClick(t){this.handleAction_(t)}handleAction_(t){const e=this.getListItem_(t.target);e&&(this.handleSelection_(e),this.preventDefaultEvent_(t))}handleSelection_(t){const e=this.adapter_.getElementIndex(t);e<0||(this.adapter_.notifySelected({index:e}),this.adapter_.closeSurface(),this.closeAnimationEndTimerId_=setTimeout(()=>{const s=this.getSelectionGroup_(t);null!==s&&this.handleSelectionGroup_(s,e)},o.a.numbers.TRANSITION_CLOSE_DURATION))}handleSelectionGroup_(t,e){const s=this.adapter_.getSelectedElementIndex(t);s>=0&&(this.adapter_.removeAttributeFromElementAtIndex(s,r.ARIA_SELECTED_ATTR),this.adapter_.removeClassFromElementAtIndex(s,a.MENU_SELECTED_LIST_ITEM)),this.adapter_.addClassToElementAtIndex(e,a.MENU_SELECTED_LIST_ITEM),this.adapter_.addAttributeToElementAtIndex(e,r.ARIA_SELECTED_ATTR,"true")}getSelectionGroup_(t){let e=this.adapter_.getParentElement(t),s=this.adapter_.elementContainsClass(e,a.MENU_SELECTION_GROUP);for(;!s&&!this.adapter_.elementContainsClass(e,l.a.cssClasses.ROOT);)e=this.adapter_.getParentElement(e),s=this.adapter_.elementContainsClass(e,a.MENU_SELECTION_GROUP);return s?e:null}getListItem_(t){let e=this.adapter_.elementContainsClass(t,l.a.cssClasses.LIST_ITEM_CLASS);for(;!e;){if(!(t=this.adapter_.getParentElement(t)))return null;e=this.adapter_.elementContainsClass(t,l.a.cssClasses.LIST_ITEM_CLASS)}return t}preventDefaultEvent_(t){const e=`${t.target.tagName}`.toLowerCase();-1===c.indexOf(e)&&t.preventDefault()}}var h=s(8),_=s(24);s.d(e,"a",function(){return u});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class u extends i.a{constructor(...t){super(...t),this.menuSurface_,this.list_,this.handleKeydown_,this.handleClick_,this.afterOpenedCallback_}static attachTo(t){return new u(t)}initialize(t=(t=>new h.a(t)),e=(t=>new _.a(t))){this.menuSurface_=t(this.root_);const s=this.root_.querySelector(r.LIST_SELECTOR);s&&(this.list_=e(s),this.list_.wrapFocus=!0)}initialSyncWithDOM(){this.afterOpenedCallback_=(()=>this.handleAfterOpened_()),this.handleKeydown_=(t=>this.foundation_.handleKeydown(t)),this.handleClick_=(t=>this.foundation_.handleClick(t)),this.menuSurface_.listen(o.a.strings.OPENED_EVENT,this.afterOpenedCallback_),this.listen("keydown",this.handleKeydown_),this.listen("click",this.handleClick_)}destroy(){this.list_&&this.list_.destroy(),this.menuSurface_.destroy(),this.menuSurface_.unlisten(o.a.strings.OPENED_EVENT,this.afterOpenedCallback_),this.unlisten("keydown",this.handleKeydown_),this.unlisten("click",this.handleClick_),super.destroy()}get open(){return this.menuSurface_.open}set open(t){this.menuSurface_.open=t}setAnchorCorner(t){this.menuSurface_.setAnchorCorner(t)}setAnchorMargin(t){this.menuSurface_.setAnchorMargin(t)}get items(){return this.list_.listElements}getOptionByIndex(t){return t<this.items.length?this.items[t]:null}set quickOpen(t){this.menuSurface_.quickOpen=t}setFixedPosition(t){this.menuSurface_.setFixedPosition(t)}hoistMenuToBody(){this.menuSurface_.hoistMenuToBody()}setIsHoisted(t){this.menuSurface_.setIsHoisted(t)}setAbsolutePosition(t,e){this.menuSurface_.setAbsolutePosition(t,e)}setAnchorElement(t){this.menuSurface_.anchorElement=t}handleAfterOpened_(){const t=this.items;t.length>0&&t[0].focus()}getDefaultFoundation(){return new d({addClassToElementAtIndex:(t,e)=>{this.items[t].classList.add(e)},removeClassFromElementAtIndex:(t,e)=>{this.items[t].classList.remove(e)},addAttributeToElementAtIndex:(t,e,s)=>{this.items[t].setAttribute(e,s)},removeAttributeFromElementAtIndex:(t,e)=>{this.items[t].removeAttribute(e)},elementContainsClass:(t,e)=>t.classList.contains(e),closeSurface:()=>this.open=!1,getElementIndex:t=>this.items.indexOf(t),getParentElement:t=>t.parentElement,getSelectedElementIndex:t=>this.items.indexOf(t.querySelector(`.${a.MENU_SELECTED_LIST_ITEM}`)),notifySelected:t=>this.emit(r.SELECTED_EVENT,{index:t.index,item:this.items[t.index]})})}}},function(t,e,s){"use strict";var i=s(3),n=(s(30),s(4));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const a=["input","button","textarea","select"];class r extends i.a{static get strings(){return n.b}static get cssClasses(){return n.a}static get defaultAdapter(){return{getListItemCount:()=>{},getFocusedElementIndex:()=>{},setAttributeForElementIndex:()=>{},removeAttributeForElementIndex:()=>{},addClassForElementIndex:()=>{},removeClassForElementIndex:()=>{},focusItemAtIndex:()=>{},setTabIndexForListItemChildren:()=>{},followHref:()=>{},toggleCheckbox:()=>{}}}constructor(t){super(Object.assign(r.defaultAdapter,t)),this.wrapFocus_=!1,this.isVertical_=!0,this.isSingleSelectionList_=!1,this.selectedIndex_=-1,this.useActivatedClass_=!1}setWrapFocus(t){this.wrapFocus_=t}setVerticalOrientation(t){this.isVertical_=t}setSingleSelection(t){this.isSingleSelectionList_=t}setUseActivatedClass(t){this.useActivatedClass_=t}setSelectedIndex(t){if(t===this.selectedIndex_)return;const e=this.useActivatedClass_?n.a.LIST_ITEM_ACTIVATED_CLASS:n.a.LIST_ITEM_SELECTED_CLASS;this.selectedIndex_>=0&&(this.adapter_.removeAttributeForElementIndex(this.selectedIndex_,n.b.ARIA_SELECTED),this.adapter_.removeClassForElementIndex(this.selectedIndex_,e),this.adapter_.setAttributeForElementIndex(this.selectedIndex_,"tabindex",-1)),t>=0&&this.adapter_.getListItemCount()>t&&(this.selectedIndex_=t,this.adapter_.setAttributeForElementIndex(this.selectedIndex_,n.b.ARIA_SELECTED,!0),this.adapter_.addClassForElementIndex(this.selectedIndex_,e),this.adapter_.setAttributeForElementIndex(this.selectedIndex_,"tabindex",0),0!==this.selectedIndex_&&this.adapter_.setAttributeForElementIndex(0,"tabindex",-1))}handleFocusIn(t,e){e>=0&&this.adapter_.setTabIndexForListItemChildren(e,0)}handleFocusOut(t,e){e>=0&&this.adapter_.setTabIndexForListItemChildren(e,-1)}handleKeydown(t,e,s){const i="ArrowLeft"===t.key||37===t.keyCode,n="ArrowUp"===t.key||38===t.keyCode,a="ArrowRight"===t.key||39===t.keyCode,r="ArrowDown"===t.key||40===t.keyCode,o="Home"===t.key||36===t.keyCode,l="End"===t.key||35===t.keyCode,c="Enter"===t.key||13===t.keyCode,d="Space"===t.key||32===t.keyCode;let h=this.adapter_.getFocusedElementIndex();if(!(-1===h&&(h=s)<0))if(this.isVertical_&&r||!this.isVertical_&&a)this.preventDefaultEvent_(t),this.focusNextElement(h);else if(this.isVertical_&&n||!this.isVertical_&&i)this.preventDefaultEvent_(t),this.focusPrevElement(h);else if(o)this.preventDefaultEvent_(t),this.focusFirstElement();else if(l)this.preventDefaultEvent_(t),this.focusLastElement();else if(c||d){e&&(this.isSingleSelectionList_&&(this.setSelectedIndex(h),this.preventDefaultEvent_(t)),this.adapter_.followHref(h)),this.adapter_.toggleCheckbox(s)&&this.preventDefaultEvent_(t)}}handleClick(t,e){-1!==t&&(e&&this.adapter_.toggleCheckbox(t),this.isSingleSelectionList_&&this.setSelectedIndex(t))}preventDefaultEvent_(t){const e=`${t.target.tagName}`.toLowerCase();-1===a.indexOf(e)&&t.preventDefault()}focusNextElement(t){let e=t+1;if(e>=this.adapter_.getListItemCount()){if(!this.wrapFocus_)return;e=0}this.adapter_.focusItemAtIndex(e)}focusPrevElement(t){let e=t-1;if(e<0){if(!this.wrapFocus_)return;e=this.adapter_.getListItemCount()-1}this.adapter_.focusItemAtIndex(e)}focusFirstElement(){this.adapter_.getListItemCount()>0&&this.adapter_.focusItemAtIndex(0)}focusLastElement(){const t=this.adapter_.getListItemCount()-1;t>=0&&this.adapter_.focusItemAtIndex(t)}}e.a=r},,,,,,,function(t,e,s){var i=s(45),n=s(46),a=null;function r(t){return setTimeout(t,0)}t.exports=function(t,e){var s=document,o="string"==typeof t?s.querySelector(t):t,l=n({returnFocusOnDeactivate:!0,escapeDeactivates:!0},e),c={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},d={activate:function(t){if(!c.active){S(),c.active=!0,c.paused=!1,c.nodeFocusedBeforeActivation=s.activeElement;var e=t&&t.onActivate?t.onActivate:l.onActivate;return e&&e(),_(),d}},deactivate:h,pause:function(){!c.paused&&c.active&&(c.paused=!0,u())},unpause:function(){c.paused&&c.active&&(c.paused=!1,_())}};return d;function h(t){if(c.active){u(),c.active=!1,c.paused=!1;var e=t&&void 0!==t.onDeactivate?t.onDeactivate:l.onDeactivate;return e&&e(),(t&&void 0!==t.returnFocus?t.returnFocus:l.returnFocusOnDeactivate)&&r(function(){C(c.nodeFocusedBeforeActivation)}),d}}function _(){if(c.active)return a&&a.pause(),a=d,S(),r(function(){C(m())}),s.addEventListener("focusin",f,!0),s.addEventListener("mousedown",E,!0),s.addEventListener("touchstart",E,!0),s.addEventListener("click",g,!0),s.addEventListener("keydown",T,!0),d}function u(){if(c.active&&a===d)return s.removeEventListener("focusin",f,!0),s.removeEventListener("mousedown",E,!0),s.removeEventListener("touchstart",E,!0),s.removeEventListener("click",g,!0),s.removeEventListener("keydown",T,!0),a=null,d}function p(t){var e=l[t],i=e;if(!e)return null;if("string"==typeof e&&!(i=s.querySelector(e)))throw new Error("`"+t+"` refers to no known node");if("function"==typeof e&&!(i=e()))throw new Error("`"+t+"` did not return a node");return i}function m(){var t;if(!(t=null!==p("initialFocus")?p("initialFocus"):o.contains(s.activeElement)?s.activeElement:c.firstTabbableNode||p("fallbackFocus")))throw new Error("You can't have a focus-trap without at least one focusable element");return t}function E(t){o.contains(t.target)||(l.clickOutsideDeactivates?h({returnFocus:!i.isFocusable(t.target)}):t.preventDefault())}function f(t){o.contains(t.target)||t.target instanceof Document||(t.stopImmediatePropagation(),C(c.mostRecentlyFocusedNode||m()))}function T(t){if(!1!==l.escapeDeactivates&&function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t))return t.preventDefault(),void h();(function(t){return"Tab"===t.key||9===t.keyCode})(t)&&function(t){if(S(),t.shiftKey&&t.target===c.firstTabbableNode)return t.preventDefault(),void C(c.lastTabbableNode);t.shiftKey||t.target!==c.lastTabbableNode||(t.preventDefault(),C(c.firstTabbableNode))}(t)}function g(t){l.clickOutsideDeactivates||o.contains(t.target)||(t.preventDefault(),t.stopImmediatePropagation())}function S(){var t=i(o);c.firstTabbableNode=t[0]||m(),c.lastTabbableNode=t[t.length-1]||m()}function C(t){t!==s.activeElement&&(t&&t.focus?(t.focus(),c.mostRecentlyFocusedNode=t,function(t){return t.tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select}(t)&&t.select()):C(m()))}}},function(t,e,s){"use strict";var i=s(5),n=s(16);s(30);function a(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}var r=s(4);s.d(e,"a",function(){return o});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class o extends i.a{constructor(...t){super(...t),this.handleKeydown_,this.handleClick_,this.focusInEventListener_,this.focusOutEventListener_}static attachTo(t){return new o(t)}destroy(){this.root_.removeEventListener("keydown",this.handleKeydown_),this.root_.removeEventListener("click",this.handleClick_),this.root_.removeEventListener("focusin",this.focusInEventListener_),this.root_.removeEventListener("focusout",this.focusOutEventListener_)}initialSyncWithDOM(){this.handleClick_=this.handleClickEvent_.bind(this),this.handleKeydown_=this.handleKeydownEvent_.bind(this),this.focusInEventListener_=this.handleFocusInEvent_.bind(this),this.focusOutEventListener_=this.handleFocusOutEvent_.bind(this),this.root_.addEventListener("keydown",this.handleKeydown_),this.root_.addEventListener("focusin",this.focusInEventListener_),this.root_.addEventListener("focusout",this.focusOutEventListener_),this.root_.addEventListener("click",this.handleClick_),this.layout(),this.initializeListType()}layout(){const t=this.root_.getAttribute(r.b.ARIA_ORIENTATION);this.vertical=t!==r.b.ARIA_ORIENTATION_HORIZONTAL,[].slice.call(this.root_.querySelectorAll(".mdc-list-item:not([tabindex])")).forEach(t=>{t.setAttribute("tabindex",-1)}),[].slice.call(this.root_.querySelectorAll(r.b.FOCUSABLE_CHILD_ELEMENTS)).forEach(t=>t.setAttribute("tabindex",-1))}getListItemIndex_(t){let e=t.target,s=-1;for(;!e.classList.contains(r.a.LIST_ITEM_CLASS)&&!e.classList.contains(r.a.ROOT);)e=e.parentElement;return e.classList.contains(r.a.LIST_ITEM_CLASS)&&(s=this.listElements.indexOf(e)),s}handleFocusInEvent_(t){const e=this.getListItemIndex_(t);this.foundation_.handleFocusIn(t,e)}handleFocusOutEvent_(t){const e=this.getListItemIndex_(t);this.foundation_.handleFocusOut(t,e)}handleKeydownEvent_(t){const e=this.getListItemIndex_(t);e>=0&&this.foundation_.handleKeydown(t,t.target.classList.contains(r.a.LIST_ITEM_CLASS),e)}handleClickEvent_(t){const e=this.getListItemIndex_(t),s=!a(t.target,r.b.CHECKBOX_RADIO_SELECTOR);this.foundation_.handleClick(e,s)}initializeListType(){const t=this.root_.querySelector(`.${r.a.LIST_ITEM_ACTIVATED_CLASS}, .${r.a.LIST_ITEM_SELECTED_CLASS}`);t&&(t.classList.contains(r.a.LIST_ITEM_ACTIVATED_CLASS)&&this.foundation_.setUseActivatedClass(!0),this.singleSelection=!0,this.selectedIndex=this.listElements.indexOf(t))}set vertical(t){this.foundation_.setVerticalOrientation(t)}get listElements(){return[].slice.call(this.root_.querySelectorAll(r.b.ENABLED_ITEMS_SELECTOR))}set wrapFocus(t){this.foundation_.setWrapFocus(t)}set singleSelection(t){this.foundation_.setSingleSelection(t)}set selectedIndex(t){this.foundation_.setSelectedIndex(t)}getDefaultFoundation(){return new n.a(Object.assign({getListItemCount:()=>this.listElements.length,getFocusedElementIndex:()=>this.listElements.indexOf(document.activeElement),setAttributeForElementIndex:(t,e,s)=>{const i=this.listElements[t];i&&i.setAttribute(e,s)},removeAttributeForElementIndex:(t,e)=>{const s=this.listElements[t];s&&s.removeAttribute(e)},addClassForElementIndex:(t,e)=>{const s=this.listElements[t];s&&s.classList.add(e)},removeClassForElementIndex:(t,e)=>{const s=this.listElements[t];s&&s.classList.remove(e)},focusItemAtIndex:t=>{const e=this.listElements[t];e&&e.focus()},setTabIndexForListItemChildren:(t,e)=>{const s=this.listElements[t];[].slice.call(s.querySelectorAll(r.b.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX)).forEach(t=>t.setAttribute("tabindex",e))},followHref:t=>{const e=this.listElements[t];e&&e.href&&e.click()},toggleCheckbox:t=>{let e=!1;const s=this.listElements[t];return[].slice.call(s.querySelectorAll(r.b.CHECKBOX_RADIO_SELECTOR)).forEach(t=>{const s=document.createEvent("Event");s.initEvent("change",!0,!0),t.checked&&"radio"===t.type||(t.checked=!t.checked,t.dispatchEvent(s)),e=!0}),e}}))}}},,,,,function(t,e,s){"use strict";
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */},function(t,e,s){"use strict";
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */},,,,,,,,,,,,,,,function(t,e){var s=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],i=s.join(","),n="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function a(t,e){e=e||{};var s,a,o,l=[],h=[],u=new _(t.ownerDocument||t),p=t.querySelectorAll(i);for(e.includeContainer&&n.call(t,i)&&(p=Array.prototype.slice.apply(p)).unshift(t),s=0;s<p.length;s++)r(a=p[s],u)&&(0===(o=c(a))?l.push(a):h.push({documentOrder:s,tabIndex:o,node:a}));return h.sort(d).map(function(t){return t.node}).concat(l)}function r(t,e){return!(!o(t,e)||function(t){return function(t){return h(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var e=function(t){for(var e=0;e<t.length;e++)if(t[e].checked)return t[e]}(t.ownerDocument.querySelectorAll('input[type="radio"][name="'+t.name+'"]'));return!e||e===t}(t)}(t)||c(t)<0)}function o(t,e){return e=e||new _(t.ownerDocument||t),!(t.disabled||function(t){return h(t)&&"hidden"===t.type}(t)||e.isUntouchable(t))}a.isTabbable=function(t,e){if(!t)throw new Error("No node provided");return!1!==n.call(t,i)&&r(t,e)},a.isFocusable=function(t,e){if(!t)throw new Error("No node provided");return!1!==n.call(t,l)&&o(t,e)};var l=s.concat("iframe").join(",");function c(t){var e=parseInt(t.getAttribute("tabindex"),10);return isNaN(e)?function(t){return"true"===t.contentEditable}(t)?0:t.tabIndex:e}function d(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex}function h(t){return"INPUT"===t.tagName}function _(t){this.doc=t,this.cache=[]}_.prototype.hasDisplayNone=function(t,e){if(t===this.doc.documentElement)return!1;var s=function(t,e){for(var s=0,i=t.length;s<i;s++)if(e(t[s]))return t[s]}(this.cache,function(e){return e===t});if(s)return s[1];var i=!1;return"none"===(e=e||this.doc.defaultView.getComputedStyle(t)).display?i=!0:t.parentNode&&(i=this.hasDisplayNone(t.parentNode)),this.cache.push([t,i]),i},_.prototype.isUntouchable=function(t){if(t===this.doc.documentElement)return!1;var e=this.doc.defaultView.getComputedStyle(t);return!!this.hasDisplayNone(t,e)||"hidden"===e.visibility},t.exports=a},function(t,e){t.exports=function(){for(var t={},e=0;e<arguments.length;e++){var i=arguments[e];for(var n in i)s.call(i,n)&&(t[n]=i[n])}return t};var s=Object.prototype.hasOwnProperty}]]);