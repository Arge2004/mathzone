import React from "react";
import image1 from "@/assets/operaciones/radicacion/RadicaciónImage1.png";
import image2 from "@/assets/operaciones/radicacion/RadicaciónImage2.png";
import image3 from "@/assets/operaciones/radicacion/RadicaciónImage3.png";
import image4 from "@/assets/operaciones/radicacion/RadicaciónImage4.png";
import image5 from "@/assets/operaciones/radicacion/RadicaciónImage5.png";
import image6 from "@/assets/operaciones/radicacion/RadicaciónImage6.png";
import Image from "next/image";

export default function ExplicacionItem() {
  return (
    <article className="flex flex-col gap-5 mb-8 px-10 text-justify items-center text-lg/relaxed">
      <h2 className="h2-temas">Radicación</h2>
      <p>
        La radicación es una operación matemática que nos permite descubrir que
        número se multiplico varias veces para obtener un resultado. Es conocida
        como la operación inversa de la potenciación
      </p>
      <h3 className="h3-temas">Partes de la Radicación:</h3>
      <Image src={image1} alt="radicación" width={500} height={300} className="scale-110" />
      <ul className="list-disc pl-5">
        <li>
          La <strong>raiz</strong> es el número que debe multiplicarse por sí
          mismo, las veces que <strong>el índice</strong> indique.
        </li>
        <li>
          El <strong>radicando</strong> es el resultado que se obtiene al elevar
          la raíz al valor del índice.
        </li>
        <li>
          <strong>Nota: </strong> El <strong>índice</strong> cuando no aparece
          se asume que es 2, lo que significa que estamos buscando un número que
          multiplicado por sí mismo da como resultado el radicando. 
        </li>
      </ul>
      <h2 className="h2-temas">¿Cómo resolver una radicación?</h2>
      <p>Para entender esto hagamos un ejemplo:</p>
      <Image src={image2} alt="radicación ejemplos" width={500} height={300} className="scale-70" />
      <p>
        Te debes hacer la siguiente pregunta: ¿Cuál es el número que
        multiplicado 2 veces da como resultado 16?
      </p>
      <p>En este caso la raíz sería el 4 ya que:</p>
      <Image src={image3} alt="radicación ejemplos" width={500} height={300} className="scale-70" />
      <Image src={image4} alt="radicación ejemplos" width={500} height={300} className="scale-70" />
      <p>Hagamos otro ejemplo:</p>
      <Image src={image5} alt="radicación ejemplos" width={500} height={300} className="scale-70" />
      <p>¿Qué numero multiplicado 3 veces da como resultado 27?</p>
      <p>En este caso el adecuado es el 3 ya que:</p>
      <Image src={image6} alt="radicación ejemplos" width={500} height={300}/>
    </article>
  );
}
