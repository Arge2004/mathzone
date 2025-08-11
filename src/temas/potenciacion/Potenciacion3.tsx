import React from "react";
import image8 from "@/assets/operaciones/potenciacion/PotenciaciónImage8.png";
import image9 from "@/assets/operaciones/potenciacion/PotenciaciónImage9.png";
import image10 from "@/assets/operaciones/potenciacion/PotenciaciónImage10.png";
import image11 from "@/assets/operaciones/potenciacion/PotenciaciónImage11.png";
import image12 from "@/assets/operaciones/potenciacion/PotenciaciónImage12.png";
import Image from "next/image";
import StepOperation from "@/components/StepOperation";
import YouTubePlayer from "@/components/YoutubePlayer"; 

export default function ExplicacionItem() {
  return (
    <article className="flex flex-col gap-5 mb-8 px-10 text-justify items-center text-lg/relaxed">
      <h3 className="h3-temas">Resta de Potencias</h3>
      <p>
        Restar potencias es igual de fácil, primero debes calcular el valor de
        cada una y luego hacer la resta. Veamos un ejemplo:
      </p>
      <Image
        src={image8}
        alt="potencias resta"
        width={500}
        height={300}
        className="mb-5 scale-80"
      />
      <StepOperation title="Calcular el valor la primera potencia." step={1} />
      <Image
        src={image9}
        alt="potencias resta"
        width={500}
        height={200}
        className="mb-5"
      />
      <StepOperation title="Calcular el valor la segunda potencia." step={2} />
      <Image
        src={image10}
        alt="potencias resta"
        width={500}
        height={200}
        className="mb-5 scale-80"
      />
      <StepOperation title="Restar los resultados obtenidos." step={3} />
      <Image
        src={image11}
        alt="potencias resta"
        width={500}
        height={200}
        className="mb-5 scale-80"
      />
      <p>
        Por lo tanto esto quedaría así:
      </p>
      <Image src={image12} alt="potencias resta" width={500} height={200} className="mb-5 scale-80" />
      <YouTubePlayer
        videoId="-puVDm8LebY"
        title="Potencias-Resta"
        author="Profe Richard"
      />
    </article>
  );
}
