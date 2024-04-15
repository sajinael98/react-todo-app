import { AppShellMain, AppShellSection, Box, Button, Flex, Group, Paper, ScrollArea, Stack, Text } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import { PropsWithChildren } from 'react'
import { AppMainProps } from './AppMain.interface'

const AppMain = ({ children }: PropsWithChildren<AppMainProps>) => {
    return (
        <AppShellMain py={70}>
            {/* <Flex h={'calc(100vh - 60px)'} justify='center' >
                <Paper w={400} h={500} withBorder mx='md' mt='xl' shadow='sm'>
                    <Stack className='full-height' p='md'>
                        <Group justify='space-between' grow>
                            <Box>
                                <Text fw={600} fz='lg'>Todos List</Text>
                            </Box>
                            <Group justify='flex-end'>
                                <Button size='compact-sm' leftSection={<IconPlus className='icon' stroke={1.5} />}>Add</Button>
                            </Group>
                        </Group>
                        <Box style={{ flex: 1, overflow: 'hidden' }}>
                            <ScrollArea className='full-height'>

                            </ScrollArea>
                        </Box>
                    </Stack>
                </Paper>
            </Flex> */}
            {children}
        </AppShellMain>
    )
}

export default AppMain