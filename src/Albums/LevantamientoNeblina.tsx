import Gallery from "../Gallery";
import { Link } from "react-router-dom";
// import useSpotifyApi from "../useSpotifyApi";
import ig from "../icons/ig.svg";
// import spotify from "../icons/spotify.svg";

export default function LevantamientoNeblina() {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="fixed bg-neutral-50 md:w-5/12 text-neutral-50 mix-blend-difference md:mix-blend-normal md:px-7 md:flex md:flex-col md:justify-start md:text-neutral-950 md:h-screen ">
        <div className="md:flex md:flex-col md:space-y-20 md:pt-5">
          <Link to="/">
            <p className="hidden md:block md:text-xl uppercase md:px-1">
              Ivan Gwyn
            </p>
          </Link>
          <div className="fixed top-0 left-0 p-4 text-xl uppercase md:p-0 md:pb-1 md:static md:text-6xl md:w-full md:mt-20">
            Levantamiento Neblina
          </div>
        </div>
        <a
          className="hidden md:block"
          href="https://www.instagram.com/levantamiento.neblina/"
          target="_blank"
        >
          <img src={ig} />
        </a>
        {/* <InfoArtist
          artistId={"6ipac2Z0d0L6LWS7tTudcp?si=0KMIG1cYRI-za9JZcxw00Q"}
        /> */}
      </div>
      <Gallery albumId="72177720317660749" />
    </div>
  );
}

// type Artist = { artistId: string };

// function InfoArtist({ artistId }: Artist) {
//   const { artist } = useSpotifyApi({ artistId });
//   const genres = artist?.genres;
//   const url = artist?.external_urls.spotify;

//   if (!genres) {
//     console.log("can't load genres");
//     return null;
//   }

//   if (artistId) {
//     return (
//       <div className="hidden md:block">
//         <div
//           className={
//             genres?.length > 1
//               ? "hidden md:px-1 md:block text-sm mb-5"
//               : "hidden"
//           }
//         >
//           {genres?.map((genre, index) => (
//             <span key={index}>
//               {genre}
//               {index < genres.length - 1 ? ", " : ""}
//             </span>
//           ))}
//         </div>
//         <div className="flex flex-row items-center space-x-7 mb-6">
//           <div className="font-inter">
//             <p className="text-2xl font-extrabold">{artist?.followers.total}</p>
//             <p className="font-bold text-sm">seguidores</p>
//           </div>
//           <div className="flex flex-row space-x-3">
//             <a
//               href="https://www.instagram.com/levantamiento.neblina/"
//               target="_blank"
//             >
//               <img src={ig} />
//             </a>

//             <a href={url} target="_blank">
//               <img src={spotify} />
//             </a>
//           </div>
//         </div>
//         <div className="hidden md:flex md:flex-col space-y-3 text-base font-inter">
//           <p className="hidden md:block  text-base font-inter">
//             Revolución desde Buenos Aires.
//           </p>
//         </div>
//       </div>
//     );
//   }
// }
