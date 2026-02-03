import styles from "./Congrats.module.css";
import { useState, useEffect, useRef } from "react";

interface Congratsprops {
  playername: string;
}

export default function Congrats({ playername }: Congratsprops) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const mainboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mainboxRef.current) {
        const scrollTop = mainboxRef.current.scrollTop;
        const scrollHeight =
          mainboxRef.current.scrollHeight - mainboxRef.current.clientHeight;
        const progress =
          scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        setScrollProgress(progress);
      }
    };

    const mainbox = mainboxRef.current;
    if (mainbox) {
      mainbox.addEventListener("scroll", handleScroll);
      return () => mainbox.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.scrollProgressContainer}>
        <div
          className={styles.scrollProgressBar}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div
        className={styles.scrollHint}
        onClick={() =>
          mainboxRef.current?.scrollTo({ top: 0, behavior: "smooth" })
        }
        title="Scroll to top"
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24">
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
        </svg>
      </div>

      <div className={styles.mainbox} ref={mainboxRef}>
        <div
          className={styles.scrollProgress}
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />

        <div className={styles.topbox}>
          <div className={styles.bigtext}>
            <div className={styles.playernamehandler}>
              <h1 className={styles.player}>{playername}</h1>
            </div>
            <div className={styles.smalltext}>
              <div className={styles.commenthandler}>
                <h6 className={styles.comment}>
                  <strong>Thanks for playing!</strong>
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.midbox}>
          <div className={styles.prgholder}>
            <strong className={styles.normaltext}>
              <p>Congratulations on completing the game!</p>
            </strong>
          </div>
        </div>

        <div className={styles.gamesholder}>
          <div className={styles.titlegames}>
            <h2 className={styles.gameshldtxt}>Discover More Games</h2>
          </div>

          <div className={styles.game}>
            <div className={styles.boxgame}>
              <div className={styles.top}>
                <h1 className={styles.gametitle}>Pokémon Battle</h1>
              </div>
              <div className={styles.main}>
                <span className={styles.mintxt}>
                  Choose your Pokémon, battle opponents, and prove your strength
                </span>
              </div>
              <div className={styles.footer}>
                <button
                  className={styles.btngame}
                  title="Play Now"
                  aria-label="Play Now"
                  onClick={() =>
                    window.open("https://pokemon-battel.vercel.app/", "_blank")
                  }
                >
                  Play Now
                </button>
              </div>
            </div>
          </div>

          <div className={styles.game}>
            <div className={styles.boxgame}>
              <div className={styles.top}>
                <h1 className={styles.gametitle}>Random Mini Games</h1>
              </div>
              <div className={styles.main}>
                <span className={styles.mintxt}>
                  Play quick games and have fun anytime
                </span>
              </div>
              <div className={styles.footer}>
                <button
                  className={styles.btngame}
                  title="Play Now"
                  aria-label="Play Now"
                  onClick={() =>
                    window.open("https://mini-games-h.vercel.app/", "_blank")
                  }
                >
                  Play Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.visitus}>
          <div className={styles.superbox}>
            <div className={styles.hello}>
              <h1 className={styles.hellotext}>Hello</h1>
            </div>
            <div className={styles.greeting}>
              <p className={styles.greetingtxt}>
                Im Remali Hamza, a web developer. I build a lot of things —
                welcome to my world. Dive in and discover them.
              </p>
            </div>
            <div className={styles.footer}>
              <button
                className={styles.visitusbtn}
                aria-label="Visit-Us"
                title="Visit-Us"
                onClick={() =>
                  window.open("https://remalihamza.vercel.app/", "_blank")
                }
              >
                Visit-Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
