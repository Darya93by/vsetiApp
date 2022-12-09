import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "null",
  key: "null",
  lastname: "null",
  avatar: "null",
  birthday: "null",
  city: "null",
  interests: "null",
  groups: "null",
  friends: "",
};

const accauntSlice = createSlice({
  name: "accaunt",
  initialState,
  reducers: {
    addAccaunt(state, action) {
      state.key = action.payload.key;
      state.name = action.payload.name;
      state.lastname = action.payload.lastname;
      state.avatar = action.payload.avatar;
      state.birthday = action.payload.birthday;
      state.city = action.payload.city;
    },
    addInterests(state, action) {
      state.interests = action.payload.interests;
    },
    addFriends(state, action) {
      state.friends = action.payload.friends;
    },
    addGroup(state, action) {
      state.groups = action.payload.groups;
    },

    toggleAccauntState(state, action) {},
    deleteAccaunt(state, action) {},
  },
});

export const {
  addAccaunt,
  addInterests,
  addFriends,
  addGroup,
  toggleAccauntState,
  deleteAccaunt,
} = accauntSlice.actions;

export default accauntSlice.reducer;
