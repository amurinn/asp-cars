import React from "react";
import style from "./Cars.module.scss";
import Image from "next/image";
import passatBrown from "../../public/images/passat_brown.jpg";
import passatGrey from "../../public/images/passat_grey.jpg";
import fabiaWhite from "../../public/images/fabia_white.jpg";
import Link from "next/link";

function Cars() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.heading}>
          Naše <span>auta</span>
        </div>
        <div className={style.cars}>
          <div data-aos="fade-right" className={style.car}>
            <Link href={"/auta"}>
              <div className={style.image}>
                <Image src={passatBrown} alt="passat brown" />
              </div>
            </Link>
            <div className={style.title}>VOLKSWAGEN PASSAT</div>
            <div className={style.subtitle}>VARIANT</div>
            <div className={style.price}>
              <Link href={"/auta"}>
                <button>od 900 Kč</button>
              </Link>
            </div>
          </div>

          <div data-aos="fade-up" className={`${style.car} ${style.middle}`}>
            <Link href={"/auta"}>
              <div className={style.image}>
                <Image src={fabiaWhite} alt="fabia white" />
              </div>
            </Link>
            <div className={style.title}>FABIA III</div>
            <div className={style.price}>
              <Link href={"/auta"}>
                <button>od 500 Kč</button>
              </Link>
            </div>
          </div>

          <div data-aos="fade-left" className={style.car}>
            <Link href={"/auta"}>
              <div className={style.image}>
                <Image src={passatGrey} alt="passat grey" />
              </div>
            </Link>
            <div className={style.title}>VOLKSWAGEN PASSAT</div>
            <div className={style.subtitle}>VARIANT</div>
            <div className={style.price}>
              <Link href={"/auta"}>
                <button>od 900 Kč</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cars;
