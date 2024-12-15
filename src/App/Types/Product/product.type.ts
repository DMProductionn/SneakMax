export interface IProducts {
  meta: {
    current_page: number;
    per_page: number;
    remaining_count: number;
    total_items: number;
    total_pages: number;
  };
  items: TypeProduct[];
}

export type TypeProduct = {
  id: number;
  vendorСode: string;
  inStock: number;
  title: string;
  description: string;
  imgUrl: string;
  stars: number;
  sizes: number[];
  price: number;
  oldPrice: number;
  gender: 'Женский' | 'Мужской';
  color: string;
  compound: string;
  country: string;
  count: number;
};
