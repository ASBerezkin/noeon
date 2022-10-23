import React from "react";
import "../../base.scss";
import {Menu} from "../../components/Menu/Menu";
import {FullBanner} from "../../components/FullBanner/FullBanner";
import "./GrantsPage.styles.scss";
import "../../components/Research/Research.styles.scss";
import {Step} from "../../components/Step/Step";
import cityTown from "./grants-town.png";
import rectFirst from "./grants-rect-first.png";
import rectSecond from "./grants-rect-second.png";
import banner from './grants-banner.png'
import {ShadowStep} from "../../components/ShadowStep/ShadowStep";
import {fundingText, steps, shadowSteps, applyStep} from "./constants";
import {ApplyStep} from "../../components/ApplyStep/ApplyStep";

const Grants = () => {
    return (
        <>
            <Menu/>
            <FullBanner src={banner} withMargin/>
            <div className="grantsBlock">
                <h2 className="research__title">Grant Topics</h2>
                <div className="research__steps">
                    {steps.map((step) => (
                        <div className="research__steps__wrapper" key={step.id}>
                            <Step {...step} align="start"/>
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
                        <img src={cityTown} alt="cityTown"/>
                        <div className="grantsBlock__downImage">
                            <img src={rectFirst} alt="rectFirst"/>
                            <img src={rectSecond} alt="rectSecond"/>
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
                <div className="shadowSteps">
                    <h3 className="title">Results and Intelectual Property</h3>
                    {shadowSteps.map(step => <div className="shadowSteps__item"><ShadowStep {...step} /></div>)}
                </div>
                <div className="applySteps">
                    <h2 className="title">How to Apply</h2>
                    <div className="applySteps__wrapper">
                        {applyStep.map(step => <ApplyStep {...step} />)}
                    </div>
                </div>
                <div className="apply">
                    <div className="h3 title">Apply</div>
                    <p className="text">Just write to us grant@noeon.ai</p>
                </div>
            </div>
            <footer className="companyBlock__footer">
                <p className="text">
                    Noeon Research, Midtown Tower 18F,
                    <br/> 9-7-1 Akasaka, Minato-ku, Tokyo, Japan
                    <br/> 2022
                </p>
            </footer>
        </>
    );
};

export default Grants;
