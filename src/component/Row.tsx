import React, { useState, useEffect } from "react";
import axios from "../axios";
import { RowItemTypes, RowParameters } from "../type";
import "./Row.css";



export const Row = (content: RowParameters): any => {
  const [data, setData] = useState<RowItemTypes[]>([]);
  useEffect(() => {
    const getItems = async () => {
      const request = await axios.get(content.fetchURL);
      //console.log(request.data.results);
      setData(request.data.results);
      return request;
     };

     getItems();
  }, [content.fetchURL]);

  //console.log(data);

  const IMG_BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      <h1>{content.title}</h1>
      <div className="row_poster_container">
        {data.map((item) => {
          return (
            <img
              className="row_poster"
              src={`${IMG_BASE_URL}${(content.isBackdrop === false) ? item.poster_path : item.backdrop_path }`}
              alt={item.original_title} 
            />
          );
        })}
      </div>
    </div>
  );
};