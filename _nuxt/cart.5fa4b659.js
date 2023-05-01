import{u as l}from"./cart.09e74bb8.js";import{A as n,M as s,u as o,P as r,Q as d,E as c,R as _,z as a}from"./swiper-vue.d5abd6d0.js";import"./entry.3d9f9326.js";const p={class:"cart-page"},m=s("head",null,[s("title",null,"SKSAVIA - Корзина")],-1),x={class:"container-lg sm_px-4"},h={key:0,class:"cart-full mx-auto bg-white md_w-3/4 lg_w-2/4"},v=_('<h1 class="my-3 text-xl text-center font-semibold">Корзина</h1><div class="bg-neutral-200 font-semibold border-t border-stone-400 px-3 py-1 sm_px-4"><div class="flex justify-between items-center text-sm"><div class="description min-w-[190px] md_min-w-[250px]"><h2 class="md_text-lg">Название / Цена</h2></div><span>Кол-во</span><span class="pr-3">Сумма</span><div class="flex-none mt-2"></div></div></div>',2),u={class:"flex justify-between items-center text-sm"},b=["src"],f={class:"description min-w-[190px] md_min-w-[250px]"},g={class:"md_text-lg"},w={class:"font-light"},y={class:"flex m-0"},k=["onClick"],C={class:"px-2 m-0 border-r-0 border-gray-200 bg-white"},S=["onClick"],V={class:"mt-1"},j=["onClick"],z=s("svg",{class:"w-6 h-6 cursor-pointer hover_text-red-600",fill:"currentColor",viewbox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[s("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),A=[z],B={class:"flex flex-col bg-amber-100 sticky z-10 inset-x-0 bottom-0 ml-auto mr-2 mt-3 px-4 py-2 shadow-md shadow-stone-300 w-[250px]"},E=s("div",{class:"flex justify-between"},[s("div",{class:"shipping"},"Сумма доставки:"),s("span",{class:"pr-[2px]"},"+1000 ₽")],-1),M={class:"flex justify-between"},$=s("div",{class:"summary font-bold"},"Итого:",-1),H={class:"font-bold"},I={key:1,class:"cart-empty text-center my-auto text-5xl text-stone-500 font-bold grid place-items-center"},Q={__name:"cart",setup(L){const e=l();return(N,D)=>(a(),n("div",p,[m,s("div",x,[o(e).isEmpty?(a(),n("div",I,"Корзина пуста")):(a(),n("div",h,[v,(a(!0),n(r,null,d(o(e).items,t=>(a(),n("div",{class:"bg-neutral-50 border-t border-stone-400 px-3 py-2 sm_px-4",key:t.id},[s("div",u,[s("img",{class:"hidden object-contain h-[80px] w-[80px]",src:t.images[0].src},null,8,b),s("div",f,[s("h2",g,c(t.name),1),s("span",w,c(t.price)+" ₽",1)]),s("div",y,[s("button",{class:"pb-[2px] px-2 m-0 border-r-0 border-gray-200",onClick:i=>o(e).decrement(t)},"-",8,k),s("span",C,c(t.amount),1),s("button",{class:"-tracking-[0.25em] pr-3 pl-2 m-0",onClick:i=>o(e).increment(t)},"+",8,S)]),s("div",V,[s("p",null,c(t.price*t.amount)+" ₽",1)]),s("div",{class:"flex-none mt-2 text-gray-400",onClick:i=>o(e).clearItem(t.name)},A,8,j)])]))),128)),s("div",B,[E,s("div",M,[$,s("span",H,c(o(e).total)+" ₽",1)])])]))])]))}};export{Q as default};
