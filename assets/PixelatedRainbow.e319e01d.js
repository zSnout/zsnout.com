import{d as _,k as h,ay as x,c as y,w as f,o as z,b as M,a as u}from"./index.1fcc11b4.js";import{F as R}from"./FullscreenDisplay.464193ba.js";import{H as b}from"./BookmarkIcon.057fb9dd.js";import{u as w}from"./useCanvas.289a0421.js";import{s as S}from"./useOption.f2c4deab.js";const g=u("span",null,"/",-1),P=_({__name:"PixelatedRainbow",setup(B){const v=h(),e=h(),s=x(10,3,1e3);S("size",s);const k=["#ff0000","#ff9000","#d0d000","#00c000","#0000ff","#9000f0"];return w(v,{useDevicePixelRatio:!1}).then(p=>{const{canvas:a,onResize:l,size:t}=p,{width:r,height:c}=t,o=a.getContext("2d");if(!o)throw new Error("Your device doesn't support HTML5 canvases.");e.value=()=>{o.fillStyle="white",o.fillRect(0,0,r.value,c.value);for(let n=0;n<r.value;n+=s.value)for(let i=0;i<c.value;i+=s.value)if(!(1-i/c.value+Math.random()-.5>.5)){const m=Math.min(n/r.value*5,4.9999),d=Math.floor(m),C=m%1+Math.random()-.5;o.fillStyle=k[C<.5?d:d+1],o.fillRect(n,i,s.value-2,s.value-2)}},e.value(),l(e.value)}),(p,a)=>(z(),y(R,null,{indicator:f(()=>[M(b,null,{default:f(()=>[u("span",{class:"button",onClick:a[1]||(a[1]=l=>{var t;return s.value-=1,(t=e.value)==null?void 0:t.call(e)})},"Smaller"),g,u("span",{class:"button",onClick:a[2]||(a[2]=l=>{var t;return s.value+=1,(t=e.value)==null?void 0:t.call(e)})},"Larger")]),_:1})]),default:f(()=>[u("canvas",{ref_key:"canvas",ref:v,onClick:a[0]||(a[0]=(...l)=>e.value&&e.value(...l))},null,512)]),_:1}))}});export{P as default};
