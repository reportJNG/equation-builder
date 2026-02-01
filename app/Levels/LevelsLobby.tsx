import styles from "./LevelLobby.module.css";
import { Settings, ArrowLeft, User } from "lucide-react";
import UiLevel from "./UiLevel";
import { AllLevels } from "../Const/Level";
import { useState } from "react";
interface LevelsLobbyprops {
  name: string;
  confirmeQuit: () => void;
}
export default function LevelsLobby({ name, confirmeQuit }: LevelsLobbyprops) {
  //handler ui component
  const trytoquit = () => {};
  const settingsopen = () => {};
  //handling player stat
  const [playerLvl, setPlayerLvl] = useState<number>(1); //1 level to ??
  //handler game start
  const startgame = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        <div className={styles.left}>
          <div className={styles.hanlderquit}>
            <button
              className={styles.quitbutton}
              aria-label="Quit"
              title="Quit"
              onClick={trytoquit}
            >
              <ArrowLeft />
            </button>
          </div>
        </div>
        <div className={styles.mid}>
          <div className={styles.textmidscreen}>
            <h2>Brain Equation</h2>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.profilehandler}>
            <div className={styles.usericon}>
              <User />
            </div>
            <div className={styles.nameplayer}>{name}</div>
          </div>
          <div className={styles.settingshandler}>
            <div className={styles.settingicon}>
              <span
                aria-label="Settings"
                title="Settings"
                onClick={settingsopen}
              >
                <Settings />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        {/**call ui levels component show user in lobby this coponnent*/}
        {AllLevels.map((val, i) => (
          <div key={i}>
            <UiLevel game={val} playerlevel={playerLvl} play={startgame} />
          </div>
        ))}
      </div>
    </div>
  );
}
