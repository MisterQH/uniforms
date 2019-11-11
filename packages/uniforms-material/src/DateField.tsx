import React from 'react';
import TextField from '@material-ui/core/TextField';
import { connectField, filterDOMProps } from 'uniforms';

const getGlobalThis = () => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  if (typeof this !== 'undefined') return this;
  throw new Error('Unable to locate global `this`');
};

const DateConstructor = getGlobalThis().Date;
const dateFormat = value => value && value.toISOString().slice(0, -8);
const dateParse = (timestamp, onChange) => {
  const date = new DateConstructor(timestamp);
  if (date.getFullYear() < 10000) {
    onChange(date);
  } else if (isNaN(timestamp)) {
    onChange(undefined);
  }
};

const Date = ({
  InputLabelProps,
  disabled,
  error,
  errorMessage,
  helperText,
  inputRef,
  label,
  labelProps,
  name,
  onChange,
  placeholder,
  showInlineError,
  value,
  ...props
}) => (
  <TextField
    disabled={!!disabled}
    error={!!error}
    helperText={(error && showInlineError && errorMessage) || helperText}
    label={label}
    InputLabelProps={{ ...labelProps, ...InputLabelProps }}
    name={name}
    onChange={(event: any) =>
      disabled || dateParse(event.target.valueAsNumber, onChange)
    }
    placeholder={placeholder}
    ref={inputRef}
    type="datetime-local"
    value={dateFormat(value)}
    {...filterDOMProps(props)}
  />
);

Date.defaultProps = {
  fullWidth: true,
  margin: 'dense',
};

export default connectField(Date);
