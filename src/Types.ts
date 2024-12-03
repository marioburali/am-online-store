export type Category = {
  id: string;
  name: string;
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
