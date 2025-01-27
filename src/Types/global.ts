import { ReactNode } from "react";

export type TRoutes = {
  index?: boolean;
  path?: string;
  element?: ReactNode;
  children?: TRoutes[];
  name?: string;
};
