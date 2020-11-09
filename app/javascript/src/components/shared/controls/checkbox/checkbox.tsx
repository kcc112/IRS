import React, { useState } from 'react';
import { Checkbox } from '@material-ui/core';

interface Props {
  isChecked: boolean;
  check: (callback: () => void) => void;
  uncheck: (callback: () => void) => void;
}

export function IRSCheckbox({
  isChecked,
  check,
  uncheck,
}: Props) {
  const [checked, setChecked] = useState(isChecked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) check(() => setChecked(true));
    else uncheck(() => setChecked(false));
  };

  return (
    <Checkbox
      checked={checked}
      color="primary"
      onChange={handleChange}
      inputProps={{ 'aria-label': 'primary checkbox' }}
    />
  );
}