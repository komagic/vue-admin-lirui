import{i as p}from"./index-f2a88b9d.js";import{L as w}from"./index-f25a0731.js";import"./store-2b1fd532.js";import{u as k}from"./index-162287ac.js";import{d as u,W as o,o as y,I as V,J as n,b as e,n as j}from"./@vue.runtime-core-3a9e54b6.js";import{r as i}from"./@vue.reactivity-747ae439.js";const B=u({name:"undefined"}),O=u({...B,setup(I,{expose:m}){const{service:d}=k(),r=i(!1),c=i(""),_=p.useTable({autoHeight:!1,columns:[{label:"#",type:"index"},{label:"请求",prop:"request",minWidth:150,component:{name:"cl-code-json",props:{popover:!0}}},{label:"耗时",prop:"time",minWidth:100,formatter(t){return t.time+"ms"}},{label:"结果",prop:"result",minWidth:150,component:{name:"cl-code-json",props:{popover:!0}}},{label:"类型",prop:"type",minWidth:100,dict:w},{label:"异常信息",prop:"error",minWidth:150,showOverflowTooltip:!0},{label:"执行时间",prop:"createTime",minWidth:160,sortable:"desc"}]}),s=p.useCrud({service:d.cloud.func.log});function f(t){r.value=!0,c.value=`日志列表（${t.name}）`,j(()=>{var l;(l=s.value)==null||l.refresh({page:1,infoId:t.id})})}function b(){r.value=!1}return m({open:f,close:b}),(t,l)=>{const v=o("cl-refresh-btn"),a=o("cl-row"),h=o("cl-table"),x=o("cl-flex1"),g=o("cl-pagination"),C=o("cl-crud"),T=o("cl-dialog");return y(),V(T,{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=W=>r.value=W),title:c.value,width:"1200px"},{default:n(()=>[e(C,{ref_key:"Crud",ref:s,padding:"0"},{default:n(()=>[e(a,null,{default:n(()=>[e(v)]),_:1}),e(a,null,{default:n(()=>[e(h,{ref_key:"Table",ref:_},null,512)]),_:1}),e(a,null,{default:n(()=>[e(x),e(g)]),_:1})]),_:1},512)]),_:1},8,["modelValue","title"])}}});export{O as _};