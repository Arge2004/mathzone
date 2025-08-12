import type { Quiz } from "@/types/Quiz";

export const quizData: Quiz = {
  title: "Potenciación",
  synopsis: "Pon a prueba tus conocimientos sobre potencias.",
  questions: [
    {
      question: "¿Cuál es el resultado de 3<sup>4</sup>?",
      options: ["12", "27", "81", "64"],
    correctAnswer: 2,
    explanation: "3<sup>4</sup> significa multiplicar 3 por sí mismo 4 veces: 3×3×3×3 = 81.",
    points: 1
  },
  {
    question: "¿Cuál es el resultado de 5<sup>3</sup>?",
    options: ["125", "15", "25", "75"],
    correctAnswer: 0,
    explanation: "5×5×5 = 125.",
    points: 1
  },
  {
    question: "Resuelve: 2<sup>3</sup> + 2<sup>3</sup>",
    options: ["2<sup>6</sup>", "16", "4<sup>3</sup>", "12"],
    correctAnswer: 1,
    explanation: "2<sup>3</sup> = 8, y 8+8 = 16",
    points: 1
  },
  {
    question: "Resuelve: 3<sup>2</sup> + 3<sup>2</sup>",
    options: ["3<sup>4</sup>", "18", "6<sup>2</sup>", "16"],
    correctAnswer: 1,
    explanation: "3<sup>2</sup> = 9, 9+9 = 18",
    points: 1
  },
  {
    question: "Resuelve: 4<sup>3</sup> - 4<sup>3</sup>",
    options: ["0", "4<sup>0</sup>", "4×4<sup>3</sup>", "64"],
    correctAnswer: 0,
    explanation: "Si los valores son iguales, su diferencia es 0.",
    points: 1
  },
  {
    question: "Resuelve: 5<sup>3</sup> - 5<sup>2</sup>",
    options: ["5<sup>1</sup>", "25", "125", "100"],
    correctAnswer: 3,
    explanation: "5<sup>3</sup> = 125, 5<sup>2</sup> = 25, entonces 125 - 25 = 100.",
    points: 1
  },
  {
    question: "Simplifica: 2<sup>3</sup> × 2<sup>4</sup>",
    options: ["2<sup>12</sup>", "2<sup>7</sup>", "2<sup>1</sup>", "2<sup>81</sup>"],
    correctAnswer: 1,
    explanation: "Multiplicar potencias de igual base: se suman los exponentes → 2<sup>7</sup>.",
    points: 1
  },
  {
    question: "Simplifica: 3<sup>4</sup> × 5<sup>4</sup>",
    options: ["15<sup>8</sup>", "15<sup>4</sup>", "8<sup>15</sup>", "8<sup>4</sup>"],
    correctAnswer: 1,
    explanation: "Bases distintas pero mismo exponente: (3×5)<sup>4</sup> = 15<sup>4</sup>.",
    points: 1
  },
  {
    question: "Simplifica: 2<sup>3</sup> × 3<sup>2</sup>",
    options: ["54", "2<sup>5</sup>", "72", "81"],
    correctAnswer: 2,
    explanation: "2<sup>3</sup> = 8 y 3<sup>2</sup> = 9; 8×9 = 72.",
    points: 1
  },
  {
    question: "Simplifica: 5<sup>6</sup> ÷ 5<sup>2</sup>",
    options: ["5<sup>8</sup>", "5<sup>3</sup>", "5<sup>4</sup>", "5<sup>12</sup>"],
    correctAnswer: 2,
    explanation: "Dividir potencias de igual base: 6−2 = 4 → 5<sup>4</sup>.",
    points: 1
  },
  {
    question: "Simplifica: 12<sup>5</sup> ÷ 6<sup>5</sup>",
    options: ["4<sup>5</sup>", "12<sup>5</sup>", "2<sup>5</sup>", "6<sup>5</sup>"],
    correctAnswer: 2,
    explanation: "Bases distintas, mismo exponente: 12 ÷ 6 = 2 → 2<sup>5</sup>.",
    points: 1
  },
  {
    question: "Simplifica: 2<sup>4</sup> ÷ 3<sup>2</sup>",
    options: ["2/3<sup>2</sup>", "4/3<sup>2</sup>", "16/9", "16/6"],
    correctAnswer: 2,
    explanation: "2<sup>4</sup> = 16, 3<sup>2</sup> = 9, 16 ÷ 9 = 16/9.",
    points: 1
  },
  {
    question: "Simplifica: (2<sup>3</sup>)<sup>4</sup>",
    options: ["2<sup>12</sup>", "2<sup>7</sup>", "8<sup>4</sup>", "2<sup>81</sup>"],
    correctAnswer: 0,
    explanation: "(2<sup>3</sup>)<sup>4</sup> = 2<sup>3×4</sup> = 2<sup>12</sup>.",
    points: 1
  },
  {
    question: "Resuelve: (3a<sup>2</sup> b)<sup>3</sup>",
    options: ["9a<sup>6</sup>b<sup>2</sup>", "27a<sup>6</sup>b<sup>3</sup>", "6a<sup>3</sup>b<sup>3</sup>", "81a<sup>5</sup>b<sup>3</sup>"],
    correctAnswer: 1,
    explanation: "3³=27, (a²)³ = a⁶, b³ = b³ → 27a⁶b³.",
    points: 1
  }
  ]
};
