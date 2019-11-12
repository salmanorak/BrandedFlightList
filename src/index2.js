import './css/main.scss';
import { Flight } from '../src/components/Flight/Flight';
import { FlightList } from '../src/components/Flight/FlightList';
import { JourneyList } from '../src/components/Flight/JourneyList';
import { Journey } from '../src/components/Flight/Journey';
import { data } from './data/data.component';

window.customElements.define('flight-item', Flight);
window.customElements.define('flight-list', FlightList);
window.customElements.define('journey-item', Journey);
window.customElements.define('journey-list', JourneyList);


//**** init ****//
init(data, 'app');

function init(flights, targetId) {
    const targetElement = document.getElementById(targetId);
    const element = document.createElement('journey-list');
    targetElement.appendChild(element);
    element.data = data;
}
