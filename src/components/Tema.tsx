import React from "react";
import Image from "next/image";
import type { Tema as TemaType } from "@/data/Temas";

interface TemaProps extends TemaType {
  test?: boolean;
}

export default function Tema({ title, description, image, test=false}: TemaProps) {
  const eliminateAccents = (str: string) => {
    const res = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return res;
  };
  return (
    <div className="flex items-center gap-4">
      <Image alt={image.alt} src={image.src} width={120} height={100} />

      <div className="relative">
        <h3 className="font-bold text-2xl lg:text-3xl text-gray-900 sm:text-lg">
          {title}
        </h3>

        <p className="mt-0.5 text-gray-700">{description}</p>


        <a
          className="absolute animate-arrow-move right-0 top-1 inline-block rounded-full border border-white bg-sky-900 p-1 text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
          href={test ? `/test/${eliminateAccents(title)}` : `/tema/${eliminateAccents(title)}`}
        >

          <svg
            className="size-4 shadow-sm rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
            
          </svg>
        </a>
      </div>
    </div>
  );
}
