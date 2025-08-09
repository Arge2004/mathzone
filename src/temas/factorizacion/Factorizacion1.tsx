import React from "react";

export default function Factorizacion1() {
  return (
    <article className="flex flex-col gap-5 mb-8 px-10 text-justify items-center text-lg/relaxed">
      <h2 className="h2-temas">Factorización</h2>
      <p>
        La factorización es un proceso que consiste en descomponer una expresión
        algebraica en el producto de factores más simples. Es como “desarmar”
        una expresión para escribirla como una multiplicación, en lugar de una
        suma o una forma expandida.
      </p>
      <span className="font-semibold self-start">Sirve para:</span>
      <ul className="list-disc pl-5">
        <li>Simplificar Expresiones</li>
        <li>Resolver Ecuaciones</li>
        <li>Encontrar raíces o soluciones</li>
      </ul>
      <p>
        Existen diferentes métodos de factorizar según el tipo de expresión
        algebraica. A continuación aprenderás los casos más comunes uno por
        uno, con ejemplos sencillos.
      </p>
    </article>
  );
}
