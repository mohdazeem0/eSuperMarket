import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { configStore } from "./state/store/configStore";
import { Home } from "./components/Home";

function App() {
  const localStore = configStore();
  return (
    <div>
      <Provider store={localStore}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
