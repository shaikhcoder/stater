"use client";

import { motion } from "framer-motion";
import PropTypes from "prop-types";

const FramerParagraph = ({ children, className }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
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
    <motion.p variants={itemVariants} className={className}>
      {children}
    </motion.p>
  );
};

FramerParagraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

FramerParagraph.defaultProps = {
  className: "",
};

export default FramerParagraph;
