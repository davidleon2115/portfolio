"use client";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type Props = {};

export function Header({}: Props) {
  return (
    <header className="fixed top-0 left-0 right-0  flex items-start justify-between p-5 lg:max-w-7xl mx-auto z-20 xl:item-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
        }}
        className="flex flex-row items-center gap-3"
      >
        <SocialIcon
          className="cursor-pointer"
          url="https://github.com/davidleon2115"
          fgColor="#7478FF"
          bgColor="#0008FF26"
        />
        <SocialIcon
          className="cursor-pointer"
          url="https://www.linkedin.com/in/davidleon99"
          fgColor="#7478FF"
          bgColor="#0008FF26"
        />
        <SocialIcon
          className="cursor-pointer"
          url="https://x.com/davidlandres99"
          fgColor="#7478FF"
          bgColor="#0008FF26"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
        }}
        className="flex flex-row items-center text-yellow-400 cursor-pointer gap-3"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="#7478FF"
          bgColor="#0008FF26"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-[#7478FF] dark:text-[#7478FF]">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}
