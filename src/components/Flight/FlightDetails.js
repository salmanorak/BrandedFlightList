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
            { title: 'Show Price', callback: this.showPrices.bind(this) },
            { title: 'Close', callback: modal.closeModal },
        ];
        modal.content = this.createFlightDetail(this.flight);
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
            <div>${flight.flightId}</div>
        `;
    }
    showPrices() {
        this.remove();
        this.flight.querySelector('.summary').click();
    }
}
