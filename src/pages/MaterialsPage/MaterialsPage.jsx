import React from "react";
import s from "./MaterialsPage.module.css";

function MaterialsPage(props) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.materialsText}>Useful literature</h2>
        <ol className={s.materialsList}>
          <li className={s.materialsItem}>1. Testing dot.com Savin.</li>
          <li className={s.materialsItem}>
            2. A mental hospital in the hands of patients.
          </li>
          <li className={s.materialsItem}>3. Scrum. J. Sutherland.</li>
        </ol>
        <h2 className={s.materialsText}>Useful resources</h2>
        <ol className={s.materialsList}>
          <li className={s.materialsItem}>
            <a
              className={s.materialsLink}
              target="blank"
              href="https://dou.ua/"
            >
              1. dou.ua
            </a>
          </li>
          <li className={s.materialsItem}>
            <a
              className={s.materialsLink}
              target="blank"
              href="https://habr.com/"
            >
              2. Habr
            </a>
          </li>
          <li className={s.materialsItem}>
            <a
              className={s.materialsLink}
              target="blank"
              href="https://www.facebook.com/UkraineQACommunity/"
            >
              3. facebook.com/QA
            </a>
          </li>
          <li className={s.materialsItem}>
            <a
              className={s.materialsLink}
              target="blank"
              href="https://goit.ua/"
            >
              4. goit.ua
            </a>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default MaterialsPage;
