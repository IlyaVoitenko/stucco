export type TypesProduct = "piece" | "meter";
export interface ICategory {
  id: number;
  name: string;
  image: string;
  updatedAt: string;
  createdAt: string;
}
export interface IProduct {
  id: number;
  name: string;
  description: string;
  images: string[];

  material: string;
  price: number;
  sku: null | string;
  type: TypesProduct;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  sizes: IProductSize[];

  category: ICategory;
}
export interface IProductSize {
  id: number;
  productId: number;
  width: number | null;
  height: number | null;
  depth: number | null;
  diameter: number | null;
  itemPrice: number;
  createdAt: string;
}
export interface ICategory {
  id: number;
  name: string;
  image: string;
  hasWidth: boolean;
  hasHeight: boolean;
  hasDepth: boolean;
  hasDiameter: boolean;
  createdAt: string;
  updatedAt: string;
}
