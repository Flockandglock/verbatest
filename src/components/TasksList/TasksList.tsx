import { useSelector } from "react-redux";
import { selectTasks } from "../../redux/slices/TasksSlice";

import classes from "./TasksList.module.css";
import { ITask } from "../../../types";
import { TasksItemList } from "../TaskItemList/TasksItemList";


export const TasksList = () => {

  const {tasks, processTasks, doneTasks, activeFilter} = useSelector(selectTasks);  

  const renderTasks = () => {
    switch (activeFilter) {
      case 'process':
        return processTasks.map((item: ITask) => {
          const {id} = item;
          return <TasksItemList key={id} {...item} />;
        })
      case 'allTasks':
        return tasks.map((item: ITask) => {
          const {id} = item;
          return <TasksItemList key={id} {...item} />;
        })
      case 'doneTasks':
        return doneTasks.map((item: ITask) => {
          const {id} = item;
          return <TasksItemList key={id} {...item} />;
        })
      
    
      default:
        break;
    }
  };

  const elements = renderTasks();



  if (tasks.length === 0) {
    return (
      <h3>Список задач пуст</h3>
    )
  } else {
    return (
      <ul className={classes.ul}>
        {elements ? elements : <h3>Список задач пуст</h3>}
      </ul>
    )
  }
}
