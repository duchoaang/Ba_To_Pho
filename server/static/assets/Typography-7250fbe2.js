import{g as x,e as b,s as P,a as i,h as m,j as $,_ as M,k as R,l as T,f as C}from"./get-498fd3bb.js";import{r as B,j as W}from"./index-c915fb63.js";import{e as U}from"./extendSxProp-516e88d6.js";const _=o=>{let a;return o<1?a=5.11916*o**2:a=4.5*Math.log(o+1)+2,(a/100).toFixed(2)},y=_;function q(o){return x("MuiPaper",o)}b("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const A=["className","component","elevation","square","variant"],O=o=>{const{square:a,elevation:t,variant:e,classes:n}=o,r={root:["root",e,!a&&"rounded",e==="elevation"&&`elevation${t}`]};return T(r,q,n)},w=P("div",{name:"MuiPaper",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:t}=o;return[a.root,a[t.variant],!t.square&&a.rounded,t.variant==="elevation"&&a[`elevation${t.elevation}`]]}})(({theme:o,ownerState:a})=>{var t;return i({backgroundColor:(o.vars||o).palette.background.paper,color:(o.vars||o).palette.text.primary,transition:o.transitions.create("box-shadow")},!a.square&&{borderRadius:o.shape.borderRadius},a.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.divider}`},a.variant==="elevation"&&i({boxShadow:(o.vars||o).shadows[a.elevation]},!o.vars&&o.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${m("#fff",y(a.elevation))}, ${m("#fff",y(a.elevation))})`},o.vars&&{backgroundImage:(t=o.vars.overlays)==null?void 0:t[a.elevation]}))}),E=B.forwardRef(function(a,t){const e=$({props:a,name:"MuiPaper"}),{className:n,component:r="div",elevation:l=1,square:s=!1,variant:p="elevation"}=e,g=M(e,A),v=i({},e,{component:r,elevation:l,square:s,variant:p}),c=O(v);return W.jsx(w,i({as:r,ownerState:v,className:R(c.root,n),ref:t},g))}),Q=E;function I(o){return x("MuiTypography",o)}b("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const L=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],V=o=>{const{align:a,gutterBottom:t,noWrap:e,paragraph:n,variant:r,classes:l}=o,s={root:["root",r,o.align!=="inherit"&&`align${C(a)}`,t&&"gutterBottom",e&&"noWrap",n&&"paragraph"]};return T(s,I,l)},z=P("span",{name:"MuiTypography",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:t}=o;return[a.root,t.variant&&a[t.variant],t.align!=="inherit"&&a[`align${C(t.align)}`],t.noWrap&&a.noWrap,t.gutterBottom&&a.gutterBottom,t.paragraph&&a.paragraph]}})(({theme:o,ownerState:a})=>i({margin:0},a.variant&&o.typography[a.variant],a.align!=="inherit"&&{textAlign:a.align},a.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a.gutterBottom&&{marginBottom:"0.35em"},a.paragraph&&{marginBottom:16})),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},D={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},F=o=>D[o]||o,J=B.forwardRef(function(a,t){const e=$({props:a,name:"MuiTypography"}),n=F(e.color),r=U(i({},e,{color:n})),{align:l="inherit",className:s,component:p,gutterBottom:g=!1,noWrap:v=!1,paragraph:c=!1,variant:u="body1",variantMapping:d=f}=r,j=M(r,L),h=i({},r,{align:l,color:n,className:s,component:p,gutterBottom:g,noWrap:v,paragraph:c,variant:u,variantMapping:d}),k=p||(c?"p":d[u]||f[u])||"span",N=V(h);return W.jsx(z,i({as:k,ref:t,ownerState:h,className:R(N.root,s)},j))}),X=J;export{Q as P,X as T};
