import{d as e,a7 as t,r as a,C as s,x as l,o as r,c as o,g as i,w as n,a as c,e as p,n as d,j as f,y as x,t as m,z as b,l as u}from"./index.976d50ce.js";import{E as _}from"./el-card.f8734a1a.js";import{E as g}from"./el-button.c8459927.js";import{_ as v}from"./Sticky.b25ae2b9.js";const h={class:"text-16px font-700"},$={style:{padding:"var(--app-content-padding)"}},k=e({__name:"ContentDetailWrap",props:{title:t.string.def(""),message:t.string.def("")},emits:["back"],setup(e,{emit:t}){const{t:k}=u(),{getPrefixCls:j}=f(),y=j("content-detail-wrap"),w=a(85),C=a();return s((()=>{w.value=C.value.getBoundingClientRect().top})),(a,s)=>{const f=l("Icon");return r(),o("div",{class:d([`${c(y)}-container`,"relative bg-[#fff]"]),ref_key:"contentDetailWrap",ref:C},[i(c(v),{offset:w.value},{default:n((()=>[p("div",{class:d([`${c(y)}-header`,"flex border-bottom-1 h-50px items-center text-center bg-white pr-10px"])},[p("div",{class:d([`${c(y)}-header__back`,"flex pl-10px pr-10px "])},[i(c(g),{onClick:s[0]||(s[0]=e=>t("back"))},{default:n((()=>[i(f,{icon:"ep:arrow-left",class:"mr-5px"}),x(" "+m(c(k)("common.back")),1)])),_:1})],2),p("div",{class:d([`${c(y)}-header__title`,"flex flex-1  justify-center"])},[b(a.$slots,"title",{},(()=>[p("label",h,m(e.title),1)]))],2),p("div",{class:d([`${c(y)}-header__right`,"flex  pl-10px pr-10px"])},[b(a.$slots,"right")],2)],2)])),_:3},8,["offset"]),p("div",$,[i(c(_),{class:d([`${c(y)}-body`,"mb-20px"]),shadow:"never"},{default:n((()=>[p("div",null,[b(a.$slots,"default")])])),_:3},8,["class"])])],2)}}});export{k as _};
