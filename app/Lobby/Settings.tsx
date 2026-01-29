import styles from "./Setting.module.css";
import { X, LanguagesIcon, Music, Volume } from "lucide-react";

interface Settingsprops {
  lang: "en" | "fr" | "ar";
  setLang: React.Dispatch<React.SetStateAction<"en" | "fr" | "ar">>;
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  sound: boolean;
  setSound: React.Dispatch<React.SetStateAction<boolean>>;
  close: () => void;
  changelang: () => void;
}

export default function Settings({
  lang,
  volume,
  setVolume,
  sound,
  setSound,
  close,
  setLang,
  changelang,
}: Settingsprops) {
  const change = (text: "en" | "fr" | "ar") => {
    setLang(text);
    changelang();
  };

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
                onClick={() => {
                  setSound(true);
                  setVolume(50);
                }}
              >
                On
              </button>
              <button
                className={!sound ? styles.on : styles.off}
                aria-label="Off"
                title="Off"
                onClick={() => {
                  setSound(false);
                  setVolume(0);
                }}
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
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className={styles.inputvolume}
              />
            </div>
          </div>
          <div className={styles.minibox}>
            <h3 className={styles.titlest}>
              Language <LanguagesIcon /> :
            </h3>
            <div className={styles.actionminibox}>
              <button
                className={
                  lang === "en" ? styles.buttoncheckyes : styles.buttoncheckno
                }
                title="English"
                aria-label="English"
                onClick={() => change("en")}
                data-selected={lang === "en"}
              >
                English
              </button>
              <button
                className={
                  lang === "fr" ? styles.buttoncheckyes : styles.buttoncheckno
                }
                title="Francais"
                aria-label="Francais"
                onClick={() => change("fr")}
                data-selected={lang === "fr"}
              >
                Francais
              </button>
              <button
                className={
                  lang === "ar" ? styles.buttoncheckyes : styles.buttoncheckno
                }
                title="العربية"
                aria-label="العربية"
                onClick={() => change("ar")}
                data-selected={lang === "ar"}
              >
                العربية
              </button>
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
