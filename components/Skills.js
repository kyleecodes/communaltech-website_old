import styles from "../styles/Skills.module.css";

function Skills() {
  return (
    <div>
      <div className="text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl text-center">
        <h2 className={styles.line_height}>SKILLS:</h2>
      </div>
      <div
        className={
          "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 my-10 mx-10 lg:mx-40"
        }
      >
        <div className={styles.skills_icon}>
          <h2> html/css/js </h2>
        </div>
        <div className={styles.skills_icon}>
          <h2> tailwindcss </h2>{" "}
        </div>
        <div className={styles.skills_icon}>
          <h2> reactjs/nextjs </h2>
        </div>
        <div className={styles.skills_icon}>
          <h2> git/github </h2>{" "}
        </div>
        <div className={styles.skills_icon}>
          <h2>linux / windows</h2>
        </div>

        <div className={styles.skills_icon}>
          <h2> moderation </h2>
        </div>
        <div className={styles.skills_icon}>
          <h2> technical writing </h2>
        </div>
        <div className={styles.skills_icon}>
          <h2> dApp development </h2>
        </div>
      </div>
    </div>
  );
}

export default Skills;
