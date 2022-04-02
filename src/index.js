import { createRoot } from "react-dom/client";
import App from "./app/app";
import "./index.css";

const Script = () => <App />;

const root = createRoot(document.getElementById("root"));
root.render(<Script />);
