import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profiles",
  initialState: {
    profiles: [],
  },
  reducers: {
    addUser(state, action) {
      state.profiles.push({ newUser: action.payload.aboutMe });
    },
    toggleUserState(state, action) {},
    deleteUser(state, action) {},
  },
});

export const { addUser, toggleUserState, deleteUser } = profileSlice.actions;

export default profileSlice.reducer;
