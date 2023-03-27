import{v as E}from"./@vue.runtime-dom-7b7b8a44.js";import{a9 as F,aa as L,o as O}from"./@element-plus.icons-vue-e3809a99.js";import{u as T,s as $,w as I,x as m}from"./index-f2a88b9d.js";import{j as J}from"./@vueuse.core-2f0af90d.js";import{a as K}from"./element-plus-e43e0101.js";import{d as C,W as n,o as c,c as p,a as r,b as o,J as s,M as W,F as V,U as q,K as A}from"./@vue.runtime-core-3a9e54b6.js";import{r as g,j as k,u}from"./@vue.reactivity-747ae439.js";import{O as b,p as H}from"./@vue.shared-9aa0355e.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import"./monaco-editor-9c9b0ff9.js";import"./store-2b1fd532.js";import"./dayjs-7a1ede46.js";import"./axios-aba6f0e0.js";import"./nprogress-f3b783e1.js";import"./lodash-es-d2af5045.js";import"./mitt-b509fb6d.js";import"./vue-router-19ed6b98.js";import"./pinia-9e37763f.js";import"./vue-demi-71ba0ef2.js";import"./vue-echarts-f1c2bb29.js";import"./resize-detector-a5205554.js";import"./echarts-be9a7bef.js";import"./tslib-54e39b60.js";import"./zrender-3d337fab.js";import"./mockjs-96a45e78.js";import"./vue-70666ebd.js";import"./@vueuse.shared-8ce56883.js";import"./@popperjs.core-c75af06c.js";import"./@ctrl.tinycolor-f8748455.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui.dom-7994f002.js";import"./@floating-ui.core-614032f8.js";const Q={key:0,class:"cl-theme-dark"},R={class:"cl-theme__drawer"},X={class:"cl-theme__comd"},Y=["onClick"],Z={style:{marginLeft:"10px"}},ee=C({name:"cl-theme"}),oe=C({...ee,setup(te){const{menu:y}=T(),d=g(J()),_=k($.get("theme")),l=k({color:_.color||"",theme:_}),f=g(!1);function w(){f.value=!0}function h(){d.value=!1}function x(t){m({color:t}),h()}function U(t){Object.assign(l.theme,t),l.color=t.color,m(t),h(),K.success(`切换主题：${t.label}`)}function D(t){m({isGroup:t}),y.setMenu()}function B(t){m({transition:t})}return(t,a)=>{const G=n("cl-svg"),j=n("el-badge"),v=n("el-switch"),i=n("el-form-item"),z=n("el-color-picker"),M=n("el-form"),N=n("el-drawer");return c(),p(V,null,[r("div",{class:"cl-theme",onClick:w},[o(j,{type:"primary","is-dot":""},{default:s(()=>[o(G,{name:"icon-discover",size:15})]),_:1})]),_.name=="default"?(c(),p("div",Q,[o(v,{"inline-prompt":"",modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=e=>d.value=e),"active-icon":u(F),"inactive-icon":u(L)},null,8,["modelValue","active-icon","inactive-icon"])])):W("",!0),o(N,{modelValue:f.value,"onUpdate:modelValue":a[4]||(a[4]=e=>f.value=e),title:"设置主题",size:"350px","append-to-body":""},{default:s(()=>[r("div",R,[o(M,{"label-position":"top"},{default:s(()=>[o(i,{label:"推荐"},{default:s(()=>[r("ul",X,[(c(!0),p(V,null,q(u(I),(e,S)=>(c(),p("li",{onClick:le=>U(e),key:S},[r("div",{class:"w",style:H({backgroundColor:e.color})},[A(o(u(O),null,null,512),[[E,e.color==l.theme.color]])],4),r("span",null,b(e.label),1)],8,Y))),128))])]),_:1}),o(i,{label:"自定义主色"},{default:s(()=>[o(z,{modelValue:l.color,"onUpdate:modelValue":a[1]||(a[1]=e=>l.color=e),onChange:x},null,8,["modelValue"]),r("span",Z,b(l.color),1)]),_:1}),o(i,{label:"菜单分组显示"},{default:s(()=>[o(v,{modelValue:l.theme.isGroup,"onUpdate:modelValue":a[2]||(a[2]=e=>l.theme.isGroup=e),onChange:D},null,8,["modelValue"])]),_:1}),o(i,{label:"转场动画"},{default:s(()=>[o(v,{modelValue:l.theme.transition,"onUpdate:modelValue":a[3]||(a[3]=e=>l.theme.transition=e),"active-value":"slide","inactive-value":"none",onChange:B},null,8,["modelValue"])]),_:1})]),_:1})])]),_:1},8,["modelValue"])],64)}}});const Te=P(oe,[["__scopeId","data-v-e83f4864"]]);export{Te as default};
