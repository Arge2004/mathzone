import React from "react";
import Image from "next/image";
import image22 from "@/assets/operaciones/potenciacion/PotenciaciónImage22.png";
import image23 from "@/assets/operaciones/potenciacion/PotenciaciónImage23.png";
import image24 from "@/assets/operaciones/potenciacion/PotenciaciónImage24.png";
import image25 from "@/assets/operaciones/potenciacion/PotenciaciónImage25.png";
import image26 from "@/assets/operaciones/potenciacion/PotenciaciónImage26.png";
import image27 from "@/assets/operaciones/potenciacion/PotenciaciónImage27.png";
import image28 from "@/assets/operaciones/potenciacion/PotenciaciónImage28.png";
import image29 from "@/assets/operaciones/potenciacion/PotenciaciónImage29.png";
import image30 from "@/assets/operaciones/potenciacion/PotenciaciónImage30.png";
import image31 from "@/assets/operaciones/potenciacion/PotenciaciónImage31.png";
import image32 from "@/assets/operaciones/potenciacion/PotenciaciónImage32.png";

import StepOperation from "@/components/StepOperation";

export default function ExplicacionItem() {
  return (
    <article className="flex flex-col gap-5 mb-8 px-10 text-justify items-center text-lg/relaxed">
      <h3 className="h3-temas">División de Potencias</h3>
      <p>
        Al igual que con la multiplación, existen diferentes reglas para dividir
        potencias, según si las bases o los exponentes son iguales. A
        continuación, veremos los casos más comunes y cómo resolverlos
        correctamente
      </p>
      <h4 className="h3-temas">1. División de potencias de bases iguales</h4>
      <p>
        Si las potencias tienen la misma base, esta se mantiene y se restan los
        exponentes. Veamos un ejemplo:
      </p>
      <StepOperation title="Se deja la base igual" step={1} />
      <Image
        src={image22}
        alt="potencias división bases iguales"
        width={500}
        height={300}
        className="mb-5 scale-80"
      />
      <StepOperation title="Se restan los exponentes" step={2} />
      <Image
        src={image23}
        alt="potencias división bases iguales"
        width={500}
        height={200}
        className="mb-5 scale-80"
      />
      <StepOperation title="Resultado." step={3} />
      <Image
        src={image24}
        alt="potencias división bases iguales"
        width={500}
        height={200}
        className="mb-5 scale-80"
      />
      <h4 className="h3-temas">
        2. División de potencias de exponentes iguales
      </h4>
      <p>
        Si las potencias tienen el mismo exponente, se dividen las bases y se
        conserva el exponente. Veamos un ejemplo:
      </p>
      <StepOperation title="Se dejan los exponentes iguales" step={1} />
      <Image
        src={image25}
        alt="potencias división exponentes iguales"
        width={500}
        height={200}
        className="mb-5 scale-80"
      />
      <StepOperation title="Se dividen las bases" step={2} />
      <Image
        src={image26}
        alt="potencias división exponentes iguales"
        width={500}
        height={200}
        className="mb-5 scale-70"
      />
      <StepOperation title="Resultado." step={3} />
      <Image
        src={image27}
        alt="potencias división exponentes iguales"
        width={500}
        height={200}
        className="mb-5 scale-80"
      />
      <h4 className="h3-temas">
        3. División de potencias de bases y exponentes diferentes
      </h4>
      <p>
        Cuando las potencias tienen bases y exponentes diferentes, no se puede
        aplicar ninguna regla especial. En este caso se resuelve cada potencia
        por separado y luego se divide el resultado. Veamos un ejemplo:
      </p>
      <Image
        src={image28}
        alt="potencias división bases y exponentes diferentes"
        width={500}
        height={300}
        className="mb-5 scale-80"
      />
      <StepOperation title="Se resuelve cada potencia por separado" step={1} />
      <Image
        src={image29}
        alt="potencias división bases y exponentes diferentes"
        width={500}
        height={300}
        className="mb-5 scale-80"
      />
      <Image
        src={image30}
        alt="potencias división bases y exponentes diferentes"
        width={500}
        height={300}
        className="mb-5 scale-80"
      />
      <StepOperation title="Se divide los resultados" step={2} />
        <Image
            src={image31}
            alt="potencias división bases y exponentes diferentes"
            width={500}
            height={300}
            className="mb-5 scale-80"
          />
     <StepOperation title="Resultado." step={3} />
        <Image
            src={image32}
            alt="potencias división bases y exponentes diferentes"
            width={500}
            height={300}
            className="mb-5 scale-80"
        />
        <p>
            En este caso, debido a que las bases y los exponentes son diferentes,
            no se puede aplicar ninguna regla especial.
        </p>
    </article>
  );
}
