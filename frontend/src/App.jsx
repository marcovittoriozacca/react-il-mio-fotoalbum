import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import DashboardLayout from "./layouts/DashboardLayout"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import DashShowPhoto from "./pages/DashShowPhoto"
import CreatePhoto from "./pages/CreatePhoto"
import EditPhoto from "./pages/EditPhoto"
import Categories from "./pages/Categories"
import CreateCategory from "./pages/CreateCategory"
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        {/* home page at path "/" */}
        <Route index element={<Home/>}/>
        {/* not found route */}
        <Route path="login" element={<Login/>}/>
      </Route>
    
      {/* admin and logged user dashboard */}
      <Route path="/dashboard" element={<DashboardLayout/>}>
        <Route index element={<Dashboard/>}/>

        {/* photos routes */}
        <Route path="create-new-photo" element={<CreatePhoto/>}/>
        <Route path=":slug" element={<DashShowPhoto/>}/>
        <Route path="edit/:slug" element={<EditPhoto/>}/>

        {/* categories routes */}
        <Route path="categories/list" element={<Categories/>}/>
        <Route path="categories/create" element={<CreateCategory/>}/>

      </Route>

      <Route path="*" element={<NotFound/>}/>
    </Routes>
    
    </>
  )
}

export default App
