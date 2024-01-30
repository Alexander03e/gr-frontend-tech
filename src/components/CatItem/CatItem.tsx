import React from "react";
import { CatsState } from "../../redux/slices/cats/types";
import styles from "./CatItem.module.css";
import { useAppDispatch } from "../../redux/hooks";
import { changeFavorite } from "../../redux/slices/cats/slice";
import { LikeIcon } from "./LikeIcon";
export interface CatItemProps extends CatsState {}

export const CatItem: React.FC<CatsState> = (item: CatsState) => {
  const dispatch = useAppDispatch();

  const changeFavoriteStatus = () => {
    dispatch(changeFavorite(item.id));
  };

  return (
    <div className={styles.wrapper}>
      <img loading="lazy" src={item.url} alt={item.breeds[0]?.name} />
      <button className={styles.like} onClick={changeFavoriteStatus}>
        <LikeIcon favoriteStatus={item.favorite} />
      </button>
    </div>
  );
};
