import { InputAdornment, TextField } from '@mui/material';
import { Stack } from '@mui/system';

export const MuiTextField: React.FC = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" color="secondary" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" size="small" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Form input" defaultValue="Hello World" required />
        <TextField
          type="password"
          helperText="Strong password required"
          disabled
        />
        <TextField defaultValue="Read only" inputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">kg</InputAdornment>
            ),
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
        <TextField multiline maxRows={4} rows={5} />
      </Stack>
    </Stack>
  );
};
