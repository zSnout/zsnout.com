import{a as c,B as f,V}from"./Modal.e15c17d4.js";import{D as w}from"./DocumentDisplay.021e1f9e.js";import{F as m}from"./Field.6c0eafe2.js";import{u as y}from"./useApi.9f2beb7d.js";import{d as U,k as t,c as k,w as d,o as i,a as B,b as o,f as g,t as x,m as C,e as D,aC as S,aB as _,aD as E}from"./index.d3b89921.js";const N={style:{"min-width":"min(500px, 100%)"}},$=D("Sign Up"),b={key:0},K=U({__name:"SignUp",setup(I){const n=t(""),u=t(""),r=t(""),s=t(""),p=t(!1);async function v(){p.value=!0;const l=await y({api:"account",method:"PUT",body:{username:n.value,password:u.value,email:r.value},resultKeys:["session","username"],desc:"create accounts"});l instanceof Error?s.value=l.message:(S.value=l.session,_.value=l.username,E.replace("/")),p.value=!1}return(l,e)=>(i(),k(w,{center:""},{default:d(()=>[B("form",N,[o(V,null,{default:d(()=>[o(m,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=a=>n.value=a),autocomplete:"username",maxlength:"32",placeholder:"Username...",onInput:e[1]||(e[1]=a=>s.value="")},null,8,["modelValue"]),o(m,{modelValue:u.value,"onUpdate:modelValue":e[2]||(e[2]=a=>u.value=a),autocomplete:"password",placeholder:"Password...",type:"password",onInput:e[3]||(e[3]=a=>s.value="")},null,8,["modelValue"]),o(m,{modelValue:r.value,"onUpdate:modelValue":e[4]||(e[4]=a=>r.value=a),autocomplete:"email",placeholder:"Email Address...",type:"email",onInput:e[5]||(e[5]=a=>s.value="")},null,8,["modelValue"]),o(c,{size:2}),o(f,{onClick:v},{default:d(()=>[$]),_:1}),s.value?(i(),g("p",b,"Error: "+x(s.value),1)):C("",!0)]),_:1})])]),_:1}))}});export{K as default};
