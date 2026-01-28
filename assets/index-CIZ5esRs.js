(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var ha=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function v1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var jv={exports:{}},$u={},Dv={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wl=Symbol.for("react.element"),y1=Symbol.for("react.portal"),x1=Symbol.for("react.fragment"),_1=Symbol.for("react.strict_mode"),w1=Symbol.for("react.profiler"),b1=Symbol.for("react.provider"),E1=Symbol.for("react.context"),T1=Symbol.for("react.forward_ref"),I1=Symbol.for("react.suspense"),N1=Symbol.for("react.memo"),S1=Symbol.for("react.lazy"),Bm=Symbol.iterator;function k1(t){return t===null||typeof t!="object"?null:(t=Bm&&t[Bm]||t["@@iterator"],typeof t=="function"?t:null)}var Ov={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lv=Object.assign,Mv={};function Uo(t,e,n){this.props=t,this.context=e,this.refs=Mv,this.updater=n||Ov}Uo.prototype.isReactComponent={};Uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vv(){}Vv.prototype=Uo.prototype;function Yf(t,e,n){this.props=t,this.context=e,this.refs=Mv,this.updater=n||Ov}var Xf=Yf.prototype=new Vv;Xf.constructor=Yf;Lv(Xf,Uo.prototype);Xf.isPureReactComponent=!0;var qm=Array.isArray,Fv=Object.prototype.hasOwnProperty,Jf={current:null},Uv={key:!0,ref:!0,__self:!0,__source:!0};function zv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Fv.call(e,r)&&!Uv.hasOwnProperty(r)&&(s[r]=e[r]);var c=arguments.length-2;if(c===1)s.children=n;else if(1<c){for(var u=Array(c),d=0;d<c;d++)u[d]=arguments[d+2];s.children=u}if(t&&t.defaultProps)for(r in c=t.defaultProps,c)s[r]===void 0&&(s[r]=c[r]);return{$$typeof:wl,type:t,key:i,ref:o,props:s,_owner:Jf.current}}function C1(t,e){return{$$typeof:wl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zf(t){return typeof t=="object"&&t!==null&&t.$$typeof===wl}function A1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hm=/\/+/g;function Fd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?A1(""+t.key):e.toString(36)}function Ac(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wl:case y1:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Fd(o,0):r,qm(s)?(n="",t!=null&&(n=t.replace(Hm,"$&/")+"/"),Ac(s,e,n,"",function(d){return d})):s!=null&&(Zf(s)&&(s=C1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Hm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",qm(t))for(var c=0;c<t.length;c++){i=t[c];var u=r+Fd(i,c);o+=Ac(i,e,n,u,s)}else if(u=k1(t),typeof u=="function")for(t=u.call(t),c=0;!(i=t.next()).done;)i=i.value,u=r+Fd(i,c++),o+=Ac(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ic(t,e,n){if(t==null)return t;var r=[],s=0;return Ac(t,r,"","",function(i){return e.call(n,i,s++)}),r}function R1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Rc={transition:null},P1={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Rc,ReactCurrentOwner:Jf};function $v(){throw Error("act(...) is not supported in production builds of React.")}me.Children={map:ic,forEach:function(t,e,n){ic(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ic(t,function(){e++}),e},toArray:function(t){return ic(t,function(e){return e})||[]},only:function(t){if(!Zf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};me.Component=Uo;me.Fragment=x1;me.Profiler=w1;me.PureComponent=Yf;me.StrictMode=_1;me.Suspense=I1;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P1;me.act=$v;me.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Lv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Jf.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(u in e)Fv.call(e,u)&&!Uv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&c!==void 0?c[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){c=Array(u);for(var d=0;d<u;d++)c[d]=arguments[d+2];r.children=c}return{$$typeof:wl,type:t.type,key:s,ref:i,props:r,_owner:o}};me.createContext=function(t){return t={$$typeof:E1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:b1,_context:t},t.Consumer=t};me.createElement=zv;me.createFactory=function(t){var e=zv.bind(null,t);return e.type=t,e};me.createRef=function(){return{current:null}};me.forwardRef=function(t){return{$$typeof:T1,render:t}};me.isValidElement=Zf;me.lazy=function(t){return{$$typeof:S1,_payload:{_status:-1,_result:t},_init:R1}};me.memo=function(t,e){return{$$typeof:N1,type:t,compare:e===void 0?null:e}};me.startTransition=function(t){var e=Rc.transition;Rc.transition={};try{t()}finally{Rc.transition=e}};me.unstable_act=$v;me.useCallback=function(t,e){return qt.current.useCallback(t,e)};me.useContext=function(t){return qt.current.useContext(t)};me.useDebugValue=function(){};me.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};me.useEffect=function(t,e){return qt.current.useEffect(t,e)};me.useId=function(){return qt.current.useId()};me.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};me.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};me.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};me.useMemo=function(t,e){return qt.current.useMemo(t,e)};me.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};me.useRef=function(t){return qt.current.useRef(t)};me.useState=function(t){return qt.current.useState(t)};me.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};me.useTransition=function(){return qt.current.useTransition()};me.version="18.3.1";Dv.exports=me;var B=Dv.exports;const Bv=v1(B);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j1=B,D1=Symbol.for("react.element"),O1=Symbol.for("react.fragment"),L1=Object.prototype.hasOwnProperty,M1=j1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V1={key:!0,ref:!0,__self:!0,__source:!0};function qv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)L1.call(e,r)&&!V1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:D1,type:t,key:i,ref:o,props:s,_owner:M1.current}}$u.Fragment=O1;$u.jsx=qv;$u.jsxs=qv;jv.exports=$u;var l=jv.exports,Sh={},Hv={exports:{}},pn={},Wv={exports:{}},Kv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(J,X){var oe=J.length;J.push(X);e:for(;0<oe;){var Ae=oe-1>>>1,Ie=J[Ae];if(0<s(Ie,X))J[Ae]=X,J[oe]=Ie,oe=Ae;else break e}}function n(J){return J.length===0?null:J[0]}function r(J){if(J.length===0)return null;var X=J[0],oe=J.pop();if(oe!==X){J[0]=oe;e:for(var Ae=0,Ie=J.length,Ne=Ie>>>1;Ae<Ne;){var nn=2*(Ae+1)-1,rn=J[nn],Wt=nn+1,kn=J[Wt];if(0>s(rn,oe))Wt<Ie&&0>s(kn,rn)?(J[Ae]=kn,J[Wt]=oe,Ae=Wt):(J[Ae]=rn,J[nn]=oe,Ae=nn);else if(Wt<Ie&&0>s(kn,oe))J[Ae]=kn,J[Wt]=oe,Ae=Wt;else break e}}return X}function s(J,X){var oe=J.sortIndex-X.sortIndex;return oe!==0?oe:J.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,c=o.now();t.unstable_now=function(){return o.now()-c}}var u=[],d=[],g=1,v=null,y=3,N=!1,j=!1,O=!1,z=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(J){for(var X=n(d);X!==null;){if(X.callback===null)r(d);else if(X.startTime<=J)r(d),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(d)}}function F(J){if(O=!1,R(J),!j)if(n(u)!==null)j=!0,Pi(M);else{var X=n(d);X!==null&&Sn(F,X.startTime-J)}}function M(J,X){j=!1,O&&(O=!1,I(x),x=-1),N=!0;var oe=y;try{for(R(X),v=n(u);v!==null&&(!(v.expirationTime>X)||J&&!C());){var Ae=v.callback;if(typeof Ae=="function"){v.callback=null,y=v.priorityLevel;var Ie=Ae(v.expirationTime<=X);X=t.unstable_now(),typeof Ie=="function"?v.callback=Ie:v===n(u)&&r(u),R(X)}else r(u);v=n(u)}if(v!==null)var Ne=!0;else{var nn=n(d);nn!==null&&Sn(F,nn.startTime-X),Ne=!1}return Ne}finally{v=null,y=oe,N=!1}}var V=!1,w=null,x=-1,b=5,T=-1;function C(){return!(t.unstable_now()-T<b)}function A(){if(w!==null){var J=t.unstable_now();T=J;var X=!0;try{X=w(!0,J)}finally{X?S():(V=!1,w=null)}}else V=!1}var S;if(typeof E=="function")S=function(){E(A)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,ft=Ke.port2;Ke.port1.onmessage=A,S=function(){ft.postMessage(null)}}else S=function(){z(A,0)};function Pi(J){w=J,V||(V=!0,S())}function Sn(J,X){x=z(function(){J(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(J){J.callback=null},t.unstable_continueExecution=function(){j||N||(j=!0,Pi(M))},t.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<J?Math.floor(1e3/J):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(J){switch(y){case 1:case 2:case 3:var X=3;break;default:X=y}var oe=y;y=X;try{return J()}finally{y=oe}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(J,X){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var oe=y;y=J;try{return X()}finally{y=oe}},t.unstable_scheduleCallback=function(J,X,oe){var Ae=t.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?Ae+oe:Ae):oe=Ae,J){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=oe+Ie,J={id:g++,callback:X,priorityLevel:J,startTime:oe,expirationTime:Ie,sortIndex:-1},oe>Ae?(J.sortIndex=oe,e(d,J),n(u)===null&&J===n(d)&&(O?(I(x),x=-1):O=!0,Sn(F,oe-Ae))):(J.sortIndex=Ie,e(u,J),j||N||(j=!0,Pi(M))),J},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(J){var X=y;return function(){var oe=y;y=X;try{return J.apply(this,arguments)}finally{y=oe}}}})(Kv);Wv.exports=Kv;var F1=Wv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U1=B,fn=F1;function G(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gv=new Set,Qa={};function Ni(t,e){To(t,e),To(t+"Capture",e)}function To(t,e){for(Qa[t]=e,t=0;t<e.length;t++)Gv.add(e[t])}var jr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kh=Object.prototype.hasOwnProperty,z1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wm={},Km={};function $1(t){return kh.call(Km,t)?!0:kh.call(Wm,t)?!1:z1.test(t)?Km[t]=!0:(Wm[t]=!0,!1)}function B1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function q1(t,e,n,r){if(e===null||typeof e>"u"||B1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ht(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Et[t]=new Ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Et[e]=new Ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Et[t]=new Ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Et[t]=new Ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Et[t]=new Ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Et[t]=new Ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Et[t]=new Ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Et[t]=new Ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Et[t]=new Ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var ep=/[\-:]([a-z])/g;function tp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ep,tp);Et[e]=new Ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ep,tp);Et[e]=new Ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ep,tp);Et[e]=new Ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Et[t]=new Ht(t,1,!1,t.toLowerCase(),null,!1,!1)});Et.xlinkHref=new Ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Et[t]=new Ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function np(t,e,n,r){var s=Et.hasOwnProperty(e)?Et[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(q1(e,n,s,r)&&(n=null),r||s===null?$1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Br=U1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oc=Symbol.for("react.element"),Xi=Symbol.for("react.portal"),Ji=Symbol.for("react.fragment"),rp=Symbol.for("react.strict_mode"),Ch=Symbol.for("react.profiler"),Qv=Symbol.for("react.provider"),Yv=Symbol.for("react.context"),sp=Symbol.for("react.forward_ref"),Ah=Symbol.for("react.suspense"),Rh=Symbol.for("react.suspense_list"),ip=Symbol.for("react.memo"),us=Symbol.for("react.lazy"),Xv=Symbol.for("react.offscreen"),Gm=Symbol.iterator;function fa(t){return t===null||typeof t!="object"?null:(t=Gm&&t[Gm]||t["@@iterator"],typeof t=="function"?t:null)}var Be=Object.assign,Ud;function Ta(t){if(Ud===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ud=e&&e[1]||""}return`
`+Ud+t}var zd=!1;function $d(t,e){if(!t||zd)return"";zd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,c=i.length-1;1<=o&&0<=c&&s[o]!==i[c];)c--;for(;1<=o&&0<=c;o--,c--)if(s[o]!==i[c]){if(o!==1||c!==1)do if(o--,c--,0>c||s[o]!==i[c]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=c);break}}}finally{zd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ta(t):""}function H1(t){switch(t.tag){case 5:return Ta(t.type);case 16:return Ta("Lazy");case 13:return Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 2:case 15:return t=$d(t.type,!1),t;case 11:return t=$d(t.type.render,!1),t;case 1:return t=$d(t.type,!0),t;default:return""}}function Ph(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ji:return"Fragment";case Xi:return"Portal";case Ch:return"Profiler";case rp:return"StrictMode";case Ah:return"Suspense";case Rh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yv:return(t.displayName||"Context")+".Consumer";case Qv:return(t._context.displayName||"Context")+".Provider";case sp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ip:return e=t.displayName||null,e!==null?e:Ph(t.type)||"Memo";case us:e=t._payload,t=t._init;try{return Ph(t(e))}catch{}}return null}function W1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ph(e);case 8:return e===rp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ps(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function K1(t){var e=Jv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ac(t){t._valueTracker||(t._valueTracker=K1(t))}function Zv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Jv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jh(t,e){var n=e.checked;return Be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Qm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ps(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ey(t,e){e=e.checked,e!=null&&np(t,"checked",e,!1)}function Dh(t,e){ey(t,e);var n=Ps(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Oh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Oh(t,e.type,Ps(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ym(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Oh(t,e,n){(e!=="number"||Xc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ia=Array.isArray;function po(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ps(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Lh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(G(91));return Be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(G(92));if(Ia(n)){if(1<n.length)throw Error(G(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ps(n)}}function ty(t,e){var n=Ps(e.value),r=Ps(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Jm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ny(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ny(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var lc,ry=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(lc=lc||document.createElement("div"),lc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=lc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ya(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},G1=["Webkit","ms","Moz","O"];Object.keys(Oa).forEach(function(t){G1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Oa[e]=Oa[t]})});function sy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Oa.hasOwnProperty(t)&&Oa[t]?(""+e).trim():e+"px"}function iy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=sy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var Q1=Be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vh(t,e){if(e){if(Q1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(G(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(G(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(G(61))}if(e.style!=null&&typeof e.style!="object")throw Error(G(62))}}function Fh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uh=null;function op(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zh=null,mo=null,go=null;function Zm(t){if(t=Tl(t)){if(typeof zh!="function")throw Error(G(280));var e=t.stateNode;e&&(e=Ku(e),zh(t.stateNode,t.type,e))}}function oy(t){mo?go?go.push(t):go=[t]:mo=t}function ay(){if(mo){var t=mo,e=go;if(go=mo=null,Zm(t),e)for(t=0;t<e.length;t++)Zm(e[t])}}function ly(t,e){return t(e)}function cy(){}var Bd=!1;function uy(t,e,n){if(Bd)return t(e,n);Bd=!0;try{return ly(t,e,n)}finally{Bd=!1,(mo!==null||go!==null)&&(cy(),ay())}}function Xa(t,e){var n=t.stateNode;if(n===null)return null;var r=Ku(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(G(231,e,typeof n));return n}var $h=!1;if(jr)try{var pa={};Object.defineProperty(pa,"passive",{get:function(){$h=!0}}),window.addEventListener("test",pa,pa),window.removeEventListener("test",pa,pa)}catch{$h=!1}function Y1(t,e,n,r,s,i,o,c,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(g){this.onError(g)}}var La=!1,Jc=null,Zc=!1,Bh=null,X1={onError:function(t){La=!0,Jc=t}};function J1(t,e,n,r,s,i,o,c,u){La=!1,Jc=null,Y1.apply(X1,arguments)}function Z1(t,e,n,r,s,i,o,c,u){if(J1.apply(this,arguments),La){if(La){var d=Jc;La=!1,Jc=null}else throw Error(G(198));Zc||(Zc=!0,Bh=d)}}function Si(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function eg(t){if(Si(t)!==t)throw Error(G(188))}function eb(t){var e=t.alternate;if(!e){if(e=Si(t),e===null)throw Error(G(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return eg(s),t;if(i===r)return eg(s),e;i=i.sibling}throw Error(G(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,c=s.child;c;){if(c===n){o=!0,n=s,r=i;break}if(c===r){o=!0,r=s,n=i;break}c=c.sibling}if(!o){for(c=i.child;c;){if(c===n){o=!0,n=i,r=s;break}if(c===r){o=!0,r=i,n=s;break}c=c.sibling}if(!o)throw Error(G(189))}}if(n.alternate!==r)throw Error(G(190))}if(n.tag!==3)throw Error(G(188));return n.stateNode.current===n?t:e}function hy(t){return t=eb(t),t!==null?fy(t):null}function fy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=fy(t);if(e!==null)return e;t=t.sibling}return null}var py=fn.unstable_scheduleCallback,tg=fn.unstable_cancelCallback,tb=fn.unstable_shouldYield,nb=fn.unstable_requestPaint,Ye=fn.unstable_now,rb=fn.unstable_getCurrentPriorityLevel,ap=fn.unstable_ImmediatePriority,my=fn.unstable_UserBlockingPriority,eu=fn.unstable_NormalPriority,sb=fn.unstable_LowPriority,gy=fn.unstable_IdlePriority,Bu=null,nr=null;function ib(t){if(nr&&typeof nr.onCommitFiberRoot=="function")try{nr.onCommitFiberRoot(Bu,t,void 0,(t.current.flags&128)===128)}catch{}}var Un=Math.clz32?Math.clz32:lb,ob=Math.log,ab=Math.LN2;function lb(t){return t>>>=0,t===0?32:31-(ob(t)/ab|0)|0}var cc=64,uc=4194304;function Na(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var c=o&~s;c!==0?r=Na(c):(i&=o,i!==0&&(r=Na(i)))}else o=n&~s,o!==0?r=Na(o):i!==0&&(r=Na(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Un(e),s=1<<n,r|=t[n],e&=~s;return r}function cb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ub(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Un(i),c=1<<o,u=s[o];u===-1?(!(c&n)||c&r)&&(s[o]=cb(c,e)):u<=e&&(t.expiredLanes|=c),i&=~c}}function qh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vy(){var t=cc;return cc<<=1,!(cc&4194240)&&(cc=64),t}function qd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function bl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Un(e),t[e]=n}function db(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Un(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function lp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Un(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ke=0;function yy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xy,cp,_y,wy,by,Hh=!1,dc=[],ws=null,bs=null,Es=null,Ja=new Map,Za=new Map,hs=[],hb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ng(t,e){switch(t){case"focusin":case"focusout":ws=null;break;case"dragenter":case"dragleave":bs=null;break;case"mouseover":case"mouseout":Es=null;break;case"pointerover":case"pointerout":Ja.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Za.delete(e.pointerId)}}function ma(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Tl(e),e!==null&&cp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function fb(t,e,n,r,s){switch(e){case"focusin":return ws=ma(ws,t,e,n,r,s),!0;case"dragenter":return bs=ma(bs,t,e,n,r,s),!0;case"mouseover":return Es=ma(Es,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Ja.set(i,ma(Ja.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Za.set(i,ma(Za.get(i)||null,t,e,n,r,s)),!0}return!1}function Ey(t){var e=oi(t.target);if(e!==null){var n=Si(e);if(n!==null){if(e=n.tag,e===13){if(e=dy(n),e!==null){t.blockedOn=e,by(t.priority,function(){_y(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Uh=r,n.target.dispatchEvent(r),Uh=null}else return e=Tl(n),e!==null&&cp(e),t.blockedOn=n,!1;e.shift()}return!0}function rg(t,e,n){Pc(t)&&n.delete(e)}function pb(){Hh=!1,ws!==null&&Pc(ws)&&(ws=null),bs!==null&&Pc(bs)&&(bs=null),Es!==null&&Pc(Es)&&(Es=null),Ja.forEach(rg),Za.forEach(rg)}function ga(t,e){t.blockedOn===e&&(t.blockedOn=null,Hh||(Hh=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,pb)))}function el(t){function e(s){return ga(s,t)}if(0<dc.length){ga(dc[0],t);for(var n=1;n<dc.length;n++){var r=dc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ws!==null&&ga(ws,t),bs!==null&&ga(bs,t),Es!==null&&ga(Es,t),Ja.forEach(e),Za.forEach(e),n=0;n<hs.length;n++)r=hs[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<hs.length&&(n=hs[0],n.blockedOn===null);)Ey(n),n.blockedOn===null&&hs.shift()}var vo=Br.ReactCurrentBatchConfig,nu=!0;function mb(t,e,n,r){var s=ke,i=vo.transition;vo.transition=null;try{ke=1,up(t,e,n,r)}finally{ke=s,vo.transition=i}}function gb(t,e,n,r){var s=ke,i=vo.transition;vo.transition=null;try{ke=4,up(t,e,n,r)}finally{ke=s,vo.transition=i}}function up(t,e,n,r){if(nu){var s=Wh(t,e,n,r);if(s===null)eh(t,e,r,ru,n),ng(t,r);else if(fb(s,t,e,n,r))r.stopPropagation();else if(ng(t,r),e&4&&-1<hb.indexOf(t)){for(;s!==null;){var i=Tl(s);if(i!==null&&xy(i),i=Wh(t,e,n,r),i===null&&eh(t,e,r,ru,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else eh(t,e,r,null,n)}}var ru=null;function Wh(t,e,n,r){if(ru=null,t=op(r),t=oi(t),t!==null)if(e=Si(t),e===null)t=null;else if(n=e.tag,n===13){if(t=dy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ru=t,null}function Ty(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rb()){case ap:return 1;case my:return 4;case eu:case sb:return 16;case gy:return 536870912;default:return 16}default:return 16}}var ys=null,dp=null,jc=null;function Iy(){if(jc)return jc;var t,e=dp,n=e.length,r,s="value"in ys?ys.value:ys.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return jc=s.slice(t,1<r?1-r:void 0)}function Dc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function hc(){return!0}function sg(){return!1}function mn(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(n=t[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?hc:sg,this.isPropagationStopped=sg,this}return Be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hc)},persist:function(){},isPersistent:hc}),e}var zo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hp=mn(zo),El=Be({},zo,{view:0,detail:0}),vb=mn(El),Hd,Wd,va,qu=Be({},El,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==va&&(va&&t.type==="mousemove"?(Hd=t.screenX-va.screenX,Wd=t.screenY-va.screenY):Wd=Hd=0,va=t),Hd)},movementY:function(t){return"movementY"in t?t.movementY:Wd}}),ig=mn(qu),yb=Be({},qu,{dataTransfer:0}),xb=mn(yb),_b=Be({},El,{relatedTarget:0}),Kd=mn(_b),wb=Be({},zo,{animationName:0,elapsedTime:0,pseudoElement:0}),bb=mn(wb),Eb=Be({},zo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tb=mn(Eb),Ib=Be({},zo,{data:0}),og=mn(Ib),Nb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kb[t])?!!e[t]:!1}function fp(){return Cb}var Ab=Be({},El,{key:function(t){if(t.key){var e=Nb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Dc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fp,charCode:function(t){return t.type==="keypress"?Dc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Dc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Rb=mn(Ab),Pb=Be({},qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ag=mn(Pb),jb=Be({},El,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fp}),Db=mn(jb),Ob=Be({},zo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lb=mn(Ob),Mb=Be({},qu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vb=mn(Mb),Fb=[9,13,27,32],pp=jr&&"CompositionEvent"in window,Ma=null;jr&&"documentMode"in document&&(Ma=document.documentMode);var Ub=jr&&"TextEvent"in window&&!Ma,Ny=jr&&(!pp||Ma&&8<Ma&&11>=Ma),lg=" ",cg=!1;function Sy(t,e){switch(t){case"keyup":return Fb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ky(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zi=!1;function zb(t,e){switch(t){case"compositionend":return ky(e);case"keypress":return e.which!==32?null:(cg=!0,lg);case"textInput":return t=e.data,t===lg&&cg?null:t;default:return null}}function $b(t,e){if(Zi)return t==="compositionend"||!pp&&Sy(t,e)?(t=Iy(),jc=dp=ys=null,Zi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ny&&e.locale!=="ko"?null:e.data;default:return null}}var Bb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ug(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Bb[t.type]:e==="textarea"}function Cy(t,e,n,r){oy(r),e=su(e,"onChange"),0<e.length&&(n=new hp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Va=null,tl=null;function qb(t){Uy(t,0)}function Hu(t){var e=no(t);if(Zv(e))return t}function Hb(t,e){if(t==="change")return e}var Ay=!1;if(jr){var Gd;if(jr){var Qd="oninput"in document;if(!Qd){var dg=document.createElement("div");dg.setAttribute("oninput","return;"),Qd=typeof dg.oninput=="function"}Gd=Qd}else Gd=!1;Ay=Gd&&(!document.documentMode||9<document.documentMode)}function hg(){Va&&(Va.detachEvent("onpropertychange",Ry),tl=Va=null)}function Ry(t){if(t.propertyName==="value"&&Hu(tl)){var e=[];Cy(e,tl,t,op(t)),uy(qb,e)}}function Wb(t,e,n){t==="focusin"?(hg(),Va=e,tl=n,Va.attachEvent("onpropertychange",Ry)):t==="focusout"&&hg()}function Kb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hu(tl)}function Gb(t,e){if(t==="click")return Hu(e)}function Qb(t,e){if(t==="input"||t==="change")return Hu(e)}function Yb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:Yb;function nl(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!kh.call(e,s)||!$n(t[s],e[s]))return!1}return!0}function fg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pg(t,e){var n=fg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fg(n)}}function Py(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Py(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function jy(){for(var t=window,e=Xc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xc(t.document)}return e}function mp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Xb(t){var e=jy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Py(n.ownerDocument.documentElement,n)){if(r!==null&&mp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=pg(n,i);var o=pg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Jb=jr&&"documentMode"in document&&11>=document.documentMode,eo=null,Kh=null,Fa=null,Gh=!1;function mg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gh||eo==null||eo!==Xc(r)||(r=eo,"selectionStart"in r&&mp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fa&&nl(Fa,r)||(Fa=r,r=su(Kh,"onSelect"),0<r.length&&(e=new hp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=eo)))}function fc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var to={animationend:fc("Animation","AnimationEnd"),animationiteration:fc("Animation","AnimationIteration"),animationstart:fc("Animation","AnimationStart"),transitionend:fc("Transition","TransitionEnd")},Yd={},Dy={};jr&&(Dy=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function Wu(t){if(Yd[t])return Yd[t];if(!to[t])return t;var e=to[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Dy)return Yd[t]=e[n];return t}var Oy=Wu("animationend"),Ly=Wu("animationiteration"),My=Wu("animationstart"),Vy=Wu("transitionend"),Fy=new Map,gg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vs(t,e){Fy.set(t,e),Ni(e,[t])}for(var Xd=0;Xd<gg.length;Xd++){var Jd=gg[Xd],Zb=Jd.toLowerCase(),eE=Jd[0].toUpperCase()+Jd.slice(1);Vs(Zb,"on"+eE)}Vs(Oy,"onAnimationEnd");Vs(Ly,"onAnimationIteration");Vs(My,"onAnimationStart");Vs("dblclick","onDoubleClick");Vs("focusin","onFocus");Vs("focusout","onBlur");Vs(Vy,"onTransitionEnd");To("onMouseEnter",["mouseout","mouseover"]);To("onMouseLeave",["mouseout","mouseover"]);To("onPointerEnter",["pointerout","pointerover"]);To("onPointerLeave",["pointerout","pointerover"]);Ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ni("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function vg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Z1(r,e,void 0,t),t.currentTarget=null}function Uy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var c=r[o],u=c.instance,d=c.currentTarget;if(c=c.listener,u!==i&&s.isPropagationStopped())break e;vg(s,c,d),i=u}else for(o=0;o<r.length;o++){if(c=r[o],u=c.instance,d=c.currentTarget,c=c.listener,u!==i&&s.isPropagationStopped())break e;vg(s,c,d),i=u}}}if(Zc)throw t=Bh,Zc=!1,Bh=null,t}function Oe(t,e){var n=e[Zh];n===void 0&&(n=e[Zh]=new Set);var r=t+"__bubble";n.has(r)||(zy(e,t,2,!1),n.add(r))}function Zd(t,e,n){var r=0;e&&(r|=4),zy(n,t,r,e)}var pc="_reactListening"+Math.random().toString(36).slice(2);function rl(t){if(!t[pc]){t[pc]=!0,Gv.forEach(function(n){n!=="selectionchange"&&(tE.has(n)||Zd(n,!1,t),Zd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pc]||(e[pc]=!0,Zd("selectionchange",!1,e))}}function zy(t,e,n,r){switch(Ty(e)){case 1:var s=mb;break;case 4:s=gb;break;default:s=up}n=s.bind(null,e,n,t),s=void 0,!$h||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function eh(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var c=r.stateNode.containerInfo;if(c===s||c.nodeType===8&&c.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;c!==null;){if(o=oi(c),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}c=c.parentNode}}r=r.return}uy(function(){var d=i,g=op(n),v=[];e:{var y=Fy.get(t);if(y!==void 0){var N=hp,j=t;switch(t){case"keypress":if(Dc(n)===0)break e;case"keydown":case"keyup":N=Rb;break;case"focusin":j="focus",N=Kd;break;case"focusout":j="blur",N=Kd;break;case"beforeblur":case"afterblur":N=Kd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=ig;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=xb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Db;break;case Oy:case Ly:case My:N=bb;break;case Vy:N=Lb;break;case"scroll":N=vb;break;case"wheel":N=Vb;break;case"copy":case"cut":case"paste":N=Tb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=ag}var O=(e&4)!==0,z=!O&&t==="scroll",I=O?y!==null?y+"Capture":null:y;O=[];for(var E=d,R;E!==null;){R=E;var F=R.stateNode;if(R.tag===5&&F!==null&&(R=F,I!==null&&(F=Xa(E,I),F!=null&&O.push(sl(E,F,R)))),z)break;E=E.return}0<O.length&&(y=new N(y,j,null,n,g),v.push({event:y,listeners:O}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",N=t==="mouseout"||t==="pointerout",y&&n!==Uh&&(j=n.relatedTarget||n.fromElement)&&(oi(j)||j[Dr]))break e;if((N||y)&&(y=g.window===g?g:(y=g.ownerDocument)?y.defaultView||y.parentWindow:window,N?(j=n.relatedTarget||n.toElement,N=d,j=j?oi(j):null,j!==null&&(z=Si(j),j!==z||j.tag!==5&&j.tag!==6)&&(j=null)):(N=null,j=d),N!==j)){if(O=ig,F="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(O=ag,F="onPointerLeave",I="onPointerEnter",E="pointer"),z=N==null?y:no(N),R=j==null?y:no(j),y=new O(F,E+"leave",N,n,g),y.target=z,y.relatedTarget=R,F=null,oi(g)===d&&(O=new O(I,E+"enter",j,n,g),O.target=R,O.relatedTarget=z,F=O),z=F,N&&j)t:{for(O=N,I=j,E=0,R=O;R;R=Hi(R))E++;for(R=0,F=I;F;F=Hi(F))R++;for(;0<E-R;)O=Hi(O),E--;for(;0<R-E;)I=Hi(I),R--;for(;E--;){if(O===I||I!==null&&O===I.alternate)break t;O=Hi(O),I=Hi(I)}O=null}else O=null;N!==null&&yg(v,y,N,O,!1),j!==null&&z!==null&&yg(v,z,j,O,!0)}}e:{if(y=d?no(d):window,N=y.nodeName&&y.nodeName.toLowerCase(),N==="select"||N==="input"&&y.type==="file")var M=Hb;else if(ug(y))if(Ay)M=Qb;else{M=Kb;var V=Wb}else(N=y.nodeName)&&N.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(M=Gb);if(M&&(M=M(t,d))){Cy(v,M,n,g);break e}V&&V(t,y,d),t==="focusout"&&(V=y._wrapperState)&&V.controlled&&y.type==="number"&&Oh(y,"number",y.value)}switch(V=d?no(d):window,t){case"focusin":(ug(V)||V.contentEditable==="true")&&(eo=V,Kh=d,Fa=null);break;case"focusout":Fa=Kh=eo=null;break;case"mousedown":Gh=!0;break;case"contextmenu":case"mouseup":case"dragend":Gh=!1,mg(v,n,g);break;case"selectionchange":if(Jb)break;case"keydown":case"keyup":mg(v,n,g)}var w;if(pp)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Zi?Sy(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Ny&&n.locale!=="ko"&&(Zi||x!=="onCompositionStart"?x==="onCompositionEnd"&&Zi&&(w=Iy()):(ys=g,dp="value"in ys?ys.value:ys.textContent,Zi=!0)),V=su(d,x),0<V.length&&(x=new og(x,t,null,n,g),v.push({event:x,listeners:V}),w?x.data=w:(w=ky(n),w!==null&&(x.data=w)))),(w=Ub?zb(t,n):$b(t,n))&&(d=su(d,"onBeforeInput"),0<d.length&&(g=new og("onBeforeInput","beforeinput",null,n,g),v.push({event:g,listeners:d}),g.data=w))}Uy(v,e)})}function sl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function su(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Xa(t,n),i!=null&&r.unshift(sl(t,i,s)),i=Xa(t,e),i!=null&&r.push(sl(t,i,s))),t=t.return}return r}function Hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var c=n,u=c.alternate,d=c.stateNode;if(u!==null&&u===r)break;c.tag===5&&d!==null&&(c=d,s?(u=Xa(n,i),u!=null&&o.unshift(sl(n,u,c))):s||(u=Xa(n,i),u!=null&&o.push(sl(n,u,c)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var nE=/\r\n?/g,rE=/\u0000|\uFFFD/g;function xg(t){return(typeof t=="string"?t:""+t).replace(nE,`
`).replace(rE,"")}function mc(t,e,n){if(e=xg(e),xg(t)!==e&&n)throw Error(G(425))}function iu(){}var Qh=null,Yh=null;function Xh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jh=typeof setTimeout=="function"?setTimeout:void 0,sE=typeof clearTimeout=="function"?clearTimeout:void 0,_g=typeof Promise=="function"?Promise:void 0,iE=typeof queueMicrotask=="function"?queueMicrotask:typeof _g<"u"?function(t){return _g.resolve(null).then(t).catch(oE)}:Jh;function oE(t){setTimeout(function(){throw t})}function th(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),el(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);el(e)}function Ts(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $o=Math.random().toString(36).slice(2),er="__reactFiber$"+$o,il="__reactProps$"+$o,Dr="__reactContainer$"+$o,Zh="__reactEvents$"+$o,aE="__reactListeners$"+$o,lE="__reactHandles$"+$o;function oi(t){var e=t[er];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dr]||n[er]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wg(t);t!==null;){if(n=t[er])return n;t=wg(t)}return e}t=n,n=t.parentNode}return null}function Tl(t){return t=t[er]||t[Dr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function no(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(G(33))}function Ku(t){return t[il]||null}var ef=[],ro=-1;function Fs(t){return{current:t}}function Le(t){0>ro||(t.current=ef[ro],ef[ro]=null,ro--)}function je(t,e){ro++,ef[ro]=t.current,t.current=e}var js={},Lt=Fs(js),Jt=Fs(!1),pi=js;function Io(t,e){var n=t.type.contextTypes;if(!n)return js;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Zt(t){return t=t.childContextTypes,t!=null}function ou(){Le(Jt),Le(Lt)}function bg(t,e,n){if(Lt.current!==js)throw Error(G(168));je(Lt,e),je(Jt,n)}function $y(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(G(108,W1(t)||"Unknown",s));return Be({},n,r)}function au(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||js,pi=Lt.current,je(Lt,t),je(Jt,Jt.current),!0}function Eg(t,e,n){var r=t.stateNode;if(!r)throw Error(G(169));n?(t=$y(t,e,pi),r.__reactInternalMemoizedMergedChildContext=t,Le(Jt),Le(Lt),je(Lt,t)):Le(Jt),je(Jt,n)}var Er=null,Gu=!1,nh=!1;function By(t){Er===null?Er=[t]:Er.push(t)}function cE(t){Gu=!0,By(t)}function Us(){if(!nh&&Er!==null){nh=!0;var t=0,e=ke;try{var n=Er;for(ke=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Er=null,Gu=!1}catch(s){throw Er!==null&&(Er=Er.slice(t+1)),py(ap,Us),s}finally{ke=e,nh=!1}}return null}var so=[],io=0,lu=null,cu=0,xn=[],_n=0,mi=null,Ir=1,Nr="";function ri(t,e){so[io++]=cu,so[io++]=lu,lu=t,cu=e}function qy(t,e,n){xn[_n++]=Ir,xn[_n++]=Nr,xn[_n++]=mi,mi=t;var r=Ir;t=Nr;var s=32-Un(r)-1;r&=~(1<<s),n+=1;var i=32-Un(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Ir=1<<32-Un(e)+s|n<<s|r,Nr=i+t}else Ir=1<<i|n<<s|r,Nr=t}function gp(t){t.return!==null&&(ri(t,1),qy(t,1,0))}function vp(t){for(;t===lu;)lu=so[--io],so[io]=null,cu=so[--io],so[io]=null;for(;t===mi;)mi=xn[--_n],xn[_n]=null,Nr=xn[--_n],xn[_n]=null,Ir=xn[--_n],xn[_n]=null}var hn=null,un=null,Ve=!1,Fn=null;function Hy(t,e){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Tg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,un=Ts(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mi!==null?{id:Ir,overflow:Nr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,un=null,!0):!1;default:return!1}}function tf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nf(t){if(Ve){var e=un;if(e){var n=e;if(!Tg(t,e)){if(tf(t))throw Error(G(418));e=Ts(n.nextSibling);var r=hn;e&&Tg(t,e)?Hy(r,n):(t.flags=t.flags&-4097|2,Ve=!1,hn=t)}}else{if(tf(t))throw Error(G(418));t.flags=t.flags&-4097|2,Ve=!1,hn=t}}}function Ig(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function gc(t){if(t!==hn)return!1;if(!Ve)return Ig(t),Ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xh(t.type,t.memoizedProps)),e&&(e=un)){if(tf(t))throw Wy(),Error(G(418));for(;e;)Hy(t,e),e=Ts(e.nextSibling)}if(Ig(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(G(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=Ts(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=hn?Ts(t.stateNode.nextSibling):null;return!0}function Wy(){for(var t=un;t;)t=Ts(t.nextSibling)}function No(){un=hn=null,Ve=!1}function yp(t){Fn===null?Fn=[t]:Fn.push(t)}var uE=Br.ReactCurrentBatchConfig;function ya(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(G(309));var r=n.stateNode}if(!r)throw Error(G(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var c=s.refs;o===null?delete c[i]:c[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(G(284));if(!n._owner)throw Error(G(290,t))}return t}function vc(t,e){throw t=Object.prototype.toString.call(e),Error(G(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ng(t){var e=t._init;return e(t._payload)}function Ky(t){function e(I,E){if(t){var R=I.deletions;R===null?(I.deletions=[E],I.flags|=16):R.push(E)}}function n(I,E){if(!t)return null;for(;E!==null;)e(I,E),E=E.sibling;return null}function r(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function s(I,E){return I=ks(I,E),I.index=0,I.sibling=null,I}function i(I,E,R){return I.index=R,t?(R=I.alternate,R!==null?(R=R.index,R<E?(I.flags|=2,E):R):(I.flags|=2,E)):(I.flags|=1048576,E)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function c(I,E,R,F){return E===null||E.tag!==6?(E=ch(R,I.mode,F),E.return=I,E):(E=s(E,R),E.return=I,E)}function u(I,E,R,F){var M=R.type;return M===Ji?g(I,E,R.props.children,F,R.key):E!==null&&(E.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===us&&Ng(M)===E.type)?(F=s(E,R.props),F.ref=ya(I,E,R),F.return=I,F):(F=zc(R.type,R.key,R.props,null,I.mode,F),F.ref=ya(I,E,R),F.return=I,F)}function d(I,E,R,F){return E===null||E.tag!==4||E.stateNode.containerInfo!==R.containerInfo||E.stateNode.implementation!==R.implementation?(E=uh(R,I.mode,F),E.return=I,E):(E=s(E,R.children||[]),E.return=I,E)}function g(I,E,R,F,M){return E===null||E.tag!==7?(E=di(R,I.mode,F,M),E.return=I,E):(E=s(E,R),E.return=I,E)}function v(I,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return E=ch(""+E,I.mode,R),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case oc:return R=zc(E.type,E.key,E.props,null,I.mode,R),R.ref=ya(I,null,E),R.return=I,R;case Xi:return E=uh(E,I.mode,R),E.return=I,E;case us:var F=E._init;return v(I,F(E._payload),R)}if(Ia(E)||fa(E))return E=di(E,I.mode,R,null),E.return=I,E;vc(I,E)}return null}function y(I,E,R,F){var M=E!==null?E.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return M!==null?null:c(I,E,""+R,F);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case oc:return R.key===M?u(I,E,R,F):null;case Xi:return R.key===M?d(I,E,R,F):null;case us:return M=R._init,y(I,E,M(R._payload),F)}if(Ia(R)||fa(R))return M!==null?null:g(I,E,R,F,null);vc(I,R)}return null}function N(I,E,R,F,M){if(typeof F=="string"&&F!==""||typeof F=="number")return I=I.get(R)||null,c(E,I,""+F,M);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case oc:return I=I.get(F.key===null?R:F.key)||null,u(E,I,F,M);case Xi:return I=I.get(F.key===null?R:F.key)||null,d(E,I,F,M);case us:var V=F._init;return N(I,E,R,V(F._payload),M)}if(Ia(F)||fa(F))return I=I.get(R)||null,g(E,I,F,M,null);vc(E,F)}return null}function j(I,E,R,F){for(var M=null,V=null,w=E,x=E=0,b=null;w!==null&&x<R.length;x++){w.index>x?(b=w,w=null):b=w.sibling;var T=y(I,w,R[x],F);if(T===null){w===null&&(w=b);break}t&&w&&T.alternate===null&&e(I,w),E=i(T,E,x),V===null?M=T:V.sibling=T,V=T,w=b}if(x===R.length)return n(I,w),Ve&&ri(I,x),M;if(w===null){for(;x<R.length;x++)w=v(I,R[x],F),w!==null&&(E=i(w,E,x),V===null?M=w:V.sibling=w,V=w);return Ve&&ri(I,x),M}for(w=r(I,w);x<R.length;x++)b=N(w,I,x,R[x],F),b!==null&&(t&&b.alternate!==null&&w.delete(b.key===null?x:b.key),E=i(b,E,x),V===null?M=b:V.sibling=b,V=b);return t&&w.forEach(function(C){return e(I,C)}),Ve&&ri(I,x),M}function O(I,E,R,F){var M=fa(R);if(typeof M!="function")throw Error(G(150));if(R=M.call(R),R==null)throw Error(G(151));for(var V=M=null,w=E,x=E=0,b=null,T=R.next();w!==null&&!T.done;x++,T=R.next()){w.index>x?(b=w,w=null):b=w.sibling;var C=y(I,w,T.value,F);if(C===null){w===null&&(w=b);break}t&&w&&C.alternate===null&&e(I,w),E=i(C,E,x),V===null?M=C:V.sibling=C,V=C,w=b}if(T.done)return n(I,w),Ve&&ri(I,x),M;if(w===null){for(;!T.done;x++,T=R.next())T=v(I,T.value,F),T!==null&&(E=i(T,E,x),V===null?M=T:V.sibling=T,V=T);return Ve&&ri(I,x),M}for(w=r(I,w);!T.done;x++,T=R.next())T=N(w,I,x,T.value,F),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?x:T.key),E=i(T,E,x),V===null?M=T:V.sibling=T,V=T);return t&&w.forEach(function(A){return e(I,A)}),Ve&&ri(I,x),M}function z(I,E,R,F){if(typeof R=="object"&&R!==null&&R.type===Ji&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case oc:e:{for(var M=R.key,V=E;V!==null;){if(V.key===M){if(M=R.type,M===Ji){if(V.tag===7){n(I,V.sibling),E=s(V,R.props.children),E.return=I,I=E;break e}}else if(V.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===us&&Ng(M)===V.type){n(I,V.sibling),E=s(V,R.props),E.ref=ya(I,V,R),E.return=I,I=E;break e}n(I,V);break}else e(I,V);V=V.sibling}R.type===Ji?(E=di(R.props.children,I.mode,F,R.key),E.return=I,I=E):(F=zc(R.type,R.key,R.props,null,I.mode,F),F.ref=ya(I,E,R),F.return=I,I=F)}return o(I);case Xi:e:{for(V=R.key;E!==null;){if(E.key===V)if(E.tag===4&&E.stateNode.containerInfo===R.containerInfo&&E.stateNode.implementation===R.implementation){n(I,E.sibling),E=s(E,R.children||[]),E.return=I,I=E;break e}else{n(I,E);break}else e(I,E);E=E.sibling}E=uh(R,I.mode,F),E.return=I,I=E}return o(I);case us:return V=R._init,z(I,E,V(R._payload),F)}if(Ia(R))return j(I,E,R,F);if(fa(R))return O(I,E,R,F);vc(I,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,E!==null&&E.tag===6?(n(I,E.sibling),E=s(E,R),E.return=I,I=E):(n(I,E),E=ch(R,I.mode,F),E.return=I,I=E),o(I)):n(I,E)}return z}var So=Ky(!0),Gy=Ky(!1),uu=Fs(null),du=null,oo=null,xp=null;function _p(){xp=oo=du=null}function wp(t){var e=uu.current;Le(uu),t._currentValue=e}function rf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function yo(t,e){du=t,xp=oo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Xt=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(xp!==t)if(t={context:t,memoizedValue:e,next:null},oo===null){if(du===null)throw Error(G(308));oo=t,du.dependencies={lanes:0,firstContext:t}}else oo=oo.next=t;return e}var ai=null;function bp(t){ai===null?ai=[t]:ai.push(t)}function Qy(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,bp(e)):(n.next=s.next,s.next=n),e.interleaved=n,Or(t,r)}function Or(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ds=!1;function Ep(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ar(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Is(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,_e&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Or(t,n)}return s=r.interleaved,s===null?(e.next=e,bp(r)):(e.next=s.next,s.next=e),r.interleaved=e,Or(t,n)}function Oc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lp(t,n)}}function Sg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hu(t,e,n,r){var s=t.updateQueue;ds=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,c=s.shared.pending;if(c!==null){s.shared.pending=null;var u=c,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var g=t.alternate;g!==null&&(g=g.updateQueue,c=g.lastBaseUpdate,c!==o&&(c===null?g.firstBaseUpdate=d:c.next=d,g.lastBaseUpdate=u))}if(i!==null){var v=s.baseState;o=0,g=d=u=null,c=i;do{var y=c.lane,N=c.eventTime;if((r&y)===y){g!==null&&(g=g.next={eventTime:N,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var j=t,O=c;switch(y=e,N=n,O.tag){case 1:if(j=O.payload,typeof j=="function"){v=j.call(N,v,y);break e}v=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=O.payload,y=typeof j=="function"?j.call(N,v,y):j,y==null)break e;v=Be({},v,y);break e;case 2:ds=!0}}c.callback!==null&&c.lane!==0&&(t.flags|=64,y=s.effects,y===null?s.effects=[c]:y.push(c))}else N={eventTime:N,lane:y,tag:c.tag,payload:c.payload,callback:c.callback,next:null},g===null?(d=g=N,u=v):g=g.next=N,o|=y;if(c=c.next,c===null){if(c=s.shared.pending,c===null)break;y=c,c=y.next,y.next=null,s.lastBaseUpdate=y,s.shared.pending=null}}while(!0);if(g===null&&(u=v),s.baseState=u,s.firstBaseUpdate=d,s.lastBaseUpdate=g,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);vi|=o,t.lanes=o,t.memoizedState=v}}function kg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(G(191,s));s.call(r)}}}var Il={},rr=Fs(Il),ol=Fs(Il),al=Fs(Il);function li(t){if(t===Il)throw Error(G(174));return t}function Tp(t,e){switch(je(al,e),je(ol,t),je(rr,Il),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Mh(e,t)}Le(rr),je(rr,e)}function ko(){Le(rr),Le(ol),Le(al)}function Xy(t){li(al.current);var e=li(rr.current),n=Mh(e,t.type);e!==n&&(je(ol,t),je(rr,n))}function Ip(t){ol.current===t&&(Le(rr),Le(ol))}var ze=Fs(0);function fu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rh=[];function Np(){for(var t=0;t<rh.length;t++)rh[t]._workInProgressVersionPrimary=null;rh.length=0}var Lc=Br.ReactCurrentDispatcher,sh=Br.ReactCurrentBatchConfig,gi=0,$e=null,st=null,dt=null,pu=!1,Ua=!1,ll=0,dE=0;function At(){throw Error(G(321))}function Sp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function kp(t,e,n,r,s,i){if(gi=i,$e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Lc.current=t===null||t.memoizedState===null?mE:gE,t=n(r,s),Ua){i=0;do{if(Ua=!1,ll=0,25<=i)throw Error(G(301));i+=1,dt=st=null,e.updateQueue=null,Lc.current=vE,t=n(r,s)}while(Ua)}if(Lc.current=mu,e=st!==null&&st.next!==null,gi=0,dt=st=$e=null,pu=!1,e)throw Error(G(300));return t}function Cp(){var t=ll!==0;return ll=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?$e.memoizedState=dt=t:dt=dt.next=t,dt}function Nn(){if(st===null){var t=$e.alternate;t=t!==null?t.memoizedState:null}else t=st.next;var e=dt===null?$e.memoizedState:dt.next;if(e!==null)dt=e,st=t;else{if(t===null)throw Error(G(310));st=t,t={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},dt===null?$e.memoizedState=dt=t:dt=dt.next=t}return dt}function cl(t,e){return typeof e=="function"?e(t):e}function ih(t){var e=Nn(),n=e.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=t;var r=st,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var c=o=null,u=null,d=i;do{var g=d.lane;if((gi&g)===g)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var v={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(c=u=v,o=r):u=u.next=v,$e.lanes|=g,vi|=g}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=c,$n(r,e.memoizedState)||(Xt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,$e.lanes|=i,vi|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function oh(t){var e=Nn(),n=e.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);$n(i,e.memoizedState)||(Xt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Jy(){}function Zy(t,e){var n=$e,r=Nn(),s=e(),i=!$n(r.memoizedState,s);if(i&&(r.memoizedState=s,Xt=!0),r=r.queue,Ap(nx.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||dt!==null&&dt.memoizedState.tag&1){if(n.flags|=2048,ul(9,tx.bind(null,n,r,s,e),void 0,null),ht===null)throw Error(G(349));gi&30||ex(n,e,s)}return s}function ex(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function tx(t,e,n,r){e.value=n,e.getSnapshot=r,rx(e)&&sx(t)}function nx(t,e,n){return n(function(){rx(e)&&sx(t)})}function rx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function sx(t){var e=Or(t,1);e!==null&&zn(e,t,1,-1)}function Cg(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cl,lastRenderedState:t},e.queue=t,t=t.dispatch=pE.bind(null,$e,t),[e.memoizedState,t]}function ul(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ix(){return Nn().memoizedState}function Mc(t,e,n,r){var s=Zn();$e.flags|=t,s.memoizedState=ul(1|e,n,void 0,r===void 0?null:r)}function Qu(t,e,n,r){var s=Nn();r=r===void 0?null:r;var i=void 0;if(st!==null){var o=st.memoizedState;if(i=o.destroy,r!==null&&Sp(r,o.deps)){s.memoizedState=ul(e,n,i,r);return}}$e.flags|=t,s.memoizedState=ul(1|e,n,i,r)}function Ag(t,e){return Mc(8390656,8,t,e)}function Ap(t,e){return Qu(2048,8,t,e)}function ox(t,e){return Qu(4,2,t,e)}function ax(t,e){return Qu(4,4,t,e)}function lx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cx(t,e,n){return n=n!=null?n.concat([t]):null,Qu(4,4,lx.bind(null,e,t),n)}function Rp(){}function ux(t,e){var n=Nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function dx(t,e){var n=Nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function hx(t,e,n){return gi&21?($n(n,e)||(n=vy(),$e.lanes|=n,vi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Xt=!0),t.memoizedState=n)}function hE(t,e){var n=ke;ke=n!==0&&4>n?n:4,t(!0);var r=sh.transition;sh.transition={};try{t(!1),e()}finally{ke=n,sh.transition=r}}function fx(){return Nn().memoizedState}function fE(t,e,n){var r=Ss(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},px(t))mx(e,n);else if(n=Qy(t,e,n,r),n!==null){var s=$t();zn(n,t,r,s),gx(n,e,r)}}function pE(t,e,n){var r=Ss(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(px(t))mx(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,c=i(o,n);if(s.hasEagerState=!0,s.eagerState=c,$n(c,o)){var u=e.interleaved;u===null?(s.next=s,bp(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Qy(t,e,s,r),n!==null&&(s=$t(),zn(n,t,r,s),gx(n,e,r))}}function px(t){var e=t.alternate;return t===$e||e!==null&&e===$e}function mx(t,e){Ua=pu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function gx(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lp(t,n)}}var mu={readContext:In,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useInsertionEffect:At,useLayoutEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useMutableSource:At,useSyncExternalStore:At,useId:At,unstable_isNewReconciler:!1},mE={readContext:In,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:Ag,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Mc(4194308,4,lx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Mc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Mc(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Zn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=fE.bind(null,$e,t),[r.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:Cg,useDebugValue:Rp,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=Cg(!1),e=t[0];return t=hE.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=$e,s=Zn();if(Ve){if(n===void 0)throw Error(G(407));n=n()}else{if(n=e(),ht===null)throw Error(G(349));gi&30||ex(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Ag(nx.bind(null,r,i,t),[t]),r.flags|=2048,ul(9,tx.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Zn(),e=ht.identifierPrefix;if(Ve){var n=Nr,r=Ir;n=(r&~(1<<32-Un(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ll++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gE={readContext:In,useCallback:ux,useContext:In,useEffect:Ap,useImperativeHandle:cx,useInsertionEffect:ox,useLayoutEffect:ax,useMemo:dx,useReducer:ih,useRef:ix,useState:function(){return ih(cl)},useDebugValue:Rp,useDeferredValue:function(t){var e=Nn();return hx(e,st.memoizedState,t)},useTransition:function(){var t=ih(cl)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:Jy,useSyncExternalStore:Zy,useId:fx,unstable_isNewReconciler:!1},vE={readContext:In,useCallback:ux,useContext:In,useEffect:Ap,useImperativeHandle:cx,useInsertionEffect:ox,useLayoutEffect:ax,useMemo:dx,useReducer:oh,useRef:ix,useState:function(){return oh(cl)},useDebugValue:Rp,useDeferredValue:function(t){var e=Nn();return st===null?e.memoizedState=t:hx(e,st.memoizedState,t)},useTransition:function(){var t=oh(cl)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:Jy,useSyncExternalStore:Zy,useId:fx,unstable_isNewReconciler:!1};function Mn(t,e){if(t&&t.defaultProps){e=Be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function sf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yu={isMounted:function(t){return(t=t._reactInternals)?Si(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=$t(),s=Ss(t),i=Ar(r,s);i.payload=e,n!=null&&(i.callback=n),e=Is(t,i,s),e!==null&&(zn(e,t,s,r),Oc(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=$t(),s=Ss(t),i=Ar(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Is(t,i,s),e!==null&&(zn(e,t,s,r),Oc(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),r=Ss(t),s=Ar(n,r);s.tag=2,e!=null&&(s.callback=e),e=Is(t,s,r),e!==null&&(zn(e,t,r,n),Oc(e,t,r))}};function Rg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!nl(n,r)||!nl(s,i):!0}function vx(t,e,n){var r=!1,s=js,i=e.contextType;return typeof i=="object"&&i!==null?i=In(i):(s=Zt(e)?pi:Lt.current,r=e.contextTypes,i=(r=r!=null)?Io(t,s):js),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Pg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Yu.enqueueReplaceState(e,e.state,null)}function of(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Ep(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=In(i):(i=Zt(e)?pi:Lt.current,s.context=Io(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(sf(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Yu.enqueueReplaceState(s,s.state,null),hu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Co(t,e){try{var n="",r=e;do n+=H1(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function ah(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function af(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yE=typeof WeakMap=="function"?WeakMap:Map;function yx(t,e,n){n=Ar(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){vu||(vu=!0,vf=r),af(t,e)},n}function xx(t,e,n){n=Ar(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){af(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){af(t,e),typeof r!="function"&&(Ns===null?Ns=new Set([this]):Ns.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new yE;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=PE.bind(null,t,e,n),e.then(t,t))}function Dg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Og(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ar(-1,1),e.tag=2,Is(n,e,1))),n.lanes|=1),t)}var xE=Br.ReactCurrentOwner,Xt=!1;function zt(t,e,n,r){e.child=t===null?Gy(e,null,n,r):So(e,t.child,n,r)}function Lg(t,e,n,r,s){n=n.render;var i=e.ref;return yo(e,s),r=kp(t,e,n,r,i,s),n=Cp(),t!==null&&!Xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Lr(t,e,s)):(Ve&&n&&gp(e),e.flags|=1,zt(t,e,r,s),e.child)}function Mg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Fp(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,_x(t,e,i,r,s)):(t=zc(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:nl,n(o,r)&&t.ref===e.ref)return Lr(t,e,s)}return e.flags|=1,t=ks(i,r),t.ref=e.ref,t.return=e,e.child=t}function _x(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(nl(i,r)&&t.ref===e.ref)if(Xt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Xt=!0);else return e.lanes=t.lanes,Lr(t,e,s)}return lf(t,e,n,r,s)}function wx(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(lo,cn),cn|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,je(lo,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,je(lo,cn),cn|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,je(lo,cn),cn|=r;return zt(t,e,s,n),e.child}function bx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function lf(t,e,n,r,s){var i=Zt(n)?pi:Lt.current;return i=Io(e,i),yo(e,s),n=kp(t,e,n,r,i,s),r=Cp(),t!==null&&!Xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Lr(t,e,s)):(Ve&&r&&gp(e),e.flags|=1,zt(t,e,n,s),e.child)}function Vg(t,e,n,r,s){if(Zt(n)){var i=!0;au(e)}else i=!1;if(yo(e,s),e.stateNode===null)Vc(t,e),vx(e,n,r),of(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,c=e.memoizedProps;o.props=c;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=In(d):(d=Zt(n)?pi:Lt.current,d=Io(e,d));var g=n.getDerivedStateFromProps,v=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==r||u!==d)&&Pg(e,o,r,d),ds=!1;var y=e.memoizedState;o.state=y,hu(e,r,o,s),u=e.memoizedState,c!==r||y!==u||Jt.current||ds?(typeof g=="function"&&(sf(e,n,g,r),u=e.memoizedState),(c=ds||Rg(e,n,c,r,y,u,d))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=c):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Yy(t,e),c=e.memoizedProps,d=e.type===e.elementType?c:Mn(e.type,c),o.props=d,v=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=In(u):(u=Zt(n)?pi:Lt.current,u=Io(e,u));var N=n.getDerivedStateFromProps;(g=typeof N=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==v||y!==u)&&Pg(e,o,r,u),ds=!1,y=e.memoizedState,o.state=y,hu(e,r,o,s);var j=e.memoizedState;c!==v||y!==j||Jt.current||ds?(typeof N=="function"&&(sf(e,n,N,r),j=e.memoizedState),(d=ds||Rg(e,n,d,r,y,j,u)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,j,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,j,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=j),o.props=r,o.state=j,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||c===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return cf(t,e,n,r,i,s)}function cf(t,e,n,r,s,i){bx(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Eg(e,n,!1),Lr(t,e,i);r=e.stateNode,xE.current=e;var c=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=So(e,t.child,null,i),e.child=So(e,null,c,i)):zt(t,e,c,i),e.memoizedState=r.state,s&&Eg(e,n,!0),e.child}function Ex(t){var e=t.stateNode;e.pendingContext?bg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bg(t,e.context,!1),Tp(t,e.containerInfo)}function Fg(t,e,n,r,s){return No(),yp(s),e.flags|=256,zt(t,e,n,r),e.child}var uf={dehydrated:null,treeContext:null,retryLane:0};function df(t){return{baseLanes:t,cachePool:null,transitions:null}}function Tx(t,e,n){var r=e.pendingProps,s=ze.current,i=!1,o=(e.flags&128)!==0,c;if((c=o)||(c=t!==null&&t.memoizedState===null?!1:(s&2)!==0),c?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),je(ze,s&1),t===null)return nf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Zu(o,r,0,null),t=di(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=df(n),e.memoizedState=uf,t):Pp(e,o));if(s=t.memoizedState,s!==null&&(c=s.dehydrated,c!==null))return _E(t,e,o,r,c,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,c=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ks(s,u),r.subtreeFlags=s.subtreeFlags&14680064),c!==null?i=ks(c,i):(i=di(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?df(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=uf,r}return i=t.child,t=i.sibling,r=ks(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Pp(t,e){return e=Zu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yc(t,e,n,r){return r!==null&&yp(r),So(e,t.child,null,n),t=Pp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _E(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=ah(Error(G(422))),yc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Zu({mode:"visible",children:r.children},s,0,null),i=di(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&So(e,t.child,null,o),e.child.memoizedState=df(o),e.memoizedState=uf,i);if(!(e.mode&1))return yc(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var c=r.dgst;return r=c,i=Error(G(419)),r=ah(i,r,void 0),yc(t,e,o,r)}if(c=(o&t.childLanes)!==0,Xt||c){if(r=ht,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Or(t,s),zn(r,t,s,-1))}return Vp(),r=ah(Error(G(421))),yc(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=jE.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,un=Ts(s.nextSibling),hn=e,Ve=!0,Fn=null,t!==null&&(xn[_n++]=Ir,xn[_n++]=Nr,xn[_n++]=mi,Ir=t.id,Nr=t.overflow,mi=e),e=Pp(e,r.children),e.flags|=4096,e)}function Ug(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),rf(t.return,e,n)}function lh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Ix(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(zt(t,e,r.children,n),r=ze.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ug(t,n,e);else if(t.tag===19)Ug(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(je(ze,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&fu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),lh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&fu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}lh(e,!0,n,null,i);break;case"together":lh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Vc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Lr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(G(153));if(e.child!==null){for(t=e.child,n=ks(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ks(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function wE(t,e,n){switch(e.tag){case 3:Ex(e),No();break;case 5:Xy(e);break;case 1:Zt(e.type)&&au(e);break;case 4:Tp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;je(uu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(je(ze,ze.current&1),e.flags|=128,null):n&e.child.childLanes?Tx(t,e,n):(je(ze,ze.current&1),t=Lr(t,e,n),t!==null?t.sibling:null);je(ze,ze.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ix(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),je(ze,ze.current),r)break;return null;case 22:case 23:return e.lanes=0,wx(t,e,n)}return Lr(t,e,n)}var Nx,hf,Sx,kx;Nx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hf=function(){};Sx=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,li(rr.current);var i=null;switch(n){case"input":s=jh(t,s),r=jh(t,r),i=[];break;case"select":s=Be({},s,{value:void 0}),r=Be({},r,{value:void 0}),i=[];break;case"textarea":s=Lh(t,s),r=Lh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=iu)}Vh(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var c=s[d];for(o in c)c.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Qa.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(c=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&u!==c&&(u!=null||c!=null))if(d==="style")if(c){for(o in c)!c.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&c[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,c=c?c.__html:void 0,u!=null&&c!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Qa.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Oe("scroll",t),i||c===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};kx=function(t,e,n,r){n!==r&&(e.flags|=4)};function xa(t,e){if(!Ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function bE(t,e,n){var r=e.pendingProps;switch(vp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(e),null;case 1:return Zt(e.type)&&ou(),Rt(e),null;case 3:return r=e.stateNode,ko(),Le(Jt),Le(Lt),Np(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(gc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(_f(Fn),Fn=null))),hf(t,e),Rt(e),null;case 5:Ip(e);var s=li(al.current);if(n=e.type,t!==null&&e.stateNode!=null)Sx(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(G(166));return Rt(e),null}if(t=li(rr.current),gc(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[er]=e,r[il]=i,t=(e.mode&1)!==0,n){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(s=0;s<Sa.length;s++)Oe(Sa[s],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":Qm(r,i),Oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Oe("invalid",r);break;case"textarea":Xm(r,i),Oe("invalid",r)}Vh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var c=i[o];o==="children"?typeof c=="string"?r.textContent!==c&&(i.suppressHydrationWarning!==!0&&mc(r.textContent,c,t),s=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(i.suppressHydrationWarning!==!0&&mc(r.textContent,c,t),s=["children",""+c]):Qa.hasOwnProperty(o)&&c!=null&&o==="onScroll"&&Oe("scroll",r)}switch(n){case"input":ac(r),Ym(r,i,!0);break;case"textarea":ac(r),Jm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=iu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ny(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[er]=e,t[il]=r,Nx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Fh(n,r),n){case"dialog":Oe("cancel",t),Oe("close",t),s=r;break;case"iframe":case"object":case"embed":Oe("load",t),s=r;break;case"video":case"audio":for(s=0;s<Sa.length;s++)Oe(Sa[s],t);s=r;break;case"source":Oe("error",t),s=r;break;case"img":case"image":case"link":Oe("error",t),Oe("load",t),s=r;break;case"details":Oe("toggle",t),s=r;break;case"input":Qm(t,r),s=jh(t,r),Oe("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Be({},r,{value:void 0}),Oe("invalid",t);break;case"textarea":Xm(t,r),s=Lh(t,r),Oe("invalid",t);break;default:s=r}Vh(n,s),c=s;for(i in c)if(c.hasOwnProperty(i)){var u=c[i];i==="style"?iy(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ry(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ya(t,u):typeof u=="number"&&Ya(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Qa.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Oe("scroll",t):u!=null&&np(t,i,u,o))}switch(n){case"input":ac(t),Ym(t,r,!1);break;case"textarea":ac(t),Jm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ps(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?po(t,!!r.multiple,i,!1):r.defaultValue!=null&&po(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=iu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Rt(e),null;case 6:if(t&&e.stateNode!=null)kx(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(G(166));if(n=li(al.current),li(rr.current),gc(e)){if(r=e.stateNode,n=e.memoizedProps,r[er]=e,(i=r.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:mc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&mc(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[er]=e,e.stateNode=r}return Rt(e),null;case 13:if(Le(ze),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ve&&un!==null&&e.mode&1&&!(e.flags&128))Wy(),No(),e.flags|=98560,i=!1;else if(i=gc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(G(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(G(317));i[er]=e}else No(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Rt(e),i=!1}else Fn!==null&&(_f(Fn),Fn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ze.current&1?ot===0&&(ot=3):Vp())),e.updateQueue!==null&&(e.flags|=4),Rt(e),null);case 4:return ko(),hf(t,e),t===null&&rl(e.stateNode.containerInfo),Rt(e),null;case 10:return wp(e.type._context),Rt(e),null;case 17:return Zt(e.type)&&ou(),Rt(e),null;case 19:if(Le(ze),i=e.memoizedState,i===null)return Rt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)xa(i,!1);else{if(ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=fu(t),o!==null){for(e.flags|=128,xa(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return je(ze,ze.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ye()>Ao&&(e.flags|=128,r=!0,xa(i,!1),e.lanes=4194304)}else{if(!r)if(t=fu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xa(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ve)return Rt(e),null}else 2*Ye()-i.renderingStartTime>Ao&&n!==1073741824&&(e.flags|=128,r=!0,xa(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ye(),e.sibling=null,n=ze.current,je(ze,r?n&1|2:n&1),e):(Rt(e),null);case 22:case 23:return Mp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?cn&1073741824&&(Rt(e),e.subtreeFlags&6&&(e.flags|=8192)):Rt(e),null;case 24:return null;case 25:return null}throw Error(G(156,e.tag))}function EE(t,e){switch(vp(e),e.tag){case 1:return Zt(e.type)&&ou(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ko(),Le(Jt),Le(Lt),Np(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ip(e),null;case 13:if(Le(ze),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(G(340));No()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Le(ze),null;case 4:return ko(),null;case 10:return wp(e.type._context),null;case 22:case 23:return Mp(),null;case 24:return null;default:return null}}var xc=!1,Dt=!1,TE=typeof WeakSet=="function"?WeakSet:Set,Z=null;function ao(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){We(t,e,r)}else n.current=null}function ff(t,e,n){try{n()}catch(r){We(t,e,r)}}var zg=!1;function IE(t,e){if(Qh=nu,t=jy(),mp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,c=-1,u=-1,d=0,g=0,v=t,y=null;t:for(;;){for(var N;v!==n||s!==0&&v.nodeType!==3||(c=o+s),v!==i||r!==0&&v.nodeType!==3||(u=o+r),v.nodeType===3&&(o+=v.nodeValue.length),(N=v.firstChild)!==null;)y=v,v=N;for(;;){if(v===t)break t;if(y===n&&++d===s&&(c=o),y===i&&++g===r&&(u=o),(N=v.nextSibling)!==null)break;v=y,y=v.parentNode}v=N}n=c===-1||u===-1?null:{start:c,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yh={focusedElem:t,selectionRange:n},nu=!1,Z=e;Z!==null;)if(e=Z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Z=t;else for(;Z!==null;){e=Z;try{var j=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var O=j.memoizedProps,z=j.memoizedState,I=e.stateNode,E=I.getSnapshotBeforeUpdate(e.elementType===e.type?O:Mn(e.type,O),z);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(F){We(e,e.return,F)}if(t=e.sibling,t!==null){t.return=e.return,Z=t;break}Z=e.return}return j=zg,zg=!1,j}function za(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&ff(e,n,i)}s=s.next}while(s!==r)}}function Xu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function pf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Cx(t){var e=t.alternate;e!==null&&(t.alternate=null,Cx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[er],delete e[il],delete e[Zh],delete e[aE],delete e[lE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ax(t){return t.tag===5||t.tag===3||t.tag===4}function $g(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ax(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=iu));else if(r!==4&&(t=t.child,t!==null))for(mf(t,e,n),t=t.sibling;t!==null;)mf(t,e,n),t=t.sibling}function gf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(gf(t,e,n),t=t.sibling;t!==null;)gf(t,e,n),t=t.sibling}var yt=null,Vn=!1;function os(t,e,n){for(n=n.child;n!==null;)Rx(t,e,n),n=n.sibling}function Rx(t,e,n){if(nr&&typeof nr.onCommitFiberUnmount=="function")try{nr.onCommitFiberUnmount(Bu,n)}catch{}switch(n.tag){case 5:Dt||ao(n,e);case 6:var r=yt,s=Vn;yt=null,os(t,e,n),yt=r,Vn=s,yt!==null&&(Vn?(t=yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):yt.removeChild(n.stateNode));break;case 18:yt!==null&&(Vn?(t=yt,n=n.stateNode,t.nodeType===8?th(t.parentNode,n):t.nodeType===1&&th(t,n),el(t)):th(yt,n.stateNode));break;case 4:r=yt,s=Vn,yt=n.stateNode.containerInfo,Vn=!0,os(t,e,n),yt=r,Vn=s;break;case 0:case 11:case 14:case 15:if(!Dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&ff(n,e,o),s=s.next}while(s!==r)}os(t,e,n);break;case 1:if(!Dt&&(ao(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){We(n,e,c)}os(t,e,n);break;case 21:os(t,e,n);break;case 22:n.mode&1?(Dt=(r=Dt)||n.memoizedState!==null,os(t,e,n),Dt=r):os(t,e,n);break;default:os(t,e,n)}}function Bg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new TE),e.forEach(function(r){var s=DE.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,c=o;e:for(;c!==null;){switch(c.tag){case 5:yt=c.stateNode,Vn=!1;break e;case 3:yt=c.stateNode.containerInfo,Vn=!0;break e;case 4:yt=c.stateNode.containerInfo,Vn=!0;break e}c=c.return}if(yt===null)throw Error(G(160));Rx(i,o,s),yt=null,Vn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(d){We(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Px(e,t),e=e.sibling}function Px(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ln(e,t),Yn(t),r&4){try{za(3,t,t.return),Xu(3,t)}catch(O){We(t,t.return,O)}try{za(5,t,t.return)}catch(O){We(t,t.return,O)}}break;case 1:Ln(e,t),Yn(t),r&512&&n!==null&&ao(n,n.return);break;case 5:if(Ln(e,t),Yn(t),r&512&&n!==null&&ao(n,n.return),t.flags&32){var s=t.stateNode;try{Ya(s,"")}catch(O){We(t,t.return,O)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,c=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{c==="input"&&i.type==="radio"&&i.name!=null&&ey(s,i),Fh(c,o);var d=Fh(c,i);for(o=0;o<u.length;o+=2){var g=u[o],v=u[o+1];g==="style"?iy(s,v):g==="dangerouslySetInnerHTML"?ry(s,v):g==="children"?Ya(s,v):np(s,g,v,d)}switch(c){case"input":Dh(s,i);break;case"textarea":ty(s,i);break;case"select":var y=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var N=i.value;N!=null?po(s,!!i.multiple,N,!1):y!==!!i.multiple&&(i.defaultValue!=null?po(s,!!i.multiple,i.defaultValue,!0):po(s,!!i.multiple,i.multiple?[]:"",!1))}s[il]=i}catch(O){We(t,t.return,O)}}break;case 6:if(Ln(e,t),Yn(t),r&4){if(t.stateNode===null)throw Error(G(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(O){We(t,t.return,O)}}break;case 3:if(Ln(e,t),Yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{el(e.containerInfo)}catch(O){We(t,t.return,O)}break;case 4:Ln(e,t),Yn(t);break;case 13:Ln(e,t),Yn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Op=Ye())),r&4&&Bg(t);break;case 22:if(g=n!==null&&n.memoizedState!==null,t.mode&1?(Dt=(d=Dt)||g,Ln(e,t),Dt=d):Ln(e,t),Yn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!g&&t.mode&1)for(Z=t,g=t.child;g!==null;){for(v=Z=g;Z!==null;){switch(y=Z,N=y.child,y.tag){case 0:case 11:case 14:case 15:za(4,y,y.return);break;case 1:ao(y,y.return);var j=y.stateNode;if(typeof j.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,j.props=e.memoizedProps,j.state=e.memoizedState,j.componentWillUnmount()}catch(O){We(r,n,O)}}break;case 5:ao(y,y.return);break;case 22:if(y.memoizedState!==null){Hg(v);continue}}N!==null?(N.return=y,Z=N):Hg(v)}g=g.sibling}e:for(g=null,v=t;;){if(v.tag===5){if(g===null){g=v;try{s=v.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(c=v.stateNode,u=v.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,c.style.display=sy("display",o))}catch(O){We(t,t.return,O)}}}else if(v.tag===6){if(g===null)try{v.stateNode.nodeValue=d?"":v.memoizedProps}catch(O){We(t,t.return,O)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===t)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===t)break e;for(;v.sibling===null;){if(v.return===null||v.return===t)break e;g===v&&(g=null),v=v.return}g===v&&(g=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Ln(e,t),Yn(t),r&4&&Bg(t);break;case 21:break;default:Ln(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ax(n)){var r=n;break e}n=n.return}throw Error(G(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Ya(s,""),r.flags&=-33);var i=$g(t);gf(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,c=$g(t);mf(t,c,o);break;default:throw Error(G(161))}}catch(u){We(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function NE(t,e,n){Z=t,jx(t)}function jx(t,e,n){for(var r=(t.mode&1)!==0;Z!==null;){var s=Z,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||xc;if(!o){var c=s.alternate,u=c!==null&&c.memoizedState!==null||Dt;c=xc;var d=Dt;if(xc=o,(Dt=u)&&!d)for(Z=s;Z!==null;)o=Z,u=o.child,o.tag===22&&o.memoizedState!==null?Wg(s):u!==null?(u.return=o,Z=u):Wg(s);for(;i!==null;)Z=i,jx(i),i=i.sibling;Z=s,xc=c,Dt=d}qg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,Z=i):qg(t)}}function qg(t){for(;Z!==null;){var e=Z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Dt||Xu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Dt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Mn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&kg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kg(e,o,n)}break;case 5:var c=e.stateNode;if(n===null&&e.flags&4){n=c;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var v=g.dehydrated;v!==null&&el(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}Dt||e.flags&512&&pf(e)}catch(y){We(e,e.return,y)}}if(e===t){Z=null;break}if(n=e.sibling,n!==null){n.return=e.return,Z=n;break}Z=e.return}}function Hg(t){for(;Z!==null;){var e=Z;if(e===t){Z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Z=n;break}Z=e.return}}function Wg(t){for(;Z!==null;){var e=Z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xu(4,e)}catch(u){We(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){We(e,s,u)}}var i=e.return;try{pf(e)}catch(u){We(e,i,u)}break;case 5:var o=e.return;try{pf(e)}catch(u){We(e,o,u)}}}catch(u){We(e,e.return,u)}if(e===t){Z=null;break}var c=e.sibling;if(c!==null){c.return=e.return,Z=c;break}Z=e.return}}var SE=Math.ceil,gu=Br.ReactCurrentDispatcher,jp=Br.ReactCurrentOwner,En=Br.ReactCurrentBatchConfig,_e=0,ht=null,et=null,wt=0,cn=0,lo=Fs(0),ot=0,dl=null,vi=0,Ju=0,Dp=0,$a=null,Qt=null,Op=0,Ao=1/0,br=null,vu=!1,vf=null,Ns=null,_c=!1,xs=null,yu=0,Ba=0,yf=null,Fc=-1,Uc=0;function $t(){return _e&6?Ye():Fc!==-1?Fc:Fc=Ye()}function Ss(t){return t.mode&1?_e&2&&wt!==0?wt&-wt:uE.transition!==null?(Uc===0&&(Uc=vy()),Uc):(t=ke,t!==0||(t=window.event,t=t===void 0?16:Ty(t.type)),t):1}function zn(t,e,n,r){if(50<Ba)throw Ba=0,yf=null,Error(G(185));bl(t,n,r),(!(_e&2)||t!==ht)&&(t===ht&&(!(_e&2)&&(Ju|=n),ot===4&&fs(t,wt)),en(t,r),n===1&&_e===0&&!(e.mode&1)&&(Ao=Ye()+500,Gu&&Us()))}function en(t,e){var n=t.callbackNode;ub(t,e);var r=tu(t,t===ht?wt:0);if(r===0)n!==null&&tg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&tg(n),e===1)t.tag===0?cE(Kg.bind(null,t)):By(Kg.bind(null,t)),iE(function(){!(_e&6)&&Us()}),n=null;else{switch(yy(r)){case 1:n=ap;break;case 4:n=my;break;case 16:n=eu;break;case 536870912:n=gy;break;default:n=eu}n=zx(n,Dx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Dx(t,e){if(Fc=-1,Uc=0,_e&6)throw Error(G(327));var n=t.callbackNode;if(xo()&&t.callbackNode!==n)return null;var r=tu(t,t===ht?wt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=xu(t,r);else{e=r;var s=_e;_e|=2;var i=Lx();(ht!==t||wt!==e)&&(br=null,Ao=Ye()+500,ui(t,e));do try{AE();break}catch(c){Ox(t,c)}while(!0);_p(),gu.current=i,_e=s,et!==null?e=0:(ht=null,wt=0,e=ot)}if(e!==0){if(e===2&&(s=qh(t),s!==0&&(r=s,e=xf(t,s))),e===1)throw n=dl,ui(t,0),fs(t,r),en(t,Ye()),n;if(e===6)fs(t,r);else{if(s=t.current.alternate,!(r&30)&&!kE(s)&&(e=xu(t,r),e===2&&(i=qh(t),i!==0&&(r=i,e=xf(t,i))),e===1))throw n=dl,ui(t,0),fs(t,r),en(t,Ye()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(G(345));case 2:si(t,Qt,br);break;case 3:if(fs(t,r),(r&130023424)===r&&(e=Op+500-Ye(),10<e)){if(tu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){$t(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Jh(si.bind(null,t,Qt,br),e);break}si(t,Qt,br);break;case 4:if(fs(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Un(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*SE(r/1960))-r,10<r){t.timeoutHandle=Jh(si.bind(null,t,Qt,br),r);break}si(t,Qt,br);break;case 5:si(t,Qt,br);break;default:throw Error(G(329))}}}return en(t,Ye()),t.callbackNode===n?Dx.bind(null,t):null}function xf(t,e){var n=$a;return t.current.memoizedState.isDehydrated&&(ui(t,e).flags|=256),t=xu(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&_f(e)),t}function _f(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function kE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!$n(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fs(t,e){for(e&=~Dp,e&=~Ju,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Un(e),r=1<<n;t[n]=-1,e&=~r}}function Kg(t){if(_e&6)throw Error(G(327));xo();var e=tu(t,0);if(!(e&1))return en(t,Ye()),null;var n=xu(t,e);if(t.tag!==0&&n===2){var r=qh(t);r!==0&&(e=r,n=xf(t,r))}if(n===1)throw n=dl,ui(t,0),fs(t,e),en(t,Ye()),n;if(n===6)throw Error(G(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,si(t,Qt,br),en(t,Ye()),null}function Lp(t,e){var n=_e;_e|=1;try{return t(e)}finally{_e=n,_e===0&&(Ao=Ye()+500,Gu&&Us())}}function yi(t){xs!==null&&xs.tag===0&&!(_e&6)&&xo();var e=_e;_e|=1;var n=En.transition,r=ke;try{if(En.transition=null,ke=1,t)return t()}finally{ke=r,En.transition=n,_e=e,!(_e&6)&&Us()}}function Mp(){cn=lo.current,Le(lo)}function ui(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sE(n)),et!==null)for(n=et.return;n!==null;){var r=n;switch(vp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ou();break;case 3:ko(),Le(Jt),Le(Lt),Np();break;case 5:Ip(r);break;case 4:ko();break;case 13:Le(ze);break;case 19:Le(ze);break;case 10:wp(r.type._context);break;case 22:case 23:Mp()}n=n.return}if(ht=t,et=t=ks(t.current,null),wt=cn=e,ot=0,dl=null,Dp=Ju=vi=0,Qt=$a=null,ai!==null){for(e=0;e<ai.length;e++)if(n=ai[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}ai=null}return t}function Ox(t,e){do{var n=et;try{if(_p(),Lc.current=mu,pu){for(var r=$e.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}pu=!1}if(gi=0,dt=st=$e=null,Ua=!1,ll=0,jp.current=null,n===null||n.return===null){ot=1,dl=e,et=null;break}e:{var i=t,o=n.return,c=n,u=e;if(e=wt,c.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,g=c,v=g.tag;if(!(g.mode&1)&&(v===0||v===11||v===15)){var y=g.alternate;y?(g.updateQueue=y.updateQueue,g.memoizedState=y.memoizedState,g.lanes=y.lanes):(g.updateQueue=null,g.memoizedState=null)}var N=Dg(o);if(N!==null){N.flags&=-257,Og(N,o,c,i,e),N.mode&1&&jg(i,d,e),e=N,u=d;var j=e.updateQueue;if(j===null){var O=new Set;O.add(u),e.updateQueue=O}else j.add(u);break e}else{if(!(e&1)){jg(i,d,e),Vp();break e}u=Error(G(426))}}else if(Ve&&c.mode&1){var z=Dg(o);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Og(z,o,c,i,e),yp(Co(u,c));break e}}i=u=Co(u,c),ot!==4&&(ot=2),$a===null?$a=[i]:$a.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var I=yx(i,u,e);Sg(i,I);break e;case 1:c=u;var E=i.type,R=i.stateNode;if(!(i.flags&128)&&(typeof E.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(Ns===null||!Ns.has(R)))){i.flags|=65536,e&=-e,i.lanes|=e;var F=xx(i,c,e);Sg(i,F);break e}}i=i.return}while(i!==null)}Vx(n)}catch(M){e=M,et===n&&n!==null&&(et=n=n.return);continue}break}while(!0)}function Lx(){var t=gu.current;return gu.current=mu,t===null?mu:t}function Vp(){(ot===0||ot===3||ot===2)&&(ot=4),ht===null||!(vi&268435455)&&!(Ju&268435455)||fs(ht,wt)}function xu(t,e){var n=_e;_e|=2;var r=Lx();(ht!==t||wt!==e)&&(br=null,ui(t,e));do try{CE();break}catch(s){Ox(t,s)}while(!0);if(_p(),_e=n,gu.current=r,et!==null)throw Error(G(261));return ht=null,wt=0,ot}function CE(){for(;et!==null;)Mx(et)}function AE(){for(;et!==null&&!tb();)Mx(et)}function Mx(t){var e=Ux(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?Vx(t):et=e,jp.current=null}function Vx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=EE(n,e),n!==null){n.flags&=32767,et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ot=6,et=null;return}}else if(n=bE(n,e,cn),n!==null){et=n;return}if(e=e.sibling,e!==null){et=e;return}et=e=t}while(e!==null);ot===0&&(ot=5)}function si(t,e,n){var r=ke,s=En.transition;try{En.transition=null,ke=1,RE(t,e,n,r)}finally{En.transition=s,ke=r}return null}function RE(t,e,n,r){do xo();while(xs!==null);if(_e&6)throw Error(G(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(G(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(db(t,i),t===ht&&(et=ht=null,wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_c||(_c=!0,zx(eu,function(){return xo(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=En.transition,En.transition=null;var o=ke;ke=1;var c=_e;_e|=4,jp.current=null,IE(t,n),Px(n,t),Xb(Yh),nu=!!Qh,Yh=Qh=null,t.current=n,NE(n),nb(),_e=c,ke=o,En.transition=i}else t.current=n;if(_c&&(_c=!1,xs=t,yu=s),i=t.pendingLanes,i===0&&(Ns=null),ib(n.stateNode),en(t,Ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(vu)throw vu=!1,t=vf,vf=null,t;return yu&1&&t.tag!==0&&xo(),i=t.pendingLanes,i&1?t===yf?Ba++:(Ba=0,yf=t):Ba=0,Us(),null}function xo(){if(xs!==null){var t=yy(yu),e=En.transition,n=ke;try{if(En.transition=null,ke=16>t?16:t,xs===null)var r=!1;else{if(t=xs,xs=null,yu=0,_e&6)throw Error(G(331));var s=_e;for(_e|=4,Z=t.current;Z!==null;){var i=Z,o=i.child;if(Z.flags&16){var c=i.deletions;if(c!==null){for(var u=0;u<c.length;u++){var d=c[u];for(Z=d;Z!==null;){var g=Z;switch(g.tag){case 0:case 11:case 15:za(8,g,i)}var v=g.child;if(v!==null)v.return=g,Z=v;else for(;Z!==null;){g=Z;var y=g.sibling,N=g.return;if(Cx(g),g===d){Z=null;break}if(y!==null){y.return=N,Z=y;break}Z=N}}}var j=i.alternate;if(j!==null){var O=j.child;if(O!==null){j.child=null;do{var z=O.sibling;O.sibling=null,O=z}while(O!==null)}}Z=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,Z=o;else e:for(;Z!==null;){if(i=Z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:za(9,i,i.return)}var I=i.sibling;if(I!==null){I.return=i.return,Z=I;break e}Z=i.return}}var E=t.current;for(Z=E;Z!==null;){o=Z;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,Z=R;else e:for(o=E;Z!==null;){if(c=Z,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Xu(9,c)}}catch(M){We(c,c.return,M)}if(c===o){Z=null;break e}var F=c.sibling;if(F!==null){F.return=c.return,Z=F;break e}Z=c.return}}if(_e=s,Us(),nr&&typeof nr.onPostCommitFiberRoot=="function")try{nr.onPostCommitFiberRoot(Bu,t)}catch{}r=!0}return r}finally{ke=n,En.transition=e}}return!1}function Gg(t,e,n){e=Co(n,e),e=yx(t,e,1),t=Is(t,e,1),e=$t(),t!==null&&(bl(t,1,e),en(t,e))}function We(t,e,n){if(t.tag===3)Gg(t,t,n);else for(;e!==null;){if(e.tag===3){Gg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ns===null||!Ns.has(r))){t=Co(n,t),t=xx(e,t,1),e=Is(e,t,1),t=$t(),e!==null&&(bl(e,1,t),en(e,t));break}}e=e.return}}function PE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,ht===t&&(wt&n)===n&&(ot===4||ot===3&&(wt&130023424)===wt&&500>Ye()-Op?ui(t,0):Dp|=n),en(t,e)}function Fx(t,e){e===0&&(t.mode&1?(e=uc,uc<<=1,!(uc&130023424)&&(uc=4194304)):e=1);var n=$t();t=Or(t,e),t!==null&&(bl(t,e,n),en(t,n))}function jE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Fx(t,n)}function DE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(G(314))}r!==null&&r.delete(e),Fx(t,n)}var Ux;Ux=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Xt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Xt=!1,wE(t,e,n);Xt=!!(t.flags&131072)}else Xt=!1,Ve&&e.flags&1048576&&qy(e,cu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Vc(t,e),t=e.pendingProps;var s=Io(e,Lt.current);yo(e,n),s=kp(null,e,r,t,s,n);var i=Cp();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zt(r)?(i=!0,au(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ep(e),s.updater=Yu,e.stateNode=s,s._reactInternals=e,of(e,r,t,n),e=cf(null,e,r,!0,i,n)):(e.tag=0,Ve&&i&&gp(e),zt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Vc(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=LE(r),t=Mn(r,t),s){case 0:e=lf(null,e,r,t,n);break e;case 1:e=Vg(null,e,r,t,n);break e;case 11:e=Lg(null,e,r,t,n);break e;case 14:e=Mg(null,e,r,Mn(r.type,t),n);break e}throw Error(G(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Mn(r,s),lf(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Mn(r,s),Vg(t,e,r,s,n);case 3:e:{if(Ex(e),t===null)throw Error(G(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Yy(t,e),hu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Co(Error(G(423)),e),e=Fg(t,e,r,n,s);break e}else if(r!==s){s=Co(Error(G(424)),e),e=Fg(t,e,r,n,s);break e}else for(un=Ts(e.stateNode.containerInfo.firstChild),hn=e,Ve=!0,Fn=null,n=Gy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(No(),r===s){e=Lr(t,e,n);break e}zt(t,e,r,n)}e=e.child}return e;case 5:return Xy(e),t===null&&nf(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Xh(r,s)?o=null:i!==null&&Xh(r,i)&&(e.flags|=32),bx(t,e),zt(t,e,o,n),e.child;case 6:return t===null&&nf(e),null;case 13:return Tx(t,e,n);case 4:return Tp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=So(e,null,r,n):zt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Mn(r,s),Lg(t,e,r,s,n);case 7:return zt(t,e,e.pendingProps,n),e.child;case 8:return zt(t,e,e.pendingProps.children,n),e.child;case 12:return zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,je(uu,r._currentValue),r._currentValue=o,i!==null)if($n(i.value,o)){if(i.children===s.children&&!Jt.current){e=Lr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var c=i.dependencies;if(c!==null){o=i.child;for(var u=c.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ar(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?u.next=u:(u.next=g.next,g.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),rf(i.return,n,e),c.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(G(341));o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),rf(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}zt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,yo(e,n),s=In(s),r=r(s),e.flags|=1,zt(t,e,r,n),e.child;case 14:return r=e.type,s=Mn(r,e.pendingProps),s=Mn(r.type,s),Mg(t,e,r,s,n);case 15:return _x(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Mn(r,s),Vc(t,e),e.tag=1,Zt(r)?(t=!0,au(e)):t=!1,yo(e,n),vx(e,r,s),of(e,r,s,n),cf(null,e,r,!0,t,n);case 19:return Ix(t,e,n);case 22:return wx(t,e,n)}throw Error(G(156,e.tag))};function zx(t,e){return py(t,e)}function OE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,r){return new OE(t,e,n,r)}function Fp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function LE(t){if(typeof t=="function")return Fp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sp)return 11;if(t===ip)return 14}return 2}function ks(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zc(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Fp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ji:return di(n.children,s,i,e);case rp:o=8,s|=8;break;case Ch:return t=wn(12,n,e,s|2),t.elementType=Ch,t.lanes=i,t;case Ah:return t=wn(13,n,e,s),t.elementType=Ah,t.lanes=i,t;case Rh:return t=wn(19,n,e,s),t.elementType=Rh,t.lanes=i,t;case Xv:return Zu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Qv:o=10;break e;case Yv:o=9;break e;case sp:o=11;break e;case ip:o=14;break e;case us:o=16,r=null;break e}throw Error(G(130,t==null?t:typeof t,""))}return e=wn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function di(t,e,n,r){return t=wn(7,t,r,e),t.lanes=n,t}function Zu(t,e,n,r){return t=wn(22,t,r,e),t.elementType=Xv,t.lanes=n,t.stateNode={isHidden:!1},t}function ch(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function uh(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ME(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qd(0),this.expirationTimes=qd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Up(t,e,n,r,s,i,o,c,u){return t=new ME(t,e,n,c,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=wn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ep(i),t}function VE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function $x(t){if(!t)return js;t=t._reactInternals;e:{if(Si(t)!==t||t.tag!==1)throw Error(G(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(G(171))}if(t.tag===1){var n=t.type;if(Zt(n))return $y(t,n,e)}return e}function Bx(t,e,n,r,s,i,o,c,u){return t=Up(n,r,!0,t,s,i,o,c,u),t.context=$x(null),n=t.current,r=$t(),s=Ss(n),i=Ar(r,s),i.callback=e??null,Is(n,i,s),t.current.lanes=s,bl(t,s,r),en(t,r),t}function ed(t,e,n,r){var s=e.current,i=$t(),o=Ss(s);return n=$x(n),e.context===null?e.context=n:e.pendingContext=n,e=Ar(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Is(s,e,o),t!==null&&(zn(t,s,o,i),Oc(t,s,o)),o}function _u(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zp(t,e){Qg(t,e),(t=t.alternate)&&Qg(t,e)}function FE(){return null}var qx=typeof reportError=="function"?reportError:function(t){console.error(t)};function $p(t){this._internalRoot=t}td.prototype.render=$p.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(G(409));ed(t,e,null,null)};td.prototype.unmount=$p.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yi(function(){ed(null,t,null,null)}),e[Dr]=null}};function td(t){this._internalRoot=t}td.prototype.unstable_scheduleHydration=function(t){if(t){var e=wy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hs.length&&e!==0&&e<hs[n].priority;n++);hs.splice(n,0,t),n===0&&Ey(t)}};function Bp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yg(){}function UE(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=_u(o);i.call(d)}}var o=Bx(e,r,t,0,null,!1,!1,"",Yg);return t._reactRootContainer=o,t[Dr]=o.current,rl(t.nodeType===8?t.parentNode:t),yi(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var c=r;r=function(){var d=_u(u);c.call(d)}}var u=Up(t,0,!1,null,null,!1,!1,"",Yg);return t._reactRootContainer=u,t[Dr]=u.current,rl(t.nodeType===8?t.parentNode:t),yi(function(){ed(e,u,n,r)}),u}function rd(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var c=s;s=function(){var u=_u(o);c.call(u)}}ed(e,o,t,s)}else o=UE(n,e,t,s,r);return _u(o)}xy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Na(e.pendingLanes);n!==0&&(lp(e,n|1),en(e,Ye()),!(_e&6)&&(Ao=Ye()+500,Us()))}break;case 13:yi(function(){var r=Or(t,1);if(r!==null){var s=$t();zn(r,t,1,s)}}),zp(t,1)}};cp=function(t){if(t.tag===13){var e=Or(t,134217728);if(e!==null){var n=$t();zn(e,t,134217728,n)}zp(t,134217728)}};_y=function(t){if(t.tag===13){var e=Ss(t),n=Or(t,e);if(n!==null){var r=$t();zn(n,t,e,r)}zp(t,e)}};wy=function(){return ke};by=function(t,e){var n=ke;try{return ke=t,e()}finally{ke=n}};zh=function(t,e,n){switch(e){case"input":if(Dh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Ku(r);if(!s)throw Error(G(90));Zv(r),Dh(r,s)}}}break;case"textarea":ty(t,n);break;case"select":e=n.value,e!=null&&po(t,!!n.multiple,e,!1)}};ly=Lp;cy=yi;var zE={usingClientEntryPoint:!1,Events:[Tl,no,Ku,oy,ay,Lp]},_a={findFiberByHostInstance:oi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$E={bundleType:_a.bundleType,version:_a.version,rendererPackageName:_a.rendererPackageName,rendererConfig:_a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Br.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=hy(t),t===null?null:t.stateNode},findFiberByHostInstance:_a.findFiberByHostInstance||FE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wc.isDisabled&&wc.supportsFiber)try{Bu=wc.inject($E),nr=wc}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zE;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bp(e))throw Error(G(200));return VE(t,e,null,n)};pn.createRoot=function(t,e){if(!Bp(t))throw Error(G(299));var n=!1,r="",s=qx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Up(t,1,!1,null,null,n,!1,r,s),t[Dr]=e.current,rl(t.nodeType===8?t.parentNode:t),new $p(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(G(188)):(t=Object.keys(t).join(","),Error(G(268,t)));return t=hy(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return yi(t)};pn.hydrate=function(t,e,n){if(!nd(e))throw Error(G(200));return rd(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!Bp(t))throw Error(G(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=qx;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Bx(e,null,t,1,n??null,s,!1,i,o),t[Dr]=e.current,rl(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new td(e)};pn.render=function(t,e,n){if(!nd(e))throw Error(G(200));return rd(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!nd(t))throw Error(G(40));return t._reactRootContainer?(yi(function(){rd(null,null,t,!1,function(){t._reactRootContainer=null,t[Dr]=null})}),!0):!1};pn.unstable_batchedUpdates=Lp;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nd(n))throw Error(G(200));if(t==null||t._reactInternals===void 0)throw Error(G(38));return rd(t,e,n,!1,r)};pn.version="18.3.1-next-f1338f8080-20240426";function Hx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hx)}catch(t){console.error(t)}}Hx(),Hv.exports=pn;var BE=Hv.exports,Xg=BE;Sh.createRoot=Xg.createRoot,Sh.hydrateRoot=Xg.hydrateRoot;var Jg={};/**
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
 */const Wx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},qE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Kx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,u=s+2<t.length,d=u?t[s+2]:0,g=i>>2,v=(i&3)<<4|c>>4;let y=(c&15)<<2|d>>6,N=d&63;u||(N=64,o||(y=64)),r.push(n[g],n[v],n[y],n[N])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wx(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const v=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||d==null||v==null)throw new HE;const y=i<<2|c>>4;if(r.push(y),d!==64){const N=c<<4&240|d>>2;if(r.push(N),v!==64){const j=d<<6&192|v;r.push(j)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class HE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WE=function(t){const e=Wx(t);return Kx.encodeByteArray(e,!0)},wu=function(t){return WE(t).replace(/\./g,"")},Gx=function(t){try{return Kx.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function KE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const GE=()=>KE().__FIREBASE_DEFAULTS__,QE=()=>{if(typeof process>"u"||typeof Jg>"u")return;const t=Jg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},YE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Gx(t[1]);return e&&JSON.parse(e)},sd=()=>{try{return GE()||QE()||YE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qx=t=>{var e,n;return(n=(e=sd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yx=t=>{const e=Qx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Xx=()=>{var t;return(t=sd())===null||t===void 0?void 0:t.config},Jx=t=>{var e;return(e=sd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class XE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Zx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[wu(JSON.stringify(n)),wu(JSON.stringify(o)),""].join(".")}/**
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
 */function Mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function JE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Mt())}function ZE(){var t;const e=(t=sd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rT(){const t=Mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sT(){return!ZE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function iT(){try{return typeof indexedDB=="object"}catch{return!1}}function oT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const aT="FirebaseError";class dr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=aT,Object.setPrototypeOf(this,dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nl.prototype.create)}}class Nl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?lT(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new dr(s,c,r)}}function lT(t,e){return t.replace(cT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const cT=/\{\$([^}]+)}/g;function uT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Zg(i)&&Zg(o)){if(!bu(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Zg(t){return t!==null&&typeof t=="object"}/**
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
 */function Sl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ka(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ca(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function dT(t,e){const n=new hT(t,e);return n.subscribe.bind(n)}class hT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=dh),s.error===void 0&&(s.error=dh),s.complete===void 0&&(s.complete=dh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function dh(){}/**
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
 */function qe(t){return t&&t._delegate?t._delegate:t}class Ds{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ii="[DEFAULT]";/**
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
 */class pT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new XE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gT(e))try{this.getOrInitializeService({instanceIdentifier:ii})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ii){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ii){return this.instances.has(e)}getOptions(e=ii){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ii){return this.component?this.component.multipleInstances?e:ii:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mT(t){return t===ii?void 0:t}function gT(t){return t.instantiationMode==="EAGER"}/**
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
 */class vT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const yT={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},xT=ve.INFO,_T={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},wT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=_T[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qp{constructor(e){this.name=e,this._logLevel=xT,this._logHandler=wT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const bT=(t,e)=>e.some(n=>t instanceof n);let e0,t0;function ET(){return e0||(e0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function TT(){return t0||(t0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const e_=new WeakMap,wf=new WeakMap,t_=new WeakMap,hh=new WeakMap,Hp=new WeakMap;function IT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Cs(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&e_.set(n,t)}).catch(()=>{}),Hp.set(e,t),e}function NT(t){if(wf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});wf.set(t,e)}let bf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||t_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ST(t){bf=t(bf)}function kT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fh(this),e,...n);return t_.set(r,e.sort?e.sort():[e]),Cs(r)}:TT().includes(t)?function(...e){return t.apply(fh(this),e),Cs(e_.get(this))}:function(...e){return Cs(t.apply(fh(this),e))}}function CT(t){return typeof t=="function"?kT(t):(t instanceof IDBTransaction&&NT(t),bT(t,ET())?new Proxy(t,bf):t)}function Cs(t){if(t instanceof IDBRequest)return IT(t);if(hh.has(t))return hh.get(t);const e=CT(t);return e!==t&&(hh.set(t,e),Hp.set(e,t)),e}const fh=t=>Hp.get(t);function AT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Cs(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Cs(o.result),u.oldVersion,u.newVersion,Cs(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const RT=["get","getKey","getAll","getAllKeys","count"],PT=["put","add","delete","clear"],ph=new Map;function n0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ph.get(e))return ph.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=PT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||RT.includes(n)))return;const i=async function(o,...c){const u=this.transaction(o,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[n](...c),s&&u.done]))[0]};return ph.set(e,i),i}ST(t=>({...t,get:(e,n,r)=>n0(e,n)||t.get(e,n,r),has:(e,n)=>!!n0(e,n)||t.has(e,n)}));/**
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
 */class jT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(DT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function DT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ef="@firebase/app",r0="0.10.13";/**
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
 */const Mr=new qp("@firebase/app"),OT="@firebase/app-compat",LT="@firebase/analytics-compat",MT="@firebase/analytics",VT="@firebase/app-check-compat",FT="@firebase/app-check",UT="@firebase/auth",zT="@firebase/auth-compat",$T="@firebase/database",BT="@firebase/data-connect",qT="@firebase/database-compat",HT="@firebase/functions",WT="@firebase/functions-compat",KT="@firebase/installations",GT="@firebase/installations-compat",QT="@firebase/messaging",YT="@firebase/messaging-compat",XT="@firebase/performance",JT="@firebase/performance-compat",ZT="@firebase/remote-config",eI="@firebase/remote-config-compat",tI="@firebase/storage",nI="@firebase/storage-compat",rI="@firebase/firestore",sI="@firebase/vertexai-preview",iI="@firebase/firestore-compat",oI="firebase",aI="10.14.1";/**
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
 */const Tf="[DEFAULT]",lI={[Ef]:"fire-core",[OT]:"fire-core-compat",[MT]:"fire-analytics",[LT]:"fire-analytics-compat",[FT]:"fire-app-check",[VT]:"fire-app-check-compat",[UT]:"fire-auth",[zT]:"fire-auth-compat",[$T]:"fire-rtdb",[BT]:"fire-data-connect",[qT]:"fire-rtdb-compat",[HT]:"fire-fn",[WT]:"fire-fn-compat",[KT]:"fire-iid",[GT]:"fire-iid-compat",[QT]:"fire-fcm",[YT]:"fire-fcm-compat",[XT]:"fire-perf",[JT]:"fire-perf-compat",[ZT]:"fire-rc",[eI]:"fire-rc-compat",[tI]:"fire-gcs",[nI]:"fire-gcs-compat",[rI]:"fire-fst",[iI]:"fire-fst-compat",[sI]:"fire-vertex","fire-js":"fire-js",[oI]:"fire-js-all"};/**
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
 */const Eu=new Map,cI=new Map,If=new Map;function s0(t,e){try{t.container.addComponent(e)}catch(n){Mr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xi(t){const e=t.name;if(If.has(e))return Mr.debug(`There were multiple attempts to register component ${e}.`),!1;If.set(e,t);for(const n of Eu.values())s0(n,t);for(const n of cI.values())s0(n,t);return!0}function id(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tr(t){return t.settings!==void 0}/**
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
 */const uI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},As=new Nl("app","Firebase",uI);/**
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
 */class dI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ds("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw As.create("app-deleted",{appName:this._name})}}/**
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
 */const ki=aI;function n_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Tf,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw As.create("bad-app-name",{appName:String(s)});if(n||(n=Xx()),!n)throw As.create("no-options");const i=Eu.get(s);if(i){if(bu(n,i.options)&&bu(r,i.config))return i;throw As.create("duplicate-app",{appName:s})}const o=new vT(s);for(const u of If.values())o.addComponent(u);const c=new dI(n,r,o);return Eu.set(s,c),c}function Wp(t=Tf){const e=Eu.get(t);if(!e&&t===Tf&&Xx())return n_();if(!e)throw As.create("no-app",{appName:t});return e}function sr(t,e,n){var r;let s=(r=lI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mr.warn(c.join(" "));return}xi(new Ds(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const hI="firebase-heartbeat-database",fI=1,hl="firebase-heartbeat-store";let mh=null;function r_(){return mh||(mh=AT(hI,fI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(hl)}catch(n){console.warn(n)}}}}).catch(t=>{throw As.create("idb-open",{originalErrorMessage:t.message})})),mh}async function pI(t){try{const n=(await r_()).transaction(hl),r=await n.objectStore(hl).get(s_(t));return await n.done,r}catch(e){if(e instanceof dr)Mr.warn(e.message);else{const n=As.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mr.warn(n.message)}}}async function i0(t,e){try{const r=(await r_()).transaction(hl,"readwrite");await r.objectStore(hl).put(e,s_(t)),await r.done}catch(n){if(n instanceof dr)Mr.warn(n.message);else{const r=As.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mr.warn(r.message)}}}function s_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const mI=1024,gI=30*24*60*60*1e3;class vI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=o0();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=gI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Mr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=o0(),{heartbeatsToSend:r,unsentEntries:s}=yI(this._heartbeatsCache.heartbeats),i=wu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Mr.warn(n),""}}}function o0(){return new Date().toISOString().substring(0,10)}function yI(t,e=mI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),a0(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),a0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iT()?oT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return i0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return i0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function a0(t){return wu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function _I(t){xi(new Ds("platform-logger",e=>new jT(e),"PRIVATE")),xi(new Ds("heartbeat",e=>new vI(e),"PRIVATE")),sr(Ef,r0,t),sr(Ef,r0,"esm2017"),sr("fire-js","")}_I("");function Kp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function i_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wI=i_,o_=new Nl("auth","Firebase",i_());/**
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
 */const Tu=new qp("@firebase/auth");function bI(t,...e){Tu.logLevel<=ve.WARN&&Tu.warn(`Auth (${ki}): ${t}`,...e)}function $c(t,...e){Tu.logLevel<=ve.ERROR&&Tu.error(`Auth (${ki}): ${t}`,...e)}/**
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
 */function Bn(t,...e){throw Gp(t,...e)}function ir(t,...e){return Gp(t,...e)}function a_(t,e,n){const r=Object.assign(Object.assign({},wI()),{[e]:n});return new Nl("auth","Firebase",r).create(e,{appName:t.name})}function Rr(t){return a_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return o_.create(t,...e)}function ae(t,e,...n){if(!t)throw Gp(e,...n)}function Sr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $c(e),new Error(e)}function Vr(t,e){t||Sr(e)}/**
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
 */function Nf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function EI(){return l0()==="http:"||l0()==="https:"}function l0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function TI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(EI()||tT()||"connection"in navigator)?navigator.onLine:!0}function II(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class kl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vr(n>e,"Short delay should be less than long delay!"),this.isMobile=JE()||nT()}get(){return TI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qp(t,e){Vr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class l_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const NI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const SI=new kl(3e4,6e4);function qr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hr(t,e,n,r,s={}){return c_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Sl(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},i);return eT()||(d.referrerPolicy="no-referrer"),l_.fetch()(u_(t,t.config.apiHost,n,c),d)})}async function c_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},NI),e);try{const s=new CI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw bc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw bc(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw bc(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw bc(t,"user-disabled",o);const g=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw a_(t,g,d);Bn(t,g)}}catch(s){if(s instanceof dr)throw s;Bn(t,"network-request-failed",{message:String(s)})}}async function Cl(t,e,n,r,s={}){const i=await hr(t,e,n,r,s);return"mfaPendingCredential"in i&&Bn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function u_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Qp(t.config,s):`${t.config.apiScheme}://${s}`}function kI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class CI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ir(this.auth,"network-request-failed")),SI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ir(t,e,r);return s.customData._tokenResponse=n,s}function c0(t){return t!==void 0&&t.enterprise!==void 0}class AI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return kI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function RI(t,e){return hr(t,"GET","/v2/recaptchaConfig",qr(t,e))}/**
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
 */async function PI(t,e){return hr(t,"POST","/v1/accounts:delete",e)}async function d_(t,e){return hr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function qa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jI(t,e=!1){const n=qe(t),r=await n.getIdToken(e),s=Yp(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:qa(gh(s.auth_time)),issuedAtTime:qa(gh(s.iat)),expirationTime:qa(gh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function gh(t){return Number(t)*1e3}function Yp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $c("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gx(n);return s?JSON.parse(s):($c("Failed to decode base64 JWT payload"),null)}catch(s){return $c("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function u0(t){const e=Yp(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dr&&DI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function DI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class OI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Sf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qa(this.lastLoginAt),this.creationTime=qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Iu(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ro(t,d_(n,{idToken:r}));ae(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?h_(i.providerUserInfo):[],c=MI(t.providerData,o),u=t.isAnonymous,d=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),g=u?d:!1,v={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Sf(i.createdAt,i.lastLoginAt),isAnonymous:g};Object.assign(t,v)}async function LI(t){const e=qe(t);await Iu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function h_(t){return t.map(e=>{var{providerId:n}=e,r=Kp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function VI(t,e){const n=await c_(t,{},async()=>{const r=Sl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=u_(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",l_.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function FI(t,e){return hr(t,"POST","/v2/accounts:revokeToken",qr(t,e))}/**
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
 */class _o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):u0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=u0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await VI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new _o;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _o,this.toJSON())}_performRefresh(){return Sr("not implemented")}}/**
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
 */function as(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Kp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new OI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Sf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ro(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jI(this,e)}reload(){return LI(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Iu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tr(this.auth.app))return Promise.reject(Rr(this.auth));const e=await this.getIdToken();return await Ro(this,PI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,u,d,g;const v=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(s=n.email)!==null&&s!==void 0?s:void 0,N=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,j=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(c=n.tenantId)!==null&&c!==void 0?c:void 0,z=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(d=n.createdAt)!==null&&d!==void 0?d:void 0,E=(g=n.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:R,emailVerified:F,isAnonymous:M,providerData:V,stsTokenManager:w}=n;ae(R&&w,e,"internal-error");const x=_o.fromJSON(this.name,w);ae(typeof R=="string",e,"internal-error"),as(v,e.name),as(y,e.name),ae(typeof F=="boolean",e,"internal-error"),ae(typeof M=="boolean",e,"internal-error"),as(N,e.name),as(j,e.name),as(O,e.name),as(z,e.name),as(I,e.name),as(E,e.name);const b=new kr({uid:R,auth:e,email:y,emailVerified:F,displayName:v,isAnonymous:M,photoURL:j,phoneNumber:N,tenantId:O,stsTokenManager:x,createdAt:I,lastLoginAt:E});return V&&Array.isArray(V)&&(b.providerData=V.map(T=>Object.assign({},T))),z&&(b._redirectEventId=z),b}static async _fromIdTokenResponse(e,n,r=!1){const s=new _o;s.updateFromServerResponse(n);const i=new kr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Iu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?h_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new _o;c.updateFromIdToken(r);const u=new kr({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Sf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const d0=new Map;function Cr(t){Vr(t instanceof Function,"Expected a class definition");let e=d0.get(t);return e?(Vr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,d0.set(t,e),e)}/**
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
 */class f_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}f_.type="NONE";const h0=f_;/**
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
 */function Bc(t,e,n){return`firebase:${t}:${e}:${n}`}class wo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Bc(this.userKey,s.apiKey,i),this.fullPersistenceKey=Bc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new wo(Cr(h0),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Cr(h0);const o=Bc(r,e.config.apiKey,e.name);let c=null;for(const d of n)try{const g=await d._get(o);if(g){const v=kr._fromJSON(e,g);d!==i&&(c=v),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new wo(i,e,r):(i=u[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new wo(i,e,r))}}/**
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
 */function f0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(v_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(p_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(x_(e))return"Blackberry";if(__(e))return"Webos";if(m_(e))return"Safari";if((e.includes("chrome/")||g_(e))&&!e.includes("edge/"))return"Chrome";if(y_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function p_(t=Mt()){return/firefox\//i.test(t)}function m_(t=Mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function g_(t=Mt()){return/crios\//i.test(t)}function v_(t=Mt()){return/iemobile/i.test(t)}function y_(t=Mt()){return/android/i.test(t)}function x_(t=Mt()){return/blackberry/i.test(t)}function __(t=Mt()){return/webos/i.test(t)}function Xp(t=Mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function UI(t=Mt()){var e;return Xp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zI(){return rT()&&document.documentMode===10}function w_(t=Mt()){return Xp(t)||y_(t)||__(t)||x_(t)||/windows phone/i.test(t)||v_(t)}/**
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
 */function b_(t,e=[]){let n;switch(t){case"Browser":n=f0(Mt());break;case"Worker":n=`${f0(Mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ki}/${r}`}/**
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
 */class $I{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const u=e(i);o(u)}catch(u){c(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function BI(t,e={}){return hr(t,"GET","/v2/passwordPolicy",qr(t,e))}/**
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
 */const qI=6;class HI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:qI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class WI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new p0(this),this.idTokenSubscription=new p0(this),this.beforeStateQueue=new $I(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await wo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await d_(this,{idToken:e}),r=await kr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(tr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Iu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=II()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tr(this.app))return Promise.reject(Rr(this));const n=e?qe(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tr(this.app)?Promise.reject(Rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tr(this.app)?Promise.reject(Rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BI(this),n=new HI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Nl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await FI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cr(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await wo.create(this,[Cr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=b_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&bI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zs(t){return qe(t)}class p0{constructor(e){this.auth=e,this.observer=null,this.addObserver=dT(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let od={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KI(t){od=t}function E_(t){return od.loadJS(t)}function GI(){return od.recaptchaEnterpriseScript}function QI(){return od.gapiScript}function YI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const XI="recaptcha-enterprise",JI="NO_RECAPTCHA";class ZI{constructor(e){this.type=XI,this.auth=zs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{RI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new AI(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,o,c){const u=window.grecaptcha;c0(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(JI)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&c0(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=GI();u.length!==0&&(u+=c),E_(u).then(()=>{s(c,i,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function m0(t,e,n,r=!1){const s=new ZI(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Nu(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await m0(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await m0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function eN(t,e){const n=id(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(bu(i,e??{}))return s;Bn(s,"already-initialized")}return n.initialize({options:e})}function tN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function nN(t,e,n){const r=zs(t);ae(r._canInitEmulator,r,"emulator-config-failed"),ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=T_(e),{host:o,port:c}=rN(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),sN()}function T_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rN(t){const e=T_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:g0(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:g0(o)}}}function g0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Jp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sr("not implemented")}_getIdTokenResponse(e){return Sr("not implemented")}_linkToIdToken(e,n){return Sr("not implemented")}_getReauthenticationResolver(e){return Sr("not implemented")}}async function iN(t,e){return hr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function oN(t,e){return Cl(t,"POST","/v1/accounts:signInWithPassword",qr(t,e))}async function aN(t,e){return hr(t,"POST","/v1/accounts:sendOobCode",qr(t,e))}async function lN(t,e){return aN(t,e)}/**
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
 */async function cN(t,e){return Cl(t,"POST","/v1/accounts:signInWithEmailLink",qr(t,e))}async function uN(t,e){return Cl(t,"POST","/v1/accounts:signInWithEmailLink",qr(t,e))}/**
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
 */class fl extends Jp{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new fl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new fl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nu(e,n,"signInWithPassword",oN);case"emailLink":return cN(e,{email:this._email,oobCode:this._password});default:Bn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nu(e,r,"signUpPassword",iN);case"emailLink":return uN(e,{idToken:n,email:this._email,oobCode:this._password});default:Bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function bo(t,e){return Cl(t,"POST","/v1/accounts:signInWithIdp",qr(t,e))}/**
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
 */const dN="http://localhost";class _i extends Jp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _i(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Kp(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new _i(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,bo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bo(e,n)}buildRequest(){const e={requestUri:dN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Sl(n)}return e}}/**
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
 */function hN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fN(t){const e=ka(Ca(t)).link,n=e?ka(Ca(e)).deep_link_id:null,r=ka(Ca(t)).deep_link_id;return(r?ka(Ca(r)).link:null)||r||n||e||t}class Zp{constructor(e){var n,r,s,i,o,c;const u=ka(Ca(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,g=(r=u.oobCode)!==null&&r!==void 0?r:null,v=hN((s=u.mode)!==null&&s!==void 0?s:null);ae(d&&g&&v,"argument-error"),this.apiKey=d,this.operation=v,this.code=g,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=fN(e);try{return new Zp(n)}catch{return null}}}/**
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
 */class Ci{constructor(){this.providerId=Ci.PROVIDER_ID}static credential(e,n){return fl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Zp.parseLink(n);return ae(r,"argument-error"),fl._fromEmailAndCode(e,r.code,r.tenantId)}}Ci.PROVIDER_ID="password";Ci.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ci.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class I_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Al extends I_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ps extends Al{constructor(){super("facebook.com")}static credential(e){return _i._fromParams({providerId:ps.PROVIDER_ID,signInMethod:ps.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ps.credentialFromTaggedObject(e)}static credentialFromError(e){return ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ps.credential(e.oauthAccessToken)}catch{return null}}}ps.FACEBOOK_SIGN_IN_METHOD="facebook.com";ps.PROVIDER_ID="facebook.com";/**
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
 */class ms extends Al{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _i._fromParams({providerId:ms.PROVIDER_ID,signInMethod:ms.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ms.credentialFromTaggedObject(e)}static credentialFromError(e){return ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ms.credential(n,r)}catch{return null}}}ms.GOOGLE_SIGN_IN_METHOD="google.com";ms.PROVIDER_ID="google.com";/**
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
 */class gs extends Al{constructor(){super("github.com")}static credential(e){return _i._fromParams({providerId:gs.PROVIDER_ID,signInMethod:gs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gs.credentialFromTaggedObject(e)}static credentialFromError(e){return gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gs.credential(e.oauthAccessToken)}catch{return null}}}gs.GITHUB_SIGN_IN_METHOD="github.com";gs.PROVIDER_ID="github.com";/**
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
 */class vs extends Al{constructor(){super("twitter.com")}static credential(e,n){return _i._fromParams({providerId:vs.PROVIDER_ID,signInMethod:vs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vs.credentialFromTaggedObject(e)}static credentialFromError(e){return vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vs.credential(n,r)}catch{return null}}}vs.TWITTER_SIGN_IN_METHOD="twitter.com";vs.PROVIDER_ID="twitter.com";/**
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
 */async function pN(t,e){return Cl(t,"POST","/v1/accounts:signUp",qr(t,e))}/**
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
 */class wi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await kr._fromIdTokenResponse(e,r,s),o=v0(r);return new wi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=v0(r);return new wi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function v0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Su extends dr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Su.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Su(e,n,r,s)}}function N_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Su._fromErrorAndOperation(t,i,e,r):i})}async function mN(t,e,n=!1){const r=await Ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wi._forOperation(t,"link",r)}/**
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
 */async function S_(t,e,n=!1){const{auth:r}=t;if(tr(r.app))return Promise.reject(Rr(r));const s="reauthenticate";try{const i=await Ro(t,N_(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=Yp(i.idToken);ae(o,r,"internal-error");const{sub:c}=o;return ae(t.uid===c,r,"user-mismatch"),wi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Bn(r,"user-mismatch"),i}}/**
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
 */async function k_(t,e,n=!1){if(tr(t.app))return Promise.reject(Rr(t));const r="signIn",s=await N_(t,r,e),i=await wi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function gN(t,e){return k_(zs(t),e)}async function vN(t,e){return S_(qe(t),e)}/**
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
 */async function C_(t){const e=zs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yN(t,e,n){const r=zs(t);await Nu(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",lN)}async function xN(t,e,n){if(tr(t.app))return Promise.reject(Rr(t));const r=zs(t),o=await Nu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",pN).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&C_(t),u}),c=await wi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function y0(t,e,n){return tr(t.app)?Promise.reject(Rr(t)):gN(qe(t),Ci.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&C_(t),r})}/**
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
 */async function _N(t,e){return hr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function wN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=qe(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ro(r,_N(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function bN(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function EN(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function TN(t,e,n,r){return qe(t).onAuthStateChanged(e,n,r)}function x0(t){return qe(t).signOut()}const ku="__sak";/**
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
 */class A_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ku,"1"),this.storage.removeItem(ku),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const IN=1e3,NN=10;class R_ extends A_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=w_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);zI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,NN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},IN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}R_.type="LOCAL";const SN=R_;/**
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
 */class P_ extends A_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}P_.type="SESSION";const j_=P_;/**
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
 */function kN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ad{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ad(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async d=>d(n.origin,i)),u=await kN(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ad.receivers=[];/**
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
 */function em(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class CN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,u)=>{const d=em("",20);s.port1.start();const g=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(v){const y=v;if(y.data.eventId===d)switch(y.data.status){case"ack":clearTimeout(g),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(y.data.response);break;default:clearTimeout(g),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function or(){return window}function AN(t){or().location.href=t}/**
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
 */function D_(){return typeof or().WorkerGlobalScope<"u"&&typeof or().importScripts=="function"}async function RN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jN(){return D_()?self:null}/**
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
 */const O_="firebaseLocalStorageDb",DN=1,Cu="firebaseLocalStorage",L_="fbase_key";class Rl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ld(t,e){return t.transaction([Cu],e?"readwrite":"readonly").objectStore(Cu)}function ON(){const t=indexedDB.deleteDatabase(O_);return new Rl(t).toPromise()}function kf(){const t=indexedDB.open(O_,DN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cu,{keyPath:L_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cu)?e(r):(r.close(),await ON(),e(await kf()))})})}async function _0(t,e,n){const r=ld(t,!0).put({[L_]:e,value:n});return new Rl(r).toPromise()}async function LN(t,e){const n=ld(t,!1).get(e),r=await new Rl(n).toPromise();return r===void 0?null:r.value}function w0(t,e){const n=ld(t,!0).delete(e);return new Rl(n).toPromise()}const MN=800,VN=3;class M_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>VN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return D_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ad._getInstance(jN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await RN(),!this.activeServiceWorker)return;this.sender=new CN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kf();return await _0(e,ku,"1"),await w0(e,ku),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>LN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>w0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ld(s,!1).getAll();return new Rl(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}M_.type="LOCAL";const FN=M_;new kl(3e4,6e4);/**
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
 */function UN(t,e){return e?Cr(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class tm extends Jp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zN(t){return k_(t.auth,new tm(t),t.bypassAuthState)}function $N(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),S_(n,new tm(t),t.bypassAuthState)}async function BN(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),mN(n,new tm(t),t.bypassAuthState)}/**
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
 */class V_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zN;case"linkViaPopup":case"linkViaRedirect":return BN;case"reauthViaPopup":case"reauthViaRedirect":return $N;default:Bn(this.auth,"internal-error")}}resolve(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qN=new kl(2e3,1e4);class co extends V_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,co.currentPopupAction&&co.currentPopupAction.cancel(),co.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Vr(this.filter.length===1,"Popup operations only handle one event");const e=em();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ir(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ir(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,co.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ir(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qN.get())};e()}}co.currentPopupAction=null;/**
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
 */const HN="pendingRedirect",qc=new Map;class WN extends V_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qc.get(this.auth._key());if(!e){try{const r=await KN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qc.set(this.auth._key(),e)}return this.bypassAuthState||qc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KN(t,e){const n=YN(e),r=QN(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function GN(t,e){qc.set(t._key(),e)}function QN(t){return Cr(t._redirectPersistence)}function YN(t){return Bc(HN,t.config.apiKey,t.name)}async function XN(t,e,n=!1){if(tr(t.app))return Promise.reject(Rr(t));const r=zs(t),s=UN(r,e),o=await new WN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const JN=10*60*1e3;class ZN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!e2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!F_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ir(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JN&&this.cachedEventUids.clear(),this.cachedEventUids.has(b0(e))}saveEventToCache(e){this.cachedEventUids.add(b0(e)),this.lastProcessedEventTime=Date.now()}}function b0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function F_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function e2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return F_(t);default:return!1}}/**
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
 */async function t2(t,e={}){return hr(t,"GET","/v1/projects",e)}/**
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
 */const n2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,r2=/^https?/;async function s2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await t2(t);for(const n of e)try{if(i2(n))return}catch{}Bn(t,"unauthorized-domain")}function i2(t){const e=Nf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!r2.test(n))return!1;if(n2.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const o2=new kl(3e4,6e4);function E0(){const t=or().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function a2(t){return new Promise((e,n)=>{var r,s,i;function o(){E0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{E0(),n(ir(t,"network-request-failed"))},timeout:o2.get()})}if(!((s=(r=or().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=or().gapi)===null||i===void 0)&&i.load)o();else{const c=YI("iframefcb");return or()[c]=()=>{gapi.load?o():n(ir(t,"network-request-failed"))},E_(`${QI()}?onload=${c}`).catch(u=>n(u))}}).catch(e=>{throw Hc=null,e})}let Hc=null;function l2(t){return Hc=Hc||a2(t),Hc}/**
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
 */const c2=new kl(5e3,15e3),u2="__/auth/iframe",d2="emulator/auth/iframe",h2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},f2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function p2(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qp(e,d2):`https://${t.config.authDomain}/${u2}`,r={apiKey:e.apiKey,appName:t.name,v:ki},s=f2.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Sl(r).slice(1)}`}async function m2(t){const e=await l2(t),n=or().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:p2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:h2,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ir(t,"network-request-failed"),c=or().setTimeout(()=>{i(o)},c2.get());function u(){or().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const g2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},v2=500,y2=600,x2="_blank",_2="http://localhost";class T0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function w2(t,e,n,r=v2,s=y2){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},g2),{width:r.toString(),height:s.toString(),top:i,left:o}),d=Mt().toLowerCase();n&&(c=g_(d)?x2:n),p_(d)&&(e=e||_2,u.scrollbars="yes");const g=Object.entries(u).reduce((y,[N,j])=>`${y}${N}=${j},`,"");if(UI(d)&&c!=="_self")return b2(e||"",c),new T0(null);const v=window.open(e||"",c,g);ae(v,t,"popup-blocked");try{v.focus()}catch{}return new T0(v)}function b2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const E2="__/auth/handler",T2="emulator/auth/handler",I2=encodeURIComponent("fac");async function I0(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ki,eventId:s};if(e instanceof I_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",uT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,v]of Object.entries({}))o[g]=v}if(e instanceof Al){const g=e.getScopes().filter(v=>v!=="");g.length>0&&(o.scopes=g.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const g of Object.keys(c))c[g]===void 0&&delete c[g];const u=await t._getAppCheckToken(),d=u?`#${I2}=${encodeURIComponent(u)}`:"";return`${N2(t)}?${Sl(c).slice(1)}${d}`}function N2({config:t}){return t.emulator?Qp(t,T2):`https://${t.authDomain}/${E2}`}/**
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
 */const vh="webStorageSupport";class S2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=j_,this._completeRedirectFn=XN,this._overrideRedirectResult=GN}async _openPopup(e,n,r,s){var i;Vr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await I0(e,n,r,Nf(),s);return w2(e,o,em())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await I0(e,n,r,Nf(),s);return AN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Vr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await m2(e),r=new ZN(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vh,{type:vh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[vh];o!==void 0&&n(!!o),Bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=s2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return w_()||m_()||Xp()}}const k2=S2;var N0="@firebase/auth",S0="1.7.9";/**
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
 */class C2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function A2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function R2(t){xi(new Ds("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:b_(t)},d=new WI(r,s,i,u);return tN(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xi(new Ds("auth-internal",e=>{const n=zs(e.getProvider("auth").getImmediate());return(r=>new C2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sr(N0,S0,A2(t)),sr(N0,S0,"esm2017")}/**
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
 */const P2=5*60,j2=Jx("authIdTokenMaxAge")||P2;let k0=null;const D2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>j2)return;const s=n==null?void 0:n.token;k0!==s&&(k0=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function O2(t=Wp()){const e=id(t,"auth");if(e.isInitialized())return e.getImmediate();const n=eN(t,{popupRedirectResolver:k2,persistence:[FN,SN,j_]}),r=Jx("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=D2(i.toString());EN(n,o,()=>o(n.currentUser)),bN(n,c=>o(c))}}const s=Qx("auth");return s&&nN(n,`http://${s}`),n}function L2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}KI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ir("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",L2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});R2("Browser");var C0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hi,U_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,x){function b(){}b.prototype=x.prototype,w.D=x.prototype,w.prototype=new b,w.prototype.constructor=w,w.C=function(T,C,A){for(var S=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)S[Ke-2]=arguments[Ke];return x.prototype[C].apply(T,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,x,b){b||(b=0);var T=Array(16);if(typeof x=="string")for(var C=0;16>C;++C)T[C]=x.charCodeAt(b++)|x.charCodeAt(b++)<<8|x.charCodeAt(b++)<<16|x.charCodeAt(b++)<<24;else for(C=0;16>C;++C)T[C]=x[b++]|x[b++]<<8|x[b++]<<16|x[b++]<<24;x=w.g[0],b=w.g[1],C=w.g[2];var A=w.g[3],S=x+(A^b&(C^A))+T[0]+3614090360&4294967295;x=b+(S<<7&4294967295|S>>>25),S=A+(C^x&(b^C))+T[1]+3905402710&4294967295,A=x+(S<<12&4294967295|S>>>20),S=C+(b^A&(x^b))+T[2]+606105819&4294967295,C=A+(S<<17&4294967295|S>>>15),S=b+(x^C&(A^x))+T[3]+3250441966&4294967295,b=C+(S<<22&4294967295|S>>>10),S=x+(A^b&(C^A))+T[4]+4118548399&4294967295,x=b+(S<<7&4294967295|S>>>25),S=A+(C^x&(b^C))+T[5]+1200080426&4294967295,A=x+(S<<12&4294967295|S>>>20),S=C+(b^A&(x^b))+T[6]+2821735955&4294967295,C=A+(S<<17&4294967295|S>>>15),S=b+(x^C&(A^x))+T[7]+4249261313&4294967295,b=C+(S<<22&4294967295|S>>>10),S=x+(A^b&(C^A))+T[8]+1770035416&4294967295,x=b+(S<<7&4294967295|S>>>25),S=A+(C^x&(b^C))+T[9]+2336552879&4294967295,A=x+(S<<12&4294967295|S>>>20),S=C+(b^A&(x^b))+T[10]+4294925233&4294967295,C=A+(S<<17&4294967295|S>>>15),S=b+(x^C&(A^x))+T[11]+2304563134&4294967295,b=C+(S<<22&4294967295|S>>>10),S=x+(A^b&(C^A))+T[12]+1804603682&4294967295,x=b+(S<<7&4294967295|S>>>25),S=A+(C^x&(b^C))+T[13]+4254626195&4294967295,A=x+(S<<12&4294967295|S>>>20),S=C+(b^A&(x^b))+T[14]+2792965006&4294967295,C=A+(S<<17&4294967295|S>>>15),S=b+(x^C&(A^x))+T[15]+1236535329&4294967295,b=C+(S<<22&4294967295|S>>>10),S=x+(C^A&(b^C))+T[1]+4129170786&4294967295,x=b+(S<<5&4294967295|S>>>27),S=A+(b^C&(x^b))+T[6]+3225465664&4294967295,A=x+(S<<9&4294967295|S>>>23),S=C+(x^b&(A^x))+T[11]+643717713&4294967295,C=A+(S<<14&4294967295|S>>>18),S=b+(A^x&(C^A))+T[0]+3921069994&4294967295,b=C+(S<<20&4294967295|S>>>12),S=x+(C^A&(b^C))+T[5]+3593408605&4294967295,x=b+(S<<5&4294967295|S>>>27),S=A+(b^C&(x^b))+T[10]+38016083&4294967295,A=x+(S<<9&4294967295|S>>>23),S=C+(x^b&(A^x))+T[15]+3634488961&4294967295,C=A+(S<<14&4294967295|S>>>18),S=b+(A^x&(C^A))+T[4]+3889429448&4294967295,b=C+(S<<20&4294967295|S>>>12),S=x+(C^A&(b^C))+T[9]+568446438&4294967295,x=b+(S<<5&4294967295|S>>>27),S=A+(b^C&(x^b))+T[14]+3275163606&4294967295,A=x+(S<<9&4294967295|S>>>23),S=C+(x^b&(A^x))+T[3]+4107603335&4294967295,C=A+(S<<14&4294967295|S>>>18),S=b+(A^x&(C^A))+T[8]+1163531501&4294967295,b=C+(S<<20&4294967295|S>>>12),S=x+(C^A&(b^C))+T[13]+2850285829&4294967295,x=b+(S<<5&4294967295|S>>>27),S=A+(b^C&(x^b))+T[2]+4243563512&4294967295,A=x+(S<<9&4294967295|S>>>23),S=C+(x^b&(A^x))+T[7]+1735328473&4294967295,C=A+(S<<14&4294967295|S>>>18),S=b+(A^x&(C^A))+T[12]+2368359562&4294967295,b=C+(S<<20&4294967295|S>>>12),S=x+(b^C^A)+T[5]+4294588738&4294967295,x=b+(S<<4&4294967295|S>>>28),S=A+(x^b^C)+T[8]+2272392833&4294967295,A=x+(S<<11&4294967295|S>>>21),S=C+(A^x^b)+T[11]+1839030562&4294967295,C=A+(S<<16&4294967295|S>>>16),S=b+(C^A^x)+T[14]+4259657740&4294967295,b=C+(S<<23&4294967295|S>>>9),S=x+(b^C^A)+T[1]+2763975236&4294967295,x=b+(S<<4&4294967295|S>>>28),S=A+(x^b^C)+T[4]+1272893353&4294967295,A=x+(S<<11&4294967295|S>>>21),S=C+(A^x^b)+T[7]+4139469664&4294967295,C=A+(S<<16&4294967295|S>>>16),S=b+(C^A^x)+T[10]+3200236656&4294967295,b=C+(S<<23&4294967295|S>>>9),S=x+(b^C^A)+T[13]+681279174&4294967295,x=b+(S<<4&4294967295|S>>>28),S=A+(x^b^C)+T[0]+3936430074&4294967295,A=x+(S<<11&4294967295|S>>>21),S=C+(A^x^b)+T[3]+3572445317&4294967295,C=A+(S<<16&4294967295|S>>>16),S=b+(C^A^x)+T[6]+76029189&4294967295,b=C+(S<<23&4294967295|S>>>9),S=x+(b^C^A)+T[9]+3654602809&4294967295,x=b+(S<<4&4294967295|S>>>28),S=A+(x^b^C)+T[12]+3873151461&4294967295,A=x+(S<<11&4294967295|S>>>21),S=C+(A^x^b)+T[15]+530742520&4294967295,C=A+(S<<16&4294967295|S>>>16),S=b+(C^A^x)+T[2]+3299628645&4294967295,b=C+(S<<23&4294967295|S>>>9),S=x+(C^(b|~A))+T[0]+4096336452&4294967295,x=b+(S<<6&4294967295|S>>>26),S=A+(b^(x|~C))+T[7]+1126891415&4294967295,A=x+(S<<10&4294967295|S>>>22),S=C+(x^(A|~b))+T[14]+2878612391&4294967295,C=A+(S<<15&4294967295|S>>>17),S=b+(A^(C|~x))+T[5]+4237533241&4294967295,b=C+(S<<21&4294967295|S>>>11),S=x+(C^(b|~A))+T[12]+1700485571&4294967295,x=b+(S<<6&4294967295|S>>>26),S=A+(b^(x|~C))+T[3]+2399980690&4294967295,A=x+(S<<10&4294967295|S>>>22),S=C+(x^(A|~b))+T[10]+4293915773&4294967295,C=A+(S<<15&4294967295|S>>>17),S=b+(A^(C|~x))+T[1]+2240044497&4294967295,b=C+(S<<21&4294967295|S>>>11),S=x+(C^(b|~A))+T[8]+1873313359&4294967295,x=b+(S<<6&4294967295|S>>>26),S=A+(b^(x|~C))+T[15]+4264355552&4294967295,A=x+(S<<10&4294967295|S>>>22),S=C+(x^(A|~b))+T[6]+2734768916&4294967295,C=A+(S<<15&4294967295|S>>>17),S=b+(A^(C|~x))+T[13]+1309151649&4294967295,b=C+(S<<21&4294967295|S>>>11),S=x+(C^(b|~A))+T[4]+4149444226&4294967295,x=b+(S<<6&4294967295|S>>>26),S=A+(b^(x|~C))+T[11]+3174756917&4294967295,A=x+(S<<10&4294967295|S>>>22),S=C+(x^(A|~b))+T[2]+718787259&4294967295,C=A+(S<<15&4294967295|S>>>17),S=b+(A^(C|~x))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+x&4294967295,w.g[1]=w.g[1]+(C+(S<<21&4294967295|S>>>11))&4294967295,w.g[2]=w.g[2]+C&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.u=function(w,x){x===void 0&&(x=w.length);for(var b=x-this.blockSize,T=this.B,C=this.h,A=0;A<x;){if(C==0)for(;A<=b;)s(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<x;)if(T[C++]=w.charCodeAt(A++),C==this.blockSize){s(this,T),C=0;break}}else for(;A<x;)if(T[C++]=w[A++],C==this.blockSize){s(this,T),C=0;break}}this.h=C,this.o+=x},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var x=1;x<w.length-8;++x)w[x]=0;var b=8*this.o;for(x=w.length-8;x<w.length;++x)w[x]=b&255,b/=256;for(this.u(w),w=Array(16),x=b=0;4>x;++x)for(var T=0;32>T;T+=8)w[b++]=this.g[x]>>>T&255;return w};function i(w,x){var b=c;return Object.prototype.hasOwnProperty.call(b,w)?b[w]:b[w]=x(w)}function o(w,x){this.h=x;for(var b=[],T=!0,C=w.length-1;0<=C;C--){var A=w[C]|0;T&&A==x||(b[C]=A,T=!1)}this.g=b}var c={};function u(w){return-128<=w&&128>w?i(w,function(x){return new o([x|0],0>x?-1:0)}):new o([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return v;if(0>w)return z(d(-w));for(var x=[],b=1,T=0;w>=b;T++)x[T]=w/b|0,b*=4294967296;return new o(x,0)}function g(w,x){if(w.length==0)throw Error("number format error: empty string");if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(w.charAt(0)=="-")return z(g(w.substring(1),x));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=d(Math.pow(x,8)),T=v,C=0;C<w.length;C+=8){var A=Math.min(8,w.length-C),S=parseInt(w.substring(C,C+A),x);8>A?(A=d(Math.pow(x,A)),T=T.j(A).add(d(S))):(T=T.j(b),T=T.add(d(S)))}return T}var v=u(0),y=u(1),N=u(16777216);t=o.prototype,t.m=function(){if(O(this))return-z(this).m();for(var w=0,x=1,b=0;b<this.g.length;b++){var T=this.i(b);w+=(0<=T?T:4294967296+T)*x,x*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(j(this))return"0";if(O(this))return"-"+z(this).toString(w);for(var x=d(Math.pow(w,6)),b=this,T="";;){var C=F(b,x).g;b=I(b,C.j(x));var A=((0<b.g.length?b.g[0]:b.h)>>>0).toString(w);if(b=C,j(b))return A+T;for(;6>A.length;)A="0"+A;T=A+T}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function j(w){if(w.h!=0)return!1;for(var x=0;x<w.g.length;x++)if(w.g[x]!=0)return!1;return!0}function O(w){return w.h==-1}t.l=function(w){return w=I(this,w),O(w)?-1:j(w)?0:1};function z(w){for(var x=w.g.length,b=[],T=0;T<x;T++)b[T]=~w.g[T];return new o(b,~w.h).add(y)}t.abs=function(){return O(this)?z(this):this},t.add=function(w){for(var x=Math.max(this.g.length,w.g.length),b=[],T=0,C=0;C<=x;C++){var A=T+(this.i(C)&65535)+(w.i(C)&65535),S=(A>>>16)+(this.i(C)>>>16)+(w.i(C)>>>16);T=S>>>16,A&=65535,S&=65535,b[C]=S<<16|A}return new o(b,b[b.length-1]&-2147483648?-1:0)};function I(w,x){return w.add(z(x))}t.j=function(w){if(j(this)||j(w))return v;if(O(this))return O(w)?z(this).j(z(w)):z(z(this).j(w));if(O(w))return z(this.j(z(w)));if(0>this.l(N)&&0>w.l(N))return d(this.m()*w.m());for(var x=this.g.length+w.g.length,b=[],T=0;T<2*x;T++)b[T]=0;for(T=0;T<this.g.length;T++)for(var C=0;C<w.g.length;C++){var A=this.i(T)>>>16,S=this.i(T)&65535,Ke=w.i(C)>>>16,ft=w.i(C)&65535;b[2*T+2*C]+=S*ft,E(b,2*T+2*C),b[2*T+2*C+1]+=A*ft,E(b,2*T+2*C+1),b[2*T+2*C+1]+=S*Ke,E(b,2*T+2*C+1),b[2*T+2*C+2]+=A*Ke,E(b,2*T+2*C+2)}for(T=0;T<x;T++)b[T]=b[2*T+1]<<16|b[2*T];for(T=x;T<2*x;T++)b[T]=0;return new o(b,0)};function E(w,x){for(;(w[x]&65535)!=w[x];)w[x+1]+=w[x]>>>16,w[x]&=65535,x++}function R(w,x){this.g=w,this.h=x}function F(w,x){if(j(x))throw Error("division by zero");if(j(w))return new R(v,v);if(O(w))return x=F(z(w),x),new R(z(x.g),z(x.h));if(O(x))return x=F(w,z(x)),new R(z(x.g),x.h);if(30<w.g.length){if(O(w)||O(x))throw Error("slowDivide_ only works with positive integers.");for(var b=y,T=x;0>=T.l(w);)b=M(b),T=M(T);var C=V(b,1),A=V(T,1);for(T=V(T,2),b=V(b,2);!j(T);){var S=A.add(T);0>=S.l(w)&&(C=C.add(b),A=S),T=V(T,1),b=V(b,1)}return x=I(w,C.j(x)),new R(C,x)}for(C=v;0<=w.l(x);){for(b=Math.max(1,Math.floor(w.m()/x.m())),T=Math.ceil(Math.log(b)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),A=d(b),S=A.j(x);O(S)||0<S.l(w);)b-=T,A=d(b),S=A.j(x);j(A)&&(A=y),C=C.add(A),w=I(w,S)}return new R(C,w)}t.A=function(w){return F(this,w).h},t.and=function(w){for(var x=Math.max(this.g.length,w.g.length),b=[],T=0;T<x;T++)b[T]=this.i(T)&w.i(T);return new o(b,this.h&w.h)},t.or=function(w){for(var x=Math.max(this.g.length,w.g.length),b=[],T=0;T<x;T++)b[T]=this.i(T)|w.i(T);return new o(b,this.h|w.h)},t.xor=function(w){for(var x=Math.max(this.g.length,w.g.length),b=[],T=0;T<x;T++)b[T]=this.i(T)^w.i(T);return new o(b,this.h^w.h)};function M(w){for(var x=w.g.length+1,b=[],T=0;T<x;T++)b[T]=w.i(T)<<1|w.i(T-1)>>>31;return new o(b,w.h)}function V(w,x){var b=x>>5;x%=32;for(var T=w.g.length-b,C=[],A=0;A<T;A++)C[A]=0<x?w.i(A+b)>>>x|w.i(A+b+1)<<32-x:w.i(A+b);return new o(C,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,U_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=g,hi=o}).apply(typeof C0<"u"?C0:typeof self<"u"?self:typeof window<"u"?window:{});var Ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var z_,Aa,$_,Wc,Cf,B_,q_,H_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ec=="object"&&Ec];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var L=a[_];if(!(L in p))break e;p=p[L]}a=a[a.length-1],_=p[a],h=h(_),h!=_&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var p=0,_=!1,L={next:function(){if(!_&&p<a.length){var U=p++;return{value:h(U,a[U]),done:!1}}return _=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function d(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function g(a,h,p){return a.call.apply(a.bind,arguments)}function v(a,h,p){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,_),a.apply(h,L)}}return function(){return a.apply(h,arguments)}}function y(a,h,p){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:v,y.apply(null,arguments)}function N(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function j(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(_,L,U){for(var Y=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)Y[Pe-2]=arguments[Pe];return h.prototype[L].apply(_,Y)}}function O(a){const h=a.length;if(0<h){const p=Array(h);for(let _=0;_<h;_++)p[_]=a[_];return p}return[]}function z(a,h){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(u(_)){const L=a.length||0,U=_.length||0;a.length=L+U;for(let Y=0;Y<U;Y++)a[L+Y]=_[Y]}else a.push(_)}}class I{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function E(a){return/^[\s\xa0]*$/.test(a)}function R(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function F(a){return F[" "](a),a}F[" "]=function(){};var M=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function V(a,h,p){for(const _ in a)h.call(p,a[_],_,a)}function w(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function x(a){const h={};for(const p in a)h[p]=a[p];return h}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,h){let p,_;for(let L=1;L<arguments.length;L++){_=arguments[L];for(p in _)a[p]=_[p];for(let U=0;U<b.length;U++)p=b[U],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function C(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function A(a){c.setTimeout(()=>{throw a},0)}function S(){var a=X;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ke{constructor(){this.h=this.g=null}add(h,p){const _=ft.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var ft=new I(()=>new Pi,a=>a.reset());class Pi{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Sn,J=!1,X=new Ke,oe=()=>{const a=c.Promise.resolve(void 0);Sn=()=>{a.then(Ae)}};var Ae=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(p){A(p)}var h=ft;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}J=!1};function Ie(){this.s=this.s,this.C=this.C}Ie.prototype.s=!1,Ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var nn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};c.addEventListener("test",p,h),c.removeEventListener("test",p,h)}catch{}return a}();function rn(a,h){if(Ne.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(M){e:{try{F(h.nodeName);var L=!0;break e}catch{}L=!1}L||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Wt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&rn.aa.h.call(this)}}j(rn,Ne);var Wt={2:"touch",3:"pen",4:"mouse"};rn.prototype.h=function(){rn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var kn="closure_listenable_"+(1e6*Math.random()|0),Bs=0;function Sd(a,h,p,_,L){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=L,this.key=++Bs,this.da=this.fa=!1}function Cn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function qs(a){this.src=a,this.g={},this.h=0}qs.prototype.add=function(a,h,p,_,L){var U=a.toString();a=this.g[U],a||(a=this.g[U]=[],this.h++);var Y=Ko(a,h,_,L);return-1<Y?(h=a[Y],p||(h.fa=!1)):(h=new Sd(h,this.src,U,!!_,L),h.fa=p,a.push(h)),h};function Vt(a,h){var p=h.type;if(p in a.g){var _=a.g[p],L=Array.prototype.indexOf.call(_,h,void 0),U;(U=0<=L)&&Array.prototype.splice.call(_,L,1),U&&(Cn(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Ko(a,h,p,_){for(var L=0;L<a.length;++L){var U=a[L];if(!U.da&&U.listener==h&&U.capture==!!p&&U.ha==_)return L}return-1}var fr="closure_lm_"+(1e6*Math.random()|0),Go={};function Hr(a,h,p,_,L){if(Array.isArray(h)){for(var U=0;U<h.length;U++)Hr(a,h[U],p,_,L);return null}return p=ji(p),a&&a[kn]?a.K(h,p,d(_)?!!_.capture:!1,L):kd(a,h,p,!1,_,L)}function kd(a,h,p,_,L,U){if(!h)throw Error("Invalid event type");var Y=d(L)?!!L.capture:!!L,Pe=Wr(a);if(Pe||(a[fr]=Pe=new qs(a)),p=Pe.add(h,p,_,Y,U),p.proxy)return p;if(_=Hs(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)nn||(L=Y),L===void 0&&(L=!1),a.addEventListener(h.toString(),_,L);else if(a.attachEvent)a.attachEvent(Ws(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Hs(){function a(p){return h.call(a.src,a.listener,p)}const h=Ks;return a}function Fl(a,h,p,_,L){if(Array.isArray(h))for(var U=0;U<h.length;U++)Fl(a,h[U],p,_,L);else _=d(_)?!!_.capture:!!_,p=ji(p),a&&a[kn]?(a=a.i,h=String(h).toString(),h in a.g&&(U=a.g[h],p=Ko(U,p,_,L),-1<p&&(Cn(U[p]),Array.prototype.splice.call(U,p,1),U.length==0&&(delete a.g[h],a.h--)))):a&&(a=Wr(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ko(h,p,_,L)),(p=-1<a?h[a]:null)&&pr(p))}function pr(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[kn])Vt(h.i,a);else{var p=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(p,_,a.capture):h.detachEvent?h.detachEvent(Ws(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=Wr(h))?(Vt(p,a),p.h==0&&(p.src=null,h[fr]=null)):Cn(a)}}}function Ws(a){return a in Go?Go[a]:Go[a]="on"+a}function Ks(a,h){if(a.da)a=!0;else{h=new rn(h,this);var p=a.listener,_=a.ha||a.src;a.fa&&pr(a),a=p.call(_,h)}return a}function Wr(a){return a=a[fr],a instanceof qs?a:null}var Kr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ji(a){return typeof a=="function"?a:(a[Kr]||(a[Kr]=function(h){return a.handleEvent(h)}),a[Kr])}function tt(){Ie.call(this),this.i=new qs(this),this.M=this,this.F=null}j(tt,Ie),tt.prototype[kn]=!0,tt.prototype.removeEventListener=function(a,h,p,_){Fl(this,a,h,p,_)};function Xe(a,h){var p,_=a.F;if(_)for(p=[];_;_=_.F)p.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new Ne(h,a);else if(h instanceof Ne)h.target=h.target||a;else{var L=h;h=new Ne(_,a),T(h,L)}if(L=!0,p)for(var U=p.length-1;0<=U;U--){var Y=h.g=p[U];L=sn(Y,_,!0,h)&&L}if(Y=h.g=a,L=sn(Y,_,!0,h)&&L,L=sn(Y,_,!1,h)&&L,p)for(U=0;U<p.length;U++)Y=h.g=p[U],L=sn(Y,_,!1,h)&&L}tt.prototype.N=function(){if(tt.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],_=0;_<p.length;_++)Cn(p[_]);delete a.g[h],a.h--}}this.F=null},tt.prototype.K=function(a,h,p,_){return this.i.add(String(a),h,!1,p,_)},tt.prototype.L=function(a,h,p,_){return this.i.add(String(a),h,!0,p,_)};function sn(a,h,p,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var L=!0,U=0;U<h.length;++U){var Y=h[U];if(Y&&!Y.da&&Y.capture==p){var Pe=Y.listener,vt=Y.ha||Y.src;Y.fa&&Vt(a.i,Y),L=Pe.call(vt,_)!==!1&&L}}return L&&!_.defaultPrevented}function Gr(a,h,p){if(typeof a=="function")p&&(a=y(a,p));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function Qo(a){a.g=Gr(()=>{a.g=null,a.i&&(a.i=!1,Qo(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Di extends Ie{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Qo(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function An(a){Ie.call(this),this.h=a,this.g={}}j(An,Ie);var Yo=[];function Gs(a){V(a.g,function(h,p){this.g.hasOwnProperty(p)&&pr(h)},a),a.g={}}An.prototype.N=function(){An.aa.N.call(this),Gs(this)},An.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var on=c.JSON.stringify,Xo=c.JSON.parse,qn=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Oi(){}Oi.prototype.h=null;function mr(a){return a.h||(a.h=a.i())}function an(){}var pe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ft(){Ne.call(this,"d")}j(Ft,Ne);function gr(){Ne.call(this,"c")}j(gr,Ne);var ln={},Jo=null;function Qr(){return Jo=Jo||new tt}ln.La="serverreachability";function Qs(a){Ne.call(this,ln.La,a)}j(Qs,Ne);function Hn(a){const h=Qr();Xe(h,new Qs(h))}ln.STAT_EVENT="statevent";function Li(a,h){Ne.call(this,ln.STAT_EVENT,a),this.stat=h}j(Li,Ne);function nt(a){const h=Qr();Xe(h,new Li(h,a))}ln.Ma="timingevent";function Mi(a,h){Ne.call(this,ln.Ma,a),this.size=h}j(Mi,Ne);function vr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function D(){this.g=!0}D.prototype.xa=function(){this.g=!1};function se(a,h,p,_,L,U){a.info(function(){if(a.g)if(U)for(var Y="",Pe=U.split("&"),vt=0;vt<Pe.length;vt++){var we=Pe[vt].split("=");if(1<we.length){var kt=we[0];we=we[1];var Ct=kt.split("_");Y=2<=Ct.length&&Ct[1]=="type"?Y+(kt+"="+we+"&"):Y+(kt+"=redacted&")}}else Y=null;else Y=U;return"XMLHTTP REQ ("+_+") [attempt "+L+"]: "+h+`
`+p+`
`+Y})}function fe(a,h,p,_,L,U,Y){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+L+"]: "+h+`
`+p+`
`+U+" "+Y})}function Ue(a,h,p,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Yr(a,p)+(_?" "+_:"")})}function Kt(a,h){a.info(function(){return"TIMEOUT: "+h})}D.prototype.info=function(){};function Yr(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var _=p[a];if(!(2>_.length)){var L=_[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var Y=1;Y<L.length;Y++)L[Y]=""}}}}return on(p)}catch{return h}}var Xr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Vi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Jr;function Fi(){}j(Fi,Oi),Fi.prototype.g=function(){return new XMLHttpRequest},Fi.prototype.i=function(){return{}},Jr=new Fi;function gn(a,h,p,_){this.j=a,this.i=h,this.l=p,this.R=_||1,this.U=new An(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ul}function Ul(){this.i=null,this.g="",this.h=!1}var Zo={},ea={};function rt(a,h,p){a.L=1,a.v=ye(vn(h)),a.m=p,a.P=!0,Zr(a,null)}function Zr(a,h){a.F=Date.now(),ta(a),a.A=vn(a.v);var p=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),la(p.i,"t",_),a.C=0,p=a.j.J,a.h=new Ul,a.g=nc(a.j,p?h:null,!a.m),0<a.O&&(a.M=new Di(y(a.Y,a,a.g),a.O)),h=a.U,p=a.g,_=a.ca;var L="readystatechange";Array.isArray(L)||(L&&(Yo[0]=L.toString()),L=Yo);for(var U=0;U<L.length;U++){var Y=Hr(p,L[U],_||h.handleEvent,!1,h.h||h);if(!Y)break;h.g[Y.key]=Y}h=a.H?x(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Hn(),se(a.i,a.u,a.A,a.l,a.R,a.m)}gn.prototype.ca=function(a){a=a.target;const h=this.M;h&&jn(a)==3?h.j():this.Y(a)},gn.prototype.Y=function(a){try{if(a==this.g)e:{const Ct=jn(this.g);var h=this.g.Ba();const qi=this.g.Z();if(!(3>Ct)&&(Ct!=3||this.g&&(this.h.h||this.g.oa()||da(this.g)))){this.J||Ct!=4||h==7||(h==8||0>=qi?Hn(3):Hn(2)),es(this);var p=this.g.Z();this.X=p;t:if(pt(this)){var _=da(this.g);a="";var L=_.length,U=jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yr(this),ts(this);var Y="";break t}this.h.i=new c.TextDecoder}for(h=0;h<L;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(U&&h==L-1)});_.length=0,this.h.g+=a,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=p==200,fe(this.i,this.u,this.A,this.l,this.R,Ct,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,vt=this.g;if((Pe=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(Pe)){var we=Pe;break t}}we=null}if(p=we)Ue(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,na(this,p);else{this.o=!1,this.s=3,nt(12),yr(this),ts(this);break e}}if(this.P){p=!0;let On;for(;!this.J&&this.C<Y.length;)if(On=Ys(this,Y),On==ea){Ct==4&&(this.s=4,nt(14),p=!1),Ue(this.i,this.l,null,"[Incomplete Response]");break}else if(On==Zo){this.s=4,nt(15),Ue(this.i,this.l,Y,"[Invalid Chunk]"),p=!1;break}else Ue(this.i,this.l,On,null),na(this,On);if(pt(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ct!=4||Y.length!=0||this.h.h||(this.s=1,nt(16),p=!1),this.o=this.o&&p,!p)Ue(this.i,this.l,Y,"[Invalid Chunked Response]"),yr(this),ts(this);else if(0<Y.length&&!this.W){this.W=!0;var kt=this.j;kt.g==this&&kt.ba&&!kt.M&&(kt.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),lt(kt),kt.M=!0,nt(11))}}else Ue(this.i,this.l,Y,null),na(this,Y);Ct==4&&yr(this),this.o&&!this.J&&(Ct==4?Dn(this.j,this):(this.o=!1,ta(this)))}else tc(this.g),p==400&&0<Y.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),yr(this),ts(this)}}}catch{}finally{}};function pt(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Ys(a,h){var p=a.C,_=h.indexOf(`
`,p);return _==-1?ea:(p=Number(h.substring(p,_)),isNaN(p)?Zo:(_+=1,_+p>h.length?ea:(h=h.slice(_,_+p),a.C=_+p,h)))}gn.prototype.cancel=function(){this.J=!0,yr(this)};function ta(a){a.S=Date.now()+a.I,Cd(a,a.I)}function Cd(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=vr(y(a.ba,a),h)}function es(a){a.B&&(c.clearTimeout(a.B),a.B=null)}gn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Kt(this.i,this.A),this.L!=2&&(Hn(),nt(17)),yr(this),this.s=2,ts(this)):Cd(this,this.S-a)};function ts(a){a.j.G==0||a.J||Dn(a.j,a)}function yr(a){es(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Gs(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function na(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||sa(p.h,a))){if(!a.K&&sa(p.h,a)&&p.G==3){try{var _=p.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var L=_;if(L[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)de(p),P(p);else break e;Je(p),nt(18)}}else p.za=L[1],0<p.za-p.T&&37500>L[2]&&p.F&&p.v==0&&!p.C&&(p.C=vr(y(p.Za,p),6e3));if(1>=mt(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Qn(p,11)}else if((a.K||p.g==a)&&de(p),!E(h))for(L=p.Da.g.parse(h),h=0;h<L.length;h++){let we=L[h];if(p.T=we[0],we=we[1],p.G==2)if(we[0]=="c"){p.K=we[1],p.ia=we[2];const kt=we[3];kt!=null&&(p.la=kt,p.j.info("VER="+p.la));const Ct=we[4];Ct!=null&&(p.Aa=Ct,p.j.info("SVER="+p.Aa));const qi=we[5];qi!=null&&typeof qi=="number"&&0<qi&&(_=1.5*qi,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const On=a.g;if(On){const sc=On.g?On.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(sc){var U=_.h;U.g||sc.indexOf("spdy")==-1&&sc.indexOf("quic")==-1&&sc.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(ia(U,U.h),U.h=null))}if(_.D){const Vd=On.g?On.g.getResponseHeader("X-HTTP-Session-Id"):null;Vd&&(_.ya=Vd,Re(_.I,_.D,Vd))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var Y=a;if(_.qa=Md(_,_.J?_.ia:null,_.W),Y.K){xr(_.h,Y);var Pe=Y,vt=_.L;vt&&(Pe.I=vt),Pe.B&&(es(Pe),ta(Pe)),_.g=Y}else Te(_);0<p.i.length&&W(p)}else we[0]!="stop"&&we[0]!="close"||Qn(p,7);else p.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?Qn(p,7):k(p):we[0]!="noop"&&p.l&&p.l.ta(we),p.v=0)}}Hn(4)}catch{}}var zl=class{constructor(a,h){this.g=a,this.map=h}};function ra(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function he(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function mt(a){return a.h?1:a.g?a.g.size:0}function sa(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ia(a,h){a.g?a.g.add(h):a.h=h}function xr(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}ra.prototype.cancel=function(){if(this.i=$l(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function $l(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return O(a.i)}function Ad(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],p=a.length,_=0;_<p;_++)h.push(a[_]);return h}h=[],p=0;for(_ in a)h[p++]=a[_];return h}function Bl(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const _ in a)h[p++]=_;return h}}}function ql(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=Bl(a),_=Ad(a),L=_.length,U=0;U<L;U++)h.call(void 0,_[U],p&&p[U],a)}var Hl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wl(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var _=a[p].indexOf("="),L=null;if(0<=_){var U=a[p].substring(0,_);L=a[p].substring(_+1)}else U=a[p];h(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Wn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Wn){this.h=a.h,Xs(this,a.j),this.o=a.o,this.g=a.g,Js(this,a.s),this.l=a.l;var h=a.i,p=new ns;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),oa(this,p),this.m=a.m}else a&&(h=String(a).match(Hl))?(this.h=!1,Xs(this,h[1]||"",!0),this.o=Rn(h[2]||""),this.g=Rn(h[3]||"",!0),Js(this,h[4]),this.l=Rn(h[5]||"",!0),oa(this,h[6]||"",!0),this.m=Rn(h[7]||"")):(this.h=!1,this.i=new ns(null,this.h))}Wn.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ut(h,Pn,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ut(h,Pn,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Ut(p,p.charAt(0)=="/"?Gl:_r,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Ut(p,Rd)),a.join("")};function vn(a){return new Wn(a)}function Xs(a,h,p){a.j=p?Rn(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Js(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function oa(a,h,p){h instanceof ns?(a.i=h,Pd(a.i,a.h)):(p||(h=Ut(h,Zs)),a.i=new ns(h,a.h))}function Re(a,h,p){a.i.set(h,p)}function ye(a){return Re(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Rn(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ut(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,Kl),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Kl(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Pn=/[#\/\?@]/g,_r=/[#\?:]/g,Gl=/[#\?]/g,Zs=/[#\?@]/g,Rd=/#/g;function ns(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Kn(a){a.g||(a.g=new Map,a.h=0,a.i&&Wl(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=ns.prototype,t.add=function(a,h){Kn(this),this.i=null,a=rs(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function aa(a,h){Kn(a),h=rs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ql(a,h){return Kn(a),h=rs(a,h),a.g.has(h)}t.forEach=function(a,h){Kn(this),this.g.forEach(function(p,_){p.forEach(function(L){a.call(h,L,_,this)},this)},this)},t.na=function(){Kn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let _=0;_<h.length;_++){const L=a[_];for(let U=0;U<L.length;U++)p.push(h[_])}return p},t.V=function(a){Kn(this);let h=[];if(typeof a=="string")Ql(this,a)&&(h=h.concat(this.g.get(rs(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return Kn(this),this.i=null,a=rs(this,a),Ql(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function la(a,h,p){aa(a,h),0<p.length&&(a.i=null,a.g.set(rs(a,h),O(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var _=h[p];const U=encodeURIComponent(String(_)),Y=this.V(_);for(_=0;_<Y.length;_++){var L=U;Y[_]!==""&&(L+="="+encodeURIComponent(String(Y[_]))),a.push(L)}}return this.i=a.join("&")};function rs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Pd(a,h){h&&!a.j&&(Kn(a),a.i=null,a.g.forEach(function(p,_){var L=_.toLowerCase();_!=L&&(aa(this,_),la(this,L,p))},a)),a.j=h}function jd(a,h){const p=new D;if(c.Image){const _=new Image;_.onload=N(Gn,p,"TestLoadImage: loaded",!0,h,_),_.onerror=N(Gn,p,"TestLoadImage: error",!1,h,_),_.onabort=N(Gn,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=N(Gn,p,"TestLoadImage: timeout",!1,h,_),c.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function ca(a,h){const p=new D,_=new AbortController,L=setTimeout(()=>{_.abort(),Gn(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(U=>{clearTimeout(L),U.ok?Gn(p,"TestPingServer: ok",!0,h):Gn(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(L),Gn(p,"TestPingServer: error",!1,h)})}function Gn(a,h,p,_,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),_(p)}catch{}}function Dd(){this.g=new qn}function Od(a,h,p){const _=p||"";try{ql(a,function(L,U){let Y=L;d(L)&&(Y=on(L)),h.push(_+U+"="+encodeURIComponent(Y))})}catch(L){throw h.push(_+"type="+encodeURIComponent("_badmap")),L}}function wr(a){this.l=a.Ub||null,this.j=a.eb||!1}j(wr,Oi),wr.prototype.g=function(){return new Ui(this.l,this.j)},wr.prototype.i=function(a){return function(){return a}}({});function Ui(a,h){tt.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}j(Ui,tt),t=Ui.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ei(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ss(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yl(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yl(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ss(this):ei(this),this.readyState==3&&Yl(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ss(this))},t.Qa=function(a){this.g&&(this.response=a,ss(this))},t.ga=function(){this.g&&ss(this)};function ss(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ei(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function ei(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function is(a){let h="";return V(a,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function zi(a,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=is(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Re(a,h,p))}function Me(a){tt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}j(Me,tt);var Ld=/^https?$/i,ua=["POST","PUT"];t=Me.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Jr.g(),this.v=this.o?mr(this.o):mr(Jr),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(U){Xl(this,U);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var L in _)p.set(L,_[L]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const U of _.keys())p.set(U,_.get(U));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(U=>U.toLowerCase()=="content-type"),L=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ua,h,void 0))||_||L||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,Y]of p)this.g.setRequestHeader(U,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ec(this),this.u=!0,this.g.send(a),this.u=!1}catch(U){Xl(this,U)}};function Xl(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Jl(a),$i(a)}function Jl(a){a.A||(a.A=!0,Xe(a,"complete"),Xe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Xe(this,"complete"),Xe(this,"abort"),$i(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$i(this,!0)),Me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Zl(this):this.bb())},t.bb=function(){Zl(this)};function Zl(a){if(a.h&&typeof o<"u"&&(!a.v[1]||jn(a)!=4||a.Z()!=2)){if(a.u&&jn(a)==4)Gr(a.Ea,0,a);else if(Xe(a,"readystatechange"),jn(a)==4){a.h=!1;try{const Y=a.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=Y===0){var L=String(a.D).match(Hl)[1]||null;!L&&c.self&&c.self.location&&(L=c.self.location.protocol.slice(0,-1)),_=!Ld.test(L?L.toLowerCase():"")}p=_}if(p)Xe(a,"complete"),Xe(a,"success");else{a.m=6;try{var U=2<jn(a)?a.g.statusText:""}catch{U=""}a.l=U+" ["+a.Z()+"]",Jl(a)}}finally{$i(a)}}}}function $i(a,h){if(a.g){ec(a);const p=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Xe(a,"ready");try{p.onreadystatechange=_}catch{}}}function ec(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function jn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<jn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Xo(h)}};function da(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function tc(a){const h={};a=(a.g&&2<=jn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(E(a[_]))continue;var p=C(a[_]);const L=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const U=h[L]||[];h[L]=U,U.push(p)}w(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function f(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function m(a){this.Aa=0,this.i=[],this.j=new D,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=f("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=f("baseRetryDelayMs",5e3,a),this.cb=f("retryDelaySeedMs",1e4,a),this.Wa=f("forwardChannelMaxRetries",2,a),this.wa=f("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ra(a&&a.concurrentRequestLimit),this.Da=new Dd,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=m.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,_){nt(0),this.W=a,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=Md(this,null,this.W),W(this)};function k(a){if($(a),a.G==3){var h=a.U++,p=vn(a.I);if(Re(p,"SID",a.K),Re(p,"RID",h),Re(p,"TYPE","terminate"),te(a,p),h=new gn(a,a.j,h),h.L=2,h.v=ye(vn(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=h.v,p=!0),p||(h.g=nc(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ta(h)}ni(a)}function P(a){a.g&&(lt(a),a.g.cancel(),a.g=null)}function $(a){P(a),a.u&&(c.clearTimeout(a.u),a.u=null),de(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function W(a){if(!he(a.h)&&!a.s){a.s=!0;var h=a.Ga;Sn||oe(),J||(Sn(),J=!0),X.add(h,a),a.B=0}}function K(a,h){return mt(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=vr(y(a.Ga,a,h),ti(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const L=new gn(this,this.j,a);let U=this.o;if(this.S&&(U?(U=x(U),T(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Ee(this,L,h),p=vn(this.I),Re(p,"RID",a),Re(p,"CVER",22),this.D&&Re(p,"X-HTTP-Session-Id",this.D),te(this,p),U&&(this.O?h="headers="+encodeURIComponent(String(is(U)))+"&"+h:this.m&&zi(p,this.m,U)),ia(this.h,L),this.Ua&&Re(p,"TYPE","init"),this.P?(Re(p,"$req",h),Re(p,"SID","null"),L.T=!0,rt(L,p,null)):rt(L,p,h),this.G=2}}else this.G==3&&(a?Q(this,a):this.i.length==0||he(this.h)||Q(this))};function Q(a,h){var p;h?p=h.l:p=a.U++;const _=vn(a.I);Re(_,"SID",a.K),Re(_,"RID",p),Re(_,"AID",a.T),te(a,_),a.m&&a.o&&zi(_,a.m,a.o),p=new gn(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Ee(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ia(a.h,p),rt(p,_,h)}function te(a,h){a.H&&V(a.H,function(p,_){Re(h,_,p)}),a.l&&ql({},function(p,_){Re(h,_,p)})}function Ee(a,h,p){p=Math.min(a.i.length,p);var _=a.l?y(a.l.Na,a.l,a):null;e:{var L=a.i;let U=-1;for(;;){const Y=["count="+p];U==-1?0<p?(U=L[0].g,Y.push("ofs="+U)):U=0:Y.push("ofs="+U);let Pe=!0;for(let vt=0;vt<p;vt++){let we=L[vt].g;const kt=L[vt].map;if(we-=U,0>we)U=Math.max(0,L[vt].g-100),Pe=!1;else try{Od(kt,Y,"req"+we+"_")}catch{_&&_(kt)}}if(Pe){_=Y.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,_}function Te(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Sn||oe(),J||(Sn(),J=!0),X.add(h,a),a.v=0}}function Je(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=vr(y(a.Fa,a),ti(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,De(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=vr(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),P(this),De(this))};function lt(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function De(a){a.g=new gn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=vn(a.qa);Re(h,"RID","rpc"),Re(h,"SID",a.K),Re(h,"AID",a.T),Re(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Re(h,"TO",a.ja),Re(h,"TYPE","xmlhttp"),te(a,h),a.m&&a.o&&zi(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=ye(vn(h)),p.m=null,p.P=!0,Zr(p,a)}t.Za=function(){this.C!=null&&(this.C=null,P(this),Je(this),nt(19))};function de(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Dn(a,h){var p=null;if(a.g==h){de(a),lt(a),a.g=null;var _=2}else if(sa(a.h,h))p=h.D,xr(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var L=a.B;_=Qr(),Xe(_,new Mi(_,p)),W(a)}else Te(a);else if(L=h.s,L==3||L==0&&0<h.X||!(_==1&&K(a,h)||_==2&&Je(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),L){case 1:Qn(a,5);break;case 4:Qn(a,10);break;case 3:Qn(a,6);break;default:Qn(a,2)}}}function ti(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function Qn(a,h){if(a.j.info("Error code "+h),h==2){var p=y(a.fb,a),_=a.Xa;const L=!_;_=new Wn(_||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Xs(_,"https"),ye(_),L?jd(_.toString(),p):ca(_.toString(),p)}else nt(2);a.G=0,a.l&&a.l.sa(h),ni(a),$(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function ni(a){if(a.G=0,a.ka=[],a.l){const h=$l(a.h);(h.length!=0||a.i.length!=0)&&(z(a.ka,h),z(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function Md(a,h,p){var _=p instanceof Wn?vn(p):new Wn(p);if(_.g!="")h&&(_.g=h+"."+_.g),Js(_,_.s);else{var L=c.location;_=L.protocol,h=h?h+"."+L.hostname:L.hostname,L=+L.port;var U=new Wn(null);_&&Xs(U,_),h&&(U.g=h),L&&Js(U,L),p&&(U.l=p),_=U}return p=a.D,h=a.ya,p&&h&&Re(_,p,h),Re(_,"VER",a.la),te(a,_),_}function nc(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Me(new wr({eb:p})):new Me(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function rc(){}t=rc.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function St(){}St.prototype.g=function(a,h){return new gt(a,h)};function gt(a,h){tt.call(this),this.g=new m(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!E(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Bi(this)}j(gt,tt),gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){k(this.g)},gt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=on(a),a=p);h.i.push(new zl(h.Ya++,a)),h.G==3&&W(h)},gt.prototype.N=function(){this.g.l=null,delete this.j,k(this.g),delete this.g,gt.aa.N.call(this)};function zm(a){Ft.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}j(zm,Ft);function $m(){gr.call(this),this.status=1}j($m,gr);function Bi(a){this.g=a}j(Bi,rc),Bi.prototype.ua=function(){Xe(this.g,"a")},Bi.prototype.ta=function(a){Xe(this.g,new zm(a))},Bi.prototype.sa=function(a){Xe(this.g,new $m)},Bi.prototype.ra=function(){Xe(this.g,"b")},St.prototype.createWebChannel=St.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,H_=function(){return new St},q_=function(){return Qr()},B_=ln,Cf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xr.NO_ERROR=0,Xr.TIMEOUT=8,Xr.HTTP_ERROR=6,Wc=Xr,Vi.COMPLETE="complete",$_=Vi,an.EventType=pe,pe.OPEN="a",pe.CLOSE="b",pe.ERROR="c",pe.MESSAGE="d",tt.prototype.listen=tt.prototype.K,Aa=an,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,z_=Me}).apply(typeof Ec<"u"?Ec:typeof self<"u"?self:typeof window<"u"?window:{});const A0="@firebase/firestore";/**
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
 */let jt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
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
 */let Bo="10.14.0";/**
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
 */const bi=new qp("@firebase/firestore");function wa(){return bi.logLevel}function ee(t,...e){if(bi.logLevel<=ve.DEBUG){const n=e.map(nm);bi.debug(`Firestore (${Bo}): ${t}`,...n)}}function Fr(t,...e){if(bi.logLevel<=ve.ERROR){const n=e.map(nm);bi.error(`Firestore (${Bo}): ${t}`,...n)}}function Po(t,...e){if(bi.logLevel<=ve.WARN){const n=e.map(nm);bi.warn(`Firestore (${Bo}): ${t}`,...n)}}function nm(t){if(typeof t=="string")return t;try{/**
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
 */function le(t="Unexpected state"){const e=`FIRESTORE (${Bo}) INTERNAL ASSERTION FAILED: `+t;throw Fr(e),new Error(e)}function Ce(t,e){t||le()}function ue(t,e){return t}/**
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
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends dr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class W_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class M2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(jt.UNAUTHENTICATED))}shutdown(){}}class V2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class F2{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ce(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Pr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Pr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Pr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string"),new W_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new jt(e)}}class U2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class z2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new U2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class B2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ce(this.o===void 0);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.R=n.token,new $2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function q2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class K_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=q2(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function jo(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class at{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new at(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new at(0,0))}static max(){return new ce(new at(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class pl{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return pl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends pl{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const H2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends pl{construct(e,n,r){return new _t(e,n,r)}static isValidIdentifier(e){return H2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ne(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new ne(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ne(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
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
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(Fe.fromString(e))}static fromName(e){return new ie(Fe.fromString(e).popFirst(5))}static empty(){return new ie(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new Fe(e.slice()))}}function W2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new at(n+1,0):new at(n,r));return new Os(s,ie.empty(),e)}function K2(t){return new Os(t.readTime,t.key,-1)}class Os{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Os(ce.min(),ie.empty(),-1)}static max(){return new Os(ce.max(),ie.empty(),-1)}}function G2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
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
 */const Q2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Y2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Pl(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==Q2)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,r)=>{n(e)})}static reject(e){return new H((n,r)=>{r(e)})}static waitFor(e){return new H((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=H.resolve(!1);for(const r of e)n=n.next(s=>s?H.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new H((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;n(e[d]).next(g=>{o[d]=g,++c,c===i&&r(o)},g=>s(g))}})}static doWhile(e,n){return new H((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function X2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function jl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class rm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}rm.oe=-1;function cd(t){return t==null}function Au(t){return t===0&&1/t==-1/0}function J2(t){return typeof t=="number"&&Number.isInteger(t)&&!Au(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function R0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ai(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function G_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class He{constructor(e,n){this.comparator=e,this.root=n||xt.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tc(this.root,e,this.comparator,!0)}}class Tc{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??xt.RED,this.left=s??xt.EMPTY,this.right=i??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new xt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return xt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,r,s,i){return this}insert(e,n,r){return new xt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class bt{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new P0(this.data.getIterator())}getIteratorFrom(e){return new P0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof bt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new bt(this.comparator);return n.data=e,n}}class P0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class dn{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new dn([])}unionWith(e){let n=new bt(_t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return jo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Q_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Q_("Invalid base64 string: "+i):i}}(e);return new Tt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const Z2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ls(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=Z2.exec(t);if(Ce(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ei(t){return typeof t=="string"?Tt.fromBase64String(t):Tt.fromUint8Array(t)}/**
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
 */function sm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function im(t){const e=t.mapValue.fields.__previous_value__;return sm(e)?im(e):e}function ml(t){const e=Ls(t.mapValue.fields.__local_write_time__.timestampValue);return new at(e.seconds,e.nanos)}/**
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
 */class eS{constructor(e,n,r,s,i,o,c,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d}}class gl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new gl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ic={mapValue:{}};function Ti(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sm(t)?4:nS(t)?9007199254740991:tS(t)?10:11:le()}function cr(t,e){if(t===e)return!0;const n=Ti(t);if(n!==Ti(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ml(t).isEqual(ml(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ls(s.timestampValue),c=Ls(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ei(s.bytesValue).isEqual(Ei(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Qe(s.geoPointValue.latitude)===Qe(i.geoPointValue.latitude)&&Qe(s.geoPointValue.longitude)===Qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Qe(s.integerValue)===Qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Qe(s.doubleValue),c=Qe(i.doubleValue);return o===c?Au(o)===Au(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return jo(t.arrayValue.values||[],e.arrayValue.values||[],cr);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(R0(o)!==R0(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!cr(o[u],c[u])))return!1;return!0}(t,e);default:return le()}}function vl(t,e){return(t.values||[]).find(n=>cr(n,e))!==void 0}function Do(t,e){if(t===e)return 0;const n=Ti(t),r=Ti(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Qe(i.integerValue||i.doubleValue),u=Qe(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(t,e);case 3:return j0(t.timestampValue,e.timestampValue);case 4:return j0(ml(t),ml(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Ei(i),u=Ei(o);return c.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),u=o.split("/");for(let d=0;d<c.length&&d<u.length;d++){const g=be(c[d],u[d]);if(g!==0)return g}return be(c.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=be(Qe(i.latitude),Qe(o.latitude));return c!==0?c:be(Qe(i.longitude),Qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return D0(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,u,d,g;const v=i.fields||{},y=o.fields||{},N=(c=v.value)===null||c===void 0?void 0:c.arrayValue,j=(u=y.value)===null||u===void 0?void 0:u.arrayValue,O=be(((d=N==null?void 0:N.values)===null||d===void 0?void 0:d.length)||0,((g=j==null?void 0:j.values)===null||g===void 0?void 0:g.length)||0);return O!==0?O:D0(N,j)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ic.mapValue&&o===Ic.mapValue)return 0;if(i===Ic.mapValue)return 1;if(o===Ic.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=o.fields||{},g=Object.keys(d);u.sort(),g.sort();for(let v=0;v<u.length&&v<g.length;++v){const y=be(u[v],g[v]);if(y!==0)return y;const N=Do(c[u[v]],d[g[v]]);if(N!==0)return N}return be(u.length,g.length)}(t.mapValue,e.mapValue);default:throw le()}}function j0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=Ls(t),r=Ls(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function D0(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Do(n[s],r[s]);if(i)return i}return be(n.length,r.length)}function Oo(t){return Af(t)}function Af(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ls(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ei(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Af(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Af(n.fields[o])}`;return s+"}"}(t.mapValue):le()}function Rf(t){return!!t&&"integerValue"in t}function om(t){return!!t&&"arrayValue"in t}function O0(t){return!!t&&"nullValue"in t}function L0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Kc(t){return!!t&&"mapValue"in t}function tS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ha(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ai(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ha(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ha(t.arrayValue.values[n]);return e}return Object.assign({},t)}function nS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Yt{constructor(e){this.value=e}static empty(){return new Yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Kc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ha(n)}setAll(e){let n=_t.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ha(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Kc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Kc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ai(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Yt(Ha(this.value))}}function Y_(t){const e=[];return Ai(t.fields,(n,r)=>{const s=new _t([n]);if(Kc(r)){const i=Y_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new dn(e)}/**
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
 */class Ot{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Ot(e,0,ce.min(),ce.min(),ce.min(),Yt.empty(),0)}static newFoundDocument(e,n,r,s){return new Ot(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new Ot(e,2,n,ce.min(),ce.min(),Yt.empty(),0)}static newUnknownDocument(e,n){return new Ot(e,3,n,ce.min(),ce.min(),Yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ru{constructor(e,n){this.position=e,this.inclusive=n}}function M0(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=Do(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function V0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Pu{constructor(e,n="asc"){this.field=e,this.dir=n}}function rS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */let X_=class{};class it extends X_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new iS(e,n,r):n==="array-contains"?new lS(e,r):n==="in"?new cS(e,r):n==="not-in"?new uS(e,r):n==="array-contains-any"?new dS(e,r):new it(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new oS(e,r):new aS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Do(n,this.value)):n!==null&&Ti(this.value)===Ti(n)&&this.matchesComparison(Do(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ur extends X_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ur(e,n)}matches(e){return J_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function J_(t){return t.op==="and"}function Z_(t){return sS(t)&&J_(t)}function sS(t){for(const e of t.filters)if(e instanceof ur)return!1;return!0}function Pf(t){if(t instanceof it)return t.field.canonicalString()+t.op.toString()+Oo(t.value);if(Z_(t))return t.filters.map(e=>Pf(e)).join(",");{const e=t.filters.map(n=>Pf(n)).join(",");return`${t.op}(${e})`}}function ew(t,e){return t instanceof it?function(r,s){return s instanceof it&&r.op===s.op&&r.field.isEqual(s.field)&&cr(r.value,s.value)}(t,e):t instanceof ur?function(r,s){return s instanceof ur&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&ew(o,s.filters[c]),!0):!1}(t,e):void le()}function tw(t){return t instanceof it?function(n){return`${n.field.canonicalString()} ${n.op} ${Oo(n.value)}`}(t):t instanceof ur?function(n){return n.op.toString()+" {"+n.getFilters().map(tw).join(" ,")+"}"}(t):"Filter"}class iS extends it{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class oS extends it{constructor(e,n){super(e,"in",n),this.keys=nw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class aS extends it{constructor(e,n){super(e,"not-in",n),this.keys=nw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class lS extends it{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return om(n)&&vl(n.arrayValue,this.value)}}class cS extends it{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vl(this.value.arrayValue,n)}}class uS extends it{constructor(e,n){super(e,"not-in",n)}matches(e){if(vl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!vl(this.value.arrayValue,n)}}class dS extends it{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!om(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>vl(this.value.arrayValue,r))}}/**
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
 */class hS{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function F0(t,e=null,n=[],r=[],s=null,i=null,o=null){return new hS(t,e,n,r,s,i,o)}function am(t){const e=ue(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Pf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),cd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Oo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Oo(r)).join(",")),e.ue=n}return e.ue}function lm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!rS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ew(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!V0(t.startAt,e.startAt)&&V0(t.endAt,e.endAt)}function jf(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ud{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function fS(t,e,n,r,s,i,o,c){return new ud(t,e,n,r,s,i,o,c)}function dd(t){return new ud(t)}function U0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pS(t){return t.collectionGroup!==null}function Wa(t){const e=ue(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new bt(_t.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Pu(i,r))}),n.has(_t.keyField().canonicalString())||e.ce.push(new Pu(_t.keyField(),r))}return e.ce}function ar(t){const e=ue(t);return e.le||(e.le=mS(e,Wa(t))),e.le}function mS(t,e){if(t.limitType==="F")return F0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Pu(s.field,i)});const n=t.endAt?new Ru(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ru(t.startAt.position,t.startAt.inclusive):null;return F0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Df(t,e,n){return new ud(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hd(t,e){return lm(ar(t),ar(e))&&t.limitType===e.limitType}function rw(t){return`${am(ar(t))}|lt:${t.limitType}`}function Wi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>tw(s)).join(", ")}]`),cd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Oo(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Oo(s)).join(",")),`Target(${r})`}(ar(t))}; limitType=${t.limitType})`}function fd(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Wa(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,u){const d=M0(o,c,u);return o.inclusive?d<=0:d<0}(r.startAt,Wa(r),s)||r.endAt&&!function(o,c,u){const d=M0(o,c,u);return o.inclusive?d>=0:d>0}(r.endAt,Wa(r),s))}(t,e)}function gS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sw(t){return(e,n)=>{let r=!1;for(const s of Wa(t)){const i=vS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function vS(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(i,o,c){const u=o.data.field(i),d=c.data.field(i);return u!==null&&d!==null?Do(u,d):le()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
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
 */class qo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ai(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return G_(this.inner)}size(){return this.innerSize}}/**
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
 */const yS=new He(ie.comparator);function Ur(){return yS}const iw=new He(ie.comparator);function Ra(...t){let e=iw;for(const n of t)e=e.insert(n.key,n);return e}function ow(t){let e=iw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ci(){return Ka()}function aw(){return Ka()}function Ka(){return new qo(t=>t.toString(),(t,e)=>t.isEqual(e))}const xS=new He(ie.comparator),_S=new bt(ie.comparator);function ge(...t){let e=_S;for(const n of t)e=e.add(n);return e}const wS=new bt(be);function bS(){return wS}/**
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
 */function cm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Au(e)?"-0":e}}function lw(t){return{integerValue:""+t}}function ES(t,e){return J2(e)?lw(e):cm(t,e)}/**
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
 */class pd{constructor(){this._=void 0}}function TS(t,e,n){return t instanceof ju?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&sm(i)&&(i=im(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof yl?uw(t,e):t instanceof xl?dw(t,e):function(s,i){const o=cw(s,i),c=z0(o)+z0(s.Pe);return Rf(o)&&Rf(s.Pe)?lw(c):cm(s.serializer,c)}(t,e)}function IS(t,e,n){return t instanceof yl?uw(t,e):t instanceof xl?dw(t,e):n}function cw(t,e){return t instanceof Du?function(r){return Rf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ju extends pd{}class yl extends pd{constructor(e){super(),this.elements=e}}function uw(t,e){const n=hw(e);for(const r of t.elements)n.some(s=>cr(s,r))||n.push(r);return{arrayValue:{values:n}}}class xl extends pd{constructor(e){super(),this.elements=e}}function dw(t,e){let n=hw(e);for(const r of t.elements)n=n.filter(s=>!cr(s,r));return{arrayValue:{values:n}}}class Du extends pd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function z0(t){return Qe(t.integerValue||t.doubleValue)}function hw(t){return om(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function NS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof yl&&s instanceof yl||r instanceof xl&&s instanceof xl?jo(r.elements,s.elements,cr):r instanceof Du&&s instanceof Du?cr(r.Pe,s.Pe):r instanceof ju&&s instanceof ju}(t.transform,e.transform)}class SS{constructor(e,n){this.version=e,this.transformResults=n}}class Tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class md{}function fw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new um(t.key,Tn.none()):new Dl(t.key,t.data,Tn.none());{const n=t.data,r=Yt.empty();let s=new bt(_t.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new $s(t.key,r,new dn(s.toArray()),Tn.none())}}function kS(t,e,n){t instanceof Dl?function(s,i,o){const c=s.value.clone(),u=B0(s.fieldTransforms,i,o.transformResults);c.setAll(u),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof $s?function(s,i,o){if(!Gc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=B0(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(pw(s)),u.setAll(c),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ga(t,e,n,r){return t instanceof Dl?function(i,o,c,u){if(!Gc(i.precondition,o))return c;const d=i.value.clone(),g=q0(i.fieldTransforms,u,o);return d.setAll(g),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof $s?function(i,o,c,u){if(!Gc(i.precondition,o))return c;const d=q0(i.fieldTransforms,u,o),g=o.data;return g.setAll(pw(i)),g.setAll(d),o.convertToFoundDocument(o.version,g).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(v=>v.field))}(t,e,n,r):function(i,o,c){return Gc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function CS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=cw(r.transform,s||null);i!=null&&(n===null&&(n=Yt.empty()),n.set(r.field,i))}return n||null}function $0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&jo(r,s,(i,o)=>NS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Dl extends md{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $s extends md{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function B0(t,e,n){const r=new Map;Ce(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,IS(o,c,n[s]))}return r}function q0(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,TS(i,o,e))}return r}class um extends md{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AS extends md{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class RS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&kS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ga(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ga(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=aw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const u=fw(o,c);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&jo(this.mutations,e.mutations,(n,r)=>$0(n,r))&&jo(this.baseMutations,e.baseMutations,(n,r)=>$0(n,r))}}class dm{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ce(e.mutations.length===r.length);let s=function(){return xS}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new dm(e,n,r,s)}}/**
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
 */class PS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class jS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ze,xe;function DS(t){switch(t){default:return le();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0}}function mw(t){if(t===void 0)return Fr("GRPC error has no .code"),q.UNKNOWN;switch(t){case Ze.OK:return q.OK;case Ze.CANCELLED:return q.CANCELLED;case Ze.UNKNOWN:return q.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return q.INTERNAL;case Ze.UNAVAILABLE:return q.UNAVAILABLE;case Ze.UNAUTHENTICATED:return q.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case Ze.NOT_FOUND:return q.NOT_FOUND;case Ze.ALREADY_EXISTS:return q.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return q.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case Ze.ABORTED:return q.ABORTED;case Ze.OUT_OF_RANGE:return q.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return q.UNIMPLEMENTED;case Ze.DATA_LOSS:return q.DATA_LOSS;default:return le()}}(xe=Ze||(Ze={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function OS(){return new TextEncoder}/**
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
 */const LS=new hi([4294967295,4294967295],0);function H0(t){const e=OS().encode(t),n=new U_;return n.update(e),new Uint8Array(n.digest())}function W0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hi([n,r],0),new hi([s,i],0)]}class hm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Pa(`Invalid padding: ${n}`);if(r<0)throw new Pa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Pa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Pa(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=hi.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(hi.fromNumber(r)));return s.compare(LS)===1&&(s=new hi([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=H0(e),[r,s]=W0(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new hm(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=H0(e),[r,s]=W0(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Pa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class gd{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ol.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new gd(ce.min(),s,new He(be),Ur(),ge())}}class Ol{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ol(r,n,ge(),ge(),ge())}}/**
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
 */class Qc{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class gw{constructor(e,n){this.targetId=e,this.me=n}}class vw{constructor(e,n,r=Tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class K0{constructor(){this.fe=0,this.ge=Q0(),this.pe=Tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ge(),n=ge(),r=ge();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le()}}),new Ol(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Q0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class MS{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ur(),this.qe=G0(),this.Qe=new He(be)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(jf(i))if(r===0){const o=new ie(i.path);this.Ue(n,o,Ot.newNoDocument(o,ce.min()))}else Ce(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),u=c?this.Xe(c,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Ei(r).toUint8Array()}catch(u){if(u instanceof Q_)return Po("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new hm(o,s,i)}catch(u){return Po(u instanceof Pa?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&jf(c.target)){const u=new ie(c.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ot.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ge();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new gd(e,n,this.Qe,this.ke,r);return this.ke=Ur(),this.qe=G0(),this.Qe=new He(be),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new K0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new bt(be),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new K0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function G0(){return new He(ie.comparator)}function Q0(){return new He(ie.comparator)}const VS={asc:"ASCENDING",desc:"DESCENDING"},FS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},US={and:"AND",or:"OR"};class zS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Of(t,e){return t.useProto3Json||cd(e)?e:{value:e}}function Ou(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $S(t,e){return Ou(t,e.toTimestamp())}function lr(t){return Ce(!!t),ce.fromTimestamp(function(n){const r=Ls(n);return new at(r.seconds,r.nanos)}(t))}function fm(t,e){return Lf(t,e).canonicalString()}function Lf(t,e){const n=function(s){return new Fe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function xw(t){const e=Fe.fromString(t);return Ce(Tw(e)),e}function Mf(t,e){return fm(t.databaseId,e.path)}function yh(t,e){const n=xw(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(ww(n))}function _w(t,e){return fm(t.databaseId,e)}function BS(t){const e=xw(t);return e.length===4?Fe.emptyPath():ww(e)}function Vf(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ww(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Y0(t,e,n){return{name:Mf(t,e),fields:n.value.mapValue.fields}}function qS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,g){return d.useProto3Json?(Ce(g===void 0||typeof g=="string"),Tt.fromBase64String(g||"")):(Ce(g===void 0||g instanceof Buffer||g instanceof Uint8Array),Tt.fromUint8Array(g||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(d){const g=d.code===void 0?q.UNKNOWN:mw(d.code);return new ne(g,d.message||"")}(o);n=new vw(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=yh(t,r.document.name),i=lr(r.document.updateTime),o=r.document.createTime?lr(r.document.createTime):ce.min(),c=new Yt({mapValue:{fields:r.document.fields}}),u=Ot.newFoundDocument(s,i,o,c),d=r.targetIds||[],g=r.removedTargetIds||[];n=new Qc(d,g,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=yh(t,r.document),i=r.readTime?lr(r.readTime):ce.min(),o=Ot.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Qc([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=yh(t,r.document),i=r.removedTargetIds||[];n=new Qc([],i,s,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new jS(s,i),c=r.targetId;n=new gw(c,o)}}return n}function HS(t,e){let n;if(e instanceof Dl)n={update:Y0(t,e.key,e.value)};else if(e instanceof um)n={delete:Mf(t,e.key)};else if(e instanceof $s)n={update:Y0(t,e.key,e.data),updateMask:ek(e.fieldMask)};else{if(!(e instanceof AS))return le();n={verify:Mf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof ju)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof yl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof xl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Du)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw le()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:$S(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le()}(t,e.precondition)),n}function WS(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?lr(s.updateTime):lr(i);return o.isEqual(ce.min())&&(o=lr(i)),new SS(o,s.transformResults||[])}(n,e))):[]}function KS(t,e){return{documents:[_w(t,e.path)]}}function GS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=_w(t,s);const i=function(d){if(d.length!==0)return Ew(ur.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(g=>function(y){return{field:Ki(y.field),direction:XS(y.dir)}}(g))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Of(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:s}}function QS(t){let e=BS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ce(r===1);const g=n.from[0];g.allDescendants?s=g.collectionId:e=e.child(g.collectionId)}let i=[];n.where&&(i=function(v){const y=bw(v);return y instanceof ur&&Z_(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(v){return v.map(y=>function(j){return new Pu(Gi(j.field),function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(j.direction))}(y))}(n.orderBy));let c=null;n.limit&&(c=function(v){let y;return y=typeof v=="object"?v.value:v,cd(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(v){const y=!!v.before,N=v.values||[];return new Ru(N,y)}(n.startAt));let d=null;return n.endAt&&(d=function(v){const y=!v.before,N=v.values||[];return new Ru(N,y)}(n.endAt)),fS(e,s,o,i,c,"F",u,d)}function YS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Gi(n.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Gi(n.unaryFilter.field);return it.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Gi(n.unaryFilter.field);return it.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Gi(n.unaryFilter.field);return it.create(o,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(n){return it.create(Gi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ur.create(n.compositeFilter.filters.map(r=>bw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le()}}(n.compositeFilter.op))}(t):le()}function XS(t){return VS[t]}function JS(t){return FS[t]}function ZS(t){return US[t]}function Ki(t){return{fieldPath:t.canonicalString()}}function Gi(t){return _t.fromServerFormat(t.fieldPath)}function Ew(t){return t instanceof it?function(n){if(n.op==="=="){if(L0(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NAN"}};if(O0(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(L0(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NOT_NAN"}};if(O0(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ki(n.field),op:JS(n.op),value:n.value}}}(t):t instanceof ur?function(n){const r=n.getFilters().map(s=>Ew(s));return r.length===1?r[0]:{compositeFilter:{op:ZS(n.op),filters:r}}}(t):le()}function ek(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Tw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class _s{constructor(e,n,r,s,i=ce.min(),o=ce.min(),c=Tt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new _s(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new _s(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class tk{constructor(e){this.ct=e}}function nk(t){const e=QS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Df(e,e.limit,"L"):e}/**
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
 */class rk{constructor(){this.un=new sk}addToCollectionParentIndex(e,n){return this.un.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve(Os.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve(Os.min())}updateCollectionGroup(e,n,r){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class sk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new bt(Fe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new bt(Fe.comparator)).toArray()}}/**
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
 */class Lo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Lo(0)}static kn(){return new Lo(-1)}}/**
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
 */class ik{constructor(){this.changes=new qo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?H.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ok{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class ak{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ga(r.mutation,s,dn.empty(),at.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const s=ci();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ra();return i.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ci();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Ur();const o=Ka(),c=function(){return Ka()}();return n.forEach((u,d)=>{const g=r.get(d.key);s.has(d.key)&&(g===void 0||g.mutation instanceof $s)?i=i.insert(d.key,d):g!==void 0?(o.set(d.key,g.mutation.getFieldMask()),Ga(g.mutation,d,g.mutation.getFieldMask(),at.now())):o.set(d.key,dn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,g)=>o.set(d,g)),n.forEach((d,g)=>{var v;return c.set(d,new ok(g,(v=o.get(d))!==null&&v!==void 0?v:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Ka();let s=new He((o,c)=>o-c),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let g=r.get(u)||dn.empty();g=c.applyToLocalView(d,g),r.set(u,g);const v=(s.get(c.batchId)||ge()).add(u);s=s.insert(c.batchId,v)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,g=u.value,v=aw();g.forEach(y=>{if(!i.has(y)){const N=fw(n.get(y),r.get(y));N!==null&&v.set(y,N),i=i.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,v))}return H.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):H.resolve(ci());let c=-1,u=i;return o.next(d=>H.forEach(d,(g,v)=>(c<v.largestBatchId&&(c=v.largestBatchId),i.get(g)?H.resolve():this.remoteDocumentCache.getEntry(e,g).next(y=>{u=u.insert(g,y)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,ge())).next(g=>({batchId:c,changes:ow(g)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let s=Ra();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ra();return this.indexManager.getCollectionParents(e,i).next(c=>H.forEach(c,u=>{const d=function(v,y){return new ud(y,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(g=>{g.forEach((v,y)=>{o=o.insert(v,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,d)=>{const g=d.getKey();o.get(g)===null&&(o=o.insert(g,Ot.newInvalidDocument(g)))});let c=Ra();return o.forEach((u,d)=>{const g=i.get(u);g!==void 0&&Ga(g.mutation,d,dn.empty(),at.now()),fd(n,d)&&(c=c.insert(u,d))}),c})}}/**
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
 */class lk{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return H.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:lr(s.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:nk(s.bundledQuery),readTime:lr(s.readTime)}}(n)),H.resolve()}}/**
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
 */class ck{constructor(){this.overlays=new He(ie.comparator),this.Ir=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ci();return H.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),H.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),H.resolve()}getOverlaysForCollection(e,n,r){const s=ci(),i=n.length+1,o=new ie(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return H.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new He((d,g)=>d-g);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let g=i.get(d.largestBatchId);g===null&&(g=ci(),i=i.insert(d.largestBatchId,g)),g.set(d.getKey(),d)}}const c=ci(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,g)=>c.set(d,g)),!(c.size()>=s)););return H.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new PS(n,r));let i=this.Ir.get(n);i===void 0&&(i=ge(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class uk{constructor(){this.sessionToken=Tt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,H.resolve()}}/**
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
 */class pm{constructor(){this.Tr=new bt(ut.Er),this.dr=new bt(ut.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ut(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ut(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ie(new Fe([])),r=new ut(n,e),s=new ut(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ie(new Fe([])),r=new ut(n,e),s=new ut(n,e+1);let i=ge();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ut(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ie.comparator(e.key,n.key)||be(e.wr,n.wr)}static Ar(e,n){return be(e.wr,n.wr)||ie.comparator(e.key,n.key)}}/**
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
 */class dk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new bt(ut.Er)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new RS(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new ut(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return H.resolve(o)}lookupMutationBatch(e,n){return H.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return H.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ut(n,0),s=new ut(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),H.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new bt(be);return n.forEach(s=>{const i=new ut(s,0),o=new ut(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),H.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const o=new ut(new ie(i),0);let c=new bt(be);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.wr)),!0)},o),H.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ce(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return H.forEach(n.mutations,s=>{const i=new ut(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ut(n,0),s=this.br.firstAfterOrEqual(r);return H.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class hk{constructor(e){this.Mr=e,this.docs=function(){return new He(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return H.resolve(r?r.document.mutableCopy():Ot.newInvalidDocument(n))}getEntries(e,n){let r=Ur();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ot.newInvalidDocument(s))}),H.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Ur();const o=n.path,c=new ie(o.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:g}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||G2(K2(g),r)<=0||(s.has(g.key)||fd(n,g))&&(i=i.insert(g.key,g.mutableCopy()))}return H.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le()}Or(e,n){return H.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new fk(this)}getSize(e){return H.resolve(this.size)}}class fk extends ik{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),H.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class pk{constructor(e){this.persistence=e,this.Nr=new qo(n=>am(n),lm),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.Lr=0,this.Br=new pm,this.targetCount=0,this.kr=Lo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),H.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Lo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.Kn(n),H.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),H.waitFor(i).next(()=>s)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return H.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),H.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),H.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),H.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return H.resolve(r)}containsKey(e,n){return H.resolve(this.Br.containsKey(n))}}/**
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
 */class mk{constructor(e,n){this.qr={},this.overlays={},this.Qr=new rm(0),this.Kr=!1,this.Kr=!0,this.$r=new uk,this.referenceDelegate=e(this),this.Ur=new pk(this),this.indexManager=new rk,this.remoteDocumentCache=function(s){return new hk(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new tk(n),this.Gr=new lk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ck,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new dk(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new gk(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return H.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class gk extends Y2{constructor(e){super(),this.currentSequenceNumber=e}}class mm{constructor(e){this.persistence=e,this.Jr=new pm,this.Yr=null}static Zr(e){return new mm(e)}get Xr(){if(this.Yr)return this.Yr;throw le()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),H.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),H.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.Xr,r=>{const s=ie.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ce.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return H.or([()=>H.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class gm{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ge(),s=ge();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new gm(e,n.fromCache,r,s)}}/**
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
 */class vk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class yk{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return sT()?8:X2(Mt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new vk;return this.Xi(e,n,o).next(c=>{if(i.result=c,this.zi)return this.es(e,n,o,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(wa()<=ve.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",Wi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),H.resolve()):(wa()<=ve.DEBUG&&ee("QueryEngine","Query:",Wi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(wa()<=ve.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",Wi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ar(n))):H.resolve())}Yi(e,n){if(U0(n))return H.resolve(null);let r=ar(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Df(n,null,"F"),r=ar(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ge(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,c);return this.ns(n,d,o,u.readTime)?this.Yi(e,Df(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,s){return U0(n)||s.isEqual(ce.min())?H.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?H.resolve(null):(wa()<=ve.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Wi(n)),this.rs(e,o,n,W2(s,-1)).next(c=>c))})}ts(e,n){let r=new bt(sw(e));return n.forEach((s,i)=>{fd(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return wa()<=ve.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Wi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Os.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class xk{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new He(be),this._s=new qo(i=>am(i),lm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ak(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function _k(t,e,n,r){return new xk(t,e,n,r)}async function Iw(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let u=ge();for(const d of s){o.push(d.batchId);for(const g of d.mutations)u=u.add(g.key)}for(const d of i){c.push(d.batchId);for(const g of d.mutations)u=u.add(g.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:c}))})})}function wk(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,u,d,g){const v=d.batch,y=v.keys();let N=H.resolve();return y.forEach(j=>{N=N.next(()=>g.getEntry(u,j)).next(O=>{const z=d.docVersions.get(j);Ce(z!==null),O.version.compareTo(z)<0&&(v.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),g.addEntry(O)))})}),N.next(()=>c.mutationQueue.removeMutationBatch(u,v))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=ge();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Nw(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function bk(t,e){const n=ue(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((g,v)=>{const y=s.get(v);if(!y)return;c.push(n.Ur.removeMatchingKeys(i,g.removedDocuments,v).next(()=>n.Ur.addMatchingKeys(i,g.addedDocuments,v)));let N=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(v)!==null?N=N.withResumeToken(Tt.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):g.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(g.resumeToken,r)),s=s.insert(v,N),function(O,z,I){return O.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(y,N,g)&&c.push(n.Ur.updateTargetData(i,N))});let u=Ur(),d=ge();if(e.documentUpdates.forEach(g=>{e.resolvedLimboDocuments.has(g)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,g))}),c.push(Ek(i,o,e.documentUpdates).next(g=>{u=g.Ps,d=g.Is})),!r.isEqual(ce.min())){const g=n.Ur.getLastRemoteSnapshotVersion(i).next(v=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(g)}return H.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(n.os=s,i))}function Ek(t,e,n){let r=ge(),s=ge();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Ur();return n.forEach((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(ce.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):ee("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function Tk(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ik(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,H.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new _s(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Ff(t,e,n){const r=ue(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!jl(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function X0(t,e,n){const r=ue(t);let s=ce.min(),i=ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,g){const v=ue(u),y=v._s.get(g);return y!==void 0?H.resolve(v.os.get(y)):v.Ur.getTargetData(d,g)}(r,o,ar(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:ge())).next(c=>(Nk(r,gS(e),c),{documents:c,Ts:i})))}function Nk(t,e,n){let r=t.us.get(e)||ce.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class J0{constructor(){this.activeTargetIds=bS()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Sk{constructor(){this.so=new J0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new J0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class kk{_o(e){}shutdown(){}}/**
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
 */class Z0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Nc=null;function xh(){return Nc===null?Nc=function(){return 268435456+Math.round(2147483648*Math.random())}():Nc++,"0x"+Nc.toString(16)}/**
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
 */const Ck={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Ak{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Pt="WebChannelConnection";class Rk extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const c=xh(),u=this.xo(n,r.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${c}:`,u,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,o),this.No(n,u,d,s).then(g=>(ee("RestConnection",`Received RPC '${n}' ${c}: `,g),g),g=>{throw Po("RestConnection",`RPC '${n}' ${c} failed with error: `,g,"url: ",u,"request:",s),g})}Lo(n,r,s,i,o,c){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=Ck[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=xh();return new Promise((o,c)=>{const u=new z_;u.setWithCredentials(!0),u.listenOnce($_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Wc.NO_ERROR:const g=u.getResponseJson();ee(Pt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(g)),o(g);break;case Wc.TIMEOUT:ee(Pt,`RPC '${e}' ${i} timed out`),c(new ne(q.DEADLINE_EXCEEDED,"Request time out"));break;case Wc.HTTP_ERROR:const v=u.getStatus();if(ee(Pt,`RPC '${e}' ${i} failed with status:`,v,"response text:",u.getResponseText()),v>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const N=y==null?void 0:y.error;if(N&&N.status&&N.message){const j=function(z){const I=z.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(I)>=0?I:q.UNKNOWN}(N.status);c(new ne(j,N.message))}else c(new ne(q.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ne(q.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{ee(Pt,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);ee(Pt,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const s=xh(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=H_(),c=q_(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const g=i.join("");ee(Pt,`Creating RPC '${e}' stream ${s}: ${g}`,u);const v=o.createWebChannel(g,u);let y=!1,N=!1;const j=new Ak({Io:z=>{N?ee(Pt,`Not sending because RPC '${e}' stream ${s} is closed:`,z):(y||(ee(Pt,`Opening RPC '${e}' stream ${s} transport.`),v.open(),y=!0),ee(Pt,`RPC '${e}' stream ${s} sending:`,z),v.send(z))},To:()=>v.close()}),O=(z,I,E)=>{z.listen(I,R=>{try{E(R)}catch(F){setTimeout(()=>{throw F},0)}})};return O(v,Aa.EventType.OPEN,()=>{N||(ee(Pt,`RPC '${e}' stream ${s} transport opened.`),j.yo())}),O(v,Aa.EventType.CLOSE,()=>{N||(N=!0,ee(Pt,`RPC '${e}' stream ${s} transport closed`),j.So())}),O(v,Aa.EventType.ERROR,z=>{N||(N=!0,Po(Pt,`RPC '${e}' stream ${s} transport errored:`,z),j.So(new ne(q.UNAVAILABLE,"The operation could not be completed")))}),O(v,Aa.EventType.MESSAGE,z=>{var I;if(!N){const E=z.data[0];Ce(!!E);const R=E,F=R.error||((I=R[0])===null||I===void 0?void 0:I.error);if(F){ee(Pt,`RPC '${e}' stream ${s} received error:`,F);const M=F.status;let V=function(b){const T=Ze[b];if(T!==void 0)return mw(T)}(M),w=F.message;V===void 0&&(V=q.INTERNAL,w="Unknown error status: "+M+" with message "+F.message),N=!0,j.So(new ne(V,w)),v.close()}else ee(Pt,`RPC '${e}' stream ${s} received:`,E),j.bo(E)}}),O(c,B_.STAT_EVENT,z=>{z.stat===Cf.PROXY?ee(Pt,`RPC '${e}' stream ${s} detected buffering proxy`):z.stat===Cf.NOPROXY&&ee(Pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{j.wo()},0),j}}function _h(){return typeof document<"u"?document:null}/**
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
 */function vd(t){return new zS(t,!0)}/**
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
 */class Sw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class kw{constructor(e,n,r,s,i,o,c,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Sw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(Fr(n.toString()),Fr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new ne(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Pk extends kw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=qS(this.serializer,e),r=function(i){if(!("targetChange"in i))return ce.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?lr(o.readTime):ce.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Vf(this.serializer),n.addTarget=function(i,o){let c;const u=o.target;if(c=jf(u)?{documents:KS(i,u)}:{query:GS(i,u)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=yw(i,o.resumeToken);const d=Of(i,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(ce.min())>0){c.readTime=Ou(i,o.snapshotVersion.toTimestamp());const d=Of(i,o.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=YS(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Vf(this.serializer),n.removeTarget=e,this.a_(n)}}class jk extends kw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=WS(e.writeResults,e.commitTime),r=lr(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Vf(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>HS(this.serializer,r))};this.a_(n)}}/**
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
 */class Dk extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new ne(q.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Lf(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(q.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Lf(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(q.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Ok{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Fr(n),this.D_=!1):ee("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Lk{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ri(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=ue(u);d.L_.add(4),await Ll(d),d.q_.set("Unknown"),d.L_.delete(4),await yd(d)}(this))})}),this.q_=new Ok(r,s)}}async function yd(t){if(Ri(t))for(const e of t.B_)await e(!0)}async function Ll(t){for(const e of t.B_)await e(!1)}function Cw(t,e){const n=ue(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),_m(n)?xm(n):Ho(n).r_()&&ym(n,e))}function vm(t,e){const n=ue(t),r=Ho(n);n.N_.delete(e),r.r_()&&Aw(n,e),n.N_.size===0&&(r.r_()?r.o_():Ri(n)&&n.q_.set("Unknown"))}function ym(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ho(t).A_(e)}function Aw(t,e){t.Q_.xe(e),Ho(t).R_(e)}function xm(t){t.Q_=new MS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ho(t).start(),t.q_.v_()}function _m(t){return Ri(t)&&!Ho(t).n_()&&t.N_.size>0}function Ri(t){return ue(t).L_.size===0}function Rw(t){t.Q_=void 0}async function Mk(t){t.q_.set("Online")}async function Vk(t){t.N_.forEach((e,n)=>{ym(t,e)})}async function Fk(t,e){Rw(t),_m(t)?(t.q_.M_(e),xm(t)):t.q_.set("Unknown")}async function Uk(t,e,n){if(t.q_.set("Online"),e instanceof vw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Lu(t,r)}else if(e instanceof Qc?t.Q_.Ke(e):e instanceof gw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ce.min()))try{const r=await Nw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const g=i.N_.get(d);g&&i.N_.set(d,g.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,d)=>{const g=i.N_.get(u);if(!g)return;i.N_.set(u,g.withResumeToken(Tt.EMPTY_BYTE_STRING,g.snapshotVersion)),Aw(i,u);const v=new _s(g.target,u,d,g.sequenceNumber);ym(i,v)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await Lu(t,r)}}async function Lu(t,e,n){if(!jl(e))throw e;t.L_.add(1),await Ll(t),t.q_.set("Offline"),n||(n=()=>Nw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await yd(t)})}function Pw(t,e){return e().catch(n=>Lu(t,n,e))}async function xd(t){const e=ue(t),n=Ms(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;zk(e);)try{const s=await Tk(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,$k(e,s)}catch(s){await Lu(e,s)}jw(e)&&Dw(e)}function zk(t){return Ri(t)&&t.O_.length<10}function $k(t,e){t.O_.push(e);const n=Ms(t);n.r_()&&n.V_&&n.m_(e.mutations)}function jw(t){return Ri(t)&&!Ms(t).n_()&&t.O_.length>0}function Dw(t){Ms(t).start()}async function Bk(t){Ms(t).p_()}async function qk(t){const e=Ms(t);for(const n of t.O_)e.m_(n.mutations)}async function Hk(t,e,n){const r=t.O_.shift(),s=dm.from(r,e,n);await Pw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await xd(t)}async function Wk(t,e){e&&Ms(t).V_&&await async function(r,s){if(function(o){return DS(o)&&o!==q.ABORTED}(s.code)){const i=r.O_.shift();Ms(r).s_(),await Pw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await xd(r)}}(t,e),jw(t)&&Dw(t)}async function ev(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=Ri(n);n.L_.add(3),await Ll(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await yd(n)}async function Kk(t,e){const n=ue(t);e?(n.L_.delete(2),await yd(n)):e||(n.L_.add(2),await Ll(n),n.q_.set("Unknown"))}function Ho(t){return t.K_||(t.K_=function(n,r,s){const i=ue(n);return i.w_(),new Pk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:Mk.bind(null,t),Ro:Vk.bind(null,t),mo:Fk.bind(null,t),d_:Uk.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),_m(t)?xm(t):t.q_.set("Unknown")):(await t.K_.stop(),Rw(t))})),t.K_}function Ms(t){return t.U_||(t.U_=function(n,r,s){const i=ue(n);return i.w_(),new jk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Bk.bind(null,t),mo:Wk.bind(null,t),f_:qk.bind(null,t),g_:Hk.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await xd(t)):(await t.U_.stop(),t.O_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class wm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new wm(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bm(t,e){if(Fr("AsyncQueue",`${e}: ${t}`),jl(t))return new ne(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Eo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=Ra(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new Eo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Eo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Eo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class tv{constructor(){this.W_=new He(ie.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):le():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Mo{constructor(e,n,r,s,i,o,c,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Mo(e,n,Eo.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Gk{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Qk{constructor(){this.queries=nv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ue(n),i=s.queries;s.queries=nv(),i.forEach((o,c)=>{for(const u of c.j_)u.onError(r)})})(this,new ne(q.ABORTED,"Firestore shutting down"))}}function nv(){return new qo(t=>rw(t),hd)}async function Em(t,e){const n=ue(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Gk,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=bm(o,`Initialization of query '${Wi(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Im(n)}async function Tm(t,e){const n=ue(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Yk(t,e){const n=ue(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Im(n)}function Xk(t,e,n){const r=ue(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Im(t){t.Y_.forEach(e=>{e.next()})}var Uf,rv;(rv=Uf||(Uf={})).ea="default",rv.Cache="cache";class Nm{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Mo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Uf.Cache}}/**
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
 */class Ow{constructor(e){this.key=e}}class Lw{constructor(e){this.key=e}}class Jk{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ge(),this.mutatedKeys=ge(),this.Aa=sw(e),this.Ra=new Eo(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new tv,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((g,v)=>{const y=s.get(g),N=fd(this.query,v)?v:null,j=!!y&&this.mutatedKeys.has(y.key),O=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let z=!1;y&&N?y.data.isEqual(N.data)?j!==O&&(r.track({type:3,doc:N}),z=!0):this.ga(y,N)||(r.track({type:2,doc:N}),z=!0,(u&&this.Aa(N,u)>0||d&&this.Aa(N,d)<0)&&(c=!0)):!y&&N?(r.track({type:0,doc:N}),z=!0):y&&!N&&(r.track({type:1,doc:y}),z=!0,(u||d)&&(c=!0)),z&&(N?(o=o.add(N),i=O?i.add(g):i.delete(g)):(o=o.delete(g),i=i.delete(g)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const g=this.query.limitType==="F"?o.last():o.first();o=o.delete(g.key),i=i.delete(g.key),r.track({type:1,doc:g})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((g,v)=>function(N,j){const O=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return O(N)-O(j)}(g.type,v.type)||this.Aa(g.doc,v.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new Mo(this.query,e.Ra,i,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new tv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ge(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Lw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Ow(r))}),n}ba(e){this.Ta=e.Ts,this.da=ge();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Mo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Zk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class eC{constructor(e){this.key=e,this.va=!1}}class tC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new qo(c=>rw(c),hd),this.Ma=new Map,this.xa=new Set,this.Oa=new He(ie.comparator),this.Na=new Map,this.La=new pm,this.Ba={},this.ka=new Map,this.qa=Lo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function nC(t,e,n=!0){const r=$w(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Mw(r,e,n,!0),s}async function rC(t,e){const n=$w(t);await Mw(n,e,!0,!1)}async function Mw(t,e,n,r){const s=await Ik(t.localStore,ar(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await sC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Cw(t.remoteStore,s),c}async function sC(t,e,n,r,s){t.Ka=(v,y,N)=>async function(O,z,I,E){let R=z.view.ma(I);R.ns&&(R=await X0(O.localStore,z.query,!1).then(({documents:w})=>z.view.ma(w,R)));const F=E&&E.targetChanges.get(z.targetId),M=E&&E.targetMismatches.get(z.targetId)!=null,V=z.view.applyChanges(R,O.isPrimaryClient,F,M);return iv(O,z.targetId,V.wa),V.snapshot}(t,v,y,N);const i=await X0(t.localStore,e,!0),o=new Jk(e,i.Ts),c=o.ma(i.documents),u=Ol.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(c,t.isPrimaryClient,u);iv(t,n,d.wa);const g=new Zk(e,n,o);return t.Fa.set(e,g),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function iC(t,e,n){const r=ue(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!hd(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ff(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&vm(r.remoteStore,s.targetId),zf(r,s.targetId)}).catch(Pl)):(zf(r,s.targetId),await Ff(r.localStore,s.targetId,!0))}async function oC(t,e){const n=ue(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),vm(n.remoteStore,r.targetId))}async function aC(t,e,n){const r=pC(t);try{const s=await function(o,c){const u=ue(o),d=at.now(),g=c.reduce((N,j)=>N.add(j.key),ge());let v,y;return u.persistence.runTransaction("Locally write mutations","readwrite",N=>{let j=Ur(),O=ge();return u.cs.getEntries(N,g).next(z=>{j=z,j.forEach((I,E)=>{E.isValidDocument()||(O=O.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(N,j)).next(z=>{v=z;const I=[];for(const E of c){const R=CS(E,v.get(E.key).overlayedDocument);R!=null&&I.push(new $s(E.key,R,Y_(R.value.mapValue),Tn.exists(!0)))}return u.mutationQueue.addMutationBatch(N,d,I,c)}).next(z=>{y=z;const I=z.applyToLocalDocumentSet(v,O);return u.documentOverlayCache.saveOverlays(N,z.batchId,I)})}).then(()=>({batchId:y.batchId,changes:ow(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new He(be)),d=d.insert(c,u),o.Ba[o.currentUser.toKey()]=d}(r,s.batchId,n),await Ml(r,s.changes),await xd(r.remoteStore)}catch(s){const i=bm(s,"Failed to persist write");n.reject(i)}}async function Vw(t,e){const n=ue(t);try{const r=await bk(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ce(o.va):s.removedDocuments.size>0&&(Ce(o.va),o.va=!1))}),await Ml(n,r,e)}catch(r){await Pl(r)}}function sv(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const u=ue(o);u.onlineState=c;let d=!1;u.queries.forEach((g,v)=>{for(const y of v.j_)y.Z_(c)&&(d=!0)}),d&&Im(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function lC(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new He(ie.comparator);o=o.insert(i,Ot.newNoDocument(i,ce.min()));const c=ge().add(i),u=new gd(ce.min(),new Map,new He(be),o,c);await Vw(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Sm(r)}else await Ff(r.localStore,e,!1).then(()=>zf(r,e,n)).catch(Pl)}async function cC(t,e){const n=ue(t),r=e.batch.batchId;try{const s=await wk(n.localStore,e);Uw(n,r,null),Fw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ml(n,s)}catch(s){await Pl(s)}}async function uC(t,e,n){const r=ue(t);try{const s=await function(o,c){const u=ue(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let g;return u.mutationQueue.lookupMutationBatch(d,c).next(v=>(Ce(v!==null),g=v.keys(),u.mutationQueue.removeMutationBatch(d,v))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,g,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,g)).next(()=>u.localDocuments.getDocuments(d,g))})}(r.localStore,e);Uw(r,e,n),Fw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ml(r,s)}catch(s){await Pl(s)}}function Fw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Uw(t,e,n){const r=ue(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function zf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||zw(t,r)})}function zw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(vm(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Sm(t))}function iv(t,e,n){for(const r of n)r instanceof Ow?(t.La.addReference(r.key,e),dC(t,r)):r instanceof Lw?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||zw(t,r.key)):le()}function dC(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.xa.add(r),Sm(t))}function Sm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ie(Fe.fromString(e)),r=t.qa.next();t.Na.set(r,new eC(n)),t.Oa=t.Oa.insert(n,r),Cw(t.remoteStore,new _s(ar(dd(n.path)),r,"TargetPurposeLimboResolution",rm.oe))}}async function Ml(t,e,n){const r=ue(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,u)=>{o.push(r.Ka(u,e,n).then(d=>{var g;if((d||n)&&r.isPrimaryClient){const v=d?!d.fromCache:(g=n==null?void 0:n.targetChanges.get(u.targetId))===null||g===void 0?void 0:g.current;r.sharedClientState.updateQueryState(u.targetId,v?"current":"not-current")}if(d){s.push(d);const v=gm.Wi(u.targetId,d);i.push(v)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,d){const g=ue(u);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>H.forEach(d,y=>H.forEach(y.$i,N=>g.persistence.referenceDelegate.addReference(v,y.targetId,N)).next(()=>H.forEach(y.Ui,N=>g.persistence.referenceDelegate.removeReference(v,y.targetId,N)))))}catch(v){if(!jl(v))throw v;ee("LocalStore","Failed to update sequence numbers: "+v)}for(const v of d){const y=v.targetId;if(!v.fromCache){const N=g.os.get(y),j=N.snapshotVersion,O=N.withLastLimboFreeSnapshotVersion(j);g.os=g.os.insert(y,O)}}}(r.localStore,i))}async function hC(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await Iw(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(u=>{u.reject(new ne(q.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ml(n,r.hs)}}function fC(t,e){const n=ue(t),r=n.Na.get(e);if(r&&r.va)return ge().add(r.key);{let s=ge();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const c=n.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function $w(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lC.bind(null,e),e.Ca.d_=Yk.bind(null,e.eventManager),e.Ca.$a=Xk.bind(null,e.eventManager),e}function pC(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uC.bind(null,e),e}class Mu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vd(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return _k(this.persistence,new yk,e.initialUser,this.serializer)}Ga(e){return new mk(mm.Zr,this.serializer)}Wa(e){return new Sk}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Mu.provider={build:()=>new Mu};class $f{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=hC.bind(null,this.syncEngine),await Kk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Qk}()}createDatastore(e){const n=vd(e.databaseInfo.databaseId),r=function(i){return new Rk(i)}(e.databaseInfo);return function(i,o,c,u){return new Dk(i,o,c,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new Lk(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>sv(this.syncEngine,n,0),function(){return Z0.D()?new Z0:new kk}())}createSyncEngine(e,n){return function(s,i,o,c,u,d,g){const v=new tC(s,i,o,c,u,d);return g&&(v.Qa=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ue(s);ee("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ll(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}$f.provider={build:()=>new $f};/**
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
 */class km{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Fr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class mC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=jt.UNAUTHENTICATED,this.clientId=K_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=bm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wh(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Iw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ov(t,e){t.asyncQueue.verifyOperationInProgress();const n=await gC(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ev(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>ev(e.remoteStore,s)),t._onlineComponents=e}async function gC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await wh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===q.FAILED_PRECONDITION||s.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Po("Error using user provided cache. Falling back to memory cache: "+n),await wh(t,new Mu)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await wh(t,new Mu);return t._offlineComponents}async function Bw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await ov(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await ov(t,new $f))),t._onlineComponents}function vC(t){return Bw(t).then(e=>e.syncEngine)}async function Vu(t){const e=await Bw(t),n=e.eventManager;return n.onListen=nC.bind(null,e.syncEngine),n.onUnlisten=iC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=rC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=oC.bind(null,e.syncEngine),n}function yC(t,e,n={}){const r=new Pr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,u,d){const g=new km({next:y=>{g.Za(),o.enqueueAndForget(()=>Tm(i,v));const N=y.docs.has(c);!N&&y.fromCache?d.reject(new ne(q.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&y.fromCache&&u&&u.source==="server"?d.reject(new ne(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(y)},error:y=>d.reject(y)}),v=new Nm(dd(c.path),g,{includeMetadataChanges:!0,_a:!0});return Em(i,v)}(await Vu(t),t.asyncQueue,e,n,r)),r.promise}function xC(t,e,n={}){const r=new Pr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,u,d){const g=new km({next:y=>{g.Za(),o.enqueueAndForget(()=>Tm(i,v)),y.fromCache&&u.source==="server"?d.reject(new ne(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(y)},error:y=>d.reject(y)}),v=new Nm(c,g,{includeMetadataChanges:!0,_a:!0});return Em(i,v)}(await Vu(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function qw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */function Hw(t,e,n){if(!n)throw new ne(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _C(t,e,n,r){if(e===!0&&r===!0)throw new ne(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function lv(t){if(!ie.isDocumentKey(t))throw new ne(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cv(t){if(ie.isDocumentKey(t))throw new ne(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Cm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function tn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cm(t);throw new ne(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class uv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_C("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _d{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new M2;switch(r.type){case"firstParty":return new z2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=av.get(n);r&&(ee("ComponentProvider","Removing Datastore"),av.delete(n),r.terminate())}(this),Promise.resolve()}}function wC(t,e,n,r={}){var s;const i=(t=tn(t,_d))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Po("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=jt.MOCK_USER;else{c=Zx(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new ne(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new jt(d)}t._authCredentials=new V2(new W_(c,u))}}/**
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
 */class Vl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vl(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class Rs extends Vl{constructor(e,n,r){super(e,n,dd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new ie(e))}withConverter(e){return new Rs(this.firestore,e,this._path)}}function ja(t,e,...n){if(t=qe(t),Hw("collection","path",e),t instanceof _d){const r=Fe.fromString(e,...n);return cv(r),new Rs(t,null,r)}{if(!(t instanceof Bt||t instanceof Rs))throw new ne(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return cv(r),new Rs(t.firestore,null,r)}}function Gt(t,e,...n){if(t=qe(t),arguments.length===1&&(e=K_.newId()),Hw("doc","path",e),t instanceof _d){const r=Fe.fromString(e,...n);return lv(r),new Bt(t,null,new ie(r))}{if(!(t instanceof Bt||t instanceof Rs))throw new ne(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return lv(r),new Bt(t.firestore,t instanceof Rs?t.converter:null,new ie(r))}}/**
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
 */class dv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Sw(this,"async_queue_retry"),this.Vu=()=>{const r=_h();r&&ee("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=_h();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=_h();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Pr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!jl(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Fr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=wm.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&le()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function hv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class zr extends _d{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new dv,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new dv(e),this._firestoreClient=void 0,await e}}}function bC(t,e){const n=typeof t=="object"?t:Wp(),r=typeof t=="string"?t:"(default)",s=id(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Yx("firestore");i&&wC(s,...i)}return s}function wd(t){if(t._terminated)throw new ne(q.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||EC(t),t._firestoreClient}function EC(t){var e,n,r;const s=t._freezeSettings(),i=function(c,u,d,g){return new eS(c,u,d,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,qw(g.experimentalLongPollingOptions),g.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new mC(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Vo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vo(Tt.fromBase64String(e))}catch(n){throw new ne(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vo(Tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class bd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Am{constructor(e){this._methodName=e}}/**
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
 */class Rm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
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
 */class Pm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const TC=/^__.*__$/;class IC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new $s(e,this.data,this.fieldMask,n,this.fieldTransforms):new Dl(e,this.data,n,this.fieldTransforms)}}class Ww{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new $s(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Kw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class jm{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new jm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Fu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Kw(this.Cu)&&TC.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class NC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||vd(e)}Qu(e,n,r,s=!1){return new jm({Cu:e,methodName:n,qu:r,path:_t.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dm(t){const e=t._freezeSettings(),n=vd(t._databaseId);return new NC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Gw(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Om("Data must be an object, but it was:",o,r);const c=Qw(r,o);let u,d;if(i.merge)u=new dn(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const g=[];for(const v of i.mergeFields){const y=Bf(e,v,n);if(!o.contains(y))throw new ne(q.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Xw(g,y)||g.push(y)}u=new dn(g),d=o.fieldTransforms.filter(v=>u.covers(v.field))}else u=null,d=o.fieldTransforms;return new IC(new Yt(c),u,d)}class Ed extends Am{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ed}}function SC(t,e,n,r){const s=t.Qu(1,e,n);Om("Data must be an object, but it was:",s,r);const i=[],o=Yt.empty();Ai(r,(u,d)=>{const g=Lm(e,u,n);d=qe(d);const v=s.Nu(g);if(d instanceof Ed)i.push(g);else{const y=Td(d,v);y!=null&&(i.push(g),o.set(g,y))}});const c=new dn(i);return new Ww(o,c,s.fieldTransforms)}function kC(t,e,n,r,s,i){const o=t.Qu(1,e,n),c=[Bf(e,r,n)],u=[s];if(i.length%2!=0)throw new ne(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)c.push(Bf(e,i[y])),u.push(i[y+1]);const d=[],g=Yt.empty();for(let y=c.length-1;y>=0;--y)if(!Xw(d,c[y])){const N=c[y];let j=u[y];j=qe(j);const O=o.Nu(N);if(j instanceof Ed)d.push(N);else{const z=Td(j,O);z!=null&&(d.push(N),g.set(N,z))}}const v=new dn(d);return new Ww(g,v,o.fieldTransforms)}function Td(t,e){if(Yw(t=qe(t)))return Om("Unsupported field value:",e,t),Qw(t,e);if(t instanceof Am)return function(r,s){if(!Kw(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let u=Td(c,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ES(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=at.fromDate(r);return{timestampValue:Ou(s.serializer,i)}}if(r instanceof at){const i=new at(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ou(s.serializer,i)}}if(r instanceof Rm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vo)return{bytesValue:yw(s.serializer,r._byteString)};if(r instanceof Bt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:fm(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Pm)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.Bu("VectorValues must only contain numeric values.");return cm(c.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Cm(r)}`)}(t,e)}function Qw(t,e){const n={};return G_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ai(t,(r,s)=>{const i=Td(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Yw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof at||t instanceof Rm||t instanceof Vo||t instanceof Bt||t instanceof Am||t instanceof Pm)}function Om(t,e,n){if(!Yw(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Cm(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Bf(t,e,n){if((e=qe(e))instanceof bd)return e._internalPath;if(typeof e=="string")return Lm(t,e);throw Fu("Field path arguments must be of type string or ",t,!1,void 0,n)}const CC=new RegExp("[~\\*/\\[\\]]");function Lm(t,e,n){if(e.search(CC)>=0)throw Fu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bd(...e.split("."))._internalPath}catch{throw Fu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new ne(q.INVALID_ARGUMENT,c+t+u)}function Xw(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Jw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Zw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AC extends Jw{data(){return super.data()}}function Zw(t,e){return typeof e=="string"?Lm(t,e):e instanceof bd?e._internalPath:e._delegate._internalPath}/**
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
 */function e1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class RC{convertValue(e,n="none"){switch(Ti(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ei(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ai(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Qe(o.doubleValue));return new Pm(i)}convertGeoPoint(e){return new Rm(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=im(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ml(e));default:return null}}convertTimestamp(e){const n=Ls(e);return new at(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);Ce(Tw(r));const s=new gl(r.get(1),r.get(3)),i=new ie(r.popFirst(5));return s.isEqual(n)||Fr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function t1(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Da{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class n1 extends Jw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Zw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Yc extends n1{data(e={}){return super.data(e)}}class r1{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Da(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Yc(this._firestore,this._userDataWriter,r.key,r,new Da(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const u=new Yc(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Da(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new Yc(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Da(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,g=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),g=o.indexOf(c.doc.key)),{type:PC(c.type),doc:u,oldIndex:d,newIndex:g}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function PC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}/**
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
 */function fv(t){t=tn(t,Bt);const e=tn(t.firestore,zr);return yC(wd(e),t._key).then(n=>i1(e,t,n))}class Mm extends RC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function jC(t){t=tn(t,Vl);const e=tn(t.firestore,zr),n=wd(e),r=new Mm(e);return e1(t._query),xC(n,t._query).then(s=>new r1(e,r,t,s))}function qf(t,e,n){t=tn(t,Bt);const r=tn(t.firestore,zr),s=t1(t.converter,e);return Id(r,[Gw(Dm(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Tn.none())])}function uo(t,e,n,...r){t=tn(t,Bt);const s=tn(t.firestore,zr),i=Dm(s);let o;return o=typeof(e=qe(e))=="string"||e instanceof bd?kC(i,"updateDoc",t._key,e,n,r):SC(i,"updateDoc",t._key,e),Id(s,[o.toMutation(t._key,Tn.exists(!0))])}function s1(t){return Id(tn(t.firestore,zr),[new um(t._key,Tn.none())])}function pv(t,e){const n=tn(t.firestore,zr),r=Gt(t),s=t1(t.converter,e);return Id(n,[Gw(Dm(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Tn.exists(!1))]).then(()=>r)}function mv(t,...e){var n,r,s;t=qe(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||hv(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(hv(e[o])){const v=e[o];e[o]=(n=v.next)===null||n===void 0?void 0:n.bind(v),e[o+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),e[o+2]=(s=v.complete)===null||s===void 0?void 0:s.bind(v)}let u,d,g;if(t instanceof Bt)d=tn(t.firestore,zr),g=dd(t._key.path),u={next:v=>{e[o]&&e[o](i1(d,t,v))},error:e[o+1],complete:e[o+2]};else{const v=tn(t,Vl);d=tn(v.firestore,zr),g=v._query;const y=new Mm(d);u={next:N=>{e[o]&&e[o](new r1(d,y,v,N))},error:e[o+1],complete:e[o+2]},e1(t._query)}return function(y,N,j,O){const z=new km(O),I=new Nm(N,z,j);return y.asyncQueue.enqueueAndForget(async()=>Em(await Vu(y),I)),()=>{z.Za(),y.asyncQueue.enqueueAndForget(async()=>Tm(await Vu(y),I))}}(wd(d),g,c,u)}function Id(t,e){return function(r,s){const i=new Pr;return r.asyncQueue.enqueueAndForget(async()=>aC(await vC(r),s,i)),i.promise}(wd(t),e)}function i1(t,e,n){const r=n.docs.get(e._key),s=new Mm(t);return new n1(t,s,e._key,r,new Da(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Bo=s})(ki),xi(new Ds("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new zr(new F2(r.getProvider("auth-internal")),new B2(r.getProvider("app-check-internal")),function(d,g){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new ne(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gl(d.options.projectId,g)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),sr(A0,"4.7.3",e),sr(A0,"4.7.3","esm2017")})();var DC="firebase",OC="10.14.1";/**
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
 */sr(DC,OC,"app");/**
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
 */const o1="firebasestorage.googleapis.com",a1="storageBucket",LC=2*60*1e3,MC=10*60*1e3;/**
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
 */class Nt extends dr{constructor(e,n,r=0){super(bh(e),`Firebase Storage: ${n} (${bh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Nt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return bh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var It;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(It||(It={}));function bh(t){return"storage/"+t}function VC(){const t="An unknown error occurred, please check the error payload for server response.";return new Nt(It.UNKNOWN,t)}function FC(t){return new Nt(It.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function UC(t){return new Nt(It.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function zC(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Nt(It.UNAUTHENTICATED,t)}function $C(){return new Nt(It.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function BC(t){return new Nt(It.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function qC(){return new Nt(It.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function HC(){return new Nt(It.CANCELED,"User canceled the upload/download.")}function WC(t){return new Nt(It.INVALID_URL,"Invalid URL '"+t+"'.")}function KC(t){return new Nt(It.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function GC(){return new Nt(It.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a1+"' property when initializing the app?")}function Hf(t){return new Nt(It.INVALID_ARGUMENT,t)}function l1(){return new Nt(It.APP_DELETED,"The Firebase app was deleted.")}function QC(t){return new Nt(It.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ba(t){throw new Nt(It.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class bn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=bn.makeFromUrl(e,n)}catch{return new bn(e,"")}if(r.path==="")return r;throw KC(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function d(F){F.path_=decodeURIComponent(F.path)}const g="v[A-Za-z0-9_]+",v=n.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",N=new RegExp(`^https?://${v}/${g}/b/${s}/o${y}`,"i"),j={bucket:1,path:3},O=n===o1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,z="([^?#]*)",I=new RegExp(`^https?://${O}/${s}/${z}`,"i"),R=[{regex:c,indices:u,postModify:i},{regex:N,indices:j,postModify:d},{regex:I,indices:{bucket:1,path:2},postModify:d}];for(let F=0;F<R.length;F++){const M=R[F],V=M.regex.exec(e);if(V){const w=V[M.indices.bucket];let x=V[M.indices.path];x||(x=""),r=new bn(w,x),M.postModify(r);break}}if(r==null)throw WC(e);return r}}class YC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function XC(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function u(){return c===2}let d=!1;function g(...z){d||(d=!0,e.apply(null,z))}function v(z){s=setTimeout(()=>{s=null,t(N,u())},z)}function y(){i&&clearTimeout(i)}function N(z,...I){if(d){y();return}if(z){y(),g.call(null,z,...I);return}if(u()||o){y(),g.call(null,z,...I);return}r<64&&(r*=2);let R;c===1?(c=2,R=0):R=(r+Math.random())*1e3,v(R)}let j=!1;function O(z){j||(j=!0,y(),!d&&(s!==null?(z||(c=2),clearTimeout(s),v(0)):z||(c=1)))}return v(0),i=setTimeout(()=>{o=!0,O(!0)},n),O}function JC(t){t(!1)}/**
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
 */function ZC(t){return t!==void 0}function gv(t,e,n,r){if(r<e)throw Hf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Hf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function eA(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function tA(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var fi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(fi||(fi={}));/**
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
 */function nA(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class rA{constructor(e,n,r,s,i,o,c,u,d,g,v,y=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=g,this.connectionFactory_=v,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((N,j)=>{this.resolve_=N,this.reject_=j,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Sc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const u=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===fi.NO_ERROR,u=i.getStatus();if(!c||nA(u,this.additionalRetryCodes_)&&this.retry){const g=i.getErrorCode()===fi.ABORT;r(!1,new Sc(!1,null,g));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new Sc(d,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());ZC(u)?i(u):i()}catch(u){o(u)}else if(c!==null){const u=VC();u.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,u)):o(u)}else if(s.canceled){const u=this.appDelete_?l1():HC();o(u)}else{const u=qC();o(u)}};this.canceled_?n(!1,new Sc(!1,null,!0)):this.backoffId_=XC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&JC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Sc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function sA(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function iA(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function oA(t,e){e&&(t["X-Firebase-GMPID"]=e)}function aA(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function lA(t,e,n,r,s,i,o=!0){const c=tA(t.urlParams),u=t.url+c,d=Object.assign({},t.headers);return oA(d,e),sA(d,n),iA(d,i),aA(d,r),new rA(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function cA(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function uA(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function dA(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}class hA{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}function fA(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=$C():s=zC():n.getStatus()===402?s=UC(t.bucket):n.getStatus()===403?s=BC(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function pA(t){const e=fA(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=FC(t.path)),i.serverResponse=s.serverResponse,i}return n}function mA(t,e){const n=e.fullServerUrl(),r=eA(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(u,d){}const c=new hA(r,s,o,i);return c.successCodes=[200,204],c.errorHandler=pA(e),c}class gA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=fi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=fi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=fi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw ba("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ba("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ba("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ba("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ba("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class vA extends gA{initXhr(){this.xhr_.responseType="text"}}function yA(){return new vA}/**
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
 */class Ii{constructor(e,n){this._service=e,n instanceof bn?this._location=n:this._location=bn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ii(e,n)}get root(){const e=new bn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return dA(this._location.path)}get storage(){return this._service}get parent(){const e=cA(this._location.path);if(e===null)return null;const n=new bn(this._location.bucket,e);return new Ii(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw QC(e)}}function xA(t){t._throwIfRoot("deleteObject");const e=mA(t.storage,t._location);return t.storage.makeRequestWithTokens(e,yA)}function _A(t,e){const n=uA(t._location.path,e),r=new bn(t._location.bucket,n);return new Ii(t.storage,r)}/**
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
 */function wA(t){return/^[A-Za-z]+:\/\//.test(t)}function bA(t,e){return new Ii(t,e)}function c1(t,e){if(t instanceof Vm){const n=t;if(n._bucket==null)throw GC();const r=new Ii(n,n._bucket);return e!=null?c1(r,e):r}else return e!==void 0?_A(t,e):t}function EA(t,e){if(e&&wA(e)){if(t instanceof Vm)return bA(t,e);throw Hf("To use ref(service, url), the first argument must be a Storage instance.")}else return c1(t,e)}function vv(t,e){const n=e==null?void 0:e[a1];return n==null?null:bn.makeFromBucketSpec(n,t)}function TA(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Zx(s,t.app.options.projectId))}class Vm{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=o1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=LC,this._maxUploadRetryTime=MC,this._requests=new Set,s!=null?this._bucket=bn.makeFromBucketSpec(s,this._host):this._bucket=vv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=bn.makeFromBucketSpec(this._url,e):this._bucket=vv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ii(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new YC(l1());{const o=lA(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const yv="@firebase/storage",xv="0.13.2";/**
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
 */const u1="storage";function IA(t){return t=qe(t),xA(t)}function NA(t,e){return t=qe(t),EA(t,e)}function SA(t=Wp(),e){t=qe(t);const r=id(t,u1).getImmediate({identifier:e}),s=Yx("storage");return s&&kA(r,...s),r}function kA(t,e,n,r={}){TA(t,e,n,r)}function CA(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Vm(n,r,s,e,ki)}function AA(){xi(new Ds(u1,CA,"PUBLIC").setMultipleInstances(!0)),sr(yv,xv,""),sr(yv,xv,"esm2017")}AA();const RA={apiKey:"AIzaSyCfoxtQy_MCf5_fqKFq4OsXYvvyhkmwEYo",authDomain:"alfa-app-b4052.firebaseapp.com",projectId:"alfa-app-b4052",storageBucket:"alfa-app-b4052.firebasestorage.app",messagingSenderId:"644138783201",appId:"1:644138783201:web:16308247c9ef93f1d242a0"},Fm=n_(RA),ls=O2(Fm),ct=bC(Fm),PA=SA(Fm),d1=B.createContext();function Wo(){return B.useContext(d1)}function h1({children:t}){const[e,n]=B.useState(null),[r,s]=B.useState(null),[i,o]=B.useState(!0),[c,u]=B.useState(!1),d=M=>{const V={admin:{canViewOS:!0,canEditOS:!0,canDeleteOS:!0,canViewFinancial:!0,canEditFinancial:!0,canViewContracts:!0,canEditContracts:!0,canManageUsers:!0,canViewAllClients:!0,canViewOnlyOwnClient:!1,canPrint:!0,canExport:!0},client:{canViewOS:!0,canEditOS:!1,canDeleteOS:!1,canViewFinancial:!1,canEditFinancial:!1,canViewContracts:!1,canEditContracts:!1,canManageUsers:!1,canViewAllClients:!1,canViewOnlyOwnClient:!0,canPrint:!1,canExport:!1}};return V[M]||V.client};async function g(M,V,w,x="client",b=null){console.log("🔄 Iniciando criação de usuário:",{email:M,displayName:w,role:x});try{const T=ls.currentUser,C=T==null?void 0:T.email;if(console.log("👤 Usuário atual antes da criação:",C),b&&T){console.log("🔐 Reautenticando admin...");try{const ft=Ci.credential(C,b);await vN(T,ft),console.log("✅ Admin reautenticado com sucesso")}catch(ft){throw console.error("❌ Erro na reautenticação:",ft),new Error("Senha do admin incorreta. Por favor, verifique sua senha.")}}const A=await xN(ls,M,V);console.log("✅ Usuário criado no Firebase Auth:",A.user.email),w&&(await wN(A.user,{displayName:w}),console.log("✅ Perfil atualizado no Auth"));const S=d(x),Ke={uid:A.user.uid,email:M,displayName:w||M.split("@")[0],role:x,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),permissions:S,status:"active",emailVerified:!1,createdBy:C||"system"};if(console.log("📝 Salvando dados no Firestore..."),await qf(Gt(ct,"users",A.user.uid),Ke),console.log("✅ Dados salvos no Firestore"),console.log("🔒 Fazendo logout do novo usuário..."),await x0(ls),console.log("✅ Logout do novo usuário realizado"),T&&b){console.log("🔄 Tentando restaurar sessão do admin...");try{await y0(ls,C,b),console.log("✅ Admin restaurado com sucesso!")}catch(ft){console.error("❌ Erro ao restaurar admin:",ft)}}return console.log("🎉 Usuário criado com sucesso em ambos os sistemas!"),{success:!0,userId:A.user.uid,adminRestored:!!b}}catch(T){console.error("❌ Erro ao criar usuário:",T);let C=T.message;switch(T.code){case"auth/email-already-in-use":C="Este email já está em uso por outra conta.";break;case"auth/invalid-email":C="Email inválido.";break;case"auth/operation-not-allowed":C="Operação não permitida. Contate o administrador.";break;case"auth/weak-password":C="A senha é muito fraca. Use pelo menos 6 caracteres.";break;case"auth/wrong-password":C="Senha do admin incorreta.";break;default:C="Erro ao criar usuário: "+T.message}throw new Error(C)}}async function v(M,V){console.log("Tentando login para:",M);try{const w=await y0(ls,M,V);return console.log("✅ Login bem-sucedido:",w.user.email),w}catch(w){throw console.error("❌ Erro no login:",w),w}}async function y(){if(c){console.log("Logout já em andamento...");return}u(!0);try{return console.log("Iniciando logout..."),n(null),s(null),await x0(ls),console.log("✅ Logout realizado com sucesso"),!0}catch(M){throw console.error("❌ Erro ao fazer logout:",M),M}finally{u(!1)}}function N(M){return console.log("Solicitando redefinição de senha para:",M),yN(ls,M)}async function j(M,V){console.log("Atualizando dados do usuário:",M),await uo(Gt(ct,"users",M),{...V,updatedAt:new Date().toISOString()}),M===(e==null?void 0:e.uid)&&(console.log("Recarregando dados do usuário atual..."),await O(M))}async function O(M){console.log("Carregando dados do usuário do Firestore:",M);try{const V=await fv(Gt(ct,"users",M));if(V.exists()){const w=V.data(),x={...d(w.role||"client"),...w.permissions||{}},b={...w,permissions:x};return s(b),b}else return console.log("Usuário não encontrado no Firestore"),s(null),null}catch(V){return console.error("Erro ao carregar dados do usuário:",V),s(null),null}}const z=async(M,V)=>{if(!e||(r==null?void 0:r.role)!=="admin")throw console.warn("Tentativa não autorizada de atualizar cargo"),new Error("Sem permissão para atualizar cargos");console.log("Atualizando cargo do usuário:",M,"para",V);const w=d(V),x={role:V,permissions:w,updatedAt:new Date().toISOString()};return await uo(Gt(ct,"users",M),x),x},I=async M=>{if(!e||(r==null?void 0:r.role)!=="admin")throw console.warn("Tentativa não autorizada de deletar usuário"),new Error("Sem permissão para deletar usuários");console.log("Deletando conta do usuário:",M);try{return await s1(Gt(ct,"users",M)),console.log("✅ Usuário deletado do Firestore"),{success:!0}}catch(V){throw console.error("❌ Erro ao deletar usuário:",V),V}};function E(M){var V;return r?r.role==="admin"?!0:((V=r.permissions)==null?void 0:V[M])||!1:!1}const R=async()=>{try{const M=ja(ct,"users"),w=(await jC(M)).docs.map(x=>({id:x.id,...x.data()}));if(console.log("Total de usuários encontrados:",w.length),(r==null?void 0:r.role)!=="admin"&&!E("canViewAllClients")){const x=w.filter(b=>b.createdBy===(e==null?void 0:e.email)||b.id===(e==null?void 0:e.uid));return console.log("Usuários filtrados para visualização:",x.length),x.sort((b,T)=>{const C=new Date(b.createdAt||0);return new Date(T.createdAt||0)-C}),x}return w.sort((x,b)=>{const T=new Date(x.createdAt||0);return new Date(b.createdAt||0)-T}),w}catch(M){throw console.error("Erro ao buscar todos os usuários:",M),M}};B.useEffect(()=>(console.log("🔧 Configurando listener onAuthStateChanged..."),TN(ls,async V=>{var w,x;if(console.log("🚀 onAuthStateChanged disparado!"),console.log("👤 Usuário do Firebase:",V?`${V.email} (${V.uid})`:"Nenhum"),V&&!c){console.log("🔄 Processando usuário autenticado...");try{const b=await fv(Gt(ct,"users",V.uid));if(b.exists()){const T=b.data();console.log("📊 Dados do Firestore encontrados para:",V.email);const C={...d(T.role||"client"),...T.permissions||{}},A={...T,permissions:C};s(A),console.log("✅ Dados do usuário carregados com sucesso")}else{console.log("⚠️ Usuário não encontrado no Firestore - criando...");const T={uid:V.uid,email:V.email,displayName:V.displayName||((w=V.email)==null?void 0:w.split("@")[0])||"Usuário",role:"client",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),permissions:d("client"),status:"active",emailVerified:V.emailVerified,createdBy:"system"};await qf(Gt(ct,"users",V.uid),T),s(T),console.log("✅ Registro criado no Firestore")}n(V),u(!1),console.log("🎉 Estado atualizado com sucesso")}catch(b){console.error("❌ Erro ao carregar dados do usuário:",b),n(V);const T=d("client"),C={uid:V.uid,email:V.email,displayName:V.displayName||((x=V.email)==null?void 0:x.split("@")[0])||"Usuário",role:"client",permissions:T};s(C),u(!1)}}else console.log(c?"🔓 Logout confirmado - limpando estado":"👤 Nenhum usuário autenticado"),n(null),s(null);o(!1)})),[c]);const F={user:e,userData:r,loading:i,isLoggingOut:c,signup:g,login:v,logout:y,resetPassword:N,updateUserRole:z,updateUserData:j,loadUserData:O,deleteUserAccount:I,getAllUsers:R,hasPermission:E,getDefaultPermissions:d};return l.jsx(d1.Provider,{value:F,children:!i&&t})}/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),re=(t,e)=>{const n=B.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:c="",children:u,...d},g)=>B.createElement("svg",{ref:g,...jA,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${DA(t)}`,c].join(" "),...d},[...e.map(([v,y])=>B.createElement(v,y)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=re("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=re("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=re("ArrowDownWideNarrow",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h10",key:"1w87gc"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h4",key:"q8tih4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=re("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=re("ArrowUpNarrowWide",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=re("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=re("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=re("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=re("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=re("CalendarCheck",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=re("CalendarDays",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=re("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=re("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=re("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=re("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=re("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=re("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=re("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=re("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=re("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=re("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=re("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=re("FileSignature",[["path",{d:"M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5",key:"kd5d3"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z",key:"johvi5"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=re("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=re("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=re("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=re("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=re("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=re("ListPlus",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M18 9v6",key:"1twb98"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=re("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=re("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=re("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=re("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=re("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=re("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=re("MousePointerClick",[["path",{d:"m9 9 5 12 1.8-5.2L21 14Z",key:"1b76lo"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=re("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=re("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=re("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=re("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eR=re("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=re("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=re("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=re("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=re("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=re("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=re("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=re("ShieldAlert",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=re("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=re("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=re("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=re("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=re("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=re("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nR=re("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rR=re("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=re("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Av={admin:"bg-red-100 text-red-800",client:"bg-purple-100 text-purple-800"},zu={admin:"Administrador",client:"Cliente"},sR=({onClose:t,onSuccess:e})=>{const{signup:n,user:r}=Wo(),[s,i]=B.useState({email:"",password:"",confirmPassword:"",displayName:"",role:"client"}),[o,c]=B.useState(!1),[u,d]=B.useState(""),[g,v]=B.useState(!1),[y,N]=B.useState(!1),[j,O]=B.useState(!1),z=async I=>{if(I.preventDefault(),d(""),v(!1),s.password!==s.confirmPassword){d("As senhas não conferem");return}if(s.password.length<6){d("A senha deve ter pelo menos 6 caracteres");return}c(!0);try{console.log("Criando usuário:",{email:s.email,displayName:s.displayName,role:s.role});const E=await n(s.email,s.password,s.displayName,s.role);E.success&&(console.log("Usuário criado com sucesso!",E),v(!0),i({email:"",password:"",confirmPassword:"",displayName:"",role:"client"}),setTimeout(()=>{e==null||e(),t()},2e3))}catch(E){switch(console.error("Erro ao criar usuário:",E),E.message){case"Senha do admin incorreta.":d("Sua senha de administrador está incorreta. Por favor, verifique e tente novamente.");break;case"Este email já está em uso por outra conta.":d("Este email já está em uso por outra conta.");break;case"Email inválido.":d("Email inválido.");break;case"A senha é muito fraca. Use pelo menos 6 caracteres.":d("A senha é muito fraca. Use pelo menos 6 caracteres.");break;default:d(E.message||"Erro ao criar usuário. Verifique os dados e tente novamente.")}}finally{c(!1)}};return l.jsxs("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center p-5",children:[l.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-md",onClick:t}),l.jsxs("div",{className:"relative z-50 bg-white rounded-2xl w-full max-w-md shadow-2xl transform transition-all duration-300 scale-100",children:[l.jsxs("div",{className:"p-6 border-b flex justify-between items-center",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"bg-green-100 p-2 rounded-lg text-green-600",children:l.jsx(Tr,{size:24})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-bold text-slate-900",children:"Criar Novo Usuário"}),l.jsx("p",{className:"text-slate-500 text-sm",children:"Adicione um novo usuário ao sistema"})]})]}),l.jsx("button",{onClick:t,className:"p-2 hover:bg-slate-100 rounded-lg transition-colors",disabled:o,children:l.jsx(Ge,{size:20})})]}),l.jsxs("form",{onSubmit:z,className:"p-6 space-y-4",children:[u&&l.jsxs("div",{className:"bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-200",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx($r,{size:16}),l.jsx("span",{className:"font-bold",children:"Erro"})]}),u]}),g&&l.jsxs("div",{className:"bg-green-50 text-green-600 p-3 rounded-lg text-sm border border-green-200",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx(Fo,{size:16}),l.jsx("span",{className:"font-bold",children:"Sucesso!"})]}),"Usuário criado com sucesso! O usuário foi registrado no Authentication e no Firestore.",l.jsx("div",{className:"mt-2 text-xs",children:"Fechando o modal em instantes..."})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Nome *"}),l.jsxs("div",{className:"relative",children:[l.jsx(Uu,{className:"absolute left-3 top-3 text-slate-400",size:18}),l.jsx("input",{type:"text",required:!0,className:"w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all",value:s.displayName,onChange:I=>i({...s,displayName:I.target.value}),placeholder:"João Silva",disabled:o||g})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Email *"}),l.jsxs("div",{className:"relative",children:[l.jsx(Um,{className:"absolute left-3 top-3 text-slate-400",size:18}),l.jsx("input",{type:"email",required:!0,className:"w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all",value:s.email,onChange:I=>i({...s,email:I.target.value}),placeholder:"usuario@exemplo.com",disabled:o||g})]})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Senha *"}),l.jsxs("div",{className:"relative",children:[l.jsx(Iv,{className:"absolute left-3 top-3 text-slate-400",size:18}),l.jsx("input",{type:y?"text":"password",required:!0,className:"w-full pl-10 pr-10 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all",value:s.password,onChange:I=>i({...s,password:I.target.value}),placeholder:"••••••••",disabled:o||g,minLength:"6"}),l.jsx("button",{type:"button",onClick:()=>N(!y),className:"absolute right-3 top-3 text-slate-400 hover:text-slate-600",disabled:o||g,children:y?l.jsx(wv,{size:18}):l.jsx(bv,{size:18})})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Confirmar Senha *"}),l.jsxs("div",{className:"relative",children:[l.jsx(Iv,{className:"absolute left-3 top-3 text-slate-400",size:18}),l.jsx("input",{type:j?"text":"password",required:!0,className:"w-full pl-10 pr-10 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all",value:s.confirmPassword,onChange:I=>i({...s,confirmPassword:I.target.value}),placeholder:"••••••••",disabled:o||g,minLength:"6"}),l.jsx("button",{type:"button",onClick:()=>O(!j),className:"absolute right-3 top-3 text-slate-400 hover:text-slate-600",disabled:o||g,children:j?l.jsx(wv,{size:18}):l.jsx(bv,{size:18})})]})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Cargo *"}),l.jsxs("div",{className:"relative",children:[l.jsx(Nd,{className:"absolute left-3 top-3 text-slate-400",size:18}),l.jsx("select",{className:"w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all bg-white",value:s.role,onChange:I=>i({...s,role:I.target.value}),disabled:o||g,children:Object.entries(zu).map(([I,E])=>l.jsx("option",{value:I,children:E},I))})]})]}),l.jsxs("div",{className:"pt-4 flex gap-3",children:[l.jsx("button",{type:"button",onClick:t,className:"flex-1 py-3 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors disabled:opacity-50",disabled:o,children:"Cancelar"}),l.jsx("button",{type:"submit",disabled:o||g,className:"flex-1 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50",children:o?l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Criando..."]}):g?l.jsxs(l.Fragment,{children:[l.jsx(Fo,{size:18}),"Usuário Criado!"]}):l.jsxs(l.Fragment,{children:[l.jsx(Tr,{size:18}),"Criar Usuário"]})})]})]})]})]})},iR=({user:t,onClose:e,onSuccess:n})=>{const{updateUserData:r}=Wo(),[s,i]=B.useState({displayName:t.displayName||"",role:t.role||"client",newPassword:"",confirmNewPassword:""}),[o,c]=B.useState(!1),[u,d]=B.useState(""),[g,v]=B.useState(""),[y,N]=B.useState(!1),[j,O]=B.useState(!1),z=async()=>{if(c(!0),d(""),v(""),s.newPassword||s.confirmNewPassword){if(s.newPassword!==s.confirmNewPassword){d("As novas senhas não conferem"),c(!1);return}if(s.newPassword.length<6){d("A nova senha deve ter pelo menos 6 caracteres"),c(!1);return}}try{const I={displayName:s.displayName,role:s.role,updatedAt:new Date().toISOString()};s.newPassword&&console.log("Nova senha definida (necessitaria Admin SDK para atualizar no Authentication)"),await r(t.id,I),v("Dados do usuário atualizados com sucesso!"),setTimeout(()=>{n==null||n(),e()},2e3)}catch(I){console.error("Erro ao atualizar usuário:",I),d("Erro ao atualizar usuário: "+I.message)}finally{c(!1)}};return l.jsxs("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center p-5",children:[l.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-md",onClick:e}),l.jsxs("div",{className:"relative z-50 bg-white rounded-2xl w-full max-w-md shadow-2xl transform transition-all duration-300 scale-100",children:[l.jsxs("div",{className:"p-6 border-b flex justify-between items-center",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"bg-blue-100 p-2 rounded-lg text-blue-600",children:l.jsx(ZA,{size:24})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-bold text-slate-900",children:"Editar Usuário"}),l.jsx("p",{className:"text-slate-500 text-sm",children:"Atualize os dados do usuário"})]})]}),l.jsx("button",{onClick:e,className:"p-2 hover:bg-slate-100 rounded-lg transition-colors",disabled:o,children:l.jsx(Ge,{size:20})})]}),l.jsxs("div",{className:"p-6 space-y-4",children:[u&&l.jsxs("div",{className:"bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-200",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx($r,{size:16}),l.jsx("span",{className:"font-bold",children:"Erro"})]}),u]}),g&&l.jsxs("div",{className:"bg-green-50 text-green-600 p-3 rounded-lg text-sm border border-green-200",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx(Fo,{size:16}),l.jsx("span",{className:"font-bold",children:"Sucesso!"})]}),g]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Nome"}),l.jsxs("div",{className:"relative",children:[l.jsx(Uu,{className:"absolute left-3 top-3 text-slate-400",size:18}),l.jsx("input",{type:"text",className:"w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all",value:s.displayName,onChange:I=>i({...s,displayName:I.target.value}),placeholder:"João Silva",disabled:o})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Email"}),l.jsxs("div",{className:"relative",children:[l.jsx(Um,{className:"absolute left-3 top-3 text-slate-400",size:18}),l.jsx("input",{type:"email",className:"w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg bg-slate-50 cursor-not-allowed",value:t.email,disabled:!0})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Cargo"}),l.jsxs("div",{className:"relative",children:[l.jsx(Nd,{className:"absolute left-3 top-3 text-slate-400",size:18}),l.jsx("select",{className:"w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all",value:s.role,onChange:I=>i({...s,role:I.target.value}),disabled:o,children:Object.entries(zu).map(([I,E])=>l.jsx("option",{value:I,children:E},I))})]})]}),l.jsxs("div",{className:"pt-4 flex gap-3",children:[l.jsx("button",{onClick:e,disabled:o,className:"flex-1 py-2.5 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors",children:"Cancelar"}),l.jsx("button",{onClick:z,disabled:o,className:"flex-1 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2",children:o?l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Salvando..."]}):l.jsxs(l.Fragment,{children:[l.jsx(Gf,{size:16}),"Salvar Alterações"]})})]})]})]})]})},oR=({user:t,onClose:e,onSuccess:n})=>{const{deleteUserAccount:r}=Wo(),[s,i]=B.useState(!1),[o,c]=B.useState(""),[u,d]=B.useState(""),g=async()=>{i(!0),c("");try{await r(t.id),d("Usuário deletado com sucesso!"),setTimeout(()=>{n==null||n(),e()},2e3)}catch(v){console.error("Erro ao deletar usuário:",v),c("Erro ao deletar usuário: "+v.message)}finally{i(!1)}};return l.jsxs("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center p-5",children:[l.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-md",onClick:e}),l.jsxs("div",{className:"relative z-50 bg-white rounded-2xl w-full max-w-md shadow-2xl",children:[l.jsx("div",{className:"p-6 border-b",children:l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"bg-red-100 p-2 rounded-lg text-red-600",children:l.jsx(_l,{size:24})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-bold text-slate-900",children:"Deletar Usuário"}),l.jsx("p",{className:"text-slate-500 text-sm",children:"Esta ação não pode ser desfeita"})]})]})}),l.jsxs("div",{className:"p-6 space-y-4",children:[o&&l.jsxs("div",{className:"bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-200",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx($r,{size:16}),l.jsx("span",{className:"font-bold",children:"Erro"})]}),o]}),u&&l.jsxs("div",{className:"bg-green-50 text-green-600 p-3 rounded-lg text-sm border border-green-200",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx(Fo,{size:16}),l.jsx("span",{className:"font-bold",children:"Sucesso!"})]}),u]}),l.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4",children:[l.jsx("p",{className:"text-red-800 font-bold mb-2",children:"⚠️ Atenção!"}),l.jsxs("p",{className:"text-red-700 text-sm",children:["Você está prestes a deletar o usuário ",l.jsx("span",{className:"font-bold",children:t.displayName})," (",t.email,"). Esta ação removerá permanentemente o usuário do sistema."]}),l.jsxs("p",{className:"text-red-700 text-sm mt-2",children:[l.jsx("span",{className:"font-bold",children:"Nota:"})," A conta do Firebase Authentication não será deletada automaticamente. O usuário ainda poderá fazer login, mas não terá acesso ao sistema."]})]}),l.jsxs("div",{className:"pt-4 flex gap-3",children:[l.jsx("button",{onClick:e,disabled:s,className:"flex-1 py-2.5 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors",children:"Cancelar"}),l.jsx("button",{onClick:g,disabled:s||u,className:"flex-1 py-2.5 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2",children:s?l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Deletando..."]}):u?l.jsxs(l.Fragment,{children:[l.jsx(Fo,{size:16}),"Deletado!"]}):l.jsxs(l.Fragment,{children:[l.jsx(_l,{size:16}),"Deletar Usuário"]})})]})]})]})]})};function aR(){const{userData:t,hasPermission:e,getAllUsers:n}=Wo(),[r,s]=B.useState([]),[i,o]=B.useState(!0),[c,u]=B.useState(null),[d,g]=B.useState(""),[v,y]=B.useState({}),[N,j]=B.useState(!1),[O,z]=B.useState(!1),[I,E]=B.useState(!1),[R,F]=B.useState(null),[M,V]=B.useState(0);B.useEffect(()=>{e("canManageUsers")&&w()},[e,M]);const w=async()=>{o(!0),u(null);try{const A=await n();s(A)}catch(A){console.error("Erro ao carregar usuários:",A),u("Falha ao carregar a lista de usuários. Verifique a conexão e tente novamente.")}finally{o(!1)}},x=A=>{F(A),z(!0)},b=A=>{F(A),E(!0)},T=A=>{y(S=>({...S,[A]:!S[A]}))},C=r.filter(A=>{var S,Ke,ft;return((S=A.email)==null?void 0:S.toLowerCase().includes(d.toLowerCase()))||((Ke=A.displayName)==null?void 0:Ke.toLowerCase().includes(d.toLowerCase()))||((ft=A.role)==null?void 0:ft.toLowerCase().includes(d.toLowerCase()))});return e("canManageUsers")?l.jsxs("div",{className:"p-6 space-y-6 relative",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-3xl font-black text-slate-900",children:"Gerenciamento de Usuários"}),l.jsx("p",{className:"text-slate-500",children:"Controle de cargos e permissões do sistema"})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("div",{className:"relative",children:[l.jsx(Qf,{className:"absolute left-4 top-3.5 text-slate-400",size:18}),l.jsx("input",{type:"text",placeholder:"Buscar usuários...",className:"pl-11 pr-4 py-3 rounded-xl border border-slate-200 w-64 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all",value:d,onChange:A=>g(A.target.value)})]}),l.jsxs("button",{onClick:()=>V(A=>A+1),className:"bg-slate-200 text-slate-700 px-4 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-300 transition-colors",children:[l.jsx(m1,{size:18}),"Atualizar"]}),l.jsxs("button",{onClick:()=>j(!0),className:"bg-green-600 text-white px-4 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-green-700 transition-colors",children:[l.jsx(Tr,{size:18}),"Novo Usuário"]})]})]}),c&&l.jsxs("div",{className:"bg-red-50 text-red-600 p-4 rounded-xl mb-4 border border-red-200",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[l.jsx($r,{size:20}),l.jsx("span",{className:"font-bold",children:"Erro"})]}),c,l.jsx("button",{onClick:w,className:"mt-2 text-sm underline font-bold",children:"Tentar novamente"})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-6",children:[l.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm",children:[l.jsx("div",{className:"text-sm font-bold text-slate-400 uppercase mb-1",children:"Total"}),l.jsx("div",{className:"text-2xl font-black text-slate-900",children:r.length})]}),l.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm",children:[l.jsx("div",{className:"text-sm font-bold text-slate-400 uppercase mb-1",children:"Administradores"}),l.jsx("div",{className:"text-2xl font-black text-red-600",children:r.filter(A=>A.role==="admin").length})]}),l.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm",children:[l.jsx("div",{className:"text-sm font-bold text-slate-400 uppercase mb-1",children:"Clientes"}),l.jsx("div",{className:"text-2xl font-black text-purple-600",children:r.filter(A=>A.role==="client").length})]})]}),l.jsx("div",{className:"bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm",children:l.jsx("div",{className:"overflow-x-auto",children:l.jsxs("table",{className:"w-full",children:[l.jsx("thead",{className:"bg-slate-50 border-b",children:l.jsxs("tr",{children:[l.jsx("th",{className:"text-left p-4 text-sm font-bold text-slate-400 uppercase",children:"Usuário"}),l.jsx("th",{className:"text-left p-4 text-sm font-bold text-slate-400 uppercase",children:"Cargo"}),l.jsx("th",{className:"text-left p-4 text-sm font-bold text-slate-400 uppercase",children:"Permissões"}),l.jsx("th",{className:"text-left p-4 text-sm font-bold text-slate-400 uppercase",children:"Ações"})]})}),l.jsx("tbody",{children:i?l.jsx("tr",{children:l.jsx("td",{colSpan:"4",className:"p-8 text-center",children:l.jsx("div",{className:"inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-t-transparent"})})}):C.length===0?l.jsx("tr",{children:l.jsx("td",{colSpan:"4",className:"p-8 text-center text-slate-400",children:"Nenhum usuário encontrado"})}):C.map(A=>l.jsxs(Bv.Fragment,{children:[l.jsxs("tr",{className:"border-b border-slate-100 hover:bg-slate-50 transition-colors",children:[l.jsxs("td",{className:"p-4",children:[l.jsx("div",{className:"font-bold text-slate-800",children:A.displayName}),l.jsx("div",{className:"text-sm text-slate-500",children:A.email})]}),l.jsx("td",{className:"p-4",children:l.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-bold ${Av[A.role]||"bg-gray-100 text-gray-800"}`,children:zu[A.role]||A.role})}),l.jsx("td",{className:"p-4",children:l.jsxs("button",{onClick:()=>T(A.id),className:"text-blue-600 hover:text-blue-800 text-sm font-bold flex items-center gap-1 transition-colors",children:[v[A.id]?"Ocultar":"Ver"," Permissões",v[A.id]?l.jsx(p1,{size:14}):l.jsx(f1,{size:14})]})}),l.jsx("td",{className:"p-4",children:l.jsxs("div",{className:"flex gap-2",children:[l.jsx("button",{onClick:()=>x(A),className:"bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1 hover:bg-blue-700 transition-colors",children:l.jsx(XA,{size:14})}),l.jsx("button",{onClick:()=>b(A),className:"bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1 hover:bg-red-700 transition-colors",disabled:A.id===(t==null?void 0:t.uid),children:l.jsx(_l,{size:14})})]})})]}),v[A.id]&&l.jsx("tr",{className:"bg-slate-50",children:l.jsx("td",{colSpan:"4",className:"p-4",children:l.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:A.permissions&&Object.entries(A.permissions).map(([S,Ke])=>l.jsxs("div",{className:"flex items-center gap-2",children:[Ke?l.jsx(Fo,{size:16,className:"text-green-500"}):l.jsx(rR,{size:16,className:"text-red-300"}),l.jsx("span",{className:"text-sm text-slate-700 capitalize",children:S.replace(/([A-Z])/g," $1").toLowerCase()})]},S))})})})]},A.id))})]})})}),l.jsxs("div",{className:"bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm",children:[l.jsxs("h3",{className:"text-lg font-bold text-slate-800 mb-3 flex items-center gap-2",children:[l.jsx(Nd,{size:20})," Legenda de Cargos"]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-4",children:Object.entries(zu).map(([A,S])=>l.jsxs("div",{className:"bg-white p-4 rounded-xl border",children:[l.jsx("div",{className:`px-3 py-1 rounded-full text-xs font-bold inline-block mb-2 ${Av[A]}`,children:S}),l.jsxs("ul",{className:"text-sm text-slate-600 space-y-1",children:[A==="admin"&&l.jsx("li",{children:"• Acesso total ao sistema"}),A==="client"&&l.jsx("li",{children:"• Dados próprios apenas"})]})]},A))})]}),N&&l.jsx(sR,{onClose:()=>j(!1),onSuccess:()=>{w(),V(A=>A+1)}}),O&&R&&l.jsx(iR,{user:R,onClose:()=>{z(!1),F(null)},onSuccess:()=>{w(),V(A=>A+1)}}),I&&R&&l.jsx(oR,{user:R,onClose:()=>{E(!1),F(null)},onSuccess:()=>{w(),V(A=>A+1)}})]}):l.jsxs("div",{className:"p-8 text-center",children:[l.jsx($r,{className:"mx-auto text-amber-500 mb-4",size:48}),l.jsx("h3",{className:"text-xl font-bold text-slate-800",children:"Acesso Restrito"}),l.jsx("p",{className:"text-slate-600 mt-2",children:"Você não tem permissão para gerenciar usuários."})]})}function lR(){const{login:t}=Wo(),[e,n]=B.useState(""),[r,s]=B.useState(""),[i,o]=B.useState(""),[c,u]=B.useState(!1),d=async g=>{g.preventDefault(),o(""),u(!0);try{await t(e,r)}catch(v){switch(console.error("Erro de login:",v),v.code){case"auth/user-not-found":case"auth/wrong-password":o("Email ou senha incorretos.");break;case"auth/invalid-email":o("Email inválido.");break;case"auth/too-many-requests":o("Muitas tentativas. Tente novamente mais tarde.");break;case"auth/user-disabled":o("Esta conta foi desativada.");break;default:o("Erro ao fazer login. Tente novamente.")}}finally{u(!1)}};return l.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4",children:l.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md",children:[l.jsxs("div",{className:"text-center mb-8",children:[l.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4",children:l.jsx(Sv,{className:"text-white",size:28})}),l.jsx("h1",{className:"text-2xl font-black text-slate-900",children:"ALFA"}),l.jsx("p",{className:"text-slate-500 text-sm font-medium mt-1",children:"Tecnologia Hospitalar"})]}),l.jsxs("form",{onSubmit:d,className:"space-y-6",children:[i&&l.jsxs("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg flex items-center gap-3",children:[l.jsx($r,{size:18}),l.jsx("span",{className:"text-sm font-medium",children:i})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Email"}),l.jsxs("div",{className:"relative",children:[l.jsx(Um,{className:"absolute left-3 top-3 text-slate-400",size:18}),l.jsx("input",{type:"email",required:!0,className:"w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all",placeholder:"seu@email.com",value:e,onChange:g=>n(g.target.value),disabled:c})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Senha"}),l.jsxs("div",{className:"relative",children:[l.jsx(Sv,{className:"absolute left-3 top-3 text-slate-400",size:18}),l.jsx("input",{type:"password",required:!0,className:"w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all",placeholder:"••••••••",value:r,onChange:g=>s(g.target.value),disabled:c})]})]}),l.jsx("button",{type:"submit",disabled:c,className:"w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:c?l.jsxs(l.Fragment,{children:[l.jsx(Yi,{className:"animate-spin",size:18}),"Entrando..."]}):l.jsxs(l.Fragment,{children:[l.jsx(KA,{size:18}),"Entrar no Sistema"]})})]}),l.jsx("div",{className:"mt-8 pt-6 border-t border-slate-100 text-center",children:l.jsx("p",{className:"text-slate-500 text-sm",children:"Entre em contato com o administrador para criar uma conta."})})]})})}const Ea="/alfa-app/assets/logo-CJe1SxB-.png";var g1={exports:{}};(function(t,e){(function(n,r){r()})(ha,function(){function n(d,g){return typeof g>"u"?g={autoBom:!1}:typeof g!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),g={autoBom:!g}),g.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(d.type)?new Blob(["\uFEFF",d],{type:d.type}):d}function r(d,g,v){var y=new XMLHttpRequest;y.open("GET",d),y.responseType="blob",y.onload=function(){u(y.response,g,v)},y.onerror=function(){console.error("could not download file")},y.send()}function s(d){var g=new XMLHttpRequest;g.open("HEAD",d,!1);try{g.send()}catch{}return 200<=g.status&&299>=g.status}function i(d){try{d.dispatchEvent(new MouseEvent("click"))}catch{var g=document.createEvent("MouseEvents");g.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),d.dispatchEvent(g)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof ha=="object"&&ha.global===ha?ha:void 0,c=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(d,g,v){var y=o.URL||o.webkitURL,N=document.createElement("a");g=g||d.name||"download",N.download=g,N.rel="noopener",typeof d=="string"?(N.href=d,N.origin===location.origin?i(N):s(N.href)?r(d,g,v):i(N,N.target="_blank")):(N.href=y.createObjectURL(d),setTimeout(function(){y.revokeObjectURL(N.href)},4e4),setTimeout(function(){i(N)},0))}:"msSaveOrOpenBlob"in navigator?function(d,g,v){if(g=g||d.name||"download",typeof d!="string")navigator.msSaveOrOpenBlob(n(d,v),g);else if(s(d))r(d,g,v);else{var y=document.createElement("a");y.href=d,y.target="_blank",setTimeout(function(){i(y)})}}:function(d,g,v,y){if(y=y||open("","_blank"),y&&(y.document.title=y.document.body.innerText="downloading..."),typeof d=="string")return r(d,g,v);var N=d.type==="application/octet-stream",j=/constructor/i.test(o.HTMLElement)||o.safari,O=/CriOS\/[\d]+/.test(navigator.userAgent);if((O||N&&j||c)&&typeof FileReader<"u"){var z=new FileReader;z.onloadend=function(){var R=z.result;R=O?R:R.replace(/^data:[^;]*;/,"data:attachment/file;"),y?y.location.href=R:location=R,y=null},z.readAsDataURL(d)}else{var I=o.URL||o.webkitURL,E=I.createObjectURL(d);y?y.location=E:location.href=E,y=null,setTimeout(function(){I.revokeObjectURL(E)},4e4)}});o.saveAs=u.saveAs=u,t.exports=u})})(g1);var cR=g1.exports;const Xn="alfa-tecnologia-hospitalar-prod",fo=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],Rv=(t,e)=>{B.useEffect(()=>{const n=r=>{t.current&&!t.current.contains(r.target)&&e()};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[t,e])},uR=({data:t,colors:e,onClick:n})=>{const r=t.reduce((i,o)=>i+o.value,0);let s=0;return r===0?l.jsx("div",{className:"text-gray-400 text-xs text-center py-10",children:"Sem dados"}):l.jsxs("div",{className:"relative w-48 h-48 mx-auto group cursor-pointer",children:[l.jsxs("svg",{viewBox:"0 0 100 100",className:"transform -rotate-90 w-full h-full",children:[t.map((i,o)=>{const c=i.value/r*360,u=c>180?1:0,d=50+40*Math.cos(s*Math.PI/180),g=50+40*Math.sin(s*Math.PI/180),v=50+40*Math.cos((s+c)*Math.PI/180),y=50+40*Math.sin((s+c)*Math.PI/180),N=r===i.value?"M 50 10 a 40 40 0 1 1 0 80 a 40 40 0 1 1 0 -80":`M 50 50 L ${d} ${g} A 40 40 0 ${u} 1 ${v} ${y} Z`;return s+=c,l.jsx("path",{d:N,fill:e[o%e.length],stroke:"white",strokeWidth:"2",className:"hover:opacity-80 transition-opacity",onClick:j=>{j.stopPropagation(),n(i.label)}},o)}),l.jsx("circle",{cx:"50",cy:"50",r:"25",fill:"white",className:"pointer-events-none"})]}),l.jsxs("div",{className:"absolute inset-0 flex items-center justify-center flex-col pointer-events-none",children:[l.jsx("span",{className:"text-3xl font-black text-slate-800",children:r}),l.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-400",children:"Total"})]}),l.jsx("div",{className:"absolute -bottom-6 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-blue-500 font-bold bg-white/90 py-1 rounded-full pointer-events-none",children:"Clique para filtrar"})]})},dR=t=>{B.useEffect(()=>{const e=n=>{n.key==="Escape"&&t()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[t])},Pv=({data:t,maxVal:e,colorClass:n,onClick:r,showValues:s=!0})=>l.jsx("div",{className:"space-y-3",children:t.map((i,o)=>l.jsxs("div",{className:"space-y-1 cursor-pointer group hover:bg-slate-50 p-2 rounded-xl transition-colors",onClick:()=>r&&r(i.label),children:[l.jsxs("div",{className:"flex justify-between text-xs font-bold text-slate-600 group-hover:text-blue-600 transition-colors",children:[l.jsx("span",{className:"truncate pr-2",children:i.label}),l.jsx("span",{className:"whitespace-nowrap",children:s?i.valueFormatted||i.value:"•••••"})]}),l.jsx("div",{className:"h-3 w-full bg-slate-100 rounded-full overflow-hidden",children:l.jsx("div",{className:`h-full rounded-full ${n} group-hover:brightness-90 transition-all`,style:{width:`${e>0?i.value/e*100:0}%`}})})]},o))}),hR=({message:t,type:e="error",onClose:n})=>{const r={error:{bg:"bg-red-500",icon:l.jsx($r,{size:20}),title:"Atenção!",border:"border-l-4 border-red-600"},success:{bg:"bg-green-500",icon:l.jsx(Wf,{size:20}),title:"Sucesso!",border:"border-l-4 border-green-600"},info:{bg:"bg-blue-500",icon:l.jsx(ho,{size:20}),title:"Informação",border:"border-l-4 border-blue-600"},warning:{bg:"bg-amber-500",icon:l.jsx($r,{size:20}),title:"Aviso!",border:"border-l-4 border-amber-600"}},{bg:s,icon:i,title:o,border:c}=r[e];return l.jsx("div",{className:"fixed top-6 right-6 z-[100] animate-in slide-in-from-right-8 fade-in duration-300",children:l.jsxs("div",{className:`${s} ${c} text-white px-6 py-4 rounded-r-2xl shadow-2xl flex items-start gap-3 min-w-[320px] max-w-[400px]`,children:[l.jsx("div",{className:"flex-shrink-0 mt-0.5",children:i}),l.jsxs("div",{className:"flex-1",children:[l.jsx("div",{className:"font-bold text-sm mb-1",children:o}),l.jsx("div",{className:"text-sm opacity-90 whitespace-pre-line",children:t})]}),l.jsx("button",{onClick:n,className:"ml-2 opacity-70 hover:opacity-100 transition-opacity flex-shrink-0",children:l.jsx(Ge,{size:16})})]})})},Se=t=>t?typeof t=="number"?t:parseFloat(t.toString().replace(/\./g,"").replace(",","."))||0:0,cs=t=>{if(!t||t.length===0)return[];const e=new Set;return t.forEach(n=>{if(typeof n=="string"){let r=n.replace(/([a-zà-ú])([A-ZÀ-Ú])/g,`$1
$2`).replace(/([A-ZÀ-Ú][a-zà-ú]+)([A-ZÀ-Ú][a-zà-ú]+)/g,`$1
$2`).replace(/(\d)([A-ZÀ-Úa-zà-ú])/g,`$1
$2`).trim();const s=/[\n\r,.;!?]+/;r.split(s).forEach(o=>{const c=o.trim();c.length>2&&e.add(c)})}}),Array.from(e).sort()},Jn=({icon:t,label:e,active:n,onClick:r,isSidebarOpen:s})=>l.jsxs("button",{onClick:r,className:`
            w-full flex items-center transition-colors rounded-xl
            ${s?"gap-4 p-3":"justify-center p-2"}
            ${n?"bg-blue-600 text-white":"text-slate-400 hover:bg-slate-800"}
        `,title:s?"":e,children:[l.jsx("div",{className:`
            flex items-center justify-center
            ${s?"w-6":"w-8"}
        `,children:t}),s&&l.jsx("span",{className:"text-sm font-bold tracking-tight whitespace-nowrap",children:e})]}),yn=({value:t,onChange:e,options:n,className:r="",disabled:s=!1,id:i,label:o,variant:c="default"})=>{const u=B.useRef(null),d=N=>{if(s)return;const j=n.findIndex(O=>O.value===t||O===t);switch(N.key){case"ArrowUp":case"ArrowLeft":if(N.preventDefault(),j>0){const O=n[j-1].value||n[j-1];e({target:{value:O}})}break;case"ArrowDown":case"ArrowRight":if(N.preventDefault(),j<n.length-1){const O=n[j+1].value||n[j+1];e({target:{value:O}})}break;case"Home":if(N.preventDefault(),n.length>0){const O=n[0].value||n[0];e({target:{value:O}})}break;case"End":if(N.preventDefault(),n.length>0){const O=n[n.length-1].value||n[n.length-1];e({target:{value:O}})}break;case" ":case"Enter":N.preventDefault(),u.current&&u.current.focus();break}},g={default:"bg-white border border-slate-200 text-slate-900",dark:"bg-slate-900 text-white border-none",light:"bg-slate-100 border-none text-slate-900",indigo:"bg-white border border-indigo-200 text-slate-900"},v="w-full p-4 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold cursor-pointer",y=g[c]||g.default;return l.jsx("select",{ref:u,id:i,value:t,onChange:e,className:`${v} ${y} ${r} ${s?"opacity-50 cursor-not-allowed":""}`,disabled:s,onKeyDown:d,"aria-label":o,tabIndex:0,children:n.map((N,j)=>typeof N=="object"?l.jsx("option",{value:N.value,tabIndex:0,className:"text-slate-900",children:N.label},N.value):l.jsx("option",{value:N,tabIndex:0,className:"text-slate-900",children:N},N))})},fR=({value:t,onChange:e,billingType:n})=>{const r=[`1ª Visita de ${fo[new Date().getMonth()]}`,`2ª Visita de ${fo[new Date().getMonth()]}`,`3ª Visita de ${fo[new Date().getMonth()]}`,`4ª Visita de ${fo[new Date().getMonth()]}`];return n!=="Contrato de manutenção"?null:l.jsx(yn,{value:t,onChange:e,options:r,variant:"indigo",className:"animate-in slide-in-from-top-2",label:"Visita de manutenção"})},pR=({isOpen:t,onClose:e,selectedOrdersCount:n,totalValue:r,initialData:s,onConfirm:i})=>{const[o,c]=B.useState({paymentCondition:"À vista",installments:"",discount5Days:!1,finalChargedAmount:r});B.useEffect(()=>{t&&c({paymentCondition:s.paymentCondition||"À vista",installments:s.installments||"",discount5Days:s.discount5Days||!1,finalChargedAmount:r})},[t,s,r]),B.useEffect(()=>{if(o.discount5Days){const g=r*.05,v=r-g;c(y=>({...y,finalChargedAmount:v}))}else c(g=>({...g,finalChargedAmount:r}))},[o.discount5Days,r]);const u={Boleto:["30 / 60 dias","5 dias (5% de desconto)"],Cartão:["1x (30 Dias)","2x (30/60 Dias)","3x (30/60/90 Dias)","4x (30/60/90/120 Dias)"]},d=()=>{i(o),e()};return t?l.jsx("div",{className:"fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4",children:l.jsxs("div",{className:"bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-6 animate-in zoom-in-95",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"bg-blue-100 p-3 rounded-full text-blue-600",children:l.jsx(Kf,{size:24})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-black text-slate-900",children:"Condições de Pagamento"}),l.jsxs("p",{className:"text-slate-500 text-sm",children:["Ajuste as condições para ",n," OS(s) selecionadas"]})]})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase",children:"Valor Total"}),l.jsxs("div",{className:"w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-black text-2xl text-slate-800 text-center",children:["R$ ",r.toLocaleString("pt-BR",{minimumFractionDigits:2})]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase",children:"Condição de Pagamento"}),l.jsx(yn,{value:o.paymentCondition,onChange:g=>c({...o,paymentCondition:g.target.value,installments:g.target.value==="À vista"?"":o.installments}),options:["À vista","Boleto","Cartão"],label:"Condição de pagamento"})]}),(o.paymentCondition==="Boleto"||o.paymentCondition==="Cartão")&&l.jsxs("div",{className:"space-y-2 animate-in fade-in",children:[l.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase",children:"Parcelas"}),o.paymentCondition==="Boleto"?l.jsxs("div",{className:"space-y-3",children:[l.jsx(yn,{value:o.installments,onChange:g=>{const v=g.target.value==="5 dias (5% de desconto)";c({...o,installments:g.target.value,discount5Days:v})},options:u.Boleto,label:"Parcelas boleto"}),o.discount5Days&&l.jsxs("div",{className:"bg-green-50 p-4 rounded-xl border border-green-100 space-y-1",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-xs font-bold text-green-700 uppercase",children:"Desconto de 5%"}),l.jsxs("span",{className:"text-sm font-black text-green-600",children:["- R$ ",(r*.05).toLocaleString("pt-BR",{minimumFractionDigits:2})]})]}),l.jsxs("div",{className:"flex justify-between items-center pt-1 border-t border-green-100",children:[l.jsx("span",{className:"text-xs font-bold text-slate-600",children:"Valor Final"}),l.jsxs("span",{className:"text-lg font-black text-slate-800",children:["R$ ",o.finalChargedAmount.toLocaleString("pt-BR",{minimumFractionDigits:2})]})]})]})]}):l.jsx(yn,{value:o.installments,onChange:g=>c({...o,installments:g.target.value}),options:u.Cartão,label:"Parcelas cartão"})]}),l.jsxs("div",{className:"bg-blue-50 p-4 rounded-xl border border-blue-100",children:[l.jsxs("div",{className:"flex items-center gap-2 text-blue-600 mb-2",children:[l.jsx(ho,{size:16}),l.jsx("span",{className:"text-xs font-bold uppercase",children:"Informação"})]}),l.jsxs("p",{className:"text-xs text-blue-700",children:["Estas condições de pagamento serão aplicadas a todas as ",n," OS(s) selecionadas e salvas no sistema."]})]})]}),l.jsxs("div",{className:"flex gap-3",children:[l.jsx("button",{onClick:e,className:"flex-1 py-4 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-colors",children:"Cancelar"}),l.jsxs("button",{onClick:d,className:"flex-1 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-xl shadow-blue-200 transition-colors flex items-center justify-center gap-2",children:[l.jsx(Qi,{size:20})," Confirmar e Imprimir"]})]})]})}):null};function mR(){const{user:t,userData:e,loading:n,hasPermission:r,logout:s}=Wo(),i=B.useRef(null),o=B.useRef(null),c=B.useRef(null),u=B.useRef(null),d=B.useRef(null),g=B.useRef(null),[v,y]=B.useState(""),[N,j]=B.useState(""),[O,z]=B.useState(""),[I,E]=B.useState(!1),[R,F]=B.useState(!1);Rv(d,()=>{I&&E(!1)}),Rv(g,()=>{R&&F(!1)});const[M,V]=B.useState("os"),[w,x]=B.useState(!0),[b,T]=B.useState(!0),[C,A]=B.useState([]),[S,Ke]=B.useState([]),[ft,Pi]=B.useState([]),[Sn,J]=B.useState(!0),[X,oe]=B.useState(""),[Ae,Ie]=B.useState("desc"),[Ne,nn]=B.useState(""),[rn,Wt]=B.useState(!1),[kn,Bs]=B.useState(!1),[Sd,Cn]=B.useState(!1),[qs,Vt]=B.useState(!1),[Ko,fr]=B.useState(!1),[Go,Hr]=B.useState(!1),[kd,Hs]=B.useState(!1),[Fl,pr]=B.useState(!1),[Ws,Ks]=B.useState(!1),[Wr,Kr]=B.useState(!1),[ji,tt]=B.useState(!1),[Xe,sn]=B.useState(!1),[Gr,Qo]=B.useState(!1),[Di,An]=B.useState(!1),[Yo,Gs]=B.useState(!1),[on,Xo]=B.useState(null),[qn,Oi]=B.useState(null),[mr,an]=B.useState(!1),[pe,Ft]=B.useState([]),[gr,ln]=B.useState(""),[Jo,Qr]=B.useState(""),[Qs,Hn]=B.useState(""),[Li,nt]=B.useState(""),[Mi,vr]=B.useState(""),[D,se]=B.useState({client:"",cnpj:"",contactPerson:"",address:"",email:"",billingType:"Avulso",maintenanceVisit:"",item:"",manufacturer:"",model:"",serial:"",equipmentObservation:"",quantity:"1",defect:"",defectsList:[],solutionType:"Preenchimento manual",solution:"",manualSolutionsList:[],benchRepairList:[],solutionsList:[],notRepairableDetail:"",costThirdPartyName:"",costThirdPartyShipping:"",costClientShipping:"",costParts:"",chargedAmount:"",paymentCondition:"À vista",installments:"",status:"Recebido",statusDate:new Date().toISOString().split("T")[0],statusHistory:[],trackingCode:"",sentToThirdParty:"Não",thirdPartyInfo:"",thirdPartyTracking:"",thirdPartyDate:"",osNumber:"",deliveryDeadline:"",discount5Days:!1,discountAmount:0,finalChargedAmount:0,photos:[]}),[fe,Ue]=B.useState({clientName:"",cnpj:"",address:"",contactPerson:"",email:"",startDate:"",endDate:"",monthlyValue:"",annualValue:"",coveredItems:{videoSurgeryInstruments:!1,openInstruments:!1,videoSurgeryEquipment:!1,endoscopes:!1},observations:""}),[Kt,Yr]=B.useState({client:!1,item:!1,defect:!1,solution:!1,notRepairableDetail:!1,solutionsList:!1,benchRepairList:!1}),[Xr,Vi]=B.useState({show:!1,message:"",type:"error"}),[Jr,Fi]=B.useState("Recebido"),[gn,Ul]=B.useState(new Date().toISOString().split("T")[0]),[Zo,ea]=B.useState({totalValue:0,paymentCondition:"À vista",installments:"",discount5Days:!1,finalChargedAmount:0}),[rt,Zr]=B.useState(null),[pt,Ys]=B.useState(null),[ta,Cd]=B.useState(!1),es=[{value:"Recebido",label:"Recebido"},{value:"Em inspeção",label:"Inspeção"},{value:"Em orçamento",label:"Orçamento"},{value:"Aguardando aprovação do orçamento",label:"Aprovação"},{value:"Em manutenção",label:"Manutenção"},{value:"Em rota de entrega",label:"Entrega"},{value:"Finalizado",label:"Finalizado"}],ts=es.map(f=>f.value),yr=["Avulso","Cortesia (visita sem custo)","Contrato de manutenção"];fo[new Date().getMonth()];const na=["Preenchimento manual","Manual com custos detalhados","Conserto em bancada","Não passível de conserto, substituir por novo equipamento / material"],zl={Boleto:["30 / 60 dias","5 dias (5% de desconto)"],Cartão:["1x (30 Dias)","2x (30/60 Dias)","3x (30/60/90 Dias)","4x (30/60/90/120 Dias)"]},ra=()=>{if(!Ne.trim()){he("Digite um intervalo válido (ex: 10-20 ou 10,20,30)","error");return}const f=Rn.filter(k=>{var P,$;return((P=k.client)==null?void 0:P.toLowerCase().includes(X.toLowerCase()))||(($=k.osNumber)==null?void 0:$.includes(X))});let m=[];try{if(Ne.includes("-")){let[k,P]=Ne.split("-").map(K=>K.trim()),$=parseInt(k),W=parseInt(P);if(isNaN($)||isNaN(W)){he("Formato inválido. Use: 10-20 ou 10,20,30","error");return}$>W&&([$,W]=[W,$]),m=f.filter(K=>{var Ee;const Q=(Ee=K.osNumber)==null?void 0:Ee.match(/^(\d+)\//);if(!Q)return!1;const te=parseInt(Q[1]);return!isNaN(te)&&te>=$&&te<=W}).map(K=>K.firestoreId)}else if(Ne.includes(",")){const k=Ne.split(",").map(P=>parseInt(P.trim())).filter(P=>!isNaN(P));if(k.length===0){he("Formato inválido. Use números separados por vírgula","error");return}m=f.filter(P=>{var K;const $=(K=P.osNumber)==null?void 0:K.match(/^(\d+)\//);if(!$)return!1;const W=parseInt($[1]);return k.includes(W)}).map(P=>P.firestoreId)}else{const k=parseInt(Ne.trim());if(isNaN(k)){he("Digite um número válido","error");return}m=f.filter(P=>{var K;const $=(K=P.osNumber)==null?void 0:K.match(/^(\d+)\//);return $?parseInt($[1])===k:!1}).map(P=>P.firestoreId)}if(m.length===0){he("Nenhuma OS encontrada no intervalo especificado","warning");return}Ft(m),nn(""),Wt(!1),he(`${m.length} OS(s) selecionada(s) com sucesso!`,"success")}catch(k){console.error("Erro ao processar intervalo:",k),he("Erro ao processar intervalo. Verifique o formato.","error")}},he=(f,m="error")=>{Vi({show:!0,message:f,type:m}),setTimeout(()=>{Vi(k=>({...k,show:!1}))},5e3)},mt=f=>b?f.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}):"R$ •••••",sa=()=>{const f=Se(D.costThirdPartyShipping),m=Se(D.costParts),k=Se(D.costClientShipping),P=Se(D.chargedAmount),$=D.solutionsList.reduce((Ee,Te)=>Ee+Se(Te.cost),0),W=f+m+k,K=W*1.6,Q=D.discount5Days&&D.finalChargedAmount||P,te=Q-W;return{totalCost:W,profit:te,suggestedValue:K,solutionsTotal:$,finalCharged:Q}},{totalCost:ia,profit:xr,suggestedValue:$l,solutionsTotal:Ad}=sa(),Bl=()=>{const f=[],m={...Kt};return Object.keys(m).forEach(k=>m[k]=!1),D.client.trim()||(f.push("• Cliente é obrigatório"),m.client=!0),D.item.trim()||(f.push("• Item/Equipamento é obrigatório"),m.item=!0),(!D.defectsList||D.defectsList.length===0)&&!D.defect.trim()&&(f.push("• Descrição do defeito é obrigatória"),m.defect=!0),D.solutionType==="Preenchimento manual"&&(!D.manualSolutionsList||D.manualSolutionsList.length===0)&&!D.solution.trim()&&(f.push("• Descrição da solução é obrigatória no modo manual"),m.solution=!0),D.solutionType==="Conserto em bancada"&&(!D.benchRepairList||D.benchRepairList.length===0)&&(f.push("• Descreva as etapas do conserto em bancada"),m.benchRepairList=!0),D.solutionType==="Não passível de conserto, substituir por novo equipamento / material"&&!D.notRepairableDetail&&(f.push("• Detalhe a substituição por novo equipamento/material"),m.notRepairableDetail=!0),D.solutionType==="Manual com custos detalhados"&&D.solutionsList.length===0&&(f.push("• Adicione pelo menos um item na lista de soluções com custo"),m.solutionsList=!0),Yr(m),f.length>0?(he(`Preencha os campos obrigatórios:
`+f.join(`
`),"error"),!0):!1},ql=f=>{let m=!1;switch(f){case"client":m=!D.client.trim();break;case"item":m=!D.item.trim();break;case"defect":m=(!D.defectsList||D.defectsList.length===0)&&!D.defect.trim();break;case"solution":m=D.solutionType==="Preenchimento manual"&&(!D.manualSolutionsList||D.manualSolutionsList.length===0)&&!D.solution.trim();break;case"benchRepairList":m=D.solutionType==="Conserto em bancada"&&(!D.benchRepairList||D.benchRepairList.length===0);break;case"notRepairableDetail":m=D.solutionType==="Não passível de conserto, substituir por novo equipamento / material"&&!D.notRepairableDetail;break;case"solutionsList":m=D.solutionType==="Manual com custos detalhados"&&D.solutionsList.length===0;break}Yr(k=>({...k,[f]:m}))},Hl=B.useMemo(()=>{const f=new Map;return S.forEach(m=>{if(m.clientName){const k=m.clientName.trim().toLowerCase();f.set(k,{client:m.clientName,cnpj:m.cnpj,contactPerson:m.contactPerson,email:m.email,address:m.address})}}),[...C].reverse().forEach(m=>{if(m.client){const k=m.client.trim().toLowerCase();if(!f.has(k))f.set(k,{client:m.client,cnpj:m.cnpj||"",contactPerson:m.contactPerson||"",email:m.email||"",address:m.address||""});else if(m.client&&f.has(k)){const P=f.get(k);!P.cnpj&&m.cnpj&&(P.cnpj=m.cnpj),!P.address&&m.address&&(P.address=m.address),!P.contactPerson&&m.contactPerson&&(P.contactPerson=m.contactPerson),!P.email&&m.email&&(P.email=m.email)}}}),Array.from(f.values()).sort((m,k)=>m.client.localeCompare(k.client))},[C,S]),Wl=B.useMemo(()=>{if(!C||C.length===0)return[];const f=[];return C.forEach(m=>{m.defectsList&&Array.isArray(m.defectsList)&&m.defectsList.forEach(k=>{k&&typeof k=="string"&&k.trim()&&f.push(k.trim())}),m.defect&&typeof m.defect=="string"&&m.defect.trim()&&f.push(m.defect.trim())}),cs(f)},[C]),Wn=B.useMemo(()=>{if(!C||C.length===0)return[];const f=[];return C.forEach(m=>{m.manualSolutionsList&&Array.isArray(m.manualSolutionsList)&&m.manualSolutionsList.forEach(k=>{k&&typeof k=="string"&&k.trim()&&f.push(k.trim())}),m.benchRepairList&&Array.isArray(m.benchRepairList)&&m.benchRepairList.forEach(k=>{k&&typeof k=="string"&&k.trim()&&f.push(k.trim())}),m.solutionsList&&Array.isArray(m.solutionsList)&&m.solutionsList.forEach(k=>{k&&k.text&&typeof k.text=="string"&&k.text.trim()&&f.push(k.text.trim())}),m.solution&&typeof m.solution=="string"&&m.solution.trim()&&f.push(m.solution.trim())}),cs(f)},[C]),vn=B.useMemo(()=>{if(!C||C.length===0)return[];const f=[];return C.forEach(m=>{m.solutionsList&&Array.isArray(m.solutionsList)&&m.solutionsList.forEach(k=>{k&&k.text&&typeof k.text=="string"&&k.text.trim()&&f.push(k.text.trim())})}),cs(f)},[C]),Xs=B.useMemo(()=>{const f=new Map;return C.forEach(m=>{if(m.item&&m.item.length>1){const k=m.item.trim().toLowerCase();f.has(k)||f.set(k,m.item)}}),Array.from(f.values()).sort()},[C]),Js=B.useMemo(()=>{const f=new Map;return C.forEach(m=>{if(m.manufacturer&&m.manufacturer.length>1){const k=m.manufacturer.trim().toLowerCase();f.has(k)||f.set(k,m.manufacturer)}}),Array.from(f.values()).sort()},[C]),oa=B.useMemo(()=>{const f=new Map;return C.forEach(m=>{if(m.model&&m.model.length>1){const k=m.model.trim().toLowerCase();f.has(k)||f.set(k,m.model)}}),Array.from(f.values()).sort()},[C]),Re=B.useMemo(()=>[...new Set(C.map(f=>f.serial).filter(f=>f&&f.length>1))].sort(),[C]),ye=B.useMemo(()=>{let f=C;return(e==null?void 0:e.role)==="client"&&e.displayName&&(f=f.filter(m=>m.client===e.displayName)),f},[C,e]),Rn=B.useMemo(()=>[...ye].sort((f,m)=>{var k,P;return Ae==="desc"?(k=m.osNumber)==null?void 0:k.localeCompare(f.osNumber):(P=f.osNumber)==null?void 0:P.localeCompare(m.osNumber)}),[ye,Ae]),Ut=B.useMemo(()=>{let f=0,m=0,k=0,P={};ye.forEach(K=>{const Q=Se(K.chargedAmount),te=Se(K.costThirdPartyShipping)+Se(K.costParts)+Se(K.costClientShipping),Ee=Q-te;f+=Q,m+=te,k+=Ee,Q>0&&(P[K.client]=(P[K.client]||0)+Q)});const $=f>0?k/f*100:0,W=Object.entries(P).map(([K,Q])=>({label:K,value:Q,valueFormatted:`R$ ${Q.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}`})).sort((K,Q)=>Q.value-K.value).slice(0,5);return{totalRevenue:f,totalCosts:m,totalProfit:k,margin:$,topClients:W}},[ye]),Kl=B.useMemo(()=>{const f=new Set(ye.filter(P=>P.billingType==="Contrato de manutenção").map(P=>P.client)),m=new Set(S.map(P=>P.clientName));return[...new Set([...f,...m])].map(P=>{const $=S.find(K=>K.clientName===P),W=ye.find(K=>K.client===P);return{clientName:P,cnpj:($==null?void 0:$.cnpj)||(W==null?void 0:W.cnpj)||"",address:($==null?void 0:$.address)||(W==null?void 0:W.address)||"",contactPerson:($==null?void 0:$.contactPerson)||(W==null?void 0:W.contactPerson)||"",email:($==null?void 0:$.email)||(W==null?void 0:W.email)||"",startDate:($==null?void 0:$.startDate)||"",endDate:($==null?void 0:$.endDate)||"",monthlyValue:($==null?void 0:$.monthualValue)||"",annualValue:($==null?void 0:$.annualValue)||"",coveredItems:($==null?void 0:$.coveredItems)||{videoSurgeryInstruments:!1,openInstruments:!1,videoSurgeryEquipment:!1,endoscopes:!1},observations:($==null?void 0:$.observations)||"",isConfigured:!!$}}).sort((P,$)=>P.clientName.localeCompare($.clientName))},[ye,S]),Pn=()=>{if(!e)return!1;if(e.role==="admin")return!0;if(e.role==="client")return["os","status","about"].includes(M);const m={os:"canViewOS",status:"canViewOS",financial:"canViewFinancial",contracts:"canViewContracts",inventory:"canViewOS",clients:"canViewAllClients",users:"canManageUsers",about:!0}[M];return m===!0||r(m)};B.useEffect(()=>{if(!t||n)return;const f=mv(ja(ct,"artifacts",Xn,"public","data","serviceOrders"),k=>{const P=k.docs.map($=>({firestoreId:$.id,...$.data()}));A(P.sort(($,W)=>{var K;return(K=W.osNumber)==null?void 0:K.localeCompare($.osNumber)})),J(!1)},k=>{console.error("Erro ao buscar OS:",k),J(!1)}),m=mv(ja(ct,"artifacts",Xn,"public","data","contracts"),k=>{Ke(k.docs.map(P=>P.data()))},k=>{console.error("Erro ao buscar contratos:",k)});return()=>{f(),m()}},[t,n]),B.useEffect(()=>{if(D.discount5Days&&D.chargedAmount){const f=Se(D.chargedAmount),m=f*.05,k=f-m;se(P=>({...P,discountAmount:m,finalChargedAmount:k}))}else se(f=>({...f,discountAmount:0,finalChargedAmount:Se(f.chargedAmount)}))},[D.discount5Days,D.chargedAmount]),B.useEffect(()=>{if((D.status==="Em orçamento"||D.status==="Aguardando aprovação do orçamento")&&!D.deliveryDeadline){const f=C.find(m=>m.firestoreId===(on==null?void 0:on.firestoreId));if(f!=null&&f.deliveryDeadline){const m=f.deliveryDeadline.match(/^(\d+)/);m&&se(k=>({...k,deliveryDeadline:m[1]}))}}},[D.status,on,C]),dR(()=>{Ws&&Ks(!1),Xe&&sn(!1),Wr&&Kr(!1),Di&&An(!1),Yo&&Gs(!1)}),B.useEffect(()=>{Ws&&i.current&&i.current.focus(),Xe&&o.current&&o.current.focus(),Wr&&c.current&&c.current.focus(),Di&&u.current&&u.current.focus()},[Ws,Xe,Wr,Di]);const _r=B.useMemo(()=>{let f=ye;rt&&(f=f.filter(Q=>Q.status===rt)),pt&&(f=f.filter(Q=>Q.billingType===pt)),pe.length>0&&(f=f.filter(Q=>pe.includes(Q.firestoreId)));const m={};f.forEach(Q=>{m[Q.status]=(m[Q.status]||0)+1,m[`${Q.status}_date`]||(m[`${Q.status}_date`]=Q.statusDate||new Date().toISOString().split("T")[0])});const k=Object.keys(m).filter(Q=>!Q.includes("_date")).map(Q=>({label:Q,value:m[Q],date:m[`${Q}_date`]})),P={};f.forEach(Q=>{P[Q.billingType]=(P[Q.billingType]||0)+1});const $=Object.keys(P).map(Q=>({label:Q,value:P[Q]})).sort((Q,te)=>te.value-Q.value);let W=0,K=0;return f.forEach(Q=>{W+=Se(Q.costThirdPartyShipping)+Se(Q.costParts),K+=Se(Q.costClientShipping)}),{count:f.length,statusChartData:k,billingChartData:$,totalInternalCosts:W,totalClientFreight:K,isFiltered:pe.length>0||rt||pt}},[ye,pe,rt,pt]),Gl=f=>{const m=new Date().getFullYear(),k=f.filter(W=>{if(!W.osNumber)return!1;const[K,Q]=W.osNumber.split("/");return Q&&parseInt(Q)===m});let P=0;k.forEach(W=>{if(W.osNumber){const[K]=W.osNumber.split("/"),Q=parseInt(K);Q>P&&(P=Q)}});let $;return m===2026?$=Math.max(P+1,32):$=P+1,`${String($).padStart(4,"0")}/${m}`},Zs=(f=null)=>{if(ln(""),Qr(""),Hn(""),nt(""),vr(""),tt(!1),Bs(!1),Cn(!1),Vt(!1),fr(!1),Hr(!1),Hs(!1),pr(!1),Yr({client:!1,item:!1,defect:!1,solution:!1,notRepairableDetail:!1,solutionsList:!1,benchRepairList:!1}),f){Xo(f);let m="";if(f.deliveryDeadline){const k=f.deliveryDeadline.match(/^(\d+)/);k&&(m=k[1])}se({...f,equipmentObservation:f.equipmentObservation||"",quantity:f.quantity||"1",solutionsList:f.solutionsList||[],defectsList:f.defectsList||(f.defect?[f.defect]:[]),manualSolutionsList:f.manualSolutionsList||[],benchRepairList:f.benchRepairList||[],statusDate:f.statusDate||new Date().toISOString().split("T")[0],statusHistory:f.statusHistory||[],deliveryDeadline:m,discount5Days:f.discount5Days||!1,discountAmount:f.discountAmount||0,finalChargedAmount:f.finalChargedAmount||Se(f.chargedAmount),photos:f.photos||[]})}else Xo(null),se({client:"",cnpj:"",contactPerson:"",address:"",email:"",billingType:"Avulso",maintenanceVisit:"",item:"",manufacturer:"",model:"",serial:"",equipmentObservation:"",quantity:"1",defect:"",defectsList:[],solutionType:"Preenchimento manual",solution:"",manualSolutionsList:[],benchRepairList:[],solutionsList:[],notRepairableDetail:"",costThirdPartyName:"",costThirdPartyShipping:"",costClientShipping:"",costParts:"",chargedAmount:"",paymentCondition:"À vista",installments:"",status:"Recebido",statusDate:new Date().toISOString().split("T")[0],statusHistory:[],trackingCode:"",sentToThirdParty:"Não",thirdPartyInfo:"",thirdPartyTracking:"",thirdPartyDate:"",osNumber:Gl(ye),deliveryDeadline:"",discount5Days:!1,discountAmount:0,finalChargedAmount:0,photos:[]});Ks(!0)},Rd=f=>{se(m=>({...m,client:f.client,cnpj:f.cnpj,contactPerson:f.contactPerson,email:f.email,address:f.address})),Bs(!1)},ns=()=>{if(!Qs.trim()){he("Descrição do defeito é obrigatória","error");return}Cn(!1);const f=Qs.split(`
`).map(m=>m.trim().replace(/([a-zà-ú])([A-ZÀ-Ú])/g,"$1 $2").replace(/(\s)([A-ZÀ-Ú])/g,"$1$2").trim()).filter(m=>m.length>0);if(f.length===0){he("Descrição do defeito é obrigatória","error");return}se(m=>({...m,defectsList:[...m.defectsList,...f]})),Hn("")},Kn=f=>{se(m=>({...m,defectsList:m.defectsList.filter((k,P)=>P!==f)}))},aa=()=>{if(!Li.trim()){he("Descrição da solução é obrigatória","error");return}Vt(!1);const f=Li.split(`
`).map(m=>m.trim().replace(/([a-zà-ú])([A-ZÀ-Ú])/g,"$1 $2").replace(/(\s)([A-ZÀ-Ú])/g,"$1$2").trim()).filter(m=>m.length>0);if(f.length===0){he("Descrição da solução é obrigatória","error");return}se(m=>({...m,manualSolutionsList:[...m.manualSolutionsList,...f]})),nt("")},Ql=f=>{se(m=>({...m,manualSolutionsList:m.manualSolutionsList.filter((k,P)=>P!==f)}))},la=()=>{if(!Mi.trim()){he("Descrição da etapa do conserto é obrigatória","error");return}const f=Mi.split(`
`).map(m=>m.trim()).filter(m=>m.length>0);if(f.length===0){he("Descrição da etapa do conserto é obrigatória","error");return}se(m=>({...m,benchRepairList:[...m.benchRepairList,...f]})),vr("")},rs=f=>{se(m=>({...m,benchRepairList:m.benchRepairList.filter((k,P)=>P!==f)}))},Pd=()=>{if(!gr.trim()){he("Descrição do item/serviço é obrigatória","error");return}Vt(!1);const f=gr.split(`
`).map(k=>k.trim()).filter(k=>k.length>0);if(f.length===0){he("Descrição do item/serviço é obrigatória","error");return}const m=f.map(k=>({id:Date.now()+Math.random(),text:k,cost:Jo||"0,00"}));se(k=>({...k,solutionsList:[...k.solutionsList,...m]})),ln(""),Qr("")},jd=f=>{se(m=>({...m,solutionsList:m.solutionsList.filter(k=>k.id!==f)}))},ca=()=>{const{firestoreId:f,...m}=D;if((!m.quantity||isNaN(parseInt(m.quantity)))&&(m.quantity="1"),m.discount5Days&&m.chargedAmount){const W=Se(m.chargedAmount);m.discountAmount=W*.05,m.finalChargedAmount=W-m.discountAmount}else m.discountAmount=0,m.finalChargedAmount=Se(m.chargedAmount);if(m.defectsList&&Array.isArray(m.defectsList)){const W=cs(m.defectsList).filter(K=>K&&K.trim().length>2);m.defectsList=W,m.defect=W.length>0?W.join(`
`):""}else if(m.defect=m.defect||"",m.defect){const W=cs([m.defect]).filter(K=>K&&K.trim().length>2);m.defectsList=W}else m.defectsList=[];if(m.solutionType==="Preenchimento manual")if(m.manualSolutionsList&&Array.isArray(m.manualSolutionsList)){const W=cs(m.manualSolutionsList).filter(K=>K&&K.trim().length>2);m.manualSolutionsList=W,m.solution=W.length>0?W.join(`
`):""}else m.manualSolutionsList=[],m.solution=m.solution||"";if(m.solutionType==="Conserto em bancada")if(m.benchRepairList&&Array.isArray(m.benchRepairList)){const W=cs(m.benchRepairList).filter(K=>K&&K.trim().length>2);m.benchRepairList=W,m.solution=W.length>0?W.join(`
`):""}else m.benchRepairList=[],m.solution=m.solution||"";if(m.solutionType==="Manual com custos detalhados")if(m.solutionsList&&Array.isArray(m.solutionsList)){const W=m.solutionsList.map(Q=>({...Q,text:cs([Q.text])[0]||Q.text})).filter(Q=>Q.text&&Q.text.trim().length>2);m.solutionsList=W;const K=W.map(Q=>Q.text);m.solution=K.length>0?K.join(`
`):""}else m.solutionsList=[],m.solution=m.solution||"";if(m.solutionType!=="Preenchimento manual"&&(m.manualSolutionsList=[]),m.solutionType!=="Conserto em bancada"&&(m.benchRepairList=[]),m.solutionType!=="Manual com custos detalhados"&&(m.solutionsList=[]),m.solutionType==="Não passível de conserto, substituir por novo equipamento / material"&&(m.manualSolutionsList=[],m.benchRepairList=[],m.solutionsList=[],m.solution=m.notRepairableDetail||""),m.deliveryDeadline&&m.deliveryDeadline.trim()!==""){const W=m.deliveryDeadline.replace("dias úteis","").trim();W&&!isNaN(W)&&(m.deliveryDeadline=`${W} dias úteis`)}else m.deliveryDeadline="";let k=m.statusHistory?[...m.statusHistory]:[];const P=m.statusDate||new Date().toISOString().split("T")[0],$=k.length>0?k[k.length-1]:null;return!$||$.status!==m.status?k.push({status:m.status,date:P,timestamp:Date.now()}):k[k.length-1].date=P,m.statusHistory=k,m.statusDate=P,m},Gn=async f=>{if(f&&f.preventDefault(),!Bl()){an(!0);try{const k=ca();on?(await uo(Gt(ct,"artifacts",Xn,"public","data","serviceOrders",on.firestoreId),k),he("OS atualizada com sucesso!","success")):(await pv(ja(ct,"artifacts",Xn,"public","data","serviceOrders"),k),he("OS criada com sucesso!","success")),Ks(!1)}catch(k){console.error(k),he(`Erro ao salvar: ${k.message}`,"error")}finally{an(!1)}}},Dd=async()=>{if(!Bl()){an(!0);try{const m=ca();on?await uo(Gt(ct,"artifacts",Xn,"public","data","serviceOrders",on.firestoreId),m):await pv(ja(ct,"artifacts",Xn,"public","data","serviceOrders"),m),he("OS salva e nova em branco criada!","success"),se({...D,osNumber:Gl([...ye,D]),item:"",manufacturer:"",model:"",serial:"",equipmentObservation:"",quantity:"1",defect:"",defectsList:[],solutionType:"Preenchimento manual",solution:"",manualSolutionsList:[],benchRepairList:[],solutionsList:[],notRepairableDetail:"",costThirdPartyName:"",costThirdPartyShipping:"",costClientShipping:"",costParts:"",chargedAmount:"",paymentCondition:"À vista",installments:"",status:"Recebido",statusDate:new Date().toISOString().split("T")[0],statusHistory:[],trackingCode:"",sentToThirdParty:"Não",thirdPartyInfo:"",thirdPartyTracking:"",thirdPartyDate:"",deliveryDeadline:"",discount5Days:!1,discountAmount:0,finalChargedAmount:0,photos:[]}),Xo(null)}catch(m){console.error(m),he(`Erro ao salvar: ${m.message}`,"error")}finally{an(!1)}}},Od=f=>{if(D.status===f){if(D.statusDate){const m=D.statusDate.split("-");return`${m[2]}/${m[1]}`}return"Hoje"}if(D.statusHistory&&D.statusHistory.length>0){const m=[...D.statusHistory].reverse().find(k=>k.status===f);if(m&&m.date){const k=m.date.split("-");return`${k[2]}/${k[1]}`}}return null},wr=es.findIndex(f=>f.value===D.status),Ui=wr===-1?0:wr/(es.length-1)*100,Yl=async()=>{if(pe.length===0){he("Selecione pelo menos uma OS para movimentar","error");return}an(!0);try{const f=pe.map(m=>{const k=ye.find($=>$.firestoreId===m);if(!k)return null;let P=k.statusHistory?[...k.statusHistory]:[];return P.push({status:Jr,date:gn,timestamp:Date.now()}),uo(Gt(ct,"artifacts",Xn,"public","data","serviceOrders",m),{status:Jr,statusDate:gn,statusHistory:P})}).filter(Boolean);await Promise.all(f),he(`${pe.length} OS(s) movida(s) para ${Jr}`,"success"),An(!1),Ft([])}catch(f){console.error(f),he(`Erro ao movimentar OSs: ${f.message}`,"error")}finally{an(!1)}},ss=f=>{const m=ye.filter(W=>pe.includes(W.firestoreId));if(m.length===0){he("Selecione pelo menos uma OS para imprimir","error");return}if((e==null?void 0:e.role)==="client"){is(f);return}if(!m.some(W=>W.status==="Em orçamento"||W.status==="Aguardando aprovação do orçamento")&&f==="client"){is(f);return}const P=m.reduce((W,K)=>{const Q=K.finalChargedAmount?Se(K.finalChargedAmount):Se(K.chargedAmount);return W+Q},0),$=m[0];ea({totalValue:P,paymentCondition:($==null?void 0:$.paymentCondition)||"À vista",installments:($==null?void 0:$.installments)||"",discount5Days:($==null?void 0:$.discount5Days)||!1,finalChargedAmount:P}),Gs(!0)},ei=f=>{const k=ye.filter(P=>pe.includes(P.firestoreId)).map(async P=>{try{await uo(Gt(ct,"artifacts",Xn,"public","data","serviceOrders",P.firestoreId),{paymentCondition:f.paymentCondition,installments:f.installments,discount5Days:f.discount5Days,finalChargedAmount:f.finalChargedAmount})}catch($){console.error("Erro ao atualizar condições de pagamento:",$)}});Promise.all(k).then(()=>{Gs(!1),is("client",f)})},is=(f,m=null)=>{const k=ye.filter(te=>pe.includes(te.firestoreId));if(k.length===0){he("Selecione pelo menos uma OS para imprimir","error");return}const P={};k.forEach(te=>{const Ee=`${te.client}-${te.cnpj||"no-cnpj"}-${te.billingType}-${te.maintenanceVisit||"no-visit"}`;P[Ee]||(P[Ee]={header:{client:te.client,cnpj:te.cnpj,contactPerson:te.contactPerson,email:te.email,address:te.address,billingType:te.billingType,maintenanceVisit:te.maintenanceVisit},items:[]}),P[Ee].items.push(te)});const $=k.some(te=>te.status==="Em orçamento"||te.status==="Aguardando aprovação do orçamento"),W=f==="internal"?"Relatório INTERNO":$?"Proposta de orçamento":"Relatório de atendimento";let K=`
<!DOCTYPE html>
<html>
<head>
    <title>${W}</title>
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
    <div class="content-wrapper">`;Object.values(P).forEach((te,Ee)=>{const Te=Ee===Object.values(P).length-1,Je=te.items.filter(de=>de.status==="Em orçamento"||de.status==="Aguardando aprovação do orçamento"),lt=Je.length>0;let De=0;if(lt&&Je.forEach(de=>{const Dn=m?m.finalChargedAmount/k.length:de.finalChargedAmount?Se(de.finalChargedAmount):Se(de.chargedAmount);De+=Dn}),K+=`
        <div class="report-page ${Te?"last-page":""}">
            <div class="${Te?"last-page-content":"page-content"}">
                <div class="header">
                    <div class="logo-container">
                        <img src="${Ea}" alt="Alfa Tecnologia Hospitalar" onerror="this.style.display='none';">
                    </div>
                    <div class="report-info">
                        ${f==="internal"?'<div class="internal-badge">USO INTERNO - CONFIDENCIAL</div>':""}
                        <div class="report-title">${W}</div>
                        <div style="font-size:11px;color:#666;">Data: ${new Date().toLocaleDateString("pt-BR")}</div>
                    </div>
                </div>
                
                <div class="section">
                    <div class="section-title">Dados do Cliente</div>
                    <div class="client-grid">
                        <div><strong>Cliente:</strong><br>${te.header.client||"---"}</div>
                        <div><strong>CNPJ:</strong><br>${te.header.cnpj||"---"}</div>
                        <div><strong>Atendimento:</strong><br>${te.header.billingType} ${te.header.maintenanceVisit?"- "+te.header.maintenanceVisit:""}</div>
                        <div><strong>Contato:</strong><br>${te.header.contactPerson||"---"}</div>
                        <div><strong>E-mail:</strong><br>${te.header.email||"---"}</div>
                        <div><strong>Endereço:</strong><br>${te.header.address||"---"}</div>
                    </div>
                </div>
                
                ${lt&&f==="client"?`
                <div class="valor-section">
                    <div class="footer-title">VALOR TOTAL DA PROPOSTA</div>
                    <div class="valor-destaque">
                        R$ ${De.toLocaleString("pt-BR",{minimumFractionDigits:2})}
                    </div>
                    <p><strong>Quantidade de itens em orçamento:</strong> ${Je.length}</p>
                    ${m?`<p><strong>Condições de pagamento:</strong> ${m.paymentCondition}${m.installments?` ${m.installments}`:""}</p>`:Je[0]&&Je[0].paymentCondition?`<p><strong>Condições de pagamento:</strong> ${Je[0].paymentCondition}${Je[0].installments?` ${Je[0].installments}`:""}</p>`:""}
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
                        <tbody>`,te.items.forEach(de=>{const Dn=de.defect?de.defect.split(`
`).filter(St=>St.trim()):[],ti=de.solution?de.solution.split(`
`).filter(St=>St.trim()):[],Qn=de.equipmentObservation||"",ni=de.photos||[];(de.solutionsList||[]).reduce((St,gt)=>St+parseFloat(gt.cost.replace(".","").replace(",",".")||0),0);const nc=de.status==="Em orçamento"||de.status==="Aguardando aprovação do orçamento",rc=m?m.finalChargedAmount/k.length:de.finalChargedAmount?Se(de.finalChargedAmount):Se(de.chargedAmount);K+=`
                            <tr>
                                <td>
                                    <span class="os-tag">${de.osNumber||"---"}</span>
                                    <small>${de.status||"---"}</small>
                                    ${nc&&f==="client"?`
                                    <div style="margin-top: 5px; padding: 3px; background: #f0fdf4; border-radius: 4px; text-align: center;">
                                        <div style="font-size: 9px; font-weight: bold; color: #166534;">VALOR</div>
                                        <div style="font-size: 11px; font-weight: 900; color: #166534;">
                                            R$ ${rc.toLocaleString("pt-BR",{minimumFractionDigits:2})}
                                        </div>
                                    </div>
                                    `:""}
                                </td>
                                <td>
                                    <strong>${de.item||"---"}</strong><br>
                                    <div style="font-size:10px;color:#666;margin-bottom:2px;">
                                        ${de.manufacturer||""} ${de.model||""}
                                    </div>
                                    <small>NS: ${de.serial||"N/D"}</small>
                                    ${de.quantity&&parseInt(de.quantity)>1?`<div style="font-size:10px;color:#666;margin-top:2px;"><strong>Quantidade:</strong> ${de.quantity}</div>`:""}
                                </td>
                                <td>
                                    <div style="margin-bottom: 15px;">
                                        <div style="font-weight: bold; font-size: 11px; color: #1e40af; margin-bottom: 5px;">DEFEITO:</div>
                                        ${Dn.length>0?`<ul class="defects-list">${Dn.map(St=>`<li>${St}</li>`).join("")}</ul>`:'<div style="color: #999; font-style: italic;">Sem defeitos registrados</div>'}
                                    </div>
                                    <div>
                                        <div style="font-weight: bold; font-size: 11px; color: #059669; margin-bottom: 5px;">SOLUÇÃO:</div>
                                        ${ti.length>0?`<ul class="solutions-list">${ti.map(St=>`<li>${St}</li>`).join("")}</ul>`:'<div style="color: #999; font-style: italic;">Solução em análise</div>'}
                                    </div>
                                </td>
                                <td class="observation-column">
                                    ${Qn?`
                                    <div style="margin-bottom: 15px;">
                                        <div style="font-weight: bold; font-size: 11px; color: #7c3aed; margin-bottom: 5px;">OBSERVAÇÃO:</div>
                                        <div style="font-size: 11px; line-height: 1.4;">${Qn}</div>
                                    </div>
                                    `:""}
                                    
                                    ${ni.length>0?`
                                    <div>
                                        <div style="font-weight: bold; font-size: 11px; color: #7c3aed; margin-bottom: 5px;">FOTOS:</div>
                                        <div class="photo-grid">
                                            ${ni.slice(0,3).map((St,gt)=>`<div class="photo-item">
                                                        <img src="${St}" alt="Foto ${gt+1}" onerror="this.style.display='none';">
                                                    </div>`).join("")}
                                        </div>
                                        ${ni.length>3?`<div style="font-size: 10px; color: #666; margin-top: 5px;">+ ${ni.length-3} foto(s) adicional(is)</div>`:""}
                                    </div>
                                    `:""}
                                </td>
                            </tr>`}),K+=`
                        </tbody>
                    </table>
                </div>`,f==="client"&&lt){const de=Je[0],Dn=de.deliveryDeadline||"A ser definido após aprovação do orçamento",ti=m?`${m.paymentCondition}${m.installments?` ${m.installments}`:""}`:`${de.paymentCondition||"À vista"}${de.installments?` ${de.installments}`:""}`;K+=`
                <div class="footer-notes page-break-avoid">
                    <div class="footer-title">INFORMAÇÕES IMPORTANTES:</div>
                    <p><strong>• Garantia:</strong> 3 meses. Não está coberto por garantia os danos causados por uso inadequado, queda ou choque mecânico, acondicionamento inadequado e/ou acondicionamento fora dos padrões recomendados pelo fabricante.</p>
                    <p><strong>• Prazo de entrega:</strong> ${Dn}</p>
                    <p><strong>• Valor Total da Proposta:</strong> R$ ${De.toLocaleString("pt-BR",{minimumFractionDigits:2})}</p>
                    <p><strong>• Condições de pagamento:</strong> ${ti}</p>
                </div>`}K+=`
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
        </div>`}),K+=`
    </div>
</body>
</html>`;const Q=window.open("","printWindow","width=800,height=600,scrollbars=yes");if(!Q){he("Permita pop-ups para imprimir o documento","error");return}Q.document.write(K),Q.document.close(),setTimeout(()=>{Q.focus(),Q.print()},500)},zi=f=>{Zr(m=>m===f?null:f),Ys(null)},Me=f=>{Ys(m=>m===f?null:f),Zr(null)},Ld=()=>{Zr(null),Ys(null),Ft([]),z(""),y(""),j(""),oe("")},ua=()=>rt||pt||pe.length>0||O||v||N||X,Xl=()=>{Ue({clientName:"",cnpj:"",address:"",contactPerson:"",email:"",startDate:"",endDate:"",monthlyValue:"",annualValue:"",coveredItems:{videoSurgeryInstruments:!1,openInstruments:!1,videoSurgeryEquipment:!1,endoscopes:!1},observations:""}),Qo(!0),sn(!0)},Jl=f=>{Ue(f),Qo(!1),sn(!0)},Zl=async f=>{if(f.preventDefault(),!fe.clientName.trim()){he("Nome do cliente é obrigatório","error");return}an(!0);try{const m=fe.clientName.replace(/\s+/g,"_").toLowerCase();await qf(Gt(ct,"artifacts",Xn,"public","data","contracts",m),fe),he("Contrato salvo com sucesso!","success"),sn(!1)}catch(m){console.error("Erro ao salvar contrato",m),he("Erro ao salvar contrato: "+m.message,"error")}finally{an(!1)}},$i=f=>{Oi(f),Kr(!0)},ec=async()=>{if(qn)try{if(qn.photos&&qn.photos.length>0){const f=qn.photos.map(async m=>{var k;try{const P=(k=m.split("/o/")[1])==null?void 0:k.split("?")[0];if(P){const $=decodeURIComponent(P),W=NA(PA,$);await IA(W)}}catch(P){console.error("Erro ao remover foto:",P)}});await Promise.all(f)}await s1(Gt(ct,"artifacts",Xn,"public","data","serviceOrders",qn.firestoreId)),he("OS excluída com sucesso!","success"),Kr(!1),Oi(null)}catch(f){he("Erro ao excluir: "+f.message,"error")}},jn=async()=>{try{localStorage.removeItem("adminRestoreToken"),localStorage.removeItem("adminEmail"),await s(),window.location.href="/",setTimeout(()=>{window.location.reload()},100)}catch(f){console.error("Erro ao fazer logout:",f),window.location.reload()}},da=f=>{const m=ca(),k=m.status==="Em orçamento"||m.status==="Aguardando aprovação do orçamento",P=f==="internal"?"Relatório INTERNO":k?"Proposta de orçamento":"Relatório de atendimento",$=`${m.paymentCondition}${m.installments?` ${m.installments}`:""}`,W=m.finalChargedAmount>0?Se(m.finalChargedAmount):Se(m.chargedAmount);let K="";if(m.discount5Days&&m.chargedAmount){const De=Se(m.chargedAmount),de=De*.05,Dn=De-de;K=`
        <div style="margin-top: 10px; padding: 8px; background: #f0fdf4; border-radius: 6px; border: 1px solid #bbf7d0;">
            <div style="font-size: 9px; font-weight: bold; color: #166534; margin-bottom: 3px;">DESCONTO APLICADO</div>
            <div style="display: flex; justify-content: space-between; font-size: 10px;">
                <span>Valor Original:</span>
                <span>R$ ${De.toLocaleString("pt-BR",{minimumFractionDigits:2})}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 10px;">
                <span>Desconto (5%):</span>
                <span style="color: #dc2626;">- R$ ${de.toLocaleString("pt-BR",{minimumFractionDigits:2})}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: bold; margin-top: 3px; border-top: 1px dashed #86efac; padding-top: 3px;">
                <span>VALOR FINAL:</span>
                <span style="color: #166534;">R$ ${Dn.toLocaleString("pt-BR",{minimumFractionDigits:2})}</span>
            </div>
        </div>
    `}const Q=m.defect?m.defect.split(`
`).filter(De=>De.trim()):[],te=m.solution?m.solution.split(`
`).filter(De=>De.trim()):[],Ee=m.equipmentObservation||"",Te=m.photos||[];let Je=`
<!DOCTYPE html>
<html>
<head>
    <title>${P}</title>
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
                    <img src="${Ea}" alt="Alfa Tecnologia Hospitalar" onerror="this.style.display='none';">
                </div>
                <div class="report-info">
                    ${f==="internal"?'<div class="internal-badge">USO INTERNO - CONFIDENCIAL</div>':""}
                    <div class="report-title">${P}</div>
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
                    R$ ${W.toLocaleString("pt-BR",{minimumFractionDigits:2})}
                </div>
                <p><strong>Condições de pagamento:</strong> ${$}</p>
                ${K}
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
                        ${Q.length>0?`<ul class="defects-list">${Q.map(De=>`<li>${De}</li>`).join("")}</ul>`:'<div style="color: #999; font-style: italic;">Sem defeitos registrados</div>'}
                    </div>
                    
                    <div class="solutions-section">
                        <div style="font-weight: bold; font-size: 12px; color: #059669; margin-bottom: 10px;">SOLUÇÃO APLICADA</div>
                        ${te.length>0?`<ul class="solutions-list">${te.map(De=>`<li>${De}</li>`).join("")}</ul>`:'<div style="color: #999; font-style: italic;">Solução em análise</div>'}
                    </div>
                </div>
                
                ${Ee||Te.length>0?`
                <div class="observation-section">
                    ${Ee?`
                    <div style="margin-bottom: ${Te.length>0?"15px":"0"};">
                        <div style="font-weight: bold; font-size: 11px; color: #7c3aed; margin-bottom: 5px;">OBSERVAÇÕES:</div>
                        <div style="font-size: 11px; line-height: 1.4;">${Ee}</div>
                    </div>
                    `:""}
                    
                    ${Te.length>0?`
                    <div>
                        <div style="font-weight: bold; font-size: 11px; color: #7c3aed; margin-bottom: 5px;">FOTOS:</div>
                        <div class="photo-grid">
                            ${Te.slice(0,3).map((De,de)=>`<div class="photo-item">
                                        <img src="${De}" alt="Foto ${de+1}" onerror="this.style.display='none';">
                                    </div>`).join("")}
                        </div>
                        ${Te.length>3?`<div style="font-size: 10px; color: #666; margin-top: 5px;">+ ${Te.length-3} foto(s) adicional(is)</div>`:""}
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
</html>`;const lt=window.open("","printWindow","width=800,height=600,scrollbars=yes");if(!lt){he("Permita pop-ups para imprimir o documento","error");return}lt.document.write(Je),lt.document.close(),setTimeout(()=>{lt.focus(),lt.print()},500)},tc=()=>{if(pe.length===0){he("Selecione pelo menos uma OS para exportar","error");return}if((e==null?void 0:e.role)==="client"){he("Clientes não têm permissão para exportar documentos Word","error");return}const f=ye.filter(m=>pe.includes(m.firestoreId));try{an(!0);const m={};f.forEach($=>{const W=`${$.client}-${$.cnpj||"no-cnpj"}-${$.billingType}-${$.maintenanceVisit||"no-visit"}`;m[W]||(m[W]={header:{client:$.client,cnpj:$.cnpj,contactPerson:$.contactPerson,email:$.email,address:$.address,billingType:$.billingType,maintenanceVisit:$.maintenanceVisit},items:[]}),m[W].items.push($)});let k=`
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
<body>`;Object.values(m).forEach(($,W)=>{k+=`
    <div style="text-align: center; margin-bottom: 30px;">
        <img src="${Ea}" alt="Logo" style="height: 60px; margin-bottom: 10px;">
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
        <tbody>`,$.items.forEach(K=>{const Q=K.defect?K.defect.split(`
`).filter(Te=>Te.trim()):[],te=K.solution?K.solution.split(`
`).filter(Te=>Te.trim()):[],Ee=K.photos||[];k+=`
            <tr>
                <td>
                    <div class="os-number">${K.osNumber||"---"}</div>
                    <div class="status">${K.status||"---"}</div>
                </td>
                <td>
                    <div class="equipment-name">${K.item||"---"}</div>
                    <div class="equipment-details">${K.manufacturer||""} ${K.model||""}</div>
                    <div class="serial">NS: ${K.serial||"N/D"}</div>
                    ${K.quantity&&parseInt(K.quantity)>1?`<div class="quantity" style="font-size:9px;color:#666;margin-top:2px;"><strong>Quantidade:</strong> ${K.quantity}</div>`:""}
                </td>
                <td>
                    <div><strong>Defeito:</strong></div>
                    ${Q.length>0?`<ul style="margin: 5px 0; padding-left: 20px;">${Q.map(Te=>`<li>${Te}</li>`).join("")}</ul>`:'<div style="color: #999; font-style: italic;">Sem defeitos registrados</div>'}
                    <div style="margin-top: 10px;"><strong>Solução:</strong></div>
                    ${te.length>0?`<ul style="margin: 5px 0; padding-left: 20px;">${te.map(Te=>`<li>${Te}</li>`).join("")}</ul>`:'<div style="color: #999; font-style: italic;">Solução em análise</div>'}
                </td>
                <td>
                    ${K.equipmentObservation?`
                    <div><strong>Observações:</strong> ${K.equipmentObservation}</div>
                    `:""}
                    
                    ${Ee.length>0?`
                    <div style="margin-top: 10px;"><strong>Fotos:</strong></div>
                    <div class="photo-grid">
                        ${Ee.slice(0,3).map(Te=>`<div class="photo-item">
                                <img src="${Te}" alt="Foto" onerror="this.style.display='none';">
                            </div>`).join("")}
                    </div>
                    ${Ee.length>3?`<div style="font-size: 9px; color: #666; margin-top: 5px;">+ ${Ee.length-3} foto(s) adicional(is)</div>`:""}
                    `:""}
                </td>
            </tr>`}),k+=`
        </tbody>
    </table>
    
    <div class="footer">
        <p><strong>Alfa Tecnologia Hospitalar</strong> - CNPJ: 50.993.453/0001-34</p>
        <p>(55) 9 9137-9413 - alfa.manutencaosm@gmail.com</p>
        <p>Endereço: Travessa Moreira, 125 - CEP: 97070-540 - Bairro: Duque de Caxias, Santa Maria/ RS</p>
    </div>`,W<Object.values(m).length-1&&(k+='<div class="page-break"></div>')}),k+=`
</body>
</html>`;const P=new Blob([k],{type:"application/msword;charset=utf-8"});cR.saveAs(P,`relatorio_os_${new Date().toISOString().split("T")[0]}.doc`),he("Documento Word gerado com sucesso!","success")}catch(m){console.error("Erro ao gerar documento Word:",m),he("Erro ao gerar documento Word: "+m.message,"error")}finally{an(!1)}};return n?l.jsx("div",{className:"min-h-screen bg-slate-50 flex items-center justify-center",children:l.jsxs("div",{className:"text-center",children:[l.jsx(Yi,{className:"animate-spin mx-auto text-blue-600 mb-4",size:40}),l.jsx("p",{className:"text-slate-600 font-medium",children:"Verificando autenticação..."})]})}):t?Pn()?l.jsxs("div",{className:"flex min-h-screen bg-slate-50 font-sans overflow-hidden",children:[l.jsx("button",{onClick:()=>x(!w),className:"lg:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-xl shadow-lg",children:l.jsx(QA,{size:24})}),l.jsxs("aside",{className:`
        ${w?"translate-x-0":"-translate-x-full lg:translate-x-0"} 
        fixed lg:relative z-40 lg:z-auto
        ${w?"w-64":"lg:w-20 w-64"} 
        bg-slate-900 text-white transition-all duration-300 flex flex-col h-screen shadow-2xl lg:shadow-none
    `,children:[l.jsx("div",{className:`flex items-center border-b border-slate-800 ${w?"h-32 p-4":"h-20 justify-center p-4"}`,children:w?l.jsx("div",{className:"w-full h-full flex items-center justify-center",children:l.jsx("div",{className:"w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center",children:l.jsx("img",{src:Ea,alt:"Logo Alfa Tecnologia Hospitalar",className:"h-20 object-contain"})})}):l.jsx("div",{className:"bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full shadow-lg flex items-center justify-center w-12 h-12",children:l.jsx("img",{src:Ea,alt:"Logo Alfa",className:"w-10 h-10 object-contain"})})}),l.jsx("nav",{className:"flex-1 p-3 space-y-1",children:(e==null?void 0:e.role)==="client"?l.jsxs(l.Fragment,{children:[l.jsx(Jn,{icon:l.jsx(Nv,{size:w?20:22}),label:"Painel de OS",active:M==="os",onClick:()=>V("os"),isSidebarOpen:w}),l.jsx(Jn,{icon:l.jsx(Th,{size:w?20:22}),label:"Painel de Status",active:M==="status",onClick:()=>V("status"),isSidebarOpen:w})]}):l.jsxs(l.Fragment,{children:[l.jsx(Jn,{icon:l.jsx(Nv,{size:w?20:22}),label:"Painel de OS",active:M==="os",onClick:()=>V("os"),isSidebarOpen:w}),l.jsx(Jn,{icon:l.jsx(Th,{size:w?20:22}),label:"Painel de Status",active:M==="status",onClick:()=>V("status"),isSidebarOpen:w}),l.jsx(Jn,{icon:l.jsx(Kf,{size:w?20:22}),label:"Financeiro",active:M==="financial",onClick:()=>V("financial"),isSidebarOpen:w}),l.jsx(Jn,{icon:l.jsx(Ev,{size:w?20:22}),label:"Contratos",active:M==="contracts",onClick:()=>V("contracts"),isSidebarOpen:w}),l.jsx(Jn,{icon:l.jsx(_v,{size:w?20:22}),label:"Inventário",active:M==="inventory",onClick:()=>V("inventory"),isSidebarOpen:w}),l.jsx(Jn,{icon:l.jsx(Nh,{size:w?20:22}),label:"Clientes",active:M==="clients",onClick:()=>V("clients"),isSidebarOpen:w}),r("canManageUsers")&&l.jsx(Jn,{icon:l.jsx(Nd,{size:w?20:22}),label:"Usuários",active:M==="users",onClick:()=>V("users"),isSidebarOpen:w}),l.jsx("div",{className:"pt-2 border-t border-slate-800 mt-2",children:l.jsx(Jn,{icon:l.jsx(ho,{size:w?20:22}),label:"Sobre",active:M==="about",onClick:()=>V("about"),isSidebarOpen:w})})]})}),l.jsx("div",{className:"flex flex-col border-t border-slate-800",children:l.jsxs("div",{className:"flex items-center justify-between p-4",children:[l.jsx("button",{onClick:()=>x(!w),className:"text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-slate-800 lg:flex hidden",title:w?"Recolher Sidebar":"Expandir Sidebar",children:l.jsx(qA,{className:`transition-transform duration-300 ${w?"rotate-180":""}`,size:20})}),l.jsx("button",{onClick:jn,className:"text-red-400 hover:text-red-500 transition-colors p-1 rounded-lg hover:bg-slate-800",title:"Sair",children:l.jsx(GA,{size:20})})]})})]}),w&&l.jsx("div",{className:"lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30",onClick:()=>x(!1)}),l.jsxs("main",{className:"flex-1 p-4 md:p-8 overflow-y-auto h-screen",children:[M==="os"&&Pn()&&l.jsxs("div",{className:"space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto",children:[l.jsxs("div",{className:"flex flex-col",children:[l.jsx("h2",{className:"text-3xl font-black text-slate-900 tracking-tighter",children:"Gestão de OS"}),l.jsx("p",{className:"text-slate-500 text-sm font-medium",children:"Fluxo operacional hospitalar"})]}),pe.length>0&&l.jsxs("div",{className:"bg-white rounded-2xl shadow-xl border border-slate-100 p-6",children:[l.jsxs("div",{className:"flex justify-between items-center mb-4",children:[l.jsxs("h3",{className:"text-lg font-black text-slate-800",children:["Ações para ",pe.length," OS(s) selecionada(s):"]}),l.jsxs("button",{onClick:()=>Ft([]),className:"text-sm text-red-600 hover:text-red-700 font-bold flex items-center gap-2",children:[l.jsx(Ge,{size:16})," Limpar seleção"]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[(e==null?void 0:e.role)!=="client"&&l.jsxs("button",{onClick:()=>An(!0),className:"bg-green-600 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-green-700 transition-colors h-24",children:[l.jsx(Eh,{size:20}),l.jsx("span",{className:"text-sm",children:"Movimentar OS"})]}),l.jsxs("button",{onClick:()=>ss("client"),className:"bg-indigo-600 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-indigo-700 transition-colors h-24",children:[l.jsx(Ih,{size:20}),l.jsx("span",{className:"text-sm",children:"Imprimir Cliente"})]}),(e==null?void 0:e.role)!=="client"&&l.jsxs(l.Fragment,{children:[l.jsxs("button",{onClick:()=>is("internal"),className:"bg-slate-800 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-slate-900 transition-colors h-24",children:[l.jsx(Cc,{size:20}),l.jsx("span",{className:"text-sm",children:"Imprimir Interno"})]}),l.jsxs("button",{onClick:tc,className:"bg-emerald-600 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-emerald-700 transition-colors h-24",children:[l.jsx(Tv,{size:20}),l.jsx("span",{className:"text-sm",children:"Exportar para Word"})]})]})]})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[l.jsxs("div",{className:"relative group z-20 flex-1",ref:d,children:[l.jsx(Qf,{className:"absolute left-5 top-5 text-slate-400 group-focus-within:text-blue-600 transition-colors",size:24}),l.jsx("input",{className:"w-full pl-14 pr-6 py-5 rounded-2xl border-none shadow-xl shadow-slate-200/50 focus:ring-4 focus:ring-blue-500/10 text-lg font-medium outline-none bg-white relative z-10",placeholder:"Pesquise por cliente, OS, equipamento, marca, modelo ou NS...",value:X,onChange:f=>{f.target.value.toLowerCase().trim(),oe(f.target.value),f.target.value.trim()?E(!0):E(!1)},onFocus:()=>{X.trim()&&E(!0)}}),I&&X&&l.jsx("div",{className:"absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in slide-in-from-top-2 z-50 max-h-96 overflow-y-auto",children:(()=>{const f=X.toLowerCase().trim(),m=ye.filter(P=>P.client&&P.client.toLowerCase().trim().includes(f)||P.osNumber&&P.osNumber.includes(X)||P.item&&P.item.toLowerCase().trim().includes(f)||P.manufacturer&&P.manufacturer.toLowerCase().trim().includes(f)||P.model&&P.model.toLowerCase().trim().includes(f)||P.serial&&P.serial.toLowerCase().trim().includes(f)),k=m.slice(0,20);return l.jsxs(l.Fragment,{children:[k.map(P=>l.jsxs("div",{onClick:()=>{Zs(P),oe(""),E(!1)},className:"p-4 border-b border-slate-50 hover:bg-blue-50 cursor-pointer flex justify-between items-center group/item transition-colors",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"font-bold text-slate-800 flex items-center gap-2",children:[P.client,l.jsx("span",{className:"text-[10px] bg-slate-100 text-slate-500 px-2 rounded-full uppercase",children:P.status})]}),l.jsxs("div",{className:"text-xs text-slate-500 mt-1",children:[l.jsx("span",{className:"font-mono text-blue-600 font-bold",children:P.osNumber})," - ",P.item,(P.manufacturer||P.model||P.serial)&&l.jsxs("div",{className:"text-[10px] text-slate-400 mt-1",children:[P.manufacturer&&`Marca: ${P.manufacturer} `,P.model&&`| Modelo: ${P.model} `,P.serial&&`| NS: ${P.serial}`]})]})]}),l.jsxs("div",{className:"text-xs font-bold text-blue-600 opacity-0 group-hover/item:opacity-100 flex items-center gap-1 transition-all",children:["Abrir ",l.jsx(kc,{size:14})]})]},P.firestoreId)),m.length===0&&l.jsx("div",{className:"p-6 text-center text-slate-400 text-sm font-medium",children:"Nenhum resultado encontrado."}),m.length>20&&l.jsxs("div",{className:"p-4 text-center text-xs text-slate-500 bg-slate-50 border-t border-slate-100",children:["Mostrando 20 de ",m.length," resultados. Digite mais para refinar a busca."]})]})})()})]}),l.jsxs("div",{className:"flex gap-2",children:[l.jsxs("div",{className:"relative",children:[l.jsxs("button",{onClick:()=>Wt(!rn),className:`p-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-colors ${rn?"bg-blue-600 text-white shadow-xl shadow-blue-200":"bg-white text-slate-600 shadow-xl shadow-slate-200/50 hover:bg-slate-50"}`,title:"Seleção por intervalo",children:[l.jsx(WA,{size:24}),l.jsx("span",{className:"hidden sm:inline",children:"Intervalo"})]}),rn&&l.jsx("div",{className:"absolute top-full right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 w-80 animate-in slide-in-from-top-2 z-50",children:l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("h4",{className:"text-sm font-bold text-slate-700",children:"Seleção por Intervalo"}),l.jsx("button",{onClick:()=>Wt(!1),className:"text-slate-400 hover:text-slate-600",children:l.jsx(Ge,{size:16})})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("div",{className:"text-xs text-slate-500 font-medium",children:"Digite o intervalo de números de OS:"}),l.jsx("input",{type:"text",placeholder:"Ex: 10-20 ou 10,20,30 ou apenas 10",className:"w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20",value:Ne,onChange:f=>nn(f.target.value),onKeyDown:f=>{f.key==="Enter"&&ra()},autoFocus:!0}),l.jsxs("div",{className:"text-[10px] text-slate-400 space-y-1",children:[l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx(Qi,{size:10})," Formato: 10-20 (intervalo)"]}),l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx(Qi,{size:10})," Formato: 10,20,30 (lista)"]}),l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx(Qi,{size:10})," Formato: 10 (única)"]})]})]}),l.jsxs("div",{className:"flex gap-2 pt-2",children:[l.jsxs("button",{onClick:ra,className:"flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2",children:[l.jsx(Qi,{size:16})," Aplicar"]}),l.jsx("button",{onClick:()=>{nn(""),Wt(!1)},className:"px-4 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors",children:"Cancelar"})]})]})})]}),l.jsx("button",{onClick:()=>Ie(f=>f==="desc"?"asc":"desc"),className:"bg-white p-5 rounded-2xl shadow-xl shadow-slate-200/50 border-none hover:bg-slate-50 transition-colors text-slate-600",title:Ae==="desc"?"Mais Recentes Primeiro":"Mais Antigos Primeiro",children:Ae==="desc"?l.jsx(LA,{size:24}):l.jsx(MA,{size:24})}),pe.length===0&&r("canEditOS")&&l.jsxs("button",{onClick:()=>Zs(),className:"bg-blue-600 text-white px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-colors min-w-[200px]",children:[l.jsx(Tr,{size:24})," Abrir Nova OS"]})]})]}),l.jsx("div",{className:"bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden overflow-x-auto relative z-0",children:l.jsx("div",{className:"overflow-x-auto",children:l.jsxs("table",{className:"w-full text-left min-w-[800px]",children:[l.jsx("thead",{className:"bg-slate-50/50 border-b text-[10px] font-black uppercase text-slate-400 tracking-widest",children:l.jsxs("tr",{children:[l.jsx("th",{className:"px-6 py-6 text-center w-12",children:l.jsx("input",{type:"checkbox",className:"w-4 h-4 rounded border-slate-300 text-blue-600",onChange:f=>{const m=Rn.filter(k=>{const P=X.toLowerCase().trim();return k.client&&k.client.toLowerCase().trim().includes(P)||k.osNumber&&k.osNumber.includes(X)||k.item&&k.item.toLowerCase().trim().includes(P)||k.manufacturer&&k.manufacturer.toLowerCase().trim().includes(P)||k.model&&k.model.toLowerCase().trim().includes(P)||k.serial&&k.serial.toLowerCase().trim().includes(P)});if(f.target.checked)Ft(m.map(k=>k.firestoreId));else{const k=m.map(P=>P.firestoreId);Ft(P=>P.filter($=>!k.includes($)))}},checked:Rn.filter(f=>{var m,k;return((m=f.client)==null?void 0:m.toLowerCase().includes(X.toLowerCase()))||((k=f.osNumber)==null?void 0:k.includes(X))}).every(f=>pe.includes(f.firestoreId))&&Rn.filter(f=>{var m,k;return((m=f.client)==null?void 0:m.toLowerCase().includes(X.toLowerCase()))||((k=f.osNumber)==null?void 0:k.includes(X))}).length>0})}),l.jsx("th",{className:"px-8 py-6",children:"Identificação"}),l.jsx("th",{className:"px-8 py-6",children:"Equipamento"}),l.jsx("th",{className:"px-8 py-6",children:"Tipo"}),l.jsx("th",{className:"px-8 py-6",children:"Status"}),l.jsx("th",{className:"px-8 py-6 text-right",children:"Ações"})]})}),l.jsx("tbody",{className:"divide-y divide-slate-50",children:Sn?l.jsx("tr",{children:l.jsx("td",{colSpan:"6",className:"p-20 text-center",children:l.jsx(Yi,{className:"animate-spin mx-auto text-blue-600",size:32})})}):Rn.filter(f=>{var te,Ee,Te,Je,lt,De;const m=X.toLowerCase().trim(),k=(te=f.client)==null?void 0:te.toLowerCase().includes(m),P=(Ee=f.osNumber)==null?void 0:Ee.includes(X),$=(Te=f.item)==null?void 0:Te.toLowerCase().includes(m),W=(Je=f.manufacturer)==null?void 0:Je.toLowerCase().includes(m),K=(lt=f.model)==null?void 0:lt.toLowerCase().includes(m),Q=(De=f.serial)==null?void 0:De.toLowerCase().includes(m);return k||P||$||W||K||Q}).map(f=>l.jsxs("tr",{className:`hover:bg-blue-50/30 transition-colors group ${pe.includes(f.firestoreId)?"bg-blue-50/50":""}`,children:[l.jsx("td",{className:"px-6 py-4 text-center",children:l.jsx("input",{type:"checkbox",className:"w-4 h-4 rounded border-slate-300 text-blue-600",checked:pe.includes(f.firestoreId),onChange:()=>{Ft(m=>m.includes(f.firestoreId)?m.filter(k=>k!==f.firestoreId):[...m,f.firestoreId])}})}),l.jsxs("td",{className:"px-8 py-6",children:[l.jsx("div",{className:"font-black text-blue-700 text-lg",children:f.osNumber}),l.jsx("div",{className:"font-bold text-slate-900 text-sm",children:f.client})]}),l.jsxs("td",{className:"px-8 py-6",children:[l.jsx("div",{className:"font-bold text-slate-900 text-sm",children:f.item}),(f.manufacturer||f.model)&&l.jsxs("div",{className:"text-xs text-slate-500 font-medium mb-0.5",children:[f.manufacturer||""," ",f.model||""]}),l.jsxs("div",{className:"text-[10px] text-slate-400 font-mono",children:["NS: ",f.serial||"N/D"]}),f.quantity&&parseInt(f.quantity)>1&&l.jsxs("div",{className:"text-[10px] text-blue-600 font-bold mt-0.5",children:["Quantidade: ",f.quantity]})]}),l.jsx("td",{className:"px-8 py-6",children:l.jsx("div",{className:"text-xs font-bold text-slate-500 uppercase tracking-tighter",children:f.billingType})}),l.jsxs("td",{className:"px-8 py-6",children:[l.jsx("div",{className:"px-4 py-2 rounded-xl text-[10px] font-black uppercase inline-block border bg-slate-100 text-slate-600",children:f.status}),l.jsx("div",{className:"text-[9px] text-slate-400 mt-1 font-medium",children:f.statusDate?new Date(f.statusDate).toLocaleDateString("pt-BR"):"Sem data"})]}),l.jsx("td",{className:"px-8 py-6 text-right",children:l.jsxs("div",{className:"flex justify-end gap-2",children:[(e==null?void 0:e.role)!=="client"&&l.jsx("button",{onClick:()=>Zs(f),className:"p-3 bg-white border shadow-sm hover:bg-blue-600 hover:text-white rounded-xl transition-all",title:"Editar OS",children:l.jsx(JA,{size:18})}),(e==null?void 0:e.role)!=="client"&&r("canDeleteOS")&&l.jsx("button",{onClick:()=>$i(f),className:"p-3 bg-white border shadow-sm hover:bg-red-600 hover:text-white rounded-xl transition-all",title:"Excluir OS",children:l.jsx(_l,{size:18})})]})})]},f.firestoreId))})]})})})]}),M==="status"&&Pn()&&l.jsxs("div",{className:"space-y-6 animate-in fade-in duration-500 max-w-7xl mx-auto h-full flex flex-col",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 shrink-0",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter",children:"Indicadores"}),l.jsx("p",{className:"text-slate-500 font-medium",children:ua()?`Visualizando métricas filtradas (${_r.count} ordens)`:`Visualizando métricas gerais de todas as ordens (${_r.count})`})]}),ua()&&l.jsxs("button",{onClick:Ld,className:"text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-2",children:[l.jsx(Ge,{size:16})," Limpar todos os filtros"]})]}),pe.length>0&&l.jsxs("div",{className:"bg-white rounded-2xl shadow-xl border border-slate-100 p-6 animate-in slide-in-from-top-4",children:[l.jsxs("div",{className:"flex justify-between items-center mb-4",children:[l.jsxs("h3",{className:"text-lg font-black text-slate-800",children:["Ações para ",pe.length," OS(s) selecionada(s):"]}),l.jsxs("button",{onClick:()=>Ft([]),className:"text-sm text-red-600 hover:text-red-700 font-bold flex items-center gap-2",children:[l.jsx(Ge,{size:16})," Limpar seleção"]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[(e==null?void 0:e.role)!=="client"&&l.jsxs("button",{onClick:()=>An(!0),className:"bg-green-600 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-green-700 transition-colors h-24",children:[l.jsx(Eh,{size:20}),l.jsx("span",{className:"text-sm",children:"Movimentar OS"})]}),l.jsxs("button",{onClick:()=>ss("client"),className:"bg-indigo-600 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-indigo-700 transition-colors h-24",children:[l.jsx(Ih,{size:20}),l.jsx("span",{className:"text-sm",children:"Imprimir Cliente"})]}),(e==null?void 0:e.role)!=="client"&&l.jsxs(l.Fragment,{children:[l.jsxs("button",{onClick:()=>is("internal"),className:"bg-slate-800 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-slate-900 transition-colors h-24",children:[l.jsx(Cc,{size:20}),l.jsx("span",{className:"text-sm",children:"Imprimir Interno"})]}),l.jsxs("button",{onClick:tc,className:"bg-emerald-600 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-emerald-700 transition-colors h-24",children:[l.jsx(Tv,{size:20}),l.jsx("span",{className:"text-sm",children:"Exportar para Word"})]})]})]})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100",children:[l.jsxs("div",{className:"text-sm font-bold text-slate-700 flex items-center gap-2",children:[l.jsx(HA,{size:16})," Filtrar por Data:"]}),l.jsxs("div",{className:"flex flex-wrap gap-3",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("label",{className:"text-xs font-bold text-slate-500",children:"Dia:"}),l.jsxs("select",{className:"bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 outline-none",value:O,onChange:f=>z(f.target.value),children:[l.jsx("option",{value:"",children:"Todos"}),Array.from({length:31},(f,m)=>m+1).map(f=>l.jsx("option",{value:f,children:f},f))]})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("label",{className:"text-xs font-bold text-slate-500",children:"Mês:"}),l.jsxs("select",{className:"bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 outline-none",value:v,onChange:f=>y(f.target.value),children:[l.jsx("option",{value:"",children:"Todos"}),fo.map((f,m)=>l.jsx("option",{value:m+1,children:f},m))]})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("label",{className:"text-xs font-bold text-slate-500",children:"Ano:"}),l.jsxs("select",{className:"bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 outline-none",value:N,onChange:f=>j(f.target.value),children:[l.jsx("option",{value:"",children:"Todos"}),Array.from(new Set(ye.map(f=>(f.statusDate?new Date(f.statusDate):new Date).getFullYear()))).sort((f,m)=>m-f).map(f=>l.jsx("option",{value:f,children:f},f))]})]}),(O||v||N)&&l.jsxs("button",{onClick:()=>{z(""),y(""),j("")},className:"text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1",children:[l.jsx(Ge,{size:12})," Limpar data"]})]})]}),l.jsxs("div",{className:"flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0",children:[l.jsxs("div",{className:"lg:col-span-4 bg-white rounded-[2rem] shadow-xl border border-slate-100 flex flex-col overflow-hidden max-h-[calc(100vh-250px)]",children:[l.jsxs("div",{className:"p-6 border-b border-slate-100 bg-slate-50/50",children:[l.jsxs("div",{className:`relative group mb-3 ${w?"lg:z-10":"z-30"}`,ref:g,children:[l.jsx(Qf,{className:"absolute left-4 top-3.5 text-slate-400 group-focus-within:text-blue-600 transition-colors",size:18}),l.jsx("input",{className:"w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 shadow-sm focus:ring-2 focus:ring-blue-500/20 text-sm font-bold outline-none bg-white relative",placeholder:"Buscar OS por cliente, equipamento, marca, modelo ou NS...",value:X,onChange:f=>{f.target.value.toLowerCase().trim(),oe(f.target.value),f.target.value.trim()?F(!0):F(!1)},onFocus:()=>{X.trim()&&F(!0)}}),R&&X&&l.jsx("div",{className:"absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden animate-in slide-in-from-top-2 max-h-96 overflow-y-auto",children:(()=>{const f=X.toLowerCase().trim(),m=ye.filter(P=>P.client&&P.client.toLowerCase().trim().includes(f)||P.osNumber&&P.osNumber.includes(X)||P.item&&P.item.toLowerCase().trim().includes(f)||P.manufacturer&&P.manufacturer.toLowerCase().trim().includes(f)||P.model&&P.model.toLowerCase().trim().includes(f)||P.serial&&P.serial.toLowerCase().trim().includes(f)),k=m.slice(0,20);return l.jsxs(l.Fragment,{children:[k.map(P=>l.jsxs("div",{onClick:()=>{Zs(P),oe(""),F(!1)},className:"p-3 border-b border-slate-50 hover:bg-blue-50 cursor-pointer flex justify-between items-center group/item transition-colors",children:[l.jsxs("div",{children:[l.jsx("div",{className:"font-bold text-slate-800 text-xs flex items-center gap-2",children:P.client}),l.jsxs("div",{className:"text-[10px] text-slate-500 mt-0.5",children:[l.jsx("span",{className:"font-mono text-blue-600 font-bold",children:P.osNumber})," - ",P.item,(P.manufacturer||P.model||P.serial)&&l.jsxs("div",{className:"text-[9px] text-slate-400 mt-0.5",children:[P.manufacturer&&`Marca: ${P.manufacturer} `,P.model&&`| Modelo: ${P.model} `,P.serial&&`| NS: ${P.serial}`]})]})]}),l.jsxs("div",{className:"text-[10px] font-bold text-blue-600 opacity-0 group-hover/item:opacity-100 flex items-center gap-1 transition-all",children:["Abrir ",l.jsx(kc,{size:12})]})]},P.firestoreId)),m.length===0&&l.jsx("div",{className:"p-4 text-center text-slate-400 text-[10px] font-medium",children:"Nenhum resultado."}),m.length>20&&l.jsxs("div",{className:"p-3 text-center text-[10px] text-slate-500 bg-slate-50 border-t border-slate-100",children:["Mostrando 20 de ",m.length," resultados"]})]})})()})]}),l.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold text-slate-500 px-1",children:[l.jsx("input",{type:"checkbox",className:"w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-0 cursor-pointer",onChange:f=>{let m=ye;(O||v||N)&&(m=m.filter(k=>{const P=k.statusDate?new Date(k.statusDate):new Date,$=P.getDate(),W=P.getMonth()+1,K=P.getFullYear();return!(O&&$!==parseInt(O)||v&&W!==parseInt(v)||N&&K!==parseInt(N))})),rt&&(m=m.filter(k=>k.status===rt)),pt&&(m=m.filter(k=>k.billingType===pt)),m=m.filter(k=>{var P,$;return((P=k.client)==null?void 0:P.toLowerCase().includes(X.toLowerCase()))||(($=k.osNumber)==null?void 0:$.includes(X))}),Ft(f.target.checked?m.map(k=>k.firestoreId):[])},checked:pe.length>0&&ye.filter(f=>{let m=!0;if(O||v||N){const k=f.statusDate?new Date(f.statusDate):new Date,P=k.getDate(),$=k.getMonth()+1,W=k.getFullYear();O&&P!==parseInt(O)&&(m=!1),v&&$!==parseInt(v)&&(m=!1),N&&W!==parseInt(N)&&(m=!1)}if(rt&&f.status!==rt&&(m=!1),pt&&f.billingType!==pt&&(m=!1),X){const k=X.toLowerCase().trim();!(f.client&&f.client.toLowerCase().trim().includes(k))&&!(f.osNumber&&f.osNumber.includes(X))&&!(f.item&&f.item.toLowerCase().trim().includes(k))&&!(f.manufacturer&&f.manufacturer.toLowerCase().trim().includes(k))&&!(f.model&&f.model.toLowerCase().trim().includes(k))&&!(f.serial&&f.serial.toLowerCase().trim().includes(k))&&(m=!1)}return m}).every(f=>pe.includes(f.firestoreId))}),l.jsx("span",{children:"Selecionar Todos da Busca"})]})]}),l.jsxs("div",{className:"flex-1 overflow-y-auto p-3 space-y-2 relative z-0",children:[ye.filter(f=>{var m,k,P,$,W,K;if(O||v||N){const Q=f.statusDate?new Date(f.statusDate):new Date,te=Q.getDate(),Ee=Q.getMonth()+1,Te=Q.getFullYear();if(O&&te!==parseInt(O)||v&&Ee!==parseInt(v)||N&&Te!==parseInt(N))return!1}if(rt&&f.status!==rt||pt&&f.billingType!==pt)return!1;if(X){const Q=X.toLowerCase().trim(),te=(m=f.client)==null?void 0:m.toLowerCase().includes(Q),Ee=(k=f.osNumber)==null?void 0:k.includes(X),Te=(P=f.item)==null?void 0:P.toLowerCase().includes(Q),Je=($=f.manufacturer)==null?void 0:$.toLowerCase().includes(Q),lt=(W=f.model)==null?void 0:W.toLowerCase().includes(Q),De=(K=f.serial)==null?void 0:K.toLowerCase().includes(Q);if(!(te||Ee||Te||Je||lt||De))return!1}return!0}).map(f=>{const k=(f.statusDate?new Date(f.statusDate):new Date).toLocaleDateString("pt-BR");return l.jsx("div",{onClick:()=>Ft(P=>P.includes(f.firestoreId)?P.filter($=>$!==f.firestoreId):[...P,f.firestoreId]),className:`p-3 rounded-xl border cursor-pointer transition-all hover:shadow-md select-none ${pe.includes(f.firestoreId)?"bg-blue-50 border-blue-200 ring-1 ring-blue-200":"bg-white border-slate-100 hover:bg-slate-50"}`,children:l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx("div",{className:`mt-1 w-4 h-4 rounded border flex items-center justify-center transition-colors ${pe.includes(f.firestoreId)?"bg-blue-600 border-blue-600":"border-slate-300 bg-white"}`,children:pe.includes(f.firestoreId)&&l.jsx(Wf,{size:12,className:"text-white"})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsxs("div",{className:"flex items-center justify-between mb-1",children:[l.jsx("span",{className:"font-black text-blue-700 text-xs",children:f.osNumber}),l.jsx("span",{className:`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase ${pe.includes(f.firestoreId)?"bg-blue-200 text-blue-800":"bg-slate-100 text-slate-500"}`,children:f.status})]}),l.jsx("div",{className:"font-bold text-slate-800 text-sm leading-tight truncate",children:f.client}),l.jsx("div",{className:"text-[10px] text-slate-400 mt-0.5 truncate",children:f.item}),l.jsxs("div",{className:"text-[9px] text-slate-500 mt-1 font-medium flex items-center gap-1",children:[l.jsx($A,{size:10}),k]})]}),l.jsx("button",{onClick:P=>{P.stopPropagation(),Zs(f)},className:"p-2 -mr-1 mt-0.5 text-slate-400 hover:text-blue-600 hover:bg-blue-100 rounded-lg transition-colors",title:"Abrir Detalhes da OS",children:l.jsx(kc,{size:18})})]})},f.firestoreId)}),ye.length===0&&l.jsx("div",{className:"text-center py-10 text-slate-400 text-xs",children:"Nenhuma OS encontrada."})]})]}),l.jsxs("div",{className:"lg:col-span-8 space-y-6 overflow-y-auto pr-1 pb-10",children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[l.jsxs("div",{className:"bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 space-y-4 relative overflow-hidden",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2 text-indigo-600 font-bold uppercase text-xs tracking-widest",children:[l.jsx(Th,{size:16})," Status Geral"]}),rt&&l.jsxs("button",{onClick:()=>Zr(null),className:"text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1",children:[l.jsx(Ge,{size:12})," Remover filtro"]})]}),l.jsx(uR,{data:_r.statusChartData,colors:["#3b82f6","#6366f1","#8b5cf6","#ec4899","#f43f5e","#10b981","#f59e0b"],onClick:zi}),l.jsx("div",{className:"space-y-2 mt-4",children:_r.statusChartData.slice(0,4).map((f,m)=>{const k=f.date?new Date(f.date).toLocaleDateString("pt-BR"):"",P=rt===f.label;return l.jsxs("div",{className:`flex justify-between text-xs text-slate-600 font-medium cursor-pointer p-2 rounded transition-colors ${P?"bg-blue-50 border border-blue-200":"hover:bg-slate-50"}`,onClick:()=>zi(f.label),children:[l.jsxs("span",{className:"flex items-center gap-2",children:[l.jsx("div",{className:`w-2 h-2 rounded-full ${P?"ring-2 ring-blue-300":""}`,style:{backgroundColor:["#3b82f6","#6366f1","#8b5cf6","#ec4899","#f43f5e","#10b981","#f59e0b"][m]}}),f.label,k&&l.jsx("span",{className:"text-[9px] text-slate-400 font-normal",children:k}),P&&l.jsx("span",{className:"text-[9px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full",children:"Ativo"})]}),l.jsx("span",{children:f.value})]},m)})}),l.jsx("div",{className:"absolute top-4 right-4 text-slate-300",children:l.jsx(kv,{size:16})})]}),l.jsxs("div",{className:"bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 space-y-4 relative overflow-hidden",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2 text-emerald-600 font-bold uppercase text-xs tracking-widest",children:[l.jsx(FA,{size:16})," Tipo de Faturamento"]}),pt&&l.jsxs("button",{onClick:()=>Ys(null),className:"text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1",children:[l.jsx(Ge,{size:12})," Remover filtro"]})]}),l.jsx(Pv,{data:_r.billingChartData,maxVal:Math.max(..._r.billingChartData.map(f=>f.value),1),colorClass:"bg-emerald-500",onClick:Me,showValues:b}),l.jsx("div",{className:"absolute top-4 right-4 text-slate-300",children:l.jsx(kv,{size:16})})]})]}),ua()&&l.jsxs("div",{className:"bg-blue-50 p-4 rounded-2xl border border-blue-100",children:[l.jsxs("div",{className:"flex items-center gap-2 text-blue-600 mb-2",children:[l.jsx(ho,{size:16}),l.jsx("span",{className:"text-xs font-bold uppercase",children:"Filtros Ativos"})]}),l.jsxs("div",{className:"flex flex-wrap gap-2",children:[rt&&l.jsxs("span",{className:"text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold flex items-center gap-1",children:["Status: ",rt,l.jsx("button",{onClick:()=>Zr(null),className:"ml-1 hover:text-blue-900",children:l.jsx(Ge,{size:12})})]}),pt&&l.jsxs("span",{className:"text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-bold flex items-center gap-1",children:["Faturamento: ",pt,l.jsx("button",{onClick:()=>Ys(null),className:"ml-1 hover:text-emerald-900",children:l.jsx(Ge,{size:12})})]}),pe.length>0&&l.jsxs("span",{className:"text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-bold flex items-center gap-1",children:[pe.length," OS(s) selecionada(s)",l.jsx("button",{onClick:()=>Ft([]),className:"ml-1 hover:text-purple-900",children:l.jsx(Ge,{size:12})})]}),(O||v||N)&&l.jsxs("span",{className:"text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-bold flex items-center gap-1",children:["Data: ",O&&`Dia ${O}`," ",v&&`Mês ${v}`," ",N&&`Ano ${N}`,l.jsx("button",{onClick:()=>{z(""),y(""),j("")},className:"ml-1 hover:text-amber-900",children:l.jsx(Ge,{size:12})})]}),X&&l.jsxs("span",{className:"text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-bold flex items-center gap-1",children:['Busca: "',X,'"',l.jsx("button",{onClick:()=>oe(""),className:"ml-1 hover:text-slate-900",children:l.jsx(Ge,{size:12})})]})]}),l.jsxs("p",{className:"text-xs text-blue-700 mt-2",children:["Mostrando ",_r.count," de ",ye.length," ordens de serviço"]})]})]})]})]}),M==="financial"&&Pn()&&l.jsxs("div",{className:"space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto h-full",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-4xl font-black text-slate-900 tracking-tighter",children:"Financeiro"}),l.jsx("p",{className:"text-slate-500 font-medium",children:"Análise de custos e receitas acumuladas"})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[l.jsxs("div",{className:"bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 space-y-2",children:[l.jsxs("div",{className:"flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-widest",children:[l.jsx(tR,{size:16})," Receita Bruta"]}),l.jsxs("div",{className:"text-3xl font-black text-slate-900",children:["R$ ",mt(Ut.totalRevenue)]}),l.jsx("div",{className:"text-xs text-slate-400",children:"Total cobrado em OS"})]}),l.jsxs("div",{className:"bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 space-y-2",children:[l.jsxs("div",{className:"flex items-center gap-2 text-red-500 font-bold uppercase text-xs tracking-widest",children:[l.jsx(OA,{size:16})," Custos Operacionais"]}),l.jsxs("div",{className:"text-3xl font-black text-slate-900",children:["R$ ",mt(Ut.totalCosts)]}),l.jsx("div",{className:"text-xs text-slate-400",children:"Peças + Fretes Terceiros"})]}),l.jsxs("div",{className:"bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 space-y-2",children:[l.jsxs("div",{className:"flex items-center gap-2 text-green-600 font-bold uppercase text-xs tracking-widest",children:[l.jsx(VA,{size:16})," Lucro Líquido"]}),l.jsxs("div",{className:"text-3xl font-black text-green-600",children:["R$ ",mt(Ut.totalProfit)]}),l.jsx("div",{className:"text-xs text-slate-400",children:"Receita - Custos"})]}),l.jsxs("div",{className:"bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 space-y-2",children:[l.jsxs("div",{className:"flex items-center gap-2 text-purple-600 font-bold uppercase text-xs tracking-widest",children:[l.jsx(eR,{size:16})," Margem de Lucro"]}),l.jsxs("div",{className:"text-3xl font-black text-purple-600",children:[Ut.margin.toLocaleString("pt-BR",{maximumFractionDigits:1}),"%"]}),l.jsx("div",{className:"text-xs text-slate-400",children:"Rentabilidade média"})]})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[l.jsxs("div",{className:"bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100",children:[l.jsxs("div",{className:"flex items-center gap-2 text-slate-800 font-bold uppercase text-xs tracking-widest mb-6",children:[l.jsx(Nh,{size:16})," Top Clientes (Receita)"]}),Ut.topClients.length>0?l.jsx(Pv,{data:Ut.topClients,maxVal:Ut.topClients[0].value,colorClass:"bg-blue-600",showValues:b}):l.jsx("div",{className:"text-center py-10 text-slate-400",children:"Sem dados financeiros"})]}),l.jsx("div",{className:"bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[2rem] shadow-xl text-white flex flex-col justify-center",children:l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{children:[l.jsx("div",{className:"text-xs font-bold text-slate-400 uppercase tracking-widest mb-1",children:"Status Financeiro"}),l.jsx("h3",{className:"text-2xl font-black",children:"Resumo Geral"})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"flex justify-between items-center border-b border-slate-700 pb-2",children:[l.jsx("span",{className:"text-sm font-medium text-slate-300",children:"Total de Ordens Analisadas"}),l.jsx("span",{className:"font-bold text-xl",children:ye.length})]}),l.jsxs("div",{className:"flex justify-between items-center border-b border-slate-700 pb-2",children:[l.jsx("span",{className:"text-sm font-medium text-slate-300",children:"Ticket Médio (Receita/OS)"}),l.jsxs("span",{className:"font-bold text-xl",children:["R$ ",mt(ye.length>0?Ut.totalRevenue/ye.length:0)]})]}),l.jsxs("div",{className:"flex justify-between items-center pb-2",children:[l.jsx("span",{className:"text-sm font-medium text-slate-300",children:"Lucro Médio por OS"}),l.jsxs("span",{className:"font-bold text-xl text-green-400",children:["R$ ",mt(ye.length>0?Ut.totalProfit/ye.length:0)]})]})]})]})})]})]}),M==="contracts"&&Pn()&&l.jsxs("div",{className:"space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto",children:[l.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-end gap-4",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-4xl font-black text-slate-900 tracking-tighter",children:"Contratos de Manutenção"}),l.jsx("p",{className:"text-slate-500 font-medium",children:"Gestão de vigências e escopo de atendimento"})]}),l.jsxs("div",{className:"flex gap-3",children:[l.jsxs("div",{className:"hidden md:flex bg-blue-50 text-blue-600 px-6 py-3 rounded-2xl font-bold text-sm border border-blue-100 items-center gap-2",children:[l.jsx(ho,{size:18}),"Contratos ativos e manuais"]}),l.jsxs("button",{onClick:Xl,className:"bg-blue-600 text-white px-8 py-3 rounded-2xl font-black flex items-center gap-2 shadow-xl shadow-blue-200 hover:bg-blue-700 transition-colors",children:[l.jsx(Tr,{size:20})," Novo Contrato"]})]})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Kl.length===0?l.jsx("div",{className:"col-span-3 text-center py-20 text-slate-400",children:"Nenhum contrato encontrado. Adicione um manualmente ou crie uma OS."}):Kl.map((f,m)=>l.jsxs("div",{className:"bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden group hover:shadow-2xl transition-all",children:[l.jsxs("div",{className:"p-6 border-b border-slate-50 bg-slate-50/50 flex justify-between items-start",children:[l.jsxs("div",{children:[l.jsx("div",{className:"font-black text-lg text-slate-800 leading-tight mb-1",children:f.clientName}),l.jsx("div",{className:"text-xs text-slate-500 font-medium truncate max-w-[200px]",children:f.cnpj||"CNPJ não informado"})]}),l.jsx("div",{className:`p-2 rounded-lg ${f.isConfigured?"bg-green-100 text-green-600":"bg-amber-100 text-amber-600"}`,children:f.isConfigured?l.jsx(Wf,{size:20}):l.jsx($r,{size:20})})]}),l.jsxs("div",{className:"p-6 space-y-4",children:[l.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[l.jsxs("div",{children:[l.jsx("div",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Vigência Início"}),l.jsx("div",{className:"font-bold text-slate-700",children:f.startDate?new Date(f.startDate+"T00:00:00").toLocaleDateString():"---"})]}),l.jsxs("div",{children:[l.jsx("div",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Vigência Fim"}),l.jsx("div",{className:"font-bold text-slate-700",children:f.endDate?new Date(f.endDate+"T00:00:00").toLocaleDateString():"---"})]})]}),l.jsxs("div",{className:"bg-slate-50 p-3 rounded-xl border border-slate-100",children:[l.jsxs("div",{className:"flex justify-between items-center mb-1",children:[l.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Valor Mensal"}),l.jsxs("span",{className:"font-black text-slate-800",children:["R$ ",mt(Se(f.monthlyValue))]})]}),l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Valor Anual"}),l.jsxs("span",{className:"font-black text-blue-600",children:["R$ ",mt(Se(f.annualValue))]})]})]}),l.jsxs("div",{className:"space-y-1",children:[l.jsx("div",{className:"text-[10px] font-bold text-slate-400 uppercase mb-1",children:"Escopo Contratado"}),l.jsxs("div",{className:"flex flex-wrap gap-1",children:[f.coveredItems.videoSurgeryInstruments&&l.jsx("span",{className:"text-[9px] bg-indigo-50 text-indigo-600 px-2 py-1 rounded border border-indigo-100 font-bold",children:"Instr. Videocirurgia"}),f.coveredItems.openInstruments&&l.jsx("span",{className:"text-[9px] bg-purple-50 text-purple-600 px-2 py-1 rounded border border-purple-100 font-bold",children:"Instr. Abertos"}),f.coveredItems.videoSurgeryEquipment&&l.jsx("span",{className:"text-[9px] bg-blue-50 text-blue-600 px-2 py-1 rounded border border-blue-100 font-bold",children:"Equip. Vídeo"}),f.coveredItems.endoscopes&&l.jsx("span",{className:"text-[9px] bg-emerald-50 text-emerald-600 px-2 py-1 rounded border border-emerald-100 font-bold",children:"Endoscópios"}),!Object.values(f.coveredItems).some(Boolean)&&l.jsx("span",{className:"text-[9px] text-slate-400 italic",children:"Nenhum item selecionado"})]})]})]}),l.jsxs("button",{onClick:()=>Jl(f),className:"w-full py-4 bg-slate-50 hover:bg-slate-100 border-t border-slate-100 text-slate-600 font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2",children:[l.jsx(Ev,{size:16})," ",f.isConfigured?"Editar Contrato":"Configurar Contrato"]})]},m))})]}),M==="inventory"&&Pn()&&l.jsxs("div",{className:"p-20 text-center",children:[l.jsx(_v,{size:80,className:"mx-auto text-slate-200 mb-6"}),l.jsx("h3",{className:"text-2xl font-black",children:"Inventário em breve"})]}),M==="clients"&&Pn()&&l.jsxs("div",{className:"p-20 text-center",children:[l.jsx(Nh,{size:80,className:"mx-auto text-slate-200 mb-6"}),l.jsx("h3",{className:"text-2xl font-black",children:"Módulo de Clientes em breve"})]}),M==="users"&&Pn()&&l.jsx(aR,{}),M==="about"&&l.jsxs("div",{className:"p-20 text-center",children:[l.jsx(ho,{size:80,className:"mx-auto text-slate-200 mb-6"}),l.jsx("h3",{className:"text-2xl font-black",children:"Sobre o Sistema"})]})]}),Di&&l.jsx("div",{className:"fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4",children:l.jsxs("div",{className:"bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-6 animate-in zoom-in-95",ref:u,children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"bg-green-100 p-3 rounded-full text-green-600",children:l.jsx(Cv,{size:24})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-black text-slate-900",children:"Movimentar OSs Selecionadas"}),l.jsxs("p",{className:"text-slate-500 text-sm",children:["Alterar status de ",pe.length," OS(s)"]})]})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase",children:"Novo Status"}),l.jsx(yn,{value:Jr,onChange:f=>Fi(f.target.value),options:ts,label:"Novo status"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase",children:"Data do Status"}),l.jsx("input",{type:"date",className:"w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none font-bold",value:gn,onChange:f=>Ul(f.target.value)})]})]}),l.jsxs("div",{className:"flex gap-3",children:[l.jsx("button",{onClick:()=>An(!1),className:"flex-1 py-4 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-colors",children:"Cancelar"}),l.jsxs("button",{onClick:Yl,className:"flex-1 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 shadow-xl shadow-green-200 transition-colors flex items-center justify-center gap-2",children:[l.jsx(Eh,{size:20})," Atualizar"]})]})]})}),Ws&&l.jsx("div",{className:"fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto",children:l.jsx("div",{className:"bg-white rounded-[2.5rem] w-full max-w-5xl my-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200",children:l.jsxs("form",{onSubmit:Gn,className:"p-6 md:p-10 space-y-10",children:[l.jsxs("div",{className:"flex justify-between items-center border-b pb-6",children:[l.jsxs("div",{children:[l.jsxs("h2",{className:"text-3xl font-black text-slate-900 tracking-tight",children:["OS ",D.osNumber]}),l.jsx("p",{className:"text-slate-500 text-sm font-medium",children:"Relatório de Atendimento Técnico"})]}),l.jsx("button",{type:"button",onClick:()=>Ks(!1),className:"p-3 hover:bg-slate-100 rounded-full text-slate-400 transition-colors",children:l.jsx(Ge,{})})]}),l.jsxs("div",{className:"space-y-10",children:[l.jsxs("div",{className:"bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-8",children:[l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-widest",children:[l.jsx(Uu,{size:16})," Cliente"]}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{placeholder:"Nome da Empresa",className:`w-full p-4 bg-white border ${Kt.client?"border-red-500":"border-slate-200"} rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold`,value:D.client,onChange:f=>{se({...D,client:f.target.value}),Bs(!0),Kt.client&&Yr(m=>({...m,client:!1}))},onFocus:()=>Bs(!0),onBlur:()=>setTimeout(()=>Bs(!1),200)}),kn&&D.client&&l.jsx("div",{className:"absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-60 overflow-y-auto animate-in slide-in-from-top-2",children:Hl.filter(f=>f.client.toLowerCase().includes(D.client.toLowerCase())).slice(0,5).map((f,m)=>l.jsxs("div",{className:"p-3 hover:bg-blue-50 cursor-pointer border-b border-slate-50 flex flex-col",onMouseDown:k=>{k.preventDefault(),Rd(f)},children:[l.jsx("span",{className:"font-bold text-slate-800 text-sm",children:f.client}),l.jsx("span",{className:"text-[10px] text-slate-400",children:f.cnpj||"Sem CNPJ"})]},m))}),Kt.client&&l.jsx("p",{className:"text-red-500 text-xs mt-1 ml-4",children:"Cliente é obrigatório"})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsx("input",{placeholder:"CNPJ",className:"w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold",value:D.cnpj,onChange:f=>se({...D,cnpj:f.target.value})}),l.jsx("input",{placeholder:"Responsável",className:"w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold",value:D.contactPerson,onChange:f=>se({...D,contactPerson:f.target.value})})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsx("input",{placeholder:"E-mail",className:"w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold",value:D.email,onChange:f=>se({...D,email:f.target.value})}),l.jsxs("div",{className:"space-y-1",children:[l.jsxs("label",{className:"text-[10px] font-black text-slate-400 uppercase ml-2 flex justify-between",children:["Endereço",D.address&&l.jsxs("a",{href:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(D.address)}`,target:"_blank",className:"text-blue-600 hover:underline flex items-center gap-1",children:[l.jsx(kc,{size:10})," Ver no Maps"]})]}),l.jsx("input",{placeholder:"Endereço Completo",className:"w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold",value:D.address,onChange:f=>se({...D,address:f.target.value})})]})]})]}),l.jsx("hr",{className:"border-slate-200/50"}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"flex items-center gap-2 text-indigo-600 font-bold uppercase text-xs tracking-widest",children:[l.jsx(zA,{size:16})," Atendimento"]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsx(yn,{value:D.billingType,onChange:f=>se({...D,billingType:f.target.value,maintenanceVisit:""}),options:yr,variant:"default",label:"Tipo de atendimento"}),l.jsx(fR,{value:D.maintenanceVisit,onChange:f=>se({...D,maintenanceVisit:f.target.value}),billingType:D.billingType})]})]})]}),l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"flex items-center gap-2 text-orange-600 font-bold uppercase text-xs tracking-widest",children:[l.jsx(YA,{size:16})," Equipamento"]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[l.jsxs("div",{className:"relative",children:[l.jsx("input",{placeholder:"Item / Nome",className:`w-full p-4 bg-slate-50 border ${Kt.item?"border-red-500":"border-slate-200"} rounded-2xl outline-none font-bold`,value:D.item,onChange:f=>{se({...D,item:f.target.value}),fr(!0),Kt.item&&Yr(m=>({...m,item:!1}))},onFocus:()=>fr(!0),onBlur:()=>setTimeout(()=>fr(!1),200)}),Ko&&Xs.length>0&&l.jsxs("div",{className:"absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-48 overflow-y-auto animate-in slide-in-from-top-2",children:[l.jsx("div",{className:"p-2 bg-slate-50 text-[10px] uppercase font-bold text-slate-400",children:"Sugestões de Itens"}),Xs.filter(f=>f.toLowerCase().includes(D.item.toLowerCase())).slice(0,5).map((f,m)=>l.jsx("div",{className:"p-3 hover:bg-orange-50 cursor-pointer border-b border-slate-50 text-sm text-slate-700 font-bold",onMouseDown:k=>{k.preventDefault(),se({...D,item:f}),fr(!1)},children:f},m))]}),Kt.item&&l.jsx("p",{className:"text-red-500 text-xs mt-1 ml-4",children:"Item/Equipamento é obrigatório"})]}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{placeholder:"Marca",className:"w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-bold",value:D.manufacturer,onChange:f=>{se({...D,manufacturer:f.target.value}),Hr(!0)},onFocus:()=>Hr(!0),onBlur:()=>setTimeout(()=>Hr(!1),200)}),Go&&Js.length>0&&l.jsxs("div",{className:"absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-48 overflow-y-auto animate-in slide-in-from-top-2",children:[l.jsx("div",{className:"p-2 bg-slate-50 text-[10px] uppercase font-bold text-slate-400",children:"Sugestões de Marcas"}),Js.filter(f=>f.toLowerCase().includes(D.manufacturer.toLowerCase())).slice(0,5).map((f,m)=>l.jsx("div",{className:"p-3 hover:bg-orange-50 cursor-pointer border-b border-slate-50 text-sm text-slate-700 font-bold",onMouseDown:k=>{k.preventDefault(),se({...D,manufacturer:f}),Hr(!1)},children:f},m))]})]}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{placeholder:"Modelo",className:"w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-bold",value:D.model,onChange:f=>{se({...D,model:f.target.value}),Hs(!0)},onFocus:()=>Hs(!0),onBlur:()=>setTimeout(()=>Hs(!1),200)}),kd&&oa.length>0&&l.jsxs("div",{className:"absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-48 overflow-y-auto animate-in slide-in-from-top-2",children:[l.jsx("div",{className:"p-2 bg-slate-50 text-[10px] uppercase font-bold text-slate-400",children:"Sugestões de Modelos"}),oa.filter(f=>f.toLowerCase().includes(D.model.toLowerCase())).slice(0,5).map((f,m)=>l.jsx("div",{className:"p-3 hover:bg-orange-50 cursor-pointer border-b border-slate-50 text-sm text-slate-700 font-bold",onMouseDown:k=>{k.preventDefault(),se({...D,model:f}),Hs(!1)},children:f},m))]})]}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{placeholder:"Número de Série",className:"w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-bold font-mono",value:D.serial,onChange:f=>{se({...D,serial:f.target.value}),pr(!0)},onFocus:()=>pr(!0),onBlur:()=>setTimeout(()=>pr(!1),200)}),Fl&&Re.length>0&&l.jsxs("div",{className:"absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-48 overflow-y-auto animate-in slide-in-from-top-2",children:[l.jsx("div",{className:"p-2 bg-slate-50 text-[10px] uppercase font-bold text-slate-400",children:"Sugestões de NS"}),Re.filter(f=>f.toLowerCase().includes(D.serial.toLowerCase())).slice(0,5).map((f,m)=>l.jsx("div",{className:"p-3 hover:bg-orange-50 cursor-pointer border-b border-slate-50 text-sm text-slate-700 font-mono font-bold",onMouseDown:k=>{k.preventDefault(),se({...D,serial:f}),pr(!1)},children:f},m))]})]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-xs font-bold text-slate-500 uppercase",children:"Observações (opcional)"}),l.jsx("textarea",{placeholder:"Observações adicionais sobre o equipamento, como estado de conservação, acessórios, etc...",className:"w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-bold resize-none",value:D.equipmentObservation||"",onChange:f=>se({...D,equipmentObservation:f.target.value}),rows:3})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-xs font-bold text-slate-500 uppercase",children:"Quantidade"}),l.jsx("div",{className:"flex items-center",children:l.jsx("input",{type:"number",min:"1",placeholder:"1",className:"w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-bold text-center",value:D.quantity||"1",onChange:f=>se({...D,quantity:f.target.value})})}),l.jsx("p",{className:"text-[10px] text-slate-400 mt-1 ml-2",children:"Quantidade do item/equipamento"})]})]})]}),l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"flex items-center gap-2 text-emerald-600 font-bold uppercase text-xs tracking-widest",children:[l.jsx(nR,{size:16})," Laudo Técnico"]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[l.jsxs("div",{className:"space-y-4",children:[l.jsx("label",{className:"text-xs font-bold text-slate-500 uppercase",children:"Defeitos Encontrados"}),l.jsxs("div",{className:"bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-3",children:[l.jsxs("div",{className:"relative flex gap-2",children:[l.jsx("input",{placeholder:"Descreva um defeito...",className:"flex-1 p-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-emerald-500/20",value:Qs,onChange:f=>{Hn(f.target.value),Cn(!0)},onFocus:()=>Cn(!0),onBlur:()=>setTimeout(()=>Cn(!1),200),onKeyDown:f=>{f.key==="Enter"&&(f.preventDefault(),ns())}}),l.jsx("button",{type:"button",onClick:ns,className:"bg-emerald-600 text-white p-3 rounded-xl shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-colors",children:l.jsx(Tr,{size:20})}),Sd&&Wl.length>0&&l.jsxs("div",{className:"absolute top-full left-0 right-14 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-48 overflow-y-auto animate-in slide-in-from-top-2",children:[l.jsx("div",{className:"p-2 bg-slate-50 text-[10px] uppercase font-bold text-slate-400",children:"Sugestões"}),Wl.filter(f=>f.toLowerCase().includes(Qs.toLowerCase())).slice(0,5).map((f,m)=>l.jsx("div",{className:"p-3 hover:bg-emerald-50 cursor-pointer border-b border-slate-50 text-sm text-slate-700",onMouseDown:k=>{k.preventDefault(),Hn(f),Cn(!1)},children:f.length>50?f.substring(0,50)+"...":f},m))]})]}),l.jsxs("div",{className:"space-y-2 max-h-60 overflow-y-auto pr-1",children:[D.defectsList&&D.defectsList.map((f,m)=>l.jsxs("div",{className:"flex justify-between items-start p-3 bg-white border rounded-xl shadow-sm animate-in slide-in-from-left-2",children:[l.jsx("div",{className:"text-sm font-medium text-slate-700 leading-snug",children:f}),l.jsx("button",{type:"button",onClick:()=>Kn(m),className:"text-slate-300 hover:text-red-500 transition-colors p-1",children:l.jsx(Ge,{size:16})})]},m)),(!D.defectsList||D.defectsList.length===0)&&l.jsx("div",{className:"text-center text-xs text-slate-400 italic py-2",children:"Nenhum defeito listado."})]})]})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsx(yn,{value:D.solutionType,onChange:f=>se({...D,solutionType:f.target.value}),options:na,variant:"light",label:"Tipo de solução"}),D.solutionType==="Preenchimento manual"&&l.jsxs("div",{className:"space-y-4 animate-in fade-in",children:[l.jsx("div",{className:"bg-indigo-50 p-4 rounded-2xl border border-indigo-100 space-y-3",children:l.jsxs("div",{className:"relative flex gap-2",children:[l.jsx("input",{placeholder:"Descreva uma etapa da solução...",className:"flex-1 p-3 bg-white border border-indigo-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500/20",value:Li,onChange:f=>{nt(f.target.value),Vt(!0)},onFocus:()=>Vt(!0),onBlur:()=>setTimeout(()=>Vt(!1),200),onKeyDown:f=>{f.key==="Enter"&&(f.preventDefault(),aa())}}),l.jsx("button",{type:"button",onClick:aa,className:"bg-indigo-600 text-white p-3 rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-colors",children:l.jsx(Tr,{size:20})}),qs&&Wn.length>0&&l.jsxs("div",{className:"absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-48 overflow-y-auto animate-in slide-in-from-top-2",children:[l.jsx("div",{className:"p-2 bg-slate-50 text-[10px] uppercase font-bold text-slate-400",children:"Sugestões"}),Wn.filter(f=>f.toLowerCase().includes(gr.toLowerCase())).slice(0,5).map((f,m)=>l.jsx("div",{className:"p-3 hover:bg-green-50 cursor-pointer border-b border-slate-50 text-sm text-slate-700",onMouseDown:k=>{k.preventDefault(),ln(f),Vt(!1)},children:f},m))]})]})}),l.jsxs("div",{className:"space-y-2 max-h-60 overflow-y-auto pr-1",children:[D.manualSolutionsList&&D.manualSolutionsList.map((f,m)=>l.jsxs("div",{className:"flex justify-between items-start p-3 bg-white border rounded-xl shadow-sm animate-in slide-in-from-left-2",children:[l.jsx("div",{className:"text-sm font-medium text-slate-700 leading-snug",children:f}),l.jsx("button",{type:"button",onClick:()=>Ql(m),className:"text-slate-300 hover:text-red-500 transition-colors p-1",children:l.jsx(Ge,{size:16})})]},m)),(!D.manualSolutionsList||D.manualSolutionsList.length===0)&&l.jsx("div",{className:"text-center text-xs text-slate-400 italic py-2",children:"Nenhuma solução listada."})]})]}),D.solutionType==="Manual com custos detalhados"&&l.jsxs("div",{className:"space-y-4 animate-in fade-in",children:[l.jsxs("div",{className:"bg-green-50 p-4 rounded-2xl border border-green-100 space-y-3",children:[l.jsxs("div",{className:"relative",children:[l.jsx("input",{placeholder:"Item, Peça ou Serviço",className:"w-full p-2 bg-white border border-green-200 rounded-lg text-sm",value:gr,onChange:f=>{ln(f.target.value),Vt(!0)},onFocus:()=>Vt(!0),onBlur:()=>setTimeout(()=>Vt(!1),200)}),qs&&vn.length>0&&l.jsxs("div",{className:"absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-48 overflow-y-auto animate-in slide-in-from-top-2",children:[l.jsx("div",{className:"p-2 bg-slate-50 text-[10px] uppercase font-bold text-slate-400",children:"Sugestões"}),vn.filter(f=>f.toLowerCase().includes(gr.toLowerCase())).slice(0,5).map((f,m)=>l.jsx("div",{className:"p-3 hover:bg-green-50 cursor-pointer border-b border-slate-50 text-sm text-slate-700",onMouseDown:k=>{k.preventDefault(),ln(f),Vt(!1)},children:f},m))]})]}),l.jsxs("div",{className:"flex gap-2",children:[l.jsx("input",{placeholder:"Valor R$ 0,00",className:"flex-1 p-2 bg-white border border-green-200 rounded-lg text-sm",value:Jo,onChange:f=>Qr(f.target.value)}),l.jsx("button",{type:"button",onClick:Pd,className:"bg-green-600 text-white p-2.5 rounded-lg shadow-lg shadow-green-200",children:l.jsx(Tr,{size:20})})]})]}),l.jsx("div",{className:"space-y-2 max-h-40 overflow-y-auto pr-1",children:D.solutionsList.map(f=>l.jsxs("div",{className:"flex justify-between items-center p-3 bg-white border rounded-xl shadow-sm animate-in slide-in-from-right-2",children:[l.jsxs("div",{children:[l.jsx("div",{className:"text-xs font-bold text-slate-800",children:f.text}),l.jsxs("div",{className:"text-[10px] text-green-600 font-black",children:["R$ ",f.cost]})]}),l.jsx("button",{type:"button",onClick:()=>jd(f.id),children:l.jsx(Ge,{size:16,className:"text-red-300 hover:text-red-500"})})]},f.id))}),Kt.solutionsList&&D.solutionsList.length===0&&l.jsx("p",{className:"text-red-500 text-xs mt-1 ml-4",children:"Adicione pelo menos um item na lista de soluções"})]}),D.solutionType==="Conserto em bancada"&&l.jsxs("div",{className:"space-y-4 animate-in fade-in",children:[l.jsx("div",{className:"bg-amber-50 p-4 rounded-2xl border border-amber-100 space-y-3",children:l.jsxs("div",{className:"relative flex gap-2",children:[l.jsx("input",{placeholder:"Descreva uma etapa do conserto em bancada...",className:"flex-1 p-3 bg-white border border-amber-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-amber-500/20",value:Mi,onChange:f=>vr(f.target.value),onKeyDown:f=>{f.key==="Enter"&&(f.preventDefault(),la())}}),l.jsx("button",{type:"button",onClick:la,className:"bg-amber-600 text-white p-3 rounded-xl shadow-lg shadow-amber-200 hover:bg-amber-700 transition-colors",children:l.jsx(Tr,{size:20})})]})}),l.jsxs("div",{className:"space-y-2 max-h-60 overflow-y-auto pr-1",children:[D.benchRepairList&&D.benchRepairList.map((f,m)=>l.jsxs("div",{className:"flex justify-between items-start p-3 bg-white border rounded-xl shadow-sm animate-in slide-in-from-left-2",children:[l.jsx("div",{className:"text-sm font-medium text-slate-700 leading-snug",children:f}),l.jsx("button",{type:"button",onClick:()=>rs(m),className:"text-slate-300 hover:text-red-500 transition-colors p-1",children:l.jsx(Ge,{size:16})})]},m)),(!D.benchRepairList||D.benchRepairList.length===0)&&l.jsx("div",{className:"text-center text-xs text-slate-400 italic py-2",children:"Nenhuma etapa de conserto listada."})]}),Kt.benchRepairList&&(!D.benchRepairList||D.benchRepairList.length===0)&&l.jsx("p",{className:"text-red-500 text-xs mt-1 ml-4",children:"Descreva as etapas do conserto em bancada"})]}),D.solutionType==="Não passível de conserto, substituir por novo equipamento / material"&&l.jsxs("div",{children:[l.jsx("textarea",{placeholder:"Detalhe a substituição por novo equipamento / material...",className:`w-full p-4 ${Kt.notRepairableDetail?"bg-red-50 border-red-500":"bg-red-50 border-red-100"} text-red-900 border rounded-2xl outline-none font-bold`,value:D.notRepairableDetail,onChange:f=>{se({...D,notRepairableDetail:f.target.value}),Kt.notRepairableDetail&&Yr(m=>({...m,notRepairableDetail:!1}))},onBlur:()=>ql("notRepairableDetail"),rows:3}),Kt.notRepairableDetail&&l.jsx("p",{className:"text-red-500 text-xs mt-1 ml-4",children:"Detalhe a substituição por novo equipamento/material"})]})]})]})]}),l.jsxs("div",{className:"bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-6 transition-all duration-300",children:[l.jsxs("div",{className:"flex items-center justify-between cursor-pointer hover:opacity-80 transition-opacity",onClick:()=>tt(!ji),children:[l.jsxs("div",{className:"flex items-center gap-2 text-red-600 font-bold uppercase text-xs tracking-widest",children:[l.jsx(Kf,{size:16})," Financeiro & Custos (Controle Interno)"]}),ji?l.jsx(p1,{size:20,className:"text-slate-400"}):l.jsx(f1,{size:20,className:"text-slate-400"})]}),ji&&l.jsxs("div",{className:"space-y-6 animate-in slide-in-from-top-4 fade-in duration-300",children:[l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-500 uppercase",children:"Nome do Terceiro / Transportadora"}),l.jsx("input",{placeholder:"Ex: JadLog / Lab Especializado",className:"w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none font-bold",value:D.costThirdPartyName,onChange:f=>se({...D,costThirdPartyName:f.target.value})})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-500 uppercase",children:"Frete Terceiro (R$)"}),l.jsx("input",{placeholder:"0,00",className:"w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none font-bold",value:D.costThirdPartyShipping,onChange:f=>se({...D,costThirdPartyShipping:f.target.value})})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-500 uppercase",children:"Peças/Serviços (R$)"}),l.jsx("input",{placeholder:"0,00",className:"w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none font-bold",value:D.costParts,onChange:f=>se({...D,costParts:f.target.value})})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-500 uppercase",children:"Frete Cliente (R$)"}),l.jsx("input",{placeholder:"0,00",className:"w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none font-bold",value:D.costClientShipping,onChange:f=>se({...D,costClientShipping:f.target.value})})]})]}),l.jsx("hr",{className:"border-slate-200/50"}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-start",children:[l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-blue-500 uppercase",children:"Valor Sugerido (+60%)"}),l.jsxs("div",{className:"w-full p-4 bg-blue-50/50 border border-blue-100 rounded-2xl font-black text-blue-600 cursor-not-allowed text-sm",children:["R$ ",mt($l)]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-purple-600 uppercase",children:"Soma Itens Laudo"}),l.jsxs("div",{className:"w-full p-4 bg-purple-50/50 border border-purple-100 rounded-2xl font-black text-purple-700 cursor-not-allowed text-sm",children:["R$ ",mt(Ad)]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-green-600 uppercase",children:"Valor Cobrado (R$)"}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{placeholder:"0,00",className:"w-full p-4 bg-green-50 border border-green-100 rounded-2xl outline-none font-black text-green-700 text-sm",value:D.chargedAmount,onChange:f=>se({...D,chargedAmount:f.target.value})}),D.discount5Days&&l.jsx("div",{className:"absolute -right-2 -top-2 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-full animate-pulse",children:"5% OFF"})]}),D.discount5Days&&D.finalChargedAmount>0&&l.jsxs("div",{className:"bg-green-100 p-3 rounded-xl border border-green-200",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[10px] font-bold text-green-800 uppercase",children:"Valor Final com Desconto"}),l.jsxs("span",{className:"text-lg font-black text-green-900",children:["R$ ",mt(D.finalChargedAmount)]})]}),l.jsx("div",{className:"text-[9px] text-green-600 mt-1",children:"Desconto de 5% aplicado para pagamento em 5 dias"})]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-500 uppercase",children:"Condição Pagamento"}),l.jsx(yn,{value:D.paymentCondition,onChange:f=>se({...D,paymentCondition:f.target.value,installments:""}),options:["À vista","Boleto","Cartão"],label:"Condição de pagamento"})]}),(D.paymentCondition==="Boleto"||D.paymentCondition==="Cartão")&&l.jsxs("div",{className:"space-y-2 animate-in fade-in",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Parcelas"}),D.paymentCondition==="Boleto"?l.jsxs("div",{className:"space-y-3",children:[l.jsx(yn,{value:D.installments,onChange:f=>{const m=f.target.value==="5 dias (5% de desconto)";se({...D,installments:f.target.value,discount5Days:m})},options:zl.Boleto,label:"Parcelas boleto"}),D.discount5Days&&D.chargedAmount&&l.jsxs("div",{className:"bg-green-50 p-4 rounded-xl border border-green-100 space-y-1",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[10px] font-bold text-green-700 uppercase",children:"Desconto de 5%"}),l.jsxs("span",{className:"text-sm font-black text-green-600",children:["R$ ",mt(D.discountAmount)]})]}),l.jsxs("div",{className:"flex justify-between items-center pt-1 border-t border-green-100",children:[l.jsx("span",{className:"text-[10px] font-bold text-slate-600",children:"Valor Final"}),l.jsxs("span",{className:"text-lg font-black text-slate-800",children:["R$ ",mt(D.finalChargedAmount)]})]})]})]}):l.jsx(yn,{value:D.installments,onChange:f=>se({...D,installments:f.target.value}),options:zl.Cartão,label:"Parcelas cartão"})]})]}),l.jsxs("div",{className:`p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4 transition-colors ${xr>=0?"bg-green-100/50 border border-green-200":"bg-red-100/50 border border-red-200"}`,children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:`p-3 rounded-full ${xr>=0?"bg-green-200 text-green-700":"bg-red-200 text-red-700"}`,children:l.jsx(UA,{size:24})}),l.jsxs("div",{children:[l.jsx("div",{className:"text-[10px] font-black uppercase text-slate-500",children:"Resultado Operacional"}),l.jsx("div",{className:`text-2xl font-black ${xr>=0?"text-green-700":"text-red-700"}`,children:xr>=0?"LUCRO":"PREJUÍZO"})]})]}),l.jsxs("div",{className:"flex gap-8 text-right",children:[l.jsxs("div",{children:[l.jsx("div",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Custo Total"}),l.jsxs("div",{className:"font-bold text-slate-700",children:["R$ ",mt(ia)]})]}),l.jsxs("div",{children:[l.jsx("div",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Resultado"}),l.jsxs("div",{className:`text-xl font-black ${xr>=0?"text-green-600":"text-red-600"}`,children:["R$ ",mt(xr)]})]})]})]})]})]}),l.jsxs("div",{className:"space-y-6 pt-6 border-t",children:[l.jsxs("div",{className:"flex items-center gap-2 text-slate-900 font-bold uppercase text-xs tracking-widest",children:[l.jsx(Cv,{size:16})," Logística e Status Final"]}),l.jsxs("div",{className:"bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-6",children:[l.jsx("div",{className:"w-full overflow-x-auto py-2",children:l.jsxs("div",{className:"flex items-center justify-between min-w-[600px] relative px-4",children:[l.jsx("div",{className:"absolute left-4 right-4 top-1/2 -translate-y-1/2 h-0.5 bg-slate-200 z-0"}),l.jsx("div",{className:"absolute left-4 top-1/2 -translate-y-1/2 h-0.5 bg-blue-600 z-0 transition-all duration-500 ease-in-out",style:{width:`${Ui}%`}}),es.map((f,m)=>{const k=m<=wr,P=m===wr,$=Od(f.value);return l.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-3 cursor-pointer group min-w-[80px]",onClick:()=>se({...D,status:f.value,statusDate:new Date().toISOString().split("T")[0]}),children:[l.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-sm ${k?"bg-blue-600 border-blue-600 text-white scale-110":"bg-white border-slate-300 text-slate-300 group-hover:border-blue-300"}`,children:k?l.jsx(Qi,{size:14,strokeWidth:4}):l.jsx("div",{className:"w-2 h-2 rounded-full bg-slate-200"})}),l.jsxs("div",{className:"text-center flex flex-col items-center",children:[l.jsx("span",{className:`text-[10px] font-bold uppercase tracking-wide transition-colors ${P?"text-blue-700":"text-slate-400"}`,children:f.label}),l.jsx("span",{className:`text-[10px] font-medium px-1.5 py-0.5 rounded mt-1 whitespace-nowrap ${$?"bg-white text-slate-600 shadow-sm border border-slate-200":"text-slate-300"}`,children:$||"---"})]})]},m)})]})}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 items-start pt-4 border-t border-slate-200/50",children:[l.jsxs("div",{className:"space-y-1",children:[l.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase",children:"Status Geral (Seleção Manual)"}),l.jsx(yn,{value:D.status,onChange:f=>{se({...D,status:f.target.value,statusDate:new Date().toISOString().split("T")[0]})},options:ts,label:"Status geral"})]}),l.jsxs("div",{className:"space-y-1",children:[l.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase",children:"Data do Status Atual"}),l.jsx("input",{type:"date",className:"w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none font-bold",value:D.statusDate,onChange:f=>se({...D,statusDate:f.target.value})})]})]}),(D.status==="Em orçamento"||D.status==="Aguardando aprovação do orçamento")&&l.jsxs("div",{className:"space-y-1 animate-in fade-in",children:[l.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase",children:"Prazo de Entrega"}),l.jsxs("div",{className:"flex items-center",children:[l.jsx("input",{type:"number",placeholder:"Ex: 7",className:"w-20 p-4 border border-slate-200 rounded-l-2xl outline-none font-bold text-center",value:D.deliveryDeadline,onChange:f=>se({...D,deliveryDeadline:f.target.value})}),l.jsx("div",{className:"p-4 bg-slate-100 border border-slate-200 rounded-r-2xl font-bold text-slate-600",children:"dias úteis"})]}),l.jsx("p",{className:"text-[10px] text-slate-400 mt-1 ml-4",children:"Esta informação será exibida na proposta de orçamento"})]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[D.status!=="Recebido"&&l.jsxs("div",{className:"space-y-1 animate-in fade-in",children:[l.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase",children:"Enviado para Terceiro?"}),l.jsx(yn,{value:D.sentToThirdParty,onChange:f=>se({...D,sentToThirdParty:f.target.value}),options:["Não","Sim"],className:"bg-slate-100 border-none",label:"Enviado para terceiro"})]}),D.status==="Em rota de entrega"&&l.jsxs("div",{className:"space-y-1 animate-in zoom-in-95",children:[l.jsx("label",{className:"text-[10px] font-black text-blue-600 uppercase",children:"Rastreamento"}),l.jsx("input",{placeholder:"Código de Rastreio",className:"w-full p-4 bg-blue-50 border border-blue-100 rounded-2xl outline-none font-bold",value:D.trackingCode,onChange:f=>se({...D,trackingCode:f.target.value})})]})]}),D.sentToThirdParty==="Sim"&&D.status!=="Recebido"&&l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-slate-100 rounded-3xl border border-slate-200 animate-in slide-in-from-top-4",children:[l.jsx("input",{placeholder:"Empresa Terceira",className:"w-full p-3 bg-white border rounded-xl text-sm",value:D.thirdPartyInfo,onChange:f=>se({...D,thirdPartyInfo:f.target.value})}),l.jsx("input",{placeholder:"Rastreio Terceiro",className:"w-full p-3 bg-white border rounded-xl text-sm",value:D.thirdPartyTracking,onChange:f=>se({...D,thirdPartyTracking:f.target.value})}),l.jsx("input",{type:"date",className:"w-full p-3 bg-white border rounded-xl text-sm",value:D.thirdPartyDate,onChange:f=>se({...D,thirdPartyDate:f.target.value})})]})]})]}),l.jsxs("div",{className:"flex flex-col md:flex-row gap-4 pt-10 border-t",children:[l.jsxs("div",{className:"flex gap-2",children:[l.jsx("button",{type:"button",onClick:()=>Ks(!1),className:"px-6 py-5 bg-slate-100 text-slate-600 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-slate-200 transition-colors",children:"Cancelar"}),on&&l.jsxs(l.Fragment,{children:[l.jsx("button",{type:"button",onClick:()=>da("client"),className:"p-5 bg-blue-50 text-blue-600 rounded-2xl hover:bg-blue-100 transition-colors border border-blue-100",title:"Imprimir Relatório do Cliente",children:l.jsx(Ih,{size:20})}),(e==null?void 0:e.role)!=="client"&&l.jsx("button",{type:"button",onClick:()=>da("internal"),className:"p-5 bg-slate-50 text-slate-600 rounded-2xl hover:bg-slate-100 transition-colors border border-slate-200",title:"Imprimir Relatório Interno",children:l.jsx(Cc,{size:20})})]})]}),l.jsxs("div",{className:"flex-1 flex flex-col md:flex-row gap-4",children:[l.jsxs("button",{type:"button",onClick:Dd,disabled:mr,className:"flex-1 bg-indigo-50 text-indigo-700 border-2 border-indigo-100 p-5 rounded-2xl font-black text-xs hover:bg-indigo-100 transition-all flex items-center justify-center gap-3",children:[mr?l.jsx(Yi,{className:"animate-spin",size:18}):l.jsx(m1,{size:18})," NOVA OS COM MESMO CLIENTE"]}),l.jsxs("button",{type:"submit",disabled:mr,className:"flex-1 bg-blue-600 text-white p-5 rounded-2xl font-black text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3",children:[mr?l.jsx(Yi,{className:"animate-spin",size:20}):l.jsx(Gf,{size:20})," SALVAR OS"]})]})]})]})})}),Xe&&l.jsx("div",{className:"fixed inset-0 z-[60]",role:"dialog","aria-modal":"true","aria-labelledby":"contract-modal-title",onClick:f=>{f.target===f.currentTarget&&sn(!1)},children:l.jsx("div",{className:"absolute inset-0 bg-slate-900/60 backdrop-blur-md overflow-y-auto",children:l.jsx("div",{className:"min-h-full flex items-start justify-center p-4 py-8",children:l.jsx("div",{className:"bg-white rounded-[2.5rem] w-full max-w-4xl shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 my-8",ref:o,tabIndex:-1,onKeyDown:f=>{f.key==="Escape"&&sn(!1)},children:l.jsxs("form",{onSubmit:Zl,className:"p-8 space-y-8",children:[l.jsxs("div",{className:"flex justify-between items-center border-b pb-6",children:[l.jsxs("div",{children:[l.jsx("h2",{id:"contract-modal-title",className:"text-2xl font-black text-slate-900 tracking-tight",children:Gr?"Novo Contrato":"Configurar Contrato"}),l.jsx("p",{className:"text-slate-500 text-sm font-medium",children:Gr?"Preencha os dados do cliente e contrato":fe.clientName})]}),l.jsx("button",{type:"button",onClick:()=>sn(!1),className:"p-2 hover:bg-slate-100 rounded-full text-slate-400",children:l.jsx(Ge,{size:20})})]}),l.jsxs("div",{className:"space-y-8",children:[l.jsxs("div",{className:"bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4",children:[l.jsxs("div",{className:"flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-widest mb-2",children:[l.jsx(Uu,{size:16})," Dados do Cliente"]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Nome do Cliente *"}),l.jsx("input",{className:`w-full p-3 border rounded-xl font-bold ${Gr?"bg-white border-slate-200":"bg-slate-100 border-slate-200 cursor-not-allowed"}`,value:fe.clientName,onChange:f=>Gr&&Ue({...fe,clientName:f.target.value}),placeholder:"Nome da Empresa / Hospital",readOnly:!Gr,required:!0})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"CNPJ"}),l.jsx("input",{className:"w-full p-3 bg-white border border-slate-200 rounded-xl font-medium text-sm",value:fe.cnpj,onChange:f=>Ue({...fe,cnpj:f.target.value}),placeholder:"00.000.000/0000-00"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Contato"}),l.jsx("input",{className:"w-full p-3 bg-white border border-slate-200 rounded-xl font-medium text-sm",value:fe.contactPerson,onChange:f=>Ue({...fe,contactPerson:f.target.value}),placeholder:"Nome do Responsável"})]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"E-mail"}),l.jsx("input",{className:"w-full p-3 bg-white border border-slate-200 rounded-xl font-medium text-sm",value:fe.email,onChange:f=>Ue({...fe,email:f.target.value}),placeholder:"financeiro@hospital.com"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Endereço"}),l.jsx("input",{className:"w-full p-3 bg-white border border-slate-200 rounded-xl font-medium text-sm",value:fe.address,onChange:f=>Ue({...fe,address:f.target.value}),placeholder:"Rua, Número, Cidade - UF"})]})]})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Vigência (Início - Fim)"}),l.jsxs("div",{className:"flex gap-2",children:[l.jsx("input",{type:"date",className:"w-full p-3 bg-white border border-slate-200 rounded-xl font-bold text-sm",value:fe.startDate,onChange:f=>Ue({...fe,startDate:f.target.value}),required:!0}),l.jsx("input",{type:"date",className:"w-full p-3 bg-white border border-slate-200 rounded-xl font-bold text-sm",value:fe.endDate,onChange:f=>Ue({...fe,endDate:f.target.value}),required:!0})]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Valor Mensal (R$)"}),l.jsx("input",{className:"w-full p-3 bg-white border border-slate-200 rounded-xl font-black text-slate-800",value:fe.monthlyValue,onChange:f=>{const m=f.target.value,k=Se(m);Ue({...fe,monthlyValue:m,annualValue:(k*12).toLocaleString("pt-BR",{minimumFractionDigits:2})})},placeholder:"0,00"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Valor Anual (Estimado)"}),l.jsx("input",{className:"w-full p-3 bg-blue-50 border border-blue-100 rounded-xl font-black text-blue-600",value:fe.annualValue,onChange:f=>Ue({...fe,annualValue:f.target.value}),placeholder:"0,00"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Observações"}),l.jsx("textarea",{rows:"3",className:"w-full p-3 bg-white border border-slate-200 rounded-xl text-sm resize-none",value:fe.observations,onChange:f=>Ue({...fe,observations:f.target.value}),placeholder:"Detalhes adicionais..."})]})]}),l.jsxs("div",{className:"bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4 h-fit",children:[l.jsxs("div",{className:"flex items-center gap-2 text-indigo-600 font-bold uppercase text-xs tracking-widest mb-2",children:[l.jsx(BA,{size:16})," Itens Cobertos"]}),l.jsxs("div",{className:"space-y-3",children:[l.jsxs("label",{className:"flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 cursor-pointer hover:border-indigo-300 transition-colors",children:[l.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500",checked:fe.coveredItems.videoSurgeryInstruments,onChange:f=>Ue({...fe,coveredItems:{...fe.coveredItems,videoSurgeryInstruments:f.target.checked}})}),l.jsx("span",{className:"text-sm font-bold text-slate-700",children:"Instrumentais de Vídeo Cirurgia"})]}),l.jsxs("label",{className:"flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 cursor-pointer hover:border-indigo-300 transition-colors",children:[l.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500",checked:fe.coveredItems.openInstruments,onChange:f=>Ue({...fe,coveredItems:{...fe.coveredItems,openInstruments:f.target.checked}})}),l.jsx("span",{className:"text-sm font-bold text-slate-700",children:"Instrumentais Abertos"})]}),l.jsxs("label",{className:"flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 cursor-pointer hover:border-indigo-300 transition-colors",children:[l.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500",checked:fe.coveredItems.videoSurgeryEquipment,onChange:f=>Ue({...fe,coveredItems:{...fe.coveredItems,videoSurgeryEquipment:f.target.checked}})}),l.jsx("span",{className:"text-sm font-bold text-slate-700",children:"Equipamentos de Vídeo"})]}),l.jsxs("label",{className:"flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 cursor-pointer hover:border-indigo-300 transition-colors",children:[l.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500",checked:fe.coveredItems.endoscopes,onChange:f=>Ue({...fe,coveredItems:{...fe.coveredItems,endoscopes:f.target.checked}})}),l.jsx("span",{className:"text-sm font-bold text-slate-700",children:"Endoscópios"})]})]})]})]})]}),l.jsxs("div",{className:"pt-4 border-t flex justify-end gap-3",children:[l.jsx("button",{type:"button",onClick:()=>sn(!1),className:"px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-100",children:"Cancelar"}),l.jsxs("button",{type:"submit",disabled:mr,className:"px-8 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700 flex items-center gap-2",children:[mr?l.jsx(Yi,{className:"animate-spin",size:20}):l.jsx(Gf,{size:20}),"Salvar Contrato"]})]})]})})})})}),Wr&&l.jsx("div",{className:"fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[60] flex items-center justify-center p-4",children:l.jsxs("div",{className:"bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-200 text-center space-y-6 animate-in zoom-in-95",children:[l.jsx("div",{className:"bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-red-500 mb-2",children:l.jsx(_l,{size:40})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-2xl font-black text-slate-900",children:"Excluir OS?"}),l.jsxs("p",{className:"text-slate-500 mt-2",children:["Tem certeza que deseja remover permanentemente a OS ",l.jsx("span",{className:"font-bold text-slate-900",children:qn==null?void 0:qn.osNumber}),"?",l.jsx("br",{}),"Essa ação não pode ser desfeita."]})]}),l.jsxs("div",{className:"flex gap-3",children:[l.jsx("button",{onClick:()=>Kr(!1),className:"flex-1 py-4 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-colors",children:"Cancelar"}),l.jsx("button",{onClick:ec,className:"flex-1 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 shadow-xl shadow-red-200 transition-colors",children:"Sim, Excluir"})]})]})}),l.jsx(pR,{isOpen:Yo,onClose:()=>Gs(!1),selectedOrdersCount:pe.length,totalValue:Zo.totalValue,initialData:Zo,onConfirm:ei}),Xr.show&&l.jsx(hR,{message:Xr.message,type:Xr.type,onClose:()=>Vi(f=>({...f,show:!1}))})]}):l.jsx("div",{className:"min-h-screen bg-slate-50 flex items-center justify-center",children:l.jsxs("div",{className:"text-center p-8",children:[l.jsx(Cc,{className:"mx-auto text-red-500 mb-6",size:60}),l.jsx("h2",{className:"text-2xl font-black text-slate-900 mb-2",children:"Acesso Negado"}),l.jsx("p",{className:"text-slate-600 max-w-md mx-auto",children:"Você não tem permissão para acessar esta página. Entre em contato com o administrador do sistema."})]})}):l.jsx(lR,{})}function gR(){return l.jsx(h1,{children:l.jsx(mR,{})})}Sh.createRoot(document.getElementById("root")).render(l.jsx(Bv.StrictMode,{children:l.jsx(h1,{children:l.jsx(gR,{})})}));
