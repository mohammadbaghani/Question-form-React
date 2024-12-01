import './Chart.css';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function App(props) {
  const data = [

    {
      "تسلط شما ": props.t,
      uv: 3490,
      pv: 4300,
      amt: props.title
    },

  ];

  return (
    <ResponsiveContainer width="100%" height="100%" className="parent">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        className="chidl-parent" >
        <CartesianGrid strokeDasharray=".1 .1" />
        <XAxis dataKey="amt" />
        <YAxis />
        <Tooltip />

        <Legend dataKey="amt" />

        <Bar dataKey="تسلط شما " fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
      </BarChart>
    </ResponsiveContainer>
  );

}

