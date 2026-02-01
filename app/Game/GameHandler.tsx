import Lobbyhandler from "../Lobby/Lobbyhandler";
import LevelsLobby from "../Levels/LevelsLobby";
import { useState } from "react";
export default function GameHanlder() {
  //settings state management

  const [volume, setVolume] = useState<number>(50);
  const [sound, setSound] = useState<boolean>(false);

  //name state managment

  const [name, setName] = useState<string>("");

  return (
    <div>
      <Lobbyhandler
        volume={volume}
        sound={sound}
        setVolume={setVolume}
        setSound={setSound}
        name={name}
        setName={setName}
      />
    </div>
  );
}
