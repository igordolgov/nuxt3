import{_}from"./nuxt-link.c4613754.js";import{z as l,A as i,M as e,G as o,H as c,N as a,u as m,E as r}from"./swiper-vue.d5abd6d0.js";import{_ as p,a as f}from"./entry.5fac17db.js";import{u as x}from"./useAssets.a0f77f96.js";import{u as g}from"./cart.07059ea0.js";const h={class:"text-md sm_text-lg"},b={class:"products-list mb-4 sm_mr-4"},k={class:"list-items flex justify-between font-normal sm_flex-col sm_space-y-3 sm_font-normal"};function $(t,u){const s=_;return l(),i("aside",h,[e("ul",b,[e("li",k,[o(s,{class:"link",to:"/MotorsPage"},{default:c(()=>[a("Моторы")]),_:1}),o(s,{class:"link",to:"/PropellersPage"},{default:c(()=>[a("Пропеллеры")]),_:1}),o(s,{class:"link",to:"/StartersPage"},{default:c(()=>[a("Стартеры")]),_:1})])])])}const v={},E=p(v,[["render",$],["__scopeId","data-v-d5cffe26"]]),y={class:"product-preview h-full bg-white"},N=["src","alt"],P={class:"p-2 text-sm text-black"},w={class:"font-bold min-h-[42px]"},L={__name:"PreviewComponent",props:{product:{type:Object,required:!0}},setup(t){const s=x(`/assets/images/products/${t.product.image}`),n=f();return n.products,g(),n.fill(),(S,C)=>{const d=_;return l(),i("div",y,[o(d,{to:`products/${t.product.slug}`},{default:c(()=>[e("img",{class:"object-contain aspect-square bg-stone-300",src:m(s),alt:`${t.product.name}'s image`},null,8,N),e("div",P,[e("h5",w,r(t.product.name),1),e("p",null,r(t.product.price)+" ₽",1)])]),_:1},8,["to"])])}}};export{E as _,L as a};
