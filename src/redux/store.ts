import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postReducer from "./post-store";

const myCustomSerializable = (val: any) => {
    // kontroller
    return true;    // eğer false dönerse action'dan dönen object'i state'e atamıyoruz. addPost() action'ını kullanırken hata verdi bu middleware yokken.
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