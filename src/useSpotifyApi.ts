import { useEffect, useState } from "react";

type useSpotifyApiID = { artistId: string };

const useSpotifyApi = ({ artistId }: useSpotifyApiID) => {
  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
  const [accessToken, setAccessToken] = useState("");

  interface Artist {
    name: string;
    followers: {
      total: number;
    };
    genres: [];
    external_urls: {
      spotify: string;
    };
  }

  const [artist, setArtist] = useState<Artist>();

  useEffect(() => {
    let authParameters = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  useEffect(() => {
    async function search() {
      let authParameters = {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      };
      fetch(`https://api.spotify.com/v1/artists/${artistId}`, authParameters)
        .then((result) => result.json())
        .then((data) => setArtist(data));
    }
    search();
  }, [accessToken]);

  return { artist };
};

export default useSpotifyApi;
