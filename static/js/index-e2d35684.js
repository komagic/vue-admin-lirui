import{J as f}from"./@element-plus.icons-vue-e3809a99.js";import{t as m}from"./index-f2a88b9d.js";import{r as _,n as y,q as g}from"./lodash-es-d2af5045.js";import{d as h,q as p,W as r,o as z,c as v,b as i,J as l,a as w}from"./@vue.runtime-core-3a9e54b6.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{p as n}from"./@vue.shared-9aa0355e.js";import"./@vue.runtime-dom-7b7b8a44.js";import"./@vue.reactivity-747ae439.js";import"./element-plus-e43e0101.js";import"./dayjs-7a1ede46.js";import"./@vueuse.core-2f0af90d.js";import"./@vueuse.shared-8ce56883.js";import"./@popperjs.core-c75af06c.js";import"./@ctrl.tinycolor-f8748455.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui.dom-7994f002.js";import"./@floating-ui.core-614032f8.js";import"./monaco-editor-9c9b0ff9.js";import"./store-2b1fd532.js";import"./axios-aba6f0e0.js";import"./nprogress-f3b783e1.js";import"./mitt-b509fb6d.js";import"./vue-router-19ed6b98.js";import"./pinia-9e37763f.js";import"./vue-demi-71ba0ef2.js";import"./vue-echarts-f1c2bb29.js";import"./resize-detector-a5205554.js";import"./echarts-be9a7bef.js";import"./tslib-54e39b60.js";import"./zrender-3d337fab.js";import"./mockjs-96a45e78.js";import"./vue-70666ebd.js";const B=h({name:"cl-image",components:{PictureFilled:f},props:{modelValue:[String,Array],src:[String,Array],size:{type:[Number,Array],default:100},lazy:Boolean,fit:{type:String,default:"cover"},justify:{type:String,default:"center"}},setup(e){const o=p(()=>{const t=e.modelValue||e.src;return _(t)?t:y(t)?(t||"").split(",").filter(Boolean):[]}),s=p(()=>{const[t,a]=g(e.size)?[e.size,e.size]:e.size;return{h:m(t),w:m(a)}});return{urls:o,style:s}}});const A={class:"image-slot"};function C(e,o,s,t,a,N){const c=r("picture-filled"),d=r("el-icon"),u=r("el-image");return z(),v("div",{class:"cl-image",style:n({justifyContent:e.justify,height:e.style.h})},[i(u,{src:e.urls[0],fit:e.fit,lazy:e.lazy,"preview-src-list":e.urls,style:n({height:e.style.h,width:e.style.w}),"preview-teleported":""},{error:l(()=>[w("div",A,[i(d,{size:20},{default:l(()=>[i(c)]),_:1})])]),_:1},8,["src","fit","lazy","preview-src-list","style"])],4)}const pe=S(B,[["render",C],["__scopeId","data-v-a7ad6da5"]]);export{pe as default};
