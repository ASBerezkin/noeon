import React from 'react'
import './FullBanner.styles.scss'
import banner from './fullBanner.png'

export const FullBanner = () => {
    return <div className="fullBanner">
        <img src={banner} alt='Tokyo' />
    </div>
}