import styles from "./NameOverlay.module.css";

export default function NameOverlay() {
  return (
    <div className={styles.container}>
      {" "}
      {/**overlaved */}
      <div className={styles.top}>
        <div className={styles.titletext}>
          <h3></h3>
        </div>
        <div className={styles.commenteretxt}>
          <p></p>
        </div>
      </div>
      <div className={styles.box}></div>
    </div>
  );
}
