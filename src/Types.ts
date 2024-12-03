export type Category = {
  id: string;
  name: string;
};

export type CategoriesProps = {
  setResults: React.Dispatch<React.SetStateAction<Result[]>>;
  setIsSearched: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SearchBarProps = {
  setResults: React.Dispatch<React.SetStateAction<Result[]>>;
  setIsSearched: React.Dispatch<React.SetStateAction<boolean>>;
};

export type Result = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
};

export type CardProps = {
  key: string;
  title: string;
  thumbnail: string;
  price: number;
};
