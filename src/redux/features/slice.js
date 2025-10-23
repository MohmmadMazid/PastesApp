import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  // pastes: [
  //   { id: nanoid(), title: "first title", description: "my first paste" },
  // ],
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

const pasteSlice = createSlice({
  name: "pastes",
  initialState,
  reducers: {
    createPaste: (state, action) => {
      const { title, description } = action.payload;
      const pasteData = { id: nanoid(), title, description };
      state.pastes = [...state.pastes, pasteData];
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
    },
    updatePaste: (state, action) => {
      let { id, title, description } = action.payload;
      const index = state.pastes.findIndex((paste) => paste.id === id);
      if (index !== -1) {
        state.pastes[index] = { ...state.pastes[index], title, description };
      }
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
    },
    deletePaste: (state, action) => {
      const id = action.payload;
      state.pastes = state.pastes.filter((paste) => paste.id !== id);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
    },
    clearPastes: (state) => {
      state.pastes = [];
      localStorage.setItem("pastes", JSON.stringify([]));
    },
  },
});
export const { createPaste, updatePaste, deletePaste, clearPastes } =
  pasteSlice.actions;

export default pasteSlice.reducer;
