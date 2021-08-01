import React from "react";
import { useState, useEffect } from "react";
import "./Navigator.css";

export const Navigator = () => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 100) {
        setShowBackground(true);
      }
      else {
        setShowBackground(false);
      }
    }
    //console.log(showBackground);
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  return (
    <div className={`navigator ${(showBackground === true) ? "navigator_show_background" : null}`}>
      <img 
        className="navigator_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix"
      />
      
      {/* <div className="navigator_menu_center">
        <button>Home</button>
        <button>TV Shows</button>
        <button>Movies</button>
        <button>New & Popular</button>
        <button>My List</button>
      </div>
      <div className="navigator_menu_right">
        <button>Search</button>
        <button>KIDS</button>
        <button>Shop</button>
        <button>Alarm</button>
        <button>Profile</button>
      </div> */}

    </div>
  );
};