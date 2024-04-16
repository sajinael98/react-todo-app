import { AppShell } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { PropsWithChildren, useEffect } from 'react'
import AppHeader from '../AppHeader'
import AppMain from '../AppMain'
import AppNavbar from '../AppNavbar'
import { useLocation } from 'react-router-dom'

const AppLayout = ({ children }: PropsWithChildren) => {
  const [opend, { toggle, close }] = useDisclosure(false)
  const { pathname } = useLocation()

  useEffect(() => {
    close()
  }, [pathname])

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'md', collapsed: { mobile: !opend, desktop: false } }}>
      <AppHeader opend={opend} toggle={toggle} />
      <AppNavbar opend={opend} toggle={toggle} />
      <AppMain >{children}</AppMain>
    </AppShell>
  )
}

export default AppLayout