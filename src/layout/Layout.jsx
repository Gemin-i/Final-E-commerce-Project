import { memo } from "react"
import { Outlet } from "react-router-dom"
import styles from "./Layout.module.css"

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";


function Layout() {

    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <Header />
            </header>
            <main className={styles.main}> 
                <Outlet /> 
            </main>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}

export default memo(Layout)