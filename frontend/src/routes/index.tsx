import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route index element={<div>Dashboard</div>} />
      </Routes>
    </BrowserRouter>
  );
}
