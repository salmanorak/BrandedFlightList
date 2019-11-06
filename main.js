//**** init ****//
let flights = flightList.map(flight=>{
	flight['summary']= {'departure' : flight.segments[0].departure }
	flight.summary['arrival']= flight.segments[flight.segments.length-1].arrival
	flight.summary['carrierList'] =flight.segments.map((segment)=>{ return segment.carrierCode})
	return flight
})

init(flights,'flight-list')

//**** Event Handling ****//
const flightSummaryAll  = document.querySelectorAll('.summary')

flightSummaryAll.forEach(flightSummary=>{
	flightSummary && flightSummary.addEventListener('click',toogleFlightDetail)
})
/*
function toogleFlightDetail(e){
	let flightItem = e.currentTarget.parentElement
	let openFlight = document.querySelector('.flight-item.open')
	if(openFlight&& (openFlight != flightItem)) toogleClass(openFlight,'open')
	 toogleClass(flightItem,'open')

}
*/

function toogleFlightDetail(e){
	let flightItem = e.currentTarget.parentElement
	let openFlight = document.querySelector('.flight-item.slideDown')
	if(openFlight&& (openFlight != flightItem)) slideUp(openFlight.querySelector('.cabin-list-container'))
	slideToggle(flightItem.querySelector('.cabin-list-container'))
}

function toogleClass(element,targetClass){
	if(element.classList.contains(targetClass)){
		element.classList.remove(targetClass)
	}else{
		element.classList.add(targetClass)
	}
}


//****Flight Creation****//
function init (flights ,targetId){
	const targetElement = document.querySelector(`#${targetId}`)
	targetElement.innerHTML = createFlightList(flights)
}

function createFlightList (flights){
	let result = "";
	flights.forEach(flight=>{
		result += createFlight(flight)
	})
	return result
}


function createFlight (flight){
	let flightItemTemplate = `
								<div class="flight-item">
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
											<span class="amount">${flight.price.amount}</span>
											<span class="decimal">${flight.price.decimal}</span>
											<span class="currency">${flight.price.currency}</span>
										</div>
										<div class="icon"></div>
									</div>
									<span class="detail">Uçuş Detayları</span>
									${createCabinList(flight.cabinList)}
								</div>`
	return flightItemTemplate
}

function createAirlineLogo(carrierList){
	let result="";
	carrierList.forEach((carierCode)=>{
		let url =""

		switch(carierCode){
			case 'TK' : 
				url = 'https://www.turkishairlines.com/theme/img/carrierairlines/carriercode_tk.png'
				break;
			case 'AJ' :
				url ='https://www.turkishairlines.com/theme/img/carrierairlines/carriercode_aj.png'
				break;
			case 'JB' :
				url ='https://turkishairlines.ssl.cdn.sdlmedia.com/636686167032557807VY.png'
					break;
			}
		result += `<img class="segment-carrier-logo" src="${url}">`

	})
	return result;
}

function createLayoverPort(segmenList){
	let portList =[];
	if(segmenList.length==1) return `<div class="direct" style="left:50%">Direkt</div>`
	for(let i=0;i<segmenList.length-1;i++){
		let port = segmenList[i].arrival.port == segmenList[i+1].departure.port ? segmenList[i].arrival.port : segmenList[i].arrival.port + ' <i class="fas fa-long-arrow-alt-right"></i> ' + segmenList[i+1].departure.port
		portList.push(port)
	}

	let result='';
	portList.forEach((port,index)=>{
		result += `
					<div class="layover-port-item" style="left:${(100/(portList.length+1))*(index+1)}%" >${port}</div>`
	})
	return result;
}


function createCabinList(cabinList){
	let result = '<div class="cabin-list-container" style="display:none">';

	cabinList.forEach(cabin=>{
		result += 	`<div class="${cabin.name == 'Economy' ? 'eco' : 'bus'}-cabin cabin">
						<div class="cabin-info">${cabin.name} Class</div>
						${createBranList(cabin.brandList)}
					</div>`
	})
	return result +' </div>'
}

function createBranList (brandList){
	let result = '<div class="brand-list">';
	if (brandList && brandList.length<=0) return ""	
	 brandList.forEach(brand=>{
		result  += 	`<div class="brand-item" data="${JSON.stringify(brand)}">
						<div class="brand-name">
						${brand.name}
						</div>
						<div class="brand-price">
							${createPrice(brand.price)}
						</div>
						<div class="right-list">
							${brand.price ? createRightList(brand.rightList) : ''}
						</div>
					</div>`
	} )
	return result + '</div>'
}

function createPrice (price){
	let result ='';
	if(price){
		result +=`	<span class="amount">${price.amount}</span>
				  	<span class="decimal">${price.decimal}</span>
					<span class="currency">${price.currency}</span>`
	}else{
		result += `<span class="full">DOLU</span>`
	}
	return result
}

function createRightList (rightList){
	let result = ""
	if (rightList && rightList.length<=0) return ""	
	rightList.forEach(right=>{
		result  += `<span class="right-item">${right}</span>`
	})
	return result;
}

/**** Animation ****/

 let slideUp = (target, duration=500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout( () => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
    target.parentElement.classList.remove('slideDown')
  }

  let slideDown = (target, duration=500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;

    if (display === 'none')
      display = 'flex';

    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout( () => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
    target.parentElement.classList.add('slideDown')

  }
  var slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
      return slideDown(target, duration);
    } else {
      return slideUp(target, duration);
    }
  }


