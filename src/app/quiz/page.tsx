"use client";

import dynamic from "next/dynamic";

const QuizPage = dynamic(() => import("./QuizPage"), {
  ssr: false,
  loading: () => <div className="text-white text-center p-10">Carregando quiz...</div>,
});

export default function QuizWrapper() {
  return <QuizPage />;
}
