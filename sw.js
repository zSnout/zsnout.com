if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/__vite-browser-external.2d3e1c2d.js",revision:null},{url:"assets/_commonjsHelpers.294d03c4.js",revision:null},{url:"assets/404.9f1c2778.js",revision:null},{url:"assets/AceEditor.86988308.css",revision:null},{url:"assets/AceEditor.be45da5b.js",revision:null},{url:"assets/BlobbyGradient.7df44841.css",revision:null},{url:"assets/BlobbyGradient.e72b29c9.js",revision:null},{url:"assets/browser.960229ac.js",revision:null},{url:"assets/CodeEditor.1bf8054e.js",revision:null},{url:"assets/Compiler.5d67c7ba.js",revision:null},{url:"assets/compiler3.8ff8648d.js",revision:null},{url:"assets/Console.456730f8.js",revision:null},{url:"assets/Console.84b1a11f.css",revision:null},{url:"assets/DocumentDisplay.670ddeee.css",revision:null},{url:"assets/DocumentDisplay.993a25b1.js",revision:null},{url:"assets/Dropdown.297df829.css",revision:null},{url:"assets/Dropdown.b8eaf041.js",revision:null},{url:"assets/Editor2.a2c06a8d.js",revision:null},{url:"assets/Editor3.a04d0766.js",revision:null},{url:"assets/Ellipses.a306d576.css",revision:null},{url:"assets/Ellipses.f1017219.js",revision:null},{url:"assets/Evaluator.99e0f75d.js",revision:null},{url:"assets/Field.1a90878f.js",revision:null},{url:"assets/Field.55d40313.css",revision:null},{url:"assets/Fireline.80c8f1f7.css",revision:null},{url:"assets/Fireline.b4a8ad0d.js",revision:null},{url:"assets/FractalExplorer.98226ded.css",revision:null},{url:"assets/FractalExplorer.9c32459c.js",revision:null},{url:"assets/FullscreenDisplay.4f3f1ebb.js",revision:null},{url:"assets/FullscreenDisplay.b0cd83ae.css",revision:null},{url:"assets/Grid.6f521909.js",revision:null},{url:"assets/Home.acaf3338.js",revision:null},{url:"assets/Index.1e6c70f6.css",revision:null},{url:"assets/Index.34c28a64.js",revision:null},{url:"assets/index.42284175.js",revision:null},{url:"assets/index.4b6afe36.css",revision:null},{url:"assets/index.cb71d3db.js",revision:null},{url:"assets/Index.e90adb87.js",revision:null},{url:"assets/Index.f4e0a072.js",revision:null},{url:"assets/InlineCheckboxField.66760296.css",revision:null},{url:"assets/InlineCheckboxField.d0758d1b.js",revision:null},{url:"assets/InlineRangeField.60b16e4c.css",revision:null},{url:"assets/InlineRangeField.ee1770b5.js",revision:null},{url:"assets/Labeled.556886c8.css",revision:null},{url:"assets/Labeled.b8e61f19.js",revision:null},{url:"assets/Leopards.86ceeb25.css",revision:null},{url:"assets/Leopards.c49ad11e.js",revision:null},{url:"assets/Mandelbrot.e305524d.js",revision:null},{url:"assets/Metaballs.352e071a.js",revision:null},{url:"assets/Modal.31fc682e.js",revision:null},{url:"assets/Modal.4242ea3e.css",revision:null},{url:"assets/mode-javascript.e6176182.js",revision:null},{url:"assets/preset.32289e6e.js",revision:null},{url:"assets/Rectangles.00e983ae.css",revision:null},{url:"assets/Rectangles.b667561f.js",revision:null},{url:"assets/SameNumberGenerator.217ce8ef.css",revision:null},{url:"assets/SameNumberGenerator.4e87d53f.js",revision:null},{url:"assets/Slider.7cb16201.js",revision:null},{url:"assets/Slider.da54ccf2.css",revision:null},{url:"assets/Title.e66d9c56.js",revision:null},{url:"assets/Title.eae9c088.css",revision:null},{url:"assets/Turntable.92183cea.css",revision:null},{url:"assets/Turntable.e2c80f8a.js",revision:null},{url:"assets/Uniforms.9c588bea.js",revision:null},{url:"assets/useCanvas.5c0042ba.js",revision:null},{url:"assets/useLocationHash.1ef0916d.js",revision:null},{url:"assets/useLocationHash.76e5dc49.css",revision:null},{url:"assets/useMovableCanvas.87592dfd.js",revision:null},{url:"assets/useOption.a5b9a0e8.js",revision:null},{url:"assets/useRandint.07e5b532.js",revision:null},{url:"assets/useRandomColor.1a4538c9.js",revision:null},{url:"assets/useTypewrite.705f091f.js",revision:null},{url:"assets/useWebGL.cf086c91.js",revision:null},{url:"assets/v1-editor.1b7532b2.js",revision:null},{url:"assets/v2-compiler.136753db.js",revision:null},{url:"assets/v2-editor.0cf5afe2.js",revision:null},{url:"assets/v3-compiler.b6074981.js",revision:null},{url:"assets/v3-editor.98997796.js",revision:null},{url:"assets/v4-compiler.579a8957.js",revision:null},{url:"assets/v4-editor.9a13eeb7.js",revision:null},{url:"index.html",revision:"b1be1c557b7dc3c2e7164ffebe57a072"},{url:"manifest.webmanifest",revision:"c32e84594414cb6378a5516a383d25c1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
