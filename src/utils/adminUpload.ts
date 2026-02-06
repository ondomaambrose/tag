import { tmc411Questions } from "../data/questions"; // Make sure this path points to your updated file
import { db } from "../firebase";
import { writeBatch, doc } from "firebase/firestore";

export const uploadTMC411 = async () => {
  // CRITICAL FIX: Make sure this matches your database folder exactly (No space)
  const COURSE_CODE = "TMC 311";

  if (
    !confirm(
      `Ready to OVERWRITE questions for ${COURSE_CODE}? This will update ${tmc411Questions.length} questions.`,
    )
  )
    return;

  const batch = writeBatch(db);

  tmc411Questions.forEach((q) => {
    const docRef = doc(
      db,
      "courses",
      COURSE_CODE,
      "questions",
      q.id.toString(), // This ID (1, 2, 3...) finds the old question and replaces it
    );
    // batch.set() replaces the existing document with the new data
    batch.set(docRef, q);
  });

  await batch.commit();
  alert(`✅ TMC511 Updated! (${tmc411Questions.length} questions rewritten)`);
};
