import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Infos = {
  [index: string]: unknown;
};

export type SignsState = {
  infos: Infos;
};

const signsSlice = createSlice({
  name: "signs",
  initialState: {
    infos: {},
  },
  reducers: {
    updateInfos(state, action: PayloadAction<Infos>) {
      state.infos = action.payload;
    },
  },
});
export default signsSlice.reducer;
