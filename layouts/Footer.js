import styles from "../styles/Home.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
      <div className="bounce">
        <p>  Communal Tech means Tech for Everyone </p>
    </div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Communal Tech  | 2022{" "}</p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
