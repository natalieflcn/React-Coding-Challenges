import { useContext } from "react";
import { QuizContext } from "./QuizContext";

export default function useQuiz() {
  const context = useContext(QuizContext);

  if (useQuiz === undefined)
    throw new Error("Quiz Context used outside of scope.");

  return context;
}
