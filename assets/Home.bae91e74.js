import{d as p,k as f,au as v,ay as u,o as g,f as S,aq as _,u as a,W as w,az as I,aA as k,a as m,n as z,c as C,w as i,b as e,e as y}from"./index.d8ac0a1f.js";import{_ as h,V as T}from"./Modal.8c5d6ac2.js";import{D as B}from"./DocumentDisplay.0caed15d.js";import{I as t}from"./ImageCard.fd4219fd.js";import{T as L,S as D}from"./Title.f2eaa79a.js";import"./Field.8a8ca874.js";const E=["src"],V=p({__name:"BlurredImage",props:{src:null},setup(n){const r=f(!1),s=Math.random(),l=Math.random(),c=v(()=>u.value<400?"(2.5em + 1px + 1.5em)":"(3.5em + 1px + 2em)"),d=v(()=>u.value<400?"1.5em":"2em");return(b,o)=>(g(),S("img",{class:"image",src:n.src,style:_({display:r.value?void 0:"none",top:`calc(${a(c)} + (var(--app-height) - ${a(c)} - 2em - 320px) * ${a(l)})`,left:`calc(${a(d)} + (var(--app-width) - 2 * ${a(d)} - 320px) * ${a(s)})`}),onLoad:o[0]||(o[0]=x=>r.value=!0)},null,44,E))}});var $=h(V,[["__scopeId","data-v-04223110"]]);const W=p({__name:"Cover",setup(n){const r=document.getElementsByClassName("nav-root");let s=f(58);r[0]&&({height:s}=w(r[0],void 0,{box:"border-box"}));const l=f(),{height:c}=w(l),{y:d}=I(window),b=v(()=>{const o=`(${k.value-s.value}px - ${u.value<400?3:4}em)`;return`min(${d.value/2}px, calc((${o} - ${c.value}px) / 2))`});return(o,x)=>(g(),S("div",{class:"cover",style:_({height:`calc(${a(k)-a(s)}px - ${a(u)<400?3:4}em)`})},[m("div",{ref_key:"content",ref:l,class:"content",style:_(`top: ${a(b)}`)},[z(o.$slots,"default",{},void 0,!0)],4)],4))}});var j=h(W,[["__scopeId","data-v-6dd36fe0"]]);const A=p({__name:"LargeTitle",setup(n){return(r,s)=>(g(),C(L,{class:"title"},{default:i(()=>[z(r.$slots,"default",{},void 0,!0)]),_:3}))}});var H=h(A,[["__scopeId","data-v-5b9ee71c"]]);const N=y("Welcome to zSnout."),P=m("p",{style:{"line-height":"2"}},[y(" zSnout is a website made by "),m("a",{href:"https://github.com/zsakowitz",target:"_blank"},"Zachary Sakowitz"),y(" to create and test various projects. This edition, zSnout 7, is a collection of many of these projects and their archived versions, such as the four versions of Storymatic. ")],-1),M=m("p",{style:{"margin-top":"-1em"}},"Scroll down and select a page!",-1),Y=p({__name:"Home",setup(n){return(r,s)=>(g(),C(B,null,{default:i(()=>[e(j,null,{default:i(()=>[e($,{src:"/images/fractal-explorer.png"}),e($,{src:"/images/art/fireline.png"}),e(T,{space:2,style:{position:"relative","z-index":"2"}},{default:i(()=>[e(H,null,{default:i(()=>[N]),_:1}),P,M]),_:1})]),_:1}),e(D,{style:{position:"relative","z-index":"2"}},{default:i(()=>[e(t,{description:"View amazing fractal images and interact with them live on your computer.",keywords:"math mandelbrot set",src:"/images/fractal-explorer.png",title:"Fractal Explorer",to:"/fractal-explorer"}),e(t,{description:"See a carefully curated collection of various interactive fractals.",keywords:"math",src:"/images/fractal-presets/index.png",title:"Fractal Presets",to:"/fractal-presets"}),e(t,{description:"Experiment with 4 versions of a programming language designed by zSnout.",keywords:"programming languages custom",src:"/images/storymatic/index.png",title:"Storymatic",to:"/storymatic/"}),e(t,{description:"See a collection of simple yet beautiful examples of abstract art.",keywords:"gradients squares rectangles circles ellipses",src:"/images/art/index.png",title:"Art",to:"/art/"}),e(t,{description:"A leap of leopards (look it up) appear and fill your device's screen.",keywords:"images",src:"/images/leopards.png",title:"Leopards",to:"/leopards"}),e(t,{description:"Draw on a rotating tabletop using our simple drawing interface.",keywords:"spinner drawings",src:"/images/drawing/turntable.png",title:"Turntable",to:"/drawing/turntable"}),e(t,{description:"Draw on a table that moves beneath your finger as you create.",keywords:"moving drawings",src:"/images/drawing/slider.png",title:"Slider",to:"/drawing/slider"}),e(t,{description:"Watch this real-time animation of bouncing and merging circles. It's great as a screensaver.",keywords:"bouncing screensavers",src:"/images/metaballs.png",title:"Metaballs",to:"/metaballs"}),e(t,{description:"Watch this real-time animation of bouncing and merging circles. It's great as a screensaver.",keywords:"bouncing screensavers",src:"/images/reaction-time-tester.png",title:"Reaction Time Tester",to:"/reaction-time-tester"}),e(t,{description:"Run your lambda calculus functions in our interactive editor.",keywords:"programming languages",src:"/images/lambda-calculus/evaluator.png",title:"Lambda Calculus Evaluator",to:"/lambda-calculus/evaluator"}),e(t,{description:"Convert your lambda calculus functions into valid and runnable JavaScript code.",keywords:"programming languages javascript",src:"/images/lambda-calculus/compiler.png",title:"Lambda Calculus Compiler",to:"/lambda-calculus/compiler"}),e(t,{description:"It's like a random number generator, but it generates the same number every time.",keywords:"random numbers passkey password",src:"/images/same-number-generator.png",title:"Same Number Generator",to:"/same-number-generator"}),e(t,{description:"We're not sure why you'd go to the 404 page, but here's a link if you need it.",keywords:"not found error page",src:"/images/404.png",title:"404 page",to:"/404"}),e(t,{description:"A collection of pages used to debug and test interfaces such as the canvas APIs.",keywords:"webgl canvas",src:"/images/debug/index.png",title:"Debug Pages",to:"/debug/"})]),_:1})]),_:1}))}});export{Y as default};
