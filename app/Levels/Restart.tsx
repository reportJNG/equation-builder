import styles from "./Restart.module.css";

interface Restartprops {
  gohome: () => void;
  restart: () => void;
}
export default function Restart({ gohome, restart }: Restartprops) {
  return (
    <div className={styles.container}>
      {/**overlaved background */}
      <div className={styles.box}>
        <div className={styles.titlesbox}>
          <h2 className={styles.title}>Wrong Equation</h2>
          <div className={styles.commentbox}>
            <p className={styles.comment}>
              The numbers didn’t add up this time. Think again and retry ❓
            </p>{" "}
          </div>
        </div>
        <div className={styles.actionhanlders}>
          <button
            className={styles.button}
            aria-label="Home"
            title="Home"
            onClick={gohome}
          >
            Home
          </button>
          <button
            className={styles.button}
            aria-label="Restart"
            title="Restart"
            onClick={restart}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}
