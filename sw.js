if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const o=s=>l(s,n),a={module:{uri:n},exports:u,require:o};e[n]=Promise.all(r.map((s=>a[s]||o(s)))).then((s=>(i(...s),u)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/__vite-browser-external.a64aa4ad.js",revision:null},{url:"assets/404.eb12a9ed.js",revision:null},{url:"assets/AceEditor.7fc91d16.js",revision:null},{url:"assets/AceEditor.86988308.css",revision:null},{url:"assets/browser.960229ac.js",revision:null},{url:"assets/CodeEditor.96572820.js",revision:null},{url:"assets/compiler3.8ff8648d.js",revision:null},{url:"assets/Console.84b1a11f.css",revision:null},{url:"assets/Console.89676a2b.js",revision:null},{url:"assets/DocumentDisplay.667117df.js",revision:null},{url:"assets/DocumentDisplay.670ddeee.css",revision:null},{url:"assets/Editor3.a91af011.js",revision:null},{url:"assets/Field.55d40313.css",revision:null},{url:"assets/Field.965fdaab.js",revision:null},{url:"assets/FractalExplorer.058ce775.css",revision:null},{url:"assets/FractalExplorer.1d29d4dc.js",revision:null},{url:"assets/FullscreenDisplay.2f48cf9c.js",revision:null},{url:"assets/FullscreenDisplay.b0cd83ae.css",revision:null},{url:"assets/Grid.f19f05f0.js",revision:null},{url:"assets/Home.2e93f7b2.js",revision:null},{url:"assets/Index.1e6c70f6.css",revision:null},{url:"assets/index.739abbd4.js",revision:null},{url:"assets/Index.9545a52d.js",revision:null},{url:"assets/index.9863c836.js",revision:null},{url:"assets/index.afbb7d81.css",revision:null},{url:"assets/Index.b3f47dd0.js",revision:null},{url:"assets/InlineCheckboxField.1fab1d76.js",revision:null},{url:"assets/InlineCheckboxField.66760296.css",revision:null},{url:"assets/Labeled.c14a6bd7.js",revision:null},{url:"assets/Labeled.c9463233.css",revision:null},{url:"assets/Leopards.86ceeb25.css",revision:null},{url:"assets/Leopards.e2ad98fd.js",revision:null},{url:"assets/Mandelbrot.7458857d.js",revision:null},{url:"assets/Modal.4242ea3e.css",revision:null},{url:"assets/Modal.53b5115e.js",revision:null},{url:"assets/runner2.b3768e53.js",revision:null},{url:"assets/SameNumberGenerator.217ce8ef.css",revision:null},{url:"assets/SameNumberGenerator.7eebac04.js",revision:null},{url:"assets/Title.e4bdc398.js",revision:null},{url:"assets/Title.eae9c088.css",revision:null},{url:"assets/Uniforms.a5b83012.js",revision:null},{url:"assets/useLocationHash.23271a6c.js",revision:null},{url:"assets/useMovableCanvas.1e355224.js",revision:null},{url:"assets/useTypewrite.705f091f.js",revision:null},{url:"assets/useWebGL.257c64ee.js",revision:null},{url:"assets/v1-editor.b1f81646.js",revision:null},{url:"assets/v1-editor.edf98ef9.css",revision:null},{url:"assets/v2-compiler.41dc4b34.js",revision:null},{url:"assets/v2-compiler.910e76a8.css",revision:null},{url:"assets/v2-editor.cd829c0d.css",revision:null},{url:"assets/v2-editor.f5d8d741.js",revision:null},{url:"assets/v3-compiler.110f020b.css",revision:null},{url:"assets/v3-compiler.310f7fa6.js",revision:null},{url:"assets/v3-editor.c699dc25.css",revision:null},{url:"assets/v3-editor.ead7e653.js",revision:null},{url:"index.html",revision:"992a2c84db8042fa415a0f05b98df007"},{url:"manifest.webmanifest",revision:"c32e84594414cb6378a5516a383d25c1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
