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

type ProductDataType = {
  id: string;
  name: string;
  description: string;
  imgURLS: string[];
  rate: number;
  price: number;
  stock: number;
  discount: number;
};

type ProductFieldsConfig = {
  id: string;
  title?: string;
  description?: string;
  imgURLS?: string[];
  price?: number;
  rate?: number;
  discount?: number;
  catergoryId?: string;
  stocke?: number;
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

type ProductFields = {
  id: boolean;
  title?: boolean;
  description?: boolean;
  imgURLS?: boolean;
  price?: boolean;
  rate?: boolean;
  discount?: boolean;
  categoryId?: boolean;
  stocke?: boolean;
};
// id                    String @id @default(auto()) @map("_id") @db.ObjectId
// title                 String
// description           String
// imgURLS               String[]
// price                 Int
// discount              Float
// rate                  Float
// category             String
// created_at            DateTime @default(now())
export {
  ReviewType,
  ProductDetailType,
  ProductType,
  ProductFieldsConfig,
  ProductFields,
  ProductDataType,
  CreateReviewType,
};
