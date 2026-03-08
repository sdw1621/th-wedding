(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function r(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(u){if(u.ep)return;u.ep=!0;const f=r(u);fetch(u.href,f)}})();function op(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Wu={exports:{}},To={},Ju={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf;function Ag(){if(tf)return ge;tf=1;var a=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),m=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),L=Symbol.iterator;function B(N){return N===null||typeof N!="object"?null:(N=L&&N[L]||N["@@iterator"],typeof N=="function"?N:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ie=Object.assign,se={};function te(N,z,he){this.props=N,this.context=z,this.refs=se,this.updater=he||W}te.prototype.isReactComponent={},te.prototype.setState=function(N,z){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,z,"setState")},te.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function Me(){}Me.prototype=te.prototype;function Ne(N,z,he){this.props=N,this.context=z,this.refs=se,this.updater=he||W}var be=Ne.prototype=new Me;be.constructor=Ne,ie(be,te.prototype),be.isPureReactComponent=!0;var Ce=Array.isArray,Oe=Object.prototype.hasOwnProperty,Re={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function _(N,z,he){var de,_e={},ve=null,Ve=null;if(z!=null)for(de in z.ref!==void 0&&(Ve=z.ref),z.key!==void 0&&(ve=""+z.key),z)Oe.call(z,de)&&!C.hasOwnProperty(de)&&(_e[de]=z[de]);var Ie=arguments.length-2;if(Ie===1)_e.children=he;else if(1<Ie){for(var Le=Array(Ie),kt=0;kt<Ie;kt++)Le[kt]=arguments[kt+2];_e.children=Le}if(N&&N.defaultProps)for(de in Ie=N.defaultProps,Ie)_e[de]===void 0&&(_e[de]=Ie[de]);return{$$typeof:a,type:N,key:ve,ref:Ve,props:_e,_owner:Re.current}}function I(N,z){return{$$typeof:a,type:N.type,key:z,ref:N.ref,props:N.props,_owner:N._owner}}function P(N){return typeof N=="object"&&N!==null&&N.$$typeof===a}function R(N){var z={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(he){return z[he]})}var V=/\/+/g;function w(N,z){return typeof N=="object"&&N!==null&&N.key!=null?R(""+N.key):z.toString(36)}function ke(N,z,he,de,_e){var ve=typeof N;(ve==="undefined"||ve==="boolean")&&(N=null);var Ve=!1;if(N===null)Ve=!0;else switch(ve){case"string":case"number":Ve=!0;break;case"object":switch(N.$$typeof){case a:case n:Ve=!0}}if(Ve)return Ve=N,_e=_e(Ve),N=de===""?"."+w(Ve,0):de,Ce(_e)?(he="",N!=null&&(he=N.replace(V,"$&/")+"/"),ke(_e,z,he,"",function(kt){return kt})):_e!=null&&(P(_e)&&(_e=I(_e,he+(!_e.key||Ve&&Ve.key===_e.key?"":(""+_e.key).replace(V,"$&/")+"/")+N)),z.push(_e)),1;if(Ve=0,de=de===""?".":de+":",Ce(N))for(var Ie=0;Ie<N.length;Ie++){ve=N[Ie];var Le=de+w(ve,Ie);Ve+=ke(ve,z,he,Le,_e)}else if(Le=B(N),typeof Le=="function")for(N=Le.call(N),Ie=0;!(ve=N.next()).done;)ve=ve.value,Le=de+w(ve,Ie++),Ve+=ke(ve,z,he,Le,_e);else if(ve==="object")throw z=String(N),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return Ve}function ct(N,z,he){if(N==null)return N;var de=[],_e=0;return ke(N,de,"","",function(ve){return z.call(he,ve,_e++)}),de}function It(N){if(N._status===-1){var z=N._result;z=z(),z.then(function(he){(N._status===0||N._status===-1)&&(N._status=1,N._result=he)},function(he){(N._status===0||N._status===-1)&&(N._status=2,N._result=he)}),N._status===-1&&(N._status=0,N._result=z)}if(N._status===1)return N._result.default;throw N._result}var $e={current:null},H={transition:null},oe={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:H,ReactCurrentOwner:Re};function Y(){throw Error("act(...) is not supported in production builds of React.")}return ge.Children={map:ct,forEach:function(N,z,he){ct(N,function(){z.apply(this,arguments)},he)},count:function(N){var z=0;return ct(N,function(){z++}),z},toArray:function(N){return ct(N,function(z){return z})||[]},only:function(N){if(!P(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ge.Component=te,ge.Fragment=r,ge.Profiler=u,ge.PureComponent=Ne,ge.StrictMode=l,ge.Suspense=S,ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,ge.act=Y,ge.cloneElement=function(N,z,he){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var de=ie({},N.props),_e=N.key,ve=N.ref,Ve=N._owner;if(z!=null){if(z.ref!==void 0&&(ve=z.ref,Ve=Re.current),z.key!==void 0&&(_e=""+z.key),N.type&&N.type.defaultProps)var Ie=N.type.defaultProps;for(Le in z)Oe.call(z,Le)&&!C.hasOwnProperty(Le)&&(de[Le]=z[Le]===void 0&&Ie!==void 0?Ie[Le]:z[Le])}var Le=arguments.length-2;if(Le===1)de.children=he;else if(1<Le){Ie=Array(Le);for(var kt=0;kt<Le;kt++)Ie[kt]=arguments[kt+2];de.children=Ie}return{$$typeof:a,type:N.type,key:_e,ref:ve,props:de,_owner:Ve}},ge.createContext=function(N){return N={$$typeof:m,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:f,_context:N},N.Consumer=N},ge.createElement=_,ge.createFactory=function(N){var z=_.bind(null,N);return z.type=N,z},ge.createRef=function(){return{current:null}},ge.forwardRef=function(N){return{$$typeof:v,render:N}},ge.isValidElement=P,ge.lazy=function(N){return{$$typeof:O,_payload:{_status:-1,_result:N},_init:It}},ge.memo=function(N,z){return{$$typeof:x,type:N,compare:z===void 0?null:z}},ge.startTransition=function(N){var z=H.transition;H.transition={};try{N()}finally{H.transition=z}},ge.unstable_act=Y,ge.useCallback=function(N,z){return $e.current.useCallback(N,z)},ge.useContext=function(N){return $e.current.useContext(N)},ge.useDebugValue=function(){},ge.useDeferredValue=function(N){return $e.current.useDeferredValue(N)},ge.useEffect=function(N,z){return $e.current.useEffect(N,z)},ge.useId=function(){return $e.current.useId()},ge.useImperativeHandle=function(N,z,he){return $e.current.useImperativeHandle(N,z,he)},ge.useInsertionEffect=function(N,z){return $e.current.useInsertionEffect(N,z)},ge.useLayoutEffect=function(N,z){return $e.current.useLayoutEffect(N,z)},ge.useMemo=function(N,z){return $e.current.useMemo(N,z)},ge.useReducer=function(N,z,he){return $e.current.useReducer(N,z,he)},ge.useRef=function(N){return $e.current.useRef(N)},ge.useState=function(N){return $e.current.useState(N)},ge.useSyncExternalStore=function(N,z,he){return $e.current.useSyncExternalStore(N,z,he)},ge.useTransition=function(){return $e.current.useTransition()},ge.version="18.3.1",ge}var nf;function Sc(){return nf||(nf=1,Ju.exports=Ag()),Ju.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rf;function Rg(){if(rf)return To;rf=1;var a=Sc(),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,u=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function m(v,S,x){var O,L={},B=null,W=null;x!==void 0&&(B=""+x),S.key!==void 0&&(B=""+S.key),S.ref!==void 0&&(W=S.ref);for(O in S)l.call(S,O)&&!f.hasOwnProperty(O)&&(L[O]=S[O]);if(v&&v.defaultProps)for(O in S=v.defaultProps,S)L[O]===void 0&&(L[O]=S[O]);return{$$typeof:n,type:v,key:B,ref:W,props:L,_owner:u.current}}return To.Fragment=r,To.jsx=m,To.jsxs=m,To}var sf;function Pg(){return sf||(sf=1,Wu.exports=Rg()),Wu.exports}var T=Pg(),me=Sc();const Cg=op(me);var Za={},Yu={exports:{}},jt={},Xu={exports:{}},Zu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var of;function kg(){return of||(of=1,(function(a){function n(H,oe){var Y=H.length;H.push(oe);e:for(;0<Y;){var N=Y-1>>>1,z=H[N];if(0<u(z,oe))H[N]=oe,H[Y]=z,Y=N;else break e}}function r(H){return H.length===0?null:H[0]}function l(H){if(H.length===0)return null;var oe=H[0],Y=H.pop();if(Y!==oe){H[0]=Y;e:for(var N=0,z=H.length,he=z>>>1;N<he;){var de=2*(N+1)-1,_e=H[de],ve=de+1,Ve=H[ve];if(0>u(_e,Y))ve<z&&0>u(Ve,_e)?(H[N]=Ve,H[ve]=Y,N=ve):(H[N]=_e,H[de]=Y,N=de);else if(ve<z&&0>u(Ve,Y))H[N]=Ve,H[ve]=Y,N=ve;else break e}}return oe}function u(H,oe){var Y=H.sortIndex-oe.sortIndex;return Y!==0?Y:H.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var m=Date,v=m.now();a.unstable_now=function(){return m.now()-v}}var S=[],x=[],O=1,L=null,B=3,W=!1,ie=!1,se=!1,te=typeof setTimeout=="function"?setTimeout:null,Me=typeof clearTimeout=="function"?clearTimeout:null,Ne=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function be(H){for(var oe=r(x);oe!==null;){if(oe.callback===null)l(x);else if(oe.startTime<=H)l(x),oe.sortIndex=oe.expirationTime,n(S,oe);else break;oe=r(x)}}function Ce(H){if(se=!1,be(H),!ie)if(r(S)!==null)ie=!0,It(Oe);else{var oe=r(x);oe!==null&&$e(Ce,oe.startTime-H)}}function Oe(H,oe){ie=!1,se&&(se=!1,Me(_),_=-1),W=!0;var Y=B;try{for(be(oe),L=r(S);L!==null&&(!(L.expirationTime>oe)||H&&!R());){var N=L.callback;if(typeof N=="function"){L.callback=null,B=L.priorityLevel;var z=N(L.expirationTime<=oe);oe=a.unstable_now(),typeof z=="function"?L.callback=z:L===r(S)&&l(S),be(oe)}else l(S);L=r(S)}if(L!==null)var he=!0;else{var de=r(x);de!==null&&$e(Ce,de.startTime-oe),he=!1}return he}finally{L=null,B=Y,W=!1}}var Re=!1,C=null,_=-1,I=5,P=-1;function R(){return!(a.unstable_now()-P<I)}function V(){if(C!==null){var H=a.unstable_now();P=H;var oe=!0;try{oe=C(!0,H)}finally{oe?w():(Re=!1,C=null)}}else Re=!1}var w;if(typeof Ne=="function")w=function(){Ne(V)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,ct=ke.port2;ke.port1.onmessage=V,w=function(){ct.postMessage(null)}}else w=function(){te(V,0)};function It(H){C=H,Re||(Re=!0,w())}function $e(H,oe){_=te(function(){H(a.unstable_now())},oe)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(H){H.callback=null},a.unstable_continueExecution=function(){ie||W||(ie=!0,It(Oe))},a.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<H?Math.floor(1e3/H):5},a.unstable_getCurrentPriorityLevel=function(){return B},a.unstable_getFirstCallbackNode=function(){return r(S)},a.unstable_next=function(H){switch(B){case 1:case 2:case 3:var oe=3;break;default:oe=B}var Y=B;B=oe;try{return H()}finally{B=Y}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(H,oe){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Y=B;B=H;try{return oe()}finally{B=Y}},a.unstable_scheduleCallback=function(H,oe,Y){var N=a.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?N+Y:N):Y=N,H){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=Y+z,H={id:O++,callback:oe,priorityLevel:H,startTime:Y,expirationTime:z,sortIndex:-1},Y>N?(H.sortIndex=Y,n(x,H),r(S)===null&&H===r(x)&&(se?(Me(_),_=-1):se=!0,$e(Ce,Y-N))):(H.sortIndex=z,n(S,H),ie||W||(ie=!0,It(Oe))),H},a.unstable_shouldYield=R,a.unstable_wrapCallback=function(H){var oe=B;return function(){var Y=B;B=oe;try{return H.apply(this,arguments)}finally{B=Y}}}})(Zu)),Zu}var af;function Vg(){return af||(af=1,Xu.exports=kg()),Xu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lf;function Ng(){if(lf)return jt;lf=1;var a=Sc(),n=Vg();function r(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,u={};function f(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(u[e]=t,e=0;e<t.length;e++)l.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,O={},L={};function B(e){return S.call(L,e)?!0:S.call(O,e)?!1:x.test(e)?L[e]=!0:(O[e]=!0,!1)}function W(e,t,s,o){if(s!==null&&s.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ie(e,t,s,o){if(t===null||typeof t>"u"||W(e,t,s,o))return!0;if(o)return!1;if(s!==null)switch(s.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function se(e,t,s,o,c,h,g){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=e,this.type=t,this.sanitizeURL=h,this.removeEmptyString=g}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new se(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new se(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new se(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){te[e]=new se(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){te[e]=new se(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){te[e]=new se(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){te[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Me=/[\-:]([a-z])/g;function Ne(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Me,Ne);te[t]=new se(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Me,Ne);te[t]=new se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Me,Ne);te[t]=new se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){te[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)}),te.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){te[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function be(e,t,s,o){var c=te.hasOwnProperty(t)?te[t]:null;(c!==null?c.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ie(t,s,c,o)&&(s=null),o||c===null?B(t)&&(s===null?e.removeAttribute(t):e.setAttribute(t,""+s)):c.mustUseProperty?e[c.propertyName]=s===null?c.type===3?!1:"":s:(t=c.attributeName,o=c.attributeNamespace,s===null?e.removeAttribute(t):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,o?e.setAttributeNS(o,t,s):e.setAttribute(t,s))))}var Ce=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oe=Symbol.for("react.element"),Re=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),R=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),ke=Symbol.for("react.suspense_list"),ct=Symbol.for("react.memo"),It=Symbol.for("react.lazy"),$e=Symbol.for("react.offscreen"),H=Symbol.iterator;function oe(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,N;function z(e){if(N===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);N=t&&t[1]||""}return`
`+N+e}var he=!1;function de(e,t){if(!e||he)return"";he=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(F){var o=F}Reflect.construct(e,[],t)}else{try{t.call()}catch(F){o=F}e.call(t.prototype)}else{try{throw Error()}catch(F){o=F}e()}}catch(F){if(F&&o&&typeof F.stack=="string"){for(var c=F.stack.split(`
`),h=o.stack.split(`
`),g=c.length-1,E=h.length-1;1<=g&&0<=E&&c[g]!==h[E];)E--;for(;1<=g&&0<=E;g--,E--)if(c[g]!==h[E]){if(g!==1||E!==1)do if(g--,E--,0>E||c[g]!==h[E]){var A=`
`+c[g].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=g&&0<=E);break}}}finally{he=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?z(e):""}function _e(e){switch(e.tag){case 5:return z(e.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return e=de(e.type,!1),e;case 11:return e=de(e.type.render,!1),e;case 1:return e=de(e.type,!0),e;default:return""}}function ve(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case Re:return"Portal";case I:return"Profiler";case _:return"StrictMode";case w:return"Suspense";case ke:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case R:return(e.displayName||"Context")+".Consumer";case P:return(e._context.displayName||"Context")+".Provider";case V:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ct:return t=e.displayName||null,t!==null?t:ve(e.type)||"Memo";case It:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}function Ve(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(t);case 8:return t===_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ie(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Le(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kt(e){var t=Le(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(g){o=""+g,h.call(this,g)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(g){o=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function As(e){e._valueTracker||(e._valueTracker=kt(e))}function Pi(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var s=t.getValue(),o="";return e&&(o=Le(e)?e.checked?"true":"false":e.value),e=o,e!==s?(t.setValue(e),!0):!1}function cr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rs(e,t){var s=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function Fo(e,t){var s=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;s=Ie(t.value!=null?t.value:s),e._wrapperState={initialChecked:o,initialValue:s,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ps(e,t){t=t.checked,t!=null&&be(e,"checked",t,!1)}function Gr(e,t){Ps(e,t);var s=Ie(t.value),o=t.type;if(s!=null)o==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?et(e,t.type,s):t.hasOwnProperty("defaultValue")&&et(e,t.type,Ie(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ci(e,t,s){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,s||t===e.value||(e.value=t),e.defaultValue=t}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function et(e,t,s){(t!=="number"||cr(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var Ye=Array.isArray;function cn(e,t,s,o){if(e=e.options,t){t={};for(var c=0;c<s.length;c++)t["$"+s[c]]=!0;for(s=0;s<e.length;s++)c=t.hasOwnProperty("$"+e[s].value),e[s].selected!==c&&(e[s].selected=c),c&&o&&(e[s].defaultSelected=!0)}else{for(s=""+Ie(s),t=null,c=0;c<e.length;c++){if(e[c].value===s){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function ki(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vi(e,t){var s=t.value;if(s==null){if(s=t.children,t=t.defaultValue,s!=null){if(t!=null)throw Error(r(92));if(Ye(s)){if(1<s.length)throw Error(r(93));s=s[0]}t=s}t==null&&(t=""),s=t}e._wrapperState={initialValue:Ie(s)}}function jo(e,t){var s=Ie(t.value),o=Ie(t.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),t.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),o!=null&&(e.defaultValue=""+o)}function hr(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ni(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ni(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var dr,Bo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,s,o,c){MSApp.execUnsafeLocalFunction(function(){return e(t,s,o,c)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(dr=dr||document.createElement("div"),dr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=dr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kr(e,t){if(t){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=t;return}}e.textContent=t}var fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zo=["Webkit","ms","Moz","O"];Object.keys(fr).forEach(function(e){zo.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fr[t]=fr[e]})});function pr(e,t,s){return t==null||typeof t=="boolean"||t===""?"":s||typeof t!="number"||t===0||fr.hasOwnProperty(e)&&fr[e]?(""+t).trim():t+"px"}function ks(e,t){e=e.style;for(var s in t)if(t.hasOwnProperty(s)){var o=s.indexOf("--")===0,c=pr(s,t[s],o);s==="float"&&(s="cssFloat"),o?e.setProperty(s,c):e[s]=c}}var bi=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hn(e,t){if(t){if(bi[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!="object")throw Error(r(62))}}function Vs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mr=null;function Ns(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qn=null,$n=null,He=null;function Di(e){if(e=ao(e)){if(typeof qn!="function")throw Error(r(280));var t=e.stateNode;t&&(t=pa(t),qn(e.stateNode,e.type,t))}}function gr(e){$n?He?He.push(e):He=[e]:$n=e}function yr(){if($n){var e=$n,t=He;if(He=$n=null,Di(e),t)for(e=0;e<t.length;e++)Di(t[e])}}function Uo(e,t){return e(t)}function qo(){}var En=!1;function $o(e,t,s){if(En)return e(t,s);En=!0;try{return Uo(e,t,s)}finally{En=!1,($n!==null||He!==null)&&(qo(),yr())}}function Qr(e,t){var s=e.stateNode;if(s===null)return null;var o=pa(s);if(o===null)return null;s=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(r(231,t,typeof s));return s}var _r=!1;if(v)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){_r=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{_r=!1}function Go(e,t,s,o,c,h,g,E,A){var F=Array.prototype.slice.call(arguments,3);try{t.apply(s,F)}catch(q){this.onError(q)}}var Gn=!1,In=null,bs=!1,en=null,Ko={onError:function(e){Gn=!0,In=e}};function Qo(e,t,s,o,c,h,g,E,A){Gn=!1,In=null,Go.apply(Ko,arguments)}function Mi(e,t,s,o,c,h,g,E,A){if(Qo.apply(this,arguments),Gn){if(Gn){var F=In;Gn=!1,In=null}else throw Error(r(198));bs||(bs=!0,en=F)}}function dn(e){var t=e,s=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(s=t.return),e=t.return;while(e)}return t.tag===3?s:null}function Oi(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ho(e){if(dn(e)!==e)throw Error(r(188))}function Wo(e){var t=e.alternate;if(!t){if(t=dn(e),t===null)throw Error(r(188));return t!==e?null:e}for(var s=e,o=t;;){var c=s.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){s=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===s)return Ho(c),e;if(h===o)return Ho(c),t;h=h.sibling}throw Error(r(188))}if(s.return!==o.return)s=c,o=h;else{for(var g=!1,E=c.child;E;){if(E===s){g=!0,s=c,o=h;break}if(E===o){g=!0,o=c,s=h;break}E=E.sibling}if(!g){for(E=h.child;E;){if(E===s){g=!0,s=h,o=c;break}if(E===o){g=!0,o=h,s=c;break}E=E.sibling}if(!g)throw Error(r(189))}}if(s.alternate!==o)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?e:t}function Jo(e){return e=Wo(e),e!==null?Hr(e):null}function Hr(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Hr(e);if(t!==null)return t;e=e.sibling}return null}var Li=n.unstable_scheduleCallback,Ds=n.unstable_cancelCallback,Wr=n.unstable_shouldYield,Kn=n.unstable_requestPaint,ze=n.unstable_now,Al=n.unstable_getCurrentPriorityLevel,Ms=n.unstable_ImmediatePriority,Fi=n.unstable_UserBlockingPriority,Jr=n.unstable_NormalPriority,ji=n.unstable_LowPriority,Os=n.unstable_IdlePriority,Yr=null,Ut=null;function Yo(e){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(Yr,e,void 0,(e.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:Xr,Tn=Math.log,tn=Math.LN2;function Xr(e){return e>>>=0,e===0?32:31-(Tn(e)/tn|0)|0}var Sn=64,wr=4194304;function Pe(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qn(e,t){var s=e.pendingLanes;if(s===0)return 0;var o=0,c=e.suspendedLanes,h=e.pingedLanes,g=s&268435455;if(g!==0){var E=g&~c;E!==0?o=Pe(E):(h&=g,h!==0&&(o=Pe(h)))}else g=s&~c,g!==0?o=Pe(g):h!==0&&(o=Pe(h));if(o===0)return 0;if(t!==0&&t!==o&&(t&c)===0&&(c=o&-o,h=t&-t,c>=h||c===16&&(h&4194240)!==0))return t;if((o&4)!==0&&(o|=s&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)s=31-qt(t),c=1<<s,o|=e[s],t&=~c;return o}function Zr(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function es(e,t){for(var s=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes;0<h;){var g=31-qt(h),E=1<<g,A=c[g];A===-1?((E&s)===0||(E&o)!==0)&&(c[g]=Zr(E,t)):A<=t&&(e.expiredLanes|=E),h&=~E}}function Bi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zi(){var e=Sn;return Sn<<=1,(Sn&4194240)===0&&(Sn=64),e}function Ui(e){for(var t=[],s=0;31>s;s++)t.push(e);return t}function ts(e,t,s){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qt(t),e[t]=s}function Rl(e,t){var s=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<s;){var c=31-qt(s),h=1<<c;t[c]=0,o[c]=-1,e[c]=-1,s&=~h}}function qi(e,t){var s=e.entangledLanes|=t;for(e=e.entanglements;s;){var o=31-qt(s),c=1<<o;c&t|e[o]&t&&(e[o]|=t),s&=~c}}var we=0;function xn(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var $i,Ls,Gi,Ki,Qi,An=!1,Fs=[],Rn=null,Pn=null,yt=null,ns=new Map,Hn=new Map,$t=[],Xo="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Er(e,t){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":yt=null;break;case"pointerover":case"pointerout":ns.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(t.pointerId)}}function fn(e,t,s,o,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:t,domEventName:s,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},t!==null&&(t=ao(t),t!==null&&Ls(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function Zo(e,t,s,o,c){switch(t){case"focusin":return Rn=fn(Rn,e,t,s,o,c),!0;case"dragenter":return Pn=fn(Pn,e,t,s,o,c),!0;case"mouseover":return yt=fn(yt,e,t,s,o,c),!0;case"pointerover":var h=c.pointerId;return ns.set(h,fn(ns.get(h)||null,e,t,s,o,c)),!0;case"gotpointercapture":return h=c.pointerId,Hn.set(h,fn(Hn.get(h)||null,e,t,s,o,c)),!0}return!1}function js(e){var t=os(e.target);if(t!==null){var s=dn(t);if(s!==null){if(t=s.tag,t===13){if(t=Oi(s),t!==null){e.blockedOn=t,Qi(e.priority,function(){Gi(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fe(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var s=Bs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);mr=o,s.target.dispatchEvent(o),mr=null}else return t=ao(s),t!==null&&Ls(t),e.blockedOn=s,!1;t.shift()}return!0}function ea(e,t,s){Fe(e)&&s.delete(t)}function Pl(){An=!1,Rn!==null&&Fe(Rn)&&(Rn=null),Pn!==null&&Fe(Pn)&&(Pn=null),yt!==null&&Fe(yt)&&(yt=null),ns.forEach(ea),Hn.forEach(ea)}function Ir(e,t){e.blockedOn===t&&(e.blockedOn=null,An||(An=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Pl)))}function Tr(e){function t(c){return Ir(c,e)}if(0<Fs.length){Ir(Fs[0],e);for(var s=1;s<Fs.length;s++){var o=Fs[s];o.blockedOn===e&&(o.blockedOn=null)}}for(Rn!==null&&Ir(Rn,e),Pn!==null&&Ir(Pn,e),yt!==null&&Ir(yt,e),ns.forEach(t),Hn.forEach(t),s=0;s<$t.length;s++)o=$t[s],o.blockedOn===e&&(o.blockedOn=null);for(;0<$t.length&&(s=$t[0],s.blockedOn===null);)js(s),s.blockedOn===null&&$t.shift()}var Wn=Ce.ReactCurrentBatchConfig,Jn=!0;function Cn(e,t,s,o){var c=we,h=Wn.transition;Wn.transition=null;try{we=1,Hi(e,t,s,o)}finally{we=c,Wn.transition=h}}function ta(e,t,s,o){var c=we,h=Wn.transition;Wn.transition=null;try{we=4,Hi(e,t,s,o)}finally{we=c,Wn.transition=h}}function Hi(e,t,s,o){if(Jn){var c=Bs(e,t,s,o);if(c===null)jl(e,t,o,kn,s),Er(e,o);else if(Zo(c,e,t,s,o))o.stopPropagation();else if(Er(e,o),t&4&&-1<Xo.indexOf(e)){for(;c!==null;){var h=ao(c);if(h!==null&&$i(h),h=Bs(e,t,s,o),h===null&&jl(e,t,o,kn,s),h===c)break;c=h}c!==null&&o.stopPropagation()}else jl(e,t,o,null,s)}}var kn=null;function Bs(e,t,s,o){if(kn=null,e=Ns(o),e=os(e),e!==null)if(t=dn(e),t===null)e=null;else if(s=t.tag,s===13){if(e=Oi(t),e!==null)return e;e=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return kn=e,null}function zs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Al()){case Ms:return 1;case Fi:return 4;case Jr:case ji:return 16;case Os:return 536870912;default:return 16}default:return 16}}var Gt=null,Us=null,Yn=null;function na(){if(Yn)return Yn;var e,t=Us,s=t.length,o,c="value"in Gt?Gt.value:Gt.textContent,h=c.length;for(e=0;e<s&&t[e]===c[e];e++);var g=s-e;for(o=1;o<=g&&t[s-o]===c[h-o];o++);return Yn=c.slice(e,1<o?1-o:void 0)}function rs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vn(){return!0}function Wi(){return!1}function Tt(e){function t(s,o,c,h,g){this._reactName=s,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=g,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(s=e[E],this[E]=s?s(h):h[E]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Vn:Wi,this.isPropagationStopped=Wi,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Vn)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Vn)},persist:function(){},isPersistent:Vn}),t}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ss=Tt(Nn),Sr=Y({},Nn,{view:0,detail:0}),qs=Tt(Sr),$s,Gs,Kt,is=Y({},Sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ce,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kt&&(Kt&&e.type==="mousemove"?($s=e.screenX-Kt.screenX,Gs=e.screenY-Kt.screenY):Gs=$s=0,Kt=e),$s)},movementY:function(e){return"movementY"in e?e.movementY:Gs}}),Ji=Tt(is),ra=Y({},is,{dataTransfer:0}),sa=Tt(ra),Ks=Y({},Sr,{relatedTarget:0}),_t=Tt(Ks),ia=Y({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),oa=Tt(ia),xr=Y({},Nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),i=Tt(xr),d=Y({},Nn,{data:0}),p=Tt(d),y={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=j[e])?!!t[e]:!1}function ce(){return Q}var Xe=Y({},Sr,{key:function(e){if(e.key){var t=y[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=rs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?D[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ce,charCode:function(e){return e.type==="keypress"?rs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),De=Tt(Xe),tt=Y({},is,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qt=Tt(tt),Xn=Y({},Sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ce}),bn=Tt(Xn),Dn=Y({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qs=Tt(Dn),Yi=Y({},is,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wm=Tt(Yi),Em=[9,13,27,32],Cl=v&&"CompositionEvent"in window,Xi=null;v&&"documentMode"in document&&(Xi=document.documentMode);var Im=v&&"TextEvent"in window&&!Xi,Qc=v&&(!Cl||Xi&&8<Xi&&11>=Xi),Hc=" ",Wc=!1;function Jc(e,t){switch(e){case"keyup":return Em.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hs=!1;function Tm(e,t){switch(e){case"compositionend":return Yc(t);case"keypress":return t.which!==32?null:(Wc=!0,Hc);case"textInput":return e=t.data,e===Hc&&Wc?null:e;default:return null}}function Sm(e,t){if(Hs)return e==="compositionend"||!Cl&&Jc(e,t)?(e=na(),Yn=Us=Gt=null,Hs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qc&&t.locale!=="ko"?null:t.data;default:return null}}var xm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xm[e.type]:t==="textarea"}function Zc(e,t,s,o){gr(o),t=ha(t,"onChange"),0<t.length&&(s=new ss("onChange","change",null,s,o),e.push({event:s,listeners:t}))}var Zi=null,eo=null;function Am(e){yh(e,0)}function aa(e){var t=Zs(e);if(Pi(t))return e}function Rm(e,t){if(e==="change")return t}var eh=!1;if(v){var kl;if(v){var Vl="oninput"in document;if(!Vl){var th=document.createElement("div");th.setAttribute("oninput","return;"),Vl=typeof th.oninput=="function"}kl=Vl}else kl=!1;eh=kl&&(!document.documentMode||9<document.documentMode)}function nh(){Zi&&(Zi.detachEvent("onpropertychange",rh),eo=Zi=null)}function rh(e){if(e.propertyName==="value"&&aa(eo)){var t=[];Zc(t,eo,e,Ns(e)),$o(Am,t)}}function Pm(e,t,s){e==="focusin"?(nh(),Zi=t,eo=s,Zi.attachEvent("onpropertychange",rh)):e==="focusout"&&nh()}function Cm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return aa(eo)}function km(e,t){if(e==="click")return aa(t)}function Vm(e,t){if(e==="input"||e==="change")return aa(t)}function Nm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pn=typeof Object.is=="function"?Object.is:Nm;function to(e,t){if(pn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var s=Object.keys(e),o=Object.keys(t);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var c=s[o];if(!S.call(t,c)||!pn(e[c],t[c]))return!1}return!0}function sh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ih(e,t){var s=sh(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=t&&o>=t)return{node:s,offset:t-e};e=o}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=sh(s)}}function oh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?oh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ah(){for(var e=window,t=cr();t instanceof e.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)e=t.contentWindow;else break;t=cr(e.document)}return t}function Nl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function bm(e){var t=ah(),s=e.focusedElem,o=e.selectionRange;if(t!==s&&s&&s.ownerDocument&&oh(s.ownerDocument.documentElement,s)){if(o!==null&&Nl(s)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in s)s.selectionStart=t,s.selectionEnd=Math.min(e,s.value.length);else if(e=(t=s.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var c=s.textContent.length,h=Math.min(o.start,c);o=o.end===void 0?h:Math.min(o.end,c),!e.extend&&h>o&&(c=o,o=h,h=c),c=ih(s,h);var g=ih(s,o);c&&g&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==g.node||e.focusOffset!==g.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),e.removeAllRanges(),h>o?(e.addRange(t),e.extend(g.node,g.offset)):(t.setEnd(g.node,g.offset),e.addRange(t)))}}for(t=[],e=s;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<t.length;s++)e=t[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Dm=v&&"documentMode"in document&&11>=document.documentMode,Ws=null,bl=null,no=null,Dl=!1;function lh(e,t,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Dl||Ws==null||Ws!==cr(o)||(o=Ws,"selectionStart"in o&&Nl(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),no&&to(no,o)||(no=o,o=ha(bl,"onSelect"),0<o.length&&(t=new ss("onSelect","select",null,t,s),e.push({event:t,listeners:o}),t.target=Ws)))}function la(e,t){var s={};return s[e.toLowerCase()]=t.toLowerCase(),s["Webkit"+e]="webkit"+t,s["Moz"+e]="moz"+t,s}var Js={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionend:la("Transition","TransitionEnd")},Ml={},uh={};v&&(uh=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function ua(e){if(Ml[e])return Ml[e];if(!Js[e])return e;var t=Js[e],s;for(s in t)if(t.hasOwnProperty(s)&&s in uh)return Ml[e]=t[s];return e}var ch=ua("animationend"),hh=ua("animationiteration"),dh=ua("animationstart"),fh=ua("transitionend"),ph=new Map,mh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(e,t){ph.set(e,t),f(t,[e])}for(var Ol=0;Ol<mh.length;Ol++){var Ll=mh[Ol],Mm=Ll.toLowerCase(),Om=Ll[0].toUpperCase()+Ll.slice(1);Ar(Mm,"on"+Om)}Ar(ch,"onAnimationEnd"),Ar(hh,"onAnimationIteration"),Ar(dh,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(fh,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lm=new Set("cancel close invalid load scroll toggle".split(" ").concat(ro));function gh(e,t,s){var o=e.type||"unknown-event";e.currentTarget=s,Mi(o,t,void 0,e),e.currentTarget=null}function yh(e,t){t=(t&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],c=o.event;o=o.listeners;e:{var h=void 0;if(t)for(var g=o.length-1;0<=g;g--){var E=o[g],A=E.instance,F=E.currentTarget;if(E=E.listener,A!==h&&c.isPropagationStopped())break e;gh(c,E,F),h=A}else for(g=0;g<o.length;g++){if(E=o[g],A=E.instance,F=E.currentTarget,E=E.listener,A!==h&&c.isPropagationStopped())break e;gh(c,E,F),h=A}}}if(bs)throw e=en,bs=!1,en=null,e}function Ue(e,t){var s=t[Gl];s===void 0&&(s=t[Gl]=new Set);var o=e+"__bubble";s.has(o)||(_h(t,e,2,!1),s.add(o))}function Fl(e,t,s){var o=0;t&&(o|=4),_h(s,e,o,t)}var ca="_reactListening"+Math.random().toString(36).slice(2);function so(e){if(!e[ca]){e[ca]=!0,l.forEach(function(s){s!=="selectionchange"&&(Lm.has(s)||Fl(s,!1,e),Fl(s,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ca]||(t[ca]=!0,Fl("selectionchange",!1,t))}}function _h(e,t,s,o){switch(zs(t)){case 1:var c=Cn;break;case 4:c=ta;break;default:c=Hi}s=c.bind(null,t,s,e),c=void 0,!_r||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(t,s,{capture:!0,passive:c}):e.addEventListener(t,s,!0):c!==void 0?e.addEventListener(t,s,{passive:c}):e.addEventListener(t,s,!1)}function jl(e,t,s,o,c){var h=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var g=o.tag;if(g===3||g===4){var E=o.stateNode.containerInfo;if(E===c||E.nodeType===8&&E.parentNode===c)break;if(g===4)for(g=o.return;g!==null;){var A=g.tag;if((A===3||A===4)&&(A=g.stateNode.containerInfo,A===c||A.nodeType===8&&A.parentNode===c))return;g=g.return}for(;E!==null;){if(g=os(E),g===null)return;if(A=g.tag,A===5||A===6){o=h=g;continue e}E=E.parentNode}}o=o.return}$o(function(){var F=h,q=Ns(s),$=[];e:{var U=ph.get(e);if(U!==void 0){var J=ss,Z=e;switch(e){case"keypress":if(rs(s)===0)break e;case"keydown":case"keyup":J=De;break;case"focusin":Z="focus",J=_t;break;case"focusout":Z="blur",J=_t;break;case"beforeblur":case"afterblur":J=_t;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=Ji;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=sa;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=bn;break;case ch:case hh:case dh:J=oa;break;case fh:J=Qs;break;case"scroll":J=qs;break;case"wheel":J=wm;break;case"copy":case"cut":case"paste":J=i;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=Qt}var ne=(t&4)!==0,Ze=!ne&&e==="scroll",b=ne?U!==null?U+"Capture":null:U;ne=[];for(var k=F,M;k!==null;){M=k;var K=M.stateNode;if(M.tag===5&&K!==null&&(M=K,b!==null&&(K=Qr(k,b),K!=null&&ne.push(io(k,K,M)))),Ze)break;k=k.return}0<ne.length&&(U=new J(U,Z,null,s,q),$.push({event:U,listeners:ne}))}}if((t&7)===0){e:{if(U=e==="mouseover"||e==="pointerover",J=e==="mouseout"||e==="pointerout",U&&s!==mr&&(Z=s.relatedTarget||s.fromElement)&&(os(Z)||Z[Zn]))break e;if((J||U)&&(U=q.window===q?q:(U=q.ownerDocument)?U.defaultView||U.parentWindow:window,J?(Z=s.relatedTarget||s.toElement,J=F,Z=Z?os(Z):null,Z!==null&&(Ze=dn(Z),Z!==Ze||Z.tag!==5&&Z.tag!==6)&&(Z=null)):(J=null,Z=F),J!==Z)){if(ne=Ji,K="onMouseLeave",b="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Qt,K="onPointerLeave",b="onPointerEnter",k="pointer"),Ze=J==null?U:Zs(J),M=Z==null?U:Zs(Z),U=new ne(K,k+"leave",J,s,q),U.target=Ze,U.relatedTarget=M,K=null,os(q)===F&&(ne=new ne(b,k+"enter",Z,s,q),ne.target=M,ne.relatedTarget=Ze,K=ne),Ze=K,J&&Z)t:{for(ne=J,b=Z,k=0,M=ne;M;M=Ys(M))k++;for(M=0,K=b;K;K=Ys(K))M++;for(;0<k-M;)ne=Ys(ne),k--;for(;0<M-k;)b=Ys(b),M--;for(;k--;){if(ne===b||b!==null&&ne===b.alternate)break t;ne=Ys(ne),b=Ys(b)}ne=null}else ne=null;J!==null&&vh($,U,J,ne,!1),Z!==null&&Ze!==null&&vh($,Ze,Z,ne,!0)}}e:{if(U=F?Zs(F):window,J=U.nodeName&&U.nodeName.toLowerCase(),J==="select"||J==="input"&&U.type==="file")var re=Rm;else if(Xc(U))if(eh)re=Vm;else{re=Cm;var ae=Pm}else(J=U.nodeName)&&J.toLowerCase()==="input"&&(U.type==="checkbox"||U.type==="radio")&&(re=km);if(re&&(re=re(e,F))){Zc($,re,s,q);break e}ae&&ae(e,U,F),e==="focusout"&&(ae=U._wrapperState)&&ae.controlled&&U.type==="number"&&et(U,"number",U.value)}switch(ae=F?Zs(F):window,e){case"focusin":(Xc(ae)||ae.contentEditable==="true")&&(Ws=ae,bl=F,no=null);break;case"focusout":no=bl=Ws=null;break;case"mousedown":Dl=!0;break;case"contextmenu":case"mouseup":case"dragend":Dl=!1,lh($,s,q);break;case"selectionchange":if(Dm)break;case"keydown":case"keyup":lh($,s,q)}var le;if(Cl)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else Hs?Jc(e,s)&&(ue="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ue="onCompositionStart");ue&&(Qc&&s.locale!=="ko"&&(Hs||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&Hs&&(le=na()):(Gt=q,Us="value"in Gt?Gt.value:Gt.textContent,Hs=!0)),ae=ha(F,ue),0<ae.length&&(ue=new p(ue,e,null,s,q),$.push({event:ue,listeners:ae}),le?ue.data=le:(le=Yc(s),le!==null&&(ue.data=le)))),(le=Im?Tm(e,s):Sm(e,s))&&(F=ha(F,"onBeforeInput"),0<F.length&&(q=new p("onBeforeInput","beforeinput",null,s,q),$.push({event:q,listeners:F}),q.data=le))}yh($,t)})}function io(e,t,s){return{instance:e,listener:t,currentTarget:s}}function ha(e,t){for(var s=t+"Capture",o=[];e!==null;){var c=e,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Qr(e,s),h!=null&&o.unshift(io(e,h,c)),h=Qr(e,t),h!=null&&o.push(io(e,h,c))),e=e.return}return o}function Ys(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vh(e,t,s,o,c){for(var h=t._reactName,g=[];s!==null&&s!==o;){var E=s,A=E.alternate,F=E.stateNode;if(A!==null&&A===o)break;E.tag===5&&F!==null&&(E=F,c?(A=Qr(s,h),A!=null&&g.unshift(io(s,A,E))):c||(A=Qr(s,h),A!=null&&g.push(io(s,A,E)))),s=s.return}g.length!==0&&e.push({event:t,listeners:g})}var Fm=/\r\n?/g,jm=/\u0000|\uFFFD/g;function wh(e){return(typeof e=="string"?e:""+e).replace(Fm,`
`).replace(jm,"")}function da(e,t,s){if(t=wh(t),wh(e)!==t&&s)throw Error(r(425))}function fa(){}var Bl=null,zl=null;function Ul(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ql=typeof setTimeout=="function"?setTimeout:void 0,Bm=typeof clearTimeout=="function"?clearTimeout:void 0,Eh=typeof Promise=="function"?Promise:void 0,zm=typeof queueMicrotask=="function"?queueMicrotask:typeof Eh<"u"?function(e){return Eh.resolve(null).then(e).catch(Um)}:ql;function Um(e){setTimeout(function(){throw e})}function $l(e,t){var s=t,o=0;do{var c=s.nextSibling;if(e.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(o===0){e.removeChild(c),Tr(t);return}o--}else s!=="$"&&s!=="$?"&&s!=="$!"||o++;s=c}while(s);Tr(t)}function Rr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ih(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(t===0)return e;t--}else s==="/$"&&t++}e=e.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),Mn="__reactFiber$"+Xs,oo="__reactProps$"+Xs,Zn="__reactContainer$"+Xs,Gl="__reactEvents$"+Xs,qm="__reactListeners$"+Xs,$m="__reactHandles$"+Xs;function os(e){var t=e[Mn];if(t)return t;for(var s=e.parentNode;s;){if(t=s[Zn]||s[Mn]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(e=Ih(e);e!==null;){if(s=e[Mn])return s;e=Ih(e)}return t}e=s,s=e.parentNode}return null}function ao(e){return e=e[Mn]||e[Zn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zs(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function pa(e){return e[oo]||null}var Kl=[],ei=-1;function Pr(e){return{current:e}}function qe(e){0>ei||(e.current=Kl[ei],Kl[ei]=null,ei--)}function Be(e,t){ei++,Kl[ei]=e.current,e.current=t}var Cr={},St=Pr(Cr),Dt=Pr(!1),as=Cr;function ti(e,t){var s=e.type.contextTypes;if(!s)return Cr;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in s)c[h]=t[h];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function Mt(e){return e=e.childContextTypes,e!=null}function ma(){qe(Dt),qe(St)}function Th(e,t,s){if(St.current!==Cr)throw Error(r(168));Be(St,t),Be(Dt,s)}function Sh(e,t,s){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return s;o=o.getChildContext();for(var c in o)if(!(c in t))throw Error(r(108,Ve(e)||"Unknown",c));return Y({},s,o)}function ga(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cr,as=St.current,Be(St,e),Be(Dt,Dt.current),!0}function xh(e,t,s){var o=e.stateNode;if(!o)throw Error(r(169));s?(e=Sh(e,t,as),o.__reactInternalMemoizedMergedChildContext=e,qe(Dt),qe(St),Be(St,e)):qe(Dt),Be(Dt,s)}var er=null,ya=!1,Ql=!1;function Ah(e){er===null?er=[e]:er.push(e)}function Gm(e){ya=!0,Ah(e)}function kr(){if(!Ql&&er!==null){Ql=!0;var e=0,t=we;try{var s=er;for(we=1;e<s.length;e++){var o=s[e];do o=o(!0);while(o!==null)}er=null,ya=!1}catch(c){throw er!==null&&(er=er.slice(e+1)),Li(Ms,kr),c}finally{we=t,Ql=!1}}return null}var ni=[],ri=0,_a=null,va=0,nn=[],rn=0,ls=null,tr=1,nr="";function us(e,t){ni[ri++]=va,ni[ri++]=_a,_a=e,va=t}function Rh(e,t,s){nn[rn++]=tr,nn[rn++]=nr,nn[rn++]=ls,ls=e;var o=tr;e=nr;var c=32-qt(o)-1;o&=~(1<<c),s+=1;var h=32-qt(t)+c;if(30<h){var g=c-c%5;h=(o&(1<<g)-1).toString(32),o>>=g,c-=g,tr=1<<32-qt(t)+c|s<<c|o,nr=h+e}else tr=1<<h|s<<c|o,nr=e}function Hl(e){e.return!==null&&(us(e,1),Rh(e,1,0))}function Wl(e){for(;e===_a;)_a=ni[--ri],ni[ri]=null,va=ni[--ri],ni[ri]=null;for(;e===ls;)ls=nn[--rn],nn[rn]=null,nr=nn[--rn],nn[rn]=null,tr=nn[--rn],nn[rn]=null}var Ht=null,Wt=null,Ge=!1,mn=null;function Ph(e,t){var s=ln(5,null,null,0);s.elementType="DELETED",s.stateNode=t,s.return=e,t=e.deletions,t===null?(e.deletions=[s],e.flags|=16):t.push(s)}function Ch(e,t){switch(e.tag){case 5:var s=e.type;return t=t.nodeType!==1||s.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ht=e,Wt=Rr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ht=e,Wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(s=ls!==null?{id:tr,overflow:nr}:null,e.memoizedState={dehydrated:t,treeContext:s,retryLane:1073741824},s=ln(18,null,null,0),s.stateNode=t,s.return=e,e.child=s,Ht=e,Wt=null,!0):!1;default:return!1}}function Jl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yl(e){if(Ge){var t=Wt;if(t){var s=t;if(!Ch(e,t)){if(Jl(e))throw Error(r(418));t=Rr(s.nextSibling);var o=Ht;t&&Ch(e,t)?Ph(o,s):(e.flags=e.flags&-4097|2,Ge=!1,Ht=e)}}else{if(Jl(e))throw Error(r(418));e.flags=e.flags&-4097|2,Ge=!1,Ht=e}}}function kh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ht=e}function wa(e){if(e!==Ht)return!1;if(!Ge)return kh(e),Ge=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ul(e.type,e.memoizedProps)),t&&(t=Wt)){if(Jl(e))throw Vh(),Error(r(418));for(;t;)Ph(e,t),t=Rr(t.nextSibling)}if(kh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(t===0){Wt=Rr(e.nextSibling);break e}t--}else s!=="$"&&s!=="$!"&&s!=="$?"||t++}e=e.nextSibling}Wt=null}}else Wt=Ht?Rr(e.stateNode.nextSibling):null;return!0}function Vh(){for(var e=Wt;e;)e=Rr(e.nextSibling)}function si(){Wt=Ht=null,Ge=!1}function Xl(e){mn===null?mn=[e]:mn.push(e)}var Km=Ce.ReactCurrentBatchConfig;function lo(e,t,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(r(309));var o=s.stateNode}if(!o)throw Error(r(147,e));var c=o,h=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===h?t.ref:(t=function(g){var E=c.refs;g===null?delete E[h]:E[h]=g},t._stringRef=h,t)}if(typeof e!="string")throw Error(r(284));if(!s._owner)throw Error(r(290,e))}return e}function Ea(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nh(e){var t=e._init;return t(e._payload)}function bh(e){function t(b,k){if(e){var M=b.deletions;M===null?(b.deletions=[k],b.flags|=16):M.push(k)}}function s(b,k){if(!e)return null;for(;k!==null;)t(b,k),k=k.sibling;return null}function o(b,k){for(b=new Map;k!==null;)k.key!==null?b.set(k.key,k):b.set(k.index,k),k=k.sibling;return b}function c(b,k){return b=Fr(b,k),b.index=0,b.sibling=null,b}function h(b,k,M){return b.index=M,e?(M=b.alternate,M!==null?(M=M.index,M<k?(b.flags|=2,k):M):(b.flags|=2,k)):(b.flags|=1048576,k)}function g(b){return e&&b.alternate===null&&(b.flags|=2),b}function E(b,k,M,K){return k===null||k.tag!==6?(k=qu(M,b.mode,K),k.return=b,k):(k=c(k,M),k.return=b,k)}function A(b,k,M,K){var re=M.type;return re===C?q(b,k,M.props.children,K,M.key):k!==null&&(k.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===It&&Nh(re)===k.type)?(K=c(k,M.props),K.ref=lo(b,k,M),K.return=b,K):(K=Ga(M.type,M.key,M.props,null,b.mode,K),K.ref=lo(b,k,M),K.return=b,K)}function F(b,k,M,K){return k===null||k.tag!==4||k.stateNode.containerInfo!==M.containerInfo||k.stateNode.implementation!==M.implementation?(k=$u(M,b.mode,K),k.return=b,k):(k=c(k,M.children||[]),k.return=b,k)}function q(b,k,M,K,re){return k===null||k.tag!==7?(k=ys(M,b.mode,K,re),k.return=b,k):(k=c(k,M),k.return=b,k)}function $(b,k,M){if(typeof k=="string"&&k!==""||typeof k=="number")return k=qu(""+k,b.mode,M),k.return=b,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Oe:return M=Ga(k.type,k.key,k.props,null,b.mode,M),M.ref=lo(b,null,k),M.return=b,M;case Re:return k=$u(k,b.mode,M),k.return=b,k;case It:var K=k._init;return $(b,K(k._payload),M)}if(Ye(k)||oe(k))return k=ys(k,b.mode,M,null),k.return=b,k;Ea(b,k)}return null}function U(b,k,M,K){var re=k!==null?k.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return re!==null?null:E(b,k,""+M,K);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Oe:return M.key===re?A(b,k,M,K):null;case Re:return M.key===re?F(b,k,M,K):null;case It:return re=M._init,U(b,k,re(M._payload),K)}if(Ye(M)||oe(M))return re!==null?null:q(b,k,M,K,null);Ea(b,M)}return null}function J(b,k,M,K,re){if(typeof K=="string"&&K!==""||typeof K=="number")return b=b.get(M)||null,E(k,b,""+K,re);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case Oe:return b=b.get(K.key===null?M:K.key)||null,A(k,b,K,re);case Re:return b=b.get(K.key===null?M:K.key)||null,F(k,b,K,re);case It:var ae=K._init;return J(b,k,M,ae(K._payload),re)}if(Ye(K)||oe(K))return b=b.get(M)||null,q(k,b,K,re,null);Ea(k,K)}return null}function Z(b,k,M,K){for(var re=null,ae=null,le=k,ue=k=0,ft=null;le!==null&&ue<M.length;ue++){le.index>ue?(ft=le,le=null):ft=le.sibling;var xe=U(b,le,M[ue],K);if(xe===null){le===null&&(le=ft);break}e&&le&&xe.alternate===null&&t(b,le),k=h(xe,k,ue),ae===null?re=xe:ae.sibling=xe,ae=xe,le=ft}if(ue===M.length)return s(b,le),Ge&&us(b,ue),re;if(le===null){for(;ue<M.length;ue++)le=$(b,M[ue],K),le!==null&&(k=h(le,k,ue),ae===null?re=le:ae.sibling=le,ae=le);return Ge&&us(b,ue),re}for(le=o(b,le);ue<M.length;ue++)ft=J(le,b,ue,M[ue],K),ft!==null&&(e&&ft.alternate!==null&&le.delete(ft.key===null?ue:ft.key),k=h(ft,k,ue),ae===null?re=ft:ae.sibling=ft,ae=ft);return e&&le.forEach(function(jr){return t(b,jr)}),Ge&&us(b,ue),re}function ne(b,k,M,K){var re=oe(M);if(typeof re!="function")throw Error(r(150));if(M=re.call(M),M==null)throw Error(r(151));for(var ae=re=null,le=k,ue=k=0,ft=null,xe=M.next();le!==null&&!xe.done;ue++,xe=M.next()){le.index>ue?(ft=le,le=null):ft=le.sibling;var jr=U(b,le,xe.value,K);if(jr===null){le===null&&(le=ft);break}e&&le&&jr.alternate===null&&t(b,le),k=h(jr,k,ue),ae===null?re=jr:ae.sibling=jr,ae=jr,le=ft}if(xe.done)return s(b,le),Ge&&us(b,ue),re;if(le===null){for(;!xe.done;ue++,xe=M.next())xe=$(b,xe.value,K),xe!==null&&(k=h(xe,k,ue),ae===null?re=xe:ae.sibling=xe,ae=xe);return Ge&&us(b,ue),re}for(le=o(b,le);!xe.done;ue++,xe=M.next())xe=J(le,b,ue,xe.value,K),xe!==null&&(e&&xe.alternate!==null&&le.delete(xe.key===null?ue:xe.key),k=h(xe,k,ue),ae===null?re=xe:ae.sibling=xe,ae=xe);return e&&le.forEach(function(xg){return t(b,xg)}),Ge&&us(b,ue),re}function Ze(b,k,M,K){if(typeof M=="object"&&M!==null&&M.type===C&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case Oe:e:{for(var re=M.key,ae=k;ae!==null;){if(ae.key===re){if(re=M.type,re===C){if(ae.tag===7){s(b,ae.sibling),k=c(ae,M.props.children),k.return=b,b=k;break e}}else if(ae.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===It&&Nh(re)===ae.type){s(b,ae.sibling),k=c(ae,M.props),k.ref=lo(b,ae,M),k.return=b,b=k;break e}s(b,ae);break}else t(b,ae);ae=ae.sibling}M.type===C?(k=ys(M.props.children,b.mode,K,M.key),k.return=b,b=k):(K=Ga(M.type,M.key,M.props,null,b.mode,K),K.ref=lo(b,k,M),K.return=b,b=K)}return g(b);case Re:e:{for(ae=M.key;k!==null;){if(k.key===ae)if(k.tag===4&&k.stateNode.containerInfo===M.containerInfo&&k.stateNode.implementation===M.implementation){s(b,k.sibling),k=c(k,M.children||[]),k.return=b,b=k;break e}else{s(b,k);break}else t(b,k);k=k.sibling}k=$u(M,b.mode,K),k.return=b,b=k}return g(b);case It:return ae=M._init,Ze(b,k,ae(M._payload),K)}if(Ye(M))return Z(b,k,M,K);if(oe(M))return ne(b,k,M,K);Ea(b,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,k!==null&&k.tag===6?(s(b,k.sibling),k=c(k,M),k.return=b,b=k):(s(b,k),k=qu(M,b.mode,K),k.return=b,b=k),g(b)):s(b,k)}return Ze}var ii=bh(!0),Dh=bh(!1),Ia=Pr(null),Ta=null,oi=null,Zl=null;function eu(){Zl=oi=Ta=null}function tu(e){var t=Ia.current;qe(Ia),e._currentValue=t}function nu(e,t,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===s)break;e=e.return}}function ai(e,t){Ta=e,Zl=oi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ot=!0),e.firstContext=null)}function sn(e){var t=e._currentValue;if(Zl!==e)if(e={context:e,memoizedValue:t,next:null},oi===null){if(Ta===null)throw Error(r(308));oi=e,Ta.dependencies={lanes:0,firstContext:e}}else oi=oi.next=e;return t}var cs=null;function ru(e){cs===null?cs=[e]:cs.push(e)}function Mh(e,t,s,o){var c=t.interleaved;return c===null?(s.next=s,ru(t)):(s.next=c.next,c.next=s),t.interleaved=s,rr(e,o)}function rr(e,t){e.lanes|=t;var s=e.alternate;for(s!==null&&(s.lanes|=t),s=e,e=e.return;e!==null;)e.childLanes|=t,s=e.alternate,s!==null&&(s.childLanes|=t),s=e,e=e.return;return s.tag===3?s.stateNode:null}var Vr=!1;function su(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function sr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nr(e,t,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Te&2)!==0){var c=o.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),o.pending=t,rr(e,s)}return c=o.interleaved,c===null?(t.next=t,ru(o)):(t.next=c.next,c.next=t),o.interleaved=t,rr(e,s)}function Sa(e,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,s|=o,t.lanes=s,qi(e,s)}}function Lh(e,t){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var c=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var g={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?c=h=g:h=h.next=g,s=s.next}while(s!==null);h===null?c=h=t:h=h.next=t}else c=h=t;s={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,effects:o.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=t:e.next=t,s.lastBaseUpdate=t}function xa(e,t,s,o){var c=e.updateQueue;Vr=!1;var h=c.firstBaseUpdate,g=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var A=E,F=A.next;A.next=null,g===null?h=F:g.next=F,g=A;var q=e.alternate;q!==null&&(q=q.updateQueue,E=q.lastBaseUpdate,E!==g&&(E===null?q.firstBaseUpdate=F:E.next=F,q.lastBaseUpdate=A))}if(h!==null){var $=c.baseState;g=0,q=F=A=null,E=h;do{var U=E.lane,J=E.eventTime;if((o&U)===U){q!==null&&(q=q.next={eventTime:J,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});e:{var Z=e,ne=E;switch(U=t,J=s,ne.tag){case 1:if(Z=ne.payload,typeof Z=="function"){$=Z.call(J,$,U);break e}$=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ne.payload,U=typeof Z=="function"?Z.call(J,$,U):Z,U==null)break e;$=Y({},$,U);break e;case 2:Vr=!0}}E.callback!==null&&E.lane!==0&&(e.flags|=64,U=c.effects,U===null?c.effects=[E]:U.push(E))}else J={eventTime:J,lane:U,tag:E.tag,payload:E.payload,callback:E.callback,next:null},q===null?(F=q=J,A=$):q=q.next=J,g|=U;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;U=E,E=U.next,U.next=null,c.lastBaseUpdate=U,c.shared.pending=null}}while(!0);if(q===null&&(A=$),c.baseState=A,c.firstBaseUpdate=F,c.lastBaseUpdate=q,t=c.shared.interleaved,t!==null){c=t;do g|=c.lane,c=c.next;while(c!==t)}else h===null&&(c.shared.lanes=0);fs|=g,e.lanes=g,e.memoizedState=$}}function Fh(e,t,s){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],c=o.callback;if(c!==null){if(o.callback=null,o=s,typeof c!="function")throw Error(r(191,c));c.call(o)}}}var uo={},On=Pr(uo),co=Pr(uo),ho=Pr(uo);function hs(e){if(e===uo)throw Error(r(174));return e}function iu(e,t){switch(Be(ho,t),Be(co,e),Be(On,uo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Cs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Cs(t,e)}qe(On),Be(On,t)}function li(){qe(On),qe(co),qe(ho)}function jh(e){hs(ho.current);var t=hs(On.current),s=Cs(t,e.type);t!==s&&(Be(co,e),Be(On,s))}function ou(e){co.current===e&&(qe(On),qe(co))}var Ke=Pr(0);function Aa(e){for(var t=e;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var au=[];function lu(){for(var e=0;e<au.length;e++)au[e]._workInProgressVersionPrimary=null;au.length=0}var Ra=Ce.ReactCurrentDispatcher,uu=Ce.ReactCurrentBatchConfig,ds=0,Qe=null,ot=null,ht=null,Pa=!1,fo=!1,po=0,Qm=0;function xt(){throw Error(r(321))}function cu(e,t){if(t===null)return!1;for(var s=0;s<t.length&&s<e.length;s++)if(!pn(e[s],t[s]))return!1;return!0}function hu(e,t,s,o,c,h){if(ds=h,Qe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ra.current=e===null||e.memoizedState===null?Ym:Xm,e=s(o,c),fo){h=0;do{if(fo=!1,po=0,25<=h)throw Error(r(301));h+=1,ht=ot=null,t.updateQueue=null,Ra.current=Zm,e=s(o,c)}while(fo)}if(Ra.current=Va,t=ot!==null&&ot.next!==null,ds=0,ht=ot=Qe=null,Pa=!1,t)throw Error(r(300));return e}function du(){var e=po!==0;return po=0,e}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?Qe.memoizedState=ht=e:ht=ht.next=e,ht}function on(){if(ot===null){var e=Qe.alternate;e=e!==null?e.memoizedState:null}else e=ot.next;var t=ht===null?Qe.memoizedState:ht.next;if(t!==null)ht=t,ot=e;else{if(e===null)throw Error(r(310));ot=e,e={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},ht===null?Qe.memoizedState=ht=e:ht=ht.next=e}return ht}function mo(e,t){return typeof t=="function"?t(e):t}function fu(e){var t=on(),s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=e;var o=ot,c=o.baseQueue,h=s.pending;if(h!==null){if(c!==null){var g=c.next;c.next=h.next,h.next=g}o.baseQueue=c=h,s.pending=null}if(c!==null){h=c.next,o=o.baseState;var E=g=null,A=null,F=h;do{var q=F.lane;if((ds&q)===q)A!==null&&(A=A.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),o=F.hasEagerState?F.eagerState:e(o,F.action);else{var $={lane:q,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};A===null?(E=A=$,g=o):A=A.next=$,Qe.lanes|=q,fs|=q}F=F.next}while(F!==null&&F!==h);A===null?g=o:A.next=E,pn(o,t.memoizedState)||(Ot=!0),t.memoizedState=o,t.baseState=g,t.baseQueue=A,s.lastRenderedState=o}if(e=s.interleaved,e!==null){c=e;do h=c.lane,Qe.lanes|=h,fs|=h,c=c.next;while(c!==e)}else c===null&&(s.lanes=0);return[t.memoizedState,s.dispatch]}function pu(e){var t=on(),s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=e;var o=s.dispatch,c=s.pending,h=t.memoizedState;if(c!==null){s.pending=null;var g=c=c.next;do h=e(h,g.action),g=g.next;while(g!==c);pn(h,t.memoizedState)||(Ot=!0),t.memoizedState=h,t.baseQueue===null&&(t.baseState=h),s.lastRenderedState=h}return[h,o]}function Bh(){}function zh(e,t){var s=Qe,o=on(),c=t(),h=!pn(o.memoizedState,c);if(h&&(o.memoizedState=c,Ot=!0),o=o.queue,mu($h.bind(null,s,o,e),[e]),o.getSnapshot!==t||h||ht!==null&&ht.memoizedState.tag&1){if(s.flags|=2048,go(9,qh.bind(null,s,o,c,t),void 0,null),dt===null)throw Error(r(349));(ds&30)!==0||Uh(s,t,c)}return c}function Uh(e,t,s){e.flags|=16384,e={getSnapshot:t,value:s},t=Qe.updateQueue,t===null?(t={lastEffect:null,stores:null},Qe.updateQueue=t,t.stores=[e]):(s=t.stores,s===null?t.stores=[e]:s.push(e))}function qh(e,t,s,o){t.value=s,t.getSnapshot=o,Gh(t)&&Kh(e)}function $h(e,t,s){return s(function(){Gh(t)&&Kh(e)})}function Gh(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!pn(e,s)}catch{return!0}}function Kh(e){var t=rr(e,1);t!==null&&vn(t,e,1,-1)}function Qh(e){var t=Ln();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:e},t.queue=e,e=e.dispatch=Jm.bind(null,Qe,e),[t.memoizedState,e]}function go(e,t,s,o){return e={tag:e,create:t,destroy:s,deps:o,next:null},t=Qe.updateQueue,t===null?(t={lastEffect:null,stores:null},Qe.updateQueue=t,t.lastEffect=e.next=e):(s=t.lastEffect,s===null?t.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,t.lastEffect=e)),e}function Hh(){return on().memoizedState}function Ca(e,t,s,o){var c=Ln();Qe.flags|=e,c.memoizedState=go(1|t,s,void 0,o===void 0?null:o)}function ka(e,t,s,o){var c=on();o=o===void 0?null:o;var h=void 0;if(ot!==null){var g=ot.memoizedState;if(h=g.destroy,o!==null&&cu(o,g.deps)){c.memoizedState=go(t,s,h,o);return}}Qe.flags|=e,c.memoizedState=go(1|t,s,h,o)}function Wh(e,t){return Ca(8390656,8,e,t)}function mu(e,t){return ka(2048,8,e,t)}function Jh(e,t){return ka(4,2,e,t)}function Yh(e,t){return ka(4,4,e,t)}function Xh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zh(e,t,s){return s=s!=null?s.concat([e]):null,ka(4,4,Xh.bind(null,t,e),s)}function gu(){}function ed(e,t){var s=on();t=t===void 0?null:t;var o=s.memoizedState;return o!==null&&t!==null&&cu(t,o[1])?o[0]:(s.memoizedState=[e,t],e)}function td(e,t){var s=on();t=t===void 0?null:t;var o=s.memoizedState;return o!==null&&t!==null&&cu(t,o[1])?o[0]:(e=e(),s.memoizedState=[e,t],e)}function nd(e,t,s){return(ds&21)===0?(e.baseState&&(e.baseState=!1,Ot=!0),e.memoizedState=s):(pn(s,t)||(s=zi(),Qe.lanes|=s,fs|=s,e.baseState=!0),t)}function Hm(e,t){var s=we;we=s!==0&&4>s?s:4,e(!0);var o=uu.transition;uu.transition={};try{e(!1),t()}finally{we=s,uu.transition=o}}function rd(){return on().memoizedState}function Wm(e,t,s){var o=Or(e);if(s={lane:o,action:s,hasEagerState:!1,eagerState:null,next:null},sd(e))id(t,s);else if(s=Mh(e,t,s,o),s!==null){var c=Nt();vn(s,e,o,c),od(s,t,o)}}function Jm(e,t,s){var o=Or(e),c={lane:o,action:s,hasEagerState:!1,eagerState:null,next:null};if(sd(e))id(t,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=t.lastRenderedReducer,h!==null))try{var g=t.lastRenderedState,E=h(g,s);if(c.hasEagerState=!0,c.eagerState=E,pn(E,g)){var A=t.interleaved;A===null?(c.next=c,ru(t)):(c.next=A.next,A.next=c),t.interleaved=c;return}}catch{}finally{}s=Mh(e,t,c,o),s!==null&&(c=Nt(),vn(s,e,o,c),od(s,t,o))}}function sd(e){var t=e.alternate;return e===Qe||t!==null&&t===Qe}function id(e,t){fo=Pa=!0;var s=e.pending;s===null?t.next=t:(t.next=s.next,s.next=t),e.pending=t}function od(e,t,s){if((s&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,s|=o,t.lanes=s,qi(e,s)}}var Va={readContext:sn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},Ym={readContext:sn,useCallback:function(e,t){return Ln().memoizedState=[e,t===void 0?null:t],e},useContext:sn,useEffect:Wh,useImperativeHandle:function(e,t,s){return s=s!=null?s.concat([e]):null,Ca(4194308,4,Xh.bind(null,t,e),s)},useLayoutEffect:function(e,t){return Ca(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ca(4,2,e,t)},useMemo:function(e,t){var s=Ln();return t=t===void 0?null:t,e=e(),s.memoizedState=[e,t],e},useReducer:function(e,t,s){var o=Ln();return t=s!==void 0?s(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Wm.bind(null,Qe,e),[o.memoizedState,e]},useRef:function(e){var t=Ln();return e={current:e},t.memoizedState=e},useState:Qh,useDebugValue:gu,useDeferredValue:function(e){return Ln().memoizedState=e},useTransition:function(){var e=Qh(!1),t=e[0];return e=Hm.bind(null,e[1]),Ln().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,s){var o=Qe,c=Ln();if(Ge){if(s===void 0)throw Error(r(407));s=s()}else{if(s=t(),dt===null)throw Error(r(349));(ds&30)!==0||Uh(o,t,s)}c.memoizedState=s;var h={value:s,getSnapshot:t};return c.queue=h,Wh($h.bind(null,o,h,e),[e]),o.flags|=2048,go(9,qh.bind(null,o,h,s,t),void 0,null),s},useId:function(){var e=Ln(),t=dt.identifierPrefix;if(Ge){var s=nr,o=tr;s=(o&~(1<<32-qt(o)-1)).toString(32)+s,t=":"+t+"R"+s,s=po++,0<s&&(t+="H"+s.toString(32)),t+=":"}else s=Qm++,t=":"+t+"r"+s.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Xm={readContext:sn,useCallback:ed,useContext:sn,useEffect:mu,useImperativeHandle:Zh,useInsertionEffect:Jh,useLayoutEffect:Yh,useMemo:td,useReducer:fu,useRef:Hh,useState:function(){return fu(mo)},useDebugValue:gu,useDeferredValue:function(e){var t=on();return nd(t,ot.memoizedState,e)},useTransition:function(){var e=fu(mo)[0],t=on().memoizedState;return[e,t]},useMutableSource:Bh,useSyncExternalStore:zh,useId:rd,unstable_isNewReconciler:!1},Zm={readContext:sn,useCallback:ed,useContext:sn,useEffect:mu,useImperativeHandle:Zh,useInsertionEffect:Jh,useLayoutEffect:Yh,useMemo:td,useReducer:pu,useRef:Hh,useState:function(){return pu(mo)},useDebugValue:gu,useDeferredValue:function(e){var t=on();return ot===null?t.memoizedState=e:nd(t,ot.memoizedState,e)},useTransition:function(){var e=pu(mo)[0],t=on().memoizedState;return[e,t]},useMutableSource:Bh,useSyncExternalStore:zh,useId:rd,unstable_isNewReconciler:!1};function gn(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var s in e)t[s]===void 0&&(t[s]=e[s]);return t}return t}function yu(e,t,s,o){t=e.memoizedState,s=s(o,t),s=s==null?t:Y({},t,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Na={isMounted:function(e){return(e=e._reactInternals)?dn(e)===e:!1},enqueueSetState:function(e,t,s){e=e._reactInternals;var o=Nt(),c=Or(e),h=sr(o,c);h.payload=t,s!=null&&(h.callback=s),t=Nr(e,h,c),t!==null&&(vn(t,e,c,o),Sa(t,e,c))},enqueueReplaceState:function(e,t,s){e=e._reactInternals;var o=Nt(),c=Or(e),h=sr(o,c);h.tag=1,h.payload=t,s!=null&&(h.callback=s),t=Nr(e,h,c),t!==null&&(vn(t,e,c,o),Sa(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var s=Nt(),o=Or(e),c=sr(s,o);c.tag=2,t!=null&&(c.callback=t),t=Nr(e,c,o),t!==null&&(vn(t,e,o,s),Sa(t,e,o))}};function ad(e,t,s,o,c,h,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,g):t.prototype&&t.prototype.isPureReactComponent?!to(s,o)||!to(c,h):!0}function ld(e,t,s){var o=!1,c=Cr,h=t.contextType;return typeof h=="object"&&h!==null?h=sn(h):(c=Mt(t)?as:St.current,o=t.contextTypes,h=(o=o!=null)?ti(e,c):Cr),t=new t(s,h),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Na,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=h),t}function ud(e,t,s,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,o),t.state!==e&&Na.enqueueReplaceState(t,t.state,null)}function _u(e,t,s,o){var c=e.stateNode;c.props=s,c.state=e.memoizedState,c.refs={},su(e);var h=t.contextType;typeof h=="object"&&h!==null?c.context=sn(h):(h=Mt(t)?as:St.current,c.context=ti(e,h)),c.state=e.memoizedState,h=t.getDerivedStateFromProps,typeof h=="function"&&(yu(e,t,h,s),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(t=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),t!==c.state&&Na.enqueueReplaceState(c,c.state,null),xa(e,s,c,o),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function ui(e,t){try{var s="",o=t;do s+=_e(o),o=o.return;while(o);var c=s}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:e,source:t,stack:c,digest:null}}function vu(e,t,s){return{value:e,source:null,stack:s??null,digest:t??null}}function wu(e,t){try{console.error(t.value)}catch(s){setTimeout(function(){throw s})}}var eg=typeof WeakMap=="function"?WeakMap:Map;function cd(e,t,s){s=sr(-1,s),s.tag=3,s.payload={element:null};var o=t.value;return s.callback=function(){ja||(ja=!0,Mu=o),wu(e,t)},s}function hd(e,t,s){s=sr(-1,s),s.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var c=t.value;s.payload=function(){return o(c)},s.callback=function(){wu(e,t)}}var h=e.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){wu(e,t),typeof o!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var g=t.stack;this.componentDidCatch(t.value,{componentStack:g!==null?g:""})}),s}function dd(e,t,s){var o=e.pingCache;if(o===null){o=e.pingCache=new eg;var c=new Set;o.set(t,c)}else c=o.get(t),c===void 0&&(c=new Set,o.set(t,c));c.has(s)||(c.add(s),e=pg.bind(null,e,t,s),t.then(e,e))}function fd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function pd(e,t,s,o,c){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(t=sr(-1,1),t.tag=2,Nr(s,t,1))),s.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var tg=Ce.ReactCurrentOwner,Ot=!1;function Vt(e,t,s,o){t.child=e===null?Dh(t,null,s,o):ii(t,e.child,s,o)}function md(e,t,s,o,c){s=s.render;var h=t.ref;return ai(t,c),o=hu(e,t,s,o,h,c),s=du(),e!==null&&!Ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,ir(e,t,c)):(Ge&&s&&Hl(t),t.flags|=1,Vt(e,t,o,c),t.child)}function gd(e,t,s,o,c){if(e===null){var h=s.type;return typeof h=="function"&&!Uu(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(t.tag=15,t.type=h,yd(e,t,h,o,c)):(e=Ga(s.type,null,o,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(h=e.child,(e.lanes&c)===0){var g=h.memoizedProps;if(s=s.compare,s=s!==null?s:to,s(g,o)&&e.ref===t.ref)return ir(e,t,c)}return t.flags|=1,e=Fr(h,o),e.ref=t.ref,e.return=t,t.child=e}function yd(e,t,s,o,c){if(e!==null){var h=e.memoizedProps;if(to(h,o)&&e.ref===t.ref)if(Ot=!1,t.pendingProps=o=h,(e.lanes&c)!==0)(e.flags&131072)!==0&&(Ot=!0);else return t.lanes=e.lanes,ir(e,t,c)}return Eu(e,t,s,o,c)}function _d(e,t,s){var o=t.pendingProps,c=o.children,h=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Be(hi,Jt),Jt|=s;else{if((s&1073741824)===0)return e=h!==null?h.baseLanes|s:s,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Be(hi,Jt),Jt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=h!==null?h.baseLanes:s,Be(hi,Jt),Jt|=o}else h!==null?(o=h.baseLanes|s,t.memoizedState=null):o=s,Be(hi,Jt),Jt|=o;return Vt(e,t,c,s),t.child}function vd(e,t){var s=t.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(t.flags|=512,t.flags|=2097152)}function Eu(e,t,s,o,c){var h=Mt(s)?as:St.current;return h=ti(t,h),ai(t,c),s=hu(e,t,s,o,h,c),o=du(),e!==null&&!Ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,ir(e,t,c)):(Ge&&o&&Hl(t),t.flags|=1,Vt(e,t,s,c),t.child)}function wd(e,t,s,o,c){if(Mt(s)){var h=!0;ga(t)}else h=!1;if(ai(t,c),t.stateNode===null)Da(e,t),ld(t,s,o),_u(t,s,o,c),o=!0;else if(e===null){var g=t.stateNode,E=t.memoizedProps;g.props=E;var A=g.context,F=s.contextType;typeof F=="object"&&F!==null?F=sn(F):(F=Mt(s)?as:St.current,F=ti(t,F));var q=s.getDerivedStateFromProps,$=typeof q=="function"||typeof g.getSnapshotBeforeUpdate=="function";$||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==o||A!==F)&&ud(t,g,o,F),Vr=!1;var U=t.memoizedState;g.state=U,xa(t,o,g,c),A=t.memoizedState,E!==o||U!==A||Dt.current||Vr?(typeof q=="function"&&(yu(t,s,q,o),A=t.memoizedState),(E=Vr||ad(t,s,E,o,U,A,F))?($||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(t.flags|=4194308)):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=A),g.props=o,g.state=A,g.context=F,o=E):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{g=t.stateNode,Oh(e,t),E=t.memoizedProps,F=t.type===t.elementType?E:gn(t.type,E),g.props=F,$=t.pendingProps,U=g.context,A=s.contextType,typeof A=="object"&&A!==null?A=sn(A):(A=Mt(s)?as:St.current,A=ti(t,A));var J=s.getDerivedStateFromProps;(q=typeof J=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==$||U!==A)&&ud(t,g,o,A),Vr=!1,U=t.memoizedState,g.state=U,xa(t,o,g,c);var Z=t.memoizedState;E!==$||U!==Z||Dt.current||Vr?(typeof J=="function"&&(yu(t,s,J,o),Z=t.memoizedState),(F=Vr||ad(t,s,F,o,U,Z,A)||!1)?(q||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(o,Z,A),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(o,Z,A)),typeof g.componentDidUpdate=="function"&&(t.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof g.componentDidUpdate!="function"||E===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=Z),g.props=o,g.state=Z,g.context=A,o=F):(typeof g.componentDidUpdate!="function"||E===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),o=!1)}return Iu(e,t,s,o,h,c)}function Iu(e,t,s,o,c,h){vd(e,t);var g=(t.flags&128)!==0;if(!o&&!g)return c&&xh(t,s,!1),ir(e,t,h);o=t.stateNode,tg.current=t;var E=g&&typeof s.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&g?(t.child=ii(t,e.child,null,h),t.child=ii(t,null,E,h)):Vt(e,t,E,h),t.memoizedState=o.state,c&&xh(t,s,!0),t.child}function Ed(e){var t=e.stateNode;t.pendingContext?Th(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Th(e,t.context,!1),iu(e,t.containerInfo)}function Id(e,t,s,o,c){return si(),Xl(c),t.flags|=256,Vt(e,t,s,o),t.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function Su(e){return{baseLanes:e,cachePool:null,transitions:null}}function Td(e,t,s){var o=t.pendingProps,c=Ke.current,h=!1,g=(t.flags&128)!==0,E;if((E=g)||(E=e!==null&&e.memoizedState===null?!1:(c&2)!==0),E?(h=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),Be(Ke,c&1),e===null)return Yl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(g=o.children,e=o.fallback,h?(o=t.mode,h=t.child,g={mode:"hidden",children:g},(o&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=g):h=Ka(g,o,0,null),e=ys(e,o,s,null),h.return=t,e.return=t,h.sibling=e,t.child=h,t.child.memoizedState=Su(s),t.memoizedState=Tu,e):xu(t,g));if(c=e.memoizedState,c!==null&&(E=c.dehydrated,E!==null))return ng(e,t,g,o,E,c,s);if(h){h=o.fallback,g=t.mode,c=e.child,E=c.sibling;var A={mode:"hidden",children:o.children};return(g&1)===0&&t.child!==c?(o=t.child,o.childLanes=0,o.pendingProps=A,t.deletions=null):(o=Fr(c,A),o.subtreeFlags=c.subtreeFlags&14680064),E!==null?h=Fr(E,h):(h=ys(h,g,s,null),h.flags|=2),h.return=t,o.return=t,o.sibling=h,t.child=o,o=h,h=t.child,g=e.child.memoizedState,g=g===null?Su(s):{baseLanes:g.baseLanes|s,cachePool:null,transitions:g.transitions},h.memoizedState=g,h.childLanes=e.childLanes&~s,t.memoizedState=Tu,o}return h=e.child,e=h.sibling,o=Fr(h,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=s),o.return=t,o.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=o,t.memoizedState=null,o}function xu(e,t){return t=Ka({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ba(e,t,s,o){return o!==null&&Xl(o),ii(t,e.child,null,s),e=xu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ng(e,t,s,o,c,h,g){if(s)return t.flags&256?(t.flags&=-257,o=vu(Error(r(422))),ba(e,t,g,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(h=o.fallback,c=t.mode,o=Ka({mode:"visible",children:o.children},c,0,null),h=ys(h,c,g,null),h.flags|=2,o.return=t,h.return=t,o.sibling=h,t.child=o,(t.mode&1)!==0&&ii(t,e.child,null,g),t.child.memoizedState=Su(g),t.memoizedState=Tu,h);if((t.mode&1)===0)return ba(e,t,g,null);if(c.data==="$!"){if(o=c.nextSibling&&c.nextSibling.dataset,o)var E=o.dgst;return o=E,h=Error(r(419)),o=vu(h,o,void 0),ba(e,t,g,o)}if(E=(g&e.childLanes)!==0,Ot||E){if(o=dt,o!==null){switch(g&-g){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(o.suspendedLanes|g))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,rr(e,c),vn(o,e,c,-1))}return zu(),o=vu(Error(r(421))),ba(e,t,g,o)}return c.data==="$?"?(t.flags|=128,t.child=e.child,t=mg.bind(null,e),c._reactRetry=t,null):(e=h.treeContext,Wt=Rr(c.nextSibling),Ht=t,Ge=!0,mn=null,e!==null&&(nn[rn++]=tr,nn[rn++]=nr,nn[rn++]=ls,tr=e.id,nr=e.overflow,ls=t),t=xu(t,o.children),t.flags|=4096,t)}function Sd(e,t,s){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),nu(e.return,t,s)}function Au(e,t,s,o,c){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:c}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=s,h.tailMode=c)}function xd(e,t,s){var o=t.pendingProps,c=o.revealOrder,h=o.tail;if(Vt(e,t,o.children,s),o=Ke.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sd(e,s,t);else if(e.tag===19)Sd(e,s,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Be(Ke,o),(t.mode&1)===0)t.memoizedState=null;else switch(c){case"forwards":for(s=t.child,c=null;s!==null;)e=s.alternate,e!==null&&Aa(e)===null&&(c=s),s=s.sibling;s=c,s===null?(c=t.child,t.child=null):(c=s.sibling,s.sibling=null),Au(t,!1,c,s,h);break;case"backwards":for(s=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&Aa(e)===null){t.child=c;break}e=c.sibling,c.sibling=s,s=c,c=e}Au(t,!0,s,null,h);break;case"together":Au(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Da(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ir(e,t,s){if(e!==null&&(t.dependencies=e.dependencies),fs|=t.lanes,(s&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,s=Fr(e,e.pendingProps),t.child=s,s.return=t;e.sibling!==null;)e=e.sibling,s=s.sibling=Fr(e,e.pendingProps),s.return=t;s.sibling=null}return t.child}function rg(e,t,s){switch(t.tag){case 3:Ed(t),si();break;case 5:jh(t);break;case 1:Mt(t.type)&&ga(t);break;case 4:iu(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,c=t.memoizedProps.value;Be(Ia,o._currentValue),o._currentValue=c;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Be(Ke,Ke.current&1),t.flags|=128,null):(s&t.child.childLanes)!==0?Td(e,t,s):(Be(Ke,Ke.current&1),e=ir(e,t,s),e!==null?e.sibling:null);Be(Ke,Ke.current&1);break;case 19:if(o=(s&t.childLanes)!==0,(e.flags&128)!==0){if(o)return xd(e,t,s);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Be(Ke,Ke.current),o)break;return null;case 22:case 23:return t.lanes=0,_d(e,t,s)}return ir(e,t,s)}var Ad,Ru,Rd,Pd;Ad=function(e,t){for(var s=t.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Ru=function(){},Rd=function(e,t,s,o){var c=e.memoizedProps;if(c!==o){e=t.stateNode,hs(On.current);var h=null;switch(s){case"input":c=Rs(e,c),o=Rs(e,o),h=[];break;case"select":c=Y({},c,{value:void 0}),o=Y({},o,{value:void 0}),h=[];break;case"textarea":c=ki(e,c),o=ki(e,o),h=[];break;default:typeof c.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=fa)}hn(s,o);var g;s=null;for(F in c)if(!o.hasOwnProperty(F)&&c.hasOwnProperty(F)&&c[F]!=null)if(F==="style"){var E=c[F];for(g in E)E.hasOwnProperty(g)&&(s||(s={}),s[g]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(u.hasOwnProperty(F)?h||(h=[]):(h=h||[]).push(F,null));for(F in o){var A=o[F];if(E=c!=null?c[F]:void 0,o.hasOwnProperty(F)&&A!==E&&(A!=null||E!=null))if(F==="style")if(E){for(g in E)!E.hasOwnProperty(g)||A&&A.hasOwnProperty(g)||(s||(s={}),s[g]="");for(g in A)A.hasOwnProperty(g)&&E[g]!==A[g]&&(s||(s={}),s[g]=A[g])}else s||(h||(h=[]),h.push(F,s)),s=A;else F==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,E=E?E.__html:void 0,A!=null&&E!==A&&(h=h||[]).push(F,A)):F==="children"?typeof A!="string"&&typeof A!="number"||(h=h||[]).push(F,""+A):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(u.hasOwnProperty(F)?(A!=null&&F==="onScroll"&&Ue("scroll",e),h||E===A||(h=[])):(h=h||[]).push(F,A))}s&&(h=h||[]).push("style",s);var F=h;(t.updateQueue=F)&&(t.flags|=4)}},Pd=function(e,t,s,o){s!==o&&(t.flags|=4)};function yo(e,t){if(!Ge)switch(e.tailMode){case"hidden":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function At(e){var t=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(t)for(var c=e.child;c!==null;)s|=c.lanes|c.childLanes,o|=c.subtreeFlags&14680064,o|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)s|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=s,t}function sg(e,t,s){var o=t.pendingProps;switch(Wl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(t),null;case 1:return Mt(t.type)&&ma(),At(t),null;case 3:return o=t.stateNode,li(),qe(Dt),qe(St),lu(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(wa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,mn!==null&&(Fu(mn),mn=null))),Ru(e,t),At(t),null;case 5:ou(t);var c=hs(ho.current);if(s=t.type,e!==null&&t.stateNode!=null)Rd(e,t,s,o,c),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(r(166));return At(t),null}if(e=hs(On.current),wa(t)){o=t.stateNode,s=t.type;var h=t.memoizedProps;switch(o[Mn]=t,o[oo]=h,e=(t.mode&1)!==0,s){case"dialog":Ue("cancel",o),Ue("close",o);break;case"iframe":case"object":case"embed":Ue("load",o);break;case"video":case"audio":for(c=0;c<ro.length;c++)Ue(ro[c],o);break;case"source":Ue("error",o);break;case"img":case"image":case"link":Ue("error",o),Ue("load",o);break;case"details":Ue("toggle",o);break;case"input":Fo(o,h),Ue("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!h.multiple},Ue("invalid",o);break;case"textarea":Vi(o,h),Ue("invalid",o)}hn(s,h),c=null;for(var g in h)if(h.hasOwnProperty(g)){var E=h[g];g==="children"?typeof E=="string"?o.textContent!==E&&(h.suppressHydrationWarning!==!0&&da(o.textContent,E,e),c=["children",E]):typeof E=="number"&&o.textContent!==""+E&&(h.suppressHydrationWarning!==!0&&da(o.textContent,E,e),c=["children",""+E]):u.hasOwnProperty(g)&&E!=null&&g==="onScroll"&&Ue("scroll",o)}switch(s){case"input":As(o),Ci(o,h,!0);break;case"textarea":As(o),hr(o);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(o.onclick=fa)}o=c,t.updateQueue=o,o!==null&&(t.flags|=4)}else{g=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ni(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=g.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=g.createElement(s,{is:o.is}):(e=g.createElement(s),s==="select"&&(g=e,o.multiple?g.multiple=!0:o.size&&(g.size=o.size))):e=g.createElementNS(e,s),e[Mn]=t,e[oo]=o,Ad(e,t,!1,!1),t.stateNode=e;e:{switch(g=Vs(s,o),s){case"dialog":Ue("cancel",e),Ue("close",e),c=o;break;case"iframe":case"object":case"embed":Ue("load",e),c=o;break;case"video":case"audio":for(c=0;c<ro.length;c++)Ue(ro[c],e);c=o;break;case"source":Ue("error",e),c=o;break;case"img":case"image":case"link":Ue("error",e),Ue("load",e),c=o;break;case"details":Ue("toggle",e),c=o;break;case"input":Fo(e,o),c=Rs(e,o),Ue("invalid",e);break;case"option":c=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},c=Y({},o,{value:void 0}),Ue("invalid",e);break;case"textarea":Vi(e,o),c=ki(e,o),Ue("invalid",e);break;default:c=o}hn(s,c),E=c;for(h in E)if(E.hasOwnProperty(h)){var A=E[h];h==="style"?ks(e,A):h==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&Bo(e,A)):h==="children"?typeof A=="string"?(s!=="textarea"||A!=="")&&Kr(e,A):typeof A=="number"&&Kr(e,""+A):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(u.hasOwnProperty(h)?A!=null&&h==="onScroll"&&Ue("scroll",e):A!=null&&be(e,h,A,g))}switch(s){case"input":As(e),Ci(e,o,!1);break;case"textarea":As(e),hr(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Ie(o.value));break;case"select":e.multiple=!!o.multiple,h=o.value,h!=null?cn(e,!!o.multiple,h,!1):o.defaultValue!=null&&cn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=fa)}switch(s){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return At(t),null;case 6:if(e&&t.stateNode!=null)Pd(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(r(166));if(s=hs(ho.current),hs(On.current),wa(t)){if(o=t.stateNode,s=t.memoizedProps,o[Mn]=t,(h=o.nodeValue!==s)&&(e=Ht,e!==null))switch(e.tag){case 3:da(o.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&da(o.nodeValue,s,(e.mode&1)!==0)}h&&(t.flags|=4)}else o=(s.nodeType===9?s:s.ownerDocument).createTextNode(o),o[Mn]=t,t.stateNode=o}return At(t),null;case 13:if(qe(Ke),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ge&&Wt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Vh(),si(),t.flags|=98560,h=!1;else if(h=wa(t),o!==null&&o.dehydrated!==null){if(e===null){if(!h)throw Error(r(318));if(h=t.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(r(317));h[Mn]=t}else si(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;At(t),h=!1}else mn!==null&&(Fu(mn),mn=null),h=!0;if(!h)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=s,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ke.current&1)!==0?at===0&&(at=3):zu())),t.updateQueue!==null&&(t.flags|=4),At(t),null);case 4:return li(),Ru(e,t),e===null&&so(t.stateNode.containerInfo),At(t),null;case 10:return tu(t.type._context),At(t),null;case 17:return Mt(t.type)&&ma(),At(t),null;case 19:if(qe(Ke),h=t.memoizedState,h===null)return At(t),null;if(o=(t.flags&128)!==0,g=h.rendering,g===null)if(o)yo(h,!1);else{if(at!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(g=Aa(e),g!==null){for(t.flags|=128,yo(h,!1),o=g.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=s,s=t.child;s!==null;)h=s,e=o,h.flags&=14680066,g=h.alternate,g===null?(h.childLanes=0,h.lanes=e,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=g.childLanes,h.lanes=g.lanes,h.child=g.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=g.memoizedProps,h.memoizedState=g.memoizedState,h.updateQueue=g.updateQueue,h.type=g.type,e=g.dependencies,h.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return Be(Ke,Ke.current&1|2),t.child}e=e.sibling}h.tail!==null&&ze()>di&&(t.flags|=128,o=!0,yo(h,!1),t.lanes=4194304)}else{if(!o)if(e=Aa(g),e!==null){if(t.flags|=128,o=!0,s=e.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),yo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!g.alternate&&!Ge)return At(t),null}else 2*ze()-h.renderingStartTime>di&&s!==1073741824&&(t.flags|=128,o=!0,yo(h,!1),t.lanes=4194304);h.isBackwards?(g.sibling=t.child,t.child=g):(s=h.last,s!==null?s.sibling=g:t.child=g,h.last=g)}return h.tail!==null?(t=h.tail,h.rendering=t,h.tail=t.sibling,h.renderingStartTime=ze(),t.sibling=null,s=Ke.current,Be(Ke,o?s&1|2:s&1),t):(At(t),null);case 22:case 23:return Bu(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(Jt&1073741824)!==0&&(At(t),t.subtreeFlags&6&&(t.flags|=8192)):At(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function ig(e,t){switch(Wl(t),t.tag){case 1:return Mt(t.type)&&ma(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return li(),qe(Dt),qe(St),lu(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ou(t),null;case 13:if(qe(Ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));si()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return qe(Ke),null;case 4:return li(),null;case 10:return tu(t.type._context),null;case 22:case 23:return Bu(),null;case 24:return null;default:return null}}var Ma=!1,Rt=!1,og=typeof WeakSet=="function"?WeakSet:Set,X=null;function ci(e,t){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(o){We(e,t,o)}else s.current=null}function Pu(e,t,s){try{s()}catch(o){We(e,t,o)}}var Cd=!1;function ag(e,t){if(Bl=Jn,e=ah(),Nl(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var c=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var g=0,E=-1,A=-1,F=0,q=0,$=e,U=null;t:for(;;){for(var J;$!==s||c!==0&&$.nodeType!==3||(E=g+c),$!==h||o!==0&&$.nodeType!==3||(A=g+o),$.nodeType===3&&(g+=$.nodeValue.length),(J=$.firstChild)!==null;)U=$,$=J;for(;;){if($===e)break t;if(U===s&&++F===c&&(E=g),U===h&&++q===o&&(A=g),(J=$.nextSibling)!==null)break;$=U,U=$.parentNode}$=J}s=E===-1||A===-1?null:{start:E,end:A}}else s=null}s=s||{start:0,end:0}}else s=null;for(zl={focusedElem:e,selectionRange:s},Jn=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var Z=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Z!==null){var ne=Z.memoizedProps,Ze=Z.memoizedState,b=t.stateNode,k=b.getSnapshotBeforeUpdate(t.elementType===t.type?ne:gn(t.type,ne),Ze);b.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var M=t.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(K){We(t,t.return,K)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return Z=Cd,Cd=!1,Z}function _o(e,t,s){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var c=o=o.next;do{if((c.tag&e)===e){var h=c.destroy;c.destroy=void 0,h!==void 0&&Pu(t,s,h)}c=c.next}while(c!==o)}}function Oa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var s=t=t.next;do{if((s.tag&e)===e){var o=s.create;s.destroy=o()}s=s.next}while(s!==t)}}function Cu(e){var t=e.ref;if(t!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof t=="function"?t(e):t.current=e}}function kd(e){var t=e.alternate;t!==null&&(e.alternate=null,kd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mn],delete t[oo],delete t[Gl],delete t[qm],delete t[$m])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vd(e){return e.tag===5||e.tag===3||e.tag===4}function Nd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ku(e,t,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?s.nodeType===8?s.parentNode.insertBefore(e,t):s.insertBefore(e,t):(s.nodeType===8?(t=s.parentNode,t.insertBefore(e,s)):(t=s,t.appendChild(e)),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=fa));else if(o!==4&&(e=e.child,e!==null))for(ku(e,t,s),e=e.sibling;e!==null;)ku(e,t,s),e=e.sibling}function Vu(e,t,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?s.insertBefore(e,t):s.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Vu(e,t,s),e=e.sibling;e!==null;)Vu(e,t,s),e=e.sibling}var vt=null,yn=!1;function br(e,t,s){for(s=s.child;s!==null;)bd(e,t,s),s=s.sibling}function bd(e,t,s){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(Yr,s)}catch{}switch(s.tag){case 5:Rt||ci(s,t);case 6:var o=vt,c=yn;vt=null,br(e,t,s),vt=o,yn=c,vt!==null&&(yn?(e=vt,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):vt.removeChild(s.stateNode));break;case 18:vt!==null&&(yn?(e=vt,s=s.stateNode,e.nodeType===8?$l(e.parentNode,s):e.nodeType===1&&$l(e,s),Tr(e)):$l(vt,s.stateNode));break;case 4:o=vt,c=yn,vt=s.stateNode.containerInfo,yn=!0,br(e,t,s),vt=o,yn=c;break;case 0:case 11:case 14:case 15:if(!Rt&&(o=s.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){c=o=o.next;do{var h=c,g=h.destroy;h=h.tag,g!==void 0&&((h&2)!==0||(h&4)!==0)&&Pu(s,t,g),c=c.next}while(c!==o)}br(e,t,s);break;case 1:if(!Rt&&(ci(s,t),o=s.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=s.memoizedProps,o.state=s.memoizedState,o.componentWillUnmount()}catch(E){We(s,t,E)}br(e,t,s);break;case 21:br(e,t,s);break;case 22:s.mode&1?(Rt=(o=Rt)||s.memoizedState!==null,br(e,t,s),Rt=o):br(e,t,s);break;default:br(e,t,s)}}function Dd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new og),t.forEach(function(o){var c=gg.bind(null,e,o);s.has(o)||(s.add(o),o.then(c,c))})}}function _n(e,t){var s=t.deletions;if(s!==null)for(var o=0;o<s.length;o++){var c=s[o];try{var h=e,g=t,E=g;e:for(;E!==null;){switch(E.tag){case 5:vt=E.stateNode,yn=!1;break e;case 3:vt=E.stateNode.containerInfo,yn=!0;break e;case 4:vt=E.stateNode.containerInfo,yn=!0;break e}E=E.return}if(vt===null)throw Error(r(160));bd(h,g,c),vt=null,yn=!1;var A=c.alternate;A!==null&&(A.return=null),c.return=null}catch(F){We(c,t,F)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Md(t,e),t=t.sibling}function Md(e,t){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_n(t,e),Fn(e),o&4){try{_o(3,e,e.return),Oa(3,e)}catch(ne){We(e,e.return,ne)}try{_o(5,e,e.return)}catch(ne){We(e,e.return,ne)}}break;case 1:_n(t,e),Fn(e),o&512&&s!==null&&ci(s,s.return);break;case 5:if(_n(t,e),Fn(e),o&512&&s!==null&&ci(s,s.return),e.flags&32){var c=e.stateNode;try{Kr(c,"")}catch(ne){We(e,e.return,ne)}}if(o&4&&(c=e.stateNode,c!=null)){var h=e.memoizedProps,g=s!==null?s.memoizedProps:h,E=e.type,A=e.updateQueue;if(e.updateQueue=null,A!==null)try{E==="input"&&h.type==="radio"&&h.name!=null&&Ps(c,h),Vs(E,g);var F=Vs(E,h);for(g=0;g<A.length;g+=2){var q=A[g],$=A[g+1];q==="style"?ks(c,$):q==="dangerouslySetInnerHTML"?Bo(c,$):q==="children"?Kr(c,$):be(c,q,$,F)}switch(E){case"input":Gr(c,h);break;case"textarea":jo(c,h);break;case"select":var U=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var J=h.value;J!=null?cn(c,!!h.multiple,J,!1):U!==!!h.multiple&&(h.defaultValue!=null?cn(c,!!h.multiple,h.defaultValue,!0):cn(c,!!h.multiple,h.multiple?[]:"",!1))}c[oo]=h}catch(ne){We(e,e.return,ne)}}break;case 6:if(_n(t,e),Fn(e),o&4){if(e.stateNode===null)throw Error(r(162));c=e.stateNode,h=e.memoizedProps;try{c.nodeValue=h}catch(ne){We(e,e.return,ne)}}break;case 3:if(_n(t,e),Fn(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Tr(t.containerInfo)}catch(ne){We(e,e.return,ne)}break;case 4:_n(t,e),Fn(e);break;case 13:_n(t,e),Fn(e),c=e.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Du=ze())),o&4&&Dd(e);break;case 22:if(q=s!==null&&s.memoizedState!==null,e.mode&1?(Rt=(F=Rt)||q,_n(t,e),Rt=F):_n(t,e),Fn(e),o&8192){if(F=e.memoizedState!==null,(e.stateNode.isHidden=F)&&!q&&(e.mode&1)!==0)for(X=e,q=e.child;q!==null;){for($=X=q;X!==null;){switch(U=X,J=U.child,U.tag){case 0:case 11:case 14:case 15:_o(4,U,U.return);break;case 1:ci(U,U.return);var Z=U.stateNode;if(typeof Z.componentWillUnmount=="function"){o=U,s=U.return;try{t=o,Z.props=t.memoizedProps,Z.state=t.memoizedState,Z.componentWillUnmount()}catch(ne){We(o,s,ne)}}break;case 5:ci(U,U.return);break;case 22:if(U.memoizedState!==null){Fd($);continue}}J!==null?(J.return=U,X=J):Fd($)}q=q.sibling}e:for(q=null,$=e;;){if($.tag===5){if(q===null){q=$;try{c=$.stateNode,F?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(E=$.stateNode,A=$.memoizedProps.style,g=A!=null&&A.hasOwnProperty("display")?A.display:null,E.style.display=pr("display",g))}catch(ne){We(e,e.return,ne)}}}else if($.tag===6){if(q===null)try{$.stateNode.nodeValue=F?"":$.memoizedProps}catch(ne){We(e,e.return,ne)}}else if(($.tag!==22&&$.tag!==23||$.memoizedState===null||$===e)&&$.child!==null){$.child.return=$,$=$.child;continue}if($===e)break e;for(;$.sibling===null;){if($.return===null||$.return===e)break e;q===$&&(q=null),$=$.return}q===$&&(q=null),$.sibling.return=$.return,$=$.sibling}}break;case 19:_n(t,e),Fn(e),o&4&&Dd(e);break;case 21:break;default:_n(t,e),Fn(e)}}function Fn(e){var t=e.flags;if(t&2){try{e:{for(var s=e.return;s!==null;){if(Vd(s)){var o=s;break e}s=s.return}throw Error(r(160))}switch(o.tag){case 5:var c=o.stateNode;o.flags&32&&(Kr(c,""),o.flags&=-33);var h=Nd(e);Vu(e,h,c);break;case 3:case 4:var g=o.stateNode.containerInfo,E=Nd(e);ku(e,E,g);break;default:throw Error(r(161))}}catch(A){We(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lg(e,t,s){X=e,Od(e)}function Od(e,t,s){for(var o=(e.mode&1)!==0;X!==null;){var c=X,h=c.child;if(c.tag===22&&o){var g=c.memoizedState!==null||Ma;if(!g){var E=c.alternate,A=E!==null&&E.memoizedState!==null||Rt;E=Ma;var F=Rt;if(Ma=g,(Rt=A)&&!F)for(X=c;X!==null;)g=X,A=g.child,g.tag===22&&g.memoizedState!==null?jd(c):A!==null?(A.return=g,X=A):jd(c);for(;h!==null;)X=h,Od(h),h=h.sibling;X=c,Ma=E,Rt=F}Ld(e)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,X=h):Ld(e)}}function Ld(e){for(;X!==null;){var t=X;if((t.flags&8772)!==0){var s=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Rt||Oa(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Rt)if(s===null)o.componentDidMount();else{var c=t.elementType===t.type?s.memoizedProps:gn(t.type,s.memoizedProps);o.componentDidUpdate(c,s.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var h=t.updateQueue;h!==null&&Fh(t,h,o);break;case 3:var g=t.updateQueue;if(g!==null){if(s=null,t.child!==null)switch(t.child.tag){case 5:s=t.child.stateNode;break;case 1:s=t.child.stateNode}Fh(t,g,s)}break;case 5:var E=t.stateNode;if(s===null&&t.flags&4){s=E;var A=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&s.focus();break;case"img":A.src&&(s.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var F=t.alternate;if(F!==null){var q=F.memoizedState;if(q!==null){var $=q.dehydrated;$!==null&&Tr($)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}Rt||t.flags&512&&Cu(t)}catch(U){We(t,t.return,U)}}if(t===e){X=null;break}if(s=t.sibling,s!==null){s.return=t.return,X=s;break}X=t.return}}function Fd(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var s=t.sibling;if(s!==null){s.return=t.return,X=s;break}X=t.return}}function jd(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var s=t.return;try{Oa(4,t)}catch(A){We(t,s,A)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var c=t.return;try{o.componentDidMount()}catch(A){We(t,c,A)}}var h=t.return;try{Cu(t)}catch(A){We(t,h,A)}break;case 5:var g=t.return;try{Cu(t)}catch(A){We(t,g,A)}}}catch(A){We(t,t.return,A)}if(t===e){X=null;break}var E=t.sibling;if(E!==null){E.return=t.return,X=E;break}X=t.return}}var ug=Math.ceil,La=Ce.ReactCurrentDispatcher,Nu=Ce.ReactCurrentOwner,an=Ce.ReactCurrentBatchConfig,Te=0,dt=null,nt=null,wt=0,Jt=0,hi=Pr(0),at=0,vo=null,fs=0,Fa=0,bu=0,wo=null,Lt=null,Du=0,di=1/0,or=null,ja=!1,Mu=null,Dr=null,Ba=!1,Mr=null,za=0,Eo=0,Ou=null,Ua=-1,qa=0;function Nt(){return(Te&6)!==0?ze():Ua!==-1?Ua:Ua=ze()}function Or(e){return(e.mode&1)===0?1:(Te&2)!==0&&wt!==0?wt&-wt:Km.transition!==null?(qa===0&&(qa=zi()),qa):(e=we,e!==0||(e=window.event,e=e===void 0?16:zs(e.type)),e)}function vn(e,t,s,o){if(50<Eo)throw Eo=0,Ou=null,Error(r(185));ts(e,s,o),((Te&2)===0||e!==dt)&&(e===dt&&((Te&2)===0&&(Fa|=s),at===4&&Lr(e,wt)),Ft(e,o),s===1&&Te===0&&(t.mode&1)===0&&(di=ze()+500,ya&&kr()))}function Ft(e,t){var s=e.callbackNode;es(e,t);var o=Qn(e,e===dt?wt:0);if(o===0)s!==null&&Ds(s),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(s!=null&&Ds(s),t===1)e.tag===0?Gm(zd.bind(null,e)):Ah(zd.bind(null,e)),zm(function(){(Te&6)===0&&kr()}),s=null;else{switch(xn(o)){case 1:s=Ms;break;case 4:s=Fi;break;case 16:s=Jr;break;case 536870912:s=Os;break;default:s=Jr}s=Wd(s,Bd.bind(null,e))}e.callbackPriority=t,e.callbackNode=s}}function Bd(e,t){if(Ua=-1,qa=0,(Te&6)!==0)throw Error(r(327));var s=e.callbackNode;if(fi()&&e.callbackNode!==s)return null;var o=Qn(e,e===dt?wt:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=$a(e,o);else{t=o;var c=Te;Te|=2;var h=qd();(dt!==e||wt!==t)&&(or=null,di=ze()+500,ms(e,t));do try{dg();break}catch(E){Ud(e,E)}while(!0);eu(),La.current=h,Te=c,nt!==null?t=0:(dt=null,wt=0,t=at)}if(t!==0){if(t===2&&(c=Bi(e),c!==0&&(o=c,t=Lu(e,c))),t===1)throw s=vo,ms(e,0),Lr(e,o),Ft(e,ze()),s;if(t===6)Lr(e,o);else{if(c=e.current.alternate,(o&30)===0&&!cg(c)&&(t=$a(e,o),t===2&&(h=Bi(e),h!==0&&(o=h,t=Lu(e,h))),t===1))throw s=vo,ms(e,0),Lr(e,o),Ft(e,ze()),s;switch(e.finishedWork=c,e.finishedLanes=o,t){case 0:case 1:throw Error(r(345));case 2:gs(e,Lt,or);break;case 3:if(Lr(e,o),(o&130023424)===o&&(t=Du+500-ze(),10<t)){if(Qn(e,0)!==0)break;if(c=e.suspendedLanes,(c&o)!==o){Nt(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=ql(gs.bind(null,e,Lt,or),t);break}gs(e,Lt,or);break;case 4:if(Lr(e,o),(o&4194240)===o)break;for(t=e.eventTimes,c=-1;0<o;){var g=31-qt(o);h=1<<g,g=t[g],g>c&&(c=g),o&=~h}if(o=c,o=ze()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*ug(o/1960))-o,10<o){e.timeoutHandle=ql(gs.bind(null,e,Lt,or),o);break}gs(e,Lt,or);break;case 5:gs(e,Lt,or);break;default:throw Error(r(329))}}}return Ft(e,ze()),e.callbackNode===s?Bd.bind(null,e):null}function Lu(e,t){var s=wo;return e.current.memoizedState.isDehydrated&&(ms(e,t).flags|=256),e=$a(e,t),e!==2&&(t=Lt,Lt=s,t!==null&&Fu(t)),e}function Fu(e){Lt===null?Lt=e:Lt.push.apply(Lt,e)}function cg(e){for(var t=e;;){if(t.flags&16384){var s=t.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var o=0;o<s.length;o++){var c=s[o],h=c.getSnapshot;c=c.value;try{if(!pn(h(),c))return!1}catch{return!1}}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lr(e,t){for(t&=~bu,t&=~Fa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var s=31-qt(t),o=1<<s;e[s]=-1,t&=~o}}function zd(e){if((Te&6)!==0)throw Error(r(327));fi();var t=Qn(e,0);if((t&1)===0)return Ft(e,ze()),null;var s=$a(e,t);if(e.tag!==0&&s===2){var o=Bi(e);o!==0&&(t=o,s=Lu(e,o))}if(s===1)throw s=vo,ms(e,0),Lr(e,t),Ft(e,ze()),s;if(s===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gs(e,Lt,or),Ft(e,ze()),null}function ju(e,t){var s=Te;Te|=1;try{return e(t)}finally{Te=s,Te===0&&(di=ze()+500,ya&&kr())}}function ps(e){Mr!==null&&Mr.tag===0&&(Te&6)===0&&fi();var t=Te;Te|=1;var s=an.transition,o=we;try{if(an.transition=null,we=1,e)return e()}finally{we=o,an.transition=s,Te=t,(Te&6)===0&&kr()}}function Bu(){Jt=hi.current,qe(hi)}function ms(e,t){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,Bm(s)),nt!==null)for(s=nt.return;s!==null;){var o=s;switch(Wl(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&ma();break;case 3:li(),qe(Dt),qe(St),lu();break;case 5:ou(o);break;case 4:li();break;case 13:qe(Ke);break;case 19:qe(Ke);break;case 10:tu(o.type._context);break;case 22:case 23:Bu()}s=s.return}if(dt=e,nt=e=Fr(e.current,null),wt=Jt=t,at=0,vo=null,bu=Fa=fs=0,Lt=wo=null,cs!==null){for(t=0;t<cs.length;t++)if(s=cs[t],o=s.interleaved,o!==null){s.interleaved=null;var c=o.next,h=s.pending;if(h!==null){var g=h.next;h.next=c,o.next=g}s.pending=o}cs=null}return e}function Ud(e,t){do{var s=nt;try{if(eu(),Ra.current=Va,Pa){for(var o=Qe.memoizedState;o!==null;){var c=o.queue;c!==null&&(c.pending=null),o=o.next}Pa=!1}if(ds=0,ht=ot=Qe=null,fo=!1,po=0,Nu.current=null,s===null||s.return===null){at=1,vo=t,nt=null;break}e:{var h=e,g=s.return,E=s,A=t;if(t=wt,E.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var F=A,q=E,$=q.tag;if((q.mode&1)===0&&($===0||$===11||$===15)){var U=q.alternate;U?(q.updateQueue=U.updateQueue,q.memoizedState=U.memoizedState,q.lanes=U.lanes):(q.updateQueue=null,q.memoizedState=null)}var J=fd(g);if(J!==null){J.flags&=-257,pd(J,g,E,h,t),J.mode&1&&dd(h,F,t),t=J,A=F;var Z=t.updateQueue;if(Z===null){var ne=new Set;ne.add(A),t.updateQueue=ne}else Z.add(A);break e}else{if((t&1)===0){dd(h,F,t),zu();break e}A=Error(r(426))}}else if(Ge&&E.mode&1){var Ze=fd(g);if(Ze!==null){(Ze.flags&65536)===0&&(Ze.flags|=256),pd(Ze,g,E,h,t),Xl(ui(A,E));break e}}h=A=ui(A,E),at!==4&&(at=2),wo===null?wo=[h]:wo.push(h),h=g;do{switch(h.tag){case 3:h.flags|=65536,t&=-t,h.lanes|=t;var b=cd(h,A,t);Lh(h,b);break e;case 1:E=A;var k=h.type,M=h.stateNode;if((h.flags&128)===0&&(typeof k.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Dr===null||!Dr.has(M)))){h.flags|=65536,t&=-t,h.lanes|=t;var K=hd(h,E,t);Lh(h,K);break e}}h=h.return}while(h!==null)}Gd(s)}catch(re){t=re,nt===s&&s!==null&&(nt=s=s.return);continue}break}while(!0)}function qd(){var e=La.current;return La.current=Va,e===null?Va:e}function zu(){(at===0||at===3||at===2)&&(at=4),dt===null||(fs&268435455)===0&&(Fa&268435455)===0||Lr(dt,wt)}function $a(e,t){var s=Te;Te|=2;var o=qd();(dt!==e||wt!==t)&&(or=null,ms(e,t));do try{hg();break}catch(c){Ud(e,c)}while(!0);if(eu(),Te=s,La.current=o,nt!==null)throw Error(r(261));return dt=null,wt=0,at}function hg(){for(;nt!==null;)$d(nt)}function dg(){for(;nt!==null&&!Wr();)$d(nt)}function $d(e){var t=Hd(e.alternate,e,Jt);e.memoizedProps=e.pendingProps,t===null?Gd(e):nt=t,Nu.current=null}function Gd(e){var t=e;do{var s=t.alternate;if(e=t.return,(t.flags&32768)===0){if(s=sg(s,t,Jt),s!==null){nt=s;return}}else{if(s=ig(s,t),s!==null){s.flags&=32767,nt=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{at=6,nt=null;return}}if(t=t.sibling,t!==null){nt=t;return}nt=t=e}while(t!==null);at===0&&(at=5)}function gs(e,t,s){var o=we,c=an.transition;try{an.transition=null,we=1,fg(e,t,s,o)}finally{an.transition=c,we=o}return null}function fg(e,t,s,o){do fi();while(Mr!==null);if((Te&6)!==0)throw Error(r(327));s=e.finishedWork;var c=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var h=s.lanes|s.childLanes;if(Rl(e,h),e===dt&&(nt=dt=null,wt=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Ba||(Ba=!0,Wd(Jr,function(){return fi(),null})),h=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||h){h=an.transition,an.transition=null;var g=we;we=1;var E=Te;Te|=4,Nu.current=null,ag(e,s),Md(s,e),bm(zl),Jn=!!Bl,zl=Bl=null,e.current=s,lg(s),Kn(),Te=E,we=g,an.transition=h}else e.current=s;if(Ba&&(Ba=!1,Mr=e,za=c),h=e.pendingLanes,h===0&&(Dr=null),Yo(s.stateNode),Ft(e,ze()),t!==null)for(o=e.onRecoverableError,s=0;s<t.length;s++)c=t[s],o(c.value,{componentStack:c.stack,digest:c.digest});if(ja)throw ja=!1,e=Mu,Mu=null,e;return(za&1)!==0&&e.tag!==0&&fi(),h=e.pendingLanes,(h&1)!==0?e===Ou?Eo++:(Eo=0,Ou=e):Eo=0,kr(),null}function fi(){if(Mr!==null){var e=xn(za),t=an.transition,s=we;try{if(an.transition=null,we=16>e?16:e,Mr===null)var o=!1;else{if(e=Mr,Mr=null,za=0,(Te&6)!==0)throw Error(r(331));var c=Te;for(Te|=4,X=e.current;X!==null;){var h=X,g=h.child;if((X.flags&16)!==0){var E=h.deletions;if(E!==null){for(var A=0;A<E.length;A++){var F=E[A];for(X=F;X!==null;){var q=X;switch(q.tag){case 0:case 11:case 15:_o(8,q,h)}var $=q.child;if($!==null)$.return=q,X=$;else for(;X!==null;){q=X;var U=q.sibling,J=q.return;if(kd(q),q===F){X=null;break}if(U!==null){U.return=J,X=U;break}X=J}}}var Z=h.alternate;if(Z!==null){var ne=Z.child;if(ne!==null){Z.child=null;do{var Ze=ne.sibling;ne.sibling=null,ne=Ze}while(ne!==null)}}X=h}}if((h.subtreeFlags&2064)!==0&&g!==null)g.return=h,X=g;else e:for(;X!==null;){if(h=X,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:_o(9,h,h.return)}var b=h.sibling;if(b!==null){b.return=h.return,X=b;break e}X=h.return}}var k=e.current;for(X=k;X!==null;){g=X;var M=g.child;if((g.subtreeFlags&2064)!==0&&M!==null)M.return=g,X=M;else e:for(g=k;X!==null;){if(E=X,(E.flags&2048)!==0)try{switch(E.tag){case 0:case 11:case 15:Oa(9,E)}}catch(re){We(E,E.return,re)}if(E===g){X=null;break e}var K=E.sibling;if(K!==null){K.return=E.return,X=K;break e}X=E.return}}if(Te=c,kr(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(Yr,e)}catch{}o=!0}return o}finally{we=s,an.transition=t}}return!1}function Kd(e,t,s){t=ui(s,t),t=cd(e,t,1),e=Nr(e,t,1),t=Nt(),e!==null&&(ts(e,1,t),Ft(e,t))}function We(e,t,s){if(e.tag===3)Kd(e,e,s);else for(;t!==null;){if(t.tag===3){Kd(t,e,s);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Dr===null||!Dr.has(o))){e=ui(s,e),e=hd(t,e,1),t=Nr(t,e,1),e=Nt(),t!==null&&(ts(t,1,e),Ft(t,e));break}}t=t.return}}function pg(e,t,s){var o=e.pingCache;o!==null&&o.delete(t),t=Nt(),e.pingedLanes|=e.suspendedLanes&s,dt===e&&(wt&s)===s&&(at===4||at===3&&(wt&130023424)===wt&&500>ze()-Du?ms(e,0):bu|=s),Ft(e,t)}function Qd(e,t){t===0&&((e.mode&1)===0?t=1:(t=wr,wr<<=1,(wr&130023424)===0&&(wr=4194304)));var s=Nt();e=rr(e,t),e!==null&&(ts(e,t,s),Ft(e,s))}function mg(e){var t=e.memoizedState,s=0;t!==null&&(s=t.retryLane),Qd(e,s)}function gg(e,t){var s=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(s=c.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(r(314))}o!==null&&o.delete(t),Qd(e,s)}var Hd;Hd=function(e,t,s){if(e!==null)if(e.memoizedProps!==t.pendingProps||Dt.current)Ot=!0;else{if((e.lanes&s)===0&&(t.flags&128)===0)return Ot=!1,rg(e,t,s);Ot=(e.flags&131072)!==0}else Ot=!1,Ge&&(t.flags&1048576)!==0&&Rh(t,va,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Da(e,t),e=t.pendingProps;var c=ti(t,St.current);ai(t,s),c=hu(null,t,o,e,c,s);var h=du();return t.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Mt(o)?(h=!0,ga(t)):h=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,su(t),c.updater=Na,t.stateNode=c,c._reactInternals=t,_u(t,o,e,s),t=Iu(null,t,o,!0,h,s)):(t.tag=0,Ge&&h&&Hl(t),Vt(null,t,c,s),t=t.child),t;case 16:o=t.elementType;e:{switch(Da(e,t),e=t.pendingProps,c=o._init,o=c(o._payload),t.type=o,c=t.tag=_g(o),e=gn(o,e),c){case 0:t=Eu(null,t,o,e,s);break e;case 1:t=wd(null,t,o,e,s);break e;case 11:t=md(null,t,o,e,s);break e;case 14:t=gd(null,t,o,gn(o.type,e),s);break e}throw Error(r(306,o,""))}return t;case 0:return o=t.type,c=t.pendingProps,c=t.elementType===o?c:gn(o,c),Eu(e,t,o,c,s);case 1:return o=t.type,c=t.pendingProps,c=t.elementType===o?c:gn(o,c),wd(e,t,o,c,s);case 3:e:{if(Ed(t),e===null)throw Error(r(387));o=t.pendingProps,h=t.memoizedState,c=h.element,Oh(e,t),xa(t,o,null,s);var g=t.memoizedState;if(o=g.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},t.updateQueue.baseState=h,t.memoizedState=h,t.flags&256){c=ui(Error(r(423)),t),t=Id(e,t,o,s,c);break e}else if(o!==c){c=ui(Error(r(424)),t),t=Id(e,t,o,s,c);break e}else for(Wt=Rr(t.stateNode.containerInfo.firstChild),Ht=t,Ge=!0,mn=null,s=Dh(t,null,o,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(si(),o===c){t=ir(e,t,s);break e}Vt(e,t,o,s)}t=t.child}return t;case 5:return jh(t),e===null&&Yl(t),o=t.type,c=t.pendingProps,h=e!==null?e.memoizedProps:null,g=c.children,Ul(o,c)?g=null:h!==null&&Ul(o,h)&&(t.flags|=32),vd(e,t),Vt(e,t,g,s),t.child;case 6:return e===null&&Yl(t),null;case 13:return Td(e,t,s);case 4:return iu(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=ii(t,null,o,s):Vt(e,t,o,s),t.child;case 11:return o=t.type,c=t.pendingProps,c=t.elementType===o?c:gn(o,c),md(e,t,o,c,s);case 7:return Vt(e,t,t.pendingProps,s),t.child;case 8:return Vt(e,t,t.pendingProps.children,s),t.child;case 12:return Vt(e,t,t.pendingProps.children,s),t.child;case 10:e:{if(o=t.type._context,c=t.pendingProps,h=t.memoizedProps,g=c.value,Be(Ia,o._currentValue),o._currentValue=g,h!==null)if(pn(h.value,g)){if(h.children===c.children&&!Dt.current){t=ir(e,t,s);break e}}else for(h=t.child,h!==null&&(h.return=t);h!==null;){var E=h.dependencies;if(E!==null){g=h.child;for(var A=E.firstContext;A!==null;){if(A.context===o){if(h.tag===1){A=sr(-1,s&-s),A.tag=2;var F=h.updateQueue;if(F!==null){F=F.shared;var q=F.pending;q===null?A.next=A:(A.next=q.next,q.next=A),F.pending=A}}h.lanes|=s,A=h.alternate,A!==null&&(A.lanes|=s),nu(h.return,s,t),E.lanes|=s;break}A=A.next}}else if(h.tag===10)g=h.type===t.type?null:h.child;else if(h.tag===18){if(g=h.return,g===null)throw Error(r(341));g.lanes|=s,E=g.alternate,E!==null&&(E.lanes|=s),nu(g,s,t),g=h.sibling}else g=h.child;if(g!==null)g.return=h;else for(g=h;g!==null;){if(g===t){g=null;break}if(h=g.sibling,h!==null){h.return=g.return,g=h;break}g=g.return}h=g}Vt(e,t,c.children,s),t=t.child}return t;case 9:return c=t.type,o=t.pendingProps.children,ai(t,s),c=sn(c),o=o(c),t.flags|=1,Vt(e,t,o,s),t.child;case 14:return o=t.type,c=gn(o,t.pendingProps),c=gn(o.type,c),gd(e,t,o,c,s);case 15:return yd(e,t,t.type,t.pendingProps,s);case 17:return o=t.type,c=t.pendingProps,c=t.elementType===o?c:gn(o,c),Da(e,t),t.tag=1,Mt(o)?(e=!0,ga(t)):e=!1,ai(t,s),ld(t,o,c),_u(t,o,c,s),Iu(null,t,o,!0,e,s);case 19:return xd(e,t,s);case 22:return _d(e,t,s)}throw Error(r(156,t.tag))};function Wd(e,t){return Li(e,t)}function yg(e,t,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(e,t,s,o){return new yg(e,t,s,o)}function Uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _g(e){if(typeof e=="function")return Uu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===V)return 11;if(e===ct)return 14}return 2}function Fr(e,t){var s=e.alternate;return s===null?(s=ln(e.tag,t,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=t,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,t=e.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function Ga(e,t,s,o,c,h){var g=2;if(o=e,typeof e=="function")Uu(e)&&(g=1);else if(typeof e=="string")g=5;else e:switch(e){case C:return ys(s.children,c,h,t);case _:g=8,c|=8;break;case I:return e=ln(12,s,t,c|2),e.elementType=I,e.lanes=h,e;case w:return e=ln(13,s,t,c),e.elementType=w,e.lanes=h,e;case ke:return e=ln(19,s,t,c),e.elementType=ke,e.lanes=h,e;case $e:return Ka(s,c,h,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:g=10;break e;case R:g=9;break e;case V:g=11;break e;case ct:g=14;break e;case It:g=16,o=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return t=ln(g,s,t,c),t.elementType=e,t.type=o,t.lanes=h,t}function ys(e,t,s,o){return e=ln(7,e,o,t),e.lanes=s,e}function Ka(e,t,s,o){return e=ln(22,e,o,t),e.elementType=$e,e.lanes=s,e.stateNode={isHidden:!1},e}function qu(e,t,s){return e=ln(6,e,null,t),e.lanes=s,e}function $u(e,t,s){return t=ln(4,e.children!==null?e.children:[],e.key,t),t.lanes=s,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vg(e,t,s,o,c){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ui(0),this.expirationTimes=Ui(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ui(0),this.identifierPrefix=o,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Gu(e,t,s,o,c,h,g,E,A){return e=new vg(e,t,s,E,A),t===1?(t=1,h===!0&&(t|=8)):t=0,h=ln(3,null,null,t),e.current=h,h.stateNode=e,h.memoizedState={element:o,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},su(h),e}function wg(e,t,s){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:o==null?null:""+o,children:e,containerInfo:t,implementation:s}}function Jd(e){if(!e)return Cr;e=e._reactInternals;e:{if(dn(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Mt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var s=e.type;if(Mt(s))return Sh(e,s,t)}return t}function Yd(e,t,s,o,c,h,g,E,A){return e=Gu(s,o,!0,e,c,h,g,E,A),e.context=Jd(null),s=e.current,o=Nt(),c=Or(s),h=sr(o,c),h.callback=t??null,Nr(s,h,c),e.current.lanes=c,ts(e,c,o),Ft(e,o),e}function Qa(e,t,s,o){var c=t.current,h=Nt(),g=Or(c);return s=Jd(s),t.context===null?t.context=s:t.pendingContext=s,t=sr(h,g),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Nr(c,t,g),e!==null&&(vn(e,c,g,h),Sa(e,c,g)),g}function Ha(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<t?s:t}}function Ku(e,t){Xd(e,t),(e=e.alternate)&&Xd(e,t)}function Eg(){return null}var Zd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qu(e){this._internalRoot=e}Wa.prototype.render=Qu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));Qa(e,t,null,null)},Wa.prototype.unmount=Qu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ps(function(){Qa(null,e,null,null)}),t[Zn]=null}};function Wa(e){this._internalRoot=e}Wa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ki();e={blockedOn:null,target:e,priority:t};for(var s=0;s<$t.length&&t!==0&&t<$t[s].priority;s++);$t.splice(s,0,e),s===0&&js(e)}};function Hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ef(){}function Ig(e,t,s,o,c){if(c){if(typeof o=="function"){var h=o;o=function(){var F=Ha(g);h.call(F)}}var g=Yd(t,o,e,0,null,!1,!1,"",ef);return e._reactRootContainer=g,e[Zn]=g.current,so(e.nodeType===8?e.parentNode:e),ps(),g}for(;c=e.lastChild;)e.removeChild(c);if(typeof o=="function"){var E=o;o=function(){var F=Ha(A);E.call(F)}}var A=Gu(e,0,!1,null,null,!1,!1,"",ef);return e._reactRootContainer=A,e[Zn]=A.current,so(e.nodeType===8?e.parentNode:e),ps(function(){Qa(t,A,s,o)}),A}function Ya(e,t,s,o,c){var h=s._reactRootContainer;if(h){var g=h;if(typeof c=="function"){var E=c;c=function(){var A=Ha(g);E.call(A)}}Qa(t,g,e,c)}else g=Ig(s,t,e,c,o);return Ha(g)}$i=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var s=Pe(t.pendingLanes);s!==0&&(qi(t,s|1),Ft(t,ze()),(Te&6)===0&&(di=ze()+500,kr()))}break;case 13:ps(function(){var o=rr(e,1);if(o!==null){var c=Nt();vn(o,e,1,c)}}),Ku(e,1)}},Ls=function(e){if(e.tag===13){var t=rr(e,134217728);if(t!==null){var s=Nt();vn(t,e,134217728,s)}Ku(e,134217728)}},Gi=function(e){if(e.tag===13){var t=Or(e),s=rr(e,t);if(s!==null){var o=Nt();vn(s,e,t,o)}Ku(e,t)}},Ki=function(){return we},Qi=function(e,t){var s=we;try{return we=e,t()}finally{we=s}},qn=function(e,t,s){switch(t){case"input":if(Gr(e,s),t=s.name,s.type==="radio"&&t!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<s.length;t++){var o=s[t];if(o!==e&&o.form===e.form){var c=pa(o);if(!c)throw Error(r(90));Pi(o),Gr(o,c)}}}break;case"textarea":jo(e,s);break;case"select":t=s.value,t!=null&&cn(e,!!s.multiple,t,!1)}},Uo=ju,qo=ps;var Tg={usingClientEntryPoint:!1,Events:[ao,Zs,pa,gr,yr,ju]},Io={findFiberByHostInstance:os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sg={bundleType:Io.bundleType,version:Io.version,rendererPackageName:Io.rendererPackageName,rendererConfig:Io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jo(e),e===null?null:e.stateNode},findFiberByHostInstance:Io.findFiberByHostInstance||Eg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xa.isDisabled&&Xa.supportsFiber)try{Yr=Xa.inject(Sg),Ut=Xa}catch{}}return jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tg,jt.createPortal=function(e,t){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hu(t))throw Error(r(200));return wg(e,t,null,s)},jt.createRoot=function(e,t){if(!Hu(e))throw Error(r(299));var s=!1,o="",c=Zd;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Gu(e,1,!1,null,null,s,!1,o,c),e[Zn]=t.current,so(e.nodeType===8?e.parentNode:e),new Qu(t)},jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=Jo(t),e=e===null?null:e.stateNode,e},jt.flushSync=function(e){return ps(e)},jt.hydrate=function(e,t,s){if(!Ja(t))throw Error(r(200));return Ya(null,e,t,!0,s)},jt.hydrateRoot=function(e,t,s){if(!Hu(e))throw Error(r(405));var o=s!=null&&s.hydratedSources||null,c=!1,h="",g=Zd;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(g=s.onRecoverableError)),t=Yd(t,null,e,1,s??null,c,!1,h,g),e[Zn]=t.current,so(e),o)for(e=0;e<o.length;e++)s=o[e],c=s._getVersion,c=c(s._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[s,c]:t.mutableSourceEagerHydrationData.push(s,c);return new Wa(t)},jt.render=function(e,t,s){if(!Ja(t))throw Error(r(200));return Ya(null,e,t,!1,s)},jt.unmountComponentAtNode=function(e){if(!Ja(e))throw Error(r(40));return e._reactRootContainer?(ps(function(){Ya(null,null,e,!1,function(){e._reactRootContainer=null,e[Zn]=null})}),!0):!1},jt.unstable_batchedUpdates=ju,jt.unstable_renderSubtreeIntoContainer=function(e,t,s,o){if(!Ja(s))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return Ya(e,t,s,!1,o)},jt.version="18.3.1-next-f1338f8080-20240426",jt}var uf;function bg(){if(uf)return Yu.exports;uf=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(n){console.error(n)}}return a(),Yu.exports=Ng(),Yu.exports}var cf;function Dg(){if(cf)return Za;cf=1;var a=bg();return Za.createRoot=a.createRoot,Za.hydrateRoot=a.hydrateRoot,Za}var Mg=Dg();const Og=op(Mg);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ap=(...a)=>a.filter((n,r,l)=>!!n&&n.trim()!==""&&l.indexOf(n)===r).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Fg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=me.forwardRef(({color:a="currentColor",size:n=24,strokeWidth:r=2,absoluteStrokeWidth:l,className:u="",children:f,iconNode:m,...v},S)=>me.createElement("svg",{ref:S,...Fg,width:n,height:n,stroke:a,strokeWidth:l?Number(r)*24/Number(n):r,className:ap("lucide",u),...v},[...m.map(([x,O])=>me.createElement(x,O)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=(a,n)=>{const r=me.forwardRef(({className:l,...u},f)=>me.createElement(jg,{ref:f,iconNode:n,className:ap(`lucide-${Lg(a)}`,l),...u}));return r.displayName=`${a}`,r};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=ut("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=ut("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);function zg({onEnter:a}){const[n,r]=me.useState(!1),l=()=>{r(!0),setTimeout(()=>{a()},1500)};return T.jsxs("div",{className:`fixed inset-0 bg-stone-900 flex flex-col items-center justify-center transition-opacity duration-1000 z-50 ${n?"opacity-0 pointer-events-none":"opacity-100"}`,children:[T.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[T.jsx("div",{className:"absolute top-1/4 left-1/4 w-64 h-64 bg-rose-900/20 rounded-full blur-3xl"}),T.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-64 h-64 bg-stone-700/30 rounded-full blur-3xl"})]}),T.jsxs("div",{className:`z-10 flex flex-col items-center transition-all duration-1000 transform ${n?"scale-110 translate-y-[-50px]":"scale-100"}`,children:[T.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-stone-200 mb-4 tracking-widest text-center",children:["태구 ",T.jsx("span",{className:"text-rose-400 mx-2",children:"&"})," 희영"]}),T.jsx("p",{className:"text-stone-400 text-sm tracking-widest mb-12",children:"2026. 3. 13. FRI 11:30 AM"}),T.jsxs("button",{onClick:l,className:"group relative px-8 py-4 bg-stone-800 border border-stone-600 rounded-full overflow-hidden transition-all hover:bg-stone-700 active:scale-95",children:[T.jsx("div",{className:"absolute inset-0 bg-rose-500/10 w-0 group-hover:w-full transition-all duration-500 ease-out"}),T.jsxs("span",{className:"relative flex items-center space-x-2 text-stone-200",children:[T.jsx(xc,{size:18,className:"text-rose-400 animate-pulse"}),T.jsx("span",{className:"tracking-widest text-sm",children:"초대장 열어보기"})]})]})]})]})}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=ut("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]),xs=()=>{const[a,n]=me.useState(!1),r=me.useRef(null);return me.useEffect(()=>{const l=setTimeout(()=>n(!0),800),u=new IntersectionObserver(([f])=>{f.isIntersecting&&(n(!0),clearTimeout(l),u.unobserve(f.target))},{threshold:.05});return r.current&&u.observe(r.current),()=>{u.disconnect(),clearTimeout(l)}},[]),[r,a]};function qg(){const[a,n]=me.useState({days:0,hours:0,minutes:0,seconds:0});me.useEffect(()=>{const l=new Date("2026-03-13T11:30:00"),u=setInterval(()=>{const m=l-new Date;m>0?n({days:Math.floor(m/(1e3*60*60*24)),hours:Math.floor(m/(1e3*60*60)%24),minutes:Math.floor(m/1e3/60%60),seconds:Math.floor(m/1e3%60)}):clearInterval(u)},1e3);return()=>clearInterval(u)},[]);const r=[{label:"DAYS",value:a.days},{label:"HOURS",value:a.hours},{label:"MIN",value:a.minutes},{label:"SEC",value:a.seconds}];return T.jsx("div",{className:"flex space-x-4 mt-8",children:r.map((l,u)=>T.jsxs("div",{className:"flex flex-col items-center",children:[T.jsx("div",{className:"bg-white/40 backdrop-blur-sm border border-white/20 w-12 h-12 rounded-lg flex items-center justify-center shadow-sm mb-1",children:T.jsx("span",{className:"text-lg font-serif text-stone-800",children:String(l.value).padStart(2,"0")})}),T.jsx("span",{className:"text-[9px] tracking-tighter text-stone-500 font-bold",children:l.label})]},u))})}function $g(){const[a,n]=xs(),r=()=>{const S=`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("강태구 & 신희영 결혼식")}&dates=20260313T113000/20260313T143000&details=${encodeURIComponent("두 사람의 소중한 시작을 축복해 주세요.")}&location=${encodeURIComponent("메이필드 호텔 봉래헌")}`;window.open(S,"_blank")};return T.jsxs("div",{className:"relative w-full h-[100dvh] overflow-hidden flex flex-col items-center justify-between pb-32 pt-20",id:"home",children:[T.jsxs("div",{className:"absolute inset-0",children:[T.jsx("img",{src:"/th-wedding/img/main_img.png",alt:"Wedding Hero",className:"w-full h-full object-cover object-[center_top] opacity-90"}),T.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#FDFBF7] via-white/40 to-white/10 opacity-90"}),T.jsx("div",{className:"absolute inset-0 bg-white/5"})]}),T.jsxs("div",{ref:a,className:`relative z-10 text-center flex flex-col items-center px-4 max-w-full transition-all duration-1000 ${n?"opacity-100 translate-y-0":"opacity-0 -translate-y-4"}`,children:[T.jsx("p",{className:"text-xs md:text-sm tracking-[0.4em] text-stone-700 mb-6 font-medium",children:"WE ARE GETTING MARRIED"}),T.jsxs("h1",{className:"text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 mb-3 drop-shadow-sm font-light tracking-widest whitespace-nowrap",children:["강태구 ",T.jsx("span",{className:"text-rose-400 text-3xl sm:text-4xl mx-2 font-light",children:"&"})," 신희영"]}),T.jsxs("div",{className:"flex flex-col items-center gap-1",children:[T.jsx("p",{className:"text-sm md:text-base tracking-[0.1em] text-stone-800 font-medium",children:"2026년 3월 13일 금요일 오전 11시 30분"}),T.jsx("p",{className:"text-sm md:text-base text-stone-800 font-medium tracking-wide",children:"메이필드 호텔 봉래헌"})]})]}),T.jsxs("div",{className:`relative z-10 flex flex-col items-center transition-all duration-1000 delay-300 ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[T.jsx(qg,{}),T.jsxs("button",{onClick:r,className:"mt-10 flex items-center space-x-2 px-6 py-2.5 bg-white/60 backdrop-blur-sm border border-stone-200 rounded-full text-stone-600 text-[11px] font-bold hover:bg-white/80 transition-all shadow-sm",children:[T.jsx(Ug,{size:14}),T.jsx("span",{children:"캘린더에 일정 추가"})]})]})]})}function Gg(){const[a,n]=xs();return T.jsx("section",{className:"py-24 px-6 text-center",id:"greeting",children:T.jsxs("div",{ref:a,className:`transition-all duration-1000 ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[T.jsx(xc,{className:"mx-auto text-rose-200 mb-8",size:28,strokeWidth:1.5}),T.jsx("h2",{className:"text-xl font-serif tracking-widest mb-12 text-stone-800 font-bold",children:"결혼합니다"}),T.jsxs("div",{className:"space-y-6 text-stone-700 leading-relaxed text-[15px] break-keep font-medium",children:[T.jsxs("p",{children:["서로를 마주 보며 다져온 인연을",T.jsx("br",{}),"이제는 함께 같은 곳을 바라보며",T.jsx("br",{}),"걸어가려 합니다."]}),T.jsxs("p",{children:["화려하고 거창한 예식보다는",T.jsx("br",{}),"진실한 약속을 나누는 자리가 더 뜻깊다고 생각하여,",T.jsx("br",{}),"가족분들만 모시고 조촐한 식사 자리로",T.jsx("br",{}),"결혼식을 대신하게 되었습니다."]}),T.jsxs("p",{children:["부득이하게 많은 분들을 모시지 못해",T.jsx("br",{}),"송구하고 아쉬운 마음이 크지만,",T.jsx("br",{}),"멀리서나마 저희의 새로운 출발을 축복해 주신다면",T.jsx("br",{}),"그 마음 깊이 간직하며 예쁘게 잘 살겠습니다."]})]}),T.jsxs("div",{className:"mt-16 space-y-4 text-[15px] text-stone-800 font-bold",children:[T.jsxs("p",{children:["강영태 · 김경자 ",T.jsx("span",{className:"text-stone-500 font-normal mx-2",children:"의 아들"})," 강태구"]}),T.jsxs("p",{children:["신현갑 · 송현숙 ",T.jsx("span",{className:"text-stone-500 font-normal mx-2",children:"의 딸"})," 신희영"]})]})]})})}const _s=[{question:"태구와 희영이 처음 만난 곳은?",options:["제주도 여행","대학교 동아리","회사 프로젝트","친구의 소개"],answer:3},{question:"두 사람이 가장 좋아하는 데이트 음식은?",options:["달달한 마카롱","매콤한 떡볶이","기름진 삼겹살","시원한 평양냉면"],answer:1},{question:"태구가 희영에게 프로포즈한 장소는?",options:["한강 유람선","처음 만난 카페","집 앞 놀이터","아직 안 함(!)"],answer:2}];function Kg(){const[a,n]=xs(),[r,l]=me.useState(0),[u,f]=me.useState(0),[m,v]=me.useState(!1),[S,x]=me.useState(null),O=L=>{S===null&&(x(L),setTimeout(()=>{L===_s[r].answer&&f(B=>B+1),r<_s.length-1?(l(B=>B+1),x(null)):v(!0)},1e3))};return T.jsx("section",{className:"py-24 bg-stone-100/50 px-6",id:"quiz",children:T.jsxs("div",{ref:a,className:`max-w-md mx-auto transition-all duration-1000 ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[T.jsxs("div",{className:"text-center mb-8",children:[T.jsx("span",{className:"text-xs font-bold tracking-widest text-rose-400 bg-rose-50 px-3 py-1 rounded-full",children:"MINI EVENT"}),T.jsx("h2",{className:"text-xl font-serif mt-4 text-stone-800 font-bold",children:"신랑 신부 모의고사"}),T.jsx("p",{className:"text-stone-600 text-sm mt-2 font-medium",children:"우리를 얼마나 잘 알고 계신가요?"})]}),T.jsx("div",{className:"bg-white rounded-3xl p-6 shadow-sm border border-stone-200",children:m?T.jsxs("div",{className:"text-center py-8",children:[T.jsx("div",{className:"w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-4",children:T.jsxs("span",{className:"text-3xl font-bold text-rose-400",children:[u*33+1,"점"]})}),T.jsx("h3",{className:"text-xl font-medium text-stone-800 mb-2",children:u===3?"완벽해요! 우리들의 찐친 인증 👏":u===2?"오! 제법 잘 알고 계시네요 😉":"괜찮아요, 식장에서 더 알아가요 🤍"}),T.jsx("p",{className:"text-stone-600 font-medium text-sm mb-6",children:"참여해주셔서 감사합니다."}),T.jsx("button",{onClick:()=>{l(0),f(0),v(!1),x(null)},className:"text-sm text-stone-600 font-bold underline underline-offset-4",children:"다시 풀어보기"})]}):T.jsxs("div",{children:[T.jsxs("div",{className:"flex justify-between items-center mb-6",children:[T.jsxs("span",{className:"text-sm font-bold text-stone-500",children:["Q ",r+1," / ",_s.length]}),T.jsx("div",{className:"flex space-x-1",children:_s.map((L,B)=>T.jsx("div",{className:`h-1.5 w-6 rounded-full ${B<=r?"bg-rose-300":"bg-stone-100"}`},B))})]}),T.jsx("h3",{className:"text-lg font-medium text-stone-800 mb-6 break-keep",children:_s[r].question}),T.jsx("div",{className:"space-y-3",children:_s[r].options.map((L,B)=>{let W="w-full text-left px-5 py-4 rounded-xl border text-sm transition-all ";return S===null?W+="border-stone-300 text-stone-700 font-medium hover:bg-stone-50 hover:border-stone-400":B===_s[r].answer?W+="bg-emerald-50 border-emerald-200 text-emerald-700 font-medium":B===S?W+="bg-rose-50 border-rose-200 text-rose-700":W+="border-stone-100 text-stone-300 opacity-50",T.jsx("button",{onClick:()=>O(B),className:W,disabled:S!==null,children:L},B)})})]})})]})})}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=ut("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=ut("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=ut("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=ut("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Jg(){const[a,n]=xs(),[r,l]=me.useState(null),[u,f]=me.useState(0),m=me.useRef(null),v=["/th-wedding/img/pages/KakaoTalk_20260305_230912710.png","/th-wedding/img/pages/KakaoTalk_20260305_232813657.png","/th-wedding/img/pages/clip1772719635985.png","/th-wedding/img/pages/clip1772719933405.png","/th-wedding/img/pages/clip1772719961777.png","/th-wedding/img/pages/clip1772720241909.png","/th-wedding/img/pages/clip1772720265226.png","/th-wedding/img/pages/clip1772720440413.png","/th-wedding/img/pages/clip1772720601331.png","/th-wedding/img/pages/clip1772721300357.png"],S=me.useCallback(()=>{var te;if(!m.current)return;const L=m.current,B=L.scrollLeft,W=((te=L.firstElementChild)==null?void 0:te.offsetWidth)||300,se=Math.round(B/(W+16));f(Math.min(se,v.length-1))},[v.length]);me.useEffect(()=>{const L=m.current;if(L)return L.addEventListener("scroll",S,{passive:!0}),()=>L.removeEventListener("scroll",S)},[S]);const x=L=>{var te;if(!m.current)return;const B=m.current,se=((((te=B.firstElementChild)==null?void 0:te.offsetWidth)||300)+16)*L;B.scrollBy({left:se,behavior:"smooth"})},O=L=>{var se;if(!m.current)return;const B=m.current,W=((se=B.firstElementChild)==null?void 0:se.offsetWidth)||300;B.scrollTo({left:L*(W+16),behavior:"smooth"})};return T.jsxs("section",{className:"py-24 bg-white overflow-hidden",id:"gallery",ref:a,children:[T.jsxs("div",{className:`max-w-2xl mx-auto transition-all duration-1000 ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[T.jsxs("div",{className:"text-center mb-8 px-6",children:[T.jsx(lp,{className:"mx-auto text-rose-200 mb-4",size:28,strokeWidth:1.5}),T.jsx("h2",{className:"text-xl font-serif tracking-widest text-stone-800 font-bold",children:"우리의 빛나는 순간"}),T.jsx("p",{className:"text-xs text-stone-500 mt-3 animate-pulse font-medium",children:"사진을 누르면 크게 보실 수 있어요 📸"})]}),T.jsxs("div",{className:"relative group/gallery",children:[u>0&&T.jsx("button",{onClick:()=>x(-1),className:"hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg items-center justify-center text-stone-600 hover:bg-white hover:text-stone-900 hover:scale-110 transition-all opacity-0 group-hover/gallery:opacity-100",children:T.jsx(Qg,{size:20})}),u<v.length-1&&T.jsx("button",{onClick:()=>x(1),className:"hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg items-center justify-center text-stone-600 hover:bg-white hover:text-stone-900 hover:scale-110 transition-all opacity-0 group-hover/gallery:opacity-100",children:T.jsx(Hg,{size:20})}),T.jsx("div",{ref:m,className:"flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 space-x-4 pb-4",children:v.map((L,B)=>T.jsx("div",{className:"flex-none w-[80vw] sm:w-[300px] snap-center",children:T.jsxs("div",{className:"rounded-xl overflow-hidden shadow-sm aspect-[4/5] cursor-zoom-in group relative",onClick:()=>l(L),children:[T.jsx("img",{src:L,alt:`Gallery ${B+1}`,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"}),T.jsx("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"})]})},B))})]}),T.jsx("div",{className:"flex justify-center items-center space-x-1.5 mt-4 px-6",children:v.map((L,B)=>T.jsx("button",{onClick:()=>O(B),className:`rounded-full transition-all duration-300 ${u===B?"w-5 h-1.5 bg-rose-300":"w-1.5 h-1.5 bg-stone-200 hover:bg-stone-300"}`},B))})]}),r&&T.jsxs("div",{className:"fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300",onClick:()=>l(null),children:[T.jsx("button",{className:"absolute top-8 right-8 text-white p-2",onClick:()=>l(null),children:T.jsx(Wg,{size:32})}),T.jsx("img",{src:r,alt:"Zoomed",className:"max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"})]})]})}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=ut("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);function Yg(){const[a,n]=xs(),r=()=>{window.open("https://map.naver.com/p/entry/place/11678840","_blank")},l=()=>{window.open("https://map.kakao.com/link/to/메이필드호텔 봉래헌,37.5478974,126.817971","_blank")},u=()=>{window.open("tmap://route?goalname=메이필드호텔%20봉래헌&goalx=126.817971&goaly=37.5478974","_blank")};return T.jsx("section",{className:"py-24 px-6 bg-[#FDFBF7]",id:"location",children:T.jsxs("div",{ref:a,className:`max-w-lg mx-auto transition-all duration-1000 ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[T.jsxs("div",{className:"text-center mb-10",children:[T.jsx(lc,{className:"mx-auto text-rose-200 mb-4",size:28,strokeWidth:1.5}),T.jsx("h2",{className:"text-xl font-serif tracking-widest text-stone-800",children:"식사 자리 안내"})]}),T.jsxs("div",{className:"bg-white p-4 rounded-2xl shadow-sm border border-stone-100 mb-6",children:[T.jsxs("div",{className:"w-full h-56 bg-stone-100 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group",children:[T.jsx("img",{src:"/th-wedding/img/bongraeheon_thumb.png",alt:"Mayfield Hotel Bongrae-heon",className:"absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"}),T.jsx("div",{className:"absolute inset-0 bg-black/10"}),T.jsxs("div",{className:"relative bg-white/95 px-5 py-2.5 rounded-full text-sm font-bold text-stone-800 shadow-lg flex items-center border border-stone-100",children:[T.jsx(lc,{size:16,className:"text-rose-500 mr-2"})," 메이필드 호텔 봉래헌"]})]}),T.jsxs("div",{className:"text-center space-y-2 mb-6",children:[T.jsx("h3",{className:"font-bold text-stone-800 text-lg",children:"메이필드 호텔 봉래헌"}),T.jsx("p",{className:"text-sm text-stone-500",children:"서울 강서구 방화대로 94 메이필드호텔"}),T.jsx("p",{className:"text-sm text-stone-500",children:"02-2660-9020"}),T.jsx("p",{className:"text-xs text-stone-400 mt-1",children:"(주차: 메이필드 호텔 내 전용 주차장 이용 가능)"})]}),T.jsxs("div",{className:"border-t border-stone-50 pt-6 space-y-6 text-left px-2",children:[T.jsxs("div",{children:[T.jsxs("h4",{className:"text-xs font-bold text-stone-800 mb-2 flex items-center",children:[T.jsx("span",{className:"w-1.5 h-1.5 bg-rose-400 rounded-full mr-2"})," 지하철 이용 시"]}),T.jsxs("p",{className:"text-[13px] text-stone-600 leading-relaxed",children:["5호선 ",T.jsx("span",{className:"text-stone-800 font-bold",children:"마곡나루역 / 송정역"})," 하차 후",T.jsx("br",{}),"택시 이용 시 약 5~10분 소요됩니다."]})]}),T.jsxs("div",{children:[T.jsxs("h4",{className:"text-xs font-bold text-stone-800 mb-2 flex items-center",children:[T.jsx("span",{className:"w-1.5 h-1.5 bg-rose-400 rounded-full mr-2"})," 주차 안내"]}),T.jsxs("p",{className:"text-[13px] text-stone-600 leading-relaxed",children:["호텔 내 ",T.jsx("span",{className:"text-stone-800 font-bold",children:"봉래헌 전용 주차 구역"})," 또는",T.jsx("br",{}),"호텔 통합 주차장을 무료로 이용하실 수 있습니다."]})]})]}),T.jsxs("div",{className:"flex space-x-2",children:[T.jsx("button",{onClick:r,className:"flex-1 py-3 bg-[#00C73C] text-white text-sm font-bold rounded-xl flex justify-center items-center hover:bg-[#00b336] transition-colors",children:"네이버 지도"}),T.jsx("button",{onClick:l,className:"flex-1 py-3 bg-[#FAE100] text-[#391B1B] text-sm font-bold rounded-xl flex justify-center items-center hover:bg-[#f0d700] transition-colors",children:"카카오맵"}),T.jsx("button",{onClick:u,className:"flex-1 py-3 bg-stone-800 text-white text-sm font-bold rounded-xl flex justify-center items-center hover:bg-stone-700 transition-colors",children:"티맵"})]})]})]})})}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=ut("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=ut("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=ut("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=ut("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),Zg={카카오뱅크:"카카오뱅크",농협:"농협",우리은행:"우리",국민은행:"국민",신한은행:"신한",하나은행:"하나"},ey=(a,n,r)=>{const l=Zg[a]||a,u=n.replace(/-/g,"");window.location.href=`supertoss://send?bank=${encodeURIComponent(l)}&accountNo=${u}&origin=wedding`};function el({bankLabel:a,accountNo:n,holder:r,bankCode:l,showToast:u,handleCopy:f}){return T.jsxs("div",{children:[T.jsxs("div",{className:"flex justify-between items-start",children:[T.jsxs("div",{children:[T.jsxs("p",{className:"text-xs text-stone-600 mb-1 font-medium",children:[a," ",n]}),T.jsxs("p",{className:"text-sm font-bold text-stone-800",children:["예금주: ",r]})]}),T.jsxs("button",{onClick:()=>f(`${a} ${n}`),className:"text-xs px-3 py-1.5 bg-stone-100 text-stone-700 font-medium rounded-lg flex items-center hover:bg-stone-200 shrink-0",children:[T.jsx(Xg,{size:14,className:"mr-1"})," 복사"]})]}),T.jsxs("button",{onClick:()=>ey(a,n),className:"w-full mt-3 py-2 bg-[#0064FF] text-white text-[11px] font-bold rounded-lg hover:bg-[#0050dd] transition-colors flex items-center justify-center",children:[T.jsx("svg",{className:"w-3.5 h-3.5 mr-1",viewBox:"0 0 24 24",fill:"currentColor",children:T.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2V9h-2v8zm0-10h2V5h-2v2z"})}),"토스로 송금"]})]})}function ty({showToast:a}){const[n,r]=xs(),[l,u]=me.useState(!1),[f,m]=me.useState(!1),v=S=>{const x=document.createElement("textarea");x.value=S,document.body.appendChild(x),x.select();try{document.execCommand("copy"),a("계좌번호가 복사되었습니다.")}catch(O){console.error("Copy failed",O),a("복사에 실패했습니다. 직접 입력해주세요.")}document.body.removeChild(x)};return T.jsx("section",{className:"py-24 px-6 bg-stone-50",id:"account",ref:n,children:T.jsxs("div",{className:`max-w-md mx-auto transition-all duration-1000 ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[T.jsxs("div",{className:"text-center mb-10",children:[T.jsx(up,{className:"mx-auto text-rose-200 mb-4",size:28,strokeWidth:1.5}),T.jsx("h2",{className:"text-xl font-serif tracking-widest text-stone-800 font-bold",children:"마음 전하실 곳"}),T.jsxs("p",{className:"text-sm text-stone-600 mt-4 leading-relaxed font-medium",children:["따뜻한 마음으로 축하해 주시는 모든 분들께 감사드립니다.",T.jsx("br",{}),"바르고 지혜롭게 잘 살겠습니다."]})]}),T.jsxs("div",{className:"space-y-4",children:[T.jsxs("div",{className:"bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200",children:[T.jsxs("button",{onClick:()=>u(!l),className:"w-full px-6 py-5 flex justify-between items-center text-left bg-blue-50/50 hover:bg-blue-50 transition-colors",children:[T.jsx("span",{className:"font-bold text-stone-800",children:"신랑측 계좌번호"}),l?T.jsx(df,{size:20,className:"text-stone-500"}):T.jsx(hf,{size:20,className:"text-stone-500"})]}),T.jsx("div",{className:`transition-all duration-300 ease-in-out overflow-hidden ${l?"max-h-[500px] opacity-100":"max-h-0 opacity-0"}`,children:T.jsxs("div",{className:"p-6 border-t border-stone-100 space-y-5",children:[T.jsx(el,{bankLabel:"카카오뱅크",accountNo:"3333015650207",holder:"강태구",bankCode:"카카오뱅크",showToast:a,handleCopy:v}),T.jsx("div",{className:"w-full h-px bg-stone-100"}),T.jsx(el,{bankLabel:"농협",accountNo:"735080-51-036329",holder:"김경자",bankCode:"농협",showToast:a,handleCopy:v})]})})]}),T.jsxs("div",{className:"bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200",children:[T.jsxs("button",{onClick:()=>m(!f),className:"w-full px-6 py-5 flex justify-between items-center text-left bg-rose-50/50 hover:bg-rose-50 transition-colors",children:[T.jsx("span",{className:"font-bold text-stone-800",children:"신부측 계좌번호"}),f?T.jsx(df,{size:20,className:"text-stone-500"}):T.jsx(hf,{size:20,className:"text-stone-500"})]}),T.jsx("div",{className:`transition-all duration-300 ease-in-out overflow-hidden ${f?"max-h-[500px] opacity-100":"max-h-0 opacity-0"}`,children:T.jsxs("div",{className:"p-6 border-t border-stone-100 space-y-5",children:[T.jsx(el,{bankLabel:"우리은행",accountNo:"1002-837-547920",holder:"신희영",bankCode:"우리은행",showToast:a,handleCopy:v}),T.jsx("div",{className:"w-full h-px bg-stone-100"}),T.jsx(el,{bankLabel:"우리은행",accountNo:"1002-734-796143",holder:"송현숙",bankCode:"우리은행",showToast:a,handleCopy:v})]})})]})]})]})})}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=ut("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=ut("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=ut("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=ut("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]),oy=()=>{};var ff={};/**
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
 */const cp=function(a){const n=[];let r=0;for(let l=0;l<a.length;l++){let u=a.charCodeAt(l);u<128?n[r++]=u:u<2048?(n[r++]=u>>6|192,n[r++]=u&63|128):(u&64512)===55296&&l+1<a.length&&(a.charCodeAt(l+1)&64512)===56320?(u=65536+((u&1023)<<10)+(a.charCodeAt(++l)&1023),n[r++]=u>>18|240,n[r++]=u>>12&63|128,n[r++]=u>>6&63|128,n[r++]=u&63|128):(n[r++]=u>>12|224,n[r++]=u>>6&63|128,n[r++]=u&63|128)}return n},ay=function(a){const n=[];let r=0,l=0;for(;r<a.length;){const u=a[r++];if(u<128)n[l++]=String.fromCharCode(u);else if(u>191&&u<224){const f=a[r++];n[l++]=String.fromCharCode((u&31)<<6|f&63)}else if(u>239&&u<365){const f=a[r++],m=a[r++],v=a[r++],S=((u&7)<<18|(f&63)<<12|(m&63)<<6|v&63)-65536;n[l++]=String.fromCharCode(55296+(S>>10)),n[l++]=String.fromCharCode(56320+(S&1023))}else{const f=a[r++],m=a[r++];n[l++]=String.fromCharCode((u&15)<<12|(f&63)<<6|m&63)}}return n.join("")},hp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(a,n){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,l=[];for(let u=0;u<a.length;u+=3){const f=a[u],m=u+1<a.length,v=m?a[u+1]:0,S=u+2<a.length,x=S?a[u+2]:0,O=f>>2,L=(f&3)<<4|v>>4;let B=(v&15)<<2|x>>6,W=x&63;S||(W=64,m||(B=64)),l.push(r[O],r[L],r[B],r[W])}return l.join("")},encodeString(a,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(a):this.encodeByteArray(cp(a),n)},decodeString(a,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(a):ay(this.decodeStringToByteArray(a,n))},decodeStringToByteArray(a,n){this.init_();const r=n?this.charToByteMapWebSafe_:this.charToByteMap_,l=[];for(let u=0;u<a.length;){const f=r[a.charAt(u++)],v=u<a.length?r[a.charAt(u)]:0;++u;const x=u<a.length?r[a.charAt(u)]:64;++u;const L=u<a.length?r[a.charAt(u)]:64;if(++u,f==null||v==null||x==null||L==null)throw new ly;const B=f<<2|v>>4;if(l.push(B),x!==64){const W=v<<4&240|x>>2;if(l.push(W),L!==64){const ie=x<<6&192|L;l.push(ie)}}}return l},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}};class ly extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uy=function(a){const n=cp(a);return hp.encodeByteArray(n,!0)},dp=function(a){return uy(a).replace(/\./g,"")},cy=function(a){try{return hp.decodeString(a,!0)}catch(n){console.error("base64Decode failed: ",n)}return null};/**
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
 */function hy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dy=()=>hy().__FIREBASE_DEFAULTS__,fy=()=>{if(typeof process>"u"||typeof ff>"u")return;const a=ff.__FIREBASE_DEFAULTS__;if(a)return JSON.parse(a)},py=()=>{if(typeof document>"u")return;let a;try{a=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const n=a&&cy(a[1]);return n&&JSON.parse(n)},my=()=>{try{return oy()||dy()||fy()||py()}catch(a){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);return}};/**
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
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(a){try{return(a.startsWith("http://")||a.startsWith("https://")?new URL(a).hostname:a).endsWith(".cloudworkstations.dev")}catch{return!1}}/**
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
 */function yy(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _y(){var n;const a=(n=my())==null?void 0:n.forceEnvironment;if(a==="node")return!0;if(a==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vy(){return!_y()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wy(){try{return typeof indexedDB=="object"}catch{return!1}}function Ey(){return new Promise((a,n)=>{try{let r=!0;const l="validate-browser-context-for-indexeddb-analytics-module",u=self.indexedDB.open(l);u.onsuccess=()=>{u.result.close(),r||self.indexedDB.deleteDatabase(l),a(!0)},u.onupgradeneeded=()=>{r=!1},u.onerror=()=>{var f;n(((f=u.error)==null?void 0:f.message)||"")}}catch(r){n(r)}})}/**
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
 */const Iy="FirebaseError";class xi extends Error{constructor(n,r,l){super(r),this.code=n,this.customData=l,this.name=Iy,Object.setPrototypeOf(this,xi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fp.prototype.create)}}class fp{constructor(n,r,l){this.service=n,this.serviceName=r,this.errors=l}create(n,...r){const l=r[0]||{},u=`${this.service}/${n}`,f=this.errors[n],m=f?Ty(f,l):"Error",v=`${this.serviceName}: ${m} (${u}).`;return new xi(u,v,l)}}function Ty(a,n){return a.replace(Sy,(r,l)=>{const u=n[l];return u!=null?String(u):`<${l}?>`})}const Sy=/\{\$([^}]+)}/g;/**
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
 */function xy(a){return a&&a._delegate?a._delegate:a}class hl{constructor(n,r,l){this.name=n,this.instanceFactory=r,this.type=l,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(n){return this.instantiationMode=n,this}setMultipleInstances(n){return this.multipleInstances=n,this}setServiceProps(n){return this.serviceProps=n,this}setInstanceCreatedCallback(n){return this.onInstanceCreated=n,this}}/**
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
 *//**
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
 *//**
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
 */var Se;(function(a){a[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT"})(Se||(Se={}));const Ay={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},Ry=Se.INFO,Py={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},Cy=(a,n,...r)=>{if(n<a.logLevel)return;const l=new Date().toISOString(),u=Py[n];if(u)console[u](`[${l}]  ${a.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`)};class pp{constructor(n){this.name=n,this._logLevel=Ry,this._logHandler=Cy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(n){if(!(n in Se))throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);this._logLevel=n}setLogLevel(n){this._logLevel=typeof n=="string"?Ay[n]:n}get logHandler(){return this._logHandler}set logHandler(n){if(typeof n!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=n}get userLogHandler(){return this._userLogHandler}set userLogHandler(n){this._userLogHandler=n}debug(...n){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...n),this._logHandler(this,Se.DEBUG,...n)}log(...n){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...n),this._logHandler(this,Se.VERBOSE,...n)}info(...n){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...n),this._logHandler(this,Se.INFO,...n)}warn(...n){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...n),this._logHandler(this,Se.WARN,...n)}error(...n){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...n),this._logHandler(this,Se.ERROR,...n)}}const ky=(a,n)=>n.some(r=>a instanceof r);let pf,mf;function Vy(){return pf||(pf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ny(){return mf||(mf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mp=new WeakMap,uc=new WeakMap,gp=new WeakMap,ec=new WeakMap,Ac=new WeakMap;function by(a){const n=new Promise((r,l)=>{const u=()=>{a.removeEventListener("success",f),a.removeEventListener("error",m)},f=()=>{r(zr(a.result)),u()},m=()=>{l(a.error),u()};a.addEventListener("success",f),a.addEventListener("error",m)});return n.then(r=>{r instanceof IDBCursor&&mp.set(r,a)}).catch(()=>{}),Ac.set(n,a),n}function Dy(a){if(uc.has(a))return;const n=new Promise((r,l)=>{const u=()=>{a.removeEventListener("complete",f),a.removeEventListener("error",m),a.removeEventListener("abort",m)},f=()=>{r(),u()},m=()=>{l(a.error||new DOMException("AbortError","AbortError")),u()};a.addEventListener("complete",f),a.addEventListener("error",m),a.addEventListener("abort",m)});uc.set(a,n)}let cc={get(a,n,r){if(a instanceof IDBTransaction){if(n==="done")return uc.get(a);if(n==="objectStoreNames")return a.objectStoreNames||gp.get(a);if(n==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return zr(a[n])},set(a,n,r){return a[n]=r,!0},has(a,n){return a instanceof IDBTransaction&&(n==="done"||n==="store")?!0:n in a}};function My(a){cc=a(cc)}function Oy(a){return a===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(n,...r){const l=a.call(tc(this),n,...r);return gp.set(l,n.sort?n.sort():[n]),zr(l)}:Ny().includes(a)?function(...n){return a.apply(tc(this),n),zr(mp.get(this))}:function(...n){return zr(a.apply(tc(this),n))}}function Ly(a){return typeof a=="function"?Oy(a):(a instanceof IDBTransaction&&Dy(a),ky(a,Vy())?new Proxy(a,cc):a)}function zr(a){if(a instanceof IDBRequest)return by(a);if(ec.has(a))return ec.get(a);const n=Ly(a);return n!==a&&(ec.set(a,n),Ac.set(n,a)),n}const tc=a=>Ac.get(a);function Fy(a,n,{blocked:r,upgrade:l,blocking:u,terminated:f}={}){const m=indexedDB.open(a,n),v=zr(m);return l&&m.addEventListener("upgradeneeded",S=>{l(zr(m.result),S.oldVersion,S.newVersion,zr(m.transaction),S)}),r&&m.addEventListener("blocked",S=>r(S.oldVersion,S.newVersion,S)),v.then(S=>{f&&S.addEventListener("close",()=>f()),u&&S.addEventListener("versionchange",x=>u(x.oldVersion,x.newVersion,x))}).catch(()=>{}),v}const jy=["get","getKey","getAll","getAllKeys","count"],By=["put","add","delete","clear"],nc=new Map;function gf(a,n){if(!(a instanceof IDBDatabase&&!(n in a)&&typeof n=="string"))return;if(nc.get(n))return nc.get(n);const r=n.replace(/FromIndex$/,""),l=n!==r,u=By.includes(r);if(!(r in(l?IDBIndex:IDBObjectStore).prototype)||!(u||jy.includes(r)))return;const f=async function(m,...v){const S=this.transaction(m,u?"readwrite":"readonly");let x=S.store;return l&&(x=x.index(v.shift())),(await Promise.all([x[r](...v),u&&S.done]))[0]};return nc.set(n,f),f}My(a=>({...a,get:(n,r,l)=>gf(n,r)||a.get(n,r,l),has:(n,r)=>!!gf(n,r)||a.has(n,r)}));/**
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
 */class zy{constructor(n){this.container=n}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(Uy(r)){const l=r.getImmediate();return`${l.library}/${l.version}`}else return null}).filter(r=>r).join(" ")}}function Uy(a){const n=a.getComponent();return(n==null?void 0:n.type)==="VERSION"}const hc="@firebase/app",yf="0.14.9";/**
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
 */const ur=new pp("@firebase/app"),qy="@firebase/app-compat",$y="@firebase/analytics-compat",Gy="@firebase/analytics",Ky="@firebase/app-check-compat",Qy="@firebase/app-check",Hy="@firebase/auth",Wy="@firebase/auth-compat",Jy="@firebase/database",Yy="@firebase/data-connect",Xy="@firebase/database-compat",Zy="@firebase/functions",e_="@firebase/functions-compat",t_="@firebase/installations",n_="@firebase/installations-compat",r_="@firebase/messaging",s_="@firebase/messaging-compat",i_="@firebase/performance",o_="@firebase/performance-compat",a_="@firebase/remote-config",l_="@firebase/remote-config-compat",u_="@firebase/storage",c_="@firebase/storage-compat",h_="@firebase/firestore",d_="@firebase/ai",f_="@firebase/firestore-compat",p_="firebase",m_="12.10.0";/**
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
 */const g_={[hc]:"fire-core",[qy]:"fire-core-compat",[Gy]:"fire-analytics",[$y]:"fire-analytics-compat",[Qy]:"fire-app-check",[Ky]:"fire-app-check-compat",[Hy]:"fire-auth",[Wy]:"fire-auth-compat",[Jy]:"fire-rtdb",[Yy]:"fire-data-connect",[Xy]:"fire-rtdb-compat",[Zy]:"fire-fn",[e_]:"fire-fn-compat",[t_]:"fire-iid",[n_]:"fire-iid-compat",[r_]:"fire-fcm",[s_]:"fire-fcm-compat",[i_]:"fire-perf",[o_]:"fire-perf-compat",[a_]:"fire-rc",[l_]:"fire-rc-compat",[u_]:"fire-gcs",[c_]:"fire-gcs-compat",[h_]:"fire-fst",[f_]:"fire-fst-compat",[d_]:"fire-vertex","fire-js":"fire-js",[p_]:"fire-js-all"};/**
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
 */const y_=new Map,__=new Map,_f=new Map;function vf(a,n){try{a.container.addComponent(n)}catch(r){ur.debug(`Component ${n.name} failed to register with FirebaseApp ${a.name}`,r)}}function dl(a){const n=a.name;if(_f.has(n))return ur.debug(`There were multiple attempts to register component ${n}.`),!1;_f.set(n,a);for(const r of y_.values())vf(r,a);for(const r of __.values())vf(r,a);return!0}function v_(a){return a==null?!1:a.settings!==void 0}/**
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
 */const w_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rc=new fp("app","Firebase",w_);/**
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
 *//**
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
 */const E_=m_;function gi(a,n,r){let l=g_[a]??a;r&&(l+=`-${r}`);const u=l.match(/\s|\//),f=n.match(/\s|\//);if(u||f){const m=[`Unable to register library "${l}" with version "${n}":`];u&&m.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&f&&m.push("and"),f&&m.push(`version name "${n}" contains illegal characters (whitespace or "/")`),ur.warn(m.join(" "));return}dl(new hl(`${l}-version`,()=>({library:l,version:n}),"VERSION"))}/**
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
 */const I_="firebase-heartbeat-database",T_=1,Do="firebase-heartbeat-store";let rc=null;function yp(){return rc||(rc=Fy(I_,T_,{upgrade:(a,n)=>{switch(n){case 0:try{a.createObjectStore(Do)}catch(r){console.warn(r)}}}}).catch(a=>{throw Rc.create("idb-open",{originalErrorMessage:a.message})})),rc}async function S_(a){try{const r=(await yp()).transaction(Do),l=await r.objectStore(Do).get(_p(a));return await r.done,l}catch(n){if(n instanceof xi)ur.warn(n.message);else{const r=Rc.create("idb-get",{originalErrorMessage:n==null?void 0:n.message});ur.warn(r.message)}}}async function wf(a,n){try{const l=(await yp()).transaction(Do,"readwrite");await l.objectStore(Do).put(n,_p(a)),await l.done}catch(r){if(r instanceof xi)ur.warn(r.message);else{const l=Rc.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});ur.warn(l.message)}}}function _p(a){return`${a.name}!${a.options.appId}`}/**
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
 */const x_=1024,A_=30;class R_{constructor(n){this.container=n,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new C_(r),this._heartbeatsCachePromise=this._storage.read().then(l=>(this._heartbeatsCache=l,l))}async triggerHeartbeat(){var n,r;try{const u=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),f=Ef();if(((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)==null?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===f||this._heartbeatsCache.heartbeats.some(m=>m.date===f))return;if(this._heartbeatsCache.heartbeats.push({date:f,agent:u}),this._heartbeatsCache.heartbeats.length>A_){const m=k_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(m,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(l){ur.warn(l)}}async getHeartbeatsHeader(){var n;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=Ef(),{heartbeatsToSend:l,unsentEntries:u}=P_(this._heartbeatsCache.heartbeats),f=dp(JSON.stringify({version:2,heartbeats:l}));return this._heartbeatsCache.lastSentHeartbeatDate=r,u.length>0?(this._heartbeatsCache.heartbeats=u,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),f}catch(r){return ur.warn(r),""}}}function Ef(){return new Date().toISOString().substring(0,10)}function P_(a,n=x_){const r=[];let l=a.slice();for(const u of a){const f=r.find(m=>m.agent===u.agent);if(f){if(f.dates.push(u.date),If(r)>n){f.dates.pop();break}}else if(r.push({agent:u.agent,dates:[u.date]}),If(r)>n){r.pop();break}l=l.slice(1)}return{heartbeatsToSend:r,unsentEntries:l}}class C_{constructor(n){this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wy()?Ey().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await S_(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(n){if(await this._canUseIndexedDBPromise){const l=await this.read();return wf(this.app,{lastSentHeartbeatDate:n.lastSentHeartbeatDate??l.lastSentHeartbeatDate,heartbeats:n.heartbeats})}else return}async add(n){if(await this._canUseIndexedDBPromise){const l=await this.read();return wf(this.app,{lastSentHeartbeatDate:n.lastSentHeartbeatDate??l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...n.heartbeats]})}else return}}function If(a){return dp(JSON.stringify({version:2,heartbeats:a})).length}function k_(a){if(a.length===0)return-1;let n=0,r=a[0].date;for(let l=1;l<a.length;l++)a[l].date<r&&(r=a[l].date,n=l);return n}/**
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
 */function V_(a){dl(new hl("platform-logger",n=>new zy(n),"PRIVATE")),dl(new hl("heartbeat",n=>new R_(n),"PRIVATE")),gi(hc,yf,a),gi(hc,yf,"esm2020"),gi("fire-js","")}V_("");var N_="firebase",b_="12.10.0";/**
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
 */gi(N_,b_,"app");var Tf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pc,D_;(function(){var a;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function n(C,_){function I(){}I.prototype=_.prototype,C.F=_.prototype,C.prototype=new I,C.prototype.constructor=C,C.D=function(P,R,V){for(var w=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)w[ke-2]=arguments[ke];return _.prototype[R].apply(P,w)}}function r(){this.blockSize=-1}function l(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}n(l,r),l.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function u(C,_,I){I||(I=0);const P=Array(16);if(typeof _=="string")for(var R=0;R<16;++R)P[R]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(R=0;R<16;++R)P[R]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=C.g[0],I=C.g[1],R=C.g[2];let V=C.g[3],w;w=_+(V^I&(R^V))+P[0]+3614090360&4294967295,_=I+(w<<7&4294967295|w>>>25),w=V+(R^_&(I^R))+P[1]+3905402710&4294967295,V=_+(w<<12&4294967295|w>>>20),w=R+(I^V&(_^I))+P[2]+606105819&4294967295,R=V+(w<<17&4294967295|w>>>15),w=I+(_^R&(V^_))+P[3]+3250441966&4294967295,I=R+(w<<22&4294967295|w>>>10),w=_+(V^I&(R^V))+P[4]+4118548399&4294967295,_=I+(w<<7&4294967295|w>>>25),w=V+(R^_&(I^R))+P[5]+1200080426&4294967295,V=_+(w<<12&4294967295|w>>>20),w=R+(I^V&(_^I))+P[6]+2821735955&4294967295,R=V+(w<<17&4294967295|w>>>15),w=I+(_^R&(V^_))+P[7]+4249261313&4294967295,I=R+(w<<22&4294967295|w>>>10),w=_+(V^I&(R^V))+P[8]+1770035416&4294967295,_=I+(w<<7&4294967295|w>>>25),w=V+(R^_&(I^R))+P[9]+2336552879&4294967295,V=_+(w<<12&4294967295|w>>>20),w=R+(I^V&(_^I))+P[10]+4294925233&4294967295,R=V+(w<<17&4294967295|w>>>15),w=I+(_^R&(V^_))+P[11]+2304563134&4294967295,I=R+(w<<22&4294967295|w>>>10),w=_+(V^I&(R^V))+P[12]+1804603682&4294967295,_=I+(w<<7&4294967295|w>>>25),w=V+(R^_&(I^R))+P[13]+4254626195&4294967295,V=_+(w<<12&4294967295|w>>>20),w=R+(I^V&(_^I))+P[14]+2792965006&4294967295,R=V+(w<<17&4294967295|w>>>15),w=I+(_^R&(V^_))+P[15]+1236535329&4294967295,I=R+(w<<22&4294967295|w>>>10),w=_+(R^V&(I^R))+P[1]+4129170786&4294967295,_=I+(w<<5&4294967295|w>>>27),w=V+(I^R&(_^I))+P[6]+3225465664&4294967295,V=_+(w<<9&4294967295|w>>>23),w=R+(_^I&(V^_))+P[11]+643717713&4294967295,R=V+(w<<14&4294967295|w>>>18),w=I+(V^_&(R^V))+P[0]+3921069994&4294967295,I=R+(w<<20&4294967295|w>>>12),w=_+(R^V&(I^R))+P[5]+3593408605&4294967295,_=I+(w<<5&4294967295|w>>>27),w=V+(I^R&(_^I))+P[10]+38016083&4294967295,V=_+(w<<9&4294967295|w>>>23),w=R+(_^I&(V^_))+P[15]+3634488961&4294967295,R=V+(w<<14&4294967295|w>>>18),w=I+(V^_&(R^V))+P[4]+3889429448&4294967295,I=R+(w<<20&4294967295|w>>>12),w=_+(R^V&(I^R))+P[9]+568446438&4294967295,_=I+(w<<5&4294967295|w>>>27),w=V+(I^R&(_^I))+P[14]+3275163606&4294967295,V=_+(w<<9&4294967295|w>>>23),w=R+(_^I&(V^_))+P[3]+4107603335&4294967295,R=V+(w<<14&4294967295|w>>>18),w=I+(V^_&(R^V))+P[8]+1163531501&4294967295,I=R+(w<<20&4294967295|w>>>12),w=_+(R^V&(I^R))+P[13]+2850285829&4294967295,_=I+(w<<5&4294967295|w>>>27),w=V+(I^R&(_^I))+P[2]+4243563512&4294967295,V=_+(w<<9&4294967295|w>>>23),w=R+(_^I&(V^_))+P[7]+1735328473&4294967295,R=V+(w<<14&4294967295|w>>>18),w=I+(V^_&(R^V))+P[12]+2368359562&4294967295,I=R+(w<<20&4294967295|w>>>12),w=_+(I^R^V)+P[5]+4294588738&4294967295,_=I+(w<<4&4294967295|w>>>28),w=V+(_^I^R)+P[8]+2272392833&4294967295,V=_+(w<<11&4294967295|w>>>21),w=R+(V^_^I)+P[11]+1839030562&4294967295,R=V+(w<<16&4294967295|w>>>16),w=I+(R^V^_)+P[14]+4259657740&4294967295,I=R+(w<<23&4294967295|w>>>9),w=_+(I^R^V)+P[1]+2763975236&4294967295,_=I+(w<<4&4294967295|w>>>28),w=V+(_^I^R)+P[4]+1272893353&4294967295,V=_+(w<<11&4294967295|w>>>21),w=R+(V^_^I)+P[7]+4139469664&4294967295,R=V+(w<<16&4294967295|w>>>16),w=I+(R^V^_)+P[10]+3200236656&4294967295,I=R+(w<<23&4294967295|w>>>9),w=_+(I^R^V)+P[13]+681279174&4294967295,_=I+(w<<4&4294967295|w>>>28),w=V+(_^I^R)+P[0]+3936430074&4294967295,V=_+(w<<11&4294967295|w>>>21),w=R+(V^_^I)+P[3]+3572445317&4294967295,R=V+(w<<16&4294967295|w>>>16),w=I+(R^V^_)+P[6]+76029189&4294967295,I=R+(w<<23&4294967295|w>>>9),w=_+(I^R^V)+P[9]+3654602809&4294967295,_=I+(w<<4&4294967295|w>>>28),w=V+(_^I^R)+P[12]+3873151461&4294967295,V=_+(w<<11&4294967295|w>>>21),w=R+(V^_^I)+P[15]+530742520&4294967295,R=V+(w<<16&4294967295|w>>>16),w=I+(R^V^_)+P[2]+3299628645&4294967295,I=R+(w<<23&4294967295|w>>>9),w=_+(R^(I|~V))+P[0]+4096336452&4294967295,_=I+(w<<6&4294967295|w>>>26),w=V+(I^(_|~R))+P[7]+1126891415&4294967295,V=_+(w<<10&4294967295|w>>>22),w=R+(_^(V|~I))+P[14]+2878612391&4294967295,R=V+(w<<15&4294967295|w>>>17),w=I+(V^(R|~_))+P[5]+4237533241&4294967295,I=R+(w<<21&4294967295|w>>>11),w=_+(R^(I|~V))+P[12]+1700485571&4294967295,_=I+(w<<6&4294967295|w>>>26),w=V+(I^(_|~R))+P[3]+2399980690&4294967295,V=_+(w<<10&4294967295|w>>>22),w=R+(_^(V|~I))+P[10]+4293915773&4294967295,R=V+(w<<15&4294967295|w>>>17),w=I+(V^(R|~_))+P[1]+2240044497&4294967295,I=R+(w<<21&4294967295|w>>>11),w=_+(R^(I|~V))+P[8]+1873313359&4294967295,_=I+(w<<6&4294967295|w>>>26),w=V+(I^(_|~R))+P[15]+4264355552&4294967295,V=_+(w<<10&4294967295|w>>>22),w=R+(_^(V|~I))+P[6]+2734768916&4294967295,R=V+(w<<15&4294967295|w>>>17),w=I+(V^(R|~_))+P[13]+1309151649&4294967295,I=R+(w<<21&4294967295|w>>>11),w=_+(R^(I|~V))+P[4]+4149444226&4294967295,_=I+(w<<6&4294967295|w>>>26),w=V+(I^(_|~R))+P[11]+3174756917&4294967295,V=_+(w<<10&4294967295|w>>>22),w=R+(_^(V|~I))+P[2]+718787259&4294967295,R=V+(w<<15&4294967295|w>>>17),w=I+(V^(R|~_))+P[9]+3951481745&4294967295,C.g[0]=C.g[0]+_&4294967295,C.g[1]=C.g[1]+(R+(w<<21&4294967295|w>>>11))&4294967295,C.g[2]=C.g[2]+R&4294967295,C.g[3]=C.g[3]+V&4294967295}l.prototype.v=function(C,_){_===void 0&&(_=C.length);const I=_-this.blockSize,P=this.C;let R=this.h,V=0;for(;V<_;){if(R==0)for(;V<=I;)u(this,C,V),V+=this.blockSize;if(typeof C=="string"){for(;V<_;)if(P[R++]=C.charCodeAt(V++),R==this.blockSize){u(this,P),R=0;break}}else for(;V<_;)if(P[R++]=C[V++],R==this.blockSize){u(this,P),R=0;break}}this.h=R,this.o+=_},l.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var _=1;_<C.length-8;++_)C[_]=0;_=this.o*8;for(var I=C.length-8;I<C.length;++I)C[I]=_&255,_/=256;for(this.v(C),C=Array(16),_=0,I=0;I<4;++I)for(let P=0;P<32;P+=8)C[_++]=this.g[I]>>>P&255;return C};function f(C,_){var I=v;return Object.prototype.hasOwnProperty.call(I,C)?I[C]:I[C]=_(C)}function m(C,_){this.h=_;const I=[];let P=!0;for(let R=C.length-1;R>=0;R--){const V=C[R]|0;P&&V==_||(I[R]=V,P=!1)}this.g=I}var v={};function S(C){return-128<=C&&C<128?f(C,function(_){return new m([_|0],_<0?-1:0)}):new m([C|0],C<0?-1:0)}function x(C){if(isNaN(C)||!isFinite(C))return L;if(C<0)return te(x(-C));const _=[];let I=1;for(let P=0;C>=I;P++)_[P]=C/I|0,I*=4294967296;return new m(_,0)}function O(C,_){if(C.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(C.charAt(0)=="-")return te(O(C.substring(1),_));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=x(Math.pow(_,8));let P=L;for(let V=0;V<C.length;V+=8){var R=Math.min(8,C.length-V);const w=parseInt(C.substring(V,V+R),_);R<8?(R=x(Math.pow(_,R)),P=P.j(R).add(x(w))):(P=P.j(I),P=P.add(x(w)))}return P}var L=S(0),B=S(1),W=S(16777216);a=m.prototype,a.m=function(){if(se(this))return-te(this).m();let C=0,_=1;for(let I=0;I<this.g.length;I++){const P=this.i(I);C+=(P>=0?P:4294967296+P)*_,_*=4294967296}return C},a.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(ie(this))return"0";if(se(this))return"-"+te(this).toString(C);const _=x(Math.pow(C,6));var I=this;let P="";for(;;){const R=Ce(I,_).g;I=Me(I,R.j(_));let V=((I.g.length>0?I.g[0]:I.h)>>>0).toString(C);if(I=R,ie(I))return V+P;for(;V.length<6;)V="0"+V;P=V+P}},a.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function ie(C){if(C.h!=0)return!1;for(let _=0;_<C.g.length;_++)if(C.g[_]!=0)return!1;return!0}function se(C){return C.h==-1}a.l=function(C){return C=Me(this,C),se(C)?-1:ie(C)?0:1};function te(C){const _=C.g.length,I=[];for(let P=0;P<_;P++)I[P]=~C.g[P];return new m(I,~C.h).add(B)}a.abs=function(){return se(this)?te(this):this},a.add=function(C){const _=Math.max(this.g.length,C.g.length),I=[];let P=0;for(let R=0;R<=_;R++){let V=P+(this.i(R)&65535)+(C.i(R)&65535),w=(V>>>16)+(this.i(R)>>>16)+(C.i(R)>>>16);P=w>>>16,V&=65535,w&=65535,I[R]=w<<16|V}return new m(I,I[I.length-1]&-2147483648?-1:0)};function Me(C,_){return C.add(te(_))}a.j=function(C){if(ie(this)||ie(C))return L;if(se(this))return se(C)?te(this).j(te(C)):te(te(this).j(C));if(se(C))return te(this.j(te(C)));if(this.l(W)<0&&C.l(W)<0)return x(this.m()*C.m());const _=this.g.length+C.g.length,I=[];for(var P=0;P<2*_;P++)I[P]=0;for(P=0;P<this.g.length;P++)for(let R=0;R<C.g.length;R++){const V=this.i(P)>>>16,w=this.i(P)&65535,ke=C.i(R)>>>16,ct=C.i(R)&65535;I[2*P+2*R]+=w*ct,Ne(I,2*P+2*R),I[2*P+2*R+1]+=V*ct,Ne(I,2*P+2*R+1),I[2*P+2*R+1]+=w*ke,Ne(I,2*P+2*R+1),I[2*P+2*R+2]+=V*ke,Ne(I,2*P+2*R+2)}for(C=0;C<_;C++)I[C]=I[2*C+1]<<16|I[2*C];for(C=_;C<2*_;C++)I[C]=0;return new m(I,0)};function Ne(C,_){for(;(C[_]&65535)!=C[_];)C[_+1]+=C[_]>>>16,C[_]&=65535,_++}function be(C,_){this.g=C,this.h=_}function Ce(C,_){if(ie(_))throw Error("division by zero");if(ie(C))return new be(L,L);if(se(C))return _=Ce(te(C),_),new be(te(_.g),te(_.h));if(se(_))return _=Ce(C,te(_)),new be(te(_.g),_.h);if(C.g.length>30){if(se(C)||se(_))throw Error("slowDivide_ only works with positive integers.");for(var I=B,P=_;P.l(C)<=0;)I=Oe(I),P=Oe(P);var R=Re(I,1),V=Re(P,1);for(P=Re(P,2),I=Re(I,2);!ie(P);){var w=V.add(P);w.l(C)<=0&&(R=R.add(I),V=w),P=Re(P,1),I=Re(I,1)}return _=Me(C,R.j(_)),new be(R,_)}for(R=L;C.l(_)>=0;){for(I=Math.max(1,Math.floor(C.m()/_.m())),P=Math.ceil(Math.log(I)/Math.LN2),P=P<=48?1:Math.pow(2,P-48),V=x(I),w=V.j(_);se(w)||w.l(C)>0;)I-=P,V=x(I),w=V.j(_);ie(V)&&(V=B),R=R.add(V),C=Me(C,w)}return new be(R,C)}a.B=function(C){return Ce(this,C).h},a.and=function(C){const _=Math.max(this.g.length,C.g.length),I=[];for(let P=0;P<_;P++)I[P]=this.i(P)&C.i(P);return new m(I,this.h&C.h)},a.or=function(C){const _=Math.max(this.g.length,C.g.length),I=[];for(let P=0;P<_;P++)I[P]=this.i(P)|C.i(P);return new m(I,this.h|C.h)},a.xor=function(C){const _=Math.max(this.g.length,C.g.length),I=[];for(let P=0;P<_;P++)I[P]=this.i(P)^C.i(P);return new m(I,this.h^C.h)};function Oe(C){const _=C.g.length+1,I=[];for(let P=0;P<_;P++)I[P]=C.i(P)<<1|C.i(P-1)>>>31;return new m(I,C.h)}function Re(C,_){const I=_>>5;_%=32;const P=C.g.length-I,R=[];for(let V=0;V<P;V++)R[V]=_>0?C.i(V+I)>>>_|C.i(V+I+1)<<32-_:C.i(V+I);return new m(R,C.h)}l.prototype.digest=l.prototype.A,l.prototype.reset=l.prototype.u,l.prototype.update=l.prototype.v,D_=l,m.prototype.add=m.prototype.add,m.prototype.multiply=m.prototype.j,m.prototype.modulo=m.prototype.B,m.prototype.compare=m.prototype.l,m.prototype.toNumber=m.prototype.m,m.prototype.toString=m.prototype.toString,m.prototype.getBits=m.prototype.i,m.fromNumber=x,m.fromString=O,Pc=m}).apply(typeof Tf<"u"?Tf:typeof self<"u"?self:typeof window<"u"?window:{});var tl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vp,Ro,wp,ll,dc,Ep,Ip,Tp;(function(){var a,n=Object.defineProperty;function r(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof tl=="object"&&tl];for(var d=0;d<i.length;++d){var p=i[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var l=r(this);function u(i,d){if(d)e:{var p=l;i=i.split(".");for(var y=0;y<i.length-1;y++){var D=i[y];if(!(D in p))break e;p=p[D]}i=i[i.length-1],y=p[i],d=d(y),d!=y&&d!=null&&n(p,i,{configurable:!0,writable:!0,value:d})}}u("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),u("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),u("Object.entries",function(i){return i||function(d){var p=[],y;for(y in d)Object.prototype.hasOwnProperty.call(d,y)&&p.push([y,d[y]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function v(i){var d=typeof i;return d=="object"&&i!=null||d=="function"}function S(i,d,p){return i.call.apply(i.bind,arguments)}function x(i,d,p){return x=S,x.apply(null,arguments)}function O(i,d){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),i.apply(this,y)}}function L(i,d){function p(){}p.prototype=d.prototype,i.Z=d.prototype,i.prototype=new p,i.prototype.constructor=i,i.Ob=function(y,D,j){for(var Q=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)Q[ce-2]=arguments[ce];return d.prototype[D].apply(y,Q)}}var B=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function W(i){const d=i.length;if(d>0){const p=Array(d);for(let y=0;y<d;y++)p[y]=i[y];return p}return[]}function ie(i,d){for(let y=1;y<arguments.length;y++){const D=arguments[y];var p=typeof D;if(p=p!="object"?p:D?Array.isArray(D)?"array":p:"null",p=="array"||p=="object"&&typeof D.length=="number"){p=i.length||0;const j=D.length||0;i.length=p+j;for(let Q=0;Q<j;Q++)i[p+Q]=D[Q]}else i.push(D)}}class se{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function te(i){m.setTimeout(()=>{throw i},0)}function Me(){var i=C;let d=null;return i.g&&(d=i.g,i.g=i.g.next,i.g||(i.h=null),d.next=null),d}class Ne{constructor(){this.h=this.g=null}add(d,p){const y=be.get();y.set(d,p),this.h?this.h.next=y:this.g=y,this.h=y}}var be=new se(()=>new Ce,i=>i.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Oe,Re=!1,C=new Ne,_=()=>{const i=Promise.resolve(void 0);Oe=()=>{i.then(I)}};function I(){for(var i;i=Me();){try{i.h.call(i.g)}catch(p){te(p)}var d=be;d.j(i),d.h<100&&(d.h++,i.next=d.g,d.g=i)}Re=!1}function P(){this.u=this.u,this.C=this.C}P.prototype.u=!1,P.prototype.dispose=function(){this.u||(this.u=!0,this.N())},P.prototype[Symbol.dispose]=function(){this.dispose()},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(i,d){this.type=i,this.g=this.target=d,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var V=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var i=!1,d=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const p=()=>{};m.addEventListener("test",p,d),m.removeEventListener("test",p,d)}catch{}return i})();function w(i){return/^[\s\xa0]*$/.test(i)}function ke(i,d){R.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,d)}L(ke,R),ke.prototype.init=function(i,d){const p=this.type=i.type,y=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=d,d=i.relatedTarget,d||(p=="mouseover"?d=i.fromElement:p=="mouseout"&&(d=i.toElement)),this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&ke.Z.h.call(this)},ke.prototype.h=function(){ke.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var ct="closure_listenable_"+(Math.random()*1e6|0),It=0;function $e(i,d,p,y,D){this.listener=i,this.proxy=null,this.src=d,this.type=p,this.capture=!!y,this.ha=D,this.key=++It,this.da=this.fa=!1}function H(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function oe(i,d,p){for(const y in i)d.call(p,i[y],y,i)}function Y(i,d){for(const p in i)d.call(void 0,i[p],p,i)}function N(i){const d={};for(const p in i)d[p]=i[p];return d}const z="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function he(i,d){let p,y;for(let D=1;D<arguments.length;D++){y=arguments[D];for(p in y)i[p]=y[p];for(let j=0;j<z.length;j++)p=z[j],Object.prototype.hasOwnProperty.call(y,p)&&(i[p]=y[p])}}function de(i){this.src=i,this.g={},this.h=0}de.prototype.add=function(i,d,p,y,D){const j=i.toString();i=this.g[j],i||(i=this.g[j]=[],this.h++);const Q=ve(i,d,y,D);return Q>-1?(d=i[Q],p||(d.fa=!1)):(d=new $e(d,this.src,j,!!y,D),d.fa=p,i.push(d)),d};function _e(i,d){const p=d.type;if(p in i.g){var y=i.g[p],D=Array.prototype.indexOf.call(y,d,void 0),j;(j=D>=0)&&Array.prototype.splice.call(y,D,1),j&&(H(d),i.g[p].length==0&&(delete i.g[p],i.h--))}}function ve(i,d,p,y){for(let D=0;D<i.length;++D){const j=i[D];if(!j.da&&j.listener==d&&j.capture==!!p&&j.ha==y)return D}return-1}var Ve="closure_lm_"+(Math.random()*1e6|0),Ie={};function Le(i,d,p,y,D){if(Array.isArray(d)){for(let j=0;j<d.length;j++)Le(i,d[j],p,y,D);return null}return p=Ci(p),i&&i[ct]?i.J(d,p,v(y)?!!y.capture:!1,D):kt(i,d,p,!1,y,D)}function kt(i,d,p,y,D,j){if(!d)throw Error("Invalid event type");const Q=v(D)?!!D.capture:!!D;let ce=Ps(i);if(ce||(i[Ve]=ce=new de(i)),p=ce.add(d,p,y,Q,j),p.proxy)return p;if(y=As(),p.proxy=y,y.src=i,y.listener=p,i.addEventListener)V||(D=Q),D===void 0&&(D=!1),i.addEventListener(d.toString(),y,D);else if(i.attachEvent)i.attachEvent(Rs(d.toString()),y);else if(i.addListener&&i.removeListener)i.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function As(){function i(p){return d.call(i.src,i.listener,p)}const d=Fo;return i}function Pi(i,d,p,y,D){if(Array.isArray(d))for(var j=0;j<d.length;j++)Pi(i,d[j],p,y,D);else y=v(y)?!!y.capture:!!y,p=Ci(p),i&&i[ct]?(i=i.i,j=String(d).toString(),j in i.g&&(d=i.g[j],p=ve(d,p,y,D),p>-1&&(H(d[p]),Array.prototype.splice.call(d,p,1),d.length==0&&(delete i.g[j],i.h--)))):i&&(i=Ps(i))&&(d=i.g[d.toString()],i=-1,d&&(i=ve(d,p,y,D)),(p=i>-1?d[i]:null)&&cr(p))}function cr(i){if(typeof i!="number"&&i&&!i.da){var d=i.src;if(d&&d[ct])_e(d.i,i);else{var p=i.type,y=i.proxy;d.removeEventListener?d.removeEventListener(p,y,i.capture):d.detachEvent?d.detachEvent(Rs(p),y):d.addListener&&d.removeListener&&d.removeListener(y),(p=Ps(d))?(_e(p,i),p.h==0&&(p.src=null,d[Ve]=null)):H(i)}}}function Rs(i){return i in Ie?Ie[i]:Ie[i]="on"+i}function Fo(i,d){if(i.da)i=!0;else{d=new ke(d,this);const p=i.listener,y=i.ha||i.src;i.fa&&cr(i),i=p.call(y,d)}return i}function Ps(i){return i=i[Ve],i instanceof de?i:null}var Gr="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ci(i){return typeof i=="function"?i:(i[Gr]||(i[Gr]=function(d){return i.handleEvent(d)}),i[Gr])}function et(){P.call(this),this.i=new de(this),this.M=this,this.G=null}L(et,P),et.prototype[ct]=!0,et.prototype.removeEventListener=function(i,d,p,y){Pi(this,i,d,p,y)};function Ye(i,d){var p,y=i.G;if(y)for(p=[];y;y=y.G)p.push(y);if(i=i.M,y=d.type||d,typeof d=="string")d=new R(d,i);else if(d instanceof R)d.target=d.target||i;else{var D=d;d=new R(y,i),he(d,D)}D=!0;let j,Q;if(p)for(Q=p.length-1;Q>=0;Q--)j=d.g=p[Q],D=cn(j,y,!0,d)&&D;if(j=d.g=i,D=cn(j,y,!0,d)&&D,D=cn(j,y,!1,d)&&D,p)for(Q=0;Q<p.length;Q++)j=d.g=p[Q],D=cn(j,y,!1,d)&&D}et.prototype.N=function(){if(et.Z.N.call(this),this.i){var i=this.i;for(const d in i.g){const p=i.g[d];for(let y=0;y<p.length;y++)H(p[y]);delete i.g[d],i.h--}}this.G=null},et.prototype.J=function(i,d,p,y){return this.i.add(String(i),d,!1,p,y)},et.prototype.K=function(i,d,p,y){return this.i.add(String(i),d,!0,p,y)};function cn(i,d,p,y){if(d=i.i.g[String(d)],!d)return!0;d=d.concat();let D=!0;for(let j=0;j<d.length;++j){const Q=d[j];if(Q&&!Q.da&&Q.capture==p){const ce=Q.listener,Xe=Q.ha||Q.src;Q.fa&&_e(i.i,Q),D=ce.call(Xe,y)!==!1&&D}}return D&&!y.defaultPrevented}function ki(i,d){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=x(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:m.setTimeout(i,d||0)}function Vi(i){i.g=ki(()=>{i.g=null,i.i&&(i.i=!1,Vi(i))},i.l);const d=i.h;i.h=null,i.m.apply(null,d)}class jo extends P{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Vi(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hr(i){P.call(this),this.h=i,this.g={}}L(hr,P);var Ni=[];function Cs(i){oe(i.g,function(d,p){this.g.hasOwnProperty(p)&&cr(d)},i),i.g={}}hr.prototype.N=function(){hr.Z.N.call(this),Cs(this)},hr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dr=m.JSON.stringify,Bo=m.JSON.parse,Kr=class{stringify(i){return m.JSON.stringify(i,void 0)}parse(i){return m.JSON.parse(i,void 0)}};function fr(){}function zo(){}var pr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ks(){R.call(this,"d")}L(ks,R);function bi(){R.call(this,"c")}L(bi,R);var hn={},Vs=null;function mr(){return Vs=Vs||new et}hn.Ia="serverreachability";function Ns(i){R.call(this,hn.Ia,i)}L(Ns,R);function qn(i){const d=mr();Ye(d,new Ns(d))}hn.STAT_EVENT="statevent";function $n(i,d){R.call(this,hn.STAT_EVENT,i),this.stat=d}L($n,R);function He(i){const d=mr();Ye(d,new $n(d,i))}hn.Ja="timingevent";function Di(i,d){R.call(this,hn.Ja,i),this.size=d}L(Di,R);function gr(i,d){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){i()},d)}function yr(){this.g=!0}yr.prototype.ua=function(){this.g=!1};function Uo(i,d,p,y,D,j){i.info(function(){if(i.g)if(j){var Q="",ce=j.split("&");for(let De=0;De<ce.length;De++){var Xe=ce[De].split("=");if(Xe.length>1){const tt=Xe[0];Xe=Xe[1];const Qt=tt.split("_");Q=Qt.length>=2&&Qt[1]=="type"?Q+(tt+"="+Xe+"&"):Q+(tt+"=redacted&")}}}else Q=null;else Q=j;return"XMLHTTP REQ ("+y+") [attempt "+D+"]: "+d+`
`+p+`
`+Q})}function qo(i,d,p,y,D,j,Q){i.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+D+"]: "+d+`
`+p+`
`+j+" "+Q})}function En(i,d,p,y){i.info(function(){return"XMLHTTP TEXT ("+d+"): "+Qr(i,p)+(y?" "+y:"")})}function $o(i,d){i.info(function(){return"TIMEOUT: "+d})}yr.prototype.info=function(){};function Qr(i,d){if(!i.g)return d;if(!d)return null;try{const j=JSON.parse(d);if(j){for(i=0;i<j.length;i++)if(Array.isArray(j[i])){var p=j[i];if(!(p.length<2)){var y=p[1];if(Array.isArray(y)&&!(y.length<1)){var D=y[0];if(D!="noop"&&D!="stop"&&D!="close")for(let Q=1;Q<y.length;Q++)y[Q]=""}}}}return dr(j)}catch{return d}}var _r={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},vr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Go;function Gn(){}L(Gn,fr),Gn.prototype.g=function(){return new XMLHttpRequest},Go=new Gn;function In(i){return encodeURIComponent(String(i))}function bs(i){var d=1;i=i.split(":");const p=[];for(;d>0&&i.length;)p.push(i.shift()),d--;return i.length&&p.push(i.join(":")),p}function en(i,d,p,y){this.j=i,this.i=d,this.l=p,this.S=y||1,this.V=new hr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ko}function Ko(){this.i=null,this.g="",this.h=!1}var Qo={},Mi={};function dn(i,d,p){i.M=1,i.A=Qn(tn(d)),i.u=p,i.R=!0,Oi(i,null)}function Oi(i,d){i.F=Date.now(),Hr(i),i.B=tn(i.A);var p=i.B,y=i.S;Array.isArray(y)||(y=[String(y)]),Ki(p.i,"t",y),i.C=0,p=i.j.L,i.h=new Ko,i.g=ra(i.j,p?d:null,!i.u),i.P>0&&(i.O=new jo(x(i.Y,i,i.g),i.P)),d=i.V,p=i.g,y=i.ba;var D="readystatechange";Array.isArray(D)||(D&&(Ni[0]=D.toString()),D=Ni);for(let j=0;j<D.length;j++){const Q=Le(p,D[j],y||d.handleEvent,!1,d.h||d);if(!Q)break;d.g[Q.key]=Q}d=i.J?N(i.J):{},i.u?(i.v||(i.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,d)):(i.v="GET",i.g.ea(i.B,i.v,null,d)),qn(),Uo(i.i,i.v,i.B,i.l,i.S,i.u)}en.prototype.ba=function(i){i=i.target;const d=this.O;d&&Cn(i)==3?d.j():this.Y(i)},en.prototype.Y=function(i){try{if(i==this.g)e:{const ce=Cn(this.g),Xe=this.g.ya(),De=this.g.ca();if(!(ce<3)&&(ce!=3||this.g&&(this.h.h||this.g.la()||ta(this.g)))){this.K||ce!=4||Xe==7||(Xe==8||De<=0?qn(3):qn(2)),Ds(this);var d=this.g.ca();this.X=d;var p=Ho(this);if(this.o=d==200,qo(this.i,this.v,this.B,this.l,this.S,ce,d),this.o){if(this.U&&!this.L){t:{if(this.g){var y,D=this.g;if((y=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(y)){var j=y;break t}}j=null}if(i=j)En(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ze(this,i);else{this.o=!1,this.m=3,He(12),Kn(this),Wr(this);break e}}if(this.R){i=!0;let tt;for(;!this.K&&this.C<p.length;)if(tt=Jo(this,p),tt==Mi){ce==4&&(this.m=4,He(14),i=!1),En(this.i,this.l,null,"[Incomplete Response]");break}else if(tt==Qo){this.m=4,He(15),En(this.i,this.l,p,"[Invalid Chunk]"),i=!1;break}else En(this.i,this.l,tt,null),ze(this,tt);if(Wo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ce!=4||p.length!=0||this.h.h||(this.m=1,He(16),i=!1),this.o=this.o&&i,!i)En(this.i,this.l,p,"[Invalid Chunked Response]"),Kn(this),Wr(this);else if(p.length>0&&!this.W){this.W=!0;var Q=this.j;Q.g==this&&Q.aa&&!Q.P&&(Q.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),ss(Q),Q.P=!0,He(11))}}else En(this.i,this.l,p,null),ze(this,p);ce==4&&Kn(this),this.o&&!this.K&&(ce==4?$s(this.j,this):(this.o=!1,Hr(this)))}else Hi(this.g),d==400&&p.indexOf("Unknown SID")>0?(this.m=3,He(12)):(this.m=0,He(13)),Kn(this),Wr(this)}}}catch{}finally{}};function Ho(i){if(!Wo(i))return i.g.la();const d=ta(i.g);if(d==="")return"";let p="";const y=d.length,D=Cn(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return Kn(i),Wr(i),"";i.h.i=new m.TextDecoder}for(let j=0;j<y;j++)i.h.h=!0,p+=i.h.i.decode(d[j],{stream:!(D&&j==y-1)});return d.length=0,i.h.g+=p,i.C=0,i.h.g}function Wo(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function Jo(i,d){var p=i.C,y=d.indexOf(`
`,p);return y==-1?Mi:(p=Number(d.substring(p,y)),isNaN(p)?Qo:(y+=1,y+p>d.length?Mi:(d=d.slice(y,y+p),i.C=y+p,d)))}en.prototype.cancel=function(){this.K=!0,Kn(this)};function Hr(i){i.T=Date.now()+i.H,Li(i,i.H)}function Li(i,d){if(i.D!=null)throw Error("WatchDog timer not null");i.D=gr(x(i.aa,i),d)}function Ds(i){i.D&&(m.clearTimeout(i.D),i.D=null)}en.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?($o(this.i,this.B),this.M!=2&&(qn(),He(17)),Kn(this),this.m=2,Wr(this)):Li(this,this.T-i)};function Wr(i){i.j.I==0||i.K||$s(i.j,i)}function Kn(i){Ds(i);var d=i.O;d&&typeof d.dispose=="function"&&d.dispose(),i.O=null,Cs(i.V),i.g&&(d=i.g,i.g=null,d.abort(),d.dispose())}function ze(i,d){try{var p=i.j;if(p.I!=0&&(p.g==i||ji(p.h,i))){if(!i.L&&ji(p.h,i)&&p.I==3){try{var y=p.Ba.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var D=y;if(D[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<i.F)qs(p),Gt(p);else break e;Nn(p),He(18)}}else p.xa=D[1],0<p.xa-p.K&&D[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=gr(x(p.Va,p),6e3));Jr(p.h)<=1&&p.ta&&(p.ta=void 0)}else Kt(p,11)}else if((i.L||p.g==i)&&qs(p),!w(d))for(D=p.Ba.g.parse(d),d=0;d<D.length;d++){let De=D[d];const tt=De[0];if(!(tt<=p.K))if(p.K=tt,De=De[1],p.I==2)if(De[0]=="c"){p.M=De[1],p.ba=De[2];const Qt=De[3];Qt!=null&&(p.ka=Qt,p.j.info("VER="+p.ka));const Xn=De[4];Xn!=null&&(p.za=Xn,p.j.info("SVER="+p.za));const bn=De[5];bn!=null&&typeof bn=="number"&&bn>0&&(y=1.5*bn,p.O=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const Dn=i.g;if(Dn){const Qs=Dn.g?Dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qs){var j=y.h;j.g||Qs.indexOf("spdy")==-1&&Qs.indexOf("quic")==-1&&Qs.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Os(j,j.h),j.h=null))}if(y.G){const Yi=Dn.g?Dn.g.getResponseHeader("X-HTTP-Session-Id"):null;Yi&&(y.wa=Yi,Pe(y.J,y.G,Yi))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-i.F,p.j.info("Handshake RTT: "+p.T+"ms")),y=p;var Q=i;if(y.na=Ji(y,y.L?y.ba:null,y.W),Q.L){Yr(y.h,Q);var ce=Q,Xe=y.O;Xe&&(ce.H=Xe),ce.D&&(Ds(ce),Hr(ce)),y.g=Q}else Tt(y);p.i.length>0&&Yn(p)}else De[0]!="stop"&&De[0]!="close"||Kt(p,7);else p.I==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?Kt(p,7):zs(p):De[0]!="noop"&&p.l&&p.l.qa(De),p.A=0)}}qn(4)}catch{}}var Al=class{constructor(i,d){this.g=i,this.map=d}};function Ms(i){this.l=i||10,m.PerformanceNavigationTiming?(i=m.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Fi(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Jr(i){return i.h?1:i.g?i.g.size:0}function ji(i,d){return i.h?i.h==d:i.g?i.g.has(d):!1}function Os(i,d){i.g?i.g.add(d):i.h=d}function Yr(i,d){i.h&&i.h==d?i.h=null:i.g&&i.g.has(d)&&i.g.delete(d)}Ms.prototype.cancel=function(){if(this.i=Ut(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Ut(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let d=i.i;for(const p of i.g.values())d=d.concat(p.G);return d}return W(i.i)}var Yo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qt(i,d){if(i){i=i.split("&");for(let p=0;p<i.length;p++){const y=i[p].indexOf("=");let D,j=null;y>=0?(D=i[p].substring(0,y),j=i[p].substring(y+1)):D=i[p],d(D,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Tn(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;i instanceof Tn?(this.l=i.l,Xr(this,i.j),this.o=i.o,this.g=i.g,Sn(this,i.u),this.h=i.h,wr(this,Qi(i.i)),this.m=i.m):i&&(d=String(i).match(Yo))?(this.l=!1,Xr(this,d[1]||"",!0),this.o=Zr(d[2]||""),this.g=Zr(d[3]||"",!0),Sn(this,d[4]),this.h=Zr(d[5]||"",!0),wr(this,d[6]||"",!0),this.m=Zr(d[7]||"")):(this.l=!1,this.i=new we(null,this.l))}Tn.prototype.toString=function(){const i=[];var d=this.j;d&&i.push(es(d,zi,!0),":");var p=this.g;return(p||d=="file")&&(i.push("//"),(d=this.o)&&i.push(es(d,zi,!0),"@"),i.push(In(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&i.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&i.push("/"),i.push(es(p,p.charAt(0)=="/"?ts:Ui,!0))),(p=this.i.toString())&&i.push("?",p),(p=this.m)&&i.push("#",es(p,qi)),i.join("")},Tn.prototype.resolve=function(i){const d=tn(this);let p=!!i.j;p?Xr(d,i.j):p=!!i.o,p?d.o=i.o:p=!!i.g,p?d.g=i.g:p=i.u!=null;var y=i.h;if(p)Sn(d,i.u);else if(p=!!i.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var D=d.h.lastIndexOf("/");D!=-1&&(y=d.h.slice(0,D+1)+y)}if(D=y,D==".."||D==".")y="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){y=D.lastIndexOf("/",0)==0,D=D.split("/");const j=[];for(let Q=0;Q<D.length;){const ce=D[Q++];ce=="."?y&&Q==D.length&&j.push(""):ce==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),y&&Q==D.length&&j.push("")):(j.push(ce),y=!0)}y=j.join("/")}else y=D}return p?d.h=y:p=i.i.toString()!=="",p?wr(d,Qi(i.i)):p=!!i.m,p&&(d.m=i.m),d};function tn(i){return new Tn(i)}function Xr(i,d,p){i.j=p?Zr(d,!0):d,i.j&&(i.j=i.j.replace(/:$/,""))}function Sn(i,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);i.u=d}else i.u=null}function wr(i,d,p){d instanceof we?(i.i=d,Fs(i.i,i.l)):(p||(d=es(d,Rl)),i.i=new we(d,i.l))}function Pe(i,d,p){i.i.set(d,p)}function Qn(i){return Pe(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function Zr(i,d){return i?d?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function es(i,d,p){return typeof i=="string"?(i=encodeURI(i).replace(d,Bi),p&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Bi(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var zi=/[#\/\?@]/g,Ui=/[#\?:]/g,ts=/[#\?]/g,Rl=/[#\?@]/g,qi=/#/g;function we(i,d){this.h=this.g=null,this.i=i||null,this.j=!!d}function xn(i){i.g||(i.g=new Map,i.h=0,i.i&&qt(i.i,function(d,p){i.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}a=we.prototype,a.add=function(i,d){xn(this),this.i=null,i=An(this,i);let p=this.g.get(i);return p||this.g.set(i,p=[]),p.push(d),this.h+=1,this};function $i(i,d){xn(i),d=An(i,d),i.g.has(d)&&(i.i=null,i.h-=i.g.get(d).length,i.g.delete(d))}function Ls(i,d){return xn(i),d=An(i,d),i.g.has(d)}a.forEach=function(i,d){xn(this),this.g.forEach(function(p,y){p.forEach(function(D){i.call(d,D,y,this)},this)},this)};function Gi(i,d){xn(i);let p=[];if(typeof d=="string")Ls(i,d)&&(p=p.concat(i.g.get(An(i,d))));else for(i=Array.from(i.g.values()),d=0;d<i.length;d++)p=p.concat(i[d]);return p}a.set=function(i,d){return xn(this),this.i=null,i=An(this,i),Ls(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[d]),this.h+=1,this},a.get=function(i,d){return i?(i=Gi(this,i),i.length>0?String(i[0]):d):d};function Ki(i,d,p){$i(i,d),p.length>0&&(i.i=null,i.g.set(An(i,d),W(p)),i.h+=p.length)}a.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],d=Array.from(this.g.keys());for(let y=0;y<d.length;y++){var p=d[y];const D=In(p);p=Gi(this,p);for(let j=0;j<p.length;j++){let Q=D;p[j]!==""&&(Q+="="+In(p[j])),i.push(Q)}}return this.i=i.join("&")};function Qi(i){const d=new we;return d.i=i.i,i.g&&(d.g=new Map(i.g),d.h=i.h),d}function An(i,d){return d=String(d),i.j&&(d=d.toLowerCase()),d}function Fs(i,d){d&&!i.j&&(xn(i),i.i=null,i.g.forEach(function(p,y){const D=y.toLowerCase();y!=D&&($i(this,y),Ki(this,D,p))},i)),i.j=d}function Rn(i,d){const p=new yr;if(m.Image){const y=new Image;y.onload=O(yt,p,"TestLoadImage: loaded",!0,d,y),y.onerror=O(yt,p,"TestLoadImage: error",!1,d,y),y.onabort=O(yt,p,"TestLoadImage: abort",!1,d,y),y.ontimeout=O(yt,p,"TestLoadImage: timeout",!1,d,y),m.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=i}else d(!1)}function Pn(i,d){const p=new yr,y=new AbortController,D=setTimeout(()=>{y.abort(),yt(p,"TestPingServer: timeout",!1,d)},1e4);fetch(i,{signal:y.signal}).then(j=>{clearTimeout(D),j.ok?yt(p,"TestPingServer: ok",!0,d):yt(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),yt(p,"TestPingServer: error",!1,d)})}function yt(i,d,p,y,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),y(p)}catch{}}function ns(){this.g=new Kr}function Hn(i){this.i=i.Sb||null,this.h=i.ab||!1}L(Hn,fr),Hn.prototype.g=function(){return new $t(this.i,this.h)};function $t(i,d){et.call(this),this.H=i,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}L($t,et),a=$t.prototype,a.open=function(i,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=d,this.readyState=1,fn(this)},a.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(d.body=i),(this.H||m).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},a.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Er(this)),this.readyState=0},a.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,fn(this)),this.g&&(this.readyState=3,fn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Xo(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function Xo(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}a.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var d=i.value?i.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!i.done}))&&(this.response=this.responseText+=d)}i.done?Er(this):fn(this),this.readyState==3&&Xo(this)}},a.Oa=function(i){this.g&&(this.response=this.responseText=i,Er(this))},a.Na=function(i){this.g&&(this.response=i,Er(this))},a.ga=function(){this.g&&Er(this)};function Er(i){i.readyState=4,i.l=null,i.j=null,i.B=null,fn(i)}a.setRequestHeader=function(i,d){this.A.append(i,d)},a.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},a.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,i.push(p[0]+": "+p[1]),p=d.next();return i.join(`\r
`)};function fn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty($t.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Zo(i){let d="";return oe(i,function(p,y){d+=y,d+=":",d+=p,d+=`\r
`}),d}function js(i,d,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=Zo(p),typeof i=="string"?p!=null&&In(p):Pe(i,d,p))}function Fe(i){et.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}L(Fe,et);var ea=/^https?$/i,Pl=["POST","PUT"];a=Fe.prototype,a.Fa=function(i){this.H=i},a.ea=function(i,d,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);d=d?d.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Go.g(),this.g.onreadystatechange=B(x(this.Ca,this));try{this.B=!0,this.g.open(d,String(i),!0),this.B=!1}catch(j){Ir(this,j);return}if(i=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var D in y)p.set(D,y[D]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const j of y.keys())p.set(j,y.get(j));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(j=>j.toLowerCase()=="content-type"),D=m.FormData&&i instanceof m.FormData,!(Array.prototype.indexOf.call(Pl,d,void 0)>=0)||y||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,Q]of p)this.g.setRequestHeader(j,Q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(j){Ir(this,j)}};function Ir(i,d){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=d,i.o=5,Tr(i),Jn(i)}function Tr(i){i.A||(i.A=!0,Ye(i,"complete"),Ye(i,"error"))}a.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Ye(this,"complete"),Ye(this,"abort"),Jn(this))},a.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jn(this,!0)),Fe.Z.N.call(this)},a.Ca=function(){this.u||(this.B||this.v||this.j?Wn(this):this.Xa())},a.Xa=function(){Wn(this)};function Wn(i){if(i.h&&typeof f<"u"){if(i.v&&Cn(i)==4)setTimeout(i.Ca.bind(i),0);else if(Ye(i,"readystatechange"),Cn(i)==4){i.h=!1;try{const j=i.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var y;if(y=j===0){let Q=String(i.D).match(Yo)[1]||null;!Q&&m.self&&m.self.location&&(Q=m.self.location.protocol.slice(0,-1)),y=!ea.test(Q?Q.toLowerCase():"")}p=y}if(p)Ye(i,"complete"),Ye(i,"success");else{i.o=6;try{var D=Cn(i)>2?i.g.statusText:""}catch{D=""}i.l=D+" ["+i.ca()+"]",Tr(i)}}finally{Jn(i)}}}}function Jn(i,d){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const p=i.g;i.g=null,d||Ye(i,"ready");try{p.onreadystatechange=null}catch{}}}a.isActive=function(){return!!this.g};function Cn(i){return i.g?i.g.readyState:0}a.ca=function(){try{return Cn(this)>2?this.g.status:-1}catch{return-1}},a.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},a.La=function(i){if(this.g){var d=this.g.responseText;return i&&d.indexOf(i)==0&&(d=d.substring(i.length)),Bo(d)}};function ta(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Hi(i){const d={};i=(i.g&&Cn(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<i.length;y++){if(w(i[y]))continue;var p=bs(i[y]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const j=d[D]||[];d[D]=j,j.push(p)}Y(d,function(y){return y.join(", ")})}a.ya=function(){return this.o},a.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function kn(i,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[i]||d}function Bs(i){this.za=0,this.i=[],this.j=new yr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=kn("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=kn("baseRetryDelayMs",5e3,i),this.Za=kn("retryDelaySeedMs",1e4,i),this.Ta=kn("forwardChannelMaxRetries",2,i),this.va=kn("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Ms(i&&i.concurrentRequestLimit),this.Ba=new ns,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}a=Bs.prototype,a.ka=8,a.I=1,a.connect=function(i,d,p,y){He(0),this.W=i,this.H=d||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.J=Ji(this,null,this.W),Yn(this)};function zs(i){if(Us(i),i.I==3){var d=i.V++,p=tn(i.J);if(Pe(p,"SID",i.M),Pe(p,"RID",d),Pe(p,"TYPE","terminate"),Vn(i,p),d=new en(i,i.j,d),d.M=2,d.A=Qn(tn(p)),p=!1,m.navigator&&m.navigator.sendBeacon)try{p=m.navigator.sendBeacon(d.A.toString(),"")}catch{}!p&&m.Image&&(new Image().src=d.A,p=!0),p||(d.g=ra(d.j,null),d.g.ea(d.A)),d.F=Date.now(),Hr(d)}is(i)}function Gt(i){i.g&&(ss(i),i.g.cancel(),i.g=null)}function Us(i){Gt(i),i.v&&(m.clearTimeout(i.v),i.v=null),qs(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&m.clearTimeout(i.m),i.m=null)}function Yn(i){if(!Fi(i.h)&&!i.m){i.m=!0;var d=i.Ea;Oe||_(),Re||(Oe(),Re=!0),C.add(d,i),i.D=0}}function na(i,d){return Jr(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=d.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=gr(x(i.Ea,i,d),Gs(i,i.D)),i.D++,!0)}a.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const D=new en(this,this.j,i);let j=this.o;if(this.U&&(j?(j=N(j),he(j,this.U)):j=this.U),this.u!==null||this.R||(D.J=j,j=null),this.S)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,d>4096){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Wi(this,D,d),p=tn(this.J),Pe(p,"RID",i),Pe(p,"CVER",22),this.G&&Pe(p,"X-HTTP-Session-Id",this.G),Vn(this,p),j&&(this.R?d="headers="+In(Zo(j))+"&"+d:this.u&&js(p,this.u,j)),Os(this.h,D),this.Ra&&Pe(p,"TYPE","init"),this.S?(Pe(p,"$req",d),Pe(p,"SID","null"),D.U=!0,dn(D,p,null)):dn(D,p,d),this.I=2}}else this.I==3&&(i?rs(this,i):this.i.length==0||Fi(this.h)||rs(this))};function rs(i,d){var p;d?p=d.l:p=i.V++;const y=tn(i.J);Pe(y,"SID",i.M),Pe(y,"RID",p),Pe(y,"AID",i.K),Vn(i,y),i.u&&i.o&&js(y,i.u,i.o),p=new en(i,i.j,p,i.D+1),i.u===null&&(p.J=i.o),d&&(i.i=d.G.concat(i.i)),d=Wi(i,p,1e3),p.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Os(i.h,p),dn(p,y,d)}function Vn(i,d){i.H&&oe(i.H,function(p,y){Pe(d,y,p)}),i.l&&oe({},function(p,y){Pe(d,y,p)})}function Wi(i,d,p){p=Math.min(i.i.length,p);const y=i.l?x(i.l.Ka,i.l,i):null;e:{var D=i.i;let ce=-1;for(;;){const Xe=["count="+p];ce==-1?p>0?(ce=D[0].g,Xe.push("ofs="+ce)):ce=0:Xe.push("ofs="+ce);let De=!0;for(let tt=0;tt<p;tt++){var j=D[tt].g;const Qt=D[tt].map;if(j-=ce,j<0)ce=Math.max(0,D[tt].g-100),De=!1;else try{j="req"+j+"_"||"";try{var Q=Qt instanceof Map?Qt:Object.entries(Qt);for(const[Xn,bn]of Q){let Dn=bn;v(bn)&&(Dn=dr(bn)),Xe.push(j+Xn+"="+encodeURIComponent(Dn))}}catch(Xn){throw Xe.push(j+"type="+encodeURIComponent("_badmap")),Xn}}catch{y&&y(Qt)}}if(De){Q=Xe.join("&");break e}}Q=void 0}return i=i.i.splice(0,p),d.G=i,Q}function Tt(i){if(!i.g&&!i.v){i.Y=1;var d=i.Da;Oe||_(),Re||(Oe(),Re=!0),C.add(d,i),i.A=0}}function Nn(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=gr(x(i.Da,i),Gs(i,i.A)),i.A++,!0)}a.Da=function(){if(this.v=null,Sr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=gr(x(this.Wa,this),i)}},a.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,He(10),Gt(this),Sr(this))};function ss(i){i.B!=null&&(m.clearTimeout(i.B),i.B=null)}function Sr(i){i.g=new en(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var d=tn(i.na);Pe(d,"RID","rpc"),Pe(d,"SID",i.M),Pe(d,"AID",i.K),Pe(d,"CI",i.F?"0":"1"),!i.F&&i.ia&&Pe(d,"TO",i.ia),Pe(d,"TYPE","xmlhttp"),Vn(i,d),i.u&&i.o&&js(d,i.u,i.o),i.O&&(i.g.H=i.O);var p=i.g;i=i.ba,p.M=1,p.A=Qn(tn(d)),p.u=null,p.R=!0,Oi(p,i)}a.Va=function(){this.C!=null&&(this.C=null,Gt(this),Nn(this),He(19))};function qs(i){i.C!=null&&(m.clearTimeout(i.C),i.C=null)}function $s(i,d){var p=null;if(i.g==d){qs(i),ss(i),i.g=null;var y=2}else if(ji(i.h,d))p=d.G,Yr(i.h,d),y=1;else return;if(i.I!=0){if(d.o)if(y==1){p=d.u?d.u.length:0,d=Date.now()-d.F;var D=i.D;y=mr(),Ye(y,new Di(y,p)),Yn(i)}else Tt(i);else if(D=d.m,D==3||D==0&&d.X>0||!(y==1&&na(i,d)||y==2&&Nn(i)))switch(p&&p.length>0&&(d=i.h,d.i=d.i.concat(p)),D){case 1:Kt(i,5);break;case 4:Kt(i,10);break;case 3:Kt(i,6);break;default:Kt(i,2)}}}function Gs(i,d){let p=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(p*=2),p*d}function Kt(i,d){if(i.j.info("Error code "+d),d==2){var p=x(i.bb,i),y=i.Ua;const D=!y;y=new Tn(y||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Xr(y,"https"),Qn(y),D?Rn(y.toString(),p):Pn(y.toString(),p)}else He(2);i.I=0,i.l&&i.l.pa(d),is(i),Us(i)}a.bb=function(i){i?(this.j.info("Successfully pinged google.com"),He(2)):(this.j.info("Failed to ping google.com"),He(1))};function is(i){if(i.I=0,i.ja=[],i.l){const d=Ut(i.h);(d.length!=0||i.i.length!=0)&&(ie(i.ja,d),ie(i.ja,i.i),i.h.i.length=0,W(i.i),i.i.length=0),i.l.oa()}}function Ji(i,d,p){var y=p instanceof Tn?tn(p):new Tn(p);if(y.g!="")d&&(y.g=d+"."+y.g),Sn(y,y.u);else{var D=m.location;y=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;const j=new Tn(null);y&&Xr(j,y),d&&(j.g=d),D&&Sn(j,D),p&&(j.h=p),y=j}return p=i.G,d=i.wa,p&&d&&Pe(y,p,d),Pe(y,"VER",i.ka),Vn(i,y),y}function ra(i,d,p){if(d&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=i.Aa&&!i.ma?new Fe(new Hn({ab:p})):new Fe(i.ma),d.Fa(i.L),d}a.isActive=function(){return!!this.l&&this.l.isActive(this)};function sa(){}a=sa.prototype,a.ra=function(){},a.qa=function(){},a.pa=function(){},a.oa=function(){},a.isActive=function(){return!0},a.Ka=function(){};function Ks(){}Ks.prototype.g=function(i,d){return new _t(i,d)};function _t(i,d){et.call(this),this.g=new Bs(d),this.l=i,this.h=d&&d.messageUrlParams||null,i=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(i?i["X-WebChannel-Content-Type"]=d.messageContentType:i={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(i?i["X-WebChannel-Client-Profile"]=d.sa:i={"X-WebChannel-Client-Profile":d.sa}),this.g.U=i,(i=d&&d.Qb)&&!w(i)&&(this.g.u=i),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!w(d)&&(this.g.G=d,i=this.h,i!==null&&d in i&&(i=this.h,d in i&&delete i[d])),this.j=new xr(this)}L(_t,et),_t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){zs(this.g)},_t.prototype.o=function(i){var d=this.g;if(typeof i=="string"){var p={};p.__data__=i,i=p}else this.v&&(p={},p.__data__=dr(i),i=p);d.i.push(new Al(d.Ya++,i)),d.I==3&&Yn(d)},_t.prototype.N=function(){this.g.l=null,delete this.j,zs(this.g),delete this.g,_t.Z.N.call(this)};function ia(i){ks.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var d=i.__sm__;if(d){e:{for(const p in d){i=p;break e}i=void 0}(this.i=i)&&(i=this.i,d=d!==null&&i in d?d[i]:void 0),this.data=d}else this.data=i}L(ia,ks);function oa(){bi.call(this),this.status=1}L(oa,bi);function xr(i){this.g=i}L(xr,sa),xr.prototype.ra=function(){Ye(this.g,"a")},xr.prototype.qa=function(i){Ye(this.g,new ia(i))},xr.prototype.pa=function(i){Ye(this.g,new oa)},xr.prototype.oa=function(){Ye(this.g,"b")},Ks.prototype.createWebChannel=Ks.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,Tp=function(){return new Ks},Ip=function(){return mr()},Ep=hn,dc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_r.NO_ERROR=0,_r.TIMEOUT=8,_r.HTTP_ERROR=6,ll=_r,vr.COMPLETE="complete",wp=vr,zo.EventType=pr,pr.OPEN="a",pr.CLOSE="b",pr.ERROR="c",pr.MESSAGE="d",et.prototype.listen=et.prototype.J,Ro=zo,Fe.prototype.listenOnce=Fe.prototype.K,Fe.prototype.getLastError=Fe.prototype.Ha,Fe.prototype.getLastErrorCode=Fe.prototype.ya,Fe.prototype.getStatus=Fe.prototype.ca,Fe.prototype.getResponseJson=Fe.prototype.La,Fe.prototype.getResponseText=Fe.prototype.la,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Fa,vp=Fe}).apply(typeof tl<"u"?tl:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Yt{constructor(n){this.uid=n}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(n){return n.uid===this.uid}}Yt.UNAUTHENTICATED=new Yt(null),Yt.GOOGLE_CREDENTIALS=new Yt("google-credentials-uid"),Yt.FIRST_PARTY=new Yt("first-party-uid"),Yt.MOCK_USER=new Yt("mock-user");/**
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
 */let Ai="12.10.0";function M_(a){Ai=a}/**
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
 */const Ss=new pp("@firebase/firestore");function So(){return Ss.logLevel}function pe(a,...n){if(Ss.logLevel<=Se.DEBUG){const r=n.map(Cc);Ss.debug(`Firestore (${Ai}): ${a}`,...r)}}function Il(a,...n){if(Ss.logLevel<=Se.ERROR){const r=n.map(Cc);Ss.error(`Firestore (${Ai}): ${a}`,...r)}}function fc(a,...n){if(Ss.logLevel<=Se.WARN){const r=n.map(Cc);Ss.warn(`Firestore (${Ai}): ${a}`,...r)}}function Cc(a){if(typeof a=="string")return a;try{return(function(r){return JSON.stringify(r)})(a)}catch{return a}}/**
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
 */function Ae(a,n,r){let l="Unexpected state";typeof n=="string"?l=n:r=n,Sp(a,l,r)}function Sp(a,n,r){let l=`FIRESTORE (${Ai}) INTERNAL ASSERTION FAILED: ${n} (ID: ${a.toString(16)})`;if(r!==void 0)try{l+=" CONTEXT: "+JSON.stringify(r)}catch{l+=" CONTEXT: "+r}throw Il(l),new Error(l)}function Bt(a,n,r,l){let u="Unexpected state";typeof r=="string"?u=r:l=r,a||Sp(n,u,l)}function zt(a,n){return a}/**
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
 */const ee={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends xi{constructor(n,r){super(n,r),this.code=n,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Po{constructor(){this.promise=new Promise(((n,r)=>{this.resolve=n,this.reject=r}))}}/**
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
 */class O_{constructor(n,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${n}`)}}class L_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(n,r){n.enqueueRetryable((()=>r(Yt.UNAUTHENTICATED)))}shutdown(){}}class F_{constructor(n){this.t=n,this.currentUser=Yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(n,r){Bt(this.o===void 0,42304);let l=this.i;const u=S=>this.i!==l?(l=this.i,r(S)):Promise.resolve();let f=new Po;this.o=()=>{this.i++,this.currentUser=this.u(),f.resolve(),f=new Po,n.enqueueRetryable((()=>u(this.currentUser)))};const m=()=>{const S=f;n.enqueueRetryable((async()=>{await S.promise,await u(this.currentUser)}))},v=S=>{pe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=S,this.o&&(this.auth.addAuthTokenListener(this.o),m())};this.t.onInit((S=>v(S))),setTimeout((()=>{if(!this.auth){const S=this.t.getImmediate({optional:!0});S?v(S):(pe("FirebaseAuthCredentialsProvider","Auth not yet detected"),f.resolve(),f=new Po)}}),0),m()}getToken(){const n=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then((l=>this.i!==n?(pe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):l?(Bt(typeof l.accessToken=="string",31837,{l}),new O_(l.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const n=this.auth&&this.auth.getUid();return Bt(n===null||typeof n=="string",2055,{h:n}),new Yt(n)}}class j_{constructor(n,r,l){this.P=n,this.T=r,this.I=l,this.type="FirstParty",this.user=Yt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const n=this.A();return n&&this.R.set("Authorization",n),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class B_{constructor(n,r,l){this.P=n,this.T=r,this.I=l}getToken(){return Promise.resolve(new j_(this.P,this.T,this.I))}start(n,r){n.enqueueRetryable((()=>r(Yt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Sf{constructor(n){this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class z_{constructor(n,r){this.V=r,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,v_(n)&&n.settings.appCheckToken&&(this.p=n.settings.appCheckToken)}start(n,r){Bt(this.o===void 0,3512);const l=f=>{f.error!=null&&pe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${f.error.message}`);const m=f.token!==this.m;return this.m=f.token,pe("FirebaseAppCheckTokenProvider",`Received ${m?"new":"existing"} token.`),m?r(f.token):Promise.resolve()};this.o=f=>{n.enqueueRetryable((()=>l(f)))};const u=f=>{pe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=f,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((f=>u(f))),setTimeout((()=>{if(!this.appCheck){const f=this.V.getImmediate({optional:!0});f?u(f):pe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Sf(this.p));const n=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(n).then((r=>r?(Bt(typeof r.token=="string",44558,{tokenResult:r}),this.m=r.token,new Sf(r.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function U_(a){const n=typeof self<"u"&&(self.crypto||self.msCrypto),r=new Uint8Array(a);if(n&&typeof n.getRandomValues=="function")n.getRandomValues(r);else for(let l=0;l<a;l++)r[l]=Math.floor(256*Math.random());return r}/**
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
 */class q_{static newId(){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=62*Math.floor(4.129032258064516);let l="";for(;l.length<20;){const u=U_(40);for(let f=0;f<u.length;++f)l.length<20&&u[f]<r&&(l+=n.charAt(u[f]%62))}return l}}function je(a,n){return a<n?-1:a>n?1:0}function pc(a,n){const r=Math.min(a.length,n.length);for(let l=0;l<r;l++){const u=a.charAt(l),f=n.charAt(l);if(u!==f)return sc(u)===sc(f)?je(u,f):sc(u)?1:-1}return je(a.length,n.length)}const $_=55296,G_=57343;function sc(a){const n=a.charCodeAt(0);return n>=$_&&n<=G_}function vi(a,n,r){return a.length===n.length&&a.every(((l,u)=>r(l,n[u])))}/**
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
 */const xf="__name__";class jn{constructor(n,r,l){r===void 0?r=0:r>n.length&&Ae(637,{offset:r,range:n.length}),l===void 0?l=n.length-r:l>n.length-r&&Ae(1746,{length:l,range:n.length-r}),this.segments=n,this.offset=r,this.len=l}get length(){return this.len}isEqual(n){return jn.comparator(this,n)===0}child(n){const r=this.segments.slice(this.offset,this.limit());return n instanceof jn?n.forEach((l=>{r.push(l)})):r.push(n),this.construct(r)}limit(){return this.offset+this.length}popFirst(n){return n=n===void 0?1:n,this.construct(this.segments,this.offset+n,this.length-n)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(n){return this.segments[this.offset+n]}isEmpty(){return this.length===0}isPrefixOf(n){if(n.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==n.get(r))return!1;return!0}isImmediateParentOf(n){if(this.length+1!==n.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==n.get(r))return!1;return!0}forEach(n){for(let r=this.offset,l=this.limit();r<l;r++)n(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(n,r){const l=Math.min(n.length,r.length);for(let u=0;u<l;u++){const f=jn.compareSegments(n.get(u),r.get(u));if(f!==0)return f}return je(n.length,r.length)}static compareSegments(n,r){const l=jn.isNumericId(n),u=jn.isNumericId(r);return l&&!u?-1:!l&&u?1:l&&u?jn.extractNumericId(n).compare(jn.extractNumericId(r)):pc(n,r)}static isNumericId(n){return n.startsWith("__id")&&n.endsWith("__")}static extractNumericId(n){return Pc.fromString(n.substring(4,n.length-2))}}class mt extends jn{construct(n,r,l){return new mt(n,r,l)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...n){const r=[];for(const l of n){if(l.indexOf("//")>=0)throw new fe(ee.INVALID_ARGUMENT,`Invalid segment (${l}). Paths must not contain // in them.`);r.push(...l.split("/").filter((u=>u.length>0)))}return new mt(r)}static emptyPath(){return new mt([])}}const K_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends jn{construct(n,r,l){return new bt(n,r,l)}static isValidIdentifier(n){return K_.test(n)}canonicalString(){return this.toArray().map((n=>(n=n.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(n)||(n="`"+n+"`"),n))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===xf}static keyField(){return new bt([xf])}static fromServerFormat(n){const r=[];let l="",u=0;const f=()=>{if(l.length===0)throw new fe(ee.INVALID_ARGUMENT,`Invalid field path (${n}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(l),l=""};let m=!1;for(;u<n.length;){const v=n[u];if(v==="\\"){if(u+1===n.length)throw new fe(ee.INVALID_ARGUMENT,"Path has trailing escape character: "+n);const S=n[u+1];if(S!=="\\"&&S!=="."&&S!=="`")throw new fe(ee.INVALID_ARGUMENT,"Path has invalid escape sequence: "+n);l+=S,u+=2}else v==="`"?(m=!m,u++):v!=="."||m?(l+=v,u++):(f(),u++)}if(f(),m)throw new fe(ee.INVALID_ARGUMENT,"Unterminated ` in path: "+n);return new bt(r)}static emptyPath(){return new bt([])}}/**
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
 */class ye{constructor(n){this.path=n}static fromPath(n){return new ye(mt.fromString(n))}static fromName(n){return new ye(mt.fromString(n).popFirst(5))}static empty(){return new ye(mt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(n){return this.path.length>=2&&this.path.get(this.path.length-2)===n}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(n){return n!==null&&mt.comparator(this.path,n.path)===0}toString(){return this.path.toString()}static comparator(n,r){return mt.comparator(n.path,r.path)}static isDocumentKey(n){return n.length%2==0}static fromSegments(n){return new ye(new mt(n.slice()))}}/**
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
 */function Q_(a,n,r,l){if(n===!0&&l===!0)throw new fe(ee.INVALID_ARGUMENT,`${a} and ${r} cannot be used together.`)}function H_(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(a,n){const r={typeString:a};return n&&(r.value=n),r}function Lo(a,n){if(!H_(a))throw new fe(ee.INVALID_ARGUMENT,"JSON must be an object");let r;for(const l in n)if(n[l]){const u=n[l].typeString,f="value"in n[l]?{value:n[l].value}:void 0;if(!(l in a)){r=`JSON missing required field: '${l}'`;break}const m=a[l];if(u&&typeof m!==u){r=`JSON field '${l}' must be a ${u}.`;break}if(f!==void 0&&m!==f.value){r=`Expected '${l}' field to equal '${f.value}'`;break}}if(r)throw new fe(ee.INVALID_ARGUMENT,r);return!0}/**
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
 */const Af=-62135596800,Rf=1e6;class lt{static now(){return lt.fromMillis(Date.now())}static fromDate(n){return lt.fromMillis(n.getTime())}static fromMillis(n){const r=Math.floor(n/1e3),l=Math.floor((n-1e3*r)*Rf);return new lt(r,l)}constructor(n,r){if(this.seconds=n,this.nanoseconds=r,r<0)throw new fe(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new fe(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(n<Af)throw new fe(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+n);if(n>=253402300800)throw new fe(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Rf}_compareTo(n){return this.seconds===n.seconds?je(this.nanoseconds,n.nanoseconds):je(this.seconds,n.seconds)}isEqual(n){return n.seconds===this.seconds&&n.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:lt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(n){if(Lo(n,lt._jsonSchema))return new lt(n.seconds,n.nanoseconds)}valueOf(){const n=this.seconds-Af;return String(n).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}lt._jsonSchemaVersion="firestore/timestamp/1.0",lt._jsonSchema={type:it("string",lt._jsonSchemaVersion),seconds:it("number"),nanoseconds:it("number")};/**
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
 */class Je{static fromTimestamp(n){return new Je(n)}static min(){return new Je(new lt(0,0))}static max(){return new Je(new lt(253402300799,999999999))}constructor(n){this.timestamp=n}compareTo(n){return this.timestamp._compareTo(n.timestamp)}isEqual(n){return this.timestamp.isEqual(n.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Mo=-1;class W_{constructor(n,r,l,u){this.indexId=n,this.collectionGroup=r,this.fields=l,this.indexState=u}}W_.UNKNOWN_ID=-1;function J_(a,n){const r=a.toTimestamp().seconds,l=a.toTimestamp().nanoseconds+1,u=Je.fromTimestamp(l===1e9?new lt(r+1,0):new lt(r,l));return new Ur(u,ye.empty(),n)}function Y_(a){return new Ur(a.readTime,a.key,Mo)}class Ur{constructor(n,r,l){this.readTime=n,this.documentKey=r,this.largestBatchId=l}static min(){return new Ur(Je.min(),ye.empty(),Mo)}static max(){return new Ur(Je.max(),ye.empty(),Mo)}}function X_(a,n){let r=a.readTime.compareTo(n.readTime);return r!==0?r:(r=ye.comparator(a.documentKey,n.documentKey),r!==0?r:je(a.largestBatchId,n.largestBatchId))}/**
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
 */class Z_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(n){this.onCommittedListeners.push(n)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((n=>n()))}}/**
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
 */class G{constructor(n){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,n((r=>{this.isDone=!0,this.result=r,this.nextCallback&&this.nextCallback(r)}),(r=>{this.isDone=!0,this.error=r,this.catchCallback&&this.catchCallback(r)}))}catch(n){return this.next(void 0,n)}next(n,r){return this.callbackAttached&&Ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(r,this.error):this.wrapSuccess(n,this.result):new G(((l,u)=>{this.nextCallback=f=>{this.wrapSuccess(n,f).next(l,u)},this.catchCallback=f=>{this.wrapFailure(r,f).next(l,u)}}))}toPromise(){return new Promise(((n,r)=>{this.next(n,r)}))}wrapUserFunction(n){try{const r=n();return r instanceof G?r:G.resolve(r)}catch(r){return G.reject(r)}}wrapSuccess(n,r){return n?this.wrapUserFunction((()=>n(r))):G.resolve(r)}wrapFailure(n,r){return n?this.wrapUserFunction((()=>n(r))):G.reject(r)}static resolve(n){return new G(((r,l)=>{r(n)}))}static reject(n){return new G(((r,l)=>{l(n)}))}static waitFor(n){return new G(((r,l)=>{let u=0,f=0,m=!1;n.forEach((v=>{++u,v.next((()=>{++f,m&&f===u&&r()}),(S=>l(S)))})),m=!0,f===u&&r()}))}static or(n){let r=G.resolve(!1);for(const l of n)r=r.next((u=>u?G.resolve(u):l()));return r}static forEach(n,r){const l=[];return n.forEach(((u,f)=>{l.push(r.call(this,u,f))})),this.waitFor(l)}static mapArray(n,r){return new G(((l,u)=>{const f=n.length,m=new Array(f);let v=0;for(let S=0;S<f;S++){const x=S;r(n[x]).next((O=>{m[x]=O,++v,v===f&&l(m)}),(O=>u(O)))}}))}static doWhile(n,r){return new G(((l,u)=>{const f=()=>{n()===!0?r().next((()=>{f()}),u):l()};f()}))}}/**
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
 */function ev(a){const n=a.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}function xp(a){return a.name==="IndexedDbTransactionError"}/**
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
 */class Ap{constructor(n,r){this.previousValue=n,r&&(r.sequenceNumberHandler=l=>this.ae(l),this.ue=l=>r.writeSequenceNumber(l))}ae(n){return this.previousValue=Math.max(n,this.previousValue),this.previousValue}next(){const n=++this.previousValue;return this.ue&&this.ue(n),n}}Ap.ce=-1;/**
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
 */const tv=-1;function kc(a){return a==null}function fl(a){return a===0&&1/a==-1/0}/**
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
 */const nv="remoteDocuments",Rp="owner";const Pp="mutationQueues";const Cp="mutations";/**
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
 */const kp="documentMutations",rv="remoteDocumentsV14";const Vp="remoteDocumentGlobal";const Np="targets";const bp="targetDocuments";const Dp="targetGlobal",Mp="collectionParents";const Op="clientMetadata";const Lp="bundles";const Fp="namedQueries";const sv="indexConfiguration";const iv="indexState";const ov="indexEntries";const jp="documentOverlays";const av="globals";const lv=[Pp,Cp,kp,nv,Np,Rp,Dp,bp,Op,Vp,Mp,Lp,Fp],uw=[...lv,jp],uv=[Pp,Cp,kp,rv,Np,Rp,Dp,bp,Op,Vp,Mp,Lp,Fp,jp],cv=uv,hv=[...cv,sv,iv,ov];const cw=[...hv,av];/**
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
 */function Pf(a){let n=0;for(const r in a)Object.prototype.hasOwnProperty.call(a,r)&&n++;return n}function Vc(a,n){for(const r in a)Object.prototype.hasOwnProperty.call(a,r)&&n(r,a[r])}function dv(a){for(const n in a)if(Object.prototype.hasOwnProperty.call(a,n))return!1;return!0}/**
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
 */class Zt{constructor(n,r){this.comparator=n,this.root=r||Et.EMPTY}insert(n,r){return new Zt(this.comparator,this.root.insert(n,r,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(n){return new Zt(this.comparator,this.root.remove(n,this.comparator).copy(null,null,Et.BLACK,null,null))}get(n){let r=this.root;for(;!r.isEmpty();){const l=this.comparator(n,r.key);if(l===0)return r.value;l<0?r=r.left:l>0&&(r=r.right)}return null}indexOf(n){let r=0,l=this.root;for(;!l.isEmpty();){const u=this.comparator(n,l.key);if(u===0)return r+l.left.size;u<0?l=l.left:(r+=l.left.size+1,l=l.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(n){return this.root.inorderTraversal(n)}forEach(n){this.inorderTraversal(((r,l)=>(n(r,l),!1)))}toString(){const n=[];return this.inorderTraversal(((r,l)=>(n.push(`${r}:${l}`),!1))),`{${n.join(", ")}}`}reverseTraversal(n){return this.root.reverseTraversal(n)}getIterator(){return new nl(this.root,null,this.comparator,!1)}getIteratorFrom(n){return new nl(this.root,n,this.comparator,!1)}getReverseIterator(){return new nl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(n){return new nl(this.root,n,this.comparator,!0)}}class nl{constructor(n,r,l,u){this.isReverse=u,this.nodeStack=[];let f=1;for(;!n.isEmpty();)if(f=r?l(n.key,r):1,r&&u&&(f*=-1),f<0)n=this.isReverse?n.left:n.right;else{if(f===0){this.nodeStack.push(n);break}this.nodeStack.push(n),n=this.isReverse?n.right:n.left}}getNext(){let n=this.nodeStack.pop();const r={key:n.key,value:n.value};if(this.isReverse)for(n=n.left;!n.isEmpty();)this.nodeStack.push(n),n=n.right;else for(n=n.right;!n.isEmpty();)this.nodeStack.push(n),n=n.left;return r}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const n=this.nodeStack[this.nodeStack.length-1];return{key:n.key,value:n.value}}}class Et{constructor(n,r,l,u,f){this.key=n,this.value=r,this.color=l??Et.RED,this.left=u??Et.EMPTY,this.right=f??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(n,r,l,u,f){return new Et(n??this.key,r??this.value,l??this.color,u??this.left,f??this.right)}isEmpty(){return!1}inorderTraversal(n){return this.left.inorderTraversal(n)||n(this.key,this.value)||this.right.inorderTraversal(n)}reverseTraversal(n){return this.right.reverseTraversal(n)||n(this.key,this.value)||this.left.reverseTraversal(n)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(n,r,l){let u=this;const f=l(n,u.key);return u=f<0?u.copy(null,null,null,u.left.insert(n,r,l),null):f===0?u.copy(null,r,null,null,null):u.copy(null,null,null,null,u.right.insert(n,r,l)),u.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let n=this;return n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.removeMin(),null),n.fixUp()}remove(n,r){let l,u=this;if(r(n,u.key)<0)u.left.isEmpty()||u.left.isRed()||u.left.left.isRed()||(u=u.moveRedLeft()),u=u.copy(null,null,null,u.left.remove(n,r),null);else{if(u.left.isRed()&&(u=u.rotateRight()),u.right.isEmpty()||u.right.isRed()||u.right.left.isRed()||(u=u.moveRedRight()),r(n,u.key)===0){if(u.right.isEmpty())return Et.EMPTY;l=u.right.min(),u=u.copy(l.key,l.value,null,null,u.right.removeMin())}u=u.copy(null,null,null,null,u.right.remove(n,r))}return u.fixUp()}isRed(){return this.color}fixUp(){let n=this;return n.right.isRed()&&!n.left.isRed()&&(n=n.rotateLeft()),n.left.isRed()&&n.left.left.isRed()&&(n=n.rotateRight()),n.left.isRed()&&n.right.isRed()&&(n=n.colorFlip()),n}moveRedLeft(){let n=this.colorFlip();return n.right.left.isRed()&&(n=n.copy(null,null,null,null,n.right.rotateRight()),n=n.rotateLeft(),n=n.colorFlip()),n}moveRedRight(){let n=this.colorFlip();return n.left.left.isRed()&&(n=n.rotateRight(),n=n.colorFlip()),n}rotateLeft(){const n=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,n,null)}rotateRight(){const n=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,n)}colorFlip(){const n=this.left.copy(null,null,!this.left.color,null,null),r=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,n,r)}checkMaxDepth(){const n=this.check();return Math.pow(2,n)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ae(14113,{key:this.key,value:this.value});const n=this.left.check();if(n!==this.right.check())throw Ae(27949);return n+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae(57766)}get value(){throw Ae(16141)}get color(){throw Ae(16727)}get left(){throw Ae(29726)}get right(){throw Ae(36894)}copy(n,r,l,u,f){return this}insert(n,r,l){return new Et(n,r)}remove(n,r){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ct{constructor(n){this.comparator=n,this.data=new Zt(this.comparator)}has(n){return this.data.get(n)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(n){return this.data.indexOf(n)}forEach(n){this.data.inorderTraversal(((r,l)=>(n(r),!1)))}forEachInRange(n,r){const l=this.data.getIteratorFrom(n[0]);for(;l.hasNext();){const u=l.getNext();if(this.comparator(u.key,n[1])>=0)return;r(u.key)}}forEachWhile(n,r){let l;for(l=r!==void 0?this.data.getIteratorFrom(r):this.data.getIterator();l.hasNext();)if(!n(l.getNext().key))return}firstAfterOrEqual(n){const r=this.data.getIteratorFrom(n);return r.hasNext()?r.getNext().key:null}getIterator(){return new Cf(this.data.getIterator())}getIteratorFrom(n){return new Cf(this.data.getIteratorFrom(n))}add(n){return this.copy(this.data.remove(n).insert(n,!0))}delete(n){return this.has(n)?this.copy(this.data.remove(n)):this}isEmpty(){return this.data.isEmpty()}unionWith(n){let r=this;return r.size<n.size&&(r=n,n=this),n.forEach((l=>{r=r.add(l)})),r}isEqual(n){if(!(n instanceof Ct)||this.size!==n.size)return!1;const r=this.data.getIterator(),l=n.data.getIterator();for(;r.hasNext();){const u=r.getNext().key,f=l.getNext().key;if(this.comparator(u,f)!==0)return!1}return!0}toArray(){const n=[];return this.forEach((r=>{n.push(r)})),n}toString(){const n=[];return this.forEach((r=>n.push(r))),"SortedSet("+n.toString()+")"}copy(n){const r=new Ct(this.comparator);return r.data=n,r}}class Cf{constructor(n){this.iter=n}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Br{constructor(n){this.fields=n,n.sort(bt.comparator)}static empty(){return new Br([])}unionWith(n){let r=new Ct(bt.comparator);for(const l of this.fields)r=r.add(l);for(const l of n)r=r.add(l);return new Br(r.toArray())}covers(n){for(const r of this.fields)if(r.isPrefixOf(n))return!0;return!1}isEqual(n){return vi(this.fields,n.fields,((r,l)=>r.isEqual(l)))}}/**
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
 */class fv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class zn{constructor(n){this.binaryString=n}static fromBase64String(n){const r=(function(u){try{return atob(u)}catch(f){throw typeof DOMException<"u"&&f instanceof DOMException?new fv("Invalid base64 string: "+f):f}})(n);return new zn(r)}static fromUint8Array(n){const r=(function(u){let f="";for(let m=0;m<u.length;++m)f+=String.fromCharCode(u[m]);return f})(n);return new zn(r)}[Symbol.iterator](){let n=0;return{next:()=>n<this.binaryString.length?{value:this.binaryString.charCodeAt(n++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(r){return btoa(r)})(this.binaryString)}toUint8Array(){return(function(r){const l=new Uint8Array(r.length);for(let u=0;u<r.length;u++)l[u]=r.charCodeAt(u);return l})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(n){return je(this.binaryString,n.binaryString)}isEqual(n){return this.binaryString===n.binaryString}}zn.EMPTY_BYTE_STRING=new zn("");const pv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qr(a){if(Bt(!!a,39018),typeof a=="string"){let n=0;const r=pv.exec(a);if(Bt(!!r,46558,{timestamp:a}),r[1]){let u=r[1];u=(u+"000000000").substr(0,9),n=Number(u)}const l=new Date(a);return{seconds:Math.floor(l.getTime()/1e3),nanos:n}}return{seconds:st(a.seconds),nanos:st(a.nanos)}}function st(a){return typeof a=="number"?a:typeof a=="string"?Number(a):0}function wi(a){return typeof a=="string"?zn.fromBase64String(a):zn.fromUint8Array(a)}/**
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
 */const Bp="server_timestamp",zp="__type__",Up="__previous_value__",qp="__local_write_time__";function Nc(a){var r,l;return((l=(((r=a==null?void 0:a.mapValue)==null?void 0:r.fields)||{})[zp])==null?void 0:l.stringValue)===Bp}function $p(a){const n=a.mapValue.fields[Up];return Nc(n)?$p(n):n}function pl(a){const n=qr(a.mapValue.fields[qp].timestampValue);return new lt(n.seconds,n.nanos)}/**
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
 */const mc="(default)";class ml{constructor(n,r){this.projectId=n,this.database=r||mc}static empty(){return new ml("","")}get isDefaultDatabase(){return this.database===mc}isEqual(n){return n instanceof ml&&n.projectId===this.projectId&&n.database===this.database}}function mv(a,n){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new fe(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ml(a.options.projectId,n)}/**
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
 */const Gp="__type__",Kp="__max__",rl={mapValue:{fields:{__type__:{stringValue:Kp}}}},Qp="__vector__",gl="value";function Ei(a){return"nullValue"in a?0:"booleanValue"in a?1:"integerValue"in a||"doubleValue"in a?2:"timestampValue"in a?3:"stringValue"in a?5:"bytesValue"in a?6:"referenceValue"in a?7:"geoPointValue"in a?8:"arrayValue"in a?9:"mapValue"in a?Nc(a)?4:Wp(a)?9007199254740991:Hp(a)?10:11:Ae(28295,{value:a})}function Un(a,n){if(a===n)return!0;const r=Ei(a);if(r!==Ei(n))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return a.booleanValue===n.booleanValue;case 4:return pl(a).isEqual(pl(n));case 3:return(function(u,f){if(typeof u.timestampValue=="string"&&typeof f.timestampValue=="string"&&u.timestampValue.length===f.timestampValue.length)return u.timestampValue===f.timestampValue;const m=qr(u.timestampValue),v=qr(f.timestampValue);return m.seconds===v.seconds&&m.nanos===v.nanos})(a,n);case 5:return a.stringValue===n.stringValue;case 6:return(function(u,f){return wi(u.bytesValue).isEqual(wi(f.bytesValue))})(a,n);case 7:return a.referenceValue===n.referenceValue;case 8:return(function(u,f){return st(u.geoPointValue.latitude)===st(f.geoPointValue.latitude)&&st(u.geoPointValue.longitude)===st(f.geoPointValue.longitude)})(a,n);case 2:return(function(u,f){if("integerValue"in u&&"integerValue"in f)return st(u.integerValue)===st(f.integerValue);if("doubleValue"in u&&"doubleValue"in f){const m=st(u.doubleValue),v=st(f.doubleValue);return m===v?fl(m)===fl(v):isNaN(m)&&isNaN(v)}return!1})(a,n);case 9:return vi(a.arrayValue.values||[],n.arrayValue.values||[],Un);case 10:case 11:return(function(u,f){const m=u.mapValue.fields||{},v=f.mapValue.fields||{};if(Pf(m)!==Pf(v))return!1;for(const S in m)if(m.hasOwnProperty(S)&&(v[S]===void 0||!Un(m[S],v[S])))return!1;return!0})(a,n);default:return Ae(52216,{left:a})}}function Oo(a,n){return(a.values||[]).find((r=>Un(r,n)))!==void 0}function Ii(a,n){if(a===n)return 0;const r=Ei(a),l=Ei(n);if(r!==l)return je(r,l);switch(r){case 0:case 9007199254740991:return 0;case 1:return je(a.booleanValue,n.booleanValue);case 2:return(function(f,m){const v=st(f.integerValue||f.doubleValue),S=st(m.integerValue||m.doubleValue);return v<S?-1:v>S?1:v===S?0:isNaN(v)?isNaN(S)?0:-1:1})(a,n);case 3:return kf(a.timestampValue,n.timestampValue);case 4:return kf(pl(a),pl(n));case 5:return pc(a.stringValue,n.stringValue);case 6:return(function(f,m){const v=wi(f),S=wi(m);return v.compareTo(S)})(a.bytesValue,n.bytesValue);case 7:return(function(f,m){const v=f.split("/"),S=m.split("/");for(let x=0;x<v.length&&x<S.length;x++){const O=je(v[x],S[x]);if(O!==0)return O}return je(v.length,S.length)})(a.referenceValue,n.referenceValue);case 8:return(function(f,m){const v=je(st(f.latitude),st(m.latitude));return v!==0?v:je(st(f.longitude),st(m.longitude))})(a.geoPointValue,n.geoPointValue);case 9:return Vf(a.arrayValue,n.arrayValue);case 10:return(function(f,m){var B,W,ie,se;const v=f.fields||{},S=m.fields||{},x=(B=v[gl])==null?void 0:B.arrayValue,O=(W=S[gl])==null?void 0:W.arrayValue,L=je(((ie=x==null?void 0:x.values)==null?void 0:ie.length)||0,((se=O==null?void 0:O.values)==null?void 0:se.length)||0);return L!==0?L:Vf(x,O)})(a.mapValue,n.mapValue);case 11:return(function(f,m){if(f===rl.mapValue&&m===rl.mapValue)return 0;if(f===rl.mapValue)return 1;if(m===rl.mapValue)return-1;const v=f.fields||{},S=Object.keys(v),x=m.fields||{},O=Object.keys(x);S.sort(),O.sort();for(let L=0;L<S.length&&L<O.length;++L){const B=pc(S[L],O[L]);if(B!==0)return B;const W=Ii(v[S[L]],x[O[L]]);if(W!==0)return W}return je(S.length,O.length)})(a.mapValue,n.mapValue);default:throw Ae(23264,{he:r})}}function kf(a,n){if(typeof a=="string"&&typeof n=="string"&&a.length===n.length)return je(a,n);const r=qr(a),l=qr(n),u=je(r.seconds,l.seconds);return u!==0?u:je(r.nanos,l.nanos)}function Vf(a,n){const r=a.values||[],l=n.values||[];for(let u=0;u<r.length&&u<l.length;++u){const f=Ii(r[u],l[u]);if(f)return f}return je(r.length,l.length)}function Ti(a){return gc(a)}function gc(a){return"nullValue"in a?"null":"booleanValue"in a?""+a.booleanValue:"integerValue"in a?""+a.integerValue:"doubleValue"in a?""+a.doubleValue:"timestampValue"in a?(function(r){const l=qr(r);return`time(${l.seconds},${l.nanos})`})(a.timestampValue):"stringValue"in a?a.stringValue:"bytesValue"in a?(function(r){return wi(r).toBase64()})(a.bytesValue):"referenceValue"in a?(function(r){return ye.fromName(r).toString()})(a.referenceValue):"geoPointValue"in a?(function(r){return`geo(${r.latitude},${r.longitude})`})(a.geoPointValue):"arrayValue"in a?(function(r){let l="[",u=!0;for(const f of r.values||[])u?u=!1:l+=",",l+=gc(f);return l+"]"})(a.arrayValue):"mapValue"in a?(function(r){const l=Object.keys(r.fields||{}).sort();let u="{",f=!0;for(const m of l)f?f=!1:u+=",",u+=`${m}:${gc(r.fields[m])}`;return u+"}"})(a.mapValue):Ae(61005,{value:a})}function yc(a){return!!a&&"integerValue"in a}function bc(a){return!!a&&"arrayValue"in a}function ic(a){return!!a&&"mapValue"in a}function Hp(a){var r,l;return((l=(((r=a==null?void 0:a.mapValue)==null?void 0:r.fields)||{})[Gp])==null?void 0:l.stringValue)===Qp}function Co(a){if(a.geoPointValue)return{geoPointValue:{...a.geoPointValue}};if(a.timestampValue&&typeof a.timestampValue=="object")return{timestampValue:{...a.timestampValue}};if(a.mapValue){const n={mapValue:{fields:{}}};return Vc(a.mapValue.fields,((r,l)=>n.mapValue.fields[r]=Co(l))),n}if(a.arrayValue){const n={arrayValue:{values:[]}};for(let r=0;r<(a.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=Co(a.arrayValue.values[r]);return n}return{...a}}function Wp(a){return(((a.mapValue||{}).fields||{}).__type__||{}).stringValue===Kp}const dw={mapValue:{fields:{[Gp]:{stringValue:Qp},[gl]:{arrayValue:{}}}}};/**
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
 */class ar{constructor(n){this.value=n}static empty(){return new ar({mapValue:{}})}field(n){if(n.isEmpty())return this.value;{let r=this.value;for(let l=0;l<n.length-1;++l)if(r=(r.mapValue.fields||{})[n.get(l)],!ic(r))return null;return r=(r.mapValue.fields||{})[n.lastSegment()],r||null}}set(n,r){this.getFieldsMap(n.popLast())[n.lastSegment()]=Co(r)}setAll(n){let r=bt.emptyPath(),l={},u=[];n.forEach(((m,v)=>{if(!r.isImmediateParentOf(v)){const S=this.getFieldsMap(r);this.applyChanges(S,l,u),l={},u=[],r=v.popLast()}m?l[v.lastSegment()]=Co(m):u.push(v.lastSegment())}));const f=this.getFieldsMap(r);this.applyChanges(f,l,u)}delete(n){const r=this.field(n.popLast());ic(r)&&r.mapValue.fields&&delete r.mapValue.fields[n.lastSegment()]}isEqual(n){return Un(this.value,n.value)}getFieldsMap(n){let r=this.value;r.mapValue.fields||(r.mapValue={fields:{}});for(let l=0;l<n.length;++l){let u=r.mapValue.fields[n.get(l)];ic(u)&&u.mapValue.fields||(u={mapValue:{fields:{}}},r.mapValue.fields[n.get(l)]=u),r=u}return r.mapValue.fields}applyChanges(n,r,l){Vc(r,((u,f)=>n[u]=f));for(const u of l)delete n[u]}clone(){return new ar(Co(this.value))}}/**
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
 */class wn{constructor(n,r,l,u,f,m,v){this.key=n,this.documentType=r,this.version=l,this.readTime=u,this.createTime=f,this.data=m,this.documentState=v}static newInvalidDocument(n){return new wn(n,0,Je.min(),Je.min(),Je.min(),ar.empty(),0)}static newFoundDocument(n,r,l,u){return new wn(n,1,r,Je.min(),l,u,0)}static newNoDocument(n,r){return new wn(n,2,r,Je.min(),Je.min(),ar.empty(),0)}static newUnknownDocument(n,r){return new wn(n,3,r,Je.min(),Je.min(),ar.empty(),2)}convertToFoundDocument(n,r){return!this.createTime.isEqual(Je.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=n),this.version=n,this.documentType=1,this.data=r,this.documentState=0,this}convertToNoDocument(n){return this.version=n,this.documentType=2,this.data=ar.empty(),this.documentState=0,this}convertToUnknownDocument(n){return this.version=n,this.documentType=3,this.data=ar.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Je.min(),this}setReadTime(n){return this.readTime=n,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(n){return n instanceof wn&&this.key.isEqual(n.key)&&this.version.isEqual(n.version)&&this.documentType===n.documentType&&this.documentState===n.documentState&&this.data.isEqual(n.data)}mutableCopy(){return new wn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class yl{constructor(n,r){this.position=n,this.inclusive=r}}function Nf(a,n,r){let l=0;for(let u=0;u<a.position.length;u++){const f=n[u],m=a.position[u];if(f.field.isKeyField()?l=ye.comparator(ye.fromName(m.referenceValue),r.key):l=Ii(m,r.data.field(f.field)),f.dir==="desc"&&(l*=-1),l!==0)break}return l}function bf(a,n){if(a===null)return n===null;if(n===null||a.inclusive!==n.inclusive||a.position.length!==n.position.length)return!1;for(let r=0;r<a.position.length;r++)if(!Un(a.position[r],n.position[r]))return!1;return!0}/**
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
 */class _l{constructor(n,r="asc"){this.field=n,this.dir=r}}function gv(a,n){return a.dir===n.dir&&a.field.isEqual(n.field)}/**
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
 */class Jp{}class gt extends Jp{constructor(n,r,l){super(),this.field=n,this.op=r,this.value=l}static create(n,r,l){return n.isKeyField()?r==="in"||r==="not-in"?this.createKeyFieldInFilter(n,r,l):new _v(n,r,l):r==="array-contains"?new Ev(n,l):r==="in"?new Iv(n,l):r==="not-in"?new Tv(n,l):r==="array-contains-any"?new Sv(n,l):new gt(n,r,l)}static createKeyFieldInFilter(n,r,l){return r==="in"?new vv(n,l):new wv(n,l)}matches(n){const r=n.data.field(this.field);return this.op==="!="?r!==null&&r.nullValue===void 0&&this.matchesComparison(Ii(r,this.value)):r!==null&&Ei(this.value)===Ei(r)&&this.matchesComparison(Ii(r,this.value))}matchesComparison(n){switch(this.op){case"<":return n<0;case"<=":return n<=0;case"==":return n===0;case"!=":return n!==0;case">":return n>0;case">=":return n>=0;default:return Ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $r extends Jp{constructor(n,r){super(),this.filters=n,this.op=r,this.Pe=null}static create(n,r){return new $r(n,r)}matches(n){return Yp(this)?this.filters.find((r=>!r.matches(n)))===void 0:this.filters.find((r=>r.matches(n)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((n,r)=>n.concat(r.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Yp(a){return a.op==="and"}function Xp(a){return yv(a)&&Yp(a)}function yv(a){for(const n of a.filters)if(n instanceof $r)return!1;return!0}function _c(a){if(a instanceof gt)return a.field.canonicalString()+a.op.toString()+Ti(a.value);if(Xp(a))return a.filters.map((n=>_c(n))).join(",");{const n=a.filters.map((r=>_c(r))).join(",");return`${a.op}(${n})`}}function Zp(a,n){return a instanceof gt?(function(l,u){return u instanceof gt&&l.op===u.op&&l.field.isEqual(u.field)&&Un(l.value,u.value)})(a,n):a instanceof $r?(function(l,u){return u instanceof $r&&l.op===u.op&&l.filters.length===u.filters.length?l.filters.reduce(((f,m,v)=>f&&Zp(m,u.filters[v])),!0):!1})(a,n):void Ae(19439)}function em(a){return a instanceof gt?(function(r){return`${r.field.canonicalString()} ${r.op} ${Ti(r.value)}`})(a):a instanceof $r?(function(r){return r.op.toString()+" {"+r.getFilters().map(em).join(" ,")+"}"})(a):"Filter"}class _v extends gt{constructor(n,r,l){super(n,r,l),this.key=ye.fromName(l.referenceValue)}matches(n){const r=ye.comparator(n.key,this.key);return this.matchesComparison(r)}}class vv extends gt{constructor(n,r){super(n,"in",r),this.keys=tm("in",r)}matches(n){return this.keys.some((r=>r.isEqual(n.key)))}}class wv extends gt{constructor(n,r){super(n,"not-in",r),this.keys=tm("not-in",r)}matches(n){return!this.keys.some((r=>r.isEqual(n.key)))}}function tm(a,n){var r;return(((r=n.arrayValue)==null?void 0:r.values)||[]).map((l=>ye.fromName(l.referenceValue)))}class Ev extends gt{constructor(n,r){super(n,"array-contains",r)}matches(n){const r=n.data.field(this.field);return bc(r)&&Oo(r.arrayValue,this.value)}}class Iv extends gt{constructor(n,r){super(n,"in",r)}matches(n){const r=n.data.field(this.field);return r!==null&&Oo(this.value.arrayValue,r)}}class Tv extends gt{constructor(n,r){super(n,"not-in",r)}matches(n){if(Oo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const r=n.data.field(this.field);return r!==null&&r.nullValue===void 0&&!Oo(this.value.arrayValue,r)}}class Sv extends gt{constructor(n,r){super(n,"array-contains-any",r)}matches(n){const r=n.data.field(this.field);return!(!bc(r)||!r.arrayValue.values)&&r.arrayValue.values.some((l=>Oo(this.value.arrayValue,l)))}}/**
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
 */class xv{constructor(n,r=null,l=[],u=[],f=null,m=null,v=null){this.path=n,this.collectionGroup=r,this.orderBy=l,this.filters=u,this.limit=f,this.startAt=m,this.endAt=v,this.Te=null}}function Df(a,n=null,r=[],l=[],u=null,f=null,m=null){return new xv(a,n,r,l,u,f,m)}function Dc(a){const n=zt(a);if(n.Te===null){let r=n.path.canonicalString();n.collectionGroup!==null&&(r+="|cg:"+n.collectionGroup),r+="|f:",r+=n.filters.map((l=>_c(l))).join(","),r+="|ob:",r+=n.orderBy.map((l=>(function(f){return f.field.canonicalString()+f.dir})(l))).join(","),kc(n.limit)||(r+="|l:",r+=n.limit),n.startAt&&(r+="|lb:",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((l=>Ti(l))).join(",")),n.endAt&&(r+="|ub:",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((l=>Ti(l))).join(",")),n.Te=r}return n.Te}function Mc(a,n){if(a.limit!==n.limit||a.orderBy.length!==n.orderBy.length)return!1;for(let r=0;r<a.orderBy.length;r++)if(!gv(a.orderBy[r],n.orderBy[r]))return!1;if(a.filters.length!==n.filters.length)return!1;for(let r=0;r<a.filters.length;r++)if(!Zp(a.filters[r],n.filters[r]))return!1;return a.collectionGroup===n.collectionGroup&&!!a.path.isEqual(n.path)&&!!bf(a.startAt,n.startAt)&&bf(a.endAt,n.endAt)}/**
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
 */class Tl{constructor(n,r=null,l=[],u=[],f=null,m="F",v=null,S=null){this.path=n,this.collectionGroup=r,this.explicitOrderBy=l,this.filters=u,this.limit=f,this.limitType=m,this.startAt=v,this.endAt=S,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Av(a,n,r,l,u,f,m,v){return new Tl(a,n,r,l,u,f,m,v)}function Rv(a){return new Tl(a)}function Mf(a){return a.filters.length===0&&a.limit===null&&a.startAt==null&&a.endAt==null&&(a.explicitOrderBy.length===0||a.explicitOrderBy.length===1&&a.explicitOrderBy[0].field.isKeyField())}function Pv(a){return ye.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}function Cv(a){return a.collectionGroup!==null}function ko(a){const n=zt(a);if(n.Ie===null){n.Ie=[];const r=new Set;for(const f of n.explicitOrderBy)n.Ie.push(f),r.add(f.field.canonicalString());const l=n.explicitOrderBy.length>0?n.explicitOrderBy[n.explicitOrderBy.length-1].dir:"asc";(function(m){let v=new Ct(bt.comparator);return m.filters.forEach((S=>{S.getFlattenedFilters().forEach((x=>{x.isInequality()&&(v=v.add(x.field))}))})),v})(n).forEach((f=>{r.has(f.canonicalString())||f.isKeyField()||n.Ie.push(new _l(f,l))})),r.has(bt.keyField().canonicalString())||n.Ie.push(new _l(bt.keyField(),l))}return n.Ie}function ws(a){const n=zt(a);return n.Ee||(n.Ee=kv(n,ko(a))),n.Ee}function kv(a,n){if(a.limitType==="F")return Df(a.path,a.collectionGroup,n,a.filters,a.limit,a.startAt,a.endAt);{n=n.map((u=>{const f=u.dir==="desc"?"asc":"desc";return new _l(u.field,f)}));const r=a.endAt?new yl(a.endAt.position,a.endAt.inclusive):null,l=a.startAt?new yl(a.startAt.position,a.startAt.inclusive):null;return Df(a.path,a.collectionGroup,n,a.filters,a.limit,r,l)}}function vc(a,n,r){return new Tl(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),n,r,a.startAt,a.endAt)}function nm(a,n){return Mc(ws(a),ws(n))&&a.limitType===n.limitType}function rm(a){return`${Dc(ws(a))}|lt:${a.limitType}`}function xo(a){return`Query(target=${(function(r){let l=r.path.canonicalString();return r.collectionGroup!==null&&(l+=" collectionGroup="+r.collectionGroup),r.filters.length>0&&(l+=`, filters: [${r.filters.map((u=>em(u))).join(", ")}]`),kc(r.limit)||(l+=", limit: "+r.limit),r.orderBy.length>0&&(l+=`, orderBy: [${r.orderBy.map((u=>(function(m){return`${m.field.canonicalString()} (${m.dir})`})(u))).join(", ")}]`),r.startAt&&(l+=", startAt: ",l+=r.startAt.inclusive?"b:":"a:",l+=r.startAt.position.map((u=>Ti(u))).join(",")),r.endAt&&(l+=", endAt: ",l+=r.endAt.inclusive?"a:":"b:",l+=r.endAt.position.map((u=>Ti(u))).join(",")),`Target(${l})`})(ws(a))}; limitType=${a.limitType})`}function Oc(a,n){return n.isFoundDocument()&&(function(l,u){const f=u.key.path;return l.collectionGroup!==null?u.key.hasCollectionId(l.collectionGroup)&&l.path.isPrefixOf(f):ye.isDocumentKey(l.path)?l.path.isEqual(f):l.path.isImmediateParentOf(f)})(a,n)&&(function(l,u){for(const f of ko(l))if(!f.field.isKeyField()&&u.data.field(f.field)===null)return!1;return!0})(a,n)&&(function(l,u){for(const f of l.filters)if(!f.matches(u))return!1;return!0})(a,n)&&(function(l,u){return!(l.startAt&&!(function(m,v,S){const x=Nf(m,v,S);return m.inclusive?x<=0:x<0})(l.startAt,ko(l),u)||l.endAt&&!(function(m,v,S){const x=Nf(m,v,S);return m.inclusive?x>=0:x>0})(l.endAt,ko(l),u))})(a,n)}function Vv(a){return(n,r)=>{let l=!1;for(const u of ko(a)){const f=Nv(u,n,r);if(f!==0)return f;l=l||u.field.isKeyField()}return 0}}function Nv(a,n,r){const l=a.field.isKeyField()?ye.comparator(n.key,r.key):(function(f,m,v){const S=m.data.field(f),x=v.data.field(f);return S!==null&&x!==null?Ii(S,x):Ae(42886)})(a.field,n,r);switch(a.dir){case"asc":return l;case"desc":return-1*l;default:return Ae(19790,{direction:a.dir})}}/**
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
 */class Ri{constructor(n,r){this.mapKeyFn=n,this.equalsFn=r,this.inner={},this.innerSize=0}get(n){const r=this.mapKeyFn(n),l=this.inner[r];if(l!==void 0){for(const[u,f]of l)if(this.equalsFn(u,n))return f}}has(n){return this.get(n)!==void 0}set(n,r){const l=this.mapKeyFn(n),u=this.inner[l];if(u===void 0)return this.inner[l]=[[n,r]],void this.innerSize++;for(let f=0;f<u.length;f++)if(this.equalsFn(u[f][0],n))return void(u[f]=[n,r]);u.push([n,r]),this.innerSize++}delete(n){const r=this.mapKeyFn(n),l=this.inner[r];if(l===void 0)return!1;for(let u=0;u<l.length;u++)if(this.equalsFn(l[u][0],n))return l.length===1?delete this.inner[r]:l.splice(u,1),this.innerSize--,!0;return!1}forEach(n){Vc(this.inner,((r,l)=>{for(const[u,f]of l)n(u,f)}))}isEmpty(){return dv(this.inner)}size(){return this.innerSize}}/**
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
 */const bv=new Zt(ye.comparator);function wc(){return bv}const sm=new Zt(ye.comparator);function sl(...a){let n=sm;for(const r of a)n=n.insert(r.key,r);return n}function Dv(a){let n=sm;return a.forEach(((r,l)=>n=n.insert(r,l.overlayedDocument))),n}function vs(){return Vo()}function im(){return Vo()}function Vo(){return new Ri((a=>a.toString()),((a,n)=>a.isEqual(n)))}const fw=new Zt(ye.comparator),Mv=new Ct(ye.comparator);function Xt(...a){let n=Mv;for(const r of a)n=n.add(r);return n}const Ov=new Ct(je);function Lv(){return Ov}/**
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
 */function Fv(a,n){if(a.useProto3Json){if(isNaN(n))return{doubleValue:"NaN"};if(n===1/0)return{doubleValue:"Infinity"};if(n===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fl(n)?"-0":n}}function jv(a){return{integerValue:""+a}}/**
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
 */class Sl{constructor(){this._=void 0}}function Bv(a,n,r){return a instanceof vl?(function(u,f){const m={fields:{[zp]:{stringValue:Bp},[qp]:{timestampValue:{seconds:u.seconds,nanos:u.nanoseconds}}}};return f&&Nc(f)&&(f=$p(f)),f&&(m.fields[Up]=f),{mapValue:m}})(r,n):a instanceof wl?om(a,n):a instanceof El?am(a,n):(function(u,f){const m=Uv(u,f),v=Of(m)+Of(u.Ae);return yc(m)&&yc(u.Ae)?jv(v):Fv(u.serializer,v)})(a,n)}function zv(a,n,r){return a instanceof wl?om(a,n):a instanceof El?am(a,n):r}function Uv(a,n){return a instanceof Ec?(function(l){return yc(l)||(function(f){return!!f&&"doubleValue"in f})(l)})(n)?n:{integerValue:0}:null}class vl extends Sl{}class wl extends Sl{constructor(n){super(),this.elements=n}}function om(a,n){const r=lm(n);for(const l of a.elements)r.some((u=>Un(u,l)))||r.push(l);return{arrayValue:{values:r}}}class El extends Sl{constructor(n){super(),this.elements=n}}function am(a,n){let r=lm(n);for(const l of a.elements)r=r.filter((u=>!Un(u,l)));return{arrayValue:{values:r}}}class Ec extends Sl{constructor(n,r){super(),this.serializer=n,this.Ae=r}}function Of(a){return st(a.integerValue||a.doubleValue)}function lm(a){return bc(a)&&a.arrayValue.values?a.arrayValue.values.slice():[]}/**
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
 */class qv{constructor(n,r){this.field=n,this.transform=r}}function $v(a,n){return a.field.isEqual(n.field)&&(function(l,u){return l instanceof wl&&u instanceof wl||l instanceof El&&u instanceof El?vi(l.elements,u.elements,Un):l instanceof Ec&&u instanceof Ec?Un(l.Ae,u.Ae):l instanceof vl&&u instanceof vl})(a.transform,n.transform)}class Es{constructor(n,r){this.updateTime=n,this.exists=r}static none(){return new Es}static exists(n){return new Es(void 0,n)}static updateTime(n){return new Es(n)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(n){return this.exists===n.exists&&(this.updateTime?!!n.updateTime&&this.updateTime.isEqual(n.updateTime):!n.updateTime)}}function ul(a,n){return a.updateTime!==void 0?n.isFoundDocument()&&n.version.isEqual(a.updateTime):a.exists===void 0||a.exists===n.isFoundDocument()}class Lc{}function um(a,n){if(!a.hasLocalMutations||n&&n.fields.length===0)return null;if(n===null)return a.isNoDocument()?new Kv(a.key,Es.none()):new Fc(a.key,a.data,Es.none());{const r=a.data,l=ar.empty();let u=new Ct(bt.comparator);for(let f of n.fields)if(!u.has(f)){let m=r.field(f);m===null&&f.length>1&&(f=f.popLast(),m=r.field(f)),m===null?l.delete(f):l.set(f,m),u=u.add(f)}return new xl(a.key,l,new Br(u.toArray()),Es.none())}}function Gv(a,n,r){a instanceof Fc?(function(u,f,m){const v=u.value.clone(),S=Ff(u.fieldTransforms,f,m.transformResults);v.setAll(S),f.convertToFoundDocument(m.version,v).setHasCommittedMutations()})(a,n,r):a instanceof xl?(function(u,f,m){if(!ul(u.precondition,f))return void f.convertToUnknownDocument(m.version);const v=Ff(u.fieldTransforms,f,m.transformResults),S=f.data;S.setAll(cm(u)),S.setAll(v),f.convertToFoundDocument(m.version,S).setHasCommittedMutations()})(a,n,r):(function(u,f,m){f.convertToNoDocument(m.version).setHasCommittedMutations()})(0,n,r)}function No(a,n,r,l){return a instanceof Fc?(function(f,m,v,S){if(!ul(f.precondition,m))return v;const x=f.value.clone(),O=jf(f.fieldTransforms,S,m);return x.setAll(O),m.convertToFoundDocument(m.version,x).setHasLocalMutations(),null})(a,n,r,l):a instanceof xl?(function(f,m,v,S){if(!ul(f.precondition,m))return v;const x=jf(f.fieldTransforms,S,m),O=m.data;return O.setAll(cm(f)),O.setAll(x),m.convertToFoundDocument(m.version,O).setHasLocalMutations(),v===null?null:v.unionWith(f.fieldMask.fields).unionWith(f.fieldTransforms.map((L=>L.field)))})(a,n,r,l):(function(f,m,v){return ul(f.precondition,m)?(m.convertToNoDocument(m.version).setHasLocalMutations(),null):v})(a,n,r)}function Lf(a,n){return a.type===n.type&&!!a.key.isEqual(n.key)&&!!a.precondition.isEqual(n.precondition)&&!!(function(l,u){return l===void 0&&u===void 0||!(!l||!u)&&vi(l,u,((f,m)=>$v(f,m)))})(a.fieldTransforms,n.fieldTransforms)&&(a.type===0?a.value.isEqual(n.value):a.type!==1||a.data.isEqual(n.data)&&a.fieldMask.isEqual(n.fieldMask))}class Fc extends Lc{constructor(n,r,l,u=[]){super(),this.key=n,this.value=r,this.precondition=l,this.fieldTransforms=u,this.type=0}getFieldMask(){return null}}class xl extends Lc{constructor(n,r,l,u,f=[]){super(),this.key=n,this.data=r,this.fieldMask=l,this.precondition=u,this.fieldTransforms=f,this.type=1}getFieldMask(){return this.fieldMask}}function cm(a){const n=new Map;return a.fieldMask.fields.forEach((r=>{if(!r.isEmpty()){const l=a.data.field(r);n.set(r,l)}})),n}function Ff(a,n,r){const l=new Map;Bt(a.length===r.length,32656,{Ve:r.length,de:a.length});for(let u=0;u<r.length;u++){const f=a[u],m=f.transform,v=n.data.field(f.field);l.set(f.field,zv(m,v,r[u]))}return l}function jf(a,n,r){const l=new Map;for(const u of a){const f=u.transform,m=r.data.field(u.field);l.set(u.field,Bv(f,m,n))}return l}class Kv extends Lc{constructor(n,r){super(),this.key=n,this.precondition=r,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Qv{constructor(n,r,l,u){this.batchId=n,this.localWriteTime=r,this.baseMutations=l,this.mutations=u}applyToRemoteDocument(n,r){const l=r.mutationResults;for(let u=0;u<this.mutations.length;u++){const f=this.mutations[u];f.key.isEqual(n.key)&&Gv(f,n,l[u])}}applyToLocalView(n,r){for(const l of this.baseMutations)l.key.isEqual(n.key)&&(r=No(l,n,r,this.localWriteTime));for(const l of this.mutations)l.key.isEqual(n.key)&&(r=No(l,n,r,this.localWriteTime));return r}applyToLocalDocumentSet(n,r){const l=im();return this.mutations.forEach((u=>{const f=n.get(u.key),m=f.overlayedDocument;let v=this.applyToLocalView(m,f.mutatedFields);v=r.has(u.key)?null:v;const S=um(m,v);S!==null&&l.set(u.key,S),m.isValidDocument()||m.convertToNoDocument(Je.min())})),l}keys(){return this.mutations.reduce(((n,r)=>n.add(r.key)),Xt())}isEqual(n){return this.batchId===n.batchId&&vi(this.mutations,n.mutations,((r,l)=>Lf(r,l)))&&vi(this.baseMutations,n.baseMutations,((r,l)=>Lf(r,l)))}}/**
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
 */class Hv{constructor(n,r){this.largestBatchId=n,this.mutation=r}getKey(){return this.mutation.key}isEqual(n){return n!==null&&this.mutation===n.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */var rt,Ee;function Wv(a){if(a===void 0)return Il("GRPC error has no .code"),ee.UNKNOWN;switch(a){case rt.OK:return ee.OK;case rt.CANCELLED:return ee.CANCELLED;case rt.UNKNOWN:return ee.UNKNOWN;case rt.DEADLINE_EXCEEDED:return ee.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return ee.RESOURCE_EXHAUSTED;case rt.INTERNAL:return ee.INTERNAL;case rt.UNAVAILABLE:return ee.UNAVAILABLE;case rt.UNAUTHENTICATED:return ee.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return ee.INVALID_ARGUMENT;case rt.NOT_FOUND:return ee.NOT_FOUND;case rt.ALREADY_EXISTS:return ee.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return ee.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return ee.FAILED_PRECONDITION;case rt.ABORTED:return ee.ABORTED;case rt.OUT_OF_RANGE:return ee.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return ee.UNIMPLEMENTED;case rt.DATA_LOSS:return ee.DATA_LOSS;default:return Ae(39323,{code:a})}}(Ee=rt||(rt={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 *//**
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
 */const pw=new Pc([4294967295,4294967295],0);/**
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
 */class Jv{constructor(n,r){this.databaseId=n,this.useProto3Json=r}}function Bf(a){return Bt(!!a,49232),Je.fromTimestamp((function(r){const l=qr(r);return new lt(l.seconds,l.nanos)})(a))}function zf(a,n){const r=(function(u){return new mt(["projects",u.projectId,"databases",u.database])})(a).child("documents");return n===void 0?r:r.child(n)}function Yv(a){const n=mt.fromString(a);return Bt(t0(n),10190,{key:n.toString()}),n}function Xv(a){const n=Yv(a);return n.length===4?mt.emptyPath():Zv(n)}function Zv(a){return Bt(a.length>4&&a.get(4)==="documents",29091,{key:a.toString()}),a.popFirst(5)}function e0(a){let n=Xv(a.parent);const r=a.structuredQuery,l=r.from?r.from.length:0;let u=null;if(l>0){Bt(l===1,65062);const O=r.from[0];O.allDescendants?u=O.collectionId:n=n.child(O.collectionId)}let f=[];r.where&&(f=(function(L){const B=hm(L);return B instanceof $r&&Xp(B)?B.getFilters():[B]})(r.where));let m=[];r.orderBy&&(m=(function(L){return L.map((B=>(function(ie){return new _l(mi(ie.field),(function(te){switch(te){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(ie.direction))})(B)))})(r.orderBy));let v=null;r.limit&&(v=(function(L){let B;return B=typeof L=="object"?L.value:L,kc(B)?null:B})(r.limit));let S=null;r.startAt&&(S=(function(L){const B=!!L.before,W=L.values||[];return new yl(W,B)})(r.startAt));let x=null;return r.endAt&&(x=(function(L){const B=!L.before,W=L.values||[];return new yl(W,B)})(r.endAt)),Av(n,u,m,f,v,"F",S,x)}function hm(a){return a.unaryFilter!==void 0?(function(r){switch(r.unaryFilter.op){case"IS_NAN":const l=mi(r.unaryFilter.field);return gt.create(l,"==",{doubleValue:NaN});case"IS_NULL":const u=mi(r.unaryFilter.field);return gt.create(u,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const f=mi(r.unaryFilter.field);return gt.create(f,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const m=mi(r.unaryFilter.field);return gt.create(m,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ae(61313);default:return Ae(60726)}})(a):a.fieldFilter!==void 0?(function(r){return gt.create(mi(r.fieldFilter.field),(function(u){switch(u){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ae(58110);default:return Ae(50506)}})(r.fieldFilter.op),r.fieldFilter.value)})(a):a.compositeFilter!==void 0?(function(r){return $r.create(r.compositeFilter.filters.map((l=>hm(l))),(function(u){switch(u){case"AND":return"and";case"OR":return"or";default:return Ae(1026)}})(r.compositeFilter.op))})(a):Ae(30097,{filter:a})}function mi(a){return bt.fromServerFormat(a.fieldPath)}function t0(a){return a.length>=4&&a.get(0)==="projects"&&a.get(2)==="databases"}/**
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
 */class n0{constructor(n){this.yt=n}}function r0(a){const n=e0({parent:a.parent,structuredQuery:a.structuredQuery});return a.limitType==="LAST"?vc(n,n.limit,"L"):n}/**
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
 *//**
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
 *//**
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
 */class Uf{constructor(){}Dt(n,r){this.Ct(n,r),r.vt()}Ct(n,r){if("nullValue"in n)this.Ft(r,5);else if("booleanValue"in n)this.Ft(r,10),r.Mt(n.booleanValue?1:0);else if("integerValue"in n)this.Ft(r,15),r.Mt(st(n.integerValue));else if("doubleValue"in n){const l=st(n.doubleValue);isNaN(l)?this.Ft(r,13):(this.Ft(r,15),fl(l)?r.Mt(0):r.Mt(l))}else if("timestampValue"in n){let l=n.timestampValue;this.Ft(r,20),typeof l=="string"&&(l=qr(l)),r.xt(`${l.seconds||""}`),r.Mt(l.nanos||0)}else if("stringValue"in n)this.Ot(n.stringValue,r),this.Nt(r);else if("bytesValue"in n)this.Ft(r,30),r.Bt(wi(n.bytesValue)),this.Nt(r);else if("referenceValue"in n)this.Lt(n.referenceValue,r);else if("geoPointValue"in n){const l=n.geoPointValue;this.Ft(r,45),r.Mt(l.latitude||0),r.Mt(l.longitude||0)}else"mapValue"in n?Wp(n)?this.Ft(r,Number.MAX_SAFE_INTEGER):Hp(n)?this.kt(n.mapValue,r):(this.Kt(n.mapValue,r),this.Nt(r)):"arrayValue"in n?(this.qt(n.arrayValue,r),this.Nt(r)):Ae(19022,{Ut:n})}Ot(n,r){this.Ft(r,25),this.$t(n,r)}$t(n,r){r.xt(n)}Kt(n,r){const l=n.fields||{};this.Ft(r,55);for(const u of Object.keys(l))this.Ot(u,r),this.Ct(l[u],r)}kt(n,r){var m,v;const l=n.fields||{};this.Ft(r,53);const u=gl,f=((v=(m=l[u].arrayValue)==null?void 0:m.values)==null?void 0:v.length)||0;this.Ft(r,15),r.Mt(st(f)),this.Ot(u,r),this.Ct(l[u],r)}qt(n,r){const l=n.values||[];this.Ft(r,50);for(const u of l)this.Ct(u,r)}Lt(n,r){this.Ft(r,37),ye.fromName(n).path.forEach((l=>{this.Ft(r,60),this.$t(l,r)}))}Ft(n,r){n.Mt(r)}Nt(n){n.Mt(2)}}Uf.Wt=new Uf;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
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
 *//**
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
 */class s0{constructor(){this.Sn=new i0}addToCollectionParentIndex(n,r){return this.Sn.add(r),G.resolve()}getCollectionParents(n,r){return G.resolve(this.Sn.getEntries(r))}addFieldIndex(n,r){return G.resolve()}deleteFieldIndex(n,r){return G.resolve()}deleteAllFieldIndexes(n){return G.resolve()}createTargetIndexes(n,r){return G.resolve()}getDocumentsMatchingTarget(n,r){return G.resolve(null)}getIndexType(n,r){return G.resolve(0)}getFieldIndexes(n,r){return G.resolve([])}getNextCollectionGroupToUpdate(n){return G.resolve(null)}getMinOffset(n,r){return G.resolve(Ur.min())}getMinOffsetFromCollectionGroup(n,r){return G.resolve(Ur.min())}updateCollectionGroup(n,r,l){return G.resolve()}updateIndexEntries(n,r){return G.resolve()}}class i0{constructor(){this.index={}}add(n){const r=n.lastSegment(),l=n.popLast(),u=this.index[r]||new Ct(mt.comparator),f=!u.has(l);return this.index[r]=u.add(l),f}has(n){const r=n.lastSegment(),l=n.popLast(),u=this.index[r];return u&&u.has(l)}getEntries(n){return(this.index[n]||new Ct(mt.comparator)).toArray()}}/**
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
 */const mw=new Uint8Array(0);/**
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
 */const dm=41943040;class un{static withCacheSize(n){return new un(n,un.DEFAULT_COLLECTION_PERCENTILE,un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(n,r,l){this.cacheSizeCollectionThreshold=n,this.percentileToCollect=r,this.maximumSequenceNumbersToCollect=l}}/**
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
 */un.DEFAULT_COLLECTION_PERCENTILE=10,un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,un.DEFAULT=new un(dm,un.DEFAULT_COLLECTION_PERCENTILE,un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),un.DISABLED=new un(-1,0,0);/**
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
 */class Si{constructor(n){this.sr=n}next(){return this.sr+=2,this.sr}static _r(){return new Si(0)}static ar(){return new Si(-1)}}/**
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
 */const o0=1048576;/**
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
 */class a0{constructor(){this.changes=new Ri((n=>n.toString()),((n,r)=>n.isEqual(r))),this.changesApplied=!1}addEntry(n){this.assertNotApplied(),this.changes.set(n.key,n)}removeEntry(n,r){this.assertNotApplied(),this.changes.set(n,wn.newInvalidDocument(n).setReadTime(r))}getEntry(n,r){this.assertNotApplied();const l=this.changes.get(r);return l!==void 0?G.resolve(l):this.getFromCache(n,r)}getEntries(n,r){return this.getAllFromCache(n,r)}apply(n){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(n)}assertNotApplied(){}}/**
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
 */class l0{constructor(n,r){this.overlayedDocument=n,this.mutatedFields=r}}/**
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
 */class u0{constructor(n,r,l,u){this.remoteDocumentCache=n,this.mutationQueue=r,this.documentOverlayCache=l,this.indexManager=u}getDocument(n,r){let l=null;return this.documentOverlayCache.getOverlay(n,r).next((u=>(l=u,this.remoteDocumentCache.getEntry(n,r)))).next((u=>(l!==null&&No(l.mutation,u,Br.empty(),lt.now()),u)))}getDocuments(n,r){return this.remoteDocumentCache.getEntries(n,r).next((l=>this.getLocalViewOfDocuments(n,l,Xt()).next((()=>l))))}getLocalViewOfDocuments(n,r,l=Xt()){const u=vs();return this.populateOverlays(n,u,r).next((()=>this.computeViews(n,r,u,l).next((f=>{let m=sl();return f.forEach(((v,S)=>{m=m.insert(v,S.overlayedDocument)})),m}))))}getOverlayedDocuments(n,r){const l=vs();return this.populateOverlays(n,l,r).next((()=>this.computeViews(n,r,l,Xt())))}populateOverlays(n,r,l){const u=[];return l.forEach((f=>{r.has(f)||u.push(f)})),this.documentOverlayCache.getOverlays(n,u).next((f=>{f.forEach(((m,v)=>{r.set(m,v)}))}))}computeViews(n,r,l,u){let f=wc();const m=Vo(),v=(function(){return Vo()})();return r.forEach(((S,x)=>{const O=l.get(x.key);u.has(x.key)&&(O===void 0||O.mutation instanceof xl)?f=f.insert(x.key,x):O!==void 0?(m.set(x.key,O.mutation.getFieldMask()),No(O.mutation,x,O.mutation.getFieldMask(),lt.now())):m.set(x.key,Br.empty())})),this.recalculateAndSaveOverlays(n,f).next((S=>(S.forEach(((x,O)=>m.set(x,O))),r.forEach(((x,O)=>v.set(x,new l0(O,m.get(x)??null)))),v)))}recalculateAndSaveOverlays(n,r){const l=Vo();let u=new Zt(((m,v)=>m-v)),f=Xt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(n,r).next((m=>{for(const v of m)v.keys().forEach((S=>{const x=r.get(S);if(x===null)return;let O=l.get(S)||Br.empty();O=v.applyToLocalView(x,O),l.set(S,O);const L=(u.get(v.batchId)||Xt()).add(S);u=u.insert(v.batchId,L)}))})).next((()=>{const m=[],v=u.getReverseIterator();for(;v.hasNext();){const S=v.getNext(),x=S.key,O=S.value,L=im();O.forEach((B=>{if(!f.has(B)){const W=um(r.get(B),l.get(B));W!==null&&L.set(B,W),f=f.add(B)}})),m.push(this.documentOverlayCache.saveOverlays(n,x,L))}return G.waitFor(m)})).next((()=>l))}recalculateAndSaveOverlaysForDocumentKeys(n,r){return this.remoteDocumentCache.getEntries(n,r).next((l=>this.recalculateAndSaveOverlays(n,l)))}getDocumentsMatchingQuery(n,r,l,u){return Pv(r)?this.getDocumentsMatchingDocumentQuery(n,r.path):Cv(r)?this.getDocumentsMatchingCollectionGroupQuery(n,r,l,u):this.getDocumentsMatchingCollectionQuery(n,r,l,u)}getNextDocuments(n,r,l,u){return this.remoteDocumentCache.getAllFromCollectionGroup(n,r,l,u).next((f=>{const m=u-f.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(n,r,l.largestBatchId,u-f.size):G.resolve(vs());let v=Mo,S=f;return m.next((x=>G.forEach(x,((O,L)=>(v<L.largestBatchId&&(v=L.largestBatchId),f.get(O)?G.resolve():this.remoteDocumentCache.getEntry(n,O).next((B=>{S=S.insert(O,B)}))))).next((()=>this.populateOverlays(n,x,f))).next((()=>this.computeViews(n,S,x,Xt()))).next((O=>({batchId:v,changes:Dv(O)})))))}))}getDocumentsMatchingDocumentQuery(n,r){return this.getDocument(n,new ye(r)).next((l=>{let u=sl();return l.isFoundDocument()&&(u=u.insert(l.key,l)),u}))}getDocumentsMatchingCollectionGroupQuery(n,r,l,u){const f=r.collectionGroup;let m=sl();return this.indexManager.getCollectionParents(n,f).next((v=>G.forEach(v,(S=>{const x=(function(L,B){return new Tl(B,null,L.explicitOrderBy.slice(),L.filters.slice(),L.limit,L.limitType,L.startAt,L.endAt)})(r,S.child(f));return this.getDocumentsMatchingCollectionQuery(n,x,l,u).next((O=>{O.forEach(((L,B)=>{m=m.insert(L,B)}))}))})).next((()=>m))))}getDocumentsMatchingCollectionQuery(n,r,l,u){let f;return this.documentOverlayCache.getOverlaysForCollection(n,r.path,l.largestBatchId).next((m=>(f=m,this.remoteDocumentCache.getDocumentsMatchingQuery(n,r,l,f,u)))).next((m=>{f.forEach(((S,x)=>{const O=x.getKey();m.get(O)===null&&(m=m.insert(O,wn.newInvalidDocument(O)))}));let v=sl();return m.forEach(((S,x)=>{const O=f.get(S);O!==void 0&&No(O.mutation,x,Br.empty(),lt.now()),Oc(r,x)&&(v=v.insert(S,x))})),v}))}}/**
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
 */class c0{constructor(n){this.serializer=n,this.Nr=new Map,this.Br=new Map}getBundleMetadata(n,r){return G.resolve(this.Nr.get(r))}saveBundleMetadata(n,r){return this.Nr.set(r.id,(function(u){return{id:u.id,version:u.version,createTime:Bf(u.createTime)}})(r)),G.resolve()}getNamedQuery(n,r){return G.resolve(this.Br.get(r))}saveNamedQuery(n,r){return this.Br.set(r.name,(function(u){return{name:u.name,query:r0(u.bundledQuery),readTime:Bf(u.readTime)}})(r)),G.resolve()}}/**
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
 */class h0{constructor(){this.overlays=new Zt(ye.comparator),this.Lr=new Map}getOverlay(n,r){return G.resolve(this.overlays.get(r))}getOverlays(n,r){const l=vs();return G.forEach(r,(u=>this.getOverlay(n,u).next((f=>{f!==null&&l.set(u,f)})))).next((()=>l))}saveOverlays(n,r,l){return l.forEach(((u,f)=>{this.bt(n,r,f)})),G.resolve()}removeOverlaysForBatchId(n,r,l){const u=this.Lr.get(l);return u!==void 0&&(u.forEach((f=>this.overlays=this.overlays.remove(f))),this.Lr.delete(l)),G.resolve()}getOverlaysForCollection(n,r,l){const u=vs(),f=r.length+1,m=new ye(r.child("")),v=this.overlays.getIteratorFrom(m);for(;v.hasNext();){const S=v.getNext().value,x=S.getKey();if(!r.isPrefixOf(x.path))break;x.path.length===f&&S.largestBatchId>l&&u.set(S.getKey(),S)}return G.resolve(u)}getOverlaysForCollectionGroup(n,r,l,u){let f=new Zt(((x,O)=>x-O));const m=this.overlays.getIterator();for(;m.hasNext();){const x=m.getNext().value;if(x.getKey().getCollectionGroup()===r&&x.largestBatchId>l){let O=f.get(x.largestBatchId);O===null&&(O=vs(),f=f.insert(x.largestBatchId,O)),O.set(x.getKey(),x)}}const v=vs(),S=f.getIterator();for(;S.hasNext()&&(S.getNext().value.forEach(((x,O)=>v.set(x,O))),!(v.size()>=u)););return G.resolve(v)}bt(n,r,l){const u=this.overlays.get(l.key);if(u!==null){const m=this.Lr.get(u.largestBatchId).delete(l.key);this.Lr.set(u.largestBatchId,m)}this.overlays=this.overlays.insert(l.key,new Hv(r,l));let f=this.Lr.get(r);f===void 0&&(f=Xt(),this.Lr.set(r,f)),this.Lr.set(r,f.add(l.key))}}/**
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
 */class d0{constructor(){this.sessionToken=zn.EMPTY_BYTE_STRING}getSessionToken(n){return G.resolve(this.sessionToken)}setSessionToken(n,r){return this.sessionToken=r,G.resolve()}}/**
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
 */class jc{constructor(){this.kr=new Ct(pt.Kr),this.qr=new Ct(pt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(n,r){const l=new pt(n,r);this.kr=this.kr.add(l),this.qr=this.qr.add(l)}$r(n,r){n.forEach((l=>this.addReference(l,r)))}removeReference(n,r){this.Wr(new pt(n,r))}Qr(n,r){n.forEach((l=>this.removeReference(l,r)))}Gr(n){const r=new ye(new mt([])),l=new pt(r,n),u=new pt(r,n+1),f=[];return this.qr.forEachInRange([l,u],(m=>{this.Wr(m),f.push(m.key)})),f}zr(){this.kr.forEach((n=>this.Wr(n)))}Wr(n){this.kr=this.kr.delete(n),this.qr=this.qr.delete(n)}jr(n){const r=new ye(new mt([])),l=new pt(r,n),u=new pt(r,n+1);let f=Xt();return this.qr.forEachInRange([l,u],(m=>{f=f.add(m.key)})),f}containsKey(n){const r=new pt(n,0),l=this.kr.firstAfterOrEqual(r);return l!==null&&n.isEqual(l.key)}}class pt{constructor(n,r){this.key=n,this.Hr=r}static Kr(n,r){return ye.comparator(n.key,r.key)||je(n.Hr,r.Hr)}static Ur(n,r){return je(n.Hr,r.Hr)||ye.comparator(n.key,r.key)}}/**
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
 */class f0{constructor(n,r){this.indexManager=n,this.referenceDelegate=r,this.mutationQueue=[],this.Yn=1,this.Jr=new Ct(pt.Kr)}checkEmpty(n){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(n,r,l,u){const f=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const m=new Qv(f,r,l,u);this.mutationQueue.push(m);for(const v of u)this.Jr=this.Jr.add(new pt(v.key,f)),this.indexManager.addToCollectionParentIndex(n,v.key.path.popLast());return G.resolve(m)}lookupMutationBatch(n,r){return G.resolve(this.Zr(r))}getNextMutationBatchAfterBatchId(n,r){const l=r+1,u=this.Xr(l),f=u<0?0:u;return G.resolve(this.mutationQueue.length>f?this.mutationQueue[f]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?tv:this.Yn-1)}getAllMutationBatches(n){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(n,r){const l=new pt(r,0),u=new pt(r,Number.POSITIVE_INFINITY),f=[];return this.Jr.forEachInRange([l,u],(m=>{const v=this.Zr(m.Hr);f.push(v)})),G.resolve(f)}getAllMutationBatchesAffectingDocumentKeys(n,r){let l=new Ct(je);return r.forEach((u=>{const f=new pt(u,0),m=new pt(u,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([f,m],(v=>{l=l.add(v.Hr)}))})),G.resolve(this.Yr(l))}getAllMutationBatchesAffectingQuery(n,r){const l=r.path,u=l.length+1;let f=l;ye.isDocumentKey(f)||(f=f.child(""));const m=new pt(new ye(f),0);let v=new Ct(je);return this.Jr.forEachWhile((S=>{const x=S.key.path;return!!l.isPrefixOf(x)&&(x.length===u&&(v=v.add(S.Hr)),!0)}),m),G.resolve(this.Yr(v))}Yr(n){const r=[];return n.forEach((l=>{const u=this.Zr(l);u!==null&&r.push(u)})),r}removeMutationBatch(n,r){Bt(this.ei(r.batchId,"removed")===0,55003),this.mutationQueue.shift();let l=this.Jr;return G.forEach(r.mutations,(u=>{const f=new pt(u.key,r.batchId);return l=l.delete(f),this.referenceDelegate.markPotentiallyOrphaned(n,u.key)})).next((()=>{this.Jr=l}))}nr(n){}containsKey(n,r){const l=new pt(r,0),u=this.Jr.firstAfterOrEqual(l);return G.resolve(r.isEqual(u&&u.key))}performConsistencyCheck(n){return this.mutationQueue.length,G.resolve()}ei(n,r){return this.Xr(n)}Xr(n){return this.mutationQueue.length===0?0:n-this.mutationQueue[0].batchId}Zr(n){const r=this.Xr(n);return r<0||r>=this.mutationQueue.length?null:this.mutationQueue[r]}}/**
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
 */class p0{constructor(n){this.ti=n,this.docs=(function(){return new Zt(ye.comparator)})(),this.size=0}setIndexManager(n){this.indexManager=n}addEntry(n,r){const l=r.key,u=this.docs.get(l),f=u?u.size:0,m=this.ti(r);return this.docs=this.docs.insert(l,{document:r.mutableCopy(),size:m}),this.size+=m-f,this.indexManager.addToCollectionParentIndex(n,l.path.popLast())}removeEntry(n){const r=this.docs.get(n);r&&(this.docs=this.docs.remove(n),this.size-=r.size)}getEntry(n,r){const l=this.docs.get(r);return G.resolve(l?l.document.mutableCopy():wn.newInvalidDocument(r))}getEntries(n,r){let l=wc();return r.forEach((u=>{const f=this.docs.get(u);l=l.insert(u,f?f.document.mutableCopy():wn.newInvalidDocument(u))})),G.resolve(l)}getDocumentsMatchingQuery(n,r,l,u){let f=wc();const m=r.path,v=new ye(m.child("__id-9223372036854775808__")),S=this.docs.getIteratorFrom(v);for(;S.hasNext();){const{key:x,value:{document:O}}=S.getNext();if(!m.isPrefixOf(x.path))break;x.path.length>m.length+1||X_(Y_(O),l)<=0||(u.has(O.key)||Oc(r,O))&&(f=f.insert(O.key,O.mutableCopy()))}return G.resolve(f)}getAllFromCollectionGroup(n,r,l,u){Ae(9500)}ni(n,r){return G.forEach(this.docs,(l=>r(l)))}newChangeBuffer(n){return new m0(this)}getSize(n){return G.resolve(this.size)}}class m0 extends a0{constructor(n){super(),this.Mr=n}applyChanges(n){const r=[];return this.changes.forEach(((l,u)=>{u.isValidDocument()?r.push(this.Mr.addEntry(n,u)):this.Mr.removeEntry(l)})),G.waitFor(r)}getFromCache(n,r){return this.Mr.getEntry(n,r)}getAllFromCache(n,r){return this.Mr.getEntries(n,r)}}/**
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
 */class g0{constructor(n){this.persistence=n,this.ri=new Ri((r=>Dc(r)),Mc),this.lastRemoteSnapshotVersion=Je.min(),this.highestTargetId=0,this.ii=0,this.si=new jc,this.targetCount=0,this.oi=Si._r()}forEachTarget(n,r){return this.ri.forEach(((l,u)=>r(u))),G.resolve()}getLastRemoteSnapshotVersion(n){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(n){return G.resolve(this.ii)}allocateTargetId(n){return this.highestTargetId=this.oi.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(n,r,l){return l&&(this.lastRemoteSnapshotVersion=l),r>this.ii&&(this.ii=r),G.resolve()}lr(n){this.ri.set(n.target,n);const r=n.targetId;r>this.highestTargetId&&(this.oi=new Si(r),this.highestTargetId=r),n.sequenceNumber>this.ii&&(this.ii=n.sequenceNumber)}addTargetData(n,r){return this.lr(r),this.targetCount+=1,G.resolve()}updateTargetData(n,r){return this.lr(r),G.resolve()}removeTargetData(n,r){return this.ri.delete(r.target),this.si.Gr(r.targetId),this.targetCount-=1,G.resolve()}removeTargets(n,r,l){let u=0;const f=[];return this.ri.forEach(((m,v)=>{v.sequenceNumber<=r&&l.get(v.targetId)===null&&(this.ri.delete(m),f.push(this.removeMatchingKeysForTargetId(n,v.targetId)),u++)})),G.waitFor(f).next((()=>u))}getTargetCount(n){return G.resolve(this.targetCount)}getTargetData(n,r){const l=this.ri.get(r)||null;return G.resolve(l)}addMatchingKeys(n,r,l){return this.si.$r(r,l),G.resolve()}removeMatchingKeys(n,r,l){this.si.Qr(r,l);const u=this.persistence.referenceDelegate,f=[];return u&&r.forEach((m=>{f.push(u.markPotentiallyOrphaned(n,m))})),G.waitFor(f)}removeMatchingKeysForTargetId(n,r){return this.si.Gr(r),G.resolve()}getMatchingKeysForTargetId(n,r){const l=this.si.jr(r);return G.resolve(l)}containsKey(n,r){return G.resolve(this.si.containsKey(r))}}/**
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
 */class y0{constructor(n,r){this._i={},this.overlays={},this.ai=new Ap(0),this.ui=!1,this.ui=!0,this.ci=new d0,this.referenceDelegate=n(this),this.li=new g0(this),this.indexManager=new s0,this.remoteDocumentCache=(function(u){return new p0(u)})((l=>this.referenceDelegate.hi(l))),this.serializer=new n0(r),this.Pi=new c0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(n){return this.indexManager}getDocumentOverlayCache(n){let r=this.overlays[n.toKey()];return r||(r=new h0,this.overlays[n.toKey()]=r),r}getMutationQueue(n,r){let l=this._i[n.toKey()];return l||(l=new f0(r,this.referenceDelegate),this._i[n.toKey()]=l),l}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(n,r,l){pe("MemoryPersistence","Starting transaction:",n);const u=new _0(this.ai.next());return this.referenceDelegate.Ti(),l(u).next((f=>this.referenceDelegate.Ii(u).next((()=>f)))).toPromise().then((f=>(u.raiseOnCommittedEvent(),f)))}Ei(n,r){return G.or(Object.values(this._i).map((l=>()=>l.containsKey(n,r))))}}class _0 extends Z_{constructor(n){super(),this.currentSequenceNumber=n}}class Bc{constructor(n){this.persistence=n,this.Ri=new jc,this.Ai=null}static Vi(n){return new Bc(n)}get di(){if(this.Ai)return this.Ai;throw Ae(60996)}addReference(n,r,l){return this.Ri.addReference(l,r),this.di.delete(l.toString()),G.resolve()}removeReference(n,r,l){return this.Ri.removeReference(l,r),this.di.add(l.toString()),G.resolve()}markPotentiallyOrphaned(n,r){return this.di.add(r.toString()),G.resolve()}removeTarget(n,r){this.Ri.Gr(r.targetId).forEach((u=>this.di.add(u.toString())));const l=this.persistence.getTargetCache();return l.getMatchingKeysForTargetId(n,r.targetId).next((u=>{u.forEach((f=>this.di.add(f.toString())))})).next((()=>l.removeTargetData(n,r)))}Ti(){this.Ai=new Set}Ii(n){const r=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.di,(l=>{const u=ye.fromPath(l);return this.mi(n,u).next((f=>{f||r.removeEntry(u,Je.min())}))})).next((()=>(this.Ai=null,r.apply(n))))}updateLimboDocument(n,r){return this.mi(n,r).next((l=>{l?this.di.delete(r.toString()):this.di.add(r.toString())}))}hi(n){return 0}mi(n,r){return G.or([()=>G.resolve(this.Ri.containsKey(r)),()=>this.persistence.getTargetCache().containsKey(n,r),()=>this.persistence.Ei(n,r)])}}/**
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
 */class zc{constructor(n,r,l,u){this.targetId=n,this.fromCache=r,this.Ts=l,this.Is=u}static Es(n,r){let l=Xt(),u=Xt();for(const f of r.docChanges)switch(f.type){case 0:l=l.add(f.doc.key);break;case 1:u=u.add(f.doc.key)}return new zc(n,r.fromCache,l,u)}}/**
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
 */class v0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(n){this._documentReadCount+=n}}/**
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
 */class w0{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return vy()?8:ev(yy())>0?6:4})()}initialize(n,r){this.fs=n,this.indexManager=r,this.Rs=!0}getDocumentsMatchingQuery(n,r,l,u){const f={result:null};return this.gs(n,r).next((m=>{f.result=m})).next((()=>{if(!f.result)return this.ps(n,r,u,l).next((m=>{f.result=m}))})).next((()=>{if(f.result)return;const m=new v0;return this.ys(n,r,m).next((v=>{if(f.result=v,this.As)return this.ws(n,r,m,v.size)}))})).next((()=>f.result))}ws(n,r,l,u){return l.documentReadCount<this.Vs?(So()<=Se.DEBUG&&pe("QueryEngine","SDK will not create cache indexes for query:",xo(r),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),G.resolve()):(So()<=Se.DEBUG&&pe("QueryEngine","Query:",xo(r),"scans",l.documentReadCount,"local documents and returns",u,"documents as results."),l.documentReadCount>this.ds*u?(So()<=Se.DEBUG&&pe("QueryEngine","The SDK decides to create cache indexes for query:",xo(r),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(n,ws(r))):G.resolve())}gs(n,r){if(Mf(r))return G.resolve(null);let l=ws(r);return this.indexManager.getIndexType(n,l).next((u=>u===0?null:(r.limit!==null&&u===1&&(r=vc(r,null,"F"),l=ws(r)),this.indexManager.getDocumentsMatchingTarget(n,l).next((f=>{const m=Xt(...f);return this.fs.getDocuments(n,m).next((v=>this.indexManager.getMinOffset(n,l).next((S=>{const x=this.bs(r,v);return this.Ss(r,x,m,S.readTime)?this.gs(n,vc(r,null,"F")):this.Ds(n,x,r,S)}))))})))))}ps(n,r,l,u){return Mf(r)||u.isEqual(Je.min())?G.resolve(null):this.fs.getDocuments(n,l).next((f=>{const m=this.bs(r,f);return this.Ss(r,m,l,u)?G.resolve(null):(So()<=Se.DEBUG&&pe("QueryEngine","Re-using previous result from %s to execute query: %s",u.toString(),xo(r)),this.Ds(n,m,r,J_(u,Mo)).next((v=>v)))}))}bs(n,r){let l=new Ct(Vv(n));return r.forEach(((u,f)=>{Oc(n,f)&&(l=l.add(f))})),l}Ss(n,r,l,u){if(n.limit===null)return!1;if(l.size!==r.size)return!0;const f=n.limitType==="F"?r.last():r.first();return!!f&&(f.hasPendingWrites||f.version.compareTo(u)>0)}ys(n,r,l){return So()<=Se.DEBUG&&pe("QueryEngine","Using full collection scan to execute query:",xo(r)),this.fs.getDocumentsMatchingQuery(n,r,Ur.min(),l)}Ds(n,r,l,u){return this.fs.getDocumentsMatchingQuery(n,l,u).next((f=>(r.forEach((m=>{f=f.insert(m.key,m)})),f)))}}/**
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
 */const E0="LocalStore";class I0{constructor(n,r,l,u){this.persistence=n,this.Cs=r,this.serializer=u,this.vs=new Zt(je),this.Fs=new Ri((f=>Dc(f)),Mc),this.Ms=new Map,this.xs=n.getRemoteDocumentCache(),this.li=n.getTargetCache(),this.Pi=n.getBundleCache(),this.Os(l)}Os(n){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(n),this.indexManager=this.persistence.getIndexManager(n),this.mutationQueue=this.persistence.getMutationQueue(n,this.indexManager),this.localDocuments=new u0(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(n){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(r=>n.collect(r,this.vs)))}}function T0(a,n,r,l){return new I0(a,n,r,l)}async function S0(a,n){const r=zt(a);return await r.persistence.runTransaction("Handle user change","readonly",(l=>{let u;return r.mutationQueue.getAllMutationBatches(l).next((f=>(u=f,r.Os(n),r.mutationQueue.getAllMutationBatches(l)))).next((f=>{const m=[],v=[];let S=Xt();for(const x of u){m.push(x.batchId);for(const O of x.mutations)S=S.add(O.key)}for(const x of f){v.push(x.batchId);for(const O of x.mutations)S=S.add(O.key)}return r.localDocuments.getDocuments(l,S).next((x=>({Ns:x,removedBatchIds:m,addedBatchIds:v})))}))}))}/**
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
 *//**
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
 */class qf{constructor(){this.activeTargetIds=Lv()}Qs(n){this.activeTargetIds=this.activeTargetIds.add(n)}Gs(n){this.activeTargetIds=this.activeTargetIds.delete(n)}Ws(){const n={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(n)}}class x0{constructor(){this.vo=new qf,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(n){}updateMutationState(n,r,l){}addLocalQueryTarget(n,r=!0){return r&&this.vo.Qs(n),this.Fo[n]||"not-current"}updateQueryState(n,r,l){this.Fo[n]=r}removeLocalQueryTarget(n){this.vo.Gs(n)}isLocalQueryTarget(n){return this.vo.activeTargetIds.has(n)}clearQueryState(n){delete this.Fo[n]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(n){return this.vo.activeTargetIds.has(n)}start(){return this.vo=new qf,Promise.resolve()}handleUserChange(n,r,l){}setOnlineState(n){}shutdown(){}writeSequenceNumber(n){}notifyBundleLoaded(n){}}/**
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
 */class A0{Mo(n){}shutdown(){}}/**
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
 */const $f="ConnectivityMonitor";class Gf{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(n){this.Lo.push(n)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){pe($f,"Network connectivity changed: AVAILABLE");for(const n of this.Lo)n(0)}Bo(){pe($f,"Network connectivity changed: UNAVAILABLE");for(const n of this.Lo)n(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let il=null;function Ic(){return il===null?il=(function(){return 268435456+Math.round(2147483648*Math.random())})():il++,"0x"+il.toString(16)}/**
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
 */const oc="RestConnection",R0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class P0{get Ko(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",l=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.qo=r+"://"+n.host,this.Uo=`projects/${l}/databases/${u}`,this.$o=this.databaseId.database===mc?`project_id=${l}`:`project_id=${l}&database_id=${u}`}Wo(n,r,l,u,f){const m=Ic(),v=this.Qo(n,r.toUriEncodedString());pe(oc,`Sending RPC '${n}' ${m}:`,v,l);const S={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(S,u,f);const{host:x}=new URL(v),O=gy(x);return this.zo(n,v,S,l,O).then((L=>(pe(oc,`Received RPC '${n}' ${m}: `,L),L)),(L=>{throw fc(oc,`RPC '${n}' ${m} failed with error: `,L,"url: ",v,"request:",l),L}))}jo(n,r,l,u,f,m){return this.Wo(n,r,l,u,f)}Go(n,r,l){n["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ai})(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach(((u,f)=>n[f]=u)),l&&l.headers.forEach(((u,f)=>n[f]=u))}Qo(n,r){const l=R0[n];let u=`${this.qo}/v1/${r}:${l}`;return this.databaseInfo.apiKey&&(u=`${u}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),u}terminate(){}}/**
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
 */class C0{constructor(n){this.Ho=n.Ho,this.Jo=n.Jo}Zo(n){this.Xo=n}Yo(n){this.e_=n}t_(n){this.n_=n}onMessage(n){this.r_=n}close(){this.Jo()}send(n){this.Ho(n)}i_(){this.Xo()}s_(){this.e_()}o_(n){this.n_(n)}__(n){this.r_(n)}}/**
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
 */const Pt="WebChannelConnection",Ao=(a,n,r)=>{a.listen(n,(l=>{try{r(l)}catch(u){setTimeout((()=>{throw u}),0)}}))};class yi extends P0{constructor(n){super(n),this.a_=[],this.forceLongPolling=n.forceLongPolling,this.autoDetectLongPolling=n.autoDetectLongPolling,this.useFetchStreams=n.useFetchStreams,this.longPollingOptions=n.longPollingOptions}static u_(){if(!yi.c_){const n=Ip();Ao(n,Ep.STAT_EVENT,(r=>{r.stat===dc.PROXY?pe(Pt,"STAT_EVENT: detected buffering proxy"):r.stat===dc.NOPROXY&&pe(Pt,"STAT_EVENT: detected no buffering proxy")})),yi.c_=!0}}zo(n,r,l,u,f){const m=Ic();return new Promise(((v,S)=>{const x=new vp;x.setWithCredentials(!0),x.listenOnce(wp.COMPLETE,(()=>{try{switch(x.getLastErrorCode()){case ll.NO_ERROR:const L=x.getResponseJson();pe(Pt,`XHR for RPC '${n}' ${m} received:`,JSON.stringify(L)),v(L);break;case ll.TIMEOUT:pe(Pt,`RPC '${n}' ${m} timed out`),S(new fe(ee.DEADLINE_EXCEEDED,"Request time out"));break;case ll.HTTP_ERROR:const B=x.getStatus();if(pe(Pt,`RPC '${n}' ${m} failed with status:`,B,"response text:",x.getResponseText()),B>0){let W=x.getResponseJson();Array.isArray(W)&&(W=W[0]);const ie=W==null?void 0:W.error;if(ie&&ie.status&&ie.message){const se=(function(Me){const Ne=Me.toLowerCase().replace(/_/g,"-");return Object.values(ee).indexOf(Ne)>=0?Ne:ee.UNKNOWN})(ie.status);S(new fe(se,ie.message))}else S(new fe(ee.UNKNOWN,"Server responded with status "+x.getStatus()))}else S(new fe(ee.UNAVAILABLE,"Connection failed."));break;default:Ae(9055,{l_:n,streamId:m,h_:x.getLastErrorCode(),P_:x.getLastError()})}}finally{pe(Pt,`RPC '${n}' ${m} completed.`)}}));const O=JSON.stringify(u);pe(Pt,`RPC '${n}' ${m} sending request:`,u),x.send(r,"POST",O,l,15)}))}T_(n,r,l){const u=Ic(),f=[this.qo,"/","google.firestore.v1.Firestore","/",n,"/channel"],m=this.createWebChannelTransport(),v={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},S=this.longPollingOptions.timeoutSeconds;S!==void 0&&(v.longPollingTimeout=Math.round(1e3*S)),this.useFetchStreams&&(v.useFetchStreams=!0),this.Go(v.initMessageHeaders,r,l),v.encodeInitMessageHeaders=!0;const x=f.join("");pe(Pt,`Creating RPC '${n}' stream ${u}: ${x}`,v);const O=m.createWebChannel(x,v);this.I_(O);let L=!1,B=!1;const W=new C0({Ho:ie=>{B?pe(Pt,`Not sending because RPC '${n}' stream ${u} is closed:`,ie):(L||(pe(Pt,`Opening RPC '${n}' stream ${u} transport.`),O.open(),L=!0),pe(Pt,`RPC '${n}' stream ${u} sending:`,ie),O.send(ie))},Jo:()=>O.close()});return Ao(O,Ro.EventType.OPEN,(()=>{B||(pe(Pt,`RPC '${n}' stream ${u} transport opened.`),W.i_())})),Ao(O,Ro.EventType.CLOSE,(()=>{B||(B=!0,pe(Pt,`RPC '${n}' stream ${u} transport closed`),W.o_(),this.E_(O))})),Ao(O,Ro.EventType.ERROR,(ie=>{B||(B=!0,fc(Pt,`RPC '${n}' stream ${u} transport errored. Name:`,ie.name,"Message:",ie.message),W.o_(new fe(ee.UNAVAILABLE,"The operation could not be completed")))})),Ao(O,Ro.EventType.MESSAGE,(ie=>{var se;if(!B){const te=ie.data[0];Bt(!!te,16349);const Me=te,Ne=(Me==null?void 0:Me.error)||((se=Me[0])==null?void 0:se.error);if(Ne){pe(Pt,`RPC '${n}' stream ${u} received error:`,Ne);const be=Ne.status;let Ce=(function(C){const _=rt[C];if(_!==void 0)return Wv(_)})(be),Oe=Ne.message;be==="NOT_FOUND"&&Oe.includes("database")&&Oe.includes("does not exist")&&Oe.includes(this.databaseId.database)&&fc(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Ce===void 0&&(Ce=ee.INTERNAL,Oe="Unknown error status: "+be+" with message "+Ne.message),B=!0,W.o_(new fe(Ce,Oe)),O.close()}else pe(Pt,`RPC '${n}' stream ${u} received:`,te),W.__(te)}})),yi.u_(),setTimeout((()=>{W.s_()}),0),W}terminate(){this.a_.forEach((n=>n.close())),this.a_=[]}I_(n){this.a_.push(n)}E_(n){this.a_=this.a_.filter((r=>r===n))}Go(n,r,l){super.Go(n,r,l),this.databaseInfo.apiKey&&(n["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Tp()}}/**
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
 */function k0(a){return new yi(a)}/**
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
 */function ac(){return typeof document<"u"?document:null}/**
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
 */function fm(a){return new Jv(a,!0)}/**
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
 */yi.c_=!1;class V0{constructor(n,r,l=1e3,u=1.5,f=6e4){this.Ci=n,this.timerId=r,this.R_=l,this.A_=u,this.V_=f,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(n){this.cancel();const r=Math.floor(this.d_+this.y_()),l=Math.max(0,Date.now()-this.f_),u=Math.max(0,r-l);u>0&&pe("ExponentialBackoff",`Backing off for ${u} ms (base delay: ${this.d_} ms, delay with jitter: ${r} ms, last attempt: ${l} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,u,(()=>(this.f_=Date.now(),n()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */class N0{}class b0 extends N0{constructor(n,r,l,u){super(),this.authCredentials=n,this.appCheckCredentials=r,this.connection=l,this.serializer=u,this.ia=!1}sa(){if(this.ia)throw new fe(ee.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(n,r,l,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,m])=>this.connection.Wo(n,zf(r,l),u,f,m))).catch((f=>{throw f.name==="FirebaseError"?(f.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new fe(ee.UNKNOWN,f.toString())}))}jo(n,r,l,u,f){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([m,v])=>this.connection.jo(n,zf(r,l),u,m,v,f))).catch((m=>{throw m.name==="FirebaseError"?(m.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),m):new fe(ee.UNKNOWN,m.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function D0(a,n,r,l){return new b0(a,n,r,l)}class M0{constructor(n,r){this.asyncQueue=n,this.onlineStateHandler=r,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(n){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${n.toString()}`),this.ca("Offline")))}set(n){this.Pa(),this.oa=0,n==="Online"&&(this.aa=!1),this.ca(n)}ca(n){n!==this.state&&(this.state=n,this.onlineStateHandler(n))}la(n){const r=`Could not reach Cloud Firestore backend. ${n}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Il(r),this.aa=!1):pe("OnlineStateTracker",r)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const pm="RemoteStore";class O0{constructor(n,r,l,u,f){this.localStore=n,this.datastore=r,this.asyncQueue=l,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=f,this.Aa.Mo((m=>{l.enqueueAndForget((async()=>{gm(this)&&(pe(pm,"Restarting streams for network reachability change."),await(async function(S){const x=zt(S);x.Ea.add(4),await Uc(x),x.Va.set("Unknown"),x.Ea.delete(4),await mm(x)})(this))}))})),this.Va=new M0(l,u)}}async function mm(a){if(gm(a))for(const n of a.Ra)await n(!0)}async function Uc(a){for(const n of a.Ra)await n(!1)}function gm(a){return zt(a).Ea.size===0}async function L0(a,n){const r=zt(a);n?(r.Ea.delete(2),await mm(r)):n||(r.Ea.add(2),await Uc(r),r.Va.set("Unknown"))}/**
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
 */class qc{constructor(n,r,l,u,f){this.asyncQueue=n,this.timerId=r,this.targetTimeMs=l,this.op=u,this.removalCallback=f,this.deferred=new Po,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((m=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(n,r,l,u,f){const m=Date.now()+l,v=new qc(n,r,m,u,f);return v.start(l),v}start(n){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),n)}skipDelay(){return this.handleDelayElapsed()}cancel(n){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(ee.CANCELLED,"Operation cancelled"+(n?": "+n:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((n=>this.deferred.resolve(n)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
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
 */class F0{constructor(){this.queries=Kf(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(r,l){const u=zt(r),f=u.queries;u.queries=Kf(),f.forEach(((m,v)=>{for(const S of v.ba)S.onError(l)}))})(this,new fe(ee.ABORTED,"Firestore shutting down"))}}function Kf(){return new Ri((a=>rm(a)),nm)}function j0(a){a.Ca.forEach((n=>{n.next()}))}var Qf,Hf;(Hf=Qf||(Qf={})).Ma="default",Hf.Cache="cache";/**
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
 */const B0="SyncEngine";class z0{constructor(n,r,l,u,f,m){this.localStore=n,this.remoteStore=r,this.eventManager=l,this.sharedClientState=u,this.currentUser=f,this.maxConcurrentLimboResolutions=m,this.Pu={},this.Tu=new Ri((v=>rm(v)),nm),this.Iu=new Map,this.Eu=new Set,this.Ru=new Zt(ye.comparator),this.Au=new Map,this.Vu=new jc,this.du={},this.mu=new Map,this.fu=Si.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}function Wf(a,n,r){const l=zt(a);if(l.isPrimaryClient&&r===0||!l.isPrimaryClient&&r===1){const u=[];l.Tu.forEach(((f,m)=>{const v=m.view.va(n);v.snapshot&&u.push(v.snapshot)})),(function(m,v){const S=zt(m);S.onlineState=v;let x=!1;S.queries.forEach(((O,L)=>{for(const B of L.ba)B.va(v)&&(x=!0)})),x&&j0(S)})(l.eventManager,n),u.length&&l.Pu.J_(u),l.onlineState=n,l.isPrimaryClient&&l.sharedClientState.setOnlineState(n)}}async function U0(a,n,r){const l=zt(a),u=[],f=[],m=[];l.Tu.isEmpty()||(l.Tu.forEach(((v,S)=>{m.push(l.pu(S,n,r).then((x=>{var O;if((x||r)&&l.isPrimaryClient){const L=x?!x.fromCache:(O=r==null?void 0:r.targetChanges.get(S.targetId))==null?void 0:O.current;l.sharedClientState.updateQueryState(S.targetId,L?"current":"not-current")}if(x){u.push(x);const L=zc.Es(S.targetId,x);f.push(L)}})))})),await Promise.all(m),l.Pu.J_(u),await(async function(S,x){const O=zt(S);try{await O.persistence.runTransaction("notifyLocalViewChanges","readwrite",(L=>G.forEach(x,(B=>G.forEach(B.Ts,(W=>O.persistence.referenceDelegate.addReference(L,B.targetId,W))).next((()=>G.forEach(B.Is,(W=>O.persistence.referenceDelegate.removeReference(L,B.targetId,W)))))))))}catch(L){if(!xp(L))throw L;pe(E0,"Failed to update sequence numbers: "+L)}for(const L of x){const B=L.targetId;if(!L.fromCache){const W=O.vs.get(B),ie=W.snapshotVersion,se=W.withLastLimboFreeSnapshotVersion(ie);O.vs=O.vs.insert(B,se)}}})(l.localStore,f))}async function q0(a,n){const r=zt(a);if(!r.currentUser.isEqual(n)){pe(B0,"User change. New user:",n.toKey());const l=await S0(r.localStore,n);r.currentUser=n,(function(f,m){f.mu.forEach((v=>{v.forEach((S=>{S.reject(new fe(ee.CANCELLED,m))}))})),f.mu.clear()})(r,"'waitForPendingWrites' promise is rejected due to a user change."),r.sharedClientState.handleUserChange(n,l.removedBatchIds,l.addedBatchIds),await U0(r,l.Ns)}}class Jf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(n){this.serializer=fm(n.databaseInfo.databaseId),this.sharedClientState=this.Du(n),this.persistence=this.Cu(n),await this.persistence.start(),this.localStore=this.vu(n),this.gcScheduler=this.Fu(n,this.localStore),this.indexBackfillerScheduler=this.Mu(n,this.localStore)}Fu(n,r){return null}Mu(n,r){return null}vu(n){return T0(this.persistence,new w0,n.initialUser,this.serializer)}Cu(n){return new y0(Bc.Vi,this.serializer)}Du(n){return new x0}async terminate(){var n,r;(n=this.gcScheduler)==null||n.stop(),(r=this.indexBackfillerScheduler)==null||r.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Jf.provider={build:()=>new Jf};class Yf{async initialize(n,r){this.localStore||(this.localStore=n.localStore,this.sharedClientState=n.sharedClientState,this.datastore=this.createDatastore(r),this.remoteStore=this.createRemoteStore(r),this.eventManager=this.createEventManager(r),this.syncEngine=this.createSyncEngine(r,!n.synchronizeTabs),this.sharedClientState.onlineStateHandler=l=>Wf(this.syncEngine,l,1),this.remoteStore.remoteSyncer.handleCredentialChange=q0.bind(null,this.syncEngine),await L0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(n){return(function(){return new F0})()}createDatastore(n){const r=fm(n.databaseInfo.databaseId),l=k0(n.databaseInfo);return D0(n.authCredentials,n.appCheckCredentials,l,r)}createRemoteStore(n){return(function(l,u,f,m,v){return new O0(l,u,f,m,v)})(this.localStore,this.datastore,n.asyncQueue,(r=>Wf(this.syncEngine,r,0)),(function(){return Gf.v()?new Gf:new A0})())}createSyncEngine(n,r){return(function(u,f,m,v,S,x,O){const L=new z0(u,f,m,v,S,x);return O&&(L.gu=!0),L})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,n.initialUser,n.maxConcurrentLimboResolutions,r)}async terminate(){var n,r;await(async function(u){const f=zt(u);pe(pm,"RemoteStore shutting down."),f.Ea.add(5),await Uc(f),f.Aa.shutdown(),f.Va.set("Unknown")})(this.remoteStore),(n=this.datastore)==null||n.terminate(),(r=this.eventManager)==null||r.terminate()}}Yf.provider={build:()=>new Yf};/**
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
 *//**
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
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 *//**
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
 *//**
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
 */function $0(a){const n={};return a.timeoutSeconds!==void 0&&(n.timeoutSeconds=a.timeoutSeconds),n}/**
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
 */const G0="ComponentProvider",Xf=new Map;/**
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
 */const K0="firestore.googleapis.com",Zf=!0;class ep{constructor(n){if(n.host===void 0){if(n.ssl!==void 0)throw new fe(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=K0,this.ssl=Zf}else this.host=n.host,this.ssl=n.ssl??Zf;if(this.isUsingEmulator=n.emulatorOptions!==void 0,this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,this.localCache=n.localCache,n.cacheSizeBytes===void 0)this.cacheSizeBytes=dm;else{if(n.cacheSizeBytes!==-1&&n.cacheSizeBytes<o0)throw new fe(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}Q_("experimentalForceLongPolling",n.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",n.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:n.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$0(n.experimentalLongPollingOptions??{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new fe(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new fe(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new fe(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!n.useFetchStreams}isEqual(n){return this.host===n.host&&this.ssl===n.ssl&&this.credentials===n.credentials&&this.cacheSizeBytes===n.cacheSizeBytes&&this.experimentalForceLongPolling===n.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===n.experimentalAutoDetectLongPolling&&(function(l,u){return l.timeoutSeconds===u.timeoutSeconds})(this.experimentalLongPollingOptions,n.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===n.ignoreUndefinedProperties&&this.useFetchStreams===n.useFetchStreams}}class Q0{constructor(n,r,l,u){this._authCredentials=n,this._appCheckCredentials=r,this._databaseId=l,this._app=u,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ep({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(n){if(this._settingsFrozen)throw new fe(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ep(n),this._emulatorOptions=n.emulatorOptions||{},n.credentials!==void 0&&(this._authCredentials=(function(l){if(!l)return new L_;switch(l.type){case"firstParty":return new B_(l.sessionIndex||"0",l.iamToken||null,l.authTokenFactory||null);case"provider":return l.client;default:throw new fe(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(n.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(r){const l=Xf.get(r);l&&(pe(G0,"Removing Datastore"),Xf.delete(r),l.terminate())})(this),Promise.resolve()}}/**
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
 */class $c{constructor(n,r,l){this.converter=r,this._query=l,this.type="query",this.firestore=n}withConverter(n){return new $c(this.firestore,n,this._query)}}class Bn{constructor(n,r,l){this.converter=r,this._key=l,this.type="document",this.firestore=n}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gc(this.firestore,this.converter,this._key.path.popLast())}withConverter(n){return new Bn(this.firestore,n,this._key)}toJSON(){return{type:Bn._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(n,r,l){if(Lo(r,Bn._jsonSchema))return new Bn(n,l||null,new ye(mt.fromString(r.referencePath)))}}Bn._jsonSchemaVersion="firestore/documentReference/1.0",Bn._jsonSchema={type:it("string",Bn._jsonSchemaVersion),referencePath:it("string")};class Gc extends $c{constructor(n,r,l){super(n,r,Rv(l)),this._path=l,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const n=this._path.popLast();return n.isEmpty()?null:new Bn(this.firestore,null,new ye(n))}withConverter(n){return new Gc(this.firestore,n,this._path)}}/**
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
 */const tp="AsyncQueue";class np{constructor(n=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new V0(this,"async_queue_retry"),this._c=()=>{const l=ac();l&&pe(tp,"Visibility state changed to "+l.visibilityState),this.M_.w_()},this.ac=n;const r=ac();r&&typeof r.addEventListener=="function"&&r.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(n){this.enqueue(n)}enqueueAndForgetEvenWhileRestricted(n){this.uc(),this.cc(n)}enterRestrictedMode(n){if(!this.ec){this.ec=!0,this.sc=n||!1;const r=ac();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this._c)}}enqueue(n){if(this.uc(),this.ec)return new Promise((()=>{}));const r=new Po;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(n().then(r.resolve,r.reject),r.promise))).then((()=>r.promise))}enqueueRetryable(n){this.enqueueAndForget((()=>(this.Yu.push(n),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(n){if(!xp(n))throw n;pe(tp,"Operation failed with retryable error: "+n)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(n){const r=this.ac.then((()=>(this.rc=!0,n().catch((l=>{throw this.nc=l,this.rc=!1,Il("INTERNAL UNHANDLED ERROR: ",rp(l)),l})).then((l=>(this.rc=!1,l))))));return this.ac=r,r}enqueueAfterDelay(n,r,l){this.uc(),this.oc.indexOf(n)>-1&&(r=0);const u=qc.createAndSchedule(this,n,r,l,(f=>this.hc(f)));return this.tc.push(u),u}uc(){this.nc&&Ae(47125,{Pc:rp(this.nc)})}verifyOperationInProgress(){}async Tc(){let n;do n=this.ac,await n;while(n!==this.ac)}Ic(n){for(const r of this.tc)if(r.timerId===n)return!0;return!1}Ec(n){return this.Tc().then((()=>{this.tc.sort(((r,l)=>r.targetTimeMs-l.targetTimeMs));for(const r of this.tc)if(r.skipDelay(),n!=="all"&&r.timerId===n)break;return this.Tc()}))}Rc(n){this.oc.push(n)}hc(n){const r=this.tc.indexOf(n);this.tc.splice(r,1)}}function rp(a){let n=a.message||"";return a.stack&&(n=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),n}/**
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
 */class H0 extends Q0{constructor(n,r,l,u){super(n,r,l,u),this.type="firestore",this._queue=new np,this._persistenceKey=(u==null?void 0:u.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const n=this._firestoreClient.terminate();this._queue=new np(n),this._firestoreClient=void 0,await n}}}/**
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
 */class lr{constructor(n){this._byteString=n}static fromBase64String(n){try{return new lr(zn.fromBase64String(n))}catch(r){throw new fe(ee.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(n){return new lr(zn.fromUint8Array(n))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(n){return this._byteString.isEqual(n._byteString)}toJSON(){return{type:lr._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(n){if(Lo(n,lr._jsonSchema))return lr.fromBase64String(n.bytes)}}lr._jsonSchemaVersion="firestore/bytes/1.0",lr._jsonSchema={type:it("string",lr._jsonSchemaVersion),bytes:it("string")};/**
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
 */class ym{constructor(...n){for(let r=0;r<n.length;++r)if(n[r].length===0)throw new fe(ee.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(n)}isEqual(n){return this._internalPath.isEqual(n._internalPath)}}/**
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
 */class W0{constructor(n){this._methodName=n}}/**
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
 */class Is{constructor(n,r){if(!isFinite(n)||n<-90||n>90)throw new fe(ee.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+n);if(!isFinite(r)||r<-180||r>180)throw new fe(ee.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=n,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(n){return this._lat===n._lat&&this._long===n._long}_compareTo(n){return je(this._lat,n._lat)||je(this._long,n._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Is._jsonSchemaVersion}}static fromJSON(n){if(Lo(n,Is._jsonSchema))return new Is(n.latitude,n.longitude)}}Is._jsonSchemaVersion="firestore/geoPoint/1.0",Is._jsonSchema={type:it("string",Is._jsonSchemaVersion),latitude:it("number"),longitude:it("number")};/**
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
 */class Ts{constructor(n){this._values=(n||[]).map((r=>r))}toArray(){return this._values.map((n=>n))}isEqual(n){return(function(l,u){if(l.length!==u.length)return!1;for(let f=0;f<l.length;++f)if(l[f]!==u[f])return!1;return!0})(this._values,n._values)}toJSON(){return{type:Ts._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(n){if(Lo(n,Ts._jsonSchema)){if(Array.isArray(n.vectorValues)&&n.vectorValues.every((r=>typeof r=="number")))return new Ts(n.vectorValues);throw new fe(ee.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ts._jsonSchemaVersion="firestore/vectorValue/1.0",Ts._jsonSchema={type:it("string",Ts._jsonSchemaVersion),vectorValues:it("object")};/**
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
 */class Kc extends W0{_toFieldTransform(n){return new qv(n.path,new vl)}isEqual(n){return n instanceof Kc}}function _m(a,n,r){if((n=xy(n))instanceof ym)return n._internalPath;if(typeof n=="string")return Y0(a,n);throw Tc("Field path arguments must be of type string or ",a,!1,void 0,r)}const J0=new RegExp("[~\\*/\\[\\]]");function Y0(a,n,r){if(n.search(J0)>=0)throw Tc(`Invalid field path (${n}). Paths must not contain '~', '*', '/', '[', or ']'`,a,!1,void 0,r);try{return new ym(...n.split("."))._internalPath}catch{throw Tc(`Invalid field path (${n}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,a,!1,void 0,r)}}function Tc(a,n,r,l,u){const f=l&&!l.isEmpty(),m=u!==void 0;let v=`Function ${n}() called with invalid data`;r&&(v+=" (via `toFirestore()`)"),v+=". ";let S="";return(f||m)&&(S+=" (found",f&&(S+=` in field ${l}`),m&&(S+=` in document ${u}`),S+=")"),new fe(ee.INVALID_ARGUMENT,v+a+S)}/**
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
 *//**
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
 */function X0(){return new Kc("serverTimestamp")}/**
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
 */const sp="@firebase/firestore",ip="4.12.0";/**
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
 *//**
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
 */class vm{constructor(n,r,l,u,f){this._firestore=n,this._userDataWriter=r,this._key=l,this._document=u,this._converter=f}get id(){return this._key.path.lastSegment()}get ref(){return new Bn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const n=new Z0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(n)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var n;return((n=this._document)==null?void 0:n.data.clone().value.mapValue.fields)??void 0}get(n){if(this._document){const r=this._document.data.field(_m("DocumentSnapshot.get",n));if(r!==null)return this._userDataWriter.convertValue(r)}}}class Z0 extends vm{data(){return super.data()}}/**
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
 *//**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ol{constructor(n,r){this.hasPendingWrites=n,this.fromCache=r}isEqual(n){return this.hasPendingWrites===n.hasPendingWrites&&this.fromCache===n.fromCache}}class _i extends vm{constructor(n,r,l,u,f,m){super(n,r,l,u,m),this._firestore=n,this._firestoreImpl=n,this.metadata=f}exists(){return super.exists()}data(n={}){if(this._document){if(this._converter){const r=new cl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(r,n)}return this._userDataWriter.convertValue(this._document.data.value,n.serverTimestamps)}}get(n,r={}){if(this._document){const l=this._document.data.field(_m("DocumentSnapshot.get",n));if(l!==null)return this._userDataWriter.convertValue(l,r.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(ee.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const n=this._document,r={};return r.type=_i._jsonSchemaVersion,r.bundle="",r.bundleSource="DocumentSnapshot",r.bundleName=this._key.toString(),!n||!n.isValidDocument()||!n.isFoundDocument()?r:(this._userDataWriter.convertObjectMap(n.data.value.mapValue.fields,"previous"),r.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),r)}}_i._jsonSchemaVersion="firestore/documentSnapshot/1.0",_i._jsonSchema={type:it("string",_i._jsonSchemaVersion),bundleSource:it("string","DocumentSnapshot"),bundleName:it("string"),bundle:it("string")};class cl extends _i{data(n={}){return super.data(n)}}class bo{constructor(n,r,l,u){this._firestore=n,this._userDataWriter=r,this._snapshot=u,this.metadata=new ol(u.hasPendingWrites,u.fromCache),this.query=l}get docs(){const n=[];return this.forEach((r=>n.push(r))),n}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(n,r){this._snapshot.docs.forEach((l=>{n.call(r,new cl(this._firestore,this._userDataWriter,l.key,l,new ol(this._snapshot.mutatedKeys.has(l.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(n={}){const r=!!n.includeMetadataChanges;if(r&&this._snapshot.excludesMetadataChanges)throw new fe(ee.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===r||(this._cachedChanges=(function(u,f){if(u._snapshot.oldDocs.isEmpty()){let m=0;return u._snapshot.docChanges.map((v=>{const S=new cl(u._firestore,u._userDataWriter,v.doc.key,v.doc,new ol(u._snapshot.mutatedKeys.has(v.doc.key),u._snapshot.fromCache),u.query.converter);return v.doc,{type:"added",doc:S,oldIndex:-1,newIndex:m++}}))}{let m=u._snapshot.oldDocs;return u._snapshot.docChanges.filter((v=>f||v.type!==3)).map((v=>{const S=new cl(u._firestore,u._userDataWriter,v.doc.key,v.doc,new ol(u._snapshot.mutatedKeys.has(v.doc.key),u._snapshot.fromCache),u.query.converter);let x=-1,O=-1;return v.type!==0&&(x=m.indexOf(v.doc.key),m=m.delete(v.doc.key)),v.type!==1&&(m=m.add(v.doc),O=m.indexOf(v.doc.key)),{type:ew(v.type),doc:S,oldIndex:x,newIndex:O}}))}})(this,r),this._cachedChangesIncludeMetadataChanges=r),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(ee.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const n={};n.type=bo._jsonSchemaVersion,n.bundleSource="QuerySnapshot",n.bundleName=q_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const r=[],l=[],u=[];return this.docs.forEach((f=>{f._document!==null&&(r.push(f._document),l.push(this._userDataWriter.convertObjectMap(f._document.data.value.mapValue.fields,"previous")),u.push(f.ref.path))})),n.bundle=(this._firestore,this.query._query,n.bundleName,"NOT SUPPORTED"),n}}function ew(a){switch(a){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae(61501,{type:a})}}/**
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
 */bo._jsonSchemaVersion="firestore/querySnapshot/1.0",bo._jsonSchema={type:it("string",bo._jsonSchemaVersion),bundleSource:it("string","QuerySnapshot"),bundleName:it("string"),bundle:it("string")};/**
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
 *//**
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
 *//**
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
 */(function(n,r=!0){M_(E_),dl(new hl("firestore",((l,{instanceIdentifier:u,options:f})=>{const m=l.getProvider("app").getImmediate(),v=new H0(new F_(l.getProvider("auth-internal")),new z_(m,l.getProvider("app-check-internal")),mv(m,u),m);return f={useFetchStreams:r,...f},v._setSettings(f),v}),"PUBLIC").setMultipleInstances(!0)),gi(sp,ip,n),gi(sp,ip,"esm2020")})();const pi="https://script.google.com/macros/s/AKfycbxOb4nA57HQsWz9dkcKzrvSRkIwvMwJa_ajVAavSiNZI9gzUucDNr6_cgtHpswYKplu/exec";let al=null;function tw({showToast:a}){const[n,r]=xs(),[l,u]=me.useState([]),[f,m]=me.useState(""),[v,S]=me.useState(""),[x,O]=me.useState(""),[L,B]=me.useState(null),[W,ie]=me.useState(!1),[se,te]=me.useState(!1),[Me,Ne]=me.useState("참석"),[be,Ce]=me.useState("1명");me.useEffect(()=>{{const _=localStorage.getItem("wedding_guestbook");let I=_?JSON.parse(_):[];const P=[{id:"mock-1",name:"김철수",content:"두 분의 결혼을 진심으로 축하드립니다! 행복하게 잘 사세요! 💐",date:"2026.03.13",password:"0313"},{id:"mock-2",name:"이영희",content:"희영아 결혼 너무 축하해! 세상에서 가장 아름다운 신부가 될 거야. 💕",date:"2026.03.13",password:"0313"}],R=I.filter(w=>w.id!=="mock-1"&&w.id!=="mock-2"),V=[...P,...R];localStorage.setItem("wedding_guestbook",JSON.stringify(V)),u(V);return}},[]),me.useEffect(()=>{const _=document.createElement("script");return _.src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.0/kakao.min.js",_.async=!0,document.head.appendChild(_),()=>{document.head.contains(_)&&document.head.removeChild(_)}},[]);const Oe=async _=>{const I=prompt("비밀번호를 입력해주세요.");if(I===null)return;const P=I==="0313",R=_.password?I===_.password:!1;if(!P&&!R){a("비밀번호가 틀렸습니다.");return}if(window.confirm("이 메시지를 정말 삭제하시겠습니까?"))try{if(!(al&&_.id&&!_.id.startsWith("mock-"))){const V=l.filter(w=>w.id!==_.id);u(V),localStorage.setItem("wedding_guestbook",JSON.stringify(V))}pi!=="YOUR_APPS_SCRIPT_URL"&&fetch(pi,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:_.name,type:"DELETE"})}).catch(V=>console.error("Sheet sync error",V)),a("메시지가 삭제되었습니다.")}catch(V){console.error(V),a("삭제 중 오류가 발생했습니다.")}},Re=async _=>{const I=prompt("비밀번호를 입력해주세요.");if(I===null)return;const P=I==="0313",R=_.password?I===_.password:!1;if(!P&&!R){a("비밀번호가 틀렸습니다.");return}const V=prompt("수정할 내용을 입력해주세요.",_.content);if(!(V===null||V===_.content))try{if(!(al&&_.id&&!_.id.startsWith("mock-"))){const w=l.map(ke=>ke.id===_.id?{...ke,content:V}:ke);u(w),localStorage.setItem("wedding_guestbook",JSON.stringify(w))}pi!=="YOUR_APPS_SCRIPT_URL"&&fetch(pi,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:_.name,content:V,type:"UPDATE"})}).catch(w=>console.error("Sheet sync error",w)),a("메시지가 수정되었습니다.")}catch(w){console.error(w),a("수정 중 오류가 발생했습니다.")}},C=async _=>{if(_.preventDefault(),!f.trim()||!x.trim()||!v.trim()){a("이름, 비밀번호, 메시지를 모두 입력해주세요.");return}ie(!0);const I=l.find(P=>P.name===f.trim());try{if(I){const P=I.password&&v.trim()===I.password||v.trim()==="0313";if(!(!I.password||P)){a("이미 작성된 이름입니다. 비밀번호를 확인해주세요."),ie(!1);return}if(!(al&&I.id&&!I.id.toString().startsWith("mock-"))){const V=l.map(w=>w.id===I.id?{...w,content:x.trim(),password:v.trim(),rsvp:{attendance:Me,count:be},date:new Date().toLocaleDateString("ko-KR").replace(/\. /g,".").replace(/\.$/,"")}:w);u(V),localStorage.setItem("wedding_guestbook",JSON.stringify(V))}a("기존 메시지 및 참석 정보가 업데이트되었습니다! ✨")}else{const P={name:f.trim(),content:x.trim(),password:v.trim(),rsvp:{attendance:Me,count:be},createdAt:X0()};if(!al){const R=new Date,V=`${R.getFullYear()}.${String(R.getMonth()+1).padStart(2,"0")}.${String(R.getDate()).padStart(2,"0")}`,w={...P,id:`local-${Date.now()}`,date:V};u([w,...l]),localStorage.setItem("wedding_guestbook",JSON.stringify([w,...l]))}a("축하의 마음과 참석의사가 전달되었습니다! 💌")}pi!=="YOUR_APPS_SCRIPT_URL"&&fetch(pi,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:`[참석] ${f.trim()}`,content:`(${Me}/${be}) ${x.trim()}`,type:"UPDATE"})}).catch(P=>console.error("Sheet sync error",P)),m(""),S(""),O(""),Ne("참석"),Ce("1명")}catch(P){console.error(P),a("처리 중 오류가 발생했습니다.")}finally{ie(!1)}};return T.jsx("section",{className:"py-24 px-6 bg-[#FDFBF7]",id:"guestbook",ref:n,children:T.jsxs("div",{className:`max-w-md mx-auto transition-all duration-1000 ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[T.jsxs("div",{className:"text-center mb-10",children:[T.jsx(ny,{className:"mx-auto text-rose-200 mb-4",size:28,strokeWidth:1.5}),T.jsx("h2",{className:"text-xl font-serif tracking-widest text-stone-800 font-bold",children:"방명록"}),T.jsx("p",{className:"text-xs text-stone-500 mt-2",children:"따뜻한 축하의 메시지를 남겨주세요."})]}),T.jsxs("form",{onSubmit:C,className:"bg-white p-5 rounded-2xl shadow-sm border border-stone-200 mb-8 space-y-4",children:[T.jsxs("div",{className:"flex space-x-2",children:[T.jsx("input",{type:"text",placeholder:"성함",value:f,onChange:_=>m(_.target.value),className:"flex-1 bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all",maxLength:10}),T.jsx("input",{type:"password",placeholder:"비밀번호",value:v,onChange:_=>S(_.target.value),className:"w-1/3 bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all",maxLength:10})]}),T.jsx("textarea",{placeholder:"축하의 한마디를 남겨주세요.",value:x,onChange:_=>O(_.target.value),className:"w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all font-medium",maxLength:100}),T.jsxs("div",{className:"space-y-4",children:[T.jsxs("div",{className:"text-left",children:[T.jsx("label",{className:"text-[11px] font-bold text-stone-400 ml-1 mb-2 block",children:"참석 여부를 알려주세요"}),T.jsx("div",{className:"flex space-x-1.5",children:["참석","미정","불참"].map(_=>T.jsx("button",{type:"button",onClick:()=>Ne(_),className:`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${Me===_?"bg-rose-400 text-white shadow-sm":"bg-stone-50 text-stone-400 border border-stone-100 hover:bg-stone-100"}`,children:_},_))})]}),T.jsxs("div",{className:"text-left",children:[T.jsx("label",{className:"text-[11px] font-bold text-stone-400 ml-1 mb-2 block",children:"동행 인원"}),T.jsx("select",{value:be,onChange:_=>Ce(_.target.value),className:"w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-200",children:["본인","2명","3명","4명 이상"].map(_=>T.jsx("option",{children:_},_))})]})]}),T.jsx("button",{type:"submit",disabled:W,className:"w-full bg-stone-800 text-white font-bold py-3.5 rounded-xl hover:bg-stone-700 transition-all text-sm mt-4 flex items-center justify-center disabled:bg-stone-400 shadow-sm",children:W?"전달 중...":T.jsxs(T.Fragment,{children:[T.jsx(ry,{size:16,className:"mr-2"})," 축하 메시지 및 참석의사 전달"]})})]}),T.jsx("div",{className:"space-y-4",children:l.length===0?T.jsx("p",{className:"text-center py-10 text-stone-400 text-sm italic font-medium",children:"첫 번째 축하 메시지를 남겨주세요."}):l.map((_,I)=>T.jsxs("div",{className:"bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col relative group",children:[T.jsxs("div",{className:"flex justify-between items-center mb-3",children:[T.jsxs("div",{className:"flex items-center space-x-2",children:[T.jsx("span",{className:"font-bold text-sm text-stone-800 bg-stone-50 px-2.5 py-1 rounded-md",children:_.name}),_.rsvp&&T.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-bold ${_.rsvp.attendance==="참석"?"bg-rose-50 text-rose-500":"bg-stone-50 text-stone-400"}`,children:_.rsvp.attendance==="참석"?`✨ ${_.rsvp.count}`:_.rsvp.attendance})]}),T.jsxs("div",{className:"flex items-center space-x-1",children:[T.jsx("span",{className:"text-[10px] text-stone-400 font-medium mr-1",children:_.date}),T.jsx("button",{onClick:()=>Re(_),className:"p-1 text-stone-300 hover:text-stone-600 transition-colors",title:"수정",children:T.jsx(iy,{size:13})}),T.jsx("button",{onClick:()=>Oe(_),className:"p-1 text-stone-300 hover:text-rose-400 transition-colors",title:"삭제",children:T.jsx(sy,{size:13})})]})]}),T.jsx("p",{className:"text-sm text-stone-700 leading-relaxed font-medium whitespace-pre-wrap",children:_.content})]},_.id||I))})]})})}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=ut("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);function rw(){const a=r=>{const l=document.getElementById(r);l&&l.scrollIntoView({behavior:"smooth"})},n=[{id:"greeting",label:"인사말",icon:xc},{id:"gallery",label:"갤러리",icon:lp},{id:"location",label:"오시는길",icon:lc},{id:"account",label:"마음전하기",icon:up},{id:"guestbook",label:"방명록",icon:nw}];return T.jsx("div",{className:"fixed bottom-0 w-full max-w-[480px] bg-white/95 backdrop-blur-md border-t border-stone-200 z-40 px-2 pt-3 pb-[max(24px,env(safe-area-inset-bottom))] flex justify-around items-center left-1/2 -translate-x-1/2",children:n.map(r=>T.jsxs("button",{onClick:()=>a(r.id),className:"flex flex-col items-center text-rose-300 hover:text-rose-500 transition-colors duration-300 w-[18%]",children:[T.jsx(r.icon,{size:18,strokeWidth:1.5,className:"mb-1.5"}),T.jsx("span",{className:"text-[9px] font-bold tracking-tight whitespace-nowrap text-stone-500",children:r.label})]},r.id))})}function sw(){const[a,n]=me.useState([]);return me.useEffect(()=>{const l=Array.from({length:15}).map((u,f)=>({id:f,left:Math.random()*100+"%",delay:Math.random()*10+"s",duration:10+Math.random()*15+"s",size:10+Math.random()*15+"px",opacity:.4+Math.random()*.4}));n(l)},[]),T.jsx("div",{className:"fixed inset-0 pointer-events-none overflow-hidden z-10",children:a.map(r=>T.jsx("div",{className:"petal",style:{left:r.left,animationDelay:r.delay,animationDuration:r.duration,width:r.size,height:r.size,opacity:r.opacity,background:"radial-gradient(circle, #ffd1dc 0%, #fff 100%)",borderRadius:"100% 0% 100% 0%"}},r.id))})}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=ut("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=ut("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);function aw(){const[a,n]=me.useState(!1),r=me.useRef(null),l="/th-wedding/bgm.mp3",u=()=>{a?r.current.pause():r.current.play().catch(f=>console.log("Auto-play blocked by browser")),n(!a)};return me.useEffect(()=>{if(r.current){r.current.volume=.35;const f=r.current.play();f!==void 0&&f.then(()=>{n(!0)}).catch(m=>{console.log("Autoplay waiting for interaction..."),n(!1)})}},[]),T.jsxs("div",{className:"fixed top-6 right-6 z-50",children:[T.jsx("audio",{ref:r,src:l,loop:!0}),T.jsx("button",{onClick:u,className:"w-10 h-10 bg-white/80 backdrop-blur-sm border border-stone-200 rounded-full flex items-center justify-center shadow-sm hover:scale-105 transition-all text-stone-600",title:a?"음악 끄기":"음악 켜기",children:a?T.jsx(iw,{size:18}):T.jsx(ow,{size:18,className:"text-stone-400"})}),T.jsx("div",{className:`absolute top-0 right-0 -z-10 w-10 h-10 rounded-full bg-rose-100/50 animate-ping ${!a&&"hidden"}`})]})}function lw(){const[a,n]=me.useState(!1),[r,l]=me.useState({show:!1,message:""}),u=f=>{l({show:!0,message:f}),setTimeout(()=>l({show:!1,message:""}),3e3)};return a?T.jsxs("div",{className:"min-h-screen bg-[#FDFBF7] text-stone-800 font-sans selection:bg-rose-200 relative pb-24",children:[T.jsx(sw,{}),T.jsx(aw,{}),T.jsx($g,{}),T.jsx(Gg,{}),T.jsx(Kg,{}),T.jsx(Jg,{}),T.jsx(Yg,{}),T.jsx(ty,{showToast:u}),T.jsx(tw,{showToast:u}),T.jsx(rw,{}),T.jsxs("div",{className:`fixed bottom-24 left-1/2 -translate-x-1/2 bg-stone-800 text-white px-6 py-3 rounded-full shadow-xl transition-all duration-300 z-50 flex items-center space-x-2 ${r.show?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"}`,children:[T.jsx(Bg,{size:18,className:"text-emerald-400"}),T.jsx("span",{className:"text-sm font-medium",children:r.message})]})]}):T.jsx(zg,{onEnter:()=>n(!0)})}Og.createRoot(document.getElementById("root")).render(T.jsx(Cg.StrictMode,{children:T.jsx(lw,{})}));
