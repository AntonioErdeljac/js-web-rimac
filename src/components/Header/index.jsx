import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Message from '../Message';

import { useSystem } from '../../providers';

import './index.scss';

const Header = () => {
  const system = useSystem();

  return (
    <div className="r-header d-inline-flex align-items-center justify-content-center justify-content-lg-between px-5">
      <div className="r-header-menu">
        <FontAwesomeIcon size="lg" icon="bars" />
      </div>
      <h4 className="text-primary text-monospace">CONCEPT_TWO</h4>
      <Message
        variant={system.getStatus()}
        icon="exclamation-circle"
        title={system.getStatus()}
        description={system.getAlertMessage()}
      />
    </div>
  );
};

export default memo(Header);
