import React, {useState} from 'react';
import css  from './Slider.module.css'
import Slide from './Slide/Slide';



const Slider = (props) =>{

    let sliderArr = props.state.map(s => <Slide text={s.text} src={s.src} />);
    
    const [x, setX] = useState(0);

    const goLeft=()=>{
        x === 0 ? setX(-100 * (sliderArr.length - 1) ) : setX(x + 100)
    }   

    const goRight = () => {
        x === (-100 * (sliderArr.length - 1) ) ? setX(0) : setX(x-100)
    }

    return (
        <div className={css.slider}>
            
            {sliderArr.map((item,index) => {
                return(
                    <div key={index} className={css.slide} style={{transform:`translateX(${x}%)`}}>
                        {item}
                    </div>
                )
            })}
            <button id={css.left} className={css.btn_style} 
            onClick={goLeft}>left</button>

            <button id={css.right} className={css.btn_style} 
            onClick={goRight}>right</button>

        </div>
    )
}

export default Slider;