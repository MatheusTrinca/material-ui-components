import { Box, styled } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
  height: '250px',
  width: '250px',
  backgroundColor: theme.status.danger,
}));

export const MuiResponsiveness: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          width: {
            xs: 100, // 0
            sm: 200, // 600
            md: 300, // 900
            lg: 400, // 1200
            xl: 500, // 1536
          },
          height: '300px',
          bgcolor: 'secondary.dark',
        }}
      />
      <StyledBox />
    </>
  );
};
