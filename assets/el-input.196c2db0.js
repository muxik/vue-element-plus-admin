import{H as e,bH as a,V as t,r as o,aJ as n,E as l,aA as s,F as i,N as r,b9 as u,al as p,d,an as c,b1 as f,U as v,ao as m,R as y,aY as x,bg as b,bI as g,bJ as h,aU as w,v as S,M as $,aD as k,C as z,b6 as C,J as I,aG as E,aX as F,o as P,c as j,Y as A,$ as M,n as V,a as N,z as _,e as B,k as R,w as H,Z as O,P as T,X as W,g as K,az as J,as as L,ak as U,t as X,a0 as q,_ as D,aj as Y,am as Z,a1 as G}from"./index.c89981a6.js";import{U as Q}from"./event.fa25aaef.js";import{u as ee,a as ae}from"./index.68586847.js";import{i as te}from"./el-popper.bf812a74.js";const oe=e=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e),ne=["class","style"],le=/^on[A-Z]/,se=(o={})=>{const{excludeListeners:n=!1,excludeKeys:l}=o,s=e((()=>((null==l?void 0:l.value)||[]).concat(ne))),i=t();return e(i?()=>{var e;return a(Object.entries(null==(e=i.proxy)?void 0:e.$attrs).filter((([e])=>!(s.value.includes(e)||n&&le.test(e)))))}:()=>({}))};let ie;const re=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function ue(e,a=1,t){var o;ie||(ie=document.createElement("textarea"),document.body.appendChild(ie));const{paddingSize:l,borderSize:s,boxSizing:i,contextStyle:r}=function(e){const a=window.getComputedStyle(e),t=a.getPropertyValue("box-sizing"),o=Number.parseFloat(a.getPropertyValue("padding-bottom"))+Number.parseFloat(a.getPropertyValue("padding-top")),n=Number.parseFloat(a.getPropertyValue("border-bottom-width"))+Number.parseFloat(a.getPropertyValue("border-top-width"));return{contextStyle:re.map((e=>`${e}:${a.getPropertyValue(e)}`)).join(";"),paddingSize:o,borderSize:n,boxSizing:t}}(e);ie.setAttribute("style",`${r};\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n`),ie.value=e.value||e.placeholder||"";let u=ie.scrollHeight;const p={};"border-box"===i?u+=s:"content-box"===i&&(u-=l),ie.value="";const d=ie.scrollHeight-l;if(n(a)){let e=d*a;"border-box"===i&&(e=e+l+s),u=Math.max(e,u),p.minHeight=`${e}px`}if(n(t)){let e=d*t;"border-box"===i&&(e=e+l+s),u=Math.min(e,u)}return p.height=`${u}px`,null==(o=ie.parentNode)||o.removeChild(ie),ie=void 0,p}const pe=l({id:{type:String,default:void 0},size:s,disabled:Boolean,modelValue:{type:i([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:i([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String,default:""},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:r,default:""},prefixIcon:{type:r,default:""},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:i([Object,Array,String]),default:()=>u({})}}),de=["role"],ce=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder"],fe=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder"];const ve=G(D(d({name:"ElInput",inheritAttrs:!1,props:pe,emits:{[Q]:e=>p(e),input:e=>p(e),change:e=>p(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},setup(a,{expose:n,emit:l}){const s=a,i={suffix:"append",prefix:"prepend"},r=t(),u=c(),p=f(),d=e((()=>{const e={};return"combobox"===s.containerRole&&(e["aria-haspopup"]=u["aria-haspopup"],e["aria-owns"]=u["aria-owns"],e["aria-expanded"]=u["aria-expanded"]),e})),D=se({excludeKeys:e((()=>Object.keys(d.value)))}),{form:G,formItem:ne}=ee(),{inputId:le}=ae(s,{formItemContext:ne}),ie=v(),re=m(),pe=y("input"),ve=y("textarea"),me=x(),ye=x(),xe=o(!1),be=o(!1),ge=o(!1),he=o(!1),we=o(),Se=x(s.inputStyle),$e=e((()=>me.value||ye.value)),ke=e((()=>{var e;return null!=(e=null==G?void 0:G.statusIcon)&&e})),ze=e((()=>(null==ne?void 0:ne.validateState)||"")),Ce=e((()=>ze.value&&b[ze.value])),Ie=e((()=>he.value?g:h)),Ee=e((()=>[u.style,s.inputStyle])),Fe=e((()=>[s.inputStyle,Se.value,{resize:s.resize}])),Pe=e((()=>te(s.modelValue)?"":String(s.modelValue))),je=e((()=>s.clearable&&!re.value&&!s.readonly&&!!Pe.value&&(xe.value||be.value))),Ae=e((()=>s.showPassword&&!re.value&&!s.readonly&&!!Pe.value&&(!!Pe.value||xe.value))),Me=e((()=>s.showWordLimit&&!!D.value.maxlength&&("text"===s.type||"textarea"===s.type)&&!re.value&&!s.readonly&&!s.showPassword)),Ve=e((()=>Array.from(Pe.value).length)),Ne=e((()=>!!Me.value&&Ve.value>Number(D.value.maxlength))),_e=e((()=>!!p.suffix||!!s.suffixIcon||je.value||s.showPassword||Me.value||!!ze.value&&ke.value)),[Be,Re]=function(e){const a=o();return[function(){if(null==e.value)return;const{selectionStart:t,selectionEnd:o,value:n}=e.value;if(null==t||null==o)return;const l=n.slice(0,Math.max(0,t)),s=n.slice(Math.max(0,o));a.value={selectionStart:t,selectionEnd:o,value:n,beforeTxt:l,afterTxt:s}},function(){if(null==e.value||null==a.value)return;const{value:t}=e.value,{beforeTxt:o,afterTxt:n,selectionStart:l}=a.value;if(null==o||null==n||null==l)return;let s=t.length;if(t.endsWith(n))s=t.length-n.length;else if(t.startsWith(o))s=o.length;else{const e=o[l-1],a=t.indexOf(e,l-1);-1!==a&&(s=a+1)}e.value.setSelectionRange(s,s)}]}(me);w(ye,(e=>{if(!Me.value||"both"!==s.resize)return;const a=e[0],{width:t}=a.contentRect;we.value={right:`calc(100% - ${t+15+6}px)`}}));const He=()=>{const{type:e,autosize:a}=s;if(Y&&"textarea"===e)if(a){const e=Z(a)?a.minRows:void 0,t=Z(a)?a.maxRows:void 0;Se.value={...ue(ye.value,e,t)}}else Se.value={minHeight:ue(ye.value).minHeight}},Oe=()=>{const e=$e.value;e&&e.value!==Pe.value&&(e.value=Pe.value)},Te=e=>{const{el:a}=r.vnode;if(!a)return;const t=Array.from(a.querySelectorAll(`.${pe.e(e)}`)).find((e=>e.parentNode===a));if(!t)return;const o=i[e];p[o]?t.style.transform=`translateX(${"suffix"===e?"-":""}${a.querySelector(`.${pe.be("group",o)}`).offsetWidth}px)`:t.removeAttribute("style")},We=()=>{Te("prefix"),Te("suffix")},Ke=async e=>{Be();let{value:a}=e.target;s.formatter&&(a=s.parser?s.parser(a):a,a=s.formatter(a)),ge.value||a!==Pe.value&&(l(Q,a),l("input",a),await $(),Oe(),Re())},Je=e=>{l("change",e.target.value)},Le=e=>{l("compositionstart",e),ge.value=!0},Ue=e=>{var a;l("compositionupdate",e);const t=null==(a=e.target)?void 0:a.value,o=t[t.length-1]||"";ge.value=!oe(o)},Xe=e=>{l("compositionend",e),ge.value&&(ge.value=!1,Ke(e))},qe=()=>{he.value=!he.value,De()},De=async()=>{var e;await $(),null==(e=$e.value)||e.focus()},Ye=e=>{xe.value=!0,l("focus",e)},Ze=e=>{var a;xe.value=!1,l("blur",e),s.validateEvent&&(null==(a=null==ne?void 0:ne.validate)||a.call(ne,"blur").catch((e=>k())))},Ge=e=>{be.value=!1,l("mouseleave",e)},Qe=e=>{be.value=!0,l("mouseenter",e)},ea=e=>{l("keydown",e)},aa=()=>{l(Q,""),l("change",""),l("clear"),l("input","")};return S((()=>s.modelValue),(()=>{var e;$((()=>He())),s.validateEvent&&(null==(e=null==ne?void 0:ne.validate)||e.call(ne,"change").catch((e=>k())))})),S(Pe,(()=>Oe())),S((()=>s.type),(async()=>{await $(),Oe(),He(),We()})),z((async()=>{!s.formatter&&s.parser,Oe(),We(),await $(),He()})),C((async()=>{await $(),We()})),n({input:me,textarea:ye,ref:$e,textareaStyle:Fe,autosize:I(s,"autosize"),focus:De,blur:()=>{var e;return null==(e=$e.value)?void 0:e.blur()},select:()=>{var e;null==(e=$e.value)||e.select()},clear:aa,resizeTextarea:He}),(e,a)=>E((P(),j("div",W(N(d),{class:["textarea"===e.type?N(ve).b():N(pe).b(),N(pe).m(N(ie)),N(pe).is("disabled",N(re)),N(pe).is("exceed",N(Ne)),{[N(pe).b("group")]:e.$slots.prepend||e.$slots.append,[N(pe).bm("group","append")]:e.$slots.append,[N(pe).bm("group","prepend")]:e.$slots.prepend,[N(pe).m("prefix")]:e.$slots.prefix||e.prefixIcon,[N(pe).m("suffix")]:e.$slots.suffix||e.suffixIcon||e.clearable||e.showPassword,[N(pe).bm("suffix","password-clear")]:N(je)&&N(Ae)},e.$attrs.class],style:N(Ee),role:e.containerRole,onMouseenter:Qe,onMouseleave:Ge}),[A(" input "),"textarea"!==e.type?(P(),j(M,{key:0},[A(" prepend slot "),e.$slots.prepend?(P(),j("div",{key:0,class:V(N(pe).be("group","prepend"))},[_(e.$slots,"prepend")],2)):A("v-if",!0),B("div",{class:V([N(pe).e("wrapper"),N(pe).is("focus",xe.value)])},[A(" prefix slot "),e.$slots.prefix||e.prefixIcon?(P(),j("span",{key:0,class:V(N(pe).e("prefix"))},[B("span",{class:V(N(pe).e("prefix-inner"))},[_(e.$slots,"prefix"),e.prefixIcon?(P(),R(N(T),{key:0,class:V(N(pe).e("icon"))},{default:H((()=>[(P(),R(O(e.prefixIcon)))])),_:1},8,["class"])):A("v-if",!0)],2)],2)):A("v-if",!0),B("input",W({id:N(le),ref_key:"input",ref:me,class:N(pe).e("inner")},N(D),{type:e.showPassword?he.value?"text":"password":e.type,disabled:N(re),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,onCompositionstart:Le,onCompositionupdate:Ue,onCompositionend:Xe,onInput:Ke,onFocus:Ye,onBlur:Ze,onChange:Je,onKeydown:ea}),null,16,ce),A(" suffix slot "),N(_e)?(P(),j("span",{key:1,class:V(N(pe).e("suffix"))},[B("span",{class:V(N(pe).e("suffix-inner"))},[N(je)&&N(Ae)&&N(Me)?A("v-if",!0):(P(),j(M,{key:0},[_(e.$slots,"suffix"),e.suffixIcon?(P(),R(N(T),{key:0,class:V(N(pe).e("icon"))},{default:H((()=>[(P(),R(O(e.suffixIcon)))])),_:1},8,["class"])):A("v-if",!0)],64)),N(je)?(P(),R(N(T),{key:1,class:V([N(pe).e("icon"),N(pe).e("clear")]),onMousedown:L(N(U),["prevent"]),onClick:aa},{default:H((()=>[K(N(J))])),_:1},8,["class","onMousedown"])):A("v-if",!0),N(Ae)?(P(),R(N(T),{key:2,class:V([N(pe).e("icon"),N(pe).e("password")]),onClick:qe},{default:H((()=>[(P(),R(O(N(Ie))))])),_:1},8,["class"])):A("v-if",!0),N(Me)?(P(),j("span",{key:3,class:V(N(pe).e("count"))},[B("span",{class:V(N(pe).e("count-inner"))},X(N(Ve))+" / "+X(N(D).maxlength),3)],2)):A("v-if",!0),N(ze)&&N(Ce)&&N(ke)?(P(),R(N(T),{key:4,class:V([N(pe).e("icon"),N(pe).e("validateIcon"),N(pe).is("loading","validating"===N(ze))])},{default:H((()=>[(P(),R(O(N(Ce))))])),_:1},8,["class"])):A("v-if",!0)],2)],2)):A("v-if",!0)],2),A(" append slot "),e.$slots.append?(P(),j("div",{key:1,class:V(N(pe).be("group","append"))},[_(e.$slots,"append")],2)):A("v-if",!0)],64)):(P(),j(M,{key:1},[A(" textarea "),B("textarea",W({id:N(le),ref_key:"textarea",ref:ye,class:N(ve).e("inner")},N(D),{tabindex:e.tabindex,disabled:N(re),readonly:e.readonly,autocomplete:e.autocomplete,style:N(Fe),"aria-label":e.label,placeholder:e.placeholder,onCompositionstart:Le,onCompositionupdate:Ue,onCompositionend:Xe,onInput:Ke,onFocus:Ye,onBlur:Ze,onChange:Je,onKeydown:ea}),null,16,fe),N(Me)?(P(),j("span",{key:0,style:q(we.value),class:V(N(pe).e("count"))},X(N(Ve))+" / "+X(N(D).maxlength),7)):A("v-if",!0)],64))],16,de)),[[F,"hidden"!==e.type]])}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]));export{ve as E,oe as i,se as u};
