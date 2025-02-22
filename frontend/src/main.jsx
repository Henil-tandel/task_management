import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import "./index.css";
import TaskProvider from "./context/TaskContext";
 // ✅ Import TaskProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <TaskProvider> {/* ✅ Wrap App in TaskProvider */}
        <App />
      </TaskProvider>
    </UserProvider>
  </BrowserRouter>
);