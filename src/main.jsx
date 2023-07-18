import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import "./components/i18n/i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Suspense fallback={<div style={{fontSize:'50px',paddingTop:'100px',textAlign:'center'}}>Loading...</div>}>
        <Provider store={store}>
          <App />
        </Provider>
      </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
