import{W as le,X as ie,u as ne,P as ce,$ as re}from"./@element-plus.icons-vue-e3809a99.js";import{o as pe,i as ue}from"./index-8b7486b1.js";import"./store-2b1fd532.js";import{u as Q}from"./index-7911eabc.js";import{u as de}from"./hook-2143b124.js";import{w as P}from"./@vue.runtime-dom-7b7b8a44.js";import{i as _e}from"./@vueuse.core-2f0af90d.js";import{f as fe,a as ve,_ as me}from"./viewer.vue_vue_type_script_setup_true_name_item-viewer_lang-3fc5abe8.js";import{y as ge,d as M,q as I,p as Y,o as a,c as p,a as d,W as b,F as j,I as V,J as _,b as u,M as F,_ as X,N as L,K as H,U as ye,z as he}from"./@vue.runtime-core-3a9e54b6.js";import{r as G,u as e,j as ke}from"./@vue.reactivity-747ae439.js";import{_ as Z}from"./_plugin-vue_export-helper-c27b6911.js";import{a as T,b as be}from"./element-plus-e43e0101.js";import{O as $,p as xe,o as ee}from"./@vue.shared-9aa0355e.js";function te(){return{space:ge("upload-space")}}const we={class:"item-video"},Ce=["src"],$e=M({name:"item-video"}),Ie=M({...$e,props:{data:Object,list:Array},setup(f,{expose:E}){const D=f,{space:v}=te(),m=G(),g=I(()=>D.data||{}),x=I(()=>g.value.progress===void 0||g.value.progress===100);function s(){var c;v.list.value.forEach(o=>{o.isPlay=g.value.id==o.id}),(c=m.value)==null||c.play()}function h(){var o;const c=v.list.value.find(r=>r.id==g.value.id);c&&(c.isPlay=!1),(o=m.value)==null||o.pause()}return Y(()=>g.value.isPlay,c=>{c?s():h()}),E({play:s,pause:h,loaded:x}),(c,o)=>(a(),p("div",we,[d("video",{ref_key:"Video",ref:m,src:e(g).url},null,8,Ce)]))}});const Ve=Z(Ie,[["__scopeId","data-v-27da804f"]]),Ee={class:"item-file__wrap"},De=["onContextmenu"],Se={key:0,class:"item-file__error"},Me={class:"image-error"},Ne={key:2,class:"item-file__name"},Pe={class:"item-file__actions"},je={class:"item-file__progress-bar"},ze={class:"item-file__progress-value"},Be={key:2,class:"item-file__index"},Oe=M({name:"item-file"}),Re=M({...Oe,props:{data:Object,list:Array},emits:["select","remove","confirm"],setup(f,{emit:E}){const D=f,{refs:v,setRefs:m}=Q(),{copy:g}=_e(),{space:x}=te(),s=I(()=>D.data||{}),h=I(()=>x.selection.value.findIndex(y=>y.id===s.value.id)),c=I(()=>h.value>=0),o=I(()=>s.value.preload||s.value.url),r=I(()=>fe(s.value.type||""));function w(){E("select",s.value)}function A(){}function z(){E("remove",s.value)}function B(){x.preview(s.value)}function S(y){ue.ContextMenu.open(y,{hover:{target:"item-file__wrap"},list:[{label:"预览",callback(n){B(),n()}},{label:"复制链接",callback(n){s.value.url&&(g(s.value.url),T.success("复制成功")),n()}},{label:c.value?"取消选中":"选中",callback(n){w(),n()}},{label:"删除",callback(n){z(),n()}}]})}return(y,n)=>{var O,R,q;const U=b("el-image"),C=b("el-icon"),W=b("el-progress");return a(),p("div",Ee,[d("div",{class:ee(["item-file",[`is-${e(s).type}`]]),onClick:n[2]||(n[2]=t=>w()),onDblclick:n[3]||(n[3]=t=>void 0),onContextmenu:P(S,["stop","prevent"])},[e(s).error?(a(),p("div",Se,"上传失败："+$(e(s).error),1)):(a(),p(j,{key:1},[e(s).type==="image"?(a(),V(U,{key:0,fit:"contain",src:e(o),lazy:""},{error:_(()=>[d("div",Me,[d("span",null,$(e(o)),1)])]),_:1},8,["src"])):e(s).type==="video"?(a(),V(Ve,{key:1,ref:e(m)("video"),data:e(s),list:f.list},null,8,["data","list"])):(a(),p("span",Ne,$(e(ve)(e(o)))+"."+$(e(pe)(e(o))),1)),d("span",{class:"item-file__type",style:xe({backgroundColor:(O=e(r))==null?void 0:O.color})},$((R=e(r))==null?void 0:R.label),5),d("div",Pe,[e(s).type=="video"?(a(),p(j,{key:0},[(q=e(v).video)!=null&&q.loaded?(a(),p(j,{key:0},[e(s).isPlay?(a(),V(C,{key:0,onClick:n[0]||(n[0]=P(t=>e(v).video.pause(),["stop"]))},{default:_(()=>[u(e(le))]),_:1})):(a(),V(C,{key:1,onClick:n[1]||(n[1]=P(t=>{var l;return(l=e(v).video)==null?void 0:l.play()},["stop"]))},{default:_(()=>[u(e(ie))]),_:1}))],64)):F("",!0)],64)):(a(),V(C,{key:1,onClick:P(B,["stop"])},{default:_(()=>[u(e(ne))]),_:1},8,["onClick"])),u(C,{onClick:P(z,["stop"])},{default:_(()=>[u(e(ce))]),_:1},8,["onClick"])]),e(s).progress>0&&e(s).progress<100?(a(),p(j,{key:3},[d("div",je,[u(W,{percentage:e(s).progress,"show-text":!1},null,8,["percentage"])]),d("span",ze,$(e(s).progress),1)],64)):F("",!0)],64)),e(c)?(a(),p("div",Be,[d("span",null,$(e(h)+1),1)])):F("",!0)],42,De)])}}});const qe=Z(Re,[["__scopeId","data-v-5a0f568a"]]),Fe={class:"cl-upload-space-inner__right"},Ge={class:"cl-upload-space-inner__header"},Te={style:{margin:"0px 10px"}},Ae={"infinite-scroll-immediate":!1},Ue={key:1,class:"empty"},We=d("p",null,"将文件拖到此处，或点击按钮上传",-1),Je=M({name:"cl-upload-space-inner"}),it=M({...Je,props:{limit:{type:Number,default:99},accept:String,selectable:Boolean},emits:["selection-change","confirm"],setup(f,{expose:E,emit:D}){const v=f,{service:m,browser:g,refs:x,setRefs:s}=Q(),{ViewGroup:h}=de({label:"分类",title:"文件列表",service:m.space.type,onEdit(){return{width:"400px",props:{labelPosition:"top"},dialog:{controls:["close"]},items:[{label:"名称",prop:"name",value:"",required:!0,component:{name:"el-input",props:{maxlength:20,clearable:!0}}}]}},onSelect(t){y({classifyId:t.id,page:1})}}),c=G(!1),o=G([]),r=G([]),w=ke({page:1,size:50,total:0});function A(){o.value=[]}function z(t){var l,i;m.space.info.add({classifyId:(i=(l=h.value)==null?void 0:l.selected)==null?void 0:i.id,...t}).then(k=>{t.id=k.id}).catch(k=>{T.error(k.message)})}function B(t){r.value.unshift(t)}const S={page:1};async function y(t){var l;A(),Object.assign(S,{type:((l=v.accept)==null?void 0:l.split("/")[0].replace("*",""))||void 0,...w,...t}),S.page==1&&(c.value=!0),await m.space.info.page(S).then(i=>{Object.assign(w,i.pagination),S.page==1&&(r.value=[]),r.value.push(...i.list)}),c.value=!1}function n(t){const l=o.value.findIndex(i=>i.id===t.id);l>=0?o.value.splice(l,1):v.limit==1?o.value=[t]:o.value.length<v.limit&&o.value.push(t)}function U(t){D("confirm",[t])}function C(t){const l=t?[t.id]:o.value.map(i=>i.id);be.confirm("此操作将删除文件, 是否继续?","提示",{type:"warning"}).then(()=>{T.success("删除成功"),l.forEach(i=>{[r.value,o.value].forEach(k=>{const J=k.findIndex(K=>K.id===i);k.splice(J,1)})}),m.space.info.delete({ids:l}).catch(i=>{T.error(i.message)})}).catch(()=>null)}function W(t){x.viewer.open(t,r.value)}Y(o,t=>{D("selection-change",t)},{deep:!0});function O(){r.value.length&&r.value.length<w.total&&y({page:w.page+1})}function R(t){t.preventDefault()}function q(t){t.preventDefault(),t.dataTransfer.files.forEach((l,i)=>{setTimeout(()=>{x.upload.upload(l)},i*10)})}return he("upload-space",{selection:o,refresh:y,loading:c,list:r,preview:W}),E({selection:o,open,close,clear:A,refresh:y}),(t,l)=>{const i=b("el-button"),k=b("cl-upload"),J=b("el-icon"),K=b("el-scrollbar"),se=b("cl-view-group"),oe=X("infinite-scroll"),ae=X("loading");return a(),p("div",{class:"cl-upload-space-inner",onDragover:R,onDrop:q},[u(se,{ref_key:"ViewGroup",ref:h},{right:_(()=>[d("div",Fe,[d("div",Ge,[u(i,{onClick:l[0]||(l[0]=N=>y({page:1}))},{default:_(()=>[L("刷新")]),_:1}),d("div",Te,[u(k,{ref:e(s)("upload"),menu:"space",type:"file","show-file-list":!1,limit:f.limit,"limit-upload":!1,accept:f.accept,multiple:"",onSuccess:z,onUpload:B},{default:_(()=>[u(i,{type:"primary"},{default:_(()=>[L("点击上传")]),_:1})]),_:1},8,["limit","accept"])]),f.selectable?F("",!0):(a(),V(i,{key:0,type:"danger",disabled:o.value.length==0,onClick:l[1]||(l[1]=N=>C())},{default:_(()=>[L("删除选中文件")]),_:1},8,["disabled"]))]),H((a(),V(K,{class:"cl-upload-space-inner__file"},{default:_(()=>[H((a(),p("div",Ae,[r.value.length>0?(a(),p("div",{key:0,class:ee(["list",{"is-mini":e(g).isMini}])},[(a(!0),p(j,null,ye(r.value,N=>(a(),p("div",{class:"item",key:N.preload||N.url},[u(qe,{data:N,list:r.value,onConfirm:U,onSelect:n,onRemove:C},null,8,["data","list"])]))),128))],2)):(a(),p("div",Ue,[u(J,{class:"el-icon--upload"},{default:_(()=>[u(e(re))]),_:1}),We]))])),[[oe,O]])]),_:1})),[[ae,c.value]])])]),_:1},512),u(me,{ref:e(s)("viewer")},null,512)],32)}}});export{it as _};