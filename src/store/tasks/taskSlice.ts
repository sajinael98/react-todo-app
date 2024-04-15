import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Task } from "../../modules/tasks/types"

interface State {
    tasks: Task[]
    filteredTasks?: Task[]
}

const initialState: State = {
    tasks: [],
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks = [...state.tasks, action.payload]
        },
        editTask: (state, action) => {
            state.tasks = state.tasks.map(task => {
                if (task.id === action.payload.id) {
                    return action.payload
                }
                return task
            })
        },
        markTaskAsImportant: (state, action: PayloadAction<String>) => {
            state.tasks = state.tasks.map((task) => {
                if (task.id === action.payload) {
                    task.isImportant = true
                }
                return task
            })
            state.filteredTasks = state.tasks.filter(task => task.isImportant)
        },
        markTaskAsNotImportant: (state, action: PayloadAction<String>) => {
            state.tasks = state.tasks.map((task) => {
                if (task.id === action.payload) {
                    task.isImportant = false
                }
                return task
            })
            state.filteredTasks = state.tasks.filter(task => task.isImportant)
        },
        completeTask: (state, action: PayloadAction<String>) => {
            state.tasks = state.tasks.map(task => {
                if (task.id === action.payload) {
                    task.isDone = true
                }
                return task
            })
            state.tasks = state.tasks.filter(task => !task.isDone)
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        getImportantTask: (state) => {
            state.filteredTasks = state.tasks.filter(task => task.isImportant)
        },

    },
})

export const { addTask, editTask, deleteTask, markTaskAsImportant, markTaskAsNotImportant, completeTask, getImportantTask } = tasksSlice.actions

export default tasksSlice.reducer
