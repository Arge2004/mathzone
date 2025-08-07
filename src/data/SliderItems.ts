import calculadora from "@/assets/calculadora.png";
import tablero from "@/assets/tablero.png";
import test from "@/assets/test.png";
import persona1 from "@/assets/persona1.png";
import persona2 from "@/assets/persona2.png";
import persona3 from "@/assets/persona3.png";
import { StaticImageData } from "next/image";

export type SliderItem = {
    title: string;
    description: string;
    images: {
        src: StaticImageData;
        alt: string;
    }[];
};


export const items: SliderItem[] = [
    {
        title: "Aprende Matemáticas",
        description: "Este sitio es tu compañero de estudio. Aprende cada tema sin enredos, con explicaciones sencillas de entender y ejercicios para cada uno de ellos.",
        images: [
            { src: calculadora, alt: "Calculadora" },
            { src: persona1, alt: "Persona Estudiando" },
        ],
    },
    {
        title: "Explicaciones Fáciles",
        description: "Aquí encontrarás explicaciones simples, con ejemplos paso a paso para entender todos los temas.",
        images: [
            { src: tablero, alt: "Tablero" },
            { src: persona2, alt: "Persona Estudiando" },
        ],
    },
    {
        title: "¡Desafíate!",
        description:"Pon a prueba lo que aprendiste con nuestros test. Evalúa tu progreso, identifica tus fortalezas y mejora en lo que más lo necesitas.",
        images: [
            { src: test, alt: "Test" },
            { src: persona3, alt: "Persona Estudiando" },
        ],
    },
];