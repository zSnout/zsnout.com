var V=Object.defineProperty,O=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var h=(s,e,o)=>e in s?V(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,p=(s,e)=>{for(var o in e||(e={}))W.call(e,o)&&h(s,o,e[o]);if(w)for(var o of w(e))$.call(e,o)&&h(s,o,e[o]);return s},m=(s,e)=>O(s,U(e));import{u as z,E as A}from"./useLocationHash.69ee20ff.js";import{d as b,_ as B}from"./index.2406a376.js";import{u as F,C as K}from"./Console.b9b2bd0d.js";import{d as _,E as N,aF as Y,ad as H,o as k,c as v,u as i,x as c,w as L,b as x}from"./index.13caa811.js";import"./DocumentDisplay.4071d3b6.js";import"./Modal.dc581f91.js";import"./AceEditor.66c1adcb.js";import"./_commonjsHelpers.294d03c4.js";import"./__vite-browser-external.2d3e1c2d.js";import"./Dropdown.00cd026e.js";import"./Field.ceeb8f29.js";import"./Labeled.fc7fc391.js";const R=_({__name:"Viewer4",props:{code:null},setup(s){const e=s,{console:o,field:r,messages:u,onKey:j,onSelect:C,onSubmit:E,placeholder:d}=F(),S=Object.getPrototypeOf(async function(){}).constructor;function f(){o.clear(),d.value="",Object.assign(window,o),Object.assign(window,{print:o.log,jsx(g,t,...a){if(typeof g=="string"){let l=document.createElement(g);for(let n in t)if(n==="style")for(let y in t.style)l.style[y]=t.style[y];else n.startsWith("data")?l.dataset[n.slice(4)]=t[n]:n.startsWith("on")?l.addEventListener(n.slice(2,3).toUpperCase()+n.slice(3),t[n]):l[n]=t[n];for(let n of a.flat(1/0))n instanceof Node||typeof n=="string"?l.append(n):l.append(""+n);return l}try{return new g(a.length?m(p({},t),{children:a}):t)}catch{return g(a.length?m(p({},t),{children:a}):t)}}}),new S(b.transpile(b.compile(e.code),{jsx:"jsx",target:99}))()}return f(),N(H(e,"code"),Y(f,1e3)),(g,t)=>(k(),v(K,{field:i(r),"onUpdate:field":t[0]||(t[0]=a=>c(r)?r.value=a:null),messages:i(u),"onUpdate:messages":t[1]||(t[1]=a=>c(u)?u.value=a:null),placeholder:i(d),onKey:i(j),onSelect:i(C),onSubmit:i(E)},null,8,["field","messages","placeholder","onKey","onSelect","onSubmit"]))}}),te=_({__name:"v4-editor",setup(s){const e=z(`money = 500
eggs = 0
name = await prompt "What is your name?"

market = ->
  print "#{name}, you have $#{money} and #{eggs} dozen eggs."
  idx = await select "What would you like to buy?", ["Eggs", "Go Back"]
  if idx == 0
    await eggsfn()
  await market()

eggsfn = ->
  egg = +(await prompt "How many dozen eggs do you want to buy?")
  eggprice = 6 * egg
  print "#{egg} dozen eggs will cost $#{eggprice}."
  if money > eggprice
    idx = await select "Are you sure you want to buy them?", ["Yes", "No"]
    if idx == 0
      money -= eggprice
      eggs += egg
    else
      print "Okay, let's go back to the store."
  else if money == eggprice
    print "You have just enough money for these eggs."
    money -= eggprice
    eggs += egg
  else
    print "You don't have enough money for these eggs!"

await market()`);return(o,r)=>(k(),v(A,null,{default:L(()=>[x(B,{modelValue:i(e),"onUpdate:modelValue":r[0]||(r[0]=u=>c(e)?e.value=u:null),round:""},null,8,["modelValue"]),x(R,{code:i(e),round:""},null,8,["code"])]),_:1}))}});export{te as default};
