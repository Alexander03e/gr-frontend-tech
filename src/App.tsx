import React from "react";
import { Header } from "./components/Header/Header";
import { MainRoutes } from "./routes/MainRoutes";
import { fetchCats } from "./redux/slices/cats/asyncActions";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { useInView } from "react-intersection-observer";
import { setCurrentPage } from "./redux/slices/pagination/slice";

function App() {
  const dispatch = useAppDispatch();
  const { currentPage } = useAppSelector((state) => state.pagination);
  const getCats = async () => {
    await dispatch(fetchCats());
  };
  const setPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  React.useEffect(() => {
    getCats();
    inView ? setPage() : "";
  }, [inView]);

  return (
    <>
      <Header />
      <div className="container">
        <MainRoutes />
      </div>
      <div ref={ref} className="scroll-trigger"></div>
    </>
  );
}

export default App;
