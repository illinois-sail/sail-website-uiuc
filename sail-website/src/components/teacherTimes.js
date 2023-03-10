import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const times = [
  '10am-11am',
  '11am-12pm',
  '1pm-2pm',
  '2pm,-3pm',
  '3pm-4pm',
  '4pm-5pm',
];

export default function MultipleSelectCheckmarks() {
  const [timeName, setTimeName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTimeName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-multiple-checkbox-label">Times*</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={timeName}
          onChange={handleChange}
          input={<OutlinedInput label="Times" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          style={{backgroundColor: "white"}}
        >
          {times.map((times) => (
            <MenuItem key={times} value={times}>
              <Checkbox checked={timeName.indexOf(times) > -1} />
              <ListItemText primary={times} />
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>
  );
}