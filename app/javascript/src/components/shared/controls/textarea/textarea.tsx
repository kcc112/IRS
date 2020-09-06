import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

import { InputAdornment } from '@material-ui/core';
import { useStyles } from './styles';

interface Props {
  id: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  rowsMax?: number;
  rows?: number;
  error?: string;
  className?: string,
  resizable?: boolean,
}

export function TextArea({
  id,
  name,
  onChange,
  value,
  placeholder,
  rowsMax = 8,
  rows = 6,
  error,
  className,
  resizable,
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
    <>
      <TextField
        className={`
          ${classes.textarea}
          ${className}
          ${resizable ? classes.resizableTextarea : ''}
        `}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        type="text"
        margin="normal"
        variant="outlined"
        placeholder={placeholder}
        multiline
        rowsMax={rowsMax}
        rows={rows}
      />
      <div className={classes.error}>{renderInputError()}</div>
    </>
  );
}