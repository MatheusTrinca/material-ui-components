import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import { useCallback, useState } from 'react';

export const MuiAccordion: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = useCallback((isExpanded: boolean, painel: string) => {
    setExpanded(isExpanded ? painel : false);
  }, []);

  console.log(expanded);

  return (
    <Box>
      <Accordion
        expanded={expanded === 'painel1'}
        onChange={(_event, isExpanded) => handleChange(isExpanded, 'painel1')}
      >
        <AccordionSummary
          id="panel1"
          aria-controls="panel1"
          expandIcon={<ExpandMore />}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            General Settings
          </Typography>
          <Typography>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Distinctio, quis non? Culpa architecto molestias temporibus
            voluptates adipisci officia impedit ducimus!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'painel2'}
        onChange={(_event, isExpanded) => handleChange(isExpanded, 'painel2')}
      >
        <AccordionSummary
          id="panel2"
          aria-controls="panel2"
          expandIcon={<ExpandMore />}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
          <Typography>Users accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quos
            qui sit corporis autem praesentium eum doloribus eaque nesciunt
            perspiciatis quibusdam, temporibus obcaecati voluptatibus
            accusantium dolorem ipsam voluptates aliquid nihil?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'painel2'}
        onChange={(_event, isExpanded) => handleChange(isExpanded, 'painel2')}
      >
        <AccordionSummary
          id="panel3"
          aria-controls="panel3"
          expandIcon={<ExpandMore />}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Advanced Settings
          </Typography>
          <Typography>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Distinctio, quis non? Culpa architecto molestias temporibus
            voluptates adipisci officia impedit ducimus!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          id="panel3"
          aria-controls="panel3"
          expandIcon={<ExpandMore />}
        >
          <Typography>Users data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Distinctio, quis non? Culpa architecto molestias temporibus
            voluptates adipisci officia impedit ducimus!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
