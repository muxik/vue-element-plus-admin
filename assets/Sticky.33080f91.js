import{_ as t}from"./ContentWrap.259c4c25.js";import{E as e,F as a,aJ as n,aK as o,d as l,R as s,aY as p,ct as i,cu as r,r as u,H as f,v as m,C as x,av as g,bh as v,a_ as d,o as c,c as y,e as C,z as b,n as h,a as k,a0 as _,_ as j,a1 as S,k as $,w,l as E,g as T}from"./index.976d50ce.js";import{_ as z}from"./Sticky.b25ae2b9.js";import{C as A}from"./event.fa25aaef.js";import{a as I}from"./scroll.674261f8.js";import"./el-card.f8734a1a.js";import"./el-popper.8324f673.js";import"./index.caa1c62b.js";const N=S(j(l({name:"ElAffix",props:e({zIndex:{type:a([Number,String]),default:100},target:{type:String,default:""},offset:{type:Number,default:0},position:{type:String,values:["top","bottom"],default:"top"}}),emits:{scroll:({scrollTop:t,fixed:e})=>n(t)&&o(e),[A]:t=>o(t)},setup(t,{expose:e,emit:a}){const n=t,o=s("affix"),l=p(),j=p(),S=p(),{height:$}=i(),{height:w,width:E,top:T,bottom:z,update:A}=r(j),N=r(l),W=u(!1),Y=u(0),q=u(0),D=f((()=>({height:W.value?`${w.value}px`:"",width:W.value?`${E.value}px`:""}))),F=f((()=>{if(!W.value)return{};const t=n.offset?`${n.offset}px`:0;return{height:`${w.value}px`,width:`${E.value}px`,top:"top"===n.position?t:"",bottom:"bottom"===n.position?t:"",transform:q.value?`translateY(${q.value}px)`:"",zIndex:n.zIndex}})),H=()=>{if(S.value)if(Y.value=S.value instanceof Window?document.documentElement.scrollTop:S.value.scrollTop||0,"top"===n.position)if(n.target){const t=N.bottom.value-n.offset-w.value;W.value=n.offset>T.value&&N.bottom.value>0,q.value=t<0?t:0}else W.value=n.offset>T.value;else if(n.target){const t=$.value-N.top.value-n.offset-w.value;W.value=$.value-n.offset<z.value&&$.value>N.top.value,q.value=t<0?-t:0}else W.value=$.value-n.offset<z.value};return m(W,(t=>a("change",t))),x((()=>{var t;n.target?(l.value=null!=(t=document.querySelector(n.target))?t:void 0,l.value||g("ElAffix",`Target is not existed: ${n.target}`)):l.value=document.documentElement,S.value=I(j.value,!0),A()})),v(S,"scroll",(()=>{a("scroll",{scrollTop:Y.value,fixed:W.value})})),d(H),e({update:H}),(t,e)=>(c(),y("div",{ref_key:"root",ref:j,class:h(k(o).b()),style:_(k(D))},[C("div",{class:h({[k(o).m("fixed")]:W.value}),style:_(k(F))},[b(t.$slots,"default")],6)],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/affix/src/affix.vue"]]));const W=C("div",{style:{padding:"10px","background-color":"lightblue"}}," Sticky 距离顶部90px ",-1),Y=C("p",{style:{margin:"80px"}},"Content",-1),q=C("p",{style:{margin:"80px"}},"Content",-1),D=C("div",{style:{padding:"10px","background-color":"lightblue"}},"Affix 距离顶部150px ",-1),F=C("p",{style:{margin:"80px"}},"Content",-1),H=C("p",{style:{margin:"80px"}},"Content",-1),J=C("p",{style:{margin:"80px"}},"Content",-1),K=C("p",{style:{margin:"80px"}},"Content",-1),R=C("p",{style:{margin:"80px"}},"Content",-1),B=C("p",{style:{margin:"80px"}},"Content",-1),G=C("p",{style:{margin:"80px"}},"Content",-1),L=C("p",{style:{margin:"80px"}},"Content",-1),M=C("p",{style:{margin:"80px"}},"Content",-1),O=C("p",{style:{margin:"80px"}},"Content",-1),P=C("p",{style:{margin:"80px"}},"Content",-1),Q=C("p",{style:{margin:"80px"}},"Content",-1),U=C("p",{style:{margin:"80px"}},"Content",-1),V=C("p",{style:{margin:"80px"}},"Content",-1),X=C("p",{style:{margin:"80px"}},"Content",-1),Z=C("p",{style:{margin:"80px"}},"Content",-1),tt=C("p",{style:{margin:"80px"}},"Content",-1),et=C("p",{style:{margin:"80px"}},"Content",-1),at=C("p",{style:{margin:"80px"}},"Content",-1),nt=C("p",{style:{margin:"80px"}},"Content",-1),ot=C("p",{style:{margin:"80px"}},"Content",-1),lt=C("p",{style:{margin:"80px"}},"Content",-1),st=C("p",{style:{margin:"80px"}},"Content",-1),pt=C("p",{style:{margin:"80px"}},"Content",-1),it=C("p",{style:{margin:"80px"}},"Content",-1),rt=C("p",{style:{margin:"80px"}},"Content",-1),ut=C("div",{style:{padding:"10px","background-color":"lightblue"}},"Affix 距离底部150px ",-1),ft=C("p",{style:{margin:"80px"}},"Content",-1),mt=C("p",{style:{margin:"80px"}},"Content",-1),xt=C("div",{style:{padding:"10px","background-color":"lightblue"}}," Sticky 距离底部90px ",-1),gt=C("p",{style:{margin:"80px"}},"Content",-1),vt=C("p",{style:{margin:"80px"}},"Content",-1),dt=l({__name:"Sticky",setup(e){const{t:a}=E();return(e,n)=>(c(),$(k(t),{title:k(a)("stickyDemo.sticky")},{default:w((()=>[T(k(z),{offset:90},{default:w((()=>[W])),_:1}),Y,q,T(k(N),{offset:150},{default:w((()=>[D])),_:1}),F,H,J,K,R,B,G,L,M,O,P,Q,U,V,X,Z,tt,et,at,nt,ot,lt,st,pt,it,rt,T(k(N),{offset:150,position:"bottom"},{default:w((()=>[ut])),_:1}),ft,mt,T(k(z),{offset:90,position:"bottom"},{default:w((()=>[xt])),_:1}),gt,vt])),_:1},8,["title"]))}});export{dt as default};
