import styles from "./Setting.module.css";
interface Settingsprops {
  lang: string;
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
}
export default function Settings({ lang, volume, setVolume }: Settingsprops) {
  <div className={styles.container}>
    <div className={styles.upper}>
      <div className={styles.right}>close</div>
    </div>
    <div className={styles.body}>
      <div className={styles.box}></div>
    </div>
  </div>;
}
