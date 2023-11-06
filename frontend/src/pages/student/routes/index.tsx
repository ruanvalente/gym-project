import { Route, Routes } from "react-router-dom";

import { StudentRegister } from "../components/register";
import { StudentList } from "../components/student";
import { StudentEdit } from "../components/edit";

export function StudentRoutes() {
  return (
    <Routes>
      <Route index path="/" element={<StudentList />} />
      <Route index path="/register" element={<StudentRegister />} />
      <Route index path="/edit/:id" element={<StudentEdit />} />
    </Routes>
  );
}
