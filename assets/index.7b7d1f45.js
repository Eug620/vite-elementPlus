import{u as B,s as J,h as V,r as d,o as F,j as A,f as e,w as t,k as f,l,m as y}from"./vendor.1fb59ea6.js";import{u as E}from"./config.3f931994.js";import{u as L}from"./juejin.3bd5518a.js";const q={class:""},z={class:"card-header"},G=f("span",null,"\u4FEE\u6539Pinia\u9875\u9762\u914D\u7F6E",-1),I=y("To Pinia"),K={class:"card-header"},M=f("span",null,"\u4FEE\u6539JueJin\u9875\u9762\u914D\u7F6E",-1),O=y("To JueJin"),$={setup(Q){const _=B(),r=E(),c=L(),{headerHeight:H,defaultColor:b,scrollColor:S}=J(r),{navigationHeight:x,classificationHeight:k,layoutWidth:W}=J(c),i=V({vHeight:H.value,editDefaultColor:b.value,editScrollColor:S.value}),j=a=>{r.updateSystemConfig({type:"headerHeight",value:a})},T=a=>{r.updateSystemConfig({type:"defaultColor",value:a})},U=a=>{r.updateSystemConfig({type:"scrollColor",value:a})},R=()=>{_.push("Pinia")},s=V({navigationHeight:x.value,classificationHeight:k.value,layoutWidth:W.value}),w=a=>{c.updateJueJinStore({type:"navigationHeight",value:a})},D=a=>{c.updateJueJinStore({type:"classificationHeight",value:a})},N=a=>{c.updateJueJinStore({type:"layoutWidth",value:a})},P=()=>{_.push("JueJin")};return(a,n)=>{const p=d("el-button"),m=d("el-input-number"),u=d("el-form-item"),g=d("el-color-picker"),C=d("el-form"),v=d("el-card");return F(),A("div",q,[e(v,{class:"box-card"},{header:t(()=>[f("div",z,[G,e(p,{class:"button",type:"text",onClick:R},{default:t(()=>[I]),_:1})])]),default:t(()=>[e(C,{ref:(o,h)=>{h.RefForm=o},model:l(i),"label-width":"120px"},{default:t(()=>[e(u,{label:"\u9876\u90E8\u9AD8\u5EA6"},{default:t(()=>[e(m,{modelValue:l(i).vHeight,"onUpdate:modelValue":n[0]||(n[0]=o=>l(i).vHeight=o),onChange:j},null,8,["modelValue"])]),_:1}),e(u,{label:"\u9876\u90E8\u989C\u8272"},{default:t(()=>[e(g,{modelValue:l(i).editDefaultColor,"onUpdate:modelValue":n[1]||(n[1]=o=>l(i).editDefaultColor=o),onActiveChange:T},null,8,["modelValue"])]),_:1}),e(u,{label:"\u6EDA\u52A8\u989C\u8272"},{default:t(()=>[e(g,{modelValue:l(i).editScrollColor,"onUpdate:modelValue":n[2]||(n[2]=o=>l(i).editScrollColor=o),onActiveChange:U},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1}),e(v,{class:"box-card"},{header:t(()=>[f("div",K,[M,e(p,{class:"button",type:"text",onClick:P},{default:t(()=>[O]),_:1})])]),default:t(()=>[e(C,{ref:(o,h)=>{h.RefJueJinForm=o},model:l(s),"label-width":"120px"},{default:t(()=>[e(u,{label:"navigationHeight"},{default:t(()=>[e(m,{modelValue:l(s).navigationHeight,"onUpdate:modelValue":n[3]||(n[3]=o=>l(s).navigationHeight=o),onChange:w},null,8,["modelValue"])]),_:1}),e(u,{label:"classificationHeight"},{default:t(()=>[e(m,{modelValue:l(s).classificationHeight,"onUpdate:modelValue":n[4]||(n[4]=o=>l(s).classificationHeight=o),onChange:D},null,8,["modelValue"])]),_:1}),e(u,{label:"layoutWidth"},{default:t(()=>[e(m,{modelValue:l(s).layoutWidth,"onUpdate:modelValue":n[5]||(n[5]=o=>l(s).layoutWidth=o),onChange:N},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1})])}}};export{$ as default};