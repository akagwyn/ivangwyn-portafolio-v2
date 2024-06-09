import Gallery from "../Gallery";
import { Link } from "react-router-dom";
import useSpotifyApi from "../useSpotifyApi";
import ig from "../icons/ig.svg";
import spotify from "../icons/spotify.svg";

export default function ClubAudiovisual() {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="fixed bg-neutral-50 md:w-5/12 text-neutral-50 mix-blend-difference md:mix-blend-normal md:px-7 md:flex md:flex-col md:justify-start md:text-neutral-950 md:h-screen ">
        <div className="md:flex md:flex-col md:space-y-8 md:pt-5">
          <Link to="/">
            <p className="hidden md:block md:text-xl uppercase md:px-1">
              Ivan Gwyn
            </p>
          </Link>
          <div className="fixed top-0 left-0 p-4 text-2xl uppercase md:p-0 md:pb-1 md:static md:text-6xl md:w-full">
            El Club Audiovisual
          </div>
        </div>
        <InfoArtist
          artistId={"1YZnktJjGKEbhQBcpQQjQ7?si=dMYRVA1_ThKpLEmGiUkGMg"}
        />
      </div>
      <Gallery albumId="72177720316600725" />
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
          <div className="font-interBold font-extrabold">
            <p className="text-2xl">{artist?.followers.total}</p>
            <p className="font-bold text-sm">seguidores</p>
          </div>
          <div className="flex flex-row space-x-3">
            <a
              href="https://www.instagram.com/elclubaudiovisual/"
              target="_blank"
            >
              <img src={ig} />
            </a>

            <a href={url} target="_blank">
              <img src={spotify} />
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <p className="hidden md:block md:px-1 text-sm font-inter">
            El Club Audiovisual nace en 2015 cuando Tomás Pelaez y Delfina Gel,
            compañeros de secundaria, deciden juntarse a hacer música para pasar
            el verano. En 2017, Juan Viaggio se une a la banda y publican su
            primer EP, "Cinco Días en el Planeta Azul" y su segundo EP "Siempre
            Ahora". Dos discos que los llevan a tocar por toda la Ciudad de
            Buenos Aires.
          </p>
          <p className="hidden md:block md:px-1 text-sm font-inter">
            En 2019, con la incorporación de Matías Vertula, El Club comienza a
            trabajar junto a Estanislao López en su primer disco de estudio. En
            plena pandemia del 2020, con el lanzamiento de "Ya No Estamos Tan
            Solos" se suman al catálogo del sello marplatense Casa del Puente
            Discos.
          </p>
          <p className="hidden md:block md:px-1 text-sm font-inter">
            En 2021 El Club vuelve con "Cuando Dormís", una reversión
            refrescante y enérgica del clásico "When You Sleep" de My Bloody
            Valentine. Reemplazando las características oníricas y misteriosas
            de la original por un espíritu alentador y juvenil.
          </p>
          <p className="hidden md:block md:px-1 text-sm font-inter">
            En el 2022 la banda participó de la primera edición en Argentina del
            festival Primavera Sound, en el marco del “Primavera en la Ciudad” y
            comenzó a anticipar su esperado segundo álbum con los sencillos
            "Madrugada", "Una Canción" ft. ODD MAMI y "Hoy Quiero Hacer lo que
            me Gusta".
          </p>
          <p className="hidden md:block md:px-1 text-sm font-inter">
            Hoy en día la banda se encuentra presentando su álbum homónimo, “El
            Club Audiovisual”, en festivales como “Nuevo Día” en Buenos Aires y
            Montevideo, y por diferentes puntos del país como Córdoba, Rosario,
            Salta, Santiago del Estero, Mar del Plata y La Plata entre otros.
          </p>
        </div>
      </div>
    );
  }
}
