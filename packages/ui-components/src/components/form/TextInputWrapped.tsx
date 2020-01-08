import React from "react";
import { FastField } from "formik";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

const TextInputWrapped = props => {
  return <FastField {...props} as={TextField} />;
};

TextInputWrapped.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  maxLength: PropTypes.string
};

export default TextInputWrapped;
