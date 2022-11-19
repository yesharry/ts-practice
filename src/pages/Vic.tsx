import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import PieChartTest from './components/PieChartTest/PieChartTest';
import TableChart from './components/TableChart/TableChart';
// import TableChartURL from './components/TableChart/TableChartURL';

const Vic = () => {
  return (
    <Div>
      <LibraryTest>
        <PieChartTest />
        {/* <TableChartURL /> */}
        <TableChart />
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
