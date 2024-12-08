import React from "react";
import { useState, useEffect } from "react";
import clientcred from "../spotify/clientcred";
import Player from "../components/Player";
import { useNavigate } from "react-router-dom";
import Search from "../components/Search";

const Home = () => {
  const [accessToken, setAccessToken] = useState("");
  const [search, setSearch] = useState("");
  const [uri, setUri] = useState(null);
  const [display, setDisplay] = useState({
    image: null,
    name: null,
    artist: null,
  });

  function clickUri(_uri, _image, _name, _artists) {
    setUri(_uri);
    setSearch("");
    setDisplay({
      image: _image,
      name: _name,
      artist: _artists,
    });
  }

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");

    clientcred(code).then((token) => setAccessToken(token));
  }, []);

  return (
    <div>
      {accessToken && (
        <div className="w-full h-screen ">
          <div className="flex flex-col items-center justify-center fixed top-0 left-0 w-full">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Search for a song"
              className="w-[300px] h-[20px] outline border-black rounded-md m-2 px-5 py-2"
            />
            {search !== "" && (
              <div className="w-full overflow-auto h-[500px] max-w-[600px] bg-white z-[2] relative">
                <Search
                  search={search}
                  accessToken={accessToken}
                  clickUri={clickUri}
                />
              </div>
            )}
          </div>
          <div className="w-full h-screen flex flex-col items-center justify-center relative z-[0]">
            {/* <img
              src={display.image}
              className="w-[300px] h-[300px] rounded-md object-cover drop-shadow-sm"
              alt=""
            />
            <p>{display.name}</p>
            <p>{display.artist}</p> */}
            <h2 className="drop-shadow-md">
              Made by{" "}
              <a
                href="https://jchin9607.github.io/portfolio"
                target="_blank"
                className="hover:underline"
              >
                Lucas C. 🌃
              </a>
            </h2>
          </div>
          <div className="w-full fixed bottom-0">
            <Player accessToken={accessToken} trackUri={uri ? uri : null} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
