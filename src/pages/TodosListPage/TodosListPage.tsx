import { ActionIcon, Group, Text, Tooltip } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import generateUniqueId from 'generate-unique-id'
import { useDispatch } from 'react-redux'
import AppSection from '../../components/AppSection'
import { TaskModalForm, TasksList } from '../../modules/tasks/presentation'
import { useTaskModalRef } from '../../modules/tasks/presentation/TaskModalForm'
import { Task } from '../../modules/tasks/types'
import { addTask } from '../../store/tasks/taskSlice'
import { useTasksSelector } from '../../store/tasks/use-tasks-selector'

const TodosListPage = () => {
  const { tasks } = useTasksSelector()
  const dispatch = useDispatch()
  const ref = useTaskModalRef()

  function addTaskHandler(data: Task) {
    data.id = generateUniqueId()
    dispatch(addTask(data))
  }
  
  return (
    <>
      <AppSection>
        <TaskModalForm title='Add Task' onSubmit={addTaskHandler} ref={ref as any} />
        <Group justify='space-between'>
          <Text fz='h3' fw={700}>Tasks</Text>
          <Tooltip label="Create Task">
            <ActionIcon onClick={() => ref.current?.open()}>
              <IconPlus className='icon' />
            </ActionIcon>
          </Tooltip>
        </Group>
      </AppSection>
      <AppSection>
        <TasksList tasks={tasks} />
      </AppSection>
    </>

  )
}

export default TodosListPage
