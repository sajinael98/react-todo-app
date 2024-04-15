import { SubmitHandler } from "react-hook-form";
import { Task } from "../../types";

export interface TaskModalFormProps {
    title?: string
    values?: Task
    onSubmit: SubmitHandler<Task>
}

export interface TaskModalFormRef {
    resetValues: () => void
    open: () => void
    close: () => void
}