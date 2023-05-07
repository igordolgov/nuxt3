import { f as defineStore } from './server.mjs';

const state = () => ({
  items: [],
  shipping: 1e3
});
const getters = {
  count() {
    let count = 0;
    if (this.items.length) {
      for (const item of this.items) {
        count = count + item.amount;
      }
    }
    return count;
  },
  isEmpty: (state2) => state2.count === 0,
  total() {
    let totalPrice = 0;
    if (this.items.length) {
      for (const item of this.items) {
        let subtot = item.amount * item.price;
        totalPrice = totalPrice + subtot;
      }
      return totalPrice + this.shipping;
    } else {
      return 0;
    }
  }
};
const actions = {
  addItem(item) {
    let exists = false;
    for (const cartItem of this.items) {
      if (cartItem.id === item.id) {
        cartItem.amount = cartItem.amount + 1;
        exists = true;
        break;
      }
    }
    if (!exists) {
      this.items.push({
        ...item,
        amount: 1
      });
    }
  },
  clearItem(itemName) {
    this.items = this.items.filter((item) => item.name != itemName);
  },
  increment(item) {
    if (item.amount > item.quantity - 1) {
      alert("\u0412\u0441\u0435\u0433\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432: " + item.quantity + " \u0448\u0442. \u041D\u0435\u043B\u044C\u0437\u044F \u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438");
    } else {
      item.amount += 1;
    }
  },
  decrement(item) {
    if (item.amount >= 2) {
      item.amount -= 1;
    } else {
      item.amount = 1;
    }
  }
};
const useCartStore = defineStore("useCartStore", {
  state,
  getters,
  actions
});

export { useCartStore as u };
//# sourceMappingURL=cart-350cff1f.mjs.map
