import React from "react";
import Image from "next/image";
import image6 from "@/assets/operaciones/logaritmacion/LogaritmaciónImage6.png";
import image7 from "@/assets/operaciones/logaritmacion/LogaritmaciónImage7.png";


export default function ExplicacionItem() {
  return (
    <article className="flex flex-col gap-5 mb-8 px-10 text-justify items-center text-lg/relaxed">
      <h3 className="h3-temas">Propiedades de la Logaritmación</h3>
      <h4 className="h3-temas">2. Propiedad del Cociente</h4>
      <p>
        Dividir dentro del logaritmo equivale a restar los logaritmos
      </p>
      <Image src={image6} alt="Propiedad del Cociente" width={300} height={200} className="scale-120 my-5" />
      <h4 className="h3-temas">Ejemplo</h4>
      <Image src={image7} alt="Ejemplo" width={300} height={200} className="scale-120 my-5" />
    </article>
  );
}
