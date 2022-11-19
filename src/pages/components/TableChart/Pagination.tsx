import React, { Dispatch } from 'react';
import styled from 'styled-components';

interface PageProps {
  total: number;
  limit: number;
  page: number;
  setGetData: [];
}

const Pagination = ({ total, limit, page, setGetData }: PageProps) => {
  const pageNums = Math.ceil(total / limit);

  return (
    <BtnWrapper>
      {/* <Button onClick={() => setGetData(page - 1)} disabled={page === 1}>
        &lt;
      </Button> */}
    </BtnWrapper>
  );
};

const BtnWrapper = styled.div``;

const Button = styled.button``;

export default Pagination;
