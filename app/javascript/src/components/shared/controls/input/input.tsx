import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { MuiThemeProvider } from '@material-ui/core';

import { useStyles } from './styles';
import { theme } from './theme';

interface Props {
  id: string;
  name: string;
  placeholder: string;
  type: string;
  value?: string;
  disabled?: boolean;
  className?: string;
  error?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  value,
  placeholder,
  disabled = false,
  type,
  id,
  name,
  className,
  error,
  onChange,
}: Props) {
  const classes = useStyles({});

  const renderInputError = () => {
    if (error) {
      return (
        <InputAdornment className={classes.error} position="end">
          {error}
        </InputAdornment>
      );
    }
    return <></>;
  };

  return (
    <div className={classes.container}>
      <MuiThemeProvider theme={theme}>
        <TextField
          id={id}
          name={name}
          className={`${className} ${classes.input}`}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          type={type}
        />
      </MuiThemeProvider>
      <div className={classes.error}>{renderInputError()}</div>
    </div>
  );
}