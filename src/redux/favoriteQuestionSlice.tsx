import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface favoriteQuestionState {
  favoriteQuestions: (string | number | '')[];
}
const initialState: favoriteQuestionState = {
  favoriteQuestions: [],
};

export const favoriteQuestionSlice = createSlice({
  name: 'favoriteQuestionReducer',
  initialState,
  reducers: {
    addToFavoriteQuestionList: (state, {payload}) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.favoriteQuestions = [...state.favoriteQuestions, payload];
    },
    removeFromFavoriteQuestionList: (state, {payload}) => {
      state.favoriteQuestions = state.favoriteQuestions?.filter(
        item => item?.question !== payload?.question,
      );
    },
    unfavoriteAllQuestions: state => {
      state.favoriteQuestions = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToFavoriteQuestionList,
  removeFromFavoriteQuestionList,
  unfavoriteAllQuestions,
} = favoriteQuestionSlice.actions;

export default favoriteQuestionSlice.reducer;
