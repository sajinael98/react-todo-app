import { AppShellNavbar, AppShellSection, Burger, Group, ScrollArea, Text, ThemeIcon, UnstyledButton, em } from '@mantine/core'
import { IconPencil } from '@tabler/icons-react'
import { NavLink } from 'react-router-dom'
import { links } from '../../constants/links'
import { NavbarState } from '../../types/navbar'
import classes from './AppNavbar.module.css'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@mantine/hooks'

const AppNavbar = ({ opend, toggle }: NavbarState) => {
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

    const navbarLinks = links.map((link, index) => <NavLink key={link.href} style={{ textDecoration: 'none' }} to={link.href}>
        {({ isActive }) => (
            <UnstyledButton component={motion.button} animate={opend || !isMobile ? { x: 0, transition: { delay: 0.5 * index } } : { x: -500 }} className={`${classes.link} full-width`} data-active={isActive || undefined} >
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
                <Group className='full-height' align='center' justify='space-between'>
                    <Group >
                        <ThemeIcon variant='light'>
                            <IconPencil />
                        </ThemeIcon>
                        <Text fw={700} fz='lg'>Todo App</Text>
                    </Group>
                    <Group hiddenFrom='md'>
                        <Burger opened={opend} onClick={toggle} />
                    </Group>
                </Group>
            </AppShellSection>
            <AppShellSection grow component={ScrollArea} mt={'sm'}>
                {navbarLinks}
            </AppShellSection>
        </AppShellNavbar>
    )
}

export default AppNavbar