import { SimpleGrid } from '@mantine/core'
import TaskCard from '../TaskCard'
import { TasksListProps } from './TasksList.interface'
import NoData from '../../../../components/NoData'

const TasksList = ({ tasks }: TasksListProps) => {
    if (!tasks || !tasks.length) {
        return <NoData />
    }
    return (
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
            {tasks.map((task, index) => <div key={task.id}>
                <TaskCard index={index} task={task} />
            </div>)}
        </SimpleGrid>
    )
}

export default TasksList