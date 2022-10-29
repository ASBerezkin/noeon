import React from 'react'
import './Logo.styles.scss'
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <>
      <p className='menu__content'>
        Technology for IT engineers' labour automatisation
      </p>
      <Link to='/' className='logo-link'>
        <div className='logo'>
          <div className='logo-noeon'>NOEON</div>
          <br />
          <div className='logo-research'>research</div>
        </div>
      </Link>
    </>
  )
}
