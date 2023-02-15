import {
  Favorite,
  FavoriteBorderOutlined,
  FavoriteBorderSharp,
  FavoriteOutlined,
} from '@mui/icons-material';
import { Box, Rating, Stack } from '@mui/material';
import { ChangeEvent, useCallback, useState } from 'react';

export const MuiRating: React.FC = () => {
  const [value, setValue] = useState<number | null>(2);

  const handleChange = useCallback(
    (_event: ChangeEvent<{}>, newValue: number | null) => {
      setValue(newValue);
    },
    []
  );

  console.log(value);

  return (
    <Box>
      <Stack spacing={2}>
        <Rating value={value} onChange={handleChange} precision={0.5} />
      </Stack>
      <Stack spacing={2}>
        <Rating
          value={value}
          onChange={handleChange}
          precision={0.5}
          size="large"
          icon={<Favorite fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorderSharp fontSize="inherit" />}
        />
      </Stack>
      <Stack spacing={2}>
        <Rating
          value={value}
          onChange={handleChange}
          precision={0.5}
          size="large"
          // highlightSelectedOnly
          readOnly
        />
      </Stack>
    </Box>
  );
};
