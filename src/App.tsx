import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import { DashboardPage, LoginPage } from "./pages";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.auth.index} element={<LoginPage />} />
      <Route path={routes.dashboard.index} element={<DashboardPage />} />
    </Routes>
  );
};

export default App;
