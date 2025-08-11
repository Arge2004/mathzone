import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-sky-100 to-sky-200 mt-16">
      <div className="max-w-8xl mx-auto pt-10 px-10 flex flex-col xl:grid gap-8 xl:grid-cols-5 items-center justify-items-center text-center">
        {/* Logos */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex mx-auto gap-6">
            <div className=" relative w-36 h-36">
              <Image
                src="/logo-colegio.png"
                alt="Logo Colegio"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-36 h-36">
              <Image
                src="/logo-semillero.png"
                alt="Logo Semillero"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="mt-4 mx-auto text-sm text-gray-900 font-bold">
            I.E. Baltazar Salazar — INVESTINNOVA
          </p>
        </div>

        {/* Descripción del proyecto */}
        <div className="col-span-3">
          <h3 className="font-bold h3-temas mb-2">
            Sobre el Proyecto
          </h3>
          <p className="text-gray-900 text-sm leading-relaxed">
            Este proyecto busca crear una plataforma educativa interactiva para
            apoyar el aprendizaje de las matemáticas en estudiantes de
            secundaria, integrando recursos didácticos y evaluaciones
            adaptativas.
          </p>
        </div>

        {/* Integrantes */}
        <div>
          <h3 className="h3-temas mb-2">Investigadores</h3>
          <ul className="text-gray-900 text-sm space-y-1 list-disc pl-5">
            <li>Gabriel Medina Morales</li>
            <li>Juan Andrés Putero</li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-b  border-sky-300 pb-3 pt-5 xl:pt-0 px-5 text-center text-sm text-gray-900">
        © {new Date().getFullYear()} Proyecto MathZone — Todos los derechos
        reservados
      </div>

      <div className="text-center text-gray-700 text-sm py-2">
        Desarrollado por ArgeDev
        <span className="text-sky-600 font-bold"> | </span>
        <Image
          src="/logo-argedev.png"
          alt="Logo ArgeDev"
          width={32}
          height={32}
          className="inline-block"
        />
      </div>
    </footer>
  );
}
