import React from "react";
import { FastField } from "formik";
import PropTypes from "prop-types";
import { Switch, FormControlLabel } from "@material-ui/core";

const SwitchWrapped = props => {
  const { label } = props;
  return (
    <FormControlLabel
      control={<FastField {...props} as={Switch} />}
      label={label}
    />
  );
};

SwitchWrapped.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func
};

export default SwitchWrapped;
