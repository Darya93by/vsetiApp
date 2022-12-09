import { configureStore } from "@reduxjs/toolkit";
import profileReduser from "./profileSlice";
import accauntReduser from "./accauntSlice";

const Store = configureStore({
  reducer: {
    profiles: profileReduser,
    accaunt: accauntReduser,
  },
});
export default Store;
