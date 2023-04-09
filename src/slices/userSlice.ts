import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  username: string;
}

const initialState: UserState = {
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      // Set the username to the value passed in the action payload
      state.username = action.payload;
    },
  },
});

// Export the action creators
export const { setUsername } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
