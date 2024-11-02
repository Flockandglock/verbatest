export enum StateTask {
    'PROCESS',
    'DONE'
}

export enum FilterTask {
    'Process task',
    'All task',
    'Done task',
    'Deleted task',
}

export interface ITask {
    id: string,
    title: string,
    state: StateTask
}

export interface ITasksList {
    tasks: Array<ITask>
}