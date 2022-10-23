import React, { FC } from "react";
import "./CompanyLocation.styles.scss";
import city from "./image_screen_2.png";

export const CompanyLocation: FC = () => {
  return (
    <div className="company" id="company">
      <div className="company__content">
        <img className="company__city" src={city} alt="Tokyo" />
        <div className="company__content-text">
          <h2 className="company__title">Company</h2>
          <p className="company__text">
            We are located in Tokyo, Midtown Tower 18F
          </p>
          <div>
            <a className="company__link" href="company">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
