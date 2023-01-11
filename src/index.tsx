import ReactDOM from "react-dom/client";
import "./index.css";
import Counter from "./mainApp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Counter />);
