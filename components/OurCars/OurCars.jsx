import React from "react";
import style from "./OurCars.module.scss";
import Image from "next/image";
import car1 from "../../public/images/passat_brown.jpg";
import car2 from "../../public/images/fabia_white.jpg";
import car3 from "../../public/images/passat_grey.jpg";
import classNames from "classnames";

function OurCars() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.row}>
          <div
            data-aos="fade-right"
            className={classNames(style.col, style.image)}
          >
            <Image src={car1} alt="car" />
          </div>
          <div
            data-aos="fade-left"
            className={classNames(style.col, style.content)}
          >
            <div className={style.title}>
              <div>
                VOLKSWAGEN PASSAT&nbsp;<span>VARIANT</span>
              </div>
            </div>
            <div className={style.subtitle}>
              Volkswagen Passat Variant 2.0 TDI je skvělým společníkem na dlouhé
              trasy.
            </div>
            <div className={style.price}>
              <a href="mailto:asppujcovna@gmail.com?subject=Volkswagen Passat Variant" target="_blank" rel="noreferrer">
                <button>CHCI TOHLE AUTO!</button>
              </a>
            </div>
          </div>
        </div>

        <div className={classNames(style.row, style.fabia)}>
          <div
            data-aos="fade-left"
            className={classNames(style.col, style.image)}
          >
            <Image src={car2} alt="car" />
          </div>
          <div
            data-aos="fade-right"
            className={classNames(style.col, style.content)}
          >
            <div className={style.title}>
              <div>ŠKODA FABIA III</div>
            </div>
            <div className={style.subtitle}>
              Škoda Fabie III je elegantní a vhodná pro cestovaní do města.
            </div>
            <div className={style.price}>
              <a href="mailto:asppujcovna@gmail.com?subject=Škoda Fabia III" target="_blank" rel="noreferrer">
                <button>CHCI TOHLE AUTO!</button>
              </a>
            </div>
          </div>
        </div>

        <div className={style.row}>
          <div
            data-aos="fade-right"
            className={classNames(style.col, style.image)}
          >
            <Image src={car3} alt="car" />
          </div>
          <div
            data-aos="fade-left"
            className={classNames(style.col, style.content)}
          >
            <div className={style.title}>
              <div>
                VOLKSWAGEN PASSAT&nbsp;<span>VARIANT</span>
              </div>
            </div>
            <div className={style.subtitle}>
              Volkswagen Passat Variant 2.0 TDI je perfektní volbou pro služební
              cestu.
            </div>
            <div className={style.price}>
              <a href="mailto:asppujcovna@gmail.com?subject=Volkswagen Passat Variant" target="_blank" rel="noreferrer">
                <button>CHCI TOHLE AUTO!</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCars;
