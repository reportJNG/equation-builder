import styles from "./Lobbyhandler.module.css";
import { useState } from "react";
import NameOverlay from "./NameOverlay";
import Settings from "./Settings";
import { useTranslation } from "next-i18next";
import { useRouter, usePathname } from "next/navigation";

export default function Lobbyhandler() {
  // Lobby state management
  const router = useRouter();
  const pathname = usePathname();
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
  //updater all three langagues
  const { t } = useTranslation("common");
  const changeLanguage = (newLang: "en" | "fr" | "ar") => {
    router.push(`/${newLang}${pathname}`);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  //settings state management
  const [volume, setVolume] = useState<number>(50);
  const [lang, setLang] = useState<"en" | "fr" | "ar">("en");
  const [sound, setSound] = useState<boolean>(false);

  //name state managment
  const [name, setName] = useState<string>("");
  const startgame = () => {
    lobbyfunchanlder("play");
  };

  return (
    <div className={styles.container}>
      {hanlderlobby?.lobby && (
        <>
          <div className={styles.upperbody}>
            <div className={styles.titlehandler}>
              <div className={styles.animationtext}>
                <span className={styles.brainhandleranimated}>🧠</span>
              </div>
              <div className={styles.texttitle}>
                <h1 className={styles.title}>{t("title")}</h1>
              </div>
              <div className={styles.description}>
                <p className={styles.dsctxt}>{t("subtitle")}</p>
              </div>
            </div>
          </div>

          <div className={styles.body}>
            <div className={styles.leftbox}>
              {" "}
              <div className={styles.midbox}>
                <div className={styles.titleads}>
                  <p className={styles.adstxt}>{t("Try Wordle vibe")}</p>
                </div>
                <div className={styles.actions}>
                  <button
                    className={styles.playothers}
                    onClick={() => window.open("https://abrain.vercel.app/")}
                    aria-label="Play now"
                    title="Play now"
                  >
                    {t("Play now")}
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.rightbox}>
              <div className={styles.actionhandler}>
                <div className={styles.buttonhandler}>
                  <button
                    className={styles.btn}
                    onClick={() => lobbyfunchanlder("name")}
                    aria-label="Play"
                    title="Play"
                  >
                    {t("Play")}
                  </button>
                  <button
                    className={styles.btn}
                    onClick={() => lobbyfunchanlder("settings")}
                    aria-label="Settings"
                    title="Settings"
                  >
                    {t("Settings")}
                  </button>
                  <button
                    className={styles.btn}
                    onClick={() =>
                      window.open("https://remalihamza.vercel.app/", "_self")
                    }
                    aria-label="Visit"
                    title="Visit"
                  >
                    {t("Visit")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {hanlderlobby?.name && (
        <>
          <NameOverlay name={name} setName={setName} start={startgame} />
        </>
      )}
      {hanlderlobby.settings && (
        <>
          <Settings
            lang={lang}
            setLang={setLang}
            volume={volume}
            setVolume={setVolume}
            setSound={setSound}
            sound={sound}
            close={() => lobbyfunchanlder("lobby")}
            changelang={() => changeLanguage(lang)}
          />
        </>
      )}
    </div>
  );
}
