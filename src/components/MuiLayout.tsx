import { Box, Stack, Typography, Divider } from '@mui/material';
import React from 'react';

export const MuiLayout: React.FC = () => {
  return (
    <Stack
      sx={{ border: '1px solid' }}
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        sx={{
          backgroundColor: 'primary.light',
          width: '100px',
          height: '100px',
          color: 'white',
          '&:hover': {
            backgroundColor: 'primary.main',
          },
        }}
      >
        Hello Material
      </Box>
      <Box
        component="span"
        width="250px"
        sx={{ backgroundColor: 'darkorange' }}
      >
        Hello Material Span
      </Box>
      <Box
        width="250px"
        height="250px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="blueviolet"
      >
        <Typography color="white" fontWeight="700">
          Hello World
        </Typography>
      </Box>
    </Stack>
  );
};
