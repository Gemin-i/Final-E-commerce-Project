import { memo } from "react"
import { Outlet } from "react-router-dom"
import styles from "./Layout.module.css"

import Header from "../components/header/Header";


function Layout() {

    
    

    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <Header/>
            </header>
            <main className={styles.main}> 
                <Outlet/> 
            </main>
        </div>
    )
}

export default memo(Layout)