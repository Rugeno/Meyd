import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>Designer</span> outfit for your life
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./src/images/search.png" alt="" />
              <input type="text" placeholder='Try "building mobil app"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Zara</button>
            <button>Puma</button>
            <button>Addidas Design</button>
            <button>Nike</button>
          </div>
        </div>
        <div className="right">
          <img src="./src/images/selena.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;