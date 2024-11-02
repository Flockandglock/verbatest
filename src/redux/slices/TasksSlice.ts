import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { ITask, ITasksList, StateTask } from "../../../types";


const initialState: ITasksList = {
  tasks: [
    {
      id: '123909sa0dzxc',
      title: 'Приготовить еду',
      state: StateTask.PROCESS
    },
    {
      id: '123PsXsa0dzxc',
      title: 'Сходить за хлебом',
      state: StateTask.DONE
    }
  ]
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    deletedEmployeesReducer: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(
        (item) => item.id !== action.payload
      );
    },
    addTasksReducer: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload);
    },
  }
});

export const { addTasksReducer } = tasksSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTasks = (state: RootState) => state.tasksSlice;

export default tasksSlice.reducer;
