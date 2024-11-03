import { useState } from "react";


import classes from "./TasksItemList.module.css";
import { ITask } from "../../../types";
import { useAppDispatch } from "../../redux/store";
import { deletedTasksReducer, taskDoneReducer } from "../../redux/slices/TasksSlice";


export const TasksItemList: React.FC<ITask> = ({title, id}) => {

  const dispatch = useAppDispatch();

  const [styleDone, setStyleDone] = useState(false);

  const removeTask = (id: string) => {
    dispatch(deletedTasksReducer(id))
  };

  const done = (id: string) => {
    dispatch(taskDoneReducer(id));
    setStyleDone(!styleDone);
  };

  
  return (
    <li className={classes.list}>
      <span className={styleDone ? classes.list_title : ''}>{title}</span>
      <button className={styleDone ? classes.btn_active : ''} onClick={() => done(id)}>Выполнено</button>
      <button onClick={() => removeTask(id)}>Удалить</button>
    </li>
  )
}
