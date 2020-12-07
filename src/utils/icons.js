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
  faSadTear,
} from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

const initialize = () =>
  library.add(
    far,
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
    faSadTear,
  );

export default { initialize };
