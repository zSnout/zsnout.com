import{d as h,f as x,o as c,c as b,a as _,s as m,R as M,h as p,b as v,v as k,m as g,x as S,ap as L,ar as G,as as V,w as B,B as D,e as u,F as O,g as R}from"./index.cab265f4.js";import{_ as w,t as T}from"./Modal.a559877d.js";import{D as A}from"./DocumentDisplay.de199092.js";import{F as E}from"./Field.ad45809a.js";const F=["href"],I=h({name:"Link",props:{to:null},setup(e){const{to:a}=e,s=/^\/(?!\/)|\.\.?\//.test(a);return(o,i)=>x(s)?(c(),b(x(M),{key:0,to:e.to},{default:_(()=>[m(o.$slots,"default")]),_:3},8,["to"])):(c(),p("a",{key:1,href:e.to},[m(o.$slots,"default")],8,F))}});const N={class:"title"},z={class:"description"},U=["data-keywords"],W={class:"title"},H={class:"description"},P=h({name:"Card",props:{title:null,description:null,keywords:null,to:null},setup(e){return(a,s)=>e.to?(c(),b(I,{key:0,class:"card second-layer hoverline focusline","data-keywords":e.keywords,to:e.to},{default:_(()=>[v("p",N,k(e.title),1),v("p",z,k(e.description),1)]),_:1},8,["data-keywords","to"])):(c(),p("div",{key:1,class:"card second-layer hoverline focusline","data-keywords":e.keywords},[v("p",W,k(e.title),1),v("p",H,k(e.description),1)],8,U))}});var C=w(P,[["__scopeId","data-v-3e36acad"]]);const j=h({name:"CardGrid",setup(e){const a=g(4),s=g();return S(s,()=>{if(s.value){const o=getComputedStyle(s.value);a.value=o.gridTemplateColumns.split(" ").length}}),L(s,"keydown",o=>{var r,n,l,f;const i=o.composedPath(),y=i[i.indexOf(s.value)-1];if(!y)return;const d=T(document.documentElement),t=d.indexOf(y);if(t!==-1)switch(o.key){case"ArrowRight":(r=d[t+1])==null||r.focus();break;case"ArrowLeft":(n=d[t-1])==null||n.focus();break;case"ArrowDown":(l=d[Math.min(t+a.value,d.length-1)])==null||l.focus();break;case"ArrowUp":(f=d[Math.max(t-a.value,0)])==null||f.focus();break}}),(o,i)=>(c(),p("div",{ref_key:"grid",ref:s,class:"grid"},[m(o.$slots,"default",{},void 0,!0)],512))}});var J=w(j,[["__scopeId","data-v-28b6b16d"]]);const K="_hidden_1hstl_1";var Q={hidden:K};const X=h({name:"SearchableCardGrid",setup(e){const a=g(""),s=g(),o=G();function i(t){var l,f,$;const r=(f=(l=t.children[0])==null?void 0:l.textContent)!=null?f:t.textContent,n=($=t.dataset)==null?void 0:$.keywords;return`${r} ${n}`.toLowerCase()}function y(t,r){if(r.length===1&&!r[0])return!0;const n=i(t);return r.every(l=>n.includes(l))}function d(){var n;const t=a.value.trim().split(/\s+/g),r=(n=s.value)==null?void 0:n.$el;if(!!r)for(let l of r.children)l.classList.toggle(o.hidden,!y(l,t))}return V(s,d,{subtree:!0,childList:!0}),B(d),D(d),(t,r)=>(c(),p(O,null,[u(E,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=n=>a.value=n),placeholder:"Type to search zSnout..."},null,8,["modelValue"]),u(J,{ref_key:"grid",ref:s},{default:_(()=>[m(t.$slots,"default")]),_:3},512)],64))}}),Y={$style:Q};var Z=w(X,[["__cssModules",Y]]);const q={},ee={class:"title"};function te(e,a){return c(),p("h1",ee,[m(e.$slots,"default",{},void 0,!0)])}var se=w(q,[["render",te],["__scopeId","data-v-5df92b17"]]);const re=R("Welcome to zSnout!"),le=h({name:"Home",setup(e){return(a,s)=>(c(),b(A,null,{default:_(()=>[u(se,null,{default:_(()=>[re]),_:1}),u(Z,null,{default:_(()=>[u(C,{description:"It's like a random number generator, but it generates the same number every time.",keywords:"random numbers passkey password",title:"Same Number Generator",to:"/same-number-generator"}),u(C,{description:"We're not sure why you'd go to the 404 page, but here's a link if you need it.",keywords:"not found error page",title:"404 page",to:"/404"})]),_:1})]),_:1}))}});export{le as default};
