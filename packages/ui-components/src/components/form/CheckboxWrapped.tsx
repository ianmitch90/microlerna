import React from "react";
import { Field } from "formik";
import PropTypes from "prop-types";
import { Checkbox } from "@material-ui/core";

const CheckboxWrapped = props => {
  return <Field {...props} as={Checkbox} />;
};

CheckboxWrapped.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.string
};

export default CheckboxWrapped;
