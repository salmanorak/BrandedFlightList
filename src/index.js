import './css/main.scss';
import { data } from './data/data.component';
import { registerCustomComponents } from './js/registerCustomComponents'; 

/** register custom Components **/
registerCustomComponents();

//**** init ****//
init(data, 'body');

function init(flights, targetId) {
    const targetElement = document.getElementById(targetId);
    const element = document.createElement('journey-list');
    targetElement.appendChild(element);
    element.data = flights;
}
