import { RouteObject, useRoutes } from "react-router-dom";
import { FAVORITES_CATS_PAGE, MAIN_PAGE } from "./config";
import { Main } from "../pages/main/Main";
import { Favorite } from "../pages/favorite/Favorite";

const basePaths: RouteObject[] = [
  { path: MAIN_PAGE, element: <Main /> },
  { path: FAVORITES_CATS_PAGE, element: <Favorite /> },
];

export const MainRoutes = () => useRoutes(basePaths);
