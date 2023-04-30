const colors = require('tailwindcss/colors')

export default {
	theme: {
		extend: {
			colors: {
				primary: colors.blue,
			},
			backgroundImage: {
				'cart': "url('~/assets/images/shopping_cart.png')",
			},
		},
	},
	content: [],
	//- Вместо знака ':' (для контрольных точек или псевдоэлементов
	//- использовать знак '_' (или любой другой удобный символ)
	separator: '_',
}