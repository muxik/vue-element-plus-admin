import{d as e,a7 as r,o as s,c as t,e as a,t as o,g as n,w as l,a as i,l as m,y as u}from"./index.c89981a6.js";import{E as p}from"./el-button.9191f867.js";const c={class:"flex justify-center"},d={class:"text-center"},v=["src"],x={class:"text-14px text-[var(--el-color-info)]"},g={class:"mt-20px"},f=e({__name:"Error",props:{type:r.string.validate((e=>["404","500","403"].includes(e))).def("404")},emits:["errorClick"],setup(e,{emit:r}){const f=e,{t:y}=m(),T={404:{url:"/vue-element-plus-admin/assets/404.904e236c.svg",message:y("error.pageError"),buttonText:y("error.returnToHome")},500:{url:"/vue-element-plus-admin/assets/500.40f0978f.svg",message:y("error.networkError"),buttonText:y("error.returnToHome")},403:{url:"/vue-element-plus-admin/assets/403.7832526d.svg",message:y("error.noPermission"),buttonText:y("error.returnToHome")}},b=()=>{r("errorClick",f.type)};return(r,m)=>(s(),t("div",c,[a("div",d,[a("img",{width:"350",src:T[e.type].url,alt:""},null,8,v),a("div",x,o(T[e.type].message),1),a("div",g,[n(i(p),{type:"primary",onClick:b},{default:l((()=>[u(o(T[e.type].buttonText),1)])),_:1})])])]))}});export{f as _};
