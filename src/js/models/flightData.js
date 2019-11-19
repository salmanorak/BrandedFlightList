class Price {
    constructor(price) {
        this.amount = price.amount;
        this.decimal = price.decimal;
        this.currency = price.currency;
    }
}

class Brand {
    constructor(brand) {
        this.name = brand.name;
        this.type = brand.type;
        this.price = brand.price ? new Price(brand.price) : '';
        this.rightList = brand.rightList;
    }
}

class Cabin {
    constructor(cabin) {
        this.name = cabin.name;
        this.brandList = cabin.brandList.map(brand => new Brand(brand));
    }
}

class Segment {
    constructor({ flightNumber, carrierCode, departure, arrival }) { // destruction Object
        this.flightNumber = flightNumber;
        this.carrierCode = carrierCode;
        this.departure = departure;
        this.arrival = arrival;
    }
}

export class FlightData {
    constructor(flightData) {
        this.flightId = flightData.flightId;
        this.segments = flightData.segments.map(segment => new Segment(segment));
        this.price = new Price(flightData.price);
        this.summary = {
            carrierList: flightData.segments.map(segment => segment.carrierCode),
            departure: flightData.segments[0].departure,
            arrival: flightData.segments[flightData.segments.length - 1].arrival,
        };
        this.cabinList = flightData.cabinList.map(cabin => new Cabin(cabin));
    }
}

