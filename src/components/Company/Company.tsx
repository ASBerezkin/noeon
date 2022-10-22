import React, {FC} from 'react'
import './Company.styles.scss'
import city from './image_screen_2.png'
import {team} from './constants'
import {CardTeam} from "../CardTeam/CardTeam";

export const Company: FC = () => {
    return <div className="company" id="company">
        <div className="company__content">
            <img className='company__city' src={city} alt="Tokyo"/>
            <div className="company__content-text">
                <h2 className="company__title">Company</h2>
                <p className="company__text">We are located in Tokyo, Midtown Tower 18F</p>
            </div>
        </div>
        <div className="company__team">
            {team.map(item => <CardTeam {...item} />)}
        </div>
    </div>
}