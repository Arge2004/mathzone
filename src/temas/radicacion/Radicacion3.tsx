import React from "react";
import Image from "next/image";
import correct from "@/assets/correct_circle.png";
import incorrect from "@/assets/wrong_circle.png";
import image10 from "@/assets/operaciones/radicacion/RadicaciónImage10.png";
import image11 from "@/assets/operaciones/radicacion/RadicaciónImage11.png";

export default function ExplicacionItem() {
  return (
    <article className="flex flex-col gap-5 mb-8 px-10 text-justify items-center text-lg/relaxed">
      <h3 className="h3-temas">Multiplicación de Raíces</h3>
      <p>
        Para multiplicar raíces, deben tener el mismo índice, y se multiplican
        los radicandos. Veamos algunos ejemplos:
      </p>
      <div className="flex justify-center items-center">
        <Image
          src={image10}
          alt="Multiplicación de raíces"
          width={300}
          height={200}
          className="scale-80"
        />
        <Image src={correct} alt="Resultado correcto" width={50} height={50} />
      </div>
      <p>
        Este caso es correcto ya que se multiplican los radicandos y se deja el
        mismo índice.
      </p>
      <div className="flex justify-center items-center">
        <Image
          src={image11}
          alt="Multiplicación de raíces"
          width={300}
          height={200}
          className="scale-70"
        />
        <Image src={incorrect} alt="Resultado incorrecto" width={50} height={50} />
      </div>
      <p>
        Estas raíces no se pueden multiplicar ya que tienen <strong>índices</strong> diferentes (3 y 2)
      </p>
    </article>
  );
}
