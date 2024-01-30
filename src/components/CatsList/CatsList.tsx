import React from "react";
import styles from "./CatsList.module.css";

import { CatItem } from "../CatItem/CatItem";
import { Skeleton } from "./Skeleton";
import { CatsInitialState } from "../../redux/slices/cats/types";

export const CatsList: React.FC<CatsInitialState> = ({ cats, status }) => {
  const items = cats.map((cat: any) => <CatItem {...cat} key={cat.id} />);

  const skeleton = Array(15)
    .fill(null)
    .map((_, i) => <Skeleton key={i} />);

  return (
    <div className={styles.wrapper}>
      {items}
      {status === "loading" && skeleton}
      {status === "error" && <h1>Произошла ошибка, попробуйте позже...</h1>}
    </div>
  );
};
