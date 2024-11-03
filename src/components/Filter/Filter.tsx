import { useState } from "react"

import classes from "./Filter.module.css"
import { useAppDispatch } from "../../redux/store"
import {
  filterProcessReducer,
  filterAllTasksReducer,
  selectTasks,
  filterDoneTasksReducer,
} from "../../redux/slices/TasksSlice"
import { useSelector } from "react-redux"

export const Filter = () => {
  const dispatch = useAppDispatch()
  const { processTasks, tasks, doneTasks, activeFilter } = useSelector(selectTasks)

  const setProcessFilter = () => {
    dispatch(filterProcessReducer())
  }

  const setAllTasksFilter = () => {
    dispatch(filterAllTasksReducer())
  }

  const setDoneTasksFilter = () => {
    dispatch(filterDoneTasksReducer())
  }

  return (
    <div className={classes.filter}>
      <button
        className={
          activeFilter === "process" ? classes.btn_active : classes.btn
        }
        type="button"
        onClick={() => setProcessFilter()}
      >
        Текущие дела ({processTasks.length})
      </button>

      <button
        className={
          activeFilter === "allTasks" ? classes.btn_active : classes.btn
        }
        type="button"
        onClick={() => setAllTasksFilter()}
      >
        Все дела ({tasks.length})
      </button>

      <button
        className={
          activeFilter === "doneTasks" ? classes.btn_active : classes.btn
        }
        type="button"
        onClick={() => setDoneTasksFilter()}
      >
        Выполеные дела ({doneTasks.length})
      </button>

      <button className={`${classes.btn}`} type="button">
        Корзина (0)
      </button>
    </div>
  )
}
