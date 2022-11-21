import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StateDate from './StateDate';
import { PostDataTypes } from '../types/type';
import Pagination from './Pagenation';

// interface PostDataProps {
//   postData: PostDataTypes[] | undefined;
// }

const StateChart = () => {
  const [postData, setPostData] = useState<PostDataTypes[]>();

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    fetch(`data/dummy_data_for_test.json?`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(dummy => {
        setPostData(dummy.data.result);
      });
  }, []);

  return (
    <>
      <TableWrapper>
        <Table>
          <Thead>
            <Tr>
              {TABLE_TITLE.map(tableTitle => (
                <Th key={tableTitle.id}>{tableTitle.title}</Th>
              ))}
            </Tr>
          </Thead>
          <StateDate postData={postData} />
        </Table>
      </TableWrapper>
      {/* <PageWrapper>
        <Pagination limit={limit} page={page} setPage={setPage} />
      </PageWrapper> */}
    </>
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

export default StateChart;
