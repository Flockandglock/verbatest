import { useState } from "react";


import classes from "./TasksItemList.module.css";


export const TasksItemList = ({}) => {

  

  
  return (
    <li className={classes.list}>
      <span>TasksItemList</span>
      <button>Выполнено</button>
      <button>Удалить</button>
    </li>
  )
}
