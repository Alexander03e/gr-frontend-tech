import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/gr-frontend-tech">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
