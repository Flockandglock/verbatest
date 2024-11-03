import { useState } from "react";


import classes from "./TasksItemList.module.css";
import { ITask } from "../../../types";
import { useAppDispatch } from "../../redux/store";
import { deletedTasksReducer, selectTasks, taskDoneReducer } from "../../redux/slices/TasksSlice";
import { useSelector } from "react-redux";


export const TasksItemList: React.FC<ITask> = ({title, id, done}) => {

  const dispatch = useAppDispatch();

  const [styleDone, setStyleDone] = useState(done);

  const removeTask = (id: string) => {
    dispatch(deletedTasksReducer(id))
  };

  const setDone = (id: string) => {
    dispatch(taskDoneReducer(id));
    setStyleDone(!styleDone);
  };

  
  return (
    <li className={classes.list}>
      <span className={styleDone ? classes.list_title : ''}>{title}</span>
      <button className={styleDone ? classes.btn_active : ''} onClick={() => setDone(id)}>Выполнено</button>
      <button onClick={() => removeTask(id)}>Удалить</button>
    </li>
  )
}
