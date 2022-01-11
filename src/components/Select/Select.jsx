import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

const option = "since";
const values = {
  daily: 'Today',
  weekly: 'This week',
  monthly: 'This month',
}

export default function SelectLabels({defaultValue, getOption}) {
  const dispatch = useDispatch();

  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    dispatch(getOption(option, value));
  }, [value]);
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={value}
          onChange={(event)=>handleChange(event)}
        >   
          {
            Object.entries(values).map(([key, value]) => (
              <MenuItem
                key={key}
                value={key}
              >
                {value}
              </MenuItem>
            ))
          }    
        </Select>
      </FormControl>
    </div>
  );
}