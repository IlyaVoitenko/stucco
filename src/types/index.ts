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
  type: string;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  sizes: [
    {
      id: number;
      productId: number;
      width: number;
      height: null;
      depth: null;
      diameter: number;
      itemPrice: number;
      createdAt: string;
    },
  ];
  category: {
    id: number;
    name: string;
    image: string;
    hasWidth: boolean;
    hasHeight: boolean;
    hasDepth: boolean;
    hasDiameter: boolean;
    createdAt: string;
    updatedAt: string;
  };
}
