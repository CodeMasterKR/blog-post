import { Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import PostDetail from "./pages/PostDetail"
import Category from "./pages/Category"
import Search from "./pages/Search"
import Login from "./pages/Login"
import ProtectedRoutes from "./components/ProtectedRoutes"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/admin" element={<div className="p-6 text-2xl font-bold">Admin Panel</div>} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App