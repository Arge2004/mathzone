import React from 'react'
import Tema from "@/components/Tema";
import { temas } from "@/data/Temas";

export default function TestSection() {
  return (
    <section className="mb-5 flex flex-col items-center bg-white m-2.5 rounded-2xl shadow-2xl gap-6 p-6 lg:p-32 text-xl lg:text-2xl ">
            <h2 className='mb-4 text-center text-3xl  font-bold bg-sky-300 py-3 px-8 border-2 border-sky-700 rounded-3xl'>
                Escoge un test
            </h2>
            <div className="grid justify-items-center items-center grid-cols-1 lg:grid-cols-2 gap-8 gap-x-16">
                {temas.map((tema) => ( 
                        <Tema
                            key={tema.id}
                            id={tema.id}
                            title={tema.title}
                            description={tema.testDescription || "Pon a prueba tus conocimientos sobre este tema."} 
                            image={{
                                src: tema.image.src,
                                alt: tema.image.alt
                            }}
                            test={true}
                        />
                ))}
            </div>
        </section>
  )
}
