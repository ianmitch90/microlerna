import React from "react";
import { FastField } from "formik";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Input, Slider, InputAdornment } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 250
  },
  input: {
    width: 80
  }
});

function InputSlider(props) {
  const {
    label,
    name,
    value,
    setFieldValue,
    onChange,
    min,
    max,
    step,
    endAdornment,
    startAdornment
  } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Typography id="input-slider" gutterBottom>
        {label}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            marks
            min={min}
            max={max}
            step={step}
            name={name}
            value={value}
            onChange={(_, value) => {
              setFieldValue(name, value);
            }}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            name={name}
            value={value}
            margin="dense"
            onChange={onChange}
            inputProps={{
              step: step,
              min: min,
              max: max,
              type: "number",
              "aria-labelledby": "input-slider"
            }}
            startAdornment={
              startAdornment ? (
                <InputAdornment position="start">
                  {startAdornment}
                </InputAdornment>
              ) : null
            }
            endAdornment={
              endAdornment ? (
                <InputAdornment position="start">{endAdornment}</InputAdornment>
              ) : null
            }
          />
        </Grid>
      </Grid>
    </div>
  );
}

const SliderWrapped = props => {
  return <FastField {...props} as={InputSlider} />;
};

SliderWrapped.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  label: PropTypes.string,
  startAdornment: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  endAdornment: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

SliderWrapped.defaultProps = {
  value: 0
};

export default SliderWrapped;
