import{_ as p}from"./nuxt-link.44860860.js";import{u as f}from"./cart.2583079b.js";import{_ as d}from"./_plugin-vue_export-helper.c27b6911.js";import{h as g,z as r,E as b,C as n,u as l,A as m,P as k,$ as v,a0 as w,a1 as y,a2 as C,I as s,B as o,J as i}from"./swiper-vue.c403ca70.js";import"./entry.114649b5.js";import S from"./Icon.d6130917.js";const I=t=>(y("data-v-30880456"),t=t(),C(),t),$={key:0,class:"absolute -top-1 right-0 bg-red-600 text-white rounded-full text-xs h-5 w-5 text-center flex justify-center justify-content-center flex-col border"},T=I(()=>s("svg",{class:"w-7 h-7 my-auto mr-3",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewbox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"})],-1)),z={__name:"CartIndicator",setup(t){const c=f(),e=g(()=>c.items);return(_,u)=>{const a=p;return r(),b(a,{class:w(["relative",{disabled:l(e).length<1}]),to:"/cart"},{default:n(()=>[l(e).length>0?(r(),m("div",$,k(l(e).length),1)):v("",!0),T]),_:1},8,["class"])}}},L=d(z,[["__scopeId","data-v-30880456"]]),A=""+globalThis.__publicAssetsURL("img/logo.png"),B={class:"flex items-center text-white text-lg sticky z-50 inset-x-0 top-0 h-14 bg-[#2490C5]"},N={class:"container mx-auto md_px-4"},V={class:"flex items-center justify-between sm_mr-0"},j=s("div",{class:"site-logo hidden sm_block"},[s("img",{class:"mr-6 max-h-14",src:A,alt:"SKSAVIA"})],-1);function M(t,c){const e=p,_=L;return r(),m("header",B,[s("div",N,[s("nav",V,[o(e,{class:"flex items-center",to:"/"},{default:n(()=>[j,o(e,{class:"mr-8",to:"/"},{default:n(()=>[i("Главная")]),_:1}),o(e,{class:"sm:px-3 mr-8",to:"/ProductsPage"},{default:n(()=>[i("Каталог")]),_:1}),o(e,{class:"mr-8",to:"/ContactsPage"},{default:n(()=>[i("Контакты")]),_:1})]),_:1}),o(_)])])])}const P={},Y=d(P,[["render",M]]);function E(t,c,e,_,u,a){const h=S;return r(),m("button",{class:"back-top hidden fixed bottom-14 right-12 right-10 z-20 cursor-pointer",onClick:c[0]||(c[0]=(...x)=>a.backTop&&a.backTop(...x))},[o(h,{name:"material-symbols:arrow-circle-up",color:"#2490C5",size:"60px"})])}const q={name:"back-top",data(){return{isActive:!1}},methods:{backTop(){window.scrollTo({top:0,behavior:"smooth"})},handleScroll(){const t=document.querySelector(".back-top");window.pageYOffset>200?t.classList.add("active"):t.classList.remove("active")}},mounted(){window.addEventListener("scroll",this.handleScroll)}},F=d(q,[["render",E]]);export{Y as _,F as a};