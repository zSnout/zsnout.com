if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),t={module:{uri:n},exports:u,require:a};e[n]=Promise.all(r.map((s=>t[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/404.ef464a85.js",revision:null},{url:"assets/DocumentDisplay.6b7e652d.js",revision:null},{url:"assets/DocumentDisplay.9c100fd3.css",revision:null},{url:"assets/Field.55d40313.css",revision:null},{url:"assets/Field.8ca221a5.js",revision:null},{url:"assets/FractalExplorer.a91e2715.css",revision:null},{url:"assets/FractalExplorer.f3c3d906.js",revision:null},{url:"assets/Grid.1f9285b4.js",revision:null},{url:"assets/Home.4a4c5bcf.js",revision:null},{url:"assets/index.01de889a.css",revision:null},{url:"assets/index.aa34892d.js",revision:null},{url:"assets/Index.ab4ff96d.js",revision:null},{url:"assets/Mandelbrot.212ec3af.js",revision:null},{url:"assets/Modal.0789f34f.css",revision:null},{url:"assets/Modal.956ff1f8.js",revision:null},{url:"assets/SameNumberGenerator.217ce8ef.css",revision:null},{url:"assets/SameNumberGenerator.4518aff0.js",revision:null},{url:"assets/Title.4ca96167.css",revision:null},{url:"assets/Title.9a966b78.js",revision:null},{url:"assets/Uniforms.d1d6b585.js",revision:null},{url:"assets/useMovableCanvas.bec0831f.js",revision:null},{url:"assets/useWebGL.06c83f08.css",revision:null},{url:"assets/useWebGL.f972bbd1.js",revision:null},{url:"index.html",revision:"19c7179abc2d34f285f37899840cfa02"},{url:"manifest.webmanifest",revision:"c32e84594414cb6378a5516a383d25c1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
