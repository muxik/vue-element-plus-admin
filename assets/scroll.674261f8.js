import{aj as e,b$ as t}from"./index.976d50ce.js";const o=(o,n)=>{if(!e)return!1;const r={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(n)],l=t(o,r);return["scroll","auto","overlay"].some((e=>l.includes(e)))},n=(t,n)=>{if(!e)return;let r=t;for(;r;){if([window,document,document.documentElement].includes(r))return window;if(o(r,n))return r;r=r.parentNode}return r};let r;const l=()=>{var t;if(!e)return 0;if(void 0!==r)return r;const o=document.createElement("div");o.className="el-scrollbar__wrap",o.style.visibility="hidden",o.style.width="100px",o.style.position="absolute",o.style.top="-9999px",document.body.appendChild(o);const n=o.offsetWidth;o.style.overflow="scroll";const l=document.createElement("div");l.style.width="100%",o.appendChild(l);const s=l.offsetWidth;return null==(t=o.parentNode)||t.removeChild(o),r=n-s,r};function s(t,o){if(!e)return;if(!o)return void(t.scrollTop=0);const n=[];let r=o.offsetParent;for(;null!==r&&t!==r&&t.contains(r);)n.push(r),r=r.offsetParent;const l=o.offsetTop+n.reduce(((e,t)=>e+t.offsetTop),0),s=l+o.offsetHeight,i=t.scrollTop,c=i+t.clientHeight;l<i?t.scrollTop=l:s>c&&(t.scrollTop=s-t.clientHeight)}export{n as a,l as g,s};
