import './bar.css'
import React from "react";
import { useEffect, useRef } from 'react';
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: '1',
    value: 200,
    kind: 1
  },
  {
    name: '2',
    value: 240,
    kind: 2
  },
  {
    name: '3',
    value: 80,
    kind: 3
  },
  {
    name: '4',
    value: 80,
    kind: 4
  },
  {
    name: '5',
    value: 220,
    kind: 5
  },
  {
    name: '6',
    value: 110,
    kind: 6
  }
]

export default function Barchart({data,value1Name ,value2Name,xAxisLabelName}) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      {!!data && (
        <ResponsiveContainer>
          <BarChart
            width={600}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >

            <CartesianGrid overlinePosition="right" vertical={false} horizontal={true} />
            <XAxis orientation={"bottom"} dataKey={xAxisLabelName} />
            <YAxis orientation={"right"} yAxisId="right-axis" />
            <YAxis hide={true} orientation={"left"} yAxisId="left-axis" />
            <Tooltip />
            {/* <Legend  verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }}  /> */}
            <Bar dataKey={value1Name} yAxisId="left-axis" barSize={5} fill="#282D30" />
            <Bar dataKey={value2Name} yAxisId="right-axis" barSize={5} fill="#E60000" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
