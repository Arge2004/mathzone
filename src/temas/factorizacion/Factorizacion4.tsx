import React from "react";
import Image from "next/image";
import image12 from "@/assets/operaciones/factorizacion/FactorizaciónImage12.png";
import image13 from "@/assets/operaciones/factorizacion/FactorizaciónImage13.png";
import image14 from "@/assets/operaciones/factorizacion/FactorizaciónImage14.png";
import image15 from "@/assets/operaciones/factorizacion/FactorizaciónImage15.png";
import image16 from "@/assets/operaciones/factorizacion/FactorizaciónImage16.png";
import image17 from "@/assets/operaciones/factorizacion/FactorizaciónImage17.png";

export default function Factorizacion1() {
  return (
    <article className="flex flex-col gap-5 mb-8 px-10 text-justify items-center text-lg/relaxed">
      <h2 className="h2-temas">Diferencia de Cuadrados</h2>
      <p>
        Es una identidad que se aplica cuando se tienen dos términos elevados al
        cuadrado y separados por un signo menos. Esto se puede factorizar al
        aplicar la siguiente fórmula:
      </p>
      <Image
        src={image12}
        alt="Diferencia de Cuadrados"
        width={300}
        height={200}
        className="my-5"
      />
      <span className="self-start 2xl:self-auto h3-temas font-bold">
        Cumple con ambas características:
      </span>
      <ul className="list-disc pl-5">
        <li>Debe ser una resta (Diferencia)</li>
        <li>Ambos términos deben ser cuadrados perfectos</li>
      </ul>
      <p>Veamos algunos ejemplos con expresiones algebraicas:</p>
      <Image
        src={image13}
        alt="Diferencia de Cuadrados"
        width={300}
        height={200}
        className="scale-120"
      />
      <hr className="border-t mt-5 border-2 w-full border-sky-600" />
      <Image
        src={image14}
        alt="Diferencia de Cuadrados"
        width={300}
        height={200}
        className="scale-75"
      />
      <p>
        En este caso también se aplica la diferencia de cuadrados ya que tanto x
        como 16 son cuadrados perfectos: <strong>x² = (x)²</strong> y{" "}
        <strong>16 = (4)²</strong> y quedando así:
      </p>
      <Image
        src={image15}
        alt="Diferencia de Cuadrados"
        width={300}
        height={200}
        className="scale-120 my-5"
      />
      <h3 className="h3-temas">Veamos otro ejemplo</h3>
      <Image
        src={image16}
        alt="Diferencia de Cuadrados"
        width={300}
        height={200}
        className="my-5 scale-80"
      />
      <p>
        En este caso tanto el <strong>4x</strong> como el <strong>9</strong> son cuadrados perfectos ya que: <strong>4x = (2x)²</strong> y <strong>9 = (3)²</strong> por lo tanto:
      </p>
      <Image
        src={image17}
        alt="Diferencia de Cuadrados"
        width={300}
        height={200}
        className="my-5 scale-120"
      />
    </article>
  );
}
