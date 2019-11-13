export const data = {
	tripInfo: {
		type: 'rounTrip',
	},
	journeyList: [
		{
			journeyInfo: {
				type: 'departure',
				from: 'Istanbul',
				to: 'Frankfurt',
				date: '24 Ocak'
			},
			flights: [
				{
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
					]
				},
				{
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
				},
				{
					flightId: 3,
					segments: [ 
						{	
							flightNumber: '3',
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
							flightNumber: '3',
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
							flightNumber: '3',
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
				},
				{
					flightId: 4,
					segments: [ 
						{	
							flightNumber: '5',
							carrierCode: 'TK',
							departure: {
							port: 'IST',
							date: '24.01.2020',
							time: '14:00'
							},
							arrival: {
							port: 'ESB',
							date: '24.01.2020',
							time: '17:00'
							}
						},
						{
							flightNumber: '6',
							carrierCode: 'AJ',
							departure: {
							port: 'ESB',
							date: '20.01.2020',
							time: '18:00'
							},
							arrival: {
							port: 'FRA',
							date: '20.01.2020',
							time: '20:00'
							}
						},
						{
							flightNumber: '7',
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
				}
			]
		},
		{
			journeyInfo: {
				type: 'arrival',
				from: 'Frankfurt',
				to: 'Istanbul',
				date: '02 Mart'
			},
			flights: [
				{
					flightId: 1,
					segments: [ 
						{
							flightNumber: 'TK2517',
							carrierCode: 'TK',
							departure: {
							port: 'FRA',
							date: '02.03.2020',
							time: '12:00'
							},
							arrival: {
							port: 'IST',
							date: '02.03.2020',
							time: '14:00'
							}
						}
					],
					price: {
						amount: 250,
						decimal: 99,
						currency: 'TRY'
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
					]
				},
				{
					flightId: 2,
					segments: [ 
						{
							flightNumber: 'TK2',
							carrierCode: 'TK',
							departure: {
							port: 'FRA',
							date: '02.03.2020',
							time: '14:00'
							},
							arrival: {
							port: 'ESB',
							date: '02.03.2020',
							time: '17:00'
							}
						},
						{
							flightNumber: 'TK21',
							carrierCode: 'AJ',
							departure: {
							port: 'ESB',
							date: '02.03.2020',
							time: '18:00'
							},
							arrival: {
							port: 'IST',
							date: '02.03.2020',
							time: '19:00'
							}
						}
					],
					price: {
						amount: 220,
						decimal: 99,
						currency: 'TRY'
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
				},
				{
					flightId: 3,
					segments: [ 
						{	
							flightNumber: '3',
							carrierCode: 'TK',
							departure: {
							port: 'FRA',
							date: '02.03.2020',
							time: '20:00'
							},
							arrival: {
							port: 'IST',
							date: '03.01.2020',
							time: '23:00'
							}
						}
					],
					price: {
						amount: 220,
						decimal: 99,
						currency: 'TRY'
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
				},
				{
					flightId: 5,
					segments: [ 
						{	
							flightNumber: '33',
							carrierCode: 'TK',
							departure: {
							port: 'FRA',
							date: '02.03.2020',
							time: '21:00'
							},
							arrival: {
							port: 'IST',
							date: '03.01.2020',
							time: '23:55'
							}
						}
					],
					price: {
						amount: 220,
						decimal: 99,
						currency: 'TRY'
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
				},
				{
					flightId: 4,
					segments: [ 
						{	
							flightNumber: '23',
							carrierCode: 'TK',
							departure: {
							port: 'FRA',
							date: '02.03.2020',
							time: '22:00'
							},
							arrival: {
							port: 'IST',
							date: '03.03.2020',
							time: '01:00'
							}
						}
					],
					price: {
						amount: 220,
						decimal: 99,
						currency: 'TRY'
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
				}
			]
		},
	]
	
};
