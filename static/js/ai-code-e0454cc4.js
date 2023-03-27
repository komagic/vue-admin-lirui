import{l as Y,v as V}from"./@vue.runtime-dom-7b7b8a44.js";import{s as I,i as Z,m as ee}from"./index-f2a88b9d.js";import{u as D}from"./index-162287ac.js";import{V as te,l as K,d as oe,o as se}from"./@element-plus.icons-vue-e3809a99.js";import{i as ae}from"./@vueuse.core-2f0af90d.js";import{u as ne}from"./menu-64529d28.js";import{l as le}from"./socket.io-client-5c349c77.js";import{d as R,v as ie}from"./lodash-es-d2af5045.js";import{c as de,a as w,b as J}from"./element-plus-e43e0101.js";import{r as re,j as S,u as p}from"./@vue.reactivity-747ae439.js";import{p as q,d as N,o as G,c as P,a as t,a5 as ce,e as ue,W as C,b as s,J as _,N as x,K as b,am as me,al as pe}from"./@vue.runtime-core-3a9e54b6.js";import{O as E}from"./@vue.shared-9aa0355e.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";import"./monaco-editor-9c9b0ff9.js";import"./store-2b1fd532.js";import"./dayjs-7a1ede46.js";import"./axios-aba6f0e0.js";import"./nprogress-f3b783e1.js";import"./mitt-b509fb6d.js";import"./vue-router-19ed6b98.js";import"./pinia-9e37763f.js";import"./vue-demi-71ba0ef2.js";import"./vue-echarts-f1c2bb29.js";import"./resize-detector-a5205554.js";import"./echarts-be9a7bef.js";import"./tslib-54e39b60.js";import"./zrender-3d337fab.js";import"./mockjs-96a45e78.js";import"./vue-70666ebd.js";import"./@vueuse.shared-8ce56883.js";import"./@popperjs.core-c75af06c.js";import"./@ctrl.tinycolor-f8748455.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui.dom-7994f002.js";import"./@floating-ui.core-614032f8.js";import"./engine.io-client-1d8212ae.js";import"./engine.io-parser-a5b7cb40.js";import"./@socket.io.component-emitter-3e1df240.js";import"./socket.io-parser-145dca60.js";function _e(){const{route:c,router:f}=D(),v=re(I.get("chatgpt.apiKey")||""),u=S({total_granted:0,total_used:0,loading:!1}),g=R(()=>{v.value&&(u.loading=!0,l==null||l.emit("getBalance",{apiKey:v.value}))},300);q(v,r=>{g(),I.set("chatgpt.apiKey",r)});let l;function U(r){l||(l=le("https://ai.cool-js.cloud",{transports:["websocket"]}),l&&(l.on("connect",()=>{g(),l==null||l.on("progress",m=>{var $;if(m.includes("[DONE]")){if(c.path!="/magic/ai-code"){const a=de({title:"提示",message:"Ai自动生成代码完成，点击查看",duration:0,onClick(){f.push("/magic/ai-code"),a.close()}})}($=r.onComplete)==null||$.call(r),g()}else try{m.split("data: ").forEach(a=>{var e;if(a){const n=JSON.parse(a),{content:M=""}=n.choices[0].delta;(e=r==null?void 0:r.onMessage)==null||e.call(r,M)}})}catch(a){console.error(a)}}),l==null||l.on("balance",m=>{m=="error apiKey"?(w.error(m),u.total_granted=0,u.total_used=0):(u.total_granted=m.total_granted.toFixed(5),u.total_used=m.total_used.toFixed(5)),u.loading=!1})}),l.on("disconnect",m=>{console.error(m)})))}function k(r){l==null||l.emit("data",r)}return{connect:U,send:k,apiKey:v,balance:u,getBalance:g}}function fe(){const{mitt:c}=D();let f;function v(){u(),f=setInterval(()=>{c.emit("view.scrollTo",{top:Math.random()+1e4})},100)}function u(){f&&clearInterval(f)}return{start:v,stop:u}}const ve={class:"text-stage"},ge={class:"wrapper"},he=ce('<div class="slash" data-v-a0f669c6></div><div class="sides" data-v-a0f669c6><div class="side" data-v-a0f669c6></div><div class="side" data-v-a0f669c6></div><div class="side" data-v-a0f669c6></div><div class="side" data-v-a0f669c6></div></div>',2),ye={class:"text"},Ve={class:"text--backing"},Ce={class:"text--left"},xe={class:"inner"},be={class:"text--right"},we={class:"inner"},ze=N({name:"undefined"}),$e=N({...ze,props:{fontSize:{type:String,default:"30px"},color:{type:String,default:"#000000"},modelValue:String},setup(c){return Y(f=>({ae47e94a:c.fontSize})),(f,v)=>(G(),P("div",ve,[t("div",ge,[he,t("div",ye,[t("div",Ve,E(c.modelValue),1),t("div",Ce,[t("div",xe,E(c.modelValue),1)]),t("div",be,[t("div",we,E(c.modelValue),1)])])])]))}});const Se=W($e,[["__scopeId","data-v-a0f669c6"]]),z=c=>(me("data-v-52c8d0ab"),c=c(),pe(),c),ke={class:"ai-code"},Ee={class:"container"},Ie={class:"head"},Ne={class:"form"},Ue=z(()=>t("div",{class:"label required"},"CRUD",-1)),Me={class:"row"},Te=z(()=>t("div",{class:"label"},"其他你想做的事？",-1)),Be={class:"btns"},Fe=z(()=>t("div",{class:"tips"},"如遇见 “代码缺失”、“请求超时”，请尝试「刷新」吧",-1)),Ke={class:"codes"},De={class:"item is-entity"},je={class:"label"},Oe={class:"name"},Ae=z(()=>t("span",null,"Entity（实体类）",-1)),Je={class:"item is-controller"},Re={class:"label"},qe={class:"name"},Ge=z(()=>t("span",null,"Controller（控制层）",-1)),Pe={class:"item is-vue"},We={class:"label"},He={class:"name"},Le=z(()=>t("span",null,"Vue（页面）",-1)),Qe={class:"op"},Xe=z(()=>t("div",{class:"bottom"},null,-1)),Ye=N({name:"magic-ai-code"}),Ze=N({...Ye,setup(c){const{service:f,mitt:v,refs:u,setRefs:g}=D(),{copy:l}=ae(),U=ne(),k=_e(),r=fe(),m=Z.useForm(),$=S({options:{fontSize:16}}),a=S(I.get("ai-create.form")||{name:"收货地址",module:"user",other:"",columns:["用户ID","联系人","手机号","省市区","地址","是否默认"]}),e=S({disabled:!1,coding:"",message:[],path:"",columns:[],api:[{path:"/add",summary:"新增"},{path:"/info",summary:"单个信息"},{path:"/update",summary:"修改"},{path:"/delete",summary:"删除"},{path:"/page",summary:"分页查询"},{path:"/list",summary:"列表查询"}]}),n=S({entity:"",controller:"",vue:""});function M(){if(!a.module)return w.warning("请选择模块");if(!a.name)return w.warning("请填写实体名称");if(ie(a.columns))return w.warning("请填写字段");function d(){j(),e.disabled=!0,k.send(a),r.start()}e.message.length?J.confirm("此操作将重新生成代码，是否继续？","提示",{type:"warning"}).then(()=>{d()}).catch(()=>null):d()}function j(){e.disabled=!1,e.message=[],e.coding="",n.entity="",n.controller="",n.vue=""}function T(d){l(n[d]),w.success("复制成功")}function H(){return w.error("只有在开发环境下才有效")}function L(){const d=e.message.join("").split("```").map(o=>o.replace(`typescript
`,""));d[1]&&(e.coding="entity",n.entity=d[1]),d[3]&&(e.coding="controller",n.controller=d[3])}const O=R(d=>{async function o(){if(e.disabled)return!1;n.entity&&(e.coding="vue",await f.base.sys.menu.parse({entity:n.entity,controller:n.controller,module:a.module}).then(async h=>{e.path=h.path,e.columns=h.columns,n.vue=U.createVue({router:e.path.replace("/admin",""),prefix:e.path,api:e.api,columns:e.columns,module:a.module}),setTimeout(()=>{u.codeVue.formatCode(),v.emit("view.scrollTo",{el:".codes .is-vue"})},300)}).catch(h=>{w.error(h.message)}),e.coding="")}d?o():J.confirm("此操作将会重新生成vue代码，是否继续？","提示",{type:"warning"}).then(()=>{o()}).catch(()=>null)},300);return q(()=>a,d=>{I.set("ai-create.form",d)}),ue(()=>{k.connect({onMessage(d){e.message.push(d),L()},onComplete(){e.disabled=!1,r.stop(),O(!0)}})}),(d,o)=>{const h=C("cl-select"),A=C("el-input"),Q=C("el-form"),y=C("el-button"),B=C("el-icon"),F=C("cl-editor"),X=C("cl-form");return G(),P("div",ke,[t("div",Ee,[t("div",Ie,[s(Se,{"model-value":"Cool Ai 极速编码"})]),t("div",Ne,[s(Q,{disabled:e.disabled},{default:_(()=>[Ue,t("div",Me,[s(h,{class:"module",placeholder:"请选择模块",size:"large",modelValue:a.module,"onUpdate:modelValue":o[0]||(o[0]=i=>a.module=i),options:p(ee).dirs,"label-key":"name","value-key":"name","allow-create":""},null,8,["modelValue","options"]),s(A,{class:"name",modelValue:a.name,"onUpdate:modelValue":o[1]||(o[1]=i=>a.name=i),placeholder:"实体名称，如：收货地址"},null,8,["modelValue"]),s(h,{class:"columns",size:"large",multiple:"","allow-create":"",modelValue:a.columns,"onUpdate:modelValue":o[2]||(o[2]=i=>a.columns=i),"default-first-option":"",placeholder:"请填写字段，多个按回车。如：姓名、年龄、状态"},null,8,["modelValue"])]),Te,s(A,{type:"textarea",modelValue:a.other,"onUpdate:modelValue":o[3]||(o[3]=i=>a.other=i),rows:5,placeholder:"如：分页查询时姓名、手机号字段设置成可模糊搜索"},null,8,["modelValue"])]),_:1},8,["disabled"])]),t("div",Be,[s(y,{round:"",size:"large",type:"primary",icon:p(te),disabled:e.disabled,loading:e.disabled,onClick:M},{default:_(()=>[x(E(e.disabled?"思考中":e.message.length?"重新生成":"下一步"),1)]),_:1},8,["icon","disabled","loading"])]),Fe,t("div",Ke,[b(t("div",De,[t("div",je,[t("div",Oe,[Ae,b(s(B,{class:"is-loading"},{default:_(()=>[s(p(K))]),_:1},512),[[V,e.coding=="entity"]])]),s(y,{round:"",size:"small",onClick:o[4]||(o[4]=i=>T("entity"))},{default:_(()=>[x("Copy")]),_:1}),s(y,{round:"",type:"success",size:"small",onClick:o[5]||(o[5]=i=>p(O)())},{default:_(()=>[x(" 生成Vue代码 ")]),_:1})]),s(F,{name:"cl-editor-monaco",ref:p(g)("codeEntity"),options:$.options,height:"auto",autofocus:"",autosize:"",language:"typescript",modelValue:n.entity,"onUpdate:modelValue":o[6]||(o[6]=i=>n.entity=i)},null,8,["options","modelValue"])],512),[[V,n.entity]]),b(t("div",Je,[t("div",Re,[t("div",qe,[Ge,b(s(B,{class:"is-loading"},{default:_(()=>[s(p(K))]),_:1},512),[[V,e.coding=="controller"]])]),s(y,{round:"",size:"small",onClick:o[7]||(o[7]=i=>T("controller"))},{default:_(()=>[x("Copy")]),_:1})]),s(F,{name:"cl-editor-monaco",ref:p(g)("codeController"),options:$.options,height:"auto",autosize:"",language:"typescript",modelValue:n.controller,"onUpdate:modelValue":o[8]||(o[8]=i=>n.controller=i)},null,8,["options","modelValue"])],512),[[V,n.controller]]),b(t("div",Pe,[t("div",We,[t("div",He,[Le,b(s(B,{class:"is-loading"},{default:_(()=>[s(p(K))]),_:1},512),[[V,e.coding=="vue"]])]),s(y,{round:"",size:"small",onClick:o[9]||(o[9]=i=>T("vue"))},{default:_(()=>[x("Copy")]),_:1})]),s(F,{name:"cl-editor-monaco",ref:p(g)("codeVue"),options:$.options,height:"auto",autosize:"",language:"html",modelValue:n.vue,"onUpdate:modelValue":o[10]||(o[10]=i=>n.vue=i)},null,8,["options","modelValue"])],512),[[V,n.vue]])]),b(t("div",Qe,[s(y,{icon:p(oe),round:"",size:"large",onClick:j},{default:_(()=>[x(" 取消 ")]),_:1},8,["icon"]),s(y,{icon:p(se),round:"",size:"large",type:"success",onClick:H},{default:_(()=>[x(" 创建文件 ")]),_:1},8,["icon"])],512),[[V,!e.disabled&&e.message.length]]),Xe]),s(X,{ref_key:"Form",ref:m},null,512)])}}});const Jt=W(Ze,[["__scopeId","data-v-52c8d0ab"]]);export{Jt as default};
