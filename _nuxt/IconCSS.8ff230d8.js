import{l as m,O as d,h as o,z as f,A as x,F as S,u as c}from"./swiper-vue.d5abd6d0.js";import{u as z,_ as I}from"./entry.c402cd53.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(_){var a;const s=_;d(n=>({"71ded496":c(p)}));const e=z();(a=e==null?void 0:e.nuxtIcon)!=null&&a.aliases;const l=o(()=>{var n;return(((n=e==null?void 0:e.nuxtIcon)==null?void 0:n.aliases)||{})[s.name]||s.name}),p=o(()=>`url('https://api.iconify.design/${l.value.replace(":","/")}.svg')`),r=o(()=>{var t,i,u;if(!s.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const n=s.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(n))===n?`${n}px`:n});return(n,t)=>(f(),x("span",{style:S({width:c(r),height:c(r)})},null,4))}});const g=I(y,[["__scopeId","data-v-11604bcf"]]);export{g as default};
