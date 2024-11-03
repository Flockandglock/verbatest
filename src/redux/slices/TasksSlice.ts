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
    },
    {
      id: "123PsXsa0dzxc",
      title: "Сходить за хлебом",
      done: true,
    },
  ],
  deleted: [],
}

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    deletedTasksReducer: (state, action: PayloadAction<string>) => {
      const findTasks = state.tasks.find(
        (task: ITask) => task.id === action.payload,
      )

      if (findTasks) {
        console.log(findTasks)
        state.deleted.push(findTasks)
      }

      state.tasks = state.tasks.filter(item => item.id !== action.payload)
    },
    deletedAllTasksReducer: (state) => {
      state.deleted = state.tasks;

      state.tasks = [];
    },
    addTasksReducer: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload)
    },
    taskDoneReducer: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.map((task: ITask) => {
        if (task.id === action.payload) {
          return {
            ...task,
            done: !task.done
          } 
        } else {
          return task
        }
      })
    },
  },
})

export const { addTasksReducer, deletedTasksReducer, taskDoneReducer, deletedAllTasksReducer } = tasksSlice.actions


export const selectTasks = (state: RootState) => state.tasksSlice

export default tasksSlice.reducer
