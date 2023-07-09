import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from './redux/store'
import AppModal from './components/AppModal'
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <AppModal />
  </Provider>
);
