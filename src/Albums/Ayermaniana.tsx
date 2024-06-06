import Gallery from "../Gallery";
import { Link } from "react-router-dom";
import useSpotifyApi from "../useSpotifyApi";
import ig from "../icons/ig.svg";
import spotify from "../icons/spotify.svg";

export default function Ayermaniana() {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="fixed bg-neutral-50 md:w-5/12 text-neutral-50 mix-blend-difference md:mix-blend-normal md:px-7 md:flex md:flex-col md:justify-start md:text-neutral-950 md:h-screen ">
        <div className="md:flex md:flex-col md:space-y-20 md:pt-5">
          <Link to="/">
            <p className="hidden md:block md:text-xl uppercase md:px-1">
              Ivan Gwyn
            </p>
          </Link>
          <div className="fixed top-0 left-0 p-4 text-3xl uppercase md:p-0 md:pb-1 md:static md:text-6xl md:w-full md:mt-20">
            AyerManiana
          </div>
        </div>
        <InfoArtist
          artistId={"6qOV8cecEpZZzeVDz8ye2q?si=gS3vXBUNSQOkGrVdC0XbFg"}
        />
      </div>
      <Gallery albumId="72177720316619534" />
    </div>
  );
}

type Artist = { artistId: string };

function InfoArtist({ artistId }: Artist) {
  const { artist } = useSpotifyApi({ artistId });
  const genres = artist?.genres;
  const url = artist?.external_urls?.spotify;

  if (!genres) {
    console.log("can't load genres");
    return null;
  }
  if (!url) {
    console.log("can't load url");
    return null;
  }

  if (artistId) {
    return (
      <div className="hidden md:block">
        <div
          className={
            genres?.length > 1
              ? "hidden md:px-1 md:block text-sm mb-5"
              : "hidden"
          }
        >
          {genres?.map((genre, index) => (
            <span key={index}>
              {genre}
              {index < genres.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
        <div className="flex flex-row items-center space-x-7 mb-6">
          <div className="font-inter">
            <p className="text-2xl font-extrabold">{artist?.followers.total}</p>
            <p className="font-bold text-sm">seguidores</p>
          </div>
          <div className="flex flex-row space-x-3">
            <a href="https://www.instagram.com/ayermaniana/" target="_blank">
              <img src={ig} />
            </a>

            <a href={url} target="_blank">
              <img src={spotify} />
            </a>
          </div>
        </div>
        <p className="hidden md:block md:px-1 text-base font-inter">
          Miembros Maximiliano Leivas (Guitarra y voz) Nicolás Granado (Bajo y
          Synth) Santiago García Cancio (Bateria) Leonel Calo (Guitarra) Pamela
          Rudy (Teclados hammonds)
        </p>
      </div>
    );
  }
}
