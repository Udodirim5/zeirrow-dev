import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { myInfo } from "../../data/data";
import Image from "next/image";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="container mx-auto px-6 py-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-32 h-32 rounded-full border-4 border-cyan-400/30 bg-gray-800 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 animate-pulse">
              <Image
                src={myInfo.image}
                alt="Avatar"
                className="w-full h-full object-cover object-center"
                fill
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-6xl font-bold mb-4"
        >
          <span className="via-purple-600 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            {myInfo.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl"
        >
          <span className="text-cyan-400">React</span> Developer &{" "}
          <span className="text-blue-400">Specialist</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.a
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(34, 211, 238, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium flex items-center gap-2"
            href="/cv"
            target="_blank"
          >
            <FiDownload /> Download CV
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-3 rounded-md border border-cyan-400/30 bg-gray-800/50 text-cyan-400 font-medium hover:bg-gray-800 transition-colors"
          >
            View Projects
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <div className="w-8 h-8 border-b-2 border-r-2 border-cyan-400 rotate-45"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
