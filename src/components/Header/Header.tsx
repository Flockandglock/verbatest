import { useState } from "react";

import { addTasksReducer, deletedAllTasksReducer } from "../../redux/slices/TasksSlice";
import { useAppDispatch } from "../../redux/store";

import classes from "./Header.module.css";


export const Header = () => {

  const dispatch = useAppDispatch();

  const [titleTasks, setTitleTasks] = useState("");

  const onChangeName = (e: string) => {
    setTitleTasks(e);
  };

  const addItem = () => {
   

    dispatch(
      addTasksReducer({
        id: String(new Date()),
        title: titleTasks,
        done: false,
        state: "process",
      })
    );

    setTitleTasks("");
  };

  const removeAll = () => {
    

    dispatch(deletedAllTasksReducer());
  };

  
  return (
    <div className={classes.wrapper_form}>
      <h3>Добавьте задачу</h3>
      <div className={classes.form} >
        <button className={classes.btn} onClick={() => addItem()}>
          Добавить
        </button>

        <input
          type="text"
          onChange={(e) => onChangeName(e.target.value)}
          value={titleTasks}
          name="name"
          placeholder="Пополните список..."
        />

        <button className={classes.btn} onClick={() => removeAll()}>
          Очистить
        </button>
      </div>
    </div>
  )
}
