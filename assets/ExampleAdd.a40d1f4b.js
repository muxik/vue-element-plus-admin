import e from"./Write.9123f2d2.js";import{_ as a}from"./ContentDetailWrap.72bbcc8a.js";import{d as t,u as i,r,o,k as s,w as m,a as p,l,g as d,y as f,t as n}from"./index.c89981a6.js";import{E as j}from"./el-button.9191f867.js";import{s as c}from"./index.39d8d6da.js";import{u}from"./useEmitt.e2c937fb.js";import"./Form.6c4fc45b.js";import"./el-col.f8fe7e78.js";import"./el-popper.bf812a74.js";import"./index.ae55fe18.js";import"./el-input.196c2db0.js";import"./event.fa25aaef.js";import"./index.68586847.js";import"./el-tag.b693244d.js";import"./tsxHelper.2791fffb.js";import"./index.fc556847.js";import"./scroll.26923679.js";import"./debounce.959d57d3.js";import"./validator.94a90169.js";import"./el-input-number.a0d9ed48.js";import"./el-switch.89faef36.js";import"./el-divider.99cce6ba.js";import"./InputPassword.d8303976.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Editor.f7c8f5d8.js";import"./aria.1f702b5f.js";import"./browser.f8fe7a4c.js";import"./useForm.d93ff7d4.js";import"./useValidator.305a72d8.js";import"./el-card.377296af.js";import"./Sticky.8aff611a.js";const x=t({__name:"ExampleAdd",setup(t){const{emitter:x}=u(),{push:b}=i(),{t:v}=l(),g=r(),w=r(!1),y=async()=>{var e;const a=p(g);await(null==(e=null==a?void 0:a.elFormRef)?void 0:e.validate((async e=>{if(e){w.value=!0;const e=await(null==a?void 0:a.getFormData());await c(e).catch((()=>{})).finally((()=>{w.value=!1}))&&(x.emit("getList","add"),b("/example/example-page"))}})))};return(t,i)=>(o(),s(p(a),{title:p(v)("exampleDemo.add"),onBack:i[0]||(i[0]=e=>p(b)("/example/example-page"))},{right:m((()=>[d(p(j),{type:"primary",loading:w.value,onClick:y},{default:m((()=>[f(n(p(v)("exampleDemo.save")),1)])),_:1},8,["loading"])])),default:m((()=>[d(e,{ref_key:"writeRef",ref:g},null,512)])),_:1},8,["title"]))}});export{x as default};
