import{F as e}from"./Form.92ef4b20.js";import{d as i,a7 as a,r as t,H as o,x as n,o as s,c as l,g as r,w as c,a as d,a0 as m,k as u,Y as f,$ as p,y as h,t as y,l as v,ce as x,bj as b}from"./index.976d50ce.js";import{E as g}from"./el-button.c8459927.js";import{u as k}from"./useForm.cb9836af.js";const w={key:0},F=i({__name:"Search",props:{schema:{type:Array,default:()=>[]},isCol:a.bool.def(!1),labelWidth:a.oneOfType([String,Number]).def("auto"),layout:a.string.validate((e=>["inline","bottom"].includes(e))).def("inline"),buttomPosition:a.string.validate((e=>["left","center","right"].includes(e))).def("center"),showSearch:a.bool.def(!0),showReset:a.bool.def(!0),expand:a.bool.def(!1),expandField:a.string.def(""),inline:a.bool.def(!0)},emits:["search","reset"],setup(i,{emit:a}){const F=i,{t:_}=v(),C=t(!0),R=o((()=>{let e=x(F.schema);if(F.expand&&F.expandField&&!d(C)){const i=b(e,(e=>e.field===F.expandField));if(i>-1){const a=e.length;e.splice(i+1,a)}}return"inline"===F.layout&&(e=e.concat([{field:"action",formItemProps:{labelWidth:"0px"}}])),e})),{register:j,elFormRef:S,methods:q}=k(),P=async()=>{var e;await(null==(e=d(S))?void 0:e.validate((async e=>{if(e){const{getFormData:e}=q,i=await e();a("search",i)}})))},W=async()=>{var e;null==(e=d(S))||e.resetFields();const{getFormData:i}=q,t=await i();a("reset",t)},A=o((()=>({textAlign:F.buttomPosition}))),D=()=>{var e;null==(e=d(S))||e.resetFields(),C.value=!d(C)};return(a,t)=>{const o=n("Icon");return s(),l(p,null,[r(d(e),{"is-custom":!1,"label-width":i.labelWidth,"hide-required-asterisk":"",inline:i.inline,"is-col":i.isCol,schema:d(R),onRegister:d(j)},{action:c((()=>["inline"===i.layout?(s(),l("div",w,[i.showSearch?(s(),u(d(g),{key:0,type:"primary",onClick:P},{default:c((()=>[r(o,{icon:"ep:search",class:"mr-5px"}),h(" "+y(d(_)("common.query")),1)])),_:1})):f("v-if",!0),i.showReset?(s(),u(d(g),{key:1,onClick:W},{default:c((()=>[r(o,{icon:"ep:refresh-right",class:"mr-5px"}),h(" "+y(d(_)("common.reset")),1)])),_:1})):f("v-if",!0),i.expand?(s(),u(d(g),{key:2,text:"",onClick:D},{default:c((()=>[h(y(d(_)(C.value?"common.shrink":"common.expand"))+" ",1),r(o,{icon:C.value?"ant-design:up-outlined":"ant-design:down-outlined"},null,8,["icon"])])),_:1})):f("v-if",!0)])):f("v-if",!0)])),_:1},8,["label-width","inline","is-col","schema","onRegister"]),"bottom"===i.layout?(s(),l("div",{key:0,style:m(d(A))},[i.showSearch?(s(),u(d(g),{key:0,type:"primary",onClick:P},{default:c((()=>[r(o,{icon:"ep:search",class:"mr-5px"}),h(" "+y(d(_)("common.query")),1)])),_:1})):f("v-if",!0),i.showReset?(s(),u(d(g),{key:1,onClick:W},{default:c((()=>[r(o,{icon:"ep:refresh-right",class:"mr-5px"}),h(" "+y(d(_)("common.reset")),1)])),_:1})):f("v-if",!0),i.expand?(s(),u(d(g),{key:2,text:"",onClick:D},{default:c((()=>[h(y(d(_)(C.value?"common.shrink":"common.expand"))+" ",1),r(o,{icon:C.value?"ant-design:up-outlined":"ant-design:down-outlined"},null,8,["icon"])])),_:1})):f("v-if",!0)],4)):f("v-if",!0)],64)}}});export{F as _};
