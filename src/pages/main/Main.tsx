import { CatsList } from "../../components/CatsList/CatsList";
// import React, { Suspense } from "react";
import { useAppSelector } from "../../redux/hooks";

export const Main = () => {
  const { cats, status } = useAppSelector((state) => state.cats);

  return <CatsList cats={cats} status={status} />;
};
