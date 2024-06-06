import Gallery from "../Gallery";
import { Link } from "react-router-dom";
import useSpotifyApi from "../useSpotifyApi";
import ig from "../icons/ig.svg";
import spotify from "../icons/spotify.svg";

export default function Sakatumba() {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="fixed bg-neutral-50 md:w-5/12 text-neutral-50 mix-blend-difference md:mix-blend-normal md:px-7 md:flex md:flex-col md:justify-start md:text-neutral-950 md:h-screen ">
        <Link to="/">
          <p className="hidden md:block md:text-xl uppercase md:px-1">
            Ivan Gwyn
          </p>
        </Link>
        <div className="fixed top-0 left-0 p-4 text-3xl uppercase md:p-0 md:pb-1 md:static md:text-6xl md:w-full md:mt-20">
          Sakatumba
        </div>
        <div className="hidden md:flex md:flex-col space-y-3  md:px-1 text-base font-inter">
          <p>
            Sakatumba es una banda de rock alternativo nacida en 2019 en la
            ciudad de Buenos Aires. Con un formato cancionero tomado como
            herencia del rock nacional exponen su fusión de post-punk con
            ferocidad, dulzura y dramatismo.
          </p>
          <p>
            Recientemente, lanzaron el adelanto de su próximo album a través de
            un doble sencillo "Habla Sola / Nada Más"
          </p>
          <p>
            "Puro Teatro", su último disco, fue producido por la banda. En este
            nuevo trabajo, mantienen la postura desafiante pero desencantada y
            las ambientaciones lúgubres y tenebrosas, ahora con un enfoque mucho
            más directo. SAKATUMBA logra una balance perfecto entre lo retorcido
            y lo onírico, entre la suavidad del dream pop y la violencia cruda
            del post-punk, todo a través de una estética oscura y una
            emocionalidad y dramatismo propios del movimiento gótico.
          </p>
          <InfoArtist artistId={"3iCS9nbrvZCEbF8Ial8WU2?si=ecc6539d30ae40b7"} />
        </div>
      </div>
      <Gallery albumId="72177720312322062" />
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
            <a href="https://www.instagram.com/juancruzcaos/" target="_blank">
              <img src={ig} />
            </a>

            <a href={url} target="_blank">
              <img src={spotify} />
            </a>
          </div>
        </div>
        <div className="hidden md:flex md:flex-col space-y-3  md:px-1 text-base font-inter">
          <p>
            Juan Cruz Caos es un artista emergente de Córdoba Argentina y su
            propuesta es una negociación entre lo disruptivo y lo correcto.
            Influenciado por la visión alternativa, la nostalgia de los años
            noventas y el Jazz vocal, Juan Cruz se sube al escenario y rompe un
            ramo de flores al grito de "yo soy responsable de no permitir que
            alguien me dé amor normal".
          </p>
          <p>
            Su performance fue presenciada en diversos escenarios tales como el
            aniversario del popular Chilli StreetClub, fue artista invitado por
            la banda cordobesa Fin del Mar y estuvo presente en el Festival
            Internacional de Jazz en Córdoba, como cantante de una big band.
          </p>
          <p>
            En su primer lanzamiento "Yo Trato", se demuestra una búsqueda
            intima en lo musical pero trágica en lo visual. Recordándonos a
            artistas y bandas como Lana del Rey, The Cure o inclusive a los
            comienzos de Shakira.
          </p>
        </div>
      </div>
    );
  }
}
