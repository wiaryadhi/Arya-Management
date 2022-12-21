export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating?: number;
  stock?: number;
  category?: string;
  thumbnail?: string;
  images?: Array<string>;
  brand?: string;
  isDeleted?: boolean;
}

export interface IProductWrapper {
  products: Array<IProduct>;
  total: number;
  skip: number;
  limit: number;
}
