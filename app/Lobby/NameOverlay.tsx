import styles from "./NameOverlay.module.css";
interface nameoverlayprops {
  start: () => void;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}
export default function NameOverlay({
  start,
  name,
  setName,
}: nameoverlayprops) {
  //function
  const startgame = () => {
    if (name.length < 3 || name.length > 20) setName("Player");
    start();
  };
  return (
    <div className={styles.container}>
      {" "}
      {/**overlaved */}
      <div className={styles.top}>
        <div className={styles.titletext}>
          <h3>Test your math skills</h3>
        </div>
        <div className={styles.commenteretxt}>
          <p>
            {" "}
            Pick numbers and operators carefully to match the target Think twice
            before submitting !!
          </p>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.inputhandler}>
          <input
            type="text"
            maxLength={20}
            minLength={3}
            placeholder="Name ..."
            aria-label="Name ..."
            title="Name ..."
            onChange={(e) => {
              const nword = e.target.value;
              const cleaned = nword.replace(/[0-9!#\/]/g, "");
              setName(cleaned);
            }}
            value={name}
          />
        </div>
        <div className={styles.action}>
          <button
            className={styles.btn}
            onClick={startgame}
            aria-label="Start"
            title="Start"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}
