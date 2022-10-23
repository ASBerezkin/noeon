import React, {FC} from "react";
import './Step.styles.scss'

type TStepProps = {
    id: number
    text?: string
    title?: string
    align?: 'start' | 'center' | 'end'
}

export const Step: FC<TStepProps> = ({id, text, title, align = "center"}) => {
    return <div key={id} className={`step step_${align}`}>
        <div className='step__number'>{id}</div>
        <div className={`step__content step__content_${align}`}>
            {title && <span className={`step__title step__title_${align}`}>{title}</span>}
            {text && <p className={`step__text step__text_${align}`}>{text}</p>}
        </div>
    </div>
}