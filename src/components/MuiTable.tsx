import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export const MuiTable: React.FC = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          {tableData.map(data => (
            <TableRow>
              <TableCell>{data.id}</TableCell>
              <TableCell>{data.first_name}</TableCell>
              <TableCell>{data.last_name}</TableCell>
              <TableCell align="center">{data.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: 'Willamina',
    last_name: 'Trimmill',
    email: 'wtrimmill0@canalblog.com',
    gender: 'Female',
    ip_address: '32.165.175.161',
  },
  {
    id: 2,
    first_name: 'Fanechka',
    last_name: 'MacKeig',
    email: 'fmackeig1@naver.com',
    gender: 'Female',
    ip_address: '163.243.76.167',
  },
  {
    id: 3,
    first_name: 'Sib',
    last_name: 'Zanni',
    email: 'szanni2@slate.com',
    gender: 'Female',
    ip_address: '225.25.127.4',
  },
  {
    id: 4,
    first_name: 'Egan',
    last_name: 'MacKnight',
    email: 'emacknight3@paginegialle.it',
    gender: 'Male',
    ip_address: '175.175.79.255',
  },
  {
    id: 5,
    first_name: 'Stavro',
    last_name: 'Sellack',
    email: 'ssellack4@ezinearticles.com',
    gender: 'Male',
    ip_address: '45.200.130.84',
  },
  {
    id: 6,
    first_name: 'Klarika',
    last_name: 'Santry',
    email: 'ksantry5@dmoz.org',
    gender: 'Female',
    ip_address: '141.178.13.10',
  },
  {
    id: 7,
    first_name: 'Sile',
    last_name: "D'Orsay",
    email: 'sdorsay6@shop-pro.jp',
    gender: 'Female',
    ip_address: '99.162.14.131',
  },
  {
    id: 8,
    first_name: 'Judye',
    last_name: 'Mayger',
    email: 'jmayger7@naver.com',
    gender: 'Female',
    ip_address: '113.65.208.39',
  },
  {
    id: 9,
    first_name: 'Nye',
    last_name: 'Kettow',
    email: 'nkettow8@woothemes.com',
    gender: 'Male',
    ip_address: '88.45.26.94',
  },
  {
    id: 10,
    first_name: 'Elie',
    last_name: 'Redmire',
    email: 'eredmire9@dot.gov',
    gender: 'Female',
    ip_address: '128.233.242.24',
  },
];
