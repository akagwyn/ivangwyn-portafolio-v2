import Gallery from "../Gallery";
import { Link } from "react-router-dom";
// import useSpotifyApi from "../useSpotifyApi";
import ig from "../icons/ig.svg";
// import spotify from "../icons/spotify.svg";

export default function BiciNena() {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="fixed bg-neutral-50 md:w-5/12 text-neutral-50 mix-blend-difference md:mix-blend-normal md:px-7 md:flex md:flex-col md:justify-start md:text-neutral-950 md:h-screen ">
        <div className="md:flex md:flex-col md:space-y-20 md:pt-5">
          <Link to="/">
            <p className="hidden md:block md:text-xl uppercase md:px-1">
              Ivan Gwyn
            </p>
          </Link>
          <div className="fixed top-0 left-0 p-4 text-3xl uppercase md:p-0 md:pb-1 md:static md:text-6xl md:w-full">
            BiciNena
          </div>
        </div>
        <div className="hidden md:flex md:flex-row md:items-center md:space-x-7 md:mb-6">
          <div className="flex flex-row space-x-3">
            <a href="https://www.instagram.com/bicinena/" target="_blank">
              <img src={ig} />
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <p className="hidden md:block md:px-1 text-base font-inter">
            Desde los confines de Córdoba nace esta banda de pibxs para lidiar
            con la pasión desaforada que estalla en sus pechos. Encarando un
            sonido soft-punk cutecore, furioso y melancólico, Bicinena te ofrece
            una experiencia en vivo tan romántica como agresiva, puesta y
            dispuesta a convidarte en sus juegos.
          </p>
          <p className="hidden md:block md:px-1 text-base font-inter">
            Conformada por Guadalupe Guadaña en la voz; Parka Vasta El Ruso en
            el bajo; Sati Sativa Divanian en guitarra y María Arcadia Ramona del
            Rosario en la batería. Desde principios de 2023 la banda tuvo sus
            primeras presentaciones en vivo sumando público cordobés en
            numerosas fechas por los escenarios de la ciudad e interior.
            Compartió con diversas bandas locales y de otras provincias dejando
            su sello inconfundible que combina el pogo y el baile con sus letras
            sensibles y frágiles como una bomba. La puesta en escena propone un
            universo estético propio de colores pastel y bicis callejeras.
          </p>
          <p className="hidden md:block md:px-1 text-base font-inter">
            Actualmente la banda se encuentra en proceso de grabación de sus
            primeras canciones. Podés ver sus fotos, videos y saber de sus
            próximas fechas a través de su cuenta de Instagram. También
            conocerles más íntimamente a través de sus documentales sobre el
            Bicitour, “Bicitour y otros romances” y “Si no tuviera nada”
            (disponibles en Youtube), festivales realizados en conjunto con los
            Bicivoladores conectando las movidas platense y cordobesas.
          </p>
        </div>
        {/* <InfoArtist
          artistId={"6qOV8cecEpZZzeVDz8ye2q?si=gS3vXBUNSQOkGrVdC0XbFg"}
        /> */}
      </div>
      <Gallery albumId="72177720312336748" />
    </div>
  );
}

// type Artist = { artistId: string };

// function InfoArtist({ artistId }: Artist) {
//   const { artist } = useSpotifyApi({ artistId });
//   const genres = artist?.genres;

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
//             <a href="https://www.instagram.com/bicinena/" target="_blank">
//               <img src={ig} />
//             </a>
//             <a>
//               <img src={spotify} />
//             </a>
//           </div>
//         </div>
//         <p className="hidden md:block md:px-1 text-base font-inter">
//           Un trío de bajo, batería y voz con un sonido veloz y crudo que te
//           arrastra de un ritmo frenético al calor de un baile interminable.
//           Melodías filosas, letras incorrectas definen una impronta actual con
//           referencias de décadas pasadas. Dum Chica surge en Buenos Aires a
//           finales de 2021 originalmente como dúo, donde realizaron sus primeras
//           presentaciones en vivo sin batería. <br />
//           Las canciones simples pero fuertes pedían este tercer integrante para
//           potenciar el objetivo principal: la experiencia en vivo. De una manera
//           ascendente el trío comenzó a pisar escenarios de Buenos Aires,
//           conquistando al público que responde de forma bestial ante la música.
//         </p>
//       </div>
//     );
//   }
// }
