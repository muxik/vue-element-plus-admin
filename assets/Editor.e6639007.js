import{_ as e}from"./ContentWrap.259c4c25.js";import{_ as a}from"./Editor.bc5101ac.js";import{d as t,r as o,C as r,a as s,o as l,k as i,w as d,l as m,g as n}from"./index.976d50ce.js";import"./el-card.f8734a1a.js";import"./el-popper.8324f673.js";import"./index.caa1c62b.js";const c=t({__name:"Editor",setup(t){const{t:c}=m(),p=e=>{},u=o(),f=o("");return r((async()=>{var e;await(null==(e=s(u))?void 0:e.getEditorRef())})),setTimeout((()=>{f.value="<p>hello <strong>world</strong></p>"}),3e3),(t,o)=>(l(),i(s(e),{title:s(c)("richText.richText"),message:s(c)("richText.richTextDes")},{default:d((()=>[n(s(a),{modelValue:f.value,"onUpdate:modelValue":o[0]||(o[0]=e=>f.value=e),ref_key:"editorRef",ref:u,onChange:p},null,8,["modelValue"])])),_:1},8,["title","message"]))}});export{c as default};
