"use client";

import React from "react";
import { useParams } from "next/navigation";
import ExplicacionSection from "@/sections/ExplicacionSection";
import TemaStepper from "@/components/TemaStepper";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function TemaExplicacion() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [steps, setSteps] = React.useState<{ title: string }[]>([]);
  const params = useParams();
  const tema = params.tema as string;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hacer scroll al principio del contenedor cuando se cambia de paso
    if (containerRef.current) {
      const offset = 150; // altura aprox. del header
      const top =
        containerRef.current.getBoundingClientRect().top +
        window.scrollY -
        offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    import(`@/temas/${tema.toLowerCase()}/steps.ts`).then((mod) => {
      setSteps(mod.steps);
    });
  }, [currentStep, tema]);

  return (
    <div ref={containerRef}>
      <ExplicacionSection tema={tema} step={currentStep}>
        <TemaStepper steps={steps} currentStep={currentStep}>
          {currentStep > 1 ? (
            <svg
              className="ltr:rotate-180 w-6 h-6"
              onClick={() => setCurrentStep(currentStep - 1)}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          ) : (
            <></>
          )}
          {currentStep < steps.length ? (
            <svg
              className="rtl:rotate-180 w-6 h-6"
              onClick={() => setCurrentStep(currentStep + 1)}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          ) : (
            <></>
          )}
        </TemaStepper>
      </ExplicacionSection>
    </div>
  );
}
