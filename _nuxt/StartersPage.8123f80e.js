import{_ as i,a as p}from"./PreviewComponent.aff39844.js";import{a as m}from"./entry.64340012.js";import{A as t,M as o,G as c,P as u,Q as g,u as f,z as e}from"./swiper-vue.71bcfdad.js";import"./nuxt-link.f9cb3312.js";import"./useAssets.306e9ab2.js";import"./cart.db125f5d.js";const h={class:"starters-page"},b=o("head",null,[o("title",null,"SKSAVIA - Стартеры")],-1),x={class:"flex-row sm_flex p-4 pb-0"},v={class:"grid grid-cols-2 gap-4 h-fit pb-4 sm_grid-cols-3 lg_grid-cols-5 xl_grid-cols-6"},C={__name:"StartersPage",setup(S){const s=m(),a=s.products.filter(r=>r.category=="Стартеры");return s.fill(),(r,k)=>{const n=i,_=p;return e(),t("div",h,[b,o("div",x,[c(n,{class:"sm_h-full sticky top-0 pb-px bg-white"}),o("div",v,[(e(!0),t(u,null,g(f(a),(l,d)=>(e(),t("div",{class:"border-2 lg_border border-stone-500 hover_shadow-lg",key:"product "+d},[c(_,{product:l},null,8,["product"])]))),128))])])])}}};export{C as default};