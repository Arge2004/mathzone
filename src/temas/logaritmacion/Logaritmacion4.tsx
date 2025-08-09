import React from "react";
import Image from "next/image";
import image8 from "@/assets/operaciones/logaritmacion/LogaritmaciónImage8.png";
import image9 from "@/assets/operaciones/logaritmacion/LogaritmaciónImage9.png";

export default function ExplicacionItem() {
  return (
    <article className="flex flex-col gap-5 mb-8 px-10 text-justify items-center text-lg/relaxed">
      <h3 className="h3-temas">Propiedades de la Logaritmación</h3>
      <h4 className="h3-temas">3. Propiedad de la Potencia</h4>
      <p>
        Elevar a una potencia dentro del logaritmo equivale a multiplicar el
        logaritmo por el exponente. Es decir, si tienes un logaritmo de una base
        elevada a una potencia, puedes sacar esa potencia fuera del logaritmo
        multiplicando el logaritmo por el exponente. 
      </p>
      <Image
        src={image8}
        alt="Propiedad de la Potencia"
        width={300}
        height={200}
        className="scale-120 my-5"
      />
      <h4 className="h3-temas">Ejemplo</h4>
      <Image
        src={image9}
        alt="Ejemplo"
        width={300}
        height={200}
        className="scale-120 my-5"
      />
    </article>
  );
}
