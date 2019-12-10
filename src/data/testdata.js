/* eslint-disable no-mixed-spaces-and-tabs */
const aFlight = {
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
  };
const bFlight = {
	flightId: 2,
	segments: [
	  {
		flightNumber: 'TK2',
		carrierCode: 'TK',
		departure: {
		  port: 'IST',
		  date: '24.01.2020',
		  time: '14:00'
		},
		arrival: {
		  port: 'ADA',
		  date: '24.01.2020',
		  time: '17:00'
		}
	  },
	  {
		flightNumber: 'TK21',
		carrierCode: 'AJ',
		departure: {
		  port: 'ADA',
		  date: '24.01.2020',
		  time: '18:00'
		},
		arrival: {
		  port: 'SAW',
		  date: '20.01.2020',
		  time: '19:00'
		}
	  },
	  {
		flightNumber: 'TK22',
		carrierCode: 'TK',
		departure: {
		  port: 'IST',
		  date: '20.01.2020',
		  time: '20:00'
		},
		arrival: {
		  port: 'FRA',
		  date: '20.01.2020',
		  time: '22:00'
		}
	  }
	],
	price: {
	  amount: 220,
	  decimal: 99,
	  currency: 'TRY'
	},
	summary: {
	  carrierList: [
		'TK',
		'NC',
		'JB'
	  ],
	  departure: {
		port: 'IST',
		date: '24.01.2020',
		time: '14:00'
	  },
	  arrival: {
		port: 'FRA',
		date: '20.01.2020',
		time: '22:00'
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
			  amount: 220,
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
			  amount: 332,
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
			  amount: 422,
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
	]
  };
const selectedFlight = {
	flightId: 2,
	segments: [
	  {
		flightNumber: 'TK2',
		carrierCode: 'TK',
		departure: {
		  port: 'IST',
		  date: '24.01.2020',
		  time: '14:00'
		},
		arrival: {
		  port: 'ADA',
		  date: '24.01.2020',
		  time: '17:00'
		}
	  },
	  {
		flightNumber: 'TK21',
		carrierCode: 'AJ',
		departure: {
		  port: 'ADA',
		  date: '24.01.2020',
		  time: '18:00'
		},
		arrival: {
		  port: 'SAW',
		  date: '20.01.2020',
		  time: '19:00'
		}
	  },
	  {
		flightNumber: 'TK22',
		carrierCode: 'TK',
		departure: {
		  port: 'IST',
		  date: '20.01.2020',
		  time: '20:00'
		},
		arrival: {
		  port: 'FRA',
		  date: '20.01.2020',
		  time: '22:00'
		}
	  }
	],
	price: {
	  amount: 220,
	  decimal: 99,
	  currency: 'TRY'
	},
	summary: {
	  carrierList: [
		'TK',
		'AJ',
		'TK'
	  ],
	  departure: {
		port: 'IST',
		date: '24.01.2020',
		time: '14:00'
	  },
	  arrival: {
		port: 'FRA',
		date: '20.01.2020',
		time: '22:00'
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
			  amount: 220,
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
			  amount: 332,
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
			  amount: 422,
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
	selectedbrand: {
		name: 'Eco FLY',
		type: 'Economy',
		price: {
			amount: 220,
			decimal: 99,
			currency: 'TRY'
		},
		rightList: [
		  '10 kg kabin bagajı',
		  '20 kg checkin bagajı'
		]
	}
  };

const fullBrand = {
	flightId: 3,
	segments: [
	  {
		flightNumber: 'TK1276',
		carrierCode: 'TK',
		departure: {
		  port: 'IST',
		  date: '24.01.2020',
		  time: '14:00'
		},
		arrival: {
		  port: 'TZX',
		  date: '24.01.2020',
		  time: '17:00'
		}
	  },
	  {
		flightNumber: 'TK7375',
		carrierCode: 'AJ',
		departure: {
		  port: 'TZX',
		  date: '20.01.2020',
		  time: '14:00'
		},
		arrival: {
		  port: 'ADA',
		  date: '20.01.2020',
		  time: '17:00'
		}
	  },
	  {
		flightNumber: 'TK2312',
		carrierCode: 'JB',
		departure: {
		  port: 'ADA',
		  date: '20.01.2020',
		  time: '14:00'
		},
		arrival: {
		  port: 'FRA',
		  date: '20.01.2020',
		  time: '17:00'
		}
	  }
	],
	price: {
	  amount: 220,
	  decimal: 99,
	  currency: 'TRY'
	},
	summary: {
	  carrierList: [
		'TK',
		'AJ',
		'JB'
	  ],
	  departure: {
		port: 'IST',
		date: '24.01.2020',
		time: '14:00'
	  },
	  arrival: {
		port: 'FRA',
		date: '20.01.2020',
		time: '17:00'
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
			  amount: 220,
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
			  amount: 260,
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
			  amount: 332,
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
	  }
	]
  };

const flights = {
	a: aFlight,
	b: bFlight,
	c: selectedFlight,
	d: fullBrand
};

module.exports = flights;
