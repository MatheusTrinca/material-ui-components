import { Favorite } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Stack, Tab } from '@mui/material';
import { useState } from 'react';

export const MuiTabs: React.FC = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={2}>
      <Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'dimgray' }}>
            <TabList
              aria-label="Tabs example"
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              centered
            >
              <Tab label="Tab One" value="1" icon={<Favorite />} />
              <Tab label="Tab Two" value="2" />
              <Tab label="Tab Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">Panel 1</TabPanel>
          <TabPanel value="2">Panel 2</TabPanel>
          <TabPanel value="3">Panel 3</TabPanel>
        </TabContext>
      </Box>
      <Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'dimgray', width: '300px' }}>
            <TabList
              aria-label="Tabs example"
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              centered
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Tab One" value="1" icon={<Favorite />} />
              <Tab label="Tab Two" value="2" disabled />
              <Tab label="Tab Three" value="3" />
              <Tab label="Tab One" value="4" />
              <Tab label="Tab Two" value="5" />
              <Tab label="Tab Three" value="6" />
            </TabList>
          </Box>
          <TabPanel value="1">Panel 1</TabPanel>
          <TabPanel value="2">Panel 2</TabPanel>
          <TabPanel value="3">Panel 3</TabPanel>
          <TabPanel value="4">Panel 4</TabPanel>
          <TabPanel value="5">Panel 5</TabPanel>
          <TabPanel value="6">Panel 6</TabPanel>
        </TabContext>
      </Box>
    </Stack>
  );
};
