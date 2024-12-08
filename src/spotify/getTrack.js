import axios from "axios";

const getTrack = async (search, access_token) => {
  try {
    const clientId = import.meta.env.VITE_SPOTIFY_API_ID;
    const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
    let tracklist = null;
    const tokenURL = `https://api.spotify.com/v1/search?q=${search}&type=track`;

    const response = await axios.get(tokenURL, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    tracklist = response.data.tracks.items.map((track) => ({
      name: track.name,
      artist: track.artists[0].name,
      uri: track.uri,
      image: track.album.images[0].url,
    }));

    return tracklist;
  } catch (error) {
    return error;
  }
};

export default getTrack;
