// // src/AdminUpload.tsx
// import { useState } from "react";
// import { db } from "./firebase";
// import { doc, writeBatch } from "firebase/firestore";
// //import { courseQuestionMap } from "./data/questions";

// export const AdminUpload = () => {
//   const [status, setStatus] = useState("Idle");

//   const uploadData = async () => {
//     setStatus("Starting scalable upload...");

//     try {
//       // 1. Initialize variables
//       let batch = writeBatch(db);
//       let currentBatchSize = 0;
//       let totalUploaded = 0;
//       const BATCH_LIMIT = 450; // Safety margin (limit is 500)

//       // 2. Loop through every course
//       for (const [courseCode, questions] of Object.entries(courseQuestionMap)) {
//         console.log(
//           `Processing course: ${courseCode} (${questions.length} questions)`,
//         );

//         // 3. Loop through every question in that course
//         for (const question of questions) {
//           const docRef = doc(
//             db,
//             "courses",
//             courseCode,
//             "questions",
//             question.id.toString(),
//           );

//           // Add to current batch
//           batch.set(docRef, question);
//           currentBatchSize++;
//           totalUploaded++;

//           // 4. CHECK LIMIT: If batch is full, commit and start a new one
//           if (currentBatchSize >= BATCH_LIMIT) {
//             console.log(`Committing batch of ${currentBatchSize} questions...`);
//             await batch.commit(); // Send to Firebase

//             // Reset for next batch
//             batch = writeBatch(db);
//             currentBatchSize = 0;
//             setStatus(`Uploading... (${totalUploaded} done so far)`);
//           }
//         }
//       }

//       // 5. Commit any remaining questions that didn't fill a complete batch
//       if (currentBatchSize > 0) {
//         console.log(
//           `Committing final batch of ${currentBatchSize} questions...`,
//         );
//         await batch.commit();
//       }

//       setStatus(
//         `Success! Uploaded ${totalUploaded} questions across ${
//           Object.keys(courseQuestionMap).length
//         } courses.`,
//       );
//     } catch (error) {
//       console.error(error);
//       setStatus("Error: " + String(error));
//     }
//   };

//   return (
//     <div className="p-10 text-center">
//       <h1 className="text-2xl font-bold mb-4">Database Seeder</h1>
//       <p className="text-sm text-gray-500 mb-4">
//         Scalable mode: Handles unlimited courses/questions
//       </p>
//       <button
//         onClick={uploadData}
//         className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 font-semibold"
//       >
//         Upload All Data to Firebase
//       </button>
//       <p className="mt-4 font-mono text-sm text-gray-700">{status}</p>
//     </div>
//   );
// };
