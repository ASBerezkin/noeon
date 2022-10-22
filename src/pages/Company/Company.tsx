import React from "react";
import '../../base.scss'
import '../../components/Research/Research.styles.scss'
import './CompanyPage.styles.scss'
import {Menu} from "../../components/Menu/Menu";
import {FullBanner} from "../../components/FullBanner/FullBanner";
import {team, teamRow2, teamRow3, teamRow4} from "../../components/Company/constants";
import {Step} from "../../components/Step/Step";
import {CardTeam} from "../../components/CardTeam/CardTeam";
import {steps} from "./constants";

const Company = () => {
    return <>
        <Menu/>
        <FullBanner/>
        <div className="companyBlock">
            <h2 className="title">Company</h2>
            <p className="text">Noeon Research is an R&D company designing a technology that is general
                and universal enough to automate
                tasks
                solved by junior- and mid-level software engineers.</p>

            <p className="text">Noeon Research focuses on the automatisation of code synthesis and
                analysis using a hybrid approach. Our
                solution
                incorporates the ability to process a large amount of data from Machine Learning as well as the ability
                to
                have
                a strong inductive bias by efficient prior knowledge encoding.</p>

            <p className="text">To surpass the conventional approach, Noeon Research aims to develop a new
                approach that is less specialized,
                capable of extending its functionality, scalable, and able to learn on the fly.</p>

            <p className="text">Our team has worldwide employees, including Russians and Ukrainians. We
                support Ukraine and strive for its
                victory!</p>
        </div>
        <div className="research__steps">
            {steps.map(step => <div className='company__step-wrapper' key={step.id}>
                <Step {...step} align="start"/>
            </div>)}
        </div>
        <div className="company__content companyTeam">
            <div className="company__content-text">
                <h2 className="company__title">Team</h2>\
            </div>
        </div>
        <div className="company__team">
            {team.map(item => <CardTeam {...item} />)}
        </div>
        <div className="company__team companyTeam__cardWrapper">
            {teamRow2.map(item => <CardTeam {...item} />)}
        </div>
        <div className="company__team companyTeam__cardWrapper">
            {teamRow3.map(item => <CardTeam {...item} />)}
        </div>
        <div className="company__team companyTeam__cardWrapper">
            {teamRow4.map(item => <CardTeam {...item} />)}
        </div>
        <div className="companyBlock__contacts">
            <h3 className="title">
                Contact
            </h3>
            <p className="text">Noeon Research. Midtown Tower 18F, 9-7-1 Akasaka, Minato-ku, Tokyo, Japan. <b>Contact&nbsp;us&nbsp;
                <a href="mailto:info@noeon.ai">info@noeon.ai</a></b></p>
        </div>
        <footer className="companyBlock__footer">
            <p className="text">Noeon Research. <br />
                2022</p>
        </footer>
    </>
}

export default Company