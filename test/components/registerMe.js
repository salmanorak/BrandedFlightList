import { Flight } from '../../src/components/Flight/Flight';
import { FlightList } from '../../src/components/Flight/FlightList';
import { JourneyList } from '../../src/components/Flight/JourneyList';
import { Journey } from '../../src/components/Flight/Journey';
import { GeneralModal } from '../../src/components/Common/Modal';
import { FlightDetails } from '../../src/components/Flight/FlightDetails';


 function registerCustomComponents() {
    window.customElements.define('flight-item', Flight);
    window.customElements.define('flight-list', FlightList);
    window.customElements.define('journey-item', Journey);
    window.customElements.define('journey-list', JourneyList);
    window.customElements.define('general-modal', GeneralModal);
    window.customElements.define('flight-details', FlightDetails);
}


registerCustomComponents();