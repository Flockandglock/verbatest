import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import  tasksSlice from "./slices/TasksSlice";




export const store = configureStore({
  reducer: {
    tasksSlice
  },
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
