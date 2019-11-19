import { Flight } from '../components/Flight/Flight';
import { FlightList } from '../components/Flight/FlightList';
import { JourneyList } from '../components/Flight/JourneyList';
import { Journey } from '../components/Flight/Journey';
import { GeneralModal } from '../components/Common/Modal';
import { FlightDetails } from '../components/Flight/FlightDetails';

export function registerCustomComponents() {
    window.customElements.define('flight-item', Flight);
    window.customElements.define('flight-list', FlightList);
    window.customElements.define('journey-item', Journey);
    window.customElements.define('journey-list', JourneyList);
    window.customElements.define('general-modal', GeneralModal);
    window.customElements.define('flight-details', FlightDetails);
}
