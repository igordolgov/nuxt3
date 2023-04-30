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
		item.amount += 1
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

// import { useRuntimeConfig } from 'nuxt/app'
// import { loadStripe } from '@stripe/stripe-js'

// export const useCartStore = definePiniaStore('cart-store', {
// 	state: () => ({
// 		items: [],
// 	}),

// 	getters: {},

// 	actions: {
// 		async addToCart(itemPayload) {
// 			const existingItem = this.items.find((item) => {
// 				return item.productId === itemPayload.id
// 			})
// 			if (existingItem) {
// 				let existingItemIndex = this.items.findIndex(
// 					(item) => item.productId === existingItem.productId
// 				)
// 				existingItem.quantity = existingItem.quantity + 1
// 				existingItem.subTotal =
// 					itemPayload.price * existingItem.quantity
// 				this.items[existingItemIndex] = existingItem
// 			} else {
// 				this.items.push({
// 					productId: itemPayload.id,
// 					productName: itemPayload.name,
// 					price: itemPayload.price,
// 					currency: itemPayload.currency || 'gbp',
// 					quantity: 1,
// 					subTotal: itemPayload.price,
// 					stripePriceId: itemPayload.stripePriceId,
// 				})
// 			}
// 		},

// 		async takePayment() {
// 			const config = useRuntimeConfig()
// 			const stripe = await loadStripe(config.public.stripePk)

// 			const lineItems = []
// 			this.items.forEach((cartItem) => {
// 				lineItems.push({
// 					price: cartItem.stripePriceId,
// 					quantity: cartItem.quantity,
// 				})
// 			})

// 			const { error } = await stripe.redirectToCheckout({
// 				lineItems: lineItems,
// 				mode: 'payment',
// 				successUrl: `${config.public.appUrl}/success`,
// 				cancelUrl: `${config.public.appUrl}`,
// 			})
// 		},
// 	},
// })
