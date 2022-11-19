import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DataCom from './DataCom';

const GetDataTest = () => {
  const [getData, setGetData] = useState([]);
  const [dataOffset, setDataOffset] = useState(0);
  const [dataLimit, setDataLimit] = useState(10);

  useEffect(() => {
    fetch('/data/dummy_data_for_test.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(test => {
        setGetData(test.data.result);
      });
  }, []);

  return (
    <GetWrapper>
      {getData
        .slice(0, 11)
        .map(
          ({
            uid,
            country,
            created_at,
            lv,
            items,
            block_type,
            pvp_rank,
            reward_type,
            last_stage,
          }) => {
            return (
              <DataCom
                key={uid}
                uid={uid}
                country={country}
                created_at={created_at}
                lv={lv}
                items={items}
                block_type={block_type}
                pvp_rank={pvp_rank}
                reward_type={reward_type}
                last_stage={last_stage}
              />
            );
          }
        )}
    </GetWrapper>
  );
};

const GetWrapper = styled.div`
  width: 1300px;
  margin: 0 auto;
  background-color: pink;
`;

const DataList = styled.p``;

export default GetDataTest;
