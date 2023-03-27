import"./@wangeditor.editor-6821cc85.js";import{E as F,T as _}from"./@wangeditor.editor-for-vue-349079c4.js";import{t as w}from"./index-8b7486b1.js";import{u as y}from"./index-7911eabc.js";import{d as B,q as O,p as g,A as V,W as u,o as E,c as U,b as m}from"./@vue.runtime-core-3a9e54b6.js";import{l as N,r as R}from"./@vue.reactivity-747ae439.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{p as $,o as A}from"./@vue.shared-9aa0355e.js";import"./@vue.runtime-dom-7b7b8a44.js";import"./element-plus-e43e0101.js";import"./dayjs-7a1ede46.js";import"./lodash-es-d2af5045.js";import"./@vueuse.core-2f0af90d.js";import"./@vueuse.shared-8ce56883.js";import"./@element-plus.icons-vue-e3809a99.js";import"./@popperjs.core-c75af06c.js";import"./@ctrl.tinycolor-f8748455.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui.dom-7994f002.js";import"./@floating-ui.core-614032f8.js";import"./monaco-editor-63cfb1df.js";import"./store-2b1fd532.js";import"./axios-aba6f0e0.js";import"./nprogress-f3b783e1.js";import"./mitt-b509fb6d.js";import"./vue-router-19ed6b98.js";import"./pinia-9e37763f.js";import"./vue-demi-71ba0ef2.js";import"./vue-echarts-f1c2bb29.js";import"./resize-detector-a5205554.js";import"./echarts-be9a7bef.js";import"./tslib-54e39b60.js";import"./zrender-3d337fab.js";import"./mockjs-96a45e78.js";import"./vue-70666ebd.js";const k=B({name:"cl-editor-wang",components:{Editor:F,Toolbar:_},props:{modelValue:String,mode:{type:String,default:"default"},height:{type:[String,Number],default:400},disabled:Boolean},emits:["update:modelValue","change","focus","blur"],setup(o,{emit:n}){const{refs:a,setRefs:f}=y(),t=N(),i=R(),d=O(()=>({height:w(o.height)}));g(()=>o.modelValue,e=>{i.value=e||""},{immediate:!0});const r={insertFn:null},l={placeholder:"请输入",MENU_CONF:{uploadImage:{customBrowseAndUpload(e){r.insertFn=e,a.image.open()}},uploadVideo:{customBrowseAndUpload(e){r.insertFn=e,a.video.open()}}}};function p(e){t.value=e,c()}function c(){var e,s;o.disabled?(e=t.value)==null||e.disable():(s=t.value)==null||s.enable()}function C(e){n("focus",e)}function b(e){n("blur",e)}function h(){n("update:modelValue",i.value),n("change",i.value)}function v(e){e.length>0&&e.forEach(s=>{r.insertFn&&r.insertFn(s.url)})}return V(()=>{const e=t.value;e!=null&&e.destroy()}),g(()=>o.disabled,c),{refs:a,setRefs:f,Editor:t,value:i,style:d,onCreated:p,onFocus:C,onBlur:b,onChange:h,editorConfig:l,onFileConfirm:v}}});function z(o,n,a,f,t,i){const d=u("toolbar"),r=u("editor"),l=u("cl-upload-space");return E(),U("div",{class:A(["cl-editor-wang",{disabled:o.disabled}])},[m(d,{editor:o.Editor,mode:o.mode},null,8,["editor","mode"]),m(r,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=p=>o.value=p),defaultConfig:o.editorConfig,mode:o.mode,style:$(o.style),onOnCreated:o.onCreated,onOnFocus:o.onFocus,onOnBlur:o.onBlur,onOnChange:o.onChange},null,8,["modelValue","defaultConfig","mode","style","onOnCreated","onOnFocus","onOnBlur","onOnChange"]),m(l,{ref:o.setRefs("image"),accept:"image/*","show-btn":!1,onConfirm:o.onFileConfirm},null,8,["onConfirm"]),m(l,{ref:o.setRefs("video"),accept:"video/*","show-btn":!1,onConfirm:o.onFileConfirm},null,8,["onConfirm"])],2)}const _o=S(k,[["render",z],["__scopeId","data-v-f7fbc183"]]);export{_o as default};