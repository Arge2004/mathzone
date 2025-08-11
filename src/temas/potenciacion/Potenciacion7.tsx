import React from "react";
import image35 from "@/assets/operaciones/potenciacion/PotenciaciónImage35.png";
import image36 from "@/assets/operaciones/potenciacion/PotenciaciónImage36.png";
import image37 from "@/assets/operaciones/potenciacion/PotenciaciónImage37.png";
import Image from "next/image";
import YouTubePlayer from "@/components/YoutubePlayer";


export default function ExplicacionItem() {
  return (
    <article className="flex flex-col gap-5 mb-8 px-10 text-justify items-center text-lg/relaxed">
      <h3 className="h3-temas">Potencia con Exponente Cero</h3>
      <p>
        Toda potencia con exponente cero y base diferente a cero siempre dará
        como resultado 1. Algunos ejemplos son:
      </p>
      <Image
        src={image35}
        alt="potencias potencia"
        width={500}
        height={300}
        className="mb-5 scale-80"
      />
      <Image
        src={image36}
        alt="potencias potencia"
        width={500}
        height={300}
        className="mb-5 scale-80"
      />
      <Image
        src={image37}
        alt="potencias potencia"
        width={500}
        height={300}
        className="mb-5 scale-80"
      />
      <YouTubePlayer
        videoId="HHVSZWMrAA8"
        title="Potencia con Exponente Cero"
        author="Daniel Carreón"
      />
    </article>
  );
}
