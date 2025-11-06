import { createRoot } from "react-dom/client";
import { AppContext } from "./context/app-context/app-context.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <AppContext>
    <App />
  </AppContext>
);
