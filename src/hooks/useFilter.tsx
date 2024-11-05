import { useMemo } from "react"

import { ITask, ITasksList } from "../../types"

export const useFilter = (
  tasks: Array<ITask>,
  filter: "all" | "process" | "complited" | "deleted",
) => {
  const filterTasks = useMemo(() => {
    switch (filter) {
      case "all":
        return tasks.filter(task => task.state === "all")
      case "process":
        return tasks.filter(task => task.state === "process")
      case "complited":
        return tasks.filter(task => task.done)
      case "deleted":
        return tasks.filter(task => task.state === "deleted")
      default:
        return filter
    }
  }, [tasks, filter])

  return filterTasks
}
