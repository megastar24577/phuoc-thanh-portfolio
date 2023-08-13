import Image from "next/image";
import { motion } from "framer-motion";

function RightSection() {
  const loadingContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delayChildren: 0,
        staggerChildren: 0.2,
      },
    },
  };

  const loadingItemVariants = {
    visible: {
      y: [0, -10, 0],
      transition: {
        ease: "easeInOut",
        duration: 3,
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      variants={loadingContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={loadingItemVariants}
        className="w-3/5 h-3/4 top-0 left-0 right-0 bottom-0 m-auto absolute z-30 flex justify-center"
      >
        <Image
          src="/profile_image-crop.jpg"
          width={400}
          height={600}
          alt="Profile Image"
        />
      </motion.div>
      <motion.div
        variants={loadingItemVariants}
        className="border-8 border-black w-3/5 h-5/6 top-0 left-0 right-0 bottom-0 m-auto absolute z-20"
      />
      <motion.div
        variants={loadingItemVariants}
        className="bg-darker-brown w-9/12 h-96 absolute top-0 left-0 right-0 bottom-0 m-auto z-10"
      />
    </motion.div>
  );
}

export default RightSection;
