import{d as v,u as y,o as u,c as b,w as x,n as _,R as w,f as p,k as m,s as C,j as $,aw as M,ax as S,an as L,B as G,b as k}from"./index.d8ac0a1f.js";import{_ as h,t as O}from"./Modal.8c5d6ac2.js";import{F as R}from"./Field.8a8ca874.js";const T=["href"],q=v({__name:"Link",props:{to:null},setup(l){const{to:o}=l,a=/^\/(?!\/)|\.\.?\//.test(o);return(s,i)=>y(a)?(u(),b(y(w),{key:0,to:l.to},{default:x(()=>[_(s.$slots,"default")]),_:3},8,["to"])):(u(),p("a",{key:1,href:l.to,target:"_blank"},[_(s.$slots,"default")],8,T))}});const A=v({__name:"CardGrid",setup(l){const o=m(4),a=m();return C(a,()=>{if(a.value){const s=getComputedStyle(a.value);o.value=s.gridTemplateColumns.split(" ").length}}),$(a,"keydown",s=>{var t,r,n,c;const i=s.composedPath(),f=i[i.indexOf(a.value)-1];if(!f)return;const d=O(document.documentElement),e=d.indexOf(f);if(e!==-1)switch(s.key){case"ArrowRight":(t=d[e+1])==null||t.focus();break;case"ArrowLeft":(r=d[e-1])==null||r.focus();break;case"ArrowDown":(n=d[Math.min(e+o.value,d.length-1)])==null||n.focus();break;case"ArrowUp":(c=d[Math.max(e-o.value,0)])==null||c.focus();break}}),(s,i)=>(u(),p("div",{ref_key:"grid",ref:a,class:"grid"},[_(s.$slots,"default",{},void 0,!0)],512))}});var B=h(A,[["__scopeId","data-v-28b6b16d"]]);const E="_hidden_1hstl_1";var V={hidden:E};const z=v({__name:"SearchableCardGrid",setup(l){const o=m(""),a=m(),s=M();function i(e){var n,c,g;const t=(c=(n=e.querySelector("p"))==null?void 0:n.textContent)!=null?c:e.textContent,r=(g=e.dataset)==null?void 0:g.keywords;return`${t} ${r}`.toLowerCase()}function f(e,t){if(t.length===1&&!t[0])return!0;const r=i(e);return t.every(n=>r.includes(n))}function d(){var r;const e=o.value.trim().split(/\s+/g),t=(r=a.value)==null?void 0:r.$el;if(!!t)for(let n of t.children)n.classList.toggle(s.hidden,!f(n,e))}return S(a,d,{subtree:!0,childList:!0}),L(d),G(d),(e,t)=>(u(),p("div",null,[k(R,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=r=>o.value=r),class:"field",placeholder:"Type to search zSnout...",type:"search"},null,8,["modelValue"]),k(B,{ref_key:"grid",ref:a,class:"grid"},{default:x(()=>[_(e.$slots,"default",{},void 0,!0)]),_:3},512)]))}}),I={$style:V};var H=h(z,[["__cssModules",I],["__scopeId","data-v-8486083e"]]);const F={},U={class:"title"};function j(l,o){return u(),p("h1",U,[_(l.$slots,"default",{},void 0,!0)])}var J=h(F,[["render",j],["__scopeId","data-v-00c7d846"]]);export{H as S,J as T,q as _};
