import React, { useState } from "react"
import style from "./Header.module.scss"
import Image from "next/image"
import classNames from 'classnames';
import { RxHamburgerMenu } from "react-icons/rx"
import logo from "../../public/images/logo.svg"
import Link from 'next/link'

function Header(props) {

  const [menuToggle, setMenuToggle] = useState(false)

  console.log(props.page)

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
            <Link href="/" className={classNames(props.page=='home' && style.active)}>
                <li>O NÁS</li>
            </Link>
            <Link href="/auta" className={classNames(props.page=='cars' && style.active)}>
                <li>NAŠE AUTA</li>
            </Link>
            <Link href="/kontakt" className={classNames(props.page=='contact' && style.active)}>
                <li>KONTAKT</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className={classNames(style.mobileMenu, menuToggle && style.open)}>
        <ul>
            <Link href="/" className={classNames(props.page=='home' && style.active)}>
                <li>O NÁS</li>
            </Link>
            <Link href="/auta" className={classNames(props.page=='cars' && style.active)}>
                <li>NAŠE AUTA</li>
            </Link>
            <Link href="/kontakt" className={classNames(props.page=='contact' && style.active)}>
                <li>KONTAKT</li>
            </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header
