import styles from "./LoseProgress.module.css";
interface LoseProgress {
  quit: () => void;
  close: () => void;
}
export default function LoseProgress({ quit, close }: LoseProgress) {
  return (
    <div className={styles.container}>
      <div className={styles.mid}>
        <div className={styles.signalholdericon}></div>

        <div className={styles.textwarning}>
          <h2 className={styles.text}>Are you sure?</h2>
        </div>

        <div className={styles.commentwarning}>
          <p className={styles.comment}>
            Your progress hasn’t been saved. If you leave now, all unsaved
            changes will be lost
          </p>
        </div>
      </div>

      <div className={styles.actionbutton}>
        <button aria-label="Quit" title="Quit" onClick={quit}>
          Quit
        </button>
        <button aria-label="Close" title="Close" onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
}
