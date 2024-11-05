
import "./Filter.css"
import { useAppDispatch } from "../../redux/store"
import {
  activeFilterChangedReducer,
  selectTasks,
} from "../../redux/slices/TasksSlice"
import { useSelector } from "react-redux"
import { IFilters } from "../../../types"

export const Filter = () => {
  const dispatch = useAppDispatch();
  const { tasks, filters, activeFilter } = useSelector(selectTasks);


  const renderFilters = (arr: Array<IFilters>) => {
    if (arr.length === 0) {
      return <div>Фильтры не найдены</div>
    }

    return arr.map(({ name, label }) => {
      let btnClass = "btn";

      if (activeFilter === name) {
        btnClass = "btn_active"
      }

      const currentCount = tasks.filter(task => task.state === name);

      return (
        <button
          className={btnClass}
          key={name}
          id={name}
          onClick={() => dispatch(activeFilterChangedReducer(name))}
        >
          {label} ({name === "all" ? tasks.length : currentCount.length})
        </button>
      )
    })
  }

  const elements = renderFilters(filters);

  return <div className="filter">{elements}</div>
}
