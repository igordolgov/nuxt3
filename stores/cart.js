import { defineStore } from 'pinia'

const state = () => ({
	items: [],
	shipping: 1000,
})

const getters = {
	count() {
		let count = 0
		if (this.items.length) {
			for (const item of this.items) {
				count = count + item.amount
			}
		}
		return count
	},
	isEmpty: (state) => state.count === 0,

	total() {
		let totalPrice = 0
		if (this.items.length) {
			for (const item of this.items) {
				let subtot = item.amount * item.price
				totalPrice = totalPrice + subtot
			}
			return totalPrice + this.shipping
		} else {
			return 0
		}
	},
}

const actions = {
	addItem(item) {
		let exists = false
		for (const cartItem of this.items) {
			if (cartItem.id === item.id) {
				cartItem.amount = cartItem.amount + 1
				exists = true
				break
			}
		}
		if (!exists) {
			this.items.push({
				...item,
				amount: 1,
			})
		}
	},
	clearItem(itemName) {
		this.items = this.items.filter((item) => item.name != itemName)
	},
	increment(item) {
		if (item.amount > item.quantity - 1) {
			alert("Всего товаров: " + item.quantity + " шт. Нельзя заказать больше, чем в наличии")
		} else {
			item.amount += 1
		}
	},
	decrement(item) {
		if (item.amount >= 2) {
			item.amount -= 1
		} else {
			item.amount = 1
		}
	},
}

export const useCartStore = defineStore('useCartStore', {
	state,
	getters,
	actions
})
