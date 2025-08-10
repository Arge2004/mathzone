
import Test from '@/components/Test'
import type { Quiz } from '@/types/Quiz'
import React from 'react'

export default async function TemaTest({params}: {params: {tema: string}}) {
  const { tema } = await params;
  const quizData: Quiz = await import(`@/data/${tema}Quiz`).then(mod => mod.quizData);

  return (
    <div>
      {quizData ? <Test quizData={quizData} /> : <div>Loading...</div>}
    </div>
  );
}
