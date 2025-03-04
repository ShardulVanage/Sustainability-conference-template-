import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PUCENotification from "./components/PUCE_notification.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <PUCENotification/>
  </StrictMode>
);
