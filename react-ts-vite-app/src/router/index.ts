import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { lazyLoad } from "@/core/Router/utils";

declare module "react-router" {
  interface IndexRouteObject {
    meta?: {
      menu?: boolean;
      title?: string;
      icon?: React.ReactNode;
      auth?: boolean;
    };
    name?: string;
  }
  interface NonIndexRouteObject {
    meta?: {
      menu?: boolean;
      title?: string;
      icon?: React.ReactNode;
      auth?: boolean;
    };
    name?: string;
  }
}

export const routes: RouteObject[] = [
  {
    path: "/",
    element: lazyLoad(lazy(() => import("@/views/Sign/Sign"))),
  },
  {
    path: "/home",
    element: lazyLoad(lazy(() => import("@/views/Home/Home"))),
  },
  {
    path: "/login",
    element: lazyLoad(lazy(() => import("@/views/Login/Login"))),
  },
];
const router = createBrowserRouter(routes);
export default router;
