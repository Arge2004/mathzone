"use client";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";

type ExplicacionSectionProps = {
  tema: string;
  step?: number;
  children: React.ReactNode;
};

export default function ExplicacionSection({
  tema,
  step,
  children,
}: ExplicacionSectionProps) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!tema) return;

    setIsLoading(true);

    import(`@/temas/${tema.toLowerCase()}/${tema}${step}`)
      .then((mod) => {
        setComponent(() => mod.default);
      })
      .finally(() => setIsLoading(false));
  }, [tema, step]);

  if (!Component) return null;

  if (isLoading) return <p>Cargando...</p>;

  return (
    <div className="bg-white m-2.5 flex flex-col gap-5 lg:gap-10 my-4 py-10 rounded-3xl shadow-lg h-full">
      {children}
      <Component />
      {children}
      <Link
        href="/tema"
        className="text-white bg-sky-700 mt-3 py-3 px-5 rounded-2xl mx-auto block max-w-50 text-center"
      >
        Volver a los temas
      </Link>
    </div>
  );
}
