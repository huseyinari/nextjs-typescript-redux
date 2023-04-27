import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postReducer from "./post-store";

const myCustomSerializable = (val: any) => {
    // kontroller
    return true;
}
const reducers = combineReducers({ postReducer })

export const store = configureStore({ 
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            isSerializable: myCustomSerializable
        }
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;