(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var la=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function g1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Pv={exports:{}},Mc={},jv={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vl=Symbol.for("react.element"),v1=Symbol.for("react.portal"),y1=Symbol.for("react.fragment"),x1=Symbol.for("react.strict_mode"),_1=Symbol.for("react.profiler"),w1=Symbol.for("react.provider"),b1=Symbol.for("react.context"),E1=Symbol.for("react.forward_ref"),T1=Symbol.for("react.suspense"),I1=Symbol.for("react.memo"),N1=Symbol.for("react.lazy"),Bm=Symbol.iterator;function S1(t){return t===null||typeof t!="object"?null:(t=Bm&&t[Bm]||t["@@iterator"],typeof t=="function"?t:null)}var Dv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ov=Object.assign,Lv={};function Vo(t,e,n){this.props=t,this.context=e,this.refs=Lv,this.updater=n||Dv}Vo.prototype.isReactComponent={};Vo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mv(){}Mv.prototype=Vo.prototype;function Wf(t,e,n){this.props=t,this.context=e,this.refs=Lv,this.updater=n||Dv}var Kf=Wf.prototype=new Mv;Kf.constructor=Wf;Ov(Kf,Vo.prototype);Kf.isPureReactComponent=!0;var qm=Array.isArray,Vv=Object.prototype.hasOwnProperty,Gf={current:null},Fv={key:!0,ref:!0,__self:!0,__source:!0};function Uv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Vv.call(e,r)&&!Fv.hasOwnProperty(r)&&(s[r]=e[r]);var u=arguments.length-2;if(u===1)s.children=n;else if(1<u){for(var c=Array(u),d=0;d<u;d++)c[d]=arguments[d+2];s.children=c}if(t&&t.defaultProps)for(r in u=t.defaultProps,u)s[r]===void 0&&(s[r]=u[r]);return{$$typeof:vl,type:t,key:i,ref:o,props:s,_owner:Gf.current}}function k1(t,e){return{$$typeof:vl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qf(t){return typeof t=="object"&&t!==null&&t.$$typeof===vl}function C1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hm=/\/+/g;function Od(t,e){return typeof t=="object"&&t!==null&&t.key!=null?C1(""+t.key):e.toString(36)}function Iu(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vl:case v1:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Od(o,0):r,qm(s)?(n="",t!=null&&(n=t.replace(Hm,"$&/")+"/"),Iu(s,e,n,"",function(d){return d})):s!=null&&(Qf(s)&&(s=k1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Hm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",qm(t))for(var u=0;u<t.length;u++){i=t[u];var c=r+Od(i,u);o+=Iu(i,e,n,c,s)}else if(c=S1(t),typeof c=="function")for(t=c.call(t),u=0;!(i=t.next()).done;)i=i.value,c=r+Od(i,u++),o+=Iu(i,e,n,c,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function eu(t,e,n){if(t==null)return t;var r=[],s=0;return Iu(t,r,"","",function(i){return e.call(n,i,s++)}),r}function A1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},Nu={transition:null},R1={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:Nu,ReactCurrentOwner:Gf};function zv(){throw Error("act(...) is not supported in production builds of React.")}me.Children={map:eu,forEach:function(t,e,n){eu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return eu(t,function(){e++}),e},toArray:function(t){return eu(t,function(e){return e})||[]},only:function(t){if(!Qf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};me.Component=Vo;me.Fragment=y1;me.Profiler=_1;me.PureComponent=Wf;me.StrictMode=x1;me.Suspense=T1;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R1;me.act=zv;me.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ov({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Gf.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(c in e)Vv.call(e,c)&&!Fv.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&u!==void 0?u[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){u=Array(c);for(var d=0;d<c;d++)u[d]=arguments[d+2];r.children=u}return{$$typeof:vl,type:t.type,key:s,ref:i,props:r,_owner:o}};me.createContext=function(t){return t={$$typeof:b1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:w1,_context:t},t.Consumer=t};me.createElement=Uv;me.createFactory=function(t){var e=Uv.bind(null,t);return e.type=t,e};me.createRef=function(){return{current:null}};me.forwardRef=function(t){return{$$typeof:E1,render:t}};me.isValidElement=Qf;me.lazy=function(t){return{$$typeof:N1,_payload:{_status:-1,_result:t},_init:A1}};me.memo=function(t,e){return{$$typeof:I1,type:t,compare:e===void 0?null:e}};me.startTransition=function(t){var e=Nu.transition;Nu.transition={};try{t()}finally{Nu.transition=e}};me.unstable_act=zv;me.useCallback=function(t,e){return $t.current.useCallback(t,e)};me.useContext=function(t){return $t.current.useContext(t)};me.useDebugValue=function(){};me.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};me.useEffect=function(t,e){return $t.current.useEffect(t,e)};me.useId=function(){return $t.current.useId()};me.useImperativeHandle=function(t,e,n){return $t.current.useImperativeHandle(t,e,n)};me.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};me.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};me.useMemo=function(t,e){return $t.current.useMemo(t,e)};me.useReducer=function(t,e,n){return $t.current.useReducer(t,e,n)};me.useRef=function(t){return $t.current.useRef(t)};me.useState=function(t){return $t.current.useState(t)};me.useSyncExternalStore=function(t,e,n){return $t.current.useSyncExternalStore(t,e,n)};me.useTransition=function(){return $t.current.useTransition()};me.version="18.3.1";jv.exports=me;var B=jv.exports;const $v=g1(B);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P1=B,j1=Symbol.for("react.element"),D1=Symbol.for("react.fragment"),O1=Object.prototype.hasOwnProperty,L1=P1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M1={key:!0,ref:!0,__self:!0,__source:!0};function Bv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)O1.call(e,r)&&!M1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:j1,type:t,key:i,ref:o,props:s,_owner:L1.current}}Mc.Fragment=D1;Mc.jsx=Bv;Mc.jsxs=Bv;Pv.exports=Mc;var l=Pv.exports,Eh={},qv={exports:{}},un={},Hv={exports:{}},Wv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(X,ie){var ae=X.length;X.push(ie);e:for(;0<ae;){var je=ae-1>>>1,_e=X[je];if(0<s(_e,ie))X[je]=ie,X[ae]=_e,ae=je;else break e}}function n(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var ie=X[0],ae=X.pop();if(ae!==ie){X[0]=ae;e:for(var je=0,_e=X.length,Ue=_e>>>1;je<Ue;){var It=2*(je+1)-1,dn=X[It],Ye=It+1,En=X[Ye];if(0>s(dn,ae))Ye<_e&&0>s(En,dn)?(X[je]=En,X[Ye]=ae,je=Ye):(X[je]=dn,X[It]=ae,je=It);else if(Ye<_e&&0>s(En,ae))X[je]=En,X[Ye]=ae,je=Ye;else break e}}return ie}function s(X,ie){var ae=X.sortIndex-ie.sortIndex;return ae!==0?ae:X.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,u=o.now();t.unstable_now=function(){return o.now()-u}}var c=[],d=[],g=1,v=null,y=3,S=!1,P=!1,j=!1,V=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(X){for(var ie=n(d);ie!==null;){if(ie.callback===null)r(d);else if(ie.startTime<=X)r(d),ie.sortIndex=ie.expirationTime,e(c,ie);else break;ie=n(d)}}function F(X){if(j=!1,A(X),!P)if(n(c)!==null)P=!0,Os(M);else{var ie=n(d);ie!==null&&pt(F,ie.startTime-X)}}function M(X,ie){P=!1,j&&(j=!1,w(_),_=-1),S=!0;var ae=y;try{for(A(ie),v=n(c);v!==null&&(!(v.expirationTime>ie)||X&&!R());){var je=v.callback;if(typeof je=="function"){v.callback=null,y=v.priorityLevel;var _e=je(v.expirationTime<=ie);ie=t.unstable_now(),typeof _e=="function"?v.callback=_e:v===n(c)&&r(c),A(ie)}else r(c);v=n(c)}if(v!==null)var Ue=!0;else{var It=n(d);It!==null&&pt(F,It.startTime-ie),Ue=!1}return Ue}finally{v=null,y=ae,S=!1}}var z=!1,E=null,_=-1,T=5,N=-1;function R(){return!(t.unstable_now()-N<T)}function C(){if(E!==null){var X=t.unstable_now();N=X;var ie=!0;try{ie=E(!0,X)}finally{ie?b():(z=!1,E=null)}}else z=!1}var b;if(typeof I=="function")b=function(){I(C)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,Qe=Ae.port2;Ae.port1.onmessage=C,b=function(){Qe.postMessage(null)}}else b=function(){V(C,0)};function Os(X){E=X,z||(z=!0,b())}function pt(X,ie){_=V(function(){X(t.unstable_now())},ie)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(X){X.callback=null},t.unstable_continueExecution=function(){P||S||(P=!0,Os(M))},t.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<X?Math.floor(1e3/X):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(X){switch(y){case 1:case 2:case 3:var ie=3;break;default:ie=y}var ae=y;y=ie;try{return X()}finally{y=ae}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(X,ie){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ae=y;y=X;try{return ie()}finally{y=ae}},t.unstable_scheduleCallback=function(X,ie,ae){var je=t.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?je+ae:je):ae=je,X){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=ae+_e,X={id:g++,callback:ie,priorityLevel:X,startTime:ae,expirationTime:_e,sortIndex:-1},ae>je?(X.sortIndex=ae,e(d,X),n(c)===null&&X===n(d)&&(j?(w(_),_=-1):j=!0,pt(F,ae-je))):(X.sortIndex=_e,e(c,X),P||S||(P=!0,Os(M))),X},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(X){var ie=y;return function(){var ae=y;y=ie;try{return X.apply(this,arguments)}finally{y=ae}}}})(Wv);Hv.exports=Wv;var V1=Hv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F1=B,ln=V1;function K(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kv=new Set,Ha={};function _i(t,e){bo(t,e),bo(t+"Capture",e)}function bo(t,e){for(Ha[t]=e,t=0;t<e.length;t++)Kv.add(e[t])}var Cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Th=Object.prototype.hasOwnProperty,U1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wm={},Km={};function z1(t){return Th.call(Km,t)?!0:Th.call(Wm,t)?!1:U1.test(t)?Km[t]=!0:(Wm[t]=!0,!1)}function $1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function B1(t,e,n,r){if(e===null||typeof e>"u"||$1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Bt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){wt[t]=new Bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];wt[e]=new Bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){wt[t]=new Bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){wt[t]=new Bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){wt[t]=new Bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){wt[t]=new Bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){wt[t]=new Bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){wt[t]=new Bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){wt[t]=new Bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yf=/[\-:]([a-z])/g;function Xf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yf,Xf);wt[e]=new Bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yf,Xf);wt[e]=new Bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yf,Xf);wt[e]=new Bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){wt[t]=new Bt(t,1,!1,t.toLowerCase(),null,!1,!1)});wt.xlinkHref=new Bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){wt[t]=new Bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jf(t,e,n,r){var s=wt.hasOwnProperty(e)?wt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(B1(e,n,s,r)&&(n=null),r||s===null?z1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Fr=F1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tu=Symbol.for("react.element"),Qi=Symbol.for("react.portal"),Yi=Symbol.for("react.fragment"),Zf=Symbol.for("react.strict_mode"),Ih=Symbol.for("react.profiler"),Gv=Symbol.for("react.provider"),Qv=Symbol.for("react.context"),ep=Symbol.for("react.forward_ref"),Nh=Symbol.for("react.suspense"),Sh=Symbol.for("react.suspense_list"),tp=Symbol.for("react.memo"),ns=Symbol.for("react.lazy"),Yv=Symbol.for("react.offscreen"),Gm=Symbol.iterator;function ua(t){return t===null||typeof t!="object"?null:(t=Gm&&t[Gm]||t["@@iterator"],typeof t=="function"?t:null)}var qe=Object.assign,Ld;function _a(t){if(Ld===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ld=e&&e[1]||""}return`
`+Ld+t}var Md=!1;function Vd(t,e){if(!t||Md)return"";Md=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,u=i.length-1;1<=o&&0<=u&&s[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(s[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||s[o]!==i[u]){var c=`
`+s[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=u);break}}}finally{Md=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_a(t):""}function q1(t){switch(t.tag){case 5:return _a(t.type);case 16:return _a("Lazy");case 13:return _a("Suspense");case 19:return _a("SuspenseList");case 0:case 2:case 15:return t=Vd(t.type,!1),t;case 11:return t=Vd(t.type.render,!1),t;case 1:return t=Vd(t.type,!0),t;default:return""}}function kh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yi:return"Fragment";case Qi:return"Portal";case Ih:return"Profiler";case Zf:return"StrictMode";case Nh:return"Suspense";case Sh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qv:return(t.displayName||"Context")+".Consumer";case Gv:return(t._context.displayName||"Context")+".Provider";case ep:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tp:return e=t.displayName||null,e!==null?e:kh(t.type)||"Memo";case ns:e=t._payload,t=t._init;try{return kh(t(e))}catch{}}return null}function H1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kh(e);case 8:return e===Zf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ts(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function W1(t){var e=Xv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function nu(t){t._valueTracker||(t._valueTracker=W1(t))}function Jv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Xv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ch(t,e){var n=e.checked;return qe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Qm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ts(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zv(t,e){e=e.checked,e!=null&&Jf(t,"checked",e,!1)}function Ah(t,e){Zv(t,e);var n=Ts(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Rh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Rh(t,e.type,Ts(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ym(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Rh(t,e,n){(e!=="number"||Wu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wa=Array.isArray;function ho(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ts(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Ph(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(K(91));return qe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(K(92));if(wa(n)){if(1<n.length)throw Error(K(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ts(n)}}function ey(t,e){var n=Ts(e.value),r=Ts(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Jm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ty(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ty(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ru,ny=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ru=ru||document.createElement("div"),ru.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ru.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},K1=["Webkit","ms","Moz","O"];Object.keys(Ra).forEach(function(t){K1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ra[e]=Ra[t]})});function ry(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ra.hasOwnProperty(t)&&Ra[t]?(""+e).trim():e+"px"}function sy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=ry(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var G1=qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dh(t,e){if(e){if(G1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(K(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(K(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(K(61))}if(e.style!=null&&typeof e.style!="object")throw Error(K(62))}}function Oh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lh=null;function np(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mh=null,fo=null,po=null;function Zm(t){if(t=_l(t)){if(typeof Mh!="function")throw Error(K(280));var e=t.stateNode;e&&(e=$c(e),Mh(t.stateNode,t.type,e))}}function iy(t){fo?po?po.push(t):po=[t]:fo=t}function oy(){if(fo){var t=fo,e=po;if(po=fo=null,Zm(t),e)for(t=0;t<e.length;t++)Zm(e[t])}}function ay(t,e){return t(e)}function ly(){}var Fd=!1;function uy(t,e,n){if(Fd)return t(e,n);Fd=!0;try{return ay(t,e,n)}finally{Fd=!1,(fo!==null||po!==null)&&(ly(),oy())}}function Ka(t,e){var n=t.stateNode;if(n===null)return null;var r=$c(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(K(231,e,typeof n));return n}var Vh=!1;if(Cr)try{var ca={};Object.defineProperty(ca,"passive",{get:function(){Vh=!0}}),window.addEventListener("test",ca,ca),window.removeEventListener("test",ca,ca)}catch{Vh=!1}function Q1(t,e,n,r,s,i,o,u,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(g){this.onError(g)}}var Pa=!1,Ku=null,Gu=!1,Fh=null,Y1={onError:function(t){Pa=!0,Ku=t}};function X1(t,e,n,r,s,i,o,u,c){Pa=!1,Ku=null,Q1.apply(Y1,arguments)}function J1(t,e,n,r,s,i,o,u,c){if(X1.apply(this,arguments),Pa){if(Pa){var d=Ku;Pa=!1,Ku=null}else throw Error(K(198));Gu||(Gu=!0,Fh=d)}}function wi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function cy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function eg(t){if(wi(t)!==t)throw Error(K(188))}function Z1(t){var e=t.alternate;if(!e){if(e=wi(t),e===null)throw Error(K(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return eg(s),t;if(i===r)return eg(s),e;i=i.sibling}throw Error(K(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,u=s.child;u;){if(u===n){o=!0,n=s,r=i;break}if(u===r){o=!0,r=s,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,r=s;break}if(u===r){o=!0,r=i,n=s;break}u=u.sibling}if(!o)throw Error(K(189))}}if(n.alternate!==r)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?t:e}function dy(t){return t=Z1(t),t!==null?hy(t):null}function hy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hy(t);if(e!==null)return e;t=t.sibling}return null}var fy=ln.unstable_scheduleCallback,tg=ln.unstable_cancelCallback,eb=ln.unstable_shouldYield,tb=ln.unstable_requestPaint,Ze=ln.unstable_now,nb=ln.unstable_getCurrentPriorityLevel,rp=ln.unstable_ImmediatePriority,py=ln.unstable_UserBlockingPriority,Qu=ln.unstable_NormalPriority,rb=ln.unstable_LowPriority,my=ln.unstable_IdlePriority,Vc=null,Jn=null;function sb(t){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(Vc,t,void 0,(t.current.flags&128)===128)}catch{}}var Ln=Math.clz32?Math.clz32:ab,ib=Math.log,ob=Math.LN2;function ab(t){return t>>>=0,t===0?32:31-(ib(t)/ob|0)|0}var su=64,iu=4194304;function ba(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var u=o&~s;u!==0?r=ba(u):(i&=o,i!==0&&(r=ba(i)))}else o=n&~s,o!==0?r=ba(o):i!==0&&(r=ba(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ln(e),s=1<<n,r|=t[n],e&=~s;return r}function lb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ub(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Ln(i),u=1<<o,c=s[o];c===-1?(!(u&n)||u&r)&&(s[o]=lb(u,e)):c<=e&&(t.expiredLanes|=u),i&=~u}}function Uh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gy(){var t=su;return su<<=1,!(su&4194240)&&(su=64),t}function Ud(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function yl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ln(e),t[e]=n}function cb(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Ln(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function sp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ln(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Se=0;function vy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yy,ip,xy,_y,wy,zh=!1,ou=[],fs=null,ps=null,ms=null,Ga=new Map,Qa=new Map,ss=[],db="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ng(t,e){switch(t){case"focusin":case"focusout":fs=null;break;case"dragenter":case"dragleave":ps=null;break;case"mouseover":case"mouseout":ms=null;break;case"pointerover":case"pointerout":Ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(e.pointerId)}}function da(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=_l(e),e!==null&&ip(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function hb(t,e,n,r,s){switch(e){case"focusin":return fs=da(fs,t,e,n,r,s),!0;case"dragenter":return ps=da(ps,t,e,n,r,s),!0;case"mouseover":return ms=da(ms,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Ga.set(i,da(Ga.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Qa.set(i,da(Qa.get(i)||null,t,e,n,r,s)),!0}return!1}function by(t){var e=ei(t.target);if(e!==null){var n=wi(e);if(n!==null){if(e=n.tag,e===13){if(e=cy(n),e!==null){t.blockedOn=e,wy(t.priority,function(){xy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Su(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$h(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Lh=r,n.target.dispatchEvent(r),Lh=null}else return e=_l(n),e!==null&&ip(e),t.blockedOn=n,!1;e.shift()}return!0}function rg(t,e,n){Su(t)&&n.delete(e)}function fb(){zh=!1,fs!==null&&Su(fs)&&(fs=null),ps!==null&&Su(ps)&&(ps=null),ms!==null&&Su(ms)&&(ms=null),Ga.forEach(rg),Qa.forEach(rg)}function ha(t,e){t.blockedOn===e&&(t.blockedOn=null,zh||(zh=!0,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,fb)))}function Ya(t){function e(s){return ha(s,t)}if(0<ou.length){ha(ou[0],t);for(var n=1;n<ou.length;n++){var r=ou[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fs!==null&&ha(fs,t),ps!==null&&ha(ps,t),ms!==null&&ha(ms,t),Ga.forEach(e),Qa.forEach(e),n=0;n<ss.length;n++)r=ss[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ss.length&&(n=ss[0],n.blockedOn===null);)by(n),n.blockedOn===null&&ss.shift()}var mo=Fr.ReactCurrentBatchConfig,Xu=!0;function pb(t,e,n,r){var s=Se,i=mo.transition;mo.transition=null;try{Se=1,op(t,e,n,r)}finally{Se=s,mo.transition=i}}function mb(t,e,n,r){var s=Se,i=mo.transition;mo.transition=null;try{Se=4,op(t,e,n,r)}finally{Se=s,mo.transition=i}}function op(t,e,n,r){if(Xu){var s=$h(t,e,n,r);if(s===null)Yd(t,e,r,Ju,n),ng(t,r);else if(hb(s,t,e,n,r))r.stopPropagation();else if(ng(t,r),e&4&&-1<db.indexOf(t)){for(;s!==null;){var i=_l(s);if(i!==null&&yy(i),i=$h(t,e,n,r),i===null&&Yd(t,e,r,Ju,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Yd(t,e,r,null,n)}}var Ju=null;function $h(t,e,n,r){if(Ju=null,t=np(r),t=ei(t),t!==null)if(e=wi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=cy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ju=t,null}function Ey(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nb()){case rp:return 1;case py:return 4;case Qu:case rb:return 16;case my:return 536870912;default:return 16}default:return 16}}var cs=null,ap=null,ku=null;function Ty(){if(ku)return ku;var t,e=ap,n=e.length,r,s="value"in cs?cs.value:cs.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return ku=s.slice(t,1<r?1-r:void 0)}function Cu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function au(){return!0}function sg(){return!1}function cn(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(n=t[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?au:sg,this.isPropagationStopped=sg,this}return qe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=au)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=au)},persist:function(){},isPersistent:au}),e}var Fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lp=cn(Fo),xl=qe({},Fo,{view:0,detail:0}),gb=cn(xl),zd,$d,fa,Fc=qe({},xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:up,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fa&&(fa&&t.type==="mousemove"?(zd=t.screenX-fa.screenX,$d=t.screenY-fa.screenY):$d=zd=0,fa=t),zd)},movementY:function(t){return"movementY"in t?t.movementY:$d}}),ig=cn(Fc),vb=qe({},Fc,{dataTransfer:0}),yb=cn(vb),xb=qe({},xl,{relatedTarget:0}),Bd=cn(xb),_b=qe({},Fo,{animationName:0,elapsedTime:0,pseudoElement:0}),wb=cn(_b),bb=qe({},Fo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Eb=cn(bb),Tb=qe({},Fo,{data:0}),og=cn(Tb),Ib={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Sb[t])?!!e[t]:!1}function up(){return kb}var Cb=qe({},xl,{key:function(t){if(t.key){var e=Ib[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Nb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:up,charCode:function(t){return t.type==="keypress"?Cu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ab=cn(Cb),Rb=qe({},Fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ag=cn(Rb),Pb=qe({},xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:up}),jb=cn(Pb),Db=qe({},Fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ob=cn(Db),Lb=qe({},Fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Mb=cn(Lb),Vb=[9,13,27,32],cp=Cr&&"CompositionEvent"in window,ja=null;Cr&&"documentMode"in document&&(ja=document.documentMode);var Fb=Cr&&"TextEvent"in window&&!ja,Iy=Cr&&(!cp||ja&&8<ja&&11>=ja),lg=" ",ug=!1;function Ny(t,e){switch(t){case"keyup":return Vb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xi=!1;function Ub(t,e){switch(t){case"compositionend":return Sy(e);case"keypress":return e.which!==32?null:(ug=!0,lg);case"textInput":return t=e.data,t===lg&&ug?null:t;default:return null}}function zb(t,e){if(Xi)return t==="compositionend"||!cp&&Ny(t,e)?(t=Ty(),ku=ap=cs=null,Xi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Iy&&e.locale!=="ko"?null:e.data;default:return null}}var $b={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$b[t.type]:e==="textarea"}function ky(t,e,n,r){iy(r),e=Zu(e,"onChange"),0<e.length&&(n=new lp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Da=null,Xa=null;function Bb(t){Fy(t,0)}function Uc(t){var e=eo(t);if(Jv(e))return t}function qb(t,e){if(t==="change")return e}var Cy=!1;if(Cr){var qd;if(Cr){var Hd="oninput"in document;if(!Hd){var dg=document.createElement("div");dg.setAttribute("oninput","return;"),Hd=typeof dg.oninput=="function"}qd=Hd}else qd=!1;Cy=qd&&(!document.documentMode||9<document.documentMode)}function hg(){Da&&(Da.detachEvent("onpropertychange",Ay),Xa=Da=null)}function Ay(t){if(t.propertyName==="value"&&Uc(Xa)){var e=[];ky(e,Xa,t,np(t)),uy(Bb,e)}}function Hb(t,e,n){t==="focusin"?(hg(),Da=e,Xa=n,Da.attachEvent("onpropertychange",Ay)):t==="focusout"&&hg()}function Wb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uc(Xa)}function Kb(t,e){if(t==="click")return Uc(e)}function Gb(t,e){if(t==="input"||t==="change")return Uc(e)}function Qb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:Qb;function Ja(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Th.call(e,s)||!Vn(t[s],e[s]))return!1}return!0}function fg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pg(t,e){var n=fg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fg(n)}}function Ry(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ry(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Py(){for(var t=window,e=Wu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wu(t.document)}return e}function dp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Yb(t){var e=Py(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ry(n.ownerDocument.documentElement,n)){if(r!==null&&dp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=pg(n,i);var o=pg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Xb=Cr&&"documentMode"in document&&11>=document.documentMode,Ji=null,Bh=null,Oa=null,qh=!1;function mg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qh||Ji==null||Ji!==Wu(r)||(r=Ji,"selectionStart"in r&&dp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oa&&Ja(Oa,r)||(Oa=r,r=Zu(Bh,"onSelect"),0<r.length&&(e=new lp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ji)))}function lu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zi={animationend:lu("Animation","AnimationEnd"),animationiteration:lu("Animation","AnimationIteration"),animationstart:lu("Animation","AnimationStart"),transitionend:lu("Transition","TransitionEnd")},Wd={},jy={};Cr&&(jy=document.createElement("div").style,"AnimationEvent"in window||(delete Zi.animationend.animation,delete Zi.animationiteration.animation,delete Zi.animationstart.animation),"TransitionEvent"in window||delete Zi.transitionend.transition);function zc(t){if(Wd[t])return Wd[t];if(!Zi[t])return t;var e=Zi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jy)return Wd[t]=e[n];return t}var Dy=zc("animationend"),Oy=zc("animationiteration"),Ly=zc("animationstart"),My=zc("transitionend"),Vy=new Map,gg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function As(t,e){Vy.set(t,e),_i(e,[t])}for(var Kd=0;Kd<gg.length;Kd++){var Gd=gg[Kd],Jb=Gd.toLowerCase(),Zb=Gd[0].toUpperCase()+Gd.slice(1);As(Jb,"on"+Zb)}As(Dy,"onAnimationEnd");As(Oy,"onAnimationIteration");As(Ly,"onAnimationStart");As("dblclick","onDoubleClick");As("focusin","onFocus");As("focusout","onBlur");As(My,"onTransitionEnd");bo("onMouseEnter",["mouseout","mouseover"]);bo("onMouseLeave",["mouseout","mouseover"]);bo("onPointerEnter",["pointerout","pointerover"]);bo("onPointerLeave",["pointerout","pointerover"]);_i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_i("onBeforeInput",["compositionend","keypress","textInput","paste"]);_i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ea));function vg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,J1(r,e,void 0,t),t.currentTarget=null}function Fy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var u=r[o],c=u.instance,d=u.currentTarget;if(u=u.listener,c!==i&&s.isPropagationStopped())break e;vg(s,u,d),i=c}else for(o=0;o<r.length;o++){if(u=r[o],c=u.instance,d=u.currentTarget,u=u.listener,c!==i&&s.isPropagationStopped())break e;vg(s,u,d),i=c}}}if(Gu)throw t=Fh,Gu=!1,Fh=null,t}function De(t,e){var n=e[Qh];n===void 0&&(n=e[Qh]=new Set);var r=t+"__bubble";n.has(r)||(Uy(e,t,2,!1),n.add(r))}function Qd(t,e,n){var r=0;e&&(r|=4),Uy(n,t,r,e)}var uu="_reactListening"+Math.random().toString(36).slice(2);function Za(t){if(!t[uu]){t[uu]=!0,Kv.forEach(function(n){n!=="selectionchange"&&(eE.has(n)||Qd(n,!1,t),Qd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[uu]||(e[uu]=!0,Qd("selectionchange",!1,e))}}function Uy(t,e,n,r){switch(Ey(e)){case 1:var s=pb;break;case 4:s=mb;break;default:s=op}n=s.bind(null,e,n,t),s=void 0,!Vh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Yd(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===s||u.nodeType===8&&u.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;u!==null;){if(o=ei(u),o===null)return;if(c=o.tag,c===5||c===6){r=i=o;continue e}u=u.parentNode}}r=r.return}uy(function(){var d=i,g=np(n),v=[];e:{var y=Vy.get(t);if(y!==void 0){var S=lp,P=t;switch(t){case"keypress":if(Cu(n)===0)break e;case"keydown":case"keyup":S=Ab;break;case"focusin":P="focus",S=Bd;break;case"focusout":P="blur",S=Bd;break;case"beforeblur":case"afterblur":S=Bd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=ig;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=yb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=jb;break;case Dy:case Oy:case Ly:S=wb;break;case My:S=Ob;break;case"scroll":S=gb;break;case"wheel":S=Mb;break;case"copy":case"cut":case"paste":S=Eb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=ag}var j=(e&4)!==0,V=!j&&t==="scroll",w=j?y!==null?y+"Capture":null:y;j=[];for(var I=d,A;I!==null;){A=I;var F=A.stateNode;if(A.tag===5&&F!==null&&(A=F,w!==null&&(F=Ka(I,w),F!=null&&j.push(el(I,F,A)))),V)break;I=I.return}0<j.length&&(y=new S(y,P,null,n,g),v.push({event:y,listeners:j}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",y&&n!==Lh&&(P=n.relatedTarget||n.fromElement)&&(ei(P)||P[Ar]))break e;if((S||y)&&(y=g.window===g?g:(y=g.ownerDocument)?y.defaultView||y.parentWindow:window,S?(P=n.relatedTarget||n.toElement,S=d,P=P?ei(P):null,P!==null&&(V=wi(P),P!==V||P.tag!==5&&P.tag!==6)&&(P=null)):(S=null,P=d),S!==P)){if(j=ig,F="onMouseLeave",w="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(j=ag,F="onPointerLeave",w="onPointerEnter",I="pointer"),V=S==null?y:eo(S),A=P==null?y:eo(P),y=new j(F,I+"leave",S,n,g),y.target=V,y.relatedTarget=A,F=null,ei(g)===d&&(j=new j(w,I+"enter",P,n,g),j.target=A,j.relatedTarget=V,F=j),V=F,S&&P)t:{for(j=S,w=P,I=0,A=j;A;A=Bi(A))I++;for(A=0,F=w;F;F=Bi(F))A++;for(;0<I-A;)j=Bi(j),I--;for(;0<A-I;)w=Bi(w),A--;for(;I--;){if(j===w||w!==null&&j===w.alternate)break t;j=Bi(j),w=Bi(w)}j=null}else j=null;S!==null&&yg(v,y,S,j,!1),P!==null&&V!==null&&yg(v,V,P,j,!0)}}e:{if(y=d?eo(d):window,S=y.nodeName&&y.nodeName.toLowerCase(),S==="select"||S==="input"&&y.type==="file")var M=qb;else if(cg(y))if(Cy)M=Gb;else{M=Wb;var z=Hb}else(S=y.nodeName)&&S.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(M=Kb);if(M&&(M=M(t,d))){ky(v,M,n,g);break e}z&&z(t,y,d),t==="focusout"&&(z=y._wrapperState)&&z.controlled&&y.type==="number"&&Rh(y,"number",y.value)}switch(z=d?eo(d):window,t){case"focusin":(cg(z)||z.contentEditable==="true")&&(Ji=z,Bh=d,Oa=null);break;case"focusout":Oa=Bh=Ji=null;break;case"mousedown":qh=!0;break;case"contextmenu":case"mouseup":case"dragend":qh=!1,mg(v,n,g);break;case"selectionchange":if(Xb)break;case"keydown":case"keyup":mg(v,n,g)}var E;if(cp)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Xi?Ny(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Iy&&n.locale!=="ko"&&(Xi||_!=="onCompositionStart"?_==="onCompositionEnd"&&Xi&&(E=Ty()):(cs=g,ap="value"in cs?cs.value:cs.textContent,Xi=!0)),z=Zu(d,_),0<z.length&&(_=new og(_,t,null,n,g),v.push({event:_,listeners:z}),E?_.data=E:(E=Sy(n),E!==null&&(_.data=E)))),(E=Fb?Ub(t,n):zb(t,n))&&(d=Zu(d,"onBeforeInput"),0<d.length&&(g=new og("onBeforeInput","beforeinput",null,n,g),v.push({event:g,listeners:d}),g.data=E))}Fy(v,e)})}function el(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Zu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Ka(t,n),i!=null&&r.unshift(el(t,i,s)),i=Ka(t,e),i!=null&&r.push(el(t,i,s))),t=t.return}return r}function Bi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var u=n,c=u.alternate,d=u.stateNode;if(c!==null&&c===r)break;u.tag===5&&d!==null&&(u=d,s?(c=Ka(n,i),c!=null&&o.unshift(el(n,c,u))):s||(c=Ka(n,i),c!=null&&o.push(el(n,c,u)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var tE=/\r\n?/g,nE=/\u0000|\uFFFD/g;function xg(t){return(typeof t=="string"?t:""+t).replace(tE,`
`).replace(nE,"")}function cu(t,e,n){if(e=xg(e),xg(t)!==e&&n)throw Error(K(425))}function ec(){}var Hh=null,Wh=null;function Kh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gh=typeof setTimeout=="function"?setTimeout:void 0,rE=typeof clearTimeout=="function"?clearTimeout:void 0,_g=typeof Promise=="function"?Promise:void 0,sE=typeof queueMicrotask=="function"?queueMicrotask:typeof _g<"u"?function(t){return _g.resolve(null).then(t).catch(iE)}:Gh;function iE(t){setTimeout(function(){throw t})}function Xd(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Ya(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Ya(e)}function gs(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Uo=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Uo,tl="__reactProps$"+Uo,Ar="__reactContainer$"+Uo,Qh="__reactEvents$"+Uo,oE="__reactListeners$"+Uo,aE="__reactHandles$"+Uo;function ei(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ar]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wg(t);t!==null;){if(n=t[Yn])return n;t=wg(t)}return e}t=n,n=t.parentNode}return null}function _l(t){return t=t[Yn]||t[Ar],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function eo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(K(33))}function $c(t){return t[tl]||null}var Yh=[],to=-1;function Rs(t){return{current:t}}function Oe(t){0>to||(t.current=Yh[to],Yh[to]=null,to--)}function Pe(t,e){to++,Yh[to]=t.current,t.current=e}var Is={},Ot=Rs(Is),Yt=Rs(!1),li=Is;function Eo(t,e){var n=t.type.contextTypes;if(!n)return Is;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Xt(t){return t=t.childContextTypes,t!=null}function tc(){Oe(Yt),Oe(Ot)}function bg(t,e,n){if(Ot.current!==Is)throw Error(K(168));Pe(Ot,e),Pe(Yt,n)}function zy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(K(108,H1(t)||"Unknown",s));return qe({},n,r)}function nc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Is,li=Ot.current,Pe(Ot,t),Pe(Yt,Yt.current),!0}function Eg(t,e,n){var r=t.stateNode;if(!r)throw Error(K(169));n?(t=zy(t,e,li),r.__reactInternalMemoizedMergedChildContext=t,Oe(Yt),Oe(Ot),Pe(Ot,t)):Oe(Yt),Pe(Yt,n)}var xr=null,Bc=!1,Jd=!1;function $y(t){xr===null?xr=[t]:xr.push(t)}function lE(t){Bc=!0,$y(t)}function Ps(){if(!Jd&&xr!==null){Jd=!0;var t=0,e=Se;try{var n=xr;for(Se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xr=null,Bc=!1}catch(s){throw xr!==null&&(xr=xr.slice(t+1)),fy(rp,Ps),s}finally{Se=e,Jd=!1}}return null}var no=[],ro=0,rc=null,sc=0,mn=[],gn=0,ui=null,wr=1,br="";function Xs(t,e){no[ro++]=sc,no[ro++]=rc,rc=t,sc=e}function By(t,e,n){mn[gn++]=wr,mn[gn++]=br,mn[gn++]=ui,ui=t;var r=wr;t=br;var s=32-Ln(r)-1;r&=~(1<<s),n+=1;var i=32-Ln(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,wr=1<<32-Ln(e)+s|n<<s|r,br=i+t}else wr=1<<i|n<<s|r,br=t}function hp(t){t.return!==null&&(Xs(t,1),By(t,1,0))}function fp(t){for(;t===rc;)rc=no[--ro],no[ro]=null,sc=no[--ro],no[ro]=null;for(;t===ui;)ui=mn[--gn],mn[gn]=null,br=mn[--gn],mn[gn]=null,wr=mn[--gn],mn[gn]=null}var an=null,sn=null,Ve=!1,On=null;function qy(t,e){var n=vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Tg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,an=t,sn=gs(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,an=t,sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ui!==null?{id:wr,overflow:br}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,an=t,sn=null,!0):!1;default:return!1}}function Xh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Jh(t){if(Ve){var e=sn;if(e){var n=e;if(!Tg(t,e)){if(Xh(t))throw Error(K(418));e=gs(n.nextSibling);var r=an;e&&Tg(t,e)?qy(r,n):(t.flags=t.flags&-4097|2,Ve=!1,an=t)}}else{if(Xh(t))throw Error(K(418));t.flags=t.flags&-4097|2,Ve=!1,an=t}}}function Ig(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;an=t}function du(t){if(t!==an)return!1;if(!Ve)return Ig(t),Ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Kh(t.type,t.memoizedProps)),e&&(e=sn)){if(Xh(t))throw Hy(),Error(K(418));for(;e;)qy(t,e),e=gs(e.nextSibling)}if(Ig(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(K(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){sn=gs(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}sn=null}}else sn=an?gs(t.stateNode.nextSibling):null;return!0}function Hy(){for(var t=sn;t;)t=gs(t.nextSibling)}function To(){sn=an=null,Ve=!1}function pp(t){On===null?On=[t]:On.push(t)}var uE=Fr.ReactCurrentBatchConfig;function pa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(K(309));var r=n.stateNode}if(!r)throw Error(K(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var u=s.refs;o===null?delete u[i]:u[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(K(284));if(!n._owner)throw Error(K(290,t))}return t}function hu(t,e){throw t=Object.prototype.toString.call(e),Error(K(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ng(t){var e=t._init;return e(t._payload)}function Wy(t){function e(w,I){if(t){var A=w.deletions;A===null?(w.deletions=[I],w.flags|=16):A.push(I)}}function n(w,I){if(!t)return null;for(;I!==null;)e(w,I),I=I.sibling;return null}function r(w,I){for(w=new Map;I!==null;)I.key!==null?w.set(I.key,I):w.set(I.index,I),I=I.sibling;return w}function s(w,I){return w=_s(w,I),w.index=0,w.sibling=null,w}function i(w,I,A){return w.index=A,t?(A=w.alternate,A!==null?(A=A.index,A<I?(w.flags|=2,I):A):(w.flags|=2,I)):(w.flags|=1048576,I)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function u(w,I,A,F){return I===null||I.tag!==6?(I=ih(A,w.mode,F),I.return=w,I):(I=s(I,A),I.return=w,I)}function c(w,I,A,F){var M=A.type;return M===Yi?g(w,I,A.props.children,F,A.key):I!==null&&(I.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ns&&Ng(M)===I.type)?(F=s(I,A.props),F.ref=pa(w,I,A),F.return=w,F):(F=Lu(A.type,A.key,A.props,null,w.mode,F),F.ref=pa(w,I,A),F.return=w,F)}function d(w,I,A,F){return I===null||I.tag!==4||I.stateNode.containerInfo!==A.containerInfo||I.stateNode.implementation!==A.implementation?(I=oh(A,w.mode,F),I.return=w,I):(I=s(I,A.children||[]),I.return=w,I)}function g(w,I,A,F,M){return I===null||I.tag!==7?(I=ii(A,w.mode,F,M),I.return=w,I):(I=s(I,A),I.return=w,I)}function v(w,I,A){if(typeof I=="string"&&I!==""||typeof I=="number")return I=ih(""+I,w.mode,A),I.return=w,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case tu:return A=Lu(I.type,I.key,I.props,null,w.mode,A),A.ref=pa(w,null,I),A.return=w,A;case Qi:return I=oh(I,w.mode,A),I.return=w,I;case ns:var F=I._init;return v(w,F(I._payload),A)}if(wa(I)||ua(I))return I=ii(I,w.mode,A,null),I.return=w,I;hu(w,I)}return null}function y(w,I,A,F){var M=I!==null?I.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return M!==null?null:u(w,I,""+A,F);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case tu:return A.key===M?c(w,I,A,F):null;case Qi:return A.key===M?d(w,I,A,F):null;case ns:return M=A._init,y(w,I,M(A._payload),F)}if(wa(A)||ua(A))return M!==null?null:g(w,I,A,F,null);hu(w,A)}return null}function S(w,I,A,F,M){if(typeof F=="string"&&F!==""||typeof F=="number")return w=w.get(A)||null,u(I,w,""+F,M);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case tu:return w=w.get(F.key===null?A:F.key)||null,c(I,w,F,M);case Qi:return w=w.get(F.key===null?A:F.key)||null,d(I,w,F,M);case ns:var z=F._init;return S(w,I,A,z(F._payload),M)}if(wa(F)||ua(F))return w=w.get(A)||null,g(I,w,F,M,null);hu(I,F)}return null}function P(w,I,A,F){for(var M=null,z=null,E=I,_=I=0,T=null;E!==null&&_<A.length;_++){E.index>_?(T=E,E=null):T=E.sibling;var N=y(w,E,A[_],F);if(N===null){E===null&&(E=T);break}t&&E&&N.alternate===null&&e(w,E),I=i(N,I,_),z===null?M=N:z.sibling=N,z=N,E=T}if(_===A.length)return n(w,E),Ve&&Xs(w,_),M;if(E===null){for(;_<A.length;_++)E=v(w,A[_],F),E!==null&&(I=i(E,I,_),z===null?M=E:z.sibling=E,z=E);return Ve&&Xs(w,_),M}for(E=r(w,E);_<A.length;_++)T=S(E,w,_,A[_],F),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?_:T.key),I=i(T,I,_),z===null?M=T:z.sibling=T,z=T);return t&&E.forEach(function(R){return e(w,R)}),Ve&&Xs(w,_),M}function j(w,I,A,F){var M=ua(A);if(typeof M!="function")throw Error(K(150));if(A=M.call(A),A==null)throw Error(K(151));for(var z=M=null,E=I,_=I=0,T=null,N=A.next();E!==null&&!N.done;_++,N=A.next()){E.index>_?(T=E,E=null):T=E.sibling;var R=y(w,E,N.value,F);if(R===null){E===null&&(E=T);break}t&&E&&R.alternate===null&&e(w,E),I=i(R,I,_),z===null?M=R:z.sibling=R,z=R,E=T}if(N.done)return n(w,E),Ve&&Xs(w,_),M;if(E===null){for(;!N.done;_++,N=A.next())N=v(w,N.value,F),N!==null&&(I=i(N,I,_),z===null?M=N:z.sibling=N,z=N);return Ve&&Xs(w,_),M}for(E=r(w,E);!N.done;_++,N=A.next())N=S(E,w,_,N.value,F),N!==null&&(t&&N.alternate!==null&&E.delete(N.key===null?_:N.key),I=i(N,I,_),z===null?M=N:z.sibling=N,z=N);return t&&E.forEach(function(C){return e(w,C)}),Ve&&Xs(w,_),M}function V(w,I,A,F){if(typeof A=="object"&&A!==null&&A.type===Yi&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case tu:e:{for(var M=A.key,z=I;z!==null;){if(z.key===M){if(M=A.type,M===Yi){if(z.tag===7){n(w,z.sibling),I=s(z,A.props.children),I.return=w,w=I;break e}}else if(z.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ns&&Ng(M)===z.type){n(w,z.sibling),I=s(z,A.props),I.ref=pa(w,z,A),I.return=w,w=I;break e}n(w,z);break}else e(w,z);z=z.sibling}A.type===Yi?(I=ii(A.props.children,w.mode,F,A.key),I.return=w,w=I):(F=Lu(A.type,A.key,A.props,null,w.mode,F),F.ref=pa(w,I,A),F.return=w,w=F)}return o(w);case Qi:e:{for(z=A.key;I!==null;){if(I.key===z)if(I.tag===4&&I.stateNode.containerInfo===A.containerInfo&&I.stateNode.implementation===A.implementation){n(w,I.sibling),I=s(I,A.children||[]),I.return=w,w=I;break e}else{n(w,I);break}else e(w,I);I=I.sibling}I=oh(A,w.mode,F),I.return=w,w=I}return o(w);case ns:return z=A._init,V(w,I,z(A._payload),F)}if(wa(A))return P(w,I,A,F);if(ua(A))return j(w,I,A,F);hu(w,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,I!==null&&I.tag===6?(n(w,I.sibling),I=s(I,A),I.return=w,w=I):(n(w,I),I=ih(A,w.mode,F),I.return=w,w=I),o(w)):n(w,I)}return V}var Io=Wy(!0),Ky=Wy(!1),ic=Rs(null),oc=null,so=null,mp=null;function gp(){mp=so=oc=null}function vp(t){var e=ic.current;Oe(ic),t._currentValue=e}function Zh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function go(t,e){oc=t,mp=so=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function wn(t){var e=t._currentValue;if(mp!==t)if(t={context:t,memoizedValue:e,next:null},so===null){if(oc===null)throw Error(K(308));so=t,oc.dependencies={lanes:0,firstContext:t}}else so=so.next=t;return e}var ti=null;function yp(t){ti===null?ti=[t]:ti.push(t)}function Gy(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,yp(e)):(n.next=s.next,s.next=n),e.interleaved=n,Rr(t,r)}function Rr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rs=!1;function xp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vs(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,be&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Rr(t,n)}return s=r.interleaved,s===null?(e.next=e,yp(r)):(e.next=s.next,s.next=e),r.interleaved=e,Rr(t,n)}function Au(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sp(t,n)}}function Sg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ac(t,e,n,r){var s=t.updateQueue;rs=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,u=s.shared.pending;if(u!==null){s.shared.pending=null;var c=u,d=c.next;c.next=null,o===null?i=d:o.next=d,o=c;var g=t.alternate;g!==null&&(g=g.updateQueue,u=g.lastBaseUpdate,u!==o&&(u===null?g.firstBaseUpdate=d:u.next=d,g.lastBaseUpdate=c))}if(i!==null){var v=s.baseState;o=0,g=d=c=null,u=i;do{var y=u.lane,S=u.eventTime;if((r&y)===y){g!==null&&(g=g.next={eventTime:S,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var P=t,j=u;switch(y=e,S=n,j.tag){case 1:if(P=j.payload,typeof P=="function"){v=P.call(S,v,y);break e}v=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=j.payload,y=typeof P=="function"?P.call(S,v,y):P,y==null)break e;v=qe({},v,y);break e;case 2:rs=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,y=s.effects,y===null?s.effects=[u]:y.push(u))}else S={eventTime:S,lane:y,tag:u.tag,payload:u.payload,callback:u.callback,next:null},g===null?(d=g=S,c=v):g=g.next=S,o|=y;if(u=u.next,u===null){if(u=s.shared.pending,u===null)break;y=u,u=y.next,y.next=null,s.lastBaseUpdate=y,s.shared.pending=null}}while(!0);if(g===null&&(c=v),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=g,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);di|=o,t.lanes=o,t.memoizedState=v}}function kg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(K(191,s));s.call(r)}}}var wl={},Zn=Rs(wl),nl=Rs(wl),rl=Rs(wl);function ni(t){if(t===wl)throw Error(K(174));return t}function _p(t,e){switch(Pe(rl,e),Pe(nl,t),Pe(Zn,wl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=jh(e,t)}Oe(Zn),Pe(Zn,e)}function No(){Oe(Zn),Oe(nl),Oe(rl)}function Yy(t){ni(rl.current);var e=ni(Zn.current),n=jh(e,t.type);e!==n&&(Pe(nl,t),Pe(Zn,n))}function wp(t){nl.current===t&&(Oe(Zn),Oe(nl))}var $e=Rs(0);function lc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zd=[];function bp(){for(var t=0;t<Zd.length;t++)Zd[t]._workInProgressVersionPrimary=null;Zd.length=0}var Ru=Fr.ReactCurrentDispatcher,eh=Fr.ReactCurrentBatchConfig,ci=0,Be=null,it=null,ht=null,uc=!1,La=!1,sl=0,cE=0;function Ct(){throw Error(K(321))}function Ep(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function Tp(t,e,n,r,s,i){if(ci=i,Be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ru.current=t===null||t.memoizedState===null?pE:mE,t=n(r,s),La){i=0;do{if(La=!1,sl=0,25<=i)throw Error(K(301));i+=1,ht=it=null,e.updateQueue=null,Ru.current=gE,t=n(r,s)}while(La)}if(Ru.current=cc,e=it!==null&&it.next!==null,ci=0,ht=it=Be=null,uc=!1,e)throw Error(K(300));return t}function Ip(){var t=sl!==0;return sl=0,t}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?Be.memoizedState=ht=t:ht=ht.next=t,ht}function bn(){if(it===null){var t=Be.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var e=ht===null?Be.memoizedState:ht.next;if(e!==null)ht=e,it=t;else{if(t===null)throw Error(K(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},ht===null?Be.memoizedState=ht=t:ht=ht.next=t}return ht}function il(t,e){return typeof e=="function"?e(t):e}function th(t){var e=bn(),n=e.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=t;var r=it,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var u=o=null,c=null,d=i;do{var g=d.lane;if((ci&g)===g)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var v={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(u=c=v,o=r):c=c.next=v,Be.lanes|=g,di|=g}d=d.next}while(d!==null&&d!==i);c===null?o=r:c.next=u,Vn(r,e.memoizedState)||(Qt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Be.lanes|=i,di|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function nh(t){var e=bn(),n=e.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Vn(i,e.memoizedState)||(Qt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Xy(){}function Jy(t,e){var n=Be,r=bn(),s=e(),i=!Vn(r.memoizedState,s);if(i&&(r.memoizedState=s,Qt=!0),r=r.queue,Np(tx.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||ht!==null&&ht.memoizedState.tag&1){if(n.flags|=2048,ol(9,ex.bind(null,n,r,s,e),void 0,null),ft===null)throw Error(K(349));ci&30||Zy(n,e,s)}return s}function Zy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ex(t,e,n,r){e.value=n,e.getSnapshot=r,nx(e)&&rx(t)}function tx(t,e,n){return n(function(){nx(e)&&rx(t)})}function nx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function rx(t){var e=Rr(t,1);e!==null&&Mn(e,t,1,-1)}function Cg(t){var e=Qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:il,lastRenderedState:t},e.queue=t,t=t.dispatch=fE.bind(null,Be,t),[e.memoizedState,t]}function ol(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function sx(){return bn().memoizedState}function Pu(t,e,n,r){var s=Qn();Be.flags|=t,s.memoizedState=ol(1|e,n,void 0,r===void 0?null:r)}function qc(t,e,n,r){var s=bn();r=r===void 0?null:r;var i=void 0;if(it!==null){var o=it.memoizedState;if(i=o.destroy,r!==null&&Ep(r,o.deps)){s.memoizedState=ol(e,n,i,r);return}}Be.flags|=t,s.memoizedState=ol(1|e,n,i,r)}function Ag(t,e){return Pu(8390656,8,t,e)}function Np(t,e){return qc(2048,8,t,e)}function ix(t,e){return qc(4,2,t,e)}function ox(t,e){return qc(4,4,t,e)}function ax(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function lx(t,e,n){return n=n!=null?n.concat([t]):null,qc(4,4,ax.bind(null,e,t),n)}function Sp(){}function ux(t,e){var n=bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ep(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function cx(t,e){var n=bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ep(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function dx(t,e,n){return ci&21?(Vn(n,e)||(n=gy(),Be.lanes|=n,di|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function dE(t,e){var n=Se;Se=n!==0&&4>n?n:4,t(!0);var r=eh.transition;eh.transition={};try{t(!1),e()}finally{Se=n,eh.transition=r}}function hx(){return bn().memoizedState}function hE(t,e,n){var r=xs(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fx(t))px(e,n);else if(n=Gy(t,e,n,r),n!==null){var s=Ut();Mn(n,t,r,s),mx(n,e,r)}}function fE(t,e,n){var r=xs(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fx(t))px(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,u=i(o,n);if(s.hasEagerState=!0,s.eagerState=u,Vn(u,o)){var c=e.interleaved;c===null?(s.next=s,yp(e)):(s.next=c.next,c.next=s),e.interleaved=s;return}}catch{}finally{}n=Gy(t,e,s,r),n!==null&&(s=Ut(),Mn(n,t,r,s),mx(n,e,r))}}function fx(t){var e=t.alternate;return t===Be||e!==null&&e===Be}function px(t,e){La=uc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mx(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sp(t,n)}}var cc={readContext:wn,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useInsertionEffect:Ct,useLayoutEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useMutableSource:Ct,useSyncExternalStore:Ct,useId:Ct,unstable_isNewReconciler:!1},pE={readContext:wn,useCallback:function(t,e){return Qn().memoizedState=[t,e===void 0?null:e],t},useContext:wn,useEffect:Ag,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pu(4194308,4,ax.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pu(4,2,t,e)},useMemo:function(t,e){var n=Qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=hE.bind(null,Be,t),[r.memoizedState,t]},useRef:function(t){var e=Qn();return t={current:t},e.memoizedState=t},useState:Cg,useDebugValue:Sp,useDeferredValue:function(t){return Qn().memoizedState=t},useTransition:function(){var t=Cg(!1),e=t[0];return t=dE.bind(null,t[1]),Qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Be,s=Qn();if(Ve){if(n===void 0)throw Error(K(407));n=n()}else{if(n=e(),ft===null)throw Error(K(349));ci&30||Zy(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Ag(tx.bind(null,r,i,t),[t]),r.flags|=2048,ol(9,ex.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Qn(),e=ft.identifierPrefix;if(Ve){var n=br,r=wr;n=(r&~(1<<32-Ln(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=sl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=cE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},mE={readContext:wn,useCallback:ux,useContext:wn,useEffect:Np,useImperativeHandle:lx,useInsertionEffect:ix,useLayoutEffect:ox,useMemo:cx,useReducer:th,useRef:sx,useState:function(){return th(il)},useDebugValue:Sp,useDeferredValue:function(t){var e=bn();return dx(e,it.memoizedState,t)},useTransition:function(){var t=th(il)[0],e=bn().memoizedState;return[t,e]},useMutableSource:Xy,useSyncExternalStore:Jy,useId:hx,unstable_isNewReconciler:!1},gE={readContext:wn,useCallback:ux,useContext:wn,useEffect:Np,useImperativeHandle:lx,useInsertionEffect:ix,useLayoutEffect:ox,useMemo:cx,useReducer:nh,useRef:sx,useState:function(){return nh(il)},useDebugValue:Sp,useDeferredValue:function(t){var e=bn();return it===null?e.memoizedState=t:dx(e,it.memoizedState,t)},useTransition:function(){var t=nh(il)[0],e=bn().memoizedState;return[t,e]},useMutableSource:Xy,useSyncExternalStore:Jy,useId:hx,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=qe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ef(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:qe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hc={isMounted:function(t){return(t=t._reactInternals)?wi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ut(),s=xs(t),i=Nr(r,s);i.payload=e,n!=null&&(i.callback=n),e=vs(t,i,s),e!==null&&(Mn(e,t,s,r),Au(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ut(),s=xs(t),i=Nr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=vs(t,i,s),e!==null&&(Mn(e,t,s,r),Au(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ut(),r=xs(t),s=Nr(n,r);s.tag=2,e!=null&&(s.callback=e),e=vs(t,s,r),e!==null&&(Mn(e,t,r,n),Au(e,t,r))}};function Rg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Ja(n,r)||!Ja(s,i):!0}function gx(t,e,n){var r=!1,s=Is,i=e.contextType;return typeof i=="object"&&i!==null?i=wn(i):(s=Xt(e)?li:Ot.current,r=e.contextTypes,i=(r=r!=null)?Eo(t,s):Is),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Pg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Hc.enqueueReplaceState(e,e.state,null)}function tf(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},xp(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=wn(i):(i=Xt(e)?li:Ot.current,s.context=Eo(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(ef(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Hc.enqueueReplaceState(s,s.state,null),ac(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function So(t,e){try{var n="",r=e;do n+=q1(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function rh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function nf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vE=typeof WeakMap=="function"?WeakMap:Map;function vx(t,e,n){n=Nr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){hc||(hc=!0,ff=r),nf(t,e)},n}function yx(t,e,n){n=Nr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){nf(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){nf(t,e),typeof r!="function"&&(ys===null?ys=new Set([this]):ys.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new vE;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=RE.bind(null,t,e,n),e.then(t,t))}function Dg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Og(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nr(-1,1),e.tag=2,vs(n,e,1))),n.lanes|=1),t)}var yE=Fr.ReactCurrentOwner,Qt=!1;function Ft(t,e,n,r){e.child=t===null?Ky(e,null,n,r):Io(e,t.child,n,r)}function Lg(t,e,n,r,s){n=n.render;var i=e.ref;return go(e,s),r=Tp(t,e,n,r,i,s),n=Ip(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Pr(t,e,s)):(Ve&&n&&hp(e),e.flags|=1,Ft(t,e,r,s),e.child)}function Mg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Op(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,xx(t,e,i,r,s)):(t=Lu(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ja,n(o,r)&&t.ref===e.ref)return Pr(t,e,s)}return e.flags|=1,t=_s(i,r),t.ref=e.ref,t.return=e,e.child=t}function xx(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Ja(i,r)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,Pr(t,e,s)}return rf(t,e,n,r,s)}function _x(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(oo,rn),rn|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Pe(oo,rn),rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Pe(oo,rn),rn|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Pe(oo,rn),rn|=r;return Ft(t,e,s,n),e.child}function wx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function rf(t,e,n,r,s){var i=Xt(n)?li:Ot.current;return i=Eo(e,i),go(e,s),n=Tp(t,e,n,r,i,s),r=Ip(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Pr(t,e,s)):(Ve&&r&&hp(e),e.flags|=1,Ft(t,e,n,s),e.child)}function Vg(t,e,n,r,s){if(Xt(n)){var i=!0;nc(e)}else i=!1;if(go(e,s),e.stateNode===null)ju(t,e),gx(e,n,r),tf(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,u=e.memoizedProps;o.props=u;var c=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=wn(d):(d=Xt(n)?li:Ot.current,d=Eo(e,d));var g=n.getDerivedStateFromProps,v=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||c!==d)&&Pg(e,o,r,d),rs=!1;var y=e.memoizedState;o.state=y,ac(e,r,o,s),c=e.memoizedState,u!==r||y!==c||Yt.current||rs?(typeof g=="function"&&(ef(e,n,g,r),c=e.memoizedState),(u=rs||Rg(e,n,u,r,y,c,d))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=d,r=u):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Qy(t,e),u=e.memoizedProps,d=e.type===e.elementType?u:jn(e.type,u),o.props=d,v=e.pendingProps,y=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=wn(c):(c=Xt(n)?li:Ot.current,c=Eo(e,c));var S=n.getDerivedStateFromProps;(g=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==v||y!==c)&&Pg(e,o,r,c),rs=!1,y=e.memoizedState,o.state=y,ac(e,r,o,s);var P=e.memoizedState;u!==v||y!==P||Yt.current||rs?(typeof S=="function"&&(ef(e,n,S,r),P=e.memoizedState),(d=rs||Rg(e,n,d,r,y,P,c)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=c,r=d):(typeof o.componentDidUpdate!="function"||u===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return sf(t,e,n,r,i,s)}function sf(t,e,n,r,s,i){wx(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Eg(e,n,!1),Pr(t,e,i);r=e.stateNode,yE.current=e;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Io(e,t.child,null,i),e.child=Io(e,null,u,i)):Ft(t,e,u,i),e.memoizedState=r.state,s&&Eg(e,n,!0),e.child}function bx(t){var e=t.stateNode;e.pendingContext?bg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bg(t,e.context,!1),_p(t,e.containerInfo)}function Fg(t,e,n,r,s){return To(),pp(s),e.flags|=256,Ft(t,e,n,r),e.child}var of={dehydrated:null,treeContext:null,retryLane:0};function af(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ex(t,e,n){var r=e.pendingProps,s=$e.current,i=!1,o=(e.flags&128)!==0,u;if((u=o)||(u=t!==null&&t.memoizedState===null?!1:(s&2)!==0),u?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Pe($e,s&1),t===null)return Jh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Gc(o,r,0,null),t=ii(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=af(n),e.memoizedState=of,t):kp(e,o));if(s=t.memoizedState,s!==null&&(u=s.dehydrated,u!==null))return xE(t,e,o,r,u,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,u=s.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=_s(s,c),r.subtreeFlags=s.subtreeFlags&14680064),u!==null?i=_s(u,i):(i=ii(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?af(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=of,r}return i=t.child,t=i.sibling,r=_s(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function kp(t,e){return e=Gc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fu(t,e,n,r){return r!==null&&pp(r),Io(e,t.child,null,n),t=kp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xE(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=rh(Error(K(422))),fu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Gc({mode:"visible",children:r.children},s,0,null),i=ii(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Io(e,t.child,null,o),e.child.memoizedState=af(o),e.memoizedState=of,i);if(!(e.mode&1))return fu(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(K(419)),r=rh(i,r,void 0),fu(t,e,o,r)}if(u=(o&t.childLanes)!==0,Qt||u){if(r=ft,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Rr(t,s),Mn(r,t,s,-1))}return Dp(),r=rh(Error(K(421))),fu(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=PE.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,sn=gs(s.nextSibling),an=e,Ve=!0,On=null,t!==null&&(mn[gn++]=wr,mn[gn++]=br,mn[gn++]=ui,wr=t.id,br=t.overflow,ui=e),e=kp(e,r.children),e.flags|=4096,e)}function Ug(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Zh(t.return,e,n)}function sh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Tx(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Ft(t,e,r.children,n),r=$e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ug(t,n,e);else if(t.tag===19)Ug(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Pe($e,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&lc(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),sh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&lc(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}sh(e,!0,n,null,i);break;case"together":sh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ju(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),di|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(K(153));if(e.child!==null){for(t=e.child,n=_s(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_s(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _E(t,e,n){switch(e.tag){case 3:bx(e),To();break;case 5:Yy(e);break;case 1:Xt(e.type)&&nc(e);break;case 4:_p(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Pe(ic,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Pe($e,$e.current&1),e.flags|=128,null):n&e.child.childLanes?Ex(t,e,n):(Pe($e,$e.current&1),t=Pr(t,e,n),t!==null?t.sibling:null);Pe($e,$e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Tx(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Pe($e,$e.current),r)break;return null;case 22:case 23:return e.lanes=0,_x(t,e,n)}return Pr(t,e,n)}var Ix,lf,Nx,Sx;Ix=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lf=function(){};Nx=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,ni(Zn.current);var i=null;switch(n){case"input":s=Ch(t,s),r=Ch(t,r),i=[];break;case"select":s=qe({},s,{value:void 0}),r=qe({},r,{value:void 0}),i=[];break;case"textarea":s=Ph(t,s),r=Ph(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ec)}Dh(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var u=s[d];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ha.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var c=r[d];if(u=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&c!==u&&(c!=null||u!=null))if(d==="style")if(u){for(o in u)!u.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&u[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ha.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&De("scroll",t),i||u===c||(i=[])):(i=i||[]).push(d,c))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};Sx=function(t,e,n,r){n!==r&&(e.flags|=4)};function ma(t,e){if(!Ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function At(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function wE(t,e,n){var r=e.pendingProps;switch(fp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(e),null;case 1:return Xt(e.type)&&tc(),At(e),null;case 3:return r=e.stateNode,No(),Oe(Yt),Oe(Ot),bp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(du(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(gf(On),On=null))),lf(t,e),At(e),null;case 5:wp(e);var s=ni(rl.current);if(n=e.type,t!==null&&e.stateNode!=null)Nx(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(K(166));return At(e),null}if(t=ni(Zn.current),du(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Yn]=e,r[tl]=i,t=(e.mode&1)!==0,n){case"dialog":De("cancel",r),De("close",r);break;case"iframe":case"object":case"embed":De("load",r);break;case"video":case"audio":for(s=0;s<Ea.length;s++)De(Ea[s],r);break;case"source":De("error",r);break;case"img":case"image":case"link":De("error",r),De("load",r);break;case"details":De("toggle",r);break;case"input":Qm(r,i),De("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},De("invalid",r);break;case"textarea":Xm(r,i),De("invalid",r)}Dh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&cu(r.textContent,u,t),s=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&cu(r.textContent,u,t),s=["children",""+u]):Ha.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&De("scroll",r)}switch(n){case"input":nu(r),Ym(r,i,!0);break;case"textarea":nu(r),Jm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ec)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ty(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Yn]=e,t[tl]=r,Ix(t,e,!1,!1),e.stateNode=t;e:{switch(o=Oh(n,r),n){case"dialog":De("cancel",t),De("close",t),s=r;break;case"iframe":case"object":case"embed":De("load",t),s=r;break;case"video":case"audio":for(s=0;s<Ea.length;s++)De(Ea[s],t);s=r;break;case"source":De("error",t),s=r;break;case"img":case"image":case"link":De("error",t),De("load",t),s=r;break;case"details":De("toggle",t),s=r;break;case"input":Qm(t,r),s=Ch(t,r),De("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=qe({},r,{value:void 0}),De("invalid",t);break;case"textarea":Xm(t,r),s=Ph(t,r),De("invalid",t);break;default:s=r}Dh(n,s),u=s;for(i in u)if(u.hasOwnProperty(i)){var c=u[i];i==="style"?sy(t,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ny(t,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Wa(t,c):typeof c=="number"&&Wa(t,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ha.hasOwnProperty(i)?c!=null&&i==="onScroll"&&De("scroll",t):c!=null&&Jf(t,i,c,o))}switch(n){case"input":nu(t),Ym(t,r,!1);break;case"textarea":nu(t),Jm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ts(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?ho(t,!!r.multiple,i,!1):r.defaultValue!=null&&ho(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=ec)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return At(e),null;case 6:if(t&&e.stateNode!=null)Sx(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(K(166));if(n=ni(rl.current),ni(Zn.current),du(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yn]=e,(i=r.nodeValue!==n)&&(t=an,t!==null))switch(t.tag){case 3:cu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&cu(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yn]=e,e.stateNode=r}return At(e),null;case 13:if(Oe($e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ve&&sn!==null&&e.mode&1&&!(e.flags&128))Hy(),To(),e.flags|=98560,i=!1;else if(i=du(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(K(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(K(317));i[Yn]=e}else To(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;At(e),i=!1}else On!==null&&(gf(On),On=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||$e.current&1?at===0&&(at=3):Dp())),e.updateQueue!==null&&(e.flags|=4),At(e),null);case 4:return No(),lf(t,e),t===null&&Za(e.stateNode.containerInfo),At(e),null;case 10:return vp(e.type._context),At(e),null;case 17:return Xt(e.type)&&tc(),At(e),null;case 19:if(Oe($e),i=e.memoizedState,i===null)return At(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)ma(i,!1);else{if(at!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=lc(t),o!==null){for(e.flags|=128,ma(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Pe($e,$e.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ze()>ko&&(e.flags|=128,r=!0,ma(i,!1),e.lanes=4194304)}else{if(!r)if(t=lc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ma(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ve)return At(e),null}else 2*Ze()-i.renderingStartTime>ko&&n!==1073741824&&(e.flags|=128,r=!0,ma(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ze(),e.sibling=null,n=$e.current,Pe($e,r?n&1|2:n&1),e):(At(e),null);case 22:case 23:return jp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?rn&1073741824&&(At(e),e.subtreeFlags&6&&(e.flags|=8192)):At(e),null;case 24:return null;case 25:return null}throw Error(K(156,e.tag))}function bE(t,e){switch(fp(e),e.tag){case 1:return Xt(e.type)&&tc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return No(),Oe(Yt),Oe(Ot),bp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wp(e),null;case 13:if(Oe($e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(K(340));To()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Oe($e),null;case 4:return No(),null;case 10:return vp(e.type._context),null;case 22:case 23:return jp(),null;case 24:return null;default:return null}}var pu=!1,jt=!1,EE=typeof WeakSet=="function"?WeakSet:Set,J=null;function io(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ge(t,e,r)}else n.current=null}function uf(t,e,n){try{n()}catch(r){Ge(t,e,r)}}var zg=!1;function TE(t,e){if(Hh=Xu,t=Py(),dp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,c=-1,d=0,g=0,v=t,y=null;t:for(;;){for(var S;v!==n||s!==0&&v.nodeType!==3||(u=o+s),v!==i||r!==0&&v.nodeType!==3||(c=o+r),v.nodeType===3&&(o+=v.nodeValue.length),(S=v.firstChild)!==null;)y=v,v=S;for(;;){if(v===t)break t;if(y===n&&++d===s&&(u=o),y===i&&++g===r&&(c=o),(S=v.nextSibling)!==null)break;v=y,y=v.parentNode}v=S}n=u===-1||c===-1?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wh={focusedElem:t,selectionRange:n},Xu=!1,J=e;J!==null;)if(e=J,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,J=t;else for(;J!==null;){e=J;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var j=P.memoizedProps,V=P.memoizedState,w=e.stateNode,I=w.getSnapshotBeforeUpdate(e.elementType===e.type?j:jn(e.type,j),V);w.__reactInternalSnapshotBeforeUpdate=I}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(K(163))}}catch(F){Ge(e,e.return,F)}if(t=e.sibling,t!==null){t.return=e.return,J=t;break}J=e.return}return P=zg,zg=!1,P}function Ma(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&uf(e,n,i)}s=s.next}while(s!==r)}}function Wc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function cf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function kx(t){var e=t.alternate;e!==null&&(t.alternate=null,kx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[tl],delete e[Qh],delete e[oE],delete e[aE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Cx(t){return t.tag===5||t.tag===3||t.tag===4}function $g(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Cx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function df(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ec));else if(r!==4&&(t=t.child,t!==null))for(df(t,e,n),t=t.sibling;t!==null;)df(t,e,n),t=t.sibling}function hf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(hf(t,e,n),t=t.sibling;t!==null;)hf(t,e,n),t=t.sibling}var gt=null,Dn=!1;function Jr(t,e,n){for(n=n.child;n!==null;)Ax(t,e,n),n=n.sibling}function Ax(t,e,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(Vc,n)}catch{}switch(n.tag){case 5:jt||io(n,e);case 6:var r=gt,s=Dn;gt=null,Jr(t,e,n),gt=r,Dn=s,gt!==null&&(Dn?(t=gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):gt.removeChild(n.stateNode));break;case 18:gt!==null&&(Dn?(t=gt,n=n.stateNode,t.nodeType===8?Xd(t.parentNode,n):t.nodeType===1&&Xd(t,n),Ya(t)):Xd(gt,n.stateNode));break;case 4:r=gt,s=Dn,gt=n.stateNode.containerInfo,Dn=!0,Jr(t,e,n),gt=r,Dn=s;break;case 0:case 11:case 14:case 15:if(!jt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&uf(n,e,o),s=s.next}while(s!==r)}Jr(t,e,n);break;case 1:if(!jt&&(io(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Ge(n,e,u)}Jr(t,e,n);break;case 21:Jr(t,e,n);break;case 22:n.mode&1?(jt=(r=jt)||n.memoizedState!==null,Jr(t,e,n),jt=r):Jr(t,e,n);break;default:Jr(t,e,n)}}function Bg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new EE),e.forEach(function(r){var s=jE.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,u=o;e:for(;u!==null;){switch(u.tag){case 5:gt=u.stateNode,Dn=!1;break e;case 3:gt=u.stateNode.containerInfo,Dn=!0;break e;case 4:gt=u.stateNode.containerInfo,Dn=!0;break e}u=u.return}if(gt===null)throw Error(K(160));Ax(i,o,s),gt=null,Dn=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){Ge(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Rx(e,t),e=e.sibling}function Rx(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),Wn(t),r&4){try{Ma(3,t,t.return),Wc(3,t)}catch(j){Ge(t,t.return,j)}try{Ma(5,t,t.return)}catch(j){Ge(t,t.return,j)}}break;case 1:Pn(e,t),Wn(t),r&512&&n!==null&&io(n,n.return);break;case 5:if(Pn(e,t),Wn(t),r&512&&n!==null&&io(n,n.return),t.flags&32){var s=t.stateNode;try{Wa(s,"")}catch(j){Ge(t,t.return,j)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,u=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&Zv(s,i),Oh(u,o);var d=Oh(u,i);for(o=0;o<c.length;o+=2){var g=c[o],v=c[o+1];g==="style"?sy(s,v):g==="dangerouslySetInnerHTML"?ny(s,v):g==="children"?Wa(s,v):Jf(s,g,v,d)}switch(u){case"input":Ah(s,i);break;case"textarea":ey(s,i);break;case"select":var y=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?ho(s,!!i.multiple,S,!1):y!==!!i.multiple&&(i.defaultValue!=null?ho(s,!!i.multiple,i.defaultValue,!0):ho(s,!!i.multiple,i.multiple?[]:"",!1))}s[tl]=i}catch(j){Ge(t,t.return,j)}}break;case 6:if(Pn(e,t),Wn(t),r&4){if(t.stateNode===null)throw Error(K(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(j){Ge(t,t.return,j)}}break;case 3:if(Pn(e,t),Wn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ya(e.containerInfo)}catch(j){Ge(t,t.return,j)}break;case 4:Pn(e,t),Wn(t);break;case 13:Pn(e,t),Wn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Rp=Ze())),r&4&&Bg(t);break;case 22:if(g=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(d=jt)||g,Pn(e,t),jt=d):Pn(e,t),Wn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!g&&t.mode&1)for(J=t,g=t.child;g!==null;){for(v=J=g;J!==null;){switch(y=J,S=y.child,y.tag){case 0:case 11:case 14:case 15:Ma(4,y,y.return);break;case 1:io(y,y.return);var P=y.stateNode;if(typeof P.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(j){Ge(r,n,j)}}break;case 5:io(y,y.return);break;case 22:if(y.memoizedState!==null){Hg(v);continue}}S!==null?(S.return=y,J=S):Hg(v)}g=g.sibling}e:for(g=null,v=t;;){if(v.tag===5){if(g===null){g=v;try{s=v.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=v.stateNode,c=v.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=ry("display",o))}catch(j){Ge(t,t.return,j)}}}else if(v.tag===6){if(g===null)try{v.stateNode.nodeValue=d?"":v.memoizedProps}catch(j){Ge(t,t.return,j)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===t)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===t)break e;for(;v.sibling===null;){if(v.return===null||v.return===t)break e;g===v&&(g=null),v=v.return}g===v&&(g=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Pn(e,t),Wn(t),r&4&&Bg(t);break;case 21:break;default:Pn(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Cx(n)){var r=n;break e}n=n.return}throw Error(K(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Wa(s,""),r.flags&=-33);var i=$g(t);hf(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,u=$g(t);df(t,u,o);break;default:throw Error(K(161))}}catch(c){Ge(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function IE(t,e,n){J=t,Px(t)}function Px(t,e,n){for(var r=(t.mode&1)!==0;J!==null;){var s=J,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||pu;if(!o){var u=s.alternate,c=u!==null&&u.memoizedState!==null||jt;u=pu;var d=jt;if(pu=o,(jt=c)&&!d)for(J=s;J!==null;)o=J,c=o.child,o.tag===22&&o.memoizedState!==null?Wg(s):c!==null?(c.return=o,J=c):Wg(s);for(;i!==null;)J=i,Px(i),i=i.sibling;J=s,pu=u,jt=d}qg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,J=i):qg(t)}}function qg(t){for(;J!==null;){var e=J;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||Wc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!jt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&kg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kg(e,o,n)}break;case 5:var u=e.stateNode;if(n===null&&e.flags&4){n=u;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var v=g.dehydrated;v!==null&&Ya(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(K(163))}jt||e.flags&512&&cf(e)}catch(y){Ge(e,e.return,y)}}if(e===t){J=null;break}if(n=e.sibling,n!==null){n.return=e.return,J=n;break}J=e.return}}function Hg(t){for(;J!==null;){var e=J;if(e===t){J=null;break}var n=e.sibling;if(n!==null){n.return=e.return,J=n;break}J=e.return}}function Wg(t){for(;J!==null;){var e=J;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wc(4,e)}catch(c){Ge(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(c){Ge(e,s,c)}}var i=e.return;try{cf(e)}catch(c){Ge(e,i,c)}break;case 5:var o=e.return;try{cf(e)}catch(c){Ge(e,o,c)}}}catch(c){Ge(e,e.return,c)}if(e===t){J=null;break}var u=e.sibling;if(u!==null){u.return=e.return,J=u;break}J=e.return}}var NE=Math.ceil,dc=Fr.ReactCurrentDispatcher,Cp=Fr.ReactCurrentOwner,xn=Fr.ReactCurrentBatchConfig,be=0,ft=null,rt=null,xt=0,rn=0,oo=Rs(0),at=0,al=null,di=0,Kc=0,Ap=0,Va=null,Kt=null,Rp=0,ko=1/0,yr=null,hc=!1,ff=null,ys=null,mu=!1,ds=null,fc=0,Fa=0,pf=null,Du=-1,Ou=0;function Ut(){return be&6?Ze():Du!==-1?Du:Du=Ze()}function xs(t){return t.mode&1?be&2&&xt!==0?xt&-xt:uE.transition!==null?(Ou===0&&(Ou=gy()),Ou):(t=Se,t!==0||(t=window.event,t=t===void 0?16:Ey(t.type)),t):1}function Mn(t,e,n,r){if(50<Fa)throw Fa=0,pf=null,Error(K(185));yl(t,n,r),(!(be&2)||t!==ft)&&(t===ft&&(!(be&2)&&(Kc|=n),at===4&&is(t,xt)),Jt(t,r),n===1&&be===0&&!(e.mode&1)&&(ko=Ze()+500,Bc&&Ps()))}function Jt(t,e){var n=t.callbackNode;ub(t,e);var r=Yu(t,t===ft?xt:0);if(r===0)n!==null&&tg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&tg(n),e===1)t.tag===0?lE(Kg.bind(null,t)):$y(Kg.bind(null,t)),sE(function(){!(be&6)&&Ps()}),n=null;else{switch(vy(r)){case 1:n=rp;break;case 4:n=py;break;case 16:n=Qu;break;case 536870912:n=my;break;default:n=Qu}n=Ux(n,jx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jx(t,e){if(Du=-1,Ou=0,be&6)throw Error(K(327));var n=t.callbackNode;if(vo()&&t.callbackNode!==n)return null;var r=Yu(t,t===ft?xt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=pc(t,r);else{e=r;var s=be;be|=2;var i=Ox();(ft!==t||xt!==e)&&(yr=null,ko=Ze()+500,si(t,e));do try{CE();break}catch(u){Dx(t,u)}while(!0);gp(),dc.current=i,be=s,rt!==null?e=0:(ft=null,xt=0,e=at)}if(e!==0){if(e===2&&(s=Uh(t),s!==0&&(r=s,e=mf(t,s))),e===1)throw n=al,si(t,0),is(t,r),Jt(t,Ze()),n;if(e===6)is(t,r);else{if(s=t.current.alternate,!(r&30)&&!SE(s)&&(e=pc(t,r),e===2&&(i=Uh(t),i!==0&&(r=i,e=mf(t,i))),e===1))throw n=al,si(t,0),is(t,r),Jt(t,Ze()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(K(345));case 2:Js(t,Kt,yr);break;case 3:if(is(t,r),(r&130023424)===r&&(e=Rp+500-Ze(),10<e)){if(Yu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Ut(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Gh(Js.bind(null,t,Kt,yr),e);break}Js(t,Kt,yr);break;case 4:if(is(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Ln(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*NE(r/1960))-r,10<r){t.timeoutHandle=Gh(Js.bind(null,t,Kt,yr),r);break}Js(t,Kt,yr);break;case 5:Js(t,Kt,yr);break;default:throw Error(K(329))}}}return Jt(t,Ze()),t.callbackNode===n?jx.bind(null,t):null}function mf(t,e){var n=Va;return t.current.memoizedState.isDehydrated&&(si(t,e).flags|=256),t=pc(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&gf(e)),t}function gf(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function SE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Vn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function is(t,e){for(e&=~Ap,e&=~Kc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ln(e),r=1<<n;t[n]=-1,e&=~r}}function Kg(t){if(be&6)throw Error(K(327));vo();var e=Yu(t,0);if(!(e&1))return Jt(t,Ze()),null;var n=pc(t,e);if(t.tag!==0&&n===2){var r=Uh(t);r!==0&&(e=r,n=mf(t,r))}if(n===1)throw n=al,si(t,0),is(t,e),Jt(t,Ze()),n;if(n===6)throw Error(K(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Js(t,Kt,yr),Jt(t,Ze()),null}function Pp(t,e){var n=be;be|=1;try{return t(e)}finally{be=n,be===0&&(ko=Ze()+500,Bc&&Ps())}}function hi(t){ds!==null&&ds.tag===0&&!(be&6)&&vo();var e=be;be|=1;var n=xn.transition,r=Se;try{if(xn.transition=null,Se=1,t)return t()}finally{Se=r,xn.transition=n,be=e,!(be&6)&&Ps()}}function jp(){rn=oo.current,Oe(oo)}function si(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,rE(n)),rt!==null)for(n=rt.return;n!==null;){var r=n;switch(fp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&tc();break;case 3:No(),Oe(Yt),Oe(Ot),bp();break;case 5:wp(r);break;case 4:No();break;case 13:Oe($e);break;case 19:Oe($e);break;case 10:vp(r.type._context);break;case 22:case 23:jp()}n=n.return}if(ft=t,rt=t=_s(t.current,null),xt=rn=e,at=0,al=null,Ap=Kc=di=0,Kt=Va=null,ti!==null){for(e=0;e<ti.length;e++)if(n=ti[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}ti=null}return t}function Dx(t,e){do{var n=rt;try{if(gp(),Ru.current=cc,uc){for(var r=Be.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}uc=!1}if(ci=0,ht=it=Be=null,La=!1,sl=0,Cp.current=null,n===null||n.return===null){at=1,al=e,rt=null;break}e:{var i=t,o=n.return,u=n,c=e;if(e=xt,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,g=u,v=g.tag;if(!(g.mode&1)&&(v===0||v===11||v===15)){var y=g.alternate;y?(g.updateQueue=y.updateQueue,g.memoizedState=y.memoizedState,g.lanes=y.lanes):(g.updateQueue=null,g.memoizedState=null)}var S=Dg(o);if(S!==null){S.flags&=-257,Og(S,o,u,i,e),S.mode&1&&jg(i,d,e),e=S,c=d;var P=e.updateQueue;if(P===null){var j=new Set;j.add(c),e.updateQueue=j}else P.add(c);break e}else{if(!(e&1)){jg(i,d,e),Dp();break e}c=Error(K(426))}}else if(Ve&&u.mode&1){var V=Dg(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),Og(V,o,u,i,e),pp(So(c,u));break e}}i=c=So(c,u),at!==4&&(at=2),Va===null?Va=[i]:Va.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var w=vx(i,c,e);Sg(i,w);break e;case 1:u=c;var I=i.type,A=i.stateNode;if(!(i.flags&128)&&(typeof I.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(ys===null||!ys.has(A)))){i.flags|=65536,e&=-e,i.lanes|=e;var F=yx(i,u,e);Sg(i,F);break e}}i=i.return}while(i!==null)}Mx(n)}catch(M){e=M,rt===n&&n!==null&&(rt=n=n.return);continue}break}while(!0)}function Ox(){var t=dc.current;return dc.current=cc,t===null?cc:t}function Dp(){(at===0||at===3||at===2)&&(at=4),ft===null||!(di&268435455)&&!(Kc&268435455)||is(ft,xt)}function pc(t,e){var n=be;be|=2;var r=Ox();(ft!==t||xt!==e)&&(yr=null,si(t,e));do try{kE();break}catch(s){Dx(t,s)}while(!0);if(gp(),be=n,dc.current=r,rt!==null)throw Error(K(261));return ft=null,xt=0,at}function kE(){for(;rt!==null;)Lx(rt)}function CE(){for(;rt!==null&&!eb();)Lx(rt)}function Lx(t){var e=Fx(t.alternate,t,rn);t.memoizedProps=t.pendingProps,e===null?Mx(t):rt=e,Cp.current=null}function Mx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bE(n,e),n!==null){n.flags&=32767,rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{at=6,rt=null;return}}else if(n=wE(n,e,rn),n!==null){rt=n;return}if(e=e.sibling,e!==null){rt=e;return}rt=e=t}while(e!==null);at===0&&(at=5)}function Js(t,e,n){var r=Se,s=xn.transition;try{xn.transition=null,Se=1,AE(t,e,n,r)}finally{xn.transition=s,Se=r}return null}function AE(t,e,n,r){do vo();while(ds!==null);if(be&6)throw Error(K(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(K(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(cb(t,i),t===ft&&(rt=ft=null,xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mu||(mu=!0,Ux(Qu,function(){return vo(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=xn.transition,xn.transition=null;var o=Se;Se=1;var u=be;be|=4,Cp.current=null,TE(t,n),Rx(n,t),Yb(Wh),Xu=!!Hh,Wh=Hh=null,t.current=n,IE(n),tb(),be=u,Se=o,xn.transition=i}else t.current=n;if(mu&&(mu=!1,ds=t,fc=s),i=t.pendingLanes,i===0&&(ys=null),sb(n.stateNode),Jt(t,Ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(hc)throw hc=!1,t=ff,ff=null,t;return fc&1&&t.tag!==0&&vo(),i=t.pendingLanes,i&1?t===pf?Fa++:(Fa=0,pf=t):Fa=0,Ps(),null}function vo(){if(ds!==null){var t=vy(fc),e=xn.transition,n=Se;try{if(xn.transition=null,Se=16>t?16:t,ds===null)var r=!1;else{if(t=ds,ds=null,fc=0,be&6)throw Error(K(331));var s=be;for(be|=4,J=t.current;J!==null;){var i=J,o=i.child;if(J.flags&16){var u=i.deletions;if(u!==null){for(var c=0;c<u.length;c++){var d=u[c];for(J=d;J!==null;){var g=J;switch(g.tag){case 0:case 11:case 15:Ma(8,g,i)}var v=g.child;if(v!==null)v.return=g,J=v;else for(;J!==null;){g=J;var y=g.sibling,S=g.return;if(kx(g),g===d){J=null;break}if(y!==null){y.return=S,J=y;break}J=S}}}var P=i.alternate;if(P!==null){var j=P.child;if(j!==null){P.child=null;do{var V=j.sibling;j.sibling=null,j=V}while(j!==null)}}J=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,J=o;else e:for(;J!==null;){if(i=J,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ma(9,i,i.return)}var w=i.sibling;if(w!==null){w.return=i.return,J=w;break e}J=i.return}}var I=t.current;for(J=I;J!==null;){o=J;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,J=A;else e:for(o=I;J!==null;){if(u=J,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Wc(9,u)}}catch(M){Ge(u,u.return,M)}if(u===o){J=null;break e}var F=u.sibling;if(F!==null){F.return=u.return,J=F;break e}J=u.return}}if(be=s,Ps(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(Vc,t)}catch{}r=!0}return r}finally{Se=n,xn.transition=e}}return!1}function Gg(t,e,n){e=So(n,e),e=vx(t,e,1),t=vs(t,e,1),e=Ut(),t!==null&&(yl(t,1,e),Jt(t,e))}function Ge(t,e,n){if(t.tag===3)Gg(t,t,n);else for(;e!==null;){if(e.tag===3){Gg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ys===null||!ys.has(r))){t=So(n,t),t=yx(e,t,1),e=vs(e,t,1),t=Ut(),e!==null&&(yl(e,1,t),Jt(e,t));break}}e=e.return}}function RE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ut(),t.pingedLanes|=t.suspendedLanes&n,ft===t&&(xt&n)===n&&(at===4||at===3&&(xt&130023424)===xt&&500>Ze()-Rp?si(t,0):Ap|=n),Jt(t,e)}function Vx(t,e){e===0&&(t.mode&1?(e=iu,iu<<=1,!(iu&130023424)&&(iu=4194304)):e=1);var n=Ut();t=Rr(t,e),t!==null&&(yl(t,e,n),Jt(t,n))}function PE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Vx(t,n)}function jE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(K(314))}r!==null&&r.delete(e),Vx(t,n)}var Fx;Fx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Yt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,_E(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,Ve&&e.flags&1048576&&By(e,sc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ju(t,e),t=e.pendingProps;var s=Eo(e,Ot.current);go(e,n),s=Tp(null,e,r,t,s,n);var i=Ip();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Xt(r)?(i=!0,nc(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,xp(e),s.updater=Hc,e.stateNode=s,s._reactInternals=e,tf(e,r,t,n),e=sf(null,e,r,!0,i,n)):(e.tag=0,Ve&&i&&hp(e),Ft(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ju(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=OE(r),t=jn(r,t),s){case 0:e=rf(null,e,r,t,n);break e;case 1:e=Vg(null,e,r,t,n);break e;case 11:e=Lg(null,e,r,t,n);break e;case 14:e=Mg(null,e,r,jn(r.type,t),n);break e}throw Error(K(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:jn(r,s),rf(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:jn(r,s),Vg(t,e,r,s,n);case 3:e:{if(bx(e),t===null)throw Error(K(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Qy(t,e),ac(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=So(Error(K(423)),e),e=Fg(t,e,r,n,s);break e}else if(r!==s){s=So(Error(K(424)),e),e=Fg(t,e,r,n,s);break e}else for(sn=gs(e.stateNode.containerInfo.firstChild),an=e,Ve=!0,On=null,n=Ky(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(To(),r===s){e=Pr(t,e,n);break e}Ft(t,e,r,n)}e=e.child}return e;case 5:return Yy(e),t===null&&Jh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Kh(r,s)?o=null:i!==null&&Kh(r,i)&&(e.flags|=32),wx(t,e),Ft(t,e,o,n),e.child;case 6:return t===null&&Jh(e),null;case 13:return Ex(t,e,n);case 4:return _p(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Io(e,null,r,n):Ft(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:jn(r,s),Lg(t,e,r,s,n);case 7:return Ft(t,e,e.pendingProps,n),e.child;case 8:return Ft(t,e,e.pendingProps.children,n),e.child;case 12:return Ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Pe(ic,r._currentValue),r._currentValue=o,i!==null)if(Vn(i.value,o)){if(i.children===s.children&&!Yt.current){e=Pr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var c=u.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Nr(-1,n&-n),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?c.next=c:(c.next=g.next,g.next=c),d.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Zh(i.return,n,e),u.lanes|=n;break}c=c.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(K(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Zh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ft(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,go(e,n),s=wn(s),r=r(s),e.flags|=1,Ft(t,e,r,n),e.child;case 14:return r=e.type,s=jn(r,e.pendingProps),s=jn(r.type,s),Mg(t,e,r,s,n);case 15:return xx(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:jn(r,s),ju(t,e),e.tag=1,Xt(r)?(t=!0,nc(e)):t=!1,go(e,n),gx(e,r,s),tf(e,r,s,n),sf(null,e,r,!0,t,n);case 19:return Tx(t,e,n);case 22:return _x(t,e,n)}throw Error(K(156,e.tag))};function Ux(t,e){return fy(t,e)}function DE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(t,e,n,r){return new DE(t,e,n,r)}function Op(t){return t=t.prototype,!(!t||!t.isReactComponent)}function OE(t){if(typeof t=="function")return Op(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ep)return 11;if(t===tp)return 14}return 2}function _s(t,e){var n=t.alternate;return n===null?(n=vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Lu(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Op(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Yi:return ii(n.children,s,i,e);case Zf:o=8,s|=8;break;case Ih:return t=vn(12,n,e,s|2),t.elementType=Ih,t.lanes=i,t;case Nh:return t=vn(13,n,e,s),t.elementType=Nh,t.lanes=i,t;case Sh:return t=vn(19,n,e,s),t.elementType=Sh,t.lanes=i,t;case Yv:return Gc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gv:o=10;break e;case Qv:o=9;break e;case ep:o=11;break e;case tp:o=14;break e;case ns:o=16,r=null;break e}throw Error(K(130,t==null?t:typeof t,""))}return e=vn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function ii(t,e,n,r){return t=vn(7,t,r,e),t.lanes=n,t}function Gc(t,e,n,r){return t=vn(22,t,r,e),t.elementType=Yv,t.lanes=n,t.stateNode={isHidden:!1},t}function ih(t,e,n){return t=vn(6,t,null,e),t.lanes=n,t}function oh(t,e,n){return e=vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function LE(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ud(0),this.expirationTimes=Ud(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ud(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Lp(t,e,n,r,s,i,o,u,c){return t=new LE(t,e,n,u,c),e===1?(e=1,i===!0&&(e|=8)):e=0,i=vn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xp(i),t}function ME(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function zx(t){if(!t)return Is;t=t._reactInternals;e:{if(wi(t)!==t||t.tag!==1)throw Error(K(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(K(171))}if(t.tag===1){var n=t.type;if(Xt(n))return zy(t,n,e)}return e}function $x(t,e,n,r,s,i,o,u,c){return t=Lp(n,r,!0,t,s,i,o,u,c),t.context=zx(null),n=t.current,r=Ut(),s=xs(n),i=Nr(r,s),i.callback=e??null,vs(n,i,s),t.current.lanes=s,yl(t,s,r),Jt(t,r),t}function Qc(t,e,n,r){var s=e.current,i=Ut(),o=xs(s);return n=zx(n),e.context===null?e.context=n:e.pendingContext=n,e=Nr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vs(s,e,o),t!==null&&(Mn(t,s,o,i),Au(t,s,o)),o}function mc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mp(t,e){Qg(t,e),(t=t.alternate)&&Qg(t,e)}function VE(){return null}var Bx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vp(t){this._internalRoot=t}Yc.prototype.render=Vp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(K(409));Qc(t,e,null,null)};Yc.prototype.unmount=Vp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hi(function(){Qc(null,t,null,null)}),e[Ar]=null}};function Yc(t){this._internalRoot=t}Yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=_y();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ss.length&&e!==0&&e<ss[n].priority;n++);ss.splice(n,0,t),n===0&&by(t)}};function Fp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yg(){}function FE(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=mc(o);i.call(d)}}var o=$x(e,r,t,0,null,!1,!1,"",Yg);return t._reactRootContainer=o,t[Ar]=o.current,Za(t.nodeType===8?t.parentNode:t),hi(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var u=r;r=function(){var d=mc(c);u.call(d)}}var c=Lp(t,0,!1,null,null,!1,!1,"",Yg);return t._reactRootContainer=c,t[Ar]=c.current,Za(t.nodeType===8?t.parentNode:t),hi(function(){Qc(e,c,n,r)}),c}function Jc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var u=s;s=function(){var c=mc(o);u.call(c)}}Qc(e,o,t,s)}else o=FE(n,e,t,s,r);return mc(o)}yy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ba(e.pendingLanes);n!==0&&(sp(e,n|1),Jt(e,Ze()),!(be&6)&&(ko=Ze()+500,Ps()))}break;case 13:hi(function(){var r=Rr(t,1);if(r!==null){var s=Ut();Mn(r,t,1,s)}}),Mp(t,1)}};ip=function(t){if(t.tag===13){var e=Rr(t,134217728);if(e!==null){var n=Ut();Mn(e,t,134217728,n)}Mp(t,134217728)}};xy=function(t){if(t.tag===13){var e=xs(t),n=Rr(t,e);if(n!==null){var r=Ut();Mn(n,t,e,r)}Mp(t,e)}};_y=function(){return Se};wy=function(t,e){var n=Se;try{return Se=t,e()}finally{Se=n}};Mh=function(t,e,n){switch(e){case"input":if(Ah(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=$c(r);if(!s)throw Error(K(90));Jv(r),Ah(r,s)}}}break;case"textarea":ey(t,n);break;case"select":e=n.value,e!=null&&ho(t,!!n.multiple,e,!1)}};ay=Pp;ly=hi;var UE={usingClientEntryPoint:!1,Events:[_l,eo,$c,iy,oy,Pp]},ga={findFiberByHostInstance:ei,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zE={bundleType:ga.bundleType,version:ga.version,rendererPackageName:ga.rendererPackageName,rendererConfig:ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=dy(t),t===null?null:t.stateNode},findFiberByHostInstance:ga.findFiberByHostInstance||VE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gu.isDisabled&&gu.supportsFiber)try{Vc=gu.inject(zE),Jn=gu}catch{}}un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UE;un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fp(e))throw Error(K(200));return ME(t,e,null,n)};un.createRoot=function(t,e){if(!Fp(t))throw Error(K(299));var n=!1,r="",s=Bx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Lp(t,1,!1,null,null,n,!1,r,s),t[Ar]=e.current,Za(t.nodeType===8?t.parentNode:t),new Vp(e)};un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(K(188)):(t=Object.keys(t).join(","),Error(K(268,t)));return t=dy(e),t=t===null?null:t.stateNode,t};un.flushSync=function(t){return hi(t)};un.hydrate=function(t,e,n){if(!Xc(e))throw Error(K(200));return Jc(null,t,e,!0,n)};un.hydrateRoot=function(t,e,n){if(!Fp(t))throw Error(K(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Bx;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$x(e,null,t,1,n??null,s,!1,i,o),t[Ar]=e.current,Za(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Yc(e)};un.render=function(t,e,n){if(!Xc(e))throw Error(K(200));return Jc(null,t,e,!1,n)};un.unmountComponentAtNode=function(t){if(!Xc(t))throw Error(K(40));return t._reactRootContainer?(hi(function(){Jc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ar]=null})}),!0):!1};un.unstable_batchedUpdates=Pp;un.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Xc(n))throw Error(K(200));if(t==null||t._reactInternals===void 0)throw Error(K(38));return Jc(t,e,n,!1,r)};un.version="18.3.1-next-f1338f8080-20240426";function qx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qx)}catch(t){console.error(t)}}qx(),qv.exports=un;var $E=qv.exports,Xg=$E;Eh.createRoot=Xg.createRoot,Eh.hydrateRoot=Xg.hydrateRoot;var Jg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},BE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],u=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Wx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,u=o?t[s+1]:0,c=s+2<t.length,d=c?t[s+2]:0,g=i>>2,v=(i&3)<<4|u>>4;let y=(u&15)<<2|d>>6,S=d&63;c||(S=64,o||(y=64)),r.push(n[g],n[v],n[y],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hx(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],u=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const v=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||u==null||d==null||v==null)throw new qE;const y=i<<2|u>>4;if(r.push(y),d!==64){const S=u<<4&240|d>>2;if(r.push(S),v!==64){const P=d<<6&192|v;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const HE=function(t){const e=Hx(t);return Wx.encodeByteArray(e,!0)},gc=function(t){return HE(t).replace(/\./g,"")},Kx=function(t){try{return Wx.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=()=>WE().__FIREBASE_DEFAULTS__,GE=()=>{if(typeof process>"u"||typeof Jg>"u")return;const t=Jg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},QE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Kx(t[1]);return e&&JSON.parse(e)},Zc=()=>{try{return KE()||GE()||QE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gx=t=>{var e,n;return(n=(e=Zc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Qx=t=>{const e=Gx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Yx=()=>{var t;return(t=Zc())===null||t===void 0?void 0:t.config},Xx=t=>{var e;return(e=Zc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[gc(JSON.stringify(n)),gc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function XE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Lt())}function JE(){var t;const e=(t=Zc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ZE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function eT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nT(){const t=Lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rT(){return!JE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sT(){try{return typeof indexedDB=="object"}catch{return!1}}function iT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT="FirebaseError";class ar extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=oT,Object.setPrototypeOf(this,ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bl.prototype.create)}}class bl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?aT(i,r):"Error",u=`${this.serviceName}: ${o} (${s}).`;return new ar(s,u,r)}}function aT(t,e){return t.replace(lT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const lT=/\{\$([^}]+)}/g;function uT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Zg(i)&&Zg(o)){if(!vc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Zg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ta(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ia(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function cT(t,e){const n=new dT(t,e);return n.subscribe.bind(n)}class dT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ah),s.error===void 0&&(s.error=ah),s.complete===void 0&&(s.complete=ah);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ah(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t){return t&&t._delegate?t._delegate:t}class Ns{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new YE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mT(e))try{this.getOrInitializeService({instanceIdentifier:Zs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Zs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zs){return this.instances.has(e)}getOptions(e=Zs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);r===u&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zs){return this.component?this.component.multipleInstances?e:Zs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pT(t){return t===Zs?void 0:t}function mT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const vT={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},yT=ye.INFO,xT={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},_T=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=xT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Up{constructor(e){this.name=e,this._logLevel=yT,this._logHandler=_T,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const wT=(t,e)=>e.some(n=>t instanceof n);let e0,t0;function bT(){return e0||(e0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ET(){return t0||(t0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zx=new WeakMap,vf=new WeakMap,e_=new WeakMap,lh=new WeakMap,zp=new WeakMap;function TT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ws(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Zx.set(n,t)}).catch(()=>{}),zp.set(e,t),e}function IT(t){if(vf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});vf.set(t,e)}let yf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||e_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ws(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function NT(t){yf=t(yf)}function ST(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(uh(this),e,...n);return e_.set(r,e.sort?e.sort():[e]),ws(r)}:ET().includes(t)?function(...e){return t.apply(uh(this),e),ws(Zx.get(this))}:function(...e){return ws(t.apply(uh(this),e))}}function kT(t){return typeof t=="function"?ST(t):(t instanceof IDBTransaction&&IT(t),wT(t,bT())?new Proxy(t,yf):t)}function ws(t){if(t instanceof IDBRequest)return TT(t);if(lh.has(t))return lh.get(t);const e=kT(t);return e!==t&&(lh.set(t,e),zp.set(e,t)),e}const uh=t=>zp.get(t);function CT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),u=ws(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ws(o.result),c.oldVersion,c.newVersion,ws(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),u.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const AT=["get","getKey","getAll","getAllKeys","count"],RT=["put","add","delete","clear"],ch=new Map;function n0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ch.get(e))return ch.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=RT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||AT.includes(n)))return;const i=async function(o,...u){const c=this.transaction(o,s?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[n](...u),s&&c.done]))[0]};return ch.set(e,i),i}NT(t=>({...t,get:(e,n,r)=>n0(e,n)||t.get(e,n,r),has:(e,n)=>!!n0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xf="@firebase/app",r0="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new Up("@firebase/app"),DT="@firebase/app-compat",OT="@firebase/analytics-compat",LT="@firebase/analytics",MT="@firebase/app-check-compat",VT="@firebase/app-check",FT="@firebase/auth",UT="@firebase/auth-compat",zT="@firebase/database",$T="@firebase/data-connect",BT="@firebase/database-compat",qT="@firebase/functions",HT="@firebase/functions-compat",WT="@firebase/installations",KT="@firebase/installations-compat",GT="@firebase/messaging",QT="@firebase/messaging-compat",YT="@firebase/performance",XT="@firebase/performance-compat",JT="@firebase/remote-config",ZT="@firebase/remote-config-compat",eI="@firebase/storage",tI="@firebase/storage-compat",nI="@firebase/firestore",rI="@firebase/vertexai-preview",sI="@firebase/firestore-compat",iI="firebase",oI="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="[DEFAULT]",aI={[xf]:"fire-core",[DT]:"fire-core-compat",[LT]:"fire-analytics",[OT]:"fire-analytics-compat",[VT]:"fire-app-check",[MT]:"fire-app-check-compat",[FT]:"fire-auth",[UT]:"fire-auth-compat",[zT]:"fire-rtdb",[$T]:"fire-data-connect",[BT]:"fire-rtdb-compat",[qT]:"fire-fn",[HT]:"fire-fn-compat",[WT]:"fire-iid",[KT]:"fire-iid-compat",[GT]:"fire-fcm",[QT]:"fire-fcm-compat",[YT]:"fire-perf",[XT]:"fire-perf-compat",[JT]:"fire-rc",[ZT]:"fire-rc-compat",[eI]:"fire-gcs",[tI]:"fire-gcs-compat",[nI]:"fire-fst",[sI]:"fire-fst-compat",[rI]:"fire-vertex","fire-js":"fire-js",[iI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=new Map,lI=new Map,wf=new Map;function s0(t,e){try{t.container.addComponent(e)}catch(n){jr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fi(t){const e=t.name;if(wf.has(e))return jr.debug(`There were multiple attempts to register component ${e}.`),!1;wf.set(e,t);for(const n of yc.values())s0(n,t);for(const n of lI.values())s0(n,t);return!0}function ed(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bs=new bl("app","Firebase",uI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ns("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=oI;function t_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_f,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw bs.create("bad-app-name",{appName:String(s)});if(n||(n=Yx()),!n)throw bs.create("no-options");const i=yc.get(s);if(i){if(vc(n,i.options)&&vc(r,i.config))return i;throw bs.create("duplicate-app",{appName:s})}const o=new gT(s);for(const c of wf.values())o.addComponent(c);const u=new cI(n,r,o);return yc.set(s,u),u}function $p(t=_f){const e=yc.get(t);if(!e&&t===_f&&Yx())return t_();if(!e)throw bs.create("no-app",{appName:t});return e}function er(t,e,n){var r;let s=(r=aI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const u=[`Unable to register library "${s}" with version "${e}":`];i&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&u.push("and"),o&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jr.warn(u.join(" "));return}fi(new Ns(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="firebase-heartbeat-database",hI=1,ll="firebase-heartbeat-store";let dh=null;function n_(){return dh||(dh=CT(dI,hI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ll)}catch(n){console.warn(n)}}}}).catch(t=>{throw bs.create("idb-open",{originalErrorMessage:t.message})})),dh}async function fI(t){try{const n=(await n_()).transaction(ll),r=await n.objectStore(ll).get(r_(t));return await n.done,r}catch(e){if(e instanceof ar)jr.warn(e.message);else{const n=bs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jr.warn(n.message)}}}async function i0(t,e){try{const r=(await n_()).transaction(ll,"readwrite");await r.objectStore(ll).put(e,r_(t)),await r.done}catch(n){if(n instanceof ar)jr.warn(n.message);else{const r=bs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jr.warn(r.message)}}}function r_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=1024,mI=30*24*60*60*1e3;class gI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=o0();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const u=new Date(o.date).valueOf();return Date.now()-u<=mI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){jr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=o0(),{heartbeatsToSend:r,unsentEntries:s}=vI(this._heartbeatsCache.heartbeats),i=gc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return jr.warn(n),""}}}function o0(){return new Date().toISOString().substring(0,10)}function vI(t,e=pI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),a0(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),a0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sT()?iT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return i0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return i0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function a0(t){return gc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(t){fi(new Ns("platform-logger",e=>new PT(e),"PRIVATE")),fi(new Ns("heartbeat",e=>new gI(e),"PRIVATE")),er(xf,r0,t),er(xf,r0,"esm2017"),er("fire-js","")}xI("");function Bp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function s_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _I=s_,i_=new bl("auth","Firebase",s_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=new Up("@firebase/auth");function wI(t,...e){xc.logLevel<=ye.WARN&&xc.warn(`Auth (${bi}): ${t}`,...e)}function Mu(t,...e){xc.logLevel<=ye.ERROR&&xc.error(`Auth (${bi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t,...e){throw qp(t,...e)}function tr(t,...e){return qp(t,...e)}function o_(t,e,n){const r=Object.assign(Object.assign({},_I()),{[e]:n});return new bl("auth","Firebase",r).create(e,{appName:t.name})}function Sr(t){return o_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return i_.create(t,...e)}function oe(t,e,...n){if(!t)throw qp(e,...n)}function Er(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Mu(e),new Error(e)}function Dr(t,e){t||Er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bI(){return l0()==="http:"||l0()==="https:"}function l0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bI()||eT()||"connection"in navigator)?navigator.onLine:!0}function TI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dr(n>e,"Short delay should be less than long delay!"),this.isMobile=XE()||tT()}get(){return EI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t,e){Dr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=new Tl(3e4,6e4);function Ur(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function lr(t,e,n,r,s={}){return l_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const u=El(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:c},i);return ZE()||(d.referrerPolicy="no-referrer"),a_.fetch()(u_(t,t.config.apiHost,n,u),d)})}async function l_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},II),e);try{const s=new kI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw vu(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const u=i.ok?o.errorMessage:o.error.message,[c,d]=u.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw vu(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw vu(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw vu(t,"user-disabled",o);const g=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw o_(t,g,d);Fn(t,g)}}catch(s){if(s instanceof ar)throw s;Fn(t,"network-request-failed",{message:String(s)})}}async function Il(t,e,n,r,s={}){const i=await lr(t,e,n,r,s);return"mfaPendingCredential"in i&&Fn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function u_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Hp(t.config,s):`${t.config.apiScheme}://${s}`}function SI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tr(this.auth,"network-request-failed")),NI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tr(t,e,r);return s.customData._tokenResponse=n,s}function u0(t){return t!==void 0&&t.enterprise!==void 0}class CI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return SI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function AI(t,e){return lr(t,"GET","/v2/recaptchaConfig",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RI(t,e){return lr(t,"POST","/v1/accounts:delete",e)}async function c_(t,e){return lr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PI(t,e=!1){const n=He(t),r=await n.getIdToken(e),s=Wp(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ua(hh(s.auth_time)),issuedAtTime:Ua(hh(s.iat)),expirationTime:Ua(hh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function hh(t){return Number(t)*1e3}function Wp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Mu("JWT malformed, contained fewer than 3 sections"),null;try{const s=Kx(n);return s?JSON.parse(s):(Mu("Failed to decode base64 JWT payload"),null)}catch(s){return Mu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function c0(t){const e=Wp(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ar&&jI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ua(this.lastLoginAt),this.creationTime=Ua(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _c(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Co(t,c_(n,{idToken:r}));oe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?d_(i.providerUserInfo):[],u=LI(t.providerData,o),c=t.isAnonymous,d=!(t.email&&i.passwordHash)&&!(u!=null&&u.length),g=c?d:!1,v={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:u,metadata:new Ef(i.createdAt,i.lastLoginAt),isAnonymous:g};Object.assign(t,v)}async function OI(t){const e=He(t);await _c(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function LI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function d_(t){return t.map(e=>{var{providerId:n}=e,r=Bp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(t,e){const n=await l_(t,{},async()=>{const r=El({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=u_(t,s,"/v1/token",`key=${i}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",a_.fetch()(o,{method:"POST",headers:u,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function VI(t,e){return lr(t,"POST","/v2/accounts:revokeToken",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):c0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=c0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await MI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new yo;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yo,this.toJSON())}_performRefresh(){return Er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Bp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ef(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Co(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return PI(this,e)}reload(){return OI(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _c(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xn(this.auth.app))return Promise.reject(Sr(this.auth));const e=await this.getIdToken();return await Co(this,RI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,u,c,d,g;const v=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(s=n.email)!==null&&s!==void 0?s:void 0,S=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,j=(u=n.tenantId)!==null&&u!==void 0?u:void 0,V=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(d=n.createdAt)!==null&&d!==void 0?d:void 0,I=(g=n.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:A,emailVerified:F,isAnonymous:M,providerData:z,stsTokenManager:E}=n;oe(A&&E,e,"internal-error");const _=yo.fromJSON(this.name,E);oe(typeof A=="string",e,"internal-error"),Zr(v,e.name),Zr(y,e.name),oe(typeof F=="boolean",e,"internal-error"),oe(typeof M=="boolean",e,"internal-error"),Zr(S,e.name),Zr(P,e.name),Zr(j,e.name),Zr(V,e.name),Zr(w,e.name),Zr(I,e.name);const T=new Tr({uid:A,auth:e,email:y,emailVerified:F,displayName:v,isAnonymous:M,photoURL:P,phoneNumber:S,tenantId:j,stsTokenManager:_,createdAt:w,lastLoginAt:I});return z&&Array.isArray(z)&&(T.providerData=z.map(N=>Object.assign({},N))),V&&(T._redirectEventId=V),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new yo;s.updateFromServerResponse(n);const i=new Tr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await _c(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?d_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),u=new yo;u.updateFromIdToken(r);const c=new Tr({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ef(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,d),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=new Map;function Ir(t){Dr(t instanceof Function,"Expected a class definition");let e=d0.get(t);return e?(Dr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,d0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}h_.type="NONE";const h0=h_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t,e,n){return`firebase:${t}:${e}:${n}`}class xo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Vu(this.userKey,s.apiKey,i),this.fullPersistenceKey=Vu("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xo(Ir(h0),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Ir(h0);const o=Vu(r,e.config.apiKey,e.name);let u=null;for(const d of n)try{const g=await d._get(o);if(g){const v=Tr._fromJSON(e,g);d!==i&&(u=v),i=d;break}}catch{}const c=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new xo(i,e,r):(i=c[0],u&&await i._set(o,u.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new xo(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(g_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(f_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(y_(e))return"Blackberry";if(x_(e))return"Webos";if(p_(e))return"Safari";if((e.includes("chrome/")||m_(e))&&!e.includes("edge/"))return"Chrome";if(v_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function f_(t=Lt()){return/firefox\//i.test(t)}function p_(t=Lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function m_(t=Lt()){return/crios\//i.test(t)}function g_(t=Lt()){return/iemobile/i.test(t)}function v_(t=Lt()){return/android/i.test(t)}function y_(t=Lt()){return/blackberry/i.test(t)}function x_(t=Lt()){return/webos/i.test(t)}function Kp(t=Lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function FI(t=Lt()){var e;return Kp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function UI(){return nT()&&document.documentMode===10}function __(t=Lt()){return Kp(t)||v_(t)||x_(t)||y_(t)||/windows phone/i.test(t)||g_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t,e=[]){let n;switch(t){case"Browser":n=f0(Lt());break;case"Worker":n=`${f0(Lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,u)=>{try{const c=e(i);o(c)}catch(c){u(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $I(t,e={}){return lr(t,"GET","/v2/passwordPolicy",Ur(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=6;class qI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:BI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,u;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(u=c.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new p0(this),this.idTokenSubscription=new p0(this),this.beforeStateQueue=new zI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=i_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ir(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await xo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await c_(this,{idToken:e}),r=await Tr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===u)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _c(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xn(this.app))return Promise.reject(Sr(this));const n=e?He(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xn(this.app)?Promise.reject(Sr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xn(this.app)?Promise.reject(Sr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ir(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $I(this),n=new qI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await VI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ir(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await xo.create(this,[Ir(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(u,this,"internal-error"),u.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=w_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function js(t){return He(t)}class p0{constructor(e){this.auth=e,this.observer=null,this.addObserver=cT(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let td={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WI(t){td=t}function b_(t){return td.loadJS(t)}function KI(){return td.recaptchaEnterpriseScript}function GI(){return td.gapiScript}function QI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const YI="recaptcha-enterprise",XI="NO_RECAPTCHA";class JI{constructor(e){this.type=YI,this.auth=js(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,u)=>{AI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const d=new CI(c);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(c=>{u(c)})})}function s(i,o,u){const c=window.grecaptcha;u0(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(XI)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(u=>{if(!n&&u0(window.grecaptcha))s(u,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=KI();c.length!==0&&(c+=u),b_(c).then(()=>{s(u,i,o)}).catch(d=>{o(d)})}}).catch(u=>{o(u)})})}}async function m0(t,e,n,r=!1){const s=new JI(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function wc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await m0(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await m0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t,e){const n=ed(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(vc(i,e??{}))return s;Fn(s,"already-initialized")}return n.initialize({options:e})}function e2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ir);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function t2(t,e,n){const r=js(t);oe(r._canInitEmulator,r,"emulator-config-failed"),oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=E_(e),{host:o,port:u}=n2(e),c=u===null?"":`:${u}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:u,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),r2()}function E_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function n2(t){const e=E_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:g0(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:g0(o)}}}function g0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function r2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Er("not implemented")}_getIdTokenResponse(e){return Er("not implemented")}_linkToIdToken(e,n){return Er("not implemented")}_getReauthenticationResolver(e){return Er("not implemented")}}async function s2(t,e){return lr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i2(t,e){return Il(t,"POST","/v1/accounts:signInWithPassword",Ur(t,e))}async function o2(t,e){return lr(t,"POST","/v1/accounts:sendOobCode",Ur(t,e))}async function a2(t,e){return o2(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l2(t,e){return Il(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}async function u2(t,e){return Il(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul extends Gp{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ul(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ul(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wc(e,n,"signInWithPassword",i2);case"emailLink":return l2(e,{email:this._email,oobCode:this._password});default:Fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wc(e,r,"signUpPassword",s2);case"emailLink":return u2(e,{idToken:n,email:this._email,oobCode:this._password});default:Fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(t,e){return Il(t,"POST","/v1/accounts:signInWithIdp",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2="http://localhost";class pi extends Gp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new pi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Bp(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new pi(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _o(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_o(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_o(e,n)}buildRequest(){const e={requestUri:c2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=El(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function h2(t){const e=Ta(Ia(t)).link,n=e?Ta(Ia(e)).deep_link_id:null,r=Ta(Ia(t)).deep_link_id;return(r?Ta(Ia(r)).link:null)||r||n||e||t}class Qp{constructor(e){var n,r,s,i,o,u;const c=Ta(Ia(e)),d=(n=c.apiKey)!==null&&n!==void 0?n:null,g=(r=c.oobCode)!==null&&r!==void 0?r:null,v=d2((s=c.mode)!==null&&s!==void 0?s:null);oe(d&&g&&v,"argument-error"),this.apiKey=d,this.operation=v,this.code=g,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(u=c.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const n=h2(e);try{return new Qp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.providerId=Ei.PROVIDER_ID}static credential(e,n){return ul._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qp.parseLink(n);return oe(r,"argument-error"),ul._fromEmailAndCode(e,r.code,r.tenantId)}}Ei.PROVIDER_ID="password";Ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl extends T_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends Nl{constructor(){super("facebook.com")}static credential(e){return pi._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return os.credentialFromTaggedObject(e)}static credentialFromError(e){return os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return os.credential(e.oauthAccessToken)}catch{return null}}}os.FACEBOOK_SIGN_IN_METHOD="facebook.com";os.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends Nl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return pi._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return as.credentialFromTaggedObject(e)}static credentialFromError(e){return as.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return as.credential(n,r)}catch{return null}}}as.GOOGLE_SIGN_IN_METHOD="google.com";as.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends Nl{constructor(){super("github.com")}static credential(e){return pi._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ls.credentialFromTaggedObject(e)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ls.credential(e.oauthAccessToken)}catch{return null}}}ls.GITHUB_SIGN_IN_METHOD="github.com";ls.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends Nl{constructor(){super("twitter.com")}static credential(e,n){return pi._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return us.credential(n,r)}catch{return null}}}us.TWITTER_SIGN_IN_METHOD="twitter.com";us.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f2(t,e){return Il(t,"POST","/v1/accounts:signUp",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Tr._fromIdTokenResponse(e,r,s),o=v0(r);return new mi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=v0(r);return new mi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function v0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc extends ar{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,bc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new bc(e,n,r,s)}}function I_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?bc._fromErrorAndOperation(t,i,e,r):i})}async function p2(t,e,n=!1){const r=await Co(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N_(t,e,n=!1){const{auth:r}=t;if(Xn(r.app))return Promise.reject(Sr(r));const s="reauthenticate";try{const i=await Co(t,I_(r,s,e,t),n);oe(i.idToken,r,"internal-error");const o=Wp(i.idToken);oe(o,r,"internal-error");const{sub:u}=o;return oe(t.uid===u,r,"user-mismatch"),mi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Fn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S_(t,e,n=!1){if(Xn(t.app))return Promise.reject(Sr(t));const r="signIn",s=await I_(t,r,e),i=await mi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function m2(t,e){return S_(js(t),e)}async function g2(t,e){return N_(He(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k_(t){const e=js(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function v2(t,e,n){const r=js(t);await wc(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",a2)}async function y2(t,e,n){if(Xn(t.app))return Promise.reject(Sr(t));const r=js(t),o=await wc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",f2).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&k_(t),c}),u=await mi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(u.user),u}function y0(t,e,n){return Xn(t.app)?Promise.reject(Sr(t)):m2(He(t),Ei.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&k_(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x2(t,e){return lr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _2(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=He(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Co(r,x2(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const u=r.providerData.find(({providerId:c})=>c==="password");u&&(u.displayName=r.displayName,u.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function w2(t,e,n,r){return He(t).onIdTokenChanged(e,n,r)}function b2(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function E2(t,e,n,r){return He(t).onAuthStateChanged(e,n,r)}function x0(t){return He(t).signOut()}const Ec="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ec,"1"),this.storage.removeItem(Ec),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2=1e3,I2=10;class A_ extends C_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=__(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,u,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);UI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,I2):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},T2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}A_.type="LOCAL";const N2=A_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_ extends C_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}R_.type="SESSION";const P_=R_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new nd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const u=Array.from(o).map(async d=>d(n.origin,i)),c=await S2(u);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((u,c)=>{const d=Yp("",20);s.port1.start();const g=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(v){const y=v;if(y.data.eventId===d)switch(y.data.status){case"ack":clearTimeout(g),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),u(y.data.response);break;default:clearTimeout(g),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(){return window}function C2(t){nr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(){return typeof nr().WorkerGlobalScope<"u"&&typeof nr().importScripts=="function"}async function A2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function R2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function P2(){return j_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="firebaseLocalStorageDb",j2=1,Tc="firebaseLocalStorage",O_="fbase_key";class Sl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rd(t,e){return t.transaction([Tc],e?"readwrite":"readonly").objectStore(Tc)}function D2(){const t=indexedDB.deleteDatabase(D_);return new Sl(t).toPromise()}function Tf(){const t=indexedDB.open(D_,j2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tc,{keyPath:O_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tc)?e(r):(r.close(),await D2(),e(await Tf()))})})}async function _0(t,e,n){const r=rd(t,!0).put({[O_]:e,value:n});return new Sl(r).toPromise()}async function O2(t,e){const n=rd(t,!1).get(e),r=await new Sl(n).toPromise();return r===void 0?null:r.value}function w0(t,e){const n=rd(t,!0).delete(e);return new Sl(n).toPromise()}const L2=800,M2=3;class L_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>M2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return j_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nd._getInstance(P2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await A2(),!this.activeServiceWorker)return;this.sender=new k2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||R2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tf();return await _0(e,Ec,"1"),await w0(e,Ec),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>O2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>w0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=rd(s,!1).getAll();return new Sl(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),L2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}L_.type="LOCAL";const V2=L_;new Tl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F2(t,e){return e?Ir(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp extends Gp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _o(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _o(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _o(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function U2(t){return S_(t.auth,new Xp(t),t.bypassAuthState)}function z2(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),N_(n,new Xp(t),t.bypassAuthState)}async function $2(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),p2(n,new Xp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:u}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return U2;case"linkViaPopup":case"linkViaRedirect":return $2;case"reauthViaPopup":case"reauthViaRedirect":return z2;default:Fn(this.auth,"internal-error")}}resolve(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B2=new Tl(2e3,1e4);class ao extends M_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ao.currentPopupAction&&ao.currentPopupAction.cancel(),ao.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Dr(this.filter.length===1,"Popup operations only handle one event");const e=Yp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ao.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,B2.get())};e()}}ao.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2="pendingRedirect",Fu=new Map;class H2 extends M_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Fu.get(this.auth._key());if(!e){try{const r=await W2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Fu.set(this.auth._key(),e)}return this.bypassAuthState||Fu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function W2(t,e){const n=Q2(e),r=G2(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function K2(t,e){Fu.set(t._key(),e)}function G2(t){return Ir(t._redirectPersistence)}function Q2(t){return Vu(q2,t.config.apiKey,t.name)}async function Y2(t,e,n=!1){if(Xn(t.app))return Promise.reject(Sr(t));const r=js(t),s=F2(r,e),o=await new H2(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2=10*60*1e3;class J2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Z2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!V_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tr(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=X2&&this.cachedEventUids.clear(),this.cachedEventUids.has(b0(e))}saveEventToCache(e){this.cachedEventUids.add(b0(e)),this.lastProcessedEventTime=Date.now()}}function b0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function V_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Z2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return V_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eN(t,e={}){return lr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nN=/^https?/;async function rN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eN(t);for(const n of e)try{if(sN(n))return}catch{}Fn(t,"unauthorized-domain")}function sN(t){const e=bf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!nN.test(n))return!1;if(tN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN=new Tl(3e4,6e4);function E0(){const t=nr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function oN(t){return new Promise((e,n)=>{var r,s,i;function o(){E0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{E0(),n(tr(t,"network-request-failed"))},timeout:iN.get()})}if(!((s=(r=nr().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=nr().gapi)===null||i===void 0)&&i.load)o();else{const u=QI("iframefcb");return nr()[u]=()=>{gapi.load?o():n(tr(t,"network-request-failed"))},b_(`${GI()}?onload=${u}`).catch(c=>n(c))}}).catch(e=>{throw Uu=null,e})}let Uu=null;function aN(t){return Uu=Uu||oN(t),Uu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN=new Tl(5e3,15e3),uN="__/auth/iframe",cN="emulator/auth/iframe",dN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fN(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hp(e,cN):`https://${t.config.authDomain}/${uN}`,r={apiKey:e.apiKey,appName:t.name,v:bi},s=hN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${El(r).slice(1)}`}async function pN(t){const e=await aN(t),n=nr().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:fN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=tr(t,"network-request-failed"),u=nr().setTimeout(()=>{i(o)},lN.get());function c(){nr().clearTimeout(u),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gN=500,vN=600,yN="_blank",xN="http://localhost";class T0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _N(t,e,n,r=gN,s=vN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const c=Object.assign(Object.assign({},mN),{width:r.toString(),height:s.toString(),top:i,left:o}),d=Lt().toLowerCase();n&&(u=m_(d)?yN:n),f_(d)&&(e=e||xN,c.scrollbars="yes");const g=Object.entries(c).reduce((y,[S,P])=>`${y}${S}=${P},`,"");if(FI(d)&&u!=="_self")return wN(e||"",u),new T0(null);const v=window.open(e||"",u,g);oe(v,t,"popup-blocked");try{v.focus()}catch{}return new T0(v)}function wN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN="__/auth/handler",EN="emulator/auth/handler",TN=encodeURIComponent("fac");async function I0(t,e,n,r,s,i){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bi,eventId:s};if(e instanceof T_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",uT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,v]of Object.entries({}))o[g]=v}if(e instanceof Nl){const g=e.getScopes().filter(v=>v!=="");g.length>0&&(o.scopes=g.join(","))}t.tenantId&&(o.tid=t.tenantId);const u=o;for(const g of Object.keys(u))u[g]===void 0&&delete u[g];const c=await t._getAppCheckToken(),d=c?`#${TN}=${encodeURIComponent(c)}`:"";return`${IN(t)}?${El(u).slice(1)}${d}`}function IN({config:t}){return t.emulator?Hp(t,EN):`https://${t.authDomain}/${bN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="webStorageSupport";class NN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=P_,this._completeRedirectFn=Y2,this._overrideRedirectResult=K2}async _openPopup(e,n,r,s){var i;Dr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await I0(e,n,r,bf(),s);return _N(e,o,Yp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await I0(e,n,r,bf(),s);return C2(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Dr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await pN(e),r=new J2(e);return n.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fh,{type:fh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[fh];o!==void 0&&n(!!o),Fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return __()||p_()||Kp()}}const SN=NN;var N0="@firebase/auth",S0="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AN(t){fi(new Ns("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:u}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:w_(t)},d=new HI(r,s,i,c);return e2(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fi(new Ns("auth-internal",e=>{const n=js(e.getProvider("auth").getImmediate());return(r=>new kN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),er(N0,S0,CN(t)),er(N0,S0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN=5*60,PN=Xx("authIdTokenMaxAge")||RN;let k0=null;const jN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>PN)return;const s=n==null?void 0:n.token;k0!==s&&(k0=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function DN(t=$p()){const e=ed(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZI(t,{popupRedirectResolver:SN,persistence:[V2,N2,P_]}),r=Xx("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=jN(i.toString());b2(n,o,()=>o(n.currentUser)),w2(n,u=>o(u))}}const s=Gx("auth");return s&&t2(n,`http://${s}`),n}function ON(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}WI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tr("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ON().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AN("Browser");var C0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var oi,F_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function T(){}T.prototype=_.prototype,E.D=_.prototype,E.prototype=new T,E.prototype.constructor=E,E.C=function(N,R,C){for(var b=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)b[Ae-2]=arguments[Ae];return _.prototype[R].apply(N,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,T){T||(T=0);var N=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)N[R]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(R=0;16>R;++R)N[R]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=E.g[0],T=E.g[1],R=E.g[2];var C=E.g[3],b=_+(C^T&(R^C))+N[0]+3614090360&4294967295;_=T+(b<<7&4294967295|b>>>25),b=C+(R^_&(T^R))+N[1]+3905402710&4294967295,C=_+(b<<12&4294967295|b>>>20),b=R+(T^C&(_^T))+N[2]+606105819&4294967295,R=C+(b<<17&4294967295|b>>>15),b=T+(_^R&(C^_))+N[3]+3250441966&4294967295,T=R+(b<<22&4294967295|b>>>10),b=_+(C^T&(R^C))+N[4]+4118548399&4294967295,_=T+(b<<7&4294967295|b>>>25),b=C+(R^_&(T^R))+N[5]+1200080426&4294967295,C=_+(b<<12&4294967295|b>>>20),b=R+(T^C&(_^T))+N[6]+2821735955&4294967295,R=C+(b<<17&4294967295|b>>>15),b=T+(_^R&(C^_))+N[7]+4249261313&4294967295,T=R+(b<<22&4294967295|b>>>10),b=_+(C^T&(R^C))+N[8]+1770035416&4294967295,_=T+(b<<7&4294967295|b>>>25),b=C+(R^_&(T^R))+N[9]+2336552879&4294967295,C=_+(b<<12&4294967295|b>>>20),b=R+(T^C&(_^T))+N[10]+4294925233&4294967295,R=C+(b<<17&4294967295|b>>>15),b=T+(_^R&(C^_))+N[11]+2304563134&4294967295,T=R+(b<<22&4294967295|b>>>10),b=_+(C^T&(R^C))+N[12]+1804603682&4294967295,_=T+(b<<7&4294967295|b>>>25),b=C+(R^_&(T^R))+N[13]+4254626195&4294967295,C=_+(b<<12&4294967295|b>>>20),b=R+(T^C&(_^T))+N[14]+2792965006&4294967295,R=C+(b<<17&4294967295|b>>>15),b=T+(_^R&(C^_))+N[15]+1236535329&4294967295,T=R+(b<<22&4294967295|b>>>10),b=_+(R^C&(T^R))+N[1]+4129170786&4294967295,_=T+(b<<5&4294967295|b>>>27),b=C+(T^R&(_^T))+N[6]+3225465664&4294967295,C=_+(b<<9&4294967295|b>>>23),b=R+(_^T&(C^_))+N[11]+643717713&4294967295,R=C+(b<<14&4294967295|b>>>18),b=T+(C^_&(R^C))+N[0]+3921069994&4294967295,T=R+(b<<20&4294967295|b>>>12),b=_+(R^C&(T^R))+N[5]+3593408605&4294967295,_=T+(b<<5&4294967295|b>>>27),b=C+(T^R&(_^T))+N[10]+38016083&4294967295,C=_+(b<<9&4294967295|b>>>23),b=R+(_^T&(C^_))+N[15]+3634488961&4294967295,R=C+(b<<14&4294967295|b>>>18),b=T+(C^_&(R^C))+N[4]+3889429448&4294967295,T=R+(b<<20&4294967295|b>>>12),b=_+(R^C&(T^R))+N[9]+568446438&4294967295,_=T+(b<<5&4294967295|b>>>27),b=C+(T^R&(_^T))+N[14]+3275163606&4294967295,C=_+(b<<9&4294967295|b>>>23),b=R+(_^T&(C^_))+N[3]+4107603335&4294967295,R=C+(b<<14&4294967295|b>>>18),b=T+(C^_&(R^C))+N[8]+1163531501&4294967295,T=R+(b<<20&4294967295|b>>>12),b=_+(R^C&(T^R))+N[13]+2850285829&4294967295,_=T+(b<<5&4294967295|b>>>27),b=C+(T^R&(_^T))+N[2]+4243563512&4294967295,C=_+(b<<9&4294967295|b>>>23),b=R+(_^T&(C^_))+N[7]+1735328473&4294967295,R=C+(b<<14&4294967295|b>>>18),b=T+(C^_&(R^C))+N[12]+2368359562&4294967295,T=R+(b<<20&4294967295|b>>>12),b=_+(T^R^C)+N[5]+4294588738&4294967295,_=T+(b<<4&4294967295|b>>>28),b=C+(_^T^R)+N[8]+2272392833&4294967295,C=_+(b<<11&4294967295|b>>>21),b=R+(C^_^T)+N[11]+1839030562&4294967295,R=C+(b<<16&4294967295|b>>>16),b=T+(R^C^_)+N[14]+4259657740&4294967295,T=R+(b<<23&4294967295|b>>>9),b=_+(T^R^C)+N[1]+2763975236&4294967295,_=T+(b<<4&4294967295|b>>>28),b=C+(_^T^R)+N[4]+1272893353&4294967295,C=_+(b<<11&4294967295|b>>>21),b=R+(C^_^T)+N[7]+4139469664&4294967295,R=C+(b<<16&4294967295|b>>>16),b=T+(R^C^_)+N[10]+3200236656&4294967295,T=R+(b<<23&4294967295|b>>>9),b=_+(T^R^C)+N[13]+681279174&4294967295,_=T+(b<<4&4294967295|b>>>28),b=C+(_^T^R)+N[0]+3936430074&4294967295,C=_+(b<<11&4294967295|b>>>21),b=R+(C^_^T)+N[3]+3572445317&4294967295,R=C+(b<<16&4294967295|b>>>16),b=T+(R^C^_)+N[6]+76029189&4294967295,T=R+(b<<23&4294967295|b>>>9),b=_+(T^R^C)+N[9]+3654602809&4294967295,_=T+(b<<4&4294967295|b>>>28),b=C+(_^T^R)+N[12]+3873151461&4294967295,C=_+(b<<11&4294967295|b>>>21),b=R+(C^_^T)+N[15]+530742520&4294967295,R=C+(b<<16&4294967295|b>>>16),b=T+(R^C^_)+N[2]+3299628645&4294967295,T=R+(b<<23&4294967295|b>>>9),b=_+(R^(T|~C))+N[0]+4096336452&4294967295,_=T+(b<<6&4294967295|b>>>26),b=C+(T^(_|~R))+N[7]+1126891415&4294967295,C=_+(b<<10&4294967295|b>>>22),b=R+(_^(C|~T))+N[14]+2878612391&4294967295,R=C+(b<<15&4294967295|b>>>17),b=T+(C^(R|~_))+N[5]+4237533241&4294967295,T=R+(b<<21&4294967295|b>>>11),b=_+(R^(T|~C))+N[12]+1700485571&4294967295,_=T+(b<<6&4294967295|b>>>26),b=C+(T^(_|~R))+N[3]+2399980690&4294967295,C=_+(b<<10&4294967295|b>>>22),b=R+(_^(C|~T))+N[10]+4293915773&4294967295,R=C+(b<<15&4294967295|b>>>17),b=T+(C^(R|~_))+N[1]+2240044497&4294967295,T=R+(b<<21&4294967295|b>>>11),b=_+(R^(T|~C))+N[8]+1873313359&4294967295,_=T+(b<<6&4294967295|b>>>26),b=C+(T^(_|~R))+N[15]+4264355552&4294967295,C=_+(b<<10&4294967295|b>>>22),b=R+(_^(C|~T))+N[6]+2734768916&4294967295,R=C+(b<<15&4294967295|b>>>17),b=T+(C^(R|~_))+N[13]+1309151649&4294967295,T=R+(b<<21&4294967295|b>>>11),b=_+(R^(T|~C))+N[4]+4149444226&4294967295,_=T+(b<<6&4294967295|b>>>26),b=C+(T^(_|~R))+N[11]+3174756917&4294967295,C=_+(b<<10&4294967295|b>>>22),b=R+(_^(C|~T))+N[2]+718787259&4294967295,R=C+(b<<15&4294967295|b>>>17),b=T+(C^(R|~_))+N[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(R+(b<<21&4294967295|b>>>11))&4294967295,E.g[2]=E.g[2]+R&4294967295,E.g[3]=E.g[3]+C&4294967295}r.prototype.u=function(E,_){_===void 0&&(_=E.length);for(var T=_-this.blockSize,N=this.B,R=this.h,C=0;C<_;){if(R==0)for(;C<=T;)s(this,E,C),C+=this.blockSize;if(typeof E=="string"){for(;C<_;)if(N[R++]=E.charCodeAt(C++),R==this.blockSize){s(this,N),R=0;break}}else for(;C<_;)if(N[R++]=E[C++],R==this.blockSize){s(this,N),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;var T=8*this.o;for(_=E.length-8;_<E.length;++_)E[_]=T&255,T/=256;for(this.u(E),E=Array(16),_=T=0;4>_;++_)for(var N=0;32>N;N+=8)E[T++]=this.g[_]>>>N&255;return E};function i(E,_){var T=u;return Object.prototype.hasOwnProperty.call(T,E)?T[E]:T[E]=_(E)}function o(E,_){this.h=_;for(var T=[],N=!0,R=E.length-1;0<=R;R--){var C=E[R]|0;N&&C==_||(T[R]=C,N=!1)}this.g=T}var u={};function c(E){return-128<=E&&128>E?i(E,function(_){return new o([_|0],0>_?-1:0)}):new o([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return v;if(0>E)return V(d(-E));for(var _=[],T=1,N=0;E>=T;N++)_[N]=E/T|0,T*=4294967296;return new o(_,0)}function g(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return V(g(E.substring(1),_));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=d(Math.pow(_,8)),N=v,R=0;R<E.length;R+=8){var C=Math.min(8,E.length-R),b=parseInt(E.substring(R,R+C),_);8>C?(C=d(Math.pow(_,C)),N=N.j(C).add(d(b))):(N=N.j(T),N=N.add(d(b)))}return N}var v=c(0),y=c(1),S=c(16777216);t=o.prototype,t.m=function(){if(j(this))return-V(this).m();for(var E=0,_=1,T=0;T<this.g.length;T++){var N=this.i(T);E+=(0<=N?N:4294967296+N)*_,_*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(j(this))return"-"+V(this).toString(E);for(var _=d(Math.pow(E,6)),T=this,N="";;){var R=F(T,_).g;T=w(T,R.j(_));var C=((0<T.g.length?T.g[0]:T.h)>>>0).toString(E);if(T=R,P(T))return C+N;for(;6>C.length;)C="0"+C;N=C+N}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function j(E){return E.h==-1}t.l=function(E){return E=w(this,E),j(E)?-1:P(E)?0:1};function V(E){for(var _=E.g.length,T=[],N=0;N<_;N++)T[N]=~E.g[N];return new o(T,~E.h).add(y)}t.abs=function(){return j(this)?V(this):this},t.add=function(E){for(var _=Math.max(this.g.length,E.g.length),T=[],N=0,R=0;R<=_;R++){var C=N+(this.i(R)&65535)+(E.i(R)&65535),b=(C>>>16)+(this.i(R)>>>16)+(E.i(R)>>>16);N=b>>>16,C&=65535,b&=65535,T[R]=b<<16|C}return new o(T,T[T.length-1]&-2147483648?-1:0)};function w(E,_){return E.add(V(_))}t.j=function(E){if(P(this)||P(E))return v;if(j(this))return j(E)?V(this).j(V(E)):V(V(this).j(E));if(j(E))return V(this.j(V(E)));if(0>this.l(S)&&0>E.l(S))return d(this.m()*E.m());for(var _=this.g.length+E.g.length,T=[],N=0;N<2*_;N++)T[N]=0;for(N=0;N<this.g.length;N++)for(var R=0;R<E.g.length;R++){var C=this.i(N)>>>16,b=this.i(N)&65535,Ae=E.i(R)>>>16,Qe=E.i(R)&65535;T[2*N+2*R]+=b*Qe,I(T,2*N+2*R),T[2*N+2*R+1]+=C*Qe,I(T,2*N+2*R+1),T[2*N+2*R+1]+=b*Ae,I(T,2*N+2*R+1),T[2*N+2*R+2]+=C*Ae,I(T,2*N+2*R+2)}for(N=0;N<_;N++)T[N]=T[2*N+1]<<16|T[2*N];for(N=_;N<2*_;N++)T[N]=0;return new o(T,0)};function I(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function A(E,_){this.g=E,this.h=_}function F(E,_){if(P(_))throw Error("division by zero");if(P(E))return new A(v,v);if(j(E))return _=F(V(E),_),new A(V(_.g),V(_.h));if(j(_))return _=F(E,V(_)),new A(V(_.g),_.h);if(30<E.g.length){if(j(E)||j(_))throw Error("slowDivide_ only works with positive integers.");for(var T=y,N=_;0>=N.l(E);)T=M(T),N=M(N);var R=z(T,1),C=z(N,1);for(N=z(N,2),T=z(T,2);!P(N);){var b=C.add(N);0>=b.l(E)&&(R=R.add(T),C=b),N=z(N,1),T=z(T,1)}return _=w(E,R.j(_)),new A(R,_)}for(R=v;0<=E.l(_);){for(T=Math.max(1,Math.floor(E.m()/_.m())),N=Math.ceil(Math.log(T)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),C=d(T),b=C.j(_);j(b)||0<b.l(E);)T-=N,C=d(T),b=C.j(_);P(C)&&(C=y),R=R.add(C),E=w(E,b)}return new A(R,E)}t.A=function(E){return F(this,E).h},t.and=function(E){for(var _=Math.max(this.g.length,E.g.length),T=[],N=0;N<_;N++)T[N]=this.i(N)&E.i(N);return new o(T,this.h&E.h)},t.or=function(E){for(var _=Math.max(this.g.length,E.g.length),T=[],N=0;N<_;N++)T[N]=this.i(N)|E.i(N);return new o(T,this.h|E.h)},t.xor=function(E){for(var _=Math.max(this.g.length,E.g.length),T=[],N=0;N<_;N++)T[N]=this.i(N)^E.i(N);return new o(T,this.h^E.h)};function M(E){for(var _=E.g.length+1,T=[],N=0;N<_;N++)T[N]=E.i(N)<<1|E.i(N-1)>>>31;return new o(T,E.h)}function z(E,_){var T=_>>5;_%=32;for(var N=E.g.length-T,R=[],C=0;C<N;C++)R[C]=0<_?E.i(C+T)>>>_|E.i(C+T+1)<<32-_:E.i(C+T);return new o(R,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,F_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=g,oi=o}).apply(typeof C0<"u"?C0:typeof self<"u"?self:typeof window<"u"?window:{});var yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var U_,Na,z_,zu,If,$_,B_,q_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof yu=="object"&&yu];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var x=0;x<a.length-1;x++){var O=a[x];if(!(O in p))break e;p=p[O]}a=a[a.length-1],x=p[a],h=h(x),h!=x&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var p=0,x=!1,O={next:function(){if(!x&&p<a.length){var U=p++;return{value:h(U,a[U]),done:!1}}return x=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},u=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function d(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function g(a,h,p){return a.call.apply(a.bind,arguments)}function v(a,h,p){if(!a)throw Error();if(2<arguments.length){var x=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,x),a.apply(h,O)}}return function(){return a.apply(h,arguments)}}function y(a,h,p){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:v,y.apply(null,arguments)}function S(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var x=p.slice();return x.push.apply(x,arguments),a.apply(this,x)}}function P(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(x,O,U){for(var Y=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)Y[Ce-2]=arguments[Ce];return h.prototype[O].apply(x,Y)}}function j(a){const h=a.length;if(0<h){const p=Array(h);for(let x=0;x<h;x++)p[x]=a[x];return p}return[]}function V(a,h){for(let p=1;p<arguments.length;p++){const x=arguments[p];if(c(x)){const O=a.length||0,U=x.length||0;a.length=O+U;for(let Y=0;Y<U;Y++)a[O+Y]=x[Y]}else a.push(x)}}class w{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function I(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=u.navigator;return a&&(a=a.userAgent)?a:""}function F(a){return F[" "](a),a}F[" "]=function(){};var M=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function z(a,h,p){for(const x in a)h.call(p,a[x],x,a)}function E(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function _(a){const h={};for(const p in a)h[p]=a[p];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(a,h){let p,x;for(let O=1;O<arguments.length;O++){x=arguments[O];for(p in x)a[p]=x[p];for(let U=0;U<T.length;U++)p=T[U],Object.prototype.hasOwnProperty.call(x,p)&&(a[p]=x[p])}}function R(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function C(a){u.setTimeout(()=>{throw a},0)}function b(){var a=ie;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ae{constructor(){this.h=this.g=null}add(h,p){const x=Qe.get();x.set(h,p),this.h?this.h.next=x:this.g=x,this.h=x}}var Qe=new w(()=>new Os,a=>a.reset());class Os{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let pt,X=!1,ie=new Ae,ae=()=>{const a=u.Promise.resolve(void 0);pt=()=>{a.then(je)}};var je=()=>{for(var a;a=b();){try{a.h.call(a.g)}catch(p){C(p)}var h=Qe;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}X=!1};function _e(){this.s=this.s,this.C=this.C}_e.prototype.s=!1,_e.prototype.ma=function(){this.s||(this.s=!0,this.N())},_e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var It=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};u.addEventListener("test",p,h),u.removeEventListener("test",p,h)}catch{}return a}();function dn(a,h){if(Ue.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,x=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(M){e:{try{F(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,x?(this.clientX=x.clientX!==void 0?x.clientX:x.pageX,this.clientY=x.clientY!==void 0?x.clientY:x.pageY,this.screenX=x.screenX||0,this.screenY=x.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ye[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&dn.aa.h.call(this)}}P(dn,Ue);var Ye={2:"touch",3:"pen",4:"mouse"};dn.prototype.h=function(){dn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var En="closure_listenable_"+(1e6*Math.random()|0),Ls=0;function bd(a,h,p,x,O){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!x,this.ha=O,this.key=++Ls,this.da=this.fa=!1}function Un(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ni(a){this.src=a,this.g={},this.h=0}Ni.prototype.add=function(a,h,p,x,O){var U=a.toString();a=this.g[U],a||(a=this.g[U]=[],this.h++);var Y=Ho(a,h,x,O);return-1<Y?(h=a[Y],p||(h.fa=!1)):(h=new bd(h,this.src,U,!!x,O),h.fa=p,a.push(h)),h};function ur(a,h){var p=h.type;if(p in a.g){var x=a.g[p],O=Array.prototype.indexOf.call(x,h,void 0),U;(U=0<=O)&&Array.prototype.splice.call(x,O,1),U&&(Un(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Ho(a,h,p,x){for(var O=0;O<a.length;++O){var U=a[O];if(!U.da&&U.listener==h&&U.capture==!!p&&U.ha==x)return O}return-1}var cr="closure_lm_"+(1e6*Math.random()|0),zr={};function $r(a,h,p,x,O){if(Array.isArray(h)){for(var U=0;U<h.length;U++)$r(a,h[U],p,x,O);return null}return p=Vs(p),a&&a[En]?a.K(h,p,d(x)?!!x.capture:!1,O):Si(a,h,p,!1,x,O)}function Si(a,h,p,x,O,U){if(!h)throw Error("Invalid event type");var Y=d(O)?!!O.capture:!!O,Ce=dr(a);if(Ce||(a[cr]=Ce=new Ni(a)),p=Ce.add(h,p,x,Y,U),p.proxy)return p;if(x=ki(),p.proxy=x,x.src=a,x.listener=p,a.addEventListener)It||(O=Y),O===void 0&&(O=!1),a.addEventListener(h.toString(),x,O);else if(a.attachEvent)a.attachEvent(Ms(h.toString()),x);else if(a.addListener&&a.removeListener)a.addListener(x);else throw Error("addEventListener and attachEvent are unavailable.");return p}function ki(){function a(p){return h.call(a.src,a.listener,p)}const h=zn;return a}function Ci(a,h,p,x,O){if(Array.isArray(h))for(var U=0;U<h.length;U++)Ci(a,h[U],p,x,O);else x=d(x)?!!x.capture:!!x,p=Vs(p),a&&a[En]?(a=a.i,h=String(h).toString(),h in a.g&&(U=a.g[h],p=Ho(U,p,x,O),-1<p&&(Un(U[p]),Array.prototype.splice.call(U,p,1),U.length==0&&(delete a.g[h],a.h--)))):a&&(a=dr(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ho(h,p,x,O)),(p=-1<a?h[a]:null)&&Ai(p))}function Ai(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[En])ur(h.i,a);else{var p=a.type,x=a.proxy;h.removeEventListener?h.removeEventListener(p,x,a.capture):h.detachEvent?h.detachEvent(Ms(p),x):h.addListener&&h.removeListener&&h.removeListener(x),(p=dr(h))?(ur(p,a),p.h==0&&(p.src=null,h[cr]=null)):Un(a)}}}function Ms(a){return a in zr?zr[a]:zr[a]="on"+a}function zn(a,h){if(a.da)a=!0;else{h=new dn(h,this);var p=a.listener,x=a.ha||a.src;a.fa&&Ai(a),a=p.call(x,h)}return a}function dr(a){return a=a[cr],a instanceof Ni?a:null}var Ri="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vs(a){return typeof a=="function"?a:(a[Ri]||(a[Ri]=function(h){return a.handleEvent(h)}),a[Ri])}function Ke(){_e.call(this),this.i=new Ni(this),this.M=this,this.F=null}P(Ke,_e),Ke.prototype[En]=!0,Ke.prototype.removeEventListener=function(a,h,p,x){Ci(this,a,h,p,x)};function ut(a,h){var p,x=a.F;if(x)for(p=[];x;x=x.F)p.push(x);if(a=a.M,x=h.type||h,typeof h=="string")h=new Ue(h,a);else if(h instanceof Ue)h.target=h.target||a;else{var O=h;h=new Ue(x,a),N(h,O)}if(O=!0,p)for(var U=p.length-1;0<=U;U--){var Y=h.g=p[U];O=hr(Y,x,!0,h)&&O}if(Y=h.g=a,O=hr(Y,x,!0,h)&&O,O=hr(Y,x,!1,h)&&O,p)for(U=0;U<p.length;U++)Y=h.g=p[U],O=hr(Y,x,!1,h)&&O}Ke.prototype.N=function(){if(Ke.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],x=0;x<p.length;x++)Un(p[x]);delete a.g[h],a.h--}}this.F=null},Ke.prototype.K=function(a,h,p,x){return this.i.add(String(a),h,!1,p,x)},Ke.prototype.L=function(a,h,p,x){return this.i.add(String(a),h,!0,p,x)};function hr(a,h,p,x){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,U=0;U<h.length;++U){var Y=h[U];if(Y&&!Y.da&&Y.capture==p){var Ce=Y.listener,mt=Y.ha||Y.src;Y.fa&&ur(a.i,Y),O=Ce.call(mt,x)!==!1&&O}}return O&&!x.defaultPrevented}function hn(a,h,p){if(typeof a=="function")p&&(a=y(a,p));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:u.setTimeout(a,h||0)}function Pi(a){a.g=hn(()=>{a.g=null,a.i&&(a.i=!1,Pi(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class $n extends _e{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Pi(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Br(a){_e.call(this),this.h=a,this.g={}}P(Br,_e);var fr=[];function en(a){z(a.g,function(h,p){this.g.hasOwnProperty(p)&&Ai(h)},a),a.g={}}Br.prototype.N=function(){Br.aa.N.call(this),en(this)},Br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ve=u.JSON.stringify,tn=u.JSON.parse,Fs=class{stringify(a){return u.JSON.stringify(a,void 0)}parse(a){return u.JSON.parse(a,void 0)}};function pr(){}pr.prototype.h=null;function Wo(a){return a.h||(a.h=a.i())}function ji(){}var Bn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function qr(){Ue.call(this,"d")}P(qr,Ue);function Us(){Ue.call(this,"c")}P(Us,Ue);var Tn={},Di=null;function Hr(){return Di=Di||new Ke}Tn.La="serverreachability";function D(a){Ue.call(this,Tn.La,a)}P(D,Ue);function ee(a){const h=Hr();ut(h,new D(h))}Tn.STAT_EVENT="statevent";function fe(a,h){Ue.call(this,Tn.STAT_EVENT,a),this.stat=h}P(fe,Ue);function Ee(a){const h=Hr();ut(h,new fe(h,a))}Tn.Ma="timingevent";function Mt(a,h){Ue.call(this,Tn.Ma,a),this.size=h}P(Mt,Ue);function fn(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){a()},h)}function mr(){this.g=!0}mr.prototype.xa=function(){this.g=!1};function Ko(a,h,p,x,O,U){a.info(function(){if(a.g)if(U)for(var Y="",Ce=U.split("&"),mt=0;mt<Ce.length;mt++){var Te=Ce[mt].split("=");if(1<Te.length){var St=Te[0];Te=Te[1];var kt=St.split("_");Y=2<=kt.length&&kt[1]=="type"?Y+(St+"="+Te+"&"):Y+(St+"=redacted&")}}else Y=null;else Y=U;return"XMLHTTP REQ ("+x+") [attempt "+O+"]: "+h+`
`+p+`
`+Y})}function Oi(a,h,p,x,O,U,Y){a.info(function(){return"XMLHTTP RESP ("+x+") [ attempt "+O+"]: "+h+`
`+p+`
`+U+" "+Y})}function Wr(a,h,p,x){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Ed(a,p)+(x?" "+x:"")})}function Go(a,h){a.info(function(){return"TIMEOUT: "+h})}mr.prototype.info=function(){};function Ed(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var x=p[a];if(!(2>x.length)){var O=x[1];if(Array.isArray(O)&&!(1>O.length)){var U=O[0];if(U!="noop"&&U!="stop"&&U!="close")for(var Y=1;Y<O.length;Y++)O[Y]=""}}}}return ve(p)}catch{return h}}var zs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ol={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},st;function qn(){}P(qn,pr),qn.prototype.g=function(){return new XMLHttpRequest},qn.prototype.i=function(){return{}},st=new qn;function ze(a,h,p,x){this.j=a,this.i=h,this.l=p,this.R=x||1,this.U=new Br(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Kr}function Kr(){this.i=null,this.g="",this.h=!1}var Td={},Ll={};function Gr(a,h,p){a.L=1,a.v=qs(Vt(h)),a.m=p,a.P=!0,Qo(a,null)}function Qo(a,h){a.F=Date.now(),$s(a),a.A=Vt(a.v);var p=a.A,x=a.R;Array.isArray(x)||(x=[String(x)]),Gl(p.i,"t",x),a.C=0,p=a.j.J,a.h=new Kr,a.g=Fm(a.j,p?h:null,!a.m),0<a.O&&(a.M=new $n(y(a.Y,a,a.g),a.O)),h=a.U,p=a.g,x=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(fr[0]=O.toString()),O=fr);for(var U=0;U<O.length;U++){var Y=$r(p,O[U],x||h.handleEvent,!1,h.h||h);if(!Y)break;h.g[Y.key]=Y}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ee(),Ko(a.i,a.u,a.A,a.l,a.R,a.m)}ze.prototype.ca=function(a){a=a.target;const h=this.M;h&&L(a)==3?h.j():this.Y(a)},ze.prototype.Y=function(a){try{if(a==this.g)e:{const kt=L(this.g);var h=this.g.Ba();const $i=this.g.Z();if(!(3>kt)&&(kt!=3||this.g&&(this.h.h||this.g.oa()||$(this.g)))){this.J||kt!=4||h==7||(h==8||0>=$i?ee(3):ee(2)),he(this);var p=this.g.Z();this.X=p;t:if(Ml(this)){var x=$(this.g);a="";var O=x.length,U=L(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gr(this),et(this);var Y="";break t}this.h.i=new u.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,a+=this.h.i.decode(x[h],{stream:!(U&&h==O-1)});x.length=0,this.h.g+=a,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=p==200,Oi(this.i,this.u,this.A,this.l,this.R,kt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ce,mt=this.g;if((Ce=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(Ce)){var Te=Ce;break t}}Te=null}if(p=Te)Wr(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xo(this,p);else{this.o=!1,this.s=3,Ee(12),gr(this),et(this);break e}}if(this.P){p=!0;let Rn;for(;!this.J&&this.C<Y.length;)if(Rn=Id(this,Y),Rn==Ll){kt==4&&(this.s=4,Ee(14),p=!1),Wr(this.i,this.l,null,"[Incomplete Response]");break}else if(Rn==Td){this.s=4,Ee(15),Wr(this.i,this.l,Y,"[Invalid Chunk]"),p=!1;break}else Wr(this.i,this.l,Rn,null),Xo(this,Rn);if(Ml(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),kt!=4||Y.length!=0||this.h.h||(this.s=1,Ee(16),p=!1),this.o=this.o&&p,!p)Wr(this.i,this.l,Y,"[Invalid Chunked Response]"),gr(this),et(this);else if(0<Y.length&&!this.W){this.W=!0;var St=this.j;St.g==this&&St.ba&&!St.M&&(St.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),Xr(St),St.M=!0,Ee(11))}}else Wr(this.i,this.l,Y,null),Xo(this,Y);kt==4&&gr(this),this.o&&!this.J&&(kt==4?Xl(this.j,this):(this.o=!1,$s(this)))}else G(this.g),p==400&&0<Y.indexOf("Unknown SID")?(this.s=3,Ee(12)):(this.s=0,Ee(13)),gr(this),et(this)}}}catch{}finally{}};function Ml(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Id(a,h){var p=a.C,x=h.indexOf(`
`,p);return x==-1?Ll:(p=Number(h.substring(p,x)),isNaN(p)?Td:(x+=1,x+p>h.length?Ll:(h=h.slice(x,x+p),a.C=x+p,h)))}ze.prototype.cancel=function(){this.J=!0,gr(this)};function $s(a){a.S=Date.now()+a.I,Yo(a,a.I)}function Yo(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=fn(y(a.ba,a),h)}function he(a){a.B&&(u.clearTimeout(a.B),a.B=null)}ze.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Go(this.i,this.A),this.L!=2&&(ee(),Ee(17)),gr(this),this.s=2,et(this)):Yo(this,this.S-a)};function et(a){a.j.G==0||a.J||Xl(a.j,a)}function gr(a){he(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,en(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Xo(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||Zo(p.h,a))){if(!a.K&&Zo(p.h,a)&&p.G==3){try{var x=p.Da.g.parse(h)}catch{x=null}if(Array.isArray(x)&&x.length==3){var O=x;if(O[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Ui(p),Re(p);else break e;Fi(p),Ee(18)}}else p.za=O[1],0<p.za-p.T&&37500>O[2]&&p.F&&p.v==0&&!p.C&&(p.C=fn(y(p.Za,p),6e3));if(1>=Jo(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else An(p,11)}else if((a.K||p.g==a)&&Ui(p),!I(h))for(O=p.Da.g.parse(h),h=0;h<O.length;h++){let Te=O[h];if(p.T=Te[0],Te=Te[1],p.G==2)if(Te[0]=="c"){p.K=Te[1],p.ia=Te[2];const St=Te[3];St!=null&&(p.la=St,p.j.info("VER="+p.la));const kt=Te[4];kt!=null&&(p.Aa=kt,p.j.info("SVER="+p.Aa));const $i=Te[5];$i!=null&&typeof $i=="number"&&0<$i&&(x=1.5*$i,p.L=x,p.j.info("backChannelRequestTimeoutMs_="+x)),x=p;const Rn=a.g;if(Rn){const Zl=Rn.g?Rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zl){var U=x.h;U.g||Zl.indexOf("spdy")==-1&&Zl.indexOf("quic")==-1&&Zl.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(ea(U,U.h),U.h=null))}if(x.D){const Dd=Rn.g?Rn.g.getResponseHeader("X-HTTP-Session-Id"):null;Dd&&(x.ya=Dd,we(x.I,x.D,Dd))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),x=p;var Y=a;if(x.qa=Vm(x,x.J?x.ia:null,x.W),Y.K){ta(x.h,Y);var Ce=Y,mt=x.L;mt&&(Ce.I=mt),Ce.B&&(he(Ce),$s(Ce)),x.g=Y}else Ys(x);0<p.i.length&&Nt(p)}else Te[0]!="stop"&&Te[0]!="close"||An(p,7);else p.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?An(p,7):se(p):Te[0]!="noop"&&p.l&&p.l.ta(Te),p.v=0)}}ee(4)}catch{}}var Qr=class{constructor(a,h){this.g=a,this.map=h}};function Vl(a){this.l=a||10,u.PerformanceNavigationTiming?(a=u.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Jo(a){return a.h?1:a.g?a.g.size:0}function Zo(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ea(a,h){a.g?a.g.add(h):a.h=h}function ta(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Vl.prototype.cancel=function(){if(this.i=na(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function na(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return j(a.i)}function Ul(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],p=a.length,x=0;x<p;x++)h.push(a[x]);return h}h=[],p=0;for(x in a)h[p++]=a[x];return h}function zl(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const x in a)h[p++]=x;return h}}}function ra(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=zl(a),x=Ul(a),O=x.length,U=0;U<O;U++)h.call(void 0,x[U],p&&p[U],a)}var sa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $l(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var x=a[p].indexOf("="),O=null;if(0<=x){var U=a[p].substring(0,x);O=a[p].substring(x+1)}else U=a[p];h(U,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function pe(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof pe){this.h=a.h,qt(this,a.j),this.o=a.o,this.g=a.g,Bs(this,a.s),this.l=a.l;var h=a.i,p=new Ws;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),In(this,p),this.m=a.m}else a&&(h=String(a).match(sa))?(this.h=!1,qt(this,h[1]||"",!0),this.o=Nn(h[2]||""),this.g=Nn(h[3]||"",!0),Bs(this,h[4]),this.l=Nn(h[5]||"",!0),In(this,h[6]||"",!0),this.m=Nn(h[7]||"")):(this.h=!1,this.i=new Ws(null,this.h))}pe.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Hs(h,ql,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Hs(h,ql,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Hs(p,p.charAt(0)=="/"?Nd:Hl,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Hs(p,Sd)),a.join("")};function Vt(a){return new pe(a)}function qt(a,h,p){a.j=p?Nn(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Bs(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function In(a,h,p){h instanceof Ws?(a.i=h,Mi(a.i,a.h)):(p||(h=Hs(h,Wl)),a.i=new Ws(h,a.h))}function we(a,h,p){a.i.set(h,p)}function qs(a){return we(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Nn(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Hs(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,Bl),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Bl(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ql=/[#\/\?@]/g,Hl=/[#\?:]/g,Nd=/[#\?]/g,Wl=/[#\?@]/g,Sd=/#/g;function Ws(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Hn(a){a.g||(a.g=new Map,a.h=0,a.i&&$l(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Ws.prototype,t.add=function(a,h){Hn(this),this.i=null,a=Yr(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function Li(a,h){Hn(a),h=Yr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Kl(a,h){return Hn(a),h=Yr(a,h),a.g.has(h)}t.forEach=function(a,h){Hn(this),this.g.forEach(function(p,x){p.forEach(function(O){a.call(h,O,x,this)},this)},this)},t.na=function(){Hn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let x=0;x<h.length;x++){const O=a[x];for(let U=0;U<O.length;U++)p.push(h[x])}return p},t.V=function(a){Hn(this);let h=[];if(typeof a=="string")Kl(this,a)&&(h=h.concat(this.g.get(Yr(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return Hn(this),this.i=null,a=Yr(this,a),Kl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Gl(a,h,p){Li(a,h),0<p.length&&(a.i=null,a.g.set(Yr(a,h),j(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var x=h[p];const U=encodeURIComponent(String(x)),Y=this.V(x);for(x=0;x<Y.length;x++){var O=U;Y[x]!==""&&(O+="="+encodeURIComponent(String(Y[x]))),a.push(O)}}return this.i=a.join("&")};function Yr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Mi(a,h){h&&!a.j&&(Hn(a),a.i=null,a.g.forEach(function(p,x){var O=x.toLowerCase();x!=O&&(Li(this,x),Gl(this,O,p))},a)),a.j=h}function kd(a,h){const p=new mr;if(u.Image){const x=new Image;x.onload=S(Sn,p,"TestLoadImage: loaded",!0,h,x),x.onerror=S(Sn,p,"TestLoadImage: error",!1,h,x),x.onabort=S(Sn,p,"TestLoadImage: abort",!1,h,x),x.ontimeout=S(Sn,p,"TestLoadImage: timeout",!1,h,x),u.setTimeout(function(){x.ontimeout&&x.ontimeout()},1e4),x.src=a}else h(!1)}function Cd(a,h){const p=new mr,x=new AbortController,O=setTimeout(()=>{x.abort(),Sn(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:x.signal}).then(U=>{clearTimeout(O),U.ok?Sn(p,"TestPingServer: ok",!0,h):Sn(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Sn(p,"TestPingServer: error",!1,h)})}function Sn(a,h,p,x,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),x(p)}catch{}}function Ad(){this.g=new Fs}function Ks(a,h,p){const x=p||"";try{ra(a,function(O,U){let Y=O;d(O)&&(Y=ve(O)),h.push(x+U+"="+encodeURIComponent(Y))})}catch(O){throw h.push(x+"type="+encodeURIComponent("_badmap")),O}}function Gs(a){this.l=a.Ub||null,this.j=a.eb||!1}P(Gs,pr),Gs.prototype.g=function(){return new Vi(this.l,this.j)},Gs.prototype.i=function(a){return function(){return a}}({});function Vi(a,h){Ke.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Vi,Ke),t=Vi.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Qs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||u).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vr(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Qs(this)),this.g&&(this.readyState=3,Qs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ql(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ql(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?vr(this):Qs(this),this.readyState==3&&Ql(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,vr(this))},t.Qa=function(a){this.g&&(this.response=a,vr(this))},t.ga=function(){this.g&&vr(this)};function vr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Qs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Qs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Yl(a){let h="";return z(a,function(p,x){h+=x,h+=":",h+=p,h+=`\r
`}),h}function ia(a,h,p){e:{for(x in p){var x=!1;break e}x=!0}x||(p=Yl(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):we(a,h,p))}function Le(a){Ke.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Le,Ke);var Rd=/^https?$/i,Pd=["POST","PUT"];t=Le.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,x){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():st.g(),this.v=this.o?Wo(this.o):Wo(st),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(U){oa(this,U);return}if(a=p||"",p=new Map(this.headers),x)if(Object.getPrototypeOf(x)===Object.prototype)for(var O in x)p.set(O,x[O]);else if(typeof x.keys=="function"&&typeof x.get=="function")for(const U of x.keys())p.set(U,x.get(U));else throw Error("Unknown input type for opt_headers: "+String(x));x=Array.from(p.keys()).find(U=>U.toLowerCase()=="content-type"),O=u.FormData&&a instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Pd,h,void 0))||x||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,Y]of p)this.g.setRequestHeader(U,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{k(this),this.u=!0,this.g.send(a),this.u=!1}catch(U){oa(this,U)}};function oa(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,aa(a),m(a)}function aa(a){a.A||(a.A=!0,ut(a,"complete"),ut(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ut(this,"complete"),ut(this,"abort"),m(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),m(this,!0)),Le.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?f(this):this.bb())},t.bb=function(){f(this)};function f(a){if(a.h&&typeof o<"u"&&(!a.v[1]||L(a)!=4||a.Z()!=2)){if(a.u&&L(a)==4)hn(a.Ea,0,a);else if(ut(a,"readystatechange"),L(a)==4){a.h=!1;try{const Y=a.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var x;if(x=Y===0){var O=String(a.D).match(sa)[1]||null;!O&&u.self&&u.self.location&&(O=u.self.location.protocol.slice(0,-1)),x=!Rd.test(O?O.toLowerCase():"")}p=x}if(p)ut(a,"complete"),ut(a,"success");else{a.m=6;try{var U=2<L(a)?a.g.statusText:""}catch{U=""}a.l=U+" ["+a.Z()+"]",aa(a)}}finally{m(a)}}}}function m(a,h){if(a.g){k(a);const p=a.g,x=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ut(a,"ready");try{p.onreadystatechange=x}catch{}}}function k(a){a.I&&(u.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function L(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<L(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),tn(h)}};function $(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function G(a){const h={};a=(a.g&&2<=L(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let x=0;x<a.length;x++){if(I(a[x]))continue;var p=R(a[x]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const U=h[O]||[];h[O]=U,U.push(p)}E(h,function(x){return x.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function W(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Q(a){this.Aa=0,this.i=[],this.j=new mr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=W("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=W("baseRetryDelayMs",5e3,a),this.cb=W("retryDelaySeedMs",1e4,a),this.Wa=W("forwardChannelMaxRetries",2,a),this.wa=W("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Vl(a&&a.concurrentRequestLimit),this.Da=new Ad,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Q.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,x){Ee(0),this.W=a,this.H=h||{},p&&x!==void 0&&(this.H.OSID=p,this.H.OAID=x),this.F=this.X,this.I=Vm(this,null,this.W),Nt(this)};function se(a){if(Me(a),a.G==3){var h=a.U++,p=Vt(a.I);if(we(p,"SID",a.K),we(p,"RID",h),we(p,"TYPE","terminate"),ue(a,p),h=new ze(a,a.j,h),h.L=2,h.v=qs(Vt(p)),p=!1,u.navigator&&u.navigator.sendBeacon)try{p=u.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&u.Image&&(new Image().src=h.v,p=!0),p||(h.g=Fm(h.j,null),h.g.ea(h.v)),h.F=Date.now(),$s(h)}Mm(a)}function Re(a){a.g&&(Xr(a),a.g.cancel(),a.g=null)}function Me(a){Re(a),a.u&&(u.clearTimeout(a.u),a.u=null),Ui(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&u.clearTimeout(a.s),a.s=null)}function Nt(a){if(!Fl(a.h)&&!a.s){a.s=!0;var h=a.Ga;pt||ae(),X||(pt(),X=!0),ie.add(h,a),a.B=0}}function kn(a,h){return Jo(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=fn(y(a.Ga,a,h),Ht(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new ze(this,this.j,a);let U=this.o;if(this.S&&(U?(U=_(U),N(U,this.S)):U=this.S),this.m!==null||this.O||(O.H=U,U=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var x=this.i[p];if("__data__"in x.map&&(x=x.map.__data__,typeof x=="string")){x=x.length;break t}x=void 0}if(x===void 0)break;if(h+=x,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Cn(this,O,h),p=Vt(this.I),we(p,"RID",a),we(p,"CVER",22),this.D&&we(p,"X-HTTP-Session-Id",this.D),ue(this,p),U&&(this.O?h="headers="+encodeURIComponent(String(Yl(U)))+"&"+h:this.m&&ia(p,this.m,U)),ea(this.h,O),this.Ua&&we(p,"TYPE","init"),this.P?(we(p,"$req",h),we(p,"SID","null"),O.T=!0,Gr(O,p,null)):Gr(O,p,h),this.G=2}}else this.G==3&&(a?tt(this,a):this.i.length==0||Fl(this.h)||tt(this))};function tt(a,h){var p;h?p=h.l:p=a.U++;const x=Vt(a.I);we(x,"SID",a.K),we(x,"RID",p),we(x,"AID",a.T),ue(a,x),a.m&&a.o&&ia(x,a.m,a.o),p=new ze(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Cn(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ea(a.h,p),Gr(p,x,h)}function ue(a,h){a.H&&z(a.H,function(p,x){we(h,x,p)}),a.l&&ra({},function(p,x){we(h,x,p)})}function Cn(a,h,p){p=Math.min(a.i.length,p);var x=a.l?y(a.l.Na,a.l,a):null;e:{var O=a.i;let U=-1;for(;;){const Y=["count="+p];U==-1?0<p?(U=O[0].g,Y.push("ofs="+U)):U=0:Y.push("ofs="+U);let Ce=!0;for(let mt=0;mt<p;mt++){let Te=O[mt].g;const St=O[mt].map;if(Te-=U,0>Te)U=Math.max(0,O[mt].g-100),Ce=!1;else try{Ks(St,Y,"req"+Te+"_")}catch{x&&x(St)}}if(Ce){x=Y.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,x}function Ys(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;pt||ae(),X||(pt(),X=!0),ie.add(h,a),a.v=0}}function Fi(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=fn(y(a.Fa,a),Ht(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,jd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=fn(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ee(10),Re(this),jd(this))};function Xr(a){a.A!=null&&(u.clearTimeout(a.A),a.A=null)}function jd(a){a.g=new ze(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Vt(a.qa);we(h,"RID","rpc"),we(h,"SID",a.K),we(h,"AID",a.T),we(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&we(h,"TO",a.ja),we(h,"TYPE","xmlhttp"),ue(a,h),a.m&&a.o&&ia(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=qs(Vt(h)),p.m=null,p.P=!0,Qo(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Re(this),Fi(this),Ee(19))};function Ui(a){a.C!=null&&(u.clearTimeout(a.C),a.C=null)}function Xl(a,h){var p=null;if(a.g==h){Ui(a),Xr(a),a.g=null;var x=2}else if(Zo(a.h,h))p=h.D,ta(a.h,h),x=1;else return;if(a.G!=0){if(h.o)if(x==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var O=a.B;x=Hr(),ut(x,new Mt(x,p)),Nt(a)}else Ys(a);else if(O=h.s,O==3||O==0&&0<h.X||!(x==1&&kn(a,h)||x==2&&Fi(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),O){case 1:An(a,5);break;case 4:An(a,10);break;case 3:An(a,6);break;default:An(a,2)}}}function Ht(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function An(a,h){if(a.j.info("Error code "+h),h==2){var p=y(a.fb,a),x=a.Xa;const O=!x;x=new pe(x||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||qt(x,"https"),qs(x),O?kd(x.toString(),p):Cd(x.toString(),p)}else Ee(2);a.G=0,a.l&&a.l.sa(h),Mm(a),Me(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ee(2)):(this.j.info("Failed to ping google.com"),Ee(1))};function Mm(a){if(a.G=0,a.ka=[],a.l){const h=na(a.h);(h.length!=0||a.i.length!=0)&&(V(a.ka,h),V(a.ka,a.i),a.h.i.length=0,j(a.i),a.i.length=0),a.l.ra()}}function Vm(a,h,p){var x=p instanceof pe?Vt(p):new pe(p);if(x.g!="")h&&(x.g=h+"."+x.g),Bs(x,x.s);else{var O=u.location;x=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var U=new pe(null);x&&qt(U,x),h&&(U.g=h),O&&Bs(U,O),p&&(U.l=p),x=U}return p=a.D,h=a.ya,p&&h&&we(x,p,h),we(x,"VER",a.la),ue(a,x),x}function Fm(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Le(new Gs({eb:p})):new Le(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Um(){}t=Um.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Jl(){}Jl.prototype.g=function(a,h){return new nn(a,h)};function nn(a,h){Ke.call(this),this.g=new Q(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!I(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!I(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new zi(this)}P(nn,Ke),nn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},nn.prototype.close=function(){se(this.g)},nn.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=ve(a),a=p);h.i.push(new Qr(h.Ya++,a)),h.G==3&&Nt(h)},nn.prototype.N=function(){this.g.l=null,delete this.j,se(this.g),delete this.g,nn.aa.N.call(this)};function zm(a){qr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}P(zm,qr);function $m(){Us.call(this),this.status=1}P($m,Us);function zi(a){this.g=a}P(zi,Um),zi.prototype.ua=function(){ut(this.g,"a")},zi.prototype.ta=function(a){ut(this.g,new zm(a))},zi.prototype.sa=function(a){ut(this.g,new $m)},zi.prototype.ra=function(){ut(this.g,"b")},Jl.prototype.createWebChannel=Jl.prototype.g,nn.prototype.send=nn.prototype.o,nn.prototype.open=nn.prototype.m,nn.prototype.close=nn.prototype.close,q_=function(){return new Jl},B_=function(){return Hr()},$_=Tn,If={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zs.NO_ERROR=0,zs.TIMEOUT=8,zs.HTTP_ERROR=6,zu=zs,Ol.COMPLETE="complete",z_=Ol,ji.EventType=Bn,Bn.OPEN="a",Bn.CLOSE="b",Bn.ERROR="c",Bn.MESSAGE="d",Ke.prototype.listen=Ke.prototype.K,Na=ji,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha,U_=Le}).apply(typeof yu<"u"?yu:typeof self<"u"?self:typeof window<"u"?window:{});const A0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new Up("@firebase/firestore");function va(){return gi.logLevel}function Z(t,...e){if(gi.logLevel<=ye.DEBUG){const n=e.map(Jp);gi.debug(`Firestore (${zo}): ${t}`,...n)}}function Or(t,...e){if(gi.logLevel<=ye.ERROR){const n=e.map(Jp);gi.error(`Firestore (${zo}): ${t}`,...n)}}function Ao(t,...e){if(gi.logLevel<=ye.WARN){const n=e.map(Jp);gi.warn(`Firestore (${zo}): ${t}`,...n)}}function Jp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t="Unexpected state"){const e=`FIRESTORE (${zo}) INTERNAL ASSERTION FAILED: `+t;throw Or(e),new Error(e)}function ke(t,e){t||le()}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends ar{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class LN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pt.UNAUTHENTICATED))}shutdown(){}}class MN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class VN{constructor(e){this.t=e,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ke(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new kr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new kr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},u=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new kr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string"),new H_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new Pt(e)}}class FN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class UN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new FN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $N{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ke(this.o===void 0);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.R=n.token,new zN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=BN(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function Ro(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new te(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new lt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new lt(0,0))}static max(){return new ce(new lt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return cl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof cl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends cl{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const qN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends cl{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return qN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new te(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new te(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else u==="`"?(o=!o,s++):u!=="."||o?(r+=u,s++):(i(),s++)}if(i(),o)throw new te(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Fe.fromString(e))}static fromName(e){return new re(Fe.fromString(e).popFirst(5))}static empty(){return new re(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Fe(e.slice()))}}function HN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new lt(n+1,0):new lt(n,r));return new Ss(s,re.empty(),e)}function WN(t){return new Ss(t.readTime,t.key,-1)}class Ss{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ss(ce.min(),re.empty(),-1)}static max(){return new Ss(ce.max(),re.empty(),-1)}}function KN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class QN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kl(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==GN)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,r)=>{n(e)})}static reject(e){return new H((n,r)=>{r(e)})}static waitFor(e){return new H((n,r)=>{let s=0,i=0,o=!1;e.forEach(u=>{++s,u.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=H.resolve(!1);for(const r of e)n=n.next(s=>s?H.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new H((r,s)=>{const i=e.length,o=new Array(i);let u=0;for(let c=0;c<i;c++){const d=c;n(e[d]).next(g=>{o[d]=g,++u,u===i&&r(o)},g=>s(g))}})}static doWhile(e,n){return new H((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function YN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Cl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Zp.oe=-1;function sd(t){return t==null}function Ic(t){return t===0&&1/t==-1/0}function XN(t){return typeof t=="number"&&Number.isInteger(t)&&!Ic(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ti(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function K_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){this.comparator=e,this.root=n||vt.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xu(this.root,e,this.comparator,!1)}getReverseIterator(){return new xu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xu(this.root,e,this.comparator,!0)}}class xu{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class vt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??vt.RED,this.left=s??vt.EMPTY,this.right=i??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new vt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return vt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,r,s,i){return this}insert(e,n,r){return new vt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new P0(this.data.getIterator())}getIteratorFrom(e){return new P0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _t(this.comparator);return n.data=e,n}}class P0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new on([])}unionWith(e){let n=new _t(yt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new on(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ro(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new G_("Invalid base64 string: "+i):i}}(e);return new bt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const JN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ks(t){if(ke(!!t),typeof t=="string"){let e=0;const n=JN.exec(t);if(ke(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Je(t.seconds),nanos:Je(t.nanos)}}function Je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vi(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function tm(t){const e=t.mapValue.fields.__previous_value__;return em(e)?tm(e):e}function dl(t){const e=ks(t.mapValue.fields.__local_write_time__.timestampValue);return new lt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e,n,r,s,i,o,u,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=d}}class hl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new hl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u={mapValue:{}};function yi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?em(t)?4:tS(t)?9007199254740991:eS(t)?10:11:le()}function ir(t,e){if(t===e)return!0;const n=yi(t);if(n!==yi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return dl(t).isEqual(dl(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ks(s.timestampValue),u=ks(i.timestampValue);return o.seconds===u.seconds&&o.nanos===u.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return vi(s.bytesValue).isEqual(vi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Je(s.geoPointValue.latitude)===Je(i.geoPointValue.latitude)&&Je(s.geoPointValue.longitude)===Je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Je(s.integerValue)===Je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Je(s.doubleValue),u=Je(i.doubleValue);return o===u?Ic(o)===Ic(u):isNaN(o)&&isNaN(u)}return!1}(t,e);case 9:return Ro(t.arrayValue.values||[],e.arrayValue.values||[],ir);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},u=i.mapValue.fields||{};if(R0(o)!==R0(u))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(u[c]===void 0||!ir(o[c],u[c])))return!1;return!0}(t,e);default:return le()}}function fl(t,e){return(t.values||[]).find(n=>ir(n,e))!==void 0}function Po(t,e){if(t===e)return 0;const n=yi(t),r=yi(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const u=Je(i.integerValue||i.doubleValue),c=Je(o.integerValue||o.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(t,e);case 3:return j0(t.timestampValue,e.timestampValue);case 4:return j0(dl(t),dl(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(i,o){const u=vi(i),c=vi(o);return u.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const u=i.split("/"),c=o.split("/");for(let d=0;d<u.length&&d<c.length;d++){const g=Ie(u[d],c[d]);if(g!==0)return g}return Ie(u.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const u=Ie(Je(i.latitude),Je(o.latitude));return u!==0?u:Ie(Je(i.longitude),Je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return D0(t.arrayValue,e.arrayValue);case 10:return function(i,o){var u,c,d,g;const v=i.fields||{},y=o.fields||{},S=(u=v.value)===null||u===void 0?void 0:u.arrayValue,P=(c=y.value)===null||c===void 0?void 0:c.arrayValue,j=Ie(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((g=P==null?void 0:P.values)===null||g===void 0?void 0:g.length)||0);return j!==0?j:D0(S,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===_u.mapValue&&o===_u.mapValue)return 0;if(i===_u.mapValue)return 1;if(o===_u.mapValue)return-1;const u=i.fields||{},c=Object.keys(u),d=o.fields||{},g=Object.keys(d);c.sort(),g.sort();for(let v=0;v<c.length&&v<g.length;++v){const y=Ie(c[v],g[v]);if(y!==0)return y;const S=Po(u[c[v]],d[g[v]]);if(S!==0)return S}return Ie(c.length,g.length)}(t.mapValue,e.mapValue);default:throw le()}}function j0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=ks(t),r=ks(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function D0(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Po(n[s],r[s]);if(i)return i}return Ie(n.length,r.length)}function jo(t){return Nf(t)}function Nf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ks(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Nf(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Nf(n.fields[o])}`;return s+"}"}(t.mapValue):le()}function Sf(t){return!!t&&"integerValue"in t}function nm(t){return!!t&&"arrayValue"in t}function O0(t){return!!t&&"nullValue"in t}function L0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $u(t){return!!t&&"mapValue"in t}function eS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function za(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ti(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=za(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=za(t.arrayValue.values[n]);return e}return Object.assign({},t)}function tS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.value=e}static empty(){return new Gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$u(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=za(n)}setAll(e){let n=yt.emptyPath(),r={},s=[];e.forEach((o,u)=>{if(!n.isImmediateParentOf(u)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=u.popLast()}o?r[u.lastSegment()]=za(o):s.push(u.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());$u(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ir(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];$u(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ti(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Gt(za(this.value))}}function Q_(t){const e=[];return Ti(t.fields,(n,r)=>{const s=new yt([n]);if($u(r)){const i=Q_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new on(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n,r,s,i,o,u){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=u}static newInvalidDocument(e){return new Dt(e,0,ce.min(),ce.min(),ce.min(),Gt.empty(),0)}static newFoundDocument(e,n,r,s){return new Dt(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new Dt(e,2,n,ce.min(),ce.min(),Gt.empty(),0)}static newUnknownDocument(e,n){return new Dt(e,3,n,ce.min(),ce.min(),Gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n){this.position=e,this.inclusive=n}}function M0(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=Po(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function V0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ir(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,n="asc"){this.field=e,this.dir=n}}function nS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Y_=class{};class ot extends Y_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new sS(e,n,r):n==="array-contains"?new aS(e,r):n==="in"?new lS(e,r):n==="not-in"?new uS(e,r):n==="array-contains-any"?new cS(e,r):new ot(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new iS(e,r):new oS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Po(n,this.value)):n!==null&&yi(this.value)===yi(n)&&this.matchesComparison(Po(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class or extends Y_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new or(e,n)}matches(e){return X_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function X_(t){return t.op==="and"}function J_(t){return rS(t)&&X_(t)}function rS(t){for(const e of t.filters)if(e instanceof or)return!1;return!0}function kf(t){if(t instanceof ot)return t.field.canonicalString()+t.op.toString()+jo(t.value);if(J_(t))return t.filters.map(e=>kf(e)).join(",");{const e=t.filters.map(n=>kf(n)).join(",");return`${t.op}(${e})`}}function Z_(t,e){return t instanceof ot?function(r,s){return s instanceof ot&&r.op===s.op&&r.field.isEqual(s.field)&&ir(r.value,s.value)}(t,e):t instanceof or?function(r,s){return s instanceof or&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,u)=>i&&Z_(o,s.filters[u]),!0):!1}(t,e):void le()}function ew(t){return t instanceof ot?function(n){return`${n.field.canonicalString()} ${n.op} ${jo(n.value)}`}(t):t instanceof or?function(n){return n.op.toString()+" {"+n.getFilters().map(ew).join(" ,")+"}"}(t):"Filter"}class sS extends ot{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class iS extends ot{constructor(e,n){super(e,"in",n),this.keys=tw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class oS extends ot{constructor(e,n){super(e,"not-in",n),this.keys=tw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class aS extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return nm(n)&&fl(n.arrayValue,this.value)}}class lS extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fl(this.value.arrayValue,n)}}class uS extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(fl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fl(this.value.arrayValue,n)}}class cS extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!nm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n=null,r=[],s=[],i=null,o=null,u=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=u,this.ue=null}}function F0(t,e=null,n=[],r=[],s=null,i=null,o=null){return new dS(t,e,n,r,s,i,o)}function rm(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>kf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),sd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>jo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>jo(r)).join(",")),e.ue=n}return e.ue}function sm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!nS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Z_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!V0(t.startAt,e.startAt)&&V0(t.endAt,e.endAt)}function Cf(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,n=null,r=[],s=[],i=null,o="F",u=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=u,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function hS(t,e,n,r,s,i,o,u){return new id(t,e,n,r,s,i,o,u)}function od(t){return new id(t)}function U0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fS(t){return t.collectionGroup!==null}function $a(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let u=new _t(yt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Sc(i,r))}),n.has(yt.keyField().canonicalString())||e.ce.push(new Sc(yt.keyField(),r))}return e.ce}function rr(t){const e=de(t);return e.le||(e.le=pS(e,$a(t))),e.le}function pS(t,e){if(t.limitType==="F")return F0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Sc(s.field,i)});const n=t.endAt?new Nc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Nc(t.startAt.position,t.startAt.inclusive):null;return F0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Af(t,e,n){return new id(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ad(t,e){return sm(rr(t),rr(e))&&t.limitType===e.limitType}function nw(t){return`${rm(rr(t))}|lt:${t.limitType}`}function qi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ew(s)).join(", ")}]`),sd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>jo(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>jo(s)).join(",")),`Target(${r})`}(rr(t))}; limitType=${t.limitType})`}function ld(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of $a(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,u,c){const d=M0(o,u,c);return o.inclusive?d<=0:d<0}(r.startAt,$a(r),s)||r.endAt&&!function(o,u,c){const d=M0(o,u,c);return o.inclusive?d>=0:d>0}(r.endAt,$a(r),s))}(t,e)}function mS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function rw(t){return(e,n)=>{let r=!1;for(const s of $a(t)){const i=gS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function gS(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,o,u){const c=o.data.field(i),d=u.data.field(i);return c!==null&&d!==null?Po(c,d):le()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ti(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return K_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=new We(re.comparator);function Lr(){return vS}const sw=new We(re.comparator);function Sa(...t){let e=sw;for(const n of t)e=e.insert(n.key,n);return e}function iw(t){let e=sw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ri(){return Ba()}function ow(){return Ba()}function Ba(){return new $o(t=>t.toString(),(t,e)=>t.isEqual(e))}const yS=new We(re.comparator),xS=new _t(re.comparator);function ge(...t){let e=xS;for(const n of t)e=e.add(n);return e}const _S=new _t(Ie);function wS(){return _S}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ic(e)?"-0":e}}function aw(t){return{integerValue:""+t}}function bS(t,e){return XN(e)?aw(e):im(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(){this._=void 0}}function ES(t,e,n){return t instanceof kc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&em(i)&&(i=tm(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof pl?uw(t,e):t instanceof ml?cw(t,e):function(s,i){const o=lw(s,i),u=z0(o)+z0(s.Pe);return Sf(o)&&Sf(s.Pe)?aw(u):im(s.serializer,u)}(t,e)}function TS(t,e,n){return t instanceof pl?uw(t,e):t instanceof ml?cw(t,e):n}function lw(t,e){return t instanceof Cc?function(r){return Sf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class kc extends ud{}class pl extends ud{constructor(e){super(),this.elements=e}}function uw(t,e){const n=dw(e);for(const r of t.elements)n.some(s=>ir(s,r))||n.push(r);return{arrayValue:{values:n}}}class ml extends ud{constructor(e){super(),this.elements=e}}function cw(t,e){let n=dw(e);for(const r of t.elements)n=n.filter(s=>!ir(s,r));return{arrayValue:{values:n}}}class Cc extends ud{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function z0(t){return Je(t.integerValue||t.doubleValue)}function dw(t){return nm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function IS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof pl&&s instanceof pl||r instanceof ml&&s instanceof ml?Ro(r.elements,s.elements,ir):r instanceof Cc&&s instanceof Cc?ir(r.Pe,s.Pe):r instanceof kc&&s instanceof kc}(t.transform,e.transform)}class NS{constructor(e,n){this.version=e,this.transformResults=n}}class _n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cd{}function hw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new om(t.key,_n.none()):new Al(t.key,t.data,_n.none());{const n=t.data,r=Gt.empty();let s=new _t(yt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ds(t.key,r,new on(s.toArray()),_n.none())}}function SS(t,e,n){t instanceof Al?function(s,i,o){const u=s.value.clone(),c=B0(s.fieldTransforms,i,o.transformResults);u.setAll(c),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):t instanceof Ds?function(s,i,o){if(!Bu(s.precondition,i))return void i.convertToUnknownDocument(o.version);const u=B0(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(fw(s)),c.setAll(u),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function qa(t,e,n,r){return t instanceof Al?function(i,o,u,c){if(!Bu(i.precondition,o))return u;const d=i.value.clone(),g=q0(i.fieldTransforms,c,o);return d.setAll(g),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ds?function(i,o,u,c){if(!Bu(i.precondition,o))return u;const d=q0(i.fieldTransforms,c,o),g=o.data;return g.setAll(fw(i)),g.setAll(d),o.convertToFoundDocument(o.version,g).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(v=>v.field))}(t,e,n,r):function(i,o,u){return Bu(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):u}(t,e,n)}function kS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=lw(r.transform,s||null);i!=null&&(n===null&&(n=Gt.empty()),n.set(r.field,i))}return n||null}function $0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ro(r,s,(i,o)=>IS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Al extends cd{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ds extends cd{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function fw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function B0(t,e,n){const r=new Map;ke(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,u=e.data.field(i.field);r.set(i.field,TS(o,u,n[s]))}return r}function q0(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ES(i,o,e))}return r}class om extends cd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class CS extends cd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&SS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=qa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=qa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ow();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let u=this.applyToLocalView(o,i.mutatedFields);u=n.has(s.key)?null:u;const c=hw(o,u);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&Ro(this.mutations,e.mutations,(n,r)=>$0(n,r))&&Ro(this.baseMutations,e.baseMutations,(n,r)=>$0(n,r))}}class am{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ke(e.mutations.length===r.length);let s=function(){return yS}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new am(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,xe;function jS(t){switch(t){default:return le();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0}}function pw(t){if(t===void 0)return Or("GRPC error has no .code"),q.UNKNOWN;switch(t){case nt.OK:return q.OK;case nt.CANCELLED:return q.CANCELLED;case nt.UNKNOWN:return q.UNKNOWN;case nt.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case nt.INTERNAL:return q.INTERNAL;case nt.UNAVAILABLE:return q.UNAVAILABLE;case nt.UNAUTHENTICATED:return q.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case nt.NOT_FOUND:return q.NOT_FOUND;case nt.ALREADY_EXISTS:return q.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return q.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case nt.ABORTED:return q.ABORTED;case nt.OUT_OF_RANGE:return q.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return q.UNIMPLEMENTED;case nt.DATA_LOSS:return q.DATA_LOSS;default:return le()}}(xe=nt||(nt={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=new oi([4294967295,4294967295],0);function H0(t){const e=DS().encode(t),n=new F_;return n.update(e),new Uint8Array(n.digest())}function W0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new oi([n,r],0),new oi([s,i],0)]}class lm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ka(`Invalid padding: ${n}`);if(r<0)throw new ka(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ka(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ka(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=oi.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(oi.fromNumber(r)));return s.compare(OS)===1&&(s=new oi([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=H0(e),[r,s]=W0(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new lm(i,s,n);return r.forEach(u=>o.insert(u)),o}insert(e){if(this.Ie===0)return;const n=H0(e),[r,s]=W0(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ka extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Rl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new dd(ce.min(),s,new We(Ie),Lr(),ge())}}class Rl{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Rl(r,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class mw{constructor(e,n){this.targetId=e,this.me=n}}class gw{constructor(e,n,r=bt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class K0{constructor(){this.fe=0,this.ge=Q0(),this.pe=bt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ge(),n=ge(),r=ge();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le()}}),new Rl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Q0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ke(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class LS{constructor(e){this.Le=e,this.Be=new Map,this.ke=Lr(),this.qe=G0(),this.Qe=new We(Ie)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Cf(i))if(r===0){const o=new re(i.path);this.Ue(n,o,Dt.newNoDocument(o,ce.min()))}else ke(r===1);else{const o=this.Ye(n);if(o!==r){const u=this.Ze(e),c=u?this.Xe(u,e,o):1;if(c!==0){this.je(n);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,u;try{o=vi(r).toUint8Array()}catch(c){if(c instanceof G_)return Ao("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new lm(o,s,i)}catch(c){return Ao(c instanceof ka?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.Ie===0?null:u}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),u=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(u)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const u=this.Je(o);if(u){if(i.current&&Cf(u.target)){const c=new re(u.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,Dt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ge();this.qe.forEach((i,o)=>{let u=!0;o.forEachWhile(c=>{const d=this.Je(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new dd(e,n,this.Qe,this.ke,r);return this.ke=Lr(),this.qe=G0(),this.Qe=new We(Ie),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new K0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new _t(Ie),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new K0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function G0(){return new We(re.comparator)}function Q0(){return new We(re.comparator)}const MS={asc:"ASCENDING",desc:"DESCENDING"},VS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},FS={and:"AND",or:"OR"};class US{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rf(t,e){return t.useProto3Json||sd(e)?e:{value:e}}function Ac(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function zS(t,e){return Ac(t,e.toTimestamp())}function sr(t){return ke(!!t),ce.fromTimestamp(function(n){const r=ks(n);return new lt(r.seconds,r.nanos)}(t))}function um(t,e){return Pf(t,e).canonicalString()}function Pf(t,e){const n=function(s){return new Fe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function yw(t){const e=Fe.fromString(t);return ke(Ew(e)),e}function jf(t,e){return um(t.databaseId,e.path)}function ph(t,e){const n=yw(e);if(n.get(1)!==t.databaseId.projectId)throw new te(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(_w(n))}function xw(t,e){return um(t.databaseId,e)}function $S(t){const e=yw(t);return e.length===4?Fe.emptyPath():_w(e)}function Df(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _w(t){return ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Y0(t,e,n){return{name:jf(t,e),fields:n.value.mapValue.fields}}function BS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,g){return d.useProto3Json?(ke(g===void 0||typeof g=="string"),bt.fromBase64String(g||"")):(ke(g===void 0||g instanceof Buffer||g instanceof Uint8Array),bt.fromUint8Array(g||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,u=o&&function(d){const g=d.code===void 0?q.UNKNOWN:pw(d.code);return new te(g,d.message||"")}(o);n=new gw(r,s,i,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ph(t,r.document.name),i=sr(r.document.updateTime),o=r.document.createTime?sr(r.document.createTime):ce.min(),u=new Gt({mapValue:{fields:r.document.fields}}),c=Dt.newFoundDocument(s,i,o,u),d=r.targetIds||[],g=r.removedTargetIds||[];n=new qu(d,g,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ph(t,r.document),i=r.readTime?sr(r.readTime):ce.min(),o=Dt.newNoDocument(s,i),u=r.removedTargetIds||[];n=new qu([],u,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ph(t,r.document),i=r.removedTargetIds||[];n=new qu([],i,s,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new PS(s,i),u=r.targetId;n=new mw(u,o)}}return n}function qS(t,e){let n;if(e instanceof Al)n={update:Y0(t,e.key,e.value)};else if(e instanceof om)n={delete:jf(t,e.key)};else if(e instanceof Ds)n={update:Y0(t,e.key,e.data),updateMask:ZS(e.fieldMask)};else{if(!(e instanceof CS))return le();n={verify:jf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const u=o.transform;if(u instanceof kc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof pl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof ml)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Cc)return{fieldPath:o.field.canonicalString(),increment:u.Pe};throw le()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:zS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le()}(t,e.precondition)),n}function HS(t,e){return t&&t.length>0?(ke(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?sr(s.updateTime):sr(i);return o.isEqual(ce.min())&&(o=sr(i)),new NS(o,s.transformResults||[])}(n,e))):[]}function WS(t,e){return{documents:[xw(t,e.path)]}}function KS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=xw(t,s);const i=function(d){if(d.length!==0)return bw(or.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(g=>function(y){return{field:Hi(y.field),direction:YS(y.dir)}}(g))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const u=Rf(t,e.limit);return u!==null&&(n.structuredQuery.limit=u),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:s}}function GS(t){let e=$S(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ke(r===1);const g=n.from[0];g.allDescendants?s=g.collectionId:e=e.child(g.collectionId)}let i=[];n.where&&(i=function(v){const y=ww(v);return y instanceof or&&J_(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(v){return v.map(y=>function(P){return new Sc(Wi(P.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(y))}(n.orderBy));let u=null;n.limit&&(u=function(v){let y;return y=typeof v=="object"?v.value:v,sd(y)?null:y}(n.limit));let c=null;n.startAt&&(c=function(v){const y=!!v.before,S=v.values||[];return new Nc(S,y)}(n.startAt));let d=null;return n.endAt&&(d=function(v){const y=!v.before,S=v.values||[];return new Nc(S,y)}(n.endAt)),hS(e,s,o,i,u,"F",c,d)}function QS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ww(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Wi(n.unaryFilter.field);return ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Wi(n.unaryFilter.field);return ot.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Wi(n.unaryFilter.field);return ot.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Wi(n.unaryFilter.field);return ot.create(o,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(n){return ot.create(Wi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return or.create(n.compositeFilter.filters.map(r=>ww(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le()}}(n.compositeFilter.op))}(t):le()}function YS(t){return MS[t]}function XS(t){return VS[t]}function JS(t){return FS[t]}function Hi(t){return{fieldPath:t.canonicalString()}}function Wi(t){return yt.fromServerFormat(t.fieldPath)}function bw(t){return t instanceof ot?function(n){if(n.op==="=="){if(L0(n.value))return{unaryFilter:{field:Hi(n.field),op:"IS_NAN"}};if(O0(n.value))return{unaryFilter:{field:Hi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(L0(n.value))return{unaryFilter:{field:Hi(n.field),op:"IS_NOT_NAN"}};if(O0(n.value))return{unaryFilter:{field:Hi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hi(n.field),op:XS(n.op),value:n.value}}}(t):t instanceof or?function(n){const r=n.getFilters().map(s=>bw(s));return r.length===1?r[0]:{compositeFilter:{op:JS(n.op),filters:r}}}(t):le()}function ZS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ew(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n,r,s,i=ce.min(),o=ce.min(),u=bt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(e){return new hs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e){this.ct=e}}function tk(t){const e=GS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Af(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(){this.un=new rk}addToCollectionParentIndex(e,n){return this.un.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve(Ss.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve(Ss.min())}updateCollectionGroup(e,n,r){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class rk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new _t(Fe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new _t(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Do(0)}static kn(){return new Do(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(){this.changes=new $o(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?H.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&qa(r.mutation,s,on.empty(),lt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const s=ri();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Sa();return i.forEach((u,c)=>{o=o.insert(u,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ri();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,u)=>{n.set(o,u)})})}computeViews(e,n,r,s){let i=Lr();const o=Ba(),u=function(){return Ba()}();return n.forEach((c,d)=>{const g=r.get(d.key);s.has(d.key)&&(g===void 0||g.mutation instanceof Ds)?i=i.insert(d.key,d):g!==void 0?(o.set(d.key,g.mutation.getFieldMask()),qa(g.mutation,d,g.mutation.getFieldMask(),lt.now())):o.set(d.key,on.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((d,g)=>o.set(d,g)),n.forEach((d,g)=>{var v;return u.set(d,new ik(g,(v=o.get(d))!==null&&v!==void 0?v:null))}),u))}recalculateAndSaveOverlays(e,n){const r=Ba();let s=new We((o,u)=>o-u),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const u of o)u.keys().forEach(c=>{const d=n.get(c);if(d===null)return;let g=r.get(c)||on.empty();g=u.applyToLocalView(d,g),r.set(c,g);const v=(s.get(u.batchId)||ge()).add(c);s=s.insert(u.batchId,v)})}).next(()=>{const o=[],u=s.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),d=c.key,g=c.value,v=ow();g.forEach(y=>{if(!i.has(y)){const S=hw(n.get(y),r.get(y));S!==null&&v.set(y,S),i=i.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,v))}return H.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):fS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):H.resolve(ri());let u=-1,c=i;return o.next(d=>H.forEach(d,(g,v)=>(u<v.largestBatchId&&(u=v.largestBatchId),i.get(g)?H.resolve():this.remoteDocumentCache.getEntry(e,g).next(y=>{c=c.insert(g,y)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,c,d,ge())).next(g=>({batchId:u,changes:iw(g)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=Sa();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Sa();return this.indexManager.getCollectionParents(e,i).next(u=>H.forEach(u,c=>{const d=function(v,y){return new id(y,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(g=>{g.forEach((v,y)=>{o=o.insert(v,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,d)=>{const g=d.getKey();o.get(g)===null&&(o=o.insert(g,Dt.newInvalidDocument(g)))});let u=Sa();return o.forEach((c,d)=>{const g=i.get(c);g!==void 0&&qa(g.mutation,d,on.empty(),lt.now()),ld(n,d)&&(u=u.insert(c,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return H.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:sr(s.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:tk(s.bundledQuery),readTime:sr(s.readTime)}}(n)),H.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(){this.overlays=new We(re.comparator),this.Ir=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ri();return H.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),H.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),H.resolve()}getOverlaysForCollection(e,n,r){const s=ri(),i=n.length+1,o=new re(n.child("")),u=this.overlays.getIteratorFrom(o);for(;u.hasNext();){const c=u.getNext().value,d=c.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return H.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new We((d,g)=>d-g);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let g=i.get(d.largestBatchId);g===null&&(g=ri(),i=i.insert(d.largestBatchId,g)),g.set(d.getKey(),d)}}const u=ri(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,g)=>u.set(d,g)),!(u.size()>=s)););return H.resolve(u)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new RS(n,r));let i=this.Ir.get(n);i===void 0&&(i=ge(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(){this.Tr=new _t(dt.Er),this.dr=new _t(dt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new dt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new dt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new re(new Fe([])),r=new dt(n,e),s=new dt(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new re(new Fe([])),r=new dt(n,e),s=new dt(n,e+1);let i=ge();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new dt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class dt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return re.comparator(e.key,n.key)||Ie(e.wr,n.wr)}static Ar(e,n){return Ie(e.wr,n.wr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new _t(dt.Er)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new AS(i,n,r,s);this.mutationQueue.push(o);for(const u of s)this.br=this.br.add(new dt(u.key,i)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return H.resolve(o)}lookupMutationBatch(e,n){return H.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return H.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new dt(n,0),s=new dt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const u=this.Dr(o.wr);i.push(u)}),H.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _t(Ie);return n.forEach(s=>{const i=new dt(s,0),o=new dt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],u=>{r=r.add(u.wr)})}),H.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new dt(new re(i),0);let u=new _t(Ie);return this.br.forEachWhile(c=>{const d=c.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(c.wr)),!0)},o),H.resolve(this.Cr(u))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ke(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return H.forEach(n.mutations,s=>{const i=new dt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new dt(n,0),s=this.br.firstAfterOrEqual(r);return H.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e){this.Mr=e,this.docs=function(){return new We(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return H.resolve(r?r.document.mutableCopy():Dt.newInvalidDocument(n))}getEntries(e,n){let r=Lr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Dt.newInvalidDocument(s))}),H.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Lr();const o=n.path,u=new re(o.child("")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:d,value:{document:g}}=c.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||KN(WN(g),r)<=0||(s.has(g.key)||ld(n,g))&&(i=i.insert(g.key,g.mutableCopy()))}return H.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le()}Or(e,n){return H.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new hk(this)}getSize(e){return H.resolve(this.size)}}class hk extends sk{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),H.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.persistence=e,this.Nr=new $o(n=>rm(n),sm),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.Lr=0,this.Br=new cm,this.targetCount=0,this.kr=Do.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),H.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Do(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.Kn(n),H.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,u)=>{u.sequenceNumber<=n&&r.get(u.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),H.waitFor(i).next(()=>s)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return H.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),H.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),H.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),H.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return H.resolve(r)}containsKey(e,n){return H.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Zp(0),this.Kr=!1,this.Kr=!0,this.$r=new uk,this.referenceDelegate=e(this),this.Ur=new fk(this),this.indexManager=new nk,this.remoteDocumentCache=function(s){return new dk(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new ek(n),this.Gr=new ak(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new ck(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new mk(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return H.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class mk extends QN{constructor(e){super(),this.currentSequenceNumber=e}}class dm{constructor(e){this.persistence=e,this.Jr=new cm,this.Yr=null}static Zr(e){return new dm(e)}get Xr(){if(this.Yr)return this.Yr;throw le()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),H.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),H.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.Xr,r=>{const s=re.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ce.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return H.or([()=>H.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ge(),s=ge();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new hm(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return rT()?8:YN(Lt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new gk;return this.Xi(e,n,o).next(u=>{if(i.result=u,this.zi)return this.es(e,n,o,u.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(va()<=ye.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",qi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),H.resolve()):(va()<=ye.DEBUG&&Z("QueryEngine","Query:",qi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(va()<=ye.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",qi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rr(n))):H.resolve())}Yi(e,n){if(U0(n))return H.resolve(null);let r=rr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Af(n,null,"F"),r=rr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ge(...i);return this.Ji.getDocuments(e,o).next(u=>this.indexManager.getMinOffset(e,r).next(c=>{const d=this.ts(n,u);return this.ns(n,d,o,c.readTime)?this.Yi(e,Af(n,null,"F")):this.rs(e,d,n,c)}))})))}Zi(e,n,r,s){return U0(n)||s.isEqual(ce.min())?H.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?H.resolve(null):(va()<=ye.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qi(n)),this.rs(e,o,n,HN(s,-1)).next(u=>u))})}ts(e,n){let r=new _t(rw(e));return n.forEach((s,i)=>{ld(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return va()<=ye.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",qi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Ss.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new We(Ie),this._s=new $o(i=>rm(i),sm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ok(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function xk(t,e,n,r){return new yk(t,e,n,r)}async function Tw(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],u=[];let c=ge();for(const d of s){o.push(d.batchId);for(const g of d.mutations)c=c.add(g.key)}for(const d of i){u.push(d.batchId);for(const g of d.mutations)c=c.add(g.key)}return n.localDocuments.getDocuments(r,c).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:u}))})})}function _k(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(u,c,d,g){const v=d.batch,y=v.keys();let S=H.resolve();return y.forEach(P=>{S=S.next(()=>g.getEntry(c,P)).next(j=>{const V=d.docVersions.get(P);ke(V!==null),j.version.compareTo(V)<0&&(v.applyToRemoteDocument(j,d),j.isValidDocument()&&(j.setReadTime(d.commitVersion),g.addEntry(j)))})}),S.next(()=>u.mutationQueue.removeMutationBatch(c,v))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let c=ge();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(c=c.add(u.batch.mutations[d].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Iw(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function wk(t,e){const n=de(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const u=[];e.targetChanges.forEach((g,v)=>{const y=s.get(v);if(!y)return;u.push(n.Ur.removeMatchingKeys(i,g.removedDocuments,v).next(()=>n.Ur.addMatchingKeys(i,g.addedDocuments,v)));let S=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(v)!==null?S=S.withResumeToken(bt.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):g.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(g.resumeToken,r)),s=s.insert(v,S),function(j,V,w){return j.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(y,S,g)&&u.push(n.Ur.updateTargetData(i,S))});let c=Lr(),d=ge();if(e.documentUpdates.forEach(g=>{e.resolvedLimboDocuments.has(g)&&u.push(n.persistence.referenceDelegate.updateLimboDocument(i,g))}),u.push(bk(i,o,e.documentUpdates).next(g=>{c=g.Ps,d=g.Is})),!r.isEqual(ce.min())){const g=n.Ur.getLastRemoteSnapshotVersion(i).next(v=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));u.push(g)}return H.waitFor(u).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,d)).next(()=>c)}).then(i=>(n.os=s,i))}function bk(t,e,n){let r=ge(),s=ge();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Lr();return n.forEach((u,c)=>{const d=i.get(u);c.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),c.isNoDocument()&&c.version.isEqual(ce.min())?(e.removeEntry(u,c.readTime),o=o.insert(u,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(c),o=o.insert(u,c)):Z("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function Ek(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Tk(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,H.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new hs(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Of(t,e,n){const r=de(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Cl(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function X0(t,e,n){const r=de(t);let s=ce.min(),i=ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,d,g){const v=de(c),y=v._s.get(g);return y!==void 0?H.resolve(v.os.get(y)):v.Ur.getTargetData(d,g)}(r,o,rr(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,u.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:ge())).next(u=>(Ik(r,mS(e),u),{documents:u,Ts:i})))}function Ik(t,e,n){let r=t.us.get(e)||ce.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class J0{constructor(){this.activeTargetIds=wS()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Nk{constructor(){this.so=new J0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new J0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wu=null;function mh(){return wu===null?wu=function(){return 268435456+Math.round(2147483648*Math.random())}():wu++,"0x"+wu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="WebChannelConnection";class Ak extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const u=mh(),c=this.xo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${u}:`,c,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,o),this.No(n,c,d,s).then(g=>(Z("RestConnection",`Received RPC '${n}' ${u}: `,g),g),g=>{throw Ao("RestConnection",`RPC '${n}' ${u} failed with error: `,g,"url: ",c,"request:",s),g})}Lo(n,r,s,i,o,u){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=kk[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=mh();return new Promise((o,u)=>{const c=new U_;c.setWithCredentials(!0),c.listenOnce(z_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case zu.NO_ERROR:const g=c.getResponseJson();Z(Rt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(g)),o(g);break;case zu.TIMEOUT:Z(Rt,`RPC '${e}' ${i} timed out`),u(new te(q.DEADLINE_EXCEEDED,"Request time out"));break;case zu.HTTP_ERROR:const v=c.getStatus();if(Z(Rt,`RPC '${e}' ${i} failed with status:`,v,"response text:",c.getResponseText()),v>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const S=y==null?void 0:y.error;if(S&&S.status&&S.message){const P=function(V){const w=V.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(w)>=0?w:q.UNKNOWN}(S.status);u(new te(P,S.message))}else u(new te(q.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new te(q.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{Z(Rt,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);Z(Rt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",d,r,15)})}Bo(e,n,r){const s=mh(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=q_(),u=B_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const g=i.join("");Z(Rt,`Creating RPC '${e}' stream ${s}: ${g}`,c);const v=o.createWebChannel(g,c);let y=!1,S=!1;const P=new Ck({Io:V=>{S?Z(Rt,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(y||(Z(Rt,`Opening RPC '${e}' stream ${s} transport.`),v.open(),y=!0),Z(Rt,`RPC '${e}' stream ${s} sending:`,V),v.send(V))},To:()=>v.close()}),j=(V,w,I)=>{V.listen(w,A=>{try{I(A)}catch(F){setTimeout(()=>{throw F},0)}})};return j(v,Na.EventType.OPEN,()=>{S||(Z(Rt,`RPC '${e}' stream ${s} transport opened.`),P.yo())}),j(v,Na.EventType.CLOSE,()=>{S||(S=!0,Z(Rt,`RPC '${e}' stream ${s} transport closed`),P.So())}),j(v,Na.EventType.ERROR,V=>{S||(S=!0,Ao(Rt,`RPC '${e}' stream ${s} transport errored:`,V),P.So(new te(q.UNAVAILABLE,"The operation could not be completed")))}),j(v,Na.EventType.MESSAGE,V=>{var w;if(!S){const I=V.data[0];ke(!!I);const A=I,F=A.error||((w=A[0])===null||w===void 0?void 0:w.error);if(F){Z(Rt,`RPC '${e}' stream ${s} received error:`,F);const M=F.status;let z=function(T){const N=nt[T];if(N!==void 0)return pw(N)}(M),E=F.message;z===void 0&&(z=q.INTERNAL,E="Unknown error status: "+M+" with message "+F.message),S=!0,P.So(new te(z,E)),v.close()}else Z(Rt,`RPC '${e}' stream ${s} received:`,I),P.bo(I)}}),j(u,$_.STAT_EVENT,V=>{V.stat===If.PROXY?Z(Rt,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===If.NOPROXY&&Z(Rt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function gh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t){return new US(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,n,r,s,i,o,u,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Nw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(Or(n.toString()),Or("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new te(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Rk extends Sw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=BS(this.serializer,e),r=function(i){if(!("targetChange"in i))return ce.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?sr(o.readTime):ce.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Df(this.serializer),n.addTarget=function(i,o){let u;const c=o.target;if(u=Cf(c)?{documents:WS(i,c)}:{query:KS(i,c)._t},u.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){u.resumeToken=vw(i,o.resumeToken);const d=Rf(i,o.expectedCount);d!==null&&(u.expectedCount=d)}else if(o.snapshotVersion.compareTo(ce.min())>0){u.readTime=Ac(i,o.snapshotVersion.toTimestamp());const d=Rf(i,o.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const r=QS(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Df(this.serializer),n.removeTarget=e,this.a_(n)}}class Pk extends Sw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ke(!!e.streamToken),this.lastStreamToken=e.streamToken,ke(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=HS(e.writeResults,e.commitTime),r=sr(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Df(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>qS(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new te(q.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Pf(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te(q.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Lo(e,Pf(n,r),s,o,u,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(q.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Dk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Or(n),this.D_=!1):Z("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ii(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(c){const d=de(c);d.L_.add(4),await Pl(d),d.q_.set("Unknown"),d.L_.delete(4),await fd(d)}(this))})}),this.q_=new Dk(r,s)}}async function fd(t){if(Ii(t))for(const e of t.B_)await e(!0)}async function Pl(t){for(const e of t.B_)await e(!1)}function kw(t,e){const n=de(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),gm(n)?mm(n):Bo(n).r_()&&pm(n,e))}function fm(t,e){const n=de(t),r=Bo(n);n.N_.delete(e),r.r_()&&Cw(n,e),n.N_.size===0&&(r.r_()?r.o_():Ii(n)&&n.q_.set("Unknown"))}function pm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Bo(t).A_(e)}function Cw(t,e){t.Q_.xe(e),Bo(t).R_(e)}function mm(t){t.Q_=new LS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Bo(t).start(),t.q_.v_()}function gm(t){return Ii(t)&&!Bo(t).n_()&&t.N_.size>0}function Ii(t){return de(t).L_.size===0}function Aw(t){t.Q_=void 0}async function Lk(t){t.q_.set("Online")}async function Mk(t){t.N_.forEach((e,n)=>{pm(t,e)})}async function Vk(t,e){Aw(t),gm(t)?(t.q_.M_(e),mm(t)):t.q_.set("Unknown")}async function Fk(t,e,n){if(t.q_.set("Online"),e instanceof gw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const u of i.targetIds)s.N_.has(u)&&(await s.remoteSyncer.rejectListen(u,o),s.N_.delete(u),s.Q_.removeTarget(u))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Rc(t,r)}else if(e instanceof qu?t.Q_.Ke(e):e instanceof mw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ce.min()))try{const r=await Iw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const u=i.Q_.rt(o);return u.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const g=i.N_.get(d);g&&i.N_.set(d,g.withResumeToken(c.resumeToken,o))}}),u.targetMismatches.forEach((c,d)=>{const g=i.N_.get(c);if(!g)return;i.N_.set(c,g.withResumeToken(bt.EMPTY_BYTE_STRING,g.snapshotVersion)),Cw(i,c);const v=new hs(g.target,c,d,g.sequenceNumber);pm(i,v)}),i.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await Rc(t,r)}}async function Rc(t,e,n){if(!Cl(e))throw e;t.L_.add(1),await Pl(t),t.q_.set("Offline"),n||(n=()=>Iw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await fd(t)})}function Rw(t,e){return e().catch(n=>Rc(t,n,e))}async function pd(t){const e=de(t),n=Cs(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Uk(e);)try{const s=await Ek(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,zk(e,s)}catch(s){await Rc(e,s)}Pw(e)&&jw(e)}function Uk(t){return Ii(t)&&t.O_.length<10}function zk(t,e){t.O_.push(e);const n=Cs(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Pw(t){return Ii(t)&&!Cs(t).n_()&&t.O_.length>0}function jw(t){Cs(t).start()}async function $k(t){Cs(t).p_()}async function Bk(t){const e=Cs(t);for(const n of t.O_)e.m_(n.mutations)}async function qk(t,e,n){const r=t.O_.shift(),s=am.from(r,e,n);await Rw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await pd(t)}async function Hk(t,e){e&&Cs(t).V_&&await async function(r,s){if(function(o){return jS(o)&&o!==q.ABORTED}(s.code)){const i=r.O_.shift();Cs(r).s_(),await Rw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await pd(r)}}(t,e),Pw(t)&&jw(t)}async function ev(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=Ii(n);n.L_.add(3),await Pl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await fd(n)}async function Wk(t,e){const n=de(t);e?(n.L_.delete(2),await fd(n)):e||(n.L_.add(2),await Pl(n),n.q_.set("Unknown"))}function Bo(t){return t.K_||(t.K_=function(n,r,s){const i=de(n);return i.w_(),new Rk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:Lk.bind(null,t),Ro:Mk.bind(null,t),mo:Vk.bind(null,t),d_:Fk.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),gm(t)?mm(t):t.q_.set("Unknown")):(await t.K_.stop(),Aw(t))})),t.K_}function Cs(t){return t.U_||(t.U_=function(n,r,s){const i=de(n);return i.w_(),new Pk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:$k.bind(null,t),mo:Hk.bind(null,t),f_:Bk.bind(null,t),g_:qk.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await pd(t)):(await t.U_.stop(),t.O_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,u=new vm(e,n,o,s,i);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ym(t,e){if(Or("AsyncQueue",`${e}: ${t}`),Cl(t))return new te(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Sa(),this.sortedSet=new We(this.comparator)}static emptySet(e){return new wo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof wo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new wo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(){this.W_=new We(re.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):le():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Oo{constructor(e,n,r,s,i,o,u,c,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(u=>{o.push({type:0,doc:u})}),new Oo(e,n,wo.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ad(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Gk{constructor(){this.queries=nv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=nv(),i.forEach((o,u)=>{for(const c of u.j_)c.onError(r)})})(this,new te(q.ABORTED,"Firestore shutting down"))}}function nv(){return new $o(t=>nw(t),ad)}async function xm(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Kk,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const u=ym(o,`Initialization of query '${qi(e.query)}' failed`);return void e.onError(u)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&wm(n)}async function _m(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Qk(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const u of o.j_)u.X_(s)&&(r=!0);o.z_=s}}r&&wm(n)}function Yk(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function wm(t){t.Y_.forEach(e=>{e.next()})}var Lf,rv;(rv=Lf||(Lf={})).ea="default",rv.Cache="cache";class bm{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Oo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Lf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e){this.key=e}}class Ow{constructor(e){this.key=e}}class Xk{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ge(),this.mutatedKeys=ge(),this.Aa=rw(e),this.Ra=new wo(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new tv,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,u=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((g,v)=>{const y=s.get(g),S=ld(this.query,v)?v:null,P=!!y&&this.mutatedKeys.has(y.key),j=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let V=!1;y&&S?y.data.isEqual(S.data)?P!==j&&(r.track({type:3,doc:S}),V=!0):this.ga(y,S)||(r.track({type:2,doc:S}),V=!0,(c&&this.Aa(S,c)>0||d&&this.Aa(S,d)<0)&&(u=!0)):!y&&S?(r.track({type:0,doc:S}),V=!0):y&&!S&&(r.track({type:1,doc:y}),V=!0,(c||d)&&(u=!0)),V&&(S?(o=o.add(S),i=j?i.add(g):i.delete(g)):(o=o.delete(g),i=i.delete(g)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const g=this.query.limitType==="F"?o.last():o.first();o=o.delete(g.key),i=i.delete(g.key),r.track({type:1,doc:g})}return{Ra:o,fa:r,ns:u,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((g,v)=>function(S,P){const j=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return j(S)-j(P)}(g.type,v.type)||this.Aa(g.doc,v.doc)),this.pa(r),s=s!=null&&s;const u=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,d=c!==this.Ea;return this.Ea=c,o.length!==0||d?{snapshot:new Oo(this.query,e.Ra,i,o,e.mutatedKeys,c===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new tv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ge(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Ow(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Dw(r))}),n}ba(e){this.Ta=e.Ts,this.da=ge();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Oo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Jk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Zk{constructor(e){this.key=e,this.va=!1}}class eC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new $o(u=>nw(u),ad),this.Ma=new Map,this.xa=new Set,this.Oa=new We(re.comparator),this.Na=new Map,this.La=new cm,this.Ba={},this.ka=new Map,this.qa=Do.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function tC(t,e,n=!0){const r=zw(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Lw(r,e,n,!0),s}async function nC(t,e){const n=zw(t);await Lw(n,e,!0,!1)}async function Lw(t,e,n,r){const s=await Tk(t.localStore,rr(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let u;return r&&(u=await rC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&kw(t.remoteStore,s),u}async function rC(t,e,n,r,s){t.Ka=(v,y,S)=>async function(j,V,w,I){let A=V.view.ma(w);A.ns&&(A=await X0(j.localStore,V.query,!1).then(({documents:E})=>V.view.ma(E,A)));const F=I&&I.targetChanges.get(V.targetId),M=I&&I.targetMismatches.get(V.targetId)!=null,z=V.view.applyChanges(A,j.isPrimaryClient,F,M);return iv(j,V.targetId,z.wa),z.snapshot}(t,v,y,S);const i=await X0(t.localStore,e,!0),o=new Xk(e,i.Ts),u=o.ma(i.documents),c=Rl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(u,t.isPrimaryClient,c);iv(t,n,d.wa);const g=new Jk(e,n,o);return t.Fa.set(e,g),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function sC(t,e,n){const r=de(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!ad(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Of(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&fm(r.remoteStore,s.targetId),Mf(r,s.targetId)}).catch(kl)):(Mf(r,s.targetId),await Of(r.localStore,s.targetId,!0))}async function iC(t,e){const n=de(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),fm(n.remoteStore,r.targetId))}async function oC(t,e,n){const r=fC(t);try{const s=await function(o,u){const c=de(o),d=lt.now(),g=u.reduce((S,P)=>S.add(P.key),ge());let v,y;return c.persistence.runTransaction("Locally write mutations","readwrite",S=>{let P=Lr(),j=ge();return c.cs.getEntries(S,g).next(V=>{P=V,P.forEach((w,I)=>{I.isValidDocument()||(j=j.add(w))})}).next(()=>c.localDocuments.getOverlayedDocuments(S,P)).next(V=>{v=V;const w=[];for(const I of u){const A=kS(I,v.get(I.key).overlayedDocument);A!=null&&w.push(new Ds(I.key,A,Q_(A.value.mapValue),_n.exists(!0)))}return c.mutationQueue.addMutationBatch(S,d,w,u)}).next(V=>{y=V;const w=V.applyToLocalDocumentSet(v,j);return c.documentOverlayCache.saveOverlays(S,V.batchId,w)})}).then(()=>({batchId:y.batchId,changes:iw(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,u,c){let d=o.Ba[o.currentUser.toKey()];d||(d=new We(Ie)),d=d.insert(u,c),o.Ba[o.currentUser.toKey()]=d}(r,s.batchId,n),await jl(r,s.changes),await pd(r.remoteStore)}catch(s){const i=ym(s,"Failed to persist write");n.reject(i)}}async function Mw(t,e){const n=de(t);try{const r=await wk(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(ke(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?ke(o.va):s.removedDocuments.size>0&&(ke(o.va),o.va=!1))}),await jl(n,r,e)}catch(r){await kl(r)}}function sv(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const u=o.view.Z_(e);u.snapshot&&s.push(u.snapshot)}),function(o,u){const c=de(o);c.onlineState=u;let d=!1;c.queries.forEach((g,v)=>{for(const y of v.j_)y.Z_(u)&&(d=!0)}),d&&wm(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function aC(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new We(re.comparator);o=o.insert(i,Dt.newNoDocument(i,ce.min()));const u=ge().add(i),c=new dd(ce.min(),new Map,new We(Ie),o,u);await Mw(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),Em(r)}else await Of(r.localStore,e,!1).then(()=>Mf(r,e,n)).catch(kl)}async function lC(t,e){const n=de(t),r=e.batch.batchId;try{const s=await _k(n.localStore,e);Fw(n,r,null),Vw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await jl(n,s)}catch(s){await kl(s)}}async function uC(t,e,n){const r=de(t);try{const s=await function(o,u){const c=de(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let g;return c.mutationQueue.lookupMutationBatch(d,u).next(v=>(ke(v!==null),g=v.keys(),c.mutationQueue.removeMutationBatch(d,v))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,g,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,g)).next(()=>c.localDocuments.getDocuments(d,g))})}(r.localStore,e);Fw(r,e,n),Vw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await jl(r,s)}catch(s){await kl(s)}}function Vw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Fw(t,e,n){const r=de(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Mf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Uw(t,r)})}function Uw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(fm(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Em(t))}function iv(t,e,n){for(const r of n)r instanceof Dw?(t.La.addReference(r.key,e),cC(t,r)):r instanceof Ow?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Uw(t,r.key)):le()}function cC(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.xa.add(r),Em(t))}function Em(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new re(Fe.fromString(e)),r=t.qa.next();t.Na.set(r,new Zk(n)),t.Oa=t.Oa.insert(n,r),kw(t.remoteStore,new hs(rr(od(n.path)),r,"TargetPurposeLimboResolution",Zp.oe))}}async function jl(t,e,n){const r=de(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((u,c)=>{o.push(r.Ka(c,e,n).then(d=>{var g;if((d||n)&&r.isPrimaryClient){const v=d?!d.fromCache:(g=n==null?void 0:n.targetChanges.get(c.targetId))===null||g===void 0?void 0:g.current;r.sharedClientState.updateQueryState(c.targetId,v?"current":"not-current")}if(d){s.push(d);const v=hm.Wi(c.targetId,d);i.push(v)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,d){const g=de(c);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>H.forEach(d,y=>H.forEach(y.$i,S=>g.persistence.referenceDelegate.addReference(v,y.targetId,S)).next(()=>H.forEach(y.Ui,S=>g.persistence.referenceDelegate.removeReference(v,y.targetId,S)))))}catch(v){if(!Cl(v))throw v;Z("LocalStore","Failed to update sequence numbers: "+v)}for(const v of d){const y=v.targetId;if(!v.fromCache){const S=g.os.get(y),P=S.snapshotVersion,j=S.withLastLimboFreeSnapshotVersion(P);g.os=g.os.insert(y,j)}}}(r.localStore,i))}async function dC(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await Tw(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(u=>{u.forEach(c=>{c.reject(new te(q.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await jl(n,r.hs)}}function hC(t,e){const n=de(t),r=n.Na.get(e);if(r&&r.va)return ge().add(r.key);{let s=ge();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const u=n.Fa.get(o);s=s.unionWith(u.view.Va)}return s}}function zw(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aC.bind(null,e),e.Ca.d_=Qk.bind(null,e.eventManager),e.Ca.$a=Yk.bind(null,e.eventManager),e}function fC(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uC.bind(null,e),e}class Pc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hd(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return xk(this.persistence,new vk,e.initialUser,this.serializer)}Ga(e){return new pk(dm.Zr,this.serializer)}Wa(e){return new Nk}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pc.provider={build:()=>new Pc};class Vf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dC.bind(null,this.syncEngine),await Wk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Gk}()}createDatastore(e){const n=hd(e.databaseInfo.databaseId),r=function(i){return new Ak(i)}(e.databaseInfo);return function(i,o,u,c){return new jk(i,o,u,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,u){return new Ok(r,s,i,o,u)}(this.localStore,this.datastore,e.asyncQueue,n=>sv(this.syncEngine,n,0),function(){return Z0.D()?new Z0:new Sk}())}createSyncEngine(e,n){return function(s,i,o,u,c,d,g){const v=new eC(s,i,o,u,c,d);return g&&(v.Qa=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=de(s);Z("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Pl(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Vf.provider={build:()=>new Vf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Or("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Pt.UNAUTHENTICATED,this.clientId=W_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ym(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vh(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Tw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ov(t,e){t.asyncQueue.verifyOperationInProgress();const n=await mC(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ev(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>ev(e.remoteStore,s)),t._onlineComponents=e}async function mC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await vh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===q.FAILED_PRECONDITION||s.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ao("Error using user provided cache. Falling back to memory cache: "+n),await vh(t,new Pc)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await vh(t,new Pc);return t._offlineComponents}async function $w(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await ov(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await ov(t,new Vf))),t._onlineComponents}function gC(t){return $w(t).then(e=>e.syncEngine)}async function jc(t){const e=await $w(t),n=e.eventManager;return n.onListen=tC.bind(null,e.syncEngine),n.onUnlisten=sC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=nC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=iC.bind(null,e.syncEngine),n}function vC(t,e,n={}){const r=new kr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,u,c,d){const g=new Tm({next:y=>{g.Za(),o.enqueueAndForget(()=>_m(i,v));const S=y.docs.has(u);!S&&y.fromCache?d.reject(new te(q.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&y.fromCache&&c&&c.source==="server"?d.reject(new te(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(y)},error:y=>d.reject(y)}),v=new bm(od(u.path),g,{includeMetadataChanges:!0,_a:!0});return xm(i,v)}(await jc(t),t.asyncQueue,e,n,r)),r.promise}function yC(t,e,n={}){const r=new kr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,u,c,d){const g=new Tm({next:y=>{g.Za(),o.enqueueAndForget(()=>_m(i,v)),y.fromCache&&c.source==="server"?d.reject(new te(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(y)},error:y=>d.reject(y)}),v=new bm(u,g,{includeMetadataChanges:!0,_a:!0});return xm(i,v)}(await jc(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(t,e,n){if(!n)throw new te(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xC(t,e,n,r){if(e===!0&&r===!0)throw new te(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function lv(t){if(!re.isDocumentKey(t))throw new te(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function uv(t){if(re.isDocumentKey(t))throw new te(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Im(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function Zt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Im(t);throw new te(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class md{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new LN;switch(r.type){case"firstParty":return new UN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=av.get(n);r&&(Z("ComponentProvider","Removing Datastore"),av.delete(n),r.terminate())}(this),Promise.resolve()}}function _C(t,e,n,r={}){var s;const i=(t=Zt(t,md))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ao("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let u,c;if(typeof r.mockUserToken=="string")u=r.mockUserToken,c=Pt.MOCK_USER;else{u=Jx(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new te(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Pt(d)}t._authCredentials=new MN(new H_(u,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Dl(this.firestore,e,this._query)}}class zt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Es(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zt(this.firestore,e,this._key)}}class Es extends Dl{constructor(e,n,r){super(e,n,od(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zt(this.firestore,null,new re(e))}withConverter(e){return new Es(this.firestore,e,this._path)}}function Ca(t,e,...n){if(t=He(t),qw("collection","path",e),t instanceof md){const r=Fe.fromString(e,...n);return uv(r),new Es(t,null,r)}{if(!(t instanceof zt||t instanceof Es))throw new te(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return uv(r),new Es(t.firestore,null,r)}}function Wt(t,e,...n){if(t=He(t),arguments.length===1&&(e=W_.newId()),qw("doc","path",e),t instanceof md){const r=Fe.fromString(e,...n);return lv(r),new zt(t,null,new re(r))}{if(!(t instanceof zt||t instanceof Es))throw new te(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return lv(r),new zt(t.firestore,t instanceof Es?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Nw(this,"async_queue_retry"),this.Vu=()=>{const r=gh();r&&Z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=gh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=gh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new kr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Cl(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let u=o.message||"";return o.stack&&(u=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),u}(r);throw Or("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=vm.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&le()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function hv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Mr extends md{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new dv,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new dv(e),this._firestoreClient=void 0,await e}}}function wC(t,e){const n=typeof t=="object"?t:$p(),r=typeof t=="string"?t:"(default)",s=ed(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Qx("firestore");i&&_C(s,...i)}return s}function gd(t){if(t._terminated)throw new te(q.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||bC(t),t._firestoreClient}function bC(t){var e,n,r;const s=t._freezeSettings(),i=function(u,c,d,g){return new ZN(u,c,d,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,Bw(g.experimentalLongPollingOptions),g.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new pC(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lo(bt.fromBase64String(e))}catch(n){throw new te(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Lo(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=/^__.*__$/;class TC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ds(e,this.data,this.fieldMask,n,this.fieldTransforms):new Al(e,this.data,n,this.fieldTransforms)}}class Hw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ds(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ww(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class Cm{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Cm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Dc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Ww(this.Cu)&&EC.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class IC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||hd(e)}Qu(e,n,r,s=!1){return new Cm({Cu:e,methodName:n,qu:r,path:yt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Am(t){const e=t._freezeSettings(),n=hd(t._databaseId);return new IC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Kw(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Rm("Data must be an object, but it was:",o,r);const u=Gw(r,o);let c,d;if(i.merge)c=new on(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const g=[];for(const v of i.mergeFields){const y=Ff(e,v,n);if(!o.contains(y))throw new te(q.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Yw(g,y)||g.push(y)}c=new on(g),d=o.fieldTransforms.filter(v=>c.covers(v.field))}else c=null,d=o.fieldTransforms;return new TC(new Gt(u),c,d)}class yd extends Nm{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yd}}function NC(t,e,n,r){const s=t.Qu(1,e,n);Rm("Data must be an object, but it was:",s,r);const i=[],o=Gt.empty();Ti(r,(c,d)=>{const g=Pm(e,c,n);d=He(d);const v=s.Nu(g);if(d instanceof yd)i.push(g);else{const y=xd(d,v);y!=null&&(i.push(g),o.set(g,y))}});const u=new on(i);return new Hw(o,u,s.fieldTransforms)}function SC(t,e,n,r,s,i){const o=t.Qu(1,e,n),u=[Ff(e,r,n)],c=[s];if(i.length%2!=0)throw new te(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)u.push(Ff(e,i[y])),c.push(i[y+1]);const d=[],g=Gt.empty();for(let y=u.length-1;y>=0;--y)if(!Yw(d,u[y])){const S=u[y];let P=c[y];P=He(P);const j=o.Nu(S);if(P instanceof yd)d.push(S);else{const V=xd(P,j);V!=null&&(d.push(S),g.set(S,V))}}const v=new on(d);return new Hw(g,v,o.fieldTransforms)}function xd(t,e){if(Qw(t=He(t)))return Rm("Unsupported field value:",e,t),Gw(t,e);if(t instanceof Nm)return function(r,s){if(!Ww(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const u of r){let c=xd(u,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=He(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return bS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=lt.fromDate(r);return{timestampValue:Ac(s.serializer,i)}}if(r instanceof lt){const i=new lt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ac(s.serializer,i)}}if(r instanceof Sm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Lo)return{bytesValue:vw(s.serializer,r._byteString)};if(r instanceof zt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:um(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof km)return function(o,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw u.Bu("VectorValues must only contain numeric values.");return im(u.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Im(r)}`)}(t,e)}function Gw(t,e){const n={};return K_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ti(t,(r,s)=>{const i=xd(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Qw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof lt||t instanceof Sm||t instanceof Lo||t instanceof zt||t instanceof Nm||t instanceof km)}function Rm(t,e,n){if(!Qw(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Im(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Ff(t,e,n){if((e=He(e))instanceof vd)return e._internalPath;if(typeof e=="string")return Pm(t,e);throw Dc("Field path arguments must be of type string or ",t,!1,void 0,n)}const kC=new RegExp("[~\\*/\\[\\]]");function Pm(t,e,n){if(e.search(kC)>=0)throw Dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vd(...e.split("."))._internalPath}catch{throw Dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let u=`Function ${e}() called with invalid data`;n&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new te(q.INVALID_ARGUMENT,u+t+c)}function Yw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class CC extends Xw{data(){return super.data()}}function Jw(t,e){return typeof e=="string"?Pm(t,e):e instanceof vd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class AC{convertValue(e,n="none"){switch(yi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ti(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Je(o.doubleValue));return new km(i)}convertGeoPoint(e){return new Sm(Je(e.latitude),Je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=tm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(dl(e));default:return null}}convertTimestamp(e){const n=ks(e);return new lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);ke(Ew(r));const s=new hl(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||Or(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class t1 extends Xw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Hu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Jw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Hu extends t1{data(e={}){return super.data(e)}}class n1{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Aa(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Hu(this._firestore,this._userDataWriter,r.key,r,new Aa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(u=>{const c=new Hu(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Aa(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const c=new Hu(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Aa(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,g=-1;return u.type!==0&&(d=o.indexOf(u.doc.key),o=o.delete(u.doc.key)),u.type!==1&&(o=o.add(u.doc),g=o.indexOf(u.doc.key)),{type:RC(u.type),doc:c,oldIndex:d,newIndex:g}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function RC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(t){t=Zt(t,zt);const e=Zt(t.firestore,Mr);return vC(gd(e),t._key).then(n=>s1(e,t,n))}class jm extends AC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new zt(this.firestore,null,n)}}function PC(t){t=Zt(t,Dl);const e=Zt(t.firestore,Mr),n=gd(e),r=new jm(e);return Zw(t._query),yC(n,t._query).then(s=>new n1(e,r,t,s))}function Uf(t,e,n){t=Zt(t,zt);const r=Zt(t.firestore,Mr),s=e1(t.converter,e);return _d(r,[Kw(Am(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,_n.none())])}function lo(t,e,n,...r){t=Zt(t,zt);const s=Zt(t.firestore,Mr),i=Am(s);let o;return o=typeof(e=He(e))=="string"||e instanceof vd?SC(i,"updateDoc",t._key,e,n,r):NC(i,"updateDoc",t._key,e),_d(s,[o.toMutation(t._key,_n.exists(!0))])}function r1(t){return _d(Zt(t.firestore,Mr),[new om(t._key,_n.none())])}function pv(t,e){const n=Zt(t.firestore,Mr),r=Wt(t),s=e1(t.converter,e);return _d(n,[Kw(Am(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,_n.exists(!1))]).then(()=>r)}function mv(t,...e){var n,r,s;t=He(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||hv(e[o])||(i=e[o],o++);const u={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(hv(e[o])){const v=e[o];e[o]=(n=v.next)===null||n===void 0?void 0:n.bind(v),e[o+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),e[o+2]=(s=v.complete)===null||s===void 0?void 0:s.bind(v)}let c,d,g;if(t instanceof zt)d=Zt(t.firestore,Mr),g=od(t._key.path),c={next:v=>{e[o]&&e[o](s1(d,t,v))},error:e[o+1],complete:e[o+2]};else{const v=Zt(t,Dl);d=Zt(v.firestore,Mr),g=v._query;const y=new jm(d);c={next:S=>{e[o]&&e[o](new n1(d,y,v,S))},error:e[o+1],complete:e[o+2]},Zw(t._query)}return function(y,S,P,j){const V=new Tm(j),w=new bm(S,V,P);return y.asyncQueue.enqueueAndForget(async()=>xm(await jc(y),w)),()=>{V.Za(),y.asyncQueue.enqueueAndForget(async()=>_m(await jc(y),w))}}(gd(d),g,u,c)}function _d(t,e){return function(r,s){const i=new kr;return r.asyncQueue.enqueueAndForget(async()=>oC(await gC(r),s,i)),i.promise}(gd(t),e)}function s1(t,e,n){const r=n.docs.get(e._key),s=new jm(t);return new t1(t,s,e._key,r,new Aa(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){zo=s})(bi),fi(new Ns("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),u=new Mr(new VN(r.getProvider("auth-internal")),new $N(r.getProvider("app-check-internal")),function(d,g){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new te(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hl(d.options.projectId,g)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),er(A0,"4.7.3",e),er(A0,"4.7.3","esm2017")})();var jC="firebase",DC="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */er(jC,DC,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1="firebasestorage.googleapis.com",o1="storageBucket",OC=2*60*1e3,LC=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends ar{constructor(e,n,r=0){super(yh(e),`Firebase Storage: ${n} (${yh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Tt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return yh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Et;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Et||(Et={}));function yh(t){return"storage/"+t}function MC(){const t="An unknown error occurred, please check the error payload for server response.";return new Tt(Et.UNKNOWN,t)}function VC(t){return new Tt(Et.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function FC(t){return new Tt(Et.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function UC(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Tt(Et.UNAUTHENTICATED,t)}function zC(){return new Tt(Et.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function $C(t){return new Tt(Et.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function BC(){return new Tt(Et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function qC(){return new Tt(Et.CANCELED,"User canceled the upload/download.")}function HC(t){return new Tt(Et.INVALID_URL,"Invalid URL '"+t+"'.")}function WC(t){return new Tt(Et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function KC(){return new Tt(Et.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+o1+"' property when initializing the app?")}function zf(t){return new Tt(Et.INVALID_ARGUMENT,t)}function a1(){return new Tt(Et.APP_DELETED,"The Firebase app was deleted.")}function GC(t){return new Tt(Et.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ya(t){throw new Tt(Et.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=yn.makeFromUrl(e,n)}catch{return new yn(e,"")}if(r.path==="")return r;throw WC(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const o="(/(.*))?$",u=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function d(F){F.path_=decodeURIComponent(F.path)}const g="v[A-Za-z0-9_]+",v=n.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",S=new RegExp(`^https?://${v}/${g}/b/${s}/o${y}`,"i"),P={bucket:1,path:3},j=n===i1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,V="([^?#]*)",w=new RegExp(`^https?://${j}/${s}/${V}`,"i"),A=[{regex:u,indices:c,postModify:i},{regex:S,indices:P,postModify:d},{regex:w,indices:{bucket:1,path:2},postModify:d}];for(let F=0;F<A.length;F++){const M=A[F],z=M.regex.exec(e);if(z){const E=z[M.indices.bucket];let _=z[M.indices.path];_||(_=""),r=new yn(E,_),M.postModify(r);break}}if(r==null)throw HC(e);return r}}class QC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t,e,n){let r=1,s=null,i=null,o=!1,u=0;function c(){return u===2}let d=!1;function g(...V){d||(d=!0,e.apply(null,V))}function v(V){s=setTimeout(()=>{s=null,t(S,c())},V)}function y(){i&&clearTimeout(i)}function S(V,...w){if(d){y();return}if(V){y(),g.call(null,V,...w);return}if(c()||o){y(),g.call(null,V,...w);return}r<64&&(r*=2);let A;u===1?(u=2,A=0):A=(r+Math.random())*1e3,v(A)}let P=!1;function j(V){P||(P=!0,y(),!d&&(s!==null?(V||(u=2),clearTimeout(s),v(0)):V||(u=1)))}return v(0),i=setTimeout(()=>{o=!0,j(!0)},n),j}function XC(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(t){return t!==void 0}function gv(t,e,n,r){if(r<e)throw zf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw zf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function eA(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ai;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ai||(ai={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,n,r,s,i,o,u,c,d,g,v,y=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=u,this.errorCallback_=c,this.timeout_=d,this.progressCallback_=g,this.connectionFactory_=v,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,P)=>{this.resolve_=S,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new bu(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=u=>{const c=u.loaded,d=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,d)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const u=i.getErrorCode()===ai.NO_ERROR,c=i.getStatus();if(!u||tA(c,this.additionalRetryCodes_)&&this.retry){const g=i.getErrorCode()===ai.ABORT;r(!1,new bu(!1,null,g));return}const d=this.successCodes_.indexOf(c)!==-1;r(!0,new bu(d,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,u=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(u,u.getResponse());JC(c)?i(c):i()}catch(c){o(c)}else if(u!==null){const c=MC();c.serverResponse=u.getErrorText(),this.errorCallback_?o(this.errorCallback_(u,c)):o(c)}else if(s.canceled){const c=this.appDelete_?a1():qC();o(c)}else{const c=BC();o(c)}};this.canceled_?n(!1,new bu(!1,null,!0)):this.backoffId_=YC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&XC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class bu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function rA(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function sA(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function iA(t,e){e&&(t["X-Firebase-GMPID"]=e)}function oA(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function aA(t,e,n,r,s,i,o=!0){const u=eA(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return iA(d,e),rA(d,n),sA(d,i),oA(d,r),new nA(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function uA(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function cA(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}class dA{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}function hA(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=zC():s=UC():n.getStatus()===402?s=FC(t.bucket):n.getStatus()===403?s=$C(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function fA(t){const e=hA(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=VC(t.path)),i.serverResponse=s.serverResponse,i}return n}function pA(t,e){const n=e.fullServerUrl(),r=ZC(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(c,d){}const u=new dA(r,s,o,i);return u.successCodes=[200,204],u.errorHandler=fA(e),u}class mA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ai.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ai.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ai.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw ya("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ya("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ya("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ya("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ya("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class gA extends mA{initXhr(){this.xhr_.responseType="text"}}function vA(){return new gA}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n){this._service=e,n instanceof yn?this._location=n:this._location=yn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xi(e,n)}get root(){const e=new yn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cA(this._location.path)}get storage(){return this._service}get parent(){const e=lA(this._location.path);if(e===null)return null;const n=new yn(this._location.bucket,e);return new xi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw GC(e)}}function yA(t){t._throwIfRoot("deleteObject");const e=pA(t.storage,t._location);return t.storage.makeRequestWithTokens(e,vA)}function xA(t,e){const n=uA(t._location.path,e),r=new yn(t._location.bucket,n);return new xi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t){return/^[A-Za-z]+:\/\//.test(t)}function wA(t,e){return new xi(t,e)}function l1(t,e){if(t instanceof Dm){const n=t;if(n._bucket==null)throw KC();const r=new xi(n,n._bucket);return e!=null?l1(r,e):r}else return e!==void 0?xA(t,e):t}function bA(t,e){if(e&&_A(e)){if(t instanceof Dm)return wA(t,e);throw zf("To use ref(service, url), the first argument must be a Storage instance.")}else return l1(t,e)}function vv(t,e){const n=e==null?void 0:e[o1];return n==null?null:yn.makeFromBucketSpec(n,t)}function EA(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Jx(s,t.app.options.projectId))}class Dm{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=i1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=OC,this._maxUploadRetryTime=LC,this._requests=new Set,s!=null?this._bucket=yn.makeFromBucketSpec(s,this._host):this._bucket=vv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=yn.makeFromBucketSpec(this._url,e):this._bucket=vv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xi(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new QC(a1());{const o=aA(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const yv="@firebase/storage",xv="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="storage";function TA(t){return t=He(t),yA(t)}function IA(t,e){return t=He(t),bA(t,e)}function NA(t=$p(),e){t=He(t);const r=ed(t,u1).getImmediate({identifier:e}),s=Qx("storage");return s&&SA(r,...s),r}function SA(t,e,n,r={}){EA(t,e,n,r)}function kA(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Dm(n,r,s,e,bi)}function CA(){fi(new Ns(u1,kA,"PUBLIC").setMultipleInstances(!0)),er(yv,xv,""),er(yv,xv,"esm2017")}CA();const AA={apiKey:"AIzaSyCfoxtQy_MCf5_fqKFq4OsXYvvyhkmwEYo",authDomain:"alfa-app-b4052.firebaseapp.com",projectId:"alfa-app-b4052",storageBucket:"alfa-app-b4052.firebasestorage.app",messagingSenderId:"644138783201",appId:"1:644138783201:web:16308247c9ef93f1d242a0"},Om=t_(AA),es=DN(Om),ct=wC(Om),RA=NA(Om),c1=B.createContext();function qo(){return B.useContext(c1)}function d1({children:t}){const[e,n]=B.useState(null),[r,s]=B.useState(null),[i,o]=B.useState(!0),[u,c]=B.useState(!1),d=M=>{const z={admin:{canViewOS:!0,canEditOS:!0,canDeleteOS:!0,canViewFinancial:!0,canEditFinancial:!0,canViewContracts:!0,canEditContracts:!0,canManageUsers:!0,canViewAllClients:!0,canViewOnlyOwnClient:!1,canPrint:!0,canExport:!0},client:{canViewOS:!0,canEditOS:!1,canDeleteOS:!1,canViewFinancial:!1,canEditFinancial:!1,canViewContracts:!1,canEditContracts:!1,canManageUsers:!1,canViewAllClients:!1,canViewOnlyOwnClient:!0,canPrint:!1,canExport:!1}};return z[M]||z.client};async function g(M,z,E,_="client",T=null){console.log("🔄 Iniciando criação de usuário:",{email:M,displayName:E,role:_});try{const N=es.currentUser,R=N==null?void 0:N.email;if(console.log("👤 Usuário atual antes da criação:",R),T&&N){console.log("🔐 Reautenticando admin...");try{const Qe=Ei.credential(R,T);await g2(N,Qe),console.log("✅ Admin reautenticado com sucesso")}catch(Qe){throw console.error("❌ Erro na reautenticação:",Qe),new Error("Senha do admin incorreta. Por favor, verifique sua senha.")}}const C=await y2(es,M,z);console.log("✅ Usuário criado no Firebase Auth:",C.user.email),E&&(await _2(C.user,{displayName:E}),console.log("✅ Perfil atualizado no Auth"));const b=d(_),Ae={uid:C.user.uid,email:M,displayName:E||M.split("@")[0],role:_,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),permissions:b,status:"active",emailVerified:!1,createdBy:R||"system"};if(console.log("📝 Salvando dados no Firestore..."),await Uf(Wt(ct,"users",C.user.uid),Ae),console.log("✅ Dados salvos no Firestore"),console.log("🔒 Fazendo logout do novo usuário..."),await x0(es),console.log("✅ Logout do novo usuário realizado"),N&&T){console.log("🔄 Tentando restaurar sessão do admin...");try{await y0(es,R,T),console.log("✅ Admin restaurado com sucesso!")}catch(Qe){console.error("❌ Erro ao restaurar admin:",Qe)}}return console.log("🎉 Usuário criado com sucesso em ambos os sistemas!"),{success:!0,userId:C.user.uid,adminRestored:!!T}}catch(N){console.error("❌ Erro ao criar usuário:",N);let R=N.message;switch(N.code){case"auth/email-already-in-use":R="Este email já está em uso por outra conta.";break;case"auth/invalid-email":R="Email inválido.";break;case"auth/operation-not-allowed":R="Operação não permitida. Contate o administrador.";break;case"auth/weak-password":R="A senha é muito fraca. Use pelo menos 6 caracteres.";break;case"auth/wrong-password":R="Senha do admin incorreta.";break;default:R="Erro ao criar usuário: "+N.message}throw new Error(R)}}async function v(M,z){console.log("Tentando login para:",M);try{const E=await y0(es,M,z);return console.log("✅ Login bem-sucedido:",E.user.email),E}catch(E){throw console.error("❌ Erro no login:",E),E}}async function y(){if(u){console.log("Logout já em andamento...");return}c(!0);try{return console.log("Iniciando logout..."),n(null),s(null),await x0(es),console.log("✅ Logout realizado com sucesso"),!0}catch(M){throw console.error("❌ Erro ao fazer logout:",M),M}finally{c(!1)}}function S(M){return console.log("Solicitando redefinição de senha para:",M),v2(es,M)}async function P(M,z){console.log("Atualizando dados do usuário:",M),await lo(Wt(ct,"users",M),{...z,updatedAt:new Date().toISOString()}),M===(e==null?void 0:e.uid)&&(console.log("Recarregando dados do usuário atual..."),await j(M))}async function j(M){console.log("Carregando dados do usuário do Firestore:",M);try{const z=await fv(Wt(ct,"users",M));if(z.exists()){const E=z.data(),_={...d(E.role||"client"),...E.permissions||{}},T={...E,permissions:_};return s(T),T}else return console.log("Usuário não encontrado no Firestore"),s(null),null}catch(z){return console.error("Erro ao carregar dados do usuário:",z),s(null),null}}const V=async(M,z)=>{if(!e||(r==null?void 0:r.role)!=="admin")throw console.warn("Tentativa não autorizada de atualizar cargo"),new Error("Sem permissão para atualizar cargos");console.log("Atualizando cargo do usuário:",M,"para",z);const E=d(z),_={role:z,permissions:E,updatedAt:new Date().toISOString()};return await lo(Wt(ct,"users",M),_),_},w=async M=>{if(!e||(r==null?void 0:r.role)!=="admin")throw console.warn("Tentativa não autorizada de deletar usuário"),new Error("Sem permissão para deletar usuários");console.log("Deletando conta do usuário:",M);try{return await r1(Wt(ct,"users",M)),console.log("✅ Usuário deletado do Firestore"),{success:!0}}catch(z){throw console.error("❌ Erro ao deletar usuário:",z),z}};function I(M){var z;return r?r.role==="admin"?!0:((z=r.permissions)==null?void 0:z[M])||!1:!1}const A=async()=>{try{const M=Ca(ct,"users"),E=(await PC(M)).docs.map(_=>({id:_.id,..._.data()}));if(console.log("Total de usuários encontrados:",E.length),(r==null?void 0:r.role)!=="admin"&&!I("canViewAllClients")){const _=E.filter(T=>T.createdBy===(e==null?void 0:e.email)||T.id===(e==null?void 0:e.uid));return console.log("Usuários filtrados para visualização:",_.length),_.sort((T,N)=>{const R=new Date(T.createdAt||0);return new Date(N.createdAt||0)-R}),_}return E.sort((_,T)=>{const N=new Date(_.createdAt||0);return new Date(T.createdAt||0)-N}),E}catch(M){throw console.error("Erro ao buscar todos os usuários:",M),M}};B.useEffect(()=>(console.log("🔧 Configurando listener onAuthStateChanged..."),E2(es,async z=>{var E,_;if(console.log("🚀 onAuthStateChanged disparado!"),console.log("👤 Usuário do Firebase:",z?`${z.email} (${z.uid})`:"Nenhum"),z&&!u){console.log("🔄 Processando usuário autenticado...");try{const T=await fv(Wt(ct,"users",z.uid));if(T.exists()){const N=T.data();console.log("📊 Dados do Firestore encontrados para:",z.email);const R={...d(N.role||"client"),...N.permissions||{}},C={...N,permissions:R};s(C),console.log("✅ Dados do usuário carregados com sucesso")}else{console.log("⚠️ Usuário não encontrado no Firestore - criando...");const N={uid:z.uid,email:z.email,displayName:z.displayName||((E=z.email)==null?void 0:E.split("@")[0])||"Usuário",role:"client",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),permissions:d("client"),status:"active",emailVerified:z.emailVerified,createdBy:"system"};await Uf(Wt(ct,"users",z.uid),N),s(N),console.log("✅ Registro criado no Firestore")}n(z),c(!1),console.log("🎉 Estado atualizado com sucesso")}catch(T){console.error("❌ Erro ao carregar dados do usuário:",T),n(z);const N=d("client"),R={uid:z.uid,email:z.email,displayName:z.displayName||((_=z.email)==null?void 0:_.split("@")[0])||"Usuário",role:"client",permissions:N};s(R),c(!1)}}else console.log(u?"🔓 Logout confirmado - limpando estado":"👤 Nenhum usuário autenticado"),n(null),s(null);o(!1)})),[u]);const F={user:e,userData:r,loading:i,isLoggingOut:u,signup:g,login:v,logout:y,resetPassword:S,updateUserRole:V,updateUserData:P,loadUserData:j,deleteUserAccount:w,getAllUsers:A,hasPermission:I,getDefaultPermissions:d};return l.jsx(c1.Provider,{value:F,children:!i&&t})}/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var PA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ne=(t,e)=>{const n=B.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:u="",children:c,...d},g)=>B.createElement("svg",{ref:g,...PA,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${jA(t)}`,u].join(" "),...d},[...e.map(([v,y])=>B.createElement(v,y)),...Array.isArray(c)?c:[c]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=ne("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=ne("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=ne("ArrowDownWideNarrow",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h10",key:"1w87gc"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h4",key:"q8tih4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=ne("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=ne("ArrowUpNarrowWide",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=ne("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=ne("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=ne("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=ne("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=ne("CalendarCheck",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=ne("CalendarDays",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=ne("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=ne("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=ne("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=ne("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=ne("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=ne("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=ne("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=ne("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=ne("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=ne("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=ne("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=ne("FileSignature",[["path",{d:"M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5",key:"kd5d3"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z",key:"johvi5"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=ne("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=ne("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=ne("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=ne("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=ne("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=ne("ListPlus",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M18 9v6",key:"1twb98"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=ne("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=ne("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=ne("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=ne("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=ne("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=ne("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=ne("MousePointerClick",[["path",{d:"m9 9 5 12 1.8-5.2L21 14Z",key:"1b76lo"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=ne("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=ne("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=ne("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=ne("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=ne("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=ne("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=ne("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=ne("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=ne("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=ne("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=ne("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=ne("ShieldAlert",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=ne("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=ne("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eR=ne("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=ne("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=ne("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=ne("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=ne("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nR=ne("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=ne("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Av={admin:"bg-red-100 text-red-800",client:"bg-purple-100 text-purple-800"},Lc={admin:"Administrador",client:"Cliente"},rR=({onClose:t,onSuccess:e})=>{const{signup:n,user:r}=qo(),[s,i]=B.useState({email:"",password:"",confirmPassword:"",displayName:"",role:"client"}),[o,u]=B.useState(!1),[c,d]=B.useState(""),[g,v]=B.useState(!1),[y,S]=B.useState(!1),[P,j]=B.useState(!1),V=async w=>{if(w.preventDefault(),d(""),v(!1),s.password!==s.confirmPassword){d("As senhas não conferem");return}if(s.password.length<6){d("A senha deve ter pelo menos 6 caracteres");return}u(!0);try{console.log("Criando usuário:",{email:s.email,displayName:s.displayName,role:s.role});const I=await n(s.email,s.password,s.displayName,s.role);I.success&&(console.log("Usuário criado com sucesso!",I),v(!0),i({email:"",password:"",confirmPassword:"",displayName:"",role:"client"}),setTimeout(()=>{e==null||e(),t()},2e3))}catch(I){switch(console.error("Erro ao criar usuário:",I),I.message){case"Senha do admin incorreta.":d("Sua senha de administrador está incorreta. Por favor, verifique e tente novamente.");break;case"Este email já está em uso por outra conta.":d("Este email já está em uso por outra conta.");break;case"Email inválido.":d("Email inválido.");break;case"A senha é muito fraca. Use pelo menos 6 caracteres.":d("A senha é muito fraca. Use pelo menos 6 caracteres.");break;default:d(I.message||"Erro ao criar usuário. Verifique os dados e tente novamente.")}}finally{u(!1)}};return l.jsxs("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center p-5",children:[l.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-md",onClick:t}),l.jsxs("div",{className:"relative z-50 bg-white rounded-2xl w-full max-w-md shadow-2xl transform transition-all duration-300 scale-100",children:[l.jsxs("div",{className:"p-6 border-b flex justify-between items-center",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"bg-green-100 p-2 rounded-lg text-green-600",children:l.jsx(_r,{size:24})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-bold text-slate-900",children:"Criar Novo Usuário"}),l.jsx("p",{className:"text-slate-500 text-sm",children:"Adicione um novo usuário ao sistema"})]})]}),l.jsx("button",{onClick:t,className:"p-2 hover:bg-slate-100 rounded-lg transition-colors",disabled:o,children:l.jsx(Xe,{size:20})})]}),l.jsxs("form",{onSubmit:V,className:"p-6 space-y-4",children:[c&&l.jsxs("div",{className:"bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-200",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx(Vr,{size:16}),l.jsx("span",{className:"font-bold",children:"Erro"})]}),c]}),g&&l.jsxs("div",{className:"bg-green-50 text-green-600 p-3 rounded-lg text-sm border border-green-200",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx(Mo,{size:16}),l.jsx("span",{className:"font-bold",children:"Sucesso!"})]}),"Usuário criado com sucesso! O usuário foi registrado no Authentication e no Firestore.",l.jsx("div",{className:"mt-2 text-xs",children:"Fechando o modal em instantes..."})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Nome *"}),l.jsxs("div",{className:"relative",children:[l.jsx(Oc,{className:"absolute left-3 top-3 text-slate-400",size:18}),l.jsx("input",{type:"text",required:!0,className:"w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all",value:s.displayName,onChange:w=>i({...s,displayName:w.target.value}),placeholder:"João Silva",disabled:o||g})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Email *"}),l.jsxs("div",{className:"relative",children:[l.jsx(Lm,{className:"absolute left-3 top-3 text-slate-400",size:18}),l.jsx("input",{type:"email",required:!0,className:"w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all",value:s.email,onChange:w=>i({...s,email:w.target.value}),placeholder:"usuario@exemplo.com",disabled:o||g})]})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Senha *"}),l.jsxs("div",{className:"relative",children:[l.jsx(Iv,{className:"absolute left-3 top-3 text-slate-400",size:18}),l.jsx("input",{type:y?"text":"password",required:!0,className:"w-full pl-10 pr-10 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all",value:s.password,onChange:w=>i({...s,password:w.target.value}),placeholder:"••••••••",disabled:o||g,minLength:"6"}),l.jsx("button",{type:"button",onClick:()=>S(!y),className:"absolute right-3 top-3 text-slate-400 hover:text-slate-600",disabled:o||g,children:y?l.jsx(wv,{size:18}):l.jsx(bv,{size:18})})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Confirmar Senha *"}),l.jsxs("div",{className:"relative",children:[l.jsx(Iv,{className:"absolute left-3 top-3 text-slate-400",size:18}),l.jsx("input",{type:P?"text":"password",required:!0,className:"w-full pl-10 pr-10 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all",value:s.confirmPassword,onChange:w=>i({...s,confirmPassword:w.target.value}),placeholder:"••••••••",disabled:o||g,minLength:"6"}),l.jsx("button",{type:"button",onClick:()=>j(!P),className:"absolute right-3 top-3 text-slate-400 hover:text-slate-600",disabled:o||g,children:P?l.jsx(wv,{size:18}):l.jsx(bv,{size:18})})]})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Cargo *"}),l.jsxs("div",{className:"relative",children:[l.jsx(wd,{className:"absolute left-3 top-3 text-slate-400",size:18}),l.jsx("select",{className:"w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all bg-white",value:s.role,onChange:w=>i({...s,role:w.target.value}),disabled:o||g,children:Object.entries(Lc).map(([w,I])=>l.jsx("option",{value:w,children:I},w))})]})]}),l.jsxs("div",{className:"pt-4 flex gap-3",children:[l.jsx("button",{type:"button",onClick:t,className:"flex-1 py-3 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors disabled:opacity-50",disabled:o,children:"Cancelar"}),l.jsx("button",{type:"submit",disabled:o||g,className:"flex-1 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50",children:o?l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Criando..."]}):g?l.jsxs(l.Fragment,{children:[l.jsx(Mo,{size:18}),"Usuário Criado!"]}):l.jsxs(l.Fragment,{children:[l.jsx(_r,{size:18}),"Criar Usuário"]})})]})]})]})]})},sR=({user:t,onClose:e,onSuccess:n})=>{const{updateUserData:r}=qo(),[s,i]=B.useState({displayName:t.displayName||"",role:t.role||"client",newPassword:"",confirmNewPassword:""}),[o,u]=B.useState(!1),[c,d]=B.useState(""),[g,v]=B.useState(""),[y,S]=B.useState(!1),[P,j]=B.useState(!1),V=async()=>{if(u(!0),d(""),v(""),s.newPassword||s.confirmNewPassword){if(s.newPassword!==s.confirmNewPassword){d("As novas senhas não conferem"),u(!1);return}if(s.newPassword.length<6){d("A nova senha deve ter pelo menos 6 caracteres"),u(!1);return}}try{const w={displayName:s.displayName,role:s.role,updatedAt:new Date().toISOString()};s.newPassword&&console.log("Nova senha definida (necessitaria Admin SDK para atualizar no Authentication)"),await r(t.id,w),v("Dados do usuário atualizados com sucesso!"),setTimeout(()=>{n==null||n(),e()},2e3)}catch(w){console.error("Erro ao atualizar usuário:",w),d("Erro ao atualizar usuário: "+w.message)}finally{u(!1)}};return l.jsxs("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center p-5",children:[l.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-md",onClick:e}),l.jsxs("div",{className:"relative z-50 bg-white rounded-2xl w-full max-w-md shadow-2xl transform transition-all duration-300 scale-100",children:[l.jsxs("div",{className:"p-6 border-b flex justify-between items-center",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"bg-blue-100 p-2 rounded-lg text-blue-600",children:l.jsx(JA,{size:24})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-bold text-slate-900",children:"Editar Usuário"}),l.jsx("p",{className:"text-slate-500 text-sm",children:"Atualize os dados do usuário"})]})]}),l.jsx("button",{onClick:e,className:"p-2 hover:bg-slate-100 rounded-lg transition-colors",disabled:o,children:l.jsx(Xe,{size:20})})]}),l.jsxs("div",{className:"p-6 space-y-4",children:[c&&l.jsxs("div",{className:"bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-200",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx(Vr,{size:16}),l.jsx("span",{className:"font-bold",children:"Erro"})]}),c]}),g&&l.jsxs("div",{className:"bg-green-50 text-green-600 p-3 rounded-lg text-sm border border-green-200",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx(Mo,{size:16}),l.jsx("span",{className:"font-bold",children:"Sucesso!"})]}),g]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Nome"}),l.jsxs("div",{className:"relative",children:[l.jsx(Oc,{className:"absolute left-3 top-3 text-slate-400",size:18}),l.jsx("input",{type:"text",className:"w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all",value:s.displayName,onChange:w=>i({...s,displayName:w.target.value}),placeholder:"João Silva",disabled:o})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Email"}),l.jsxs("div",{className:"relative",children:[l.jsx(Lm,{className:"absolute left-3 top-3 text-slate-400",size:18}),l.jsx("input",{type:"email",className:"w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg bg-slate-50 cursor-not-allowed",value:t.email,disabled:!0})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Cargo"}),l.jsxs("div",{className:"relative",children:[l.jsx(wd,{className:"absolute left-3 top-3 text-slate-400",size:18}),l.jsx("select",{className:"w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all",value:s.role,onChange:w=>i({...s,role:w.target.value}),disabled:o,children:Object.entries(Lc).map(([w,I])=>l.jsx("option",{value:w,children:I},w))})]})]}),l.jsxs("div",{className:"pt-4 flex gap-3",children:[l.jsx("button",{onClick:e,disabled:o,className:"flex-1 py-2.5 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors",children:"Cancelar"}),l.jsx("button",{onClick:V,disabled:o,className:"flex-1 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2",children:o?l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Salvando..."]}):l.jsxs(l.Fragment,{children:[l.jsx(qf,{size:16}),"Salvar Alterações"]})})]})]})]})]})},iR=({user:t,onClose:e,onSuccess:n})=>{const{deleteUserAccount:r}=qo(),[s,i]=B.useState(!1),[o,u]=B.useState(""),[c,d]=B.useState(""),g=async()=>{i(!0),u("");try{await r(t.id),d("Usuário deletado com sucesso!"),setTimeout(()=>{n==null||n(),e()},2e3)}catch(v){console.error("Erro ao deletar usuário:",v),u("Erro ao deletar usuário: "+v.message)}finally{i(!1)}};return l.jsxs("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center p-5",children:[l.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-md",onClick:e}),l.jsxs("div",{className:"relative z-50 bg-white rounded-2xl w-full max-w-md shadow-2xl",children:[l.jsx("div",{className:"p-6 border-b",children:l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"bg-red-100 p-2 rounded-lg text-red-600",children:l.jsx(gl,{size:24})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-bold text-slate-900",children:"Deletar Usuário"}),l.jsx("p",{className:"text-slate-500 text-sm",children:"Esta ação não pode ser desfeita"})]})]})}),l.jsxs("div",{className:"p-6 space-y-4",children:[o&&l.jsxs("div",{className:"bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-200",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx(Vr,{size:16}),l.jsx("span",{className:"font-bold",children:"Erro"})]}),o]}),c&&l.jsxs("div",{className:"bg-green-50 text-green-600 p-3 rounded-lg text-sm border border-green-200",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx(Mo,{size:16}),l.jsx("span",{className:"font-bold",children:"Sucesso!"})]}),c]}),l.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4",children:[l.jsx("p",{className:"text-red-800 font-bold mb-2",children:"⚠️ Atenção!"}),l.jsxs("p",{className:"text-red-700 text-sm",children:["Você está prestes a deletar o usuário ",l.jsx("span",{className:"font-bold",children:t.displayName})," (",t.email,"). Esta ação removerá permanentemente o usuário do sistema."]}),l.jsxs("p",{className:"text-red-700 text-sm mt-2",children:[l.jsx("span",{className:"font-bold",children:"Nota:"})," A conta do Firebase Authentication não será deletada automaticamente. O usuário ainda poderá fazer login, mas não terá acesso ao sistema."]})]}),l.jsxs("div",{className:"pt-4 flex gap-3",children:[l.jsx("button",{onClick:e,disabled:s,className:"flex-1 py-2.5 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors",children:"Cancelar"}),l.jsx("button",{onClick:g,disabled:s||c,className:"flex-1 py-2.5 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2",children:s?l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Deletando..."]}):c?l.jsxs(l.Fragment,{children:[l.jsx(Mo,{size:16}),"Deletado!"]}):l.jsxs(l.Fragment,{children:[l.jsx(gl,{size:16}),"Deletar Usuário"]})})]})]})]})]})};function oR(){const{userData:t,hasPermission:e,getAllUsers:n}=qo(),[r,s]=B.useState([]),[i,o]=B.useState(!0),[u,c]=B.useState(null),[d,g]=B.useState(""),[v,y]=B.useState({}),[S,P]=B.useState(!1),[j,V]=B.useState(!1),[w,I]=B.useState(!1),[A,F]=B.useState(null),[M,z]=B.useState(0);B.useEffect(()=>{e("canManageUsers")&&E()},[e,M]);const E=async()=>{o(!0),c(null);try{const C=await n();s(C)}catch(C){console.error("Erro ao carregar usuários:",C),c("Falha ao carregar a lista de usuários. Verifique a conexão e tente novamente.")}finally{o(!1)}},_=C=>{F(C),V(!0)},T=C=>{F(C),I(!0)},N=C=>{y(b=>({...b,[C]:!b[C]}))},R=r.filter(C=>{var b,Ae,Qe;return((b=C.email)==null?void 0:b.toLowerCase().includes(d.toLowerCase()))||((Ae=C.displayName)==null?void 0:Ae.toLowerCase().includes(d.toLowerCase()))||((Qe=C.role)==null?void 0:Qe.toLowerCase().includes(d.toLowerCase()))});return e("canManageUsers")?l.jsxs("div",{className:"p-6 space-y-6 relative",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-3xl font-black text-slate-900",children:"Gerenciamento de Usuários"}),l.jsx("p",{className:"text-slate-500",children:"Controle de cargos e permissões do sistema"})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("div",{className:"relative",children:[l.jsx(Hf,{className:"absolute left-4 top-3.5 text-slate-400",size:18}),l.jsx("input",{type:"text",placeholder:"Buscar usuários...",className:"pl-11 pr-4 py-3 rounded-xl border border-slate-200 w-64 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all",value:d,onChange:C=>g(C.target.value)})]}),l.jsxs("button",{onClick:()=>z(C=>C+1),className:"bg-slate-200 text-slate-700 px-4 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-300 transition-colors",children:[l.jsx(p1,{size:18}),"Atualizar"]}),l.jsxs("button",{onClick:()=>P(!0),className:"bg-green-600 text-white px-4 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-green-700 transition-colors",children:[l.jsx(_r,{size:18}),"Novo Usuário"]})]})]}),u&&l.jsxs("div",{className:"bg-red-50 text-red-600 p-4 rounded-xl mb-4 border border-red-200",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[l.jsx(Vr,{size:20}),l.jsx("span",{className:"font-bold",children:"Erro"})]}),u,l.jsx("button",{onClick:E,className:"mt-2 text-sm underline font-bold",children:"Tentar novamente"})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-6",children:[l.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm",children:[l.jsx("div",{className:"text-sm font-bold text-slate-400 uppercase mb-1",children:"Total"}),l.jsx("div",{className:"text-2xl font-black text-slate-900",children:r.length})]}),l.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm",children:[l.jsx("div",{className:"text-sm font-bold text-slate-400 uppercase mb-1",children:"Administradores"}),l.jsx("div",{className:"text-2xl font-black text-red-600",children:r.filter(C=>C.role==="admin").length})]}),l.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm",children:[l.jsx("div",{className:"text-sm font-bold text-slate-400 uppercase mb-1",children:"Clientes"}),l.jsx("div",{className:"text-2xl font-black text-purple-600",children:r.filter(C=>C.role==="client").length})]})]}),l.jsx("div",{className:"bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm",children:l.jsx("div",{className:"overflow-x-auto",children:l.jsxs("table",{className:"w-full",children:[l.jsx("thead",{className:"bg-slate-50 border-b",children:l.jsxs("tr",{children:[l.jsx("th",{className:"text-left p-4 text-sm font-bold text-slate-400 uppercase",children:"Usuário"}),l.jsx("th",{className:"text-left p-4 text-sm font-bold text-slate-400 uppercase",children:"Cargo"}),l.jsx("th",{className:"text-left p-4 text-sm font-bold text-slate-400 uppercase",children:"Permissões"}),l.jsx("th",{className:"text-left p-4 text-sm font-bold text-slate-400 uppercase",children:"Ações"})]})}),l.jsx("tbody",{children:i?l.jsx("tr",{children:l.jsx("td",{colSpan:"4",className:"p-8 text-center",children:l.jsx("div",{className:"inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-t-transparent"})})}):R.length===0?l.jsx("tr",{children:l.jsx("td",{colSpan:"4",className:"p-8 text-center text-slate-400",children:"Nenhum usuário encontrado"})}):R.map(C=>l.jsxs($v.Fragment,{children:[l.jsxs("tr",{className:"border-b border-slate-100 hover:bg-slate-50 transition-colors",children:[l.jsxs("td",{className:"p-4",children:[l.jsx("div",{className:"font-bold text-slate-800",children:C.displayName}),l.jsx("div",{className:"text-sm text-slate-500",children:C.email})]}),l.jsx("td",{className:"p-4",children:l.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-bold ${Av[C.role]||"bg-gray-100 text-gray-800"}`,children:Lc[C.role]||C.role})}),l.jsx("td",{className:"p-4",children:l.jsxs("button",{onClick:()=>N(C.id),className:"text-blue-600 hover:text-blue-800 text-sm font-bold flex items-center gap-1 transition-colors",children:[v[C.id]?"Ocultar":"Ver"," Permissões",v[C.id]?l.jsx(f1,{size:14}):l.jsx(h1,{size:14})]})}),l.jsx("td",{className:"p-4",children:l.jsxs("div",{className:"flex gap-2",children:[l.jsx("button",{onClick:()=>_(C),className:"bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1 hover:bg-blue-700 transition-colors",children:l.jsx(YA,{size:14})}),l.jsx("button",{onClick:()=>T(C),className:"bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1 hover:bg-red-700 transition-colors",disabled:C.id===(t==null?void 0:t.uid),children:l.jsx(gl,{size:14})})]})})]}),v[C.id]&&l.jsx("tr",{className:"bg-slate-50",children:l.jsx("td",{colSpan:"4",className:"p-4",children:l.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:C.permissions&&Object.entries(C.permissions).map(([b,Ae])=>l.jsxs("div",{className:"flex items-center gap-2",children:[Ae?l.jsx(Mo,{size:16,className:"text-green-500"}):l.jsx(nR,{size:16,className:"text-red-300"}),l.jsx("span",{className:"text-sm text-slate-700 capitalize",children:b.replace(/([A-Z])/g," $1").toLowerCase()})]},b))})})})]},C.id))})]})})}),l.jsxs("div",{className:"bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm",children:[l.jsxs("h3",{className:"text-lg font-bold text-slate-800 mb-3 flex items-center gap-2",children:[l.jsx(wd,{size:20})," Legenda de Cargos"]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-4",children:Object.entries(Lc).map(([C,b])=>l.jsxs("div",{className:"bg-white p-4 rounded-xl border",children:[l.jsx("div",{className:`px-3 py-1 rounded-full text-xs font-bold inline-block mb-2 ${Av[C]}`,children:b}),l.jsxs("ul",{className:"text-sm text-slate-600 space-y-1",children:[C==="admin"&&l.jsx("li",{children:"• Acesso total ao sistema"}),C==="client"&&l.jsx("li",{children:"• Dados próprios apenas"})]})]},C))})]}),S&&l.jsx(rR,{onClose:()=>P(!1),onSuccess:()=>{E(),z(C=>C+1)}}),j&&A&&l.jsx(sR,{user:A,onClose:()=>{V(!1),F(null)},onSuccess:()=>{E(),z(C=>C+1)}}),w&&A&&l.jsx(iR,{user:A,onClose:()=>{I(!1),F(null)},onSuccess:()=>{E(),z(C=>C+1)}})]}):l.jsxs("div",{className:"p-8 text-center",children:[l.jsx(Vr,{className:"mx-auto text-amber-500 mb-4",size:48}),l.jsx("h3",{className:"text-xl font-bold text-slate-800",children:"Acesso Restrito"}),l.jsx("p",{className:"text-slate-600 mt-2",children:"Você não tem permissão para gerenciar usuários."})]})}function aR(){const{login:t}=qo(),[e,n]=B.useState(""),[r,s]=B.useState(""),[i,o]=B.useState(""),[u,c]=B.useState(!1),d=async g=>{g.preventDefault(),o(""),c(!0);try{await t(e,r)}catch(v){switch(console.error("Erro de login:",v),v.code){case"auth/user-not-found":case"auth/wrong-password":o("Email ou senha incorretos.");break;case"auth/invalid-email":o("Email inválido.");break;case"auth/too-many-requests":o("Muitas tentativas. Tente novamente mais tarde.");break;case"auth/user-disabled":o("Esta conta foi desativada.");break;default:o("Erro ao fazer login. Tente novamente.")}}finally{c(!1)}};return l.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4",children:l.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md",children:[l.jsxs("div",{className:"text-center mb-8",children:[l.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4",children:l.jsx(Sv,{className:"text-white",size:28})}),l.jsx("h1",{className:"text-2xl font-black text-slate-900",children:"ALFA"}),l.jsx("p",{className:"text-slate-500 text-sm font-medium mt-1",children:"Tecnologia Hospitalar"})]}),l.jsxs("form",{onSubmit:d,className:"space-y-6",children:[i&&l.jsxs("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg flex items-center gap-3",children:[l.jsx(Vr,{size:18}),l.jsx("span",{className:"text-sm font-medium",children:i})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Email"}),l.jsxs("div",{className:"relative",children:[l.jsx(Lm,{className:"absolute left-3 top-3 text-slate-400",size:18}),l.jsx("input",{type:"email",required:!0,className:"w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all",placeholder:"seu@email.com",value:e,onChange:g=>n(g.target.value),disabled:u})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Senha"}),l.jsxs("div",{className:"relative",children:[l.jsx(Sv,{className:"absolute left-3 top-3 text-slate-400",size:18}),l.jsx("input",{type:"password",required:!0,className:"w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all",placeholder:"••••••••",value:r,onChange:g=>s(g.target.value),disabled:u})]})]}),l.jsx("button",{type:"submit",disabled:u,className:"w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:u?l.jsxs(l.Fragment,{children:[l.jsx(Gi,{className:"animate-spin",size:18}),"Entrando..."]}):l.jsxs(l.Fragment,{children:[l.jsx(WA,{size:18}),"Entrar no Sistema"]})})]}),l.jsx("div",{className:"mt-8 pt-6 border-t border-slate-100 text-center",children:l.jsx("p",{className:"text-slate-500 text-sm",children:"Entre em contato com o administrador para criar uma conta."})})]})})}const xa="/alfa-app/assets/logo-CJe1SxB-.png";var m1={exports:{}};(function(t,e){(function(n,r){r()})(la,function(){function n(d,g){return typeof g>"u"?g={autoBom:!1}:typeof g!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),g={autoBom:!g}),g.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(d.type)?new Blob(["\uFEFF",d],{type:d.type}):d}function r(d,g,v){var y=new XMLHttpRequest;y.open("GET",d),y.responseType="blob",y.onload=function(){c(y.response,g,v)},y.onerror=function(){console.error("could not download file")},y.send()}function s(d){var g=new XMLHttpRequest;g.open("HEAD",d,!1);try{g.send()}catch{}return 200<=g.status&&299>=g.status}function i(d){try{d.dispatchEvent(new MouseEvent("click"))}catch{var g=document.createEvent("MouseEvents");g.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),d.dispatchEvent(g)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof la=="object"&&la.global===la?la:void 0,u=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!u?function(d,g,v){var y=o.URL||o.webkitURL,S=document.createElement("a");g=g||d.name||"download",S.download=g,S.rel="noopener",typeof d=="string"?(S.href=d,S.origin===location.origin?i(S):s(S.href)?r(d,g,v):i(S,S.target="_blank")):(S.href=y.createObjectURL(d),setTimeout(function(){y.revokeObjectURL(S.href)},4e4),setTimeout(function(){i(S)},0))}:"msSaveOrOpenBlob"in navigator?function(d,g,v){if(g=g||d.name||"download",typeof d!="string")navigator.msSaveOrOpenBlob(n(d,v),g);else if(s(d))r(d,g,v);else{var y=document.createElement("a");y.href=d,y.target="_blank",setTimeout(function(){i(y)})}}:function(d,g,v,y){if(y=y||open("","_blank"),y&&(y.document.title=y.document.body.innerText="downloading..."),typeof d=="string")return r(d,g,v);var S=d.type==="application/octet-stream",P=/constructor/i.test(o.HTMLElement)||o.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||S&&P||u)&&typeof FileReader<"u"){var V=new FileReader;V.onloadend=function(){var A=V.result;A=j?A:A.replace(/^data:[^;]*;/,"data:attachment/file;"),y?y.location.href=A:location=A,y=null},V.readAsDataURL(d)}else{var w=o.URL||o.webkitURL,I=w.createObjectURL(d);y?y.location=I:location.href=I,y=null,setTimeout(function(){w.revokeObjectURL(I)},4e4)}});o.saveAs=c.saveAs=c,t.exports=c})})(m1);var lR=m1.exports;const Kn="alfa-tecnologia-hospitalar-prod",co=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],uR=({data:t,colors:e,onClick:n})=>{const r=t.reduce((i,o)=>i+o.value,0);let s=0;return r===0?l.jsx("div",{className:"text-gray-400 text-xs text-center py-10",children:"Sem dados"}):l.jsxs("div",{className:"relative w-48 h-48 mx-auto group cursor-pointer",children:[l.jsxs("svg",{viewBox:"0 0 100 100",className:"transform -rotate-90 w-full h-full",children:[t.map((i,o)=>{const u=i.value/r*360,c=u>180?1:0,d=50+40*Math.cos(s*Math.PI/180),g=50+40*Math.sin(s*Math.PI/180),v=50+40*Math.cos((s+u)*Math.PI/180),y=50+40*Math.sin((s+u)*Math.PI/180),S=r===i.value?"M 50 10 a 40 40 0 1 1 0 80 a 40 40 0 1 1 0 -80":`M 50 50 L ${d} ${g} A 40 40 0 ${c} 1 ${v} ${y} Z`;return s+=u,l.jsx("path",{d:S,fill:e[o%e.length],stroke:"white",strokeWidth:"2",className:"hover:opacity-80 transition-opacity",onClick:P=>{P.stopPropagation(),n(i.label)}},o)}),l.jsx("circle",{cx:"50",cy:"50",r:"25",fill:"white",className:"pointer-events-none"})]}),l.jsxs("div",{className:"absolute inset-0 flex items-center justify-center flex-col pointer-events-none",children:[l.jsx("span",{className:"text-3xl font-black text-slate-800",children:r}),l.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-400",children:"Total"})]}),l.jsx("div",{className:"absolute -bottom-6 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-blue-500 font-bold bg-white/90 py-1 rounded-full pointer-events-none",children:"Clique para filtrar"})]})},cR=t=>{B.useEffect(()=>{const e=n=>{n.key==="Escape"&&t()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[t])},Rv=({data:t,maxVal:e,colorClass:n,onClick:r,showValues:s=!0})=>l.jsx("div",{className:"space-y-3",children:t.map((i,o)=>l.jsxs("div",{className:"space-y-1 cursor-pointer group hover:bg-slate-50 p-2 rounded-xl transition-colors",onClick:()=>r&&r(i.label),children:[l.jsxs("div",{className:"flex justify-between text-xs font-bold text-slate-600 group-hover:text-blue-600 transition-colors",children:[l.jsx("span",{className:"truncate pr-2",children:i.label}),l.jsx("span",{className:"whitespace-nowrap",children:s?i.valueFormatted||i.value:"•••••"})]}),l.jsx("div",{className:"h-3 w-full bg-slate-100 rounded-full overflow-hidden",children:l.jsx("div",{className:`h-full rounded-full ${n} group-hover:brightness-90 transition-all`,style:{width:`${e>0?i.value/e*100:0}%`}})})]},o))}),dR=({message:t,type:e="error",onClose:n})=>{const r={error:{bg:"bg-red-500",icon:l.jsx(Vr,{size:20}),title:"Atenção!",border:"border-l-4 border-red-600"},success:{bg:"bg-green-500",icon:l.jsx($f,{size:20}),title:"Sucesso!",border:"border-l-4 border-green-600"},info:{bg:"bg-blue-500",icon:l.jsx(uo,{size:20}),title:"Informação",border:"border-l-4 border-blue-600"},warning:{bg:"bg-amber-500",icon:l.jsx(Vr,{size:20}),title:"Aviso!",border:"border-l-4 border-amber-600"}},{bg:s,icon:i,title:o,border:u}=r[e];return l.jsx("div",{className:"fixed top-6 right-6 z-[100] animate-in slide-in-from-right-8 fade-in duration-300",children:l.jsxs("div",{className:`${s} ${u} text-white px-6 py-4 rounded-r-2xl shadow-2xl flex items-start gap-3 min-w-[320px] max-w-[400px]`,children:[l.jsx("div",{className:"flex-shrink-0 mt-0.5",children:i}),l.jsxs("div",{className:"flex-1",children:[l.jsx("div",{className:"font-bold text-sm mb-1",children:o}),l.jsx("div",{className:"text-sm opacity-90 whitespace-pre-line",children:t})]}),l.jsx("button",{onClick:n,className:"ml-2 opacity-70 hover:opacity-100 transition-opacity flex-shrink-0",children:l.jsx(Xe,{size:16})})]})})},Ne=t=>t?typeof t=="number"?t:parseFloat(t.toString().replace(/\./g,"").replace(",","."))||0:0,ts=t=>{if(!t||t.length===0)return[];const e=new Set;return t.forEach(n=>{if(typeof n=="string"){let r=n.replace(/([a-zà-ú])([A-ZÀ-Ú])/g,`$1
$2`).replace(/([A-ZÀ-Ú][a-zà-ú]+)([A-ZÀ-Ú][a-zà-ú]+)/g,`$1
$2`).replace(/(\d)([A-ZÀ-Úa-zà-ú])/g,`$1
$2`).trim();const s=/[\n\r,.;!?]+/;r.split(s).forEach(o=>{const u=o.trim();u.length>2&&e.add(u)})}}),Array.from(e).sort()},Gn=({icon:t,label:e,active:n,onClick:r,isSidebarOpen:s})=>l.jsxs("button",{onClick:r,className:`
            w-full flex items-center transition-colors rounded-xl
            ${s?"gap-4 p-3":"justify-center p-2"}
            ${n?"bg-blue-600 text-white":"text-slate-400 hover:bg-slate-800"}
        `,title:s?"":e,children:[l.jsx("div",{className:`
            flex items-center justify-center
            ${s?"w-6":"w-8"}
        `,children:t}),s&&l.jsx("span",{className:"text-sm font-bold tracking-tight whitespace-nowrap",children:e})]}),pn=({value:t,onChange:e,options:n,className:r="",disabled:s=!1,id:i,label:o,variant:u="default"})=>{const c=B.useRef(null),d=S=>{if(s)return;const P=n.findIndex(j=>j.value===t||j===t);switch(S.key){case"ArrowUp":case"ArrowLeft":if(S.preventDefault(),P>0){const j=n[P-1].value||n[P-1];e({target:{value:j}})}break;case"ArrowDown":case"ArrowRight":if(S.preventDefault(),P<n.length-1){const j=n[P+1].value||n[P+1];e({target:{value:j}})}break;case"Home":if(S.preventDefault(),n.length>0){const j=n[0].value||n[0];e({target:{value:j}})}break;case"End":if(S.preventDefault(),n.length>0){const j=n[n.length-1].value||n[n.length-1];e({target:{value:j}})}break;case" ":case"Enter":S.preventDefault(),c.current&&c.current.focus();break}},g={default:"bg-white border border-slate-200 text-slate-900",dark:"bg-slate-900 text-white border-none",light:"bg-slate-100 border-none text-slate-900",indigo:"bg-white border border-indigo-200 text-slate-900"},v="w-full p-4 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold cursor-pointer",y=g[u]||g.default;return l.jsx("select",{ref:c,id:i,value:t,onChange:e,className:`${v} ${y} ${r} ${s?"opacity-50 cursor-not-allowed":""}`,disabled:s,onKeyDown:d,"aria-label":o,tabIndex:0,children:n.map((S,P)=>typeof S=="object"?l.jsx("option",{value:S.value,tabIndex:0,className:"text-slate-900",children:S.label},S.value):l.jsx("option",{value:S,tabIndex:0,className:"text-slate-900",children:S},S))})},hR=({value:t,onChange:e,billingType:n})=>{const r=[`1ª Visita de ${co[new Date().getMonth()]}`,`2ª Visita de ${co[new Date().getMonth()]}`,`3ª Visita de ${co[new Date().getMonth()]}`,`4ª Visita de ${co[new Date().getMonth()]}`];return n!=="Contrato de manutenção"?null:l.jsx(pn,{value:t,onChange:e,options:r,variant:"indigo",className:"animate-in slide-in-from-top-2",label:"Visita de manutenção"})},fR=({isOpen:t,onClose:e,selectedOrdersCount:n,totalValue:r,initialData:s,onConfirm:i})=>{const[o,u]=B.useState({paymentCondition:"À vista",installments:"",discount5Days:!1,finalChargedAmount:r});B.useEffect(()=>{t&&u({paymentCondition:s.paymentCondition||"À vista",installments:s.installments||"",discount5Days:s.discount5Days||!1,finalChargedAmount:r})},[t,s,r]),B.useEffect(()=>{if(o.discount5Days){const g=r*.05,v=r-g;u(y=>({...y,finalChargedAmount:v}))}else u(g=>({...g,finalChargedAmount:r}))},[o.discount5Days,r]);const c={Boleto:["30 / 60 dias","5 dias (5% de desconto)"],Cartão:["1x (30 Dias)","2x (30/60 Dias)","3x (30/60/90 Dias)","4x (30/60/90/120 Dias)"]},d=()=>{i(o),e()};return t?l.jsx("div",{className:"fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4",children:l.jsxs("div",{className:"bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-6 animate-in zoom-in-95",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"bg-blue-100 p-3 rounded-full text-blue-600",children:l.jsx(Bf,{size:24})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-black text-slate-900",children:"Condições de Pagamento"}),l.jsxs("p",{className:"text-slate-500 text-sm",children:["Ajuste as condições para ",n," OS(s) selecionadas"]})]})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase",children:"Valor Total"}),l.jsxs("div",{className:"w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-black text-2xl text-slate-800 text-center",children:["R$ ",r.toLocaleString("pt-BR",{minimumFractionDigits:2})]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase",children:"Condição de Pagamento"}),l.jsx(pn,{value:o.paymentCondition,onChange:g=>u({...o,paymentCondition:g.target.value,installments:g.target.value==="À vista"?"":o.installments}),options:["À vista","Boleto","Cartão"],label:"Condição de pagamento"})]}),(o.paymentCondition==="Boleto"||o.paymentCondition==="Cartão")&&l.jsxs("div",{className:"space-y-2 animate-in fade-in",children:[l.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase",children:"Parcelas"}),o.paymentCondition==="Boleto"?l.jsxs("div",{className:"space-y-3",children:[l.jsx(pn,{value:o.installments,onChange:g=>{const v=g.target.value==="5 dias (5% de desconto)";u({...o,installments:g.target.value,discount5Days:v})},options:c.Boleto,label:"Parcelas boleto"}),o.discount5Days&&l.jsxs("div",{className:"bg-green-50 p-4 rounded-xl border border-green-100 space-y-1",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-xs font-bold text-green-700 uppercase",children:"Desconto de 5%"}),l.jsxs("span",{className:"text-sm font-black text-green-600",children:["- R$ ",(r*.05).toLocaleString("pt-BR",{minimumFractionDigits:2})]})]}),l.jsxs("div",{className:"flex justify-between items-center pt-1 border-t border-green-100",children:[l.jsx("span",{className:"text-xs font-bold text-slate-600",children:"Valor Final"}),l.jsxs("span",{className:"text-lg font-black text-slate-800",children:["R$ ",o.finalChargedAmount.toLocaleString("pt-BR",{minimumFractionDigits:2})]})]})]})]}):l.jsx(pn,{value:o.installments,onChange:g=>u({...o,installments:g.target.value}),options:c.Cartão,label:"Parcelas cartão"})]}),l.jsxs("div",{className:"bg-blue-50 p-4 rounded-xl border border-blue-100",children:[l.jsxs("div",{className:"flex items-center gap-2 text-blue-600 mb-2",children:[l.jsx(uo,{size:16}),l.jsx("span",{className:"text-xs font-bold uppercase",children:"Informação"})]}),l.jsxs("p",{className:"text-xs text-blue-700",children:["Estas condições de pagamento serão aplicadas a todas as ",n," OS(s) selecionadas e salvas no sistema."]})]})]}),l.jsxs("div",{className:"flex gap-3",children:[l.jsx("button",{onClick:e,className:"flex-1 py-4 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-colors",children:"Cancelar"}),l.jsxs("button",{onClick:d,className:"flex-1 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-xl shadow-blue-200 transition-colors flex items-center justify-center gap-2",children:[l.jsx(Ki,{size:20})," Confirmar e Imprimir"]})]})]})}):null};function pR(){const{user:t,userData:e,loading:n,hasPermission:r,logout:s}=qo(),i=B.useRef(null),o=B.useRef(null),u=B.useRef(null),c=B.useRef(null),[d,g]=B.useState(""),[v,y]=B.useState(""),[S,P]=B.useState(""),[j,V]=B.useState("os"),[w,I]=B.useState(!0),[A,F]=B.useState(!0),[M,z]=B.useState([]),[E,_]=B.useState([]),[T,N]=B.useState([]),[R,C]=B.useState(!0),[b,Ae]=B.useState(""),[Qe,Os]=B.useState("desc"),[pt,X]=B.useState(""),[ie,ae]=B.useState(!1),[je,_e]=B.useState(!1),[Ue,It]=B.useState(!1),[dn,Ye]=B.useState(!1),[En,Ls]=B.useState(!1),[bd,Un]=B.useState(!1),[Ni,ur]=B.useState(!1),[Ho,cr]=B.useState(!1),[zr,$r]=B.useState(!1),[Si,ki]=B.useState(!1),[Ci,Ai]=B.useState(!1),[Ms,zn]=B.useState(!1),[dr,Ri]=B.useState(!1),[Vs,Ke]=B.useState(!1),[ut,hr]=B.useState(!1),[hn,Pi]=B.useState(null),[$n,Br]=B.useState(null),[fr,en]=B.useState(!1),[ve,tn]=B.useState([]),[Fs,pr]=B.useState(""),[Wo,ji]=B.useState(""),[Bn,qr]=B.useState(""),[Us,Tn]=B.useState(""),[Di,Hr]=B.useState(""),[D,ee]=B.useState({client:"",cnpj:"",contactPerson:"",address:"",email:"",billingType:"Avulso",maintenanceVisit:"",item:"",manufacturer:"",model:"",serial:"",equipmentObservation:"",quantity:"1",defect:"",defectsList:[],solutionType:"Preenchimento manual",solution:"",manualSolutionsList:[],benchRepairList:[],solutionsList:[],notRepairableDetail:"",costThirdPartyName:"",costThirdPartyShipping:"",costClientShipping:"",costParts:"",chargedAmount:"",paymentCondition:"À vista",installments:"",status:"Recebido",statusDate:new Date().toISOString().split("T")[0],statusHistory:[],trackingCode:"",sentToThirdParty:"Não",thirdPartyInfo:"",thirdPartyTracking:"",thirdPartyDate:"",osNumber:"",deliveryDeadline:"",discount5Days:!1,discountAmount:0,finalChargedAmount:0,photos:[]}),[fe,Ee]=B.useState({clientName:"",cnpj:"",address:"",contactPerson:"",email:"",startDate:"",endDate:"",monthlyValue:"",annualValue:"",coveredItems:{videoSurgeryInstruments:!1,openInstruments:!1,videoSurgeryEquipment:!1,endoscopes:!1},observations:""}),[Mt,fn]=B.useState({client:!1,item:!1,defect:!1,solution:!1,notRepairableDetail:!1,solutionsList:!1,benchRepairList:!1}),[mr,Ko]=B.useState({show:!1,message:"",type:"error"}),[Oi,Wr]=B.useState("Recebido"),[Go,Ed]=B.useState(new Date().toISOString().split("T")[0]),[zs,Ol]=B.useState({totalValue:0,paymentCondition:"À vista",installments:"",discount5Days:!1,finalChargedAmount:0}),[st,qn]=B.useState(null),[ze,Kr]=B.useState(null),[Td,Ll]=B.useState(!1),Gr=[{value:"Recebido",label:"Recebido"},{value:"Em inspeção",label:"Inspeção"},{value:"Em orçamento",label:"Orçamento"},{value:"Aguardando aprovação do orçamento",label:"Aprovação"},{value:"Em manutenção",label:"Manutenção"},{value:"Em rota de entrega",label:"Entrega"},{value:"Finalizado",label:"Finalizado"}],Qo=Gr.map(f=>f.value),Ml=["Avulso","Cortesia (visita sem custo)","Contrato de manutenção"];co[new Date().getMonth()];const Id=["Preenchimento manual","Manual com custos detalhados","Conserto em bancada","Não passível de conserto, substituir por novo equipamento / material"],$s={Boleto:["30 / 60 dias","5 dias (5% de desconto)"],Cartão:["1x (30 Dias)","2x (30/60 Dias)","3x (30/60/90 Dias)","4x (30/60/90/120 Dias)"]},Yo=()=>{if(!pt.trim()){he("Digite um intervalo válido (ex: 10-20 ou 10,20,30)","error");return}const f=Vt.filter(k=>{var L,$;return((L=k.client)==null?void 0:L.toLowerCase().includes(b.toLowerCase()))||(($=k.osNumber)==null?void 0:$.includes(b))});let m=[];try{if(pt.includes("-")){let[k,L]=pt.split("-").map(W=>W.trim()),$=parseInt(k),G=parseInt(L);if(isNaN($)||isNaN(G)){he("Formato inválido. Use: 10-20 ou 10,20,30","error");return}$>G&&([$,G]=[G,$]),m=f.filter(W=>{var Re;const Q=(Re=W.osNumber)==null?void 0:Re.match(/^(\d+)\//);if(!Q)return!1;const se=parseInt(Q[1]);return!isNaN(se)&&se>=$&&se<=G}).map(W=>W.firestoreId)}else if(pt.includes(",")){const k=pt.split(",").map(L=>parseInt(L.trim())).filter(L=>!isNaN(L));if(k.length===0){he("Formato inválido. Use números separados por vírgula","error");return}m=f.filter(L=>{var W;const $=(W=L.osNumber)==null?void 0:W.match(/^(\d+)\//);if(!$)return!1;const G=parseInt($[1]);return k.includes(G)}).map(L=>L.firestoreId)}else{const k=parseInt(pt.trim());if(isNaN(k)){he("Digite um número válido","error");return}m=f.filter(L=>{var W;const $=(W=L.osNumber)==null?void 0:W.match(/^(\d+)\//);return $?parseInt($[1])===k:!1}).map(L=>L.firestoreId)}if(m.length===0){he("Nenhuma OS encontrada no intervalo especificado","warning");return}tn(m),X(""),ae(!1),he(`${m.length} OS(s) selecionada(s) com sucesso!`,"success")}catch(k){console.error("Erro ao processar intervalo:",k),he("Erro ao processar intervalo. Verifique o formato.","error")}},he=(f,m="error")=>{Ko({show:!0,message:f,type:m}),setTimeout(()=>{Ko(k=>({...k,show:!1}))},5e3)},et=f=>A?f.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}):"R$ •••••",gr=()=>{const f=Ne(D.costThirdPartyShipping),m=Ne(D.costParts),k=Ne(D.costClientShipping),L=Ne(D.chargedAmount),$=D.solutionsList.reduce((Re,Me)=>Re+Ne(Me.cost),0),G=f+m+k,W=G*1.6,Q=D.discount5Days&&D.finalChargedAmount||L,se=Q-G;return{totalCost:G,profit:se,suggestedValue:W,solutionsTotal:$,finalCharged:Q}},{totalCost:Xo,profit:Qr,suggestedValue:Vl,solutionsTotal:Fl}=gr(),Jo=()=>{const f=[],m={...Mt};return Object.keys(m).forEach(k=>m[k]=!1),D.client.trim()||(f.push("• Cliente é obrigatório"),m.client=!0),D.item.trim()||(f.push("• Item/Equipamento é obrigatório"),m.item=!0),(!D.defectsList||D.defectsList.length===0)&&!D.defect.trim()&&(f.push("• Descrição do defeito é obrigatória"),m.defect=!0),D.solutionType==="Preenchimento manual"&&(!D.manualSolutionsList||D.manualSolutionsList.length===0)&&!D.solution.trim()&&(f.push("• Descrição da solução é obrigatória no modo manual"),m.solution=!0),D.solutionType==="Conserto em bancada"&&(!D.benchRepairList||D.benchRepairList.length===0)&&(f.push("• Descreva as etapas do conserto em bancada"),m.benchRepairList=!0),D.solutionType==="Não passível de conserto, substituir por novo equipamento / material"&&!D.notRepairableDetail&&(f.push("• Detalhe a substituição por novo equipamento/material"),m.notRepairableDetail=!0),D.solutionType==="Manual com custos detalhados"&&D.solutionsList.length===0&&(f.push("• Adicione pelo menos um item na lista de soluções com custo"),m.solutionsList=!0),fn(m),f.length>0?(he(`Preencha os campos obrigatórios:
`+f.join(`
`),"error"),!0):!1},Zo=f=>{let m=!1;switch(f){case"client":m=!D.client.trim();break;case"item":m=!D.item.trim();break;case"defect":m=(!D.defectsList||D.defectsList.length===0)&&!D.defect.trim();break;case"solution":m=D.solutionType==="Preenchimento manual"&&(!D.manualSolutionsList||D.manualSolutionsList.length===0)&&!D.solution.trim();break;case"benchRepairList":m=D.solutionType==="Conserto em bancada"&&(!D.benchRepairList||D.benchRepairList.length===0);break;case"notRepairableDetail":m=D.solutionType==="Não passível de conserto, substituir por novo equipamento / material"&&!D.notRepairableDetail;break;case"solutionsList":m=D.solutionType==="Manual com custos detalhados"&&D.solutionsList.length===0;break}fn(k=>({...k,[f]:m}))},ea=B.useMemo(()=>{const f=new Map;return E.forEach(m=>{if(m.clientName){const k=m.clientName.trim().toLowerCase();f.set(k,{client:m.clientName,cnpj:m.cnpj,contactPerson:m.contactPerson,email:m.email,address:m.address})}}),[...M].reverse().forEach(m=>{if(m.client){const k=m.client.trim().toLowerCase();if(!f.has(k))f.set(k,{client:m.client,cnpj:m.cnpj||"",contactPerson:m.contactPerson||"",email:m.email||"",address:m.address||""});else if(m.client&&f.has(k)){const L=f.get(k);!L.cnpj&&m.cnpj&&(L.cnpj=m.cnpj),!L.address&&m.address&&(L.address=m.address),!L.contactPerson&&m.contactPerson&&(L.contactPerson=m.contactPerson),!L.email&&m.email&&(L.email=m.email)}}}),Array.from(f.values()).sort((m,k)=>m.client.localeCompare(k.client))},[M,E]),ta=B.useMemo(()=>{if(!M||M.length===0)return[];const f=[];return M.forEach(m=>{m.defectsList&&Array.isArray(m.defectsList)&&m.defectsList.forEach(k=>{k&&typeof k=="string"&&k.trim()&&f.push(k.trim())}),m.defect&&typeof m.defect=="string"&&m.defect.trim()&&f.push(m.defect.trim())}),ts(f)},[M]),na=B.useMemo(()=>{if(!M||M.length===0)return[];const f=[];return M.forEach(m=>{m.manualSolutionsList&&Array.isArray(m.manualSolutionsList)&&m.manualSolutionsList.forEach(k=>{k&&typeof k=="string"&&k.trim()&&f.push(k.trim())}),m.benchRepairList&&Array.isArray(m.benchRepairList)&&m.benchRepairList.forEach(k=>{k&&typeof k=="string"&&k.trim()&&f.push(k.trim())}),m.solutionsList&&Array.isArray(m.solutionsList)&&m.solutionsList.forEach(k=>{k&&k.text&&typeof k.text=="string"&&k.text.trim()&&f.push(k.text.trim())}),m.solution&&typeof m.solution=="string"&&m.solution.trim()&&f.push(m.solution.trim())}),ts(f)},[M]),Ul=B.useMemo(()=>{if(!M||M.length===0)return[];const f=[];return M.forEach(m=>{m.solutionsList&&Array.isArray(m.solutionsList)&&m.solutionsList.forEach(k=>{k&&k.text&&typeof k.text=="string"&&k.text.trim()&&f.push(k.text.trim())})}),ts(f)},[M]),zl=B.useMemo(()=>{const f=new Map;return M.forEach(m=>{if(m.item&&m.item.length>1){const k=m.item.trim().toLowerCase();f.has(k)||f.set(k,m.item)}}),Array.from(f.values()).sort()},[M]),ra=B.useMemo(()=>{const f=new Map;return M.forEach(m=>{if(m.manufacturer&&m.manufacturer.length>1){const k=m.manufacturer.trim().toLowerCase();f.has(k)||f.set(k,m.manufacturer)}}),Array.from(f.values()).sort()},[M]),sa=B.useMemo(()=>{const f=new Map;return M.forEach(m=>{if(m.model&&m.model.length>1){const k=m.model.trim().toLowerCase();f.has(k)||f.set(k,m.model)}}),Array.from(f.values()).sort()},[M]),$l=B.useMemo(()=>[...new Set(M.map(f=>f.serial).filter(f=>f&&f.length>1))].sort(),[M]),pe=B.useMemo(()=>{let f=M;return(e==null?void 0:e.role)==="client"&&e.displayName&&(f=f.filter(m=>m.client===e.displayName)),f},[M,e]),Vt=B.useMemo(()=>[...pe].sort((f,m)=>{var k,L;return Qe==="desc"?(k=m.osNumber)==null?void 0:k.localeCompare(f.osNumber):(L=f.osNumber)==null?void 0:L.localeCompare(m.osNumber)}),[pe,Qe]),qt=B.useMemo(()=>{let f=0,m=0,k=0,L={};pe.forEach(W=>{const Q=Ne(W.chargedAmount),se=Ne(W.costThirdPartyShipping)+Ne(W.costParts)+Ne(W.costClientShipping),Re=Q-se;f+=Q,m+=se,k+=Re,Q>0&&(L[W.client]=(L[W.client]||0)+Q)});const $=f>0?k/f*100:0,G=Object.entries(L).map(([W,Q])=>({label:W,value:Q,valueFormatted:`R$ ${Q.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}`})).sort((W,Q)=>Q.value-W.value).slice(0,5);return{totalRevenue:f,totalCosts:m,totalProfit:k,margin:$,topClients:G}},[pe]),Bs=B.useMemo(()=>{const f=new Set(pe.filter(L=>L.billingType==="Contrato de manutenção").map(L=>L.client)),m=new Set(E.map(L=>L.clientName));return[...new Set([...f,...m])].map(L=>{const $=E.find(W=>W.clientName===L),G=pe.find(W=>W.client===L);return{clientName:L,cnpj:($==null?void 0:$.cnpj)||(G==null?void 0:G.cnpj)||"",address:($==null?void 0:$.address)||(G==null?void 0:G.address)||"",contactPerson:($==null?void 0:$.contactPerson)||(G==null?void 0:G.contactPerson)||"",email:($==null?void 0:$.email)||(G==null?void 0:G.email)||"",startDate:($==null?void 0:$.startDate)||"",endDate:($==null?void 0:$.endDate)||"",monthlyValue:($==null?void 0:$.monthualValue)||"",annualValue:($==null?void 0:$.annualValue)||"",coveredItems:($==null?void 0:$.coveredItems)||{videoSurgeryInstruments:!1,openInstruments:!1,videoSurgeryEquipment:!1,endoscopes:!1},observations:($==null?void 0:$.observations)||"",isConfigured:!!$}}).sort((L,$)=>L.clientName.localeCompare($.clientName))},[pe,E]),In=()=>{if(!e)return!1;if(e.role==="admin")return!0;if(e.role==="client")return["os","status","about"].includes(j);const m={os:"canViewOS",status:"canViewOS",financial:"canViewFinancial",contracts:"canViewContracts",inventory:"canViewOS",clients:"canViewAllClients",users:"canManageUsers",about:!0}[j];return m===!0||r(m)};B.useEffect(()=>{if(!t||n)return;const f=mv(Ca(ct,"artifacts",Kn,"public","data","serviceOrders"),k=>{const L=k.docs.map($=>({firestoreId:$.id,...$.data()}));z(L.sort(($,G)=>{var W;return(W=G.osNumber)==null?void 0:W.localeCompare($.osNumber)})),C(!1)},k=>{console.error("Erro ao buscar OS:",k),C(!1)}),m=mv(Ca(ct,"artifacts",Kn,"public","data","contracts"),k=>{_(k.docs.map(L=>L.data()))},k=>{console.error("Erro ao buscar contratos:",k)});return()=>{f(),m()}},[t,n]),B.useEffect(()=>{if(D.discount5Days&&D.chargedAmount){const f=Ne(D.chargedAmount),m=f*.05,k=f-m;ee(L=>({...L,discountAmount:m,finalChargedAmount:k}))}else ee(f=>({...f,discountAmount:0,finalChargedAmount:Ne(f.chargedAmount)}))},[D.discount5Days,D.chargedAmount]),B.useEffect(()=>{if((D.status==="Em orçamento"||D.status==="Aguardando aprovação do orçamento")&&!D.deliveryDeadline){const f=M.find(m=>m.firestoreId===(hn==null?void 0:hn.firestoreId));if(f!=null&&f.deliveryDeadline){const m=f.deliveryDeadline.match(/^(\d+)/);m&&ee(k=>({...k,deliveryDeadline:m[1]}))}}},[D.status,hn,M]),cR(()=>{zr&&$r(!1),Ms&&zn(!1),Si&&ki(!1),Vs&&Ke(!1),ut&&hr(!1)}),B.useEffect(()=>{zr&&i.current&&i.current.focus(),Ms&&o.current&&o.current.focus(),Si&&u.current&&u.current.focus(),Vs&&c.current&&c.current.focus()},[zr,Ms,Si,Vs]);const we=B.useMemo(()=>{let f=pe;st&&(f=f.filter(Q=>Q.status===st)),ze&&(f=f.filter(Q=>Q.billingType===ze)),ve.length>0&&(f=f.filter(Q=>ve.includes(Q.firestoreId)));const m={};f.forEach(Q=>{m[Q.status]=(m[Q.status]||0)+1,m[`${Q.status}_date`]||(m[`${Q.status}_date`]=Q.statusDate||new Date().toISOString().split("T")[0])});const k=Object.keys(m).filter(Q=>!Q.includes("_date")).map(Q=>({label:Q,value:m[Q],date:m[`${Q}_date`]})),L={};f.forEach(Q=>{L[Q.billingType]=(L[Q.billingType]||0)+1});const $=Object.keys(L).map(Q=>({label:Q,value:L[Q]})).sort((Q,se)=>se.value-Q.value);let G=0,W=0;return f.forEach(Q=>{G+=Ne(Q.costThirdPartyShipping)+Ne(Q.costParts),W+=Ne(Q.costClientShipping)}),{count:f.length,statusChartData:k,billingChartData:$,totalInternalCosts:G,totalClientFreight:W,isFiltered:ve.length>0||st||ze}},[pe,ve,st,ze]),qs=f=>{const m=new Date().getFullYear(),k=f.filter(G=>{if(!G.osNumber)return!1;const[W,Q]=G.osNumber.split("/");return Q&&parseInt(Q)===m});let L=0;k.forEach(G=>{if(G.osNumber){const[W]=G.osNumber.split("/"),Q=parseInt(W);Q>L&&(L=Q)}});let $;return m===2026?$=Math.max(L+1,32):$=L+1,`${String($).padStart(4,"0")}/${m}`},Nn=(f=null)=>{if(pr(""),ji(""),qr(""),Tn(""),Hr(""),Ai(!1),_e(!1),It(!1),Ye(!1),Ls(!1),Un(!1),ur(!1),cr(!1),fn({client:!1,item:!1,defect:!1,solution:!1,notRepairableDetail:!1,solutionsList:!1,benchRepairList:!1}),f){Pi(f);let m="";if(f.deliveryDeadline){const k=f.deliveryDeadline.match(/^(\d+)/);k&&(m=k[1])}ee({...f,equipmentObservation:f.equipmentObservation||"",quantity:f.quantity||"1",solutionsList:f.solutionsList||[],defectsList:f.defectsList||(f.defect?[f.defect]:[]),manualSolutionsList:f.manualSolutionsList||[],benchRepairList:f.benchRepairList||[],statusDate:f.statusDate||new Date().toISOString().split("T")[0],statusHistory:f.statusHistory||[],deliveryDeadline:m,discount5Days:f.discount5Days||!1,discountAmount:f.discountAmount||0,finalChargedAmount:f.finalChargedAmount||Ne(f.chargedAmount),photos:f.photos||[]})}else Pi(null),ee({client:"",cnpj:"",contactPerson:"",address:"",email:"",billingType:"Avulso",maintenanceVisit:"",item:"",manufacturer:"",model:"",serial:"",equipmentObservation:"",quantity:"1",defect:"",defectsList:[],solutionType:"Preenchimento manual",solution:"",manualSolutionsList:[],benchRepairList:[],solutionsList:[],notRepairableDetail:"",costThirdPartyName:"",costThirdPartyShipping:"",costClientShipping:"",costParts:"",chargedAmount:"",paymentCondition:"À vista",installments:"",status:"Recebido",statusDate:new Date().toISOString().split("T")[0],statusHistory:[],trackingCode:"",sentToThirdParty:"Não",thirdPartyInfo:"",thirdPartyTracking:"",thirdPartyDate:"",osNumber:qs(pe),deliveryDeadline:"",discount5Days:!1,discountAmount:0,finalChargedAmount:0,photos:[]});$r(!0)},Hs=f=>{ee(m=>({...m,client:f.client,cnpj:f.cnpj,contactPerson:f.contactPerson,email:f.email,address:f.address})),_e(!1)},Bl=()=>{if(!Bn.trim()){he("Descrição do defeito é obrigatória","error");return}It(!1);const f=Bn.split(`
`).map(m=>m.trim().replace(/([a-zà-ú])([A-ZÀ-Ú])/g,"$1 $2").replace(/(\s)([A-ZÀ-Ú])/g,"$1$2").trim()).filter(m=>m.length>0);if(f.length===0){he("Descrição do defeito é obrigatória","error");return}ee(m=>({...m,defectsList:[...m.defectsList,...f]})),qr("")},ql=f=>{ee(m=>({...m,defectsList:m.defectsList.filter((k,L)=>L!==f)}))},Hl=()=>{if(!Us.trim()){he("Descrição da solução é obrigatória","error");return}Ye(!1);const f=Us.split(`
`).map(m=>m.trim().replace(/([a-zà-ú])([A-ZÀ-Ú])/g,"$1 $2").replace(/(\s)([A-ZÀ-Ú])/g,"$1$2").trim()).filter(m=>m.length>0);if(f.length===0){he("Descrição da solução é obrigatória","error");return}ee(m=>({...m,manualSolutionsList:[...m.manualSolutionsList,...f]})),Tn("")},Nd=f=>{ee(m=>({...m,manualSolutionsList:m.manualSolutionsList.filter((k,L)=>L!==f)}))},Wl=()=>{if(!Di.trim()){he("Descrição da etapa do conserto é obrigatória","error");return}const f=Di.split(`
`).map(m=>m.trim()).filter(m=>m.length>0);if(f.length===0){he("Descrição da etapa do conserto é obrigatória","error");return}ee(m=>({...m,benchRepairList:[...m.benchRepairList,...f]})),Hr("")},Sd=f=>{ee(m=>({...m,benchRepairList:m.benchRepairList.filter((k,L)=>L!==f)}))},Ws=()=>{if(!Fs.trim()){he("Descrição do item/serviço é obrigatória","error");return}Ye(!1);const f=Fs.split(`
`).map(k=>k.trim()).filter(k=>k.length>0);if(f.length===0){he("Descrição do item/serviço é obrigatória","error");return}const m=f.map(k=>({id:Date.now()+Math.random(),text:k,cost:Wo||"0,00"}));ee(k=>({...k,solutionsList:[...k.solutionsList,...m]})),pr(""),ji("")},Hn=f=>{ee(m=>({...m,solutionsList:m.solutionsList.filter(k=>k.id!==f)}))},Li=()=>{const{firestoreId:f,...m}=D;if((!m.quantity||isNaN(parseInt(m.quantity)))&&(m.quantity="1"),m.discount5Days&&m.chargedAmount){const G=Ne(m.chargedAmount);m.discountAmount=G*.05,m.finalChargedAmount=G-m.discountAmount}else m.discountAmount=0,m.finalChargedAmount=Ne(m.chargedAmount);if(m.defectsList&&Array.isArray(m.defectsList)){const G=ts(m.defectsList).filter(W=>W&&W.trim().length>2);m.defectsList=G,m.defect=G.length>0?G.join(`
`):""}else if(m.defect=m.defect||"",m.defect){const G=ts([m.defect]).filter(W=>W&&W.trim().length>2);m.defectsList=G}else m.defectsList=[];if(m.solutionType==="Preenchimento manual")if(m.manualSolutionsList&&Array.isArray(m.manualSolutionsList)){const G=ts(m.manualSolutionsList).filter(W=>W&&W.trim().length>2);m.manualSolutionsList=G,m.solution=G.length>0?G.join(`
`):""}else m.manualSolutionsList=[],m.solution=m.solution||"";if(m.solutionType==="Conserto em bancada")if(m.benchRepairList&&Array.isArray(m.benchRepairList)){const G=ts(m.benchRepairList).filter(W=>W&&W.trim().length>2);m.benchRepairList=G,m.solution=G.length>0?G.join(`
`):""}else m.benchRepairList=[],m.solution=m.solution||"";if(m.solutionType==="Manual com custos detalhados")if(m.solutionsList&&Array.isArray(m.solutionsList)){const G=m.solutionsList.map(Q=>({...Q,text:ts([Q.text])[0]||Q.text})).filter(Q=>Q.text&&Q.text.trim().length>2);m.solutionsList=G;const W=G.map(Q=>Q.text);m.solution=W.length>0?W.join(`
`):""}else m.solutionsList=[],m.solution=m.solution||"";if(m.solutionType!=="Preenchimento manual"&&(m.manualSolutionsList=[]),m.solutionType!=="Conserto em bancada"&&(m.benchRepairList=[]),m.solutionType!=="Manual com custos detalhados"&&(m.solutionsList=[]),m.solutionType==="Não passível de conserto, substituir por novo equipamento / material"&&(m.manualSolutionsList=[],m.benchRepairList=[],m.solutionsList=[],m.solution=m.notRepairableDetail||""),m.deliveryDeadline&&m.deliveryDeadline.trim()!==""){const G=m.deliveryDeadline.replace("dias úteis","").trim();G&&!isNaN(G)&&(m.deliveryDeadline=`${G} dias úteis`)}else m.deliveryDeadline="";let k=m.statusHistory?[...m.statusHistory]:[];const L=m.statusDate||new Date().toISOString().split("T")[0],$=k.length>0?k[k.length-1]:null;return!$||$.status!==m.status?k.push({status:m.status,date:L,timestamp:Date.now()}):k[k.length-1].date=L,m.statusHistory=k,m.statusDate=L,m},Kl=async f=>{if(f&&f.preventDefault(),!Jo()){en(!0);try{const k=Li();hn?(await lo(Wt(ct,"artifacts",Kn,"public","data","serviceOrders",hn.firestoreId),k),he("OS atualizada com sucesso!","success")):(await pv(Ca(ct,"artifacts",Kn,"public","data","serviceOrders"),k),he("OS criada com sucesso!","success")),$r(!1)}catch(k){console.error(k),he(`Erro ao salvar: ${k.message}`,"error")}finally{en(!1)}}},Gl=async()=>{if(!Jo()){en(!0);try{const m=Li();hn?await lo(Wt(ct,"artifacts",Kn,"public","data","serviceOrders",hn.firestoreId),m):await pv(Ca(ct,"artifacts",Kn,"public","data","serviceOrders"),m),he("OS salva e nova em branco criada!","success"),ee({...D,osNumber:qs([...pe,D]),item:"",manufacturer:"",model:"",serial:"",equipmentObservation:"",quantity:"1",defect:"",defectsList:[],solutionType:"Preenchimento manual",solution:"",manualSolutionsList:[],benchRepairList:[],solutionsList:[],notRepairableDetail:"",costThirdPartyName:"",costThirdPartyShipping:"",costClientShipping:"",costParts:"",chargedAmount:"",paymentCondition:"À vista",installments:"",status:"Recebido",statusDate:new Date().toISOString().split("T")[0],statusHistory:[],trackingCode:"",sentToThirdParty:"Não",thirdPartyInfo:"",thirdPartyTracking:"",thirdPartyDate:"",deliveryDeadline:"",discount5Days:!1,discountAmount:0,finalChargedAmount:0,photos:[]}),Pi(null)}catch(m){console.error(m),he(`Erro ao salvar: ${m.message}`,"error")}finally{en(!1)}}},Yr=f=>{if(D.status===f){if(D.statusDate){const m=D.statusDate.split("-");return`${m[2]}/${m[1]}`}return"Hoje"}if(D.statusHistory&&D.statusHistory.length>0){const m=[...D.statusHistory].reverse().find(k=>k.status===f);if(m&&m.date){const k=m.date.split("-");return`${k[2]}/${k[1]}`}}return null},Mi=Gr.findIndex(f=>f.value===D.status),kd=Mi===-1?0:Mi/(Gr.length-1)*100,Cd=async()=>{if(ve.length===0){he("Selecione pelo menos uma OS para movimentar","error");return}en(!0);try{const f=ve.map(m=>{const k=pe.find($=>$.firestoreId===m);if(!k)return null;let L=k.statusHistory?[...k.statusHistory]:[];return L.push({status:Oi,date:Go,timestamp:Date.now()}),lo(Wt(ct,"artifacts",Kn,"public","data","serviceOrders",m),{status:Oi,statusDate:Go,statusHistory:L})}).filter(Boolean);await Promise.all(f),he(`${ve.length} OS(s) movida(s) para ${Oi}`,"success"),Ke(!1),tn([])}catch(f){console.error(f),he(`Erro ao movimentar OSs: ${f.message}`,"error")}finally{en(!1)}},Sn=f=>{const m=pe.filter(G=>ve.includes(G.firestoreId));if(m.length===0){he("Selecione pelo menos uma OS para imprimir","error");return}if((e==null?void 0:e.role)==="client"){Ks(f);return}if(!m.some(G=>G.status==="Em orçamento"||G.status==="Aguardando aprovação do orçamento")&&f==="client"){Ks(f);return}const L=m.reduce((G,W)=>{const Q=W.finalChargedAmount?Ne(W.finalChargedAmount):Ne(W.chargedAmount);return G+Q},0),$=m[0];Ol({totalValue:L,paymentCondition:($==null?void 0:$.paymentCondition)||"À vista",installments:($==null?void 0:$.installments)||"",discount5Days:($==null?void 0:$.discount5Days)||!1,finalChargedAmount:L}),hr(!0)},Ad=f=>{const k=pe.filter(L=>ve.includes(L.firestoreId)).map(async L=>{try{await lo(Wt(ct,"artifacts",Kn,"public","data","serviceOrders",L.firestoreId),{paymentCondition:f.paymentCondition,installments:f.installments,discount5Days:f.discount5Days,finalChargedAmount:f.finalChargedAmount})}catch($){console.error("Erro ao atualizar condições de pagamento:",$)}});Promise.all(k).then(()=>{hr(!1),Ks("client",f)})},Ks=(f,m=null)=>{const k=pe.filter(se=>ve.includes(se.firestoreId));if(k.length===0){he("Selecione pelo menos uma OS para imprimir","error");return}const L={};k.forEach(se=>{const Re=`${se.client}-${se.cnpj||"no-cnpj"}-${se.billingType}-${se.maintenanceVisit||"no-visit"}`;L[Re]||(L[Re]={header:{client:se.client,cnpj:se.cnpj,contactPerson:se.contactPerson,email:se.email,address:se.address,billingType:se.billingType,maintenanceVisit:se.maintenanceVisit},items:[]}),L[Re].items.push(se)});const $=k.some(se=>se.status==="Em orçamento"||se.status==="Aguardando aprovação do orçamento"),G=f==="internal"?"Relatório INTERNO":$?"Proposta de orçamento":"Relatório de atendimento";let W=`
<!DOCTYPE html>
<html>
<head>
    <title>${G}</title>
    <meta charset="UTF-8">
    <style>
        @media print {
            /* REMOVER margens do navegador - DEIXE O NAVEgador controlar */
            @page {
                size: A4;
                margin: 0;
            }
            
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                color: #333;
                line-height: 1.4;
                padding: 0;
                margin: 0;
                font-size: 12px;
                width: 100%;
                height: 100%;
            }
            
            .report-page {
                width: 210mm; /* Largura A4 */
                min-height: 297mm; /* Altura A4 */
                padding: 15mm 20mm;
                position: relative;
                box-sizing: border-box;
                page-break-after: always;
                background: white;
            }
            
            .report-page:last-child {
                page-break-after: avoid;
                display: flex;
                flex-direction: column;
            }
            
            .header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                border-bottom: 2px solid #1a56db;
                padding-bottom: 15px;
                margin-bottom: 25px;
                flex-wrap: wrap;
            }
            
            .logo-container {
                flex: 0 0 auto;
            }
            
            .logo-container img {
                height: 70px;
                max-width: 200px;
                object-fit: contain;
            }
            
            .report-info {
                text-align: right;
                flex: 1;
                min-width: 250px;
            }
            
            .report-title {
                font-size: 18px;
                font-weight: 900;
                color: #1a56db;
                text-transform: uppercase;
                margin-bottom: 5px;
            }
            
            .internal-badge {
                background: #b91c1c;
                color: white;
                padding: 2px 8px;
                font-size: 10px;
                border-radius: 4px;
                font-weight: bold;
                margin-bottom: 4px;
                display: inline-block;
            }
            
            .section {
                margin-bottom: 25px;
            }
            
            .section-title {
                background: #f8fafc;
                padding: 8px 12px;
                font-size: 12px;
                font-weight: 900;
                text-transform: uppercase;
                border-left: 5px solid #1a56db;
                margin-bottom: 15px;
                color: #1e40af;
            }
            
            .client-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
                font-size: 12px;
                margin-bottom: 25px;
            }
            
            .items-table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 15px;
                table-layout: fixed;
            }
            
            .items-table th {
                background: #f8fafc;
                text-align: left;
                padding: 12px 8px;
                font-size: 11px;
                text-transform: uppercase;
                color: #64748b;
                border-bottom: 2px solid #e2e8f0;
                word-wrap: break-word;
            }
            
            .items-table td {
                padding: 15px 8px;
                font-size: 12px;
                border-bottom: 1px solid #f1f5f9;
                vertical-align: top;
                word-wrap: break-word;
            }
            
            .os-tag {
                font-weight: 900;
                color: #1a56db;
                display: block;
                margin-bottom: 4px;
                font-size: 13px;
            }
            
            /* ÁREA DE ASSINATURA - MAIS DISTANTE DO CONTEÚDO */
            .signature-area {
                display: flex;
                justify-content: space-around;
                margin-top: 150px; /* AUMENTADO de auto para 150px para mais distância */
                margin-bottom: 50px; /* Aumentado para dar mais espaço */
                page-break-inside: avoid;
                position: relative;
            }
            
            .signature-box {
                border-top: 1px solid #333;
                width: 250px;
                text-align: center;
                padding-top: 15px; /* Aumentado para mais espaço de assinatura */
                font-size: 12px;
                font-weight: 600;
                min-height: 120px; /* Altura aumentada para assinatura digital */
            }
            
            .footer-notes {
                margin-top: 30px;
                font-size: 10px;
                color: #666;
                padding-top: 15px;
                line-height: 1.5;
                page-break-inside: avoid;
                border-top: 1px solid #eee;
            }
            
            .footer-notes p {
                margin: 8px 0;
            }
            
            .footer-title {
                font-weight: bold;
                color: #1a56db;
                margin-bottom: 5px;
                font-size: 11px;
            }
            
            /* RODAPÉ FIXO NO FINAL ABSOLUTO - CONTADOR REMOVIDO */
            .company-footer {
                position: absolute;
                bottom: 5mm; /* COLADO NO FINAL DA PÁGINA */
                left: 20mm;
                right: 20mm;
                font-size: 8px;
                color: #666;
                text-align: center;
                border-top: 1px solid #eee;
                padding-top: 8px;
                line-height: 1.2;
                margin: 0;
                background: white;
                z-index: 10;
            }
            
            /* CONTADOR DE PÁGINAS REMOVIDO - LINHA ABAIXO COMENTADA/EXCLUÍDA */
            /* .page-counter { position: absolute; bottom: 5mm; right: 20mm; ... } */
            
            .valor-section {
                margin-top: 20px;
                padding: 20px;
                background: #f0fdf4;
                border-left: 4px solid #10b981;
                border-radius: 8px;
                font-size: 12px;
                line-height: 1.5;
            }
            
            .valor-destaque {
                font-size: 20px;
                font-weight: 900;
                color: #166534;
                text-align: center;
                margin: 15px 0;
            }
            
            .defects-list, .solutions-list {
                margin: 8px 0;
                padding-left: 15px;
            }
            
            .defects-list li, .solutions-list li {
                margin-bottom: 4px;
                padding-left: 5px;
            }
            
            .observation-column {
                border-left: 2px solid #e2e8f0;
                padding-left: 15px;
                margin-left: 10px;
            }
            
            .photo-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                gap: 10px;
                margin-top: 15px;
            }
            
            .photo-item {
                border: 1px solid #e2e8f0;
                border-radius: 4px;
                overflow: hidden;
            }
            
            .photo-item img {
                width: 100%;
                height: 120px;
                object-fit: cover;
            }
            
            /* Garantir que o conteúdo não sobreponha o rodapé */
            .page-content {
                padding-bottom: 50px; /* Aumentado para mais espaço antes da assinatura */
                box-sizing: border-box;
            }
            
            /* Estilo para evitar quebra de página em assinaturas */
            .page-break-avoid {
                page-break-inside: avoid;
                page-break-before: avoid;
                page-break-after: avoid;
            }
            
            /* Para a última página, garantir que assinatura e rodapé fiquem juntos */
            .last-page-content {
                flex: 1;
                display: flex;
                flex-direction: column;
            }
            
            .last-page-content .signature-area {
                margin-top: 150px; /* Mantido igual às outras páginas */
                margin-bottom: 70px; /* Mais espaço para o rodapé na última página */
            }
            
            .last-page-content .company-footer {
                bottom: 2mm; /* Ainda mais colado no final */
            }
        }
        
        /* Estilos para visualização em tela */
        @media screen {
            .report-page {
                width: 210mm;
                min-height: 297mm;
                margin: 0 auto 20px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
                background: white;
            }
        }
    </style>
</head>
<body>
    <div class="content-wrapper">`;Object.values(L).forEach((se,Re)=>{const Me=Re===Object.values(L).length-1,Nt=se.items.filter(ue=>ue.status==="Em orçamento"||ue.status==="Aguardando aprovação do orçamento"),kn=Nt.length>0;let tt=0;if(kn&&Nt.forEach(ue=>{const Cn=m?m.finalChargedAmount/k.length:ue.finalChargedAmount?Ne(ue.finalChargedAmount):Ne(ue.chargedAmount);tt+=Cn}),W+=`
        <div class="report-page ${Me?"last-page":""}">
            <div class="${Me?"last-page-content":"page-content"}">
                <div class="header">
                    <div class="logo-container">
                        <img src="${xa}" alt="Alfa Tecnologia Hospitalar" onerror="this.style.display='none';">
                    </div>
                    <div class="report-info">
                        ${f==="internal"?'<div class="internal-badge">USO INTERNO - CONFIDENCIAL</div>':""}
                        <div class="report-title">${G}</div>
                        <div style="font-size:11px;color:#666;">Data: ${new Date().toLocaleDateString("pt-BR")}</div>
                    </div>
                </div>
                
                <div class="section">
                    <div class="section-title">Dados do Cliente</div>
                    <div class="client-grid">
                        <div><strong>Cliente:</strong><br>${se.header.client||"---"}</div>
                        <div><strong>CNPJ:</strong><br>${se.header.cnpj||"---"}</div>
                        <div><strong>Atendimento:</strong><br>${se.header.billingType} ${se.header.maintenanceVisit?"- "+se.header.maintenanceVisit:""}</div>
                        <div><strong>Contato:</strong><br>${se.header.contactPerson||"---"}</div>
                        <div><strong>E-mail:</strong><br>${se.header.email||"---"}</div>
                        <div><strong>Endereço:</strong><br>${se.header.address||"---"}</div>
                    </div>
                </div>
                
                ${kn&&f==="client"?`
                <div class="valor-section">
                    <div class="footer-title">VALOR TOTAL DA PROPOSTA</div>
                    <div class="valor-destaque">
                        R$ ${tt.toLocaleString("pt-BR",{minimumFractionDigits:2})}
                    </div>
                    <p><strong>Quantidade de itens em orçamento:</strong> ${Nt.length}</p>
                    ${m?`<p><strong>Condições de pagamento:</strong> ${m.paymentCondition}${m.installments?` ${m.installments}`:""}</p>`:Nt[0]&&Nt[0].paymentCondition?`<p><strong>Condições de pagamento:</strong> ${Nt[0].paymentCondition}${Nt[0].installments?` ${Nt[0].installments}`:""}</p>`:""}
                </div>
                `:""}
                
                <div class="section">
                    <div class="section-title">Lista de Equipamentos</div>
                    <table class="items-table">
                        <thead>
                            <tr>
                                <th width="15%">OS</th>
                                <th width="25%">Equipamento</th>
                                <th width="30%">Defeito / Solução</th>
                                <th width="30%">Observações</th>
                            </tr>
                        </thead>
                        <tbody>`,se.items.forEach(ue=>{const Cn=ue.defect?ue.defect.split(`
`).filter(Ht=>Ht.trim()):[],Ys=ue.solution?ue.solution.split(`
`).filter(Ht=>Ht.trim()):[],Fi=ue.equipmentObservation||"",Xr=ue.photos||[];(ue.solutionsList||[]).reduce((Ht,An)=>Ht+parseFloat(An.cost.replace(".","").replace(",",".")||0),0);const Ui=ue.status==="Em orçamento"||ue.status==="Aguardando aprovação do orçamento",Xl=m?m.finalChargedAmount/k.length:ue.finalChargedAmount?Ne(ue.finalChargedAmount):Ne(ue.chargedAmount);W+=`
                            <tr>
                                <td>
                                    <span class="os-tag">${ue.osNumber||"---"}</span>
                                    <small>${ue.status||"---"}</small>
                                    ${Ui&&f==="client"?`
                                    <div style="margin-top: 5px; padding: 3px; background: #f0fdf4; border-radius: 4px; text-align: center;">
                                        <div style="font-size: 9px; font-weight: bold; color: #166534;">VALOR</div>
                                        <div style="font-size: 11px; font-weight: 900; color: #166534;">
                                            R$ ${Xl.toLocaleString("pt-BR",{minimumFractionDigits:2})}
                                        </div>
                                    </div>
                                    `:""}
                                </td>
                                <td>
                                    <strong>${ue.item||"---"}</strong><br>
                                    <div style="font-size:10px;color:#666;margin-bottom:2px;">
                                        ${ue.manufacturer||""} ${ue.model||""}
                                    </div>
                                    <small>NS: ${ue.serial||"N/D"}</small>
                                    ${ue.quantity&&parseInt(ue.quantity)>1?`<div style="font-size:10px;color:#666;margin-top:2px;"><strong>Quantidade:</strong> ${ue.quantity}</div>`:""}
                                </td>
                                <td>
                                    <div style="margin-bottom: 15px;">
                                        <div style="font-weight: bold; font-size: 11px; color: #1e40af; margin-bottom: 5px;">DEFEITO:</div>
                                        ${Cn.length>0?`<ul class="defects-list">${Cn.map(Ht=>`<li>${Ht}</li>`).join("")}</ul>`:'<div style="color: #999; font-style: italic;">Sem defeitos registrados</div>'}
                                    </div>
                                    <div>
                                        <div style="font-weight: bold; font-size: 11px; color: #059669; margin-bottom: 5px;">SOLUÇÃO:</div>
                                        ${Ys.length>0?`<ul class="solutions-list">${Ys.map(Ht=>`<li>${Ht}</li>`).join("")}</ul>`:'<div style="color: #999; font-style: italic;">Solução em análise</div>'}
                                    </div>
                                </td>
                                <td class="observation-column">
                                    ${Fi?`
                                    <div style="margin-bottom: 15px;">
                                        <div style="font-weight: bold; font-size: 11px; color: #7c3aed; margin-bottom: 5px;">OBSERVAÇÃO:</div>
                                        <div style="font-size: 11px; line-height: 1.4;">${Fi}</div>
                                    </div>
                                    `:""}
                                    
                                    ${Xr.length>0?`
                                    <div>
                                        <div style="font-weight: bold; font-size: 11px; color: #7c3aed; margin-bottom: 5px;">FOTOS:</div>
                                        <div class="photo-grid">
                                            ${Xr.slice(0,3).map((Ht,An)=>`<div class="photo-item">
                                                        <img src="${Ht}" alt="Foto ${An+1}" onerror="this.style.display='none';">
                                                    </div>`).join("")}
                                        </div>
                                        ${Xr.length>3?`<div style="font-size: 10px; color: #666; margin-top: 5px;">+ ${Xr.length-3} foto(s) adicional(is)</div>`:""}
                                    </div>
                                    `:""}
                                </td>
                            </tr>`}),W+=`
                        </tbody>
                    </table>
                </div>`,f==="client"&&kn){const ue=Nt[0],Cn=ue.deliveryDeadline||"A ser definido após aprovação do orçamento",Ys=m?`${m.paymentCondition}${m.installments?` ${m.installments}`:""}`:`${ue.paymentCondition||"À vista"}${ue.installments?` ${ue.installments}`:""}`;W+=`
                <div class="footer-notes page-break-avoid">
                    <div class="footer-title">INFORMAÇÕES IMPORTANTES:</div>
                    <p><strong>• Garantia:</strong> 3 meses. Não está coberto por garantia os danos causados por uso inadequado, queda ou choque mecânico, acondicionamento inadequado e/ou acondicionamento fora dos padrões recomendados pelo fabricante.</p>
                    <p><strong>• Prazo de entrega:</strong> ${Cn}</p>
                    <p><strong>• Valor Total da Proposta:</strong> R$ ${tt.toLocaleString("pt-BR",{minimumFractionDigits:2})}</p>
                    <p><strong>• Condições de pagamento:</strong> ${Ys}</p>
                </div>`}W+=`
                <div class="signature-area page-break-avoid">
                    <div class="signature-box">Técnico Responsável</div>
                    <div class="signature-box">Cliente / Recebedor</div>
                </div>
            </div>
            
            <div class="company-footer">
                <strong>Alfa Tecnologia Hospitalar</strong> - CNPJ: 50.993.453/0001-34<br/>
                (55) 9 9137-9413 - alfa.manutencaosm@gmail.com<br/>
                Endereço: Travessa Moreira, 125 - CEP: 97070-540 - Bairro: Duque de Caxias, Santa Maria/ RS
            </div>
            
            <!-- CONTADOR DE PÁGINAS REMOVIDO -->
        </div>`}),W+=`
    </div>
</body>
</html>`;const Q=window.open("","printWindow","width=800,height=600,scrollbars=yes");if(!Q){he("Permita pop-ups para imprimir o documento","error");return}Q.document.write(W),Q.document.close(),setTimeout(()=>{Q.focus(),Q.print()},500)},Gs=f=>{qn(m=>m===f?null:f),Kr(null)},Vi=f=>{Kr(m=>m===f?null:f),qn(null)},Ql=()=>{qn(null),Kr(null),tn([]),P(""),g(""),y(""),Ae("")},vr=()=>st||ze||ve.length>0||S||d||v||b,Qs=()=>{Ee({clientName:"",cnpj:"",address:"",contactPerson:"",email:"",startDate:"",endDate:"",monthlyValue:"",annualValue:"",coveredItems:{videoSurgeryInstruments:!1,openInstruments:!1,videoSurgeryEquipment:!1,endoscopes:!1},observations:""}),Ri(!0),zn(!0)},Yl=f=>{Ee(f),Ri(!1),zn(!0)},ia=async f=>{if(f.preventDefault(),!fe.clientName.trim()){he("Nome do cliente é obrigatório","error");return}en(!0);try{const m=fe.clientName.replace(/\s+/g,"_").toLowerCase();await Uf(Wt(ct,"artifacts",Kn,"public","data","contracts",m),fe),he("Contrato salvo com sucesso!","success"),zn(!1)}catch(m){console.error("Erro ao salvar contrato",m),he("Erro ao salvar contrato: "+m.message,"error")}finally{en(!1)}},Le=f=>{Br(f),ki(!0)},Rd=async()=>{if($n)try{if($n.photos&&$n.photos.length>0){const f=$n.photos.map(async m=>{var k;try{const L=(k=m.split("/o/")[1])==null?void 0:k.split("?")[0];if(L){const $=decodeURIComponent(L),G=IA(RA,$);await TA(G)}}catch(L){console.error("Erro ao remover foto:",L)}});await Promise.all(f)}await r1(Wt(ct,"artifacts",Kn,"public","data","serviceOrders",$n.firestoreId)),he("OS excluída com sucesso!","success"),ki(!1),Br(null)}catch(f){he("Erro ao excluir: "+f.message,"error")}},Pd=async()=>{try{localStorage.removeItem("adminRestoreToken"),localStorage.removeItem("adminEmail"),await s(),window.location.href="/",setTimeout(()=>{window.location.reload()},100)}catch(f){console.error("Erro ao fazer logout:",f),window.location.reload()}},oa=f=>{const m=Li(),k=m.status==="Em orçamento"||m.status==="Aguardando aprovação do orçamento",L=f==="internal"?"Relatório INTERNO":k?"Proposta de orçamento":"Relatório de atendimento",$=`${m.paymentCondition}${m.installments?` ${m.installments}`:""}`,G=m.finalChargedAmount>0?Ne(m.finalChargedAmount):Ne(m.chargedAmount);let W="";if(m.discount5Days&&m.chargedAmount){const tt=Ne(m.chargedAmount),ue=tt*.05,Cn=tt-ue;W=`
        <div style="margin-top: 10px; padding: 8px; background: #f0fdf4; border-radius: 6px; border: 1px solid #bbf7d0;">
            <div style="font-size: 9px; font-weight: bold; color: #166534; margin-bottom: 3px;">DESCONTO APLICADO</div>
            <div style="display: flex; justify-content: space-between; font-size: 10px;">
                <span>Valor Original:</span>
                <span>R$ ${tt.toLocaleString("pt-BR",{minimumFractionDigits:2})}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 10px;">
                <span>Desconto (5%):</span>
                <span style="color: #dc2626;">- R$ ${ue.toLocaleString("pt-BR",{minimumFractionDigits:2})}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: bold; margin-top: 3px; border-top: 1px dashed #86efac; padding-top: 3px;">
                <span>VALOR FINAL:</span>
                <span style="color: #166534;">R$ ${Cn.toLocaleString("pt-BR",{minimumFractionDigits:2})}</span>
            </div>
        </div>
    `}const Q=m.defect?m.defect.split(`
`).filter(tt=>tt.trim()):[],se=m.solution?m.solution.split(`
`).filter(tt=>tt.trim()):[],Re=m.equipmentObservation||"",Me=m.photos||[];let Nt=`
<!DOCTYPE html>
<html>
<head>
    <title>${L}</title>
    <meta charset="UTF-8">
    <style>
        @media print {
            /* REMOVER margens do navegador */
            @page {
                size: A4;
                margin: 0;
            }
            
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                color: #333;
                line-height: 1.4;
                padding: 0;
                margin: 0;
                font-size: 12px;
                width: 100%;
                height: 100%;
            }
            
            .report-page {
                width: 210mm; /* Largura A4 */
                min-height: 297mm; /* Altura A4 */
                padding: 15mm 20mm;
                position: relative;
                box-sizing: border-box;
                background: white;
                display: flex;
                flex-direction: column;
            }
            
            .header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                border-bottom: 2px solid #1a56db;
                padding-bottom: 15px;
                margin-bottom: 25px;
                flex-wrap: wrap;
            }
            
            .logo-container img {
                height: 70px;
                max-width: 200px;
                object-fit: contain;
            }
            
            .report-info {
                text-align: right;
                flex: 1;
                min-width: 250px;
            }
            
            .report-title {
                font-size: 18px;
                font-weight: 900;
                color: #1a56db;
                text-transform: uppercase;
                margin-bottom: 5px;
            }
            
            .internal-badge {
                background: #b91c1c;
                color: white;
                padding: 2px 8px;
                font-size: 10px;
                border-radius: 4px;
                font-weight: bold;
                margin-bottom: 4px;
                display: inline-block;
            }
            
            .section {
                margin-bottom: 25px;
            }
            
            .section-title {
                background: #f8fafc;
                padding: 8px 12px;
                font-size: 12px;
                font-weight: 900;
                text-transform: uppercase;
                border-left: 5px solid #1a56db;
                margin-bottom: 15px;
                color: #1e40af;
            }
            
            .client-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
                font-size: 12px;
                margin-bottom: 25px;
            }
            
            .equipment-details {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 30px;
                margin-top: 20px;
            }
            
            .observation-section {
                margin-top: 20px;
                padding: 15px;
                background: #f8fafc;
                border-left: 4px solid #94a3b8;
                border-radius: 6px;
                font-size: 11px;
                line-height: 1.4;
            }
            
            .valor-section {
                margin-top: 20px;
                padding: 20px;
                background: #f0fdf4;
                border-left: 4px solid #10b981;
                border-radius: 8px;
                font-size: 12px;
                line-height: 1.5;
            }
            
            .valor-destaque {
                font-size: 20px;
                font-weight: 900;
                color: #166534;
                text-align: center;
                margin: 15px 0;
            }
            
            .defects-list, .solutions-list {
                margin: 8px 0;
                padding-left: 15px;
            }
            
            .defects-list li, .solutions-list li {
                margin-bottom: 4px;
                padding-left: 5px;
            }
            
            /* ÁREA DE ASSINATURA - MAIS DISTANTE DO CONTEÚDO */
            .signature-area {
                display: flex;
                justify-content: space-around;
                margin-top: 150px; /* AUMENTADO para mais distância do conteúdo */
                margin-bottom: 50px; /* Aumentado para mais espaço */
                page-break-inside: avoid;
                position: relative;
            }
            
            .signature-box {
                border-top: 1px solid #333;
                width: 250px;
                text-align: center;
                padding-top: 15px; /* Aumentado para mais espaço de assinatura */
                font-size: 12px;
                font-weight: 600;
                min-height: 120px; /* Altura aumentada */
            }
            
            /* RODAPÉ FIXO NO FINAL ABSOLUTO - CONTADOR REMOVIDO */
            .company-footer {
                position: absolute;
                bottom: 5mm; /* COLADO NO FINAL DA PÁGINA */
                left: 20mm;
                right: 20mm;
                font-size: 8px;
                color: #666;
                text-align: center;
                border-top: 1px solid #eee;
                padding-top: 8px;
                line-height: 1.2;
                margin: 0;
                background: white;
                z-index: 10;
            }
            
            /* CONTADOR DE PÁGINAS REMOVIDO - LINHA COMENTADA/EXCLUÍDA */
            /* .page-counter { position: absolute; bottom: 5mm; right: 20mm; ... } */
            
            .photo-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                gap: 10px;
                margin-top: 15px;
            }
            
            .photo-item {
                border: 1px solid #e2e8f0;
                border-radius: 4px;
                overflow: hidden;
            }
            
            .photo-item img {
                width: 100%;
                height: 120px;
                object-fit: cover;
            }
            
            .footer-notes {
                margin-top: 30px;
                font-size: 10px;
                color: #666;
                padding-top: 15px;
                line-height: 1.5;
                page-break-inside: avoid;
                border-top: 1px solid #eee;
            }
            
            .footer-title {
                font-weight: bold;
                color: #1a56db;
                margin-bottom: 5px;
                font-size: 11px;
            }
            
            /* Garantir que o conteúdo não sobreponha o rodapé */
            .content-wrapper {
                flex: 1;
                display: flex;
                flex-direction: column;
                padding-bottom: 60px; /* Aumentado para mais espaço antes da assinatura */
                box-sizing: border-box;
            }
            
            .page-break-avoid {
                page-break-inside: avoid;
                page-break-before: avoid;
                page-break-after: avoid;
            }
        }
        
        /* Estilos para visualização em tela */
        @media screen {
            .report-page {
                width: 210mm;
                min-height: 297mm;
                margin: 0 auto;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
                background: white;
            }
        }
    </style>
</head>
<body>
    <div class="report-page">
        <div class="content-wrapper">
            <div class="header">
                <div class="logo-container">
                    <img src="${xa}" alt="Alfa Tecnologia Hospitalar" onerror="this.style.display='none';">
                </div>
                <div class="report-info">
                    ${f==="internal"?'<div class="internal-badge">USO INTERNO - CONFIDENCIAL</div>':""}
                    <div class="report-title">${L}</div>
                    <div style="font-size:11px;color:#666;">Data: ${new Date().toLocaleDateString("pt-BR")}</div>
                </div>
            </div>
            
            <div class="section">
                <div class="section-title">Dados do Cliente</div>
                <div class="client-grid">
                    <div><strong>Cliente:</strong><br>${m.client||"---"}</div>
                    <div><strong>CNPJ:</strong><br>${m.cnpj||"---"}</div>
                    <div><strong>Atendimento:</strong><br>${m.billingType} ${m.maintenanceVisit?"- "+m.maintenanceVisit:""}</div>
                    <div><strong>Contato:</strong><br>${m.contactPerson||"---"}</div>
                    <div><strong>E-mail:</strong><br>${m.email||"---"}</div>
                    <div><strong>Endereço:</strong><br>${m.address||"---"}</div>
                </div>
            </div>
            
            ${k&&f==="client"?`
            <div class="valor-section">
                <div class="footer-title">VALOR DA PROPOSTA</div>
                <div class="valor-destaque">
                    R$ ${G.toLocaleString("pt-BR",{minimumFractionDigits:2})}
                </div>
                <p><strong>Condições de pagamento:</strong> ${$}</p>
                ${W}
            </div>
            `:""}
            
            <div class="section">
                <div class="section-title">Equipamento</div>
                <div style="margin-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: start;">
                        <div style="flex: 1;">
                            <div style="font-weight: bold; font-size: 14px; color: #1e40af; margin-bottom: 5px;">${m.item||"---"}</div>
                            <div style="font-size: 11px; color: #666; margin-bottom: 5px;">
                                ${m.manufacturer||""} ${m.model||""}
                            </div>
                            <div style="font-size: 10px; color: #999;">NS: ${m.serial||"N/D"}</div>
                            ${m.quantity&&parseInt(m.quantity)>1?`<div style="font-size:10px;color:#666;margin-top:5px;"><strong>Quantidade:</strong> ${m.quantity}</div>`:""}
                            <div style="margin-top: 10px; font-size: 11px;">
                                <strong>OS:</strong> ${m.osNumber||"---"} | 
                                <strong>Status:</strong> ${m.status||"---"}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="equipment-details">
                    <div class="defects-section">
                        <div style="font-weight: bold; font-size: 12px; color: #1e40af; margin-bottom: 10px;">DEFEITOS ENCONTRADOS</div>
                        ${Q.length>0?`<ul class="defects-list">${Q.map(tt=>`<li>${tt}</li>`).join("")}</ul>`:'<div style="color: #999; font-style: italic;">Sem defeitos registrados</div>'}
                    </div>
                    
                    <div class="solutions-section">
                        <div style="font-weight: bold; font-size: 12px; color: #059669; margin-bottom: 10px;">SOLUÇÃO APLICADA</div>
                        ${se.length>0?`<ul class="solutions-list">${se.map(tt=>`<li>${tt}</li>`).join("")}</ul>`:'<div style="color: #999; font-style: italic;">Solução em análise</div>'}
                    </div>
                </div>
                
                ${Re||Me.length>0?`
                <div class="observation-section">
                    ${Re?`
                    <div style="margin-bottom: ${Me.length>0?"15px":"0"};">
                        <div style="font-weight: bold; font-size: 11px; color: #7c3aed; margin-bottom: 5px;">OBSERVAÇÕES:</div>
                        <div style="font-size: 11px; line-height: 1.4;">${Re}</div>
                    </div>
                    `:""}
                    
                    ${Me.length>0?`
                    <div>
                        <div style="font-weight: bold; font-size: 11px; color: #7c3aed; margin-bottom: 5px;">FOTOS:</div>
                        <div class="photo-grid">
                            ${Me.slice(0,3).map((tt,ue)=>`<div class="photo-item">
                                        <img src="${tt}" alt="Foto ${ue+1}" onerror="this.style.display='none';">
                                    </div>`).join("")}
                        </div>
                        ${Me.length>3?`<div style="font-size: 10px; color: #666; margin-top: 5px;">+ ${Me.length-3} foto(s) adicional(is)</div>`:""}
                    </div>
                    `:""}
                </div>
                `:""}
            </div>
            
            ${f==="client"&&k?`
            <div class="footer-notes">
                <div class="footer-title">INFORMAÇÕES IMPORTANTES:</div>
                <p><strong>• Garantia:</strong> 3 meses. Não está coberto por garantia os danos causados por uso inadequado, queda ou choque mecânico, acondicionamento inadequado e/ou acondicionamento fora dos padrões recomendados pelo fabricante.</p>
                <p><strong>• Prazo de entrega:</strong> ${m.deliveryDeadline||"A ser definido após aprovação do orçamento"}</p>
            </div>
            `:""}
            
            <div class="signature-area page-break-avoid">
                <div class="signature-box">Técnico Responsável</div>
                <div class="signature-box">Cliente / Recebedor</div>
            </div>
        </div>
        
        <div class="company-footer">
            <strong>Alfa Tecnologia Hospitalar</strong> - CNPJ: 50.993.453/0001-34<br/>
            (55) 9 9137-9413 - alfa.manutencaosm@gmail.com<br/>
            Endereço: Travessa Moreira, 125 - CEP: 97070-540 - Bairro: Duque de Caxias, Santa Maria/ RS
        </div>
        
        <!-- CONTADOR DE PÁGINAS REMOVIDO -->
    </div>
</body>
</html>`;const kn=window.open("","printWindow","width=800,height=600,scrollbars=yes");if(!kn){he("Permita pop-ups para imprimir o documento","error");return}kn.document.write(Nt),kn.document.close(),setTimeout(()=>{kn.focus(),kn.print()},500)},aa=()=>{if(ve.length===0){he("Selecione pelo menos uma OS para exportar","error");return}if((e==null?void 0:e.role)==="client"){he("Clientes não têm permissão para exportar documentos Word","error");return}const f=pe.filter(m=>ve.includes(m.firestoreId));try{en(!0);const m={};f.forEach($=>{const G=`${$.client}-${$.cnpj||"no-cnpj"}-${$.billingType}-${$.maintenanceVisit||"no-visit"}`;m[G]||(m[G]={header:{client:$.client,cnpj:$.cnpj,contactPerson:$.contactPerson,email:$.email,address:$.address,billingType:$.billingType,maintenanceVisit:$.maintenanceVisit},items:[]}),m[G].items.push($)});let k=`
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Relatório de OS - Alfa Tecnologia Hospitalar</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        h1 {
            text-align: center;
            font-size: 28px;
            margin-bottom: 10px;
            color: #1a56db;
        }
        h2 {
            text-align: center;
            font-size: 20px;
            margin-top: 0;
            margin-bottom: 30px;
            color: #1a56db;
        }
        h3 {
            color: #1a56db;
            font-size: 16px;
            border-bottom: 2px solid #1a56db;
            padding-bottom: 5px;
            margin-top: 30px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        th {
            background-color: #f2f2f2;
            color: #1a56db;
            text-align: left;
            padding: 10px;
            border: 1px solid #ddd;
        }
        td {
            padding: 10px;
            border: 1px solid #ddd;
            vertical-align: top;
        }
        .client-info {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 20px;
        }
        .info-item {
            margin-bottom: 10px;
        }
        .info-label {
            font-weight: bold;
            font-size: 12px;
            color: #666;
            margin-bottom: 3px;
        }
        .info-value {
            font-size: 14px;
            color: #333;
        }
        .os-number {
            font-weight: bold;
            color: #1a56db;
        }
        .status {
            font-size: 11px;
            background-color: #f1f5f9;
            color: #475569;
            padding: 2px 6px;
            border-radius: 4px;
            display: inline-block;
            margin-top: 3px;
        }
        .equipment-name {
            font-weight: bold;
        }
        .equipment-details {
            font-size: 12px;
            color: #666;
            margin-top: 3px;
        }
        .serial {
            font-family: monospace;
            font-size: 11px;
            color: #999;
        }
        .footer {
            margin-top: 50px;
            text-align: center;
            font-size: 12px;
            color: #666;
            border-top: 1px solid #ddd;
            padding-top: 15px;
        }
        .page-break {
            page-break-after: always;
        }
        .photo-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 5px;
            margin-top: 10px;
        }
        .photo-item {
            border: 1px solid #ddd;
            border-radius: 3px;
            overflow: hidden;
        }
        .photo-item img {
            width: 100%;
            height: 80px;
            object-fit: cover;
        }
    </style>
</head>
<body>`;Object.values(m).forEach(($,G)=>{k+=`
    <div style="text-align: center; margin-bottom: 30px;">
        <img src="${xa}" alt="Logo" style="height: 60px; margin-bottom: 10px;">
        <h1>Relatório de Atendimento Técnico</h1>
    </div>
    
    <h3>DADOS DO CLIENTE</h3>
    <div class="client-info">
        <div class="info-item">
            <div class="info-label">Cliente</div>
            <div class="info-value">${$.header.client||"---"}</div>
        </div>
        <div class="info-item">
            <div class="info-label">CNPJ</div>
            <div class="info-value">${$.header.cnpj||"---"}</div>
        </div>
        <div class="info-item">
            <div class="info-label">Contato</div>
            <div class="info-value">${$.header.contactPerson||"---"}</div>
        </div>
        <div class="info-item">
            <div class="info-label">E-mail</div>
            <div class="info-value">${$.header.email||"---"}</div>
        </div>
        <div class="info-item">
            <div class="info-label">Endereço</div>
            <div class="info-value">${$.header.address||"---"}</div>
        </div>
        <div class="info-item">
            <div class="info-label">Tipo de Atendimento</div>
            <div class="info-value">${$.header.billingType} ${$.header.maintenanceVisit?"- "+$.header.maintenanceVisit:""}</div>
        </div>
    </div>
    
    <h3>LISTA DE EQUIPAMENTOS</h3>
    <table>
        <thead>
            <tr>
                <th width="15%">OS</th>
                <th width="25%">Equipamento</th>
                <th width="30%">Defeito / Solução</th>
                <th width="30%">Observações</th>
            </tr>
        </thead>
        <tbody>`,$.items.forEach(W=>{const Q=W.defect?W.defect.split(`
`).filter(Me=>Me.trim()):[],se=W.solution?W.solution.split(`
`).filter(Me=>Me.trim()):[],Re=W.photos||[];k+=`
            <tr>
                <td>
                    <div class="os-number">${W.osNumber||"---"}</div>
                    <div class="status">${W.status||"---"}</div>
                </td>
                <td>
                    <div class="equipment-name">${W.item||"---"}</div>
                    <div class="equipment-details">${W.manufacturer||""} ${W.model||""}</div>
                    <div class="serial">NS: ${W.serial||"N/D"}</div>
                    ${W.quantity&&parseInt(W.quantity)>1?`<div class="quantity" style="font-size:9px;color:#666;margin-top:2px;"><strong>Quantidade:</strong> ${W.quantity}</div>`:""}
                </td>
                <td>
                    <div><strong>Defeito:</strong></div>
                    ${Q.length>0?`<ul style="margin: 5px 0; padding-left: 20px;">${Q.map(Me=>`<li>${Me}</li>`).join("")}</ul>`:'<div style="color: #999; font-style: italic;">Sem defeitos registrados</div>'}
                    <div style="margin-top: 10px;"><strong>Solução:</strong></div>
                    ${se.length>0?`<ul style="margin: 5px 0; padding-left: 20px;">${se.map(Me=>`<li>${Me}</li>`).join("")}</ul>`:'<div style="color: #999; font-style: italic;">Solução em análise</div>'}
                </td>
                <td>
                    ${W.equipmentObservation?`
                    <div><strong>Observações:</strong> ${W.equipmentObservation}</div>
                    `:""}
                    
                    ${Re.length>0?`
                    <div style="margin-top: 10px;"><strong>Fotos:</strong></div>
                    <div class="photo-grid">
                        ${Re.slice(0,3).map(Me=>`<div class="photo-item">
                                <img src="${Me}" alt="Foto" onerror="this.style.display='none';">
                            </div>`).join("")}
                    </div>
                    ${Re.length>3?`<div style="font-size: 9px; color: #666; margin-top: 5px;">+ ${Re.length-3} foto(s) adicional(is)</div>`:""}
                    `:""}
                </td>
            </tr>`}),k+=`
        </tbody>
    </table>
    
    <div class="footer">
        <p><strong>Alfa Tecnologia Hospitalar</strong> - CNPJ: 50.993.453/0001-34</p>
        <p>(55) 9 9137-9413 - alfa.manutencaosm@gmail.com</p>
        <p>Endereço: Travessa Moreira, 125 - CEP: 97070-540 - Bairro: Duque de Caxias, Santa Maria/ RS</p>
    </div>`,G<Object.values(m).length-1&&(k+='<div class="page-break"></div>')}),k+=`
</body>
</html>`;const L=new Blob([k],{type:"application/msword;charset=utf-8"});lR.saveAs(L,`relatorio_os_${new Date().toISOString().split("T")[0]}.doc`),he("Documento Word gerado com sucesso!","success")}catch(m){console.error("Erro ao gerar documento Word:",m),he("Erro ao gerar documento Word: "+m.message,"error")}finally{en(!1)}};return n?l.jsx("div",{className:"min-h-screen bg-slate-50 flex items-center justify-center",children:l.jsxs("div",{className:"text-center",children:[l.jsx(Gi,{className:"animate-spin mx-auto text-blue-600 mb-4",size:40}),l.jsx("p",{className:"text-slate-600 font-medium",children:"Verificando autenticação..."})]})}):t?In()?l.jsxs("div",{className:"flex min-h-screen bg-slate-50 font-sans overflow-hidden",children:[l.jsx("button",{onClick:()=>I(!w),className:"lg:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-xl shadow-lg",children:l.jsx(GA,{size:24})}),l.jsxs("aside",{className:`
        ${w?"translate-x-0":"-translate-x-full lg:translate-x-0"} 
        fixed lg:relative z-40 lg:z-auto
        ${w?"w-64":"lg:w-20 w-64"} 
        bg-slate-900 text-white transition-all duration-300 flex flex-col h-screen shadow-2xl lg:shadow-none
    `,children:[l.jsx("div",{className:`flex items-center border-b border-slate-800 ${w?"h-32 p-4":"h-20 justify-center p-4"}`,children:w?l.jsx("div",{className:"w-full h-full flex items-center justify-center",children:l.jsx("div",{className:"w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center",children:l.jsx("img",{src:xa,alt:"Logo Alfa Tecnologia Hospitalar",className:"h-20 object-contain"})})}):l.jsx("div",{className:"bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full shadow-lg flex items-center justify-center w-12 h-12",children:l.jsx("img",{src:xa,alt:"Logo Alfa",className:"w-10 h-10 object-contain"})})}),l.jsx("nav",{className:"flex-1 p-3 space-y-1",children:(e==null?void 0:e.role)==="client"?l.jsxs(l.Fragment,{children:[l.jsx(Gn,{icon:l.jsx(Nv,{size:w?20:22}),label:"Painel de OS",active:j==="os",onClick:()=>V("os"),isSidebarOpen:w}),l.jsx(Gn,{icon:l.jsx(_h,{size:w?20:22}),label:"Painel de Status",active:j==="status",onClick:()=>V("status"),isSidebarOpen:w})]}):l.jsxs(l.Fragment,{children:[l.jsx(Gn,{icon:l.jsx(Nv,{size:w?20:22}),label:"Painel de OS",active:j==="os",onClick:()=>V("os"),isSidebarOpen:w}),l.jsx(Gn,{icon:l.jsx(_h,{size:w?20:22}),label:"Painel de Status",active:j==="status",onClick:()=>V("status"),isSidebarOpen:w}),l.jsx(Gn,{icon:l.jsx(Bf,{size:w?20:22}),label:"Financeiro",active:j==="financial",onClick:()=>V("financial"),isSidebarOpen:w}),l.jsx(Gn,{icon:l.jsx(Ev,{size:w?20:22}),label:"Contratos",active:j==="contracts",onClick:()=>V("contracts"),isSidebarOpen:w}),l.jsx(Gn,{icon:l.jsx(_v,{size:w?20:22}),label:"Inventário",active:j==="inventory",onClick:()=>V("inventory"),isSidebarOpen:w}),l.jsx(Gn,{icon:l.jsx(bh,{size:w?20:22}),label:"Clientes",active:j==="clients",onClick:()=>V("clients"),isSidebarOpen:w}),r("canManageUsers")&&l.jsx(Gn,{icon:l.jsx(wd,{size:w?20:22}),label:"Usuários",active:j==="users",onClick:()=>V("users"),isSidebarOpen:w}),l.jsx("div",{className:"pt-2 border-t border-slate-800 mt-2",children:l.jsx(Gn,{icon:l.jsx(uo,{size:w?20:22}),label:"Sobre",active:j==="about",onClick:()=>V("about"),isSidebarOpen:w})})]})}),l.jsx("div",{className:"flex flex-col border-t border-slate-800",children:l.jsxs("div",{className:"flex items-center justify-between p-4",children:[l.jsx("button",{onClick:()=>I(!w),className:"text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-slate-800 lg:flex hidden",title:w?"Recolher Sidebar":"Expandir Sidebar",children:l.jsx(BA,{className:`transition-transform duration-300 ${w?"rotate-180":""}`,size:20})}),l.jsx("button",{onClick:Pd,className:"text-red-400 hover:text-red-500 transition-colors p-1 rounded-lg hover:bg-slate-800",title:"Sair",children:l.jsx(KA,{size:20})})]})})]}),w&&l.jsx("div",{className:"lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30",onClick:()=>I(!1)}),l.jsxs("main",{className:"flex-1 p-4 md:p-8 overflow-y-auto h-screen",children:[j==="os"&&In()&&l.jsxs("div",{className:"space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto",children:[l.jsxs("div",{className:"flex flex-col",children:[l.jsx("h2",{className:"text-3xl font-black text-slate-900 tracking-tighter",children:"Gestão de OS"}),l.jsx("p",{className:"text-slate-500 text-sm font-medium",children:"Fluxo operacional hospitalar"})]}),ve.length>0&&l.jsxs("div",{className:"bg-white rounded-2xl shadow-xl border border-slate-100 p-6",children:[l.jsxs("div",{className:"flex justify-between items-center mb-4",children:[l.jsxs("h3",{className:"text-lg font-black text-slate-800",children:["Ações para ",ve.length," OS(s) selecionada(s):"]}),l.jsxs("button",{onClick:()=>tn([]),className:"text-sm text-red-600 hover:text-red-700 font-bold flex items-center gap-2",children:[l.jsx(Xe,{size:16})," Limpar seleção"]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[(e==null?void 0:e.role)!=="client"&&l.jsxs("button",{onClick:()=>Ke(!0),className:"bg-green-600 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-green-700 transition-colors h-24",children:[l.jsx(xh,{size:20}),l.jsx("span",{className:"text-sm",children:"Movimentar OS"})]}),l.jsxs("button",{onClick:()=>Sn("client"),className:"bg-indigo-600 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-indigo-700 transition-colors h-24",children:[l.jsx(wh,{size:20}),l.jsx("span",{className:"text-sm",children:"Imprimir Cliente"})]}),(e==null?void 0:e.role)!=="client"&&l.jsxs(l.Fragment,{children:[l.jsxs("button",{onClick:()=>Ks("internal"),className:"bg-slate-800 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-slate-900 transition-colors h-24",children:[l.jsx(Tu,{size:20}),l.jsx("span",{className:"text-sm",children:"Imprimir Interno"})]}),l.jsxs("button",{onClick:aa,className:"bg-emerald-600 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-emerald-700 transition-colors h-24",children:[l.jsx(Tv,{size:20}),l.jsx("span",{className:"text-sm",children:"Exportar para Word"})]})]})]})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[l.jsxs("div",{className:"relative group z-20 flex-1",children:[l.jsx(Hf,{className:"absolute left-5 top-5 text-slate-400 group-focus-within:text-blue-600 transition-colors",size:24}),l.jsx("input",{className:"w-full pl-14 pr-6 py-5 rounded-2xl border-none shadow-xl shadow-slate-200/50 focus:ring-4 focus:ring-blue-500/10 text-lg font-medium outline-none bg-white relative z-10",placeholder:"Pesquise por cliente, OS ou equipamento...",value:b,onChange:f=>Ae(f.target.value)}),b&&l.jsxs("div",{className:"absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in slide-in-from-top-2 z-50",children:[pe.filter(f=>{var m,k,L;return((m=f.client)==null?void 0:m.toLowerCase().includes(b.toLowerCase()))||((k=f.osNumber)==null?void 0:k.includes(b))||((L=f.item)==null?void 0:L.toLowerCase().includes(b.toLowerCase()))}).slice(0,5).map(f=>l.jsxs("div",{onClick:()=>{Nn(f),Ae("")},className:"p-4 border-b border-slate-50 hover:bg-blue-50 cursor-pointer flex justify-between items-center group/item transition-colors",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"font-bold text-slate-800 flex items-center gap-2",children:[f.client,l.jsx("span",{className:"text-[10px] bg-slate-100 text-slate-500 px-2 rounded-full uppercase",children:f.status})]}),l.jsxs("div",{className:"text-xs text-slate-500 mt-1",children:[l.jsx("span",{className:"font-mono text-blue-600 font-bold",children:f.osNumber})," - ",f.item]})]}),l.jsxs("div",{className:"text-xs font-bold text-blue-600 opacity-0 group-hover/item:opacity-100 flex items-center gap-1 transition-all",children:["Abrir ",l.jsx(Eu,{size:14})]})]},f.firestoreId)),pe.filter(f=>{var m,k,L;return((m=f.client)==null?void 0:m.toLowerCase().includes(b.toLowerCase()))||((k=f.osNumber)==null?void 0:k.includes(b))||((L=f.item)==null?void 0:L.toLowerCase().includes(b.toLowerCase()))}).length===0&&l.jsx("div",{className:"p-6 text-center text-slate-400 text-sm font-medium",children:"Nenhum resultado encontrado."})]})]}),l.jsxs("div",{className:"flex gap-2",children:[l.jsxs("div",{className:"relative",children:[l.jsxs("button",{onClick:()=>ae(!ie),className:`p-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-colors ${ie?"bg-blue-600 text-white shadow-xl shadow-blue-200":"bg-white text-slate-600 shadow-xl shadow-slate-200/50 hover:bg-slate-50"}`,title:"Seleção por intervalo",children:[l.jsx(HA,{size:24}),l.jsx("span",{className:"hidden sm:inline",children:"Intervalo"})]}),ie&&l.jsx("div",{className:"absolute top-full right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 w-80 animate-in slide-in-from-top-2 z-50",children:l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("h4",{className:"text-sm font-bold text-slate-700",children:"Seleção por Intervalo"}),l.jsx("button",{onClick:()=>ae(!1),className:"text-slate-400 hover:text-slate-600",children:l.jsx(Xe,{size:16})})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("div",{className:"text-xs text-slate-500 font-medium",children:"Digite o intervalo de números de OS:"}),l.jsx("input",{type:"text",placeholder:"Ex: 10-20 ou 10,20,30 ou apenas 10",className:"w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20",value:pt,onChange:f=>X(f.target.value),onKeyDown:f=>{f.key==="Enter"&&Yo()},autoFocus:!0}),l.jsxs("div",{className:"text-[10px] text-slate-400 space-y-1",children:[l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx(Ki,{size:10})," Formato: 10-20 (intervalo)"]}),l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx(Ki,{size:10})," Formato: 10,20,30 (lista)"]}),l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx(Ki,{size:10})," Formato: 10 (única)"]})]})]}),l.jsxs("div",{className:"flex gap-2 pt-2",children:[l.jsxs("button",{onClick:Yo,className:"flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2",children:[l.jsx(Ki,{size:16})," Aplicar"]}),l.jsx("button",{onClick:()=>{X(""),ae(!1)},className:"px-4 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors",children:"Cancelar"})]})]})})]}),l.jsx("button",{onClick:()=>Os(f=>f==="desc"?"asc":"desc"),className:"bg-white p-5 rounded-2xl shadow-xl shadow-slate-200/50 border-none hover:bg-slate-50 transition-colors text-slate-600",title:Qe==="desc"?"Mais Recentes Primeiro":"Mais Antigos Primeiro",children:Qe==="desc"?l.jsx(OA,{size:24}):l.jsx(LA,{size:24})}),ve.length===0&&r("canEditOS")&&l.jsxs("button",{onClick:()=>Nn(),className:"bg-blue-600 text-white px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-colors min-w-[200px]",children:[l.jsx(_r,{size:24})," Abrir Nova OS"]})]})]}),l.jsx("div",{className:"bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden overflow-x-auto relative z-0",children:l.jsx("div",{className:"overflow-x-auto",children:l.jsxs("table",{className:"w-full text-left min-w-[800px]",children:[l.jsx("thead",{className:"bg-slate-50/50 border-b text-[10px] font-black uppercase text-slate-400 tracking-widest",children:l.jsxs("tr",{children:[l.jsx("th",{className:"px-6 py-6 text-center w-12",children:l.jsx("input",{type:"checkbox",className:"w-4 h-4 rounded border-slate-300 text-blue-600",onChange:f=>{const m=Vt.filter(k=>{var L,$;return((L=k.client)==null?void 0:L.toLowerCase().includes(b.toLowerCase()))||(($=k.osNumber)==null?void 0:$.includes(b))});if(f.target.checked)tn(m.map(k=>k.firestoreId));else{const k=m.map(L=>L.firestoreId);tn(L=>L.filter($=>!k.includes($)))}},checked:Vt.filter(f=>{var m,k;return((m=f.client)==null?void 0:m.toLowerCase().includes(b.toLowerCase()))||((k=f.osNumber)==null?void 0:k.includes(b))}).every(f=>ve.includes(f.firestoreId))&&Vt.filter(f=>{var m,k;return((m=f.client)==null?void 0:m.toLowerCase().includes(b.toLowerCase()))||((k=f.osNumber)==null?void 0:k.includes(b))}).length>0})}),l.jsx("th",{className:"px-8 py-6",children:"Identificação"}),l.jsx("th",{className:"px-8 py-6",children:"Equipamento"}),l.jsx("th",{className:"px-8 py-6",children:"Tipo"}),l.jsx("th",{className:"px-8 py-6",children:"Status"}),l.jsx("th",{className:"px-8 py-6 text-right",children:"Ações"})]})}),l.jsx("tbody",{className:"divide-y divide-slate-50",children:R?l.jsx("tr",{children:l.jsx("td",{colSpan:"6",className:"p-20 text-center",children:l.jsx(Gi,{className:"animate-spin mx-auto text-blue-600",size:32})})}):Vt.filter(f=>{var m,k;return((m=f.client)==null?void 0:m.toLowerCase().includes(b.toLowerCase()))||((k=f.osNumber)==null?void 0:k.includes(b))}).map(f=>l.jsxs("tr",{className:`hover:bg-blue-50/30 transition-colors group ${ve.includes(f.firestoreId)?"bg-blue-50/50":""}`,children:[l.jsx("td",{className:"px-6 py-4 text-center",children:l.jsx("input",{type:"checkbox",className:"w-4 h-4 rounded border-slate-300 text-blue-600",checked:ve.includes(f.firestoreId),onChange:()=>{tn(m=>m.includes(f.firestoreId)?m.filter(k=>k!==f.firestoreId):[...m,f.firestoreId])}})}),l.jsxs("td",{className:"px-8 py-6",children:[l.jsx("div",{className:"font-black text-blue-700 text-lg",children:f.osNumber}),l.jsx("div",{className:"font-bold text-slate-900 text-sm",children:f.client})]}),l.jsxs("td",{className:"px-8 py-6",children:[l.jsx("div",{className:"font-bold text-slate-900 text-sm",children:f.item}),(f.manufacturer||f.model)&&l.jsxs("div",{className:"text-xs text-slate-500 font-medium mb-0.5",children:[f.manufacturer||""," ",f.model||""]}),l.jsxs("div",{className:"text-[10px] text-slate-400 font-mono",children:["NS: ",f.serial||"N/D"]}),f.quantity&&parseInt(f.quantity)>1&&l.jsxs("div",{className:"text-[10px] text-blue-600 font-bold mt-0.5",children:["Quantidade: ",f.quantity]})]}),l.jsx("td",{className:"px-8 py-6",children:l.jsx("div",{className:"text-xs font-bold text-slate-500 uppercase tracking-tighter",children:f.billingType})}),l.jsxs("td",{className:"px-8 py-6",children:[l.jsx("div",{className:"px-4 py-2 rounded-xl text-[10px] font-black uppercase inline-block border bg-slate-100 text-slate-600",children:f.status}),l.jsx("div",{className:"text-[9px] text-slate-400 mt-1 font-medium",children:f.statusDate?new Date(f.statusDate).toLocaleDateString("pt-BR"):"Sem data"})]}),l.jsx("td",{className:"px-8 py-6 text-right",children:l.jsxs("div",{className:"flex justify-end gap-2",children:[(e==null?void 0:e.role)!=="client"&&l.jsx("button",{onClick:()=>Nn(f),className:"p-3 bg-white border shadow-sm hover:bg-blue-600 hover:text-white rounded-xl transition-all",title:"Editar OS",children:l.jsx(XA,{size:18})}),(e==null?void 0:e.role)!=="client"&&r("canDeleteOS")&&l.jsx("button",{onClick:()=>Le(f),className:"p-3 bg-white border shadow-sm hover:bg-red-600 hover:text-white rounded-xl transition-all",title:"Excluir OS",children:l.jsx(gl,{size:18})})]})})]},f.firestoreId))})]})})})]}),j==="status"&&In()&&l.jsxs("div",{className:"space-y-6 animate-in fade-in duration-500 max-w-7xl mx-auto h-full flex flex-col",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 shrink-0",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter",children:"Indicadores"}),l.jsx("p",{className:"text-slate-500 font-medium",children:vr()?`Visualizando métricas filtradas (${we.count} ordens)`:`Visualizando métricas gerais de todas as ordens (${we.count})`})]}),vr()&&l.jsxs("button",{onClick:Ql,className:"text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-2",children:[l.jsx(Xe,{size:16})," Limpar todos os filtros"]})]}),ve.length>0&&l.jsxs("div",{className:"bg-white rounded-2xl shadow-xl border border-slate-100 p-6 animate-in slide-in-from-top-4",children:[l.jsxs("div",{className:"flex justify-between items-center mb-4",children:[l.jsxs("h3",{className:"text-lg font-black text-slate-800",children:["Ações para ",ve.length," OS(s) selecionada(s):"]}),l.jsxs("button",{onClick:()=>tn([]),className:"text-sm text-red-600 hover:text-red-700 font-bold flex items-center gap-2",children:[l.jsx(Xe,{size:16})," Limpar seleção"]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[(e==null?void 0:e.role)!=="client"&&l.jsxs("button",{onClick:()=>Ke(!0),className:"bg-green-600 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-green-700 transition-colors h-24",children:[l.jsx(xh,{size:20}),l.jsx("span",{className:"text-sm",children:"Movimentar OS"})]}),l.jsxs("button",{onClick:()=>Sn("client"),className:"bg-indigo-600 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-indigo-700 transition-colors h-24",children:[l.jsx(wh,{size:20}),l.jsx("span",{className:"text-sm",children:"Imprimir Cliente"})]}),(e==null?void 0:e.role)!=="client"&&l.jsxs(l.Fragment,{children:[l.jsxs("button",{onClick:()=>Ks("internal"),className:"bg-slate-800 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-slate-900 transition-colors h-24",children:[l.jsx(Tu,{size:20}),l.jsx("span",{className:"text-sm",children:"Imprimir Interno"})]}),l.jsxs("button",{onClick:aa,className:"bg-emerald-600 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-emerald-700 transition-colors h-24",children:[l.jsx(Tv,{size:20}),l.jsx("span",{className:"text-sm",children:"Exportar para Word"})]})]})]})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100",children:[l.jsxs("div",{className:"text-sm font-bold text-slate-700 flex items-center gap-2",children:[l.jsx(qA,{size:16})," Filtrar por Data:"]}),l.jsxs("div",{className:"flex flex-wrap gap-3",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("label",{className:"text-xs font-bold text-slate-500",children:"Dia:"}),l.jsxs("select",{className:"bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 outline-none",value:S,onChange:f=>P(f.target.value),children:[l.jsx("option",{value:"",children:"Todos"}),Array.from({length:31},(f,m)=>m+1).map(f=>l.jsx("option",{value:f,children:f},f))]})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("label",{className:"text-xs font-bold text-slate-500",children:"Mês:"}),l.jsxs("select",{className:"bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 outline-none",value:d,onChange:f=>g(f.target.value),children:[l.jsx("option",{value:"",children:"Todos"}),co.map((f,m)=>l.jsx("option",{value:m+1,children:f},m))]})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("label",{className:"text-xs font-bold text-slate-500",children:"Ano:"}),l.jsxs("select",{className:"bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 outline-none",value:v,onChange:f=>y(f.target.value),children:[l.jsx("option",{value:"",children:"Todos"}),Array.from(new Set(pe.map(f=>(f.statusDate?new Date(f.statusDate):new Date).getFullYear()))).sort((f,m)=>m-f).map(f=>l.jsx("option",{value:f,children:f},f))]})]}),(S||d||v)&&l.jsxs("button",{onClick:()=>{P(""),g(""),y("")},className:"text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1",children:[l.jsx(Xe,{size:12})," Limpar data"]})]})]}),l.jsxs("div",{className:"flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0",children:[l.jsxs("div",{className:"lg:col-span-4 bg-white rounded-[2rem] shadow-xl border border-slate-100 flex flex-col overflow-hidden max-h-[calc(100vh-250px)]",children:[l.jsxs("div",{className:"p-6 border-b border-slate-100 bg-slate-50/50",children:[l.jsxs("div",{className:`relative group mb-3 ${w?"lg:z-10":"z-30"}`,children:[l.jsx(Hf,{className:"absolute left-4 top-3.5 text-slate-400 group-focus-within:text-blue-600 transition-colors",size:18}),l.jsx("input",{className:"w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 shadow-sm focus:ring-2 focus:ring-blue-500/20 text-sm font-bold outline-none bg-white relative",placeholder:"Buscar OS para filtrar...",value:b,onChange:f=>Ae(f.target.value)}),b&&l.jsxs("div",{className:`absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden animate-in slide-in-from-top-2 ${w?"lg:z-20":"z-50"}`,children:[pe.filter(f=>{var m,k,L;return((m=f.client)==null?void 0:m.toLowerCase().includes(b.toLowerCase()))||((k=f.osNumber)==null?void 0:k.includes(b))||((L=f.item)==null?void 0:L.toLowerCase().includes(b.toLowerCase()))}).slice(0,5).map(f=>l.jsxs("div",{onClick:()=>{Nn(f),Ae("")},className:"p-3 border-b border-slate-50 hover:bg-blue-50 cursor-pointer flex justify-between items-center group/item transition-colors",children:[l.jsxs("div",{children:[l.jsx("div",{className:"font-bold text-slate-800 text-xs flex items-center gap-2",children:f.client}),l.jsxs("div",{className:"text-[10px] text-slate-500 mt-0.5",children:[l.jsx("span",{className:"font-mono text-blue-600 font-bold",children:f.osNumber})," - ",f.item]})]}),l.jsxs("div",{className:"text-[10px] font-bold text-blue-600 opacity-0 group-hover/item:opacity-100 flex items-center gap-1 transition-all",children:["Abrir ",l.jsx(Eu,{size:12})]})]},f.firestoreId)),pe.filter(f=>{var m,k,L;return((m=f.client)==null?void 0:m.toLowerCase().includes(b.toLowerCase()))||((k=f.osNumber)==null?void 0:k.includes(b))||((L=f.item)==null?void 0:L.toLowerCase().includes(b.toLowerCase()))}).length===0&&l.jsx("div",{className:"p-4 text-center text-slate-400 text-[10px] font-medium",children:"Nenhum resultado."})]})]}),l.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold text-slate-500 px-1",children:[l.jsx("input",{type:"checkbox",className:"w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-0 cursor-pointer",onChange:f=>{let m=pe;(S||d||v)&&(m=m.filter(k=>{const L=k.statusDate?new Date(k.statusDate):new Date,$=L.getDate(),G=L.getMonth()+1,W=L.getFullYear();return!(S&&$!==parseInt(S)||d&&G!==parseInt(d)||v&&W!==parseInt(v))})),st&&(m=m.filter(k=>k.status===st)),ze&&(m=m.filter(k=>k.billingType===ze)),m=m.filter(k=>{var L,$;return((L=k.client)==null?void 0:L.toLowerCase().includes(b.toLowerCase()))||(($=k.osNumber)==null?void 0:$.includes(b))}),tn(f.target.checked?m.map(k=>k.firestoreId):[])},checked:ve.length>0&&pe.filter(f=>{var k,L,$;let m=!0;if(S||d||v){const G=f.statusDate?new Date(f.statusDate):new Date,W=G.getDate(),Q=G.getMonth()+1,se=G.getFullYear();S&&W!==parseInt(S)&&(m=!1),d&&Q!==parseInt(d)&&(m=!1),v&&se!==parseInt(v)&&(m=!1)}return st&&f.status!==st&&(m=!1),ze&&f.billingType!==ze&&(m=!1),b&&!((k=f.client)!=null&&k.toLowerCase().includes(b.toLowerCase()))&&!((L=f.osNumber)!=null&&L.includes(b))&&!(($=f.item)!=null&&$.toLowerCase().includes(b.toLowerCase()))&&(m=!1),m}).every(f=>ve.includes(f.firestoreId))}),l.jsx("span",{children:"Selecionar Todos da Busca"})]})]}),l.jsxs("div",{className:"flex-1 overflow-y-auto p-3 space-y-2 relative z-0",children:[pe.filter(f=>{var m,k,L;if(S||d||v){const $=f.statusDate?new Date(f.statusDate):new Date,G=$.getDate(),W=$.getMonth()+1,Q=$.getFullYear();if(S&&G!==parseInt(S)||d&&W!==parseInt(d)||v&&Q!==parseInt(v))return!1}return!(st&&f.status!==st||ze&&f.billingType!==ze||b&&!((m=f.client)!=null&&m.toLowerCase().includes(b.toLowerCase()))&&!((k=f.osNumber)!=null&&k.includes(b))&&!((L=f.item)!=null&&L.toLowerCase().includes(b.toLowerCase())))}).map(f=>{const k=(f.statusDate?new Date(f.statusDate):new Date).toLocaleDateString("pt-BR");return l.jsx("div",{onClick:()=>tn(L=>L.includes(f.firestoreId)?L.filter($=>$!==f.firestoreId):[...L,f.firestoreId]),className:`p-3 rounded-xl border cursor-pointer transition-all hover:shadow-md select-none ${ve.includes(f.firestoreId)?"bg-blue-50 border-blue-200 ring-1 ring-blue-200":"bg-white border-slate-100 hover:bg-slate-50"}`,children:l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx("div",{className:`mt-1 w-4 h-4 rounded border flex items-center justify-center transition-colors ${ve.includes(f.firestoreId)?"bg-blue-600 border-blue-600":"border-slate-300 bg-white"}`,children:ve.includes(f.firestoreId)&&l.jsx($f,{size:12,className:"text-white"})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsxs("div",{className:"flex items-center justify-between mb-1",children:[l.jsx("span",{className:"font-black text-blue-700 text-xs",children:f.osNumber}),l.jsx("span",{className:`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase ${ve.includes(f.firestoreId)?"bg-blue-200 text-blue-800":"bg-slate-100 text-slate-500"}`,children:f.status})]}),l.jsx("div",{className:"font-bold text-slate-800 text-sm leading-tight truncate",children:f.client}),l.jsx("div",{className:"text-[10px] text-slate-400 mt-0.5 truncate",children:f.item}),l.jsxs("div",{className:"text-[9px] text-slate-500 mt-1 font-medium flex items-center gap-1",children:[l.jsx(zA,{size:10}),k]})]}),l.jsx("button",{onClick:L=>{L.stopPropagation(),Nn(f)},className:"p-2 -mr-1 mt-0.5 text-slate-400 hover:text-blue-600 hover:bg-blue-100 rounded-lg transition-colors",title:"Abrir Detalhes da OS",children:l.jsx(Eu,{size:18})})]})},f.firestoreId)}),pe.length===0&&l.jsx("div",{className:"text-center py-10 text-slate-400 text-xs",children:"Nenhuma OS encontrada."})]})]}),l.jsxs("div",{className:"lg:col-span-8 space-y-6 overflow-y-auto pr-1 pb-10",children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[l.jsxs("div",{className:"bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 space-y-4 relative overflow-hidden",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2 text-indigo-600 font-bold uppercase text-xs tracking-widest",children:[l.jsx(_h,{size:16})," Status Geral"]}),st&&l.jsxs("button",{onClick:()=>qn(null),className:"text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1",children:[l.jsx(Xe,{size:12})," Remover filtro"]})]}),l.jsx(uR,{data:we.statusChartData,colors:["#3b82f6","#6366f1","#8b5cf6","#ec4899","#f43f5e","#10b981","#f59e0b"],onClick:Gs}),l.jsx("div",{className:"space-y-2 mt-4",children:we.statusChartData.slice(0,4).map((f,m)=>{const k=f.date?new Date(f.date).toLocaleDateString("pt-BR"):"",L=st===f.label;return l.jsxs("div",{className:`flex justify-between text-xs text-slate-600 font-medium cursor-pointer p-2 rounded transition-colors ${L?"bg-blue-50 border border-blue-200":"hover:bg-slate-50"}`,onClick:()=>Gs(f.label),children:[l.jsxs("span",{className:"flex items-center gap-2",children:[l.jsx("div",{className:`w-2 h-2 rounded-full ${L?"ring-2 ring-blue-300":""}`,style:{backgroundColor:["#3b82f6","#6366f1","#8b5cf6","#ec4899","#f43f5e","#10b981","#f59e0b"][m]}}),f.label,k&&l.jsx("span",{className:"text-[9px] text-slate-400 font-normal",children:k}),L&&l.jsx("span",{className:"text-[9px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full",children:"Ativo"})]}),l.jsx("span",{children:f.value})]},m)})}),l.jsx("div",{className:"absolute top-4 right-4 text-slate-300",children:l.jsx(kv,{size:16})})]}),l.jsxs("div",{className:"bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 space-y-4 relative overflow-hidden",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2 text-emerald-600 font-bold uppercase text-xs tracking-widest",children:[l.jsx(VA,{size:16})," Tipo de Faturamento"]}),ze&&l.jsxs("button",{onClick:()=>Kr(null),className:"text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1",children:[l.jsx(Xe,{size:12})," Remover filtro"]})]}),l.jsx(Rv,{data:we.billingChartData,maxVal:Math.max(...we.billingChartData.map(f=>f.value),1),colorClass:"bg-emerald-500",onClick:Vi,showValues:A}),l.jsx("div",{className:"absolute top-4 right-4 text-slate-300",children:l.jsx(kv,{size:16})})]})]}),vr()&&l.jsxs("div",{className:"bg-blue-50 p-4 rounded-2xl border border-blue-100",children:[l.jsxs("div",{className:"flex items-center gap-2 text-blue-600 mb-2",children:[l.jsx(uo,{size:16}),l.jsx("span",{className:"text-xs font-bold uppercase",children:"Filtros Ativos"})]}),l.jsxs("div",{className:"flex flex-wrap gap-2",children:[st&&l.jsxs("span",{className:"text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold flex items-center gap-1",children:["Status: ",st,l.jsx("button",{onClick:()=>qn(null),className:"ml-1 hover:text-blue-900",children:l.jsx(Xe,{size:12})})]}),ze&&l.jsxs("span",{className:"text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-bold flex items-center gap-1",children:["Faturamento: ",ze,l.jsx("button",{onClick:()=>Kr(null),className:"ml-1 hover:text-emerald-900",children:l.jsx(Xe,{size:12})})]}),ve.length>0&&l.jsxs("span",{className:"text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-bold flex items-center gap-1",children:[ve.length," OS(s) selecionada(s)",l.jsx("button",{onClick:()=>tn([]),className:"ml-1 hover:text-purple-900",children:l.jsx(Xe,{size:12})})]}),(S||d||v)&&l.jsxs("span",{className:"text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-bold flex items-center gap-1",children:["Data: ",S&&`Dia ${S}`," ",d&&`Mês ${d}`," ",v&&`Ano ${v}`,l.jsx("button",{onClick:()=>{P(""),g(""),y("")},className:"ml-1 hover:text-amber-900",children:l.jsx(Xe,{size:12})})]}),b&&l.jsxs("span",{className:"text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-bold flex items-center gap-1",children:['Busca: "',b,'"',l.jsx("button",{onClick:()=>Ae(""),className:"ml-1 hover:text-slate-900",children:l.jsx(Xe,{size:12})})]})]}),l.jsxs("p",{className:"text-xs text-blue-700 mt-2",children:["Mostrando ",we.count," de ",pe.length," ordens de serviço"]})]})]})]})]}),j==="financial"&&In()&&l.jsxs("div",{className:"space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto h-full",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-4xl font-black text-slate-900 tracking-tighter",children:"Financeiro"}),l.jsx("p",{className:"text-slate-500 font-medium",children:"Análise de custos e receitas acumuladas"})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[l.jsxs("div",{className:"bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 space-y-2",children:[l.jsxs("div",{className:"flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-widest",children:[l.jsx(eR,{size:16})," Receita Bruta"]}),l.jsxs("div",{className:"text-3xl font-black text-slate-900",children:["R$ ",et(qt.totalRevenue)]}),l.jsx("div",{className:"text-xs text-slate-400",children:"Total cobrado em OS"})]}),l.jsxs("div",{className:"bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 space-y-2",children:[l.jsxs("div",{className:"flex items-center gap-2 text-red-500 font-bold uppercase text-xs tracking-widest",children:[l.jsx(DA,{size:16})," Custos Operacionais"]}),l.jsxs("div",{className:"text-3xl font-black text-slate-900",children:["R$ ",et(qt.totalCosts)]}),l.jsx("div",{className:"text-xs text-slate-400",children:"Peças + Fretes Terceiros"})]}),l.jsxs("div",{className:"bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 space-y-2",children:[l.jsxs("div",{className:"flex items-center gap-2 text-green-600 font-bold uppercase text-xs tracking-widest",children:[l.jsx(MA,{size:16})," Lucro Líquido"]}),l.jsxs("div",{className:"text-3xl font-black text-green-600",children:["R$ ",et(qt.totalProfit)]}),l.jsx("div",{className:"text-xs text-slate-400",children:"Receita - Custos"})]}),l.jsxs("div",{className:"bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 space-y-2",children:[l.jsxs("div",{className:"flex items-center gap-2 text-purple-600 font-bold uppercase text-xs tracking-widest",children:[l.jsx(ZA,{size:16})," Margem de Lucro"]}),l.jsxs("div",{className:"text-3xl font-black text-purple-600",children:[qt.margin.toLocaleString("pt-BR",{maximumFractionDigits:1}),"%"]}),l.jsx("div",{className:"text-xs text-slate-400",children:"Rentabilidade média"})]})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[l.jsxs("div",{className:"bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100",children:[l.jsxs("div",{className:"flex items-center gap-2 text-slate-800 font-bold uppercase text-xs tracking-widest mb-6",children:[l.jsx(bh,{size:16})," Top Clientes (Receita)"]}),qt.topClients.length>0?l.jsx(Rv,{data:qt.topClients,maxVal:qt.topClients[0].value,colorClass:"bg-blue-600",showValues:A}):l.jsx("div",{className:"text-center py-10 text-slate-400",children:"Sem dados financeiros"})]}),l.jsx("div",{className:"bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[2rem] shadow-xl text-white flex flex-col justify-center",children:l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{children:[l.jsx("div",{className:"text-xs font-bold text-slate-400 uppercase tracking-widest mb-1",children:"Status Financeiro"}),l.jsx("h3",{className:"text-2xl font-black",children:"Resumo Geral"})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"flex justify-between items-center border-b border-slate-700 pb-2",children:[l.jsx("span",{className:"text-sm font-medium text-slate-300",children:"Total de Ordens Analisadas"}),l.jsx("span",{className:"font-bold text-xl",children:pe.length})]}),l.jsxs("div",{className:"flex justify-between items-center border-b border-slate-700 pb-2",children:[l.jsx("span",{className:"text-sm font-medium text-slate-300",children:"Ticket Médio (Receita/OS)"}),l.jsxs("span",{className:"font-bold text-xl",children:["R$ ",et(pe.length>0?qt.totalRevenue/pe.length:0)]})]}),l.jsxs("div",{className:"flex justify-between items-center pb-2",children:[l.jsx("span",{className:"text-sm font-medium text-slate-300",children:"Lucro Médio por OS"}),l.jsxs("span",{className:"font-bold text-xl text-green-400",children:["R$ ",et(pe.length>0?qt.totalProfit/pe.length:0)]})]})]})]})})]})]}),j==="contracts"&&In()&&l.jsxs("div",{className:"space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto",children:[l.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-end gap-4",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-4xl font-black text-slate-900 tracking-tighter",children:"Contratos de Manutenção"}),l.jsx("p",{className:"text-slate-500 font-medium",children:"Gestão de vigências e escopo de atendimento"})]}),l.jsxs("div",{className:"flex gap-3",children:[l.jsxs("div",{className:"hidden md:flex bg-blue-50 text-blue-600 px-6 py-3 rounded-2xl font-bold text-sm border border-blue-100 items-center gap-2",children:[l.jsx(uo,{size:18}),"Contratos ativos e manuais"]}),l.jsxs("button",{onClick:Qs,className:"bg-blue-600 text-white px-8 py-3 rounded-2xl font-black flex items-center gap-2 shadow-xl shadow-blue-200 hover:bg-blue-700 transition-colors",children:[l.jsx(_r,{size:20})," Novo Contrato"]})]})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Bs.length===0?l.jsx("div",{className:"col-span-3 text-center py-20 text-slate-400",children:"Nenhum contrato encontrado. Adicione um manualmente ou crie uma OS."}):Bs.map((f,m)=>l.jsxs("div",{className:"bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden group hover:shadow-2xl transition-all",children:[l.jsxs("div",{className:"p-6 border-b border-slate-50 bg-slate-50/50 flex justify-between items-start",children:[l.jsxs("div",{children:[l.jsx("div",{className:"font-black text-lg text-slate-800 leading-tight mb-1",children:f.clientName}),l.jsx("div",{className:"text-xs text-slate-500 font-medium truncate max-w-[200px]",children:f.cnpj||"CNPJ não informado"})]}),l.jsx("div",{className:`p-2 rounded-lg ${f.isConfigured?"bg-green-100 text-green-600":"bg-amber-100 text-amber-600"}`,children:f.isConfigured?l.jsx($f,{size:20}):l.jsx(Vr,{size:20})})]}),l.jsxs("div",{className:"p-6 space-y-4",children:[l.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[l.jsxs("div",{children:[l.jsx("div",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Vigência Início"}),l.jsx("div",{className:"font-bold text-slate-700",children:f.startDate?new Date(f.startDate+"T00:00:00").toLocaleDateString():"---"})]}),l.jsxs("div",{children:[l.jsx("div",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Vigência Fim"}),l.jsx("div",{className:"font-bold text-slate-700",children:f.endDate?new Date(f.endDate+"T00:00:00").toLocaleDateString():"---"})]})]}),l.jsxs("div",{className:"bg-slate-50 p-3 rounded-xl border border-slate-100",children:[l.jsxs("div",{className:"flex justify-between items-center mb-1",children:[l.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Valor Mensal"}),l.jsxs("span",{className:"font-black text-slate-800",children:["R$ ",et(Ne(f.monthlyValue))]})]}),l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Valor Anual"}),l.jsxs("span",{className:"font-black text-blue-600",children:["R$ ",et(Ne(f.annualValue))]})]})]}),l.jsxs("div",{className:"space-y-1",children:[l.jsx("div",{className:"text-[10px] font-bold text-slate-400 uppercase mb-1",children:"Escopo Contratado"}),l.jsxs("div",{className:"flex flex-wrap gap-1",children:[f.coveredItems.videoSurgeryInstruments&&l.jsx("span",{className:"text-[9px] bg-indigo-50 text-indigo-600 px-2 py-1 rounded border border-indigo-100 font-bold",children:"Instr. Videocirurgia"}),f.coveredItems.openInstruments&&l.jsx("span",{className:"text-[9px] bg-purple-50 text-purple-600 px-2 py-1 rounded border border-purple-100 font-bold",children:"Instr. Abertos"}),f.coveredItems.videoSurgeryEquipment&&l.jsx("span",{className:"text-[9px] bg-blue-50 text-blue-600 px-2 py-1 rounded border border-blue-100 font-bold",children:"Equip. Vídeo"}),f.coveredItems.endoscopes&&l.jsx("span",{className:"text-[9px] bg-emerald-50 text-emerald-600 px-2 py-1 rounded border border-emerald-100 font-bold",children:"Endoscópios"}),!Object.values(f.coveredItems).some(Boolean)&&l.jsx("span",{className:"text-[9px] text-slate-400 italic",children:"Nenhum item selecionado"})]})]})]}),l.jsxs("button",{onClick:()=>Yl(f),className:"w-full py-4 bg-slate-50 hover:bg-slate-100 border-t border-slate-100 text-slate-600 font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2",children:[l.jsx(Ev,{size:16})," ",f.isConfigured?"Editar Contrato":"Configurar Contrato"]})]},m))})]}),j==="inventory"&&In()&&l.jsxs("div",{className:"p-20 text-center",children:[l.jsx(_v,{size:80,className:"mx-auto text-slate-200 mb-6"}),l.jsx("h3",{className:"text-2xl font-black",children:"Inventário em breve"})]}),j==="clients"&&In()&&l.jsxs("div",{className:"p-20 text-center",children:[l.jsx(bh,{size:80,className:"mx-auto text-slate-200 mb-6"}),l.jsx("h3",{className:"text-2xl font-black",children:"Módulo de Clientes em breve"})]}),j==="users"&&In()&&l.jsx(oR,{}),j==="about"&&l.jsxs("div",{className:"p-20 text-center",children:[l.jsx(uo,{size:80,className:"mx-auto text-slate-200 mb-6"}),l.jsx("h3",{className:"text-2xl font-black",children:"Sobre o Sistema"})]})]}),Vs&&l.jsx("div",{className:"fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4",children:l.jsxs("div",{className:"bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-6 animate-in zoom-in-95",ref:c,children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"bg-green-100 p-3 rounded-full text-green-600",children:l.jsx(Cv,{size:24})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-black text-slate-900",children:"Movimentar OSs Selecionadas"}),l.jsxs("p",{className:"text-slate-500 text-sm",children:["Alterar status de ",ve.length," OS(s)"]})]})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase",children:"Novo Status"}),l.jsx(pn,{value:Oi,onChange:f=>Wr(f.target.value),options:Qo,label:"Novo status"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase",children:"Data do Status"}),l.jsx("input",{type:"date",className:"w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none font-bold",value:Go,onChange:f=>Ed(f.target.value)})]})]}),l.jsxs("div",{className:"flex gap-3",children:[l.jsx("button",{onClick:()=>Ke(!1),className:"flex-1 py-4 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-colors",children:"Cancelar"}),l.jsxs("button",{onClick:Cd,className:"flex-1 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 shadow-xl shadow-green-200 transition-colors flex items-center justify-center gap-2",children:[l.jsx(xh,{size:20})," Atualizar"]})]})]})}),zr&&l.jsx("div",{className:"fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto",children:l.jsx("div",{className:"bg-white rounded-[2.5rem] w-full max-w-5xl my-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200",children:l.jsxs("form",{onSubmit:Kl,className:"p-6 md:p-10 space-y-10",children:[l.jsxs("div",{className:"flex justify-between items-center border-b pb-6",children:[l.jsxs("div",{children:[l.jsxs("h2",{className:"text-3xl font-black text-slate-900 tracking-tight",children:["OS ",D.osNumber]}),l.jsx("p",{className:"text-slate-500 text-sm font-medium",children:"Relatório de Atendimento Técnico"})]}),l.jsx("button",{type:"button",onClick:()=>$r(!1),className:"p-3 hover:bg-slate-100 rounded-full text-slate-400 transition-colors",children:l.jsx(Xe,{})})]}),l.jsxs("div",{className:"space-y-10",children:[l.jsxs("div",{className:"bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-8",children:[l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-widest",children:[l.jsx(Oc,{size:16})," Cliente"]}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{placeholder:"Nome da Empresa",className:`w-full p-4 bg-white border ${Mt.client?"border-red-500":"border-slate-200"} rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold`,value:D.client,onChange:f=>{ee({...D,client:f.target.value}),_e(!0),Mt.client&&fn(m=>({...m,client:!1}))},onFocus:()=>_e(!0),onBlur:()=>setTimeout(()=>_e(!1),200)}),je&&D.client&&l.jsx("div",{className:"absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-60 overflow-y-auto animate-in slide-in-from-top-2",children:ea.filter(f=>f.client.toLowerCase().includes(D.client.toLowerCase())).slice(0,5).map((f,m)=>l.jsxs("div",{className:"p-3 hover:bg-blue-50 cursor-pointer border-b border-slate-50 flex flex-col",onMouseDown:k=>{k.preventDefault(),Hs(f)},children:[l.jsx("span",{className:"font-bold text-slate-800 text-sm",children:f.client}),l.jsx("span",{className:"text-[10px] text-slate-400",children:f.cnpj||"Sem CNPJ"})]},m))}),Mt.client&&l.jsx("p",{className:"text-red-500 text-xs mt-1 ml-4",children:"Cliente é obrigatório"})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsx("input",{placeholder:"CNPJ",className:"w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold",value:D.cnpj,onChange:f=>ee({...D,cnpj:f.target.value})}),l.jsx("input",{placeholder:"Responsável",className:"w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold",value:D.contactPerson,onChange:f=>ee({...D,contactPerson:f.target.value})})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsx("input",{placeholder:"E-mail",className:"w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold",value:D.email,onChange:f=>ee({...D,email:f.target.value})}),l.jsxs("div",{className:"space-y-1",children:[l.jsxs("label",{className:"text-[10px] font-black text-slate-400 uppercase ml-2 flex justify-between",children:["Endereço",D.address&&l.jsxs("a",{href:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(D.address)}`,target:"_blank",className:"text-blue-600 hover:underline flex items-center gap-1",children:[l.jsx(Eu,{size:10})," Ver no Maps"]})]}),l.jsx("input",{placeholder:"Endereço Completo",className:"w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold",value:D.address,onChange:f=>ee({...D,address:f.target.value})})]})]})]}),l.jsx("hr",{className:"border-slate-200/50"}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"flex items-center gap-2 text-indigo-600 font-bold uppercase text-xs tracking-widest",children:[l.jsx(UA,{size:16})," Atendimento"]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsx(pn,{value:D.billingType,onChange:f=>ee({...D,billingType:f.target.value,maintenanceVisit:""}),options:Ml,variant:"default",label:"Tipo de atendimento"}),l.jsx(hR,{value:D.maintenanceVisit,onChange:f=>ee({...D,maintenanceVisit:f.target.value}),billingType:D.billingType})]})]})]}),l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"flex items-center gap-2 text-orange-600 font-bold uppercase text-xs tracking-widest",children:[l.jsx(QA,{size:16})," Equipamento"]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[l.jsxs("div",{className:"relative",children:[l.jsx("input",{placeholder:"Item / Nome",className:`w-full p-4 bg-slate-50 border ${Mt.item?"border-red-500":"border-slate-200"} rounded-2xl outline-none font-bold`,value:D.item,onChange:f=>{ee({...D,item:f.target.value}),Ls(!0),Mt.item&&fn(m=>({...m,item:!1}))},onFocus:()=>Ls(!0),onBlur:()=>setTimeout(()=>Ls(!1),200)}),En&&zl.length>0&&l.jsxs("div",{className:"absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-48 overflow-y-auto animate-in slide-in-from-top-2",children:[l.jsx("div",{className:"p-2 bg-slate-50 text-[10px] uppercase font-bold text-slate-400",children:"Sugestões de Itens"}),zl.filter(f=>f.toLowerCase().includes(D.item.toLowerCase())).slice(0,5).map((f,m)=>l.jsx("div",{className:"p-3 hover:bg-orange-50 cursor-pointer border-b border-slate-50 text-sm text-slate-700 font-bold",onMouseDown:k=>{k.preventDefault(),ee({...D,item:f}),Ls(!1)},children:f},m))]}),Mt.item&&l.jsx("p",{className:"text-red-500 text-xs mt-1 ml-4",children:"Item/Equipamento é obrigatório"})]}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{placeholder:"Marca",className:"w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-bold",value:D.manufacturer,onChange:f=>{ee({...D,manufacturer:f.target.value}),Un(!0)},onFocus:()=>Un(!0),onBlur:()=>setTimeout(()=>Un(!1),200)}),bd&&ra.length>0&&l.jsxs("div",{className:"absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-48 overflow-y-auto animate-in slide-in-from-top-2",children:[l.jsx("div",{className:"p-2 bg-slate-50 text-[10px] uppercase font-bold text-slate-400",children:"Sugestões de Marcas"}),ra.filter(f=>f.toLowerCase().includes(D.manufacturer.toLowerCase())).slice(0,5).map((f,m)=>l.jsx("div",{className:"p-3 hover:bg-orange-50 cursor-pointer border-b border-slate-50 text-sm text-slate-700 font-bold",onMouseDown:k=>{k.preventDefault(),ee({...D,manufacturer:f}),Un(!1)},children:f},m))]})]}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{placeholder:"Modelo",className:"w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-bold",value:D.model,onChange:f=>{ee({...D,model:f.target.value}),ur(!0)},onFocus:()=>ur(!0),onBlur:()=>setTimeout(()=>ur(!1),200)}),Ni&&sa.length>0&&l.jsxs("div",{className:"absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-48 overflow-y-auto animate-in slide-in-from-top-2",children:[l.jsx("div",{className:"p-2 bg-slate-50 text-[10px] uppercase font-bold text-slate-400",children:"Sugestões de Modelos"}),sa.filter(f=>f.toLowerCase().includes(D.model.toLowerCase())).slice(0,5).map((f,m)=>l.jsx("div",{className:"p-3 hover:bg-orange-50 cursor-pointer border-b border-slate-50 text-sm text-slate-700 font-bold",onMouseDown:k=>{k.preventDefault(),ee({...D,model:f}),ur(!1)},children:f},m))]})]}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{placeholder:"Número de Série",className:"w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-bold font-mono",value:D.serial,onChange:f=>{ee({...D,serial:f.target.value}),cr(!0)},onFocus:()=>cr(!0),onBlur:()=>setTimeout(()=>cr(!1),200)}),Ho&&$l.length>0&&l.jsxs("div",{className:"absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-48 overflow-y-auto animate-in slide-in-from-top-2",children:[l.jsx("div",{className:"p-2 bg-slate-50 text-[10px] uppercase font-bold text-slate-400",children:"Sugestões de NS"}),$l.filter(f=>f.toLowerCase().includes(D.serial.toLowerCase())).slice(0,5).map((f,m)=>l.jsx("div",{className:"p-3 hover:bg-orange-50 cursor-pointer border-b border-slate-50 text-sm text-slate-700 font-mono font-bold",onMouseDown:k=>{k.preventDefault(),ee({...D,serial:f}),cr(!1)},children:f},m))]})]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-xs font-bold text-slate-500 uppercase",children:"Observações (opcional)"}),l.jsx("textarea",{placeholder:"Observações adicionais sobre o equipamento, como estado de conservação, acessórios, etc...",className:"w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-bold resize-none",value:D.equipmentObservation||"",onChange:f=>ee({...D,equipmentObservation:f.target.value}),rows:3})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-xs font-bold text-slate-500 uppercase",children:"Quantidade"}),l.jsx("div",{className:"flex items-center",children:l.jsx("input",{type:"number",min:"1",placeholder:"1",className:"w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-bold text-center",value:D.quantity||"1",onChange:f=>ee({...D,quantity:f.target.value})})}),l.jsx("p",{className:"text-[10px] text-slate-400 mt-1 ml-2",children:"Quantidade do item/equipamento"})]})]})]}),l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"flex items-center gap-2 text-emerald-600 font-bold uppercase text-xs tracking-widest",children:[l.jsx(tR,{size:16})," Laudo Técnico"]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[l.jsxs("div",{className:"space-y-4",children:[l.jsx("label",{className:"text-xs font-bold text-slate-500 uppercase",children:"Defeitos Encontrados"}),l.jsxs("div",{className:"bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-3",children:[l.jsxs("div",{className:"relative flex gap-2",children:[l.jsx("input",{placeholder:"Descreva um defeito...",className:"flex-1 p-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-emerald-500/20",value:Bn,onChange:f=>{qr(f.target.value),It(!0)},onFocus:()=>It(!0),onBlur:()=>setTimeout(()=>It(!1),200),onKeyDown:f=>{f.key==="Enter"&&(f.preventDefault(),Bl())}}),l.jsx("button",{type:"button",onClick:Bl,className:"bg-emerald-600 text-white p-3 rounded-xl shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-colors",children:l.jsx(_r,{size:20})}),Ue&&ta.length>0&&l.jsxs("div",{className:"absolute top-full left-0 right-14 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-48 overflow-y-auto animate-in slide-in-from-top-2",children:[l.jsx("div",{className:"p-2 bg-slate-50 text-[10px] uppercase font-bold text-slate-400",children:"Sugestões"}),ta.filter(f=>f.toLowerCase().includes(Bn.toLowerCase())).slice(0,5).map((f,m)=>l.jsx("div",{className:"p-3 hover:bg-emerald-50 cursor-pointer border-b border-slate-50 text-sm text-slate-700",onMouseDown:k=>{k.preventDefault(),qr(f),It(!1)},children:f.length>50?f.substring(0,50)+"...":f},m))]})]}),l.jsxs("div",{className:"space-y-2 max-h-60 overflow-y-auto pr-1",children:[D.defectsList&&D.defectsList.map((f,m)=>l.jsxs("div",{className:"flex justify-between items-start p-3 bg-white border rounded-xl shadow-sm animate-in slide-in-from-left-2",children:[l.jsx("div",{className:"text-sm font-medium text-slate-700 leading-snug",children:f}),l.jsx("button",{type:"button",onClick:()=>ql(m),className:"text-slate-300 hover:text-red-500 transition-colors p-1",children:l.jsx(Xe,{size:16})})]},m)),(!D.defectsList||D.defectsList.length===0)&&l.jsx("div",{className:"text-center text-xs text-slate-400 italic py-2",children:"Nenhum defeito listado."})]})]})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsx(pn,{value:D.solutionType,onChange:f=>ee({...D,solutionType:f.target.value}),options:Id,variant:"light",label:"Tipo de solução"}),D.solutionType==="Preenchimento manual"&&l.jsxs("div",{className:"space-y-4 animate-in fade-in",children:[l.jsx("div",{className:"bg-indigo-50 p-4 rounded-2xl border border-indigo-100 space-y-3",children:l.jsxs("div",{className:"relative flex gap-2",children:[l.jsx("input",{placeholder:"Descreva uma etapa da solução...",className:"flex-1 p-3 bg-white border border-indigo-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500/20",value:Us,onChange:f=>{Tn(f.target.value),Ye(!0)},onFocus:()=>Ye(!0),onBlur:()=>setTimeout(()=>Ye(!1),200),onKeyDown:f=>{f.key==="Enter"&&(f.preventDefault(),Hl())}}),l.jsx("button",{type:"button",onClick:Hl,className:"bg-indigo-600 text-white p-3 rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-colors",children:l.jsx(_r,{size:20})}),dn&&na.length>0&&l.jsxs("div",{className:"absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-48 overflow-y-auto animate-in slide-in-from-top-2",children:[l.jsx("div",{className:"p-2 bg-slate-50 text-[10px] uppercase font-bold text-slate-400",children:"Sugestões"}),na.filter(f=>f.toLowerCase().includes(Fs.toLowerCase())).slice(0,5).map((f,m)=>l.jsx("div",{className:"p-3 hover:bg-green-50 cursor-pointer border-b border-slate-50 text-sm text-slate-700",onMouseDown:k=>{k.preventDefault(),pr(f),Ye(!1)},children:f},m))]})]})}),l.jsxs("div",{className:"space-y-2 max-h-60 overflow-y-auto pr-1",children:[D.manualSolutionsList&&D.manualSolutionsList.map((f,m)=>l.jsxs("div",{className:"flex justify-between items-start p-3 bg-white border rounded-xl shadow-sm animate-in slide-in-from-left-2",children:[l.jsx("div",{className:"text-sm font-medium text-slate-700 leading-snug",children:f}),l.jsx("button",{type:"button",onClick:()=>Nd(m),className:"text-slate-300 hover:text-red-500 transition-colors p-1",children:l.jsx(Xe,{size:16})})]},m)),(!D.manualSolutionsList||D.manualSolutionsList.length===0)&&l.jsx("div",{className:"text-center text-xs text-slate-400 italic py-2",children:"Nenhuma solução listada."})]})]}),D.solutionType==="Manual com custos detalhados"&&l.jsxs("div",{className:"space-y-4 animate-in fade-in",children:[l.jsxs("div",{className:"bg-green-50 p-4 rounded-2xl border border-green-100 space-y-3",children:[l.jsxs("div",{className:"relative",children:[l.jsx("input",{placeholder:"Item, Peça ou Serviço",className:"w-full p-2 bg-white border border-green-200 rounded-lg text-sm",value:Fs,onChange:f=>{pr(f.target.value),Ye(!0)},onFocus:()=>Ye(!0),onBlur:()=>setTimeout(()=>Ye(!1),200)}),dn&&Ul.length>0&&l.jsxs("div",{className:"absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-48 overflow-y-auto animate-in slide-in-from-top-2",children:[l.jsx("div",{className:"p-2 bg-slate-50 text-[10px] uppercase font-bold text-slate-400",children:"Sugestões"}),Ul.filter(f=>f.toLowerCase().includes(Fs.toLowerCase())).slice(0,5).map((f,m)=>l.jsx("div",{className:"p-3 hover:bg-green-50 cursor-pointer border-b border-slate-50 text-sm text-slate-700",onMouseDown:k=>{k.preventDefault(),pr(f),Ye(!1)},children:f},m))]})]}),l.jsxs("div",{className:"flex gap-2",children:[l.jsx("input",{placeholder:"Valor R$ 0,00",className:"flex-1 p-2 bg-white border border-green-200 rounded-lg text-sm",value:Wo,onChange:f=>ji(f.target.value)}),l.jsx("button",{type:"button",onClick:Ws,className:"bg-green-600 text-white p-2.5 rounded-lg shadow-lg shadow-green-200",children:l.jsx(_r,{size:20})})]})]}),l.jsx("div",{className:"space-y-2 max-h-40 overflow-y-auto pr-1",children:D.solutionsList.map(f=>l.jsxs("div",{className:"flex justify-between items-center p-3 bg-white border rounded-xl shadow-sm animate-in slide-in-from-right-2",children:[l.jsxs("div",{children:[l.jsx("div",{className:"text-xs font-bold text-slate-800",children:f.text}),l.jsxs("div",{className:"text-[10px] text-green-600 font-black",children:["R$ ",f.cost]})]}),l.jsx("button",{type:"button",onClick:()=>Hn(f.id),children:l.jsx(Xe,{size:16,className:"text-red-300 hover:text-red-500"})})]},f.id))}),Mt.solutionsList&&D.solutionsList.length===0&&l.jsx("p",{className:"text-red-500 text-xs mt-1 ml-4",children:"Adicione pelo menos um item na lista de soluções"})]}),D.solutionType==="Conserto em bancada"&&l.jsxs("div",{className:"space-y-4 animate-in fade-in",children:[l.jsx("div",{className:"bg-amber-50 p-4 rounded-2xl border border-amber-100 space-y-3",children:l.jsxs("div",{className:"relative flex gap-2",children:[l.jsx("input",{placeholder:"Descreva uma etapa do conserto em bancada...",className:"flex-1 p-3 bg-white border border-amber-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-amber-500/20",value:Di,onChange:f=>Hr(f.target.value),onKeyDown:f=>{f.key==="Enter"&&(f.preventDefault(),Wl())}}),l.jsx("button",{type:"button",onClick:Wl,className:"bg-amber-600 text-white p-3 rounded-xl shadow-lg shadow-amber-200 hover:bg-amber-700 transition-colors",children:l.jsx(_r,{size:20})})]})}),l.jsxs("div",{className:"space-y-2 max-h-60 overflow-y-auto pr-1",children:[D.benchRepairList&&D.benchRepairList.map((f,m)=>l.jsxs("div",{className:"flex justify-between items-start p-3 bg-white border rounded-xl shadow-sm animate-in slide-in-from-left-2",children:[l.jsx("div",{className:"text-sm font-medium text-slate-700 leading-snug",children:f}),l.jsx("button",{type:"button",onClick:()=>Sd(m),className:"text-slate-300 hover:text-red-500 transition-colors p-1",children:l.jsx(Xe,{size:16})})]},m)),(!D.benchRepairList||D.benchRepairList.length===0)&&l.jsx("div",{className:"text-center text-xs text-slate-400 italic py-2",children:"Nenhuma etapa de conserto listada."})]}),Mt.benchRepairList&&(!D.benchRepairList||D.benchRepairList.length===0)&&l.jsx("p",{className:"text-red-500 text-xs mt-1 ml-4",children:"Descreva as etapas do conserto em bancada"})]}),D.solutionType==="Não passível de conserto, substituir por novo equipamento / material"&&l.jsxs("div",{children:[l.jsx("textarea",{placeholder:"Detalhe a substituição por novo equipamento / material...",className:`w-full p-4 ${Mt.notRepairableDetail?"bg-red-50 border-red-500":"bg-red-50 border-red-100"} text-red-900 border rounded-2xl outline-none font-bold`,value:D.notRepairableDetail,onChange:f=>{ee({...D,notRepairableDetail:f.target.value}),Mt.notRepairableDetail&&fn(m=>({...m,notRepairableDetail:!1}))},onBlur:()=>Zo("notRepairableDetail"),rows:3}),Mt.notRepairableDetail&&l.jsx("p",{className:"text-red-500 text-xs mt-1 ml-4",children:"Detalhe a substituição por novo equipamento/material"})]})]})]})]}),l.jsxs("div",{className:"bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-6 transition-all duration-300",children:[l.jsxs("div",{className:"flex items-center justify-between cursor-pointer hover:opacity-80 transition-opacity",onClick:()=>Ai(!Ci),children:[l.jsxs("div",{className:"flex items-center gap-2 text-red-600 font-bold uppercase text-xs tracking-widest",children:[l.jsx(Bf,{size:16})," Financeiro & Custos (Controle Interno)"]}),Ci?l.jsx(f1,{size:20,className:"text-slate-400"}):l.jsx(h1,{size:20,className:"text-slate-400"})]}),Ci&&l.jsxs("div",{className:"space-y-6 animate-in slide-in-from-top-4 fade-in duration-300",children:[l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-500 uppercase",children:"Nome do Terceiro / Transportadora"}),l.jsx("input",{placeholder:"Ex: JadLog / Lab Especializado",className:"w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none font-bold",value:D.costThirdPartyName,onChange:f=>ee({...D,costThirdPartyName:f.target.value})})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-500 uppercase",children:"Frete Terceiro (R$)"}),l.jsx("input",{placeholder:"0,00",className:"w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none font-bold",value:D.costThirdPartyShipping,onChange:f=>ee({...D,costThirdPartyShipping:f.target.value})})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-500 uppercase",children:"Peças/Serviços (R$)"}),l.jsx("input",{placeholder:"0,00",className:"w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none font-bold",value:D.costParts,onChange:f=>ee({...D,costParts:f.target.value})})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-500 uppercase",children:"Frete Cliente (R$)"}),l.jsx("input",{placeholder:"0,00",className:"w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none font-bold",value:D.costClientShipping,onChange:f=>ee({...D,costClientShipping:f.target.value})})]})]}),l.jsx("hr",{className:"border-slate-200/50"}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-start",children:[l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-blue-500 uppercase",children:"Valor Sugerido (+60%)"}),l.jsxs("div",{className:"w-full p-4 bg-blue-50/50 border border-blue-100 rounded-2xl font-black text-blue-600 cursor-not-allowed text-sm",children:["R$ ",et(Vl)]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-purple-600 uppercase",children:"Soma Itens Laudo"}),l.jsxs("div",{className:"w-full p-4 bg-purple-50/50 border border-purple-100 rounded-2xl font-black text-purple-700 cursor-not-allowed text-sm",children:["R$ ",et(Fl)]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-green-600 uppercase",children:"Valor Cobrado (R$)"}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{placeholder:"0,00",className:"w-full p-4 bg-green-50 border border-green-100 rounded-2xl outline-none font-black text-green-700 text-sm",value:D.chargedAmount,onChange:f=>ee({...D,chargedAmount:f.target.value})}),D.discount5Days&&l.jsx("div",{className:"absolute -right-2 -top-2 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-full animate-pulse",children:"5% OFF"})]}),D.discount5Days&&D.finalChargedAmount>0&&l.jsxs("div",{className:"bg-green-100 p-3 rounded-xl border border-green-200",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[10px] font-bold text-green-800 uppercase",children:"Valor Final com Desconto"}),l.jsxs("span",{className:"text-lg font-black text-green-900",children:["R$ ",et(D.finalChargedAmount)]})]}),l.jsx("div",{className:"text-[9px] text-green-600 mt-1",children:"Desconto de 5% aplicado para pagamento em 5 dias"})]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-500 uppercase",children:"Condição Pagamento"}),l.jsx(pn,{value:D.paymentCondition,onChange:f=>ee({...D,paymentCondition:f.target.value,installments:""}),options:["À vista","Boleto","Cartão"],label:"Condição de pagamento"})]}),(D.paymentCondition==="Boleto"||D.paymentCondition==="Cartão")&&l.jsxs("div",{className:"space-y-2 animate-in fade-in",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Parcelas"}),D.paymentCondition==="Boleto"?l.jsxs("div",{className:"space-y-3",children:[l.jsx(pn,{value:D.installments,onChange:f=>{const m=f.target.value==="5 dias (5% de desconto)";ee({...D,installments:f.target.value,discount5Days:m})},options:$s.Boleto,label:"Parcelas boleto"}),D.discount5Days&&D.chargedAmount&&l.jsxs("div",{className:"bg-green-50 p-4 rounded-xl border border-green-100 space-y-1",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[10px] font-bold text-green-700 uppercase",children:"Desconto de 5%"}),l.jsxs("span",{className:"text-sm font-black text-green-600",children:["R$ ",et(D.discountAmount)]})]}),l.jsxs("div",{className:"flex justify-between items-center pt-1 border-t border-green-100",children:[l.jsx("span",{className:"text-[10px] font-bold text-slate-600",children:"Valor Final"}),l.jsxs("span",{className:"text-lg font-black text-slate-800",children:["R$ ",et(D.finalChargedAmount)]})]})]})]}):l.jsx(pn,{value:D.installments,onChange:f=>ee({...D,installments:f.target.value}),options:$s.Cartão,label:"Parcelas cartão"})]})]}),l.jsxs("div",{className:`p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4 transition-colors ${Qr>=0?"bg-green-100/50 border border-green-200":"bg-red-100/50 border border-red-200"}`,children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:`p-3 rounded-full ${Qr>=0?"bg-green-200 text-green-700":"bg-red-200 text-red-700"}`,children:l.jsx(FA,{size:24})}),l.jsxs("div",{children:[l.jsx("div",{className:"text-[10px] font-black uppercase text-slate-500",children:"Resultado Operacional"}),l.jsx("div",{className:`text-2xl font-black ${Qr>=0?"text-green-700":"text-red-700"}`,children:Qr>=0?"LUCRO":"PREJUÍZO"})]})]}),l.jsxs("div",{className:"flex gap-8 text-right",children:[l.jsxs("div",{children:[l.jsx("div",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Custo Total"}),l.jsxs("div",{className:"font-bold text-slate-700",children:["R$ ",et(Xo)]})]}),l.jsxs("div",{children:[l.jsx("div",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Resultado"}),l.jsxs("div",{className:`text-xl font-black ${Qr>=0?"text-green-600":"text-red-600"}`,children:["R$ ",et(Qr)]})]})]})]})]})]}),l.jsxs("div",{className:"space-y-6 pt-6 border-t",children:[l.jsxs("div",{className:"flex items-center gap-2 text-slate-900 font-bold uppercase text-xs tracking-widest",children:[l.jsx(Cv,{size:16})," Logística e Status Final"]}),l.jsxs("div",{className:"bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-6",children:[l.jsx("div",{className:"w-full overflow-x-auto py-2",children:l.jsxs("div",{className:"flex items-center justify-between min-w-[600px] relative px-4",children:[l.jsx("div",{className:"absolute left-4 right-4 top-1/2 -translate-y-1/2 h-0.5 bg-slate-200 z-0"}),l.jsx("div",{className:"absolute left-4 top-1/2 -translate-y-1/2 h-0.5 bg-blue-600 z-0 transition-all duration-500 ease-in-out",style:{width:`${kd}%`}}),Gr.map((f,m)=>{const k=m<=Mi,L=m===Mi,$=Yr(f.value);return l.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-3 cursor-pointer group min-w-[80px]",onClick:()=>ee({...D,status:f.value,statusDate:new Date().toISOString().split("T")[0]}),children:[l.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-sm ${k?"bg-blue-600 border-blue-600 text-white scale-110":"bg-white border-slate-300 text-slate-300 group-hover:border-blue-300"}`,children:k?l.jsx(Ki,{size:14,strokeWidth:4}):l.jsx("div",{className:"w-2 h-2 rounded-full bg-slate-200"})}),l.jsxs("div",{className:"text-center flex flex-col items-center",children:[l.jsx("span",{className:`text-[10px] font-bold uppercase tracking-wide transition-colors ${L?"text-blue-700":"text-slate-400"}`,children:f.label}),l.jsx("span",{className:`text-[10px] font-medium px-1.5 py-0.5 rounded mt-1 whitespace-nowrap ${$?"bg-white text-slate-600 shadow-sm border border-slate-200":"text-slate-300"}`,children:$||"---"})]})]},m)})]})}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 items-start pt-4 border-t border-slate-200/50",children:[l.jsxs("div",{className:"space-y-1",children:[l.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase",children:"Status Geral (Seleção Manual)"}),l.jsx(pn,{value:D.status,onChange:f=>{ee({...D,status:f.target.value,statusDate:new Date().toISOString().split("T")[0]})},options:Qo,label:"Status geral"})]}),l.jsxs("div",{className:"space-y-1",children:[l.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase",children:"Data do Status Atual"}),l.jsx("input",{type:"date",className:"w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none font-bold",value:D.statusDate,onChange:f=>ee({...D,statusDate:f.target.value})})]})]}),(D.status==="Em orçamento"||D.status==="Aguardando aprovação do orçamento")&&l.jsxs("div",{className:"space-y-1 animate-in fade-in",children:[l.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase",children:"Prazo de Entrega"}),l.jsxs("div",{className:"flex items-center",children:[l.jsx("input",{type:"number",placeholder:"Ex: 7",className:"w-20 p-4 border border-slate-200 rounded-l-2xl outline-none font-bold text-center",value:D.deliveryDeadline,onChange:f=>ee({...D,deliveryDeadline:f.target.value})}),l.jsx("div",{className:"p-4 bg-slate-100 border border-slate-200 rounded-r-2xl font-bold text-slate-600",children:"dias úteis"})]}),l.jsx("p",{className:"text-[10px] text-slate-400 mt-1 ml-4",children:"Esta informação será exibida na proposta de orçamento"})]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[D.status!=="Recebido"&&l.jsxs("div",{className:"space-y-1 animate-in fade-in",children:[l.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase",children:"Enviado para Terceiro?"}),l.jsx(pn,{value:D.sentToThirdParty,onChange:f=>ee({...D,sentToThirdParty:f.target.value}),options:["Não","Sim"],className:"bg-slate-100 border-none",label:"Enviado para terceiro"})]}),D.status==="Em rota de entrega"&&l.jsxs("div",{className:"space-y-1 animate-in zoom-in-95",children:[l.jsx("label",{className:"text-[10px] font-black text-blue-600 uppercase",children:"Rastreamento"}),l.jsx("input",{placeholder:"Código de Rastreio",className:"w-full p-4 bg-blue-50 border border-blue-100 rounded-2xl outline-none font-bold",value:D.trackingCode,onChange:f=>ee({...D,trackingCode:f.target.value})})]})]}),D.sentToThirdParty==="Sim"&&D.status!=="Recebido"&&l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-slate-100 rounded-3xl border border-slate-200 animate-in slide-in-from-top-4",children:[l.jsx("input",{placeholder:"Empresa Terceira",className:"w-full p-3 bg-white border rounded-xl text-sm",value:D.thirdPartyInfo,onChange:f=>ee({...D,thirdPartyInfo:f.target.value})}),l.jsx("input",{placeholder:"Rastreio Terceiro",className:"w-full p-3 bg-white border rounded-xl text-sm",value:D.thirdPartyTracking,onChange:f=>ee({...D,thirdPartyTracking:f.target.value})}),l.jsx("input",{type:"date",className:"w-full p-3 bg-white border rounded-xl text-sm",value:D.thirdPartyDate,onChange:f=>ee({...D,thirdPartyDate:f.target.value})})]})]})]}),l.jsxs("div",{className:"flex flex-col md:flex-row gap-4 pt-10 border-t",children:[l.jsxs("div",{className:"flex gap-2",children:[l.jsx("button",{type:"button",onClick:()=>$r(!1),className:"px-6 py-5 bg-slate-100 text-slate-600 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-slate-200 transition-colors",children:"Cancelar"}),hn&&l.jsxs(l.Fragment,{children:[l.jsx("button",{type:"button",onClick:()=>oa("client"),className:"p-5 bg-blue-50 text-blue-600 rounded-2xl hover:bg-blue-100 transition-colors border border-blue-100",title:"Imprimir Relatório do Cliente",children:l.jsx(wh,{size:20})}),(e==null?void 0:e.role)!=="client"&&l.jsx("button",{type:"button",onClick:()=>oa("internal"),className:"p-5 bg-slate-50 text-slate-600 rounded-2xl hover:bg-slate-100 transition-colors border border-slate-200",title:"Imprimir Relatório Interno",children:l.jsx(Tu,{size:20})})]})]}),l.jsxs("div",{className:"flex-1 flex flex-col md:flex-row gap-4",children:[l.jsxs("button",{type:"button",onClick:Gl,disabled:fr,className:"flex-1 bg-indigo-50 text-indigo-700 border-2 border-indigo-100 p-5 rounded-2xl font-black text-xs hover:bg-indigo-100 transition-all flex items-center justify-center gap-3",children:[fr?l.jsx(Gi,{className:"animate-spin",size:18}):l.jsx(p1,{size:18})," NOVA OS COM MESMO CLIENTE"]}),l.jsxs("button",{type:"submit",disabled:fr,className:"flex-1 bg-blue-600 text-white p-5 rounded-2xl font-black text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3",children:[fr?l.jsx(Gi,{className:"animate-spin",size:20}):l.jsx(qf,{size:20})," SALVAR OS"]})]})]})]})})}),Ms&&l.jsx("div",{className:"fixed inset-0 z-[60]",role:"dialog","aria-modal":"true","aria-labelledby":"contract-modal-title",onClick:f=>{f.target===f.currentTarget&&zn(!1)},children:l.jsx("div",{className:"absolute inset-0 bg-slate-900/60 backdrop-blur-md overflow-y-auto",children:l.jsx("div",{className:"min-h-full flex items-start justify-center p-4 py-8",children:l.jsx("div",{className:"bg-white rounded-[2.5rem] w-full max-w-4xl shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 my-8",ref:o,tabIndex:-1,onKeyDown:f=>{f.key==="Escape"&&zn(!1)},children:l.jsxs("form",{onSubmit:ia,className:"p-8 space-y-8",children:[l.jsxs("div",{className:"flex justify-between items-center border-b pb-6",children:[l.jsxs("div",{children:[l.jsx("h2",{id:"contract-modal-title",className:"text-2xl font-black text-slate-900 tracking-tight",children:dr?"Novo Contrato":"Configurar Contrato"}),l.jsx("p",{className:"text-slate-500 text-sm font-medium",children:dr?"Preencha os dados do cliente e contrato":fe.clientName})]}),l.jsx("button",{type:"button",onClick:()=>zn(!1),className:"p-2 hover:bg-slate-100 rounded-full text-slate-400",children:l.jsx(Xe,{size:20})})]}),l.jsxs("div",{className:"space-y-8",children:[l.jsxs("div",{className:"bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4",children:[l.jsxs("div",{className:"flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-widest mb-2",children:[l.jsx(Oc,{size:16})," Dados do Cliente"]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Nome do Cliente *"}),l.jsx("input",{className:`w-full p-3 border rounded-xl font-bold ${dr?"bg-white border-slate-200":"bg-slate-100 border-slate-200 cursor-not-allowed"}`,value:fe.clientName,onChange:f=>dr&&Ee({...fe,clientName:f.target.value}),placeholder:"Nome da Empresa / Hospital",readOnly:!dr,required:!0})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"CNPJ"}),l.jsx("input",{className:"w-full p-3 bg-white border border-slate-200 rounded-xl font-medium text-sm",value:fe.cnpj,onChange:f=>Ee({...fe,cnpj:f.target.value}),placeholder:"00.000.000/0000-00"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Contato"}),l.jsx("input",{className:"w-full p-3 bg-white border border-slate-200 rounded-xl font-medium text-sm",value:fe.contactPerson,onChange:f=>Ee({...fe,contactPerson:f.target.value}),placeholder:"Nome do Responsável"})]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"E-mail"}),l.jsx("input",{className:"w-full p-3 bg-white border border-slate-200 rounded-xl font-medium text-sm",value:fe.email,onChange:f=>Ee({...fe,email:f.target.value}),placeholder:"financeiro@hospital.com"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Endereço"}),l.jsx("input",{className:"w-full p-3 bg-white border border-slate-200 rounded-xl font-medium text-sm",value:fe.address,onChange:f=>Ee({...fe,address:f.target.value}),placeholder:"Rua, Número, Cidade - UF"})]})]})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Vigência (Início - Fim)"}),l.jsxs("div",{className:"flex gap-2",children:[l.jsx("input",{type:"date",className:"w-full p-3 bg-white border border-slate-200 rounded-xl font-bold text-sm",value:fe.startDate,onChange:f=>Ee({...fe,startDate:f.target.value}),required:!0}),l.jsx("input",{type:"date",className:"w-full p-3 bg-white border border-slate-200 rounded-xl font-bold text-sm",value:fe.endDate,onChange:f=>Ee({...fe,endDate:f.target.value}),required:!0})]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Valor Mensal (R$)"}),l.jsx("input",{className:"w-full p-3 bg-white border border-slate-200 rounded-xl font-black text-slate-800",value:fe.monthlyValue,onChange:f=>{const m=f.target.value,k=Ne(m);Ee({...fe,monthlyValue:m,annualValue:(k*12).toLocaleString("pt-BR",{minimumFractionDigits:2})})},placeholder:"0,00"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Valor Anual (Estimado)"}),l.jsx("input",{className:"w-full p-3 bg-blue-50 border border-blue-100 rounded-xl font-black text-blue-600",value:fe.annualValue,onChange:f=>Ee({...fe,annualValue:f.target.value}),placeholder:"0,00"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Observações"}),l.jsx("textarea",{rows:"3",className:"w-full p-3 bg-white border border-slate-200 rounded-xl text-sm resize-none",value:fe.observations,onChange:f=>Ee({...fe,observations:f.target.value}),placeholder:"Detalhes adicionais..."})]})]}),l.jsxs("div",{className:"bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4 h-fit",children:[l.jsxs("div",{className:"flex items-center gap-2 text-indigo-600 font-bold uppercase text-xs tracking-widest mb-2",children:[l.jsx($A,{size:16})," Itens Cobertos"]}),l.jsxs("div",{className:"space-y-3",children:[l.jsxs("label",{className:"flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 cursor-pointer hover:border-indigo-300 transition-colors",children:[l.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500",checked:fe.coveredItems.videoSurgeryInstruments,onChange:f=>Ee({...fe,coveredItems:{...fe.coveredItems,videoSurgeryInstruments:f.target.checked}})}),l.jsx("span",{className:"text-sm font-bold text-slate-700",children:"Instrumentais de Vídeo Cirurgia"})]}),l.jsxs("label",{className:"flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 cursor-pointer hover:border-indigo-300 transition-colors",children:[l.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500",checked:fe.coveredItems.openInstruments,onChange:f=>Ee({...fe,coveredItems:{...fe.coveredItems,openInstruments:f.target.checked}})}),l.jsx("span",{className:"text-sm font-bold text-slate-700",children:"Instrumentais Abertos"})]}),l.jsxs("label",{className:"flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 cursor-pointer hover:border-indigo-300 transition-colors",children:[l.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500",checked:fe.coveredItems.videoSurgeryEquipment,onChange:f=>Ee({...fe,coveredItems:{...fe.coveredItems,videoSurgeryEquipment:f.target.checked}})}),l.jsx("span",{className:"text-sm font-bold text-slate-700",children:"Equipamentos de Vídeo"})]}),l.jsxs("label",{className:"flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 cursor-pointer hover:border-indigo-300 transition-colors",children:[l.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500",checked:fe.coveredItems.endoscopes,onChange:f=>Ee({...fe,coveredItems:{...fe.coveredItems,endoscopes:f.target.checked}})}),l.jsx("span",{className:"text-sm font-bold text-slate-700",children:"Endoscópios"})]})]})]})]})]}),l.jsxs("div",{className:"pt-4 border-t flex justify-end gap-3",children:[l.jsx("button",{type:"button",onClick:()=>zn(!1),className:"px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-100",children:"Cancelar"}),l.jsxs("button",{type:"submit",disabled:fr,className:"px-8 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700 flex items-center gap-2",children:[fr?l.jsx(Gi,{className:"animate-spin",size:20}):l.jsx(qf,{size:20}),"Salvar Contrato"]})]})]})})})})}),Si&&l.jsx("div",{className:"fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[60] flex items-center justify-center p-4",children:l.jsxs("div",{className:"bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-200 text-center space-y-6 animate-in zoom-in-95",children:[l.jsx("div",{className:"bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-red-500 mb-2",children:l.jsx(gl,{size:40})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-2xl font-black text-slate-900",children:"Excluir OS?"}),l.jsxs("p",{className:"text-slate-500 mt-2",children:["Tem certeza que deseja remover permanentemente a OS ",l.jsx("span",{className:"font-bold text-slate-900",children:$n==null?void 0:$n.osNumber}),"?",l.jsx("br",{}),"Essa ação não pode ser desfeita."]})]}),l.jsxs("div",{className:"flex gap-3",children:[l.jsx("button",{onClick:()=>ki(!1),className:"flex-1 py-4 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-colors",children:"Cancelar"}),l.jsx("button",{onClick:Rd,className:"flex-1 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 shadow-xl shadow-red-200 transition-colors",children:"Sim, Excluir"})]})]})}),l.jsx(fR,{isOpen:ut,onClose:()=>hr(!1),selectedOrdersCount:ve.length,totalValue:zs.totalValue,initialData:zs,onConfirm:Ad}),mr.show&&l.jsx(dR,{message:mr.message,type:mr.type,onClose:()=>Ko(f=>({...f,show:!1}))})]}):l.jsx("div",{className:"min-h-screen bg-slate-50 flex items-center justify-center",children:l.jsxs("div",{className:"text-center p-8",children:[l.jsx(Tu,{className:"mx-auto text-red-500 mb-6",size:60}),l.jsx("h2",{className:"text-2xl font-black text-slate-900 mb-2",children:"Acesso Negado"}),l.jsx("p",{className:"text-slate-600 max-w-md mx-auto",children:"Você não tem permissão para acessar esta página. Entre em contato com o administrador do sistema."})]})}):l.jsx(aR,{})}function mR(){return l.jsx(d1,{children:l.jsx(pR,{})})}Eh.createRoot(document.getElementById("root")).render(l.jsx($v.StrictMode,{children:l.jsx(d1,{children:l.jsx(mR,{})})}));
