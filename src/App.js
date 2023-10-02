import Vitrine from "./pages/Vitrine";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Vitrine />
      </HashRouter>
    </div>
  );
}

export default App;
