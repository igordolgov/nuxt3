import{_ as i}from"./nuxt-link.82b3a80d.js";import{u}from"./cart.cc040cb8.js";import{h as p,z as _,C as h,H as a,u as n,A as d,E as x,W as f,B as g,M as e,G as o,N as c,R as v,U as k}from"./swiper-vue.71bcfdad.js";import{_ as w}from"./entry.ec694639.js";const C={key:0,class:"absolute -top-1 right-1 bg-red-600 text-white rounded-full text-xs h-5 w-5 mx-0 text-center flex justify-center justify-content-center flex-col border"},b=e("svg",{class:"w-7 h-7 mr-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewbox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"})],-1),y={__name:"CartIndicator",setup(s){const r=u(),t=p(()=>r.items);return(l,A)=>{const m=i;return _(),h(m,{class:g(["relative",{disabled:n(t).length<1}]),to:"/cart"},{default:a(()=>[n(t).length>0?(_(),d("div",C,x(n(t).length),1)):f("",!0),b]),_:1},8,["class"])}}},I=""+globalThis.__publicAssetsURL("img/logo.png"),S=s=>(v("data-v-f7946329"),s=s(),k(),s),N={class:"flex items-center text-white text-lg h-14 bg-[#2490C5]"},B={class:"container mx-auto lg_px-4"},M={class:"flex items-center justify-between"},V=S(()=>e("div",{class:"site-logo hidden sm_block"},[e("img",{class:"mr-6 max-h-14",src:I,alt:"SKSAVIA"})],-1));function j(s,r){const t=i,l=y;return _(),d("header",N,[e("div",B,[e("nav",M,[o(t,{class:"flex items-center",to:"/"},{default:a(()=>[V,o(t,{class:"nav_link",to:"/"},{default:a(()=>[c("Главная")]),_:1}),o(t,{class:"nav_link sm:px-3",to:"/ProductsPage"},{default:a(()=>[c("Каталог")]),_:1}),o(t,{class:"nav_link contacts",to:"/ContactsPage"},{default:a(()=>[c("Контакты")]),_:1})]),_:1}),o(l)])])])}const z={},E=w(z,[["render",j],["__scopeId","data-v-f7946329"]]);export{E as _};