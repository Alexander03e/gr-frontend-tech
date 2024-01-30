import { configureStore } from "@reduxjs/toolkit";
// import catsReducer from './'
import pagination from "./slices/pagination/slice";
import cats from "./slices/cats/slice";

export const store = configureStore({
  reducer: {
    cats,
    pagination,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
