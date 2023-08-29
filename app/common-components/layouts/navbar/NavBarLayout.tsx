"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import NavLink from "./components/NavLink";
import "./styles/navbar.css";
import UrlConstant from "@/app/utils/constants/UrlConstant";
import { useEffect, useRef, useState } from "react";

const NavBarLayout = () => {
  const [isHiddenNavBar, setIsHiddenNavBar] = useState(false);
  let prevScrollpos = useRef(0);

  const handleHiddenNavbar = () => {
    let currScrollpos = window.scrollY;
    if (currScrollpos > prevScrollpos.current) {
      setIsHiddenNavBar(true);
    } else {
      setIsHiddenNavBar(false);
    }
    prevScrollpos.current = currScrollpos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHiddenNavbar);
    //Remove event listener when unmount
    return () => {
      window.removeEventListener("scroll", handleHiddenNavbar);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed right-0 left-0 z-50 py-7 px-16 bg-darker-green/[0.3] backdrop-blur-sm flex justify-between ${
        isHiddenNavBar ? "-top-24" : "top-0"
      }`}
    >
      <a href="" className="font-extrabold my-auto text-3xl text-white">
        <Typewriter
          words={[`Hi I'm thanhpphan`]}
          typeSpeed={120}
          cursor={true}
        />
      </a>
      <ul className="flex my-auto font-bold text-white">
        <NavLink linkText={"HOME"} url={UrlConstant.HomePageUrl} />
        <NavLink linkText={"ABOUT"} url={UrlConstant.AboutMeUrl} />
        <NavLink linkText={"TECHNOLOGIES"} url={UrlConstant.TechnologiesUrl} />
        <NavLink linkText={"EXPERIENCES"} />
        <button className="px-14">MY RESUME</button>
      </ul>
    </motion.div>
  );
};

export default NavBarLayout;
