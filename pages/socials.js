import Head from "next/head";
import styles from "../styles/Home.module.css";
import SocialLink from "../components/SocialLinks";

export default function Socials() {
  return (
    <div className={styles.landing_container}>
      <Head>
        <title>Communal Tech</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div>
            <SocialLink />
        </div>
      </main>
    </div>
  );
}