import { Group, Text } from '@mantine/core'
import { useDispatch } from 'react-redux'
import AppSection from '../../components/AppSection'
import { TasksList } from '../../modules/tasks/presentation'
import { getImportantTask } from '../../store/tasks/taskSlice'
import { useTasksSelector } from '../../store/tasks/use-tasks-selector'
import { useEffect } from 'react'

const ImportantTasksListPage = () => {
    const { filteredTasks } = useTasksSelector()
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getImportantTask())
    }, [])

    return (
        <>
            <AppSection>
                <Group justify='space-between'>
                    <Text fz='h3' fw={700}>Tasks</Text>
                </Group>
            </AppSection>
            <AppSection>
                <TasksList tasks={filteredTasks} />
            </AppSection>
        </>
    )
}

export default ImportantTasksListPage