import { AppShellNavbar, AppShellSection, Button, Group, ScrollArea, Text, ThemeIcon, UnstyledButton } from '@mantine/core'
import { IconPencil } from '@tabler/icons-react'
import { links } from '../../constatns/links'
import { NavLink } from 'react-router-dom'
import classes from './AppNavbar.module.css'

const AppNavbar = () => {
    const navbarLinks = links.map(link => <NavLink key={link.href} style={{ textDecoration: 'none' }} to={link.href}>
        {({ isActive }) => (
            <UnstyledButton className={`${classes.link} full-width`} data-active={isActive || undefined} display={'block'} >
                <Group>
                    <ThemeIcon variant='light'>
                        <link.icon className='icon' />
                    </ThemeIcon>
                    <Text className={`${classes.title}`} >{link.title}</Text>
                </Group>
            </UnstyledButton>
        )}
    </NavLink>)

    return (
        <AppShellNavbar px='md'>
            <AppShellSection h={60}>
                <Group className='full-height' align='center'>
                    <ThemeIcon variant='light'>
                        <IconPencil />
                    </ThemeIcon>
                    <Text fw={700} fz='lg'>Todo App</Text>
                </Group>
            </AppShellSection>
            <AppShellSection grow component={ScrollArea}>
                {navbarLinks}
            </AppShellSection>
        </AppShellNavbar>
    )
}

export default AppNavbar