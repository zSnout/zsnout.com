if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/__vite-browser-external.2d3e1c2d.js",revision:null},{url:"assets/_commonjsHelpers.294d03c4.js",revision:null},{url:"assets/404.57edfdf3.js",revision:null},{url:"assets/AceEditor.66c1adcb.js",revision:null},{url:"assets/AceEditor.86988308.css",revision:null},{url:"assets/BlobbyGradient.7df44841.css",revision:null},{url:"assets/BlobbyGradient.bc59a104.js",revision:null},{url:"assets/browser.960229ac.js",revision:null},{url:"assets/CodeEditor.86ef25e3.js",revision:null},{url:"assets/Compiler.a1d5abb2.js",revision:null},{url:"assets/compiler3.8ff8648d.js",revision:null},{url:"assets/Console.84b1a11f.css",revision:null},{url:"assets/Console.b9b2bd0d.js",revision:null},{url:"assets/DocumentDisplay.4071d3b6.js",revision:null},{url:"assets/DocumentDisplay.670ddeee.css",revision:null},{url:"assets/Dropdown.00cd026e.js",revision:null},{url:"assets/Dropdown.297df829.css",revision:null},{url:"assets/Editor2.f5c05d72.js",revision:null},{url:"assets/Editor3.07eef5e3.js",revision:null},{url:"assets/Ellipses.9951a953.css",revision:null},{url:"assets/Ellipses.d00dda7e.js",revision:null},{url:"assets/Evaluator.e6da1fa5.js",revision:null},{url:"assets/Field.55d40313.css",revision:null},{url:"assets/Field.ceeb8f29.js",revision:null},{url:"assets/FractalExplorer.15d4149c.js",revision:null},{url:"assets/FractalExplorer.98226ded.css",revision:null},{url:"assets/FullscreenDisplay.1ae5da41.js",revision:null},{url:"assets/FullscreenDisplay.b0cd83ae.css",revision:null},{url:"assets/Grid.b435065c.js",revision:null},{url:"assets/Home.8e1bdccc.js",revision:null},{url:"assets/Index.077ce530.js",revision:null},{url:"assets/index.13caa811.js",revision:null},{url:"assets/Index.1e6c70f6.css",revision:null},{url:"assets/index.4b6afe36.css",revision:null},{url:"assets/Index.b42944e1.js",revision:null},{url:"assets/Index.c5575aaa.js",revision:null},{url:"assets/index.cb71d3db.js",revision:null},{url:"assets/InlineCheckboxField.66760296.css",revision:null},{url:"assets/InlineCheckboxField.a5eb6bd1.js",revision:null},{url:"assets/InlineRangeField.60b16e4c.css",revision:null},{url:"assets/InlineRangeField.a2ac5853.js",revision:null},{url:"assets/Labeled.556886c8.css",revision:null},{url:"assets/Labeled.fc7fc391.js",revision:null},{url:"assets/Leopards.1eb8160d.js",revision:null},{url:"assets/Leopards.86ceeb25.css",revision:null},{url:"assets/Mandelbrot.1d3002e2.js",revision:null},{url:"assets/Metaballs.11481d84.js",revision:null},{url:"assets/Modal.4242ea3e.css",revision:null},{url:"assets/Modal.dc581f91.js",revision:null},{url:"assets/mode-javascript.e6176182.js",revision:null},{url:"assets/preset.b0f23c77.js",revision:null},{url:"assets/Rectangles.7d38e2dc.css",revision:null},{url:"assets/Rectangles.b7a14000.js",revision:null},{url:"assets/SameNumberGenerator.217ce8ef.css",revision:null},{url:"assets/SameNumberGenerator.3ec9cc67.js",revision:null},{url:"assets/Slider.9821c8a0.js",revision:null},{url:"assets/Slider.da54ccf2.css",revision:null},{url:"assets/Title.4b32f8d4.js",revision:null},{url:"assets/Title.eae9c088.css",revision:null},{url:"assets/Turntable.4564a3a1.js",revision:null},{url:"assets/Turntable.92183cea.css",revision:null},{url:"assets/Uniforms.45465eec.js",revision:null},{url:"assets/useCanvas.1695319d.js",revision:null},{url:"assets/useLocationHash.69ee20ff.js",revision:null},{url:"assets/useLocationHash.76e5dc49.css",revision:null},{url:"assets/useMovableCanvas.831251a2.js",revision:null},{url:"assets/useOption.728658aa.js",revision:null},{url:"assets/useRandint.07e5b532.js",revision:null},{url:"assets/useTypewrite.705f091f.js",revision:null},{url:"assets/useWebGL.dbe6c041.js",revision:null},{url:"assets/v1-editor.120daea9.js",revision:null},{url:"assets/v2-compiler.ca80a469.js",revision:null},{url:"assets/v2-editor.4d545c55.js",revision:null},{url:"assets/v3-compiler.c03005a2.js",revision:null},{url:"assets/v3-editor.4c2a2aef.js",revision:null},{url:"assets/v4-compiler.3122239f.js",revision:null},{url:"assets/v4-editor.e47dda62.js",revision:null},{url:"index.html",revision:"6b4599d53fc793771d2e99501fac0da3"},{url:"manifest.webmanifest",revision:"c32e84594414cb6378a5516a383d25c1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
