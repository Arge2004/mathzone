import React from "react";
import image13 from "@/assets/operaciones/potenciacion/PotenciaciónImage13.png";
import image14 from "@/assets/operaciones/potenciacion/PotenciaciónImage14.png";
import image15 from "@/assets/operaciones/potenciacion/PotenciaciónImage15.png";
import image16 from "@/assets/operaciones/potenciacion/PotenciaciónImage16.png";
import image17 from "@/assets/operaciones/potenciacion/PotenciaciónImage17.png";
import image18 from "@/assets/operaciones/potenciacion/PotenciaciónImage18.png";
import image19 from "@/assets/operaciones/potenciacion/PotenciaciónImage19.png";
import image20 from "@/assets/operaciones/potenciacion/PotenciaciónImage20.png";
import image21 from "@/assets/operaciones/potenciacion/PotenciaciónImage21.png";
import Image from "next/image";
import YouTubePlayer from "@/components/YoutubePlayer";

export default function ExplicacionItem() {
  return (
    <article className="flex flex-col gap-5 mb-8 px-10 text-justify items-center text-lg/relaxed">
      <h3 className="h3-temas">Multiplicación de Potencias</h3>
      <p>
        Cuando trabajamos con multiplicación de potencias, existen diferentes
        reglas dependiendo si las bases o los exponentes son iguales. A
        continuación veremos los casos más comunes y cómo resolverlos de manera
        sencilla.
      </p>
      <h4 className="h3-temas">
        1. Multiplicación de potencias de bases iguales
      </h4>
      <p>
        Si las potencias tienen la misma base, esta se mantiene y se suman los
        exponentes. Veamos un ejemplo
      </p>
      <Image
        src={image13}
        alt="potencias multiplicación bases iguales"
        width={500}
        height={300}
        className="mb-5 scale-80"
      />
      <p>
        En este caso, debido a que ambas bases son 5, se mantiene y se{" "}
        <strong>suman</strong> los exponentes.
      </p>
      <Image
        src={image14}
        alt="potencias multiplicación bases iguales"
        width={500}
        height={200}
        className="mb-5 scale-80"
      />
      <p>Por lo tanto, quedaría así:</p>
      <Image
        src={image15}
        alt="potencias multiplicación bases iguales"
        width={500}
        height={200}
        className="mb-5 scale-80"
      />
      <YouTubePlayer
        videoId="U8LGr4IoYo8"
        title="Múltiplicación con Iguales Bases"
        author="Daniel Carreón"
      />
      <h4 className="h3-temas">
        2. Multiplicación de potencias de exponentes iguales
      </h4>
      <p>
        Si las potencias tienen el mismo exponente, se multiplican las bases y
        se conserva el exponente. Veamos un ejemplo:
      </p>
      <Image
        src={image16}
        alt="potencias multiplicación exponentes iguales"
        width={500}
        height={200}
        className="mb-5 scale-80"
      />
      <p>
        En este caso, debido a que ambos exponentes son 2, se conserva y se
        multiplican las bases.
      </p>
      <Image
        src={image17}
        alt="potencias multiplicación exponentes iguales"
        width={500}
        height={200}
        className="mb-5 scale-80"
      />
      <YouTubePlayer
        videoId="ZKKm29R-gHY"
        title="Múltiplicación con Iguales Exponentes"
        author="Profe Richard"
      />  
      <h4 className="h3-temas">
        3. Multiplicación de potencias de bases y exponentes diferentes
      </h4>
      <p>
        Cuando las potencias tienen bases y exponentes diferentes, no se puede
        aplicar ninguna regla especial. En este caso se resuelve cada potencia
        por separado y luego se multiplica el resultado. Veamos un ejemplo:
      </p>
      <Image
        src={image18}
        alt="potencias multiplicación bases y exponentes diferentes"
        width={500}
        height={300}
        className="mb-5 scale-80"
      />
      <p>En este caso tenemos que resolver cada potencia por separado.</p>
      <Image
        src={image19}
        alt="potencias multiplicación bases y exponentes diferentes"
        width={500}
        height={300}
        className="mb-5"
      />
      <Image
        src={image20}
        alt="potencias multiplicación bases y exponentes diferentes"
        width={500}
        height={300}
        className="mb-5"
      />

      <p>Luego, multiplicamos cada resultado y esa sería la respuesta.</p>

      <Image
        src={image21}
        alt="potencias multiplicación bases y exponentes diferentes"
        width={500}
        height={300}
        className="mb-5 scale-80"
      />
      <YouTubePlayer
        videoId="pZpaAjnAZWE"
        title="Múltiplicación con Bases y Exponentes Diferentes"
        author="Daniel Carreón"
      />
    </article>
  );
}
