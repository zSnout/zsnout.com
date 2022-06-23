var x=Object.defineProperty,D=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var S=(s,t,n)=>t in s?x(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,C=(s,t)=>{for(var n in t||(t={}))I.call(t,n)&&S(s,n,t[n]);if(w)for(var n of w(t))K.call(t,n)&&S(s,n,t[n]);return s},M=(s,t)=>D(s,F(t));import{d as v,o as r,c as _,w as p,n as B,k as m,C as L,f as d,ap as T,an as V,r as $,l as E,u as U,F as g,a as N,b,q as j,e as q,t as y,p as A,g as H}from"./index.9863c836.js";import{V as z,B as O,H as W,_ as G}from"./Modal.53b5115e.js";import{L as J,D as Q}from"./Labeled.c14a6bd7.js";import{F as R}from"./Field.965fdaab.js";const X=v({__name:"MaybeLabeled",props:{label:null},setup(s){return(t,n)=>s.label?(r(),_(J,{key:0,label:s.label},{default:p(()=>[B(t.$slots,"default")]),_:3},8,["label"])):B(t.$slots,"default",{key:1})}}),Y=v({__name:"Node",props:{node:null},setup(s){const{node:t}=s,n=m();return L(()=>{var c;(c=n.value)==null||c.replaceWith(t)}),(c,u)=>(r(),d("div",{ref_key:"el",ref:n},null,512))}});const Z=s=>(A("data-v-2f2b0038"),s=s(),H(),s),P=Z(()=>N("option",{disabled:"",value:""},"Choose an option...",-1)),ee=["value"],te={key:1,class:"log"},oe={key:2,class:"log"},le={key:3,class:"log"},se=["onSubmit"],ne=q("\u2714");function fe(){const s=M(C({},globalThis.console),{bindKey(o,e){s.focus(),f.push((a,l)=>(o===a&&(l(),e()),!0))},clear(){t.splice(0,t.length)},error(o,...e){t.push({type:"error",id:Math.random(),content:e.length?[o,...e]:o})},focus(){var o;(o=t.focus)==null||o.call(t)},key(o){return new Promise(e=>{s.focus(),f.push((a,l)=>{if(o===a){l(),e();return}return!0})})},line(){t.push({type:"line",id:Math.random()})},log(o,...e){t.push({type:"log",id:Math.random(),content:e.length?[o,...e]:o})},prompt(o,e){return n.value=o,s.focus(),new Promise(a=>{e?i.push(l=>{if(l)n.value="",a(l);else return!0}):i.push(l=>{n.value="",a(l)})})},select(o,e){const a=Math.random();return t.push({id:a,label:o,options:e,type:"select"}),setTimeout(s.focus),new Promise(l=>{u[a]=l})},user(o,...e){t.push({type:"user",id:Math.random(),content:e.length?[o,...e]:o})},warn(o,...e){t.push({type:"warn",id:Math.random(),content:e.length?[o,...e]:o})}}),t=$([]),n=m(""),c=m(""),u=Object.create(null),i=[],f=[];return{console:s,field:c,messages:t,placeholder:n,onKey(o,e){f.splice(0,f.length,...f.filter(a=>a(o,e)))},onSelect(o,e){var a;(a=u[o])==null||a.call(u,e),delete u[o]},onSubmit(o){i.splice(0,i.length,...i.filter(e=>e(o)))}}}const ae=v({__name:"Console",props:{field:null,messages:null,placeholder:null,stretch:{type:Boolean}},emits:["key","select","submit","update:field","update:messages"],setup(s,{emit:t}){const n=s;function c(){if(n.field){const e={type:"user",id:Math.random(),content:n.field};t("update:messages",n.messages.concat(e))}t("update:field",""),t("submit",n.field?n.field:void 0)}function u(e){let a=!1;t("key","Enter",()=>a=!0),a?e.preventDefault():c()}const i=m();n.messages.focus=()=>{var e,a;(a=(e=T(i))==null?void 0:e.querySelector("select:not([disabled]), input"))==null||a.focus()};const f=n.messages,o=e=>e instanceof globalThis.Node;return(e,a)=>(r(),_(z,{ref_key:"consoleEl",ref:i,class:V([{stretch:s.stretch},"console"])},{default:p(()=>[(r(!0),d(g,null,E(U(f),l=>(r(),d(g,{key:l.id},[l.type==="select"?(r(),_(X,{key:0,class:"log",label:l.label,style:{"margin-bottom":"0.25em"}},{default:p(()=>[b(Q,{class:"select",disabled:!!l.selected,"model-value":l.selected||"","onUpdate:modelValue":h=>h&&(l.selected=h)&&e.$emit("select",l.id,h)},{default:p(()=>[P,(r(!0),d(g,null,E(l.options,(h,k)=>(r(),d("option",{key:k,value:k},y(h),9,ee))),128))]),_:2},1032,["disabled","model-value","onUpdate:modelValue"])]),_:2},1032,["label"])):l.type==="line"?(r(),d("hr",te)):Array.isArray(l.content)?(r(),d("p",oe,y(l.content.join(" ")),1)):o(l.content)?(r(),d("p",le,[b(Y,{node:l.content},null,8,["node"])])):(r(),d("p",{key:4,class:V([l.type,"log"])},y(l.content),3))],64))),128)),N("form",{class:"form",style:{"margin-top":"auto"},onSubmit:j(c,["prevent"])},[b(W,{space:.75},{default:p(()=>[b(R,{ref:"fieldEl",class:"field","model-value":s.field?s.field:"",placeholder:s.placeholder,onKeydown:a[0]||(a[0]=l=>e.$emit("key",l.key,()=>l.preventDefault())),"onUpdate:modelValue":a[1]||(a[1]=l=>e.$emit("update:field",l))},null,8,["model-value","placeholder"]),b(O,{onClick:u},{default:p(()=>[ne]),_:1})]),_:1},8,["space"])],40,se)]),_:1},8,["class"]))}});var pe=G(ae,[["__scopeId","data-v-2f2b0038"]]);export{pe as C,fe as u};
