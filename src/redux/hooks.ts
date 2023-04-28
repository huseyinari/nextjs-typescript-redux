import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;    // Her component'te useDispatch() kullanmak yerine bu metodu yazıp useDispatch'i return ediyoruz. Bunu kullanacağız.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // Her component'te useSelector() kullanmak yerine bu metodu yazıp useSelector'ı return ediyoruz. Bunu kullanacağız.