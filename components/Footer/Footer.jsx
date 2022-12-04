import React, { useState } from "react";
import style from "./Footer.module.scss";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import facebook from "../../public/images/facebook.svg";
import instagram from "../../public/images/instagram.svg";
import phone from "../../public/images/phone.svg";
import mail from "../../public/images/mail.svg";
import maps from "../../public/images/maps.svg";
import classNames from "classnames";
import Link from "next/link";

function Footer(props) {
  return (
    <div
      className={classNames(
        style.container,
        props.page == "contact" && style.darker,
        props.page == "cars" && style.darker
      )}
    >
      <div className={style.wrapper}>
        <div className={style.top}>
          <Image src={logo} alt="logo" />
        </div>
        <h3>KONTAKT</h3>
        <div className={style.bottom}>
          <div className={style.column}>
            <div className={style.contact}>
              +420 <span>605 398 869</span>
              <br />
              asppujcovna@gmail.com
            </div>
            <div className={style.address}>
              Nebeského 2876, <br />
              Mělník, 276 01
            </div>
          </div>
          <div className={`${style.column} ${style.icons}`}>
            <div className={style.socials}>
              <a href="https://www.facebook.com/ASPautopujcovna">
                <Image src={facebook} alt="facebook" />
              </a>
              <a href="https://www.instagram.com/aspautopujcovna/">
                <Image src={instagram} alt="instagram" />
              </a>
            </div>
            <div className={style.socials}>
              <a href="tel:+420605398869">
                <Image src={phone} alt="phone" />
              </a>
              <a href="mailto:asppujcovna@gmail.com">
                <Image src={mail} alt="mail" />
              </a>
              <Link href={"/kontakt"}>
                <Image src={maps} alt="maps" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
