import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router-dom";

import { Layout, NoPage } from "./components";
import "./index.css";
import Overview from "./overview/Overview";
import Web from "./web/Web";
import Mobile from "./mobile/Mobile";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="web" element={<Web />} />
          <Route path="mobile" element={<Mobile />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
