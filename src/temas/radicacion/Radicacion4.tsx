import React from "react";
import Image from "next/image";
import correct from "@/assets/correct_circle.png";
import image12 from "@/assets/operaciones/radicacion/RadicaciónImage12.png";
import image13 from "@/assets/operaciones/radicacion/RadicaciónImage13.png";
import YouTubePlayer from "@/components/YoutubePlayer";

export default function ExplicacionItem() {
  return (
    <article className="flex flex-col gap-5 mb-8 px-10 text-justify items-center text-lg/relaxed">
      <h3 className="h3-temas">División de Raíces</h3>
      <p>
        Para dividir raíces, deben tener el mismo índice, y se dividen los
        radicandos. Veamos algunos ejemplos:
      </p>
      <div className="flex justify-center items-center">
        <Image
          src={image12}
          alt="División de raíces"
          width={300}
          height={200}
          className="scale-70"
        />
        <Image src={correct} alt="Resultado correcto" width={50} height={50} />
      </div>
      <p>
        Aquí se mantiene el mismo índice y se dividen los radicandos, 6 entre 2 que da como resultado 3.
      </p>
      <div className="flex justify-center items-center">
        <Image
          src={image13}
          alt="Resta de raíces"
          width={300}
          height={200}
          className="scale-70"
        />
        <Image src={correct} alt="Resultado correcto" width={50} height={50} />
      </div>
      <p>
       Ambas raíces tienen el 3 con índice por lo tanto se pueden dividir.
      </p>
      <YouTubePlayer
        videoId="awfaWBAAq8s"
        title="División de Raíces"
        author="Matemáticas profe Alex"
      />
    </article>
  );
}
