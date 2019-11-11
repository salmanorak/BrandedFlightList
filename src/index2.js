import './css/main.scss';
import { Flight } from '../src/components/Flight/Flight';
import { FlightList } from '../src/components/Flight/FlightList';
import { flightListData } from './data/data.js';
import { FlightData as FlightDataModel } from './js/models/flightData.js';

window.customElements.define('flight-list', FlightList);
window.customElements.define('flight-item', Flight);

const flights = flightListData.map(flight => new FlightDataModel(flight));

//const data = [{ flightId: 1, summary: { departure: { port: 'IST', time: '12:00' }, arrival: { port: 'ADA', time: '14:00' } } }, { flightId: 2, summary: { departure: { port: 'IST', time: '14:00' }, arrival: { port: 'ADA', time: '16:00' } } }];

//**** init ****//
init(flights, 'journey');

function init(flights, targetId) {
    const targetElement = document.querySelector('#'.concat(targetId));
    const element = document.createElement('flight-list');
    targetElement.appendChild(element);
    element.data = flights;
}
