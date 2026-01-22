import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";
import { Header } from "../components/Header";
import { motion } from "framer-motion";

export function LevelPage() {
  const { level } = useParams(); // e.g., "100-level"
  const numericLevel = level?.split("-")[0] || ""; // "100"
  const displayLevel = numericLevel.toUpperCase() + "-LEVEL";

  // Filter courses by this level
  const levelCourses = courses.filter(
    (course) => course.level === numericLevel,
  );

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="min-h-screen bg-black text-white p-10 flex flex-col items-center gap-10 overflow-x-hidden"
      >
        <h1 className="text-3xl font-bold text-orange-500">{displayLevel}</h1>

        <div className="grid grid-cols-1 gap-10">
          {levelCourses.length === 0 ? (
            <p className="text-white/70 italic">
              No courses found for this level.
            </p>
          ) : (
            levelCourses.map((course) => (
              <article
                key={course.code}
                className="max-w-lg p-6 bg-white/5 border border-white/10 rounded-xl
                text-white text-lg italic mb-10 transition-transform duration-200 hover:scale-[1.02]"
              >
                <h2 className="text-xl font-bold text-center mb-4">
                  {course.code} - {course.title}
                </h2>
                <p className="line-clamp-5">{course.description}</p>

                <div className="flex flex-col sm:flex-row gap-5 mt-4 justify-center">
                  <Link
                    to={`/courses/${course.code}/quiz`}
                    className="px-4 py-2 bg-orange-500 text-black font-semibold rounded hover:bg-orange-600 transition text-center"
                  >
                    Take Quiz
                  </Link>
                  <Link
                    to={`/courses/${course.code}/flashcards`}
                    className="px-4 py-2 bg-orange-500 text-black font-semibold rounded hover:bg-orange-600 transition text-center"
                  >
                    Flash Cards
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>

        <Link
          to="/"
          className="mt-6 px-4 py-2 bg-orange-500 text-black font-semibold rounded hover:bg-orange-600 transition"
        >
          ← Back to Landing Page
        </Link>
      </motion.div>
    </>
  );
}
