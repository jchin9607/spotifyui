import React from "react";
import login from "../spotify/login";

const Auth = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <button
        onClick={login}
        className="w-[150px] h-[50px] bg-green-300 rounded-xl drop-shadow-md hover:bg-green-400 "
      >
        Login with Spotify
      </button>
    </div>
  );
};

export default Auth;
