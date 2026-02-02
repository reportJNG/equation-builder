import styles from "./Level.module.css";
import { ArrowLeft, User2Icon } from "lucide-react";

interface Levelprops {
  firstnum: number;
  secondnum: number;
  result: number;
  endofgame: () => void;
  heart: number;
  level: number;
  stopplaying: () => void;
  levelname: string;
  diffculty: string;
}
export default function Level({
  firstnum,
  secondnum,
  result,
  endofgame, //it will run when the user got the answer tottaly right
  heart,
  level,
  levelname,
  diffculty,
  stopplaying,
}: Levelprops) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.topleft}>
          <button
            aria-label="Quit"
            title="Quit"
            onClick={stopplaying}
            className={styles.quitbutton}
          >
            <ArrowLeft />
          </button>
        </div>
        <div className={styles.topmid}>
          <div className={styles.titlehandler}>
            <h2 className={styles.texttitle}>{levelname}</h2>
            <div className={styles.under}>
              <div className={styles.smalltext}>
                <span className={styles.minitxt}>{diffculty}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.topright}>
          <div className={styles.uihandler}>
            <User2Icon />
          </div>
          <div className={styles.texthandler}>
            <span className={styles.textlevel}>{level}</span>
          </div>
        </div>
      </div>
      {heart > 0 && <></>}
    </div>
  );
}
