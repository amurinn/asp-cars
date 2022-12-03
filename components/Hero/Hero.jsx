import React, { useState } from "react"
import style from "./Hero.module.scss"
import Image from "next/image"
import heroImage from "../../public/images/hero.jpg"

function Hero() {
  return (
    <div className={style.container}>
      <div className={style.imageMobile}>
        <Image src={heroImage} alt="hero" priority />
      </div>
      <div className={style.wrapper}>
        <div className={style.row}>
            <div className={style.box}>
                <div className={style.boxWrapper}>
                    <div className={style.title}>
                        Půjč si auto!
                    </div>
                    <div className={style.subtitle}>
                        V Praze, Mělníku a okolí.
                    </div>
                    <div className={style.button}>
                        <a href="/contact/"><button>CHCI AUTO</button></a>
                    </div>
                </div>
            </div>
            <div className={style.column}>
                <div className={style.image}>
                    <Image src={heroImage} alt="hero" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
