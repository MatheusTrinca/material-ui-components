import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';

export const MuiCard: React.FC = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          image="https://source.unsplash.com/random"
          height="140px"
          alt="unsplash image"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            Material UI
          </Typography>
          <Typography gutterBottom color="GrayText">
            Javascript Lib
          </Typography>
          <Typography variant="body2" color="GrayText">
            React is a JavaScript library created by Facebook React is a User
            Interface (UI) library React is a tool for building UI components.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn more</Button>
          <Button size="small">See more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
