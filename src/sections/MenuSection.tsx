import React from "react";
import Link from "next/link";

export default function MenuSection() {
  return (
    <section className="mb-5 z-10 flex flex-col md:justify-center md:max-w-1/2 lg:max-w-1/3 md:mx-auto text-center gap-6 p-6 text-xl lg:text-2xl">
      Puedes escoger estudiar por temas o por grado:
      <div className="flex flex-col gap-6">
        <Link
          className="group flex items-center justify-between gap-4 rounded-lg border border-sky-600 bg-sky-600 px-5 py-3 transition-colors hover:bg-transparent focus:ring-3 focus:outline-hidden"
          href="/tema"
        >
          <span className="font-medium text-white transition-colors group-hover:text-sky-600">
            Temas
          </span>

          <span className="shrink-0 rounded-full border border-current bg-white p-2 text-sky-600">
            <svg
              className="size-5 shadow-sm rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </Link>

        <Link
          className="group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-sky- transition-colors hover:bg-sky-600 focus:ring-3 focus:outline-hidden"
          href="/grados"
        >
          <span className="font-medium transition-colors group-hover:text-white">
            {" "}
            Grados{" "}
          </span>

          <span className="shrink-0 rounded-full border border-sky-600 bg-white p-2">
            <svg
              className="size-5 shadow-sm rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </Link  >
      </div>
      <p>
        Tambien puedes evaluar tus conocimientos:
      </p>
      <Link
          className="group flex items-center justify-between gap-4 rounded-lg border border-sky-600 bg-sky-600 px-5 py-3 transition-colors hover:bg-transparent focus:ring-3 focus:outline-hidden"
          href="/test"
        >
          <span className="font-medium text-white transition-colors group-hover:text-sky-600">
            Test
          </span>

          <span className="shrink-0 rounded-full border border-current bg-white p-2 text-sky-600">
            <svg
              className="size-5 shadow-sm rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </Link>
    </section>
  );
}
