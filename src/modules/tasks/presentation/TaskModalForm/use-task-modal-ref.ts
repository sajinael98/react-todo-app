import { useRef } from "react";
import { TaskModalFormRef } from "./TaskModalForm.interface";

export const useTaskModalRef = () => useRef<TaskModalFormRef | undefined>()