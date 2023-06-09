import { motion } from "framer-motion";
import Image from "next/image";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

function AppBanner() {
  const [activeTheme] = useThemeSwitcher();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col sm:justify-between items-center sm:flex-row"
    >
      <div className="w-full md:w-1/3 text-left ">
        <Image
          className="rounded-full mb-4 hover:scale-105 transition-transform duration-200 ease-in-out"
          src="/me.png"
          alt="JulianCeleita"
          height={250}
          width={250}
        />

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
        >
          Hi, I am Julian Celeita
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
        >
          A Front-End Developer giving their best daily!
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
      >
        <img
          src={
            activeTheme === "dark"
              ? "/images/developer.svg"
              : "/images/developer-dark.svg"
          }
          alt="Developer"
        />
      </motion.div>
    </motion.section>
  );
}

export default AppBanner;
