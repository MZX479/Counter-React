import ReactDOM from "react-dom/client";
import "./index.scss";
import Counter from "./mainApp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Counter />);
