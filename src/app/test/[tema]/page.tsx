"use client";
import Test from "@/components/Test";
import type { Quiz } from "@/types/Quiz";
import { useParams } from "next/navigation";
import React from "react";

export default function TemaTest() {
  const { tema } = useParams() as { tema: string };
  const [quizData, setQuizData] = React.useState<Quiz | null>(null);

  React.useEffect(() => {
    let isMounted = true;
    import(`@/data/${tema}Quiz`).then((mod) => {
      if (isMounted) setQuizData(mod.quizData);
    });
    return () => {
      isMounted = false;
    };
  }, [tema]);

  return (
    <div className="bg-white m-2.5 p-6 xl:py-15 min-h-[750px] xl:px-70  rounded-2xl shadow-lg flex flex-col xl:flex-row xl:justify-center xl:items-center gap-6 xl:gap-15 ">
      <div className="flex flex-col mx-auto text-center items-center">
        <h2 className="h2-temas">{quizData?.title}</h2>
        <p className="text-center">{quizData?.synopsis}</p>
      </div>
      {quizData ? (
        <Test quizData={quizData} />
      ) : (
        <div className="text-center text-white animate-pulse">Loading...</div>
      )}
    </div>
  );
}
