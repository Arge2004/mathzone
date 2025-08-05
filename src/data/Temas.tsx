import potenciacion from "@/assets/operaciones/potenciacion.png";
import radicacion from "@/assets/operaciones/radicacion.png";
import logaritmacion from "@/assets/operaciones/logaritmacion.png";
import factorizacion from "@/assets/operaciones/factorizacion.png";
import { StaticImageData } from "next/image";

export type Tema = {
  id: number;
  title: string;
  description: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
};

export const temas: Tema[] = [
  {
    id: 1,
    title: "Potenciación",
    description: "Explora las bases y exponentes, propiedades de las potencias y su aplicación en expresiones algebraicas.",
    image: {
      src: potenciacion,
      alt: "Potenciación",
    },
  },
  {
    id: 2,
    title: "Radicación",
    description: "Aprende sobre raíces cuadradas, cúbicas y sus propiedades, así como su relación con la potenciación.",
    image: {
      src: radicacion,
      alt: "Radicación",
    },
  },
  {
    id: 3,
    title: "Logaritmación",
    description: "Entiende qué son los logaritmos, sus propiedades y cómo resolver ecuaciones logarítmicas.",
    image: {
      src: logaritmacion,
      alt: "Logaritmación",
    },
  },
  {
    id: 4,
    title: "Factorización",
    description: "Descubre métodos para descomponer expresiones algebraicas y resolver ecuaciones mediante factorización.",
    image: {
      src: factorizacion,
      alt: "Factorización",
    },
  },
];