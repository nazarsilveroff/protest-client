import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import ResDiagram from "../../modules/ResDiagram/ResDiagram";
import s from "./ResultPage.module.css";
import catOops from "../../images/cat-oops.png";
import catHeart from "../../images/cat-heart.png";
import catHurrah from "../../images/cat-hurrah.png";
import {useSelector} from "react-redux";
import {getAnswers, getTypeOfTest} from "../../redux/test/test-selectors";
import testApi from "../../redux/test/test-api";
import Loader from "../../modules/Loader";
import Toastify from "../../modules/Tostify";

function ResultsPage(props) {
    const history = useNavigate();

    const typeOfTest = useSelector(getTypeOfTest);
    const answers = useSelector(getAnswers);

    const [reaction, setReaction] = useState();

    const [results, setResults] = useState({
        result: {},
        error: "",
        loading: false,
    });

    useEffect(() => {
        async function gettingResults(type, someAnswers) {
            setResults((prevState) => ({
                ...prevState,
                loading: true,
                error: "",
            }));
            try {
                const data = await testApi.getResults(type, someAnswers);
                setResults((prevState) => ({
                    ...prevState,
                    loading: false,
                    result: data,
                }));

                const {correct} = data;
                raiting(correct);
            } catch (err) {
                setResults((prevState) => ({
                    ...prevState,
                    loading: false,
                    error: err.response.data,
                }));
            }
        }

        typeOfTest && answers && gettingResults(typeOfTest, answers);
    }, [typeOfTest, answers]);

    const tryAgain = () => {
        history("/test");
    };

    function raiting(correctValue) {
        const percentValue = (correctValue / 12) * 100;

        if (percentValue <= 50) {
            return setReaction({
                short: "Very bad!",
                full: "You need spend more time for learn materials.",
                img: catOops,
            });
        }
        if (percentValue >= 50 && percentValue <= 80) {
            return setReaction({
                short: "Not bad!",
                full: "But you still need to learn some materials.",
                img: catHeart,
            });
        }
        if (percentValue > 80) {
            return setReaction({
                short: "Fine!",
                full: "You're awesome! Your result is very good.",
                img: catHurrah,
            });
        }
    }

    const {result: {correct}, error} = results;

    return (
        <>
            {error && <Toastify errFromParentState={error}/>}
            <main className={s.section}>
                {results.loading && <Loader/>}
                <h2 className={s.results}>Results</h2>
                <p className={s.resultsText}>
                    {typeOfTest === "tech" ? "QA technical training" : "Testing theory"}
                </p>
                <ResDiagram results={results.result}/>
                <div className={s.containerResult}>
                    <p className={`${s.resText} ${s.resTextBefore}`}>
                        Correct answers - <span className={s.result}>{correct}</span>
                    </p>
                    <p className={s.resText}>
                        Total questions - <span className={s.result}>12</span>
                    </p>
                </div>
                {reaction && (
                    <div className={s.resultCont}>
                        <img className={s.resultImg} src={reaction.img} alt="cat"/>
                        <h3 className={s.resultContText}>{reaction.short}</h3>
                        <p className={s.resultContInfo}>{reaction.full}</p>
                        <button className={s.resultButton} onClick={tryAgain}>
                            Try again
                        </button>
                    </div>
                )}
            </main>
        </>
    );
}

export default ResultsPage;
