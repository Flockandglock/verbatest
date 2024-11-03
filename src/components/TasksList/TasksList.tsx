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



  if (tasks.length === 0) {
    return (
      <h3>Список задач пуст</h3>
    )
  } else {
    return (
      <ul className={classes.ul}>
        {elements ? elements : <h3>Загрузка задач</h3>}
      </ul>
    )
  }
}
