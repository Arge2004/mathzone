import React from 'react'

type StepOperationProps = {
  title: string;
  step: number;
}

export default function StepOperation({ title, step }: StepOperationProps) {
  return (
    <div className='flex items-center  px-10 gap-5'>
        <span className='bg-sky-600 text-xl font-bold p-6 w-10 h-10 rounded-full flex items-center justify-center text-white'>{step}</span>
        <p>{title}</p>
    </div>
  )
}
