import React from 'react';
import styled from 'styled-components';
import PieChartTest from './components/PieChartTest/PieChartTest';
import GetData from './components/PieChartTest/test/GetData';
import TestPage from './components/TableChart/test/TestPage';

const Vic = () => {
  return (
    <Div>
      <LibraryTest>
        <PieChartTest />
        <TestPage />
        <GetData />
      </LibraryTest>
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
