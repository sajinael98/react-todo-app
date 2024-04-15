import { ActionIcon, AppShellHeader, Group, TextInput, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSearch, IconSun } from '@tabler/icons-react';
import cx from 'clsx';
import classes from './AppHeader.module.css';

const AppHeader = () => {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    return (
        <AppShellHeader withBorder={false}>
            <Group className='full-height' justify='space-between' px='md'>
                <Group>
                    <TextInput w={300} leftSection={<IconSearch className='icon' />} placeholder='Search' />
                </Group>
                <Group>
                    <ActionIcon
                        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
                        variant="light"
                        size="md"
                        aria-label="Toggle color scheme"
                    >
                        <IconSun className={cx('icon', classes.light)} stroke={1.5} />
                        <IconMoon className={cx('icon', classes.dark)} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Group>
        </AppShellHeader>
    );
}

export default AppHeader