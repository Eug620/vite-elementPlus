import{r as p,o as f,c as _,a as h,b as v,d as E,E as u,e as y,i as P}from"./vendor.1fb59ea6.js";const A=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};A();var L=(i,r)=>{for(const[s,n]of r)i[s]=n;return i};const g={};function x(i,r){const s=p("router-view");return f(),_(s)}var O=L(g,[["render",x]]);const k="modulepreload",l={},I="./",c=function(r,s){return!s||s.length===0?r():Promise.all(s.map(n=>{if(n=`${I}${n}`,n in l)return;l[n]=!0;const e=n.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":k,e||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),e)return new Promise((d,m)=>{o.addEventListener("load",d),o.addEventListener("error",m)})})).then(()=>r())},b=[{path:"/",name:"layout",component:()=>c(()=>import("./index.e03bd15d.js"),["assets/index.e03bd15d.js","assets/vendor.1fb59ea6.js"]),redirect:"Home",children:[{path:"Home",name:"Home",meta:{keepAlive:!0},component:()=>c(()=>import("./index.7b7d1f45.js"),["assets/index.7b7d1f45.js","assets/index.8db8f4c0.css","assets/vendor.1fb59ea6.js","assets/config.3f931994.js","assets/juejin.3bd5518a.js"])},{path:"Pinia",name:"Pinia",meta:{keepAlive:!0},component:()=>c(()=>import("./index.0130d570.js"),["assets/index.0130d570.js","assets/index.0ca2e7cd.css","assets/vendor.1fb59ea6.js","assets/config.3f931994.js"])},{path:"JueJin",name:"JueJin",meta:{keepAlive:!0},component:()=>c(()=>import("./index.ee778f84.js"),["assets/index.ee778f84.js","assets/index.9b78a902.css","assets/vendor.1fb59ea6.js","assets/juejin.3bd5518a.js"])},{path:"Test",name:"Test",meta:{keepAlive:!0},component:()=>c(()=>import("./index.a68a883b.js"),["assets/index.a68a883b.js","assets/vendor.1fb59ea6.js"])}]},{path:"/:pathMatch(.*)*",component:()=>c(()=>import("./index.551f34dd.js"),["assets/index.551f34dd.js","assets/vendor.1fb59ea6.js"])}],R=h({history:v(),routes:b}),T=E(),j=i=>{for(var r in u)i.component(r,u[r])},D=i=>{j(i)},a=y(O);a.use(P);a.use(T);a.use(R);D(a);a.mount("#app");export{L as _};