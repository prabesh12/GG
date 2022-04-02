import React from "react";


const Banner = () => {
  return (
    <>
      <div
        id="banner"
        className="carousel slide"
        data-ride="carousel"
        // style={{marginTop:"100px"}}
      
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="./images/banner1.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="./images/banner2.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="./images/banner1.jpg"
              alt="Third slide"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
