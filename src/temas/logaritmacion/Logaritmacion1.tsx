import React from "react";
import Image from "next/image";
import image1 from "@/assets/operaciones/logaritmacion/LogaritmaciónImage1.png";
import image2 from "@/assets/operaciones/logaritmacion/LogaritmaciónImage2.png";
import image3 from "@/assets/operaciones/logaritmacion/LogaritmaciónImage3.png";
import YouTubePlayer from "@/components/YoutubePlayer";

export default function ExplicacionItem() {
  return (
    <article className="flex flex-col gap-5 mb-8 px-10 text-justify items-center text-lg/relaxed">
      <h2 className="h2-temas">Logaritmación</h2>
      <p>
        La logaritmación es una operación matemática que responde a la pregunta:
        ¿A qué exponente hay que elevar una base para obtener un número? Es la
        operación inversa de la potenciación, así como la radicación lo es
        también.
      </p>
      <Image
        src={image1}
        alt="Logaritmación"
        width={300}
        height={200}
      />
      <ul className="list-disc pl-5">
        <li >
          La <strong className="text-orange-500">b</strong> es la <strong>base</strong>: el número que se va a elevar
        </li>
        <li>
          La <strong className="text-blue-500">a</strong> es el <strong>argumento</strong>: el resultado de elevar la base al exponente
        </li>
        <li>
          La <strong className="text-green-500">c</strong> es el <strong>algoritmo (el exponente)</strong>: el número al que hay que elevar la base para obtener <strong className="text-blue-500">a</strong>
        </li>
      </ul>
      <p>Veamos algunos ejemplos:</p>
      <div className="flex md:flex-row gap-5 ">
        <div className="flex flex-col items-center">
          <p className="font-bold text-center">Forma logarítmica</p>
          <Image src={image2} alt="Forma logarítmica" width={300} height={200} className="pt-8" />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-center">Forma exponencial</p>
          <Image src={image3} alt="Forma exponencial" width={300} height={200} className="scale-70" />
        </div>
      </div>
      <YouTubePlayer
        videoId="pZTuEHrnOMg"
        title="Logaritmación"
        author="Matemáticas profe Alex"
      />  
    </article>
  );
}
