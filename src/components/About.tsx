"use client";
import { motion } from "framer-motion";

type Props = {};

export function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex text-blue-100 flex-col relative min-h-screen text-center md:text-left md:flex-row max-w-4xl px-10 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase justify-evenly tracking-[20px] text-blue-100 text-2xl">
        <span className="opacity-0 md:hidden">.</span>About
      </h3>

      <motion.img
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        src="/Image2.jpg"
        className="mx-auto mt-40 md:mt-0 mb-16  md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 lg:w-80 lg:h-80 xl:w-72 xl:h-96"
        alt="Foto de perfil del autor"
      />

      <div className="space-y-16 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is a little background</h4>
        <p className="text-left text-lg">
          I&apos;m a Frontend Developer with over 2 years of experience. I
          consider myself an enthusiastic, proactive, creative, and team
          oriented guy. I&apos;m attentive to requests and requirements,
          excelling in web development, problem solving, and delivering high
          quality results.
        </p>
      </div>
    </motion.div>
  );
}
