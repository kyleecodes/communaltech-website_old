
import styles from "../styles/Socials.module.css";

function SocialLink() {
  return (
    <div className={styles.socials_container}>
      <div className={styles.right_link_container}>
        <a target="_blank" href="https://blljhazo9cp.typeform.com/to/vOzyqBjF" rel="noopener noreferrer">
          <h2> contact form </h2>
        </a>
      </div>
      <div className={styles.left_link_container}>
        <a href="https://twitter.com/communal_tech">
          <h2> twitter </h2>{" "}
        </a>
      </div>
      <div className={styles.right_link_container}>
        <a href="https://kyleecodes.hashnode.dev/">
          <h2> blog </h2>
        </a>
      </div>
      <div className={styles.left_link_container}>
        <a href="https://www.kylee.codes/">
          <h2> kylee's website </h2>{" "}
        </a>
      </div>
      <div className={styles.right_link_container}>
        <a href="https://github.com/kyleecodes">
          <h2> github </h2>
        </a>
      </div>

      <div className={styles.left_link_container}>
        <a href="https://www.linkedin.com/in/kyleecodes/">
          <h2> linkedIn </h2>
        </a>
      </div>
    </div>
  );
}

export default SocialLink;