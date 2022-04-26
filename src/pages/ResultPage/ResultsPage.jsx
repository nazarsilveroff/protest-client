import React from "react";
// import { useNavigate } from "react-router-dom";
import ResDiagram from "../../modules/ResDiagram/ResDiagram";
import s from "./ResultPage.module.css";
import cat from "../../images/oops.png";
// import cat1 from "../../images/cat-desktop.png";
// import cat2 from "../../images/hurrah.png";

function ResultsPage(props) {
  // const history = useNavigate();
  // const tryAgain = () => {
  //   history("/test");
  // };

  const raiting = () => {
    const percentValue = 30 / (70 / 100);
    if (percentValue <= 50) {
      return {
        short: "Very bad!",
        full: "You need spend more time for learn materials.",
        // img: "cat",
      };
    }

    if (percentValue > 50 && percentValue <= 80) {
      return {
        short: "Not bad!",
        full: "But you still need to learn some materials.",
        // img: "../../images/cat-mob.png",
      };
    }

    if (percentValue > 80) {
      return {
        short: "Fine!",
        full: "You're awesome! Your result is very good.",
        // img: "../../images/hurrah.jpg",
      };
    }
  };

  return (
    <section className={s.section}>
      <div className={s.resultsContainer}>
        <h2 className={s.results}>Results</h2>
        <p className={s.resultsText}>[ Testing theory_]</p>
      </div>
      <ResDiagram />
      <div className={s.containerResult}>
        <p className={`${s.resText} ${s.resTextBefore}`}>
          Correct answers - <span className={s.result}>9</span>
        </p>
        <p className={s.resText}>
          Total questions - <span className={s.result}>12</span>
        </p>
      </div>
      <div className={s.resultCont}>
        <img className={s.resultImg} src={cat} alt="cat" />
        <h3 className={s.resultContText}>{raiting().short}</h3>
        <p className={s.resultContInfo}>{raiting().full}</p>
        <button
          className={s.resultButton}
          // onClick={tryAgain}
        >
          Try again
        </button>
      </div>
    </section>
  );
}

export default ResultsPage;
