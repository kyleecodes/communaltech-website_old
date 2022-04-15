import styles from "../styles/Header.module.css";
import Navbar from "../components/NavBar";

import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
  ssr: false,
});

function Header() {
  return (
    <div className={styles.header_container}>
          <ThemeToggle />
      <div className={styles.company_title}>Communal Tech</div>
      <div className={styles.subtitle}> technical community management</div>
      <Navbar />
    </div>
  );
}

export default Header;
