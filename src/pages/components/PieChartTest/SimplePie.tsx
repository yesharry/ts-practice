import React from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

const SimplePie = () => {
  const data01 = [
    { name: 'kr', value: 400 },
    { name: 'jp', value: 300 },
    { name: 'cn', value: 300 },
    { name: 'vn', value: 200 },
    { name: 'us', value: 278 },
  ];

  const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 },
  ];

  return (
    <PieChart width={1000} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data01}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Pie
        dataKey="value"
        data={data02}
        cx={500}
        cy={200}
        innerRadius={40}
        outerRadius={80}
        fill="#82ca9d"
      />
      <Tooltip />
    </PieChart>
  );
};

export default SimplePie;
