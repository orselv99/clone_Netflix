import React, { useState, useEffect } from "react";
import { axiosInstance, IMG_BASE_URL } from "../service";
import { ComponentParameters, ContentTypes } from "../type";
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

  //console.log(data);


  return (
    <div>
      <h1 className="row_title">{param.title}</h1>
      <div className="row_poster_container">
        {data.map((item) => {
          return (
            <img
              className={(param.isBackdrop === false)? "row_poster" : "row_backdrop_poster"}
              src={`${IMG_BASE_URL}${(param.isBackdrop === false) ? item.poster_path : item.backdrop_path }`}
              alt={item.original_title} 
            />
          );
        })}
      </div>
    </div>
  );
};