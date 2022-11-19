import React from 'react';
import styled from 'styled-components';
import DropBox from './components/DropBox';

interface DataProps {
  uid: string;
  country: string;
  created_at: string;
  lv: number;
  items: Array<Object>;
  block_type: boolean;
  pvp_rank: number;
  reward_type: string;
  last_stage: string;
}

const TableData = ({
  uid,
  country,
  created_at,
  lv,
  items,
  block_type,
  pvp_rank,
  reward_type,
  last_stage,
}: DataProps) => {
  return (
    <Tbody>
      <Tr>
        <Td>{uid}</Td>
        <Td>{country}</Td>
        <Td>{lv}</Td>
        <Td>{pvp_rank}</Td>
        <Td>{reward_type}</Td>
        <Td>{created_at}</Td>
      </Tr>
      <DropTr>
        <DropTd colSpan={6}>
          <DropBox />
        </DropTd>
      </DropTr>
    </Tbody>
  );
};

const Tr = styled.tr``; // 행

const Tbody = styled.tbody`
  height: 30px;
`;

const Td = styled.td`
  border: 1px solid #e5e5e5;
  text-align: center;
`;

const DropTr = styled.tr``;

const DropTd = styled.td``;

export default TableData;
