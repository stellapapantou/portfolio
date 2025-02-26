//TODO rewrite

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../../styles/Navbar.module.scss"
import { useRouter } from "next/router";
import { BsBrightnessHigh } from "@react-icons/all-files/bs/BsBrightnessHigh"
import { RiMoonClearLine } from "@react-icons/all-files/ri/RiMoonClearLine"
import { useTheme } from "next-themes";

export default function Navbar(){ 
    const [clientWindowHeight, setClientWindowHeight] = useState(0);
    const [prevYPos, setPrevYPos] = useState(0)
    const [isScrolledDown, setScrolledDown] = useState(false)
    const [hamburgerState, setHamburger] = useState(false)

    const toggleHamburgerActive = () => setHamburger(!hamburgerState)

    useEffect(() => {
        window.addEventListener("scroll", throttle(handleScroll,50))
    })

    function throttle(fn, wait) {
        let time = Date.now();
        return function() {
          if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
          }
        }
    }

    const handleScroll = () => setClientWindowHeight(window.scrollY);

    useEffect(() => {
        setScrolledDown(clientWindowHeight > prevYPos)
        setPrevYPos(clientWindowHeight)
    }, [clientWindowHeight]);

    const { theme, setTheme } = useTheme()
    const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light')

    const navigations = [
        {label: "about", url: "/about"},
        {label: "services", url: "/#services"},
        {label: "contact", url: "/#contact"},
    ]
    const router = useRouter()
    const isActive = (url, pathname) => pathname === url ? `${styles["nav-link"]} ${styles["active"]}` : styles["nav-link"]

    return(
        <nav className={`${styles["navbar"]} backdrop-blur-md`}>
            <div className="container mx-auto flex justify-between items-center py-4">
                <div className={styles["nav-left"]}>
                    <Link href="/" className="transition-all duration-300 text-display-xs font-semibold tracking-tighter hover:tracking-tight text-primary-600 dark:text-blue-200">Stella.Papantou</Link>
                </div>
                <div className={hamburgerState ? `${styles["nav-list"]} ${styles["active"]}` : styles["nav-list"]}>
                    <div className={styles["nav-menu"]}>
                        {navigations.map((navigation, i) => (
                          <Link className={`${isActive(navigation.url, router.pathname)} text-black dark:text-white text-display-xs`} href={navigation.url} key={i} onClick={() => {
                            if (hamburgerState) setHamburger(false);}}>{navigation.label}</Link>
                        ))}

                        <div className="toggle-btn w-16 h-8 py-1 px-2 bg-blue-50 dark:bg-gray-700 rounded-full cursor-pointer" onClick={() => toggleTheme()}>
                            <div className="toggle-btn-circle w-6 h-6 flex justify-center items-center bg-blue-500 dark:bg-blue-200 rounded-full transition-transform ease-in-out duration-500 dark:translate-x-full">
                                {theme === 'light' ? <BsBrightnessHigh className="text-white"/> : <RiMoonClearLine className="text-black"/>}
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className={`${hamburgerState ? `${styles["hamburger-btn"]} ${styles["active"]}` : styles["hamburger-btn"]}`} onClick={() => toggleHamburgerActive()}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </nav>
    )
}
