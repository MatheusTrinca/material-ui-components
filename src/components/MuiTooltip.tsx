import { Delete } from '@mui/icons-material';
import { IconButton, Tooltip, Zoom } from '@mui/material';

export const MuiTooltip: React.FC = () => {
  return (
    <Tooltip
      title="Delete"
      placement="right"
      arrow
      enterDelay={500}
      leaveDelay={200}
      TransitionComponent={Zoom}
    >
      <IconButton>
        <Delete />
      </IconButton>
    </Tooltip>
  );
};
