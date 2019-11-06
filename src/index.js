import './css/main.scss';
import { flightListData } from './data/data.js';
import { init, toogleFlightDetail, selectBrand, selectFlight, showSelectedFlightView } from './components/flightListUtils';
import { Flight } from './js/models/flight.js';

const flights = flightListData.map(flight => new Flight(flight));

init(flights, 'flight-list');

//**** Event Handling ****//
const flightSummaryAll = document.querySelectorAll('.summary');

flightSummaryAll.forEach(flightSummary => {
	if (flightSummary) flightSummary.addEventListener('click', toogleFlightDetail);
});


const flightListHTML = document.querySelectorAll('.flight-item');

flightListHTML.forEach(flight => {
	if (flight) flight.addEventListener('brandSelected', selectFlight);
});

const brandList = document.querySelectorAll('.brand-item');

brandList.forEach(brand => {
	if (brand) brand.addEventListener('click', selectBrand);
});

const journeyList = document.querySelectorAll('.journey');

journeyList.forEach(journey => {
	if (journey) journey.addEventListener('flightSelected', showSelectedFlightView);
});

