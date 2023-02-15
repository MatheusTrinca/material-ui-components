import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import { Send } from '@mui/icons-material';
import {
  FormatBoldOutlined,
  FormatItalicOutlined,
  FormatUnderlinedOutlined,
} from '@mui/icons-material';
import React, { useCallback, useState } from 'react';

export const MuiButton: React.FC = () => {
  const [formats, setFormats] = useState<string | null>(null);

  const handleToggleButton = useCallback(
    (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
      setFormats(updatedFormats);
    },
    [setFormats]
  );

  console.log(formats);

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<Send />}
          disableRipple
          onClick={() => alert('Alert')}
        >
          Send
        </Button>
        <Button variant="contained" endIcon={<Send />} disableElevation>
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          <Send />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="outlined"
          color="secondary"
          aria-label="Button group"
          orientation="vertical"
        >
          <Button>left</Button>
          <Button>middle</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="Toggle button group"
          value={formats}
          onChange={handleToggleButton}
          size="small"
          color="primary"
          orientation="vertical"
          exclusive
        >
          <ToggleButton color="secondary" value="bold" aria-label="Bold">
            <FormatBoldOutlined />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="Italic">
            <FormatItalicOutlined />
          </ToggleButton>
          <ToggleButton value="underline" aria-label="Underline">
            <FormatUnderlinedOutlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
