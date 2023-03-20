import React from "react";
import "./Shoes.css";
import LOGO from "../../images/LOGO.PNG";

const Shoes = () => {
  return (
    <div>
      <div>
        <div id="borderremove" className="card card--19 container-fluid" style={{boxShadow:"none"}}>
          <div className="card__header card__header--19">
            {/* tag line with component */}

            <div className="card__title card__will-animate">
              <span>
                <img id="headerTitle" src={LOGO} alt="logo here" />
              </span>
            </div>
          </div>

          {/* for shoes image */}
          <div className="card__body">
            <img
              src="https://i.ibb.co/R0Y8T8r/nike19.png"
              alt="Nike 19"
              className="card__image card__will-animate"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoes;
