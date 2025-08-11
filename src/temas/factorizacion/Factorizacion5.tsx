import React from "react";
import Image from "next/image";
import StepOperation from "@/components/StepOperation";
import image18 from "@/assets/operaciones/factorizacion/FactorizaciónImage18.png";
import image19 from "@/assets/operaciones/factorizacion/FactorizaciónImage19.png";
import image20 from "@/assets/operaciones/factorizacion/FactorizaciónImage20.png";
import image21 from "@/assets/operaciones/factorizacion/FactorizaciónImage21.png";
import image22 from "@/assets/operaciones/factorizacion/FactorizaciónImage22.png";
import image23 from "@/assets/operaciones/factorizacion/FactorizaciónImage23.png";
import image24 from "@/assets/operaciones/factorizacion/FactorizaciónImage24.png";
import YouTubePlayer from "@/components/YoutubePlayer";

export default function Factorizacion1() {
  return (
    <article className="flex flex-col gap-5 mb-8 px-10 text-justify items-center text-lg/relaxed">
      <h2 className="h2-temas">Diferencia de Cubos</h2>
      <p>
        Es un caso de factorización que se presenta cuando dos términos elevados
        al cubo están separados por un signo menos. La fórmula es:
      </p>
      <Image
        src={image18}
        alt="Diferencia de Cubos"
        width={300}
        height={200}
        className="my-5 scale-120"
      />
      <h3 className="h3-temas">¿Cómo funciona?</h3>
      <ol className="list-decimal pl-5">
        <li>
          El primer factor (<span className="text-cyan-500">a</span> -
          <span className="text-orange-500"> b</span>) se obtiene de las raíces
          cúbicas de cada término
        </li>
        <li>
          El segundo factor (<span className="text-cyan-500">a</span>
          <sup className="text-green-600">2</sup> +
          <span className="text-cyan-500"> a</span>
          <span className="text-orange-500">b</span> +
          <span className="text-orange-500"> b</span>
          <sup className="text-green-600">2</sup>) se obtuvo de:
        </li>
        <ul className="list-disc pl-5">
          <li>
            Elevar el primer término al cuadrado (
            <span className="text-cyan-500">a</span>
            <sup className="text-green-600">2</sup>)
          </li>
          <li>
            Multiplicar ambos términos y luego sumarlos (
            <span className="text-cyan-500">a</span>
            <span className="text-orange-500">b</span>)
          </li>
          <li>
            Elevar el segundo término al cuadrado (
            <span className="text-orange-500">b</span>
            <sup className="text-green-600">2</sup>)
          </li>
        </ul>
      </ol>
      <h3 className="h3-temas">Veamos un ejemplo</h3>
      <Image
        src={image19}
        alt="Diferencia de Cubos"
        width={300}
        height={200}
        className="scale-80"
      />
      <StepOperation title="Hallamos las raíces cúbicas" step={1} />
      <Image
        src={image20}
        alt="Diferencia de Cubos"
        width={300}
        height={200}
        className="scale-50"
      />
      <StepOperation
        title="Elevamos al cuadrado la raíz cúbica primer término"
        step={2}
      />
      <Image
        src={image21}
        alt="Diferencia de Cubos"
        width={300}
        height={200}
        className="scale-60"
      />
      <StepOperation
        title="Sumamos el producto del primer y segundo término"
        step={3}
      />
      <Image
        src={image22}
        alt="Diferencia de Cubos"
        width={300}
        height={200}
        className="scale-80"
      />
      <StepOperation
        title="Elevamos al cuadrado la raíz cúbica del segundo término "
        step={4}
      />
      <Image
        src={image23}
        alt="Diferencia de Cubos"
        width={300}
        height={200}
      />
      <p className="mt-5">Dando como resultado que:</p>
      <Image
        src={image24}
        alt="Diferencia de Cubos"
        width={300}
        height={200}
        className="scale-120"
      />
      <YouTubePlayer
        videoId="1gZx3M8EqN8"
        title="Diferencia de Cubos"     
        author="Matemáticas profe Alex"
      />
    </article>
  );
}
