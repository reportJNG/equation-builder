import styles from "./Setting.module.css";
import { X, LanguagesIcon, Music, Volume } from "lucide-react";
interface Settingsprops {
  lang: "Arabic" | "English" | "french";
  setLang: React.Dispatch<
    React.SetStateAction<"Arabic" | "English" | "french">
  >;
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
  const change = (text: "English" | "Arabic" | "french") => {
    setLang(text);
    changelang();
  };
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.right} onClick={() => close}>
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
                className={`styles.${sound ? "on" : "off"}`}
                aria-label="On"
                title="On"
                onClick={() => setSound(true)}
              >
                On
              </button>
              <button
                className={`styles.${!sound ? "on" : "off"}`}
                aria-label="Of"
                title="Off"
                onClick={() => setSound(false)}
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
                type="radio"
                placeholder="Volume ..."
                name="Music"
                id="Music"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className={styles.inputvolume}
              />
            </div>
          </div>
          <div className={styles.minibox}>
            <h3 className={styles.titlest}>
              Langague <LanguagesIcon /> :
            </h3>
            <div className={styles.actionminibox}>
              <button
                className={`styles.buttoncheck${lang === "English" ? "yes" : "no"}`}
                title="English"
                aria-label="English"
                onClick={() => change("English")}
              >
                English
              </button>
              <button
                className={`styles.buttoncheck${lang === "french" ? "yes" : "no"}`}
                title="Francais"
                aria-label="Francais"
                onClick={() => change("french")}
              >
                Francais
              </button>
              <button
                className={`styles.buttoncheck${lang === "Arabic" ? "yes" : "no"}`}
                title="العربية"
                aria-label="العربية"
                onClick={() => change("Arabic")}
              >
                العربية
              </button>
            </div>
          </div>
        </div>
        <div className={styles.bodyactions}>
          <button onClick={() => close}>Close</button>
          <button onClick={() => close}>Save</button>
        </div>
      </div>
    </div>
  );
}
