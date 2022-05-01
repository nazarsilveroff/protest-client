import React from "react";
import s from "./MaterialsPage.module.css";

function MaterialsPage(props) {
  return (
    <main className={s.section}>
      <div className={s.container}>
        <h2 className={s.materialsText}>Useful literature</h2>
        <ol className={s.materialsList}>
          <li className={s.materialsItem}>Testing dot.com Savin.</li>
          <li className={s.materialsItem}>
            A mental hospital in the hands of patients.
          </li>
          <li className={s.materialsItem}>Scrum. J. Sutherland.</li>
        </ol>
        <h2 className={s.materialsText}>Useful resources</h2>
        <ol className={s.materialsList}>
          <li className={s.materialsItem}>
            <a
              className={s.materialsLink}
              target="blank"
              href="https://dou.ua/"
            >
              dou.ua
            </a>
          </li>
          <li className={s.materialsItem}>
            <a
              className={s.materialsLink}
              target="blank"
              href="https://habr.com/"
            >
              Habr
            </a>
          </li>
          <li className={s.materialsItem}>
            <a
              className={s.materialsLink}
              target="blank"
              href="https://www.facebook.com/UkraineQACommunity/"
            >
              facebook.com/QA
            </a>
          </li>
          <li className={s.materialsItem}>
            <a
              className={s.materialsLink}
              target="blank"
              href="https://goit.ua/"
            >
              goit.ua
            </a>
          </li>
        </ol>
      </div>
    </main>
  );
}

export default MaterialsPage;
