import { animation as animationHelper, findParent } from '../../js/utils';

const animation = new animationHelper();

// eslint-disable-next-line no-undef
export class FlightList extends HTMLElement {
	constructor() {
        super();
        this._data = [];
        this._openFlight = null;
        this._isSelected = false;
    }
    connectedCallback() {
        this.setAttribute('id', 'flight-list');
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (newValue !== oldValue) {
            switch (attrName) {
                case 'selected' : 
                    //show selected flight and hide flightList
                    break;
                default :
                    break;
            }
        }
    }
    get data() {
        return this._data;
    }
    set data(newData) {
        this._data = newData;
        newData !== '' && this.createFlights(newData);
    }
    get openFlight() {
        return this._openFlight;
    }
    set openFlight(flight) {
        this._openFlight = flight;
    }
    get isSelected() {
        return this._isSelected;
    }
    set isSelected(newStatus) {
        this._isSelected = newStatus;
    }
    createFlights(data) {
        data.forEach(flightItem => {
            const flightHTML = document.createElement('flight-item');
            flightHTML.data = flightItem;
            this.appendChild(flightHTML);
        });
    }
    openFlightList(flight) {
        if (this._openFlight) {
            if (flight === this._openFlight) {
                this.closeOpenFlight(flight);
                return;
            } 
                this.closeOpenFlight(this._openFlight);
        }
        animation.slideDown(flight.querySelector('.cabin-list-container'));
        setTimeout(() => {
            flight.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 400);
        this._openFlight = flight;
        flight.toogleIsOpen();
    }
    closeOpenFlight(openFlight) {
        openFlight.toogleIsOpen();
        animation.slideUp(openFlight.querySelector('.cabin-list-container'));
        this._openFlight = null;
    }
    selectFlight(flight, cabin, brand) {
        flight.data.selectedbrand = flight.data.cabinList[cabin].brandList[brand];
        if (!flight.data.selectedbrand.price) return;
        const newFlight = document.createElement('flight-item');
        newFlight.data = flight.data; 
        this.parentElement.classList.add('selected');
        const selectedFlight = this.parentElement.querySelector('.selected-flight');
        selectedFlight.innerHTML = '';
        selectedFlight.appendChild(newFlight);
        selectedFlight.querySelector('.summary').onclick = '';
        selectedFlight.querySelector('.show-flight-list').onclick = this.showFlightList.bind(flight);
    }
    showFlightList(e) {
        const journey = findParent(e.currentTarget, 'journey', 'class');
        journey.classList.remove('selected');
        journey.querySelector('.selected-flight .flight-item').remove();
        this.data.selectedbrand = '';
    }
}

//window.customElements.define('flight-list', FlightList);
