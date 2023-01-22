import React, { useState } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'

export default function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false);

  console.log(menuOpen)
  const menuToggleHandler = () => setMenuOpen(!menuOpen)
    
  return (
    <div className={styles.header}>
    
      <Link className={styles.header__logo} href="/">
        <p>pawelrybka.com</p>
      </Link>
      
      <ul className={`${styles.menu} ${menuOpen ? styles.isMenu : ''}`}>
        
        <Link className={styles.header__nav} href="/about">
          <p>About</p>
        </Link>
        

        <Link className={styles.header__nav} href="/contact">
          <p>Contact</p>
        </Link>
        
        <Link className={styles.header__nav} href="/https://github.com/pawelrybka">
          <p>Github</p>
        </Link>
        
      </ul>
      <button className={styles.hamburger} onClick={menuToggleHandler}>
        <div className={`${styles.line} ${menuOpen ? styles.active : ''}`}></div>
        <div className={`${styles.line} ${menuOpen ? styles.active : ''}`}></div>
      </button>
    </div>
  )
}


