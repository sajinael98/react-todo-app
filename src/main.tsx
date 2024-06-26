import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import './global.css'
import { Provider } from 'react-redux'
import { store } from "./store";
import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
