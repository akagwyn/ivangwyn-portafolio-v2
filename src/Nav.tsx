import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 768);
  const showMobileMenu = !isDesktop;

  const handleChangeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    {
      isMenuOpen
        ? (document.body.style.overflow = "auto")
        : (document.body.style.overflow = "hidden");
    }
  };

  const handleChangeDesktopMenu = () => {
    setIsDesktopMenuOpen(!isDesktopMenuOpen);
  };

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
    <header className="m-auto w-full">
      {isDesktop && (
        <div>
          <ul className="fixed right-0 flex justify-end text-xl items-center py-5 px-5 mix-blend-difference z-10">
            <li className="flex text-neutral-50">
              <button
                className="px-2 uppercase"
                onClick={() => handleChangeDesktopMenu()}
              >
                Trabajos
              </button>
              <Link
                to="https://www.instagram.com/ivan.gwyn/"
                target="_blank"
                className="px-2 uppercase"
              >
                Instagram
              </Link>
            </li>
          </ul>
          {isDesktopMenuOpen && (
            <AnimatePresence>
              <DesktopMenu handleChangeDesktopMenu={handleChangeDesktopMenu} />
            </AnimatePresence>
          )}
        </div>
      )}

      {showMobileMenu && (
        <nav className="relative">
          <button
            className="fixed flex flex-col items-end column top-0 right-0 space-y-2 py-6 px-4 z-20 cursor-pointer mix-blend-difference"
            onClick={() => handleChangeMenu()}
          >
            <div
              className={` h-1 w-10 bg-neutral-50 transition-transform ease-in-out ${
                isMenuOpen ? "translate-y-1.5 rotate-45" : ""
              } `}
            ></div>
            <div
              className={` h-1 bg-neutral-50 transition-transform ease-in-out  ${
                isMenuOpen ? "w-10 -translate-y-1.5 -rotate-45" : "w-8"
              }`}
            ></div>
          </button>
          <AnimatePresence>
            {isMenuOpen && <MobileMenu handleChangeMenu={handleChangeMenu} />}
          </AnimatePresence>
        </nav>
      )}
    </header>
  );
}

function MobileMenu({ handleChangeMenu }: any) {
  const container = {
    hidden: { opacity: 0, x: 200 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 200 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "sweep",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, delay: 0 }}
      className="fixed z-10 flex inset-0 flex-col text-2xl text-neutral-50 bg-black bg-opacity-65 backdrop-blur-md"
    >
      <motion.div
        transition={{ staggerChildren: 0.5 }}
        className="flex flex-col justify-between mt-5 mb-40 mx-6 h-full w-scren "
      >
        <motion.div
          initial={{ opacity: 0.5, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ type: "tween" }}
        >
          <Link to="/">
            <p className="uppercase" onClick={() => handleChangeMenu()}>
              Ivan Gwyn
            </p>
          </Link>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="text-end space-y-5 flex flex-col"
        >
          <motion.li variants={item}>
            <Link to="/ayermaniana">
              <p className="uppercase " onClick={() => handleChangeMenu()}>
                Ayermaniana
              </p>
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link to="/bici-nena">
              <p className="uppercase" onClick={() => handleChangeMenu()}>
                BiciNena
              </p>
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link to="/club-audiovisual">
              <p className="uppercase " onClick={() => handleChangeMenu()}>
                El Club Audiovisual
              </p>
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link to="/dum-chica">
              <p className="uppercase " onClick={() => handleChangeMenu()}>
                Dum Chica
              </p>
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link to="/juan-cruz-caos">
              <p className="uppercase " onClick={() => handleChangeMenu()}>
                Juan Cruz Caos
              </p>
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link to="/sasha-eter">
              <p className="uppercase " onClick={() => handleChangeMenu()}>
                Sasha Eter
              </p>
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link to="/winona-riders">
              <p className="uppercase " onClick={() => handleChangeMenu()}>
                Winona Riders
              </p>
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link to="/levantamiento-neblina">
              <p className="uppercase " onClick={() => handleChangeMenu()}>
                Levantamiento Neblina
              </p>
            </Link>
          </motion.li>
        </motion.ul>

        <div className="text-base flex flex-col text-center underline">
          <Link to="https://www.instagram.com/ivan.gwyn/" target="_blank">
            <p className="m-2" onClick={() => handleChangeMenu()}>
              Instagram
            </p>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

function DesktopMenu({ handleChangeDesktopMenu }: any) {
  return (
    <motion.div
      initial={{ x: 450 }}
      animate={{ x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, delay: 0 }}
      className="space-y-4 space-x-7 flex flex-col fixed top-0 right-0 bg-black bg-opacity-65 backdrop-blur-md h-full z-30 w-[450px]"
    >
      <div>
        <button
          className="flex flex-col items-start column space-y-2 py-6 px-4 z-20 cursor-pointer"
          onClick={() => handleChangeDesktopMenu()}
        >
          <div className="h-1 w-8 bg-neutral-50 translate-y-1.5 rotate-45"></div>
          <div className="h-1 w-8 bg-neutral-50 -translate-y-1.5 -rotate-45"></div>
        </button>
      </div>

      <ul className="flex flex-col space-y-4 text-right pr-7 text-2xl">
        <Link to="/ayermaniana" className="uppercase">
          <p className=" " onClick={() => handleChangeDesktopMenu()}>
            Ayermaniana
          </p>
        </Link>
        <Link to="/bici-nena">
          <p className="uppercase" onClick={() => handleChangeDesktopMenu()}>
            BiciNena
          </p>
        </Link>
        <Link to="/club-audiovisual">
          <p className="uppercase " onClick={() => handleChangeDesktopMenu()}>
            El Club Audiovisual
          </p>
        </Link>
        <Link to="/dum-chica">
          <p className="uppercase " onClick={() => handleChangeDesktopMenu()}>
            Dum Chica
          </p>
        </Link>
        <Link to="/juan-cruz-caos">
          <p className="uppercase " onClick={() => handleChangeDesktopMenu()}>
            Juan Cruz Caos
          </p>
        </Link>
        <Link to="/sasha-eter">
          <p className="uppercase " onClick={() => handleChangeDesktopMenu()}>
            Sasha Eter
          </p>
        </Link>
        <Link to="/winona-riders">
          <p className="uppercase " onClick={() => handleChangeDesktopMenu()}>
            Winona Riders
          </p>
        </Link>
        <Link to="/levantamiento-neblina">
          <p className="uppercase " onClick={() => handleChangeDesktopMenu()}>
            Levantamiento Neblina
          </p>
        </Link>
      </ul>
    </motion.div>
  );
}
