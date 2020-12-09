import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IUser, User } from "../api/example-user";
import { AppThunk, AppState } from ".";

interface UserDate {
  [id: string]: {
    readyStatus: string;
    item?: IUser;
    error?: string;
  };
}

interface Success {
  id: string;
  item: IUser;
}

interface Failure {
  id: string;
  error: string;
}

const userData = createSlice({
  name: "userData",
  initialState: {} as UserDate,
  reducers: {
    getRequesting: (state, { payload }: PayloadAction<string>) => {
      state[payload] = { readyStatus: "request" };
    },
    getSuccess: (state, { payload }: PayloadAction<Success>) => {
      state[payload.id] = { readyStatus: "success", item: payload.item };
    },
    getFailure: (state, { payload }: PayloadAction<Failure>) => {
      state[payload.id] = { readyStatus: "failure", error: payload.error };
    },
  },
});

export const userDataReducer = userData.reducer;

export const { getRequesting, getSuccess, getFailure } = userData.actions;

export const fetchUserData = (id: string): AppThunk => async (dispatch) => {
  dispatch(getRequesting(id));

  const { error, data } = await User.getUserData(id);

  if (error) {
    dispatch(getFailure({ id, error: error.message }));
  } else {
    dispatch(getSuccess({ id, item: data as IUser }));
  }
};

const shouldFetchUserData = (state: AppState, id: string) =>
  state.userDataReducer[id]?.readyStatus !== "success";

export const fetchUserDataIfNeed = (id: string): AppThunk => (
  dispatch,
  getState
) => {
  if (shouldFetchUserData(getState(), id)) return dispatch(fetchUserData(id));

  return null;
};
