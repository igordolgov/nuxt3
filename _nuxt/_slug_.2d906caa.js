import{h as w,A as i,M as o,E as a,u as e,G as y,H as c,B as S,W as b,P as p,X as h,z as n,Q as f,C as v,Y as k,Z as A,_ as C,$ as N,a0 as q,a1 as B}from"./swiper-vue.71bcfdad.js";import{a as P,b as K}from"./entry.a58c7d42.js";import{u as M}from"./useAssets.e0a3da41.js";import{u as V}from"./cart.4d1fb339.js";const j={class:"product-slug lg_container"},I={class:"block sm_flex pb-0 sm_p-4"},$=["src"],x={class:"ml-6"},z={class:"text-xl font-semibold"},E={key:0},D={key:1,class:"text-red-500 font-semibold"},F={class:"mb-4"},R={__name:"[slug]",setup(G){const l=P();l.products;const d=V(),m=K(),s=w(()=>l.products.find(t=>t.slug===m.params.slug));return M(`/public/img/${s.value.images}`),(t,u)=>{const _=B,g=h;return n(),i(p,null,[o("head",null,[o("title",null,"SKSAVIA - "+a(e(s).name),1)]),o("div",j,[o("div",I,[y(g,{class:"mb-4 w-full",modules:["SwiperAutoplay"in t?t.SwiperAutoplay:e(k),"SwiperNavigation"in t?t.SwiperNavigation:e(A),"SwiperPagination"in t?t.SwiperPagination:e(C),"SwiperKeyboard"in t?t.SwiperKeyboard:e(N),"SwiperMousewheel"in t?t.SwiperMousewheel:e(q)],"slides-per-view":1,loop:!0,navigation:"",mousewheel:"",keyboard:{enabled:!0},pagination:{clickable:!0},autoplay:{delay:8e3,disableOnInteraction:!0}},{default:c(()=>[(n(!0),i(p,null,f(e(s).images,r=>(n(),v(_,{class:"swiper-slide flex justify-center object-contain text-center bg-stone-200 aspect-square",key:r.id},{default:c(()=>[o("img",{class:"object-contain select-none",src:r.src},null,8,$)]),_:2},1024))),128))]),_:1},8,["modules"]),o("div",x,[o("h2",z,a(e(s).name),1),o("p",null,a(e(s).description),1),e(s).quantity>0?(n(),i("p",E,"Количество: "+a(e(s).quantity)+" шт.",1)):(n(),i("p",D,"НЕТ В НАЛИЧИИ!")),o("p",null,a(e(s).condition),1),o("p",F,a(e(s).price)+" руб.",1),e(s).quantity>0?(n(),i("button",{key:2,class:S(["bg-[#2490C5] px-6 py-4 text-white rounded-lg hover_bg-sky-600",{disabled:e(s).quantity<1}]),onClick:u[0]||(u[0]=r=>e(d).addItem(e(s)))},"Добавить в Корзину",2)):b("",!0)])])])],64)}}};export{R as default};
