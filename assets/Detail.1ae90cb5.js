import{D as e}from"./Descriptions.61d50e31.js";import{d as a,l as t,s as o,o as l,k as i,w as p,g as m,y as r,t as s,a as n,e as c}from"./index.976d50ce.js";import{E as d}from"./el-tag.645861df.js";import"./el-popper.8324f673.js";import"./index.caa1c62b.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./index.0eb31e20.js";import"./vnode.53e58796.js";import"./validator.467ff7cf.js";const f=["innerHTML"],u=a({__name:"Detail",props:{currentRow:{type:Object,default:()=>null}},setup(a){const{t:u}=t(),b=o([{field:"title",label:u("exampleDemo.title"),span:24},{field:"author",label:u("exampleDemo.author")},{field:"display_time",label:u("exampleDemo.displayTime")},{field:"importance",label:u("exampleDemo.importance")},{field:"pageviews",label:u("exampleDemo.pageviews")},{field:"content",label:u("exampleDemo.content"),span:24}]);return(t,o)=>(l(),i(n(e),{schema:b,data:a.currentRow||{}},{importance:p((({row:e})=>[m(n(d),{type:1===e.importance?"success":2===e.importance?"warning":"danger"},{default:p((()=>[r(s(1===e.importance?n(u)("tableDemo.important"):2===e.importance?n(u)("tableDemo.good"):n(u)("tableDemo.commonly")),1)])),_:2},1032,["type"])])),content:p((({row:e})=>[c("div",{innerHTML:e.content},null,8,f)])),_:1},8,["schema","data"]))}});export{u as default};
