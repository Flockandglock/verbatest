import { useState } from "react"

import  "./Filter.css";
import { useAppDispatch } from "../../redux/store"
import { selectTasks } from "../../redux/slices/TasksSlice"
import { useSelector } from "react-redux"
import { IFilters } from "../../../types";

export const Filter = () => {
  const dispatch = useAppDispatch()
  const { tasks, activeFilter } = useSelector(selectTasks)

  // const setProcessFilter = () => {
  //   dispatch(filterProcessReducer())
  // }

  // const setAllTasksFilter = () => {
  //   dispatch(filterAllTasksReducer())
  // }

  // const setDoneTasksFilter = () => {
  //   dispatch(filterDoneTasksReducer())
  // }

  const renderFilters = (arr: Array<IFilters>) => {
    if (arr.length === 0) {
        return <div>Фильтры не найдены</div>
    }

    return arr.map(({name, label}) => {

        // проверяем класс активности, по умолчания activeFilter==='all'
        let btnClass = 'btn';

        if(activeFilter === name) {
            btnClass += ' btn-light'
        } else {
            btnClass += ' btn-outline-light'
        }

        return (
          <button className={btnClass}
                key={name}
                id={name}
                onClick={() => dispatch(activeFilterChanged(name))} >
            {label}
          </button>
        )
    })
};



  return (
    <div className={classes.filter}>
      <button
        className={
          activeFilter === "process" ? classes.btn_active : classes.btn
        }
        type="button"
        onClick={() => setProcessFilter()}
      >
        Текущие дела ()
      </button>

      <button
        className={
          activeFilter === "allTasks" ? classes.btn_active : classes.btn
        }
        type="button"
        onClick={() => setAllTasksFilter()}
      >
        Все дела ({tasks.length})
      </button>

      <button
        className={
          activeFilter === "doneTasks" ? classes.btn_active : classes.btn
        }
        type="button"
        onClick={() => setDoneTasksFilter()}
      >
        Выполеные дела ()
      </button>

      <button className={`${classes.btn}`} type="button">
        Корзина (0)
      </button>
    </div>
  )
}
