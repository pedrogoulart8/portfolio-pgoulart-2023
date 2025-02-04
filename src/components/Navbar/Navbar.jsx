import React from 'react'
import { useState } from 'react'
import { getImageUrl } from '../../utils'

import styles from "./Navbar.module.css"

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (

        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Início</a>

            <div className={styles.menu}>

                <img
                    className={styles.menuBtn} 
                    src={
                        menuOpen 
                        ? getImageUrl("nav/closeIcon.png") 
                        : getImageUrl("nav/menuIcon.png")
                    }
                    onClick={() => setMenuOpen(!menuOpen)}
                />

                <ul
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#about">Sobre</a>
                    </li>
                    <li>
                        <a href="#experiencias">Experiências</a>
                    </li>
                    <li>
                        <a href="#projetos">Projetos</a>
                    </li>
                    <li>
                        <a href="#contato">Contato</a>
                    </li>
                </ul>
            </div>

        </nav>


    )
}

export default Navbar