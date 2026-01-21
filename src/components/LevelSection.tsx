import { motion } from "framer-motion";

export function LevelSection() {
  const levels = [
    "100 LEVEL",
    "200 LEVEL",
    "300 LEVEL",
    "400 LEVEL",
    "500 LEVEL",
  ];

  return (
    <section className="w-full flex flex-col items-center gap-8 py-12 overflow-x-hidden">
      {/* Header text */}
      <motion.p
        className="font-sans text-orange-500 text-2xl font-bold text-center"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }} // Animate when in viewport
        viewport={{ once: true, amount: 0.5 }} // Trigger once, when 50% visible
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Stay Ahead Of The New ALDC Exam Structure
      </motion.p>

      {/* Levels */}
      <motion.div
        className="w-full max-w-4xl mx-auto flex flex-col"
        initial="hidden"
        whileInView="visible" // Animate when visible
        viewport={{ once: true, amount: 0.3 }} // Trigger once, when 30% visible
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15, // stagger each level
            },
          },
        }}
      >
        {levels.map((level) => (
          <motion.div
            key={level}
            className="
              w-full h-24 flex items-center justify-center
              text-white text-2xl font-semibold
              border-b border-white/10
              last:border-b-0 hover:bg-orange-500
            "
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {level}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
