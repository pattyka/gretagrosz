(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();function Pu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ps={exports:{}},pt={},ms={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var al=Symbol.for("react.element"),_u=Symbol.for("react.portal"),Fu=Symbol.for("react.fragment"),Tu=Symbol.for("react.strict_mode"),qu=Symbol.for("react.profiler"),Mu=Symbol.for("react.provider"),Lu=Symbol.for("react.context"),Ru=Symbol.for("react.forward_ref"),Bu=Symbol.for("react.suspense"),Au=Symbol.for("react.memo"),Du=Symbol.for("react.lazy"),Qn=Symbol.iterator;function Iu(e){return e===null||typeof e!="object"?null:(e=Qn&&e[Qn]||e["@@iterator"],typeof e=="function"?e:null)}var fs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hs=Object.assign,gs={};function dr(e,a,r){this.props=e,this.context=a,this.refs=gs,this.updater=r||fs}dr.prototype.isReactComponent={};dr.prototype.setState=function(e,a){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,a,"setState")};dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vs(){}vs.prototype=dr.prototype;function an(e,a,r){this.props=e,this.context=a,this.refs=gs,this.updater=r||fs}var rn=an.prototype=new vs;rn.constructor=an;hs(rn,dr.prototype);rn.isPureReactComponent=!0;var Jn=Array.isArray,bs=Object.prototype.hasOwnProperty,ln={current:null},ys={key:!0,ref:!0,__self:!0,__source:!0};function ks(e,a,r){var l,t={},i=null,n=null;if(a!=null)for(l in a.ref!==void 0&&(n=a.ref),a.key!==void 0&&(i=""+a.key),a)bs.call(a,l)&&!ys.hasOwnProperty(l)&&(t[l]=a[l]);var o=arguments.length-2;if(o===1)t.children=r;else if(1<o){for(var s=Array(o),d=0;d<o;d++)s[d]=arguments[d+2];t.children=s}if(e&&e.defaultProps)for(l in o=e.defaultProps,o)t[l]===void 0&&(t[l]=o[l]);return{$$typeof:al,type:e,key:i,ref:n,props:t,_owner:ln.current}}function Ku(e,a){return{$$typeof:al,type:e.type,key:a,ref:e.ref,props:e.props,_owner:e._owner}}function tn(e){return typeof e=="object"&&e!==null&&e.$$typeof===al}function Hu(e){var a={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return a[r]})}var Yn=/\/+/g;function Tt(e,a){return typeof e=="object"&&e!==null&&e.key!=null?Hu(""+e.key):a.toString(36)}function Cl(e,a,r,l,t){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var n=!1;if(e===null)n=!0;else switch(i){case"string":case"number":n=!0;break;case"object":switch(e.$$typeof){case al:case _u:n=!0}}if(n)return n=e,t=t(n),e=l===""?"."+Tt(n,0):l,Jn(t)?(r="",e!=null&&(r=e.replace(Yn,"$&/")+"/"),Cl(t,a,r,"",function(d){return d})):t!=null&&(tn(t)&&(t=Ku(t,r+(!t.key||n&&n.key===t.key?"":(""+t.key).replace(Yn,"$&/")+"/")+e)),a.push(t)),1;if(n=0,l=l===""?".":l+":",Jn(e))for(var o=0;o<e.length;o++){i=e[o];var s=l+Tt(i,o);n+=Cl(i,a,r,s,t)}else if(s=Iu(e),typeof s=="function")for(e=s.call(e),o=0;!(i=e.next()).done;)i=i.value,s=l+Tt(i,o++),n+=Cl(i,a,r,s,t);else if(i==="object")throw a=String(e),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.");return n}function ul(e,a,r){if(e==null)return e;var l=[],t=0;return Cl(e,l,"","",function(i){return a.call(r,i,t++)}),l}function Ou(e){if(e._status===-1){var a=e._result;a=a(),a.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=a)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},Pl={transition:null},Wu={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:Pl,ReactCurrentOwner:ln};function ws(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:ul,forEach:function(e,a,r){ul(e,function(){a.apply(this,arguments)},r)},count:function(e){var a=0;return ul(e,function(){a++}),a},toArray:function(e){return ul(e,function(a){return a})||[]},only:function(e){if(!tn(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=dr;T.Fragment=Fu;T.Profiler=qu;T.PureComponent=an;T.StrictMode=Tu;T.Suspense=Bu;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wu;T.act=ws;T.cloneElement=function(e,a,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var l=hs({},e.props),t=e.key,i=e.ref,n=e._owner;if(a!=null){if(a.ref!==void 0&&(i=a.ref,n=ln.current),a.key!==void 0&&(t=""+a.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(s in a)bs.call(a,s)&&!ys.hasOwnProperty(s)&&(l[s]=a[s]===void 0&&o!==void 0?o[s]:a[s])}var s=arguments.length-2;if(s===1)l.children=r;else if(1<s){o=Array(s);for(var d=0;d<s;d++)o[d]=arguments[d+2];l.children=o}return{$$typeof:al,type:e.type,key:t,ref:i,props:l,_owner:n}};T.createContext=function(e){return e={$$typeof:Lu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Mu,_context:e},e.Consumer=e};T.createElement=ks;T.createFactory=function(e){var a=ks.bind(null,e);return a.type=e,a};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:Ru,render:e}};T.isValidElement=tn;T.lazy=function(e){return{$$typeof:Du,_payload:{_status:-1,_result:e},_init:Ou}};T.memo=function(e,a){return{$$typeof:Au,type:e,compare:a===void 0?null:a}};T.startTransition=function(e){var a=Pl.transition;Pl.transition={};try{e()}finally{Pl.transition=a}};T.unstable_act=ws;T.useCallback=function(e,a){return se.current.useCallback(e,a)};T.useContext=function(e){return se.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return se.current.useDeferredValue(e)};T.useEffect=function(e,a){return se.current.useEffect(e,a)};T.useId=function(){return se.current.useId()};T.useImperativeHandle=function(e,a,r){return se.current.useImperativeHandle(e,a,r)};T.useInsertionEffect=function(e,a){return se.current.useInsertionEffect(e,a)};T.useLayoutEffect=function(e,a){return se.current.useLayoutEffect(e,a)};T.useMemo=function(e,a){return se.current.useMemo(e,a)};T.useReducer=function(e,a,r){return se.current.useReducer(e,a,r)};T.useRef=function(e){return se.current.useRef(e)};T.useState=function(e){return se.current.useState(e)};T.useSyncExternalStore=function(e,a,r){return se.current.useSyncExternalStore(e,a,r)};T.useTransition=function(){return se.current.useTransition()};T.version="18.3.1";ms.exports=T;var q=ms.exports;const Gu=Pu(q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vu=q,Uu=Symbol.for("react.element"),$u=Symbol.for("react.fragment"),Zu=Object.prototype.hasOwnProperty,Qu=Vu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ju={key:!0,ref:!0,__self:!0,__source:!0};function zs(e,a,r){var l,t={},i=null,n=null;r!==void 0&&(i=""+r),a.key!==void 0&&(i=""+a.key),a.ref!==void 0&&(n=a.ref);for(l in a)Zu.call(a,l)&&!Ju.hasOwnProperty(l)&&(t[l]=a[l]);if(e&&e.defaultProps)for(l in a=e.defaultProps,a)t[l]===void 0&&(t[l]=a[l]);return{$$typeof:Uu,type:e,key:i,ref:n,props:t,_owner:Qu.current}}pt.Fragment=$u;pt.jsx=zs;pt.jsxs=zs;ps.exports=pt;var u=ps.exports,oi={},Ss={exports:{}},ke={},xs={exports:{}},js={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function a(C,E){var x=C.length;C.push(E);e:for(;0<x;){var A=x-1>>>1,U=C[A];if(0<t(U,E))C[A]=E,C[x]=U,x=A;else break e}}function r(C){return C.length===0?null:C[0]}function l(C){if(C.length===0)return null;var E=C[0],x=C.pop();if(x!==E){C[0]=x;e:for(var A=0,U=C.length,sl=U>>>1;A<sl;){var za=2*(A+1)-1,Ft=C[za],Sa=za+1,cl=C[Sa];if(0>t(Ft,x))Sa<U&&0>t(cl,Ft)?(C[A]=cl,C[Sa]=x,A=Sa):(C[A]=Ft,C[za]=x,A=za);else if(Sa<U&&0>t(cl,x))C[A]=cl,C[Sa]=x,A=Sa;else break e}}return E}function t(C,E){var x=C.sortIndex-E.sortIndex;return x!==0?x:C.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var n=Date,o=n.now();e.unstable_now=function(){return n.now()-o}}var s=[],d=[],h=1,g=null,f=3,b=!1,k=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var E=r(d);E!==null;){if(E.callback===null)l(d);else if(E.startTime<=C)l(d),E.sortIndex=E.expirationTime,a(s,E);else break;E=r(d)}}function v(C){if(w=!1,m(C),!k)if(r(s)!==null)k=!0,Ke(z);else{var E=r(d);E!==null&&hr(v,E.startTime-C)}}function z(C,E){k=!1,w&&(w=!1,p(N),N=-1),b=!0;var x=f;try{for(m(E),g=r(s);g!==null&&(!(g.expirationTime>E)||C&&!he());){var A=g.callback;if(typeof A=="function"){g.callback=null,f=g.priorityLevel;var U=A(g.expirationTime<=E);E=e.unstable_now(),typeof U=="function"?g.callback=U:g===r(s)&&l(s),m(E)}else l(s);g=r(s)}if(g!==null)var sl=!0;else{var za=r(d);za!==null&&hr(v,za.startTime-E),sl=!1}return sl}finally{g=null,f=x,b=!1}}var S=!1,j=null,N=-1,L=5,F=-1;function he(){return!(e.unstable_now()-F<L)}function ka(){if(j!==null){var C=e.unstable_now();F=C;var E=!0;try{E=j(!0,C)}finally{E?wa():(S=!1,j=null)}}else S=!1}var wa;if(typeof c=="function")wa=function(){c(ka)};else if(typeof MessageChannel<"u"){var nl=new MessageChannel,ol=nl.port2;nl.port1.onmessage=ka,wa=function(){ol.postMessage(null)}}else wa=function(){_(ka,0)};function Ke(C){j=C,S||(S=!0,wa())}function hr(C,E){N=_(function(){C(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){k||b||(k=!0,Ke(z))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return r(s)},e.unstable_next=function(C){switch(f){case 1:case 2:case 3:var E=3;break;default:E=f}var x=f;f=E;try{return C()}finally{f=x}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,E){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var x=f;f=C;try{return E()}finally{f=x}},e.unstable_scheduleCallback=function(C,E,x){var A=e.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?A+x:A):x=A,C){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=x+U,C={id:h++,callback:E,priorityLevel:C,startTime:x,expirationTime:U,sortIndex:-1},x>A?(C.sortIndex=x,a(d,C),r(s)===null&&C===r(d)&&(w?(p(N),N=-1):w=!0,hr(v,x-A))):(C.sortIndex=U,a(s,C),k||b||(k=!0,Ke(z))),C},e.unstable_shouldYield=he,e.unstable_wrapCallback=function(C){var E=f;return function(){var x=f;f=E;try{return C.apply(this,arguments)}finally{f=x}}}})(js);xs.exports=js;var Yu=xs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xu=q,ye=Yu;function y(e){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Es=new Set,Ar={};function Ba(e,a){tr(e,a),tr(e+"Capture",a)}function tr(e,a){for(Ar[e]=a,e=0;e<a.length;e++)Es.add(a[e])}var Ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),si=Object.prototype.hasOwnProperty,ed=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xn={},eo={};function ad(e){return si.call(eo,e)?!0:si.call(Xn,e)?!1:ed.test(e)?eo[e]=!0:(Xn[e]=!0,!1)}function rd(e,a,r,l){if(r!==null&&r.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return l?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ld(e,a,r,l){if(a===null||typeof a>"u"||rd(e,a,r,l))return!0;if(l)return!1;if(r!==null)switch(r.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function ce(e,a,r,l,t,i,n){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=l,this.attributeNamespace=t,this.mustUseProperty=r,this.propertyName=e,this.type=a,this.sanitizeURL=i,this.removeEmptyString=n}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var a=e[0];ae[a]=new ce(a,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var nn=/[\-:]([a-z])/g;function on(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var a=e.replace(nn,on);ae[a]=new ce(a,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var a=e.replace(nn,on);ae[a]=new ce(a,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var a=e.replace(nn,on);ae[a]=new ce(a,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function sn(e,a,r,l){var t=ae.hasOwnProperty(a)?ae[a]:null;(t!==null?t.type!==0:l||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(ld(a,r,t,l)&&(r=null),l||t===null?ad(a)&&(r===null?e.removeAttribute(a):e.setAttribute(a,""+r)):t.mustUseProperty?e[t.propertyName]=r===null?t.type===3?!1:"":r:(a=t.attributeName,l=t.attributeNamespace,r===null?e.removeAttribute(a):(t=t.type,r=t===3||t===4&&r===!0?"":""+r,l?e.setAttributeNS(l,a,r):e.setAttribute(a,r))))}var Xe=Xu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,dl=Symbol.for("react.element"),Ia=Symbol.for("react.portal"),Ka=Symbol.for("react.fragment"),cn=Symbol.for("react.strict_mode"),ci=Symbol.for("react.profiler"),Ns=Symbol.for("react.provider"),Cs=Symbol.for("react.context"),un=Symbol.for("react.forward_ref"),ui=Symbol.for("react.suspense"),di=Symbol.for("react.suspense_list"),dn=Symbol.for("react.memo"),aa=Symbol.for("react.lazy"),Ps=Symbol.for("react.offscreen"),ao=Symbol.iterator;function gr(e){return e===null||typeof e!="object"?null:(e=ao&&e[ao]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,qt;function xr(e){if(qt===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);qt=a&&a[1]||""}return`
`+qt+e}var Mt=!1;function Lt(e,a){if(!e||Mt)return"";Mt=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(d){var l=d}Reflect.construct(e,[],a)}else{try{a.call()}catch(d){l=d}e.call(a.prototype)}else{try{throw Error()}catch(d){l=d}e()}}catch(d){if(d&&l&&typeof d.stack=="string"){for(var t=d.stack.split(`
`),i=l.stack.split(`
`),n=t.length-1,o=i.length-1;1<=n&&0<=o&&t[n]!==i[o];)o--;for(;1<=n&&0<=o;n--,o--)if(t[n]!==i[o]){if(n!==1||o!==1)do if(n--,o--,0>o||t[n]!==i[o]){var s=`
`+t[n].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=n&&0<=o);break}}}finally{Mt=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?xr(e):""}function td(e){switch(e.tag){case 5:return xr(e.type);case 16:return xr("Lazy");case 13:return xr("Suspense");case 19:return xr("SuspenseList");case 0:case 2:case 15:return e=Lt(e.type,!1),e;case 11:return e=Lt(e.type.render,!1),e;case 1:return e=Lt(e.type,!0),e;default:return""}}function pi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ka:return"Fragment";case Ia:return"Portal";case ci:return"Profiler";case cn:return"StrictMode";case ui:return"Suspense";case di:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cs:return(e.displayName||"Context")+".Consumer";case Ns:return(e._context.displayName||"Context")+".Provider";case un:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dn:return a=e.displayName||null,a!==null?a:pi(e.type)||"Memo";case aa:a=e._payload,e=e._init;try{return pi(e(a))}catch{}}return null}function id(e){var a=e.type;switch(e.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=a.render,e=e.displayName||e.name||"",a.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pi(a);case 8:return a===cn?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function ha(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _s(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function nd(e){var a=_s(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),l=""+e[a];if(!e.hasOwnProperty(a)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var t=r.get,i=r.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return t.call(this)},set:function(n){l=""+n,i.call(this,n)}}),Object.defineProperty(e,a,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(n){l=""+n},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function pl(e){e._valueTracker||(e._valueTracker=nd(e))}function Fs(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var r=a.getValue(),l="";return e&&(l=_s(e)?e.checked?"true":"false":e.value),e=l,e!==r?(a.setValue(e),!0):!1}function Il(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function mi(e,a){var r=a.checked;return W({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function ro(e,a){var r=a.defaultValue==null?"":a.defaultValue,l=a.checked!=null?a.checked:a.defaultChecked;r=ha(a.value!=null?a.value:r),e._wrapperState={initialChecked:l,initialValue:r,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function Ts(e,a){a=a.checked,a!=null&&sn(e,"checked",a,!1)}function fi(e,a){Ts(e,a);var r=ha(a.value),l=a.type;if(r!=null)l==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}a.hasOwnProperty("value")?hi(e,a.type,r):a.hasOwnProperty("defaultValue")&&hi(e,a.type,ha(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(e.defaultChecked=!!a.defaultChecked)}function lo(e,a,r){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var l=a.type;if(!(l!=="submit"&&l!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+e._wrapperState.initialValue,r||a===e.value||(e.value=a),e.defaultValue=a}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function hi(e,a,r){(a!=="number"||Il(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var jr=Array.isArray;function Ya(e,a,r,l){if(e=e.options,a){a={};for(var t=0;t<r.length;t++)a["$"+r[t]]=!0;for(r=0;r<e.length;r++)t=a.hasOwnProperty("$"+e[r].value),e[r].selected!==t&&(e[r].selected=t),t&&l&&(e[r].defaultSelected=!0)}else{for(r=""+ha(r),a=null,t=0;t<e.length;t++){if(e[t].value===r){e[t].selected=!0,l&&(e[t].defaultSelected=!0);return}a!==null||e[t].disabled||(a=e[t])}a!==null&&(a.selected=!0)}}function gi(e,a){if(a.dangerouslySetInnerHTML!=null)throw Error(y(91));return W({},a,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function to(e,a){var r=a.value;if(r==null){if(r=a.children,a=a.defaultValue,r!=null){if(a!=null)throw Error(y(92));if(jr(r)){if(1<r.length)throw Error(y(93));r=r[0]}a=r}a==null&&(a=""),r=a}e._wrapperState={initialValue:ha(r)}}function qs(e,a){var r=ha(a.value),l=ha(a.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),a.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),l!=null&&(e.defaultValue=""+l)}function io(e){var a=e.textContent;a===e._wrapperState.initialValue&&a!==""&&a!==null&&(e.value=a)}function Ms(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vi(e,a){return e==null||e==="http://www.w3.org/1999/xhtml"?Ms(a):e==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ml,Ls=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,r,l,t){MSApp.execUnsafeLocalFunction(function(){return e(a,r,l,t)})}:e}(function(e,a){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=a;else{for(ml=ml||document.createElement("div"),ml.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=ml.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;a.firstChild;)e.appendChild(a.firstChild)}});function Dr(e,a){if(a){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=a;return}}e.textContent=a}var Cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},od=["Webkit","ms","Moz","O"];Object.keys(Cr).forEach(function(e){od.forEach(function(a){a=a+e.charAt(0).toUpperCase()+e.substring(1),Cr[a]=Cr[e]})});function Rs(e,a,r){return a==null||typeof a=="boolean"||a===""?"":r||typeof a!="number"||a===0||Cr.hasOwnProperty(e)&&Cr[e]?(""+a).trim():a+"px"}function Bs(e,a){e=e.style;for(var r in a)if(a.hasOwnProperty(r)){var l=r.indexOf("--")===0,t=Rs(r,a[r],l);r==="float"&&(r="cssFloat"),l?e.setProperty(r,t):e[r]=t}}var sd=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bi(e,a){if(a){if(sd[e]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(y(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(y(61))}if(a.style!=null&&typeof a.style!="object")throw Error(y(62))}}function yi(e,a){if(e.indexOf("-")===-1)return typeof a.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ki=null;function pn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wi=null,Xa=null,er=null;function no(e){if(e=tl(e)){if(typeof wi!="function")throw Error(y(280));var a=e.stateNode;a&&(a=vt(a),wi(e.stateNode,e.type,a))}}function As(e){Xa?er?er.push(e):er=[e]:Xa=e}function Ds(){if(Xa){var e=Xa,a=er;if(er=Xa=null,no(e),a)for(e=0;e<a.length;e++)no(a[e])}}function Is(e,a){return e(a)}function Ks(){}var Rt=!1;function Hs(e,a,r){if(Rt)return e(a,r);Rt=!0;try{return Is(e,a,r)}finally{Rt=!1,(Xa!==null||er!==null)&&(Ks(),Ds())}}function Ir(e,a){var r=e.stateNode;if(r===null)return null;var l=vt(r);if(l===null)return null;r=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(y(231,a,typeof r));return r}var zi=!1;if(Ze)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){zi=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{zi=!1}function cd(e,a,r,l,t,i,n,o,s){var d=Array.prototype.slice.call(arguments,3);try{a.apply(r,d)}catch(h){this.onError(h)}}var Pr=!1,Kl=null,Hl=!1,Si=null,ud={onError:function(e){Pr=!0,Kl=e}};function dd(e,a,r,l,t,i,n,o,s){Pr=!1,Kl=null,cd.apply(ud,arguments)}function pd(e,a,r,l,t,i,n,o,s){if(dd.apply(this,arguments),Pr){if(Pr){var d=Kl;Pr=!1,Kl=null}else throw Error(y(198));Hl||(Hl=!0,Si=d)}}function Aa(e){var a=e,r=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,a.flags&4098&&(r=a.return),e=a.return;while(e)}return a.tag===3?r:null}function Os(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function oo(e){if(Aa(e)!==e)throw Error(y(188))}function md(e){var a=e.alternate;if(!a){if(a=Aa(e),a===null)throw Error(y(188));return a!==e?null:e}for(var r=e,l=a;;){var t=r.return;if(t===null)break;var i=t.alternate;if(i===null){if(l=t.return,l!==null){r=l;continue}break}if(t.child===i.child){for(i=t.child;i;){if(i===r)return oo(t),e;if(i===l)return oo(t),a;i=i.sibling}throw Error(y(188))}if(r.return!==l.return)r=t,l=i;else{for(var n=!1,o=t.child;o;){if(o===r){n=!0,r=t,l=i;break}if(o===l){n=!0,l=t,r=i;break}o=o.sibling}if(!n){for(o=i.child;o;){if(o===r){n=!0,r=i,l=t;break}if(o===l){n=!0,l=i,r=t;break}o=o.sibling}if(!n)throw Error(y(189))}}if(r.alternate!==l)throw Error(y(190))}if(r.tag!==3)throw Error(y(188));return r.stateNode.current===r?e:a}function Ws(e){return e=md(e),e!==null?Gs(e):null}function Gs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var a=Gs(e);if(a!==null)return a;e=e.sibling}return null}var Vs=ye.unstable_scheduleCallback,so=ye.unstable_cancelCallback,fd=ye.unstable_shouldYield,hd=ye.unstable_requestPaint,V=ye.unstable_now,gd=ye.unstable_getCurrentPriorityLevel,mn=ye.unstable_ImmediatePriority,Us=ye.unstable_UserBlockingPriority,Ol=ye.unstable_NormalPriority,vd=ye.unstable_LowPriority,$s=ye.unstable_IdlePriority,mt=null,De=null;function bd(e){if(De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(mt,e,void 0,(e.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:wd,yd=Math.log,kd=Math.LN2;function wd(e){return e>>>=0,e===0?32:31-(yd(e)/kd|0)|0}var fl=64,hl=4194304;function Er(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wl(e,a){var r=e.pendingLanes;if(r===0)return 0;var l=0,t=e.suspendedLanes,i=e.pingedLanes,n=r&268435455;if(n!==0){var o=n&~t;o!==0?l=Er(o):(i&=n,i!==0&&(l=Er(i)))}else n=r&~t,n!==0?l=Er(n):i!==0&&(l=Er(i));if(l===0)return 0;if(a!==0&&a!==l&&!(a&t)&&(t=l&-l,i=a&-a,t>=i||t===16&&(i&4194240)!==0))return a;if(l&4&&(l|=r&16),a=e.entangledLanes,a!==0)for(e=e.entanglements,a&=l;0<a;)r=31-Te(a),t=1<<r,l|=e[r],a&=~t;return l}function zd(e,a){switch(e){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sd(e,a){for(var r=e.suspendedLanes,l=e.pingedLanes,t=e.expirationTimes,i=e.pendingLanes;0<i;){var n=31-Te(i),o=1<<n,s=t[n];s===-1?(!(o&r)||o&l)&&(t[n]=zd(o,a)):s<=a&&(e.expiredLanes|=o),i&=~o}}function xi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zs(){var e=fl;return fl<<=1,!(fl&4194240)&&(fl=64),e}function Bt(e){for(var a=[],r=0;31>r;r++)a.push(e);return a}function rl(e,a,r){e.pendingLanes|=a,a!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,a=31-Te(a),e[a]=r}function xd(e,a){var r=e.pendingLanes&~a;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=a,e.mutableReadLanes&=a,e.entangledLanes&=a,a=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<r;){var t=31-Te(r),i=1<<t;a[t]=0,l[t]=-1,e[t]=-1,r&=~i}}function fn(e,a){var r=e.entangledLanes|=a;for(e=e.entanglements;r;){var l=31-Te(r),t=1<<l;t&a|e[l]&a&&(e[l]|=a),r&=~t}}var R=0;function Qs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Js,hn,Ys,Xs,ec,ji=!1,gl=[],oa=null,sa=null,ca=null,Kr=new Map,Hr=new Map,la=[],jd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function co(e,a){switch(e){case"focusin":case"focusout":oa=null;break;case"dragenter":case"dragleave":sa=null;break;case"mouseover":case"mouseout":ca=null;break;case"pointerover":case"pointerout":Kr.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hr.delete(a.pointerId)}}function br(e,a,r,l,t,i){return e===null||e.nativeEvent!==i?(e={blockedOn:a,domEventName:r,eventSystemFlags:l,nativeEvent:i,targetContainers:[t]},a!==null&&(a=tl(a),a!==null&&hn(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,t!==null&&a.indexOf(t)===-1&&a.push(t),e)}function Ed(e,a,r,l,t){switch(a){case"focusin":return oa=br(oa,e,a,r,l,t),!0;case"dragenter":return sa=br(sa,e,a,r,l,t),!0;case"mouseover":return ca=br(ca,e,a,r,l,t),!0;case"pointerover":var i=t.pointerId;return Kr.set(i,br(Kr.get(i)||null,e,a,r,l,t)),!0;case"gotpointercapture":return i=t.pointerId,Hr.set(i,br(Hr.get(i)||null,e,a,r,l,t)),!0}return!1}function ac(e){var a=Ea(e.target);if(a!==null){var r=Aa(a);if(r!==null){if(a=r.tag,a===13){if(a=Os(r),a!==null){e.blockedOn=a,ec(e.priority,function(){Ys(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _l(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var r=Ei(e.domEventName,e.eventSystemFlags,a[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);ki=l,r.target.dispatchEvent(l),ki=null}else return a=tl(r),a!==null&&hn(a),e.blockedOn=r,!1;a.shift()}return!0}function uo(e,a,r){_l(e)&&r.delete(a)}function Nd(){ji=!1,oa!==null&&_l(oa)&&(oa=null),sa!==null&&_l(sa)&&(sa=null),ca!==null&&_l(ca)&&(ca=null),Kr.forEach(uo),Hr.forEach(uo)}function yr(e,a){e.blockedOn===a&&(e.blockedOn=null,ji||(ji=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,Nd)))}function Or(e){function a(t){return yr(t,e)}if(0<gl.length){yr(gl[0],e);for(var r=1;r<gl.length;r++){var l=gl[r];l.blockedOn===e&&(l.blockedOn=null)}}for(oa!==null&&yr(oa,e),sa!==null&&yr(sa,e),ca!==null&&yr(ca,e),Kr.forEach(a),Hr.forEach(a),r=0;r<la.length;r++)l=la[r],l.blockedOn===e&&(l.blockedOn=null);for(;0<la.length&&(r=la[0],r.blockedOn===null);)ac(r),r.blockedOn===null&&la.shift()}var ar=Xe.ReactCurrentBatchConfig,Gl=!0;function Cd(e,a,r,l){var t=R,i=ar.transition;ar.transition=null;try{R=1,gn(e,a,r,l)}finally{R=t,ar.transition=i}}function Pd(e,a,r,l){var t=R,i=ar.transition;ar.transition=null;try{R=4,gn(e,a,r,l)}finally{R=t,ar.transition=i}}function gn(e,a,r,l){if(Gl){var t=Ei(e,a,r,l);if(t===null)Ut(e,a,l,Vl,r),co(e,l);else if(Ed(t,e,a,r,l))l.stopPropagation();else if(co(e,l),a&4&&-1<jd.indexOf(e)){for(;t!==null;){var i=tl(t);if(i!==null&&Js(i),i=Ei(e,a,r,l),i===null&&Ut(e,a,l,Vl,r),i===t)break;t=i}t!==null&&l.stopPropagation()}else Ut(e,a,l,null,r)}}var Vl=null;function Ei(e,a,r,l){if(Vl=null,e=pn(l),e=Ea(e),e!==null)if(a=Aa(e),a===null)e=null;else if(r=a.tag,r===13){if(e=Os(a),e!==null)return e;e=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null);return Vl=e,null}function rc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gd()){case mn:return 1;case Us:return 4;case Ol:case vd:return 16;case $s:return 536870912;default:return 16}default:return 16}}var ia=null,vn=null,Fl=null;function lc(){if(Fl)return Fl;var e,a=vn,r=a.length,l,t="value"in ia?ia.value:ia.textContent,i=t.length;for(e=0;e<r&&a[e]===t[e];e++);var n=r-e;for(l=1;l<=n&&a[r-l]===t[i-l];l++);return Fl=t.slice(e,1<l?1-l:void 0)}function Tl(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function vl(){return!0}function po(){return!1}function we(e){function a(r,l,t,i,n){this._reactName=r,this._targetInst=t,this.type=l,this.nativeEvent=i,this.target=n,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vl:po,this.isPropagationStopped=po,this}return W(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),a}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bn=we(pr),ll=W({},pr,{view:0,detail:0}),_d=we(ll),At,Dt,kr,ft=W({},ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(At=e.screenX-kr.screenX,Dt=e.screenY-kr.screenY):Dt=At=0,kr=e),At)},movementY:function(e){return"movementY"in e?e.movementY:Dt}}),mo=we(ft),Fd=W({},ft,{dataTransfer:0}),Td=we(Fd),qd=W({},ll,{relatedTarget:0}),It=we(qd),Md=W({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ld=we(Md),Rd=W({},pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bd=we(Rd),Ad=W({},pr,{data:0}),fo=we(Ad),Dd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Id={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hd(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Kd[e])?!!a[e]:!1}function yn(){return Hd}var Od=W({},ll,{key:function(e){if(e.key){var a=Dd[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Id[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yn,charCode:function(e){return e.type==="keypress"?Tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wd=we(Od),Gd=W({},ft,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ho=we(Gd),Vd=W({},ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yn}),Ud=we(Vd),$d=W({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zd=we($d),Qd=W({},ft,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jd=we(Qd),Yd=[9,13,27,32],kn=Ze&&"CompositionEvent"in window,_r=null;Ze&&"documentMode"in document&&(_r=document.documentMode);var Xd=Ze&&"TextEvent"in window&&!_r,tc=Ze&&(!kn||_r&&8<_r&&11>=_r),go=" ",vo=!1;function ic(e,a){switch(e){case"keyup":return Yd.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ha=!1;function ep(e,a){switch(e){case"compositionend":return nc(a);case"keypress":return a.which!==32?null:(vo=!0,go);case"textInput":return e=a.data,e===go&&vo?null:e;default:return null}}function ap(e,a){if(Ha)return e==="compositionend"||!kn&&ic(e,a)?(e=lc(),Fl=vn=ia=null,Ha=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return tc&&a.locale!=="ko"?null:a.data;default:return null}}var rp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bo(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!rp[e.type]:a==="textarea"}function oc(e,a,r,l){As(l),a=Ul(a,"onChange"),0<a.length&&(r=new bn("onChange","change",null,r,l),e.push({event:r,listeners:a}))}var Fr=null,Wr=null;function lp(e){bc(e,0)}function ht(e){var a=Ga(e);if(Fs(a))return e}function tp(e,a){if(e==="change")return a}var sc=!1;if(Ze){var Kt;if(Ze){var Ht="oninput"in document;if(!Ht){var yo=document.createElement("div");yo.setAttribute("oninput","return;"),Ht=typeof yo.oninput=="function"}Kt=Ht}else Kt=!1;sc=Kt&&(!document.documentMode||9<document.documentMode)}function ko(){Fr&&(Fr.detachEvent("onpropertychange",cc),Wr=Fr=null)}function cc(e){if(e.propertyName==="value"&&ht(Wr)){var a=[];oc(a,Wr,e,pn(e)),Hs(lp,a)}}function ip(e,a,r){e==="focusin"?(ko(),Fr=a,Wr=r,Fr.attachEvent("onpropertychange",cc)):e==="focusout"&&ko()}function np(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ht(Wr)}function op(e,a){if(e==="click")return ht(a)}function sp(e,a){if(e==="input"||e==="change")return ht(a)}function cp(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var Me=typeof Object.is=="function"?Object.is:cp;function Gr(e,a){if(Me(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var r=Object.keys(e),l=Object.keys(a);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var t=r[l];if(!si.call(a,t)||!Me(e[t],a[t]))return!1}return!0}function wo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zo(e,a){var r=wo(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=a&&l>=a)return{node:r,offset:a-e};e=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=wo(r)}}function uc(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?uc(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function dc(){for(var e=window,a=Il();a instanceof e.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)e=a.contentWindow;else break;a=Il(e.document)}return a}function wn(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}function up(e){var a=dc(),r=e.focusedElem,l=e.selectionRange;if(a!==r&&r&&r.ownerDocument&&uc(r.ownerDocument.documentElement,r)){if(l!==null&&wn(r)){if(a=l.start,e=l.end,e===void 0&&(e=a),"selectionStart"in r)r.selectionStart=a,r.selectionEnd=Math.min(e,r.value.length);else if(e=(a=r.ownerDocument||document)&&a.defaultView||window,e.getSelection){e=e.getSelection();var t=r.textContent.length,i=Math.min(l.start,t);l=l.end===void 0?i:Math.min(l.end,t),!e.extend&&i>l&&(t=l,l=i,i=t),t=zo(r,i);var n=zo(r,l);t&&n&&(e.rangeCount!==1||e.anchorNode!==t.node||e.anchorOffset!==t.offset||e.focusNode!==n.node||e.focusOffset!==n.offset)&&(a=a.createRange(),a.setStart(t.node,t.offset),e.removeAllRanges(),i>l?(e.addRange(a),e.extend(n.node,n.offset)):(a.setEnd(n.node,n.offset),e.addRange(a)))}}for(a=[],e=r;e=e.parentNode;)e.nodeType===1&&a.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<a.length;r++)e=a[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dp=Ze&&"documentMode"in document&&11>=document.documentMode,Oa=null,Ni=null,Tr=null,Ci=!1;function So(e,a,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ci||Oa==null||Oa!==Il(l)||(l=Oa,"selectionStart"in l&&wn(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Tr&&Gr(Tr,l)||(Tr=l,l=Ul(Ni,"onSelect"),0<l.length&&(a=new bn("onSelect","select",null,a,r),e.push({event:a,listeners:l}),a.target=Oa)))}function bl(e,a){var r={};return r[e.toLowerCase()]=a.toLowerCase(),r["Webkit"+e]="webkit"+a,r["Moz"+e]="moz"+a,r}var Wa={animationend:bl("Animation","AnimationEnd"),animationiteration:bl("Animation","AnimationIteration"),animationstart:bl("Animation","AnimationStart"),transitionend:bl("Transition","TransitionEnd")},Ot={},pc={};Ze&&(pc=document.createElement("div").style,"AnimationEvent"in window||(delete Wa.animationend.animation,delete Wa.animationiteration.animation,delete Wa.animationstart.animation),"TransitionEvent"in window||delete Wa.transitionend.transition);function gt(e){if(Ot[e])return Ot[e];if(!Wa[e])return e;var a=Wa[e],r;for(r in a)if(a.hasOwnProperty(r)&&r in pc)return Ot[e]=a[r];return e}var mc=gt("animationend"),fc=gt("animationiteration"),hc=gt("animationstart"),gc=gt("transitionend"),vc=new Map,xo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function va(e,a){vc.set(e,a),Ba(a,[e])}for(var Wt=0;Wt<xo.length;Wt++){var Gt=xo[Wt],pp=Gt.toLowerCase(),mp=Gt[0].toUpperCase()+Gt.slice(1);va(pp,"on"+mp)}va(mc,"onAnimationEnd");va(fc,"onAnimationIteration");va(hc,"onAnimationStart");va("dblclick","onDoubleClick");va("focusin","onFocus");va("focusout","onBlur");va(gc,"onTransitionEnd");tr("onMouseEnter",["mouseout","mouseover"]);tr("onMouseLeave",["mouseout","mouseover"]);tr("onPointerEnter",["pointerout","pointerover"]);tr("onPointerLeave",["pointerout","pointerover"]);Ba("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ba("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ba("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ba("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ba("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ba("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));function jo(e,a,r){var l=e.type||"unknown-event";e.currentTarget=r,pd(l,a,void 0,e),e.currentTarget=null}function bc(e,a){a=(a&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],t=l.event;l=l.listeners;e:{var i=void 0;if(a)for(var n=l.length-1;0<=n;n--){var o=l[n],s=o.instance,d=o.currentTarget;if(o=o.listener,s!==i&&t.isPropagationStopped())break e;jo(t,o,d),i=s}else for(n=0;n<l.length;n++){if(o=l[n],s=o.instance,d=o.currentTarget,o=o.listener,s!==i&&t.isPropagationStopped())break e;jo(t,o,d),i=s}}}if(Hl)throw e=Si,Hl=!1,Si=null,e}function D(e,a){var r=a[qi];r===void 0&&(r=a[qi]=new Set);var l=e+"__bubble";r.has(l)||(yc(a,e,2,!1),r.add(l))}function Vt(e,a,r){var l=0;a&&(l|=4),yc(r,e,l,a)}var yl="_reactListening"+Math.random().toString(36).slice(2);function Vr(e){if(!e[yl]){e[yl]=!0,Es.forEach(function(r){r!=="selectionchange"&&(fp.has(r)||Vt(r,!1,e),Vt(r,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[yl]||(a[yl]=!0,Vt("selectionchange",!1,a))}}function yc(e,a,r,l){switch(rc(a)){case 1:var t=Cd;break;case 4:t=Pd;break;default:t=gn}r=t.bind(null,a,r,e),t=void 0,!zi||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(t=!0),l?t!==void 0?e.addEventListener(a,r,{capture:!0,passive:t}):e.addEventListener(a,r,!0):t!==void 0?e.addEventListener(a,r,{passive:t}):e.addEventListener(a,r,!1)}function Ut(e,a,r,l,t){var i=l;if(!(a&1)&&!(a&2)&&l!==null)e:for(;;){if(l===null)return;var n=l.tag;if(n===3||n===4){var o=l.stateNode.containerInfo;if(o===t||o.nodeType===8&&o.parentNode===t)break;if(n===4)for(n=l.return;n!==null;){var s=n.tag;if((s===3||s===4)&&(s=n.stateNode.containerInfo,s===t||s.nodeType===8&&s.parentNode===t))return;n=n.return}for(;o!==null;){if(n=Ea(o),n===null)return;if(s=n.tag,s===5||s===6){l=i=n;continue e}o=o.parentNode}}l=l.return}Hs(function(){var d=i,h=pn(r),g=[];e:{var f=vc.get(e);if(f!==void 0){var b=bn,k=e;switch(e){case"keypress":if(Tl(r)===0)break e;case"keydown":case"keyup":b=Wd;break;case"focusin":k="focus",b=It;break;case"focusout":k="blur",b=It;break;case"beforeblur":case"afterblur":b=It;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=mo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Td;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Ud;break;case mc:case fc:case hc:b=Ld;break;case gc:b=Zd;break;case"scroll":b=_d;break;case"wheel":b=Jd;break;case"copy":case"cut":case"paste":b=Bd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=ho}var w=(a&4)!==0,_=!w&&e==="scroll",p=w?f!==null?f+"Capture":null:f;w=[];for(var c=d,m;c!==null;){m=c;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,p!==null&&(v=Ir(c,p),v!=null&&w.push(Ur(c,v,m)))),_)break;c=c.return}0<w.length&&(f=new b(f,k,null,r,h),g.push({event:f,listeners:w}))}}if(!(a&7)){e:{if(f=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",f&&r!==ki&&(k=r.relatedTarget||r.fromElement)&&(Ea(k)||k[Qe]))break e;if((b||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,b?(k=r.relatedTarget||r.toElement,b=d,k=k?Ea(k):null,k!==null&&(_=Aa(k),k!==_||k.tag!==5&&k.tag!==6)&&(k=null)):(b=null,k=d),b!==k)){if(w=mo,v="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=ho,v="onPointerLeave",p="onPointerEnter",c="pointer"),_=b==null?f:Ga(b),m=k==null?f:Ga(k),f=new w(v,c+"leave",b,r,h),f.target=_,f.relatedTarget=m,v=null,Ea(h)===d&&(w=new w(p,c+"enter",k,r,h),w.target=m,w.relatedTarget=_,v=w),_=v,b&&k)a:{for(w=b,p=k,c=0,m=w;m;m=Da(m))c++;for(m=0,v=p;v;v=Da(v))m++;for(;0<c-m;)w=Da(w),c--;for(;0<m-c;)p=Da(p),m--;for(;c--;){if(w===p||p!==null&&w===p.alternate)break a;w=Da(w),p=Da(p)}w=null}else w=null;b!==null&&Eo(g,f,b,w,!1),k!==null&&_!==null&&Eo(g,_,k,w,!0)}}e:{if(f=d?Ga(d):window,b=f.nodeName&&f.nodeName.toLowerCase(),b==="select"||b==="input"&&f.type==="file")var z=tp;else if(bo(f))if(sc)z=sp;else{z=np;var S=ip}else(b=f.nodeName)&&b.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(z=op);if(z&&(z=z(e,d))){oc(g,z,r,h);break e}S&&S(e,f,d),e==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&hi(f,"number",f.value)}switch(S=d?Ga(d):window,e){case"focusin":(bo(S)||S.contentEditable==="true")&&(Oa=S,Ni=d,Tr=null);break;case"focusout":Tr=Ni=Oa=null;break;case"mousedown":Ci=!0;break;case"contextmenu":case"mouseup":case"dragend":Ci=!1,So(g,r,h);break;case"selectionchange":if(dp)break;case"keydown":case"keyup":So(g,r,h)}var j;if(kn)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Ha?ic(e,r)&&(N="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(N="onCompositionStart");N&&(tc&&r.locale!=="ko"&&(Ha||N!=="onCompositionStart"?N==="onCompositionEnd"&&Ha&&(j=lc()):(ia=h,vn="value"in ia?ia.value:ia.textContent,Ha=!0)),S=Ul(d,N),0<S.length&&(N=new fo(N,e,null,r,h),g.push({event:N,listeners:S}),j?N.data=j:(j=nc(r),j!==null&&(N.data=j)))),(j=Xd?ep(e,r):ap(e,r))&&(d=Ul(d,"onBeforeInput"),0<d.length&&(h=new fo("onBeforeInput","beforeinput",null,r,h),g.push({event:h,listeners:d}),h.data=j))}bc(g,a)})}function Ur(e,a,r){return{instance:e,listener:a,currentTarget:r}}function Ul(e,a){for(var r=a+"Capture",l=[];e!==null;){var t=e,i=t.stateNode;t.tag===5&&i!==null&&(t=i,i=Ir(e,r),i!=null&&l.unshift(Ur(e,i,t)),i=Ir(e,a),i!=null&&l.push(Ur(e,i,t))),e=e.return}return l}function Da(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Eo(e,a,r,l,t){for(var i=a._reactName,n=[];r!==null&&r!==l;){var o=r,s=o.alternate,d=o.stateNode;if(s!==null&&s===l)break;o.tag===5&&d!==null&&(o=d,t?(s=Ir(r,i),s!=null&&n.unshift(Ur(r,s,o))):t||(s=Ir(r,i),s!=null&&n.push(Ur(r,s,o)))),r=r.return}n.length!==0&&e.push({event:a,listeners:n})}var hp=/\r\n?/g,gp=/\u0000|\uFFFD/g;function No(e){return(typeof e=="string"?e:""+e).replace(hp,`
`).replace(gp,"")}function kl(e,a,r){if(a=No(a),No(e)!==a&&r)throw Error(y(425))}function $l(){}var Pi=null,_i=null;function Fi(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Ti=typeof setTimeout=="function"?setTimeout:void 0,vp=typeof clearTimeout=="function"?clearTimeout:void 0,Co=typeof Promise=="function"?Promise:void 0,bp=typeof queueMicrotask=="function"?queueMicrotask:typeof Co<"u"?function(e){return Co.resolve(null).then(e).catch(yp)}:Ti;function yp(e){setTimeout(function(){throw e})}function $t(e,a){var r=a,l=0;do{var t=r.nextSibling;if(e.removeChild(r),t&&t.nodeType===8)if(r=t.data,r==="/$"){if(l===0){e.removeChild(t),Or(a);return}l--}else r!=="$"&&r!=="$?"&&r!=="$!"||l++;r=t}while(r);Or(a)}function ua(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return e}function Po(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(a===0)return e;a--}else r==="/$"&&a++}e=e.previousSibling}return null}var mr=Math.random().toString(36).slice(2),Be="__reactFiber$"+mr,$r="__reactProps$"+mr,Qe="__reactContainer$"+mr,qi="__reactEvents$"+mr,kp="__reactListeners$"+mr,wp="__reactHandles$"+mr;function Ea(e){var a=e[Be];if(a)return a;for(var r=e.parentNode;r;){if(a=r[Qe]||r[Be]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(e=Po(e);e!==null;){if(r=e[Be])return r;e=Po(e)}return a}e=r,r=e.parentNode}return null}function tl(e){return e=e[Be]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ga(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function vt(e){return e[$r]||null}var Mi=[],Va=-1;function ba(e){return{current:e}}function I(e){0>Va||(e.current=Mi[Va],Mi[Va]=null,Va--)}function B(e,a){Va++,Mi[Va]=e.current,e.current=a}var ga={},ie=ba(ga),pe=ba(!1),Fa=ga;function ir(e,a){var r=e.type.contextTypes;if(!r)return ga;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===a)return l.__reactInternalMemoizedMaskedChildContext;var t={},i;for(i in r)t[i]=a[i];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=t),t}function me(e){return e=e.childContextTypes,e!=null}function Zl(){I(pe),I(ie)}function _o(e,a,r){if(ie.current!==ga)throw Error(y(168));B(ie,a),B(pe,r)}function kc(e,a,r){var l=e.stateNode;if(a=a.childContextTypes,typeof l.getChildContext!="function")return r;l=l.getChildContext();for(var t in l)if(!(t in a))throw Error(y(108,id(e)||"Unknown",t));return W({},r,l)}function Ql(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ga,Fa=ie.current,B(ie,e),B(pe,pe.current),!0}function Fo(e,a,r){var l=e.stateNode;if(!l)throw Error(y(169));r?(e=kc(e,a,Fa),l.__reactInternalMemoizedMergedChildContext=e,I(pe),I(ie),B(ie,e)):I(pe),B(pe,r)}var Oe=null,bt=!1,Zt=!1;function wc(e){Oe===null?Oe=[e]:Oe.push(e)}function zp(e){bt=!0,wc(e)}function ya(){if(!Zt&&Oe!==null){Zt=!0;var e=0,a=R;try{var r=Oe;for(R=1;e<r.length;e++){var l=r[e];do l=l(!0);while(l!==null)}Oe=null,bt=!1}catch(t){throw Oe!==null&&(Oe=Oe.slice(e+1)),Vs(mn,ya),t}finally{R=a,Zt=!1}}return null}var Ua=[],$a=0,Jl=null,Yl=0,ze=[],Se=0,Ta=null,Ge=1,Ve="";function xa(e,a){Ua[$a++]=Yl,Ua[$a++]=Jl,Jl=e,Yl=a}function zc(e,a,r){ze[Se++]=Ge,ze[Se++]=Ve,ze[Se++]=Ta,Ta=e;var l=Ge;e=Ve;var t=32-Te(l)-1;l&=~(1<<t),r+=1;var i=32-Te(a)+t;if(30<i){var n=t-t%5;i=(l&(1<<n)-1).toString(32),l>>=n,t-=n,Ge=1<<32-Te(a)+t|r<<t|l,Ve=i+e}else Ge=1<<i|r<<t|l,Ve=e}function zn(e){e.return!==null&&(xa(e,1),zc(e,1,0))}function Sn(e){for(;e===Jl;)Jl=Ua[--$a],Ua[$a]=null,Yl=Ua[--$a],Ua[$a]=null;for(;e===Ta;)Ta=ze[--Se],ze[Se]=null,Ve=ze[--Se],ze[Se]=null,Ge=ze[--Se],ze[Se]=null}var be=null,ve=null,K=!1,Fe=null;function Sc(e,a){var r=xe(5,null,null,0);r.elementType="DELETED",r.stateNode=a,r.return=e,a=e.deletions,a===null?(e.deletions=[r],e.flags|=16):a.push(r)}function To(e,a){switch(e.tag){case 5:var r=e.type;return a=a.nodeType!==1||r.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(e.stateNode=a,be=e,ve=ua(a.firstChild),!0):!1;case 6:return a=e.pendingProps===""||a.nodeType!==3?null:a,a!==null?(e.stateNode=a,be=e,ve=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(r=Ta!==null?{id:Ge,overflow:Ve}:null,e.memoizedState={dehydrated:a,treeContext:r,retryLane:1073741824},r=xe(18,null,null,0),r.stateNode=a,r.return=e,e.child=r,be=e,ve=null,!0):!1;default:return!1}}function Li(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ri(e){if(K){var a=ve;if(a){var r=a;if(!To(e,a)){if(Li(e))throw Error(y(418));a=ua(r.nextSibling);var l=be;a&&To(e,a)?Sc(l,r):(e.flags=e.flags&-4097|2,K=!1,be=e)}}else{if(Li(e))throw Error(y(418));e.flags=e.flags&-4097|2,K=!1,be=e}}}function qo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function wl(e){if(e!==be)return!1;if(!K)return qo(e),K=!0,!1;var a;if((a=e.tag!==3)&&!(a=e.tag!==5)&&(a=e.type,a=a!=="head"&&a!=="body"&&!Fi(e.type,e.memoizedProps)),a&&(a=ve)){if(Li(e))throw xc(),Error(y(418));for(;a;)Sc(e,a),a=ua(a.nextSibling)}if(qo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(a===0){ve=ua(e.nextSibling);break e}a--}else r!=="$"&&r!=="$!"&&r!=="$?"||a++}e=e.nextSibling}ve=null}}else ve=be?ua(e.stateNode.nextSibling):null;return!0}function xc(){for(var e=ve;e;)e=ua(e.nextSibling)}function nr(){ve=be=null,K=!1}function xn(e){Fe===null?Fe=[e]:Fe.push(e)}var Sp=Xe.ReactCurrentBatchConfig;function wr(e,a,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(y(309));var l=r.stateNode}if(!l)throw Error(y(147,e));var t=l,i=""+e;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===i?a.ref:(a=function(n){var o=t.refs;n===null?delete o[i]:o[i]=n},a._stringRef=i,a)}if(typeof e!="string")throw Error(y(284));if(!r._owner)throw Error(y(290,e))}return e}function zl(e,a){throw e=Object.prototype.toString.call(a),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e))}function Mo(e){var a=e._init;return a(e._payload)}function jc(e){function a(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function r(p,c){if(!e)return null;for(;c!==null;)a(p,c),c=c.sibling;return null}function l(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function t(p,c){return p=fa(p,c),p.index=0,p.sibling=null,p}function i(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function n(p){return e&&p.alternate===null&&(p.flags|=2),p}function o(p,c,m,v){return c===null||c.tag!==6?(c=ri(m,p.mode,v),c.return=p,c):(c=t(c,m),c.return=p,c)}function s(p,c,m,v){var z=m.type;return z===Ka?h(p,c,m.props.children,v,m.key):c!==null&&(c.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===aa&&Mo(z)===c.type)?(v=t(c,m.props),v.ref=wr(p,c,m),v.return=p,v):(v=Dl(m.type,m.key,m.props,null,p.mode,v),v.ref=wr(p,c,m),v.return=p,v)}function d(p,c,m,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=li(m,p.mode,v),c.return=p,c):(c=t(c,m.children||[]),c.return=p,c)}function h(p,c,m,v,z){return c===null||c.tag!==7?(c=_a(m,p.mode,v,z),c.return=p,c):(c=t(c,m),c.return=p,c)}function g(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ri(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case dl:return m=Dl(c.type,c.key,c.props,null,p.mode,m),m.ref=wr(p,null,c),m.return=p,m;case Ia:return c=li(c,p.mode,m),c.return=p,c;case aa:var v=c._init;return g(p,v(c._payload),m)}if(jr(c)||gr(c))return c=_a(c,p.mode,m,null),c.return=p,c;zl(p,c)}return null}function f(p,c,m,v){var z=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return z!==null?null:o(p,c,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case dl:return m.key===z?s(p,c,m,v):null;case Ia:return m.key===z?d(p,c,m,v):null;case aa:return z=m._init,f(p,c,z(m._payload),v)}if(jr(m)||gr(m))return z!==null?null:h(p,c,m,v,null);zl(p,m)}return null}function b(p,c,m,v,z){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(m)||null,o(c,p,""+v,z);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case dl:return p=p.get(v.key===null?m:v.key)||null,s(c,p,v,z);case Ia:return p=p.get(v.key===null?m:v.key)||null,d(c,p,v,z);case aa:var S=v._init;return b(p,c,m,S(v._payload),z)}if(jr(v)||gr(v))return p=p.get(m)||null,h(c,p,v,z,null);zl(c,v)}return null}function k(p,c,m,v){for(var z=null,S=null,j=c,N=c=0,L=null;j!==null&&N<m.length;N++){j.index>N?(L=j,j=null):L=j.sibling;var F=f(p,j,m[N],v);if(F===null){j===null&&(j=L);break}e&&j&&F.alternate===null&&a(p,j),c=i(F,c,N),S===null?z=F:S.sibling=F,S=F,j=L}if(N===m.length)return r(p,j),K&&xa(p,N),z;if(j===null){for(;N<m.length;N++)j=g(p,m[N],v),j!==null&&(c=i(j,c,N),S===null?z=j:S.sibling=j,S=j);return K&&xa(p,N),z}for(j=l(p,j);N<m.length;N++)L=b(j,p,N,m[N],v),L!==null&&(e&&L.alternate!==null&&j.delete(L.key===null?N:L.key),c=i(L,c,N),S===null?z=L:S.sibling=L,S=L);return e&&j.forEach(function(he){return a(p,he)}),K&&xa(p,N),z}function w(p,c,m,v){var z=gr(m);if(typeof z!="function")throw Error(y(150));if(m=z.call(m),m==null)throw Error(y(151));for(var S=z=null,j=c,N=c=0,L=null,F=m.next();j!==null&&!F.done;N++,F=m.next()){j.index>N?(L=j,j=null):L=j.sibling;var he=f(p,j,F.value,v);if(he===null){j===null&&(j=L);break}e&&j&&he.alternate===null&&a(p,j),c=i(he,c,N),S===null?z=he:S.sibling=he,S=he,j=L}if(F.done)return r(p,j),K&&xa(p,N),z;if(j===null){for(;!F.done;N++,F=m.next())F=g(p,F.value,v),F!==null&&(c=i(F,c,N),S===null?z=F:S.sibling=F,S=F);return K&&xa(p,N),z}for(j=l(p,j);!F.done;N++,F=m.next())F=b(j,p,N,F.value,v),F!==null&&(e&&F.alternate!==null&&j.delete(F.key===null?N:F.key),c=i(F,c,N),S===null?z=F:S.sibling=F,S=F);return e&&j.forEach(function(ka){return a(p,ka)}),K&&xa(p,N),z}function _(p,c,m,v){if(typeof m=="object"&&m!==null&&m.type===Ka&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case dl:e:{for(var z=m.key,S=c;S!==null;){if(S.key===z){if(z=m.type,z===Ka){if(S.tag===7){r(p,S.sibling),c=t(S,m.props.children),c.return=p,p=c;break e}}else if(S.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===aa&&Mo(z)===S.type){r(p,S.sibling),c=t(S,m.props),c.ref=wr(p,S,m),c.return=p,p=c;break e}r(p,S);break}else a(p,S);S=S.sibling}m.type===Ka?(c=_a(m.props.children,p.mode,v,m.key),c.return=p,p=c):(v=Dl(m.type,m.key,m.props,null,p.mode,v),v.ref=wr(p,c,m),v.return=p,p=v)}return n(p);case Ia:e:{for(S=m.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){r(p,c.sibling),c=t(c,m.children||[]),c.return=p,p=c;break e}else{r(p,c);break}else a(p,c);c=c.sibling}c=li(m,p.mode,v),c.return=p,p=c}return n(p);case aa:return S=m._init,_(p,c,S(m._payload),v)}if(jr(m))return k(p,c,m,v);if(gr(m))return w(p,c,m,v);zl(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(r(p,c.sibling),c=t(c,m),c.return=p,p=c):(r(p,c),c=ri(m,p.mode,v),c.return=p,p=c),n(p)):r(p,c)}return _}var or=jc(!0),Ec=jc(!1),Xl=ba(null),et=null,Za=null,jn=null;function En(){jn=Za=et=null}function Nn(e){var a=Xl.current;I(Xl),e._currentValue=a}function Bi(e,a,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===r)break;e=e.return}}function rr(e,a){et=e,jn=Za=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&a&&(de=!0),e.firstContext=null)}function Ee(e){var a=e._currentValue;if(jn!==e)if(e={context:e,memoizedValue:a,next:null},Za===null){if(et===null)throw Error(y(308));Za=e,et.dependencies={lanes:0,firstContext:e}}else Za=Za.next=e;return a}var Na=null;function Cn(e){Na===null?Na=[e]:Na.push(e)}function Nc(e,a,r,l){var t=a.interleaved;return t===null?(r.next=r,Cn(a)):(r.next=t.next,t.next=r),a.interleaved=r,Je(e,l)}function Je(e,a){e.lanes|=a;var r=e.alternate;for(r!==null&&(r.lanes|=a),r=e,e=e.return;e!==null;)e.childLanes|=a,r=e.alternate,r!==null&&(r.childLanes|=a),r=e,e=e.return;return r.tag===3?r.stateNode:null}var ra=!1;function Pn(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cc(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ue(e,a){return{eventTime:e,lane:a,tag:0,payload:null,callback:null,next:null}}function da(e,a,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,M&2){var t=l.pending;return t===null?a.next=a:(a.next=t.next,t.next=a),l.pending=a,Je(e,r)}return t=l.interleaved,t===null?(a.next=a,Cn(l)):(a.next=t.next,t.next=a),l.interleaved=a,Je(e,r)}function ql(e,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194240)!==0)){var l=a.lanes;l&=e.pendingLanes,r|=l,a.lanes=r,fn(e,r)}}function Lo(e,a){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var t=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var n={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?t=i=n:i=i.next=n,r=r.next}while(r!==null);i===null?t=i=a:i=i.next=a}else t=i=a;r={baseState:l.baseState,firstBaseUpdate:t,lastBaseUpdate:i,shared:l.shared,effects:l.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=a:e.next=a,r.lastBaseUpdate=a}function at(e,a,r,l){var t=e.updateQueue;ra=!1;var i=t.firstBaseUpdate,n=t.lastBaseUpdate,o=t.shared.pending;if(o!==null){t.shared.pending=null;var s=o,d=s.next;s.next=null,n===null?i=d:n.next=d,n=s;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==n&&(o===null?h.firstBaseUpdate=d:o.next=d,h.lastBaseUpdate=s))}if(i!==null){var g=t.baseState;n=0,h=d=s=null,o=i;do{var f=o.lane,b=o.eventTime;if((l&f)===f){h!==null&&(h=h.next={eventTime:b,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var k=e,w=o;switch(f=a,b=r,w.tag){case 1:if(k=w.payload,typeof k=="function"){g=k.call(b,g,f);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=w.payload,f=typeof k=="function"?k.call(b,g,f):k,f==null)break e;g=W({},g,f);break e;case 2:ra=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,f=t.effects,f===null?t.effects=[o]:f.push(o))}else b={eventTime:b,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(d=h=b,s=g):h=h.next=b,n|=f;if(o=o.next,o===null){if(o=t.shared.pending,o===null)break;f=o,o=f.next,f.next=null,t.lastBaseUpdate=f,t.shared.pending=null}}while(!0);if(h===null&&(s=g),t.baseState=s,t.firstBaseUpdate=d,t.lastBaseUpdate=h,a=t.shared.interleaved,a!==null){t=a;do n|=t.lane,t=t.next;while(t!==a)}else i===null&&(t.shared.lanes=0);Ma|=n,e.lanes=n,e.memoizedState=g}}function Ro(e,a,r){if(e=a.effects,a.effects=null,e!==null)for(a=0;a<e.length;a++){var l=e[a],t=l.callback;if(t!==null){if(l.callback=null,l=r,typeof t!="function")throw Error(y(191,t));t.call(l)}}}var il={},Ie=ba(il),Zr=ba(il),Qr=ba(il);function Ca(e){if(e===il)throw Error(y(174));return e}function _n(e,a){switch(B(Qr,a),B(Zr,e),B(Ie,il),e=a.nodeType,e){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:vi(null,"");break;default:e=e===8?a.parentNode:a,a=e.namespaceURI||null,e=e.tagName,a=vi(a,e)}I(Ie),B(Ie,a)}function sr(){I(Ie),I(Zr),I(Qr)}function Pc(e){Ca(Qr.current);var a=Ca(Ie.current),r=vi(a,e.type);a!==r&&(B(Zr,e),B(Ie,r))}function Fn(e){Zr.current===e&&(I(Ie),I(Zr))}var H=ba(0);function rt(e){for(var a=e;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Qt=[];function Tn(){for(var e=0;e<Qt.length;e++)Qt[e]._workInProgressVersionPrimary=null;Qt.length=0}var Ml=Xe.ReactCurrentDispatcher,Jt=Xe.ReactCurrentBatchConfig,qa=0,O=null,Z=null,J=null,lt=!1,qr=!1,Jr=0,xp=0;function re(){throw Error(y(321))}function qn(e,a){if(a===null)return!1;for(var r=0;r<a.length&&r<e.length;r++)if(!Me(e[r],a[r]))return!1;return!0}function Mn(e,a,r,l,t,i){if(qa=i,O=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,Ml.current=e===null||e.memoizedState===null?Cp:Pp,e=r(l,t),qr){i=0;do{if(qr=!1,Jr=0,25<=i)throw Error(y(301));i+=1,J=Z=null,a.updateQueue=null,Ml.current=_p,e=r(l,t)}while(qr)}if(Ml.current=tt,a=Z!==null&&Z.next!==null,qa=0,J=Z=O=null,lt=!1,a)throw Error(y(300));return e}function Ln(){var e=Jr!==0;return Jr=0,e}function Re(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?O.memoizedState=J=e:J=J.next=e,J}function Ne(){if(Z===null){var e=O.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var a=J===null?O.memoizedState:J.next;if(a!==null)J=a,Z=e;else{if(e===null)throw Error(y(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},J===null?O.memoizedState=J=e:J=J.next=e}return J}function Yr(e,a){return typeof a=="function"?a(e):a}function Yt(e){var a=Ne(),r=a.queue;if(r===null)throw Error(y(311));r.lastRenderedReducer=e;var l=Z,t=l.baseQueue,i=r.pending;if(i!==null){if(t!==null){var n=t.next;t.next=i.next,i.next=n}l.baseQueue=t=i,r.pending=null}if(t!==null){i=t.next,l=l.baseState;var o=n=null,s=null,d=i;do{var h=d.lane;if((qa&h)===h)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),l=d.hasEagerState?d.eagerState:e(l,d.action);else{var g={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(o=s=g,n=l):s=s.next=g,O.lanes|=h,Ma|=h}d=d.next}while(d!==null&&d!==i);s===null?n=l:s.next=o,Me(l,a.memoizedState)||(de=!0),a.memoizedState=l,a.baseState=n,a.baseQueue=s,r.lastRenderedState=l}if(e=r.interleaved,e!==null){t=e;do i=t.lane,O.lanes|=i,Ma|=i,t=t.next;while(t!==e)}else t===null&&(r.lanes=0);return[a.memoizedState,r.dispatch]}function Xt(e){var a=Ne(),r=a.queue;if(r===null)throw Error(y(311));r.lastRenderedReducer=e;var l=r.dispatch,t=r.pending,i=a.memoizedState;if(t!==null){r.pending=null;var n=t=t.next;do i=e(i,n.action),n=n.next;while(n!==t);Me(i,a.memoizedState)||(de=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),r.lastRenderedState=i}return[i,l]}function _c(){}function Fc(e,a){var r=O,l=Ne(),t=a(),i=!Me(l.memoizedState,t);if(i&&(l.memoizedState=t,de=!0),l=l.queue,Rn(Mc.bind(null,r,l,e),[e]),l.getSnapshot!==a||i||J!==null&&J.memoizedState.tag&1){if(r.flags|=2048,Xr(9,qc.bind(null,r,l,t,a),void 0,null),Y===null)throw Error(y(349));qa&30||Tc(r,a,t)}return t}function Tc(e,a,r){e.flags|=16384,e={getSnapshot:a,value:r},a=O.updateQueue,a===null?(a={lastEffect:null,stores:null},O.updateQueue=a,a.stores=[e]):(r=a.stores,r===null?a.stores=[e]:r.push(e))}function qc(e,a,r,l){a.value=r,a.getSnapshot=l,Lc(a)&&Rc(e)}function Mc(e,a,r){return r(function(){Lc(a)&&Rc(e)})}function Lc(e){var a=e.getSnapshot;e=e.value;try{var r=a();return!Me(e,r)}catch{return!0}}function Rc(e){var a=Je(e,1);a!==null&&qe(a,e,1,-1)}function Bo(e){var a=Re();return typeof e=="function"&&(e=e()),a.memoizedState=a.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:e},a.queue=e,e=e.dispatch=Np.bind(null,O,e),[a.memoizedState,e]}function Xr(e,a,r,l){return e={tag:e,create:a,destroy:r,deps:l,next:null},a=O.updateQueue,a===null?(a={lastEffect:null,stores:null},O.updateQueue=a,a.lastEffect=e.next=e):(r=a.lastEffect,r===null?a.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,a.lastEffect=e)),e}function Bc(){return Ne().memoizedState}function Ll(e,a,r,l){var t=Re();O.flags|=e,t.memoizedState=Xr(1|a,r,void 0,l===void 0?null:l)}function yt(e,a,r,l){var t=Ne();l=l===void 0?null:l;var i=void 0;if(Z!==null){var n=Z.memoizedState;if(i=n.destroy,l!==null&&qn(l,n.deps)){t.memoizedState=Xr(a,r,i,l);return}}O.flags|=e,t.memoizedState=Xr(1|a,r,i,l)}function Ao(e,a){return Ll(8390656,8,e,a)}function Rn(e,a){return yt(2048,8,e,a)}function Ac(e,a){return yt(4,2,e,a)}function Dc(e,a){return yt(4,4,e,a)}function Ic(e,a){if(typeof a=="function")return e=e(),a(e),function(){a(null)};if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Kc(e,a,r){return r=r!=null?r.concat([e]):null,yt(4,4,Ic.bind(null,a,e),r)}function Bn(){}function Hc(e,a){var r=Ne();a=a===void 0?null:a;var l=r.memoizedState;return l!==null&&a!==null&&qn(a,l[1])?l[0]:(r.memoizedState=[e,a],e)}function Oc(e,a){var r=Ne();a=a===void 0?null:a;var l=r.memoizedState;return l!==null&&a!==null&&qn(a,l[1])?l[0]:(e=e(),r.memoizedState=[e,a],e)}function Wc(e,a,r){return qa&21?(Me(r,a)||(r=Zs(),O.lanes|=r,Ma|=r,e.baseState=!0),a):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=r)}function jp(e,a){var r=R;R=r!==0&&4>r?r:4,e(!0);var l=Jt.transition;Jt.transition={};try{e(!1),a()}finally{R=r,Jt.transition=l}}function Gc(){return Ne().memoizedState}function Ep(e,a,r){var l=ma(e);if(r={lane:l,action:r,hasEagerState:!1,eagerState:null,next:null},Vc(e))Uc(a,r);else if(r=Nc(e,a,r,l),r!==null){var t=oe();qe(r,e,l,t),$c(r,a,l)}}function Np(e,a,r){var l=ma(e),t={lane:l,action:r,hasEagerState:!1,eagerState:null,next:null};if(Vc(e))Uc(a,t);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var n=a.lastRenderedState,o=i(n,r);if(t.hasEagerState=!0,t.eagerState=o,Me(o,n)){var s=a.interleaved;s===null?(t.next=t,Cn(a)):(t.next=s.next,s.next=t),a.interleaved=t;return}}catch{}finally{}r=Nc(e,a,t,l),r!==null&&(t=oe(),qe(r,e,l,t),$c(r,a,l))}}function Vc(e){var a=e.alternate;return e===O||a!==null&&a===O}function Uc(e,a){qr=lt=!0;var r=e.pending;r===null?a.next=a:(a.next=r.next,r.next=a),e.pending=a}function $c(e,a,r){if(r&4194240){var l=a.lanes;l&=e.pendingLanes,r|=l,a.lanes=r,fn(e,r)}}var tt={readContext:Ee,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},Cp={readContext:Ee,useCallback:function(e,a){return Re().memoizedState=[e,a===void 0?null:a],e},useContext:Ee,useEffect:Ao,useImperativeHandle:function(e,a,r){return r=r!=null?r.concat([e]):null,Ll(4194308,4,Ic.bind(null,a,e),r)},useLayoutEffect:function(e,a){return Ll(4194308,4,e,a)},useInsertionEffect:function(e,a){return Ll(4,2,e,a)},useMemo:function(e,a){var r=Re();return a=a===void 0?null:a,e=e(),r.memoizedState=[e,a],e},useReducer:function(e,a,r){var l=Re();return a=r!==void 0?r(a):a,l.memoizedState=l.baseState=a,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},l.queue=e,e=e.dispatch=Ep.bind(null,O,e),[l.memoizedState,e]},useRef:function(e){var a=Re();return e={current:e},a.memoizedState=e},useState:Bo,useDebugValue:Bn,useDeferredValue:function(e){return Re().memoizedState=e},useTransition:function(){var e=Bo(!1),a=e[0];return e=jp.bind(null,e[1]),Re().memoizedState=e,[a,e]},useMutableSource:function(){},useSyncExternalStore:function(e,a,r){var l=O,t=Re();if(K){if(r===void 0)throw Error(y(407));r=r()}else{if(r=a(),Y===null)throw Error(y(349));qa&30||Tc(l,a,r)}t.memoizedState=r;var i={value:r,getSnapshot:a};return t.queue=i,Ao(Mc.bind(null,l,i,e),[e]),l.flags|=2048,Xr(9,qc.bind(null,l,i,r,a),void 0,null),r},useId:function(){var e=Re(),a=Y.identifierPrefix;if(K){var r=Ve,l=Ge;r=(l&~(1<<32-Te(l)-1)).toString(32)+r,a=":"+a+"R"+r,r=Jr++,0<r&&(a+="H"+r.toString(32)),a+=":"}else r=xp++,a=":"+a+"r"+r.toString(32)+":";return e.memoizedState=a},unstable_isNewReconciler:!1},Pp={readContext:Ee,useCallback:Hc,useContext:Ee,useEffect:Rn,useImperativeHandle:Kc,useInsertionEffect:Ac,useLayoutEffect:Dc,useMemo:Oc,useReducer:Yt,useRef:Bc,useState:function(){return Yt(Yr)},useDebugValue:Bn,useDeferredValue:function(e){var a=Ne();return Wc(a,Z.memoizedState,e)},useTransition:function(){var e=Yt(Yr)[0],a=Ne().memoizedState;return[e,a]},useMutableSource:_c,useSyncExternalStore:Fc,useId:Gc,unstable_isNewReconciler:!1},_p={readContext:Ee,useCallback:Hc,useContext:Ee,useEffect:Rn,useImperativeHandle:Kc,useInsertionEffect:Ac,useLayoutEffect:Dc,useMemo:Oc,useReducer:Xt,useRef:Bc,useState:function(){return Xt(Yr)},useDebugValue:Bn,useDeferredValue:function(e){var a=Ne();return Z===null?a.memoizedState=e:Wc(a,Z.memoizedState,e)},useTransition:function(){var e=Xt(Yr)[0],a=Ne().memoizedState;return[e,a]},useMutableSource:_c,useSyncExternalStore:Fc,useId:Gc,unstable_isNewReconciler:!1};function Pe(e,a){if(e&&e.defaultProps){a=W({},a),e=e.defaultProps;for(var r in e)a[r]===void 0&&(a[r]=e[r]);return a}return a}function Ai(e,a,r,l){a=e.memoizedState,r=r(l,a),r=r==null?a:W({},a,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var kt={isMounted:function(e){return(e=e._reactInternals)?Aa(e)===e:!1},enqueueSetState:function(e,a,r){e=e._reactInternals;var l=oe(),t=ma(e),i=Ue(l,t);i.payload=a,r!=null&&(i.callback=r),a=da(e,i,t),a!==null&&(qe(a,e,t,l),ql(a,e,t))},enqueueReplaceState:function(e,a,r){e=e._reactInternals;var l=oe(),t=ma(e),i=Ue(l,t);i.tag=1,i.payload=a,r!=null&&(i.callback=r),a=da(e,i,t),a!==null&&(qe(a,e,t,l),ql(a,e,t))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var r=oe(),l=ma(e),t=Ue(r,l);t.tag=2,a!=null&&(t.callback=a),a=da(e,t,l),a!==null&&(qe(a,e,l,r),ql(a,e,l))}};function Do(e,a,r,l,t,i,n){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,n):a.prototype&&a.prototype.isPureReactComponent?!Gr(r,l)||!Gr(t,i):!0}function Zc(e,a,r){var l=!1,t=ga,i=a.contextType;return typeof i=="object"&&i!==null?i=Ee(i):(t=me(a)?Fa:ie.current,l=a.contextTypes,i=(l=l!=null)?ir(e,t):ga),a=new a(r,i),e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=kt,e.stateNode=a,a._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),a}function Io(e,a,r,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,l),a.state!==e&&kt.enqueueReplaceState(a,a.state,null)}function Di(e,a,r,l){var t=e.stateNode;t.props=r,t.state=e.memoizedState,t.refs={},Pn(e);var i=a.contextType;typeof i=="object"&&i!==null?t.context=Ee(i):(i=me(a)?Fa:ie.current,t.context=ir(e,i)),t.state=e.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(Ai(e,a,i,r),t.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof t.getSnapshotBeforeUpdate=="function"||typeof t.UNSAFE_componentWillMount!="function"&&typeof t.componentWillMount!="function"||(a=t.state,typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),a!==t.state&&kt.enqueueReplaceState(t,t.state,null),at(e,r,t,l),t.state=e.memoizedState),typeof t.componentDidMount=="function"&&(e.flags|=4194308)}function cr(e,a){try{var r="",l=a;do r+=td(l),l=l.return;while(l);var t=r}catch(i){t=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:a,stack:t,digest:null}}function ei(e,a,r){return{value:e,source:null,stack:r??null,digest:a??null}}function Ii(e,a){try{console.error(a.value)}catch(r){setTimeout(function(){throw r})}}var Fp=typeof WeakMap=="function"?WeakMap:Map;function Qc(e,a,r){r=Ue(-1,r),r.tag=3,r.payload={element:null};var l=a.value;return r.callback=function(){nt||(nt=!0,Qi=l),Ii(e,a)},r}function Jc(e,a,r){r=Ue(-1,r),r.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var t=a.value;r.payload=function(){return l(t)},r.callback=function(){Ii(e,a)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Ii(e,a),typeof l!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var n=a.stack;this.componentDidCatch(a.value,{componentStack:n!==null?n:""})}),r}function Ko(e,a,r){var l=e.pingCache;if(l===null){l=e.pingCache=new Fp;var t=new Set;l.set(a,t)}else t=l.get(a),t===void 0&&(t=new Set,l.set(a,t));t.has(r)||(t.add(r),e=Gp.bind(null,e,a,r),a.then(e,e))}function Ho(e){do{var a;if((a=e.tag===13)&&(a=e.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return e;e=e.return}while(e!==null);return null}function Oo(e,a,r,l,t){return e.mode&1?(e.flags|=65536,e.lanes=t,e):(e===a?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(a=Ue(-1,1),a.tag=2,da(r,a,1))),r.lanes|=1),e)}var Tp=Xe.ReactCurrentOwner,de=!1;function ne(e,a,r,l){a.child=e===null?Ec(a,null,r,l):or(a,e.child,r,l)}function Wo(e,a,r,l,t){r=r.render;var i=a.ref;return rr(a,t),l=Mn(e,a,r,l,i,t),r=Ln(),e!==null&&!de?(a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t,Ye(e,a,t)):(K&&r&&zn(a),a.flags|=1,ne(e,a,l,t),a.child)}function Go(e,a,r,l,t){if(e===null){var i=r.type;return typeof i=="function"&&!Gn(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(a.tag=15,a.type=i,Yc(e,a,i,l,t)):(e=Dl(r.type,null,l,a,a.mode,t),e.ref=a.ref,e.return=a,a.child=e)}if(i=e.child,!(e.lanes&t)){var n=i.memoizedProps;if(r=r.compare,r=r!==null?r:Gr,r(n,l)&&e.ref===a.ref)return Ye(e,a,t)}return a.flags|=1,e=fa(i,l),e.ref=a.ref,e.return=a,a.child=e}function Yc(e,a,r,l,t){if(e!==null){var i=e.memoizedProps;if(Gr(i,l)&&e.ref===a.ref)if(de=!1,a.pendingProps=l=i,(e.lanes&t)!==0)e.flags&131072&&(de=!0);else return a.lanes=e.lanes,Ye(e,a,t)}return Ki(e,a,r,l,t)}function Xc(e,a,r){var l=a.pendingProps,t=l.children,i=e!==null?e.memoizedState:null;if(l.mode==="hidden")if(!(a.mode&1))a.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Ja,ge),ge|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:e,cachePool:null,transitions:null},a.updateQueue=null,B(Ja,ge),ge|=e,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=i!==null?i.baseLanes:r,B(Ja,ge),ge|=l}else i!==null?(l=i.baseLanes|r,a.memoizedState=null):l=r,B(Ja,ge),ge|=l;return ne(e,a,t,r),a.child}function eu(e,a){var r=a.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(a.flags|=512,a.flags|=2097152)}function Ki(e,a,r,l,t){var i=me(r)?Fa:ie.current;return i=ir(a,i),rr(a,t),r=Mn(e,a,r,l,i,t),l=Ln(),e!==null&&!de?(a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t,Ye(e,a,t)):(K&&l&&zn(a),a.flags|=1,ne(e,a,r,t),a.child)}function Vo(e,a,r,l,t){if(me(r)){var i=!0;Ql(a)}else i=!1;if(rr(a,t),a.stateNode===null)Rl(e,a),Zc(a,r,l),Di(a,r,l,t),l=!0;else if(e===null){var n=a.stateNode,o=a.memoizedProps;n.props=o;var s=n.context,d=r.contextType;typeof d=="object"&&d!==null?d=Ee(d):(d=me(r)?Fa:ie.current,d=ir(a,d));var h=r.getDerivedStateFromProps,g=typeof h=="function"||typeof n.getSnapshotBeforeUpdate=="function";g||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o!==l||s!==d)&&Io(a,n,l,d),ra=!1;var f=a.memoizedState;n.state=f,at(a,l,n,t),s=a.memoizedState,o!==l||f!==s||pe.current||ra?(typeof h=="function"&&(Ai(a,r,h,l),s=a.memoizedState),(o=ra||Do(a,r,o,l,f,s,d))?(g||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(a.flags|=4194308)):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=s),n.props=l,n.state=s,n.context=d,l=o):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{n=a.stateNode,Cc(e,a),o=a.memoizedProps,d=a.type===a.elementType?o:Pe(a.type,o),n.props=d,g=a.pendingProps,f=n.context,s=r.contextType,typeof s=="object"&&s!==null?s=Ee(s):(s=me(r)?Fa:ie.current,s=ir(a,s));var b=r.getDerivedStateFromProps;(h=typeof b=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o!==g||f!==s)&&Io(a,n,l,s),ra=!1,f=a.memoizedState,n.state=f,at(a,l,n,t);var k=a.memoizedState;o!==g||f!==k||pe.current||ra?(typeof b=="function"&&(Ai(a,r,b,l),k=a.memoizedState),(d=ra||Do(a,r,d,l,f,k,s)||!1)?(h||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(l,k,s),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(l,k,s)),typeof n.componentDidUpdate=="function"&&(a.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof n.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=k),n.props=l,n.state=k,n.context=s,l=d):(typeof n.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(a.flags|=1024),l=!1)}return Hi(e,a,r,l,i,t)}function Hi(e,a,r,l,t,i){eu(e,a);var n=(a.flags&128)!==0;if(!l&&!n)return t&&Fo(a,r,!1),Ye(e,a,i);l=a.stateNode,Tp.current=a;var o=n&&typeof r.getDerivedStateFromError!="function"?null:l.render();return a.flags|=1,e!==null&&n?(a.child=or(a,e.child,null,i),a.child=or(a,null,o,i)):ne(e,a,o,i),a.memoizedState=l.state,t&&Fo(a,r,!0),a.child}function au(e){var a=e.stateNode;a.pendingContext?_o(e,a.pendingContext,a.pendingContext!==a.context):a.context&&_o(e,a.context,!1),_n(e,a.containerInfo)}function Uo(e,a,r,l,t){return nr(),xn(t),a.flags|=256,ne(e,a,r,l),a.child}var Oi={dehydrated:null,treeContext:null,retryLane:0};function Wi(e){return{baseLanes:e,cachePool:null,transitions:null}}function ru(e,a,r){var l=a.pendingProps,t=H.current,i=!1,n=(a.flags&128)!==0,o;if((o=n)||(o=e!==null&&e.memoizedState===null?!1:(t&2)!==0),o?(i=!0,a.flags&=-129):(e===null||e.memoizedState!==null)&&(t|=1),B(H,t&1),e===null)return Ri(a),e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(a.mode&1?e.data==="$!"?a.lanes=8:a.lanes=1073741824:a.lanes=1,null):(n=l.children,e=l.fallback,i?(l=a.mode,i=a.child,n={mode:"hidden",children:n},!(l&1)&&i!==null?(i.childLanes=0,i.pendingProps=n):i=St(n,l,0,null),e=_a(e,l,r,null),i.return=a,e.return=a,i.sibling=e,a.child=i,a.child.memoizedState=Wi(r),a.memoizedState=Oi,e):An(a,n));if(t=e.memoizedState,t!==null&&(o=t.dehydrated,o!==null))return qp(e,a,n,l,o,t,r);if(i){i=l.fallback,n=a.mode,t=e.child,o=t.sibling;var s={mode:"hidden",children:l.children};return!(n&1)&&a.child!==t?(l=a.child,l.childLanes=0,l.pendingProps=s,a.deletions=null):(l=fa(t,s),l.subtreeFlags=t.subtreeFlags&14680064),o!==null?i=fa(o,i):(i=_a(i,n,r,null),i.flags|=2),i.return=a,l.return=a,l.sibling=i,a.child=l,l=i,i=a.child,n=e.child.memoizedState,n=n===null?Wi(r):{baseLanes:n.baseLanes|r,cachePool:null,transitions:n.transitions},i.memoizedState=n,i.childLanes=e.childLanes&~r,a.memoizedState=Oi,l}return i=e.child,e=i.sibling,l=fa(i,{mode:"visible",children:l.children}),!(a.mode&1)&&(l.lanes=r),l.return=a,l.sibling=null,e!==null&&(r=a.deletions,r===null?(a.deletions=[e],a.flags|=16):r.push(e)),a.child=l,a.memoizedState=null,l}function An(e,a){return a=St({mode:"visible",children:a},e.mode,0,null),a.return=e,e.child=a}function Sl(e,a,r,l){return l!==null&&xn(l),or(a,e.child,null,r),e=An(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function qp(e,a,r,l,t,i,n){if(r)return a.flags&256?(a.flags&=-257,l=ei(Error(y(422))),Sl(e,a,n,l)):a.memoizedState!==null?(a.child=e.child,a.flags|=128,null):(i=l.fallback,t=a.mode,l=St({mode:"visible",children:l.children},t,0,null),i=_a(i,t,n,null),i.flags|=2,l.return=a,i.return=a,l.sibling=i,a.child=l,a.mode&1&&or(a,e.child,null,n),a.child.memoizedState=Wi(n),a.memoizedState=Oi,i);if(!(a.mode&1))return Sl(e,a,n,null);if(t.data==="$!"){if(l=t.nextSibling&&t.nextSibling.dataset,l)var o=l.dgst;return l=o,i=Error(y(419)),l=ei(i,l,void 0),Sl(e,a,n,l)}if(o=(n&e.childLanes)!==0,de||o){if(l=Y,l!==null){switch(n&-n){case 4:t=2;break;case 16:t=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:t=32;break;case 536870912:t=268435456;break;default:t=0}t=t&(l.suspendedLanes|n)?0:t,t!==0&&t!==i.retryLane&&(i.retryLane=t,Je(e,t),qe(l,e,t,-1))}return Wn(),l=ei(Error(y(421))),Sl(e,a,n,l)}return t.data==="$?"?(a.flags|=128,a.child=e.child,a=Vp.bind(null,e),t._reactRetry=a,null):(e=i.treeContext,ve=ua(t.nextSibling),be=a,K=!0,Fe=null,e!==null&&(ze[Se++]=Ge,ze[Se++]=Ve,ze[Se++]=Ta,Ge=e.id,Ve=e.overflow,Ta=a),a=An(a,l.children),a.flags|=4096,a)}function $o(e,a,r){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),Bi(e.return,a,r)}function ai(e,a,r,l,t){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:t}:(i.isBackwards=a,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=r,i.tailMode=t)}function lu(e,a,r){var l=a.pendingProps,t=l.revealOrder,i=l.tail;if(ne(e,a,l.children,r),l=H.current,l&2)l=l&1|2,a.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$o(e,r,a);else if(e.tag===19)$o(e,r,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(B(H,l),!(a.mode&1))a.memoizedState=null;else switch(t){case"forwards":for(r=a.child,t=null;r!==null;)e=r.alternate,e!==null&&rt(e)===null&&(t=r),r=r.sibling;r=t,r===null?(t=a.child,a.child=null):(t=r.sibling,r.sibling=null),ai(a,!1,t,r,i);break;case"backwards":for(r=null,t=a.child,a.child=null;t!==null;){if(e=t.alternate,e!==null&&rt(e)===null){a.child=t;break}e=t.sibling,t.sibling=r,r=t,t=e}ai(a,!0,r,null,i);break;case"together":ai(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Rl(e,a){!(a.mode&1)&&e!==null&&(e.alternate=null,a.alternate=null,a.flags|=2)}function Ye(e,a,r){if(e!==null&&(a.dependencies=e.dependencies),Ma|=a.lanes,!(r&a.childLanes))return null;if(e!==null&&a.child!==e.child)throw Error(y(153));if(a.child!==null){for(e=a.child,r=fa(e,e.pendingProps),a.child=r,r.return=a;e.sibling!==null;)e=e.sibling,r=r.sibling=fa(e,e.pendingProps),r.return=a;r.sibling=null}return a.child}function Mp(e,a,r){switch(a.tag){case 3:au(a),nr();break;case 5:Pc(a);break;case 1:me(a.type)&&Ql(a);break;case 4:_n(a,a.stateNode.containerInfo);break;case 10:var l=a.type._context,t=a.memoizedProps.value;B(Xl,l._currentValue),l._currentValue=t;break;case 13:if(l=a.memoizedState,l!==null)return l.dehydrated!==null?(B(H,H.current&1),a.flags|=128,null):r&a.child.childLanes?ru(e,a,r):(B(H,H.current&1),e=Ye(e,a,r),e!==null?e.sibling:null);B(H,H.current&1);break;case 19:if(l=(r&a.childLanes)!==0,e.flags&128){if(l)return lu(e,a,r);a.flags|=128}if(t=a.memoizedState,t!==null&&(t.rendering=null,t.tail=null,t.lastEffect=null),B(H,H.current),l)break;return null;case 22:case 23:return a.lanes=0,Xc(e,a,r)}return Ye(e,a,r)}var tu,Gi,iu,nu;tu=function(e,a){for(var r=a.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break;for(;r.sibling===null;){if(r.return===null||r.return===a)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Gi=function(){};iu=function(e,a,r,l){var t=e.memoizedProps;if(t!==l){e=a.stateNode,Ca(Ie.current);var i=null;switch(r){case"input":t=mi(e,t),l=mi(e,l),i=[];break;case"select":t=W({},t,{value:void 0}),l=W({},l,{value:void 0}),i=[];break;case"textarea":t=gi(e,t),l=gi(e,l),i=[];break;default:typeof t.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=$l)}bi(r,l);var n;r=null;for(d in t)if(!l.hasOwnProperty(d)&&t.hasOwnProperty(d)&&t[d]!=null)if(d==="style"){var o=t[d];for(n in o)o.hasOwnProperty(n)&&(r||(r={}),r[n]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ar.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in l){var s=l[d];if(o=t!=null?t[d]:void 0,l.hasOwnProperty(d)&&s!==o&&(s!=null||o!=null))if(d==="style")if(o){for(n in o)!o.hasOwnProperty(n)||s&&s.hasOwnProperty(n)||(r||(r={}),r[n]="");for(n in s)s.hasOwnProperty(n)&&o[n]!==s[n]&&(r||(r={}),r[n]=s[n])}else r||(i||(i=[]),i.push(d,r)),r=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,o=o?o.__html:void 0,s!=null&&o!==s&&(i=i||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ar.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&D("scroll",e),i||o===s||(i=[])):(i=i||[]).push(d,s))}r&&(i=i||[]).push("style",r);var d=i;(a.updateQueue=d)&&(a.flags|=4)}};nu=function(e,a,r,l){r!==l&&(a.flags|=4)};function zr(e,a){if(!K)switch(e.tailMode){case"hidden":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function le(e){var a=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(a)for(var t=e.child;t!==null;)r|=t.lanes|t.childLanes,l|=t.subtreeFlags&14680064,l|=t.flags&14680064,t.return=e,t=t.sibling;else for(t=e.child;t!==null;)r|=t.lanes|t.childLanes,l|=t.subtreeFlags,l|=t.flags,t.return=e,t=t.sibling;return e.subtreeFlags|=l,e.childLanes=r,a}function Lp(e,a,r){var l=a.pendingProps;switch(Sn(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(a),null;case 1:return me(a.type)&&Zl(),le(a),null;case 3:return l=a.stateNode,sr(),I(pe),I(ie),Tn(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(wl(a)?a.flags|=4:e===null||e.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,Fe!==null&&(Xi(Fe),Fe=null))),Gi(e,a),le(a),null;case 5:Fn(a);var t=Ca(Qr.current);if(r=a.type,e!==null&&a.stateNode!=null)iu(e,a,r,l,t),e.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!l){if(a.stateNode===null)throw Error(y(166));return le(a),null}if(e=Ca(Ie.current),wl(a)){l=a.stateNode,r=a.type;var i=a.memoizedProps;switch(l[Be]=a,l[$r]=i,e=(a.mode&1)!==0,r){case"dialog":D("cancel",l),D("close",l);break;case"iframe":case"object":case"embed":D("load",l);break;case"video":case"audio":for(t=0;t<Nr.length;t++)D(Nr[t],l);break;case"source":D("error",l);break;case"img":case"image":case"link":D("error",l),D("load",l);break;case"details":D("toggle",l);break;case"input":ro(l,i),D("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!i.multiple},D("invalid",l);break;case"textarea":to(l,i),D("invalid",l)}bi(r,i),t=null;for(var n in i)if(i.hasOwnProperty(n)){var o=i[n];n==="children"?typeof o=="string"?l.textContent!==o&&(i.suppressHydrationWarning!==!0&&kl(l.textContent,o,e),t=["children",o]):typeof o=="number"&&l.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&kl(l.textContent,o,e),t=["children",""+o]):Ar.hasOwnProperty(n)&&o!=null&&n==="onScroll"&&D("scroll",l)}switch(r){case"input":pl(l),lo(l,i,!0);break;case"textarea":pl(l),io(l);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(l.onclick=$l)}l=t,a.updateQueue=l,l!==null&&(a.flags|=4)}else{n=t.nodeType===9?t:t.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ms(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=n.createElement(r,{is:l.is}):(e=n.createElement(r),r==="select"&&(n=e,l.multiple?n.multiple=!0:l.size&&(n.size=l.size))):e=n.createElementNS(e,r),e[Be]=a,e[$r]=l,tu(e,a,!1,!1),a.stateNode=e;e:{switch(n=yi(r,l),r){case"dialog":D("cancel",e),D("close",e),t=l;break;case"iframe":case"object":case"embed":D("load",e),t=l;break;case"video":case"audio":for(t=0;t<Nr.length;t++)D(Nr[t],e);t=l;break;case"source":D("error",e),t=l;break;case"img":case"image":case"link":D("error",e),D("load",e),t=l;break;case"details":D("toggle",e),t=l;break;case"input":ro(e,l),t=mi(e,l),D("invalid",e);break;case"option":t=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},t=W({},l,{value:void 0}),D("invalid",e);break;case"textarea":to(e,l),t=gi(e,l),D("invalid",e);break;default:t=l}bi(r,t),o=t;for(i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="style"?Bs(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ls(e,s)):i==="children"?typeof s=="string"?(r!=="textarea"||s!=="")&&Dr(e,s):typeof s=="number"&&Dr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ar.hasOwnProperty(i)?s!=null&&i==="onScroll"&&D("scroll",e):s!=null&&sn(e,i,s,n))}switch(r){case"input":pl(e),lo(e,l,!1);break;case"textarea":pl(e),io(e);break;case"option":l.value!=null&&e.setAttribute("value",""+ha(l.value));break;case"select":e.multiple=!!l.multiple,i=l.value,i!=null?Ya(e,!!l.multiple,i,!1):l.defaultValue!=null&&Ya(e,!!l.multiple,l.defaultValue,!0);break;default:typeof t.onClick=="function"&&(e.onclick=$l)}switch(r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return le(a),null;case 6:if(e&&a.stateNode!=null)nu(e,a,e.memoizedProps,l);else{if(typeof l!="string"&&a.stateNode===null)throw Error(y(166));if(r=Ca(Qr.current),Ca(Ie.current),wl(a)){if(l=a.stateNode,r=a.memoizedProps,l[Be]=a,(i=l.nodeValue!==r)&&(e=be,e!==null))switch(e.tag){case 3:kl(l.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&kl(l.nodeValue,r,(e.mode&1)!==0)}i&&(a.flags|=4)}else l=(r.nodeType===9?r:r.ownerDocument).createTextNode(l),l[Be]=a,a.stateNode=l}return le(a),null;case 13:if(I(H),l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&ve!==null&&a.mode&1&&!(a.flags&128))xc(),nr(),a.flags|=98560,i=!1;else if(i=wl(a),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[Be]=a}else nr(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;le(a),i=!1}else Fe!==null&&(Xi(Fe),Fe=null),i=!0;if(!i)return a.flags&65536?a:null}return a.flags&128?(a.lanes=r,a):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(a.child.flags|=8192,a.mode&1&&(e===null||H.current&1?Q===0&&(Q=3):Wn())),a.updateQueue!==null&&(a.flags|=4),le(a),null);case 4:return sr(),Gi(e,a),e===null&&Vr(a.stateNode.containerInfo),le(a),null;case 10:return Nn(a.type._context),le(a),null;case 17:return me(a.type)&&Zl(),le(a),null;case 19:if(I(H),i=a.memoizedState,i===null)return le(a),null;if(l=(a.flags&128)!==0,n=i.rendering,n===null)if(l)zr(i,!1);else{if(Q!==0||e!==null&&e.flags&128)for(e=a.child;e!==null;){if(n=rt(e),n!==null){for(a.flags|=128,zr(i,!1),l=n.updateQueue,l!==null&&(a.updateQueue=l,a.flags|=4),a.subtreeFlags=0,l=r,r=a.child;r!==null;)i=r,e=l,i.flags&=14680066,n=i.alternate,n===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=n.childLanes,i.lanes=n.lanes,i.child=n.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=n.memoizedProps,i.memoizedState=n.memoizedState,i.updateQueue=n.updateQueue,i.type=n.type,e=n.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return B(H,H.current&1|2),a.child}e=e.sibling}i.tail!==null&&V()>ur&&(a.flags|=128,l=!0,zr(i,!1),a.lanes=4194304)}else{if(!l)if(e=rt(n),e!==null){if(a.flags|=128,l=!0,r=e.updateQueue,r!==null&&(a.updateQueue=r,a.flags|=4),zr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!n.alternate&&!K)return le(a),null}else 2*V()-i.renderingStartTime>ur&&r!==1073741824&&(a.flags|=128,l=!0,zr(i,!1),a.lanes=4194304);i.isBackwards?(n.sibling=a.child,a.child=n):(r=i.last,r!==null?r.sibling=n:a.child=n,i.last=n)}return i.tail!==null?(a=i.tail,i.rendering=a,i.tail=a.sibling,i.renderingStartTime=V(),a.sibling=null,r=H.current,B(H,l?r&1|2:r&1),a):(le(a),null);case 22:case 23:return On(),l=a.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(a.flags|=8192),l&&a.mode&1?ge&1073741824&&(le(a),a.subtreeFlags&6&&(a.flags|=8192)):le(a),null;case 24:return null;case 25:return null}throw Error(y(156,a.tag))}function Rp(e,a){switch(Sn(a),a.tag){case 1:return me(a.type)&&Zl(),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return sr(),I(pe),I(ie),Tn(),e=a.flags,e&65536&&!(e&128)?(a.flags=e&-65537|128,a):null;case 5:return Fn(a),null;case 13:if(I(H),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(y(340));nr()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return I(H),null;case 4:return sr(),null;case 10:return Nn(a.type._context),null;case 22:case 23:return On(),null;case 24:return null;default:return null}}var xl=!1,te=!1,Bp=typeof WeakSet=="function"?WeakSet:Set,P=null;function Qa(e,a){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(l){G(e,a,l)}else r.current=null}function Vi(e,a,r){try{r()}catch(l){G(e,a,l)}}var Zo=!1;function Ap(e,a){if(Pi=Gl,e=dc(),wn(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var t=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var n=0,o=-1,s=-1,d=0,h=0,g=e,f=null;a:for(;;){for(var b;g!==r||t!==0&&g.nodeType!==3||(o=n+t),g!==i||l!==0&&g.nodeType!==3||(s=n+l),g.nodeType===3&&(n+=g.nodeValue.length),(b=g.firstChild)!==null;)f=g,g=b;for(;;){if(g===e)break a;if(f===r&&++d===t&&(o=n),f===i&&++h===l&&(s=n),(b=g.nextSibling)!==null)break;g=f,f=g.parentNode}g=b}r=o===-1||s===-1?null:{start:o,end:s}}else r=null}r=r||{start:0,end:0}}else r=null;for(_i={focusedElem:e,selectionRange:r},Gl=!1,P=a;P!==null;)if(a=P,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,P=e;else for(;P!==null;){a=P;try{var k=a.alternate;if(a.flags&1024)switch(a.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var w=k.memoizedProps,_=k.memoizedState,p=a.stateNode,c=p.getSnapshotBeforeUpdate(a.elementType===a.type?w:Pe(a.type,w),_);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=a.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){G(a,a.return,v)}if(e=a.sibling,e!==null){e.return=a.return,P=e;break}P=a.return}return k=Zo,Zo=!1,k}function Mr(e,a,r){var l=a.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var t=l=l.next;do{if((t.tag&e)===e){var i=t.destroy;t.destroy=void 0,i!==void 0&&Vi(a,r,i)}t=t.next}while(t!==l)}}function wt(e,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var r=a=a.next;do{if((r.tag&e)===e){var l=r.create;r.destroy=l()}r=r.next}while(r!==a)}}function Ui(e){var a=e.ref;if(a!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof a=="function"?a(e):a.current=e}}function ou(e){var a=e.alternate;a!==null&&(e.alternate=null,ou(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&(delete a[Be],delete a[$r],delete a[qi],delete a[kp],delete a[wp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function su(e){return e.tag===5||e.tag===3||e.tag===4}function Qo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||su(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $i(e,a,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?r.nodeType===8?r.parentNode.insertBefore(e,a):r.insertBefore(e,a):(r.nodeType===8?(a=r.parentNode,a.insertBefore(e,r)):(a=r,a.appendChild(e)),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=$l));else if(l!==4&&(e=e.child,e!==null))for($i(e,a,r),e=e.sibling;e!==null;)$i(e,a,r),e=e.sibling}function Zi(e,a,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?r.insertBefore(e,a):r.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Zi(e,a,r),e=e.sibling;e!==null;)Zi(e,a,r),e=e.sibling}var X=null,_e=!1;function ea(e,a,r){for(r=r.child;r!==null;)cu(e,a,r),r=r.sibling}function cu(e,a,r){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(mt,r)}catch{}switch(r.tag){case 5:te||Qa(r,a);case 6:var l=X,t=_e;X=null,ea(e,a,r),X=l,_e=t,X!==null&&(_e?(e=X,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):X.removeChild(r.stateNode));break;case 18:X!==null&&(_e?(e=X,r=r.stateNode,e.nodeType===8?$t(e.parentNode,r):e.nodeType===1&&$t(e,r),Or(e)):$t(X,r.stateNode));break;case 4:l=X,t=_e,X=r.stateNode.containerInfo,_e=!0,ea(e,a,r),X=l,_e=t;break;case 0:case 11:case 14:case 15:if(!te&&(l=r.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){t=l=l.next;do{var i=t,n=i.destroy;i=i.tag,n!==void 0&&(i&2||i&4)&&Vi(r,a,n),t=t.next}while(t!==l)}ea(e,a,r);break;case 1:if(!te&&(Qa(r,a),l=r.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=r.memoizedProps,l.state=r.memoizedState,l.componentWillUnmount()}catch(o){G(r,a,o)}ea(e,a,r);break;case 21:ea(e,a,r);break;case 22:r.mode&1?(te=(l=te)||r.memoizedState!==null,ea(e,a,r),te=l):ea(e,a,r);break;default:ea(e,a,r)}}function Jo(e){var a=e.updateQueue;if(a!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Bp),a.forEach(function(l){var t=Up.bind(null,e,l);r.has(l)||(r.add(l),l.then(t,t))})}}function Ce(e,a){var r=a.deletions;if(r!==null)for(var l=0;l<r.length;l++){var t=r[l];try{var i=e,n=a,o=n;e:for(;o!==null;){switch(o.tag){case 5:X=o.stateNode,_e=!1;break e;case 3:X=o.stateNode.containerInfo,_e=!0;break e;case 4:X=o.stateNode.containerInfo,_e=!0;break e}o=o.return}if(X===null)throw Error(y(160));cu(i,n,t),X=null,_e=!1;var s=t.alternate;s!==null&&(s.return=null),t.return=null}catch(d){G(t,a,d)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)uu(a,e),a=a.sibling}function uu(e,a){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ce(a,e),Le(e),l&4){try{Mr(3,e,e.return),wt(3,e)}catch(w){G(e,e.return,w)}try{Mr(5,e,e.return)}catch(w){G(e,e.return,w)}}break;case 1:Ce(a,e),Le(e),l&512&&r!==null&&Qa(r,r.return);break;case 5:if(Ce(a,e),Le(e),l&512&&r!==null&&Qa(r,r.return),e.flags&32){var t=e.stateNode;try{Dr(t,"")}catch(w){G(e,e.return,w)}}if(l&4&&(t=e.stateNode,t!=null)){var i=e.memoizedProps,n=r!==null?r.memoizedProps:i,o=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&Ts(t,i),yi(o,n);var d=yi(o,i);for(n=0;n<s.length;n+=2){var h=s[n],g=s[n+1];h==="style"?Bs(t,g):h==="dangerouslySetInnerHTML"?Ls(t,g):h==="children"?Dr(t,g):sn(t,h,g,d)}switch(o){case"input":fi(t,i);break;case"textarea":qs(t,i);break;case"select":var f=t._wrapperState.wasMultiple;t._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?Ya(t,!!i.multiple,b,!1):f!==!!i.multiple&&(i.defaultValue!=null?Ya(t,!!i.multiple,i.defaultValue,!0):Ya(t,!!i.multiple,i.multiple?[]:"",!1))}t[$r]=i}catch(w){G(e,e.return,w)}}break;case 6:if(Ce(a,e),Le(e),l&4){if(e.stateNode===null)throw Error(y(162));t=e.stateNode,i=e.memoizedProps;try{t.nodeValue=i}catch(w){G(e,e.return,w)}}break;case 3:if(Ce(a,e),Le(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Or(a.containerInfo)}catch(w){G(e,e.return,w)}break;case 4:Ce(a,e),Le(e);break;case 13:Ce(a,e),Le(e),t=e.child,t.flags&8192&&(i=t.memoizedState!==null,t.stateNode.isHidden=i,!i||t.alternate!==null&&t.alternate.memoizedState!==null||(Kn=V())),l&4&&Jo(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(te=(d=te)||h,Ce(a,e),te=d):Ce(a,e),Le(e),l&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(P=e,h=e.child;h!==null;){for(g=P=h;P!==null;){switch(f=P,b=f.child,f.tag){case 0:case 11:case 14:case 15:Mr(4,f,f.return);break;case 1:Qa(f,f.return);var k=f.stateNode;if(typeof k.componentWillUnmount=="function"){l=f,r=f.return;try{a=l,k.props=a.memoizedProps,k.state=a.memoizedState,k.componentWillUnmount()}catch(w){G(l,r,w)}}break;case 5:Qa(f,f.return);break;case 22:if(f.memoizedState!==null){Xo(g);continue}}b!==null?(b.return=f,P=b):Xo(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{t=g.stateNode,d?(i=t.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=g.stateNode,s=g.memoizedProps.style,n=s!=null&&s.hasOwnProperty("display")?s.display:null,o.style.display=Rs("display",n))}catch(w){G(e,e.return,w)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(w){G(e,e.return,w)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ce(a,e),Le(e),l&4&&Jo(e);break;case 21:break;default:Ce(a,e),Le(e)}}function Le(e){var a=e.flags;if(a&2){try{e:{for(var r=e.return;r!==null;){if(su(r)){var l=r;break e}r=r.return}throw Error(y(160))}switch(l.tag){case 5:var t=l.stateNode;l.flags&32&&(Dr(t,""),l.flags&=-33);var i=Qo(e);Zi(e,i,t);break;case 3:case 4:var n=l.stateNode.containerInfo,o=Qo(e);$i(e,o,n);break;default:throw Error(y(161))}}catch(s){G(e,e.return,s)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Dp(e,a,r){P=e,du(e)}function du(e,a,r){for(var l=(e.mode&1)!==0;P!==null;){var t=P,i=t.child;if(t.tag===22&&l){var n=t.memoizedState!==null||xl;if(!n){var o=t.alternate,s=o!==null&&o.memoizedState!==null||te;o=xl;var d=te;if(xl=n,(te=s)&&!d)for(P=t;P!==null;)n=P,s=n.child,n.tag===22&&n.memoizedState!==null?es(t):s!==null?(s.return=n,P=s):es(t);for(;i!==null;)P=i,du(i),i=i.sibling;P=t,xl=o,te=d}Yo(e)}else t.subtreeFlags&8772&&i!==null?(i.return=t,P=i):Yo(e)}}function Yo(e){for(;P!==null;){var a=P;if(a.flags&8772){var r=a.alternate;try{if(a.flags&8772)switch(a.tag){case 0:case 11:case 15:te||wt(5,a);break;case 1:var l=a.stateNode;if(a.flags&4&&!te)if(r===null)l.componentDidMount();else{var t=a.elementType===a.type?r.memoizedProps:Pe(a.type,r.memoizedProps);l.componentDidUpdate(t,r.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var i=a.updateQueue;i!==null&&Ro(a,i,l);break;case 3:var n=a.updateQueue;if(n!==null){if(r=null,a.child!==null)switch(a.child.tag){case 5:r=a.child.stateNode;break;case 1:r=a.child.stateNode}Ro(a,n,r)}break;case 5:var o=a.stateNode;if(r===null&&a.flags&4){r=o;var s=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&r.focus();break;case"img":s.src&&(r.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var d=a.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&Or(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}te||a.flags&512&&Ui(a)}catch(f){G(a,a.return,f)}}if(a===e){P=null;break}if(r=a.sibling,r!==null){r.return=a.return,P=r;break}P=a.return}}function Xo(e){for(;P!==null;){var a=P;if(a===e){P=null;break}var r=a.sibling;if(r!==null){r.return=a.return,P=r;break}P=a.return}}function es(e){for(;P!==null;){var a=P;try{switch(a.tag){case 0:case 11:case 15:var r=a.return;try{wt(4,a)}catch(s){G(a,r,s)}break;case 1:var l=a.stateNode;if(typeof l.componentDidMount=="function"){var t=a.return;try{l.componentDidMount()}catch(s){G(a,t,s)}}var i=a.return;try{Ui(a)}catch(s){G(a,i,s)}break;case 5:var n=a.return;try{Ui(a)}catch(s){G(a,n,s)}}}catch(s){G(a,a.return,s)}if(a===e){P=null;break}var o=a.sibling;if(o!==null){o.return=a.return,P=o;break}P=a.return}}var Ip=Math.ceil,it=Xe.ReactCurrentDispatcher,Dn=Xe.ReactCurrentOwner,je=Xe.ReactCurrentBatchConfig,M=0,Y=null,$=null,ee=0,ge=0,Ja=ba(0),Q=0,el=null,Ma=0,zt=0,In=0,Lr=null,ue=null,Kn=0,ur=1/0,He=null,nt=!1,Qi=null,pa=null,jl=!1,na=null,ot=0,Rr=0,Ji=null,Bl=-1,Al=0;function oe(){return M&6?V():Bl!==-1?Bl:Bl=V()}function ma(e){return e.mode&1?M&2&&ee!==0?ee&-ee:Sp.transition!==null?(Al===0&&(Al=Zs()),Al):(e=R,e!==0||(e=window.event,e=e===void 0?16:rc(e.type)),e):1}function qe(e,a,r,l){if(50<Rr)throw Rr=0,Ji=null,Error(y(185));rl(e,r,l),(!(M&2)||e!==Y)&&(e===Y&&(!(M&2)&&(zt|=r),Q===4&&ta(e,ee)),fe(e,l),r===1&&M===0&&!(a.mode&1)&&(ur=V()+500,bt&&ya()))}function fe(e,a){var r=e.callbackNode;Sd(e,a);var l=Wl(e,e===Y?ee:0);if(l===0)r!==null&&so(r),e.callbackNode=null,e.callbackPriority=0;else if(a=l&-l,e.callbackPriority!==a){if(r!=null&&so(r),a===1)e.tag===0?zp(as.bind(null,e)):wc(as.bind(null,e)),bp(function(){!(M&6)&&ya()}),r=null;else{switch(Qs(l)){case 1:r=mn;break;case 4:r=Us;break;case 16:r=Ol;break;case 536870912:r=$s;break;default:r=Ol}r=yu(r,pu.bind(null,e))}e.callbackPriority=a,e.callbackNode=r}}function pu(e,a){if(Bl=-1,Al=0,M&6)throw Error(y(327));var r=e.callbackNode;if(lr()&&e.callbackNode!==r)return null;var l=Wl(e,e===Y?ee:0);if(l===0)return null;if(l&30||l&e.expiredLanes||a)a=st(e,l);else{a=l;var t=M;M|=2;var i=fu();(Y!==e||ee!==a)&&(He=null,ur=V()+500,Pa(e,a));do try{Op();break}catch(o){mu(e,o)}while(!0);En(),it.current=i,M=t,$!==null?a=0:(Y=null,ee=0,a=Q)}if(a!==0){if(a===2&&(t=xi(e),t!==0&&(l=t,a=Yi(e,t))),a===1)throw r=el,Pa(e,0),ta(e,l),fe(e,V()),r;if(a===6)ta(e,l);else{if(t=e.current.alternate,!(l&30)&&!Kp(t)&&(a=st(e,l),a===2&&(i=xi(e),i!==0&&(l=i,a=Yi(e,i))),a===1))throw r=el,Pa(e,0),ta(e,l),fe(e,V()),r;switch(e.finishedWork=t,e.finishedLanes=l,a){case 0:case 1:throw Error(y(345));case 2:ja(e,ue,He);break;case 3:if(ta(e,l),(l&130023424)===l&&(a=Kn+500-V(),10<a)){if(Wl(e,0)!==0)break;if(t=e.suspendedLanes,(t&l)!==l){oe(),e.pingedLanes|=e.suspendedLanes&t;break}e.timeoutHandle=Ti(ja.bind(null,e,ue,He),a);break}ja(e,ue,He);break;case 4:if(ta(e,l),(l&4194240)===l)break;for(a=e.eventTimes,t=-1;0<l;){var n=31-Te(l);i=1<<n,n=a[n],n>t&&(t=n),l&=~i}if(l=t,l=V()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Ip(l/1960))-l,10<l){e.timeoutHandle=Ti(ja.bind(null,e,ue,He),l);break}ja(e,ue,He);break;case 5:ja(e,ue,He);break;default:throw Error(y(329))}}}return fe(e,V()),e.callbackNode===r?pu.bind(null,e):null}function Yi(e,a){var r=Lr;return e.current.memoizedState.isDehydrated&&(Pa(e,a).flags|=256),e=st(e,a),e!==2&&(a=ue,ue=r,a!==null&&Xi(a)),e}function Xi(e){ue===null?ue=e:ue.push.apply(ue,e)}function Kp(e){for(var a=e;;){if(a.flags&16384){var r=a.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var l=0;l<r.length;l++){var t=r[l],i=t.getSnapshot;t=t.value;try{if(!Me(i(),t))return!1}catch{return!1}}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function ta(e,a){for(a&=~In,a&=~zt,e.suspendedLanes|=a,e.pingedLanes&=~a,e=e.expirationTimes;0<a;){var r=31-Te(a),l=1<<r;e[r]=-1,a&=~l}}function as(e){if(M&6)throw Error(y(327));lr();var a=Wl(e,0);if(!(a&1))return fe(e,V()),null;var r=st(e,a);if(e.tag!==0&&r===2){var l=xi(e);l!==0&&(a=l,r=Yi(e,l))}if(r===1)throw r=el,Pa(e,0),ta(e,a),fe(e,V()),r;if(r===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=a,ja(e,ue,He),fe(e,V()),null}function Hn(e,a){var r=M;M|=1;try{return e(a)}finally{M=r,M===0&&(ur=V()+500,bt&&ya())}}function La(e){na!==null&&na.tag===0&&!(M&6)&&lr();var a=M;M|=1;var r=je.transition,l=R;try{if(je.transition=null,R=1,e)return e()}finally{R=l,je.transition=r,M=a,!(M&6)&&ya()}}function On(){ge=Ja.current,I(Ja)}function Pa(e,a){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,vp(r)),$!==null)for(r=$.return;r!==null;){var l=r;switch(Sn(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Zl();break;case 3:sr(),I(pe),I(ie),Tn();break;case 5:Fn(l);break;case 4:sr();break;case 13:I(H);break;case 19:I(H);break;case 10:Nn(l.type._context);break;case 22:case 23:On()}r=r.return}if(Y=e,$=e=fa(e.current,null),ee=ge=a,Q=0,el=null,In=zt=Ma=0,ue=Lr=null,Na!==null){for(a=0;a<Na.length;a++)if(r=Na[a],l=r.interleaved,l!==null){r.interleaved=null;var t=l.next,i=r.pending;if(i!==null){var n=i.next;i.next=t,l.next=n}r.pending=l}Na=null}return e}function mu(e,a){do{var r=$;try{if(En(),Ml.current=tt,lt){for(var l=O.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}lt=!1}if(qa=0,J=Z=O=null,qr=!1,Jr=0,Dn.current=null,r===null||r.return===null){Q=1,el=a,$=null;break}e:{var i=e,n=r.return,o=r,s=a;if(a=ee,o.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,h=o,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var b=Ho(n);if(b!==null){b.flags&=-257,Oo(b,n,o,i,a),b.mode&1&&Ko(i,d,a),a=b,s=d;var k=a.updateQueue;if(k===null){var w=new Set;w.add(s),a.updateQueue=w}else k.add(s);break e}else{if(!(a&1)){Ko(i,d,a),Wn();break e}s=Error(y(426))}}else if(K&&o.mode&1){var _=Ho(n);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Oo(_,n,o,i,a),xn(cr(s,o));break e}}i=s=cr(s,o),Q!==4&&(Q=2),Lr===null?Lr=[i]:Lr.push(i),i=n;do{switch(i.tag){case 3:i.flags|=65536,a&=-a,i.lanes|=a;var p=Qc(i,s,a);Lo(i,p);break e;case 1:o=s;var c=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(pa===null||!pa.has(m)))){i.flags|=65536,a&=-a,i.lanes|=a;var v=Jc(i,o,a);Lo(i,v);break e}}i=i.return}while(i!==null)}gu(r)}catch(z){a=z,$===r&&r!==null&&($=r=r.return);continue}break}while(!0)}function fu(){var e=it.current;return it.current=tt,e===null?tt:e}function Wn(){(Q===0||Q===3||Q===2)&&(Q=4),Y===null||!(Ma&268435455)&&!(zt&268435455)||ta(Y,ee)}function st(e,a){var r=M;M|=2;var l=fu();(Y!==e||ee!==a)&&(He=null,Pa(e,a));do try{Hp();break}catch(t){mu(e,t)}while(!0);if(En(),M=r,it.current=l,$!==null)throw Error(y(261));return Y=null,ee=0,Q}function Hp(){for(;$!==null;)hu($)}function Op(){for(;$!==null&&!fd();)hu($)}function hu(e){var a=bu(e.alternate,e,ge);e.memoizedProps=e.pendingProps,a===null?gu(e):$=a,Dn.current=null}function gu(e){var a=e;do{var r=a.alternate;if(e=a.return,a.flags&32768){if(r=Rp(r,a),r!==null){r.flags&=32767,$=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,$=null;return}}else if(r=Lp(r,a,ge),r!==null){$=r;return}if(a=a.sibling,a!==null){$=a;return}$=a=e}while(a!==null);Q===0&&(Q=5)}function ja(e,a,r){var l=R,t=je.transition;try{je.transition=null,R=1,Wp(e,a,r,l)}finally{je.transition=t,R=l}return null}function Wp(e,a,r,l){do lr();while(na!==null);if(M&6)throw Error(y(327));r=e.finishedWork;var t=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(xd(e,i),e===Y&&($=Y=null,ee=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||jl||(jl=!0,yu(Ol,function(){return lr(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=je.transition,je.transition=null;var n=R;R=1;var o=M;M|=4,Dn.current=null,Ap(e,r),uu(r,e),up(_i),Gl=!!Pi,_i=Pi=null,e.current=r,Dp(r),hd(),M=o,R=n,je.transition=i}else e.current=r;if(jl&&(jl=!1,na=e,ot=t),i=e.pendingLanes,i===0&&(pa=null),bd(r.stateNode),fe(e,V()),a!==null)for(l=e.onRecoverableError,r=0;r<a.length;r++)t=a[r],l(t.value,{componentStack:t.stack,digest:t.digest});if(nt)throw nt=!1,e=Qi,Qi=null,e;return ot&1&&e.tag!==0&&lr(),i=e.pendingLanes,i&1?e===Ji?Rr++:(Rr=0,Ji=e):Rr=0,ya(),null}function lr(){if(na!==null){var e=Qs(ot),a=je.transition,r=R;try{if(je.transition=null,R=16>e?16:e,na===null)var l=!1;else{if(e=na,na=null,ot=0,M&6)throw Error(y(331));var t=M;for(M|=4,P=e.current;P!==null;){var i=P,n=i.child;if(P.flags&16){var o=i.deletions;if(o!==null){for(var s=0;s<o.length;s++){var d=o[s];for(P=d;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:Mr(8,h,i)}var g=h.child;if(g!==null)g.return=h,P=g;else for(;P!==null;){h=P;var f=h.sibling,b=h.return;if(ou(h),h===d){P=null;break}if(f!==null){f.return=b,P=f;break}P=b}}}var k=i.alternate;if(k!==null){var w=k.child;if(w!==null){k.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}P=i}}if(i.subtreeFlags&2064&&n!==null)n.return=i,P=n;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Mr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,P=p;break e}P=i.return}}var c=e.current;for(P=c;P!==null;){n=P;var m=n.child;if(n.subtreeFlags&2064&&m!==null)m.return=n,P=m;else e:for(n=c;P!==null;){if(o=P,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:wt(9,o)}}catch(z){G(o,o.return,z)}if(o===n){P=null;break e}var v=o.sibling;if(v!==null){v.return=o.return,P=v;break e}P=o.return}}if(M=t,ya(),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(mt,e)}catch{}l=!0}return l}finally{R=r,je.transition=a}}return!1}function rs(e,a,r){a=cr(r,a),a=Qc(e,a,1),e=da(e,a,1),a=oe(),e!==null&&(rl(e,1,a),fe(e,a))}function G(e,a,r){if(e.tag===3)rs(e,e,r);else for(;a!==null;){if(a.tag===3){rs(a,e,r);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(pa===null||!pa.has(l))){e=cr(r,e),e=Jc(a,e,1),a=da(a,e,1),e=oe(),a!==null&&(rl(a,1,e),fe(a,e));break}}a=a.return}}function Gp(e,a,r){var l=e.pingCache;l!==null&&l.delete(a),a=oe(),e.pingedLanes|=e.suspendedLanes&r,Y===e&&(ee&r)===r&&(Q===4||Q===3&&(ee&130023424)===ee&&500>V()-Kn?Pa(e,0):In|=r),fe(e,a)}function vu(e,a){a===0&&(e.mode&1?(a=hl,hl<<=1,!(hl&130023424)&&(hl=4194304)):a=1);var r=oe();e=Je(e,a),e!==null&&(rl(e,a,r),fe(e,r))}function Vp(e){var a=e.memoizedState,r=0;a!==null&&(r=a.retryLane),vu(e,r)}function Up(e,a){var r=0;switch(e.tag){case 13:var l=e.stateNode,t=e.memoizedState;t!==null&&(r=t.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(y(314))}l!==null&&l.delete(a),vu(e,r)}var bu;bu=function(e,a,r){if(e!==null)if(e.memoizedProps!==a.pendingProps||pe.current)de=!0;else{if(!(e.lanes&r)&&!(a.flags&128))return de=!1,Mp(e,a,r);de=!!(e.flags&131072)}else de=!1,K&&a.flags&1048576&&zc(a,Yl,a.index);switch(a.lanes=0,a.tag){case 2:var l=a.type;Rl(e,a),e=a.pendingProps;var t=ir(a,ie.current);rr(a,r),t=Mn(null,a,l,e,t,r);var i=Ln();return a.flags|=1,typeof t=="object"&&t!==null&&typeof t.render=="function"&&t.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,me(l)?(i=!0,Ql(a)):i=!1,a.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,Pn(a),t.updater=kt,a.stateNode=t,t._reactInternals=a,Di(a,l,e,r),a=Hi(null,a,l,!0,i,r)):(a.tag=0,K&&i&&zn(a),ne(null,a,t,r),a=a.child),a;case 16:l=a.elementType;e:{switch(Rl(e,a),e=a.pendingProps,t=l._init,l=t(l._payload),a.type=l,t=a.tag=Zp(l),e=Pe(l,e),t){case 0:a=Ki(null,a,l,e,r);break e;case 1:a=Vo(null,a,l,e,r);break e;case 11:a=Wo(null,a,l,e,r);break e;case 14:a=Go(null,a,l,Pe(l.type,e),r);break e}throw Error(y(306,l,""))}return a;case 0:return l=a.type,t=a.pendingProps,t=a.elementType===l?t:Pe(l,t),Ki(e,a,l,t,r);case 1:return l=a.type,t=a.pendingProps,t=a.elementType===l?t:Pe(l,t),Vo(e,a,l,t,r);case 3:e:{if(au(a),e===null)throw Error(y(387));l=a.pendingProps,i=a.memoizedState,t=i.element,Cc(e,a),at(a,l,null,r);var n=a.memoizedState;if(l=n.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:n.cache,pendingSuspenseBoundaries:n.pendingSuspenseBoundaries,transitions:n.transitions},a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256){t=cr(Error(y(423)),a),a=Uo(e,a,l,r,t);break e}else if(l!==t){t=cr(Error(y(424)),a),a=Uo(e,a,l,r,t);break e}else for(ve=ua(a.stateNode.containerInfo.firstChild),be=a,K=!0,Fe=null,r=Ec(a,null,l,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(nr(),l===t){a=Ye(e,a,r);break e}ne(e,a,l,r)}a=a.child}return a;case 5:return Pc(a),e===null&&Ri(a),l=a.type,t=a.pendingProps,i=e!==null?e.memoizedProps:null,n=t.children,Fi(l,t)?n=null:i!==null&&Fi(l,i)&&(a.flags|=32),eu(e,a),ne(e,a,n,r),a.child;case 6:return e===null&&Ri(a),null;case 13:return ru(e,a,r);case 4:return _n(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=or(a,null,l,r):ne(e,a,l,r),a.child;case 11:return l=a.type,t=a.pendingProps,t=a.elementType===l?t:Pe(l,t),Wo(e,a,l,t,r);case 7:return ne(e,a,a.pendingProps,r),a.child;case 8:return ne(e,a,a.pendingProps.children,r),a.child;case 12:return ne(e,a,a.pendingProps.children,r),a.child;case 10:e:{if(l=a.type._context,t=a.pendingProps,i=a.memoizedProps,n=t.value,B(Xl,l._currentValue),l._currentValue=n,i!==null)if(Me(i.value,n)){if(i.children===t.children&&!pe.current){a=Ye(e,a,r);break e}}else for(i=a.child,i!==null&&(i.return=a);i!==null;){var o=i.dependencies;if(o!==null){n=i.child;for(var s=o.firstContext;s!==null;){if(s.context===l){if(i.tag===1){s=Ue(-1,r&-r),s.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?s.next=s:(s.next=h.next,h.next=s),d.pending=s}}i.lanes|=r,s=i.alternate,s!==null&&(s.lanes|=r),Bi(i.return,r,a),o.lanes|=r;break}s=s.next}}else if(i.tag===10)n=i.type===a.type?null:i.child;else if(i.tag===18){if(n=i.return,n===null)throw Error(y(341));n.lanes|=r,o=n.alternate,o!==null&&(o.lanes|=r),Bi(n,r,a),n=i.sibling}else n=i.child;if(n!==null)n.return=i;else for(n=i;n!==null;){if(n===a){n=null;break}if(i=n.sibling,i!==null){i.return=n.return,n=i;break}n=n.return}i=n}ne(e,a,t.children,r),a=a.child}return a;case 9:return t=a.type,l=a.pendingProps.children,rr(a,r),t=Ee(t),l=l(t),a.flags|=1,ne(e,a,l,r),a.child;case 14:return l=a.type,t=Pe(l,a.pendingProps),t=Pe(l.type,t),Go(e,a,l,t,r);case 15:return Yc(e,a,a.type,a.pendingProps,r);case 17:return l=a.type,t=a.pendingProps,t=a.elementType===l?t:Pe(l,t),Rl(e,a),a.tag=1,me(l)?(e=!0,Ql(a)):e=!1,rr(a,r),Zc(a,l,t),Di(a,l,t,r),Hi(null,a,l,!0,e,r);case 19:return lu(e,a,r);case 22:return Xc(e,a,r)}throw Error(y(156,a.tag))};function yu(e,a){return Vs(e,a)}function $p(e,a,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xe(e,a,r,l){return new $p(e,a,r,l)}function Gn(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zp(e){if(typeof e=="function")return Gn(e)?1:0;if(e!=null){if(e=e.$$typeof,e===un)return 11;if(e===dn)return 14}return 2}function fa(e,a){var r=e.alternate;return r===null?(r=xe(e.tag,a,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=a,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,a=e.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Dl(e,a,r,l,t,i){var n=2;if(l=e,typeof e=="function")Gn(e)&&(n=1);else if(typeof e=="string")n=5;else e:switch(e){case Ka:return _a(r.children,t,i,a);case cn:n=8,t|=8;break;case ci:return e=xe(12,r,a,t|2),e.elementType=ci,e.lanes=i,e;case ui:return e=xe(13,r,a,t),e.elementType=ui,e.lanes=i,e;case di:return e=xe(19,r,a,t),e.elementType=di,e.lanes=i,e;case Ps:return St(r,t,i,a);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ns:n=10;break e;case Cs:n=9;break e;case un:n=11;break e;case dn:n=14;break e;case aa:n=16,l=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return a=xe(n,r,a,t),a.elementType=e,a.type=l,a.lanes=i,a}function _a(e,a,r,l){return e=xe(7,e,l,a),e.lanes=r,e}function St(e,a,r,l){return e=xe(22,e,l,a),e.elementType=Ps,e.lanes=r,e.stateNode={isHidden:!1},e}function ri(e,a,r){return e=xe(6,e,null,a),e.lanes=r,e}function li(e,a,r){return a=xe(4,e.children!==null?e.children:[],e.key,a),a.lanes=r,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}function Qp(e,a,r,l,t){this.tag=a,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bt(0),this.expirationTimes=Bt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bt(0),this.identifierPrefix=l,this.onRecoverableError=t,this.mutableSourceEagerHydrationData=null}function Vn(e,a,r,l,t,i,n,o,s){return e=new Qp(e,a,r,o,s),a===1?(a=1,i===!0&&(a|=8)):a=0,i=xe(3,null,null,a),e.current=i,i.stateNode=e,i.memoizedState={element:l,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pn(i),e}function Jp(e,a,r){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ia,key:l==null?null:""+l,children:e,containerInfo:a,implementation:r}}function ku(e){if(!e)return ga;e=e._reactInternals;e:{if(Aa(e)!==e||e.tag!==1)throw Error(y(170));var a=e;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(me(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(y(171))}if(e.tag===1){var r=e.type;if(me(r))return kc(e,r,a)}return a}function wu(e,a,r,l,t,i,n,o,s){return e=Vn(r,l,!0,e,t,i,n,o,s),e.context=ku(null),r=e.current,l=oe(),t=ma(r),i=Ue(l,t),i.callback=a??null,da(r,i,t),e.current.lanes=t,rl(e,t,l),fe(e,l),e}function xt(e,a,r,l){var t=a.current,i=oe(),n=ma(t);return r=ku(r),a.context===null?a.context=r:a.pendingContext=r,a=Ue(i,n),a.payload={element:e},l=l===void 0?null:l,l!==null&&(a.callback=l),e=da(t,a,n),e!==null&&(qe(e,t,n,i),ql(e,t,n)),n}function ct(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ls(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<a?r:a}}function Un(e,a){ls(e,a),(e=e.alternate)&&ls(e,a)}function Yp(){return null}var zu=typeof reportError=="function"?reportError:function(e){console.error(e)};function $n(e){this._internalRoot=e}jt.prototype.render=$n.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(y(409));xt(e,a,null,null)};jt.prototype.unmount=$n.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;La(function(){xt(null,e,null,null)}),a[Qe]=null}};function jt(e){this._internalRoot=e}jt.prototype.unstable_scheduleHydration=function(e){if(e){var a=Xs();e={blockedOn:null,target:e,priority:a};for(var r=0;r<la.length&&a!==0&&a<la[r].priority;r++);la.splice(r,0,e),r===0&&ac(e)}};function Zn(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Et(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ts(){}function Xp(e,a,r,l,t){if(t){if(typeof l=="function"){var i=l;l=function(){var d=ct(n);i.call(d)}}var n=wu(a,l,e,0,null,!1,!1,"",ts);return e._reactRootContainer=n,e[Qe]=n.current,Vr(e.nodeType===8?e.parentNode:e),La(),n}for(;t=e.lastChild;)e.removeChild(t);if(typeof l=="function"){var o=l;l=function(){var d=ct(s);o.call(d)}}var s=Vn(e,0,!1,null,null,!1,!1,"",ts);return e._reactRootContainer=s,e[Qe]=s.current,Vr(e.nodeType===8?e.parentNode:e),La(function(){xt(a,s,r,l)}),s}function Nt(e,a,r,l,t){var i=r._reactRootContainer;if(i){var n=i;if(typeof t=="function"){var o=t;t=function(){var s=ct(n);o.call(s)}}xt(a,n,e,t)}else n=Xp(r,a,e,t,l);return ct(n)}Js=function(e){switch(e.tag){case 3:var a=e.stateNode;if(a.current.memoizedState.isDehydrated){var r=Er(a.pendingLanes);r!==0&&(fn(a,r|1),fe(a,V()),!(M&6)&&(ur=V()+500,ya()))}break;case 13:La(function(){var l=Je(e,1);if(l!==null){var t=oe();qe(l,e,1,t)}}),Un(e,1)}};hn=function(e){if(e.tag===13){var a=Je(e,134217728);if(a!==null){var r=oe();qe(a,e,134217728,r)}Un(e,134217728)}};Ys=function(e){if(e.tag===13){var a=ma(e),r=Je(e,a);if(r!==null){var l=oe();qe(r,e,a,l)}Un(e,a)}};Xs=function(){return R};ec=function(e,a){var r=R;try{return R=e,a()}finally{R=r}};wi=function(e,a,r){switch(a){case"input":if(fi(e,r),a=r.name,r.type==="radio"&&a!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<r.length;a++){var l=r[a];if(l!==e&&l.form===e.form){var t=vt(l);if(!t)throw Error(y(90));Fs(l),fi(l,t)}}}break;case"textarea":qs(e,r);break;case"select":a=r.value,a!=null&&Ya(e,!!r.multiple,a,!1)}};Is=Hn;Ks=La;var em={usingClientEntryPoint:!1,Events:[tl,Ga,vt,As,Ds,Hn]},Sr={findFiberByHostInstance:Ea,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},am={bundleType:Sr.bundleType,version:Sr.version,rendererPackageName:Sr.rendererPackageName,rendererConfig:Sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ws(e),e===null?null:e.stateNode},findFiberByHostInstance:Sr.findFiberByHostInstance||Yp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{mt=El.inject(am),De=El}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=em;ke.createPortal=function(e,a){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zn(a))throw Error(y(200));return Jp(e,a,null,r)};ke.createRoot=function(e,a){if(!Zn(e))throw Error(y(299));var r=!1,l="",t=zu;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onRecoverableError!==void 0&&(t=a.onRecoverableError)),a=Vn(e,1,!1,null,null,r,!1,l,t),e[Qe]=a.current,Vr(e.nodeType===8?e.parentNode:e),new $n(a)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Ws(a),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return La(e)};ke.hydrate=function(e,a,r){if(!Et(a))throw Error(y(200));return Nt(null,e,a,!0,r)};ke.hydrateRoot=function(e,a,r){if(!Zn(e))throw Error(y(405));var l=r!=null&&r.hydratedSources||null,t=!1,i="",n=zu;if(r!=null&&(r.unstable_strictMode===!0&&(t=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(n=r.onRecoverableError)),a=wu(a,null,e,1,r??null,t,!1,i,n),e[Qe]=a.current,Vr(e),l)for(e=0;e<l.length;e++)r=l[e],t=r._getVersion,t=t(r._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[r,t]:a.mutableSourceEagerHydrationData.push(r,t);return new jt(a)};ke.render=function(e,a,r){if(!Et(a))throw Error(y(200));return Nt(null,e,a,!1,r)};ke.unmountComponentAtNode=function(e){if(!Et(e))throw Error(y(40));return e._reactRootContainer?(La(function(){Nt(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};ke.unstable_batchedUpdates=Hn;ke.unstable_renderSubtreeIntoContainer=function(e,a,r,l){if(!Et(r))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return Nt(e,a,r,!1,l)};ke.version="18.3.1-next-f1338f8080-20240426";function Su(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Su)}catch(e){console.error(e)}}Su(),Ss.exports=ke;var rm=Ss.exports,is=rm;oi.createRoot=is.createRoot,oi.hydrateRoot=is.hydrateRoot;const lm=[["Fruit",`orange (fruit);die Orange|die Apfelsine;la naranja;l'orange;l'arancia
banana;die Banane;el plátano|la banana;la banane;la banana
pear;die Birne;la pera;la poire;la pera
grape;die Weintraube|die Traube;la uva;le raisin;l'uva
strawberry;die Erdbeere;la fresa;la fraise;la fragola
cherry;die Kirsche;la cereza;la cerise;la ciliegia
lemon;die Zitrone;el limón;le citron;il limone
peach;der Pfirsich;el melocotón|el durazno;la pêche;la pesca
plum;die Pflaume|die Zwetschge;la ciruela;la prune;la prugna|la susina
watermelon;die Wassermelone;la sandía;la pastèque;l'anguria|il cocomero`],["More fruit",`pineapple;die Ananas;la piña;l'ananas;l'ananas
apricot;die Aprikose|die Marille;el albaricoque;l'abricot;l'albicocca
raspberry;die Himbeere;la frambuesa;la framboise;il lampone
blueberry;die Heidelbeere|die Blaubeere;el arándano;la myrtille;il mirtillo
melon;die Melone;el melón;le melon;il melone
mango;die Mango;el mango;la mangue;il mango
kiwi;die Kiwi;el kiwi;le kiwi;il kiwi
coconut;die Kokosnuss;el coco;la noix de coco;il cocco
fig;die Feige;el higo;la figue;il fico
lime (fruit);die Limette;la lima;le citron vert;il lime`],["Vegetables",`potato;die Kartoffel|der Erdapfel;la patata|la papa;la pomme de terre;la patata
tomato;die Tomate|der Paradeiser;el tomate;la tomate;il pomodoro
carrot;die Karotte|die Möhre;la zanahoria;la carotte;la carota
onion;die Zwiebel;la cebolla;l'oignon;la cipolla
garlic;der Knoblauch;el ajo;l'ail;l'aglio
cucumber;die Gurke;el pepino;le concombre;il cetriolo
lettuce;der Salat|der Kopfsalat;la lechuga;la laitue;la lattuga
pepper (vegetable);die Paprika;el pimiento;le poivron;il peperone
cabbage;der Kohl|das Kraut;la col|el repollo;le chou;il cavolo
bean;die Bohne;la judía|el frijol|la alubia;le haricot;il fagiolo`],["More vegetables",`pea;die Erbse;el guisante|la arveja;le petit pois;il pisello
corn;der Mais;el maíz;le maïs;il mais
mushroom;der Pilz|das Schwammerl;el champiñón|la seta;le champignon;il fungo
spinach;der Spinat;las espinacas|la espinaca;les épinards;gli spinaci
broccoli;der Brokkoli;el brócoli;le brocoli;i broccoli
cauliflower;der Blumenkohl|der Karfiol;la coliflor;le chou-fleur;il cavolfiore
pumpkin;der Kürbis;la calabaza;la citrouille;la zucca
aubergine;die Aubergine|die Melanzani;la berenjena;l'aubergine;la melanzana
courgette;die Zucchini;el calabacín;la courgette;la zucchina
celery;der Sellerie;el apio;le céleri;il sedano`],["Meat & fish",`meat;das Fleisch;la carne;la viande;la carne
chicken (meat);das Hähnchen|das Huhn|das Hendl;el pollo;le poulet;il pollo
beef;das Rindfleisch;la carne de vaca|la ternera;le bœuf;il manzo
pork;das Schweinefleisch;la carne de cerdo;le porc;la carne di maiale|il maiale
ham;der Schinken;el jamón;le jambon;il prosciutto
sausage;die Wurst;la salchicha;la saucisse;la salsiccia
salmon;der Lachs;el salmón;le saumon;il salmone
tuna;der Thunfisch;el atún;le thon;il tonno
prawn;die Garnele;la gamba;la crevette;il gambero
steak;das Steak;el filete|el bistec;le steak|le bifteck;la bistecca`],["Breakfast",`breakfast;das Frühstück;el desayuno;le petit déjeuner;la colazione
butter;die Butter;la mantequilla;le beurre;il burro
jam;die Marmelade;la mermelada;la confiture;la marmellata
honey;der Honig;la miel;le miel;il miele
yoghurt;der Joghurt;el yogur;le yaourt;lo yogurt
cereal;das Müsli|die Cornflakes;los cereales;les céréales;i cereali
roll (bread);das Brötchen|die Semmel;el panecillo;le petit pain;il panino
toast;der Toast;la tostada;le pain grillé|le toast;il pane tostato
juice;der Saft;el zumo|el jugo;le jus;il succo
sugar;der Zucker;el azúcar;le sucre;lo zucchero`],["Meals",`lunch;das Mittagessen;el almuerzo|la comida;le déjeuner;il pranzo
dinner;das Abendessen;la cena;le dîner;la cena
meal;die Mahlzeit;la comida;le repas;il pasto
snack;der Snack|die Jause;el tentempié;le casse-croûte|l'en-cas;lo spuntino
starter;die Vorspeise;el entrante;l'entrée;l'antipasto
main course;das Hauptgericht|die Hauptspeise;el plato principal;le plat principal;il piatto principale
dessert;der Nachtisch|die Nachspeise;el postre;le dessert;il dolce|il dessert
salad;der Salat;la ensalada;la salade;l'insalata
sandwich;das Sandwich|das belegte Brot;el sándwich|el bocadillo;le sandwich;il tramezzino|il panino
pizza;die Pizza;la pizza;la pizza;la pizza`],["Drinks",`wine;der Wein;el vino;le vin;il vino
beer;das Bier;la cerveza;la bière;la birra
lemonade;die Limonade;la limonada;la limonade;la limonata
hot chocolate;die heiße Schokolade|der Kakao;el chocolate caliente;le chocolat chaud;la cioccolata calda
mineral water;das Mineralwasser;el agua mineral;l'eau minérale;l'acqua minerale
ice;das Eis;el hielo;la glace;il ghiaccio
glass;das Glas;el vaso;le verre;il bicchiere
bottle;die Flasche;la botella;la bouteille;la bottiglia
cup;die Tasse;la taza;la tasse;la tazza
drink (noun);das Getränk;la bebida;la boisson;la bevanda|la bibita`],["In the kitchen",`plate;der Teller;el plato;l'assiette;il piatto
bowl;die Schüssel|die Schale;el cuenco|el bol;le bol;la ciotola
knife;das Messer;el cuchillo;le couteau;il coltello
fork;die Gabel;el tenedor;la fourchette;la forchetta
spoon;der Löffel;la cuchara;la cuillère;il cucchiaio
pan;die Pfanne;la sartén;la poêle;la padella
pot (cooking);der Topf;la olla;la casserole|la marmite;la pentola
oven;der Ofen|der Backofen;el horno;le four;il forno
fridge;der Kühlschrank;la nevera|el frigorífico;le frigo|le réfrigérateur;il frigorifero|il frigo
cooker;der Herd;la cocina|el fogón;la cuisinière;il fornello`],["Kitchen things",`microwave;die Mikrowelle;el microondas;le micro-ondes;il microonde
kettle;der Wasserkocher;el hervidor;la bouilloire;il bollitore
napkin;die Serviette;la servilleta;la serviette;il tovagliolo
tablecloth;die Tischdecke;el mantel;la nappe;la tovaglia
tray;das Tablett;la bandeja;le plateau;il vassoio
jug;der Krug;la jarra;la carafe|le pichet;la caraffa|la brocca
tin (can);die Dose;la lata;la boîte de conserve|la canette;la lattina|la scatoletta
recipe;das Rezept;la receta;la recette;la ricetta
dishwasher;der Geschirrspüler;el lavavajillas;le lave-vaisselle;la lavastoviglie
chopping board;das Schneidebrett;la tabla de cortar;la planche à découper;il tagliere`],["Cooking",`to cook;kochen;cocinar;cuisiner;cucinare
to bake;backen;hornear;cuire au four;cuocere al forno|infornare
to fry;braten;freír;frire;friggere
to boil;kochen|sieden;hervir;bouillir;bollire
to cut;schneiden;cortar;couper;tagliare
to mix;mischen|mixen;mezclar;mélanger;mescolare
to taste;probieren|kosten;probar;goûter;assaggiare
to peel;schälen;pelar;éplucher;sbucciare
to pour;gießen|einschenken;verter|servir;verser;versare
to stir;umrühren|rühren;remover;remuer;mescolare|girare`],["Taste",`sweet;süß;dulce;sucré|doux;dolce
salty;salzig;salado;salé;salato
sour;sauer;agrio|ácido;acide|aigre;acido|aspro
bitter;bitter;amargo;amer;amaro
spicy;scharf;picante;épicé|piquant;piccante
delicious;köstlich|lecker;delicioso|rico;délicieux;delizioso|buonissimo
fresh;frisch;fresco;frais;fresco
raw;roh;crudo;cru;crudo
cooked;gekocht;cocido|cocinado;cuit;cotto
hungry;hungrig;hambriento;affamé;affamato`],["Sweets & snacks",`chocolate;die Schokolade;el chocolate;le chocolat;il cioccolato
biscuit;der Keks;la galleta;le biscuit;il biscotto
sweet (candy);die Süßigkeit|das Bonbon|das Zuckerl;el caramelo|el dulce;le bonbon;la caramella
ice cream;das Eis|die Eiscreme;el helado;la glace;il gelato
crisps;die Chips;las patatas fritas|las papas fritas;les chips;le patatine
chips (fries);die Pommes|die Pommes frites;las patatas fritas;les frites;le patatine fritte
popcorn;das Popcorn;las palomitas;le pop-corn;i popcorn
nut;die Nuss;la nuez|el fruto seco;la noix;la noce
pancake;der Pfannkuchen|die Palatschinke;el crep|la tortita;la crêpe;la crêpe|la frittella
pie;die Pastete|der Kuchen;el pastel|la tarta;la tarte|la tourte;la torta|il tortino`],["Ingredients",`salt;das Salz;la sal;le sel;il sale
pepper (spice);der Pfeffer;la pimienta;le poivre;il pepe
oil;das Öl;el aceite;l'huile;l'olio
vinegar;der Essig;el vinagre;le vinaigre;l'aceto
flour;das Mehl;la harina;la farine;la farina
rice;der Reis;el arroz;le riz;il riso
pasta;die Nudeln|die Pasta;la pasta;les pâtes;la pasta
cream;die Sahne|das Schlagobers|der Rahm;la nata|la crema;la crème;la panna
sauce;die Soße|die Sauce;la salsa;la sauce;la salsa|il sugo
spice;das Gewürz;la especia;l'épice;la spezia`],["At the restaurant",`restaurant;das Restaurant;el restaurante;le restaurant;il ristorante
menu;die Speisekarte;la carta|el menú;la carte|le menu;il menù
waiter;der Kellner;el camarero;le serveur;il cameriere
bill (restaurant);die Rechnung;la cuenta;l'addition;il conto
tip (money);das Trinkgeld;la propina;le pourboire;la mancia
café;das Café;la cafetería;le café;il bar|il caffè
to order;bestellen;pedir;commander;ordinare
to pay;bezahlen|zahlen;pagar;payer;pagare
reservation;die Reservierung;la reserva;la réservation;la prenotazione
cook (person);der Koch|die Köchin;el cocinero|la cocinera;le cuisinier|la cuisinière;il cuoco|la cuoca`],["Food shopping",`supermarket;der Supermarkt;el supermercado;le supermarché;il supermercato
bakery;die Bäckerei;la panadería;la boulangerie;il panificio|la panetteria
butcher's;die Metzgerei|die Fleischerei;la carnicería;la boucherie;la macelleria
market;der Markt;el mercado;le marché;il mercato
price;der Preis;el precio;le prix;il prezzo
basket;der Korb;la cesta;le panier;il cestino
trolley;der Einkaufswagen;el carrito;le chariot|le caddie;il carrello
checkout;die Kasse;la caja;la caisse;la cassa
receipt;der Kassenbon|die Quittung;el recibo|el tique;le ticket de caisse|le reçu;lo scontrino|la ricevuta
packet;die Packung|das Päckchen;el paquete;le paquet;il pacchetto`],["More food",`fruit;das Obst|die Frucht;la fruta;le fruit;la frutta
vegetable;das Gemüse;la verdura;le légume;la verdura
olive;die Olive;la aceituna;l'olive;l'oliva
almond;die Mandel;la almendra;l'amande;la mandorla
omelette;das Omelett;la tortilla|la omelette;l'omelette;la frittata
hamburger;der Hamburger;la hamburguesa;le hamburger;l'hamburger
seafood;die Meeresfrüchte;el marisco|los mariscos;les fruits de mer;i frutti di mare
dough;der Teig;la masa;la pâte;l'impasto
slice;die Scheibe;la rebanada|la loncha;la tranche;la fetta
piece;das Stück;el trozo|el pedazo;le morceau;il pezzo`]],tm=[["Farm animals",`sheep;das Schaf;la oveja;le mouton;la pecora
goat;die Ziege|die Geiß;la cabra;la chèvre;la capra
hen;die Henne|das Huhn;la gallina;la poule;la gallina
rooster;der Hahn;el gallo;le coq;il gallo
duck;die Ente;el pato;le canard;l'anatra
goose;die Gans;el ganso|la oca;l'oie;l'oca
donkey;der Esel;el burro;l'âne;l'asino
bull;der Stier;el toro;le taureau;il toro
lamb;das Lamm;el cordero;l'agneau;l'agnello
calf;das Kalb;el ternero;le veau;il vitello`],["Wild animals",`lion;der Löwe;el león;le lion;il leone
tiger;der Tiger;el tigre;le tigre;la tigre
elephant;der Elefant;el elefante;l'éléphant;l'elefante
monkey;der Affe;el mono;le singe;la scimmia
giraffe;die Giraffe;la jirafa;la girafe;la giraffa
zebra;das Zebra;la cebra;le zèbre;la zebra
wolf;der Wolf;el lobo;le loup;il lupo
fox;der Fuchs;el zorro;le renard;la volpe
deer;der Hirsch|das Reh;el ciervo;le cerf;il cervo
snake;die Schlange;la serpiente;le serpent;il serpente`],["More animals",`squirrel;das Eichhörnchen;la ardilla;l'écureuil;lo scoiattolo
hedgehog;der Igel;el erizo;le hérisson;il riccio
frog;der Frosch;la rana;la grenouille;la rana
turtle;die Schildkröte;la tortuga;la tortue;la tartaruga
crocodile;das Krokodil;el cocodrilo;le crocodile;il coccodrillo
kangaroo;das Känguru;el canguro;le kangourou;il canguro
camel;das Kamel;el camello;le chameau;il cammello
rat;die Ratte;la rata;le rat;il ratto
bat (animal);die Fledermaus;el murciélago;la chauve-souris;il pipistrello
hamster;der Hamster;el hámster;le hamster;il criceto`],["Birds",`eagle;der Adler;el águila;l'aigle;l'aquila
owl;die Eule;el búho|la lechuza;le hibou|la chouette;il gufo
pigeon;die Taube;la paloma;le pigeon;il piccione
swan;der Schwan;el cisne;le cygne;il cigno
parrot;der Papagei;el loro;le perroquet;il pappagallo
penguin;der Pinguin;el pingüino;le pingouin|le manchot;il pinguino
sparrow;der Spatz|der Sperling;el gorrión;le moineau;il passero
crow;die Krähe;el cuervo;le corbeau;il corvo
feather;die Feder;la pluma;la plume;la piuma
nest;das Nest;el nido;le nid;il nido`],["Insects",`bee;die Biene;la abeja;l'abeille;l'ape
butterfly;der Schmetterling;la mariposa;le papillon;la farfalla
fly (insect);die Fliege;la mosca;la mouche;la mosca
ant;die Ameise;la hormiga;la fourmi;la formica
spider;die Spinne;la araña;l'araignée;il ragno
mosquito;die Mücke|die Gelse;el mosquito;le moustique;la zanzara
wasp;die Wespe;la avispa;la guêpe;la vespa
beetle;der Käfer;el escarabajo;le scarabée;lo scarabeo
snail;die Schnecke;el caracol;l'escargot;la lumaca
worm;der Wurm;el gusano;le ver;il verme`],["Sea life",`shark;der Hai;el tiburón;le requin;lo squalo
whale;der Wal;la ballena;la baleine;la balena
dolphin;der Delfin;el delfín;le dauphin;il delfino
octopus;der Krake|der Oktopus;el pulpo;la pieuvre|le poulpe;il polpo
crab;die Krabbe|der Krebs;el cangrejo;le crabe;il granchio
jellyfish;die Qualle;la medusa;la méduse;la medusa
seal;die Robbe|der Seehund;la foca;le phoque;la foca
shell;die Muschel;la concha;le coquillage;la conchiglia
wave;die Welle;la ola;la vague;l'onda
coral;die Koralle;el coral;le corail;il corallo`],["Pets & animal words",`pet;das Haustier;la mascota;l'animal de compagnie;l'animale domestico
puppy;der Welpe;el cachorro;le chiot;il cucciolo
kitten;das Kätzchen;el gatito;le chaton;il gattino
tail;der Schwanz;la cola;la queue;la coda
fur;das Fell;el pelo|el pelaje;la fourrure|le pelage;la pelliccia|il pelo
wing;der Flügel;el ala;l'aile;l'ala
paw;die Pfote;la pata;la patte;la zampa
claw;die Kralle;la garra;la griffe;l'artiglio
cage;der Käfig;la jaula;la cage;la gabbia
zoo;der Zoo;el zoo;le zoo;lo zoo`],["Weather",`weather;das Wetter;el tiempo;le temps;il tempo
cloud;die Wolke;la nube;le nuage;la nuvola
storm;der Sturm|das Unwetter;la tormenta;la tempête|l'orage;la tempesta
thunder;der Donner;el trueno;le tonnerre;il tuono
lightning;der Blitz;el relámpago|el rayo;l'éclair;il fulmine|il lampo
fog;der Nebel;la niebla;le brouillard;la nebbia
rainbow;der Regenbogen;el arcoíris;l'arc-en-ciel;l'arcobaleno
temperature;die Temperatur;la temperatura;la température;la temperatura
umbrella;der Regenschirm|der Schirm;el paraguas;le parapluie;l'ombrello
hail;der Hagel;el granizo;la grêle;la grandine`],["Weather words",`sunny;sonnig;soleado;ensoleillé;soleggiato|assolato
cloudy;bewölkt;nublado;nuageux;nuvoloso
rainy;regnerisch;lluvioso;pluvieux;piovoso
windy;windig;ventoso;venteux;ventoso
warm;warm;cálido|caliente;chaud;caldo
cool;kühl;fresco;frais;fresco
wet;nass;mojado;mouillé;bagnato
dry;trocken;seco;sec;secco
frost;der Frost;la helada;le gel;il gelo
heat;die Hitze;el calor;la chaleur;il caldo`],["Seasons",`season;die Jahreszeit;la estación;la saison;la stagione
spring;der Frühling|das Frühjahr;la primavera;le printemps;la primavera
summer;der Sommer;el verano;l'été;l'estate
autumn;der Herbst;el otoño;l'automne;l'autunno
winter;der Winter;el invierno;l'hiver;l'inverno
climate;das Klima;el clima;le climat;il clima
snowman;der Schneemann;el muñeco de nieve;le bonhomme de neige;il pupazzo di neve
sunshine;der Sonnenschein;el sol|la luz del sol;le soleil;il sole
shade;der Schatten;la sombra;l'ombre;l'ombra
leaf;das Blatt;la hoja;la feuille;la foglia`],["Plants",`plant;die Pflanze;la planta;la plante;la pianta
grass;das Gras;la hierba|el césped;l'herbe;l'erba
rose;die Rose;la rosa;la rose;la rosa
tulip;die Tulpe;el tulipán;la tulipe;il tulipano
sunflower;die Sonnenblume;el girasol;le tournesol;il girasole
seed;der Samen;la semilla;la graine;il seme
root;die Wurzel;la raíz;la racine;la radice
branch;der Ast|der Zweig;la rama;la branche;il ramo
bush;der Busch|der Strauch;el arbusto;le buisson;il cespuglio
moss;das Moos;el musgo;la mousse;il muschio`],["Landscape",`forest;der Wald;el bosque;la forêt;la foresta|il bosco
lake;der See;el lago;le lac;il lago
hill;der Hügel;la colina;la colline;la collina
valley;das Tal;el valle;la vallée;la valle
field;das Feld;el campo;le champ;il campo
meadow;die Wiese;el prado;le pré|la prairie;il prato
island;die Insel;la isla;l'île;l'isola
coast;die Küste;la costa;la côte;la costa
desert;die Wüste;el desierto;le désert;il deserto
cave;die Höhle;la cueva;la grotte;la grotta`],["Nature",`nature;die Natur;la naturaleza;la nature;la natura
stone;der Stein;la piedra;la pierre;la pietra
rock;der Fels|der Felsen;la roca;le rocher;la roccia
sand;der Sand;la arena;le sable;la sabbia
earth (soil);die Erde;la tierra;la terre;la terra
mud;der Schlamm|der Matsch;el barro;la boue;il fango
waterfall;der Wasserfall;la cascada;la cascade;la cascata
volcano;der Vulkan;el volcán;le volcan;il vulcano
glacier;der Gletscher;el glaciar;le glacier;il ghiacciaio
pond;der Teich;el estanque;l'étang;lo stagno`],["Sky & space",`moon;der Mond;la luna;la lune;la luna
star;der Stern;la estrella;l'étoile;la stella
planet;der Planet;el planeta;la planète;il pianeta
Earth (planet);die Erde;la Tierra;la Terre;la Terra
space (universe);der Weltraum|das Weltall;el espacio;l'espace;lo spazio
sunrise;der Sonnenaufgang;el amanecer;le lever du soleil;l'alba
sunset;der Sonnenuntergang;la puesta de sol|el atardecer;le coucher du soleil;il tramonto
air;die Luft;el aire;l'air;l'aria
light;das Licht;la luz;la lumière;la luce
darkness;die Dunkelheit;la oscuridad;l'obscurité;il buio|l'oscurità`],["The world",`world;die Welt;el mundo;le monde;il mondo
country;das Land;el país;le pays;il paese
continent;der Kontinent;el continente;le continent;il continente
ocean;der Ozean;el océano;l'océan;l'oceano
north;der Norden;el norte;le nord;il nord
south;der Süden;el sur;le sud;il sud
east;der Osten;el este;l'est;l'est
west;der Westen;el oeste;l'ouest;l'ovest
border;die Grenze;la frontera;la frontière;il confine|la frontiera
capital (city);die Hauptstadt;la capital;la capitale;la capitale`],["Countries",`Germany;Deutschland;Alemania;l'Allemagne;la Germania
Austria;Österreich;Austria;l'Autriche;l'Austria
Switzerland;die Schweiz;Suiza;la Suisse;la Svizzera
Spain;Spanien;España;l'Espagne;la Spagna
France;Frankreich;Francia;la France;la Francia
Italy;Italien;Italia;l'Italie;l'Italia
England;England;Inglaterra;l'Angleterre;l'Inghilterra
America;Amerika;América;l'Amérique;l'America
Europe;Europa;Europa;l'Europe;l'Europa
Greece;Griechenland;Grecia;la Grèce;la Grecia`],["The environment",`environment;die Umwelt;el medio ambiente;l'environnement;l'ambiente
pollution;die Verschmutzung;la contaminación;la pollution;l'inquinamento
rubbish;der Müll|der Abfall;la basura;les déchets|les ordures;la spazzatura|i rifiuti
to recycle;recyceln|wiederverwerten;reciclar;recycler;riciclare
energy;die Energie;la energía;l'énergie;l'energia
solar energy;die Solarenergie;la energía solar;l'énergie solaire;l'energia solare
to protect;schützen;proteger;protéger;proteggere
plastic;das Plastik|der Kunststoff;el plástico;le plastique;la plastica
nature reserve;das Naturschutzgebiet;la reserva natural;la réserve naturelle;la riserva naturale
fire;das Feuer;el fuego;le feu;il fuoco`]],im=[["Face",`face;das Gesicht;la cara;le visage;la faccia|il viso
hair;das Haar|die Haare;el pelo|el cabello;les cheveux;i capelli
tooth;der Zahn;el diente;la dent;il dente
lip;die Lippe;el labio;la lèvre;il labbro
tongue;die Zunge;la lengua;la langue (bouche);la lingua (bocca)
cheek;die Wange|die Backe;la mejilla;la joue;la guancia
chin;das Kinn;la barbilla;le menton;il mento
forehead;die Stirn;la frente;le front;la fronte
eyebrow;die Augenbraue;la ceja;le sourcil;il sopracciglio
beard;der Bart;la barba;la barbe;la barba`],["The body",`body;der Körper;el cuerpo;le corps;il corpo
neck;der Hals;el cuello;le cou;il collo
shoulder;die Schulter;el hombro;l'épaule;la spalla
back (body);der Rücken;la espalda;le dos;la schiena
stomach;der Bauch|der Magen;el estómago|la barriga;le ventre|l'estomac;lo stomaco|la pancia
chest;die Brust;el pecho;la poitrine;il petto
finger;der Finger;el dedo;le doigt;il dito
thumb;der Daumen;el pulgar;le pouce;il pollice
knee;das Knie;la rodilla;le genou;il ginocchio
toe;die Zehe;el dedo del pie;l'orteil;il dito del piede`],["Inside the body",`brain;das Gehirn;el cerebro;le cerveau;il cervello
blood;das Blut;la sangre;le sang;il sangue
bone;der Knochen;el hueso;l'os;l'osso
skin;die Haut;la piel;la peau;la pelle
muscle;der Muskel;el músculo;le muscle;il muscolo
lung;die Lunge;el pulmón;le poumon;il polmone
throat;der Hals|die Kehle;la garganta;la gorge;la gola
elbow;der Ellbogen;el codo;le coude;il gomito
wrist;das Handgelenk;la muñeca;le poignet;il polso
ankle;der Knöchel;el tobillo;la cheville;la caviglia`],["Health",`health;die Gesundheit;la salud;la santé;la salute
healthy;gesund;sano;sain|en bonne santé;sano
ill;krank;enfermo;malade;malato
illness;die Krankheit;la enfermedad;la maladie;la malattia
pain;der Schmerz;el dolor;la douleur;il dolore
headache;die Kopfschmerzen|das Kopfweh;el dolor de cabeza;le mal de tête;il mal di testa
cold (illness);die Erkältung|der Schnupfen;el resfriado;le rhume;il raffreddore
fever;das Fieber;la fiebre;la fièvre;la febbre
cough;der Husten;la tos;la toux;la tosse
flu;die Grippe;la gripe;la grippe;l'influenza`],["At the doctor",`medicine;das Medikament|die Medizin;el medicamento|la medicina;le médicament;la medicina
pill;die Tablette;la pastilla;le comprimé|la pilule;la pastiglia|la pillola
pharmacy;die Apotheke;la farmacia;la pharmacie;la farmacia
nurse;die Krankenschwester|der Krankenpfleger|die Pflegerin;el enfermero|la enfermera;l'infirmier|l'infirmière;l'infermiere|l'infermiera
dentist;der Zahnarzt|die Zahnärztin;el dentista|la dentista;le dentiste;il dentista
appointment;der Termin;la cita;le rendez-vous;l'appuntamento
ambulance;der Krankenwagen|die Rettung;la ambulancia;l'ambulance;l'ambulanza
injection;die Spritze|die Injektion;la inyección;la piqûre|l'injection;l'iniezione
prescription;das Rezept (Arzt);la receta (médica);l'ordonnance;la ricetta (medica)
patient;der Patient|die Patientin;el paciente|la paciente;le patient|la patiente;il paziente|la paziente`],["Accidents",`accident;der Unfall;el accidente;l'accident;l'incidente
injury;die Verletzung;la herida|la lesión;la blessure;la ferita
wound;die Wunde;la herida;la plaie|la blessure;la ferita
plaster (for a cut);das Pflaster;la tirita|la curita;le pansement;il cerotto
bandage;der Verband;la venda;le bandage;la benda
to hurt;wehtun|verletzen;doler|hacer daño;faire mal|blesser;fare male
to fall;fallen|stürzen;caer|caerse;tomber;cadere
to break;brechen;romper;casser|briser;rompere
blind;blind;ciego;aveugle;cieco
deaf;taub|gehörlos;sordo;sourd;sordo`],["Body verbs",`to breathe;atmen;respirar;respirer;respirare
to smell;riechen;oler;sentir|sentir l'odeur;annusare|odorare
to hear;hören;oír;entendre;sentire|udire
to touch;berühren|anfassen;tocar;toucher;toccare
to feel;fühlen;sentir;sentir|ressentir;sentire|provare
to smile;lächeln;sonreír;sourire;sorridere
to laugh;lachen;reír;rire;ridere
to cry;weinen;llorar;pleurer;piangere
to sneeze;niesen;estornudar;éternuer;starnutire
to yawn;gähnen;bostezar;bâiller;sbadigliare`],["Feelings",`feeling;das Gefühl;el sentimiento;le sentiment;il sentimento
love;die Liebe;el amor;l'amour;l'amore
joy;die Freude;la alegría;la joie;la gioia
fear;die Angst|die Furcht;el miedo;la peur;la paura
anger;die Wut|der Zorn;la ira|el enfado;la colère;la rabbia
sadness;die Traurigkeit;la tristeza;la tristesse;la tristezza
hope;die Hoffnung;la esperanza;l'espoir;la speranza
surprise;die Überraschung;la sorpresa;la surprise;la sorpresa
worry;die Sorge;la preocupación;l'inquiétude|le souci;la preoccupazione
pride;der Stolz;el orgullo;la fierté;l'orgoglio`],["How do you feel?",`tired;müde;cansado;fatigué;stanco
angry;wütend|böse;enfadado|enojado;en colère|fâché;arrabbiato
afraid;ängstlich;asustado;effrayé;spaventato
nervous;nervös;nervioso;nerveux;nervoso
bored;gelangweilt;aburrido;ennuyé;annoiato
excited;aufgeregt|begeistert;emocionado;excité|enthousiaste;emozionato|eccitato
proud;stolz;orgulloso;fier;orgoglioso
lonely;einsam;solo|solitario;seul|solitaire;solo|solitario
calm;ruhig;tranquilo;calme;calmo|tranquillo
surprised;überrascht;sorprendido;surpris;sorpreso`],["More feelings",`worried;besorgt;preocupado;inquiet|soucieux;preoccupato
jealous;eifersüchtig;celoso;jaloux;geloso
embarrassed;verlegen|peinlich berührt;avergonzado;gêné|embarrassé;imbarazzato
grateful;dankbar;agradecido;reconnaissant;grato
disappointed;enttäuscht;decepcionado;déçu;deluso
relaxed;entspannt;relajado;détendu;rilassato
stressed;gestresst;estresado;stressé;stressato
confused;verwirrt;confundido;confus;confuso
curious;neugierig;curioso;curieux;curioso
shy;schüchtern;tímido;timide;timido`],["Personality",`kind;freundlich|nett;amable;gentil;gentile
friendly;freundlich;simpático|amable;sympathique|aimable;simpatico|cordiale
funny;lustig|witzig;divertido|gracioso;drôle|amusant;divertente
clever;klug|schlau;listo|inteligente;intelligent|malin;intelligente|furbo
lazy;faul;perezoso|vago;paresseux;pigro
brave;mutig|tapfer;valiente;courageux;coraggioso
honest;ehrlich;honesto|sincero;honnête;onesto
polite;höflich;educado;poli;educato|cortese
rude;unhöflich|frech;maleducado|grosero;impoli|grossier;maleducato
patient (calm);geduldig;paciente;patient;paziente`],["Character",`generous;großzügig;generoso;généreux;generoso
selfish;egoistisch;egoísta;égoïste;egoista
serious;ernst;serio;sérieux;serio
quiet;leise|still|ruhig;callado|silencioso;silencieux|calme;silenzioso|tranquillo
loud;laut;ruidoso|fuerte;bruyant|fort;rumoroso|forte
strict;streng;estricto;strict|sévère;severo|rigido
strong;stark;fuerte;fort;forte
weak;schwach;débil;faible;debole
careful;vorsichtig;cuidadoso|prudente;prudent|soigneux;prudente|attento
crazy;verrückt;loco;fou;pazzo`],["Looks",`tall;groß;alto;grand;alto
short;klein|kurz;bajo|corto;petit|court;basso|corto
thin;dünn|schlank;delgado|flaco;mince;magro
fat;dick;gordo;gros;grasso
beautiful;schön;hermoso|bonito;beau;bello
pretty;hübsch;guapo|bonito;joli;carino|grazioso
ugly;hässlich;feo;laid|moche;brutto
young;jung;joven;jeune;giovane
blond;blond;rubio;blond;biondo
curly;lockig;rizado;frisé|bouclé;riccio`],["Hygiene",`soap;die Seife;el jabón;le savon;il sapone
shampoo;das Shampoo;el champú;le shampoing;lo shampoo
toothbrush;die Zahnbürste;el cepillo de dientes;la brosse à dents;lo spazzolino
toothpaste;die Zahnpasta;la pasta de dientes;le dentifrice;il dentifricio
towel;das Handtuch;la toalla;la serviette (de bain);l'asciugamano
comb;der Kamm;el peine;le peigne;il pettine
shower;die Dusche;la ducha;la douche;la doccia
bath;das Bad|die Badewanne;el baño|la bañera;le bain|la baignoire;il bagno|la vasca
to wash;waschen;lavar;laver;lavare
to brush;bürsten|putzen;cepillar;brosser;spazzolare`],["Sleep & rest",`sleep;der Schlaf;el sueño;le sommeil;il sonno
dream;der Traum;el sueño (al dormir);le rêve;il sogno
to dream;träumen;soñar;rêver;sognare
to wake up;aufwachen;despertarse;se réveiller;svegliarsi
to get up;aufstehen;levantarse;se lever;alzarsi
to rest;sich ausruhen;descansar;se reposer;riposare
pillow;das Kissen|der Polster;la almohada;l'oreiller;il cuscino
blanket;die Decke;la manta;la couverture;la coperta
alarm clock;der Wecker;el despertador;le réveil;la sveglia
nap;das Nickerchen;la siesta;la sieste;il pisolino`]],nm=[["Rooms",`living room;das Wohnzimmer;el salón|la sala de estar;le salon;il soggiorno|il salotto
bedroom;das Schlafzimmer;el dormitorio;la chambre (à coucher);la camera da letto
bathroom;das Badezimmer|das Bad;el cuarto de baño|el baño;la salle de bains;il bagno
toilet;die Toilette|das WC|das Klo;el váter|el inodoro|el baño;les toilettes;il gabinetto|la toilette
hall (in a flat);der Flur|das Vorzimmer;el pasillo|el vestíbulo;le couloir|l'entrée;l'ingresso|il corridoio
cellar;der Keller;el sótano;la cave;la cantina
attic;der Dachboden;el desván|el ático;le grenier;la soffitta
balcony;der Balkon;el balcón;le balcon;il balcone
garage;die Garage;el garaje;le garage;il garage
stairs;die Treppe|die Stiege;la escalera;l'escalier;la scala|le scale`],["Furniture",`sofa;das Sofa|die Couch;el sofá;le canapé;il divano
armchair;der Sessel;el sillón;le fauteuil;la poltrona
wardrobe;der Kleiderschrank|der Kasten;el armario;l'armoire;l'armadio
cupboard;der Schrank|der Kasten;el armario|la alacena;le placard;l'armadietto|la credenza
shelf;das Regal;la estantería|el estante;l'étagère;lo scaffale|la mensola
desk;der Schreibtisch;el escritorio;le bureau;la scrivania
drawer;die Schublade|die Lade;el cajón;le tiroir;il cassetto
mirror;der Spiegel;el espejo;le miroir;lo specchio
lamp;die Lampe;la lámpara;la lampe;la lampada
carpet;der Teppich;la alfombra;le tapis;il tappeto`],["Parts of a house",`wall;die Wand|die Mauer;la pared;le mur;il muro|la parete
floor (ground);der Boden|der Fußboden;el suelo;le sol;il pavimento
ceiling;die Decke (Zimmer);el techo;le plafond;il soffitto
roof;das Dach;el tejado;le toit;il tetto
floor (storey);der Stock|das Stockwerk;el piso|la planta;l'étage;il piano
lift;der Aufzug|der Lift;el ascensor;l'ascenseur;l'ascensore
chimney;der Schornstein|der Rauchfang;la chimenea;la cheminée;il camino
gate;das Tor;la puerta|el portón;le portail;il cancello
fence;der Zaun;la valla|la cerca;la clôture;il recinto|la recinzione
doorbell;die Klingel|die Türglocke;el timbre;la sonnette;il campanello`],["At home",`flat;die Wohnung;el piso|el apartamento;l'appartement;l'appartamento
home;das Zuhause|das Heim;el hogar|la casa;la maison|le foyer;la casa
rent;die Miete;el alquiler;le loyer;l'affitto
neighbourhood;die Nachbarschaft|das Viertel;el barrio;le quartier;il quartiere
address;die Adresse;la dirección;l'adresse;l'indirizzo
to live;wohnen|leben;vivir;habiter|vivre;abitare|vivere
to move (house);umziehen;mudarse;déménager;traslocare
furniture;die Möbel;los muebles;les meubles;i mobili
curtain;der Vorhang;la cortina;le rideau;la tenda
heating;die Heizung;la calefacción;le chauffage;il riscaldamento`],["Housework",`to clean;putzen|sauber machen;limpiar;nettoyer;pulire
to tidy up;aufräumen;ordenar;ranger;mettere in ordine|riordinare
to sweep;kehren|fegen;barrer;balayer;spazzare
to iron;bügeln;planchar;repasser;stirare
to vacuum;staubsaugen;pasar la aspiradora|aspirar;passer l'aspirateur;passare l'aspirapolvere
washing machine;die Waschmaschine;la lavadora;la machine à laver|le lave-linge;la lavatrice
vacuum cleaner;der Staubsauger;la aspiradora;l'aspirateur;l'aspirapolvere
broom;der Besen;la escoba;le balai;la scopa
bucket;der Eimer|der Kübel;el cubo;le seau;il secchio
dust;der Staub;el polvo;la poussière;la polvere`],["Around the house",`light switch;der Lichtschalter;el interruptor;l'interrupteur;l'interruttore
socket;die Steckdose;el enchufe;la prise;la presa
light bulb;die Glühbirne;la bombilla;l'ampoule;la lampadina
candle;die Kerze;la vela;la bougie;la candela
clock;die Uhr;el reloj;l'horloge|la pendule;l'orologio
picture;das Bild;el cuadro|la imagen;le tableau|l'image;il quadro|l'immagine
vase;die Vase;el jarrón|el florero;le vase;il vaso
box;die Schachtel|die Kiste|der Karton;la caja;la boîte;la scatola
bin;der Mülleimer|der Mistkübel;el cubo de basura;la poubelle;il bidone|la pattumiera
plant pot;der Blumentopf;la maceta;le pot de fleurs;il vaso (per piante)`],["Tools",`tool;das Werkzeug;la herramienta;l'outil;l'attrezzo|lo strumento
hammer;der Hammer;el martillo;le marteau;il martello
nail (metal);der Nagel;el clavo;le clou;il chiodo
screw;die Schraube;el tornillo;la vis;la vite
screwdriver;der Schraubenzieher;el destornillador;le tournevis;il cacciavite
saw;die Säge;la sierra;la scie;la sega
ladder;die Leiter;la escalera de mano;l'échelle;la scala (a pioli)
rope;das Seil;la cuerda;la corde;la corda
scissors;die Schere;las tijeras;les ciseaux;le forbici
glue;der Kleber|der Leim;el pegamento;la colle;la colla`],["Clothes",`clothes;die Kleidung|die Kleider;la ropa;les vêtements;i vestiti
T-shirt;das T-Shirt;la camiseta;le tee-shirt|le t-shirt;la maglietta
jeans;die Jeans;los vaqueros|los jeans;le jean;i jeans
coat;der Mantel;el abrigo;le manteau;il cappotto
blouse;die Bluse;la blusa;le chemisier|la blouse;la camicetta
shorts;die Shorts|die kurze Hose;los pantalones cortos;le short;i pantaloncini
suit;der Anzug;el traje;le costume;l'abito|il completo
tie;die Krawatte;la corbata;la cravate;la cravatta
pyjamas;der Schlafanzug|der Pyjama;el pijama;le pyjama;il pigiama
uniform;die Uniform;el uniforme;l'uniforme;l'uniforme`],["Shoes & accessories",`boot;der Stiefel;la bota;la botte;lo stivale
trainers;die Turnschuhe|die Sportschuhe;las zapatillas (de deporte);les baskets;le scarpe da ginnastica
sandal;die Sandale;la sandalia;la sandale;il sandalo
belt;der Gürtel;el cinturón;la ceinture;la cintura
scarf;der Schal;la bufanda;l'écharpe;la sciarpa
glove;der Handschuh;el guante;le gant;il guanto
cap;die Kappe|die Mütze;la gorra;la casquette;il berretto
glasses;die Brille;las gafas;les lunettes;gli occhiali
watch;die Armbanduhr|die Uhr;el reloj (de pulsera);la montre;l'orologio (da polso)
umbrella (sun);der Sonnenschirm;la sombrilla;le parasol;l'ombrellone`],["Jewellery & more",`ring;der Ring;el anillo;la bague;l'anello
necklace;die Halskette;el collar;le collier;la collana
earring;der Ohrring;el pendiente|el arete;la boucle d'oreille;l'orecchino
bracelet;das Armband;la pulsera;le bracelet;il braccialetto
wallet;die Geldbörse|das Portemonnaie|die Brieftasche;la cartera;le portefeuille;il portafoglio
purse;das Portemonnaie|die Geldtasche;el monedero;le porte-monnaie;il borsellino
handbag;die Handtasche;el bolso de mano;le sac à main;la borsetta
backpack;der Rucksack;la mochila;le sac à dos;lo zaino
pocket;die Tasche (Kleidung)|die Hosentasche;el bolsillo;la poche;la tasca
button;der Knopf;el botón;le bouton;il bottone`],["Getting dressed",`to wear;tragen;llevar|usar;porter;indossare|portare
to put on;anziehen;ponerse;mettre|enfiler;mettersi|indossare
to take off;ausziehen;quitarse;enlever;togliersi
to get dressed;sich anziehen;vestirse;s'habiller;vestirsi
to try on;anprobieren;probarse;essayer;provare
size;die Größe;la talla;la taille;la taglia
fashion;die Mode;la moda;la mode;la moda
style;der Stil;el estilo;le style;lo stile
cotton;die Baumwolle;el algodón;le coton;il cotone
wool;die Wolle;la lana;la laine;la lana`],["Materials",`wood;das Holz;la madera;le bois;il legno
metal;das Metall;el metal;le métal;il metallo
iron (metal);das Eisen;el hierro;le fer;il ferro
gold;das Gold;el oro;l'or;l'oro
silver;das Silber;la plata;l'argent;l'argento
paper;das Papier;el papel;le papier;la carta
leather;das Leder;el cuero|la piel;le cuir;la pelle|il cuoio
silk;die Seide;la seda;la soie;la seta
rubber;der Gummi;la goma|el caucho;le caoutchouc;la gomma
cardboard;der Karton|die Pappe;el cartón;le carton;il cartone`],["Shapes",`shape;die Form;la forma;la forme;la forma
circle;der Kreis;el círculo;le cercle;il cerchio
square;das Quadrat;el cuadrado;le carré;il quadrato
triangle;das Dreieck;el triángulo;le triangle;il triangolo
line;die Linie;la línea;la ligne;la linea
point;der Punkt;el punto;le point;il punto
round;rund;redondo;rond;rotondo
straight;gerade;recto;droit;dritto
size (how big);die Größe (Ausmaß);el tamaño;la taille (dimension);la dimensione
edge;der Rand|die Kante;el borde;le bord;il bordo`],["More colours",`purple;lila|violett;morado;violet;viola
gold (colour);golden;dorado;doré;dorato|d'oro
silver (colour);silbern;plateado;argenté;argentato|d'argento
dark;dunkel;oscuro;foncé|sombre;scuro
light (colour);hell;claro;clair;chiaro
colour;die Farbe;el color;la couleur;il colore
beige;beige;beige;beige;beige
turquoise;türkis;turquesa;turquoise;turchese
colourful;bunt;colorido|de colores;coloré;colorato
to paint;malen|streichen;pintar;peindre;dipingere`],["Things",`thing;das Ding|die Sache;la cosa;la chose;la cosa
object;der Gegenstand|das Objekt;el objeto;l'objet;l'oggetto
lid;der Deckel;la tapa;le couvercle;il coperchio
handle;der Griff;el mango|el asa;la poignée;il manico|la maniglia
bag (plastic);die Tüte|das Sackerl;la bolsa;le sac (en plastique);il sacchetto
battery;die Batterie;la pila|la batería;la pile|la batterie;la pila|la batteria
lighter;das Feuerzeug;el mechero|el encendedor;le briquet;l'accendino
match (fire);das Streichholz|das Zündholz;la cerilla|el fósforo;l'allumette;il fiammifero
torch;die Taschenlampe;la linterna;la lampe de poche;la torcia
toy;das Spielzeug;el juguete;le jouet;il giocattolo`]],om=[["In town",`town;die Kleinstadt|der Ort;el pueblo;la petite ville;la cittadina
village;das Dorf;la aldea|el pueblo;le village;il villaggio|il paese
square (in a town);der Platz;la plaza;la place;la piazza
bridge;die Brücke;el puente;le pont;il ponte
building;das Gebäude;el edificio;le bâtiment;l'edificio
tower;der Turm;la torre;la tour;la torre
castle;die Burg|das Schloss;el castillo;le château;il castello
museum;das Museum;el museo;le musée;il museo
theatre;das Theater;el teatro;le théâtre;il teatro
cinema;das Kino;el cine;le cinéma;il cinema`],["Places in town",`post office;die Post|das Postamt;la oficina de correos;la poste;l'ufficio postale|la posta
bank (money);die Bank;el banco;la banque;la banca
police station;die Polizeiwache|die Polizeiinspektion;la comisaría;le commissariat;la questura|la stazione di polizia
town hall;das Rathaus;el ayuntamiento;la mairie|l'hôtel de ville;il municipio|il comune
hotel;das Hotel;el hotel;l'hôtel;l'albergo|l'hotel
swimming pool;das Schwimmbad|das Hallenbad;la piscina;la piscine;la piscina
stadium;das Stadion;el estadio;le stade;lo stadio
factory;die Fabrik;la fábrica;l'usine;la fabbrica
office;das Büro;la oficina;le bureau (lieu);l'ufficio
university;die Universität|die Uni;la universidad;l'université;l'università`],["Shops",`bookshop;die Buchhandlung;la librería;la librairie;la libreria
clothes shop;das Bekleidungsgeschäft|das Modegeschäft;la tienda de ropa;le magasin de vêtements;il negozio di abbigliamento
shopping centre;das Einkaufszentrum;el centro comercial;le centre commercial;il centro commerciale
kiosk;der Kiosk|die Trafik;el quiosco;le kiosque;l'edicola|il chiosco
hairdresser's;der Friseur|der Frisiersalon;la peluquería;le salon de coiffure;il parrucchiere
florist's;das Blumengeschäft;la floristería;le fleuriste;il fioraio
toy shop;das Spielwarengeschäft;la juguetería;le magasin de jouets;il negozio di giocattoli
shop window;das Schaufenster;el escaparate;la vitrine;la vetrina
customer;der Kunde|die Kundin;el cliente|la clienta;le client|la cliente;il cliente|la cliente
shop assistant;der Verkäufer|die Verkäuferin;el dependiente|la dependienta;le vendeur|la vendeuse;il commesso|la commessa`],["Streets",`road;die Straße;la carretera;la route;la strada
pavement;der Gehsteig|der Bürgersteig;la acera;le trottoir;il marciapiede
corner;die Ecke;la esquina;le coin;l'angolo
crossroads;die Kreuzung;el cruce;le carrefour;l'incrocio
traffic lights;die Ampel;el semáforo;le feu (de circulation);il semaforo
zebra crossing;der Zebrastreifen;el paso de cebra;le passage piéton;le strisce pedonali
roundabout;der Kreisverkehr;la rotonda;le rond-point;la rotonda|la rotatoria
motorway;die Autobahn;la autopista;l'autoroute;l'autostrada
traffic;der Verkehr;el tráfico;la circulation;il traffico
car park;der Parkplatz;el aparcamiento|el parking;le parking;il parcheggio`],["Directions",`left;links;a la izquierda;à gauche;a sinistra
right (direction);rechts;a la derecha;à droite;a destra
straight on;geradeaus;todo recto;tout droit;sempre dritto
here;hier;aquí;ici;qui
there;dort|da;allí|ahí;là|là-bas;là|lì
near;nah|in der Nähe;cerca;près;vicino
far;weit|weit weg;lejos;loin;lontano
opposite;gegenüber;enfrente;en face;di fronte
next to;neben;al lado de;à côté de;accanto a
behind;hinter;detrás de;derrière;dietro`],["Finding the way",`way;der Weg;el camino;le chemin;la strada|il cammino
direction;die Richtung;la dirección (rumbo);la direction;la direzione
to turn;abbiegen;girar;tourner;girare
to cross;überqueren;cruzar;traverser;attraversare
to follow;folgen;seguir;suivre;seguire
to look for;suchen;buscar;chercher;cercare
to find;finden;encontrar;trouver;trovare
lost;verloren|verirrt;perdido;perdu;perso
sign;das Schild;la señal|el letrero;le panneau;il cartello
entrance;der Eingang;la entrada;l'entrée (porte);l'ingresso (porta)`],["Transport",`motorbike;das Motorrad;la moto;la moto;la moto
taxi;das Taxi;el taxi;le taxi;il taxi
underground;die U-Bahn;el metro;le métro;la metropolitana
tram;die Straßenbahn|die Bim;el tranvía;le tramway;il tram
lorry;der Lastwagen|der Lkw;el camión;le camion;il camion
boat;das Boot;el barco|la barca;le bateau;la barca|la nave
ship;das Schiff;el barco|el buque;le navire;la nave
helicopter;der Hubschrauber;el helicóptero;l'hélicoptère;l'elicottero
van;der Lieferwagen|der Transporter;la furgoneta;la camionnette;il furgone
scooter;der Roller;el patinete|la vespa;la trottinette|le scooter;il monopattino|lo scooter`],["On the road",`driver;der Fahrer|die Fahrerin;el conductor|la conductora;le conducteur|la conductrice;l'autista|il conducente
passenger;der Passagier|der Fahrgast;el pasajero;le passager;il passeggero
to drive;fahren;conducir|manejar;conduire;guidare
to ride (a bike);fahren (Rad);montar en bici;faire du vélo;andare in bici
to park;parken;aparcar|estacionar;se garer|garer;parcheggiare
petrol;das Benzin;la gasolina;l'essence;la benzina
petrol station;die Tankstelle;la gasolinera;la station-service;il distributore (di benzina)
wheel;das Rad;la rueda;la roue;la ruota
seat belt;der Sicherheitsgurt|der Gurt;el cinturón de seguridad;la ceinture de sécurité;la cintura di sicurezza
speed;die Geschwindigkeit;la velocidad;la vitesse;la velocità`],["At the station",`platform;der Bahnsteig;el andén;le quai;il binario
timetable;der Fahrplan;el horario;l'horaire;l'orario
departure;die Abfahrt;la salida;le départ;la partenza
arrival;die Ankunft;la llegada;l'arrivée;l'arrivo
delay;die Verspätung;el retraso;le retard;il ritardo
bus stop;die Bushaltestelle|die Haltestelle;la parada de autobús;l'arrêt de bus;la fermata dell'autobus
to get on;einsteigen;subir;monter;salire
to get off;aussteigen;bajar;descendre;scendere
to change (trains);umsteigen;hacer transbordo|cambiar;changer;cambiare
journey;die Reise|die Fahrt;el viaje;le voyage|le trajet;il viaggio`],["At the airport",`airport;der Flughafen;el aeropuerto;l'aéroport;l'aeroporto
flight;der Flug;el vuelo;le vol;il volo
pilot;der Pilot|die Pilotin;el piloto;le pilote;il pilota
luggage;das Gepäck;el equipaje;les bagages;i bagagli
boarding pass;die Bordkarte;la tarjeta de embarque;la carte d'embarquement;la carta d'imbarco
gate (airport);das Gate|der Flugsteig;la puerta de embarque;la porte d'embarquement;l'uscita|il gate
to take off (plane);abheben|starten;despegar;décoller;decollare
to land;landen;aterrizar;atterrir;atterrare
customs;der Zoll;la aduana;la douane;la dogana
security check;die Sicherheitskontrolle;el control de seguridad;le contrôle de sécurité;il controllo di sicurezza`],["Travelling",`to travel;reisen;viajar;voyager;viaggiare
trip;der Ausflug|die Reise;la excursión|el viaje;l'excursion|le voyage;la gita|il viaggio
tourist;der Tourist|die Touristin;el turista|la turista;le touriste|la touriste;il turista|la turista
guide (person);der Reiseführer|die Reiseleiterin;el guía|la guía;le guide;la guida
sightseeing;die Besichtigung;el turismo|las visitas;la visite touristique;la visita turistica
souvenir;das Souvenir|das Andenken;el recuerdo;le souvenir;il souvenir|il ricordo
camera;die Kamera|der Fotoapparat;la cámara;l'appareil photo;la macchina fotografica
photo;das Foto;la foto;la photo;la foto
abroad;im Ausland;en el extranjero;à l'étranger;all'estero
foreign;fremd|ausländisch;extranjero;étranger;straniero`],["Holidays",`hotel room;das Hotelzimmer;la habitación de hotel;la chambre d'hôtel;la camera d'albergo
campsite;der Campingplatz;el camping;le camping;il campeggio
tent;das Zelt;la tienda (de campaña);la tente;la tenda (da campeggio)
youth hostel;die Jugendherberge;el albergue juvenil;l'auberge de jeunesse;l'ostello della gioventù
reception;die Rezeption;la recepción;la réception;la reception|il ricevimento
single room;das Einzelzimmer;la habitación individual;la chambre simple;la camera singola
double room;das Doppelzimmer;la habitación doble;la chambre double;la camera doppia
to book;buchen|reservieren;reservar;réserver;prenotare
sunglasses;die Sonnenbrille;las gafas de sol;les lunettes de soleil;gli occhiali da sole
sun cream;die Sonnencreme;la crema solar|el protector solar;la crème solaire;la crema solare`],["Going places",`to arrive;ankommen;llegar;arriver;arrivare
to leave;abfahren|weggehen;salir|irse;partir;partire
to stay;bleiben;quedarse;rester;restare|rimanere
to return;zurückkehren|zurückkommen;volver|regresar;revenir|rentrer;tornare
to visit;besuchen;visitar;visiter|rendre visite à;visitare
to walk;gehen|zu Fuß gehen;caminar|andar;marcher;camminare
to wait;warten;esperar;attendre;aspettare
to enter;eintreten|hineingehen;entrar;entrer;entrare
to go out;ausgehen|hinausgehen;salir;sortir;uscire
to fly;fliegen;volar;voler;volare`],["Where is it?",`inside;drinnen|innen;dentro;dedans|à l'intérieur;dentro
outside;draußen|außen;fuera;dehors|à l'extérieur;fuori
above;über|oben;encima de|arriba;au-dessus de;sopra
below;unter|unten;debajo de|abajo;au-dessous de|en dessous;sotto
between;zwischen;entre;entre;tra|fra
in front of;vor;delante de;devant;davanti a
around;um ... herum|herum;alrededor de;autour de;intorno a
everywhere;überall;en todas partes;partout;dappertutto|ovunque
somewhere;irgendwo;en algún lugar|en alguna parte;quelque part;da qualche parte
nowhere;nirgendwo|nirgends;en ninguna parte;nulle part;da nessuna parte`]],sm=[["More family",`son;der Sohn;el hijo;le fils;il figlio
daughter;die Tochter;la hija;la fille (enfant);la figlia
uncle;der Onkel;el tío;l'oncle;lo zio
aunt;die Tante;la tía;la tante;la zia
cousin;der Cousin|die Cousine;el primo|la prima;le cousin|la cousine;il cugino|la cugina
nephew;der Neffe;el sobrino;le neveu;il nipote
niece;die Nichte;la sobrina;la nièce;la nipote
husband;der Ehemann|der Mann;el marido|el esposo;le mari;il marito
wife;die Ehefrau|die Frau;la esposa|la mujer;la femme (épouse);la moglie
twin;der Zwilling;el gemelo|la gemela;le jumeau|la jumelle;il gemello|la gemella`],["Relationships",`boyfriend;der Freund (Partner);el novio;le petit ami|le copain;il fidanzato|il ragazzo (fidanzato)
girlfriend;die Freundin (Partnerin);la novia;la petite amie|la copine;la fidanzata|la ragazza (fidanzata)
partner;der Partner|die Partnerin;la pareja;le partenaire|le conjoint;il partner|il compagno
wedding;die Hochzeit;la boda;le mariage (fête);le nozze|il matrimonio
marriage;die Ehe;el matrimonio;le mariage;il matrimonio
to marry;heiraten;casarse;se marier|épouser;sposarsi
divorce;die Scheidung;el divorcio;le divorce;il divorzio
relative;der Verwandte|die Verwandte;el pariente;le parent (famille)|le proche;il parente
grandchild;das Enkelkind;el nieto|la nieta;le petit-enfant;il nipote (di nonni)
stepmother;die Stiefmutter;la madrastra;la belle-mère;la matrigna`],["People",`person;die Person|der Mensch;la persona;la personne;la persona
adult;der Erwachsene|die Erwachsene;el adulto;l'adulte;l'adulto
teenager;der Jugendliche|der Teenager;el adolescente;l'adolescent;l'adolescente
guest;der Gast;el invitado|el huésped;l'invité|l'hôte;l'ospite
stranger;der Fremde|die Fremde;el desconocido;l'inconnu;lo sconosciuto
crowd;die Menge|die Menschenmenge;la multitud;la foule;la folla
gentleman;der Herr;el señor|el caballero;le monsieur;il signore
lady;die Dame;la señora|la dama;la dame;la signora
group;die Gruppe;el grupo;le groupe;il gruppo
member;das Mitglied;el miembro|el socio;le membre;il membro|il socio`],["Meeting people",`to meet;treffen|kennenlernen;conocer|quedar con;rencontrer;incontrare|conoscere
to introduce;vorstellen;presentar;présenter;presentare
to greet;grüßen|begrüßen;saludar;saluer;salutare
to invite;einladen;invitar;inviter;invitare
to visit (a person);besuchen;visitar (a alguien);rendre visite à;andare a trovare
party;die Party|das Fest;la fiesta;la fête;la festa
birthday;der Geburtstag;el cumpleaños;l'anniversaire;il compleanno
present (gift);das Geschenk;el regalo;le cadeau;il regalo
congratulations;herzlichen Glückwunsch|Gratulation;felicidades|enhorabuena;félicitations;congratulazioni|auguri
welcome;willkommen;bienvenido;bienvenue;benvenuto`],["Jobs",`job;der Job|die Arbeitsstelle;el trabajo|el empleo;le travail|l'emploi;il lavoro|l'impiego
police officer;der Polizist|die Polizistin;el policía|la policía;le policier|la policière;il poliziotto|la poliziotta
firefighter;der Feuerwehrmann|die Feuerwehrfrau;el bombero|la bombera;le pompier;il pompiere|il vigile del fuoco
farmer;der Bauer|die Bäuerin|der Landwirt;el agricultor|el granjero;l'agriculteur|le fermier;il contadino|l'agricoltore
lawyer;der Anwalt|die Anwältin;el abogado|la abogada;l'avocat|l'avocate;l'avvocato|l'avvocata
engineer;der Ingenieur|die Ingenieurin;el ingeniero|la ingeniera;l'ingénieur|l'ingénieure;l'ingegnere
mechanic;der Mechaniker|die Mechanikerin;el mecánico|la mecánica;le mécanicien|la mécanicienne;il meccanico
baker;der Bäcker|die Bäckerin;el panadero|la panadera;le boulanger|la boulangère;il fornaio|il panettiere
hairdresser;der Friseur|die Friseurin;el peluquero|la peluquera;le coiffeur|la coiffeuse;il parrucchiere|la parrucchiera
journalist;der Journalist|die Journalistin;el periodista|la periodista;le journaliste|la journaliste;il giornalista|la giornalista`],["More jobs",`scientist;der Wissenschaftler|die Wissenschaftlerin;el científico|la científica;le scientifique;lo scienziato|la scienziata
artist;der Künstler|die Künstlerin;el artista|la artista;l'artiste;l'artista
writer;der Schriftsteller|die Schriftstellerin;el escritor|la escritora;l'écrivain|l'écrivaine;lo scrittore|la scrittrice
singer;der Sänger|die Sängerin;el cantante|la cantante;le chanteur|la chanteuse;il cantante|la cantante
actor;der Schauspieler|die Schauspielerin;el actor|la actriz;l'acteur|l'actrice;l'attore|l'attrice
soldier;der Soldat|die Soldatin;el soldado;le soldat;il soldato
secretary;der Sekretär|die Sekretärin;el secretario|la secretaria;le secrétaire|la secrétaire;il segretario|la segretaria
cleaner;die Reinigungskraft|der Putzmann|die Putzfrau;el limpiador|la limpiadora;l'agent d'entretien|la femme de ménage;l'addetto alle pulizie
builder;der Bauarbeiter|die Bauarbeiterin;el albañil;le maçon|l'ouvrier du bâtiment;il muratore
vet;der Tierarzt|die Tierärztin;el veterinario|la veterinaria;le vétérinaire;il veterinario|la veterinaria`],["Even more jobs",`architect;der Architekt|die Architektin;el arquitecto|la arquitecta;l'architecte;l'architetto
programmer;der Programmierer|die Programmiererin;el programador|la programadora;le programmeur|la programmeuse;il programmatore|la programmatrice
electrician;der Elektriker|die Elektrikerin;el electricista;l'électricien|l'électricienne;l'elettricista
plumber;der Installateur|der Klempner;el fontanero|el plomero;le plombier;l'idraulico
postman;der Briefträger|die Briefträgerin;el cartero|la cartera;le facteur|la factrice;il postino|la postina
butcher;der Metzger|der Fleischhauer;el carnicero|la carnicera;le boucher|la bouchère;il macellaio
gardener;der Gärtner|die Gärtnerin;el jardinero|la jardinera;le jardinier|la jardinière;il giardiniere
photographer;der Fotograf|die Fotografin;el fotógrafo|la fotógrafa;le photographe;il fotografo|la fotografa
manager;der Manager|die Managerin|der Leiter;el gerente|el director;le directeur|le manager;il direttore|il manager
salesperson;der Verkäufer|die Verkäuferin (Vertrieb);el vendedor|la vendedora;le commercial|la commerciale;il venditore|la venditrice`],["At work",`work;die Arbeit;el trabajo;le travail;il lavoro
to work;arbeiten;trabajar;travailler;lavorare
boss;der Chef|die Chefin;el jefe|la jefa;le patron|la patronne|le chef;il capo
colleague;der Kollege|die Kollegin;el compañero (de trabajo)|el colega;le collègue|la collègue;il collega|la collega
employee;der Angestellte|die Angestellte|der Mitarbeiter;el empleado|la empleada;l'employé|l'employée;l'impiegato|il dipendente
company;die Firma|das Unternehmen;la empresa;l'entreprise|la société;l'azienda|la ditta
meeting;die Besprechung|das Meeting;la reunión;la réunion;la riunione
salary;das Gehalt;el sueldo|el salario;le salaire;lo stipendio
career;die Karriere|die Laufbahn;la carrera (profesional);la carrière;la carriera
experience;die Erfahrung;la experiencia;l'expérience;l'esperienza`],["Working life",`to apply;sich bewerben;solicitar;postuler;candidarsi
interview;das Vorstellungsgespräch|das Interview;la entrevista;l'entretien;il colloquio
CV;der Lebenslauf;el currículum;le CV|le curriculum vitae;il curriculum
unemployed;arbeitslos;desempleado|en paro;au chômage|chômeur;disoccupato
to earn;verdienen;ganar;gagner;guadagnare
full-time;Vollzeit;a tiempo completo;à plein temps;a tempo pieno
part-time;Teilzeit;a tiempo parcial;à temps partiel;part-time|a tempo parziale
holiday (from work);der Urlaub;las vacaciones (del trabajo);les congés;le ferie
to retire;in Rente gehen|in Pension gehen;jubilarse;prendre sa retraite;andare in pensione
contract;der Vertrag;el contrato;le contrat;il contratto`],["In the office",`computer;der Computer;el ordenador|la computadora;l'ordinateur;il computer
printer;der Drucker;la impresora;l'imprimante;la stampante
document;das Dokument;el documento;le document;il documento
file (folder);der Ordner|die Akte;la carpeta;le dossier;la cartella|il fascicolo
copy;die Kopie;la copia;la copie;la copia
stapler;der Hefter|der Tacker;la grapadora;l'agrafeuse;la spillatrice|la cucitrice
envelope;der Umschlag|das Kuvert;el sobre;l'enveloppe;la busta
stamp;die Briefmarke;el sello;le timbre;il francobollo
letter (mail);der Brief;la carta (correo);la lettre;la lettera
form (paper);das Formular;el formulario;le formulaire;il modulo`],["Money",`money;das Geld;el dinero;l'argent (monnaie);i soldi|il denaro
coin;die Münze;la moneda;la pièce (de monnaie);la moneta
banknote;der Geldschein|die Banknote;el billete (de banco);le billet de banque;la banconota
cash;das Bargeld;el efectivo;l'argent liquide|les espèces;i contanti
credit card;die Kreditkarte;la tarjeta de crédito;la carte de crédit|la carte bancaire;la carta di credito
euro;der Euro;el euro;l'euro;l'euro
change (money back);das Wechselgeld;el cambio|la vuelta;la monnaie;il resto
cash machine;der Geldautomat|der Bankomat;el cajero automático;le distributeur (de billets);il bancomat
account;das Konto;la cuenta (bancaria);le compte;il conto (bancario)
loan;der Kredit|das Darlehen;el préstamo;le prêt;il prestito`],["Money verbs",`to spend;ausgeben;gastar;dépenser;spendere
to save;sparen;ahorrar;économiser|épargner;risparmiare
to borrow;ausleihen|leihen;pedir prestado;emprunter;prendere in prestito
to lend;verleihen|leihen;prestar;prêter;prestare
to sell;verkaufen;vender;vendre;vendere
to cost;kosten;costar;coûter;costare
to owe;schulden;deber;devoir (argent);dovere (soldi)
to change (money);wechseln;cambiar (dinero);changer (de l'argent);cambiare (soldi)
to count;zählen;contar;compter;contare
to win;gewinnen;ganar (premio)|vencer;gagner (match)|remporter;vincere`],["Shopping",`shopping;das Einkaufen;las compras;les courses|le shopping;la spesa|lo shopping
to go shopping;einkaufen gehen;ir de compras;faire les courses|faire du shopping;fare spese|fare la spesa
cheap;billig|günstig;barato;bon marché|pas cher;economico
expensive;teuer;caro;cher;caro
sale (reduced prices);der Ausverkauf|der Schlussverkauf;las rebajas;les soldes;i saldi
discount;der Rabatt;el descuento;la réduction|la remise;lo sconto
free (no cost);kostenlos|gratis;gratis|gratuito;gratuit;gratis|gratuito
offer;das Angebot;la oferta;l'offre;l'offerta
quality;die Qualität;la calidad;la qualité;la qualità
brand;die Marke;la marca;la marque;la marca`],["Business",`business;das Geschäft (Handel);el negocio;les affaires|le commerce;gli affari
product;das Produkt;el producto;le produit;il prodotto
to deliver;liefern;entregar;livrer;consegnare
to produce;herstellen|produzieren;producir;produire|fabriquer;produrre
industry;die Industrie;la industria;l'industrie;l'industria
trade;der Handel;el comercio;le commerce (échanges);il commercio
profit;der Gewinn;el beneficio|la ganancia;le bénéfice|le profit;il profitto|il guadagno
cost;die Kosten;el coste|el costo;le coût;il costo
tax;die Steuer;el impuesto;l'impôt|la taxe;la tassa|l'imposta
economy;die Wirtschaft;la economía;l'économie;l'economia`]],cm=[["School subjects",`maths;Mathe|die Mathematik;las matemáticas;les mathématiques|les maths;la matematica
English (subject);Englisch;el inglés;l'anglais;l'inglese
history;die Geschichte;la historia;l'histoire;la storia
geography;die Geografie|Erdkunde;la geografía;la géographie;la geografia
biology;die Biologie;la biología;la biologie;la biologia
chemistry;die Chemie;la química;la chimie;la chimica
physics;die Physik;la física;la physique;la fisica
art (subject);Kunst|bildnerische Erziehung;la educación plástica|el arte;les arts plastiques;l'educazione artistica|l'arte
music;die Musik;la música;la musique;la musica
PE;der Sportunterricht|Turnen;la educación física;l'EPS|l'éducation physique;l'educazione fisica`],["In the classroom",`classroom;das Klassenzimmer;el aula|la clase;la salle de classe;l'aula|la classe
board;die Tafel;la pizarra;le tableau (noir);la lavagna
pencil;der Bleistift;el lápiz;le crayon;la matita
rubber (eraser);der Radiergummi;la goma (de borrar);la gomme;la gomma (da cancellare)
ruler;das Lineal;la regla;la règle;il righello
exercise book;das Heft;el cuaderno;le cahier;il quaderno
pencil case;das Federmäppchen|das Federpennal;el estuche;la trousse;l'astuccio
schoolbag;die Schultasche;la mochila (escolar)|la cartera;le cartable;la cartella
page;die Seite;la página;la page;la pagina
dictionary;das Wörterbuch;el diccionario;le dictionnaire;il dizionario`],["Learning",`exam;die Prüfung;el examen;l'examen;l'esame
test (school);der Test|die Schularbeit;la prueba|el control;le contrôle|l'interro;la verifica|il compito in classe
mark (grade);die Note;la nota;la note;il voto
mistake;der Fehler;el error|la falta;la faute|l'erreur;l'errore|lo sbaglio
exercise;die Übung;el ejercicio;l'exercice;l'esercizio
example;das Beispiel;el ejemplo;l'exemple;l'esempio
sentence;der Satz;la oración|la frase;la phrase;la frase
grammar;die Grammatik;la gramática;la grammaire;la grammatica
vocabulary;der Wortschatz|die Vokabeln;el vocabulario;le vocabulaire;il vocabolario|il lessico
spelling;die Rechtschreibung;la ortografía;l'orthographe;l'ortografia`],["School verbs",`to study;lernen|studieren;estudiar;étudier;studiare
to teach;unterrichten|lehren;enseñar;enseigner;insegnare
to understand;verstehen;entender|comprender;comprendre;capire
to explain;erklären;explicar;expliquer;spiegare
to ask;fragen;preguntar;demander;chiedere|domandare
to repeat;wiederholen;repetir;répéter;ripetere
to translate;übersetzen;traducir;traduire;tradurre
to pass (an exam);bestehen;aprobar;réussir;superare|passare
to fail (an exam);durchfallen;suspender;échouer|rater;essere bocciato|non superare
to practise;üben;practicar;pratiquer|s'entraîner;esercitarsi|praticare`],["School life",`student;der Student|die Studentin;el estudiante|la estudiante;l'étudiant|l'étudiante;lo studente|la studentessa
class (group);die Klasse;la clase (grupo);la classe;la classe
break (at school);die Pause;el recreo;la récréation|la récré;la ricreazione|l'intervallo
timetable (school);der Stundenplan;el horario (escolar);l'emploi du temps;l'orario (scolastico)
term;das Semester|das Halbjahr;el trimestre|el semestre;le trimestre|le semestre;il quadrimestre|il trimestre
head teacher;der Direktor|die Direktorin|der Schulleiter;el director|la directora;le directeur|la directrice (d'école);il preside|la preside
uniform (school);die Schuluniform;el uniforme escolar;l'uniforme scolaire;la divisa scolastica
canteen;die Kantine|die Mensa;el comedor;la cantine;la mensa
project;das Projekt;el proyecto;le projet;il progetto
knowledge;das Wissen;el conocimiento;la connaissance|le savoir;la conoscenza`],["Maths",`number;die Zahl|die Nummer;el número;le nombre|le numéro;il numero
to add;addieren|zusammenzählen;sumar;additionner;sommare|addizionare
to subtract;subtrahieren|abziehen;restar;soustraire;sottrarre
to multiply;multiplizieren|malnehmen;multiplicar;multiplier;moltiplicare
to divide;dividieren|teilen;dividir;diviser;dividere
plus;plus;más;plus;più
minus;minus;menos;moins;meno
half;die Hälfte|halb;la mitad|medio;la moitié|demi;la metà|mezzo
percent;das Prozent;el por ciento;le pour cent;il per cento
result;das Ergebnis;el resultado;le résultat;il risultato`],["Big numbers",`eleven;elf;once;onze;undici
twelve;zwölf;doce;douze;dodici
twenty;zwanzig;veinte;vingt;venti
thirty;dreißig;treinta;trente;trenta
fifty;fünfzig;cincuenta;cinquante;cinquanta
hundred;hundert;cien|ciento;cent;cento
thousand;tausend;mil;mille;mille
million;die Million;el millón;le million;il milione
zero;null;cero;zéro;zero
first;erste|erster;primero;premier;primo`],["Science",`science;die Wissenschaft;la ciencia;la science;la scienza
experiment;das Experiment|der Versuch;el experimento;l'expérience (scientifique);l'esperimento
laboratory;das Labor;el laboratorio;le laboratoire;il laboratorio
atom;das Atom;el átomo;l'atome;l'atomo
gas;das Gas;el gas;le gaz;il gas
liquid;die Flüssigkeit;el líquido;le liquide;il liquido
weight;das Gewicht;el peso;le poids;il peso
length;die Länge;la longitud;la longueur;la lunghezza
metre;der Meter;el metro (medida);le mètre;il metro (misura)
kilogram;das Kilogramm|das Kilo;el kilogramo|el kilo;le kilogramme|le kilo;il chilogrammo|il chilo`],["Computers",`laptop;der Laptop;el portátil;l'ordinateur portable;il portatile
screen;der Bildschirm;la pantalla;l'écran;lo schermo
keyboard;die Tastatur;el teclado;le clavier;la tastiera
mouse (computer);die Maus (Computer);el ratón (de ordenador);la souris (d'ordinateur);il mouse
internet;das Internet;internet|la red;internet;internet
website;die Webseite|die Website;la página web;le site web|le site internet;il sito web|il sito
email;die E-Mail;el correo electrónico|el email;l'e-mail|le courriel;l'email|la posta elettronica
password;das Passwort;la contraseña;le mot de passe;la password
file (computer);die Datei;el archivo;le fichier;il file
program;das Programm;el programa;le programme|le logiciel;il programma`],["Technology",`phone;das Telefon;el teléfono;le téléphone;il telefono
mobile phone;das Handy;el móvil|el celular;le portable|le téléphone portable;il cellulare|il telefonino
app;die App;la aplicación|la app;l'application|l'appli;l'app|l'applicazione
charger;das Ladegerät;el cargador;le chargeur;il caricabatterie
cable;das Kabel;el cable;le câble;il cavo
machine;die Maschine;la máquina;la machine;la macchina (apparecchio)
robot;der Roboter;el robot;le robot;il robot
technology;die Technik|die Technologie;la tecnología;la technologie;la tecnologia
electricity;der Strom|die Elektrizität;la electricidad;l'électricité;l'elettricità
device;das Gerät;el aparato|el dispositivo;l'appareil;il dispositivo|l'apparecchio`],["Using technology",`to download;herunterladen;descargar;télécharger;scaricare
to upload;hochladen;subir (archivo);mettre en ligne|téléverser;caricare
to click;klicken;hacer clic;cliquer;cliccare
to type;tippen;teclear|escribir (a máquina);taper;digitare
to save (a file);speichern;guardar;enregistrer|sauvegarder;salvare
to delete;löschen;borrar|eliminar;supprimer|effacer;cancellare|eliminare
to print;drucken;imprimir;imprimer;stampare
to send;schicken|senden;enviar|mandar;envoyer;inviare|mandare
to call;anrufen;llamar;appeler;chiamare|telefonare
to switch on;einschalten;encender;allumer;accendere`],["Media",`television;der Fernseher|das Fernsehen;la televisión|la tele;la télévision|la télé;la televisione|la tv
radio;das Radio;la radio;la radio;la radio
newspaper;die Zeitung;el periódico;le journal;il giornale
magazine;die Zeitschrift|das Magazin;la revista;le magazine|la revue;la rivista
news;die Nachrichten;las noticias;les informations|les infos|les actualités;le notizie|il telegiornale
advert;die Werbung|die Anzeige;el anuncio;la publicité|la pub;la pubblicità
programme (TV);die Sendung;el programa (de televisión);l'émission;il programma (televisivo)
channel;der Sender|der Kanal;el canal;la chaîne;il canale
article;der Artikel;el artículo;l'article;l'articolo
headline;die Schlagzeile;el titular;le gros titre;il titolo`],["Social media",`video;das Video;el vídeo|el video;la vidéo;il video
post (online);der Beitrag|der Post;la publicación;la publication|le post;il post
message;die Nachricht;el mensaje;le message;il messaggio
comment;der Kommentar;el comentario;le commentaire;il commento
to like (online);liken;dar me gusta;liker|aimer;mettere mi piace
follower;der Follower;el seguidor;l'abonné;il follower|il seguace
profile;das Profil;el perfil;le profil;il profilo
online;online;en línea|online;en ligne;online
selfie;das Selfie;el selfie;le selfie;il selfie
to share;teilen;compartir;partager;condividere`],["Communication",`conversation;das Gespräch|die Unterhaltung;la conversación;la conversation;la conversazione
to talk;reden|sich unterhalten;hablar|charlar;parler|discuter;parlare|chiacchierare
to say;sagen;decir;dire;dire
to tell;erzählen;contar;raconter;raccontare
to answer;antworten;responder|contestar;répondre;rispondere
to listen;zuhören;escuchar;écouter;ascoltare
to shout;schreien|rufen;gritar;crier;gridare|urlare
to whisper;flüstern;susurrar;chuchoter;sussurrare
voice;die Stimme;la voz;la voix;la voce
silence;die Stille|das Schweigen;el silencio;le silence;il silenzio`],["Reading & writing",`story;die Geschichte (Erzählung);el cuento|la historia;l'histoire (récit)|le conte;la storia (racconto)|il racconto
novel;der Roman;la novela;le roman;il romanzo
poem;das Gedicht;el poema|la poesía;le poème;la poesia
author;der Autor|die Autorin;el autor|la autora;l'auteur|l'autrice;l'autore|l'autrice
title;der Titel;el título;le titre;il titolo (libro)
chapter;das Kapitel;el capítulo;le chapitre;il capitolo
letter (of the alphabet);der Buchstabe;la letra;la lettre (de l'alphabet);la lettera (dell'alfabeto)
note (written);die Notiz;la nota (escrita)|el apunte;la note (écrite);l'appunto|la nota
to draw;zeichnen;dibujar;dessiner;disegnare
to spell;buchstabieren;deletrear;épeler;fare lo spelling|compitare`]],um=[["Sports",`sport;der Sport;el deporte;le sport;lo sport
football;der Fußball;el fútbol;le football|le foot;il calcio
tennis;das Tennis;el tenis;le tennis;il tennis
basketball;der Basketball;el baloncesto;le basket|le basketball;la pallacanestro|il basket
volleyball;der Volleyball;el voleibol;le volley|le volley-ball;la pallavolo
skiing;das Skifahren;el esquí;le ski;lo sci
swimming;das Schwimmen;la natación;la natation;il nuoto
cycling;das Radfahren;el ciclismo;le cyclisme|le vélo;il ciclismo
running;das Laufen;el correr|el running;la course (à pied);la corsa
golf;das Golf;el golf;le golf;il golf`],["More sports",`handball;der Handball;el balonmano;le handball;la pallamano
ice hockey;das Eishockey;el hockey sobre hielo;le hockey sur glace;l'hockey su ghiaccio
horse riding;das Reiten;la equitación;l'équitation;l'equitazione
climbing;das Klettern;la escalada;l'escalade;l'arrampicata
dancing;das Tanzen;el baile;la danse;il ballo|la danza
boxing;das Boxen;el boxeo;la boxe;il pugilato|la boxe
skateboard;das Skateboard;el monopatín|el skate;le skate|la planche à roulettes;lo skateboard
surfing;das Surfen;el surf;le surf;il surf
yoga;das Yoga;el yoga;le yoga;lo yoga
athletics;die Leichtathletik;el atletismo;l'athlétisme;l'atletica`],["Playing sport",`ball;der Ball;la pelota|el balón;la balle|le ballon;la palla|il pallone
goal;das Tor;el gol|la portería;le but;il gol|la porta
match (game);das Spiel|das Match;el partido;le match;la partita
player;der Spieler|die Spielerin;el jugador|la jugadora;le joueur|la joueuse;il giocatore|la giocatrice
coach;der Trainer|die Trainerin;el entrenador|la entrenadora;l'entraîneur|l'entraîneuse;l'allenatore|l'allenatrice
winner;der Gewinner|die Siegerin;el ganador|la ganadora;le gagnant|la gagnante;il vincitore|la vincitrice
to lose;verlieren;perder;perdre;perdere
to score;ein Tor schießen|punkten;marcar;marquer;segnare
to train;trainieren;entrenar;s'entraîner;allenarsi
competition;der Wettbewerb|der Wettkampf;la competición|el concurso;la compétition|le concours;la competizione|la gara`],["Hobbies",`hobby;das Hobby;el pasatiempo|el hobby;le passe-temps|le hobby;l'hobby|il passatempo
free time;die Freizeit;el tiempo libre;le temps libre;il tempo libero
game;das Spiel;el juego;le jeu;il gioco
video game;das Videospiel;el videojuego;le jeu vidéo;il videogioco
chess;das Schach;el ajedrez;les échecs;gli scacchi
cards (game);die Karten|die Spielkarten;las cartas;les cartes;le carte
puzzle;das Puzzle|das Rätsel;el rompecabezas|el puzle;le puzzle;il puzzle
fishing;das Angeln|das Fischen;la pesca;la pêche (sport);la pesca (sport)
camping;das Camping|das Zelten;la acampada;le camping (activité);il campeggio (attività)
gardening;die Gartenarbeit;la jardinería;le jardinage;il giardinaggio`],["Music",`song;das Lied|der Song;la canción;la chanson;la canzone
band;die Band;el grupo (de música)|la banda;le groupe (de musique);la band|il gruppo
concert;das Konzert;el concierto;le concert;il concerto
guitar;die Gitarre;la guitarra;la guitare;la chitarra
piano;das Klavier;el piano;le piano;il pianoforte|il piano
drum;die Trommel|das Schlagzeug;el tambor|la batería (música);le tambour|la batterie (musique);il tamburo|la batteria (musica)
violin;die Geige|die Violine;el violín;le violon;il violino
flute;die Flöte;la flauta;la flûte;il flauto
instrument;das Instrument;el instrumento;l'instrument;lo strumento (musicale)
melody;die Melodie;la melodía;la mélodie;la melodia`],["Art & culture",`painting;das Gemälde;la pintura|el cuadro (arte);la peinture;il dipinto
drawing;die Zeichnung;el dibujo;le dessin;il disegno
artist's studio;das Atelier;el estudio (de artista);l'atelier;lo studio (d'artista)
exhibition;die Ausstellung;la exposición;l'exposition;la mostra
gallery;die Galerie;la galería;la galerie;la galleria
statue;die Statue;la estatua;la statue;la statua
culture;die Kultur;la cultura;la culture;la cultura
art (in general);die Kunst;el arte;l'art;l'arte (in generale)
sculpture;die Skulptur;la escultura;la sculpture;la scultura
artwork;das Kunstwerk;la obra de arte;l'œuvre d'art;l'opera d'arte`],["Film & theatre",`film;der Film;la película;le film;il film
actress;die Schauspielerin;la actriz;l'actrice;l'attrice
stage;die Bühne;el escenario;la scène;il palcoscenico
ticket (show);die Eintrittskarte;la entrada;le billet (de spectacle);il biglietto (per lo spettacolo)
audience;das Publikum;el público;le public;il pubblico
play (theatre);das Theaterstück;la obra de teatro;la pièce de théâtre;l'opera teatrale|la commedia
role;die Rolle;el papel;le rôle;il ruolo
star (famous person);der Star;la estrella (persona famosa);la star|la vedette;la star|il divo
comedy;die Komödie;la comedia;la comédie;la commedia (genere)
cartoon;der Zeichentrickfilm;los dibujos animados;le dessin animé;il cartone animato`],["Going out",`club;der Club|der Verein;el club;le club;il club|il circolo
disco;die Disco;la discoteca;la discothèque|la boîte;la discoteca
festival;das Festival;el festival;le festival;il festival
circus;der Zirkus;el circo;le cirque;il circo
fair (funfair);der Jahrmarkt|der Prater;la feria;la fête foraine;il luna park
to dance;tanzen;bailar;danser;ballare
to celebrate;feiern;celebrar;fêter|célébrer;festeggiare|celebrare
fun;der Spaß;la diversión;l'amusement;il divertimento
to have fun;Spaß haben;divertirse;s'amuser;divertirsi
weekend;das Wochenende;el fin de semana;le week-end;il fine settimana|il weekend`],["Days of the week",`Monday;Montag;lunes;lundi;lunedì
Tuesday;Dienstag;martes;mardi;martedì
Wednesday;Mittwoch;miércoles;mercredi;mercoledì
Thursday;Donnerstag;jueves;jeudi;giovedì
Friday;Freitag;viernes;vendredi;venerdì
Saturday;Samstag;sábado;samedi;sabato
Sunday;Sonntag;domingo;dimanche;domenica
weekday;der Wochentag;el día laborable;le jour de semaine;il giorno feriale
calendar;der Kalender;el calendario;le calendrier;il calendario
date (day);das Datum;la fecha;la date;la data`],["Months",`January;Januar|Jänner;enero;janvier;gennaio
February;Februar;febrero;février;febbraio
March;März;marzo;mars;marzo
April;April;abril;avril;aprile
May;Mai;mayo;mai;maggio
June;Juni;junio;juin;giugno
July;Juli;julio;juillet;luglio
August;August;agosto;août;agosto
September;September;septiembre;septembre;settembre
October;Oktober;octubre;octobre;ottobre`],["Time",`November;November;noviembre;novembre;novembre
December;Dezember;diciembre;décembre;dicembre
hour;die Stunde (Zeit);la hora;l'heure;l'ora
minute;die Minute;el minuto;la minute;il minuto
second (time);die Sekunde;el segundo;la seconde;il secondo
time;die Zeit;el tiempo (horas)|la hora;le temps (durée)|l'heure;il tempo (ore)
century;das Jahrhundert;el siglo;le siècle;il secolo
noon;der Mittag;el mediodía;midi;mezzogiorno
midnight;die Mitternacht;la medianoche;minuit;mezzanotte
afternoon;der Nachmittag;la tarde (después del mediodía);l'après-midi;il pomeriggio`],["When?",`now;jetzt;ahora;maintenant;adesso|ora
later;später;más tarde|luego;plus tard;più tardi|dopo
soon;bald;pronto;bientôt;presto (fra poco)
early;früh;temprano;tôt;presto|in anticipo
late;spät;tarde;tard;tardi
always;immer;siempre;toujours;sempre
never;nie|niemals;nunca;jamais;mai
often;oft;a menudo|con frecuencia;souvent;spesso
sometimes;manchmal;a veces;parfois;a volte|qualche volta
already;schon|bereits;ya;déjà;già`],["Time words",`ago;vor (zeitlich);hace;il y a;fa
before;vorher|bevor;antes;avant;prima
after;nach|nachher;después;après;dopo (ciò)
during;während;durante;pendant;durante
until;bis;hasta;jusqu'à;fino a
since;seit;desde;depuis;da (tempo)
still;noch|immer noch;todavía|aún;encore|toujours (encore);ancora
again;wieder|nochmal;otra vez|de nuevo;encore|de nouveau;di nuovo|ancora una volta
then;dann|damals;entonces|luego;puis|alors;poi|allora
immediately;sofort;inmediatamente|enseguida;immédiatement|tout de suite;subito|immediatamente`],["Holidays & celebrations",`Christmas;Weihnachten;la Navidad;Noël;il Natale
Easter;Ostern;la Pascua|la Semana Santa;Pâques;la Pasqua
New Year;das Neujahr;el Año Nuevo;le Nouvel An;il Capodanno
holiday (public);der Feiertag;el día festivo;le jour férié;il giorno festivo
tradition;die Tradition;la tradición;la tradition;la tradizione
fireworks;das Feuerwerk;los fuegos artificiales;le feu d'artifice;i fuochi d'artificio
gift wrapping;die Geschenkverpackung;el papel de regalo;le papier cadeau;la carta da regalo
balloon;der Luftballon;el globo;le ballon (de baudruche);il palloncino
anniversary;der Jahrestag;el aniversario;l'anniversaire (de mariage)|la commémoration;l'anniversario
invitation;die Einladung;la invitación;l'invitation;l'invito`]],dm=[["Basic verbs",`to do;tun|machen;hacer;faire;fare
to give;geben;dar;donner;dare
to take;nehmen;tomar|coger;prendre;prendere
to bring;bringen;traer;apporter;portare
to put;legen|stellen;poner;mettre;mettere
to get (receive);bekommen|erhalten;recibir|conseguir;recevoir|obtenir;ricevere|ottenere
to know (a fact);wissen;saber;savoir;sapere
to know (a person);kennen;conocer;connaître;conoscere
to think;denken;pensar;penser;pensare
to believe;glauben;creer;croire;credere`],["Wanting & liking",`to want;wollen;querer;vouloir;volere
to need;brauchen;necesitar;avoir besoin de;avere bisogno di
to be able to;können;poder;pouvoir;potere
to have to;müssen;tener que|deber;devoir;dovere
to like;mögen|gern haben;gustar;aimer|apprécier;piacere
to love;lieben;amar|querer;aimer;amare
to hate;hassen;odiar;détester|haïr;odiare
to prefer;bevorzugen|lieber mögen;preferir;préférer;preferire
to hope;hoffen;esperar;espérer;sperare
to wish;wünschen;desear;souhaiter;desiderare|augurare`],["Doing things",`to begin;beginnen|anfangen;empezar|comenzar;commencer;cominciare|iniziare
to finish;beenden|fertig machen;terminar|acabar;finir|terminer;finire
to stop;aufhören|anhalten;parar|dejar de;arrêter;smettere|fermare
to continue;weitermachen|fortsetzen;continuar|seguir;continuer;continuare
to try;versuchen;intentar;essayer;provare|tentare
to help;helfen;ayudar;aider;aiutare
to use;benutzen|verwenden;usar|utilizar;utiliser;usare|utilizzare
to show;zeigen;mostrar|enseñar;montrer;mostrare
to look;schauen|sehen;mirar;regarder;guardare
to watch;anschauen|zuschauen;ver|mirar;regarder;guardare`],["Moving things",`to keep;behalten;guardar|mantener;garder;tenere|conservare
to hold;halten;sostener|agarrar;tenir;tenere
to carry;tragen|schleppen;llevar|cargar;porter|transporter;portare|trasportare
to pull;ziehen;tirar|jalar;tirer;tirare
to push;drücken|schieben;empujar;pousser;spingere
to throw;werfen;lanzar|tirar;lancer|jeter;lanciare|gettare
to catch;fangen;atrapar|coger;attraper;prendere|afferrare
to lift;heben;levantar;soulever;sollevare
to drop;fallen lassen;dejar caer;laisser tomber;lasciar cadere|far cadere
to hit;schlagen;golpear|pegar;frapper;colpire`],["Moving your body",`to sit;sitzen|sich setzen;sentarse;s'asseoir;sedersi
to stand;stehen;estar de pie;être debout;stare in piedi
to lie down;sich hinlegen|liegen;tumbarse|acostarse;s'allonger;sdraiarsi
to jump;springen;saltar;sauter;saltare
to climb;klettern|steigen;escalar|trepar;grimper|escalader;arrampicarsi|scalare
to hide;verstecken|sich verstecken;esconder|esconderse;cacher|se cacher;nascondere|nascondersi
to kick;treten|kicken;dar una patada;donner un coup de pied;calciare|dare un calcio
to wave;winken;saludar con la mano;faire signe de la main;salutare con la mano
to point;zeigen auf|deuten;señalar;montrer du doigt|pointer;indicare
to knock;klopfen;llamar a la puerta|golpear;frapper (à la porte);bussare`],["Thinking",`to remember;sich erinnern;recordar|acordarse;se souvenir|se rappeler;ricordare|ricordarsi
to forget;vergessen;olvidar;oublier;dimenticare
to decide;entscheiden|sich entscheiden;decidir;décider;decidere
to choose;wählen|aussuchen;elegir|escoger;choisir;scegliere
to imagine;sich vorstellen;imaginar;imaginer;immaginare
to guess;raten;adivinar;deviner;indovinare
to agree;zustimmen|einverstanden sein;estar de acuerdo;être d'accord;essere d'accordo
to doubt;zweifeln;dudar;douter;dubitare
to notice;bemerken;notar|darse cuenta;remarquer;notare
to mean;bedeuten|meinen;significar|querer decir;signifier|vouloir dire;significare`],["Talking to people",`to promise;versprechen;prometer;promettre;promettere
to lie (tell lies);lügen;mentir;mentir;mentire
to discuss;besprechen|diskutieren;discutir|debatir;discuter;discutere
to suggest;vorschlagen;sugerir|proponer;suggérer|proposer;suggerire|proporre
to complain;sich beschweren;quejarse;se plaindre;lamentarsi
to thank;danken|sich bedanken;agradecer;remercier;ringraziare
to apologise;sich entschuldigen;disculparse|pedir perdón;s'excuser;scusarsi
to describe;beschreiben;describir;décrire;descrivere
to advise;raten|beraten;aconsejar;conseiller;consigliare
to warn;warnen;advertir|avisar;avertir|prévenir;avvertire|avvisare`],["Change",`to change (something);ändern|verändern;cambiar;changer|modifier;cambiare
to grow;wachsen;crecer;grandir|pousser;crescere
to become;werden;convertirse en|hacerse;devenir;diventare
to happen;passieren|geschehen;pasar|ocurrir;arriver|se passer;succedere|accadere
to move (body);bewegen|sich bewegen;mover|moverse;bouger|se déplacer;muovere|muoversi
to increase;steigen|zunehmen;aumentar;augmenter;aumentare
to reduce;reduzieren|verringern;reducir;réduire;ridurre
to fill;füllen;llenar;remplir;riempire
to empty;leeren;vaciar;vider;svuotare
to repair;reparieren;arreglar|reparar;réparer;riparare`],["Daily routine",`to wake (someone);wecken;despertar;réveiller;svegliare
to shave;sich rasieren;afeitarse;se raser;radersi
to comb;kämmen;peinar;peigner;pettinare
to have breakfast;frühstücken;desayunar;prendre le petit déjeuner;fare colazione
to have lunch;zu Mittag essen;almorzar|comer;déjeuner;pranzare
to have dinner;zu Abend essen;cenar;dîner;cenare
to set the table;den Tisch decken;poner la mesa;mettre la table;apparecchiare la tavola
to do the washing-up;abwaschen|Geschirr spülen;fregar los platos;faire la vaisselle;lavare i piatti
to go to bed;ins Bett gehen|schlafen gehen;acostarse|irse a la cama;se coucher|aller au lit;andare a letto
to hurry;sich beeilen;darse prisa|apresurarse;se dépêcher;sbrigarsi|affrettarsi`],["Noticing",`to recognise;erkennen;reconocer;reconnaître;riconoscere
to observe;beobachten;observar;observer;osservare
to seem;scheinen;parecer;sembler|paraître;sembrare
to look like;aussehen wie;parecerse a;ressembler à;assomigliare a
to sound;klingen;sonar;sonner;suonare|sembrare
to check;prüfen|kontrollieren;comprobar|revisar;vérifier;controllare
to compare;vergleichen;comparar;comparer;confrontare|paragonare
to measure;messen;medir;mesurer;misurare
to weigh;wiegen;pesar;peser;pesare
to test;testen|prüfen;probar|poner a prueba;tester;testare|mettere alla prova`],["Making things",`to build;bauen;construir;construire;costruire
to destroy;zerstören;destruir;détruire;distruggere
to create;erschaffen|schaffen;crear;créer;creare
to prepare;vorbereiten|zubereiten;preparar;préparer;preparare
to tie;binden;atar;attacher|nouer;legare
to fold;falten;doblar;plier;piegare
to wrap;einpacken|einwickeln;envolver;emballer|envelopper;incartare|avvolgere
to hang;hängen|aufhängen;colgar;accrocher|suspendre;appendere
to cover;bedecken|zudecken;cubrir;couvrir;coprire
to collect;sammeln;coleccionar|recoger;collectionner|ramasser;collezionare|raccogliere`],["Getting along",`to join;beitreten|sich anschließen;unirse a;rejoindre|adhérer à;unirsi a|iscriversi a
to belong;gehören;pertenecer;appartenir;appartenere
to depend;abhängen;depender;dépendre;dipendere
to trust;vertrauen;confiar;faire confiance;fidarsi
to respect;respektieren|achten;respetar;respecter;rispettare
to forgive;vergeben|verzeihen;perdonar;pardonner;perdonare
to kiss;küssen;besar;embrasser;baciare
to hug;umarmen;abrazar;serrer dans ses bras|étreindre;abbracciare
to argue;streiten;discutir|pelearse;se disputer;litigare
to fight;kämpfen;luchar|pelear;se battre|lutter;combattere|lottare`],["Getting things done",`to succeed;Erfolg haben|gelingen;tener éxito;réussir;avere successo|riuscire
to achieve;erreichen;lograr|conseguir;atteindre|réaliser;raggiungere|ottenere
to plan;planen;planear;planifier|prévoir;pianificare|programmare
to organise;organisieren;organizar;organiser;organizzare
to manage;schaffen|leiten;arreglárselas|gestionar;se débrouiller|gérer;farcela|gestire
to improve;verbessern;mejorar;améliorer;migliorare
to develop;entwickeln;desarrollar;développer;sviluppare
to solve;lösen;resolver|solucionar;résoudre;risolvere
to prove;beweisen;demostrar;prouver;dimostrare|provare
to discover;entdecken;descubrir;découvrir;scoprire`],["Passing on news",`to write down;aufschreiben;anotar|apuntar;noter;annotare|scrivere
to sign;unterschreiben;firmar;signer;firmare
to inform;informieren;informar;informer;informare
to announce;ankündigen|ansagen;anunciar;annoncer;annunciare
to report;berichten|melden;informar de|denunciar;signaler|rapporter;riferire|denunciare
to chat;plaudern|chatten;charlar|chatear;bavarder|chatter;chiacchierare|chattare
to joke;scherzen|Witze machen;bromear;plaisanter;scherzare
to read aloud;vorlesen;leer en voz alta;lire à voix haute;leggere ad alta voce
to whistle;pfeifen;silbar;siffler;fischiare
to ring (phone);klingeln|läuten;sonar;sonner;squillare|suonare`],["Nature verbs",`to plant;pflanzen;plantar;planter;piantare
to water (plants);gießen;regar;arroser;annaffiare
to pick (flowers);pflücken;recoger|coger;cueillir;cogliere|raccogliere
to rain;regnen;llover;pleuvoir;piovere
to snow;schneien;nevar;neiger;nevicare
to shine;scheinen|leuchten;brillar;briller;splendere|brillare
to burn;brennen|verbrennen;quemar|arder;brûler;bruciare
to melt;schmelzen;derretir|derretirse;fondre;sciogliere|sciogliersi
to freeze;frieren|gefrieren;congelar|helar;geler|congeler;congelare|gelare
to blow;blasen|wehen;soplar;souffler;soffiare`],["Going places 2",`to go up;hinaufgehen|hochgehen;subir;monter;salire
to go down;hinuntergehen|runtergehen;bajar;descendre;scendere
to slip;ausrutschen;resbalar;glisser;scivolare
to crawl;kriechen|krabbeln;gatear|arrastrarse;ramper;strisciare|gattonare
to escape;fliehen|entkommen;escapar;s'échapper|fuir;scappare|fuggire
to chase;jagen|verfolgen;perseguir;poursuivre|chasser;inseguire
to approach;sich nähern;acercarse;s'approcher;avvicinarsi
to pass (go past);vorbeigehen|vorbeifahren;pasar por delante;passer devant;passare davanti
to bring back;zurückbringen;devolver|traer de vuelta;rapporter|ramener;riportare
to send back;zurückschicken;devolver;renvoyer;rimandare|restituire`],["Feelings verbs",`to worry;sich Sorgen machen;preocuparse;s'inquiéter;preoccuparsi
to enjoy;genießen;disfrutar;profiter de|apprécier;godere|godersi
to miss (someone);vermissen;echar de menos|extrañar;manquer|regretter;sentire la mancanza di
to miss (a bus);verpassen;perder;rater|manquer;perdere
to fear;fürchten;temer;craindre;temere
to care about;sich kümmern um|wichtig sein;importar|preocuparse por;se soucier de;tenere a|importare
to admire;bewundern;admirar;admirer;ammirare
to bother;stören;molestar;déranger;disturbare
to calm down;sich beruhigen;calmarse|tranquilizarse;se calmer;calmarsi
to cheer up;aufmuntern;animar;remonter le moral;tirare su di morale`],["Around the house 2",`to lock;abschließen|zusperren;cerrar con llave;fermer à clé;chiudere a chiave
to unlock;aufschließen|aufsperren;abrir con llave;déverrouiller|ouvrir à clé;aprire con la chiave
to switch off;ausschalten;apagar;éteindre;spegnere
to decorate;dekorieren|schmücken;decorar;décorer;decorare
to feed;füttern;dar de comer|alimentar;nourrir|donner à manger;dare da mangiare
to look after;aufpassen auf|sich kümmern um;cuidar;s'occuper de|garder;badare a|accudire
to bring up (a child);erziehen|großziehen;criar|educar;élever;crescere|educare
to hang up (phone);auflegen;colgar el teléfono;raccrocher;riattaccare
to pack;packen;hacer la maleta;faire sa valise;fare la valigia
to unpack;auspacken;deshacer la maleta;défaire sa valise|déballer;disfare la valigia`],["Life & death",`to rent;mieten;alquilar;louer;affittare|noleggiare
to own;besitzen;poseer;posséder;possedere
to steal;stehlen;robar;voler (dérober);rubare
to kill;töten;matar;tuer;uccidere
to die;sterben;morir;mourir;morire
to be born;geboren werden;nacer;naître;nascere
to survive;überleben;sobrevivir;survivre;sopravvivere
to rescue;retten;salvar|rescatar;sauver|secourir;salvare|soccorrere
to attack;angreifen;atacar;attaquer;attaccare
to defend;verteidigen;defender;défendre;difendere`],["Rules",`to accept;akzeptieren|annehmen;aceptar;accepter;accettare
to refuse;ablehnen|verweigern;rechazar|negarse;refuser;rifiutare
to allow;erlauben;permitir;permettre|autoriser;permettere
to forbid;verbieten;prohibir;interdire;vietare|proibire
to obey;gehorchen;obedecer;obéir;obbedire
to force;zwingen;obligar|forzar;forcer|obliger;costringere|forzare
to avoid;vermeiden;evitar;éviter;evitare
to include;einschließen|beinhalten;incluir;inclure;includere
to exist;existieren;existir;exister;esistere
to matter;wichtig sein|eine Rolle spielen;importar;compter|importer;importare|contare`]],pm=[["Opposites 1",`easy;leicht|einfach;fácil;facile;facile
difficult;schwierig|schwer;difícil;difficile;difficile
fast;schnell;rápido;rapide;veloce|rapido
slow;langsam;lento;lent;lento
long;lang;largo;long;lungo
wide;breit|weit;ancho;large;largo|ampio
narrow;schmal|eng;estrecho;étroit;stretto
high;hoch;alto;haut;alto
low;niedrig|tief;bajo;bas;basso
deep;tief;profundo;profond;profondo`],["Opposites 2",`heavy;schwer;pesado;lourd;pesante
light (not heavy);leicht;ligero;léger;leggero
full;voll;lleno;plein;pieno
empty (adjective);leer;vacío;vide;vuoto
open (adjective);offen|geöffnet;abierto;ouvert;aperto
closed;geschlossen|zu;cerrado;fermé;chiuso
clean (adjective);sauber;limpio;propre;pulito
dirty;schmutzig|dreckig;sucio;sale;sporco
right (correct);richtig;correcto;juste|correct;giusto|corretto
wrong;falsch;incorrecto|equivocado;faux;sbagliato`],["Opposites 3",`rich;reich;rico;riche;ricco
poor;arm;pobre;pauvre;povero
last;letzte|letzter;último;dernier;ultimo
next;nächste|nächster;próximo|siguiente;prochain|suivant;prossimo
same;gleich|derselbe;mismo;même;stesso
different;anders|verschieden;diferente|distinto;différent;diverso
possible;möglich;posible;possible;possibile
impossible;unmöglich;imposible;impossible;impossibile
true;wahr;verdadero|cierto;vrai;vero
false;falsch|unwahr;falso;faux;falso`],["Opposites 4",`hard (not soft);hart;duro;dur;duro
soft;weich;blando|suave;doux|mou;morbido|soffice
safe;sicher;seguro;sûr|en sécurité;sicuro
dangerous;gefährlich;peligroso;dangereux;pericoloso
modern;modern;moderno;moderne;moderno
ancient;uralt|antik;antiguo;ancien|antique;antico
public;öffentlich;público;public;pubblico
private;privat;privado;privé;privato
alive;lebendig|am Leben;vivo;vivant;vivo
dead;tot;muerto;mort;morto`],["Opposites 5",`busy;beschäftigt;ocupado;occupé;occupato|impegnato
free (not busy);frei;libre;libre;libero
ready;fertig|bereit;listo|preparado;prêt;pronto
important;wichtig;importante;important;importante
interesting;interessant;interesante;intéressant;interessante
boring;langweilig;aburrido;ennuyeux;noioso
famous;berühmt;famoso;célèbre|connu;famoso
normal;normal;normal;normal;normale
strange;seltsam|komisch;extraño|raro;étrange|bizarre;strano
special;besonders|speziell;especial;spécial;speciale`],["Good & bad",`perfect;perfekt;perfecto;parfait;perfetto
excellent;ausgezeichnet|hervorragend;excelente;excellent;eccellente
terrible;schrecklich|furchtbar;terrible|horrible;terrible|affreux;terribile|orribile
wonderful;wunderbar;maravilloso;merveilleux;meraviglioso
great;toll|großartig;genial|estupendo;génial|super;fantastico|grande
nice;nett|schön;bonito|agradable;joli|agréable;bello|piacevole
useful;nützlich;útil;utile;utile
useless;nutzlos;inútil;inutile;inutile
cool (great);cool|super;guay|chulo;cool|génial;figo|forte
fantastic;fantastisch;fantástico;fantastique;fantastico`],["How much?",`huge;riesig;enorme;énorme;enorme
tiny;winzig;diminuto|minúsculo;minuscule;minuscolo
few;wenige;pocos;peu de;pochi
many;viele;muchos;beaucoup de;molti
much;viel;mucho;beaucoup;molto
enough;genug;suficiente|bastante;assez;abbastanza
whole;ganz;entero;entier;intero
single;einzeln|einzig;solo|único;seul|unique;singolo|solo
double;doppelt;doble;double;doppio
extra;zusätzlich|extra;adicional|extra;supplémentaire|en plus;extra|aggiuntivo`],["How does it feel?",`smooth;glatt;liso;lisse;liscio
rough;rau;áspero;rugueux;ruvido
sharp;scharf;afilado;tranchant|pointu;affilato|tagliente
sticky;klebrig;pegajoso;collant;appiccicoso
shiny;glänzend;brillante;brillant;lucido|brillante
fluffy;flauschig;esponjoso;duveteux|moelleux;soffice|vaporoso
hollow;hohl;hueco;creux;cavo
thick;dick|dicht;grueso|espeso;épais;spesso
thin (object);dünn;fino|delgado;fin;sottile
solid;fest|massiv;sólido;solide;solido`],["People words",`cute;süß|niedlich;mono|lindo;mignon;carino
smart (well dressed);schick|elegant;elegante;élégant|chic;elegante
popular;beliebt;popular;populaire;popolare
married;verheiratet;casado;marié;sposato
single (not married);ledig|single;soltero;célibataire;single|celibe|nubile
pregnant;schwanger;embarazada;enceinte;incinta
sleepy;schläfrig;somnoliento|con sueño;somnolent|endormi;assonnato
thirsty;durstig;sediento;assoiffé;assetato
awake;wach;despierto;réveillé;sveglio
asleep;schlafend;dormido;endormi;addormentato`],["What are they like?",`cheerful;fröhlich|heiter;alegre;joyeux|gai;allegro
optimistic;optimistisch;optimista;optimiste;ottimista
pessimistic;pessimistisch;pesimista;pessimiste;pessimista
creative;kreativ;creativo;créatif;creativo
hard-working;fleißig;trabajador;travailleur;laborioso|lavoratore
ambitious;ehrgeizig;ambicioso;ambitieux;ambizioso
stubborn;stur|dickköpfig;terco|testarudo;têtu;testardo
sensitive;empfindlich|sensibel;sensible;sensible;sensibile
reliable;zuverlässig;fiable;fiable;affidabile
independent;unabhängig|selbstständig;independiente;indépendant;indipendente`],["More character",`wise;weise;sabio;sage;saggio
stupid;dumm;tonto|estúpido;bête|stupide;stupido
naughty;frech|unartig;travieso;vilain|coquin;birichino|cattivello
mean (unkind);gemein;malo|mezquino;méchant;cattivo|meschino
cruel;grausam;cruel;cruel;crudele
fair;fair|gerecht;justo;juste|équitable;giusto|equo
unfair;unfair|ungerecht;injusto;injuste;ingiusto
gentle;sanft;suave|dulce;doux;delicato|gentile
wild;wild;salvaje;sauvage;selvaggio
tame;zahm;manso|domesticado;apprivoisé;addomesticato`],["Places & feelings of places",`crowded;überfüllt|voll;abarrotado|lleno de gente;bondé;affollato
noisy;lärmend|laut;ruidoso;bruyant;rumoroso
peaceful;friedlich;tranquilo|pacífico;paisible;tranquillo|pacifico
lovely;schön|herrlich;precioso|encantador;charmant|ravissant;incantevole
historic;historisch;histórico;historique;storico
local;lokal|örtlich;local;local;locale
international;international;internacional;international;internazionale
national;national;nacional;national;nazionale
central;zentral;central;central;centrale
rural;ländlich;rural;rural;rurale`],["What state is it in?",`broken;kaputt|gebrochen;roto;cassé;rotto
used (second-hand);gebraucht;usado|de segunda mano;d'occasion;usato
available;verfügbar|erhältlich;disponible;disponible;disponibile
necessary;notwendig|nötig;necesario;nécessaire;necessario
complete;vollständig|komplett;completo;complet;completo
simple;einfach;sencillo|simple;simple;semplice
complicated;kompliziert;complicado;compliqué;complicato
clear;klar|deutlich;claro;clair;chiaro
obvious;offensichtlich;obvio;évident;ovvio
similar;ähnlich;similar|parecido;similaire|semblable;simile`],["Useful describing words",`sure;sicher;seguro;sûr;sicuro
real;echt|wirklich;real|verdadero;réel|vrai;reale|vero
fake;gefälscht|unecht;falso;faux;falso
main;hauptsächlich|Haupt-;principal;principal;principale
own;eigen;propio;propre;proprio
general;allgemein;general;général;generale
total;gesamt|total;total;total;totale
exact;genau|exakt;exacto;exact;esatto
average;durchschnittlich;medio|promedio;moyen;medio
typical;typisch;típico;typique;tipico`],["Mixed feelings",`satisfied;zufrieden;satisfecho;satisfait;soddisfatto
pleased;erfreut|froh;contento;content;contento
upset;aufgebracht|verärgert;disgustado|molesto;contrarié|bouleversé;sconvolto|turbato
shocked;schockiert;conmocionado|impactado;choqué;scioccato
amazed;erstaunt;asombrado;stupéfait|émerveillé;stupito
annoyed;genervt|verärgert;molesto|fastidiado;agacé;infastidito|seccato
ashamed;beschämt;avergonzado;honteux;vergognoso
hopeful;hoffnungsvoll;esperanzado;plein d'espoir;speranzoso
desperate;verzweifelt;desesperado;désespéré;disperato
homesick;heimwehkrank;nostálgico;qui a le mal du pays;nostalgico`]],mm=[["Questions",`what?;was;qué;que|quoi;che cosa|cosa|che
who?;wer;quién;qui;chi
where?;wo;dónde;où;dove
when?;wann;cuándo;quand;quando
why?;warum|wieso;por qué;pourquoi;perché
how?;wie;cómo;comment;come
how much?;wie viel;cuánto;combien;quanto
which?;welche|welcher|welches;cuál;quel|quelle;quale
whose?;wessen;de quién;à qui;di chi
how many?;wie viele;cuántos;combien de;quanti`],["Me & you",`I;ich;yo;je;io
you (one person);du;tú;tu;tu
he;er;él;il;lui
she;sie;ella;elle;lei
we;wir;nosotros|nosotras;nous;noi
they;sie (Plural);ellos|ellas;ils|elles;loro
me;mich|mir;me|mí;me|moi;mi|me
my;mein|meine;mi;mon|ma|mes;mio|mia
your;dein|deine;tu (tuyo);ton|ta|tes;tuo|tua
our;unser|unsere;nuestro|nuestra;notre|nos;nostro|nostra`],["Linking words",`and;und;y;et;e
or;oder;o;ou;o
but;aber;pero;mais;ma
because;weil;porque;parce que;perché (causa)
if;wenn|falls;si;si;se
so (therefore);also|deshalb;así que|por eso;donc|alors;quindi|così
although;obwohl;aunque;bien que|même si;anche se|sebbene
that (conjunction);dass;que;que;che (congiunzione)
while;während|solange;mientras;pendant que;mentre
also;auch;también;aussi;anche`],["Little words",`in;in;en;dans|en;in
on;auf;en|sobre;sur;su|sopra
under;unter;debajo de|bajo;sous;sotto
with;mit;con;avec;con
without;ohne;sin;sans;senza
for;für;para|por;pour;per
from;von|aus;de|desde;de;da|di
to (towards);zu|nach;a|hacia;à|vers;a|verso
about (topic);über;sobre|acerca de;sur|à propos de;su|riguardo a
against;gegen;contra;contre;contro`],["How much & how",`very;sehr;muy;très;molto (molto bello)
too (too much);zu (zu viel);demasiado;trop;troppo
only;nur;solo|solamente;seulement;solo|soltanto
almost;fast;casi;presque;quasi
quite;ziemlich;bastante;assez|plutôt;piuttosto
really;wirklich;de verdad|realmente;vraiment;davvero|veramente
perhaps;vielleicht;quizás|tal vez;peut-être;forse
of course;natürlich|selbstverständlich;claro|por supuesto;bien sûr;certo|naturalmente
together;zusammen;juntos;ensemble;insieme
alone;allein;solo;seul;da solo|solo`],["How it happens",`well;gut (Adverb);bien;bien;bene
badly;schlecht (Adverb);mal;mal;male
quickly;schnell (Adverb);rápidamente|rápido;vite|rapidement;velocemente|in fretta
slowly;langsam (Adverb);despacio|lentamente;lentement;lentamente|piano
suddenly;plötzlich;de repente;soudain|tout à coup;all'improvviso|improvvisamente
finally;endlich|schließlich;finalmente|por fin;enfin|finalement;finalmente|infine
probably;wahrscheinlich;probablemente;probablement;probabilmente
especially;besonders (Adverb);especialmente;surtout|spécialement;soprattutto|specialmente
exactly;genau (Adverb);exactamente;exactement;esattamente
unfortunately;leider;desafortunadamente|por desgracia;malheureusement;purtroppo|sfortunatamente`],["Everyone & everything",`everything;alles;todo;tout;tutto
nothing;nichts;nada;rien;niente|nulla
something;etwas;algo;quelque chose;qualcosa
everyone;jeder|alle;todos|todo el mundo;tout le monde;tutti
nobody;niemand;nadie;personne;nessuno
someone;jemand;alguien;quelqu'un;qualcuno
all;alle;todos;tous|toutes;tutti (tutte le cose)|tutti
some;einige|manche;algunos;quelques;alcuni|qualche
each;jeder|jede|jedes;cada;chaque;ogni
other;andere|anderer;otro;autre;altro`],["Polite phrases",`excuse me;Entschuldigung|Verzeihung;disculpe|perdone;excusez-moi;mi scusi|scusi
you're welcome;bitte|gern geschehen;de nada;de rien|je vous en prie;prego
how are you?;wie geht's|wie geht es dir;cómo estás|qué tal;comment ça va|ça va;come stai
I'm fine;mir geht's gut|gut;estoy bien|bien;je vais bien|ça va bien;sto bene
see you later;bis später;hasta luego;à plus tard|à tout à l'heure;a dopo|a più tardi
good luck;viel Glück;buena suerte;bonne chance;buona fortuna
cheers;prost;salud;santé|à la vôtre;salute|cin cin
okay;okay|in Ordnung;vale|de acuerdo;d'accord;va bene|d'accordo
help!;Hilfe;socorro|ayuda;au secours;aiuto
I don't know;ich weiß nicht;no sé;je ne sais pas;non lo so`],["Useful sentences",`I'm hungry;ich habe Hunger;tengo hambre;j'ai faim;ho fame
I'm thirsty;ich habe Durst;tengo sed;j'ai soif;ho sete
I'm cold;mir ist kalt;tengo frío;j'ai froid;ho freddo
I love you;ich liebe dich|ich hab dich lieb;te quiero|te amo;je t'aime;ti amo|ti voglio bene
what time is it?;wie spät ist es;qué hora es;quelle heure est-il;che ore sono
my name is;ich heiße|mein Name ist;me llamo;je m'appelle;mi chiamo
nice to meet you;freut mich;encantado|mucho gusto;enchanté;piacere
I don't understand;ich verstehe nicht;no entiendo;je ne comprends pas;non capisco
how much is it?;wie viel kostet das;cuánto cuesta;combien ça coûte|c'est combien;quanto costa
happy birthday;alles Gute zum Geburtstag;feliz cumpleaños;joyeux anniversaire;buon compleanno`]],fm=[["Big ideas",`idea;die Idee;la idea;l'idée;l'idea
problem;das Problem;el problema;le problème;il problema
solution;die Lösung;la solución;la solution;la soluzione
reason;der Grund;la razón|el motivo;la raison;la ragione|il motivo
truth;die Wahrheit;la verdad;la vérité;la verità
lie (untruth);die Lüge;la mentira;le mensonge;la bugia
dream (goal);der Traum;el sueño;le rêve;il sogno
goal (aim);das Ziel;la meta|el objetivo;le but|l'objectif;l'obiettivo|lo scopo
plan;der Plan;el plan;le plan|le projet;il piano|il programma
chance;die Chance|die Gelegenheit;la oportunidad;la chance|l'occasion;l'occasione|la possibilità`],["Values",`freedom;die Freiheit;la libertad;la liberté;la libertà
peace;der Frieden;la paz;la paix;la pace
war;der Krieg;la guerra;la guerre;la guerra
justice;die Gerechtigkeit;la justicia;la justice;la giustizia
equality;die Gleichheit|die Gleichberechtigung;la igualdad;l'égalité;l'uguaglianza
friendship;die Freundschaft;la amistad;l'amitié;l'amicizia
trust (noun);das Vertrauen;la confianza;la confiance;la fiducia
honesty;die Ehrlichkeit;la honestidad;l'honnêteté;l'onestà
courage;der Mut;el valor|el coraje;le courage;il coraggio
respect (noun);der Respekt;el respeto;le respect;il rispetto`],["Society",`society;die Gesellschaft;la sociedad;la société;la società
population;die Bevölkerung;la población;la population;la popolazione
citizen;der Bürger|die Bürgerin;el ciudadano|la ciudadana;le citoyen|la citoyenne;il cittadino|la cittadina
community;die Gemeinschaft;la comunidad;la communauté;la comunità
generation;die Generation;la generación;la génération;la generazione
rights;die Rechte;los derechos;les droits;i diritti
duty;die Pflicht;el deber;le devoir;il dovere
poverty;die Armut;la pobreza;la pauvreté;la povertà
wealth;der Reichtum;la riqueza;la richesse;la ricchezza
immigrant;der Einwanderer|die Einwanderin;el inmigrante|la inmigrante;l'immigré|l'immigrée;l'immigrato|l'immigrata`],["Politics",`politics;die Politik;la política;la politique;la politica
government;die Regierung;el gobierno;le gouvernement;il governo
president;der Präsident|die Präsidentin;el presidente|la presidenta;le président|la présidente;il presidente|la presidente
minister;der Minister|die Ministerin;el ministro|la ministra;le ministre;il ministro|la ministra
election;die Wahl;las elecciones|la elección;l'élection;le elezioni|l'elezione
to vote;wählen|abstimmen;votar;voter;votare
party (political);die Partei;el partido;le parti;il partito
democracy;die Demokratie;la democracia;la démocratie;la democrazia
law;das Gesetz;la ley;la loi;la legge
state (country);der Staat;el estado;l'État;lo Stato`],["Law & order",`police;die Polizei;la policía;la police;la polizia
crime;das Verbrechen;el crimen|el delito;le crime|le délit;il crimine|il reato
thief;der Dieb|die Diebin;el ladrón|la ladrona;le voleur|la voleuse;il ladro|la ladra
prison;das Gefängnis;la cárcel|la prisión;la prison;la prigione|il carcere
judge;der Richter|die Richterin;el juez|la jueza;le juge;il giudice
court;das Gericht;el tribunal;le tribunal;il tribunale
guilty;schuldig;culpable;coupable;colpevole
innocent;unschuldig;inocente;innocent;innocente
witness;der Zeuge|die Zeugin;el testigo|la testigo;le témoin;il testimone
fine (penalty);die Strafe|das Bußgeld;la multa;l'amende;la multa`],["Emergencies",`emergency;der Notfall;la emergencia;l'urgence;l'emergenza
danger;die Gefahr;el peligro;le danger;il pericolo
to call for help;um Hilfe rufen;pedir ayuda;appeler à l'aide;chiedere aiuto
fire brigade;die Feuerwehr;los bomberos;les pompiers;i vigili del fuoco
first aid;die Erste Hilfe;los primeros auxilios;les premiers secours;il pronto soccorso
earthquake;das Erdbeben;el terremoto;le tremblement de terre;il terremoto
flood;die Überschwemmung|das Hochwasser;la inundación;l'inondation;l'alluvione|l'inondazione
smoke;der Rauch;el humo;la fumée;il fumo
alarm;der Alarm;la alarma;l'alarme;l'allarme
safety;die Sicherheit;la seguridad;la sécurité;la sicurezza`],["Belief & culture",`religion;die Religion;la religión;la religion;la religione
God;Gott;Dios;Dieu;Dio
to pray;beten;rezar;prier;pregare
heaven;der Himmel (Religion);el cielo (religión);le paradis|le ciel;il paradiso|il cielo
soul;die Seele;el alma;l'âme;l'anima
the past;die Vergangenheit;el pasado;le passé;il passato
custom;der Brauch|die Sitte;la costumbre;la coutume;l'usanza
the future;die Zukunft;el futuro;l'avenir|le futur;il futuro
the present (time);die Gegenwart;el presente;le présent;il presente
belief;der Glaube;la creencia|la fe;la croyance|la foi;la fede|la credenza`],["Life events",`life;das Leben;la vida;la vie;la vita
death;der Tod;la muerte;la mort;la morte
birth;die Geburt;el nacimiento;la naissance;la nascita
childhood;die Kindheit;la infancia;l'enfance;l'infanzia
youth;die Jugend;la juventud;la jeunesse;la gioventù
old age;das Alter;la vejez;la vieillesse;la vecchiaia
age;das Alter (Jahre);la edad;l'âge;l'età
funeral;die Beerdigung|das Begräbnis;el funeral|el entierro;l'enterrement|les funérailles;il funerale
memory (a memory);die Erinnerung;el recuerdo (memoria);le souvenir (mémoire);il ricordo (memoria)
luck;das Glück (Zufall);la suerte;la chance (sort);la fortuna`],["Opinions",`opinion;die Meinung;la opinión;l'opinion|l'avis;l'opinione|il parere
advice;der Rat|der Ratschlag;el consejo;le conseil;il consiglio
decision;die Entscheidung;la decisión;la décision;la decisione
choice;die Wahl (Auswahl);la elección (opción);le choix;la scelta
argument (reason);das Argument;el argumento;l'argument;l'argomento
discussion;die Diskussion;la discusión;la discussion;la discussione
agreement;die Vereinbarung|die Zustimmung;el acuerdo;l'accord;l'accordo
doubt;der Zweifel;la duda;le doute;il dubbio
point of view;der Standpunkt|die Sichtweise;el punto de vista;le point de vue;il punto di vista
question (issue);die Frage|das Thema;la cuestión;la question (sujet);la questione`],["Success & failure",`success;der Erfolg;el éxito;le succès|la réussite;il successo
failure;der Misserfolg|das Scheitern;el fracaso;l'échec;il fallimento
effort;die Mühe|die Anstrengung;el esfuerzo;l'effort;lo sforzo
progress;der Fortschritt;el progreso;le progrès;il progresso
skill;die Fähigkeit|das Können;la habilidad;la compétence|le talent;l'abilità
talent;das Talent;el talento;le talent;il talento
practice (training);die Übung (Training)|das Training;la práctica;la pratique|l'entraînement;la pratica|l'allenamento
prize;der Preis (Auszeichnung);el premio;le prix (récompense);il premio
victory;der Sieg;la victoria;la victoire;la vittoria
defeat;die Niederlage;la derrota;la défaite;la sconfitta`],["Problems",`trouble;der Ärger|die Schwierigkeiten;el problema|los líos;les ennuis;i guai
difficulty;die Schwierigkeit;la dificultad;la difficulté;la difficoltà
risk;das Risiko;el riesgo;le risque;il rischio
mistake (big error);der Irrtum;la equivocación;l'erreur (grave);lo sbaglio (grave)
fault;die Schuld|der Fehler;la culpa;la faute (responsabilité);la colpa
conflict;der Konflikt;el conflicto;le conflit;il conflitto
crisis;die Krise;la crisis;la crise;la crisi
stress;der Stress;el estrés;le stress;lo stress
pressure;der Druck;la presión;la pression;la pressione
noise;der Lärm;el ruido;le bruit;il rumore`],["Thinking & knowing",`thought;der Gedanke;el pensamiento;la pensée;il pensiero
mind;der Verstand|der Geist;la mente;l'esprit;la mente
memory (ability);das Gedächtnis;la memoria;la mémoire;la memoria
information;die Information;la información;l'information;l'informazione
fact;die Tatsache|der Fakt;el hecho;le fait;il fatto
secret;das Geheimnis;el secreto;le secret;il segreto
mystery;das Rätsel|das Geheimnis (Rätsel);el misterio;le mystère;il mistero
meaning;die Bedeutung;el significado;le sens|la signification;il significato
attention;die Aufmerksamkeit;la atención;l'attention;l'attenzione
intelligence;die Intelligenz;la inteligencia;l'intelligence;l'intelligenza`],["Rules & order",`rule;die Regel;la regla (norma)|la norma;la règle (norme);la regola
order (command);der Befehl;la orden;l'ordre;l'ordine
permission;die Erlaubnis;el permiso;la permission|l'autorisation;il permesso
control;die Kontrolle;el control;le contrôle;il controllo
power;die Macht;el poder;le pouvoir;il potere
system;das System;el sistema;le système;il sistema
method;die Methode;el método;la méthode;il metodo
process;der Prozess|der Vorgang;el proceso;le processus;il processo
structure;die Struktur;la estructura;la structure;la struttura
level;das Niveau|die Stufe;el nivel;le niveau;il livello`]],hm=[["Body actions",`to bite;beißen;morder;mordre;mordere
to blink;blinzeln;parpadear;cligner des yeux;sbattere le palpebre
to chew;kauen;masticar;mâcher;masticare
to swallow;schlucken;tragar;avaler;inghiottire
to lick;lecken;lamer;lécher;leccare
to scratch;kratzen;rascar|arañar;gratter|griffer;grattare
to shake;schütteln;sacudir|agitar;secouer;scuotere
to bend;biegen|sich bücken;doblar|agacharse;plier|se pencher;piegare|chinarsi
to stretch;dehnen|strecken;estirar;étirer|s'étirer;allungare|stirarsi
to bleed;bluten;sangrar;saigner;sanguinare`],["Housework 2",`to sew;nähen;coser;coudre;cucire
to knit;stricken;tejer;tricoter;lavorare a maglia
to dry;trocknen;secar;sécher;asciugare
to hang out (washing);aufhängen;tender la ropa;étendre le linge;stendere il bucato
to polish;polieren;pulir|sacar brillo;polir|cirer;lucidare
to dust;Staub wischen;quitar el polvo;épousseter|faire la poussière;spolverare
to throw away;wegwerfen;tirar|botar;jeter;buttare via
to replace;ersetzen;reemplazar|sustituir;remplacer;sostituire
to install;installieren|einbauen;instalar;installer;installare
to plug in;einstecken|anschließen;enchufar;brancher;collegare|attaccare la spina`],["Cooking 2",`to heat;erhitzen|wärmen;calentar;chauffer;scaldare|riscaldare
to cool down;abkühlen|kühlen;enfriar;refroidir;raffreddare
to grill;grillen;asar a la parrilla;griller;grigliare
to roast;braten|rösten;asar;rôtir;arrostire
to chop;hacken|klein schneiden;picar;hacher;tritare
to grate;reiben;rallar;râper;grattugiare
to slice;in Scheiben schneiden;cortar en rodajas|rebanar;trancher|couper en tranches;affettare
to squeeze;auspressen|drücken;exprimir|apretar;presser;spremere
to spread;streichen|verteilen;untar;étaler|tartiner;spalmare
to serve;servieren;servir;servir;servire`],["Saying things",`to name;nennen|benennen;llamar|nombrar;nommer|appeler;chiamare|nominare
to mention;erwähnen;mencionar;mentionner;menzionare
to express;ausdrücken;expresar;exprimer;esprimere
to admit;zugeben;admitir|reconocer;admettre|avouer;ammettere
to deny;leugnen|bestreiten;negar;nier;negare
to insist;bestehen auf;insistir;insister;insistere
to persuade;überzeugen|überreden;convencer|persuadir;convaincre|persuader;convincere|persuadere
to request;bitten|anfordern;solicitar|pedir;demander|solliciter;richiedere
to beg;betteln|anflehen;rogar|mendigar;supplier|mendier;supplicare|mendicare
to praise;loben;elogiar|alabar;louer|féliciter;lodare`],["Work verbs",`to employ;beschäftigen|anstellen;emplear;employer;impiegare
to hire;einstellen;contratar;embaucher;assumere
to fire (dismiss);entlassen|kündigen;despedir;licencier|renvoyer;licenziare
to resign;kündigen|zurücktreten;dimitir|renunciar;démissionner;dimettersi
to lead;führen|leiten;dirigir|liderar;diriger|mener;guidare|dirigere
to negotiate;verhandeln;negociar;négocier;negoziare
to invest;investieren;invertir;investir;investire
to calculate;berechnen|rechnen;calcular;calculer;calcolare
to copy;kopieren;copiar;copier;copiare
to fail;scheitern;fracasar|fallar;échouer;fallire`],["Moving around",`to roll;rollen;rodar;rouler;rotolare
to slide;rutschen|gleiten;deslizarse;glisser;scivolare
to float;schwimmen|treiben;flotar;flotter;galleggiare
to sink;sinken|untergehen;hundirse;couler|sombrer;affondare
to spin;sich drehen;girar|dar vueltas;tourner;girare
to bounce;springen|hüpfen;rebotar;rebondir;rimbalzare
to hike;wandern;hacer senderismo;faire de la randonnée;fare escursioni|fare trekking
to march;marschieren;marchar;défiler|marcher au pas;marciare
to skate;Schlittschuh laufen|skaten;patinar;patiner;pattinare
to ski;Ski fahren;esquiar;skier|faire du ski;sciare`],["Sport verbs",`to race;um die Wette laufen|rennen;competir|correr;faire la course;gareggiare
to aim;zielen;apuntar;viser;mirare
to shoot;schießen;disparar|tirar;tirer;sparare|tirare
to bet;wetten;apostar;parier;scommettere
to cheat;schummeln|betrügen;hacer trampa;tricher;imbrogliare|barare
to beat (defeat);besiegen|schlagen;vencer|derrotar;battre;battere|sconfiggere
to warm up;sich aufwärmen;calentar;s'échauffer;riscaldarsi
to compete;antreten|konkurrieren;competir;concourir|rivaliser;competere|gareggiare
to cheer (support);anfeuern;animar|aclamar;encourager|acclamer;fare il tifo|incitare
to exercise;Sport treiben|trainieren;hacer ejercicio;faire du sport|faire de l'exercice;fare sport|fare esercizio`],["Thinking 2",`to consider;überlegen|in Betracht ziehen;considerar;considérer|envisager;considerare
to realise;erkennen|merken;darse cuenta;se rendre compte|réaliser;rendersi conto
to wonder;sich fragen;preguntarse;se demander;chiedersi|domandarsi
to suppose;annehmen|vermuten;suponer;supposer;supporre
to expect;erwarten;esperar|prever;s'attendre à;aspettarsi
to judge;beurteilen|urteilen;juzgar;juger;giudicare
to learn by heart;auswendig lernen;aprender de memoria;apprendre par cœur;imparare a memoria
to concentrate;sich konzentrieren;concentrarse;se concentrer;concentrarsi
to pay attention;aufpassen;prestar atención;faire attention;fare attenzione
to make a mistake;einen Fehler machen|sich irren;equivocarse;se tromper;sbagliare|sbagliarsi`],["Feelings verbs 2",`to laugh at;auslachen|lachen über;reírse de;se moquer de;ridere di|prendere in giro
to frighten;erschrecken|Angst machen;asustar;effrayer|faire peur;spaventare
to surprise;überraschen;sorprender;surprendre;sorprendere
to disappoint;enttäuschen;decepcionar;décevoir;deludere
to please;erfreuen|gefallen;complacer|agradar;plaire;far piacere|piacere
to annoy;ärgern|nerven;fastidiar|molestar;agacer|énerver;infastidire|irritare
to comfort;trösten;consolar;consoler;consolare
to encourage;ermutigen;animar|alentar;encourager;incoraggiare
to excite;begeistern;emocionar|entusiasmar;enthousiasmer;entusiasmare|emozionare
to relax;sich entspannen;relajarse;se détendre;rilassarsi`],["Giving & getting",`to exchange;tauschen|austauschen;intercambiar|cambiar;échanger;scambiare
to offer;anbieten;ofrecer;offrir|proposer;offrire
to receive;empfangen|erhalten;recibir;recevoir;ricevere
to give back;zurückgeben;devolver;rendre;restituire|ridare
to share out;verteilen|aufteilen;repartir;répartir|distribuer;distribuire|spartire
to deserve;verdienen;merecer;mériter;meritare
to lose (something);verlieren|verlegen;perder;perdre|égarer;perdere|smarrire
to waste;verschwenden;desperdiciar|malgastar;gaspiller;sprecare
to provide;bereitstellen|liefern;proporcionar|proveer;fournir;fornire
to get rid of;loswerden;deshacerse de;se débarrasser de;sbarazzarsi di`],["Online verbs",`to record;aufnehmen;grabar;enregistrer;registrare
to film;filmen;filmar|grabar;filmer;filmare|riprendere
to publish;veröffentlichen;publicar;publier;pubblicare
to search online;googeln|online suchen;buscar en internet;chercher en ligne|rechercher;cercare online
to log in;sich einloggen|sich anmelden;iniciar sesión;se connecter;accedere|fare il login
to log out;sich ausloggen|sich abmelden;cerrar sesión;se déconnecter;disconnettersi|fare il logout
to scroll;scrollen;hacer scroll|desplazarse;faire défiler;scorrere
to subscribe;abonnieren;suscribirse;s'abonner;iscriversi|abbonarsi
to update;aktualisieren;actualizar;mettre à jour;aggiornare
to charge (a phone);laden|aufladen;cargar;charger|recharger;caricare`],["Health verbs",`to heal;heilen;curar|sanar;guérir;guarire
to treat (medically);behandeln;tratar;soigner|traiter;curare|trattare
to recover;sich erholen|gesund werden;recuperarse;se rétablir;riprendersi|guarire
to examine;untersuchen;examinar|revisar;examiner;esaminare|visitare
to vaccinate;impfen;vacunar;vacciner;vaccinare
to faint;ohnmächtig werden;desmayarse;s'évanouir;svenire
to vomit;sich übergeben|erbrechen;vomitar;vomir;vomitare
to cough;husten;toser;tousser;tossire
to suffer;leiden;sufrir;souffrir;soffrire
to swell;anschwellen;hincharse;enfler|gonfler;gonfiarsi`],["School verbs 2",`to revise;wiederholen|lernen;repasar;réviser;ripassare
to underline;unterstreichen;subrayar;souligner;sottolineare
to correct;korrigieren|verbessern;corregir;corriger;correggere
to mark (grade);benoten;calificar|poner nota;noter;valutare|dare un voto
to summarise;zusammenfassen;resumir;résumer;riassumere
to research;recherchieren|forschen;investigar;faire des recherches;fare ricerche|ricercare
to present (a project);präsentieren;presentar;présenter;presentare
to raise your hand;aufzeigen|die Hand heben;levantar la mano;lever la main;alzare la mano
to graduate;den Abschluss machen;graduarse|licenciarse;obtenir son diplôme;laurearsi|diplomarsi
to attend;teilnehmen|besuchen;asistir;assister à|suivre;frequentare|partecipare`],["Travel verbs 2",`to explore;erkunden;explorar;explorer;esplorare
to camp;zelten|campen;acampar;camper|faire du camping;campeggiare
to go sightseeing;Sehenswürdigkeiten besichtigen;hacer turismo;faire du tourisme;fare un giro turistico
to check in;einchecken;facturar|hacer el check-in;s'enregistrer;fare il check-in
to sunbathe;sich sonnen;tomar el sol;bronzer|prendre le soleil;prendere il sole
to get lost;sich verlaufen|sich verirren;perderse;se perdre;perdersi
to hitchhike;trampen|per Anhalter fahren;hacer autostop;faire du stop;fare l'autostop
to cancel;absagen|stornieren;cancelar|anular;annuler;annullare|disdire
to confirm;bestätigen;confirmar;confirmer;confermare
to postpone;verschieben;aplazar|posponer;reporter;rimandare|rinviare`],["Little body signals",`to smoke;rauchen;fumar;fumer;fumare
to sweat;schwitzen;sudar;transpirer|suer;sudare
to shiver;zittern;temblar|tiritar;frissonner|trembler;tremare|rabbrividire
to blush;erröten|rot werden;sonrojarse|ponerse rojo;rougir;arrossire
to nod;nicken;asentir;hocher la tête;annuire
to frown;die Stirn runzeln;fruncir el ceño;froncer les sourcils;aggrottare la fronte
to stare;starren|anstarren;mirar fijamente;fixer|regarder fixement;fissare
to wink;zwinkern;guiñar el ojo;faire un clin d'œil;fare l'occhiolino
to sigh;seufzen;suspirar;soupirer;sospirare
to snore;schnarchen;roncar;ronfler;russare`],["Arguing",`to interrupt;unterbrechen;interrumpir;interrompre;interrompere
to protest;protestieren;protestar;protester;protestare
to criticise;kritisieren;criticar;critiquer;criticare
to blame;die Schuld geben|beschuldigen;culpar|echar la culpa;blâmer|reprocher;incolpare|dare la colpa
to accuse;anklagen|beschuldigen;acusar;accuser;accusare
to threaten;drohen|bedrohen;amenazar;menacer;minacciare
to insult;beleidigen;insultar;insulter;insultare|offendere
to tease;necken;tomar el pelo|burlarse;taquiner;stuzzicare|prendere in giro
to gossip;tratschen|lästern;cotillear|chismorrear;faire des commérages|potiner;spettegolare
to swear (curse);fluchen;decir palabrotas|maldecir;jurer|dire des gros mots;imprecare|dire parolacce`]],gm=[["In the bathroom",`washbasin;das Waschbecken;el lavabo;le lavabo;il lavandino
tap;der Wasserhahn;el grifo;le robinet;il rubinetto
toilet paper;das Toilettenpapier|das Klopapier;el papel higiénico;le papier toilette;la carta igienica
hairdryer;der Föhn|der Haartrockner;el secador de pelo|el secador;le sèche-cheveux;il phon|l'asciugacapelli
razor;der Rasierer;la maquinilla de afeitar|la cuchilla;le rasoir;il rasoio
perfume;das Parfüm;el perfume;le parfum;il profumo
make-up;das Make-up|die Schminke;el maquillaje;le maquillage;il trucco
deodorant;das Deo|das Deodorant;el desodorante;le déodorant;il deodorante
sponge;der Schwamm;la esponja;l'éponge;la spugna
bathrobe;der Bademantel;el albornoz;le peignoir;l'accappatoio`],["In the bedroom",`mattress;die Matratze;el colchón;le matelas;il materasso
sheet;das Bettlaken|das Leintuch;la sábana;le drap;il lenzuolo
duvet;die Bettdecke|die Tuchent;el edredón;la couette;il piumone
bedside table;der Nachttisch|das Nachtkästchen;la mesita de noche;la table de chevet;il comodino
hanger;der Kleiderbügel;la percha;le cintre;la gruccia|l'appendiabiti
poster;das Poster|das Plakat;el póster|el cartel;l'affiche|le poster;il poster|il manifesto
bunk bed;das Etagenbett|das Stockbett;la litera;les lits superposés;il letto a castello
teddy bear;der Teddybär;el osito de peluche;l'ours en peluche|le nounours;l'orsacchiotto
diary;das Tagebuch;el diario;le journal intime;il diario
slippers;die Hausschuhe|die Patschen;las zapatillas de casa|las pantuflas;les chaussons|les pantoufles;le pantofole`],["In the garden",`lawn;der Rasen;el césped;la pelouse;il prato inglese|il prato
hedge;die Hecke;el seto;la haie;la siepe
watering can;die Gießkanne;la regadera;l'arrosoir;l'annaffiatoio
spade;der Spaten;la pala;la bêche|la pelle;la vanga|la pala
wheelbarrow;die Schubkarre|die Scheibtruhe;la carretilla;la brouette;la carriola
lawnmower;der Rasenmäher;el cortacésped;la tondeuse;il tosaerba
greenhouse;das Gewächshaus|das Glashaus;el invernadero;la serre;la serra
swing;die Schaukel;el columpio;la balançoire;l'altalena
bench (seat);die Bank|die Sitzbank;el banco;le banc;la panchina
path;der Pfad|der Weg;el sendero;le sentier|l'allée;il sentiero|il vialetto`],["School supplies",`sticky note;der Haftzettel|das Post-it;el pósit|la nota adhesiva;le post-it;il post-it
notepad;der Notizblock;el bloc de notas;le bloc-notes;il blocco note
calculator;der Taschenrechner;la calculadora;la calculatrice;la calcolatrice
highlighter;der Textmarker;el subrayador|el rotulador fluorescente;le surligneur;l'evidenziatore
paper clip;die Büroklammer;el clip;le trombone;la graffetta
sharpener;der Spitzer;el sacapuntas;le taille-crayon;il temperamatite
felt-tip pen;der Filzstift;el rotulador;le feutre;il pennarello
compass (maths);der Zirkel;el compás;le compas;il compasso
sticky tape;das Klebeband|der Tesafilm;la cinta adhesiva|el celo;le ruban adhésif|le scotch;il nastro adesivo|lo scotch
locker;der Spind|das Schließfach;la taquilla;le casier;l'armadietto`],["Around the city",`skyscraper;der Wolkenkratzer;el rascacielos;le gratte-ciel;il grattacielo
monument;das Denkmal;el monumento;le monument;il monumento
fountain;der Brunnen;la fuente;la fontaine;la fontana
playground;der Spielplatz;el parque infantil;l'aire de jeux;il parco giochi
cemetery;der Friedhof;el cementerio;le cimetière;il cimitero
palace;der Palast;el palacio;le palais;il palazzo reale|il palazzo
harbour;der Hafen;el puerto;le port;il porto
tunnel;der Tunnel;el túnel;le tunnel;la galleria|il tunnel
suburb;der Vorort;las afueras|el barrio periférico;la banlieue;la periferia
old town;die Altstadt;el casco antiguo;la vieille ville;il centro storico`],["More animals 2",`ladybird;der Marienkäfer;la mariquita;la coccinelle;la coccinella
lizard;die Eidechse;la lagartija|el lagarto;le lézard;la lucertola
goldfish;der Goldfisch;el pez de colores;le poisson rouge;il pesce rosso
guinea pig;das Meerschweinchen;la cobaya|el conejillo de Indias;le cochon d'Inde;la cavia|il porcellino d'India
hippo;das Nilpferd;el hipopótamo;l'hippopotame;l'ippopotamo
rhino;das Nashorn;el rinoceronte;le rhinocéros;il rinoceronte
polar bear;der Eisbär;el oso polar;l'ours polaire|l'ours blanc;l'orso polare|l'orso bianco
panda;der Panda;el panda;le panda;il panda
gorilla;der Gorilla;el gorila;le gorille;il gorilla
cheetah;der Gepard;el guepardo;le guépard;il ghepardo`],["Even more animals",`dinosaur;der Dinosaurier;el dinosaurio;le dinosaure;il dinosauro
badger;der Dachs;el tejón;le blaireau;il tasso
wild boar;das Wildschwein;el jabalí;le sanglier;il cinghiale
seagull;die Möwe;la gaviota;la mouette;il gabbiano
flamingo;der Flamingo;el flamenco;le flamant rose;il fenicottero
ostrich;der Strauß (Vogel);el avestruz;l'autruche;lo struzzo
peacock;der Pfau;el pavo real;le paon;il pavone
swallow (bird);die Schwalbe;la golondrina;l'hirondelle;la rondine
woodpecker;der Specht;el pájaro carpintero;le pic|le pivert;il picchio
horn (animal);das Horn;el cuerno;la corne;il corno`],["Trees & plants",`stick;der Stock|der Stecken;el palo;le bâton;il bastone
trunk (tree);der Stamm;el tronco;le tronc;il tronco
pine tree;die Kiefer|die Föhre;el pino;le pin;il pino
oak;die Eiche;el roble;le chêne;la quercia
palm tree;die Palme;la palmera;le palmier;la palma
cactus;der Kaktus;el cactus;le cactus;il cactus
daisy;das Gänseblümchen;la margarita;la pâquerette|la marguerite;la margherita
herb;das Kraut|die Kräuter;la hierba aromática;l'herbe aromatique|les fines herbes;l'erba aromatica
weed;das Unkraut;la mala hierba;la mauvaise herbe;l'erbaccia
thorn;der Dorn;la espina;l'épine;la spina`],["Landscape 2",`jungle;der Dschungel;la selva|la jungla;la jungle;la giungla
shore;das Ufer;la orilla;la rive|le rivage;la riva
bay;die Bucht;la bahía;la baie;la baia
peak;der Gipfel;la cima|el pico;le sommet;la cima|la vetta
slope;der Hang;la ladera|la pendiente;la pente;il pendio
cliff;die Klippe;el acantilado;la falaise;la scogliera
plain;die Ebene;la llanura;la plaine;la pianura
swamp;der Sumpf;el pantano;le marais;la palude
stream;der Bach;el arroyo;le ruisseau;il ruscello
horizon;der Horizont;el horizonte;l'horizon;l'orizzonte`],["Weather & sky 2",`breeze;die Brise;la brisa;la brise;la brezza
thunderstorm;das Gewitter;la tormenta;l'orage;il temporale
hurricane;der Orkan|der Hurrikan;el huracán;l'ouragan;l'uragano
drought;die Dürre;la sequía;la sécheresse;la siccità
shower (rain);der Regenschauer;el chubasco;l'averse;l'acquazzone
degree;der Grad;el grado;le degré;il grado
weather forecast;die Wettervorhersage;el pronóstico del tiempo;la météo|les prévisions météo;le previsioni del tempo
snowflake;die Schneeflocke;el copo de nieve;le flocon de neige;il fiocco di neve
comet;der Komet;el cometa;la comète;la cometa
galaxy;die Galaxie;la galaxia;la galaxie;la galassia`],["In the cupboard",`mustard;der Senf;la mostaza;la moutarde;la senape
ketchup;das Ketchup;el kétchup;le ketchup;il ketchup
mayonnaise;die Mayonnaise|die Mayo;la mayonesa;la mayonnaise;la maionese
cinnamon;der Zimt;la canela;la cannelle;la cannella
vanilla;die Vanille;la vainilla;la vanille;la vaniglia
lentil;die Linse;la lenteja;la lentille;la lenticchia
peanut;die Erdnuss;el cacahuete|el maní;la cacahuète;l'arachide|la nocciolina
hazelnut;die Haselnuss;la avellana;la noisette;la nocciola
walnut;die Walnuss;la nuez;la noix;la noce
raisin;die Rosine;la pasa;le raisin sec;l'uvetta|l'uva passa`],["Dishes & drinks",`smoothie;der Smoothie;el batido|el smoothie;le smoothie;il frullato|lo smoothie
milkshake;der Milchshake;el batido de leche;le milk-shake;il frappè
fizzy drink;die Limo|das Erfrischungsgetränk;el refresco;la boisson gazeuse|le soda;la bibita gassata
tap water;das Leitungswasser;el agua del grifo;l'eau du robinet;l'acqua del rubinetto
stew;der Eintopf;el guiso|el estofado;le ragoût;lo stufato|lo spezzatino
curry;das Curry;el curry;le curry;il curry
kebab;der Döner|der Kebab;el kebab;le kebab;il kebab
spaghetti;die Spaghetti;los espaguetis;les spaghettis;gli spaghetti
dumpling;der Knödel|der Kloß;el bollo|la bola de masa;la boulette;il canederlo|lo gnocco
muffin;der Muffin;la magdalena|el muffin;le muffin;il muffin`],["More clothes",`vest;das Unterhemd|das Top;la camiseta de tirantes;le débardeur;la canottiera
underwear;die Unterwäsche;la ropa interior;les sous-vêtements;la biancheria intima
swimsuit;der Badeanzug;el bañador|el traje de baño;le maillot de bain;il costume da bagno
raincoat;der Regenmantel;el impermeable;l'imperméable;l'impermeabile
hoodie;der Kapuzenpulli|der Hoodie;la sudadera con capucha;le sweat à capuche;la felpa con cappuccio
tracksuit;der Trainingsanzug;el chándal;le survêtement;la tuta
high heels;die Stöckelschuhe|die High Heels;los tacones;les talons hauts;i tacchi alti
collar;der Kragen;el cuello de la camisa;le col;il colletto
sleeve;der Ärmel;la manga;la manche;la manica
zip;der Reißverschluss;la cremallera;la fermeture éclair;la cerniera|la zip`],["Household things",`ironing board;das Bügelbrett;la tabla de planchar;la planche à repasser;l'asse da stiro
iron (for clothes);das Bügeleisen;la plancha;le fer à repasser;il ferro da stiro
cloth;das Tuch|der Lappen;el trapo|el paño;le chiffon;lo straccio|il panno
detergent;das Waschmittel;el detergente;la lessive|le détergent;il detersivo
clothes peg;die Wäscheklammer;la pinza de la ropa;la pince à linge;la molletta
bottle opener;der Flaschenöffner;el abrebotellas;le décapsuleur|l'ouvre-bouteille;l'apribottiglie
tin opener;der Dosenöffner;el abrelatas;l'ouvre-boîte;l'apriscatole
corkscrew;der Korkenzieher;el sacacorchos;le tire-bouchon;il cavatappi
teapot;die Teekanne;la tetera;la théière;la teiera
mug;der Becher|das Häferl;el tazón|la taza grande;le mug|la grande tasse;la tazza grande|la tazza`],["Gadgets",`headphones;die Kopfhörer;los auriculares;le casque|les écouteurs;le cuffie
speaker;der Lautsprecher;el altavoz;le haut-parleur|l'enceinte;l'altoparlante|la cassa
tablet (device);das Tablet;la tableta;la tablette;il tablet
USB stick;der USB-Stick;la memoria USB|el pendrive;la clé USB;la chiavetta USB
remote control;die Fernbedienung;el mando a distancia;la télécommande;il telecomando
games console;die Spielkonsole;la videoconsola;la console de jeux;la console
WiFi;das WLAN;el wifi;le wifi;il wifi
code;der Code;el código;le code;il codice
network;das Netzwerk;la red;le réseau;la rete
data;die Daten;los datos;les données;i dati`]],vm=[["Countries 2",`Portugal;Portugal;Portugal;le Portugal;il Portogallo
Netherlands;die Niederlande|Holland;los Países Bajos|Holanda;les Pays-Bas;i Paesi Bassi|l'Olanda
Belgium;Belgien;Bélgica;la Belgique;il Belgio
Poland;Polen;Polonia;la Pologne;la Polonia
Russia;Russland;Rusia;la Russie;la Russia
China;China;China;la Chine;la Cina
Japan;Japan;Japón;le Japon;il Giappone
India;Indien;India;l'Inde;l'India
Brazil;Brasilien;Brasil;le Brésil;il Brasile
Mexico;Mexiko;México;le Mexique;il Messico`],["Countries 3",`Canada;Kanada;Canadá;le Canada;il Canada
Australia;Australien;Australia;l'Australie;l'Australia
Ireland;Irland;Irlanda;l'Irlande;l'Irlanda
Scotland;Schottland;Escocia;l'Écosse;la Scozia
Sweden;Schweden;Suecia;la Suède;la Svezia
Turkey (country);die Türkei;Turquía;la Turquie;la Turchia
Egypt;Ägypten;Egipto;l'Égypte;l'Egitto
Africa;Afrika;África;l'Afrique;l'Africa
Asia;Asien;Asia;l'Asie;l'Asia
Croatia;Kroatien;Croacia;la Croatie;la Croazia`],["Nationalities",`German (adjective);deutsch;alemán;allemand;tedesco
Austrian;österreichisch;austriaco;autrichien;austriaco
Spanish (adjective);spanisch;español;espagnol;spagnolo
French (adjective);französisch;francés;français;francese
Italian (adjective);italienisch;italiano;italien;italiano
English (adjective);englisch;inglés;anglais;inglese
American;amerikanisch;estadounidense|americano;américain;americano
Swiss;schweizerisch|Schweizer;suizo;suisse;svizzero
British;britisch;británico;britannique;britannico
European;europäisch;europeo;européen;europeo`],["Body 2",`liver;die Leber;el hígado;le foie;il fegato
kidney;die Niere;el riñón;le rein;il rene
nerve;der Nerv;el nervio;le nerf;il nervo
skeleton;das Skelett;el esqueleto;le squelette;lo scheletro
hip;die Hüfte;la cadera;la hanche;il fianco|l'anca
waist;die Taille;la cintura (cuerpo);la taille (corps);la vita (corpo)
fingernail;der Fingernagel|der Nagel;la uña;l'ongle;l'unghia
heel;die Ferse;el talón;le talon;il tallone|il calcagno
eyelash;die Wimper;la pestaña;le cil;il ciglio
sweat;der Schweiß;el sudor;la sueur|la transpiration;il sudore`],["Health 2",`allergy;die Allergie;la alergia;l'allergie;l'allergia
virus;das Virus;el virus;le virus;il virus
diet;die Diät|die Ernährung;la dieta;le régime|l'alimentation;la dieta
vitamin;das Vitamin;la vitamina;la vitamine;la vitamina
scar;die Narbe;la cicatriz;la cicatrice;la cicatrice
bruise;der blaue Fleck;el moratón|el moretón;le bleu|l'ecchymose;il livido
blister;die Blase (Haut);la ampolla;l'ampoule (peau);la vescica
operation;die Operation;la operación;l'opération;l'operazione
thermometer;das Thermometer|das Fieberthermometer;el termómetro;le thermomètre;il termometro
wheelchair;der Rollstuhl;la silla de ruedas;le fauteuil roulant;la sedia a rotelle`],["The car",`engine;der Motor;el motor;le moteur;il motore
tyre;der Reifen;el neumático;le pneu;lo pneumatico|la gomma
brake;die Bremse;el freno;le frein;il freno
steering wheel;das Lenkrad;el volante;le volant;il volante
headlight;der Scheinwerfer;el faro;le phare;il faro
boot (car);der Kofferraum;el maletero;le coffre;il bagagliaio
windscreen;die Windschutzscheibe;el parabrisas;le pare-brise;il parabrezza
horn (car);die Hupe;el claxon|la bocina;le klaxon;il clacson
driving licence;der Führerschein;el carné de conducir;le permis de conduire;la patente
traffic jam;der Stau;el atasco;l'embouteillage|le bouchon;l'ingorgo`],["Sports kit",`racket;der Schläger;la raqueta;la raquette;la racchetta
net;das Netz;la red;le filet;la rete
helmet;der Helm;el casco;le casque;il casco
medal;die Medaille;la medalla;la médaille;la medaglia
trophy;die Trophäe|der Pokal;el trofeo|la copa;le trophée|la coupe;il trofeo|la coppa
gym;das Fitnessstudio|die Turnhalle;el gimnasio;la salle de sport|le gymnase;la palestra
pitch (sports field);das Spielfeld|der Platz;el campo;le terrain;il campo
referee;der Schiedsrichter|die Schiedsrichterin;el árbitro|la árbitra;l'arbitre;l'arbitro
fan (supporter);der Fan;el aficionado|el hincha;le supporter|le fan;il tifoso
captain;der Kapitän|die Kapitänin;el capitán|la capitana;le capitaine;il capitano`],["Music 2",`rhythm;der Rhythmus;el ritmo;le rythme;il ritmo
note (music);die Note|der Ton;la nota;la note;la nota
choir;der Chor;el coro;la chorale|le chœur;il coro
orchestra;das Orchester;la orquesta;l'orchestre;l'orchestra
trumpet;die Trompete;la trompeta;la trompette;la tromba
saxophone;das Saxophon;el saxofón;le saxophone;il sassofono
microphone;das Mikrofon;el micrófono;le micro|le microphone;il microfono
album;das Album;el álbum;l'album;l'album
lyrics;der Liedtext|der Songtext;la letra;les paroles;il testo
musician;der Musiker|die Musikerin;el músico|la música;le musicien|la musicienne;il musicista|la musicista`],["University",`lecture;die Vorlesung;la clase|la conferencia;le cours magistral;la lezione
professor;der Professor|die Professorin;el catedrático|el profesor universitario;le professeur d'université;il professore universitario
degree (university);der Abschluss|das Studium;el título|la carrera;le diplôme|la licence;la laurea
subject (school);das Fach|das Schulfach;la asignatura;la matière;la materia
essay;der Aufsatz;la redacción|el ensayo;la rédaction|la dissertation;il tema|il saggio
scholarship;das Stipendium;la beca;la bourse;la borsa di studio
campus;der Campus;el campus;le campus;il campus
thesis;die Abschlussarbeit|die Diplomarbeit;la tesis;la thèse|le mémoire;la tesi
certificate;das Zeugnis|das Zertifikat;el certificado;le certificat;il certificato|l'attestato
course;der Kurs;el curso;le cours;il corso`],["Science 2",`gravity;die Schwerkraft;la gravedad;la gravité|la pesanteur;la gravità
oxygen;der Sauerstoff;el oxígeno;l'oxygène;l'ossigeno
molecule;das Molekül;la molécula;la molécule;la molecola
cell;die Zelle;la célula;la cellule;la cellula
magnet;der Magnet;el imán;l'aimant;la calamita|il magnete
microscope;das Mikroskop;el microscopio;le microscope;il microscopio
theory;die Theorie;la teoría;la théorie;la teoria
research (noun);die Forschung;la investigación;la recherche;la ricerca
invention;die Erfindung;el invento|la invención;l'invention;l'invenzione
inventor;der Erfinder|die Erfinderin;el inventor|la inventora;l'inventeur|l'inventrice;l'inventore|l'inventrice`],["Time 2",`decade;das Jahrzehnt;la década;la décennie;il decennio
moment;der Moment|der Augenblick;el momento;le moment;il momento
period (time);der Zeitraum;el período;la période;il periodo
deadline;die Frist|die Deadline;el plazo;la date limite;la scadenza
schedule;der Zeitplan;el horario|la agenda;le planning;il programma|la tabella di marcia
the day after tomorrow;übermorgen;pasado mañana;après-demain;dopodomani
the day before yesterday;vorgestern;anteayer;avant-hier;l'altro ieri
tonight;heute Abend|heute Nacht;esta noche;ce soir;stasera
this morning;heute Morgen|heute Früh;esta mañana;ce matin;stamattina
last week;letzte Woche;la semana pasada;la semaine dernière;la settimana scorsa`],["Numbers 2",`second (2nd);zweite|zweiter;segundo;deuxième|second;secondo
third;dritte|dritter;tercero;troisième;terzo
fourth;vierte|vierter;cuarto;quatrième;quarto
fifth;fünfte|fünfter;quinto;cinquième;quinto
tenth;zehnte|zehnter;décimo;dixième;decimo
fifteen;fünfzehn;quince;quinze;quindici
forty;vierzig;cuarenta;quarante;quaranta
sixty;sechzig;sesenta;soixante;sessanta
eighty;achtzig;ochenta;quatre-vingts;ottanta
ninety;neunzig;noventa;quatre-vingt-dix;novanta`],["Shopping 2",`changing room;die Umkleidekabine;el probador;la cabine d'essayage;il camerino
bargain;das Schnäppchen;la ganga;la bonne affaire;l'affare
refund;die Rückerstattung;el reembolso;le remboursement;il rimborso
queue;die Schlange|die Warteschlange;la cola|la fila;la file d'attente|la queue;la coda|la fila
opening hours;die Öffnungszeiten;el horario de apertura;les horaires d'ouverture;l'orario di apertura
shopping bag;die Einkaufstasche;la bolsa de la compra;le sac de courses;la borsa della spesa
price tag;das Preisschild|das Etikett;la etiqueta;l'étiquette;l'etichetta|il cartellino
department store;das Kaufhaus;los grandes almacenes;le grand magasin;il grande magazzino
online shop;der Onlineshop;la tienda online;la boutique en ligne;il negozio online
delivery;die Lieferung;la entrega|el envío;la livraison;la consegna`]],bm=[["Outdoors & farm verbs",`to arrange;ordnen|vereinbaren;organizar|arreglar;arranger|organiser;sistemare|organizzare
to attach;befestigen|anhängen;adjuntar|sujetar;attacher|joindre;allegare|attaccare
to bury;begraben;enterrar;enterrer;seppellire
to dig;graben;cavar;creuser;scavare
to fish;angeln|fischen;pescar;pêcher;pescare
to hunt;jagen;cazar;chasser;cacciare
to harvest;ernten;cosechar;récolter;raccogliere
to milk;melken;ordeñar;traire;mungere
to ride (a horse);reiten;montar a caballo;monter à cheval;andare a cavallo|cavalcare
to sow;säen;sembrar;semer;seminare`],["Love & friends",`to fall in love;sich verlieben;enamorarse;tomber amoureux;innamorarsi
to break up;sich trennen|Schluss machen;romper|cortar;rompre;lasciarsi
to flirt;flirten;coquetear|ligar;flirter|draguer;flirtare
to cuddle;kuscheln;acurrucarse|abrazar;faire un câlin;coccolare
to adore;vergöttern|anbeten;adorar;adorer;adorare
to envy;beneiden;envidiar;envier;invidiare
to regret;bereuen;arrepentirse|lamentar;regretter;pentirsi|rimpiangere
to support;unterstützen;apoyar;soutenir;sostenere|supportare
to get on well;sich gut verstehen;llevarse bien;bien s'entendre;andare d'accordo
to make up (after a fight);sich versöhnen;reconciliarse|hacer las paces;se réconcilier;fare pace`],["Using your hands",`to grab;packen|greifen;agarrar;saisir;afferrare
to tear;reißen|zerreißen;romper|rasgar;déchirer;strappare
to press;drücken;presionar|apretar;appuyer;premere
to shake hands;die Hand geben;dar la mano;serrer la main;stringere la mano
to clap;klatschen;aplaudir;applaudir;applaudire
to stick (glue);kleben;pegar;coller;incollare
to cut out;ausschneiden;recortar;découper;ritagliare
to fill in (a form);ausfüllen;rellenar;remplir;compilare
to colour in;ausmalen;colorear;colorier;colorare
to wipe;wischen|abwischen;limpiar|pasar un trapo;essuyer;pulire|asciugare`],["Thinking 3",`to analyse;analysieren;analizar;analyser;analizzare
to predict;vorhersagen;predecir|pronosticar;prédire|prévoir;prevedere
to estimate;schätzen;estimar;estimer;stimare
to define;definieren;definir;définir;definire
to invent;erfinden;inventar;inventer;inventare
to design;entwerfen|gestalten;diseñar;concevoir|dessiner;progettare|disegnare
to recommend;empfehlen;recomendar;recommander;raccomandare|consigliare
to approve;genehmigen|billigen;aprobar;approuver;approvare
to reflect (think);nachdenken;reflexionar;réfléchir;riflettere
to ignore;ignorieren;ignorar;ignorer;ignorare`],["Changing 2",`to break down (car);eine Panne haben|kaputtgehen;averiarse;tomber en panne;guastarsi
to disappear;verschwinden;desaparecer;disparaître;sparire|scomparire
to appear;erscheinen;aparecer;apparaître;apparire
to grow up;aufwachsen|erwachsen werden;crecer|criarse;grandir;crescere|diventare grande
to age;altern;envejecer;vieillir;invecchiare
to shrink;schrumpfen|eingehen;encoger;rétrécir;restringersi
to expand;sich ausdehnen|erweitern;expandir|ampliar;agrandir|étendre;espandere|ampliare
to decrease;sinken|abnehmen;disminuir;diminuer;diminuire
to vary;variieren;variar;varier;variare
to transform;verwandeln;transformar;transformer;trasformare`],["At home 3",`to light (a fire);anzünden;encender;allumer;accendere
to blow out;ausblasen;apagar soplando|soplar;souffler;spegnere
to set (an alarm);stellen;poner;mettre|régler;puntare
to rinse;spülen|ausspülen;enjuagar;rincer;sciacquare
to soak;einweichen;remojar;tremper;mettere a bagno
to flush (the toilet);spülen;tirar de la cadena;tirer la chasse;tirare lo sciacquone
to air (a room);lüften;ventilar|airear;aérer;arieggiare|cambiare l'aria
to lay (put down);hinlegen;colocar|dejar;poser;posare
to fit;passen;quedar bien|caber;aller bien|convenir;stare bene|andare bene
to mend;flicken|ausbessern;remendar;raccommoder;rammendare`],["On the phone",`to ring back;zurückrufen;devolver la llamada;rappeler;richiamare
to leave a message;eine Nachricht hinterlassen;dejar un mensaje;laisser un message;lasciare un messaggio
to dial;wählen (Nummer);marcar;composer;comporre
to hold on (on the phone);dranbleiben;no colgar|esperar;patienter|ne pas quitter;restare in linea
to pronounce;aussprechen;pronunciar;prononcer;pronunciare
to communicate;kommunizieren;comunicarse|comunicar;communiquer;comunicare
to contact;kontaktieren;contactar;contacter;contattare
to remind;erinnern (an etwas);recordar;rappeler;ricordare
to state;feststellen|erklären;declarar|afirmar;déclarer|affirmer;dichiarare|affermare
to stammer;stottern;tartamudear;bégayer;balbettare`],["On the move",`to sail;segeln;navegar;faire de la voile|naviguer;andare in barca a vela
to row;rudern;remar;ramer;remare
to dive;tauchen;bucear;plonger;immergersi|tuffarsi
to commute;pendeln;ir y venir al trabajo;faire la navette;fare il pendolare
to overtake;überholen;adelantar;dépasser|doubler;sorpassare
to reverse (a car);rückwärts fahren;dar marcha atrás;faire marche arrière;fare retromarcia
to accelerate;beschleunigen;acelerar;accélérer;accelerare
to brake;bremsen;frenar;freiner;frenare
to crash;zusammenstoßen|einen Unfall haben;chocar|estrellarse;avoir un accident|percuter;schiantarsi|fare un incidente
to emigrate;auswandern;emigrar;émigrer;emigrare`],["Money 2",`to afford;sich leisten;permitirse;se permettre|avoir les moyens;permettersi
to charge (a price);verlangen|berechnen;cobrar;faire payer|facturer;far pagare|addebitare
to bargain;handeln|feilschen;regatear;marchander;contrattare|mercanteggiare
to rent out;vermieten;alquilar|arrendar;louer|mettre en location;affittare|dare in affitto
to donate;spenden;donar;faire un don|donner;donare
to export;exportieren;exportar;exporter;esportare
to import;importieren;importar;importer;importare
to advertise;werben|bewerben;anunciar|hacer publicidad;faire de la publicité;pubblicizzare|fare pubblicità
to insure;versichern;asegurar;assurer;assicurare
to withdraw (money);abheben;sacar|retirar;retirer;prelevare|ritirare`],["Daily routine 2",`to oversleep;verschlafen;quedarse dormido;ne pas se réveiller à temps;non svegliarsi in tempo
to be late;zu spät kommen|sich verspäten;llegar tarde;être en retard;essere in ritardo|arrivare tardi
to queue;anstehen|Schlange stehen;hacer cola;faire la queue;fare la fila|fare la coda
to get ready;sich fertig machen;prepararse|arreglarse;se préparer;prepararsi
to take a photo;ein Foto machen;hacer una foto|sacar una foto;prendre une photo;fare una foto
to take a shower;duschen;ducharse;prendre une douche|se doucher;fare la doccia
to have a bath;baden;bañarse;prendre un bain;fare il bagno
to brush your teeth;Zähne putzen;lavarse los dientes|cepillarse los dientes;se brosser les dents;lavarsi i denti
to do homework;Hausaufgaben machen;hacer los deberes;faire ses devoirs;fare i compiti
to make the bed;das Bett machen;hacer la cama;faire son lit;rifare il letto`],["Free time verbs",`to go for a walk;spazieren gehen;dar un paseo|pasear;se promener|faire une promenade;fare una passeggiata
to go swimming;schwimmen gehen;ir a nadar;aller nager;andare a nuotare
to listen to music;Musik hören;escuchar música;écouter de la musique;ascoltare musica
to watch TV;fernsehen;ver la tele;regarder la télé;guardare la tv
to play the guitar;Gitarre spielen;tocar la guitarra;jouer de la guitare;suonare la chitarra
to go to the cinema;ins Kino gehen;ir al cine;aller au cinéma;andare al cinema
to hang out with friends;mit Freunden abhängen;quedar con amigos;traîner avec des amis;uscire con gli amici
to surf the internet;im Internet surfen;navegar por internet;surfer sur internet;navigare in internet
to take part;teilnehmen|mitmachen;participar;participer;partecipare
to have a picnic;ein Picknick machen;hacer un pícnic;faire un pique-nique;fare un picnic`],["Nature verbs 2",`to pollute;verschmutzen;contaminar;polluer;inquinare
to save energy;Energie sparen;ahorrar energía;économiser l'énergie;risparmiare energia
to flow;fließen;fluir|correr;couler|s'écouler;scorrere
to erupt;ausbrechen;entrar en erupción;entrer en éruption;eruttare
to get dark;dunkel werden;oscurecer|anochecer;faire nuit|s'assombrir;fare buio
to thunder;donnern;tronar;tonner;tuonare
to blossom;blühen;florecer;fleurir;fiorire
to wilt;welken|verwelken;marchitarse;se faner|faner;appassire
to hatch;schlüpfen;salir del huevo|eclosionar;éclore;schiudersi|uscire dall'uovo
to hibernate;Winterschlaf halten;hibernar;hiberner;andare in letargo`]],ym=[["Personality 3",`loyal;treu|loyal;leal|fiel;loyal|fidèle;leale|fedele
arrogant;arrogant|eingebildet;arrogante|creído;arrogant|prétentieux;arrogante|presuntuoso
greedy;gierig|habgierig;codicioso|avaricioso;avide;avido
sincere;aufrichtig;sincero;sincère;sincero
responsible;verantwortungsvoll|verantwortlich;responsable;responsable;responsabile
tidy;ordentlich|aufgeräumt;ordenado;ordonné|rangé;ordinato
messy;unordentlich|chaotisch;desordenado;désordonné|en désordre;disordinato
punctual;pünktlich;puntual;ponctuel;puntuale
talkative;gesprächig|redselig;hablador;bavard;chiacchierone|loquace
sporty;sportlich;deportista|deportivo;sportif;sportivo`],["Appearance 2",`handsome;gutaussehend;guapo;beau;bello|attraente
bald;glatzköpfig|kahl;calvo;chauve;calvo|pelato
tanned;braun gebrannt;moreno|bronceado;bronzé;abbronzato
pale;blass|bleich;pálido;pâle;pallido
wrinkled;faltig;arrugado;ridé;rugoso|pieno di rughe
muscular;muskulös;musculoso;musclé;muscoloso
elegant;elegant;elegante;élégant;elegante
casual;lässig|leger;informal|casual;décontracté;casual|informale
dark-haired;dunkelhaarig;moreno|de pelo oscuro;brun;moro|castano scuro
freckled;sommersprossig;pecoso;avec des taches de rousseur;lentigginoso`],["How does it taste?",`juicy;saftig;jugoso;juteux;succoso|sugoso
crunchy;knusprig;crujiente;croustillant|croquant;croccante
tasty;lecker|schmackhaft;sabroso|rico;savoureux|bon;gustoso|saporito
disgusting;ekelhaft|eklig;asqueroso;dégoûtant;disgustoso|schifoso
ripe;reif;maduro;mûr;maturo
rotten;verfault|faul;podrido;pourri;marcio
frozen;gefroren|tiefgekühlt;congelado;congelé|surgelé;congelato|surgelato
vegetarian;vegetarisch;vegetariano;végétarien;vegetariano
vegan;vegan;vegano;végane|végétalien;vegano
homemade;hausgemacht|selbst gemacht;casero;fait maison;fatto in casa`],["Weather words 2",`freezing;eiskalt;helado;glacial;gelido
boiling (very hot);brütend heiß|kochend heiß;hirviendo|ardiente;brûlant;bollente
humid;feucht|schwül;húmedo;humide;umido
foggy;neblig;con niebla;brumeux;nebbioso
snowy;verschneit;nevado;enneigé;innevato
stormy;stürmisch;tormentoso;orageux;tempestoso
clear (sky);klar|wolkenlos;despejado;dégagé;sereno
mild;mild;suave|templado;doux|clément;mite
chilly;kühl|frisch;fresquito;frisquet;freddino
bright;hell|strahlend;luminoso|brillante;lumineux;luminoso`],["Shapes 2",`square (adjective);quadratisch;cuadrado;carré;quadrato
flat (not bumpy);flach|eben;plano;plat;piatto|piano
oval;oval;ovalado;ovale;ovale
pointed;spitz;puntiagudo;pointu;appuntito
curved;gebogen|krumm;curvo;courbé|courbe;curvo
vertical;senkrecht|vertikal;vertical;vertical;verticale
horizontal;waagerecht|horizontal;horizontal;horizontal;orizzontale
giant;riesig|gigantisch;gigante;géant;gigante
medium;mittelgroß|mittel;mediano;moyen;medio
triangular;dreieckig;triangular;triangulaire;triangolare`],["What do you think of it?",`amazing;erstaunlich|unglaublich;increíble|asombroso;incroyable|étonnant;incredibile|sorprendente
brilliant;brillant|genial;brillante|genial;brillant;brillante|geniale
awful;schrecklich|furchtbar;horrible|fatal;affreux|horrible;orribile|pessimo
ridiculous;lächerlich;ridículo;ridicule;ridicolo
weird;komisch|merkwürdig;raro|extraño;bizarre;strano
pleasant;angenehm;agradable;agréable;piacevole
unpleasant;unangenehm;desagradable;désagréable;spiacevole
exciting;spannend|aufregend;emocionante;passionnant|excitant;emozionante|appassionante
relaxing;entspannend;relajante;relaxant|reposant;rilassante
tiring;anstrengend|ermüdend;agotador|cansado;fatigant;faticoso|stancante`],["Big topics words",`political;politisch;político;politique;politico
social;sozial;social;social;sociale
economic;wirtschaftlich;económico;économique;economico
scientific;wissenschaftlich;científico;scientifique;scientifico
natural;natürlich;natural;naturel;naturale
artificial;künstlich;artificial;artificiel;artificiale
digital;digital;digital;numérique|digital;digitale
traditional;traditionell;tradicional;traditionnel;tradizionale
cultural;kulturell;cultural;culturel;culturale
religious;religiös;religioso;religieux;religioso`],["How much & how far",`several;mehrere;varios;plusieurs;diversi|parecchi
major;bedeutend|groß;importante|mayor;majeur|important;maggiore|importante
basic;grundlegend|einfach;básico;de base|basique;di base|basilare
advanced;fortgeschritten;avanzado;avancé;avanzato
extreme;extrem;extremo;extrême;estremo
slight;leicht|gering;leve|ligero;léger|faible;lieve|leggero
maximum;maximal;máximo;maximum|maximal;massimo
minimum;minimal|mindest;mínimo;minimum|minimal;minimo
equal;gleich|gleichwertig;igual;égal;uguale
rare;selten;raro|escaso;rare;raro`],["How often & when",`daily;täglich;diario;quotidien;quotidiano
weekly;wöchentlich;semanal;hebdomadaire;settimanale
monthly;monatlich;mensual;mensuel;mensile
yearly;jährlich;anual;annuel;annuale
recent;kürzlich|neu;reciente;récent;recente
current;aktuell|derzeitig;actual;actuel;attuale
former;ehemalig;antiguo|ex;ancien;ex|precedente
temporary;vorübergehend|befristet;temporal;temporaire;temporaneo
permanent;dauerhaft|fest;permanente;permanent;permanente
regular;regelmäßig;regular;régulier;regolare`],["Feelings 4",`anxious;ängstlich|besorgt;ansioso;anxieux;ansioso
cheeky;frech;descarado|caradura;effronté|culotté;sfacciato
furious;wütend|rasend;furioso;furieux;furioso
miserable;elend|unglücklich;desgraciado|triste;malheureux;infelice|triste
delighted;hocherfreut|begeistert;encantado;ravi;felicissimo|contentissimo
fed up;genervt|es satt haben;harto;en avoir marre;stufo
lucky;glücklich|Glück haben;afortunado|con suerte;chanceux;fortunato
unlucky;unglücklich|Pech haben;desafortunado|con mala suerte;malchanceux;sfortunato
comfortable;bequem|gemütlich;cómodo;confortable|à l'aise;comodo
uncomfortable;unbequem;incómodo;inconfortable|mal à l'aise;scomodo`]],km=[["At the hotel",`lobby;die Lobby|die Eingangshalle;el vestíbulo|el lobby;le hall;la hall|l'atrio
room service;der Zimmerservice;el servicio de habitaciones;le service d'étage;il servizio in camera
guest house;die Pension;la pensión|el hostal;la pension|la maison d'hôtes;la pensione
check-out;der Check-out;la salida;le départ;il check-out
key card;die Schlüsselkarte;la tarjeta llave;la carte-clé;la tessera magnetica
view;die Aussicht;la vista;la vue;la vista
breakfast buffet;das Frühstücksbuffet;el desayuno buffet;le petit-déjeuner buffet;la colazione a buffet
complaint;die Beschwerde;la queja|la reclamación;la plainte|la réclamation;il reclamo|la lamentela
stay;der Aufenthalt;la estancia;le séjour;il soggiorno
voucher;der Gutschein;el vale|el cupón;le bon|le coupon;il buono|il coupon`],["Post & bank",`parcel;das Paket;el paquete;le colis;il pacco
postcode;die Postleitzahl;el código postal;le code postal;il codice postale|il CAP
sender;der Absender;el remitente;l'expéditeur;il mittente
recipient;der Empfänger;el destinatario;le destinataire;il destinatario
postbox;der Briefkasten;el buzón;la boîte aux lettres;la cassetta delle lettere|la buca delle lettere
PIN;die PIN|die Geheimzahl;el PIN|el número secreto;le code PIN|le code secret;il PIN
bank transfer;die Überweisung;la transferencia;le virement;il bonifico
interest (money);die Zinsen;los intereses;les intérêts;gli interessi
debt;die Schulden;la deuda;la dette;il debito
savings;die Ersparnisse;los ahorros;les économies|l'épargne;i risparmi`],["Office life",`break (at work);die Pause|die Mittagspause;el descanso;la pause;la pausa
overtime;die Überstunden;las horas extra;les heures supplémentaires;gli straordinari
shift;die Schicht;el turno;le service|l'équipe;il turno
task;die Aufgabe;la tarea;la tâche;il compito
report;der Bericht;el informe;le rapport;il rapporto|la relazione
presentation;die Präsentation;la presentación;la présentation;la presentazione
conference;die Konferenz;el congreso|la conferencia;la conférence;la conferenza
department;die Abteilung;el departamento;le service|le département;il reparto|il dipartimento
trainee;der Praktikant|die Praktikantin;el becario|la becaria;le stagiaire;il tirocinante|lo stagista
internship;das Praktikum;las prácticas;le stage;il tirocinio|lo stage`],["Building & repairs",`brick;der Ziegel;el ladrillo;la brique;il mattone
cement;der Zement;el cemento;le ciment;il cemento
pipe;das Rohr;la tubería|el tubo;le tuyau;il tubo
wire;der Draht;el alambre;le fil de fer;il filo di ferro
paint;die Farbe|der Anstrich;la pintura;la peinture;la vernice|la pittura
paintbrush;der Pinsel;el pincel|la brocha;le pinceau;il pennello
drill;die Bohrmaschine;el taladro;la perceuse;il trapano
tile;die Fliese|die Kachel;el azulejo|la baldosa;le carreau;la piastrella
crack;der Riss;la grieta;la fissure;la crepa
leak;das Leck|die undichte Stelle;la fuga|la gotera;la fuite;la perdita`],["The senses",`sight;das Sehen|die Sicht;la vista;la vue;la vista
hearing;das Gehör;el oído;l'ouïe;l'udito
smell (sense);der Geruch|der Geruchssinn;el olfato|el olor;l'odorat|l'odeur;l'olfatto|l'odore
taste (sense);der Geschmack;el gusto|el sabor;le goût;il gusto|il sapore
touch (sense);der Tastsinn;el tacto;le toucher;il tatto
breath;der Atem;el aliento|la respiración;le souffle|l'haleine;il respiro|il fiato
heartbeat;der Herzschlag;el latido;le battement de cœur;il battito cardiaco
tear (crying);die Träne;la lágrima;la larme;la lacrima
smile (noun);das Lächeln;la sonrisa;le sourire;il sorriso
kiss (noun);der Kuss;el beso;le baiser|le bisou;il bacio`],["Family 3",`grandparents;die Großeltern;los abuelos;les grands-parents;i nonni
siblings;die Geschwister;los hermanos;les frères et sœurs;i fratelli
father-in-law;der Schwiegervater;el suegro;le beau-père;il suocero
mother-in-law;die Schwiegermutter;la suegra;la belle-mère;la suocera
godmother;die Patin|die Taufpatin;la madrina;la marraine;la madrina
orphan;das Waisenkind|der Waise;el huérfano|la huérfana;l'orphelin|l'orpheline;l'orfano|l'orfana
widow;die Witwe;la viuda;la veuve;la vedova
ancestor;der Vorfahr;el antepasado;l'ancêtre;l'antenato
engagement;die Verlobung;el compromiso;les fiançailles;il fidanzamento
honeymoon;die Flitterwochen;la luna de miel;la lune de miel;la luna di miele`],["Stones & materials",`diamond;der Diamant;el diamante;le diamant;il diamante
crystal;der Kristall;el cristal;le cristal;il cristallo
copper;das Kupfer;el cobre;le cuivre;il rame
coal;die Kohle;el carbón;le charbon;il carbone
steel;der Stahl;el acero;l'acier;l'acciaio
glass (material);das Glas;el vidrio;le verre;il vetro
clay;der Ton|der Lehm;la arcilla;l'argile;l'argilla
marble;der Marmor;el mármol;le marbre;il marmo
steam;der Dampf;el vapor;la vapeur;il vapore
ash;die Asche;la ceniza;la cendre;la cenere`],["From the butcher & baker",`bacon;der Speck;el beicon|el tocino;le bacon|le lard;la pancetta
turkey (meat);der Truthahn|die Pute;el pavo;la dinde;il tacchino
cod;der Kabeljau|der Dorsch;el bacalao;le cabillaud|la morue;il merluzzo
trout;die Forelle;la trucha;la truite;la trota
mussel;die Miesmuschel;el mejillón;la moule;la cozza
croissant;das Croissant|das Kipferl;el cruasán;le croissant;il cornetto|il croissant
wholemeal bread;das Vollkornbrot;el pan integral;le pain complet;il pane integrale
crust;die Kruste|die Rinde;la corteza;la croûte;la crosta
crumb;der Krümel|die Brösel;la miga;la miette;la briciola
porridge;der Haferbrei|das Porridge;las gachas de avena;le porridge;il porridge`],["Clothes 3",`pattern;das Muster;el estampado|el patrón;le motif;il motivo|la fantasia
stripe;der Streifen;la raya;la rayure;la riga|la striscia
spot (pattern);der Punkt|der Tupfen;el lunar;le pois;il pois
hood;die Kapuze;la capucha;la capuche;il cappuccio
apron;die Schürze;el delantal;le tablier;il grembiule
fancy dress costume;das Kostüm|die Verkleidung;el disfraz;le déguisement;il travestimento|il costume
mask;die Maske;la máscara;le masque;la maschera
shoelace;der Schnürsenkel|das Schuhband;el cordón;le lacet;il laccio
sole (shoe);die Sohle;la suela;la semelle;la suola
fabric;der Stoff;la tela|el tejido;le tissu;il tessuto|la stoffa`],["Train & bus 2",`carriage (train);der Waggon|der Wagen;el vagón;la voiture|le wagon;la carrozza|il vagone
seat;der Sitz|der Platz;el asiento;le siège|la place;il posto|il sedile
aisle;der Gang;el pasillo;l'allée|le couloir;il corridoio
window seat;der Fensterplatz;el asiento de ventanilla;la place côté fenêtre;il posto finestrino
return ticket;die Rückfahrkarte;el billete de ida y vuelta;l'aller-retour;il biglietto di andata e ritorno
single ticket;die einfache Fahrkarte;el billete de ida;l'aller simple;il biglietto di sola andata
route;die Route|die Strecke;la ruta;l'itinéraire|le trajet;il percorso|l'itinerario
connection;die Verbindung|der Anschluss;la conexión|el enlace;la correspondance;la coincidenza
fare;der Fahrpreis;la tarifa;le tarif;la tariffa
conductor;der Schaffner|die Schaffnerin;el revisor|la revisora;le contrôleur|la contrôleuse;il controllore`]],wm=[["Useful verbs 1",`to adapt;anpassen|sich anpassen;adaptar|adaptarse;adapter|s'adapter;adattare|adattarsi
to clarify;klären;aclarar;clarifier|éclaircir;chiarire
to combine;kombinieren|verbinden;combinar;combiner;combinare
to connect;verbinden;conectar;connecter|relier;collegare|connettere
to consist of;bestehen aus;consistir en|constar de;consister en|se composer de;consistere in|essere composto da
to contain;enthalten;contener;contenir;contenere
to deal with;sich befassen mit|erledigen;ocuparse de|tratar;s'occuper de|traiter;occuparsi di|trattare
to demand;verlangen|fordern;exigir;exiger;esigere|pretendere
to determine;bestimmen|festlegen;determinar;déterminer;determinare
to distinguish;unterscheiden;distinguir;distinguer;distinguere`],["Useful verbs 2",`to ensure;sicherstellen;asegurar|garantizar;assurer|garantir;assicurare|garantire
to establish;gründen|einrichten;establecer|fundar;établir|fonder;stabilire|fondare
to focus;sich konzentrieren auf|fokussieren;centrarse en|enfocar;se concentrer sur;concentrarsi su|focalizzarsi
to identify;identifizieren|erkennen;identificar;identifier;identificare
to influence;beeinflussen;influir|influenciar;influencer;influenzare
to involve;beinhalten|beteiligen;implicar|involucrar;impliquer;coinvolgere
to maintain;erhalten|aufrechterhalten;mantener;maintenir|entretenir;mantenere
to perform;aufführen|vorführen;actuar|representar;jouer|interpréter;esibirsi|interpretare
to prevent;verhindern;prevenir|evitar;empêcher|prévenir;impedire|prevenire
to reach;erreichen;alcanzar|llegar a;atteindre;raggiungere`],["Useful verbs 3",`to rely on;sich verlassen auf;contar con|depender de;compter sur;contare su|fare affidamento su
to remove;entfernen;quitar|eliminar;enlever|retirer;rimuovere|togliere
to represent;darstellen|vertreten;representar;représenter;rappresentare
to require;erfordern|benötigen;requerir|necesitar;nécessiter|exiger;richiedere
to respond;reagieren|antworten;responder|reaccionar;réagir|répondre;reagire|rispondere
to select;auswählen;seleccionar;sélectionner;selezionare
to separate;trennen;separar;séparer;separare
to settle;sich niederlassen|klären;instalarse|resolver;s'installer|régler;stabilirsi|sistemare
to surround;umgeben|umzingeln;rodear;entourer;circondare
to treat (people);behandeln;tratar;traiter;trattare`],["Cooking 3",`to defrost;auftauen;descongelar;décongeler;scongelare
to season;würzen;condimentar|sazonar;assaisonner;condire
to whisk;schlagen|verquirlen;batir;fouetter|battre;sbattere|montare
to knead;kneten;amasar;pétrir;impastare
to steam;dämpfen;cocinar al vapor;cuire à la vapeur;cuocere al vapore
to drain;abgießen|abtropfen lassen;escurrir;égoutter;scolare
to sprinkle;bestreuen|streuen;espolvorear;saupoudrer;cospargere
to marinate;marinieren|einlegen;marinar;mariner;marinare
to reheat;aufwärmen;recalentar;réchauffer;riscaldare
to spill;verschütten;derramar;renverser;rovesciare|versare`],["Body movements 3",`to kneel;knien;arrodillarse;s'agenouiller;inginocchiarsi
to lean;sich lehnen|lehnen;apoyarse|inclinarse;s'appuyer|se pencher;appoggiarsi|sporgersi
to stumble;stolpern;tropezar;trébucher;inciampare
to limp;hinken;cojear;boiter;zoppicare
to hop;hüpfen;saltar a la pata coja;sauter à cloche-pied;saltellare
to tiptoe;auf Zehenspitzen gehen;andar de puntillas;marcher sur la pointe des pieds;camminare in punta di piedi
to squat;in die Hocke gehen|hocken;ponerse en cuclillas;s'accroupir;accovacciarsi
to turn around;sich umdrehen;darse la vuelta;se retourner;girarsi|voltarsi
to stand up;aufstehen;ponerse de pie|levantarse;se lever;alzarsi in piedi|alzarsi
to swing;schaukeln|schwingen;columpiarse|balancearse;se balancer;dondolare|oscillare`],["Being social",`to congratulate;gratulieren;felicitar;féliciter;congratularsi|fare gli auguri
to welcome;begrüßen|willkommen heißen;dar la bienvenida;accueillir;accogliere
to say goodbye;sich verabschieden;despedirse;dire au revoir;salutare|congedarsi
to keep a secret;ein Geheimnis bewahren;guardar un secreto;garder un secret;mantenere un segreto
to tell the truth;die Wahrheit sagen;decir la verdad;dire la vérité;dire la verità
to make friends;Freunde finden|sich anfreunden;hacer amigos;se faire des amis;fare amicizia
to keep in touch;in Kontakt bleiben;mantenerse en contacto;rester en contact;restare in contatto
to get to know;kennenlernen;conocer|llegar a conocer;faire connaissance avec;fare la conoscenza di|conoscere
to look forward to;sich freuen auf;tener ganas de|esperar con ilusión;avoir hâte de;non vedere l'ora di
to change your mind;seine Meinung ändern;cambiar de opinión;changer d'avis;cambiare idea`],["Going out 2",`to book a table;einen Tisch reservieren;reservar una mesa;réserver une table;prenotare un tavolo
to meet up;sich treffen;quedar;se retrouver;vedersi|incontrarsi
to pick up (someone);abholen;recoger;aller chercher;andare a prendere
to drop off (someone);absetzen|vorbeibringen;dejar|llevar;déposer;lasciare|accompagnare
to dress up;sich schick machen|sich verkleiden;arreglarse|disfrazarse;s'habiller élégamment|se déguiser;vestirsi elegante|travestirsi
to toast (with drinks);anstoßen;brindar;trinquer;brindare
to sing along;mitsingen;cantar con|corear;chanter avec|chanter en chœur;cantare insieme
to stay up late;lange aufbleiben;trasnochar|quedarse despierto;veiller tard|se coucher tard;fare tardi|stare alzato fino a tardi
to go dancing;tanzen gehen;ir a bailar;aller danser;andare a ballare
to throw a party;eine Party geben|eine Party schmeißen;dar una fiesta|organizar una fiesta;faire une fête|organiser une fête;dare una festa|organizzare una festa`],["School & work verbs 4",`to hand in;abgeben|einreichen;entregar;rendre|remettre;consegnare
to skip (a class);schwänzen;saltarse|hacer novillos;sécher;saltare|marinare la scuola
to take notes;Notizen machen|mitschreiben;tomar apuntes;prendre des notes;prendere appunti
to look up (a word);nachschlagen;buscar en el diccionario|buscar;chercher dans le dictionnaire|chercher;cercare sul dizionario|cercare
to cooperate;zusammenarbeiten;cooperar|colaborar;coopérer|collaborer;cooperare|collaborare
to supervise;beaufsichtigen;supervisar;surveiller|superviser;sorvegliare|supervisionare
to file (documents);ablegen|abheften;archivar;classer|archiver;archiviare
to complete;abschließen|vervollständigen;completar;compléter|terminer;completare
to sign up;sich anmelden;inscribirse|apuntarse;s'inscrire;iscriversi
to get a job;eine Stelle bekommen|einen Job finden;conseguir un trabajo;trouver un emploi;trovare lavoro`],["Feelings verbs 3",`to get angry;wütend werden|sich ärgern;enfadarse|enojarse;se fâcher|se mettre en colère;arrabbiarsi
to get bored;sich langweilen;aburrirse;s'ennuyer;annoiarsi
to get scared;Angst bekommen;asustarse;prendre peur|avoir peur;spaventarsi
to feel better;sich besser fühlen;sentirse mejor;se sentir mieux;sentirsi meglio
to hesitate;zögern;dudar|vacilar;hésiter;esitare
to panic;in Panik geraten;entrar en pánico;paniquer|s'affoler;farsi prendere dal panico
to cope;zurechtkommen|bewältigen;arreglárselas|hacer frente;faire face|s'en sortir;farcela|far fronte
to give up;aufgeben;rendirse|abandonar;abandonner|renoncer;arrendersi|rinunciare
to keep going;durchhalten|weitermachen;seguir adelante;tenir bon|continuer;tenere duro|andare avanti
to dare;sich trauen|wagen;atreverse;oser;osare`],["Computer verbs 2",`to restart;neu starten;reiniciar;redémarrer;riavviare
to freeze (computer);abstürzen|hängen;colgarse|bloquearse;planter|bugger;bloccarsi|piantarsi
to back up;sichern|ein Backup machen;hacer una copia de seguridad;sauvegarder|faire une sauvegarde;fare il backup
to hack;hacken;hackear|piratear;pirater;hackerare
to code;programmieren|coden;programar;coder|programmer;programmare
to stream;streamen;ver en streaming|transmitir en directo;regarder en streaming|diffuser;trasmettere in streaming
to post (online);posten;publicar;poster|publier;postare|pubblicare
to block (someone);blockieren;bloquear;bloquer;bloccare
to tag;markieren|taggen;etiquetar;identifier|taguer;taggare
to zoom in;heranzoomen|vergrößern;ampliar|hacer zoom;zoomer|agrandir;ingrandire|zoomare`]],zm=[["Crafts & making",`needle;die Nadel;la aguja;l'aiguille;l'ago
thread;der Faden;el hilo;le fil;il filo
knot;der Knoten;el nudo;le nœud;il nodo
bead;die Perle (Bastel-);la cuenta|el abalorio;la perle;la perlina
canvas;die Leinwand;el lienzo;la toile;la tela
sketchbook;das Skizzenbuch;el cuaderno de dibujo;le carnet de croquis;l'album da disegno
pottery;die Töpferei|die Keramik;la cerámica|la alfarería;la poterie;la ceramica
origami;das Origami;el origami;l'origami;l'origami
model (small copy);das Modell;la maqueta|el modelo;la maquette|le modèle réduit;il modellino
hobby room;der Bastelraum;el cuarto de manualidades;l'atelier de bricolage;la stanza degli hobby`],["On the internet",`search engine;die Suchmaschine;el buscador;le moteur de recherche;il motore di ricerca
link;der Link;el enlace;le lien;il link|il collegamento
browser;der Browser;el navegador;le navigateur;il browser
username;der Benutzername;el nombre de usuario;le nom d'utilisateur;il nome utente
account (online);das Konto|der Account;la cuenta;le compte;l'account
chat (online);der Chat;el chat;le chat|la discussion;la chat
emoji;das Emoji;el emoji;l'émoji;l'emoji
virus (computer);der Computervirus;el virus informático;le virus informatique;il virus informatico
screenshot;der Screenshot|das Bildschirmfoto;la captura de pantalla;la capture d'écran;lo screenshot
podcast;der Podcast;el pódcast;le podcast;il podcast`],["At the vet & zoo",`vet's practice;die Tierarztpraxis;la clínica veterinaria;le cabinet vétérinaire;l'ambulatorio veterinario
lead (for a dog);die Leine;la correa;la laisse;il guinzaglio
collar (for a pet);das Halsband;el collar (de perro);le collier (pour chien);il collare
bowl (for a pet);der Napf;el comedero|el cuenco;la gamelle;la ciotola
fish tank;das Aquarium;la pecera|el acuario;l'aquarium;l'acquario
animal shelter;das Tierheim;el refugio de animales;le refuge pour animaux;il canile|il rifugio per animali
herd;die Herde;la manada|el rebaño;le troupeau;il gregge|la mandria
flock (of birds);der Schwarm;la bandada;la volée|le vol;lo stormo
stable;der Stall;el establo|la cuadra;l'écurie|l'étable;la stalla
hay;das Heu;el heno;le foin;il fieno`],["Fruit & veg 3",`leek;der Lauch|der Porree;el puerro;le poireau;il porro
radish;das Radieschen;el rábano;le radis;il ravanello
beetroot;die Rote Bete|die Rote Rübe;la remolacha;la betterave;la barbabietola
asparagus;der Spargel;el espárrago;l'asperge;l'asparago
artichoke;die Artischocke;la alcachofa;l'artichaut;il carciofo
avocado;die Avocado;el aguacate;l'avocat (fruit);l'avocado
pomegranate;der Granatapfel;la granada;la grenade (fruit);il melograno
grapefruit;die Grapefruit;el pomelo;le pamplemousse;il pompelmo
blackberry;die Brombeere;la mora;la mûre;la mora
gooseberry;die Stachelbeere;la grosella espinosa;la groseille à maquereau;l'uva spina`],["In the street 2",`bus lane;die Busspur;el carril bus;la voie de bus;la corsia degli autobus
cycle path;der Radweg;el carril bici;la piste cyclable;la pista ciclabile
speed bump;die Bodenschwelle;el badén|el resalto;le ralentisseur;il dosso
pedestrian;der Fußgänger|die Fußgängerin;el peatón|la peatona;le piéton|la piétonne;il pedone
cyclist;der Radfahrer|die Radfahrerin;el ciclista|la ciclista;le cycliste|la cycliste;il ciclista|la ciclista
lamp post;die Straßenlaterne;la farola;le lampadaire|le réverbère;il lampione
bench (in the park);die Parkbank;el banco del parque;le banc public;la panchina del parco
rubbish bin (street);der Abfalleimer|der Mistkübel;la papelera;la poubelle publique;il cestino
graffiti;das Graffiti;el grafiti;le graffiti|le tag;il graffito
noise pollution;die Lärmbelästigung;la contaminación acústica;la pollution sonore;l'inquinamento acustico`],["Feelings nouns 2",`happiness;das Glück (Freude)|die Fröhlichkeit;la felicidad;le bonheur;la felicità
loneliness;die Einsamkeit;la soledad;la solitude;la solitudine
boredom;die Langeweile;el aburrimiento;l'ennui;la noia
excitement;die Aufregung|die Begeisterung;la emoción|el entusiasmo;l'excitation|l'enthousiasme;l'emozione|l'entusiasmo
jealousy;die Eifersucht;los celos;la jalousie;la gelosia
shame;die Scham;la vergüenza;la honte;la vergogna
guilt;die Schuld (Gefühl);la culpa (sentimiento)|la culpabilidad;la culpabilité;il senso di colpa
relief;die Erleichterung;el alivio;le soulagement;il sollievo
panic;die Panik;el pánico;la panique;il panico
patience;die Geduld;la paciencia;la patience;la pazienza`],["Kitchen 3",`scales;die Waage;la báscula|la balanza;la balance;la bilancia
grater;die Reibe;el rallador;la râpe;la grattugia
sieve;das Sieb;el colador;la passoire|le tamis;il colino|il setaccio
rolling pin;das Nudelholz|der Nudelwalker;el rodillo;le rouleau à pâtisserie;il mattarello
toaster;der Toaster;la tostadora;le grille-pain;il tostapane
blender;der Mixer;la batidora|la licuadora;le mixeur|le blender;il frullatore
freezer;der Gefrierschrank|die Tiefkühltruhe;el congelador;le congélateur;il congelatore
lunchbox;die Brotdose|die Jausenbox;la fiambrera|la lonchera;la boîte à goûter|la boîte à lunch;il portapranzo
thermos flask;die Thermoskanne;el termo;le thermos;il thermos
cutlery;das Besteck;los cubiertos;les couverts;le posate`],["Around the world",`culture shock;der Kulturschock;el choque cultural;le choc culturel;lo shock culturale
time zone;die Zeitzone;la zona horaria;le fuseau horaire;il fuso orario
jet lag;der Jetlag;el jet lag|el desfase horario;le décalage horaire;il jet lag
visa;das Visum;el visado|la visa;le visa;il visto
currency;die Währung;la divisa|la moneda;la devise|la monnaie;la valuta
exchange rate;der Wechselkurs;el tipo de cambio;le taux de change;il tasso di cambio
embassy;die Botschaft;la embajada;l'ambassade;l'ambasciata
tourist information;die Touristeninformation;la oficina de turismo;l'office de tourisme;l'ufficio turistico
landmark;das Wahrzeichen;el lugar emblemático;le monument emblématique;il monumento simbolo
local (person);der Einheimische|die Einheimische;el lugareño|el local;l'habitant du coin|l'habitant;l'abitante del posto|la gente del posto`]],Sm=[["Football & matches",`goalkeeper;der Torwart|der Tormann;el portero;le gardien de but;il portiere
league;die Liga;la liga;le championnat|la ligue;il campionato|la lega
tournament;das Turnier;el torneo;le tournoi;il torneo
half-time;die Halbzeit;el descanso|el medio tiempo;la mi-temps;l'intervallo
penalty;der Elfmeter|der Strafstoß;el penalti;le penalty|le tir au but;il rigore
foul;das Foul;la falta;la faute;il fallo
draw (result);das Unentschieden;el empate;le match nul;il pareggio
score;der Punktestand|der Spielstand;el marcador;le score;il punteggio
Olympic Games;die Olympischen Spiele;los Juegos Olímpicos;les Jeux olympiques;le Olimpiadi
World Cup;die Weltmeisterschaft|die WM;el Mundial|la Copa del Mundo;la Coupe du monde;i Mondiali|la Coppa del Mondo`],["At the beach",`lifeguard;der Rettungsschwimmer|die Rettungsschwimmerin;el socorrista|la socorrista;le maître-nageur|le sauveteur;il bagnino|la bagnina
sunburn;der Sonnenbrand;la quemadura solar;le coup de soleil;la scottatura
beach towel;das Strandtuch;la toalla de playa;la serviette de plage;il telo da mare
sandcastle;die Sandburg;el castillo de arena;le château de sable;il castello di sabbia
deckchair;der Liegestuhl;la tumbona|la hamaca;le transat|la chaise longue;la sdraio
surfboard;das Surfbrett;la tabla de surf;la planche de surf;la tavola da surf
snorkel;der Schnorchel;el tubo de buceo|el esnórquel;le tuba;il boccaglio
tide;die Gezeiten|die Flut;la marea;la marée;la marea
lighthouse;der Leuchtturm;el faro;le phare;il faro
pier;der Pier|die Seebrücke;el muelle|el embarcadero;la jetée;il molo|il pontile`],["Winter fun",`ski slope;die Skipiste;la pista de esquí;la piste de ski;la pista da sci
ski lift;der Skilift|der Sessellift;el telesquí|el remonte;le remonte-pente|le télésiège;lo skilift|la seggiovia
sledge;der Schlitten|die Rodel;el trineo;la luge|le traîneau;lo slittino|la slitta
snowball;der Schneeball;la bola de nieve;la boule de neige;la palla di neve
icicle;der Eiszapfen;el carámbano;la stalactite de glace;il ghiacciolo
avalanche;die Lawine;la avalancha|el alud;l'avalanche;la valanga
fireplace;der Kamin;la chimenea;la cheminée;il caminetto|il camino
mittens;die Fäustlinge|die Fäustel;las manoplas;les moufles;le muffole
woolly hat;die Wollmütze|die Haube;el gorro de lana;le bonnet;il berretto di lana
hot water bottle;die Wärmflasche;la bolsa de agua caliente;la bouillotte;la borsa dell'acqua calda`],["At the doctor 2",`symptom;das Symptom;el síntoma;le symptôme;il sintomo
cure;die Heilung|das Heilmittel;la cura|el remedio;le remède|la guérison;la cura|il rimedio
vaccine;der Impfstoff|die Impfung;la vacuna;le vaccin;il vaccino
check-up;die Vorsorgeuntersuchung|der Check-up;el chequeo|la revisión;le bilan de santé|le check-up;il controllo|il check-up
waiting room;das Wartezimmer;la sala de espera;la salle d'attente;la sala d'attesa
stretcher;die Trage;la camilla;le brancard|la civière;la barella
crutches;die Krücken;las muletas;les béquilles;le stampelle
plaster cast;der Gips|der Gipsverband;la escayola|el yeso;le plâtre;il gesso
X-ray;das Röntgenbild|das Röntgen;la radiografía;la radio|la radiographie;la radiografia
sore throat;die Halsschmerzen;el dolor de garganta;le mal de gorge;il mal di gola`],["Society 2",`demonstration;die Demonstration|der Protest;la manifestación|la protesta;la manifestation;la manifestazione|la protesta
strike;der Streik;la huelga;la grève;lo sciopero
trade union;die Gewerkschaft;el sindicato;le syndicat;il sindacato
charity;die Wohltätigkeitsorganisation;la organización benéfica;l'association caritative;l'ente di beneficenza
volunteer;der Freiwillige|die Freiwillige;el voluntario|la voluntaria;le bénévole|la bénévole;il volontario|la volontaria
refugee;der Flüchtling;el refugiado|la refugiada;le réfugié|la réfugiée;il rifugiato|la rifugiata
human rights;die Menschenrechte;los derechos humanos;les droits de l'homme|les droits humains;i diritti umani
freedom of speech;die Meinungsfreiheit;la libertad de expresión;la liberté d'expression;la libertà di parola
mayor;der Bürgermeister|die Bürgermeisterin;el alcalde|la alcaldesa;le maire|la maire;il sindaco|la sindaca
queen;die Königin;la reina;la reine;la regina`],["Qualities",`beauty;die Schönheit;la belleza;la beauté;la bellezza
strength;die Kraft|die Stärke;la fuerza;la force;la forza
weakness;die Schwäche;la debilidad;la faiblesse;la debolezza
kindness;die Freundlichkeit|die Güte;la amabilidad|la bondad;la gentillesse;la gentilezza
curiosity;die Neugier;la curiosidad;la curiosité;la curiosità
imagination;die Fantasie|die Vorstellungskraft;la imaginación;l'imagination;l'immaginazione|la fantasia
wisdom;die Weisheit;la sabiduría;la sagesse;la saggezza
humour;der Humor;el humor;l'humour;l'umorismo
confidence;das Selbstvertrauen|das Selbstbewusstsein;la confianza en sí mismo|la seguridad;la confiance en soi;la fiducia in se stessi|l'autostima
motivation;die Motivation;la motivación;la motivation;la motivazione`],["Around the house 4",`doormat;die Fußmatte;el felpudo;le paillasson;lo zerbino
radiator;der Heizkörper;el radiador;le radiateur;il termosifone|il radiatore
shutter;der Fensterladen|der Rollladen;la persiana;le volet;la persiana|l'imposta
smoke alarm;der Rauchmelder;el detector de humo;le détecteur de fumée;il rilevatore di fumo
porch;die Veranda|der Vorbau;el porche;le porche;il portico|la veranda
terrace;die Terrasse;la terraza;la terrasse;la terrazza
shed;der Schuppen|die Hütte;el cobertizo;l'abri de jardin|la remise;il capanno|la rimessa
keyhole;das Schlüsselloch;el ojo de la cerradura;le trou de serrure;il buco della serratura
lock (on a door);das Schloss;la cerradura;la serrure;la serratura
window sill;die Fensterbank|das Fensterbrett;el alféizar;le rebord de fenêtre;il davanzale`],["Types of people",`beginner;der Anfänger|die Anfängerin;el principiante|la principiante;le débutant|la débutante;il principiante|la principiante
expert;der Experte|die Expertin;el experto|la experta;l'expert|l'experte;l'esperto|l'esperta
hero;der Held|die Heldin;el héroe|la heroína;le héros|l'héroïne;l'eroe|l'eroina
enemy;der Feind|die Feindin;el enemigo|la enemiga;l'ennemi|l'ennemie;il nemico|la nemica
leader;der Anführer|die Anführerin|der Leiter;el líder|la líder;le chef|le leader;il leader|il capo
genius;das Genie;el genio;le génie;il genio
celebrity;der Promi|die Berühmtheit;el famoso|la celebridad;la célébrité;la celebrità|il vip
owner;der Besitzer|die Besitzerin;el dueño|el propietario;le propriétaire;il proprietario
visitor;der Besucher|die Besucherin;el visitante;le visiteur|la visiteuse;il visitatore|la visitatrice
roommate;der Mitbewohner|die Mitbewohnerin;el compañero de piso|la compañera de piso;le colocataire;il coinquilino|la coinquilina`]],xm=[["Animal body parts",`beak;der Schnabel;el pico;le bec;il becco
mane;die Mähne;la crin|la melena;la crinière;la criniera
hoof;der Huf;la pezuña|el casco;le sabot;lo zoccolo
scale (fish);die Schuppe;la escama;l'écaille;la squama|la scaglia
fin;die Flosse;la aleta;la nageoire;la pinna
eggshell;die Eierschale|die Schale;la cáscara;la coquille;il guscio
spider's web;das Spinnennetz;la telaraña;la toile d'araignée;la ragnatela
den (animal home);der Bau|die Höhle;la guarida;la tanière;la tana
trunk (elephant);der Rüssel;la trompa;la trompe;la proboscide
whisker;das Schnurrhaar;el bigote;la moustache;il baffo`],["Animal sounds",`to bark;bellen;ladrar;aboyer;abbaiare
to miaow;miauen;maullar;miauler;miagolare
to purr;schnurren;ronronear;ronronner;fare le fusa
to roar;brüllen;rugir;rugir;ruggire
to buzz;summen;zumbar;bourdonner;ronzare
to growl;knurren;gruñir;grogner;ringhiare
to tweet (bird);zwitschern;piar;gazouiller;cinguettare
to moo;muhen;mugir;meugler;muggire
to neigh;wiehern;relinchar;hennir;nitrire
to hiss;zischen|fauchen;sisear|bufar;siffler|cracher;sibilare|soffiare`],["Geography 3",`region;die Region;la región;la région;la regione
area;das Gebiet|die Gegend;la zona|el área;la zone|la région;la zona|l'area
province;die Provinz|das Bundesland;la provincia;la province;la provincia
equator;der Äquator;el ecuador;l'équateur;l'equatore
pole (North or South);der Pol;el polo;le pôle;il polo
peninsula;die Halbinsel;la península;la péninsule|la presqu'île;la penisola
mountain range;das Gebirge;la cordillera|la sierra;la chaîne de montagnes;la catena montuosa
sea level;der Meeresspiegel;el nivel del mar;le niveau de la mer;il livello del mare
tropics;die Tropen;los trópicos;les tropiques;i tropici
canal;der Kanal;el canal;le canal;il canale`],["Measuring",`litre;der Liter;el litro;le litre;il litro
gram;das Gramm;el gramo;le gramme;il grammo
centimetre;der Zentimeter;el centímetro;le centimètre;il centimetro
kilometre;der Kilometer;el kilómetro;le kilomètre;il chilometro
dozen;das Dutzend;la docena;la douzaine;la dozzina
pair;das Paar;el par;la paire;il paio
quarter;das Viertel;el cuarto;le quart;il quarto
amount;die Menge|der Betrag;la cantidad;la quantité|le montant;la quantità|l'importo
height;die Höhe;la altura;la hauteur;l'altezza
width;die Breite;el ancho|la anchura;la largeur;la larghezza`],["Celebrations 2",`carnival;der Fasching|der Karneval;el carnaval;le carnaval;il carnevale
Christmas tree;der Christbaum|der Weihnachtsbaum;el árbol de Navidad;le sapin de Noël;l'albero di Natale
Easter egg;das Osterei;el huevo de Pascua;l'œuf de Pâques;l'uovo di Pasqua
Father Christmas;der Weihnachtsmann|das Christkind;Papá Noel;le Père Noël;Babbo Natale
New Year's Eve;Silvester;Nochevieja;la Saint-Sylvestre|le réveillon du Nouvel An;San Silvestro|la vigilia di Capodanno
decoration;die Dekoration|der Schmuck;la decoración|el adorno;la décoration;la decorazione|l'addobbo
parade;der Umzug|die Parade;el desfile;le défilé;la sfilata
Valentine's Day;der Valentinstag;el día de San Valentín;la Saint-Valentin;San Valentino
Mother's Day;der Muttertag;el día de la Madre;la fête des mères;la festa della mamma
greeting card;die Glückwunschkarte|die Karte;la tarjeta de felicitación;la carte de vœux;il biglietto di auguri`],["By plane & boat",`cabin crew;das Kabinenpersonal;la tripulación de cabina;le personnel de bord;il personale di bordo
flight attendant;der Flugbegleiter|die Flugbegleiterin;el auxiliar de vuelo|la azafata;l'hôtesse de l'air|le steward;l'assistente di volo|la hostess
hand luggage;das Handgepäck;el equipaje de mano;le bagage à main;il bagaglio a mano
runway;die Landebahn|die Startbahn;la pista;la piste;la pista
ferry;die Fähre;el ferri|el transbordador;le ferry;il traghetto
cruise;die Kreuzfahrt;el crucero;la croisière;la crociera
anchor;der Anker;el ancla;l'ancre;l'ancora
sail;das Segel;la vela;la voile;la vela
life jacket;die Schwimmweste;el chaleco salvavidas;le gilet de sauvetage;il giubbotto di salvataggio
deck;das Deck;la cubierta;le pont;il ponte`],["Handy phrases",`no problem;kein Problem;no hay problema|sin problema;pas de problème;nessun problema
never mind;macht nichts|egal;no importa|da igual;ce n'est pas grave|tant pis;non importa|fa niente
I agree;ich stimme zu|einverstanden;estoy de acuerdo;je suis d'accord;sono d'accordo
what a pity;wie schade;qué pena|qué lástima;quel dommage|dommage;che peccato
be careful;pass auf|Vorsicht;ten cuidado;fais attention;stai attento
hurry up;beeil dich;date prisa|apúrate;dépêche-toi;sbrigati
take care;pass auf dich auf;cuídate;prends soin de toi;abbi cura di te
don't worry;keine Sorge|mach dir keine Sorgen;no te preocupes;ne t'inquiète pas;non preoccuparti
well done;gut gemacht;bien hecho;bien joué|bravo;ben fatto|bravo
I'm sorry (sympathy);es tut mir leid;lo siento;je suis désolé;mi dispiace`],["Travel phrases",`good evening;guten Abend;buenas tardes|buenas noches;bonsoir;buonasera
good afternoon;guten Tag|grüß Gott;buenas tardes;bon après-midi|bonjour;buon pomeriggio|buongiorno
have a nice day;einen schönen Tag noch;que tengas un buen día;bonne journée;buona giornata
enjoy your meal;guten Appetit|Mahlzeit;que aproveche|buen provecho;bon appétit;buon appetito
bless you;Gesundheit;salud|Jesús;à tes souhaits|à vos souhaits;salute
how old are you?;wie alt bist du;cuántos años tienes;quel âge as-tu|tu as quel âge;quanti anni hai
where are you from?;woher kommst du;de dónde eres;d'où viens-tu|tu viens d'où;di dove sei
can you help me?;kannst du mir helfen|können Sie mir helfen;puedes ayudarme|me puede ayudar;peux-tu m'aider|pouvez-vous m'aider;puoi aiutarmi|mi può aiutare
where is the toilet?;wo ist die Toilette;dónde está el baño;où sont les toilettes;dov'è il bagno
I'm lost;ich habe mich verlaufen;estoy perdido|me he perdido;je suis perdu;mi sono perso`]],jm=[["Film & TV 2",`series;die Serie;la serie;la série;la serie
episode;die Folge|die Episode;el episodio;l'épisode;l'episodio|la puntata
documentary;die Dokumentation|der Dokumentarfilm;el documental;le documentaire;il documentario
horror film;der Horrorfilm;la película de terror;le film d'horreur;il film horror
subtitles;die Untertitel;los subtítulos;les sous-titres;i sottotitoli
trailer;der Trailer;el tráiler;la bande-annonce;il trailer
film director;der Regisseur|die Regisseurin;el director de cine|la directora de cine;le réalisateur|la réalisatrice;il regista|la regista
scene;die Szene;la escena;la scène;la scena
plot;die Handlung;la trama|el argumento;l'intrigue;la trama
ending;das Ende|der Schluss;el final;la fin;il finale`],["Books 2",`bookshelf;das Bücherregal;la estantería de libros|el librero;l'étagère à livres;lo scaffale per libri|la libreria
library card;der Bibliotheksausweis;el carné de biblioteca;la carte de bibliothèque;la tessera della biblioteca
book cover;der Umschlag|das Cover;la portada|la cubierta;la couverture;la copertina
comic;der Comic;el cómic|el tebeo;la BD|la bande dessinée;il fumetto
fairy tale;das Märchen;el cuento de hadas;le conte de fées;la fiaba|la favola
biography;die Biografie;la biografía;la biographie;la biografia
character (in a story);die Figur|der Charakter;el personaje;le personnage;il personaggio
villain;der Bösewicht|der Schurke;el villano|el malo;le méchant;il cattivo|il malvagio
bookmark;das Lesezeichen;el marcapáginas|el separador;le marque-page;il segnalibro
publisher;der Verlag;la editorial;la maison d'édition;la casa editrice`],["Space",`astronaut;der Astronaut|die Astronautin;el astronauta|la astronauta;l'astronaute;l'astronauta
rocket;die Rakete;el cohete;la fusée;il razzo
satellite;der Satellit;el satélite;le satellite;il satellite
telescope;das Teleskop|das Fernrohr;el telescopio;le télescope;il telescopio
universe;das Universum;el universo;l'univers;l'universo
solar system;das Sonnensystem;el sistema solar;le système solaire;il sistema solare
orbit;die Umlaufbahn;la órbita;l'orbite;l'orbita
alien;der Außerirdische|die Außerirdische;el extraterrestre;l'extraterrestre;l'extraterrestre|l'alieno
Mars;der Mars;Marte;Mars;Marte
black hole;das schwarze Loch;el agujero negro;le trou noir;il buco nero`],["Kinds of music",`pop music;die Popmusik;la música pop;la musique pop;la musica pop
rock music;die Rockmusik;el rock;le rock;il rock
classical music;die klassische Musik;la música clásica;la musique classique;la musica classica
jazz;der Jazz;el jazz;le jazz;il jazz
rap;der Rap;el rap;le rap;il rap
folk music;die Volksmusik;la música folclórica|el folk;la musique traditionnelle|la musique folk;la musica popolare|il folk
opera;die Oper;la ópera;l'opéra;l'opera lirica|l'opera
hit (song);der Hit;el éxito|el hit;le tube|le hit;il successo|la hit
chorus (song);der Refrain;el estribillo;le refrain;il ritornello
DJ;der DJ;el DJ|el pinchadiscos;le DJ;il DJ`],["Looking good",`nail polish;der Nagellack;el esmalte de uñas;le vernis à ongles;lo smalto
lipstick;der Lippenstift;el pintalabios|el labial;le rouge à lèvres;il rossetto
hairstyle;die Frisur;el peinado;la coiffure;l'acconciatura|la pettinatura
haircut;der Haarschnitt;el corte de pelo;la coupe de cheveux;il taglio di capelli
skin cream;die Hautcreme|die Creme;la crema para la piel;la crème pour la peau;la crema per la pelle
tissue;das Taschentuch|das Papiertaschentuch;el pañuelo de papel;le mouchoir en papier;il fazzoletto di carta
hair gel;das Haargel;el gel para el pelo|la gomina;le gel pour cheveux;il gel per capelli
manicure;die Maniküre;la manicura;la manucure;la manicure
tattoo;das Tattoo|die Tätowierung;el tatuaje;le tatouage;il tatuaggio
piercing;das Piercing;el piercing;le piercing;il piercing`],["Places of work",`warehouse;das Lager|die Lagerhalle;el almacén;l'entrepôt;il magazzino
workshop;die Werkstatt;el taller;l'atelier;l'officina|il laboratorio
construction site;die Baustelle;la obra;le chantier;il cantiere
farm;der Bauernhof;la granja;la ferme;la fattoria
mine;das Bergwerk|die Mine;la mina;la mine;la miniera
counter;die Theke|der Ladentisch;el mostrador;le comptoir;il bancone
office building;das Bürogebäude;el edificio de oficinas;l'immeuble de bureaux;il palazzo di uffici
headquarters;die Zentrale|der Hauptsitz;la sede central;le siège social;la sede centrale
branch (of a company);die Filiale|die Zweigstelle;la sucursal;la succursale|l'agence;la filiale|la succursale
toolbox;der Werkzeugkasten;la caja de herramientas;la boîte à outils;la cassetta degli attrezzi`]],Em=[["Little verb phrases",`to turn up (the volume);lauter machen|aufdrehen;subir el volumen;monter le son;alzare il volume
to turn down (the volume);leiser machen;bajar el volumen;baisser le son;abbassare il volume
to put away;wegräumen;guardar|recoger;ranger;mettere via
to fill up (the tank);volltanken;llenar el depósito;faire le plein;fare il pieno
to pay back;zurückzahlen;devolver el dinero;rembourser;restituire|rimborsare
to run out of;ausgehen|knapp werden;quedarse sin;manquer de|être à court de;rimanere senza|finire
to look around;sich umsehen;echar un vistazo|mirar alrededor;jeter un coup d'œil;dare un'occhiata|guardarsi intorno
to show around;herumführen;enseñar|mostrar;faire visiter;far visitare|mostrare
to set off;aufbrechen|losfahren;ponerse en camino|salir;se mettre en route|partir;mettersi in viaggio|partire
to come back;zurückkommen;volver;revenir;tornare`],["Crime verbs",`to guarantee;garantieren;garantizar;garantir;garantire
to search (a place);durchsuchen;registrar;fouiller;perquisire
to arrest;verhaften|festnehmen;detener|arrestar;arrêter;arrestare
to punish;bestrafen;castigar;punir;punire
to reward;belohnen;recompensar|premiar;récompenser;premiare|ricompensare
to spy;spionieren;espiar;espionner;spiare
to betray;verraten;traicionar;trahir;tradire
to rob;ausrauben|überfallen;robar|atracar;braquer|cambrioler;rapinare
to break in;einbrechen;entrar a robar|allanar;entrer par effraction|cambrioler;scassinare|fare irruzione
to investigate;ermitteln|untersuchen;investigar;enquêter;indagare`],["Describing words 3",`sudden;plötzlich|unerwartet;repentino|súbito;soudain|subit;improvviso
fragile;zerbrechlich;frágil;fragile;fragile
flexible;flexibel|biegsam;flexible;flexible|souple;flessibile
precise;präzise|genau;preciso;précis;preciso
silent;still|lautlos;silencioso;silencieux;silenzioso
visible;sichtbar;visible;visible;visibile
invisible;unsichtbar;invisible;invisible;invisibile
mysterious;geheimnisvoll|mysteriös;misterioso;mystérieux;misterioso
magical;magisch|zauberhaft;mágico;magique;magico
powerful;mächtig|stark;poderoso|potente;puissant;potente`],["Describing words 4",`helpful;hilfsbereit;servicial|útil;serviable;disponibile|di aiuto
hopeless;hoffnungslos;sin esperanza|desesperado;désespéré|sans espoir;senza speranza|disperato
harmless;harmlos;inofensivo;inoffensif;innocuo
harmful;schädlich;dañino|perjudicial;nocif;dannoso
careless;unvorsichtig|nachlässig;descuidado;négligent|imprudent;distratto|negligente
thoughtful;nachdenklich|aufmerksam;pensativo|considerado;pensif|attentionné;pensieroso|premuroso
painful;schmerzhaft;doloroso;douloureux;doloroso
successful;erfolgreich;exitoso|de éxito;qui a du succès|réussi;di successo
endless;endlos;interminable|sin fin;sans fin|interminable;infinito|interminabile
homeless;obdachlos;sin hogar;sans-abri;senzatetto`],["Containers",`jar;das Glas|das Einmachglas;el tarro|el frasco;le bocal|le pot;il barattolo|il vasetto
barrel;das Fass;el barril;le tonneau|le baril;la botte|il barile
crate;die Kiste|der Kasten;la caja;la caisse|le cageot;la cassa|la cassetta
sack;der Sack;el saco;le sac;il sacco
tube;die Tube;el tubo;le tube;il tubetto
carton;der Karton|die Packung;el brik|el cartón;la brique|le carton;il cartone|la confezione
container;der Behälter;el recipiente|el contenedor;le récipient|le conteneur;il contenitore
wrapper;die Verpackung;el envoltorio|el envase;l'emballage;l'involucro|la confezione
cork;der Korken;el corcho;le bouchon;il tappo di sughero|il tappo
straw (for drinking);der Strohhalm|das Röhrl;la pajita;la paille;la cannuccia`],["School 3",`kindergarten;der Kindergarten;la guardería|el jardín de infancia;la maternelle|le jardin d'enfants;l'asilo|la scuola materna
primary school;die Volksschule|die Grundschule;la escuela primaria;l'école primaire;la scuola elementare|la scuola primaria
secondary school;die weiterführende Schule|das Gymnasium;el instituto|la escuela secundaria;le collège|le lycée;la scuola media|la scuola superiore
boarding school;das Internat;el internado;l'internat|le pensionnat;il collegio
school trip;der Schulausflug|die Klassenfahrt;la excursión escolar;la sortie scolaire|le voyage scolaire;la gita scolastica
school year;das Schuljahr;el curso escolar|el año escolar;l'année scolaire;l'anno scolastico
school holidays;die Ferien;las vacaciones escolares;les vacances scolaires;le vacanze scolastiche
school report;das Zeugnis;el boletín de notas;le bulletin scolaire|le bulletin;la pagella
detention;das Nachsitzen;el castigo;la retenue|la colle;la punizione
classmate;der Mitschüler|die Mitschülerin|der Klassenkamerad;el compañero de clase|la compañera de clase;le camarade de classe|la camarade de classe;il compagno di classe|la compagna di classe`],["Phones & talking",`phone call;der Anruf;la llamada;l'appel|le coup de fil;la telefonata|la chiamata
text message;die SMS|die Textnachricht;el SMS|el mensaje de texto;le texto|le SMS;l'SMS|il messaggio
voicemail;die Mailbox|die Sprachnachricht;el buzón de voz;la messagerie vocale;la segreteria telefonica
video call;der Videoanruf;la videollamada;l'appel vidéo;la videochiamata
ringtone;der Klingelton;el tono de llamada;la sonnerie;la suoneria
phone number;die Telefonnummer;el número de teléfono;le numéro de téléphone;il numero di telefono
contact (person);der Kontakt;el contacto;le contact;il contatto
signal (phone);der Empfang|das Netz;la cobertura|la señal;le réseau|le signal;il segnale|la copertura
speech;die Rede;el discurso;le discours;il discorso
rumour;das Gerücht;el rumor;la rumeur;la voce|il pettegolezzo`],["Toys & games",`doll;die Puppe;la muñeca;la poupée;la bambola
kite;der Drache|der Drachen;la cometa;le cerf-volant;l'aquilone
dice;der Würfel;el dado;le dé;il dado
board game;das Brettspiel;el juego de mesa;le jeu de société;il gioco da tavolo
hide-and-seek;das Versteckspiel|Verstecken;el escondite;le cache-cache;il nascondino
marble (toy);die Murmel;la canica;la bille;la biglia
building blocks;die Bausteine;los bloques de construcción;les cubes|les blocs de construction;i mattoncini|le costruzioni
slide (playground);die Rutsche;el tobogán;le toboggan;lo scivolo
seesaw;die Wippe;el balancín|el subibaja;la bascule;l'altalena a bilico
trampoline;das Trampolin;la cama elástica;le trampoline;il trampolino|il tappeto elastico`],["Healthy eating",`portion;die Portion;la ración|la porción;la portion;la porzione
ingredient;die Zutat;el ingrediente;l'ingrédient;l'ingrediente
leftovers;die Reste;las sobras;les restes;gli avanzi
calorie;die Kalorie;la caloría;la calorie;la caloria
protein;das Eiweiß|das Protein;la proteína;la protéine;la proteina
fat (in food);das Fett;la grasa;la graisse|les matières grasses;il grasso
fibre;die Ballaststoffe;la fibra;les fibres;le fibre
flavour;der Geschmack|das Aroma;el sabor;la saveur|le parfum;il sapore|il gusto
appetite;der Appetit;el apetito;l'appétit;l'appetito
barbecue;das Grillen|die Grillparty|der Griller;la barbacoa|la parrillada;le barbecue;il barbecue|la grigliata`],["How we behave",`to boast;angeben|prahlen;presumir|alardear;se vanter;vantarsi
to bully;mobben|schikanieren;acosar|intimidar;harceler|brutaliser;bullizzare|fare il prepotente
to pretend;so tun als ob;fingir;faire semblant;fingere|fare finta
to behave;sich benehmen;portarse|comportarse;se comporter|se tenir bien;comportarsi
to volunteer;sich freiwillig melden|ehrenamtlich arbeiten;hacer voluntariado|ofrecerse;faire du bénévolat|se porter volontaire;fare volontariato|offrirsi
to babysit;babysitten|auf Kinder aufpassen;hacer de canguro|cuidar niños;faire du baby-sitting;fare da babysitter
to waste time;Zeit verschwenden|trödeln;perder el tiempo;perdre son temps;perdere tempo
to get used to;sich gewöhnen an;acostumbrarse a;s'habituer à;abituarsi a
to take turns;sich abwechseln;turnarse;se relayer;fare a turno
to keep fit;fit bleiben;mantenerse en forma;rester en forme;mantenersi in forma`]],Nm=[["Wild weather",`tornado;der Tornado|der Wirbelsturm;el tornado;la tornade;il tornado
wildfire;der Waldbrand;el incendio forestal;le feu de forêt|l'incendie de forêt;l'incendio boschivo
landslide;der Erdrutsch;el deslizamiento de tierra|el desprendimiento;le glissement de terrain;la frana
tsunami;der Tsunami;el tsunami;le tsunami;lo tsunami
heatwave;die Hitzewelle;la ola de calor;la canicule|la vague de chaleur;l'ondata di caldo
blizzard;der Schneesturm;la ventisca;la tempête de neige|le blizzard;la bufera di neve
puddle;die Pfütze|die Lacke;el charco;la flaque;la pozzanghera
dew;der Tau;el rocío;la rosée;la rugiada
drizzle;der Nieselregen;la llovizna;la bruine;la pioggerella
climate change;der Klimawandel;el cambio climático;le changement climatique;il cambiamento climatico`],["Bugs & birds 2",`caterpillar;die Raupe;la oruga;la chenille;il bruco
grasshopper;die Heuschrecke|der Grashüpfer;el saltamontes;la sauterelle;la cavalletta
cockroach;die Kakerlake;la cucaracha;le cafard|la blatte;lo scarafaggio
dragonfly;die Libelle;la libélula;la libellule;la libellula
moth;die Motte|der Nachtfalter;la polilla;la mite|le papillon de nuit;la falena|la tarma
flea;der Floh;la pulga;la puce;la pulce
robin;das Rotkehlchen;el petirrojo;le rouge-gorge;il pettirosso
blackbird;die Amsel;el mirlo;le merle;il merlo
hawk;der Habicht|der Falke;el halcón|el gavilán;le faucon|l'épervier;il falco
stork;der Storch;la cigüeña;la cigogne;la cicogna`],["Sounds & light",`to stink;stinken;apestar;puer;puzzare
to glow;glühen|leuchten;resplandecer|brillar;luire|rougeoyer;brillare|ardere
to sparkle;funkeln|glitzern;centellear|brillar;étinceler|scintiller;scintillare|luccicare
to echo;widerhallen|hallen;resonar|hacer eco;résonner|faire écho;echeggiare|rimbombare
to rustle;rascheln;crujir|susurrar;bruisser;frusciare
to drip;tropfen;gotear;goutter;gocciolare
to bubble;blubbern|sprudeln;burbujear;bouillonner|faire des bulles;gorgogliare|fare bolle
to crack;knacken|reißen;agrietarse|crujir;craquer|se fendre;incrinarsi|scricchiolare
to fade;verblassen;desvanecerse|desteñirse;s'estomper|pâlir;sbiadire|svanire
to tick;ticken;hacer tictac;faire tic-tac;ticchettare`],["Colours & patterns",`dull;matt|trüb;apagado;terne;opaco|spento
dark blue;dunkelblau;azul oscuro;bleu foncé;blu scuro
light blue;hellblau;azul claro|celeste;bleu clair;azzurro|celeste
neon;neon|knallig;fluorescente|neón;fluo|néon;fluorescente
transparent;durchsichtig|transparent;transparente;transparent;trasparente
striped;gestreift;de rayas|rayado;rayé;a righe|a strisce
spotted;gepunktet|gefleckt;de lunares|moteado;à pois|tacheté;a pois|maculato
plain (no pattern);einfarbig|schlicht;liso;uni;tinta unita|semplice
deafening;ohrenbetäubend;ensordecedor;assourdissant;assordante
bright red;knallrot|leuchtend rot;rojo intenso|rojo vivo;rouge vif;rosso acceso`],["Laundry & cleaning",`laundry;die Wäsche;la colada|la ropa sucia;le linge;il bucato
laundry basket;der Wäschekorb;el cesto de la ropa;le panier à linge;il cesto della biancheria
tumble dryer;der Trockner;la secadora;le sèche-linge;l'asciugatrice
stain;der Fleck;la mancha;la tache;la macchia
bleach;das Bleichmittel;la lejía;l'eau de Javel;la candeggina
rubber gloves;die Gummihandschuhe;los guantes de goma;les gants en caoutchouc;i guanti di gomma
mop;der Mopp|der Wischmopp;la fregona|el trapeador;la serpillière|le balai à franges;il mocio
dustpan;die Kehrschaufel|das Mistschauferl;el recogedor;la pelle;la paletta
washing-up liquid;das Spülmittel;el jabón de platos|el lavavajillas (líquido);le liquide vaisselle;il detersivo per piatti
air freshener;der Lufterfrischer;el ambientador;le désodorisant;il deodorante per ambienti`],["Money 3",`budget;das Budget;el presupuesto;le budget;il budget|il bilancio
income;das Einkommen;los ingresos;le revenu;il reddito
pension;die Rente|die Pension;la pensión|la jubilación;la retraite|la pension;la pensione
bill (to pay);die Rechnung;la factura;la facture;la bolletta|la fattura
insurance;die Versicherung;el seguro;l'assurance;l'assicurazione
stock market;die Börse;la bolsa;la Bourse;la borsa
fee;die Gebühr;la tarifa|la cuota;les frais;la tassa|la quota
investment;die Investition;la inversión;l'investissement;l'investimento
price increase;die Preiserhöhung;la subida de precios;la hausse des prix;l'aumento dei prezzi
pocket money;das Taschengeld;la paga|el dinero de bolsillo;l'argent de poche;la paghetta`],["Aches & pains",`toothache;die Zahnschmerzen;el dolor de muelas;le mal de dents;il mal di denti
stomach ache;die Bauchschmerzen;el dolor de barriga|el dolor de estómago;le mal de ventre;il mal di pancia
earache;die Ohrenschmerzen;el dolor de oídos;le mal d'oreille;il mal d'orecchi
backache;die Rückenschmerzen;el dolor de espalda;le mal de dos;il mal di schiena
rash;der Ausschlag;el sarpullido|la erupción;l'éruption cutanée|les rougeurs;l'eruzione cutanea|lo sfogo
insect bite;der Stich|der Insektenstich;la picadura;la piqûre;la puntura
infection;die Infektion|die Entzündung;la infección;l'infection;l'infezione
diarrhoea;der Durchfall;la diarrea;la diarrhée;la diarrea
nausea;die Übelkeit;las náuseas;la nausée;la nausea
asthma;das Asthma;el asma;l'asthme;l'asma`],["Getting things",`to fetch;holen;ir a buscar|traer;aller chercher;andare a prendere
to gather;sammeln|versammeln;reunir|juntar;rassembler|réunir;radunare|raccogliere
to obtain;erhalten|bekommen;obtener;obtenir;ottenere
to reserve;reservieren;reservar;réserver;riservare|prenotare
to order (online);bestellen;pedir|encargar;commander;ordinare
to swap;tauschen;cambiar|intercambiar;échanger|troquer;scambiare
to inherit;erben;heredar;hériter;ereditare
to keep (a promise);halten;cumplir;tenir;mantenere
to apply for;beantragen;solicitar;faire une demande de|demander;fare domanda per|richiedere
to catch (a bus);erwischen|nehmen;coger|tomar;prendre|attraper;prendere`],["Time & life 3",`routine;die Routine|der Alltag;la rutina;la routine;la routine
lifestyle;der Lebensstil;el estilo de vida;le mode de vie;lo stile di vita
chore;die Hausarbeit|die lästige Pflicht;la tarea doméstica;la corvée|la tâche ménagère;la faccenda|il lavoro domestico
errand;die Besorgung;el recado;la course|la commission;la commissione
hurry (noun);die Eile;la prisa;la hâte;la fretta
start (noun);der Anfang|der Beginn;el comienzo|el principio;le début|le commencement;l'inizio
end (noun);das Ende;el fin|el final;la fin;la fine
middle;die Mitte;el medio|el centro;le milieu;il mezzo|il centro
turn (it's your turn);die Reihe|der Zug;el turno;le tour;il turno
event;das Ereignis|die Veranstaltung;el evento|el acontecimiento;l'événement;l'evento|l'avvenimento`],["What state are they in?",`missing;vermisst|fehlend;desaparecido|perdido;disparu|manquant;scomparso|mancante
injured;verletzt;herido;blessé;ferito
drunk;betrunken;borracho;ivre|soûl;ubriaco
sober;nüchtern;sobrio;sobre;sobrio
retired;in Rente|pensioniert;jubilado;à la retraite|retraité;in pensione|pensionato
engaged;verlobt;prometido|comprometido;fiancé;fidanzato
divorced;geschieden;divorciado;divorcé;divorziato
seasick;seekrank;mareado;qui a le mal de mer;che ha il mal di mare
well-known;bekannt;conocido;connu;noto|conosciuto
dressed;angezogen;vestido;habillé;vestito`],["Useful places",`staffroom;das Lehrerzimmer;la sala de profesores;la salle des professeurs|la salle des profs;la sala professori
lecture hall;der Hörsaal;el aula magna|el auditorio;l'amphithéâtre;l'aula magna
lost property office;das Fundbüro;la oficina de objetos perdidos;le bureau des objets trouvés;l'ufficio oggetti smarriti
ticket office;der Fahrkartenschalter|der Schalter;la taquilla|la ventanilla;le guichet;la biglietteria
information desk;der Informationsschalter|die Auskunft;el mostrador de información;le guichet d'information|l'accueil;il banco informazioni
emergency exit;der Notausgang;la salida de emergencia;la sortie de secours;l'uscita di emergenza
exit;der Ausgang;la salida;la sortie;l'uscita
car wash;die Waschanlage;el lavado de coches|el autolavado;la station de lavage;l'autolavaggio
laundrette;der Waschsalon;la lavandería;la laverie;la lavanderia
vending machine;der Automat|der Getränkeautomat;la máquina expendedora;le distributeur automatique;il distributore automatico`]],Cm=[["Cakes & treats",`pastry;das Gebäck|das Teilchen;el bollo|la pasta;la viennoiserie|la pâtisserie;il pasticcino|la pasta
doughnut;der Krapfen|der Donut;el dónut|la rosquilla;le beignet|le donut;la ciambella|il bombolone
waffle;die Waffel;el gofre;la gaufre;il waffle|la cialda
cheesecake;der Käsekuchen|die Topfentorte;la tarta de queso;le gâteau au fromage|le cheesecake;la torta al formaggio|la cheesecake
apple pie;der Apfelkuchen|der Apfelstrudel;la tarta de manzana;la tarte aux pommes;la torta di mele
cupcake;der Cupcake;el cupcake;le cupcake;il cupcake
brownie;der Brownie;el brownie;le brownie;il brownie
custard;der Pudding|die Vanillesauce;las natillas;la crème anglaise;la crema pasticcera
whipped cream;die Schlagsahne|das Schlagobers;la nata montada;la crème chantilly;la panna montata
icing;die Glasur|der Zuckerguss;el glaseado;le glaçage;la glassa`],["At the café",`espresso;der Espresso;el café solo|el expreso;l'expresso;l'espresso
cappuccino;der Cappuccino;el capuchino;le cappuccino;il cappuccino
decaf;der entkoffeinierte Kaffee;el descafeinado;le déca|le décaféiné;il decaffeinato
herbal tea;der Kräutertee;la infusión|la tisana;la tisane|l'infusion;la tisana|l'infuso
iced tea;der Eistee;el té helado;le thé glacé;il tè freddo
sparkling water;das Sprudelwasser|das Mineralwasser mit Kohlensäure;el agua con gas;l'eau gazeuse;l'acqua frizzante
still water;das stille Wasser;el agua sin gas;l'eau plate;l'acqua naturale
cocktail;der Cocktail;el cóctel;le cocktail;il cocktail
saucer;die Untertasse;el platillo;la soucoupe;il piattino
teaspoon;der Teelöffel;la cucharilla|la cucharita;la petite cuillère|la cuillère à café;il cucchiaino`],["Everyday jobs at home",`to snack;naschen|zwischendurch essen;picar|picotear;grignoter;sgranocchiare|fare uno spuntino
to be on a diet;Diät halten;estar a dieta|hacer dieta;faire un régime;essere a dieta|fare la dieta
to sip;nippen;sorber|beber a sorbos;siroter;sorseggiare
to doze;dösen|schlummern;dormitar|echar una cabezada;somnoler|faire un somme;sonnecchiare|appisolarsi
to sleep in;ausschlafen;dormir hasta tarde;faire la grasse matinée;dormire fino a tardi
to stay at home;zu Hause bleiben;quedarse en casa;rester à la maison;restare a casa
to go home;nach Hause gehen;ir a casa|volver a casa;rentrer|rentrer à la maison;tornare a casa|andare a casa
to do the shopping;einkaufen|den Einkauf machen;hacer la compra;faire les courses;fare la spesa
to walk the dog;mit dem Hund Gassi gehen;pasear al perro;promener le chien|sortir le chien;portare a spasso il cane
to take out the rubbish;den Müll rausbringen;sacar la basura;sortir la poubelle;portare fuori la spazzatura`],["Road signs & traffic",`one-way street;die Einbahnstraße;la calle de sentido único;la rue à sens unique|le sens unique;la strada a senso unico
speed limit;die Geschwindigkeitsbegrenzung|das Tempolimit;el límite de velocidad;la limitation de vitesse;il limite di velocità
parking ticket;der Strafzettel;la multa de aparcamiento;la contravention|le PV;la multa per divieto di sosta
no entry;Einfahrt verboten|kein Zutritt;prohibido el paso|dirección prohibida;sens interdit|entrée interdite;divieto di accesso|vietato l'ingresso
diversion;die Umleitung;el desvío;la déviation;la deviazione
roadworks;die Straßenarbeiten;las obras;les travaux;i lavori stradali
bus driver;der Busfahrer|die Busfahrerin;el conductor de autobús|la conductora de autobús;le chauffeur de bus|la conductrice de bus;l'autista dell'autobus|l'autista
taxi rank;der Taxistand;la parada de taxis;la station de taxis;il posteggio dei taxi
season ticket;die Jahreskarte|die Monatskarte|das Abo;el abono;l'abonnement;l'abbonamento
rush hour;die Hauptverkehrszeit|die Stoßzeit;la hora punta;l'heure de pointe;l'ora di punta`],["Good at your job",`educational;lehrreich;educativo;éducatif;educativo
professional;professionell|beruflich;profesional;professionnel;professionale
skilled;qualifiziert|geschickt;cualificado|hábil;qualifié|habile;qualificato|abile
experienced;erfahren;experimentado|con experiencia;expérimenté;esperto|con esperienza
talented;talentiert|begabt;talentoso|con talento;talentueux|doué;talentuoso|dotato
organised;organisiert;organizado;organisé;organizzato
motivated;motiviert;motivado;motivé;motivato
efficient;effizient;eficiente;efficace;efficiente
official;offiziell|amtlich;oficial;officiel;ufficiale
urgent;dringend;urgente;urgent;urgente`],["Art 2",`coloured pencil;der Buntstift;el lápiz de color;le crayon de couleur;la matita colorata
palette;die Palette;la paleta;la palette;la tavolozza
easel;die Staffelei;el caballete;le chevalet;il cavalletto
portrait;das Porträt;el retrato;le portrait;il ritratto
landscape (painting);die Landschaft|das Landschaftsbild;el paisaje;le paysage;il paesaggio
still life;das Stillleben;el bodegón|la naturaleza muerta;la nature morte;la natura morta
frame;der Rahmen;el marco;le cadre;la cornice
masterpiece;das Meisterwerk;la obra maestra;le chef-d'œuvre;il capolavoro
collage;die Collage;el collage;le collage;il collage
sketch;die Skizze;el boceto|el esbozo;le croquis|l'esquisse;lo schizzo`],["Thinking it through",`difference;der Unterschied;la diferencia;la différence;la differenza
similarity;die Ähnlichkeit;la similitud|el parecido;la ressemblance|la similitude;la somiglianza
advantage;der Vorteil;la ventaja;l'avantage;il vantaggio
disadvantage;der Nachteil;la desventaja|el inconveniente;l'inconvénient|le désavantage;lo svantaggio
cause;die Ursache;la causa;la cause;la causa
effect;die Wirkung|der Effekt;el efecto;l'effet;l'effetto
purpose;der Zweck;el propósito|la finalidad;le but|l'objectif;lo scopo
condition;die Bedingung|der Zustand;la condición|el estado;la condition|l'état;la condizione
situation;die Situation|die Lage;la situación;la situation;la situazione
possibility;die Möglichkeit;la posibilidad;la possibilité;la possibilità`],["Buildings 2",`corridor;der Korridor|der Gang;el pasillo|el corredor;le couloir|le corridor;il corridoio
column;die Säule;la columna;la colonne;la colonna
arch;der Bogen;el arco;l'arche|l'arc;l'arco
dome;die Kuppel;la cúpula;le dôme|la coupole;la cupola
courtyard;der Hof|der Innenhof;el patio;la cour;il cortile
handrail;das Geländer;la barandilla;la rampe|la main courante;il corrimano
foundations;das Fundament;los cimientos;les fondations;le fondamenta
floor plan;der Grundriss;el plano;le plan;la pianta|la planimetria
block of flats;der Wohnblock|das Wohnhaus;el bloque de pisos;l'immeuble;il condominio|il palazzo
cathedral;der Dom|die Kathedrale;la catedral;la cathédrale;la cattedrale|il duomo`],["Sport verbs 2",`to jog;joggen;hacer footing|correr;faire du jogging;fare jogging|correre
to lift weights;Gewichte heben;levantar pesas;soulever des poids;sollevare pesi
to do push-ups;Liegestütze machen;hacer flexiones;faire des pompes;fare le flessioni
to pass (the ball);abspielen|passen;pasar el balón|pasar;faire une passe|passer;passare la palla|passare
to dribble;dribbeln;regatear|driblar;dribbler;dribblare|scartare
to serve (tennis);aufschlagen;sacar;servir;servire|battere
to tackle;angreifen|tackeln;hacer una entrada|placar;tacler|plaquer;contrastare|placcare
to referee;pfeifen|Schiedsrichter sein;arbitrar;arbitrer;arbitrare
to qualify;sich qualifizieren;clasificarse;se qualifier;qualificarsi
to break a record;einen Rekord brechen;batir un récord;battre un record;battere un record`],["Apps & email",`update (noun);das Update|die Aktualisierung;la actualización;la mise à jour;l'aggiornamento
notification;die Benachrichtigung|die Mitteilung;la notificación;la notification;la notifica
settings;die Einstellungen;los ajustes|la configuración;les paramètres|les réglages;le impostazioni
cloud (storage);die Cloud;la nube;le cloud;il cloud
attachment;der Anhang;el archivo adjunto|el adjunto;la pièce jointe;l'allegato
inbox;der Posteingang;la bandeja de entrada;la boîte de réception;la posta in arrivo|la casella di posta
spam;der Spam;el spam|el correo basura;le spam|le courrier indésirable;lo spam
icon;das Symbol|das Icon;el icono;l'icône;l'icona
folder (computer);der Ordner;la carpeta;le dossier;la cartella
artificial intelligence;die künstliche Intelligenz|die KI;la inteligencia artificial;l'intelligence artificielle|l'IA;l'intelligenza artificiale`],["How I feel",`I'm bored;mir ist langweilig;estoy aburrido|me aburro;je m'ennuie;mi annoio
I'm tired;ich bin müde;estoy cansado;je suis fatigué;sono stanco
I'm happy;ich bin glücklich|ich freue mich;estoy contento|soy feliz;je suis content|je suis heureux;sono felice|sono contento
I'm hot;mir ist heiß;tengo calor;j'ai chaud;ho caldo
I'm scared;ich habe Angst;tengo miedo;j'ai peur;ho paura
I'm in a hurry;ich habe es eilig;tengo prisa;je suis pressé;ho fretta
I'm right;ich habe recht;tengo razón;j'ai raison;ho ragione
you're wrong;du irrst dich|du hast unrecht;estás equivocado|no tienes razón;tu as tort;hai torto
I don't feel well;mir geht es nicht gut;no me encuentro bien;je ne me sens pas bien;non mi sento bene
I miss you;ich vermisse dich;te echo de menos|te extraño;tu me manques;mi manchi`]],Pm=[["Hobbies 2",`photography;die Fotografie;la fotografía;la photographie;la fotografia
stamp collection;die Briefmarkensammlung;la colección de sellos;la collection de timbres;la collezione di francobolli
knitting;das Stricken;el punto|el tejido;le tricot;il lavoro a maglia
sewing;das Nähen;la costura;la couture;il cucito
baking;das Backen;la repostería;la pâtisserie;la pasticceria
bird watching;das Vogelbeobachten;la observación de aves;l'observation des oiseaux;il birdwatching
hiking;das Wandern;el senderismo;la randonnée;l'escursionismo
sailing;das Segeln;la vela;la voile;la vela
diving;das Tauchen;el buceo;la plongée;le immersioni|il sub
magic tricks;die Zaubertricks;los trucos de magia;les tours de magie;i trucchi di magia`],["How? 2",`clearly;deutlich|klar;claramente;clairement;chiaramente
easily;leicht|mühelos;fácilmente;facilement;facilmente
carefully;vorsichtig|sorgfältig;con cuidado|cuidadosamente;prudemment|soigneusement;con attenzione|attentamente
loudly;laut;en voz alta|ruidosamente;fort|bruyamment;ad alta voce|rumorosamente
quietly;leise;en voz baja|silenciosamente;doucement|silencieusement;sottovoce|silenziosamente
happily;fröhlich|glücklich;felizmente|alegremente;joyeusement|heureusement;felicemente|allegramente
seriously;ernsthaft;en serio|seriamente;sérieusement;seriamente|sul serio
completely;völlig|ganz;completamente;complètement;completamente
hardly;kaum;apenas;à peine;appena|a malapena
usually;normalerweise|meistens;normalmente|por lo general;d'habitude|généralement;di solito`],["Where & when? 2",`upstairs;oben|nach oben;arriba;en haut|à l'étage;di sopra|al piano di sopra
downstairs;unten|nach unten;abajo;en bas;di sotto|al piano di sotto
forward;vorwärts|nach vorne;adelante|hacia delante;en avant;avanti
backwards;rückwärts;hacia atrás;en arrière;indietro
anywhere;irgendwo|überall;en cualquier parte;n'importe où;dovunque|da qualsiasi parte
recently;kürzlich|neulich;recientemente|últimamente;récemment;recentemente|di recente
nowadays;heutzutage;hoy en día;de nos jours;oggigiorno|al giorno d'oggi
meanwhile;inzwischen|währenddessen;mientras tanto;pendant ce temps|en attendant;nel frattempo
yet;noch|schon;todavía|aún;encore|déjà;ancora|già
at once;sofort|auf einmal;de inmediato|a la vez;tout de suite|à la fois;subito|tutto in una volta`],["Little words 2",`through;durch;a través de|por;à travers|par;attraverso
across;über|quer über;a través de|al otro lado de;de l'autre côté de|à travers;attraverso|dall'altra parte di
along;entlang;a lo largo de;le long de;lungo
towards;auf ... zu|in Richtung;hacia;vers;verso
among;unter|zwischen;entre;parmi;tra|fra
except;außer;excepto|salvo;sauf|excepté;tranne|eccetto
instead of;statt|anstatt;en lugar de|en vez de;au lieu de;invece di
according to;laut|gemäß;según;selon|d'après;secondo
thanks to;dank;gracias a;grâce à;grazie a
however;jedoch|aber;sin embargo;cependant|pourtant;tuttavia|però`],["Feelings verbs 4",`to appreciate;schätzen|zu schätzen wissen;apreciar|valorar;apprécier;apprezzare
to dislike;nicht mögen;no gustar|tener aversión a;ne pas aimer;non amare|non piacere
to long for;sich sehnen nach;anhelar|añorar;désirer ardemment;desiderare ardentemente|bramare
to mourn;trauern;estar de luto|llorar;être en deuil|pleurer;essere in lutto|piangere
to be interested in;sich interessieren für;interesarse por|estar interesado en;s'intéresser à;interessarsi a|essere interessato a
to be proud of;stolz sein auf;estar orgulloso de;être fier de;essere orgoglioso di
to get nervous;nervös werden;ponerse nervioso;devenir nerveux|stresser;innervosirsi|agitarsi
to feel sorry for;Mitleid haben mit|leidtun;sentir lástima por|compadecer;avoir pitié de|plaindre;provare pena per|dispiacersi per
to lose interest;das Interesse verlieren;perder el interés;perdre tout intérêt;perdere interesse
to fall asleep;einschlafen;dormirse|quedarse dormido;s'endormir;addormentarsi`],["Culture & landmarks",`temple;der Tempel;el templo;le temple;il tempio
mosque;die Moschee;la mezquita;la mosquée;la moschea
synagogue;die Synagoge;la sinagoga;la synagogue;la sinagoga
pyramid;die Pyramide;la pirámide;la pyramide;la piramide
ruins;die Ruinen;las ruinas;les ruines;le rovine
market stall;der Marktstand;el puesto;l'étal|le stand;la bancarella
flag;die Fahne|die Flagge;la bandera;le drapeau;la bandiera
national anthem;die Nationalhymne;el himno nacional;l'hymne national;l'inno nazionale
traditional costume;die Tracht;el traje típico|el traje tradicional;le costume traditionnel;il costume tradizionale
dish (meal);das Gericht|die Speise;el plato;le plat;il piatto|la pietanza`],["Staying safe",`fire extinguisher;der Feuerlöscher;el extintor;l'extincteur;l'estintore
emergency number;die Notrufnummer;el número de emergencia;le numéro d'urgence;il numero di emergenza
rescue (noun);die Rettung;el rescate;le sauvetage;il salvataggio|il soccorso
victim;das Opfer;la víctima;la victime;la vittima
survivor;der Überlebende|die Überlebende;el superviviente;le survivant|la survivante;il sopravvissuto|la sopravvissuta
shelter;der Schutz|die Unterkunft;el refugio;l'abri|le refuge;il rifugio
warning;die Warnung;el aviso|la advertencia;l'avertissement|l'alerte;l'avvertimento|l'allerta
siren;die Sirene;la sirena;la sirène;la sirena
escape route;der Fluchtweg;la vía de escape|la ruta de evacuación;l'issue de secours;la via di fuga
first aid kit;der Erste-Hilfe-Kasten|der Verbandskasten;el botiquín;la trousse de secours;la cassetta del pronto soccorso`],["Useful describing words 2",`various;verschieden|unterschiedlich;varios|diversos;divers|différents;vari|diversi
brief;kurz|knapp;breve;bref;breve
previous;vorherig|vorig;anterior;précédent;precedente
following;folgend;siguiente;suivant;seguente
relevant;relevant|wichtig;relevante;pertinent;pertinente|rilevante
suitable;geeignet|passend;adecuado|apropiado;approprié|adapté;adatto|adeguato
proper;richtig|ordentlich;apropiado|correcto;convenable|correct;appropriato|corretto
willing;bereit|willig;dispuesto;prêt|disposé;disposto
likely;wahrscheinlich;probable;probable;probabile
unknown;unbekannt;desconocido;inconnu;sconosciuto`],["Renting a home",`landlord;der Vermieter|die Vermieterin;el casero|el propietario;le propriétaire|le bailleur;il padrone di casa|il proprietario
tenant;der Mieter|die Mieterin;el inquilino|la inquilina;le locataire;l'inquilino|l'inquilina
housing;das Wohnen|der Wohnraum;la vivienda;le logement;l'alloggio|le abitazioni
deposit;die Kaution;la fianza|el depósito;la caution;la cauzione|il deposito
electricity bill;die Stromrechnung;la factura de la luz;la facture d'électricité;la bolletta della luce
spare room;das Gästezimmer;la habitación de invitados;la chambre d'amis;la camera degli ospiti
housewarming party;die Einweihungsparty;la fiesta de inauguración;la pendaison de crémaillère;la festa di inaugurazione
removal van;der Umzugswagen;el camión de mudanzas;le camion de déménagement;il furgone dei traslochi
detached house;das Einfamilienhaus;la casa unifamiliar|el chalet;la maison individuelle;la villetta|la casa indipendente
cottage;das Häuschen|das Landhaus;la casita de campo;le cottage|la maisonnette;il cottage|la casetta di campagna`],["Useful verbs 4",`to let (allow);lassen;dejar;laisser;lasciare
to make sure;sich vergewissern;asegurarse;s'assurer|vérifier;assicurarsi
to swear (promise);schwören;jurar;jurer;giurare
to bless;segnen;bendecir;bénir;benedire
to rise (sun);aufgehen;salir;se lever;sorgere
to set (sun);untergehen;ponerse;se coucher;tramontare
to point out;hinweisen auf;señalar|indicar;signaler|faire remarquer;far notare|sottolineare
to find out;herausfinden;averiguar|descubrir;découvrir|apprendre;scoprire|venire a sapere
to come true;wahr werden|in Erfüllung gehen;hacerse realidad|cumplirse;se réaliser;avverarsi
to bring together;zusammenbringen;reunir|juntar;rassembler|réunir;riunire|mettere insieme`],["School subjects 2",`Latin;Latein;el latín;le latin;il latino
IT (subject);Informatik;la informática;l'informatique;l'informatica
business studies;Betriebswirtschaft|BW;la administración de empresas;la gestion|les études commerciales;l'economia aziendale
literature;die Literatur;la literatura;la littérature;la letteratura
philosophy;die Philosophie;la filosofía;la philosophie;la filosofia
psychology;die Psychologie;la psicología;la psychologie;la psicologia
drama (subject);das Theater|Darstellendes Spiel;el teatro|el arte dramático;le théâtre|l'art dramatique;il teatro|l'arte drammatica
German (language);Deutsch;el alemán;l'allemand;il tedesco
French (language);Französisch;el francés;le français;il francese
Spanish (language);Spanisch;el español;l'espagnol;lo spagnolo`]],_m=[["On the farm",`tractor;der Traktor;el tractor;le tracteur;il trattore
barn;die Scheune|der Stadel;el granero;la grange;il fienile|il granaio
crop;die Ernte|die Feldfrucht;la cosecha|el cultivo;la récolte|la culture;il raccolto|la coltura
wheat;der Weizen;el trigo;le blé;il grano|il frumento
vineyard;der Weinberg|der Weingarten;el viñedo;le vignoble|la vigne;il vigneto|la vigna
orchard;der Obstgarten;el huerto de frutales|el huerto;le verger;il frutteto
scarecrow;die Vogelscheuche;el espantapájaros;l'épouvantail;lo spaventapasseri
fertiliser;der Dünger;el abono|el fertilizante;l'engrais;il concime|il fertilizzante
well (for water);der Brunnen;el pozo;le puits;il pozzo
farmhouse;das Bauernhaus;la casa de campo;la ferme|la maison de ferme;la casa colonica|il casale`],["Opposites 6",`tight;eng|fest;apretado|ajustado;serré|étroit;stretto|attillato
loose;locker|lose;suelto|holgado;lâche|ample;largo|allentato
shallow;flach|seicht;poco profundo;peu profond;poco profondo
steep;steil;empinado;raide|escarpé;ripido
inner;innere|innerer;interior;intérieur;interno
outer;äußere|äußerer;exterior;extérieur;esterno
upper;obere|oberer;superior;supérieur;superiore
lower;untere|unterer;inferior;inférieur;inferiore
front (adjective);vordere|vorderer;delantero;avant|de devant;anteriore
back (adjective);hintere|hinterer;trasero;arrière|de derrière;posteriore`],["Working with tools",`to load;laden|beladen;cargar;charger;caricare
to unload;entladen|ausladen;descargar;décharger;scaricare
to stack;stapeln;apilar;empiler;impilare
to sort;sortieren;ordenar|clasificar;trier;smistare|ordinare
to label;beschriften|etikettieren;etiquetar;étiqueter;etichettare
to fix (attach);befestigen;fijar|sujetar;fixer;fissare
to screw;schrauben;atornillar;visser;avvitare
to saw;sägen;serrar;scier;segare
to hammer;hämmern;martillear;marteler;martellare
to drill;bohren;taladrar;percer;forare|trapanare`],["Maths & science 3",`equation;die Gleichung;la ecuación;l'équation;l'equazione
fraction;der Bruch|die Bruchzahl;la fracción;la fraction;la frazione
angle;der Winkel;el ángulo;l'angle;l'angolo
diagram;das Diagramm|das Schaubild;el diagrama;le diagramme|le schéma;il diagramma|lo schema
graph;die Grafik|das Diagramm;el gráfico;le graphique;il grafico
formula;die Formel;la fórmula;la formule;la formula
sum;die Summe;la suma;la somme;la somma
statistics;die Statistik;la estadística;les statistiques;la statistica
volume (amount of space);das Volumen;el volumen;le volume;il volume
surface;die Oberfläche;la superficie;la surface;la superficie`],["In a shop or restaurant",`I'd like;ich hätte gern|ich möchte;quisiera|me gustaría;je voudrais;vorrei
the bill, please;die Rechnung, bitte|zahlen bitte;la cuenta, por favor;l'addition, s'il vous plaît;il conto, per favore
can I pay by card?;kann ich mit Karte zahlen;puedo pagar con tarjeta;je peux payer par carte;posso pagare con la carta
a table for two;ein Tisch für zwei;una mesa para dos;une table pour deux;un tavolo per due
anything else?;sonst noch etwas;algo más;autre chose;altro
that's all;das ist alles;eso es todo;c'est tout;è tutto
I'm just looking;ich schaue nur;solo estoy mirando;je regarde seulement;sto solo guardando
to take away;zum Mitnehmen;para llevar;à emporter;da portare via|da asporto
to eat in;zum Hieressen;para tomar aquí;sur place;da consumare qui
keep the change;stimmt so|der Rest ist für Sie;quédese con el cambio;gardez la monnaie;tenga il resto`],["Roles people play",`assistant;der Assistent|die Assistentin;el asistente|la asistente;l'assistant|l'assistante;l'assistente
employer;der Arbeitgeber|die Arbeitgeberin;el empleador|la empleadora;l'employeur|l'employeuse;il datore di lavoro
pensioner;der Rentner|die Rentnerin|der Pensionist;el jubilado|la jubilada;le retraité|la retraitée;il pensionato|la pensionata
childminder;die Tagesmutter|der Babysitter;la niñera|la canguro;la nounou|la baby-sitter;la babysitter|la tata
host;der Gastgeber|die Gastgeberin;el anfitrión|la anfitriona;l'hôte|l'hôtesse;il padrone di casa|l'ospite
spectator;der Zuschauer|die Zuschauerin;el espectador|la espectadora;le spectateur|la spectatrice;lo spettatore|la spettatrice
candidate;der Kandidat|die Kandidatin;el candidato|la candidata;le candidat|la candidate;il candidato|la candidata
champion;der Meister|die Meisterin|der Champion;el campeón|la campeona;le champion|la championne;il campione|la campionessa
priest;der Priester|der Pfarrer;el sacerdote|el cura;le prêtre|le curé;il prete|il sacerdote
prime minister;der Premierminister|der Bundeskanzler;el primer ministro|el presidente del gobierno;le Premier ministre;il primo ministro|il presidente del consiglio`],["Media verbs",`to broadcast;senden|übertragen;emitir|transmitir;diffuser|émettre;trasmettere
to interview;interviewen|befragen;entrevistar;interviewer;intervistare
to rehearse;proben;ensayar;répéter;provare|fare le prove
to applaud;applaudieren|Beifall klatschen;aplaudir;applaudir;applaudire
to direct (a film);Regie führen;dirigir;réaliser;dirigere|fare la regia
to act;schauspielern|spielen;actuar;jouer;recitare
to edit;bearbeiten|schneiden;editar|montar;éditer|monter;modificare|montare
to review;rezensieren|bewerten;reseñar|hacer una crítica;faire la critique de;recensire
to censor;zensieren;censurar;censurer;censurare
to go viral;viral gehen;hacerse viral;devenir viral;diventare virale`],["Love & friendship 2",`hug (noun);die Umarmung;el abrazo;le câlin|l'étreinte;l'abbraccio
date (romantic);das Date|die Verabredung;la cita;le rendez-vous;l'appuntamento
crush;der Schwarm;el amor platónico|el flechazo;le béguin;la cotta
heartbreak;der Liebeskummer;el desamor|el corazón roto;le chagrin d'amour;il cuore spezzato|la delusione d'amore
argument (quarrel);der Streit;la discusión|la pelea;la dispute;la lite|il litigio
apology;die Entschuldigung;la disculpa;les excuses;le scuse
promise (noun);das Versprechen;la promesa;la promesse;la promessa
support (noun);die Unterstützung;el apoyo;le soutien;il sostegno|il supporto
gratitude;die Dankbarkeit;la gratitud;la gratitude;la gratitudine
forgiveness;die Vergebung|die Verzeihung;el perdón;le pardon;il perdono`],["Shops & places in town",`pedestrian zone;die Fußgängerzone;la zona peatonal;la zone piétonne;la zona pedonale
city centre;das Stadtzentrum|die Innenstadt;el centro de la ciudad;le centre-ville;il centro città
underpass;die Unterführung;el paso subterráneo;le passage souterrain;il sottopassaggio
recycling bin;der Recyclingcontainer|die Wertstofftonne;el contenedor de reciclaje;le conteneur de recyclage|la poubelle de tri;il cassonetto della raccolta differenziata
phone box;die Telefonzelle;la cabina telefónica;la cabine téléphonique;la cabina telefonica
newsagent's;der Zeitungsladen|die Trafik;la tienda de prensa|el quiosco de prensa;le marchand de journaux;l'edicola
chemist's (drugstore);die Drogerie;la droguería;la droguerie|la parapharmacie;la drogheria|la profumeria
stationery shop;das Schreibwarengeschäft;la papelería;la papeterie;la cartoleria
jeweller's;das Juweliergeschäft|der Juwelier;la joyería;la bijouterie|la joaillerie;la gioielleria
optician's;der Optiker;la óptica;l'opticien;l'ottico`],["Handy verb phrases",`to stay calm;ruhig bleiben;mantener la calma;rester calme|garder son calme;mantenere la calma
to keep quiet;still sein|schweigen;callarse|guardar silencio;se taire;stare zitto|tacere
to make noise;Lärm machen;hacer ruido;faire du bruit;fare rumore
to pay a compliment;ein Kompliment machen;hacer un cumplido;faire un compliment;fare un complimento
to make a wish;sich etwas wünschen;pedir un deseo;faire un vœu;esprimere un desiderio
to keep an eye on;im Auge behalten;vigilar|no perder de vista;surveiller|garder un œil sur;tenere d'occhio
to take a break;eine Pause machen;tomar un descanso|hacer una pausa;faire une pause;fare una pausa
to change clothes;sich umziehen;cambiarse de ropa;se changer;cambiarsi
to catch a cold;sich erkälten;resfriarse|coger un resfriado;attraper un rhume|s'enrhumer;prendere il raffreddore|raffreddarsi
to save time;Zeit sparen;ahorrar tiempo;gagner du temps;risparmiare tempo`],["Time & numbers 3",`half an hour;eine halbe Stunde;media hora;une demi-heure;mezz'ora
quarter of an hour;eine Viertelstunde;un cuarto de hora;un quart d'heure;un quarto d'ora
leap year;das Schaltjahr;el año bisiesto;l'année bissextile;l'anno bisestile
millennium;das Jahrtausend;el milenio;le millénaire;il millennio
date of birth;das Geburtsdatum;la fecha de nacimiento;la date de naissance;la data di nascita
dawn;die Morgendämmerung;el alba|el amanecer;l'aube;l'alba
dusk;die Abenddämmerung;el anochecer|el crepúsculo;le crépuscule;il crepuscolo
hundred thousand;hunderttausend;cien mil;cent mille;centomila
billion;die Milliarde;mil millones;le milliard;il miliardo
seventy;siebzig;setenta;soixante-dix;settanta`]],fr=[{id:"en",name:"English",native:"English",col:0},{id:"de",name:"German",native:"Deutsch",col:1},{id:"es",name:"Spanish",native:"Español",col:2},{id:"fr",name:"French",native:"Français",col:3},{id:"it",name:"Italian",native:"Italiano",col:4}],Fm=[{theme:"Basics",words:[["hello","hallo|servus|grüß Gott","hola","salut|bonjour","ciao|salve"],["goodbye","tschüss|auf Wiedersehen","adiós|hasta luego","au revoir|salut","arrivederci|ciao"],["please","bitte","por favor","s'il vous plaît|s'il te plaît","per favore|per piacere"],["thank you","danke","gracias","merci","grazie"],["yes","ja","sí","oui","sì"],["no","nein","no","non","no"],["sorry","Entschuldigung|Entschuldigen Sie","perdón|lo siento","pardon|désolé","scusa|scusi|mi dispiace"],["good morning","guten Morgen","buenos días","bonjour","buongiorno"],["good night","gute Nacht","buenas noches","bonne nuit","buonanotte"],["friend","der Freund|die Freundin","el amigo|la amiga","l'ami|l'amie","l'amico|l'amica"]]},{theme:"Family",words:[["mother","die Mutter","la madre","la mère","la madre"],["father","der Vater","el padre","le père","il padre"],["sister","die Schwester","la hermana","la sœur","la sorella"],["brother","der Bruder","el hermano","le frère","il fratello"],["child","das Kind","el niño|la niña","l'enfant","il bambino|la bambina"],["family","die Familie","la familia","la famille","la famiglia"],["grandmother","die Großmutter|die Oma","la abuela","la grand-mère","la nonna"],["grandfather","der Großvater|der Opa","el abuelo","le grand-père","il nonno"],["baby","das Baby","el bebé","le bébé","il neonato|il bebè"],["parents","die Eltern","los padres","les parents","i genitori"]]},{theme:"Food & drink",words:[["bread","das Brot","el pan","le pain","il pane"],["water","das Wasser","el agua","l'eau","l'acqua"],["apple","der Apfel","la manzana","la pomme","la mela"],["cheese","der Käse","el queso","le fromage","il formaggio"],["milk","die Milch","la leche","le lait","il latte"],["egg","das Ei","el huevo","l'œuf","l'uovo"],["coffee","der Kaffee","el café","le café","il caffè"],["tea","der Tee","el té","le thé","il tè"],["soup","die Suppe","la sopa","la soupe","la zuppa|la minestra"],["cake","der Kuchen|die Torte","el pastel|la tarta","le gâteau","la torta"]]},{theme:"Animals",words:[["dog","der Hund","el perro","le chien","il cane"],["cat","die Katze","el gato","le chat","il gatto"],["bird","der Vogel","el pájaro|el ave","l'oiseau","l'uccello"],["fish","der Fisch","el pez|el pescado","le poisson","il pesce"],["horse","das Pferd","el caballo","le cheval","il cavallo"],["cow","die Kuh","la vaca","la vache","la mucca|la vacca"],["mouse","die Maus","el ratón","la souris","il topo"],["rabbit","das Kaninchen|der Hase","el conejo","le lapin","il coniglio"],["bear","der Bär","el oso","l'ours","l'orso"],["pig","das Schwein","el cerdo|el puerco","le cochon","il maiale"]]},{theme:"Colours",words:[["red","rot","rojo","rouge","rosso"],["blue","blau","azul","bleu","blu|azzurro"],["green","grün","verde","vert","verde"],["yellow","gelb","amarillo","jaune","giallo"],["black","schwarz","negro","noir","nero"],["white","weiß","blanco","blanc","bianco"],["orange","orange","naranja","orange","arancione"],["pink","rosa|pink","rosa","rose","rosa"],["brown","braun","marrón|café","marron|brun","marrone"],["grey","grau","gris","gris","grigio"]]},{theme:"Numbers",words:[["one","eins","uno","un|une","uno"],["two","zwei","dos","deux","due"],["three","drei","tres","trois","tre"],["four","vier","cuatro","quatre","quattro"],["five","fünf","cinco","cinq","cinque"],["six","sechs","seis","six","sei"],["seven","sieben","siete","sept","sette"],["eight","acht","ocho","huit","otto"],["nine","neun","nueve","neuf","nove"],["ten","zehn","diez","dix","dieci"]]},{theme:"At home",words:[["house","das Haus","la casa","la maison","la casa"],["door","die Tür","la puerta","la porte","la porta"],["window","das Fenster","la ventana","la fenêtre","la finestra"],["table","der Tisch","la mesa","la table","il tavolo"],["chair","der Stuhl","la silla","la chaise","la sedia"],["bed","das Bett","la cama","le lit","il letto"],["kitchen","die Küche","la cocina","la cuisine","la cucina"],["room","das Zimmer|der Raum","la habitación|el cuarto","la chambre|la pièce","la stanza|la camera"],["key","der Schlüssel","la llave","la clé|la clef","la chiave"],["garden","der Garten","el jardín","le jardin","il giardino"]]},{theme:"The body",words:[["head","der Kopf","la cabeza","la tête","la testa"],["hand","die Hand","la mano","la main","la mano"],["foot","der Fuß","el pie","le pied","il piede"],["eye","das Auge","el ojo","l'œil","l'occhio"],["ear","das Ohr","la oreja|el oído","l'oreille","l'orecchio"],["nose","die Nase","la nariz","le nez","il naso"],["mouth","der Mund","la boca","la bouche","la bocca"],["arm","der Arm","el brazo","le bras","il braccio"],["leg","das Bein","la pierna","la jambe","la gamba"],["heart","das Herz","el corazón","le cœur","il cuore"]]},{theme:"Clothes",words:[["shirt","das Hemd","la camisa","la chemise","la camicia"],["shoe","der Schuh","el zapato","la chaussure","la scarpa"],["hat","der Hut","el sombrero","le chapeau","il cappello"],["jacket","die Jacke","la chaqueta|la chamarra","la veste|le blouson","la giacca"],["dress","das Kleid","el vestido","la robe","il vestito|l’abito"],["trousers","die Hose","los pantalones|el pantalón","le pantalon","i pantaloni"],["sock","die Socke|der Socken","el calcetín","la chaussette","il calzino"],["sweater","der Pullover|der Pulli","el jersey|el suéter","le pull|le pull-over","il maglione"],["skirt","der Rock","la falda","la jupe","la gonna"],["bag","die Tasche","el bolso|la bolsa","le sac","la borsa"]]},{theme:"Nature & weather",words:[["sun","die Sonne","el sol","le soleil","il sole"],["rain","der Regen","la lluvia","la pluie","la pioggia"],["snow","der Schnee","la nieve","la neige","la neve"],["wind","der Wind","el viento","le vent","il vento"],["sky","der Himmel","el cielo","le ciel","il cielo"],["tree","der Baum","el árbol","l'arbre","l'albero"],["flower","die Blume","la flor","la fleur","il fiore"],["sea","das Meer|die See","el mar","la mer","il mare"],["mountain","der Berg","la montaña","la montagne","la montagna"],["river","der Fluss","el río","la rivière|le fleuve","il fiume"]]},{theme:"Time",words:[["day","der Tag","el día","le jour","il giorno"],["night","die Nacht","la noche","la nuit","la notte"],["week","die Woche","la semana","la semaine","la settimana"],["month","der Monat","el mes","le mois","il mese"],["year","das Jahr","el año","l'année|l'an","l'anno"],["today","heute","hoy","aujourd'hui","oggi"],["tomorrow","morgen","mañana","demain","domani"],["yesterday","gestern","ayer","hier","ieri"],["morning","der Morgen|der Vormittag","la mañana","le matin","la mattina|il mattino"],["evening","der Abend","la tarde|la noche","le soir|la soirée","la sera"]]},{theme:"Verbs 1",words:[["to eat","essen","comer","manger","mangiare"],["to drink","trinken","beber|tomar","boire","bere"],["to sleep","schlafen","dormir","dormir","dormire"],["to go","gehen","ir","aller","andare"],["to see","sehen","ver","voir","vedere"],["to speak","sprechen|reden","hablar","parler","parlare"],["to read","lesen","leer","lire","leggere"],["to write","schreiben","escribir","écrire","scrivere"],["to play","spielen","jugar","jouer","giocare"],["to learn","lernen","aprender","apprendre","imparare"]]},{theme:"Describing things",words:[["big","groß","grande","grand","grande"],["small","klein","pequeño","petit","piccolo"],["good","gut","bueno","bon","buono"],["bad","schlecht","malo","mauvais","cattivo"],["new","neu","nuevo","nouveau","nuovo"],["old","alt","viejo","vieux","vecchio"],["happy","glücklich|froh","feliz|contento","heureux|content","felice|contento"],["sad","traurig","triste","triste","triste"],["hot","heiß","caliente","chaud","caldo"],["cold","kalt","frío","froid","freddo"]]},{theme:"Places",words:[["school","die Schule","la escuela|el colegio","l'école","la scuola"],["city","die Stadt","la ciudad","la ville","la città"],["street","die Straße","la calle","la rue","la strada|la via"],["shop","das Geschäft|der Laden","la tienda","le magasin|la boutique","il negozio"],["park","der Park","el parque","le parc","il parco"],["station","der Bahnhof","la estación","la gare","la stazione"],["beach","der Strand","la playa","la plage","la spiaggia"],["church","die Kirche","la iglesia","l'église","la chiesa"],["hospital","das Krankenhaus|das Spital","el hospital","l'hôpital","l'ospedale"],["library","die Bibliothek|die Bücherei","la biblioteca","la bibliothèque","la biblioteca"]]},{theme:"School",words:[["book","das Buch","el libro","le livre","il libro"],["pen","der Stift|der Kugelschreiber|der Kuli","el bolígrafo|el boli","le stylo","la penna"],["teacher","der Lehrer|die Lehrerin","el profesor|la profesora","le professeur|la professeure|le prof","l'insegnante|il professore|la professoressa"],["pupil","der Schüler|die Schülerin","el alumno|la alumna","l'élève","l'alunno|l'alunna|lo studente"],["lesson","die Stunde|die Unterrichtsstunde|die Lektion","la lección|la clase","la leçon|le cours","la lezione"],["homework","die Hausaufgabe|die Hausaufgaben|die Hausübung","los deberes|la tarea","les devoirs","i compiti"],["question","die Frage","la pregunta","la question","la domanda"],["answer","die Antwort","la respuesta","la réponse","la risposta"],["word","das Wort","la palabra","le mot","la parola"],["language","die Sprache","el idioma|la lengua","la langue","la lingua"]]},{theme:"Travel",words:[["car","das Auto","el coche|el carro|el auto","la voiture","la macchina|l'auto"],["bus","der Bus","el autobús|el bus","le bus|le car","l'autobus|il pullman"],["train","der Zug","el tren","le train","il treno"],["plane","das Flugzeug","el avión","l'avion","l'aereo"],["bike","das Fahrrad|das Rad","la bicicleta|la bici","le vélo|la bicyclette","la bicicletta|la bici"],["ticket","die Fahrkarte|das Ticket|der Fahrschein","el billete|el boleto","le billet|le ticket","il biglietto"],["map","die Landkarte|die Karte|der Stadtplan","el mapa","la carte|le plan","la mappa|la cartina"],["holiday","der Urlaub|die Ferien","las vacaciones","les vacances","le vacanze"],["suitcase","der Koffer","la maleta","la valise","la valigia"],["passport","der Reisepass|der Pass","el pasaporte","le passeport","il passaporto"]]},{theme:"Verbs 2",words:[["to come","kommen","venir","venir","venire"],["to have","haben","tener|haber","avoir","avere"],["to be","sein","ser|estar","être","essere|stare"],["to make","machen","hacer","faire","fare"],["to buy","kaufen","comprar","acheter","comprare"],["to open","öffnen|aufmachen","abrir","ouvrir","aprire"],["to close","schließen|zumachen","cerrar","fermer","chiudere"],["to run","laufen|rennen","correr","courir","correre"],["to swim","schwimmen","nadar","nager","nuotare"],["to sing","singen","cantar","chanter","cantare"]]},{theme:"People",words:[["man","der Mann","el hombre","l'homme","l'uomo"],["woman","die Frau","la mujer","la femme","la donna"],["boy","der Junge|der Bub","el chico|el niño","le garçon","il ragazzo"],["girl","das Mädchen","la chica|la niña","la fille","la ragazza"],["people","die Leute|die Menschen","la gente","les gens","la gente"],["name","der Name","el nombre","le nom","il nome"],["neighbour","der Nachbar|die Nachbarin","el vecino|la vecina","le voisin|la voisine","il vicino|la vicina"],["doctor","der Arzt|die Ärztin","el médico|la médica|el doctor","le médecin|le docteur","il medico|il dottore|la dottoressa"],["king","der König","el rey","le roi","il re"],["team","die Mannschaft|das Team","el equipo","l'équipe","la squadra"]]}],ns=Object.assign({"./vocab/a-food.js":lm,"./vocab/b-nature.js":tm,"./vocab/c-body.js":im,"./vocab/d-home.js":nm,"./vocab/e-town.js":om,"./vocab/f-people-work.js":sm,"./vocab/g-school-tech.js":cm,"./vocab/h-free-time.js":um,"./vocab/i-verbs.js":dm,"./vocab/j-adjectives.js":pm,"./vocab/k-small-words.js":mm,"./vocab/l-society.js":fm,"./vocab/m-verbs2.js":hm,"./vocab/n-nouns.js":gm,"./vocab/o-more-topics.js":vm,"./vocab/p-verbs3.js":bm,"./vocab/q-adjectives2.js":ym,"./vocab/r-nouns3.js":km,"./vocab/s-verbs4.js":wm,"./vocab/t-topics2.js":zm,"./vocab/u-topics3.js":Sm,"./vocab/v-more.js":xm,"./vocab/w-more2.js":jm,"./vocab/x-more3.js":Em,"./vocab/y-more4.js":Nm,"./vocab/z1-more5.js":Cm,"./vocab/z2-more6.js":Pm,"./vocab/z3-more7.js":_m}),Tm=Object.keys(ns).sort().flatMap(e=>ns[e]).map(([e,a])=>({theme:e,words:a.split(`
`).filter(r=>r.trim()).map(r=>r.split(";").map(l=>l.trim()))})),Br=[...Fm,...Tm];function xu(e,a,r){const l=Br[e%Br.length],t=i=>fr.find(n=>n.id===i).col;return{theme:l.theme,review:e>=Br.length,words:l.words.map(i=>({front:i[t(a)].split("|")[0],answers:i[t(r)].split("|")}))}}const Ae=[{id:"beginner",name:"A1",start:0,desc:"Beginner. You know a few words or are starting from zero: food, family, numbers and everyday basics."},{id:"elementary",name:"A2",start:60,desc:"Elementary. You can handle simple everyday things like shopping, home, school and free time."},{id:"intermediate",name:"B1",start:150,desc:"Intermediate. You can get by on holiday and talk about work, travel, feelings and your opinions."},{id:"upper",name:"B2",start:240,desc:"Upper intermediate. You can follow most conversations and want more detailed words and verbs."},{id:"advanced",name:"C1",start:300,desc:"Advanced. You speak well already and want less common words and useful phrases."}],ju=e=>{const a=e%Br.length;let r=0;return Ae.forEach((l,t)=>{a>=l.start&&(r=t)}),r};function qm(e,a){const r=[];return Ae.forEach((l,t)=>{var o;const i=((o=Ae[t+1])==null?void 0:o.start)??Br.length,n=new Set;for(;n.size<2;){const s=l.start+Math.floor(Math.random()*(i-l.start)),d=xu(s,e,a).words,h=d[Math.floor(Math.random()*d.length)];n.has(h.front)||(n.add(h.front),r.push({...h,level:t}))}}),r}const We=[{id:"red",name:"Red",light:"#FF3B30",dark:"#FF453A",hue:3},{id:"orange",name:"Orange",light:"#FF9500",dark:"#FF9F0A",hue:35},{id:"yellow",name:"Yellow",light:"#FFCC00",dark:"#FFD60A",hue:48,darkText:!0},{id:"green",name:"Green",light:"#34C759",dark:"#30D158",hue:135},{id:"teal",name:"Teal",light:"#30B0C7",dark:"#40C8E0",hue:189},{id:"blue",name:"Blue",light:"#007AFF",dark:"#0A84FF",hue:211},{id:"indigo",name:"Indigo",light:"#5856D6",dark:"#5E5CE6",hue:241},{id:"purple",name:"Purple",light:"#AF52DE",dark:"#BF5AF2",hue:280},{id:"pink",name:"Pink",light:"#FF2D55",dark:"#FF375F",hue:348}],$e=30;function ut(e){if(e<=0)return{color:We[0],next:We[1],dayInColor:0,shade:0};const a=Math.floor((e-1)/$e)%We.length,r=(e-1)%$e+1;return{color:We[a],next:We[(a+1)%We.length],dayInColor:r,shade:(r-1)/($e-1)}}const os=(e,a)=>{const r=parseInt(e.slice(1),16);return`rgba(${r>>16}, ${r>>8&255}, ${r&255}, ${a})`};function Mm(e){const{color:a,shade:r}=ut(e),l=96-r*90,t=18+r*22,i=l<52,n=i?a.dark:a.light,o=l>=26&&l<76,s=i?"#FFFFFF":"#000000";return{"--bg":`hsl(${a.hue} ${t}% ${l}%)`,"--card":i?`hsl(${a.hue} ${t*.55}% ${Math.min(l+8,22)}%)`:"#FFFFFF","--text":i?"#FFFFFF":"#000000","--secondary":i?"rgba(235, 235, 245, 0.65)":"rgba(60, 60, 67, 0.65)","--separator":i?"rgba(84, 84, 88, 0.6)":"rgba(60, 60, 67, 0.18)","--fill":i?"rgba(118, 118, 128, 0.24)":"rgba(118, 118, 128, 0.12)","--accent":n,"--on-accent":a.darkText?"#000000":"#FFFFFF","--link":o||a.darkText?s:n,"--tint":o?i?"rgba(255, 255, 255, 0.16)":"rgba(255, 255, 255, 0.6)":os(n,i?.22:.16),"--tint-text":o||a.darkText?s:n,"--track":o?i?"rgba(255, 255, 255, 0.18)":"rgba(255, 255, 255, 0.55)":os(n,i?.22:.16)}}const Eu={en:["the","a","an","to"],de:["der","die","das","den","dem","ein","eine"],es:["el","la","los","las","un","una"],fr:["le","la","les","un","une"],it:["il","lo","la","i","gli","le","un","uno","una"]};function en(e,a){var i;let r=e.toLowerCase().replace(/\(.*?\)/g,"").replace(/[’`´]/g,"'").replace(/[.,!?¡¿]/g,"").replace(/\s+/g," ").trim();r=r.replace(/^l'\s*/,"");const[l,...t]=r.split(" ");return t.length&&((i=Eu[a])!=null&&i.includes(l))&&(r=t.join(" ")),r}function Nl(e,a){return en(e,a).replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").replace(/œ/g,"oe").normalize("NFD").replace(/[̀-ͯ]/g,"")}function Lm(e,a){const r=Array.from({length:a.length+1},(l,t)=>t);for(let l=1;l<=e.length;l++){let t=r[0];r[0]=l;for(let i=1;i<=a.length;i++){const n=r[i];r[i]=Math.min(r[i]+1,r[i-1]+1,t+(e[l-1]===a[i-1]?0:1)),t=n}}return r[a.length]}function Nu(e,a,r){if(!e.trim())return{correct:!1};const l=t=>{var n;const i=t.toLowerCase().trim().split(/\s+/)[0];return(n=Eu[r])!=null&&n.includes(i)?i:null};for(const t of a)if(en(e,r)===en(t,r)){const i=l(e),n=l(t);return i&&n&&i!==n?{correct:!0,note:`Right word! The article is: ${t}`}:{correct:!0}}for(const t of a)if(Nl(e,r)===Nl(t,r))return{correct:!0,note:`Watch the spelling: ${t}`};for(const t of a){const i=Nl(t,r);if(i.length>=5&&Lm(Nl(e,r),i)<=1)return{correct:!0,note:`Small typo — it’s ${t}`}}return{correct:!1}}const ss="ten-a-day",dt=8,Rm=864e5,Bm=e=>Math.floor((e-new Date(e).getTimezoneOffset()*6e4)/Rm),Am=e=>[...e].sort(()=>Math.random()-.5),cs={from:"en",lang:null,progress:{},streak:{count:0,lastDay:null}};function Dm(){const[e,a]=q.useState(()=>{try{return{...cs,...JSON.parse(localStorage.getItem(ss))}}catch{return cs}});return q.useEffect(()=>{try{localStorage.setItem(ss,JSON.stringify(e))}catch{}},[e]),[e,a]}function Ct({className:e=""}){return u.jsx("svg",{viewBox:"0 0 24 24",className:`h-5 w-5 ${e}`,fill:"none",stroke:"currentColor",strokeWidth:"2.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:u.jsx("path",{d:"M5 12.5l4.5 4.5L19 7.5"})})}function Cu({left:e=!1}){return u.jsx("svg",{viewBox:"0 0 24 24",className:"h-[22px] w-[22px]",fill:"none",stroke:"currentColor",strokeWidth:"2.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:u.jsx("path",{d:e?"M15 5l-7 7 7 7":"M9 5l7 7-7 7"})})}function Pt({value:e,size:a=220,stroke:r=22,children:l}){const t=(a-r)/2,i=2*Math.PI*t;return u.jsxs("div",{className:"relative",style:{width:a,height:a},children:[u.jsxs("svg",{width:a,height:a,className:"-rotate-90","aria-hidden":"true",children:[u.jsx("circle",{cx:a/2,cy:a/2,r:t,fill:"none",stroke:"var(--track)",strokeWidth:r}),u.jsx("circle",{cx:a/2,cy:a/2,r:t,fill:"none",stroke:"var(--accent)",strokeWidth:r,strokeLinecap:"round",strokeDasharray:i,strokeDashoffset:i*(1-Math.max(.001,Math.min(1,e))),style:{transition:"stroke-dashoffset 1.2s cubic-bezier(.2,.8,.2,1), stroke 1.5s"}})]}),u.jsx("div",{className:"absolute inset-0 flex flex-col items-center justify-center overflow-hidden",children:l})]})}function Ra({left:e,right:a,title:r}){return u.jsxs("div",{className:"flex h-11 items-center justify-between",children:[u.jsx("div",{className:"min-w-[70px]",children:e}),u.jsx("div",{className:"headline",children:r}),u.jsx("div",{className:"min-w-[70px] text-right",children:a})]})}function _t({onClick:e,label:a="Back"}){return u.jsxs("button",{onClick:e,className:"link -ml-2 flex items-center",children:[u.jsx(Cu,{left:!0})," ",a]})}function Im({streak:e}){const a=e>0?Math.floor((e-1)/$e)%We.length:-1,r=e>0?Math.floor((e-1)/($e*We.length)):0;return u.jsx("div",{className:"flex justify-between",children:We.map((l,t)=>{const i=t<a||r>0,n=t===a;return u.jsx("span",{className:"flex flex-col items-center gap-1",title:l.name,children:u.jsx("span",{className:"flex items-center justify-center rounded-full transition-all",style:{background:l.light,width:n?30:22,height:n?30:22,opacity:i||n||a===-1?1:.35,boxShadow:n?`0 0 0 3px var(--card), 0 0 0 5px ${l.light}`:"none"},children:i&&!n&&u.jsx(Ct,{className:"h-3 w-3 text-white"})})},l.id)})})}function ti({label:e,value:a,onChange:r,placeholder:l,options:t=fr.map(i=>({value:i.id,label:i.name}))}){return u.jsxs("label",{className:"row cursor-pointer",children:[u.jsx("span",{className:"body flex-1",children:e}),u.jsxs("span",{className:"relative flex items-center gap-1",style:{color:a?"var(--link)":"var(--secondary)"},children:[u.jsxs("select",{value:a||"",onChange:i=>r(i.target.value),className:"body cursor-pointer appearance-none bg-transparent pr-5 text-right outline-none",style:{color:"inherit"},children:[!a&&u.jsx("option",{value:"",disabled:!0,children:l}),t.map(i=>u.jsx("option",{value:i.value,children:i.label},i.value))]}),u.jsx("svg",{viewBox:"0 0 24 24",className:"pointer-events-none absolute right-0 h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:u.jsx("path",{d:"M8 9l4-4 4 4M8 15l4 4 4-4"})})]})]})}function Km({state:e,onDone:a,onCancel:r,onFindLevel:l}){const[t,i]=q.useState(e.from||"en"),[n,o]=q.useState(e.lang),[s,d]=q.useState(null),h=!!e.lang,g=ju(e.progress[n]||0),f=s??g,b=_=>{_===n&&o(t),i(_)},k=_=>{_===t&&i(n||(_==="en"?"de":"en")),o(_),d(null)},w=()=>{const _={from:t,lang:n};s!==null&&s!==g&&(_.progress={...e.progress,[n]:Ae[s].start}),a(_)};return u.jsxs("div",{className:"mx-auto max-w-md px-4 pb-10 pt-2",children:[h?u.jsx(Ra,{left:u.jsx(_t,{onClick:r})}):u.jsx("div",{className:"h-11"}),u.jsx("h1",{className:"large-title mt-1",children:h?"Settings":"Ten a Day"}),!h&&u.jsx("p",{className:"body secondary mt-1",children:"10 new words every day. Learn them with flashcards, pass a short test, keep your streak."}),u.jsx("p",{className:"caption mb-2 mt-8 px-4",children:"Languages"}),u.jsxs("div",{className:"group",children:[u.jsx(ti,{label:"I speak",value:t,onChange:b,placeholder:"Choose"}),u.jsx(ti,{label:"I want to learn",value:n,onChange:k,placeholder:"Choose"})]}),h&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"caption mb-2 mt-8 px-4",children:"Level"}),u.jsxs("div",{className:"group",children:[u.jsx(ti,{label:"My level",value:String(f),onChange:_=>d(Number(_)),options:Ae.map((_,p)=>({value:String(p),label:_.name}))}),u.jsxs("button",{onClick:()=>l({from:t,lang:n}),className:"row",disabled:!n||n===t,children:[u.jsx("span",{className:"body flex-1 text-left",style:{color:"var(--link)"},children:"Find your level"}),u.jsx("span",{className:"secondary",children:u.jsx(Cu,{})})]})]}),u.jsx("p",{className:"footnote mt-2 px-4",children:Ae[f].desc})]}),!h&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"caption mb-2 mt-8 px-4",children:"Your colours"}),u.jsx("div",{className:"group p-4",children:u.jsx(Im,{streak:0})}),u.jsxs("p",{className:"footnote mt-2 px-4",children:["Every colour lasts ",$e," days and gets a little darker each day you keep your streak. Then you move on to the next one: red, orange, yellow, green, teal, blue, indigo, purple and pink."]})]}),u.jsx("button",{disabled:!n||n===t,onClick:w,className:"btn btn-filled mt-8 w-full",children:h?"Done":"Get Started"})]})}function Hm({state:e,set:a,dayIndex:r,streak:l,passedToday:t,onCards:i,onTest:n,onSettings:o}){const s=h=>fr.find(g=>g.id===h).name,d=ut(l);return u.jsxs("div",{className:"mx-auto max-w-md px-4 pb-10 pt-2",children:[u.jsx(Ra,{right:u.jsx("button",{onClick:o,className:"link",children:"Settings"})}),u.jsxs("p",{className:"caption mt-1",children:[s(e.from||"en")," → ",s(e.lang)]}),u.jsx("h1",{className:"large-title",children:"Today"}),u.jsxs("section",{className:"mt-6 flex flex-col items-center text-center",children:[u.jsxs(Pt,{value:d.dayInColor/$e,children:[u.jsx("span",{className:"text-[64px] font-bold leading-none tracking-tight",children:l}),u.jsx("span",{className:"footnote mt-1",children:"day streak"})]}),u.jsx("p",{className:"headline mt-5 max-w-xs",children:t?"Done for today":l>0?`Pass today’s test to make it ${l+1}`:"Pass today’s test to start your streak"}),u.jsx("p",{className:"footnote mt-1 max-w-xs",children:t?"Come back tomorrow to keep your streak going.":`You need ${dt} of 10 correct.`})]}),u.jsxs("p",{className:"caption mb-2 mt-8 px-4",children:[t?"Today’s words":`Day ${r+1}`," · ",a.theme,a.review?" · Review":""]}),u.jsx("div",{className:"group",children:u.jsx("div",{className:"grid grid-cols-2",children:a.words.map((h,g)=>u.jsx("span",{className:`body px-4 py-2.5 ${g%2===0,""}`,style:{borderTop:g>1?"0.5px solid var(--separator)":"none"},children:h.front},h.front))})}),u.jsxs("div",{className:"mt-6 grid gap-3",children:[u.jsx("button",{onClick:n,className:"btn btn-filled",children:t?"Practise the Test Again":"Take Today’s Test"}),u.jsx("button",{onClick:i,className:"btn btn-tinted",children:"Learn the Words"})]})]})}const ii="#34C759",us="#FF3B30",ni=100;function Om({set:e,fromName:a,onTest:r,onBack:l}){const[t,i]=q.useState(()=>e.words.map((E,x)=>x)),[n,o]=q.useState([]),[s,d]=q.useState([]),[h,g]=q.useState(!1),[f,b]=q.useState(0),[k,w]=q.useState(!1),[_,p]=q.useState(null),[c,m]=q.useState(0),v=q.useRef(null),z=t[0],S=z!=null?e.words[z]:null,j=z==null,N=E=>{_||j||(p(E),setTimeout(()=>{E==="right"?(o(x=>[...x,z]),i(x=>x.slice(1))):(d(x=>x.includes(z)?x:[...x,z]),i(x=>[...x.slice(1),x[0]])),p(null),b(0),g(!1),m(x=>x+1)},260))},L=E=>{i(E),g(!1),m(x=>x+1)},F=()=>L(E=>[...E.slice(1),E[0]]),he=()=>L(E=>[E[E.length-1],...E.slice(0,-1)]),ka=()=>{i(e.words.map((E,x)=>x)),o([]),d([]),m(E=>E+1)};q.useEffect(()=>{const E=x=>{x.target.tagName==="BUTTON"&&(x.key===" "||x.key==="Enter")||((x.key===" "||x.key==="Enter")&&(x.preventDefault(),g(A=>!A)),x.key==="ArrowLeft"&&N("left"),x.key==="ArrowRight"&&N("right"))};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)});const wa=E=>{if(!_){v.current={x:E.clientX,moved:!1},w(!0);try{E.currentTarget.setPointerCapture(E.pointerId)}catch{}}},nl=E=>{if(!v.current)return;const x=E.clientX-v.current.x;Math.abs(x)>6&&(v.current.moved=!0),b(x)},ol=E=>{if(!v.current)return;const x=E.clientX-v.current.x,A=v.current.moved||Math.abs(x)>6;v.current=null,w(!1),A?x<=-ni?N("left"):x>=ni?N("right"):b(0):(b(0),g(U=>!U))},Ke=_==="left"?-window.innerWidth*1.2:_==="right"?window.innerWidth*1.2:f,hr=Math.min(1,Math.abs(Ke)/ni),C=Ke>0?ii:us;return u.jsxs("div",{className:"mx-auto flex min-h-screen max-w-md flex-col overflow-x-hidden px-4 pb-8 pt-2",children:[u.jsx(Ra,{left:u.jsx(_t,{onClick:l,label:"Today"}),title:"Flashcards",right:u.jsxs("span",{className:"footnote",children:[n.length," of ",e.words.length]})}),j?u.jsxs("div",{className:"rise mt-16 flex flex-1 flex-col items-center text-center",children:[u.jsx("span",{className:"flex h-20 w-20 items-center justify-center rounded-full text-white",style:{background:ii},children:u.jsx(Ct,{className:"h-10 w-10"})}),u.jsx("h1",{className:"title2 mt-5",children:"All 10 are green!"}),u.jsx("p",{className:"body secondary mt-1 max-w-xs",children:s.length===0?"You knew every word straight away.":`${s.length} ${s.length===1?"word needed":"words needed"} another go. Ready for the test?`}),u.jsxs("div",{className:"mt-auto grid w-full gap-3 pt-8",children:[u.jsx("button",{onClick:r,className:"btn btn-filled",children:"Take the Test"}),u.jsx("button",{onClick:ka,className:"btn btn-tinted",children:"Go Through Again"})]})]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"relative mt-6 aspect-[4/5] w-full",children:[t.length>1&&u.jsx("div",{className:"absolute inset-0 scale-[0.95] rounded-[28px] bg-[var(--card)] opacity-60 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"}),u.jsx("div",{className:"pop absolute inset-0",children:u.jsxs("div",{role:"button",tabIndex:0,"aria-label":"Card: tap to flip, pull right if you know it, left to see it again",onPointerDown:wa,onPointerMove:nl,onPointerUp:ol,onPointerCancel:ol,className:"flip absolute inset-0 cursor-grab touch-none select-none active:cursor-grabbing",style:{transform:`translateX(${Ke}px) rotate(${Ke/18}deg)`,transition:k?"none":"transform 0.28s cubic-bezier(.2,.8,.2,1)"},children:[u.jsxs("div",{className:`flip-inner relative h-full w-full ${h?"flipped":""}`,children:[u.jsxs("div",{className:"flip-face absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-[28px] bg-[var(--card)] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)]",children:[u.jsx("span",{className:"caption",children:a}),u.jsx("span",{className:"mt-3 text-center text-[40px] font-bold leading-tight tracking-tight",children:S.front}),u.jsx("span",{className:"footnote absolute bottom-6",children:"Tap to flip"})]}),u.jsxs("div",{className:"flip-face flip-back absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-[28px] p-6",style:{background:"var(--accent)",color:"var(--on-accent)"},children:[u.jsx("span",{className:"text-[13px] font-medium uppercase tracking-wide opacity-75",children:S.front}),u.jsx("span",{className:"mt-3 text-center text-[40px] font-bold leading-tight tracking-tight",children:S.answers[0]}),S.answers.length>1&&u.jsxs("span",{className:"mt-4 text-center text-[15px] opacity-80",children:["also: ",S.answers.slice(1).join(", ")]})]})]}),u.jsx("div",{className:"pointer-events-none absolute inset-0 flex items-start justify-center rounded-[28px] pt-8",style:{background:C,opacity:hr*.85},children:u.jsx("span",{className:"rounded-full border-[3px] border-white px-4 py-1 text-[20px] font-bold uppercase tracking-wide text-white",children:Ke>0?"Got it":"Again"})})]})},c)]}),u.jsx("div",{className:"mt-5 flex justify-center gap-[7px]",children:e.words.map((E,x)=>u.jsx("span",{className:"h-[7px] w-[7px] rounded-full transition-colors",style:{background:n.includes(x)?ii:s.includes(x)?us:"var(--fill)",boxShadow:x===z?"0 0 0 2px var(--bg), 0 0 0 3.5px var(--text)":"none"}},E.front))}),u.jsx("p",{className:"footnote mt-3 text-center",children:"Pull right if you know it, left to see it again"}),u.jsxs("div",{className:"mt-auto grid grid-cols-2 gap-3 pt-8",children:[u.jsx("button",{onClick:he,disabled:t.length<2||c===0,className:"btn btn-gray",children:"Previous"}),t.length===1?u.jsx("button",{onClick:r,className:"btn btn-filled",children:"Take the Test"}):u.jsx("button",{onClick:F,className:"btn btn-filled",children:"Next"})]})]})]})}function Wm({set:e,lang:a,onFinish:r,onBack:l}){const[t]=q.useState(()=>Am(e.words)),[i,n]=q.useState(0),[o,s]=q.useState(""),[d,h]=q.useState(null),[g,f]=q.useState([]),b=t[i],k=fr.find(p=>p.id===a).name,w=p=>{if(p.preventDefault(),d){const c=[...g,{word:b,input:o,...d}];if(i===t.length-1)return r(c);f(c),n(i+1),s(""),h(null);return}o.trim()&&h(Nu(o,b.answers,a))},_=i+(d?1:0);return u.jsxs("div",{className:"mx-auto flex min-h-screen max-w-md flex-col px-4 pb-8 pt-2",children:[u.jsx(Ra,{left:u.jsx("button",{onClick:l,className:"link",children:"Cancel"}),title:"Test",right:u.jsxs("span",{className:"footnote",children:[i+1," of ",t.length]})}),u.jsx("div",{className:"mt-2 h-1 overflow-hidden rounded-full",style:{background:"var(--fill)"},children:u.jsx("div",{className:"h-full rounded-full transition-all duration-500",style:{width:`${_/t.length*100}%`,background:"var(--accent)"}})}),u.jsxs("form",{onSubmit:w,className:"rise mt-14 flex flex-1 flex-col",children:[u.jsxs("p",{className:"caption text-center",children:["Translate into ",k]}),u.jsx("p",{className:"mt-2 text-center text-[40px] font-bold leading-tight tracking-tight",children:b.front}),u.jsx("input",{autoFocus:!0,value:o,onChange:p=>!d&&s(p.target.value),readOnly:!!d,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:"false",placeholder:"Type your answer",className:`field mt-10 h-14 w-full px-4 text-center text-[20px] outline-none placeholder:text-[var(--secondary)] ${d&&!d.correct?"shake":""}`,style:{color:"var(--text)",borderColor:d?d.correct?"#34C759":"#FF3B30":"transparent"}}),d&&u.jsxs("div",{className:"pop group mt-4 flex items-start gap-3 p-4",children:[u.jsx("span",{className:"mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white",style:{background:d.correct?"#34C759":"#FF3B30"},children:d.correct?u.jsx(Ct,{className:"h-4 w-4"}):u.jsx("span",{className:"text-[15px] font-bold leading-none",children:"✕"})}),u.jsxs("div",{children:[u.jsx("p",{className:"headline",children:d.correct?"Correct":"Not quite"}),d.note&&u.jsx("p",{className:"footnote mt-0.5",children:d.note}),!d.correct&&u.jsxs("p",{className:"body mt-0.5",children:["It’s ",u.jsx("strong",{children:b.answers[0]})]})]})]}),u.jsx("button",{className:"btn btn-filled mt-auto w-full",disabled:!d&&!o.trim(),children:d?i===t.length-1?"See Result":"Continue":"Check"})]},i)]})}function Gm({results:e,practice:a,onRetry:r,onCards:l,onHome:t}){const i=e.filter(s=>s.correct).length,n=i>=dt,o=e.filter(s=>!s.correct);return u.jsxs("div",{className:"mx-auto max-w-md px-4 pb-10 pt-2",children:[u.jsx(Ra,{left:u.jsx(_t,{onClick:t,label:"Today"})}),u.jsxs("div",{className:"mt-6 flex flex-col items-center text-center",children:[u.jsxs(Pt,{value:i/10,size:170,stroke:16,children:[u.jsx("span",{className:"text-[48px] font-bold leading-none tracking-tight",children:i}),u.jsx("span",{className:"footnote",children:"of 10"})]}),u.jsx("h1",{className:"title2 mt-5",children:n?"Nice work":"So close"}),u.jsx("p",{className:"body secondary mt-1 max-w-xs",children:n?a?"You already kept your streak today. This was extra practice.":"Passed!":`You need ${dt} of 10 to keep your streak. Look at the words again, then try once more.`})]}),o.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"caption mb-2 mt-8 px-4",children:"Words to practise"}),u.jsx("div",{className:"group",children:o.map(s=>u.jsxs("div",{className:"row justify-between",children:[u.jsx("span",{className:"body secondary",children:s.word.front}),u.jsx("span",{className:"headline",children:s.word.answers[0]})]},s.word.front))})]}),u.jsxs("div",{className:"mt-8 grid gap-3",children:[!n&&u.jsxs(u.Fragment,{children:[u.jsx("button",{onClick:r,className:"btn btn-filled",children:"Try Again"}),u.jsx("button",{onClick:l,className:"btn btn-tinted",children:"Review Flashcards"})]}),n&&u.jsx("button",{onClick:t,className:"btn btn-filled",children:"Done"})]})]})}const ds=["#FF3B30","#FF9500","#FFCC00","#34C759","#007AFF","#5856D6","#FF2D55"];function Vm({from:e,to:a,score:r,onDone:l}){const[t,i]=q.useState(!1),n=ut(e),o=ut(a),s=e>0&&n.color.id!==o.color.id,[d,h]=q.useState(s?0:n.dayInColor/$e);q.useEffect(()=>{const f=setTimeout(()=>h(o.dayInColor/$e),700),b=setTimeout(()=>i(!0),1700);return()=>{clearTimeout(f),clearTimeout(b)}},[a]);const g=q.useMemo(()=>Array.from({length:50},(f,b)=>({left:`${b*53%100}%`,delay:`${1+b%10*.07}s`,color:ds[b%ds.length],duration:`${2.2+b%5*.3}s`})),[]);return u.jsxs("div",{className:"app fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden px-6 text-center",children:[g.map((f,b)=>u.jsx("span",{className:"confetti-piece",style:{left:f.left,background:f.color,animationDelay:f.delay,animationDuration:f.duration}},b)),u.jsxs("p",{className:"caption rise",children:["Test passed · ",r," of 10"]}),u.jsx("div",{className:"pop mt-6",children:u.jsxs(Pt,{value:Math.max(d,.04),size:240,stroke:24,children:[u.jsx("span",{className:"num-out absolute text-[72px] font-bold leading-none tracking-tight",children:e}),u.jsx("span",{className:"num-in absolute text-[72px] font-bold leading-none tracking-tight",children:a})]})}),u.jsx("h1",{className:"large-title rise mt-8",style:{animationDelay:"1.1s"},children:s?`Hello, ${o.color.name}!`:"Streak Level Up"}),u.jsx("p",{className:"body secondary rise mt-1",style:{animationDelay:"1.3s"},children:s?`${a}-day streak · you finished ${n.color.name.toLowerCase()} and moved on to ${o.color.name.toLowerCase()}`:`${a}-day streak · your ${o.color.name.toLowerCase()} got a little darker`}),u.jsx("button",{onClick:l,className:"btn btn-filled mt-10 w-full max-w-xs transition-opacity",style:{opacity:t?1:0,pointerEvents:t?"auto":"none"},children:"Continue"})]})}function Um({from:e,lang:a,currentDay:r,onStart:l,onBack:t}){const[i]=q.useState(()=>qm(e,a)),[n,o]=q.useState(0),[s,d]=q.useState(""),[h,g]=q.useState(null),[f,b]=q.useState([]),k=fr.find(p=>p.id===a).name;if(f.length===i.length){let p=0;for(let v=0;v<Ae.length&&f.some(z=>z.level===v&&z.correct);v++)p=v;const c=f.filter(v=>v.correct).length,m=Ae[p];return u.jsxs("div",{className:"mx-auto max-w-md px-4 pb-10 pt-2",children:[u.jsx(Ra,{left:u.jsx(_t,{onClick:t,label:"Settings"})}),u.jsxs("div",{className:"rise mt-6 flex flex-col items-center text-center",children:[u.jsxs(Pt,{value:(p+1)/Ae.length,size:170,stroke:16,children:[u.jsx("span",{className:"text-[44px] font-bold leading-none tracking-tight",children:c}),u.jsx("span",{className:"footnote",children:"of 10 right"})]}),u.jsx("p",{className:"caption mt-6",children:"Your level"}),u.jsx("h1",{className:"large-title",children:m.name}),u.jsx("p",{className:"body secondary mt-1 max-w-xs",children:m.desc})]}),u.jsx("p",{className:"caption mb-2 mt-8 px-4",children:"How you did"}),u.jsx("div",{className:"group",children:Ae.map((v,z)=>u.jsxs("div",{className:"row justify-between",children:[u.jsx("span",{className:`body ${z===p?"font-semibold":""}`,children:v.name}),u.jsx("span",{className:"flex gap-1.5",children:f.filter(S=>S.level===z).map(S=>u.jsx("span",{className:"flex h-6 w-6 items-center justify-center rounded-full text-white",style:{background:S.correct?"#34C759":"#FF3B30"},title:`${S.front} → ${S.answers[0]}`,children:S.correct?u.jsx(Ct,{className:"h-3.5 w-3.5"}):u.jsx("span",{className:"text-[11px] font-bold",children:"✕"})},S.front))})]},v.id))}),ju(r)===p?u.jsxs("div",{className:"mt-8 grid gap-3",children:[u.jsx("p",{className:"footnote px-4 text-center",children:"You’re already at this level. Keep going!"}),u.jsx("button",{onClick:t,className:"btn btn-filled",children:"Done"})]}):u.jsxs("div",{className:"mt-8 grid gap-3",children:[u.jsxs("button",{onClick:()=>l(m.start),className:"btn btn-filled",children:["Start at ",m.name]}),u.jsxs("button",{onClick:t,className:"btn btn-tinted",children:["Keep my place (day ",r+1,")"]})]})]})}const w=i[n],_=p=>{if(p.preventDefault(),h){b([...f,{...w,...h}]),o(Math.min(n+1,i.length-1)),d(""),g(null);return}g(s.trim()?Nu(s,w.answers,a):{correct:!1})};return u.jsxs("div",{className:"mx-auto flex min-h-screen max-w-md flex-col px-4 pb-8 pt-2",children:[u.jsx(Ra,{left:u.jsx("button",{onClick:t,className:"link",children:"Cancel"}),title:"Find your level",right:u.jsxs("span",{className:"footnote",children:[n+1," of 10"]})}),u.jsx("div",{className:"mt-2 h-1 overflow-hidden rounded-full",style:{background:"var(--fill)"},children:u.jsx("div",{className:"h-full rounded-full transition-all duration-500",style:{width:`${(n+(h?1:0))/10*100}%`,background:"var(--accent)"}})}),u.jsxs("form",{onSubmit:_,className:"rise mt-14 flex flex-1 flex-col",children:[u.jsxs("p",{className:"caption text-center",children:["Translate into ",k]}),u.jsx("p",{className:"mt-2 text-center text-[40px] font-bold leading-tight tracking-tight",children:w.front}),u.jsx("input",{autoFocus:!0,value:s,onChange:p=>!h&&d(p.target.value),readOnly:!!h,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:"false",placeholder:"Type your answer",className:"field mt-10 h-14 w-full px-4 text-center text-[20px] outline-none placeholder:text-[var(--secondary)]",style:{color:"var(--text)",borderColor:h?h.correct?"#34C759":"#FF3B30":"transparent"}}),h&&u.jsx("p",{className:"pop headline mt-3 text-center",style:{color:h.correct?"#34C759":"#FF3B30"},children:h.correct?"Correct!":`It’s ${w.answers[0]}`}),u.jsx("div",{className:"mt-auto grid gap-2",children:u.jsx("button",{className:"btn btn-filled w-full",children:h?n===9?"See my level":"Continue":s.trim()?"Check":"I don’t know"})})]},n)]})}function $m(){const[e,a]=Dm(),[r,l]=q.useState("home"),[t,i]=q.useState([]),[n,o]=q.useState(null),[s,d]=q.useState(0),h=Bm(Date.now()),{count:g,lastDay:f}=e.streak,b=f!=null&&f>=h-1?g:0,k=f===h,w=e.progress[e.lang]||0,_=k?Math.max(0,w-1):w,p=e.from||"en",c=e.lang?xu(_,p,e.lang):null,m=Mm(b),v=()=>{d(j=>j+1),l("test")},z=j=>{const N=j.filter(L=>L.correct).length;if(N>=dt&&!k){const L=f===h-1?g+1:1;a(F=>({...F,streak:{count:L,lastDay:h},progress:{...F.progress,[F.lang]:(F.progress[F.lang]||0)+1}})),o({from:b,to:L,score:N}),l("home");return}i(j),l("result")};let S;return!e.lang||r==="settings"?S=u.jsx(Km,{state:e,onDone:j=>{a(N=>({...N,...j})),l("home")},onCancel:()=>l("home"),onFindLevel:j=>{a(N=>({...N,...j})),l("placement")}}):r==="placement"?S=u.jsx(Um,{from:p,lang:e.lang,currentDay:w,onStart:j=>{a(N=>({...N,progress:{...N.progress,[N.lang]:j}})),l("home")},onBack:()=>l("settings")},`${p}-${e.lang}`):r==="cards"?S=u.jsx(Om,{set:c,fromName:fr.find(j=>j.id===p).name,onTest:v,onBack:()=>l("home")}):r==="test"?S=u.jsx(Wm,{set:c,lang:e.lang,onFinish:z,onBack:()=>l("home")},s):r==="result"?S=u.jsx(Gm,{results:t,practice:k,onRetry:v,onCards:()=>l("cards"),onHome:()=>l("home")}):S=u.jsx(Hm,{state:e,set:c,dayIndex:_,streak:b,passedToday:k,onCards:()=>l("cards"),onTest:v,onSettings:()=>l("settings")}),u.jsxs("div",{className:"app min-h-screen",style:m,children:[S,n&&u.jsx(Vm,{...n,onDone:()=>o(null)})]})}oi.createRoot(document.getElementById("root")).render(u.jsx(Gu.StrictMode,{children:u.jsx($m,{})}));
