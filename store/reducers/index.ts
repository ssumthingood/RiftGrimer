import { combineReducers } from "redux";

const rootReducer = combineReducers({
    //reducers폴더에서 생성한 모든 reducer를 rootReducer에 포함
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
