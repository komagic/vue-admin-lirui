import{i as x,c as V}from"./index-f2a88b9d.js";import{u as C}from"./index-162287ac.js";import{d as s,p as b,W as i,o as w,c as g,b as n,a as N,J as B}from"./@vue.runtime-core-3a9e54b6.js";import{r as m}from"./@vue.reactivity-747ae439.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import"./@vue.runtime-dom-7b7b8a44.js";import"./@vue.shared-9aa0355e.js";import"./element-plus-e43e0101.js";import"./dayjs-7a1ede46.js";import"./lodash-es-d2af5045.js";import"./@vueuse.core-2f0af90d.js";import"./@vueuse.shared-8ce56883.js";import"./@element-plus.icons-vue-e3809a99.js";import"./@popperjs.core-c75af06c.js";import"./@ctrl.tinycolor-f8748455.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui.dom-7994f002.js";import"./@floating-ui.core-614032f8.js";import"./monaco-editor-9c9b0ff9.js";import"./store-2b1fd532.js";import"./axios-aba6f0e0.js";import"./nprogress-f3b783e1.js";import"./mitt-b509fb6d.js";import"./vue-router-19ed6b98.js";import"./pinia-9e37763f.js";import"./vue-demi-71ba0ef2.js";import"./vue-echarts-f1c2bb29.js";import"./resize-detector-a5205554.js";import"./echarts-be9a7bef.js";import"./tslib-54e39b60.js";import"./zrender-3d337fab.js";import"./mockjs-96a45e78.js";import"./vue-70666ebd.js";const E={class:"cl-menu-check"},U={class:"cl-menu-check__scroller"},A=s({name:"cl-menu-check"}),I=s({...A,props:{modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(l,{emit:c}){const u=l,{service:d}=C(),t=m(),p=m(),r=m("");async function _(){return d.base.sys.menu.list().then(e=>{p.value=V(e)})}function f(e,o){return e?o.name.includes(e):!0}function h(e,{checkedKeys:o,halfCheckedKeys:a}){c("update:modelValue",[...o,...a])}return b(r,e=>{t.value.filter(e)}),x.useUpsert({async onOpened(){await _(),t.value.setCheckedKeys((u.modelValue||[]).filter(e=>{var o;return(o=t.value.getNode(e))==null?void 0:o.isLeaf}))}}),(e,o)=>{const a=i("el-input"),k=i("el-tree"),v=i("el-scrollbar");return w(),g("div",E,[n(a,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=y=>r.value=y),placeholder:"输入关键字进行过滤"},null,8,["modelValue"]),N("div",U,[n(v,{"max-height":"200px"},{default:B(()=>[n(k,{ref_key:"Tree",ref:t,"node-key":"id","show-checkbox":"",data:p.value,props:{label:"name",children:"children"},"filter-node-method":f,onCheck:h},null,8,["data"])]),_:1})])])}}});const fe=T(I,[["__scopeId","data-v-8a81625a"]]);export{fe as default};
