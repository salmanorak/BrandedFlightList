export class JourneyList extends HTMLElement {
    constructor() {
        super();
        this._data;
    }
    connectedCallback() {
        this.classList.add('journey-list');
    }
    get data() {
        return this._data;
    }
    set data(newData) {
        this._data = newData;
        if (newData !== '') this.createJourneyList(newData.journeyList);
    }
    createJourneyList(journeyList) {
        journeyList.forEach((journey) => {
            const journeyHTML = document.createElement('journey-item');
            this.appendChild(journeyHTML);
            journeyHTML.data = journey;
        });
    }
}
//window.customElements.define('journey-list', JourneyList);
