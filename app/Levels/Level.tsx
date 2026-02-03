import styles from "./Level.module.css";
import { ArrowLeft, Flame } from "lucide-react";
import Squareholder from "./Squareholder";

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
  newequa: string;
  setNewEqua: React.Dispatch<React.SetStateAction<string>>;
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
  newequa,
  setNewEqua,
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
            <Flame />
          </div>
          <div className={styles.texthandler}>
            <span className={styles.textlevel}>{level}</span>
          </div>
        </div>
      </div>
      {/**here the real game engine start  */}
      {heart > 0 && (
        <>
          <div className={styles.main}>
            <Squareholder
              values={[
                { val: String(firstnum), check: false },
                { val: newequa, check: true },
                { val: String(secondnum), check: false },
                { val: "🟰", check: false },
                { val: String(result), check: false },
              ]}
              setEquation={setNewEqua}
            />
          </div>
          <div className={styles.mainhanlder}>
            <button
              className={styles.checkbutton}
              title="Check"
              aria-label="Check"
              onClick={endofgame}
            >
              Check
            </button>
          </div>
        </>
      )}
    </div>
  );
}
