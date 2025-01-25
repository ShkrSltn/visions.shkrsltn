import './polyfills.server.mjs';
import{Aa as Jt,Ba as Kt,Ca as V,Da as qt,H as jt,Ha as re,I as F,Ja as L,K as A,L as _e,La as Zt,Ma as Qt,N as $,P as g,Q as M,Ra as Be,Rb as an,S as Fe,Sa as $e,Sb as cn,T as zt,Ta as en,Ub as ln,W as pe,ab as tn,bb as We,cb as nn,cc as Ve,dc as fn,ea as H,ec as un,fa as Le,fc as x,ha as Ut,i as Lt,ia as Bt,ja as je,ka as $t,kc as Ye,la as W,na as ze,oa as Ue,ob as rn,oc as dn,qa as Wt,qc as se,rb as sn,sa as ne,sb as on,ta as J,tc as hn,ua as K,va as Vt,wa as Yt,xa as Xt,ya as Gt,za as Ht}from"./chunk-J3AV3E5Q.mjs";import{a as te,b as _t,d as Ft}from"./chunk-X2SEQXRR.mjs";function Xr(e,n,t){return(n=Hr(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function mn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?mn(Object(t),!0).forEach(function(r){Xr(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):mn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Gr(e,n){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Hr(e){var n=Gr(e,"string");return typeof n=="symbol"?n:n+""}var pn=()=>{},mt={},Bn={},$n=null,Wn={mark:pn,measure:pn};try{typeof window<"u"&&(mt=window),typeof document<"u"&&(Bn=document),typeof MutationObserver<"u"&&($n=MutationObserver),typeof performance<"u"&&(Wn=performance)}catch{}var{userAgent:gn=""}=mt.navigator||{},z=mt,p=Bn,yn=$n,ge=Wn,Bo=!!z.document,D=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",Vn=~gn.indexOf("MSIE")||~gn.indexOf("Trident/"),Jr=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Kr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Yn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},qr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Xn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],b="classic",Te="duotone",Zr="sharp",Qr="sharp-duotone",Gn=[b,Te,Zr,Qr],es={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},ts={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ns=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),rs={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},ss=["fak","fa-kit","fakd","fa-kit-duotone"],vn={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},is=["kit"],os={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},as=["fak","fakd"],cs={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},bn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ye={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ls=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],fs=["fak","fa-kit","fakd","fa-kit-duotone"],us={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ds={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},hs={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},qe={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},ms=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ze=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...ls,...ms],ps=["solid","regular","light","thin","duotone","brands"],Hn=[1,2,3,4,5,6,7,8,9,10],gs=Hn.concat([11,12,13,14,15,16,17,18,19,20]),ys=[...Object.keys(hs),...ps,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ye.GROUP,ye.SWAP_OPACITY,ye.PRIMARY,ye.SECONDARY].concat(Hn.map(e=>"".concat(e,"x"))).concat(gs.map(e=>"w-".concat(e))),vs={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},C="___FONT_AWESOME___",Qe=16,Jn="fa",Kn="svg-inline--fa",X="data-fa-i2svg",et="data-fa-pseudo-element",bs="data-fa-pseudo-element-pending",pt="data-prefix",gt="data-icon",wn="fontawesome-i2svg",ws="async",Es=["HTML","HEAD","STYLE","SCRIPT"],qn=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})();function fe(e){return new Proxy(e,{get(n,t){return t in n?n[t]:n[b]}})}var Zn=c({},Yn);Zn[b]=c(c(c(c({},{"fa-duotone":"duotone"}),Yn[b]),vn.kit),vn["kit-duotone"]);var Ts=fe(Zn),tt=c({},rs);tt[b]=c(c(c(c({},{duotone:"fad"}),tt[b]),bn.kit),bn["kit-duotone"]);var En=fe(tt),nt=c({},qe);nt[b]=c(c({},nt[b]),cs.kit);var yt=fe(nt),rt=c({},ds);rt[b]=c(c({},rt[b]),os.kit);var $o=fe(rt),As=Jr,Qn="fa-layers-text",xs=Kr,Is=c({},es),Wo=fe(Is),Os=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Xe=qr,Ps=[...is,...ys],oe=z.FontAwesomeConfig||{};function Ms(e){var n=p.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}function Ss(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(n=>{let[t,r]=n,s=Ss(Ms(t));s!=null&&(oe[r]=s)});var er={styleDefault:"solid",familyDefault:b,cssPrefix:Jn,replacementClass:Kn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};oe.familyPrefix&&(oe.cssPrefix=oe.familyPrefix);var Q=c(c({},er),oe);Q.autoReplaceSvg||(Q.observeMutations=!1);var u={};Object.keys(er).forEach(e=>{Object.defineProperty(u,e,{enumerable:!0,set:function(n){Q[e]=n,ae.forEach(t=>t(u))},get:function(){return Q[e]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(e){Q.cssPrefix=e,ae.forEach(n=>n(u))},get:function(){return Q.cssPrefix}});z.FontAwesomeConfig=u;var ae=[];function ks(e){return ae.push(e),()=>{ae.splice(ae.indexOf(e),1)}}var j=Qe,S={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Rs(e){if(!e||!D)return;let n=p.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;let t=p.head.childNodes,r=null;for(let s=t.length-1;s>-1;s--){let i=t[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return p.head.insertBefore(n,r),e}var Cs="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ce(){let e=12,n="";for(;e-- >0;)n+=Cs[Math.random()*62|0];return n}function ee(e){let n=[];for(let t=(e||[]).length>>>0;t--;)n[t]=e[t];return n}function vt(e){return e.classList?ee(e.classList):(e.getAttribute("class")||"").split(" ").filter(n=>n)}function tr(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ns(e){return Object.keys(e||{}).reduce((n,t)=>n+"".concat(t,'="').concat(tr(e[t]),'" '),"").trim()}function Ae(e){return Object.keys(e||{}).reduce((n,t)=>n+"".concat(t,": ").concat(e[t].trim(),";"),"")}function bt(e){return e.size!==S.size||e.x!==S.x||e.y!==S.y||e.rotate!==S.rotate||e.flipX||e.flipY}function Ds(e){let{transform:n,containerWidth:t,iconWidth:r}=e,s={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),a="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(a)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:f}}function _s(e){let{transform:n,width:t=Qe,height:r=Qe,startCentered:s=!1}=e,i="";return s&&Vn?i+="translate(".concat(n.x/j-t/2,"em, ").concat(n.y/j-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(n.x/j,"em), calc(-50% + ").concat(n.y/j,"em)) "):i+="translate(".concat(n.x/j,"em, ").concat(n.y/j,"em) "),i+="scale(".concat(n.size/j*(n.flipX?-1:1),", ").concat(n.size/j*(n.flipY?-1:1),") "),i+="rotate(".concat(n.rotate,"deg) "),i}var Fs=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function nr(){let e=Jn,n=Kn,t=u.cssPrefix,r=u.replacementClass,s=Fs;if(t!==e||r!==n){let i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(n),"g");s=s.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(a,".".concat(r))}return s}var Tn=!1;function Ge(){u.autoAddCss&&!Tn&&(Rs(nr()),Tn=!0)}var Ls={mixout(){return{dom:{css:nr,insertCss:Ge}}},hooks(){return{beforeDOMElementCreation(){Ge()},beforeI2svg(){Ge()}}}},N=z||{};N[C]||(N[C]={});N[C].styles||(N[C].styles={});N[C].hooks||(N[C].hooks={});N[C].shims||(N[C].shims=[]);var k=N[C],rr=[],sr=function(){p.removeEventListener("DOMContentLoaded",sr),we=1,rr.map(e=>e())},we=!1;D&&(we=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),we||p.addEventListener("DOMContentLoaded",sr));function js(e){D&&(we?setTimeout(e,0):rr.push(e))}function ue(e){let{tag:n,attributes:t={},children:r=[]}=e;return typeof e=="string"?tr(e):"<".concat(n," ").concat(Ns(t),">").concat(r.map(ue).join(""),"</").concat(n,">")}function An(e,n,t){if(e&&e[n]&&e[n][t])return{prefix:n,iconName:t,icon:e[n][t]}}var zs=function(n,t){return function(r,s,i,o){return n.call(t,r,s,i,o)}},He=function(n,t,r,s){var i=Object.keys(n),o=i.length,a=s!==void 0?zs(t,s):t,l,f,d;for(r===void 0?(l=1,d=n[i[0]]):(l=0,d=r);l<o;l++)f=i[l],d=a(d,n[f],f,n);return d};function Us(e){let n=[],t=0,r=e.length;for(;t<r;){let s=e.charCodeAt(t++);if(s>=55296&&s<=56319&&t<r){let i=e.charCodeAt(t++);(i&64512)==56320?n.push(((s&1023)<<10)+(i&1023)+65536):(n.push(s),t--)}else n.push(s)}return n}function st(e){let n=Us(e);return n.length===1?n[0].toString(16):null}function Bs(e,n){let t=e.length,r=e.charCodeAt(n),s;return r>=55296&&r<=56319&&t>n+1&&(s=e.charCodeAt(n+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function xn(e){return Object.keys(e).reduce((n,t)=>{let r=e[t];return!!r.icon?n[r.iconName]=r.icon:n[t]=r,n},{})}function it(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:r=!1}=t,s=xn(n);typeof k.hooks.addPack=="function"&&!r?k.hooks.addPack(e,xn(n)):k.styles[e]=c(c({},k.styles[e]||{}),s),e==="fas"&&it("fa",n)}var{styles:le,shims:$s}=k,ir=Object.keys(yt),Ws=ir.reduce((e,n)=>(e[n]=Object.keys(yt[n]),e),{}),wt=null,or={},ar={},cr={},lr={},fr={};function Vs(e){return~Ps.indexOf(e)}function Ys(e,n){let t=n.split("-"),r=t[0],s=t.slice(1).join("-");return r===e&&s!==""&&!Vs(s)?s:null}var ur=()=>{let e=r=>He(le,(s,i,o)=>(s[o]=He(i,r,{}),s),{});or=e((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),ar=e((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),fr=e((r,s,i)=>{let o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});let n="far"in le||u.autoFetchSvg,t=He($s,(r,s)=>{let i=s[0],o=s[1],a=s[2];return o==="far"&&!n&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});cr=t.names,lr=t.unicodes,wt=xe(u.styleDefault,{family:u.familyDefault})};ks(e=>{wt=xe(e.styleDefault,{family:u.familyDefault})});ur();function Et(e,n){return(or[e]||{})[n]}function Xs(e,n){return(ar[e]||{})[n]}function Y(e,n){return(fr[e]||{})[n]}function dr(e){return cr[e]||{prefix:null,iconName:null}}function Gs(e){let n=lr[e],t=Et("fas",e);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function U(){return wt}var hr=()=>({prefix:null,iconName:null,rest:[]});function Hs(e){let n=b,t=ir.reduce((r,s)=>(r[s]="".concat(u.cssPrefix,"-").concat(s),r),{});return Gn.forEach(r=>{(e.includes(t[r])||e.some(s=>Ws[r].includes(s)))&&(n=r)}),n}function xe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:t=b}=n,r=Ts[t][e];if(t===Te&&!e)return"fad";let s=En[t][e]||En[t][r],i=e in k.styles?e:null;return s||i||null}function Js(e){let n=[],t=null;return e.forEach(r=>{let s=Ys(u.cssPrefix,r);s?t=s:r&&n.push(r)}),{iconName:t,rest:n}}function In(e){return e.sort().filter((n,t,r)=>r.indexOf(n)===t)}function Ie(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:t=!1}=n,r=null,s=Ze.concat(fs),i=In(e.filter(m=>s.includes(m))),o=In(e.filter(m=>!Ze.includes(m))),a=i.filter(m=>(r=m,!Xn.includes(m))),[l=null]=a,f=Hs(i),d=c(c({},Js(o)),{},{prefix:xe(l,{family:f})});return c(c(c({},d),Qs({values:e,family:f,styles:le,config:u,canonical:d,givenPrefix:r})),Ks(t,r,d))}function Ks(e,n,t){let{prefix:r,iconName:s}=t;if(e||!r||!s)return{prefix:r,iconName:s};let i=n==="fa"?dr(s):{},o=Y(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!le.far&&le.fas&&!u.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}var qs=Gn.filter(e=>e!==b||e!==Te),Zs=Object.keys(qe).filter(e=>e!==b).map(e=>Object.keys(qe[e])).flat();function Qs(e){let{values:n,family:t,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=e,a=t===Te,l=n.includes("fa-duotone")||n.includes("fad"),f=o.familyDefault==="duotone",d=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(l||f||d)&&(r.prefix="fad"),(n.includes("fa-brands")||n.includes("fab"))&&(r.prefix="fab"),!r.prefix&&qs.includes(t)&&(Object.keys(i).find(h=>Zs.includes(h))||o.autoFetchSvg)){let h=ns.get(t).defaultShortPrefixId;r.prefix=h,r.iconName=Y(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=U()||"fas"),r}var ot=class{constructor(){this.definitions={}}add(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];let s=t.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=c(c({},this.definitions[i]||{}),s[i]),it(i,s[i]);let o=yt[b][i];o&&it(o,s[i]),ur()})}reset(){this.definitions={}}_pullDefinitions(n,t){let r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(s=>{let{prefix:i,iconName:o,icon:a}=r[s],l=a[2];n[i]||(n[i]={}),l.length>0&&l.forEach(f=>{typeof f=="string"&&(n[i][f]=a)}),n[i][o]=a}),n}},On=[],q={},Z={},ei=Object.keys(Z);function ti(e,n){let{mixoutsTo:t}=n;return On=e,q={},Object.keys(Z).forEach(r=>{ei.indexOf(r)===-1&&delete Z[r]}),On.forEach(r=>{let s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(t[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{t[i]||(t[i]={}),t[i][o]=s[i][o]})}),r.hooks){let i=r.hooks();Object.keys(i).forEach(o=>{q[o]||(q[o]=[]),q[o].push(i[o])})}r.provides&&r.provides(Z)}),t}function at(e,n){for(var t=arguments.length,r=new Array(t>2?t-2:0),s=2;s<t;s++)r[s-2]=arguments[s];return(q[e]||[]).forEach(o=>{n=o.apply(null,[n,...r])}),n}function G(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];(q[e]||[]).forEach(i=>{i.apply(null,t)})}function B(){let e=arguments[0],n=Array.prototype.slice.call(arguments,1);return Z[e]?Z[e].apply(null,n):void 0}function ct(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:n}=e,t=e.prefix||U();if(n)return n=Y(t,n)||n,An(mr.definitions,t,n)||An(k.styles,t,n)}var mr=new ot,ni=()=>{u.autoReplaceSvg=!1,u.observeMutations=!1,G("noAuto")},ri={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(G("beforeI2svg",e),B("pseudoElements2svg",e),B("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:n}=e;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,js(()=>{ii({autoReplaceSvgRoot:n}),G("watch",e)})}},si={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Y(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],t=xe(e[0]);return{prefix:t,iconName:Y(t,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(u.cssPrefix,"-"))>-1||e.match(As))){let n=Ie(e.split(" "),{skipLookups:!0});return{prefix:n.prefix||U(),iconName:Y(n.prefix,n.iconName)||n.iconName}}if(typeof e=="string"){let n=U();return{prefix:n,iconName:Y(n,e)||e}}}},I={noAuto:ni,config:u,dom:ri,parse:si,library:mr,findIconDefinition:ct,toHtml:ue},ii=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:n=p}=e;(Object.keys(k.styles).length>0||u.autoFetchSvg)&&D&&u.autoReplaceSvg&&I.dom.i2svg({node:n})};function Oe(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(t=>ue(t))}}),Object.defineProperty(e,"node",{get:function(){if(!D)return;let t=p.createElement("div");return t.innerHTML=e.html,t.children}}),e}function oi(e){let{children:n,main:t,mask:r,attributes:s,styles:i,transform:o}=e;if(bt(o)&&t.found&&!r.found){let{width:a,height:l}=t,f={x:a/l/2,y:.5};s.style=Ae(c(c({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:n}]}function ai(e){let{prefix:n,iconName:t,children:r,attributes:s,symbol:i}=e,o=i===!0?"".concat(n,"-").concat(u.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},s),{},{id:o}),children:r}]}]}function Tt(e){let{icons:{main:n,mask:t},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:l,titleId:f,extra:d,watchable:m=!1}=e,{width:h,height:v}=t.found?t:n,y=as.includes(r),R=[u.replacementClass,s?"".concat(u.cssPrefix,"-").concat(s):""].filter(_=>d.classes.indexOf(_)===-1).filter(_=>_!==""||!!_).concat(d.classes).join(" "),E={children:[],attributes:c(c({},d.attributes),{},{"data-prefix":r,"data-icon":s,class:R,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(v)})},O=y&&!~d.classes.indexOf("fa-fw")?{width:"".concat(h/v*16*.0625,"em")}:{};m&&(E.attributes[X]=""),a&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(f||ce())},children:[a]}),delete E.attributes.title);let w=c(c({},E),{},{prefix:r,iconName:s,main:n,mask:t,maskId:l,transform:i,symbol:o,styles:c(c({},O),d.styles)}),{children:T,attributes:P}=t.found&&n.found?B("generateAbstractMask",w)||{children:[],attributes:{}}:B("generateAbstractIcon",w)||{children:[],attributes:{}};return w.children=T,w.attributes=P,o?ai(w):oi(w)}function Pn(e){let{content:n,width:t,height:r,transform:s,title:i,extra:o,watchable:a=!1}=e,l=c(c(c({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});a&&(l[X]="");let f=c({},o.styles);bt(s)&&(f.transform=_s({transform:s,startCentered:!0,width:t,height:r}),f["-webkit-transform"]=f.transform);let d=Ae(f);d.length>0&&(l.style=d);let m=[];return m.push({tag:"span",attributes:l,children:[n]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function ci(e){let{content:n,title:t,extra:r}=e,s=c(c(c({},r.attributes),t?{title:t}:{}),{},{class:r.classes.join(" ")}),i=Ae(r.styles);i.length>0&&(s.style=i);let o=[];return o.push({tag:"span",attributes:s,children:[n]}),t&&o.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),o}var{styles:Je}=k;function lt(e){let n=e[0],t=e[1],[r]=e.slice(4),s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(Xe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(Xe.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(Xe.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:n,height:t,icon:s}}var li={found:!1,width:512,height:512};function fi(e,n){!qn&&!u.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(n,'" is missing.'))}function ft(e,n){let t=n;return n==="fa"&&u.styleDefault!==null&&(n=U()),new Promise((r,s)=>{if(t==="fa"){let i=dr(e)||{};e=i.iconName||e,n=i.prefix||n}if(e&&n&&Je[n]&&Je[n][e]){let i=Je[n][e];return r(lt(i))}fi(e,n),r(c(c({},li),{},{icon:u.showMissingIcons&&e?B("missingIconAbstract")||{}:{}}))})}var Mn=()=>{},ut=u.measurePerformance&&ge&&ge.mark&&ge.measure?ge:{mark:Mn,measure:Mn},ie='FA "6.7.1"',ui=e=>(ut.mark("".concat(ie," ").concat(e," begins")),()=>pr(e)),pr=e=>{ut.mark("".concat(ie," ").concat(e," ends")),ut.measure("".concat(ie," ").concat(e),"".concat(ie," ").concat(e," begins"),"".concat(ie," ").concat(e," ends"))},At={begin:ui,end:pr},ve=()=>{};function Sn(e){return typeof(e.getAttribute?e.getAttribute(X):null)=="string"}function di(e){let n=e.getAttribute?e.getAttribute(pt):null,t=e.getAttribute?e.getAttribute(gt):null;return n&&t}function hi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(u.replacementClass)}function mi(){return u.autoReplaceSvg===!0?be.replace:be[u.autoReplaceSvg]||be.replace}function pi(e){return p.createElementNS("http://www.w3.org/2000/svg",e)}function gi(e){return p.createElement(e)}function gr(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:t=e.tag==="svg"?pi:gi}=n;if(typeof e=="string")return p.createTextNode(e);let r=t(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){r.appendChild(gr(i,{ceFn:t}))}),r}function yi(e){let n=" ".concat(e.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var be={replace:function(e){let n=e[0];if(n.parentNode)if(e[1].forEach(t=>{n.parentNode.insertBefore(gr(t),n)}),n.getAttribute(X)===null&&u.keepOriginalSource){let t=p.createComment(yi(n));n.parentNode.replaceChild(t,n)}else n.remove()},nest:function(e){let n=e[0],t=e[1];if(~vt(n).indexOf(u.replacementClass))return be.replace(e);let r=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){let i=t[0].attributes.class.split(" ").reduce((o,a)=>(a===u.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});t[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}let s=t.map(i=>ue(i)).join(`
`);n.setAttribute(X,""),n.innerHTML=s}};function kn(e){e()}function yr(e,n){let t=typeof n=="function"?n:ve;if(e.length===0)t();else{let r=kn;u.mutateApproach===ws&&(r=z.requestAnimationFrame||kn),r(()=>{let s=mi(),i=At.begin("mutate");e.map(s),i(),t()})}}var xt=!1;function vr(){xt=!0}function dt(){xt=!1}var Ee=null;function Rn(e){if(!yn||!u.observeMutations)return;let{treeCallback:n=ve,nodeCallback:t=ve,pseudoElementsCallback:r=ve,observeMutationsRoot:s=p}=e;Ee=new yn(i=>{if(xt)return;let o=U();ee(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Sn(a.addedNodes[0])&&(u.searchPseudoElements&&r(a.target),n(a.target)),a.type==="attributes"&&a.target.parentNode&&u.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Sn(a.target)&&~Os.indexOf(a.attributeName))if(a.attributeName==="class"&&di(a.target)){let{prefix:l,iconName:f}=Ie(vt(a.target));a.target.setAttribute(pt,l||o),f&&a.target.setAttribute(gt,f)}else hi(a.target)&&t(a.target)})}),D&&Ee.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function vi(){Ee&&Ee.disconnect()}function bi(e){let n=e.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce((r,s)=>{let i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),t}function wi(e){let n=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",s=Ie(vt(e));return s.prefix||(s.prefix=U()),n&&t&&(s.prefix=n,s.iconName=t),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=Xs(s.prefix,e.innerText)||Et(s.prefix,st(e.innerText))),!s.iconName&&u.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=e.firstChild.data)),s}function Ei(e){let n=ee(e.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),t=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return u.autoA11y&&(t?n["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(r||ce()):(n["aria-hidden"]="true",n.focusable="false")),n}function Ti(){return{iconName:null,title:null,titleId:null,prefix:null,transform:S,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Cn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:t,prefix:r,rest:s}=wi(e),i=Ei(e),o=at("parseNodeAttributes",{},e),a=n.styleParser?bi(e):[];return c({iconName:t,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:S,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i}},o)}var{styles:Ai}=k;function br(e){let n=u.autoReplaceSvg==="nest"?Cn(e,{styleParser:!1}):Cn(e);return~n.extra.classes.indexOf(Qn)?B("generateLayersText",e,n):B("generateSvgReplacementMutation",e,n)}function xi(){return[...ss,...Ze]}function Nn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();let t=p.documentElement.classList,r=d=>t.add("".concat(wn,"-").concat(d)),s=d=>t.remove("".concat(wn,"-").concat(d)),i=u.autoFetchSvg?xi():Xn.concat(Object.keys(Ai));i.includes("fa")||i.push("fa");let o=[".".concat(Qn,":not([").concat(X,"])")].concat(i.map(d=>".".concat(d,":not([").concat(X,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=ee(e.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();let l=At.begin("onTree"),f=a.reduce((d,m)=>{try{let h=br(m);h&&d.push(h)}catch(h){qn||h.name==="MissingIcon"&&console.error(h)}return d},[]);return new Promise((d,m)=>{Promise.all(f).then(h=>{yr(h,()=>{r("active"),r("complete"),s("pending"),typeof n=="function"&&n(),l(),d()})}).catch(h=>{l(),m(h)})})}function Ii(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;br(e).then(t=>{t&&yr([t],n)})}function Oi(e){return function(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(n||{}).icon?n:ct(n||{}),{mask:s}=t;return s&&(s=(s||{}).icon?s:ct(s||{})),e(r,c(c({},t),{},{mask:s}))}}var Pi=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:t=S,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:l=[],attributes:f={},styles:d={}}=n;if(!e)return;let{prefix:m,iconName:h,icon:v}=e;return Oe(c({type:"icon"},e),()=>(G("beforeDOMElementCreation",{iconDefinition:e,params:n}),u.autoA11y&&(o?f["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(a||ce()):(f["aria-hidden"]="true",f.focusable="false")),Tt({icons:{main:lt(v),mask:s?lt(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:h,transform:c(c({},S),t),symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:f,styles:d,classes:l}})))},Mi={mixout(){return{icon:Oi(Pi)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Nn,e.nodeCallback=Ii,e}}},provides(e){e.i2svg=function(n){let{node:t=p,callback:r=()=>{}}=n;return Nn(t,r)},e.generateSvgReplacementMutation=function(n,t){let{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:l,mask:f,maskId:d,extra:m}=t;return new Promise((h,v)=>{Promise.all([ft(r,o),f.iconName?ft(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[R,E]=y;h([n,Tt({icons:{main:R,mask:E},prefix:o,iconName:r,transform:a,symbol:l,maskId:d,title:s,titleId:i,extra:m,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){let{children:t,attributes:r,main:s,transform:i,styles:o}=n,a=Ae(o);a.length>0&&(r.style=a);let l;return bt(i)&&(l=B("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),t.push(l||s.icon),{children:t,attributes:r}}}},Si={mixout(){return{layer(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:t=[]}=n;return Oe({type:"layer"},()=>{G("beforeDOMElementCreation",{assembler:e,params:n});let r=[];return e(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers"),...t].join(" ")},children:r}]})}}}},ki={mixout(){return{counter(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:t=null,classes:r=[],attributes:s={},styles:i={}}=n;return Oe({type:"counter",content:e},()=>(G("beforeDOMElementCreation",{content:e,params:n}),ci({content:e.toString(),title:t,extra:{attributes:s,styles:i,classes:["".concat(u.cssPrefix,"-layers-counter"),...r]}})))}}}},Ri={mixout(){return{text(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:t=S,title:r=null,classes:s=[],attributes:i={},styles:o={}}=n;return Oe({type:"text",content:e},()=>(G("beforeDOMElementCreation",{content:e,params:n}),Pn({content:e,transform:c(c({},S),t),title:r,extra:{attributes:i,styles:o,classes:["".concat(u.cssPrefix,"-layers-text"),...s]}})))}}},provides(e){e.generateLayersText=function(n,t){let{title:r,transform:s,extra:i}=t,o=null,a=null;if(Vn){let l=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();o=f.width/l,a=f.height/l}return u.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,Pn({content:n.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}},Ci=new RegExp('"',"ug"),Dn=[1105920,1112319],_n=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),ts),vs),us),ht=Object.keys(_n).reduce((e,n)=>(e[n.toLowerCase()]=_n[n],e),{}),Ni=Object.keys(ht).reduce((e,n)=>{let t=ht[n];return e[n]=t[900]||[...Object.entries(t)][0][1],e},{});function Di(e){let n=e.replace(Ci,""),t=Bs(n,0),r=t>=Dn[0]&&t<=Dn[1],s=n.length===2?n[0]===n[1]:!1;return{value:st(s?n[0]:n),isSecondary:r||s}}function _i(e,n){let t=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(n),s=isNaN(r)?"normal":r;return(ht[t]||{})[s]||Ni[t]}function Fn(e,n){let t="".concat(bs).concat(n.replace(":","-"));return new Promise((r,s)=>{if(e.getAttribute(t)!==null)return r();let o=ee(e.children).filter(h=>h.getAttribute(et)===n)[0],a=z.getComputedStyle(e,n),l=a.getPropertyValue("font-family"),f=l.match(xs),d=a.getPropertyValue("font-weight"),m=a.getPropertyValue("content");if(o&&!f)return e.removeChild(o),r();if(f&&m!=="none"&&m!==""){let h=a.getPropertyValue("content"),v=_i(l,d),{value:y,isSecondary:R}=Di(h),E=f[0].startsWith("FontAwesome"),O=Et(v,y),w=O;if(E){let T=Gs(y);T.iconName&&T.prefix&&(O=T.iconName,v=T.prefix)}if(O&&!R&&(!o||o.getAttribute(pt)!==v||o.getAttribute(gt)!==w)){e.setAttribute(t,w),o&&e.removeChild(o);let T=Ti(),{extra:P}=T;P.attributes[et]=n,ft(O,v).then(_=>{let Vr=Tt(c(c({},T),{},{icons:{main:_,mask:hr()},prefix:v,iconName:w,extra:P,watchable:!0})),De=p.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?e.insertBefore(De,e.firstChild):e.appendChild(De),De.outerHTML=Vr.map(Yr=>ue(Yr)).join(`
`),e.removeAttribute(t),r()}).catch(s)}else r()}else r()})}function Fi(e){return Promise.all([Fn(e,"::before"),Fn(e,"::after")])}function Li(e){return e.parentNode!==document.head&&!~Es.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(et)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ln(e){if(D)return new Promise((n,t)=>{let r=ee(e.querySelectorAll("*")).filter(Li).map(Fi),s=At.begin("searchPseudoElements");vr(),Promise.all(r).then(()=>{s(),dt(),n()}).catch(()=>{s(),dt(),t()})})}var ji={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Ln,e}}},provides(e){e.pseudoElements2svg=function(n){let{node:t=p}=n;u.searchPseudoElements&&Ln(t)}}},jn=!1,zi={mixout(){return{dom:{unwatch(){vr(),jn=!0}}}},hooks(){return{bootstrap(){Rn(at("mutationObserverCallbacks",{}))},noAuto(){vi()},watch(e){let{observeMutationsRoot:n}=e;jn?dt():Rn(at("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},zn=e=>{let n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((t,r)=>{let s=r.toLowerCase().split("-"),i=s[0],o=s.slice(1).join("-");if(i&&o==="h")return t.flipX=!0,t;if(i&&o==="v")return t.flipY=!0,t;if(o=parseFloat(o),isNaN(o))return t;switch(i){case"grow":t.size=t.size+o;break;case"shrink":t.size=t.size-o;break;case"left":t.x=t.x-o;break;case"right":t.x=t.x+o;break;case"up":t.y=t.y-o;break;case"down":t.y=t.y+o;break;case"rotate":t.rotate=t.rotate+o;break}return t},n)},Ui={mixout(){return{parse:{transform:e=>zn(e)}}},hooks(){return{parseNodeAttributes(e,n){let t=n.getAttribute("data-fa-transform");return t&&(e.transform=zn(t)),e}}},provides(e){e.generateAbstractTransformGrouping=function(n){let{main:t,transform:r,containerWidth:s,iconWidth:i}=n,o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(a," ").concat(l," ").concat(f)},m={transform:"translate(".concat(i/2*-1," -256)")},h={outer:o,inner:d,path:m};return{tag:"g",attributes:c({},h.outer),children:[{tag:"g",attributes:c({},h.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:c(c({},t.icon.attributes),h.path)}]}]}}}},Ke={x:0,y:0,width:"100%",height:"100%"};function Un(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function Bi(e){return e.tag==="g"?e.children:[e]}var $i={hooks(){return{parseNodeAttributes(e,n){let t=n.getAttribute("data-fa-mask"),r=t?Ie(t.split(" ").map(s=>s.trim())):hr();return r.prefix||(r.prefix=U()),e.mask=r,e.maskId=n.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(n){let{children:t,attributes:r,main:s,mask:i,maskId:o,transform:a}=n,{width:l,icon:f}=s,{width:d,icon:m}=i,h=Ds({transform:a,containerWidth:d,iconWidth:l}),v={tag:"rect",attributes:c(c({},Ke),{},{fill:"white"})},y=f.children?{children:f.children.map(Un)}:{},R={tag:"g",attributes:c({},h.inner),children:[Un(c({tag:f.tag,attributes:c(c({},f.attributes),h.path)},y))]},E={tag:"g",attributes:c({},h.outer),children:[R]},O="mask-".concat(o||ce()),w="clip-".concat(o||ce()),T={tag:"mask",attributes:c(c({},Ke),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,E]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:Bi(m)},T]};return t.push(P,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(O,")")},Ke)}),{children:t,attributes:r}}}},Wi={provides(e){let n=!1;z.matchMedia&&(n=z.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){let t=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:c(c({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let i=c(c({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:c(c({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:c(c({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},i),{},{values:"1;0;1;1;0;1;"})}),t.push(o),t.push({tag:"path",attributes:c(c({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:c(c({},i),{},{values:"1;0;0;0;0;1;"})}]}),n||t.push({tag:"path",attributes:c(c({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},Vi={hooks(){return{parseNodeAttributes(e,n){let t=n.getAttribute("data-fa-symbol"),r=t===null?!1:t===""?!0:t;return e.symbol=r,e}}}},Yi=[Ls,Mi,Si,ki,Ri,ji,zi,Ui,$i,Wi,Vi];ti(Yi,{mixoutsTo:I});var Vo=I.noAuto,wr=I.config,Yo=I.library,Er=I.dom,Tr=I.parse,Xo=I.findIconDefinition,Go=I.toHtml,Ar=I.icon,Ho=I.layer,Xi=I.text,Gi=I.counter;var Me=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(t=>{let r=t.indexOf(":");if(r>0){let s=t.slice(0,r),i=t.slice(r+1).trim();this.addHeaderEntry(s,i)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((t,r)=>{this.addHeaderEntry(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:"a"})}set(n,t){return this.clone({name:n,value:t,op:"s"})}delete(n,t){return this.clone({name:n,value:t,op:"d"})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(t=>{this.headers.set(t,n.headers.get(t)),this.normalizedNames.set(t,n.normalizedNames.get(t))})}clone(n){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){let t=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,t);let s=(n.op==="a"?this.headers.get(t):void 0)||[];s.push(...r),this.headers.set(t,s);break;case"d":let i=n.value;if(!i)this.headers.delete(t),this.normalizedNames.delete(t);else{let o=this.headers.get(t);if(!o)return;o=o.filter(a=>i.indexOf(a)===-1),o.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}break}}addHeaderEntry(n,t){let r=n.toLowerCase();this.maybeSetNormalizedName(n,r),this.headers.has(r)?this.headers.get(r).push(t):this.headers.set(r,[t])}setHeaderEntries(n,t){let r=(Array.isArray(t)?t:[t]).map(i=>i.toString()),s=n.toLowerCase();this.headers.set(s,r),this.maybeSetNormalizedName(n,s)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}};var Rr=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(Rr||{}),It=class{headers;status;statusText;url;ok;type;constructor(n,t=200,r="OK"){this.headers=n.headers||new Me,this.status=n.status!==void 0?n.status:t,this.statusText=n.statusText||r,this.url=n.url||null,this.ok=this.status>=200&&this.status<300}};var Se=class e extends It{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Rr.Response;clone(n={}){return new e({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}};var Ji=new $("");var Ki=new $(""),xr="b",Ir="h",Or="s",Pr="st",Mr="u",Sr="rt",Pe=new $(""),qi=["GET","HEAD"];function Zi(e,n){let v=M(Pe),{isCacheActive:t}=v,r=Ft(v,["isCacheActive"]),{transferCache:s,method:i}=e;if(!t||s===!1||i==="POST"&&!r.includePostRequests&&!s||i!=="POST"&&!qi.includes(i)||!r.includeRequestsWithAuthHeaders&&Qi(e)||r.filter?.(e)===!1)return n(e);let o=M(Ue),a=M(Ki,{optional:!0}),l=se(M(W));if(a&&!l)throw new F(2803,!1);let f=l&&a?ro(e.url,a):e.url,d=to(e,f),m=o.get(d,null),h=r.includeHeaders;if(typeof s=="object"&&s.includeHeaders&&(h=s.includeHeaders),m){let{[xr]:y,[Sr]:R,[Ir]:E,[Or]:O,[Pr]:w,[Mr]:T}=m,P=y;switch(R){case"arraybuffer":P=new TextEncoder().encode(y).buffer;break;case"blob":P=new Blob([y]);break}let _=new Me(E);return Lt(new Se({body:P,headers:_,status:O,statusText:w,url:T}))}return n(e).pipe(jt(y=>{y instanceof Se&&l&&o.set(d,{[xr]:y.body,[Ir]:eo(y.headers,h),[Or]:y.status,[Pr]:y.statusText,[Mr]:f,[Sr]:e.responseType})}))}function Qi(e){return e.headers.has("authorization")||e.headers.has("proxy-authorization")}function eo(e,n){if(!n)return{};let t={};for(let r of n){let s=e.getAll(r);s!==null&&(t[r]=s)}return t}function kr(e){return[...e.keys()].sort().map(n=>`${n}=${e.getAll(n)}`).join("&")}function to(e,n){let{params:t,method:r,responseType:s}=e,i=kr(t),o=e.serializeBody();o instanceof URLSearchParams?o=kr(o):typeof o!="string"&&(o="");let a=[r,s,n,o,i].join("|"),l=no(a);return l}function no(e){let n=0;for(let t of e)n=Math.imul(31,n)+t.charCodeAt(0)<<0;return n+=2147483648,n.toString()}function Cr(e){return[{provide:Pe,useFactory:()=>(Wt("NgHttpTransferCache"),te({isCacheActive:!0},e))},{provide:Ji,useValue:Zi,multi:!0,deps:[Ue,Pe]},{provide:tn,multi:!0,useFactory:()=>{let n=M(We),t=M(Pe);return()=>{n.whenStable().then(()=>{t.isCacheActive=!1})}}}]}function ro(e,n){let t=new URL(e,"resolve://").origin,r=n[t];return r?e.replace(t,r):e}var Pt=class extends un{supportsDOMEvents=!0},Mt=class e extends Pt{static makeCurrent(){fn(new e)}onAndCancel(n,t,r){return n.addEventListener(t,r),()=>{n.removeEventListener(t,r)}}dispatchEvent(n,t){n.dispatchEvent(t)}remove(n){n.remove()}createElement(n,t){return t=t||this.getDefaultDocument(),t.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,t){return t==="window"?window:t==="document"?n:t==="body"?n.body:null}getBaseHref(n){let t=oo();return t==null?null:ao(t)}resetBaseElement(){de=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Ye(document.cookie,n)}},de=null;function oo(){return de=de||document.querySelector("base"),de?de.getAttribute("href"):null}function ao(e){return new URL(e,document.baseURI).pathname}var co=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||e)};static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})(),St=new $(""),jr=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,r){this._zone=r,t.forEach(s=>{s.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,r,s){return this._findPluginFor(r).addEventListener(t,r,s)}getZone(){return this._zone}_findPluginFor(t){let r=this._eventNameToPlugin.get(t);if(r)return r;if(r=this._plugins.find(i=>i.supports(t)),!r)throw new F(5101,!1);return this._eventNameToPlugin.set(t,r),r}static \u0275fac=function(r){return new(r||e)(g(St),g(H))};static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})(),Re=class{_doc;constructor(n){this._doc=n}manager},ke="ng-app-id";function Nr(e){for(let n of e)n.remove()}function Dr(e,n){let t=n.createElement("style");return t.textContent=e,t}function lo(e,n,t,r){let s=e.head?.querySelectorAll(`style[${ke}="${n}"],link[${ke}="${n}"]`);if(s)for(let i of s)i.removeAttribute(ke),i instanceof HTMLLinkElement?r.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&t.set(i.textContent,{usage:0,elements:[i]})}function kt(e,n){let t=n.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",e),t}var zr=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,r,s,i={}){this.doc=t,this.appId=r,this.nonce=s,this.isServer=se(i),lo(t,r,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,r){for(let s of t)this.addUsage(s,this.inline,Dr);r?.forEach(s=>this.addUsage(s,this.external,kt))}removeStyles(t,r){for(let s of t)this.removeUsage(s,this.inline);r?.forEach(s=>this.removeUsage(s,this.external))}addUsage(t,r,s){let i=r.get(t);i?i.usage++:r.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,s(t,this.doc)))})}removeUsage(t,r){let s=r.get(t);s&&(s.usage--,s.usage<=0&&(Nr(s.elements),r.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Nr(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[r,{elements:s}]of this.inline)s.push(this.addElement(t,Dr(r,this.doc)));for(let[r,{elements:s}]of this.external)s.push(this.addElement(t,kt(r,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,r){return this.nonce&&r.setAttribute("nonce",this.nonce),this.isServer&&r.setAttribute(ke,this.appId),t.appendChild(r)}static \u0275fac=function(r){return new(r||e)(g(x),g(je),g(ze,8),g(W))};static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})(),Ot={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Ct=/%COMP%/g,Ur="%COMP%",fo=`_nghost-${Ur}`,uo=`_ngcontent-${Ur}`,ho=!0,mo=new $("",{providedIn:"root",factory:()=>ho});function po(e){return uo.replace(Ct,e)}function go(e){return fo.replace(Ct,e)}function Br(e,n){return n.map(t=>t.replace(Ct,e))}var _r=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,r,s,i,o,a,l,f=null){this.eventManager=t,this.sharedStylesHost=r,this.appId=s,this.removeStylesOnCompDestroy=i,this.doc=o,this.platformId=a,this.ngZone=l,this.nonce=f,this.platformIsServer=se(a),this.defaultRenderer=new he(t,o,l,this.platformIsServer)}createRenderer(t,r){if(!t||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===ne.ShadowDom&&(r=_t(te({},r),{encapsulation:ne.Emulated}));let s=this.getOrCreateRenderer(t,r);return s instanceof Ce?s.applyToHost(t):s instanceof me&&s.applyStyles(),s}getOrCreateRenderer(t,r){let s=this.rendererByCompId,i=s.get(r.id);if(!i){let o=this.doc,a=this.ngZone,l=this.eventManager,f=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,m=this.platformIsServer;switch(r.encapsulation){case ne.Emulated:i=new Ce(l,f,r,this.appId,d,o,a,m);break;case ne.ShadowDom:return new Rt(l,f,t,r,o,a,this.nonce,m);default:i=new me(l,f,r,d,o,a,m);break}s.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}static \u0275fac=function(r){return new(r||e)(g(jr),g(zr),g(je),g(mo),g(x),g(W),g(H),g(ze))};static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})(),he=class{eventManager;doc;ngZone;platformIsServer;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,t,r,s){this.eventManager=n,this.doc=t,this.ngZone=r,this.platformIsServer=s}destroy(){}destroyNode=null;createElement(n,t){return t?this.doc.createElementNS(Ot[t]||t,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,t){(Fr(n)?n.content:n).appendChild(t)}insertBefore(n,t,r){n&&(Fr(n)?n.content:n).insertBefore(t,r)}removeChild(n,t){t.remove()}selectRootElement(n,t){let r=typeof n=="string"?this.doc.querySelector(n):n;if(!r)throw new F(-5104,!1);return t||(r.textContent=""),r}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,t,r,s){if(s){t=s+":"+t;let i=Ot[s];i?n.setAttributeNS(i,t,r):n.setAttribute(t,r)}else n.setAttribute(t,r)}removeAttribute(n,t,r){if(r){let s=Ot[r];s?n.removeAttributeNS(s,t):n.removeAttribute(`${r}:${t}`)}else n.removeAttribute(t)}addClass(n,t){n.classList.add(t)}removeClass(n,t){n.classList.remove(t)}setStyle(n,t,r,s){s&(re.DashCase|re.Important)?n.style.setProperty(t,r,s&re.Important?"important":""):n.style[t]=r}removeStyle(n,t,r){r&re.DashCase?n.style.removeProperty(t):n.style[t]=""}setProperty(n,t,r){n!=null&&(n[t]=r)}setValue(n,t){n.nodeValue=t}listen(n,t,r){if(typeof n=="string"&&(n=Ve().getGlobalEventTarget(this.doc,n),!n))throw new Error(`Unsupported event target ${n} for event ${t}`);return this.eventManager.addEventListener(n,t,this.decoratePreventDefault(r))}decoratePreventDefault(n){return t=>{if(t==="__ngUnwrap__")return n;(this.platformIsServer?this.ngZone.runGuarded(()=>n(t)):n(t))===!1&&t.preventDefault()}}};function Fr(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var Rt=class extends he{sharedStylesHost;hostEl;shadowRoot;constructor(n,t,r,s,i,o,a,l){super(n,i,o,l),this.sharedStylesHost=t,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let f=Br(s.id,s.styles);for(let m of f){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=m,this.shadowRoot.appendChild(h)}let d=s.getExternalStyles?.();if(d)for(let m of d){let h=kt(m,i);a&&h.setAttribute("nonce",a),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,t){return super.appendChild(this.nodeOrShadowRoot(n),t)}insertBefore(n,t,r){return super.insertBefore(this.nodeOrShadowRoot(n),t,r)}removeChild(n,t){return super.removeChild(null,t)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},me=class extends he{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,t,r,s,i,o,a,l){super(n,i,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=s,this.styles=l?Br(l,r.styles):r.styles,this.styleUrls=r.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Ce=class extends me{contentAttr;hostAttr;constructor(n,t,r,s,i,o,a,l){let f=s+"-"+r.id;super(n,t,r,i,o,a,l,f),this.contentAttr=po(f),this.hostAttr=go(f)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,t){let r=super.createElement(n,t);return super.setAttribute(r,this.contentAttr,""),r}},yo=(()=>{class e extends Re{constructor(t){super(t)}supports(t){return!0}addEventListener(t,r,s){return t.addEventListener(r,s,!1),()=>this.removeEventListener(t,r,s)}removeEventListener(t,r,s){return t.removeEventListener(r,s)}static \u0275fac=function(r){return new(r||e)(g(x))};static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})(),Lr=["alt","control","meta","shift"],vo={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},bo={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},wo=(()=>{class e extends Re{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,r,s){let i=e.parseEventName(r),o=e.eventCallback(i.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ve().onAndCancel(t,i.domEventName,o))}static parseEventName(t){let r=t.toLowerCase().split("."),s=r.shift();if(r.length===0||!(s==="keydown"||s==="keyup"))return null;let i=e._normalizeKey(r.pop()),o="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),o="code."),Lr.forEach(f=>{let d=r.indexOf(f);d>-1&&(r.splice(d,1),o+=f+".")}),o+=i,r.length!=0||i.length===0)return null;let l={};return l.domEventName=s,l.fullKey=o,l}static matchEventFullKeyCode(t,r){let s=vo[t.key]||t.key,i="";return r.indexOf("code.")>-1&&(s=t.code,i="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),Lr.forEach(o=>{if(o!==s){let a=bo[o];a(t)&&(i+=o+".")}}),i+=s,i===r)}static eventCallback(t,r,s){return i=>{e.matchEventFullKeyCode(i,t)&&s.runGuarded(()=>r(i))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(r){return new(r||e)(g(x))};static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();function $a(e,n){return an(te({rootComponent:e},Eo(n)))}function Eo(e){return{appProviders:[...Oo,...e?.providers??[]],platformProviders:Io}}function To(){Mt.makeCurrent()}function Ao(){return new Le}function xo(){return Bt(document),document}var Io=[{provide:W,useValue:dn},{provide:$t,useValue:To,multi:!0},{provide:x,useFactory:xo,deps:[]}];var Oo=[{provide:zt,useValue:"root"},{provide:Le,useFactory:Ao,deps:[]},{provide:St,useClass:yo,multi:!0,deps:[x,H,W]},{provide:St,useClass:wo,multi:!0,deps:[x]},_r,zr,jr,{provide:Zt,useExisting:_r},{provide:hn,useClass:co,deps:[]},[]];var Wa=(()=>{class e{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(r){return new(r||e)(g(x))};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Nt=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=A({token:e,factory:function(r){let s=null;return r?s=new(r||e):s=g(Po),s},providedIn:"root"})}return e})(),Po=(()=>{class e extends Nt{_doc;constructor(t){super(),this._doc=t}sanitize(t,r){if(r==null)return null;switch(t){case V.NONE:return r;case V.HTML:return K(r,"HTML")?J(r):Kt(this._doc,String(r)).toString();case V.STYLE:return K(r,"Style")?J(r):r;case V.SCRIPT:if(K(r,"Script"))return J(r);throw new F(5200,!1);case V.URL:return K(r,"URL")?J(r):Jt(String(r));case V.RESOURCE_URL:if(K(r,"ResourceURL"))return J(r);throw new F(5201,!1);default:throw new F(5202,!1)}}bypassSecurityTrustHtml(t){return Vt(t)}bypassSecurityTrustStyle(t){return Yt(t)}bypassSecurityTrustScript(t){return Xt(t)}bypassSecurityTrustUrl(t){return Gt(t)}bypassSecurityTrustResourceUrl(t){return Ht(t)}static \u0275fac=function(r){return new(r||e)(g(x))};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ne=function(e){return e[e.NoHttpTransferCache=0]="NoHttpTransferCache",e[e.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",e[e.I18nSupport=2]="I18nSupport",e[e.EventReplay=3]="EventReplay",e[e.IncrementalHydration=4]="IncrementalHydration",e}(Ne||{});function Mo(e,n=[],t={}){return{\u0275kind:e,\u0275providers:n}}function Va(){return Mo(Ne.EventReplay,cn())}function Ya(...e){let n=[],t=new Set,r=t.has(Ne.HttpTransferCacheOptions);for(let{\u0275providers:s,\u0275kind:i}of e)t.add(i),s.length&&n.push(s);return Fe([[],ln(),t.has(Ne.NoHttpTransferCache)||r?[]:Cr({}),n])}var ko=["*"],Ro=e=>{throw new Error(`Could not find icon with iconName=${e.iconName} and prefix=${e.prefix} in the icon library.`)},Co=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},Wr=e=>e!=null&&(e===90||e===180||e===270||e==="90"||e==="180"||e==="270"),No=e=>{let n=Wr(e.rotate),t={[`fa-${e.animation}`]:e.animation!=null&&!e.animation.startsWith("spin"),"fa-spin":e.animation==="spin"||e.animation==="spin-reverse","fa-spin-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-spin-reverse":e.animation==="spin-reverse"||e.animation==="spin-pulse-reverse","fa-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-fw":e.fixedWidth,"fa-border":e.border,"fa-inverse":e.inverse,"fa-layers-counter":e.counter,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both",[`fa-${e.size}`]:e.size!==null,[`fa-rotate-${e.rotate}`]:n,"fa-rotate-by":e.rotate!=null&&!n,[`fa-pull-${e.pull}`]:e.pull!==null,[`fa-stack-${e.stackItemSize}`]:e.stackItemSize!=null};return Object.keys(t).map(r=>t[r]?r:null).filter(r=>r)},Dt=new WeakSet,$r="fa-auto-css";function Do(e,n){if(!n.autoAddCss||Dt.has(e))return;if(e.getElementById($r)!=null){n.autoAddCss=!1,Dt.add(e);return}let t=e.createElement("style");t.setAttribute("type","text/css"),t.setAttribute("id",$r),t.innerHTML=Er.css();let r=e.head.childNodes,s=null;for(let i=r.length-1;i>-1;i--){let o=r[i],a=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(s=o)}e.head.insertBefore(t,s),n.autoAddCss=!1,Dt.add(e)}var _o=e=>e.prefix!==void 0&&e.iconName!==void 0,Fo=(e,n)=>_o(e)?e:Array.isArray(e)&&e.length===2?{prefix:e[0],iconName:e[1]}:{prefix:n,iconName:e},Lo=(()=>{class e{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(t){wr.autoAddCss=t,this._autoAddCss=t}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),jo=(()=>{class e{constructor(){this.definitions={}}addIcons(...t){for(let r of t){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let s of r.icon[2])typeof s=="string"&&(this.definitions[r.prefix][s]=r)}}addIconPacks(...t){for(let r of t){let s=Object.keys(r).map(i=>r[i]);this.addIcons(...s)}}getIconDefinition(t,r){return t in this.definitions&&r in this.definitions[t]?this.definitions[t][r]:null}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),zo=(()=>{class e{constructor(){this.stackItemSize="1x"}ngOnChanges(t){if("size"in t)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275dir=en({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},features:[pe]})}}return e})(),Uo=(()=>{class e{constructor(t,r){this.renderer=t,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(t){"size"in t&&(t.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${t.size.currentValue}`),t.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${t.size.previousValue}`))}static{this.\u0275fac=function(r){return new(r||e)(L(Qt),L(Ut))}}static{this.\u0275cmp=Be({type:e,selectors:[["fa-stack"]],inputs:{size:"size"},features:[pe],ngContentSelectors:ko,decls:1,vars:0,template:function(r,s){r&1&&(sn(),on(0))},encapsulation:2})}}return e})(),oc=(()=>{class e{constructor(t,r,s,i,o){this.sanitizer=t,this.config=r,this.iconLibrary=s,this.stackItem=i,this.document=M(x),o!=null&&i==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(t){if(this.icon==null&&this.config.fallbackIcon==null){Co();return}if(t){let r=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(r!=null){let s=this.buildParams();Do(this.document,this.config);let i=Ar(r,s);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(t){let r=Fo(t,this.config.defaultPrefix);if("icon"in r)return r;let s=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return s??(Ro(r),null)}buildParams(){let t={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?Tr.transform(this.transform):this.transform,s={};return t.rotate!=null&&!Wr(t.rotate)&&(s["--fa-rotate-angle"]=`${t.rotate}`),{title:this.title,transform:r,classes:No(t),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole},styles:s}}static{this.\u0275fac=function(r){return new(r||e)(L(Nt),L(Lo),L(jo),L(zo,8),L(Uo,8))}}static{this.\u0275cmp=Be({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,s){r&2&&(rn("innerHTML",s.renderedIconHTML,qt),nn("title",s.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},features:[pe],decls:0,vars:0,template:function(r,s){},encapsulation:2})}}return e})();var ac=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=$e({type:e})}static{this.\u0275inj=_e({})}}return e})();export{Ji as a,Mt as b,St as c,Re as d,_r as e,$a as f,Wa as g,Va as h,Ya as i,jo as j,oc as k,ac as l};
