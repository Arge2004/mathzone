import React from "react";
import Image from "next/image";
import image1 from "@/assets/operaciones/factorizacion/FactorizaciónImage1.png";
import image2 from "@/assets/operaciones/factorizacion/FactorizaciónImage2.png";
import image3 from "@/assets/operaciones/factorizacion/FactorizaciónImage3.png";
import YouTubePlayer from "@/components/YoutubePlayer";

export default function Factorizacion1() {
  return (
    <article className="flex flex-col gap-5 mb-8 px-10 text-justify items-center text-lg/relaxed">
      <h2 className="h2-temas">Factor Común</h2>
      <p>
        El factor común consiste en sacar el mayor factor que se repite en todos
        los términos de una expresión. Este factor se escribe afuera de un
        paréntesis, y dentro del paréntesis va lo que queda al dividir cada
        término por ese factor. Veamos algunos ejemplos
      </p>
        <Image
            src={image1}
            alt="Factor Común"
            width={300}
            height={200}
            className="scale-120 my-5"
        />
        <p>
            El <strong>6</strong> es el número que está en ambos términos, así que se saca factor común
        </p>
        <Image
            src={image2}
            alt="Factor Común"
            width={300}
            height={200}
            className="scale-120 my-5"
        />
        <p>
            El <strong>x²</strong> se encuentra en ambos términos, por eso se saca factor común
        </p>
        <Image
            src={image3}
            alt="Factor Común"
            width={300}
            height={200}
            className="scale-120 my-5"
        />
        <p>Se sacó <strong>4xy</strong> como factor común ya que aparece en ambos términos</p>
        <YouTubePlayer
          videoId="R2hI8YqmtqM"
          title="Factor Común"
          author="Matemáticas profe Alex"
        />

    </article>
  );
}
