import{n as r}from"./vendor.83fe6efe.js";const i=r({id:"SystemConfig",state:()=>({headerHeight:100,defaultColor:"#fff",scrollColor:"#fff"}),getters:{getHeaderHeight(){return this.headerHeight+"px"},getTranstionTop(){return"-"+this.headerHeight+"px"}},actions:{updateSystemConfig({type:e,value:t}){this[e]=t}}});export{i as u};