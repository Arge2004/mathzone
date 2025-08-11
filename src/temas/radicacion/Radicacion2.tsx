import React from "react";
import Image from "next/image";
import image7 from "@/assets/operaciones/radicacion/RadicaciónImage7.png";
import correct from "@/assets/correct_circle.png";
import incorrect from "@/assets/wrong_circle.png";
import image8 from "@/assets/operaciones/radicacion/RadicaciónImage8.png";
import image9 from "@/assets/operaciones/radicacion/RadicaciónImage9.png";
import YouTubePlayer from "@/components/YoutubePlayer";


export default function ExplicacionItem() {
  return (
    <article className="flex flex-col gap-5 mb-8 px-10 text-justify items-center text-lg/relaxed">
      <h2 className="h2-temas">Operaciones con Raíces</h2>
      <p>
        Ahora que ya sabes qué es una raíz y cómo se calcula, es momento de
        aprender a realizar operaciones con raíces. Al igual que con otros
        números, las raíces también se pueden sumar, restar, multiplicar o
        dividir, pero hay que seguir ciertas reglas.
      </p>
      <h3 className="h3-temas">Sumar y Restar Raíces</h3>
      <p>
        Solo se pueden sumar o restar raíces que sean semejantes, es decir, que
        tengan el mismo índice y el mismo radicando. Veamos algunos ejemplos:
      </p>
      <div className="flex justify-center items-center">
        <Image
          src={image7}
          alt="Suma de raíces"
          width={300}
          height={200}
          className="scale-80"
        />
        <Image src={correct} alt="Resultado correcto" width={50} height={50} />
      </div>
      <p>
        Aquí si se puede simplificar ya que tienen el mismo{" "}
        <strong>índice (2)</strong> y el mismo <strong>radicando (5)</strong>.
      </p>
      <div className="flex justify-center items-center">
        <Image
          src={image8}
          alt="Resta de raíces"
          width={300}
          height={200}
          className="scale-65"
        />
        <Image
          src={incorrect}
          alt="Resultado incorrecto"
          width={50}
          height={50}
        />
      </div>
      <p>
        En este ejemplo no se pueden simplificar debido a que tienen diferente{" "}
        <strong>radicando (2 y 3)</strong>.
      </p>
      <div className="flex justify-center items-center">
        <Image
          src={image9}
          alt="Suma de raíces con diferentes radicandos"
          width={300}
          height={200}
          className="scale-80"
        />
        <Image src={correct} alt="Resultado correcto" width={50} height={50} />
      </div>
      <p>
        Esta resta está correcta ya que el índice y el radicando son iguales.
      </p>
      <YouTubePlayer
        videoId="2BVgn1wk5ko"
        title="Suma y Resta de Raíces "
        author="Matemáticas profe Alex"
      />
    </article>
  );
}
