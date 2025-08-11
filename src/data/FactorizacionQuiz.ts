import { Quiz } from "@/types/Quiz";
export const quizData: Quiz = {
  title: "Quiz de Factorización",
  synopsis:
    "Pon a prueba tus conocimientos de factorización: factor común, agrupación, diferencia de cuadrados, diferencia de cubos y trinomios cuadrados perfectos.",
  questions: [
    {
      question: "Factoriza: 6x + 9",
      options: ["x(6 + 9)", "3(2x + 3)", "No se puede factorizar", "6(x + 1.5)"],
      correctAnswer: 1,
      explanation: "El MCD de 6 y 9 es 3, se extrae: 3(2x + 3).",
      points: 1
    },
    {
      question: "Factoriza: 8a<sup>2</sup> - 12a",
      options: ["4a(2a - 3)", "No se puede factorizar", "2(4a<sup>2</sup> - 6a)", "a(8a - 12)"],
      correctAnswer: 0,
      explanation: "El MCD de 8a² y -12a es 4a, se extrae: 4a(2a - 3).",
      points: 1
    },
    {
      question: "Factoriza: 15xy - 20x<sup>2</sup>y<sup>2</sup>",
      options: ["No se puede factorizar", "x(15y - 20xy<sup>2</sup>)", "5xy(3 - 4xy)", "y(15x - 20x<sup>2</sup>y)"],
      correctAnswer: 2,
      explanation: "El MCD de 15xy y 20x²y² es 5xy, se extrae: 5xy(3 - 4xy).",
      points: 1
    },
    {
      question: "Factoriza por agrupación: ax + ay + bx + by",
      options: ["a(x + y) + b(x + y)", "(x + y)(a - b)", "(a + b)(x + y)", "No se puede factorizar"],
      correctAnswer: 2,
      explanation: "Se agrupa: a(x + y) + b(x + y) = (a + b)(x + y).",
      points: 1
    },
    {
      question: "Factoriza por agrupación: 3m + 6n + pm + 2pn",
      options: ["(3 - p)(m + 2n)", "(m + 2n)(3 + p)", "(3 - p)(m - 2n)", "No se puede factorizar"],
      correctAnswer: 1,
      explanation: "Se agrupa: m(3 + p) + 2n(3 + p) = (m + 2n)(3 + p).",
      points: 1
    },
    {
      question: "Factoriza por agrupación: xy - 2x + 3y - 6",
      options: ["(x - 3)(y + 2)", "(y - 2)(x + 3)", "No se puede factorizar", "(x + 3)(y - 2)"],
      correctAnswer: 1,
      explanation: "Se agrupa: x(y - 2) + 3(y - 2) = (y - 2)(x + 3).",
      points: 1
    },
    {
      question: "Factoriza: x<sup>2</sup> - 25",
      options: ["(x - 25)(x + 25)", "(x - 5)(x + 5)", "(x - 5)<sup>2</sup>", "No se puede factorizar"],
      correctAnswer: 1,
      explanation: "x² - 25 = x² - 5² = (x - 5)(x + 5).",
      points: 1
    },
    {
      question: "Factoriza: 9a<sup>2</sup> - 16b<sup>2</sup>",
      options: ["(9a - 16b)(9a + 16b)", "(3a - 4b)(3a + 4b)", "No se puede factorizar", "(a - 4b)(a + 4b)"],
      correctAnswer: 1,
      explanation: "9a² - 16b² = (3a)² - (4b)² = (3a - 4b)(3a + 4b).",
      points: 1
    },
    {
      question: "Factoriza: 4x<sup>2</sup> - 49y<sup>2</sup>",
      options: ["(2x - 7y)(2x + 7y)", "(x - 7y)(x + 7y)", "(4x - 49y)(4x + 49y)", "No se puede factorizar"],
      correctAnswer: 0,
      explanation: "4x² - 49y² = (2x)² - (7y)² = (2x - 7y)(2x + 7y).",
      points: 1
    },
    {
      question: "Factoriza: x<sup>3</sup> - 27",
      options: ["No se puede factorizar", "(x - 3)(x<sup>2</sup> - 3x + 9)", "(x - 3)(x<sup>2</sup> + 3x + 9)", "(x - 27)(x<sup>2</sup> + 27x + 729)"],
      correctAnswer: 2,
      explanation: "x³ - 27 = (x - 3)(x² + 3x + 9).",
      points: 1
    },
    {
      question: "Factoriza: 8a<sup>3</sup> - b<sup>3</sup>",
      options: ["(2a - b)(4a<sup>2</sup> - 2ab + b<sup>2</sup>)", "No se puede factorizar", "(a - b)(a<sup>2</sup> + ab + b<sup>2</sup>)", "(2a - b)(4a<sup>2</sup> + 2ab + b<sup>2</sup>)"],
      correctAnswer: 3,
      explanation: "8a³ - b³ = (2a - b)(4a² + 2ab + b²).",
      points: 1
    },
    {
      question: "Factoriza: 27x<sup>3</sup> - 64y<sup>3</sup>",
      options: ["(3x - 4y)(9x<sup>2</sup> + 12xy + 16y<sup>2</sup>)", "(x - y)(x<sup>2</sup> + xy + y<sup>2</sup>)", "(3x - 4y)(9x<sup>2</sup> - 12xy + 16y<sup>2</sup>)", "No se puede factorizar"],
      correctAnswer: 0,
      explanation: "27x³ - 64y³ = (3x - 4y)(9x² + 12xy + 16y²).",
      points: 1
    },
    {
      question: "Factoriza: x<sup>2</sup> + 6x + 9",
      options: ["(x + 9)(x - 3)", "No se puede factorizar", "(x + 6)(x + 3)", "(x + 3)<sup>2</sup>"],
      correctAnswer: 3,
      explanation: "x² + 6x + 9 = (x + 3)².",
      points: 1
    },
    {
      question: "Factoriza: 4a<sup>2</sup> - 12a + 9",
      options: ["(2a - 3)(2a + 3)", "(a - 3)<sup>2</sup>", "(2a - 3)<sup>2</sup>", "No se puede factorizar"],
      correctAnswer: 2,
      explanation: "4a² - 12a + 9 = (2a - 3)².",
      points: 1
    },
    {
      question: "Factoriza: 9m<sup>2</sup> + 24mn + 16n<sup>2</sup>",
      options: ["(m + 4n)<sup>2</sup>", "(3m + 4n)<sup>2</sup>", "(3m + 4n)(3m - 4n)", "No se puede factorizar"],
      correctAnswer: 1,
      explanation: "9m² + 24mn + 16n² = (3m + 4n)².",
      points: 1
    }
  ]
};
