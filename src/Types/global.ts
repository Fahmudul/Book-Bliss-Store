import { ReactNode } from "react";

export type TRoutes = {
  index?: boolean;
  path?: string;
  element?: ReactNode;
  children?: TRoutes[];
  name?: string;
};

export interface TransactionDetails {
  user: string;
  _id: string;
  status: string;
  totalPrice: number;
  createdAt: Date;
  transaction?: {
    method: string;
    id: string;
    transactionStatus: string;
  };
}

export interface IResponseBook {
  _id: string;
  title: string;
  author: string;
  category: string;
  price: number;
  quantity: number;
  inStock: boolean;
}
