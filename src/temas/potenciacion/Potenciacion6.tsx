import React from "react";
import image33 from "@/assets/operaciones/potenciacion/PotenciaciónImage33.png";
import image34 from "@/assets/operaciones/potenciacion/PotenciaciónImage34.png";
import Image from "next/image";
import YouTubePlayer from "@/components/YoutubePlayer";

export default function ExplicacionItem() {
  return (
    <article className="flex flex-col gap-5 mb-8 px-10 text-justify items-center text-lg/relaxed">
      <h3 className="h3-temas">Potencia de una Potencia</h3>
      <p>
        Cuando una potencia se eleva a otra potencia se aplica la regla de
        multiplicar las potencias y dejar la base. Veamos un ejemplo:
      </p>
        <Image
            src={image33}
            alt="potencias potencia"
            width={500}
            height={300}
            className="mb-5 scale-80"
        />
        <Image
            src={image34}
            alt="potencias potencia"
            width={500}
            height={300}
            className="mb-5 scale-80"
        />
        <YouTubePlayer
          videoId="a_8MdRema-k"
          title="Potencia de una Potencia"
          author="Daniel Carreón"
        />
    </article>
  );
}
