import React from 'react'
import { Research } from '../../components/Research/Research'
import { CompanyLocation } from '../../components/Company/CompanyLocation'
import { JoinOurTeam } from '../../components/JoinOurTeam/JoinOurTeam'
import video from './NOEON_VIDEO.m4v'
import './Main.styles.scss'

const Main = () => {
  return (
    <>
      <video className='mainVideo' src={video} autoPlay muted loop />
      <Research />
      <CompanyLocation />
      <JoinOurTeam />
    </>
  )
}

export default Main
