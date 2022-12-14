import React, { FC } from 'react'
import './Step.styles.scss'

export type TStepProps = {
  id: number
  type: 'numbers' | 'icons'
  images?: string[]
  text?: string
  title?: string
  align?: 'start' | 'center' | 'end'
}

export const Step: FC<TStepProps> = ({
  id,
  type = 'numbers',
  images = [],
  text,
  title,
  align = 'center'
}) => {
  return (
    <div key={id} className={`step step_${align}`}>
      {type === 'numbers' && <div className='step__number'>{id}</div>}
      {type === 'icons' && (
        <div className='step__icons'>
          {images?.map(img => (
            <img src={img} alt='icon' />
          ))}
        </div>
      )}
      <div className={`step__content step__content_${align}`}>
        {title && (
          <span className={`step__title step__title_${align}`}>{title}</span>
        )}
        {text && <p className={`step__text step__text_${align}`}>{text}</p>}
      </div>
    </div>
  )
}
