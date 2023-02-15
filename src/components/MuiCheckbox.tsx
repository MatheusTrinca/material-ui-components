import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { BookmarkBorderOutlined, BookmarkAdded } from '@mui/icons-material';

export const MuiCheckbox = () => {
  const [accepted, setAccepted] = useState(false);

  const [skills, setSkills] = useState({
    html: false,
    css: false,
    javascript: false,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAccepted(event.target.checked);
  };

  const handleChangeSkill = (event: ChangeEvent<HTMLInputElement>) => {
    setSkills({ ...skills, [event.target.name]: event.target.checked });
  };

  console.log(skills);

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accepted the terms and conditions"
          control={<Checkbox checked={accepted} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          checked={accepted}
          onChange={handleChange}
          icon={<BookmarkBorderOutlined />}
          checkedIcon={<BookmarkAdded />}
        />
      </Box>
      <Box>
        <FormControl error={!skills.html}>
          <FormLabel>Skill</FormLabel>
          <FormGroup>
            <FormControlLabel
              name="html"
              label="HTML"
              control={
                <Checkbox onChange={handleChangeSkill} value={skills.html} />
              }
            />
            <FormControlLabel
              name="css"
              label="CSS"
              control={
                <Checkbox onChange={handleChangeSkill} value={skills.css} />
              }
            />
            <FormControlLabel
              name="javascript"
              label="Javascript"
              control={
                <Checkbox
                  onChange={handleChangeSkill}
                  value={skills.javascript}
                />
              }
            />
            <FormHelperText>Texto de erro</FormHelperText>
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
