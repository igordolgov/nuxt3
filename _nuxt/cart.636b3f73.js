import{e as i}from"./entry.732a21d4.js";const o=()=>({items:[],shipping:1e3}),n={count(){let t=0;if(this.items.length)for(const e of this.items)t=t+e.amount;return t},isEmpty:t=>t.count===0,total(){let t=0;if(this.items.length){for(const e of this.items){let s=e.amount*e.price;t=t+s}return t+this.shipping}else return 0}},r={addItem(t){let e=!1;for(const s of this.items)if(s.id===t.id){s.amount=s.amount+1,e=!0;break}e||this.items.push({...t,amount:1})},clearItem(t){this.items=this.items.filter(e=>e.name!=t)},increment(t){t.amount>t.quantity-1?alert("Всего товаров: "+t.quantity+" шт."):t.amount+=1},decrement(t){t.amount>=2?t.amount-=1:t.amount=1}},m=i("useCartStore",{state:o,getters:n,actions:r});export{m as u};
