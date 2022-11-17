import React from 'react';
import styled from 'styled-components';

interface DataComProps {
  uid: string;
  country: string;
  created_at: Date;
  lv: number;
  items: Array<Object>;
  block_type: boolean;
  pvp_rank: number;
  reward_type: string;
  last_stage: string;
}

const DataCom = ({
  uid,
  country,
  created_at,
  lv,
  items,
  block_type,
  pvp_rank,
  reward_type,
  last_stage,
}: DataComProps) => {
  return (
    <Div>
      {uid}
      {country}
    </Div>
  );
};

const Div = styled.div`
  display: flex;
`;

export default DataCom;
