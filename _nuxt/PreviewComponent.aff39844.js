import{_ as h}from"./nuxt-link.f9cb3312.js";import{_ as f,a as g}from"./entry.64340012.js";import{z as c,A as d,M as e,G as n,H as l,N as u,E as r,u as i,R as x,U as v}from"./swiper-vue.71bcfdad.js";import{u as y}from"./useAssets.306e9ab2.js";import{u as k}from"./cart.db125f5d.js";const m=t=>(x("data-v-815aad73"),t=t(),v(),t),w={class:"text-md sm_text-lg"},$={class:"products-list mb-3"},S={class:"list-items flex w-48 font-normal sm_flex-col sm_space-y-3 sm_font-normal"},N={class:"hidden sm_inline-block"},P=m(()=>e("div",{class:"line hidden w-4 h-1 lg_h-px bg-sky-500 absolute -right-4 top-5"},null,-1)),C={class:"hidden sm_inline-block"},A=m(()=>e("div",{class:"line hidden w-4 h-1 lg_h-px bg-sky-500 absolute -right-4 top-5"},null,-1)),I={class:"hidden sm_inline-block"},q=m(()=>e("div",{class:"line hidden w-4 h-1 lg_h-px bg-sky-500 absolute -right-4 top-5"},null,-1)),B={__name:"AsideComponent",setup(t){const _=g(),o=_.products;return _.fill(),(p,b)=>{const a=h;return c(),d("aside",w,[e("ul",$,[e("li",S,[n(a,{class:"link border-2 lg_border border-gray-700 px-3 rounded-lg hover_shadow-md py-2 mr-4 relative",to:"/MotorsPage"},{default:l(()=>[u("Моторы"),e("div",N," ("+r(i(o).filter(s=>s.category=="Моторы").length)+")",1),P]),_:1}),n(a,{class:"border-2 lg_border border-gray-700 px-3 rounded-lg hover_shadow-md py-2 mr-4 relative",to:"/PropellersPage"},{default:l(()=>[u("Пропеллеры"),e("div",C," ("+r(i(o).filter(s=>s.category=="Пропеллеры").length)+")",1),A]),_:1}),n(a,{class:"border-2 lg_border border-gray-700 px-3 rounded-lg hover_shadow-md py-2 mr-4 relative",to:"/StartersPage"},{default:l(()=>[u("Стартеры"),e("div",I," ("+r(i(o).filter(s=>s.category=="Стартеры").length)+")",1),q]),_:1})])])])}}},T=f(B,[["__scopeId","data-v-815aad73"]]),V={class:"product-preview h-full bg-white"},j=["src","alt"],E={class:"p-2 text-sm"},L={class:"font-semibold min-h-[42px]"},M={key:0,class:"text-red-500 font-semibold"},z={key:1},U={__name:"PreviewComponent",props:{product:{type:Object,required:!0}},setup(t){const o=y(`/assets/images/products/${t.product.image}`),p=g();return p.products,k(),p.fill(),(b,a)=>{const s=h;return c(),d("div",V,[n(s,{to:`products/${t.product.slug}`},{default:l(()=>[e("img",{class:"object-contain aspect-square bg-stone-300",src:i(o),alt:`${t.product.name}'s image`},null,8,j),e("div",E,[e("h5",L,r(t.product.name),1),t.product.quantity<1?(c(),d("p",M,"Нет в наличии")):(c(),d("p",z,r(t.product.price)+" ₽",1))])]),_:1},8,["to"])])}}};export{T as _,U as a};