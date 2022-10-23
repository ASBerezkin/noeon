import React, { Fragment } from "react";
import "../../base.scss";
import { Menu } from "../../components/Menu/Menu";
import { FullBanner } from "../../components/FullBanner/FullBanner";
import "./GrantsPage.styles.scss";
import "../../components/Research/Research.styles.scss";
import { Step } from "../../components/Step/Step";
import cityTown from "./grants-town.png";
import rectFirst from "./grants-rect-first.png";
import rectSecond from "./grants-rect-second.png";
import banner from './grants-banner.png'

const steps = [
  { id: 1, text: "Overcoming limitations of Knowledge Graphs" },
  {
    id: 2,
    text: "Transformation of descriptive knowledge into procedural knowledge",
  },
  { id: 3, text: "Transparency of automated reasoning" },
];

const fundingText = [
  {
    id: 1,
    text: "Noeon Research signs the contract with the grantee or grantee's organization according to the Japanese law.",
  },
  {
    id: 2,
    text: "Grantees can use the funding for salaries, business trips, renting computational powers etc.",
  },
  {
    id: 3,
    text: "Up to 10% of the grant could be used to cover indirect costs to those who work for academic organizations.",
  },
  {
    id: 4,
    text: "Minimal amount of money per grant is $50k, and there is no top limit.",
  },
];

const Grants = () => {
  return (
    <>
      <Menu />
      <FullBanner src={banner}/>
      <div className="grantsBlock">
        <h2 className="research__title">Grant Topics</h2>
        <div className="research__steps">
          {steps.map((step) => (
            <div className="research__steps__wrapper" key={step.id}>
              <Step {...step} />
            </div>
          ))}
        </div>
        <div className="grantsBlock__heading-who">Who Can Apply</div>
        <div className="text">
          We welcome both researchers who work in academic organizations and
          individual researchers. We work worldwide.
        </div>
        <div className="grantsBlock__fuding">
          <div className="grantsBlock__image">
            <img src={cityTown} alt="cityTown" />
            <div className="grantsBlock__downImage">
              <img src={rectFirst} alt="rectFirst" />
              <img src={rectSecond} alt="rectSecond" />
            </div>
          </div>
          <div className="grantsBlock__table">
            <div className="grantsBlock__container">
              <h3 className="title">Funding</h3>
              <ul className="grantsBlock__list">
                {fundingText.map((item) => (
                  <div className="grantsBlock__containerList">
                    <li className="text">{item.text}</li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="companyBlock__footer">
        <p className="text">
          Noeon Research, Midtown Tower 18F,
          <br /> 9-7-1 Akasaka, Minato-ku, Tokyo, Japan
          <br /> 2022
        </p>
      </footer>
    </>
  );
};

export default Grants;
