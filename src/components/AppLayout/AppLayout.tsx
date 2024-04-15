import { AppShell } from '@mantine/core'
import AppHeader from '../AppHeader'
import AppMain from '../AppMain'
import AppNavbar from '../AppNavbar'
import { PropsWithChildren } from 'react'
import { AppLayoutProps } from './AppLayout.interface'

const AppLayout = ({ children }: PropsWithChildren<AppLayoutProps>) => {
  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'md', collapsed:{mobile: true} }}>
      <AppHeader />
      <AppNavbar />
      <AppMain >{children}</AppMain>
    </AppShell>
  )
}

export default AppLayout