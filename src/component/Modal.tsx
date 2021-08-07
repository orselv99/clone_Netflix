import React from 'react';
import './Modal.css';

export const Modal = () => {
    // dummy
    return <div className='modal'>안녕하시유</div>;
};

// import { useState, useEffect } from "react";
// import { ContentTypes, MousePoint } from "../type";

// export const Detail = (props: {item: ContentTypes | undefined}) => {
//   const [ mousePoint, setMousePoint ] = useState<MousePoint>();
//   useEffect(() => {
//     const MouseMoveHandler: any = (event: MouseEvent) => {
//       setMousePoint({
//         x: event.clientX,
//         y: event.clientY
//       });
//     };
//     window.addEventListener("mousemove", MouseMoveHandler);
//     //console.log(position);
//     return () => window.removeEventListener("mousemove", MouseMoveHandler);
//   }, [props]);

//   if (typeof props === "undefined") {
//     return null;
//   }

//   // 마우스 위치로 따라다니게 동적으로 style 생성
//   let style = {};
//   if (mousePoint) {
//     style = {
//       left: mousePoint.x + "px",
//       top: mousePoint.y + "px",
//       position: "absolute",
//       width: "300px",
//       height: "400px",
//       border: "2px solid #fff",
//       pointerEvents: "none",
//       zIndex: "1",
//       backgroundColor: "white",
//       borderRadius: "5px",
//     };
//   }

//   return (
//     <div className="detail" style={style}>
//       {props.item?.original_title}
//       <div className="detail_buttons">
//         <button>Play</button>
//         <button>Add to my list</button>
//         <button>thumbs up</button>
//         <button>thumbs down</button>
//       </div>
//       <div className="detail_contents">
//         <span>{props.item?.vote_average}</span>
//         <span>12</span>
//         <span>9 Season</span>
//       </div>
//       <div className="detail_gener">
//         <span>Sentimental Goofy Romantic</span>
//       </div>
//     </div>
//   );
// }
