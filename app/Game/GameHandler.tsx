import Lobbyhandler from "../Lobby/Lobbyhandler";
import LevelsLobby from "../Levels/LevelsLobby";
import { useState } from "react";
export default function GameHanlder() {
  //settings state management

  const [volume, setVolume] = useState<number>(0);
  const [sound, setSound] = useState<boolean>(false);

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
          />
        </>
      )}

      {switcher && (
        <>
          <LevelsLobby name={name} confirmeQuit={switchertoggle} />
        </>
      )}
    </div>
  );
}
