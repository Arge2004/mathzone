export interface Question {
  question: string;
  options: string[];
  correctAnswer: number; // índice en el arreglo 'options'
  explanation: string;
  points: number;
}

export interface Quiz {
  title: string;
  synopsis: string;
  questions: Question[];
}