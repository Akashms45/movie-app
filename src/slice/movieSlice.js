import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  searchValue: "",
  genreSearch: "",
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setGenreSearch: (state, action) => {
      state.genreSearch = action.payload;
    },
  },
});

export const { setMovies, setSearchValue, setGenreSearch } = movieSlice.actions;

export default movieSlice.reducer;
