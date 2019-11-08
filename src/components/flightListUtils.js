import { slide as slideHelper, findItemInArrayByProperty, findParent } from '../js/utils.js';
import { flightListData } from '../data/data.js';
import { Flight } from '../js/models/flight';

const slide = slideHelper();

function init(flights, targetId) {
	const targetElement = document.querySelector(`#${targetId}`);
	targetElement.innerHTML = createFlightList(flights);
}

function createFlightList(flights) {
	let result = '';
	flights.forEach(flight => {
		result += createFlight(flight);
	});
	return result;
}
/*
function createFlight(flight, brand) {
	const flightItemTemplate = `<div class="flight-item" data='${JSON.stringify(flight)}'>
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
										<div class="flight-logo">${createAirlineLogo(flight.summary.carrierList)}</div>
										<div class="layover-port-list">${createLayoverPort(flight.segments)}</div>

									</div>
									<div class="best-price">
										${brand ? `<div class="brand">${brand.name}</div>` : ''}
										${brand ? createPrice(brand.price) : createPrice(flight.price)}
									</div>
									${brand ? '' : '<div class="icon"></div>'}
								</div>
								<span class="detail">Uçuş Detayları</span>
								${brand ? '' : createCabinList(flight.cabinList)}
							</div>`;
	return flightItemTemplate;
}
*/
function createFlight(flight, brand) {
	const flightItemTemplate = `<div class="flight-item" flightId='${flight.flightId}'>
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
										<div class="flight-logo">${createAirlineLogo(flight.summary.carrierList)}</div>
										<div class="layover-port-list">${createLayoverPort(flight.segments)}</div>

									</div>
									<div class="best-price">
										${brand ? `<div class="brand">${brand.name}</div>` : ''}
										${brand ? createPrice(brand.price) : createPrice(flight.price)}
									</div>
									${brand ? '' : '<div class="icon"></div>'}
								</div>
								<span class="detail">Uçuş Detayları</span>
								${brand ? '' : createCabinList(flight.cabinList)}
							</div>`;
	return flightItemTemplate;
}

function createAirlineLogo(carrierList) {
	let result = '';
	carrierList.forEach((carierCode) => {
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

function createLayoverPort(segmenList) {
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


function createCabinList(cabinList) {
	let result = '<div class="cabin-list-container" style="display:none">';

	cabinList.forEach((cabin, index) => {
		result += 	`<div class="${cabin.name === 'Economy' ? 'eco' : 'bus'}-cabin cabin">
						<div class="cabin-info">${cabin.name} Class</div>
						${createBranList(cabin.brandList, index)}
					</div>`;
	});
	return `${result} </div>`;
}

function createBranList(brandList, cabinIndex) {
	let result = '<div class="brand-list">';
	if (brandList && brandList.length <= 0) return '';	
		brandList.forEach((brand, index) => {
		result += 	`<div class="brand-item" brandIndex='${index}' cabinIndex="${cabinIndex}">
						<div class="brand-name">
						${brand.name}
						</div>
						<div class="brand-price">
							${createPrice(brand.price)}
						</div>
						<div class="right-list">
							${brand.price ? createRightList(brand.rightList) : ''}
						</div>
					</div>`;
	});
	return `${result}</div>`;
}

function createPrice(price) {
	if (!price) return '<span class="full">DOLU</span>';

	
	return `	<span class="amount">${price.amount}</span>
			  	<span class="decimal">${price.decimal}</span>
				<span class="currency">${price.currency}</span>`;
}

function createRightList(rightList) {
	let result = '';
	
	rightList.forEach(right => {
		result += `<span class="right-item">${right}</span>`;
	});

	return result;
}

function toogleFlightDetail(e) {
	const flightItem = e.currentTarget.parentElement;
	const openFlight = document.querySelector('.flight-item.slideDown');
	if (openFlight && (openFlight !== flightItem)) slide.up(openFlight.querySelector('.cabin-list-container'));
	slide.toogle(flightItem.querySelector('.cabin-list-container'));
}

function selectBrand(e) {
	const el = e.currentTarget;
	const selectedBrand = el.attributes.brandIndex.value;
	const selectedCabinIndex = el.attributes.cabinIndex.value;

		el.dispatchEvent(
			new CustomEvent('brandSelected', { bubbles: true, detail: { brandIndex: selectedBrand, cabinIndex: selectedCabinIndex } })
		);		
}

function selectFlight(e) {
	const el = e.currentTarget;
	const selectedFlightId = Number(el.attributes.flightId.value);
	const flightSelected = new CustomEvent('flightSelected', { bubbles: true, detail: { flightId: selectedFlightId, brand: e.detail } });
	el.dispatchEvent(flightSelected);
}

function showSelectedFlightView(e) {
	const journey = e.currentTarget;
	const selectedFlightHTML = journey.querySelector('.selected-flight');
	const flight = findItemInArrayByProperty(flightListData, 'flightId', e.detail.flightId);
	const brand = flight.cabinList[e.detail.brand.cabinIndex].brandList[e.detail.brand.brandIndex];
	if (brand.price) {
		selectedFlightHTML.innerHTML = createFlight(new Flight(flight), brand);
		journey.querySelectorAll('.show-flight-list').forEach(item => {
			item.addEventListener('click', showFlightList);
		});
		journey.classList.add('selected');
	}
}

function showFlightList(e) {
	const journey = findParent(e.currentTarget, 'journey', 'class');
	journey.classList.remove('selected');
	journey.querySelector('.selected-flight .flight-item').remove();
}

export { init, toogleFlightDetail, selectBrand, selectFlight, showSelectedFlightView };
