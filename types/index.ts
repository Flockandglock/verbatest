export interface IFilters {
    name: "all" | "process" | "complited" | "deleted",
    label: string
}

export interface ITask {
    id: string,
    title: string,
    done: boolean,
    state: string
}

export interface ITasksList {
    tasks: Array<ITask>
    filters: Array<IFilters>,
    activeFilter: "all" | "process" | "complited" | "deleted"
}