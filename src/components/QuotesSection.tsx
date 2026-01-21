import { motion } from "framer-motion";
import { quotes } from "../data/quotes";

export function QuoteSection() {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col gap-8 py-12 overflow-x-hidden">
      {quotes.map((item, index) => {
        // Determine animation direction
        const isLeft = index % 2 === 0;

        return (
          <motion.div
            key={item.id}
            className={`w-full flex ${isLeft ? "justify-start" : "justify-end"}`}
            initial={{ x: isLeft ? 100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
          >
            <article className="max-w-lg p-6 bg-white/5 border border-white/10 rounded-xl text-white text-lg italic">
              <p>“{item.quote}”</p>
              <p className="mt-3 text-sm font-semibold text-orange-400">
                — {item.author}
              </p>
              {item.forfun && (
                <p className="mt-1 text-sm text-white/70">💡 {item.forfun}</p>
              )}
            </article>
          </motion.div>
        );
      })}
    </section>
  );
}
