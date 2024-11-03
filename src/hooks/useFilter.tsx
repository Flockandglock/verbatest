import { useMemo } from "react";

import { FilterTask, ITask, ITasksList } from "../../types";


export const useFilter = (tasks: Array<ITask>, filter: FilterTask) => {

    const filterTasks = useMemo(() => {
       
       if (filter) {
        // @ts-ignore
            return [...tasks].sort((a, b) => a[filter].localeCompare(b[filter]))
       }
       return tasks;
    }, [tasks, filter]);

    return filterTasks
};
