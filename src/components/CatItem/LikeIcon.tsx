import React from "react";
import styles from "./CatItem.module.css";

interface LikeIconProps {
  favoriteStatus: boolean;
}

export const LikeIcon: React.FC<LikeIconProps> = ({ favoriteStatus }) => {
  return (
    <>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_2229)">
          <path
            className={styles.likeicon}
            d="M24 42.7L21.1 40.06C10.8 30.72 4 24.56 4 17C4 10.84 8.84 6 15 6C18.48 6 21.82 7.62 24 10.18C26.18 7.62 29.52 6 33 6C39.16 6 44 10.84 44 17C44 24.56 37.2 30.72 26.9 40.08L24 42.7Z"
            fill={favoriteStatus ? "var(--like-color)" : "none"}
            stroke="var(--like-color)"
            strokeWidth="4"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2229">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};