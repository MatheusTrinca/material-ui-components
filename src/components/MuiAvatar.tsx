import { Avatar, AvatarGroup, Stack } from '@mui/material';

export const MuiAvatar: React.FC = () => {
  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <Stack spacing={4}>
      <Stack direction="row">
        <Avatar sx={{ bgcolor: 'primary.light' }}>BK</Avatar>
        <Avatar sx={{ bgcolor: 'success.light' }}>MT</Avatar>
      </Stack>
      <Stack direction="row">
        <Avatar sx={{ bgcolor: 'primary.light' }}>BK</Avatar>
        <Avatar sx={{ bgcolor: 'success.light' }}>MT</Avatar>
        <Avatar src="https://avatars.githubusercontent.com/u/65499965?v=4" />
      </Stack>
      <Stack direction="row">
        <AvatarGroup max={4}>
          <Avatar sx={{ bgcolor: 'primary.light' }}>BK</Avatar>
          <Avatar sx={{ bgcolor: 'success.light' }}>MT</Avatar>
          <Avatar src="https://avatars.githubusercontent.com/u/65499965?v=4" />
          <Avatar {...stringAvatar('Kent Dodds')} />
          <Avatar {...stringAvatar('Matheus Trinca')} />
        </AvatarGroup>
      </Stack>
      <Stack direction="row">
        <AvatarGroup total={20}>
          <Avatar sx={{ bgcolor: 'primary.light' }}>BK</Avatar>
          <Avatar sx={{ bgcolor: 'success.light' }}>MT</Avatar>
          <Avatar src="https://avatars.githubusercontent.com/u/65499965?v=4" />
          <Avatar {...stringAvatar('Kent Dodds')} />
          <Avatar {...stringAvatar('Matheus Trinca')} />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};
