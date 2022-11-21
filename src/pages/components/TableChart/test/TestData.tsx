import React, { useState } from 'react';
import styled from 'styled-components';
import DropBox from '../components/DropBox';
import { ItemTypes } from '../types/type';

interface DataProps {
  uid: string;
  country: string;
  created_at: string;
  lv: number;
  items: ItemTypes[];
  block_type: boolean;
  pvp_rank: number;
  reward_type: string;
  last_stage: string;
}

const TestData = ({
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
  const [open, setOpen] = useState(false);

  const dropActive = () => {
    setOpen(open => !open);
  };

  return (
    <Tbody>
      <Tr onClick={() => dropActive()}>
        <Td>{uid}</Td>
        <Td>{country}</Td>
        <Td>{lv}</Td>
        <Td>{pvp_rank}</Td>
        <Td>{reward_type}</Td>
        <Td>{created_at}</Td>
      </Tr>
      <DropTr>
        <DropTd colSpan={6}>
          {open && <DropBox items={items} last_stage={last_stage} />}
        </DropTd>
      </DropTr>
    </Tbody>
  );
};
const Tr = styled.tr`
  height: 40px;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: #928375;
    color: white;
  }
`; // 행

const Tbody = styled.tbody`
  height: 30px;
`;

const Td = styled.td`
  border: 1px solid #e5e5e5;
  text-align: center;
  padding-top: 12px;
`;

const DropTr = styled.tr``;

const DropTd = styled.td``;

export default TestData;
