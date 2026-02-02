import styles from "./LevelLobby.module.css";
import { Settings, ArrowLeft, User } from "lucide-react";
import UiLevel from "./UiLevel";
import { AllLevels } from "../Const/Level";
import { useState } from "react";
import LoseProgress from "../Components/LoseProgress";
import Level from "./Level";
import Restart from "./Restart";
interface LevelsLobbyprops {
  name: string;
  confirmeQuit: () => void;
}
export default function LevelsLobby({ name, confirmeQuit }: LevelsLobbyprops) {
  //handler ui component
  const settingsopen = () => {};

  //handling player stat
  const [playerStat, setPlayerStat] = useState<{
    level: number;
    heart: number;
  }>({
    level: 1,
    heart: 3,
  }); //1 level to ?? //heart to 0 === lose show him ui to restart

  //handler game start
  const [playing, setPlaying] = useState<boolean>(false);
  const startgame = () => {
    setPlaying(true);
  };

  //hanlder heart is 0

  const [lostui, setLostUi] = useState<boolean>(false);

  const restart = () => {};
  const gohome = () => {};

  //handle the game test of it go open next level or not
  const [newequa, setNewEqua] = useState<string>("🤔");

  const endgame = () => {
    setPlaying(false);
  };

  //handler confirme quit lose all progress
  const [confirme, setConfirme] = useState<boolean>(false);

  //handler to back to lose one level progress
  const stopplaying = () => {
    setPlayerStat((prev) => ({ ...prev, heart: 3 }));
  };
  return (
    <div className={styles.container}>
      {!confirme && !playing && (
        <>
          <div className={styles.topbar}>
            <div className={styles.left}>
              <div className={styles.hanlderquit}>
                <button
                  className={styles.quitbutton}
                  aria-label="Quit"
                  title="Quit"
                  onClick={() => setConfirme(true)}
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
                <UiLevel
                  game={val}
                  playerlevel={playerStat.level}
                  play={startgame}
                />
              </div>
            ))}
          </div>
        </>
      )}
      {confirme && !playing && (
        <>
          <LoseProgress quit={confirmeQuit} close={() => setConfirme(false)} />
        </>
      )}
      {playing && !lostui && (
        <>
          <Level
            firstnum={AllLevels[playerStat?.level - 1].firstNum}
            secondnum={AllLevels[playerStat?.level - 1].secondNum}
            result={AllLevels[playerStat?.level - 1].result}
            endofgame={endgame}
            heart={playerStat.heart}
            level={playerStat.level}
            stopplaying={stopplaying}
            levelname={AllLevels[playerStat.level - 1].levelname}
            diffculty={AllLevels[playerStat.level - 1].difficulty}
            newequa={newequa}
            setNewEqua={setNewEqua}
          />
        </>
      )}
      {/**player lost his game show ui */}
      {playing && lostui && (
        <>
          <Restart gohome={gohome} restart={restart} />
        </>
      )}
    </div>
  );
}
