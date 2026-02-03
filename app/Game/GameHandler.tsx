import Lobbyhandler from "../Lobby/Lobbyhandler";
import LevelsLobby from "../Levels/LevelsLobby";
import { useRef, useState } from "react";

export default function GameHanlder() {
  //settings state management
  const music = useRef<HTMLAudioElement | null>(null);
  const [volume, setVolume] = useState<number>(0.5);
  const [sound, setSound] = useState<boolean>(false);
  const playmusic = () => {
    music.current!.volume = volume;
    music.current?.play();
    setSound(true);
  };

  const pausemusic = () => {
    music.current?.pause();
    setSound(false);
  };

  const changemusic = () => {
    if (volume !== 0) {
      playmusic();
    } else {
      pausemusic();
    }
  };

  //name state managment

  const [name, setName] = useState<string>("");

  //state btw 2 lobby handler's
  const [switcher, setSwitcher] = useState<boolean>(false);
  const switchertoggle = () => {
    setSwitcher((prev) => !prev);
  };

  return (
    <div>
      {!switcher && (
        <>
          <Lobbyhandler
            volume={volume}
            sound={sound}
            setVolume={setVolume}
            setSound={setSound}
            name={name}
            setName={setName}
            gotolobbylevel={switchertoggle}
            playmusic={playmusic}
            pausemusic={pausemusic}
            changemusic={changemusic}
          />
        </>
      )}

      {switcher && (
        <>
          <LevelsLobby name={name} confirmeQuit={switchertoggle} />
        </>
      )}

      <audio src="/music.mp3" ref={music} autoPlay defaultValue={volume} />
    </div>
  );
}
