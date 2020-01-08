import React from "react";
import { FastField } from "formik";
import PropTypes from "prop-types";
import { KeyboardDatePicker } from "@material-ui/pickers";

const DatepickerInternal = props => {
  const { field, form, ...other } = props;
  const currentError = form.errors[field.name];

  return (
    <KeyboardDatePicker
      name={field.name}
      value={field.value}
      format="MM/DD/YYYY"
      helperText={currentError}
      error={Boolean(currentError)}
      onError={error => {
        // handle as a side effect
        if (error !== currentError) {
          form.setFieldError(field.name, error);
        }
      }}
      // if you are using custom validation schema you probably want to pass `true` as third argument
      onChange={date => form.setFieldValue(field.name, date, false)}
      {...other}
    />
  );
};

const DatepickerWrapped = props => (
  <FastField {...props} component={DatepickerInternal} />
);

DatepickerWrapped.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
    PropTypes.instanceOf(Date)
  ]),
  keyboard: PropTypes.bool,
  clearable: PropTypes.bool,
  label: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

DatepickerWrapped.defaultProps = {
  value: null
};

export default DatepickerWrapped;
