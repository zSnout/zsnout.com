import{a as c,B as f,V as v}from"./Modal.dc2c4486.js";import{D as V}from"./DocumentDisplay.d612cd2c.js";import{F as d}from"./Field.fbcee86d.js";import{u as w}from"./useApi.9f2beb7d.js";import{d as _,k as l,c as y,w as u,o as p,a as g,b as t,f as k,t as B,m as x,e as C,aC as D,aB as I,aD as N}from"./index.70e8d914.js";const S={style:{"min-width":"min(500px, 100%)"}},b=C("Log In"),E={key:0},T=_({__name:"LogIn",setup(U){const n=l(""),r=l(""),a=l(""),m=l(!1);async function i(){m.value=!0;const s=await w({api:"account",method:"POST",body:{username:n.value,password:r.value},resultKeys:["session","username"],desc:"log users in"});s instanceof Error?a.value=s.message:(D.value=s.session,I.value=s.username,N.replace("/")),m.value=!1}return(s,e)=>(p(),y(V,{center:""},{default:u(()=>[g("form",S,[t(v,null,{default:u(()=>[t(d,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=o=>n.value=o),autocomplete:"username",maxlength:"32",placeholder:"Username...",onInput:e[1]||(e[1]=o=>a.value="")},null,8,["modelValue"]),t(d,{modelValue:r.value,"onUpdate:modelValue":e[2]||(e[2]=o=>r.value=o),autocomplete:"password",placeholder:"Password...",type:"password",onInput:e[3]||(e[3]=o=>a.value="")},null,8,["modelValue"]),t(c,{size:2}),t(f,{onClick:i},{default:u(()=>[b]),_:1}),a.value?(p(),k("p",E,"Error: "+B(a.value),1)):x("",!0)]),_:1})])]),_:1}))}});export{T as default};