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
        if (!this.flight.data.selectedbrand) {
            modal.buttons = [
                { title: 'Show Price', callback: this.showPrices.bind(this) }
            ];
        }
        modal.content = this.createFlightDetail(this.flight.data);
        modal.externalCss = this.createStyle();
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
                ${this.createSegmentList(flight.segments)}
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
    createSegmentList(segmentList) {
        return segmentList.map(({ flightNumber, arrival, departure, carrierCode }, index) => `
                <div class="segment-item">
                    <div class="segment-flight-number"> ${index + 1}. Uçuş Numarası : ${flightNumber}</div>
                    <div class="segment-summary">
                        <div class="segment-departure">
                            <div class="departure-title">Kalkış</div>
                            <div class="departure-port">${departure.port}</div>
                            <div class="departure-time">
                                <div class="departure-hour">${departure.time}</div>
                                <div class="departure-date">${departure.date}</div>
                            </div>
                        </div>
                        <div class="segment-arrival">
                            <div class="arrival-title">Varış</div>
                            <div class="arrival-port">${arrival.port}</div>
                            <div class="arrival-time">
                                <div class="arrival-hour">${arrival.time}</div>
                                <div class="arrival-date">${arrival.date}</div>
                            </div>
                        </div>
                    </div>
                    <div class="segment-carrier">
                        ${this.getCarrierName(carrierCode)}
                    </div>
                </div>
            `).join('');
    }
    getCarrierName(code) {
        let carrierName;
        switch (code) {
            case 'TK': 
            carrierName = 'Turk Havayolları';
                break;
            case 'AJ': 
            carrierName = 'Anadolu Jet';
                break;
            default:
            carrierName = 'Diğer';
                break;
        }
        return carrierName;
    }
    createStyle() {
        const styleItem = document.createElement('style');
        styleItem.textContent = `
            .flight-title{
                padding: 0 10px;
            }
            .segment-list{
                padding: 10px;
            }
            .segment-item{
                border: 1px solid black;
            }
            .segment-item + .segment-item {
                margin-top: 10px;
            }
            .segment-summary{
                display: flex;
            }
            .segment-departure, .segment-arrival{
                width:50%;
            }
            .arrival-title, .departure-title{
                padding: 10px 10px 0 10px;                
                font-size: 12px;
                color:gray;
                line-height: 5px;
            }
            .segment-flight-number{
                border-bottom: 1px solid black;
                padding: 5px 10px;
                background-color: rgba(169, 169, 169,0.3);
            }
            .arrival-port, .departure-port, .arrival-time, .departure-time, .segment-carrier {
                padding: 5px 10px;
            }
            .arrival-port, .departure-port{
                font-weight: 700;
                padding-bottom: 0;
            }
            .departure-date, .arrival-date{
                font-size: 12px;
                color: gray;
            }
            .segment-carrier{
                font-style: italic;
                font-size: 12px;
                color: blue;
                padding: 0 10px 5px 10px;
            }
        `;
        return styleItem;
    }
}
