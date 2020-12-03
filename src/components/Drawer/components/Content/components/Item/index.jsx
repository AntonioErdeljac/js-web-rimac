import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = ({ icon, isActive }) => {
  return (
    <div
      className={cn('py-4 r-drawer r-drawer-item w-100 text-center p-2', {
        'r-drawer-item--active': isActive,
      })}
    >
      <FontAwesomeIcon size="lg" icon={icon} />
    </div>
  );
};

Item.propTypes = {
  icon: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

Item.defaultProps = {
  isActive: false,
};

export default memo(Item);
