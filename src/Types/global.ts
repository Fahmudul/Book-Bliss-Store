import { ReactNode } from "react";

export type TRoutes = {
  path?: string;
  element?: ReactNode;
  children?: TRoutes[];
  name?: string;
};
