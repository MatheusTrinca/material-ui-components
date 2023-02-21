import { Box, Button, Snackbar, Alert, AlertProps } from '@mui/material';
import { forwardRef, SyntheticEvent, useState } from 'react';

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <Alert elevation={6} ref={ref} {...props} />
));

export const MuiSnacknar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="Form submitted sucessfully!"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      /> */}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <SnackbarAlert onClose={handleClose} severity="success">
          Form submitted sucessfully!
        </SnackbarAlert>
      </Snackbar>
    </Box>
  );
};
