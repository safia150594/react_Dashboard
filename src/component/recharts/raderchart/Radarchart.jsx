import "./Radarchart.css";
import React from "react";
import { useEffect, useRef } from 'react';
import { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,  
  ResponsiveContainer,
  PolarRadiusAxis
} from "recharts";
// const data=[
//   {
//     subject: "Math",
//     A: 10,
//     B: 110,
//     fullMark: 150
//   },
//   {
//     subject: "Chinese",
//     A: 58,
//     B: 130,
//     fullMark: 150
//   },
//   {
//     subject: "English",
//     A: 86,
//     B: 130,
//     fullMark: 150
//   },
//   {
//     subject: "Geography",
//     A: 90,
//     B: 100,
//     fullMark: 150
//   },
//   {
//     subject: "Physics",
//     A: 50,
//     B: 90,
//     fullMark: 150
//   },
//   {
//     subject: "History",
//     A: 10,
//     B: 85,
//     fullMark: 150
//   }
// ]


export default function Radarchart({data,innerStrokeKey,labelkey}) {
  const [responsiveRadarChart, setResponsiveRadarChart] = useState("");
    const ref = useRef(null);  
    useEffect(() => {
      handleResize()
    }, [ref.current]);  
    function handleResize() {
      let width = ref.current ? ref.current.offsetWidth : 300;
      setResponsiveRadarChart(width)
    }
    window.addEventListener("resize", handleResize);
  return (
    <div className="w-100" style={{ width: "100%", height: 300 }}>  
    {!!data.length && (
      <ResponsiveContainer>
        <RadarChart
      // cx={120}
      // cy={150}
      outerRadius={80}
      width={responsiveRadarChart}
      height={300}
      data={data}
    >
      <PolarGrid stroke="#fff" fill="#fff" />
      <PolarAngleAxis dataKey={labelkey}  stroke="#fff"/>
      {/* <PolarRadiusAxis /> */}
      <Radar
        name="Mike"
        dataKey={innerStrokeKey}
        // stroke="#8884d8"
        fill="#FF0000"
        fillOpacity={0.7}        
      />
    </RadarChart>
    </ResponsiveContainer>
    )}   
    
    </div>
  );
}
