export interface IFilters {
    name: string,
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
    activeFilter: string
}