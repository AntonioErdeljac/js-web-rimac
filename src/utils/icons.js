import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCog,
  faExclamationCircle,
  faBolt,
  faNetworkWired,
  faThermometerThreeQuarters,
  faMemory,
  faTachometerAlt,
  faQuestion,
  faHeart,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

const initialize = () =>
  library.add(
    faCog,
    faExclamationCircle,
    faBolt,
    faNetworkWired,
    faThermometerThreeQuarters,
    faMemory,
    faTachometerAlt,
    faQuestion,
    faHeart,
    faBars,
  );

export default { initialize };
