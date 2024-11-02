import { useState } from "react";

import { addTasksReducer } from "../../redux/slices/TasksSlice";
import { useAppDispatch } from "../../redux/store";

import { StateTask } from "../../../types";

import classes from "./Header.module.css";


export const Header = () => {

  const dispatch = useAppDispatch();

  const [titleTasks, setTitleTasks] = useState("");

  const onChangeName = (e: string) => {
    setTitleTasks(e);
  };

  const addItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      addTasksReducer({
        id: 'asd',
        title: titleTasks,
        state: StateTask.PROCESS,
      })
    );
  };

  
  return (
    <div className={classes.wrapper_form}>
      <h3>Добавьте задачу</h3>
      <form className={classes.form} onSubmit={(e) => addItem(e)}>
        <button type="submit" className={classes.btn}>
          Добавить
        </button>

        <input
          type="text"
          onChange={(e) => onChangeName(e.target.value)}
          value={titleTasks}
          name="name"
          placeholder="Пополните список..."
        />

        <button type="submit" className={classes.btn}>
          Очистить
        </button>
      </form>
    </div>
  )
}
