import axios from "axios";
import { useEffect, useState } from "react";
import DisplaySongs from "../src/components/DisplaySongs/DisplaySongs";
import AddSongs from "../src/components/AddSongs/AddSongs";

function App() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    getAllSongs();
  }, []);

  async function postSongs(newSong) {
    let response = await axios.post(
      "http://127.0.0.1:8000/api/musics/",
      newSong
    );
    if (response.status === 201) {
      await getAllSongs();
    }
  }
  async function getAllSongs() {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/musics/");

      setSongs(response.data);
    } catch (ex) {
      console.log("error!!!!!!!!!!!");
    }
  }
  return (
    <div>
      <div></div>

      <div>
        <DisplaySongs songsList={songs} />
        <AddSongs songsList={postSongs} />
      </div>
    </div>
  );
}

export default App;
