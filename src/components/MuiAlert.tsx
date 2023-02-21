import { Alert, AlertTitle, Button, Stack } from '@mui/material';

export const MuiAlert: React.FC = () => {
  return (
    <Stack spacing={2} maxWidth={500}>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
      <Alert variant="outlined" severity="error">
        This is an error alert — check it out!
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is a warning alert — check it out!
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an info alert — check it out!
      </Alert>
      <Alert variant="outlined" severity="success">
        This is a success alert — check it out!
      </Alert>
      <Alert severity="warning">
        <AlertTitle>This an alert title</AlertTitle>
        This is the error description
      </Alert>
      <Alert
        variant="outlined"
        severity="success"
        action={<Button color="error">UNDO</Button>}
      >
        This is a success alert — check it out!
      </Alert>
      <Alert severity="warning" onClose={() => alert('Closed')}>
        <AlertTitle>This an alert title</AlertTitle>
        This is the error description
      </Alert>
    </Stack>
  );
};
