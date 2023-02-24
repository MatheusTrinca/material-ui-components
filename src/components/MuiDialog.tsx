import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useState } from 'react';

export const MuiDialog: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            neque expedita itaque quis sunt reiciendis rerum error delectus
            dolorem deleniti!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
