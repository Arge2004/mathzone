import { Quiz } from "@/types/Quiz";
export const quizData: Quiz = {
  title: "Quiz de Logaritmos",
  synopsis:
    "Pon a prueba tus conocimientos sobre logaritmos: cálculos básicos y propiedades fundamentales como el producto, cociente y potencia.",
  questions: [
    {
      question: "¿Cuál es el valor de log<sub>10</sub>(1000)?",
      options: ["2", "3", "4", "10"],
      correctAnswer: 1,
      explanation:
        "10<sup>3</sup> = 1000, por lo tanto log<sub>10</sub>(1000) = 3.",
      points: 1
    },
    {
      question: "log<sub>2</sub>(8) es igual a:",
      options: ["2", "3", "4", "8"],
      correctAnswer: 1,
      explanation:
        "2<sup>3</sup> = 8, por lo tanto log<sub>2</sub>(8) = 3.",
      points: 1
    },
    {
      question: "¿Cuál es el valor de log<sub>5</sub>(25)?",
      options: ["1", "2", "3", "4"],
      correctAnswer: 1,
      explanation:
        "5<sup>2</sup> = 25, por lo tanto log<sub>5</sub>(25) = 2.",
      points: 1
    },
    {
      question: "log<sub>10</sub>(1) es igual a:",
      options: ["0", "1", "Indefinido", "10"],
      correctAnswer: 0,
      explanation:
        "log<sub>10</sub>(1) = 0 porque 10<sup>0</sup> = 1.",
      points: 1
    },
    {
      question:
        "Usando la propiedad del producto, log<sub>3</sub>(9) + log<sub>3</sub>(3) es igual a:",
      options: [
        "log<sub>3</sub>(27)",
        "log<sub>3</sub>(12)",
        "log<sub>3</sub>(6)",
        "log<sub>3</sub>(81)"
      ],
      correctAnswer: 0,
      explanation:
        "log<sub>3</sub>(9) + log<sub>3</sub>(3) = log<sub>3</sub>(9·3) = log<sub>3</sub>(27).",
      points: 1
    },
    {
      question:
        "log<sub>5</sub>(25) + log<sub>5</sub>(5) equivale a:",
      options: [
        "log<sub>5</sub>(125)",
        "log<sub>5</sub>(30)",
        "log<sub>5</sub>(15)",
        "log<sub>5</sub>(5)"
      ],
      correctAnswer: 0,
      explanation:
        "Usando la propiedad del producto: log<sub>5</sub>(25) + log<sub>5</sub>(5) = log<sub>5</sub>(125).",
      points: 1
    },
    {
      question:
        "Usando la propiedad del cociente, log<sub>2</sub>(16) − log<sub>2</sub>(4) es igual a:",
      options: [
        "log<sub>2</sub>(4)",
        "log<sub>2</sub>(12)",
        "log<sub>2</sub>(8)",
        "log<sub>2</sub>(2)"
      ],
      correctAnswer: 0,
      explanation:
        "16 ÷ 4 = 4, por lo tanto log<sub>2</sub>(4) = 2.",
      points: 1
    },
    {
      question:
        "log<sub>7</sub>(49) − log<sub>7</sub>(7) equivale a:",
      options: [
        "log<sub>7</sub>(1)",
        "log<sub>7</sub>(7)",
        "log<sub>7</sub>(42)",
        "log<sub>7</sub>(343)"
      ],
      correctAnswer: 1,
      explanation:
        "49 ÷ 7 = 7, por lo tanto log<sub>7</sub>(7) = 1.",
      points: 1
    },
    {
      question:
        "Aplicando la propiedad de la potencia: log<sub>4</sub>(64) se puede escribir como:",
      options: [
        "3 · log<sub>4</sub>(4)",
        "2 · log<sub>4</sub>(16)",
        "4 · log<sub>4</sub>(4)",
        "log<sub>4</sub>(4<sup>3</sup>)"
      ],
      correctAnswer: 0,
      explanation:
        "log<sub>4</sub>(64) = log<sub>4</sub>(4<sup>3</sup>) = 3·log<sub>4</sub>(4).",
      points: 1
    },
    {
      question: "log<sub>3</sub>(3<sup>3</sup>) puede reescribirse como:",
      options: [
        "log<sub>3</sub>(3<sup>2</sup>)",
        "3 · log<sub>3</sub>(3)",
        "log<sub>3</sub>(3<sup>3</sup>)",
        "2 · log<sub>3</sub>(3)"
      ],
      correctAnswer: 1,
      explanation:
        "log<sub>3</sub>(27) = log<sub>3</sub>(3<sup>3</sup>) = 3·log<sub>3</sub>(3).",
      points: 1
    }
  ]
};
