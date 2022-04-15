import styles from "../styles/Home.module.css";
import { PopupButton } from "@typeform/embed-react";

function ContactButton() {
  return (
    <div className={styles.landing_button}>
      <PopupButton
        id="vOzyqBjF"
        className={styles.glimmer_animation}
      >
    Let's Connect!
      </PopupButton>
      {/* <button className={styles.landing_button}>Let's Connect!</button> */}
    </div>
  );
}

export default ContactButton;
