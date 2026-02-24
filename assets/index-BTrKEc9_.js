(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))f(v);new MutationObserver(v=>{for(const x of v)if(x.type==="childList")for(const A of x.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&f(A)}).observe(document,{childList:!0,subtree:!0});function S(v){const x={};return v.integrity&&(x.integrity=v.integrity),v.referrerPolicy&&(x.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?x.credentials="include":v.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function f(v){if(v.ep)return;v.ep=!0;const x=S(v);fetch(v.href,x)}})();function getDefaultExportFromCjs(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}function getAugmentedNamespace(p){if(Object.prototype.hasOwnProperty.call(p,"__esModule"))return p;var d=p.default;if(typeof d=="function"){var S=function f(){var v=!1;try{v=this instanceof f}catch{}return v?Reflect.construct(d,arguments,this.constructor):d.apply(this,arguments)};S.prototype=d.prototype}else S={};return Object.defineProperty(S,"__esModule",{value:!0}),Object.keys(p).forEach(function(f){var v=Object.getOwnPropertyDescriptor(p,f);Object.defineProperty(S,f,v.get?v:{enumerable:!0,get:function(){return p[f]}})}),S}var jsxRuntime={exports:{}},reactJsxRuntime_production={};var hasRequiredReactJsxRuntime_production;function requireReactJsxRuntime_production(){if(hasRequiredReactJsxRuntime_production)return reactJsxRuntime_production;hasRequiredReactJsxRuntime_production=1;var p=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function S(f,v,x){var A=null;if(x!==void 0&&(A=""+x),v.key!==void 0&&(A=""+v.key),"key"in v){x={};for(var g in v)g!=="key"&&(x[g]=v[g])}else x=v;return v=x.ref,{$$typeof:p,type:f,key:A,ref:v!==void 0?v:null,props:x}}return reactJsxRuntime_production.Fragment=d,reactJsxRuntime_production.jsx=S,reactJsxRuntime_production.jsxs=S,reactJsxRuntime_production}var hasRequiredJsxRuntime;function requireJsxRuntime(){return hasRequiredJsxRuntime||(hasRequiredJsxRuntime=1,jsxRuntime.exports=requireReactJsxRuntime_production()),jsxRuntime.exports}var jsxRuntimeExports=requireJsxRuntime(),react={exports:{}},react_production={};var hasRequiredReact_production;function requireReact_production(){if(hasRequiredReact_production)return react_production;hasRequiredReact_production=1;var p=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),A=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.iterator;function O(k){return k===null||typeof k!="object"?null:(k=R&&k[R]||k["@@iterator"],typeof k=="function"?k:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,$={};function ae(k,G,P){this.props=k,this.context=G,this.refs=$,this.updater=P||Y}ae.prototype.isReactComponent={},ae.prototype.setState=function(k,G){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,G,"setState")},ae.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function ce(){}ce.prototype=ae.prototype;function oe(k,G,P){this.props=k,this.context=G,this.refs=$,this.updater=P||Y}var ge=oe.prototype=new ce;ge.constructor=oe,J(ge,ae.prototype),ge.isPureReactComponent=!0;var ee=Array.isArray;function be(){}var ie={H:null,A:null,T:null,S:null},xe=Object.prototype.hasOwnProperty;function te(k,G,P){var le=P.ref;return{$$typeof:p,type:k,key:G,ref:le!==void 0?le:null,props:P}}function _e(k,G){return te(k.type,G,k.props)}function me(k){return typeof k=="object"&&k!==null&&k.$$typeof===p}function fe(k){var G={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(P){return G[P]})}var Ae=/\/+/g;function pe(k,G){return typeof k=="object"&&k!==null&&k.key!=null?fe(""+k.key):G.toString(36)}function ke(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(be,be):(k.status="pending",k.then(function(G){k.status==="pending"&&(k.status="fulfilled",k.value=G)},function(G){k.status==="pending"&&(k.status="rejected",k.reason=G)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function U(k,G,P,le,re){var ve=typeof k;(ve==="undefined"||ve==="boolean")&&(k=null);var we=!1;if(k===null)we=!0;else switch(ve){case"bigint":case"string":case"number":we=!0;break;case"object":switch(k.$$typeof){case p:case d:we=!0;break;case E:return we=k._init,U(we(k._payload),G,P,le,re)}}if(we)return re=re(k),we=le===""?"."+pe(k,0):le,ee(re)?(P="",we!=null&&(P=we.replace(Ae,"$&/")+"/"),U(re,G,P,"",function(Mn){return Mn})):re!=null&&(me(re)&&(re=_e(re,P+(re.key==null||k&&k.key===re.key?"":(""+re.key).replace(Ae,"$&/")+"/")+we)),G.push(re)),1;we=0;var Qe=le===""?".":le+":";if(ee(k))for(var je=0;je<k.length;je++)le=k[je],ve=Qe+pe(le,je),we+=U(le,G,P,ve,re);else if(je=O(k),typeof je=="function")for(k=je.call(k),je=0;!(le=k.next()).done;)le=le.value,ve=Qe+pe(le,je++),we+=U(le,G,P,ve,re);else if(ve==="object"){if(typeof k.then=="function")return U(ke(k),G,P,le,re);throw G=String(k),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return we}function ne(k,G,P){if(k==null)return k;var le=[],re=0;return U(k,le,"","",function(ve){return G.call(P,ve,re++)}),le}function I(k){if(k._status===-1){var G=k._result;G=G(),G.then(function(P){(k._status===0||k._status===-1)&&(k._status=1,k._result=P)},function(P){(k._status===0||k._status===-1)&&(k._status=2,k._result=P)}),k._status===-1&&(k._status=0,k._result=G)}if(k._status===1)return k._result.default;throw k._result}var Me=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},Be={map:ne,forEach:function(k,G,P){ne(k,function(){G.apply(this,arguments)},P)},count:function(k){var G=0;return ne(k,function(){G++}),G},toArray:function(k){return ne(k,function(G){return G})||[]},only:function(k){if(!me(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return react_production.Activity=w,react_production.Children=Be,react_production.Component=ae,react_production.Fragment=S,react_production.Profiler=v,react_production.PureComponent=oe,react_production.StrictMode=f,react_production.Suspense=b,react_production.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ie,react_production.__COMPILER_RUNTIME={__proto__:null,c:function(k){return ie.H.useMemoCache(k)}},react_production.cache=function(k){return function(){return k.apply(null,arguments)}},react_production.cacheSignal=function(){return null},react_production.cloneElement=function(k,G,P){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var le=J({},k.props),re=k.key;if(G!=null)for(ve in G.key!==void 0&&(re=""+G.key),G)!xe.call(G,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&G.ref===void 0||(le[ve]=G[ve]);var ve=arguments.length-2;if(ve===1)le.children=P;else if(1<ve){for(var we=Array(ve),Qe=0;Qe<ve;Qe++)we[Qe]=arguments[Qe+2];le.children=we}return te(k.type,re,le)},react_production.createContext=function(k){return k={$$typeof:A,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:x,_context:k},k},react_production.createElement=function(k,G,P){var le,re={},ve=null;if(G!=null)for(le in G.key!==void 0&&(ve=""+G.key),G)xe.call(G,le)&&le!=="key"&&le!=="__self"&&le!=="__source"&&(re[le]=G[le]);var we=arguments.length-2;if(we===1)re.children=P;else if(1<we){for(var Qe=Array(we),je=0;je<we;je++)Qe[je]=arguments[je+2];re.children=Qe}if(k&&k.defaultProps)for(le in we=k.defaultProps,we)re[le]===void 0&&(re[le]=we[le]);return te(k,ve,re)},react_production.createRef=function(){return{current:null}},react_production.forwardRef=function(k){return{$$typeof:g,render:k}},react_production.isValidElement=me,react_production.lazy=function(k){return{$$typeof:E,_payload:{_status:-1,_result:k},_init:I}},react_production.memo=function(k,G){return{$$typeof:h,type:k,compare:G===void 0?null:G}},react_production.startTransition=function(k){var G=ie.T,P={};ie.T=P;try{var le=k(),re=ie.S;re!==null&&re(P,le),typeof le=="object"&&le!==null&&typeof le.then=="function"&&le.then(be,Me)}catch(ve){Me(ve)}finally{G!==null&&P.types!==null&&(G.types=P.types),ie.T=G}},react_production.unstable_useCacheRefresh=function(){return ie.H.useCacheRefresh()},react_production.use=function(k){return ie.H.use(k)},react_production.useActionState=function(k,G,P){return ie.H.useActionState(k,G,P)},react_production.useCallback=function(k,G){return ie.H.useCallback(k,G)},react_production.useContext=function(k){return ie.H.useContext(k)},react_production.useDebugValue=function(){},react_production.useDeferredValue=function(k,G){return ie.H.useDeferredValue(k,G)},react_production.useEffect=function(k,G){return ie.H.useEffect(k,G)},react_production.useEffectEvent=function(k){return ie.H.useEffectEvent(k)},react_production.useId=function(){return ie.H.useId()},react_production.useImperativeHandle=function(k,G,P){return ie.H.useImperativeHandle(k,G,P)},react_production.useInsertionEffect=function(k,G){return ie.H.useInsertionEffect(k,G)},react_production.useLayoutEffect=function(k,G){return ie.H.useLayoutEffect(k,G)},react_production.useMemo=function(k,G){return ie.H.useMemo(k,G)},react_production.useOptimistic=function(k,G){return ie.H.useOptimistic(k,G)},react_production.useReducer=function(k,G,P){return ie.H.useReducer(k,G,P)},react_production.useRef=function(k){return ie.H.useRef(k)},react_production.useState=function(k){return ie.H.useState(k)},react_production.useSyncExternalStore=function(k,G,P){return ie.H.useSyncExternalStore(k,G,P)},react_production.useTransition=function(){return ie.H.useTransition()},react_production.version="19.2.3",react_production}var hasRequiredReact;function requireReact(){return hasRequiredReact||(hasRequiredReact=1,react.exports=requireReact_production()),react.exports}var reactExports=requireReact(),client={exports:{}},reactDomClient_production={},scheduler={exports:{}},scheduler_production={};var hasRequiredScheduler_production;function requireScheduler_production(){return hasRequiredScheduler_production||(hasRequiredScheduler_production=1,(function(p){function d(U,ne){var I=U.length;U.push(ne);e:for(;0<I;){var Me=I-1>>>1,Be=U[Me];if(0<v(Be,ne))U[Me]=ne,U[I]=Be,I=Me;else break e}}function S(U){return U.length===0?null:U[0]}function f(U){if(U.length===0)return null;var ne=U[0],I=U.pop();if(I!==ne){U[0]=I;e:for(var Me=0,Be=U.length,k=Be>>>1;Me<k;){var G=2*(Me+1)-1,P=U[G],le=G+1,re=U[le];if(0>v(P,I))le<Be&&0>v(re,P)?(U[Me]=re,U[le]=I,Me=le):(U[Me]=P,U[G]=I,Me=G);else if(le<Be&&0>v(re,I))U[Me]=re,U[le]=I,Me=le;else break e}}return ne}function v(U,ne){var I=U.sortIndex-ne.sortIndex;return I!==0?I:U.id-ne.id}if(p.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var x=performance;p.unstable_now=function(){return x.now()}}else{var A=Date,g=A.now();p.unstable_now=function(){return A.now()-g}}var b=[],h=[],E=1,w=null,R=3,O=!1,Y=!1,J=!1,$=!1,ae=typeof setTimeout=="function"?setTimeout:null,ce=typeof clearTimeout=="function"?clearTimeout:null,oe=typeof setImmediate<"u"?setImmediate:null;function ge(U){for(var ne=S(h);ne!==null;){if(ne.callback===null)f(h);else if(ne.startTime<=U)f(h),ne.sortIndex=ne.expirationTime,d(b,ne);else break;ne=S(h)}}function ee(U){if(J=!1,ge(U),!Y)if(S(b)!==null)Y=!0,be||(be=!0,fe());else{var ne=S(h);ne!==null&&ke(ee,ne.startTime-U)}}var be=!1,ie=-1,xe=5,te=-1;function _e(){return $?!0:!(p.unstable_now()-te<xe)}function me(){if($=!1,be){var U=p.unstable_now();te=U;var ne=!0;try{e:{Y=!1,J&&(J=!1,ce(ie),ie=-1),O=!0;var I=R;try{n:{for(ge(U),w=S(b);w!==null&&!(w.expirationTime>U&&_e());){var Me=w.callback;if(typeof Me=="function"){w.callback=null,R=w.priorityLevel;var Be=Me(w.expirationTime<=U);if(U=p.unstable_now(),typeof Be=="function"){w.callback=Be,ge(U),ne=!0;break n}w===S(b)&&f(b),ge(U)}else f(b);w=S(b)}if(w!==null)ne=!0;else{var k=S(h);k!==null&&ke(ee,k.startTime-U),ne=!1}}break e}finally{w=null,R=I,O=!1}ne=void 0}}finally{ne?fe():be=!1}}}var fe;if(typeof oe=="function")fe=function(){oe(me)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,pe=Ae.port2;Ae.port1.onmessage=me,fe=function(){pe.postMessage(null)}}else fe=function(){ae(me,0)};function ke(U,ne){ie=ae(function(){U(p.unstable_now())},ne)}p.unstable_IdlePriority=5,p.unstable_ImmediatePriority=1,p.unstable_LowPriority=4,p.unstable_NormalPriority=3,p.unstable_Profiling=null,p.unstable_UserBlockingPriority=2,p.unstable_cancelCallback=function(U){U.callback=null},p.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xe=0<U?Math.floor(1e3/U):5},p.unstable_getCurrentPriorityLevel=function(){return R},p.unstable_next=function(U){switch(R){case 1:case 2:case 3:var ne=3;break;default:ne=R}var I=R;R=ne;try{return U()}finally{R=I}},p.unstable_requestPaint=function(){$=!0},p.unstable_runWithPriority=function(U,ne){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var I=R;R=U;try{return ne()}finally{R=I}},p.unstable_scheduleCallback=function(U,ne,I){var Me=p.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Me+I:Me):I=Me,U){case 1:var Be=-1;break;case 2:Be=250;break;case 5:Be=1073741823;break;case 4:Be=1e4;break;default:Be=5e3}return Be=I+Be,U={id:E++,callback:ne,priorityLevel:U,startTime:I,expirationTime:Be,sortIndex:-1},I>Me?(U.sortIndex=I,d(h,U),S(b)===null&&U===S(h)&&(J?(ce(ie),ie=-1):J=!0,ke(ee,I-Me))):(U.sortIndex=Be,d(b,U),Y||O||(Y=!0,be||(be=!0,fe()))),U},p.unstable_shouldYield=_e,p.unstable_wrapCallback=function(U){var ne=R;return function(){var I=R;R=ne;try{return U.apply(this,arguments)}finally{R=I}}}})(scheduler_production)),scheduler_production}var hasRequiredScheduler;function requireScheduler(){return hasRequiredScheduler||(hasRequiredScheduler=1,scheduler.exports=requireScheduler_production()),scheduler.exports}var reactDom={exports:{}},reactDom_production={};var hasRequiredReactDom_production;function requireReactDom_production(){if(hasRequiredReactDom_production)return reactDom_production;hasRequiredReactDom_production=1;var p=requireReact();function d(b){var h="https://react.dev/errors/"+b;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)h+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+b+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function S(){}var f={d:{f:S,r:function(){throw Error(d(522))},D:S,C:S,L:S,m:S,X:S,S,M:S},p:0,findDOMNode:null},v=Symbol.for("react.portal");function x(b,h,E){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:v,key:w==null?null:""+w,children:b,containerInfo:h,implementation:E}}var A=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(b,h){if(b==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return reactDom_production.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,reactDom_production.createPortal=function(b,h){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(d(299));return x(b,h,null,E)},reactDom_production.flushSync=function(b){var h=A.T,E=f.p;try{if(A.T=null,f.p=2,b)return b()}finally{A.T=h,f.p=E,f.d.f()}},reactDom_production.preconnect=function(b,h){typeof b=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,f.d.C(b,h))},reactDom_production.prefetchDNS=function(b){typeof b=="string"&&f.d.D(b)},reactDom_production.preinit=function(b,h){if(typeof b=="string"&&h&&typeof h.as=="string"){var E=h.as,w=g(E,h.crossOrigin),R=typeof h.integrity=="string"?h.integrity:void 0,O=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;E==="style"?f.d.S(b,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:w,integrity:R,fetchPriority:O}):E==="script"&&f.d.X(b,{crossOrigin:w,integrity:R,fetchPriority:O,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},reactDom_production.preinitModule=function(b,h){if(typeof b=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var E=g(h.as,h.crossOrigin);f.d.M(b,{crossOrigin:E,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&f.d.M(b)},reactDom_production.preload=function(b,h){if(typeof b=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var E=h.as,w=g(E,h.crossOrigin);f.d.L(b,E,{crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},reactDom_production.preloadModule=function(b,h){if(typeof b=="string")if(h){var E=g(h.as,h.crossOrigin);f.d.m(b,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:E,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else f.d.m(b)},reactDom_production.requestFormReset=function(b){f.d.r(b)},reactDom_production.unstable_batchedUpdates=function(b,h){return b(h)},reactDom_production.useFormState=function(b,h,E){return A.H.useFormState(b,h,E)},reactDom_production.useFormStatus=function(){return A.H.useHostTransitionStatus()},reactDom_production.version="19.2.3",reactDom_production}var hasRequiredReactDom;function requireReactDom(){if(hasRequiredReactDom)return reactDom.exports;hasRequiredReactDom=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(d){console.error(d)}}return p(),reactDom.exports=requireReactDom_production(),reactDom.exports}var hasRequiredReactDomClient_production;function requireReactDomClient_production(){if(hasRequiredReactDomClient_production)return reactDomClient_production;hasRequiredReactDomClient_production=1;var p=requireScheduler(),d=requireReact(),S=requireReactDom();function f(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function v(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function x(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function A(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function b(e){if(x(e)!==e)throw Error(f(188))}function h(e){var n=e.alternate;if(!n){if(n=x(e),n===null)throw Error(f(188));return n!==e?null:e}for(var t=e,i=n;;){var a=t.return;if(a===null)break;var l=a.alternate;if(l===null){if(i=a.return,i!==null){t=i;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===t)return b(a),e;if(l===i)return b(a),n;l=l.sibling}throw Error(f(188))}if(t.return!==i.return)t=a,i=l;else{for(var s=!1,y=a.child;y;){if(y===t){s=!0,t=a,i=l;break}if(y===i){s=!0,i=a,t=l;break}y=y.sibling}if(!s){for(y=l.child;y;){if(y===t){s=!0,t=l,i=a;break}if(y===i){s=!0,i=l,t=a;break}y=y.sibling}if(!s)throw Error(f(189))}}if(t.alternate!==i)throw Error(f(190))}if(t.tag!==3)throw Error(f(188));return t.stateNode.current===t?e:n}function E(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=E(e),n!==null)return n;e=e.sibling}return null}var w=Object.assign,R=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),ae=Symbol.for("react.profiler"),ce=Symbol.for("react.consumer"),oe=Symbol.for("react.context"),ge=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),be=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),te=Symbol.for("react.activity"),_e=Symbol.for("react.memo_cache_sentinel"),me=Symbol.iterator;function fe(e){return e===null||typeof e!="object"?null:(e=me&&e[me]||e["@@iterator"],typeof e=="function"?e:null)}var Ae=Symbol.for("react.client.reference");function pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case J:return"Fragment";case ae:return"Profiler";case $:return"StrictMode";case ee:return"Suspense";case be:return"SuspenseList";case te:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Y:return"Portal";case oe:return e.displayName||"Context";case ce:return(e._context.displayName||"Context")+".Consumer";case ge:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ie:return n=e.displayName||null,n!==null?n:pe(e.type)||"Memo";case xe:n=e._payload,e=e._init;try{return pe(e(n))}catch{}}return null}var ke=Array.isArray,U=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=S.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},Me=[],Be=-1;function k(e){return{current:e}}function G(e){0>Be||(e.current=Me[Be],Me[Be]=null,Be--)}function P(e,n){Be++,Me[Be]=e.current,e.current=n}var le=k(null),re=k(null),ve=k(null),we=k(null);function Qe(e,n){switch(P(ve,n),P(re,e),P(le,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Yf(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Yf(n),e=zf(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(le),P(le,e)}function je(){G(le),G(re),G(ve)}function Mn(e){e.memoizedState!==null&&P(we,e);var n=le.current,t=zf(n,e.type);n!==t&&(P(re,e),P(le,t))}function Kn(e){re.current===e&&(G(le),G(re)),we.current===e&&(G(we),La._currentValue=I)}var Tn,yn;function sn(e){if(Tn===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Tn=n&&n[1]||"",yn=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tn+e+yn}var $n=!1;function Pn(e,n){if(!e||$n)return"";$n=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(n){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(F){var L=F}Reflect.construct(e,[],Z)}else{try{Z.call()}catch(F){L=F}e.call(Z.prototype)}}else{try{throw Error()}catch(F){L=F}(Z=e())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(F){if(F&&L&&typeof F.stack=="string")return[F.stack,L.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),s=l[0],y=l[1];if(s&&y){var T=s.split(`
`),N=y.split(`
`);for(a=i=0;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;for(;a<N.length&&!N[a].includes("DetermineComponentFrameRoot");)a++;if(i===T.length||a===N.length)for(i=T.length-1,a=N.length-1;1<=i&&0<=a&&T[i]!==N[a];)a--;for(;1<=i&&0<=a;i--,a--)if(T[i]!==N[a]){if(i!==1||a!==1)do if(i--,a--,0>a||T[i]!==N[a]){var Q=`
`+T[i].replace(" at new "," at ");return e.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",e.displayName)),Q}while(1<=i&&0<=a);break}}}finally{$n=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?sn(t):""}function at(e,n){switch(e.tag){case 26:case 27:case 5:return sn(e.type);case 16:return sn("Lazy");case 13:return e.child!==n&&n!==null?sn("Suspense Fallback"):sn("Suspense");case 19:return sn("SuspenseList");case 0:case 15:return Pn(e.type,!1);case 11:return Pn(e.type.render,!1);case 1:return Pn(e.type,!0);case 31:return sn("Activity");default:return""}}function vn(e){try{var n="",t=null;do n+=at(e,t),t=e,e=e.return;while(e);return n}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var lt=Object.prototype.hasOwnProperty,Zn=p.unstable_scheduleCallback,kn=p.unstable_cancelCallback,fn=p.unstable_shouldYield,rt=p.unstable_requestPaint,nn=p.unstable_now,o=p.unstable_getCurrentPriorityLevel,H=p.unstable_ImmediatePriority,m=p.unstable_UserBlockingPriority,r=p.unstable_NormalPriority,u=p.unstable_LowPriority,c=p.unstable_IdlePriority,_=p.log,C=p.unstable_setDisableYieldValue,M=null,q=null;function V(e){if(typeof _=="function"&&C(e),q&&typeof q.setStrictMode=="function")try{q.setStrictMode(M,e)}catch{}}var j=Math.clz32?Math.clz32:he,W=Math.log,X=Math.LN2;function he(e){return e>>>=0,e===0?32:31-(W(e)/X|0)|0}var Te=256,Se=262144,$e=4194304;function Jt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Fa(e,n,t){var i=e.pendingLanes;if(i===0)return 0;var a=0,l=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var y=i&134217727;return y!==0?(i=y&~l,i!==0?a=Jt(i):(s&=y,s!==0?a=Jt(s):t||(t=y&~e,t!==0&&(a=Jt(t))))):(y=i&~l,y!==0?a=Jt(y):s!==0?a=Jt(s):t||(t=i&~e,t!==0&&(a=Jt(t)))),a===0?0:n!==0&&n!==a&&(n&l)===0&&(l=a&-a,t=n&-n,l>=t||l===32&&(t&4194048)!==0)?n:a}function Wi(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function fm(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pu(){var e=$e;return $e<<=1,($e&62914560)===0&&($e=4194304),e}function nr(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function $i(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mm(e,n,t,i,a,l){var s=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var y=e.entanglements,T=e.expirationTimes,N=e.hiddenUpdates;for(t=s&~t;0<t;){var Q=31-j(t),Z=1<<Q;y[Q]=0,T[Q]=-1;var L=N[Q];if(L!==null)for(N[Q]=null,Q=0;Q<L.length;Q++){var F=L[Q];F!==null&&(F.lane&=-536870913)}t&=~Z}i!==0&&hu(e,i,0),l!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=l&~(s&~n))}function hu(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var i=31-j(n);e.entangledLanes|=n,e.entanglements[i]=e.entanglements[i]|1073741824|t&261930}function gu(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var i=31-j(t),a=1<<i;a&n|e[i]&n&&(e[i]|=n),t&=~a}}function _u(e,n){var t=n&-n;return t=(t&42)!==0?1:tr(t),(t&(e.suspendedLanes|n))!==0?0:t}function tr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ir(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function yu(){var e=ne.p;return e!==0?e:(e=window.event,e===void 0?32:am(e.type))}function vu(e,n){var t=ne.p;try{return ne.p=e,n()}finally{ne.p=t}}var Ct=Math.random().toString(36).slice(2),mn="__reactFiber$"+Ct,bn="__reactProps$"+Ct,di="__reactContainer$"+Ct,ar="__reactEvents$"+Ct,dm="__reactListeners$"+Ct,pm="__reactHandles$"+Ct,bu="__reactResources$"+Ct,Pi="__reactMarker$"+Ct;function lr(e){delete e[mn],delete e[bn],delete e[ar],delete e[dm],delete e[pm]}function pi(e){var n=e[mn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[di]||t[mn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ff(e);e!==null;){if(t=e[mn])return t;e=Ff(e)}return n}e=t,t=e.parentNode}return null}function hi(e){if(e=e[mn]||e[di]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ea(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(f(33))}function gi(e){var n=e[bu];return n||(n=e[bu]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function un(e){e[Pi]=!0}var Su=new Set,xu={};function It(e,n){_i(e,n),_i(e+"Capture",n)}function _i(e,n){for(xu[e]=n,e=0;e<n.length;e++)Su.add(n[e])}var hm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Au={},Eu={};function gm(e){return lt.call(Eu,e)?!0:lt.call(Au,e)?!1:hm.test(e)?Eu[e]=!0:(Au[e]=!0,!1)}function Ga(e,n,t){if(gm(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var i=n.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function Va(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function ot(e,n,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+i)}}function qn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function _m(e,n,t){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,l=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(s){t=""+s,l.call(this,s)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return t},setValue:function(s){t=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function rr(e){if(!e._valueTracker){var n=Cu(e)?"checked":"value";e._valueTracker=_m(e,n,""+e[n])}}function wu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),i="";return e&&(i=Cu(e)?e.checked?"true":"false":e.value),e=i,e!==t?(n.setValue(e),!0):!1}function Qa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ym=/[\n"\\]/g;function Ln(e){return e.replace(ym,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function or(e,n,t,i,a,l,s,y){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),n!=null?s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+qn(n)):e.value!==""+qn(n)&&(e.value=""+qn(n)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),n!=null?ur(e,s,qn(n)):t!=null?ur(e,s,qn(t)):i!=null&&e.removeAttribute("value"),a==null&&l!=null&&(e.defaultChecked=!!l),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+qn(y):e.removeAttribute("name")}function Mu(e,n,t,i,a,l,s,y){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),n!=null||t!=null){if(!(l!=="submit"&&l!=="reset"||n!=null)){rr(e);return}t=t!=null?""+qn(t):"",n=n!=null?""+qn(n):t,y||n===e.value||(e.value=n),e.defaultValue=n}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=y?e.checked:!!i,e.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),rr(e)}function ur(e,n,t){n==="number"&&Qa(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function yi(e,n,t,i){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&i&&(e[t].defaultSelected=!0)}else{for(t=""+qn(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function Tu(e,n,t){if(n!=null&&(n=""+qn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+qn(t):""}function ku(e,n,t,i){if(n==null){if(i!=null){if(t!=null)throw Error(f(92));if(ke(i)){if(1<i.length)throw Error(f(93));i=i[0]}t=i}t==null&&(t=""),n=t}t=qn(n),e.defaultValue=t,i=e.textContent,i===t&&i!==""&&i!==null&&(e.value=i),rr(e)}function vi(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var vm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Du(e,n,t){var i=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?i?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":i?e.setProperty(n,t):typeof t!="number"||t===0||vm.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function Ru(e,n,t){if(n!=null&&typeof n!="object")throw Error(f(62));if(e=e.style,t!=null){for(var i in t)!t.hasOwnProperty(i)||n!=null&&n.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in n)i=n[a],n.hasOwnProperty(a)&&t[a]!==i&&Du(e,a,i)}else for(var l in n)n.hasOwnProperty(l)&&Du(e,l,n[l])}function cr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xa(e){return Sm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ut(){}var sr=null;function fr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bi=null,Si=null;function Bu(e){var n=hi(e);if(n&&(e=n.stateNode)){var t=e[bn]||null;e:switch(e=n.stateNode,n.type){case"input":if(or(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Ln(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var i=t[n];if(i!==e&&i.form===e.form){var a=i[bn]||null;if(!a)throw Error(f(90));or(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(n=0;n<t.length;n++)i=t[n],i.form===e.form&&wu(i)}break e;case"textarea":Tu(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&yi(e,!!t.multiple,n,!1)}}}var mr=!1;function Ou(e,n,t){if(mr)return e(n,t);mr=!0;try{var i=e(n);return i}finally{if(mr=!1,(bi!==null||Si!==null)&&(Ol(),bi&&(n=bi,e=Si,Si=bi=null,Bu(n),e)))for(n=0;n<e.length;n++)Bu(e[n])}}function na(e,n){var t=e.stateNode;if(t===null)return null;var i=t[bn]||null;if(i===null)return null;t=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(f(231,n,typeof t));return t}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dr=!1;if(ct)try{var ta={};Object.defineProperty(ta,"passive",{get:function(){dr=!0}}),window.addEventListener("test",ta,ta),window.removeEventListener("test",ta,ta)}catch{dr=!1}var wt=null,pr=null,Ka=null;function Yu(){if(Ka)return Ka;var e,n=pr,t=n.length,i,a="value"in wt?wt.value:wt.textContent,l=a.length;for(e=0;e<t&&n[e]===a[e];e++);var s=t-e;for(i=1;i<=s&&n[t-i]===a[l-i];i++);return Ka=a.slice(e,1<i?1-i:void 0)}function Za(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ja(){return!0}function zu(){return!1}function Sn(e){function n(t,i,a,l,s){this._reactName=t,this._targetInst=a,this.type=i,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(t=e[y],this[y]=t?t(l):l[y]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ja:zu,this.isPropagationStopped=zu,this}return w(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),n}var Wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ia=Sn(Wt),ia=w({},Wt,{view:0,detail:0}),xm=Sn(ia),hr,gr,aa,Wa=w({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==aa&&(aa&&e.type==="mousemove"?(hr=e.screenX-aa.screenX,gr=e.screenY-aa.screenY):gr=hr=0,aa=e),hr)},movementY:function(e){return"movementY"in e?e.movementY:gr}}),Nu=Sn(Wa),Am=w({},Wa,{dataTransfer:0}),Em=Sn(Am),Cm=w({},ia,{relatedTarget:0}),_r=Sn(Cm),wm=w({},Wt,{animationName:0,elapsedTime:0,pseudoElement:0}),Mm=Sn(wm),Tm=w({},Wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),km=Sn(Tm),Dm=w({},Wt,{data:0}),qu=Sn(Dm),Rm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Om={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ym(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Om[e])?!!n[e]:!1}function yr(){return Ym}var zm=w({},ia,{key:function(e){if(e.key){var n=Rm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Za(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yr,charCode:function(e){return e.type==="keypress"?Za(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Za(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nm=Sn(zm),qm=w({},Wa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lu=Sn(qm),Lm=w({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yr}),jm=Sn(Lm),Hm=w({},Wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Um=Sn(Hm),Fm=w({},Wa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gm=Sn(Fm),Vm=w({},Wt,{newState:0,oldState:0}),Qm=Sn(Vm),Xm=[9,13,27,32],vr=ct&&"CompositionEvent"in window,la=null;ct&&"documentMode"in document&&(la=document.documentMode);var Km=ct&&"TextEvent"in window&&!la,ju=ct&&(!vr||la&&8<la&&11>=la),Hu=" ",Uu=!1;function Fu(e,n){switch(e){case"keyup":return Xm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xi=!1;function Zm(e,n){switch(e){case"compositionend":return Gu(n);case"keypress":return n.which!==32?null:(Uu=!0,Hu);case"textInput":return e=n.data,e===Hu&&Uu?null:e;default:return null}}function Jm(e,n){if(xi)return e==="compositionend"||!vr&&Fu(e,n)?(e=Yu(),Ka=pr=wt=null,xi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ju&&n.locale!=="ko"?null:n.data;default:return null}}var Im={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Im[e.type]:n==="textarea"}function Qu(e,n,t,i){bi?Si?Si.push(i):Si=[i]:bi=i,n=Hl(n,"onChange"),0<n.length&&(t=new Ia("onChange","change",null,t,i),e.push({event:t,listeners:n}))}var ra=null,oa=null;function Wm(e){Tf(e,0)}function $a(e){var n=ea(e);if(wu(n))return e}function Xu(e,n){if(e==="change")return n}var Ku=!1;if(ct){var br;if(ct){var Sr="oninput"in document;if(!Sr){var Zu=document.createElement("div");Zu.setAttribute("oninput","return;"),Sr=typeof Zu.oninput=="function"}br=Sr}else br=!1;Ku=br&&(!document.documentMode||9<document.documentMode)}function Ju(){ra&&(ra.detachEvent("onpropertychange",Iu),oa=ra=null)}function Iu(e){if(e.propertyName==="value"&&$a(oa)){var n=[];Qu(n,oa,e,fr(e)),Ou(Wm,n)}}function $m(e,n,t){e==="focusin"?(Ju(),ra=n,oa=t,ra.attachEvent("onpropertychange",Iu)):e==="focusout"&&Ju()}function Pm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $a(oa)}function ed(e,n){if(e==="click")return $a(n)}function nd(e,n){if(e==="input"||e==="change")return $a(n)}function td(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Dn=typeof Object.is=="function"?Object.is:td;function ua(e,n){if(Dn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),i=Object.keys(n);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var a=t[i];if(!lt.call(n,a)||!Dn(e[a],n[a]))return!1}return!0}function Wu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $u(e,n){var t=Wu(e);e=0;for(var i;t;){if(t.nodeType===3){if(i=e+t.textContent.length,e<=n&&i>=n)return{node:t,offset:n-e};e=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Wu(t)}}function Pu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Pu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ec(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Qa(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Qa(e.document)}return n}function xr(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var id=ct&&"documentMode"in document&&11>=document.documentMode,Ai=null,Ar=null,ca=null,Er=!1;function nc(e,n,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Er||Ai==null||Ai!==Qa(i)||(i=Ai,"selectionStart"in i&&xr(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ca&&ua(ca,i)||(ca=i,i=Hl(Ar,"onSelect"),0<i.length&&(n=new Ia("onSelect","select",null,n,t),e.push({event:n,listeners:i}),n.target=Ai)))}function $t(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ei={animationend:$t("Animation","AnimationEnd"),animationiteration:$t("Animation","AnimationIteration"),animationstart:$t("Animation","AnimationStart"),transitionrun:$t("Transition","TransitionRun"),transitionstart:$t("Transition","TransitionStart"),transitioncancel:$t("Transition","TransitionCancel"),transitionend:$t("Transition","TransitionEnd")},Cr={},tc={};ct&&(tc=document.createElement("div").style,"AnimationEvent"in window||(delete Ei.animationend.animation,delete Ei.animationiteration.animation,delete Ei.animationstart.animation),"TransitionEvent"in window||delete Ei.transitionend.transition);function Pt(e){if(Cr[e])return Cr[e];if(!Ei[e])return e;var n=Ei[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in tc)return Cr[e]=n[t];return e}var ic=Pt("animationend"),ac=Pt("animationiteration"),lc=Pt("animationstart"),ad=Pt("transitionrun"),ld=Pt("transitionstart"),rd=Pt("transitioncancel"),rc=Pt("transitionend"),oc=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wr.push("scrollEnd");function Jn(e,n){oc.set(e,n),It(n,[e])}var Pa=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},jn=[],Ci=0,Mr=0;function el(){for(var e=Ci,n=Mr=Ci=0;n<e;){var t=jn[n];jn[n++]=null;var i=jn[n];jn[n++]=null;var a=jn[n];jn[n++]=null;var l=jn[n];if(jn[n++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}l!==0&&uc(t,a,l)}}function nl(e,n,t,i){jn[Ci++]=e,jn[Ci++]=n,jn[Ci++]=t,jn[Ci++]=i,Mr|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Tr(e,n,t,i){return nl(e,n,t,i),tl(e)}function ei(e,n){return nl(e,null,null,n),tl(e)}function uc(e,n,t){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t);for(var a=!1,l=e.return;l!==null;)l.childLanes|=t,i=l.alternate,i!==null&&(i.childLanes|=t),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(a=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,a&&n!==null&&(a=31-j(t),e=l.hiddenUpdates,i=e[a],i===null?e[a]=[n]:i.push(n),n.lane=t|536870912),l):null}function tl(e){if(50<Ra)throw Ra=0,Lo=null,Error(f(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var wi={};function od(e,n,t,i){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(e,n,t,i){return new od(e,n,t,i)}function kr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function st(e,n){var t=e.alternate;return t===null?(t=Rn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function cc(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function il(e,n,t,i,a,l){var s=0;if(i=e,typeof e=="function")kr(e)&&(s=1);else if(typeof e=="string")s=mp(e,t,le.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case te:return e=Rn(31,t,n,a),e.elementType=te,e.lanes=l,e;case J:return ni(t.children,a,l,n);case $:s=8,a|=24;break;case ae:return e=Rn(12,t,n,a|2),e.elementType=ae,e.lanes=l,e;case ee:return e=Rn(13,t,n,a),e.elementType=ee,e.lanes=l,e;case be:return e=Rn(19,t,n,a),e.elementType=be,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oe:s=10;break e;case ce:s=9;break e;case ge:s=11;break e;case ie:s=14;break e;case xe:s=16,i=null;break e}s=29,t=Error(f(130,e===null?"null":typeof e,"")),i=null}return n=Rn(s,t,n,a),n.elementType=e,n.type=i,n.lanes=l,n}function ni(e,n,t,i){return e=Rn(7,e,i,n),e.lanes=t,e}function Dr(e,n,t){return e=Rn(6,e,null,n),e.lanes=t,e}function sc(e){var n=Rn(18,null,null,0);return n.stateNode=e,n}function Rr(e,n,t){return n=Rn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var fc=new WeakMap;function Hn(e,n){if(typeof e=="object"&&e!==null){var t=fc.get(e);return t!==void 0?t:(n={value:e,source:n,stack:vn(n)},fc.set(e,n),n)}return{value:e,source:n,stack:vn(n)}}var Mi=[],Ti=0,al=null,sa=0,Un=[],Fn=0,Mt=null,et=1,nt="";function ft(e,n){Mi[Ti++]=sa,Mi[Ti++]=al,al=e,sa=n}function mc(e,n,t){Un[Fn++]=et,Un[Fn++]=nt,Un[Fn++]=Mt,Mt=e;var i=et;e=nt;var a=32-j(i)-1;i&=~(1<<a),t+=1;var l=32-j(n)+a;if(30<l){var s=a-a%5;l=(i&(1<<s)-1).toString(32),i>>=s,a-=s,et=1<<32-j(n)+a|t<<a|i,nt=l+e}else et=1<<l|t<<a|i,nt=e}function Br(e){e.return!==null&&(ft(e,1),mc(e,1,0))}function Or(e){for(;e===al;)al=Mi[--Ti],Mi[Ti]=null,sa=Mi[--Ti],Mi[Ti]=null;for(;e===Mt;)Mt=Un[--Fn],Un[Fn]=null,nt=Un[--Fn],Un[Fn]=null,et=Un[--Fn],Un[Fn]=null}function dc(e,n){Un[Fn++]=et,Un[Fn++]=nt,Un[Fn++]=Mt,et=n.id,nt=n.overflow,Mt=e}var dn=null,Ke=null,ze=!1,Tt=null,Gn=!1,Yr=Error(f(519));function kt(e){var n=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fa(Hn(n,e)),Yr}function pc(e){var n=e.stateNode,t=e.type,i=e.memoizedProps;switch(n[mn]=e,n[bn]=i,t){case"dialog":Re("cancel",n),Re("close",n);break;case"iframe":case"object":case"embed":Re("load",n);break;case"video":case"audio":for(t=0;t<Oa.length;t++)Re(Oa[t],n);break;case"source":Re("error",n);break;case"img":case"image":case"link":Re("error",n),Re("load",n);break;case"details":Re("toggle",n);break;case"input":Re("invalid",n),Mu(n,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Re("invalid",n);break;case"textarea":Re("invalid",n),ku(n,i.value,i.defaultValue,i.children)}t=i.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||i.suppressHydrationWarning===!0||Bf(n.textContent,t)?(i.popover!=null&&(Re("beforetoggle",n),Re("toggle",n)),i.onScroll!=null&&Re("scroll",n),i.onScrollEnd!=null&&Re("scrollend",n),i.onClick!=null&&(n.onclick=ut),n=!0):n=!1,n||kt(e,!0)}function hc(e){for(dn=e.return;dn;)switch(dn.tag){case 5:case 31:case 13:Gn=!1;return;case 27:case 3:Gn=!0;return;default:dn=dn.return}}function ki(e){if(e!==dn)return!1;if(!ze)return hc(e),ze=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Po(e.type,e.memoizedProps)),t=!t),t&&Ke&&kt(e),hc(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));Ke=Uf(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));Ke=Uf(e)}else n===27?(n=Ke,Gt(e.type)?(e=au,au=null,Ke=e):Ke=n):Ke=dn?Qn(e.stateNode.nextSibling):null;return!0}function ti(){Ke=dn=null,ze=!1}function zr(){var e=Tt;return e!==null&&(Cn===null?Cn=e:Cn.push.apply(Cn,e),Tt=null),e}function fa(e){Tt===null?Tt=[e]:Tt.push(e)}var Nr=k(null),ii=null,mt=null;function Dt(e,n,t){P(Nr,n._currentValue),n._currentValue=t}function dt(e){e._currentValue=Nr.current,G(Nr)}function qr(e,n,t){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===t)break;e=e.return}}function Lr(e,n,t,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var l=a.dependencies;if(l!==null){var s=a.child;l=l.firstContext;e:for(;l!==null;){var y=l;l=a;for(var T=0;T<n.length;T++)if(y.context===n[T]){l.lanes|=t,y=l.alternate,y!==null&&(y.lanes|=t),qr(l.return,t,e),i||(s=null);break e}l=y.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(f(341));s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),qr(s,t,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Di(e,n,t,i){e=null;for(var a=n,l=!1;a!==null;){if(!l){if((a.flags&524288)!==0)l=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(f(387));if(s=s.memoizedProps,s!==null){var y=a.type;Dn(a.pendingProps.value,s.value)||(e!==null?e.push(y):e=[y])}}else if(a===we.current){if(s=a.alternate,s===null)throw Error(f(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(La):e=[La])}a=a.return}e!==null&&Lr(n,e,t,i),n.flags|=262144}function ll(e){for(e=e.firstContext;e!==null;){if(!Dn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ai(e){ii=e,mt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function pn(e){return gc(ii,e)}function rl(e,n){return ii===null&&ai(e),gc(e,n)}function gc(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},mt===null){if(e===null)throw Error(f(308));mt=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else mt=mt.next=n;return t}var ud=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,i){e.push(i)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},cd=p.unstable_scheduleCallback,sd=p.unstable_NormalPriority,tn={$$typeof:oe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jr(){return{controller:new ud,data:new Map,refCount:0}}function ma(e){e.refCount--,e.refCount===0&&cd(sd,function(){e.controller.abort()})}var da=null,Hr=0,Ri=0,Bi=null;function fd(e,n){if(da===null){var t=da=[];Hr=0,Ri=Vo(),Bi={status:"pending",value:void 0,then:function(i){t.push(i)}}}return Hr++,n.then(_c,_c),n}function _c(){if(--Hr===0&&da!==null){Bi!==null&&(Bi.status="fulfilled");var e=da;da=null,Ri=0,Bi=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function md(e,n){var t=[],i={status:"pending",value:null,reason:null,then:function(a){t.push(a)}};return e.then(function(){i.status="fulfilled",i.value=n;for(var a=0;a<t.length;a++)(0,t[a])(n)},function(a){for(i.status="rejected",i.reason=a,a=0;a<t.length;a++)(0,t[a])(void 0)}),i}var yc=U.S;U.S=function(e,n){nf=nn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&fd(e,n),yc!==null&&yc(e,n)};var li=k(null);function Ur(){var e=li.current;return e!==null?e:Xe.pooledCache}function ol(e,n){n===null?P(li,li.current):P(li,n.pool)}function vc(){var e=Ur();return e===null?null:{parent:tn._currentValue,pool:e}}var Oi=Error(f(460)),Fr=Error(f(474)),ul=Error(f(542)),cl={then:function(){}};function bc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Sc(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(ut,ut),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ac(e),e;default:if(typeof n.status=="string")n.then(ut,ut);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(f(482));e=n,e.status="pending",e.then(function(i){if(n.status==="pending"){var a=n;a.status="fulfilled",a.value=i}},function(i){if(n.status==="pending"){var a=n;a.status="rejected",a.reason=i}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ac(e),e}throw oi=n,Oi}}function ri(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(oi=t,Oi):t}}var oi=null;function xc(){if(oi===null)throw Error(f(459));var e=oi;return oi=null,e}function Ac(e){if(e===Oi||e===ul)throw Error(f(483))}var Yi=null,pa=0;function sl(e){var n=pa;return pa+=1,Yi===null&&(Yi=[]),Sc(Yi,e,n)}function ha(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function fl(e,n){throw n.$$typeof===R?Error(f(525)):(e=Object.prototype.toString.call(n),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Ec(e){function n(B,D){if(e){var z=B.deletions;z===null?(B.deletions=[D],B.flags|=16):z.push(D)}}function t(B,D){if(!e)return null;for(;D!==null;)n(B,D),D=D.sibling;return null}function i(B){for(var D=new Map;B!==null;)B.key!==null?D.set(B.key,B):D.set(B.index,B),B=B.sibling;return D}function a(B,D){return B=st(B,D),B.index=0,B.sibling=null,B}function l(B,D,z){return B.index=z,e?(z=B.alternate,z!==null?(z=z.index,z<D?(B.flags|=67108866,D):z):(B.flags|=67108866,D)):(B.flags|=1048576,D)}function s(B){return e&&B.alternate===null&&(B.flags|=67108866),B}function y(B,D,z,K){return D===null||D.tag!==6?(D=Dr(z,B.mode,K),D.return=B,D):(D=a(D,z),D.return=B,D)}function T(B,D,z,K){var de=z.type;return de===J?Q(B,D,z.props.children,K,z.key):D!==null&&(D.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===xe&&ri(de)===D.type)?(D=a(D,z.props),ha(D,z),D.return=B,D):(D=il(z.type,z.key,z.props,null,B.mode,K),ha(D,z),D.return=B,D)}function N(B,D,z,K){return D===null||D.tag!==4||D.stateNode.containerInfo!==z.containerInfo||D.stateNode.implementation!==z.implementation?(D=Rr(z,B.mode,K),D.return=B,D):(D=a(D,z.children||[]),D.return=B,D)}function Q(B,D,z,K,de){return D===null||D.tag!==7?(D=ni(z,B.mode,K,de),D.return=B,D):(D=a(D,z),D.return=B,D)}function Z(B,D,z){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=Dr(""+D,B.mode,z),D.return=B,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case O:return z=il(D.type,D.key,D.props,null,B.mode,z),ha(z,D),z.return=B,z;case Y:return D=Rr(D,B.mode,z),D.return=B,D;case xe:return D=ri(D),Z(B,D,z)}if(ke(D)||fe(D))return D=ni(D,B.mode,z,null),D.return=B,D;if(typeof D.then=="function")return Z(B,sl(D),z);if(D.$$typeof===oe)return Z(B,rl(B,D),z);fl(B,D)}return null}function L(B,D,z,K){var de=D!==null?D.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return de!==null?null:y(B,D,""+z,K);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case O:return z.key===de?T(B,D,z,K):null;case Y:return z.key===de?N(B,D,z,K):null;case xe:return z=ri(z),L(B,D,z,K)}if(ke(z)||fe(z))return de!==null?null:Q(B,D,z,K,null);if(typeof z.then=="function")return L(B,D,sl(z),K);if(z.$$typeof===oe)return L(B,D,rl(B,z),K);fl(B,z)}return null}function F(B,D,z,K,de){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return B=B.get(z)||null,y(D,B,""+K,de);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case O:return B=B.get(K.key===null?z:K.key)||null,T(D,B,K,de);case Y:return B=B.get(K.key===null?z:K.key)||null,N(D,B,K,de);case xe:return K=ri(K),F(B,D,z,K,de)}if(ke(K)||fe(K))return B=B.get(z)||null,Q(D,B,K,de,null);if(typeof K.then=="function")return F(B,D,z,sl(K),de);if(K.$$typeof===oe)return F(B,D,z,rl(D,K),de);fl(D,K)}return null}function ue(B,D,z,K){for(var de=null,Ne=null,se=D,Ce=D=0,Ye=null;se!==null&&Ce<z.length;Ce++){se.index>Ce?(Ye=se,se=null):Ye=se.sibling;var qe=L(B,se,z[Ce],K);if(qe===null){se===null&&(se=Ye);break}e&&se&&qe.alternate===null&&n(B,se),D=l(qe,D,Ce),Ne===null?de=qe:Ne.sibling=qe,Ne=qe,se=Ye}if(Ce===z.length)return t(B,se),ze&&ft(B,Ce),de;if(se===null){for(;Ce<z.length;Ce++)se=Z(B,z[Ce],K),se!==null&&(D=l(se,D,Ce),Ne===null?de=se:Ne.sibling=se,Ne=se);return ze&&ft(B,Ce),de}for(se=i(se);Ce<z.length;Ce++)Ye=F(se,B,Ce,z[Ce],K),Ye!==null&&(e&&Ye.alternate!==null&&se.delete(Ye.key===null?Ce:Ye.key),D=l(Ye,D,Ce),Ne===null?de=Ye:Ne.sibling=Ye,Ne=Ye);return e&&se.forEach(function(Zt){return n(B,Zt)}),ze&&ft(B,Ce),de}function ye(B,D,z,K){if(z==null)throw Error(f(151));for(var de=null,Ne=null,se=D,Ce=D=0,Ye=null,qe=z.next();se!==null&&!qe.done;Ce++,qe=z.next()){se.index>Ce?(Ye=se,se=null):Ye=se.sibling;var Zt=L(B,se,qe.value,K);if(Zt===null){se===null&&(se=Ye);break}e&&se&&Zt.alternate===null&&n(B,se),D=l(Zt,D,Ce),Ne===null?de=Zt:Ne.sibling=Zt,Ne=Zt,se=Ye}if(qe.done)return t(B,se),ze&&ft(B,Ce),de;if(se===null){for(;!qe.done;Ce++,qe=z.next())qe=Z(B,qe.value,K),qe!==null&&(D=l(qe,D,Ce),Ne===null?de=qe:Ne.sibling=qe,Ne=qe);return ze&&ft(B,Ce),de}for(se=i(se);!qe.done;Ce++,qe=z.next())qe=F(se,B,Ce,qe.value,K),qe!==null&&(e&&qe.alternate!==null&&se.delete(qe.key===null?Ce:qe.key),D=l(qe,D,Ce),Ne===null?de=qe:Ne.sibling=qe,Ne=qe);return e&&se.forEach(function(Ap){return n(B,Ap)}),ze&&ft(B,Ce),de}function Ve(B,D,z,K){if(typeof z=="object"&&z!==null&&z.type===J&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case O:e:{for(var de=z.key;D!==null;){if(D.key===de){if(de=z.type,de===J){if(D.tag===7){t(B,D.sibling),K=a(D,z.props.children),K.return=B,B=K;break e}}else if(D.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===xe&&ri(de)===D.type){t(B,D.sibling),K=a(D,z.props),ha(K,z),K.return=B,B=K;break e}t(B,D);break}else n(B,D);D=D.sibling}z.type===J?(K=ni(z.props.children,B.mode,K,z.key),K.return=B,B=K):(K=il(z.type,z.key,z.props,null,B.mode,K),ha(K,z),K.return=B,B=K)}return s(B);case Y:e:{for(de=z.key;D!==null;){if(D.key===de)if(D.tag===4&&D.stateNode.containerInfo===z.containerInfo&&D.stateNode.implementation===z.implementation){t(B,D.sibling),K=a(D,z.children||[]),K.return=B,B=K;break e}else{t(B,D);break}else n(B,D);D=D.sibling}K=Rr(z,B.mode,K),K.return=B,B=K}return s(B);case xe:return z=ri(z),Ve(B,D,z,K)}if(ke(z))return ue(B,D,z,K);if(fe(z)){if(de=fe(z),typeof de!="function")throw Error(f(150));return z=de.call(z),ye(B,D,z,K)}if(typeof z.then=="function")return Ve(B,D,sl(z),K);if(z.$$typeof===oe)return Ve(B,D,rl(B,z),K);fl(B,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,D!==null&&D.tag===6?(t(B,D.sibling),K=a(D,z),K.return=B,B=K):(t(B,D),K=Dr(z,B.mode,K),K.return=B,B=K),s(B)):t(B,D)}return function(B,D,z,K){try{pa=0;var de=Ve(B,D,z,K);return Yi=null,de}catch(se){if(se===Oi||se===ul)throw se;var Ne=Rn(29,se,null,B.mode);return Ne.lanes=K,Ne.return=B,Ne}}}var ui=Ec(!0),Cc=Ec(!1),Rt=!1;function Gr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vr(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Bt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ot(e,n,t){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Le&2)!==0){var a=i.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),i.pending=n,n=tl(e),uc(e,null,t),n}return nl(e,i,n,t),tl(e)}function ga(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,gu(e,t)}}function Qr(e,n){var t=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var a=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var s={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};l===null?a=l=s:l=l.next=s,t=t.next}while(t!==null);l===null?a=l=n:l=l.next=n}else a=l=n;t={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:i.shared,callbacks:i.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Xr=!1;function _a(){if(Xr){var e=Bi;if(e!==null)throw e}}function ya(e,n,t,i){Xr=!1;var a=e.updateQueue;Rt=!1;var l=a.firstBaseUpdate,s=a.lastBaseUpdate,y=a.shared.pending;if(y!==null){a.shared.pending=null;var T=y,N=T.next;T.next=null,s===null?l=N:s.next=N,s=T;var Q=e.alternate;Q!==null&&(Q=Q.updateQueue,y=Q.lastBaseUpdate,y!==s&&(y===null?Q.firstBaseUpdate=N:y.next=N,Q.lastBaseUpdate=T))}if(l!==null){var Z=a.baseState;s=0,Q=N=T=null,y=l;do{var L=y.lane&-536870913,F=L!==y.lane;if(F?(Oe&L)===L:(i&L)===L){L!==0&&L===Ri&&(Xr=!0),Q!==null&&(Q=Q.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var ue=e,ye=y;L=n;var Ve=t;switch(ye.tag){case 1:if(ue=ye.payload,typeof ue=="function"){Z=ue.call(Ve,Z,L);break e}Z=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ye.payload,L=typeof ue=="function"?ue.call(Ve,Z,L):ue,L==null)break e;Z=w({},Z,L);break e;case 2:Rt=!0}}L=y.callback,L!==null&&(e.flags|=64,F&&(e.flags|=8192),F=a.callbacks,F===null?a.callbacks=[L]:F.push(L))}else F={lane:L,tag:y.tag,payload:y.payload,callback:y.callback,next:null},Q===null?(N=Q=F,T=Z):Q=Q.next=F,s|=L;if(y=y.next,y===null){if(y=a.shared.pending,y===null)break;F=y,y=F.next,F.next=null,a.lastBaseUpdate=F,a.shared.pending=null}}while(!0);Q===null&&(T=Z),a.baseState=T,a.firstBaseUpdate=N,a.lastBaseUpdate=Q,l===null&&(a.shared.lanes=0),Lt|=s,e.lanes=s,e.memoizedState=Z}}function wc(e,n){if(typeof e!="function")throw Error(f(191,e));e.call(n)}function Mc(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)wc(t[e],n)}var zi=k(null),ml=k(0);function Tc(e,n){e=xt,P(ml,e),P(zi,n),xt=e|n.baseLanes}function Kr(){P(ml,xt),P(zi,zi.current)}function Zr(){xt=ml.current,G(zi),G(ml)}var Bn=k(null),Vn=null;function Yt(e){var n=e.alternate;P(Pe,Pe.current&1),P(Bn,e),Vn===null&&(n===null||zi.current!==null||n.memoizedState!==null)&&(Vn=e)}function Jr(e){P(Pe,Pe.current),P(Bn,e),Vn===null&&(Vn=e)}function kc(e){e.tag===22?(P(Pe,Pe.current),P(Bn,e),Vn===null&&(Vn=e)):zt()}function zt(){P(Pe,Pe.current),P(Bn,Bn.current)}function On(e){G(Bn),Vn===e&&(Vn=null),G(Pe)}var Pe=k(0);function dl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||tu(t)||iu(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var pt=0,Ee=null,Fe=null,an=null,pl=!1,Ni=!1,ci=!1,hl=0,va=0,qi=null,dd=0;function Ie(){throw Error(f(321))}function Ir(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Dn(e[t],n[t]))return!1;return!0}function Wr(e,n,t,i,a,l){return pt=l,Ee=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?ms:mo,ci=!1,l=t(i,a),ci=!1,Ni&&(l=Rc(n,t,i,a)),Dc(e),l}function Dc(e){U.H=xa;var n=Fe!==null&&Fe.next!==null;if(pt=0,an=Fe=Ee=null,pl=!1,va=0,qi=null,n)throw Error(f(300));e===null||ln||(e=e.dependencies,e!==null&&ll(e)&&(ln=!0))}function Rc(e,n,t,i){Ee=e;var a=0;do{if(Ni&&(qi=null),va=0,Ni=!1,25<=a)throw Error(f(301));if(a+=1,an=Fe=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}U.H=ds,l=n(t,i)}while(Ni);return l}function pd(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?ba(n):n,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(Ee.flags|=1024),n}function $r(){var e=hl!==0;return hl=0,e}function Pr(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function eo(e){if(pl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}pl=!1}pt=0,an=Fe=Ee=null,Ni=!1,va=hl=0,qi=null}function _n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?Ee.memoizedState=an=e:an=an.next=e,an}function en(){if(Fe===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var n=an===null?Ee.memoizedState:an.next;if(n!==null)an=n,Fe=e;else{if(e===null)throw Ee.alternate===null?Error(f(467)):Error(f(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},an===null?Ee.memoizedState=an=e:an=an.next=e}return an}function gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ba(e){var n=va;return va+=1,qi===null&&(qi=[]),e=Sc(qi,e,n),n=Ee,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?ms:mo),e}function _l(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ba(e);if(e.$$typeof===oe)return pn(e)}throw Error(f(438,String(e)))}function no(e){var n=null,t=Ee.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var i=Ee.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(n={data:i.data.map(function(a){return a.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=gl(),Ee.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),i=0;i<e;i++)t[i]=_e;return n.index++,t}function ht(e,n){return typeof n=="function"?n(e):n}function yl(e){var n=en();return to(n,Fe,e)}function to(e,n,t){var i=e.queue;if(i===null)throw Error(f(311));i.lastRenderedReducer=t;var a=e.baseQueue,l=i.pending;if(l!==null){if(a!==null){var s=a.next;a.next=l.next,l.next=s}n.baseQueue=a=l,i.pending=null}if(l=e.baseState,a===null)e.memoizedState=l;else{n=a.next;var y=s=null,T=null,N=n,Q=!1;do{var Z=N.lane&-536870913;if(Z!==N.lane?(Oe&Z)===Z:(pt&Z)===Z){var L=N.revertLane;if(L===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),Z===Ri&&(Q=!0);else if((pt&L)===L){N=N.next,L===Ri&&(Q=!0);continue}else Z={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},T===null?(y=T=Z,s=l):T=T.next=Z,Ee.lanes|=L,Lt|=L;Z=N.action,ci&&t(l,Z),l=N.hasEagerState?N.eagerState:t(l,Z)}else L={lane:Z,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},T===null?(y=T=L,s=l):T=T.next=L,Ee.lanes|=Z,Lt|=Z;N=N.next}while(N!==null&&N!==n);if(T===null?s=l:T.next=y,!Dn(l,e.memoizedState)&&(ln=!0,Q&&(t=Bi,t!==null)))throw t;e.memoizedState=l,e.baseState=s,e.baseQueue=T,i.lastRenderedState=l}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function io(e){var n=en(),t=n.queue;if(t===null)throw Error(f(311));t.lastRenderedReducer=e;var i=t.dispatch,a=t.pending,l=n.memoizedState;if(a!==null){t.pending=null;var s=a=a.next;do l=e(l,s.action),s=s.next;while(s!==a);Dn(l,n.memoizedState)||(ln=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,i]}function Bc(e,n,t){var i=Ee,a=en(),l=ze;if(l){if(t===void 0)throw Error(f(407));t=t()}else t=n();var s=!Dn((Fe||a).memoizedState,t);if(s&&(a.memoizedState=t,ln=!0),a=a.queue,ro(zc.bind(null,i,a,e),[e]),a.getSnapshot!==n||s||an!==null&&an.memoizedState.tag&1){if(i.flags|=2048,Li(9,{destroy:void 0},Yc.bind(null,i,a,t,n),null),Xe===null)throw Error(f(349));l||(pt&127)!==0||Oc(i,n,t)}return t}function Oc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Ee.updateQueue,n===null?(n=gl(),Ee.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Yc(e,n,t,i){n.value=t,n.getSnapshot=i,Nc(n)&&qc(e)}function zc(e,n,t){return t(function(){Nc(n)&&qc(e)})}function Nc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Dn(e,t)}catch{return!0}}function qc(e){var n=ei(e,2);n!==null&&wn(n,e,2)}function ao(e){var n=_n();if(typeof e=="function"){var t=e;if(e=t(),ci){V(!0);try{t()}finally{V(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ht,lastRenderedState:e},n}function Lc(e,n,t,i){return e.baseState=t,to(e,Fe,typeof i=="function"?i:ht)}function hd(e,n,t,i,a){if(Sl(e))throw Error(f(485));if(e=n.action,e!==null){var l={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};U.T!==null?t(!0):l.isTransition=!1,i(l),t=n.pending,t===null?(l.next=n.pending=l,jc(n,l)):(l.next=t.next,n.pending=t.next=l)}}function jc(e,n){var t=n.action,i=n.payload,a=e.state;if(n.isTransition){var l=U.T,s={};U.T=s;try{var y=t(a,i),T=U.S;T!==null&&T(s,y),Hc(e,n,y)}catch(N){lo(e,n,N)}finally{l!==null&&s.types!==null&&(l.types=s.types),U.T=l}}else try{l=t(a,i),Hc(e,n,l)}catch(N){lo(e,n,N)}}function Hc(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(i){Uc(e,n,i)},function(i){return lo(e,n,i)}):Uc(e,n,t)}function Uc(e,n,t){n.status="fulfilled",n.value=t,Fc(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,jc(e,t)))}function lo(e,n,t){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do n.status="rejected",n.reason=t,Fc(n),n=n.next;while(n!==i)}e.action=null}function Fc(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Gc(e,n){return n}function Vc(e,n){if(ze){var t=Xe.formState;if(t!==null){e:{var i=Ee;if(ze){if(Ke){n:{for(var a=Ke,l=Gn;a.nodeType!==8;){if(!l){a=null;break n}if(a=Qn(a.nextSibling),a===null){a=null;break n}}l=a.data,a=l==="F!"||l==="F"?a:null}if(a){Ke=Qn(a.nextSibling),i=a.data==="F!";break e}}kt(i)}i=!1}i&&(n=t[0])}}return t=_n(),t.memoizedState=t.baseState=n,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gc,lastRenderedState:n},t.queue=i,t=cs.bind(null,Ee,i),i.dispatch=t,i=ao(!1),l=fo.bind(null,Ee,!1,i.queue),i=_n(),a={state:n,dispatch:null,action:e,pending:null},i.queue=a,t=hd.bind(null,Ee,a,l,t),a.dispatch=t,i.memoizedState=e,[n,t,!1]}function Qc(e){var n=en();return Xc(n,Fe,e)}function Xc(e,n,t){if(n=to(e,n,Gc)[0],e=yl(ht)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var i=ba(n)}catch(s){throw s===Oi?ul:s}else i=n;n=en();var a=n.queue,l=a.dispatch;return t!==n.memoizedState&&(Ee.flags|=2048,Li(9,{destroy:void 0},gd.bind(null,a,t),null)),[i,l,e]}function gd(e,n){e.action=n}function Kc(e){var n=en(),t=Fe;if(t!==null)return Xc(n,t,e);en(),n=n.memoizedState,t=en();var i=t.queue.dispatch;return t.memoizedState=e,[n,i,!1]}function Li(e,n,t,i){return e={tag:e,create:t,deps:i,inst:n,next:null},n=Ee.updateQueue,n===null&&(n=gl(),Ee.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(i=t.next,t.next=e,e.next=i,n.lastEffect=e),e}function Zc(){return en().memoizedState}function vl(e,n,t,i){var a=_n();Ee.flags|=e,a.memoizedState=Li(1|n,{destroy:void 0},t,i===void 0?null:i)}function bl(e,n,t,i){var a=en();i=i===void 0?null:i;var l=a.memoizedState.inst;Fe!==null&&i!==null&&Ir(i,Fe.memoizedState.deps)?a.memoizedState=Li(n,l,t,i):(Ee.flags|=e,a.memoizedState=Li(1|n,l,t,i))}function Jc(e,n){vl(8390656,8,e,n)}function ro(e,n){bl(2048,8,e,n)}function _d(e){Ee.flags|=4;var n=Ee.updateQueue;if(n===null)n=gl(),Ee.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function Ic(e){var n=en().memoizedState;return _d({ref:n,nextImpl:e}),function(){if((Le&2)!==0)throw Error(f(440));return n.impl.apply(void 0,arguments)}}function Wc(e,n){return bl(4,2,e,n)}function $c(e,n){return bl(4,4,e,n)}function Pc(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function es(e,n,t){t=t!=null?t.concat([e]):null,bl(4,4,Pc.bind(null,n,e),t)}function oo(){}function ns(e,n){var t=en();n=n===void 0?null:n;var i=t.memoizedState;return n!==null&&Ir(n,i[1])?i[0]:(t.memoizedState=[e,n],e)}function ts(e,n){var t=en();n=n===void 0?null:n;var i=t.memoizedState;if(n!==null&&Ir(n,i[1]))return i[0];if(i=e(),ci){V(!0);try{e()}finally{V(!1)}}return t.memoizedState=[i,n],i}function uo(e,n,t){return t===void 0||(pt&1073741824)!==0&&(Oe&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=af(),Ee.lanes|=e,Lt|=e,t)}function is(e,n,t,i){return Dn(t,n)?t:zi.current!==null?(e=uo(e,t,i),Dn(e,n)||(ln=!0),e):(pt&42)===0||(pt&1073741824)!==0&&(Oe&261930)===0?(ln=!0,e.memoizedState=t):(e=af(),Ee.lanes|=e,Lt|=e,n)}function as(e,n,t,i,a){var l=ne.p;ne.p=l!==0&&8>l?l:8;var s=U.T,y={};U.T=y,fo(e,!1,n,t);try{var T=a(),N=U.S;if(N!==null&&N(y,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var Q=md(T,i);Sa(e,n,Q,Nn(e))}else Sa(e,n,i,Nn(e))}catch(Z){Sa(e,n,{then:function(){},status:"rejected",reason:Z},Nn())}finally{ne.p=l,s!==null&&y.types!==null&&(s.types=y.types),U.T=s}}function yd(){}function co(e,n,t,i){if(e.tag!==5)throw Error(f(476));var a=ls(e).queue;as(e,a,n,I,t===null?yd:function(){return rs(e),t(i)})}function ls(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ht,lastRenderedState:I},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ht,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function rs(e){var n=ls(e);n.next===null&&(n=e.alternate.memoizedState),Sa(e,n.next.queue,{},Nn())}function so(){return pn(La)}function os(){return en().memoizedState}function us(){return en().memoizedState}function vd(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=Nn();e=Bt(t);var i=Ot(n,e,t);i!==null&&(wn(i,n,t),ga(i,n,t)),n={cache:jr()},e.payload=n;return}n=n.return}}function bd(e,n,t){var i=Nn();t={lane:i,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Sl(e)?ss(n,t):(t=Tr(e,n,t,i),t!==null&&(wn(t,e,i),fs(t,n,i)))}function cs(e,n,t){var i=Nn();Sa(e,n,t,i)}function Sa(e,n,t,i){var a={lane:i,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Sl(e))ss(n,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var s=n.lastRenderedState,y=l(s,t);if(a.hasEagerState=!0,a.eagerState=y,Dn(y,s))return nl(e,n,a,0),Xe===null&&el(),!1}catch{}if(t=Tr(e,n,a,i),t!==null)return wn(t,e,i),fs(t,n,i),!0}return!1}function fo(e,n,t,i){if(i={lane:2,revertLane:Vo(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Sl(e)){if(n)throw Error(f(479))}else n=Tr(e,t,i,2),n!==null&&wn(n,e,2)}function Sl(e){var n=e.alternate;return e===Ee||n!==null&&n===Ee}function ss(e,n){Ni=pl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function fs(e,n,t){if((t&4194048)!==0){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,gu(e,t)}}var xa={readContext:pn,use:_l,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useLayoutEffect:Ie,useInsertionEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useSyncExternalStore:Ie,useId:Ie,useHostTransitionStatus:Ie,useFormState:Ie,useActionState:Ie,useOptimistic:Ie,useMemoCache:Ie,useCacheRefresh:Ie};xa.useEffectEvent=Ie;var ms={readContext:pn,use:_l,useCallback:function(e,n){return _n().memoizedState=[e,n===void 0?null:n],e},useContext:pn,useEffect:Jc,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,vl(4194308,4,Pc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return vl(4194308,4,e,n)},useInsertionEffect:function(e,n){vl(4,2,e,n)},useMemo:function(e,n){var t=_n();n=n===void 0?null:n;var i=e();if(ci){V(!0);try{e()}finally{V(!1)}}return t.memoizedState=[i,n],i},useReducer:function(e,n,t){var i=_n();if(t!==void 0){var a=t(n);if(ci){V(!0);try{t(n)}finally{V(!1)}}}else a=n;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=bd.bind(null,Ee,e),[i.memoizedState,e]},useRef:function(e){var n=_n();return e={current:e},n.memoizedState=e},useState:function(e){e=ao(e);var n=e.queue,t=cs.bind(null,Ee,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:oo,useDeferredValue:function(e,n){var t=_n();return uo(t,e,n)},useTransition:function(){var e=ao(!1);return e=as.bind(null,Ee,e.queue,!0,!1),_n().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var i=Ee,a=_n();if(ze){if(t===void 0)throw Error(f(407));t=t()}else{if(t=n(),Xe===null)throw Error(f(349));(Oe&127)!==0||Oc(i,n,t)}a.memoizedState=t;var l={value:t,getSnapshot:n};return a.queue=l,Jc(zc.bind(null,i,l,e),[e]),i.flags|=2048,Li(9,{destroy:void 0},Yc.bind(null,i,l,t,n),null),t},useId:function(){var e=_n(),n=Xe.identifierPrefix;if(ze){var t=nt,i=et;t=(i&~(1<<32-j(i)-1)).toString(32)+t,n="_"+n+"R_"+t,t=hl++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=dd++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:so,useFormState:Vc,useActionState:Vc,useOptimistic:function(e){var n=_n();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=fo.bind(null,Ee,!0,t),t.dispatch=n,[e,n]},useMemoCache:no,useCacheRefresh:function(){return _n().memoizedState=vd.bind(null,Ee)},useEffectEvent:function(e){var n=_n(),t={impl:e};return n.memoizedState=t,function(){if((Le&2)!==0)throw Error(f(440));return t.impl.apply(void 0,arguments)}}},mo={readContext:pn,use:_l,useCallback:ns,useContext:pn,useEffect:ro,useImperativeHandle:es,useInsertionEffect:Wc,useLayoutEffect:$c,useMemo:ts,useReducer:yl,useRef:Zc,useState:function(){return yl(ht)},useDebugValue:oo,useDeferredValue:function(e,n){var t=en();return is(t,Fe.memoizedState,e,n)},useTransition:function(){var e=yl(ht)[0],n=en().memoizedState;return[typeof e=="boolean"?e:ba(e),n]},useSyncExternalStore:Bc,useId:os,useHostTransitionStatus:so,useFormState:Qc,useActionState:Qc,useOptimistic:function(e,n){var t=en();return Lc(t,Fe,e,n)},useMemoCache:no,useCacheRefresh:us};mo.useEffectEvent=Ic;var ds={readContext:pn,use:_l,useCallback:ns,useContext:pn,useEffect:ro,useImperativeHandle:es,useInsertionEffect:Wc,useLayoutEffect:$c,useMemo:ts,useReducer:io,useRef:Zc,useState:function(){return io(ht)},useDebugValue:oo,useDeferredValue:function(e,n){var t=en();return Fe===null?uo(t,e,n):is(t,Fe.memoizedState,e,n)},useTransition:function(){var e=io(ht)[0],n=en().memoizedState;return[typeof e=="boolean"?e:ba(e),n]},useSyncExternalStore:Bc,useId:os,useHostTransitionStatus:so,useFormState:Kc,useActionState:Kc,useOptimistic:function(e,n){var t=en();return Fe!==null?Lc(t,Fe,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:no,useCacheRefresh:us};ds.useEffectEvent=Ic;function po(e,n,t,i){n=e.memoizedState,t=t(i,n),t=t==null?n:w({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ho={enqueueSetState:function(e,n,t){e=e._reactInternals;var i=Nn(),a=Bt(i);a.payload=n,t!=null&&(a.callback=t),n=Ot(e,a,i),n!==null&&(wn(n,e,i),ga(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var i=Nn(),a=Bt(i);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=Ot(e,a,i),n!==null&&(wn(n,e,i),ga(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Nn(),i=Bt(t);i.tag=2,n!=null&&(i.callback=n),n=Ot(e,i,t),n!==null&&(wn(n,e,t),ga(n,e,t))}};function ps(e,n,t,i,a,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,l,s):n.prototype&&n.prototype.isPureReactComponent?!ua(t,i)||!ua(a,l):!0}function hs(e,n,t,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,i),n.state!==e&&ho.enqueueReplaceState(n,n.state,null)}function si(e,n){var t=n;if("ref"in n){t={};for(var i in n)i!=="ref"&&(t[i]=n[i])}if(e=e.defaultProps){t===n&&(t=w({},t));for(var a in e)t[a]===void 0&&(t[a]=e[a])}return t}function gs(e){Pa(e)}function _s(e){console.error(e)}function ys(e){Pa(e)}function xl(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(i){setTimeout(function(){throw i})}}function vs(e,n,t){try{var i=e.onCaughtError;i(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function go(e,n,t){return t=Bt(t),t.tag=3,t.payload={element:null},t.callback=function(){xl(e,n)},t}function bs(e){return e=Bt(e),e.tag=3,e}function Ss(e,n,t,i){var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var l=i.value;e.payload=function(){return a(l)},e.callback=function(){vs(n,t,i)}}var s=t.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){vs(n,t,i),typeof a!="function"&&(jt===null?jt=new Set([this]):jt.add(this));var y=i.stack;this.componentDidCatch(i.value,{componentStack:y!==null?y:""})})}function Sd(e,n,t,i,a){if(t.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(n=t.alternate,n!==null&&Di(n,t,a,!0),t=Bn.current,t!==null){switch(t.tag){case 31:case 13:return Vn===null?Yl():t.alternate===null&&We===0&&(We=3),t.flags&=-257,t.flags|=65536,t.lanes=a,i===cl?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([i]):n.add(i),Uo(e,i,a)),!1;case 22:return t.flags|=65536,i===cl?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([i])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([i]):t.add(i)),Uo(e,i,a)),!1}throw Error(f(435,t.tag))}return Uo(e,i,a),Yl(),!1}if(ze)return n=Bn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=a,i!==Yr&&(e=Error(f(422),{cause:i}),fa(Hn(e,t)))):(i!==Yr&&(n=Error(f(423),{cause:i}),fa(Hn(n,t))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Hn(i,t),a=go(e.stateNode,i,a),Qr(e,a),We!==4&&(We=2)),!1;var l=Error(f(520),{cause:i});if(l=Hn(l,t),Da===null?Da=[l]:Da.push(l),We!==4&&(We=2),n===null)return!0;i=Hn(i,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=a&-a,t.lanes|=e,e=go(t.stateNode,i,e),Qr(t,e),!1;case 1:if(n=t.type,l=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(jt===null||!jt.has(l))))return t.flags|=65536,a&=-a,t.lanes|=a,a=bs(a),Ss(a,e,t,i),Qr(t,a),!1}t=t.return}while(t!==null);return!1}var _o=Error(f(461)),ln=!1;function hn(e,n,t,i){n.child=e===null?Cc(n,null,t,i):ui(n,e.child,t,i)}function xs(e,n,t,i,a){t=t.render;var l=n.ref;if("ref"in i){var s={};for(var y in i)y!=="ref"&&(s[y]=i[y])}else s=i;return ai(n),i=Wr(e,n,t,s,l,a),y=$r(),e!==null&&!ln?(Pr(e,n,a),gt(e,n,a)):(ze&&y&&Br(n),n.flags|=1,hn(e,n,i,a),n.child)}function As(e,n,t,i,a){if(e===null){var l=t.type;return typeof l=="function"&&!kr(l)&&l.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=l,Es(e,n,l,i,a)):(e=il(t.type,null,i,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!Co(e,a)){var s=l.memoizedProps;if(t=t.compare,t=t!==null?t:ua,t(s,i)&&e.ref===n.ref)return gt(e,n,a)}return n.flags|=1,e=st(l,i),e.ref=n.ref,e.return=n,n.child=e}function Es(e,n,t,i,a){if(e!==null){var l=e.memoizedProps;if(ua(l,i)&&e.ref===n.ref)if(ln=!1,n.pendingProps=i=l,Co(e,a))(e.flags&131072)!==0&&(ln=!0);else return n.lanes=e.lanes,gt(e,n,a)}return yo(e,n,t,i,a)}function Cs(e,n,t,i){var a=i.children,l=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((n.flags&128)!==0){if(l=l!==null?l.baseLanes|t:t,e!==null){for(i=n.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~l}else i=0,n.child=null;return ws(e,n,l,t,i)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ol(n,l!==null?l.cachePool:null),l!==null?Tc(n,l):Kr(),kc(n);else return i=n.lanes=536870912,ws(e,n,l!==null?l.baseLanes|t:t,t,i)}else l!==null?(ol(n,l.cachePool),Tc(n,l),zt(),n.memoizedState=null):(e!==null&&ol(n,null),Kr(),zt());return hn(e,n,a,t),n.child}function Aa(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ws(e,n,t,i,a){var l=Ur();return l=l===null?null:{parent:tn._currentValue,pool:l},n.memoizedState={baseLanes:t,cachePool:l},e!==null&&ol(n,null),Kr(),kc(n),e!==null&&Di(e,n,i,!0),n.childLanes=a,null}function Al(e,n){return n=Cl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Ms(e,n,t){return ui(n,e.child,null,t),e=Al(n,n.pendingProps),e.flags|=2,On(n),n.memoizedState=null,e}function xd(e,n,t){var i=n.pendingProps,a=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ze){if(i.mode==="hidden")return e=Al(n,i),n.lanes=536870912,Aa(null,e);if(Jr(n),(e=Ke)?(e=Hf(e,Gn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Mt!==null?{id:et,overflow:nt}:null,retryLane:536870912,hydrationErrors:null},t=sc(e),t.return=n,n.child=t,dn=n,Ke=null)):e=null,e===null)throw kt(n);return n.lanes=536870912,null}return Al(n,i)}var l=e.memoizedState;if(l!==null){var s=l.dehydrated;if(Jr(n),a)if(n.flags&256)n.flags&=-257,n=Ms(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(f(558));else if(ln||Di(e,n,t,!1),a=(t&e.childLanes)!==0,ln||a){if(i=Xe,i!==null&&(s=_u(i,t),s!==0&&s!==l.retryLane))throw l.retryLane=s,ei(e,s),wn(i,e,s),_o;Yl(),n=Ms(e,n,t)}else e=l.treeContext,Ke=Qn(s.nextSibling),dn=n,ze=!0,Tt=null,Gn=!1,e!==null&&dc(n,e),n=Al(n,i),n.flags|=4096;return n}return e=st(e.child,{mode:i.mode,children:i.children}),e.ref=n.ref,n.child=e,e.return=n,e}function El(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(f(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function yo(e,n,t,i,a){return ai(n),t=Wr(e,n,t,i,void 0,a),i=$r(),e!==null&&!ln?(Pr(e,n,a),gt(e,n,a)):(ze&&i&&Br(n),n.flags|=1,hn(e,n,t,a),n.child)}function Ts(e,n,t,i,a,l){return ai(n),n.updateQueue=null,t=Rc(n,i,t,a),Dc(e),i=$r(),e!==null&&!ln?(Pr(e,n,l),gt(e,n,l)):(ze&&i&&Br(n),n.flags|=1,hn(e,n,t,l),n.child)}function ks(e,n,t,i,a){if(ai(n),n.stateNode===null){var l=wi,s=t.contextType;typeof s=="object"&&s!==null&&(l=pn(s)),l=new t(i,l),n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=ho,n.stateNode=l,l._reactInternals=n,l=n.stateNode,l.props=i,l.state=n.memoizedState,l.refs={},Gr(n),s=t.contextType,l.context=typeof s=="object"&&s!==null?pn(s):wi,l.state=n.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(po(n,t,s,i),l.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&ho.enqueueReplaceState(l,l.state,null),ya(n,i,l,a),_a(),l.state=n.memoizedState),typeof l.componentDidMount=="function"&&(n.flags|=4194308),i=!0}else if(e===null){l=n.stateNode;var y=n.memoizedProps,T=si(t,y);l.props=T;var N=l.context,Q=t.contextType;s=wi,typeof Q=="object"&&Q!==null&&(s=pn(Q));var Z=t.getDerivedStateFromProps;Q=typeof Z=="function"||typeof l.getSnapshotBeforeUpdate=="function",y=n.pendingProps!==y,Q||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(y||N!==s)&&hs(n,l,i,s),Rt=!1;var L=n.memoizedState;l.state=L,ya(n,i,l,a),_a(),N=n.memoizedState,y||L!==N||Rt?(typeof Z=="function"&&(po(n,t,Z,i),N=n.memoizedState),(T=Rt||ps(n,t,T,i,L,N,s))?(Q||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=N),l.props=i,l.state=N,l.context=s,i=T):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{l=n.stateNode,Vr(e,n),s=n.memoizedProps,Q=si(t,s),l.props=Q,Z=n.pendingProps,L=l.context,N=t.contextType,T=wi,typeof N=="object"&&N!==null&&(T=pn(N)),y=t.getDerivedStateFromProps,(N=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==Z||L!==T)&&hs(n,l,i,T),Rt=!1,L=n.memoizedState,l.state=L,ya(n,i,l,a),_a();var F=n.memoizedState;s!==Z||L!==F||Rt||e!==null&&e.dependencies!==null&&ll(e.dependencies)?(typeof y=="function"&&(po(n,t,y,i),F=n.memoizedState),(Q=Rt||ps(n,t,Q,i,L,F,T)||e!==null&&e.dependencies!==null&&ll(e.dependencies))?(N||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,F,T),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,F,T)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&L===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&L===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=F),l.props=i,l.state=F,l.context=T,i=Q):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&L===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&L===e.memoizedState||(n.flags|=1024),i=!1)}return l=i,El(e,n),i=(n.flags&128)!==0,l||i?(l=n.stateNode,t=i&&typeof t.getDerivedStateFromError!="function"?null:l.render(),n.flags|=1,e!==null&&i?(n.child=ui(n,e.child,null,a),n.child=ui(n,null,t,a)):hn(e,n,t,a),n.memoizedState=l.state,e=n.child):e=gt(e,n,a),e}function Ds(e,n,t,i){return ti(),n.flags|=256,hn(e,n,t,i),n.child}var vo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bo(e){return{baseLanes:e,cachePool:vc()}}function So(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=zn),e}function Rs(e,n,t){var i=n.pendingProps,a=!1,l=(n.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(Pe.current&2)!==0),s&&(a=!0,n.flags&=-129),s=(n.flags&32)!==0,n.flags&=-33,e===null){if(ze){if(a?Yt(n):zt(),(e=Ke)?(e=Hf(e,Gn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Mt!==null?{id:et,overflow:nt}:null,retryLane:536870912,hydrationErrors:null},t=sc(e),t.return=n,n.child=t,dn=n,Ke=null)):e=null,e===null)throw kt(n);return iu(e)?n.lanes=32:n.lanes=536870912,null}var y=i.children;return i=i.fallback,a?(zt(),a=n.mode,y=Cl({mode:"hidden",children:y},a),i=ni(i,a,t,null),y.return=n,i.return=n,y.sibling=i,n.child=y,i=n.child,i.memoizedState=bo(t),i.childLanes=So(e,s,t),n.memoizedState=vo,Aa(null,i)):(Yt(n),xo(n,y))}var T=e.memoizedState;if(T!==null&&(y=T.dehydrated,y!==null)){if(l)n.flags&256?(Yt(n),n.flags&=-257,n=Ao(e,n,t)):n.memoizedState!==null?(zt(),n.child=e.child,n.flags|=128,n=null):(zt(),y=i.fallback,a=n.mode,i=Cl({mode:"visible",children:i.children},a),y=ni(y,a,t,null),y.flags|=2,i.return=n,y.return=n,i.sibling=y,n.child=i,ui(n,e.child,null,t),i=n.child,i.memoizedState=bo(t),i.childLanes=So(e,s,t),n.memoizedState=vo,n=Aa(null,i));else if(Yt(n),iu(y)){if(s=y.nextSibling&&y.nextSibling.dataset,s)var N=s.dgst;s=N,i=Error(f(419)),i.stack="",i.digest=s,fa({value:i,source:null,stack:null}),n=Ao(e,n,t)}else if(ln||Di(e,n,t,!1),s=(t&e.childLanes)!==0,ln||s){if(s=Xe,s!==null&&(i=_u(s,t),i!==0&&i!==T.retryLane))throw T.retryLane=i,ei(e,i),wn(s,e,i),_o;tu(y)||Yl(),n=Ao(e,n,t)}else tu(y)?(n.flags|=192,n.child=e.child,n=null):(e=T.treeContext,Ke=Qn(y.nextSibling),dn=n,ze=!0,Tt=null,Gn=!1,e!==null&&dc(n,e),n=xo(n,i.children),n.flags|=4096);return n}return a?(zt(),y=i.fallback,a=n.mode,T=e.child,N=T.sibling,i=st(T,{mode:"hidden",children:i.children}),i.subtreeFlags=T.subtreeFlags&65011712,N!==null?y=st(N,y):(y=ni(y,a,t,null),y.flags|=2),y.return=n,i.return=n,i.sibling=y,n.child=i,Aa(null,i),i=n.child,y=e.child.memoizedState,y===null?y=bo(t):(a=y.cachePool,a!==null?(T=tn._currentValue,a=a.parent!==T?{parent:T,pool:T}:a):a=vc(),y={baseLanes:y.baseLanes|t,cachePool:a}),i.memoizedState=y,i.childLanes=So(e,s,t),n.memoizedState=vo,Aa(e.child,i)):(Yt(n),t=e.child,e=t.sibling,t=st(t,{mode:"visible",children:i.children}),t.return=n,t.sibling=null,e!==null&&(s=n.deletions,s===null?(n.deletions=[e],n.flags|=16):s.push(e)),n.child=t,n.memoizedState=null,t)}function xo(e,n){return n=Cl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Cl(e,n){return e=Rn(22,e,null,n),e.lanes=0,e}function Ao(e,n,t){return ui(n,e.child,null,t),e=xo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Bs(e,n,t){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),qr(e.return,n,t)}function Eo(e,n,t,i,a,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:a,treeForkCount:l}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=a,s.treeForkCount=l)}function Os(e,n,t){var i=n.pendingProps,a=i.revealOrder,l=i.tail;i=i.children;var s=Pe.current,y=(s&2)!==0;if(y?(s=s&1|2,n.flags|=128):s&=1,P(Pe,s),hn(e,n,i,t),i=ze?sa:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bs(e,t,n);else if(e.tag===19)Bs(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&dl(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),Eo(n,!1,a,t,l,i);break;case"backwards":case"unstable_legacy-backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&dl(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}Eo(n,!0,t,null,l,i);break;case"together":Eo(n,!1,null,null,void 0,i);break;default:n.memoizedState=null}return n.child}function gt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Lt|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(Di(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(f(153));if(n.child!==null){for(e=n.child,t=st(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=st(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Co(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ll(e)))}function Ad(e,n,t){switch(n.tag){case 3:Qe(n,n.stateNode.containerInfo),Dt(n,tn,e.memoizedState.cache),ti();break;case 27:case 5:Mn(n);break;case 4:Qe(n,n.stateNode.containerInfo);break;case 10:Dt(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Jr(n),null;break;case 13:var i=n.memoizedState;if(i!==null)return i.dehydrated!==null?(Yt(n),n.flags|=128,null):(t&n.child.childLanes)!==0?Rs(e,n,t):(Yt(n),e=gt(e,n,t),e!==null?e.sibling:null);Yt(n);break;case 19:var a=(e.flags&128)!==0;if(i=(t&n.childLanes)!==0,i||(Di(e,n,t,!1),i=(t&n.childLanes)!==0),a){if(i)return Os(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),P(Pe,Pe.current),i)break;return null;case 22:return n.lanes=0,Cs(e,n,t,n.pendingProps);case 24:Dt(n,tn,e.memoizedState.cache)}return gt(e,n,t)}function Ys(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)ln=!0;else{if(!Co(e,t)&&(n.flags&128)===0)return ln=!1,Ad(e,n,t);ln=(e.flags&131072)!==0}else ln=!1,ze&&(n.flags&1048576)!==0&&mc(n,sa,n.index);switch(n.lanes=0,n.tag){case 16:e:{var i=n.pendingProps;if(e=ri(n.elementType),n.type=e,typeof e=="function")kr(e)?(i=si(e,i),n.tag=1,n=ks(null,n,e,i,t)):(n.tag=0,n=yo(null,n,e,i,t));else{if(e!=null){var a=e.$$typeof;if(a===ge){n.tag=11,n=xs(null,n,e,i,t);break e}else if(a===ie){n.tag=14,n=As(null,n,e,i,t);break e}}throw n=pe(e)||e,Error(f(306,n,""))}}return n;case 0:return yo(e,n,n.type,n.pendingProps,t);case 1:return i=n.type,a=si(i,n.pendingProps),ks(e,n,i,a,t);case 3:e:{if(Qe(n,n.stateNode.containerInfo),e===null)throw Error(f(387));i=n.pendingProps;var l=n.memoizedState;a=l.element,Vr(e,n),ya(n,i,null,t);var s=n.memoizedState;if(i=s.cache,Dt(n,tn,i),i!==l.cache&&Lr(n,[tn],t,!0),_a(),i=s.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:s.cache},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){n=Ds(e,n,i,t);break e}else if(i!==a){a=Hn(Error(f(424)),n),fa(a),n=Ds(e,n,i,t);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ke=Qn(e.firstChild),dn=n,ze=!0,Tt=null,Gn=!0,t=Cc(n,null,i,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ti(),i===a){n=gt(e,n,t);break e}hn(e,n,i,t)}n=n.child}return n;case 26:return El(e,n),e===null?(t=Xf(n.type,null,n.pendingProps,null))?n.memoizedState=t:ze||(t=n.type,e=n.pendingProps,i=Ul(ve.current).createElement(t),i[mn]=n,i[bn]=e,gn(i,t,e),un(i),n.stateNode=i):n.memoizedState=Xf(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Mn(n),e===null&&ze&&(i=n.stateNode=Gf(n.type,n.pendingProps,ve.current),dn=n,Gn=!0,a=Ke,Gt(n.type)?(au=a,Ke=Qn(i.firstChild)):Ke=a),hn(e,n,n.pendingProps.children,t),El(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ze&&((a=i=Ke)&&(i=Pd(i,n.type,n.pendingProps,Gn),i!==null?(n.stateNode=i,dn=n,Ke=Qn(i.firstChild),Gn=!1,a=!0):a=!1),a||kt(n)),Mn(n),a=n.type,l=n.pendingProps,s=e!==null?e.memoizedProps:null,i=l.children,Po(a,l)?i=null:s!==null&&Po(a,s)&&(n.flags|=32),n.memoizedState!==null&&(a=Wr(e,n,pd,null,null,t),La._currentValue=a),El(e,n),hn(e,n,i,t),n.child;case 6:return e===null&&ze&&((e=t=Ke)&&(t=ep(t,n.pendingProps,Gn),t!==null?(n.stateNode=t,dn=n,Ke=null,e=!0):e=!1),e||kt(n)),null;case 13:return Rs(e,n,t);case 4:return Qe(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=ui(n,null,i,t):hn(e,n,i,t),n.child;case 11:return xs(e,n,n.type,n.pendingProps,t);case 7:return hn(e,n,n.pendingProps,t),n.child;case 8:return hn(e,n,n.pendingProps.children,t),n.child;case 12:return hn(e,n,n.pendingProps.children,t),n.child;case 10:return i=n.pendingProps,Dt(n,n.type,i.value),hn(e,n,i.children,t),n.child;case 9:return a=n.type._context,i=n.pendingProps.children,ai(n),a=pn(a),i=i(a),n.flags|=1,hn(e,n,i,t),n.child;case 14:return As(e,n,n.type,n.pendingProps,t);case 15:return Es(e,n,n.type,n.pendingProps,t);case 19:return Os(e,n,t);case 31:return xd(e,n,t);case 22:return Cs(e,n,t,n.pendingProps);case 24:return ai(n),i=pn(tn),e===null?(a=Ur(),a===null&&(a=Xe,l=jr(),a.pooledCache=l,l.refCount++,l!==null&&(a.pooledCacheLanes|=t),a=l),n.memoizedState={parent:i,cache:a},Gr(n),Dt(n,tn,a)):((e.lanes&t)!==0&&(Vr(e,n),ya(n,null,null,t),_a()),a=e.memoizedState,l=n.memoizedState,a.parent!==i?(a={parent:i,cache:i},n.memoizedState=a,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=a),Dt(n,tn,i)):(i=l.cache,Dt(n,tn,i),i!==a.cache&&Lr(n,[tn],t,!0))),hn(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(f(156,n.tag))}function _t(e){e.flags|=4}function wo(e,n,t,i,a){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(uf())e.flags|=8192;else throw oi=cl,Fr}else e.flags&=-16777217}function zs(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(n))if(uf())e.flags|=8192;else throw oi=cl,Fr}function wl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?pu():536870912,e.lanes|=n,Fi|=n)}function Ea(e,n){if(!ze)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,i=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=t,n}function Ed(e,n,t){var i=n.pendingProps;switch(Or(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return t=n.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),dt(tn),je(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(ki(n)?_t(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zr())),Ze(n),null;case 26:var a=n.type,l=n.memoizedState;return e===null?(_t(n),l!==null?(Ze(n),zs(n,l)):(Ze(n),wo(n,a,null,i,t))):l?l!==e.memoizedState?(_t(n),Ze(n),zs(n,l)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==i&&_t(n),Ze(n),wo(n,a,e,i,t)),null;case 27:if(Kn(n),t=ve.current,a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&_t(n);else{if(!i){if(n.stateNode===null)throw Error(f(166));return Ze(n),null}e=le.current,ki(n)?pc(n):(e=Gf(a,i,t),n.stateNode=e,_t(n))}return Ze(n),null;case 5:if(Kn(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&_t(n);else{if(!i){if(n.stateNode===null)throw Error(f(166));return Ze(n),null}if(l=le.current,ki(n))pc(n);else{var s=Ul(ve.current);switch(l){case 1:l=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:l=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":l=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":l=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":l=s.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?l.multiple=!0:i.size&&(l.size=i.size);break;default:l=typeof i.is=="string"?s.createElement(a,{is:i.is}):s.createElement(a)}}l[mn]=n,l[bn]=i;e:for(s=n.child;s!==null;){if(s.tag===5||s.tag===6)l.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break e;for(;s.sibling===null;){if(s.return===null||s.return===n)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}n.stateNode=l;e:switch(gn(l,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&_t(n)}}return Ze(n),wo(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==i&&_t(n);else{if(typeof i!="string"&&n.stateNode===null)throw Error(f(166));if(e=ve.current,ki(n)){if(e=n.stateNode,t=n.memoizedProps,i=null,a=dn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[mn]=n,e=!!(e.nodeValue===t||i!==null&&i.suppressHydrationWarning===!0||Bf(e.nodeValue,t)),e||kt(n,!0)}else e=Ul(e).createTextNode(i),e[mn]=n,n.stateNode=e}return Ze(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(i=ki(n),t!==null){if(e===null){if(!i)throw Error(f(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(557));e[mn]=n}else ti(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else t=zr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(On(n),n):(On(n),null);if((n.flags&128)!==0)throw Error(f(558))}return Ze(n),null;case 13:if(i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ki(n),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(f(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(f(317));a[mn]=n}else ti(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),a=!1}else a=zr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return n.flags&256?(On(n),n):(On(n),null)}return On(n),(n.flags&128)!==0?(n.lanes=t,n):(t=i!==null,e=e!==null&&e.memoizedState!==null,t&&(i=n.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),wl(n,n.updateQueue),Ze(n),null);case 4:return je(),e===null&&Zo(n.stateNode.containerInfo),Ze(n),null;case 10:return dt(n.type),Ze(n),null;case 19:if(G(Pe),i=n.memoizedState,i===null)return Ze(n),null;if(a=(n.flags&128)!==0,l=i.rendering,l===null)if(a)Ea(i,!1);else{if(We!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(l=dl(e),l!==null){for(n.flags|=128,Ea(i,!1),e=l.updateQueue,n.updateQueue=e,wl(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)cc(t,e),t=t.sibling;return P(Pe,Pe.current&1|2),ze&&ft(n,i.treeForkCount),n.child}e=e.sibling}i.tail!==null&&nn()>Rl&&(n.flags|=128,a=!0,Ea(i,!1),n.lanes=4194304)}else{if(!a)if(e=dl(l),e!==null){if(n.flags|=128,a=!0,e=e.updateQueue,n.updateQueue=e,wl(n,e),Ea(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ze)return Ze(n),null}else 2*nn()-i.renderingStartTime>Rl&&t!==536870912&&(n.flags|=128,a=!0,Ea(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(e=i.last,e!==null?e.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=nn(),e.sibling=null,t=Pe.current,P(Pe,a?t&1|2:t&1),ze&&ft(n,i.treeForkCount),e):(Ze(n),null);case 22:case 23:return On(n),Zr(),i=n.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(n.flags|=8192):i&&(n.flags|=8192),i?(t&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),t=n.updateQueue,t!==null&&wl(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==t&&(n.flags|=2048),e!==null&&G(li),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),dt(tn),Ze(n),null;case 25:return null;case 30:return null}throw Error(f(156,n.tag))}function Cd(e,n){switch(Or(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return dt(tn),je(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Kn(n),null;case 31:if(n.memoizedState!==null){if(On(n),n.alternate===null)throw Error(f(340));ti()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(On(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(f(340));ti()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return G(Pe),null;case 4:return je(),null;case 10:return dt(n.type),null;case 22:case 23:return On(n),Zr(),e!==null&&G(li),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return dt(tn),null;case 25:return null;default:return null}}function Ns(e,n){switch(Or(n),n.tag){case 3:dt(tn),je();break;case 26:case 27:case 5:Kn(n);break;case 4:je();break;case 31:n.memoizedState!==null&&On(n);break;case 13:On(n);break;case 19:G(Pe);break;case 10:dt(n.type);break;case 22:case 23:On(n),Zr(),e!==null&&G(li);break;case 24:dt(tn)}}function Ca(e,n){try{var t=n.updateQueue,i=t!==null?t.lastEffect:null;if(i!==null){var a=i.next;t=a;do{if((t.tag&e)===e){i=void 0;var l=t.create,s=t.inst;i=l(),s.destroy=i}t=t.next}while(t!==a)}}catch(y){Ue(n,n.return,y)}}function Nt(e,n,t){try{var i=n.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var l=a.next;i=l;do{if((i.tag&e)===e){var s=i.inst,y=s.destroy;if(y!==void 0){s.destroy=void 0,a=n;var T=t,N=y;try{N()}catch(Q){Ue(a,T,Q)}}}i=i.next}while(i!==l)}}catch(Q){Ue(n,n.return,Q)}}function qs(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Mc(n,t)}catch(i){Ue(e,e.return,i)}}}function Ls(e,n,t){t.props=si(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(i){Ue(e,n,i)}}function wa(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof t=="function"?e.refCleanup=t(i):t.current=i}}catch(a){Ue(e,n,a)}}function tt(e,n){var t=e.ref,i=e.refCleanup;if(t!==null)if(typeof i=="function")try{i()}catch(a){Ue(e,n,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(a){Ue(e,n,a)}else t.current=null}function js(e){var n=e.type,t=e.memoizedProps,i=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&i.focus();break e;case"img":t.src?i.src=t.src:t.srcSet&&(i.srcset=t.srcSet)}}catch(a){Ue(e,e.return,a)}}function Mo(e,n,t){try{var i=e.stateNode;Kd(i,e.type,t,n),i[bn]=n}catch(a){Ue(e,e.return,a)}}function Hs(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Gt(e.type)||e.tag===4}function To(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Gt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ko(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ut));else if(i!==4&&(i===27&&Gt(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(ko(e,n,t),e=e.sibling;e!==null;)ko(e,n,t),e=e.sibling}function Ml(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(i!==4&&(i===27&&Gt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Ml(e,n,t),e=e.sibling;e!==null;)Ml(e,n,t),e=e.sibling}function Us(e){var n=e.stateNode,t=e.memoizedProps;try{for(var i=e.type,a=n.attributes;a.length;)n.removeAttributeNode(a[0]);gn(n,i,t),n[mn]=e,n[bn]=t}catch(l){Ue(e,e.return,l)}}var yt=!1,rn=!1,Do=!1,Fs=typeof WeakSet=="function"?WeakSet:Set,cn=null;function wd(e,n){if(e=e.containerInfo,Wo=Zl,e=ec(e),xr(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var a=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var s=0,y=-1,T=-1,N=0,Q=0,Z=e,L=null;n:for(;;){for(var F;Z!==t||a!==0&&Z.nodeType!==3||(y=s+a),Z!==l||i!==0&&Z.nodeType!==3||(T=s+i),Z.nodeType===3&&(s+=Z.nodeValue.length),(F=Z.firstChild)!==null;)L=Z,Z=F;for(;;){if(Z===e)break n;if(L===t&&++N===a&&(y=s),L===l&&++Q===i&&(T=s),(F=Z.nextSibling)!==null)break;Z=L,L=Z.parentNode}Z=F}t=y===-1||T===-1?null:{start:y,end:T}}else t=null}t=t||{start:0,end:0}}else t=null;for($o={focusedElem:e,selectionRange:t},Zl=!1,cn=n;cn!==null;)if(n=cn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,cn=e;else for(;cn!==null;){switch(n=cn,l=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)a=e[t],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,t=n,a=l.memoizedProps,l=l.memoizedState,i=t.stateNode;try{var ue=si(t.type,a);e=i.getSnapshotBeforeUpdate(ue,l),i.__reactInternalSnapshotBeforeUpdate=e}catch(ye){Ue(t,t.return,ye)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)nu(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":nu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(f(163))}if(e=n.sibling,e!==null){e.return=n.return,cn=e;break}cn=n.return}}function Gs(e,n,t){var i=t.flags;switch(t.tag){case 0:case 11:case 15:bt(e,t),i&4&&Ca(5,t);break;case 1:if(bt(e,t),i&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(s){Ue(t,t.return,s)}else{var a=si(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(a,n,e.__reactInternalSnapshotBeforeUpdate)}catch(s){Ue(t,t.return,s)}}i&64&&qs(t),i&512&&wa(t,t.return);break;case 3:if(bt(e,t),i&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Mc(e,n)}catch(s){Ue(t,t.return,s)}}break;case 27:n===null&&i&4&&Us(t);case 26:case 5:bt(e,t),n===null&&i&4&&js(t),i&512&&wa(t,t.return);break;case 12:bt(e,t);break;case 31:bt(e,t),i&4&&Xs(e,t);break;case 13:bt(e,t),i&4&&Ks(e,t),i&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=zd.bind(null,t),np(e,t))));break;case 22:if(i=t.memoizedState!==null||yt,!i){n=n!==null&&n.memoizedState!==null||rn,a=yt;var l=rn;yt=i,(rn=n)&&!l?St(e,t,(t.subtreeFlags&8772)!==0):bt(e,t),yt=a,rn=l}break;case 30:break;default:bt(e,t)}}function Vs(e){var n=e.alternate;n!==null&&(e.alternate=null,Vs(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&lr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,xn=!1;function vt(e,n,t){for(t=t.child;t!==null;)Qs(e,n,t),t=t.sibling}function Qs(e,n,t){if(q&&typeof q.onCommitFiberUnmount=="function")try{q.onCommitFiberUnmount(M,t)}catch{}switch(t.tag){case 26:rn||tt(t,n),vt(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:rn||tt(t,n);var i=Je,a=xn;Gt(t.type)&&(Je=t.stateNode,xn=!1),vt(e,n,t),za(t.stateNode),Je=i,xn=a;break;case 5:rn||tt(t,n);case 6:if(i=Je,a=xn,Je=null,vt(e,n,t),Je=i,xn=a,Je!==null)if(xn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(t.stateNode)}catch(l){Ue(t,n,l)}else try{Je.removeChild(t.stateNode)}catch(l){Ue(t,n,l)}break;case 18:Je!==null&&(xn?(e=Je,Lf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Ii(e)):Lf(Je,t.stateNode));break;case 4:i=Je,a=xn,Je=t.stateNode.containerInfo,xn=!0,vt(e,n,t),Je=i,xn=a;break;case 0:case 11:case 14:case 15:Nt(2,t,n),rn||Nt(4,t,n),vt(e,n,t);break;case 1:rn||(tt(t,n),i=t.stateNode,typeof i.componentWillUnmount=="function"&&Ls(t,n,i)),vt(e,n,t);break;case 21:vt(e,n,t);break;case 22:rn=(i=rn)||t.memoizedState!==null,vt(e,n,t),rn=i;break;default:vt(e,n,t)}}function Xs(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ii(e)}catch(t){Ue(n,n.return,t)}}}function Ks(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ii(e)}catch(t){Ue(n,n.return,t)}}function Md(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Fs),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Fs),n;default:throw Error(f(435,e.tag))}}function Tl(e,n){var t=Md(e);n.forEach(function(i){if(!t.has(i)){t.add(i);var a=Nd.bind(null,e,i);i.then(a,a)}})}function An(e,n){var t=n.deletions;if(t!==null)for(var i=0;i<t.length;i++){var a=t[i],l=e,s=n,y=s;e:for(;y!==null;){switch(y.tag){case 27:if(Gt(y.type)){Je=y.stateNode,xn=!1;break e}break;case 5:Je=y.stateNode,xn=!1;break e;case 3:case 4:Je=y.stateNode.containerInfo,xn=!0;break e}y=y.return}if(Je===null)throw Error(f(160));Qs(l,s,a),Je=null,xn=!1,l=a.alternate,l!==null&&(l.return=null),a.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Zs(n,e),n=n.sibling}var In=null;function Zs(e,n){var t=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:An(n,e),En(e),i&4&&(Nt(3,e,e.return),Ca(3,e),Nt(5,e,e.return));break;case 1:An(n,e),En(e),i&512&&(rn||t===null||tt(t,t.return)),i&64&&yt&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?i:t.concat(i))));break;case 26:var a=In;if(An(n,e),En(e),i&512&&(rn||t===null||tt(t,t.return)),i&4){var l=t!==null?t.memoizedState:null;if(i=e.memoizedState,t===null)if(i===null)if(e.stateNode===null){e:{i=e.type,t=e.memoizedProps,a=a.ownerDocument||a;n:switch(i){case"title":l=a.getElementsByTagName("title")[0],(!l||l[Pi]||l[mn]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=a.createElement(i),a.head.insertBefore(l,a.querySelector("head > title"))),gn(l,i,t),l[mn]=e,un(l),i=l;break e;case"link":var s=Jf("link","href",a).get(i+(t.href||""));if(s){for(var y=0;y<s.length;y++)if(l=s[y],l.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&l.getAttribute("rel")===(t.rel==null?null:t.rel)&&l.getAttribute("title")===(t.title==null?null:t.title)&&l.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){s.splice(y,1);break n}}l=a.createElement(i),gn(l,i,t),a.head.appendChild(l);break;case"meta":if(s=Jf("meta","content",a).get(i+(t.content||""))){for(y=0;y<s.length;y++)if(l=s[y],l.getAttribute("content")===(t.content==null?null:""+t.content)&&l.getAttribute("name")===(t.name==null?null:t.name)&&l.getAttribute("property")===(t.property==null?null:t.property)&&l.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&l.getAttribute("charset")===(t.charSet==null?null:t.charSet)){s.splice(y,1);break n}}l=a.createElement(i),gn(l,i,t),a.head.appendChild(l);break;default:throw Error(f(468,i))}l[mn]=e,un(l),i=l}e.stateNode=i}else If(a,e.type,e.stateNode);else e.stateNode=Zf(a,i,e.memoizedProps);else l!==i?(l===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):l.count--,i===null?If(a,e.type,e.stateNode):Zf(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Mo(e,e.memoizedProps,t.memoizedProps)}break;case 27:An(n,e),En(e),i&512&&(rn||t===null||tt(t,t.return)),t!==null&&i&4&&Mo(e,e.memoizedProps,t.memoizedProps);break;case 5:if(An(n,e),En(e),i&512&&(rn||t===null||tt(t,t.return)),e.flags&32){a=e.stateNode;try{vi(a,"")}catch(ue){Ue(e,e.return,ue)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,Mo(e,a,t!==null?t.memoizedProps:a)),i&1024&&(Do=!0);break;case 6:if(An(n,e),En(e),i&4){if(e.stateNode===null)throw Error(f(162));i=e.memoizedProps,t=e.stateNode;try{t.nodeValue=i}catch(ue){Ue(e,e.return,ue)}}break;case 3:if(Vl=null,a=In,In=Fl(n.containerInfo),An(n,e),In=a,En(e),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ii(n.containerInfo)}catch(ue){Ue(e,e.return,ue)}Do&&(Do=!1,Js(e));break;case 4:i=In,In=Fl(e.stateNode.containerInfo),An(n,e),En(e),In=i;break;case 12:An(n,e),En(e);break;case 31:An(n,e),En(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Tl(e,i)));break;case 13:An(n,e),En(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Dl=nn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Tl(e,i)));break;case 22:a=e.memoizedState!==null;var T=t!==null&&t.memoizedState!==null,N=yt,Q=rn;if(yt=N||a,rn=Q||T,An(n,e),rn=Q,yt=N,En(e),i&8192)e:for(n=e.stateNode,n._visibility=a?n._visibility&-2:n._visibility|1,a&&(t===null||T||yt||rn||fi(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){T=t=n;try{if(l=T.stateNode,a)s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{y=T.stateNode;var Z=T.memoizedProps.style,L=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;y.style.display=L==null||typeof L=="boolean"?"":(""+L).trim()}}catch(ue){Ue(T,T.return,ue)}}}else if(n.tag===6){if(t===null){T=n;try{T.stateNode.nodeValue=a?"":T.memoizedProps}catch(ue){Ue(T,T.return,ue)}}}else if(n.tag===18){if(t===null){T=n;try{var F=T.stateNode;a?jf(F,!0):jf(T.stateNode,!1)}catch(ue){Ue(T,T.return,ue)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}i&4&&(i=e.updateQueue,i!==null&&(t=i.retryQueue,t!==null&&(i.retryQueue=null,Tl(e,t))));break;case 19:An(n,e),En(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Tl(e,i)));break;case 30:break;case 21:break;default:An(n,e),En(e)}}function En(e){var n=e.flags;if(n&2){try{for(var t,i=e.return;i!==null;){if(Hs(i)){t=i;break}i=i.return}if(t==null)throw Error(f(160));switch(t.tag){case 27:var a=t.stateNode,l=To(e);Ml(e,l,a);break;case 5:var s=t.stateNode;t.flags&32&&(vi(s,""),t.flags&=-33);var y=To(e);Ml(e,y,s);break;case 3:case 4:var T=t.stateNode.containerInfo,N=To(e);ko(e,N,T);break;default:throw Error(f(161))}}catch(Q){Ue(e,e.return,Q)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Js(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Js(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function bt(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Gs(e,n.alternate,n),n=n.sibling}function fi(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Nt(4,n,n.return),fi(n);break;case 1:tt(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&Ls(n,n.return,t),fi(n);break;case 27:za(n.stateNode);case 26:case 5:tt(n,n.return),fi(n);break;case 22:n.memoizedState===null&&fi(n);break;case 30:fi(n);break;default:fi(n)}e=e.sibling}}function St(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var i=n.alternate,a=e,l=n,s=l.flags;switch(l.tag){case 0:case 11:case 15:St(a,l,t),Ca(4,l);break;case 1:if(St(a,l,t),i=l,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(N){Ue(i,i.return,N)}if(i=l,a=i.updateQueue,a!==null){var y=i.stateNode;try{var T=a.shared.hiddenCallbacks;if(T!==null)for(a.shared.hiddenCallbacks=null,a=0;a<T.length;a++)wc(T[a],y)}catch(N){Ue(i,i.return,N)}}t&&s&64&&qs(l),wa(l,l.return);break;case 27:Us(l);case 26:case 5:St(a,l,t),t&&i===null&&s&4&&js(l),wa(l,l.return);break;case 12:St(a,l,t);break;case 31:St(a,l,t),t&&s&4&&Xs(a,l);break;case 13:St(a,l,t),t&&s&4&&Ks(a,l);break;case 22:l.memoizedState===null&&St(a,l,t),wa(l,l.return);break;case 30:break;default:St(a,l,t)}n=n.sibling}}function Ro(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&ma(t))}function Bo(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ma(e))}function Wn(e,n,t,i){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Is(e,n,t,i),n=n.sibling}function Is(e,n,t,i){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Wn(e,n,t,i),a&2048&&Ca(9,n);break;case 1:Wn(e,n,t,i);break;case 3:Wn(e,n,t,i),a&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ma(e)));break;case 12:if(a&2048){Wn(e,n,t,i),e=n.stateNode;try{var l=n.memoizedProps,s=l.id,y=l.onPostCommit;typeof y=="function"&&y(s,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){Ue(n,n.return,T)}}else Wn(e,n,t,i);break;case 31:Wn(e,n,t,i);break;case 13:Wn(e,n,t,i);break;case 23:break;case 22:l=n.stateNode,s=n.alternate,n.memoizedState!==null?l._visibility&2?Wn(e,n,t,i):Ma(e,n):l._visibility&2?Wn(e,n,t,i):(l._visibility|=2,ji(e,n,t,i,(n.subtreeFlags&10256)!==0||!1)),a&2048&&Ro(s,n);break;case 24:Wn(e,n,t,i),a&2048&&Bo(n.alternate,n);break;default:Wn(e,n,t,i)}}function ji(e,n,t,i,a){for(a=a&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var l=e,s=n,y=t,T=i,N=s.flags;switch(s.tag){case 0:case 11:case 15:ji(l,s,y,T,a),Ca(8,s);break;case 23:break;case 22:var Q=s.stateNode;s.memoizedState!==null?Q._visibility&2?ji(l,s,y,T,a):Ma(l,s):(Q._visibility|=2,ji(l,s,y,T,a)),a&&N&2048&&Ro(s.alternate,s);break;case 24:ji(l,s,y,T,a),a&&N&2048&&Bo(s.alternate,s);break;default:ji(l,s,y,T,a)}n=n.sibling}}function Ma(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,i=n,a=i.flags;switch(i.tag){case 22:Ma(t,i),a&2048&&Ro(i.alternate,i);break;case 24:Ma(t,i),a&2048&&Bo(i.alternate,i);break;default:Ma(t,i)}n=n.sibling}}var Ta=8192;function Hi(e,n,t){if(e.subtreeFlags&Ta)for(e=e.child;e!==null;)Ws(e,n,t),e=e.sibling}function Ws(e,n,t){switch(e.tag){case 26:Hi(e,n,t),e.flags&Ta&&e.memoizedState!==null&&dp(t,In,e.memoizedState,e.memoizedProps);break;case 5:Hi(e,n,t);break;case 3:case 4:var i=In;In=Fl(e.stateNode.containerInfo),Hi(e,n,t),In=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ta,Ta=16777216,Hi(e,n,t),Ta=i):Hi(e,n,t));break;default:Hi(e,n,t)}}function $s(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ka(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var i=n[t];cn=i,ef(i,e)}$s(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ps(e),e=e.sibling}function Ps(e){switch(e.tag){case 0:case 11:case 15:ka(e),e.flags&2048&&Nt(9,e,e.return);break;case 3:ka(e);break;case 12:ka(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,kl(e)):ka(e);break;default:ka(e)}}function kl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var i=n[t];cn=i,ef(i,e)}$s(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Nt(8,n,n.return),kl(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,kl(n));break;default:kl(n)}e=e.sibling}}function ef(e,n){for(;cn!==null;){var t=cn;switch(t.tag){case 0:case 11:case 15:Nt(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var i=t.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ma(t.memoizedState.cache)}if(i=t.child,i!==null)i.return=t,cn=i;else e:for(t=e;cn!==null;){i=cn;var a=i.sibling,l=i.return;if(Vs(i),i===t){cn=null;break e}if(a!==null){a.return=l,cn=a;break e}cn=l}}}var Td={getCacheForType:function(e){var n=pn(tn),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return pn(tn).controller.signal}},kd=typeof WeakMap=="function"?WeakMap:Map,Le=0,Xe=null,De=null,Oe=0,He=0,Yn=null,qt=!1,Ui=!1,Oo=!1,xt=0,We=0,Lt=0,mi=0,Yo=0,zn=0,Fi=0,Da=null,Cn=null,zo=!1,Dl=0,nf=0,Rl=1/0,Bl=null,jt=null,on=0,Ht=null,Gi=null,At=0,No=0,qo=null,tf=null,Ra=0,Lo=null;function Nn(){return(Le&2)!==0&&Oe!==0?Oe&-Oe:U.T!==null?Vo():yu()}function af(){if(zn===0)if((Oe&536870912)===0||ze){var e=Se;Se<<=1,(Se&3932160)===0&&(Se=262144),zn=e}else zn=536870912;return e=Bn.current,e!==null&&(e.flags|=32),zn}function wn(e,n,t){(e===Xe&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(Vi(e,0),Ut(e,Oe,zn,!1)),$i(e,t),((Le&2)===0||e!==Xe)&&(e===Xe&&((Le&2)===0&&(mi|=t),We===4&&Ut(e,Oe,zn,!1)),it(e))}function lf(e,n,t){if((Le&6)!==0)throw Error(f(327));var i=!t&&(n&127)===0&&(n&e.expiredLanes)===0||Wi(e,n),a=i?Bd(e,n):Ho(e,n,!0),l=i;do{if(a===0){Ui&&!i&&Ut(e,n,0,!1);break}else{if(t=e.current.alternate,l&&!Dd(t)){a=Ho(e,n,!1),l=!1;continue}if(a===2){if(l=n,e.errorRecoveryDisabledLanes&l)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){n=s;e:{var y=e;a=Da;var T=y.current.memoizedState.isDehydrated;if(T&&(Vi(y,s).flags|=256),s=Ho(y,s,!1),s!==2){if(Oo&&!T){y.errorRecoveryDisabledLanes|=l,mi|=l,a=4;break e}l=Cn,Cn=a,l!==null&&(Cn===null?Cn=l:Cn.push.apply(Cn,l))}a=s}if(l=!1,a!==2)continue}}if(a===1){Vi(e,0),Ut(e,n,0,!0);break}e:{switch(i=e,l=a,l){case 0:case 1:throw Error(f(345));case 4:if((n&4194048)!==n)break;case 6:Ut(i,n,zn,!qt);break e;case 2:Cn=null;break;case 3:case 5:break;default:throw Error(f(329))}if((n&62914560)===n&&(a=Dl+300-nn(),10<a)){if(Ut(i,n,zn,!qt),Fa(i,0,!0)!==0)break e;At=n,i.timeoutHandle=Nf(rf.bind(null,i,t,Cn,Bl,zo,n,zn,mi,Fi,qt,l,"Throttled",-0,0),a);break e}rf(i,t,Cn,Bl,zo,n,zn,mi,Fi,qt,l,null,-0,0)}}break}while(!0);it(e)}function rf(e,n,t,i,a,l,s,y,T,N,Q,Z,L,F){if(e.timeoutHandle=-1,Z=n.subtreeFlags,Z&8192||(Z&16785408)===16785408){Z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ut},Ws(n,l,Z);var ue=(l&62914560)===l?Dl-nn():(l&4194048)===l?nf-nn():0;if(ue=pp(Z,ue),ue!==null){At=l,e.cancelPendingCommit=ue(pf.bind(null,e,n,l,t,i,a,s,y,T,Q,Z,null,L,F)),Ut(e,l,s,!N);return}}pf(e,n,l,t,i,a,s,y,T)}function Dd(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var i=0;i<t.length;i++){var a=t[i],l=a.getSnapshot;a=a.value;try{if(!Dn(l(),a))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ut(e,n,t,i){n&=~Yo,n&=~mi,e.suspendedLanes|=n,e.pingedLanes&=~n,i&&(e.warmLanes|=n),i=e.expirationTimes;for(var a=n;0<a;){var l=31-j(a),s=1<<l;i[l]=-1,a&=~s}t!==0&&hu(e,t,n)}function Ol(){return(Le&6)===0?(Ba(0),!1):!0}function jo(){if(De!==null){if(He===0)var e=De.return;else e=De,mt=ii=null,eo(e),Yi=null,pa=0,e=De;for(;e!==null;)Ns(e.alternate,e),e=e.return;De=null}}function Vi(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Id(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),At=0,jo(),Xe=e,De=t=st(e.current,null),Oe=n,He=0,Yn=null,qt=!1,Ui=Wi(e,n),Oo=!1,Fi=zn=Yo=mi=Lt=We=0,Cn=Da=null,zo=!1,(n&8)!==0&&(n|=n&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=n;0<i;){var a=31-j(i),l=1<<a;n|=e[a],i&=~l}return xt=n,el(),t}function of(e,n){Ee=null,U.H=xa,n===Oi||n===ul?(n=xc(),He=3):n===Fr?(n=xc(),He=4):He=n===_o?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,De===null&&(We=1,xl(e,Hn(n,e.current)))}function uf(){var e=Bn.current;return e===null?!0:(Oe&4194048)===Oe?Vn===null:(Oe&62914560)===Oe||(Oe&536870912)!==0?e===Vn:!1}function cf(){var e=U.H;return U.H=xa,e===null?xa:e}function sf(){var e=U.A;return U.A=Td,e}function Yl(){We=4,qt||(Oe&4194048)!==Oe&&Bn.current!==null||(Ui=!0),(Lt&134217727)===0&&(mi&134217727)===0||Xe===null||Ut(Xe,Oe,zn,!1)}function Ho(e,n,t){var i=Le;Le|=2;var a=cf(),l=sf();(Xe!==e||Oe!==n)&&(Bl=null,Vi(e,n)),n=!1;var s=We;e:do try{if(He!==0&&De!==null){var y=De,T=Yn;switch(He){case 8:jo(),s=6;break e;case 3:case 2:case 9:case 6:Bn.current===null&&(n=!0);var N=He;if(He=0,Yn=null,Qi(e,y,T,N),t&&Ui){s=0;break e}break;default:N=He,He=0,Yn=null,Qi(e,y,T,N)}}Rd(),s=We;break}catch(Q){of(e,Q)}while(!0);return n&&e.shellSuspendCounter++,mt=ii=null,Le=i,U.H=a,U.A=l,De===null&&(Xe=null,Oe=0,el()),s}function Rd(){for(;De!==null;)ff(De)}function Bd(e,n){var t=Le;Le|=2;var i=cf(),a=sf();Xe!==e||Oe!==n?(Bl=null,Rl=nn()+500,Vi(e,n)):Ui=Wi(e,n);e:do try{if(He!==0&&De!==null){n=De;var l=Yn;n:switch(He){case 1:He=0,Yn=null,Qi(e,n,l,1);break;case 2:case 9:if(bc(l)){He=0,Yn=null,mf(n);break}n=function(){He!==2&&He!==9||Xe!==e||(He=7),it(e)},l.then(n,n);break e;case 3:He=7;break e;case 4:He=5;break e;case 7:bc(l)?(He=0,Yn=null,mf(n)):(He=0,Yn=null,Qi(e,n,l,7));break;case 5:var s=null;switch(De.tag){case 26:s=De.memoizedState;case 5:case 27:var y=De;if(s?Wf(s):y.stateNode.complete){He=0,Yn=null;var T=y.sibling;if(T!==null)De=T;else{var N=y.return;N!==null?(De=N,zl(N)):De=null}break n}}He=0,Yn=null,Qi(e,n,l,5);break;case 6:He=0,Yn=null,Qi(e,n,l,6);break;case 8:jo(),We=6;break e;default:throw Error(f(462))}}Od();break}catch(Q){of(e,Q)}while(!0);return mt=ii=null,U.H=i,U.A=a,Le=t,De!==null?0:(Xe=null,Oe=0,el(),We)}function Od(){for(;De!==null&&!fn();)ff(De)}function ff(e){var n=Ys(e.alternate,e,xt);e.memoizedProps=e.pendingProps,n===null?zl(e):De=n}function mf(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Ts(t,n,n.pendingProps,n.type,void 0,Oe);break;case 11:n=Ts(t,n,n.pendingProps,n.type.render,n.ref,Oe);break;case 5:eo(n);default:Ns(t,n),n=De=cc(n,xt),n=Ys(t,n,xt)}e.memoizedProps=e.pendingProps,n===null?zl(e):De=n}function Qi(e,n,t,i){mt=ii=null,eo(n),Yi=null,pa=0;var a=n.return;try{if(Sd(e,a,n,t,Oe)){We=1,xl(e,Hn(t,e.current)),De=null;return}}catch(l){if(a!==null)throw De=a,l;We=1,xl(e,Hn(t,e.current)),De=null;return}n.flags&32768?(ze||i===1?e=!0:Ui||(Oe&536870912)!==0?e=!1:(qt=e=!0,(i===2||i===9||i===3||i===6)&&(i=Bn.current,i!==null&&i.tag===13&&(i.flags|=16384))),df(n,e)):zl(n)}function zl(e){var n=e;do{if((n.flags&32768)!==0){df(n,qt);return}e=n.return;var t=Ed(n.alternate,n,xt);if(t!==null){De=t;return}if(n=n.sibling,n!==null){De=n;return}De=n=e}while(n!==null);We===0&&(We=5)}function df(e,n){do{var t=Cd(e.alternate,e);if(t!==null){t.flags&=32767,De=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){De=e;return}De=e=t}while(e!==null);We=6,De=null}function pf(e,n,t,i,a,l,s,y,T){e.cancelPendingCommit=null;do Nl();while(on!==0);if((Le&6)!==0)throw Error(f(327));if(n!==null){if(n===e.current)throw Error(f(177));if(l=n.lanes|n.childLanes,l|=Mr,mm(e,t,l,s,y,T),e===Xe&&(De=Xe=null,Oe=0),Gi=n,Ht=e,At=t,No=l,qo=a,tf=i,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,qd(r,function(){return vf(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||i){i=U.T,U.T=null,a=ne.p,ne.p=2,s=Le,Le|=4;try{wd(e,n,t)}finally{Le=s,ne.p=a,U.T=i}}on=1,hf(),gf(),_f()}}function hf(){if(on===1){on=0;var e=Ht,n=Gi,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=U.T,U.T=null;var i=ne.p;ne.p=2;var a=Le;Le|=4;try{Zs(n,e);var l=$o,s=ec(e.containerInfo),y=l.focusedElem,T=l.selectionRange;if(s!==y&&y&&y.ownerDocument&&Pu(y.ownerDocument.documentElement,y)){if(T!==null&&xr(y)){var N=T.start,Q=T.end;if(Q===void 0&&(Q=N),"selectionStart"in y)y.selectionStart=N,y.selectionEnd=Math.min(Q,y.value.length);else{var Z=y.ownerDocument||document,L=Z&&Z.defaultView||window;if(L.getSelection){var F=L.getSelection(),ue=y.textContent.length,ye=Math.min(T.start,ue),Ve=T.end===void 0?ye:Math.min(T.end,ue);!F.extend&&ye>Ve&&(s=Ve,Ve=ye,ye=s);var B=$u(y,ye),D=$u(y,Ve);if(B&&D&&(F.rangeCount!==1||F.anchorNode!==B.node||F.anchorOffset!==B.offset||F.focusNode!==D.node||F.focusOffset!==D.offset)){var z=Z.createRange();z.setStart(B.node,B.offset),F.removeAllRanges(),ye>Ve?(F.addRange(z),F.extend(D.node,D.offset)):(z.setEnd(D.node,D.offset),F.addRange(z))}}}}for(Z=[],F=y;F=F.parentNode;)F.nodeType===1&&Z.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<Z.length;y++){var K=Z[y];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Zl=!!Wo,$o=Wo=null}finally{Le=a,ne.p=i,U.T=t}}e.current=n,on=2}}function gf(){if(on===2){on=0;var e=Ht,n=Gi,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=U.T,U.T=null;var i=ne.p;ne.p=2;var a=Le;Le|=4;try{Gs(e,n.alternate,n)}finally{Le=a,ne.p=i,U.T=t}}on=3}}function _f(){if(on===4||on===3){on=0,rt();var e=Ht,n=Gi,t=At,i=tf;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?on=5:(on=0,Gi=Ht=null,yf(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(jt=null),ir(t),n=n.stateNode,q&&typeof q.onCommitFiberRoot=="function")try{q.onCommitFiberRoot(M,n,void 0,(n.current.flags&128)===128)}catch{}if(i!==null){n=U.T,a=ne.p,ne.p=2,U.T=null;try{for(var l=e.onRecoverableError,s=0;s<i.length;s++){var y=i[s];l(y.value,{componentStack:y.stack})}}finally{U.T=n,ne.p=a}}(At&3)!==0&&Nl(),it(e),a=e.pendingLanes,(t&261930)!==0&&(a&42)!==0?e===Lo?Ra++:(Ra=0,Lo=e):Ra=0,Ba(0)}}function yf(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ma(n)))}function Nl(){return hf(),gf(),_f(),vf()}function vf(){if(on!==5)return!1;var e=Ht,n=No;No=0;var t=ir(At),i=U.T,a=ne.p;try{ne.p=32>t?32:t,U.T=null,t=qo,qo=null;var l=Ht,s=At;if(on=0,Gi=Ht=null,At=0,(Le&6)!==0)throw Error(f(331));var y=Le;if(Le|=4,Ps(l.current),Is(l,l.current,s,t),Le=y,Ba(0,!1),q&&typeof q.onPostCommitFiberRoot=="function")try{q.onPostCommitFiberRoot(M,l)}catch{}return!0}finally{ne.p=a,U.T=i,yf(e,n)}}function bf(e,n,t){n=Hn(t,n),n=go(e.stateNode,n,2),e=Ot(e,n,2),e!==null&&($i(e,2),it(e))}function Ue(e,n,t){if(e.tag===3)bf(e,e,t);else for(;n!==null;){if(n.tag===3){bf(n,e,t);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(jt===null||!jt.has(i))){e=Hn(t,e),t=bs(2),i=Ot(n,t,2),i!==null&&(Ss(t,i,n,e),$i(i,2),it(i));break}}n=n.return}}function Uo(e,n,t){var i=e.pingCache;if(i===null){i=e.pingCache=new kd;var a=new Set;i.set(n,a)}else a=i.get(n),a===void 0&&(a=new Set,i.set(n,a));a.has(t)||(Oo=!0,a.add(t),e=Yd.bind(null,e,n,t),n.then(e,e))}function Yd(e,n,t){var i=e.pingCache;i!==null&&i.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Xe===e&&(Oe&t)===t&&(We===4||We===3&&(Oe&62914560)===Oe&&300>nn()-Dl?(Le&2)===0&&Vi(e,0):Yo|=t,Fi===Oe&&(Fi=0)),it(e)}function Sf(e,n){n===0&&(n=pu()),e=ei(e,n),e!==null&&($i(e,n),it(e))}function zd(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Sf(e,t)}function Nd(e,n){var t=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(f(314))}i!==null&&i.delete(n),Sf(e,t)}function qd(e,n){return Zn(e,n)}var ql=null,Xi=null,Fo=!1,Ll=!1,Go=!1,Ft=0;function it(e){e!==Xi&&e.next===null&&(Xi===null?ql=Xi=e:Xi=Xi.next=e),Ll=!0,Fo||(Fo=!0,jd())}function Ba(e,n){if(!Go&&Ll){Go=!0;do for(var t=!1,i=ql;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var l=0;else{var s=i.suspendedLanes,y=i.pingedLanes;l=(1<<31-j(42|e)+1)-1,l&=a&~(s&~y),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(t=!0,Cf(i,l))}else l=Oe,l=Fa(i,i===Xe?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(l&3)===0||Wi(i,l)||(t=!0,Cf(i,l));i=i.next}while(t);Go=!1}}function Ld(){xf()}function xf(){Ll=Fo=!1;var e=0;Ft!==0&&Jd()&&(e=Ft);for(var n=nn(),t=null,i=ql;i!==null;){var a=i.next,l=Af(i,n);l===0?(i.next=null,t===null?ql=a:t.next=a,a===null&&(Xi=t)):(t=i,(e!==0||(l&3)!==0)&&(Ll=!0)),i=a}on!==0&&on!==5||Ba(e),Ft!==0&&(Ft=0)}function Af(e,n){for(var t=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var s=31-j(l),y=1<<s,T=a[s];T===-1?((y&t)===0||(y&i)!==0)&&(a[s]=fm(y,n)):T<=n&&(e.expiredLanes|=y),l&=~y}if(n=Xe,t=Oe,t=Fa(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,t===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&kn(i),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Wi(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(i!==null&&kn(i),ir(t)){case 2:case 8:t=m;break;case 32:t=r;break;case 268435456:t=c;break;default:t=r}return i=Ef.bind(null,e),t=Zn(t,i),e.callbackPriority=n,e.callbackNode=t,n}return i!==null&&i!==null&&kn(i),e.callbackPriority=2,e.callbackNode=null,2}function Ef(e,n){if(on!==0&&on!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Nl()&&e.callbackNode!==t)return null;var i=Oe;return i=Fa(e,e===Xe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(lf(e,i,n),Af(e,nn()),e.callbackNode!=null&&e.callbackNode===t?Ef.bind(null,e):null)}function Cf(e,n){if(Nl())return null;lf(e,n,!0)}function jd(){Wd(function(){(Le&6)!==0?Zn(H,Ld):xf()})}function Vo(){if(Ft===0){var e=Ri;e===0&&(e=Te,Te<<=1,(Te&261888)===0&&(Te=256)),Ft=e}return Ft}function wf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xa(""+e)}function Mf(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function Hd(e,n,t,i,a){if(n==="submit"&&t&&t.stateNode===a){var l=wf((a[bn]||null).action),s=i.submitter;s&&(n=(n=s[bn]||null)?wf(n.formAction):s.getAttribute("formAction"),n!==null&&(l=n,s=null));var y=new Ia("action","action",null,i,a);e.push({event:y,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ft!==0){var T=s?Mf(a,s):new FormData(a);co(t,{pending:!0,data:T,method:a.method,action:l},null,T)}}else typeof l=="function"&&(y.preventDefault(),T=s?Mf(a,s):new FormData(a),co(t,{pending:!0,data:T,method:a.method,action:l},l,T))},currentTarget:a}]})}}for(var Qo=0;Qo<wr.length;Qo++){var Xo=wr[Qo],Ud=Xo.toLowerCase(),Fd=Xo[0].toUpperCase()+Xo.slice(1);Jn(Ud,"on"+Fd)}Jn(ic,"onAnimationEnd"),Jn(ac,"onAnimationIteration"),Jn(lc,"onAnimationStart"),Jn("dblclick","onDoubleClick"),Jn("focusin","onFocus"),Jn("focusout","onBlur"),Jn(ad,"onTransitionRun"),Jn(ld,"onTransitionStart"),Jn(rd,"onTransitionCancel"),Jn(rc,"onTransitionEnd"),_i("onMouseEnter",["mouseout","mouseover"]),_i("onMouseLeave",["mouseout","mouseover"]),_i("onPointerEnter",["pointerout","pointerover"]),_i("onPointerLeave",["pointerout","pointerover"]),It("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),It("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),It("onBeforeInput",["compositionend","keypress","textInput","paste"]),It("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),It("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),It("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gd=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oa));function Tf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var i=e[t],a=i.event;i=i.listeners;e:{var l=void 0;if(n)for(var s=i.length-1;0<=s;s--){var y=i[s],T=y.instance,N=y.currentTarget;if(y=y.listener,T!==l&&a.isPropagationStopped())break e;l=y,a.currentTarget=N;try{l(a)}catch(Q){Pa(Q)}a.currentTarget=null,l=T}else for(s=0;s<i.length;s++){if(y=i[s],T=y.instance,N=y.currentTarget,y=y.listener,T!==l&&a.isPropagationStopped())break e;l=y,a.currentTarget=N;try{l(a)}catch(Q){Pa(Q)}a.currentTarget=null,l=T}}}}function Re(e,n){var t=n[ar];t===void 0&&(t=n[ar]=new Set);var i=e+"__bubble";t.has(i)||(kf(n,e,2,!1),t.add(i))}function Ko(e,n,t){var i=0;n&&(i|=4),kf(t,e,i,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Zo(e){if(!e[jl]){e[jl]=!0,Su.forEach(function(t){t!=="selectionchange"&&(Gd.has(t)||Ko(t,!1,e),Ko(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[jl]||(n[jl]=!0,Ko("selectionchange",!1,n))}}function kf(e,n,t,i){switch(am(n)){case 2:var a=_p;break;case 8:a=yp;break;default:a=cu}t=a.bind(null,n,t,e),a=void 0,!dr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function Jo(e,n,t,i,a){var l=i;if((n&1)===0&&(n&2)===0&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var y=i.stateNode.containerInfo;if(y===a)break;if(s===4)for(s=i.return;s!==null;){var T=s.tag;if((T===3||T===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;y!==null;){if(s=pi(y),s===null)return;if(T=s.tag,T===5||T===6||T===26||T===27){i=l=s;continue e}y=y.parentNode}}i=i.return}Ou(function(){var N=l,Q=fr(t),Z=[];e:{var L=oc.get(e);if(L!==void 0){var F=Ia,ue=e;switch(e){case"keypress":if(Za(t)===0)break e;case"keydown":case"keyup":F=Nm;break;case"focusin":ue="focus",F=_r;break;case"focusout":ue="blur",F=_r;break;case"beforeblur":case"afterblur":F=_r;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Nu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=Em;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=jm;break;case ic:case ac:case lc:F=Mm;break;case rc:F=Um;break;case"scroll":case"scrollend":F=xm;break;case"wheel":F=Gm;break;case"copy":case"cut":case"paste":F=km;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Lu;break;case"toggle":case"beforetoggle":F=Qm}var ye=(n&4)!==0,Ve=!ye&&(e==="scroll"||e==="scrollend"),B=ye?L!==null?L+"Capture":null:L;ye=[];for(var D=N,z;D!==null;){var K=D;if(z=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||z===null||B===null||(K=na(D,B),K!=null&&ye.push(Ya(D,K,z))),Ve)break;D=D.return}0<ye.length&&(L=new F(L,ue,null,t,Q),Z.push({event:L,listeners:ye}))}}if((n&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",F=e==="mouseout"||e==="pointerout",L&&t!==sr&&(ue=t.relatedTarget||t.fromElement)&&(pi(ue)||ue[di]))break e;if((F||L)&&(L=Q.window===Q?Q:(L=Q.ownerDocument)?L.defaultView||L.parentWindow:window,F?(ue=t.relatedTarget||t.toElement,F=N,ue=ue?pi(ue):null,ue!==null&&(Ve=x(ue),ye=ue.tag,ue!==Ve||ye!==5&&ye!==27&&ye!==6)&&(ue=null)):(F=null,ue=N),F!==ue)){if(ye=Nu,K="onMouseLeave",B="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(ye=Lu,K="onPointerLeave",B="onPointerEnter",D="pointer"),Ve=F==null?L:ea(F),z=ue==null?L:ea(ue),L=new ye(K,D+"leave",F,t,Q),L.target=Ve,L.relatedTarget=z,K=null,pi(Q)===N&&(ye=new ye(B,D+"enter",ue,t,Q),ye.target=z,ye.relatedTarget=Ve,K=ye),Ve=K,F&&ue)n:{for(ye=Vd,B=F,D=ue,z=0,K=B;K;K=ye(K))z++;K=0;for(var de=D;de;de=ye(de))K++;for(;0<z-K;)B=ye(B),z--;for(;0<K-z;)D=ye(D),K--;for(;z--;){if(B===D||D!==null&&B===D.alternate){ye=B;break n}B=ye(B),D=ye(D)}ye=null}else ye=null;F!==null&&Df(Z,L,F,ye,!1),ue!==null&&Ve!==null&&Df(Z,Ve,ue,ye,!0)}}e:{if(L=N?ea(N):window,F=L.nodeName&&L.nodeName.toLowerCase(),F==="select"||F==="input"&&L.type==="file")var Ne=Xu;else if(Vu(L))if(Ku)Ne=nd;else{Ne=Pm;var se=$m}else F=L.nodeName,!F||F.toLowerCase()!=="input"||L.type!=="checkbox"&&L.type!=="radio"?N&&cr(N.elementType)&&(Ne=Xu):Ne=ed;if(Ne&&(Ne=Ne(e,N))){Qu(Z,Ne,t,Q);break e}se&&se(e,L,N),e==="focusout"&&N&&L.type==="number"&&N.memoizedProps.value!=null&&ur(L,"number",L.value)}switch(se=N?ea(N):window,e){case"focusin":(Vu(se)||se.contentEditable==="true")&&(Ai=se,Ar=N,ca=null);break;case"focusout":ca=Ar=Ai=null;break;case"mousedown":Er=!0;break;case"contextmenu":case"mouseup":case"dragend":Er=!1,nc(Z,t,Q);break;case"selectionchange":if(id)break;case"keydown":case"keyup":nc(Z,t,Q)}var Ce;if(vr)e:{switch(e){case"compositionstart":var Ye="onCompositionStart";break e;case"compositionend":Ye="onCompositionEnd";break e;case"compositionupdate":Ye="onCompositionUpdate";break e}Ye=void 0}else xi?Fu(e,t)&&(Ye="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Ye="onCompositionStart");Ye&&(ju&&t.locale!=="ko"&&(xi||Ye!=="onCompositionStart"?Ye==="onCompositionEnd"&&xi&&(Ce=Yu()):(wt=Q,pr="value"in wt?wt.value:wt.textContent,xi=!0)),se=Hl(N,Ye),0<se.length&&(Ye=new qu(Ye,e,null,t,Q),Z.push({event:Ye,listeners:se}),Ce?Ye.data=Ce:(Ce=Gu(t),Ce!==null&&(Ye.data=Ce)))),(Ce=Km?Zm(e,t):Jm(e,t))&&(Ye=Hl(N,"onBeforeInput"),0<Ye.length&&(se=new qu("onBeforeInput","beforeinput",null,t,Q),Z.push({event:se,listeners:Ye}),se.data=Ce)),Hd(Z,e,N,t,Q)}Tf(Z,n)})}function Ya(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Hl(e,n){for(var t=n+"Capture",i=[];e!==null;){var a=e,l=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||l===null||(a=na(e,t),a!=null&&i.unshift(Ya(e,a,l)),a=na(e,n),a!=null&&i.push(Ya(e,a,l))),e.tag===3)return i;e=e.return}return[]}function Vd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Df(e,n,t,i,a){for(var l=n._reactName,s=[];t!==null&&t!==i;){var y=t,T=y.alternate,N=y.stateNode;if(y=y.tag,T!==null&&T===i)break;y!==5&&y!==26&&y!==27||N===null||(T=N,a?(N=na(t,l),N!=null&&s.unshift(Ya(t,N,T))):a||(N=na(t,l),N!=null&&s.push(Ya(t,N,T)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var Qd=/\r\n?/g,Xd=/\u0000|\uFFFD/g;function Rf(e){return(typeof e=="string"?e:""+e).replace(Qd,`
`).replace(Xd,"")}function Bf(e,n){return n=Rf(n),Rf(e)===n}function Ge(e,n,t,i,a,l){switch(t){case"children":typeof i=="string"?n==="body"||n==="textarea"&&i===""||vi(e,i):(typeof i=="number"||typeof i=="bigint")&&n!=="body"&&vi(e,""+i);break;case"className":Va(e,"class",i);break;case"tabIndex":Va(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Va(e,t,i);break;case"style":Ru(e,i,l);break;case"data":if(n!=="object"){Va(e,"data",i);break}case"src":case"href":if(i===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(t);break}i=Xa(""+i),e.setAttribute(t,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(t==="formAction"?(n!=="input"&&Ge(e,n,"name",a.name,a,null),Ge(e,n,"formEncType",a.formEncType,a,null),Ge(e,n,"formMethod",a.formMethod,a,null),Ge(e,n,"formTarget",a.formTarget,a,null)):(Ge(e,n,"encType",a.encType,a,null),Ge(e,n,"method",a.method,a,null),Ge(e,n,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(t);break}i=Xa(""+i),e.setAttribute(t,i);break;case"onClick":i!=null&&(e.onclick=ut);break;case"onScroll":i!=null&&Re("scroll",e);break;case"onScrollEnd":i!=null&&Re("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(f(61));if(t=i.__html,t!=null){if(a.children!=null)throw Error(f(60));e.innerHTML=t}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}t=Xa(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(t,""+i):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":i===!0?e.setAttribute(t,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(t,i):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(t,i):e.removeAttribute(t);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(t):e.setAttribute(t,i);break;case"popover":Re("beforetoggle",e),Re("toggle",e),Ga(e,"popover",i);break;case"xlinkActuate":ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ot(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ot(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ot(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ot(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ga(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=bm.get(t)||t,Ga(e,t,i))}}function Io(e,n,t,i,a,l){switch(t){case"style":Ru(e,i,l);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(f(61));if(t=i.__html,t!=null){if(a.children!=null)throw Error(f(60));e.innerHTML=t}}break;case"children":typeof i=="string"?vi(e,i):(typeof i=="number"||typeof i=="bigint")&&vi(e,""+i);break;case"onScroll":i!=null&&Re("scroll",e);break;case"onScrollEnd":i!=null&&Re("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ut);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xu.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(a=t.endsWith("Capture"),n=t.slice(2,a?t.length-7:void 0),l=e[bn]||null,l=l!=null?l[t]:null,typeof l=="function"&&e.removeEventListener(n,l,a),typeof i=="function")){typeof l!="function"&&l!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,i,a);break e}t in e?e[t]=i:i===!0?e.setAttribute(t,""):Ga(e,t,i)}}}function gn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Re("error",e),Re("load",e);var i=!1,a=!1,l;for(l in t)if(t.hasOwnProperty(l)){var s=t[l];if(s!=null)switch(l){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,n));default:Ge(e,n,l,s,t,null)}}a&&Ge(e,n,"srcSet",t.srcSet,t,null),i&&Ge(e,n,"src",t.src,t,null);return;case"input":Re("invalid",e);var y=l=s=a=null,T=null,N=null;for(i in t)if(t.hasOwnProperty(i)){var Q=t[i];if(Q!=null)switch(i){case"name":a=Q;break;case"type":s=Q;break;case"checked":T=Q;break;case"defaultChecked":N=Q;break;case"value":l=Q;break;case"defaultValue":y=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(f(137,n));break;default:Ge(e,n,i,Q,t,null)}}Mu(e,l,y,T,N,s,a,!1);return;case"select":Re("invalid",e),i=s=l=null;for(a in t)if(t.hasOwnProperty(a)&&(y=t[a],y!=null))switch(a){case"value":l=y;break;case"defaultValue":s=y;break;case"multiple":i=y;default:Ge(e,n,a,y,t,null)}n=l,t=s,e.multiple=!!i,n!=null?yi(e,!!i,n,!1):t!=null&&yi(e,!!i,t,!0);return;case"textarea":Re("invalid",e),l=a=i=null;for(s in t)if(t.hasOwnProperty(s)&&(y=t[s],y!=null))switch(s){case"value":i=y;break;case"defaultValue":a=y;break;case"children":l=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(f(91));break;default:Ge(e,n,s,y,t,null)}ku(e,i,a,l);return;case"option":for(T in t)t.hasOwnProperty(T)&&(i=t[T],i!=null)&&(T==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Ge(e,n,T,i,t,null));return;case"dialog":Re("beforetoggle",e),Re("toggle",e),Re("cancel",e),Re("close",e);break;case"iframe":case"object":Re("load",e);break;case"video":case"audio":for(i=0;i<Oa.length;i++)Re(Oa[i],e);break;case"image":Re("error",e),Re("load",e);break;case"details":Re("toggle",e);break;case"embed":case"source":case"link":Re("error",e),Re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in t)if(t.hasOwnProperty(N)&&(i=t[N],i!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,n));default:Ge(e,n,N,i,t,null)}return;default:if(cr(n)){for(Q in t)t.hasOwnProperty(Q)&&(i=t[Q],i!==void 0&&Io(e,n,Q,i,t,void 0));return}}for(y in t)t.hasOwnProperty(y)&&(i=t[y],i!=null&&Ge(e,n,y,i,t,null))}function Kd(e,n,t,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,l=null,s=null,y=null,T=null,N=null,Q=null;for(F in t){var Z=t[F];if(t.hasOwnProperty(F)&&Z!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":T=Z;default:i.hasOwnProperty(F)||Ge(e,n,F,null,i,Z)}}for(var L in i){var F=i[L];if(Z=t[L],i.hasOwnProperty(L)&&(F!=null||Z!=null))switch(L){case"type":l=F;break;case"name":a=F;break;case"checked":N=F;break;case"defaultChecked":Q=F;break;case"value":s=F;break;case"defaultValue":y=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(f(137,n));break;default:F!==Z&&Ge(e,n,L,F,i,Z)}}or(e,s,y,T,N,Q,l,a);return;case"select":F=s=y=L=null;for(l in t)if(T=t[l],t.hasOwnProperty(l)&&T!=null)switch(l){case"value":break;case"multiple":F=T;default:i.hasOwnProperty(l)||Ge(e,n,l,null,i,T)}for(a in i)if(l=i[a],T=t[a],i.hasOwnProperty(a)&&(l!=null||T!=null))switch(a){case"value":L=l;break;case"defaultValue":y=l;break;case"multiple":s=l;default:l!==T&&Ge(e,n,a,l,i,T)}n=y,t=s,i=F,L!=null?yi(e,!!t,L,!1):!!i!=!!t&&(n!=null?yi(e,!!t,n,!0):yi(e,!!t,t?[]:"",!1));return;case"textarea":F=L=null;for(y in t)if(a=t[y],t.hasOwnProperty(y)&&a!=null&&!i.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Ge(e,n,y,null,i,a)}for(s in i)if(a=i[s],l=t[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":L=a;break;case"defaultValue":F=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(f(91));break;default:a!==l&&Ge(e,n,s,a,i,l)}Tu(e,L,F);return;case"option":for(var ue in t)L=t[ue],t.hasOwnProperty(ue)&&L!=null&&!i.hasOwnProperty(ue)&&(ue==="selected"?e.selected=!1:Ge(e,n,ue,null,i,L));for(T in i)L=i[T],F=t[T],i.hasOwnProperty(T)&&L!==F&&(L!=null||F!=null)&&(T==="selected"?e.selected=L&&typeof L!="function"&&typeof L!="symbol":Ge(e,n,T,L,i,F));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in t)L=t[ye],t.hasOwnProperty(ye)&&L!=null&&!i.hasOwnProperty(ye)&&Ge(e,n,ye,null,i,L);for(N in i)if(L=i[N],F=t[N],i.hasOwnProperty(N)&&L!==F&&(L!=null||F!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(f(137,n));break;default:Ge(e,n,N,L,i,F)}return;default:if(cr(n)){for(var Ve in t)L=t[Ve],t.hasOwnProperty(Ve)&&L!==void 0&&!i.hasOwnProperty(Ve)&&Io(e,n,Ve,void 0,i,L);for(Q in i)L=i[Q],F=t[Q],!i.hasOwnProperty(Q)||L===F||L===void 0&&F===void 0||Io(e,n,Q,L,i,F);return}}for(var B in t)L=t[B],t.hasOwnProperty(B)&&L!=null&&!i.hasOwnProperty(B)&&Ge(e,n,B,null,i,L);for(Z in i)L=i[Z],F=t[Z],!i.hasOwnProperty(Z)||L===F||L==null&&F==null||Ge(e,n,Z,L,i,F)}function Of(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Zd(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),i=0;i<t.length;i++){var a=t[i],l=a.transferSize,s=a.initiatorType,y=a.duration;if(l&&y&&Of(s)){for(s=0,y=a.responseEnd,i+=1;i<t.length;i++){var T=t[i],N=T.startTime;if(N>y)break;var Q=T.transferSize,Z=T.initiatorType;Q&&Of(Z)&&(T=T.responseEnd,s+=Q*(T<y?1:(y-N)/(T-N)))}if(--i,n+=8*(l+s)/(a.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Wo=null,$o=null;function Ul(e){return e.nodeType===9?e:e.ownerDocument}function Yf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zf(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Po(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var eu=null;function Jd(){var e=window.event;return e&&e.type==="popstate"?e===eu?!1:(eu=e,!0):(eu=null,!1)}var Nf=typeof setTimeout=="function"?setTimeout:void 0,Id=typeof clearTimeout=="function"?clearTimeout:void 0,qf=typeof Promise=="function"?Promise:void 0,Wd=typeof queueMicrotask=="function"?queueMicrotask:typeof qf<"u"?function(e){return qf.resolve(null).then(e).catch($d)}:Nf;function $d(e){setTimeout(function(){throw e})}function Gt(e){return e==="head"}function Lf(e,n){var t=n,i=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"||t==="/&"){if(i===0){e.removeChild(a),Ii(n);return}i--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")i++;else if(t==="html")za(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,za(t);for(var l=t.firstChild;l;){var s=l.nextSibling,y=l.nodeName;l[Pi]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&l.rel.toLowerCase()==="stylesheet"||t.removeChild(l),l=s}}else t==="body"&&za(e.ownerDocument.body);t=a}while(t);Ii(n)}function jf(e,n){var t=e;e=0;do{var i=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=i}while(t)}function nu(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":nu(t),lr(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Pd(e,n,t,i){for(;e.nodeType===1;){var a=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Pi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var l=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=Qn(e.nextSibling),e===null)break}return null}function ep(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Qn(e.nextSibling),e===null))return null;return e}function Hf(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Qn(e.nextSibling),e===null))return null;return e}function tu(e){return e.data==="$?"||e.data==="$~"}function iu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function np(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var i=function(){n(),t.removeEventListener("DOMContentLoaded",i)};t.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Qn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var au=null;function Uf(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return Qn(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function Ff(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function Gf(e,n,t){switch(n=Ul(t),e){case"html":if(e=n.documentElement,!e)throw Error(f(452));return e;case"head":if(e=n.head,!e)throw Error(f(453));return e;case"body":if(e=n.body,!e)throw Error(f(454));return e;default:throw Error(f(451))}}function za(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);lr(e)}var Xn=new Map,Vf=new Set;function Fl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Et=ne.d;ne.d={f:tp,r:ip,D:ap,C:lp,L:rp,m:op,X:cp,S:up,M:sp};function tp(){var e=Et.f(),n=Ol();return e||n}function ip(e){var n=hi(e);n!==null&&n.tag===5&&n.type==="form"?rs(n):Et.r(e)}var Ki=typeof document>"u"?null:document;function Qf(e,n,t){var i=Ki;if(i&&typeof n=="string"&&n){var a=Ln(n);a='link[rel="'+e+'"][href="'+a+'"]',typeof t=="string"&&(a+='[crossorigin="'+t+'"]'),Vf.has(a)||(Vf.add(a),e={rel:e,crossOrigin:t,href:n},i.querySelector(a)===null&&(n=i.createElement("link"),gn(n,"link",e),un(n),i.head.appendChild(n)))}}function ap(e){Et.D(e),Qf("dns-prefetch",e,null)}function lp(e,n){Et.C(e,n),Qf("preconnect",e,n)}function rp(e,n,t){Et.L(e,n,t);var i=Ki;if(i&&e&&n){var a='link[rel="preload"][as="'+Ln(n)+'"]';n==="image"&&t&&t.imageSrcSet?(a+='[imagesrcset="'+Ln(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(a+='[imagesizes="'+Ln(t.imageSizes)+'"]')):a+='[href="'+Ln(e)+'"]';var l=a;switch(n){case"style":l=Zi(e);break;case"script":l=Ji(e)}Xn.has(l)||(e=w({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Xn.set(l,e),i.querySelector(a)!==null||n==="style"&&i.querySelector(Na(l))||n==="script"&&i.querySelector(qa(l))||(n=i.createElement("link"),gn(n,"link",e),un(n),i.head.appendChild(n)))}}function op(e,n){Et.m(e,n);var t=Ki;if(t&&e){var i=n&&typeof n.as=="string"?n.as:"script",a='link[rel="modulepreload"][as="'+Ln(i)+'"][href="'+Ln(e)+'"]',l=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Ji(e)}if(!Xn.has(l)&&(e=w({rel:"modulepreload",href:e},n),Xn.set(l,e),t.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(qa(l)))return}i=t.createElement("link"),gn(i,"link",e),un(i),t.head.appendChild(i)}}}function up(e,n,t){Et.S(e,n,t);var i=Ki;if(i&&e){var a=gi(i).hoistableStyles,l=Zi(e);n=n||"default";var s=a.get(l);if(!s){var y={loading:0,preload:null};if(s=i.querySelector(Na(l)))y.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Xn.get(l))&&lu(e,t);var T=s=i.createElement("link");un(T),gn(T,"link",e),T._p=new Promise(function(N,Q){T.onload=N,T.onerror=Q}),T.addEventListener("load",function(){y.loading|=1}),T.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Gl(s,n,i)}s={type:"stylesheet",instance:s,count:1,state:y},a.set(l,s)}}}function cp(e,n){Et.X(e,n);var t=Ki;if(t&&e){var i=gi(t).hoistableScripts,a=Ji(e),l=i.get(a);l||(l=t.querySelector(qa(a)),l||(e=w({src:e,async:!0},n),(n=Xn.get(a))&&ru(e,n),l=t.createElement("script"),un(l),gn(l,"link",e),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(a,l))}}function sp(e,n){Et.M(e,n);var t=Ki;if(t&&e){var i=gi(t).hoistableScripts,a=Ji(e),l=i.get(a);l||(l=t.querySelector(qa(a)),l||(e=w({src:e,async:!0,type:"module"},n),(n=Xn.get(a))&&ru(e,n),l=t.createElement("script"),un(l),gn(l,"link",e),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(a,l))}}function Xf(e,n,t,i){var a=(a=ve.current)?Fl(a):null;if(!a)throw Error(f(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Zi(t.href),t=gi(a).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Zi(t.href);var l=gi(a).hoistableStyles,s=l.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,s),(l=a.querySelector(Na(e)))&&!l._p&&(s.instance=l,s.state.loading=5),Xn.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Xn.set(e,t),l||fp(a,e,t,s.state))),n&&i===null)throw Error(f(528,""));return s}if(n&&i!==null)throw Error(f(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ji(t),t=gi(a).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,e))}}function Zi(e){return'href="'+Ln(e)+'"'}function Na(e){return'link[rel="stylesheet"]['+e+"]"}function Kf(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function fp(e,n,t,i){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?i.loading=1:(n=e.createElement("link"),i.preload=n,n.addEventListener("load",function(){return i.loading|=1}),n.addEventListener("error",function(){return i.loading|=2}),gn(n,"link",t),un(n),e.head.appendChild(n))}function Ji(e){return'[src="'+Ln(e)+'"]'}function qa(e){return"script[async]"+e}function Zf(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var i=e.querySelector('style[data-href~="'+Ln(t.href)+'"]');if(i)return n.instance=i,un(i),i;var a=w({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),un(i),gn(i,"style",a),Gl(i,t.precedence,e),n.instance=i;case"stylesheet":a=Zi(t.href);var l=e.querySelector(Na(a));if(l)return n.state.loading|=4,n.instance=l,un(l),l;i=Kf(t),(a=Xn.get(a))&&lu(i,a),l=(e.ownerDocument||e).createElement("link"),un(l);var s=l;return s._p=new Promise(function(y,T){s.onload=y,s.onerror=T}),gn(l,"link",i),n.state.loading|=4,Gl(l,t.precedence,e),n.instance=l;case"script":return l=Ji(t.src),(a=e.querySelector(qa(l)))?(n.instance=a,un(a),a):(i=t,(a=Xn.get(l))&&(i=w({},t),ru(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),un(a),gn(a,"link",i),e.head.appendChild(a),n.instance=a);case"void":return null;default:throw Error(f(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(i=n.instance,n.state.loading|=4,Gl(i,t.precedence,e));return n.instance}function Gl(e,n,t){for(var i=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,l=a,s=0;s<i.length;s++){var y=i[s];if(y.dataset.precedence===n)l=y;else if(l!==a)break}l?l.parentNode.insertBefore(e,l.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function lu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ru(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Vl=null;function Jf(e,n,t){if(Vl===null){var i=new Map,a=Vl=new Map;a.set(t,i)}else a=Vl,i=a.get(t),i||(i=new Map,a.set(t,i));if(i.has(e))return i;for(i.set(e,null),t=t.getElementsByTagName(e),a=0;a<t.length;a++){var l=t[a];if(!(l[Pi]||l[mn]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(n)||"";s=e+s;var y=i.get(s);y?y.push(l):i.set(s,[l])}}return i}function If(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function mp(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Wf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function dp(e,n,t,i){if(t.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var a=Zi(i.href),l=n.querySelector(Na(a));if(l){n=l._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Ql.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=l,un(l);return}l=n.ownerDocument||n,i=Kf(i),(a=Xn.get(a))&&lu(i,a),l=l.createElement("link"),un(l);var s=l;s._p=new Promise(function(y,T){s.onload=y,s.onerror=T}),gn(l,"link",i),t.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Ql.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var ou=0;function pp(e,n){return e.stylesheets&&e.count===0&&Kl(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var i=setTimeout(function(){if(e.stylesheets&&Kl(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+n);0<e.imgBytes&&ou===0&&(ou=62500*Zd());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Kl(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>ou?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Ql(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Kl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xl=null;function Kl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xl=new Map,n.forEach(hp,e),Xl=null,Ql.call(e))}function hp(e,n){if(!(n.state.loading&4)){var t=Xl.get(e);if(t)var i=t.get(null);else{t=new Map,Xl.set(e,t);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<a.length;l++){var s=a[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(t.set(s.dataset.precedence,s),i=s)}i&&t.set(null,i)}a=n.instance,s=a.getAttribute("data-precedence"),l=t.get(s)||i,l===i&&t.set(null,a),t.set(s,a),this.count++,i=Ql.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),l?l.parentNode.insertBefore(a,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),n.state.loading|=4}}var La={$$typeof:oe,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function gp(e,n,t,i,a,l,s,y,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nr(0),this.hiddenUpdates=nr(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function $f(e,n,t,i,a,l,s,y,T,N,Q,Z){return e=new gp(e,n,t,s,T,N,Q,Z,y),n=1,l===!0&&(n|=24),l=Rn(3,null,null,n),e.current=l,l.stateNode=e,n=jr(),n.refCount++,e.pooledCache=n,n.refCount++,l.memoizedState={element:i,isDehydrated:t,cache:n},Gr(l),e}function Pf(e){return e?(e=wi,e):wi}function em(e,n,t,i,a,l){a=Pf(a),i.context===null?i.context=a:i.pendingContext=a,i=Bt(n),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Ot(e,i,n),t!==null&&(wn(t,e,n),ga(t,e,n))}function nm(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function uu(e,n){nm(e,n),(e=e.alternate)&&nm(e,n)}function tm(e){if(e.tag===13||e.tag===31){var n=ei(e,67108864);n!==null&&wn(n,e,67108864),uu(e,67108864)}}function im(e){if(e.tag===13||e.tag===31){var n=Nn();n=tr(n);var t=ei(e,n);t!==null&&wn(t,e,n),uu(e,n)}}var Zl=!0;function _p(e,n,t,i){var a=U.T;U.T=null;var l=ne.p;try{ne.p=2,cu(e,n,t,i)}finally{ne.p=l,U.T=a}}function yp(e,n,t,i){var a=U.T;U.T=null;var l=ne.p;try{ne.p=8,cu(e,n,t,i)}finally{ne.p=l,U.T=a}}function cu(e,n,t,i){if(Zl){var a=su(i);if(a===null)Jo(e,n,i,Jl,t),lm(e,i);else if(bp(a,e,n,t,i))i.stopPropagation();else if(lm(e,i),n&4&&-1<vp.indexOf(e)){for(;a!==null;){var l=hi(a);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=Jt(l.pendingLanes);if(s!==0){var y=l;for(y.pendingLanes|=2,y.entangledLanes|=2;s;){var T=1<<31-j(s);y.entanglements[1]|=T,s&=~T}it(l),(Le&6)===0&&(Rl=nn()+500,Ba(0))}}break;case 31:case 13:y=ei(l,2),y!==null&&wn(y,l,2),Ol(),uu(l,2)}if(l=su(i),l===null&&Jo(e,n,i,Jl,t),l===a)break;a=l}a!==null&&i.stopPropagation()}else Jo(e,n,i,null,t)}}function su(e){return e=fr(e),fu(e)}var Jl=null;function fu(e){if(Jl=null,e=pi(e),e!==null){var n=x(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=A(n),e!==null)return e;e=null}else if(t===31){if(e=g(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Jl=e,null}function am(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(o()){case H:return 2;case m:return 8;case r:case u:return 32;case c:return 268435456;default:return 32}default:return 32}}var mu=!1,Vt=null,Qt=null,Xt=null,ja=new Map,Ha=new Map,Kt=[],vp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lm(e,n){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":ja.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ha.delete(n.pointerId)}}function Ua(e,n,t,i,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:i,nativeEvent:l,targetContainers:[a]},n!==null&&(n=hi(n),n!==null&&tm(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function bp(e,n,t,i,a){switch(n){case"focusin":return Vt=Ua(Vt,e,n,t,i,a),!0;case"dragenter":return Qt=Ua(Qt,e,n,t,i,a),!0;case"mouseover":return Xt=Ua(Xt,e,n,t,i,a),!0;case"pointerover":var l=a.pointerId;return ja.set(l,Ua(ja.get(l)||null,e,n,t,i,a)),!0;case"gotpointercapture":return l=a.pointerId,Ha.set(l,Ua(Ha.get(l)||null,e,n,t,i,a)),!0}return!1}function rm(e){var n=pi(e.target);if(n!==null){var t=x(n);if(t!==null){if(n=t.tag,n===13){if(n=A(t),n!==null){e.blockedOn=n,vu(e.priority,function(){im(t)});return}}else if(n===31){if(n=g(t),n!==null){e.blockedOn=n,vu(e.priority,function(){im(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Il(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=su(e.nativeEvent);if(t===null){t=e.nativeEvent;var i=new t.constructor(t.type,t);sr=i,t.target.dispatchEvent(i),sr=null}else return n=hi(t),n!==null&&tm(n),e.blockedOn=t,!1;n.shift()}return!0}function om(e,n,t){Il(e)&&t.delete(n)}function Sp(){mu=!1,Vt!==null&&Il(Vt)&&(Vt=null),Qt!==null&&Il(Qt)&&(Qt=null),Xt!==null&&Il(Xt)&&(Xt=null),ja.forEach(om),Ha.forEach(om)}function Wl(e,n){e.blockedOn===n&&(e.blockedOn=null,mu||(mu=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,Sp)))}var $l=null;function um(e){$l!==e&&($l=e,p.unstable_scheduleCallback(p.unstable_NormalPriority,function(){$l===e&&($l=null);for(var n=0;n<e.length;n+=3){var t=e[n],i=e[n+1],a=e[n+2];if(typeof i!="function"){if(fu(i||t)===null)continue;break}var l=hi(t);l!==null&&(e.splice(n,3),n-=3,co(l,{pending:!0,data:a,method:t.method,action:i},i,a))}}))}function Ii(e){function n(T){return Wl(T,e)}Vt!==null&&Wl(Vt,e),Qt!==null&&Wl(Qt,e),Xt!==null&&Wl(Xt,e),ja.forEach(n),Ha.forEach(n);for(var t=0;t<Kt.length;t++){var i=Kt[t];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Kt.length&&(t=Kt[0],t.blockedOn===null);)rm(t),t.blockedOn===null&&Kt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],s=a[bn]||null;if(typeof l=="function")s||um(t);else if(s){var y=null;if(l&&l.hasAttribute("formAction")){if(a=l,s=l[bn]||null)y=s.formAction;else if(fu(a)!==null)continue}else y=s.action;typeof y=="function"?t[i+1]=y:(t.splice(i,3),i-=3),um(t)}}}function cm(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(s){return a=s})},focusReset:"manual",scroll:"manual"})}function n(){a!==null&&(a(),a=null),i||setTimeout(t,20)}function t(){if(!i&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),a!==null&&(a(),a=null)}}}function du(e){this._internalRoot=e}Pl.prototype.render=du.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(f(409));var t=n.current,i=Nn();em(t,i,e,n,null,null)},Pl.prototype.unmount=du.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;em(e.current,2,null,e,null,null),Ol(),n[di]=null}};function Pl(e){this._internalRoot=e}Pl.prototype.unstable_scheduleHydration=function(e){if(e){var n=yu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Kt.length&&n!==0&&n<Kt[t].priority;t++);Kt.splice(t,0,e),t===0&&rm(e)}};var sm=d.version;if(sm!=="19.2.3")throw Error(f(527,sm,"19.2.3"));ne.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=h(n),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var xp={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var er=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!er.isDisabled&&er.supportsFiber)try{M=er.inject(xp),q=er}catch{}}return reactDomClient_production.createRoot=function(e,n){if(!v(e))throw Error(f(299));var t=!1,i="",a=gs,l=_s,s=ys;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(l=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=$f(e,1,!1,null,null,t,i,null,a,l,s,cm),e[di]=n.current,Zo(e),new du(n)},reactDomClient_production.hydrateRoot=function(e,n,t){if(!v(e))throw Error(f(299));var i=!1,a="",l=gs,s=_s,y=ys,T=null;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(y=t.onRecoverableError),t.formState!==void 0&&(T=t.formState)),n=$f(e,1,!0,n,t??null,i,a,T,l,s,y,cm),n.context=Pf(null),t=n.current,i=Nn(),i=tr(i),a=Bt(i),a.callback=null,Ot(t,a,i),t=i,n.current.lanes=t,$i(n,t),it(n),e[di]=n.current,Zo(e),new Pl(n)},reactDomClient_production.version="19.2.3",reactDomClient_production}var hasRequiredClient;function requireClient(){if(hasRequiredClient)return client.exports;hasRequiredClient=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(d){console.error(d)}}return p(),client.exports=requireReactDomClient_production(),client.exports}var clientExports=requireClient();const __vite_glob_0_0=`---
title: "Baked Potato Soup"
source: "Your Recipe"
meal: ["Lunch", "Dinner"]
effort: "Medium"
season: ["Fall", "Winter"]
protein: "Pork"
cost: "Medium"
kitchen_impact: "Medium"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["soup", "potato", "comfort-food", "bacon"]
nutrition:
  serving_size: "1 1/2 cups"
  servings_per_recipe: 6
  calories_per_serving: 420
ingredients:
  - item: "Cooked Bacon"
    amount: "8 slices"
    calories: 320
  - item: "Butter"
    amount: "2/3 cup"
    calories: 1070
  - item: "Flour"
    amount: "2/3 cup"
    calories: 300
  - item: "Milk"
    amount: "7 cups"
    calories: 1050
  - item: "Potatoes"
    amount: "5, baked, peeled, cubed"
    calories: 730
  - item: "Green Onions"
    amount: "4"
    calories: 20
  - item: "Sharp Cheddar"
    amount: "2 cups"
    calories: 900
  - item: "Sour Cream"
    amount: "1 cup"
    calories: 480
  - item: "Salt and Pepper"
    amount: "to taste"
    calories: 0
---

# Instructions
1. Melt butter - whisk in flour
2. Slowly add milk, whisk well as you go
3. Whisk and cook until thickened
4. Add potatoes, onion, bring to boil
5. Low heat: add bacon, cheese, sour cream, salt and pepper
6. Serve! EAT!

# Nutrition Notes
Total recipe: ~4,870 calories
Per serving (1 1/2 cups): ~810 calories
`,__vite_glob_0_1=`---
title: "BBQ Chicken"
source: "Your Recipe"
meal: ["Lunch", "Dinner"]
effort: "Low"
season: ["All-year"]
protein: "Chicken"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: true
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["bbq", "chicken", "simple"]
related_recipes: ["bbq_sauce_kc"]
nutrition:
  serving_size: "1 chicken breast"
  servings_per_recipe: 2
  calories_per_serving: 250
ingredients:
  - item: "Chicken Breasts"
    amount: "2"
    calories: 360
  - item: "BBQ Sauce"
    amount: "1/2 cup, with onions"
    calories: 140
---

# Instructions
1. Put chicken in skillet and let come to a boil
2. Turn to slow or simmer and cook until tender

# Serving Suggestions
Great for sandwiches, tacos, or as a main protein with sides

# Nutrition Notes
Total recipe: ~500 calories
Per chicken breast: ~250 calories
`,__vite_glob_0_2=`---
title: "Barbecue Sauce (from Bettye)"
source: "Bettye"
meal: ["Lunch", "Dinner"]
effort: "Low"
season: ["All-year"]
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: true
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["bbq", "sauce", "condiment"]
nutrition:
  serving_size: "2 Tbsp"
  servings_per_recipe: 16
  calories_per_serving: 35
ingredients:
  - item: "Ketchup"
    amount: "2 cups"
    calories: 320
  - item: "Water"
    amount: "2 cups"
    calories: 0
  - item: "Cider Vinegar"
    amount: "2 cups"
    calories: 60
  - item: "Chili Powder"
    amount: "~1 1/2 T"
    calories: 36
  - item: "Salt"
    amount: "3 T"
    calories: 0
  - item: "Sugar"
    amount: "3 T"
    calories: 144
  - item: "Onion, finely chopped"
    amount: "1 medium"
    calories: 44
---

# Instructions
1. Mix and boil. Cook on low until thick ~5-6 hours
2. Makes 1 qt

# Nutrition Notes
Total recipe: ~604 calories
Per serving (2 Tbsp): ~35 calories
Makes approximately 32 Tbsp (1 quart)
`,__vite_glob_0_3=`---
title: "BBQ Sauce (Kansas City Style)"
source: "Your Recipe"
meal: ["Lunch", "Dinner"]
effort: "Low"
season: ["All-year"]
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: true
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["bbq", "sauce", "kansas-city", "condiment"]
nutrition:
  serving_size: "2 Tbsp"
  servings_per_recipe: 16
  calories_per_serving: 45
ingredients:
  - item: "Tomato Sauce"
    amount: "15 oz can"
    calories: 105
  - item: "Apple Cider Vinegar"
    amount: "1/2 cup"
    calories: 15
  - item: "Honey or Agave Nectar"
    amount: "1/3 cup"
    calories: 340
  - item: "Tomato Paste"
    amount: "1/4 cup"
    calories: 50
  - item: "Molasses"
    amount: "1/4 cup"
    calories: 240
  - item: "Worcestershire Sauce"
    amount: "5 Tbsp"
    calories: 25
  - item: "Liquid Smoke"
    amount: "2 tsp"
    calories: 0
  - item: "Garlic Powder"
    amount: "1 tsp"
    calories: 5
  - item: "Black Pepper"
    amount: "1/2 tsp"
    calories: 3
  - item: "Onion Powder"
    amount: "1/2 tsp"
    calories: 4
  - item: "Salt"
    amount: "1/2 tsp"
    calories: 0
  - item: "Cayenne"
    amount: "to taste"
    calories: 0
---

# Instructions
1. Whisk all ingredients together in a medium saucepan
2. Bring to simmer
3. Reduce heat to medium and simmer uncovered for 20 minutes until thickened

# Storage
Store in refrigerator for up to 2 weeks

# Nutrition Notes
Total recipe: ~787 calories
Per 2 Tbsp serving: ~45 calories
Makes approximately 2 cups (32 Tbsp)
`,__vite_glob_0_4=`---
title: "Beau Monde Dip"
source: "Charlotte Capaul (Grandma Lottie)"
meal: ['Snack']
effort: "Low"
season: ['All-year']
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: true
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ['dip', 'appetizer', 'cold']
ingredients:
  - item: "Sour Cream"
    amount: "1 cups"
  - item: "Mayo"
    amount: "1/2 cup"
  - item: "Beau Monde Seasoning"
    amount: "1 1/2 tsp"
  - item: "Dill Weed"
    amount: "1 1/2 tsp"
  - item: "Parsley Flakes"
    amount: "1 1/2 tsp"
  - item: "Dill, Fresh"
    amount: "To Taste"
---

# Instructions
1. Combine ingredients and refridgerate
2. Season to taste
`,__vite_glob_0_5=`---
title: "Beef Guinness Stew"
source: "Your Recipe"
meal: ["Dinner"]
effort: "Medium"
season: ["Fall", "Winter"]
protein: "Beef"
cost: "Medium"
kitchen_impact: "Medium"
repeatability: "Medium"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["irish", "stew", "beef", "guinness"]
nutrition:
  serving_size: "1 1/2 cups"
  servings_per_recipe: 8
  calories_per_serving: 420
ingredients:
  - item: "Boneless Beef Roast"
    amount: "3-3 1/2 lbs (sirloin tip or english cut), trim"
    calories: 2400
  - item: "Large Onions"
    amount: "2, cut into 1/8s"
    calories: 88
  - item: "Garlic"
    amount: "5 cloves, crushed"
    calories: 20
  - item: "Carrots"
    amount: "3, chopped"
    calories: 75
  - item: "Medium Red Potatoes"
    amount: "6, cut"
    calories: 690
  - item: "Chicken Stock"
    amount: "1 quart"
    calories: 60
  - item: "Guinness Stout"
    amount: "1 12oz bottle"
    calories: 125
  - item: "Flour"
    amount: "4 T"
    calories: 114
  - item: "Salt"
    amount: "1 tsp"
    calories: 0
  - item: "Pepper"
    amount: "1/2 tsp"
    calories: 3
  - item: "Thyme"
    amount: "1/2 tsp"
    calories: 1
  - item: "Peanut Oil"
    amount: "2 T"
    calories: 240
---

# Instructions
1. Heat oven to 350°. Heat oil until smoking in cast iron dutch oven. Brown meat on both sides, then remove from pan
2. Add onions and stir until they begin to brown. Remove onions
3. In separate bowl, mix together stout, flour, salt, thyme, garlic and pepper. Whisk vigorously (no clumps)
4. Add mixture to dutch oven along with chicken stock. Bring mix to rolling boil
5. Add meat and arrange veggies around the meat. Cover tightly and bake for 2 1/2 hrs

# Nutrition Notes
Total recipe: ~3,816 calories
Per serving (1 1/2 cups): ~475 calories
`,__vite_glob_0_6=`---
title: "Biscuits"
source: "Your Recipe"
meal: ["Breakfast", "Snack"]
effort: "Medium"
season: ["All-year"]
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Medium"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["biscuits", "bread"]
nutrition:
  serving_size: "1 biscuit"
  servings_per_recipe: 12
  calories_per_serving: 140
ingredients:
  - item: "Flour"
    amount: "2 cups"
    calories: 910
  - item: "Salt"
    amount: "1 tsp"
    calories: 0
  - item: "Sugar"
    amount: "2 tsp"
    calories: 32
  - item: "Baking Powder"
    amount: "1 Tbsp"
    calories: 7
  - item: "Heavy Cream"
    amount: "1/2 cups"
    calories: 600
---

# Instructions
1. Preheat 425°F
2. Mix ingredients
3. Put on floured surface & knead slightly
4. Roll out to 1/2" thick
5. Cut biscuits and place on greased cookie sheet
6. Cook 15 minutes

# Nutrition Notes
Total recipe: ~1,549 calories
Per biscuit (makes ~12): ~140 calories
`,__vite_glob_0_7=`---
title: "Creamy Black Bean Soup"
source: "Your Recipe"
meal: ["Lunch", "Dinner"]
effort: "Low"
season: ["All-year"]
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["soup", "black-beans", "vegetarian", "mexican"]
nutrition:
  serving_size: "1 1/2 cups"
  servings_per_recipe: 6
  calories_per_serving: 180
ingredients:
  - item: "Black Beans"
    amount: "1 (15 oz) can"
    calories: 385
  - item: "Tomato Sauce"
    amount: "1 (8 oz) can"
    calories: 70
  - item: "Onion, chopped"
    amount: "1"
    calories: 44
  - item: "Celery, chopped"
    amount: "1 stalk"
    calories: 6
  - item: "Garlic"
    amount: "3 cloves"
    calories: 12
  - item: "Fresh Cilantro"
    amount: "2 T"
    calories: 1
  - item: "Fresh Basil"
    amount: "2 T"
    calories: 1
  - item: "Oregano or Marjoram"
    amount: "2 tsp"
    calories: 5
  - item: "Cumin"
    amount: "1 1/2 tsp"
    calories: 12
  - item: "Salt"
    amount: "1/2 tsp"
    calories: 0
  - item: "Pepper"
    amount: "1/4 tsp"
    calories: 2
---

# Instructions
1. Combine all, boil and simmer covered for 30 minutes, stir now and then
2. Uncover, simmer until thick, stir often ~5 min
3. Good.

# Serving Suggestions
Serve with sour cream, fresh cilantro, and tortilla chips

# Nutrition Notes
Total recipe: ~538 calories
Per serving (1 1/2 cups): ~90 calories
`,__vite_glob_0_8=`---
title: "Black-Eyed Pea Dip"
source: "Your Recipe"
meal: ["Snack"]
effort: "Low"
season: ["All-year"]
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ["dip", "appetizer", "southern"]
nutrition:
  serving_size: "1/4 cup"
  servings_per_recipe: 12
  calories_per_serving: 95
ingredients:
  - item: "Onion, chopped"
    amount: "1"
    calories: 44
  - item: "Butter"
    amount: "2 T"
    calories: 200
  - item: "Black-Eyed Peas, rinsed and drained"
    amount: "1 (15 oz) can"
    calories: 350
  - item: "Artichoke Hearts, drained and chopped"
    amount: "1 (14 oz) can"
    calories: 84
  - item: "Parmesan Cheese"
    amount: "2 T"
    calories: 44
  - item: "Sour Cream"
    amount: "1/2 cup"
    calories: 240
  - item: "Mayo"
    amount: "1/2 cup"
    calories: 720
  - item: "Dry Ranch Dressing Mix"
    amount: "1 pkg"
    calories: 30
  - item: "Grated Mozz Cheese"
    amount: "4-6 oz"
    calories: 400
---

# Instructions
1. Sauté onion in butter. Mix in everything else except parm
2. Pour into greased dish, bake 350°, 20 min
3. Top with parm and put in oven to melt
4. Serve with Fritos!

# Notes
"Oh, this is good!" - mom

# Nutrition Notes
Total recipe: ~2,112 calories
Per serving (1/4 cup): ~175 calories
`,__vite_glob_0_9=`---
title: "Blueberry Teacake"
source: "Your Recipe"
meal: ["Breakfast", "Snack"]
effort: "Medium"
season: ["Summer"]
protein: "Vegetarian"
cost: "Medium"
kitchen_impact: "Medium"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["cake", "blueberry", "coffee-cake", "breakfast"]
nutrition:
  serving_size: "1 slice"
  servings_per_recipe: 9
  calories_per_serving: 280
ingredients:
  - item: "Flour"
    amount: "2 cups"
    calories: 910
  - item: "Baking Powder"
    amount: "2 tsp"
    calories: 5
  - item: "Salt"
    amount: "1/2 tsp"
    calories: 0
  - item: "Butter, cream"
    amount: "1/4 cup"
    calories: 400
  - item: "Sugar, beat in"
    amount: "3/4 cup"
    calories: 580
  - item: "Egg"
    amount: "1"
    calories: 70
  - item: "Milk"
    amount: "1/2 cup"
    calories: 75
  - item: "Blueberries"
    amount: "2 cups"
    calories: 170
---

# Topping
- Sugar: 1/2 cup (387 cal)
- Flour: 1/4 cup (114 cal)
- Cinnamon: 1/2 cup (cut in)
- Butter: 1/4 cup (400 cal)

# Instructions
1. Sift together flour, baking powder, and salt
2. Cream butter and sugar, beat in egg, then add
3. Add dry ingredients, beat til smooth, fold in berries
4. Cut topping ingredients together until crumbly
5. Grease 8-9" square pan, pour in batter, sprinkle with topping
6. Bake 375° for 40-45 minutes

# Nutrition Notes
Total recipe: ~3,111 calories (including topping)
Per slice (9 slices): ~345 calories
`,__vite_glob_0_10=`---
title: "Brisket"
source: "Your Recipe"
meal: ["Dinner"]
effort: "Medium"
season: ["All-year"]
protein: "Beef"
cost: "High"
kitchen_impact: "Medium"
repeatability: "Medium"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["beef", "smoked", "bbq", "brisket"]
nutrition:
  serving_size: "4 oz"
  servings_per_recipe: 24
  calories_per_serving: 220
ingredients:
  - item: "Brisket"
    amount: "6-8 lbs"
    calories: 5280
  - item: "Large Brining Bags"
    amount: "as needed"
    calories: 0
  - item: "Flour in bag (shake in bag)"
    amount: "1 T"
    calories: 28
  - item: "Chili Sauce"
    amount: "1 bottle"
    calories: 240
  - item: "Liquid Smoke"
    amount: "2 tsp"
    calories: 0
  - item: "BBQ Sauce"
    amount: "2 T"
    calories: 70
  - item: "Worcestershire"
    amount: "to taste"
    calories: 15
  - item: "Tabasco"
    amount: "to taste"
    calories: 0
  - item: "White Wine"
    amount: "to taste"
    calories: 50
  - item: "Salt"
    amount: "to taste"
    calories: 0
  - item: "Pepper"
    amount: "to taste"
    calories: 0
  - item: "Celery Seed (rub onto meat)"
    amount: "to taste"
    calories: 5
---

# Instructions
1. Put sauces in with meat
2. Put bag with meat into baking pan. Seal top of bag. Poke so sauce gets to bottom and meat. Put slits into top
3. Add 6 1/2" slits. Cook at 275° for 3-3.5 hours

# Nutrition Notes
Total recipe: ~5,688 calories
Per serving (4 oz): ~240 calories
`,__vite_glob_0_11=`---
title: "Butter Chicken"
source: "Your Recipe"
meal: ["Dinner"]
effort: "Medium"
season: ["All-year"]
protein: "Chicken"
cost: "Medium"
kitchen_impact: "Medium"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["indian", "curry", "instant-pot"]
nutrition:
  serving_size: "1 cup"
  servings_per_recipe: 6
  calories_per_serving: 350
ingredients:
  - item: "Diced Tomatoes"
    amount: "1 can"
    calories: 105
  - item: "Minced Ginger"
    amount: "1 T"
    calories: 5
  - item: "Cayenne"
    amount: "1 tsp"
    calories: 6
  - item: "Garam Masala"
    amount: "2 tsp"
    calories: 12
  - item: "Salt"
    amount: "1 tsp"
    calories: 0
  - item: "Butter"
    amount: "4 ounces (1/2 cup)"
    calories: 800
  - item: "Heavy Cream"
    amount: "2 1/2 cups"
    calories: 2060
  - item: "Garlic"
    amount: "5-6 cloves"
    calories: 20
  - item: "Turmeric"
    amount: "1 tsp"
    calories: 8
  - item: "Paprika"
    amount: "1 tsp"
    calories: 6
  - item: "Cumin"
    amount: "1 tsp"
    calories: 8
  - item: "Chicken"
    amount: "1 lb"
    calories: 660
  - item: "Cilantro"
    amount: "for garnish"
    calories: 0
---

# Instructions
1. Instant Pot: In the inner pot, mix tomatoes, garlic, ginger, turmeric, cayenne, paprika, 1 tsp garam masala, cumin, and salt. Then place chicken on top
2. Cook on High for 10 minutes, release pressure naturally
3. Remove chicken and immersion blender it all together
4. Add butter, cream, garam masala, and cilantro. Stir until incorporated
5. Add chicken back and heat. Serve over rice

# Nutrition Notes
Total recipe: ~3,690 calories
Per serving (1 cup): ~615 calories
`,__vite_glob_0_12=`---
title: "Butterball Cookies"
source: "Charlotte Capaul (Grandma Lottie)"
meal: ['Snack']
effort: "Low"
season: ['Winter']
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ['cookies', 'christmas', 'nuts']
ingredients:
  - item: "Butter"
    amount: "1 cup"
  - item: "Powdered Sugar"
    amount: "1/2 cup"
  - item: "Vanilla Extract"
    amount: "1 tsp"
  - item: "Flour"
    amount: "2 cup"
  - item: "Walnuts, Chopped"
    amount: "3/4 cup"
  - item: "Salt"
    amount: "1/4 tsp"
---

# Instructions
1. Cream butter, sugar, vanilla
2. slowly add flour and salt until combined
3. Mix in walnuts
4. Shape into balls
5. Bake for 10 min, watch to ensure bottoms dont brown too much
`,__vite_glob_0_13=`---
title: "Buttermilk Biscuits"
source: "Your Recipe"
meal: ["Breakfast", "Snack"]
effort: "Medium"
season: ["All-year"]
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Medium"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["biscuits", "bread", "southern"]
nutrition:
  serving_size: "1 biscuit"
  servings_per_recipe: 12
  calories_per_serving: 150
ingredients:
  - item: "Flour"
    amount: "2 cups"
    calories: 910
  - item: "Salt"
    amount: "1/4 tsp"
    calories: 0
  - item: "Baking Powder"
    amount: "1 Tbsp"
    calories: 7
  - item: "Salt"
    amount: "1/2 tsp"
    calories: 0
  - item: "Butter"
    amount: "6 Tbsp"
    calories: 600
  - item: "Buttermilk"
    amount: "1 cup"
    calories: 100
---

# Instructions
1. Preheat to 450°F
2. Combine dry ingredients in bowl or food processor
3. Rub butter into dry mix; should resemble coarse meal
4. Add buttermilk; mix until just combined
5. Turn out on floured surface and gently pat dough into 1/2" thick. Fold 5 times and pat to ~1"
6. Cut biscuits and bake 10-12 minutes

# Nutrition Notes
Total recipe: ~1,617 calories
Per biscuit (makes ~12): ~150 calories
`,__vite_glob_0_14=`---
title: "Cajun Stewed Tomatoes"
source: "Handwritten Card"
meal: ["Side"]
effort: "Low"
season: ["All"]
protein: "None"
cost: "Low"
kitchen_impact: "Low"
repeatability: "Medium"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["side-dish", "vegetable", "cajun", "tomatoes"]
nutrition:
  serving_size: "1 cup"
  servings_per_recipe: 6
  calories_per_serving: 120
ingredients:
  - item: "Canned Tomatoes"
    amount: "2 cans"
    calories: 200
  - item: "Onion"
    amount: "1 medium, chopped"
    calories: 45
  - item: "Bell Pepper"
    amount: "1, chopped"
    calories: 30
  - item: "Celery"
    amount: "1 stalk, chopped"
    calories: 10
  - item: "Butter or Oil"
    amount: "2 Tbsp"
    calories: 240
  - item: "Cajun Seasoning"
    amount: "1–2 tsp"
    calories: 10
  - item: "Salt and Pepper"
    amount: "to taste"
    calories: 0
---

# Instructions
1. In a saucepan, sauté onion, bell pepper, and celery in butter or oil until softened.
2. Add canned tomatoes (with juice).
3. Stir in Cajun seasoning, salt, and pepper.
4. Simmer on low for 20–30 minutes.
5. Serve warm.

# Nutrition Notes
Total recipe: ~535 calories  
Per serving (~6 servings): ~120 calories`,__vite_glob_0_15=`---
title: "Cake in a Cup"
source: "Handwritten Card"
meal: ["Dessert"]
effort: "Low"
season: ["All"]
protein: "None"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ["dessert", "microwave", "quick", "single-serving"]
nutrition:
  serving_size: "1 mug cake"
  servings_per_recipe: 1
  calories_per_serving: 350
ingredients:
  - item: "Flour"
    amount: "4 Tbsp"
    calories: 120
  - item: "Sugar"
    amount: "4 Tbsp"
    calories: 200
  - item: "Cocoa Powder"
    amount: "2 Tbsp"
    calories: 25
  - item: "Egg"
    amount: "1"
    calories: 70
  - item: "Milk"
    amount: "3 Tbsp"
    calories: 30
  - item: "Oil"
    amount: "3 Tbsp"
    calories: 360
  - item: "Vanilla"
    amount: "splash"
    calories: 5
---

# Instructions
1. In a microwave-safe mug, mix flour, sugar, and cocoa powder.
2. Add egg and mix thoroughly.
3. Stir in milk, oil, and vanilla until smooth.
4. Microwave for 2–3 minutes (depending on microwave strength).
5. Let cool slightly before eating.

# Nutrition Notes
Total recipe: ~810 calories  
Per serving (1 mug): ~350 calories (estimate adjusted for typical variation)`,__vite_glob_0_16=`---
title: "Carnitas"
source: "Handwritten Card"
meal: ["Dinner"]
effort: "Medium"
season: ["All"]
protein: "Pork"
cost: "Medium"
kitchen_impact: "Medium"
repeatability: "High"
is_component: true
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["mexican", "pork", "slow-cooked", "tacos", "meal-prep"]
nutrition:
  serving_size: "1 portion"
  servings_per_recipe: 8
  calories_per_serving: 450
ingredients:
  - item: "Pork Shoulder (or Butt)"
    amount: "4–5 lbs"
    calories: 4800
  - item: "Yellow Onion"
    amount: "1, quartered"
    calories: 45
  - item: "Garlic"
    amount: "5–6 cloves"
    calories: 25
  - item: "Bay Leaves"
    amount: "2"
    calories: 0
  - item: "Chili Powder"
    amount: "2 tsp"
    calories: 15
  - item: "Jalapeño"
    amount: "1, diced"
    calories: 5
  - item: "Lime"
    amount: "1 Tbsp juice"
    calories: 5
  - item: "Black Pepper"
    amount: "coarse"
    calories: 0
  - item: "Salt"
    amount: "coarse"
    calories: 0
---

# Instructions
1. Season pork generously with coarse salt, cumin, pepper, lime, and chili powder.
2. Sear pork in a hot pan with a small amount of fat until browned.
3. Quarter onion and place in slow cooker.
4. Add seared pork on top.
5. Cook on low for 8 hours.
6. Remove meat and separate fat from broth if desired.
7. Shred meat and return to juices (optional).
8. Season to taste (salt, cumin, pepper, lime, chili powder).

# Nutrition Notes
Total recipe: ~4,900 calories  
Per serving (~8 servings): ~450 calories (estimate)`,__vite_glob_0_17=`---
title: "Cereal Crispy Treats"
source: "LeaAnn Van Lohuizen"
meal: ['Snack']
effort: "Low"
season: ['All-year']
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ['no-bake', 'marshmallow', 'quick']
ingredients:
  - item: "Butter"
    amount: "3 Tbs"
  - item: "Marshmellows"
    amount: "4 cups"
  - item: "Cereal"
    amount: "6 cups"
---

# Instructions
1. Melt butter in a large pan on low
2. Add marshmellows and melt down until saucy
3. Remove from heat, add cereal
4. Put mix into greased 8x8 pan for Thick or 9x13 for thin
`,__vite_glob_0_18=`---
title: "Cherry Chocolate Fudge"
source: "LeaAnn Van Lohuizen"
meal: ['Snack']
effort: "Low"
season: ['Winter']
protein: "Vegetarian"
cost: "Medium"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ['fudge', 'chocolate', 'cherry', 'christmas']
ingredients:
  - item: "Semi-sweet chocolate chips"
    amount: "12oz"
  - item: "Sweetened Condensed Milk"
    amount: "14 oz"
  - item: "Almonds, coarsly chopped"
    amount: "1/2 cup"
  - item: "Candied Cherries, chopped"
    amount: "1/2 cup"
  - item: "Almond Extract"
    amount: "1 tsp"
---

# Instructions
1. Butter an foiled 8x8 pan
2. In a microwave safe bowl, combine chocolate chips and sweetened condenses milk. Stir lightly
3. Microwave on High for 1.5-2 min or until mixture is smooth when stirred
4. Add cherries, nuts, and almond extract; mix well
5. Spread evenly in prepared pan
6. Place halved cherries and/or pecans in bite sized sections
7. Cover and refrigerate until firm
8. Once firm, cut into bite sized pieces
`,__vite_glob_0_19=`---
title: "Chicken Broccoli Casserole"
source: "Handwritten Card"
meal: ["Dinner"]
effort: "Medium"
season: ["All"]
protein: "Chicken"
cost: "Low"
kitchen_impact: "Medium"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["casserole", "chicken", "broccoli", "baked"]
nutrition:
  serving_size: "1 portion"
  servings_per_recipe: 8
  calories_per_serving: 420
ingredients:
  - item: "Cooked Chicken"
    amount: "2–3 cups, shredded"
    calories: 600
  - item: "Broccoli"
    amount: "2 cups, chopped"
    calories: 60
  - item: "Cream of Chicken Soup"
    amount: "1 can"
    calories: 300
  - item: "Mayonnaise"
    amount: "1 cup"
    calories: 1440
  - item: "Shredded Cheddar Cheese"
    amount: "1 cup"
    calories: 440
  - item: "Eggs"
    amount: "2"
    calories: 140
  - item: "Crushed Crackers (Ritz-style)"
    amount: "1 sleeve"
    calories: 480
  - item: "Butter"
    amount: "1/4 cup, melted"
    calories: 400
---

# Instructions
1. Preheat oven to 350°F.
2. Lightly steam or blanch broccoli until just tender.
3. In a large bowl, combine chicken, broccoli, cream of chicken soup, mayonnaise, cheese, and eggs.
4. Spread mixture into a greased baking dish.
5. Mix crushed crackers with melted butter and sprinkle evenly over top.
6. Bake 30–40 minutes, until hot and bubbly.
7. Let rest 5–10 minutes before serving.

# Nutrition Notes
Total recipe: ~3,860 calories  
Per serving (~8 servings): ~420 calories (estimate)`,__vite_glob_0_20=`---
title: "Chicken and Rice"
source: "LeaAnn Van Lohuizen"
meal: ['Dinner']
effort: "Low"
season: ['All-year']
protein: "Chicken"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ['one-pot', 'casserole', 'comfort-food']
ingredients:
  - item: "Cream of Mushroom Soup"
    amount: "1 can"
  - item: "Lipton dry soup mix"
    amount: "1 envelope"
  - item: "Rice"
    amount: "1 cup"
  - item: "Water"
    amount: "2 soupcans"
---

# Instructions
1. Preheat oven to 425*
2. Combine cream of mushroom, water, and soup mix into a shallow pan
3. Arrange chopped chicken over rice mix
4. Brush chicken tops with butter
5. Bake for 30 minutes covered - remove foil and bake an additonal 30 minutes
Can also use Pork Chops
`,__vite_glob_0_21=`---
title: "Chicken Spaghetti Casserole"
source: "Handwritten Card"
meal: ["Dinner"]
effort: "Medium"
season: ["Fall", "Winter"]
protein: "Chicken"
cost: "Low"
kitchen_impact: "Medium"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["casserole", "chicken", "pasta", "baked"]
nutrition:
  serving_size: "1 portion"
  servings_per_recipe: 8
  calories_per_serving: 450
ingredients:
  - item: "Cooked Chicken"
    amount: "2–3 cups, shredded"
    calories: 600
  - item: "Spaghetti"
    amount: "1 lb"
    calories: 1680
  - item: "Cream of Mushroom Soup"
    amount: "1 can"
    calories: 220
  - item: "Cream of Chicken Soup"
    amount: "1 can"
    calories: 300
  - item: "Rotel (diced tomatoes & green chilies)"
    amount: "1 can"
    calories: 50
  - item: "Velveeta Cheese"
    amount: "8 oz"
    calories: 640
  - item: "Onion"
    amount: "1/2 cup, chopped"
    calories: 25
  - item: "Bell Pepper"
    amount: "1/2 cup, chopped"
    calories: 15
  - item: "Salt and Pepper"
    amount: "to taste"
    calories: 0
---

# Instructions
1. Preheat oven to 350°F.
2. Cook spaghetti according to package directions; drain.
3. In a large bowl, combine cooked chicken, soups, Rotel, Velveeta (cubed), onion, and bell pepper.
4. Stir in cooked spaghetti until evenly mixed.
5. Pour into a greased baking dish.
6. Bake 30–40 minutes, until heated through and bubbly.
7. Let rest 5–10 minutes before serving.

# Nutrition Notes
Total recipe: ~3,530 calories  
Per serving (~8 servings): ~450 calories`,__vite_glob_0_22=`---
title: "Chili"
source: "Handwritten Card"
meal: ["Dinner"]
effort: "Medium"
season: ["Fall", "Winter"]
protein: "Beef"
cost: "Low"
kitchen_impact: "Medium"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["chili", "one-pot", "comfort-food", "beef"]
nutrition:
  serving_size: "1 bowl"
  servings_per_recipe: 6
  calories_per_serving: 400
ingredients:
  - item: "Ground Beef"
    amount: "1 lb"
    calories: 1150
  - item: "Kidney Beans"
    amount: "1 can"
    calories: 350
  - item: "Tomato Sauce"
    amount: "1 can"
    calories: 150
  - item: "Diced Tomatoes"
    amount: "1 can"
    calories: 100
  - item: "Onion"
    amount: "1 medium"
    calories: 45
  - item: "Chili Powder"
    amount: "1–2 Tbsp"
    calories: 20
  - item: "Salt and Pepper"
    amount: "to taste"
    calories: 0
---

# Instructions
1. Brown ground beef in a large pot; drain excess grease.
2. Add chopped onion and cook until softened.
3. Stir in kidney beans, tomato sauce, and diced tomatoes.
4. Add chili powder, salt, and pepper.
5. Simmer on low for 30–45 minutes, stirring occasionally.
6. Adjust seasoning and serve hot.

# Nutrition Notes
Total recipe: ~2,400 calories  
Per serving (~6 servings): ~400 calories`,__vite_glob_0_23=`---
title: "Chili Marinated Shrimp"
source: "LeaAnn & Tim Van Lohuizen"
meal: ['Lunch', 'Dinner']
effort: "Medium"
season: ['Summer']
protein: "Seafood"
cost: "High"
kitchen_impact: "Medium"
repeatability: "Medium"
is_component: false
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ['grilled', 'citrus', 'spicy', 'marinade']
ingredients:
  - item: "Cumin"
    amount: "1/2 tsp"
  - item: "Chili Powder"
    amount: "1/2 tsp"
  - item: "Paprika"
    amount: "1/2 tsp"
  - item: "Orange Juice"
    amount: "2 Tbs"
  - item: "Orange Zest"
    amount: "Full orange"
  - item: "Olive Oil"
    amount: "2 Tbs"
  - item: "Cilantro, chopped"
    amount: "2 Tbs"
  - item: "Shrimp, shell on-tail off"
    amount: "1 lb"
  - item: "Avocados"
    amount: "2 diced"
  - item: "Onion"
    amount: "1/2 diced"
  - item: "Lime Juice"
    amount: "1/2 lime"
---

# Instructions
1. Combine seasonings, orange juice, zest, olive oil, and shrimp into a ziploc bag
2. Marinade shrimp for at least an hour
3. Put on skewers to BBQ or place in pan to saute
4. Toss with avocados, onion, chili pepper, and juice of lime.
`,__vite_glob_0_24=`---
title: "Chocolate Chip Cookies"
source: "Handwritten Card"
meal: ["Dessert"]
effort: "Medium"
season: ["All"]
protein: "None"
cost: "Low"
kitchen_impact: "Medium"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["cookies", "dessert", "baking", "chocolate-chip"]
nutrition:
  serving_size: "1 cookie"
  servings_per_recipe: 24
  calories_per_serving: 210
ingredients:
  - item: "Butter"
    amount: "1 cup (2 sticks), softened"
    calories: 1600
  - item: "Sugar"
    amount: "3/4 cup"
    calories: 600
  - item: "Brown Sugar"
    amount: "3/4 cup"
    calories: 630
  - item: "Eggs"
    amount: "2"
    calories: 140
  - item: "Vanilla"
    amount: "1 tsp"
    calories: 10
  - item: "Flour"
    amount: "2 1/4 cups"
    calories: 1020
  - item: "Baking Soda"
    amount: "1 tsp"
    calories: 0
  - item: "Salt"
    amount: "1 tsp"
    calories: 0
  - item: "Chocolate Chips"
    amount: "2 cups"
    calories: 1600
---

# Instructions
1. Preheat oven to 375°F.
2. Cream together butter, sugar, and brown sugar until smooth.
3. Beat in eggs and vanilla.
4. In a separate bowl, combine flour, baking soda, and salt.
5. Gradually mix dry ingredients into wet ingredients.
6. Stir in chocolate chips.
7. Drop spoonfuls onto ungreased baking sheet.
8. Bake 9–11 minutes, until golden brown.
9. Cool on wire rack before serving.

# Nutrition Notes
Total recipe: ~5,600 calories  
Per serving (~24 cookies): ~210 calories`,__vite_glob_0_25=`---
title: "Cinnamon Puffs"
source: "Handwritten Card"
meal: ["Breakfast", "Dessert"]
effort: "Medium"
season: ["All"]
protein: "None"
cost: "Low"
kitchen_impact: "Medium"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["breakfast", "sweet", "baked", "cinnamon"]
nutrition:
  serving_size: "1 puff"
  servings_per_recipe: 12
  calories_per_serving: 180
ingredients:
  - item: "Flour"
    amount: "1 1/2 cups"
    calories: 680
  - item: "Sugar"
    amount: "1/2 cup"
    calories: 400
  - item: "Baking Powder"
    amount: "1 1/2 tsp"
    calories: 0
  - item: "Salt"
    amount: "1/2 tsp"
    calories: 0
  - item: "Nutmeg"
    amount: "1/4 tsp"
    calories: 3
  - item: "Milk"
    amount: "1/2 cup"
    calories: 60
  - item: "Egg"
    amount: "1"
    calories: 70
  - item: "Butter"
    amount: "1/3 cup, melted"
    calories: 530
  - item: "Cinnamon Sugar (for coating)"
    amount: "1/2 cup sugar + 1 tsp cinnamon"
    calories: 400
---

# Instructions
1. Preheat oven to 350°F.
2. In a bowl, mix flour, sugar, baking powder, salt, and nutmeg.
3. In another bowl, combine milk, egg, and melted butter.
4. Stir wet ingredients into dry ingredients until just combined.
5. Fill greased muffin tin cups about 2/3 full.
6. Bake 18–22 minutes, until lightly golden.
7. While still warm, dip tops in melted butter and roll in cinnamon sugar.
8. Serve warm.

# Nutrition Notes
Total recipe: ~2,143 calories  
Per serving (~12 puffs): ~180 calories (estimate)`,__vite_glob_0_26=`---
title: "Coconut Rum Balls"
source: "LeaAnn Van Lohuizen"
meal: ['Snack']
effort: "Low"
season: ['Winter']
protein: "Vegetarian"
cost: "Medium"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ['no-bake', 'rum', 'coconut', 'christmas']
ingredients:
  - item: "Vanilla Wafters"
    amount: "12 oz package / 3 cups finely crushed"
  - item: "Flaked Coconut"
    amount: "3.5 oz  + extra for rolling"
  - item: "Nuts"
    amount: "1 cup"
  - item: "Sweetened Condensed Milk"
    amount: "14 oz"
  - item: "Rum"
    amount: "1/4 cup"
---

# Instructions
1. In a large bowl combine waffer crumbs, coconut, and nuts
2. Add sweetened consensed milk and rum
3. Chill for 4 hours
4.Shape into 1" balls
5. Roll in coconut flakes
6. Store in the fridge
`,__vite_glob_0_27=`---
title: "Colorado Chile Sauce"
source: "Hot Stove Society"
meal: ['Dinner']
effort: "Medium"
season: ['All-year']
protein: "Vegetarian"
cost: "Medium"
kitchen_impact: "Medium"
repeatability: "High"
is_component: true
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ['mexican', 'sauce', 'spicy']
ingredients:
  - item: "Guajillo or Ancho Chiles"
    amount: "4-6 chiles"
  - item: "Warm Water"
    amount: "2 cups"
  - item: "Yellow Onion"
    amount: "1/2 onion"
  - item: "Garlic"
    amount: "2 cloves"
  - item: "Red Chili Sauce"
    amount: "1 3/4 cups"
---

# Instructions
1. Remove stems, veins, and seeds from the dried chiles
2. Heat a nonstick frying pan over medium heat. When hot, add the chilies and cook just unitl they start to change color, pressing down occasionally. Flip chilies and repeat on the second side.
3. Put the toasted chilies into a pie plate, fill part-way full with water and make sure they remain submerged. Soak for 30-45 minutes.
4. Once done soaking, put them into a food blender alongwith onion, garlic, oregano, cilantro, and cumin. Add around a cup of soaking liquid and puree. Strain through a wire mesh.
You can fry the sauce in fat on the stove to be more like mole
`,__vite_glob_0_28=`---
title: "Corn Flan"
source: "Handwritten Card"
meal: ["Side"]
effort: "Low"
season: ["All"]
protein: "None"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["side-dish", "corn", "baked", "holiday"]
nutrition:
  serving_size: "1 square"
  servings_per_recipe: 9
  calories_per_serving: 280
ingredients:
  - item: "Jiffy Corn Muffin Mix"
    amount: "1 box"
    calories: 840
  - item: "Whole Kernel Corn"
    amount: "1 can, drained"
    calories: 280
  - item: "Creamed Corn"
    amount: "1 can"
    calories: 420
  - item: "Sour Cream"
    amount: "1 cup"
    calories: 480
  - item: "Butter"
    amount: "1/2 cup, melted"
    calories: 800
---

# Instructions
1. Preheat oven to 350°F.
2. In a bowl, combine Jiffy mix, whole kernel corn, creamed corn, sour cream, and melted butter.
3. Stir until fully combined.
4. Pour into a greased baking dish.
5. Bake 45–50 minutes, until set and golden on top.
6. Let cool slightly before serving.

# Nutrition Notes
Total recipe: ~2,820 calories  
Per serving (~9 servings): ~280 calories`,__vite_glob_0_29=`---
title: "Corn Tortillas"
source: "Hot Stove Society"
meal: ['Lunch', 'Dinner']
effort: "Medium"
season: ['All-year']
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Medium"
repeatability: "High"
is_component: true
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ['mexican', 'masa']
ingredients:
  - item: "Maseca Corn Masa"
    amount: "2 cups"
  - item: "Water"
    amount: "2 cups"
---

# Instructions
1. Mix the masa with water (a little at a time) and work so that it evenly distributed through the flour. The dough is supposed to feel wet when you squeeze but not stick to your hand
1. Divide the dough into 15 equal parts and roll into smooth balls about 1.5 inches in diameter. Place under plastic wrap so they dont dry out
2. Heat an ungreased comal or griddle overa medium flame to warm completely
3. Open up the tortilla press and place a small bag on the bottom plate. Place a ball of the dough on bottom bag, a little off center toward the hinge, and press it out with your fingers to flatten a little. Cober with the second bag and press down firmly, but not too hard
4. Open the press, remove the top bag, ift the bottom bag in one hand, place the dough onto the fingers of your other hand, and very carefully peel the bag off the flattened dough
5. Lay the tortilla falt onto the cormal/griddle. there should be a slight sizzle as the dough touches the surface. Leave for about 15 seconds; the underside will have opaque patches and be slightly speckled with brown
6. Flip the tortilla over onto the second side and cook for a further 30 seconds; the underside should now be opaque and speckled
7. Pat the dough to get the dough to puff. Flip back onto the first side again and cook for 15 second more. Hold in foil to steam
`,__vite_glob_0_30=`---
title: "Cornbread"
source: "Handwritten Card"
meal: ["Side"]
effort: "Low"
season: ["All"]
protein: "None"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: true
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["cornbread", "side-dish", "baking", "holiday"]
nutrition:
  serving_size: "1 square"
  servings_per_recipe: 9
  calories_per_serving: 220
ingredients:
  - item: "Cornmeal"
    amount: "1 cup"
    calories: 440
  - item: "Flour"
    amount: "1 cup"
    calories: 455
  - item: "Sugar"
    amount: "1/4 cup"
    calories: 200
  - item: "Baking Powder"
    amount: "1 Tbsp"
    calories: 5
  - item: "Salt"
    amount: "1 tsp"
    calories: 0
  - item: "Egg"
    amount: "1"
    calories: 70
  - item: "Milk"
    amount: "1 cup"
    calories: 150
  - item: "Oil or Melted Butter"
    amount: "1/4 cup"
    calories: 480
---

# Instructions
1. Preheat oven to 400°F.
2. In a bowl, mix cornmeal, flour, sugar, baking powder, and salt.
3. Add egg, milk, and oil (or melted butter).
4. Stir until just combined.
5. Pour into a greased baking dish or skillet.
6. Bake 20–25 minutes, until golden brown and set.
7. Let cool slightly before slicing.

# Nutrition Notes
Total recipe: ~1,800 calories  
Per serving (~9 squares): ~220 calories`,__vite_glob_0_31=`---
title: "Cornbread Dressing from Grandma"
source: "Handwritten Card"
meal: ["Dinner"]
effort: "Medium"
season: ["Fall", "Winter"]
protein: "Poultry"
cost: "Low"
kitchen_impact: "Medium"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["side-dish", "holiday", "thanksgiving", "cornbread", "dressing"]
nutrition:
  serving_size: "1 cup"
  servings_per_recipe: 8
  calories_per_serving: 250
ingredients:
  - item: "Cornbread"
    amount: "Equal amount (see note)"
    calories: 800
  - item: "Biscuits"
    amount: "Equal amount (see note)"
    calories: 800
  - item: "Eggs"
    amount: "2–3, beaten"
    calories: 210
  - item: "Chicken or Turkey Broth"
    amount: "Enough to moisten"
    calories: 60
  - item: "Onion"
    amount: "3/4 cup"
    calories: 45
  - item: "Celery"
    amount: "3/4 cup"
    calories: 15
  - item: "Salt and Pepper"
    amount: "to taste"
    calories: 0
---

# Instructions
1. Combine equal amounts crumbled cornbread and biscuits.
2. Beat eggs and stir into the cornbread/biscuit mixture.
3. Add onion and celery.
4. Add chicken or turkey broth gradually until mixture is well moistened but not soupy.
5. Season with salt and pepper.
6. Bake at 450°F for 30 minutes.
7. Check for golden brown color before removing.

# Nutrition Notes
Total recipe: ~1,930 calories  
Per serving (~1 cup, 8 servings): ~250 calories`,__vite_glob_0_32=`---
title: "Crab Cakes"
source: "Handwritten Card"
meal: ["Dinner"]
effort: "Medium"
season: ["All"]
protein: "Seafood"
cost: "High"
kitchen_impact: "Medium"
repeatability: "Medium"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["seafood", "crab", "pan-fried", "dinner"]
nutrition:
  serving_size: "1 crab cake"
  servings_per_recipe: 6
  calories_per_serving: 220
ingredients:
  - item: "Crab Meat"
    amount: "1 lb"
    calories: 400
  - item: "Egg"
    amount: "1"
    calories: 70
  - item: "Mayonnaise"
    amount: "1/2 cup"
    calories: 720
  - item: "Bread Crumbs"
    amount: "1/2 cup"
    calories: 200
  - item: "Mustard"
    amount: "1 tsp"
    calories: 5
  - item: "Worcestershire Sauce"
    amount: "1 tsp"
    calories: 5
  - item: "Salt and Pepper"
    amount: "to taste"
    calories: 0
  - item: "Oil (for frying)"
    amount: "as needed"
    calories: 120
---

# Instructions
1. In a bowl, combine crab meat, egg, mayonnaise, bread crumbs, mustard, Worcestershire sauce, salt, and pepper.
2. Form mixture into patties.
3. Heat oil in a skillet over medium heat.
4. Cook crab cakes 3–4 minutes per side, until golden brown.
5. Drain on paper towels and serve.

# Nutrition Notes
Total recipe: ~1,520 calories  
Per serving (~6 cakes): ~220 calories`,__vite_glob_0_33=`---
title: "Cranberry Tea Cookies"
source: "Brooke Van Lohuizen"
meal: ['Snack']
effort: "Medium"
season: ['Fall', 'Winter']
protein: "Vegetarian"
cost: "Medium"
kitchen_impact: "Medium"
repeatability: "High"
is_component: false
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ['cookies', 'cranberry', 'pecans']
ingredients:
  - item: "Butter"
    amount: "8 oz"
  - item: "Sugar"
    amount: "1/2 cup"
  - item: "Milk"
    amount: "2 Tbs"
  - item: "Vanilla"
    amount: "1 tsp"
  - item: "Flour"
    amount: "2 1/2 cup"
  - item: "Pecans"
    amount: "1/2 cup"
  - item: "Dried Cranberries, chopped"
    amount: "3/4 cup"
---

# Instructions
1. Preheat oven to 375*F
2. In a medium bowl mix four and salt
3. Cream butter and sugar
4. Add in milk and vanilla
5. Gradually add flour - mix to combined
6. Add cranberries and pecans
7. Using cling wrap, roll dough into a log, slice 1/2" slcices 
7. Bake 10-15 minutes, or until they begin to brown.
`,__vite_glob_0_34=`---
title: "Basic Crepes"
source: "Your Recipe"
meal: ["Breakfast", "Snack"]
effort: "Medium"
season: ["All-year"]
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Medium"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["french", "breakfast", "crepes"]
nutrition:
  serving_size: "1 crepe"
  servings_per_recipe: 14
  calories_per_serving: 95
ingredients:
  - item: "Flour"
    amount: "1 cup"
    calories: 455
  - item: "Eggs"
    amount: "4"
    calories: 280
  - item: "Milk"
    amount: "1/2 cup"
    calories: 75
  - item: "Water"
    amount: "1/2 cup"
    calories: 0
  - item: "Salt"
    amount: "1/4 tsp"
    calories: 0
  - item: "Melted Butter"
    amount: "2 T"
    calories: 200
---

# Instructions
1. Mix until smooth. Strain into a bowl and let stand for 30 minutes
2. Medium heat, medium skillet. 1/4 cup batter. Tilt pan to spread batter around. Cook ~30 seconds
3. Lift edges with spatula and flip crepe with hands. Cook second side about 20 seconds

# Nutrition Notes
Total recipe: ~1,010 calories
Per crepe (makes 14): ~95 calories
`,__vite_glob_0_35=`---
title: "Crockpot Chicken"
source: "Handwritten Card"
meal: ["Dinner"]
effort: "Low"
season: ["All"]
protein: "Chicken"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["crockpot", "chicken", "easy", "slow-cooker"]
nutrition:
  serving_size: "1 portion"
  servings_per_recipe: 6
  calories_per_serving: 350
ingredients:
  - item: "Chicken Breasts"
    amount: "4–6 pieces"
    calories: 1200
  - item: "Cream of Chicken Soup"
    amount: "1 can"
    calories: 300
  - item: "Dry Onion Soup Mix"
    amount: "1 packet"
    calories: 120
  - item: "Sour Cream"
    amount: "1 cup"
    calories: 480
---

# Instructions
1. Place chicken breasts in crockpot.
2. Mix cream of chicken soup, onion soup mix, and sour cream together.
3. Pour mixture over chicken.
4. Cook on low for 6–8 hours (or high for 3–4 hours).
5. Serve over rice or noodles.

# Nutrition Notes
Total recipe: ~2,100 calories  
Per serving (~6 servings): ~350 calories`,__vite_glob_0_36=`---
title: "Crockpot Round Steak"
source: "Handwritten Card"
meal: ["Dinner"]
effort: "Low"
season: ["Fall", "Winter"]
protein: "Beef"
cost: "Medium"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["crockpot", "beef", "slow-cooker", "comfort-food"]
nutrition:
  serving_size: "1 portion"
  servings_per_recipe: 6
  calories_per_serving: 450
ingredients:
  - item: "Round Steak"
    amount: "2–3 lbs"
    calories: 2400
  - item: "Cream of Mushroom Soup"
    amount: "1 can"
    calories: 220
  - item: "Onion Soup Mix"
    amount: "1 packet"
    calories: 120
  - item: "Water or Beef Broth"
    amount: "1/2–1 cup"
    calories: 20
  - item: "Onion"
    amount: "1, sliced"
    calories: 45
---

# Instructions
1. Place round steak in crockpot.
2. Top with sliced onion.
3. In a bowl, mix cream of mushroom soup, onion soup mix, and water or beef broth.
4. Pour mixture over steak.
5. Cook on low for 6–8 hours (or high for 4–5 hours) until tender.
6. Serve with mashed potatoes or rice.

# Nutrition Notes
Total recipe: ~2,805 calories  
Per serving (~6 servings): ~450 calories`,__vite_glob_0_37=`---
title: "Curtido"
source: "Hot Stove Society"
meal: ['Snack']
effort: "Low"
season: ['All-year']
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: true
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ['salvadoran', 'pickled', 'slaw']
ingredients:
  - item: "Distilled Vinegar"
    amount: "1/4 cup"
  - item: "Sugar"
    amount: "1 1/2 tsp"
  - item: "Chili Flakes"
    amount: "To Taste"
  - item: "Oregono"
    amount: "1 tsp"
  - item: "Carrot"
    amount: "1 Lg"
  - item: "Onion"
    amount: "1/2 onion"
  - item: "Cabbage"
    amount: "1/4 head"
  - item: "Salt to taste"
    amount: ""
---

# Instructions
1. Combine ingredients, season with salt, toss and chill
`,__vite_glob_0_38=`---
title: "Emeril’s Eggnog"
source: "Handwritten Card"
meal: ["Drink"]
effort: "Medium"
season: ["Winter", "Holiday"]
protein: "Egg"
cost: "Medium"
kitchen_impact: "Low"
repeatability: "Seasonal"
is_component: false
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ["eggnog", "holiday", "bourbon", "brandy", "custard"]
nutrition:
  serving_size: "1 cup (estimated)"
  servings_per_recipe: 10
  calories_per_serving: 430
ingredients:
  - item: "Large Eggs"
    amount: "8 (2 separated)"
    calories: 560
  - item: "Sugar"
    amount: "3/4 cup"
    calories: 580
  - item: "Salt"
    amount: "1/8 tsp"
    calories: 0
  - item: "Heavy Cream"
    amount: "2 1/2 cups"
    calories: 2050
  - item: "Whole Milk"
    amount: "2 cups"
    calories: 300
  - item: "Vanilla"
    amount: "1 Tbsp"
    calories: 35
  - item: "Bourbon"
    amount: "3/4 cup"
    calories: 730
  - item: "Brandy"
    amount: "1/4 cup"
    calories: 250
---

# Instructions

1. Combine 6 whole eggs, 2 egg yolks, sugar, & salt, whisk together.
2. Heat 2 cups heavy cream w/ whole milk in saucepan. Once hot, ladle 1 cup into egg mixture & mix.
3. Pour egg-milk mix back into saucepan & continue to cook, stirring continuously, until coats the back of a spoon.
4. Then strain through a fine-mesh sieve. Cool for 10 minutes.
5. Add vanilla & stir.
6. Beat 2 egg whites to soft peaks & fold into custard base.
7. In a separate bowl, beat 1/2 c cream to soft peaks & fold in.
8. Cover & refrigerate overnight. Drink.

# Nutrition Notes

Total recipe (with alcohol): ~4,505 calories  
Per serving (~10 cups): ~430 calories (estimate)  

Base only (no bourbon or brandy): ~3,525 calories total  
Base per serving (~10 cups): ~350 calories`,__vite_glob_0_39=`---
title: "Franke’s Spaghetti Sauce"
source: "Handwritten Card"
meal: ["Dinner"]
effort: "Medium"
season: ["All"]
protein: "Beef"
cost: "Low"
kitchen_impact: "Medium"
repeatability: "High"
is_component: true
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["pasta", "sauce", "beef", "italian-inspired"]
nutrition:
  serving_size: "1 cup"
  servings_per_recipe: 8
  calories_per_serving: 275
ingredients:
  - item: "Onion"
    amount: "3/4 cup, chopped"
    calories: 45
  - item: "Celery"
    amount: "3/4 cup, chopped"
    calories: 15
  - item: "Garlic"
    amount: "2 cloves, minced"
    calories: 10
  - item: "Green Pepper"
    amount: "1/2, chopped"
    calories: 15
  - item: "Butter or Margarine"
    amount: "2 Tbsp"
    calories: 200
  - item: "Ground Beef"
    amount: "1 lb"
    calories: 1150
  - item: "Salt"
    amount: "1 1/2 tsp"
    calories: 0
  - item: "Cumin"
    amount: "1 tsp"
    calories: 8
  - item: "Chili Powder"
    amount: "1 tsp"
    calories: 8
  - item: "Ground Red Pepper"
    amount: "1/4 tsp"
    calories: 2
  - item: "Tomato Soup"
    amount: "1 (10 3/4 oz) can"
    calories: 300
  - item: "Tomato Sauce"
    amount: "2 (8 oz) cans"
    calories: 240
---

# Instructions
1. Sauté onion, celery, garlic, and green pepper in butter until tender.
2. Add ground beef and cook until browned; drain excess fat.
3. Stir in salt, cumin, chili powder, and red pepper.
4. Add tomato soup and tomato sauce.
5. Simmer 30–45 minutes, stirring occasionally.
6. Serve over cooked spaghetti.

# Nutrition Notes
Total recipe: ~1,993 calories  
Per serving (~8 servings): ~275 calories (estimate)`,__vite_glob_0_40=`---
title: "French Market Quiche"
source: "Handwritten Card"
meal: ["Breakfast", "Brunch"]
effort: "Medium"
season: ["All"]
protein: "Egg", "Ham"
cost: "Medium"
kitchen_impact: "Medium"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["quiche", "brunch", "ham", "provolone", "pimientos"]
nutrition:
  serving_size: "1 slice (1/8 quiche)"
  servings_per_recipe: 8
  calories_per_serving: 520
ingredients:
  - item: "Flour"
    amount: "1 1/2 c"
    calories: 680
  - item: "Butter, cut up"
    amount: "1/2 c"
    calories: 800
  - item: "Salt"
    amount: "1/2 t (crust)"
    calories: 0
  - item: "Ice water"
    amount: "3 T"
    calories: 0
  - item: "Eggs, beaten"
    amount: "4"
    calories: 280
  - item: "Salt"
    amount: "1/2 t (filling)"
    calories: 0
  - item: "Pepper"
    amount: "1/8 t"
    calories: 0
  - item: "Cayenne"
    amount: "Dash"
    calories: 0
  - item: "Dry mustard"
    amount: "1 t"
    calories: 5
  - item: "Sour cream"
    amount: "1/2 c"
    calories: 240
  - item: "Chopped green onion"
    amount: "1/2 c"
    calories: 15
  - item: "Sliced black olives"
    amount: "1/2 c"
    calories: 100
  - item: "Diced ham"
    amount: "1/2 c"
    calories: 120
  - item: "Diced provolone cheese"
    amount: "1 c"
    calories: 400
  - item: "Chopped pimientos"
    amount: "1 (2 oz) jar"
    calories: 20
---

# Instructions

1. Preheat oven to 425°.
2. Place flour, butter and salt in a food processor. Add ice water while blending until mixture forms a ball.
3. Remove and roll out between two sheets of wax paper to form a 12" circle.
4. Place in 9" tart or quiche pan and bake for 10 minutes.
5. Mix eggs with salt, pepper, cayenne, dry mustard and sour cream.
6. Place green onions, black olives, ham, cheese and pimientos in bottom of crust.
7. Pour egg mix into crust.
8. Bake for 30–35 minutes until browned and set.

# Nutrition Notes

Total recipe: ~2,660 calories  
Per serving (1/8 quiche): ~520 calories  

High-fat crust and cheese drive most calories.  
Protein-forward for a brunch dish (~20–25g per slice estimated).  
Freezes well in slices.`,__vite_glob_0_41=`---
title: "French Onion Soup"
source: "LeaAnn Van Lohuizen"
meal: ['Lunch', 'Dinner']
effort: "Medium"
season: ['Fall', 'Winter']
protein: "Beef"
cost: "Medium"
kitchen_impact: "Medium"
repeatability: "Medium"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ['soup', 'cheese']
ingredients:
  - item: "Onions"
    amount: "2 cups"
  - item: "Butter"
    amount: "3 Tbs"
  - item: "Beef Stock"
    amount: "6 Cups"
  - item: "Cooking Wine"
    amount: "1/4 cup"
  - item: "French Bread, Sliced"
    amount: "4 Slices"
  - item: "Parmesan Cheese"
    amount: "1/2 cup"
  - item: "Gruyere Cheese"
    amount: "1/2 cup"
---

# Instructions
1. Preheat oven to 275*
2. Brown the onions in butter, slowly
2. Add beef stock and cook 30 minutes
3. Stir in wine and season to taste
4. Ladle hot soup into oven proof bowls on a cookie sheet
5. Put piece of toast on top of each bowl in the soup
6. Sprinkle grated cheese evenly on the toast
7. Place tray with bowls in oven for about 5 minutes or until cheese melts
`,__vite_glob_0_42=`---
title: "Fresh Pesto"
source: "LeaAnn Van Lohuizen"
meal: ['Lunch', 'Dinner']
effort: "Low"
season: ['Summer']
protein: "Vegetarian"
cost: "Medium"
kitchen_impact: "Low"
repeatability: "High"
is_component: true
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ['basil', 'sauce', 'italian']
ingredients:
  - item: "Fresh Basil"
    amount: "2 cups"
  - item: "Parmesan or Romono"
    amount: "1/2 cup"
  - item: "Olive Oil"
    amount: "1/2 cup"
  - item: "Pine Nuts"
    amount: "1/3 cup"
  - item: "Garlic"
    amount: "3 cloves"
  - item: "Salt and pepper"
    amount: ""
---

# Instructions
1. Pulse basil and pine nuts in a food processor
2. Add garlic and pulse again
3. Slowly add olive oil in a stream into the processor
4. Add cheese and pulse
5. Add salt and Pepper. Taste and adjust
`,__vite_glob_0_43=`---
title: "Fried Chicken"
source: "Handwritten Card"
meal: ["Dinner"]
effort: "Medium"
season: ["All"]
protein: "Chicken"
cost: "Medium"
kitchen_impact: "High"
repeatability: "Medium"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["chicken", "fried", "southern", "comfort-food"]
nutrition:
  serving_size: "1 piece"
  servings_per_recipe: 8
  calories_per_serving: 350
ingredients:
  - item: "Chicken Pieces"
    amount: "1 whole chicken, cut up"
    calories: 1600
  - item: "Buttermilk"
    amount: "1 quart"
    calories: 600
  - item: "Eggs"
    amount: "2"
    calories: 140
  - item: "Flour"
    amount: "2 cups (for dredging)"
    calories: 900
  - item: "Saltines"
    amount: "2–3 sleeves, crushed"
    calories: 900
  - item: "Peanut Oil"
    amount: "for frying"
    calories: 1000
  - item: "Salt"
    amount: "to taste"
    calories: 0
  - item: "Pepper"
    amount: "to taste"
    calories: 0
---

# Instructions
1. Preheat oven to 350°F.
2. Season chicken with salt and pepper.
3. Whisk eggs and buttermilk together.
4. Dredge chicken in flour.
5. Dip into egg mixture.
6. Press into crushed saltines.
7. Heat 1 inch peanut oil to 350°F.
8. Fry until golden brown.
9. Transfer to baking sheet and bake about 40 minutes until cooked through.

# Nutrition Notes
Total recipe: ~5,140 calories  
Per serving (~8 pieces): ~350 calories (estimate)`,__vite_glob_0_44=`---
title: "Fried Rice"
source: "Handwritten Card"
meal: ["Dinner"]
effort: "Low"
season: ["All"]
protein: "Varies"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["rice", "stir-fry", "leftovers", "quick"]
nutrition:
  serving_size: "1 bowl"
  servings_per_recipe: 4
  calories_per_serving: 400
ingredients:
  - item: "Cooked Rice (day-old)"
    amount: "4 cups"
    calories: 800
  - item: "Meat of Choice"
    amount: "1–2 cups, cooked"
    calories: 600
  - item: "Mixed Vegetables"
    amount: "1–2 cups, chopped"
    calories: 150
  - item: "Soy Sauce"
    amount: "2 Tbsp"
    calories: 20
  - item: "Mirin"
    amount: "2 Tbsp"
    calories: 70
  - item: "Egg"
    amount: "1"
    calories: 70
  - item: "Sesame Oil"
    amount: "1 tsp"
    calories: 40
  - item: "Green Onion"
    amount: "to taste"
    calories: 5
  - item: "Salt and Pepper"
    amount: "to taste"
    calories: 0
---

# Instructions
1. Brown meat if not already cooked; set aside.
2. Heat oil in wok until very hot.
3. Add rice and stir-fry, breaking up clumps.
4. Add meat and cook a few minutes.
5. Add vegetables and cook to desired tenderness.
6. Stir in soy sauce and mirin.
7. Beat egg and pour over rice; let set briefly, then stir to combine.
8. Finish with sesame oil and green onion.
9. Adjust seasoning and serve.

# Nutrition Notes
Total recipe: ~1,755 calories  
Per serving (~4 servings): ~400 calories (estimate)`,__vite_glob_0_45=`---
title: "Garlic Chili Chicken"
source: "Your Recipe"
meal: ["Lunch", "Dinner"]
effort: "Low"
season: ["All-year"]
protein: "Chicken"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: true
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["mexican", "spicy", "tacos", "quick"]
nutrition:
  serving_size: "1/2 recipe"
  servings_per_recipe: 2
  calories_per_serving: 190
ingredients:
  - item: "Chicken Breasts"
    amount: "2, cubed"
    calories: 360
  - item: "Garlic Chili Sauce (Lee Kum Kee)"
    amount: "1 tbsp"
    calories: 10
  - item: "Lime Juice"
    amount: "1 lime"
    calories: 10
  - item: "Salt"
    amount: "to taste"
    calories: 0
  - item: "Black Pepper"
    amount: "to taste"
    calories: 0
---

# Instructions
1. Cube chicken breasts
2. Place cubed chicken in a skillet or pot and add enough water to cover
3. Bring to a boil, then reduce heat and simmer
4. After about 10-20 minutes of simmering (when water is mostly evaporated), add garlic chili sauce to the water
5. Continue cooking until water is fully evaporated and chicken shreds easily
6. Shred the chicken with two forks
7. Squeeze lime juice over the chicken
8. Season with salt and pepper to taste
9. Cook for another 1-2 minutes to let flavors combine

# Serving Suggestions
Perfect for tacos, quesadillas, or taco bowls

# Nutrition Notes
Total recipe: ~380 calories
Per serving (1/2 recipe): ~190 calories
`,__vite_glob_0_46=`---
title: "Lemon-Garlic Tahini Dressing"
source: "House Standard"
meal: ["Lunch", "Dinner"]
effort: "Low"
season: ["All-year"]
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: true
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ["sauce", "dressing", "middle-eastern", "vegan"]
nutrition:
  serving_size: "2 tbsp"
  servings_per_recipe: 8
  calories_per_serving: 90
ingredients:
  - item: "Tahini"
    amount: "1/2 cup, well-stirred"
    calories: 540
  - item: "Fresh Lemon Juice"
    amount: "3 tbsp"
    calories: 12
  - item: "Garlic"
    amount: "2 cloves, minced or grated"
    calories: 8
  - item: "Olive Oil"
    amount: "1 tbsp"
    calories: 120
  - item: "Maple Syrup or Honey"
    amount: "1/2 tsp (optional)"
    calories: 10
  - item: "Cumin"
    amount: "1/4 tsp"
    calories: 2
  - item: "Ice Cold Water"
    amount: "3-5 tbsp, for thinning"
    calories: 0
  - item: "Salt"
    amount: "to taste"
    calories: 0
  - item: "Black Pepper"
    amount: "to taste"
    calories: 0
---

# Instructions
1. In a small bowl or mason jar, whisk together the Tahini, lemon juice, garlic, olive oil, and sweetener until a thick paste forms.
2. Add the cumin, salt, and pepper.
3. Slowly drizzle in the ice-cold water 1 tablespoon at a time, whisking vigorously after each addition. Note: The sauce will "seize" and look broken at first, but keep whisking; it will eventually turn smooth, pale, and creamy.
4. Continue adding water until it reaches your desired consistency (thicker for a dip, thinner for a salad dressing).
5. Taste and adjust lemon or salt as needed. Store in the fridge for up to 1 week.

# Nutrition Notes
Total recipe: ~692 calories
Per serving (2 tbsp): ~90 calories
`,__vite_glob_0_47=`---
title: "Granola"
source: "Handwritten Card"
meal: ["Breakfast", "Snack"]
effort: "Easy"
season: ["All"]
protein: "Nuts (optional)"
cost: "Low"
kitchen_impact: "Medium"
repeatability: "High"
is_component: true
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ["granola", "oats", "homemade", "pantry staples"]
nutrition:
  serving_size: "1/4 cup (estimated)"
  servings_per_recipe: 12
  calories_per_serving: # TBD
ingredients:
  - item: "Oats"
    amount: "3 cups"
    calories: 900
  - item: "Brown sugar"
    amount: "3 tbsp"
    calories: 156
  - item: "Cinnamon"
    amount: "1/2 tsp"
    calories: 3
  - item: "Salt"
    amount: "1/4 tsp"
    calories: 0
  - item: "Honey"
    amount: "1/3 cup"
    calories: 345
  - item: "Veggie oil"
    amount: "1/4 cup"
    calories: 480
  - item: "Vanilla extract"
    amount: "1 tsp"
    calories: 12
  - item: "Dried fruit &/or nuts"
    amount: "Optional"
    calories: 0
  - item: "Coconut"
    amount: "Optional"
    calories: 0
---

# Instructions

1. Preheat oven to 300°F.
2. Combine oats, brown sugar, cinnamon, and salt in a bowl.
3. Mix honey, vanilla, and oil in a small bowl. Pour over dry mix and stir to combine.
4. Spread over baking sheet thinly.
5. Bake ~15 min, stir, then bake until very light golden brown (5-15 min more).

# Nutrition Notes

Total recipe: ~1,896 calories (base ingredients only).
Per serving (1/12): ~158 calories.

Calories will increase if adding dried fruit, nuts, or coconut. This is a great component to add to yogurt or eat as a cereal.`,__vite_glob_0_48=`---
title: "Green Bean Casserole"
source: "Handwritten Card"
meal: ["Side", "Dinner"]
effort: "Easy"
season: ["All", "Holiday"]
protein: "None"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["green beans", "casserole", "classic", "vegetable"]
nutrition:
  serving_size: "estimated"
  servings_per_recipe: 4
  calories_per_serving: # TBD
ingredients:
  - item: "Fresh green beans"
    amount: "3/4 lb"
    calories: 105
  - item: "Cream of mushroom soup"
    amount: "1 container"
    calories: 200
  - item: "White pepper"
    amount: "1/2 tsp"
    calories: 0
  - item: "Fried onions (purchased)"
    amount: "1 container"
    calories: 400
---

# Instructions

1. Prep the green beans: break off ends, break in half, and rinse.
2. Put green beans into a casserole dish.
3. Mix in 1 container of cream of mushroom soup and 1/2 tsp white pepper.
4. Bake at ~350° for 20 minutes.
5. Add purchased fried onions to the top.
6. Cook for another 10 minutes or so.

# Nutrition Notes

Total recipe calories will vary based on the specific brand of soup and fried onions used. Using fresh beans provides a better crunch than canned alternatives.`,__vite_glob_0_49=`---
title: "Green Chicken"
source: "Handwritten Card"
meal: ["Dinner"]
effort: "Easy"
season: ["All"]
protein: "Chicken"
cost: "Medium"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["chicken", "salsa verde", "one pan", "weeknight"]
nutrition:
  serving_size: "1/6 recipe (estimated)"
  servings_per_recipe: 6
  calories_per_serving: 360
ingredients:
  - item: "Chicken breast"
    amount: "3 lbs"
    calories: 2040
  - item: "Salsa verde"
    amount: "14 oz"
    calories: 140
  - item: "Onion, chopped"
    amount: "1"
    calories: 45
  - item: "Garlic"
    amount: "1 clove"
    calories: 5
  - item: "Chicken broth"
    amount: "1 cup"
    calories: 15
  - item: "Cumin"
    amount: "1 tsp"
    calories: 8
  - item: "Oregano"
    amount: "1/4 tsp"
    calories: 1
  - item: "Salt, pepper & flour"
    amount: "To season"
    calories: 120
---

# Instructions

1. Cut chicken to bite size pieces, season w/ salt, pepper & flour.
2. Heat oil in large saucepan over medium high heat.
3. Add chicken & cook until no longer pink.
4. Add onion and garlic, sauté for 5 minutes.
5. Stir in the broth, salsa, and seasoning.
6. Bring to a boil, lower temperature, cover and cook for 10 minutes.

# Nutrition Notes

Total recipe: ~2,374 calories  
Per serving (1/6): ~360 calories  

Very lean, high-protein base (~45g protein per serving estimated).  
Calories will increase if served with rice or tortillas.  
Good meal prep option — reheats well.`,__vite_glob_0_50=`---
title: "Guacamole"
source: "Your Recipe"
meal: ["Snack"]
effort: "Low"
season: ["All-year"]
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: true
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ["mexican", "dip", "avocado", "fresh"]
nutrition:
  serving_size: "1/4 cup"
  servings_per_recipe: 8
  calories_per_serving: 80
ingredients:
  - item: "Avocados"
    amount: "2 large"
    calories: 480
  - item: "Onion, medium"
    amount: "1/2, diced"
    calories: 22
  - item: "Jalapeno"
    amount: "1, diced"
    calories: 4
  - item: "Lime Juice"
    amount: "2 limes"
    calories: 20
  - item: "Cilantro"
    amount: "1/3 bunch, chopped"
    calories: 3
  - item: "Tomatoes"
    amount: "2, diced"
    calories: 44
  - item: "Salt"
    amount: "to taste"
    calories: 0
  - item: "Black Pepper"
    amount: "to taste"
    calories: 0
---

# Instructions
1. Open avocados and put them into a bowl
2. Smash to desired consistency
3. Add remaining ingredients and mix well
4. Add lime juice, salt, pepper, and jalapeno to preferred taste
5. Serve immediately or cover with plastic wrap pressed directly on surface to prevent browning

# Nutrition Notes
Total recipe: ~573 calories
Per serving (1/4 cup): ~80 calories
`,__vite_glob_0_51=`---
title: "Hard Boiled Eggs"
source: "Handwritten Card"
meal: ["Breakfast", "Snack"]
effort: "Easy"
season: ["All"]
protein: "Eggs"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: true
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ["eggs", "basics", "protein", "meal prep"]
nutrition:
  serving_size: "1 egg"
  servings_per_recipe: # Variable
  calories_per_serving: 78
ingredients:
  - item: "Eggs"
    amount: "As desired"
    calories: 78
  - item: "Water"
    amount: "To cover"
    calories: 0
  - item: "Ice water"
    amount: "For cooling"
    calories: 0
---

# Instructions

1. Place eggs in water, ensuring they are covered by ~1" of water.
2. Bring to a boil.
3. As soon as the water boils, reduce heat (if using gas) or turn off (if using electric) for one minute (optional).
4. Cover and let sit for 10-12 minutes.
5. Cool the eggs in ice water.

# Nutrition Notes

Hard-boiled eggs are an excellent, high-quality protein source. A large egg typically contains about 6g of protein and 5g of fat. These are perfect for meal prep as they keep well in the fridge for up to a week.`,__vite_glob_0_52=`---
title: "Hot Fudge Sauce"
source: "Handwritten Card"
meal: ["Dessert"]
effort: "Low"
season: ["All"]
protein: "None"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: true
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["dessert", "sauce", "chocolate", "ice-cream-topping"]
nutrition:
  serving_size: "2 Tbsp"
  servings_per_recipe: 12
  calories_per_serving: 150
ingredients:
  - item: "Sugar"
    amount: "2 cups"
    calories: 1600
  - item: "Cocoa Powder"
    amount: "1/2 cup"
    calories: 100
  - item: "Salt"
    amount: "dash"
    calories: 0
  - item: "Heavy Cream"
    amount: "1 cup"
    calories: 820
  - item: "Butter"
    amount: "1/4 cup"
    calories: 400
  - item: "Vanilla"
    amount: "1 tsp"
    calories: 10
---

# Instructions
1. Sift together sugar, cocoa powder, and salt.
2. In a saucepan, heat heavy cream and butter until butter is melted and mixture is hot.
3. Gradually whisk dry mixture into hot cream mixture.
4. Cook over medium heat, whisking constantly, until smooth and thickened.
5. Remove from heat and let cool about 30 minutes.
6. Whisk in vanilla.
7. Serve warm over ice cream or store in refrigerator.

# Nutrition Notes
Total recipe: ~2,930 calories  
Per serving (~12 servings, 2 Tbsp each): ~150 calories`,__vite_glob_0_53=`---
title: "Hurricane"
source: "Handwritten Card"
meal: ["Drink"]
effort: "Easy"
season: ["Summer", "All"]
protein: "None"
cost: "Medium"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ["cocktail", "rum", "tropical", "fruity"]
nutrition:
  serving_size: "1 drink"
  servings_per_recipe: 1
  calories_per_serving: # TBD
ingredients:
  - item: "White Rum"
    amount: "2 oz"
    calories: 128
  - item: "Dark Rum"
    amount: "2 oz"
    calories: 130
  - item: "Lime Juice"
    amount: "1 oz"
    calories: 8
  - item: "Orange Juice"
    amount: "1 oz"
    calories: 14
  - item: "Passion Fruit Juice"
    amount: "2 oz"
    calories: 34
  - item: "Simple Syrup"
    amount: "1/2 oz"
    calories: 50
  - item: "Grenadine"
    amount: "1/2 oz"
    calories: 54
---

# Instructions

1. Mix all liquid ingredients together.
2. Pour into a glass over ice.
3. Garnish with an orange slice and a cherry.

# Nutrition Notes

Total recipe: ~418 calories.

This is a potent, high-sugar tropical drink. Calories are estimated based on standard spirits and juice averages. For a less sweet version, you can slightly reduce the simple syrup or grenadine.`,__vite_glob_0_54=`---
title: "Hush Puppies"
source: "Handwritten Card"
meal: ["Side", "Appetizer"]
effort: "Medium"
season: ["All"]
protein: "Eggs"
cost: "Low"
kitchen_impact: "Medium"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["fried", "cornmeal", "southern", "side dish"]
nutrition:
  serving_size: "2 hush puppies (estimated)"
  servings_per_recipe: 8
  calories_per_serving: # TBD
ingredients:
  - item: "Corn meal"
    amount: "1 cup"
    calories: 442
  - item: "Flour"
    amount: "1/2 cup"
    calories: 228
  - item: "Salt"
    amount: "1 tsp"
    calories: 0
  - item: "Baking powder"
    amount: "1 tsp"
    calories: 2
  - item: "Sugar"
    amount: "4 tsp"
    calories: 64
  - item: "Medium onion (chopped fine)"
    amount: "1"
    calories: 45
  - item: "Well beaten eggs"
    amount: "3"
    calories: 234
  - item: "Milk"
    amount: "1 1/2 cups"
    calories: 225
  - item: "Oil (for frying)"
    amount: "As needed"
    calories: # Variable
---

# Instructions

1. Fine chop the medium onion.
2. Mix all dry and wet ingredients together.
3. Ball up the mixture.
4. Heat oil until very hot.
5. Fry until golden brown.

# Nutrition Notes

Total base calories (before frying): ~1,240 calories. 

The final calorie count will depend heavily on the amount of oil absorbed during the frying process. Ensure the oil is "very hot" as specified to prevent the batter from becoming too greasy. These are best served warm immediately after frying.`,__vite_glob_0_55=`---
title: "Italian Beef"
source: "Handwritten Card"
meal: ["Dinner"]
effort: "Medium"
season: ["All"]
protein: "Beef"
cost: "High"
kitchen_impact: "Medium"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["beef", "roast", "italian", "slow cook"]
nutrition:
  serving_size: "4 oz (estimated)"
  servings_per_recipe: 8
  calories_per_serving: # TBD
ingredients:
  - item: "Beef ribeye roast"
    amount: "1"
    calories: 2200
  - item: "Salt, pepper & garlic powder"
    amount: "To season"
    calories: 0
  - item: "Onion"
    amount: "1"
    calories: 45
  - item: "Water"
    amount: "As needed"
    calories: 0
  - item: "Beef bouillon cubes"
    amount: "4"
    calories: 20
  - item: "Basil"
    amount: "1/2 tsp"
    calories: 1
  - item: "Oregano"
    amount: "1/2 tsp"
    calories: 1
  - item: "Green pepper (chopped)"
    amount: "1"
    calories: 30
---

# Instructions

1. Season the beef ribeye roast with salt, pepper, and garlic powder.
2. Cook, covered, for 20 minutes per pound at 350°F. A fork should go in easy.
3. Slice the beef thin.
4. Pour broth in a skillet (water plus 4 bouillon cubes). 
5. Add 1/2 tsp basil, 1/2 tsp oregano, and 1 chopped green pepper. 
6. Simmer the mixture, then pour over the beef.

# Nutrition Notes

Ribeye is a premium, flavorful cut but is higher in fat than other roasts. Slicing it "thin" as directed helps the beef soak up the bouillon-based jus. For a lower-sodium version, consider using low-sodium beef broth instead of bouillon cubes.`,__vite_glob_0_56=`---
title: "Jalapeno Poppers"
source: "Brooke Van Lohuizen"
meal: ['Snack']
effort: "Medium"
season: ['All-year']
protein: "Pork"
cost: "Medium"
kitchen_impact: "Medium"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ['spicy', 'bacon', 'appetizer']
ingredients:
  - item: "Jalapenos"
    amount: "12-15"
  - item: "Cream Cheese"
    amount: "8 oz"
  - item: "Cheddar Cheese"
    amount: "1 cup shredded"
  - item: "Onion Powder"
    amount: "1 tsp"
  - item: "Garlic Powder"
    amount: "1 tsp"
  - item: "Paprika"
    amount: "1/2 tsp"
  - item: "Bacon"
    amount: "12-15 slices"
---

# Instructions
1. Preheat the oven to 375*
2. Mix cream cheese, cheddar cheese, and seasonings 
3. Cut jalapenos in half lengthwise and remove seeds and pith
4. Fill jalapenos haves with cheese mixture
5. Wrap bacon around jalapenos - cut bacon as needed
6. Bake until bacon is fully cooked
`,__vite_glob_0_57=`---
title: "Jerk Chicken"
source: "Printed Sheet with Handwritten Notes"
meal: ["Dinner"]
effort: "Medium"
season: ["Summer", "All"]
protein: "Chicken"
cost: "Medium"
kitchen_impact: "Medium"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["chicken", "jerk", "spicy", "marinated", "caribbean"]
nutrition:
  serving_size: "1/8 recipe (estimated)"
  servings_per_recipe: 8
  calories_per_serving: # TBD
ingredients:
  - item: "Chicken (breasts preferred)"
    amount: "3 1/2 lbs"
    calories: 2380
  - item: "Scotch bonnet peppers (or jalapeños)"
    amount: "6 sliced"
    calories: 30
  - item: "Thyme"
    amount: "2 tbsp"
    calories: 12
  - item: "Ground allspice"
    amount: "2 tbsp"
    calories: 58
  - item: "Garlic, finely chopped"
    amount: "8 cloves"
    calories: 36
  - item: "Medium onions, finely chopped"
    amount: "3"
    calories: 135
  - item: "Sugar"
    amount: "2 tbsp"
    calories: 96
  - item: "Salt"
    amount: "2 tbsp"
    calories: 0
  - item: "Ground black pepper"
    amount: "2 tsp"
    calories: 12
  - item: "Cinnamon, nutmeg, and ginger"
    amount: "1 to 2 tsp each"
    calories: 40
  - item: "Olive oil"
    amount: "1/2 cup"
    calories: 955
  - item: "Soy sauce"
    amount: "1/2 cup"
    calories: 65
  - item: "Lime juice"
    amount: "Juice of one"
    calories: 11
  - item: "Orange juice"
    amount: "1 cup"
    calories: 112
  - item: "White vinegar"
    amount: "1 cup"
    calories: 30
---

# Instructions

1. Finely chop the garlic and onions; slice the scotch bonnet peppers.
2. Combine all spices (thyme, allspice, sugar, salt, pepper, cinnamon, nutmeg, ginger) with the liquid ingredients (oil, soy sauce, lime juice, orange juice, vinegar) to create the marinade.
3. Incorporate the chopped onions, garlic, and peppers into the marinade.
4. Apply to the chicken and marinate (time not specified, but usually at least 4-24 hours for jerk chicken).
5. Cook until the chicken is done.

# Nutrition Notes

Total base calories: ~3,980 calories.
Per serving (1/8): ~498 calories.`,__vite_glob_0_58=`---
title: "Key Lime Pie"
source: "LeaAnn Van Lohuizen"
meal: ['Snack']
effort: "Medium"
season: ['Summer']
protein: "Vegetarian"
cost: "Medium"
kitchen_impact: "Medium"
repeatability: "Medium"
is_component: false
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ['pie', 'citrus', 'dessert']
ingredients:
  - item: "Graham Cracker Crumbs"
    amount: "1 1/2 cups"
  - item: "Sugar"
    amount: "1/4 cup"
  - item: "Butter"
    amount: "6 Tbs"
  - item: "Sweetened Condensed Milk"
    amount: "14 oz"
  - item: "Egg, yolks"
    amount: "3 yolks"
  - item: "Key Lime Juice"
    amount: "1/2 cup"
---

# Instructions
1. Preheat oven to 350*
2. Add crushed graham, sugar, and melted butter into a food processor
3. Press mixture into a 9" pie tin
4. Pre-bake crust for 10 minutes then remove
5. Combine milk, eggs, and juice until smooth.
6. Pour into pie crust and put it back into the oven
7. Bake for 15 minutes
8. Allow to stand for 10 minutes before putting in the fridge
9. Just before serving top with whipped cream
`,__vite_glob_0_59=`---
title: "Mac n Cheese"
source: "Brooke Van Lohuizen"
meal: ['Lunch', 'Dinner']
effort: "Low"
season: ['All-year']
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ['comfort-food', 'cheese', 'pasta']
ingredients:
  - item: "Butter"
    amount: "1 Tbs"
  - item: "Flour"
    amount: "1 Tbs"
  - item: "Milk"
    amount: "1/2 cup"
  - item: "Cheese"
    amount: "1/2 cup"
  - item: "Season to taste"
    amount: ""
---

# Instructions
1. Boil Pasta
2. Brown the roux
3. Whisk in milk. Cook until it begins to thicken
4. Add cheese little by little until fully melted
5. Season to taste
`,__vite_glob_0_60=`---
title: "Maple Bacon"
source: "Your Recipe"
meal: ["Breakfast"]
effort: "Low"
season: ["All-year"]
protein: "Pork"
cost: "Medium"
kitchen_impact: "Low"
repeatability: "High"
is_component: true
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["bacon", "maple", "smoked", "breakfast"]
nutrition:
  serving_size: "3 slices"
  servings_per_recipe: 4
  calories_per_serving: 280
ingredients:
  - item: "Pork Belly"
    amount: "3 lbs"
    calories: 6840
  - item: "Morton's Kosher Salt"
    amount: "4 1/2 tsp"
    calories: 0
  - item: "Black Pepper"
    amount: "4 1/2 tsp"
    calories: 15
  - item: "Brown Sugar"
    amount: "3 Tbsp"
    calories: 150
  - item: "Dark Maple Syrup"
    amount: "1/2 cup"
    calories: 400
  - item: "Distilled Water"
    amount: "3/4 cup"
    calories: 0
  - item: "Prague Powder #1"
    amount: "1/2 tsp"
    calories: 0
---

# Instructions

## Curing
1. Pat everything but meat in a ziploc and squish
2. Add meat, squish more, and refrigerate
3. Cure 3-5 days squishing periodically

## Smoking
1. Pull it out and rinse off any extra salt deposits
2. Smoke at 225°F until 150°F (about 2 hrs)
3. Wrap in plastic wrap, then foil to store and slice cold
4. Cook as usual for bacon

# Nutrition Notes
Total recipe: ~7,405 calories
Per serving (3 slices, ~3 oz): ~280 calories

Note: Most of the curing mixture is discarded, actual calories will be lower
`,__vite_glob_0_61=`---
title: "Meringue Cookies"
source: "Brooke Van Lohuizen"
meal: ['Snack']
effort: "Medium"
season: ['All-year']
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Medium"
repeatability: "Medium"
is_component: false
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ['cookies', 'light', 'sweet']
ingredients:
  - item: "Egg Whites"
    amount: "2 large"
  - item: "Salt"
    amount: "1/8 tsp"
  - item: "Vanilla Extract"
    amount: "1/2 tsp"
  - item: "Sugar"
    amount: "1/2 cup"
  - item: "White Vinegar"
    amount: "1/2 tsp"
---

# Instructions
1. Preheat oven to 225*F
2. Combine COLD egg whites, salt, and vanilla.  Beat until soft peaks form
3. Add in sugar slowly until stiff peaks form. Mixture should be silky and shiny
4. Pipe small cookies onto a lined backing sheet
5. Bake for 1 hour. Do not open the oven
6. Let cool completely in oven for 1-2 hours
`,__vite_glob_0_62=`---
title: "Milk Chocolate Bourbon Balls"
source: "LeaAnn Van Lohuizen"
meal: ['Snack']
effort: "Medium"
season: ['Winter']
protein: "Vegetarian"
cost: "Medium"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ['no-bake', 'bourbon', 'chocolate', 'christmas']
ingredients:
  - item: "Vanilla Wafters"
    amount: "12 oz package / 3 cups finely crushed"
  - item: "Milk Chocolate Chips"
    amount: "11.5 oz"
  - item: "Sweetened Condensed Milk"
    amount: "14 oz"
  - item: "Bourbon"
    amount: "5 Tbs"
  - item: "Nuts, chopped"
    amount: "for rolling"
---

# Instructions
1. In a large bowl combine waffer crumbs and bourbon
2. Melt chocolate chips in a double boiler
3. Remove chocolate from the heat, add sweetened condensed milk
4. Gradually add crumb mixture and mix well
5. Let stand at room temp for 30 minutes or chill
6. Shape into 1" balls
7. Roll in chopped nuts
7. Store in refrigerator
`,__vite_glob_0_63=`---
title: "Naan Bread"
source: "LeaAnn Van Lohuizen"
meal: ['Lunch', 'Dinner']
effort: "Medium"
season: ['All-year']
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Medium"
repeatability: "High"
is_component: true
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ['indian', 'bread', 'flatbread']
ingredients:
  - item: "Cake Flour"
    amount: "2 cups"
  - item: "Greek Yogurt"
    amount: "1 cup"
  - item: "Salt"
    amount: "1 1/2 tsp"
  - item: "Garlic Powder"
    amount: "1 tsp"
  - item: "Baking Powder"
    amount: "1 Tbs"
---

# Instructions
1. Mix all ingredients
2. Let sit 20 minutes
2. Roll into balls and roll it into flat rounds
3. Cook on a nonstick surface
`,__vite_glob_0_64=`---
title: "No Bake Cookies"
source: "LeaAnn Van Lohuizen"
meal: ['Snack']
effort: "Low"
season: ['All-year']
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ['no-bake', 'chocolate', 'peanut-butter']
ingredients:
  - item: "Sugar"
    amount: "2 cups"
  - item: "Unsweetened Cocoa Powder"
    amount: "3 Tbs"
  - item: "Butter"
    amount: "1/2 cup"
  - item: "Milk"
    amount: "1/2 cup"
  - item: "Oats"
    amount: "3 cups"
  - item: "Peanut Butter"
    amount: "1/2 cup"
  - item: "Vanilla Extract"
    amount: "1 tsp"
---

# Instructions
1. In a sauce pan bring sugar, cocoa, butter, milk to a rapid boil for 1 minute
2. Remove from heat, add oats, peanut butter, and vanilla. Mix well.
3. Quickly drop spoonfuls onto waxed paper
4. Let cool
`,__vite_glob_0_65=`---
title: "Paneer Cheese"
source: "LeaAnn Van Lohuizen"
meal: ['Snack']
effort: "Medium"
season: ['All-year']
protein: "Vegetarian"
cost: "Medium"
kitchen_impact: "Medium"
repeatability: "Medium"
is_component: true
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ['indian', 'cheese', 'dairy']
ingredients:
  - item: "Whole Milk"
    amount: "1/2 gallon"
  - item: "Lemon Juice, fresh"
    amount: "1/2 cup"
  - item: "Salt"
    amount: "1 1/2 tsp"
---

# Instructions
1. Bring milk to a simmer
2. Remove from heat and add lemon juice
2. Curds and whey will separate. Strain through cheese cloth lined strainer let it drain
3. Squeeze all liquid out
4. Form into quare and weigh down
5. Put in a fridge to cool
`,__vite_glob_0_66=`---
title: "Pinch Me Cake"
source: "LeaAnn Van Lohuizen"
meal: ['Snack']
effort: "Medium"
season: ['All-year']
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Medium"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ['sweet', 'cinnamon']
ingredients:
  - item: "Small Biscuits"
    amount: "3 cans"
  - item: "Sugar"
    amount: "1 cup"
  - item: "Butter"
    amount: "1/2 cup"
  - item: "Vanilla"
    amount: "1/2 tsp"
  - item: "Milk"
    amount: "1 Tbs"
  - item: "Cinnamon and Sugar for coating biscuits"
    amount: ""
---

# Instructions
1. Pre-heat oven to 375*
2. Bring sugar, butter, and vanilla to a boil in a sauce pan
3. Cut biscuits into 4ths and coat in cinnamon and sugar and put into a bundt pan
4. Pour heated sugar mixture over the biscuits
5. Bake for 20 minutes
6. Let set 10 minutes and then turn over on a plate
`,__vite_glob_0_67=`---
title: "Pinky Watson"
source: "Charlotte Capaul (Grandma Lottie)"
meal: ['Snack']
effort: "Medium"
season: ['All-year']
protein: "Vegetarian"
cost: "Medium"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ['dessert', 'layered', 'chocolate']
ingredients:
  - item: "Flour"
    amount: "1 cup"
  - item: "Nuts"
    amount: "1 cup"
  - item: "Butter"
    amount: "1 stick"
  - item: "Cream Cheese, softened"
    amount: "8 oz"
  - item: "Powdered Sugar"
    amount: "1 cup"
  - item: "Cool Whip"
    amount: "9oz container"
  - item: "Milk"
    amount: "3 cup"
  - item: "Instant Chocolate Pudding"
    amount: "6 oz"
  - item: "Vanilla"
    amount: "1 tsp"
---

# Instructions
1. Mix flour, nuts, and butter and pat inot a 9x13 sheet pan
2. Mix softened cream chese, powdered sugar. fold in the 1/2 the cool whip container and vanilla.
3. Pour into the crust
4. Mix intstant pudding and milk and let set a while.
5. Pour pudding layer
6. Top with the rest of the cool whip and sprinkle with nuts
`,__vite_glob_0_68=`---
title: "Prime Rib"
source: "LeaAnn Van Lohuizen"
meal: ['Dinner']
effort: "Low"
season: ['Winter']
protein: "Beef"
cost: "High"
kitchen_impact: "Medium"
repeatability: "Medium"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ['roast', 'special-occasion']
ingredients:
  - item: "Prime Rib Roast"
    amount: "3 - 10 lbs"
  - item: "Salt and pepper"
    amount: ""
---

# Instructions
1. Pre-heat oven to 375*
2. Put seasoned roast uncovered into the over for 1 hour
3. Turn oven off and DO NOT OPEN
4. Turn oven on 1 hour before serving to 375*
5. Leave roast in 50 minutes
6. Let rest 10 minutes before carving
`,__vite_glob_0_69=`---
title: "Pupusa"
source: "Hot Stove Society"
meal: ['Lunch', 'Dinner']
effort: "Medium"
season: ['All-year']
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Medium"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ['salvadoran', 'cheese']
ingredients:
  - item: "Masa"
    amount: "2 cup"
  - item: "Water"
    amount: "2 cups"
  - item: "Cotija or Oaxaca Cheese"
    amount: "16 oz"
  - item: "Salt to taste"
    amount: ""
  - item: "Filling of Choice"
    amount: ""
---

# Instructions
1. Combine masa, salt, and 1 34 cups of water inot a bowl; stir to form a dough
2. Pinch off a 1.5oz piece of dough; roll into a ball. Pat dough into a thin disk.
3. Squeeze 1.25oz of cheese and filling into a ball. Press filling into center of the dough; cupping dough, strech edges of dough around the filling and seal.
4. Pat dough to form a 3.5 inch wide disk
5. Repeat to make 12 pupusas in all
6. Heat a 12" skillet over medium high heat. Working in 3 batches, cook pupusas, turning until golden, 10-12 minutes,
7. Serve hot with slaw
`,__vite_glob_0_70=`---
title: "Cheese Quesadilla"
source: "Your Recipe"
meal: ["Lunch", "Dinner", "Snack"]
effort: "Low"
season: ["All-year"]
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["mexican", "cheese", "quick"]
related_recipes: ["garlic_chili_chicken", "guacamole"]
nutrition:
  serving_size: "1 full quesadilla"
  servings_per_recipe: 1
  calories_per_serving: 770
ingredients:
  - item: "Flour Tortilla"
    amount: "2 large"
    calories: 280
  - item: "Cheddar Cheese"
    amount: "1 cup shredded"
    calories: 450
  - item: "Butter or Oil"
    amount: "1 tsp"
    calories: 40
  - item: "Protein (optional)"
    amount: "1/2 cup cooked chicken, beef, or other"
    calories: 0
  - item: "Guacamole"
    amount: "for topping"
    calories: 0
  - item: "Sour Cream"
    amount: "for topping"
    calories: 0
  - item: "Salsa"
    amount: "for topping"
    calories: 0
---

# Instructions
1. Heat a large skillet over medium heat
2. Add butter or oil to the pan
3. Place one tortilla in the pan
4. Sprinkle half of the shredded cheddar cheese evenly over the tortilla
5. (Optional) Add cooked protein of choice on top of the cheese
6. Sprinkle remaining cheese over the protein (or directly on first cheese layer if no protein)
7. Place the second tortilla on top
8. Cook for 2-3 minutes until the bottom tortilla is golden brown and cheese begins to melt
9. Flip the quesadilla carefully and cook for another 2-3 minutes until golden and cheese is fully melted
10. Remove from pan and let cool for 1 minute
11. Cut into quarters
12. Serve with guacamole, sour cream, and salsa

# Variations
- **Cheese Quesadilla**: Skip step 5, use cheese only
- **Chicken Quesadilla**: Add [Garlic Chili Chicken](garlic_chili_chicken.md) or plain shredded chicken
- **Beef Quesadilla**: Add seasoned ground beef or shredded beef
- **Veggie Quesadilla**: Add sautéed peppers, onions, or mushrooms

# Recommended Toppings
- [Guacamole](guacamole.md)
- Sour Cream
- Salsa

# Nutrition Notes
Cheese Quesadilla (2 tortillas + 1 cup cheese): ~770 calories total
- Per half quesadilla: ~385 calories
- Per quarter: ~190 calories

Note: Nutrition values above are for the cheese quesadilla only. Add calories separately for any proteins, toppings, or sauces you include.
`,__vite_glob_0_71=`---
title: "Speedy Whole Cranberry Sauce"
source: "Handwritten Card"
meal: ["Side"]
effort: "Low"
season: ["Fall", "Winter"]
protein: "None"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: true
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["cranberry", "holiday", "thanksgiving", "side-dish"]
nutrition:
  serving_size: "1/4 cup"
  servings_per_recipe: 8
  calories_per_serving: 110
ingredients:
  - item: "Fresh Cranberries"
    amount: "1 bag (12 oz)"
    calories: 200
  - item: "Sugar"
    amount: "1 cup"
    calories: 800
  - item: "Water"
    amount: "1 cup"
    calories: 0
  - item: "Orange Zest (optional)"
    amount: "1 tsp"
    calories: 5
---

# Instructions
1. In a saucepan, combine water and sugar. Bring to a boil.
2. Add cranberries and return to a boil.
3. Reduce heat and simmer 10–15 minutes, until cranberries burst and sauce thickens.
4. Stir in orange zest if using.
5. Cool completely before serving (sauce thickens as it cools).
6. Refrigerate leftovers.

# Nutrition Notes
Total recipe: ~1,005 calories  
Per serving (~8 servings, 1/4 cup each): ~110 calories`,__vite_glob_0_72=`---
title: "Razor Clam and Chanterelle Mushroom Chowder"
source: "riptidefish.com"
meal: ["Dinner", "Lunch"]
effort: "Medium"
season: ["Fall", "Winter"]
protein: "Seafood"
cost: "High"
kitchen_impact: "Medium"
repeatability: "Medium"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["soup", "seafood", "mushroom", "chowder"]
ingredients:
  - item: "Fresh Razor Clams"
    amount: "chopped, with juices"
  - item: "Chanterelle Mushrooms"
    amount: "chopped"
  - item: "Smoked Bacon"
    amount: "2 slices"
  - item: "Walla Walla Sweet Onion"
    amount: "1, chopped"
  - item: "Garlic"
    amount: "4 cloves, thinly sliced"
  - item: "Carrots"
    amount: "2, chopped"
  - item: "Yukon Gold Potato"
    amount: "1, chopped"
  - item: "Celery"
    amount: "2 stalks, chopped"
  - item: "Chicken Stock"
    amount: "2-3 cups"
  - item: "Half & Half"
    amount: "to desired creaminess"
  - item: "Butter"
    amount: "2 tbsp, plus more for roux"
  - item: "Flour"
    amount: "2 tbsp"
  - item: "Bay Leaves"
    amount: "2"
  - item: "Fresh Thyme"
    amount: "to taste"
  - item: "Salt and Ground Black Pepper"
    amount: "to taste"
---

# Instructions
1. In a large pot, fry the Smoked Bacon until crisp. Remove the bacon, crumble it, and set it aside.
2. Add a couple of tablespoons of butter to the bacon fat. Sauté the Walla Walla Sweet Onion, Chanterelle Mushrooms, and Garlic until they are soft and translucent.
3. Add the chopped Celery, Carrots, and Potato. Cook for about five minutes, stirring occasionally.
4. Sprinkle in the Flour and add more Butter if needed. Stir well for a minute or two to cook the raw flour taste out (doing this now prevents clumping later).
5. Gradually pour in the Chicken Stock while stirring. Add the Bay Leaves, Fresh Thyme, and the crumbled Bacon back into the pot.
6. Bring the mixture to a boil, then reduce heat and simmer until the potatoes and carrots are fork-tender.
7. Add the chopped Razor Clams along with all their juices. Bring the pot back to a very light boil for just a minute (don't overcook the clams or they will get tough).
8. Pour in the Half & Half, turn the heat to low, and let the chowder simmer for at least ten minutes to allow flavors to meld.
9. Taste and adjust Salt and Pepper before serving.`,__vite_glob_0_73=`---
title: "Rice Bowl"
source: "Your Recipe"
meal: ["Lunch", "Dinner"]
effort: "Low"
season: ["All-year"]
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ["mexican", "bowl", "customizable"]
related_recipes: ["garlic_chili_chicken", "guacamole"]
nutrition:
  serving_size: "1 bowl"
  servings_per_recipe: 1
  calories_per_serving: 520
ingredients:
  - item: "White or Brown Rice"
    amount: "1 cup cooked"
    calories: 200
  - item: "Cheddar Cheese"
    amount: "1/2 cup shredded"
    calories: 225
  - item: "Lettuce"
    amount: "1 cup shredded"
    calories: 5
  - item: "Black Beans"
    amount: "1/2 cup"
    calories: 110
  - item: "Protein (optional)"
    amount: "1/2 cup cooked chicken, beef, or other"
    calories: 0
  - item: "Guacamole"
    amount: "for topping"
    calories: 0
  - item: "Sour Cream"
    amount: "for topping"
    calories: 0
  - item: "Salsa"
    amount: "for topping"
    calories: 0
---

# Instructions
1. Add cooked rice to a bowl as the base
2. Add black beans on top of rice
3. (Optional) Add cooked protein of choice
4. Add shredded cheese
5. Add shredded lettuce
6. Top with guacamole, sour cream, and salsa as desired
7. Mix together or eat in layers

# Variations
- **Vegetarian Bowl**: Skip step 3, use rice, beans, cheese, and toppings
- **Chicken Bowl**: Add [Garlic Chili Chicken](garlic_chili_chicken.md) or plain shredded chicken
- **Beef Bowl**: Add seasoned ground beef or shredded beef
- **Veggie Bowl**: Add sautéed peppers, onions, corn, or mushrooms

# Recommended Toppings
- [Guacamole](guacamole.md)
- Sour Cream
- Salsa
- Cilantro
- Lime juice
- Diced onions
- Diced tomatoes
- Corn

# Nutrition Notes
Base Rice Bowl (rice + beans + cheese + lettuce): ~540 calories total

Note: Nutrition values above are for the base bowl only. Add calories separately for any proteins, toppings, or sauces you include.
`,__vite_glob_0_74=`---
title: "Rocky Road Fudge"
source: "LeaAnn Van Lohuizen"
meal: ['Snack']
effort: "Low"
season: ['All-year']
protein: "Vegetarian"
cost: "Medium"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ['chocolate', 'marshmallow', 'no-bake']
ingredients:
  - item: "Semi-sweet chocolate chips"
    amount: "12oz"
  - item: "Butter"
    amount: "1/4 cup"
  - item: "Shortening or Coconut Oil"
    amount: "2 Tbs"
  - item: "Mini Marshmallows"
    amount: "3 cups"
  - item: "Nuts, coarsly choped"
    amount: "1/2 cups"
---

# Instructions
1. Butter an foiled lined 8x8 pan
2. In a microwave safe bowl, combine chocolate chips, butter, and shortening
3. Microwave on High for 1-1.5 min until mixture is smooth when stirred
4. Add marshmallows and nuts; mix well
5. Spread evenly in prepared pan
6. Cover and refridgerate until firm
7. Once solid, cut into 1" cubes
`,__vite_glob_0_75=`---
title: "Grandma Kathy's Rolls & Cinnamon Rolls"
source: "Kathy Nickerson (Grandma Kathy)"
meal: ['Breakfast', 'Snack']
effort: "High"
season: ['All-year']
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "High"
repeatability: "Medium"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ['bread', 'yeast', 'cinnamon-rolls']
ingredients:
  - item: "Flour"
    amount: "8 cups"
  - item: "Potato Flakes"
    amount: "1/2 cup"
  - item: "Salt"
    amount: "1 tsp"
  - item: "Rapid Rise Yeast"
    amount: "2 packets"
  - item: "Oil"
    amount: "1/2 cup"
  - item: "Eggs"
    amount: "2 eggs"
  - item: "Hot Water"
    amount: "3 cups"
---

# Instructions
1. Pre-heat oven to 350*
1. Combine 3 cups of flour and all other dry ingredients, mix well
2. Add hot water, beat 2 minutes until smooth
3. Add oil and eggs and beat 2 more minutes
4. Slowly in small amounts add 5-6 cups of flour
5. Let rise 1 hour
6. Divide into 4 lumps, roll out to form rolls or cinnamon rolls
7. Let rise again another hour
8. Bake for 15-20 minutes 
-----
1. Roll out dough flat
2. Spread butter, cinnamon, and sugar
3. Add nuts and/or raisins
4. Roll up and pinch seam
5. Cut with strong thread/floss
6. Put buns in greased pan and let rise 20 minutes
7. Bake 15-20 minutes until golden brown
8. Let cool and frost with cream cheese frosting
`,__vite_glob_0_76=`---
title: "Scalloped Potatoes"
source: "LeaAnn Van Lohuizen"
meal: ['Dinner']
effort: "Medium"
season: ['Fall', 'Winter']
protein: "Pork"
cost: "Medium"
kitchen_impact: "Medium"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ['comfort-food', 'casserole']
ingredients:
  - item: "Onions, Chopped"
    amount: "1/4 cup"
  - item: "Butter"
    amount: "1/4 cup"
  - item: "Flour"
    amount: "1/4 cup"
  - item: "Milk"
    amount: "2 1/2 cup"
  - item: "Potatoes, thinly sliced"
    amount: "5 cups"
  - item: "Ham"
    amount: "As much as desired"
  - item: "Salt & Pepper"
    amount: "to taste"
---

# Instructions
1. Preheat the oven to 350*
2. Cook onions in butter until soft but not brown
3. Stir in flour, salt, and pepper
4. Add milk, cook and stir until thick and bubbly
5. Then cook 2 more minutes
6. In a greased casserol pan, layer sauce, potatoes, ham, and repeat
7. Bake covered for 45 minuntes
8. Stir, then back uncovered for 30 mins longer or until potatoes are tender
`,__vite_glob_0_77=`---
title: "Sour Cream Cookies"
source: "Charlotte Capaul (Grandma Lottie)"
meal: ['Snack']
effort: "Low"
season: ['All-year']
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ['cookies', 'soft']
ingredients:
  - item: "Flour"
    amount: "2 cup"
  - item: "Baking Soda"
    amount: "1 tsp"
  - item: "Salt"
    amount: "1 tsp"
  - item: "Sour Cream"
    amount: "1/2 cup"
  - item: "Sugar"
    amount: "1 cup"
  - item: "Eggs"
    amount: "2 whole"
  - item: "Shortening"
    amount: "1/2 cup"
  - item: "Vanilla"
    amount: "1 1/2 tsp"
---

# Instructions
1. Preheat the oven to 375*
2. Cream sugar and shortening, 
3. Add eggs and vanilla
4. Add remaining ingredients until combined
5. Blop on the pan
6. Bake for until cooked
`,__vite_glob_0_78=`---
title: "Sous Vide Smoked Brisket"
source: "Daniel Sasser"
meal: ['Dinner']
effort: "High"
season: ['All-year']
protein: "Beef"
cost: "High"
kitchen_impact: "High"
repeatability: "Low"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ['sous-vide', 'smoked', 'bbq', 'special-occasion']
ingredients:
  - item: "Black Pepper"
    amount: "1/3 cup"
  - item: "Salt"
    amount: "1/4 cup"
  - item: "Brisket"
    amount: "5 lbs"
  - item: "liquid Smoke"
    amount: "1/4 tsp"
---

# Instructions
1. Combine pepper and salt in a small bowl. Rub two-thirds of mixture evenly over surface of brisket. Reserve remaining one-third of mixture. Slice brisket in half crosswise in order to fit into large vacuum bags.
2. Add 1/8 tsp liquid smoke to the vacuum bags with brisket
2. Set your sous vide to 135 degrees for brisket with a tender steak-like texture, or 155 degrees for more traditionally textured brisket that falls apart when you pull at it. Add brisket to water bath and cover it with a lid. Cook for 24 to 36 hours at 155 degrees or 36 to 72 hours at 135 degrees.  Allow cooked brisket to cool at least to room temertature before proceeding.
3. Place brisket in smoker and maintain tempurature between 275 and 300. Smoke until a deep, dark bark has formed, about 3 hours
4. Transfer brisket to a cutting board and tent with foil. Allow to rest until the tempurature drops between 145 and 165, about 30 minures. Slice against the grain into thin strips.
`,__vite_glob_0_79=`---
title: "Spritz Cookies"
source: "LeaAnn Van Lohuizen"
meal: ['Snack']
effort: "Medium"
season: ['Winter']
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Medium"
repeatability: "High"
is_component: false
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ['cookies', 'christmas', 'pressed']
ingredients:
  - item: "Flour"
    amount: "2 cups"
  - item: "Powdered Sugar"
    amount: "1 cup"
  - item: "Butter"
    amount: "1 cup"
  - item: "Egg, Yolks"
    amount: "3 yolks"
  - item: "Almond Extract"
    amount: "1/2 tsp"
  - item: "Vanilla Extract"
    amount: "1 1/2 tsp"
---

# Instructions
1. Preheat oven to 375*F
2. In a medium bowl mix four and salt
3. Cream butter and sugar
4. Add in yolks one at a time to creamed butter and sugar. Add vanilla and almond extracts
5. Gradually add flour - mix to combined
6. Divide dough and load into cookie press.  Press cookies 1 inch apart on an ungreased cookie sheet
7. Bake 10-12 minutes. Start checking oven at 8 minutes
`,__vite_glob_0_80=`---
title: "Street Tacos"
source: "Family"
meal: ["Dinner"]
effort: "Low"
season: ["All-year"]
protein: "Beef"
cost: "Low"
kitchen_impact: "Medium"
repeatability: "High"
microwavable_leftovers: true
last_cooked: "2026-01-10"
ingredients:
  -  item: "Corn Tortillas"
     amount: 12
  -  item: "Flank Steak"
     amount: 1
  -  item: "Cilantro"
     amount: 1
tags: ["mexican", "quick"]
---

Grill the steak until charred. Warm the tortillas. Top with onions and cilantro.`,__vite_glob_0_81=`---
title: "Sugar Cookies"
source: "Brooke Van Lohuizen"
meal: ['Snack']
effort: "Medium"
season: ['All-year']
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Medium"
repeatability: "High"
is_component: false
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ['cookies', 'cutout', 'decorated']
ingredients:
  - item: "Flour"
    amount: "2 3/4 cup"
  - item: "Baking Powder"
    amount: "1 tsp"
  - item: "Salt"
    amount: "1/2 tsp"
  - item: "Butter, softened"
    amount: "1 cup"
  - item: "Sugar"
    amount: "1 1/2 cup"
  - item: "Eggs"
    amount: "2 whole"
  - item: "Vanilla"
    amount: "1 1/2 tsp"
---

# Instructions
1. Preheat the oven to 350*
2. Cream butter and sugar
3. Add eggs and vanilla
4. Add flour and dry ingredients slowly
5. Roll out and cut out cookies
6. Bake for 8-10 minutes watching to make sure the bottoms dont get oo dark
`,__vite_glob_0_82=`---
title: "Tacos"
source: "Your Recipe"
meal: ["Lunch", "Dinner"]
effort: "Low"
season: ["All-year"]
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: false
last_cooked: # YYYY-MM-DD
tags: ["mexican", "quick", "customizable"]
related_recipes: ["garlic_chili_chicken", "guacamole", "corn_tortillas"]
nutrition:
  serving_size: "3 tacos"
  servings_per_recipe: 1
  calories_per_serving: 390
ingredients:
  - item: "Corn or Flour Tortillas"
    amount: "3 small"
    calories: 210
  - item: "Cheddar Cheese"
    amount: "1/2 cup shredded"
    calories: 225
  - item: "Lettuce"
    amount: "1 cup shredded"
    calories: 5
  - item: "Protein"
    amount: "1/2 cup cooked chicken, beef, or other"
    calories: 0
  - item: "Guacamole"
    amount: "for topping"
    calories: 0
  - item: "Sour Cream"
    amount: "for topping"
    calories: 0
  - item: "Salsa"
    amount: "for topping"
    calories: 0
---

# Instructions
1. Warm tortillas in a dry skillet over medium heat for 30 seconds per side, or wrap in damp paper towel and microwave for 20-30 seconds
2. Add cooked protein of choice to each tortilla
3. Add shredded cheese
4. Add shredded lettuce
5. Top with guacamole, sour cream, and salsa as desired
6. Serve immediately

# Variations
- **Chicken Tacos**: Add [Garlic Chili Chicken](garlic_chili_chicken.md) or plain shredded chicken
- **Beef Tacos**: Add seasoned ground beef or shredded beef
- **Veggie Tacos**: Add sautéed peppers, onions, or black beans

# Recommended Toppings
- [Guacamole](guacamole.md)
- Sour Cream
- Salsa
- Cilantro
- Lime wedges
- Diced onions
- Diced tomatoes

# Nutrition Notes
Base Tacos (3 tortillas + cheese + lettuce): ~440 calories total
- Per taco: ~145 calories

Note: Nutrition values above are for the base tacos only. Add calories separately for any proteins, toppings, or sauces you include.
`,__vite_glob_0_83=`---
title: "Tamales"
source: "Hot Stove Society"
meal: ['Lunch', 'Dinner']
effort: "High"
season: ['Winter']
protein: "Pork"
cost: "Medium"
kitchen_impact: "High"
repeatability: "Low"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ['mexican', 'steamed', 'special-occasion']
ingredients:
  - item: "Masa"
    amount: "3 cups"
  - item: "Water or cooking liquid"
    amount: "2-3 cups"
  - item: "Baking Powder"
    amount: "1 1/2 tsp"
  - item: "Lard or butter"
    amount: "1 cup"
  - item: "Red Chili Sauce"
    amount: "1 3/4 cups"
  - item: "Dried Corn Husks"
    amount: "12-15"
---

# Instructions
1. Soak corn husks in bowling water for about an hour until soft.
2. Combine masa, salt, and baking powder in a medium bowl
3. Add warm broth or water and stir until a soft dough begins to form
4. Beat lard in a bowl of a stand mizer fitted with a paddle on medium speed until fluffy, about 1 minute.
5. Add dry ingredients and beat on medium speed until masa is smooth, 2-3 minutes. Should sound slappy like creamed butter
6. The dough should be soft and fluffy like cake batter
7. Drain husks and set aside 20 largest leaves.  Place husks, concabe side up on a clean surface, wide end nearest you.
8. Spread 1/4 cup masa across bottom third husk , leaving 1/2" border at wide end.  Spread a scant tablespoon of chili sauce over masa, and spread 1 1/2 tablespoon meat on top.
9. Gather long sides of husk together and pinch along seam to ensure that masa encases filling.  Fold husk in half crosswise.
10. Repeat process to make 20 tamales in all.  Place tamales upright, leaning them against one another in top of a steamer.
11. Place steamer over a pot of simmering water over medium heat, cover with a clean dish towel, and cover with a lid.
12. Steam until masa comes away from husk easily, about 1-2 hours. Allow to rest for 10 minutes, then unwrap and serve in husks, moistened with remaining sauce
`,__vite_glob_0_84=`---
title: "Recipe Name"
source: "Cookbook Name or Website"
meal: ["Dinner", "Lunch"] # Options: Breakfast, Lunch, Dinner, Snack
effort: "Medium"          # Options: Low, Medium, High
season: ["Winter"]        # Options: Spring, Summer, Fall, Winter, All-year
protein: "Chicken"        # Options: Chicken, Beef, Pork, Seafood, Vegetarian, Other
cost: "Medium"            # Options: Low, Medium, High
kitchen_impact: "Medium"  # Options: Low, Medium, High
repeatability: "High"     # Options: Low, Medium, High
is_component: true
microwavable_leftovers: true
last_cooked: 2024-05-20   # YYYY-MM-DD
tags: ["spicy", "one-pot"]
ingredients:
  - item: "Chicken Breast"
    amount: "500g"
---

# Instructions
1. Step one...
2. Step two...`,__vite_glob_0_85=`---
title: "Zucchini Bread"
source: "Gail Greendyke"
meal: ['Breakfast', 'Snack']
effort: "Low"
season: ['Summer', 'Fall']
protein: "Vegetarian"
cost: "Low"
kitchen_impact: "Low"
repeatability: "High"
is_component: false
microwavable_leftovers: true
last_cooked: # YYYY-MM-DD
tags: ['bread', 'quick-bread', 'vegetable']
ingredients:
  - item: "Flour"
    amount: "3 cups"
  - item: "Zucchini, grated"
    amount: "2 cup"
  - item: "Salt"
    amount: "1 tsp"
  - item: "Baking Soda"
    amount: "1 tsp"
  - item: "Baking Powder"
    amount: "1/4 tsp"
  - item: "Oil"
    amount: "1 cup"
  - item: "Sugar"
    amount: "2 cup"
  - item: "Vanilla"
    amount: "3 tsp"
  - item: "Cinnamon"
    amount: "3 tsp"
  - item: "Nuts, Chopped"
    amount: "1/2 cup"
---

# Instructions
1. Pre-heat oven to 325*
1. Beat eggs until foamy
2. Add oil, sugar, zucchini, and vanilla. Mix lightly but well
3. Add flour, salt, baking soda, cinnamon, baking powder, and nuts
4. Pour into greased loaf pans or muffins tins
5. Bake loaves for about an hour
6. Bake muffins for about 20 mins (for large)
`,__viteBrowserExternal={},__viteBrowserExternal$1=Object.freeze(Object.defineProperty({__proto__:null,default:__viteBrowserExternal},Symbol.toStringTag,{value:"Module"})),require$$0=getAugmentedNamespace(__viteBrowserExternal$1);var kindOf,hasRequiredKindOf;function requireKindOf(){if(hasRequiredKindOf)return kindOf;hasRequiredKindOf=1;var p=Object.prototype.toString;kindOf=function(w){if(w===void 0)return"undefined";if(w===null)return"null";var R=typeof w;if(R==="boolean")return"boolean";if(R==="string")return"string";if(R==="number")return"number";if(R==="symbol")return"symbol";if(R==="function")return A(w)?"generatorfunction":"function";if(S(w))return"array";if(h(w))return"buffer";if(b(w))return"arguments";if(v(w))return"date";if(f(w))return"error";if(x(w))return"regexp";switch(d(w)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(g(w))return"generator";switch(R=p.call(w),R){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return R.slice(8,-1).toLowerCase().replace(/\s/g,"")};function d(E){return typeof E.constructor=="function"?E.constructor.name:null}function S(E){return Array.isArray?Array.isArray(E):E instanceof Array}function f(E){return E instanceof Error||typeof E.message=="string"&&E.constructor&&typeof E.constructor.stackTraceLimit=="number"}function v(E){return E instanceof Date?!0:typeof E.toDateString=="function"&&typeof E.getDate=="function"&&typeof E.setDate=="function"}function x(E){return E instanceof RegExp?!0:typeof E.flags=="string"&&typeof E.ignoreCase=="boolean"&&typeof E.multiline=="boolean"&&typeof E.global=="boolean"}function A(E,w){return d(E)==="GeneratorFunction"}function g(E){return typeof E.throw=="function"&&typeof E.return=="function"&&typeof E.next=="function"}function b(E){try{if(typeof E.length=="number"&&typeof E.callee=="function")return!0}catch(w){if(w.message.indexOf("callee")!==-1)return!0}return!1}function h(E){return E.constructor&&typeof E.constructor.isBuffer=="function"?E.constructor.isBuffer(E):!1}return kindOf}var isExtendable,hasRequiredIsExtendable;function requireIsExtendable(){return hasRequiredIsExtendable||(hasRequiredIsExtendable=1,isExtendable=function(d){return typeof d<"u"&&d!==null&&(typeof d=="object"||typeof d=="function")}),isExtendable}var extendShallow,hasRequiredExtendShallow;function requireExtendShallow(){if(hasRequiredExtendShallow)return extendShallow;hasRequiredExtendShallow=1;var p=requireIsExtendable();extendShallow=function(v){p(v)||(v={});for(var x=arguments.length,A=1;A<x;A++){var g=arguments[A];p(g)&&d(v,g)}return v};function d(f,v){for(var x in v)S(v,x)&&(f[x]=v[x])}function S(f,v){return Object.prototype.hasOwnProperty.call(f,v)}return extendShallow}var sectionMatter,hasRequiredSectionMatter;function requireSectionMatter(){if(hasRequiredSectionMatter)return sectionMatter;hasRequiredSectionMatter=1;var p=requireKindOf(),d=requireExtendShallow();sectionMatter=function(b,h){typeof h=="function"&&(h={parse:h});var E=f(b),w={section_delimiter:"---",parse:A},R=d({},w,h),O=R.section_delimiter,Y=E.content.split(/\r?\n/),J=null,$=x(),ae=[],ce=[];function oe(te){E.content=te,J=[],ae=[]}function ge(te){ce.length&&($.key=v(ce[0],O),$.content=te,R.parse($,J),J.push($),$=x(),ae=[],ce=[])}for(var ee=0;ee<Y.length;ee++){var be=Y[ee],ie=ce.length,xe=be.trim();if(S(xe,O)){if(xe.length===3&&ee!==0){if(ie===0||ie===2){ae.push(be);continue}ce.push(xe),$.data=ae.join(`
`),ae=[];continue}J===null&&oe(ae.join(`
`)),ie===2&&ge(ae.join(`
`)),ce.push(xe);continue}ae.push(be)}return J===null?oe(ae.join(`
`)):ge(ae.join(`
`)),E.sections=J,E};function S(b,h){return!(b.slice(0,h.length)!==h||b.charAt(h.length+1)===h.slice(-1))}function f(b){if(p(b)!=="object"&&(b={content:b}),typeof b.content!="string"&&!g(b.content))throw new TypeError("expected a buffer or string");return b.content=b.content.toString(),b.sections=[],b}function v(b,h){return b?b.slice(h.length).trim():""}function x(){return{key:"",data:"",content:""}}function A(b){return b}function g(b){return b&&b.constructor&&typeof b.constructor.isBuffer=="function"?b.constructor.isBuffer(b):!1}return sectionMatter}var engines={exports:{}},jsYaml$1={},loader={},common={},hasRequiredCommon;function requireCommon(){if(hasRequiredCommon)return common;hasRequiredCommon=1;function p(A){return typeof A>"u"||A===null}function d(A){return typeof A=="object"&&A!==null}function S(A){return Array.isArray(A)?A:p(A)?[]:[A]}function f(A,g){var b,h,E,w;if(g)for(w=Object.keys(g),b=0,h=w.length;b<h;b+=1)E=w[b],A[E]=g[E];return A}function v(A,g){var b="",h;for(h=0;h<g;h+=1)b+=A;return b}function x(A){return A===0&&Number.NEGATIVE_INFINITY===1/A}return common.isNothing=p,common.isObject=d,common.toArray=S,common.repeat=v,common.isNegativeZero=x,common.extend=f,common}var exception,hasRequiredException;function requireException(){if(hasRequiredException)return exception;hasRequiredException=1;function p(d,S){Error.call(this),this.name="YAMLException",this.reason=d,this.mark=S,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return p.prototype=Object.create(Error.prototype),p.prototype.constructor=p,p.prototype.toString=function(S){var f=this.name+": ";return f+=this.reason||"(unknown reason)",!S&&this.mark&&(f+=" "+this.mark.toString()),f},exception=p,exception}var mark,hasRequiredMark;function requireMark(){if(hasRequiredMark)return mark;hasRequiredMark=1;var p=requireCommon();function d(S,f,v,x,A){this.name=S,this.buffer=f,this.position=v,this.line=x,this.column=A}return d.prototype.getSnippet=function(f,v){var x,A,g,b,h;if(!this.buffer)return null;for(f=f||4,v=v||75,x="",A=this.position;A>0&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(A-1))===-1;)if(A-=1,this.position-A>v/2-1){x=" ... ",A+=5;break}for(g="",b=this.position;b<this.buffer.length&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(b))===-1;)if(b+=1,b-this.position>v/2-1){g=" ... ",b-=5;break}return h=this.buffer.slice(A,b),p.repeat(" ",f)+x+h+g+`
`+p.repeat(" ",f+this.position-A+x.length)+"^"},d.prototype.toString=function(f){var v,x="";return this.name&&(x+='in "'+this.name+'" '),x+="at line "+(this.line+1)+", column "+(this.column+1),f||(v=this.getSnippet(),v&&(x+=`:
`+v)),x},mark=d,mark}var type,hasRequiredType;function requireType(){if(hasRequiredType)return type;hasRequiredType=1;var p=requireException(),d=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],S=["scalar","sequence","mapping"];function f(x){var A={};return x!==null&&Object.keys(x).forEach(function(g){x[g].forEach(function(b){A[String(b)]=g})}),A}function v(x,A){if(A=A||{},Object.keys(A).forEach(function(g){if(d.indexOf(g)===-1)throw new p('Unknown option "'+g+'" is met in definition of "'+x+'" YAML type.')}),this.tag=x,this.kind=A.kind||null,this.resolve=A.resolve||function(){return!0},this.construct=A.construct||function(g){return g},this.instanceOf=A.instanceOf||null,this.predicate=A.predicate||null,this.represent=A.represent||null,this.defaultStyle=A.defaultStyle||null,this.styleAliases=f(A.styleAliases||null),S.indexOf(this.kind)===-1)throw new p('Unknown kind "'+this.kind+'" is specified for "'+x+'" YAML type.')}return type=v,type}var schema,hasRequiredSchema;function requireSchema(){if(hasRequiredSchema)return schema;hasRequiredSchema=1;var p=requireCommon(),d=requireException(),S=requireType();function f(A,g,b){var h=[];return A.include.forEach(function(E){b=f(E,g,b)}),A[g].forEach(function(E){b.forEach(function(w,R){w.tag===E.tag&&w.kind===E.kind&&h.push(R)}),b.push(E)}),b.filter(function(E,w){return h.indexOf(w)===-1})}function v(){var A={scalar:{},sequence:{},mapping:{},fallback:{}},g,b;function h(E){A[E.kind][E.tag]=A.fallback[E.tag]=E}for(g=0,b=arguments.length;g<b;g+=1)arguments[g].forEach(h);return A}function x(A){this.include=A.include||[],this.implicit=A.implicit||[],this.explicit=A.explicit||[],this.implicit.forEach(function(g){if(g.loadKind&&g.loadKind!=="scalar")throw new d("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=f(this,"implicit",[]),this.compiledExplicit=f(this,"explicit",[]),this.compiledTypeMap=v(this.compiledImplicit,this.compiledExplicit)}return x.DEFAULT=null,x.create=function(){var g,b;switch(arguments.length){case 1:g=x.DEFAULT,b=arguments[0];break;case 2:g=arguments[0],b=arguments[1];break;default:throw new d("Wrong number of arguments for Schema.create function")}if(g=p.toArray(g),b=p.toArray(b),!g.every(function(h){return h instanceof x}))throw new d("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!b.every(function(h){return h instanceof S}))throw new d("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new x({include:g,explicit:b})},schema=x,schema}var str,hasRequiredStr;function requireStr(){if(hasRequiredStr)return str;hasRequiredStr=1;var p=requireType();return str=new p("tag:yaml.org,2002:str",{kind:"scalar",construct:function(d){return d!==null?d:""}}),str}var seq,hasRequiredSeq;function requireSeq(){if(hasRequiredSeq)return seq;hasRequiredSeq=1;var p=requireType();return seq=new p("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(d){return d!==null?d:[]}}),seq}var map,hasRequiredMap;function requireMap(){if(hasRequiredMap)return map;hasRequiredMap=1;var p=requireType();return map=new p("tag:yaml.org,2002:map",{kind:"mapping",construct:function(d){return d!==null?d:{}}}),map}var failsafe,hasRequiredFailsafe;function requireFailsafe(){if(hasRequiredFailsafe)return failsafe;hasRequiredFailsafe=1;var p=requireSchema();return failsafe=new p({explicit:[requireStr(),requireSeq(),requireMap()]}),failsafe}var _null,hasRequired_null;function require_null(){if(hasRequired_null)return _null;hasRequired_null=1;var p=requireType();function d(v){if(v===null)return!0;var x=v.length;return x===1&&v==="~"||x===4&&(v==="null"||v==="Null"||v==="NULL")}function S(){return null}function f(v){return v===null}return _null=new p("tag:yaml.org,2002:null",{kind:"scalar",resolve:d,construct:S,predicate:f,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"}),_null}var bool,hasRequiredBool;function requireBool(){if(hasRequiredBool)return bool;hasRequiredBool=1;var p=requireType();function d(v){if(v===null)return!1;var x=v.length;return x===4&&(v==="true"||v==="True"||v==="TRUE")||x===5&&(v==="false"||v==="False"||v==="FALSE")}function S(v){return v==="true"||v==="True"||v==="TRUE"}function f(v){return Object.prototype.toString.call(v)==="[object Boolean]"}return bool=new p("tag:yaml.org,2002:bool",{kind:"scalar",resolve:d,construct:S,predicate:f,represent:{lowercase:function(v){return v?"true":"false"},uppercase:function(v){return v?"TRUE":"FALSE"},camelcase:function(v){return v?"True":"False"}},defaultStyle:"lowercase"}),bool}var int,hasRequiredInt;function requireInt(){if(hasRequiredInt)return int;hasRequiredInt=1;var p=requireCommon(),d=requireType();function S(b){return 48<=b&&b<=57||65<=b&&b<=70||97<=b&&b<=102}function f(b){return 48<=b&&b<=55}function v(b){return 48<=b&&b<=57}function x(b){if(b===null)return!1;var h=b.length,E=0,w=!1,R;if(!h)return!1;if(R=b[E],(R==="-"||R==="+")&&(R=b[++E]),R==="0"){if(E+1===h)return!0;if(R=b[++E],R==="b"){for(E++;E<h;E++)if(R=b[E],R!=="_"){if(R!=="0"&&R!=="1")return!1;w=!0}return w&&R!=="_"}if(R==="x"){for(E++;E<h;E++)if(R=b[E],R!=="_"){if(!S(b.charCodeAt(E)))return!1;w=!0}return w&&R!=="_"}for(;E<h;E++)if(R=b[E],R!=="_"){if(!f(b.charCodeAt(E)))return!1;w=!0}return w&&R!=="_"}if(R==="_")return!1;for(;E<h;E++)if(R=b[E],R!=="_"){if(R===":")break;if(!v(b.charCodeAt(E)))return!1;w=!0}return!w||R==="_"?!1:R!==":"?!0:/^(:[0-5]?[0-9])+$/.test(b.slice(E))}function A(b){var h=b,E=1,w,R,O=[];return h.indexOf("_")!==-1&&(h=h.replace(/_/g,"")),w=h[0],(w==="-"||w==="+")&&(w==="-"&&(E=-1),h=h.slice(1),w=h[0]),h==="0"?0:w==="0"?h[1]==="b"?E*parseInt(h.slice(2),2):h[1]==="x"?E*parseInt(h,16):E*parseInt(h,8):h.indexOf(":")!==-1?(h.split(":").forEach(function(Y){O.unshift(parseInt(Y,10))}),h=0,R=1,O.forEach(function(Y){h+=Y*R,R*=60}),E*h):E*parseInt(h,10)}function g(b){return Object.prototype.toString.call(b)==="[object Number]"&&b%1===0&&!p.isNegativeZero(b)}return int=new d("tag:yaml.org,2002:int",{kind:"scalar",resolve:x,construct:A,predicate:g,represent:{binary:function(b){return b>=0?"0b"+b.toString(2):"-0b"+b.toString(2).slice(1)},octal:function(b){return b>=0?"0"+b.toString(8):"-0"+b.toString(8).slice(1)},decimal:function(b){return b.toString(10)},hexadecimal:function(b){return b>=0?"0x"+b.toString(16).toUpperCase():"-0x"+b.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),int}var float,hasRequiredFloat;function requireFloat(){if(hasRequiredFloat)return float;hasRequiredFloat=1;var p=requireCommon(),d=requireType(),S=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function f(b){return!(b===null||!S.test(b)||b[b.length-1]==="_")}function v(b){var h,E,w,R;return h=b.replace(/_/g,"").toLowerCase(),E=h[0]==="-"?-1:1,R=[],"+-".indexOf(h[0])>=0&&(h=h.slice(1)),h===".inf"?E===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:h===".nan"?NaN:h.indexOf(":")>=0?(h.split(":").forEach(function(O){R.unshift(parseFloat(O,10))}),h=0,w=1,R.forEach(function(O){h+=O*w,w*=60}),E*h):E*parseFloat(h,10)}var x=/^[-+]?[0-9]+e/;function A(b,h){var E;if(isNaN(b))switch(h){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===b)switch(h){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===b)switch(h){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(p.isNegativeZero(b))return"-0.0";return E=b.toString(10),x.test(E)?E.replace("e",".e"):E}function g(b){return Object.prototype.toString.call(b)==="[object Number]"&&(b%1!==0||p.isNegativeZero(b))}return float=new d("tag:yaml.org,2002:float",{kind:"scalar",resolve:f,construct:v,predicate:g,represent:A,defaultStyle:"lowercase"}),float}var json,hasRequiredJson;function requireJson(){if(hasRequiredJson)return json;hasRequiredJson=1;var p=requireSchema();return json=new p({include:[requireFailsafe()],implicit:[require_null(),requireBool(),requireInt(),requireFloat()]}),json}var core,hasRequiredCore;function requireCore(){if(hasRequiredCore)return core;hasRequiredCore=1;var p=requireSchema();return core=new p({include:[requireJson()]}),core}var timestamp,hasRequiredTimestamp;function requireTimestamp(){if(hasRequiredTimestamp)return timestamp;hasRequiredTimestamp=1;var p=requireType(),d=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),S=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function f(A){return A===null?!1:d.exec(A)!==null||S.exec(A)!==null}function v(A){var g,b,h,E,w,R,O,Y=0,J=null,$,ae,ce;if(g=d.exec(A),g===null&&(g=S.exec(A)),g===null)throw new Error("Date resolve error");if(b=+g[1],h=+g[2]-1,E=+g[3],!g[4])return new Date(Date.UTC(b,h,E));if(w=+g[4],R=+g[5],O=+g[6],g[7]){for(Y=g[7].slice(0,3);Y.length<3;)Y+="0";Y=+Y}return g[9]&&($=+g[10],ae=+(g[11]||0),J=($*60+ae)*6e4,g[9]==="-"&&(J=-J)),ce=new Date(Date.UTC(b,h,E,w,R,O,Y)),J&&ce.setTime(ce.getTime()-J),ce}function x(A){return A.toISOString()}return timestamp=new p("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:f,construct:v,instanceOf:Date,represent:x}),timestamp}var merge,hasRequiredMerge;function requireMerge(){if(hasRequiredMerge)return merge;hasRequiredMerge=1;var p=requireType();function d(S){return S==="<<"||S===null}return merge=new p("tag:yaml.org,2002:merge",{kind:"scalar",resolve:d}),merge}function commonjsRequire(p){throw new Error('Could not dynamically require "'+p+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var binary,hasRequiredBinary;function requireBinary(){if(hasRequiredBinary)return binary;hasRequiredBinary=1;var p;try{var d=commonjsRequire;p=d("buffer").Buffer}catch{}var S=requireType(),f=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function v(b){if(b===null)return!1;var h,E,w=0,R=b.length,O=f;for(E=0;E<R;E++)if(h=O.indexOf(b.charAt(E)),!(h>64)){if(h<0)return!1;w+=6}return w%8===0}function x(b){var h,E,w=b.replace(/[\r\n=]/g,""),R=w.length,O=f,Y=0,J=[];for(h=0;h<R;h++)h%4===0&&h&&(J.push(Y>>16&255),J.push(Y>>8&255),J.push(Y&255)),Y=Y<<6|O.indexOf(w.charAt(h));return E=R%4*6,E===0?(J.push(Y>>16&255),J.push(Y>>8&255),J.push(Y&255)):E===18?(J.push(Y>>10&255),J.push(Y>>2&255)):E===12&&J.push(Y>>4&255),p?p.from?p.from(J):new p(J):J}function A(b){var h="",E=0,w,R,O=b.length,Y=f;for(w=0;w<O;w++)w%3===0&&w&&(h+=Y[E>>18&63],h+=Y[E>>12&63],h+=Y[E>>6&63],h+=Y[E&63]),E=(E<<8)+b[w];return R=O%3,R===0?(h+=Y[E>>18&63],h+=Y[E>>12&63],h+=Y[E>>6&63],h+=Y[E&63]):R===2?(h+=Y[E>>10&63],h+=Y[E>>4&63],h+=Y[E<<2&63],h+=Y[64]):R===1&&(h+=Y[E>>2&63],h+=Y[E<<4&63],h+=Y[64],h+=Y[64]),h}function g(b){return p&&p.isBuffer(b)}return binary=new S("tag:yaml.org,2002:binary",{kind:"scalar",resolve:v,construct:x,predicate:g,represent:A}),binary}var omap,hasRequiredOmap;function requireOmap(){if(hasRequiredOmap)return omap;hasRequiredOmap=1;var p=requireType(),d=Object.prototype.hasOwnProperty,S=Object.prototype.toString;function f(x){if(x===null)return!0;var A=[],g,b,h,E,w,R=x;for(g=0,b=R.length;g<b;g+=1){if(h=R[g],w=!1,S.call(h)!=="[object Object]")return!1;for(E in h)if(d.call(h,E))if(!w)w=!0;else return!1;if(!w)return!1;if(A.indexOf(E)===-1)A.push(E);else return!1}return!0}function v(x){return x!==null?x:[]}return omap=new p("tag:yaml.org,2002:omap",{kind:"sequence",resolve:f,construct:v}),omap}var pairs,hasRequiredPairs;function requirePairs(){if(hasRequiredPairs)return pairs;hasRequiredPairs=1;var p=requireType(),d=Object.prototype.toString;function S(v){if(v===null)return!0;var x,A,g,b,h,E=v;for(h=new Array(E.length),x=0,A=E.length;x<A;x+=1){if(g=E[x],d.call(g)!=="[object Object]"||(b=Object.keys(g),b.length!==1))return!1;h[x]=[b[0],g[b[0]]]}return!0}function f(v){if(v===null)return[];var x,A,g,b,h,E=v;for(h=new Array(E.length),x=0,A=E.length;x<A;x+=1)g=E[x],b=Object.keys(g),h[x]=[b[0],g[b[0]]];return h}return pairs=new p("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:S,construct:f}),pairs}var set,hasRequiredSet;function requireSet(){if(hasRequiredSet)return set;hasRequiredSet=1;var p=requireType(),d=Object.prototype.hasOwnProperty;function S(v){if(v===null)return!0;var x,A=v;for(x in A)if(d.call(A,x)&&A[x]!==null)return!1;return!0}function f(v){return v!==null?v:{}}return set=new p("tag:yaml.org,2002:set",{kind:"mapping",resolve:S,construct:f}),set}var default_safe,hasRequiredDefault_safe;function requireDefault_safe(){if(hasRequiredDefault_safe)return default_safe;hasRequiredDefault_safe=1;var p=requireSchema();return default_safe=new p({include:[requireCore()],implicit:[requireTimestamp(),requireMerge()],explicit:[requireBinary(),requireOmap(),requirePairs(),requireSet()]}),default_safe}var _undefined,hasRequired_undefined;function require_undefined(){if(hasRequired_undefined)return _undefined;hasRequired_undefined=1;var p=requireType();function d(){return!0}function S(){}function f(){return""}function v(x){return typeof x>"u"}return _undefined=new p("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:d,construct:S,predicate:v,represent:f}),_undefined}var regexp,hasRequiredRegexp;function requireRegexp(){if(hasRequiredRegexp)return regexp;hasRequiredRegexp=1;var p=requireType();function d(x){if(x===null||x.length===0)return!1;var A=x,g=/\/([gim]*)$/.exec(x),b="";return!(A[0]==="/"&&(g&&(b=g[1]),b.length>3||A[A.length-b.length-1]!=="/"))}function S(x){var A=x,g=/\/([gim]*)$/.exec(x),b="";return A[0]==="/"&&(g&&(b=g[1]),A=A.slice(1,A.length-b.length-1)),new RegExp(A,b)}function f(x){var A="/"+x.source+"/";return x.global&&(A+="g"),x.multiline&&(A+="m"),x.ignoreCase&&(A+="i"),A}function v(x){return Object.prototype.toString.call(x)==="[object RegExp]"}return regexp=new p("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:d,construct:S,predicate:v,represent:f}),regexp}var _function,hasRequired_function;function require_function(){if(hasRequired_function)return _function;hasRequired_function=1;var p;try{var d=commonjsRequire;p=d("esprima")}catch{typeof window<"u"&&(p=window.esprima)}var S=requireType();function f(g){if(g===null)return!1;try{var b="("+g+")",h=p.parse(b,{range:!0});return!(h.type!=="Program"||h.body.length!==1||h.body[0].type!=="ExpressionStatement"||h.body[0].expression.type!=="ArrowFunctionExpression"&&h.body[0].expression.type!=="FunctionExpression")}catch{return!1}}function v(g){var b="("+g+")",h=p.parse(b,{range:!0}),E=[],w;if(h.type!=="Program"||h.body.length!==1||h.body[0].type!=="ExpressionStatement"||h.body[0].expression.type!=="ArrowFunctionExpression"&&h.body[0].expression.type!=="FunctionExpression")throw new Error("Failed to resolve function");return h.body[0].expression.params.forEach(function(R){E.push(R.name)}),w=h.body[0].expression.body.range,h.body[0].expression.body.type==="BlockStatement"?new Function(E,b.slice(w[0]+1,w[1]-1)):new Function(E,"return "+b.slice(w[0],w[1]))}function x(g){return g.toString()}function A(g){return Object.prototype.toString.call(g)==="[object Function]"}return _function=new S("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:f,construct:v,predicate:A,represent:x}),_function}var default_full,hasRequiredDefault_full;function requireDefault_full(){if(hasRequiredDefault_full)return default_full;hasRequiredDefault_full=1;var p=requireSchema();return default_full=p.DEFAULT=new p({include:[requireDefault_safe()],explicit:[require_undefined(),requireRegexp(),require_function()]}),default_full}var hasRequiredLoader;function requireLoader(){if(hasRequiredLoader)return loader;hasRequiredLoader=1;var p=requireCommon(),d=requireException(),S=requireMark(),f=requireDefault_safe(),v=requireDefault_full(),x=Object.prototype.hasOwnProperty,A=1,g=2,b=3,h=4,E=1,w=2,R=3,O=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Y=/[\x85\u2028\u2029]/,J=/[,\[\]\{\}]/,$=/^(?:!|!!|![a-z\-]+!)$/i,ae=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function ce(o){return Object.prototype.toString.call(o)}function oe(o){return o===10||o===13}function ge(o){return o===9||o===32}function ee(o){return o===9||o===32||o===10||o===13}function be(o){return o===44||o===91||o===93||o===123||o===125}function ie(o){var H;return 48<=o&&o<=57?o-48:(H=o|32,97<=H&&H<=102?H-97+10:-1)}function xe(o){return o===120?2:o===117?4:o===85?8:0}function te(o){return 48<=o&&o<=57?o-48:-1}function _e(o){return o===48?"\0":o===97?"\x07":o===98?"\b":o===116||o===9?"	":o===110?`
`:o===118?"\v":o===102?"\f":o===114?"\r":o===101?"\x1B":o===32?" ":o===34?'"':o===47?"/":o===92?"\\":o===78?"":o===95?" ":o===76?"\u2028":o===80?"\u2029":""}function me(o){return o<=65535?String.fromCharCode(o):String.fromCharCode((o-65536>>10)+55296,(o-65536&1023)+56320)}function fe(o,H,m){H==="__proto__"?Object.defineProperty(o,H,{configurable:!0,enumerable:!0,writable:!0,value:m}):o[H]=m}for(var Ae=new Array(256),pe=new Array(256),ke=0;ke<256;ke++)Ae[ke]=_e(ke)?1:0,pe[ke]=_e(ke);function U(o,H){this.input=o,this.filename=H.filename||null,this.schema=H.schema||v,this.onWarning=H.onWarning||null,this.legacy=H.legacy||!1,this.json=H.json||!1,this.listener=H.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=o.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function ne(o,H){return new d(H,new S(o.filename,o.input,o.position,o.line,o.position-o.lineStart))}function I(o,H){throw ne(o,H)}function Me(o,H){o.onWarning&&o.onWarning.call(null,ne(o,H))}var Be={YAML:function(H,m,r){var u,c,_;H.version!==null&&I(H,"duplication of %YAML directive"),r.length!==1&&I(H,"YAML directive accepts exactly one argument"),u=/^([0-9]+)\.([0-9]+)$/.exec(r[0]),u===null&&I(H,"ill-formed argument of the YAML directive"),c=parseInt(u[1],10),_=parseInt(u[2],10),c!==1&&I(H,"unacceptable YAML version of the document"),H.version=r[0],H.checkLineBreaks=_<2,_!==1&&_!==2&&Me(H,"unsupported YAML version of the document")},TAG:function(H,m,r){var u,c;r.length!==2&&I(H,"TAG directive accepts exactly two arguments"),u=r[0],c=r[1],$.test(u)||I(H,"ill-formed tag handle (first argument) of the TAG directive"),x.call(H.tagMap,u)&&I(H,'there is a previously declared suffix for "'+u+'" tag handle'),ae.test(c)||I(H,"ill-formed tag prefix (second argument) of the TAG directive"),H.tagMap[u]=c}};function k(o,H,m,r){var u,c,_,C;if(H<m){if(C=o.input.slice(H,m),r)for(u=0,c=C.length;u<c;u+=1)_=C.charCodeAt(u),_===9||32<=_&&_<=1114111||I(o,"expected valid JSON character");else O.test(C)&&I(o,"the stream contains non-printable characters");o.result+=C}}function G(o,H,m,r){var u,c,_,C;for(p.isObject(m)||I(o,"cannot merge mappings; the provided source object is unacceptable"),u=Object.keys(m),_=0,C=u.length;_<C;_+=1)c=u[_],x.call(H,c)||(fe(H,c,m[c]),r[c]=!0)}function P(o,H,m,r,u,c,_,C){var M,q;if(Array.isArray(u))for(u=Array.prototype.slice.call(u),M=0,q=u.length;M<q;M+=1)Array.isArray(u[M])&&I(o,"nested arrays are not supported inside keys"),typeof u=="object"&&ce(u[M])==="[object Object]"&&(u[M]="[object Object]");if(typeof u=="object"&&ce(u)==="[object Object]"&&(u="[object Object]"),u=String(u),H===null&&(H={}),r==="tag:yaml.org,2002:merge")if(Array.isArray(c))for(M=0,q=c.length;M<q;M+=1)G(o,H,c[M],m);else G(o,H,c,m);else!o.json&&!x.call(m,u)&&x.call(H,u)&&(o.line=_||o.line,o.position=C||o.position,I(o,"duplicated mapping key")),fe(H,u,c),delete m[u];return H}function le(o){var H;H=o.input.charCodeAt(o.position),H===10?o.position++:H===13?(o.position++,o.input.charCodeAt(o.position)===10&&o.position++):I(o,"a line break is expected"),o.line+=1,o.lineStart=o.position}function re(o,H,m){for(var r=0,u=o.input.charCodeAt(o.position);u!==0;){for(;ge(u);)u=o.input.charCodeAt(++o.position);if(H&&u===35)do u=o.input.charCodeAt(++o.position);while(u!==10&&u!==13&&u!==0);if(oe(u))for(le(o),u=o.input.charCodeAt(o.position),r++,o.lineIndent=0;u===32;)o.lineIndent++,u=o.input.charCodeAt(++o.position);else break}return m!==-1&&r!==0&&o.lineIndent<m&&Me(o,"deficient indentation"),r}function ve(o){var H=o.position,m;return m=o.input.charCodeAt(H),!!((m===45||m===46)&&m===o.input.charCodeAt(H+1)&&m===o.input.charCodeAt(H+2)&&(H+=3,m=o.input.charCodeAt(H),m===0||ee(m)))}function we(o,H){H===1?o.result+=" ":H>1&&(o.result+=p.repeat(`
`,H-1))}function Qe(o,H,m){var r,u,c,_,C,M,q,V,j=o.kind,W=o.result,X;if(X=o.input.charCodeAt(o.position),ee(X)||be(X)||X===35||X===38||X===42||X===33||X===124||X===62||X===39||X===34||X===37||X===64||X===96||(X===63||X===45)&&(u=o.input.charCodeAt(o.position+1),ee(u)||m&&be(u)))return!1;for(o.kind="scalar",o.result="",c=_=o.position,C=!1;X!==0;){if(X===58){if(u=o.input.charCodeAt(o.position+1),ee(u)||m&&be(u))break}else if(X===35){if(r=o.input.charCodeAt(o.position-1),ee(r))break}else{if(o.position===o.lineStart&&ve(o)||m&&be(X))break;if(oe(X))if(M=o.line,q=o.lineStart,V=o.lineIndent,re(o,!1,-1),o.lineIndent>=H){C=!0,X=o.input.charCodeAt(o.position);continue}else{o.position=_,o.line=M,o.lineStart=q,o.lineIndent=V;break}}C&&(k(o,c,_,!1),we(o,o.line-M),c=_=o.position,C=!1),ge(X)||(_=o.position+1),X=o.input.charCodeAt(++o.position)}return k(o,c,_,!1),o.result?!0:(o.kind=j,o.result=W,!1)}function je(o,H){var m,r,u;if(m=o.input.charCodeAt(o.position),m!==39)return!1;for(o.kind="scalar",o.result="",o.position++,r=u=o.position;(m=o.input.charCodeAt(o.position))!==0;)if(m===39)if(k(o,r,o.position,!0),m=o.input.charCodeAt(++o.position),m===39)r=o.position,o.position++,u=o.position;else return!0;else oe(m)?(k(o,r,u,!0),we(o,re(o,!1,H)),r=u=o.position):o.position===o.lineStart&&ve(o)?I(o,"unexpected end of the document within a single quoted scalar"):(o.position++,u=o.position);I(o,"unexpected end of the stream within a single quoted scalar")}function Mn(o,H){var m,r,u,c,_,C;if(C=o.input.charCodeAt(o.position),C!==34)return!1;for(o.kind="scalar",o.result="",o.position++,m=r=o.position;(C=o.input.charCodeAt(o.position))!==0;){if(C===34)return k(o,m,o.position,!0),o.position++,!0;if(C===92){if(k(o,m,o.position,!0),C=o.input.charCodeAt(++o.position),oe(C))re(o,!1,H);else if(C<256&&Ae[C])o.result+=pe[C],o.position++;else if((_=xe(C))>0){for(u=_,c=0;u>0;u--)C=o.input.charCodeAt(++o.position),(_=ie(C))>=0?c=(c<<4)+_:I(o,"expected hexadecimal character");o.result+=me(c),o.position++}else I(o,"unknown escape sequence");m=r=o.position}else oe(C)?(k(o,m,r,!0),we(o,re(o,!1,H)),m=r=o.position):o.position===o.lineStart&&ve(o)?I(o,"unexpected end of the document within a double quoted scalar"):(o.position++,r=o.position)}I(o,"unexpected end of the stream within a double quoted scalar")}function Kn(o,H){var m=!0,r,u=o.tag,c,_=o.anchor,C,M,q,V,j,W={},X,he,Te,Se;if(Se=o.input.charCodeAt(o.position),Se===91)M=93,j=!1,c=[];else if(Se===123)M=125,j=!0,c={};else return!1;for(o.anchor!==null&&(o.anchorMap[o.anchor]=c),Se=o.input.charCodeAt(++o.position);Se!==0;){if(re(o,!0,H),Se=o.input.charCodeAt(o.position),Se===M)return o.position++,o.tag=u,o.anchor=_,o.kind=j?"mapping":"sequence",o.result=c,!0;m||I(o,"missed comma between flow collection entries"),he=X=Te=null,q=V=!1,Se===63&&(C=o.input.charCodeAt(o.position+1),ee(C)&&(q=V=!0,o.position++,re(o,!0,H))),r=o.line,vn(o,H,A,!1,!0),he=o.tag,X=o.result,re(o,!0,H),Se=o.input.charCodeAt(o.position),(V||o.line===r)&&Se===58&&(q=!0,Se=o.input.charCodeAt(++o.position),re(o,!0,H),vn(o,H,A,!1,!0),Te=o.result),j?P(o,c,W,he,X,Te):q?c.push(P(o,null,W,he,X,Te)):c.push(X),re(o,!0,H),Se=o.input.charCodeAt(o.position),Se===44?(m=!0,Se=o.input.charCodeAt(++o.position)):m=!1}I(o,"unexpected end of the stream within a flow collection")}function Tn(o,H){var m,r,u=E,c=!1,_=!1,C=H,M=0,q=!1,V,j;if(j=o.input.charCodeAt(o.position),j===124)r=!1;else if(j===62)r=!0;else return!1;for(o.kind="scalar",o.result="";j!==0;)if(j=o.input.charCodeAt(++o.position),j===43||j===45)E===u?u=j===43?R:w:I(o,"repeat of a chomping mode identifier");else if((V=te(j))>=0)V===0?I(o,"bad explicit indentation width of a block scalar; it cannot be less than one"):_?I(o,"repeat of an indentation width identifier"):(C=H+V-1,_=!0);else break;if(ge(j)){do j=o.input.charCodeAt(++o.position);while(ge(j));if(j===35)do j=o.input.charCodeAt(++o.position);while(!oe(j)&&j!==0)}for(;j!==0;){for(le(o),o.lineIndent=0,j=o.input.charCodeAt(o.position);(!_||o.lineIndent<C)&&j===32;)o.lineIndent++,j=o.input.charCodeAt(++o.position);if(!_&&o.lineIndent>C&&(C=o.lineIndent),oe(j)){M++;continue}if(o.lineIndent<C){u===R?o.result+=p.repeat(`
`,c?1+M:M):u===E&&c&&(o.result+=`
`);break}for(r?ge(j)?(q=!0,o.result+=p.repeat(`
`,c?1+M:M)):q?(q=!1,o.result+=p.repeat(`
`,M+1)):M===0?c&&(o.result+=" "):o.result+=p.repeat(`
`,M):o.result+=p.repeat(`
`,c?1+M:M),c=!0,_=!0,M=0,m=o.position;!oe(j)&&j!==0;)j=o.input.charCodeAt(++o.position);k(o,m,o.position,!1)}return!0}function yn(o,H){var m,r=o.tag,u=o.anchor,c=[],_,C=!1,M;for(o.anchor!==null&&(o.anchorMap[o.anchor]=c),M=o.input.charCodeAt(o.position);M!==0&&!(M!==45||(_=o.input.charCodeAt(o.position+1),!ee(_)));){if(C=!0,o.position++,re(o,!0,-1)&&o.lineIndent<=H){c.push(null),M=o.input.charCodeAt(o.position);continue}if(m=o.line,vn(o,H,b,!1,!0),c.push(o.result),re(o,!0,-1),M=o.input.charCodeAt(o.position),(o.line===m||o.lineIndent>H)&&M!==0)I(o,"bad indentation of a sequence entry");else if(o.lineIndent<H)break}return C?(o.tag=r,o.anchor=u,o.kind="sequence",o.result=c,!0):!1}function sn(o,H,m){var r,u,c,_,C=o.tag,M=o.anchor,q={},V={},j=null,W=null,X=null,he=!1,Te=!1,Se;for(o.anchor!==null&&(o.anchorMap[o.anchor]=q),Se=o.input.charCodeAt(o.position);Se!==0;){if(r=o.input.charCodeAt(o.position+1),c=o.line,_=o.position,(Se===63||Se===58)&&ee(r))Se===63?(he&&(P(o,q,V,j,W,null),j=W=X=null),Te=!0,he=!0,u=!0):he?(he=!1,u=!0):I(o,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),o.position+=1,Se=r;else if(vn(o,m,g,!1,!0))if(o.line===c){for(Se=o.input.charCodeAt(o.position);ge(Se);)Se=o.input.charCodeAt(++o.position);if(Se===58)Se=o.input.charCodeAt(++o.position),ee(Se)||I(o,"a whitespace character is expected after the key-value separator within a block mapping"),he&&(P(o,q,V,j,W,null),j=W=X=null),Te=!0,he=!1,u=!1,j=o.tag,W=o.result;else if(Te)I(o,"can not read an implicit mapping pair; a colon is missed");else return o.tag=C,o.anchor=M,!0}else if(Te)I(o,"can not read a block mapping entry; a multiline key may not be an implicit key");else return o.tag=C,o.anchor=M,!0;else break;if((o.line===c||o.lineIndent>H)&&(vn(o,H,h,!0,u)&&(he?W=o.result:X=o.result),he||(P(o,q,V,j,W,X,c,_),j=W=X=null),re(o,!0,-1),Se=o.input.charCodeAt(o.position)),o.lineIndent>H&&Se!==0)I(o,"bad indentation of a mapping entry");else if(o.lineIndent<H)break}return he&&P(o,q,V,j,W,null),Te&&(o.tag=C,o.anchor=M,o.kind="mapping",o.result=q),Te}function $n(o){var H,m=!1,r=!1,u,c,_;if(_=o.input.charCodeAt(o.position),_!==33)return!1;if(o.tag!==null&&I(o,"duplication of a tag property"),_=o.input.charCodeAt(++o.position),_===60?(m=!0,_=o.input.charCodeAt(++o.position)):_===33?(r=!0,u="!!",_=o.input.charCodeAt(++o.position)):u="!",H=o.position,m){do _=o.input.charCodeAt(++o.position);while(_!==0&&_!==62);o.position<o.length?(c=o.input.slice(H,o.position),_=o.input.charCodeAt(++o.position)):I(o,"unexpected end of the stream within a verbatim tag")}else{for(;_!==0&&!ee(_);)_===33&&(r?I(o,"tag suffix cannot contain exclamation marks"):(u=o.input.slice(H-1,o.position+1),$.test(u)||I(o,"named tag handle cannot contain such characters"),r=!0,H=o.position+1)),_=o.input.charCodeAt(++o.position);c=o.input.slice(H,o.position),J.test(c)&&I(o,"tag suffix cannot contain flow indicator characters")}return c&&!ae.test(c)&&I(o,"tag name cannot contain such characters: "+c),m?o.tag=c:x.call(o.tagMap,u)?o.tag=o.tagMap[u]+c:u==="!"?o.tag="!"+c:u==="!!"?o.tag="tag:yaml.org,2002:"+c:I(o,'undeclared tag handle "'+u+'"'),!0}function Pn(o){var H,m;if(m=o.input.charCodeAt(o.position),m!==38)return!1;for(o.anchor!==null&&I(o,"duplication of an anchor property"),m=o.input.charCodeAt(++o.position),H=o.position;m!==0&&!ee(m)&&!be(m);)m=o.input.charCodeAt(++o.position);return o.position===H&&I(o,"name of an anchor node must contain at least one character"),o.anchor=o.input.slice(H,o.position),!0}function at(o){var H,m,r;if(r=o.input.charCodeAt(o.position),r!==42)return!1;for(r=o.input.charCodeAt(++o.position),H=o.position;r!==0&&!ee(r)&&!be(r);)r=o.input.charCodeAt(++o.position);return o.position===H&&I(o,"name of an alias node must contain at least one character"),m=o.input.slice(H,o.position),x.call(o.anchorMap,m)||I(o,'unidentified alias "'+m+'"'),o.result=o.anchorMap[m],re(o,!0,-1),!0}function vn(o,H,m,r,u){var c,_,C,M=1,q=!1,V=!1,j,W,X,he,Te;if(o.listener!==null&&o.listener("open",o),o.tag=null,o.anchor=null,o.kind=null,o.result=null,c=_=C=h===m||b===m,r&&re(o,!0,-1)&&(q=!0,o.lineIndent>H?M=1:o.lineIndent===H?M=0:o.lineIndent<H&&(M=-1)),M===1)for(;$n(o)||Pn(o);)re(o,!0,-1)?(q=!0,C=c,o.lineIndent>H?M=1:o.lineIndent===H?M=0:o.lineIndent<H&&(M=-1)):C=!1;if(C&&(C=q||u),(M===1||h===m)&&(A===m||g===m?he=H:he=H+1,Te=o.position-o.lineStart,M===1?C&&(yn(o,Te)||sn(o,Te,he))||Kn(o,he)?V=!0:(_&&Tn(o,he)||je(o,he)||Mn(o,he)?V=!0:at(o)?(V=!0,(o.tag!==null||o.anchor!==null)&&I(o,"alias node should not have any properties")):Qe(o,he,A===m)&&(V=!0,o.tag===null&&(o.tag="?")),o.anchor!==null&&(o.anchorMap[o.anchor]=o.result)):M===0&&(V=C&&yn(o,Te))),o.tag!==null&&o.tag!=="!")if(o.tag==="?"){for(o.result!==null&&o.kind!=="scalar"&&I(o,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+o.kind+'"'),j=0,W=o.implicitTypes.length;j<W;j+=1)if(X=o.implicitTypes[j],X.resolve(o.result)){o.result=X.construct(o.result),o.tag=X.tag,o.anchor!==null&&(o.anchorMap[o.anchor]=o.result);break}}else x.call(o.typeMap[o.kind||"fallback"],o.tag)?(X=o.typeMap[o.kind||"fallback"][o.tag],o.result!==null&&X.kind!==o.kind&&I(o,"unacceptable node kind for !<"+o.tag+'> tag; it should be "'+X.kind+'", not "'+o.kind+'"'),X.resolve(o.result)?(o.result=X.construct(o.result),o.anchor!==null&&(o.anchorMap[o.anchor]=o.result)):I(o,"cannot resolve a node with !<"+o.tag+"> explicit tag")):I(o,"unknown tag !<"+o.tag+">");return o.listener!==null&&o.listener("close",o),o.tag!==null||o.anchor!==null||V}function lt(o){var H=o.position,m,r,u,c=!1,_;for(o.version=null,o.checkLineBreaks=o.legacy,o.tagMap={},o.anchorMap={};(_=o.input.charCodeAt(o.position))!==0&&(re(o,!0,-1),_=o.input.charCodeAt(o.position),!(o.lineIndent>0||_!==37));){for(c=!0,_=o.input.charCodeAt(++o.position),m=o.position;_!==0&&!ee(_);)_=o.input.charCodeAt(++o.position);for(r=o.input.slice(m,o.position),u=[],r.length<1&&I(o,"directive name must not be less than one character in length");_!==0;){for(;ge(_);)_=o.input.charCodeAt(++o.position);if(_===35){do _=o.input.charCodeAt(++o.position);while(_!==0&&!oe(_));break}if(oe(_))break;for(m=o.position;_!==0&&!ee(_);)_=o.input.charCodeAt(++o.position);u.push(o.input.slice(m,o.position))}_!==0&&le(o),x.call(Be,r)?Be[r](o,r,u):Me(o,'unknown document directive "'+r+'"')}if(re(o,!0,-1),o.lineIndent===0&&o.input.charCodeAt(o.position)===45&&o.input.charCodeAt(o.position+1)===45&&o.input.charCodeAt(o.position+2)===45?(o.position+=3,re(o,!0,-1)):c&&I(o,"directives end mark is expected"),vn(o,o.lineIndent-1,h,!1,!0),re(o,!0,-1),o.checkLineBreaks&&Y.test(o.input.slice(H,o.position))&&Me(o,"non-ASCII line breaks are interpreted as content"),o.documents.push(o.result),o.position===o.lineStart&&ve(o)){o.input.charCodeAt(o.position)===46&&(o.position+=3,re(o,!0,-1));return}if(o.position<o.length-1)I(o,"end of the stream or a document separator is expected");else return}function Zn(o,H){o=String(o),H=H||{},o.length!==0&&(o.charCodeAt(o.length-1)!==10&&o.charCodeAt(o.length-1)!==13&&(o+=`
`),o.charCodeAt(0)===65279&&(o=o.slice(1)));var m=new U(o,H),r=o.indexOf("\0");for(r!==-1&&(m.position=r,I(m,"null byte is not allowed in input")),m.input+="\0";m.input.charCodeAt(m.position)===32;)m.lineIndent+=1,m.position+=1;for(;m.position<m.length-1;)lt(m);return m.documents}function kn(o,H,m){H!==null&&typeof H=="object"&&typeof m>"u"&&(m=H,H=null);var r=Zn(o,m);if(typeof H!="function")return r;for(var u=0,c=r.length;u<c;u+=1)H(r[u])}function fn(o,H){var m=Zn(o,H);if(m.length!==0){if(m.length===1)return m[0];throw new d("expected a single document in the stream, but found more")}}function rt(o,H,m){return typeof H=="object"&&H!==null&&typeof m>"u"&&(m=H,H=null),kn(o,H,p.extend({schema:f},m))}function nn(o,H){return fn(o,p.extend({schema:f},H))}return loader.loadAll=kn,loader.load=fn,loader.safeLoadAll=rt,loader.safeLoad=nn,loader}var dumper={},hasRequiredDumper;function requireDumper(){if(hasRequiredDumper)return dumper;hasRequiredDumper=1;var p=requireCommon(),d=requireException(),S=requireDefault_full(),f=requireDefault_safe(),v=Object.prototype.toString,x=Object.prototype.hasOwnProperty,A=9,g=10,b=13,h=32,E=33,w=34,R=35,O=37,Y=38,J=39,$=42,ae=44,ce=45,oe=58,ge=61,ee=62,be=63,ie=64,xe=91,te=93,_e=96,me=123,fe=124,Ae=125,pe={};pe[0]="\\0",pe[7]="\\a",pe[8]="\\b",pe[9]="\\t",pe[10]="\\n",pe[11]="\\v",pe[12]="\\f",pe[13]="\\r",pe[27]="\\e",pe[34]='\\"',pe[92]="\\\\",pe[133]="\\N",pe[160]="\\_",pe[8232]="\\L",pe[8233]="\\P";var ke=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];function U(c,_){var C,M,q,V,j,W,X;if(_===null)return{};for(C={},M=Object.keys(_),q=0,V=M.length;q<V;q+=1)j=M[q],W=String(_[j]),j.slice(0,2)==="!!"&&(j="tag:yaml.org,2002:"+j.slice(2)),X=c.compiledTypeMap.fallback[j],X&&x.call(X.styleAliases,W)&&(W=X.styleAliases[W]),C[j]=W;return C}function ne(c){var _,C,M;if(_=c.toString(16).toUpperCase(),c<=255)C="x",M=2;else if(c<=65535)C="u",M=4;else if(c<=4294967295)C="U",M=8;else throw new d("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+C+p.repeat("0",M-_.length)+_}function I(c){this.schema=c.schema||S,this.indent=Math.max(1,c.indent||2),this.noArrayIndent=c.noArrayIndent||!1,this.skipInvalid=c.skipInvalid||!1,this.flowLevel=p.isNothing(c.flowLevel)?-1:c.flowLevel,this.styleMap=U(this.schema,c.styles||null),this.sortKeys=c.sortKeys||!1,this.lineWidth=c.lineWidth||80,this.noRefs=c.noRefs||!1,this.noCompatMode=c.noCompatMode||!1,this.condenseFlow=c.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Me(c,_){for(var C=p.repeat(" ",_),M=0,q=-1,V="",j,W=c.length;M<W;)q=c.indexOf(`
`,M),q===-1?(j=c.slice(M),M=W):(j=c.slice(M,q+1),M=q+1),j.length&&j!==`
`&&(V+=C),V+=j;return V}function Be(c,_){return`
`+p.repeat(" ",c.indent*_)}function k(c,_){var C,M,q;for(C=0,M=c.implicitTypes.length;C<M;C+=1)if(q=c.implicitTypes[C],q.resolve(_))return!0;return!1}function G(c){return c===h||c===A}function P(c){return 32<=c&&c<=126||161<=c&&c<=55295&&c!==8232&&c!==8233||57344<=c&&c<=65533&&c!==65279||65536<=c&&c<=1114111}function le(c){return P(c)&&!G(c)&&c!==65279&&c!==b&&c!==g}function re(c,_){return P(c)&&c!==65279&&c!==ae&&c!==xe&&c!==te&&c!==me&&c!==Ae&&c!==oe&&(c!==R||_&&le(_))}function ve(c){return P(c)&&c!==65279&&!G(c)&&c!==ce&&c!==be&&c!==oe&&c!==ae&&c!==xe&&c!==te&&c!==me&&c!==Ae&&c!==R&&c!==Y&&c!==$&&c!==E&&c!==fe&&c!==ge&&c!==ee&&c!==J&&c!==w&&c!==O&&c!==ie&&c!==_e}function we(c){var _=/^\n* /;return _.test(c)}var Qe=1,je=2,Mn=3,Kn=4,Tn=5;function yn(c,_,C,M,q){var V,j,W,X=!1,he=!1,Te=M!==-1,Se=-1,$e=ve(c.charCodeAt(0))&&!G(c.charCodeAt(c.length-1));if(_)for(V=0;V<c.length;V++){if(j=c.charCodeAt(V),!P(j))return Tn;W=V>0?c.charCodeAt(V-1):null,$e=$e&&re(j,W)}else{for(V=0;V<c.length;V++){if(j=c.charCodeAt(V),j===g)X=!0,Te&&(he=he||V-Se-1>M&&c[Se+1]!==" ",Se=V);else if(!P(j))return Tn;W=V>0?c.charCodeAt(V-1):null,$e=$e&&re(j,W)}he=he||Te&&V-Se-1>M&&c[Se+1]!==" "}return!X&&!he?$e&&!q(c)?Qe:je:C>9&&we(c)?Tn:he?Kn:Mn}function sn(c,_,C,M){c.dump=(function(){if(_.length===0)return"''";if(!c.noCompatMode&&ke.indexOf(_)!==-1)return"'"+_+"'";var q=c.indent*Math.max(1,C),V=c.lineWidth===-1?-1:Math.max(Math.min(c.lineWidth,40),c.lineWidth-q),j=M||c.flowLevel>-1&&C>=c.flowLevel;function W(X){return k(c,X)}switch(yn(_,j,c.indent,V,W)){case Qe:return _;case je:return"'"+_.replace(/'/g,"''")+"'";case Mn:return"|"+$n(_,c.indent)+Pn(Me(_,q));case Kn:return">"+$n(_,c.indent)+Pn(Me(at(_,V),q));case Tn:return'"'+lt(_)+'"';default:throw new d("impossible error: invalid scalar style")}})()}function $n(c,_){var C=we(c)?String(_):"",M=c[c.length-1]===`
`,q=M&&(c[c.length-2]===`
`||c===`
`),V=q?"+":M?"":"-";return C+V+`
`}function Pn(c){return c[c.length-1]===`
`?c.slice(0,-1):c}function at(c,_){for(var C=/(\n+)([^\n]*)/g,M=(function(){var he=c.indexOf(`
`);return he=he!==-1?he:c.length,C.lastIndex=he,vn(c.slice(0,he),_)})(),q=c[0]===`
`||c[0]===" ",V,j;j=C.exec(c);){var W=j[1],X=j[2];V=X[0]===" ",M+=W+(!q&&!V&&X!==""?`
`:"")+vn(X,_),q=V}return M}function vn(c,_){if(c===""||c[0]===" ")return c;for(var C=/ [^ ]/g,M,q=0,V,j=0,W=0,X="";M=C.exec(c);)W=M.index,W-q>_&&(V=j>q?j:W,X+=`
`+c.slice(q,V),q=V+1),j=W;return X+=`
`,c.length-q>_&&j>q?X+=c.slice(q,j)+`
`+c.slice(j+1):X+=c.slice(q),X.slice(1)}function lt(c){for(var _="",C,M,q,V=0;V<c.length;V++){if(C=c.charCodeAt(V),C>=55296&&C<=56319&&(M=c.charCodeAt(V+1),M>=56320&&M<=57343)){_+=ne((C-55296)*1024+M-56320+65536),V++;continue}q=pe[C],_+=!q&&P(C)?c[V]:q||ne(C)}return _}function Zn(c,_,C){var M="",q=c.tag,V,j;for(V=0,j=C.length;V<j;V+=1)o(c,_,C[V],!1,!1)&&(V!==0&&(M+=","+(c.condenseFlow?"":" ")),M+=c.dump);c.tag=q,c.dump="["+M+"]"}function kn(c,_,C,M){var q="",V=c.tag,j,W;for(j=0,W=C.length;j<W;j+=1)o(c,_+1,C[j],!0,!0)&&((!M||j!==0)&&(q+=Be(c,_)),c.dump&&g===c.dump.charCodeAt(0)?q+="-":q+="- ",q+=c.dump);c.tag=V,c.dump=q||"[]"}function fn(c,_,C){var M="",q=c.tag,V=Object.keys(C),j,W,X,he,Te;for(j=0,W=V.length;j<W;j+=1)Te="",j!==0&&(Te+=", "),c.condenseFlow&&(Te+='"'),X=V[j],he=C[X],o(c,_,X,!1,!1)&&(c.dump.length>1024&&(Te+="? "),Te+=c.dump+(c.condenseFlow?'"':"")+":"+(c.condenseFlow?"":" "),o(c,_,he,!1,!1)&&(Te+=c.dump,M+=Te));c.tag=q,c.dump="{"+M+"}"}function rt(c,_,C,M){var q="",V=c.tag,j=Object.keys(C),W,X,he,Te,Se,$e;if(c.sortKeys===!0)j.sort();else if(typeof c.sortKeys=="function")j.sort(c.sortKeys);else if(c.sortKeys)throw new d("sortKeys must be a boolean or a function");for(W=0,X=j.length;W<X;W+=1)$e="",(!M||W!==0)&&($e+=Be(c,_)),he=j[W],Te=C[he],o(c,_+1,he,!0,!0,!0)&&(Se=c.tag!==null&&c.tag!=="?"||c.dump&&c.dump.length>1024,Se&&(c.dump&&g===c.dump.charCodeAt(0)?$e+="?":$e+="? "),$e+=c.dump,Se&&($e+=Be(c,_)),o(c,_+1,Te,!0,Se)&&(c.dump&&g===c.dump.charCodeAt(0)?$e+=":":$e+=": ",$e+=c.dump,q+=$e));c.tag=V,c.dump=q||"{}"}function nn(c,_,C){var M,q,V,j,W,X;for(q=C?c.explicitTypes:c.implicitTypes,V=0,j=q.length;V<j;V+=1)if(W=q[V],(W.instanceOf||W.predicate)&&(!W.instanceOf||typeof _=="object"&&_ instanceof W.instanceOf)&&(!W.predicate||W.predicate(_))){if(c.tag=C?W.tag:"?",W.represent){if(X=c.styleMap[W.tag]||W.defaultStyle,v.call(W.represent)==="[object Function]")M=W.represent(_,X);else if(x.call(W.represent,X))M=W.represent[X](_,X);else throw new d("!<"+W.tag+'> tag resolver accepts not "'+X+'" style');c.dump=M}return!0}return!1}function o(c,_,C,M,q,V){c.tag=null,c.dump=C,nn(c,C,!1)||nn(c,C,!0);var j=v.call(c.dump);M&&(M=c.flowLevel<0||c.flowLevel>_);var W=j==="[object Object]"||j==="[object Array]",X,he;if(W&&(X=c.duplicates.indexOf(C),he=X!==-1),(c.tag!==null&&c.tag!=="?"||he||c.indent!==2&&_>0)&&(q=!1),he&&c.usedDuplicates[X])c.dump="*ref_"+X;else{if(W&&he&&!c.usedDuplicates[X]&&(c.usedDuplicates[X]=!0),j==="[object Object]")M&&Object.keys(c.dump).length!==0?(rt(c,_,c.dump,q),he&&(c.dump="&ref_"+X+c.dump)):(fn(c,_,c.dump),he&&(c.dump="&ref_"+X+" "+c.dump));else if(j==="[object Array]"){var Te=c.noArrayIndent&&_>0?_-1:_;M&&c.dump.length!==0?(kn(c,Te,c.dump,q),he&&(c.dump="&ref_"+X+c.dump)):(Zn(c,Te,c.dump),he&&(c.dump="&ref_"+X+" "+c.dump))}else if(j==="[object String]")c.tag!=="?"&&sn(c,c.dump,_,V);else{if(c.skipInvalid)return!1;throw new d("unacceptable kind of an object to dump "+j)}c.tag!==null&&c.tag!=="?"&&(c.dump="!<"+c.tag+"> "+c.dump)}return!0}function H(c,_){var C=[],M=[],q,V;for(m(c,C,M),q=0,V=M.length;q<V;q+=1)_.duplicates.push(C[M[q]]);_.usedDuplicates=new Array(V)}function m(c,_,C){var M,q,V;if(c!==null&&typeof c=="object")if(q=_.indexOf(c),q!==-1)C.indexOf(q)===-1&&C.push(q);else if(_.push(c),Array.isArray(c))for(q=0,V=c.length;q<V;q+=1)m(c[q],_,C);else for(M=Object.keys(c),q=0,V=M.length;q<V;q+=1)m(c[M[q]],_,C)}function r(c,_){_=_||{};var C=new I(_);return C.noRefs||H(c,C),o(C,0,c,!0,!0)?C.dump+`
`:""}function u(c,_){return r(c,p.extend({schema:f},_))}return dumper.dump=r,dumper.safeDump=u,dumper}var hasRequiredJsYaml$1;function requireJsYaml$1(){if(hasRequiredJsYaml$1)return jsYaml$1;hasRequiredJsYaml$1=1;var p=requireLoader(),d=requireDumper();function S(f){return function(){throw new Error("Function "+f+" is deprecated and cannot be used.")}}return jsYaml$1.Type=requireType(),jsYaml$1.Schema=requireSchema(),jsYaml$1.FAILSAFE_SCHEMA=requireFailsafe(),jsYaml$1.JSON_SCHEMA=requireJson(),jsYaml$1.CORE_SCHEMA=requireCore(),jsYaml$1.DEFAULT_SAFE_SCHEMA=requireDefault_safe(),jsYaml$1.DEFAULT_FULL_SCHEMA=requireDefault_full(),jsYaml$1.load=p.load,jsYaml$1.loadAll=p.loadAll,jsYaml$1.safeLoad=p.safeLoad,jsYaml$1.safeLoadAll=p.safeLoadAll,jsYaml$1.dump=d.dump,jsYaml$1.safeDump=d.safeDump,jsYaml$1.YAMLException=requireException(),jsYaml$1.MINIMAL_SCHEMA=requireFailsafe(),jsYaml$1.SAFE_SCHEMA=requireDefault_safe(),jsYaml$1.DEFAULT_SCHEMA=requireDefault_full(),jsYaml$1.scan=S("scan"),jsYaml$1.parse=S("parse"),jsYaml$1.compose=S("compose"),jsYaml$1.addConstructor=S("addConstructor"),jsYaml$1}var jsYaml,hasRequiredJsYaml;function requireJsYaml(){if(hasRequiredJsYaml)return jsYaml;hasRequiredJsYaml=1;var p=requireJsYaml$1();return jsYaml=p,jsYaml}var hasRequiredEngines;function requireEngines(){return hasRequiredEngines||(hasRequiredEngines=1,(function(module,exports$1){const yaml=requireJsYaml(),engines=module.exports;engines.yaml={parse:yaml.safeLoad.bind(yaml),stringify:yaml.safeDump.bind(yaml)},engines.json={parse:JSON.parse.bind(JSON),stringify:function(p,d){const S=Object.assign({replacer:null,space:2},d);return JSON.stringify(p,S.replacer,S.space)}},engines.javascript={parse:function parse(str,options,wrap){try{return wrap!==!1&&(str=`(function() {
return `+str.trim()+`;
}());`),eval(str)||{}}catch(p){if(wrap!==!1&&/(unexpected|identifier)/i.test(p.message))return parse(str,options,!1);throw new SyntaxError(p)}},stringify:function(){throw new Error("stringifying JavaScript is not supported")}}})(engines)),engines.exports}var utils={};var stripBomString,hasRequiredStripBomString;function requireStripBomString(){return hasRequiredStripBomString||(hasRequiredStripBomString=1,stripBomString=function(p){return typeof p=="string"&&p.charAt(0)==="\uFEFF"?p.slice(1):p}),stripBomString}var hasRequiredUtils;function requireUtils(){return hasRequiredUtils||(hasRequiredUtils=1,(function(p){const d=requireStripBomString(),S=requireKindOf();p.define=function(f,v,x){Reflect.defineProperty(f,v,{enumerable:!1,configurable:!0,writable:!0,value:x})},p.isBuffer=function(f){return S(f)==="buffer"},p.isObject=function(f){return S(f)==="object"},p.toBuffer=function(f){return typeof f=="string"?Buffer.from(f):f},p.toString=function(f){if(p.isBuffer(f))return d(String(f));if(typeof f!="string")throw new TypeError("expected input to be a string or buffer");return d(f)},p.arrayify=function(f){return f?Array.isArray(f)?f:[f]:[]},p.startsWith=function(f,v,x){return typeof x!="number"&&(x=v.length),f.slice(0,x)===v}})(utils)),utils}var defaults,hasRequiredDefaults;function requireDefaults(){if(hasRequiredDefaults)return defaults;hasRequiredDefaults=1;const p=requireEngines(),d=requireUtils();return defaults=function(S){const f=Object.assign({},S);return f.delimiters=d.arrayify(f.delims||f.delimiters||"---"),f.delimiters.length===1&&f.delimiters.push(f.delimiters[0]),f.language=(f.language||f.lang||"yaml").toLowerCase(),f.engines=Object.assign({},p,f.parsers,f.engines),f},defaults}var engine,hasRequiredEngine;function requireEngine(){if(hasRequiredEngine)return engine;hasRequiredEngine=1,engine=function(d,S){let f=S.engines[d]||S.engines[p(d)];if(typeof f>"u")throw new Error('gray-matter engine "'+d+'" is not registered');return typeof f=="function"&&(f={parse:f}),f};function p(d){switch(d.toLowerCase()){case"js":case"javascript":return"javascript";case"coffee":case"coffeescript":case"cson":return"coffee";case"yaml":case"yml":return"yaml";default:return d}}return engine}var stringify,hasRequiredStringify;function requireStringify(){if(hasRequiredStringify)return stringify;hasRequiredStringify=1;const p=requireKindOf(),d=requireEngine(),S=requireDefaults();stringify=function(v,x,A){if(x==null&&A==null)switch(p(v)){case"object":x=v.data,A={};break;case"string":return v;default:throw new TypeError("expected file to be a string or object")}const g=v.content,b=S(A);if(x==null){if(!b.data)return v;x=b.data}const h=v.language||b.language,E=d(h,b);if(typeof E.stringify!="function")throw new TypeError('expected "'+h+'.stringify" to be a function');x=Object.assign({},v.data,x);const w=b.delimiters[0],R=b.delimiters[1],O=E.stringify(x,A).trim();let Y="";return O!=="{}"&&(Y=f(w)+f(O)+f(R)),typeof v.excerpt=="string"&&v.excerpt!==""&&g.indexOf(v.excerpt.trim())===-1&&(Y+=f(v.excerpt)+f(R)),Y+f(g)};function f(v){return v.slice(-1)!==`
`?v+`
`:v}return stringify}var excerpt,hasRequiredExcerpt;function requireExcerpt(){if(hasRequiredExcerpt)return excerpt;hasRequiredExcerpt=1;const p=requireDefaults();return excerpt=function(d,S){const f=p(S);if(d.data==null&&(d.data={}),typeof f.excerpt=="function")return f.excerpt(d,f);const v=d.data.excerpt_separator||f.excerpt_separator;if(v==null&&(f.excerpt===!1||f.excerpt==null))return d;const x=typeof f.excerpt=="string"?f.excerpt:v||f.delimiters[0],A=d.content.indexOf(x);return A!==-1&&(d.excerpt=d.content.slice(0,A)),d},excerpt}var toFile,hasRequiredToFile;function requireToFile(){if(hasRequiredToFile)return toFile;hasRequiredToFile=1;const p=requireKindOf(),d=requireStringify(),S=requireUtils();return toFile=function(f){return p(f)!=="object"&&(f={content:f}),p(f.data)!=="object"&&(f.data={}),f.contents&&f.content==null&&(f.content=f.contents),S.define(f,"orig",S.toBuffer(f.content)),S.define(f,"language",f.language||""),S.define(f,"matter",f.matter||""),S.define(f,"stringify",function(v,x){return x&&x.language&&(f.language=x.language),d(f,v,x)}),f.content=S.toString(f.content),f.isEmpty=!1,f.excerpt="",f},toFile}var parse$1,hasRequiredParse;function requireParse(){if(hasRequiredParse)return parse$1;hasRequiredParse=1;const p=requireEngine(),d=requireDefaults();return parse$1=function(S,f,v){const x=d(v),A=p(S,x);if(typeof A.parse!="function")throw new TypeError('expected "'+S+'.parse" to be a function');return A.parse(f,x)},parse$1}var grayMatter,hasRequiredGrayMatter;function requireGrayMatter(){if(hasRequiredGrayMatter)return grayMatter;hasRequiredGrayMatter=1;const p=require$$0,d=requireSectionMatter(),S=requireDefaults(),f=requireStringify(),v=requireExcerpt(),x=requireEngines(),A=requireToFile(),g=requireParse(),b=requireUtils();function h(w,R){if(w==="")return{data:{},content:w,excerpt:"",orig:w};let O=A(w);const Y=h.cache[O.content];if(!R){if(Y)return O=Object.assign({},Y),O.orig=Y.orig,O;h.cache[O.content]=O}return E(O,R)}function E(w,R){const O=S(R),Y=O.delimiters[0],J=`
`+O.delimiters[1];let $=w.content;O.language&&(w.language=O.language);const ae=Y.length;if(!b.startsWith($,Y,ae))return v(w,O),w;if($.charAt(ae)===Y.slice(-1))return w;$=$.slice(ae);const ce=$.length,oe=h.language($,O);oe.name&&(w.language=oe.name,$=$.slice(oe.raw.length));let ge=$.indexOf(J);return ge===-1&&(ge=ce),w.matter=$.slice(0,ge),w.matter.replace(/^\s*#[^\n]+/gm,"").trim()===""?(w.isEmpty=!0,w.empty=w.content,w.data={}):w.data=g(w.language,w.matter,O),ge===ce?w.content="":(w.content=$.slice(ge+J.length),w.content[0]==="\r"&&(w.content=w.content.slice(1)),w.content[0]===`
`&&(w.content=w.content.slice(1))),v(w,O),(O.sections===!0||typeof O.section=="function")&&d(w,O.section),w}return h.engines=x,h.stringify=function(w,R,O){return typeof w=="string"&&(w=h(w,O)),f(w,R,O)},h.read=function(w,R){const O=p.readFileSync(w,"utf8"),Y=h(O,R);return Y.path=w,Y},h.test=function(w,R){return b.startsWith(w,S(R).delimiters[0])},h.language=function(w,R){const Y=S(R).delimiters[0];h.test(w)&&(w=w.slice(Y.length));const J=w.slice(0,w.search(/\r?\n/));return{raw:J,name:J?J.trim():""}},h.cache={},h.clearCache=function(){h.cache={}},grayMatter=h,grayMatter}var grayMatterExports=requireGrayMatter();const matter=getDefaultExportFromCjs(grayMatterExports);var buffer={},base64Js={},hasRequiredBase64Js;function requireBase64Js(){if(hasRequiredBase64Js)return base64Js;hasRequiredBase64Js=1,base64Js.byteLength=g,base64Js.toByteArray=h,base64Js.fromByteArray=R;for(var p=[],d=[],S=typeof Uint8Array<"u"?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",v=0,x=f.length;v<x;++v)p[v]=f[v],d[f.charCodeAt(v)]=v;d[45]=62,d[95]=63;function A(O){var Y=O.length;if(Y%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var J=O.indexOf("=");J===-1&&(J=Y);var $=J===Y?0:4-J%4;return[J,$]}function g(O){var Y=A(O),J=Y[0],$=Y[1];return(J+$)*3/4-$}function b(O,Y,J){return(Y+J)*3/4-J}function h(O){var Y,J=A(O),$=J[0],ae=J[1],ce=new S(b(O,$,ae)),oe=0,ge=ae>0?$-4:$,ee;for(ee=0;ee<ge;ee+=4)Y=d[O.charCodeAt(ee)]<<18|d[O.charCodeAt(ee+1)]<<12|d[O.charCodeAt(ee+2)]<<6|d[O.charCodeAt(ee+3)],ce[oe++]=Y>>16&255,ce[oe++]=Y>>8&255,ce[oe++]=Y&255;return ae===2&&(Y=d[O.charCodeAt(ee)]<<2|d[O.charCodeAt(ee+1)]>>4,ce[oe++]=Y&255),ae===1&&(Y=d[O.charCodeAt(ee)]<<10|d[O.charCodeAt(ee+1)]<<4|d[O.charCodeAt(ee+2)]>>2,ce[oe++]=Y>>8&255,ce[oe++]=Y&255),ce}function E(O){return p[O>>18&63]+p[O>>12&63]+p[O>>6&63]+p[O&63]}function w(O,Y,J){for(var $,ae=[],ce=Y;ce<J;ce+=3)$=(O[ce]<<16&16711680)+(O[ce+1]<<8&65280)+(O[ce+2]&255),ae.push(E($));return ae.join("")}function R(O){for(var Y,J=O.length,$=J%3,ae=[],ce=16383,oe=0,ge=J-$;oe<ge;oe+=ce)ae.push(w(O,oe,oe+ce>ge?ge:oe+ce));return $===1?(Y=O[J-1],ae.push(p[Y>>2]+p[Y<<4&63]+"==")):$===2&&(Y=(O[J-2]<<8)+O[J-1],ae.push(p[Y>>10]+p[Y>>4&63]+p[Y<<2&63]+"=")),ae.join("")}return base64Js}var ieee754={};var hasRequiredIeee754;function requireIeee754(){return hasRequiredIeee754||(hasRequiredIeee754=1,ieee754.read=function(p,d,S,f,v){var x,A,g=v*8-f-1,b=(1<<g)-1,h=b>>1,E=-7,w=S?v-1:0,R=S?-1:1,O=p[d+w];for(w+=R,x=O&(1<<-E)-1,O>>=-E,E+=g;E>0;x=x*256+p[d+w],w+=R,E-=8);for(A=x&(1<<-E)-1,x>>=-E,E+=f;E>0;A=A*256+p[d+w],w+=R,E-=8);if(x===0)x=1-h;else{if(x===b)return A?NaN:(O?-1:1)*(1/0);A=A+Math.pow(2,f),x=x-h}return(O?-1:1)*A*Math.pow(2,x-f)},ieee754.write=function(p,d,S,f,v,x){var A,g,b,h=x*8-v-1,E=(1<<h)-1,w=E>>1,R=v===23?Math.pow(2,-24)-Math.pow(2,-77):0,O=f?0:x-1,Y=f?1:-1,J=d<0||d===0&&1/d<0?1:0;for(d=Math.abs(d),isNaN(d)||d===1/0?(g=isNaN(d)?1:0,A=E):(A=Math.floor(Math.log(d)/Math.LN2),d*(b=Math.pow(2,-A))<1&&(A--,b*=2),A+w>=1?d+=R/b:d+=R*Math.pow(2,1-w),d*b>=2&&(A++,b/=2),A+w>=E?(g=0,A=E):A+w>=1?(g=(d*b-1)*Math.pow(2,v),A=A+w):(g=d*Math.pow(2,w-1)*Math.pow(2,v),A=0));v>=8;p[S+O]=g&255,O+=Y,g/=256,v-=8);for(A=A<<v|g,h+=v;h>0;p[S+O]=A&255,O+=Y,A/=256,h-=8);p[S+O-Y]|=J*128}),ieee754}var hasRequiredBuffer;function requireBuffer(){return hasRequiredBuffer||(hasRequiredBuffer=1,(function(p){const d=requireBase64Js(),S=requireIeee754(),f=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;p.Buffer=g,p.SlowBuffer=ce,p.INSPECT_MAX_BYTES=50;const v=2147483647;p.kMaxLength=v,g.TYPED_ARRAY_SUPPORT=x(),!g.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function x(){try{const m=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(m,r),m.foo()===42}catch{return!1}}Object.defineProperty(g.prototype,"parent",{enumerable:!0,get:function(){if(g.isBuffer(this))return this.buffer}}),Object.defineProperty(g.prototype,"offset",{enumerable:!0,get:function(){if(g.isBuffer(this))return this.byteOffset}});function A(m){if(m>v)throw new RangeError('The value "'+m+'" is invalid for option "size"');const r=new Uint8Array(m);return Object.setPrototypeOf(r,g.prototype),r}function g(m,r,u){if(typeof m=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(m)}return b(m,r,u)}g.poolSize=8192;function b(m,r,u){if(typeof m=="string")return R(m,r);if(ArrayBuffer.isView(m))return Y(m);if(m==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof m);if(fn(m,ArrayBuffer)||m&&fn(m.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(fn(m,SharedArrayBuffer)||m&&fn(m.buffer,SharedArrayBuffer)))return J(m,r,u);if(typeof m=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const c=m.valueOf&&m.valueOf();if(c!=null&&c!==m)return g.from(c,r,u);const _=$(m);if(_)return _;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof m[Symbol.toPrimitive]=="function")return g.from(m[Symbol.toPrimitive]("string"),r,u);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof m)}g.from=function(m,r,u){return b(m,r,u)},Object.setPrototypeOf(g.prototype,Uint8Array.prototype),Object.setPrototypeOf(g,Uint8Array);function h(m){if(typeof m!="number")throw new TypeError('"size" argument must be of type number');if(m<0)throw new RangeError('The value "'+m+'" is invalid for option "size"')}function E(m,r,u){return h(m),m<=0?A(m):r!==void 0?typeof u=="string"?A(m).fill(r,u):A(m).fill(r):A(m)}g.alloc=function(m,r,u){return E(m,r,u)};function w(m){return h(m),A(m<0?0:ae(m)|0)}g.allocUnsafe=function(m){return w(m)},g.allocUnsafeSlow=function(m){return w(m)};function R(m,r){if((typeof r!="string"||r==="")&&(r="utf8"),!g.isEncoding(r))throw new TypeError("Unknown encoding: "+r);const u=oe(m,r)|0;let c=A(u);const _=c.write(m,r);return _!==u&&(c=c.slice(0,_)),c}function O(m){const r=m.length<0?0:ae(m.length)|0,u=A(r);for(let c=0;c<r;c+=1)u[c]=m[c]&255;return u}function Y(m){if(fn(m,Uint8Array)){const r=new Uint8Array(m);return J(r.buffer,r.byteOffset,r.byteLength)}return O(m)}function J(m,r,u){if(r<0||m.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(m.byteLength<r+(u||0))throw new RangeError('"length" is outside of buffer bounds');let c;return r===void 0&&u===void 0?c=new Uint8Array(m):u===void 0?c=new Uint8Array(m,r):c=new Uint8Array(m,r,u),Object.setPrototypeOf(c,g.prototype),c}function $(m){if(g.isBuffer(m)){const r=ae(m.length)|0,u=A(r);return u.length===0||m.copy(u,0,0,r),u}if(m.length!==void 0)return typeof m.length!="number"||rt(m.length)?A(0):O(m);if(m.type==="Buffer"&&Array.isArray(m.data))return O(m.data)}function ae(m){if(m>=v)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+v.toString(16)+" bytes");return m|0}function ce(m){return+m!=m&&(m=0),g.alloc(+m)}g.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==g.prototype},g.compare=function(r,u){if(fn(r,Uint8Array)&&(r=g.from(r,r.offset,r.byteLength)),fn(u,Uint8Array)&&(u=g.from(u,u.offset,u.byteLength)),!g.isBuffer(r)||!g.isBuffer(u))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===u)return 0;let c=r.length,_=u.length;for(let C=0,M=Math.min(c,_);C<M;++C)if(r[C]!==u[C]){c=r[C],_=u[C];break}return c<_?-1:_<c?1:0},g.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},g.concat=function(r,u){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return g.alloc(0);let c;if(u===void 0)for(u=0,c=0;c<r.length;++c)u+=r[c].length;const _=g.allocUnsafe(u);let C=0;for(c=0;c<r.length;++c){let M=r[c];if(fn(M,Uint8Array))C+M.length>_.length?(g.isBuffer(M)||(M=g.from(M)),M.copy(_,C)):Uint8Array.prototype.set.call(_,M,C);else if(g.isBuffer(M))M.copy(_,C);else throw new TypeError('"list" argument must be an Array of Buffers');C+=M.length}return _};function oe(m,r){if(g.isBuffer(m))return m.length;if(ArrayBuffer.isView(m)||fn(m,ArrayBuffer))return m.byteLength;if(typeof m!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof m);const u=m.length,c=arguments.length>2&&arguments[2]===!0;if(!c&&u===0)return 0;let _=!1;for(;;)switch(r){case"ascii":case"latin1":case"binary":return u;case"utf8":case"utf-8":return at(m).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u*2;case"hex":return u>>>1;case"base64":return Zn(m).length;default:if(_)return c?-1:at(m).length;r=(""+r).toLowerCase(),_=!0}}g.byteLength=oe;function ge(m,r,u){let c=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((u===void 0||u>this.length)&&(u=this.length),u<=0)||(u>>>=0,r>>>=0,u<=r))return"";for(m||(m="utf8");;)switch(m){case"hex":return Me(this,r,u);case"utf8":case"utf-8":return pe(this,r,u);case"ascii":return ne(this,r,u);case"latin1":case"binary":return I(this,r,u);case"base64":return Ae(this,r,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Be(this,r,u);default:if(c)throw new TypeError("Unknown encoding: "+m);m=(m+"").toLowerCase(),c=!0}}g.prototype._isBuffer=!0;function ee(m,r,u){const c=m[r];m[r]=m[u],m[u]=c}g.prototype.swap16=function(){const r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let u=0;u<r;u+=2)ee(this,u,u+1);return this},g.prototype.swap32=function(){const r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let u=0;u<r;u+=4)ee(this,u,u+3),ee(this,u+1,u+2);return this},g.prototype.swap64=function(){const r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let u=0;u<r;u+=8)ee(this,u,u+7),ee(this,u+1,u+6),ee(this,u+2,u+5),ee(this,u+3,u+4);return this},g.prototype.toString=function(){const r=this.length;return r===0?"":arguments.length===0?pe(this,0,r):ge.apply(this,arguments)},g.prototype.toLocaleString=g.prototype.toString,g.prototype.equals=function(r){if(!g.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:g.compare(this,r)===0},g.prototype.inspect=function(){let r="";const u=p.INSPECT_MAX_BYTES;return r=this.toString("hex",0,u).replace(/(.{2})/g,"$1 ").trim(),this.length>u&&(r+=" ... "),"<Buffer "+r+">"},f&&(g.prototype[f]=g.prototype.inspect),g.prototype.compare=function(r,u,c,_,C){if(fn(r,Uint8Array)&&(r=g.from(r,r.offset,r.byteLength)),!g.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(u===void 0&&(u=0),c===void 0&&(c=r?r.length:0),_===void 0&&(_=0),C===void 0&&(C=this.length),u<0||c>r.length||_<0||C>this.length)throw new RangeError("out of range index");if(_>=C&&u>=c)return 0;if(_>=C)return-1;if(u>=c)return 1;if(u>>>=0,c>>>=0,_>>>=0,C>>>=0,this===r)return 0;let M=C-_,q=c-u;const V=Math.min(M,q),j=this.slice(_,C),W=r.slice(u,c);for(let X=0;X<V;++X)if(j[X]!==W[X]){M=j[X],q=W[X];break}return M<q?-1:q<M?1:0};function be(m,r,u,c,_){if(m.length===0)return-1;if(typeof u=="string"?(c=u,u=0):u>2147483647?u=2147483647:u<-2147483648&&(u=-2147483648),u=+u,rt(u)&&(u=_?0:m.length-1),u<0&&(u=m.length+u),u>=m.length){if(_)return-1;u=m.length-1}else if(u<0)if(_)u=0;else return-1;if(typeof r=="string"&&(r=g.from(r,c)),g.isBuffer(r))return r.length===0?-1:ie(m,r,u,c,_);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?_?Uint8Array.prototype.indexOf.call(m,r,u):Uint8Array.prototype.lastIndexOf.call(m,r,u):ie(m,[r],u,c,_);throw new TypeError("val must be string, number or Buffer")}function ie(m,r,u,c,_){let C=1,M=m.length,q=r.length;if(c!==void 0&&(c=String(c).toLowerCase(),c==="ucs2"||c==="ucs-2"||c==="utf16le"||c==="utf-16le")){if(m.length<2||r.length<2)return-1;C=2,M/=2,q/=2,u/=2}function V(W,X){return C===1?W[X]:W.readUInt16BE(X*C)}let j;if(_){let W=-1;for(j=u;j<M;j++)if(V(m,j)===V(r,W===-1?0:j-W)){if(W===-1&&(W=j),j-W+1===q)return W*C}else W!==-1&&(j-=j-W),W=-1}else for(u+q>M&&(u=M-q),j=u;j>=0;j--){let W=!0;for(let X=0;X<q;X++)if(V(m,j+X)!==V(r,X)){W=!1;break}if(W)return j}return-1}g.prototype.includes=function(r,u,c){return this.indexOf(r,u,c)!==-1},g.prototype.indexOf=function(r,u,c){return be(this,r,u,c,!0)},g.prototype.lastIndexOf=function(r,u,c){return be(this,r,u,c,!1)};function xe(m,r,u,c){u=Number(u)||0;const _=m.length-u;c?(c=Number(c),c>_&&(c=_)):c=_;const C=r.length;c>C/2&&(c=C/2);let M;for(M=0;M<c;++M){const q=parseInt(r.substr(M*2,2),16);if(rt(q))return M;m[u+M]=q}return M}function te(m,r,u,c){return kn(at(r,m.length-u),m,u,c)}function _e(m,r,u,c){return kn(vn(r),m,u,c)}function me(m,r,u,c){return kn(Zn(r),m,u,c)}function fe(m,r,u,c){return kn(lt(r,m.length-u),m,u,c)}g.prototype.write=function(r,u,c,_){if(u===void 0)_="utf8",c=this.length,u=0;else if(c===void 0&&typeof u=="string")_=u,c=this.length,u=0;else if(isFinite(u))u=u>>>0,isFinite(c)?(c=c>>>0,_===void 0&&(_="utf8")):(_=c,c=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const C=this.length-u;if((c===void 0||c>C)&&(c=C),r.length>0&&(c<0||u<0)||u>this.length)throw new RangeError("Attempt to write outside buffer bounds");_||(_="utf8");let M=!1;for(;;)switch(_){case"hex":return xe(this,r,u,c);case"utf8":case"utf-8":return te(this,r,u,c);case"ascii":case"latin1":case"binary":return _e(this,r,u,c);case"base64":return me(this,r,u,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return fe(this,r,u,c);default:if(M)throw new TypeError("Unknown encoding: "+_);_=(""+_).toLowerCase(),M=!0}},g.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ae(m,r,u){return r===0&&u===m.length?d.fromByteArray(m):d.fromByteArray(m.slice(r,u))}function pe(m,r,u){u=Math.min(m.length,u);const c=[];let _=r;for(;_<u;){const C=m[_];let M=null,q=C>239?4:C>223?3:C>191?2:1;if(_+q<=u){let V,j,W,X;switch(q){case 1:C<128&&(M=C);break;case 2:V=m[_+1],(V&192)===128&&(X=(C&31)<<6|V&63,X>127&&(M=X));break;case 3:V=m[_+1],j=m[_+2],(V&192)===128&&(j&192)===128&&(X=(C&15)<<12|(V&63)<<6|j&63,X>2047&&(X<55296||X>57343)&&(M=X));break;case 4:V=m[_+1],j=m[_+2],W=m[_+3],(V&192)===128&&(j&192)===128&&(W&192)===128&&(X=(C&15)<<18|(V&63)<<12|(j&63)<<6|W&63,X>65535&&X<1114112&&(M=X))}}M===null?(M=65533,q=1):M>65535&&(M-=65536,c.push(M>>>10&1023|55296),M=56320|M&1023),c.push(M),_+=q}return U(c)}const ke=4096;function U(m){const r=m.length;if(r<=ke)return String.fromCharCode.apply(String,m);let u="",c=0;for(;c<r;)u+=String.fromCharCode.apply(String,m.slice(c,c+=ke));return u}function ne(m,r,u){let c="";u=Math.min(m.length,u);for(let _=r;_<u;++_)c+=String.fromCharCode(m[_]&127);return c}function I(m,r,u){let c="";u=Math.min(m.length,u);for(let _=r;_<u;++_)c+=String.fromCharCode(m[_]);return c}function Me(m,r,u){const c=m.length;(!r||r<0)&&(r=0),(!u||u<0||u>c)&&(u=c);let _="";for(let C=r;C<u;++C)_+=nn[m[C]];return _}function Be(m,r,u){const c=m.slice(r,u);let _="";for(let C=0;C<c.length-1;C+=2)_+=String.fromCharCode(c[C]+c[C+1]*256);return _}g.prototype.slice=function(r,u){const c=this.length;r=~~r,u=u===void 0?c:~~u,r<0?(r+=c,r<0&&(r=0)):r>c&&(r=c),u<0?(u+=c,u<0&&(u=0)):u>c&&(u=c),u<r&&(u=r);const _=this.subarray(r,u);return Object.setPrototypeOf(_,g.prototype),_};function k(m,r,u){if(m%1!==0||m<0)throw new RangeError("offset is not uint");if(m+r>u)throw new RangeError("Trying to access beyond buffer length")}g.prototype.readUintLE=g.prototype.readUIntLE=function(r,u,c){r=r>>>0,u=u>>>0,c||k(r,u,this.length);let _=this[r],C=1,M=0;for(;++M<u&&(C*=256);)_+=this[r+M]*C;return _},g.prototype.readUintBE=g.prototype.readUIntBE=function(r,u,c){r=r>>>0,u=u>>>0,c||k(r,u,this.length);let _=this[r+--u],C=1;for(;u>0&&(C*=256);)_+=this[r+--u]*C;return _},g.prototype.readUint8=g.prototype.readUInt8=function(r,u){return r=r>>>0,u||k(r,1,this.length),this[r]},g.prototype.readUint16LE=g.prototype.readUInt16LE=function(r,u){return r=r>>>0,u||k(r,2,this.length),this[r]|this[r+1]<<8},g.prototype.readUint16BE=g.prototype.readUInt16BE=function(r,u){return r=r>>>0,u||k(r,2,this.length),this[r]<<8|this[r+1]},g.prototype.readUint32LE=g.prototype.readUInt32LE=function(r,u){return r=r>>>0,u||k(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216},g.prototype.readUint32BE=g.prototype.readUInt32BE=function(r,u){return r=r>>>0,u||k(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])},g.prototype.readBigUInt64LE=o(function(r){r=r>>>0,yn(r,"offset");const u=this[r],c=this[r+7];(u===void 0||c===void 0)&&sn(r,this.length-8);const _=u+this[++r]*2**8+this[++r]*2**16+this[++r]*2**24,C=this[++r]+this[++r]*2**8+this[++r]*2**16+c*2**24;return BigInt(_)+(BigInt(C)<<BigInt(32))}),g.prototype.readBigUInt64BE=o(function(r){r=r>>>0,yn(r,"offset");const u=this[r],c=this[r+7];(u===void 0||c===void 0)&&sn(r,this.length-8);const _=u*2**24+this[++r]*2**16+this[++r]*2**8+this[++r],C=this[++r]*2**24+this[++r]*2**16+this[++r]*2**8+c;return(BigInt(_)<<BigInt(32))+BigInt(C)}),g.prototype.readIntLE=function(r,u,c){r=r>>>0,u=u>>>0,c||k(r,u,this.length);let _=this[r],C=1,M=0;for(;++M<u&&(C*=256);)_+=this[r+M]*C;return C*=128,_>=C&&(_-=Math.pow(2,8*u)),_},g.prototype.readIntBE=function(r,u,c){r=r>>>0,u=u>>>0,c||k(r,u,this.length);let _=u,C=1,M=this[r+--_];for(;_>0&&(C*=256);)M+=this[r+--_]*C;return C*=128,M>=C&&(M-=Math.pow(2,8*u)),M},g.prototype.readInt8=function(r,u){return r=r>>>0,u||k(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]},g.prototype.readInt16LE=function(r,u){r=r>>>0,u||k(r,2,this.length);const c=this[r]|this[r+1]<<8;return c&32768?c|4294901760:c},g.prototype.readInt16BE=function(r,u){r=r>>>0,u||k(r,2,this.length);const c=this[r+1]|this[r]<<8;return c&32768?c|4294901760:c},g.prototype.readInt32LE=function(r,u){return r=r>>>0,u||k(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24},g.prototype.readInt32BE=function(r,u){return r=r>>>0,u||k(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]},g.prototype.readBigInt64LE=o(function(r){r=r>>>0,yn(r,"offset");const u=this[r],c=this[r+7];(u===void 0||c===void 0)&&sn(r,this.length-8);const _=this[r+4]+this[r+5]*2**8+this[r+6]*2**16+(c<<24);return(BigInt(_)<<BigInt(32))+BigInt(u+this[++r]*2**8+this[++r]*2**16+this[++r]*2**24)}),g.prototype.readBigInt64BE=o(function(r){r=r>>>0,yn(r,"offset");const u=this[r],c=this[r+7];(u===void 0||c===void 0)&&sn(r,this.length-8);const _=(u<<24)+this[++r]*2**16+this[++r]*2**8+this[++r];return(BigInt(_)<<BigInt(32))+BigInt(this[++r]*2**24+this[++r]*2**16+this[++r]*2**8+c)}),g.prototype.readFloatLE=function(r,u){return r=r>>>0,u||k(r,4,this.length),S.read(this,r,!0,23,4)},g.prototype.readFloatBE=function(r,u){return r=r>>>0,u||k(r,4,this.length),S.read(this,r,!1,23,4)},g.prototype.readDoubleLE=function(r,u){return r=r>>>0,u||k(r,8,this.length),S.read(this,r,!0,52,8)},g.prototype.readDoubleBE=function(r,u){return r=r>>>0,u||k(r,8,this.length),S.read(this,r,!1,52,8)};function G(m,r,u,c,_,C){if(!g.isBuffer(m))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>_||r<C)throw new RangeError('"value" argument is out of bounds');if(u+c>m.length)throw new RangeError("Index out of range")}g.prototype.writeUintLE=g.prototype.writeUIntLE=function(r,u,c,_){if(r=+r,u=u>>>0,c=c>>>0,!_){const q=Math.pow(2,8*c)-1;G(this,r,u,c,q,0)}let C=1,M=0;for(this[u]=r&255;++M<c&&(C*=256);)this[u+M]=r/C&255;return u+c},g.prototype.writeUintBE=g.prototype.writeUIntBE=function(r,u,c,_){if(r=+r,u=u>>>0,c=c>>>0,!_){const q=Math.pow(2,8*c)-1;G(this,r,u,c,q,0)}let C=c-1,M=1;for(this[u+C]=r&255;--C>=0&&(M*=256);)this[u+C]=r/M&255;return u+c},g.prototype.writeUint8=g.prototype.writeUInt8=function(r,u,c){return r=+r,u=u>>>0,c||G(this,r,u,1,255,0),this[u]=r&255,u+1},g.prototype.writeUint16LE=g.prototype.writeUInt16LE=function(r,u,c){return r=+r,u=u>>>0,c||G(this,r,u,2,65535,0),this[u]=r&255,this[u+1]=r>>>8,u+2},g.prototype.writeUint16BE=g.prototype.writeUInt16BE=function(r,u,c){return r=+r,u=u>>>0,c||G(this,r,u,2,65535,0),this[u]=r>>>8,this[u+1]=r&255,u+2},g.prototype.writeUint32LE=g.prototype.writeUInt32LE=function(r,u,c){return r=+r,u=u>>>0,c||G(this,r,u,4,4294967295,0),this[u+3]=r>>>24,this[u+2]=r>>>16,this[u+1]=r>>>8,this[u]=r&255,u+4},g.prototype.writeUint32BE=g.prototype.writeUInt32BE=function(r,u,c){return r=+r,u=u>>>0,c||G(this,r,u,4,4294967295,0),this[u]=r>>>24,this[u+1]=r>>>16,this[u+2]=r>>>8,this[u+3]=r&255,u+4};function P(m,r,u,c,_){Tn(r,c,_,m,u,7);let C=Number(r&BigInt(4294967295));m[u++]=C,C=C>>8,m[u++]=C,C=C>>8,m[u++]=C,C=C>>8,m[u++]=C;let M=Number(r>>BigInt(32)&BigInt(4294967295));return m[u++]=M,M=M>>8,m[u++]=M,M=M>>8,m[u++]=M,M=M>>8,m[u++]=M,u}function le(m,r,u,c,_){Tn(r,c,_,m,u,7);let C=Number(r&BigInt(4294967295));m[u+7]=C,C=C>>8,m[u+6]=C,C=C>>8,m[u+5]=C,C=C>>8,m[u+4]=C;let M=Number(r>>BigInt(32)&BigInt(4294967295));return m[u+3]=M,M=M>>8,m[u+2]=M,M=M>>8,m[u+1]=M,M=M>>8,m[u]=M,u+8}g.prototype.writeBigUInt64LE=o(function(r,u=0){return P(this,r,u,BigInt(0),BigInt("0xffffffffffffffff"))}),g.prototype.writeBigUInt64BE=o(function(r,u=0){return le(this,r,u,BigInt(0),BigInt("0xffffffffffffffff"))}),g.prototype.writeIntLE=function(r,u,c,_){if(r=+r,u=u>>>0,!_){const V=Math.pow(2,8*c-1);G(this,r,u,c,V-1,-V)}let C=0,M=1,q=0;for(this[u]=r&255;++C<c&&(M*=256);)r<0&&q===0&&this[u+C-1]!==0&&(q=1),this[u+C]=(r/M>>0)-q&255;return u+c},g.prototype.writeIntBE=function(r,u,c,_){if(r=+r,u=u>>>0,!_){const V=Math.pow(2,8*c-1);G(this,r,u,c,V-1,-V)}let C=c-1,M=1,q=0;for(this[u+C]=r&255;--C>=0&&(M*=256);)r<0&&q===0&&this[u+C+1]!==0&&(q=1),this[u+C]=(r/M>>0)-q&255;return u+c},g.prototype.writeInt8=function(r,u,c){return r=+r,u=u>>>0,c||G(this,r,u,1,127,-128),r<0&&(r=255+r+1),this[u]=r&255,u+1},g.prototype.writeInt16LE=function(r,u,c){return r=+r,u=u>>>0,c||G(this,r,u,2,32767,-32768),this[u]=r&255,this[u+1]=r>>>8,u+2},g.prototype.writeInt16BE=function(r,u,c){return r=+r,u=u>>>0,c||G(this,r,u,2,32767,-32768),this[u]=r>>>8,this[u+1]=r&255,u+2},g.prototype.writeInt32LE=function(r,u,c){return r=+r,u=u>>>0,c||G(this,r,u,4,2147483647,-2147483648),this[u]=r&255,this[u+1]=r>>>8,this[u+2]=r>>>16,this[u+3]=r>>>24,u+4},g.prototype.writeInt32BE=function(r,u,c){return r=+r,u=u>>>0,c||G(this,r,u,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[u]=r>>>24,this[u+1]=r>>>16,this[u+2]=r>>>8,this[u+3]=r&255,u+4},g.prototype.writeBigInt64LE=o(function(r,u=0){return P(this,r,u,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),g.prototype.writeBigInt64BE=o(function(r,u=0){return le(this,r,u,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function re(m,r,u,c,_,C){if(u+c>m.length)throw new RangeError("Index out of range");if(u<0)throw new RangeError("Index out of range")}function ve(m,r,u,c,_){return r=+r,u=u>>>0,_||re(m,r,u,4),S.write(m,r,u,c,23,4),u+4}g.prototype.writeFloatLE=function(r,u,c){return ve(this,r,u,!0,c)},g.prototype.writeFloatBE=function(r,u,c){return ve(this,r,u,!1,c)};function we(m,r,u,c,_){return r=+r,u=u>>>0,_||re(m,r,u,8),S.write(m,r,u,c,52,8),u+8}g.prototype.writeDoubleLE=function(r,u,c){return we(this,r,u,!0,c)},g.prototype.writeDoubleBE=function(r,u,c){return we(this,r,u,!1,c)},g.prototype.copy=function(r,u,c,_){if(!g.isBuffer(r))throw new TypeError("argument should be a Buffer");if(c||(c=0),!_&&_!==0&&(_=this.length),u>=r.length&&(u=r.length),u||(u=0),_>0&&_<c&&(_=c),_===c||r.length===0||this.length===0)return 0;if(u<0)throw new RangeError("targetStart out of bounds");if(c<0||c>=this.length)throw new RangeError("Index out of range");if(_<0)throw new RangeError("sourceEnd out of bounds");_>this.length&&(_=this.length),r.length-u<_-c&&(_=r.length-u+c);const C=_-c;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(u,c,_):Uint8Array.prototype.set.call(r,this.subarray(c,_),u),C},g.prototype.fill=function(r,u,c,_){if(typeof r=="string"){if(typeof u=="string"?(_=u,u=0,c=this.length):typeof c=="string"&&(_=c,c=this.length),_!==void 0&&typeof _!="string")throw new TypeError("encoding must be a string");if(typeof _=="string"&&!g.isEncoding(_))throw new TypeError("Unknown encoding: "+_);if(r.length===1){const M=r.charCodeAt(0);(_==="utf8"&&M<128||_==="latin1")&&(r=M)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(u<0||this.length<u||this.length<c)throw new RangeError("Out of range index");if(c<=u)return this;u=u>>>0,c=c===void 0?this.length:c>>>0,r||(r=0);let C;if(typeof r=="number")for(C=u;C<c;++C)this[C]=r;else{const M=g.isBuffer(r)?r:g.from(r,_),q=M.length;if(q===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(C=0;C<c-u;++C)this[C+u]=M[C%q]}return this};const Qe={};function je(m,r,u){Qe[m]=class extends u{constructor(){super(),Object.defineProperty(this,"message",{value:r.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${m}]`,this.stack,delete this.name}get code(){return m}set code(_){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:_,writable:!0})}toString(){return`${this.name} [${m}]: ${this.message}`}}}je("ERR_BUFFER_OUT_OF_BOUNDS",function(m){return m?`${m} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),je("ERR_INVALID_ARG_TYPE",function(m,r){return`The "${m}" argument must be of type number. Received type ${typeof r}`},TypeError),je("ERR_OUT_OF_RANGE",function(m,r,u){let c=`The value of "${m}" is out of range.`,_=u;return Number.isInteger(u)&&Math.abs(u)>2**32?_=Mn(String(u)):typeof u=="bigint"&&(_=String(u),(u>BigInt(2)**BigInt(32)||u<-(BigInt(2)**BigInt(32)))&&(_=Mn(_)),_+="n"),c+=` It must be ${r}. Received ${_}`,c},RangeError);function Mn(m){let r="",u=m.length;const c=m[0]==="-"?1:0;for(;u>=c+4;u-=3)r=`_${m.slice(u-3,u)}${r}`;return`${m.slice(0,u)}${r}`}function Kn(m,r,u){yn(r,"offset"),(m[r]===void 0||m[r+u]===void 0)&&sn(r,m.length-(u+1))}function Tn(m,r,u,c,_,C){if(m>u||m<r){const M=typeof r=="bigint"?"n":"";let q;throw r===0||r===BigInt(0)?q=`>= 0${M} and < 2${M} ** ${(C+1)*8}${M}`:q=`>= -(2${M} ** ${(C+1)*8-1}${M}) and < 2 ** ${(C+1)*8-1}${M}`,new Qe.ERR_OUT_OF_RANGE("value",q,m)}Kn(c,_,C)}function yn(m,r){if(typeof m!="number")throw new Qe.ERR_INVALID_ARG_TYPE(r,"number",m)}function sn(m,r,u){throw Math.floor(m)!==m?(yn(m,u),new Qe.ERR_OUT_OF_RANGE("offset","an integer",m)):r<0?new Qe.ERR_BUFFER_OUT_OF_BOUNDS:new Qe.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${r}`,m)}const $n=/[^+/0-9A-Za-z-_]/g;function Pn(m){if(m=m.split("=")[0],m=m.trim().replace($n,""),m.length<2)return"";for(;m.length%4!==0;)m=m+"=";return m}function at(m,r){r=r||1/0;let u;const c=m.length;let _=null;const C=[];for(let M=0;M<c;++M){if(u=m.charCodeAt(M),u>55295&&u<57344){if(!_){if(u>56319){(r-=3)>-1&&C.push(239,191,189);continue}else if(M+1===c){(r-=3)>-1&&C.push(239,191,189);continue}_=u;continue}if(u<56320){(r-=3)>-1&&C.push(239,191,189),_=u;continue}u=(_-55296<<10|u-56320)+65536}else _&&(r-=3)>-1&&C.push(239,191,189);if(_=null,u<128){if((r-=1)<0)break;C.push(u)}else if(u<2048){if((r-=2)<0)break;C.push(u>>6|192,u&63|128)}else if(u<65536){if((r-=3)<0)break;C.push(u>>12|224,u>>6&63|128,u&63|128)}else if(u<1114112){if((r-=4)<0)break;C.push(u>>18|240,u>>12&63|128,u>>6&63|128,u&63|128)}else throw new Error("Invalid code point")}return C}function vn(m){const r=[];for(let u=0;u<m.length;++u)r.push(m.charCodeAt(u)&255);return r}function lt(m,r){let u,c,_;const C=[];for(let M=0;M<m.length&&!((r-=2)<0);++M)u=m.charCodeAt(M),c=u>>8,_=u%256,C.push(_),C.push(c);return C}function Zn(m){return d.toByteArray(Pn(m))}function kn(m,r,u,c){let _;for(_=0;_<c&&!(_+u>=r.length||_>=m.length);++_)r[_+u]=m[_];return _}function fn(m,r){return m instanceof r||m!=null&&m.constructor!=null&&m.constructor.name!=null&&m.constructor.name===r.name}function rt(m){return m!==m}const nn=(function(){const m="0123456789abcdef",r=new Array(256);for(let u=0;u<16;++u){const c=u*16;for(let _=0;_<16;++_)r[c+_]=m[u]+m[_]}return r})();function o(m){return typeof BigInt>"u"?H:m}function H(){throw new Error("BigInt not supported")}})(buffer)),buffer}var bufferExports=requireBuffer();typeof window<"u"&&(window.Buffer=bufferExports.Buffer);const recipeFiles=Object.assign({"../recipes/baked_potato_soup.md":__vite_glob_0_0,"../recipes/bbq_chicken.md":__vite_glob_0_1,"../recipes/bbq_sauce_bettye.md":__vite_glob_0_2,"../recipes/bbq_sauce_kc.md":__vite_glob_0_3,"../recipes/beau_monde__dip.md":__vite_glob_0_4,"../recipes/beef_guinness_stew.md":__vite_glob_0_5,"../recipes/biscuits.md":__vite_glob_0_6,"../recipes/black_bean_soup.md":__vite_glob_0_7,"../recipes/black_eyed_pea_dip.md":__vite_glob_0_8,"../recipes/blueberry_teacake.md":__vite_glob_0_9,"../recipes/brisket.md":__vite_glob_0_10,"../recipes/butter_chicken.md":__vite_glob_0_11,"../recipes/butterball_cookies.md":__vite_glob_0_12,"../recipes/buttermilk_biscuits.md":__vite_glob_0_13,"../recipes/cajun_stewed_tomatoes.md":__vite_glob_0_14,"../recipes/cake_in_a_cup.md":__vite_glob_0_15,"../recipes/carnitas.md":__vite_glob_0_16,"../recipes/cereal_crispy_treats.md":__vite_glob_0_17,"../recipes/cherry_chocolate_fudge.md":__vite_glob_0_18,"../recipes/chicken_broccoli_casserole.md":__vite_glob_0_19,"../recipes/chicken_rice.md":__vite_glob_0_20,"../recipes/chicken_spaghetti_casserole.md":__vite_glob_0_21,"../recipes/chili.md":__vite_glob_0_22,"../recipes/chili_marinated_shrimp.md":__vite_glob_0_23,"../recipes/chocolate_chip_cookies.md":__vite_glob_0_24,"../recipes/cinnamon_puffs.md":__vite_glob_0_25,"../recipes/coconut_rum_balls.md":__vite_glob_0_26,"../recipes/colorado_chilie_sauce.md":__vite_glob_0_27,"../recipes/corn_flan.md":__vite_glob_0_28,"../recipes/corn_tortillas.md":__vite_glob_0_29,"../recipes/cornbread.md":__vite_glob_0_30,"../recipes/cornbread_dressing.md":__vite_glob_0_31,"../recipes/crab_cakes.md":__vite_glob_0_32,"../recipes/cranberry_tea_cookies.md":__vite_glob_0_33,"../recipes/crepes.md":__vite_glob_0_34,"../recipes/crockpot_chicken.md":__vite_glob_0_35,"../recipes/crockpot_round_steak.md":__vite_glob_0_36,"../recipes/curtido.md":__vite_glob_0_37,"../recipes/emeril's_eggnog.md":__vite_glob_0_38,"../recipes/frankes_spaghetti_sauce.md":__vite_glob_0_39,"../recipes/french_market_quiche.md":__vite_glob_0_40,"../recipes/french_onion_soup.md":__vite_glob_0_41,"../recipes/fresh_pesto.md":__vite_glob_0_42,"../recipes/fried_chicken.md":__vite_glob_0_43,"../recipes/fried_rice.md":__vite_glob_0_44,"../recipes/garlic_chili_chicken.md":__vite_glob_0_45,"../recipes/garlic_tahini.md":__vite_glob_0_46,"../recipes/granola.md":__vite_glob_0_47,"../recipes/green_bean_casserole.md":__vite_glob_0_48,"../recipes/green_chicken.md":__vite_glob_0_49,"../recipes/guacamole.md":__vite_glob_0_50,"../recipes/hard_boiled_eggs.md":__vite_glob_0_51,"../recipes/hot_fudge_sauce.md":__vite_glob_0_52,"../recipes/hurricane.md":__vite_glob_0_53,"../recipes/hush_puppies.md":__vite_glob_0_54,"../recipes/italian_beef.md":__vite_glob_0_55,"../recipes/jalapeno_poppers.md":__vite_glob_0_56,"../recipes/jerk_chicken.md":__vite_glob_0_57,"../recipes/key_lime_pie.md":__vite_glob_0_58,"../recipes/mac_n_cheese.md":__vite_glob_0_59,"../recipes/maple_bacon.md":__vite_glob_0_60,"../recipes/meringue_cookies.md":__vite_glob_0_61,"../recipes/milk_chocolate_bourbon_balls.md":__vite_glob_0_62,"../recipes/naan_bread.md":__vite_glob_0_63,"../recipes/no_bake_cookies.md":__vite_glob_0_64,"../recipes/paneer_cheese.md":__vite_glob_0_65,"../recipes/pinch_me_cake.md":__vite_glob_0_66,"../recipes/pinky_watson.md":__vite_glob_0_67,"../recipes/prime_rib.md":__vite_glob_0_68,"../recipes/pupusa.md":__vite_glob_0_69,"../recipes/quesadilla.md":__vite_glob_0_70,"../recipes/quick_whole_cranberry_sauce.md":__vite_glob_0_71,"../recipes/razor-clam-chowder.md":__vite_glob_0_72,"../recipes/rice_bowl.md":__vite_glob_0_73,"../recipes/rocky_road_fudge.md":__vite_glob_0_74,"../recipes/rolls_gmak.md":__vite_glob_0_75,"../recipes/scalloped_potatoes.md":__vite_glob_0_76,"../recipes/sour_cream_cookies.md":__vite_glob_0_77,"../recipes/sous__vide_smoked_brisket.md":__vite_glob_0_78,"../recipes/spritz_cookies.md":__vite_glob_0_79,"../recipes/street_tacos.md":__vite_glob_0_80,"../recipes/sugar_cookies.md":__vite_glob_0_81,"../recipes/tacos.md":__vite_glob_0_82,"../recipes/tamales.md":__vite_glob_0_83,"../recipes/template.md":__vite_glob_0_84,"../recipes/zucchini_bread.md":__vite_glob_0_85}),getAllRecipes=()=>Object.keys(recipeFiles).map(p=>{const d=recipeFiles[p],{data:S,content:f}=matter(d);return{id:p.split("/").pop()?.replace(".md","")||p,title:S.title||"Untitled Recipe",source:S.source||"Unknown",meal:S.meal||[],isComponent:S.is_component??!1,effort:S.effort||"Medium",season:S.season||["All-year"],protein:S.protein||"Other",cost:S.cost||"Medium",kitchenImpact:S.kitchen_impact||"Medium",repeatability:S.repeatability||"Medium",microwavableLeftovers:!!S.microwavable_leftovers,lastCooked:S.last_cooked,ingredients:S.ingredients||[],instructions:f.trim(),tags:S.tags||[]}});function isArray(p){return Array.isArray?Array.isArray(p):getTag(p)==="[object Array]"}function baseToString(p){if(typeof p=="string")return p;let d=p+"";return d=="0"&&1/p==-1/0?"-0":d}function toString(p){return p==null?"":baseToString(p)}function isString(p){return typeof p=="string"}function isNumber(p){return typeof p=="number"}function isBoolean(p){return p===!0||p===!1||isObjectLike(p)&&getTag(p)=="[object Boolean]"}function isObject(p){return typeof p=="object"}function isObjectLike(p){return isObject(p)&&p!==null}function isDefined(p){return p!=null}function isBlank(p){return!p.trim().length}function getTag(p){return p==null?p===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(p)}const INCORRECT_INDEX_TYPE="Incorrect 'index' type",LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY=p=>`Invalid value for key ${p}`,PATTERN_LENGTH_TOO_LARGE=p=>`Pattern length exceeds max of ${p}.`,MISSING_KEY_PROPERTY=p=>`Missing ${p} property in key`,INVALID_KEY_WEIGHT_VALUE=p=>`Property 'weight' in key '${p}' must be a positive integer`,hasOwn=Object.prototype.hasOwnProperty;class KeyStore{constructor(d){this._keys=[],this._keyMap={};let S=0;d.forEach(f=>{let v=createKey(f);this._keys.push(v),this._keyMap[v.id]=v,S+=v.weight}),this._keys.forEach(f=>{f.weight/=S})}get(d){return this._keyMap[d]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function createKey(p){let d=null,S=null,f=null,v=1,x=null;if(isString(p)||isArray(p))f=p,d=createKeyPath(p),S=createKeyId(p);else{if(!hasOwn.call(p,"name"))throw new Error(MISSING_KEY_PROPERTY("name"));const A=p.name;if(f=A,hasOwn.call(p,"weight")&&(v=p.weight,v<=0))throw new Error(INVALID_KEY_WEIGHT_VALUE(A));d=createKeyPath(A),S=createKeyId(A),x=p.getFn}return{path:d,id:S,weight:v,src:f,getFn:x}}function createKeyPath(p){return isArray(p)?p:p.split(".")}function createKeyId(p){return isArray(p)?p.join("."):p}function get(p,d){let S=[],f=!1;const v=(x,A,g)=>{if(isDefined(x))if(!A[g])S.push(x);else{let b=A[g];const h=x[b];if(!isDefined(h))return;if(g===A.length-1&&(isString(h)||isNumber(h)||isBoolean(h)))S.push(toString(h));else if(isArray(h)){f=!0;for(let E=0,w=h.length;E<w;E+=1)v(h[E],A,g+1)}else A.length&&v(h,A,g+1)}};return v(p,isString(d)?d.split("."):d,0),f?S:S[0]}const MatchOptions={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},BasicOptions={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(p,d)=>p.score===d.score?p.idx<d.idx?-1:1:p.score<d.score?-1:1},FuzzyOptions={location:0,threshold:.6,distance:100},AdvancedOptions={useExtendedSearch:!1,getFn:get,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Config={...BasicOptions,...MatchOptions,...FuzzyOptions,...AdvancedOptions};const SPACE=/[^ ]+/g;function norm(p=1,d=3){const S=new Map,f=Math.pow(10,d);return{get(v){const x=v.match(SPACE).length;if(S.has(x))return S.get(x);const A=1/Math.pow(x,.5*p),g=parseFloat(Math.round(A*f)/f);return S.set(x,g),g},clear(){S.clear()}}}class FuseIndex{constructor({getFn:d=Config.getFn,fieldNormWeight:S=Config.fieldNormWeight}={}){this.norm=norm(S,3),this.getFn=d,this.isCreated=!1,this.setIndexRecords()}setSources(d=[]){this.docs=d}setIndexRecords(d=[]){this.records=d}setKeys(d=[]){this.keys=d,this._keysMap={},d.forEach((S,f)=>{this._keysMap[S.id]=f})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,isString(this.docs[0])?this.docs.forEach((d,S)=>{this._addString(d,S)}):this.docs.forEach((d,S)=>{this._addObject(d,S)}),this.norm.clear())}add(d){const S=this.size();isString(d)?this._addString(d,S):this._addObject(d,S)}removeAt(d){this.records.splice(d,1);for(let S=d,f=this.size();S<f;S+=1)this.records[S].i-=1}getValueForItemAtKeyId(d,S){return d[this._keysMap[S]]}size(){return this.records.length}_addString(d,S){if(!isDefined(d)||isBlank(d))return;let f={v:d,i:S,n:this.norm.get(d)};this.records.push(f)}_addObject(d,S){let f={i:S,$:{}};this.keys.forEach((v,x)=>{let A=v.getFn?v.getFn(d):this.getFn(d,v.path);if(isDefined(A)){if(isArray(A)){let g=[];const b=[{nestedArrIndex:-1,value:A}];for(;b.length;){const{nestedArrIndex:h,value:E}=b.pop();if(isDefined(E))if(isString(E)&&!isBlank(E)){let w={v:E,i:h,n:this.norm.get(E)};g.push(w)}else isArray(E)&&E.forEach((w,R)=>{b.push({nestedArrIndex:R,value:w})})}f.$[x]=g}else if(isString(A)&&!isBlank(A)){let g={v:A,n:this.norm.get(A)};f.$[x]=g}}}),this.records.push(f)}toJSON(){return{keys:this.keys,records:this.records}}}function createIndex(p,d,{getFn:S=Config.getFn,fieldNormWeight:f=Config.fieldNormWeight}={}){const v=new FuseIndex({getFn:S,fieldNormWeight:f});return v.setKeys(p.map(createKey)),v.setSources(d),v.create(),v}function parseIndex(p,{getFn:d=Config.getFn,fieldNormWeight:S=Config.fieldNormWeight}={}){const{keys:f,records:v}=p,x=new FuseIndex({getFn:d,fieldNormWeight:S});return x.setKeys(f),x.setIndexRecords(v),x}function computeScore$1(p,{errors:d=0,currentLocation:S=0,expectedLocation:f=0,distance:v=Config.distance,ignoreLocation:x=Config.ignoreLocation}={}){const A=d/p.length;if(x)return A;const g=Math.abs(f-S);return v?A+g/v:g?1:A}function convertMaskToIndices(p=[],d=Config.minMatchCharLength){let S=[],f=-1,v=-1,x=0;for(let A=p.length;x<A;x+=1){let g=p[x];g&&f===-1?f=x:!g&&f!==-1&&(v=x-1,v-f+1>=d&&S.push([f,v]),f=-1)}return p[x-1]&&x-f>=d&&S.push([f,x-1]),S}const MAX_BITS=32;function search(p,d,S,{location:f=Config.location,distance:v=Config.distance,threshold:x=Config.threshold,findAllMatches:A=Config.findAllMatches,minMatchCharLength:g=Config.minMatchCharLength,includeMatches:b=Config.includeMatches,ignoreLocation:h=Config.ignoreLocation}={}){if(d.length>MAX_BITS)throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));const E=d.length,w=p.length,R=Math.max(0,Math.min(f,w));let O=x,Y=R;const J=g>1||b,$=J?Array(w):[];let ae;for(;(ae=p.indexOf(d,Y))>-1;){let ie=computeScore$1(d,{currentLocation:ae,expectedLocation:R,distance:v,ignoreLocation:h});if(O=Math.min(ie,O),Y=ae+E,J){let xe=0;for(;xe<E;)$[ae+xe]=1,xe+=1}}Y=-1;let ce=[],oe=1,ge=E+w;const ee=1<<E-1;for(let ie=0;ie<E;ie+=1){let xe=0,te=ge;for(;xe<te;)computeScore$1(d,{errors:ie,currentLocation:R+te,expectedLocation:R,distance:v,ignoreLocation:h})<=O?xe=te:ge=te,te=Math.floor((ge-xe)/2+xe);ge=te;let _e=Math.max(1,R-te+1),me=A?w:Math.min(R+te,w)+E,fe=Array(me+2);fe[me+1]=(1<<ie)-1;for(let pe=me;pe>=_e;pe-=1){let ke=pe-1,U=S[p.charAt(ke)];if(J&&($[ke]=+!!U),fe[pe]=(fe[pe+1]<<1|1)&U,ie&&(fe[pe]|=(ce[pe+1]|ce[pe])<<1|1|ce[pe+1]),fe[pe]&ee&&(oe=computeScore$1(d,{errors:ie,currentLocation:ke,expectedLocation:R,distance:v,ignoreLocation:h}),oe<=O)){if(O=oe,Y=ke,Y<=R)break;_e=Math.max(1,2*R-Y)}}if(computeScore$1(d,{errors:ie+1,currentLocation:R,expectedLocation:R,distance:v,ignoreLocation:h})>O)break;ce=fe}const be={isMatch:Y>=0,score:Math.max(.001,oe)};if(J){const ie=convertMaskToIndices($,g);ie.length?b&&(be.indices=ie):be.isMatch=!1}return be}function createPatternAlphabet(p){let d={};for(let S=0,f=p.length;S<f;S+=1){const v=p.charAt(S);d[v]=(d[v]||0)|1<<f-S-1}return d}const stripDiacritics=String.prototype.normalize?(p=>p.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"")):(p=>p);class BitapSearch{constructor(d,{location:S=Config.location,threshold:f=Config.threshold,distance:v=Config.distance,includeMatches:x=Config.includeMatches,findAllMatches:A=Config.findAllMatches,minMatchCharLength:g=Config.minMatchCharLength,isCaseSensitive:b=Config.isCaseSensitive,ignoreDiacritics:h=Config.ignoreDiacritics,ignoreLocation:E=Config.ignoreLocation}={}){if(this.options={location:S,threshold:f,distance:v,includeMatches:x,findAllMatches:A,minMatchCharLength:g,isCaseSensitive:b,ignoreDiacritics:h,ignoreLocation:E},d=b?d:d.toLowerCase(),d=h?stripDiacritics(d):d,this.pattern=d,this.chunks=[],!this.pattern.length)return;const w=(O,Y)=>{this.chunks.push({pattern:O,alphabet:createPatternAlphabet(O),startIndex:Y})},R=this.pattern.length;if(R>MAX_BITS){let O=0;const Y=R%MAX_BITS,J=R-Y;for(;O<J;)w(this.pattern.substr(O,MAX_BITS),O),O+=MAX_BITS;if(Y){const $=R-MAX_BITS;w(this.pattern.substr($),$)}}else w(this.pattern,0)}searchIn(d){const{isCaseSensitive:S,ignoreDiacritics:f,includeMatches:v}=this.options;if(d=S?d:d.toLowerCase(),d=f?stripDiacritics(d):d,this.pattern===d){let J={isMatch:!0,score:0};return v&&(J.indices=[[0,d.length-1]]),J}const{location:x,distance:A,threshold:g,findAllMatches:b,minMatchCharLength:h,ignoreLocation:E}=this.options;let w=[],R=0,O=!1;this.chunks.forEach(({pattern:J,alphabet:$,startIndex:ae})=>{const{isMatch:ce,score:oe,indices:ge}=search(d,J,$,{location:x+ae,distance:A,threshold:g,findAllMatches:b,minMatchCharLength:h,includeMatches:v,ignoreLocation:E});ce&&(O=!0),R+=oe,ce&&ge&&(w=[...w,...ge])});let Y={isMatch:O,score:O?R/this.chunks.length:1};return O&&v&&(Y.indices=w),Y}}class BaseMatch{constructor(d){this.pattern=d}static isMultiMatch(d){return getMatch(d,this.multiRegex)}static isSingleMatch(d){return getMatch(d,this.singleRegex)}search(){}}function getMatch(p,d){const S=p.match(d);return S?S[1]:null}class ExactMatch extends BaseMatch{constructor(d){super(d)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(d){const S=d===this.pattern;return{isMatch:S,score:S?0:1,indices:[0,this.pattern.length-1]}}}class InverseExactMatch extends BaseMatch{constructor(d){super(d)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(d){const f=d.indexOf(this.pattern)===-1;return{isMatch:f,score:f?0:1,indices:[0,d.length-1]}}}class PrefixExactMatch extends BaseMatch{constructor(d){super(d)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(d){const S=d.startsWith(this.pattern);return{isMatch:S,score:S?0:1,indices:[0,this.pattern.length-1]}}}class InversePrefixExactMatch extends BaseMatch{constructor(d){super(d)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(d){const S=!d.startsWith(this.pattern);return{isMatch:S,score:S?0:1,indices:[0,d.length-1]}}}class SuffixExactMatch extends BaseMatch{constructor(d){super(d)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(d){const S=d.endsWith(this.pattern);return{isMatch:S,score:S?0:1,indices:[d.length-this.pattern.length,d.length-1]}}}class InverseSuffixExactMatch extends BaseMatch{constructor(d){super(d)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(d){const S=!d.endsWith(this.pattern);return{isMatch:S,score:S?0:1,indices:[0,d.length-1]}}}class FuzzyMatch extends BaseMatch{constructor(d,{location:S=Config.location,threshold:f=Config.threshold,distance:v=Config.distance,includeMatches:x=Config.includeMatches,findAllMatches:A=Config.findAllMatches,minMatchCharLength:g=Config.minMatchCharLength,isCaseSensitive:b=Config.isCaseSensitive,ignoreDiacritics:h=Config.ignoreDiacritics,ignoreLocation:E=Config.ignoreLocation}={}){super(d),this._bitapSearch=new BitapSearch(d,{location:S,threshold:f,distance:v,includeMatches:x,findAllMatches:A,minMatchCharLength:g,isCaseSensitive:b,ignoreDiacritics:h,ignoreLocation:E})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(d){return this._bitapSearch.searchIn(d)}}class IncludeMatch extends BaseMatch{constructor(d){super(d)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(d){let S=0,f;const v=[],x=this.pattern.length;for(;(f=d.indexOf(this.pattern,S))>-1;)S=f+x,v.push([f,S-1]);const A=!!v.length;return{isMatch:A,score:A?0:1,indices:v}}}const searchers=[ExactMatch,IncludeMatch,PrefixExactMatch,InversePrefixExactMatch,InverseSuffixExactMatch,SuffixExactMatch,InverseExactMatch,FuzzyMatch],searchersLen=searchers.length,SPACE_RE=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,OR_TOKEN="|";function parseQuery(p,d={}){return p.split(OR_TOKEN).map(S=>{let f=S.trim().split(SPACE_RE).filter(x=>x&&!!x.trim()),v=[];for(let x=0,A=f.length;x<A;x+=1){const g=f[x];let b=!1,h=-1;for(;!b&&++h<searchersLen;){const E=searchers[h];let w=E.isMultiMatch(g);w&&(v.push(new E(w,d)),b=!0)}if(!b)for(h=-1;++h<searchersLen;){const E=searchers[h];let w=E.isSingleMatch(g);if(w){v.push(new E(w,d));break}}}return v})}const MultiMatchSet=new Set([FuzzyMatch.type,IncludeMatch.type]);class ExtendedSearch{constructor(d,{isCaseSensitive:S=Config.isCaseSensitive,ignoreDiacritics:f=Config.ignoreDiacritics,includeMatches:v=Config.includeMatches,minMatchCharLength:x=Config.minMatchCharLength,ignoreLocation:A=Config.ignoreLocation,findAllMatches:g=Config.findAllMatches,location:b=Config.location,threshold:h=Config.threshold,distance:E=Config.distance}={}){this.query=null,this.options={isCaseSensitive:S,ignoreDiacritics:f,includeMatches:v,minMatchCharLength:x,findAllMatches:g,ignoreLocation:A,location:b,threshold:h,distance:E},d=S?d:d.toLowerCase(),d=f?stripDiacritics(d):d,this.pattern=d,this.query=parseQuery(this.pattern,this.options)}static condition(d,S){return S.useExtendedSearch}searchIn(d){const S=this.query;if(!S)return{isMatch:!1,score:1};const{includeMatches:f,isCaseSensitive:v,ignoreDiacritics:x}=this.options;d=v?d:d.toLowerCase(),d=x?stripDiacritics(d):d;let A=0,g=[],b=0;for(let h=0,E=S.length;h<E;h+=1){const w=S[h];g.length=0,A=0;for(let R=0,O=w.length;R<O;R+=1){const Y=w[R],{isMatch:J,indices:$,score:ae}=Y.search(d);if(J){if(A+=1,b+=ae,f){const ce=Y.constructor.type;MultiMatchSet.has(ce)?g=[...g,...$]:g.push($)}}else{b=0,A=0,g.length=0;break}}if(A){let R={isMatch:!0,score:b/A};return f&&(R.indices=g),R}}return{isMatch:!1,score:1}}}const registeredSearchers=[];function register(...p){registeredSearchers.push(...p)}function createSearcher(p,d){for(let S=0,f=registeredSearchers.length;S<f;S+=1){let v=registeredSearchers[S];if(v.condition(p,d))return new v(p,d)}return new BitapSearch(p,d)}const LogicalOperator={AND:"$and",OR:"$or"},KeyType={PATH:"$path",PATTERN:"$val"},isExpression=p=>!!(p[LogicalOperator.AND]||p[LogicalOperator.OR]),isPath=p=>!!p[KeyType.PATH],isLeaf=p=>!isArray(p)&&isObject(p)&&!isExpression(p),convertToExplicit=p=>({[LogicalOperator.AND]:Object.keys(p).map(d=>({[d]:p[d]}))});function parse(p,d,{auto:S=!0}={}){const f=v=>{let x=Object.keys(v);const A=isPath(v);if(!A&&x.length>1&&!isExpression(v))return f(convertToExplicit(v));if(isLeaf(v)){const b=A?v[KeyType.PATH]:x[0],h=A?v[KeyType.PATTERN]:v[b];if(!isString(h))throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(b));const E={keyId:createKeyId(b),pattern:h};return S&&(E.searcher=createSearcher(h,d)),E}let g={children:[],operator:x[0]};return x.forEach(b=>{const h=v[b];isArray(h)&&h.forEach(E=>{g.children.push(f(E))})}),g};return isExpression(p)||(p=convertToExplicit(p)),f(p)}function computeScore(p,{ignoreFieldNorm:d=Config.ignoreFieldNorm}){p.forEach(S=>{let f=1;S.matches.forEach(({key:v,norm:x,score:A})=>{const g=v?v.weight:null;f*=Math.pow(A===0&&g?Number.EPSILON:A,(g||1)*(d?1:x))}),S.score=f})}function transformMatches(p,d){const S=p.matches;d.matches=[],isDefined(S)&&S.forEach(f=>{if(!isDefined(f.indices)||!f.indices.length)return;const{indices:v,value:x}=f;let A={indices:v,value:x};f.key&&(A.key=f.key.src),f.idx>-1&&(A.refIndex=f.idx),d.matches.push(A)})}function transformScore(p,d){d.score=p.score}function format(p,d,{includeMatches:S=Config.includeMatches,includeScore:f=Config.includeScore}={}){const v=[];return S&&v.push(transformMatches),f&&v.push(transformScore),p.map(x=>{const{idx:A}=x,g={item:d[A],refIndex:A};return v.length&&v.forEach(b=>{b(x,g)}),g})}class Fuse{constructor(d,S={},f){this.options={...Config,...S},this.options.useExtendedSearch,this._keyStore=new KeyStore(this.options.keys),this.setCollection(d,f)}setCollection(d,S){if(this._docs=d,S&&!(S instanceof FuseIndex))throw new Error(INCORRECT_INDEX_TYPE);this._myIndex=S||createIndex(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(d){isDefined(d)&&(this._docs.push(d),this._myIndex.add(d))}remove(d=()=>!1){const S=[];for(let f=0,v=this._docs.length;f<v;f+=1){const x=this._docs[f];d(x,f)&&(this.removeAt(f),f-=1,v-=1,S.push(x))}return S}removeAt(d){this._docs.splice(d,1),this._myIndex.removeAt(d)}getIndex(){return this._myIndex}search(d,{limit:S=-1}={}){const{includeMatches:f,includeScore:v,shouldSort:x,sortFn:A,ignoreFieldNorm:g}=this.options;let b=isString(d)?isString(this._docs[0])?this._searchStringList(d):this._searchObjectList(d):this._searchLogical(d);return computeScore(b,{ignoreFieldNorm:g}),x&&b.sort(A),isNumber(S)&&S>-1&&(b=b.slice(0,S)),format(b,this._docs,{includeMatches:f,includeScore:v})}_searchStringList(d){const S=createSearcher(d,this.options),{records:f}=this._myIndex,v=[];return f.forEach(({v:x,i:A,n:g})=>{if(!isDefined(x))return;const{isMatch:b,score:h,indices:E}=S.searchIn(x);b&&v.push({item:x,idx:A,matches:[{score:h,value:x,norm:g,indices:E}]})}),v}_searchLogical(d){const S=parse(d,this.options),f=(g,b,h)=>{if(!g.children){const{keyId:w,searcher:R}=g,O=this._findMatches({key:this._keyStore.get(w),value:this._myIndex.getValueForItemAtKeyId(b,w),searcher:R});return O&&O.length?[{idx:h,item:b,matches:O}]:[]}const E=[];for(let w=0,R=g.children.length;w<R;w+=1){const O=g.children[w],Y=f(O,b,h);if(Y.length)E.push(...Y);else if(g.operator===LogicalOperator.AND)return[]}return E},v=this._myIndex.records,x={},A=[];return v.forEach(({$:g,i:b})=>{if(isDefined(g)){let h=f(S,g,b);h.length&&(x[b]||(x[b]={idx:b,item:g,matches:[]},A.push(x[b])),h.forEach(({matches:E})=>{x[b].matches.push(...E)}))}}),A}_searchObjectList(d){const S=createSearcher(d,this.options),{keys:f,records:v}=this._myIndex,x=[];return v.forEach(({$:A,i:g})=>{if(!isDefined(A))return;let b=[];f.forEach((h,E)=>{b.push(...this._findMatches({key:h,value:A[E],searcher:S}))}),b.length&&x.push({idx:g,item:A,matches:b})}),x}_findMatches({key:d,value:S,searcher:f}){if(!isDefined(S))return[];let v=[];if(isArray(S))S.forEach(({v:x,i:A,n:g})=>{if(!isDefined(x))return;const{isMatch:b,score:h,indices:E}=f.searchIn(x);b&&v.push({score:h,key:d,value:x,idx:A,norm:g,indices:E})});else{const{v:x,n:A}=S,{isMatch:g,score:b,indices:h}=f.searchIn(x);g&&v.push({score:b,key:d,value:x,norm:A,indices:h})}return v}}Fuse.version="7.1.0";Fuse.createIndex=createIndex;Fuse.parseIndex=parseIndex;Fuse.config=Config;Fuse.parseQuery=parse;register(ExtendedSearch);function useRecipeSearch(p){const[d,S]=reactExports.useState(""),f=reactExports.useMemo(()=>new Fuse(p,{keys:["title","protein","tags","ingredients.item"],threshold:.3}),[p]),v=reactExports.useMemo(()=>d?f.search(d).map(x=>x.item):p,[f,d,p]);return{query:d,setQuery:S,results:v}}const WEIGHTS={BASE_STALENESS:20,NEW_RECIPE_BONUS:100,LOW_EFFORT:30,VARIETY_PENALTY:-50};function scoreRecipes(p,d=[]){const S=new Date().getTime();return p.filter(f=>!f.isComponent).map(f=>{let v=0;if(f.lastCooked){const x=new Date(f.lastCooked).getTime(),A=Math.floor((S-x)/(1e3*60*60*24)),g=Math.floor(A/7);v+=g*WEIGHTS.BASE_STALENESS,A<4&&(v-=200)}else v+=WEIGHTS.NEW_RECIPE_BONUS;return d.includes(f.protein)&&(v+=WEIGHTS.VARIETY_PENALTY),f.effort==="Low"&&(v+=WEIGHTS.LOW_EFFORT),f.effort==="High"&&(v-=20),{...f,score:v}})}function useRoulette(p){const[d,S]=reactExports.useState(null);return{winner:d,spin:(v,x)=>{const A=x||p;if(A.length===0)return;const g=scoreRecipes(A,v),b=Math.max(...g.map(w=>w.score)),h=g.filter(w=>w.score===b),E=h[Math.floor(Math.random()*h.length)];S(E)},setWinner:S}}function useHistory(){const[p,d]=reactExports.useState(()=>{const f=localStorage.getItem("cook_history");return f?JSON.parse(f):[]});return reactExports.useEffect(()=>{localStorage.setItem("cook_history",JSON.stringify(p))},[p]),{history:p,recordMeal:(f,v)=>{const x={recipeId:f,protein:v,date:new Date().toISOString().split("T")[0]};d(A=>[x,...A].slice(0,50))}}}const card="_card_12wz9_1",header="_header_12wz9_21",footer="_footer_12wz9_39",tag="_tag_12wz9_46",styles={card,header,footer,tag};function RecipeCard({recipe:p}){return jsxRuntimeExports.jsxs("div",{className:styles.card,children:[jsxRuntimeExports.jsxs("header",{className:styles.header,children:[jsxRuntimeExports.jsx("span",{className:styles.proteinTag,children:p.protein}),jsxRuntimeExports.jsxs("span",{className:styles.effort,children:[p.effort," Effort"]})]}),jsxRuntimeExports.jsx("h2",{className:styles.title,children:p.title}),jsxRuntimeExports.jsx("div",{className:styles.footer,children:p.tags.slice(0,3).map(d=>jsxRuntimeExports.jsxs("span",{className:styles.tag,children:["#",d]},d))})]})}function RecipeDetail({recipe:p,onClose:d,onConfirm:S}){const f=()=>{S(p.id,p.protein),d()};return jsxRuntimeExports.jsx("div",{className:"modal-backdrop",onClick:d,children:jsxRuntimeExports.jsxs("div",{className:"modal-content",onClick:v=>v.stopPropagation(),children:[jsxRuntimeExports.jsx("button",{className:"modal-close",onClick:d,children:"×"}),jsxRuntimeExports.jsxs("div",{className:"recipe-detail-header",children:[jsxRuntimeExports.jsx("h1",{className:"brand-title",children:p.title}),jsxRuntimeExports.jsxs("p",{className:"brand-subtitle",children:[p.protein," • ",p.effort," Effort • ",p.source]})]}),jsxRuntimeExports.jsxs("section",{children:[jsxRuntimeExports.jsx("h3",{children:"Ingredients"}),jsxRuntimeExports.jsx("ul",{className:"ingredients-list",children:p.ingredients.map((v,x)=>jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:v.amount})," ",v.item]},x))})]}),jsxRuntimeExports.jsxs("section",{children:[jsxRuntimeExports.jsx("h3",{children:"Instructions"}),jsxRuntimeExports.jsx("div",{className:"instructions-text",children:p.instructions})]}),jsxRuntimeExports.jsx("button",{className:"btn-success",onClick:f,children:"🍽️ I Made This!"})]})})}const DAYS_OF_WEEK=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];function generateSuggestionPool(p,d,S){const f=[],v=p.filter(g=>g.meal.includes(S)&&!d.has(g.id));return scoreRecipes(v,f).sort((g,b)=>b.score-g.score).slice(0,5).map(g=>g)}function addToSuggestionPool(p,d,S=!0){return p.some(f=>f.id===d.id)?p:S?[d,...p]:[...p,d]}function removeFromSuggestionPool(p,d){return p.filter(S=>S.id!==d)}function filterSuggestions(p,d){if(!d)return p;const S=d.toLowerCase();return p.filter(f=>f.title.toLowerCase().includes(S)||f.protein.toLowerCase().includes(S)||f.tags.some(v=>v.toLowerCase().includes(S)))}function getAssignedRecipeIds(p){return new Set(DAYS_OF_WEEK.map(d=>p[d]?.id).filter(d=>!!d))}function serializeWeeklyPlan(p){return DAYS_OF_WEEK.reduce((d,S)=>({...d,[S]:p[S]?.id||null}),{})}function deserializeWeeklyPlan(p,d){return DAYS_OF_WEEK.reduce((S,f)=>({...S,[f]:d.find(v=>v.id===p[f])||null}),{})}function useWeeklyPlanner({recipes:p}){const[d,S]=reactExports.useState(()=>{const te=generateEmptyWeeklyPlan();try{const _e=localStorage.getItem("weeklyPlanCommitted");if(_e){const Ae=JSON.parse(_e);if(Ae.weekLocked&&Ae.plan)return deserializeWeeklyPlan(Ae.plan,p)}const me=localStorage.getItem("weeklyPlanDraft");if(!me)return te;const fe=JSON.parse(me);return deserializeWeeklyPlan(fe,p)}catch{return te}}),[f,v]=reactExports.useState([]),[x,A]=reactExports.useState("Dinner"),[g,b]=reactExports.useState(null),[h,E]=reactExports.useState(null),w=reactExports.useRef(null),[R,O]=reactExports.useState(()=>{try{const te=localStorage.getItem("weeklyPlanCommitted");return te?!!JSON.parse(te).weekLocked:!1}catch{return!1}}),Y=getAssignedRecipeIds(d);reactExports.useEffect(()=>{const te=generateSuggestionPool(p,Y,"Dinner");v(te)},[]),reactExports.useEffect(()=>{const te=serializeWeeklyPlan(d);localStorage.setItem("weeklyPlanDraft",JSON.stringify(te))},[d]);const J=reactExports.useCallback(()=>{b(null),E(null),w.current&&(clearTimeout(w.current),w.current=null)},[]),$=reactExports.useCallback((te,_e,me=4e3)=>{b(te),E(_e??null),w.current&&clearTimeout(w.current),w.current=window.setTimeout(()=>J(),me)},[J]);reactExports.useEffect(()=>()=>{w.current&&clearTimeout(w.current)},[]);const ae=reactExports.useCallback(te=>{A(te);const _e=generateSuggestionPool(p,Y,te);v(_e)},[p,Y]),ce=reactExports.useCallback(te=>{A(_e=>{if(!_e)return null;const me=Object.values(d).slice(0,3).map(U=>U?.protein).filter(U=>!!U),fe=new Set(f.map(U=>U.id)),Ae=p.filter(U=>U.meal.includes(_e)&&!Y.has(U.id)&&!fe.has(U.id)),ke=scoreRecipes(Ae,me).sort((U,ne)=>ne.score-U.score);if(ke.length>0){const U=ke[0];v(ne=>{const I=[...ne];return I[te]=U,I})}return _e})},[p,Y,f,d]),oe=reactExports.useCallback((te,_e)=>{if(R){$("Weekly plan is locked. Unlock to make changes.");return}const me=d[te];S(fe=>{const Ae=fe[te];return Ae&&Ae.id!==_e.id&&v(pe=>addToSuggestionPool(pe,Ae,!1)),{...fe,[te]:_e}}),v(fe=>removeFromSuggestionPool(fe,_e.id)),$(`Assigned ${_e.title} to ${te}`,{type:"assign",day:te,recipe:_e,previous:me||null})},[R,d,$]),ge=reactExports.useCallback(te=>{if(R){$("Weekly plan is locked. Unlock to make changes.");return}const _e=d[te];_e&&(v(me=>addToSuggestionPool(me,_e,!0)),S(me=>({...me,[te]:null})),$(`Returned ${_e.title} to pool`,{type:"remove",day:te,recipe:_e}))},[R,d,$]),ee=reactExports.useCallback(()=>{const te=h;if(te){if(te.type==="assign"){const{day:_e,recipe:me,previous:fe}=te;S(Ae=>({...Ae,[_e]:fe||null})),v(Ae=>addToSuggestionPool(Ae,me,!0)),fe&&v(Ae=>Ae.filter(pe=>pe.id!==fe.id)),$(`Undid assignment of ${me.title}`)}else if(te.type==="remove"){const{day:_e,recipe:me}=te;S(fe=>({...fe,[_e]:me})),v(fe=>fe.filter(Ae=>Ae.id!==me.id)),$(`Undid removal for ${me.title}`)}else if(te.type==="clear"){const{assigned:_e}=te;S(me=>{const fe={...me};return _e.forEach(Ae=>fe[Ae.day]=Ae.recipe),fe}),v(me=>me.filter(fe=>!_e.some(Ae=>Ae.recipe.id===fe.id))),$("Undid clear of weekly plan")}E(null)}},[h,$]),be=reactExports.useCallback(()=>{if(R){$("Weekly plan is locked. Unlock to make changes.");return}const te=Object.entries(d).map(([me,fe])=>({day:me,recipe:fe})).filter(me=>me.recipe),_e=te.map(me=>me.recipe);v(me=>{const fe=new Set(me.map(pe=>pe.id));return[..._e.filter(pe=>!fe.has(pe.id)),...me]}),S(generateEmptyWeeklyPlan()),localStorage.removeItem("weeklyPlanDraft"),$("Cleared weekly plan",{type:"clear",assigned:te})},[R,d,$]),ie=reactExports.useCallback(()=>{const te=serializeWeeklyPlan(d),_e={weekLocked:!0,lockedAt:new Date().toISOString(),plan:te};localStorage.setItem("weeklyPlanCommitted",JSON.stringify(_e)),O(!0),v(me=>me.filter(fe=>!Object.values(te).includes(fe.id))),$("Weekly plan committed")},[d,$]),xe=reactExports.useCallback(()=>{const te=localStorage.getItem("weeklyPlanCommitted");if(te)try{const _e=JSON.parse(te),me=new Set(Object.values(_e.plan||{}));v(fe=>{const Ae=new Set(fe.map(ke=>ke.id));return[...p.filter(ke=>me.has(ke.id)&&!Ae.has(ke.id)&&!Y.has(ke.id)),...fe]})}catch{}localStorage.removeItem("weeklyPlanCommitted"),O(!1),$("Weekly plan unlocked")},[p,Y,$]);return{weeklyPlan:d,suggestionPool:f,activeCategory:x,toast:g,lastAction:h,weekLocked:R,assignedRecipeIds:Y,handleRoll5:ae,handleRefreshSuggestion:ce,moveRecipeToDay:oe,removeRecipeFromDay:ge,undoLastAction:ee,clearWeeklyPlan:be,commitWeeklyPlan:ie,uncommitWeeklyPlan:xe,clearToast:J,setActiveCategory:A}}function generateEmptyWeeklyPlan(){return["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].reduce((p,d)=>({...p,[d]:null}),{})}function WeeklyCalendar({weeklyPlan:p,weekLocked:d,onAssignRecipe:S,onRemoveRecipe:f,onCommitPlan:v,onUncommitPlan:x,onClearPlan:A,suggestionPool:g,allRecipes:b}){const h=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],E=R=>{R.preventDefault(),R.dataTransfer.dropEffect="copy",console.log("Drag over day slot:",R.currentTarget.getAttribute("data-day"))},w=R=>{if(R.preventDefault(),console.log("Drop event triggered on day slot:",R.currentTarget.getAttribute("data-day")),d){console.log("Week is locked, cannot assign recipe");return}const O=R.dataTransfer?.getData("recipeId");if(console.log("Recipe ID from drag data:",O),O){let Y=g.find(J=>J.id===O);if(Y||(Y=b.find(J=>J.id===O)),Y){console.log("Found recipe:",Y);const $=R.currentTarget.getAttribute("data-day");console.log("Target day for assignment:",$),$?(console.log("Calling onAssignRecipe with day:",$,"and recipe:",Y),S($,Y),console.log("Recipe assignment completed")):console.log("ERROR: Could not determine target day from data-day attribute")}else console.log("ERROR: Recipe not found in suggestion pool or all recipes:",O),console.log("Current suggestion pool:",g),console.log("All recipes:",b)}else console.log("ERROR: No recipe ID found in drag data")};return jsxRuntimeExports.jsxs("section",{className:"weekly-calendar",children:[jsxRuntimeExports.jsxs("div",{className:"calendar-header",children:[jsxRuntimeExports.jsx("h2",{children:"Weekly Meal Plan"}),d?jsxRuntimeExports.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[jsxRuntimeExports.jsx("div",{className:"committed-badge","aria-live":"polite",children:"Committed"}),jsxRuntimeExports.jsx("button",{className:"btn-uncommit",onClick:x,style:{fontSize:"0.9rem",padding:"0.4rem 0.6rem"},children:"Uncommit"})]}):jsxRuntimeExports.jsx("button",{className:"btn-commit",onClick:v,style:{fontSize:"0.9rem",padding:"0.5rem 1rem"},children:"Commit Plan"}),jsxRuntimeExports.jsx("button",{className:"btn-clear",onClick:A,style:{fontSize:"0.9rem",padding:"0.5rem 1rem"},disabled:d,children:"Clear All"})]}),jsxRuntimeExports.jsx("div",{className:"calendar-grid",children:h.map(R=>{const O=p[R];return jsxRuntimeExports.jsxs("div",{className:"day-slot","data-day":R,onDragOver:E,onDrop:Y=>w(Y),children:[jsxRuntimeExports.jsx("h3",{children:R}),O?jsxRuntimeExports.jsxs("div",{className:"assigned-recipe",children:[jsxRuntimeExports.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"0.5rem"},children:[jsxRuntimeExports.jsx("div",{className:"assigned-title",children:O.title}),jsxRuntimeExports.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[jsxRuntimeExports.jsx("button",{className:"btn-view",onClick:()=>{},title:"Search this recipe",disabled:d,children:"🔍"}),jsxRuntimeExports.jsx("button",{className:"btn-remove",onClick:()=>f(R),title:"Remove recipe",disabled:d,children:"✕"})]})]}),jsxRuntimeExports.jsx("div",{className:"assigned-meta",children:jsxRuntimeExports.jsx("span",{children:O.protein})})]}):jsxRuntimeExports.jsx("div",{className:"empty-slot",children:"Drag recipe here"})]},R)})})]})}function SuggestionPool({suggestions:p,activeCategory:d,weekLocked:S,query:f,onQueryChange:v,onRoll5:x,onAssignRecipe:A,onRefreshSuggestion:g}){const b=filterSuggestions(p,f);return jsxRuntimeExports.jsxs("aside",{className:"suggestion-pool",children:[jsxRuntimeExports.jsx("h2",{children:"Suggestion Pool"}),jsxRuntimeExports.jsx("input",{type:"text",placeholder:"Search suggestions...",value:f,onChange:h=>v(h.target.value),className:"search-input",style:{marginBottom:"1rem",width:"100%",boxSizing:"border-box"}}),jsxRuntimeExports.jsxs("div",{className:"pool-controls",children:[jsxRuntimeExports.jsx("p",{style:{margin:"0 0 0.75rem 0",fontSize:"0.85rem",color:"var(--text-muted)"},children:"Roll 5 by Category:"}),jsxRuntimeExports.jsx("div",{className:"roll-buttons",children:["Breakfast","Lunch","Dinner"].map(h=>jsxRuntimeExports.jsx("button",{className:`chip ${d===h?"active":""}`,onClick:()=>x(h),children:h},h))})]}),d&&jsxRuntimeExports.jsx("div",{style:{marginBottom:"1rem"},children:jsxRuntimeExports.jsxs("p",{style:{margin:"0.75rem 0 0.5rem 0",fontSize:"0.85rem",color:"var(--text-muted)"},children:["Showing ",d," suggestions"]})}),jsxRuntimeExports.jsx("div",{className:"recipe-list",children:b.length>0?b.map((h,E)=>jsxRuntimeExports.jsxs("div",{className:"suggestion-item",draggable:!0,onDragStart:w=>{console.log("Drag start for recipe:",h.id,h.title),w.dataTransfer?.setData("recipeId",h.id),w.dataTransfer.effectAllowed="copy",console.log("Set drag data with recipe ID:",h.id)},children:[jsxRuntimeExports.jsxs("div",{className:"suggestion-content",children:[jsxRuntimeExports.jsx("div",{className:"suggestion-title",children:h.title}),jsxRuntimeExports.jsxs("div",{className:"suggestion-meta",children:[jsxRuntimeExports.jsx("span",{children:h.protein}),jsxRuntimeExports.jsxs("span",{children:["Effort: ",h.effort]})]})]}),jsxRuntimeExports.jsxs("div",{className:"suggestion-controls",children:[jsxRuntimeExports.jsx("select",{id:`assign-select-${h.id}`,className:"assign-select",defaultValue:"Monday",children:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map(w=>jsxRuntimeExports.jsx("option",{value:w,children:w},w))}),jsxRuntimeExports.jsx("button",{className:"btn-assign",onClick:()=>{const R=document.getElementById(`assign-select-${h.id}`)?.value;R&&A(R,h)},title:"Assign to day",disabled:S,children:"➕"}),jsxRuntimeExports.jsx("button",{className:"btn-refresh",onClick:()=>g(E),title:"Refresh this suggestion",disabled:S,children:"🔄"})]})]},h.id)):d?jsxRuntimeExports.jsxs("p",{style:{color:"var(--text-muted)",textAlign:"center",marginTop:"2rem",fontSize:"0.9rem"},children:["No ",d.toLowerCase()," recipes available. Try a different category."]}):jsxRuntimeExports.jsx("p",{style:{color:"var(--text-muted)",textAlign:"center",marginTop:"2rem",fontSize:"0.9rem"},children:"Click a category above to roll suggestions."})})]})}function PlannerView({recipes:p}){const{weeklyPlan:d,suggestionPool:S,activeCategory:f,toast:v,lastAction:x,weekLocked:A,handleRoll5:g,handleRefreshSuggestion:b,moveRecipeToDay:h,removeRecipeFromDay:E,undoLastAction:w,clearWeeklyPlan:R,commitWeeklyPlan:O,uncommitWeeklyPlan:Y}=useWeeklyPlanner({recipes:p}),{query:J,setQuery:$}=useRecipeSearch(p);reactExports.useEffect(()=>{let ie=null;const xe=()=>{ie&&(clearTimeout(ie),ie=null)};return v&&(ie=window.setTimeout(()=>xe(),4e3)),()=>xe()},[v]);const ae=ie=>{$(ie)},ce=(ie,xe)=>{h(ie,xe)},oe=ie=>{b(ie)},ge=()=>{window.confirm("Commit this weekly plan? This will lock the week and prevent edits.")&&O()},ee=()=>{window.confirm("Uncommit weekly plan? This will unlock the week for edits.")&&Y()},be=()=>{R()};return jsxRuntimeExports.jsxs("div",{className:"planner-container",children:[jsxRuntimeExports.jsx(SuggestionPool,{suggestions:S,activeCategory:f,weekLocked:A,query:J,onQueryChange:ae,onRoll5:g,onAssignRecipe:ce,onRefreshSuggestion:oe}),jsxRuntimeExports.jsx(WeeklyCalendar,{weeklyPlan:d,weekLocked:A,onAssignRecipe:h,onRemoveRecipe:E,onCommitPlan:ge,onUncommitPlan:ee,onClearPlan:be,suggestionPool:S,allRecipes:p}),jsxRuntimeExports.jsxs("div",{className:`toast ${v?"show":""}`,role:"status","aria-live":"polite",children:[jsxRuntimeExports.jsx("span",{children:v}),x&&jsxRuntimeExports.jsx("button",{className:"toast-undo",onClick:w,"aria-label":"Undo last action",children:"Undo"})]})]})}const MEAL_TYPES=["Breakfast","Lunch","Dinner","Snack"];function App(){const[p]=reactExports.useState(()=>getAllRecipes()),[d,S]=reactExports.useState("instant"),{history:f,recordMeal:v}=useHistory(),[x,A]=reactExports.useState(null),[g,b]=reactExports.useState(null),[h,E]=reactExports.useState(!1),{query:w,setQuery:R,results:O}=useRecipeSearch(p),{winner:Y,spin:J,setWinner:$}=useRoulette(p),ae=reactExports.useMemo(()=>{let ee=O;return g&&(ee=ee.filter(be=>be.meal.includes(g))),ee=ee.filter(be=>be.isComponent===h),ee},[O,g,h]),ce=reactExports.useMemo(()=>f.slice(0,3).map(ee=>ee.protein),[f]),oe=()=>{const ee=ae.filter(be=>!be.isComponent);ee.length>0?J(ce,ee):alert("No recipes in the current view to pick from!")},ge=(ee,be)=>{v(ee,be),$(null)};return jsxRuntimeExports.jsx("div",{className:"container",children:jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsxs("header",{className:"app-header",children:[jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("h1",{className:"brand-title",children:"The Living Cookbook"}),jsxRuntimeExports.jsxs("p",{className:"brand-subtitle",children:[p.length," recipes indexed • ",f.length," meals recorded"]})]}),jsxRuntimeExports.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[jsxRuntimeExports.jsx("div",{className:"view-mode-toggle",children:jsxRuntimeExports.jsxs("div",{className:"toggle-container",children:[jsxRuntimeExports.jsx("span",{className:`toggle-option ${d==="instant"?"active":""}`,onClick:()=>S("instant"),children:"Instant Roulette"}),jsxRuntimeExports.jsx("span",{className:`toggle-option ${d==="planner"?"active":""}`,onClick:()=>S("planner"),children:"Weekly Planner"}),jsxRuntimeExports.jsx("div",{className:"toggle-slider","data-active":d})]})}),jsxRuntimeExports.jsx("button",{className:"btn-roulette",onClick:oe,children:"🎲 Pick for Me"})]})]}),d==="instant"&&jsxRuntimeExports.jsxs("section",{className:"controls",children:[jsxRuntimeExports.jsx("input",{type:"text",placeholder:"Search by title, protein, or tags...",value:w,onChange:ee=>{R(ee.target.value),$(null)},className:"search-input"}),jsxRuntimeExports.jsxs("div",{className:"filter-bar",children:[MEAL_TYPES.map(ee=>jsxRuntimeExports.jsx("button",{className:`chip ${g===ee?"active":""}`,onClick:()=>b(g===ee?null:ee),children:ee},ee)),jsxRuntimeExports.jsx("span",{style:{borderLeft:"1px solid var(--border)",margin:"0 0.5rem",height:"20px"}}),jsxRuntimeExports.jsx("div",{className:"view-type-toggle",children:jsxRuntimeExports.jsxs("div",{className:"toggle-container",children:[jsxRuntimeExports.jsx("span",{className:`toggle-option ${h?"":"active"}`,onClick:()=>E(!1),children:"🍳 View Meals"}),jsxRuntimeExports.jsx("span",{className:`toggle-option ${h?"active":""}`,onClick:()=>E(!0),children:"📦 View Components"}),jsxRuntimeExports.jsx("div",{className:"toggle-slider","data-active":h?"components":"meals"})]})})]})]}),jsxRuntimeExports.jsx("main",{children:d==="instant"?jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[Y&&jsxRuntimeExports.jsxs("section",{className:"winner-banner",children:[jsxRuntimeExports.jsxs("h2",{children:["Tonight you're cooking: ",jsxRuntimeExports.jsx("span",{children:Y.title}),"!"]}),jsxRuntimeExports.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center"},children:[jsxRuntimeExports.jsx("button",{className:"btn-clear",onClick:()=>A(Y),children:"View Recipe"}),jsxRuntimeExports.jsx("button",{className:"btn-clear",onClick:()=>$(null),children:"Clear"})]})]}),jsxRuntimeExports.jsx("div",{className:"recipe-grid",children:ae.map(ee=>jsxRuntimeExports.jsx("div",{className:Y?.id===ee.id?"highlight-winner":"",onClick:()=>A(ee),style:{cursor:"pointer"},children:jsxRuntimeExports.jsx(RecipeCard,{recipe:ee})},ee.id))}),ae.length===0&&jsxRuntimeExports.jsx("p",{style:{textAlign:"center",color:"var(--text-muted)",marginTop:"3rem"},children:"No recipes found for this filter."})]}):jsxRuntimeExports.jsx(PlannerView,{recipes:p})}),x&&jsxRuntimeExports.jsx(RecipeDetail,{recipe:x,onClose:()=>A(null),onConfirm:ge})]})})}clientExports.createRoot(document.getElementById("root")).render(jsxRuntimeExports.jsx(reactExports.StrictMode,{children:jsxRuntimeExports.jsx(App,{})}));
