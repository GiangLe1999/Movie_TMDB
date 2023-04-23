import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: {},
  genres: {},
  activeTab: {
    trending: "day",
    tvOrMovie: "movie",
  },
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },

    getGenres: (state, action) => {
      state.genres = action.payload;
    },

    switchTrendingTabs: (state, action) => {
      state.activeTab.trending = action.payload;
    },

    switchTvOrMovieTabs: (state, action) => {
      state.activeTab.tvOrMovie = action.payload;
    },
  },
});

export default homeSlice.reducer;
export const {
  getApiConfiguration,
  getGenres,
  switchTrendingTabs,
  switchTvOrMovieTabs,
} = homeSlice.actions;
