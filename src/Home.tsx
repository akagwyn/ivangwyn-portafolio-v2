// import { Link } from "react-router-dom";
// import useFlickrApiHome from "./useFlickrApiHome";
// import useFlickrApiGallery from "./useFlickrApiGallery";
import morfar from "./video/morfar.mp4";
import horizontal from "./video/horizontal.mp4";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export default function Home() {
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <main className=" overscroll-none">
      <h1 className="fixed left-0 top-0 py-4 px-4 text-5xl md:text-8xl tracking-tight mix-blend-difference">
        FOTOGRAFIA
      </h1>
      <p className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl tracking-tight mix-blend-difference">
        IVAN GWYN
      </p>
      <h1 className="fixed right-0 bottom-0 py-4 px-4 text-5xl md:text-8xl tracking-tight mix-blend-difference">
        CONCIERTOS
      </h1>

      <div className="z-0 h-screen">
        <VideoBg muted autoPlay loop preload="auto" src={horizontal}></VideoBg>
      </div>
    </main>
  );
}

// type FlickrGallery = { albumId: string };

// function Gallery({ albumId }: FlickrGallery) {
//   const { photos } = useFlickrApiGallery({ albumId });

//   return (
//     <main className={`grid grid-cols-1 md:grid-cols-4`}>
//       {photos.map((photo, index) => (
//         <div className="" key={index}>
//           <img
//             className="h-full w-full object-cover"
//             loading="lazy"
//             src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`}
//             alt={photo.title}
//           />
//         </div>
//       ))}
//     </main>
//   );
// }
