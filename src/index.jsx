import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import store from "./redux/store.js";
import App from "./components/App/App.jsx";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme()
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <CssBaseline />
        <App />
      </Provider>
  </React.StrictMode>
);
