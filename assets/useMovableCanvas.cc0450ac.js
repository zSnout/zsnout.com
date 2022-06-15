var I=Object.defineProperty,L=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var b=(e,n,t)=>n in e?I(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,P=(e,n)=>{for(var t in n||(n={}))k.call(n,t)&&b(e,t,n[t]);if(z)for(var t of z(n))A.call(n,t)&&b(e,t,n[t]);return e},M=(e,n)=>L(e,W(n));import{ad as y,f as a,ak as X,m as E,a9 as j,av as G,au as p,aw as T,ap as V,aq as U,ae as Z}from"./index.ed7c8f42.js";import{u as $}from"./useWebGL.0aafa8d8.js";function Y(e,n,t,s,r){return y(()=>(a(r)-a(e))*(a(s)-a(t))/(a(n)-a(e))+a(t))}function g(e,n,t){const s=X(),r=Y(0,s.width,0,1,t.x),f=Y(s.height,0,0,1,t.y);return{x:y(()=>r.value*n.x.value+e.x.value),y:y(()=>f.value*n.y.value+e.y.value)}}function F(e,n){const t=X();e=H(e,n);const s=y(()=>{const r=a(e.xStart),f=a(e.xEnd),i=a(e.yStart),c=a(e.yEnd);return t.width.value>t.height.value?{x:(r-(f-r)/2)/2,y:i}:{x:r,y:(i-(c-i)/2)/2}});return{offset:{x:y(()=>s.value.x),y:y(()=>s.value.y)},scale:{x:y(()=>a(e.xEnd)-a(e.xStart)),y:y(()=>a(e.yEnd)-a(e.yStart))}}}function D(e){return y(()=>[a(e.x),a(e.y)])}function H(e,n){const t=y(()=>{const{xStart:s,xEnd:r,yStart:f,yEnd:i}=e,c=a(s)+a(r),d=a(f)+a(i),v=(a(r)-a(s))/2,x=(a(i)-a(f))/2;let{width:{value:u},height:{value:l}}=n;return(Number.isNaN(u)||u===0)&&(u=l),(Number.isNaN(l)||l===0)&&(l=u),(Number.isNaN(u)||u===0)&&(u=l=1),u<l?{xStart:s,xEnd:r,yStart:d-l/u*x,yEnd:d+l/u*x}:{xStart:c-u/l*v,xEnd:c+u/l*v,yStart:f,yEnd:i}});return{xStart:y(()=>a(t.value.xStart)),xEnd:y(()=>a(t.value.xEnd)),yStart:y(()=>a(t.value.yStart)),yEnd:y(()=>a(t.value.yEnd))}}const O=`
struct Bounds {
  float xStart;
  float xEnd;
  float yStart;
  float yEnd;
};

struct Coordinates {
  float x;
  float y;
};
`,J=`
in vec2 _pos;
out vec2 pos;

uniform vec2 offset;
uniform vec2 scale;

void main() {
  gl_Position = vec4(_pos, 0, 1);
  pos = _pos * scale + offset;
}`;async function K(e,n,t){var c,d,v,x,u,l,w,N,h;const s={xStart:E((d=(c=t==null?void 0:t.bounds)==null?void 0:c.xStart)!=null?d:-2),xEnd:E((x=(v=t==null?void 0:t.bounds)==null?void 0:v.xEnd)!=null?x:2),yStart:E((l=(u=t==null?void 0:t.bounds)==null?void 0:u.yStart)!=null?l:-2),yEnd:E((N=(w=t==null?void 0:t.bounds)==null?void 0:w.yEnd)!=null?N:2)},r=await $(e,O+n,M(P({},t),{vertShader:O+((h=t==null?void 0:t.vertShader)!=null?h:J)})),{offset:f,scale:i}=F(s,r.size);if(r.useUniform("offset","f",D(f)),r.useUniform("scale","f",D(i)),(t==null?void 0:t.uniforms)===!0){r.useUniform("bounds.xStart","f",s.xStart),r.useUniform("bounds.xEnd","f",s.xEnd),r.useUniform("bounds.yStart","f",s.yStart),r.useUniform("bounds.yEnd","f",s.yEnd);const m=j(),o=g(f,i,m);r.useUniform("pointer.x","f",o.x),r.useUniform("pointer.y","f",o.y)}return Object.assign(r,{bounds:s,offset:f,scale:i})}const S=G("history");function Q(e,n){return typeof n=="boolean"?n?S[e]="":delete S[e]:S[e]===void 0&&n!==void 0&&(S[e]=""+n),p({get(){return typeof n=="boolean"?S[e]!==void 0:typeof n=="number"?+S[e]:""+S[e]},set(t){typeof t=="boolean"&&(t?S[e]="":delete S[e]),S[e]=""+t}})}function tt(e,n){const t=Q(e,n.value);n.value=t.value;const s=T(t,n,{direction:"rtl"});return V(s),s}function et(e,n=1e7){return p({get(){return~~(n*e.value)/n},set(t){e.value=t}})}function _(e,n,t){return{xStart:y(()=>a(e.xStart)+a(t)*(a(n.x)-a(e.xStart))/10),xEnd:y(()=>a(e.xEnd)+a(t)*(a(n.x)-a(e.xEnd))/10),yStart:y(()=>a(e.yStart)+a(t)*(a(n.y)-a(e.yStart))/10),yEnd:y(()=>a(e.yEnd)+a(t)*(a(n.y)-a(e.yEnd))/10)}}async function ot(e,n,t){const s=await K(e,n,t),{canvas:r,bounds:f,offset:i,onDispose:c,scale:d,useUniform:v}=s,x=j(),u={x:E(NaN),y:E(NaN)},l=E(0),w=_(f,g(i,d,x),l);if((t==null?void 0:t.uniforms)===!0){const o=_(f,g(i,d,x),1);v("zoomRegion.xStart","f",o.xStart),v("zoomRegion.xEnd","f",o.xEnd),v("zoomRegion.yStart","f",o.yStart),v("zoomRegion.yEnd","f",o.yEnd)}c(U(r,"wheel",o=>{o.preventDefault(),x.x.value=o.offsetX,x.y.value=o.offsetY,l.value=Math.sqrt(Math.abs(o.deltaY))*-Math.sign(o.deltaY)/10;const{xStart:{value:C},xEnd:{value:R},yStart:{value:q},yEnd:{value:B}}=w;f.xStart.value=C,f.xEnd.value=R,f.yStart.value=q,f.yEnd.value=B},{passive:!1}));const N=g(i,d,x),h=g(i,d,u);c(U(r,"pointermove",o=>{if(o.preventDefault(),Number.isNaN(u.x.value)||Number.isNaN(u.y.value))return;x.x.value=o.offsetX,x.y.value=o.offsetY;const C=N.x.value-h.x.value,R=N.y.value-h.y.value;f.xStart.value-=C,f.xEnd.value-=C,f.yStart.value-=R,f.yEnd.value-=R,u.x.value=x.x.value,u.y.value=x.y.value})),c(U(r,"pointerdown",o=>{r.setPointerCapture(o.pointerId),u.x.value=o.offsetX,u.y.value=o.offsetY})),c(U("pointerup",o=>{r.releasePointerCapture(o.pointerId),u.x.value=NaN,u.y.value=NaN}));function m(o){c(tt(o,et(Z(f,o))))}return m("xStart"),m("xEnd"),m("yStart"),m("yEnd"),s}export{tt as s,ot as u};
