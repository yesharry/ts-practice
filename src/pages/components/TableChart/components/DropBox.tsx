import React, { useState } from 'react';
import styled from 'styled-components';
import { ItemTypes } from '../types/type';

interface DropProps {
  items: ItemTypes[];
  last_stage: string;
}

const DropBox = ({ last_stage, items }: DropProps) => {
  return (
    <DropWrapper>
      <LastDiv>LAST STAGE : {last_stage}</LastDiv>
      <ItemsTable>
        <Thead>
          <Tr>
            <Th>ITEM Id</Th>
            <Th>ITEM NAME</Th>
            <Th>ITEM INFORMATION</Th>
          </Tr>
        </Thead>
        {items.map((items, idx) => (
          <Tbody key={idx}>
            <Tr>
              <Td>{items.itemId}</Td>
              <Td>{items.name}</Td>
              <Td>
                {items.defence ? 'DEFENCE' : items.attack ? 'ATTACK' : 'MAGIC'}
                {' : '}
                {items.defence || items.magic || items.attack}
              </Td>
            </Tr>
          </Tbody>
        ))}
      </ItemsTable>
    </DropWrapper>
  );
};

const DropWrapper = styled.div``;

const LastDiv = styled.div``;

const ItemsTable = styled.table`
  width: 500px;
`;

const Tr = styled.tr``;

const Thead = styled.thead`
  height: 30px;
`;

const Th = styled.th`
  border: 1px solid black;
  padding-top: 8px;
  font-size: 15px;
`;

const Tbody = styled.tbody`
  height: 30px;
`;

const Td = styled.td`
  border: 1px solid black;
  padding-top: 8px;
  font-size: 15px;
  text-align: center;
`;

export default DropBox;
