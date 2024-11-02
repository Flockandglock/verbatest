import { useState } from "react";

import { useSelector } from "react-redux";
import { selectTasks } from "../../redux/slices/TasksSlice";

import classes from "./TasksList.module.css";
import { ITask } from "../../../types";
import { TasksItemList } from "../TaskItemList/TasksItemList";


export const TasksList = () => {

  const {tasks} = useSelector(selectTasks);  

  const renderTasks = 'asd';

  const elements = tasks.map((item: ITask) => {
    const {id} = item;
    return <TasksItemList key={id} {...item}  />;
  });

  
  return (
    <ul className={classes.ul}>
      {elements ? elements : <h2>Загрузка задач</h2>}
    </ul>
  )
}
