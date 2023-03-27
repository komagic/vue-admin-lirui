import{Q as R,o as j,d as J}from"./@element-plus.icons-vue-e3809a99.js";import{i as g,d as K,m as Q,a as G,b as H,c as X}from"./index-f2a88b9d.js";import{u as N}from"./index-162287ac.js";import"./store-2b1fd532.js";import{u as Y}from"./menu-64529d28.js";import"./socket.io-client-5c349c77.js";import{v as Z}from"./lodash-es-d2af5045.js";import{d as v,q as ee,e as te,W as l,o as p,c as x,b as a,J as n,N as h,F as T,I as u,M as E,_ as oe,a as ne,U as le,K as re}from"./@vue.runtime-core-3a9e54b6.js";import{u as y}from"./@vue.reactivity-747ae439.js";import{O as A}from"./@vue.shared-9aa0355e.js";import"./@vue.runtime-dom-7b7b8a44.js";import"./element-plus-e43e0101.js";import"./dayjs-7a1ede46.js";import"./@vueuse.core-2f0af90d.js";import"./@vueuse.shared-8ce56883.js";import"./@popperjs.core-c75af06c.js";import"./@ctrl.tinycolor-f8748455.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui.dom-7994f002.js";import"./@floating-ui.core-614032f8.js";import"./monaco-editor-9c9b0ff9.js";import"./axios-aba6f0e0.js";import"./nprogress-f3b783e1.js";import"./mitt-b509fb6d.js";import"./vue-router-19ed6b98.js";import"./pinia-9e37763f.js";import"./vue-demi-71ba0ef2.js";import"./vue-echarts-f1c2bb29.js";import"./resize-detector-a5205554.js";import"./echarts-be9a7bef.js";import"./tslib-54e39b60.js";import"./zrender-3d337fab.js";import"./mockjs-96a45e78.js";import"./vue-70666ebd.js";import"./engine.io-client-1d8212ae.js";import"./engine.io-parser-a5b7cb40.js";import"./@socket.io.component-emitter-3e1df240.js";import"./socket.io-parser-145dca60.js";const pe=v({name:"menu-create"}),ae=v({...pe,setup(U){const{service:c,mitt:k}=N(),C=Y(),_=g.useForm(),d=[],f=ee(()=>K(d.map(i=>i.value)));function F(){var i;(i=_.value)==null||i.open({title:"快速创建",width:"800px",items:[{prop:"module",label:"选择模块",span:10,component:{name:"cl-select",props:{filterable:!0,clearable:!0,placeholder:"请选择模块",allowCreate:!0,defaultFirstOption:!0,options:Q.dirs}},required:!0},{prop:"entity",label:"数据结构",span:14,component:{name:"slot-entity"},required:!0},{prop:"name",label:"菜单名称",span:10,component:{name:"el-input",props:{placeholder:"请输入菜单名称"}},required:!0},{prop:"router",label:"菜单路由",span:14,component:{name:"el-input",props:{placeholder:"请输入菜单路由，如：/test"}}},{prop:"parentId",label:"上级节点",component:{name:"cl-menu-select",props:{type:1}}},{prop:"keepAlive",value:!0,label:"路由缓存",component:{name:"el-radio-group",options:[{label:"开启",value:!0},{label:"关闭",value:!1}]}},{prop:"icon",label:"菜单图标",component:{name:"cl-menu-icon"}},{prop:"orderNum",label:"排序号",component:{name:"el-input-number",props:{placeholder:"请填写排序号",min:0,max:99,"controls-position":"right"}}},{prop:"isCreateFile",label:"是否创建文件",value:1,component:{name:"el-radio-group",options:[{label:"是",value:1},{label:"否",value:0}]}}],on:{submit(s,{done:e,close:t}){const{api:r,prefix:m,columns:w}=d.find(b=>b.value==s.entity.join("/"));C.create({...s,router:s.router,module:s.module,prefix:m,api:r,columns:w}).then(b=>{s.isCreateFile&&b(),k.emit("magic.createMenu"),t()}).catch(()=>{e()})}}})}function I(i){var e;const s=d.find(t=>t.value==i.join("/"));s&&((e=_.value)==null||e.setForm("router",`/${s.value}`))}return te(()=>{c.base.open.eps().then(i=>{for(const s in i)i[s].forEach(e=>{Z(e.columns)||d.push({value:e.prefix.substring(7),...e})})})}),(i,s)=>{const e=l("el-button"),t=l("el-cascader"),r=l("cl-form");return p(),x(T,null,[a(e,{type:"success",onClick:F},{default:n(()=>[h("快速创建")]),_:1}),a(r,{ref_key:"Form",ref:_},{"slot-entity":n(({scope:m})=>[a(t,{modelValue:m.entity,"onUpdate:modelValue":w=>m.entity=w,filterable:"",separator:".",options:y(f),onChange:I},null,8,["modelValue","onUpdate:modelValue","options"])]),_:1},512)],64)}}}),ie=v({name:"auto-menu"}),se=v({...ie,setup(U){const{router:c}=N();function k(){c.push("/magic/ai-code")}return(C,_)=>{const d=l("el-button");return p(),x(T,null,[y(G)?(p(),u(ae,{key:0})):E("",!0),a(d,{icon:y(R),onClick:k},{default:n(()=>[h("Ai 极速编码")]),_:1},8,["icon"])],64)}}}),me={key:1},ce={key:1},ue=v({name:"sys-menu"}),et=v({...ue,setup(U){const{service:c,mitt:k}=N(),{menu:C}=H(),_=g.useTable({contextMenu:[e=>({label:"新增",hidden:!(e.type!=2&&c.base.sys.user._permission.add),callback(t){i(e),t()}}),"update","delete",e=>({label:"添加权限",hidden:!(e.type==1&&c.base.sys.user._permission.add),callback(t){s(e),t()}})],columns:[{type:"selection"},{prop:"name",label:"名称",align:"left",width:200,fixed:"left"},{prop:"icon",label:"图标",width:80},{prop:"type",label:"类型",width:100,dict:[{label:"目录",value:0},{label:"菜单",value:1,type:"success"},{label:"权限",value:2,type:"danger"}]},{prop:"router",label:"节点路由",minWidth:160},{prop:"keepAlive",label:"路由缓存",width:100},{prop:"viewPath",label:"文件路径",minWidth:200,showOverflowTooltip:!0},{prop:"perms",label:"权限",headerAlign:"center",minWidth:300},{prop:"orderNum",label:"排序号",width:90,fixed:"right"},{prop:"updateTime",label:"更新时间",sortable:"custom",width:160},{label:"操作",type:"op",width:250,buttons:["slot-add","edit","delete"]}]}),d=g.useUpsert({dialog:{width:"800px"},items:[{prop:"type",value:0,label:"节点类型",required:!0,component:{name:"el-radio-group",options:[{label:"目录",value:0},{label:"菜单",value:1},{label:"权限",value:2}]}},{prop:"name",label:"节点名称",component:{name:"el-input"},required:!0},{prop:"parentId",label:"上级节点",hook:"empty",component:{name:"slot-parentId"}},{prop:"router",label:"节点路由",hidden:({scope:e})=>e.type!=1,component:{name:"el-input",props:{placeholder:"请输入节点路由，如：/test"}}},{prop:"keepAlive",value:!0,label:"路由缓存",hidden:({scope:e})=>e.type!=1,component:{name:"el-radio-group",options:[{label:"开启",value:!0},{label:"关闭",value:!1}]}},{prop:"isShow",label:"是否显示",value:!0,hidden:({scope:e})=>e.type==2,flex:!1,component:{name:"el-switch"}},{prop:"viewPath",label:"文件路径",hidden:({scope:e})=>e.type!=1,component:{name:"cl-menu-file"}},{prop:"icon",label:"节点图标",hidden:({scope:e})=>e.type==2,component:{name:"cl-menu-icon"}},{prop:"orderNum",label:"排序号",component:{name:"el-input-number",props:{placeholder:"请填写排序号",min:0,max:99,"controls-position":"right"}}},{prop:"perms",label:"权限",hidden:({scope:e})=>e.type!=2,component:{name:"cl-menu-perms"}}],plugins:[g.setFocus("name")]}),f=g.useCrud({service:c.base.sys.menu,onRefresh(e,{render:t}){c.base.sys.menu.list().then(r=>{r.map(m=>{m.permList=m.perms?m.perms.split(","):[]}),t(X(r)),C.get()})}},e=>{e.refresh()});function F(e){var t;(t=f.value)==null||t.refresh(e)}function I(e,t){var r;t!=null&&t.property&&e.children&&((r=_.value)==null||r.toggleRowExpansion(e))}function i({type:e,id:t}){var r;(r=f.value)==null||r.rowAppend({parentId:t,parentType:e,type:e+1,keepAlive:!0,isShow:!0})}function s({id:e}){var t;(t=f.value)==null||t.rowAppend({parentId:e,type:2})}return k.on("magic.createMenu",F),(e,t)=>{const r=l("cl-refresh-btn"),m=l("cl-add-btn"),w=l("cl-multi-delete-btn"),b=l("cl-row"),q=l("el-tag"),M=l("cl-svg"),$=l("el-link"),S=l("el-icon"),B=l("el-button"),D=l("cl-table"),P=l("cl-menu-select"),W=l("cl-upsert"),z=l("cl-crud"),L=oe("permission");return p(),u(z,{ref_key:"Crud",ref:f},{default:n(()=>[a(b,null,{default:n(()=>[a(r),a(m),a(w),a(se)]),_:1}),a(b,null,{default:n(()=>[a(D,{ref_key:"Table",ref:_,"row-key":"id",onRowClick:I},{"column-name":n(({scope:o})=>[ne("span",null,A(o.row.name),1),o.row.isShow?E("",!0):(p(),u(q,{key:0,effect:"dark",type:"danger",size:"small","disable-transitions":"",style:{"margin-left":"10px"}},{default:n(()=>[h("隐藏")]),_:1}))]),"column-icon":n(({scope:o})=>[a(M,{name:o.row.icon,size:"16px",style:{"margin-top":"5px"}},null,8,["name"])]),"column-perms":n(({scope:o})=>[(p(!0),x(T,null,le(o.row.permList,(V,O)=>(p(),u(q,{key:O,effect:"plain",size:"small",style:{margin:"2px","letter-spacing":"0.5px"}},{default:n(()=>[h(A(V),1)]),_:2},1024))),128))]),"column-router":n(({scope:o})=>[o.row.type==1?(p(),u($,{key:0,type:"success",href:o.row.router},{default:n(()=>[h(A(o.row.router),1)]),_:2},1032,["href"])):(p(),x("span",me,A(o.row.router),1))]),"column-keepAlive":n(({scope:o})=>[o.row.type==1?(p(),u(S,{key:0},{default:n(()=>[o.row.keepAlive?(p(),u(y(j),{key:0})):(p(),u(y(J),{key:1}))]),_:2},1024)):(p(),x("span",ce))]),"slot-add":n(({scope:o})=>[re((p(),u(B,{type:"success",text:"",bg:"",onClick:V=>i(o.row)},{default:n(()=>[h("新增")]),_:2},1032,["onClick"])),[[L,{and:[y(c).base.sys.menu.permission.add,o.row.type!=2]}]])]),_:1},512)]),_:1}),a(W,{ref_key:"Upsert",ref:d},{"slot-parentId":n(({scope:o})=>[a(P,{modelValue:o.parentId,"onUpdate:modelValue":V=>o.parentId=V,type:o.type},null,8,["modelValue","onUpdate:modelValue","type"])]),_:1},512)]),_:1},512)}}});export{et as default};
