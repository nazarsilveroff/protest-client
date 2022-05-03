import React, {useRef, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./TestSlider.module.css"
import Icons from "../../images/icons.svg";


function TestSlider({questions, callback, completeTest}) {

    const [answer, setAnswer] = useState()

    const [questionNumber, setQuestionNumber] = useState(1);

    const sliderRef = useRef(null)


    const next = () => {
        callback(answer)
        if (questionNumber <= 12) {
            setQuestionNumber(questionNumber + 1);
            sliderRef.current.slickNext()
        } else {
            completeTest()
        }

    };

    const prev = () => {
        if (questionNumber > 1) {
            setQuestionNumber(questionNumber - 1);
            sliderRef.current.slickPrev()
        }
    };

    const onChangeHandler = (e) => {
        const {value} = e.target
        setAnswer(JSON.parse(value))
    }

    const settings = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        arrows: false
    };

    return (
        <>
            <Slider ref={sliderRef} {...settings}>
                {questions?.map(({id, question, answers}) => (
                    <div key={id} className={s.containerTest}>
                        <p className={s.testQuestion}>
                            question <span className={s.testNumber}>
                            {questionNumber > 12 ? 12 : questionNumber}
                        </span> /
                            12
                        </p>
                        <h2 className={s.testText}>
                            {question}?
                        </h2>
                        <form onChange={onChangeHandler}>
                            {answers.map(answer => (
                                <label key={answer} className={s.testLabel}>
                                    <input className={s.testInput}
                                           value={JSON.stringify({questionId: id, answer})}
                                           type="radio"
                                           name="answer"/>
                                    <p className={s.testAnswer}>
                                        {answer}
                                    </p>
                                </label>
                            ))}
                        </form>
                    </div>
                ))}
            </Slider>
            <div className={s.containerButton}>
                <button
                    type="button"
                    className={s.testButton}
                    onClick={prev}
                >
                    <svg className={s.testArrow} width="24px" height="16">
                        <use xlinkHref={`${Icons}#icon-arrow-left`}></use>
                    </svg>
                    <span className={s.buttonText}>Previous question</span>
                </button>
                <button
                    type="button"
                    className={s.testButton}
                    onClick={next}
                >
                    <span className={s.buttonText}>
                        {questionNumber === 13 ? 'End' : 'Next question'}
                    </span>
                    <svg className={s.testArrow} width="24px" height="16">
                        <use xlinkHref={`${Icons}#icon-arrow-right`}></use>
                    </svg>
                </button>
            </div>
        </>
    )
}

export default TestSlider;