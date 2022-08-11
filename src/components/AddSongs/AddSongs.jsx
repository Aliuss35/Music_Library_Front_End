import { useState } from "react";

const AddSongs = (props) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [release_date, setRelease_date] = useState("");
  const [genre, setGenre] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    let newSong = {
      title: title,
      artist: artist,
      album: album,
      release_date: release_date,
      genre: genre,
    };
    console.log(newSong);
    props.songsList(newSong);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(songs) => setTitle(songs.target.value)}
        />
        <label>Title</label>
        <input
          type="text"
          value={artist}
          onChange={(songs) => setArtist(songs.target.value)}
        />
        <label>Title</label>
        <input
          type="text"
          value={album}
          onChange={(songs) => setAlbum(songs.target.value)}
        />
        <label>Title</label>
        <input
          type="date"
          value={release_date}
          onChange={(songs) => setRelease_date(songs.target.value)}
        />
        <label>Title</label>
        <input
          type="text"
          value={genre}
          onChange={(songs) => setGenre(songs.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AddSongs;
