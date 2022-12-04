import React, { useState } from "react";
import style from "./Hero.module.scss";
import Image from "next/image";
import heroImageHome from "../../public/images/hero.jpg";
import heroImageContact from "../../public/images/hero2.jpg";
import heroImageCars from "../../public/images/hero3.jpg";
import classNames from "classnames";
import Link from "next/link";

function Hero(props) {
  const { type } = props;

  let page = style.home;

  if (type == "contact") {
    page = style.contact;
  }

  if (type == "cars") {
    page = style.cars;
  }

  const setHeroImage = () => {
    if (type == "contact") {
      return <Image src={heroImageContact} alt="hero" priority />;
    }
    if (type == "cars") {
      return <Image src={heroImageCars} alt="hero" priority />;
    }
    return <Image src={heroImageHome} alt="hero" priority />;
  };

  const setHeroContent = () => {
    if (type == "contact") {
      return (
        <>
          <div className={style.title}>Kontakt</div>
          <div className={style.subtitle}>
            <span>
              <span>A</span>SP
            </span>{" "}
            AUTO PŮJČOVNA
          </div>
        </>
      );
    }

    if (type == "cars") {
      return (
        <>
          <div className={style.title}>
            Naše <span>Auta</span>
          </div>
          <div className={style.subtitle}>
            Vozy, které jsou vhodné nejen do přírody, ale také do města.
          </div>
        </>
      );
    }

    return (
      <>
        <div className={style.title}>Půjč si auto!</div>
        <div className={style.subtitle}>V Praze, Mělníku a okolí.</div>
        <div className={style.button}>
          <Link href={"/kontakt/"}>
            <button>CHCI AUTO</button>
          </Link>
        </div>
      </>
    );
  };

  return (
    <div className={classNames(style.container, page)}>
      <div className={style.imageMobile}>{setHeroImage()}</div>
      <div className={style.wrapper}>
        <div className={style.row}>
          <div className={style.box}>
            <div className={style.boxWrapper}>{setHeroContent()}</div>
          </div>
          <div className={style.column}>
            <div className={style.image}>{setHeroImage()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
