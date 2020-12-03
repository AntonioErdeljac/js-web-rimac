import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChartLine,
  faCogs,
  faExclamationCircle,
  faBolt,
  faNetworkWired,
  faThermometerThreeQuarters,
  faMemory,
} from '@fortawesome/free-solid-svg-icons';

export default () =>
  library.add(
    faChartLine,
    faCogs,
    faExclamationCircle,
    faBolt,
    faNetworkWired,
    faThermometerThreeQuarters,
    faMemory,
  );
