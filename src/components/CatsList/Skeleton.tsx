import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./CatsList.module.css";

export const Skeleton: React.FC = () => (
  <ContentLoader
    className={styles.skeletonWrapper}
    speed={2}
    viewBox="0 0 350 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="103" y="156" rx="0" ry="0" width="2" height="7" />
    <rect x="0" y="0" rx="0" ry="0" width="330" height="330" />
  </ContentLoader>
);
