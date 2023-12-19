import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Token = string;
export type Infos = {
  [index: string]: unknown;
};
export type UsersState = {
  token: Token;
  infos: Infos;
};
type Login = {
  email: string;
  pass: string;
};

const usersSlice = createSlice({
  name: "users",
  initialState: {
    token: "",
    infos: {},
  },
  reducers: {
    updateToken(state, action: PayloadAction<Token>) {
      state.token = action.payload;
    },
    updateInfos(state, action: PayloadAction<Infos>) {
      state.infos = action.payload;
    },
    clearToken(state) {
      state.token = "";
    },
  },
});

export const { updateInfos, updateToken, clearToken } = usersSlice.actions;
export default usersSlice.reducer;
