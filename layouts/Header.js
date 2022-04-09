import styles from "../styles/Header.module.css";
import Navbar from "../components/NavBar";

function Header() {
  return (
    <div className={styles.header_container}>
      <div className={styles.company_title}>Communal Tech</div>
      <div className={styles.subtitle}> technical community management</div>
      <Navbar />
    </div>
  );
}

export default Header;
