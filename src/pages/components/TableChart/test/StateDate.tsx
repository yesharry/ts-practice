import React, { useState } from 'react';
import styled from 'styled-components';
import TdData from '../test/TdData';
import { PostDataTypes } from '../types/type';

interface PostDataProps {
  postData: PostDataTypes[] | undefined;
  // limit: number;
  // offset: number;
  // page: number;
}

const StateDate = ({ postData }: PostDataProps) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <Tbody>
      {postData?.slice(offset, offset + limit).map((data: PostDataTypes) => (
        <TdData key={data.uid} data={data} />
      ))}
    </Tbody>
  );
};

const Tbody = styled.tbody`
  height: 30px;
`;

export default StateDate;
