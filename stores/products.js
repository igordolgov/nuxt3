//- Pinia — это хранилище для Vue, которое позволяет распространять состояние между компонентами/страницами
import { defineStore } from 'pinia'

const state = () => ({
	products: [],
})

const getters = {
	getProducts: (state) => state.products,
}

const actions = {
	async fill() {
		this.products = (await import('~/data/products.json')).default
	},
}
//- хранилище определяется с помощью defineStore() и для него требуется уникальное имя, передаваемое в качестве первого аргумента:
export const useProductStore = defineStore('productStore', {
	state,
	getters,
	actions,
})
