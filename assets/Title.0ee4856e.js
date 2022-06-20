import{d as y,u as b,o as c,c as C,w as k,m as _,R as $,f,a as p,t as v,j as h,q as M,ap as L,aw as S,ax as A,am as G,A as O,b as x,F as R}from"./index.74c1b387.js";import{_ as g,t as T}from"./Modal.0061d2a1.js";import{F as V}from"./Field.e4767848.js";const B=["href"],E=y({__name:"Link",props:{to:null},setup(e){const{to:o}=e,s=/^\/(?!\/)|\.\.?\//.test(o);return(r,i)=>b(s)?(c(),C(b($),{key:0,to:e.to},{default:k(()=>[_(r.$slots,"default")]),_:3},8,["to"])):(c(),f("a",{key:1,href:e.to},[_(r.$slots,"default")],8,B))}});const F={class:"title text-color"},z={class:"description"},I=["data-keywords"],D={class:"title"},N={class:"description"},U=y({__name:"Card",props:{title:null,description:null,keywords:null,to:null},setup(e){return(o,s)=>e.to?(c(),C(E,{key:0,class:"card second-layer hoverline focusline","data-keywords":e.keywords,to:e.to},{default:k(()=>[p("p",F,v(e.title),1),p("p",z,v(e.description),1)]),_:1},8,["data-keywords","to"])):(c(),f("div",{key:1,class:"card second-layer hoverline focusline","data-keywords":e.keywords},[p("p",D,v(e.title),1),p("p",N,v(e.description),1)],8,I))}});var te=g(U,[["__scopeId","data-v-2dcfe064"]]);const j=y({__name:"CardGrid",setup(e){const o=h(4),s=h();return M(s,()=>{if(s.value){const r=getComputedStyle(s.value);o.value=r.gridTemplateColumns.split(" ").length}}),L(s,"keydown",r=>{var a,n,l,u;const i=r.composedPath(),m=i[i.indexOf(s.value)-1];if(!m)return;const d=T(document.documentElement),t=d.indexOf(m);if(t!==-1)switch(r.key){case"ArrowRight":(a=d[t+1])==null||a.focus();break;case"ArrowLeft":(n=d[t-1])==null||n.focus();break;case"ArrowDown":(l=d[Math.min(t+o.value,d.length-1)])==null||l.focus();break;case"ArrowUp":(u=d[Math.max(t-o.value,0)])==null||u.focus();break}}),(r,i)=>(c(),f("div",{ref_key:"grid",ref:s,class:"grid"},[_(r.$slots,"default",{},void 0,!0)],512))}});var P=g(j,[["__scopeId","data-v-28b6b16d"]]);const q="_hidden_1hstl_1";var H={hidden:q};const J=y({__name:"SearchableCardGrid",setup(e){const o=h(""),s=h(),r=S();function i(t){var l,u,w;const a=(u=(l=t.children[0])==null?void 0:l.textContent)!=null?u:t.textContent,n=(w=t.dataset)==null?void 0:w.keywords;return`${a} ${n}`.toLowerCase()}function m(t,a){if(a.length===1&&!a[0])return!0;const n=i(t);return a.every(l=>n.includes(l))}function d(){var n;const t=o.value.trim().split(/\s+/g),a=(n=s.value)==null?void 0:n.$el;if(!!a)for(let l of a.children)l.classList.toggle(r.hidden,!m(l,t))}return A(s,d,{subtree:!0,childList:!0}),G(d),O(d),(t,a)=>(c(),f(R,null,[x(V,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=n=>o.value=n),placeholder:"Type to search zSnout..."},null,8,["modelValue"]),x(P,{ref_key:"grid",ref:s},{default:k(()=>[_(t.$slots,"default")]),_:3},512)],64))}}),K={$style:H};var ae=g(J,[["__cssModules",K]]);const Q={},W={class:"title"};function X(e,o){return c(),f("h1",W,[_(e.$slots,"default",{},void 0,!0)])}var se=g(Q,[["render",X],["__scopeId","data-v-1aa59745"]]);export{te as C,ae as S,se as T};