import { useMemo } from "react";

import { FilterTask, ITask, ITasksList } from "../../types";

// Этот хук нужен, чтобы использовать его в купе с последним. Данный хук у нас сортирует список по выбранному фильтру
export const useFilter = (tasks: ITasksList, filter: FilterTask) => {

    const filterTasks = useMemo(() => {
       
    }, [tasks, filter]);

    return filterTasks
};