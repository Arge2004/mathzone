import React from 'react'
import image1 from "@/assets/operaciones/potenciacion/PotenciaciónImage1.png"
import image2 from "@/assets/operaciones/potenciacion/PotenciaciónImage2.png"
import Image from 'next/image'



export default function ExplicacionItem() {
  return (
    <article className='flex flex-col gap-5 mb-8 px-10 text-justify items-center text-lg/relaxed'>
        <h2 className='h2-temas'>Potenciación</h2>
        <p>
            La potenciación es una operación matemática que consiste en multiplicar un número por sí mismo varias veces. Se representa con una base y un exponente
        </p>
        <Image src={image1} alt="potenciacion" width={500} height={300} />
        <ul className='list-disc pl-5'>
            <li>La <strong>base</strong> es el número que se multiplica por sí mismo.</li>
            <li>El <strong>exponente</strong> indica cuántas veces se repite esa multiplicación.</li>
        </ul>
        <p>
            En el anterior ejemplo, el 2 <strong>(la base)</strong> se multiplica por sí mismo 3 veces <strong>(exponente)</strong>
        </p>
        <h3 className='h3-temas'>Algunos Ejemplos</h3>
        <Image src={image2} alt="potenciacion ejemplos" width={500} height={300} />

    </article>
  )
}
