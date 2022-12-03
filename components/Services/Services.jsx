import React, { useEffect } from "react";
import style from "./Services.module.scss";
import Image from "next/image";
import carBack from "../../public/images/hero3.jpg";
import carInterior from "../../public/images/hero2.jpg";
import listItem1 from "../../public/images/24.svg";
import listItem2 from "../../public/images/clean.svg";
import listItem3 from "../../public/images/gas.svg";

function Services() {

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.titleWrapper}>
          <div data-aos="fade-right" className={style.image}>
            <Image src={carBack} alt="car" />
          </div>
          <div className={style.column}>
            <div data-aos="fade-left" className={style.title}>
              NAŠE&nbsp;<span>SLUŽBY</span>
            </div>
          </div>
        </div>
        <div className={style.row}>
          <div data-aos="fade-right" className={style.column}>
            <div className={style.description}>
              Poskytujeme půjčení aut na krátkodobý i dlouhodobý pronájem!
              Přistavení a vyzvednutí vozidla máme v ceně našich balíčků.
            </div>
            <div className={style.list}>
              <div className={style.listItem}>
                <Image src={listItem1} alt="list" />
                <span>Přistavení auta kdykoliv, kamkoliv a kdekoliv.</span>
              </div>
              <div className={style.listItem}>
                <Image src={listItem2} alt="list" />
                <span>O svá vozidla neustále pečujeme.</span>
              </div>
              <div className={style.listItem}>
                <Image className={style.shit} src={listItem3} alt="list" />
                <span>Vždy plně natankované pro vaši jízdu.</span>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className={style.image}>
            <Image src={carInterior} alt="car" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
