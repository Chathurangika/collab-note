import "./App.css";
import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import routes from "./routes";
import { DashboardPage, LoginPage } from "./pages";
import { useAuth } from "./context/AuthContext";

const PrivateOutlet: React.FC = () => {
  const { authenticated } = useAuth();
  return authenticated ? <Outlet /> : <Navigate to={routes.auth.login} />;
};

const GuestOutlet: React.FC = () => {
  const { authenticated } = useAuth();
  return authenticated ? <Navigate to={routes.dashboard.index} /> : <Outlet />;
};

const App: React.FC = () => {
  return (
    <Routes>
    <Route path="/" element={<Navigate to={routes.dashboard.index} />} />
    {/* <Route path={routes.auth.login} element={<LoginPage />} /> */}
    <Route path={routes.auth.index} element={<GuestOutlet />}>
      <Route path={routes.auth.login} element={<LoginPage />} />
    </Route>

    <Route path={routes.dashboard.index} element={<PrivateOutlet />}>
      <Route index element={<DashboardPage />} />
    </Route>
  </Routes>
  );
};

export default App;
