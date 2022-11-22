import React, { Dispatch, SetStateAction, useState } from 'react';

interface CountProps {
  country: string;
  arr: Array<string>;
  setArr: Dispatch<SetStateAction<string>>;
}

const CountGet = ({ country, setArr, arr }: CountProps) => {
  // console.log(country);
  const rr = [];
  rr.push(country);
  console.log(rr);

  const [kr, setKr] = useState(0);
  return <div>CountGet</div>;
};

export default CountGet;
