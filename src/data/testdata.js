var aFlight = {
	flightId: 1,
	segments: [
	  {
		flightNumber: 'TK1',
		carrierCode: 'TK',
		departure: {
		port: 'IST',
		date: '24.01.2020',
		time: '12:00'
		},
		arrival: {
		  port: 'FRA',
		  date: '24.01.2020',
		  time: '14:00'
		}
	  }
	],
	price: {
	  amount: 250,
	  decimal: 99,
	  currency: 'TRY'
	},
	summary: {
	  carrierList: [
		'TK'
	  ],
	  departure: {
		port: 'IST',
		date: '24.01.2020',
		time: '12:00'
	  },
	  arrival: {
		port: 'FRA',
		date: '24.01.2020',
		time: '14:00'
	  }
	},
	cabinList: [
	  {
		name: 'Economy',
		brandList: [
		  {
			name: 'Eco FLY',
			type: 'Economy',
			price: {
			  amount: 250,
			  decimal: 99,
			  currency: 'TRY'
			},
			rightList: [
			  '10 kg kabin bagajı',
			  '20 kg checkin bagajı'
			]
		  },
		  {
			name: 'Extra FLY',
			type: 'Economy',
			price: {
			  amount: 280,
			  decimal: 99,
			  currency: 'TRY'
			},
			rightList: [
			  '15 kg kabin bagajı',
			  '25 kg checkin bagajı',
			  'ikram',
			  'ücretsiz koltuk seçimi',
			  'ücretsiz değişiklik',
			  'cezalı iade'
			]
		  },
		  {
			name: 'Premium FLY',
			type: 'Economy',
			price: {
			  amount: 352,
			  decimal: 99,
			  currency: 'TRY'
			},
			rightList: [
			  '20 kg kabin bagajı',
			  '30 kg checkin bagajı',
			  'ikram',
			  'ücretsiz koltuk seçimi',
			  'ücretsiz değişiklik',
			  'cezasız iade'
			]
		  }
		]
	  },
	  {
		name: 'Business',
		brandList: [
		  {
			name: 'Business',
			type: 'Business',
			price: {
			  amount: 452,
			  decimal: 99,
			  currency: 'TRY'
			},
			rightList: [
			  '20 kg kabin bagajı',
			  '30 kg checkin bagajı',
			  'Özel ikram',
			  'ücretsiz koltuk seçimi',
			  'ücretsiz değişiklik',
			  'cezasız iade',
			  'business launch'
			]
		  }
		]
	  }
	],
	selectedbrand: null
  }

module.exports = aFlight;