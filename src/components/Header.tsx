import { motion } from "framer-motion";
import tag from "../assets/tag.png";

export function Header() {
  return (
    <header className="bg-white text-orange-500 p-10 flex items-center flex-col">
      <h1>
        <motion.img
          src={tag}
          alt="Tag logo"
          className="h-20"
          whileHover={{ scale: 1.1 }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </h1>
      <motion.h6
        className="font-semibold font-sans"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        Teslas Academic Group
      </motion.h6>
    </header>
  );
}
