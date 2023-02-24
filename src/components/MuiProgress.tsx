import { CircularProgress, LinearProgress, Stack } from '@mui/material';

export const MuiProgress: React.FC = () => {
  return (
    <Stack spacing={2} maxWidth={360}>
      <CircularProgress color="success" />
      <CircularProgress color="success" variant="determinate" value={60} />
      <LinearProgress color="success" />
      <LinearProgress color="success" variant="determinate" value={60} />
    </Stack>
  );
};
