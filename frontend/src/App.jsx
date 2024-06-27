import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import DashboardLayout from "./layouts/DashboardLayout"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import DashShowPhoto from "./pages/DashShowPhoto"
import CreatePhoto from "./pages/CreatePhoto"
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
        <Route path="create-new-photo" element={<CreatePhoto/>}/>
        <Route path=":slug" element={<DashShowPhoto/>}/>
      </Route>

      <Route path="*" element={<NotFound/>}/>
    </Routes>
    
    </>
  )
}

export default App
