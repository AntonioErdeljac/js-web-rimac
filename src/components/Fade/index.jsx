import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { motion } from 'framer-motion';

const Fade = ({ children }) => {
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: -200, opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

Fade.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(Fade);
