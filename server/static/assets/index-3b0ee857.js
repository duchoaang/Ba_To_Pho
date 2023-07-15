import{c as Kn,j as m,b as Ae,d as Ra,r as N,L as Ke,w as za,e as Zs}from"./index-3b93fbf4.js";import{f as Js}from"./ButtonBase-18bcf650.js";import{g as Ln}from"./get-2920c78f.js";import{p as Ha,P as L,M as Qs,a as ht,L as Cn}from"./MenuItem-3652659f.js";import{r as Zn,i as Jn}from"./createSvgIcon-5a8aadc8.js";import{p as Mt}from"./post-7c4aaeec.js";import{B as el,e as tl,$ as nl,G as rl,E as $t,z as Bt}from"./mdb-react-ui-kit.esm-2f3c518a.js";import{M as al}from"./IconButton-7699871e.js";import{A as Sn}from"./Avatar-ad5c2162.js";import{M as il,D as ol}from"./listItemTextClasses-dcb2abd8.js";import{B as oa}from"./Button-f2040593.js";import"./useTheme-cb0a29a0.js";import"./useId-58975782.js";import"./createSvgIcon-152d8dc1.js";import"./mergeSlotProps-fb0988ec.js";import"./extendSxProp-a5e8f48f.js";import"./Paper-a266f8be.js";const sl="_wrapper_1vty4_1",ll="_logo_1vty4_9",cl="_menu_1vty4_14",ul="_icon_1vty4_18",fl="_actions_1vty4_44",dl="_show_1vty4_58",ml="_cancel_1vty4_73",pl="_user_controller_1vty4_80",hl="_menu_controller_1vty4_83",gl="_c_profile_1vty4_93",bl="_loading_1vty4_101",vl="_spinner_1vty4_1",yl="_register_1vty4_114",wl="_user_avatar_1vty4_124",xl="_search_1vty4_132",kl={wrapper:sl,logo:ll,menu:cl,icon:ul,"sub-menu":"_sub-menu_1vty4_22",actions:fl,"modal-wrapper":"_modal-wrapper_1vty4_48",show:dl,"modal-inner":"_modal-inner_1vty4_62",cancel:ml,user_controller:pl,menu_controller:hl,c_profile:gl,loading:bl,spinner:vl,register:yl,user_avatar:wl,search:xl},Cl="_wrapper_1fo58_1",Sl={wrapper:Cl},Ol=Kn.bind(Sl),On=({children:t,className:r,leftIcon:a,rightIcon:i,...s})=>m.jsxs("button",{className:Ol("wrapper","d-inline-flex align-items-center justify-content-center rounded",r),...s,children:[a??null,m.jsx("span",{className:(a?"ms-2":"")+(i?"me-2":""),children:t}),i??null]});var Ua={exports:{}};/*!
* sweetalert2 v11.7.12
* Released under the MIT License.
*/(function(t,r){(function(a,i){t.exports=i()})(Ae,function(){const i={},s=()=>{i.previousActiveElement instanceof HTMLElement?(i.previousActiveElement.focus(),i.previousActiveElement=null):document.body&&document.body.focus()},u=e=>new Promise(n=>{if(!e)return n();const o=window.scrollX,c=window.scrollY;i.restoreFocusTimeout=setTimeout(()=>{s(),n()},100),window.scrollTo(o,c)});var l={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const d="swal2-",f=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"].reduce((e,n)=>(e[n]=d+n,e),{}),b=["success","warning","info","question","error"].reduce((e,n)=>(e[n]=d+n,e),{}),w="SweetAlert2:",k=e=>e.charAt(0).toUpperCase()+e.slice(1),O=e=>{console.warn(`${w} ${typeof e=="object"?e.join(" "):e}`)},B=e=>{console.error(`${w} ${e}`)},I=[],H=e=>{I.includes(e)||(I.push(e),O(e))},T=(e,n)=>{H(`"${e}" is deprecated and will be removed in the next major release. Please use "${n}" instead.`)},D=e=>typeof e=="function"?e():e,z=e=>e&&typeof e.toPromise=="function",F=e=>z(e)?e.toPromise():Promise.resolve(e),j=e=>e&&Promise.resolve(e)===e,A=()=>document.body.querySelector(`.${f.container}`),_=e=>{const n=A();return n?n.querySelector(e):null},S=e=>_(`.${e}`),y=()=>S(f.popup),J=()=>S(f.icon),ne=()=>S(f["icon-content"]),oe=()=>S(f.title),W=()=>S(f["html-container"]),M=()=>S(f.image),le=()=>S(f["progress-steps"]),Me=()=>S(f["validation-message"]),ce=()=>_(`.${f.actions} .${f.confirm}`),ue=()=>_(`.${f.actions} .${f.cancel}`),be=()=>_(`.${f.actions} .${f.deny}`),At=()=>S(f["input-label"]),Se=()=>_(`.${f.loader}`),ye=()=>S(f.actions),_t=()=>S(f.footer),Oe=()=>S(f["timer-progress-bar"]),it=()=>S(f.close),Ee=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,ot=()=>{const e=y().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((h,E)=>{const R=parseInt(h.getAttribute("tabindex")),K=parseInt(E.getAttribute("tabindex"));return R>K?1:R<K?-1:0}),o=y().querySelectorAll(Ee),c=Array.from(o).filter(h=>h.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(c))].filter(h=>fe(h))},st=()=>pe(document.body,f.shown)&&!pe(document.body,f["toast-shown"])&&!pe(document.body,f["no-backdrop"]),He=()=>y()&&pe(y(),f.toast),un=()=>y().hasAttribute("data-loading"),re=(e,n)=>{if(e.textContent="",n){const c=new DOMParser().parseFromString(n,"text/html");Array.from(c.querySelector("head").childNodes).forEach(h=>{e.appendChild(h)}),Array.from(c.querySelector("body").childNodes).forEach(h=>{h instanceof HTMLVideoElement||h instanceof HTMLAudioElement?e.appendChild(h.cloneNode(!0)):e.appendChild(h)})}},pe=(e,n)=>{if(!n)return!1;const o=n.split(/\s+/);for(let c=0;c<o.length;c++)if(!e.classList.contains(o[c]))return!1;return!0},fn=(e,n)=>{Array.from(e.classList).forEach(o=>{!Object.values(f).includes(o)&&!Object.values(b).includes(o)&&!Object.values(n.showClass).includes(o)&&e.classList.remove(o)})},ae=(e,n,o)=>{if(fn(e,n),n.customClass&&n.customClass[o]){if(typeof n.customClass[o]!="string"&&!n.customClass[o].forEach){O(`Invalid type of customClass.${o}! Expected string or iterable object, got "${typeof n.customClass[o]}"`);return}$(e,n.customClass[o])}},lt=(e,n)=>{if(!n)return null;switch(n){case"select":case"textarea":case"file":return e.querySelector(`.${f.popup} > .${f[n]}`);case"checkbox":return e.querySelector(`.${f.popup} > .${f.checkbox} input`);case"radio":return e.querySelector(`.${f.popup} > .${f.radio} input:checked`)||e.querySelector(`.${f.popup} > .${f.radio} input:first-child`);case"range":return e.querySelector(`.${f.popup} > .${f.range} input`);default:return e.querySelector(`.${f.popup} > .${f.input}`)}},ct=e=>{if(e.focus(),e.type!=="file"){const n=e.value;e.value="",e.value=n}},ut=(e,n,o)=>{!e||!n||(typeof n=="string"&&(n=n.split(/\s+/).filter(Boolean)),n.forEach(c=>{Array.isArray(e)?e.forEach(h=>{o?h.classList.add(c):h.classList.remove(c)}):o?e.classList.add(c):e.classList.remove(c)}))},$=(e,n)=>{ut(e,n,!0)},me=(e,n)=>{ut(e,n,!1)},P=(e,n)=>{const o=Array.from(e.children);for(let c=0;c<o.length;c++){const h=o[c];if(h instanceof HTMLElement&&pe(h,n))return h}},V=(e,n,o)=>{o===`${parseInt(o)}`&&(o=parseInt(o)),o||parseInt(o)===0?e.style[n]=typeof o=="number"?`${o}px`:o:e.style.removeProperty(n)},q=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";e&&(e.style.display=n)},te=e=>{e&&(e.style.display="none")},br=(e,n,o,c)=>{const h=e.querySelector(n);h&&(h.style[o]=c)},jt=function(e,n){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";n?q(e,o):te(e)},fe=e=>!!(e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),Ai=()=>!fe(ce())&&!fe(be())&&!fe(ue()),vr=e=>e.scrollHeight>e.clientHeight,yr=e=>{const n=window.getComputedStyle(e),o=parseFloat(n.getPropertyValue("animation-duration")||"0"),c=parseFloat(n.getPropertyValue("transition-duration")||"0");return o>0||c>0},dn=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const o=Oe();fe(o)&&(n&&(o.style.transition="none",o.style.width="100%"),setTimeout(()=>{o.style.transition=`width ${e/1e3}s linear`,o.style.width="0%"},10))},_i=()=>{const e=Oe(),n=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition"),e.style.width="100%";const o=parseInt(window.getComputedStyle(e).width),c=n/o*100;e.style.width=`${c}%`},wr=()=>typeof window>"u"||typeof document>"u",ji=`
 <div aria-labelledby="${f.title}" aria-describedby="${f["html-container"]}" class="${f.popup}" tabindex="-1">
   <button type="button" class="${f.close}"></button>
   <ul class="${f["progress-steps"]}"></ul>
   <div class="${f.icon}"></div>
   <img class="${f.image}" />
   <h2 class="${f.title}" id="${f.title}"></h2>
   <div class="${f["html-container"]}" id="${f["html-container"]}"></div>
   <input class="${f.input}" />
   <input type="file" class="${f.file}" />
   <div class="${f.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${f.select}"></select>
   <div class="${f.radio}"></div>
   <label for="${f.checkbox}" class="${f.checkbox}">
     <input type="checkbox" />
     <span class="${f.label}"></span>
   </label>
   <textarea class="${f.textarea}"></textarea>
   <div class="${f["validation-message"]}" id="${f["validation-message"]}"></div>
   <div class="${f.actions}">
     <div class="${f.loader}"></div>
     <button type="button" class="${f.confirm}"></button>
     <button type="button" class="${f.deny}"></button>
     <button type="button" class="${f.cancel}"></button>
   </div>
   <div class="${f.footer}"></div>
   <div class="${f["timer-progress-bar-container"]}">
     <div class="${f["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),Ii=()=>{const e=A();return e?(e.remove(),me([document.documentElement,document.body],[f["no-backdrop"],f["toast-shown"],f["has-column"]]),!0):!1},$e=()=>{i.currentInstance.resetValidationMessage()},Ti=()=>{const e=y(),n=P(e,f.input),o=P(e,f.file),c=e.querySelector(`.${f.range} input`),h=e.querySelector(`.${f.range} output`),E=P(e,f.select),R=e.querySelector(`.${f.checkbox} input`),K=P(e,f.textarea);n.oninput=$e,o.onchange=$e,E.onchange=$e,R.onchange=$e,K.oninput=$e,c.oninput=()=>{$e(),h.value=c.value},c.onchange=()=>{$e(),h.value=c.value}},Li=e=>typeof e=="string"?document.querySelector(e):e,Ni=e=>{const n=y();n.setAttribute("role",e.toast?"alert":"dialog"),n.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||n.setAttribute("aria-modal","true")},Mi=e=>{window.getComputedStyle(e).direction==="rtl"&&$(A(),f.rtl)},$i=e=>{const n=Ii();if(wr()){B("SweetAlert2 requires document to initialize");return}const o=document.createElement("div");o.className=f.container,n&&$(o,f["no-transition"]),re(o,ji);const c=Li(e.target);c.appendChild(o),Ni(e),Mi(c),Ti()},mn=(e,n)=>{e instanceof HTMLElement?n.appendChild(e):typeof e=="object"?Bi(e,n):e&&re(n,e)},Bi=(e,n)=>{e.jquery?Di(n,e):re(n,e.toString())},Di=(e,n)=>{if(e.textContent="",0 in n)for(let o=0;o in n;o++)e.appendChild(n[o].cloneNode(!0));else e.appendChild(n.cloneNode(!0))},ft=(()=>{if(wr())return!1;const e=document.createElement("div"),n={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const o in n)if(Object.prototype.hasOwnProperty.call(n,o)&&typeof e.style[o]<"u")return n[o];return!1})(),Fi=(e,n)=>{const o=ye(),c=Se();!n.showConfirmButton&&!n.showDenyButton&&!n.showCancelButton?te(o):q(o),ae(o,n,"actions"),Ri(o,c,n),re(c,n.loaderHtml),ae(c,n,"loader")};function Ri(e,n,o){const c=ce(),h=be(),E=ue();pn(c,"confirm",o),pn(h,"deny",o),pn(E,"cancel",o),zi(c,h,E,o),o.reverseButtons&&(o.toast?(e.insertBefore(E,c),e.insertBefore(h,c)):(e.insertBefore(E,n),e.insertBefore(h,n),e.insertBefore(c,n)))}function zi(e,n,o,c){if(!c.buttonsStyling){me([e,n,o],f.styled);return}$([e,n,o],f.styled),c.confirmButtonColor&&(e.style.backgroundColor=c.confirmButtonColor,$(e,f["default-outline"])),c.denyButtonColor&&(n.style.backgroundColor=c.denyButtonColor,$(n,f["default-outline"])),c.cancelButtonColor&&(o.style.backgroundColor=c.cancelButtonColor,$(o,f["default-outline"]))}function pn(e,n,o){jt(e,o[`show${k(n)}Button`],"inline-block"),re(e,o[`${n}ButtonText`]),e.setAttribute("aria-label",o[`${n}ButtonAriaLabel`]),e.className=f[n],ae(e,o,`${n}Button`),$(e,o[`${n}ButtonClass`])}const Hi=(e,n)=>{const o=it();o&&(re(o,n.closeButtonHtml||""),ae(o,n,"closeButton"),jt(o,n.showCloseButton),o.setAttribute("aria-label",n.closeButtonAriaLabel||""))},Ui=(e,n)=>{const o=A();o&&(Yi(o,n.backdrop),Wi(o,n.position),Vi(o,n.grow),ae(o,n,"container"))};function Yi(e,n){typeof n=="string"?e.style.background=n:n||$([document.documentElement,document.body],f["no-backdrop"])}function Wi(e,n){n in f?$(e,f[n]):(O('The "position" parameter is not valid, defaulting to "center"'),$(e,f.center))}function Vi(e,n){if(n&&typeof n=="string"){const o=`grow-${n}`;o in f&&$(e,f[o])}}const qi=["input","file","range","select","radio","checkbox","textarea"],Gi=(e,n)=>{const o=y(),c=l.innerParams.get(e),h=!c||n.input!==c.input;qi.forEach(E=>{const R=P(o,f[E]);Zi(E,n.inputAttributes),R.className=f[E],h&&te(R)}),n.input&&(h&&Xi(n),Ji(n))},Xi=e=>{if(!se[e.input]){B(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${e.input}"`);return}const n=xr(e.input),o=se[e.input](n,e);q(n),e.inputAutoFocus&&setTimeout(()=>{ct(o)})},Ki=e=>{for(let n=0;n<e.attributes.length;n++){const o=e.attributes[n].name;["type","value","style"].includes(o)||e.removeAttribute(o)}},Zi=(e,n)=>{const o=lt(y(),e);if(o){Ki(o);for(const c in n)o.setAttribute(c,n[c])}},Ji=e=>{const n=xr(e.input);typeof e.customClass=="object"&&$(n,e.customClass.input)},hn=(e,n)=>{(!e.placeholder||n.inputPlaceholder)&&(e.placeholder=n.inputPlaceholder)},dt=(e,n,o)=>{if(o.inputLabel){e.id=f.input;const c=document.createElement("label"),h=f["input-label"];c.setAttribute("for",e.id),c.className=h,typeof o.customClass=="object"&&$(c,o.customClass.inputLabel),c.innerText=o.inputLabel,n.insertAdjacentElement("beforebegin",c)}},xr=e=>P(y(),f[e]||f.input),It=(e,n)=>{["string","number"].includes(typeof n)?e.value=`${n}`:j(n)||O(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof n}"`)},se={};se.text=se.email=se.password=se.number=se.tel=se.url=(e,n)=>(It(e,n.inputValue),dt(e,e,n),hn(e,n),e.type=n.input,e),se.file=(e,n)=>(dt(e,e,n),hn(e,n),e),se.range=(e,n)=>{const o=e.querySelector("input"),c=e.querySelector("output");return It(o,n.inputValue),o.type=n.input,It(c,n.inputValue),dt(o,e,n),e},se.select=(e,n)=>{if(e.textContent="",n.inputPlaceholder){const o=document.createElement("option");re(o,n.inputPlaceholder),o.value="",o.disabled=!0,o.selected=!0,e.appendChild(o)}return dt(e,e,n),e},se.radio=e=>(e.textContent="",e),se.checkbox=(e,n)=>{const o=lt(y(),"checkbox");o.value="1",o.id=f.checkbox,o.checked=!!n.inputValue;const c=e.querySelector("span");return re(c,n.inputPlaceholder),o},se.textarea=(e,n)=>{It(e,n.inputValue),hn(e,n),dt(e,e,n);const o=c=>parseInt(window.getComputedStyle(c).marginLeft)+parseInt(window.getComputedStyle(c).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const c=parseInt(window.getComputedStyle(y()).width),h=()=>{const E=e.offsetWidth+o(e);E>c?y().style.width=`${E}px`:y().style.width=null};new MutationObserver(h).observe(e,{attributes:!0,attributeFilter:["style"]})}}),e};const Qi=(e,n)=>{const o=W();o&&(ae(o,n,"htmlContainer"),n.html?(mn(n.html,o),q(o,"block")):n.text?(o.textContent=n.text,q(o,"block")):te(o),Gi(e,n))},eo=(e,n)=>{const o=_t();o&&(jt(o,n.footer),n.footer&&mn(n.footer,o),ae(o,n,"footer"))},to=(e,n)=>{const o=l.innerParams.get(e),c=J();if(o&&n.icon===o.icon){Cr(c,n),kr(c,n);return}if(!n.icon&&!n.iconHtml){te(c);return}if(n.icon&&Object.keys(b).indexOf(n.icon)===-1){B(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${n.icon}"`),te(c);return}q(c),Cr(c,n),kr(c,n),$(c,n.showClass.icon)},kr=(e,n)=>{for(const o in b)n.icon!==o&&me(e,b[o]);$(e,b[n.icon]),io(e,n),no(),ae(e,n,"icon")},no=()=>{const e=y(),n=window.getComputedStyle(e).getPropertyValue("background-color"),o=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let c=0;c<o.length;c++)o[c].style.backgroundColor=n},ro=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,ao=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Cr=(e,n)=>{let o=e.innerHTML,c;n.iconHtml?c=Sr(n.iconHtml):n.icon==="success"?(c=ro,o=o.replace(/ style=".*?"/g,"")):n.icon==="error"?c=ao:c=Sr({question:"?",warning:"!",info:"i"}[n.icon]),o.trim()!==c.trim()&&re(e,c)},io=(e,n)=>{if(n.iconColor){e.style.color=n.iconColor,e.style.borderColor=n.iconColor;for(const o of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])br(e,o,"backgroundColor",n.iconColor);br(e,".swal2-success-ring","borderColor",n.iconColor)}},Sr=e=>`<div class="${f["icon-content"]}">${e}</div>`,oo=(e,n)=>{const o=M();if(o){if(!n.imageUrl){te(o);return}q(o,""),o.setAttribute("src",n.imageUrl),o.setAttribute("alt",n.imageAlt||""),V(o,"width",n.imageWidth),V(o,"height",n.imageHeight),o.className=f.image,ae(o,n,"image")}},so=(e,n)=>{const o=A(),c=y();if(!(!o||!c)){if(n.toast){V(o,"width",n.width),c.style.width="100%";const h=Se();h&&c.insertBefore(h,J())}else V(c,"width",n.width);V(c,"padding",n.padding),n.color&&(c.style.color=n.color),n.background&&(c.style.background=n.background),te(Me()),lo(c,n)}},lo=(e,n)=>{const o=n.showClass||{};e.className=`${f.popup} ${fe(e)?o.popup:""}`,n.toast?($([document.documentElement,document.body],f["toast-shown"]),$(e,f.toast)):$(e,f.modal),ae(e,n,"popup"),typeof n.customClass=="string"&&$(e,n.customClass),n.icon&&$(e,f[`icon-${n.icon}`])},co=(e,n)=>{const o=le();if(!o)return;const{progressSteps:c,currentProgressStep:h}=n;if(!c||c.length===0||h===void 0){te(o);return}q(o),o.textContent="",h>=c.length&&O("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),c.forEach((E,R)=>{const K=uo(E);if(o.appendChild(K),R===h&&$(K,f["active-progress-step"]),R!==c.length-1){const Q=fo(n);o.appendChild(Q)}})},uo=e=>{const n=document.createElement("li");return $(n,f["progress-step"]),re(n,e),n},fo=e=>{const n=document.createElement("li");return $(n,f["progress-step-line"]),e.progressStepsDistance&&V(n,"width",e.progressStepsDistance),n},mo=(e,n)=>{const o=oe();o&&(jt(o,n.title||n.titleText,"block"),n.title&&mn(n.title,o),n.titleText&&(o.innerText=n.titleText),ae(o,n,"title"))},Or=(e,n)=>{so(e,n),Ui(e,n),co(e,n),to(e,n),oo(e,n),mo(e,n),Hi(e,n),Qi(e,n),Fi(e,n),eo(e,n);const o=y();typeof n.didRender=="function"&&o&&n.didRender(o)},po=()=>fe(y()),Er=()=>ce()&&ce().click(),ho=()=>be()&&be().click(),go=()=>ue()&&ue().click(),Ue=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Pr=e=>{e.keydownTarget&&e.keydownHandlerAdded&&(e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1)},bo=(e,n,o,c)=>{Pr(n),o.toast||(n.keydownHandler=h=>yo(e,h,c),n.keydownTarget=o.keydownListenerCapture?window:y(),n.keydownListenerCapture=o.keydownListenerCapture,n.keydownTarget.addEventListener("keydown",n.keydownHandler,{capture:n.keydownListenerCapture}),n.keydownHandlerAdded=!0)},gn=(e,n)=>{const o=ot();if(o.length){e=e+n,e===o.length?e=0:e===-1&&(e=o.length-1),o[e].focus();return}y().focus()},Ar=["ArrowRight","ArrowDown"],vo=["ArrowLeft","ArrowUp"],yo=(e,n,o)=>{const c=l.innerParams.get(e);c&&(n.isComposing||n.keyCode===229||(c.stopKeydownPropagation&&n.stopPropagation(),n.key==="Enter"?wo(e,n,c):n.key==="Tab"?xo(n):[...Ar,...vo].includes(n.key)?ko(n.key):n.key==="Escape"&&Co(n,c,o)))},wo=(e,n,o)=>{if(D(o.allowEnterKey)&&n.target&&e.getInput()&&n.target instanceof HTMLElement&&n.target.outerHTML===e.getInput().outerHTML){if(["textarea","file"].includes(o.input))return;Er(),n.preventDefault()}},xo=e=>{const n=e.target,o=ot();let c=-1;for(let h=0;h<o.length;h++)if(n===o[h]){c=h;break}e.shiftKey?gn(c,-1):gn(c,1),e.stopPropagation(),e.preventDefault()},ko=e=>{const n=ce(),o=be(),c=ue(),h=[n,o,c];if(document.activeElement instanceof HTMLElement&&!h.includes(document.activeElement))return;const E=Ar.includes(e)?"nextElementSibling":"previousElementSibling";let R=document.activeElement;for(let K=0;K<ye().children.length;K++){if(R=R[E],!R)return;if(R instanceof HTMLButtonElement&&fe(R))break}R instanceof HTMLButtonElement&&R.focus()},Co=(e,n,o)=>{D(n.allowEscapeKey)&&(e.preventDefault(),o(Ue.esc))};var mt={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const So=()=>{Array.from(document.body.children).forEach(n=>{n===A()||n.contains(A())||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},_r=()=>{Array.from(document.body.children).forEach(n=>{n.hasAttribute("data-previous-aria-hidden")?(n.setAttribute("aria-hidden",n.getAttribute("data-previous-aria-hidden")||""),n.removeAttribute("data-previous-aria-hidden")):n.removeAttribute("aria-hidden")})},Oo=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!pe(document.body,f.iosfix)){const n=document.body.scrollTop;document.body.style.top=`${n*-1}px`,$(document.body,f.iosfix),Po(),Eo()}},Eo=()=>{const e=navigator.userAgent,n=!!e.match(/iPad/i)||!!e.match(/iPhone/i),o=!!e.match(/WebKit/i);n&&o&&!e.match(/CriOS/i)&&y().scrollHeight>window.innerHeight-44&&(A().style.paddingBottom="44px")},Po=()=>{const e=A();let n;e.ontouchstart=o=>{n=Ao(o)},e.ontouchmove=o=>{n&&(o.preventDefault(),o.stopPropagation())}},Ao=e=>{const n=e.target,o=A();return _o(e)||jo(e)?!1:n===o||!vr(o)&&n instanceof HTMLElement&&n.tagName!=="INPUT"&&n.tagName!=="TEXTAREA"&&!(vr(W())&&W().contains(n))},_o=e=>e.touches&&e.touches.length&&e.touches[0].touchType==="stylus",jo=e=>e.touches&&e.touches.length>1,Io=()=>{if(pe(document.body,f.iosfix)){const e=parseInt(document.body.style.top,10);me(document.body,f.iosfix),document.body.style.top="",document.body.scrollTop=e*-1}},To=()=>{const e=document.createElement("div");e.className=f["scrollbar-measure"],document.body.appendChild(e);const n=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),n};let Ye=null;const Lo=()=>{Ye===null&&document.body.scrollHeight>window.innerHeight&&(Ye=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Ye+To()}px`)},No=()=>{Ye!==null&&(document.body.style.paddingRight=`${Ye}px`,Ye=null)};function jr(e,n,o,c){He()?Tr(e,c):(u(o).then(()=>Tr(e,c)),Pr(i)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(n.setAttribute("style","display:none !important"),n.removeAttribute("class"),n.innerHTML=""):n.remove(),st()&&(No(),Io(),_r()),Mo()}function Mo(){me([document.documentElement,document.body],[f.shown,f["height-auto"],f["no-backdrop"],f["toast-shown"]])}function Pe(e){e=Bo(e);const n=mt.swalPromiseResolve.get(this),o=$o(this);this.isAwaitingPromise?e.isDismissed||(pt(this),n(e)):o&&n(e)}const $o=e=>{const n=y();if(!n)return!1;const o=l.innerParams.get(e);if(!o||pe(n,o.hideClass.popup))return!1;me(n,o.showClass.popup),$(n,o.hideClass.popup);const c=A();return me(c,o.showClass.backdrop),$(c,o.hideClass.backdrop),Do(e,n,o),!0};function Ir(e){const n=mt.swalPromiseReject.get(this);pt(this),n&&n(e)}const pt=e=>{e.isAwaitingPromise&&(delete e.isAwaitingPromise,l.innerParams.get(e)||e._destroy())},Bo=e=>typeof e>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},e),Do=(e,n,o)=>{const c=A(),h=ft&&yr(n);typeof o.willClose=="function"&&o.willClose(n),h?Fo(e,n,c,o.returnFocus,o.didClose):jr(e,c,o.returnFocus,o.didClose)},Fo=(e,n,o,c,h)=>{i.swalCloseEventFinishedCallback=jr.bind(null,e,o,c,h),n.addEventListener(ft,function(E){E.target===n&&(i.swalCloseEventFinishedCallback(),delete i.swalCloseEventFinishedCallback)})},Tr=(e,n)=>{setTimeout(()=>{typeof n=="function"&&n.bind(e.params)(),e._destroy&&e._destroy()})},We=e=>{let n=y();n||new Nt,n=y();const o=Se();He()?te(J()):Ro(n,e),q(o),n.setAttribute("data-loading","true"),n.setAttribute("aria-busy","true"),n.focus()},Ro=(e,n)=>{const o=ye(),c=Se();!n&&fe(ce())&&(n=ce()),q(o),n&&(te(n),c.setAttribute("data-button-to-replace",n.className)),c.parentNode.insertBefore(c,n),$([e,o],f.loading)},zo=(e,n)=>{n.input==="select"||n.input==="radio"?Vo(e,n):["text","email","number","tel","textarea"].includes(n.input)&&(z(n.inputValue)||j(n.inputValue))&&(We(ce()),qo(e,n))},Ho=(e,n)=>{const o=e.getInput();if(!o)return null;switch(n.input){case"checkbox":return Uo(o);case"radio":return Yo(o);case"file":return Wo(o);default:return n.inputAutoTrim?o.value.trim():o.value}},Uo=e=>e.checked?1:0,Yo=e=>e.checked?e.value:null,Wo=e=>e.files.length?e.getAttribute("multiple")!==null?e.files:e.files[0]:null,Vo=(e,n)=>{const o=y(),c=h=>{Go[n.input](o,bn(h),n)};z(n.inputOptions)||j(n.inputOptions)?(We(ce()),F(n.inputOptions).then(h=>{e.hideLoading(),c(h)})):typeof n.inputOptions=="object"?c(n.inputOptions):B(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof n.inputOptions}`)},qo=(e,n)=>{const o=e.getInput();te(o),F(n.inputValue).then(c=>{o.value=n.input==="number"?`${parseFloat(c)||0}`:`${c}`,q(o),o.focus(),e.hideLoading()}).catch(c=>{B(`Error in inputValue promise: ${c}`),o.value="",q(o),o.focus(),e.hideLoading()})},Go={select:(e,n,o)=>{const c=P(e,f.select),h=(E,R,K)=>{const Q=document.createElement("option");Q.value=K,re(Q,R),Q.selected=Lr(K,o.inputValue),E.appendChild(Q)};n.forEach(E=>{const R=E[0],K=E[1];if(Array.isArray(K)){const Q=document.createElement("optgroup");Q.label=R,Q.disabled=!1,c.appendChild(Q),K.forEach(qe=>h(Q,qe[1],qe[0]))}else h(c,K,R)}),c.focus()},radio:(e,n,o)=>{const c=P(e,f.radio);n.forEach(E=>{const R=E[0],K=E[1],Q=document.createElement("input"),qe=document.createElement("label");Q.type="radio",Q.name=f.radio,Q.value=R,Lr(R,o.inputValue)&&(Q.checked=!0);const kn=document.createElement("span");re(kn,K),kn.className=f.label,qe.appendChild(Q),qe.appendChild(kn),c.appendChild(qe)});const h=c.querySelectorAll("input");h.length&&h[0].focus()}},bn=e=>{const n=[];return typeof Map<"u"&&e instanceof Map?e.forEach((o,c)=>{let h=o;typeof h=="object"&&(h=bn(h)),n.push([c,h])}):Object.keys(e).forEach(o=>{let c=e[o];typeof c=="object"&&(c=bn(c)),n.push([o,c])}),n},Lr=(e,n)=>n&&n.toString()===e.toString(),Xo=e=>{const n=l.innerParams.get(e);e.disableButtons(),n.input?Nr(e,"confirm"):yn(e,!0)},Ko=e=>{const n=l.innerParams.get(e);e.disableButtons(),n.returnInputValueOnDeny?Nr(e,"deny"):vn(e,!1)},Zo=(e,n)=>{e.disableButtons(),n(Ue.cancel)},Nr=(e,n)=>{const o=l.innerParams.get(e);if(!o.input){B(`The "input" parameter is needed to be set when using returnInputValueOn${k(n)}`);return}const c=Ho(e,o);o.inputValidator?Jo(e,c,n):e.getInput().checkValidity()?n==="deny"?vn(e,c):yn(e,c):(e.enableButtons(),e.showValidationMessage(o.validationMessage))},Jo=(e,n,o)=>{const c=l.innerParams.get(e);e.disableInput(),Promise.resolve().then(()=>F(c.inputValidator(n,c.validationMessage))).then(E=>{e.enableButtons(),e.enableInput(),E?e.showValidationMessage(E):o==="deny"?vn(e,n):yn(e,n)})},vn=(e,n)=>{const o=l.innerParams.get(e||void 0);o.showLoaderOnDeny&&We(be()),o.preDeny?(e.isAwaitingPromise=!0,Promise.resolve().then(()=>F(o.preDeny(n,o.validationMessage))).then(h=>{h===!1?(e.hideLoading(),pt(e)):e.close({isDenied:!0,value:typeof h>"u"?n:h})}).catch(h=>$r(e||void 0,h))):e.close({isDenied:!0,value:n})},Mr=(e,n)=>{e.close({isConfirmed:!0,value:n})},$r=(e,n)=>{e.rejectPromise(n)},yn=(e,n)=>{const o=l.innerParams.get(e||void 0);o.showLoaderOnConfirm&&We(),o.preConfirm?(e.resetValidationMessage(),e.isAwaitingPromise=!0,Promise.resolve().then(()=>F(o.preConfirm(n,o.validationMessage))).then(h=>{fe(Me())||h===!1?(e.hideLoading(),pt(e)):Mr(e,typeof h>"u"?n:h)}).catch(h=>$r(e||void 0,h))):Mr(e,n)};function Tt(){const e=l.innerParams.get(this);if(!e)return;const n=l.domCache.get(this);te(n.loader),He()?e.icon&&q(J()):Qo(n),me([n.popup,n.actions],f.loading),n.popup.removeAttribute("aria-busy"),n.popup.removeAttribute("data-loading"),n.confirmButton.disabled=!1,n.denyButton.disabled=!1,n.cancelButton.disabled=!1}const Qo=e=>{const n=e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));n.length?q(n[0],"inline-block"):Ai()&&te(e.actions)};function Br(){const e=l.innerParams.get(this),n=l.domCache.get(this);return n?lt(n.popup,e.input):null}function Dr(e,n,o){const c=l.domCache.get(e);n.forEach(h=>{c[h].disabled=o})}function Fr(e,n){if(e)if(e.type==="radio"){const c=e.parentNode.parentNode.querySelectorAll("input");for(let h=0;h<c.length;h++)c[h].disabled=n}else e.disabled=n}function Rr(){Dr(this,["confirmButton","denyButton","cancelButton"],!1)}function zr(){Dr(this,["confirmButton","denyButton","cancelButton"],!0)}function Hr(){Fr(this.getInput(),!1)}function Ur(){Fr(this.getInput(),!0)}function Yr(e){const n=l.domCache.get(this),o=l.innerParams.get(this);re(n.validationMessage,e),n.validationMessage.className=f["validation-message"],o.customClass&&o.customClass.validationMessage&&$(n.validationMessage,o.customClass.validationMessage),q(n.validationMessage);const c=this.getInput();c&&(c.setAttribute("aria-invalid",!0),c.setAttribute("aria-describedby",f["validation-message"]),ct(c),$(c,f.inputerror))}function Wr(){const e=l.domCache.get(this);e.validationMessage&&te(e.validationMessage);const n=this.getInput();n&&(n.removeAttribute("aria-invalid"),n.removeAttribute("aria-describedby"),me(n,f.inputerror))}const Ve={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},es=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],ts={},ns=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Vr=e=>Object.prototype.hasOwnProperty.call(Ve,e),qr=e=>es.indexOf(e)!==-1,Gr=e=>ts[e],rs=e=>{Vr(e)||O(`Unknown parameter "${e}"`)},as=e=>{ns.includes(e)&&O(`The parameter "${e}" is incompatible with toasts`)},is=e=>{const n=Gr(e);n&&T(e,n)},os=e=>{e.backdrop===!1&&e.allowOutsideClick&&O('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const n in e)rs(n),e.toast&&as(n),is(n)};function Xr(e){const n=y(),o=l.innerParams.get(this);if(!n||pe(n,o.hideClass.popup)){O("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const c=ss(e),h=Object.assign({},o,c);Or(this,h),l.innerParams.set(this,h),Object.defineProperties(this,{params:{value:Object.assign({},this.params,e),writable:!1,enumerable:!0}})}const ss=e=>{const n={};return Object.keys(e).forEach(o=>{qr(o)?n[o]=e[o]:O(`Invalid parameter to update: ${o}`)}),n};function Kr(){const e=l.domCache.get(this),n=l.innerParams.get(this);if(!n){Zr(this);return}e.popup&&i.swalCloseEventFinishedCallback&&(i.swalCloseEventFinishedCallback(),delete i.swalCloseEventFinishedCallback),typeof n.didDestroy=="function"&&n.didDestroy(),ls(this)}const ls=e=>{Zr(e),delete e.params,delete i.keydownHandler,delete i.keydownTarget,delete i.currentInstance},Zr=e=>{e.isAwaitingPromise?(wn(l,e),e.isAwaitingPromise=!0):(wn(mt,e),wn(l,e),delete e.isAwaitingPromise,delete e.disableButtons,delete e.enableButtons,delete e.getInput,delete e.disableInput,delete e.enableInput,delete e.hideLoading,delete e.disableLoading,delete e.showValidationMessage,delete e.resetValidationMessage,delete e.close,delete e.closePopup,delete e.closeModal,delete e.closeToast,delete e.rejectPromise,delete e.update,delete e._destroy)},wn=(e,n)=>{for(const o in e)e[o].delete(n)};var cs=Object.freeze({__proto__:null,_destroy:Kr,close:Pe,closeModal:Pe,closePopup:Pe,closeToast:Pe,disableButtons:zr,disableInput:Ur,disableLoading:Tt,enableButtons:Rr,enableInput:Hr,getInput:Br,handleAwaitingPromise:pt,hideLoading:Tt,rejectPromise:Ir,resetValidationMessage:Wr,showValidationMessage:Yr,update:Xr});const us=(e,n,o)=>{l.innerParams.get(e).toast?fs(e,n,o):(ms(n),ps(n),hs(e,n,o))},fs=(e,n,o)=>{n.popup.onclick=()=>{const c=l.innerParams.get(e);c&&(ds(c)||c.timer||c.input)||o(Ue.close)}},ds=e=>e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton;let Lt=!1;const ms=e=>{e.popup.onmousedown=()=>{e.container.onmouseup=function(n){e.container.onmouseup=void 0,n.target===e.container&&(Lt=!0)}}},ps=e=>{e.container.onmousedown=()=>{e.popup.onmouseup=function(n){e.popup.onmouseup=void 0,(n.target===e.popup||e.popup.contains(n.target))&&(Lt=!0)}}},hs=(e,n,o)=>{n.container.onclick=c=>{const h=l.innerParams.get(e);if(Lt){Lt=!1;return}c.target===n.container&&D(h.allowOutsideClick)&&o(Ue.backdrop)}},gs=e=>typeof e=="object"&&e.jquery,Jr=e=>e instanceof Element||gs(e),bs=e=>{const n={};return typeof e[0]=="object"&&!Jr(e[0])?Object.assign(n,e[0]):["title","html","icon"].forEach((o,c)=>{const h=e[c];typeof h=="string"||Jr(h)?n[o]=h:h!==void 0&&B(`Unexpected type of ${o}! Expected "string" or "Element", got ${typeof h}`)}),n};function vs(){const e=this;for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return new e(...o)}function ys(e){class n extends this{_main(c,h){return super._main(c,Object.assign({},e,h))}}return n}const ws=()=>i.timeout&&i.timeout.getTimerLeft(),Qr=()=>{if(i.timeout)return _i(),i.timeout.stop()},ea=()=>{if(i.timeout){const e=i.timeout.start();return dn(e),e}},xs=()=>{const e=i.timeout;return e&&(e.running?Qr():ea())},ks=e=>{if(i.timeout){const n=i.timeout.increase(e);return dn(n,!0),n}},Cs=()=>!!(i.timeout&&i.timeout.isRunning());let ta=!1;const xn={};function Ss(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";xn[e]=this,ta||(document.body.addEventListener("click",Os),ta=!0)}const Os=e=>{for(let n=e.target;n&&n!==document;n=n.parentNode)for(const o in xn){const c=n.getAttribute(o);if(c){xn[o].fire({template:c});return}}};var Es=Object.freeze({__proto__:null,argsToParams:bs,bindClickHandler:Ss,clickCancel:go,clickConfirm:Er,clickDeny:ho,enableLoading:We,fire:vs,getActions:ye,getCancelButton:ue,getCloseButton:it,getConfirmButton:ce,getContainer:A,getDenyButton:be,getFocusableElements:ot,getFooter:_t,getHtmlContainer:W,getIcon:J,getIconContent:ne,getImage:M,getInputLabel:At,getLoader:Se,getPopup:y,getProgressSteps:le,getTimerLeft:ws,getTimerProgressBar:Oe,getTitle:oe,getValidationMessage:Me,increaseTimer:ks,isDeprecatedParameter:Gr,isLoading:un,isTimerRunning:Cs,isUpdatableParameter:qr,isValidParameter:Vr,isVisible:po,mixin:ys,resumeTimer:ea,showLoading:We,stopTimer:Qr,toggleTimer:xs});class Ps{constructor(n,o){this.callback=n,this.remaining=o,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(n){const o=this.running;return o&&this.stop(),this.remaining+=n,o&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const na=["swal-title","swal-html","swal-footer"],As=e=>{const n=typeof e.template=="string"?document.querySelector(e.template):e.template;if(!n)return{};const o=n.content;return $s(o),Object.assign(_s(o),js(o),Is(o),Ts(o),Ls(o),Ns(o),Ms(o,na))},_s=e=>{const n={};return Array.from(e.querySelectorAll("swal-param")).forEach(c=>{Be(c,["name","value"]);const h=c.getAttribute("name"),E=c.getAttribute("value");typeof Ve[h]=="boolean"?n[h]=E!=="false":typeof Ve[h]=="object"?n[h]=JSON.parse(E):n[h]=E}),n},js=e=>{const n={};return Array.from(e.querySelectorAll("swal-function-param")).forEach(c=>{const h=c.getAttribute("name"),E=c.getAttribute("value");n[h]=new Function(`return ${E}`)()}),n},Is=e=>{const n={};return Array.from(e.querySelectorAll("swal-button")).forEach(c=>{Be(c,["type","color","aria-label"]);const h=c.getAttribute("type");n[`${h}ButtonText`]=c.innerHTML,n[`show${k(h)}Button`]=!0,c.hasAttribute("color")&&(n[`${h}ButtonColor`]=c.getAttribute("color")),c.hasAttribute("aria-label")&&(n[`${h}ButtonAriaLabel`]=c.getAttribute("aria-label"))}),n},Ts=e=>{const n={},o=e.querySelector("swal-image");return o&&(Be(o,["src","width","height","alt"]),o.hasAttribute("src")&&(n.imageUrl=o.getAttribute("src")),o.hasAttribute("width")&&(n.imageWidth=o.getAttribute("width")),o.hasAttribute("height")&&(n.imageHeight=o.getAttribute("height")),o.hasAttribute("alt")&&(n.imageAlt=o.getAttribute("alt"))),n},Ls=e=>{const n={},o=e.querySelector("swal-icon");return o&&(Be(o,["type","color"]),o.hasAttribute("type")&&(n.icon=o.getAttribute("type")),o.hasAttribute("color")&&(n.iconColor=o.getAttribute("color")),n.iconHtml=o.innerHTML),n},Ns=e=>{const n={},o=e.querySelector("swal-input");o&&(Be(o,["type","label","placeholder","value"]),n.input=o.getAttribute("type")||"text",o.hasAttribute("label")&&(n.inputLabel=o.getAttribute("label")),o.hasAttribute("placeholder")&&(n.inputPlaceholder=o.getAttribute("placeholder")),o.hasAttribute("value")&&(n.inputValue=o.getAttribute("value")));const c=Array.from(e.querySelectorAll("swal-input-option"));return c.length&&(n.inputOptions={},c.forEach(h=>{Be(h,["value"]);const E=h.getAttribute("value"),R=h.innerHTML;n.inputOptions[E]=R})),n},Ms=(e,n)=>{const o={};for(const c in n){const h=n[c],E=e.querySelector(h);E&&(Be(E,[]),o[h.replace(/^swal-/,"")]=E.innerHTML.trim())}return o},$s=e=>{const n=na.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(e.children).forEach(o=>{const c=o.tagName.toLowerCase();n.includes(c)||O(`Unrecognized element <${c}>`)})},Be=(e,n)=>{Array.from(e.attributes).forEach(o=>{n.indexOf(o.name)===-1&&O([`Unrecognized attribute "${o.name}" on <${e.tagName.toLowerCase()}>.`,`${n.length?`Allowed attributes are: ${n.join(", ")}`:"To set the value, use HTML within the element."}`])})},ra=10,Bs=e=>{const n=A(),o=y();typeof e.willOpen=="function"&&e.willOpen(o);const h=window.getComputedStyle(document.body).overflowY;Rs(n,o,e),setTimeout(()=>{Ds(n,o)},ra),st()&&(Fs(n,e.scrollbarPadding,h),So()),!He()&&!i.previousActiveElement&&(i.previousActiveElement=document.activeElement),typeof e.didOpen=="function"&&setTimeout(()=>e.didOpen(o)),me(n,f["no-transition"])},aa=e=>{const n=y();if(e.target!==n)return;const o=A();n.removeEventListener(ft,aa),o.style.overflowY="auto"},Ds=(e,n)=>{ft&&yr(n)?(e.style.overflowY="hidden",n.addEventListener(ft,aa)):e.style.overflowY="auto"},Fs=(e,n,o)=>{Oo(),n&&o!=="hidden"&&Lo(),setTimeout(()=>{e.scrollTop=0})},Rs=(e,n,o)=>{$(e,o.showClass.backdrop),n.style.setProperty("opacity","0","important"),q(n,"grid"),setTimeout(()=>{$(n,o.showClass.popup),n.style.removeProperty("opacity")},ra),$([document.documentElement,document.body],f.shown),o.heightAuto&&o.backdrop&&!o.toast&&$([document.documentElement,document.body],f["height-auto"])};var ia={email:(e,n)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.resolve(n||"Invalid email address"),url:(e,n)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(n||"Invalid URL")};function zs(e){e.inputValidator||Object.keys(ia).forEach(n=>{e.input===n&&(e.inputValidator=ia[n])})}function Hs(e){(!e.target||typeof e.target=="string"&&!document.querySelector(e.target)||typeof e.target!="string"&&!e.target.appendChild)&&(O('Target parameter is not valid, defaulting to "body"'),e.target="body")}function Us(e){zs(e),e.showLoaderOnConfirm&&!e.preConfirm&&O(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Hs(e),typeof e.title=="string"&&(e.title=e.title.split(`
`).join("<br />")),$i(e)}let he;class X{constructor(){if(typeof window>"u")return;he=this;for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];const h=Object.freeze(this.constructor.argsToParams(o));this.params=h,this.isAwaitingPromise=!1;const E=he._main(he.params);l.promise.set(this,E)}_main(n){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};os(Object.assign({},o,n)),i.currentInstance&&(i.currentInstance._destroy(),st()&&_r()),i.currentInstance=he;const c=Ws(n,o);Us(c),Object.freeze(c),i.timeout&&(i.timeout.stop(),delete i.timeout),clearTimeout(i.restoreFocusTimeout);const h=Vs(he);return Or(he,c),l.innerParams.set(he,c),Ys(he,h,c)}then(n){return l.promise.get(this).then(n)}finally(n){return l.promise.get(this).finally(n)}}const Ys=(e,n,o)=>new Promise((c,h)=>{const E=R=>{e.close({isDismissed:!0,dismiss:R})};mt.swalPromiseResolve.set(e,c),mt.swalPromiseReject.set(e,h),n.confirmButton.onclick=()=>{Xo(e)},n.denyButton.onclick=()=>{Ko(e)},n.cancelButton.onclick=()=>{Zo(e,E)},n.closeButton.onclick=()=>{E(Ue.close)},us(e,n,E),bo(e,i,o,E),zo(e,o),Bs(o),qs(i,o,E),Gs(n,o),setTimeout(()=>{n.container.scrollTop=0})}),Ws=(e,n)=>{const o=As(e),c=Object.assign({},Ve,n,o,e);return c.showClass=Object.assign({},Ve.showClass,c.showClass),c.hideClass=Object.assign({},Ve.hideClass,c.hideClass),c},Vs=e=>{const n={popup:y(),container:A(),actions:ye(),confirmButton:ce(),denyButton:be(),cancelButton:ue(),loader:Se(),closeButton:it(),validationMessage:Me(),progressSteps:le()};return l.domCache.set(e,n),n},qs=(e,n,o)=>{const c=Oe();te(c),n.timer&&(e.timeout=new Ps(()=>{o("timer"),delete e.timeout},n.timer),n.timerProgressBar&&(q(c),ae(c,n,"timerProgressBar"),setTimeout(()=>{e.timeout&&e.timeout.running&&dn(n.timer)})))},Gs=(e,n)=>{if(!n.toast){if(!D(n.allowEnterKey)){Ks();return}Xs(e,n)||gn(-1,1)}},Xs=(e,n)=>n.focusDeny&&fe(e.denyButton)?(e.denyButton.focus(),!0):n.focusCancel&&fe(e.cancelButton)?(e.cancelButton.focus(),!0):n.focusConfirm&&fe(e.confirmButton)?(e.confirmButton.focus(),!0):!1,Ks=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const e=new Date,n=localStorage.getItem("swal-initiation");n?(e.getTime()-Date.parse(n))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const o=document.createElement("audio");o.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",o.loop=!0,document.body.appendChild(o),setTimeout(()=>{o.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${e}`)}X.prototype.disableButtons=zr,X.prototype.enableButtons=Rr,X.prototype.getInput=Br,X.prototype.disableInput=Ur,X.prototype.enableInput=Hr,X.prototype.hideLoading=Tt,X.prototype.disableLoading=Tt,X.prototype.showValidationMessage=Yr,X.prototype.resetValidationMessage=Wr,X.prototype.close=Pe,X.prototype.closePopup=Pe,X.prototype.closeModal=Pe,X.prototype.closeToast=Pe,X.prototype.rejectPromise=Ir,X.prototype.update=Xr,X.prototype._destroy=Kr,Object.assign(X,Es),Object.keys(cs).forEach(e=>{X[e]=function(){return he&&he[e]?he[e](...arguments):null}}),X.DismissReason=Ue,X.version="11.7.12";const Nt=X;return Nt.default=Nt,Nt}),typeof Ae<"u"&&Ae.Sweetalert2&&(Ae.swal=Ae.sweetAlert=Ae.Swal=Ae.SweetAlert=Ae.Sweetalert2)})(Ua);var El=Ua.exports;const Ge=Ra(El);const Pl="_search_r8kxd_1",Al="_results_list_r8kxd_21",_l={search:Pl,results_list:Al},En=Kn.bind(_l),jl=()=>{const[t,r]=N.useState(""),[a,i]=N.useState(!1),[s,u]=N.useState([]);N.useEffect(()=>{Ln("http://127.0.0.1:5000/api/documents").then(p=>{const f=p.filter(g=>t&&g&&g.title&&g.title.toLowerCase().includes(t.toLowerCase()));u(f)}),t.length>0&&i(!0)},[t]);const l=p=>{r(p)},d=p=>{i(!1),r("")};return m.jsx(m.Fragment,{children:m.jsxs("div",{className:En("search"),children:[m.jsx("input",{type:"text",placeholder:"Tìm kiếm....",style:{height:"100%"},value:t,onChange:p=>l(p.target.value)}),m.jsx("span",{className:"material-icons",children:"search"}),m.jsx("div",{className:En("results_list"),children:a&&s.map((p,f)=>m.jsxs(Ke,{className:En("result"),to:`/Documents/${p.id}`,onClick:d,children:[p.title," "]},f))})]})})};var Ya={},nn={},rn={},ee={};Object.defineProperty(ee,"__esModule",{value:!0});ee.disabledIconStyle=ee.disabledStyle=ee.hoverStyle=ee.svgStyle=ee.iconStyle=ee.lightStyle=ee.darkStyle=void 0;function sa(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);r&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),a.push.apply(a,i)}return a}function Wa(t){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?sa(Object(a),!0).forEach(function(i){Il(t,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):sa(Object(a)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(a,i))})}return t}function Il(t,r,a){return r in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t}var Va={height:"50px",width:"240px",border:"none",textAlign:"center",verticalAlign:"center",boxShadow:"0 2px 4px 0 rgba(0,0,0,.25)",fontSize:"16px",lineHeight:"48px",display:"block",borderRadius:"1px",transition:"background-color .218s, border-color .218s, box-shadow .218s",fontFamily:"Roboto,arial,sans-serif",cursor:"pointer",userSelect:"none"},Tl=Wa({backgroundColor:"#4285f4",color:"#fff"},Va);ee.darkStyle=Tl;var Ll=Wa({backgroundColor:"#fff",color:"rgba(0,0,0,.54)"},Va);ee.lightStyle=Ll;var Nl={width:"48px",height:"48px",textAlign:"center",verticalAlign:"center",display:"block",marginTop:"1px",marginLeft:"1px",float:"left",backgroundColor:"#fff",borderRadius:"1px",whiteSpace:"nowrap"};ee.iconStyle=Nl;var Ml={width:"48px",height:"48px",display:"block"};ee.svgStyle=Ml;var $l={boxShadow:"0 0 3px 3px rgba(66,133,244,.3)",transition:"background-color .218s, border-color .218s, box-shadow .218s"};ee.hoverStyle=$l;var Bl={backgroundColor:"rgba(37, 5, 5, .08)",color:"rgba(0, 0, 0, .40)",cursor:"not-allowed"};ee.disabledStyle=Bl;var Dl={backgroundColor:"transparent"};ee.disabledIconStyle=Dl;Object.defineProperty(rn,"__esModule",{value:!0});rn.GoogleIcon=void 0;var v=qa(N),la=qa(Ha),tt=ee;function qa(t){return t&&t.__esModule?t:{default:t}}function ca(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);r&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),a.push.apply(a,i)}return a}function Fl(t){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?ca(Object(a),!0).forEach(function(i){Rl(t,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ca(Object(a)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(a,i))})}return t}function Rl(t,r,a){return r in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t}var zl=v.default.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"46px",height:"46px",viewBox:"0 0 46 46",style:tt.svgStyle},v.default.createElement("defs",null,v.default.createElement("filter",{x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox",id:"filter-1"},v.default.createElement("feOffset",{dx:"0",dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}),v.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),v.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0",in:"shadowBlurOuter1",type:"matrix",result:"shadowMatrixOuter1"}),v.default.createElement("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"shadowOffsetOuter2"}),v.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),v.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0",in:"shadowBlurOuter2",type:"matrix",result:"shadowMatrixOuter2"}),v.default.createElement("feMerge",null,v.default.createElement("feMergeNode",{in:"shadowMatrixOuter1"}),v.default.createElement("feMergeNode",{in:"shadowMatrixOuter2"}),v.default.createElement("feMergeNode",{in:"SourceGraphic"}))),v.default.createElement("rect",{id:"path-2",x:"0",y:"0",width:"40",height:"40",rx:"2"}),v.default.createElement("rect",{id:"path-3",x:"5",y:"5",width:"38",height:"38",rx:"1"})),v.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},v.default.createElement("g",{id:"9-PATCH",transform:"translate(-608.000000, -219.000000)"}),v.default.createElement("g",{id:"btn_google_dark_normal",transform:"translate(-1.000000, -1.000000)"},v.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)",filter:"url(#filter-1)"},v.default.createElement("g",{id:"button-bg"},v.default.createElement("use",{fill:"#4285F4",fillRule:"evenodd"}),v.default.createElement("use",{fill:"none"}),v.default.createElement("use",{fill:"none"}),v.default.createElement("use",{fill:"none"}))),v.default.createElement("g",{id:"button-bg-copy"},v.default.createElement("use",{fill:"#FFFFFF",fillRule:"evenodd"}),v.default.createElement("use",{fill:"none"}),v.default.createElement("use",{fill:"none"}),v.default.createElement("use",{fill:"none"})),v.default.createElement("g",{id:"logo_googleg_48dp",transform:"translate(15.000000, 15.000000)"},v.default.createElement("path",{d:"M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z",id:"Shape",fill:"#4285F4"}),v.default.createElement("path",{d:"M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z",id:"Shape",fill:"#34A853"}),v.default.createElement("path",{d:"M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z",id:"Shape",fill:"#FBBC05"}),v.default.createElement("path",{d:"M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z",id:"Shape",fill:"#EA4335"}),v.default.createElement("path",{d:"M0,0 L18,0 L18,18 L0,18 L0,0 Z",id:"Shape"})),v.default.createElement("g",{id:"handles_square"})))),Hl=v.default.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"46px",height:"46px",viewBox:"0 0 46 46",style:tt.svgStyle},v.default.createElement("defs",null,v.default.createElement("filter",{x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox",id:"filter-1"},v.default.createElement("feOffset",{dx:"0",dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}),v.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),v.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0",in:"shadowBlurOuter1",type:"matrix",result:"shadowMatrixOuter1"}),v.default.createElement("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"shadowOffsetOuter2"}),v.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),v.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0",in:"shadowBlurOuter2",type:"matrix",result:"shadowMatrixOuter2"}),v.default.createElement("feMerge",null,v.default.createElement("feMergeNode",{in:"shadowMatrixOuter1"}),v.default.createElement("feMergeNode",{in:"shadowMatrixOuter2"}),v.default.createElement("feMergeNode",{in:"SourceGraphic"}))),v.default.createElement("rect",{id:"path-2",x:"0",y:"0",width:"40",height:"40",rx:"2"})),v.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},v.default.createElement("g",{id:"9-PATCH",transform:"translate(-608.000000, -160.000000)"}),v.default.createElement("g",{id:"btn_google_light_normal",transform:"translate(-1.000000, -1.000000)"},v.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)",filter:"url(#filter-1)"},v.default.createElement("g",{id:"button-bg"},v.default.createElement("use",{fill:"#FFFFFF",fillRule:"evenodd"}),v.default.createElement("use",{fill:"none"}),v.default.createElement("use",{fill:"none"}),v.default.createElement("use",{fill:"none"}))),v.default.createElement("g",{id:"logo_googleg_48dp",transform:"translate(15.000000, 15.000000)"},v.default.createElement("path",{d:"M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z",id:"Shape",fill:"#4285F4"}),v.default.createElement("path",{d:"M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z",id:"Shape",fill:"#34A853"}),v.default.createElement("path",{d:"M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z",id:"Shape",fill:"#FBBC05"}),v.default.createElement("path",{d:"M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z",id:"Shape",fill:"#EA4335"}),v.default.createElement("path",{d:"M0,0 L18,0 L18,18 L0,18 L0,0 Z",id:"Shape"})),v.default.createElement("g",{id:"handles_square"})))),Ul=v.default.createElement("svg",{width:"46px",height:"46px",viewBox:"0 0 46 46",version:"1.1",xmlns:"http://www.w3.org/2000/svg",style:tt.svgStyle},v.default.createElement("defs",null,v.default.createElement("rect",{id:"path-1",x:"0",y:"0",width:"40",height:"40",rx:"2"})),v.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},v.default.createElement("g",{id:"9-PATCH",transform:"translate(-788.000000, -219.000000)"}),v.default.createElement("g",{id:"btn_google_dark_disabled",transform:"translate(-1.000000, -1.000000)"},v.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)"},v.default.createElement("g",{id:"button-bg"},v.default.createElement("use",{fillOpacity:"0.08",fill:"#000000",fillRule:"evenodd"}),v.default.createElement("use",{fill:"none"}),v.default.createElement("use",{fill:"none"}),v.default.createElement("use",{fill:"none"}))),v.default.createElement("path",{d:"M24.001,25.71 L24.001,22.362 L32.425,22.362 C32.551,22.929 32.65,23.46 32.65,24.207 C32.65,29.346 29.203,33 24.01,33 C19.042,33 15.01,28.968 15.01,24 C15.01,19.032 19.042,15 24.01,15 C26.44,15 28.474,15.891 30.031,17.349 L27.475,19.833 C26.827,19.221 25.693,18.501 24.01,18.501 C21.031,18.501 18.601,20.976 18.601,24.009 C18.601,27.042 21.031,29.517 24.01,29.517 C27.457,29.517 28.726,27.132 28.96,25.719 L24.001,25.719 L24.001,25.71 Z",id:"Shape-Copy",fillOpacity:"0.4",fill:"#000000"}),v.default.createElement("g",{id:"handles_square"})))),Qn=function(r){var a=r.disabled,i=r.type;return v.default.createElement("div",{style:a?Fl({},tt.iconStyle,{},tt.disabledIconStyle):tt.iconStyle},a?Ul:i==="dark"?zl:Hl)};rn.GoogleIcon=Qn;Qn.propTypes={disabled:la.default.bool,type:la.default.oneOf(["light","dark"])};Qn.defaultProps={type:"dark"};Object.defineProperty(nn,"__esModule",{value:!0});nn.default=void 0;var Dt=Vl(N),Xe=Wl(Ha),Yl=rn,Ft=ee;function Wl(t){return t&&t.__esModule?t:{default:t}}function Ga(){if(typeof WeakMap!="function")return null;var t=new WeakMap;return Ga=function(){return t},t}function Vl(t){if(t&&t.__esModule)return t;if(t===null||bt(t)!=="object"&&typeof t!="function")return{default:t};var r=Ga();if(r&&r.has(t))return r.get(t);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){var u=i?Object.getOwnPropertyDescriptor(t,s):null;u&&(u.get||u.set)?Object.defineProperty(a,s,u):a[s]=t[s]}return a.default=t,r&&r.set(t,a),a}function bt(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?bt=function(a){return typeof a}:bt=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},bt(t)}function Nn(){return Nn=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},Nn.apply(this,arguments)}function ql(t,r){if(t==null)return{};var a=Gl(t,r),i,s;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(s=0;s<u.length;s++)i=u[s],!(r.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}function Gl(t,r){if(t==null)return{};var a={},i=Object.keys(t),s,u;for(u=0;u<i.length;u++)s=i[u],!(r.indexOf(s)>=0)&&(a[s]=t[s]);return a}function ua(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);r&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),a.push.apply(a,i)}return a}function Pn(t){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?ua(Object(a),!0).forEach(function(i){je(t,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ua(Object(a)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(a,i))})}return t}function Xl(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function fa(t,r){for(var a=0;a<r.length;a++){var i=r[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Kl(t,r,a){return r&&fa(t.prototype,r),a&&fa(t,a),t}function Zl(t){return function(){var r=Zt(t),a;if(Ql()){var i=Zt(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return Jl(this,a)}}function Jl(t,r){return r&&(bt(r)==="object"||typeof r=="function")?r:Ze(t)}function Ze(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ql(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Zt(t){return Zt=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},Zt(t)}function ec(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&Mn(t,r)}function Mn(t,r){return Mn=Object.setPrototypeOf||function(i,s){return i.__proto__=s,i},Mn(t,r)}function je(t,r,a){return r in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t}var er=function(t){ec(a,t);var r=Zl(a);function a(){var i;Xl(this,a);for(var s=arguments.length,u=new Array(s),l=0;l<s;l++)u[l]=arguments[l];return i=r.call.apply(r,[this].concat(u)),je(Ze(i),"state",{hovered:!1}),je(Ze(i),"getStyle",function(d){var p=i.props.type==="dark"?Ft.darkStyle:Ft.lightStyle;return i.state.hovered?Pn({},p,{},Ft.hoverStyle,{},d):i.props.disabled?Pn({},p,{},Ft.disabledStyle,{},d):Pn({},p,{},d)}),je(Ze(i),"mouseOver",function(){i.props.disabled||i.setState({hovered:!0})}),je(Ze(i),"mouseOut",function(){i.props.disabled||i.setState({hovered:!1})}),je(Ze(i),"click",function(d){i.props.disabled||i.props.onClick(d)}),i}return Kl(a,[{key:"render",value:function(){var s=this.props,u=s.label,l=s.style,d=ql(s,["label","style"]);return Dt.default.createElement("div",Nn({},d,{role:"button",onClick:this.click,style:this.getStyle(l),onMouseOver:this.mouseOver,onMouseOut:this.mouseOut}),Dt.default.createElement(Yl.GoogleIcon,this.props),Dt.default.createElement("span",null,u))}}]),a}(Dt.PureComponent);nn.default=er;je(er,"propTypes",{label:Xe.default.string,disabled:Xe.default.bool,tabIndex:Xe.default.number,onClick:Xe.default.func,type:Xe.default.oneOf(["light","dark"]),style:Xe.default.object});je(er,"defaultProps",{label:"Sign in with Google",disabled:!1,type:"dark",tabIndex:0,onClick:function(){}});(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"GoogleButton",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(nn);function a(i){return i&&i.__esModule?i:{default:i}}})(Ya);const tc=Ra(Ya);function da(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);r&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),a.push.apply(a,i)}return a}function x(t){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?da(Object(a),!0).forEach(function(i){Z(t,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):da(Object(a)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(a,i))})}return t}function Jt(t){"@babel/helpers - typeof";return Jt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Jt(t)}function nc(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function ma(t,r){for(var a=0;a<r.length;a++){var i=r[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function rc(t,r,a){return r&&ma(t.prototype,r),a&&ma(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t}function Z(t,r,a){return r in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t}function tr(t,r){return ic(t)||sc(t,r)||Xa(t,r)||cc()}function Ot(t){return ac(t)||oc(t)||Xa(t)||lc()}function ac(t){if(Array.isArray(t))return $n(t)}function ic(t){if(Array.isArray(t))return t}function oc(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function sc(t,r){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var i=[],s=!0,u=!1,l,d;try{for(a=a.call(t);!(s=(l=a.next()).done)&&(i.push(l.value),!(r&&i.length===r));s=!0);}catch(p){u=!0,d=p}finally{try{!s&&a.return!=null&&a.return()}finally{if(u)throw d}}return i}}function Xa(t,r){if(t){if(typeof t=="string")return $n(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return $n(t,r)}}function $n(t,r){(r==null||r>t.length)&&(r=t.length);for(var a=0,i=new Array(r);a<r;a++)i[a]=t[a];return i}function lc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var pa=function(){},nr={},Ka={},Za=null,Ja={mark:pa,measure:pa};try{typeof window<"u"&&(nr=window),typeof document<"u"&&(Ka=document),typeof MutationObserver<"u"&&(Za=MutationObserver),typeof performance<"u"&&(Ja=performance)}catch{}var uc=nr.navigator||{},ha=uc.userAgent,ga=ha===void 0?"":ha,Te=nr,Y=Ka,ba=Za,Rt=Ja;Te.document;var Ce=!!Y.documentElement&&!!Y.head&&typeof Y.addEventListener=="function"&&typeof Y.createElement=="function",Qa=~ga.indexOf("MSIE")||~ga.indexOf("Trident/"),zt,Ht,Ut,Yt,Wt,we="___FONT_AWESOME___",Bn=16,ei="fa",ti="svg-inline--fa",Re="data-fa-i2svg",Dn="data-fa-pseudo-element",fc="data-fa-pseudo-element-pending",rr="data-prefix",ar="data-icon",va="fontawesome-i2svg",dc="async",mc=["HTML","HEAD","STYLE","SCRIPT"],ni=function(){try{return!0}catch{return!1}}(),U="classic",G="sharp",ir=[U,G];function Et(t){return new Proxy(t,{get:function(a,i){return i in a?a[i]:a[U]}})}var wt=Et((zt={},Z(zt,U,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Z(zt,G,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),zt)),xt=Et((Ht={},Z(Ht,U,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Z(Ht,G,{solid:"fass",regular:"fasr",light:"fasl"}),Ht)),kt=Et((Ut={},Z(Ut,U,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Z(Ut,G,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Ut)),pc=Et((Yt={},Z(Yt,U,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Z(Yt,G,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Yt)),hc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,ri="fa-layers-text",gc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,bc=Et((Wt={},Z(Wt,U,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Z(Wt,G,{900:"fass",400:"fasr",300:"fasl"}),Wt)),ai=[1,2,3,4,5,6,7,8,9,10],vc=ai.concat([11,12,13,14,15,16,17,18,19,20]),yc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],De={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ct=new Set;Object.keys(xt[U]).map(Ct.add.bind(Ct));Object.keys(xt[G]).map(Ct.add.bind(Ct));var wc=[].concat(ir,Ot(Ct),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",De.GROUP,De.SWAP_OPACITY,De.PRIMARY,De.SECONDARY]).concat(ai.map(function(t){return"".concat(t,"x")})).concat(vc.map(function(t){return"w-".concat(t)})),vt=Te.FontAwesomeConfig||{};function xc(t){var r=Y.querySelector("script["+t+"]");if(r)return r.getAttribute(t)}function kc(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Y&&typeof Y.querySelector=="function"){var Cc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Cc.forEach(function(t){var r=tr(t,2),a=r[0],i=r[1],s=kc(xc(a));s!=null&&(vt[i]=s)})}var ii={styleDefault:"solid",familyDefault:"classic",cssPrefix:ei,replacementClass:ti,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};vt.familyPrefix&&(vt.cssPrefix=vt.familyPrefix);var rt=x(x({},ii),vt);rt.autoReplaceSvg||(rt.observeMutations=!1);var C={};Object.keys(ii).forEach(function(t){Object.defineProperty(C,t,{enumerable:!0,set:function(a){rt[t]=a,yt.forEach(function(i){return i(C)})},get:function(){return rt[t]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(r){rt.cssPrefix=r,yt.forEach(function(a){return a(C)})},get:function(){return rt.cssPrefix}});Te.FontAwesomeConfig=C;var yt=[];function Sc(t){return yt.push(t),function(){yt.splice(yt.indexOf(t),1)}}var _e=Bn,ve={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Oc(t){if(!(!t||!Ce)){var r=Y.createElement("style");r.setAttribute("type","text/css"),r.innerHTML=t;for(var a=Y.head.childNodes,i=null,s=a.length-1;s>-1;s--){var u=a[s],l=(u.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(l)>-1&&(i=u)}return Y.head.insertBefore(r,i),t}}var Ec="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function St(){for(var t=12,r="";t-- >0;)r+=Ec[Math.random()*62|0];return r}function at(t){for(var r=[],a=(t||[]).length>>>0;a--;)r[a]=t[a];return r}function or(t){return t.classList?at(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(r){return r})}function oi(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pc(t){return Object.keys(t||{}).reduce(function(r,a){return r+"".concat(a,'="').concat(oi(t[a]),'" ')},"").trim()}function an(t){return Object.keys(t||{}).reduce(function(r,a){return r+"".concat(a,": ").concat(t[a].trim(),";")},"")}function sr(t){return t.size!==ve.size||t.x!==ve.x||t.y!==ve.y||t.rotate!==ve.rotate||t.flipX||t.flipY}function Ac(t){var r=t.transform,a=t.containerWidth,i=t.iconWidth,s={transform:"translate(".concat(a/2," 256)")},u="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),d="rotate(".concat(r.rotate," 0 0)"),p={transform:"".concat(u," ").concat(l," ").concat(d)},f={transform:"translate(".concat(i/2*-1," -256)")};return{outer:s,inner:p,path:f}}function _c(t){var r=t.transform,a=t.width,i=a===void 0?Bn:a,s=t.height,u=s===void 0?Bn:s,l=t.startCentered,d=l===void 0?!1:l,p="";return d&&Qa?p+="translate(".concat(r.x/_e-i/2,"em, ").concat(r.y/_e-u/2,"em) "):d?p+="translate(calc(-50% + ".concat(r.x/_e,"em), calc(-50% + ").concat(r.y/_e,"em)) "):p+="translate(".concat(r.x/_e,"em, ").concat(r.y/_e,"em) "),p+="scale(".concat(r.size/_e*(r.flipX?-1:1),", ").concat(r.size/_e*(r.flipY?-1:1),") "),p+="rotate(".concat(r.rotate,"deg) "),p}var jc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
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
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
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
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
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
  left: calc(var(--fa-li-width, 2em) * -1);
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
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
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
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
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
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function si(){var t=ei,r=ti,a=C.cssPrefix,i=C.replacementClass,s=jc;if(a!==t||i!==r){var u=new RegExp("\\.".concat(t,"\\-"),"g"),l=new RegExp("\\--".concat(t,"\\-"),"g"),d=new RegExp("\\.".concat(r),"g");s=s.replace(u,".".concat(a,"-")).replace(l,"--".concat(a,"-")).replace(d,".".concat(i))}return s}var ya=!1;function An(){C.autoAddCss&&!ya&&(Oc(si()),ya=!0)}var Ic={mixout:function(){return{dom:{css:si,insertCss:An}}},hooks:function(){return{beforeDOMElementCreation:function(){An()},beforeI2svg:function(){An()}}}},xe=Te||{};xe[we]||(xe[we]={});xe[we].styles||(xe[we].styles={});xe[we].hooks||(xe[we].hooks={});xe[we].shims||(xe[we].shims=[]);var ge=xe[we],li=[],Tc=function t(){Y.removeEventListener("DOMContentLoaded",t),Qt=1,li.map(function(r){return r()})},Qt=!1;Ce&&(Qt=(Y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Y.readyState),Qt||Y.addEventListener("DOMContentLoaded",Tc));function Lc(t){Ce&&(Qt?setTimeout(t,0):li.push(t))}function Pt(t){var r=t.tag,a=t.attributes,i=a===void 0?{}:a,s=t.children,u=s===void 0?[]:s;return typeof t=="string"?oi(t):"<".concat(r," ").concat(Pc(i),">").concat(u.map(Pt).join(""),"</").concat(r,">")}function wa(t,r,a){if(t&&t[r]&&t[r][a])return{prefix:r,iconName:a,icon:t[r][a]}}var Nc=function(r,a){return function(i,s,u,l){return r.call(a,i,s,u,l)}},_n=function(r,a,i,s){var u=Object.keys(r),l=u.length,d=s!==void 0?Nc(a,s):a,p,f,g;for(i===void 0?(p=1,g=r[u[0]]):(p=0,g=i);p<l;p++)f=u[p],g=d(g,r[f],f,r);return g};function Mc(t){for(var r=[],a=0,i=t.length;a<i;){var s=t.charCodeAt(a++);if(s>=55296&&s<=56319&&a<i){var u=t.charCodeAt(a++);(u&64512)==56320?r.push(((s&1023)<<10)+(u&1023)+65536):(r.push(s),a--)}else r.push(s)}return r}function Fn(t){var r=Mc(t);return r.length===1?r[0].toString(16):null}function $c(t,r){var a=t.length,i=t.charCodeAt(r),s;return i>=55296&&i<=56319&&a>r+1&&(s=t.charCodeAt(r+1),s>=56320&&s<=57343)?(i-55296)*1024+s-56320+65536:i}function xa(t){return Object.keys(t).reduce(function(r,a){var i=t[a],s=!!i.icon;return s?r[i.iconName]=i.icon:r[a]=i,r},{})}function Rn(t,r){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=a.skipHooks,s=i===void 0?!1:i,u=xa(r);typeof ge.hooks.addPack=="function"&&!s?ge.hooks.addPack(t,xa(r)):ge.styles[t]=x(x({},ge.styles[t]||{}),u),t==="fas"&&Rn("fa",r)}var Vt,qt,Gt,Je=ge.styles,Bc=ge.shims,Dc=(Vt={},Z(Vt,U,Object.values(kt[U])),Z(Vt,G,Object.values(kt[G])),Vt),lr=null,ci={},ui={},fi={},di={},mi={},Fc=(qt={},Z(qt,U,Object.keys(wt[U])),Z(qt,G,Object.keys(wt[G])),qt);function Rc(t){return~wc.indexOf(t)}function zc(t,r){var a=r.split("-"),i=a[0],s=a.slice(1).join("-");return i===t&&s!==""&&!Rc(s)?s:null}var pi=function(){var r=function(u){return _n(Je,function(l,d,p){return l[p]=_n(d,u,{}),l},{})};ci=r(function(s,u,l){if(u[3]&&(s[u[3]]=l),u[2]){var d=u[2].filter(function(p){return typeof p=="number"});d.forEach(function(p){s[p.toString(16)]=l})}return s}),ui=r(function(s,u,l){if(s[l]=l,u[2]){var d=u[2].filter(function(p){return typeof p=="string"});d.forEach(function(p){s[p]=l})}return s}),mi=r(function(s,u,l){var d=u[2];return s[l]=l,d.forEach(function(p){s[p]=l}),s});var a="far"in Je||C.autoFetchSvg,i=_n(Bc,function(s,u){var l=u[0],d=u[1],p=u[2];return d==="far"&&!a&&(d="fas"),typeof l=="string"&&(s.names[l]={prefix:d,iconName:p}),typeof l=="number"&&(s.unicodes[l.toString(16)]={prefix:d,iconName:p}),s},{names:{},unicodes:{}});fi=i.names,di=i.unicodes,lr=on(C.styleDefault,{family:C.familyDefault})};Sc(function(t){lr=on(t.styleDefault,{family:C.familyDefault})});pi();function cr(t,r){return(ci[t]||{})[r]}function Hc(t,r){return(ui[t]||{})[r]}function Fe(t,r){return(mi[t]||{})[r]}function hi(t){return fi[t]||{prefix:null,iconName:null}}function Uc(t){var r=di[t],a=cr("fas",t);return r||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function Le(){return lr}var ur=function(){return{prefix:null,iconName:null,rest:[]}};function on(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.family,i=a===void 0?U:a,s=wt[i][t],u=xt[i][t]||xt[i][s],l=t in ge.styles?t:null;return u||l||null}var ka=(Gt={},Z(Gt,U,Object.keys(kt[U])),Z(Gt,G,Object.keys(kt[G])),Gt);function sn(t){var r,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.skipLookups,s=i===void 0?!1:i,u=(r={},Z(r,U,"".concat(C.cssPrefix,"-").concat(U)),Z(r,G,"".concat(C.cssPrefix,"-").concat(G)),r),l=null,d=U;(t.includes(u[U])||t.some(function(f){return ka[U].includes(f)}))&&(d=U),(t.includes(u[G])||t.some(function(f){return ka[G].includes(f)}))&&(d=G);var p=t.reduce(function(f,g){var b=zc(C.cssPrefix,g);if(Je[g]?(g=Dc[d].includes(g)?pc[d][g]:g,l=g,f.prefix=g):Fc[d].indexOf(g)>-1?(l=g,f.prefix=on(g,{family:d})):b?f.iconName=b:g!==C.replacementClass&&g!==u[U]&&g!==u[G]&&f.rest.push(g),!s&&f.prefix&&f.iconName){var w=l==="fa"?hi(f.iconName):{},k=Fe(f.prefix,f.iconName);w.prefix&&(l=null),f.iconName=w.iconName||k||f.iconName,f.prefix=w.prefix||f.prefix,f.prefix==="far"&&!Je.far&&Je.fas&&!C.autoFetchSvg&&(f.prefix="fas")}return f},ur());return(t.includes("fa-brands")||t.includes("fab"))&&(p.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(p.prefix="fad"),!p.prefix&&d===G&&(Je.fass||C.autoFetchSvg)&&(p.prefix="fass",p.iconName=Fe(p.prefix,p.iconName)||p.iconName),(p.prefix==="fa"||l==="fa")&&(p.prefix=Le()||"fas"),p}var Yc=function(){function t(){nc(this,t),this.definitions={}}return rc(t,[{key:"add",value:function(){for(var a=this,i=arguments.length,s=new Array(i),u=0;u<i;u++)s[u]=arguments[u];var l=s.reduce(this._pullDefinitions,{});Object.keys(l).forEach(function(d){a.definitions[d]=x(x({},a.definitions[d]||{}),l[d]),Rn(d,l[d]);var p=kt[U][d];p&&Rn(p,l[d]),pi()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,i){var s=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(s).map(function(u){var l=s[u],d=l.prefix,p=l.iconName,f=l.icon,g=f[2];a[d]||(a[d]={}),g.length>0&&g.forEach(function(b){typeof b=="string"&&(a[d][b]=f)}),a[d][p]=f}),a}}]),t}(),Ca=[],Qe={},nt={},Wc=Object.keys(nt);function Vc(t,r){var a=r.mixoutsTo;return Ca=t,Qe={},Object.keys(nt).forEach(function(i){Wc.indexOf(i)===-1&&delete nt[i]}),Ca.forEach(function(i){var s=i.mixout?i.mixout():{};if(Object.keys(s).forEach(function(l){typeof s[l]=="function"&&(a[l]=s[l]),Jt(s[l])==="object"&&Object.keys(s[l]).forEach(function(d){a[l]||(a[l]={}),a[l][d]=s[l][d]})}),i.hooks){var u=i.hooks();Object.keys(u).forEach(function(l){Qe[l]||(Qe[l]=[]),Qe[l].push(u[l])})}i.provides&&i.provides(nt)}),a}function zn(t,r){for(var a=arguments.length,i=new Array(a>2?a-2:0),s=2;s<a;s++)i[s-2]=arguments[s];var u=Qe[t]||[];return u.forEach(function(l){r=l.apply(null,[r].concat(i))}),r}function ze(t){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var s=Qe[t]||[];s.forEach(function(u){u.apply(null,a)})}function ke(){var t=arguments[0],r=Array.prototype.slice.call(arguments,1);return nt[t]?nt[t].apply(null,r):void 0}function Hn(t){t.prefix==="fa"&&(t.prefix="fas");var r=t.iconName,a=t.prefix||Le();if(r)return r=Fe(a,r)||r,wa(gi.definitions,a,r)||wa(ge.styles,a,r)}var gi=new Yc,qc=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,ze("noAuto")},Gc={i2svg:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ce?(ze("beforeI2svg",r),ke("pseudoElements2svg",r),ke("i2svg",r)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=r.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,Lc(function(){Kc({autoReplaceSvgRoot:a}),ze("watch",r)})}},Xc={icon:function(r){if(r===null)return null;if(Jt(r)==="object"&&r.prefix&&r.iconName)return{prefix:r.prefix,iconName:Fe(r.prefix,r.iconName)||r.iconName};if(Array.isArray(r)&&r.length===2){var a=r[1].indexOf("fa-")===0?r[1].slice(3):r[1],i=on(r[0]);return{prefix:i,iconName:Fe(i,a)||a}}if(typeof r=="string"&&(r.indexOf("".concat(C.cssPrefix,"-"))>-1||r.match(hc))){var s=sn(r.split(" "),{skipLookups:!0});return{prefix:s.prefix||Le(),iconName:Fe(s.prefix,s.iconName)||s.iconName}}if(typeof r=="string"){var u=Le();return{prefix:u,iconName:Fe(u,r)||r}}}},de={noAuto:qc,config:C,dom:Gc,parse:Xc,library:gi,findIconDefinition:Hn,toHtml:Pt},Kc=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=r.autoReplaceSvgRoot,i=a===void 0?Y:a;(Object.keys(ge.styles).length>0||C.autoFetchSvg)&&Ce&&C.autoReplaceSvg&&de.dom.i2svg({node:i})};function ln(t,r){return Object.defineProperty(t,"abstract",{get:r}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return Pt(i)})}}),Object.defineProperty(t,"node",{get:function(){if(Ce){var i=Y.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function Zc(t){var r=t.children,a=t.main,i=t.mask,s=t.attributes,u=t.styles,l=t.transform;if(sr(l)&&a.found&&!i.found){var d=a.width,p=a.height,f={x:d/p/2,y:.5};s.style=an(x(x({},u),{},{"transform-origin":"".concat(f.x+l.x/16,"em ").concat(f.y+l.y/16,"em")}))}return[{tag:"svg",attributes:s,children:r}]}function Jc(t){var r=t.prefix,a=t.iconName,i=t.children,s=t.attributes,u=t.symbol,l=u===!0?"".concat(r,"-").concat(C.cssPrefix,"-").concat(a):u;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:x(x({},s),{},{id:l}),children:i}]}]}function fr(t){var r=t.icons,a=r.main,i=r.mask,s=t.prefix,u=t.iconName,l=t.transform,d=t.symbol,p=t.title,f=t.maskId,g=t.titleId,b=t.extra,w=t.watchable,k=w===void 0?!1:w,O=i.found?i:a,B=O.width,I=O.height,H=s==="fak",T=[C.replacementClass,u?"".concat(C.cssPrefix,"-").concat(u):""].filter(function(S){return b.classes.indexOf(S)===-1}).filter(function(S){return S!==""||!!S}).concat(b.classes).join(" "),D={children:[],attributes:x(x({},b.attributes),{},{"data-prefix":s,"data-icon":u,class:T,role:b.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(B," ").concat(I)})},z=H&&!~b.classes.indexOf("fa-fw")?{width:"".concat(B/I*16*.0625,"em")}:{};k&&(D.attributes[Re]=""),p&&(D.children.push({tag:"title",attributes:{id:D.attributes["aria-labelledby"]||"title-".concat(g||St())},children:[p]}),delete D.attributes.title);var F=x(x({},D),{},{prefix:s,iconName:u,main:a,mask:i,maskId:f,transform:l,symbol:d,styles:x(x({},z),b.styles)}),j=i.found&&a.found?ke("generateAbstractMask",F)||{children:[],attributes:{}}:ke("generateAbstractIcon",F)||{children:[],attributes:{}},A=j.children,_=j.attributes;return F.children=A,F.attributes=_,d?Jc(F):Zc(F)}function Sa(t){var r=t.content,a=t.width,i=t.height,s=t.transform,u=t.title,l=t.extra,d=t.watchable,p=d===void 0?!1:d,f=x(x(x({},l.attributes),u?{title:u}:{}),{},{class:l.classes.join(" ")});p&&(f[Re]="");var g=x({},l.styles);sr(s)&&(g.transform=_c({transform:s,startCentered:!0,width:a,height:i}),g["-webkit-transform"]=g.transform);var b=an(g);b.length>0&&(f.style=b);var w=[];return w.push({tag:"span",attributes:f,children:[r]}),u&&w.push({tag:"span",attributes:{class:"sr-only"},children:[u]}),w}function Qc(t){var r=t.content,a=t.title,i=t.extra,s=x(x(x({},i.attributes),a?{title:a}:{}),{},{class:i.classes.join(" ")}),u=an(i.styles);u.length>0&&(s.style=u);var l=[];return l.push({tag:"span",attributes:s,children:[r]}),a&&l.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),l}var jn=ge.styles;function Un(t){var r=t[0],a=t[1],i=t.slice(4),s=tr(i,1),u=s[0],l=null;return Array.isArray(u)?l={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(De.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(De.SECONDARY),fill:"currentColor",d:u[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(De.PRIMARY),fill:"currentColor",d:u[1]}}]}:l={tag:"path",attributes:{fill:"currentColor",d:u}},{found:!0,width:r,height:a,icon:l}}var eu={found:!1,width:512,height:512};function tu(t,r){!ni&&!C.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(r,'" is missing.'))}function Yn(t,r){var a=r;return r==="fa"&&C.styleDefault!==null&&(r=Le()),new Promise(function(i,s){if(ke("missingIconAbstract"),a==="fa"){var u=hi(t)||{};t=u.iconName||t,r=u.prefix||r}if(t&&r&&jn[r]&&jn[r][t]){var l=jn[r][t];return i(Un(l))}tu(t,r),i(x(x({},eu),{},{icon:C.showMissingIcons&&t?ke("missingIconAbstract")||{}:{}}))})}var Oa=function(){},Wn=C.measurePerformance&&Rt&&Rt.mark&&Rt.measure?Rt:{mark:Oa,measure:Oa},gt='FA "6.4.0"',nu=function(r){return Wn.mark("".concat(gt," ").concat(r," begins")),function(){return bi(r)}},bi=function(r){Wn.mark("".concat(gt," ").concat(r," ends")),Wn.measure("".concat(gt," ").concat(r),"".concat(gt," ").concat(r," begins"),"".concat(gt," ").concat(r," ends"))},dr={begin:nu,end:bi},Xt=function(){};function Ea(t){var r=t.getAttribute?t.getAttribute(Re):null;return typeof r=="string"}function ru(t){var r=t.getAttribute?t.getAttribute(rr):null,a=t.getAttribute?t.getAttribute(ar):null;return r&&a}function au(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(C.replacementClass)}function iu(){if(C.autoReplaceSvg===!0)return Kt.replace;var t=Kt[C.autoReplaceSvg];return t||Kt.replace}function ou(t){return Y.createElementNS("http://www.w3.org/2000/svg",t)}function su(t){return Y.createElement(t)}function vi(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.ceFn,i=a===void 0?t.tag==="svg"?ou:su:a;if(typeof t=="string")return Y.createTextNode(t);var s=i(t.tag);Object.keys(t.attributes||[]).forEach(function(l){s.setAttribute(l,t.attributes[l])});var u=t.children||[];return u.forEach(function(l){s.appendChild(vi(l,{ceFn:i}))}),s}function lu(t){var r=" ".concat(t.outerHTML," ");return r="".concat(r,"Font Awesome fontawesome.com "),r}var Kt={replace:function(r){var a=r[0];if(a.parentNode)if(r[1].forEach(function(s){a.parentNode.insertBefore(vi(s),a)}),a.getAttribute(Re)===null&&C.keepOriginalSource){var i=Y.createComment(lu(a));a.parentNode.replaceChild(i,a)}else a.remove()},nest:function(r){var a=r[0],i=r[1];if(~or(a).indexOf(C.replacementClass))return Kt.replace(r);var s=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var u=i[0].attributes.class.split(" ").reduce(function(d,p){return p===C.replacementClass||p.match(s)?d.toSvg.push(p):d.toNode.push(p),d},{toNode:[],toSvg:[]});i[0].attributes.class=u.toSvg.join(" "),u.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",u.toNode.join(" "))}var l=i.map(function(d){return Pt(d)}).join(`
`);a.setAttribute(Re,""),a.innerHTML=l}};function Pa(t){t()}function yi(t,r){var a=typeof r=="function"?r:Xt;if(t.length===0)a();else{var i=Pa;C.mutateApproach===dc&&(i=Te.requestAnimationFrame||Pa),i(function(){var s=iu(),u=dr.begin("mutate");t.map(s),u(),a()})}}var mr=!1;function wi(){mr=!0}function Vn(){mr=!1}var en=null;function Aa(t){if(ba&&C.observeMutations){var r=t.treeCallback,a=r===void 0?Xt:r,i=t.nodeCallback,s=i===void 0?Xt:i,u=t.pseudoElementsCallback,l=u===void 0?Xt:u,d=t.observeMutationsRoot,p=d===void 0?Y:d;en=new ba(function(f){if(!mr){var g=Le();at(f).forEach(function(b){if(b.type==="childList"&&b.addedNodes.length>0&&!Ea(b.addedNodes[0])&&(C.searchPseudoElements&&l(b.target),a(b.target)),b.type==="attributes"&&b.target.parentNode&&C.searchPseudoElements&&l(b.target.parentNode),b.type==="attributes"&&Ea(b.target)&&~yc.indexOf(b.attributeName))if(b.attributeName==="class"&&ru(b.target)){var w=sn(or(b.target)),k=w.prefix,O=w.iconName;b.target.setAttribute(rr,k||g),O&&b.target.setAttribute(ar,O)}else au(b.target)&&s(b.target)})}}),Ce&&en.observe(p,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function cu(){en&&en.disconnect()}function uu(t){var r=t.getAttribute("style"),a=[];return r&&(a=r.split(";").reduce(function(i,s){var u=s.split(":"),l=u[0],d=u.slice(1);return l&&d.length>0&&(i[l]=d.join(":").trim()),i},{})),a}function fu(t){var r=t.getAttribute("data-prefix"),a=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",s=sn(or(t));return s.prefix||(s.prefix=Le()),r&&a&&(s.prefix=r,s.iconName=a),s.iconName&&s.prefix||(s.prefix&&i.length>0&&(s.iconName=Hc(s.prefix,t.innerText)||cr(s.prefix,Fn(t.innerText))),!s.iconName&&C.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function du(t){var r=at(t.attributes).reduce(function(s,u){return s.name!=="class"&&s.name!=="style"&&(s[u.name]=u.value),s},{}),a=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return C.autoA11y&&(a?r["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(i||St()):(r["aria-hidden"]="true",r.focusable="false")),r}function mu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ve,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _a(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=fu(t),i=a.iconName,s=a.prefix,u=a.rest,l=du(t),d=zn("parseNodeAttributes",{},t),p=r.styleParser?uu(t):[];return x({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:ve,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:u,styles:p,attributes:l}},d)}var pu=ge.styles;function xi(t){var r=C.autoReplaceSvg==="nest"?_a(t,{styleParser:!1}):_a(t);return~r.extra.classes.indexOf(ri)?ke("generateLayersText",t,r):ke("generateSvgReplacementMutation",t,r)}var Ne=new Set;ir.map(function(t){Ne.add("fa-".concat(t))});Object.keys(wt[U]).map(Ne.add.bind(Ne));Object.keys(wt[G]).map(Ne.add.bind(Ne));Ne=Ot(Ne);function ja(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ce)return Promise.resolve();var a=Y.documentElement.classList,i=function(b){return a.add("".concat(va,"-").concat(b))},s=function(b){return a.remove("".concat(va,"-").concat(b))},u=C.autoFetchSvg?Ne:ir.map(function(g){return"fa-".concat(g)}).concat(Object.keys(pu));u.includes("fa")||u.push("fa");var l=[".".concat(ri,":not([").concat(Re,"])")].concat(u.map(function(g){return".".concat(g,":not([").concat(Re,"])")})).join(", ");if(l.length===0)return Promise.resolve();var d=[];try{d=at(t.querySelectorAll(l))}catch{}if(d.length>0)i("pending"),s("complete");else return Promise.resolve();var p=dr.begin("onTree"),f=d.reduce(function(g,b){try{var w=xi(b);w&&g.push(w)}catch(k){ni||k.name==="MissingIcon"&&console.error(k)}return g},[]);return new Promise(function(g,b){Promise.all(f).then(function(w){yi(w,function(){i("active"),i("complete"),s("pending"),typeof r=="function"&&r(),p(),g()})}).catch(function(w){p(),b(w)})})}function hu(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;xi(t).then(function(a){a&&yi([a],r)})}function gu(t){return function(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(r||{}).icon?r:Hn(r||{}),s=a.mask;return s&&(s=(s||{}).icon?s:Hn(s||{})),t(i,x(x({},a),{},{mask:s}))}}var bu=function(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.transform,s=i===void 0?ve:i,u=a.symbol,l=u===void 0?!1:u,d=a.mask,p=d===void 0?null:d,f=a.maskId,g=f===void 0?null:f,b=a.title,w=b===void 0?null:b,k=a.titleId,O=k===void 0?null:k,B=a.classes,I=B===void 0?[]:B,H=a.attributes,T=H===void 0?{}:H,D=a.styles,z=D===void 0?{}:D;if(r){var F=r.prefix,j=r.iconName,A=r.icon;return ln(x({type:"icon"},r),function(){return ze("beforeDOMElementCreation",{iconDefinition:r,params:a}),C.autoA11y&&(w?T["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(O||St()):(T["aria-hidden"]="true",T.focusable="false")),fr({icons:{main:Un(A),mask:p?Un(p.icon):{found:!1,width:null,height:null,icon:{}}},prefix:F,iconName:j,transform:x(x({},ve),s),symbol:l,title:w,maskId:g,titleId:O,extra:{attributes:T,styles:z,classes:I}})})}},vu={mixout:function(){return{icon:gu(bu)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=ja,a.nodeCallback=hu,a}}},provides:function(r){r.i2svg=function(a){var i=a.node,s=i===void 0?Y:i,u=a.callback,l=u===void 0?function(){}:u;return ja(s,l)},r.generateSvgReplacementMutation=function(a,i){var s=i.iconName,u=i.title,l=i.titleId,d=i.prefix,p=i.transform,f=i.symbol,g=i.mask,b=i.maskId,w=i.extra;return new Promise(function(k,O){Promise.all([Yn(s,d),g.iconName?Yn(g.iconName,g.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(B){var I=tr(B,2),H=I[0],T=I[1];k([a,fr({icons:{main:H,mask:T},prefix:d,iconName:s,transform:p,symbol:f,maskId:b,title:u,titleId:l,extra:w,watchable:!0})])}).catch(O)})},r.generateAbstractIcon=function(a){var i=a.children,s=a.attributes,u=a.main,l=a.transform,d=a.styles,p=an(d);p.length>0&&(s.style=p);var f;return sr(l)&&(f=ke("generateAbstractTransformGrouping",{main:u,transform:l,containerWidth:u.width,iconWidth:u.width})),i.push(f||u.icon),{children:i,attributes:s}}}},yu={mixout:function(){return{layer:function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.classes,u=s===void 0?[]:s;return ln({type:"layer"},function(){ze("beforeDOMElementCreation",{assembler:a,params:i});var l=[];return a(function(d){Array.isArray(d)?d.map(function(p){l=l.concat(p.abstract)}):l=l.concat(d.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(Ot(u)).join(" ")},children:l}]})}}}},wu={mixout:function(){return{counter:function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.title,u=s===void 0?null:s,l=i.classes,d=l===void 0?[]:l,p=i.attributes,f=p===void 0?{}:p,g=i.styles,b=g===void 0?{}:g;return ln({type:"counter",content:a},function(){return ze("beforeDOMElementCreation",{content:a,params:i}),Qc({content:a.toString(),title:u,extra:{attributes:f,styles:b,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(Ot(d))}})})}}}},xu={mixout:function(){return{text:function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.transform,u=s===void 0?ve:s,l=i.title,d=l===void 0?null:l,p=i.classes,f=p===void 0?[]:p,g=i.attributes,b=g===void 0?{}:g,w=i.styles,k=w===void 0?{}:w;return ln({type:"text",content:a},function(){return ze("beforeDOMElementCreation",{content:a,params:i}),Sa({content:a,transform:x(x({},ve),u),title:d,extra:{attributes:b,styles:k,classes:["".concat(C.cssPrefix,"-layers-text")].concat(Ot(f))}})})}}},provides:function(r){r.generateLayersText=function(a,i){var s=i.title,u=i.transform,l=i.extra,d=null,p=null;if(Qa){var f=parseInt(getComputedStyle(a).fontSize,10),g=a.getBoundingClientRect();d=g.width/f,p=g.height/f}return C.autoA11y&&!s&&(l.attributes["aria-hidden"]="true"),Promise.resolve([a,Sa({content:a.innerHTML,width:d,height:p,transform:u,title:s,extra:l,watchable:!0})])}}},ku=new RegExp('"',"ug"),Ia=[1105920,1112319];function Cu(t){var r=t.replace(ku,""),a=$c(r,0),i=a>=Ia[0]&&a<=Ia[1],s=r.length===2?r[0]===r[1]:!1;return{value:Fn(s?r[0]:r),isSecondary:i||s}}function Ta(t,r){var a="".concat(fc).concat(r.replace(":","-"));return new Promise(function(i,s){if(t.getAttribute(a)!==null)return i();var u=at(t.children),l=u.filter(function(A){return A.getAttribute(Dn)===r})[0],d=Te.getComputedStyle(t,r),p=d.getPropertyValue("font-family").match(gc),f=d.getPropertyValue("font-weight"),g=d.getPropertyValue("content");if(l&&!p)return t.removeChild(l),i();if(p&&g!=="none"&&g!==""){var b=d.getPropertyValue("content"),w=~["Sharp"].indexOf(p[2])?G:U,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(p[2])?xt[w][p[2].toLowerCase()]:bc[w][f],O=Cu(b),B=O.value,I=O.isSecondary,H=p[0].startsWith("FontAwesome"),T=cr(k,B),D=T;if(H){var z=Uc(B);z.iconName&&z.prefix&&(T=z.iconName,k=z.prefix)}if(T&&!I&&(!l||l.getAttribute(rr)!==k||l.getAttribute(ar)!==D)){t.setAttribute(a,D),l&&t.removeChild(l);var F=mu(),j=F.extra;j.attributes[Dn]=r,Yn(T,k).then(function(A){var _=fr(x(x({},F),{},{icons:{main:A,mask:ur()},prefix:k,iconName:D,extra:j,watchable:!0})),S=Y.createElement("svg");r==="::before"?t.insertBefore(S,t.firstChild):t.appendChild(S),S.outerHTML=_.map(function(y){return Pt(y)}).join(`
`),t.removeAttribute(a),i()}).catch(s)}else i()}else i()})}function Su(t){return Promise.all([Ta(t,"::before"),Ta(t,"::after")])}function Ou(t){return t.parentNode!==document.head&&!~mc.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Dn)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function La(t){if(Ce)return new Promise(function(r,a){var i=at(t.querySelectorAll("*")).filter(Ou).map(Su),s=dr.begin("searchPseudoElements");wi(),Promise.all(i).then(function(){s(),Vn(),r()}).catch(function(){s(),Vn(),a()})})}var Eu={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=La,a}}},provides:function(r){r.pseudoElements2svg=function(a){var i=a.node,s=i===void 0?Y:i;C.searchPseudoElements&&La(s)}}},Na=!1,Pu={mixout:function(){return{dom:{unwatch:function(){wi(),Na=!0}}}},hooks:function(){return{bootstrap:function(){Aa(zn("mutationObserverCallbacks",{}))},noAuto:function(){cu()},watch:function(a){var i=a.observeMutationsRoot;Na?Vn():Aa(zn("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Ma=function(r){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return r.toLowerCase().split(" ").reduce(function(i,s){var u=s.toLowerCase().split("-"),l=u[0],d=u.slice(1).join("-");if(l&&d==="h")return i.flipX=!0,i;if(l&&d==="v")return i.flipY=!0,i;if(d=parseFloat(d),isNaN(d))return i;switch(l){case"grow":i.size=i.size+d;break;case"shrink":i.size=i.size-d;break;case"left":i.x=i.x-d;break;case"right":i.x=i.x+d;break;case"up":i.y=i.y-d;break;case"down":i.y=i.y+d;break;case"rotate":i.rotate=i.rotate+d;break}return i},a)},Au={mixout:function(){return{parse:{transform:function(a){return Ma(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,i){var s=i.getAttribute("data-fa-transform");return s&&(a.transform=Ma(s)),a}}},provides:function(r){r.generateAbstractTransformGrouping=function(a){var i=a.main,s=a.transform,u=a.containerWidth,l=a.iconWidth,d={transform:"translate(".concat(u/2," 256)")},p="translate(".concat(s.x*32,", ").concat(s.y*32,") "),f="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),g="rotate(".concat(s.rotate," 0 0)"),b={transform:"".concat(p," ").concat(f," ").concat(g)},w={transform:"translate(".concat(l/2*-1," -256)")},k={outer:d,inner:b,path:w};return{tag:"g",attributes:x({},k.outer),children:[{tag:"g",attributes:x({},k.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:x(x({},i.icon.attributes),k.path)}]}]}}}},In={x:0,y:0,width:"100%",height:"100%"};function $a(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||r)&&(t.attributes.fill="black"),t}function _u(t){return t.tag==="g"?t.children:[t]}var ju={hooks:function(){return{parseNodeAttributes:function(a,i){var s=i.getAttribute("data-fa-mask"),u=s?sn(s.split(" ").map(function(l){return l.trim()})):ur();return u.prefix||(u.prefix=Le()),a.mask=u,a.maskId=i.getAttribute("data-fa-mask-id"),a}}},provides:function(r){r.generateAbstractMask=function(a){var i=a.children,s=a.attributes,u=a.main,l=a.mask,d=a.maskId,p=a.transform,f=u.width,g=u.icon,b=l.width,w=l.icon,k=Ac({transform:p,containerWidth:b,iconWidth:f}),O={tag:"rect",attributes:x(x({},In),{},{fill:"white"})},B=g.children?{children:g.children.map($a)}:{},I={tag:"g",attributes:x({},k.inner),children:[$a(x({tag:g.tag,attributes:x(x({},g.attributes),k.path)},B))]},H={tag:"g",attributes:x({},k.outer),children:[I]},T="mask-".concat(d||St()),D="clip-".concat(d||St()),z={tag:"mask",attributes:x(x({},In),{},{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[O,H]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:D},children:_u(w)},z]};return i.push(F,{tag:"rect",attributes:x({fill:"currentColor","clip-path":"url(#".concat(D,")"),mask:"url(#".concat(T,")")},In)}),{children:i,attributes:s}}}},Iu={provides:function(r){var a=!1;Te.matchMedia&&(a=Te.matchMedia("(prefers-reduced-motion: reduce)").matches),r.missingIconAbstract=function(){var i=[],s={fill:"currentColor"},u={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:x(x({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var l=x(x({},u),{},{attributeName:"opacity"}),d={tag:"circle",attributes:x(x({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||d.children.push({tag:"animate",attributes:x(x({},u),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:x(x({},l),{},{values:"1;0;1;1;0;1;"})}),i.push(d),i.push({tag:"path",attributes:x(x({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:x(x({},l),{},{values:"1;0;0;0;0;1;"})}]}),a||i.push({tag:"path",attributes:x(x({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:x(x({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},Tu={hooks:function(){return{parseNodeAttributes:function(a,i){var s=i.getAttribute("data-fa-symbol"),u=s===null?!1:s===""?!0:s;return a.symbol=u,a}}}},Lu=[Ic,vu,yu,wu,xu,Eu,Pu,Au,ju,Iu,Tu];Vc(Lu,{mixoutsTo:de});de.noAuto;de.config;de.library;de.dom;var qn=de.parse;de.findIconDefinition;de.toHtml;var Nu=de.icon;de.layer;de.text;de.counter;function Ba(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);r&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),a.push.apply(a,i)}return a}function Ie(t){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?Ba(Object(a),!0).forEach(function(i){et(t,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Ba(Object(a)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(a,i))})}return t}function tn(t){"@babel/helpers - typeof";return tn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},tn(t)}function et(t,r,a){return r in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t}function Mu(t,r){if(t==null)return{};var a={},i=Object.keys(t),s,u;for(u=0;u<i.length;u++)s=i[u],!(r.indexOf(s)>=0)&&(a[s]=t[s]);return a}function $u(t,r){if(t==null)return{};var a=Mu(t,r),i,s;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(s=0;s<u.length;s++)i=u[s],!(r.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}function Gn(t){return Bu(t)||Du(t)||Fu(t)||Ru()}function Bu(t){if(Array.isArray(t))return Xn(t)}function Du(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Fu(t,r){if(t){if(typeof t=="string")return Xn(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Xn(t,r)}}function Xn(t,r){(r==null||r>t.length)&&(r=t.length);for(var a=0,i=new Array(r);a<r;a++)i[a]=t[a];return i}function Ru(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zu(t){var r,a=t.beat,i=t.fade,s=t.beatFade,u=t.bounce,l=t.shake,d=t.flash,p=t.spin,f=t.spinPulse,g=t.spinReverse,b=t.pulse,w=t.fixedWidth,k=t.inverse,O=t.border,B=t.listItem,I=t.flip,H=t.size,T=t.rotation,D=t.pull,z=(r={"fa-beat":a,"fa-fade":i,"fa-beat-fade":s,"fa-bounce":u,"fa-shake":l,"fa-flash":d,"fa-spin":p,"fa-spin-reverse":g,"fa-spin-pulse":f,"fa-pulse":b,"fa-fw":w,"fa-inverse":k,"fa-border":O,"fa-li":B,"fa-flip":I===!0,"fa-flip-horizontal":I==="horizontal"||I==="both","fa-flip-vertical":I==="vertical"||I==="both"},et(r,"fa-".concat(H),typeof H<"u"&&H!==null),et(r,"fa-rotate-".concat(T),typeof T<"u"&&T!==null&&T!==0),et(r,"fa-pull-".concat(D),typeof D<"u"&&D!==null),et(r,"fa-swap-opacity",t.swapOpacity),r);return Object.keys(z).map(function(F){return z[F]?F:null}).filter(function(F){return F})}function Hu(t){return t=t-0,t===t}function ki(t){return Hu(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(r,a){return a?a.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Uu=["style"];function Yu(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Wu(t){return t.split(";").map(function(r){return r.trim()}).filter(function(r){return r}).reduce(function(r,a){var i=a.indexOf(":"),s=ki(a.slice(0,i)),u=a.slice(i+1).trim();return s.startsWith("webkit")?r[Yu(s)]=u:r[s]=u,r},{})}function Ci(t,r){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof r=="string")return r;var i=(r.children||[]).map(function(p){return Ci(t,p)}),s=Object.keys(r.attributes||{}).reduce(function(p,f){var g=r.attributes[f];switch(f){case"class":p.attrs.className=g,delete r.attributes.class;break;case"style":p.attrs.style=Wu(g);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?p.attrs[f.toLowerCase()]=g:p.attrs[ki(f)]=g}return p},{attrs:{}}),u=a.style,l=u===void 0?{}:u,d=$u(a,Uu);return s.attrs.style=Ie(Ie({},s.attrs.style),l),t.apply(void 0,[r.tag,Ie(Ie({},s.attrs),d)].concat(Gn(i)))}var Si=!1;try{Si=!0}catch{}function Vu(){if(!Si&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Da(t){if(t&&tn(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(qn.icon)return qn.icon(t);if(t===null)return null;if(t&&tn(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Tn(t,r){return Array.isArray(r)&&r.length>0||!Array.isArray(r)&&r?et({},t,r):{}}var cn=za.forwardRef(function(t,r){var a=t.icon,i=t.mask,s=t.symbol,u=t.className,l=t.title,d=t.titleId,p=t.maskId,f=Da(a),g=Tn("classes",[].concat(Gn(zu(t)),Gn(u.split(" ")))),b=Tn("transform",typeof t.transform=="string"?qn.transform(t.transform):t.transform),w=Tn("mask",Da(i)),k=Nu(f,Ie(Ie(Ie(Ie({},g),b),w),{},{symbol:s,title:l,titleId:d,maskId:p}));if(!k)return Vu("Could not find icon",f),null;var O=k.abstract,B={ref:r};return Object.keys(t).forEach(function(I){cn.defaultProps.hasOwnProperty(I)||(B[I]=t[I])}),qu(O[0],B)});cn.displayName="FontAwesomeIcon";cn.propTypes={beat:L.bool,border:L.bool,beatFade:L.bool,bounce:L.bool,className:L.string,fade:L.bool,flash:L.bool,mask:L.oneOfType([L.object,L.array,L.string]),maskId:L.string,fixedWidth:L.bool,inverse:L.bool,flip:L.oneOf([!0,!1,"horizontal","vertical","both"]),icon:L.oneOfType([L.object,L.array,L.string]),listItem:L.bool,pull:L.oneOf(["right","left"]),pulse:L.bool,rotation:L.oneOf([0,90,180,270]),shake:L.bool,size:L.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:L.bool,spinPulse:L.bool,spinReverse:L.bool,symbol:L.oneOfType([L.bool,L.string]),title:L.string,titleId:L.string,transform:L.oneOfType([L.string,L.object]),swapOpacity:L.bool};cn.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var qu=Ci.bind(null,za.createElement),pr={},Gu=Jn;Object.defineProperty(pr,"__esModule",{value:!0});var Oi=pr.default=void 0,Xu=Gu(Zn()),Ku=m,Zu=(0,Xu.default)((0,Ku.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonAdd");Oi=pr.default=Zu;var hr={},Ju=Jn;Object.defineProperty(hr,"__esModule",{value:!0});var Ei=hr.default=void 0,Qu=Ju(Zn()),ef=m,tf=(0,Qu.default)((0,ef.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");Ei=hr.default=tf;var gr={},nf=Jn;Object.defineProperty(gr,"__esModule",{value:!0});var Pi=gr.default=void 0,rf=nf(Zn()),af=m,of=(0,rf.default)((0,af.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}),"Logout");Pi=gr.default=of;var sf={exports:{}};(function(t,r){(function(a,i,s,u,l){if("customElements"in s)l();else{if(s.AWAITING_WEB_COMPONENTS_POLYFILL)return void s.AWAITING_WEB_COMPONENTS_POLYFILL.then(l);var d=s.AWAITING_WEB_COMPONENTS_POLYFILL=g();d.then(l);var p=s.WEB_COMPONENTS_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",f=s.ES6_CORE_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";"Promise"in s?b(p).then(function(){d.isDone=!0,d.exec()}):b(f).then(function(){b(p).then(function(){d.isDone=!0,d.exec()})})}function g(){var w=[];return w.isDone=!1,w.exec=function(){w.splice(0).forEach(function(k){k()})},w.then=function(k){return w.isDone?k():w.push(k),w},w}function b(w){var k=g(),O=u.createElement("script");return O.type="text/javascript",O.readyState?O.onreadystatechange=function(){O.readyState!="loaded"&&O.readyState!="complete"||(O.onreadystatechange=null,k.isDone=!0,k.exec())}:O.onload=function(){k.isDone=!0,k.exec()},O.src=w,u.getElementsByTagName("head")[0].appendChild(O),O.then=k.then,O}})(0,0,window,document,function(){var a;a=function(){return function(i){var s={};function u(l){if(s[l])return s[l].exports;var d=s[l]={i:l,l:!1,exports:{}};return i[l].call(d.exports,d,d.exports,u),d.l=!0,d.exports}return u.m=i,u.c=s,u.d=function(l,d,p){u.o(l,d)||Object.defineProperty(l,d,{enumerable:!0,get:p})},u.r=function(l){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},u.t=function(l,d){if(1&d&&(l=u(l)),8&d||4&d&&typeof l=="object"&&l&&l.__esModule)return l;var p=Object.create(null);if(u.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:l}),2&d&&typeof l!="string")for(var f in l)u.d(p,f,function(g){return l[g]}.bind(null,f));return p},u.n=function(l){var d=l&&l.__esModule?function(){return l.default}:function(){return l};return u.d(d,"a",d),d},u.o=function(l,d){return Object.prototype.hasOwnProperty.call(l,d)},u.p="",u(u.s=5)}([function(i,s){i.exports=function(u){var l=[];return l.toString=function(){return this.map(function(d){var p=function(f,g){var b,w=f[1]||"",k=f[3];if(!k)return w;if(g&&typeof btoa=="function"){var O=(b=k,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(b))))+" */"),B=k.sources.map(function(I){return"/*# sourceURL="+k.sourceRoot+I+" */"});return[w].concat(B).concat([O]).join(`
`)}return[w].join(`
`)}(d,u);return d[2]?"@media "+d[2]+"{"+p+"}":p}).join("")},l.i=function(d,p){typeof d=="string"&&(d=[[null,d,""]]);for(var f={},g=0;g<this.length;g++){var b=this[g][0];typeof b=="number"&&(f[b]=!0)}for(g=0;g<d.length;g++){var w=d[g];typeof w[0]=="number"&&f[w[0]]||(p&&!w[2]?w[2]=p:p&&(w[2]="("+w[2]+") and ("+p+")"),l.push(w))}},l}},function(i,s,u){var l=u(3);i.exports=typeof l=="string"?l:l.toString()},function(i,s,u){var l=u(4);i.exports=typeof l=="string"?l:l.toString()},function(i,s,u){(i.exports=u(0)(!1)).push([i.i,"@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}",""])},function(i,s,u){(i.exports=u(0)(!1)).push([i.i,'.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}',""])},function(i,s,u){u.r(s),u.d(s,"BoxIconElement",function(){return F});var l,d,p,f,g=u(1),b=u.n(g),w=u(2),k=u.n(w),O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(j){return typeof j}:function(j){return j&&typeof Symbol=="function"&&j.constructor===Symbol&&j!==Symbol.prototype?"symbol":typeof j},B=function(){function j(A,_){for(var S=0;S<_.length;S++){var y=_[S];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(A,y.key,y)}}return function(A,_,S){return _&&j(A.prototype,_),S&&j(A,S),A}}(),I=(d=(l=Object).getPrototypeOf||function(j){return j.__proto__},p=l.setPrototypeOf||function(j,A){return j.__proto__=A,j},f=(typeof Reflect>"u"?"undefined":O(Reflect))==="object"?Reflect.construct:function(j,A,_){var S,y=[null];return y.push.apply(y,A),S=j.bind.apply(j,y),p(new S,_.prototype)},function(j){var A=d(j);return p(j,p(function(){return f(A,arguments,d(this).constructor)},A))}),H=window,T={},D=document.createElement("template"),z=function(){return!!H.ShadyCSS};D.innerHTML=`
<style>
:host {
  display: inline-block;
  font-size: initial;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
}
:host([size=xs]) {
    width: 0.8rem;
    height: 0.8rem;
}
:host([size=sm]) {
    width: 1.55rem;
    height: 1.55rem;
}
:host([size=md]) {
    width: 2.25rem;
    height: 2.25rem;
}
:host([size=lg]) {
    width: 3.0rem;
    height: 3.0rem;
}

:host([size]:not([size=""]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {
    width: auto;
    height: auto;
}
:host([pull=left]) #icon {
    float: left;
    margin-right: .3em!important;
}
:host([pull=right]) #icon {
    float: right;
    margin-left: .3em!important;
}
:host([border=square]) #icon {
    padding: .25em;
    border: .07em solid rgba(0,0,0,.1);
    border-radius: .25em;
}
:host([border=circle]) #icon {
    padding: .25em;
    border: .07em solid rgba(0,0,0,.1);
    border-radius: 50%;
}
#icon,
svg {
  width: 100%;
  height: 100%;
}
#icon {
    box-sizing: border-box;
} 
`+b.a+`
`+k.a+`
</style>
<div id="icon"></div>`;var F=I(function(j){function A(){(function(S,y){if(!(S instanceof y))throw new TypeError("Cannot call a class as a function")})(this,A);var _=function(S,y){if(!S)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!y||typeof y!="object"&&typeof y!="function"?S:y}(this,(A.__proto__||Object.getPrototypeOf(A)).call(this));return _.$ui=_.attachShadow({mode:"open"}),_.$ui.appendChild(_.ownerDocument.importNode(D.content,!0)),z()&&H.ShadyCSS.styleElement(_),_._state={$iconHolder:_.$ui.getElementById("icon"),type:_.getAttribute("type")},_}return function(_,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof S);_.prototype=Object.create(S&&S.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),S&&(Object.setPrototypeOf?Object.setPrototypeOf(_,S):_.__proto__=S)}(A,HTMLElement),B(A,null,[{key:"getIconSvg",value:function(_,S){var y=this.cdnUrl+"/regular/bx-"+_+".svg";return S==="solid"?y=this.cdnUrl+"/solid/bxs-"+_+".svg":S==="logo"&&(y=this.cdnUrl+"/logos/bxl-"+_+".svg"),y&&T[y]||(T[y]=new Promise(function(J,ne){var oe=new XMLHttpRequest;oe.addEventListener("load",function(){this.status<200||this.status>=300?ne(new Error(this.status+" "+this.responseText)):J(this.responseText)}),oe.onerror=ne,oe.onabort=ne,oe.open("GET",y),oe.send()})),T[y]}},{key:"define",value:function(_){_=_||this.tagName,z()&&H.ShadyCSS.prepareTemplate(D,_),customElements.define(_,this)}},{key:"cdnUrl",get:function(){return"//unpkg.com/boxicons@2.1.4/svg"}},{key:"tagName",get:function(){return"box-icon"}},{key:"observedAttributes",get:function(){return["type","name","color","size","rotate","flip","animation","border","pull"]}}]),B(A,[{key:"attributeChangedCallback",value:function(_,S,y){var J=this._state.$iconHolder;switch(_){case"type":(function(ne,oe,W){var M=ne._state;M.$iconHolder.textContent="",M.type&&(M.type=null),M.type=!W||W!=="solid"&&W!=="logo"?"regular":W,M.currentName!==void 0&&ne.constructor.getIconSvg(M.currentName,M.type).then(function(le){M.type===W&&(M.$iconHolder.innerHTML=le)}).catch(function(le){console.error("Failed to load icon: "+M.currentName+`
`+le)})})(this,0,y);break;case"name":(function(ne,oe,W){var M=ne._state;M.currentName=W,M.$iconHolder.textContent="",W&&M.type!==void 0&&ne.constructor.getIconSvg(W,M.type).then(function(le){M.currentName===W&&(M.$iconHolder.innerHTML=le)}).catch(function(le){console.error("Failed to load icon: "+W+`
`+le)})})(this,0,y);break;case"color":J.style.fill=y||"";break;case"size":(function(ne,oe,W){var M=ne._state;M.size&&(M.$iconHolder.style.width=M.$iconHolder.style.height="",M.size=M.sizeType=null),W&&!/^(xs|sm|md|lg)$/.test(M.size)&&(M.size=W.trim(),M.$iconHolder.style.width=M.$iconHolder.style.height=M.size)})(this,0,y);break;case"rotate":S&&J.classList.remove("bx-rotate-"+S),y&&J.classList.add("bx-rotate-"+y);break;case"flip":S&&J.classList.remove("bx-flip-"+S),y&&J.classList.add("bx-flip-"+y);break;case"animation":S&&J.classList.remove("bx-"+S),y&&J.classList.add("bx-"+y)}}},{key:"connectedCallback",value:function(){z()&&H.ShadyCSS.styleElement(this)}}]),A}());s.default=F,F.define()}])},t.exports=a()})})(sf);const ie=Kn.bind(kl),lf=[{icon:"apps",title:"Tất cả môn học",subItem:[]},{icon:"business_center",title:"Việc kinh doanh",subItem:[]},{icon:"public",title:"Nhân văn",subItem:[]},{icon:"calculate",title:"Toán học",subItem:[]},{icon:"terminal",title:"Lập trình",subItem:["Lập trình C/C++","Lập trình Python","Lập trình Java","Lập trình JavaScript"]},{icon:"science",title:"Khoa học",subItem:[]},{icon:"create",title:"Viết",subItem:[]}],cf=({data:t})=>m.jsxs("li",{className:ie("sub-menu"),children:[m.jsxs("div",{className:"d-flex align-items-center pb-2",children:[t.icon?m.jsx("span",{className:"material-icons",style:{color:"#1ab9f4"},children:t.icon}):null,m.jsx("span",{className:"ms-1",children:t.title}),t.subItem?m.jsx("span",{className:"material-icons",children:"arrow_drop_down"}):null]}),m.jsx("ul",{className:"bg-white",children:t.subItem.map((r,a)=>m.jsx("li",{className:"py-2 ps-4 pe-3",children:r},a))})]}),Fa=({show:t,children:r})=>m.jsx("div",{className:ie("modal-wrapper",{show:t}),children:r}),uf=()=>{const[t,r]=N.useState(!1),[a,i]=N.useState([]),[s,u]=N.useState(null),[l,d]=N.useState([]),[p,f]=N.useState([]),[g,b]=N.useState([]);N.useState("");const[w,k]=N.useState(!1),[O,B]=N.useState(!1),[I,H]=N.useState(""),[T,D]=N.useState(""),[z,F]=N.useState(""),[j,A]=N.useState(""),[_,S]=N.useState(!1),[y,J]=N.useState(!1),[ne,oe]=N.useState(!1),[W,M]=N.useState(!1);N.useState(!1);const[le,Me]=N.useState(!1),[ce,ue]=N.useState(!1),[be,At]=N.useState(!1);N.useState([]);const[Se,ye]=N.useState(!1),_t=Zs({onSuccess:P=>i(P),onError:P=>console.log("Login Failed:",P)}),Oe=!!s,it=P=>{u(P.currentTarget)},Ee=()=>{u(null),r(!1)};N.useEffect(()=>{a!=null&&Js.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${a.access_token}`,{headers:{Authorization:`Bearer ${t.access_token}`,Accept:"application/json"}}).then(P=>{b(P.data)}).catch(P=>{})},[a]),N.useEffect(()=>{g&&Mt("users/loginGoogle",g,{withCredentials:!0}).then(P=>{r(!0),f({id:P.id,name:P.name,avatar:P.avatar}),k(!1),ye(!1)}).catch(P=>{console.log("dang nhap k thanh cong")})},[g]),N.useEffect(()=>{Ln("current-user",{withCredentials:!0}).then(P=>{P.is_active===!0&&(r(!0),d({id:P.id,username:P.username,avatar:P.avatar}))})},[t]);const ot=()=>{Ge.fire({icon:"success",title:"Đăng kí thành công",text:"Chúc bạn có một trải nghiệm tốt lành!",willClose:Me(!1)})},st=()=>{let P;Ge.fire({title:"Xác nhận email !",html:"Hãy xác nhận email của bạn trong <b></b> giây .",timer:5e3,timerProgressBar:!0,didOpen:()=>{Ge.showLoading();const V=Ge.getHtmlContainer().querySelector("b");let q;P=setInterval(()=>{q=Math.floor(Ge.getTimerLeft()/1e3),V.textContent=q},1e3)},willClose:()=>{M(!1),clearInterval(P)}}).then(V=>{V.dismiss===Ge.DismissReason.timer&&console.log("I was closed by the timer")})};N.useEffect(()=>{J(I!==""&&T!==""&&z!==""&&j!==""&&_)},[I,T,z,j,_]);const[He,un]=N.useState({name:I,email:z,password:T}),[re,pe]=N.useState({username:I,password:T}),fn=()=>{k(!0),B(!1)};N.useEffect(()=>{O?un({name:I,email:z,password:T}):pe({username:I,password:T})},[I,z,T]),N.useEffect(()=>{if(W===!0&&W===!0){const V=setInterval(()=>{Ln("users/confirm-status/",{headers:{"Content-Type":"application/json"},credentials:"include"}).then(q=>{q.status===200?(clearInterval(V),M(!1),ue(!1),Me(!0),console.log(" xac thuc email thanh cong")):q.status===404?console.log("That bai"):console.log("12123")})},3e3);setTimeout(()=>{clearInterval(V)},5e3)}},[W]);const ae=P=>{P.preventDefault(),T===j?(ue(!0),oe(!1),Mt("users/register",He,{headers:{"Content-Type":"application/json"},credentials:"include"}).then(V=>{V.status===200?(B(!1),console.log("dang ki thanh cong"),M(!0)):V.status===404&&(console.log("dang ki That bai"),ue(!1),At(!0),M(!1))}).catch(V=>{})):oe(!0)},lt=P=>{P.preventDefault(),Mt("users/login",re,{withCredentials:!0}).then(V=>{r(!0),d({id:V.id,username:V.username,avatar:V.avatar}),k(!1),ye(!1)}).catch(V=>{ye(!0),console.log("dang nhap k thanh cong")})},ct=()=>{At(!1),D(""),F(""),H(""),A(""),ue(!1),k(!1),B(!0)},ut=()=>{H(""),B(!1),k(!1)},$=()=>{ue(!1)},me=()=>{Mt("users/logout",l.id,{withCredentials:!0}).then(P=>{}).catch(P=>{}),r(!1)};return m.jsxs(m.Fragment,{children:[le&&m.jsx(ot,{onClose:$}),m.jsx(Fa,{show:w,children:m.jsxs("div",{className:ie("modal-inner"),children:[m.jsx("h2",{children:"Đăng nhập bằng "}),Se&&m.jsx("h2",{style:{fontSize:"16px",color:"red"},children:"Tài khoản hoặc mật khẩu sai !"}),m.jsx("span",{className:ie("cancel","material-icons"),onClick:ut,children:"cancel"}),m.jsx("div",{className:"d-flex g-2 justify-content-center",children:m.jsx("div",{id:"signInGoogle",children:m.jsx(m.Fragment,{children:m.jsx(tc,{type:"dark",label:"Đăng nhập với Google ",size:"small",onClick:()=>_t()})})})}),m.jsx("p",{className:"mt-3",children:"hoặc"}),m.jsxs("form",{onSubmit:lt,children:[m.jsxs("div",{className:"mb-3 text-start",children:[m.jsx("label",{htmlFor:"login-email",className:"form-label",children:"Tên người dùng hoặc email"}),m.jsx("input",{onChange:P=>H(P.target.value),type:"text",className:"form-control",id:"login-email",placeholder:"Tên tài khoản..."})]}),m.jsxs("div",{className:"text-start",children:[m.jsx("label",{htmlFor:"login-password",className:"form-label",children:"Mật khẩu"}),m.jsx("input",{onChange:P=>D(P.target.value),type:"password",className:"form-control",id:"login-password",placeholder:"Mật khẩu..."})]}),m.jsxs("div",{className:"d-flex justify-content-between mt-3",children:[m.jsxs("div",{children:[m.jsx("input",{type:"checkbox",id:"login-remember",name:"login-remember"}),m.jsx("label",{htmlFor:"login-remember",children:"Ghi nhớ tôi"})]}),m.jsx(Ke,{to:"/",children:"Quên mật khẩu"})]}),m.jsx(On,{className:"w-100 mt-3",children:"ĐĂNG NHẬP"})]}),m.jsxs("p",{className:"text-center mt-3",children:["Đây là lần đầu tiên của bạn? ",m.jsx("b",{style:{cursor:"pointer"},onClick:ct,children:"Đăng ký ngay"})]})]})}),m.jsx(Fa,{show:O,children:m.jsxs("div",{className:ie("modal-inner"),style:{height:"550px"},children:[m.jsx("h2",{children:"Đăng ký"}),ne&&m.jsx("h2",{style:{fontSize:"18px",color:"red",fontWeight:"600"},children:"Xác nhận mật khẩu không đúng !!"}),m.jsx("span",{className:ie("cancel","material-icons"),onClick:ut,children:"cancel"}),be&&m.jsxs("h2",{style:{fontSize:"18px",color:"red",fontWeight:"600"},children:["Tên người dùng hoặc email đã được sử dụng"," "]}),m.jsxs("form",{onSubmit:ae,children:[m.jsxs("div",{className:"mb-3 text-start",children:[m.jsx("label",{htmlFor:"register-username",className:"form-label",children:"Tên người dùng của bạn"}),m.jsx("input",{value:I,type:"text",onChange:P=>H(P.target.value),className:"form-control",id:"register-username",placeholder:"username"})]}),m.jsxs("div",{className:"mb-3 text-start",children:[m.jsx("label",{htmlFor:"register-email",className:"form-label",children:"Email của bạn"}),m.jsx("input",{value:z,type:"email",onChange:P=>F(P.target.value),className:"form-control",id:"register-email",placeholder:"name@example.com"})]}),m.jsxs("div",{className:"text-start",children:[m.jsx("label",{htmlFor:"register-password",className:"form-label",children:"Mật khẩu"}),m.jsx("input",{value:T,onChange:P=>D(P.target.value),type:"password",className:"form-control",id:"register-password"})]}),m.jsxs("div",{className:"text-start",children:[m.jsx("label",{htmlFor:"register-confirm-password",className:"form-label",children:"Xác nhận mật khẩu"}),m.jsx("input",{value:j,onChange:P=>A(P.target.value),type:"password",className:"form-control",id:"register-confirm-password"})]}),m.jsx("div",{className:"d-flex justify-content-between mt-3",children:m.jsxs("div",{children:[m.jsxs("label",{htmlFor:"acp-policy",style:{marginRight:"10px"},children:["Bạn đã đọc và đồng ý ",m.jsx(Ke,{to:"/",children:"điều khoản"})," của Ba Tô Phở"," "]}),m.jsx("input",{onChange:()=>S(!_),type:"checkbox",id:"acp-policy",name:"acp-policy"})]})}),m.jsxs(On,{type:"submit",className:"w-100 mt-3",disabled:!y,onClick:ae,children:[" ",m.jsxs("h1",{className:ie("register"),children:["ĐĂNG KÝ"," ",ce&&m.jsx("span",{className:ie("loading","material-icons"),children:"refresh"})]})]})]}),m.jsxs("p",{className:"text-center mt-3",style:{paddingBottom:"20px"},children:["Bạn đã có tài khoản? ",m.jsx("b",{style:{cursor:"pointer"},onClick:fn,children:"Đăng nhập"})]})]})}),W&&m.jsx(st,{}),m.jsxs("header",{className:ie("wrapper"),children:[m.jsx("div",{className:ie("logo"),children:m.jsx(Ke,{to:"/",children:m.jsx("img",{src:"/src/assets/logo.png",alt:"Logo",className:"w-100 h-100"})})}),m.jsxs("div",{className:ie("input","d-flex align-items-center"),style:{height:"40%"},children:[m.jsx("div",{className:ie("search"),children:m.jsx(jl,{placeholder:"12123123"})}),m.jsx("button",{className:"btn"})]}),m.jsx("div",{className:ie("actions"),children:t?m.jsxs(m.Fragment,{children:[m.jsx(Ke,{to:"/upload",children:m.jsx(On,{className:"me-5 btn btn-warning border",children:"Tải lên"})}),m.jsx(el,{sx:{display:"flex",alignItems:"center",textAlign:"center"},children:m.jsx(Qs,{title:"Account settings",children:m.jsx(al,{onClick:it,size:"small",sx:{ml:2},"aria-controls":Oe?"account-menu":void 0,"aria-haspopup":"true","aria-expanded":Oe?"true":void 0,children:m.jsx(Sn,{sx:{width:32,height:32},children:m.jsx("img",{className:ie("user_avatar"),src:l.avatar,alt:""})})})})}),m.jsxs(il,{anchorEl:s,id:"account-menu",open:Oe,onClose:Ee,onClick:Ee,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[m.jsx(Ke,{style:{color:"black"},to:`/profile/${l.id}`,children:m.jsxs(ht,{onClick:Ee,children:[m.jsx(Sn,{})," Profile"]})}),m.jsxs(ht,{onClick:Ee,children:[m.jsx(Sn,{})," My account"]}),m.jsx(ol,{}),m.jsxs(ht,{onClick:Ee,children:[m.jsx(Cn,{children:m.jsx(Oi,{fontSize:"small"})}),"Add another account"]}),m.jsxs(ht,{onClick:Ee,children:[m.jsx(Cn,{children:m.jsx(Ei,{fontSize:"small"})}),"Settings"]}),m.jsxs(ht,{onClick:me,children:[m.jsx(Cn,{children:m.jsx(Pi,{fontSize:"small"})}),"Logout"]})]})]}):m.jsxs(m.Fragment,{children:[m.jsx(oa,{variant:"contained",className:"me-2",color:"info",onClick:()=>{k(!0)},children:"Đăng nhập"}),m.jsx(oa,{variant:"contained",color:"inherit",className:"me",onClick:ct,children:"Đăng ký"})]})})]}),m.jsx("ul",{className:ie("menu","d-flex justify-content-around mt-2"),children:lf.map((P,V)=>m.jsx(cf,{data:P},V))})]})},ff=()=>m.jsxs(tl,{bgColor:"light",className:"text-center text-lg-start text-muted",children:[m.jsx("section",{className:"",style:{background:"#011b30",color:"white",paddingTop:"8px"},children:m.jsx(nl,{className:"text-center text-md-start mt-5",children:m.jsxs(rl,{className:"mt-3",children:[m.jsxs($t,{md:"3",lg:"4",xl:"3",className:"mx-auto mb-4",children:[m.jsxs("h6",{className:"text-uppercase fw-bold mb-4",children:[m.jsx(Bt,{icon:"gem",className:"me-3"}),"Ba To Pho"]}),m.jsx("p",{children:'"Kiến thức là sức mạnh", vì vậy để chúng tôi cùng phát triển sức mạnh cùng bạn qua chặng đường học tập cùng với những tài liệu'})]}),m.jsxs($t,{md:"2",lg:"2",xl:"2",className:"mx-auto mb-4",children:[m.jsx("h6",{className:"text-uppercase fw-bold mb-4",children:"Products"}),m.jsx("p",{children:m.jsx("a",{href:"#!",className:"text-reset",children:"Facebook"})}),m.jsx("p",{children:m.jsx("a",{href:"#!",className:"text-reset",children:"Insagram"})}),m.jsx("p",{children:m.jsx("a",{href:"#!",className:"text-reset",children:"Zalo"})}),m.jsx("p",{children:m.jsx("a",{href:"#!",className:"text-reset",children:"Twiter"})})]}),m.jsxs($t,{md:"3",lg:"2",xl:"2",className:"mx-auto mb-4",children:[m.jsx("h6",{className:"text-uppercase fw-bold mb-4",children:"Useful links"}),m.jsx("p",{children:m.jsx("a",{href:"#!",className:"text-reset",children:"Pricing"})}),m.jsx("p",{children:m.jsx("a",{href:"#!",className:"text-reset",children:"Settings"})}),m.jsx("p",{children:m.jsx("a",{href:"#!",className:"text-reset",children:"Orders"})}),m.jsx("p",{children:m.jsx("a",{href:"#!",className:"text-reset",children:"Help"})})]}),m.jsxs($t,{md:"4",lg:"3",xl:"3",className:"mx-auto mb-md-0 mb-4",children:[m.jsx("h6",{className:"text-uppercase fw-bold mb-4",children:"Liên hệ"}),m.jsxs("p",{children:[m.jsx(Bt,{icon:"home",className:"me-2"}),"TP Hồ Chí Minh, Gò Vấp, Phường 3"]}),m.jsxs("p",{children:[m.jsx(Bt,{icon:"envelope",className:"me-3"}),"codeheroes@gmail.com"]}),m.jsxs("p",{children:[m.jsx(Bt,{icon:"phone",className:"me-3"}),"0941720502"]})]})]})})}),m.jsxs("div",{className:"text-center p-4",style:{background:"#011b30",color:"white",paddingTop:"8px"},children:["© 2023 Copyright:",m.jsx("a",{className:"text-reset fw-bold",href:"https://codeheroes.com/",children:"Codeheroes.com"})]})]}),df=({children:t})=>m.jsxs(m.Fragment,{children:[m.jsx(uf,{}),m.jsx("div",{className:"vw-100 overflow-hidden my-4",children:t}),m.jsx(ff,{})]}),jf=df;export{jf as default};
