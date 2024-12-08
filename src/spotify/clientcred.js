import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

const clientcred = async (code) => {
  const clientId = import.meta.env.VITE_SPOTIFY_API_ID;
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
  const tokenUrl = "https://accounts.spotify.com/api/token";

  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  };
  const data = {
    grant_type: "authorization_code",
    code: code,
    redirect_uri: "https://fukumusic.vercel.app/home",
  };
  try {
    const response = await axios.post(tokenUrl, qs.stringify(data), headers);

    return response.data.access_token;
  } catch (error) {
    window.location.href = "/";
    return error;
  }
};

export default clientcred;
