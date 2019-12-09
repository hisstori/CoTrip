import React from "react";
import "./SliderContainer.css";

// Function based React Component
const SliderContainer = props => {
  return (
    <div className="SliderContainer">
      <div className="slider-container-left">
        <img className="slider-image" src={props.url} />
        <button />
      </div>
      <div className="slider-container-right">
        <h4 className="slider-overview-title">Overview</h4>
        <h4 className="slider-dates-title">Dates</h4>
        <h4 className="slider-location-title">Location</h4>
        <p className="slider-overview-text">{props.overview}</p>
        <p className="slider-dates-text">
          {props.start_date}
          {" -"}
        </p>
        <p className="slider-dates-text">{props.end_date}</p>
        <p className="slider-location-text">{props.location}</p>
      </div>
    </div>
  );
};

SliderContainer.defaultProps = {
  url: "https://www.fillmurray.com/200/300",
  overview:
    "Enjoy a week-long stay at a luxury resort! During your stay, explore the resort's amazing ammenities and events, but above all, explore the beautiful islands of Hawaii! It will be a trip for you and your family to remember forever.",
  start_date: "Sunday, May 17, 2020",
  end_date: "Monday, May 25, 2020",
  location: "Resort XYZ"
};
export default SliderContainer;
