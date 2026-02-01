import styles from "./UiLevel.module.css";
import { Signal } from "lucide-react";
import { GameLevel } from "../Const/Level";
interface UiLevel {
  game: GameLevel;
  playerlevel: number;
  play: () => void;
}
export default function UiLevel({ playerlevel, play, game }: UiLevel) {
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
            <div className={styles.textlevel}>{game.level}</div>
          </div>
          <div className={styles.right}>
            <div className={styles.diffucltytext}>{game.difficulty}</div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.textmid}>
            <p>{game.levelname}</p>
          </div>
        </div>
      </div>
      <div className={styles.action}>
        <button
          className={styles.button}
          onClick={play}
          aria-label="Play"
          title="Play"
          disabled={playerlevel !== game.level}
        >
          Play
        </button>
      </div>
    </div>
  );
}
