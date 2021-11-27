import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import '../styles/Car.css'

const Car = ({ imgSrc, model, testDrive }) => {
  return (
    <div className="car">
      <div className="car-image">
        <img src={imgSrc} alt={model} />
      </div>
      <h2 className="car-model">{model}</h2>
      <div className="car-actions">
        <ButtonPrimary name="order" />
        {testDrive && <ButtonSecondary name="test drive" />}
      </div>
      <div className="car-info">
        <span>Request a Call</span> to speak with a product specialist, value
        your trade-in or apply for leasing
      </div>
    </div>
  );
};

export default Car;
