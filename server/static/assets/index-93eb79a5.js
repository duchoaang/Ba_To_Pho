import{c as Vn,j as p,d as Se,g as Ia,r as N,L as Be,w as Ta,e as Rs}from"./index-c915fb63.js";import{m as La,N as zs}from"./get-498fd3bb.js";import{p as Na,P as L}from"./index-0fcfa1fd.js";import{p as Lt}from"./post-2c5752a7.js";import{B as Hs,e as Us,$ as Ws,G as Ys,E as Nt,z as Mt}from"./mdb-react-ui-kit.esm-e4b7011a.js";import{M as Vs}from"./Tooltip-034ba070.js";import{M as Gs}from"./IconButton-8993882a.js";import{A as qs}from"./Avatar-ff3da4b3.js";import{B as Zr}from"./Button-720e8ca3.js";import"./extendSxProp-516e88d6.js";import"./useTheme-e4964456.js";import"./utils-2f63307e.js";import"./useId-8072d366.js";import"./createSvgIcon-9ce2cf96.js";import"./Grow-a0d94e6b.js";const Xs="_wrapper_1vty4_1",Ks="_logo_1vty4_9",Zs="_menu_1vty4_14",Js="_icon_1vty4_18",Qs="_actions_1vty4_44",el="_show_1vty4_58",tl="_cancel_1vty4_73",nl="_user_controller_1vty4_80",rl="_menu_controller_1vty4_83",al="_c_profile_1vty4_93",il="_loading_1vty4_101",ol="_spinner_1vty4_1",sl="_register_1vty4_114",ll="_user_avatar_1vty4_124",cl="_search_1vty4_132",ul={wrapper:Xs,logo:Ks,menu:Zs,icon:Js,"sub-menu":"_sub-menu_1vty4_22",actions:Qs,"modal-wrapper":"_modal-wrapper_1vty4_48",show:el,"modal-inner":"_modal-inner_1vty4_62",cancel:tl,user_controller:nl,menu_controller:rl,c_profile:al,loading:il,spinner:ol,register:sl,user_avatar:ll,search:cl},fl="_wrapper_1fo58_1",dl={wrapper:fl},ml=Vn.bind(dl),Bt=({children:t,className:r,leftIcon:a,rightIcon:i,...s})=>p.jsxs("button",{className:ml("wrapper","d-inline-flex align-items-center justify-content-center rounded",r),...s,children:[a??null,p.jsx("span",{className:(a?"ms-2":"")+(i?"me-2":""),children:t}),i??null]});var Ma={exports:{}};/*!
* sweetalert2 v11.7.12
* Released under the MIT License.
*/(function(t,r){(function(a,i){t.exports=i()})(Se,function(){const i={},s=()=>{i.previousActiveElement instanceof HTMLElement?(i.previousActiveElement.focus(),i.previousActiveElement=null):document.body&&document.body.focus()},u=e=>new Promise(n=>{if(!e)return n();const o=window.scrollX,c=window.scrollY;i.restoreFocusTimeout=setTimeout(()=>{s(),n()},100),window.scrollTo(o,c)});var l={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const d="swal2-",f=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"].reduce((e,n)=>(e[n]=d+n,e),{}),b=["success","warning","info","question","error"].reduce((e,n)=>(e[n]=d+n,e),{}),w="SweetAlert2:",k=e=>e.charAt(0).toUpperCase()+e.slice(1),O=e=>{console.warn(`${w} ${typeof e=="object"?e.join(" "):e}`)},B=e=>{console.error(`${w} ${e}`)},I=[],H=e=>{I.includes(e)||(I.push(e),O(e))},$=(e,n)=>{H(`"${e}" is deprecated and will be removed in the next major release. Please use "${n}" instead.`)},D=e=>typeof e=="function"?e():e,z=e=>e&&typeof e.toPromise=="function",F=e=>z(e)?e.toPromise():Promise.resolve(e),T=e=>e&&Promise.resolve(e)===e,A=()=>document.body.querySelector(`.${f.container}`),_=e=>{const n=A();return n?n.querySelector(e):null},E=e=>_(`.${e}`),y=()=>E(f.popup),K=()=>E(f.icon),ae=()=>E(f["icon-content"]),ie=()=>E(f.title),V=()=>E(f["html-container"]),M=()=>E(f.image),se=()=>E(f["progress-steps"]),ye=()=>E(f["validation-message"]),le=()=>_(`.${f.actions} .${f.confirm}`),ge=()=>_(`.${f.actions} .${f.cancel}`),he=()=>_(`.${f.actions} .${f.deny}`),at=()=>E(f["input-label"]),be=()=>_(`.${f.loader}`),Le=()=>E(f.actions),it=()=>E(f.footer),ze=()=>E(f["timer-progress-bar"]),ot=()=>E(f.close),cn=`
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
`,st=()=>{const e=y().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((g,S)=>{const R=parseInt(g.getAttribute("tabindex")),q=parseInt(S.getAttribute("tabindex"));return R>q?1:R<q?-1:0}),o=y().querySelectorAll(cn),c=Array.from(o).filter(g=>g.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(c))].filter(g=>ue(g))},lt=()=>de(document.body,f.shown)&&!de(document.body,f["toast-shown"])&&!de(document.body,f["no-backdrop"]),He=()=>y()&&de(y(),f.toast),un=()=>y().hasAttribute("data-loading"),ee=(e,n)=>{if(e.textContent="",n){const c=new DOMParser().parseFromString(n,"text/html");Array.from(c.querySelector("head").childNodes).forEach(g=>{e.appendChild(g)}),Array.from(c.querySelector("body").childNodes).forEach(g=>{g instanceof HTMLVideoElement||g instanceof HTMLAudioElement?e.appendChild(g.cloneNode(!0)):e.appendChild(g)})}},de=(e,n)=>{if(!n)return!1;const o=n.split(/\s+/);for(let c=0;c<o.length;c++)if(!e.classList.contains(o[c]))return!1;return!0},St=(e,n)=>{Array.from(e.classList).forEach(o=>{!Object.values(f).includes(o)&&!Object.values(b).includes(o)&&!Object.values(n.showClass).includes(o)&&e.classList.remove(o)})},ne=(e,n,o)=>{if(St(e,n),n.customClass&&n.customClass[o]){if(typeof n.customClass[o]!="string"&&!n.customClass[o].forEach){O(`Invalid type of customClass.${o}! Expected string or iterable object, got "${typeof n.customClass[o]}"`);return}P(e,n.customClass[o])}},ct=(e,n)=>{if(!n)return null;switch(n){case"select":case"textarea":case"file":return e.querySelector(`.${f.popup} > .${f[n]}`);case"checkbox":return e.querySelector(`.${f.popup} > .${f.checkbox} input`);case"radio":return e.querySelector(`.${f.popup} > .${f.radio} input:checked`)||e.querySelector(`.${f.popup} > .${f.radio} input:first-child`);case"range":return e.querySelector(`.${f.popup} > .${f.range} input`);default:return e.querySelector(`.${f.popup} > .${f.input}`)}},Pt=e=>{if(e.focus(),e.type!=="file"){const n=e.value;e.value="",e.value=n}},j=(e,n,o)=>{!e||!n||(typeof n=="string"&&(n=n.split(/\s+/).filter(Boolean)),n.forEach(c=>{Array.isArray(e)?e.forEach(g=>{o?g.classList.add(c):g.classList.remove(c)}):o?e.classList.add(c):e.classList.remove(c)}))},P=(e,n)=>{j(e,n,!0)},ce=(e,n)=>{j(e,n,!1)},Oe=(e,n)=>{const o=Array.from(e.children);for(let c=0;c<o.length;c++){const g=o[c];if(g instanceof HTMLElement&&de(g,n))return g}},Ue=(e,n,o)=>{o===`${parseInt(o)}`&&(o=parseInt(o)),o||parseInt(o)===0?e.style[n]=typeof o=="number"?`${o}px`:o:e.style.removeProperty(n)},Z=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";e&&(e.style.display=n)},te=e=>{e&&(e.style.display="none")},lr=(e,n,o,c)=>{const g=e.querySelector(n);g&&(g.style[o]=c)},At=function(e,n){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";n?Z(e,o):te(e)},ue=e=>!!(e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),bi=()=>!ue(le())&&!ue(he())&&!ue(ge()),cr=e=>e.scrollHeight>e.clientHeight,ur=e=>{const n=window.getComputedStyle(e),o=parseFloat(n.getPropertyValue("animation-duration")||"0"),c=parseFloat(n.getPropertyValue("transition-duration")||"0");return o>0||c>0},fn=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const o=ze();ue(o)&&(n&&(o.style.transition="none",o.style.width="100%"),setTimeout(()=>{o.style.transition=`width ${e/1e3}s linear`,o.style.width="0%"},10))},vi=()=>{const e=ze(),n=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition"),e.style.width="100%";const o=parseInt(window.getComputedStyle(e).width),c=n/o*100;e.style.width=`${c}%`},fr=()=>typeof window>"u"||typeof document>"u",yi=`
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
`.replace(/(^|\n)\s*/g,""),wi=()=>{const e=A();return e?(e.remove(),ce([document.documentElement,document.body],[f["no-backdrop"],f["toast-shown"],f["has-column"]]),!0):!1},Ne=()=>{i.currentInstance.resetValidationMessage()},xi=()=>{const e=y(),n=Oe(e,f.input),o=Oe(e,f.file),c=e.querySelector(`.${f.range} input`),g=e.querySelector(`.${f.range} output`),S=Oe(e,f.select),R=e.querySelector(`.${f.checkbox} input`),q=Oe(e,f.textarea);n.oninput=Ne,o.onchange=Ne,S.onchange=Ne,R.onchange=Ne,q.oninput=Ne,c.oninput=()=>{Ne(),g.value=c.value},c.onchange=()=>{Ne(),g.value=c.value}},ki=e=>typeof e=="string"?document.querySelector(e):e,Ci=e=>{const n=y();n.setAttribute("role",e.toast?"alert":"dialog"),n.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||n.setAttribute("aria-modal","true")},Oi=e=>{window.getComputedStyle(e).direction==="rtl"&&P(A(),f.rtl)},Ei=e=>{const n=wi();if(fr()){B("SweetAlert2 requires document to initialize");return}const o=document.createElement("div");o.className=f.container,n&&P(o,f["no-transition"]),ee(o,yi);const c=ki(e.target);c.appendChild(o),Ci(e),Oi(c),xi()},dn=(e,n)=>{e instanceof HTMLElement?n.appendChild(e):typeof e=="object"?Si(e,n):e&&ee(n,e)},Si=(e,n)=>{e.jquery?Pi(n,e):ee(n,e.toString())},Pi=(e,n)=>{if(e.textContent="",0 in n)for(let o=0;o in n;o++)e.appendChild(n[o].cloneNode(!0));else e.appendChild(n.cloneNode(!0))},ut=(()=>{if(fr())return!1;const e=document.createElement("div"),n={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const o in n)if(Object.prototype.hasOwnProperty.call(n,o)&&typeof e.style[o]<"u")return n[o];return!1})(),Ai=(e,n)=>{const o=Le(),c=be();!n.showConfirmButton&&!n.showDenyButton&&!n.showCancelButton?te(o):Z(o),ne(o,n,"actions"),_i(o,c,n),ee(c,n.loaderHtml),ne(c,n,"loader")};function _i(e,n,o){const c=le(),g=he(),S=ge();mn(c,"confirm",o),mn(g,"deny",o),mn(S,"cancel",o),ji(c,g,S,o),o.reverseButtons&&(o.toast?(e.insertBefore(S,c),e.insertBefore(g,c)):(e.insertBefore(S,n),e.insertBefore(g,n),e.insertBefore(c,n)))}function ji(e,n,o,c){if(!c.buttonsStyling){ce([e,n,o],f.styled);return}P([e,n,o],f.styled),c.confirmButtonColor&&(e.style.backgroundColor=c.confirmButtonColor,P(e,f["default-outline"])),c.denyButtonColor&&(n.style.backgroundColor=c.denyButtonColor,P(n,f["default-outline"])),c.cancelButtonColor&&(o.style.backgroundColor=c.cancelButtonColor,P(o,f["default-outline"]))}function mn(e,n,o){At(e,o[`show${k(n)}Button`],"inline-block"),ee(e,o[`${n}ButtonText`]),e.setAttribute("aria-label",o[`${n}ButtonAriaLabel`]),e.className=f[n],ne(e,o,`${n}Button`),P(e,o[`${n}ButtonClass`])}const Ii=(e,n)=>{const o=ot();o&&(ee(o,n.closeButtonHtml||""),ne(o,n,"closeButton"),At(o,n.showCloseButton),o.setAttribute("aria-label",n.closeButtonAriaLabel||""))},Ti=(e,n)=>{const o=A();o&&(Li(o,n.backdrop),Ni(o,n.position),Mi(o,n.grow),ne(o,n,"container"))};function Li(e,n){typeof n=="string"?e.style.background=n:n||P([document.documentElement,document.body],f["no-backdrop"])}function Ni(e,n){n in f?P(e,f[n]):(O('The "position" parameter is not valid, defaulting to "center"'),P(e,f.center))}function Mi(e,n){if(n&&typeof n=="string"){const o=`grow-${n}`;o in f&&P(e,f[o])}}const Bi=["input","file","range","select","radio","checkbox","textarea"],$i=(e,n)=>{const o=y(),c=l.innerParams.get(e),g=!c||n.input!==c.input;Bi.forEach(S=>{const R=Oe(o,f[S]);Ri(S,n.inputAttributes),R.className=f[S],g&&te(R)}),n.input&&(g&&Di(n),zi(n))},Di=e=>{if(!oe[e.input]){B(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${e.input}"`);return}const n=dr(e.input),o=oe[e.input](n,e);Z(n),e.inputAutoFocus&&setTimeout(()=>{Pt(o)})},Fi=e=>{for(let n=0;n<e.attributes.length;n++){const o=e.attributes[n].name;["type","value","style"].includes(o)||e.removeAttribute(o)}},Ri=(e,n)=>{const o=ct(y(),e);if(o){Fi(o);for(const c in n)o.setAttribute(c,n[c])}},zi=e=>{const n=dr(e.input);typeof e.customClass=="object"&&P(n,e.customClass.input)},pn=(e,n)=>{(!e.placeholder||n.inputPlaceholder)&&(e.placeholder=n.inputPlaceholder)},ft=(e,n,o)=>{if(o.inputLabel){e.id=f.input;const c=document.createElement("label"),g=f["input-label"];c.setAttribute("for",e.id),c.className=g,typeof o.customClass=="object"&&P(c,o.customClass.inputLabel),c.innerText=o.inputLabel,n.insertAdjacentElement("beforebegin",c)}},dr=e=>Oe(y(),f[e]||f.input),_t=(e,n)=>{["string","number"].includes(typeof n)?e.value=`${n}`:T(n)||O(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof n}"`)},oe={};oe.text=oe.email=oe.password=oe.number=oe.tel=oe.url=(e,n)=>(_t(e,n.inputValue),ft(e,e,n),pn(e,n),e.type=n.input,e),oe.file=(e,n)=>(ft(e,e,n),pn(e,n),e),oe.range=(e,n)=>{const o=e.querySelector("input"),c=e.querySelector("output");return _t(o,n.inputValue),o.type=n.input,_t(c,n.inputValue),ft(o,e,n),e},oe.select=(e,n)=>{if(e.textContent="",n.inputPlaceholder){const o=document.createElement("option");ee(o,n.inputPlaceholder),o.value="",o.disabled=!0,o.selected=!0,e.appendChild(o)}return ft(e,e,n),e},oe.radio=e=>(e.textContent="",e),oe.checkbox=(e,n)=>{const o=ct(y(),"checkbox");o.value="1",o.id=f.checkbox,o.checked=!!n.inputValue;const c=e.querySelector("span");return ee(c,n.inputPlaceholder),o},oe.textarea=(e,n)=>{_t(e,n.inputValue),pn(e,n),ft(e,e,n);const o=c=>parseInt(window.getComputedStyle(c).marginLeft)+parseInt(window.getComputedStyle(c).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const c=parseInt(window.getComputedStyle(y()).width),g=()=>{const S=e.offsetWidth+o(e);S>c?y().style.width=`${S}px`:y().style.width=null};new MutationObserver(g).observe(e,{attributes:!0,attributeFilter:["style"]})}}),e};const Hi=(e,n)=>{const o=V();o&&(ne(o,n,"htmlContainer"),n.html?(dn(n.html,o),Z(o,"block")):n.text?(o.textContent=n.text,Z(o,"block")):te(o),$i(e,n))},Ui=(e,n)=>{const o=it();o&&(At(o,n.footer),n.footer&&dn(n.footer,o),ne(o,n,"footer"))},Wi=(e,n)=>{const o=l.innerParams.get(e),c=K();if(o&&n.icon===o.icon){pr(c,n),mr(c,n);return}if(!n.icon&&!n.iconHtml){te(c);return}if(n.icon&&Object.keys(b).indexOf(n.icon)===-1){B(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${n.icon}"`),te(c);return}Z(c),pr(c,n),mr(c,n),P(c,n.showClass.icon)},mr=(e,n)=>{for(const o in b)n.icon!==o&&ce(e,b[o]);P(e,b[n.icon]),qi(e,n),Yi(),ne(e,n,"icon")},Yi=()=>{const e=y(),n=window.getComputedStyle(e).getPropertyValue("background-color"),o=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let c=0;c<o.length;c++)o[c].style.backgroundColor=n},Vi=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Gi=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,pr=(e,n)=>{let o=e.innerHTML,c;n.iconHtml?c=gr(n.iconHtml):n.icon==="success"?(c=Vi,o=o.replace(/ style=".*?"/g,"")):n.icon==="error"?c=Gi:c=gr({question:"?",warning:"!",info:"i"}[n.icon]),o.trim()!==c.trim()&&ee(e,c)},qi=(e,n)=>{if(n.iconColor){e.style.color=n.iconColor,e.style.borderColor=n.iconColor;for(const o of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])lr(e,o,"backgroundColor",n.iconColor);lr(e,".swal2-success-ring","borderColor",n.iconColor)}},gr=e=>`<div class="${f["icon-content"]}">${e}</div>`,Xi=(e,n)=>{const o=M();if(o){if(!n.imageUrl){te(o);return}Z(o,""),o.setAttribute("src",n.imageUrl),o.setAttribute("alt",n.imageAlt||""),Ue(o,"width",n.imageWidth),Ue(o,"height",n.imageHeight),o.className=f.image,ne(o,n,"image")}},Ki=(e,n)=>{const o=A(),c=y();if(!(!o||!c)){if(n.toast){Ue(o,"width",n.width),c.style.width="100%";const g=be();g&&c.insertBefore(g,K())}else Ue(c,"width",n.width);Ue(c,"padding",n.padding),n.color&&(c.style.color=n.color),n.background&&(c.style.background=n.background),te(ye()),Zi(c,n)}},Zi=(e,n)=>{const o=n.showClass||{};e.className=`${f.popup} ${ue(e)?o.popup:""}`,n.toast?(P([document.documentElement,document.body],f["toast-shown"]),P(e,f.toast)):P(e,f.modal),ne(e,n,"popup"),typeof n.customClass=="string"&&P(e,n.customClass),n.icon&&P(e,f[`icon-${n.icon}`])},Ji=(e,n)=>{const o=se();if(!o)return;const{progressSteps:c,currentProgressStep:g}=n;if(!c||c.length===0||g===void 0){te(o);return}Z(o),o.textContent="",g>=c.length&&O("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),c.forEach((S,R)=>{const q=Qi(S);if(o.appendChild(q),R===g&&P(q,f["active-progress-step"]),R!==c.length-1){const J=eo(n);o.appendChild(J)}})},Qi=e=>{const n=document.createElement("li");return P(n,f["progress-step"]),ee(n,e),n},eo=e=>{const n=document.createElement("li");return P(n,f["progress-step-line"]),e.progressStepsDistance&&Ue(n,"width",e.progressStepsDistance),n},to=(e,n)=>{const o=ie();o&&(At(o,n.title||n.titleText,"block"),n.title&&dn(n.title,o),n.titleText&&(o.innerText=n.titleText),ne(o,n,"title"))},hr=(e,n)=>{Ki(e,n),Ti(e,n),Ji(e,n),Wi(e,n),Xi(e,n),to(e,n),Ii(e,n),Hi(e,n),Ai(e,n),Ui(e,n);const o=y();typeof n.didRender=="function"&&o&&n.didRender(o)},no=()=>ue(y()),br=()=>le()&&le().click(),ro=()=>he()&&he().click(),ao=()=>ge()&&ge().click(),We=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),vr=e=>{e.keydownTarget&&e.keydownHandlerAdded&&(e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1)},io=(e,n,o,c)=>{vr(n),o.toast||(n.keydownHandler=g=>so(e,g,c),n.keydownTarget=o.keydownListenerCapture?window:y(),n.keydownListenerCapture=o.keydownListenerCapture,n.keydownTarget.addEventListener("keydown",n.keydownHandler,{capture:n.keydownListenerCapture}),n.keydownHandlerAdded=!0)},gn=(e,n)=>{const o=st();if(o.length){e=e+n,e===o.length?e=0:e===-1&&(e=o.length-1),o[e].focus();return}y().focus()},yr=["ArrowRight","ArrowDown"],oo=["ArrowLeft","ArrowUp"],so=(e,n,o)=>{const c=l.innerParams.get(e);c&&(n.isComposing||n.keyCode===229||(c.stopKeydownPropagation&&n.stopPropagation(),n.key==="Enter"?lo(e,n,c):n.key==="Tab"?co(n):[...yr,...oo].includes(n.key)?uo(n.key):n.key==="Escape"&&fo(n,c,o)))},lo=(e,n,o)=>{if(D(o.allowEnterKey)&&n.target&&e.getInput()&&n.target instanceof HTMLElement&&n.target.outerHTML===e.getInput().outerHTML){if(["textarea","file"].includes(o.input))return;br(),n.preventDefault()}},co=e=>{const n=e.target,o=st();let c=-1;for(let g=0;g<o.length;g++)if(n===o[g]){c=g;break}e.shiftKey?gn(c,-1):gn(c,1),e.stopPropagation(),e.preventDefault()},uo=e=>{const n=le(),o=he(),c=ge(),g=[n,o,c];if(document.activeElement instanceof HTMLElement&&!g.includes(document.activeElement))return;const S=yr.includes(e)?"nextElementSibling":"previousElementSibling";let R=document.activeElement;for(let q=0;q<Le().children.length;q++){if(R=R[S],!R)return;if(R instanceof HTMLButtonElement&&ue(R))break}R instanceof HTMLButtonElement&&R.focus()},fo=(e,n,o)=>{D(n.allowEscapeKey)&&(e.preventDefault(),o(We.esc))};var dt={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const mo=()=>{Array.from(document.body.children).forEach(n=>{n===A()||n.contains(A())||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},wr=()=>{Array.from(document.body.children).forEach(n=>{n.hasAttribute("data-previous-aria-hidden")?(n.setAttribute("aria-hidden",n.getAttribute("data-previous-aria-hidden")||""),n.removeAttribute("data-previous-aria-hidden")):n.removeAttribute("aria-hidden")})},po=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!de(document.body,f.iosfix)){const n=document.body.scrollTop;document.body.style.top=`${n*-1}px`,P(document.body,f.iosfix),ho(),go()}},go=()=>{const e=navigator.userAgent,n=!!e.match(/iPad/i)||!!e.match(/iPhone/i),o=!!e.match(/WebKit/i);n&&o&&!e.match(/CriOS/i)&&y().scrollHeight>window.innerHeight-44&&(A().style.paddingBottom="44px")},ho=()=>{const e=A();let n;e.ontouchstart=o=>{n=bo(o)},e.ontouchmove=o=>{n&&(o.preventDefault(),o.stopPropagation())}},bo=e=>{const n=e.target,o=A();return vo(e)||yo(e)?!1:n===o||!cr(o)&&n instanceof HTMLElement&&n.tagName!=="INPUT"&&n.tagName!=="TEXTAREA"&&!(cr(V())&&V().contains(n))},vo=e=>e.touches&&e.touches.length&&e.touches[0].touchType==="stylus",yo=e=>e.touches&&e.touches.length>1,wo=()=>{if(de(document.body,f.iosfix)){const e=parseInt(document.body.style.top,10);ce(document.body,f.iosfix),document.body.style.top="",document.body.scrollTop=e*-1}},xo=()=>{const e=document.createElement("div");e.className=f["scrollbar-measure"],document.body.appendChild(e);const n=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),n};let Ye=null;const ko=()=>{Ye===null&&document.body.scrollHeight>window.innerHeight&&(Ye=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Ye+xo()}px`)},Co=()=>{Ye!==null&&(document.body.style.paddingRight=`${Ye}px`,Ye=null)};function xr(e,n,o,c){He()?Cr(e,c):(u(o).then(()=>Cr(e,c)),vr(i)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(n.setAttribute("style","display:none !important"),n.removeAttribute("class"),n.innerHTML=""):n.remove(),lt()&&(Co(),wo(),wr()),Oo()}function Oo(){ce([document.documentElement,document.body],[f.shown,f["height-auto"],f["no-backdrop"],f["toast-shown"]])}function Ee(e){e=So(e);const n=dt.swalPromiseResolve.get(this),o=Eo(this);this.isAwaitingPromise?e.isDismissed||(mt(this),n(e)):o&&n(e)}const Eo=e=>{const n=y();if(!n)return!1;const o=l.innerParams.get(e);if(!o||de(n,o.hideClass.popup))return!1;ce(n,o.showClass.popup),P(n,o.hideClass.popup);const c=A();return ce(c,o.showClass.backdrop),P(c,o.hideClass.backdrop),Po(e,n,o),!0};function kr(e){const n=dt.swalPromiseReject.get(this);mt(this),n&&n(e)}const mt=e=>{e.isAwaitingPromise&&(delete e.isAwaitingPromise,l.innerParams.get(e)||e._destroy())},So=e=>typeof e>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},e),Po=(e,n,o)=>{const c=A(),g=ut&&ur(n);typeof o.willClose=="function"&&o.willClose(n),g?Ao(e,n,c,o.returnFocus,o.didClose):xr(e,c,o.returnFocus,o.didClose)},Ao=(e,n,o,c,g)=>{i.swalCloseEventFinishedCallback=xr.bind(null,e,o,c,g),n.addEventListener(ut,function(S){S.target===n&&(i.swalCloseEventFinishedCallback(),delete i.swalCloseEventFinishedCallback)})},Cr=(e,n)=>{setTimeout(()=>{typeof n=="function"&&n.bind(e.params)(),e._destroy&&e._destroy()})},Ve=e=>{let n=y();n||new Tt,n=y();const o=be();He()?te(K()):_o(n,e),Z(o),n.setAttribute("data-loading","true"),n.setAttribute("aria-busy","true"),n.focus()},_o=(e,n)=>{const o=Le(),c=be();!n&&ue(le())&&(n=le()),Z(o),n&&(te(n),c.setAttribute("data-button-to-replace",n.className)),c.parentNode.insertBefore(c,n),P([e,o],f.loading)},jo=(e,n)=>{n.input==="select"||n.input==="radio"?Mo(e,n):["text","email","number","tel","textarea"].includes(n.input)&&(z(n.inputValue)||T(n.inputValue))&&(Ve(le()),Bo(e,n))},Io=(e,n)=>{const o=e.getInput();if(!o)return null;switch(n.input){case"checkbox":return To(o);case"radio":return Lo(o);case"file":return No(o);default:return n.inputAutoTrim?o.value.trim():o.value}},To=e=>e.checked?1:0,Lo=e=>e.checked?e.value:null,No=e=>e.files.length?e.getAttribute("multiple")!==null?e.files:e.files[0]:null,Mo=(e,n)=>{const o=y(),c=g=>{$o[n.input](o,hn(g),n)};z(n.inputOptions)||T(n.inputOptions)?(Ve(le()),F(n.inputOptions).then(g=>{e.hideLoading(),c(g)})):typeof n.inputOptions=="object"?c(n.inputOptions):B(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof n.inputOptions}`)},Bo=(e,n)=>{const o=e.getInput();te(o),F(n.inputValue).then(c=>{o.value=n.input==="number"?`${parseFloat(c)||0}`:`${c}`,Z(o),o.focus(),e.hideLoading()}).catch(c=>{B(`Error in inputValue promise: ${c}`),o.value="",Z(o),o.focus(),e.hideLoading()})},$o={select:(e,n,o)=>{const c=Oe(e,f.select),g=(S,R,q)=>{const J=document.createElement("option");J.value=q,ee(J,R),J.selected=Or(q,o.inputValue),S.appendChild(J)};n.forEach(S=>{const R=S[0],q=S[1];if(Array.isArray(q)){const J=document.createElement("optgroup");J.label=R,J.disabled=!1,c.appendChild(J),q.forEach(qe=>g(J,qe[1],qe[0]))}else g(c,q,R)}),c.focus()},radio:(e,n,o)=>{const c=Oe(e,f.radio);n.forEach(S=>{const R=S[0],q=S[1],J=document.createElement("input"),qe=document.createElement("label");J.type="radio",J.name=f.radio,J.value=R,Or(R,o.inputValue)&&(J.checked=!0);const xn=document.createElement("span");ee(xn,q),xn.className=f.label,qe.appendChild(J),qe.appendChild(xn),c.appendChild(qe)});const g=c.querySelectorAll("input");g.length&&g[0].focus()}},hn=e=>{const n=[];return typeof Map<"u"&&e instanceof Map?e.forEach((o,c)=>{let g=o;typeof g=="object"&&(g=hn(g)),n.push([c,g])}):Object.keys(e).forEach(o=>{let c=e[o];typeof c=="object"&&(c=hn(c)),n.push([o,c])}),n},Or=(e,n)=>n&&n.toString()===e.toString(),Do=e=>{const n=l.innerParams.get(e);e.disableButtons(),n.input?Er(e,"confirm"):vn(e,!0)},Fo=e=>{const n=l.innerParams.get(e);e.disableButtons(),n.returnInputValueOnDeny?Er(e,"deny"):bn(e,!1)},Ro=(e,n)=>{e.disableButtons(),n(We.cancel)},Er=(e,n)=>{const o=l.innerParams.get(e);if(!o.input){B(`The "input" parameter is needed to be set when using returnInputValueOn${k(n)}`);return}const c=Io(e,o);o.inputValidator?zo(e,c,n):e.getInput().checkValidity()?n==="deny"?bn(e,c):vn(e,c):(e.enableButtons(),e.showValidationMessage(o.validationMessage))},zo=(e,n,o)=>{const c=l.innerParams.get(e);e.disableInput(),Promise.resolve().then(()=>F(c.inputValidator(n,c.validationMessage))).then(S=>{e.enableButtons(),e.enableInput(),S?e.showValidationMessage(S):o==="deny"?bn(e,n):vn(e,n)})},bn=(e,n)=>{const o=l.innerParams.get(e||void 0);o.showLoaderOnDeny&&Ve(he()),o.preDeny?(e.isAwaitingPromise=!0,Promise.resolve().then(()=>F(o.preDeny(n,o.validationMessage))).then(g=>{g===!1?(e.hideLoading(),mt(e)):e.close({isDenied:!0,value:typeof g>"u"?n:g})}).catch(g=>Pr(e||void 0,g))):e.close({isDenied:!0,value:n})},Sr=(e,n)=>{e.close({isConfirmed:!0,value:n})},Pr=(e,n)=>{e.rejectPromise(n)},vn=(e,n)=>{const o=l.innerParams.get(e||void 0);o.showLoaderOnConfirm&&Ve(),o.preConfirm?(e.resetValidationMessage(),e.isAwaitingPromise=!0,Promise.resolve().then(()=>F(o.preConfirm(n,o.validationMessage))).then(g=>{ue(ye())||g===!1?(e.hideLoading(),mt(e)):Sr(e,typeof g>"u"?n:g)}).catch(g=>Pr(e||void 0,g))):Sr(e,n)};function jt(){const e=l.innerParams.get(this);if(!e)return;const n=l.domCache.get(this);te(n.loader),He()?e.icon&&Z(K()):Ho(n),ce([n.popup,n.actions],f.loading),n.popup.removeAttribute("aria-busy"),n.popup.removeAttribute("data-loading"),n.confirmButton.disabled=!1,n.denyButton.disabled=!1,n.cancelButton.disabled=!1}const Ho=e=>{const n=e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));n.length?Z(n[0],"inline-block"):bi()&&te(e.actions)};function Ar(){const e=l.innerParams.get(this),n=l.domCache.get(this);return n?ct(n.popup,e.input):null}function _r(e,n,o){const c=l.domCache.get(e);n.forEach(g=>{c[g].disabled=o})}function jr(e,n){if(e)if(e.type==="radio"){const c=e.parentNode.parentNode.querySelectorAll("input");for(let g=0;g<c.length;g++)c[g].disabled=n}else e.disabled=n}function Ir(){_r(this,["confirmButton","denyButton","cancelButton"],!1)}function Tr(){_r(this,["confirmButton","denyButton","cancelButton"],!0)}function Lr(){jr(this.getInput(),!1)}function Nr(){jr(this.getInput(),!0)}function Mr(e){const n=l.domCache.get(this),o=l.innerParams.get(this);ee(n.validationMessage,e),n.validationMessage.className=f["validation-message"],o.customClass&&o.customClass.validationMessage&&P(n.validationMessage,o.customClass.validationMessage),Z(n.validationMessage);const c=this.getInput();c&&(c.setAttribute("aria-invalid",!0),c.setAttribute("aria-describedby",f["validation-message"]),Pt(c),P(c,f.inputerror))}function Br(){const e=l.domCache.get(this);e.validationMessage&&te(e.validationMessage);const n=this.getInput();n&&(n.removeAttribute("aria-invalid"),n.removeAttribute("aria-describedby"),ce(n,f.inputerror))}const Ge={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Uo=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Wo={},Yo=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],$r=e=>Object.prototype.hasOwnProperty.call(Ge,e),Dr=e=>Uo.indexOf(e)!==-1,Fr=e=>Wo[e],Vo=e=>{$r(e)||O(`Unknown parameter "${e}"`)},Go=e=>{Yo.includes(e)&&O(`The parameter "${e}" is incompatible with toasts`)},qo=e=>{const n=Fr(e);n&&$(e,n)},Xo=e=>{e.backdrop===!1&&e.allowOutsideClick&&O('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const n in e)Vo(n),e.toast&&Go(n),qo(n)};function Rr(e){const n=y(),o=l.innerParams.get(this);if(!n||de(n,o.hideClass.popup)){O("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const c=Ko(e),g=Object.assign({},o,c);hr(this,g),l.innerParams.set(this,g),Object.defineProperties(this,{params:{value:Object.assign({},this.params,e),writable:!1,enumerable:!0}})}const Ko=e=>{const n={};return Object.keys(e).forEach(o=>{Dr(o)?n[o]=e[o]:O(`Invalid parameter to update: ${o}`)}),n};function zr(){const e=l.domCache.get(this),n=l.innerParams.get(this);if(!n){Hr(this);return}e.popup&&i.swalCloseEventFinishedCallback&&(i.swalCloseEventFinishedCallback(),delete i.swalCloseEventFinishedCallback),typeof n.didDestroy=="function"&&n.didDestroy(),Zo(this)}const Zo=e=>{Hr(e),delete e.params,delete i.keydownHandler,delete i.keydownTarget,delete i.currentInstance},Hr=e=>{e.isAwaitingPromise?(yn(l,e),e.isAwaitingPromise=!0):(yn(dt,e),yn(l,e),delete e.isAwaitingPromise,delete e.disableButtons,delete e.enableButtons,delete e.getInput,delete e.disableInput,delete e.enableInput,delete e.hideLoading,delete e.disableLoading,delete e.showValidationMessage,delete e.resetValidationMessage,delete e.close,delete e.closePopup,delete e.closeModal,delete e.closeToast,delete e.rejectPromise,delete e.update,delete e._destroy)},yn=(e,n)=>{for(const o in e)e[o].delete(n)};var Jo=Object.freeze({__proto__:null,_destroy:zr,close:Ee,closeModal:Ee,closePopup:Ee,closeToast:Ee,disableButtons:Tr,disableInput:Nr,disableLoading:jt,enableButtons:Ir,enableInput:Lr,getInput:Ar,handleAwaitingPromise:mt,hideLoading:jt,rejectPromise:kr,resetValidationMessage:Br,showValidationMessage:Mr,update:Rr});const Qo=(e,n,o)=>{l.innerParams.get(e).toast?es(e,n,o):(ns(n),rs(n),as(e,n,o))},es=(e,n,o)=>{n.popup.onclick=()=>{const c=l.innerParams.get(e);c&&(ts(c)||c.timer||c.input)||o(We.close)}},ts=e=>e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton;let It=!1;const ns=e=>{e.popup.onmousedown=()=>{e.container.onmouseup=function(n){e.container.onmouseup=void 0,n.target===e.container&&(It=!0)}}},rs=e=>{e.container.onmousedown=()=>{e.popup.onmouseup=function(n){e.popup.onmouseup=void 0,(n.target===e.popup||e.popup.contains(n.target))&&(It=!0)}}},as=(e,n,o)=>{n.container.onclick=c=>{const g=l.innerParams.get(e);if(It){It=!1;return}c.target===n.container&&D(g.allowOutsideClick)&&o(We.backdrop)}},is=e=>typeof e=="object"&&e.jquery,Ur=e=>e instanceof Element||is(e),os=e=>{const n={};return typeof e[0]=="object"&&!Ur(e[0])?Object.assign(n,e[0]):["title","html","icon"].forEach((o,c)=>{const g=e[c];typeof g=="string"||Ur(g)?n[o]=g:g!==void 0&&B(`Unexpected type of ${o}! Expected "string" or "Element", got ${typeof g}`)}),n};function ss(){const e=this;for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return new e(...o)}function ls(e){class n extends this{_main(c,g){return super._main(c,Object.assign({},e,g))}}return n}const cs=()=>i.timeout&&i.timeout.getTimerLeft(),Wr=()=>{if(i.timeout)return vi(),i.timeout.stop()},Yr=()=>{if(i.timeout){const e=i.timeout.start();return fn(e),e}},us=()=>{const e=i.timeout;return e&&(e.running?Wr():Yr())},fs=e=>{if(i.timeout){const n=i.timeout.increase(e);return fn(n,!0),n}},ds=()=>!!(i.timeout&&i.timeout.isRunning());let Vr=!1;const wn={};function ms(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";wn[e]=this,Vr||(document.body.addEventListener("click",ps),Vr=!0)}const ps=e=>{for(let n=e.target;n&&n!==document;n=n.parentNode)for(const o in wn){const c=n.getAttribute(o);if(c){wn[o].fire({template:c});return}}};var gs=Object.freeze({__proto__:null,argsToParams:os,bindClickHandler:ms,clickCancel:ao,clickConfirm:br,clickDeny:ro,enableLoading:Ve,fire:ss,getActions:Le,getCancelButton:ge,getCloseButton:ot,getConfirmButton:le,getContainer:A,getDenyButton:he,getFocusableElements:st,getFooter:it,getHtmlContainer:V,getIcon:K,getIconContent:ae,getImage:M,getInputLabel:at,getLoader:be,getPopup:y,getProgressSteps:se,getTimerLeft:cs,getTimerProgressBar:ze,getTitle:ie,getValidationMessage:ye,increaseTimer:fs,isDeprecatedParameter:Fr,isLoading:un,isTimerRunning:ds,isUpdatableParameter:Dr,isValidParameter:$r,isVisible:no,mixin:ls,resumeTimer:Yr,showLoading:Ve,stopTimer:Wr,toggleTimer:us});class hs{constructor(n,o){this.callback=n,this.remaining=o,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(n){const o=this.running;return o&&this.stop(),this.remaining+=n,o&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Gr=["swal-title","swal-html","swal-footer"],bs=e=>{const n=typeof e.template=="string"?document.querySelector(e.template):e.template;if(!n)return{};const o=n.content;return Es(o),Object.assign(vs(o),ys(o),ws(o),xs(o),ks(o),Cs(o),Os(o,Gr))},vs=e=>{const n={};return Array.from(e.querySelectorAll("swal-param")).forEach(c=>{Me(c,["name","value"]);const g=c.getAttribute("name"),S=c.getAttribute("value");typeof Ge[g]=="boolean"?n[g]=S!=="false":typeof Ge[g]=="object"?n[g]=JSON.parse(S):n[g]=S}),n},ys=e=>{const n={};return Array.from(e.querySelectorAll("swal-function-param")).forEach(c=>{const g=c.getAttribute("name"),S=c.getAttribute("value");n[g]=new Function(`return ${S}`)()}),n},ws=e=>{const n={};return Array.from(e.querySelectorAll("swal-button")).forEach(c=>{Me(c,["type","color","aria-label"]);const g=c.getAttribute("type");n[`${g}ButtonText`]=c.innerHTML,n[`show${k(g)}Button`]=!0,c.hasAttribute("color")&&(n[`${g}ButtonColor`]=c.getAttribute("color")),c.hasAttribute("aria-label")&&(n[`${g}ButtonAriaLabel`]=c.getAttribute("aria-label"))}),n},xs=e=>{const n={},o=e.querySelector("swal-image");return o&&(Me(o,["src","width","height","alt"]),o.hasAttribute("src")&&(n.imageUrl=o.getAttribute("src")),o.hasAttribute("width")&&(n.imageWidth=o.getAttribute("width")),o.hasAttribute("height")&&(n.imageHeight=o.getAttribute("height")),o.hasAttribute("alt")&&(n.imageAlt=o.getAttribute("alt"))),n},ks=e=>{const n={},o=e.querySelector("swal-icon");return o&&(Me(o,["type","color"]),o.hasAttribute("type")&&(n.icon=o.getAttribute("type")),o.hasAttribute("color")&&(n.iconColor=o.getAttribute("color")),n.iconHtml=o.innerHTML),n},Cs=e=>{const n={},o=e.querySelector("swal-input");o&&(Me(o,["type","label","placeholder","value"]),n.input=o.getAttribute("type")||"text",o.hasAttribute("label")&&(n.inputLabel=o.getAttribute("label")),o.hasAttribute("placeholder")&&(n.inputPlaceholder=o.getAttribute("placeholder")),o.hasAttribute("value")&&(n.inputValue=o.getAttribute("value")));const c=Array.from(e.querySelectorAll("swal-input-option"));return c.length&&(n.inputOptions={},c.forEach(g=>{Me(g,["value"]);const S=g.getAttribute("value"),R=g.innerHTML;n.inputOptions[S]=R})),n},Os=(e,n)=>{const o={};for(const c in n){const g=n[c],S=e.querySelector(g);S&&(Me(S,[]),o[g.replace(/^swal-/,"")]=S.innerHTML.trim())}return o},Es=e=>{const n=Gr.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(e.children).forEach(o=>{const c=o.tagName.toLowerCase();n.includes(c)||O(`Unrecognized element <${c}>`)})},Me=(e,n)=>{Array.from(e.attributes).forEach(o=>{n.indexOf(o.name)===-1&&O([`Unrecognized attribute "${o.name}" on <${e.tagName.toLowerCase()}>.`,`${n.length?`Allowed attributes are: ${n.join(", ")}`:"To set the value, use HTML within the element."}`])})},qr=10,Ss=e=>{const n=A(),o=y();typeof e.willOpen=="function"&&e.willOpen(o);const g=window.getComputedStyle(document.body).overflowY;_s(n,o,e),setTimeout(()=>{Ps(n,o)},qr),lt()&&(As(n,e.scrollbarPadding,g),mo()),!He()&&!i.previousActiveElement&&(i.previousActiveElement=document.activeElement),typeof e.didOpen=="function"&&setTimeout(()=>e.didOpen(o)),ce(n,f["no-transition"])},Xr=e=>{const n=y();if(e.target!==n)return;const o=A();n.removeEventListener(ut,Xr),o.style.overflowY="auto"},Ps=(e,n)=>{ut&&ur(n)?(e.style.overflowY="hidden",n.addEventListener(ut,Xr)):e.style.overflowY="auto"},As=(e,n,o)=>{po(),n&&o!=="hidden"&&ko(),setTimeout(()=>{e.scrollTop=0})},_s=(e,n,o)=>{P(e,o.showClass.backdrop),n.style.setProperty("opacity","0","important"),Z(n,"grid"),setTimeout(()=>{P(n,o.showClass.popup),n.style.removeProperty("opacity")},qr),P([document.documentElement,document.body],f.shown),o.heightAuto&&o.backdrop&&!o.toast&&P([document.documentElement,document.body],f["height-auto"])};var Kr={email:(e,n)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.resolve(n||"Invalid email address"),url:(e,n)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(n||"Invalid URL")};function js(e){e.inputValidator||Object.keys(Kr).forEach(n=>{e.input===n&&(e.inputValidator=Kr[n])})}function Is(e){(!e.target||typeof e.target=="string"&&!document.querySelector(e.target)||typeof e.target!="string"&&!e.target.appendChild)&&(O('Target parameter is not valid, defaulting to "body"'),e.target="body")}function Ts(e){js(e),e.showLoaderOnConfirm&&!e.preConfirm&&O(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Is(e),typeof e.title=="string"&&(e.title=e.title.split(`
`).join("<br />")),Ei(e)}let me;class G{constructor(){if(typeof window>"u")return;me=this;for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];const g=Object.freeze(this.constructor.argsToParams(o));this.params=g,this.isAwaitingPromise=!1;const S=me._main(me.params);l.promise.set(this,S)}_main(n){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Xo(Object.assign({},o,n)),i.currentInstance&&(i.currentInstance._destroy(),lt()&&wr()),i.currentInstance=me;const c=Ns(n,o);Ts(c),Object.freeze(c),i.timeout&&(i.timeout.stop(),delete i.timeout),clearTimeout(i.restoreFocusTimeout);const g=Ms(me);return hr(me,c),l.innerParams.set(me,c),Ls(me,g,c)}then(n){return l.promise.get(this).then(n)}finally(n){return l.promise.get(this).finally(n)}}const Ls=(e,n,o)=>new Promise((c,g)=>{const S=R=>{e.close({isDismissed:!0,dismiss:R})};dt.swalPromiseResolve.set(e,c),dt.swalPromiseReject.set(e,g),n.confirmButton.onclick=()=>{Do(e)},n.denyButton.onclick=()=>{Fo(e)},n.cancelButton.onclick=()=>{Ro(e,S)},n.closeButton.onclick=()=>{S(We.close)},Qo(e,n,S),io(e,i,o,S),jo(e,o),Ss(o),Bs(i,o,S),$s(n,o),setTimeout(()=>{n.container.scrollTop=0})}),Ns=(e,n)=>{const o=bs(e),c=Object.assign({},Ge,n,o,e);return c.showClass=Object.assign({},Ge.showClass,c.showClass),c.hideClass=Object.assign({},Ge.hideClass,c.hideClass),c},Ms=e=>{const n={popup:y(),container:A(),actions:Le(),confirmButton:le(),denyButton:he(),cancelButton:ge(),loader:be(),closeButton:ot(),validationMessage:ye(),progressSteps:se()};return l.domCache.set(e,n),n},Bs=(e,n,o)=>{const c=ze();te(c),n.timer&&(e.timeout=new hs(()=>{o("timer"),delete e.timeout},n.timer),n.timerProgressBar&&(Z(c),ne(c,n,"timerProgressBar"),setTimeout(()=>{e.timeout&&e.timeout.running&&fn(n.timer)})))},$s=(e,n)=>{if(!n.toast){if(!D(n.allowEnterKey)){Fs();return}Ds(e,n)||gn(-1,1)}},Ds=(e,n)=>n.focusDeny&&ue(e.denyButton)?(e.denyButton.focus(),!0):n.focusCancel&&ue(e.cancelButton)?(e.cancelButton.focus(),!0):n.focusConfirm&&ue(e.confirmButton)?(e.confirmButton.focus(),!0):!1,Fs=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const e=new Date,n=localStorage.getItem("swal-initiation");n?(e.getTime()-Date.parse(n))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const o=document.createElement("audio");o.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",o.loop=!0,document.body.appendChild(o),setTimeout(()=>{o.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${e}`)}G.prototype.disableButtons=Tr,G.prototype.enableButtons=Ir,G.prototype.getInput=Ar,G.prototype.disableInput=Nr,G.prototype.enableInput=Lr,G.prototype.hideLoading=jt,G.prototype.disableLoading=jt,G.prototype.showValidationMessage=Mr,G.prototype.resetValidationMessage=Br,G.prototype.close=Ee,G.prototype.closePopup=Ee,G.prototype.closeModal=Ee,G.prototype.closeToast=Ee,G.prototype.rejectPromise=kr,G.prototype.update=Rr,G.prototype._destroy=zr,Object.assign(G,gs),Object.keys(Jo).forEach(e=>{G[e]=function(){return me&&me[e]?me[e](...arguments):null}}),G.DismissReason=We,G.version="11.7.12";const Tt=G;return Tt.default=Tt,Tt}),typeof Se<"u"&&Se.Sweetalert2&&(Se.swal=Se.sweetAlert=Se.Swal=Se.SweetAlert=Se.Sweetalert2)})(Ma);var pl=Ma.exports;const kn=Ia(pl);const gl="_search_r8kxd_1",hl="_results_list_r8kxd_21",bl={search:gl,results_list:hl},Cn=Vn.bind(bl),vl=()=>{const[t,r]=N.useState(""),[a,i]=N.useState(!1),[s,u]=N.useState([]);N.useEffect(()=>{La("http://127.0.0.1:5000/api/documents").then(m=>{const f=m.filter(h=>t&&h&&h.title&&h.title.toLowerCase().includes(t.toLowerCase()));u(f)}),t.length>0&&i(!0)},[t]);const l=m=>{r(m)},d=m=>{i(!1),r("")};return p.jsx(p.Fragment,{children:p.jsxs("div",{className:Cn("search"),children:[p.jsx("input",{type:"text",placeholder:"Tìm kiếm....",style:{height:"100%"},value:t,onChange:m=>l(m.target.value)}),p.jsx("span",{className:"material-icons",children:"search"}),p.jsx("div",{className:Cn("results_list"),children:a&&s.map((m,f)=>p.jsxs(Be,{className:Cn("result"),to:`/Documents/${m.id}`,onClick:d,children:[m.title," "]},f))})]})})};var Ba={},tn={},nn={},Q={};Object.defineProperty(Q,"__esModule",{value:!0});Q.disabledIconStyle=Q.disabledStyle=Q.hoverStyle=Q.svgStyle=Q.iconStyle=Q.lightStyle=Q.darkStyle=void 0;function Jr(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);r&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),a.push.apply(a,i)}return a}function $a(t){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?Jr(Object(a),!0).forEach(function(i){yl(t,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Jr(Object(a)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(a,i))})}return t}function yl(t,r,a){return r in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t}var Da={height:"50px",width:"240px",border:"none",textAlign:"center",verticalAlign:"center",boxShadow:"0 2px 4px 0 rgba(0,0,0,.25)",fontSize:"16px",lineHeight:"48px",display:"block",borderRadius:"1px",transition:"background-color .218s, border-color .218s, box-shadow .218s",fontFamily:"Roboto,arial,sans-serif",cursor:"pointer",userSelect:"none"},wl=$a({backgroundColor:"#4285f4",color:"#fff"},Da);Q.darkStyle=wl;var xl=$a({backgroundColor:"#fff",color:"rgba(0,0,0,.54)"},Da);Q.lightStyle=xl;var kl={width:"48px",height:"48px",textAlign:"center",verticalAlign:"center",display:"block",marginTop:"1px",marginLeft:"1px",float:"left",backgroundColor:"#fff",borderRadius:"1px",whiteSpace:"nowrap"};Q.iconStyle=kl;var Cl={width:"48px",height:"48px",display:"block"};Q.svgStyle=Cl;var Ol={boxShadow:"0 0 3px 3px rgba(66,133,244,.3)",transition:"background-color .218s, border-color .218s, box-shadow .218s"};Q.hoverStyle=Ol;var El={backgroundColor:"rgba(37, 5, 5, .08)",color:"rgba(0, 0, 0, .40)",cursor:"not-allowed"};Q.disabledStyle=El;var Sl={backgroundColor:"transparent"};Q.disabledIconStyle=Sl;Object.defineProperty(nn,"__esModule",{value:!0});nn.GoogleIcon=void 0;var v=Fa(N),Qr=Fa(Na),et=Q;function Fa(t){return t&&t.__esModule?t:{default:t}}function ea(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);r&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),a.push.apply(a,i)}return a}function Pl(t){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?ea(Object(a),!0).forEach(function(i){Al(t,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ea(Object(a)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(a,i))})}return t}function Al(t,r,a){return r in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t}var _l=v.default.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"46px",height:"46px",viewBox:"0 0 46 46",style:et.svgStyle},v.default.createElement("defs",null,v.default.createElement("filter",{x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox",id:"filter-1"},v.default.createElement("feOffset",{dx:"0",dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}),v.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),v.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0",in:"shadowBlurOuter1",type:"matrix",result:"shadowMatrixOuter1"}),v.default.createElement("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"shadowOffsetOuter2"}),v.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),v.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0",in:"shadowBlurOuter2",type:"matrix",result:"shadowMatrixOuter2"}),v.default.createElement("feMerge",null,v.default.createElement("feMergeNode",{in:"shadowMatrixOuter1"}),v.default.createElement("feMergeNode",{in:"shadowMatrixOuter2"}),v.default.createElement("feMergeNode",{in:"SourceGraphic"}))),v.default.createElement("rect",{id:"path-2",x:"0",y:"0",width:"40",height:"40",rx:"2"}),v.default.createElement("rect",{id:"path-3",x:"5",y:"5",width:"38",height:"38",rx:"1"})),v.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},v.default.createElement("g",{id:"9-PATCH",transform:"translate(-608.000000, -219.000000)"}),v.default.createElement("g",{id:"btn_google_dark_normal",transform:"translate(-1.000000, -1.000000)"},v.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)",filter:"url(#filter-1)"},v.default.createElement("g",{id:"button-bg"},v.default.createElement("use",{fill:"#4285F4",fillRule:"evenodd"}),v.default.createElement("use",{fill:"none"}),v.default.createElement("use",{fill:"none"}),v.default.createElement("use",{fill:"none"}))),v.default.createElement("g",{id:"button-bg-copy"},v.default.createElement("use",{fill:"#FFFFFF",fillRule:"evenodd"}),v.default.createElement("use",{fill:"none"}),v.default.createElement("use",{fill:"none"}),v.default.createElement("use",{fill:"none"})),v.default.createElement("g",{id:"logo_googleg_48dp",transform:"translate(15.000000, 15.000000)"},v.default.createElement("path",{d:"M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z",id:"Shape",fill:"#4285F4"}),v.default.createElement("path",{d:"M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z",id:"Shape",fill:"#34A853"}),v.default.createElement("path",{d:"M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z",id:"Shape",fill:"#FBBC05"}),v.default.createElement("path",{d:"M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z",id:"Shape",fill:"#EA4335"}),v.default.createElement("path",{d:"M0,0 L18,0 L18,18 L0,18 L0,0 Z",id:"Shape"})),v.default.createElement("g",{id:"handles_square"})))),jl=v.default.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"46px",height:"46px",viewBox:"0 0 46 46",style:et.svgStyle},v.default.createElement("defs",null,v.default.createElement("filter",{x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox",id:"filter-1"},v.default.createElement("feOffset",{dx:"0",dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}),v.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),v.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0",in:"shadowBlurOuter1",type:"matrix",result:"shadowMatrixOuter1"}),v.default.createElement("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"shadowOffsetOuter2"}),v.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),v.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0",in:"shadowBlurOuter2",type:"matrix",result:"shadowMatrixOuter2"}),v.default.createElement("feMerge",null,v.default.createElement("feMergeNode",{in:"shadowMatrixOuter1"}),v.default.createElement("feMergeNode",{in:"shadowMatrixOuter2"}),v.default.createElement("feMergeNode",{in:"SourceGraphic"}))),v.default.createElement("rect",{id:"path-2",x:"0",y:"0",width:"40",height:"40",rx:"2"})),v.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},v.default.createElement("g",{id:"9-PATCH",transform:"translate(-608.000000, -160.000000)"}),v.default.createElement("g",{id:"btn_google_light_normal",transform:"translate(-1.000000, -1.000000)"},v.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)",filter:"url(#filter-1)"},v.default.createElement("g",{id:"button-bg"},v.default.createElement("use",{fill:"#FFFFFF",fillRule:"evenodd"}),v.default.createElement("use",{fill:"none"}),v.default.createElement("use",{fill:"none"}),v.default.createElement("use",{fill:"none"}))),v.default.createElement("g",{id:"logo_googleg_48dp",transform:"translate(15.000000, 15.000000)"},v.default.createElement("path",{d:"M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z",id:"Shape",fill:"#4285F4"}),v.default.createElement("path",{d:"M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z",id:"Shape",fill:"#34A853"}),v.default.createElement("path",{d:"M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z",id:"Shape",fill:"#FBBC05"}),v.default.createElement("path",{d:"M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z",id:"Shape",fill:"#EA4335"}),v.default.createElement("path",{d:"M0,0 L18,0 L18,18 L0,18 L0,0 Z",id:"Shape"})),v.default.createElement("g",{id:"handles_square"})))),Il=v.default.createElement("svg",{width:"46px",height:"46px",viewBox:"0 0 46 46",version:"1.1",xmlns:"http://www.w3.org/2000/svg",style:et.svgStyle},v.default.createElement("defs",null,v.default.createElement("rect",{id:"path-1",x:"0",y:"0",width:"40",height:"40",rx:"2"})),v.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},v.default.createElement("g",{id:"9-PATCH",transform:"translate(-788.000000, -219.000000)"}),v.default.createElement("g",{id:"btn_google_dark_disabled",transform:"translate(-1.000000, -1.000000)"},v.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)"},v.default.createElement("g",{id:"button-bg"},v.default.createElement("use",{fillOpacity:"0.08",fill:"#000000",fillRule:"evenodd"}),v.default.createElement("use",{fill:"none"}),v.default.createElement("use",{fill:"none"}),v.default.createElement("use",{fill:"none"}))),v.default.createElement("path",{d:"M24.001,25.71 L24.001,22.362 L32.425,22.362 C32.551,22.929 32.65,23.46 32.65,24.207 C32.65,29.346 29.203,33 24.01,33 C19.042,33 15.01,28.968 15.01,24 C15.01,19.032 19.042,15 24.01,15 C26.44,15 28.474,15.891 30.031,17.349 L27.475,19.833 C26.827,19.221 25.693,18.501 24.01,18.501 C21.031,18.501 18.601,20.976 18.601,24.009 C18.601,27.042 21.031,29.517 24.01,29.517 C27.457,29.517 28.726,27.132 28.96,25.719 L24.001,25.719 L24.001,25.71 Z",id:"Shape-Copy",fillOpacity:"0.4",fill:"#000000"}),v.default.createElement("g",{id:"handles_square"})))),Gn=function(r){var a=r.disabled,i=r.type;return v.default.createElement("div",{style:a?Pl({},et.iconStyle,{},et.disabledIconStyle):et.iconStyle},a?Il:i==="dark"?_l:jl)};nn.GoogleIcon=Gn;Gn.propTypes={disabled:Qr.default.bool,type:Qr.default.oneOf(["light","dark"])};Gn.defaultProps={type:"dark"};Object.defineProperty(tn,"__esModule",{value:!0});tn.default=void 0;var $t=Nl(N),Xe=Ll(Na),Tl=nn,Dt=Q;function Ll(t){return t&&t.__esModule?t:{default:t}}function Ra(){if(typeof WeakMap!="function")return null;var t=new WeakMap;return Ra=function(){return t},t}function Nl(t){if(t&&t.__esModule)return t;if(t===null||gt(t)!=="object"&&typeof t!="function")return{default:t};var r=Ra();if(r&&r.has(t))return r.get(t);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){var u=i?Object.getOwnPropertyDescriptor(t,s):null;u&&(u.get||u.set)?Object.defineProperty(a,s,u):a[s]=t[s]}return a.default=t,r&&r.set(t,a),a}function gt(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?gt=function(a){return typeof a}:gt=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},gt(t)}function jn(){return jn=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},jn.apply(this,arguments)}function Ml(t,r){if(t==null)return{};var a=Bl(t,r),i,s;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(s=0;s<u.length;s++)i=u[s],!(r.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}function Bl(t,r){if(t==null)return{};var a={},i=Object.keys(t),s,u;for(u=0;u<i.length;u++)s=i[u],!(r.indexOf(s)>=0)&&(a[s]=t[s]);return a}function ta(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);r&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),a.push.apply(a,i)}return a}function On(t){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?ta(Object(a),!0).forEach(function(i){Ae(t,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ta(Object(a)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(a,i))})}return t}function $l(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function na(t,r){for(var a=0;a<r.length;a++){var i=r[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Dl(t,r,a){return r&&na(t.prototype,r),a&&na(t,a),t}function Fl(t){return function(){var r=Kt(t),a;if(zl()){var i=Kt(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return Rl(this,a)}}function Rl(t,r){return r&&(gt(r)==="object"||typeof r=="function")?r:Ke(t)}function Ke(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function zl(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Kt(t){return Kt=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},Kt(t)}function Hl(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&In(t,r)}function In(t,r){return In=Object.setPrototypeOf||function(i,s){return i.__proto__=s,i},In(t,r)}function Ae(t,r,a){return r in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t}var qn=function(t){Hl(a,t);var r=Fl(a);function a(){var i;$l(this,a);for(var s=arguments.length,u=new Array(s),l=0;l<s;l++)u[l]=arguments[l];return i=r.call.apply(r,[this].concat(u)),Ae(Ke(i),"state",{hovered:!1}),Ae(Ke(i),"getStyle",function(d){var m=i.props.type==="dark"?Dt.darkStyle:Dt.lightStyle;return i.state.hovered?On({},m,{},Dt.hoverStyle,{},d):i.props.disabled?On({},m,{},Dt.disabledStyle,{},d):On({},m,{},d)}),Ae(Ke(i),"mouseOver",function(){i.props.disabled||i.setState({hovered:!0})}),Ae(Ke(i),"mouseOut",function(){i.props.disabled||i.setState({hovered:!1})}),Ae(Ke(i),"click",function(d){i.props.disabled||i.props.onClick(d)}),i}return Dl(a,[{key:"render",value:function(){var s=this.props,u=s.label,l=s.style,d=Ml(s,["label","style"]);return $t.default.createElement("div",jn({},d,{role:"button",onClick:this.click,style:this.getStyle(l),onMouseOver:this.mouseOver,onMouseOut:this.mouseOut}),$t.default.createElement(Tl.GoogleIcon,this.props),$t.default.createElement("span",null,u))}}]),a}($t.PureComponent);tn.default=qn;Ae(qn,"propTypes",{label:Xe.default.string,disabled:Xe.default.bool,tabIndex:Xe.default.number,onClick:Xe.default.func,type:Xe.default.oneOf(["light","dark"]),style:Xe.default.object});Ae(qn,"defaultProps",{label:"Sign in with Google",disabled:!1,type:"dark",tabIndex:0,onClick:function(){}});(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"GoogleButton",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(tn);function a(i){return i&&i.__esModule?i:{default:i}}})(Ba);const Ul=Ia(Ba);function ra(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);r&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),a.push.apply(a,i)}return a}function x(t){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?ra(Object(a),!0).forEach(function(i){X(t,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ra(Object(a)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(a,i))})}return t}function Zt(t){"@babel/helpers - typeof";return Zt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Zt(t)}function Wl(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function aa(t,r){for(var a=0;a<r.length;a++){var i=r[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Yl(t,r,a){return r&&aa(t.prototype,r),a&&aa(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t}function X(t,r,a){return r in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t}function Xn(t,r){return Gl(t)||Xl(t,r)||za(t,r)||Zl()}function Ct(t){return Vl(t)||ql(t)||za(t)||Kl()}function Vl(t){if(Array.isArray(t))return Tn(t)}function Gl(t){if(Array.isArray(t))return t}function ql(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Xl(t,r){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var i=[],s=!0,u=!1,l,d;try{for(a=a.call(t);!(s=(l=a.next()).done)&&(i.push(l.value),!(r&&i.length===r));s=!0);}catch(m){u=!0,d=m}finally{try{!s&&a.return!=null&&a.return()}finally{if(u)throw d}}return i}}function za(t,r){if(t){if(typeof t=="string")return Tn(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Tn(t,r)}}function Tn(t,r){(r==null||r>t.length)&&(r=t.length);for(var a=0,i=new Array(r);a<r;a++)i[a]=t[a];return i}function Kl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zl(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ia=function(){},Kn={},Ha={},Ua=null,Wa={mark:ia,measure:ia};try{typeof window<"u"&&(Kn=window),typeof document<"u"&&(Ha=document),typeof MutationObserver<"u"&&(Ua=MutationObserver),typeof performance<"u"&&(Wa=performance)}catch{}var Jl=Kn.navigator||{},oa=Jl.userAgent,sa=oa===void 0?"":oa,je=Kn,W=Ha,la=Ua,Ft=Wa;je.document;var Ce=!!W.documentElement&&!!W.head&&typeof W.addEventListener=="function"&&typeof W.createElement=="function",Ya=~sa.indexOf("MSIE")||~sa.indexOf("Trident/"),Rt,zt,Ht,Ut,Wt,we="___FONT_AWESOME___",Ln=16,Va="fa",Ga="svg-inline--fa",Fe="data-fa-i2svg",Nn="data-fa-pseudo-element",Ql="data-fa-pseudo-element-pending",Zn="data-prefix",Jn="data-icon",ca="fontawesome-i2svg",ec="async",tc=["HTML","HEAD","STYLE","SCRIPT"],qa=function(){try{return!0}catch{return!1}}(),U="classic",Y="sharp",Qn=[U,Y];function Ot(t){return new Proxy(t,{get:function(a,i){return i in a?a[i]:a[U]}})}var vt=Ot((Rt={},X(Rt,U,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),X(Rt,Y,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Rt)),yt=Ot((zt={},X(zt,U,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),X(zt,Y,{solid:"fass",regular:"fasr",light:"fasl"}),zt)),wt=Ot((Ht={},X(Ht,U,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),X(Ht,Y,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Ht)),nc=Ot((Ut={},X(Ut,U,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),X(Ut,Y,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Ut)),rc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Xa="fa-layers-text",ac=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ic=Ot((Wt={},X(Wt,U,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),X(Wt,Y,{900:"fass",400:"fasr",300:"fasl"}),Wt)),Ka=[1,2,3,4,5,6,7,8,9,10],oc=Ka.concat([11,12,13,14,15,16,17,18,19,20]),sc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$e={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},xt=new Set;Object.keys(yt[U]).map(xt.add.bind(xt));Object.keys(yt[Y]).map(xt.add.bind(xt));var lc=[].concat(Qn,Ct(xt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$e.GROUP,$e.SWAP_OPACITY,$e.PRIMARY,$e.SECONDARY]).concat(Ka.map(function(t){return"".concat(t,"x")})).concat(oc.map(function(t){return"w-".concat(t)})),ht=je.FontAwesomeConfig||{};function cc(t){var r=W.querySelector("script["+t+"]");if(r)return r.getAttribute(t)}function uc(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(W&&typeof W.querySelector=="function"){var fc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];fc.forEach(function(t){var r=Xn(t,2),a=r[0],i=r[1],s=uc(cc(a));s!=null&&(ht[i]=s)})}var Za={styleDefault:"solid",familyDefault:"classic",cssPrefix:Va,replacementClass:Ga,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ht.familyPrefix&&(ht.cssPrefix=ht.familyPrefix);var nt=x(x({},Za),ht);nt.autoReplaceSvg||(nt.observeMutations=!1);var C={};Object.keys(Za).forEach(function(t){Object.defineProperty(C,t,{enumerable:!0,set:function(a){nt[t]=a,bt.forEach(function(i){return i(C)})},get:function(){return nt[t]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(r){nt.cssPrefix=r,bt.forEach(function(a){return a(C)})},get:function(){return nt.cssPrefix}});je.FontAwesomeConfig=C;var bt=[];function dc(t){return bt.push(t),function(){bt.splice(bt.indexOf(t),1)}}var Pe=Ln,ve={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function mc(t){if(!(!t||!Ce)){var r=W.createElement("style");r.setAttribute("type","text/css"),r.innerHTML=t;for(var a=W.head.childNodes,i=null,s=a.length-1;s>-1;s--){var u=a[s],l=(u.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(l)>-1&&(i=u)}return W.head.insertBefore(r,i),t}}var pc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function kt(){for(var t=12,r="";t-- >0;)r+=pc[Math.random()*62|0];return r}function rt(t){for(var r=[],a=(t||[]).length>>>0;a--;)r[a]=t[a];return r}function er(t){return t.classList?rt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(r){return r})}function Ja(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function gc(t){return Object.keys(t||{}).reduce(function(r,a){return r+"".concat(a,'="').concat(Ja(t[a]),'" ')},"").trim()}function rn(t){return Object.keys(t||{}).reduce(function(r,a){return r+"".concat(a,": ").concat(t[a].trim(),";")},"")}function tr(t){return t.size!==ve.size||t.x!==ve.x||t.y!==ve.y||t.rotate!==ve.rotate||t.flipX||t.flipY}function hc(t){var r=t.transform,a=t.containerWidth,i=t.iconWidth,s={transform:"translate(".concat(a/2," 256)")},u="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),d="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(u," ").concat(l," ").concat(d)},f={transform:"translate(".concat(i/2*-1," -256)")};return{outer:s,inner:m,path:f}}function bc(t){var r=t.transform,a=t.width,i=a===void 0?Ln:a,s=t.height,u=s===void 0?Ln:s,l=t.startCentered,d=l===void 0?!1:l,m="";return d&&Ya?m+="translate(".concat(r.x/Pe-i/2,"em, ").concat(r.y/Pe-u/2,"em) "):d?m+="translate(calc(-50% + ".concat(r.x/Pe,"em), calc(-50% + ").concat(r.y/Pe,"em)) "):m+="translate(".concat(r.x/Pe,"em, ").concat(r.y/Pe,"em) "),m+="scale(".concat(r.size/Pe*(r.flipX?-1:1),", ").concat(r.size/Pe*(r.flipY?-1:1),") "),m+="rotate(".concat(r.rotate,"deg) "),m}var vc=`:root, :host {
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
}`;function Qa(){var t=Va,r=Ga,a=C.cssPrefix,i=C.replacementClass,s=vc;if(a!==t||i!==r){var u=new RegExp("\\.".concat(t,"\\-"),"g"),l=new RegExp("\\--".concat(t,"\\-"),"g"),d=new RegExp("\\.".concat(r),"g");s=s.replace(u,".".concat(a,"-")).replace(l,"--".concat(a,"-")).replace(d,".".concat(i))}return s}var ua=!1;function En(){C.autoAddCss&&!ua&&(mc(Qa()),ua=!0)}var yc={mixout:function(){return{dom:{css:Qa,insertCss:En}}},hooks:function(){return{beforeDOMElementCreation:function(){En()},beforeI2svg:function(){En()}}}},xe=je||{};xe[we]||(xe[we]={});xe[we].styles||(xe[we].styles={});xe[we].hooks||(xe[we].hooks={});xe[we].shims||(xe[we].shims=[]);var pe=xe[we],ei=[],wc=function t(){W.removeEventListener("DOMContentLoaded",t),Jt=1,ei.map(function(r){return r()})},Jt=!1;Ce&&(Jt=(W.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(W.readyState),Jt||W.addEventListener("DOMContentLoaded",wc));function xc(t){Ce&&(Jt?setTimeout(t,0):ei.push(t))}function Et(t){var r=t.tag,a=t.attributes,i=a===void 0?{}:a,s=t.children,u=s===void 0?[]:s;return typeof t=="string"?Ja(t):"<".concat(r," ").concat(gc(i),">").concat(u.map(Et).join(""),"</").concat(r,">")}function fa(t,r,a){if(t&&t[r]&&t[r][a])return{prefix:r,iconName:a,icon:t[r][a]}}var kc=function(r,a){return function(i,s,u,l){return r.call(a,i,s,u,l)}},Sn=function(r,a,i,s){var u=Object.keys(r),l=u.length,d=s!==void 0?kc(a,s):a,m,f,h;for(i===void 0?(m=1,h=r[u[0]]):(m=0,h=i);m<l;m++)f=u[m],h=d(h,r[f],f,r);return h};function Cc(t){for(var r=[],a=0,i=t.length;a<i;){var s=t.charCodeAt(a++);if(s>=55296&&s<=56319&&a<i){var u=t.charCodeAt(a++);(u&64512)==56320?r.push(((s&1023)<<10)+(u&1023)+65536):(r.push(s),a--)}else r.push(s)}return r}function Mn(t){var r=Cc(t);return r.length===1?r[0].toString(16):null}function Oc(t,r){var a=t.length,i=t.charCodeAt(r),s;return i>=55296&&i<=56319&&a>r+1&&(s=t.charCodeAt(r+1),s>=56320&&s<=57343)?(i-55296)*1024+s-56320+65536:i}function da(t){return Object.keys(t).reduce(function(r,a){var i=t[a],s=!!i.icon;return s?r[i.iconName]=i.icon:r[a]=i,r},{})}function Bn(t,r){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=a.skipHooks,s=i===void 0?!1:i,u=da(r);typeof pe.hooks.addPack=="function"&&!s?pe.hooks.addPack(t,da(r)):pe.styles[t]=x(x({},pe.styles[t]||{}),u),t==="fas"&&Bn("fa",r)}var Yt,Vt,Gt,Ze=pe.styles,Ec=pe.shims,Sc=(Yt={},X(Yt,U,Object.values(wt[U])),X(Yt,Y,Object.values(wt[Y])),Yt),nr=null,ti={},ni={},ri={},ai={},ii={},Pc=(Vt={},X(Vt,U,Object.keys(vt[U])),X(Vt,Y,Object.keys(vt[Y])),Vt);function Ac(t){return~lc.indexOf(t)}function _c(t,r){var a=r.split("-"),i=a[0],s=a.slice(1).join("-");return i===t&&s!==""&&!Ac(s)?s:null}var oi=function(){var r=function(u){return Sn(Ze,function(l,d,m){return l[m]=Sn(d,u,{}),l},{})};ti=r(function(s,u,l){if(u[3]&&(s[u[3]]=l),u[2]){var d=u[2].filter(function(m){return typeof m=="number"});d.forEach(function(m){s[m.toString(16)]=l})}return s}),ni=r(function(s,u,l){if(s[l]=l,u[2]){var d=u[2].filter(function(m){return typeof m=="string"});d.forEach(function(m){s[m]=l})}return s}),ii=r(function(s,u,l){var d=u[2];return s[l]=l,d.forEach(function(m){s[m]=l}),s});var a="far"in Ze||C.autoFetchSvg,i=Sn(Ec,function(s,u){var l=u[0],d=u[1],m=u[2];return d==="far"&&!a&&(d="fas"),typeof l=="string"&&(s.names[l]={prefix:d,iconName:m}),typeof l=="number"&&(s.unicodes[l.toString(16)]={prefix:d,iconName:m}),s},{names:{},unicodes:{}});ri=i.names,ai=i.unicodes,nr=an(C.styleDefault,{family:C.familyDefault})};dc(function(t){nr=an(t.styleDefault,{family:C.familyDefault})});oi();function rr(t,r){return(ti[t]||{})[r]}function jc(t,r){return(ni[t]||{})[r]}function De(t,r){return(ii[t]||{})[r]}function si(t){return ri[t]||{prefix:null,iconName:null}}function Ic(t){var r=ai[t],a=rr("fas",t);return r||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function Ie(){return nr}var ar=function(){return{prefix:null,iconName:null,rest:[]}};function an(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.family,i=a===void 0?U:a,s=vt[i][t],u=yt[i][t]||yt[i][s],l=t in pe.styles?t:null;return u||l||null}var ma=(Gt={},X(Gt,U,Object.keys(wt[U])),X(Gt,Y,Object.keys(wt[Y])),Gt);function on(t){var r,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.skipLookups,s=i===void 0?!1:i,u=(r={},X(r,U,"".concat(C.cssPrefix,"-").concat(U)),X(r,Y,"".concat(C.cssPrefix,"-").concat(Y)),r),l=null,d=U;(t.includes(u[U])||t.some(function(f){return ma[U].includes(f)}))&&(d=U),(t.includes(u[Y])||t.some(function(f){return ma[Y].includes(f)}))&&(d=Y);var m=t.reduce(function(f,h){var b=_c(C.cssPrefix,h);if(Ze[h]?(h=Sc[d].includes(h)?nc[d][h]:h,l=h,f.prefix=h):Pc[d].indexOf(h)>-1?(l=h,f.prefix=an(h,{family:d})):b?f.iconName=b:h!==C.replacementClass&&h!==u[U]&&h!==u[Y]&&f.rest.push(h),!s&&f.prefix&&f.iconName){var w=l==="fa"?si(f.iconName):{},k=De(f.prefix,f.iconName);w.prefix&&(l=null),f.iconName=w.iconName||k||f.iconName,f.prefix=w.prefix||f.prefix,f.prefix==="far"&&!Ze.far&&Ze.fas&&!C.autoFetchSvg&&(f.prefix="fas")}return f},ar());return(t.includes("fa-brands")||t.includes("fab"))&&(m.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(m.prefix="fad"),!m.prefix&&d===Y&&(Ze.fass||C.autoFetchSvg)&&(m.prefix="fass",m.iconName=De(m.prefix,m.iconName)||m.iconName),(m.prefix==="fa"||l==="fa")&&(m.prefix=Ie()||"fas"),m}var Tc=function(){function t(){Wl(this,t),this.definitions={}}return Yl(t,[{key:"add",value:function(){for(var a=this,i=arguments.length,s=new Array(i),u=0;u<i;u++)s[u]=arguments[u];var l=s.reduce(this._pullDefinitions,{});Object.keys(l).forEach(function(d){a.definitions[d]=x(x({},a.definitions[d]||{}),l[d]),Bn(d,l[d]);var m=wt[U][d];m&&Bn(m,l[d]),oi()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,i){var s=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(s).map(function(u){var l=s[u],d=l.prefix,m=l.iconName,f=l.icon,h=f[2];a[d]||(a[d]={}),h.length>0&&h.forEach(function(b){typeof b=="string"&&(a[d][b]=f)}),a[d][m]=f}),a}}]),t}(),pa=[],Je={},tt={},Lc=Object.keys(tt);function Nc(t,r){var a=r.mixoutsTo;return pa=t,Je={},Object.keys(tt).forEach(function(i){Lc.indexOf(i)===-1&&delete tt[i]}),pa.forEach(function(i){var s=i.mixout?i.mixout():{};if(Object.keys(s).forEach(function(l){typeof s[l]=="function"&&(a[l]=s[l]),Zt(s[l])==="object"&&Object.keys(s[l]).forEach(function(d){a[l]||(a[l]={}),a[l][d]=s[l][d]})}),i.hooks){var u=i.hooks();Object.keys(u).forEach(function(l){Je[l]||(Je[l]=[]),Je[l].push(u[l])})}i.provides&&i.provides(tt)}),a}function $n(t,r){for(var a=arguments.length,i=new Array(a>2?a-2:0),s=2;s<a;s++)i[s-2]=arguments[s];var u=Je[t]||[];return u.forEach(function(l){r=l.apply(null,[r].concat(i))}),r}function Re(t){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var s=Je[t]||[];s.forEach(function(u){u.apply(null,a)})}function ke(){var t=arguments[0],r=Array.prototype.slice.call(arguments,1);return tt[t]?tt[t].apply(null,r):void 0}function Dn(t){t.prefix==="fa"&&(t.prefix="fas");var r=t.iconName,a=t.prefix||Ie();if(r)return r=De(a,r)||r,fa(li.definitions,a,r)||fa(pe.styles,a,r)}var li=new Tc,Mc=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,Re("noAuto")},Bc={i2svg:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ce?(Re("beforeI2svg",r),ke("pseudoElements2svg",r),ke("i2svg",r)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=r.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,xc(function(){Dc({autoReplaceSvgRoot:a}),Re("watch",r)})}},$c={icon:function(r){if(r===null)return null;if(Zt(r)==="object"&&r.prefix&&r.iconName)return{prefix:r.prefix,iconName:De(r.prefix,r.iconName)||r.iconName};if(Array.isArray(r)&&r.length===2){var a=r[1].indexOf("fa-")===0?r[1].slice(3):r[1],i=an(r[0]);return{prefix:i,iconName:De(i,a)||a}}if(typeof r=="string"&&(r.indexOf("".concat(C.cssPrefix,"-"))>-1||r.match(rc))){var s=on(r.split(" "),{skipLookups:!0});return{prefix:s.prefix||Ie(),iconName:De(s.prefix,s.iconName)||s.iconName}}if(typeof r=="string"){var u=Ie();return{prefix:u,iconName:De(u,r)||r}}}},fe={noAuto:Mc,config:C,dom:Bc,parse:$c,library:li,findIconDefinition:Dn,toHtml:Et},Dc=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=r.autoReplaceSvgRoot,i=a===void 0?W:a;(Object.keys(pe.styles).length>0||C.autoFetchSvg)&&Ce&&C.autoReplaceSvg&&fe.dom.i2svg({node:i})};function sn(t,r){return Object.defineProperty(t,"abstract",{get:r}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return Et(i)})}}),Object.defineProperty(t,"node",{get:function(){if(Ce){var i=W.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function Fc(t){var r=t.children,a=t.main,i=t.mask,s=t.attributes,u=t.styles,l=t.transform;if(tr(l)&&a.found&&!i.found){var d=a.width,m=a.height,f={x:d/m/2,y:.5};s.style=rn(x(x({},u),{},{"transform-origin":"".concat(f.x+l.x/16,"em ").concat(f.y+l.y/16,"em")}))}return[{tag:"svg",attributes:s,children:r}]}function Rc(t){var r=t.prefix,a=t.iconName,i=t.children,s=t.attributes,u=t.symbol,l=u===!0?"".concat(r,"-").concat(C.cssPrefix,"-").concat(a):u;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:x(x({},s),{},{id:l}),children:i}]}]}function ir(t){var r=t.icons,a=r.main,i=r.mask,s=t.prefix,u=t.iconName,l=t.transform,d=t.symbol,m=t.title,f=t.maskId,h=t.titleId,b=t.extra,w=t.watchable,k=w===void 0?!1:w,O=i.found?i:a,B=O.width,I=O.height,H=s==="fak",$=[C.replacementClass,u?"".concat(C.cssPrefix,"-").concat(u):""].filter(function(E){return b.classes.indexOf(E)===-1}).filter(function(E){return E!==""||!!E}).concat(b.classes).join(" "),D={children:[],attributes:x(x({},b.attributes),{},{"data-prefix":s,"data-icon":u,class:$,role:b.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(B," ").concat(I)})},z=H&&!~b.classes.indexOf("fa-fw")?{width:"".concat(B/I*16*.0625,"em")}:{};k&&(D.attributes[Fe]=""),m&&(D.children.push({tag:"title",attributes:{id:D.attributes["aria-labelledby"]||"title-".concat(h||kt())},children:[m]}),delete D.attributes.title);var F=x(x({},D),{},{prefix:s,iconName:u,main:a,mask:i,maskId:f,transform:l,symbol:d,styles:x(x({},z),b.styles)}),T=i.found&&a.found?ke("generateAbstractMask",F)||{children:[],attributes:{}}:ke("generateAbstractIcon",F)||{children:[],attributes:{}},A=T.children,_=T.attributes;return F.children=A,F.attributes=_,d?Rc(F):Fc(F)}function ga(t){var r=t.content,a=t.width,i=t.height,s=t.transform,u=t.title,l=t.extra,d=t.watchable,m=d===void 0?!1:d,f=x(x(x({},l.attributes),u?{title:u}:{}),{},{class:l.classes.join(" ")});m&&(f[Fe]="");var h=x({},l.styles);tr(s)&&(h.transform=bc({transform:s,startCentered:!0,width:a,height:i}),h["-webkit-transform"]=h.transform);var b=rn(h);b.length>0&&(f.style=b);var w=[];return w.push({tag:"span",attributes:f,children:[r]}),u&&w.push({tag:"span",attributes:{class:"sr-only"},children:[u]}),w}function zc(t){var r=t.content,a=t.title,i=t.extra,s=x(x(x({},i.attributes),a?{title:a}:{}),{},{class:i.classes.join(" ")}),u=rn(i.styles);u.length>0&&(s.style=u);var l=[];return l.push({tag:"span",attributes:s,children:[r]}),a&&l.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),l}var Pn=pe.styles;function Fn(t){var r=t[0],a=t[1],i=t.slice(4),s=Xn(i,1),u=s[0],l=null;return Array.isArray(u)?l={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat($e.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat($e.SECONDARY),fill:"currentColor",d:u[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat($e.PRIMARY),fill:"currentColor",d:u[1]}}]}:l={tag:"path",attributes:{fill:"currentColor",d:u}},{found:!0,width:r,height:a,icon:l}}var Hc={found:!1,width:512,height:512};function Uc(t,r){!qa&&!C.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(r,'" is missing.'))}function Rn(t,r){var a=r;return r==="fa"&&C.styleDefault!==null&&(r=Ie()),new Promise(function(i,s){if(ke("missingIconAbstract"),a==="fa"){var u=si(t)||{};t=u.iconName||t,r=u.prefix||r}if(t&&r&&Pn[r]&&Pn[r][t]){var l=Pn[r][t];return i(Fn(l))}Uc(t,r),i(x(x({},Hc),{},{icon:C.showMissingIcons&&t?ke("missingIconAbstract")||{}:{}}))})}var ha=function(){},zn=C.measurePerformance&&Ft&&Ft.mark&&Ft.measure?Ft:{mark:ha,measure:ha},pt='FA "6.4.0"',Wc=function(r){return zn.mark("".concat(pt," ").concat(r," begins")),function(){return ci(r)}},ci=function(r){zn.mark("".concat(pt," ").concat(r," ends")),zn.measure("".concat(pt," ").concat(r),"".concat(pt," ").concat(r," begins"),"".concat(pt," ").concat(r," ends"))},or={begin:Wc,end:ci},qt=function(){};function ba(t){var r=t.getAttribute?t.getAttribute(Fe):null;return typeof r=="string"}function Yc(t){var r=t.getAttribute?t.getAttribute(Zn):null,a=t.getAttribute?t.getAttribute(Jn):null;return r&&a}function Vc(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(C.replacementClass)}function Gc(){if(C.autoReplaceSvg===!0)return Xt.replace;var t=Xt[C.autoReplaceSvg];return t||Xt.replace}function qc(t){return W.createElementNS("http://www.w3.org/2000/svg",t)}function Xc(t){return W.createElement(t)}function ui(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.ceFn,i=a===void 0?t.tag==="svg"?qc:Xc:a;if(typeof t=="string")return W.createTextNode(t);var s=i(t.tag);Object.keys(t.attributes||[]).forEach(function(l){s.setAttribute(l,t.attributes[l])});var u=t.children||[];return u.forEach(function(l){s.appendChild(ui(l,{ceFn:i}))}),s}function Kc(t){var r=" ".concat(t.outerHTML," ");return r="".concat(r,"Font Awesome fontawesome.com "),r}var Xt={replace:function(r){var a=r[0];if(a.parentNode)if(r[1].forEach(function(s){a.parentNode.insertBefore(ui(s),a)}),a.getAttribute(Fe)===null&&C.keepOriginalSource){var i=W.createComment(Kc(a));a.parentNode.replaceChild(i,a)}else a.remove()},nest:function(r){var a=r[0],i=r[1];if(~er(a).indexOf(C.replacementClass))return Xt.replace(r);var s=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var u=i[0].attributes.class.split(" ").reduce(function(d,m){return m===C.replacementClass||m.match(s)?d.toSvg.push(m):d.toNode.push(m),d},{toNode:[],toSvg:[]});i[0].attributes.class=u.toSvg.join(" "),u.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",u.toNode.join(" "))}var l=i.map(function(d){return Et(d)}).join(`
`);a.setAttribute(Fe,""),a.innerHTML=l}};function va(t){t()}function fi(t,r){var a=typeof r=="function"?r:qt;if(t.length===0)a();else{var i=va;C.mutateApproach===ec&&(i=je.requestAnimationFrame||va),i(function(){var s=Gc(),u=or.begin("mutate");t.map(s),u(),a()})}}var sr=!1;function di(){sr=!0}function Hn(){sr=!1}var Qt=null;function ya(t){if(la&&C.observeMutations){var r=t.treeCallback,a=r===void 0?qt:r,i=t.nodeCallback,s=i===void 0?qt:i,u=t.pseudoElementsCallback,l=u===void 0?qt:u,d=t.observeMutationsRoot,m=d===void 0?W:d;Qt=new la(function(f){if(!sr){var h=Ie();rt(f).forEach(function(b){if(b.type==="childList"&&b.addedNodes.length>0&&!ba(b.addedNodes[0])&&(C.searchPseudoElements&&l(b.target),a(b.target)),b.type==="attributes"&&b.target.parentNode&&C.searchPseudoElements&&l(b.target.parentNode),b.type==="attributes"&&ba(b.target)&&~sc.indexOf(b.attributeName))if(b.attributeName==="class"&&Yc(b.target)){var w=on(er(b.target)),k=w.prefix,O=w.iconName;b.target.setAttribute(Zn,k||h),O&&b.target.setAttribute(Jn,O)}else Vc(b.target)&&s(b.target)})}}),Ce&&Qt.observe(m,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Zc(){Qt&&Qt.disconnect()}function Jc(t){var r=t.getAttribute("style"),a=[];return r&&(a=r.split(";").reduce(function(i,s){var u=s.split(":"),l=u[0],d=u.slice(1);return l&&d.length>0&&(i[l]=d.join(":").trim()),i},{})),a}function Qc(t){var r=t.getAttribute("data-prefix"),a=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",s=on(er(t));return s.prefix||(s.prefix=Ie()),r&&a&&(s.prefix=r,s.iconName=a),s.iconName&&s.prefix||(s.prefix&&i.length>0&&(s.iconName=jc(s.prefix,t.innerText)||rr(s.prefix,Mn(t.innerText))),!s.iconName&&C.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function eu(t){var r=rt(t.attributes).reduce(function(s,u){return s.name!=="class"&&s.name!=="style"&&(s[u.name]=u.value),s},{}),a=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return C.autoA11y&&(a?r["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(i||kt()):(r["aria-hidden"]="true",r.focusable="false")),r}function tu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ve,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function wa(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Qc(t),i=a.iconName,s=a.prefix,u=a.rest,l=eu(t),d=$n("parseNodeAttributes",{},t),m=r.styleParser?Jc(t):[];return x({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:ve,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:u,styles:m,attributes:l}},d)}var nu=pe.styles;function mi(t){var r=C.autoReplaceSvg==="nest"?wa(t,{styleParser:!1}):wa(t);return~r.extra.classes.indexOf(Xa)?ke("generateLayersText",t,r):ke("generateSvgReplacementMutation",t,r)}var Te=new Set;Qn.map(function(t){Te.add("fa-".concat(t))});Object.keys(vt[U]).map(Te.add.bind(Te));Object.keys(vt[Y]).map(Te.add.bind(Te));Te=Ct(Te);function xa(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ce)return Promise.resolve();var a=W.documentElement.classList,i=function(b){return a.add("".concat(ca,"-").concat(b))},s=function(b){return a.remove("".concat(ca,"-").concat(b))},u=C.autoFetchSvg?Te:Qn.map(function(h){return"fa-".concat(h)}).concat(Object.keys(nu));u.includes("fa")||u.push("fa");var l=[".".concat(Xa,":not([").concat(Fe,"])")].concat(u.map(function(h){return".".concat(h,":not([").concat(Fe,"])")})).join(", ");if(l.length===0)return Promise.resolve();var d=[];try{d=rt(t.querySelectorAll(l))}catch{}if(d.length>0)i("pending"),s("complete");else return Promise.resolve();var m=or.begin("onTree"),f=d.reduce(function(h,b){try{var w=mi(b);w&&h.push(w)}catch(k){qa||k.name==="MissingIcon"&&console.error(k)}return h},[]);return new Promise(function(h,b){Promise.all(f).then(function(w){fi(w,function(){i("active"),i("complete"),s("pending"),typeof r=="function"&&r(),m(),h()})}).catch(function(w){m(),b(w)})})}function ru(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;mi(t).then(function(a){a&&fi([a],r)})}function au(t){return function(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(r||{}).icon?r:Dn(r||{}),s=a.mask;return s&&(s=(s||{}).icon?s:Dn(s||{})),t(i,x(x({},a),{},{mask:s}))}}var iu=function(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.transform,s=i===void 0?ve:i,u=a.symbol,l=u===void 0?!1:u,d=a.mask,m=d===void 0?null:d,f=a.maskId,h=f===void 0?null:f,b=a.title,w=b===void 0?null:b,k=a.titleId,O=k===void 0?null:k,B=a.classes,I=B===void 0?[]:B,H=a.attributes,$=H===void 0?{}:H,D=a.styles,z=D===void 0?{}:D;if(r){var F=r.prefix,T=r.iconName,A=r.icon;return sn(x({type:"icon"},r),function(){return Re("beforeDOMElementCreation",{iconDefinition:r,params:a}),C.autoA11y&&(w?$["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(O||kt()):($["aria-hidden"]="true",$.focusable="false")),ir({icons:{main:Fn(A),mask:m?Fn(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:F,iconName:T,transform:x(x({},ve),s),symbol:l,title:w,maskId:h,titleId:O,extra:{attributes:$,styles:z,classes:I}})})}},ou={mixout:function(){return{icon:au(iu)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=xa,a.nodeCallback=ru,a}}},provides:function(r){r.i2svg=function(a){var i=a.node,s=i===void 0?W:i,u=a.callback,l=u===void 0?function(){}:u;return xa(s,l)},r.generateSvgReplacementMutation=function(a,i){var s=i.iconName,u=i.title,l=i.titleId,d=i.prefix,m=i.transform,f=i.symbol,h=i.mask,b=i.maskId,w=i.extra;return new Promise(function(k,O){Promise.all([Rn(s,d),h.iconName?Rn(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(B){var I=Xn(B,2),H=I[0],$=I[1];k([a,ir({icons:{main:H,mask:$},prefix:d,iconName:s,transform:m,symbol:f,maskId:b,title:u,titleId:l,extra:w,watchable:!0})])}).catch(O)})},r.generateAbstractIcon=function(a){var i=a.children,s=a.attributes,u=a.main,l=a.transform,d=a.styles,m=rn(d);m.length>0&&(s.style=m);var f;return tr(l)&&(f=ke("generateAbstractTransformGrouping",{main:u,transform:l,containerWidth:u.width,iconWidth:u.width})),i.push(f||u.icon),{children:i,attributes:s}}}},su={mixout:function(){return{layer:function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.classes,u=s===void 0?[]:s;return sn({type:"layer"},function(){Re("beforeDOMElementCreation",{assembler:a,params:i});var l=[];return a(function(d){Array.isArray(d)?d.map(function(m){l=l.concat(m.abstract)}):l=l.concat(d.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(Ct(u)).join(" ")},children:l}]})}}}},lu={mixout:function(){return{counter:function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.title,u=s===void 0?null:s,l=i.classes,d=l===void 0?[]:l,m=i.attributes,f=m===void 0?{}:m,h=i.styles,b=h===void 0?{}:h;return sn({type:"counter",content:a},function(){return Re("beforeDOMElementCreation",{content:a,params:i}),zc({content:a.toString(),title:u,extra:{attributes:f,styles:b,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(Ct(d))}})})}}}},cu={mixout:function(){return{text:function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.transform,u=s===void 0?ve:s,l=i.title,d=l===void 0?null:l,m=i.classes,f=m===void 0?[]:m,h=i.attributes,b=h===void 0?{}:h,w=i.styles,k=w===void 0?{}:w;return sn({type:"text",content:a},function(){return Re("beforeDOMElementCreation",{content:a,params:i}),ga({content:a,transform:x(x({},ve),u),title:d,extra:{attributes:b,styles:k,classes:["".concat(C.cssPrefix,"-layers-text")].concat(Ct(f))}})})}}},provides:function(r){r.generateLayersText=function(a,i){var s=i.title,u=i.transform,l=i.extra,d=null,m=null;if(Ya){var f=parseInt(getComputedStyle(a).fontSize,10),h=a.getBoundingClientRect();d=h.width/f,m=h.height/f}return C.autoA11y&&!s&&(l.attributes["aria-hidden"]="true"),Promise.resolve([a,ga({content:a.innerHTML,width:d,height:m,transform:u,title:s,extra:l,watchable:!0})])}}},uu=new RegExp('"',"ug"),ka=[1105920,1112319];function fu(t){var r=t.replace(uu,""),a=Oc(r,0),i=a>=ka[0]&&a<=ka[1],s=r.length===2?r[0]===r[1]:!1;return{value:Mn(s?r[0]:r),isSecondary:i||s}}function Ca(t,r){var a="".concat(Ql).concat(r.replace(":","-"));return new Promise(function(i,s){if(t.getAttribute(a)!==null)return i();var u=rt(t.children),l=u.filter(function(A){return A.getAttribute(Nn)===r})[0],d=je.getComputedStyle(t,r),m=d.getPropertyValue("font-family").match(ac),f=d.getPropertyValue("font-weight"),h=d.getPropertyValue("content");if(l&&!m)return t.removeChild(l),i();if(m&&h!=="none"&&h!==""){var b=d.getPropertyValue("content"),w=~["Sharp"].indexOf(m[2])?Y:U,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(m[2])?yt[w][m[2].toLowerCase()]:ic[w][f],O=fu(b),B=O.value,I=O.isSecondary,H=m[0].startsWith("FontAwesome"),$=rr(k,B),D=$;if(H){var z=Ic(B);z.iconName&&z.prefix&&($=z.iconName,k=z.prefix)}if($&&!I&&(!l||l.getAttribute(Zn)!==k||l.getAttribute(Jn)!==D)){t.setAttribute(a,D),l&&t.removeChild(l);var F=tu(),T=F.extra;T.attributes[Nn]=r,Rn($,k).then(function(A){var _=ir(x(x({},F),{},{icons:{main:A,mask:ar()},prefix:k,iconName:D,extra:T,watchable:!0})),E=W.createElement("svg");r==="::before"?t.insertBefore(E,t.firstChild):t.appendChild(E),E.outerHTML=_.map(function(y){return Et(y)}).join(`
`),t.removeAttribute(a),i()}).catch(s)}else i()}else i()})}function du(t){return Promise.all([Ca(t,"::before"),Ca(t,"::after")])}function mu(t){return t.parentNode!==document.head&&!~tc.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Nn)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Oa(t){if(Ce)return new Promise(function(r,a){var i=rt(t.querySelectorAll("*")).filter(mu).map(du),s=or.begin("searchPseudoElements");di(),Promise.all(i).then(function(){s(),Hn(),r()}).catch(function(){s(),Hn(),a()})})}var pu={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Oa,a}}},provides:function(r){r.pseudoElements2svg=function(a){var i=a.node,s=i===void 0?W:i;C.searchPseudoElements&&Oa(s)}}},Ea=!1,gu={mixout:function(){return{dom:{unwatch:function(){di(),Ea=!0}}}},hooks:function(){return{bootstrap:function(){ya($n("mutationObserverCallbacks",{}))},noAuto:function(){Zc()},watch:function(a){var i=a.observeMutationsRoot;Ea?Hn():ya($n("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Sa=function(r){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return r.toLowerCase().split(" ").reduce(function(i,s){var u=s.toLowerCase().split("-"),l=u[0],d=u.slice(1).join("-");if(l&&d==="h")return i.flipX=!0,i;if(l&&d==="v")return i.flipY=!0,i;if(d=parseFloat(d),isNaN(d))return i;switch(l){case"grow":i.size=i.size+d;break;case"shrink":i.size=i.size-d;break;case"left":i.x=i.x-d;break;case"right":i.x=i.x+d;break;case"up":i.y=i.y-d;break;case"down":i.y=i.y+d;break;case"rotate":i.rotate=i.rotate+d;break}return i},a)},hu={mixout:function(){return{parse:{transform:function(a){return Sa(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,i){var s=i.getAttribute("data-fa-transform");return s&&(a.transform=Sa(s)),a}}},provides:function(r){r.generateAbstractTransformGrouping=function(a){var i=a.main,s=a.transform,u=a.containerWidth,l=a.iconWidth,d={transform:"translate(".concat(u/2," 256)")},m="translate(".concat(s.x*32,", ").concat(s.y*32,") "),f="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),h="rotate(".concat(s.rotate," 0 0)"),b={transform:"".concat(m," ").concat(f," ").concat(h)},w={transform:"translate(".concat(l/2*-1," -256)")},k={outer:d,inner:b,path:w};return{tag:"g",attributes:x({},k.outer),children:[{tag:"g",attributes:x({},k.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:x(x({},i.icon.attributes),k.path)}]}]}}}},An={x:0,y:0,width:"100%",height:"100%"};function Pa(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||r)&&(t.attributes.fill="black"),t}function bu(t){return t.tag==="g"?t.children:[t]}var vu={hooks:function(){return{parseNodeAttributes:function(a,i){var s=i.getAttribute("data-fa-mask"),u=s?on(s.split(" ").map(function(l){return l.trim()})):ar();return u.prefix||(u.prefix=Ie()),a.mask=u,a.maskId=i.getAttribute("data-fa-mask-id"),a}}},provides:function(r){r.generateAbstractMask=function(a){var i=a.children,s=a.attributes,u=a.main,l=a.mask,d=a.maskId,m=a.transform,f=u.width,h=u.icon,b=l.width,w=l.icon,k=hc({transform:m,containerWidth:b,iconWidth:f}),O={tag:"rect",attributes:x(x({},An),{},{fill:"white"})},B=h.children?{children:h.children.map(Pa)}:{},I={tag:"g",attributes:x({},k.inner),children:[Pa(x({tag:h.tag,attributes:x(x({},h.attributes),k.path)},B))]},H={tag:"g",attributes:x({},k.outer),children:[I]},$="mask-".concat(d||kt()),D="clip-".concat(d||kt()),z={tag:"mask",attributes:x(x({},An),{},{id:$,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[O,H]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:D},children:bu(w)},z]};return i.push(F,{tag:"rect",attributes:x({fill:"currentColor","clip-path":"url(#".concat(D,")"),mask:"url(#".concat($,")")},An)}),{children:i,attributes:s}}}},yu={provides:function(r){var a=!1;je.matchMedia&&(a=je.matchMedia("(prefers-reduced-motion: reduce)").matches),r.missingIconAbstract=function(){var i=[],s={fill:"currentColor"},u={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:x(x({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var l=x(x({},u),{},{attributeName:"opacity"}),d={tag:"circle",attributes:x(x({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||d.children.push({tag:"animate",attributes:x(x({},u),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:x(x({},l),{},{values:"1;0;1;1;0;1;"})}),i.push(d),i.push({tag:"path",attributes:x(x({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:x(x({},l),{},{values:"1;0;0;0;0;1;"})}]}),a||i.push({tag:"path",attributes:x(x({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:x(x({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},wu={hooks:function(){return{parseNodeAttributes:function(a,i){var s=i.getAttribute("data-fa-symbol"),u=s===null?!1:s===""?!0:s;return a.symbol=u,a}}}},xu=[yc,ou,su,lu,cu,pu,gu,hu,vu,yu,wu];Nc(xu,{mixoutsTo:fe});fe.noAuto;fe.config;fe.library;fe.dom;var Un=fe.parse;fe.findIconDefinition;fe.toHtml;var ku=fe.icon;fe.layer;fe.text;fe.counter;function Aa(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);r&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),a.push.apply(a,i)}return a}function _e(t){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?Aa(Object(a),!0).forEach(function(i){Qe(t,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Aa(Object(a)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(a,i))})}return t}function en(t){"@babel/helpers - typeof";return en=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},en(t)}function Qe(t,r,a){return r in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t}function Cu(t,r){if(t==null)return{};var a={},i=Object.keys(t),s,u;for(u=0;u<i.length;u++)s=i[u],!(r.indexOf(s)>=0)&&(a[s]=t[s]);return a}function Ou(t,r){if(t==null)return{};var a=Cu(t,r),i,s;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(s=0;s<u.length;s++)i=u[s],!(r.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}function Wn(t){return Eu(t)||Su(t)||Pu(t)||Au()}function Eu(t){if(Array.isArray(t))return Yn(t)}function Su(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Pu(t,r){if(t){if(typeof t=="string")return Yn(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Yn(t,r)}}function Yn(t,r){(r==null||r>t.length)&&(r=t.length);for(var a=0,i=new Array(r);a<r;a++)i[a]=t[a];return i}function Au(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _u(t){var r,a=t.beat,i=t.fade,s=t.beatFade,u=t.bounce,l=t.shake,d=t.flash,m=t.spin,f=t.spinPulse,h=t.spinReverse,b=t.pulse,w=t.fixedWidth,k=t.inverse,O=t.border,B=t.listItem,I=t.flip,H=t.size,$=t.rotation,D=t.pull,z=(r={"fa-beat":a,"fa-fade":i,"fa-beat-fade":s,"fa-bounce":u,"fa-shake":l,"fa-flash":d,"fa-spin":m,"fa-spin-reverse":h,"fa-spin-pulse":f,"fa-pulse":b,"fa-fw":w,"fa-inverse":k,"fa-border":O,"fa-li":B,"fa-flip":I===!0,"fa-flip-horizontal":I==="horizontal"||I==="both","fa-flip-vertical":I==="vertical"||I==="both"},Qe(r,"fa-".concat(H),typeof H<"u"&&H!==null),Qe(r,"fa-rotate-".concat($),typeof $<"u"&&$!==null&&$!==0),Qe(r,"fa-pull-".concat(D),typeof D<"u"&&D!==null),Qe(r,"fa-swap-opacity",t.swapOpacity),r);return Object.keys(z).map(function(F){return z[F]?F:null}).filter(function(F){return F})}function ju(t){return t=t-0,t===t}function pi(t){return ju(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(r,a){return a?a.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Iu=["style"];function Tu(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Lu(t){return t.split(";").map(function(r){return r.trim()}).filter(function(r){return r}).reduce(function(r,a){var i=a.indexOf(":"),s=pi(a.slice(0,i)),u=a.slice(i+1).trim();return s.startsWith("webkit")?r[Tu(s)]=u:r[s]=u,r},{})}function gi(t,r){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof r=="string")return r;var i=(r.children||[]).map(function(m){return gi(t,m)}),s=Object.keys(r.attributes||{}).reduce(function(m,f){var h=r.attributes[f];switch(f){case"class":m.attrs.className=h,delete r.attributes.class;break;case"style":m.attrs.style=Lu(h);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?m.attrs[f.toLowerCase()]=h:m.attrs[pi(f)]=h}return m},{attrs:{}}),u=a.style,l=u===void 0?{}:u,d=Ou(a,Iu);return s.attrs.style=_e(_e({},s.attrs.style),l),t.apply(void 0,[r.tag,_e(_e({},s.attrs),d)].concat(Wn(i)))}var hi=!1;try{hi=!0}catch{}function Nu(){if(!hi&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function _a(t){if(t&&en(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Un.icon)return Un.icon(t);if(t===null)return null;if(t&&en(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function _n(t,r){return Array.isArray(r)&&r.length>0||!Array.isArray(r)&&r?Qe({},t,r):{}}var ln=Ta.forwardRef(function(t,r){var a=t.icon,i=t.mask,s=t.symbol,u=t.className,l=t.title,d=t.titleId,m=t.maskId,f=_a(a),h=_n("classes",[].concat(Wn(_u(t)),Wn(u.split(" ")))),b=_n("transform",typeof t.transform=="string"?Un.transform(t.transform):t.transform),w=_n("mask",_a(i)),k=ku(f,_e(_e(_e(_e({},h),b),w),{},{symbol:s,title:l,titleId:d,maskId:m}));if(!k)return Nu("Could not find icon",f),null;var O=k.abstract,B={ref:r};return Object.keys(t).forEach(function(I){ln.defaultProps.hasOwnProperty(I)||(B[I]=t[I])}),Mu(O[0],B)});ln.displayName="FontAwesomeIcon";ln.propTypes={beat:L.bool,border:L.bool,beatFade:L.bool,bounce:L.bool,className:L.string,fade:L.bool,flash:L.bool,mask:L.oneOfType([L.object,L.array,L.string]),maskId:L.string,fixedWidth:L.bool,inverse:L.bool,flip:L.oneOf([!0,!1,"horizontal","vertical","both"]),icon:L.oneOfType([L.object,L.array,L.string]),listItem:L.bool,pull:L.oneOf(["right","left"]),pulse:L.bool,rotation:L.oneOf([0,90,180,270]),shake:L.bool,size:L.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:L.bool,spinPulse:L.bool,spinReverse:L.bool,symbol:L.oneOfType([L.bool,L.string]),title:L.string,titleId:L.string,transform:L.oneOfType([L.string,L.object]),swapOpacity:L.bool};ln.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Mu=gi.bind(null,Ta.createElement),Bu={exports:{}};(function(t,r){(function(a,i,s,u,l){if("customElements"in s)l();else{if(s.AWAITING_WEB_COMPONENTS_POLYFILL)return void s.AWAITING_WEB_COMPONENTS_POLYFILL.then(l);var d=s.AWAITING_WEB_COMPONENTS_POLYFILL=h();d.then(l);var m=s.WEB_COMPONENTS_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",f=s.ES6_CORE_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";"Promise"in s?b(m).then(function(){d.isDone=!0,d.exec()}):b(f).then(function(){b(m).then(function(){d.isDone=!0,d.exec()})})}function h(){var w=[];return w.isDone=!1,w.exec=function(){w.splice(0).forEach(function(k){k()})},w.then=function(k){return w.isDone?k():w.push(k),w},w}function b(w){var k=h(),O=u.createElement("script");return O.type="text/javascript",O.readyState?O.onreadystatechange=function(){O.readyState!="loaded"&&O.readyState!="complete"||(O.onreadystatechange=null,k.isDone=!0,k.exec())}:O.onload=function(){k.isDone=!0,k.exec()},O.src=w,u.getElementsByTagName("head")[0].appendChild(O),O.then=k.then,O}})(0,0,window,document,function(){var a;a=function(){return function(i){var s={};function u(l){if(s[l])return s[l].exports;var d=s[l]={i:l,l:!1,exports:{}};return i[l].call(d.exports,d,d.exports,u),d.l=!0,d.exports}return u.m=i,u.c=s,u.d=function(l,d,m){u.o(l,d)||Object.defineProperty(l,d,{enumerable:!0,get:m})},u.r=function(l){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},u.t=function(l,d){if(1&d&&(l=u(l)),8&d||4&d&&typeof l=="object"&&l&&l.__esModule)return l;var m=Object.create(null);if(u.r(m),Object.defineProperty(m,"default",{enumerable:!0,value:l}),2&d&&typeof l!="string")for(var f in l)u.d(m,f,function(h){return l[h]}.bind(null,f));return m},u.n=function(l){var d=l&&l.__esModule?function(){return l.default}:function(){return l};return u.d(d,"a",d),d},u.o=function(l,d){return Object.prototype.hasOwnProperty.call(l,d)},u.p="",u(u.s=5)}([function(i,s){i.exports=function(u){var l=[];return l.toString=function(){return this.map(function(d){var m=function(f,h){var b,w=f[1]||"",k=f[3];if(!k)return w;if(h&&typeof btoa=="function"){var O=(b=k,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(b))))+" */"),B=k.sources.map(function(I){return"/*# sourceURL="+k.sourceRoot+I+" */"});return[w].concat(B).concat([O]).join(`
`)}return[w].join(`
`)}(d,u);return d[2]?"@media "+d[2]+"{"+m+"}":m}).join("")},l.i=function(d,m){typeof d=="string"&&(d=[[null,d,""]]);for(var f={},h=0;h<this.length;h++){var b=this[h][0];typeof b=="number"&&(f[b]=!0)}for(h=0;h<d.length;h++){var w=d[h];typeof w[0]=="number"&&f[w[0]]||(m&&!w[2]?w[2]=m:m&&(w[2]="("+w[2]+") and ("+m+")"),l.push(w))}},l}},function(i,s,u){var l=u(3);i.exports=typeof l=="string"?l:l.toString()},function(i,s,u){var l=u(4);i.exports=typeof l=="string"?l:l.toString()},function(i,s,u){(i.exports=u(0)(!1)).push([i.i,"@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}",""])},function(i,s,u){(i.exports=u(0)(!1)).push([i.i,'.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}',""])},function(i,s,u){u.r(s),u.d(s,"BoxIconElement",function(){return F});var l,d,m,f,h=u(1),b=u.n(h),w=u(2),k=u.n(w),O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},B=function(){function T(A,_){for(var E=0;E<_.length;E++){var y=_[E];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(A,y.key,y)}}return function(A,_,E){return _&&T(A.prototype,_),E&&T(A,E),A}}(),I=(d=(l=Object).getPrototypeOf||function(T){return T.__proto__},m=l.setPrototypeOf||function(T,A){return T.__proto__=A,T},f=(typeof Reflect>"u"?"undefined":O(Reflect))==="object"?Reflect.construct:function(T,A,_){var E,y=[null];return y.push.apply(y,A),E=T.bind.apply(T,y),m(new E,_.prototype)},function(T){var A=d(T);return m(T,m(function(){return f(A,arguments,d(this).constructor)},A))}),H=window,$={},D=document.createElement("template"),z=function(){return!!H.ShadyCSS};D.innerHTML=`
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
<div id="icon"></div>`;var F=I(function(T){function A(){(function(E,y){if(!(E instanceof y))throw new TypeError("Cannot call a class as a function")})(this,A);var _=function(E,y){if(!E)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!y||typeof y!="object"&&typeof y!="function"?E:y}(this,(A.__proto__||Object.getPrototypeOf(A)).call(this));return _.$ui=_.attachShadow({mode:"open"}),_.$ui.appendChild(_.ownerDocument.importNode(D.content,!0)),z()&&H.ShadyCSS.styleElement(_),_._state={$iconHolder:_.$ui.getElementById("icon"),type:_.getAttribute("type")},_}return function(_,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof E);_.prototype=Object.create(E&&E.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),E&&(Object.setPrototypeOf?Object.setPrototypeOf(_,E):_.__proto__=E)}(A,HTMLElement),B(A,null,[{key:"getIconSvg",value:function(_,E){var y=this.cdnUrl+"/regular/bx-"+_+".svg";return E==="solid"?y=this.cdnUrl+"/solid/bxs-"+_+".svg":E==="logo"&&(y=this.cdnUrl+"/logos/bxl-"+_+".svg"),y&&$[y]||($[y]=new Promise(function(K,ae){var ie=new XMLHttpRequest;ie.addEventListener("load",function(){this.status<200||this.status>=300?ae(new Error(this.status+" "+this.responseText)):K(this.responseText)}),ie.onerror=ae,ie.onabort=ae,ie.open("GET",y),ie.send()})),$[y]}},{key:"define",value:function(_){_=_||this.tagName,z()&&H.ShadyCSS.prepareTemplate(D,_),customElements.define(_,this)}},{key:"cdnUrl",get:function(){return"//unpkg.com/boxicons@2.1.4/svg"}},{key:"tagName",get:function(){return"box-icon"}},{key:"observedAttributes",get:function(){return["type","name","color","size","rotate","flip","animation","border","pull"]}}]),B(A,[{key:"attributeChangedCallback",value:function(_,E,y){var K=this._state.$iconHolder;switch(_){case"type":(function(ae,ie,V){var M=ae._state;M.$iconHolder.textContent="",M.type&&(M.type=null),M.type=!V||V!=="solid"&&V!=="logo"?"regular":V,M.currentName!==void 0&&ae.constructor.getIconSvg(M.currentName,M.type).then(function(se){M.type===V&&(M.$iconHolder.innerHTML=se)}).catch(function(se){console.error("Failed to load icon: "+M.currentName+`
`+se)})})(this,0,y);break;case"name":(function(ae,ie,V){var M=ae._state;M.currentName=V,M.$iconHolder.textContent="",V&&M.type!==void 0&&ae.constructor.getIconSvg(V,M.type).then(function(se){M.currentName===V&&(M.$iconHolder.innerHTML=se)}).catch(function(se){console.error("Failed to load icon: "+V+`
`+se)})})(this,0,y);break;case"color":K.style.fill=y||"";break;case"size":(function(ae,ie,V){var M=ae._state;M.size&&(M.$iconHolder.style.width=M.$iconHolder.style.height="",M.size=M.sizeType=null),V&&!/^(xs|sm|md|lg)$/.test(M.size)&&(M.size=V.trim(),M.$iconHolder.style.width=M.$iconHolder.style.height=M.size)})(this,0,y);break;case"rotate":E&&K.classList.remove("bx-rotate-"+E),y&&K.classList.add("bx-rotate-"+y);break;case"flip":E&&K.classList.remove("bx-flip-"+E),y&&K.classList.add("bx-flip-"+y);break;case"animation":E&&K.classList.remove("bx-"+E),y&&K.classList.add("bx-"+y)}}},{key:"connectedCallback",value:function(){z()&&H.ShadyCSS.styleElement(this)}}]),A}());s.default=F,F.define()}])},t.exports=a()})})(Bu);const re=Vn.bind(ul),$u=[{icon:"apps",title:"Tất cả môn học",subItem:[]},{icon:"business_center",title:"Việc kinh doanh",subItem:[]},{icon:"public",title:"Nhân văn",subItem:[]},{icon:"calculate",title:"Toán học",subItem:[]},{icon:"terminal",title:"Lập trình",subItem:["Lập trình C/C++","Lập trình Python","Lập trình Java","Lập trình JavaScript"]},{icon:"science",title:"Khoa học",subItem:[]},{icon:"create",title:"Viết",subItem:[]}],Du=({data:t})=>p.jsxs("li",{className:re("sub-menu"),children:[p.jsx(Be,{to:"/Documents",children:p.jsxs("div",{className:"d-flex align-items-center pb-2",children:[t.icon?p.jsx("span",{className:"material-icons",style:{color:"#1ab9f4"},children:t.icon}):null,p.jsx("span",{style:{color:"black",fontWeight:"550"},className:"ms-1",children:t.title}),t.subItem?p.jsx("span",{className:"material-icons",children:"arrow_drop_down"}):null]})}),p.jsx("ul",{className:"bg-white",children:t.subItem.map((r,a)=>p.jsx("li",{className:"py-2 ps-4 pe-3",children:r},a))})]}),ja=({show:t,children:r})=>p.jsx("div",{className:re("modal-wrapper",{show:t}),children:r}),Fu=()=>{const[t,r]=N.useState(!1),[a,i]=N.useState([]),[s,u]=N.useState(null),[l,d]=N.useState([]);N.useState([]);const[m,f]=N.useState([]);N.useState("");const[h,b]=N.useState(!1),[w,k]=N.useState(!1),[O,B]=N.useState(""),[I,H]=N.useState(""),[$,D]=N.useState(""),[z,F]=N.useState(""),[T,A]=N.useState(!1),[_,E]=N.useState(!1),[y,K]=N.useState(!1),[ae,ie]=N.useState(!1);N.useState(!1);const[V,M]=N.useState(!1),[se,ye]=N.useState(!1),[le,ge]=N.useState(!1);N.useState([]);const[he,at]=N.useState(!1),[be,Le]=N.useState(!1),it=!!s;N.useEffect(()=>{be&&(a!=null?zs.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${a.access_token}`,{headers:{Authorization:`Bearer ${t.access_token}`,Accept:"application/json"}}).then(j=>{f(j.data),be(!1)}).catch(j=>{}):console.log("loi dang nhap gg"))},[be]);const ze=Rs({onSuccess:j=>{i(j),Le(!0)},onError:j=>console.log("Login Failed:",j)});N.useEffect(()=>{m.length!==0&&Lt("users/loginGoogle",m,{withCredentials:!0}).then(j=>{r(!0),d({id:j.id,name:j.name,avatar:j.avatar}),b(!1),at(!1),window.location.reload()}).catch(j=>{console.log("dang nhap k thanh cong")})},[m]);const ot=()=>{kn.fire({title:"Hãy xác thực email !",html:"Cảm ơn bạn đã đăng kí. Chúng tôi đã gửi một mã xác thực qua gmail, vui lòng xác thực để có thể sử dụng dịch vụ! .",timer:6e3,timerProgressBar:!0,didOpen:()=>{kn.showLoading()},willClose:()=>{M(!1)}}).then(j=>{j.dismiss===kn.DismissReason.timer&&console.log("I was closed by the timer")})};N.useEffect(()=>{E(O!==""&&I!==""&&$!==""&&z!==""&&T)},[O,I,$,z,T]);const[cn,st]=N.useState({name:O,email:$,password:I}),[lt,He]=N.useState({username:O,password:I}),un=()=>{b(!0),k(!1)};N.useEffect(()=>{w?st({name:O,email:$,password:I}):He({username:O,password:I})},[O,$,I]);const ee=j=>{j.preventDefault(),I===z?(ye(!0),K(!1),Lt("users/register",cn,{headers:{"Content-Type":"application/json"},credentials:"include"}).then(P=>{console.log(P),P.status===200?(k(!1),M(!0),ie(!0)):P.status===404&&(console.log("bi trung user"),ye(!1),ge(!0),ie(!1))}).catch(P=>{})):K(!0)},de=j=>{j.preventDefault(),Lt("users/login",lt,{withCredentials:!0}).then(P=>{r(!0),d({id:P.id,username:P.username,avatar:P.avatar}),console.log("dang nhap thanh cong"),b(!1),at(!1),window.location.reload()}).catch(P=>{at(!0),console.log("dang nhap k thanh cong")})},St=()=>{M(!1),ge(!1),H(""),D(""),B(""),F(""),ye(!1),b(!1),k(!0)},ne=()=>{B(""),k(!1),b(!1)},ct=()=>{M(!1),ye(!1)},Pt=()=>{Lt("users/logout",l.id,{withCredentials:!0}).then(j=>{r(!1);const P="http://localhost:3000/",ce=document.createElement("a");ce.href=P,ce.click(),console.log("thanh cong ")}).catch(j=>{console.log("that bai ")})};return N.useEffect(()=>{La("current-user",{withCredentials:!0}).then(j=>{j.is_active===!0&&(console.log(j),r(!0),d({id:j.id,username:j.username,avatar:j.avatar}))})},[t]),p.jsxs(p.Fragment,{children:[V&&p.jsx(ot,{onClose:ct}),p.jsx(ja,{show:h,children:p.jsxs("div",{className:re("modal-inner"),children:[p.jsx("h2",{children:"Đăng nhập bằng "}),he&&p.jsx("h2",{style:{fontSize:"16px",color:"red"},children:"Tài khoản hoặc mật khẩu sai !"}),p.jsx("span",{className:re("cancel","material-icons"),onClick:ne,children:"cancel"}),p.jsx("div",{className:"d-flex g-2 justify-content-center",children:p.jsx("div",{id:"signInGoogle",children:p.jsx(p.Fragment,{children:p.jsx(Ul,{type:"dark",label:"Đăng nhập với Google ",size:"small",onClick:()=>ze()})})})}),p.jsx("p",{className:"mt-3",children:"hoặc"}),p.jsxs("form",{onSubmit:de,children:[p.jsxs("div",{className:"mb-3 text-start",children:[p.jsx("label",{htmlFor:"login-email",className:"form-label",children:"Tên người dùng hoặc email"}),p.jsx("input",{onChange:j=>B(j.target.value),type:"text",className:"form-control",id:"login-email",placeholder:"Tên tài khoản..."})]}),p.jsxs("div",{className:"text-start",children:[p.jsx("label",{htmlFor:"login-password",className:"form-label",children:"Mật khẩu"}),p.jsx("input",{onChange:j=>H(j.target.value),type:"password",className:"form-control",id:"login-password",placeholder:"Mật khẩu..."})]}),p.jsxs("div",{className:"d-flex justify-content-between mt-3",children:[p.jsxs("div",{children:[p.jsx("input",{type:"checkbox",id:"login-remember",name:"login-remember"}),p.jsx("label",{htmlFor:"login-remember",children:"Ghi nhớ tôi"})]}),p.jsx(Be,{to:"/",children:"Quên mật khẩu"})]}),p.jsx(Bt,{className:"w-100 mt-3",children:"ĐĂNG NHẬP"})]}),p.jsxs("p",{className:"text-center mt-3",children:["Đây là lần đầu tiên của bạn? ",p.jsx("b",{style:{cursor:"pointer"},onClick:St,children:"Đăng ký ngay"})]})]})}),p.jsx(ja,{show:w,children:p.jsxs("div",{className:re("modal-inner"),style:{height:"550px"},children:[p.jsx("h2",{children:"Đăng ký"}),y&&p.jsx("h2",{style:{fontSize:"18px",color:"red",fontWeight:"600"},children:"Xác nhận mật khẩu không đúng !!"}),p.jsx("span",{className:re("cancel","material-icons"),onClick:ne,children:"cancel"}),le&&p.jsxs("h2",{style:{fontSize:"18px",color:"red",fontWeight:"600"},children:["Tên người dùng hoặc email đã được sử dụng"," "]}),p.jsxs("form",{onSubmit:ee,children:[p.jsxs("div",{className:"mb-3 text-start",children:[p.jsx("label",{htmlFor:"register-username",className:"form-label",children:"Tên người dùng của bạn"}),p.jsx("input",{value:O,type:"text",onChange:j=>B(j.target.value),className:"form-control",id:"register-username",placeholder:"username"})]}),p.jsxs("div",{className:"mb-3 text-start",children:[p.jsx("label",{htmlFor:"register-email",className:"form-label",children:"Email của bạn"}),p.jsx("input",{value:$,type:"email",onChange:j=>D(j.target.value),className:"form-control",id:"register-email",placeholder:"name@example.com"})]}),p.jsxs("div",{className:"text-start",children:[p.jsx("label",{htmlFor:"register-password",className:"form-label",children:"Mật khẩu"}),p.jsx("input",{value:I,onChange:j=>H(j.target.value),type:"password",className:"form-control",id:"register-password"})]}),p.jsxs("div",{className:"text-start",children:[p.jsx("label",{htmlFor:"register-confirm-password",className:"form-label",children:"Xác nhận mật khẩu"}),p.jsx("input",{value:z,onChange:j=>F(j.target.value),type:"password",className:"form-control",id:"register-confirm-password"})]}),p.jsx("div",{className:"d-flex justify-content-between mt-3",children:p.jsxs("div",{children:[p.jsxs("label",{htmlFor:"acp-policy",style:{marginRight:"10px"},children:["Bạn đã đọc và đồng ý ",p.jsx(Be,{to:"/",children:"điều khoản"})," của Ba Tô Phở"," "]}),p.jsx("input",{onChange:()=>A(!T),type:"checkbox",id:"acp-policy",name:"acp-policy"})]})}),p.jsxs(Bt,{type:"submit",className:"w-100 mt-3",disabled:!_,onClick:ee,children:[" ",p.jsxs("h1",{className:re("register"),children:["ĐĂNG KÝ"," ",se&&p.jsx("span",{className:re("loading","material-icons"),children:"refresh"})]})]})]}),p.jsxs("p",{className:"text-center mt-3",style:{paddingBottom:"20px"},children:["Bạn đã có tài khoản? ",p.jsx("b",{style:{cursor:"pointer"},onClick:un,children:"Đăng nhập"})]})]})}),p.jsxs("header",{className:re("wrapper"),children:[p.jsx("div",{className:re("logo"),children:p.jsx(Be,{to:"/",children:p.jsx("img",{src:"/src/assets/btplogo.png",alt:"Logo",className:"w-100 h-100"})})}),p.jsxs("div",{className:re("input","d-flex align-items-center"),style:{height:"40%"},children:[p.jsx("div",{className:re("search"),children:p.jsx(vl,{placeholder:"12123123"})}),p.jsx("button",{className:"btn"})]}),p.jsx("div",{className:re("actions"),children:t?p.jsxs(p.Fragment,{children:[p.jsx(Be,{to:"/upload",children:p.jsx(Bt,{className:"me-5 btn btn-warning border",children:"Tải lên"})}),p.jsx(Hs,{sx:{display:"flex",alignItems:"center",textAlign:"center"},children:p.jsx(Vs,{title:"Account settings",children:p.jsx(Gs,{size:"small",sx:{ml:2},"aria-controls":it?"account-menu":void 0,"aria-haspopup":"true","aria-expanded":it?"true":void 0,children:p.jsx(Be,{style:{color:"black"},to:`/profile/${l.id}`,children:p.jsx(qs,{sx:{width:32,height:32},children:p.jsx("img",{className:re("user_avatar"),src:l.avatar,alt:""})})})})})}),p.jsx(Bt,{onClick:Pt,children:"Logout"})]}):p.jsxs(p.Fragment,{children:[p.jsx(Zr,{variant:"contained",className:"me-2",color:"info",onClick:()=>{b(!0)},children:"Đăng nhập"}),p.jsx(Zr,{variant:"contained",color:"inherit",className:"me",onClick:St,children:"Đăng ký"})]})})]}),p.jsx("ul",{className:re("menu","d-flex justify-content-around mt-2"),children:$u.map((j,P)=>p.jsx(Du,{data:j},P))})]})},Ru=()=>p.jsxs(Us,{bgColor:"light",className:"text-center text-lg-start text-muted",children:[p.jsx("section",{className:"",style:{background:"#011b30",color:"white",paddingTop:"8px"},children:p.jsx(Ws,{className:"text-center text-md-start mt-5",children:p.jsxs(Ys,{className:"mt-3",children:[p.jsxs(Nt,{md:"3",lg:"4",xl:"3",className:"mx-auto mb-4",children:[p.jsxs("h6",{className:"text-uppercase fw-bold mb-4",children:[p.jsx(Mt,{icon:"gem",className:"me-3"}),"Ba To Pho"]}),p.jsx("p",{children:'"Kiến thức là sức mạnh", vì vậy để chúng tôi cùng phát triển sức mạnh cùng bạn qua chặng đường học tập cùng với những tài liệu'})]}),p.jsxs(Nt,{md:"2",lg:"2",xl:"2",className:"mx-auto mb-4",children:[p.jsx("h6",{className:"text-uppercase fw-bold mb-4",children:"Products"}),p.jsx("p",{children:p.jsx("a",{href:"#!",className:"text-reset",children:"Facebook"})}),p.jsx("p",{children:p.jsx("a",{href:"#!",className:"text-reset",children:"Insagram"})}),p.jsx("p",{children:p.jsx("a",{href:"#!",className:"text-reset",children:"Zalo"})}),p.jsx("p",{children:p.jsx("a",{href:"#!",className:"text-reset",children:"Twiter"})})]}),p.jsxs(Nt,{md:"3",lg:"2",xl:"2",className:"mx-auto mb-4",children:[p.jsx("h6",{className:"text-uppercase fw-bold mb-4",children:"Useful links"}),p.jsx("p",{children:p.jsx("a",{href:"#!",className:"text-reset",children:"Pricing"})}),p.jsx("p",{children:p.jsx("a",{href:"#!",className:"text-reset",children:"Settings"})}),p.jsx("p",{children:p.jsx("a",{href:"#!",className:"text-reset",children:"Orders"})}),p.jsx("p",{children:p.jsx("a",{href:"#!",className:"text-reset",children:"Help"})})]}),p.jsxs(Nt,{md:"4",lg:"3",xl:"3",className:"mx-auto mb-md-0 mb-4",children:[p.jsx("h6",{className:"text-uppercase fw-bold mb-4",children:"Liên hệ"}),p.jsxs("p",{children:[p.jsx(Mt,{icon:"home",className:"me-2"}),"TP Hồ Chí Minh, Gò Vấp, Phường 3"]}),p.jsxs("p",{children:[p.jsx(Mt,{icon:"envelope",className:"me-3"}),"codeheroes@gmail.com"]}),p.jsxs("p",{children:[p.jsx(Mt,{icon:"phone",className:"me-3"}),"0941720502"]})]})]})})}),p.jsxs("div",{className:"text-center p-4",style:{background:"#011b30",color:"white",paddingTop:"8px"},children:["© 2023 Copyright:",p.jsx("a",{className:"text-reset fw-bold",href:"https://codeheroes.com/",children:"Codeheroes.com"})]})]}),zu=({children:t})=>p.jsxs(p.Fragment,{children:[p.jsx(Fu,{}),p.jsx("div",{className:"vw-100 overflow-hidden my-4",children:t}),p.jsx(Ru,{})]}),rf=zu;export{rf as default};
