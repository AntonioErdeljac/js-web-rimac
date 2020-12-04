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
} from '@fortawesome/free-solid-svg-icons';

export default () =>
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
  );
