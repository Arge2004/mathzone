import React from 'react'
import Tema from "@/components/Tema";
import { temas } from "@/data/Temas";

export default function TemaSection() {
  return (
    <section className="mb-5 flex flex-col items-center gap-6 p-6 text-xl">
        <h2 className='mb-4 text-center text-3xl font-bold bg-sky-300 py-3 px-8 border-2 border-sky-700 rounded-3xl'>
            Temas
        </h2>
        <div className="grid justify-items-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {temas.map((tema) => ( 
                    <Tema
                        key={tema.id}
                        id={tema.id}
                        title={tema.title}
                        description={tema.description}
                        image={{
                            src: tema.image.src,
                            alt: tema.image.alt
                        }}
                    />
            ))}
        </div>
    </section>
  )
}
