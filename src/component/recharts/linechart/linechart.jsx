import './linechart.css';
import React from "react";
import { useEffect, useRef } from 'react';
import { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Brush,
    AreaChart,
    Area,
    ResponsiveContainer
} from "recharts";


export default function Linechart({ data,xAxisLabelName, valueName}) {
    const [responsiveLineChart, setResponsiveLineChart] = useState("");
    const ref = useRef(null);

    useEffect(() => {
        handleResize()
    }, [ref.current]);

    function handleResize() {
        let width = ref.current ? ref.current.offsetWidth : 300;
        setResponsiveLineChart(width)
        //   console.log(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return (
        <div className='w-100' ref={ref}>
            {!!data.length && (
                <LineChart
                    width={responsiveLineChart}
                    height={300}
                    data={data}
                    syncId="anyId"
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <CartesianGrid vertical={false} horizontal={false} />
                    <XAxis dataKey={xAxisLabelName} padding={{ left: 30, right: 0 }} />
                    <YAxis hide={true} />
                    <Tooltip />
                    <Line type="monotone" dataKey={valueName} stroke="#FFFFFF" fill="#8884d8" />
                </LineChart>
            )}
        </div>
    )
}