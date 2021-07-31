import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

type ItemTypes = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

const Row = (content: { title: string, fetchURL: string}): any => {
  const [data, setData] = useState<ItemTypes[]>([]);
  useEffect(() => {
      const test = async () => {
      const request = await axios.get(content.fetchURL);
      setData(request.data.results);
      //console.log(request);
      return request;
     };
     test();
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
              src={`${IMG_BASE_URL}${item.poster_path}`}
              alt={item.original_title} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;