import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./component/layout/DashboardLayout";
import DashBoard from "./component/pages/DashBoard";
import Users from "./component/pages/Users";
import Products from "./component/pages/Products";
import Login from "./component/pages/Login";
import Signup from "./component/pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashBoard />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  );
}

export default App;
