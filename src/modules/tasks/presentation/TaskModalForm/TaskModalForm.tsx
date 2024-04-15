import { Button, Checkbox, Group, Modal, Stack, TextInput, Textarea } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { forwardRef, useEffect, useImperativeHandle } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TaskModalFormProps, TaskModalFormRef } from './TaskModalForm.interface'
import { DatePickerInput } from '@mantine/dates';
import dayjs from 'dayjs';

const TaskModalForm = forwardRef<TaskModalFormRef, TaskModalFormProps>(
    ({ onSubmit, values = {
        title: '',
        description: '',
        isDone: false,
        isImportant: false,
        date: dayjs(new Date()).format("YYYY-MM-DD")
    }, title = '' }, ref) => {
        const [opened, { close, open }] = useDisclosure(false)
        const form = useForm({
            values
        })
        function closeHandler() {
            close()
            form.reset()
        }
        useImperativeHandle(ref, () => ({
            resetValues: form.reset,
            close: closeHandler,
            open
        }), [])

        useEffect(() => {
            if (form.formState.isSubmitSuccessful) {
                close()
                form.reset()
            }
        }, [form.formState.isSubmitSuccessful])

        const primaryLabel = values.id ? 'Update' : 'Create'

        return (
            <Modal title={title} onClose={closeHandler} opened={opened}>
                <Stack>
                    <Controller name='date' control={form.control} render={({ field: { value, onChange, ...field }, fieldState }) => <DatePickerInput
                        label="Creation Date"
                        styles={{ label: { marginBottom: 5 } }}
                        value={dayjs(value).toDate()}
                        onChange={(e) => onChange(dayjs(e).format("YYYY-MM-DD"))}
                        {...field}
                        disabled
                    />} />
                    <Controller rules={{ required: true }} name='title' control={form.control} render={({ field, fieldState }) => <TextInput label='Title' styles={{ label: { marginBottom: 5 } }} error={fieldState.invalid && fieldState.error?.message} {...field} />} />
                    <Controller rules={{ required: true }} name='description' control={form.control} render={({ field, fieldState }) => <Textarea label='Description' styles={{ input: { height: 120 }, label: { marginBottom: 5 } }} error={fieldState.invalid && fieldState.error?.message} {...field} />} />
                    <Controller name='isImportant' control={form.control} render={({ field: { value, ...field }, fieldState }) => <Checkbox label='Mark As Important' styles={{ label: { marginBottom: 5 } }} error={fieldState.invalid && fieldState.error?.message} {...field} checked={value} />} />
                    <Group justify='flex-end'>
                        <Button variant='light' size='compact-md' color='red' onClick={() => form.reset()}>Reset</Button>
                        <Button size='compact-md' disabled={!form.formState.isDirty} onClick={form.handleSubmit(onSubmit)}>{primaryLabel}</Button>
                    </Group>
                </Stack>
            </Modal>
        )
    }
)

export default TaskModalForm