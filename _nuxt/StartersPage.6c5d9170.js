import{_ as p,a as u}from"./PreviewComponent.25eb080b.js";import{_ as m}from"./nuxt-link.fd74f88a.js";import{b as f}from"./entry.e39f1305.js";import{E as o,W as t,L as e,M as h,V as g,X as x,u as b,D as s,Y as v}from"./swiper-vue.f88aa773.js";import"./cart.45500199.js";const k={class:"starters-page"},P=t("head",null,[t("title",null,"SKSAVIA - Стартеры")],-1),S={class:"h-full flex-row sm_flex p-4 pb-0"},V={class:"breadcrumbs pb-3"},w=t("span",null,"Стартеры / ",-1),y={class:"grid grid-cols-2 gap-4 h-fit pb-4 sm_grid-cols-3 lg_grid-cols-5 xl_grid-cols-6"},D={__name:"StartersPage",setup(N){const r=f(),c=r.products.filter(n=>n.category=="Стартеры");return r.fill(),(n,A)=>{const a=p,_=m,l=u;return s(),o("div",k,[P,t("div",S,[e(a,{class:"sm_h-full sticky top-0 pb-px bg-white"}),t("div",null,[t("div",V,[e(_,{to:"/ProductsPage"},{default:h(()=>[v("Каталог / ")]),_:1}),w]),t("div",y,[(s(!0),o(g,null,x(b(c),(d,i)=>(s(),o("div",{key:"product "+i},[e(l,{class:"border border-transparent hover_rounded-xl hover_border-gray-500",product:d},null,8,["product"])]))),128))])])])])}}};export{D as default};
