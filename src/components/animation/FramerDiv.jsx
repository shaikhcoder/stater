"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";

const FramerDiv = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "0px 0px -100px 0px",
  });

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

FramerDiv.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

FramerDiv.defaultProps = {
  className: "",
};

export default FramerDiv;
