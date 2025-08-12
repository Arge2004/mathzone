"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { useState } from "react";

export default function MenuOverlay() {
  const [hidden, setHidden] = useState(true);
  return (
    <div className="flex h-24 items-center text-sky-800 justify-between ">
      <div className="flex items-center gap-2 xl:gap-4 xl:min-w-72">
        <Link href="/" className="w-14">
          <Image src={logo} alt="MathZone Logo" width={54} height={54} />
        </Link>
        <span className="text-2xl font-bold notranslate">The Mathematics Web</span>
      </div>

      <div
        className={` ${
          hidden
            ? "opacity-0 translate-y-[-100%]"
            : "opacity-100 translate-y-0 z-10"
        } transition-all duration-1000 ease-in-out transform -z-10 lg:z-0 fixed inset-0   bg-blue-950/70 h-screen lg:max-h-32 w-screen md:block lg:static lg:translate-y-0 lg:opacity-100 lg:bg-transparent lg:transition-none`}
      >
        <nav
          aria-label="Global"
          className="h-screen lg:max-h-32 flex flex-col justify-center lg:flex-row lg:justify-end items-center"
        >
          <ul className="flex flex-col justify-center lg:flex-row items-center gap-24 lg:gap-8 lg:font-bold text-3xl">
            <li>
              <Link
                className="text-white min-w-45 text-center bg-sky-600 block lg:inline lg:bg-transparent lg:text-sky-800 p-2.5 rounded-2xl transition hover:text-sky-800/75 "
                href="/"
                onClick={() => setHidden(true)}
              >
                {" "}
                Nosotros{" "}
              </Link>
            </li>

            <li>
              <Link
                className="text-white min-w-45 text-center bg-sky-600 block p-2.5 lg:inline lg:bg-transparent lg:text-sky-800 rounded-2xl transition hover:text-sky-800/75"
                href="/tema"
                onClick={() => setHidden(true)}
              >
                {" "}
                Temas{" "}
              </Link>
            </li>

            <li>
              <Link
                className="text-white min-w-45 text-center bg-sky-600 block p-2.5 lg:inline lg:bg-transparent lg:text-sky-800 rounded-2xl transition hover:text-sky-800/75"
                href="/grados"
                onClick={() => setHidden(true)}
              >
                {" "}
                Grados{" "}
              </Link>
            </li>

            <li>
              <Link
                className="text-white min-w-45 text-center bg-sky-600 block p-2.5 lg:inline lg:bg-transparent lg:text-sky-800 rounded-2xl transition hover:text-sky-800/75"
                href="/test"
                onClick={() => setHidden(true)}
              >
                {" "}
                Test{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="block lg:hidden lg:pointer-events-none">
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
  );
}
