import React from "react";
import Image from "next/image";
import StepOperation from "@/components/StepOperation";
import image4 from "@/assets/operaciones/factorizacion/FactorizaciónImage4.png";
import image5 from "@/assets/operaciones/factorizacion/FactorizaciónImage5.png";
import image6 from "@/assets/operaciones/factorizacion/FactorizaciónImage6.png";
import image7 from "@/assets/operaciones/factorizacion/FactorizaciónImage7.png";
import image8 from "@/assets/operaciones/factorizacion/FactorizaciónImage8.png";
import image9 from "@/assets/operaciones/factorizacion/FactorizaciónImage9.png";
import image10 from "@/assets/operaciones/factorizacion/FactorizaciónImage10.png";
import image11 from "@/assets/operaciones/factorizacion/FactorizaciónImage11.png";
import YouTubePlayer from "@/components/YoutubePlayer";


export default function Factorizacion1() {
  return (
    <article className="flex flex-col gap-5 mb-8 px-10 text-justify items-center text-lg/relaxed">
      <h2 className="h2-temas">Factor Común por Agrupación</h2>
      <p>
        Es un método que consiste en agrupar términos de dos en dos (o más), y
        sacar factor común en cada grupo. Se usa cuando{" "}
        <strong>no hay un factor común en todos los términos</strong>, pero sí
        lo hay por partes. Es muy útil para trinomios que no se pueden
        factorizar directamente. Veamos algunos ejemplos:
      </p>
      <Image
        src={image4}
        alt="Factor Común"
        width={300}
        height={200}
        className="my-5"
      />
      <StepOperation
        title="Agrupamos términos que tengan algo común entre sí"
        step={1}
      />
      <Image
        src={image5}
        alt="Factor Común"
        width={300}
        height={200}
        className="my-5"
      />
      <ul className="list-disc pl-5">
        <li>
          En el primer grupo ambos tienen <strong>a</strong> como factor común
        </li>
        <li>
          En el segundo grupo ambos tienen <strong>b</strong> como factor común
        </li>
      </ul>
      <StepOperation title="Sacamos el factor común de cada grupo" step={2} />
      <Image
        src={image6}
        alt="Factor Común"
        width={300}
        height={200}
        className="my-5"
      />
      <p>
        Aunque parezca que ya está terminado el proceso, se puede observar que
        aun hay un factor común entre estos: <strong>(x + y)</strong>
      </p>
      <StepOperation title="Sacamos un nuevo factor común" step={3} />
      <Image
        src={image7}
        alt="Factor Común"
        width={300}
        height={200}
        className="my-5 scale-90"
      />
      <h3 className="h3-temas">Veamos otro ejemplo</h3>
      <Image
        src={image8}
        alt="Factor Común"
        width={300}
        height={200}
        className="my-5"
      />
      <StepOperation
        title="Agrupamos términos que tengan algo común entre sí"
        step={1}
      />
      <Image
        src={image9}
        alt="Factor Común"
        width={300}
        height={200}
        className="my-5"
      />
      <StepOperation title="Sacamos el factor común de cada grupo" step={2} />
      <Image
        src={image10}
        alt="Factor Común"
        width={300}
        height={200}
        className="my-5"
      />
      <StepOperation title="Sacamos un nuevo factor común" step={3} />
      <Image
        src={image11}
        alt="Factor Común"
        width={300}
        height={200}
        className="my-5"
      />
      <YouTubePlayer
        videoId="y_mkvBoYz-Y"
        title="Factor Común por Agrupación"
        author="Matemáticas profe Alex"
      />  
    </article>
  );
}
