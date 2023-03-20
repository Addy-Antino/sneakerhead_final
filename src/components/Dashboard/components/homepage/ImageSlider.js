import React from "react";
import './server.scss';
function ImageSlider() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-mdb-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to={0}
            aria-current="true"
            className="active"
            aria-label="Slide 1"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img
              src="https://images.unsplash.com/photo-1550406365-1bb90b09f789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="d-block w-100 "
              alt="Wild Landscape"
            />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5></h5> */}
              <h5>Step up your style game with our shoes.</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ImageSlider;
