import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

import DashboardLayout from "./layouts/DashboardLayout"
import Dashboard from "./pages/Dashboard"
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        {/* home page at path "/" */}
        <Route index element={<Home/>}/>
        {/* not found route */}
      </Route>
      
      {/* admin and logged user dashboard */}
      <Route path="/dashboard" element={<DashboardLayout/>}>
         <Route index element={<Dashboard/>}/>
      </Route>

      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
