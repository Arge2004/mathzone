import React from "react";

type Step = {
  title: string;
};

type TemaStepperProps = {
  steps: Step[];
  currentStep: number;
  onclick?: (step: number) => void;
};

export default function TemaStepper({
  steps,
  currentStep,
  onclick = () => {},
}: TemaStepperProps) {
  return (
    <div className="mx-auto">
      <ol className="flex 2xl:gap-10 lg:px-10 items-center justify-center w-full space-y-4  sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
        {steps.map((step, idx) => (
          <li 
            key={step.title}
            className={`flex items-center my-0 ${
              idx === currentStep - 1
                ? "text-blue-600 dark:text-blue-500"
                : "text-gray-500 dark:text-gray-400 hidden 2xl:flex "
            } 
                space-x-2.5 rtl:space-x-reverse 2xl:hover:cursor-pointer 2xl:hover:scale-110 transition-transform duration-500`}
            onClick={() => onclick(idx + 1)}
          >
            <span
              className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${
                idx === currentStep - 1
                  ? "border-blue-600 dark:border-blue-500 2xl:font-bold"
                  : "border-gray-500 dark:border-gray-400"
              }`}
            >
              {idx + 1}
            </span>
            <span>
              <h3 className="font-medium leading-tight text-center text-xl">
                {step.title}
              </h3>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
