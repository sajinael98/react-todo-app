import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { theme } from "./theme";

export default function App() {
  return <MantineProvider theme={theme} >
    <RouterProvider router={router} />
  </MantineProvider>;
}
