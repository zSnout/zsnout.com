import{an as c,ao as p,W as u,ap as r}from"./index.54ddb79d.js";function l(h){const e=[];return r(()=>e.forEach(i=>i())),new Promise(i=>{e.push(c(()=>{const o=p(h);if(o instanceof HTMLCanvasElement){const{width:n,height:a}=u(o),t=[];e.push(c(()=>{o.width=n.value*devicePixelRatio,o.height=a.value*devicePixelRatio,t.forEach(s=>s())})),i({canvas:o,onDispose:s=>e.push(s),onResize:s=>t.push(s),size:{width:n,height:a},dispose(){e.forEach(s=>s()),e.splice(0,e.length)}})}}))})}export{l as u};
