import React from "react";
import image3 from "@/assets/operaciones/potenciacion/PotenciaciónImage3.png";
import image4 from "@/assets/operaciones/potenciacion/PotenciaciónImage4.png";
import image5 from "@/assets/operaciones/potenciacion/PotenciaciónImage5.png";
import image6 from "@/assets/operaciones/potenciacion/PotenciaciónImage6.png";
import image7 from "@/assets/operaciones/potenciacion/PotenciaciónImage7.png";
import Image from "next/image";
import StepOperation from "@/components/StepOperation";
import YouTubePlayer from "@/components/YoutubePlayer";

export default function ExplicacionItem() {
  return (
    <article className="flex flex-col gap-5 mb-8 px-10 text-justify items-center text-lg/relaxed">
      <h2 className="h2-temas">Operaciones con Potencias</h2>
      <p>
        Ahora que ya sabes qué es una potencia y como se calcula aprenderás a
        hacer operaciones con potencias. Veremos qué pasa cuando sumamos,
        restamos, multiplicamos, dividimos o elevamos potencias entre sí.
      </p>
      <h3 className="h3-temas">Suma de Potencias</h3>
      <p>
        Para sumar potencias, primero debes calcular el valor de cada una y
        luego hacer la suma. Veamos un ejemplo:
      </p>
      <Image src={image3} alt="potencias suma" width={500} height={300}className="mb-5" />
      <StepOperation title="Calcular el valor la primera potencia." step={1} />
      <Image src={image4} alt="potencias suma" width={500} height={200}className="mb-5" />
      <StepOperation title="Calcular el valor la segunda potencia." step={2} />
      <Image src={image5} alt="potencias suma" width={500} height={200} className="mb-5" />
      <StepOperation title="Sumar los resultados obtenidos." step={3} />
      <Image src={image6} alt="potencias suma" width={500} height={200} className="mb-5" />
      <p>
        Por lo tanto esto quedaría así:
      </p>
      <Image src={image7} alt="potencias suma" width={500} height={200} className="mb-5" />
      <YouTubePlayer
        videoId="ooYT3koEvS8"
        title="Potencias-Suma"
        author="Profe Richard"
      />
    </article>
  );
}
