

export enum FilterTask {
    'Process task',
    'All task',
    'Done task',
    'Deleted task',
}

export interface ITask {
    id: string,
    title: string,
    done: boolean
}

export interface ITasksList {
    tasks: Array<ITask>
    deleted: Array<ITask>
}