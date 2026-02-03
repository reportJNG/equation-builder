import styles from "./Congrats.module.css";

interface Congratsprops {
  playername: string;
}
export default function Congrats({ playername }: Congratsprops) {
  return (
    <div className={styles.container}>
      <div className={styles.mainbox}>
        <div className={styles.topbox}>
          <div className={styles.bigtext}>
            <div className={styles.playernamehandler}>
              <h1 className={styles.player}>{playername}</h1>
            </div>
            <div className={styles.smalltext}>
              <div className={styles.commenthandler}>
                <h6 className={styles.comment}>
                  <strong>comment xxxx</strong>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.midbox}>
          <div className={styles.prgholder}>
            <strong className={styles.normaltext}>
              <p></p>
            </strong>
          </div>
        </div>
        <div className={styles.gamesholder}>
          <div className={styles.titlegames}>
            <h2 className={styles.gameshldtxt}>Discover More Games</h2>
          </div>
          <div className={styles.game}>
            {" "}
            {/**background of game image */}
            <div className={styles.boxgame}>
              <div className={styles.top}>
                <h1 className={styles.gametitle}>Pokémon Battle</h1>
              </div>
              <div className={styles.main}>
                <span className={styles.mintxt}>
                  {" "}
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
            {" "}
            {/**background of game image */}
            <div className={styles.boxgame}>
              <div className={styles.top}>
                <h1 className={styles.gametitle}>Random Mini Games</h1>
              </div>
              <div className={styles.main}>
                <span className={styles.mintxt}>
                  {" "}
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
                I’m Remali Hamza, a web developer. I build a lot of things —
                welcome to my world. Dive in and discover them
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
