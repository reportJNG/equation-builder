import { useState } from "react";
import Square from "./Square";
import styles from "./Squareholder.module.css";
type SquareValue = {
  val: string;
  check: boolean;
};

interface SquareholderProps {
  values: [SquareValue, SquareValue, SquareValue, SquareValue, SquareValue];
}
export default function Squareholder({ values }: SquareholderProps) {
  const [showValues, setShowValues] = useState<boolean>(false);
  const putvalue = (val: string) => {
    setShowValues(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.bigsquare}>
        {values.map((val, i) => (
          <div className={styles.eachsquare} key={i}>
            <Square
              value={val.val}
              iswht={val.check}
              setShowValues={setShowValues}
            />
          </div>
        ))}
      </div>
      {showValues && (
        <>
          {/**here show 4 emptey squares to choose the value i want to */}
          <div className={styles.choosevalue}>
            <div className={styles.squaresvalues}>
              <div className={styles.onesquare} onClick={() => putvalue("+")}>
                <h2 className={styles.bigtxtvalue}>➕</h2>
              </div>
              <div className={styles.onesquare} onClick={() => putvalue("-")}>
                <h2 className={styles.bigtxtvalue}>➖</h2>
              </div>
              <div className={styles.onesquare} onClick={() => putvalue("/")}>
                <h2 className={styles.bigtxtvalue}>➗</h2>
              </div>
              <div className={styles.onesquare} onClick={() => putvalue("*")}>
                <h2 className={styles.bigtxtvalue}>✖️</h2>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
