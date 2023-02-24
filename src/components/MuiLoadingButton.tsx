import { Save } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Stack } from '@mui/material';

export const MuiLoadingButton: React.FC = () => {
  return (
    <Stack p={2} spacing={2} direction="row">
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton loading variant="outlined" loadingIndicator="Loading...">
        Submit
      </LoadingButton>
      <LoadingButton loading variant="outlined" loadingPosition="start" />
      <LoadingButton
        loading={false}
        variant="outlined"
        loadingPosition="start"
        startIcon={<Save />}
      />
      <LoadingButton
        loading
        variant="outlined"
        loadingPosition="start"
        startIcon={<Save />}
      />
    </Stack>
  );
};
