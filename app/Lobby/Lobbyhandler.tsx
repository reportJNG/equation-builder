import styles from "./Lobbyhandler.module.css";
import { useState } from "react";
export default function Lobbyhandler() {
  //lobby button:
  const [hanlderlobby, setHandlerlobby] = useState<{
    play: boolean;
    settings: boolean;
    name: boolean;
    lobby: boolean;
  }>({ play: false, settings: false, name: false, lobby: true });

  const lobbyfunchanlder = (target: keyof typeof hanlderlobby) => {
    setHandlerlobby(
      Object.fromEntries(
        Object.keys(hanlderlobby).map((key) => [key, key === target]),
      ) as typeof hanlderlobby,
    );
  };
  return (
    <div className={styles.container}>
      {hanlderlobby?.lobby && (
        <div className={styles.upperbody}>
          <div className={styles.titlehandler}>
            <div className={styles.animationtext}>
              <span className={styles.brainhandleranimated}></span>{" "}
            </div>
            <div className={styles.texttitle}>
              <h1 className={styles.title}>BrainEquation</h1>
            </div>
            <div className={styles.description}>
              <p className={styles.dsctxt}>Use your brain not a calculator</p>
            </div>
          </div>
        </div>
      )}
      {hanlderlobby?.lobby && (
        <div className={styles.body}>
          <div className={styles.leftbox}>
            {/**full screen horizantal background */}
            <div className={styles.midbox}>
              <div className={styles.titleads}>
                <p className={styles.adstxt}>Try Wordle vibe</p>
              </div>
              <div className={styles.actions}>
                {/**down of the left side button play */}
                <button
                  className={styles.playothers}
                  onClick={() => window.open("https://abrain.vercel.app/")}
                  aria-label="Play now"
                  title="Play now"
                >
                  Play now
                </button>
              </div>
            </div>
          </div>
          <div className={styles.rightbox}>
            <div className={styles.actionhandler}>
              <div className={styles.buttonhandler}>
                <button className={styles.btn} aria-label="Play" title="Play">
                  Play
                </button>
                <button
                  className={styles.btn}
                  aria-label="Settings"
                  title="Settings"
                >
                  Settings
                </button>
                <button
                  className={styles.btn}
                  onClick={() => window.open("", "_blank")}
                  aria-label="Visit"
                  title="Visit"
                >
                  Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
