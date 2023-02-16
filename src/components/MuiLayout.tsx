import { Box, Stack, Typography, Divider, Grid, Paper } from '@mui/material';
import React from 'react';

export const MuiLayout: React.FC = () => {
  return (
    <Paper sx={{ padding: '32px' }} elevation={4}>
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
      <Grid container my={4} spacing={2}>
        <Grid item xs bgcolor="primary.light" p={2}>
          Item 1
        </Grid>
        <Grid item xs bgcolor="primary.light" p={2}>
          Item 2
        </Grid>
        <Grid item xs bgcolor="primary.light" p={2}>
          Item 3
        </Grid>
        <Grid item xs bgcolor="primary.light" p={2}>
          Item 4
        </Grid>
      </Grid>
    </Paper>
  );
};
