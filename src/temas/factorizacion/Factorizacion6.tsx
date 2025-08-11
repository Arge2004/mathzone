import React from "react";
import Image from "next/image";
import StepOperation from "@/components/StepOperation";
import image25 from "@/assets/operaciones/factorizacion/FactorizaciónImage25.png";
import image26 from "@/assets/operaciones/factorizacion/FactorizaciónImage26.png";
import image27 from "@/assets/operaciones/factorizacion/FactorizaciónImage27.png";
import image28 from "@/assets/operaciones/factorizacion/FactorizaciónImage28.png";
import image29 from "@/assets/operaciones/factorizacion/FactorizaciónImage29.png";
import image30 from "@/assets/operaciones/factorizacion/FactorizaciónImage30.png";
import image31 from "@/assets/operaciones/factorizacion/FactorizaciónImage31.png";
import image32 from "@/assets/operaciones/factorizacion/FactorizaciónImage32.png";
import image33 from "@/assets/operaciones/factorizacion/FactorizaciónImage33.png";
import image34 from "@/assets/operaciones/factorizacion/FactorizaciónImage34.png";
import image35 from "@/assets/operaciones/factorizacion/FactorizaciónImage35.png";
import image36 from "@/assets/operaciones/factorizacion/FactorizaciónImage36.png";
import image37 from "@/assets/operaciones/factorizacion/FactorizaciónImage37.png";
import image38 from "@/assets/operaciones/factorizacion/FactorizaciónImage38.png";
import YouTubePlayer from "@/components/YoutubePlayer";

export default function Factorizacion1() {
  return (
    <article className="flex flex-col gap-5 mb-8 px-10 text-justify items-center text-lg/relaxed">
      <h2 className="h2-temas">Trinomio Cuadrado Perfecto</h2>
      <p>
        Es una expresión algebraica de tres términos que cumple lo siguiente:
      </p>
      <ul className="list-disc pl-5">
        <li>El primer y tercer término tienen raíz cuadrada exacta</li>
        <li>
          El segundo término es 2 veces el producto entre la raíz cuadrada del
          primer y tercer término
        </li>
      </ul>
      <p>Veamos como se resuelve:</p>
      <Image
        src={image25}
        alt="Trinomio Cuadrado Perfecto"
        width={300}
        height={200}
        className="mb-5"
      />
      <StepOperation
        title="Verificar que el primer y el tercer término tengan raíces exactas"
        step={1}
      />
      <div className="flex items-center justify-center">
        <Image
          src={image26}
          alt="Trinomio Cuadrado Perfecto"
          width={300}
          height={200}
          className="scale-75"
        />
        <Image
          src={image27}
          alt="Trinomio Cuadrado Perfecto"
          width={300}
          height={200}
          className="scale-75"
        />
      </div>
      <StepOperation
        title="Comprobar si el producto de las raíces por 2 da el término del medio"
        step={2}
      />
      <Image
        src={image28}
        alt="Trinomio Cuadrado Perfecto"
        width={300}
        height={200}
        className="scale-90"
      />
      <p>
        Ya que verificamos que sí es un trinomio cuadrado perfecto podemos
        empezar a factorizar:
      </p>
      <StepOperation
        title="Hallar las raíces del primer y tercer término"
        step={3}
      />
      <div className="flex items-center justify-center">
        <Image
          src={image29}
          alt="Trinomio Cuadrado Perfecto"
          width={300}
          height={200}
          className="scale-75"
        />
        <Image
          src={image30}
          alt="Trinomio Cuadrado Perfecto"
          width={300}
          height={200}
          className="scale-75"
        />
      </div>
      <StepOperation
        title="Sumarlas o restarlas dependiendo del signo del término del medio y elevarlas al cuadrado"
        step={4}
      />
      <Image
        src={image31}
        alt="Trinomio Cuadrado Perfecto"
        width={300}
        height={200}
        className="scale-120"
      />
      <p>Veamos otro ejemplo para entender mejor el proceso:</p>
      <Image
        src={image32}
        alt="Trinomio Cuadrado Perfecto"
        width={300}
        height={200}
        className="my-5 scale-80"
      />
      <StepOperation
        title="Verificar que el primer y el tercer término tengan raíces exactas"
        step={1}
      />
      <div className="flex items-center justify-center">
        <Image
          src={image33}
          alt="Trinomio Cuadrado Perfecto"
          width={300}
          height={200}
          className="my-5 scale-80"
        />
        <Image
          src={image34}
          alt="Trinomio Cuadrado Perfecto"
          width={300}
          height={200}
          className="my-5 scale-80"
        />
      </div>
      <StepOperation
        title="Comprobar si el producto de las raíces por 2 da el término del medio"
        step={2}
      />
      <Image
        src={image35}
        alt="Trinomio Cuadrado Perfecto"
        width={300}
        height={200}
        className="my-5 scale-80"
      />
      <p>Sí es un trinomio cuadrado perfecto, entonces continuamos:</p>
      <StepOperation
        title="Hallar las raíces del primer y tercer término"
        step={3}
      />
      <div className="flex items-center justify-center">
        <Image
          src={image36}
          alt="Trinomio Cuadrado Perfecto"
          width={300}
          height={200}
          className="my-5 scale-80"
        />
        <Image
          src={image37}
          alt="Trinomio Cuadrado Perfecto"
          width={300}
          height={200}
          className="my-5 scale-80"
        />
      </div>
      <StepOperation
        title="Sumarlas o restarlas dependiendo del signo del término del medio y elevarlas al cuadrado"
        step={4}
      />
      <Image
        src={image38}
        alt="Trinomio Cuadrado Perfecto"
        width={300}
        height={200}
        className="scale-120"
      />
      <YouTubePlayer
        videoId="YAENVrFtO6E"
        title="Trinomio Cuadrado Perfecto"
        author="Matemáticas profe Alex"
      />  
    </article>
  );
}
