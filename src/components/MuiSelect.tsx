import {
  Box,
  ListItem,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { ChangeEvent, EventHandler, useCallback, useState } from 'react';

export const MuiSelect = () => {
  //const [country, setCountry] = useState('');
  const [countries, setCountries] = useState<string[]>([]);

  // const handleChange = useCallback((event: SelectChangeEvent) => {
  //   setCountry(event.target.value);
  // }, []);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === 'string' ? value.split(',') : value);
  }, []);

  console.log(countries);

  return (
    <Box>
      {/* <Box width="250px">
        <Select fullWidth value={country} onChange={handleChange}>
          <MenuItem value="IND">India</MenuItem>
          <MenuItem value="BRA">Brazil</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
        </Select>
      </Box> */}
      <Box width="250px">
        <TextField
          fullWidth
          label="Select country"
          value={countries}
          onChange={handleChange}
          select
          SelectProps={{
            multiple: true,
          }}
          size="small"
          helperText="Please select your country"
          color="info"
        >
          <MenuItem value="IND">India</MenuItem>
          <MenuItem value="BRA">Brazil</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
        </TextField>
      </Box>
    </Box>
  );
};
