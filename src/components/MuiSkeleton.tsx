import { useEffect, useState } from 'react';
import { Avatar, Skeleton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const MuiSkeleton: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    // <Stack spacing={2} maxWidth={400}>
    //   <Skeleton variant="text" animation={false} />
    //   <Skeleton variant="circular" width={40} height={40} />
    //   <Skeleton
    //     variant="rectangular"
    //     width={100}
    //     height={30}
    //     animation="wave"
    //   />
    // </Stack>
    <Box maxWidth={400} p={20}>
      <Stack spacing={2}>
        {!loading ? (
          <>
            <img
              src="https://source.unsplash.com/random/256x144"
              alt="cat"
              width={256}
              height={144}
            />
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar>V</Avatar>
              <Typography>React Mui Tutorial</Typography>
            </Stack>
          </>
        ) : (
          <>
            <Skeleton variant="rectangular" width={256} height={144} />
            <Stack direction="row" alignItems="center" spacing={2}>
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="text" width={200} />
            </Stack>
          </>
        )}
      </Stack>
    </Box>
  );
};
