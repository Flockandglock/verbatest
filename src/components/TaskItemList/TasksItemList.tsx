import { useState } from "react"

import classes from "./TasksItemList.module.css"
import { ITask } from "../../../types"
import { useAppDispatch } from "../../redux/store"
import {
  deletedTasksReducer,
  selectTasks,
  taskDoneReducer,
} from "../../redux/slices/TasksSlice"
import { useSelector } from "react-redux"

export const TasksItemList: React.FC<ITask> = ({ title, id, done }) => {
  const dispatch = useAppDispatch()
  const { tasks, activeFilter } = useSelector(selectTasks)

  const removeTask = (id: string) => {
    dispatch(deletedTasksReducer(id))
  }

  // const setDone = (id: string) => {
  //   dispatch(taskDoneReducer(id))
  //   setStyleDone(!styleDone)
  // }

  const onToggleProp = (id: string) => {
    const prevStateTasks = (tasks: Array<ITask>) => {
      return tasks.map((task: ITask) =>
          task.id === id
          ? 
          {
            ...task,
            done: !task.done,
          }
          : 
          task
      )
    };
    
    const getPrevTasks = prevStateTasks(tasks);
    dispatch(taskDoneReducer(getPrevTasks));
  };


  return (
    <li className={classes.list}>
      <span className={done ? classes.list_title : ""}>{title}</span>
      <button
        className={done ? classes.btn_active : ""}
        onClick={() => onToggleProp(id)}
      >
        Выполнено
      </button>
      <button onClick={() => removeTask(id)}>Удалить</button>
    </li>
  )
}
