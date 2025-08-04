"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Header() {
  const [hidden, setHidden] = useState(true);

  return (
    <header className="bg-white m-2.5 rounded-2xl shadow-lg">
      <div className="px-4 sm:px-6 lg:px-8 relative ">
        <div className="flex h-24 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a
              className="flex items-center justify-center gap-13 text-sky-800"
              href="#"
            >
              <Image src={logo} alt="MathZone Logo" width={54} height={54} />
              <span className="text-4xl font-bold notranslate">MathZone</span>
            </a>
          </div>

          <div
            className={` ${
              hidden
                ? "opacity-0 translate-y-[-10%] pointer-events-none"
                : "opacity-100 translate-y-0"
            } transition-all duration-1500 ease-in-out transform fixed inset-0 z-10 bg-blue-950/70 h-screen w-screen md:block`}
          >
            <nav
              aria-label="Global"
              className="h-screen flex flex-col justify-center items-center"
            >
              <ul className="flex flex-col justify-center items-center gap-24 text-3xl">
                <li>
                  <a
                    className="text-white min-w-45 text-center bg-sky-600 block p-2.5 rounded-2xl transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Nosotros{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white min-w-45 text-center bg-sky-600 block p-2.5 rounded-2xl transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Temas{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white min-w-45 text-center bg-sky-600 block p-2.5 rounded-2xl transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Grados{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white min-w-45 text-center bg-sky-600 block p-2.5 rounded-2xl transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Test{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="block md:hidden md:pointer-events-none">
              <button
                onClick={() => setHidden(!hidden)}
                className="rounded-sm absolute right-5 top-7 z-20 bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 "
              >
                {hidden ? (
                  // Ícono hamburguesa
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 transition-all duration-1000 ease-in-out"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  // Ícono X
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 transition-all duration-1000 ease-in-out rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
