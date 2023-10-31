import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { StudentList } from "../pages/student-list";
import { DefaultLayout } from "../layouts";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<DefaultLayout />}>
          <Route path="/" index element={<StudentList />} />
          <Route path="/home" element={<div>Home</div>} />
          <Route path="/profile" element={<div>Home</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
