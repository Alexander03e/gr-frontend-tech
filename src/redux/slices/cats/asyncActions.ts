import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
import { CatsState, LIMIT_PER_PAGE } from './types';

export const fetchCats = createAsyncThunk(
  'cats/fetchCats',
  async (currentPage) => {
      try {
        
        const {data} = await axios.get<CatsState[]>(
          `https://api.thecatapi.com/v1/images/search?limit=${LIMIT_PER_PAGE}&page=${currentPage}`,
          {
            headers: {
              "x-api-key": "live_OwhXCBtYEBp8tsuQovNhYNkciA7UWPGE2EXKc1yryA5b3fQuNROWSDUfgEF7cNHS",
            },
          }
        );
        const dataWithFavorite = data.map(item => ({...item, favorite: false}))
        return dataWithFavorite
      } catch (e) {
        console.log(e);
      }
  }
)
