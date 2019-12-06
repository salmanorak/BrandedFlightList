/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */

require('../bundle');
const testData = require('../../src/data/testdata')

jest.autoMockOff();

describe('Flight.JS Item Control Tests ', ()=>{
	const flightHTML = document.createElement('flight-item');
	flightHTML.data = testData;
	document.body.appendChild(flightHTML)
	it('flight-item created', ()=>{    
        expect(document.querySelectorAll('flight-item')).toHaveLength(1)
	})

	it('has enough brand-item', ()=>{    
        expect(document.querySelectorAll('.brand-item')).toHaveLength(4)
	})

	it('has summary ', ()=>{    
        expect(document.querySelectorAll('.summary')).toHaveLength(1)
	})

	it('has detail button', ()=>{    
        expect(document.querySelectorAll('span.detail')).toHaveLength(1)
	})
	it('does detail button hava an action', ()=>{    
        expect(typeof document.querySelector('.detail').click == 'function').toBeTruthy()
	})
	it('has two cabin', ()=>{    
        expect(document.querySelectorAll('.cabin')).toHaveLength(2)
	})
	it('is departure Time 12:00', ()=>{    
        expect(document.querySelector('.from .time').textContent).toBe('12:00')
	})
	it('data', ()=>{    
        expect(flightHTML.data).toBe(testData)
	})
});
