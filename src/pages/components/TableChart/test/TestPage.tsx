import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TestData from './TestData';
// import Pagination from './Pagination';
import PNtest from './Pagenation';

const TestPage = () => {
  const [getData, setGetData] = useState([]);

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [blockNum, setBlockNum] = useState<number>(0);

  useEffect(() => {
    fetch(`/data/dummy_data_for_test.json`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(dummy => {
        setGetData(dummy.data.result);
      });
  }, []);

  return (
    <Wrapper>
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
            .slice(offset, offset + limit)
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
                  <TestData
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
      <PageWrapper>
        <PNtest
          total={getData.length}
          offset={offset}
          limit={limit}
          page={page}
          setPage={setPage}
          blockNum={blockNum}
          setBlockNum={setBlockNum}
        />
      </PageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  padding-top: 12px;
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

export default TestPage;
