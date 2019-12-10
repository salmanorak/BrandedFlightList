/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */

const testData = require('../../src/data/testdata');
require('./registerMe');

jest.autoMockOff();

describe('Flight.JS Item Control Tests ', () => {
	const flightHTML = document.createElement('flight-item');
	flightHTML.data = testData.a;
	document.body.appendChild(flightHTML);
	it('flight-item created', () => {    
        expect(document.querySelectorAll('flight-item')).toHaveLength(1);
	});

	it('has enough brand-item', () => {    
        expect(flightHTML.querySelectorAll('.brand-item')).toHaveLength(4);
	});

	it('has summary ', () => {    
        expect(flightHTML.querySelectorAll('.summary')).toHaveLength(1);
	});

	it('has detail button', () => {    
        expect(flightHTML.querySelectorAll('span.detail')).toHaveLength(1);
	});
	it('does detail button hava an action', () => {    
        expect(typeof flightHTML.querySelector('.detail').click === 'function').toBeTruthy();
	});
	it('has two cabin', () => {    
        expect(flightHTML.querySelectorAll('.cabin')).toHaveLength(2);
	});
	it('is departure Time 12:00', () => {    
        expect(flightHTML.querySelector('.from .time').textContent).toBe('12:00');
	});
	it('data', () => {    
        expect(flightHTML.data).toBe(testData.a);
	});
	it('open Flight Detail', () => {    
		flightHTML.openFlightDetail();
        expect(document.querySelectorAll('flight-details').length).toBe(1);
	});
	it('Spy test', () => {
		const spy = jest.spyOn(flightHTML, 'toogleIsOpen');
		flightHTML.toogleIsOpen();
		expect(spy).toHaveBeenCalled();
		//spy.mockRestore(); -- Event durumunun resetlenmei
	});
	it('Change open state', () => {
		flightHTML.toogleIsOpen();
		expect(flightHTML.isOpen).not.toBeTruthy();
	});
	document.body.innerHTML = '';
});

describe('Flight.JS b Data Test ', () => {
	const flightHTML = document.createElement('flight-item');
	flightHTML.data = testData.b;
	document.body.appendChild(flightHTML);
	it('full brand', () => {    
        expect(flightHTML.querySelectorAll('.brand-item.full')).toHaveLength(1);
	});
	it('carrier logo count', () => {    
        expect(flightHTML.querySelectorAll('.segment-carrier-logo')).toHaveLength(3);
	});
	document.body.innerHTML = '';
});

describe('Flight.JS Selected Flight ', () => {
	const flightHTML = document.createElement('flight-item');
	flightHTML.data = testData.c;
	document.body.appendChild(flightHTML);
	it('have selected brand', () => {    
        expect(flightHTML.querySelectorAll('.best-price .brand')).toHaveLength(1);
	});
	document.body.innerHTML = '';
});

describe('Flight.JS Only Eco Cabin ', () => {
	const flightHTMLd = document.createElement('flight-item');
	flightHTMLd.data = testData.d;
	document.body.appendChild(flightHTMLd);
	it('only Eco Cabin', () => {    
        expect(flightHTMLd.querySelectorAll('.cabin.eco-cabin')).toHaveLength(1);
	});
});
