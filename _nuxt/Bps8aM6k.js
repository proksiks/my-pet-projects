import{u as M}from"./B8dSQpkd.js";import{E,r as t,f as w,c as x,a as i,g as z,u as n,o as H}from"./CQ55hSPW.js";const S=E("/images/zoom/map.svg"),W={class:"map"},X={class:"map__body"},Y=i("img",{src:S,alt:"svg Карта",width:"400",height:"400"},null,-1),k=[Y],A={__name:"zoom",setup(P){M({bodyAttrs:{class:"clear-inner"}});const h=t(1),l=t(0),s=t(0),o=t(!1),u=t({x:0,y:0}),r=t(null),_=t(null),v=t(0),f=t(0),g=e=>{e.preventDefault(),u.value={x:e.clientX-l.value,y:e.clientY-s.value},o.value=!0},d=()=>{o.value=!1},y=e=>{if(!o.value)return;e.preventDefault();let a=116,c=r.value.offsetWidth,b=r.value.offseHeight,m=v.value-c-a,p=f.value-b;l.value=e.clientX-u.value.x,l.value>0?l.value>0&&(l.value=0):m>l.value&&(l.value=m),s.value=e.clientY-u.value.y,s.value>0?s.value>0&&(s.value=0):p>s.value&&(s.value=p)};return w(()=>{setTimeout(()=>{v.value=document.querySelector(".content").offsetWidth,f.value=document.querySelector(".content").offsetHeight},1)}),(e,a)=>(H(),x("div",W,[i("div",X,[i("div",{class:"map__content",onWheel:a[0]||(a[0]=(...c)=>e.handleScroll&&e.handleScroll(...c)),onMousedown:g,onMousemove:y,onMouseup:d,onMouseleave:d,ref_key:"parentEl",ref:_},[i("div",{class:"map__wrap",ref_key:"zoomElement",ref:r,style:z({transform:`translate(${n(l)}px, ${n(s)}px) scale(${n(h)})`,cursor:n(o)?"grabbing":"grab"})},k,4)],544)])]))}};export{A as default};