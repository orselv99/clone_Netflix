import React, { useState, useEffect } from "react";
import { axiosInstance, IMG_BASE_URL } from "../service";
import { ComponentParameters, ContentTypes } from "../type";
import { ScrollableContainer } from "./ScrollableContainer"
import "./Row.css";

export const Row = (param: ComponentParameters): any => {
  const [data, setData] = useState<ContentTypes[]>([]);
  useEffect(() => {
    const getItems = async () => {
      const request = await axiosInstance.get(param.fetchURL);
      //console.log(request.data.results);
      setData(request.data.results);
      return request;
     };

     getItems();
  }, [param.fetchURL]);

  //console.log(onItem);
  return (
    <>
    {/* <div className="row_prevent_vibrate">
      {onItem === true && <Detail item={currentData}/>}
    </div> */}
    <div className="row">
      <h1 className="row_title">{param.title}</h1>
      <ScrollableContainer>
        {data.map((item) => {
            console.log(item.id);
            return (
              <div className={(param.isBackdrop === false)? "row_poster" : "row_backdrop_poster"}>
                <img
                  className={(param.isBackdrop === false)? "row_poster_img" : "row_backdrop_poster_img"}
                  src={`${IMG_BASE_URL}${(param.isBackdrop === false) ? item.poster_path : item.backdrop_path }`}
                  alt={item.original_title} 
                  key={item.id}
                />
              </div>
            );
        })}
      </ScrollableContainer>
    </div>
    </>
  );
};