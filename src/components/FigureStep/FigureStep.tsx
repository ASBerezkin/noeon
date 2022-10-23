import React, {FC} from 'react'
import "./FigureStep.styles.scss"

export type TFigureStepProps = {
    img: string
    title: string
    text: string
}

export const FigureStep: FC<TFigureStepProps> = ({img, title, text}) => {
    return <div className="figureStep">
        <img src={img} alt="figure" className="figureStep__figure"/>
        <p className="figureStep__title">{title}</p>
        <span className="figureStep__text">{text}</span>
    </div>
}
