import styles from "./Loading.module.css";
import Image from "next/image";
import { BotIcon, Loader2 } from "lucide-react";

interface LoadingProps {
  name: string;
}

export default function Loading({ name }: LoadingProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.topboxerheader}>
          <div className={styles.maxleft}>
            <div className={styles.icon}>
              <div className={styles.logoPlaceholder}>
                <span className={styles.logoText}>AI</span>
              </div>
            </div>
          </div>
          <div className={styles.maxright}>
            <div className={styles.minibox}>
              <div className={styles.profileui}>
                <BotIcon className={styles.boticon} />
              </div>
              <div className={styles.nameplayer}>
                <p className={styles.text}>{name}</p>
                <span className={styles.statusIndicator}></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.textholder}>
          <div className={styles.title}>
            <h2 className={styles.texttitle}>Preparing your experience</h2>
          </div>
          <div className={styles.comment}>
            <p className={styles.commenttext}>
              Just a moment while we set everything up for you...
            </p>
          </div>
        </div>
        <div className={styles.animation}>
          <div className={styles.centered}>
            <div className={styles.spinner}>
              <Loader2 className={styles.spinnerIcon} />
            </div>
            <div className={styles.loadingDots}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.elementLoaderEmpty}>
          <div className={styles.niceLoader}></div>
        </div>
        <div className={styles.timerText}>
          <span>Estimated time: </span>
          <span className={styles.timer}>5s</span>
        </div>
      </div>
    </div>
  );
}
