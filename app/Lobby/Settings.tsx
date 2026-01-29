import styles from "./Setting.module.css";
interface Settingsprops {
  lang: "Arabic" | "English" | "french";
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  sound: boolean;
  setSound: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Settings({
  lang,
  volume,
  setVolume,
  sound,
  setSound,
}: Settingsprops) {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.right}>close</div>
      </div>
      <div className={styles.body}>
        <div className={styles.box}>
          <div className={styles.minibox}>
            <h3 className={styles.titlest}>Music :</h3>
            <div className={styles.actionminibox}>
              <button
                className={`styles.${sound ? "on" : "off"}`}
                aria-label="On"
                title="On"
              >
                On
              </button>
              <button
                className={`styles.${!sound ? "on" : "off"}`}
                aria-label="Of"
                title="Off"
              >
                Off
              </button>
            </div>
          </div>
          <div className={styles.minibox}>
            <h3 className={styles.titlest}>Volume :</h3>
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
            <h3 className={styles.titlest}>Langague :</h3>
            <div className={styles.actionminibox}>
              <button
                className={`styles.buttoncheck${lang === "English" ? "yes" : "no"}`}
                title="English"
                aria-label="English"
              >
                English
              </button>
              <button
                className={`styles.buttoncheck${lang === "french" ? "yes" : "no"}`}
                title="Francais"
                aria-label="Francais"
              >
                Francais
              </button>
              <button
                className={`styles.buttoncheck${lang === "Arabic" ? "yes" : "no"}`}
                title="العربية"
                aria-label="العربية"
              >
                العربية
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
