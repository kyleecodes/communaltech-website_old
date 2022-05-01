import Link from "next/link";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar_container}>
       <div className={styles.navlinks_container}>
        <ul>
        <li>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>ABOUT</a>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <a>SERVICES</a>
          </Link>
        </li>
        <li>
          <Link href="/socials">
            <a>SOCIALS</a>
          </Link>
        </li>
        <li>
        <a target="_blank" href="https://blljhazo9cp.typeform.com/to/vOzyqBjF" rel="noopener noreferrer"> CONTACT </a>
        </li>
        </ul>
    </div>
    </div>
  );
}

export default Navbar;
