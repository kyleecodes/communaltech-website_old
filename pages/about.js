import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.landing_container}>
      <Head>
        <title>Communal Tech</title>
        <meta name="description" content="Website for Communal Tech" />
        <meta name="keywords" content="Developer Relations, Technical, Content Creation, Community Management "></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main
        className={
          "text-center px-2 md:px-14 lg:px-40 mx-4 md:mx-6 lg:mx-20 2xl:mx-40 my-10 lg:my-20"
        }
      >
        <div className={styles.main_margin}>
          <div
            className={
              "text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl mb-1 md:mb-2"
            }
          >
            <h2 className={styles.line_height}>What is Communal Tech?</h2>{" "}
          </div>

          <p
            className={
              "font-robotoMono font-bold text-base md:text-sm lg:text-md xl:text-lg 2xl:text-xl mb-10"
            }
          >
            Communal Tech = Tech for Everyone 🌈
          </p>

          <p
            className={
              "font-robotoMono text-base md:text-sm lg:text-md xl:text-lg 2xl:text-xl mb-10"
            }
          >
            Communal Tech is a business focusing on developer relations,
            technical community, and technical content creation. 👋 Stay tuned
            for a list of services!
          </p>

          <p className={styles.centered_link}>
            {" "}
            Learn more about Dev Relations, Technical Content Creation &
            Community ⬇️
          </p>
          <button className={styles.primary_button}>
            <a
              target="_blank"
              href="https://communaltech.notion.site/communaltech/Technical-Community-Management-Resources-1dcc6e2bfef3408fba7c502ceee1aad7"
              rel="noopener noreferrer"
            >
              {" "}
              Resources{" "}
            </a>
          </button>

          {/* Saving for later  */}
          {/* <button className={styles.primary_button}>
            <a
              target="_blank"
              href="https://blljhazo9cp.typeform.com/to/vOzyqBjF"
              rel="noopener noreferrer"
            >
              {" "}
              Let's Connect!{" "}
            </a>
          </button> */}

          <div className={styles.twitter_link}>
            <a href="https://twitter.com/communal_tech">
              ➡️ Follow Communal Tech on Twitter! <br />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
