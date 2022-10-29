import React, { FC } from 'react'
import './JoinOurTeam.styles.scss'
import banner from './JoinOurTeam.png'
import { FullBanner } from '../../components/FullBanner/FullBanner'
import { FigureStep } from '../../components/FigureStep/FigureStep'
import { figureStep } from './constants'

type TJoinOurTeamProps = {}

const JoinOurTeam: FC<TJoinOurTeamProps> = () => {
  return (
    <>
      <FullBanner src={banner} withMargin />
      <div className='companyBlock'>
        <h2 className='title'>Join Our Team</h2>
        <p className='text'>
          Our team works on the automatisation of code synthesis and analysis.
          We utilize Machine Learning to process a large amount of data and
          Knowledge Graphs to have a strong inductive bias by efficient prior
          knowledge encoding.
        </p>

        <p className='text'>
          Do you want to work with us? We are looking for Research Engineers and
          Research Scientists in Applied Mathematics, Computer Science, Machine
          Learning, and Statistical Physics, as well as Software Engineers with
          expertise in Distributed Systems, System Design, and Optimal Data
          Structures.
        </p>
      </div>
      <div className='figureStepBlock'>
        {figureStep.map(step => (
          <div key={step.title} className='figureStepBlock__item'>
            <FigureStep {...step} />
          </div>
        ))}
      </div>
      <div className='howtoApply'>
        <h3 className='title'>How to Apply</h3>
        <p className='text'>
          <b>
            Just write to us{' '}
            <a href='mailto:hiring@noeon.ai'>hiring@noeon.ai</a>
          </b>
        </p>
      </div>
    </>
  )
}

export default JoinOurTeam
