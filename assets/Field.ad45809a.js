import{d as s,m as p,E as m,at as r,au as i,o as _,h as f}from"./index.cab265f4.js";import{_ as v}from"./Modal.a559877d.js";const y=["autocomplete","placeholder","type"],h=s({name:"Field",props:{modelValue:null,type:null,autocomplete:null,placeholder:null},emits:["update:modelValue"],setup(e,{emit:d}){const{modelValue:n}=e,l=p(n);return m(l,t=>d("update:modelValue",t)),(t,a)=>{var o,u;return r((_(),f("input",{"onUpdate:modelValue":a[0]||(a[0]=c=>l.value=c),class:"second-layer field focusline",autocomplete:(o=e.autocomplete)!=null?o:"off",placeholder:e.placeholder,type:(u=e.type)!=null?u:"text"},null,8,y)),[[i,l.value]])}}});var F=v(h,[["__scopeId","data-v-d2718e86"]]);export{F};
