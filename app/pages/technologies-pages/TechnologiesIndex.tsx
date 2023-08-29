"use client";
import SecondaryHeader from "@/app/common-components/headers/SecondaryHeader";
import LogoCSS from "@/public/icons/logos/LogoCSS";
import LogoHTML5 from "@/public/icons/logos/LogoHTML5";
import LogoJavaScript from "@/public/icons/logos/LogoJavaScript";
import LogoMySQL from "@/public/icons/logos/LogoMySQL";
import LogoNextJS from "@/public/icons/logos/LogoNextJS";
import LogoNodeJS from "@/public/icons/logos/LogoNodeJS";
import LogoReact from "@/public/icons/logos/LogoReact";
import LogoReactNative from "@/public/icons/logos/LogoReactNative";
import LogoRedux from "@/public/icons/logos/LogoRedux";
import LogoTailwind from "@/public/icons/logos/LogoTailwind";
import LogoTypeScript from "@/public/icons/logos/LogoTypeScript";
import LogoCard from "./components/LogoCard";
import { motion } from "framer-motion";

function TechnologiesIndex() {
  const listLogo = [
    { text: "JS", element: <LogoJavaScript /> },
    { text: "HTML", element: <LogoHTML5 /> },
    { text: "CSS", element: <LogoCSS /> },
    { text: "TypeScript", element: <LogoTypeScript /> },
    { text: "NodeJS", element: <LogoNodeJS /> },
    { text: "React", element: <LogoReact /> },
    { text: "ReactNative", element: <LogoReactNative /> },
    { text: "Redux", element: <LogoRedux /> },
    { text: "NextJS", element: <LogoNextJS /> },
    { text: "Tailwind", element: <LogoTailwind /> },
    { text: "MySQL", element: <LogoMySQL /> },
  ];

  const animateLogoContainter = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div id="technologies" className="relative mt-80 w-3/5 mx-auto h-screen">
      <SecondaryHeader headerContent={"TECHNICAL STACK"} />
      <motion.div
        variants={animateLogoContainter}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.8,
        }}
        className="grid grid-cols-8 mt-16 gap-2 px-16 py-12 rounded-lg"
      >
        {listLogo.map((logoObject, index) => (
          <LogoCard logoObject={logoObject} key={index} />
        ))}
      </motion.div>
    </div>
  );
}

export default TechnologiesIndex;
