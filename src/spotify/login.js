const login = () => {
  const clientId = import.meta.env.VITE_SPOTIFY_API_ID;
  const redirectUri = "http://localhost:5173/home";
  const responseType = "code";
  const scopes =
    "streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state user-library-read user-library-modify";
  const endpoint = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&scope=${scopes}`;

  window.open(endpoint, "_self");
};

export default login;
