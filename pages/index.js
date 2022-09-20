import Head from "next/head";
import styles from "../styles/Home.module.css";
import About from "./about";
import Socials from "./socials";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Communal Tech</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      <section>
        <main
          className={
            "pr-0 md:pr-24 lg:pr-36 xl:pr-56 ml-4 md:ml-6 lg:ml-20 2xl:ml-40 mr-1 md:mr-10 lg:mr-40 2xl:mr-60 my-4 md:my-6 lg:my-10 2xl:my-20"
          }
        >
          <div
            className={
              "text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl mb-1 md:mb-2"
            }
          >
            <h2 className={styles.line_height}>
              Greetings,
              <br />
              I'm Kylee 👋
            </h2>{" "}
          </div>
          <p
            className={
              "font-robotoMono text-base md:text-sm lg:text-md xl:text-lg 2xl:text-xl pr-0.5 md:pr-4 xl:pr-44 2xl:pr-64 mb-10"
            }
          >
            I'm a computer science nerd working in developer relations. I enjoy
            enabling developers to build cool stuff and breaking down abstract
            concepts into easy-to-understand content + workflows. <br />
            <br />
            <a
              className="font-bold text-sky-400"
              href="https://twitter.com/kyleecodes"
            >
              ➡️ Follow Communal Tech on Twitter! <br />
            </a>
          </p>
          <button className={styles.primary_button}>
            <a href="https://www.notion.so/communaltech/Kylee-Fields-Communal-Tech-0730bd5aa6a24f6d9e91b895e56cee48">
              {" "}
              View Projects{" "}
            </a>
          </button>
        </main>
      </section>

      <section id={"about_section"}>
        <About />
      </section>

      <section id={"socials_section"}>
        <Socials />
      </section>
    </div>
  );
}
