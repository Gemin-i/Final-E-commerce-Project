import { Link, Routes } from "react-router-dom"
import { memo } from "react"
import { useContext } from "react";
import { UserContext } from "../../context/context.jsx";
import { useLocation } from "react-router-dom";
import { useState } from "react";

import Button from "../button/Button"
import Logo from "./headerComponents/logo/Logo.jsx";
import Pages from "./headerComponents/pages/Pages.jsx";

import styles from "./Header.module.css"

import TopHeader from "./headerComponents/topHeader/TopHeader.jsx";
import Search from "./headerComponents/search/Search.jsx";
import WishlistButton from "./headerComponents/wishlistButton/WishlistButton.jsx";
import CartButton from "./headerComponents/cartRoute/CartButton.jsx";
import ProfileButton from "./headerComponents/profile/ProfileButton.jsx";


function Header() {

    return (
      <div>
        <TopHeader/>
        <div className={styles.headerDiv}>
          <nav className={styles.nav}>
            <div className={styles.textRoutes}>
              <Logo />
              <Pages />
            </div>
            <div className={styles.searchIconRoutes}>
              <Search />
              <div className={styles.iconsDiv}>
                <WishlistButton />
                <CartButton />
                <ProfileButton />
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
}

export default memo(Header);