import{i as m}from"./index-8b7486b1.js";import"./store-2b1fd532.js";import{u as D}from"./index-7911eabc.js";import{a as s,b as M}from"./element-plus-e43e0101.js";import{d,e as N,W as t,_ as B,o as u,I as _,J as r,b as o,K as E,N as I}from"./@vue.runtime-core-3a9e54b6.js";import{r as K,u as j}from"./@vue.reactivity-747ae439.js";import"./@vue.runtime-dom-7b7b8a44.js";import"./@vue.shared-9aa0355e.js";import"./monaco-editor-63cfb1df.js";import"./axios-aba6f0e0.js";import"./nprogress-f3b783e1.js";import"./dayjs-7a1ede46.js";import"./lodash-es-d2af5045.js";import"./@vueuse.core-2f0af90d.js";import"./@vueuse.shared-8ce56883.js";import"./mitt-b509fb6d.js";import"./vue-router-19ed6b98.js";import"./pinia-9e37763f.js";import"./vue-demi-71ba0ef2.js";import"./vue-echarts-f1c2bb29.js";import"./resize-detector-a5205554.js";import"./echarts-be9a7bef.js";import"./tslib-54e39b60.js";import"./zrender-3d337fab.js";import"./mockjs-96a45e78.js";import"./vue-70666ebd.js";import"./@element-plus.icons-vue-e3809a99.js";import"./@popperjs.core-c75af06c.js";import"./@ctrl.tinycolor-f8748455.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui.dom-7994f002.js";import"./@floating-ui.core-614032f8.js";const A=d({name:"sys-log"}),ve=d({...A,setup(J){const{service:n}=D(),l=K(1),p=m.useCrud({service:n.base.sys.log},e=>{e.refresh()}),f=m.useTable({contextMenu:["refresh"],columns:[{type:"index",label:"#",width:60},{prop:"userId",label:"用户ID"},{prop:"name",label:"昵称",minWidth:150},{prop:"action",label:"请求地址",minWidth:200,showOverflowTooltip:!0},{prop:"params",label:"参数",minWidth:200,component:{name:"cl-code-json",props:{popover:!0}}},{prop:"ip",label:"ip",minWidth:150},{prop:"ipAddr",label:"ip地址",minWidth:150},{prop:"createTime",label:"创建时间",minWidth:160,sortable:"desc"}]});function b(){n.base.sys.log.setKeep({value:l.value}).then(()=>{s.success("保存成功")}).catch(e=>{s.error(e.message)})}function h(){M.confirm("是否要清空日志？","提示",{type:"warning"}).then(()=>{n.base.sys.log.clear().then(()=>{var e;s.success("清空成功"),(e=p.value)==null||e.refresh()}).catch(e=>{s.error(e.message)})}).catch(()=>null)}return N(()=>{n.base.sys.log.getKeep().then(e=>{l.value=Number(e)})}),(e,a)=>{const g=t("cl-refresh-btn"),v=t("el-button"),y=t("el-input-number"),x=t("cl-filter"),c=t("cl-flex1"),C=t("cl-search-key"),i=t("cl-row"),w=t("cl-table"),k=t("cl-pagination"),W=t("cl-crud"),T=B("permission");return u(),_(W,{ref_key:"Crud",ref:p},{default:r(()=>[o(i,null,{default:r(()=>[o(g),E((u(),_(v,{type:"danger",onClick:h},{default:r(()=>[I(" 清空 ")]),_:1})),[[T,j(n).base.sys.log.permission.clear]]),o(x,{label:"日志保存天数"},{default:r(()=>[o(y,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=V=>l.value=V),"controls-position":"right",max:1e4,min:1,onChange:b},null,8,["modelValue"])]),_:1}),o(c),o(C,{placeholder:"搜索请求地址、参数、ip"})]),_:1}),o(i,null,{default:r(()=>[o(w,{ref_key:"Table",ref:f},null,512)]),_:1}),o(i,null,{default:r(()=>[o(c),o(k)]),_:1})]),_:1},512)}}});export{ve as default};
