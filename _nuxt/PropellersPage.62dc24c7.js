import{_ as d,a as i}from"./PreviewComponent.4e59fb5f.js";import{a as u}from"./entry.e068b239.js";import{A as e,M as o,G as c,P as m,Q as f,u as g,z as s}from"./swiper-vue.7fb0dc45.js";import"./nuxt-link.89849ecb.js";import"./cart.4c6805e4.js";const h={class:"propellers-page"},b=o("head",null,[o("title",null,"SKSAVIA - Пропеллеры")],-1),x={class:"h-full flex-row sm_flex p-4 pb-0"},v={class:"grid grid-cols-2 gap-4 h-fit pb-4 sm_grid-cols-3 lg_grid-cols-5 xl_grid-cols-6"},V={__name:"PropellersPage",setup(P){const t=u(),l=t.products.filter(r=>r.category=="Пропеллеры");return t.fill(),(r,k)=>{const n=d,a=i;return s(),e("div",h,[b,o("div",x,[c(n,{class:"sm_h-full sticky top-0 pb-px bg-white"}),o("div",v,[(s(!0),e(m,null,f(g(l),(_,p)=>(s(),e("div",{class:"border-2 lg_border border-stone-500 hover_shadow-lg",key:"product "+p},[c(a,{product:_},null,8,["product"])]))),128))])])])}}};export{V as default};