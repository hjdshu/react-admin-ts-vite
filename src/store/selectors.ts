// 统一导出值
import { RootState } from "./index";

const selectCount = (state: RootState) => state.global.counter;
const selectUser = (state: RootState) => state.global.user;

export { selectCount, selectUser };
