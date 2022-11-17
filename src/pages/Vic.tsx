import React from 'react';
import styled from 'styled-components';
import CollapsibleTable from './components/CollapsibleTable';
import PieChartTest from './components/PieChartTest';

const Vic = () => {
  return (
    <Div>
      <CollapsibleTable />
      <PieChartTest />
    </Div>
  );
};

const Div = styled.div``;

export default Vic;
