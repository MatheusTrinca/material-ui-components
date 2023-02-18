import { Menu } from '@mui/icons-material';
import { Box, Button, Drawer, Link, Typography } from '@mui/material';
import { useState } from 'react';

export const MuiDrawer: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsDrawerOpen(true)}>
        <Menu />
      </Button>
      <Drawer
        anchor="left"
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            <Link>Home</Link>
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
