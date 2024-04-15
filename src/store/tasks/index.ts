interface TaskState {
    id?: string
    title: string
    description: string
    isDone?: boolean
    isImportant?: boolean
}


const initialState: TaskState = {
    id: '',
    description: '',
    title: ''
}