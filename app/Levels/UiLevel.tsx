import styles from "./UiLevel.module.css";
import { Signal } from "lucide-react";
interface UiLevel {
  levelname: string;
  level: number;
  diffuclty: string;
  playerlevel: number;
  play: () => void;
}
export default function UiLevel({
  playerlevel,
  play,
  levelname,
  level,
  diffuclty,
}: UiLevel) {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {" "}
        {/**here is background color clean */}
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.uilevel}>
              <Signal />
            </div>
            <div className={styles.textlevel}>{level}</div>
          </div>
          <div className={styles.right}>
            <div className={styles.diffucltytext}>{diffuclty}</div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.textmid}>
            <p>{levelname}</p>
          </div>
        </div>
      </div>
      <div className={styles.action}>
        <button
          className={styles.button}
          onClick={play}
          aria-label="Play"
          title="Play"
          disabled={playerlevel !== level}
        >
          Play
        </button>
      </div>
    </div>
  );
}
