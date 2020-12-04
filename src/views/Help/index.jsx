import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo } from 'react';

import './index.scss';

const Help = () => {
  return (
    <div className="r-help mt-5">
      <h3 className="r-help r-help-title">
        <strong>What is this?</strong>
      </h3>
      <div className="r-help r-help-description">
        This is a personal M2M concept for Rimac Autombili, made by{' '}
        <a href="https://www.linkedin.com/in/antonio-erdeljac/" target="_blank" rel="noreferrer">
          Antonio Erdeljac
        </a>
        <strong> in hope of getting an interview.</strong> Instead of reading metrics from an
        automobile, metrics are received in real time from my computer. Technologies used are{' '}
        <strong>React, SCSS, ES6, Firebase, Bootstrap, and Node.js. </strong>
        Project is structured to apply for an enterprise application. For consistency, the following
        packages are used: <strong>Prettier, Eslint, Commitlint</strong>. Testing is done for all
        common components using <strong>Enzyme and Jest</strong>. I would gladly go over the code
        and talk about which parts I would change in a larger application, if given the chance ;)
      </div>
      <h3 className="r-help r-help-title">
        <strong>Can it read metrics from my computer?</strong>
      </h3>
      <div className="r-help r-help-description">
        Of course! Project is open source, and you can find all the configuration and code in these
        2 repositories,{' '}
        <a href="https://github.com/AntonioErdeljac/js-cpu-rimac" target="_blank" rel="noreferrer">
          js-cpu-rimac
        </a>{' '}
        and{' '}
        <a href="https://github.com/AntonioErdeljac/js-web-rimac" target="_blank" rel="noreferrer">
          js-web-rimac
        </a>
      </div>
      <h3 className="r-help r-help-title">
        <strong>Why does it say &quot;Connection not established&quot;?</strong>
      </h3>
      <div className="r-help r-help-description">
        If the instance of js-cpu-rimac is not running on my computer, there will be no real time
        data received on this web client. If you want to see it in action, contact me for a live
        demonstration, or connect your own PC!
      </div>
      <small className="text-muted">
        Made with <FontAwesomeIcon icon="heart" className="text-danger mx-1" /> by{' '}
        <a href="https://www.linkedin.com/in/antonio-erdeljac/" target="_blank" rel="noreferrer">
          Antonio Erdeljac
        </a>
      </small>
    </div>
  );
};

export default memo(Help);
