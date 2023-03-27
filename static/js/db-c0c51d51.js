import{C as J,i as M}from"./index-f2a88b9d.js";import{u as W}from"./hook-e20ce2fb.js";import"./store-2b1fd532.js";import{u as I}from"./index-162287ac.js";import{S as K}from"./index-f25a0731.js";import{a as s,b as S}from"./element-plus-e43e0101.js";import{d as V,W as l,_ as L,o as u,I as P,J as a,N as m,K as T,c as g,a as y,b as n,F as U,U as A,M as H}from"./@vue.runtime-core-3a9e54b6.js";import{r as N,j as Q}from"./@vue.reactivity-747ae439.js";import{O as C}from"./@vue.shared-9aa0355e.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import"./@vue.runtime-dom-7b7b8a44.js";import"./monaco-editor-9c9b0ff9.js";import"./axios-aba6f0e0.js";import"./nprogress-f3b783e1.js";import"./dayjs-7a1ede46.js";import"./lodash-es-d2af5045.js";import"./@vueuse.core-2f0af90d.js";import"./@vueuse.shared-8ce56883.js";import"./mitt-b509fb6d.js";import"./vue-router-19ed6b98.js";import"./pinia-9e37763f.js";import"./vue-demi-71ba0ef2.js";import"./vue-echarts-f1c2bb29.js";import"./resize-detector-a5205554.js";import"./echarts-be9a7bef.js";import"./tslib-54e39b60.js";import"./zrender-3d337fab.js";import"./mockjs-96a45e78.js";import"./vue-70666ebd.js";import"./@element-plus.icons-vue-e3809a99.js";import"./@popperjs.core-c75af06c.js";import"./@ctrl.tinycolor-f8748455.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui.dom-7994f002.js";import"./@floating-ui.core-614032f8.js";const X={class:"source"},Y={class:"head"},Z={class:"list"},ee={key:0,class:"empty"},te={class:"footer"},oe=V({name:"cloud-db"}),re=V({...oe,setup(ne){const{service:k}=I(),{ViewGroup:v}=W({label:"表",title:"数据列表",service:k.cloud.db,onEdit(){return{props:{labelWidth:"60px"},items:[{label:"名称",prop:"name",required:!0,component:{name:"el-input"}},{label:"内容",prop:"content",component:{name:"cl-editor-monaco",props:{language:"typescript",options:{fontSize:"16px"}}},value:J.db,required:!0},{label:"说明",prop:"readme",component:{name:"el-input",props:{type:"textarea",rows:3}}},{label:"状态",prop:"status",value:1,component:{name:"el-radio-group",options:K},required:!0}]}},onSelect(){p({page:1})}}),x=M.useForm(),b=N(!1),h=N([]),d=Q({page:1,size:20,total:0}),w={page:1,size:20};function _(t,e){var o,c;return k.cloud.db.data({id:(c=(o=v.value)==null?void 0:o.selected)==null?void 0:c.id,method:t,params:e})}async function p(t){Object.assign(w,t),b.value=!0,await _("page",w).then(e=>{h.value=e.list,Object.assign(d,e.pagination)}).catch(e=>{s.error(e.message)}),b.value=!1}function q(){var t,e;S.confirm(`此操作将会清空表（${(e=(t=v.value)==null?void 0:t.selected)==null?void 0:e.name}）的所有数据，是否继续？`,"提示",{type:"warning"}).then(()=>{_("clear").then(()=>{s.success("清空数据成功"),p()}).catch(o=>{s.error(o.message)})}).catch(()=>null)}function $(t){S.confirm("此操作将会删除选择的数据，是否继续？","提示",{type:"warning"}).then(()=>{_("delete",{ids:[t]}).then(()=>{s.success("删除数据成功"),p()}).catch(e=>{s.error(e.message)})}).catch(()=>null)}function z(t){var e;(e=x.value)==null||e.open({title:t?"编辑数据":"添加数据",props:{labelWidth:"60px"},items:[{label:"内容",prop:"content",component:{name:"cl-editor-monaco",props:{options:{fontSize:"16px"}}},value:"{}",required:!0}],form:{content:JSON.stringify(t,null,4)},on:{submit(o,{close:c,done:f}){try{_(t?"update":"add",JSON.parse(o.content)).then(()=>{s.success("保存成功"),c(),p()}).catch(i=>{s.error(i.message),f()})}catch(i){s.error(i==null?void 0:i.toString()),f()}}}})}function j(t){p({page:t})}return(t,e)=>{const o=l("el-button"),c=l("cl-code-json"),f=l("el-empty"),i=l("el-scrollbar"),B=l("el-pagination"),E=l("cl-form"),F=l("cl-view-group"),O=L("loading");return u(),P(F,{ref_key:"ViewGroup",ref:v},{"item-name":a(({item:r})=>[m(C(r.name)+" - "+C(r.tableName)+" - "+C(r.className),1)]),right:a(()=>[T((u(),g("div",X,[y("div",Y,[n(o,{onClick:e[0]||(e[0]=r=>p())},{default:a(()=>[m("刷新")]),_:1}),n(o,{type:"success",onClick:e[1]||(e[1]=r=>z())},{default:a(()=>[m("添加")]),_:1}),n(o,{type:"danger",onClick:e[2]||(e[2]=r=>q())},{default:a(()=>[m("清空")]),_:1})]),n(i,{class:"scrollbar"},{default:a(()=>[y("div",Z,[(u(!0),g(U,null,A(h.value,(r,D)=>(u(),g("div",{class:"item",key:D},[n(c,{"model-value":r,height:150},{op:a(()=>[n(o,{type:"primary",size:"small",onClick:G=>z(r)},{default:a(()=>[m("编辑")]),_:2},1032,["onClick"]),n(o,{type:"danger",size:"small",onClick:G=>$(r.id)},{default:a(()=>[m("删除")]),_:2},1032,["onClick"])]),_:2},1032,["model-value"])]))),128))]),h.value.length==0?(u(),g("div",ee,[n(f,{"image-size":100})])):H("",!0)]),_:1}),y("div",te,[n(B,{background:"",layout:"prev, pager, next","current-page":d.page,total:d.total,"page-size":d.size,onCurrentChange:j},null,8,["current-page","total","page-size"])]),n(E,{ref_key:"Form",ref:x},null,512)])),[[O,b.value]])]),_:1},512)}}});const Le=R(re,[["__scopeId","data-v-db88ff53"]]);export{Le as default};
