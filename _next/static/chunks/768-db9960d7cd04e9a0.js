(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[768],{8361:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8867:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return w}});let n=r(3359),o=r(4961),i=r(3256),a=r(2229),l=i._(r(959)),u=o._(r(7084)),c=r(7682),s=r(6536),f=r(8200);r(3849);let d=o._(r(1716)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function y(e,t,r,o,i,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let u="decode"in e?e.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&a(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;o.current(n._({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}function m(e){let[t,r]=l.version.split("."),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let b=(0,l.forwardRef)((e,t)=>{var{imgAttributes:r,heightInt:o,widthInt:i,qualityInt:u,className:c,imgStyle:s,blurStyle:f,isLazy:d,fetchPriority:p,fill:g,placeholder:h,loading:b,srcString:v,config:w,unoptimized:_,loader:j,onLoadRef:E,onLoadingCompleteRef:O,setBlurComplete:C,setShowAltText:S,onLoad:P,onError:x}=e,k=a._(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return b=d?"lazy":b,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",n._({},k,m(p),{loading:b,width:i,height:o,decoding:"async","data-nimg":g?"fill":"1",className:c,style:n._({},s,f)},r,{ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&y(e,v,h,E,O,C,_))},[v,h,E,O,C,x,_,t]),onLoad:e=>{let t=e.currentTarget;y(t,v,h,E,O,C,_)},onError:e=>{S(!0),"blur"===h&&C(!0),x&&x(e)}})))}),v=(0,l.forwardRef)((e,t)=>{let r,o;var i,{src:y,sizes:v,unoptimized:w=!1,priority:_=!1,loading:j,className:E,quality:O,width:C,height:S,fill:P,style:x,onLoad:k,onLoadingComplete:M,placeholder:I="empty",blurDataURL:R,fetchPriority:z,layout:L,objectFit:A,objectPosition:N,lazyBoundary:D,lazyRoot:q}=e,T=a._(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let B=(0,l.useContext)(f.ImageConfigContext),U=(0,l.useMemo)(()=>{let e=p||B||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n._({},e,{allSizes:t,deviceSizes:r})},[B]),W=T,F=W.loader||d.default;delete W.loader;let G="__next_img_default"in F;if(G){if("custom"===U.loader)throw Error('Image with src "'.concat(y,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=F;F=t=>{let{config:r}=t,n=a._(t,["config"]);return e(n)}}if(L){"fill"===L&&(P=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[L];e&&(x=n._({},x,e));let t={responsive:"100vw",fill:"100vw"}[L];t&&!v&&(v=t)}let H="",K=h(C),J=h(S);if("object"==typeof(i=y)&&(g(i)||void 0!==i.src)){let e=g(y)?y.default:y;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,o=e.blurHeight,R=R||e.blurDataURL,H=e.src,!P){if(K||J){if(K&&!J){let t=K/e.width;J=Math.round(e.height*t)}else if(!K&&J){let t=J/e.height;K=Math.round(e.width*t)}}else K=e.width,J=e.height}}let V=!_&&("lazy"===j||void 0===j);(!(y="string"==typeof y?y:H)||y.startsWith("data:")||y.startsWith("blob:"))&&(w=!0,V=!1),U.unoptimized&&(w=!0),G&&y.endsWith(".svg")&&!U.dangerouslyAllowSVG&&(w=!0),_&&(z="high");let[Y,$]=(0,l.useState)(!1),[Q,X]=(0,l.useState)(!1),Z=h(O),ee=Object.assign(P?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:N}:{},Q?{}:{color:"transparent"},x),et="blur"===I&&R&&!Y?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat((0,c.getImageBlurSvg)({widthInt:K,heightInt:J,blurWidth:r,blurHeight:o,blurDataURL:R,objectFit:ee.objectFit}),'")')}:{},er=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,a),s=u.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:u.map((e,n)=>"".concat(l({config:t,src:r,quality:i,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:l({config:t,src:r,quality:i,width:u[s]})}}({config:U,src:y,unoptimized:w,width:K,quality:Z,sizes:v,loader:F}),en=y,eo=(0,l.useRef)(k);(0,l.useEffect)(()=>{eo.current=k},[k]);let ei=(0,l.useRef)(M);(0,l.useEffect)(()=>{ei.current=M},[M]);let ea=n._({isLazy:V,imgAttributes:er,heightInt:J,widthInt:K,qualityInt:Z,className:E,imgStyle:ee,blurStyle:et,loading:j,config:U,fetchPriority:z,fill:P,unoptimized:w,placeholder:I,loader:F,srcString:en,onLoadRef:eo,onLoadingCompleteRef:ei,setBlurComplete:$,setShowAltText:X},W);return l.default.createElement(l.default.Fragment,null,l.default.createElement(b,n._({},ea,{ref:t})),_?l.default.createElement(u.default,null,l.default.createElement("link",n._({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src,imageSrcSet:er.srcSet,imageSizes:er.sizes,crossOrigin:W.crossOrigin},m(z)))):null)}),w=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7845:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let n=r(3359),o=r(4961),i=r(2229),a=o._(r(959)),l=r(8702),u=r(5463),c=r(8771),s=r(3862),f=r(9474),d=r(3824),p=r(8902),g=r(2510),h=r(8361),y=r(9986),m=new Set;function b(e,t,r,n,o){if(o||(0,u.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+o;if(m.has(i))return;m.add(i)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let w=a.default.forwardRef(function(e,t){let r,o;let{href:c,as:m,children:w,prefetch:_,passHref:j,replace:E,shallow:O,scroll:C,locale:S,onClick:P,onMouseEnter:x,onTouchStart:k,legacyBehavior:M=!1}=e,I=i._(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=w,M&&("string"==typeof r||"number"==typeof r)&&(r=a.default.createElement("a",null,r));let R=!1!==_,z=a.default.useContext(d.RouterContext),L=a.default.useContext(p.AppRouterContext),A=null!=z?z:L,N=!z,{href:D,as:q}=a.default.useMemo(()=>{if(!z){let e=v(c);return{href:e,as:m?v(m):e}}let[e,t]=(0,l.resolveHref)(z,c,!0);return{href:e,as:m?(0,l.resolveHref)(z,m):t||e}},[z,c,m]),T=a.default.useRef(D),B=a.default.useRef(q);M&&(o=a.default.Children.only(r));let U=M?o&&"object"==typeof o&&o.ref:t,[W,F,G]=(0,g.useIntersection)({rootMargin:"200px"}),H=a.default.useCallback(e=>{(B.current!==q||T.current!==D)&&(G(),B.current=q,T.current=D),W(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[q,U,D,G,W]);a.default.useEffect(()=>{A&&F&&R&&b(A,D,q,{locale:S},N)},[q,D,F,S,R,null==z?void 0:z.locale,A,N]);let K={ref:H,onClick(e){M||"function"!=typeof P||P(e),M&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,r,n,o,i,l,c,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,u.isLocalURL)(r)))return;e.preventDefault();let g=()=>{"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,locale:c,scroll:l}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};s?a.default.startTransition(g):g()}(e,A,D,q,E,O,C,S,N,R)},onMouseEnter(e){M||"function"!=typeof x||x(e),M&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),A&&(R||!N)&&b(A,D,q,{locale:S,priority:!0,bypassPrefetchedCheck:!0},N)},onTouchStart(e){M||"function"!=typeof k||k(e),M&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),A&&(R||!N)&&b(A,D,q,{locale:S,priority:!0,bypassPrefetchedCheck:!0},N)}};if((0,s.isAbsoluteUrl)(q))K.href=q;else if(!M||j||"a"===o.type&&!("href"in o.props)){let e=void 0!==S?S:null==z?void 0:z.locale,t=(null==z?void 0:z.isLocaleDomain)&&(0,h.getDomainLocale)(q,e,null==z?void 0:z.locales,null==z?void 0:z.domainLocales);K.href=t||(0,y.addBasePath)((0,f.addLocale)(q,e,null==z?void 0:z.defaultLocale))}return M?a.default.cloneElement(o,K):a.default.createElement("a",n._({},I,K),r)}),_=w;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2510:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let n=r(959),o=r(3777),i="function"==typeof IntersectionObserver,a=new Map,l=[];function u(e){let{rootRef:t,rootMargin:r,disabled:u}=e,c=u||!i,[s,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(i){if(c||s)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:o},l.push(r),a.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!s){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,r,t,s,d.current]);let g=(0,n.useCallback)(()=>{f(!1)},[]);return[p,s,g]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7682:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:a}=e,l=n||t,u=o||r,c=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&u?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(u,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&o?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},1716:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},8006:function(e,t,r){e.exports=r(7084)},9181:function(e,t,r){e.exports=r(8867)},5947:function(e,t,r){e.exports=r(7845)},1614:function(e,t,r){e.exports=r(8503)},6990:function(e,t,r){"use strict";r.d(t,{Ry:function(){return i},UL:function(){return o}});var n=r(959);function o(e){let t=JSON.stringify({query:e.query,variables:e.variables}),r=n.useMemo(()=>u(t),[t]),[o,i]=n.useState(e.data),[a,l]=n.useState(!1),[c,s]=n.useState(!1),[f,d]=n.useState(!1);return n.useEffect(()=>{l(!0),i(e.data)},[r]),n.useEffect(()=>{if(c){let e=function(e){let t;let r=e.target.getAttributeNames(),n=r.find(e=>e.startsWith("data-tina-field"));if(n)e.preventDefault(),e.stopPropagation(),t=e.target.getAttribute(n);else{let r=e.target.closest("[data-tina-field], [data-tina-field-overlay]");if(r){let n=r.getAttributeNames(),o=n.find(e=>e.startsWith("data-tina-field"));o&&(e.preventDefault(),e.stopPropagation(),t=r.getAttribute(o))}}t&&f&&parent.postMessage({type:"field:selected",fieldName:t},window.location.origin)},t=document.createElement("style");return t.type="text/css",t.textContent=`
        [data-tina-field] {
          outline: 2px dashed rgba(34,150,254,0.5);
          transition: box-shadow ease-out 150ms;
        }
        [data-tina-field]:hover {
          box-shadow: inset 100vi 100vh rgba(34,150,254,0.3);
          outline: 2px solid rgba(34,150,254,1);
          cursor: pointer;
        }
        [data-tina-field-overlay] {
          outline: 2px dashed rgba(34,150,254,0.5);
          position: relative;
        }
        [data-tina-field-overlay]:hover {
          cursor: pointer;
          outline: 2px solid rgba(34,150,254,1);
        }
        [data-tina-field-overlay]::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 20;
          transition: opacity ease-out 150ms;
          background-color: rgba(34,150,254,0.3);
          opacity: 0;
        }
        [data-tina-field-overlay]:hover::after {
          opacity: 1;
        }
      `,document.head.appendChild(t),document.body.classList.add("__tina-quick-editing-enabled"),document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0),document.body.classList.remove("__tina-quick-editing-enabled"),t.remove()}}},[c,f]),n.useEffect(()=>(parent.postMessage({type:"open",...e,id:r},window.location.origin),window.addEventListener("message",e=>{if("quickEditEnabled"===e.data.type&&s(e.data.value),e.data.id===r&&"updateData"===e.data.type){i(e.data.data),d(!0);let t=document.querySelector("[data-tina-field]");t?parent.postMessage({type:"quick-edit",value:!0},window.location.origin):parent.postMessage({type:"quick-edit",value:!1},window.location.origin)}}),()=>{parent.postMessage({type:"close",id:r},window.location.origin)}),[r,s]),{data:o,isClient:a}}let i=(e,t,r)=>{var n,o,i;return e._content_source?t?"number"==typeof r?[null==(o=e._content_source)?void 0:o.queryId,[...e._content_source.path,t,r].join(".")].join("---"):[null==(i=e._content_source)?void 0:i.queryId,[...e._content_source.path,t].join(".")].join("---"):[null==(n=e._content_source)?void 0:n.queryId,e._content_source.path.join(".")].join("---"):""},a=(e,t,r)=>{if(Object.entries(t).forEach(([t,n])=>{if(Array.isArray(n))n.forEach((n,o)=>{l(n)||Array.isArray(n)||a(e,n,[...r,t,o])});else{if(l(n))return;a(e,n,[...r,t])}}),(null==t?void 0:t.type)!=="root")return t._content_source={queryId:e,path:r},t};function l(e){let t=typeof e;return"string"===t||"number"===t||"boolean"===t||"undefined"===t||null==e||e instanceof String||e instanceof Number||e instanceof Boolean}let u=e=>{let t=0;for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);t=(t<<5)-t+n&4294967295}let r=Math.abs(t),n=r.toString(36);return n}},2150:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(959),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){var n,o,i;n=e,o=t,i=r[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function s(e){return t=>n.createElement(f,l({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var r,{attr:o,size:i,title:u}=e,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,a),f=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(o)}}}]);