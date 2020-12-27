import { lazy } from "react";

const Products = lazy(() => import("../products"));
const Login = lazy(() => import("../login"));

export const routeList = [
  {
    path: "/",
    component: Products,
    exact: true
  },
  {
    path: "/login",
    component: Login,
    exact: true
  }
];
