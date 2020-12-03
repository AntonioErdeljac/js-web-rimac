import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

const Message = ({ description, icon, variant }) => {
  return (
    <Alert variant={variant} className="r-alert text-white mb-0 border-0 shadow-sm">
      <div className="d-inline-flex align-items-center">
        <FontAwesomeIcon size="lg" icon={icon} />
        <div className="ml-2">{description}</div>
      </div>
    </Alert>
  );
};

Message.propTypes = {
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default memo(Message);
