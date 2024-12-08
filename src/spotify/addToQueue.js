import axios from "axios";
const addToQueue = async (uri, accessToken) => {
  const tokenURL = `https://api.spotify.com/v1/me/player/queue?uri=${uri}`;

  try {
    const response = await axios.post(tokenURL, null, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export default addToQueue;
