import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Message = ({ title, description, icon, variant }) => {
  return (
    <Alert variant={variant} className="text-white mb-4">
      <div className="d-inline-flex align-items-center">
        <FontAwesomeIcon size="lg" icon={icon} />
        <strong className="ml-3">{title}</strong>
      </div>
      <div className="mt-3">{description}</div>
    </Alert>
  );
};

Message.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default memo(Message);
