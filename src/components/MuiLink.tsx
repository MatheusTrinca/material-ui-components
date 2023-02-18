import { Link, Stack, Typography } from '@mui/material';

export const MuiLink: React.FC = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link variant="body1" href="#">
        Link
      </Link>
      <Typography variant="h2">
        <Link href="#" color="palegreen" underline="hover">
          Link
        </Link>
      </Typography>
    </Stack>
  );
};
