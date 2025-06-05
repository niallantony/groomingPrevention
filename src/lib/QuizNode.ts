export type QuizNode = {
  id: number;
  terminus: boolean;
  text: string;
  options?: {
    label: string;
    next: number;
    score: number;
  }[];
  imageSent?: string;
  imageReceived?: string;
}
