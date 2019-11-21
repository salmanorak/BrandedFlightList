import { animation as animationHelper } from '../../js/utils';

const animation = animationHelper();

// eslint-disable-next-line no-undef
export class FlightDetails extends HTMLElement {
    constructor() {
        super();
        this._flight;
    }
    connectedCallback() {
        this.style.opacity = 0;
        const modal = document.createElement('general-modal');
        modal.modalTitle = 'Flight Detail';
        modal.buttons = [
            { title: 'Show Price', callback: this.showPrices.bind(this) }
        ];
        modal.content = this.createFlightDetail(this.flight.data);
        this.appendChild(modal);
        animation.fadeIn(this);
    }
    get flight() {
        return this._flight;
    }
    set flight(flight) {
        this._flight = flight;
    }
    createFlightDetail(flight) {
        return `
            <div class="flight-detail-container"> 
                <div class="flight-title"> ${flight.summary.departure.port} - ${flight.summary.arrival.port} ${flight.summary.departure.date}</div>
                <div class="segment-list">
                </div>
            </div>
        `;
    }
    showPrices() {
        if (!this.flight.isOpen) {
            this.flight.toogleBrandDetail();
        }
        this.remove();
    }
}
