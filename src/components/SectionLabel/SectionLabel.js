import React from "react";
import PropTypes from "prop-types";
const prefix = "c-section-label";
export const SectionLabel = ({ title }) => {
  return <span className={prefix}>{title}</span>;
};

SectionLabel.propTypes = {
  title: PropTypes.string.isRequired,
};
