import { Mail, VideoCall } from '@mui/icons-material';
import {
  List,
  Box,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  Icon,
  ListItemButton,
  Divider,
} from '@mui/material';

export const MuiList = () => {
  return (
    <Box sx={{ width: '400px', bgcolor: '#efefef' }}>
      <List sx={{ bgcolor: 'greenyellow' }}>
        <ListItem>
          <ListItemText primary="List item 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="List item 2" />
        </ListItem>
        <ListItem>
          <ListItemText primary="List item 3" />
        </ListItem>
      </List>
      <List sx={{ bgcolor: 'greenyellow' }}>
        <ListItem>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText primary="List item 1" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText primary="List item 2" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText primary="List item 3" />
        </ListItem>
      </List>
      <List sx={{ bgcolor: 'darkgray' }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: 'red' }}>
              <VideoCall sx={{ color: 'black' }} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Video Call" secondary="Youtube video" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="List item 2" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText primary="List item 3" />
        </ListItem>
      </List>
    </Box>
  );
};
