import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from './test/Pagenation';
import TableData from './TableData';
import { PostDataTypes } from './types/type';

const TableChart = () => {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    fetch(`/data/dummy_data_for_test.json?`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(dummy => {
        setGetData(dummy.data.result);
      });
  }, []);

  return (
    <TableWrapper>
      <Table>
        <Thead>
          <Tr>
            {TABLE_TITLE.map(tableTitle => (
              <Th key={tableTitle.id}>{tableTitle.title}</Th>
            ))}
          </Tr>
        </Thead>
        {getData
          // .slice(offset, offset + limit)
          .map(
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
            }) => {
              return (
                <TableData
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
              );
            }
          )}
      </Table>
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  padding: 1.5em;
  width: 700px;
`;

const Table = styled.table`
  width: 100%;
  border: 1px solid #a39485;
  font-size: 0.9em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
`;

// const Span = styled.span``;

const Tr = styled.tr``; // 행

const Thead = styled.thead`
  height: 40px;
  font-weight: bold;
  color: #fff;
  background-color: #73685d;
`;

const Th = styled.th`
  border: 1px solid white;
`;

const PageWrapper = styled.div``;

const TABLE_TITLE = [
  {
    id: 0,
    title: 'USER ID',
  },
  {
    id: 1,
    title: 'COUNTRY',
  },
  {
    id: 2,
    title: 'LEVEL',
  },
  {
    id: 3,
    title: 'PVP RANK',
  },
  {
    id: 4,
    title: 'REWARD TYPE',
  },
  {
    id: 5,
    title: 'CREATED AT',
  },
];

export default TableChart;
