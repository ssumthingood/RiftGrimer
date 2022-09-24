import rootReducer from "./reducers";
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
import { AnyAction, Store, configureStore } from "@reduxjs/toolkit";

const makeStore: MakeStore<Store<any, AnyAction>> = (context: Context) => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: [],
        devTools: process.env.NODE_ENV !== "production",
    });
    return store;
};

export const wrapper = createWrapper<Store<any, AnyAction>>(makeStore, { debug: true });
