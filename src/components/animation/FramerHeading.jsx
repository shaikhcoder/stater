"use client";

import { motion } from "framer-motion";
import PropTypes from "prop-types";

const FramerHeading = ({ children, className }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.h1 variants={itemVariants} className={className}>
      {children}
    </motion.h1>
  );
};

FramerHeading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

FramerHeading.defaultProps = {
  className: "",
};

export default FramerHeading;
