import{_ as u}from"./CSahNIV4.js";import{G as p,_ as d,o as n,c as s,a as r,F as f,B as g,b as c,w as h,d as v,t as y,u as x,y as M,H as k}from"./CuZ6h29o.js";import{u as l}from"./DZYJpMF9.js";function N(o,t){const{title:i,titleTemplate:a,..._}=o;return l({title:i,titleTemplate:a,_flatMeta:_},{...t,transform(e){const m=p({...e._flatMeta});return delete e._flatMeta,{...e,meta:m}}})}const z=[{title:"Главная",href:"/"},{title:"Проекты",href:"/projects/"}],S={class:"nav-menu"},T={class:"nav-menu__inner"},$={class:"nav-menu__list"},w={__name:"NavMenu",setup(o){const t=z;return(i,a)=>{const _=u;return n(),s("nav",S,[r("div",T,[r("ul",$,[(n(!0),s(f,null,g(x(t),e=>(n(),s("li",{class:"nav-menu__list-item",key:e.title},[c(_,{class:"nav-menu__list-link",to:e.href},{default:h(()=>[v(y(e.title),1)]),_:2},1032,["to"])]))),128))])])])}}},B=d(w,[["__scopeId","data-v-06394a4f"]]),b={class:"wrapper"},C={class:"main"},F=M({__name:"default",setup(o){return l({meta:[{name:"description",content:"My amazing site."}],link:[{rel:"icon",type:"image/x-icon",href:"favicon.ico"}]}),N({title:"My Amazing Site",ogTitle:"My Amazing Site",description:"This is my amazing site, let me tell you all about it.",ogDescription:"This is my amazing site, let me tell you all about it.",ogImage:"https://example.com/image.png",twitterCard:"summary_large_image"}),(t,i)=>{const a=B;return n(),s("div",b,[c(a),r("main",C,[k(t.$slots,"default")])])}}});export{F as default};
