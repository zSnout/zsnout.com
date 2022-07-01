import{d as v,k as d,a8 as E,au as w,ay as m,o as _,f as z,am as M,aq as k,u as a,az as $,W as B,aA as V,a as p,n as H,c as W,w as c,b as e,F as j,e as S,p as A,g as N}from"./index.4a0dc3ff.js";import{_ as b,V as P}from"./Modal.3a23d29e.js";import{D as F}from"./DocumentDisplay.4708def1.js";import{I as t}from"./ImageCard.725d0281.js";import{T as R,S as q}from"./Title.e69765de.js";import"./Field.8be6d587.js";var h=["/images/404.png","/images/fractal-explorer.png","/images/leopards.png","/images/metaballs.png","/images/reaction-time-tester.png","/images/same-number-generator.png","/images/art/blobby-gradient.png","/images/art/ellipses.png","/images/art/fireline.png","/images/art/index.png","/images/art/rectangles.png","/images/debug/index.png","/images/drawing/slider.png","/images/drawing/turntable.png","/images/fractal-presets/burning-ship.png","/images/fractal-presets/chinese-lantern.png","/images/fractal-presets/feather-fractal.png","/images/fractal-presets/flower.png","/images/fractal-presets/index.png","/images/fractal-presets/mandelbrot-set.png","/images/fractal-presets/mandelbrots-necklace.png","/images/fractal-presets/multibrot-set.png","/images/fractal-presets/puddles.png","/images/fractal-presets/raindrop.png","/images/fractal-presets/snowflake.png","/images/fractal-presets/sunlight.png","/images/fractal-presets/telescope.png","/images/lambda-calculus/compiler.png","/images/lambda-calculus/evaluator.png","/images/storymatic/index.png"];const G=["src"],Y=v({__name:"BlurredImage",props:{sensitivity:null,src:null},setup(s){const r=d(!1),n=d(Math.random()),i=d(Math.random()),{x:g,y:u}=E(),f=w(()=>m.value<400?"(2.5em + 1px + 1.5em)":"(3.5em + 1px + 2em)"),o=w(()=>m.value<400?"1.5em":"2em"),l=d(!1);function D(){l.value||(l.value=!0,setTimeout(()=>{n.value=Math.random(),i.value=Math.random(),setTimeout(()=>{l.value=!1},300)}))}return(ae,I)=>{var C,T;return _(),z("img",{class:M([{moving:l.value},"image"]),src:s.src,style:k({display:r.value?void 0:"none",top:`calc(${a(f)} + (var(--app-height) - ${a(f)} - ${a(o)} - 320px) * ${i.value} + ${a(u)-a($)/2}px / 100 * ${(C=s.sensitivity)!=null?C:1})`,left:`calc(${a(o)} + (var(--app-width) - 2 * ${a(o)} - 320px) * ${n.value} + ${a(g)-a(m)/2}px / 100 * ${(T=s.sensitivity)!=null?T:1})`}),draggable:"false",onClick:D,onLoad:I[0]||(I[0]=te=>r.value=!0)},null,46,G)}}});var y=b(Y,[["__scopeId","data-v-5f6f66b6"]]);const Z=v({__name:"Cover",setup(s){const r=document.getElementsByClassName("nav-root");let n=d(58);r[0]&&({height:n}=B(r[0],void 0,{box:"border-box"}));const i=d(),{height:g}=B(i),{y:u}=V(window),f=w(()=>{const o=`(${$.value-n.value}px - ${m.value<400?3:4}em)`;return`min(${u.value/2}px, calc((${o} - ${g.value}px) / 2))`});return(o,l)=>(_(),z("div",{class:"cover",style:k({height:`calc(${a($)-a(n)}px - ${a(m)<400?3:4}em)`})},[p("div",{ref_key:"content",ref:i,class:"content",style:k(`top: ${a(f)}`)},[H(o.$slots,"default",{},void 0,!0)],4)],4))}});var J=b(Z,[["__scopeId","data-v-6dd36fe0"]]);const O=v({__name:"LargeTitle",setup(s){return(r,n)=>(_(),W(R,{class:"title"},{default:c(()=>[H(r.$slots,"default",{},void 0,!0)]),_:3}))}});var K=b(O,[["__scopeId","data-v-5b9ee71c"]]);function x(s){return s[~~(Math.random()*s.length)]}const L=s=>(A("data-v-5cbcf47e"),s=s(),N(),s),Q=S("Welcome to zSnout."),U=L(()=>p("p",{class:"text-color",style:{"line-height":"2"}},[S(" zSnout is a website made by "),p("a",{href:"https://github.com/zsakowitz",target:"_blank",class:"link"},"Zachary Sakowitz"),S(" to create and test various projects. This edition, zSnout 7, is a collection of many of these projects and their archived versions, such as the four versions of Storymatic. You can support Zachary at "),p("a",{class:"link",href:"https://store.zsnout.com/",target:"_blank"},"the zSnout store.")],-1)),X=L(()=>p("p",{class:"text-color",style:{"margin-top":"-1em"}}," Scroll down and select a page! ",-1)),ee=v({__name:"Home",setup(s){const r=x(h),n=x(h),i=x(h);return(g,u)=>(_(),z(j,null,[e(y,{class:"hide-600",src:a(r)},null,8,["src"]),e(y,{class:"hide-800",sensitivity:2,src:a(n)},null,8,["src"]),e(y,{sensitivity:3,src:a(i)},null,8,["src"]),e(F,null,{default:c(()=>[e(J,null,{default:c(()=>[e(P,{class:"stack",space:2},{default:c(()=>[e(K,null,{default:c(()=>[Q]),_:1}),U,X]),_:1})]),_:1}),e(q,{style:{position:"relative","z-index":"2"}},{default:c(()=>[e(t,{description:"View amazing fractal images and interact with them live on your computer.",keywords:"math mandelbrot set",src:"/images/fractal-explorer.png",title:"Fractal Explorer",to:"/fractal-explorer"}),e(t,{description:"See a carefully curated collection of various interactive fractals.",keywords:"math",src:"/images/fractal-presets/index.png",title:"Fractal Presets",to:"/fractal-presets"}),e(t,{description:"Experiment with 4 versions of a programming language designed by zSnout.",keywords:"programming languages custom",src:"/images/storymatic/index.png",title:"Storymatic",to:"/storymatic/"}),e(t,{description:"See a collection of simple yet beautiful examples of abstract art.",keywords:"gradients squares rectangles circles ellipses",src:"/images/art/index.png",title:"Art",to:"/art/"}),e(t,{description:"A leap of leopards (look it up) appear and fill your device's screen.",keywords:"images",src:"/images/leopards.png",title:"Leopards",to:"/leopards"}),e(t,{description:"Draw on a rotating tabletop using our simple drawing interface.",keywords:"spinner drawings",src:"/images/drawing/turntable.png",title:"Turntable",to:"/drawing/turntable"}),e(t,{description:"Draw on a table that moves beneath your finger as you create.",keywords:"moving drawings",src:"/images/drawing/slider.png",title:"Slider",to:"/drawing/slider"}),e(t,{description:"Watch this real-time animation of bouncing and merging circles. It's great as a screensaver.",keywords:"bouncing screensavers",src:"/images/metaballs.png",title:"Metaballs",to:"/metaballs"}),e(t,{description:"Watch this real-time animation of bouncing and merging circles. It's great as a screensaver.",keywords:"bouncing screensavers",src:"/images/reaction-time-tester.png",title:"Reaction Time Tester",to:"/reaction-time-tester"}),e(t,{description:"Run your lambda calculus functions in our interactive editor.",keywords:"programming languages",src:"/images/lambda-calculus/evaluator.png",title:"Lambda Calculus Evaluator",to:"/lambda-calculus/evaluator"}),e(t,{description:"Convert your lambda calculus functions into valid and runnable JavaScript code.",keywords:"programming languages javascript",src:"/images/lambda-calculus/compiler.png",title:"Lambda Calculus Compiler",to:"/lambda-calculus/compiler"}),e(t,{description:"It's like a random number generator, but it generates the same number every time.",keywords:"random numbers passkey password",src:"/images/same-number-generator.png",title:"Same Number Generator",to:"/same-number-generator"}),e(t,{description:"We're not sure why you'd go to the 404 page, but here's a link if you need it.",keywords:"not found error page",src:"/images/404.png",title:"404 page",to:"/404"}),e(t,{description:"A collection of pages used to debug and test interfaces such as the canvas APIs.",keywords:"webgl canvas",src:"/images/debug/index.png",title:"Debug Pages",to:"/debug/"})]),_:1})]),_:1})],64))}});var ce=b(ee,[["__scopeId","data-v-5cbcf47e"]]);export{ce as default};
