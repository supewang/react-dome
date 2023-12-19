import { configureStore } from "@reduxjs/toolkit";
import signsReducer from "./modules/signs";

const store = configureStore({
  reducer: {
    signs: signsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
