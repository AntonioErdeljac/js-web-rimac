import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { memo, useCallback, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { matchPath, useHistory, useLocation } from 'react-router-dom';

import { useDrawer } from '../../../../../../providers';

const Item = ({ icon, path }) => {
  const { close } = useDrawer();

  const location = useLocation();
  const { push } = useHistory();

  const isActive = useMemo(() => {
    const matchedRoute = matchPath(location.pathname, path);

    return matchedRoute?.isExact;
  }, [location.pathname, path]);

  const onClick = useCallback(() => {
    push(path);
    close();
  }, [close, path, push]);

  return (
    <div
      onClick={onClick}
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
