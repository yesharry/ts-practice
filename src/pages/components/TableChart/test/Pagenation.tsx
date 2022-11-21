import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import {
  BiArrowFromLeft,
  BiArrowFromRight,
  BiLeftArrowAlt,
  BiRightArrowAlt,
} from 'react-icons/bi';

interface PostDataProps {
  total: number;
  limit: number;
  offset: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  blockNum: number;
  setBlockNum: Dispatch<SetStateAction<number>>;
}

const PNtest = ({
  total,
  limit,
  offset,
  page,
  setPage,
  blockNum,
  setBlockNum,
}: PostDataProps) => {
  const createArr = (n: number) => {
    const iArr: number[] = new Array(n);
    for (let i = 0; i < n; i++) iArr[i] = i + 1;
    return iArr;
  };

  const totalPage: number = Math.ceil(total / limit);
  const blockArea: number = Number(blockNum * limit); // ?

  const nArr = createArr(Number(totalPage)); // totalPage를 배열로
  const pArr = nArr?.slice(blockArea, Number(limit) + blockArea);

  const firstPage = (): void => {
    setPage(1);
    setBlockNum(0);
  };

  const lastPage = (): void => {
    setPage(totalPage);
    setBlockNum(Math.ceil(totalPage / limit) - 1);
  };

  const prevPage = (): void => {
    if (page <= 1) {
      return;
    }
    if (page - 1 <= limit * blockNum) {
      setBlockNum((n: number) => n - 1);
    }
    setPage((n: number) => n - 1);
  };

  const nextPage = (): void => {
    if (page >= totalPage) {
      return;
    }
    if (limit * Number(blockNum + 1) < Number(page + 1)) {
      setBlockNum((n: number) => n + 1);
    }
    setPage((n: number) => n + 1);
  };

  return (
    <PageUl>
      <BiArrowFromRight
        onClick={() => {
          firstPage();
        }}
        className="moveToFirst"
      />
      <BiLeftArrowAlt
        onClick={() => {
          prevPage();
        }}
        className="moveToPrev"
      />
      {pArr.map((n: number) => (
        <PageLi key={n} className={n === page ? 'clicked' : ''}>
          <PageBtn
            onClick={() => {
              setPage(n);
            }}
          >
            {n}
          </PageBtn>
        </PageLi>
      ))}
      <BiRightArrowAlt
        onClick={() => {
          nextPage();
        }}
        className="moveToNext"
      />
      <BiArrowFromLeft
        onClick={() => {
          lastPage();
        }}
        className="moveToLast"
      />
    </PageUl>
  );
};

const PageUl = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  /* list-style: none; */
  text-align: center;
  .moveToFirst,
  .moveToPrev,
  .moveToNext,
  .moveToLast {
    width: 30px;
    height: 30px;
    cursor: pointer;
    border: 1px solid black;
  }
  .moveToFirst,
  .moveToPrev {
    margin-right: 10px;
  }
  .moveToLast,
  .moveToNext {
    margin-left: 10px;
  }
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 1rem;
  font-weight: 600;
  width: 30px;
  margin-right: 10px;
  &.clicked {
    color: white;
    background-color: ${props => props.theme.colors.gray};
  }
  &:hover {
    cursor: pointer;
    color: white;
    background-color: ${props => props.theme.colors.gray};
  }
  &:focus::after {
    color: white;
    background-color: ${props => props.theme.colors.gray};
  }
`;

const PageBtn = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  background-color: transparent;
  margin-right: 10px;
  cursor: pointer;
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: ${props => props.theme.colors.gray};
  }
`;

export default PNtest;
