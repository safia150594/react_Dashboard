import './bar.css'
import React from "react";
import { useEffect, useRef } from 'react';
import { useState } from "react";

 const ResizeWidth =   () => {
  const [responsiveChart, setResponsiveChart] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    handleResize() 
  }, []);

  function handleResize() {
    let width = ref.current ? ref.current.offsetWidth : 300;
    setResponsiveChart(width)
   }
   
  window.addEventListener("resize", handleResize);
  return {responsiveChart}
 
}
 
export default resizeWidth;
