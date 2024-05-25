import { configureStore } from '@reduxjs/toolkit';
import bookingHistoryReducer from "@/redux/slice/bookingHistory-slice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
      bookingHistory: bookingHistoryReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
    }),
});