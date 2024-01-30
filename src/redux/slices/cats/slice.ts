import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CatsInitialState, CatsState, Status } from "./types";
import { fetchCats } from "./asyncActions";

const initialState: CatsInitialState = {
  cats: [],
  status: Status.LOADING
}

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    setCats(state,action:PayloadAction<CatsState[]>){
      state.cats.push(...action.payload)
    },
    changeFavorite(state, action: PayloadAction<string>){
      const findCat = state.cats.find(cat => cat.id === action.payload)
      findCat ? findCat.favorite = !findCat.favorite : '';
    }
  },
  extraReducers(builder){
    builder.addCase(fetchCats.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(fetchCats.fulfilled, (state, action) => {
      action.payload ? state.cats.push(...action.payload) : ''
      state.status = Status.SUCCESS
    })
    builder.addCase(fetchCats.rejected, (state) => {
      state.status = Status.ERROR;
    })
  }
})

export const { setCats, changeFavorite } = catsSlice.actions;
export default catsSlice.reducer