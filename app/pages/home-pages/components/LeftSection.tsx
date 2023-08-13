import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Image from "next/image";

function LeftSection() {
  const onLoadVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const animatedAquiredContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const animateAcquiredItemVars = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="absolute bg-light-brown/[0.75] w-full h-full">
      <div className="absolute top-20 left-20 right-0">
        <div className="text-5xl font-extrabold w-full">
          <motion.div
            variants={onLoadVariants}
            initial="hidden"
            animate="visible"
          >
            <div>{`I'm a`}</div>
            <div className="mt-4">
              <Typewriter
                words={[`Software Engineer`, `Music Producer`, `Video Editor`]}
                typeSpeed={150}
                loop={true}
                cursor={true}
              />
            </div>
          </motion.div>

          <div className="border-b-2 border-black/[0.5] w-7/12 mt-5"></div>
        </div>
        <motion.div
          variants={onLoadVariants}
          initial="hidden"
          animate="visible"
          className="w-2/3 mt-14"
        >
          <div className="text-2xl">
            “Learning to write programs stretches your mind, and helps you think
            better, creates a way of thinking about things that I think is
            helpful in all domains.”
          </div>
          <div className="text-xl mt-2">- Bill Gates</div>
        </motion.div>
        <motion.div
          variants={animatedAquiredContainerVariants}
          initial="hidden"
          animate="visible"
          className="w-full mt-14 grid grid-cols-3 gap-4"
        >
          <motion.div
            variants={animateAcquiredItemVars}
            className="col-span-1 font-extrabold"
          >
            <div className="text-6xl">2+</div>
            <div className="text-lg">Years of experience</div>
          </motion.div>
          <motion.div
            variants={animateAcquiredItemVars}
            className="col-span-1 font-extrabold"
          >
            <div className="text-6xl">8</div>
            <div className="text-lg">Projects involve</div>
          </motion.div>
          <motion.div
            variants={animateAcquiredItemVars}
            className="col-span-1 font-extrabold"
          >
            <div className="text-6xl">2</div>
            <div className="text-lg">Software Domains</div>
          </motion.div>
        </motion.div>
        <div className="w-2/3 mt-14">
          <div>Find out more</div>
          {/* <Image
            src="/icons/arrow-long-right"
            width={50}
            height={50}
            alt="arrow-long-right"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
