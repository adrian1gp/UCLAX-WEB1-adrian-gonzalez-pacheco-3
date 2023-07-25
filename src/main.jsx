import React from "react";
import ReactDOM from "react-dom/client";

// react router dom
import { HashRouter } from "react-router-dom";

// media Querys
import { MediaQueryProvider } from "@/Common/useMediaQuery";

// compents
import App from "./App";
// global css
import "./Common/css/normalize.css";
import "./Common/css/global.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <MediaQueryProvider>
      <App />
    </MediaQueryProvider>
  </HashRouter>
);
