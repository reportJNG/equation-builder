import styles from "./Square.module.css";
interface Squareprops {
  value: string;
  iswht: boolean;
  setShowValues: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Square({ iswht, value, setShowValues }: Squareprops) {
  const showvalue = () => {
    if (!iswht) return;
    else {
      setShowValues(true);
    }
  };
  return (
    <div className={styles.container}>
      {" "}
      {/**is wht here sign it can be clicked or not  */}
      <div className={styles.insideSquare} onClick={showvalue}>
        <div className={styles.bigtextholder}>
          <h1 className={styles.text}>{value}</h1>{" "}
          {/**it could be here a numebr and it could bt a symbol */}
        </div>
      </div>
    </div>
  );
}
