import { configureStore } from "@reduxjs/toolkit";
import pasteReducer from "../features/slice";
const store = configureStore({
  reducer: {
    pastes: pasteReducer,
  },
});

export default store;
