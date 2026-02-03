import styles from "./Setting.module.css";
import { X, Music, Volume } from "lucide-react";

interface Settingsprops {
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  sound: boolean;
  setSound: React.Dispatch<React.SetStateAction<boolean>>;
  close: () => void;
  playmusic: () => void;
  pausemusic: () => void;
  changemusic: () => void;
}

export default function Settings({
  volume,
  setVolume,
  sound,
  setSound,
  close,
  playmusic,
  pausemusic,
  changemusic,
}: Settingsprops) {
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.right} onClick={close}>
          <span className={styles.closebtn}>
            <X />
          </span>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.box}>
          <div className={styles.minibox}>
            <h3 className={styles.titlest}>
              Music <Music /> :
            </h3>
            <div className={styles.actionminibox}>
              <button
                className={sound ? styles.on : styles.off}
                aria-label="On"
                title="On"
                onClick={playmusic}
              >
                On
              </button>
              <button
                className={!sound ? styles.on : styles.off}
                aria-label="Off"
                title="Off"
                onClick={pausemusic}
              >
                Off
              </button>
            </div>
          </div>
          <div className={styles.minibox}>
            <h3 className={styles.titlest}>
              Volume <Volume /> :
            </h3>
            <div className={styles.actionminibox}>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className={styles.inputvolume}
                onClick={changemusic}
              />
            </div>
          </div>
        </div>
        <div className={styles.bodyactions}>
          <button onClick={close}>Close</button>
          <button onClick={close}>Save</button>
        </div>
      </div>
    </div>
  );
}
