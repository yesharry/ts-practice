import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PiePage from './PiePage';

const GetData = () => {
  const [getData, setGetData] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(() => {
    fetch(`/data/dummy_data_for_test.json`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(dummy => {
        setGetData(dummy.data.result);
      });
  }, []);

  return (
    <GetWrapper>
      <PiePage getData={getData} />
    </GetWrapper>
  );
};

const GetWrapper = styled.div``;

export default GetData;
