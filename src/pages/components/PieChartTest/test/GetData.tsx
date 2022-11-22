import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#ff4321'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const GetData = () => {
  const [getData, setGetData] = useState([]);
  const countryArr: Array<string> = [];

  const kr: Array<string> = [];
  const jp: Array<string> = [];
  const cn: Array<string> = [];
  const vn: Array<string> = [];
  const us: Array<string> = [];

  useEffect(() => {
    fetch(`/data/dummy_data_for_test.json`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(dummy => {
        setGetData(dummy.data.result);
      });
  }, []);

  getData.map(({ country }) => countryArr.push(country));

  for (let i = 0; i < countryArr.length; i++) {
    if (countryArr[i] === 'kr') {
      kr.push('kr');
    } else if (countryArr[i] === 'jp') {
      jp.push('jp');
    } else if (countryArr[i] === 'cn') {
      cn.push('cn');
    } else if (countryArr[i] === 'vn') {
      vn.push('vn');
    } else {
      us.push('us');
    }
  }

  const data = [
    {
      name: 'KOREA',
      value: (kr.length / countryArr.length) * 100,
    },
    {
      name: 'JAPAN',
      value: (jp.length / countryArr.length) * 100,
    },
    {
      name: 'CHINA',
      value: (cn.length / countryArr.length) * 100,
    },
    {
      name: 'VIETNAM',
      value: (vn.length / countryArr.length) * 100,
    },
    {
      name: 'US',
      value: (us.length / countryArr.length) * 100,
    },
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx={170}
        cy={170}
        outerRadius={120}
        labelLine={true}
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default GetData;
