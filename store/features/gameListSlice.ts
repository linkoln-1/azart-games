import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeGameObject } from "@/types/typeGameObject";

interface InitialState {
  loading: boolean;
  gameList: TypeGameObject;
}

const initialState: InitialState = {
  loading: false,
  gameList: {
    title: "",
    provider: "",
    collections: {},
    real: {},
    demo: "",
    key: "",
  },
};

export const fetchGameList = createAsyncThunk(
  "get/game/list",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3000/api/games");

      if (!response.ok) {
        return rejectWithValue("server is not okey");
      }
      return response.json();
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const gameListSlice = createSlice({
  name: "game-center",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGameList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchGameList.fulfilled,
      (state, action: PayloadAction<TypeGameObject>) => {
        state.loading = false;
        state.gameList = action.payload;
      },
    );
    builder.addCase(fetchGameList.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default gameListSlice.reducer;
