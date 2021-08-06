import React, { useState, useEffect, ContextType } from "react";
import { axiosInstance, IMG_BASE_URL } from "../service";
import { ComponentParameters, ContentTypes } from "../type";
import { ScrollableContainer } from "./ScrollableContainer"
import "./Row.css";
import { AddFavorite } from "../page/Favorite";

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

  const clickHandler = (id: number) => {
    //console.log(id);
    const item = data.filter((value) => (value.id === id));
    console.log(item);
    AddFavorite(item[0]);
  }

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
            return (
              <div 
                className={(param.isBackdrop === false)? "row_poster" : "row_poster_backdrop"}
                key={item.id}
              >
                <img
                  className={(param.isBackdrop === false)? "row_poster_img" : "row_poster_backdrop_img"}
                  src={`${IMG_BASE_URL}${(param.isBackdrop === false) ? item.poster_path : item.backdrop_path }`}
                  alt={item.original_title} 
                  onClick={() => clickHandler(item.id)}
                />
              </div>
            );
        })}
      </ScrollableContainer>
    </div>
    </>
  );
};