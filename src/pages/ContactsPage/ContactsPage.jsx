import React from "react";
import { useState } from "react";
import s from "./Contacts.module.css";
import { contacts } from "./Contacts.js";
import Icons from "../../images/icons.svg";

function ContactsPage(props) {
  const [card] = useState(contacts);
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.contactsTeam}>Out team</h2>
        <ul className={s.contactsList}>
          {card.map(({ id, name, position, image, github }) => (
            <li className={s.contactsItem} key={id}>
              <img className={s.contactsImg} src={image} alt="" />
              <div className={s.contactsCard}>
                <h3 className={s.contactsName}>{name}</h3>
                <p className={s.contactsPosition}>{position}</p>
                <a className={s.contactsLink} href={github} target="blank">
                  <svg className={s.contactsSVG} width="30" height="30">
                    <use xlinkHref={`${Icons}#icon-github`}></use>
                  </svg>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ContactsPage;
