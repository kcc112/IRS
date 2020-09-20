import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { useStyles } from './styles';
import { Option } from '../../../app/types';

interface Props {
  options: Option[];
  value: Option;
  onChange: (value: string) => void;
}

export default function SimpleSelect({
  options,
  value,
  onChange,
}: Props) {
  const classes = useStyles({});

  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="role"
          id="role"
          value={value.id}
          onChange={handleChange}
          className={classes.option}
          disableUnderline={true}
        >
          { options.map(option => {
            return (
              <MenuItem key={option.id} value={option.id}>
                {option.value}
              </MenuItem> 
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}