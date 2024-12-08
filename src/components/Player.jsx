import React from "react";
import SpotifyWebPlayer from "react-spotify-web-playback";
import { useState, useEffect } from "react";

const Player = ({ accessToken, trackUri }) => {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    setPlay(true);
  }),
    [trackUri];
  if (!accessToken) {
    return null;
  }
  return (
    <>
      <SpotifyWebPlayer
        token={accessToken}
        showSaveIcon
        uris={trackUri ? [trackUri] : []}
        play={play}
      ></SpotifyWebPlayer>
    </>
  );
};

export default Player;
