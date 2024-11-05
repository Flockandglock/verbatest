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

export const TasksItemList: React.FC<ITask> = ({ title, id, done, state }) => {
  const dispatch = useAppDispatch();
  const { tasks } = useSelector(selectTasks);


  const onToggleProp = (id: string) => {
    const prevStateTasks = (tasks: Array<ITask>) => {
      return tasks.map((task: ITask) =>
          task.id === id
          ? 
          {
            ...task,
            done: !task.done,
            state: task.state === "process" ? "complited" : "process"
          }
          : 
          task
      )
    };
    
    const getPrevTasks = prevStateTasks(tasks);
    dispatch(taskDoneReducer(getPrevTasks));
  };

  const removeTask = (id: string) => {
    const prevStateTasks = (tasks: Array<ITask>) => {
      return tasks.map((task: ITask) =>
          task.id === id
          ? 
          {
            ...task,
            state: "deleted",
          }
          : 
          task
      )
    };
    
    const getPrevTasks = prevStateTasks(tasks);
    dispatch(deletedTasksReducer(getPrevTasks));
  };


  return (
    <li className={classes.list}>
      <span className={done ? classes.list_title : ""}>{title}</span>
      <button
        disabled={state === 'deleted'}
        className={done ? classes.btn_active : ""}
        onClick={() => onToggleProp(id)}
      >
        Выполнено
      </button>
      <button onClick={() => removeTask(id)} disabled={state === 'deleted'}>Удалить</button>
    </li>
  )
}
