import React from "react";
import getTrack from "../spotify/getTrack";
import { useState, useEffect } from "react";
import addToQueue from "../spotify/addToQueue";

const Search = ({ search, accessToken, clickUri }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getTrack(search, accessToken).then((data) => {
      setSearchResults(data);
    });
  }, [search]);

  return (
    <>
      <div>
        {searchResults?.map !== undefined &&
          searchResults?.map((track) => (
            <div
              key={track.uri}
              className="w-full flex items-center gap-5 bg-white"
            >
              <div
                id={track.uri}
                onClick={() =>
                  clickUri(track.uri, track.image, track.name, track.artist)
                }
                className="flex w-full flex-wrap px-2 my-5 justify-between items-center h-[50px] max-w-[600px] text-center hover:bg-gray-200 hover:cursor-pointer"
              >
                <img
                  src={track.image}
                  alt={track.name}
                  className="w-[50px] h-[50px] object-cover rounded-sm"
                />
                <p>{track.name}</p>
                <p>{track.artist}</p>
              </div>
              <p
                className="hover:underline hover:cursor-pointer"
                onClick={() => addToQueue(track.uri, accessToken)}
              >
                Add to queue
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Search;
