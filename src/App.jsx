import GlobalProvider from "./context/GlobalProvider";
import Rutes from "./rutes/Rutes";
import "./index.css";

export default function App() {
  return (
    <GlobalProvider>
      <Rutes />
    </GlobalProvider>
  );
}
