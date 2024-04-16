import { AppShellMain } from '@mantine/core'
import { PropsWithChildren } from 'react'

const AppMain = ({ children }: PropsWithChildren) => {
    return (
        <AppShellMain py={70}>
            {children}
        </AppShellMain>
    )
}

export default AppMain