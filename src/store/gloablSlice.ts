// 定义业务的数据模型，以及响应动作
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "./index";

// 初始化数据模型
const initialState = {
  counter: 100,
  user: {
    name: "jake",
  },
};

const globalSlice = createSlice({
  name: "gloabl",
  initialState,
  reducers: {
    // 定义同步动作
    addcount: (state, { payload }: PayloadAction<number>) => {
      state.counter += payload;
    },
  },
});

// 导出同步动作
export const addcount = globalSlice.actions.addcount;

// 定义并导出异步动作
export const addCountSync =
  (payload = 0): AppThunk =>
  async (dispatch, getState) => {
    const {
      global: { counter },
    } = getState();
    await new Promise((reslove) => {
      setTimeout(() => {
        reslove(true);
      }, 1000);
    });
    dispatch(addcount(payload + 2));
  };

export default globalSlice.reducer;
