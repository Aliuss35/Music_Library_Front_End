import { useState } from "react";

const DisplaySongs = (props) => {
  return (
    <div>
      <input type="text" />
      <div>
        <table>
          <thead>
            <tr>
              <th>TITLE</th>
              <th>ARTIST</th>
              <th>ALBUM</th>
              <th>RELEASED</th>
              <th>GENRE</th>
            </tr>
          </thead>
          <tbody>
            {props.songsList.map((song) => {
              return (
                <tr>
                  <th>{song.title}</th>
                  <th>{song.artist}</th>
                  <th>{song.album}</th>
                  <th>{song.release_date}</th>
                  <th>{song.genre}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div></div>
    </div>
  );
};
export default DisplaySongs;

// {
//   "id": 1,
//   "title": "Gurbet",
//   "artist": "Ozdemir Erdogan",
//   "album": "Sivrisinek Saz ve Caz Orkestrasi",
//   "release_date": "1974-04-05",
//   "genre": "Anatolian Rock"
// },
