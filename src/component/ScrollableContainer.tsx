import React, { useState, useEffect } from "react";
import { useRef } from "react";
import "./ScrollableContainer.css";

type ScrollPosition = {
  top?: number;
  left?: number;
  x: number;
  y: number;
}

export const ScrollableContainer = (props: { children: React.ReactNode }) => {
  const [pos, setPos] = useState<ScrollPosition>();
  const container = useRef<HTMLDivElement>(null);
  console.log(container);

  const mouseDownHandler = (event: React.MouseEvent) => {
    setPos({
      top: container.current?.scrollTop,
      left: container.current?.scrollLeft,
      x: event.clientX,
      y: event.clientY,
    });
    
  }
  const mouseUpHandler = () => {
    
  }
  const mouseMoveHandler = (event: React.MouseEvent) => {
    if (typeof pos !== "undefined") {
      const dx = event.clientX - pos?.x;
      const dy = event.clientY - pos?.y;

      // container.scrollTop = pos.top - dy;
      // container.scrollLeft = pos.left - dx;
    }
    

  }

  return (
    <div 
      className="scrollableContainer"
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      onMouseMove={mouseMoveHandler}
      ref={container}
    >
      {props.children}
    </div>
  );
}