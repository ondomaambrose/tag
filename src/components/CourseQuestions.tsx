import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export function CourseQuestions() {
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const ref = doc(db, "questions", "200lvl-dld");
      const snap = await getDoc(ref);

      if (snap.exists()) {
        const dataStr = snap.data().questions; // this is a string
        const questionsArray = JSON.parse(dataStr); // convert string → array
        console.log("Parsed questions:", questionsArray);
        setQuestions(questionsArray);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="text-white">
      {questions?.map((q, i) => (
        <p key={q.id || i}>
          {i + 1}. {q.question}
        </p>
      ))}
    </div>
  );
}
