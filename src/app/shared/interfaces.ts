export type Sentence = {
  [key: number]: string;
};

export type IncomingMessage = {
  [key: string]: Sentence | string;
};

export type RecognitionStatus = {
  [key: string]: string;
};

export type Settings = {
  darkTheme: boolean;
  initLoadLastNMinutes: number;
  mainPrompt: string;
};
