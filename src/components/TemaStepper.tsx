import React from "react";

type Step = {
  title: string;
};

type TemaStepperProps = {
  steps: Step[];
  currentStep: number;
  children: React.ReactNode;
};

export default function TemaStepper({
  steps,
  currentStep,
  children,
}: TemaStepperProps) {
  const { 0: firstChild, 1: secondChild } = React.Children.toArray(children);
  return (
    <div className="mx-auto">
      <ol className="items-center justify-center w-full space-y-4 flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
        {steps.map((step, idx) => (
          <li
            key={step.title}
            className={`flex items-center ${
              idx === currentStep - 1
                ? "text-blue-600 dark:text-blue-500"
                : "text-gray-500 dark:text-gray-400 hidden "
            } 
                space-x-2.5 rtl:space-x-reverse`}
          >
            {firstChild}
            <span
              className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${
                idx === currentStep - 1
                  ? "border-blue-600 dark:border-blue-500"
                  : "border-gray-500 dark:border-gray-400"
              }`}
            >
              {currentStep}
            </span>
            <span>
              <h3 className="font-medium leading-tight text-xl">
                {step.title}
              </h3>
            </span>
            {secondChild}
          </li>
        ))}
      </ol>
    </div>
  );
}
