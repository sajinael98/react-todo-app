import { ActionIcon, Tooltip, createTheme } from "@mantine/core";

export const theme = createTheme({
    primaryColor: 'green',
    components: {
        Tooltip: Tooltip.extend({
            defaultProps: {
                position: 'bottom'
            }
        }),
        ActionIcon: ActionIcon.extend({
            defaultProps: {
                variant: 'light',
            }
        })
    }
});
