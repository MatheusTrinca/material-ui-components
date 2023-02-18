import { Home } from '@mui/icons-material';
import { Breadcrumbs, Link, Stack, Typography } from '@mui/material';

export const MuiBreadcrumbs: React.FC = () => {
  return (
    <Stack padding={5}>
      {/* <Breadcrumbs separator=">">
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalogo
        </Link>
        <Link underline="hover" href="#">
          Acessorios
        </Link>
        <Link underline="hover" href="#">
          Novas Coleções
        </Link>
        <Typography color="text.primary">Cintos</Typography>
      </Breadcrumbs> */}
      <Breadcrumbs separator=">">
        <Link
          underline="hover"
          href="#"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Home fontSize="inherit" sx={{ mr: 0.5 }} />
          HOME
        </Link>
        <Link underline="hover" href="#">
          Catalogo
        </Link>
        <Link underline="hover" href="#">
          Acessorios
        </Link>
        <Link underline="hover" href="#">
          Novas Coleções
        </Link>
        <Typography color="text.primary">Cintos</Typography>
      </Breadcrumbs>
    </Stack>
  );
};
