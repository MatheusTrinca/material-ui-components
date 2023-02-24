import { CopyAll, Print, Share } from '@mui/icons-material';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';

export const MuiSpeedDial: React.FC = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      <SpeedDialAction icon={<CopyAll />} tooltipTitle="Copiar" />
      <SpeedDialAction icon={<Print />} tooltipTitle="Imprimir" />
      <SpeedDialAction icon={<Share />} tooltipTitle="Compartilhar" />
    </SpeedDial>
  );
};
