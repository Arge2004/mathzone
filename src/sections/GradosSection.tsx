import Link from "next/link";
export default function GradosSection() {
  return (
    <section className="p-16 bg-white mx-2.5 mb-5 rounded-2xl text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Grados</h2>
      <p className="text-gray-600 mb-10">
        Escoge tu grado para comenzar a aprender. Por ahora tenemos disponible Noveno, pero muy pronto habrá más grados.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        {/* Noveno Grado */}
        <div className="bg-white rounded-xl shadow-md p-6 w-64 flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-3">Noveno Grado</h3>
          <p className="text-gray-600 mb-4">
            Contenido listo para estudiantes de noveno grado.
          </p>
          <Link
            href="/tema"
            className="bg-sky-500 text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition-colors"
          >
            Ver temas
          </Link>
        </div>

        {/* Próximamente */}
        <div className="bg-gray-100 rounded-xl shadow-inner p-6 w-64 flex flex-col justify-between opacity-70">
          <h3 className="text-xl font-semibold mb-3">Más grados</h3>
          <p className="text-gray-500 mb-4">Muy pronto estarán disponibles.</p>
          <button
            disabled
            className="bg-gray-300 text-gray-600 py-2 px-4 rounded-lg cursor-not-allowed"
          >
            Próximamente
          </button>
        </div>
      </div>
    </section>
  );
}