import{i as c,C as S}from"./index-8b7486b1.js";import"./store-2b1fd532.js";import{u as U}from"./index-7911eabc.js";import{S as u}from"./index-f25a0731.js";import{_ as B}from"./func-logs.vue_vue_type_script_setup_true_lang-e39ef3e2.js";import{d,W as e,o as E,I,J as n,b as o}from"./@vue.runtime-core-3a9e54b6.js";import{u as _}from"./@vue.reactivity-747ae439.js";import"./@vue.runtime-dom-7b7b8a44.js";import"./@vue.shared-9aa0355e.js";import"./element-plus-e43e0101.js";import"./dayjs-7a1ede46.js";import"./lodash-es-d2af5045.js";import"./@vueuse.core-2f0af90d.js";import"./@vueuse.shared-8ce56883.js";import"./@element-plus.icons-vue-e3809a99.js";import"./@popperjs.core-c75af06c.js";import"./@ctrl.tinycolor-f8748455.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui.dom-7994f002.js";import"./@floating-ui.core-614032f8.js";import"./monaco-editor-63cfb1df.js";import"./axios-aba6f0e0.js";import"./nprogress-f3b783e1.js";import"./mitt-b509fb6d.js";import"./vue-router-19ed6b98.js";import"./pinia-9e37763f.js";import"./vue-demi-71ba0ef2.js";import"./vue-echarts-f1c2bb29.js";import"./resize-detector-a5205554.js";import"./echarts-be9a7bef.js";import"./tslib-54e39b60.js";import"./zrender-3d337fab.js";import"./mockjs-96a45e78.js";import"./vue-70666ebd.js";const J=d({name:"cloud-func-info"}),Co=d({...J,setup(N){const{service:r,refs:i,setRefs:s,router:f}=U(),b=c.useUpsert({props:{labelWidth:"60px"},items:[{label:"名称",prop:"name",required:!0,component:{name:"el-input"}},{label:"内容",prop:"content",component:{name:"cl-editor-monaco",props:{language:"typescript"},ref:s("monaco")},value:S.func,required:!0},{label:"说明",prop:"readme",component:{name:"el-input",props:{type:"textarea",rows:3}}},{label:"状态",prop:"status",value:1,component:{name:"el-radio-group",options:u},required:!0}],async onSubmit(t,{next:m}){const p=await i.monaco.formatCode();m({...t,content:p})}}),h=c.useTable({columns:[{type:"selection"},{label:"名称",prop:"name",minWidth:160},{label:"说明",prop:"readme",minWidth:200,showOverflowTooltip:!0},{label:"状态",prop:"status",component:{name:"cl-switch"},minWidth:150},{label:"创建时间",prop:"createTime",minWidth:160,sortable:"desc"},{label:"更新时间",prop:"updateTime",minWidth:160,sortable:"custom"},{type:"op",width:360,buttons:["edit","delete",{label:"开发",type:"success",hidden:!(r.cloud.func.info._permission.info&&r.cloud.func.info._permission.invoke),onClick({scope:t}){f.push({path:"/cloud/func/dev",query:{id:t.row.id}})}},{label:"查看日志",hidden:!r.cloud.func.log._permission.page,onClick({scope:t}){i.logs.open(t.row)}}]}]}),y=c.useCrud({service:r.cloud.func.info},t=>{t.refresh()});return(t,m)=>{const p=e("cl-refresh-btn"),C=e("cl-add-btn"),w=e("cl-multi-delete-btn"),k=e("cl-select"),g=e("cl-filter"),a=e("cl-flex1"),x=e("cl-search-key"),l=e("cl-row"),v=e("cl-table"),W=e("cl-pagination"),T=e("cl-upsert"),q=e("cl-crud");return E(),I(q,{ref_key:"Crud",ref:y},{default:n(()=>[o(l,null,{default:n(()=>[o(p),o(C),o(w),o(g,{label:"状态"},{default:n(()=>[o(k,{options:_(u),prop:"status"},null,8,["options"])]),_:1}),o(a),o(x,{placeholder:"搜索名称"})]),_:1}),o(l,null,{default:n(()=>[o(v,{ref_key:"Table",ref:h},null,512)]),_:1}),o(l,null,{default:n(()=>[o(a),o(W)]),_:1}),o(T,{ref_key:"Upsert",ref:b},null,512),o(B,{ref:_(s)("logs")},null,512)]),_:1},512)}}});export{Co as default};
