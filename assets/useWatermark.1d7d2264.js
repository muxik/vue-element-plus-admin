import{_ as e}from"./ContentWrap.81130664.js";import{d as t,b as a,H as n,D as r,o,k as s,w as i,a as l,g as m,y as d,t as c,l as p}from"./index.c89981a6.js";import{E as u}from"./el-button.9191f867.js";import"./el-card.377296af.js";import"./el-popper.bf812a74.js";import"./index.ae55fe18.js";import"./index.68586847.js";const f=Symbol("watermark-dom");const k=t({__name:"useWatermark",setup(t){const k=a(),y=n((()=>k.getTitle)),{setWatermark:g,clear:h}=function(e=document.body){let t=()=>{};const a=f.toString(),n=()=>{const n=document.getElementById(a);if(n){const t=e;t&&t.removeChild(n)}window.removeEventListener("resize",t)},r=t=>{n();const r=document.createElement("canvas");r.width=300,r.height=240;const o=r.getContext("2d");o&&(o.rotate(-20*Math.PI/120),o.font="15px Vedana",o.fillStyle="rgba(0, 0, 0, 0.15)",o.textAlign="left",o.textBaseline="middle",o.fillText(t,r.width/20,r.height));const s=document.createElement("div");return s.id=a,s.style.pointerEvents="none",s.style.top="0px",s.style.left="0px",s.style.position="absolute",s.style.zIndex="100000000",s.style.width=document.documentElement.clientWidth+"px",s.style.height=document.documentElement.clientHeight+"px",s.style.background="url("+r.toDataURL("image/png")+") left top repeat",e&&e.appendChild(s),a};return{setWatermark:function(e){r(e),t=()=>{r(e)},window.addEventListener("resize",t)},clear:n}}(),{t:w}=p();return r((()=>{h()})),(t,a)=>(o(),s(l(e),{title:"useWatermark"},{default:i((()=>[m(l(u),{type:"primary",onClick:a[0]||(a[0]=e=>l(g)(l(y)))},{default:i((()=>[d(c(l(w)("watermarkDemo.createdWatermark")),1)])),_:1}),m(l(u),{type:"danger",onClick:l(h)},{default:i((()=>[d(c(l(w)("watermarkDemo.clearWatermark")),1)])),_:1},8,["onClick"]),m(l(u),{type:"warning",onClick:a[1]||(a[1]=e=>l(g)(`New${l(y)}`))},{default:i((()=>[d(c(l(w)("watermarkDemo.resetWatermark")),1)])),_:1})])),_:1}))}});export{k as default};
