import { createSlice } from "@reduxjs/toolkit";
import { instance } from "../api/instance";

const initialState = {
  user: {},
  // loading: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    // setLoading: (state) => {
    //   state.loading = false;
    // },
  },
});

// Async action creator
export const getAuthUser = () => async (dispatch) => {
  try {
    const response = await instance.get("/user");
    if (response.data.data) {
      dispatch(userSlice.actions.setUser(response.data.data)); // Dispatch user data to the reducer
    }
  } catch (error) {
    // Handle errors here
    console.error("Error fetching user data:", error);
  }
};

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
