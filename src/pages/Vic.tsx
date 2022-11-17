import React from 'react';
import styled from 'styled-components';
import CollapsibleTable from './components/CollapsibleTable/CollapsibleTable';
import GetDataTest from './components/CollapsibleTable/test/GetDataTest';
import PieChartTest from './components/PieChartTest/PieChartTest';

const Vic = () => {
  return (
    <Div>
      <LibraryTest>
        <PieChartTest />
        <CollapsibleTable />
      </LibraryTest>
      <GetDataTest />
    </Div>
  );
};

const Div = styled.div`
  width: 1300px;
  margin: 0 auto;
`;

const LibraryTest = styled.div`
  display: flex;
`;

export default Vic;
