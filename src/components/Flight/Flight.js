// eslint-disable-next-line no-undef
export class Flight extends HTMLElement {
	constructor() {
        super();
        this._data = {};
    }
    connectedCallback() {
        this.querySelector('.summary').onclick = this.toogleFlightDetail.bind(this);
        const brandList = this.querySelectorAll('.brand-item');
        brandList.forEach(brand => {
            brand.onclick = this.selectFlight.bind(this);
        });
    }
    get data() {
        return this._data;
    }
    set data(newData) {
        this._data = newData;
        newData !== '' && this.createFlight(this, newData);
    }
    createFlight(item, flight) {
        const brand = flight.selectedbrand;
        item.classList.add('flight-item');
		const flightHTML = `
        ${brand ? '<span class="show-flight-list">Uçuş değiştir</span>' : ''}
        <div class="summary">
            <div class="flight-summary">
                <div class="from">
                    <div class="time">${flight.summary.departure.time}</div>
                    <div class="port">${flight.summary.departure.port}</div>
                </div>
                <div class="to">
                    <div class="time">${flight.summary.arrival.time}</div>
                    <div class="port">${flight.summary.arrival.port}</div>
                </div>
                <div class="flight-logo">${this.createAirlineLogo(flight.summary.carrierList)}</div>
                <div class="layover-port-list">${this.createLayoverPort(flight.segments)}</div>

            </div>
            <div class="best-price">
                ${brand ? `<div class="brand">${brand.name}</div>` : ''}
                ${brand ? this.createPrice(brand.price) : this.createPrice(flight.price)}
            </div>
            ${brand ? '' : '<div class="icon"></div>'}
        </div>
        <span class="detail">Uçuş Detayları</span>
        ${brand ? '' : this.createCabinList(flight.cabinList)}`;

        item.innerHTML = flightHTML;
        return;
    }
    createPrice(price) {
        if (!price) return '<span class="full" disabled >DOLU</span>';        
        return `<span class="amount">${price.amount}</span>
                <span class="decimal">${price.decimal}</span>
                <span class="currency">${price.currency}</span>`;
    }
    createAirlineLogo(carrierList) {
        let result = '';
        carrierList.forEach(carierCode => {
            let url = '';
            switch (carierCode) {
                case 'TK' : 
                    url = 'https://www.turkishairlines.com/theme/img/carrierairlines/carriercode_tk.png';
                    break;
                case 'AJ' :
                    url = 'https://www.turkishairlines.com/theme/img/carrierairlines/carriercode_aj.png';
                    break;
                case 'JB' :
                    url = 'https://turkishairlines.ssl.cdn.sdlmedia.com/636686167032557807VY.png';
                        break;
                default :
                url = 'https://turkishairlines.ssl.cdn.sdlmedia.com/636686167032557807VY.png';
                break;
                    }
    
            result += `<img class="segment-carrier-logo" src="${url}">`;
        });
        return result;
    }
    createLayoverPort(segmenList) {
        const portList = [];
        let result = '';
        const length = segmenList.length;
        if (length === 1) return '<div class="direct" style="left:50%">Direkt</div>';
        for (let i = 0; i < segmenList.length - 1; i++) {
            const port = segmenList[i].arrival.port === segmenList[i + 1].departure.port ? segmenList[i].arrival.port : `${segmenList[i].arrival.port} <i class="fas fa-long-arrow-alt-right"></i> ${segmenList[i + 1].departure.port}`;
            portList.push(port);
        }
        portList.forEach((port, index) => {
            result += `<div class="layover-port-item" style="left:${(100 / (portList.length + 1)) * (index + 1)}%" >${port}</div>`;
        });
        return result;
    }
    createCabinList(cabinList) {
        let result = '<div class="cabin-list-container" style="display:none">';
        cabinList.forEach((cabin, index) => {
            result += 	`<div class="${cabin.name === 'Economy' ? 'eco' : 'bus'}-cabin cabin">
                            <div class="cabin-info">${cabin.name} Class</div>
                            ${this.createBranList(cabin.brandList, index)}
                        </div>`;
        });
        return `${result} </div>`;
    }
    createBranList(brandList, cabinIndex) {
        let result = '<div class="brand-list">';
        if (brandList && brandList.length <= 0) return '';	
            brandList.forEach((brand, index) => {
            result += 	`<div class="brand-item ${brand.price ? '' : 'full'}" ${brand.price ? '' : 'disabled'} brandindex='${index}' cabinindex="${cabinIndex}">
						<div class="brand-name">
						${brand.name}
						</div>
						<div class="brand-price">
							${this.createPrice(brand.price)}
						</div>
						<div class="right-list">
							${brand.price ? this.createRightList(brand.rightList) : ''}
						</div>
					</div>`;
        });
        return `${result}</div>`;
    }
    createRightList(rightList) {
        let result = '';
        
        rightList.forEach(right => {
            result += `<span class="right-item">${right}</span>`;
        });
    
        return result;
    }
    toogleFlightDetail() {
        this.parentElement.openFlightList(this);
    }
    selectFlight(e) {
        const brandindex = e.currentTarget.attributes.brandindex.value;
        const cabinindex = e.currentTarget.attributes.cabinindex.value;
        this.parentElement.selectFlight(this, cabinindex, brandindex);
    }
}

//window.customElements.define('flight-item', Flight);
