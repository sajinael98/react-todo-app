import { ActionIcon, Box, Card, Group, Menu, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconCalendar, IconCheck, IconDots, IconEdit, IconStar, IconStarFilled, IconTrash } from '@tabler/icons-react'
import { useDispatch } from 'react-redux'
import { TaskModalForm } from '..'
import { completeTask, deleteTask, editTask, markTaskAsImportant, markTaskAsNotImportant } from '../../../../store/tasks/taskSlice'
import { Task } from '../../types'
import { useTaskModalRef } from '../TaskModalForm'
import { TaskCardProps } from './TaskCard.interface'
import classes from './TaskCard.module.css'
import React, { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

const TaskCardRef = React.forwardRef<HTMLDivElement, PropsWithChildren>(({ children }, ref) => {
    return (
        <Card ref={ref} shadow="sm" radius="sm" withBorder className={classes['task-card']}>
            {children}
        </Card>
    );
});
const ATaskCard = motion(TaskCardRef)

const TaskCard = ({ task, index }: TaskCardProps) => {
    const ref = useTaskModalRef()
    const dispatch = useDispatch()

    const { date, description, title, id, isImportant } = task

    function editHandler(data: Task) {
        dispatch(editTask(data))
    }

    function markTaskAsImportantHandler() {
        dispatch(markTaskAsImportant(id as any))
    }

    function markTaskAsNotImportantHandler() {
        dispatch(markTaskAsNotImportant(id as any))
    }

    function deleteHandler() {
        dispatch(deleteTask(id as any))
    }

    function completeTaskHandler() {
        dispatch(completeTask(id as any))
    }

    return (
        <>
            <TaskModalForm onSubmit={editHandler} values={task} ref={ref as any} />
            <ATaskCard initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: index * 0.2 } }}>
                <Stack gap='sm'>
                    <Group justify='flex-end' gap='xs'>
                        {isImportant && <ActionIcon onClick={markTaskAsNotImportantHandler} size='sm' color='yellow'>
                            <IconStarFilled className='icon' />
                        </ActionIcon>}
                        {!isImportant && <ActionIcon onClick={markTaskAsImportantHandler} size='sm' variant='subtle' color='yellow'>
                            <IconStar className='icon' />
                        </ActionIcon>}
                        <Menu width={200}
                            transitionProps={{ transition: 'pop' }}
                            withArrow
                            position="bottom-end"
                            withinPortal
                        >
                            <Menu.Target>
                                <ActionIcon variant="subtle" color="gray" size='sm'>
                                    <IconDots className='icon' />
                                </ActionIcon>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item onClick={completeTaskHandler} leftSection={<IconCheck className='icon' />}>
                                    Mark as Done
                                </Menu.Item>
                                <Menu.Item onClick={() => ref.current?.open()} leftSection={<IconEdit className='icon' />}>
                                    Edit
                                </Menu.Item>
                                <Menu.Item onClick={() => deleteHandler()} color='red' leftSection={<IconTrash className='icon' />}>
                                    Remove
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </Group>
                    <Box mah={100}>
                        <Text size='md'>{title}</Text>
                        <Text size='xs' c='dimmed' lineClamp={3} >{description}</Text>
                    </Box>
                    <Group gap='xs'>
                        <ThemeIcon variant='light' size='xs'>
                            <IconCalendar />
                        </ThemeIcon>
                        <Text size='sm'>{date}</Text>
                    </Group>
                </Stack>
            </ATaskCard>
        </>
    )
}

export default TaskCard