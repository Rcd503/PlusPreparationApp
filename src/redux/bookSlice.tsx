import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {BASE_API} from '../../config'
export interface CounterState {
  books: (string | number | '')[];
  status?: STATUSES;
}
export enum STATUSES {
  IDLE = 'idle',
  ERROR = 'error',
  LOADING = 'loading',
}
const initialState: CounterState = {
  books: [],
  status: STATUSES.IDLE,
};

export const bookSlice = createSlice({
  name: 'bookReducer',
  initialState,
  reducers: {
    setBooksData: (state, {payload}) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.books = payload;
    },
    setStatus: (state, {payload}) => {
      state.status = payload;
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      // Add user to the state array
      .addCase(fetchBooks.pending, (state, action) => {
        state.status = STATUSES.LOADING;
        state.books = [];
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        (state.books = action?.payload), (state.status = STATUSES.IDLE);
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

// Action creators are generated for each case reducer function
export const {setBooksData, setStatus} = bookSlice.actions;

export default bookSlice.reducer;

export const fetchBooks = createAsyncThunk('book/fetch', async () => {
  const res = await fetch(BASE_API);
  const data = await res.json();

  return data;
});
