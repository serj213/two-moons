interface ICartsState {
  carts: ICartsData[] | null;
  detail: ICartsDetail | null;
}

interface ICartsData {
  id: number;
  image: string;
  name: string;
  price: string;
}

interface ICartsDetail {
  img: string[];
  article: string;
  title: string;
  price: number;
  color: string;
  size: number;
  count: number;
  description: string;
  materials: string;
}

export type { ICartsState, ICartsData, ICartsDetail };
