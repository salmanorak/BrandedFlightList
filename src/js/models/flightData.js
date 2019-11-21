class Price {
    constructor({ amount, decimal, currency }) {
        this.amount = amount;
        this.decimal = decimal;
        this.currency = currency;
    }
}

class Brand {
    constructor({ name, type, price, rightList }) {
        this.name = name;
        this.type = type;
        this._price = price;
        this.rightList = rightList;
    }

    get price() {
        return this._price;     
    }

    set price(newPrice) {
        if (!newPrice) return '';
        this._price = new Price(newPrice);
    }
}

class Cabin {
    constructor({ name, brandList }) {
        this.name = name;
        this._brandList = brandList;
    }

    get brandList() {
        return this._brandList;
    }

    set brandList(newBrandList) {
        if (newBrandList.length === 0) return [];
        this._brandList = newBrandList.map(brand => new Brand(brand));
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

