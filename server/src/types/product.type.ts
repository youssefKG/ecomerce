import {
  Product as ProductDetailType,
  Review as ReviewType,
} from "@prisma/client";

type ProductType = {
  id: string;
  name: string;
  imgURLS: string[];
  price: number;
  rate: number;
  discount: number;
  stock: number;
};

type ProductFieldsConfig = {
  id: string;
  name?: string;
  description?: string;
  imgURLS?: string[];
  price?: number;
  rate?: number;
  discount?: number;
  catergoryId?: string;
  stock?: number;
};

interface CreateReviewType {
  productId: string;
  authorId: string;
  firstName: string;
  lastName: string;
  imgURL: string;
  content: string;
  likes: number;
  dislikes: number;
  rate: number;
}

type ReviewDataType = {
  authorId: string;
  content: string;
  rate: number;
  productId: string;
};

type ProductFields = {
  id: boolean;
  name?: boolean;
  description?: boolean;
  imgURLS?: boolean;
  price?: boolean;
  rate?: boolean;
  discount?: boolean;
  categoryId?: boolean;
  stock?: boolean;
};

interface NewProductType {
  name: string;
  description: string;
  imgURLS: string[];
  price: number;
  discount: number;
  rate: number;
  categoryId: string;
  stock: number;
}

type CreateProductInput = {
  name: string;
  description: string;
  imgURLS: string[];
  rate: number;
  discount: number;
  stock: number;
  price: number;
  categoryId: string;
};

type LineItem = {
  price: string;
  quantite: number;
};

type ProductSearchType = {
  id: string;
  name: string;
  imgURLS: string[];
};

export {
  ReviewType,
  ProductDetailType,
  ProductType,
  ProductFieldsConfig,
  ProductFields,
  CreateReviewType,
  ReviewDataType,
  NewProductType,
  CreateProductInput,
  LineItem,
  ProductSearchType,
};
