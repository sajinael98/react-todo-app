import { Flex, Paper, Stack, Text, ThemeIcon } from '@mantine/core'
import React from 'react'
import classes from './NoData.module.css'
import { IconDatabase } from '@tabler/icons-react'

const NoData = () => {
    return (
        <Paper h={400} withBorder shadow='sm'>
            <Flex className={`${classes['no-data']} full-height`} justify='center' align='center'>
                <Stack align='center'>
                    <ThemeIcon variant='light' w={50} h={50}>
                        <IconDatabase size={'2rem'} />
                    </ThemeIcon>
                    <Text fw={500} c='dimmed'>No Data Available.</Text>
                </Stack>
            </Flex>
        </Paper>
    )
}

export default NoData