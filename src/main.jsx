import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Context
import TaskProvider from "./context/TaskContext.jsx";
import ThemeProvider from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
