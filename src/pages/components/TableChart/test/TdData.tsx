import React from 'react';
import styled from 'styled-components';
import DropBox from '../components/DropBox';
import { PostDataTypes } from '../types/type';

interface TdDataProps {
  data: PostDataTypes;
}

const TdData = ({ data }: TdDataProps) => {
  return (
    <>
      <Tr>
        <Td>{data.uid}</Td>
        <Td>{data.country}</Td>
        <Td>{data.uid}</Td>
        <Td>{data.uid}</Td>
        <Td>{data.uid}</Td>
        <Td>{data.uid}</Td>
      </Tr>
      <DropTr>
        <DropTd colSpan={6}>{/* <DropBox /> */}</DropTd>
      </DropTr>
    </>
  );
};

const Tr = styled.tr``; // 행

const Td = styled.td`
  border: 1px solid #e5e5e5;
  text-align: center;
`;

const DropTr = styled.tr``;

const DropTd = styled.td``;

export default TdData;
