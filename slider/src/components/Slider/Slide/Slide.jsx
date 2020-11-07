import React from 'react';
import s from './Slide.module.css'

let Slide = (props) => {

    return (
        <div className={s.slide}>
            <div className={s.slide_text}>{props.text}</div>
            <img className={s.slide_img} src={props.src} alt="slide"/>
        </div>
    )
}

export default Slide
