var A=Object.defineProperty;var y=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var _=(r,n,a)=>n in r?A(r,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[n]=a,$=(r,n)=>{for(var a in n||(n={}))S.call(n,a)&&_(r,a,n[a]);if(y)for(var a of y(n))z.call(n,a)&&_(r,a,n[a]);return r};import{u as useNavLink,D as DocumentDisplay}from"./DocumentDisplay.ebe7c73d.js";import{_ as _export_sfc,H as HStack}from"./Modal.706c48e0.js";import{a as ace,A as AceEditor,u as useCompleteConsole,C as Console}from"./AceEditor.ab0cb004.js";import{d as defineComponent,c as createBlock,o as openBlock,u as unref,y as isRef,w as withCtx,b as createVNode}from"./index.30edd0ca.js";import{u as useLocationHash}from"./useLocationHash.f8948bfa.js";import"./Labeled.b705850d.js";import"./Field.6540885e.js";const _sfc_main$2=defineComponent({__name:"Editor2",props:{modelValue:null,readonly:{type:Boolean},placeholder:null,round:{type:Boolean}},emits:["update:modelValue","init","save"],setup(r){return ace.define("ace/mode/storymatic2",(n,a)=>{const t=n("ace/lib/oop"),o=n("ace/mode/text").Mode,s=n("ace/mode/storymatic2_highlight_rules").StorymaticHighlightRules,u=function(){this.HighlightRules=s,this.lineCommentStart="#"};t.inherits(u,o),a.Mode=u}),ace.define("ace/mode/storymatic2_highlight_rules",function(n,a){const t=n("ace/lib/oop"),o=n("ace/mode/text_highlight_rules").TextHighlightRules,s=function(){this.$rules={start:[{token:["keyword.other","text","variable.other","text","constant.other","comment.line.other"],regex:/^(#import)( +)([A-Za-z_][A-Za-z0-9_]*)( +)((?:@[A-Za-z_][A-Za-z0-9_]*(?:$| +))+)( *<--.+)$/},{token:["keyword.other","text","variable.other","text","constant.other"],regex:/^(#import)( +)([A-Za-z_][A-Za-z0-9_]*)( +)((?:@[A-Za-z_][A-Za-z0-9_]*(?:$| +))+)$/},{token:["keyword.other","text","variable.other","comment.line.other"],regex:/^(#import)( +)([A-Za-z_][A-Za-z0-9_]*)( *<--.+)$/},{token:["keyword.other","text","variable.other"],regex:/^(#import)( +)([A-Za-z_][A-Za-z0-9_]*)$/},{token:["keyword.other","comment.line.other"],regex:/^(#importall)( *<--.+)$/},{token:"keyword.other",regex:/^#importall$/},{token:["keyword.other","text","variable.other.markup.underline.link","comment.line.other"],regex:/^(#library)( +)([^ ]+)( *<--.+)$/},{token:["keyword.other","text","variable.other.markup.underline.link"],regex:/^(#library)( +)([^ ]+)$/},{token:["keyword.other","text","variable.other.markup.underline.link","text","string.other","comment.line.other"],regex:/^(#plugin)( +)([^ ]+)( +)(.+)( *<--.+)$/},{token:["keyword.other","text","variable.other.markup.underline.link","text","string.other"],regex:/^(#plugin)( +)([^ ]+)( +)(.+)$/},{token:"comment.block",regex:/\/\*/,next:"comment"},{token:["variable.other","text","keyword.operator","text","string.other","comment.line.other"],regex:/^(\$[A-Za-z_][A-Za-z0-9_]*)( *)(=)( *)(.+)( *<--.+)$/},{token:["variable.other","text","keyword.operator","text","string.other"],regex:/^(\$[A-Za-z_][A-Za-z0-9_]*)( *)(=)( *)(.+)$/},{token:["constant.other","text","variable.other","text","variable.other","comment.line.other"],regex:/^(@[A-Za-z_][A-Za-z0-9_]*)(?:( +)(\$[A-Za-z_][A-Za-z0-9_]*|NONE))?(?:( +)(\$[A-Za-z_][A-Za-z0-9_]*|NONE))?( *<--.+)$/},{token:["constant.other","text","variable.other","text","variable.other"],regex:/^(@[A-Za-z_][A-Za-z0-9_]*)(?:( +)(\$[A-Za-z_][A-Za-z0-9_]*|NONE))?(?:( +)(\$[A-Za-z_][A-Za-z0-9_]*|NONE))?$/},{token:["text","constant.other","comment.line.other"],regex:/^( +)(@[A-Za-z_][A-Za-z0-9_]*)( *<--.+)$/},{token:["text","constant.other"],regex:/^( +)(@[A-Za-z_][A-Za-z0-9_]*)$/},{token:["text","constant.other","text"],regex:/^( +)(@[A-Za-z_][A-Za-z0-9_]*)( +)/,next:"text"},{token:["text","constant.other","text"],regex:/^( +)(@[A-Za-z_][A-Za-z0-9_]*)(\()/,next:"argument"},{token:["text","variable.other","text","keyword.operator","text"],regex:/^( +)(\$[A-Za-z_][A-Za-z0-9_]*)( *)(\+=|-=|\*=|\/=|=)( *)/,next:"text"},{token:["text","variable.other","text","keyword.operator","text"],regex:/^( +)(\$[A-Za-z_][A-Za-z0-9_]*)( *)(@=)( *)/,next:"expression"},{token:["text","variable.other","text","keyword.operator"],regex:/^( +)(\$[A-Za-z_][A-Za-z0-9_]*)( *)(\+\+|--)$/},{token:["text","variable.other","text","keyword.operator"],regex:/^( +)(\$[A-Za-z_][A-Za-z0-9_]*)( *)(--)$/},{token:"comment.line.number-sign",regex:/#.+$/},{token:"comment.line.other",regex:/<--.+$/},{token:"text",regex:/^ +/,next:"text"},{defaultToken:"text"}],text:[{token:"constant.character.escape",regex:/\$\$/},{token:"comment.line.number-sign",regex:/#.+$/},{token:"comment.line.other",regex:/<--.+$/},{token:"comment.block",regex:/\/\*/,next:"comment"},{token:"variable.other",regex:/\$[A-Za-z_][A-Za-z0-9_]*/},{token:"string.other",regex:/-?[0-9]+(?:\.[0-9]+)?/},{regex:/^|$/,next:"start"},{defaultToken:"text"}],expression:[{token:"comment.line.number-sign",regex:/#.+$/},{token:"comment.line.other",regex:/<--.+$/},{token:"comment.block",regex:/\/\*/,next:"comment"},{token:"variable.other",regex:/\$[A-Za-z_][A-Za-z0-9_]*/},{token:"string.other",regex:/-?[0-9]+(?:\.[0-9]+)?/},{token:"keyword.operator",regex:/\(|\)|<|>|\*|\/|%|\+|-|!|=|and|or|&&|\|\|/},{regex:/^|$/,next:"start"},{defaultToken:"text"}],comment:[{token:"comment.block",regex:/\*\//,next:"start"},{defaultToken:"comment.block"}],argument:[{token:"constant.character.escape",regex:/\$\$|\)\)/},{token:"text",regex:/\) +/,next:"text"},{token:"text",regex:/\)$/,next:"start"},{token:"comment.line.number-sign",regex:/#.+$/},{token:"comment.line.other",regex:/<--.+$/},{token:"comment.block",regex:/\/\*/,next:"comment"},{token:"variable.other",regex:/\$[A-Za-z_][A-Za-z0-9_]*/},{token:"string.other",regex:/-?[0-9]+(?:\.[0-9]+)?/},{regex:/^|$/,next:"start"},{defaultToken:"text"}]}};t.inherits(s,o),a.StorymaticHighlightRules=s}),(n,a)=>{var t;return openBlock(),createBlock(AceEditor,{modelValue:r.modelValue,placeholder:(t=r.placeholder)!=null?t:"Write a story...",readonly:r.readonly,round:r.round,mode:"storymatic2",onInit:a[0]||(a[0]=o=>n.$emit("init",o)),onSave:a[1]||(a[1]=o=>n.$emit("save",o)),"onUpdate:modelValue":a[2]||(a[2]=o=>n.$emit("update:modelValue",o))},null,8,["modelValue","placeholder","readonly","round"])}}});function useTypewrite(r,n){const a=document.createElement("p");return{el:a,done:new Promise(t=>{let o=1;if(a.textContent+=r[0]||"",r.length<=1){setTimeout(t,n);return}const s=setInterval(()=>{a.textContent+=r[o++]||"",o>=r.length&&(clearInterval(s),t())},n/(r.length-1))})}}String.prototype.realMatchAll=function(r){return Array.from(this.matchAll(r))};class _Storymatic{constructor(story,callback){story=_Storymatic.parse(story),this.original=story.original,this.variables=story.variables,this.parsed=JSON.parse(JSON.stringify(story)),this.commands={},this.stopped=!1;var add=(r,n,a,t)=>{this.commands[r]||(this.commands[r]=(o,s,u,h,m,f)=>{this.setVariable(n,o),this.setVariable(a,u),this.runParsed(t,()=>{!m||m.length==0?typeof f=="function"&&f():this.run(m,f)})})};for(var command in story.commands)if(!(command in this.commands)){var cmd=story.commands[command];add(command,cmd.arg,cmd.codeblock,cmd.body)}var libs=[],plugins=[];story.libs.map(r=>libs.push(fetch(r,{mode:"no-cors",cache:"reload"}))),story.plugins.map(r=>plugins.push(fetch(r[0],{mode:"no-cors",cache:"reload"}))),Promise.allSettled(plugins).then(data=>{for(var pluginText=[],i=0;i<data.length;i++)data[i].status=="fulfilled"&&data[i].value.ok&&data[i].value.status==200&&pluginText.push(data[i].value.text());Promise.allSettled(pluginText).then(data=>{data.map(e=>eval(e.value)),Promise.allSettled(libs).then(r=>{for(var n=[],a=0;a<r.length;a++)r[a].status=="fulfilled"&&r[a].value.ok&&r[a].value.status==200&&n.push(r[a].value.text());Promise.allSettled(n).then(t=>{t=t.map(u=>u.value);var o=0,s=()=>{if(o>=t.length){story.importall&&(story.imports=Object.keys(_Storymatic.imports));for(var u=0;u<story.importfrom.length;u++)if(story.importfrom[u][0]in _Storymatic.imports)for(var h=_Storymatic.imports[story.importfrom[u][0]],m=0;m<story.importfrom[u][1].length;m++){var f=story.importfrom[u][1][m];f in h&&(this.commands[f]=h[f])}for(var u=0;u<story.imports.length;u++)if(story.imports[u]in _Storymatic.imports){var h=_Storymatic.imports[story.imports[u]];for(var f in h)this.commands[f]=h[f]}typeof callback=="function"&&callback(this)}else this.mergeWith(t[o],()=>{o++,s()})};s()})})})})}mergeWith(r,n){var a=_Storymatic.parse(r),t=(u,h,m,f)=>{this.commands[u]||(this.commands[u]=(l,p,c,g,d,v)=>{this.setVariable(h,l),this.setVariable(m,c),this.runParsed(f,()=>{!d||d.length==0?typeof v=="function"&&v():this.run(d,v)})})};for(var o in a.commands)if(!(o in this.commands)){var s=a.commands[o];t(o,s.arg,s.codeblock,s.body)}typeof n=="function"&&n()}getVariable(r){var n=this.variables[r];return n==null||n.replace(/\s+/g,"")===""?"":n.match(/^-?[0-9]+(?:\.[0-9]+)?$/)?+n:n}setVariable(r,n){if(r)n=`${n}`;else return;this.variables[r]=n}calc(r){var n=t=>{var o=()=>{if(typeof t=="boolean"||typeof t=="string"||typeof t=="number")return t;if(typeof t!="object"||!t.type)return!1;if(t.type=="variable")return this.getVariable(t.name);if(t.type=="invert")return!n(t.values[0]);if(t.type=="multiply")return n(t.values[0])*n(t.values[1]);if(t.type=="divide")return n(t.values[0])/n(t.values[1]);if(t.type=="modulus")return n(t.values[0])%n(t.values[1]);if(t.type=="add")return n(t.values[0])+n(t.values[1]);if(t.type=="subtract")return n(t.values[0])-n(t.values[1]);if(t.type=="less_than")return n(t.values[0])<n(t.values[1]);if(t.type=="greater_than")return n(t.values[0])>n(t.values[1]);if(t.type=="less_than_equal")return n(t.values[0])<=n(t.values[1]);if(t.type=="greater_than_equal")return n(t.values[0])>=n(t.values[1]);if(t.type=="equal")return n(t.values[0])==n(t.values[1]);if(t.type=="not_equal")return n(t.values[0])!=n(t.values[1]);if(t.type=="and")return!!(n(t.values[0])&&n(t.values[1]));if(t.type=="or")return!!(n(t.values[0])||n(t.values[1]))},s=o();return s===!0||s=="TRUE"?!0:s===!1||s=="FALSE"?!1:s},a=n(r);return a===!0?"TRUE":a===!1?"FALSE":""+a}expr(r){return this.calc(_Storymatic.expr(r))}is(r){var n;return typeof r=="string"?n=this.expr(r):n=this.calc(r),String(n).toUpperCase()=="TRUE"}runCommand(r,n,a,t,o,s,u){r in this.commands?this.commands[r].call(this,...JSON.parse(JSON.stringify([n,a,t,o,s])),u):!s||s.length==0?typeof u=="function"&&u():this.run(s,u)}runCode(r,n){r=_Storymatic.parseBlock.inner(r),this.runParsed(r,n)}runParsed(r,n){this.run(r,n)}runVariable(r,n,a,t){if(n=="@=")return a.replace(/\s+/g,"")==""?this.setVariable(r,""):this.setVariable(r,this.expr(a)),typeof t=="function"?t():null;if(n=="=")return a.replace(/\s+/g,"")==""?this.setVariable(r,""):this.setVariable(r,this.parseText(a)),typeof t=="function"?t():null;var o=this.getVariable(r),s=this.parseText(a);return o==""?(this.setVariable(r,s),typeof t=="function"?t():null):(!isNaN(+o)&&!isNaN(+s)&&(o=+o,s=+s),n=="+="&&(o+=s),n=="-="&&(o-=s),n=="*="&&(o*=s),n=="/="&&(o/=s),n=="%="&&(o%=s),this.setVariable(r,o),typeof t=="function"?t():null)}print(r,n){_Storymatic.print(this.parseText(r),n)}parseText(r){return r.replace(/\$\$|\$([A-Za-z_][A-Za-z0-9_]*)/g,n=>n=="$$"?"$":this.getVariable(n.substr(1)))}run(r,n){if(!this.stopped){if(!r)return n==null?void 0:n();r=JSON.parse(JSON.stringify(r)),setTimeout(()=>{if(r.length==0)return typeof n=="function"?n():null;var a=r.shift(),t=()=>r.length==0?typeof n=="function"?n():null:this.run(r,n);a.action=="command"?this.runCommand(a.name,a.arg,a.expr,a.code,a.parsed,r,n):a.action=="code"?this.runCode(a.code,t):a.action=="parsed"?this.runParsed(a.code,t):a.action=="print"?this.print(a.text,t):a.action=="variable"?this.runVariable(a.name,a.mode,a.value,t):this.run(r,t)},0)}}start(r){typeof r!="function"&&(r=()=>{}),this.runCommand("start","","",[],[],r)}context(r){new _Storymatic(this.original,n=>{n.variables=JSON.parse(JSON.stringify(this.parsed.variables)),typeof r=="function"&&r(n)})}}_Storymatic.parseBlock={precomment:function(r){var n=/ *<--.+$/gm;return r.replace(n,"")},importfrom:function(r){var n=/^#import +([A-Za-z_][A-Za-z0-9_]*) +((?:@[A-Za-z_][A-Za-z0-9_]*(?:$| *,? *))+)$/gm;return r.realMatchAll(n),[r.replace(n,""),r.realMatchAll(n).map(a=>[a[1],a[2].realMatchAll(/@[A-Za-z_][A-Za-z0-9_]*/g).map(t=>t[0].substr(1))])]},imports:function(r){var n=/^#import +([^ \n\r]+)$/gm;return[r.replace(n,""),r.realMatchAll(n).map(a=>a[1])]},importall:function(r){var n=/^#importall$/gm;return[r.replace(n,""),!!r.realMatchAll(n).length]},libs:function(r){var n=/^#library +([^ \n\r]+)$/gm;return[r.replace(n,""),r.realMatchAll(n).map(a=>a[1]).filter(a=>{try{new URL(a)}catch{return!1}return a.substr(0,5)=="https"})]},plugins:function(r){var n=/^#plugin +([^ \n\r]+) +(.+)$/gm;return[r.replace(n,""),r.realMatchAll(n).map(a=>[a[1],a[2]]).filter(a=>{try{new URL(a[0])}catch{return!1}return a[0].substr(0,5)=="https"})]},commentblock:function(r){var n=/\/\*(?:[^\*]|\*(?=[^/]|$))*\*\/|\/\*(?:[^\*]|\*(?=[^/]|$))*$/g;return r.replace(n,"")},comments:function(r){var n=/ *#.+$/gm;return r.replace(n,"")},variables:function(r){var n=/^\$([A-Za-z_][A-Za-z0-9_]*) *= *(.+)$/gm,a=r.realMatchAll(n).map(t=>[t[1],t[2]]);return[r.replace(n,""),a]},commands:function(r){var n=/^@([A-Za-z_][A-Za-z0-9_]*)(?: +\$([A-Za-z_][A-Za-z0-9_]*)| +NONE)?(?: +\$([A-Za-z_][A-Za-z0-9_]*)| +NONE)? *$\n((?:^( +).*$)(?:\n^\5.*$)*)/gm,a=r.realMatchAll(n).map(t=>[null,t[1],t[2],t[3],t[4],t[5]]);return a=a.map(function(t){var o=t[5].length;return t[4]=t[4].split(`
`).map(s=>s.substr(o)),[t[1],t[2],t[3],t[4].join(`
`)]}),a},inner:function(r){r=r.split(`
`);var n=[],a;if(r.length===0)return[];var t=()=>r=r.filter((u,h)=>h>0).join(`
`);if(r.length>=2&&(a=r.join(`
`).match(/^@([A-Za-z_][A-Za-z0-9_]*?)(?: +(.+))?\n((?:( +).+)(?:\n\4.+)*)(?=\n|$)/))){var o=a[4].length,s=a[3].split(`
`).length+1;n.push({action:"command",name:a[1],arg:a[2]||"",expr:_Storymatic.expr(a[2]||""),code:a[3].split(`
`).map(u=>u.substr(o)).join(`
`),parsed:_Storymatic.parseBlock.inner(a[3].split(`
`).map(u=>u.substr(o)).join(`
`))}),r=r.filter((u,h)=>h>=s).join(`
`)}else(a=r.join(`
`).match(/^@([A-Za-z_][A-Za-z0-9_]*?)(?: +(.+))?(?=\n|$)/))?(n.push({action:"command",name:a[1],arg:a[2]||"",expr:_Storymatic.expr(a[2]||""),code:"",parsed:[]}),t()):(a=r[0].match(/^@([A-Za-z_][A-Za-z0-9_]*)\(((?:[^\)]|\)\))+)?\)(?: +(.+))?$/))?(n.push({action:"command",name:a[1],arg:a[2]||"",expr:_Storymatic.expr(a[2]||""),code:a[3]||"",parsed:_Storymatic.parseBlock.inner(a[3]||"")}),t()):(a=r.join(`
`).match(/^\$([A-Za-z_][A-Za-z0-9_]*) *(\+=|-=|\*=|\/=|%=|@=|=) *(.+)(?=\n|$)/))?(n.push({action:"variable",name:a[1],mode:a[2],value:a[3]}),t()):(a=r[0].match(/^\$([A-Za-z_][A-Za-z0-9_]*) *\+\+$/))?(n.push({action:"variable",name:a[1],mode:"+=",value:"1"}),t()):(a=r[0].match(/^\$([A-Za-z_][A-Za-z0-9_]*) *--$/))?(n.push({action:"variable",name:a[1],mode:"-=",value:"1"}),t()):r[0].replace(/ +/g,"")===""?t():(n.push({action:"print",text:r[0]}),r=r.filter((u,h)=>h>0).join(`
`));return r===""?n:n.concat(_Storymatic.parseBlock.inner(r))}};_Storymatic.parse=function(r){var n,a,t,o,s,u,h,m=r;r=r.split(`
`).filter(c=>c.replace(/ /g,"")).join(`
`),r=_Storymatic.parseBlock.precomment(r),[r,n]=_Storymatic.parseBlock.importfrom(r),[r,a]=_Storymatic.parseBlock.imports(r),[r,t]=_Storymatic.parseBlock.importall(r),[r,o]=_Storymatic.parseBlock.libs(r),[r,s]=_Storymatic.parseBlock.plugins(r),r=_Storymatic.parseBlock.commentblock(r),r=_Storymatic.parseBlock.comments(r),[r,u]=_Storymatic.parseBlock.variables(r),h=_Storymatic.parseBlock.commands(r),h=h.map(c=>[c[0],c[1]||"",c[2]||"",_Storymatic.parseBlock.inner(c[3])]);var f,l={};for(f=0;f<h.length;f++)l[h[f][0]]={arg:h[f][1],codeblock:h[f][2],body:h[f][3]};var p={};for(f=0;f<u.length;f++)p[u[f][0]]=u[f][1];return{original:m,importfrom:n,imports:a,importall:t,libs:o,plugins:s,variables:p,commands:l}};_Storymatic.parseExpr={verify:function(r){var n=/\(|\)|<=|>=|<|>|!=|\*|\/|%|\+|-|!|=|and|or|&&|\|\||-?[0-9]+(?:\.[0-9]+)?|\$[A-Za-z_][A-Za-z0-9_]*/g;if(r.replace(n,"").match(/[^ ]/)||!r.match(n))return!1;var a=r.match(n),t="<= >= < > != * / % + - = and or && ||".split(" "),o=h=>h.match(/-?[0-9]+(?:\.[0-9]+)?/),s=h=>h.match(/\$[A-Za-z_][A-Za-z0-9_]*/);if(t.indexOf(a[0])>-1||a[0]==")"||t.indexOf(a[a.length-1])>-1||a[a.length-1]=="("||a[a.length-1]=="!"||a.filter(h=>h=="(").length!=a.filter(h=>h==")").length)return!1;for(var u=0;u<a.length-1;u++)if(t.indexOf(a[u])>-1&&t.indexOf(a[u+1])>-1||t.indexOf(a[u])>-1&&a[u+1]==")"||(o(a[u])||s(a[u]))&&(o(a[u+1])||s(a[u+1])))return!1;return!0},tokenize:function(r){var n=/\$[A-Za-z_][A-Za-z0-9_]*|-?[0-9]+(?:\.[0-9]+)?|\(|\)|\|\||&&|\+|-|\*|\/|%|!=|!|<=|>=|<|>|=/g;return r.match(n)||[]},paren:function(r){for(var n=[],a=[],t=0,o=!1,s=r.length,u=0;u<s;u++)o?(r[u]=="("&&t++,r[u]==")"&&t--,t==-1?(o=!1,t=0,n.push(_Storymatic.expr(a.join(" ")))):a.push(r[u])):r[u]=="("?o=!0:n.push(r[u]);return n},varnums:function(r){for(var n,a=0;a<r.length;a++)typeof r[a]=="string"&&(n=r[a].match(/^\$([A-Za-z_][A-Za-z0-9_]*)$/))&&(r[a]={type:"variable",name:n[1]}),typeof r[a]=="string"&&(n=r[a].match(/(-?[0-9]+(?:\.[0-9]+)?)/))&&(r[a]=+n[1]);return r},not:function(r){for(var n=[],a=(o,s,u)=>{n.push({type:o,values:s}),t+=u},t=0;t<r.length;t++)r[t]=="!"?a("invert",[r[t+1]],1):n.push(r[t]);return n},prodquotmod:function(r){for(var n=[],a=(o,s,u)=>{n.push({type:o,values:s}),t+=u},t=0;t<r.length;t++)r[t+1]=="*"?a("multiply",[r[t],r[t+2]],2):r[t+1]=="/"?a("divide",[r[t],r[t+2]],2):r[t+1]=="%"?a("modulus",[r[t],r[t+2]],2):n.push(r[t]);return n},plusminus:function(r){for(var n=[],a=(o,s,u)=>{n.push({type:o,values:s}),t+=u},t=0;t<r.length;t++)r[t+1]=="+"?a("add",[r[t],r[t+2]],2):r[t+1]=="-"?a("subtract",[r[t],r[t+2]],2):n.push(r[t]);return n},compare:function(r){for(var n=[],a=(o,s,u)=>{n.push({type:o,values:s}),t+=u},t=0;t<r.length;t++)r[t+1]=="<"?a("less_than",[r[t],r[t+2]],2):r[t+1]==">"?a("greater_than",[r[t],r[t+2]],2):r[t+1]=="<="?a("less_than_equal",[r[t],r[t+2]],2):r[t+1]==">="?a("greater_than_equal",[r[t],r[t+2]],2):n.push(r[t]);return n},equal:function(r){for(var n=[],a=(o,s,u)=>{n.push({type:o,values:s}),t+=u},t=0;t<r.length;t++)r[t+1]=="="?a("equal",[r[t],r[t+2]],2):r[t+1]=="!="?a("not_equal",[r[t],r[t+2]],2):n.push(r[t]);return n},and:function(r){for(var n=[],a=(o,s,u)=>{n.push({type:o,values:s}),t+=u},t=0;t<r.length;t++)r[t+1]=="and"||r[t+1]=="&&"?a("and",[r[t],r[t+2]],2):n.push(r[t]);return n},or:function(r){for(var n=[],a=(o,s,u)=>{n.push({type:o,values:s}),t+=u},t=0;t<r.length;t++)r[t+1]=="or"||r[t+1]=="||"?a("or",[r[t],r[t+2]],2):n.push(r[t]);return n}};_Storymatic.expr=function(r){return _Storymatic.parseExpr.verify(r)?(r=_Storymatic.parseExpr.tokenize(r),r=_Storymatic.parseExpr.paren(r),r=_Storymatic.parseExpr.varnums(r),r=_Storymatic.parseExpr.not(r),r=_Storymatic.parseExpr.prodquotmod(r),r=_Storymatic.parseExpr.plusminus(r),r=_Storymatic.parseExpr.compare(r),r=_Storymatic.parseExpr.equal(r),r=_Storymatic.parseExpr.and(r),r=_Storymatic.parseExpr.or(r),r[0]):{type:"equal",values:[0,1]}};_Storymatic.tooltip=(r,n)=>typeof n=="function"?n():null;_Storymatic.write=(r,n)=>typeof n=="function"?n(alert(r)):null;_Storymatic.print=(r,n)=>typeof n=="function"?n(alert(r)):null;_Storymatic.image=(r,n)=>typeof n=="function"?n():null;_Storymatic.line=r=>typeof r=="function"?r():null;_Storymatic.clear=r=>typeof r=="function"?r():null;_Storymatic.type=(r,n,a)=>typeof a=="function"?a(alert(r)):null;_Storymatic.input=(r,n)=>typeof n=="function"?n(prompt(r)):null;_Storymatic.choice=(r,n,a)=>{function t(){var o=prompt(r+`
Choose From: `+n.join(","));return n.indexOf(o)==-1?t():n.indexOf(o)}typeof a=="function"&&a(t())};_Storymatic.waitingFor=[];_Storymatic.waitFor=(r,n,a)=>{typeof a=="function"&&a(r)};_Storymatic.imports={};_Storymatic.imports.time={nowait:function(r,n,a,t,o,s){_Storymatic.write(this.parseText(r),()=>{this.run(o,s)})},wait:function(r,n,a,t,o,s){if(r=+this.parseText(r),isNaN(r))return this.run(o,s);setTimeout(()=>{this.run(o,s)},1e3*r)},wait_ms:function(r,n,a,t,o,s){if(r=+this.parseText(r),isNaN(r))return this.run(o,s);setTimeout(()=>{this.run(o,s)},r)}};_Storymatic.imports.input={menu:function(r,n,a,t,o,s){var u=t.filter(h=>h.action=="command"&&h.name=="option"&&h.arg.replace(/\s+/g,"")!="");if(u.length==0)return this.run(o,s);_Storymatic.choice(this.parseText(r),u.map(h=>this.parseText(h.arg)),h=>{this.run(u[h].parsed,()=>{this.run(o,s)})})},choice:function(r,n,a,t,o,s){var u=r.match(/^\$([A-Za-z_][A-Za-z0-9_]*) +(.+)$/);if(!u)return this.run(o,s);var h=t.filter(m=>m.action=="command"&&m.name=="option"&&m.arg.replace(/\s+/g,"")!="");if(h.length==0)return this.run(o,s);_Storymatic.choice(this.parseText(r),h.map(m=>this.parseText(m.arg)),m=>{h[m].code.replace(/\s+/g)==""?this.setVariable(u[1],this.parseText(h[m].arg)):this.setVariable(u[1],this.parseText(h[m].code)),this.run(o,s)})},input:function(r,n,a,t,o,s){var u=/^\$([A-Za-z_][A-Za-z0-9_]*) +(.+)$/,h,m=a.replace(/\s+/g,"")==""?[]:a.split(`
`).map(l=>this.parseText(l)).map(l=>l.toLowerCase());if(!(h=r.match(u)))return this.run(o,s);var f=()=>{_Storymatic.input(h[2],l=>l.replace(/\s+/g,"")==""||m.length>0&&m.indexOf(l.toLowerCase())==-1?f():(this.setVariable(h[1],l),this.run(o,s)))};f()},input_cs:function(r,n,a,t,o,s){var u=/^\$([A-Za-z_][A-Za-z0-9_]*) +(.+)$/,h,m=a.replace(/\s+/g,"")==""?[]:a.split(`
`).map(l=>this.parseText(l)).map(l=>l.toLowerCase());if(!(h=r.match(u)))return this.run(o,s);var f=()=>{_Storymatic.input(h[2],l=>l.replace(/\s+/g,"")==""||m.length>0&&m.indexOf(l)==-1?f():(this.setVariable(h[1],l),this.run(o,s)))};f()},number:function(r,n,a,t,o,s){var u=/^\$([A-Za-z_][A-Za-z0-9_]*) +(.+)$/,h=r.match(u);if(!h)return this.run(o,s);var m=-1/0,f=1/0,l=0,p=!1;if(a=a.split(`
`),a.map(d=>{var v;(v=d.match(/^min *: *(-?[0-9]+(?:\.[0-9]+)?)/))&&(m=+v[1]),(v=d.match(/^max *: *(-?[0-9]+(?:\.[0-9]+)?)/))&&(f=+v[1]),(v=d.match(/^step *: *([0-9]+(?:\.[0-9]+)?)/))&&(l=+v[1]),(d=="integer"||d=="int")&&(p=!0),d=="float"&&(p=!1)}),m>f){var c=m;m=f,f=c}var g=()=>{_Storymatic.input(h[2],d=>d.replace(/\s/g,"")==""||(d=+d,isNaN(d))||d<m||d>f||p&&Math.floor(d)!=d||l&&Math.floor((d-m)/l)!=(d-m)/l?g():(this.setVariable(h[1],d),this.run(o,s)))};g()},bind_once:function(r,n,a,t,o,s){if(r.replace(/\s+/g,"")=="")return this.run(o,s);if(a.replace(/\s+/g,"")=="")return this.run(o,s);_Storymatic.waitFor(this.parseText(r),!0,()=>{this.run(JSON.parse(JSON.stringify(t)))}),this.run(o,s)},bind_forever:function(r,n,a,t,o,s){if(a.replace(/\s/g,"")=="")return this.run(o,s);if(r.replace(/\s/g,"")=="")return this.run(o,s);_Storymatic.waitFor(this.parseText(r),!1,()=>{this.run(JSON.parse(JSON.stringify(t)))}),this.run(o,s)},unbind:function(r,n,a,t,o,s){r.replace(/\s/g,"")!=""?_Storymatic.waitingFor=_Storymatic.waitingFor.filter(u=>r.split(/\s+/g).indexOf(u.key.toLowerCase())==-1):_Storymatic.waitingFor=[],this.run(o,s)}};_Storymatic.imports.output={nowait:function(r,n,a,t,o,s){_Storymatic.write(this.parseText(r),()=>{this.run(o,s)})},image:function(r,n,a,t,o,s){_Storymatic.image(this.parseText(r),()=>this.run(o,s))},typewrite:function(r,n,a,t,o,s){var u;(u=r.match(/^([0-9]+(?:\.[0-9]+)?) +(.+)$/))?_Storymatic.type(this.parseText(u[2]),1e3*+u[1],()=>this.run(o,s)):(u=r.match(/^\$([A-Za-z_][A-Za-z0-9_]*) +(.+)$/))?_Storymatic.type(this.parseText(u[2]),1e3*+this.getVariable(u[1]),()=>this.run(o,s)):this.run(o,s)},typewrite_ms:function(r,n,a,t,o,s){var u;(u=r.match(/^([0-9]+(?:\.[0-9]+)?) +(.+)$/))?_Storymatic.type(this.parseText(u[2],+u[1],()=>this.run(o,s))):(u=r.match(/^\$([A-Za-z_][A-Za-z0-9_]*) +(.+)$/))?_Storymatic.type(this.parseText(u[2],+this.getVariable(u[1]),()=>this.run(o,s))):this.run(o,s)},line:function(r,n,a,t,o,s){_Storymatic.line(()=>this.run(o,s))},clear:function(r,n,a,t,o,s){_Storymatic.clear(()=>this.run(o,s))},center:function(r,n,a,t,o,s){_Storymatic.center(this.parseText(r),()=>{this.run(o,s)})},tooltip:function(r,n,a,t,o,s){_Storymatic.tooltip(this.parseText(r),()=>{this.run(o,s)})}};_Storymatic.imports.control={if:function(r,n,a,t,o,s){if(r.replace(/\s/g,"")=="")return this.run(o,s);if(a.replace(/\s+/g,"")=="")return this.run(o,s);for(var u=JSON.parse(JSON.stringify(o)),h=[{action:"command",name:"if",arg:r,expr:n,code:a,parsed:t}];u.length>0&&u[0].action=="command"&&(u[0].name=="elseif"||u[0].name=="else")&&!(u[0].name=="elseif"&&u[0].arg.replace(/\s/g,"")==""||u[0].name=="else"&&u[0].arg.replace(/\s/g,"")!=""||(h.push(u.shift()),h[h.length-1].name=="else"));)if(u.length>0&&u[0].action=="command"){if(u[0].name!="elseif"&&u[0].name!="else")break}else break;for(var m=0;m<h.length;m++){if((h[m].name=="if"||h[m].name=="elseif")&&this.is(h[m].expr))return this.run(JSON.parse(JSON.stringify(h[m].parsed)),()=>this.run(u,s));if(h[m].name=="else")return this.run(JSON.parse(JSON.stringify(h[m].parsed)),()=>this.run(u,s))}this.run(u,s)},context:function(r,n,a,t,o,s){if(a.replace(/\s+/g,"")=="")return this.run(o,s);this.context(u=>{var h=r.match(/\$([A-Za-z_][A-Za-z0-9_]*)/g);Array.isArray(h)?h=h.map(m=>m.substr(1)):h=[],u.runParsed(t,()=>{for(var m=0;m<h.length;m++)h[m]in u.variables&&(this.variables[h[m]]=JSON.parse(JSON.stringify(u.variables[h[m]])));this.run(o,s)})})},repeat:function(r,n,a,t,o,s){var u=0,h=+this.calc(n);if(r.replace(/\s/g,"")=="")return this.run(o,s);if(a.replace(/\s/g,"")=="")return this.run(o,s);if(!h)return this.run(o,s);var m=()=>{if(++u>h)return this.run(o,s);this.run(JSON.parse(JSON.stringify(t)),m)};m()},while:function(r,n,a,t,o,s){if(r.replace(/\s/g,"")=="")return this.run(o,s);if(a.replace(/\s/g,"")=="")return this.run(o,s);var u=()=>{this.is(n)?this.run(JSON.parse(JSON.stringify(t)),u):this.run(o,s)};u()},for:function(r,n,a,t,o,s){if(a.replace(/\s+/g,"")=="")return this.run(o,s);if(r=r.split(/;/g).map(h=>h.trim()),r.length!=3)return this.run(o,s);var u=()=>{if(this.is(r[1]))this.run(JSON.parse(JSON.stringify(t)),()=>{this.runCode(r[2],u)});else return this.run(o,s)};this.runCode(r[0],u)},step:function(r,n,a,t,o,s){if(a.replace(/\s+/g,"")=="")return this.run(o,s);var u=/\$([A-Za-z_][A-Za-z0-9_]*) +(-?[0-9]+(?:\.[0-9]+)?) +(-?[0-9]+(?:\.[0-9]+)?)(?: +([0-9](?:\.[0-9]+)?))?/,h=r.match(u);if(!h)return this.run(o,s);var m=h[1],f=+h[2],l=+h[3],p=+h[4]||1;if(f>l){var c=l;l=f,f=c}var g=()=>{this.setVariable(m,f),this.run(JSON.parse(JSON.stringify(t)),()=>(f+=p,f>l?this.run(o,s):g()))};g()},run:function(r,n,a,t,o,s){var u;(u=r.match(/^\$([A-Za-z_][A-Za-z0-9_]*)$/))?this.runCode(this.getVariable(u[1]),()=>this.run(o,s)):this.run(o,s)},switch:function(r,n,a,t,o,s){for(var u=this.parseText(r),h=0;h<t.length;h++)if(t[h].action=="command"){if(t[h].name=="case"&&this.parseText(t[h].arg)==u)return this.run(t[h].parsed,()=>this.run(o,s));if(t[h].name=="default")return this.run(t[h].parsed,()=>this.run(o,s))}this.run(o,s)}};_Storymatic.imports.string={parse:function(r,n,a,t,o,s){var u=/^\$([A-Za-z_][A-Za-z0-9_]*)$/,h;if(h=r.match(u)){var m=`${this.getVariable(h[1])}`;this.setVariable(h[1],this.parseText(m)),this.run(o,s)}else this.run(o,s)},newline:function(r,n,a,t,o,s){var u=/^\$([A-Za-z_][A-Za-z0-9_]*)$/,h=r.match(u);if(!h)return this.run(o,s);this.setVariable(h[1],this.getVariable(h[1])+`
`),this.run(o,s)},empty:function(r,n,a,t,o,s){var u=/^\$([A-Za-z_][A-Za-z0-9_]*)$/,h=r.match(u);if(!h)return this.run(o,s);this.setVariable(h[1],""),this.run(o,s)},substr:function(r,n,a,t,o,s){var u=/^\$([A-Za-z_][A-Za-z0-9_]*) +(-?[0-9]+)(?: +(-?[0-9]+))?$/,h;if(h=r.match(u)){var m=`${this.getVariable(h[1])}`,f=+h[2]>0?+h[2]-1:+h[2],l=+h[3]||void 0;this.setVariable(h[1],m.substr(f,l)),this.run(o,s)}else this.run(o,s)},substring:function(r,n,a,t,o,s){var u=/^\$([A-Za-z_][A-Za-z0-9_]*) +(-?[0-9]+)(?: +(-?[0-9]+))?$/,h;if(h=r.match(u)){var m=`${this.getVariable(h[1])}`,f=+h[2]>0?+h[2]-1:+h[2];h[3]&&(+h[3]>0?+h[3]-1:+h[3]),this.setVariable(h[1],m.substring(f,length)),this.run(o,s)}else this.run(o,s)},char:function(r,n,a,t,o,s){var u=/^\$([A-Za-z_][A-Za-z0-9_]*) +(-?[0-9]+)$/,h;if(h=r.match(u)){var m=`${this.getVariable(h[1])}`,f=+h[2]>0?+h[2]-1:+h[2];this.setVariable(h[1],m.charAt(f)),this.run(o,s)}else this.run(o,s)},switch_char:function(r,n,a,t,o,s){var u=/^\$([A-Za-z_][A-Za-z0-9_]*) +(-?[0-9]+)$/,h;if(h=r.match(u)){var m=`${this.getVariable(h[1])}`,f=+h[2]>0?+h[2]-1:+h[2];m=m.charAt(f)}else this.run(o,s);for(var l=0;l<t.length;l++)if(t[l].action=="command"){if(t[l].name=="case"&&this.parseText(t[l].arg)==m)return this.run(t[l].parsed,()=>this.run(o,s));if(t[l].name=="default")return this.run(t[l].parsed,()=>this.run(o,s))}this.run(o,s)},lowercase:function(r,n,a,t,o,s){var u=/^\$([A-Za-z_][A-Za-z0-9_]*)$/,h=r.match(u);if(!h)return this.run(o,s);this.setVariable(h[1],`${this.getVariable(h[1])}`.toLowerCase()),this.run(o,s)},uppercase:function(r,n,a,t,o,s){var u=/^\$([A-Za-z_][A-Za-z0-9_]*)$/,h=r.match(u);if(!h)return this.run(o,s);this.setVariable(h[1],`${this.getVariable(h[1])}`.toUpperCase()),this.run(o,s)},replace:function(r,n,a,t,o,s){var u=/^\$([A-Za-z_][A-Za-z0-9_]*) +\/((?:[^\/]|\\\/)+)\/([gimsuy]{0,6}) +?(.*)$/,h=r.match(u);if(!h)return this.run(o,s);var m=`${this.getVariable(h[1])}`,f=new RegExp(h[2],h[3]),l=h[4];this.setVariable(h[1],m.replace(f,l)),this.run(o,s)}};_Storymatic.imports.number={randint:function(r,n,a,t,o,s){var u=/^\$([A-Za-z_][A-Za-z0-9_]*) +(-?[0-9]+) +(-?[0-9]+)$/,h=r.match(u);if(!h)return this.run(o,s);var m=+h[2],f=+h[3];if(m>f){var l=m+0;m=f,f=l}this.setVariable(h[1],Math.floor((f-m+1)*Math.random())+m),this.run(o,s)},floor:function(r,n,a,t,o,s){var u=/^\$([A-Za-z_][A-Za-z0-9_]*)$/,h=r.match(u);if(!h)return this.run(o,s);this.setVariable(h[1],Math.floor(+this.getvariable(h[1]))),this.run(o,s)},ceil:function(r,n,a,t,o,s){var u=/^\$([A-Za-z_][A-Za-z0-9_]*)$/,h=r.match(u);if(!h)return this.run(o,s);this.setVariable(h[1],Math.ceil(+this.getvariable(h[1]))),this.run(o,s)}};_Storymatic.imports.sync={exists:function(r,n,a,t,o,s){var u=r.match(/^\$([A-Za-z_][A-Za-z0-9_]*)$/);if(u&&a.replace(/\s+/g,"")!=""){var a=new URL(window.location.href).searchParams.get("code"),h=`storymatic_${a}_${u[1]}`;actions.getLocal(h,f=>{typeof f[h]=="string"?this.run(t,()=>this.run(o,s)):o.length>0&&o[0].action=="command"&&o[0].name=="else"?this.run(o[0].parsed,()=>this.run(o.filter((l,p)=>p>0),s)):this.run(o,s)})}else this.run(o,s)},load:function(r,n,a,t,o,s){var u;if(u=r.match(/^\$([A-Za-z_][A-Za-z0-9_]*) +(.+)$/)){var a=new URL(window.location.href).searchParams.get("code"),h=`storymatic_${a}_${u[1]}`;actions.getLocal(h,f=>{typeof f[h]=="string"?(this.setVariable(u[1],f[h]),this.run(o,s)):(this.setVariable(u[1],this.parseText(u[2])),this.run(o,s))})}else this.run(o,s)},save:function(r,n,a,t,o,s){var u;if(u=r.match(/^\$([A-Za-z_][A-Za-z0-9_]*)$/)){var a=new URL(window.location.href).searchParams.get("code"),h=`storymatic_${a}_${u[1]}`,m={};m[h]=`${this.getVariable(u[1])}`,actions.setLocal(m,()=>{this.run(o,s)})}else this.run(o,s)},reset:function(r,n,a,t,o,s){var u;if(u=r.match(/^\$([A-Za-z_][A-Za-z0-9_]*)$/)){var a=new URL(window.location.href).searchParams.get("code"),h=`storymatic_${a}_${u[1]}`,m={};m[h]=null,actions.setLocal(m,()=>this.run(o,s))}else this.run(o,s)}};const actions={};actions.getLocal=function(r,n){var a={};if(typeof r=="object"&&r.length===0){for(var t=0;t<localStorage.length;t++){var o=localStorage.key(t);o.slice(0,6)=="local-"&&(a[o.slice(6)]=localStorage.getItem(o))}return a}typeof r=="string"&&(r=[r]);for(var t=0;t<r.length;t++)a[r[t]]=actions.storage.get("local-"+r[t])["local-"+r[t]];n(a)};actions.setLocal=function(r,n){var a={};for(var t in r)a["local-"+t]=r[t];actions.storage.set(a),typeof n=="function"&&n("")};const _sfc_main$1=defineComponent({__name:"Viewer2",props:{code:null},setup(r){const n=r,{console:a,field:t,messages:o,onKey:s,onSelect:u,onSubmit:h,placeholder:m}=useCompleteConsole();_Storymatic.tooltip=(l,p)=>{m.value=l,p==null||p()},_Storymatic.write=(l,p)=>{a.log(l),p==null||p()},_Storymatic.print=(l,p)=>{_Storymatic.write(l,()=>{_Storymatic.tooltip("Press Enter to continue...",()=>{_Storymatic.waitFor("Enter",!0,()=>{_Storymatic.tooltip("",p)})})})},_Storymatic.image=(l,p)=>{const c=new Image;c.src=l,a.log(c),p==null||p()},_Storymatic.line=l=>{a.line(),l==null||l()},_Storymatic.clear=l=>{a.clear(),l==null||l()},_Storymatic.type=(l,p,c)=>{const{el:g,done:d}=useTypewrite(l,p);a.log(g),d.then(c)},_Storymatic.input=async(l,p)=>{const c=await a.prompt(l,!0);p==null||p(c)},_Storymatic.choice=async(l,p,c)=>{const g=await a.select(l,$({},p));c==null||c(g)},_Storymatic.waitFor=async(l,p,c)=>{Object.assign(window,{c:a}),p?a.key(l).then(()=>c==null?void 0:c(l)):a.bindKey(l,()=>c==null?void 0:c(l))};let f;return useNavLink({title:"Execute",onEnter:!0,action(){a.clear(),f&&(f.stopped=!0),f=new _Storymatic(n.code,l=>{_Storymatic.waitingFor.splice(0,_Storymatic.waitingFor.length),_Storymatic.tooltip("",()=>{_Storymatic.clear(()=>{l.start()})})}),Object.assign(window,{prev:f})}}),(l,p)=>(openBlock(),createBlock(Console,{field:unref(t),"onUpdate:field":p[0]||(p[0]=c=>isRef(t)?t.value=c:null),messages:unref(o),"onUpdate:messages":p[1]||(p[1]=c=>isRef(o)?o.value=c:null),placeholder:unref(m),onKey:unref(s),onSelect:unref(u),onSubmit:unref(h)},null,8,["field","messages","placeholder","onKey","onSelect","onSubmit"]))}});var v2_vue_vue_type_style_index_0_scoped_true_lang=(()=>`.viewer[data-v-d804a772]{width:min(400px,100%)}@media screen and (max-width: 850px){.stack.stack[data-v-d804a772]{flex-direction:column}.viewer[data-v-d804a772]{width:100%}}
`)();const _sfc_main=defineComponent({__name:"v2",setup(r){const n=useLocationHash();return(a,t)=>(openBlock(),createBlock(DocumentDisplay,{center:"","explicit-height":"","max-width":""},{default:withCtx(()=>[createVNode(HStack,{class:"stack",space:.75,style:{height:"100%","justify-content":"center"}},{default:withCtx(()=>[createVNode(_sfc_main$2,{modelValue:unref(n),"onUpdate:modelValue":t[0]||(t[0]=o=>isRef(n)?n.value=o:null),round:"",style:{flex:"1","max-width":"800px"}},null,8,["modelValue"]),createVNode(_sfc_main$1,{class:"viewer",code:unref(n)},null,8,["code"])]),_:1},8,["space"])]),_:1}))}});var v2=_export_sfc(_sfc_main,[["__scopeId","data-v-d804a772"]]);export{v2 as default};