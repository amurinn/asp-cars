import React, { useState } from "react"
import style from "./Header.module.scss"
import Image from "next/image"
import classNames from 'classnames';
import { RxHamburgerMenu } from "react-icons/rx"
import logo from "../../public/images/logo.svg"

function Header() {

  const [menuToggle, setMenuToggle] = useState(false)

  console.log(menuToggle)

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={classNames(style.hamburger, menuToggle && style.activeMenu)} 
            onClick={() => {setMenuToggle(menuToggle => !menuToggle)}}
        >
          <div className={style.icon}></div>
        </div>
        <div className={style.logo}>
          <Image src={logo} alt="logo" />
        </div>
        <div className={style.menu}>
          <ul>
            <a className={style.active} href="#"><li>O NÁS</li></a>
            <a href="#"><li>NAŠE AUTA</li></a>
            <a href="#"><li>KONTAKT</li></a>
          </ul>
        </div>
      </div>
      <div className={classNames(style.mobileMenu, menuToggle && style.open)}>
        <ul>
          <a className={style.active} href="#"><li>O NÁS</li></a>
          <a href="#"><li>NAŠE AUTA</li></a>
          <a href="#"><li>KONTAKT</li></a>
        </ul>
      </div>
    </div>
  )
}

export default Header
