import React, { FC } from 'react'
import './FullBanner.styles.scss'
import banner from './fullBanner.png'

type TFullBannerProps = {
    src: string
}
export const FullBanner: FC<TFullBannerProps> = ({src}) => {
    return <div className="fullBanner">
        <img src={src} alt='Tokyo' />
    </div>
}