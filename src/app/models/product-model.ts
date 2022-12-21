export class ProductModel {
  id: number = 0;
  title: string = "";
  description: string = "";
  price: number = 0;
  discountPercentage: number = 0;
  rating?: number = 0;
  stock?: number = 0;
  category?: string = "";
  thumbnail?: string = "";
  images?: Array<string> = [];
  brand?: string = "";
}
