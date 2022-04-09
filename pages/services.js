import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContactButton from "../components/ContactButton";

export default function Services() {
  return (
    <div className={styles.landing_container}>
      <Head>
        <title>Communal Tech</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.landing_header}>SERVICES</h2>
        <div className={styles.landing_text}>
          <div className={styles.services_container}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {/* <span className={styles.services_float_left}> */}
              <div className={styles.services}>
                <div className="font-extrabold">BUILD COMMUNITY</div>
                <p>
                  {" "}
                  Optimize your community's experience and boost engagement!
                  This includes investigating your community's current level of
                  engagement, constructing community analytic tools, designing
                  commmunity commitment programs, and more! <br />
                </p>
              </div>
              <div className={styles.services}>
                <div className="font-extrabold">CONTENT CREATION </div>
                <p>
                  {" "}
                  Communicate to your community using content everyone can
                  understand! This includes social media management and
                  moderation, content creation for all major social media
                  platforms, technical writing, infographic design, and more!{" "}
                </p>
              </div>
              {/* </span> */}

              {/* <span className={styles.services_float_right}> */}
              <div className={styles.services}>
                <div className="font-extrabold"> LIVE EVENTS </div>
                <p>
                  {" "}
                  This includes technical communication and public speaking on
                  behalf of your product, for both online and irl events. Such
                  as Twitter Spaces, Youtube videos, demonstrations, and
                  podcasts.
                </p>
              </div>
              <div className={styles.services}>
                <div className="font-extrabold"> TECH SUPPORT </div>

                <p>
                  {" "}
                  Monitor your community's technical support needs, provide resources, delegate accordingly, analyze competitors, and demonstrate your technology to the community!   {" "} 
                  <br/>
                  <br/>
                  Can also provide frontend development support.
                </p>
              </div>
              {/* </span> */}
            </div>
          </div>
          <div className={styles.landing_buttons}>
            <div className={styles.center_button}>
              <ContactButton />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
