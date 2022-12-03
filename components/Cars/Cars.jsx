import React from 'react'
import style from './Cars.module.scss'
import Image from "next/image"
import passatBrown from "../../public/images/passat_brown.jpg"
import passatGrey from "../../public/images/passat_grey.jpg"
import fabiaWhite from "../../public/images/fabia_white.jpg"

function Cars() {
  return (
    <div className={style.container}>
        <div className={style.wrapper}>
            <div className={style.heading}>
                Naše <span>auta</span>
            </div>
            <div className={style.cars}>
                <div data-aos="fade-right" className={style.car}>
                    <a href='#'>
                        <div className={style.image}>
                            <Image src={passatBrown} alt="passat brown" />
                        </div>
                    </a>
                    <div className={style.title}>
                        VOLKSWAGEN PASSAT
                    </div>
                    <div className={style.subtitle}>
                        VARIANT
                    </div>
                    <div className={style.price}>
                        <a><button>od 900 Kč</button></a>
                    </div>
                </div>

                <div data-aos="fade-up" className={`${style.car} ${style.middle}`}>
                    <a href='#'>
                        <div className={style.image}>
                            <Image src={fabiaWhite} alt="fabia white" />
                        </div>
                    </a>
                    <div className={style.title}>
                        FABIA III
                    </div>
                    <div className={style.price}>
                        <a><button>od 500 Kč</button></a>
                    </div>
                </div>

                <div data-aos="fade-left" className={style.car}>
                    <a href='#'>
                        <div className={style.image}>
                            <Image src={passatGrey} alt="passat grey" />
                        </div>
                    </a>
                    <div className={style.title}>
                        VOLKSWAGEN PASSAT
                    </div>
                    <div className={style.subtitle}>
                        VARIANT
                    </div>
                    <div className={style.price}>
                        <a><button>od 900 Kč</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cars