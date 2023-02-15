import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
} from '@mui/material';
import { ChangeEvent, useCallback, useState } from 'react';

const MuiSwitch = () => {
  const [services, setServices] = useState({
    plumber: false,
    electricist: false,
    constructor: false,
  });

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setServices({ ...services, [event.target.name]: event.target.checked });
    },
    [services]
  );

  console.log(services);

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="Dark Mode"
          control={<Switch color="success" />}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Serviços</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="Encanador"
              name="plumber"
              control={
                <Switch checked={services.plumber} onChange={handleChange} />
              }
            />
            <FormControlLabel
              label="Eletricista"
              name="electricist"
              control={
                <Switch
                  checked={services.electricist}
                  onChange={handleChange}
                />
              }
            />
            <FormControlLabel
              label="Pedreiro"
              name="constructor"
              control={
                <Switch
                  checked={services.constructor}
                  onChange={handleChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiSwitch;
