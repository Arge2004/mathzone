import React from "react";
import Image from "next/image";
import image4 from "@/assets/operaciones/logaritmacion/LogaritmaciónImage4.png";
import image5 from "@/assets/operaciones/logaritmacion/LogaritmaciónImage5.png";
import YouTubePlayer from "@/components/YoutubePlayer";


export default function ExplicacionItem() {
  return (
    <article className="flex flex-col gap-5 mb-8 px-10 text-justify items-center text-lg/relaxed">
      <h3 className="h3-temas">Propiedades de la Logaritmación</h3>
      <p>
        Los logaritmos tienen reglas que permiten transformar operaciones dentro
        del logaritmo en operaciones más simples fuera de él. Estas reglas son
        muy útiles para resolver ecuaciones y entender mejor cómo funcionan los
        logaritmos.
      </p>
      <h4 className="h3-temas">1. Propiedad del Producto</h4>
      <p>
        Multiplicar dentro del logaritmo equivale a sumar los logaritmos
      </p>
      <Image src={image4} alt="Propiedad del Producto" width={300} height={200} className="scale-120 my-5" />
      <h4 className="h3-temas">Ejemplo</h4>
      <Image src={image5} alt="Ejemplo" width={300} height={200} className="scale-120 my-5" />
      <YouTubePlayer
        videoId="m5qBf1qJjEo"
        title="Propiedad del Producto"
        author="Matemáticas profe Alex"
      />
    </article>
  );
}
