import { Delete, TagFaces } from '@mui/icons-material';
import { Avatar, Box, Chip, styled } from '@mui/material';
import { Stack } from '@mui/system';
import { useState } from 'react';

interface IChipData {
  key: number;
  label: string;
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
  listStyle: 'none',
}));

export const MuiChip: React.FC = () => {
  const [chipData, setChipData] = useState<readonly IChipData[]>([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ]);

  const handleDelete = (data: IChipData) => () => {
    setChipData(prevState => prevState.filter(chip => chip.key !== data.key));
  };

  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <Chip label="Chip" onClick={() => {}} onDelete={() => {}} />
        <Chip
          label="Chip"
          avatar={
            <Avatar src="https://avatars.githubusercontent.com/u/65499965?v=4" />
          }
        />
        <Chip label="Chip" deleteIcon={<Delete />} onDelete={() => {}} />
        <Chip
          label="Delete"
          size="medium"
          onDelete={() => alert('Deleted')}
          color="error"
        />
      </Stack>
      <Stack direction="row" mt={4}>
        {chipData.map(data => {
          let icon;
          if (data.label === 'React') {
            icon = <TagFaces />;
          }
          return (
            <ListItem key={data.key}>
              <Chip
                icon={icon}
                label={data.label}
                onDelete={
                  data.label === 'React' ? undefined : handleDelete(data)
                }
              />
            </ListItem>
          );
        })}
      </Stack>
    </Box>
  );
};
