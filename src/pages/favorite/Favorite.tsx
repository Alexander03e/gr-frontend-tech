import { CatsList } from "../../components/CatsList/CatsList";
import { useAppSelector } from "../../redux/hooks";
import { Status } from "../../redux/slices/cats/types";

export const Favorite = () => {
  const favoriteCats = useAppSelector((state) => state.cats.cats).filter(
    (cat) => cat.favorite === true
  );

  return (
    <>
      {Array.isArray(favoriteCats) && favoriteCats.length === 0 ? (
        <h1>Любимых котиков пока нет :( </h1>
      ) : (
        <CatsList cats={favoriteCats} status={Status.SUCCESS} />
      )}
    </>
  );
};
