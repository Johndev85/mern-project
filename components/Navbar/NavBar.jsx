import styles from "../Navbar/navbar.module.scss"
import Link from "next/link"

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li>
                    <Link href="/">
                        <a>My Favorities Videos</a>
                    </Link>
                </li>
                <li>
                    <Link href="/videoAdd">
                        <a>Create new videos</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
