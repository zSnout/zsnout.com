import{u as n,F as r}from"./useWebGL.be263717.js";import{d as c,m as i,az as f,ad as u,c as p,a,o as m,b as e}from"./index.0a60a0c2.js";import"./Modal.bee887a3.js";const d=e("p",null,[e("strong",null,"What is this?")],-1),h=e("p",null," This is a WebGL debug page. The left side should be a yellow bar, the right a green bar, the top blue, and the bottom red. A gradient should be contained within these with a bottom-left corner of blue, a top-left of mint, a top-right of yellow, and a bottom-right of magenta. ",-1),y=c({__name:"Uniforms",setup(_){const o=i();return n(o,"in vec2 pos;out vec4 color;uniform float left;void main(){if(pos.x<left){color=vec4(1,1,0,1);}else if(pos.y<0.01){color=vec4(1,0,0,1);}else if(pos.x>0.99){color=vec4(0,1,0,1);}else if(pos.y>0.99){color=vec4(0,0,1,1);}else{color=vec4(pos.x,pos.y,0.5,1);}}").then(t=>{const s=f(10,{immediate:!0}),l=u(()=>s.value/1e3%1);t.useUniform("left","f",l)}),(t,s)=>(m(),p(r,null,{options:a(()=>[d,h]),default:a(()=>[e("canvas",{ref_key:"canvas",ref:o},null,512)]),_:1}))}});export{y as default};