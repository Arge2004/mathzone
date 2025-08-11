import type { Quiz } from "@/types/Quiz";

export const quizData: Quiz = {
  title: "Quiz de Radicaciones",
  synopsis: "Pon a prueba tus conocimientos sobre raíces: operaciones con radicales, suma y resta de radicales semejantes, multiplicación y división de radicales.",
  questions: [
    {
      question: "¿Cuál es el valor de &radic;x<sup>2</sup>?",
      options: ["x<sup>2</sup>", "x", "2x", "x<sup>3</sup>"],
      correctAnswer: 1,
      explanation: "La raíz cuadrada de x<sup>2</sup> es x ya que x por x = x<sup>2</sup>.",
      points: 1
    },
    {
      question: "Si &radic;y = 4, ¿cuánto vale y?",
      options: ["8", "16", "2", "12"],
      correctAnswer: 1,
      explanation: "&radic;y = 4 → y = 4<sup>2</sup> = 16.",
      points: 1
    },
    {
      question: "&radic;3a + &radic;3a =",
      options: ["&radic;6a", "2&radic;3a", "a&radic;6", "3a"],
      correctAnswer: 1,
      explanation: "&radic;3a + &radic;3a = (1+1)&radic;3a = 2&radic;3a.",
      points: 1
    },
    {
      question: "&radic;5x + &radic;7x =",
      options: ["&radic;12x", "2&radic;6x", "No se puede simplificar", "x&radic;12"],
      correctAnswer: 2,
      explanation: "Solo se suman radicales semejantes, y aquí los radicandos son distintos.",
      points: 1
    },
    {
      question: "2&radic;2x - &radic;2x =",
      options: ["&radic;2x", "&radic;4x", "x&radic;2", "No se puede simplificar"],
      correctAnswer: 0,
      explanation: "2&radic;2x - &radic;2x = (2-1)&radic;2x = &radic;2x.",
      points: 1
    },
    {
      question: "&radic;7m - &radic;3m =",
      options: ["&radic;4m", "No se puede simplificar", "4m", "m&radic;4"],
      correctAnswer: 1,
      explanation: "La resta solo se hace si los radicales son semejantes.",
      points: 1
    },
    {
      question: "&radic;2a × &radic;8a =",
      options: ["&radic;16a<sup>2</sup>", "4a", "2a", "&radic;10a<sup>2</sup>"],
      correctAnswer: 1,
      explanation: "2a × 8a = 16a<sup>2</sup>, y &radic;16a<sup>2</sup> = 4a.",
      points: 1
    },
    {
      question: "Simplifica al máximo &radic;3x × &radic;12x =",
      options: ["&radic;36x<sup>2</sup>", "6x", "&radic;15x<sup>2</sup>", "5x"],
      correctAnswer: 1,
      explanation: "3x × 12x = 36x<sup>2</sup>, y &radic;36x<sup>2</sup> = 6x.",
      points: 1
    },
    {
      question: "&radic;5a × &radic;3b =",
      options: ["&radic;15ab", "&radic;8ab", "15ab", "No se puede simplificar"],
      correctAnswer: 0,
      explanation: "Multiplicamos: 5a × 3b = 15ab.",
      points: 1
    },
    {
      question: "&radic;18x<sup>2</sup> ÷ &radic;2x<sup>2</sup> =",
      options: ["&radic;9", "3", "&radic;16x<sup>2</sup>", "x"],
      correctAnswer: 1,
      explanation: "18x<sup>2</sup> ÷ 2x<sup>2</sup> = 9, y &radic;9 = 3.",
      points: 1
    },
    {
      question: "&radic;6a ÷ &radic;3a =",
      options: ["&radic;2", "&radic;3", "2", "a"],
      correctAnswer: 0,
      explanation: "6a ÷ 3a = 2, y queda &radic;2.",
      points: 1
    },
    {
      question: "&radic;12x ÷ &radic;2 =",
      options: ["&radic;6x", "&radic;24x", "6x", "2&radic;3x"],
      correctAnswer: 0,
      explanation: "12x ÷ 2 = 6x, y queda &radic;6x.",
      points: 1
    }
  ]
}
