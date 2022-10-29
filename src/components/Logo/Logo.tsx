import React from 'react'
import './Logo.styles.scss'
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <div className='logo-wrapper'>
      <Link to='/' className='logo-link'>
        <div className='logo'>
          <div className='logo-noeon'>NOEON</div>
          <br />
          <div className='logo-research'>research</div>
        </div>
      </Link>
      <p className='logo-text'>
        Technology for IT engineers' labour automatisation
      </p>
    </div>
  )
}
