import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { memo, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { matchPath, useHistory, useLocation } from 'react-router-dom';

const Item = ({ icon, path }) => {
  const location = useLocation();
  const history = useHistory();

  const isActive = useMemo(() => {
    const matchedRoute = matchPath(location.pathname, path);

    return matchedRoute?.isExact;
  }, [location.pathname, path]);

  return (
    <div
      onClick={() => history.push(path)}
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
  path: PropTypes.string.isRequired,
};

export default memo(Item);
