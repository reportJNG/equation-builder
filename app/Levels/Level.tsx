import styles from "./Level.module.css";
interface Levelprops {
  firstnum: number;
  secondnum: number;
  result: number;
}
export default function Level({ firstnum, secondnum, result }: Levelprops) {
  return (
    <div className={styles.container}>
      <div className={styles.boxequationhanlder}></div>
      <div className={styles.actionhanlder}></div>
    </div>
  );
}
