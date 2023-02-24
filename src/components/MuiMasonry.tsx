import { ExpandMore } from '@mui/icons-material';
import { Masonry } from '@mui/lab';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Typography,
} from '@mui/material';

const heights = [150, 54, 76, 90, 542, 150, 54, 67, 98, 90, 50, 80, 90, 76];

export const MuiMasonry: React.FC = () => {
  return (
    <Box sx={{ width: 800, minHeight: 400 }}>
      <Masonry columns={4} spacing={2}>
        {heights.map((height, idx) => (
          <Paper
            key={idx}
            sx={{
              // display: 'flex',
              // justifyContent: 'center',
              // alignItems: 'center',
              height,
            }}
          >
            {/* {idx + 1} */}
            <Accordion sx={{ minHeight: height }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>Accordion {idx + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>Content</AccordionDetails>
            </Accordion>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};
