import { FlightData as FlightDataModel } from '../../js/models/flightData';

// eslint-disable-next-line no-undef
export class Journey extends HTMLElement {
    constructor() {
        super();
        this._data;
    }
    connectedCallback() {
        this.classList.add('journey');
        this.setAttribute('id', 'journey');
    }
    get data() {
        return this._data;
    }
    set data(newData) {
        this._data = newData;
        if (newData !== '') this.createJourney(newData);
    }
    createJourney({ journeyInfo, flights }) {
        this.innerHTML = this.createTitle(journeyInfo);
        const flightListHTML = document.createElement('flight-list');
        flights = flights.map(flight => new FlightDataModel(flight));
        this.appendChild(flightListHTML);
        flightListHTML.data = flights;
    }
    createTitle({ type, from, to, date }) {
        return `<div class="direction ${type}"> ${type === 'departure' ? 'Gidiş' : 'Dönüş'}</div>
                <p class="title"> ${from} - ${to} ${date}</p>
                <div class="selected-flight"></div>`;
    }
}

//window.customElements.define('journey-item', Journey);
