import { Container, ContainerProps } from '@mantine/core'
import { PropsWithChildren } from 'react'

const AppSection = ({ children, ...props }: PropsWithChildren<ContainerProps>) => {
    return (
        <Container size='xl' mt='md' {...props}>
            {children}
        </Container>
    )
}

export default AppSection