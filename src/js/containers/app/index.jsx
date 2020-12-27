import Routes from "../routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../../store";
import { AuthProvider } from "../../providers";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
