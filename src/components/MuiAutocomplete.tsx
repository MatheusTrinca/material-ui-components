import { Autocomplete, Stack, TextField } from '@mui/material';
import { useState } from 'react';

const skills = ['html', 'css', 'javascript', 'typescript', 'python'];

type Skill = {
  id: number;
  label: string;
};

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

export const MuiAutocomplete: React.FC = () => {
  const [value, setValue] = useState<string | null>(null);

  const [skill, setSkill] = useState<Skill | null>(null);

  console.log(skill);

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        value={value}
        onChange={(_event: any, newValue: string | null) => setValue(newValue)}
        renderInput={params => <TextField {...params} label="Skills" />}
      />
      <Autocomplete
        options={skillsOptions}
        value={skill}
        onChange={(_event: any, newValue: Skill | null) => setSkill(newValue)}
        renderInput={params => <TextField {...params} label="Skills" />}
      />
    </Stack>
  );
};
