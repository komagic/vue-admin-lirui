import{w as b}from"./@vue.runtime-dom-7b7b8a44.js";import{i as y}from"./index-8b7486b1.js";import{a as v}from"./element-plus-e43e0101.js";import{d as l,W as i,o as e,c as _,a as s,b as a,J as d,N as o,F as $,U as x,I as g,am as C,al as I,L as w}from"./@vue.runtime-core-3a9e54b6.js";import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";import{r as B}from"./@vue.reactivity-747ae439.js";import{i as E}from"./@vueuse.core-2f0af90d.js";import{_ as N}from"./form-btn.vue_vue_type_script_setup_true_lang-41da5fb3.js";import"./@vue.shared-9aa0355e.js";import"./monaco-editor-63cfb1df.js";import"./store-2b1fd532.js";import"./dayjs-7a1ede46.js";import"./axios-aba6f0e0.js";import"./nprogress-f3b783e1.js";import"./lodash-es-d2af5045.js";import"./mitt-b509fb6d.js";import"./vue-router-19ed6b98.js";import"./pinia-9e37763f.js";import"./vue-demi-71ba0ef2.js";import"./vue-echarts-f1c2bb29.js";import"./resize-detector-a5205554.js";import"./echarts-be9a7bef.js";import"./tslib-54e39b60.js";import"./zrender-3d337fab.js";import"./mockjs-96a45e78.js";import"./vue-70666ebd.js";import"./@vueuse.shared-8ce56883.js";import"./@element-plus.icons-vue-e3809a99.js";import"./@popperjs.core-c75af06c.js";import"./@ctrl.tinycolor-f8748455.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui.dom-7994f002.js";import"./@floating-ui.core-614032f8.js";import"./index-7911eabc.js";const S={class:"scope"},F=s("div",{class:"h"},[s("span",null,"cl-context-menu"),o(" 右键菜单 ")],-1),M={class:"c"},V=s("div",{class:"f"},[s("span",{class:"date"},"2019/10/23")],-1),D=l({name:"undefined"}),L=l({...D,setup(n){function c(t){y.ContextMenu.open(t,{list:[{label:"新增",suffixIcon:"el-icon-plus",callback(r){v.info("点击了新增"),r()}},{label:"编辑",suffixIcon:"el-icon-edit",callback(r){v.info("点击了编辑"),r()}},{label:"删除",suffixIcon:"el-icon-delete"},{label:"二级",suffixIcon:"el-icon-right",children:[{label:"文本超出隐藏，有一天晚上",ellipsis:!0},{label:"禁用",disabled:!0},{label:"更多",callback(r){v.warning("开发中"),r()}}]}]})}return(t,r)=>{const u=i("el-button");return e(),_("div",S,[F,s("div",M,[a(u,{type:"success",onContextmenu:b(c,["stop","prevent"])},{default:d(()=>[o("右键点击")]),_:1},8,["onContextmenu"])]),V])}}}),U={},z={class:"scope"},J=s("div",{class:"h"},[s("span",null,"cl-crud"),o(" 增删改查，超快的 ")],-1),T={class:"c"},W=s("div",{class:"f"},[s("span",{class:"date"},"2019/09/25")],-1);function j(n,c){const t=i("router-link");return e(),_("div",z,[J,s("div",T,[a(t,{to:"/demo/crud"},{default:d(()=>[o("传送门")]),_:1})]),W])}const q=p(U,[["render",j]]),A={},G={class:"scope"},H=s("div",{class:"h"},[s("span",null,"cl-upload"),o(" 图片上传 ")],-1),K={class:"c"},O=s("div",{class:"f"},[s("span",{class:"date"},"2019/09/25")],-1);function P(n,c){const t=i("router-link");return e(),_("div",G,[H,s("div",K,[a(t,{to:"/demo/upload"},{default:d(()=>[o("传送门")]),_:1})]),O])}const Q=p(A,[["render",P]]),R={},X={class:"scope"},Y=s("div",{class:"h"},[s("span",null,"cl-editor"),o(" 编辑器 ")],-1),Z={class:"c"},ss=s("div",{class:"f"},[s("span",{class:"date"},"2019/11/07")],-1);function ts(n,c){const t=i("router-link");return e(),_("div",X,[Y,s("div",Z,[a(t,{to:"/demo/editor"},{default:d(()=>[o("传送门")]),_:1})]),ss])}const os=p(R,[["render",ts]]),k=n=>(C("data-v-a3f62f78"),n=n(),I(),n),es={class:"scope"},ns=k(()=>s("div",{class:"h"},[s("span",null,"cl-svg"),o(" svg图片库 ")],-1)),cs={class:"c _svg"},_s=k(()=>s("div",{class:"f"},[s("span",{class:"date"},"2019/09/25")],-1)),is=l({name:"undefined"}),as=l({...is,setup(n){const c=B(["like","video","rank","menu","favor"]);return(t,r)=>{const u=i("cl-svg"),f=i("el-tooltip");return e(),_("div",es,[ns,s("div",cs,[(e(!0),_($,null,x(c.value,(m,h)=>(e(),g(f,{key:h,content:`icon-${m}`},{default:d(()=>[a(u,{size:18,name:`icon-${m}`},null,8,["name"])]),_:2},1032,["content"]))),128))]),_s])}}});const ls=p(as,[["__scopeId","data-v-a3f62f78"]]),ds={class:"scope"},rs=s("div",{class:"h"},[s("span",null,"v-copy"),o(" 复制到剪贴板 ")],-1),ps=s("div",{class:"c"},null,-1),us=s("div",{class:"f"},[s("span",{class:"date"},"2019/09/25")],-1),ms=[rs,ps,us],fs=l({name:"undefined"}),hs=l({...fs,setup(n){return E(),(c,t)=>(e(),_("div",ds,ms))}}),vs={},$s={class:"scope"},xs=s("div",{class:"h"},[s("span",null,"file"),o(" 文件管理 ")],-1),gs={class:"c"},ks=s("div",{class:"f"},[s("span",{class:"date"},"2023/01/01")],-1);function bs(n,c){const t=i("router-link");return e(),_("div",$s,[xs,s("div",gs,[a(t,{to:"/upload/list"},{default:d(()=>[o("传送门")]),_:1})]),ks])}const ys=p(vs,[["render",bs]]),Cs={},Is={class:"scope"},ws=s("div",{class:"h"},[s("span",null,"design-page"),o(" 页面设计 ")],-1),Bs={class:"c"},Es=s("div",{class:"f"},[s("span",{class:"date"},"2023/02/01")],-1);function Ns(n,c){const t=i("router-link");return e(),_("div",Is,[ws,s("div",Bs,[a(t,{to:"/design/page"},{default:d(()=>[o("传送门")]),_:1})]),Es])}const Ss=p(Cs,[["render",Ns]]),Fs={class:"scope"},Ms=s("div",{class:"h"},[s("span",null,"cl-form"),o(" 很强的表单 ")],-1),Vs={class:"c"},Ds=s("div",{class:"f"},[s("span",{class:"date"},"2019/01/01")],-1),Ls=l({name:"undefined"}),Us=l({...Ls,setup(n){return(c,t)=>(e(),_("div",Fs,[Ms,s("div",Vs,[a(N)]),Ds]))}}),zs={class:"demo"},Js=l({name:"demo"}),bt=l({...Js,setup(n){const c=[L,Us,q,Q,os,ls,hs,ys,Ss];return(t,r)=>{const u=i("el-col"),f=i("el-row");return e(),_("div",zs,[a(f,{gutter:10},{default:d(()=>[(e(),_($,null,x(c,(m,h)=>a(u,{key:h,xs:24,sm:12,md:8,lg:6},{default:d(()=>[(e(),g(w(m)))]),_:2},1024)),64))]),_:1})])}}});export{bt as default};
