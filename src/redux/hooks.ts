import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;    // KISA GÖSTERİMİ KAFANI KARIŞTIRIRSA - export const useAppDispatch: () => AppDispatch = () => { return useDispatch() };
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;