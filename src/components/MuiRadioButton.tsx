import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { Box } from '@mui/system';
import { ChangeEvent, useCallback, useState } from 'react';

export const MuiRadioButton: React.FC = () => {
  const [experience, setExperience] = useState('');

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setExperience(event.target.value);
  }, []);

  console.log(experience);

  return (
    <Box>
      <FormControl error>
        <FormLabel id="years-of-experience-buttons-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          onChange={handleChange}
          aria-labelledby="years-of-experience-buttons-group-label"
          name="job-experience-group"
        >
          <FormControlLabel value="0-2" control={<Radio />} label="0-2" />
          <FormControlLabel value="3-5" control={<Radio />} label="3-5" />
          <FormControlLabel value="6-8" control={<Radio />} label="6-8" />
        </RadioGroup>
        <FormHelperText>Wrong selection</FormHelperText>
      </FormControl>
    </Box>
  );
};
