import { Container, ContainerProps } from '@mantine/core'
import React, { PropsWithChildren } from 'react'

const AppSection = ({ children, ...props }: PropsWithChildren<ContainerProps>) => {
    return (
        <Container size='xl' mt='md' {...props}>
            {children}
        </Container>
    )
}

export default AppSection