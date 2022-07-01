import{d as a,a7 as t,s as l,J as e,C as r,H as n,v as s,a as i,o,c as u,t as c,n as p,j as m,bX as d}from"./index.976d50ce.js";const V=a({__name:"CountTo",props:{startVal:t.number.def(0),endVal:t.number.def(2021),duration:t.number.def(3e3),autoplay:t.bool.def(!0),decimals:t.number.validate((a=>a>=0)).def(0),decimal:t.string.def("."),separator:t.string.def(","),prefix:t.string.def(""),suffix:t.string.def(""),useEasing:t.bool.def(!0),easingFn:{type:Function,default:(a,t,l,e)=>l*(1-Math.pow(2,-10*a/e))*1024/1023+t}},emits:["mounted","callback"],setup(a,{expose:t,emit:V}){const f=a,{getPrefixCls:F}=m(),g=F("count-to"),S=a=>{const{decimals:t,decimal:l,separator:e,suffix:r,prefix:n}=f;a=Number(a).toFixed(t);const s=(a+="").split(".");let i=s[0];const o=s.length>1?l+s[1]:"",u=/(\d+)(\d{3})/;if(e&&!d(e))for(;u.test(i);)i=i.replace(u,"$1"+e+"$2");return n+i+o+r},b=l({localStartVal:f.startVal,displayValue:S(f.startVal),printVal:null,paused:!1,localDuration:f.duration,startTime:null,timestamp:null,remaining:null,rAF:null}),A=e(b,"displayValue");r((()=>{f.autoplay&&D(),V("mounted")}));const x=n((()=>f.startVal>f.endVal));s([()=>f.startVal,()=>f.endVal],(()=>{f.autoplay&&D()}));const D=()=>{const{startVal:a,duration:t}=f;b.localStartVal=a,b.startTime=null,b.localDuration=t,b.paused=!1,b.rAF=requestAnimationFrame(q)},y=()=>{cancelAnimationFrame(b.rAF)},T=()=>{b.startTime=null,b.localDuration=+b.remaining,b.localStartVal=+b.printVal,requestAnimationFrame(q)},q=a=>{const{useEasing:t,easingFn:l,endVal:e}=f;b.startTime||(b.startTime=a),b.timestamp=a;const r=a-b.startTime;b.remaining=b.localDuration-r,t?i(x)?b.printVal=b.localStartVal-l(r,0,b.localStartVal-e,b.localDuration):b.printVal=l(r,b.localStartVal,e-b.localStartVal,b.localDuration):i(x)?b.printVal=b.localStartVal-(b.localStartVal-e)*(r/b.localDuration):b.printVal=b.localStartVal+(e-b.localStartVal)*(r/b.localDuration),i(x)?b.printVal=b.printVal<e?e:b.printVal:b.printVal=b.printVal>e?e:b.printVal,b.displayValue=S(b.printVal),r<b.localDuration?b.rAF=requestAnimationFrame(q):V("callback")};return t({pauseResume:()=>{b.paused?(T(),b.paused=!1):(y(),b.paused=!0)},reset:()=>{b.startTime=null,cancelAnimationFrame(b.rAF),b.displayValue=S(f.startVal)},start:D,pause:y}),(a,t)=>(o(),u("span",{class:p(i(g))},c(i(A)),3))}});export{V as _};
