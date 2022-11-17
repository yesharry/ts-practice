import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserDetail from './components/UserDetail';

const CollapsibleTable = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch('/data/dummy_data_for_test.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(test => {
        setUserData(test.data.result);
      });
  }, []);

  // function createData(
  //   name: string,
  //   calories: number,
  //   fat: number,
  //   carbs: number,
  //   protein: number,
  //   price: number
  // ) {
  //   return {
  //     name,
  //     calories,
  //     fat,
  //     carbs,
  //     protein,
  //     price,
  //     history: [
  //       {
  //         date: '2020-01-05',
  //         customerId: '11091700',
  //         amount: 3,
  //       },
  //       {
  //         date: '2020-01-02',
  //         customerId: 'Anonymous',
  //         amount: 1,
  //       },
  //     ],
  //   };
  // }

  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  //   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  //   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
  // ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>USER ID</TableCell>
            <TableCell>COUNTRY</TableCell>
            <TableCell>LV</TableCell>
            <TableCell>PVP RANK</TableCell>
            <TableCell>REWARD TYPE</TableCell>
            <TableCell>CREATED</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map(
            ({
              uid,
              country,
              created_at,
              lv,
              items,
              block_type,
              pvp_rank,
              reward_type,
              last_stage,
            }) => (
              <UserDetail
                key={uid}
                uid={uid}
                country={country}
                created_at={created_at}
                lv={lv}
                items={items}
                block_type={block_type}
                pvp_rank={pvp_rank}
                reward_type={reward_type}
                last_stage={last_stage}
              />
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CollapsibleTable;
