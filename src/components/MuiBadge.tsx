import { Mail } from '@mui/icons-material';
import { Badge, Stack } from '@mui/material';

export const MuiBadge: React.FC = () => {
  return (
    <Stack spacing={2} direction="row" marginTop={4}>
      <Badge badgeContent={4} color="primary">
        <Mail color="action" />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <Mail color="action" />
      </Badge>
      <Badge badgeContent={99} color="secondary" showZero>
        <Mail color="action" />
      </Badge>
      <Badge badgeContent={100} color="secondary" showZero>
        <Mail color="action" />
      </Badge>
      <Badge badgeContent={1000} max={999} color="secondary" showZero>
        <Mail color="action" />
      </Badge>
      <Badge variant="dot" badgeContent={4} color="info">
        <Mail color="action" />
      </Badge>
      <Badge variant="dot" badgeContent={4} color="primary" invisible>
        <Mail color="action" />
      </Badge>
    </Stack>
  );
};
