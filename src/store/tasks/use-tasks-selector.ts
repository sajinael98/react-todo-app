import { useSelector } from "react-redux";
import { RootState } from "..";

export const useTasksSelector = () => useSelector((state: RootState) => state.tasks)