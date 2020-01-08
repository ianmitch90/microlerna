import React from "react";
import PropTypes from "prop-types";
import { FormHelperText } from "@material-ui/core";

function ValidationMessage(props) {
  const { errorMessage } = props;
  return <FormHelperText error>{errorMessage}</FormHelperText>;
}

ValidationMessage.propTypes = {
  errorMessage: PropTypes.string
};

export default ValidationMessage;
