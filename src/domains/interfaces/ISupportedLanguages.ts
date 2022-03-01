export interface ISupportedLanguages {
  [key: string]: ILanguage;
}

interface ILanguage {
  nativeName: string;
  image: string;
}
