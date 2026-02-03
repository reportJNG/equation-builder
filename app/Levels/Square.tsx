import styles from "./Square.module.css";

interface SquareProps {
  value: string;
  iswht: boolean; // Determines if component is clickable or not
  setShowValues: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Square({ iswht, value, setShowValues }: SquareProps) {
  const handleClick = () => {
    if (iswht) {
      setShowValues(true);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={`${iswht ? styles.insideSquareclickable : styles.insideSquare}`}
        onClick={handleClick}
      >
        <div className={styles.bigtextholder}>
          <h1 className={styles.text}>
            {value === "*"
              ? "✖️"
              : value === "-"
                ? "➖"
                : value === "/"
                  ? "➗"
                  : value === "+"
                    ? "➕"
                    : value}
          </h1>
        </div>
      </div>
    </div>
  );
}
