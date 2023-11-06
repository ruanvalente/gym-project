import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts";
import { LoginPage } from "../pages/login";
import { StudentRoutes } from "../pages/student";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<LoginPage />} />
        <Route element={<DefaultLayout />}>
          <Route path="/student/*" element={<StudentRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
