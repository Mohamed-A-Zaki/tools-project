export type CardItemType = {
  id: number;
  to: string;
  img: string;
  title: string;
};

export type CardProps = {
  id: number;
  title: string;
  data: CardItemType[];
};