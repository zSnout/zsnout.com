import{j as d}from"./index.7b71d487.js";import{C as y}from"./CoordinateCanvas2d.381d3230.js";class m extends y{constructor(n,h){super(n,h),d(n,"wheel",t=>{this.setBounds(this.getZoomRegion(Math.sqrt(Math.abs(t.deltaY))*-Math.sign(t.deltaY)/10))});let i;d(n,"touchmove",t=>{t.preventDefault();const{touches:[s,o]}=t;if(t.touches.length===2){const{x:c,y:x}=this.rect,a=Math.abs((o.clientX-s.clientX)**2+(o.clientY-s.clientY)**2);if(!i){i=a;return}const l=(s.clientX-c+o.clientX-c)/2,u=(s.clientY-x+o.clientY-x)/2;a>i?this.setBounds(this.getZoomRegion(1,{x:l,y:u})):this.setBounds(this.getZoomRegion(-1,{x:l,y:u})),i=a}});let e;d("pointermove",t=>{if(t.preventDefault(),r!==1||!e)return;const{x:s,y:o}=this.pxToCoords(t.offsetX,t.offsetY),{xStart:c,xEnd:x,yStart:a,yEnd:l}=this.bounds;this.setBounds({xStart:c-(s-e.x),xEnd:x-(s-e.x),yStart:a-(o-e.y),yEnd:l-(o-e.y)})});let r=0;d(n,"pointerdown",({offsetX:t,offsetY:s,pointerId:o})=>{r++,e=this.pxToCoords(t,s),this.canvas.setPointerCapture(o)}),d("pointerup",()=>{r=Math.max(0,r-1),e=void 0})}getZoomRegion(n=1,h=this.mouse){const{xStart:i,xEnd:e,yStart:r,yEnd:t}=this.bounds,{x:s,y:o}=this.pxToCoords(h.x,h===this.mouse?this.canvas.clientHeight-h.y:h.y);return{xStart:i+n*(s-i)/10,xEnd:e+n*(s-e)/10,yStart:r+n*(o-r)/10,yEnd:t+n*(o-t)/10}}}export{m as M};