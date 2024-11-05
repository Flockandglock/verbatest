import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"
import { ITask, ITasksList } from "../../../types"

const initialState: ITasksList = {
  tasks: [
    {
      id: "123909sa0dzxc",
      title: "Приготовить еду",
      done: false,
      state: "process",
    },
    {
      id: "223PsXsa4892-0dzxc",
      title: "Помыть полы",
      done: false,
      state: "process",
    },
    {
      id: "123PsXsa0dzxc",
      title: "Сходить за хлебом",
      done: false,
      state: "process",
    },
  ],
  filters: [
    {
      name: "all",
      label: "Все дела",
    },
    {
      name: "process",
      label: "Текущие дела",
    },
    {
      name: "complited",
      label: "Выполеные дела",
    },
    {
      name: "deleted",
      label: "Корзина",
    },
  ],
  activeFilter: "all",
}

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    deletedTasksReducer: (state, action: PayloadAction<Array<ITask>>) => {
      state.tasks = action.payload;
    },
    deletedAllTasksReducer: state => {
      state.tasks = []
    },
    addTasksReducer: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload)
    },
    taskDoneReducer: (state, action: PayloadAction<Array<ITask>>) => {
      state.tasks = action.payload
    },
    activeFilterChangedReducer: (state, action: PayloadAction<"all" | "process" | "complited" | "deleted">) => {
      state.activeFilter = action.payload;
    }
  },
})

export const {
  addTasksReducer,
  deletedTasksReducer,
  taskDoneReducer,
  deletedAllTasksReducer,
  activeFilterChangedReducer
} = tasksSlice.actions

export const selectTasks = (state: RootState) => state.tasksSlice

export default tasksSlice.reducer
