import { useSelector } from "react-redux"
import { selectTasks } from "../../redux/slices/TasksSlice"

import classes from "./TasksList.module.css"
import { ITask } from "../../../types"
import { TasksItemList } from "../TaskItemList/TasksItemList"
import { useFilter } from "../../hooks/useFilter"

export const TasksList = () => {
  const { tasks, activeFilter } = useSelector(selectTasks);

  const sortedAndSearchedPost = useFilter(tasks, activeFilter);

  const renderTasksList = (arr: Array<ITask>) => {
    if (arr.length === 0) {
      return <h3>Задач пока нет</h3>
    }

    return arr.map((task: ITask) => {
      const { id } = task
      return <TasksItemList key={id} {...task} />
    })
  };

  const elements = renderTasksList(sortedAndSearchedPost);

  if (tasks.length === 0) {
    return <h3>Список задач пуст</h3>
  } else {
    return (
      <ul className={classes.ul}>
        {elements ? elements : <h3>Список задач пуст</h3>}
      </ul>
    )
  }
}
